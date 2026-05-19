export const W12 = {
  materia: "dewe",
  weekId: "W12",
  days: [
    {
      id: "mon",
      label: "Lunes — 🟨 JavaScript (continuación): variables, tipos y primer script real",
      purpose: "Retomar JavaScript donde lo dejamos en la W11. Hoy formalizamos las variables, los 5 tipos básicos y los template literals (H1), y luego construimos el primer archivo .js conectado al HTML con un programa de bienvenida (H2).",
      hours: [
        {
          time: "Hora 1",
          title: "📦 Variables y tipos — guardar información en memoria",
          theory: "Una variable es una caja con nombre que guarda un dato. Se declara con la palabra reservada let o const, se le pone un nombre y se le asigna un valor con el signo igual.\n\n🔐 LET vs CONST\n• let edad = 17;       — el valor PUEDE cambiar después.\n• const PI = 3.1416;   — el valor NO puede cambiar (constante).\n\nRegla práctica: usa const por defecto. Si más adelante necesitas cambiar el valor, lo cambias a let.\n\n🧬 LOS 5 TIPOS BÁSICOS DE DATO\n• string  — texto entre comillas: \"Hola\", 'mundo'\n• number  — números (enteros o decimales): 17, 3.14, -8\n• boolean — verdadero o falso: true, false\n• null    — vacío intencional (yo digo que está vacío)\n• undefined — sin asignar (no le he puesto valor)\n\n🪄 TEMPLATE LITERALS — LA FORMA MODERNA DE ARMAR TEXTOS\nEn lugar de concatenar con +, los template literals usan acentos graves (`) y permiten meter variables con ${}.\n\n  Forma vieja:    \"Hola \" + nombre + \", tienes \" + edad + \" años\"\n  Forma moderna:  `Hola ${nombre}, tienes ${edad} años`\n\nMás limpio, más legible, menos errores de comillas. Es el estándar desde 2015.\n\n🔍 typeof — DESCUBRIR EL TIPO DE UN DATO\ntypeof 17         devuelve \"number\"\ntypeof \"hola\"     devuelve \"string\"\ntypeof true       devuelve \"boolean\"",
          notebook: "1. ¿Cuál es la diferencia entre let y const?\n2. Lista los 5 tipos básicos de dato y da un ejemplo de cada uno.\n3. ¿Qué carácter se usa para los template literals? ¿Dónde está en tu teclado?\n4. Reescribe esta línea con template literal: \"Tu edad es \" + edad + \" años\".\n5. ¿Qué devuelve typeof \"42\"? ¿Y typeof 42? ¿Por qué son distintos?",
          practice: "Sigue en la consola del navegador. Escribe paso a paso:\n\n```js\n// 1. Declarar variables con datos personales\nconst nombre = \"Felipe\";\nlet edad = 17;\nconst esEstudiante = true;\n\n// 2. Mostrarlas en consola\nconsole.log(nombre);\nconsole.log(edad);\nconsole.log(esEstudiante);\n\n// 3. Cambiar el valor de let (sí se puede)\nedad = 18;\nconsole.log(edad);\n\n// 4. Intentar cambiar const (¡da error!)\n// nombre = \"Luis\";   ← descomenta y observa el TypeError\n\n// 5. Concatenación a la antigua\nconsole.log(\"Hola \" + nombre + \", tienes \" + edad + \" años\");\n\n// 6. Template literal — la forma moderna\nconsole.log(`Hola ${nombre}, tienes ${edad} años`);\n\n// 7. Descubrir el tipo de cada variable\nconsole.log(typeof nombre);\nconsole.log(typeof edad);\nconsole.log(typeof esEstudiante);\n\n// 8. Trampa típica: prompt SIEMPRE devuelve string\nconst respuesta = prompt(\"¿Cuántos años tienes?\");\nconsole.log(respuesta);\nconsole.log(typeof respuesta);   // \"string\", aunque escribas un número\n\n// 9. Convertir string a number\nconst edadReal = Number(respuesta);\nconsole.log(edadReal + 5);       // ahora sí suma como número\n```",
          diagram: `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0d1117; font-family: 'Segoe UI', sans-serif; color: #e6edf3; padding: 24px; }
  h2 { font-size: 15px; color: #f7df1e; margin-bottom: 18px; letter-spacing: 0.3px; }
  .layout { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  @media (max-width: 720px) { .layout { grid-template-columns: 1fr; } }
  .panel { background: #161b22; border: 1px solid #30363d; border-radius: 10px; padding: 16px; }
  .panel h3 { font-size: 11px; color: #58a6ff; margin-bottom: 14px; text-transform: uppercase; letter-spacing: 0.6px; }
  .full { grid-column: 1 / -1; }
  .vs { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .box { background: #0d1117; border: 2px solid #30363d; border-radius: 8px; padding: 14px 12px; text-align: center; position: relative; }
  .box.let  { border-color: #58a6ff; }
  .box.const { border-color: #f7df1e; }
  .box-label { position: absolute; top: -10px; left: 12px; background: #161b22; padding: 0 8px; font-family: 'Consolas', monospace; font-size: 11px; font-weight: 700; }
  .box.let .box-label   { color: #58a6ff; }
  .box.const .box-label { color: #f7df1e; }
  .box-icon { font-size: 28px; margin-bottom: 6px; }
  .box-name { font-family: 'Consolas', monospace; font-size: 13px; color: #e6edf3; margin: 4px 0; }
  .box-value { font-family: 'Consolas', monospace; font-size: 14px; color: #79c0ff; padding: 4px 0; }
  .box-arrow { font-size: 14px; color: #3fb950; margin: 2px 0; }
  .box-lock  { font-size: 14px; color: #f7df1e; margin: 2px 0; }
  .box-desc { font-size: 10px; color: #8b949e; margin-top: 4px; line-height: 1.5; }
  .types { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; }
  @media (max-width: 720px) { .types { grid-template-columns: repeat(2, 1fr); } }
  .type-card { background: #0d1117; border: 1px solid #30363d; border-radius: 8px; padding: 10px 8px; text-align: center; border-top: 3px solid; }
  .type-card.str  { border-top-color: #f7df1e; }
  .type-card.num  { border-top-color: #79c0ff; }
  .type-card.bool { border-top-color: #d2a8ff; }
  .type-card.nul  { border-top-color: #6e7681; }
  .type-card.und  { border-top-color: #ff7b72; }
  .type-name { font-family: 'Consolas', monospace; font-size: 12px; font-weight: 700; margin-bottom: 6px; }
  .type-card.str  .type-name { color: #f7df1e; }
  .type-card.num  .type-name { color: #79c0ff; }
  .type-card.bool .type-name { color: #d2a8ff; }
  .type-card.nul  .type-name { color: #6e7681; }
  .type-card.und  .type-name { color: #ff7b72; }
  .type-icon { font-size: 22px; margin: 4px 0; min-height: 28px; display: flex; align-items: center; justify-content: center; }
  .num-badge { display: inline-flex; align-items: center; justify-content: center; padding: 3px 9px; background: rgba(121,192,255,0.15); border: 1px solid rgba(121,192,255,0.4); border-radius: 5px; font-family: 'Consolas','Monaco',monospace; font-weight: 800; font-size: 13px; color: #79c0ff; letter-spacing: 0.02em; }
  .type-ex { font-family: 'Consolas', monospace; font-size: 10px; color: #c9d1d9; margin-top: 4px; line-height: 1.5; word-break: break-word; }
  .codebox { font-family: 'Consolas', 'Monaco', monospace; font-size: 12px; background: #0d1117; border: 1px solid #21262d; border-radius: 6px; padding: 12px; color: #e6edf3; line-height: 1.8; }
  .c-key  { color: #ff7b72; font-weight: 600; }
  .c-var  { color: #79c0ff; }
  .c-str  { color: #a5d6ff; }
  .c-num  { color: #f7df1e; }
  .c-com  { color: #6e7681; font-style: italic; }
  .c-tick { color: #f7df1e; font-weight: 700; }
  .c-interp { background: #2a2510; color: #f7df1e; padding: 1px 4px; border-radius: 3px; font-weight: 700; }
  .flow { display: flex; align-items: center; justify-content: center; gap: 10px; margin: 16px 0 8px; flex-wrap: wrap; }
  .flow-box { padding: 8px 12px; border-radius: 6px; background: #21262d; border: 1px solid #30363d; font-family: 'Consolas', monospace; font-size: 11px; font-weight: 600; }
  .flow-box.input  { color: #f7df1e; border-color: #f7df1e; background: #2a2510; }
  .flow-box.convert { color: #d2a8ff; border-color: #d2a8ff; background: #1a0f1f; }
  .flow-box.output { color: #79c0ff; border-color: #79c0ff; background: #102030; }
  .flow-arrow { color: #f7df1e; font-weight: 800; font-size: 18px; }
  .note { background: #1a1f29; border-left: 3px solid #f7df1e; padding: 10px 12px; font-size: 11px; color: #8b949e; margin-top: 14px; border-radius: 0 4px 4px 0; line-height: 1.6; }
  .note strong { color: #e6edf3; }
  .note code { color: #79c0ff; font-family: 'Consolas', monospace; }
</style>
</head>
<body>
<h2>📦 Variables y tipos — guardar información en memoria</h2>
<div class="layout">

  <div class="panel">
    <h3>🔐 let vs const — ¿la caja se puede cambiar?</h3>
    <div class="vs">
      <div class="box let">
        <span class="box-label">let</span>
        <div class="box-icon">📦</div>
        <div class="box-name">edad</div>
        <div class="box-value">17</div>
        <div class="box-arrow">↻ puede cambiar</div>
        <div class="box-value">18</div>
        <div class="box-desc">Caja con tapa removible — el valor se puede reasignar.</div>
      </div>
      <div class="box const">
        <span class="box-label">const</span>
        <div class="box-icon">🔒</div>
        <div class="box-name">PI</div>
        <div class="box-value">3.1416</div>
        <div class="box-lock">🔒 sellada</div>
        <div class="box-value" style="text-decoration:line-through;color:#6e7681;">3.14</div>
        <div class="box-desc">Caja sellada — intentar cambiar el valor lanza TypeError.</div>
      </div>
    </div>
    <div class="note">
      <strong>Regla práctica:</strong> usa <code>const</code> por defecto. Si más adelante necesitas reasignar el valor, lo cambias a <code>let</code>. Casi nunca verás <code>var</code> en código moderno.
    </div>
  </div>

  <div class="panel">
    <h3>🧬 Los 5 tipos básicos de JavaScript</h3>
    <div class="types">
      <div class="type-card str">
        <div class="type-name">string</div>
        <div class="type-icon">📝</div>
        <div class="type-ex">"Hola"<br>'mundo'</div>
      </div>
      <div class="type-card num">
        <div class="type-name">number</div>
        <div class="type-icon"><span class="num-badge">123</span></div>
        <div class="type-ex">17<br>3.14<br>-8</div>
      </div>
      <div class="type-card bool">
        <div class="type-name">boolean</div>
        <div class="type-icon">⚖️</div>
        <div class="type-ex">true<br>false</div>
      </div>
      <div class="type-card nul">
        <div class="type-name">null</div>
        <div class="type-icon">∅</div>
        <div class="type-ex">vacío<br>intencional</div>
      </div>
      <div class="type-card und">
        <div class="type-name">undefined</div>
        <div class="type-icon">❓</div>
        <div class="type-ex">sin asignar<br>aún</div>
      </div>
    </div>
    <div class="note">
      <code>typeof "Hola"</code> → <strong>"string"</strong> · <code>typeof 17</code> → <strong>"number"</strong> · <code>typeof true</code> → <strong>"boolean"</strong>
    </div>
  </div>

  <div class="panel full">
    <h3>🪄 Template literals — interpolación de variables</h3>
    <div class="vs">
      <div>
        <div style="font-size:10px;color:#8b949e;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.5px;">❌ Forma vieja (con +)</div>
        <div class="codebox">
<span class="c-com">// concatenar pedazos con +</span>
<span class="c-key">const</span> <span class="c-var">saludo</span> = <span class="c-str">"Hola "</span> + <span class="c-var">nombre</span> + <span class="c-str">", tienes "</span> + <span class="c-var">edad</span> + <span class="c-str">" años"</span>;
        </div>
      </div>
      <div>
        <div style="font-size:10px;color:#8b949e;margin-bottom:6px;text-transform:uppercase;letter-spacing:0.5px;">✅ Forma moderna (template literal)</div>
        <div class="codebox">
<span class="c-com">// usa acentos graves \` \` y \${variable}</span>
<span class="c-key">const</span> <span class="c-var">saludo</span> = <span class="c-tick">\`</span>Hola <span class="c-interp">\${nombre}</span>, tienes <span class="c-interp">\${edad}</span> años<span class="c-tick">\`</span>;
        </div>
      </div>
    </div>
    <div class="note">
      El carácter <strong>\`</strong> (acento grave / backtick) está en la tecla de la <strong>tilde ~</strong> a la izquierda del 1. <code>\${variable}</code> mete el valor de esa variable dentro del texto.
    </div>
  </div>

  <div class="panel full">
    <h3>⚠️ Trampa típica: prompt() siempre devuelve string</h3>
    <div class="flow">
      <span class="flow-box input">prompt("Edad?")</span>
      <span class="flow-arrow">→</span>
      <span class="flow-box input">"17" <span style="opacity:0.7;">(string)</span></span>
      <span class="flow-arrow">→</span>
      <span class="flow-box convert">Number("17")</span>
      <span class="flow-arrow">→</span>
      <span class="flow-box output">17 <span style="opacity:0.7;">(number)</span></span>
    </div>
    <div class="note">
      Aunque el usuario escriba <code>17</code> en el prompt, lo recibes como <strong>"17" (string)</strong>. Si haces <code>"17" + 5</code> obtienes <code>"175"</code> (concatena), no <code>22</code> (suma). Usa <code>Number(respuesta)</code> para convertir antes de hacer matemáticas.
    </div>
  </div>

</div>
</body>
</html>
`,
          product: "Las 5 respuestas en libreta + ejecución completa de los 9 pasos en consola. El alumno debe poder explicar por qué el paso 8 devuelve \"string\" aunque escriba un número.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: El paso 4 es el experimento clave para entender const — vale la pena dejar que TODOS lo prueben y vean el TypeError. El paso 8-9 introduce el problema de la conversión de tipos: prompt siempre devuelve string. Si el grupo viene rápido, mostrar también que prompt(\"...\") + 5 da \"175\" (concatenación) en lugar de 22 (suma) — es un error real que cometerán pronto."
        },
        {
          time: "Hora 2",
          title: "🌧️ Cancelado por lluvia",
          theory: "Esta hora se canceló porque se suspendieron las clases por lluvia el lunes. El contenido planeado para esta hora (Primer script real — vincular js/script.js al HTML) se reprogramó para el jueves de esta misma semana.\n\n📌 ¿QUÉ DEBES HACER?\nRevisa la pestaña del jueves — ahí está la sesión completa de Primer Script Real con if/else, prompt y alert. No hay actividad obligatoria para este día.",
          notebook: "Sin libreta — hora cancelada por suspensión de clases.",
          practice: "Sin práctica — hora cancelada por suspensión de clases.",
          product: "Sin entregable.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Lunes suspendido por lluvia. Contenido movido al jueves. Si algún alumno pregunta, indicar que el jueves se cubre lo de hoy."
        },
        {
          time: "Hora 3",
          title: "🌧️ Cancelado por lluvia",
          theory: "Esta hora también se canceló por suspensión de clases. La sesión continúa el jueves con el primer script .js conectado al HTML.\n\n📌 ¿QUÉ DEBES HACER?\nSi te queda tiempo en casa, repasa lo que vimos en la Hora 1 (Variables y Tipos) — el jueves construimos sobre eso.",
          notebook: "Sin libreta — hora cancelada por suspensión de clases.",
          practice: "Sin práctica — hora cancelada por suspensión de clases.",
          product: "Sin entregable.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Día suspendido. Contenido reagendado al jueves."
        }
      ],
      cierre: "Hoy solo alcanzamos a ver Variables y Tipos. Las dos horas restantes se cancelaron por suspensión de clases (lluvia) y se reagendaron al jueves.",
      frase_docente: "Lo que esta semana parece detalle (let vs const, comillas vs backticks) la próxima semana es la diferencia entre código que corre y código que se rompe."
    },
    {
      id: "thu",
      label: "Jueves — 🟨 JavaScript: Primer script real (reprogramado desde lunes)",
      purpose: "Sesión reprogramada desde el lunes (suspendido por lluvia). Hoy construimos el primer archivo .js conectado al HTML (H1) y lo extendemos con rangos por edad usando if/else if (H2).",
      hours: [
        {
          time: "Hora 1",
          title: "📄 Primer script real — JS fuera de la consola",
          theory: "La consola está bien para experimentar, pero el JS de verdad vive en archivos .js que el HTML carga. Hoy creamos el primer script propio del sitio.\n\n📁 ESTRUCTURA RECOMENDADA\nDentro de la carpeta del sitio Resident Evil:\n  index.html\n  css/style.css\n  js/script.js     ← lo creamos hoy\n\n🔗 CÓMO VINCULAR EL JS AL HTML\nDentro del <head> o justo antes del </body> del index.html se agrega:\n\n  <script src=\"js/script.js\" defer></script>\n\n• src apunta al archivo JS.\n• defer le dice al navegador: \"descarga el script mientras lees el HTML, pero ejecútalo después de que el HTML esté listo\". Es la opción más segura.\n\n💡 BUENA PRÁCTICA: COMENTARIOS\nLos comentarios en JS se escriben así:\n\n  // comentario de una sola línea\n  /* comentario\n     de varias líneas */\n\nLos comentarios no se ejecutan — sirven para explicarle al lector (incluido tu yo del futuro) qué hace el código.\n\n🎯 OBJETIVO DE LA HORA\nQue cada alumno tenga su primer archivo .js vinculado al HTML, ejecutándose al cargar el sitio, con un programa que interactúa con el usuario.",
          notebook: "1. ¿Por qué movemos el JS de la consola a un archivo .js?\n2. ¿Qué hace el atributo defer en la etiqueta <script>?\n3. ¿Dónde se debe colocar la etiqueta <script> dentro del HTML?\n4. ¿Cómo se escribe un comentario de una sola línea en JS?\n5. ¿Qué pasaría si quitamos el defer y el script intenta tocar un elemento que aún no se ha cargado?",
          practice: "Paso 1 — Crear la estructura.\nDentro de la carpeta del sitio Resident Evil, crear la subcarpeta js/ y dentro un archivo script.js.\n\nPaso 2 — Vincularlo al HTML.\nEn index.html, dentro del <head>, agregar al final de los estilos:\n\n```html\n<script src=\"js/script.js\" defer></script>\n```\n\nPaso 3 — Escribir el primer programa en js/script.js.\n\n```js\n// =====================================================\n// Mi primer script — Sitio Resident Evil\n// Autor: [Tu nombre]\n// Fecha: 11 de mayo\n// =====================================================\n\n// 1. Mensaje de carga (solo lo ves tú en la consola)\nconsole.log(\"✅ script.js cargado correctamente\");\n\n// 2. Pedir el nombre del visitante\nconst nombre = prompt(\"¿Cómo te llamas, sobreviviente?\");\n\n// 3. Pedir la edad y convertirla a número\nconst edadTexto = prompt(\"¿Cuántos años tienes?\");\nconst edad = Number(edadTexto);\n\n// 4. Decidir el rango según la edad\nlet rango;\nif (edad >= 18) {\n  rango = \"Agente\";\n} else {\n  rango = \"Cadete\";\n}\n\n// 5. Mensaje personalizado al usuario\nalert(`Bienvenido a Raccoon City, ${rango} ${nombre}.\\nTienes ${edad} años. La misión comienza ahora.`);\n\n// 6. Confirmación en consola\nconsole.log(`Visitante registrado: ${nombre}, ${edad} años, rango ${rango}`);\n```\n\nPaso 4 — Probar.\nGuardar todo, abrir index.html en el navegador y verificar:\n• La consola muestra el mensaje de carga.\n• Aparecen los dos prompts.\n• El alert muestra el mensaje con nombre y rango.\n• La consola muestra el resumen final.\n\nReto extra (para los rápidos): cambiar el if/else para que también haya un rango \"Recluta\" si la edad es menor de 15.",
          diagram: `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0d1117; font-family: 'Segoe UI', sans-serif; color: #e6edf3; padding: 24px; }
  h2 { font-size: 15px; color: #f7df1e; margin-bottom: 18px; letter-spacing: 0.3px; }
  .layout { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  @media (max-width: 720px) { .layout { grid-template-columns: 1fr; } }
  .panel { background: #161b22; border: 1px solid #30363d; border-radius: 10px; padding: 16px; }
  .panel h3 { font-size: 11px; color: #58a6ff; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.6px; }
  .tree { font-family: 'Consolas', 'Monaco', monospace; font-size: 13px; line-height: 1.9; color: #e6edf3; }
  .tree .folder { color: #58a6ff; font-weight: 600; }
  .tree .new    { color: #f7df1e; font-weight: 600; }
  .tree .ind    { color: #6e7681; }
  .tree .tag-new { background: #2d2710; color: #f7df1e; padding: 1px 6px; border-radius: 3px; font-size: 10px; margin-left: 6px; }
  .codebox { font-family: 'Consolas', 'Monaco', monospace; font-size: 12px; background: #0d1117; border: 1px solid #21262d; border-radius: 6px; padding: 10px 12px; color: #e6edf3; line-height: 1.7; overflow-x: auto; }
  .c-com  { color: #6e7681; }
  .c-tag  { color: #79c0ff; }
  .c-attr { color: #d2a8ff; }
  .c-val  { color: #a5d6ff; }
  .flow { display: flex; align-items: center; gap: 10px; margin-top: 14px; font-size: 11px; flex-wrap: wrap; }
  .flow-box { padding: 8px 12px; border-radius: 6px; background: #21262d; border: 1px solid #30363d; font-weight: 600; }
  .flow-box.html { color: #ff7b72; border-color: #ff7b72; background: #2a1818; }
  .flow-box.tag  { color: #79c0ff; border-color: #79c0ff; background: #102030; }
  .flow-box.js   { color: #f7df1e; border-color: #f7df1e; background: #2a2510; }
  .flow-arrow { color: #f7df1e; font-weight: 800; font-size: 16px; }
  .timeline { list-style: none; counter-reset: step; padding: 0; }
  .timeline li { counter-increment: step; padding: 10px 0 10px 36px; position: relative; font-size: 12.5px; color: #c9d1d9; border-bottom: 1px dashed #21262d; line-height: 1.6; }
  .timeline li:last-child { border-bottom: none; }
  .timeline li::before { content: counter(step); position: absolute; left: 0; top: 10px; width: 24px; height: 24px; background: #f7df1e; color: #0d1117; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800; }
  .timeline code { color: #79c0ff; font-family: 'Consolas', monospace; font-size: 12px; background: #0d1117; padding: 1px 5px; border-radius: 3px; }
  .timeline strong { color: #f7df1e; }
  .note { background: #1a1f29; border-left: 3px solid #f7df1e; padding: 10px 12px; font-size: 11px; color: #8b949e; margin-top: 14px; border-radius: 0 4px 4px 0; line-height: 1.6; }
  .note strong { color: #e6edf3; }
  .note code { color: #79c0ff; font-family: 'Consolas', monospace; }
  .full { grid-column: 1 / -1; }
</style>
</head>
<body>
<h2>🔗 Cómo conecta el HTML con tu archivo JavaScript</h2>
<div class="layout">

  <div class="panel">
    <h3>📁 Estructura de carpetas del sitio</h3>
    <div class="tree">
      <div><span class="folder">📂 sitio-resident-evil/</span></div>
      <div><span class="ind">├──</span> 📄 index.html</div>
      <div><span class="ind">├──</span> <span class="folder">📂 css/</span></div>
      <div><span class="ind">│   └──</span> 📄 style.css</div>
      <div><span class="ind">└──</span> <span class="folder new">📂 js/</span><span class="tag-new">NUEVO</span></div>
      <div><span class="ind">&nbsp;&nbsp;&nbsp;&nbsp;└──</span> <span class="new">📄 script.js</span><span class="tag-new">NUEVO</span></div>
    </div>
    <div class="note">
      <strong>Convención:</strong> el archivo JS vive en su propia carpeta <code>js/</code>, igual que el CSS vive en <code>css/</code>. Mantiene el proyecto ordenado y fácil de leer.
    </div>
  </div>

  <div class="panel">
    <h3>🏷️ La etiqueta que une todo</h3>
    <div class="codebox">
<span class="c-com">&lt;!-- dentro del &lt;head&gt; de index.html --&gt;</span>
<span class="c-tag">&lt;script</span> <span class="c-attr">src</span>=<span class="c-val">"js/script.js"</span> <span class="c-attr">defer</span><span class="c-tag">&gt;&lt;/script&gt;</span>
    </div>
    <div class="flow">
      <span class="flow-box html">📄 index.html</span>
      <span class="flow-arrow">→</span>
      <span class="flow-box tag">🏷️ &lt;script&gt;</span>
      <span class="flow-arrow">→</span>
      <span class="flow-box js">📄 script.js</span>
    </div>
    <div class="note">
      <strong>src</strong> apunta a la ruta del archivo JS (relativa al index.html).<br>
      <strong>defer</strong> = "descarga el script mientras lees el HTML, pero ejecútalo DESPUÉS de leer todo".
    </div>
  </div>

  <div class="panel full">
    <h3>⏱️ Qué hace el navegador al abrir tu página</h3>
    <ol class="timeline">
      <li>El navegador <strong>lee el index.html</strong> de arriba hacia abajo.</li>
      <li>Encuentra <code>&lt;script src="js/script.js" defer&gt;</code> y empieza a <strong>descargar el archivo JS en paralelo</strong> — sin pausar la lectura del HTML.</li>
      <li>Sigue leyendo y mostrando el HTML al usuario — <strong>la página aparece rápido</strong>.</li>
      <li>Cuando termina de leer todo el HTML, <strong>ejecuta el JavaScript</strong> que ya descargó.</li>
      <li>El JS empieza a correr: <code>console.log()</code>, <code>prompt()</code>, <code>alert()</code>... y la página cobra vida.</li>
    </ol>
    <div class="note">
      <strong>¿Por qué defer?</strong> Sin él, el navegador se detiene a ejecutar el JS antes de mostrar la página — el usuario ve pantalla en blanco más tiempo. Con <code>defer</code>, la página aparece rápido y el JS corre cuando todo está listo. <strong>Es la práctica recomendada moderna.</strong>
    </div>
  </div>

</div>
</body>
</html>
`,
          product: "Carpeta js/ creada con script.js dentro, vinculada al index.html con defer, ejecutándose al cargar la página, con un programa interactivo que pregunta nombre y edad, asigna un rango con if/else y muestra un mensaje personalizado.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta es LA hora más importante de la semana — los alumnos pasan de probar líneas sueltas a tener un archivo JS de verdad. Insistir en guardar antes de recargar. Errores frecuentes: olvidar las comillas, escribir Console.log con C mayúscula, mezclar comillas dobles y simples en un mismo string. El if/else es la primera vez que ven una estructura de control — anticiparles que la próxima semana lo formalizamos. Si alguien pregunta por la IA: \"Hoy escribimos el código a mano. La IA es útil cuando ya entiendes lo que escribe.\" Cierre del corte: este script demuestra que el alumno SÍ puede escribir JS sin depender de la IA."
        }
,
        {
          time: "Hora 2",
          title: "🔨 Práctica: extender el script.js con más rangos",
          theory: "Tienes tu primer script.js funcionando con dos rangos (Agente / Cadete). Esta hora vamos a extenderlo: agregar más rangos según la edad, validar entradas y mejorar los mensajes.\n\n🎯 OBJETIVOS DE LA HORA\n• Practicar if/else if/else con múltiples condiciones.\n• Validar que el usuario haya escrito algo (no haya pulsado Cancelar).\n• Mejorar el mensaje final con datos completos.\n• Empezar a pensar como programador: ¿qué pasa si el usuario hace algo inesperado?\n\n📐 NUEVOS RANGOS\n• Menor de 13       → 'Recluta'\n• Entre 13 y 17     → 'Cadete'\n• Entre 18 y 59     → 'Agente'\n• 60 o más          → 'Veterano'\n\n🛡️ VALIDACIÓN BÁSICA\nSi el usuario pulsa Cancelar en un prompt, devuelve null. Si solo pulsa OK sin escribir, devuelve cadena vacía \"\". Hay que detectar ambos casos con un if antes de seguir.",
          notebook: "1. ¿Qué devuelve prompt() si el usuario pulsa Cancelar?\n2. ¿Qué devuelve prompt() si pulsa OK sin escribir nada?\n3. ¿Cuántas condiciones tiene tu if/else if/else extendido?\n4. ¿Qué pasaría si el usuario escribe 'veinte' en lugar de '20'?",
          practice: "Modifica tu script.js del jueves H1 para incluir:\n\n```js\n// 1. Validación de entradas\nif (nombre === null || nombre.trim() === \"\") {\n  alert(\"Necesitas escribir un nombre para continuar.\");\n} else {\n  // continuar con el flujo normal\n}\n\n// 2. Rangos extendidos\nlet rango;\nif (edad < 13) {\n  rango = \"Recluta\";\n} else if (edad < 18) {\n  rango = \"Cadete\";\n} else if (edad < 60) {\n  rango = \"Agente\";\n} else {\n  rango = \"Veterano\";\n}\n\n// 3. Mensaje final mejorado con template literal multilínea\nconst mensaje = `\n🧟 Bienvenido a Raccoon City\n────────────────────────\nNombre:  ${nombre}\nEdad:    ${edad} años\nRango:   ${rango}\n────────────────────────\nLa misión comienza ahora.\n`;\n\nalert(mensaje);\nconsole.log(mensaje);\n```\n\nGuarda como 'Programa_RaccoonCity_v2'. Verifica los 4 rangos probando edades distintas.",
          product: "script.js actualizado con 4 rangos por edad, validación de entrada y mensaje final mejorado. Capturas o evidencia de los 4 rangos funcionando (probar con edades 10, 15, 30, 70).",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta es la primera vez que ven if/else if/else con múltiples ramas — buen momento para discutir orden de las condiciones (importa que vayan de menor a mayor para que la lógica caiga bien). La validación de prompt (null vs string vacío) es un patrón que verán mucho. Si alguien ya terminó: invitarlos a agregar un quinto rango secreto si el nombre coincide con un personaje (Leon, Claire, Jill — cualquier coincidencia es 'Personaje Principal')."
        }
      ],
      cierre: "Reagendamos el lunes en el jueves — la lluvia no detiene el aprendizaje, solo lo cambia de día.",
      frase_docente: "Adaptar el calendario también es parte del oficio docente — lo importante no es cuándo, sino que pase."
    },
    {
      id: "fri",
      label: "Viernes — 🚧 Por planear",
      purpose: "Sesión pendiente de planeación. Se confirmará después del jueves.",
      hours: [
        {
          time: "🚧 Por planear",
          title: "🚧 Sesión por planear",
          theory: "Esta sesión se planeará después del jueves. Probablemente cerraremos la semana con una práctica integradora corta o una mini-evaluación de lo visto.\n\n📌 PARA EL ALUMNO\nGuarda todo lo que hagas en tu carpeta del proyecto — el viernes podría ser día de revisión.",
          notebook: "Sin libreta — sesión por confirmar.",
          practice: "Sin práctica obligatoria — sesión por confirmar.",
          product: "Por definir.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Cerrar la semana 12 con una integración o repaso, según el ritmo del grupo."
        }
      ],
      cierre: "Sesión por definir.",
      frase_docente: "El cierre de semana es momento para mirar atrás antes de seguir."
    },
    {
      id: "dual",
      label: "Repositorio de Actividades Duales (Semana 12)",
      activities: [
        {
          title: "Lunes H1 — Variables y Tipos en JavaScript",
          instruction: "Cheat-sheet de referencia rápida para la primera hora del lunes. Tenla abierta mientras escribes en la consola: let vs const, los 5 tipos básicos, template literals y la trampa de prompt() devolviendo siempre string.",
          image: "dewe_w12_info01.png"
        },
        {
          title: "Jueves H1 — Conectar JS al HTML (reprogramado)",
          instruction: "Guía paso a paso para la sesión del jueves (originalmente lunes H2, movido por suspensión de clases por lluvia): estructura de carpetas js/script.js, etiqueta <script src defer>, timeline de carga del navegador y esqueleto del primer script con if/else.",
          image: "dewe_w12_info02.png"
        }
      ]
    }
  ]
};
