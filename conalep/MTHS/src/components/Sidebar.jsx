import React, { useState } from 'react';
import { curriculumData } from '../data/curriculum';

const Sidebar = ({ activeWeek, onWeekSelect }) => {
  const [expandedRas, setExpandedRas] = useState(() => {
    const init = {};
    curriculumData.ras.forEach(ra => { init[ra.id] = true; });
    return init;
  });

  const toggleRa = (raId) => {
    setExpandedRas(prev => ({ ...prev, [raId]: !prev[raId] }));
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="school-brand">
          <h1 className="school-title">CONALEP</h1>
          <h2 className="school-subtitle">Pachuca II</h2>
        </div>
        <div className="author-credits">
          <p className="author-label">Realizado por:</p>
          <p className="author-name">Dr. Felipe López Salazar</p>
        </div>
      </div>

      <nav className="nav-container">
        <p className="portal-title">Contenido del Curso</p>
        {[...curriculumData.ras].reverse().map(ra => {
          const isExpanded = expandedRas[ra.id];
          const hasActiveWeek = ra.weeks.some(w => w.id === activeWeek);
          return (
            <div key={ra.id} className={`ra-group ${hasActiveWeek ? 'ra-active' : ''}`}>
              <div className="ra-header" onClick={() => toggleRa(ra.id)}>
                <span className={`chevron ${isExpanded ? 'expanded' : ''}`}>▶</span>
                <span className="ra-title">{ra.title}</span>
              </div>
              {isExpanded && (
                <div className="weeks-container">
                  {[...ra.weeks].reverse().map(week => (
                    <div
                      key={week.id}
                      className={`week-link ${activeWeek === week.id ? 'active' : ''}`}
                      onClick={() => onWeekSelect(week.id)}
                    >
                      {week.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
