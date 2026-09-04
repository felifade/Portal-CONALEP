import React, { useMemo, useState } from 'react';
import {
  AlertCircle,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  FileText,
  GraduationCap,
  Laptop,
  MessageSquareQuote,
  Network,
  PanelRight,
  PenLine,
  ShieldCheck,
} from 'lucide-react';

const weeks = [
  {
    id: 'W01',
    label: 'Semana 01',
    date: '17-21 Ago',
    status: 'Realizada',
    ra: 'RA 1.1',
    outcome: 'Identifica conceptos base de red y su relación con los resultados de aprendizaje.',
    notice: 'Portada, mapa del módulo y tabla RA-ejemplo-imagen.',
    sessions: [
      {
        title: 'Sesión 01 · Presentación del módulo',
        hours: [
          {
            time: 'Hora 1',
            title: 'Propósito del módulo y mapa general',
            start: 'Recuperar qué entienden por red, internet, seguridad y tecnología cotidiana.',
            dictation: 'Una red permite que dos o más dispositivos compartan información, recursos y servicios. En ciberseguridad, comprender la red ayuda a proteger datos, equipos y personas.',
            infographic: 'Mapa del módulo: redes, dispositivos, conexión, seguridad y evidencias.',
            development: 'Crear portada del documento en Drive y registrar los resultados de aprendizaje en una tabla de tres columnas.',
            close: 'Producto: portada y tabla RA-ejemplo-imagen con evidencia fotográfica de la libreta.',
          },
        ],
      },
    ],
  },
  {
    id: 'W02',
    label: 'Semana 02',
    date: '24-28 Ago',
    status: 'Ajustada',
    ra: 'RA 1.1',
    outcome: 'Distingue tipos de redes, medios de transmisión y componentes básicos.',
    notice: 'Incluye trabajo en salón cuando no hay laboratorio.',
    sessions: [
      {
        title: 'Sesión 01 · Redes básicas',
        hours: [
          {
            time: 'Hora 1',
            title: 'PAN, LAN, MAN y WAN',
            start: 'Dictado breve para abrir el tema y ubicar ejemplos cercanos.',
            dictation: 'Las redes se clasifican por su alcance. Una PAN conecta dispositivos personales, una LAN conecta un espacio pequeño, una MAN conecta zonas de una ciudad y una WAN conecta lugares lejanos.',
            infographic: 'Mapa mental con alcance, ejemplo y dibujo de cada tipo de red.',
            development: 'Resolver actividad en libreta con ejemplos de casa, escuela y ciudad.',
            close: 'Producto: mapa mental completo y explicación oral de un ejemplo.',
          },
        ],
      },
    ],
  },
  {
    id: 'W03',
    label: 'Semana 03',
    date: '31 Ago-04 Sep',
    status: 'Avance real',
    ra: 'RA 1.1',
    outcome: 'Distingue el modelo OSI y protocolos básicos mediante ejemplos cotidianos e inspección en navegador.',
    notice: 'Solo se trabajaron horas 1 y 2. Horas 3 a 5 pasan a Semana 04.',
    sessions: [
      {
        title: 'Sesión 01 · Modelo OSI con analogía',
        hours: [
          {
            time: 'Hora 1',
            title: 'El Modelo OSI: teoría con IA e inspección DevTools',
            start: 'Preguntar: cuando mandan un mensaje por WhatsApp, ¿qué creen que pasa antes de que llegue?',
            dictation: 'El Modelo OSI divide la comunicación de red en siete capas. Sirve para entender cómo viaja la información desde una aplicación hasta el cable, el Wi-Fi o internet, y cómo regresa al dispositivo que la recibe.',
            infographic: 'Analogía del paquete por entrega: app, presentación, sesión, transporte, ruta, calle y entrega física.',
            development: 'Explicar las siete capas con ejemplos cotidianos. Después abrir DevTools y observar una solicitud web para ubicar qué parte se parece a aplicación, transporte y red.',
            close: 'Producto: apunte con analogía OSI y tres ejemplos vistos en DevTools.',
          },
        ],
      },
      {
        title: 'Sesión 02 · Protocolos',
        hours: [
          {
            time: 'Hora 2',
            title: 'TCP y UDP en la vida diaria',
            start: 'Comparar una llamada, un mensaje, un videojuego y un video en vivo.',
            dictation: 'TCP prioriza que la información llegue completa y en orden. UDP prioriza la rapidez, aunque pueda perderse una parte. Ambos se usan según lo que necesite la comunicación.',
            infographic: 'Comparación visual: TCP como paquete confirmado; UDP como transmisión rápida.',
            development: 'Elaborar comparación con ejemplos: navegación web, videollamada, streaming, videojuegos y descarga de archivos.',
            close: 'Producto: cuadro comparativo breve y Kahoot de cierre de horas 1 y 2.',
          },
        ],
      },
    ],
  },
  {
    id: 'W04',
    label: 'Semana 04',
    date: '07-11 Sep',
    status: 'Continuidad',
    ra: 'RA 1.1',
    outcome: 'Reconoce direcciones MAC, direcciones IP y comandos básicos para diagnosticar conexión.',
    notice: 'Retoma contenidos que no entraron en Semana 03.',
    sessions: [
      {
        title: 'Sesión 01 · Identidad de dispositivos',
        hours: [
          {
            time: 'Hora 1',
            title: 'MAC, OUI y NIC',
            start: 'Revisar qué identifica a un celular, una laptop o una consola dentro de una red.',
            dictation: 'La dirección MAC identifica la tarjeta de red de un dispositivo. El OUI señala al fabricante y la NIC permite que el equipo se conecte a la red.',
            infographic: 'Ficha visual de identidad: dispositivo, tarjeta de red, MAC, fabricante y red.',
            development: 'En parejas, localizar información de red del equipo asignado y registrar hallazgos en Drive y libreta.',
            close: 'Producto: ficha de identidad del equipo con explicación propia.',
          },
          {
            time: 'Hora 2',
            title: 'IP pública, IP privada, NAT e IPv6',
            start: 'Comparar domicilio particular, fraccionamiento y dirección pública.',
            dictation: 'La IP privada identifica equipos dentro de una red local. La IP pública representa la salida hacia internet. NAT permite que varios equipos compartan una salida, e IPv6 amplía el espacio de direcciones.',
            infographic: 'Diagrama casa-escuela-internet con IP privada, router, NAT e IP pública.',
            development: 'Construir un organizador visual con definición, función y ejemplo de cada concepto.',
            close: 'Producto: organizador visual revisado y listo para fotografía o entrega digital.',
          },
        ],
      },
    ],
  },
];

const notices = [
  'Classroom: j6bnku3j',
  'Usar siempre la misma cuenta de Drive para Classroom.',
  'Desfile 16 de septiembre: 8:00 a.m., uniforme de gala, Monumento de los Niños Héroes.',
  'Cooperación Teletón pendiente.',
  'Forrado de butacas con hule.',
];

const raChecklist = [
  'Trabajo individual aunque se apoyen en parejas.',
  'Evidencia en Drive y respaldo en libreta.',
  'Producto breve, consultable y con justificación propia.',
  'Laboratorio: cada estudiante cuida el equipo asignado.',
];

function InfographicPreview({ title }) {
  return (
    <div className="tp-infographic" aria-label={`Infografía: ${title}`}>
      <div className="tp-info-node app">App</div>
      <div className="tp-info-line" />
      <div className="tp-info-node transport">Transporte</div>
      <div className="tp-info-line" />
      <div className="tp-info-node network">Red</div>
      <div className="tp-info-line" />
      <div className="tp-info-node physical">Medio</div>
    </div>
  );
}

function ActivityBlock({ icon, label, text, tone }) {
  return (
    <section className={`tp-activity-block ${tone}`}>
      <h4>{icon}<span>{label}</span></h4>
      <p>{text}</p>
    </section>
  );
}

function TeachingPortal() {
  const [activeWeekId, setActiveWeekId] = useState('W03');
  const activeWeek = useMemo(
    () => weeks.find((week) => week.id === activeWeekId) || weeks[0],
    [activeWeekId],
  );

  return (
    <div className="teaching-portal">
      <aside className="tp-left-rail">
        <div className="tp-rail-title">
          <Network size={18} />
          <div>
            <strong>MTCS-20</strong>
            <span>Planeación semanal</span>
          </div>
        </div>

        <div className="tp-week-list">
          {weeks.map((week) => (
            <button
              key={week.id}
              className={`tp-week-button ${activeWeek.id === week.id ? 'active' : ''}`}
              onClick={() => setActiveWeekId(week.id)}
            >
              <span className="tp-week-main">{week.label}</span>
              <span className="tp-week-meta">{week.date}</span>
              <small>{week.status}</small>
            </button>
          ))}
        </div>
      </aside>

      <main className="tp-center">
        <header className="tp-header-band">
          <span className="tp-kicker">{activeWeek.ra} · Grupo 501</span>
          <h2>{activeWeek.label}: {activeWeek.outcome}</h2>
          <p>{activeWeek.notice}</p>
        </header>

        <div className="tp-sessions">
          {activeWeek.sessions.map((session, sessionIndex) => (
            <article className="tp-session" key={session.title}>
              <div className="tp-session-header">
                <span>Sesión {String(sessionIndex + 1).padStart(2, '0')}</span>
                <h3>{session.title}</h3>
              </div>

              {session.hours.map((hour) => (
                <div className="tp-hour" key={`${session.title}-${hour.time}`}>
                  <div className="tp-hour-heading">
                    <span>{hour.time}</span>
                    <h3>{hour.title}</h3>
                  </div>

                  <div className="tp-hour-grid">
                    <ActivityBlock icon={<BookOpen size={16} />} label="Inicio" text={hour.start} tone="start" />
                    <ActivityBlock icon={<PenLine size={16} />} label="Dictado" text={hour.dictation} tone="dictation" />

                    <section className="tp-activity-block infographic-block">
                      <h4><PanelRight size={16} /><span>Infografía</span></h4>
                      <p>{hour.infographic}</p>
                      <InfographicPreview title={hour.title} />
                    </section>

                    <ActivityBlock icon={<Laptop size={16} />} label="Desarrollo" text={hour.development} tone="development" />
                    <ActivityBlock icon={<CheckCircle2 size={16} />} label="Cierre / producto" text={hour.close} tone="close" />
                  </div>
                </div>
              ))}
            </article>
          ))}
        </div>
      </main>

      <aside className="tp-right-rail">
        <section className="tp-side-panel">
          <h3><ShieldCheck size={17} /> Resultado de aprendizaje</h3>
          <p>{activeWeek.ra}: {activeWeek.outcome}</p>
        </section>

        <section className="tp-side-panel">
          <h3><AlertCircle size={17} /> Avisos</h3>
          <ul>
            {notices.map((notice) => <li key={notice}>{notice}</li>)}
          </ul>
        </section>

        <section className="tp-side-panel">
          <h3><ClipboardList size={17} /> Reglas de trabajo</h3>
          <ul>
            {raChecklist.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="tp-side-panel accent">
          <h3><FileText size={17} /> Producto esperado</h3>
          <p>Apunte completo por hora: inicio, dictado, organizador visual, desarrollo y cierre con justificación propia.</p>
        </section>

        <section className="tp-side-panel">
          <h3><MessageSquareQuote size={17} /> Enfoque docente</h3>
          <p>La IA puede apoyar, pero el estudiante debe explicar, justificar y registrar con sus propias palabras.</p>
        </section>
      </aside>
    </div>
  );
}

export default TeachingPortal;
