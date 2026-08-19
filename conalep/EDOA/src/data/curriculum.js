export const curriculumData = {
  subject: "Elaboración de Documentos Digitales Avanzados (EDOA-20)",
  group: "301",
  cortes: [
    { id: 1, label: "1er Corte", peso: "35%" },
    { id: 2, label: "2do Corte", peso: "35%" },
    { id: 3, label: "3er Corte", peso: "30%" },
  ],
  ras: [
    // ─── 1ER CORTE (35%) ───
    {
      id: "RA_Diag",
      title: "Diagnóstico",
      peso: "0%",
      corte: 1,
      weeks: [
        { id: "W00", label: "Semana 00 (10-14 Ago)" }
      ]
    },
    {
      id: "RA1.1",
      title: "RA 1.1",
      peso: "5%",
      corte: 1,
      weeks: [
        { id: "W01", label: "Semana 01 (17-21 Ago)" }
      ]
    },
    {
      id: "RA1.2",
      title: "RA 1.2",
      peso: "10%",
      corte: 1,
      weeks: [
        { id: "W02", label: "Semana 02 (24-28 Ago)" }
      ]
    },
    {
      id: "RA1.3",
      title: "RA 1.3",
      peso: "10%",
      corte: 1,
      weeks: [
        { id: "W03", label: "Semana 03 (31 Ago-04 Sep)" },
        { id: "W04", label: "Semana 04 (07-11 Sep)" },
        { id: "W05", label: "Semana 05 (14-18 Sep)" }
      ]
    },
    {
      id: "RA2.1",
      title: "RA 2.1",
      peso: "10%",
      corte: 1,
      weeks: [
        { id: "W06", label: "Semana 06 (21-25 Sep)" }
      ]
    },

    // ─── 2DO CORTE (35%) ───
    {
      id: "RA2.2",
      title: "RA 2.2",
      peso: "10%",
      corte: 2,
      weeks: [
        { id: "W07", label: "Semana 07 (28 Sep-02 Oct)" },
        { id: "W08", label: "Semana 08 (05-09 Oct)" }
      ]
    },
    {
      id: "RA3.1",
      title: "RA 3.1",
      peso: "5%",
      corte: 2,
      weeks: [
        { id: "W09", label: "Semana 09 (12-16 Oct)" }
      ]
    },
    {
      id: "RA3.2",
      title: "RA 3.2",
      peso: "10%",
      corte: 2,
      weeks: [
        { id: "W10", label: "Semana 10 (19-23 Oct)" },
        { id: "W11", label: "Semana 11 (26-30 Oct)" },
        { id: "W12", label: "Semana 12 (02-06 Nov)" }
      ]
    },
    {
      id: "RA3.3",
      title: "RA 3.3",
      peso: "10%",
      corte: 2,
      weeks: [
        { id: "W13", label: "Semana 13 (09-13 Nov)" }
      ]
    },

    // ─── 3ER CORTE (30%) ───
    {
      id: "RA3.4",
      title: "RA 3.4",
      peso: "15%",
      corte: 3,
      weeks: [
        { id: "W14", label: "Semana 14 (16-20 Nov)" }
      ]
    },
    {
      id: "RA4.1",
      title: "RA 4.1",
      peso: "5%",
      corte: 3,
      weeks: [
        { id: "W15", label: "Semana 15 (23-27 Nov)" }
      ]
    },
    {
      id: "RA4.2",
      title: "RA 4.2",
      peso: "5%",
      corte: 3,
      weeks: [
        { id: "W16", label: "Semana 16 (30 Nov-04 Dic)" }
      ]
    },
    {
      id: "RA4.3",
      title: "RA 4.3",
      peso: "5%",
      corte: 3,
      weeks: [
        { id: "W17", label: "Semana 17 (07-11 Dic)" }
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
    "W17": { days: [] }
  }
};
