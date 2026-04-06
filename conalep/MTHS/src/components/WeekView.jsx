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

const HourPage = ({ hour, index, total, isTeacherMode, onPrev, onNext }) => {
  const [showWork, setShowWork] = useState(true);
  const [copyStatus, setCopyStatus] = useState('Copiar');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyStatus('¡Copiado!');
      setTimeout(() => setCopyStatus('Copiar'), 2000);
    });
  };

  return (
    <div className="notebook-page-wrapper nocopy">
      <div className="page-header-nav">
        <button className="nav-page-btn prev" onClick={onPrev} disabled={index === 0}>
           ← Anterior
        </button>
        <span className="page-indicator">Hoja {index + 1} de {total}</span>
        <button className="nav-page-btn next" onClick={onNext} disabled={index === total - 1}>
          Siguiente →
        </button>
      </div>

      <div className="notebook-sheet">
        <div className="sheet-header">
          <span className="sheet-time">{hour.time}</span>
          <h2 className="sheet-title">{hour.title || 'Tema del día'}</h2>
        </div>

        <div className="sheet-body">
          <div className="pedagogical-block theory">
            <h4 className="block-title">🧠 Teoría y Conceptos</h4>
            <div className="block-body">
              <SmartText text={hour.theory} />
            </div>
          </div>

          <div className="work-sections visible">
            <div className="pedagogical-grid">
              <div className="pedagogical-block notebook">
                <h4 className="block-title">✏️ En la libreta</h4>
                <div className="block-body">
                  <SmartText text={hour.notebook} />
                </div>
              </div>
              
              <div className="pedagogical-block practice">
                <h4 className="block-title">💻 Práctica en PC</h4>
                <div className="block-body">
                  <SmartText text={hour.practice} />
                </div>
              </div>
            </div>

            {hour.code && (
              <div className="pedagogical-block code-section allow-copy">
                <div className="block-header-row">
                  <h4 className="block-title">📟 Código de Referencia</h4>
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
                <h4 className="block-title">🎯 Producto Final</h4>
                <div className="block-body">
                  <SmartText text={hour.product} />
                </div>
              </div>
            )}
          </div>

          {isTeacherMode && hour.teacherNotes && (
            <div className="pedagogical-block teacher-only">
              <h4 className="block-title">👨‍🏫 Notas del Docente</h4>
              <div className="block-body">
                <SmartText text={hour.teacherNotes} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const WeekView = ({ weekId, isClassMode, isTeacherMode }) => {
  const weekData = curriculumData.schedules[weekId];
  const [activeDayIdx, setActiveDayIdx] = useState(0);
  const [activeHourIdx, setActiveHourIdx] = useState(0);

  if (!weekData) return <div className="no-data">No se encontró información para esta semana.</div>;
  if (!weekData.days || weekData.days.length === 0) {
    return (
      <div className="week-view notebook-view empty-week-state">
        <header className="header-section">
          <div className="header-top">
            <span className="subject-badge">{curriculumData.subject}</span>
          </div>
          <h1 className="subject-title">Semana {weekId.replace('W', '')}</h1>
        </header>
        <div className="notebook-container">
          <div className="notebook-sheet empty-sheet">
            <div className="empty-message-content">
              <span className="empty-icon">🚧</span>
              <h2>Página en construcción</h2>
              <p>El Dr. Felipe López está preparando el contenido para esta semana. ¡Vuelve pronto!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentDay = weekData.days[activeDayIdx];
  const isSpecialDay = currentDay.id === 'key';
  
  const handleDaySelect = (idx) => {
    setActiveDayIdx(idx);
    setActiveHourIdx(0);
  };

  const nextHour = () => {
    if (activeHourIdx < currentDay.hours.length - 1) setActiveHourIdx(activeHourIdx + 1);
  };

  const prevHour = () => {
    if (activeHourIdx > 0) setActiveHourIdx(activeHourIdx - 1);
  };

  return (
    <div className={`week-view notebook-view ${isClassMode ? 'class-mode' : ''}`}>
      <header className="header-section">
        <div className="header-top">
          <span className="subject-badge">{curriculumData.subject}</span>
          <p className="group-info">Grupo {curriculumData.group} | Dr. Felipe López</p>
        </div>
        <h1 className="subject-title">Semana {weekId.replace('W', '')}</h1>
      </header>

      <DayTabs 
        days={weekData.days} 
        activeIndex={activeDayIdx} 
        onSelect={handleDaySelect} 
      />

      <div className="notebook-container">
        {isSpecialDay ? (
          <div className="notebook-sheet special">
             <div className="sheet-header">
                <h2 className="sheet-title">{currentDay.label}</h2>
             </div>
             <div className="sheet-body">
               <div className="key-code-view">
                  {currentDay.hours?.map((h, i) => (
                    <div key={i} className="pedagogical-block code-section">
                      <h4 className="block-title">{h.time}</h4>
                      <pre className="code-editor"><code>{h.code}</code></pre>
                    </div>
                  ))}
               </div>
             </div>
          </div>
        ) : (
          <div className="day-notebook-content">
            {currentDay.purpose && activeHourIdx === 0 && (
              <div className="day-purpose-banner notebook-purpose">
                <span className="purpose-icon">🎯</span>
                <div className="purpose-text">
                  <strong>Propósito de hoy:</strong>
                  <SmartText text={currentDay.purpose} />
                </div>
              </div>
            )}

            <HourPage 
              hour={currentDay.hours[activeHourIdx]} 
              index={activeHourIdx}
              total={currentDay.hours.length}
              isTeacherMode={isTeacherMode}
              onPrev={prevHour}
              onNext={nextHour}
            />

            {activeHourIdx === currentDay.hours.length - 1 && (
              <div className="day-closure-notebook">
                {currentDay.cierre && (
                  <div className="day-conclusion-block">
                    <h4 className="conclusion-title">✅ Cierre de Clase</h4>
                    <SmartText text={currentDay.cierre} />
                  </div>
                )}
                {currentDay.frase_docente && (
                  <div className="day-quote-block">
                    <p className="quote-text"><em>"{currentDay.frase_docente}"</em></p>
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
