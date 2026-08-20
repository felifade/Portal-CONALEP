export const curriculumData = {
  subject: "Manejo de Tecnologías de Ciberseguridad (MTCS-20)",
  group: "501",
  cortes: [
    { id: 1, label: "1er Corte", peso: "30%" },
    { id: 2, label: "2do Corte", peso: "35%" },
    { id: 3, label: "3er Corte", peso: "35%" },
  ],
  ras: [
    {
      id: "RA1.1",
      title: "1.1 Conexiones de red",
      peso: "15%",
      corte: 1,
      weeks: [
        { id: "W00", label: "Semana 00 (10-14 Ago)" },
        { id: "W01", label: "Semana 01 (17-21 Ago)" },
        { id: "W02", label: "Semana 02 (24-28 Ago)" },
        { id: "W03", label: "Semana 03 (31 Ago-04 Sep)" },
        { id: "W04", label: "Semana 04 (07-11 Sep)" }
      ]
    },
    {
      id: "RA1.2",
      title: "1.2 Direccionamiento y enrutamiento",
      peso: "15%",
      corte: 1,
      weeks: [
        { id: "W05", label: "Semana 05 (14-18 Sep)" },
        { id: "W06", label: "Semana 06 (21-25 Sep)" }
      ]
    },
    {
      id: "RA2.1",
      title: "2.1 Fundamentos y principios",
      peso: "20%",
      corte: 2,
      weeks: [
        { id: "W07", label: "Semana 07 (28 Sep-02 Oct)" },
        { id: "W08", label: "Semana 08 (05-09 Oct)" },
        { id: "W09", label: "Semana 09 (12-16 Oct)" },
        { id: "W10", label: "Semana 10 (19-23 Oct)" }
      ]
    },
    {
      id: "RA2.2",
      title: "2.2 Protocolos y confidencialidad",
      peso: "15%",
      corte: 2,
      weeks: [
        { id: "W11", label: "Semana 11 (26-30 Oct)" },
        { id: "W12", label: "Semana 12 (02-06 Nov)" },
        { id: "W13", label: "Semana 13 (09-13 Nov)" }
      ]
    },
    {
      id: "RA3.1",
      title: "3.1 Fundamentos y optimización",
      peso: "20%",
      corte: 3,
      weeks: [
        { id: "W14", label: "Semana 14 (16-20 Nov)" },
        { id: "W15", label: "Semana 15 (23-27 Nov)" },
        { id: "W16", label: "Semana 16 (30 Nov-04 Dic)" }
      ]
    },
    {
      id: "RA3.2",
      title: "3.2 Estructuras de control",
      peso: "15%",
      corte: 3,
      weeks: [
        { id: "W17", label: "Semana 17 (07-11 Dic)" },
        { id: "W18", label: "Semana 18 (14-18 Dic)" },
        { id: "W19", label: "Semana 19 (04-08 Ene)" }
      ]
    }
  ],
  schedules: {
    "W00": { isHtml: true, url: "./html/W00.html" },
    "W01": { isHtml: true, url: "./html/W01.html" },
    "W02": { days: [] },
    "W03": { days: [] },
    "W04": { days: [] },
    "W05": { days: [] },
    "W06": { days: [] },
    "W07": { days: [] },
    "W08": { days: [] },
    "W09": { days: [] },
    "W10": { days: [] },
    "W11": { days: [] },
    "W12": { days: [] },
    "W13": { days: [] },
    "W14": { days: [] },
    "W15": { days: [] },
    "W16": { days: [] },
    "W17": { days: [] },
    "W18": { days: [] },
    "W19": { days: [] }
  }
};
