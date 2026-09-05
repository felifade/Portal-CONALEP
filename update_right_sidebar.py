import re

with open('conalep/EDOA_V2/src/components/TeachingPortal.jsx', 'r') as f:
    content = f.read()

# 1. Insert activeRa calculation
content = content.replace(
    "const activeCorte = cortes.find(c => c.ras.some(r => r.weeks.includes(activeWeek))) || cortes[0];",
    "const activeCorte = cortes.find(c => c.ras.some(r => r.weeks.includes(activeWeek))) || cortes[0];\n  const activeRa = activeCorte.ras.find(r => r.weeks.includes(activeWeek)) || activeCorte.ras[0];"
)

# 2. Replace the Right Column JSX
old_radar_pattern = r"\{\/\* RIGHT COLUMN: Radar Operativo \*\/\}\s*<aside className=\"radar-operativo\">.*?</aside>"

new_radar = """{/* RIGHT COLUMN: Contexto y Avisos (MTCS Replica) */}
      <aside className="lesson-context">
        {/* 1. Resultado de Aprendizaje */}
        <section className="context-panel primary">
          <div className="panel-header-badge badge-ra" style={{ background: '#eff6ff', color: '#1d4ed8', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', marginBottom: '10px' }}>
            <Target size={14} />
            <span>Resultado de Aprendizaje</span>
          </div>
          <div style={{ fontSize: '13px', color: '#0f172a' }}>
            <strong>{activeRa.id}:</strong> {activeRa.title}
          </div>
          <p style={{ fontSize: '12px', color: '#475569', marginTop: '8px', lineHeight: '1.4', marginBottom: 0 }}>
            {currentWeekData.summary}
          </p>
        </section>

        {/* 2. Producto Esperado */}
        <section className="context-panel product" style={{ background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
          <div className="panel-header-badge badge-product" style={{ background: '#dcfce7', color: '#15803d', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', marginBottom: '10px' }}>
            <FileText size={14} />
            <span>Producto Esperado</span>
          </div>
          <p style={{ fontSize: '13.5px', color: '#166534', fontWeight: '650', margin: 0, lineHeight: '1.4' }}>
            {currentWeekData.expectedProduct}
          </p>
        </section>

        {/* 3. Avisos Institucionales */}
        <section className="context-panel notices" style={{ background: '#fffbeb', border: '1px solid #fde68a' }}>
          <div className="panel-header-badge badge-notices" style={{ background: '#fef3c7', color: '#b45309', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', marginBottom: '10px' }}>
            <ShieldCheck size={14} />
            <span>Avisos de la Semana</span>
          </div>
          <ul style={{ margin: 0, paddingLeft: '22px', fontSize: '12px', color: '#92400e', lineHeight: '1.5' }}>
            {(currentWeekData.notices || [
              'No consumir alimentos ni bebidas cerca de los equipos.',
              'Subir evidencias a Classroom en la hora asignada.',
              'Respaldar archivos en Google Drive institucional.'
            ]).map((notice, idx) => (
              <li key={idx} style={{ marginBottom: '6px' }}>{notice}</li>
            ))}
          </ul>
        </section>

        {/* 4. Estado del Corte */}
        <section className="context-panel corte" style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}>
          <div className="panel-header-badge badge-corte" style={{ background: '#e2e8f0', color: '#475569', display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 'bold', marginBottom: '10px' }}>
            <Calendar size={14} />
            <span>Corte en Curso</span>
          </div>
          <p style={{ fontSize: '13px', color: '#334155', margin: 0 }}>
            <strong>{activeCorte.label}</strong> ({activeCorte.peso})
          </p>
          {activeCorte.deadline && (
            <div style={{ marginTop: '12px', fontSize: '11px', color: '#9f1239', display: 'flex', alignItems: 'center', gap: '6px', background: '#fff1f2', padding: '8px 10px', borderRadius: '6px', border: '1px dashed #fecdd3' }}>
              <Clock size={16} style={{ flexShrink: 0 }} />
              <span style={{ lineHeight: '1.4' }}>Captura SAE: <strong>{activeCorte.captureDates || 'Ver SAE'}</strong><br/>Límite: <strong>{activeCorte.deadline}</strong></span>
            </div>
          )}
        </section>
      </aside>"""

new_content = re.sub(old_radar_pattern, new_radar, content, flags=re.DOTALL)

with open('conalep/EDOA_V2/src/components/TeachingPortal.jsx', 'w') as f:
    f.write(new_content)

print("TeachingPortal.jsx right sidebar updated successfully!")
