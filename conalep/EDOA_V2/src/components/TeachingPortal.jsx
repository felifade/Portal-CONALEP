import React, { useState } from 'react';
import { 
  BookOpen, 
  Calendar, 
  PlayCircle, 
  Target, 
  FileText, 
  CheckCircle2, 
  PenTool, 
  HelpCircle, 
  Lock, 
  Unlock, 
  ShieldCheck, 
  KeyRound, 
  Clock, 
  X, 
  School 
} from 'lucide-react';
import { teachingPlan } from '../data/teachingPlan';
import '../styles/TeachingPortal.css';

const TEACHER_PIN = '1328';

function isSessionLocked(session, isTeacherMode) {
  if (isTeacherMode) return false;
  if (!session?.unlockDate) return false;

  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const todayStr = `${year}-${month}-${day}`;

  // Bloqueado si la fecha de clase es posterior a hoy
  if (todayStr < session.unlockDate) return true;
  // Bloqueado si es el día de clase pero antes de las 15:00 hrs (turno vespertino)
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
          El contenido técnico, infografías y actividades de la <strong>{session.label}: {session.subtitle}</strong> se activarán automáticamente el:
        </p>
        <div className="locked-date-badge">
          <Calendar size={18} />
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

function PinModal({ isOpen, onClose, onSuccess }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (pin === TEACHER_PIN) {
      setError(false);
      onSuccess();
      onClose();
    } else {
      setError(true);
      setPin('');
    }
  };

  return (
    <div className="pin-modal-overlay" onClick={onClose}>
      <div className="pin-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="pin-modal-close" onClick={onClose}>
          <X size={20} />
        </button>
        <div className="pin-modal-icon">
          <KeyRound size={28} />
        </div>
        <h3>Acceso Docente</h3>
        <p>Introduce el PIN de 4 dígitos para desbloquear la vista previa de todas las sesiones de EDOA-20.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            maxLength={4}
            value={pin}
            onChange={(e) => {
              setError(false);
              setPin(e.target.value);
            }}
            placeholder="••••"
            className={`pin-input ${error ? 'error' : ''}`}
            autoFocus
          />
          {error && <span className="pin-error-text">PIN incorrecto. Intenta de nuevo.</span>}
          <div className="pin-actions">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-submit">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const TeachingPortal = () => {
  const [activeWeek, setActiveWeek] = useState('W04');
  const [activeSession, setActiveSession] = useState('S1');
  const [zoomedImg, setZoomedImg] = useState(null);

  const [isTeacherMode, setIsTeacherMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('docente') === '1' || params.get('pin') === TEACHER_PIN) {
        sessionStorage.setItem('portal_teacher_mode', 'true');
        return true;
      }
      return sessionStorage.getItem('portal_teacher_mode') === 'true';
    }
    return false;
  });

  const [showPinModal, setShowPinModal] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);

  const { module, cortes, weeks } = teachingPlan;
  const currentWeekData = weeks[activeWeek] || weeks['W00'];
  // Fallback if session doesn't exist
  const currentSessionData = currentWeekData.sessions.find(s => s.id === activeSession) || currentWeekData.sessions[0];
  const activeCorte = cortes.find(c => c.ras.some(r => r.weeks.includes(activeWeek))) || cortes[0];
  const activeRa = activeCorte.ras.find(r => r.weeks.includes(activeWeek)) || activeCorte.ras[0];

  const handleWeekClick = (weekId) => {
    setActiveWeek(weekId);
    setActiveSession('S1'); // Reset to first session on week change
  };

  const handleBrandClick = () => {
    const next = logoClicks + 1;
    setLogoClicks(next);
    if (next >= 3) {
      setLogoClicks(0);
      setShowPinModal(true);
    }
  };

  const handleUnlockSuccess = () => {
    sessionStorage.setItem('portal_teacher_mode', 'true');
    setIsTeacherMode(true);
  };

  const handleExitTeacherMode = () => {
    sessionStorage.removeItem('portal_teacher_mode');
    setIsTeacherMode(false);
  };

  return (
    <div className="teaching-portal">
      {/* LEFT COLUMN: Lesson Rail (MTCS Replica) */}
      <aside className="lesson-rail">
        <div
          className="lesson-brand"
          onClick={handleBrandClick}
          style={{ cursor: 'pointer', userSelect: 'none' }}
          title={isTeacherMode ? "Modo Docente Activo" : "CONALEP Pachuca II (Triple clic para Acceso Docente)"}
        >
          <School size={22} />
          <div style={{ flex: 1 }}>
            <strong>{module.code}</strong>
            <span>{module.group} · {module.campus}</span>
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
                <strong>{corte.peso}</strong>
              </div>
              <div className="corte-meta-row" style={{marginBottom: '10px', marginTop: '6px'}}>
                <span className="corte-meta-dates">{corte.dates || 'Semestre'}</span>
                {corte.deadline && (
                  <span className="corte-deadline-pill" title={`Periodo de captura en SAE: ${corte.captureDates}`}>
                    <Clock size={10} />
                    <span>Límite: <strong>{corte.deadline}</strong></span>
                  </span>
                )}
              </div>

              <div className="ra-list">
                {corte.ras.map((ra) => {
                  const loadedWeeks = ra.weeks.map(wId => weeks[wId]).filter(Boolean);

                  return (
                    <div className="ra-mini" key={ra.id}>
                      <div className="ra-mini-top">
                        <div>
                          <strong>{ra.id}</strong>
                          <span>{ra.title}</span>
                        </div>
                        <small>{ra.peso}</small>
                      </div>

                      {loadedWeeks.length > 0 && (
                        <div className="ra-weeks-grid">
                          {loadedWeeks.map((week) => {
                            const isCurrent = activeWeek === week.id;
                            const isEnCurso = week.status === 'active';

                            return (
                              <button
                                key={week.id}
                                className={`ra-week-pill ${isCurrent ? 'active' : ''} ${isEnCurso ? 'is-current' : ''}`}
                                onClick={() => handleWeekClick(week.id)}
                                title={`${week.label}: ${week.title}`}
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

        {/* Rail Footer */}
        <div style={{ marginTop: 'auto', paddingTop: '15px' }}>
          {isTeacherMode ? (
            <div className="teacher-badge-active" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#dcfce7', padding: '10px 15px', borderRadius: '8px', color: '#166534', fontSize: '13px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} />
                <strong>Modo Docente</strong>
              </div>
              <button onClick={handleExitTeacherMode} style={{ background: 'transparent', border: 'none', color: '#166534', cursor: 'pointer', textDecoration: 'underline', fontSize: '12px' }}>
                Salir
              </button>
            </div>
          ) : (
            <button onClick={() => setShowPinModal(true)} style={{ width: '100%', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '8px', color: '#64748b', fontSize: '12px', cursor: 'pointer' }}>
              <KeyRound size={13} />
              <span>Acceso Docente con PIN</span>
            </button>
          )}
        </div>
      </aside>

      {/* CENTER COLUMN: Class Guide */}
      <main className="class-guide">
        {/* Banner de Modo Docente si está activo */}
        {isTeacherMode && (
          <div className="teacher-mode-banner">
            <div className="teacher-mode-info">
              <ShieldCheck size={18} />
              <span><strong>Modo Docente Activo:</strong> Todas las sesiones e infografías están desbloqueadas para preparación y proyección.</span>
            </div>
            <button onClick={handleExitTeacherMode} className="teacher-mode-exit-btn">
              Volver a Modo Alumno
            </button>
          </div>
        )}

        <div className="guide-hero">
          <div className="hero-top">
            <span className={`status-badge ${currentWeekData.status}`}>
              {currentWeekData.status === 'active' ? '● En Curso' : 
               currentWeekData.status === 'historical' ? 'Histórico' : 'Próxima'}
            </span>
            <span className="hero-dates"><Calendar size={14} /> {currentWeekData.dates}</span>
          </div>
          <h1>{currentWeekData.label}: {currentWeekData.title}</h1>
          
          {currentWeekData.presentationUrl && (
            <a href={currentWeekData.presentationUrl} target="_blank" rel="noopener noreferrer" className="btn-diapositivas">
              <PlayCircle size={18} /> Ver Diapositivas
            </a>
          )}
        </div>

        {/* Session Selector con estado de bloqueo */}
        <div className="hour-selector">
          {currentWeekData.sessions.map(session => {
            const locked = isSessionLocked(session, isTeacherMode);
            return (
              <button
                key={session.id}
                onClick={() => setActiveSession(session.id)}
                className={`hour-btn ${activeSession === session.id ? 'active' : ''} ${locked ? 'is-locked-tab' : ''}`}
                title={locked ? `Bloqueada hasta ${session.unlockLabel || session.unlockDate}` : session.subtitle}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                  <strong>{session.label}</strong>
                  {locked && <Lock size={12} color="#dc2626" />}
                </div>
                <span>{session.subtitle}</span>
              </button>
            );
          })}
        </div>

        {/* Modular Content: Locked Card vs Real Class Content */}
        {isSessionLocked(currentSessionData, isTeacherMode) ? (
          <SessionLockedCard 
            session={currentSessionData} 
            onOpenPinModal={() => setShowPinModal(true)} 
          />
        ) : (
          <>
            {/* Data Strip */}
            <div className="data-strip">
              <div className="ds-item"><strong>Módulo:</strong> {module.code}</div>
              <div className="ds-item"><strong>Lugar:</strong> {currentSessionData.identification.location}</div>
              <div className="ds-item"><strong>Tiempo:</strong> {currentSessionData.identification.time}</div>
              <div className="ds-item"><strong>Organización:</strong> {currentSessionData.identification.organization}</div>
              <div className="ds-item"><strong>Classroom:</strong> {module.classroomCode}</div>
            </div>

            {/* Modular Class Card */}
            <div className="class-card">
              
              <div className="module-section section-inicio">
                <div className="section-header">
                  <HelpCircle size={18} />
                  <h3>Pregunta detonadora</h3>
                </div>
                <div className="section-content">
                  <p className="start-question">"{currentSessionData.start}"</p>
                </div>
              </div>

              <div className="module-section section-dictado">
                <div className="section-header">
                  <FileText size={18} />
                  <h3>Dictado para libreta</h3>
                </div>
                <div className="section-content reading-box">
                  <p>{currentSessionData.dictation}</p>
                </div>
              </div>

              <div className="module-section section-ra">
                <div className="section-header">
                  <Target size={18} />
                  <h3>Resultado de aprendizaje</h3>
                </div>
                <div className="section-content">
                  <p>{currentSessionData.learningResult}</p>
                </div>
              </div>

              <div className="module-section section-desarrollo">
                <div className="section-header">
                  <PenTool size={18} />
                  <h3>Desarrollo de la actividad</h3>
                </div>
                <div className="section-content">
                  
                  <div className="infographic-container" style={{ flexDirection: 'column' }}>
                    {currentSessionData.infographicImage ? (
                      <img 
                        src={currentSessionData.infographicImage} 
                        alt={currentSessionData.infographicTitle} 
                        className="infographic-image infographic-image-clickable"
                        onClick={() => setZoomedImg(currentSessionData.infographicImage)}
                      />
                    ) : (
                      <>
                        <h4>{currentSessionData.infographicTitle}</h4>
                        <div className="info-steps">
                          {currentSessionData.infographicSteps?.map((step, idx) => (
                            <div key={idx} className="info-step">
                              <div className="step-number">{idx + 1}</div>
                              <div className="step-content">
                                <h5>{step.title}</h5>
                                <p>{step.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    )}
                  </div>

                  <p className="development-text" style={{marginTop: '20px'}}>{currentSessionData.development}</p>

                </div>
              </div>

              <div className="module-section section-cierre">
                <div className="section-header">
                  <CheckCircle2 size={18} />
                  <h3>Cierre y evidencia</h3>
                </div>
                <div className="section-content">
                  <div className="evidence-callout"><strong>Evidencia esperada:</strong> {currentSessionData.identification.evidence}</div>
                  <p>{currentSessionData.closure}</p>
                </div>
              </div>

            </div>
          </>
        )}
      </main>

      {/* RIGHT COLUMN: Contexto y Avisos (MTCS Replica) */}
      <aside className="lesson-context">
        {/* 1. Resultado de Aprendizaje */}
        <section className="context-panel primary">
          <div className="panel-header-badge badge-ra" style={{ background: '#eff6ff', color: '#1d4ed8', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', marginBottom: '10px' }}>
            <Target size={14} />
            <span>Resultado de Aprendizaje</span>
          </div>
          <div style={{ fontSize: '13px', color: '#0f172a' }}>
            <strong>{activeRa.id}:</strong> {activeRa.title}
          </div>
          <p style={{ fontSize: '12px', color: '#475569', marginTop: '8px', lineHeight: '1.4', marginBottom: 0 }}>
            {currentWeekData.summary}
          </p>
        </section>

        {/* 2. Producto Esperado */}
        <section className="context-panel product" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
          <div className="panel-header-badge badge-product" style={{ background: '#dcfce7', color: '#15803d', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', marginBottom: '10px' }}>
            <FileText size={14} />
            <span>Producto Esperado</span>
          </div>
          <p style={{ fontSize: '13.5px', color: '#166534', fontWeight: '650', margin: 0, lineHeight: '1.4' }}>
            {currentWeekData.expectedProduct}
          </p>
        </section>

        {/* 3. Avisos Institucionales */}
        <section className="context-panel notices" style={{ background: '#fffbeb', border: '1px solid #fde68a' }}>
          <div className="panel-header-badge badge-notices" style={{ background: '#fef3c7', color: '#b45309', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', marginBottom: '10px' }}>
            <ShieldCheck size={14} />
            <span>Avisos de la Semana</span>
          </div>
          <ul style={{ margin: 0, paddingLeft: '22px', fontSize: '12px', color: '#92400e', lineHeight: '1.5' }}>
            {(currentWeekData.notices || [
              'No consumir alimentos ni bebidas cerca de los equipos.',
              'Subir evidencias a Classroom en la hora asignada.',
              'Respaldar archivos en Google Drive institucional.'
            ]).map((notice, idx) => (
              <li key={idx} style={{ marginBottom: '6px' }}>{notice}</li>
            ))}
          </ul>
        </section>

        {/* 4. Estado del Corte */}
        <section className="context-panel corte" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <div className="panel-header-badge badge-corte" style={{ background: '#e2e8f0', color: '#475569', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', marginBottom: '10px' }}>
            <Calendar size={14} />
            <span>Corte en Curso</span>
          </div>
          <p style={{ fontSize: '13px', color: '#334155', margin: 0 }}>
            <strong>{activeCorte.label}</strong> ({activeCorte.peso})
          </p>
          {activeCorte.deadline && (
            <div style={{ marginTop: '12px', fontSize: '11px', color: '#9f1239', display: 'flex', alignItems: 'center', gap: '6px', background: '#fff1f2', padding: '8px 10px', borderRadius: '6px', border: '1px dashed #fecdd3' }}>
              <Clock size={16} style={{ flexShrink: 0 }} />
              <span style={{ lineHeight: '1.4' }}>Captura SAE: <strong>{activeCorte.captureDates || 'Ver SAE'}</strong><br/>Límite: <strong>{activeCorte.deadline}</strong></span>
            </div>
          )}
        </section>
      </aside>

      {/* Zoom Modal Overlay */}
      {zoomedImg && (
        <div className="image-modal-overlay" onClick={() => setZoomedImg(null)}>
          <div className="image-modal-content">
            <button className="close-modal-btn" onClick={() => setZoomedImg(null)}>×</button>
            <img src={zoomedImg} alt="Zoomed Infographic" />
          </div>
        </div>
      )}

      {/* PIN Modal */}
      <PinModal
        isOpen={showPinModal}
        onClose={() => setShowPinModal(false)}
        onSuccess={handleUnlockSuccess}
      />
    </div>
  );
};

export default TeachingPortal;
