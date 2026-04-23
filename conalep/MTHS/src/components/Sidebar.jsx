import React, { useState } from 'react';
import { BarChart2, ChevronRight, GraduationCap, Lock } from 'lucide-react';
import { curriculumData } from '../data/curriculum';

const POND_DATA = [
  {
    label: "Identificación de vulnerabilidades en línea",
    peso: "30%",
    ras: [
      { id: "1.1", desc: "Malwares y ataques tecnológicos",     act: "1.1.1", peso: "15%" },
      { id: "1.2", desc: "Transformación digital e industria",  act: "1.2.1", peso: "15%" },
    ],
  },
  {
    label: "Configuración tecnológica de dispositivos en PC",
    peso: "35%",
    ras: [
      { id: "2.1", desc: "Instalación y configuración de PCs",          act: "2.1.1", peso: "20%" },
      { id: "2.2", desc: "Configuración de dispositivos tecnológicos",  act: "2.2.1", peso: "15%" },
    ],
  },
  {
    label: "Configuración tecnológica de sistemas operativos",
    peso: "35%",
    ras: [
      { id: "3.1", desc: "Sistemas operativos y dispositivos de red", act: "3.1.1", peso: "20%" },
      { id: "3.2", desc: "Seguridad básica de red",                   act: "3.2.1", peso: "15%" },
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

const Sidebar = ({ activeWeek, onWeekSelect, currentWeek, nextWeek, isTeacherMode, isMobileOpen, onMobileClose }) => {
  const currentIdx = allOrderedWeeks.indexOf(currentWeek);

  const isWeekLocked = (weekId) => {
    const weekIdx = allOrderedWeeks.indexOf(weekId);
    if (weekIdx <= currentIdx) return false;
    if (isTeacherMode) return false;
    return true;
  };

  const [expandedCortes, setExpandedCortes] = useState(() => {
    const init = {};
    curriculumData.cortes.forEach(c => {
      init[c.id] = curriculumData.ras
        .filter(ra => ra.corte === c.id)
        .some(ra => ra.weeks.some(w => w.id === activeWeek));
    });
    return init;
  });

  const [expandedRas, setExpandedRas] = useState(() => {
    const init = {};
    curriculumData.ras.forEach(ra => {
      init[ra.id] = ra.weeks.some(w => w.id === activeWeek);
    });
    return init;
  });

  const toggleCorte = (id) => setExpandedCortes(prev => ({ ...prev, [id]: !prev[id] }));
  const toggleRa    = (id) => setExpandedRas(prev => ({ ...prev, [id]: !prev[id] }));

  const handleWeekClick = (weekId) => {
    if (isWeekLocked(weekId)) return;
    onWeekSelect(weekId);
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
          <PonderacionPanel />

          <p className="portal-title">Contenido del Curso</p>
          {[...curriculumData.cortes].reverse().map(corte => {
            const corteRas     = curriculumData.ras.filter(ra => ra.corte === corte.id);
            const corteExpanded = expandedCortes[corte.id];
            const corteHasActive = corteRas.some(ra => ra.weeks.some(w => w.id === activeWeek));
            return (
              <div key={corte.id} className={`corte-group ${corteHasActive ? 'corte-active' : ''}`}>
                <div className="corte-header" onClick={() => toggleCorte(corte.id)}>
                  <ChevronRight size={12} style={{ transition: 'transform 0.2s ease', transform: corteExpanded ? 'rotate(90deg)' : 'rotate(0deg)', flexShrink: 0 }} />
                  <span className="corte-title">{corte.label}</span>
                  <span className="corte-peso">{corte.peso}</span>
                </div>
                {corteExpanded && corteRas.map(ra => {
                  const raExpanded   = expandedRas[ra.id];
                  const raHasActive  = ra.weeks.some(w => w.id === activeWeek);
                  return (
                    <div key={ra.id} className={`ra-group nested ${raHasActive ? 'ra-active' : ''}`}>
                      <div className="ra-header" onClick={() => toggleRa(ra.id)}>
                        <ChevronRight size={11} style={{ transition: 'transform 0.2s ease', transform: raExpanded ? 'rotate(90deg)' : 'rotate(0deg)', flexShrink: 0, color: 'var(--text-400)' }} />
                        <span className="ra-title">{ra.title}</span>
                      </div>
                      {raExpanded && (
                        <div className="weeks-container">
                          {[...ra.weeks].reverse().map(week => {
                            const isActive  = activeWeek === week.id;
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
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
