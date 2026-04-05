import React, { useState } from 'react';
import { curriculumData } from '../data/curriculum';

// Helper component to format text as lists if needed
const SmartText = ({ text }) => {
  if (!text) return null;

  const lines = text.split(/\n|(?=\s[0-9]\.\s)|(?=\s[-•]\s)/g).map(l => l.trim()).filter(l => l.length > 0);

  if (lines.length <= 1) {
    return <p>{text}</p>;
  }

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
          <img 
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
  const visualActivities = activities?.filter(a => a.image) || [];

  if (visualActivities.length === 0) {
    return (
      <div className="dual-gallery-empty">
        <p>No hay infografías disponibles para esta semana.</p>
      </div>
    );
  }

  return (
    <div className="dual-gallery-view">
      <h2 className="gallery-title">🖼️ Galería de Infografías (Modo Dual)</h2>
      <div className="gallery-grid">
        {visualActivities.map((activity, idx) => (
          <div key={idx} className="gallery-item">
            <h3 className="gallery-item-title">{activity.title}</h3>
            <div className="gallery-img-wrapper">
              <img 
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

const HourBlock = ({ hour, index, isTeacherMode }) => {
  const [showWork, setShowWork] = useState(index === 0);
  const [copyStatus, setCopyStatus] = useState('Copiar');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyStatus('¡Copiado!');
      setTimeout(() => setCopyStatus('Copiar'), 2000);
    });
  };

  return (
    <div className={`hour-block ${showWork ? 'work-open' : ''}`}>
      <div className="hour-block-header">
        <span className="hour-label">{hour.time} {hour.title && <span className="hour-title">— {hour.title}</span>}</span>
      </div>
      
      <div className="hour-block-content">
        <div className="pedagogical-block theory">
          <h4 className="block-title">🧠 Teoría (10 min)</h4>
          <div className="block-body">
            <SmartText text={hour.theory} />
          </div>
        </div>
        
        <div className="work-toggle" onClick={() => setShowWork(!showWork)}>
          <span>{showWork ? '▲ Ocultar Actividades y Código' : '▼ Ver Actividades y Código'}</span>
        </div>

        {showWork && (
          <div className="work-sections">
            <div className="pedagogical-block notebook">
              <h4 className="block-title">✏️ Actividad en libreta</h4>
              <div className="block-body">
                <SmartText text={hour.notebook} />
              </div>
            </div>
            
            <div className="pedagogical-block practice">
              <h4 className="block-title">💻 Actividad práctica</h4>
              <div className="block-body">
                <SmartText text={hour.practice} />
              </div>
            </div>

            {hour.code && (
              <div className="pedagogical-block code-section">
                <div className="block-header-row">
                  <h4 className="block-title">📟 Código de la práctica</h4>
                  <button className="copy-btn" onClick={() => handleCopy(hour.code)}>
                    {copyStatus}
                  </button>
                </div>
                <div className="code-editor-container">
                  <pre className="code-editor">
                    <code>{hour.code}</code>
                  </pre>
                </div>
              </div>
            )}

            {hour.product && (
              <div className="pedagogical-block product-block">
                <h4 className="block-title">🎯 Producto de la sesión</h4>
                <div className="block-body">
                  <SmartText text={hour.product} />
                </div>
              </div>
            )}
          </div>
        )}

        {isTeacherMode && hour.teacherNotes && (
          <div className="pedagogical-block teacher-only">
            <div className="block-header-row">
              <h4 className="block-title">👨‍🏫 Solo Docente: Notas y guía</h4>
            </div>
            <div className="block-body">
              <SmartText text={hour.teacherNotes} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const DayAccordion = ({ day, index, isTeacherMode }) => {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <div className={`day-card ${isOpen ? 'is-open' : ''}`}>
      <div className="day-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{day.label}</h3>
        <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <div className="day-content">
          {day.purpose && (
            <div className="day-purpose-banner">
              <span className="purpose-icon">🎯</span>
              <div className="purpose-text">
                <strong>Propósito de la jornada:</strong>
                <SmartText text={day.purpose} />
              </div>
            </div>
          )}

          {day.id === 'dual' ? (
            <div className="dual-repository-view">
              <div className="repository-intro">
                Este apartado contiene las actividades específicas para estudiantes en modelo dual y aquellos con inasistencia justificada.
              </div>
              <div className="activities-list">
                {day.activities ? (
                  day.activities.map((activity, idx) => (
                    <DualActivityBlock key={idx} activity={activity} />
                  ))
                ) : (
                  <div className="single-block-content">
                    <div className="block-body">
                      <SmartText text={day.content || (day.hours && day.hours[0].notebook)} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="hours-list">
              {day.hours.map((hour, idx) => (
                <HourBlock key={idx} hour={hour} index={idx} isTeacherMode={isTeacherMode} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const WeekView = ({ weekId, isClassMode, isTeacherMode, isDualMode }) => {
  const weekData = curriculumData.schedules[weekId];

  if (!weekData) return <div className="no-data">No se encontró información para esta semana.</div>;

  // Identify Dual Activities for Gallery
  const dualDay = weekData.days.find(d => d.id === 'dual');

  return (
    <div className={`week-view whiteboard-mode ${isClassMode ? 'class-mode' : ''}`}>
      <header className="header-section">
        <span className="subject-badge">{curriculumData.subject}</span>
        <h1 className="subject-title">Semana {weekId.replace('W', '')}</h1>
        <p className="group-info">Panel de Control Académico | Pizarrón Digital</p>
      </header>

      {isDualMode ? (
        <DualGallery activities={dualDay?.activities} />
      ) : (
        <div className="days-list">
          {weekData.days.map((day, index) => (
            <DayAccordion key={day.id} day={day} index={index} isTeacherMode={isTeacherMode} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WeekView;
