# Portal V2 para planeacion por hora

## Proposito

Esta version convierte el portal de MTCS en una guia de clase. La pantalla principal muestra cortes, resultados de aprendizaje, semanas y horas de trabajo.

## Archivos principales

- `src/App.jsx`: entrada limpia del portal. Solo carga `TeachingPortal`.
- `src/components/TeachingPortal.jsx`: plantilla visual reusable.
- `src/data/teachingPlan.js`: contenido editable de la materia.
- `src/styles/App.css`: estilos de la version 2.
- `src/components/TeachingPortalV1.jsx`: respaldo de la version anterior.

## Como actualizar contenido

Editar solamente `src/data/teachingPlan.js` para cambios normales:

- Datos del modulo: `teachingPlan.module`.
- Cortes, RA, porcentajes y semanas: `teachingPlan.cortes`.
- Semanas y horas: `teachingPlan.weeks`.
- Cada hora usa: `start`, `dictation`, `learningResult`, `identification`, `development`, `closure`.
- La infografia de la hora se define con `infographicTitle` e `infographicSteps`.

## Estructura visual

- Izquierda: cortes, RA, porcentajes, semanas planeadas y salto a semanas cargadas.
- Superior central: encabezado de la semana.
- Debajo del encabezado: botones Hora 1 a Hora 5.
- Centro: inicio, dictado, resultado de aprendizaje, datos de identificacion, desarrollo con infografia y conclusion.
- Derecha: RA activo, producto breve, avisos y corte actual.

## Para copiar a otra materia

1. Copiar `TeachingPortal.jsx`, `teachingPlan.js` y los estilos de `App.css`.
2. Cambiar `teachingPlan.module`.
3. Cambiar cortes, RA y semanas.
4. Mantener las mismas claves de cada hora para que la plantilla funcione sin tocar React.

