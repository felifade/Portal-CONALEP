import React, { useState } from 'react';
import { BookOpen, Calendar, PlayCircle, Target, FileText, CheckCircle2, PenTool, HelpCircle } from 'lucide-react';
import { teachingPlan } from '../data/teachingPlan';
import '../styles/TeachingPortal.css';

const TeachingPortal = () => {
  const [activeWeek, setActiveWeek] = useState('W04');
  const [activeSession, setActiveSession] = useState('S1');
  const [zoomedImg, setZoomedImg] = useState(null);

  const { module, cortes, weeks } = teachingPlan;
  const currentWeekData = weeks[activeWeek] || weeks['W00'];
  // Fallback if session doesn't exist
  const currentSessionData = currentWeekData.sessions.find(s => s.id === activeSession) || currentWeekData.sessions[0];

  const handleWeekClick = (weekId) => {
    setActiveWeek(weekId);
    setActiveSession('S1'); // Reset to first session on week change
  };

  return (
    <div className="teaching-portal">
      {/* LEFT COLUMN: CorteRail */}
      <aside className="corte-rail">
        <div className="rail-header">
          <h3>{module.campus}</h3>
          <p>{module.teacher}</p>
          <div className="module-badge">{module.code}</div>
        </div>

        <div className="rail-scroll">
          {cortes.map(corte => (
            <div key={corte.id} className="corte-group">
              <div className="corte-group-header">
                <h4>{corte.label}</h4>
                <span className="peso-badge">{corte.peso}</span>
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
      </aside>

      {/* CENTER COLUMN: Class Guide */}
      <main className="class-guide">
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

        {/* Session Selector */}
        <div className="hour-selector">
          {currentWeekData.sessions.map(session => (
            <button
              key={session.id}
              onClick={() => setActiveSession(session.id)}
              className={`hour-btn ${activeSession === session.id ? 'active' : ''}`}
            >
              <strong>{session.label}</strong>
              <span>{session.subtitle}</span>
            </button>
          ))}
        </div>

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
                      {currentSessionData.infographicSteps.map((step, idx) => (
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
    </div>
  );
};

export default TeachingPortal;
