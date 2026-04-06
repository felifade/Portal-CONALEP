import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import WeekView from './components/WeekView';
import PinModal from './components/PinModal';
import './styles/App.css';

function App() {
  const [activeWeek, setActiveWeek] = useState('W08');
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
