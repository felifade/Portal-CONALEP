import React, { useState, useRef } from 'react';
import { BookOpen, PenLine, Wrench, Package, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { curriculumData } from '../data/curriculum';

const getWeekMeta = (weekId) => {
  for (const ra of curriculumData.ras) {
    const found = ra.weeks?.find(w => w.id === weekId);
    if (found) return { label: found.label, raTitle: ra.title };
  }
  return { label: `Semana ${weekId.replace('W', '')}`, raTitle: '' };
};

const SmartText = ({ text }) => {
  if (!text) return null;

  const lines = text.split(/\n|(?=\s[0-9]\.\s)|(?=\s[-•]\s)/g).map(l => l.trim()).filter(l => l.length > 0);

  if (lines.length <= 1) return <p>{text}</p>;

  const isNumbered = lines.some(line => /^[0-9]+\.\s/.test(line));
  const isBulleted = lines.some(line => /^[-•]\s/.test(line));

  if (isNumbered) {
    return (
      <ol className="smart-list numbered">
        {lines.map((line, i) => (
          <li key={i}>{line.replace(/^[0-9]+\.\s/, '')}</li>
        ))}
      </ol>
    );
  }

  if (isBulleted) {
    return (
      <ul className="smart-list bulleted">
        {lines.map((line, i) => (
          <li key={i}>{line.replace(/^[-•]\s/, '')}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="smart-paragraphs">
      {lines.map((line, i) => <p key={i}>{line}</p>)}
    </div>
  );
};

const BLOCK_META = {
  theory:  { icon: <BookOpen size={13} />,     label: 'Teoría (10 min)',      cls: 'theory' },
  notebook:{ icon: <PenLine size={13} />,      label: 'Actividad en libreta', cls: 'notebook' },
  practice:{ icon: <Wrench size={13} />,       label: 'Práctica en PC',       cls: 'practice' },
  product: { icon: <Package size={13} />,      label: 'Producto de la sesión',cls: 'product-block' },
  teacher: { icon: <GraduationCap size={13} />,label: 'Solo Docente — Notas', cls: 'teacher-only' },
};

const PedBlock = ({ type, children }) => {
  const meta = BLOCK_META[type];
  return (
    <div className={`pedagogical-block ${meta.cls}`}>
      <h4 className="block-title">{meta.icon} {meta.label}</h4>
      <div className="block-body">{children}</div>
    </div>
  );
};

const CodeBlock = ({ code, isRef = false }) => {
  const [status, setStatus] = useState('Copiar');
  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setStatus('¡Copiado!');
      setTimeout(() => setStatus('Copiar'), 2000);
    });
  };
  return (
    <div className={`pedagogical-block code-section ${isRef ? 'code-ref' : ''}`}>
      <div className="block-header-row">
        <h4 className="block-title">
          {isRef ? '🔑 Código completo (solo docente)' : '📟 Código base'}
        </h4>
        <button className="copy-btn" onClick={handleCopy}>{status}</button>
      </div>
      <div className="code-editor-container allow-copy">
        <pre className="code-editor"><code>{code}</code></pre>
      </div>
    </div>
  );
};

const LazyImg = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    loading="lazy"
    onError={e => { e.target.parentElement.style.display = 'none'; }}
  />
);

/* ── Dual components ──────────────────────────────────────── */
const DualActivityBlock = ({ activity }) => (
  <div className="dual-activity-block">
    <div className="dual-header">
      <span className="dual-icon">🚀</span>
      <h4>{activity.title}</h4>
    </div>
    <div className="dual-body">
      <div className="dual-instruction">
        <SmartText text={activity.instruction} />
      </div>
      {activity.image && (
        <div className="infographic-container">
          <LazyImg
            src={new URL(`../assets/${activity.image}`, import.meta.url).href}
            alt={activity.title}
            className="infographic-img"
          />
        </div>
      )}
    </div>
  </div>
);

const DualGallery = ({ activities }) => {
  const visual = activities?.filter(a => a.image) || [];

  if (visual.length === 0) {
    return (
      <div className="dual-gallery-empty">
        <p>No hay infografías disponibles para esta semana.</p>
      </div>
    );
  }

  return (
    <div className="dual-gallery-view">
      <h2 className="gallery-title">🖼️ Galería de Infografías</h2>
      <div className="gallery-grid">
        {visual.map((activity, idx) => (
          <div key={idx} className="gallery-item">
            <h3 className="gallery-item-title">{activity.title}</h3>
            <div className="gallery-img-wrapper">
              <LazyImg
                src={new URL(`../assets/${activity.image}`, import.meta.url).href}
                alt={activity.title}
                className="gallery-img"
              />
            </div>
            <div className="gallery-item-instruction">
              <SmartText text={activity.instruction} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

/* ── Day Tabs ──────────────────────────────────────────────── */
const DayTabs = ({ days, activeIndex, onSelect }) => (
  <div className="day-tabs-container">
    {days.map((day, idx) => (
      <button
        key={day.id}
        className={`day-tab-btn ${activeIndex === idx ? 'active' : ''}`}
        onClick={() => onSelect(idx)}
      >
        {day.label.split(' — ')[0]}
      </button>
    ))}
  </div>
);

/* ── Hour Page ─────────────────────────────────────────────── */
const HourPage = ({ hour, index, total, isTeacherMode, onPrev, onNext, flipDir, weekMeta, weekNumber, dayLabel }) => (
  <div className={`notebook-page-wrapper nocopy flip-${flipDir || 'fwd'}`}>
    {/* Breadcrumb */}
    <div className="breadcrumb">
      <span className="breadcrumb-item">{weekMeta.raTitle}</span>
      <span className="breadcrumb-sep">›</span>
      <span className="breadcrumb-item">Semana {weekNumber}</span>
      <span className="breadcrumb-sep">›</span>
      <span className="breadcrumb-item">{dayLabel}</span>
      <span className="breadcrumb-sep">›</span>
      <span className="breadcrumb-item">{hour.time}</span>
    </div>

    {/* Page nav */}
    <div className="page-header-nav">
      <button className="nav-page-btn prev" onClick={onPrev} disabled={index === 0}>
        <ChevronLeft size={13} /> Anterior
      </button>
      <span className="page-indicator">Hoja {index + 1} de {total}</span>
      <button className="nav-page-btn next" onClick={onNext} disabled={index === total - 1}>
        Siguiente <ChevronRight size={13} />
      </button>
    </div>

    <div className="notebook-sheet">
      <div className="sheet-header">
        <span className="sheet-time">{hour.time}</span>
        <h2 className="sheet-title">{hour.title || 'Tema del día'}</h2>
      </div>

      <div className="sheet-body">
        {hour.theory && (
          <PedBlock type="theory">
            <SmartText text={hour.theory} />
          </PedBlock>
        )}

        <div className="pedagogical-grid">
          {hour.notebook && (
            <PedBlock type="notebook">
              <SmartText text={hour.notebook} />
            </PedBlock>
          )}
          {hour.practice && (
            <PedBlock type="practice">
              <SmartText text={hour.practice} />
            </PedBlock>
          )}
        </div>

        {hour.code && <CodeBlock code={hour.code} />}
        {isTeacherMode && hour.codeRef && <CodeBlock code={hour.codeRef} isRef />}

        {hour.product && (
          <PedBlock type="product">
            <SmartText text={hour.product} />
          </PedBlock>
        )}

        {isTeacherMode && hour.teacherNotes && (
          <div className="pedagogical-block teacher-only">
            <div className="block-header-row">
              <h4 className="block-title">
                {BLOCK_META.teacher.icon} {BLOCK_META.teacher.label}
              </h4>
            </div>
            <div className="block-body">
              <SmartText text={hour.teacherNotes} />
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

/* ── Week View ─────────────────────────────────────────────── */
const WeekView = ({ weekId, isClassMode, isTeacherMode, isDualMode, isPreviewWeek }) => {
  const weekData = curriculumData.schedules[weekId];
  const [activeDayIdx,  setActiveDayIdx]  = useState(0);
  const [activeHourIdx, setActiveHourIdx] = useState(0);
  const [dayAnimKey,    setDayAnimKey]    = useState(0);
  const flipDirRef = useRef('fwd');

  const weekMeta   = getWeekMeta(weekId);
  const weekNumber = weekId.replace('W', '');
  const dateRange  = weekMeta.label.match(/\(([^)]+)\)/)?.[1] || '';

  if (!weekData) return <div className="no-data">No se encontró información para esta semana.</div>;

  if (!weekData.days || weekData.days.length === 0) {
    return (
      <div className="week-view notebook-view empty-week-state">
        <header className="week-portada">
          <div className="portada-inner">
            <span className="portada-course">{curriculumData.subject}</span>
            <div className="portada-week-number">
              <span className="portada-week-label">Semana</span>
              <span className="portada-week-digit">{weekNumber}</span>
            </div>
            {dateRange && <span className="portada-date">{dateRange}</span>}
            <span className="portada-group">Grupo {curriculumData.group} · Dr. Felipe López</span>
          </div>
          <div className="portada-lines" aria-hidden="true">
            {[...Array(5)].map((_, i) => <span key={i} className="portada-line" />)}
          </div>
        </header>
        <div className="notebook-container">
          <div className="notebook-sheet empty-sheet">
            <div className="empty-message-content">
              <span className="empty-icon">📅</span>
              <h2>Contenido en preparación</h2>
              <p>
                Esta semana corresponde al período <strong>{dateRange || weekMeta.label}</strong>.<br />
                El Dr. Felipe López está preparando el material. ¡Vuelve pronto!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentDay   = weekData.days[activeDayIdx];
  const isSpecialDay = currentDay.id === 'dual' || currentDay.id === 'key';

  const handleDaySelect = (idx) => {
    setActiveDayIdx(idx);
    setActiveHourIdx(0);
    setDayAnimKey(k => k + 1);
  };

  const nextHour = () => {
    if (activeHourIdx < currentDay.hours.length - 1) {
      flipDirRef.current = 'fwd';
      setActiveHourIdx(activeHourIdx + 1);
    }
  };

  const prevHour = () => {
    if (activeHourIdx > 0) {
      flipDirRef.current = 'bwd';
      setActiveHourIdx(activeHourIdx - 1);
    }
  };

  return (
    <div className={`week-view notebook-view ${isClassMode ? 'class-mode' : ''}`}>

      {/* ── Portada ── */}
      <header className="week-portada">
        <div className="portada-inner">
          <span className="portada-course">{curriculumData.subject}</span>
          <div className="portada-week-number">
            <span className="portada-week-label">Semana</span>
            <span className="portada-week-digit">{weekNumber}</span>
          </div>
          {dateRange && <span className="portada-date">{dateRange}</span>}
          <span className="portada-group">Grupo {curriculumData.group} · Dr. Felipe López</span>
        </div>
        <div className="portada-lines" aria-hidden="true">
          {[...Array(5)].map((_, i) => <span key={i} className="portada-line" />)}
        </div>
      </header>

      {isPreviewWeek && (
        <div className="preview-week-banner">
          <span className="preview-icon">👁️</span>
          <div className="preview-text">
            <strong>Vista Previa Docente</strong>
            <span>Esta semana aún no está disponible para los estudiantes</span>
          </div>
        </div>
      )}

      <DayTabs days={weekData.days} activeIndex={activeDayIdx} onSelect={handleDaySelect} />

      <div className="notebook-container" key={dayAnimKey}>
        {isDualMode ? (
          <DualGallery activities={weekData.days.find(d => d.id === 'dual')?.activities} />
        ) : isSpecialDay ? (
          <div className="notebook-sheet special day-enter">
            <div className="sheet-header">
              <h2 className="sheet-title">{currentDay.label}</h2>
            </div>
            <div className="sheet-body">
              {currentDay.id === 'dual' ? (
                <div className="dual-repository-view">
                  {currentDay.activities?.map((activity, idx) => (
                    <DualActivityBlock key={idx} activity={activity} />
                  ))}
                </div>
              ) : (
                <div className="key-code-view">
                  {currentDay.hours?.map((h, i) => (
                    <div key={i} className="pedagogical-block code-section">
                      <h4 className="block-title">{h.time}</h4>
                      <pre className="code-editor"><code>{h.code}</code></pre>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="day-notebook-content">
            {currentDay.purpose && activeHourIdx === 0 && (
              <div className="day-purpose-banner">
                <span className="purpose-icon">🎯</span>
                <div className="purpose-text">
                  <strong>Propósito de hoy</strong>
                  <SmartText text={currentDay.purpose} />
                </div>
              </div>
            )}

            <HourPage
              key={activeHourIdx}
              hour={currentDay.hours[activeHourIdx]}
              index={activeHourIdx}
              total={currentDay.hours.length}
              isTeacherMode={isTeacherMode}
              onPrev={prevHour}
              onNext={nextHour}
              flipDir={flipDirRef.current}
              weekMeta={weekMeta}
              weekNumber={weekNumber}
              dayLabel={currentDay.label.split(' — ')[0]}
            />

            {activeHourIdx === currentDay.hours.length - 1 && (
              <div className="day-closure-notebook">
                {currentDay.cierre && (
                  <div className="day-conclusion-block">
                    <p className="conclusion-title">✅ Cierre de Clase</p>
                    <SmartText text={currentDay.cierre} />
                  </div>
                )}
                {currentDay.frase_docente && (
                  <div className="day-quote-block">
                    <p className="quote-text">"{currentDay.frase_docente}"</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default WeekView;
