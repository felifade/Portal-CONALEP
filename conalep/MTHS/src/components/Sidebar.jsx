import React, { useState } from 'react';
import { curriculumData } from '../data/curriculum';

// ── Calendarización del semestre (solo MTHS) ──────────────────
const MTHS_SEMANAS = [
  { num: 1,  date: '16 Feb', ra: 'RA 1.1', title: 'Identifica malwares y ataques tecnológicos para la posterior aplicación de procedimientos de mitigación y seguridad en línea que permita la protección de datos de la organización.', hours: 10 },
  { num: 3,  date: '2 Mar',  ra: 'RA 1.2', title: 'Contextualiza la transformación digital de acuerdo con su aplicación en la industria y la vida cotidiana para llevar a cabo procesos de conexión y automatización.', hours: 10 },
  { num: 5,  date: '16 Mar', ra: 'RA 2.1', title: 'Ejecuta la instalación y configuración de computadoras personales para su óptimo funcionamiento, empleando componentes y protocolos de armado y funcionalidad.', hours: 20 },
  { num: 9,  date: '27 Abr', ra: 'RA 2.2', title: 'Ejecuta la instalación y configuración de dispositivos tecnológicos para su óptimo funcionamiento, empleando componentes y protocolos de uso y conectividad.', hours: 15 },
  { num: 13, date: '25 May', ra: 'RA 3.1', title: 'Configura sistemas operativos y dispositivos de red para su óptimo funcionamiento y conectividad, empleando las herramientas y requisitos tecnológicos.', hours: 20 },
  { num: 16, date: '15 Jun', ra: 'RA 3.2', title: 'Implementa la seguridad básica de red para la protección de dispositivos e información de usuarios haciendo uso de protocolos de configuración y protección tecnológica.', hours: 15 },
];

const WEEK_STARTS_MTHS = [
  [1,'2026-02-16'],[2,'2026-02-23'],[3,'2026-03-02'],[4,'2026-03-09'],
  [5,'2026-03-16'],[6,'2026-03-23'],[7,'2026-04-13'],[8,'2026-04-20'],
  [9,'2026-04-27'],[10,'2026-05-04'],[11,'2026-05-11'],[12,'2026-05-18'],
  [13,'2026-05-25'],[14,'2026-06-01'],[15,'2026-06-08'],[16,'2026-06-15'],
  [17,'2026-06-22'],[18,'2026-06-29'],
].map(([n,d]) => [n, new Date(d)]);

function getCurrentSemanaNum() {
  const today = new Date();
  let current = null;
  for (const [n, start] of WEEK_STARTS_MTHS) {
    if (today >= start) current = n;
  }
  return current;
}

const CalendarioSidebar = () => {
  const [open, setOpen] = useState(true);
  const [expanded, setExpanded] = useState(null);
  const currentNum = getCurrentSemanaNum();

  const toggle = (num) => setExpanded(prev => prev === num ? null : num);

  return (
    <div className="cal-sidebar-section">
      <div className="cal-sidebar-header" onClick={() => setOpen(o => !o)}>
        <span className="cal-sidebar-icon">📅</span>
        <span className="cal-sidebar-label">Calendarización</span>
        <span className={`cal-sidebar-chevron ${open ? 'open' : ''}`}>▶</span>
      </div>

      {open && (
        <div className="cal-sidebar-list">
          {MTHS_SEMANAS.map(s => {
            const isCurrent = currentNum !== null && currentNum >= s.num &&
              (MTHS_SEMANAS.find(n => n.num > s.num)?.num ?? 99) > currentNum;
            const isExpanded = expanded === s.num;

            return (
              <div key={s.num} className={`cal-sidebar-item ${isCurrent ? 'current' : ''}`}>
                <div className="cal-sidebar-item-header" onClick={() => toggle(s.num)}>
                  <span className="cal-sidebar-week-num">S{String(s.num).padStart(2,'0')}</span>
                  <div className="cal-sidebar-item-meta">
                    <span className="cal-sidebar-date">{s.date}</span>
                    <span className="cal-sidebar-ra">{s.ra}</span>
                  </div>
                  <span className="cal-sidebar-hours">{s.hours}h</span>
                  <span className={`cal-sidebar-toggle ${isExpanded ? 'open' : ''}`}>▾</span>
                </div>
                {isExpanded && (
                  <div className="cal-sidebar-item-body">
                    {s.title}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

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

      <CalendarioSidebar />
    </aside>
  );
};

export default Sidebar;
