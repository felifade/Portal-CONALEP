import React, { useMemo, useState } from 'react';
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  FileText,
  Layers3,
  Map,
  Megaphone,
  PenLine,
  School,
  Sparkles,
  Target,
} from 'lucide-react';
import { teachingPlan } from '../data/teachingPlan';

function getActiveRa(corte, raId) {
  return corte?.ras.find((ra) => ra.id === raId) || corte?.ras[0];
}

function CorteRail({ cortes, activeWeek, activeCorte, onSelectWeek }) {
  return (
    <aside className="lesson-rail">
      <div className="lesson-brand">
        <School size={22} />
        <div>
          <strong>{teachingPlan.module.code}</strong>
          <span>{teachingPlan.module.group} · {teachingPlan.module.campus}</span>
        </div>
      </div>

      <div className="corte-stack">
        {cortes.map((corte) => (
          <section
            className={`corte-card ${activeCorte.id === corte.id ? 'active' : ''}`}
            key={corte.id}
          >
            <div className="corte-card-header">
              <span>{corte.label}</span>
              <strong>{corte.weight}</strong>
            </div>
            <p className="corte-meta">{corte.weeks} semanas planeadas</p>

            <div className="ra-list">
              {corte.ras.map((ra) => {
                const loadedWeeks = teachingPlan.weeks.filter(
                  (w) => w.raId === ra.id && w.corteId === corte.id
                );

                return (
                  <div className="ra-mini" key={ra.id}>
                    <div className="ra-mini-top">
                      <div>
                        <strong>{ra.id}</strong>
                        <span>{ra.title}</span>
                      </div>
                      <small>{ra.weight}</small>
                    </div>

                    {/* Semanas anidadas dentro del RA */}
                    {loadedWeeks.length > 0 && (
                      <div className="ra-weeks-grid">
                        {loadedWeeks.map((week) => {
                          const isCurrent = activeWeek.id === week.id;
                          const isEnCurso = week.status === 'En curso';

                          return (
                            <button
                              key={week.id}
                              className={`ra-week-pill ${isCurrent ? 'active' : ''} ${isEnCurso ? 'is-current' : ''}`}
                              onClick={() => onSelectWeek(week.id)}
                              title={`${week.label}: ${week.title} (${week.status})`}
                            >
                              <span className="pill-badge">{week.id}</span>
                              <span className="pill-label">{week.label}</span>
                              {isEnCurso && <span className="pill-status-dot" title="En curso">●</span>}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </aside>
  );
}

function HourTabs({ hours, activeHour, onSelectHour }) {
  return (
    <nav className="hour-tabs" aria-label="Horas de clase">
      {hours.map((hour) => (
        <button
          className={activeHour.id === hour.id ? 'active' : ''}
          key={hour.id}
          onClick={() => onSelectHour(hour.id)}
        >
          <span className="hour-pill-title">{hour.label}</span>
          <small className="hour-pill-subtitle">{hour.title.substring(0, 24)}...</small>
        </button>
      ))}
    </nav>
  );
}

function DataStrip({ week, hour }) {
  const items = [
    ['Módulo', teachingPlan.module.code],
    ['Grupo', teachingPlan.module.group],
    ['Classroom', teachingPlan.module.classroomCode],
    ['Semana', week.dateRange],
    ['Evidencia', week.identification.product],
    ['Organización', week.identification.modality],
    ['Lugar', week.identification.place],
    ['Hora', hour.label],
  ];

  return (
    <section className="identity-strip" aria-label="Datos de identificacion">
      {items.map(([label, value]) => (
        <div key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </section>
  );
}

function LessonSection({ icon, label, children, className = '' }) {
  return (
    <section className={`lesson-section ${className}`}>
      <div className="lesson-section-header">
        <span className="section-icon">{icon}</span>
        <span className="section-title">{label}</span>
      </div>
      <div className="lesson-section-body">{children}</div>
    </section>
  );
}

function InfographicPlan({ hour }) {
  return (
    <div className="infographic-plan">
      <div className="infographic-title">
        <Sparkles size={18} />
        <strong>Infografía de la Hora: {hour.infographicTitle}</strong>
      </div>
      <div className="infographic-flow">
        {hour.infographicSteps.map((step, index) => (
          <div className="flow-step" key={step}>
            <span className="step-num">{String(index + 1).padStart(2, '0')}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RightSummary({ week, corte, ra, activeHour }) {
  return (
    <aside className="lesson-context">
      <section className="context-panel primary">
        <div className="panel-header-badge badge-ra">
          <Target size={16} />
          <span>Resultado de aprendizaje</span>
        </div>
        <strong>{ra.id}: {ra.title}</strong>
        <p>{week.result}</p>
      </section>

      <section className="context-panel product">
        <div className="panel-header-badge badge-product">
          <ClipboardList size={16} />
          <span>Producto esperado</span>
        </div>
        <p>{activeHour.closure}</p>
      </section>

      <section className="context-panel notices">
        <div className="panel-header-badge badge-notices">
          <Megaphone size={16} />
          <span>Avisos institucionales</span>
        </div>
        <ul>
          {week.notices.map((notice) => (
            <li key={notice}>{notice}</li>
          ))}
        </ul>
      </section>

      <section className="context-panel corte">
        <div className="panel-header-badge badge-corte">
          <Layers3 size={16} />
          <span>Corte en curso</span>
        </div>
        <p><strong>{corte.label}</strong> ({corte.weight}) · {corte.weeks} semanas de ponderación formativa.</p>
      </section>
    </aside>
  );
}

function TeachingPortal() {
  const defaultWeek = teachingPlan.weeks.find((w) => w.status === 'En curso') || teachingPlan.weeks[0];
  const [activeWeekId, setActiveWeekId] = useState(defaultWeek.id);

  const activeWeek = useMemo(
    () => teachingPlan.weeks.find((week) => week.id === activeWeekId) || defaultWeek,
    [activeWeekId, defaultWeek],
  );

  const [activeHourId, setActiveHourId] = useState(activeWeek.hours[0]?.id || 'H01');

  const activeCorte = teachingPlan.cortes.find((corte) => corte.id === activeWeek.corteId) || teachingPlan.cortes[0];
  const activeRa = getActiveRa(activeCorte, activeWeek.raId);
  const activeHour = activeWeek.hours.find((hour) => hour.id === activeHourId) || activeWeek.hours[0];

  const handleWeekSelect = (weekId) => {
    const nextWeek = teachingPlan.weeks.find((week) => week.id === weekId);
    setActiveWeekId(weekId);
    setActiveHourId(nextWeek?.hours[0]?.id || 'H01');
  };

  return (
    <div className="lesson-shell">
      <CorteRail
        cortes={teachingPlan.cortes}
        activeWeek={activeWeek}
        activeCorte={activeCorte}
        onSelectWeek={handleWeekSelect}
      />

      <main className="lesson-main">
        <header className="lesson-hero">
          <div className="hero-info">
            <div className="hero-tags">
              <span className={`lesson-status-pill status-${activeWeek.status.toLowerCase().replace(/\s+/g, '-')}`}>
                {activeWeek.status}
              </span>
              <span className="lesson-eyebrow">{activeWeek.label}</span>
              {activeWeek.htmlUrl && (
                <a
                  href={activeWeek.htmlUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero-slides-link"
                  title="Abrir presentación de diapositivas en pestaña completa"
                >
                  <ExternalLink size={13} />
                  <span>Ver Diapositivas</span>
                </a>
              )}
            </div>
            <h1>{activeWeek.title}</h1>
            <p>{teachingPlan.module.subject} · {teachingPlan.module.group}</p>
          </div>
          <div className="lesson-hero-badge">
            <CalendarDays size={18} />
            <strong>{activeWeek.dateRange}</strong>
            <span>{activeRa.id}</span>
          </div>
        </header>

        <HourTabs
          hours={activeWeek.hours}
          activeHour={activeHour}
          onSelectHour={setActiveHourId}
        />

        <DataStrip week={activeWeek} hour={activeHour} />

        <article className="lesson-card">
          <div className="lesson-card-header">
            <div className="header-meta">
              <span className="hour-tag">{activeHour.label}</span>
              <span className="hour-ra-tag">{activeRa.id}</span>
            </div>
            <h2>{activeHour.title}</h2>
          </div>

          <div className="lesson-grid">
            <LessonSection icon={<BookOpen size={18} />} label="Inicio · Apertura de Clase" className="start">
              <p>{activeHour.start}</p>
            </LessonSection>

            <LessonSection icon={<PenLine size={18} />} label="Dictado · Concepto Clave" className="dictation">
              <p className="dictation-text">{activeHour.dictation}</p>
            </LessonSection>

            <LessonSection icon={<Target size={18} />} label="Resultado de Aprendizaje" className="result">
              <p>{activeHour.learningResult}</p>
            </LessonSection>

            <LessonSection icon={<FileText size={18} />} label="Ficha de Identificación" className="identity">
              <p>{activeHour.identification}</p>
            </LessonSection>

            <LessonSection icon={<Map size={18} />} label="Desarrollo con Infografía" className="development wide">
              <p className="dev-intro">{activeHour.development}</p>
              <InfographicPlan hour={activeHour} />
            </LessonSection>

            <LessonSection icon={<CheckCircle2 size={18} />} label="Conclusión y Cierre de Bitácora" className="closure wide">
              <p>{activeHour.closure}</p>
            </LessonSection>
          </div>
        </article>
      </main>

      <RightSummary
        week={activeWeek}
        corte={activeCorte}
        ra={activeRa}
        activeHour={activeHour}
      />
    </div>
  );
}

export default TeachingPortal;
