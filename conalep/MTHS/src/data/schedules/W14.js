export const W14 = {
  materia: "mths",
  weekId: "W14",
  days: [
    {
      id: "tue",
      label: "Martes — 📘 Conocer la Bitácora + llenar lo que ya tienen avanzado",
      purpose: "Cada equipo ya tiene su proyecto definido y empezó a trabajar (casas inteligentes, sistemas de riego, autos, alarmas, etc.). Esta semana es trabajo de TALLER + documentación. El martes conocemos la estructura de la Bitácora de Proyecto y llenamos lo que ya tenemos avanzado de forma retroactiva. Miércoles y jueves son tiempo de trabajo donde cada sesión cierra con una nueva entrada de bitácora. Viernes... no hay clase. Cierre el jueves Hora 2 con presentaciones y entrega final.",
      hours: [
        {
          time: "Hora 1",
          title: "📘 Conocer la Bitácora de Proyecto — anatomía completa del documento",
          theory: "Cada equipo tiene su propio proyecto — casas inteligentes, sistemas de riego, autos, alarmas, estaciones climáticas, etc. Los proyectos son distintos, pero TODOS usan el mismo formato de documentación: la Bitácora de Proyecto.\n\n📄 ESTRUCTURA DE LA BITÁCORA (3 PARTES)\n\n🅰️ PARTE A — Información general (se llena hoy Hora 2 y queda fija)\n1. Portada\n2. Introducción — ½ pág: qué es, por qué lo eligieron, qué problema resuelve\n3. Objetivos — 1 general + 2-3 específicos\n4. Marco teórico breve — ½ pág: tecnologías que usarán\n5. Materiales — lista con cantidades\n6. Diseño del sistema — diagrama de bloques + tabla de pines\n\n🅱️ PARTE B — Bitácora de avances (1 entrada por día de trabajo)\n  📅 Día X — fecha\n  🎯 Objetivo: ___\n  🛠️ Actividades: ___\n  📸 Evidencias: fotos\n  ⚠️ Problemas: ___\n  ✅ Soluciones: ___\n  ➡️ Siguiente paso: ___\n\n🅲 PARTE C — Cierre (se llena el jueves Hora 2)\n7. Código final comentado\n8. Tabla de pruebas y resultados\n9. Conclusiones\n10. Mejoras futuras\n11. Bibliografía (incluir IA usada)\n\nHoy Hora 1 es solo para CONOCER la estructura. La Hora 2 es para crear el documento propio y empezar a llenarlo.",
          notebook: "Título: Conocer la Bitácora de Proyecto.\n\nAntes de empezar a llenar nada — diagnóstico de equipo:\n\n1. ¿Cómo se llama nuestro proyecto?\n2. ¿Quiénes somos los integrantes?\n3. ¿Qué problema resuelve nuestro proyecto?\n4. ¿Cuáles son las 2-3 funciones principales que va a tener?\n5. De las 6 secciones de la Parte A — ¿cuáles ya tenemos pensadas y cuáles no?\n   - ☐ Portada (datos del equipo)\n   - ☐ Introducción (descripción del proyecto)\n   - ☐ Objetivos (qué queremos lograr)\n   - ☐ Marco teórico (qué tecnologías usaremos)\n   - ☐ Materiales (lista de componentes)\n   - ☐ Diseño del sistema (cómo se conecta todo)\n6. ¿Qué hemos hecho HASTA HOY en el proyecto? Lista en bullets — esto se vuelve la primera entrada de la Bitácora en la Hora 2.\n7. ¿Qué problemas hemos encontrado? ¿Cómo los hemos resuelto (si ya lo logramos)?\n8. ¿Cuál es el siguiente paso que tenemos planeado para el proyecto?",
          practice: "1️⃣ El docente proyecta el diagrama de anatomía de la Bitácora y explica las 3 partes (A, B, C). Después muestra el ejemplo ya rellenado para que vean cómo se ve en la práctica.\n\n2️⃣ Cada equipo discute internamente (10 min):\n  • ¿Cómo se llama su proyecto y qué hace?\n  • ¿Qué de las 6 secciones de la Parte A ya tienen pensado?\n  • ¿Qué han hecho hasta hoy en el proyecto? (eso entra en la Bitácora Día 1 de la Hora 2)\n  Anotar en la libreta de un integrante.\n\n3️⃣ Cada equipo (representante) comparte al grupo en 30 segundos: nombre del proyecto, qué hace, qué tan avanzado está.\n\n📸 Evidencia: foto de la libreta con las notas del equipo.",
          diagram: `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0d1117; font-family: 'Segoe UI', sans-serif; color: #e6edf3; padding: 20px; }
  .sec-title {
    font-size: 11px; font-weight: 700; color: #58a6ff;
    text-transform: uppercase; letter-spacing: 1px;
    border-bottom: 1px solid #21262d;
    padding-bottom: 6px; margin: 22px 0 14px;
  }
  .sec-title:first-child { margin-top: 0; }

  /* Document anatomy */
  .doc {
    background: #161b22; border: 1px solid #30363d; border-radius: 12px;
    overflow: hidden;
  }
  .part {
    border-bottom: 1px solid #30363d;
    padding: 12px;
  }
  .part:last-child { border-bottom: none; }
  .part-header {
    display: flex; align-items: center; gap: 8px;
    margin-bottom: 10px;
  }
  .part-badge {
    font-size: 14px; font-weight: 700;
    width: 32px; height: 32px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    color: white; flex-shrink: 0;
  }
  .part-a .part-badge { background: #1f6feb; }
  .part-b .part-badge { background: #d29922; }
  .part-c .part-badge { background: #3fb950; }
  .part-name {
    font-size: 12px; font-weight: 700; color: #e6edf3;
  }
  .part-tag {
    font-size: 9px; color: #8b949e;
    background: #0d1117; padding: 2px 8px; border-radius: 10px;
    margin-left: auto;
  }
  .part-a .part-name { color: #79c0ff; }
  .part-b .part-name { color: #f0c040; }
  .part-c .part-name { color: #56d364; }

  .sec-list {
    display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px;
  }
  .sec-row {
    background: #0d1117; border: 1px solid #30363d; border-radius: 6px;
    padding: 6px 10px;
    display: flex; align-items: center; gap: 8px;
    font-size: 10px; color: #c9d1d9;
  }
  .sec-num {
    background: #21262d; color: #79c0ff;
    width: 18px; height: 18px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 9px; font-weight: 700;
    flex-shrink: 0;
  }
  .part-a .sec-num { color: #79c0ff; }
  .part-c .sec-num { color: #56d364; }

  .bita-template {
    background: #1f1700; border: 1px solid #d29922; border-radius: 8px;
    padding: 10px 12px;
    font-family: 'Consolas', monospace; font-size: 10px;
    color: #f0c040; line-height: 1.7;
  }
  .bita-template .empty {
    background: #0d1117; color: #6e7681;
    padding: 1px 8px; border-radius: 3px;
    font-style: italic;
  }

  /* Example bitacora */
  .example-card {
    background: #161b22; border: 1px solid #30363d; border-radius: 10px;
    padding: 14px; position: relative;
  }
  .example-tag {
    position: absolute; top: -10px; left: 14px;
    background: #3fb950; color: white;
    padding: 2px 10px; border-radius: 4px;
    font-size: 10px; font-weight: 700;
  }
  .example-title {
    font-size: 11px; color: #58a6ff; font-weight: 700;
    margin-bottom: 12px; padding-top: 4px;
  }
  .example-row {
    display: flex; gap: 10px; padding: 4px 0;
    font-size: 10px; line-height: 1.5;
    border-bottom: 1px dashed #21262d;
  }
  .example-row:last-child { border-bottom: none; }
  .example-row b {
    color: #79c0ff; min-width: 18px; flex-shrink: 0;
  }
  .example-row span { color: #c9d1d9; flex: 1; }
  .example-row ul { margin: 4px 0 0 0; padding-left: 16px; }
  .example-row li { color: #8b949e; margin: 2px 0; }
  .example-row em { color: #56d364; font-style: normal; }
  .example-row .warn { color: #f0c040; }
  .example-row .err { color: #ff7b72; }
</style>
</head>
<body>

<p class="sec-title">📐 Anatomía del documento — 3 partes, 11 secciones</p>
<div class="doc">

  <div class="part part-a">
    <div class="part-header">
      <div class="part-badge">A</div>
      <div class="part-name">PARTE A — Información general</div>
      <div class="part-tag">se llena el martes y queda fija</div>
    </div>
    <div class="sec-list">
      <div class="sec-row"><span class="sec-num">1</span>Portada</div>
      <div class="sec-row"><span class="sec-num">2</span>Introducción</div>
      <div class="sec-row"><span class="sec-num">3</span>Objetivos</div>
      <div class="sec-row"><span class="sec-num">4</span>Marco teórico breve</div>
      <div class="sec-row"><span class="sec-num">5</span>Materiales y componentes</div>
      <div class="sec-row"><span class="sec-num">6</span>Diseño del sistema</div>
    </div>
  </div>

  <div class="part part-b">
    <div class="part-header">
      <div class="part-badge">B</div>
      <div class="part-name">PARTE B — Bitácora de avances</div>
      <div class="part-tag">crece cada día (3 entradas)</div>
    </div>
    <div class="bita-template">
      📅 Día X — <span class="empty">fecha</span><br>
      🎯 Objetivo: <span class="empty">qué buscan lograr hoy</span><br>
      🛠️ Actividades: <span class="empty">lista</span><br>
      📸 Evidencias: <span class="empty">fotos</span><br>
      ⚠️ Problemas: <span class="empty">qué salió mal</span><br>
      ✅ Soluciones: <span class="empty">cómo lo arreglaron</span><br>
      ➡️ Siguiente paso: <span class="empty">para mañana</span>
    </div>
  </div>

  <div class="part part-c">
    <div class="part-header">
      <div class="part-badge">C</div>
      <div class="part-name">PARTE C — Cierre</div>
      <div class="part-tag">se llena el jueves Hora 2</div>
    </div>
    <div class="sec-list">
      <div class="sec-row"><span class="sec-num">7</span>Código final completo</div>
      <div class="sec-row"><span class="sec-num">8</span>Pruebas y resultados</div>
      <div class="sec-row"><span class="sec-num">9</span>Conclusiones</div>
      <div class="sec-row"><span class="sec-num">10</span>Mejoras futuras</div>
      <div class="sec-row"><span class="sec-num">11</span>Bibliografía</div>
    </div>
  </div>

</div>

<p class="sec-title">📝 Ejemplo — entrada de bitácora ya rellenada</p>
<div class="example-card">
  <span class="example-tag">EJEMPLO</span>
  <div class="example-title">Proyecto ficticio: Sistema de Riego Automático con ESP32 + BLE</div>

  <div class="example-row">
    <b>📅</b>
    <span><b>Día 2 (Miércoles W14) — fecha 27/05/2026</b></span>
  </div>
  <div class="example-row">
    <b>🎯</b>
    <span><em>Objetivo:</em> Conectar el sensor de humedad de suelo YL-69 al ESP32 y leer valores estables por el Serial Monitor.</span>
  </div>
  <div class="example-row">
    <b>🛠️</b>
    <span><em>Actividades realizadas:</em>
      <ul>
        <li>Conectamos el sensor YL-69 al ESP32: VCC→3V3, GND→GND, A0→GPIO 34.</li>
        <li>Cargamos un sketch que lee analogRead(34) e imprime el valor cada 500 ms.</li>
        <li>Probamos el sensor en tierra seca y luego con agua para identificar el rango.</li>
        <li>Calibramos: valor 3500 ≈ seco, valor 1500 ≈ húmedo.</li>
      </ul>
    </span>
  </div>
  <div class="example-row">
    <b>📸</b>
    <span><em>Evidencias:</em> Foto del sensor enterrado en la maceta de prueba. Captura del Serial Monitor mostrando los valores cambiando.</span>
  </div>
  <div class="example-row">
    <b>⚠️</b>
    <span class="warn">Problemas encontrados: las lecturas variaban mucho cuando había sol directo sobre el sensor. También un cable jumper del sensor se aflojó durante la prueba.</span>
  </div>
  <div class="example-row">
    <b>✅</b>
    <span><em>Soluciones aplicadas:</em>
      <ul>
        <li>Modificamos el código para promediar 10 lecturas y estabilizar el valor.</li>
        <li>Soldamos los pines del sensor a los cables para que no se aflojen.</li>
      </ul>
    </span>
  </div>
  <div class="example-row">
    <b>➡️</b>
    <span><em>Siguiente paso (Jueves H1):</em> agregar la bomba de agua DC con un relé controlado por GPIO 25. Programar comando BLE 'r' para activar riego manual, y lógica automática: si el valor del sensor &gt; 3000 (suelo seco) durante 5 segundos, encender la bomba 3 segundos.</span>
  </div>
</div>

</body>
</html>
`,
          code: "# 📋 PLANTILLA DE LA BITÁCORA — copiar a Word para empezar\n# (Esto NO es código Arduino — es la estructura del documento que cada equipo llenará)\n\n================================================================\n  BITÁCORA DE PROYECTO — [NOMBRE DEL PROYECTO AQUÍ]\n================================================================\n\n----------------------------------------------------------------\n  PARTE A — INFORMACIÓN GENERAL (se llena el Martes y queda fija)\n----------------------------------------------------------------\n\n1. PORTADA\n   • Nombre del proyecto: ___\n   • Integrantes: ___\n   • Grupo: 401\n   • Fecha de inicio: ___\n   • Docente: Dr. Felipe López Salazar\n\n2. INTRODUCCIÓN (½ a 1 página)\n   • ¿Qué es el proyecto?\n   • ¿Por qué lo elegimos?\n   • ¿Qué problema resuelve?\n   • ¿A quién va dirigido?\n\n3. OBJETIVOS\n   • Objetivo general: ___\n   • Objetivos específicos:\n     1. ___\n     2. ___\n     3. ___\n\n4. MARCO TEÓRICO BREVE (½ página)\n   • Tecnologías a usar: ESP32, BLE, [sensores específicos], [actuadores]\n   • Breve explicación de cómo funcionan\n\n5. MATERIALES Y COMPONENTES\n   • ESP32 DevKit                   1 pza\n   • Protoboard                     1 pza\n   • [resto del material aquí]\n\n6. DISEÑO DEL SISTEMA\n   • Diagrama de bloques (insertar imagen o dibujo)\n   • Esquema de pines (qué componente va en cada GPIO)\n   • Pseudocódigo del ESP32 (qué hará paso a paso)\n\n----------------------------------------------------------------\n  PARTE B — BITÁCORA DE AVANCES (crece cada día)\n----------------------------------------------------------------\n\n📅 DÍA 1 — Martes [fecha]\n   🎯 Objetivo: ___\n   🛠️ Actividades realizadas:\n      - ___\n      - ___\n   📸 Evidencias: [insertar fotos]\n   ⚠️ Problemas encontrados: ___\n   ✅ Soluciones aplicadas: ___\n   ➡️ Siguiente paso: ___\n\n📅 DÍA 2 — Miércoles [fecha]\n   (mismo formato — se llena el miércoles)\n\n📅 DÍA 3 — Jueves [fecha]\n   (mismo formato — se llena el jueves)\n\n----------------------------------------------------------------\n  PARTE C — CIERRE (se llena el Jueves Hora 2)\n----------------------------------------------------------------\n\n7. CÓDIGO FINAL COMPLETO\n   (pegar aquí el código del ESP32 con comentarios)\n\n8. PRUEBAS Y RESULTADOS\n   | # | Qué probamos              | Resultado esperado | Resultado obtenido |\n   |---|---------------------------|--------------------|--------------------|\n   | 1 |                           |                    |                    |\n   | 2 |                           |                    |                    |\n\n9. CONCLUSIONES (½ página en párrafo)\n   ___\n\n10. MEJORAS FUTURAS\n    • ___\n    • ___\n\n11. BIBLIOGRAFÍA / REFERENCIAS\n    • IA usada: [ChatGPT/Claude/Gemini/Copilot — versión, fecha]\n    • Tutoriales: [URLs]\n    • Documentación oficial: [URLs]\n\n================================================================",
          codeRef: "# 📋 PLANTILLA DE LA BITÁCORA — referencia (igual al campo 'code' de arriba)\n# Subir a Classroom una versión Word con esta estructura ya formateada.",
          product: "Cada equipo entiende la estructura de la Bitácora y tiene identificado qué secciones ya puede llenar. Notas del diagnóstico en libreta de un integrante.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta hora es para presentar el formato — NO para que los alumnos construyan nada todavía.\n\n• Proyectar el diagrama de anatomía y el ejemplo de bitácora rellenada. Señalar las secciones, no leerlas palabra por palabra.\n• El ejemplo del riego muestra problemas REALES (sol, cables sueltos) — recalcar que una bitácora honesta vale más que una perfecta.\n• Los alumnos crean su propio documento en la Hora 2, desde cero — NO se les da plantilla.\n• Anotar mentalmente qué equipos se ven débiles durante el diagnóstico para apoyarlos en la Hora 2.\n\nCRITERIOS DE CALIFICACIÓN (escala /10):\n• Parte A completa: 1.5 · Bitácora 3 días con fotos: 3.0 · Diseño del sistema: 1.5 · Código final comentado: 1.5 · Pruebas y conclusiones: 1.5 · Presentación oral: 1.0"
        },
        {
          time: "Hora 2",
          title: "📝 Llenar la Parte A retroactiva + primera entrada de Bitácora",
          theory: "Ya conocen la estructura — ahora la construyen. Cada equipo abre un documento Word nuevo desde cero y escribe sus propias secciones.\n\nMeta de la hora: Parte A completa (secciones 1-6) + Bitácora Día 1 retroactiva.\n\n💡 Bitácora Día 1 retroactiva — como ya avanzaron en el proyecto antes de hoy, esta primera entrada documenta TODO lo que hicieron hasta ahora, no solo lo de hoy. Es el 'punto cero' del registro.\n\nDistribución de tiempo sugerida:\n• Portada + Objetivos: 5 min\n• Materiales + Marco teórico: 10 min\n• Introducción: 15 min\n• Diseño del sistema: 15 min\n• Bitácora Día 1: 15 min",
          notebook: "Esta hora la libreta es solo para apoyar la escritura del documento — no se piden respuestas formales nuevas. Útil para:\n\n• Pre-redactar la introducción en libreta antes de pasarla a Word.\n• Bocetar el diagrama de bloques a mano antes de redibujarlo digital.\n• Listar los problemas que recuerdan haber tenido (para la bitácora retroactiva).\n\nSi te ayuda escribir primero a mano y luego pasar al documento, hazlo. Si prefieres ir directo al Word, también está bien.",
          practice: "1️⃣ Crear un documento Word nuevo. Poner de título: 'Bitácora de Proyecto — [Nombre del proyecto]'. Crear los 11 encabezados de las secciones según la estructura vista en Hora 1.\n\n2️⃣ Llenar secciones 1, 3 y 5 (Portada, Objetivos, Materiales) — 10 min. Son listas, se llenan rápido.\n\n3️⃣ Llenar sección 2 (Introducción) — 15 min. Responder: qué es el proyecto, por qué lo eligieron, qué problema resuelve, a quién va dirigido. ½ página es suficiente. Pueden apoyarse en la IA pero con palabras propias.\n\n4️⃣ Llenar secciones 4 y 6 (Marco teórico + Diseño del sistema) — 15 min.\n  • Marco teórico: ½ pág sobre las tecnologías que usan.\n  • Diseño: dibujar el diagrama de bloques a mano y fotografiarlo para pegarlo, más la tabla de pines.\n\n5️⃣ Llenar Bitácora Día 1 (retroactiva) — 15 min.\n  • Fecha: hoy.\n  • Objetivo: documentar el avance previo del proyecto.\n  • Actividades: lista de lo que han hecho ANTES de hoy + lo de esta sesión.\n  • Evidencias: foto del prototipo en su estado actual.\n  • Problemas encontrados hasta ahora / soluciones aplicadas.\n  • Siguiente paso: qué harán el miércoles.\n\n6️⃣ Guardar como 'Bitacora_NombreProyecto_Dia1.docx' y subir a Classroom.\n\n📸 Evidencia: Word con Parte A + Bitácora Día 1 subido a Classroom.",
          product: "Documento Word con: Parte A (secciones 1-6) completamente llenas + Bitácora Día 1 con entrada retroactiva. Subido a Classroom como versión 'Día 1'. Las siguientes 2 sesiones agregarán Bitácora Día 2 y Día 3, y la sesión final agregará Parte C.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Escritura intensiva — pasar mesa por mesa cada 10 min.\n\n• Si un equipo lleva 20 min en la introducción, intervenir: 'cierra con lo que tienes y avanza'.\n• Diagrama de bloques: 5-8 cajitas máximo (ESP32, sensores, actuadores, celular BLE). No es un esquema eléctrico.\n• Si alguien no trajo el prototipo, puede usar fotos que ya tenga en el celular para la bitácora.\n• Insistir que se suba a Classroom al final de la sesión, no mañana.\n• La IA está permitida para inspirarse en la redacción, no para copiar y pegar."
        }
      ],
      cierre: "El martes presentamos la estructura de la Bitácora y la llenamos con lo que ya tienen avanzado. De ahora en adelante, cada sesión agrega una entrada nueva. El miércoles y el jueves son tiempo de TALLER — trabajo de proyecto + bitácora al final.",
      frase_docente: "Documentar mientras se construye es lo que distingue al técnico profesional del aficionado — el profesional siempre puede explicar qué hizo y por qué."
    },
    {
      id: "wed",
      label: "Miércoles — 🔧 Taller de proyecto + Bitácora Día 2",
      purpose: "Hora de trabajo libre en el proyecto. Cada equipo avanza a su ritmo según el plan que definieron el martes (sección 'Siguiente paso' de la Bitácora Día 1). Últimos 10 min: cierre con entrada de Bitácora Día 2.",
      hours: [
        {
          time: "Hora 1",
          title: "🔧 Taller de proyecto + Bitácora Día 2",
          theory: "Hoy es 100% TALLER. No hay teoría nueva — el conocimiento que necesitas ya lo tienes del trabajo previo y del análisis con IA que han venido haciendo.\n\n🎯 META DE LA SESIÓN\nAvanzar el proyecto un paso significativo siguiendo el plan que escribiste el martes en 'Siguiente paso' de la Bitácora Día 1.\n\n📌 REGLA DE ORO PARA HOY\nLos últimos 10 minutos de la sesión NO son de trabajo — son de documentación. Detenerse, abrir el Word del equipo, escribir la Bitácora Día 2 EN CALIENTE (cuando los detalles aún están frescos). Si lo dejan para 'mañana en casa', los detalles se olvidan y la bitácora se vuelve genérica.\n\n💡 SUGERENCIAS DURANTE EL TALLER\n• Trabajar EN PAREJAS dentro del equipo — uno arma, otro programa. Después intercambian.\n• Tomar FOTOS conforme avanzan, no solo al final. La bitácora se nutre de fotos.\n• Cuando algo NO funciona, anotar QUÉ probaste — eso es valioso para la sección 'Problemas y soluciones' de la bitácora.\n• La IA está permitida — úsenla como tutor cuando se atoren.\n\n⚠️ SI EL EQUIPO QUEDA ATORADO\n• Llamar al docente — no perder 30 min sin pedir ayuda.\n• Si un componente físico no funciona, pedir uno de respaldo.\n• Si el código no compila, pegar el error en la IA + pedir explicación.",
          notebook: "Esta hora la libreta NO es obligatoria — todo lo escrito va directo al Word de la bitácora. Pero puede ser útil para:\n\n• Anotar el error EXACTO cuando algo falla (sirve para la sección 'Problemas' de la bitácora).\n• Bocetar conexiones nuevas antes de cablearlas.\n• Tomar nota de qué le preguntaste a la IA y qué respondió (para la bibliografía final).",
          practice: "🕐 ESTRUCTURA DE LA HORA (60 min)\n\n1️⃣ PASO 1 (3 min) — Repaso del 'Siguiente paso' de ayer\n  • Cada equipo abre la Bitácora Día 1 del martes.\n  • Lee la sección 'Siguiente paso' que escribió.\n  • Confirma que eso es lo que va a hacer hoy.\n  • Si las prioridades cambiaron, anotar por qué (eso entra en la Bitácora Día 2).\n\n2️⃣ PASO 2 (45 min) — Trabajo de TALLER\n  • Avanzar el proyecto siguiendo el plan.\n  • Tomar 3-5 fotos durante el avance (no al final — durante).\n  • Anotar problemas conforme aparecen.\n  • Pedir ayuda al docente cuando algo se trabe más de 15 min.\n\n3️⃣ PASO 3 (10 min) — Bitácora Día 2 EN CALIENTE\n  • Abrir el Word del equipo.\n  • Crear la entrada del Día 2 (debajo del Día 1).\n  • Llenar las 7 partes del formato:\n    - Fecha (hoy miércoles).\n    - Objetivo de la sesión.\n    - Actividades realizadas (3-6 bullets).\n    - Evidencias (insertar 2-3 fotos del avance).\n    - Problemas encontrados (sé honesto — los problemas son lo más valioso).\n    - Soluciones aplicadas.\n    - Siguiente paso (qué harán el jueves H1).\n\n4️⃣ PASO 4 (2 min) — Guardar y subir versión Día 2 a Classroom\n  • Guardar el archivo.\n  • Subir como 'Bitacora_NombreProyecto_Dia2.docx' a Classroom.\n\n📸 EVIDENCIA OBLIGATORIA\n• Archivo Word con Bitácora Día 2 (la anterior + esta nueva entrada) subido a Classroom al final de la sesión.",
          product: "Avance significativo del proyecto + entrada de Bitácora Día 2 documentada con fotos del avance. Documento Word actualizado y subido a Classroom como versión 'Día 2'.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta hora es de SUPERVISIÓN ACTIVA, no de presentación. Estrategias:\n\n(1) CIRCULAR ENTRE EQUIPOS: pasar mesa por mesa cada 15 min. Preguntar: '¿qué están haciendo? ¿qué problema tienen?'. Identificar a tiempo a los equipos atorados.\n\n(2) NO DAR LA RESPUESTA: cuando un equipo se atora, hacer pregunta socrática: '¿qué dice el error?' '¿qué pasa si cambias esto por esto otro?'. La meta es que aprendan a depurar, no que tú depures por ellos.\n\n(3) TIMEKEEPING EN EL MINUTO 50: anunciar al grupo '10 minutos para empezar la Bitácora Día 2'. Forzar la parada de trabajo a tiempo es la única manera de que la bitácora se llene en caliente.\n\n(4) ALUMNOS QUE NO TRAJERON MATERIAL: si un equipo llegó sin su prototipo, NO regresarlos — sentarlos junto a otro equipo en calidad de 'observadores' y que documenten lo que ven en la bitácora del compañero (con permiso). NO se vale 'no traje nada, no participo'.\n\n(5) FOTOS DEL DOCENTE: tomar 1-2 fotos del grupo trabajando con tu propio celular. Sirven para tu evaluación al final del semestre + para mostrar evidencia al plantel del trabajo realizado.\n\n(6) EQUIPOS MUY RÁPIDOS: si un equipo termina su plan en 30 min, retarlos con: '¿qué le agregarían si tuvieran 1 hora más?'. Que lo intenten. La bitácora Día 2 puede ser larga si avanzaron mucho — eso es bueno."
        }
      ],
      cierre: "Una sesión de taller bien aprovechada vale más que 3 de teoría. La bitácora capturada en caliente es lo que diferencia este día de uno olvidado.",
      frase_docente: "Los detalles del trabajo se olvidan en 24 horas — por eso la bitácora se escribe HOY, no mañana."
    },
    {
      id: "thu",
      label: "Jueves — 🔧 Taller (Hora 1) + 🎤 Cierre con presentación (Hora 2)",
      purpose: "Hora 1: última sesión de TALLER para integrar y dejar el proyecto funcionando + Bitácora Día 3. Hora 2: completar Parte C del documento (código, pruebas, conclusiones), preparar y dar presentación de 3-5 minutos al grupo, y entregar la versión FINAL de la Bitácora en Classroom.",
      hours: [
        {
          time: "Hora 1",
          title: "🔧 Taller final + Bitácora Día 3 — dejar el proyecto en estado demo",
          theory: "Esta es la ÚLTIMA hora de construcción. Después de esto no hay más sesiones de trabajo — solo el cierre con presentación. Por eso la meta de hoy es DEJAR EL PROYECTO EN ESTADO DEMOSTRABLE.\n\n🎯 META DE LA HORA\nEl proyecto debe poder ENCENDERSE Y FUNCIONAR de principio a fin, aunque no esté perfecto. Es preferible un proyecto con 3 funciones que funcionen al 100% que uno con 5 funciones que fallan a la mitad.\n\n📌 PRIORIZACIÓN — APLICAR HOY\n1. Lo que YA funciona → mantenerlo funcionando (no romperlo intentando mejorarlo).\n2. Lo que CASI funciona → terminar de afinarlo (probablemente es lo que más vale la pena).\n3. Lo que aún NO funciona → decidir: ¿lo dejamos fuera para presentar lo que sí funciona, o nos arriesgamos a debugearlo?\n4. Funciones nuevas que íbamos a agregar → SOLO si tenemos al menos 30 min restantes.\n\n📋 LISTA DE COSAS A TENER LISTAS PARA EL CIERRE DE MAÑANA (Hora 2)\n• El proyecto físico armado y funcional.\n• El código final guardado en el equipo (USB, drive, Classroom).\n• Las fotos para la Bitácora Día 3 (tomar HOY, no mañana).\n• Una idea clara de quién va a decir qué en la presentación de 3-5 min.",
          notebook: "Esta hora la libreta es opcional. Lo importante es que cualquier nota relevante termine en la Bitácora Día 3 del Word.",
          practice: "🕐 ESTRUCTURA DE LA HORA (60 min)\n\n1️⃣ PASO 1 (3 min) — Diagnóstico rápido del estado del proyecto\n  • Cada equipo responde 3 preguntas EN VOZ ALTA dentro del equipo:\n    - ¿Qué funciones ya están al 100%?\n    - ¿Cuáles están a medias?\n    - ¿Cuáles aún no están iniciadas?\n  • Decidir prioridades para esta hora basado en eso.\n\n2️⃣ PASO 2 (45 min) — Trabajo final\n  • Aplicar la regla: TERMINAR lo que ya está medio hecho > EMPEZAR lo nuevo.\n  • Probar el proyecto COMPLETO al menos una vez al final del paso 2 — encenderlo desde cero, probar todas las funciones, ver que todo responde.\n  • Tomar las fotos finales del proyecto FUNCIONANDO (varias, en diferentes ángulos).\n  • Si algo se rompe en una prueba final, intentar recuperar — pero no perder más de 15 min en eso.\n\n3️⃣ PASO 3 (10 min) — Bitácora Día 3 (en caliente)\n  • Crear entrada del Día 3 en el Word.\n  • Llenar el formato estándar.\n  • Para 'Siguiente paso' poner: 'Mañana Hora 2: completar Parte C + presentación al grupo + entrega final en Classroom'.\n\n4️⃣ PASO 4 (2 min) — Guardar y subir versión Día 3 a Classroom\n  • Subir como 'Bitacora_NombreProyecto_Dia3.docx'.\n\n📸 EVIDENCIA DE LA HORA\n• Bitácora Día 3 actualizada con fotos del proyecto en estado funcional.\n• Versión Día 3 subida a Classroom.",
          product: "Proyecto físico en estado demostrable (funciona de principio a fin) + Bitácora Día 3 con fotos del proyecto funcionando. Documento Word con las 3 entradas de bitácora completas, subido a Classroom como versión 'Día 3'.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta hora es DE EMERGENCIA — la última oportunidad de que las cosas funcionen. Estrategias:\n\n(1) PRESIÓN POSITIVA: anunciar al inicio 'hoy es la última hora de trabajo. Mañana es solo presentar. Lo que no funcione hoy, no funcionará mañana'. Esto los obliga a priorizar.\n\n(2) EQUIPOS EN CRISIS: si un equipo claramente no va a tener nada funcionando, ayudar a 'salvar' algo — al menos UN sensor leyendo, o UN LED respondiendo por BLE. La meta no es perfección sino entregar ALGO demostrable.\n\n(3) NO PERMITIR DESARMAR: durante la última hora, prohibir desarmar circuitos para 'rearmar bonitos'. Lo que funciona se queda como está. Estética se sacrifica por funcionalidad.\n\n(4) FOTO PROFESIONAL DEL PROYECTO: en los últimos 5 min de trabajo, ayudar a cada equipo a tomar UNA foto bonita del proyecto en una superficie limpia. Esta foto va en la portada o introducción del documento final."
        },
        {
          time: "Hora 2",
          title: "🎤 Cierre del proyecto — completar Parte C, presentar y entregar",
          theory: "Esta es la última hora de W14 y el cierre de RA 3.2. Hoy ya no hay construcción — es CONSOLIDACIÓN. La hora se divide en 3 bloques:\n\n📝 BLOQUE 1 (20 min) — Completar Parte C del documento\n• Sección 7: Código final completo con comentarios.\n• Sección 8: Pruebas y resultados (tabla).\n• Sección 9: Conclusiones (½ página en párrafo).\n• Sección 10: Mejoras futuras.\n• Sección 11: Bibliografía (incluir IA usada).\n\n🎤 BLOQUE 2 (30 min) — Presentaciones al grupo (3-5 min cada equipo)\n• Estructura sugerida para cada equipo:\n  - 30 seg: presentación del equipo y nombre del proyecto.\n  - 1 min: qué hace, para quién (problema que resuelve).\n  - 1-2 min: DEMOSTRACIÓN en vivo (mostrar el proyecto funcionando).\n  - 30-60 seg: aprendizajes principales + cosas que mejorarían.\n  - Preguntas del grupo o del docente (1 min máximo).\n\n📤 BLOQUE 3 (10 min) — Entrega final en Classroom\n• Subir la versión FINAL del documento (con Parte C completa) como 'Bitacora_NombreProyecto_FINAL.docx'.\n• Confirmar que se subió correctamente.\n• Llenar una breve encuesta de autoevaluación (opcional pero recomendada).\n\n💡 RECOMENDACIONES PARA LA PRESENTACIÓN\n• HABLAR FUERTE Y CLARO — todos los del salón deben oírte.\n• MOSTRAR el proyecto FUNCIONANDO (no solo describirlo).\n• REPARTIR LOS ROLES — si son 3, que cada uno hable de algo distinto (uno la intro, otro la demo, otro las conclusiones).\n• SI ALGO FALLA EN LA DEMO — no entrar en pánico. Decir 'normalmente esto funciona así, hoy no quiere' y seguir. Sucede en el mundo real todo el tiempo.",
          notebook: "Hoy NO se usa libreta — todo es Word + presentación oral.\n\nÚtil tener a mano: una hoja con la lista de los puntos que cada integrante del equipo va a decir durante los 3-5 min de presentación (script mínimo).",
          practice: "🕐 ESTRUCTURA DE LA HORA (60 min)\n\n📝 BLOQUE 1 — COMPLETAR PARTE C (20 min)\n\n1️⃣ PASO 1 (5 min) — Sección 7: Código final\n  • Copiar el código del Arduino IDE al documento Word.\n  • Agregar comentarios donde sea necesario.\n  • Formato: usar fuente monoespaciada (Consolas, Courier New) para que se vea como código.\n\n2️⃣ PASO 2 (5 min) — Sección 8: Pruebas y resultados\n  • Llenar la tabla:\n    | # | Qué probamos | Resultado esperado | Resultado obtenido | Estado |\n  • Estado: ✓ Exitosa / ⚠️ Parcial / ✗ Falló.\n  • Mínimo 4 pruebas registradas.\n\n3️⃣ PASO 3 (5 min) — Secciones 9, 10, 11\n  • Conclusiones: ½ página en párrafo (NO bullets) respondiendo: ¿qué aprendimos? ¿qué fue lo más difícil? ¿qué fue lo más satisfactorio?\n  • Mejoras futuras: 3-5 cosas que harían con más tiempo.\n  • Bibliografía: lista de fuentes (IA usada, tutoriales con URL, documentación).\n\n4️⃣ PASO 4 (3 min) — Guardar el documento FINAL\n  • Guardar como 'Bitacora_NombreProyecto_FINAL.docx'.\n  • NO subir todavía — primero presentación.\n\n5️⃣ PASO 5 (2 min) — Preparar la presentación (5 min)\n  • Decidir QUIÉN dice QUÉ (script mínimo).\n  • Tener el proyecto físico LISTO (no en una caja, no desarmado).\n  • Tener el celular con BLE Controller conectado al ESP32.\n\n🎤 BLOQUE 2 — PRESENTACIONES (30 min, 3-5 min por equipo)\n\n  • Orden de presentación al azar (el docente saca un papelito).\n  • Cada equipo pasa al frente:\n    - Intro (30 s)\n    - Descripción del proyecto (1 min)\n    - DEMOSTRACIÓN en vivo (1-2 min)\n    - Aprendizajes y mejoras (30-60 s)\n    - Preguntas (1 min máximo)\n  • Total por equipo: 4-5 minutos máximo.\n  • Aplausos al final de cada presentación.\n\n📤 BLOQUE 3 — ENTREGA FINAL (10 min)\n\n6️⃣ PASO 6 (5 min) — Subir a Classroom\n  • Cada equipo sube 'Bitacora_NombreProyecto_FINAL.docx'.\n  • Verificar que se subió correctamente.\n\n7️⃣ PASO 7 (3 min) — Autoevaluación rápida (opcional pero recomendada)\n  • Cada equipo responde en una encuesta corta:\n    - ¿Qué tan satisfecho está con el resultado? (1-10)\n    - ¿Qué fue lo más valioso que aprendió en el proyecto?\n    - ¿Qué le mejoraría a la metodología para la próxima vez?\n\n8️⃣ PASO 8 (2 min) — Cierre del docente\n  • Felicitaciones al grupo.\n  • Anuncio de calificaciones aproximadas para la siguiente semana.\n  • Cierre formal de RA 3.2.\n\n📸 EVIDENCIA FINAL\n• Documento Word FINAL en Classroom.\n• Presentación oral dada al grupo.\n• Proyecto físico mostrado funcionando.",
          product: "Documento 'Bitacora_NombreProyecto_FINAL.docx' completo (11 secciones + 3 entradas de bitácora) en Classroom. Presentación oral de 3-5 minutos dada al grupo con demostración en vivo del proyecto funcionando. Cierre formal de RA 3.2 y del semestre de MTHS.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta hora es CEREMONIAL — celebra el cierre del semestre y del módulo MTHS. Estrategias:\n\n(1) GRABAR LAS PRESENTACIONES: pedir permiso al grupo al inicio para grabar las presentaciones (cada equipo). Las grabaciones sirven para: (a) tu evaluación posterior con más calma, (b) muestra al plantel del trabajo realizado, (c) los alumnos pueden usarlas en su portafolio profesional.\n\n(2) CALIFICAR EN VIVO con rúbrica corta: tener impresa una hoja por equipo con los criterios (escala /10):\n• Documento completo y ordenado (3 pts)\n• Bitácora con honestidad sobre problemas/soluciones (2 pts)\n• Proyecto funcional en demo (3 pts)\n• Presentación clara y bien repartida (1.5 pts)\n• Capacidad de responder preguntas (0.5 pts)\nLlenar mientras presentan — al final tienes calificaciones casi listas.\n\n(3) PREGUNTAS DEL DOCENTE: tener 2-3 preguntas preparadas para cada equipo según su proyecto:\n• 'Si el sensor de humedad se desconectara, ¿qué pasaría con la bomba?'\n• 'Si dos personas mandaran el comando al mismo tiempo desde BLE, ¿qué pasaría?'\n• '¿Cuál fue el momento más difícil del proyecto y cómo lo resolvieron?'\nLas respuestas miden si REALMENTE entienden su proyecto o si lo hicieron mecánicamente.\n\n(4) ORDEN DE PRESENTACIONES — AL AZAR: sacar papelitos para que nadie se 'esconda' al final. Si presentan en orden, los del final ven los errores de los del principio y mejoran su presentación injustamente.\n\n(5) EQUIPOS QUE FALLAN LA DEMO: si la demo en vivo falla, NO descalificar al equipo — preguntar QUÉ debería pasar y POR QUÉ creen que no pasó. La capacidad de explicar el fallo vale tanto como el éxito.\n\n(6) CIERRE EMOCIONAL: este es el último día del módulo MTHS para muchos alumnos. Tomarse 2 min al final para reconocer el camino del semestre — empezaron con conceptos básicos de electrónica y terminan presentando proyectos integrados con BLE. Eso es notable. Felicitarlos en voz alta.\n\n(7) APLAUSOS: pedir aplausos al final de CADA presentación. Genera ambiente positivo y ayuda a los más nerviosos."
        }
      ],
      cierre: "Esta semana cierra RA 3.2 y el módulo MTHS del semestre. Lo que demostraron NO es teoría — son sistemas físicos funcionando que cada equipo diseñó, construyó y documentó. Esa capacidad de pasar de una idea a un sistema físico es lo que les diferencia profesionalmente.",
      frase_docente: "Un proyecto que entregas con su documentación completa habla de ti más que cualquier currículum — porque demuestra cómo trabajas, no solo qué sabes."
    }
  ]
};
