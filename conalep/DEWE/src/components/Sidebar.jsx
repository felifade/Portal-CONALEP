import React, { useState } from 'react';
import { BarChart2, ChevronRight, FlaskConical, GraduationCap, Lock } from 'lucide-react';
import { curriculumData } from '../data/curriculum';

const POND_DATA = [
  {
    label: "Desarrollo de páginas web estáticas",
    peso: "60%",
    ras: [
      { id: "1.1", desc: "Estructura del sitio web", act: "1.1.1", peso: "10%" },
      { id: "1.2", desc: "HTML estático",            act: "1.2.1", peso: "25%" },
      { id: "1.3", desc: "Hojas de estilo CSS",      act: "1.3.1", peso: "25%" },
    ],
  },
  {
    label: "Desarrollo de páginas web dinámicas",
    peso: "40%",
    ras: [
      { id: "2.1", desc: "Interactividad con JavaScript", act: "2.1.1", peso: "20%" },
      { id: "2.2", desc: "Acceso a bases de datos",       act: "2.2.1", peso: "20%" },
    ],
  },
];

const PonderacionPanel = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="ponderacion-panel">
      <div className="ponderacion-header" onClick={() => setOpen(o => !o)}>
        <BarChart2 size={13} className="pond-icon" />
        <span>Ponderación</span>
        <ChevronRight size={12} style={{ transform: open ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease', flexShrink: 0 }} />
      </div>
      {open && (
        <div className="ponderacion-body">
          {POND_DATA.map((unit, ui) => (
            <div key={ui} className="pond-unit">
              <div className="pond-unit-header">
                <span className="pond-unit-title">{ui + 1}. {unit.label}</span>
                <span className="pond-unit-peso">{unit.peso}</span>
              </div>
              {unit.ras.map((ra, ri) => (
                <div key={ri} className="pond-ra-row">
                  <span className="pond-ra-id">{ra.id}</span>
                  <span className="pond-ra-desc">{ra.desc}</span>
                  <span className="pond-ra-peso">{ra.peso}</span>
                </div>
              ))}
            </div>
          ))}
          <div className="pond-total">
            <span>Total del módulo</span>
            <span>100%</span>
          </div>
        </div>
      )}
    </div>
  );
};

const allOrderedWeeks = curriculumData.ras.flatMap(ra => ra.weeks.map(w => w.id));

const Sidebar = ({ activeWeek, activeView, onWeekSelect, onViewSelect, currentWeek, nextWeek, isTeacherMode, isMobileOpen, onMobileClose }) => {
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

  const currentIdx = allOrderedWeeks.indexOf(currentWeek);

  const isWeekLocked = (weekId) => {
    const weekIdx = allOrderedWeeks.indexOf(weekId);
    if (weekIdx <= currentIdx) return false;
    if (isTeacherMode) return false;
    return true;
  };

  const handleWeekClick = (weekId) => {
    if (isWeekLocked(weekId)) return;
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

          <PonderacionPanel />

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
                      const isActive  = activeWeek === week.id && activeView === 'curriculum';
                      const isCurrent = currentWeek === week.id;
                      const locked    = isWeekLocked(week.id);
                      const isPreview = isTeacherMode && week.id === nextWeek;
                      return (
                        <div
                          key={week.id}
                          className={`week-link ${isActive ? 'active' : ''} ${locked ? 'locked' : ''}`}
                          onClick={() => handleWeekClick(week.id)}
                        >
                          <span>{week.label}</span>
                          {locked    && <Lock size={11} className="lock-icon" />}
                          {isCurrent && <span className="badge-hoy">HOY</span>}
                          {isPreview && <span className="badge-preview">PREVIA</span>}
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
