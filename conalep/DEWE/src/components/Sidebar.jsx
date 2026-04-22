import React, { useState } from 'react';
import { ChevronRight, FlaskConical, GraduationCap } from 'lucide-react';
import { curriculumData } from '../data/curriculum';

const Sidebar = ({ activeWeek, activeView, onWeekSelect, onViewSelect, currentWeek, isMobileOpen, onMobileClose }) => {
  const [expandedRas, setExpandedRas] = useState(() => {
    const init = {};
    curriculumData.ras.forEach(ra => {
      init[ra.id] = ra.weeks.some(w => w.id === activeWeek);
    });
    return init;
  });

  const toggleRa = (raId) => {
    setExpandedRas(prev => ({ ...prev, [raId]: !prev[raId] }));
  };

  const handleWeekClick = (weekId) => {
    onWeekSelect(weekId);
    onViewSelect('curriculum');
    if (onMobileClose) onMobileClose();
  };

  return (
    <>
      {isMobileOpen && (
        <div className="sidebar-overlay" onClick={onMobileClose} />
      )}
      <aside className={`sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="school-brand">
            <div className="brand-icon">
              <GraduationCap size={18} color="white" strokeWidth={2.5} />
            </div>
            <div className="school-info">
              <h1 className="school-title">CONALEP</h1>
              <p className="school-subtitle">Pachuca II</p>
            </div>
          </div>
          <div className="author-credits">
            <p className="author-label">Realizado por</p>
            <p className="author-name">Dr. Felipe López Salazar</p>
          </div>
        </div>

        <nav className="nav-container">
          <div className="main-nav-section">
            <a
              className={`main-nav-link ${activeView === 'codelab' ? 'active' : ''}`}
              onClick={() => { onViewSelect('codelab'); if (onMobileClose) onMobileClose(); }}
            >
              <FlaskConical size={15} className="doc-icon" />
              Laboratorio de Código
            </a>
          </div>

          <p className="portal-title">Contenido del Curso</p>
          {[...curriculumData.ras].reverse().map(ra => {
            const isExpanded = expandedRas[ra.id];
            const hasActiveWeek = ra.weeks.some(w => w.id === activeWeek);
            return (
              <div key={ra.id} className={`ra-group ${hasActiveWeek ? 'ra-active' : ''}`}>
                <div className="ra-header" onClick={() => toggleRa(ra.id)}>
                  <ChevronRight
                    size={12}
                    style={{ transition: 'transform 0.2s ease', transform: isExpanded ? 'rotate(90deg)' : 'rotate(0deg)', color: 'var(--text-400)', flexShrink: 0 }}
                  />
                  <span className="ra-title">{ra.title}</span>
                </div>
                {isExpanded && (
                  <div className="weeks-container">
                    {[...ra.weeks].reverse().map(week => {
                      const isActive = activeWeek === week.id && activeView === 'curriculum';
                      const isCurrent = currentWeek === week.id;
                      return (
                        <div
                          key={week.id}
                          className={`week-link ${isActive ? 'active' : ''}`}
                          onClick={() => handleWeekClick(week.id)}
                        >
                          <span>{week.label}</span>
                          {isCurrent && <span className="badge-hoy">HOY</span>}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
