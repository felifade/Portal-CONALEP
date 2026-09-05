import re

with open('conalep/EDOA_V2/src/components/TeachingPortal.jsx', 'r') as f:
    content = f.read()

# Insert activeCorte calculation
content = content.replace(
    "const currentSessionData = currentWeekData.sessions.find(s => s.id === activeSession) || currentWeekData.sessions[0];",
    "const currentSessionData = currentWeekData.sessions.find(s => s.id === activeSession) || currentWeekData.sessions[0];\n  const activeCorte = cortes.find(c => c.ras.some(r => r.weeks.includes(activeWeek))) || cortes[0];"
)

# Replace the <aside className="corte-rail"> block
old_rail = """      {/* LEFT COLUMN: CorteRail */}
      <aside className="corte-rail">
        <div 
          className="rail-header" 
          onClick={handleBrandClick} 
          style={{ cursor: 'pointer', userSelect: 'none' }}
          title={isTeacherMode ? "Modo Docente Activo" : "CONALEP Pachuca II (Triple clic para Acceso Docente)"}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: 0 }}>
              <School size={18} /> {module.campus}
            </h3>
            {isTeacherMode ? (
              <ShieldCheck size={18} style={{ color: '#10b981' }} title="Modo Docente Activo" />
            ) : (
              <KeyRound size={15} style={{ opacity: 0.35 }} title="Triple clic para PIN Docente" />
            )}
          </div>
          <p>{module.teacher}</p>
          <div className="module-badge">{module.code} · {module.group}</div>
        </div>

        <div className="rail-scroll">
          {cortes.map(corte => (
            <div key={corte.id} className="corte-group">
              <div className="corte-group-header">
                <h4>{corte.label}</h4>
                <span className="peso-badge">{corte.peso}</span>
              </div>
              
              <div className="corte-meta-row">
                <span className="corte-meta-dates">{corte.dates}</span>
                {corte.deadline && (
                  <span className="corte-deadline-pill" title={`Periodo de captura en SAE: ${corte.captureDates}`}>
                    <Clock size={10} />
                    <span>Límite: <strong>{corte.deadline}</strong></span>
                  </span>
                )}
              </div>
              
              {corte.ras.map(ra => (
                <div key={ra.id} className="ra-group">
                  <div className="ra-title">
                    <BookOpen size={14} />
                    <span><strong>{ra.id}</strong>: {ra.title}</span>
                    <span className="peso-badge" style={{ marginLeft: 'auto', fontSize: '10px', background: '#dbeafe', color: '#1d4ed8' }}>
                      {ra.peso}
                    </span>
                  </div>
                  <div className="week-buttons">
                    {ra.weeks.map(weekId => {
                      const wData = weeks[weekId];
                      if (!wData) return null;
                      const isActive = activeWeek === weekId;
                      return (
                        <button
                          key={weekId}
                          onClick={() => handleWeekClick(weekId)}
                          className={`week-btn ${wData.status} ${isActive ? 'selected' : ''}`}
                          title={wData.title}
                        >
                          {weekId}
                          {wData.status === 'active' && <span className="active-dot"></span>}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Rail Footer: Teacher Mode indicator / button */}
        <div className="rail-footer">
          {isTeacherMode ? (
            <div className="teacher-badge-active">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} />
                <span>Modo Docente</span>
              </div>
              <button onClick={handleExitTeacherMode} className="btn-exit-docente" title="Volver a vista Alumno">
                Salir
              </button>
            </div>
          ) : (
            <button onClick={() => setShowPinModal(true)} className="btn-open-docente">
              <KeyRound size={13} />
              <span>Acceso Docente con PIN</span>
            </button>
          )}
        </div>
      </aside>"""

new_rail = """      {/* LEFT COLUMN: Lesson Rail (MTCS Replica) */}
      <aside className="lesson-rail">
        <div
          className="lesson-brand"
          onClick={handleBrandClick}
          style={{ cursor: 'pointer', userSelect: 'none' }}
          title={isTeacherMode ? "Modo Docente Activo" : "CONALEP Pachuca II (Triple clic para Acceso Docente)"}
        >
          <School size={22} />
          <div style={{ flex: 1 }}>
            <strong>{module.code}</strong>
            <span>{module.group} · {module.campus}</span>
          </div>
          {isTeacherMode ? (
            <ShieldCheck size={18} style={{ color: '#10b981' }} title="Modo Docente Activo" />
          ) : (
            <KeyRound size={15} style={{ opacity: 0.35 }} title="Triple clic para PIN Docente" />
          )}
        </div>

        <div className="corte-stack">
          {cortes.map((corte) => (
            <section
              className={`corte-card ${activeCorte.id === corte.id ? 'active' : ''}`}
              key={corte.id}
            >
              <div className="corte-card-header">
                <span>{corte.label}</span>
                <strong>{corte.peso}</strong>
              </div>
              <div className="corte-meta-row" style={{marginBottom: '10px', marginTop: '6px'}}>
                <span className="corte-meta-dates">{corte.dates || 'Semestre'}</span>
                {corte.deadline && (
                  <span className="corte-deadline-pill" title={`Periodo de captura en SAE: ${corte.captureDates}`}>
                    <Clock size={10} />
                    <span>Límite: <strong>{corte.deadline}</strong></span>
                  </span>
                )}
              </div>

              <div className="ra-list">
                {corte.ras.map((ra) => {
                  const loadedWeeks = ra.weeks.map(wId => weeks[wId]).filter(Boolean);

                  return (
                    <div className="ra-mini" key={ra.id}>
                      <div className="ra-mini-top">
                        <div>
                          <strong>{ra.id}</strong>
                          <span>{ra.title}</span>
                        </div>
                        <small>{ra.peso}</small>
                      </div>

                      {loadedWeeks.length > 0 && (
                        <div className="ra-weeks-grid">
                          {loadedWeeks.map((week) => {
                            const isCurrent = activeWeek === week.id;
                            const isEnCurso = week.status === 'active';

                            return (
                              <button
                                key={week.id}
                                className={`ra-week-pill ${isCurrent ? 'active' : ''} ${isEnCurso ? 'is-current' : ''}`}
                                onClick={() => handleWeekClick(week.id)}
                                title={`${week.label}: ${week.title}`}
                              >
                                <span className="pill-badge">{week.id}</span>
                                <span className="pill-label">{week.label}</span>
                                {isEnCurso && <span className="pill-status-dot" title="En curso">●</span>}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        {/* Rail Footer */}
        <div style={{ marginTop: 'auto', paddingTop: '15px' }}>
          {isTeacherMode ? (
            <div className="teacher-badge-active" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#dcfce7', padding: '10px 15px', borderRadius: '8px', color: '#166534', fontSize: '13px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} />
                <strong>Modo Docente</strong>
              </div>
              <button onClick={handleExitTeacherMode} style={{ background: 'transparent', border: 'none', color: '#166534', cursor: 'pointer', textDecoration: 'underline', fontSize: '12px' }}>
                Salir
              </button>
            </div>
          ) : (
            <button onClick={() => setShowPinModal(true)} style={{ width: '100%', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '8px', color: '#64748b', fontSize: '12px', cursor: 'pointer' }}>
              <KeyRound size={13} />
              <span>Acceso Docente con PIN</span>
            </button>
          )}
        </div>
      </aside>"""

content = content.replace(old_rail, new_rail)

with open('conalep/EDOA_V2/src/components/TeachingPortal.jsx', 'w') as f:
    f.write(content)

print("TeachingPortal.jsx updated successfully!")
