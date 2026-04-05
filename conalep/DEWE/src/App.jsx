import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import WeekView from './components/WeekView';
import CodeLab from './components/CodeLab';
import PinModal from './components/PinModal';
import './styles/App.css';

function App() {
  const [activeWeek, setActiveWeek] = useState('W07');
  const [activeView, setActiveView] = useState('curriculum');
  const [isClassMode, setIsClassMode] = useState(false);
  const [isTeacherMode, setIsTeacherMode] = useState(false);
  const [isDualMode, setIsDualMode] = useState(false);
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
    setActiveView('curriculum');
  };

  return (
    <div className={`app-container ${isClassMode ? 'class-mode-active' : ''}`}>
      <Sidebar 
        activeWeek={activeWeek} 
        activeView={activeView}
        onWeekSelect={handleWeekChange} 
        onViewSelect={setActiveView}
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
            className={`dual-mode-btn ${isDualMode ? 'active' : ''}`}
            onClick={() => setIsDualMode(!isDualMode)}
          >
            {isDualMode ? '🚀 Salir de Modo Dual' : '🚀 Modo Dual'}
          </button>
          
          <button 
            className={`teacher-mode-btn ${isTeacherMode ? 'active' : ''}`}
            onClick={handleTeacherModeToggle}
          >
            {isTeacherMode ? '👨‍🏫 Salir de Modo Docente' : '👨‍🏫 Modo Docente'}
          </button>
        </div>

        {activeView === 'curriculum' ? (
          <WeekView 
            weekId={activeWeek} 
            isClassMode={isClassMode} 
            isTeacherMode={isTeacherMode}
            isDualMode={isDualMode} 
          />
        ) : (
          <CodeLab />
        )}
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
