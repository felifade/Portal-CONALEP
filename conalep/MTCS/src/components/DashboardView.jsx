import React from 'react';
import { BookOpen, ExternalLink, Calendar, Percent, ShieldCheck } from 'lucide-react';
import { curriculumData } from '../data/curriculum';

const DashboardView = ({ currentWeek, isTeacherMode, nextWeek, allOrderedWeeks }) => {
  const currentIdx = allOrderedWeeks.indexOf(currentWeek);

  const isWeekLocked = (weekId) => {
    const weekIdx = allOrderedWeeks.indexOf(weekId);
    if (weekIdx <= currentIdx) return false;
    if (isTeacherMode) return false;
    return true;
  };

  // Group RAs by Corte
  const rasByCorte = {};
  curriculumData.ras.forEach(ra => {
    if (!rasByCorte[ra.corte]) rasByCorte[ra.corte] = [];
    rasByCorte[ra.corte].push(ra);
  });

  return (
    <div className="dashboard-layout">
      {/* Left Column: Curriculum Content */}
      <div className="dashboard-content">
        <div className="dashboard-header">
          <h2>{curriculumData.subject}</h2>
          <p>Grupo {curriculumData.group} · Módulo Oficial · CONALEP Pachuca II</p>
        </div>

        {curriculumData.cortes.map(corte => (
          <div key={corte.id} className="corte-section">
            <div className="corte-header">
              <h3>{corte.label}</h3>
              <span className="corte-peso">{corte.peso}</span>
            </div>

            <div className="corte-ras">
              {rasByCorte[corte.id]?.map(ra => (
                <div key={ra.id} className="ra-dashboard-card">
                  <div className="ra-dashboard-header">
                    <div className="ra-title-group">
                      <ShieldCheck size={18} className="ra-icon-main" />
                      <h4>{ra.title}</h4>
                    </div>
                    <div className="ra-peso-badge">
                      <Percent size={12} />
                      {ra.peso || corte.peso}
                    </div>
                  </div>
                  
                  <div className="ra-dashboard-weeks">
                    {ra.weeks.map(week => {
                      const locked = isWeekLocked(week.id);
                      const isCurrent = currentWeek === week.id;
                      const isPreview = isTeacherMode && week.id === nextWeek;
                      const scheduleData = curriculumData.schedules[week.id] || {};
                      const isHtml = scheduleData.isHtml;

                      return (
                        <a 
                          key={week.id} 
                          className={`dashboard-week-btn ${locked ? 'locked' : ''} ${isCurrent ? 'current' : ''}`}
                          href={locked ? undefined : (isHtml ? scheduleData.url : `#${week.id}`)}
                          target={isHtml ? "_blank" : undefined}
                          rel={isHtml ? "noopener noreferrer" : undefined}
                          onClick={(e) => {
                            if (locked) {
                              e.preventDefault();
                              return;
                            }
                            if (!isHtml) {
                              e.preventDefault();
                              alert("Esta semana aún no tiene presentación HTML configurada.");
                            }
                          }}
                        >
                          <span className="week-label">{week.label}</span>
                          <div className="week-badges">
                            {isCurrent && <span className="badge-hoy">HOY</span>}
                            {isPreview && <span className="badge-preview">PREVIA</span>}
                            {!locked && isHtml && <ExternalLink size={14} className="ext-icon" />}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Right Column: Radar Operativo / Anuncios */}
      <aside className="dashboard-sidebar">
        <div className="dashboard-sidebar-header">
          <h3>Radar Operativo</h3>
          <p>Anuncios y Avisos Oficiales</p>
        </div>
        <div className="dashboard-iframe-container">
          <iframe 
            src="../../Anuncios/index.html" 
            title="Radar Operativo"
            className="anuncios-iframe"
          />
        </div>
      </aside>
    </div>
  );
};

export default DashboardView;
