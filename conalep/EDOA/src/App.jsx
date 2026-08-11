import React, { useState } from 'react';
import { Monitor, GraduationCap, Layers, Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import WeekView from '@shared/components/WeekView';
import CodeLab from './components/CodeLab';
import ProyectoView from './components/ProyectoView';
import PinModal from '@shared/components/PinModal';
import { curriculumData } from './data/curriculum';
import './styles/App.css';

const assetUrl = (filename) => new URL(`./assets/${filename}`, import.meta.url).href;

function App() {
  const getAutoWeek = () => {
    // EDOA-20 Starts on August 10, 2026
    const startDate = new Date('2026-08-10T00:00:00-06:00');
    const now = new Date();
    const diffMs = now - startDate;
    const diffWeeks = Math.floor(diffMs / (7 * 24 * 60 * 60 * 1000));

    if (diffWeeks <= 0) return 'W00';
    if (diffWeeks >= 18) return 'W18';
    
    return `W${diffWeeks.toString().padStart(2, '0')}`;
  };

  const currentWeek = getAutoWeek();
  const allWeeks    = curriculumData.ras.flatMap(ra => ra.weeks.map(w => w.id));
  const currentIdx  = allWeeks.indexOf(currentWeek);
  const nextWeek    = currentIdx < allWeeks.length - 1 ? allWeeks[currentIdx + 1] : null;

  const [activeWeek, setActiveWeek]       = useState(currentWeek);
  const [activeView, setActiveView]       = useState('curriculum');
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

  const handleWeekChange = (weekId) => {
    setActiveWeek(weekId);
    setActiveView('curriculum');
  };

  const scheduleData = curriculumData.schedules[activeWeek] || {};

  return (
    <div className={`app-container ${isClassMode ? 'class-mode-active' : ''}`}>

      {/* ── Mobile top bar ── */}
      <div className="mobile-header">
        <button className="hamburger-btn" onClick={() => setSidebarOpen(true)}>
          <Menu size={18} />
        </button>
        <span className="mobile-brand">CONALEP · DEWE</span>
      </div>

      <Sidebar
        activeWeek={activeWeek}
        activeView={activeView}
        onWeekSelect={handleWeekChange}
        onViewSelect={setActiveView}
        currentWeek={currentWeek}
        nextWeek={nextWeek}
        isTeacherMode={isTeacherMode}
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

        {activeView === 'curriculum' ? (
          scheduleData?.isHtml ? (
            <div className="iframe-container">
              <iframe src={scheduleData.url} title="Content" />
            </div>
          ) : (
            <WeekView
              key={activeWeek}
              weekId={activeWeek}
              isClassMode={isClassMode}
              isTeacherMode={isTeacherMode}
              isPreviewWeek={isTeacherMode && activeWeek === nextWeek}
              curriculumData={curriculumData}
              assetUrl={assetUrl}
            />
          )
        ) : activeView === 'proyecto' ? (
          <ProyectoView isTeacherMode={isTeacherMode} />
        ) : (
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
