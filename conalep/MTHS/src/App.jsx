import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import WeekView from './components/WeekView';
import PinModal from './components/PinModal';
import './styles/App.css';

function App() {
  const getAutoWeek = () => {
    const startDate = new Date('2026-02-09');
    const now = new Date();
    const diffMs = now - startDate;
    const diffWeeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));
    
    if (diffWeeks < 0) return 'W00';
    if (diffWeeks <= 6) return `W0${diffWeeks}`;
    if (diffWeeks <= 8) return 'W06'; // Semanas de Vacaciones
    if (diffWeeks === 9) return 'W07';
    if (diffWeeks >= 10) return 'W08';
    return 'W00';
  };

  const [activeWeek, setActiveWeek] = useState(getAutoWeek());
  const [isClassMode, setIsClassMode] = useState(false);
  const [isTeacherMode, setIsTeacherMode] = useState(false);
  const [showPinModal, setShowPinModal] = useState(false);

  const handleTeacherModeToggle = () => {
    if (!isTeacherMode) {
      setShowPinModal(true);
    } else {
      setIsTeacherMode(false);
    }
  };

  const handlePinSuccess = () => {
    setIsTeacherMode(true);
    setShowPinModal(false);
  };

  const handleWeekChange = (weekId) => {
    setActiveWeek(weekId);
  };

  return (
    <div className={`app-container ${isClassMode ? 'class-mode-active' : ''}`}>
      <Sidebar 
        activeWeek={activeWeek} 
        onWeekSelect={handleWeekChange} 
      />
      <main className="main-content">
        <div className="class-mode-toggle-container">
          <button 
            className={`class-mode-btn ${isClassMode ? 'active' : ''}`}
            onClick={() => setIsClassMode(!isClassMode)}
          >
            {isClassMode ? '📺 Salir de Modo Clase' : '🔦 Modo Clase'}
          </button>
          
          <button 
            className={`teacher-mode-btn ${isTeacherMode ? 'active' : ''}`}
            onClick={handleTeacherModeToggle}
          >
            {isTeacherMode ? '👨‍🏫 Salir de Modo Docente' : '👨‍🏫 Modo Docente'}
          </button>
        </div>

        <WeekView 
          weekId={activeWeek} 
          isClassMode={isClassMode} 
          isTeacherMode={isTeacherMode}
        />
      </main>

      {showPinModal && (
        <PinModal 
          onSuccess={handlePinSuccess} 
          onCancel={() => setShowPinModal(false)} 
        />
      )}
    </div>
  );
}

export default App;
