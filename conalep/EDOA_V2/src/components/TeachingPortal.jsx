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
      {/* LEFT COLUMN: CorteRail */}
      <aside className="corte-rail">
        <div 
          className="rail-header" 
          onClick={handleBrandClick} 
          style={{ cursor: 'pointer', userSelect: 'none' }}
          title={isTeacherMode ? "Modo Docente Activo" : "CONALEP Pachuca II (Triple clic para Acceso Docente)"}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: 0 }}>
              <School size={18} /> {module.campus}
            </h3>
            {isTeacherMode ? (
              <ShieldCheck size={18} style={{ color: '#10b981' }} title="Modo Docente Activo" />
            ) : (
              <KeyRound size={15} style={{ opacity: 0.35 }} title="Triple clic para PIN Docente" />
            )}
          </div>
          <p>{module.teacher}</p>
          <div className="module-badge">{module.code} · {module.group}</div>
        </div>

        <div className="rail-scroll">
          {cortes.map(corte => (
            <div key={corte.id} className="corte-group">
              <div className="corte-group-header">
                <h4>{corte.label}</h4>
                <span className="peso-badge">{corte.peso}</span>
              </div>
              
              <div className="corte-meta-row">
                <span className="corte-meta-dates">{corte.dates}</span>
                {corte.deadline && (
                  <span className="corte-deadline-pill" title={`Periodo de captura en SAE: ${corte.captureDates}`}>
                    <Clock size={10} />
                    <span>Límite: <strong>{corte.deadline}</strong></span>
                  </span>
                )}
              </div>
              
              {corte.ras.map(ra => (
                <div key={ra.id} className="ra-group">
                  <div className="ra-title">
                    <BookOpen size={14} />
                    <span><strong>{ra.id}</strong>: {ra.title}</span>
                    <span className="peso-badge" style={{ marginLeft: 'auto', fontSize: '10px', background: '#dbeafe', color: '#1d4ed8' }}>
                      {ra.peso}
                    </span>
                  </div>
                  <div className="week-buttons">
                    {ra.weeks.map(weekId => {
                      const wData = weeks[weekId];
                      if (!wData) return null;
                      const isActive = activeWeek === weekId;
                      return (
                        <button
                          key={weekId}
                          onClick={() => handleWeekClick(weekId)}
                          className={`week-btn ${wData.status} ${isActive ? 'selected' : ''}`}
                          title={wData.title}
                        >
                          {weekId}
                          {wData.status === 'active' && <span className="active-dot"></span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Rail Footer: Teacher Mode indicator / button */}
        <div className="rail-footer">
          {isTeacherMode ? (
            <div className="teacher-badge-active">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} />
                <span>Modo Docente</span>
              </div>
              <button onClick={handleExitTeacherMode} className="btn-exit-docente" title="Volver a vista Alumno">
                Salir
              </button>
            </div>
          ) : (
            <button onClick={() => setShowPinModal(true)} className="btn-open-docente">
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

      {/* RIGHT COLUMN: Radar Operativo */}
      <aside className="radar-operativo">
        <div className="radar-header">
          <h3>Radar Operativo</h3>
          <p>Visión General</p>
        </div>
        
        <div className="radar-card">
          <h4>Resumen de la Semana</h4>
          <p>{currentWeekData.summary}</p>
        </div>
        
        <div className="radar-card">
          <h4>Sesión actual</h4>
          <p className="highlight-text">{currentSessionData.subtitle}</p>
        </div>

        <div className="radar-card product-card">
          <h4>Producto Esperado</h4>
          <p className="highlight-text">{currentWeekData.expectedProduct}</p>
        </div>

        {/* Fechas clave del Corte 1 */}
        <div className="radar-card" style={{ borderLeft: '4px solid #0ea5e9' }}>
          <h4>Corte 1 (30%) · Agenda</h4>
          <p style={{ margin: '4px 0', fontSize: '12px' }}><strong>Periodo:</strong> 10 Ago - 22 Sep 2026</p>
          <p style={{ margin: '4px 0', fontSize: '12px' }}><strong>Captura SAE:</strong> 21 al 22 Sep 2026</p>
          <div style={{ marginTop: '8px', display: 'inline-flex', alignItems: 'center', gap: '5px', background: '#eff6ff', padding: '3px 8px', borderRadius: '4px', fontSize: '11px', color: '#1e40af', fontWeight: '700' }}>
            <Clock size={12} /> Límite: 22 Sep 2026
          </div>
        </div>
        
        <div className="radar-card warning">
          <h4>Avisos de la semana</h4>
          <ul>
            {(currentWeekData.notices || [
              'No consumir alimentos cerca de los equipos.',
              'Subir evidencias a Classroom en tiempo y forma.',
            ]).map((notice) => (
              <li key={notice}>{notice}</li>
            ))}
          </ul>
        </div>

        <div className="radar-card checklist-card">
          <h4>Orden de clase</h4>
          <ul>
            <li>Pregunta detonadora.</li>
            <li>Dictado para libreta.</li>
            <li>Desarrollo guiado.</li>
            <li>Cierre con evidencia.</li>
          </ul>
        </div>
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
