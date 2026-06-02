export const W13 = {
  materia: "mths",
  weekId: "W13",
  days: [
    {
      id: "tue",
      label: "Martes — 📝 Reporte de práctica BLE (2 horas dedicadas a entregar)",
      purpose: "Dedicar las 2 horas del martes al reporte formal de la práctica BLE de W12. Hora 1 inicia el documento, recopila evidencias y comienza la redacción; Hora 2 lo completa y entrega en Classroom. La modificación del Programa 04 con un segundo LED se mueve al jueves Hora 1.",
      hours: [
        {
          time: "Hora 1",
          title: "📝 Reporte de práctica BLE — recopilar evidencias y entregar",
          theory: "La práctica de la semana pasada (Programa 04: ESP32 + BLE + Serial + Botón) funcionó — el LED respondió a comandos desde el celular vía BLE Controller. Pero NO entregaron el reporte de esa práctica. Hoy lo escribimos completo, con evidencias fotográficas de lo que vivieron.\n\n📋 ¿QUÉ ES UN REPORTE DE PRÁCTICA Y POR QUÉ IMPORTA?\nUn reporte de práctica NO es solo una lista de pasos — es un documento profesional que demuestra:\n• QUÉ hiciste (el procedimiento real, no el ideal del manual).\n• POR QUÉ funciona (entendimiento del programa, no copia de código).\n• CÓMO lo verificaste (evidencia visual del resultado).\n• QUÉ aprendiste (conclusión personal, no genérica).\n\nEn la industria de sistemas embebidos, los reportes son la principal manera en que los técnicos comunican lo que hicieron a sus líderes y a otros equipos. Saber escribirlos es tan importante como saber programar.\n\n📐 ESTRUCTURA OBLIGATORIA DEL REPORTE (8 SECCIONES)\n\n1️⃣ PORTADA\n• CONALEP Plantel Pachuca II.\n• Carrera: Informática (PT).\n• Módulo: Manejo de Tecnologías de Hardware y Software (MTHS).\n• Práctica: 'Control de LED por Bluetooth Low Energy con ESP32'.\n• Nombre completo, grupo, fecha.\n• Docente: Dr. Felipe López Salazar.\n\n2️⃣ INTRODUCCIÓN (½ página)\n¿Qué es BLE y para qué se usa? Mencionar al menos 2 ejemplos reales (pulseras inteligentes, sensores médicos, audífonos, beacons en tiendas).\n\n3️⃣ MARCO TEÓRICO — DESGLOSE DEL PROGRAMA (1-2 páginas)\nAquí van las fotografías de tu LIBRETA con el análisis línea por línea que hiciste con IA en W12. Incluir:\n• Foto de la página donde desglosaste las 4 secciones (#include, UUIDs, MyCallbacks, procesarComando).\n• Foto de las respuestas a las preguntas 8, 9 y 10 escritas con tus propias palabras.\n• Breve descripción debajo de cada foto: '¿qué muestra esta página?' (1-2 líneas).\n\n4️⃣ MATERIALES UTILIZADOS\n• ESP32 DevKit.\n• Protoboard.\n• 1 LED + resistencia 220Ω.\n• 1 botón táctil (4 patas).\n• Cables jumper macho-macho (4 mínimo).\n• Cable USB de datos.\n• Computadora con Arduino IDE (o tablet con ArduinoDroid).\n• Celular con app BLE Controller.\n\n5️⃣ PROCEDIMIENTO\nNarrar EN PASADO lo que TÚ hiciste — no copiar el manual. Mínimo 8 pasos:\n1. Armé el circuito en la protoboard (LED en GPIO 2, botón en GPIO 4)...\n2. Conecté el ESP32 por USB y lo identifiqué en COM__...\n3. Pegué el código del Programa 04 en Arduino IDE...\n... etc, hasta enviar comandos desde BLE Controller.\n\n6️⃣ EVIDENCIAS FOTOGRÁFICAS (las 3 categorías obligatorias)\n📔 LIBRETA — fotos del desglose con IA (mínimo 2).\n🔌 CONEXIÓN — foto del circuito armado en la protoboard, donde se vea claramente el ESP32, el LED, la resistencia, el botón y los cables (mínimo 1).\n⚡ FUNCIONAMIENTO — foto o serie de fotos del LED respondiendo a los comandos: encendido (después de enviar '1'), apagado (después de '0'), capturas del Serial Monitor con los '[BLE] Comando: x' (mínimo 2-3 fotos / capturas).\nCada foto debe tener pie de imagen ('Figura 1: Circuito armado en protoboard', 'Figura 2: LED respondiendo al comando 1 desde BLE Controller', etc.).\n\n7️⃣ CONCLUSIONES (½ página)\nResponder en párrafo (no en lista):\n• ¿Qué fue lo más difícil de la práctica?\n• ¿Qué entendiste del programa después de desglosarlo con IA?\n• ¿En qué situación de la vida real usarías lo que aprendiste?\n• ¿Qué te falta entender (sé honesto)?\n\n8️⃣ BIBLIOGRAFÍA / REFERENCIAS\nMencionar las fuentes:\n• La IA que usaste (ChatGPT/Claude/Gemini/Copilot — versión y fecha de consulta).\n• Tutorial o video que viste (si aplica) — URL completa.\n• Documentación oficial: arduino.cc, randomnerdtutorials.com, etc.\n• Formato libre — lo importante es que estén las fuentes.\n\n📤 FORMATO Y ENTREGA\n• Word (.docx) o PDF.\n• Mínimo 4 páginas, máximo 10.\n• Letra Arial o Calibri, tamaño 11 o 12.\n• Interlineado 1.15 o 1.5.\n• Subir a Classroom en la sección 'Reporte Programa 04 BLE'.\n• Fecha límite: HOY al finalizar la clase del martes.",
          notebook: "Hoy NO se escribe en libreta nueva — la libreta es la FUENTE PRINCIPAL de las fotografías de la sección 'Marco Teórico' del reporte. Antes de fotografiarla:\n\n1. Verifica que las 4 secciones del análisis con IA están legibles y completas: #include, UUIDs, MyCallbacks, procesarComando.\n2. Verifica que las preguntas 8, 9 y 10 (sin IA) están contestadas con tus palabras.\n3. Si una página está borrosa o desordenada, REESCRÍBELA limpia ANTES de fotografiarla.\n4. Buena iluminación para las fotos — natural si es posible, sin sombras de tu mano.\n5. Fotos rectas (no torcidas) — el celular tiene cuadrícula, úsala.",
          practice: "🕐 ESTRUCTURA DE LA HORA (60 min)\n\n1️⃣ PASO 1 (5 min) — Recopilar evidencias\n  • Tener a la mano:\n    - Tu libreta de MTHS con el análisis de W12.\n    - Tu celular con las fotos del circuito y del LED funcionando (si ya las tienes — si no, las tomarás hoy).\n    - Tu PC o tablet para escribir el reporte.\n  • Si NO tienes fotos del circuito armado, llama al docente — vamos a re-armar y fotografiar.\n\n2️⃣ PASO 2 (10 min) — Tomar las fotos faltantes\n  • LIBRETA: fotografiar las páginas del desglose con IA (mínimo 2 páginas — las 4 secciones + las preguntas 8-10).\n  • CIRCUITO: si lo tienes armado, fotografiar ahora mismo. Si lo desarmaste, vuelve a armarlo (LED GPIO 2 + R 220Ω, botón GPIO 4 + GND) y fotografía.\n  • FUNCIONAMIENTO: con el ESP32 conectado, abrir Serial Monitor, enviar '1' por BLE Controller y fotografiar: (a) LED encendido en la protoboard, (b) pantalla del celular con BLE Controller mostrando el comando enviado, (c) Serial Monitor con '[BLE] Comando: 1' y '✓ LED encendido'.\n\n3️⃣ PASO 3 (5 min) — Crear el documento\n  • Abrir Word / Google Docs / LibreOffice.\n  • Configurar: letra Arial 11, interlineado 1.15, márgenes normales.\n  • Crear la portada (sección 1) primero.\n  • Guardar el archivo: 'Reporte_BLE_NombreApellido.docx'.\n\n4️⃣ PASO 4 (30 min) — Escribir las secciones\n  Recomendación de orden:\n  • Portada (5 min).\n  • Materiales + Bibliografía (5 min — son listas, lo más rápido).\n  • Introducción (5 min — ½ página sobre qué es BLE).\n  • Procedimiento (8 min — narra en pasado lo que hiciste).\n  • Marco teórico — insertar fotos de libreta y describirlas (5 min).\n  • Evidencias fotográficas — insertar fotos del circuito + funcionamiento (4 min).\n  • Conclusiones (5 min — respuesta personal, sin clichés).\n\n5️⃣ PASO 5 (10 min) — Revisión + entrega\n  • Leer todo el reporte de principio a fin.\n  • Verificar que las fotos tengan pie de imagen ('Figura X: descripción').\n  • Verificar que ninguna foto esté borrosa.\n  • Convertir a PDF si lo prefieres (Archivo → Exportar como PDF).\n  • Subir a Classroom.\n\n💡 TIP DE EFICIENCIA: si tienes computadora rápida, escribir en Word es más fluido que en Google Docs. Si trabajas en celular, Google Docs funciona mejor.\n\n💡 TIP DE FOTOS: para insertar foto de la libreta, en Word: Insertar → Imagen → Este dispositivo → seleccionar archivo. Redimensionar a media página máximo.",
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
    padding-bottom: 6px; margin: 18px 0 12px;
  }
  .sec-title:first-child { margin-top: 0; }

  /* Sections grid */
  .sections { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .sec-card {
    background: #161b22; border: 1px solid #30363d; border-radius: 10px;
    padding: 12px; position: relative;
  }
  .sec-card .num {
    position: absolute; top: -10px; left: 12px;
    background: #1f6feb; color: white; font-size: 11px; font-weight: 700;
    width: 24px; height: 24px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
  }
  .sec-card h4 { font-size: 12px; color: #e6edf3; margin: 6px 0 6px 28px; }
  .sec-card p { font-size: 10px; color: #8b949e; line-height: 1.5; margin-left: 28px; }

  /* Photos categories */
  .photos { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  .photo-card {
    background: #161b22; border: 1px solid #30363d; border-radius: 10px;
    padding: 14px; text-align: center;
  }
  .photo-icon { font-size: 30px; display: block; margin-bottom: 8px; }
  .photo-card h4 { font-size: 11px; color: #58a6ff; margin-bottom: 4px; }
  .photo-card.libreta h4 { color: #d29922; }
  .photo-card.circuito h4 { color: #3fb950; }
  .photo-card.funcion h4 { color: #ff7b72; }
  .photo-card p { font-size: 10px; color: #c9d1d9; line-height: 1.5; }
  .photo-card .count {
    display: inline-block;
    background: #21262d; padding: 2px 8px; border-radius: 10px;
    font-size: 9px; color: #79c0ff; margin-top: 6px;
  }

  /* Checklist */
  .check-card {
    background: #1f1700; border: 1px solid #d29922; border-radius: 10px;
    padding: 12px;
  }
  .check-card h4 { font-size: 11px; color: #f0c040; margin-bottom: 10px; }
  .check-row {
    display: flex; gap: 8px; align-items: center;
    font-size: 11px; color: #c9d1d9; padding: 4px 0;
  }
  .box-icon {
    width: 16px; height: 16px; border: 2px solid #d29922; border-radius: 3px;
    flex-shrink: 0;
  }
</style>
</head>
<body>

<p class="sec-title">📐 Estructura del reporte (8 secciones)</p>
<div class="sections">
  <div class="sec-card"><span class="num">1</span><h4>Portada</h4><p>Nombre, grupo, materia, fecha, docente</p></div>
  <div class="sec-card"><span class="num">2</span><h4>Introducción</h4><p>¿Qué es BLE? 2 ejemplos reales</p></div>
  <div class="sec-card"><span class="num">3</span><h4>Marco teórico</h4><p>Fotos del análisis de tu libreta</p></div>
  <div class="sec-card"><span class="num">4</span><h4>Materiales</h4><p>Lista de componentes y software</p></div>
  <div class="sec-card"><span class="num">5</span><h4>Procedimiento</h4><p>8+ pasos narrados en pasado</p></div>
  <div class="sec-card"><span class="num">6</span><h4>Evidencias</h4><p>Fotos: libreta, conexión, funcionamiento</p></div>
  <div class="sec-card"><span class="num">7</span><h4>Conclusiones</h4><p>4 preguntas en párrafo personal</p></div>
  <div class="sec-card"><span class="num">8</span><h4>Bibliografía</h4><p>IA usada + tutoriales consultados</p></div>
</div>

<p class="sec-title">📸 Las 3 categorías obligatorias de fotos</p>
<div class="photos">
  <div class="photo-card libreta">
    <span class="photo-icon">📔</span>
    <h4>LIBRETA</h4>
    <p>Páginas del análisis con IA: 4 secciones del código + preguntas 8-10</p>
    <span class="count">mínimo 2 fotos</span>
  </div>
  <div class="photo-card circuito">
    <span class="photo-icon">🔌</span>
    <h4>CIRCUITO</h4>
    <p>Protoboard con ESP32 + LED + R 220Ω + botón armados</p>
    <span class="count">mínimo 1 foto</span>
  </div>
  <div class="photo-card funcion">
    <span class="photo-icon">⚡</span>
    <h4>FUNCIONAMIENTO</h4>
    <p>LED encendido por BLE + BLE Controller + Serial Monitor</p>
    <span class="count">mínimo 2-3 fotos</span>
  </div>
</div>

<p class="sec-title">✅ Checklist antes de entregar</p>
<div class="check-card">
  <h4>Verificar antes de subir a Classroom:</h4>
  <div class="check-row"><div class="box-icon"></div><span>Portada con tu nombre completo, grupo y fecha</span></div>
  <div class="check-row"><div class="box-icon"></div><span>Mínimo 5 fotografías en total (libreta + circuito + funcionamiento)</span></div>
  <div class="check-row"><div class="box-icon"></div><span>Cada foto tiene pie de imagen ('Figura X: ...')</span></div>
  <div class="check-row"><div class="box-icon"></div><span>Procedimiento narrado en pasado (NO copiado del manual)</span></div>
  <div class="check-row"><div class="box-icon"></div><span>Conclusión personal (NO genérica tipo 'fue muy bueno')</span></div>
  <div class="check-row"><div class="box-icon"></div><span>Bibliografía menciona la IA usada</span></div>
  <div class="check-row"><div class="box-icon"></div><span>Archivo guardado como 'Reporte_BLE_NombreApellido.pdf' o .docx</span></div>
  <div class="check-row"><div class="box-icon"></div><span>Subido a Classroom ANTES de finalizar la clase</span></div>
</div>

</body>
</html>
`,
          product: "Reporte de práctica BLE en formato Word o PDF (mínimo 4 páginas), con las 8 secciones obligatorias y mínimo 5 fotografías categorizadas (libreta + conexión + funcionamiento). Subido a Classroom antes de finalizar la hora.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta hora es BIPRODUCTIVA — calificación pendiente del jueves W12 + práctica de comunicación técnica. Estrategias:\n\n(1) RECORDATORIO INICIAL: anunciar al iniciar la hora 'NO se va a tocar código hoy en la primera hora — la meta es ENTREGAR el reporte de la práctica del jueves'. Esto evita que algunos quieran adelantar a la hora 2 ignorando el reporte.\n\n(2) ARMAR CIRCUITOS PARA QUIENES NO TIENEN FOTOS: probablemente la mitad del grupo no fotografió el circuito en su momento. Tener listas 2-3 estaciones con todo armado (ESP32 + LED + botón) para que pasen, fotografíen y envíen comandos desde su celular para fotografiar el funcionamiento. Esto se puede hacer en paralelo mientras escriben.\n\n(3) FORMATO DEL REPORTE: cada alumno construye su propio Word con las 8 secciones. Si alguien no sabe por dónde empezar, orientarlo mostrando la estructura en el proyector — sin dar un archivo preconstruido.\n\n(4) VIGILAR EL COPY-PASTE: el procedimiento NO debe ser el manual copiado — debe estar narrado en primera persona pasado ('armé', 'conecté', 'envié'). Si detectas copia, regresarles el reporte con observación.\n\n(5) FOTOGRAFÍAS DE LIBRETA: muchos no van a tener la libreta porque no la trajeron. Recordarles a TODOS desde la clase anterior (avisar el lunes por Classroom) 'mañana traigan su libreta de MTHS'. Si aún así no la traen, pueden pedirla prestada a un compañero que sí la trajo y fotografiar las páginas equivalentes — pero anotar el nombre del compañero en la bibliografía.\n\n(6) CRITERIOS DE CALIFICACIÓN (sugerencia):\n• Portada + estructura completa (1.0).\n• Marco teórico con fotos de libreta legibles (2.5).\n• Procedimiento narrado, no copiado (2.0).\n• Evidencias completas (libreta + circuito + funcionamiento) (2.5).\n• Conclusión personal honesta (1.0).\n• Bibliografía con IA mencionada (0.5).\n• Formato y ortografía (0.5).\nTotal: 10."
        },
        {
          time: "Hora 2",
          title: "📝 Reporte de práctica BLE — completar y entregar (continuación)",
          theory: "La práctica de la semana pasada (Programa 04: ESP32 + BLE + Serial + Botón) funcionó — el LED respondió a comandos desde el celular vía BLE Controller. Pero NO entregaron el reporte de esa práctica. Hoy lo escribimos completo, con evidencias fotográficas de lo que vivieron.\n\n📋 ¿QUÉ ES UN REPORTE DE PRÁCTICA Y POR QUÉ IMPORTA?\nUn reporte de práctica NO es solo una lista de pasos — es un documento profesional que demuestra:\n• QUÉ hiciste (el procedimiento real, no el ideal del manual).\n• POR QUÉ funciona (entendimiento del programa, no copia de código).\n• CÓMO lo verificaste (evidencia visual del resultado).\n• QUÉ aprendiste (conclusión personal, no genérica).\n\nEn la industria de sistemas embebidos, los reportes son la principal manera en que los técnicos comunican lo que hicieron a sus líderes y a otros equipos. Saber escribirlos es tan importante como saber programar.\n\n📐 ESTRUCTURA OBLIGATORIA DEL REPORTE (8 SECCIONES)\n\n1️⃣ PORTADA\n• CONALEP Plantel Pachuca II.\n• Carrera: Informática (PT).\n• Módulo: Manejo de Tecnologías de Hardware y Software (MTHS).\n• Práctica: 'Control de LED por Bluetooth Low Energy con ESP32'.\n• Nombre completo, grupo, fecha.\n• Docente: Dr. Felipe López Salazar.\n\n2️⃣ INTRODUCCIÓN (½ página)\n¿Qué es BLE y para qué se usa? Mencionar al menos 2 ejemplos reales (pulseras inteligentes, sensores médicos, audífonos, beacons en tiendas).\n\n3️⃣ MARCO TEÓRICO — DESGLOSE DEL PROGRAMA (1-2 páginas)\nAquí van las fotografías de tu LIBRETA con el análisis línea por línea que hiciste con IA en W12. Incluir:\n• Foto de la página donde desglosaste las 4 secciones (#include, UUIDs, MyCallbacks, procesarComando).\n• Foto de las respuestas a las preguntas 8, 9 y 10 escritas con tus propias palabras.\n• Breve descripción debajo de cada foto: '¿qué muestra esta página?' (1-2 líneas).\n\n4️⃣ MATERIALES UTILIZADOS\n• ESP32 DevKit.\n• Protoboard.\n• 1 LED + resistencia 220Ω.\n• 1 botón táctil (4 patas).\n• Cables jumper macho-macho (4 mínimo).\n• Cable USB de datos.\n• Computadora con Arduino IDE (o tablet con ArduinoDroid).\n• Celular con app BLE Controller.\n\n5️⃣ PROCEDIMIENTO\nNarrar EN PASADO lo que TÚ hiciste — no copiar el manual. Mínimo 8 pasos:\n1. Armé el circuito en la protoboard (LED en GPIO 2, botón en GPIO 4)...\n2. Conecté el ESP32 por USB y lo identifiqué en COM__...\n3. Pegué el código del Programa 04 en Arduino IDE...\n... etc, hasta enviar comandos desde BLE Controller.\n\n6️⃣ EVIDENCIAS FOTOGRÁFICAS (las 3 categorías obligatorias)\n📔 LIBRETA — fotos del desglose con IA (mínimo 2).\n🔌 CONEXIÓN — foto del circuito armado en la protoboard, donde se vea claramente el ESP32, el LED, la resistencia, el botón y los cables (mínimo 1).\n⚡ FUNCIONAMIENTO — foto o serie de fotos del LED respondiendo a los comandos: encendido (después de enviar '1'), apagado (después de '0'), capturas del Serial Monitor con los '[BLE] Comando: x' (mínimo 2-3 fotos / capturas).\nCada foto debe tener pie de imagen ('Figura 1: Circuito armado en protoboard', 'Figura 2: LED respondiendo al comando 1 desde BLE Controller', etc.).\n\n7️⃣ CONCLUSIONES (½ página)\nResponder en párrafo (no en lista):\n• ¿Qué fue lo más difícil de la práctica?\n• ¿Qué entendiste del programa después de desglosarlo con IA?\n• ¿En qué situación de la vida real usarías lo que aprendiste?\n• ¿Qué te falta entender (sé honesto)?\n\n8️⃣ BIBLIOGRAFÍA / REFERENCIAS\nMencionar las fuentes:\n• La IA que usaste (ChatGPT/Claude/Gemini/Copilot — versión y fecha de consulta).\n• Tutorial o video que viste (si aplica) — URL completa.\n• Documentación oficial: arduino.cc, randomnerdtutorials.com, etc.\n• Formato libre — lo importante es que estén las fuentes.\n\n📤 FORMATO Y ENTREGA\n• Word (.docx) o PDF.\n• Mínimo 4 páginas, máximo 10.\n• Letra Arial o Calibri, tamaño 11 o 12.\n• Interlineado 1.15 o 1.5.\n• Subir a Classroom en la sección 'Reporte Programa 04 BLE'.\n• Fecha límite: HOY al finalizar la clase del martes.",
          notebook: "Hoy NO se escribe en libreta nueva — la libreta es la FUENTE PRINCIPAL de las fotografías de la sección 'Marco Teórico' del reporte. Antes de fotografiarla:\n\n1. Verifica que las 4 secciones del análisis con IA están legibles y completas: #include, UUIDs, MyCallbacks, procesarComando.\n2. Verifica que las preguntas 8, 9 y 10 (sin IA) están contestadas con tus palabras.\n3. Si una página está borrosa o desordenada, REESCRÍBELA limpia ANTES de fotografiarla.\n4. Buena iluminación para las fotos — natural si es posible, sin sombras de tu mano.\n5. Fotos rectas (no torcidas) — el celular tiene cuadrícula, úsala.",
          practice: "🕐 ESTRUCTURA DE LA HORA (60 min)\n\n1️⃣ PASO 1 (5 min) — Recopilar evidencias\n  • Tener a la mano:\n    - Tu libreta de MTHS con el análisis de W12.\n    - Tu celular con las fotos del circuito y del LED funcionando (si ya las tienes — si no, las tomarás hoy).\n    - Tu PC o tablet para escribir el reporte.\n  • Si NO tienes fotos del circuito armado, llama al docente — vamos a re-armar y fotografiar.\n\n2️⃣ PASO 2 (10 min) — Tomar las fotos faltantes\n  • LIBRETA: fotografiar las páginas del desglose con IA (mínimo 2 páginas — las 4 secciones + las preguntas 8-10).\n  • CIRCUITO: si lo tienes armado, fotografiar ahora mismo. Si lo desarmaste, vuelve a armarlo (LED GPIO 2 + R 220Ω, botón GPIO 4 + GND) y fotografía.\n  • FUNCIONAMIENTO: con el ESP32 conectado, abrir Serial Monitor, enviar '1' por BLE Controller y fotografiar: (a) LED encendido en la protoboard, (b) pantalla del celular con BLE Controller mostrando el comando enviado, (c) Serial Monitor con '[BLE] Comando: 1' y '✓ LED encendido'.\n\n3️⃣ PASO 3 (5 min) — Crear el documento\n  • Abrir Word / Google Docs / LibreOffice.\n  • Configurar: letra Arial 11, interlineado 1.15, márgenes normales.\n  • Crear la portada (sección 1) primero.\n  • Guardar el archivo: 'Reporte_BLE_NombreApellido.docx'.\n\n4️⃣ PASO 4 (30 min) — Escribir las secciones\n  Recomendación de orden:\n  • Portada (5 min).\n  • Materiales + Bibliografía (5 min — son listas, lo más rápido).\n  • Introducción (5 min — ½ página sobre qué es BLE).\n  • Procedimiento (8 min — narra en pasado lo que hiciste).\n  • Marco teórico — insertar fotos de libreta y describirlas (5 min).\n  • Evidencias fotográficas — insertar fotos del circuito + funcionamiento (4 min).\n  • Conclusiones (5 min — respuesta personal, sin clichés).\n\n5️⃣ PASO 5 (10 min) — Revisión + entrega\n  • Leer todo el reporte de principio a fin.\n  • Verificar que las fotos tengan pie de imagen ('Figura X: descripción').\n  • Verificar que ninguna foto esté borrosa.\n  • Convertir a PDF si lo prefieres (Archivo → Exportar como PDF).\n  • Subir a Classroom.\n\n💡 TIP DE EFICIENCIA: si tienes computadora rápida, escribir en Word es más fluido que en Google Docs. Si trabajas en celular, Google Docs funciona mejor.\n\n💡 TIP DE FOTOS: para insertar foto de la libreta, en Word: Insertar → Imagen → Este dispositivo → seleccionar archivo. Redimensionar a media página máximo.",
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
    padding-bottom: 6px; margin: 18px 0 12px;
  }
  .sec-title:first-child { margin-top: 0; }

  /* Sections grid */
  .sections { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .sec-card {
    background: #161b22; border: 1px solid #30363d; border-radius: 10px;
    padding: 12px; position: relative;
  }
  .sec-card .num {
    position: absolute; top: -10px; left: 12px;
    background: #1f6feb; color: white; font-size: 11px; font-weight: 700;
    width: 24px; height: 24px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
  }
  .sec-card h4 { font-size: 12px; color: #e6edf3; margin: 6px 0 6px 28px; }
  .sec-card p { font-size: 10px; color: #8b949e; line-height: 1.5; margin-left: 28px; }

  /* Photos categories */
  .photos { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  .photo-card {
    background: #161b22; border: 1px solid #30363d; border-radius: 10px;
    padding: 14px; text-align: center;
  }
  .photo-icon { font-size: 30px; display: block; margin-bottom: 8px; }
  .photo-card h4 { font-size: 11px; color: #58a6ff; margin-bottom: 4px; }
  .photo-card.libreta h4 { color: #d29922; }
  .photo-card.circuito h4 { color: #3fb950; }
  .photo-card.funcion h4 { color: #ff7b72; }
  .photo-card p { font-size: 10px; color: #c9d1d9; line-height: 1.5; }
  .photo-card .count {
    display: inline-block;
    background: #21262d; padding: 2px 8px; border-radius: 10px;
    font-size: 9px; color: #79c0ff; margin-top: 6px;
  }

  /* Checklist */
  .check-card {
    background: #1f1700; border: 1px solid #d29922; border-radius: 10px;
    padding: 12px;
  }
  .check-card h4 { font-size: 11px; color: #f0c040; margin-bottom: 10px; }
  .check-row {
    display: flex; gap: 8px; align-items: center;
    font-size: 11px; color: #c9d1d9; padding: 4px 0;
  }
  .box-icon {
    width: 16px; height: 16px; border: 2px solid #d29922; border-radius: 3px;
    flex-shrink: 0;
  }
</style>
</head>
<body>

<p class="sec-title">📐 Estructura del reporte (8 secciones)</p>
<div class="sections">
  <div class="sec-card"><span class="num">1</span><h4>Portada</h4><p>Nombre, grupo, materia, fecha, docente</p></div>
  <div class="sec-card"><span class="num">2</span><h4>Introducción</h4><p>¿Qué es BLE? 2 ejemplos reales</p></div>
  <div class="sec-card"><span class="num">3</span><h4>Marco teórico</h4><p>Fotos del análisis de tu libreta</p></div>
  <div class="sec-card"><span class="num">4</span><h4>Materiales</h4><p>Lista de componentes y software</p></div>
  <div class="sec-card"><span class="num">5</span><h4>Procedimiento</h4><p>8+ pasos narrados en pasado</p></div>
  <div class="sec-card"><span class="num">6</span><h4>Evidencias</h4><p>Fotos: libreta, conexión, funcionamiento</p></div>
  <div class="sec-card"><span class="num">7</span><h4>Conclusiones</h4><p>4 preguntas en párrafo personal</p></div>
  <div class="sec-card"><span class="num">8</span><h4>Bibliografía</h4><p>IA usada + tutoriales consultados</p></div>
</div>

<p class="sec-title">📸 Las 3 categorías obligatorias de fotos</p>
<div class="photos">
  <div class="photo-card libreta">
    <span class="photo-icon">📔</span>
    <h4>LIBRETA</h4>
    <p>Páginas del análisis con IA: 4 secciones del código + preguntas 8-10</p>
    <span class="count">mínimo 2 fotos</span>
  </div>
  <div class="photo-card circuito">
    <span class="photo-icon">🔌</span>
    <h4>CIRCUITO</h4>
    <p>Protoboard con ESP32 + LED + R 220Ω + botón armados</p>
    <span class="count">mínimo 1 foto</span>
  </div>
  <div class="photo-card funcion">
    <span class="photo-icon">⚡</span>
    <h4>FUNCIONAMIENTO</h4>
    <p>LED encendido por BLE + BLE Controller + Serial Monitor</p>
    <span class="count">mínimo 2-3 fotos</span>
  </div>
</div>

<p class="sec-title">✅ Checklist antes de entregar</p>
<div class="check-card">
  <h4>Verificar antes de subir a Classroom:</h4>
  <div class="check-row"><div class="box-icon"></div><span>Portada con tu nombre completo, grupo y fecha</span></div>
  <div class="check-row"><div class="box-icon"></div><span>Mínimo 5 fotografías en total (libreta + circuito + funcionamiento)</span></div>
  <div class="check-row"><div class="box-icon"></div><span>Cada foto tiene pie de imagen ('Figura X: ...')</span></div>
  <div class="check-row"><div class="box-icon"></div><span>Procedimiento narrado en pasado (NO copiado del manual)</span></div>
  <div class="check-row"><div class="box-icon"></div><span>Conclusión personal (NO genérica tipo 'fue muy bueno')</span></div>
  <div class="check-row"><div class="box-icon"></div><span>Bibliografía menciona la IA usada</span></div>
  <div class="check-row"><div class="box-icon"></div><span>Archivo guardado como 'Reporte_BLE_NombreApellido.pdf' o .docx</span></div>
  <div class="check-row"><div class="box-icon"></div><span>Subido a Classroom ANTES de finalizar la clase</span></div>
</div>

</body>
</html>
`,
          product: "Reporte de práctica BLE en formato Word o PDF (mínimo 4 páginas), con las 8 secciones obligatorias y mínimo 5 fotografías categorizadas (libreta + conexión + funcionamiento). Subido a Classroom antes de finalizar la hora.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta hora es BIPRODUCTIVA — calificación pendiente del jueves W12 + práctica de comunicación técnica. Estrategias:\n\n(1) RECORDATORIO INICIAL: anunciar al iniciar la hora 'NO se va a tocar código hoy en la primera hora — la meta es ENTREGAR el reporte de la práctica del jueves'. Esto evita que algunos quieran adelantar a la hora 2 ignorando el reporte.\n\n(2) ARMAR CIRCUITOS PARA QUIENES NO TIENEN FOTOS: probablemente la mitad del grupo no fotografió el circuito en su momento. Tener listas 2-3 estaciones con todo armado (ESP32 + LED + botón) para que pasen, fotografíen y envíen comandos desde su celular para fotografiar el funcionamiento. Esto se puede hacer en paralelo mientras escriben.\n\n(3) FORMATO DEL REPORTE: cada alumno construye su propio Word con las 8 secciones. Si alguien no sabe por dónde empezar, orientarlo mostrando la estructura en el proyector — sin dar un archivo preconstruido.\n\n(4) VIGILAR EL COPY-PASTE: el procedimiento NO debe ser el manual copiado — debe estar narrado en primera persona pasado ('armé', 'conecté', 'envié'). Si detectas copia, regresarles el reporte con observación.\n\n(5) FOTOGRAFÍAS DE LIBRETA: muchos no van a tener la libreta porque no la trajeron. Recordarles a TODOS desde la clase anterior (avisar el lunes por Classroom) 'mañana traigan su libreta de MTHS'. Si aún así no la traen, pueden pedirla prestada a un compañero que sí la trajo y fotografiar las páginas equivalentes — pero anotar el nombre del compañero en la bibliografía.\n\n(6) CRITERIOS DE CALIFICACIÓN (sugerencia):\n• Portada + estructura completa (1.0).\n• Marco teórico con fotos de libreta legibles (2.5).\n• Procedimiento narrado, no copiado (2.0).\n• Evidencias completas (libreta + circuito + funcionamiento) (2.5).\n• Conclusión personal honesta (1.0).\n• Bibliografía con IA mencionada (0.5).\n• Formato y ortografía (0.5).\nTotal: 10."
        }
      ],
      cierre: "Las 2 horas del martes fueron para CERRAR formalmente lo que aprendieron del Programa 04 BLE. Sin código nuevo — solo articular en palabras y evidencias lo que hicieron en W12. Ese ejercicio de comunicación técnica los acompañará toda su carrera.",
      frase_docente: "Lo que escribes (el reporte) es lo que queda. Las prácticas que no se documentan, no se aprenden a profundidad."
    },
    {
      id: "wed",
      label: "Miércoles — 📅 Sin sesión (docente ausente)",
      purpose: "El docente no pudo asistir esta jornada. La sesión queda CANCELADA. Quienes no terminaron el reporte del martes pueden aprovechar este tiempo en casa para completar la entrega — el ESP32 con el Programa 04 sigue funcionando con sus circuitos armados.",
      hours: [
        {
          time: "📅 Sin sesión",
          title: "📅 Sin sesión — docente ausente",
          theory: "Hoy no hubo clase de MTHS porque el docente no pudo asistir. No es una pérdida — quien no terminó el reporte del martes tiene HOY como ventana para completarlo en casa y subirlo a Classroom antes del jueves.\n\n📌 RECORDATORIO\n• Reporte de práctica BLE → entregado ANTES de la sesión del jueves.\n• El jueves NO se evalúa quien no entregó el reporte — se descuenta puntaje conforme a los criterios anunciados (ver Hora 1 del martes).\n• El jueves Hora 1 es la actividad nueva: extender el Programa 04 con un segundo LED. Llegar con el circuito y el código del martes listo.",
          notebook: "Sin libreta hoy.",
          practice: "Para quien no entregó el reporte del martes: aprovechar hoy en casa para subirlo a Classroom. Para todos: llegar el jueves con el ESP32 + circuito armado del W12 (LED en GPIO 2, botón en GPIO 4), porque vamos a extenderlo en clase.",
          product: "Sin entregable hoy (excepto el reporte pendiente del martes, si aplica).",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Ausencia justificada del docente. Avisar al grupo por Classroom el día anterior o ese mismo día temprano para que no se presenten en vano. Si la ausencia se confirma con anticipación (>24h), considerar subir un video corto o un recurso a Classroom como 'compensación' para que el día no quede vacío."
        }
      ],
      cierre: "Un día sin sesión es un día de espacio — quien lo aprovecha para ponerse al corriente, gana.",
      frase_docente: "El tiempo no se gasta — se invierte."
    },
    {
      id: "thu",
      label: "Jueves — 🚀 Extender el Programa 04 con segundo LED (movido del martes)",
      purpose: "Hora 1: actividad principal — modificar el código del Programa 04 (BLE + Serial + Botón) para que controle DOS LEDs independientes con comandos nuevos ('2', '3', 'b'). Hora 2: pendiente de planeación según cómo fluya la modificación.",
      hours: [
        {
          time: "Hora 1",
          title: "🚀 Extender el Programa 04 — agregar un segundo LED controlado por BLE",
          theory: "Esta es la actividad que el jueves pasado quedamos como 'reto opcional' y no alcanzamos. Hoy es la actividad PRINCIPAL. Vamos a modificar el código del Programa 04 (BLE + Serial + Botón) para que controle UN SEGUNDO LED con comandos nuevos. El primer LED sigue funcionando con '1' y '0'; el nuevo LED responde a comandos '2' y '3'.\n\n🎯 ¿POR QUÉ ESTE EJERCICIO ES IMPORTANTE?\nHasta ahora SOLO han copiado y pegado código. Hoy MODIFICAN código. Esto es radicalmente distinto:\n• Copiar: no requiere entender.\n• Modificar: requiere identificar QUÉ partes hacen QUÉ, y aplicar el mismo patrón a algo nuevo.\n\nSi puedes modificar este programa correctamente, demostraste que ENTENDISTE el análisis con IA de la semana pasada. Si no puedes, significa que el análisis fue superficial y hay que reforzar.\n\n🔍 IDENTIFICAR QUÉ MODIFICAR (sin spoilers de la respuesta)\nEl Programa 04 original controla UN LED. Para controlar DOS, hay 4 lugares en el código donde necesitas hacer cambios — TODOS aplican el mismo patrón: 'donde dice LED1, agregar lo equivalente para LED2'.\n\n  Lugar 1 — DEFINICIÓN DEL PIN\n  Hay una línea cerca del inicio que dice algo como '#define LED_PIN 2'. Necesitas otra línea similar para el segundo LED en GPIO 5.\n\n  Lugar 2 — INICIALIZACIÓN EN setup()\n  Hay 1-2 líneas dentro de setup() que configuran el LED1 como salida. Duplícalas para el LED2.\n\n  Lugar 3 — LÓGICA EN procesarComando()\n  Hay un patrón if/else if que detecta los comandos '1', '0', 'p'. Agregar más bloques else if para '2' (encender LED2), '3' (apagar LED2), y opcionalmente 'b' (ambos encendidos).\n\n  Lugar 4 — BANNER INFORMATIVO\n  Al inicio del Serial Monitor aparece una lista de comandos. Actualízala para que incluya los nuevos.\n\n📋 LOS NUEVOS COMANDOS\n• '1' → encender LED1 (no cambia).\n• '0' → apagar LED1 (no cambia).\n• 'p' → parpadear LED1 (no cambia).\n• '2' → encender LED2 (NUEVO).\n• '3' → apagar LED2 (NUEVO).\n• 'b' → ambos LEDs encendidos (NUEVO, bonus).\n\n💡 ESTRATEGIA RECOMENDADA: trabaja por pasos pequeños y prueba cada uno antes de avanzar.\n1. Agrega el #define del LED2 — compila — sube.\n2. Agrega el pinMode + digitalWrite en setup — compila — sube — verifica que el LED2 NO esté encendido al inicio.\n3. Agrega el else if del '2' — compila — sube — prueba '2' por Serial. Si enciende → BIEN.\n4. Agrega el else if del '3' — prueba '3' por Serial.\n5. Actualiza el banner — sube — verifica que la lista nueva aparece.\n6. Bonus: agrega el 'b' — prueba.\n7. Probar TODOS los comandos desde BLE Controller.\n\nPaso a paso → tienes errores manejables. Todo de una vez → no sabes qué rompió.",
          notebook: "Título: Extender el Programa 04 con un segundo LED.\n1. Antes de modificar nada: ¿en qué línea exacta del código original está el #define del LED_PIN? (anota el número de línea).\n2. ¿En qué función se llama a pinMode(LED_PIN, OUTPUT)? (anota el nombre de la función).\n3. ¿En qué función aparece el patrón if (comando == '1') ...? (anota el nombre de la función).\n4. Después de modificar, anota las líneas exactas que AGREGASTE (las nuevas, no las que ya existían).\n5. Predicción ANTES de probar: si dejas el pinMode del LED2 fuera del setup, ¿qué crees que pasaría al enviar '2'? Justifica con teoría.\n6. Después de probar: ¿qué pasó realmente? ¿Coincidió con tu predicción?\n7. ¿Qué pasaría si pusieras dos else if (comando == '2') por error en el código? ¿Cuál se ejecuta?\n8. Reto adicional (responder solo si te sobra tiempo): ¿cómo modificarías el comando 'b' para que en vez de encender ambos LEDs, los haga PARPADEAR alternados 5 veces?",
          practice: "🕐 ESTRUCTURA DE LA HORA (60 min)\n\n1️⃣ PASO 1 (5 min) — Preparar materiales y circuito\n  • Tener el circuito de W12 armado (LED en GPIO 2, botón en GPIO 4).\n  • Agregar al circuito:\n    - 1 LED MÁS (preferentemente otro color para distinguir del LED1).\n    - 1 resistencia 220Ω adicional.\n    - 1 cable jumper macho-macho.\n  • Conexión del LED2:\n    - Pata LARGA (+) → resistencia 220Ω → cable a GPIO 5 del ESP32.\n    - Pata CORTA (−) → fila '−' de la protoboard (la misma del LED1).\n  • NO conectar USB todavía — primero el código está listo.\n\n2️⃣ PASO 2 (5 min) — Abrir el código original\n  • Arduino IDE → abrir el Programa 04 que guardaste el jueves.\n  • Si lo perdiste, copiar el código de referencia de la sección codeRef.\n  • Verificar que compila sin errores (✓).\n\n3️⃣ PASO 3 (25 min) — Modificar el código en los 4 LUGARES\n  Ir paso a paso, compilando y probando entre cada cambio.\n\n  ✏️ Cambio 1 (Lugar 1) — Agregar #define LED2_PIN\n  Debajo de la línea '#define LED_PIN 2', agregar:\n  ```\n  #define LED2_PIN 5\n  ```\n  Verificar (✓). Si compila → sigue.\n\n  ✏️ Cambio 2 (Lugar 2) — Inicializar LED2 en setup()\n  Después de las líneas pinMode y digitalWrite del LED1, agregar:\n  ```\n  pinMode(LED2_PIN, OUTPUT);\n  digitalWrite(LED2_PIN, LOW);\n  ```\n  Verificar (✓). Si compila → sube al ESP32. El LED2 debe quedar APAGADO al iniciar.\n\n  ✏️ Cambio 3 (Lugar 3) — Agregar comandos '2' y '3' en procesarComando()\n  Al final del bloque if/else if (después del 'p' y antes del else final 'comando desconocido'), agregar:\n  ```\n  else if (comando == '2') {\n    digitalWrite(LED2_PIN, HIGH);\n    Serial.println(\"✓ LED2 encendido\");\n  }\n  else if (comando == '3') {\n    digitalWrite(LED2_PIN, LOW);\n    Serial.println(\"✓ LED2 apagado\");\n  }\n  ```\n  Verificar → subir → probar '2' y '3' por Serial. El LED2 debe encender/apagar.\n\n  ✏️ Cambio 4 (Lugar 4) — Actualizar el banner del setup\n  Buscar las líneas Serial.println con la lista de comandos. Agregar:\n  ```\n  Serial.println(\"  '2' = Encender LED2\");\n  Serial.println(\"  '3' = Apagar LED2\");\n  ```\n  Subir → reiniciar el ESP32 (botón EN) → verificar que el banner nuevo aparece.\n\n  🎁 BONUS — comando 'b' (ambos encendidos)\n  Agregar otro else if:\n  ```\n  else if (comando == 'b') {\n    digitalWrite(LED_PIN, HIGH);\n    digitalWrite(LED2_PIN, HIGH);\n    Serial.println(\"✓ Ambos LEDs encendidos\");\n  }\n  ```\n\n4️⃣ PASO 4 (15 min) — Probar TODO desde BLE Controller\n  • Abrir BLE Controller en el celular.\n  • Reconectar al ESP32-Felipe (puede pedir reconectar).\n  • Escribir y enviar cada comando uno por uno:\n    - '1' → LED1 enciende.\n    - '0' → LED1 apaga.\n    - 'p' → LED1 parpadea 3 veces.\n    - '2' → LED2 enciende.\n    - '3' → LED2 apaga.\n    - 'b' (si hiciste el bonus) → ambos LEDs encienden.\n  • Verificar que el Serial Monitor muestra '[BLE] Comando: x' para cada comando.\n\n5️⃣ PASO 5 (10 min) — Demostración al docente + Classroom\n  • Demostrar al docente los 5 (o 6 con bonus) comandos funcionando.\n  • Subir a Classroom:\n    - Foto del circuito con los DOS LEDs visibles (uno encendido, otro apagado).\n    - Captura del Serial Monitor con los nuevos comandos '[BLE] Comando: 2' y '[BLE] Comando: 3' procesados.\n    - El código completo modificado (.ino) — Archivo → Guardar como 'Programa_04_DosLEDs.ino' y subirlo.\n\n📸 EVIDENCIA OBLIGATORIA\n• Foto del circuito mostrando DOS LEDs (uno encendido, uno apagado).\n• Captura del Serial Monitor con todos los comandos nuevos funcionando.\n• Archivo .ino del código modificado.",
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
    padding-bottom: 6px; margin: 18px 0 12px;
  }
  .sec-title:first-child { margin-top: 0; }

  /* Pin connections */
  .pins { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .pin-card {
    background: #161b22; border: 1px solid #30363d; border-radius: 10px;
    padding: 12px;
  }
  .pin-card.led1 h4 { color: #58a6ff; }
  .pin-card.led2 h4 { color: #d29922; }
  .pin-card h4 { font-size: 11px; margin-bottom: 8px; }
  .pin-row {
    display: flex; align-items: center; gap: 8px;
    font-size: 10px; color: #c9d1d9; margin-bottom: 6px;
  }
  .pin-row:last-child { margin-bottom: 0; }
  .dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
  .pin-badge {
    background: #1a3a1a; color: #3fb950; border-radius: 4px;
    padding: 1px 5px; font-size: 9px; font-weight: 700;
  }
  .pin-badge.led2 { background: #1f1700; color: #f0c040; }
  .pin-gnd { background: #1a1a2a; color: #8b949e; border-radius: 4px; padding: 1px 5px; font-size: 9px; }

  /* The 4 lugares */
  .lugares { display: flex; flex-direction: column; gap: 8px; }
  .lugar {
    display: flex; gap: 12px; align-items: stretch;
    background: #161b22; border: 1px solid #30363d; border-radius: 8px;
    overflow: hidden;
  }
  .lugar-num {
    background: #1f6feb; color: white;
    padding: 12px; font-size: 11px; font-weight: 700;
    display: flex; align-items: center; min-width: 90px; justify-content: center;
    flex-direction: column;
  }
  .lugar-num small { font-size: 9px; opacity: .8; margin-top: 2px; }
  .lugar-content {
    flex: 1; padding: 10px 12px; font-size: 11px; color: #c9d1d9; line-height: 1.5;
  }
  .lugar-content b { color: #e6edf3; }
  .lugar-content code { color: #79c0ff; font-family: 'Consolas', monospace; font-size: 10px; background: #0d1117; padding: 1px 5px; border-radius: 3px; }

  /* Commands grid */
  .cmds { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .cmd {
    background: #161b22; border: 1px solid #30363d; border-radius: 8px;
    padding: 10px 6px; text-align: center;
  }
  .cmd.old { opacity: .6; }
  .cmd.new { border-color: #d29922; }
  .cmd-key {
    background: #0d1117; border: 1px solid #58a6ff; color: #79c0ff;
    font-family: 'Consolas', monospace; font-size: 16px; font-weight: 700;
    width: 30px; height: 30px; border-radius: 5px;
    display: inline-flex; align-items: center; justify-content: center;
    margin-bottom: 4px;
  }
  .cmd.new .cmd-key { border-color: #d29922; color: #f0c040; }
  .cmd-act { font-size: 9px; color: #c9d1d9; font-weight: 700; display: block; }
  .cmd-tag { font-size: 8px; color: #8b949e; }
</style>
</head>
<body>

<p class="sec-title">🔌 Circuito final — DOS LEDs</p>
<div class="pins">
  <div class="pin-card led1">
    <h4>💡 LED1 (azul/rojo) — sin cambios</h4>
    <div class="pin-row">
      <span class="dot" style="background:#58a6ff"></span>
      <span>Pata larga (+) → R 220Ω → <span class="pin-badge">GPIO 2</span></span>
    </div>
    <div class="pin-row">
      <span class="dot" style="background:#8b949e"></span>
      <span>Pata corta (−) → <span class="pin-gnd">GND</span></span>
    </div>
  </div>
  <div class="pin-card led2">
    <h4>💡 LED2 (otro color) — NUEVO</h4>
    <div class="pin-row">
      <span class="dot" style="background:#d29922"></span>
      <span>Pata larga (+) → R 220Ω → <span class="pin-badge led2">GPIO 5</span></span>
    </div>
    <div class="pin-row">
      <span class="dot" style="background:#8b949e"></span>
      <span>Pata corta (−) → <span class="pin-gnd">GND</span></span>
    </div>
  </div>
</div>

<p class="sec-title">📍 Los 4 lugares a modificar en el código</p>
<div class="lugares">
  <div class="lugar">
    <div class="lugar-num">1<small>DEFINIR</small></div>
    <div class="lugar-content"><b>Cerca del inicio</b> — agregar <code>#define LED2_PIN 5</code> debajo del <code>#define LED_PIN 2</code>.</div>
  </div>
  <div class="lugar">
    <div class="lugar-num">2<small>INICIALIZAR</small></div>
    <div class="lugar-content"><b>Dentro de setup()</b> — duplicar las líneas <code>pinMode</code> y <code>digitalWrite</code> del LED1 para el LED2.</div>
  </div>
  <div class="lugar">
    <div class="lugar-num">3<small>LÓGICA</small></div>
    <div class="lugar-content"><b>Dentro de procesarComando()</b> — agregar bloques <code>else if (comando == '2')</code> y <code>else if (comando == '3')</code>.</div>
  </div>
  <div class="lugar">
    <div class="lugar-num">4<small>BANNER</small></div>
    <div class="lugar-content"><b>En el setup(), después del banner</b> — agregar <code>Serial.println()</code> con los nuevos comandos.</div>
  </div>
</div>

<p class="sec-title">🎯 Comandos finales (después de modificar)</p>
<div class="cmds">
  <div class="cmd old"><div class="cmd-key">1</div><span class="cmd-act">LED1 ON</span><span class="cmd-tag">existente</span></div>
  <div class="cmd old"><div class="cmd-key">0</div><span class="cmd-act">LED1 OFF</span><span class="cmd-tag">existente</span></div>
  <div class="cmd old"><div class="cmd-key">p</div><span class="cmd-act">LED1 parpadea</span><span class="cmd-tag">existente</span></div>
  <div class="cmd new"><div class="cmd-key">2</div><span class="cmd-act">LED2 ON</span><span class="cmd-tag">NUEVO</span></div>
  <div class="cmd new"><div class="cmd-key">3</div><span class="cmd-act">LED2 OFF</span><span class="cmd-tag">NUEVO</span></div>
  <div class="cmd new"><div class="cmd-key">b</div><span class="cmd-act">AMBOS ON</span><span class="cmd-tag">bonus</span></div>
</div>

</body>
</html>
`,
          code: "// PROGRAMA 04 EXTENDIDO — dos LEDs controlados por BLE + Serial + Botón\n// LED1 (GPIO 2): '1' enciende, '0' apaga, 'p' parpadea\n// LED2 (GPIO 5): '2' enciende, '3' apaga\n// 'b' (bonus): ambos LEDs encendidos\n//\n// 💡 ESTA ES LA REFERENCIA — TÚ DEBES MODIFICAR EL CÓDIGO ORIGINAL DEL PROGRAMA 04.\n// Solo consultar este código si te atoraste más de 15 min.\n\n#include <BLEDevice.h>\n#include <BLEUtils.h>\n#include <BLEServer.h>\n\n#define LED_PIN 2\n#define LED2_PIN 5           // ← NUEVO\n#define BUTTON_PIN 4\n\n#define SERVICE_UUID        \"4fafc201-1fb5-459e-8fcc-c5c9c331914b\"\n#define CHARACTERISTIC_UUID \"beb5483e-36e1-4688-b7f5-ea07361b26a8\"\n\nBLECharacteristic *pCharacteristic;\nint ledState = LOW;\nint lastButtonState = HIGH;\n\nvoid procesarComando(char comando, String origen);\n\nclass MyCallbacks : public BLECharacteristicCallbacks {\n  void onWrite(BLECharacteristic *pCharacteristic) {\n    String value = pCharacteristic->getValue();\n    if (value.length() > 0) {\n      char comando = value[0];\n      procesarComando(comando, \"BLE\");\n    }\n  }\n};\n\nvoid procesarComando(char comando, String origen) {\n  Serial.print(\"[\");\n  Serial.print(origen);\n  Serial.print(\"] Comando: \");\n  Serial.println(comando);\n\n  if (comando == '1') {\n    digitalWrite(LED_PIN, HIGH);\n    ledState = HIGH;\n    Serial.println(\"✓ LED1 encendido\");\n  }\n  else if (comando == '0') {\n    digitalWrite(LED_PIN, LOW);\n    ledState = LOW;\n    Serial.println(\"✓ LED1 apagado\");\n  }\n  else if (comando == 'p') {\n    Serial.println(\"✓ Parpadeando LED1...\");\n    for (int i = 0; i < 3; i++) {\n      digitalWrite(LED_PIN, HIGH);\n      delay(300);\n      digitalWrite(LED_PIN, LOW);\n      delay(300);\n    }\n    ledState = LOW;\n    Serial.println(\"  ...listo\");\n  }\n  else if (comando == '2') {                          // ← NUEVO\n    digitalWrite(LED2_PIN, HIGH);\n    Serial.println(\"✓ LED2 encendido\");\n  }\n  else if (comando == '3') {                          // ← NUEVO\n    digitalWrite(LED2_PIN, LOW);\n    Serial.println(\"✓ LED2 apagado\");\n  }\n  else if (comando == 'b') {                          // ← NUEVO bonus\n    digitalWrite(LED_PIN, HIGH);\n    digitalWrite(LED2_PIN, HIGH);\n    ledState = HIGH;\n    Serial.println(\"✓ Ambos LEDs encendidos\");\n  }\n  else if (comando != '\\n' && comando != '\\r' && comando != ' ') {\n    Serial.print(\"✗ Comando desconocido: '\");\n    Serial.print(comando);\n    Serial.println(\"'\");\n  }\n}\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);\n  pinMode(LED2_PIN, OUTPUT);                          // ← NUEVO\n  pinMode(BUTTON_PIN, INPUT_PULLUP);\n  digitalWrite(LED_PIN, LOW);\n  digitalWrite(LED2_PIN, LOW);                        // ← NUEVO\n\n  Serial.begin(115200);\n\n  BLEDevice::init(\"ESP32-Felipe\");\n  BLEServer *pServer = BLEDevice::createServer();\n  BLEService *pService = pServer->createService(SERVICE_UUID);\n\n  pCharacteristic = pService->createCharacteristic(\n    CHARACTERISTIC_UUID,\n    BLECharacteristic::PROPERTY_WRITE\n  );\n\n  pCharacteristic->setCallbacks(new MyCallbacks());\n  pService->start();\n\n  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();\n  pAdvertising->start();\n\n  Serial.println(\"=================================\");\n  Serial.println(\" ESP32 BLE + Serial + Botón + 2 LEDs\");\n  Serial.println(\" Nombre: ESP32-Felipe\");\n  Serial.println(\"=================================\");\n  Serial.println(\" Comandos:\");\n  Serial.println(\"  '1' = Encender LED1\");\n  Serial.println(\"  '0' = Apagar LED1\");\n  Serial.println(\"  'p' = Parpadear LED1 3 veces\");\n  Serial.println(\"  '2' = Encender LED2\");        // ← NUEVO\n  Serial.println(\"  '3' = Apagar LED2\");          // ← NUEVO\n  Serial.println(\"  'b' = Ambos LEDs encendidos\"); // ← NUEVO bonus\n  Serial.println(\" Funciona por: Serial, BLE, Botón\");\n  Serial.println(\"=================================\");\n}\n\nvoid loop() {\n  int currentButtonState = digitalRead(BUTTON_PIN);\n  if (currentButtonState != lastButtonState && currentButtonState == LOW) {\n    delay(20);\n    ledState = (ledState == LOW) ? HIGH : LOW;\n    digitalWrite(LED_PIN, ledState);\n    Serial.print(\"✓ Botón presionado - LED1 \");\n    Serial.println(ledState == HIGH ? \"encendido\" : \"apagado\");\n  }\n  lastButtonState = currentButtonState;\n\n  if (Serial.available()) {\n    char comando = Serial.read();\n    procesarComando(comando, \"SERIAL\");\n  }\n\n  delay(10);\n}",
          codeRef: "// PROGRAMA 04 EXTENDIDO — código de referencia completo\n// (Mismo contenido que el campo 'code' arriba)\n\n#include <BLEDevice.h>\n#include <BLEUtils.h>\n#include <BLEServer.h>\n\n#define LED_PIN 2\n#define LED2_PIN 5\n#define BUTTON_PIN 4\n\n#define SERVICE_UUID        \"4fafc201-1fb5-459e-8fcc-c5c9c331914b\"\n#define CHARACTERISTIC_UUID \"beb5483e-36e1-4688-b7f5-ea07361b26a8\"\n\nBLECharacteristic *pCharacteristic;\nint ledState = LOW;\nint lastButtonState = HIGH;\n\nvoid procesarComando(char comando, String origen);\n\nclass MyCallbacks : public BLECharacteristicCallbacks {\n  void onWrite(BLECharacteristic *pCharacteristic) {\n    String value = pCharacteristic->getValue();\n    if (value.length() > 0) {\n      char comando = value[0];\n      procesarComando(comando, \"BLE\");\n    }\n  }\n};\n\nvoid procesarComando(char comando, String origen) {\n  Serial.print(\"[\");\n  Serial.print(origen);\n  Serial.print(\"] Comando: \");\n  Serial.println(comando);\n\n  if (comando == '1') {\n    digitalWrite(LED_PIN, HIGH);\n    ledState = HIGH;\n    Serial.println(\"✓ LED1 encendido\");\n  }\n  else if (comando == '0') {\n    digitalWrite(LED_PIN, LOW);\n    ledState = LOW;\n    Serial.println(\"✓ LED1 apagado\");\n  }\n  else if (comando == 'p') {\n    Serial.println(\"✓ Parpadeando LED1...\");\n    for (int i = 0; i < 3; i++) {\n      digitalWrite(LED_PIN, HIGH);\n      delay(300);\n      digitalWrite(LED_PIN, LOW);\n      delay(300);\n    }\n    ledState = LOW;\n    Serial.println(\"  ...listo\");\n  }\n  else if (comando == '2') {\n    digitalWrite(LED2_PIN, HIGH);\n    Serial.println(\"✓ LED2 encendido\");\n  }\n  else if (comando == '3') {\n    digitalWrite(LED2_PIN, LOW);\n    Serial.println(\"✓ LED2 apagado\");\n  }\n  else if (comando == 'b') {\n    digitalWrite(LED_PIN, HIGH);\n    digitalWrite(LED2_PIN, HIGH);\n    ledState = HIGH;\n    Serial.println(\"✓ Ambos LEDs encendidos\");\n  }\n  else if (comando != '\\n' && comando != '\\r' && comando != ' ') {\n    Serial.print(\"✗ Comando desconocido: '\");\n    Serial.print(comando);\n    Serial.println(\"'\");\n  }\n}\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);\n  pinMode(LED2_PIN, OUTPUT);\n  pinMode(BUTTON_PIN, INPUT_PULLUP);\n  digitalWrite(LED_PIN, LOW);\n  digitalWrite(LED2_PIN, LOW);\n\n  Serial.begin(115200);\n\n  BLEDevice::init(\"ESP32-Felipe\");\n  BLEServer *pServer = BLEDevice::createServer();\n  BLEService *pService = pServer->createService(SERVICE_UUID);\n\n  pCharacteristic = pService->createCharacteristic(\n    CHARACTERISTIC_UUID,\n    BLECharacteristic::PROPERTY_WRITE\n  );\n\n  pCharacteristic->setCallbacks(new MyCallbacks());\n  pService->start();\n\n  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();\n  pAdvertising->start();\n\n  Serial.println(\"=================================\");\n  Serial.println(\" ESP32 BLE + Serial + Botón + 2 LEDs\");\n  Serial.println(\" Nombre: ESP32-Felipe\");\n  Serial.println(\"=================================\");\n  Serial.println(\" Comandos:\");\n  Serial.println(\"  '1' = Encender LED1\");\n  Serial.println(\"  '0' = Apagar LED1\");\n  Serial.println(\"  'p' = Parpadear LED1 3 veces\");\n  Serial.println(\"  '2' = Encender LED2\");\n  Serial.println(\"  '3' = Apagar LED2\");\n  Serial.println(\"  'b' = Ambos LEDs encendidos\");\n  Serial.println(\" Funciona por: Serial, BLE, Botón\");\n  Serial.println(\"=================================\");\n}\n\nvoid loop() {\n  int currentButtonState = digitalRead(BUTTON_PIN);\n  if (currentButtonState != lastButtonState && currentButtonState == LOW) {\n    delay(20);\n    ledState = (ledState == LOW) ? HIGH : LOW;\n    digitalWrite(LED_PIN, ledState);\n    Serial.print(\"✓ Botón presionado - LED1 \");\n    Serial.println(ledState == HIGH ? \"encendido\" : \"apagado\");\n  }\n  lastButtonState = currentButtonState;\n\n  if (Serial.available()) {\n    char comando = Serial.read();\n    procesarComando(comando, \"SERIAL\");\n  }\n\n  delay(10);\n}",
          product: "Código del Programa 04 modificado controlando DOS LEDs independientes vía BLE + Serial + Botón. Comandos funcionando desde BLE Controller: '1','0','p' (LED1), '2','3' (LED2), opcional 'b' (ambos). Entregables en Classroom: foto del circuito con los 2 LEDs visibles, captura del Serial Monitor con los nuevos comandos, y el archivo .ino modificado.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Este es el ejercicio MÁS valioso del semestre porque OBLIGA a aplicar comprensión, no copiar. Quien lo logre demostró que entendió el análisis con IA de W12. Estrategias:\n\n(1) NO DAR LA RESPUESTA: el código de referencia (campo 'code' y 'codeRef') está ahí para consulta DESPUÉS de intentar. NO mostrarlo al inicio. El reto pedagógico es que ELLOS identifiquen los 4 lugares.\n\n(2) GUIAR CON PREGUNTAS, NO CON RESPUESTAS: cuando un alumno se atora, preguntar — '¿dónde se inicializa el LED1 actual?' Si responde 'en setup() con pinMode' → 'entonces ¿qué hace falta para LED2?'. Esto los lleva a la respuesta sin dársela.\n\n(3) ORDEN INCREMENTAL: insistir en el flujo paso a paso (1 → 2 → 3 → 4, probando entre cada cambio). Hacer los 4 cambios de un golpe = errores difíciles de rastrear. Hacer uno a la vez = errores triviales.\n\n(4) ERRORES TÍPICOS A VIGILAR:\n• Olvidar pinMode(LED2_PIN, OUTPUT) en setup → el LED no responde al digitalWrite. Buena oportunidad para discutir 'por qué hay que decirle al GPIO si es entrada o salida'.\n• Confundir comilla simple '2' con comilla doble \"2\" → no compila. Recordarles: caracteres con ', strings con \".\n• Poner el else if en MyCallbacks en lugar de procesarComando → no afecta porque MyCallbacks llama a procesarComando, pero genera confusión. Si lo hacen así, explicarles el flujo: MyCallbacks recibe → procesarComando decide.\n• Olvidar el ; al final de las líneas — error obvio pero pasa.\n\n(5) MATERIALES EXTRA: tener listos 6-8 LEDs adicionales y 8-10 resistencias 220Ω. Inevitablemente alguien quemará un LED o perderá una resistencia.\n\n(6) PARA LOS MUY RÁPIDOS: si alguien termina con 'b' en menos de 30 min, retarlos con la pregunta 8 de la libreta (variante 'b' alternada con millis). Esto requiere combinar conceptos: state machine + timing no bloqueante. Quien lo logre demostró nivel intermedio sólido.\n\n(7) CALIFICACIÓN SUGERIDA (productos visibles):\n• Foto del circuito con 2 LEDs (correctamente armado): 2.0.\n• Captura del Serial Monitor con '2' y '3' funcionando: 2.0.\n• Archivo .ino con las modificaciones limpias y comentadas: 2.0.\n• Bonus 'b' funcionando: +1.0 (extra crédito, sobre 10).\n• Demostración en vivo al docente: 4.0.\nTotal base: 10. Con bonus: 11."
        },
        {
          time: "Hora 2",
          title: "📅 Pendiente de planeación",
          theory: "Esta hora se confirma según el avance de la Hora 1. Opciones probables:\n• OPCIÓN A — Continuación del LED2: para quienes no alcanzaron a hacer las 4 modificaciones del Programa 04, esta hora les permite terminarlo.\n• OPCIÓN B — Bonus 'b' (ambos LEDs) o variante alternada con millis() para los más rápidos.\n• OPCIÓN C — Tercer LED en GPIO 18: agregar un LED MÁS y comandos '4' y '5'.\n• OPCIÓN D — Cierre de W13 con una breve introducción al proyecto final de RA 3.2 (W14).\nEl docente decide al iniciar la hora según cómo terminó la Hora 1.",
          notebook: "Pendiente.",
          practice: "Pendiente — depende de la opción elegida al inicio de la hora.",
          product: "Pendiente.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Decisión rápida al iniciar la hora basada en: (a) ¿cuántos terminaron la modificación de los 2 LEDs en la Hora 1?, (b) ¿qué retroalimentación dieron los alumnos? Si >70% terminó → OPCIÓN B o C. Si <70% terminó → OPCIÓN A (continuación). Si toda la clase fue muy rápida → OPCIÓN D (anticipar W14)."
        }
      ],
      cierre: "El jueves cierra W13 y abre la pista hacia W14 — última semana de RA 3.2. El paso de 1 LED a 2 LEDs es la primera modificación real que hacen al código, y eso vale más que cualquier examen.",
      frase_docente: "Cuando puedes modificar código existente, dejas de ser usuario y empiezas a ser autor."
    }
  ]
};
