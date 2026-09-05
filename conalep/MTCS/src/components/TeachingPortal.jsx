import React, { useMemo, useState } from 'react';
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  Clock,
  ExternalLink,
  FileText,
  KeyRound,
  Layers3,
  Lock,
  Map,
  Megaphone,
  PenLine,
  School,
  ShieldCheck,
  Sparkles,
  Target,
  Unlock,
  X,
} from 'lucide-react';
import { teachingPlan } from '../data/teachingPlan';

function getActiveRa(corte, raId) {
  return corte?.ras.find((ra) => ra.id === raId) || corte?.ras[0];
}

function getWeekSessions(week) {
  if (!week) return [];

  if (week.sessions?.length) {
    return week.sessions.map((session) => ({
      ...session,
      hours: session.hourIds
        .map((hourId) => week.hours.find((hour) => hour.id === hourId))
        .filter(Boolean),
    }));
  }

  return [
    {
      id: 'S01',
      label: 'Sesión 01',
      duration: `${week.hours.length} horas`,
      title: week.title,
      product: week.identification.product,
      hours: week.hours,
    },
  ];
}

const TEACHER_PIN = '1328';

function isSessionLocked(session, isTeacherMode) {
  if (isTeacherMode) return false;
  if (!session?.unlockDate) return false;

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const todayStr = `${year}-${month}-${day}`;

  // Bloqueado si la fecha es en el futuro
  if (todayStr < session.unlockDate) return true;
  // Bloqueado si es hoy pero antes de las 15:00 hrs (turno vespertino)
  if (todayStr === session.unlockDate && now.getHours() < 15) return true;

  return false;
}

function SessionLockedCard({ session, onOpenPinModal }) {
  return (
    <div className="session-locked-container">
      <div className="session-locked-card">
        <div className="locked-icon-bubble">
          <Lock size={44} />
        </div>
        <h2>Sesión Programada</h2>
        <p className="locked-main-text">
          El contenido técnico, infografías y actividades de la <strong>{session.label}: {session.title}</strong> se activarán automáticamente el:
        </p>
        <div className="locked-date-badge">
          <CalendarDays size={18} />
          <strong>{session.unlockLabel || session.unlockDate}</strong>
        </div>
        <div className="locked-advice">
          <p>
            💡 <strong>Indicación para el Alumno:</strong> Si tienes actividades pendientes de las sesiones anteriores, aprovecha este tiempo para concluirlas y entregarlas en Google Classroom.
          </p>
        </div>
        <button className="teacher-unlock-btn" onClick={onOpenPinModal} title="Acceso exclusivo para el docente">
          <KeyRound size={14} />
          <span>Acceso Docente con PIN</span>
        </button>
      </div>
    </div>
  );
}

function CorteRail({ cortes, activeWeek, activeCorte, onSelectWeek, onBrandClick, isTeacherMode }) {
  return (
    <aside className="lesson-rail">
      <div
        className="lesson-brand"
        onClick={onBrandClick}
        style={{ cursor: 'pointer', userSelect: 'none' }}
        title={isTeacherMode ? "Modo Docente Activo" : "CONALEP Pachuca II (Triple clic para Acceso Docente)"}
      >
        <School size={22} />
        <div style={{ flex: 1 }}>
          <strong>{teachingPlan.module.code}</strong>
          <span>{teachingPlan.module.group} · {teachingPlan.module.campus}</span>
        </div>
        {isTeacherMode ? (
          <ShieldCheck size={18} style={{ color: '#10b981' }} title="Modo Docente Activo" />
        ) : (
          <KeyRound size={15} style={{ opacity: 0.35 }} title="Triple clic para PIN Docente" />
        )}
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
            <div className="corte-meta-row">
              <span className="corte-meta-dates">{corte.weeks} sem · {corte.dates || `${corte.weeks} semanas`}</span>
              {corte.deadline && (
                <span className="corte-deadline-pill" title={`Periodo de captura en SIGA: ${corte.captureDates}`}>
                  <Clock size={10} />
                  <span>Límite: <strong>{corte.deadline}</strong></span>
                </span>
              )}
            </div>

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

function SessionTabs({ sessions, activeSession, onSelectSession, isTeacherMode }) {
  return (
    <nav className="session-tabs" aria-label="Sesiones de clase">
      {sessions.map((session) => {
        const locked = isSessionLocked(session, isTeacherMode);
        return (
          <button
            className={`${activeSession.id === session.id ? 'active' : ''} ${locked ? 'is-locked-tab' : ''}`}
            key={session.id}
            onClick={() => onSelectSession(session.id)}
          >
            <span className="session-pill-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
              <span>{session.label}</span>
              {locked && <Lock size={12} style={{ color: '#e11d48', marginLeft: 4 }} />}
            </span>
            <small className="session-pill-subtitle">
              {locked ? `🔒 ${session.unlockLabel || 'Programada'}` : `${session.duration} · ${session.title}`}
            </small>
          </button>
        );
      })}
    </nav>
  );
}

function DataStrip({ week, session }) {
  const items = [
    ['Módulo', teachingPlan.module.code],
    ['Grupo', teachingPlan.module.group],
    ['Classroom', teachingPlan.module.classroomCode],
    ['Semana', week.dateRange],
    ['Evidencia', week.identification.product],
    ['Organización', week.identification.modality],
    ['Lugar', week.identification.place],
    ['Sesión', `${session.label} · ${session.duration}`],
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
  const images = Array.isArray(hour.infographicImages)
    ? hour.infographicImages
    : hour.infographicImage
    ? [{ src: hour.infographicImage, title: hour.infographicTitle }]
    : [];

  return (
    <div className="infographic-plan">
      {images.map((item, idx) => {
        const imgSrc = typeof item === 'string' ? item : item.src;
        const imgTitle = typeof item === 'string' ? `${hour.infographicTitle} (${idx + 1})` : item.title || hour.infographicTitle;
        const imageUrl = new URL(`../assets/${imgSrc}`, import.meta.url).href;
        return (
          <div key={idx} style={{ marginBottom: idx < images.length - 1 ? 24 : 0 }}>
            <div className="infographic-title" style={{ marginBottom: 10 }}>
              <Sparkles size={18} />
              <strong>{imgTitle}</strong>
            </div>
            <figure className="infographic-image-frame" style={{ margin: 0 }}>
              <img 
                src={imageUrl} 
                alt={`Infografia ${imgTitle}`} 
                style={{ width: '100%', borderRadius: 8, display: 'block' }} 
              />
            </figure>
          </div>
        );
      })}

      {hour.infographicSteps?.length > 0 && (
        <div className="infographic-flow" style={{ marginTop: 20 }}>
          {hour.infographicSteps.map((step, index) => (
            <div className="flow-step" key={step}>
              <span className="step-num">{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function RightSummary({ week, corte, ra, activeSession }) {
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
        <p>{activeSession.product}</p>
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
        <p><strong>{corte.label}</strong> ({corte.weight}) · {corte.weeks} semanas ({corte.dates || 'Semestre'}).</p>
        {corte.deadline && (
          <p style={{ marginTop: 6, fontSize: 12, color: '#9f1239', display: 'flex', alignItems: 'center', gap: 5 }}>
            <Clock size={12} />
            <span>Captura SIGA: <strong>{corte.captureDates}</strong> (Límite: <strong>{corte.deadline}</strong>)</span>
          </p>
        )}
      </section>
    </aside>
  );
}

function TeachingPortal() {
  const defaultWeek = teachingPlan.weeks.find((w) => w.defaultWeek) || teachingPlan.weeks.find((w) => w.status === 'En curso') || teachingPlan.weeks[0];
  const [activeWeekId, setActiveWeekId] = useState(defaultWeek.id);

  const activeWeek = useMemo(
    () => teachingPlan.weeks.find((week) => week.id === activeWeekId) || defaultWeek,
    [activeWeekId, defaultWeek],
  );

  const sessions = getWeekSessions(activeWeek);
  const [activeSessionId, setActiveSessionId] = useState(sessions[0]?.id || 'S01');

  const activeCorte = teachingPlan.cortes.find((corte) => corte.id === activeWeek.corteId) || teachingPlan.cortes[0];
  const activeRa = getActiveRa(activeCorte, activeWeek.raId);
  const activeSession = sessions.find((session) => session.id === activeSessionId) || sessions[0];

  const [isTeacherMode, setIsTeacherMode] = useState(() => {
    try {
      const stored = sessionStorage.getItem('mtcs_teacher_mode');
      const urlParam = window.location.search.includes('docente=1') || window.location.search.includes('pin=1328');
      return stored === 'true' || urlParam;
    } catch {
      return false;
    }
  });
  const [showPinModal, setShowPinModal] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);
  const [brandClicks, setBrandClicks] = useState(0);

  const handleBrandClick = () => {
    setBrandClicks((prev) => {
      const next = prev + 1;
      if (next >= 3) {
        setShowPinModal(true);
        return 0;
      }
      setTimeout(() => setBrandClicks(0), 1500);
      return next;
    });
  };

  const handlePinSubmit = (e) => {
    e?.preventDefault();
    if (pinInput.trim() === TEACHER_PIN) {
      setIsTeacherMode(true);
      try {
        sessionStorage.setItem('mtcs_teacher_mode', 'true');
      } catch {}
      setShowPinModal(false);
      setPinInput('');
      setPinError(false);
    } else {
      setPinError(true);
      setPinInput('');
    }
  };

  const handleLogoutTeacher = () => {
    setIsTeacherMode(false);
    try {
      sessionStorage.removeItem('mtcs_teacher_mode');
    } catch {}
  };

  const handleWeekSelect = (weekId) => {
    const nextWeek = teachingPlan.weeks.find((week) => week.id === weekId);
    const nextSessions = getWeekSessions(nextWeek);
    setActiveWeekId(weekId);
    setActiveSessionId(nextSessions[0]?.id || 'S01');
  };

  const activeSessionLocked = isSessionLocked(activeSession, isTeacherMode);

  return (
    <div className="lesson-shell">
      <CorteRail
        cortes={teachingPlan.cortes}
        activeWeek={activeWeek}
        activeCorte={activeCorte}
        onSelectWeek={handleWeekSelect}
        onBrandClick={handleBrandClick}
        isTeacherMode={isTeacherMode}
      />

      <main className="lesson-main">
        {isTeacherMode && (
          <div className="teacher-mode-banner">
            <div className="teacher-mode-info">
              <ShieldCheck size={18} />
              <span><strong>Modo Docente Activo:</strong> Todas las sesiones e infografías están visibles sin restricciones de fecha.</span>
            </div>
            <button onClick={handleLogoutTeacher} className="teacher-mode-exit-btn" title="Volver a la vista de alumno">
              <Lock size={13} />
              <span>Bloquear / Vista Alumno</span>
            </button>
          </div>
        )}

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

        <SessionTabs
          sessions={sessions}
          activeSession={activeSession}
          onSelectSession={setActiveSessionId}
          isTeacherMode={isTeacherMode}
        />

        <DataStrip week={activeWeek} session={activeSession} />

        <section className="session-overview">
          <span>{activeSession.label} · {activeSession.duration}</span>
          <h2>{activeSession.title}</h2>
          <p>
            <strong>Producto: </strong>
            {activeSessionLocked ? `🔒 Disponible el ${activeSession.unlockLabel || activeSession.unlockDate}` : activeSession.product}
          </p>
        </section>

        {activeSessionLocked ? (
          <SessionLockedCard
            session={activeSession}
            onOpenPinModal={() => setShowPinModal(true)}
          />
        ) : (
          <div className="session-hours">
            {activeSession.hours.map((hour) => (
              <article className="lesson-card" key={hour.id}>
                <div className="lesson-card-header">
                  <div className="header-meta">
                    <span className="hour-tag">{hour.label}</span>
                    <span className="hour-ra-tag">{activeRa.id}</span>
                  </div>
                  <h2>{hour.title}</h2>
                </div>

                <div className="lesson-grid">
                  <LessonSection icon={<BookOpen size={18} />} label="Inicio · Apertura de Clase" className="start">
                    <p>{hour.start}</p>
                  </LessonSection>

                  <LessonSection icon={<PenLine size={18} />} label="Dictado · Concepto Clave" className="dictation">
                    <p className="dictation-text">{hour.dictation}</p>
                  </LessonSection>

                  <LessonSection icon={<Target size={18} />} label="Resultado de Aprendizaje" className="result">
                    <p>{hour.learningResult}</p>
                  </LessonSection>

                  <LessonSection icon={<FileText size={18} />} label="Ficha de Identificación" className="identity">
                    <p>{hour.identification}</p>
                  </LessonSection>

                  <LessonSection icon={<Map size={18} />} label="Desarrollo con Infografía" className="development wide">
                    <p className="dev-intro">{hour.development}</p>
                    <InfographicPlan hour={hour} />
                  </LessonSection>

                  <LessonSection icon={<CheckCircle2 size={18} />} label="Conclusión y Cierre de Bitácora" className="closure wide">
                    <p>{hour.closure}</p>
                  </LessonSection>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <RightSummary
        week={activeWeek}
        corte={activeCorte}
        ra={activeRa}
        activeSession={activeSession}
      />

      {showPinModal && (
        <div className="pin-modal-overlay" onClick={() => setShowPinModal(false)}>
          <div className="pin-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="pin-modal-close" onClick={() => setShowPinModal(false)} aria-label="Cerrar modal">
              <X size={18} />
            </button>
            <div className="pin-modal-icon">
              <KeyRound size={28} />
            </div>
            <h3>Acceso Docente</h3>
            <p>Ingresa el PIN de 4 dígitos para desbloquear todas las sesiones del portal:</p>
            <form onSubmit={handlePinSubmit}>
              <input
                type="password"
                maxLength={4}
                autoFocus
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  setPinError(false);
                }}
                placeholder="••••"
                className={`pin-input ${pinError ? 'error' : ''}`}
              />
              {pinError && <span className="pin-error-text">PIN incorrecto. Intenta de nuevo.</span>}
              <div className="pin-actions">
                <button type="button" className="btn-cancel" onClick={() => setShowPinModal(false)}>
                  Cancelar
                </button>
                <button type="submit" className="btn-submit">
                  Desbloquear
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeachingPortal;
