import React, { useState } from 'react';
import { Monitor, GraduationCap, Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import DashboardView from './components/DashboardView';
import CodeLab from './components/CodeLab';
import PinModal from '@shared/components/PinModal';
import { curriculumData } from './data/curriculum';
import './styles/App.css';

function App() {
  const getAutoWeek = () => {
    // MTCS-20 Starts on August 10, 2026
    const startDate = new Date('2026-08-10T00:00:00-06:00');
    const now = new Date();
    const diffMs = now - startDate;
    const diffWeeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));

    if (diffWeeks <= 0) return 'W00';
    if (diffWeeks >= 19) return 'W19';
    
    return `W${diffWeeks.toString().padStart(2, '0')}`;
  };

  const currentWeek = getAutoWeek();
  const allOrderedWeeks = curriculumData.ras.flatMap(ra => ra.weeks.map(w => w.id));
  const currentIdx  = allOrderedWeeks.indexOf(currentWeek);
  const nextWeek    = currentIdx < allOrderedWeeks.length - 1 ? allOrderedWeeks[currentIdx + 1] : null;

  const [activeView, setActiveView]       = useState('dashboard');
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
        <span className="mobile-brand">CONALEP · MTCS</span>
      </div>

      <Sidebar
        activeView={activeView}
        onViewSelect={setActiveView}
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

        {activeView === 'dashboard' && (
          <DashboardView 
            currentWeek={currentWeek}
            isTeacherMode={isTeacherMode}
            nextWeek={nextWeek}
            allOrderedWeeks={allOrderedWeeks}
          />
        )}

        {activeView === 'codelab' && (
          <CodeLab />
        )}
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
