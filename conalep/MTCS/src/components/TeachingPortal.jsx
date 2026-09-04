import React, { useMemo, useState } from 'react';
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  FileText,
  Layers3,
  Map,
  Megaphone,
  Network,
  PenLine,
  School,
  Sparkles,
  Target,
} from 'lucide-react';
import { teachingPlan } from '../data/teachingPlan';

function getActiveRa(corte, raId) {
  return corte?.ras.find((ra) => ra.id === raId) || corte?.ras[0];
}

function CorteRail({ cortes, activeWeek, activeCorte, onSelectWeek }) {
  return (
    <aside className="lesson-rail">
      <div className="lesson-brand">
        <School size={20} />
        <div>
          <strong>{teachingPlan.module.code}</strong>
          <span>{teachingPlan.module.group} · {teachingPlan.module.campus}</span>
        </div>
      </div>

      <div className="corte-stack">
        {cortes.map((corte) => (
          <section
            className={`corte-card ${activeCorte.id === corte.id ? 'active' : ''}`}
            key={corte.id}
          >
            <div className="corte-card-header">
              <span>{corte.label}</span>
              <strong>{corte.weight}</strong>
            </div>
            <p>{corte.weeks} semanas planeadas</p>

            <div className="ra-list">
              {corte.ras.map((ra) => (
                <div className="ra-mini" key={ra.id}>
                  <div>
                    <strong>{ra.id}</strong>
                    <span>{ra.title}</span>
                  </div>
                  <small>{ra.weight} · {ra.weeks} sem.</small>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="week-jump">
        <span>Semanas cargadas</span>
        {teachingPlan.weeks.map((week) => (
          <button
            className={activeWeek.id === week.id ? 'active' : ''}
            key={week.id}
            onClick={() => onSelectWeek(week.id)}
          >
            {week.label}
          </button>
        ))}
      </div>
    </aside>
  );
}

function HourTabs({ hours, activeHour, onSelectHour }) {
  return (
    <nav className="hour-tabs" aria-label="Horas de clase">
      {hours.map((hour) => (
        <button
          className={activeHour.id === hour.id ? 'active' : ''}
          key={hour.id}
          onClick={() => onSelectHour(hour.id)}
        >
          {hour.label}
        </button>
      ))}
    </nav>
  );
}

function DataStrip({ week, hour }) {
  const items = [
    ['Modulo', teachingPlan.module.code],
    ['Grupo', teachingPlan.module.group],
    ['Classroom', teachingPlan.module.classroomCode],
    ['Semana', week.dateRange],
    ['Evidencia', week.identification.product],
    ['Organizacion', week.identification.modality],
    ['Lugar', week.identification.place],
    ['Hora', hour.label],
  ];

  return (
    <section className="identity-strip" aria-label="Datos de identificacion">
      {items.map(([label, value]) => (
        <div key={label}>
          <span>{label}</span>
          <strong>{value}</strong>
        </div>
      ))}
    </section>
  );
}

function LessonSection({ icon, label, children, className = '' }) {
  return (
    <section className={`lesson-section ${className}`}>
      <h3>{icon}<span>{label}</span></h3>
      <div className="lesson-section-body">{children}</div>
    </section>
  );
}

function InfographicPlan({ hour }) {
  return (
    <div className="infographic-plan">
      <div className="infographic-title">
        <Sparkles size={18} />
        <strong>{hour.infographicTitle}</strong>
      </div>
      <div className="infographic-flow">
        {hour.infographicSteps.map((step, index) => (
          <div className="flow-step" key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RightSummary({ week, corte, ra, activeHour }) {
  return (
    <aside className="lesson-context">
      <section className="context-panel primary">
        <h3><Target size={17} /> Resultado de aprendizaje</h3>
        <strong>{ra.id}: {ra.title}</strong>
        <p>{week.result}</p>
      </section>

      <section className="context-panel">
        <h3><ClipboardList size={17} /> Producto breve</h3>
        <p>{activeHour.closure}</p>
      </section>

      <section className="context-panel">
        <h3><Megaphone size={17} /> Avisos</h3>
        <ul>
          {week.notices.map((notice) => <li key={notice}>{notice}</li>)}
        </ul>
      </section>

      <section className="context-panel">
        <h3><Layers3 size={17} /> Corte actual</h3>
        <p>{corte.label}: {corte.weight}, {corte.weeks} semanas planeadas.</p>
      </section>
    </aside>
  );
}

function TeachingPortal() {
  const [activeWeekId, setActiveWeekId] = useState(teachingPlan.weeks[0].id);
  const activeWeek = useMemo(
    () => teachingPlan.weeks.find((week) => week.id === activeWeekId) || teachingPlan.weeks[0],
    [activeWeekId],
  );
  const [activeHourId, setActiveHourId] = useState(activeWeek.hours[0].id);

  const activeCorte = teachingPlan.cortes.find((corte) => corte.id === activeWeek.corteId) || teachingPlan.cortes[0];
  const activeRa = getActiveRa(activeCorte, activeWeek.raId);
  const activeHour = activeWeek.hours.find((hour) => hour.id === activeHourId) || activeWeek.hours[0];

  const handleWeekSelect = (weekId) => {
    const nextWeek = teachingPlan.weeks.find((week) => week.id === weekId);
    setActiveWeekId(weekId);
    setActiveHourId(nextWeek?.hours[0]?.id || 'H01');
  };

  return (
    <div className="lesson-shell">
      <CorteRail
        cortes={teachingPlan.cortes}
        activeWeek={activeWeek}
        activeCorte={activeCorte}
        onSelectWeek={handleWeekSelect}
      />

      <main className="lesson-main">
        <header className="lesson-hero">
          <div>
            <span className="lesson-eyebrow">{activeWeek.label} · {activeWeek.status}</span>
            <h1>{activeWeek.title}</h1>
            <p>{teachingPlan.module.subject}</p>
          </div>
          <div className="lesson-hero-badge">
            <CalendarDays size={18} />
            <strong>{activeWeek.dateRange}</strong>
            <span>{activeRa.id}</span>
          </div>
        </header>

        <HourTabs
          hours={activeWeek.hours}
          activeHour={activeHour}
          onSelectHour={setActiveHourId}
        />

        <DataStrip week={activeWeek} hour={activeHour} />

        <article className="lesson-card">
          <div className="lesson-card-header">
            <span>{activeHour.label}</span>
            <h2>{activeHour.title}</h2>
          </div>

          <div className="lesson-grid">
            <LessonSection icon={<BookOpen size={18} />} label="Inicio" className="start">
              <p>{activeHour.start}</p>
            </LessonSection>

            <LessonSection icon={<PenLine size={18} />} label="Dictado" className="dictation">
              <p>{activeHour.dictation}</p>
            </LessonSection>

            <LessonSection icon={<Target size={18} />} label="Resultado de aprendizaje" className="result">
              <p>{activeHour.learningResult}</p>
            </LessonSection>

            <LessonSection icon={<FileText size={18} />} label="Datos de identificacion" className="identity">
              <p>{activeHour.identification}</p>
            </LessonSection>

            <LessonSection icon={<Map size={18} />} label="Desarrollo" className="development wide">
              <p>{activeHour.development}</p>
              <InfographicPlan hour={activeHour} />
            </LessonSection>

            <LessonSection icon={<CheckCircle2 size={18} />} label="Conclusion / cierre" className="closure wide">
              <p>{activeHour.closure}</p>
            </LessonSection>
          </div>
        </article>
      </main>

      <RightSummary
        week={activeWeek}
        corte={activeCorte}
        ra={activeRa}
        activeHour={activeHour}
      />
    </div>
  );
}

export default TeachingPortal;
