import { W05 } from './schedules/W05.js';
import { W06 } from './schedules/W06.js';
import { W07 } from './schedules/W07.js';
import { W08 } from './schedules/W08.js';
import { W09 } from './schedules/W09.js';
import { W10 } from './schedules/W10.js';
import { W11 } from './schedules/W11.js';
import { W12 } from './schedules/W12.js';
import { W13 } from './schedules/W13.js';

export const curriculumData = {
  subject: "Elaboración de Páginas Web (DEWE-20)",
  group: "601",
  cortes: [
    { id: 1, label: "1er Corte", peso: "35%" },
    { id: 2, label: "2do Corte", peso: "25%" },
    { id: 3, label: "3er Corte", peso: "40%" },
  ],
  ras: [
    {
      id: "RA1.1",
      title: "1.1 RA (15%)",
      peso: "15%",
      corte: 1,
      weeks: [
        { id: "W00", label: "Semana 00 (09-13 Feb)" },
        { id: "W01", label: "Semana 01 (16-20 Feb)" },
        { id: "W02", label: "Semana 02 (23-27 Feb)" }
      ]
    },
    {
      id: "RA1.2",
      title: "1.2 RA (20%)",
      peso: "20%",
      corte: 1,
      weeks: [
        { id: "W03", label: "Semana 03 (02-06 Mar)" },
        { id: "W04", label: "Semana 04 (09-13 Mar)" },
        { id: "W05", label: "Semana 05 (16-20 Mar)" }
      ]
    },
    {
      id: "RA1.3",
      title: "1.3 RA (25%)",
      peso: "25%",
      corte: 2,
      weeks: [
        { id: "W06", label: "Semana 06 (23-27 Mar)" },
        { id: "W07", label: "Semana 07 (13-17 Abr)" },
        { id: "W08", label: "Semana 08 (20-24 Abr)" }
      ]
    },
    {
      id: "RA2.1",
      title: "2.1 RA (20%)",
      peso: "20%",
      corte: 3,
      weeks: [
        { id: "W09", label: "Semana 09 (27 Abr-01 May)" },
        { id: "W10", label: "Semana 10 (04-08 May)" },
        { id: "W11", label: "Semana 11 (11-15 May)" }
      ]
    },
    {
      id: "RA2.2",
      title: "2.2 RA (20%)",
      peso: "20%",
      corte: 3,
      weeks: [
        { id: "W12", label: "Semana 12 (18-22 May)" },
        { id: "W13", label: "Semana 13 (25-29 May)" },
        { id: "W14", label: "Semana 14 (01-05 Jun)" }
      ]
    }
  ],
  schedules: {
    "W00": { days: [] },
    "W01": { days: [] },
    "W02": { days: [] },
    "W03": { days: [] },
    "W04": { days: [] },
    "W05": W05,
    "W06": W06,
    "W07": W07,
    "W08": W08,
    "W09": W09,
    "W10": W10,
    "W11": W11,
    "W12": W12,
    "W13": W13,
    "W14": { days: [] }
  }
};
