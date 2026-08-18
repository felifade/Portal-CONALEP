#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

const ROOT = "/Users/felipelopezsalazar/Developer/Segundo_Cerebro/CONALEP/01_Ciclos_Escolares/Ciclo_2026-2027/Semestre_1.26.27";
const OUT = __dirname;

const files = {
  anuncios: path.join(ROOT, "Anuncios_Institucionales_CONALEP_1.26.27.md"),
  calendario: path.join(ROOT, "Calendario_Actividades_Academicas_CONALEP_1.26.27.md"),
  cursos: path.join(ROOT, "00_Registro_Cursos_Capacitacion_1.26.27.md"),
  canalizaciones: "/Users/felipelopezsalazar/Library/Mobile Documents/com~apple~CloudDocs/School/CONALEP/Administrativo/Módulos/00. ODCONALEP/2026-2027/1.26.27/Canalizaciones"
};

function read(file) {
  return fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
}

function stripMarkup(text) {
  return String(text || "")
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/\*\*/g, "")
    .replace(/^>\s?/gm, "")
    .replace(/^- /gm, "")
    .replace(/\bVer detalle\b/g, "")
    .replace(/\bVer calendario operativo\b/g, "")
    .replace(/\s+/g, " ")
    .replace(/\s+\.$/, ".")
    .trim();
}

function extractCallout(md, title) {
  const lines = md.split(/\r?\n/);
  const index = lines.findIndex(line => line.includes(title));
  if (index < 0) return [];
  const items = [];
  for (let i = index + 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("> [!")) break;
    if (/^#{1,6}\s/.test(line)) break;
    if (/^\s*\|/.test(line)) break;
    if (/^\s*---+\s*$/.test(line)) break;
    if (line.trim() && !line.startsWith(">")) break;
    const clean = stripMarkup(line);
    if (clean) items.push(clean);
  }
  return items;
}

function extractCounts(md) {
  const lines = md.split(/\r?\n/);
  const header = lines.findIndex(line => line.includes("| Pendientes |"));
  if (header < 0 || !lines[header + 2]) return [];
  const labels = lines[header].split("|").map(v => v.trim()).filter(Boolean);
  const values = lines[header + 2].split("|").map(v => v.trim()).filter(Boolean);
  return labels.map((label, idx) => ({
    label,
    value: values[idx] || "0",
    note: idx === 0 ? "requiere accion" : idx === 3 ? "cerrados o pasados" : "seguimiento"
  }));
}

function detailEvent(md, heading, fallback = {}) {
  const start = md.indexOf(`### ${heading}`);
  if (start < 0) return fallback;
  const next = md.indexOf("\n### ", start + 5);
  const block = md.slice(start, next > -1 ? next : undefined);
  const summary = (block.match(/\*\*Resumen:\*\*\s*([^\n]+)/) || [])[1] || fallback.description || "";
  const state = (block.match(/\*\*Estado:\*\*\s*([^\n]+)/) || [])[1] || fallback.status || "";
  return { ...fallback, description: stripMarkup(summary), status: state.toLowerCase().includes("atendida") ? "atendido" : fallback.status };
}

const anuncios = read(files.anuncios);
const calendario = read(files.calendario);

const now = new Date();
const updatedAt = new Intl.DateTimeFormat("es-MX", {
  dateStyle: "medium",
  timeStyle: "short",
  timeZone: "America/Mexico_City"
}).format(now);

const radar = [
  { kind: "danger", title: "Hoy / vencido", items: extractCallout(anuncios, "Hoy / vencido") },
  { kind: "warning", title: "Proximos 7 dias", items: extractCallout(anuncios, "Próximos 7 días") },
  { kind: "todo", title: "Este mes", items: extractCallout(anuncios, "Este mes") },
  { kind: "example", title: "Despues, para Recordatorios", items: extractCallout(calendario, "Despues, para Recordatorios") },
  { kind: "note", title: "Sin fecha exacta", items: extractCallout(anuncios, "Sin fecha exacta").concat(extractCallout(calendario, "Sin fecha exacta")) }
].map(group => ({ ...group, items: group.items.length ? group.items : ["Sin datos por ahora."] }));

const months = [
  {
    id: "agosto",
    label: "Agosto",
    range: "Agosto 2026",
    color: "#007a5a",
    items: [
      { date: "13 ago", title: "Operativo de Bienvenida", note: "Felipe: arroz para 150 alumnos.", tags: ["pendiente", "directo"] },
      { date: "17 ago", title: "Reuniones de Academia", note: "Revisar calendario de Reuniones de Academia 1-2627.", tags: ["pendiente", "directo"] },
      { date: "17 ago", title: "Contrato y Descarga Academica", note: "Formalizacion de contrato docente y productos de Descarga Academica.", tags: ["pendiente", "directo"] },
      { date: "17 ago · 11:00", title: "Emprendimiento, Innovacion y Robotica", note: "Reunion virtual sobre dinamica del semestre, eventos, lineamientos, procesos y fechas clave.", tags: ["pendiente", "directo"] },
      { date: "vigente", title: "Tutor grupo 501", note: "Felipe Lopez Salazar queda como tutor docente del grupo 501; administrativo: Eduardo Betancourt Alvarez.", tags: ["referencia", "directo"] },
      { date: "25 ago", title: "Formacion Tecnica", note: "Reunion virtual de seguimiento institucional.", tags: ["referencia"] },
      { date: "26 ago", title: "Programaciones semestrales", note: "Orientacion, Tutorias, Escuela para Padres, Emprendimiento y Comite de Tutorias.", tags: ["referencia"] },
      { date: "31 ago", title: "Cierre SAE", note: "Cierre para inscripciones y reinscripciones de casos especiales.", tags: ["referencia"] }
    ]
  },
  {
    id: "septiembre",
    label: "Septiembre",
    range: "Septiembre 2026",
    color: "#2757a3",
    items: [
      { date: "08 sep", title: "Formacion Tecnica", note: "Reunion virtual de Formacion Tecnica.", tags: ["referencia"] },
      { date: "10 sep", title: "2do avance de planeaciones", note: "Periodo didactico del 01 de octubre al 30 de noviembre.", tags: ["pendiente", "directo"] },
      { date: "14 sep", title: "Canalizaciones 1er corte", note: "Entrega de canalizaciones individuales y grupales del primer corte.", tags: ["pendiente", "directo"] },
      { date: "21-22 sep", title: "1er corte academico", note: "Captura del corte academico y asesorias semestrales.", tags: ["pendiente", "directo"] },
      { date: "30 sep", title: "Registro de planeaciones", note: "Conclusion del registro de planeaciones en Plataforma.", tags: ["pendiente", "directo"] },
      { date: "por confirmar", title: "Manejo de emociones", note: "Conferencia plantel Tepeji del Rio.", tags: ["sin-fecha"] }
    ]
  },
  {
    id: "octubre",
    label: "Octubre",
    range: "Octubre 2026",
    color: "#986800",
    items: [
      { date: "01 oct", title: "Inicio PEVIDD", note: "Programa de Evaluacion Integral de Desempeno Docente.", tags: ["pendiente", "directo"] },
      { date: "01-02 oct", title: "Listas de asistencia", note: "Entrega para Administracion de Riesgos.", tags: ["pendiente", "directo"] },
      { date: "06 oct", title: "Formacion Tecnica", note: "Reunion virtual de Formacion Tecnica.", tags: ["referencia"] },
      { date: "15 oct", title: "Descarga Academica", note: "Entrega de productos para docentes de nuevo ingreso o con mas de 4 modulos.", tags: ["referencia"] },
      { date: "23 oct", title: "Segunda sesion CTEMS", note: "Actividad institucional de seguimiento.", tags: ["referencia"] },
      { date: "30 oct", title: "Canalizaciones 2do corte", note: "Entrega de canalizaciones individuales y grupales del segundo corte.", tags: ["pendiente", "directo"] },
      { date: "por confirmar", title: "Orientacion preventiva", note: "Conferencia para adolescentes.", tags: ["sin-fecha"] }
    ]
  },
  {
    id: "noviembre",
    label: "Noviembre",
    range: "Noviembre 2026",
    color: "#6f4aa8",
    items: [
      { date: "03 nov", title: "Formacion Tecnica", note: "Reunion virtual de Formacion Tecnica.", tags: ["referencia"] },
      { date: "03-04 nov", title: "2do corte academico", note: "Captura del corte academico y asesorias semestrales.", tags: ["pendiente", "directo"] },
      { date: "06 nov", title: "Periodico mural 501", note: "Colocar periodico mural del grupo 501. Valor: Comunicacion.", tags: ["pendiente", "directo"] },
      { date: "09 nov · 15:00", title: "Ceremonia civica 501", note: "Ceremonia civica del grupo 501. Temas: libro, Sor Juana, diabetes y gastronomia mexicana.", tags: ["pendiente", "directo"] },
      { date: "10 nov", title: "Minuta 2do corte", note: "Seguimiento al acompanamiento escolar y analisis academico.", tags: ["referencia"] },
      { date: "17 nov", title: "Reunion estatal", note: "Servicios Escolares, Formacion Tecnica y Tutorias.", tags: ["referencia"] },
      { date: "27 nov", title: "Canalizaciones 3er corte", note: "Entrega de canalizaciones individuales y grupales del tercer corte.", tags: ["pendiente", "directo"] },
      { date: "por confirmar", title: "Crianza Positiva", note: "Taller para padres, madres y tutores.", tags: ["sin-fecha"] }
    ]
  },
  {
    id: "diciembre",
    label: "Diciembre",
    range: "Diciembre 2026",
    color: "#a13d45",
    items: [
      { date: "01 dic", title: "Formacion Tecnica", note: "Reunion virtual de Formacion Tecnica.", tags: ["referencia"] },
      { date: "10-11 dic", title: "Corte de cierre", note: "Cierre academico del periodo.", tags: ["pendiente", "directo"] },
      { date: "14-18 dic", title: "Asesorias intersemestrales", note: "Inicio de asesorias intersemestrales.", tags: ["pendiente", "directo"] },
      { date: "18 dic", title: "Listas de asistencia", note: "Entrega para Administracion de Riesgos.", tags: ["pendiente", "directo"] },
      { date: "21 dic-06 ene", title: "Periodo vacacional", note: "Receso institucional.", tags: ["referencia"] },
      { date: "por confirmar", title: "Fortaleza mental y emocional", note: "Conferencia plantel Pachuca II.", tags: ["sin-fecha"] }
    ]
  },
  {
    id: "enero",
    label: "Enero",
    range: "Enero 2027",
    color: "#006e78",
    items: [
      { date: "06-07 ene", title: "Apertura de asesorias", note: "Apertura de grupos y modulos de asesorias intersemestrales.", tags: ["referencia"] },
      { date: "06-14 ene", title: "Asesorias intersemestrales", note: "Continuidad de asesorias.", tags: ["pendiente", "directo"] },
      { date: "15 ene", title: "Captura de asesorias", note: "Captura de asesorias intersemestrales.", tags: ["pendiente", "directo"] },
      { date: "15 ene", title: "Conclusion de contrato", note: "Conclusion del contrato docente 1-2627.", tags: ["pendiente", "directo"] }
    ]
  }
];

const doneMonths = [
  {
    id: "agosto-hecho",
    monthId: "agosto",
    label: "Agosto 2026",
    color: "#6f4aa8",
    items: [
      {
        date: "04 ago",
        title: "Taller de Materiales Didacticos Innovadores",
        note: "Curso presencial registrado. Cuenta como evidencia CAE.",
        kind: "curso",
        label: "Curso",
        link: `file://${files.cursos}`
      },
      {
        date: "11 ago",
        title: "Platica informativa IFHES",
        note: "Evento virtual por Microsoft Teams a las 11:00 a. m.",
        kind: "evento",
        label: "Evento",
        link: `file://${files.anuncios}`
      },
      {
        date: "12 ago",
        title: "Encuesta e-CCO respondida",
        note: "Respuesta registrada y evidencia guardada en la carpeta de anuncios.",
        kind: "encuesta",
        label: "Encuesta",
        link: "file:///Users/felipelopezsalazar/Library/Mobile%20Documents/com~apple~CloudDocs/School/CONALEP/Administrativo/Mo%CC%81dulos/00.%20ODCONALEP/2026-2027/1.26.27/Anuncios%20e%20Informacio%CC%81n/Evidencia_e-CCO_respondida_2026-08-12.png"
      },
      {
        date: "12 ago",
        title: "Calendario academico convertido",
        note: "PDF institucional convertido a nota operativa y dashboard HTML.",
        kind: "sistema",
        label: "Sistema",
        link: `file://${files.calendario}`
      }
    ]
  }
];

const criticalDates = [
  {
    date: "14 sep",
    title: "Canalizaciones 1er corte",
    note: "Entregar canalizaciones individuales y grupales. Formatos en carpeta Canalizaciones.",
    label: "Canalizaciones",
    kind: "importante"
  },
  {
    date: "30 oct",
    title: "Canalizaciones 2do corte",
    note: "Entregar canalizaciones individuales y grupales. Revisar formatos antes del corte.",
    label: "Canalizaciones",
    kind: "importante"
  },
  {
    date: "27 nov",
    title: "Canalizaciones 3er corte",
    note: "Entrega final de canalizaciones del semestre.",
    label: "Canalizaciones",
    kind: "importante"
  },
  {
    date: "Vigente",
    title: "Tutor grupo 501",
    note: "Felipe Lopez Salazar como tutor docente; administrativo: Eduardo Betancourt Alvarez.",
    label: "Tutorias",
    kind: "importante"
  },
  {
    date: "06 nov",
    title: "Periodico mural 501",
    note: "Colocar periodico mural del grupo 501; valor Comunicacion.",
    label: "Mural",
    kind: "importante"
  },
  {
    date: "09 nov · 15:00",
    title: "Ceremonia civica 501",
    note: "Actividad directa del grupo 501; valor Comunicacion.",
    label: "Civica",
    kind: "importante"
  },
  {
    date: "17 ago · 11:00",
    title: "Emprendimiento, Innovacion y Robotica",
    note: "Reunion virtual con lineamientos, procesos operativos, eventos y fechas clave.",
    label: "Importante",
    kind: "importante"
  },
  {
    date: "21-22 sep",
    title: "Primer corte CONALEP",
    note: "Capturar el primer corte academico y asesorias semestrales.",
    label: "Captura",
    kind: "corte"
  },
  {
    date: "03-04 nov",
    title: "Segundo corte CONALEP",
    note: "Capturar el segundo corte academico y asesorias semestrales.",
    label: "Captura",
    kind: "corte"
  },
  {
    date: "10-11 dic",
    title: "Tercer corte / cierre",
    note: "Capturar cierre academico del periodo.",
    label: "Captura",
    kind: "corte"
  },
  {
    date: "15 ene",
    title: "Conclusion de contrato",
    note: "Fecha marcada para cierre del contrato docente 1-2627.",
    label: "Contrato",
    kind: "contrato"
  },
  {
    date: "Muy importante",
    title: "Pendientes fijos por agregar",
    note: "Aqui agregaremos las fechas que quieras tener siempre visibles.",
    label: "Editable",
    kind: "importante"
  }
];

const data = {
  updatedAt,
  sources: [
    { label: "Anuncios institucionales CONALEP", href: `file://${files.anuncios}` },
    { label: "Calendario operativo 1.26.27", href: `file://${files.calendario}` },
    { label: "Formatos de canalizaciones", href: `file://${files.canalizaciones}/` },
    { label: "Carpeta de anuncios en iCloud", href: "file:///Users/felipelopezsalazar/Library/Mobile%20Documents/com~apple~CloudDocs/School/CONALEP/Administrativo/Mo%CC%81dulos/00.%20ODCONALEP/2026-2027/1.26.27/Anuncios%20e%20Informacio%CC%81n/" }
  ],
  summary: extractCounts(anuncios),
  radar,
  months,
  doneMonths,
  criticalDates,
  events: [
    detailEvent(anuncios, "2026-08-07 - Operativo de Bienvenida informal del plantel", {
      date: "13 agosto 2026",
      title: "Operativo de Bienvenida informal del plantel",
      description: "Felipe: arroz para 150 alumnos.",
      status: "pendiente",
      type: "Evento",
      tags: ["pendiente", "directo"],
      link: `file://${files.anuncios}`
    }),
    {
      date: "17 agosto 2026",
      title: "Calendario de Reuniones de Academia",
      description: "Revisar el envio del calendario de Reuniones de Academia 1-2627.",
      status: "pendiente",
      type: "Academia",
      tags: ["pendiente", "directo"],
      link: `file://${files.calendario}`
    },
    detailEvent(anuncios, "2026-08-14 - Reunion virtual Programa de Emprendimiento Innovacion y Robotica", {
      date: "17 agosto 2026, 11:00 horas",
      title: "Reunion virtual Programa de Emprendimiento, Innovacion y Robotica",
      description: "Sesion sobre dinamica de trabajo del semestre, eventos, lineamientos, procesos operativos y fechas clave.",
      status: "pendiente",
      type: "Reunion virtual",
      tags: ["pendiente", "directo"],
      link: "https://meet.google.com/vhk-xczg-uvi"
    }),
    detailEvent(anuncios, "2026-08-14 - Tutores de grupo 1.26.27", {
      date: "14 agosto 2026",
      title: "Tutores de grupo 1.26.27",
      description: "Felipe Lopez Salazar aparece como tutor docente del grupo 501; administrativo asociado: Eduardo Betancourt Alvarez.",
      status: "informativo",
      type: "Tutorias",
      tags: ["referencia", "directo"],
      link: "file:///Users/felipelopezsalazar/Library/Mobile%20Documents/com~apple~CloudDocs/School/CONALEP/Administrativo/Mo%CC%81dulos/00.%20ODCONALEP/2026-2027/1.26.27/Anuncios%20e%20Informacio%CC%81n/Tutores_grupo_CONALEP_1.26.27_2026-08-14.png"
    }),
    detailEvent(anuncios, "2026-08-17 - Programa de ceremonia civica y periodico mural agosto-diciembre 2026", {
      date: "6 y 9 noviembre 2026",
      title: "Programa de ceremonia civica y periodico mural",
      description: "Grupo 501: colocar periodico mural el 6 de noviembre y realizar ceremonia civica el 9 de noviembre a las 15:00 horas. Valor: Comunicacion.",
      status: "pendiente",
      type: "Ceremonia civica",
      tags: ["pendiente", "directo"],
      link: "file:///Users/felipelopezsalazar/Library/Mobile%20Documents/com~apple~CloudDocs/School/CONALEP/Administrativo/Mo%CC%81dulos/00.%20ODCONALEP/2026-2027/1.26.27/Anuncios%20e%20Informacio%CC%81n/PROGRAMA%20DE%20CEREMONIA%20CIVICA%20AGOSTO-%20DICIEMBRE%202026.docx"
    }),
    detailEvent(anuncios, "2026-08-18 - Entrega de canalizaciones por corte", {
      date: "14 septiembre, 30 octubre y 27 noviembre 2026",
      title: "Entrega de canalizaciones por corte",
      description: "Fechas de entrega: 1er corte 14 de septiembre, 2do corte 30 de octubre y 3er corte 27 de noviembre. Formatos individuales y grupales guardados en Canalizaciones.",
      status: "pendiente",
      type: "Canalizaciones",
      tags: ["pendiente", "directo"],
      link: `file://${files.canalizaciones}/`
    }),
    {
      date: "10 septiembre 2026",
      title: "2do avance de planeaciones didacticas",
      description: "Periodo de planeacion didactica del 01 de octubre al 30 de noviembre de 2026.",
      status: "pendiente",
      type: "Planeacion",
      tags: ["pendiente", "directo"],
      link: `file://${files.calendario}`
    },
    detailEvent(anuncios, "2026-08-12 - Encuesta de Clima y Cultura Organizacional e-CCO", {
      date: "12 agosto 2026",
      title: "Encuesta de Clima y Cultura Organizacional e-CCO",
      description: "Respondida y con evidencia guardada.",
      status: "atendido",
      type: "Encuesta",
      tags: ["atendido"],
      link: "file:///Users/felipelopezsalazar/Library/Mobile%20Documents/com~apple~CloudDocs/School/CONALEP/Administrativo/Mo%CC%81dulos/00.%20ODCONALEP/2026-2027/1.26.27/Anuncios%20e%20Informacio%CC%81n/Evidencia_e-CCO_respondida_2026-08-12.png"
    }),
    detailEvent(anuncios, "2026-08-12 - Curso en linea Procedimiento General de Revision por la Direccion", {
      date: "",
      title: "Procedimiento General de Revision por la Direccion",
      description: "Curso en linea opcional, con validez de 5 horas.",
      status: "informativo",
      type: "Curso",
      tags: ["curso", "sin-fecha"],
      link: "https://cursos.conalep.edu.mx/course/view.php?id=849"
    })
  ]
};

fs.writeFileSync(path.join(OUT, "data.js"), `window.CONALEP_DASHBOARD_DATA = ${JSON.stringify(data, null, 2)};\n`);
console.log("Dashboard CONALEP actualizado:", path.join(OUT, "index.html"));
