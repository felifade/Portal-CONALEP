import React, { useState } from 'react';
import { BookOpen, Calendar, Percent, ExternalLink, PlayCircle, Target, FileText, CheckCircle2, ChevronRight, PenTool } from 'lucide-react';
import { teachingPlan } from '../data/teachingPlan';
import '../styles/TeachingPortal.css';

const TeachingPortal = () => {
  const [activeWeek, setActiveWeek] = useState('W03');
  const [activeHour, setActiveHour] = useState('H1');

  const { module, cortes, weeks } = teachingPlan;
  const currentWeekData = weeks[activeWeek] || weeks['W00'];
  const currentHourData = currentWeekData.hours.find(h => h.id === activeHour) || currentWeekData.hours[0];

  const handleWeekClick = (weekId) => {
    setActiveWeek(weekId);
    setActiveHour('H1');
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
                    <span>{ra.title}</span>
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
                          className={`week-btn ${wData.status} ${isActive ? 'active' : ''}`}
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

        {/* Hour Selector */}
        <div className="hour-selector">
          {currentWeekData.hours.map(hour => (
            <button
              key={hour.id}
              onClick={() => setActiveHour(hour.id)}
              className={`hour-btn ${activeHour === hour.id ? 'active' : ''}`}
            >
              <strong>{hour.label}</strong>
              <span>{hour.subtitle}</span>
            </button>
          ))}
        </div>

        {/* Data Strip */}
        <div className="data-strip">
          <div className="ds-item"><strong>Módulo:</strong> {module.code}</div>
          <div className="ds-item"><strong>Grupo:</strong> {module.group}</div>
          <div className="ds-item"><strong>Lugar:</strong> {currentHourData.identification.location}</div>
          <div className="ds-item"><strong>Tiempo:</strong> {currentHourData.identification.time}</div>
          <div className="ds-item"><strong>Classroom:</strong> {module.classroomCode}</div>
        </div>

        {/* Modular Class Card */}
        <div className="class-card">
          
          {/* 1. Inicio */}
          <div className="module-section section-inicio">
            <div className="section-header">
              <PlayCircle size={18} />
              <h3>Apertura de Clase</h3>
            </div>
            <div className="section-content">
              <p className="start-question">"{currentHourData.start}"</p>
            </div>
          </div>

          {/* 2. Dictado */}
          <div className="module-section section-dictado">
            <div className="section-header">
              <FileText size={18} />
              <h3>Concepto Clave (Dictado)</h3>
            </div>
            <div className="section-content reading-box">
              <p>{currentHourData.dictation}</p>
            </div>
          </div>

          {/* 3. RA */}
          <div className="module-section section-ra">
            <div className="section-header">
              <Target size={18} />
              <h3>Resultado de Aprendizaje</h3>
            </div>
            <div className="section-content">
              <p>{currentHourData.learningResult}</p>
            </div>
          </div>

          {/* 4. Ficha */}
          <div className="module-section section-ficha">
            <div className="section-header">
              <BookOpen size={18} />
              <h3>Ficha de Identificación</h3>
            </div>
            <div className="section-content ficha-grid">
              <div><strong>Tema:</strong> {currentHourData.identification.topic}</div>
              <div><strong>Evidencia:</strong> {currentHourData.identification.evidence}</div>
              <div><strong>Organización:</strong> {currentHourData.identification.organization}</div>
            </div>
          </div>

          {/* 5. Desarrollo e Infografia */}
          <div className="module-section section-desarrollo">
            <div className="section-header">
              <PenTool size={18} />
              <h3>Desarrollo y Actividad</h3>
            </div>
            <div className="section-content">
              <p className="development-text">{currentHourData.development}</p>
              
              <div className="infographic-container">
                <h4>{currentHourData.infographicTitle}</h4>
                <div className="info-steps">
                  {currentHourData.infographicSteps.map((step, idx) => (
                    <div key={idx} className="info-step">
                      <h5>{step.title}</h5>
                      <p>{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 6. Cierre */}
          <div className="module-section section-cierre">
            <div className="section-header">
              <CheckCircle2 size={18} />
              <h3>Conclusión y Producto</h3>
            </div>
            <div className="section-content">
              <p>{currentHourData.closure}</p>
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
          <h4>Producto Esperado</h4>
          <p className="highlight-text">{currentWeekData.expectedProduct}</p>
        </div>
        
        <div className="radar-card warning">
          <h4>Avisos Institucionales</h4>
          <ul>
            <li>No consumir alimentos cerca de los equipos.</li>
            <li>Subir evidencias a Classroom en tiempo forma.</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default TeachingPortal;
