import React, { useState } from 'react';
import { curriculumData } from '../data/curriculum';

const Sidebar = ({ activeWeek, onWeekSelect }) => {
  // Store which RAs are expanded. Default to opening the RA that contains the active week.
  const [expandedRas, setExpandedRas] = useState(() => {
    const parentRa = curriculumData.ras.find(ra =>
      ra.weeks.some(w => w.id === activeWeek)
    );
    return parentRa ? [parentRa.id] : [curriculumData.ras[0].id];
  });

  const toggleRa = (raId) => {
    setExpandedRas(prev =>
      prev.includes(raId)
        ? prev.filter(id => id !== raId)
        : [...prev, raId]
    );
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
        <div className="sidebar-divider">CONTENIDO DEL CURSO</div>

        {[...curriculumData.ras].reverse().map((ra) => {
          const isExpanded = expandedRas.includes(ra.id);
          const isActiveRA = ra.weeks.some(w => w.id === activeWeek);

          return (
            <div key={ra.id} className={`ra-group ${isActiveRA ? 'ra-active' : ''}`}>
              <div
                className="ra-header"
                onClick={() => toggleRa(ra.id)}
              >
                <span className={`chevron ${isExpanded ? 'expanded' : ''}`}>▶</span>
                <h2 className="ra-title">{ra.title}</h2>
              </div>

              {isExpanded && (
                <div className="weeks-container">
                  {[...ra.weeks].reverse().map((week) => (
                    <a
                      key={week.id}
                      className={`week-link ${activeWeek === week.id ? 'active' : ''}`}
                      onClick={() => onWeekSelect(week.id)}
                    >
                      <span className="doc-icon">📄</span>
                      {week.label}
                    </a>
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
