import React, { useState } from 'react';
import { Monitor, GraduationCap, Menu } from 'lucide-react';
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

    if (diffWeeks < 0)   return 'W00';
    if (diffWeeks <= 6)  return `W0${diffWeeks}`;
    if (diffWeeks <= 8)  return 'W06';
    if (diffWeeks === 9) return 'W07';
    return 'W08';
  };

  const currentWeek = getAutoWeek();

  const [activeWeek, setActiveWeek]       = useState(currentWeek);
  const [isClassMode, setIsClassMode]     = useState(false);
  const [isTeacherMode, setIsTeacherMode] = useState(false);
  const [showPinModal, setShowPinModal]   = useState(false);
  const [sidebarOpen, setSidebarOpen]     = useState(false);

  const handleTeacherToggle = () => {
    if (!isTeacherMode) {
      setShowPinModal(true);
    } else {
      setIsTeacherMode(false);
    }
  };

  return (
    <div className={`app-container ${isClassMode ? 'class-mode-active' : ''}`}>

      {/* ── Mobile top bar ── */}
      <div className="mobile-header">
        <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
          <Menu size={18} />
        </button>
        <span className="mobile-brand">CONALEP · MTHS</span>
      </div>

      <Sidebar
        activeWeek={activeWeek}
        onWeekSelect={setActiveWeek}
        currentWeek={currentWeek}
        isMobileOpen={sidebarOpen}
        onMobileClose={() => setSidebarOpen(false)}
      />

      <main className="main-content">
        <div className="class-mode-toggle-container">
          <button
            className={`class-mode-btn ${isClassMode ? 'active' : ''}`}
            onClick={() => setIsClassMode(!isClassMode)}
          >
            <Monitor size={14} />
            {isClassMode ? 'Salir de Clase' : 'Modo Clase'}
          </button>
          <button
            className={`teacher-mode-btn ${isTeacherMode ? 'active' : ''}`}
            onClick={handleTeacherToggle}
          >
            <GraduationCap size={14} />
            {isTeacherMode ? 'Salir Docente' : 'Modo Docente'}
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
          onSuccess={() => { setIsTeacherMode(true); setShowPinModal(false); }}
          onCancel={() => setShowPinModal(false)}
        />
      )}
    </div>
  );
}

export default App;
