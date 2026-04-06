export const curriculumData = {
  subject: "Manejo de Tecnologías de Hardware y Software (MTHS)",
  group: "601",
  ras: [
    {
      id: "RA1.1",
      title: "1.1 RA (15%)",
      weeks: [
        { id: "W00", label: "Semana 00" },
        { id: "W01", label: "Semana 01" },
        { id: "W02", label: "Semana 02" }
      ]
    },
    {
      id: "RA1.2",
      title: "1.2 RA (15%)",
      weeks: [
        { id: "W03", label: "Semana 03" },
        { id: "W04", label: "Semana 04" },
        { id: "W05", label: "Semana 05" }
      ]
    },
    {
      id: "RA2.1",
      title: "2.1 RA (20%)",
      weeks: [
        { id: "W06", label: "Semana 06" },
        { id: "W07", label: "Semana 07" },
        { id: "W08", label: "Semana 08" }
      ]
    }
  ],
  schedules: {
    "W00": { days: [] },
    "W01": { days: [] },
    "W02": { days: [] },
    "W03": { days: [] },
    "W04": { days: [] },
    "W05": { days: [] },
    "W06": { days: [] },
    "W07": { days: [] },
    "W08": {
      days: [
        {
          id: "tue",
          label: "Martes — Introducción a MTHS",
          purpose: "Comprender los fundamentos del hardware y software y su importancia en el entorno profesional.",
          hours: [
            {
              time: "Hora 1",
              title: "Conceptos Básicos",
              theory: "Definición de Hardware y Software...",
              notebook: "Escribe la definición de Hardware.",
              practice: "Identifica 5 componentes físicos.",
              code: "",
              product: "Lista de componentes",
              teacherNotes: "Inicia con una lluvia de ideas."
            },
            {
              time: "Hora 2",
              title: "Arquitectura Básica",
              theory: "Funcionamiento de la CPU y Memoria.",
              notebook: "Diagrama de bloques.",
              practice: "Simulador de ensamble.",
              code: "",
              product: "Esquema de arquitectura",
              teacherNotes: "Usa el simulador de Cisco."
            }
          ],
          cierre: "Hoy identificamos qué es hardware y software.",
          frase_docente: "La tecnología es solo una herramienta."
        },
        {
          id: "wed",
          label: "Miércoles — Sistemas Operativos",
          hours: [
            {
              time: "Hora 1",
              title: "Tipos de Software",
              theory: "Software de sistema vs aplicación.",
              notebook: "Tabla comparativa.",
              practice: "Explorar configuración del sistema.",
              code: "",
              product: "Tabla de software",
              teacherNotes: "Enfoque en Windows/Linux."
            }
          ]
        },
        {
          id: "thu",
          label: "Jueves — Periféricos",
          hours: [
            {
              time: "Hora 1",
              title: "Entrada y Salida",
              theory: "Dispositivos de I/O.",
              notebook: "Mapa conceptual.",
              practice: "Prueba de dispositivos.",
              code: "",
              product: "Mapa mental",
              teacherNotes: "Usa ejemplos reales."
            },
            {
              time: "Hora 2",
              title: "Conexiones",
              theory: "Puertos y cables.",
              notebook: "Dibujo de puertos.",
              practice: "Identificación de cables.",
              code: "",
              product: "Álbum de fotos de puertos",
              teacherNotes: "Muestra cables físicos."
            }
          ]
        }
      ]
    }
  }
};
