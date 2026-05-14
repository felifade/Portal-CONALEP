export const W11 = {
  materia: "dewe",
  weekId: "W11",
  days: [
    {
      id: "mon",
      label: "Lunes — 🟨 JavaScript desde cero: el lenguaje detrás de la magia",
      purpose: "Iniciar formalmente el aprendizaje de JavaScript. El viernes vieron lo que JS puede hacer (modo oscuro, galería, bienvenida) usando IA — hoy aprenden las primeras palabras del idioma para que esa magia deje de ser caja negra.",
      hours: [
        {
          time: "Hora 1",
          title: "👋 Hola JavaScript — la consola como laboratorio",
          theory: "🟨 ¿QUÉ ES JAVASCRIPT?\nJavaScript es el lenguaje que da vida a las páginas web. HTML pone los huesos, CSS pone la piel y la ropa, JavaScript pone los movimientos, las decisiones y la interacción. Sin JS una página solo se ve — con JS, responde.\n\n📜 UNA HISTORIA DE 10 DÍAS\nEn 1995 Netscape contrató a Brendan Eich y le dio diez días para crear un lenguaje que funcionara dentro del navegador. Lo llamaron primero Mocha, luego LiveScript, y finalmente JavaScript — un nombre de marketing porque Java estaba de moda (no son parientes, solo se parecen en el nombre).\n\nHoy JavaScript es el lenguaje más usado del mundo. Funciona en navegadores (Chrome, Firefox, Safari), en servidores (Node.js), en aplicaciones móviles (React Native), en escritorios (VS Code está hecho en JS) e incluso en hardware (Arduino con Espruino).\n\n🖥️ DÓNDE VIVE EL JS QUE NOSOTROS ESCRIBIMOS\nEn nuestro caso, JS vive dentro del navegador. Cada navegador tiene un motor que lo ejecuta — Chrome usa V8, Firefox usa SpiderMonkey, Safari usa JavaScriptCore. Los tres entienden el mismo idioma.\n\n🔬 LA CONSOLA — NUESTRO LABORATORIO\nF12 abre las DevTools. La pestaña Console es un laboratorio donde puedes escribir JS y ver el resultado al instante, sin necesidad de archivos. Es donde todo programador prueba ideas antes de escribirlas en serio.\n\n3 INSTRUCCIONES BÁSICAS PARA EMPEZAR:\n• console.log(\"texto\") — imprime un mensaje en la consola (solo lo ves tú, el desarrollador).\n• alert(\"texto\") — muestra una ventana emergente al usuario.\n• prompt(\"pregunta\") — pregunta algo al usuario y devuelve lo que escribió.",
          notebook: "1. ¿Quién creó JavaScript y en cuánto tiempo?\n2. ¿Por qué se llama JavaScript si no es pariente de Java?\n3. ¿Qué motor de JS usa Google Chrome?\n4. ¿Qué tecla abre las DevTools del navegador?\n5. ¿Qué diferencia hay entre console.log y alert?\n6. ¿Qué hace prompt y qué pasa con lo que el usuario escribe?",
          practice: "Abre Chrome → F12 → pestaña Console. Escribe cada línea, pulsa Enter después de cada una y observa lo que aparece:\n\n```js\n// 1. Imprime un saludo en la consola (solo tú lo ves)\nconsole.log(\"Hola, mundo\");\n\n// 2. Muestra una ventana emergente al usuario\nalert(\"¡Bienvenido al curso de JavaScript!\");\n\n// 3. Pregunta el nombre y guarda lo que escribe el usuario\nprompt(\"¿Cómo te llamas?\");\n\n// 4. Operaciones matemáticas — la consola es una calculadora\n2 + 3\n10 * 5\n100 / 4\n\n// 5. Texto entre comillas\n\"hola\" + \" \" + \"mundo\"\n\n// 6. Ver qué pasa sin comillas (¿qué error sale?)\nhola\n```\n\nReto rápido: en una sola línea de la consola, calcula cuántos minutos tiene un día de 24 horas.",
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
  .panel h3 { font-size: 11px; color: #58a6ff; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.6px; }
  .full { grid-column: 1 / -1; }
  .browser { background: #21262d; border-radius: 8px 8px 4px 4px; border: 1px solid #30363d; overflow: hidden; }
  .browser-bar { background: #161b22; padding: 6px 10px; display: flex; gap: 6px; align-items: center; border-bottom: 1px solid #30363d; }
  .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot.r { background: #f85149; } .dot.y { background: #d29922; } .dot.g { background: #3fb950; }
  .url { flex: 1; background: #0d1117; padding: 4px 10px; border-radius: 4px; font-size: 10px; color: #8b949e; font-family: monospace; }
  .devtools { background: #0d1117; min-height: 120px; padding: 10px 12px; font-family: 'Consolas', monospace; font-size: 11px; }
  .dt-tabs { display: flex; gap: 8px; border-bottom: 1px solid #21262d; padding-bottom: 4px; margin-bottom: 8px; }
  .dt-tab { font-size: 10px; color: #6e7681; padding: 2px 6px; }
  .dt-tab.active { color: #f7df1e; border-bottom: 2px solid #f7df1e; padding-bottom: 2px; }
  .dt-line { display: flex; gap: 8px; padding: 2px 0; align-items: baseline; }
  .dt-prompt { color: #58a6ff; }
  .dt-input  { color: #e6edf3; }
  .dt-out    { color: #8b949e; font-style: italic; padding-left: 14px; }
  .dt-err    { color: #f85149; padding-left: 14px; }
  .key-row { display: flex; justify-content: center; align-items: center; gap: 6px; margin: 16px 0 8px; }
  .key { display: inline-flex; align-items: center; justify-content: center; min-width: 36px; height: 32px; padding: 0 10px; background: #21262d; border: 1px solid #6e7681; border-bottom-width: 3px; border-radius: 5px; font-family: 'Consolas', monospace; font-size: 12px; color: #f7df1e; font-weight: 700; }
  .key-lbl { font-size: 11px; color: #8b949e; margin-top: 4px; text-align: center; }
  .instr { display: flex; flex-direction: column; gap: 12px; }
  .instr-row { background: #0d1117; border: 1px solid #21262d; border-radius: 6px; padding: 10px 12px; }
  .instr-row code { font-family: 'Consolas', monospace; font-size: 12px; color: #f7df1e; font-weight: 600; }
  .instr-row .desc { font-size: 11px; color: #8b949e; margin-top: 4px; line-height: 1.5; }
  .instr-row .visual { margin-top: 8px; padding: 6px 10px; border-radius: 4px; font-size: 11px; }
  .v-console { background: #0a0f1a; color: #c9d1d9; font-family: 'Consolas', monospace; border-left: 3px solid #58a6ff; }
  .v-alert   { background: #1f1a0a; color: #f7df1e; border-left: 3px solid #f7df1e; text-align: center; font-weight: 600; }
  .v-prompt  { background: #1a0f1f; color: #d2a8ff; border-left: 3px solid #d2a8ff; }
  table { width: 100%; border-collapse: collapse; font-size: 11.5px; margin-top: 8px; }
  th { background: #21262d; color: #58a6ff; padding: 7px 10px; text-align: left; font-size: 10px; font-weight: 700; letter-spacing: 0.4px; text-transform: uppercase; }
  td { padding: 8px 10px; border-bottom: 1px solid #21262d; color: #c9d1d9; }
  td strong { color: #f7df1e; font-family: 'Consolas', monospace; }
  td.who { font-style: italic; color: #8b949e; }
  .note { background: #1a1f29; border-left: 3px solid #f7df1e; padding: 10px 12px; font-size: 11px; color: #8b949e; margin-top: 14px; border-radius: 0 4px 4px 0; line-height: 1.6; }
  .note strong { color: #e6edf3; }
</style>
</head>
<body>
<h2>🔬 La consola del navegador — tu primer laboratorio JS</h2>
<div class="layout">

  <div class="panel">
    <h3>🖥️ Cómo abrir las DevTools</h3>
    <div class="browser">
      <div class="browser-bar">
        <div class="dot r"></div><div class="dot y"></div><div class="dot g"></div>
        <div class="url">🌐 https://mi-sitio.com</div>
      </div>
      <div class="devtools">
        <div class="dt-tabs">
          <span class="dt-tab">Elements</span>
          <span class="dt-tab active">Console</span>
          <span class="dt-tab">Network</span>
          <span class="dt-tab">Sources</span>
        </div>
        <div class="dt-line"><span class="dt-prompt">&gt;</span><span class="dt-input">console.log("Hola")</span></div>
        <div class="dt-out">Hola</div>
        <div class="dt-line"><span class="dt-prompt">&gt;</span><span class="dt-input">2 + 3</span></div>
        <div class="dt-out">5</div>
        <div class="dt-line"><span class="dt-prompt">&gt;</span><span class="dt-input">hola</span></div>
        <div class="dt-err">✗ ReferenceError: hola is not defined</div>
      </div>
    </div>
    <div class="key-row">
      <span class="key">F12</span>
      <span style="color:#8b949e;font-size:11px;">o</span>
      <span class="key">Ctrl</span><span style="color:#6e7681;">+</span><span class="key">Shift</span><span style="color:#6e7681;">+</span><span class="key">I</span>
    </div>
    <div class="key-lbl">Atajo para abrir las DevTools en cualquier navegador</div>
  </div>

  <div class="panel">
    <h3>⚡ Las 3 instrucciones básicas</h3>
    <div class="instr">
      <div class="instr-row">
        <code>console.log("Hola")</code>
        <div class="desc">📋 Imprime en la consola — solo lo ves tú, el desarrollador. Útil para depurar.</div>
        <div class="visual v-console">&gt; Hola</div>
      </div>
      <div class="instr-row">
        <code>alert("¡Bienvenido!")</code>
        <div class="desc">📢 Muestra una ventana emergente al usuario. Bloquea la página hasta que se cierra.</div>
        <div class="visual v-alert">⚠️ ¡Bienvenido!  [ OK ]</div>
      </div>
      <div class="instr-row">
        <code>prompt("¿Cómo te llamas?")</code>
        <div class="desc">❓ Pregunta al usuario y devuelve lo que escribió como texto (string).</div>
        <div class="visual v-prompt">❓ ¿Cómo te llamas?  [ ____________ ]  [ OK ] [ Cancel ]</div>
      </div>
    </div>
  </div>

  <div class="panel full">
    <h3>📊 Comparativa rápida</h3>
    <table>
      <tr><th>Instrucción</th><th>¿Quién lo ve?</th><th>¿Devuelve algo?</th><th>¿Bloquea la página?</th></tr>
      <tr><td><strong>console.log()</strong></td><td class="who">solo el desarrollador (en F12)</td><td>no</td><td>no</td></tr>
      <tr><td><strong>alert()</strong></td><td class="who">el usuario final</td><td>no</td><td>sí, hasta que pulse OK</td></tr>
      <tr><td><strong>prompt()</strong></td><td class="who">el usuario final</td><td>sí — un string con lo que escribió</td><td>sí, hasta que pulse OK o Cancel</td></tr>
    </table>
    <div class="note">
      <strong>Regla de oro:</strong> <code style="color:#79c0ff;">console.log()</code> para ti (depurar), <code style="color:#79c0ff;">alert()</code> y <code style="color:#79c0ff;">prompt()</code> para hablarle al usuario. Los profesionales casi nunca usan alert/prompt en producción — los reemplazan con modales bonitos — pero para aprender son perfectos.
    </div>
  </div>

</div>
</body>
</html>
`,
          product: "Notas en libreta con las 6 respuestas + capturas o anotaciones de lo que aparece en la consola al ejecutar cada línea. Mostrar el reto del día (1440 minutos) en la consola al docente.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta hora es 100% en la consola del navegador — nadie abre VS Code todavía. Importante: muchos alumnos NUNCA han abierto F12. Dedicar 5 minutos a que lo abran, lo cierren, lo muevan a la derecha. La línea sin comillas (paso 6) genera un ReferenceError — aprovecharla para enseñar que JS distingue palabras del lenguaje vs texto entre comillas. Si alguien pregunta por qué prompt devuelve un valor pero no lo imprime, decir que en la siguiente hora aprenderemos a guardarlo en una variable."
        },
        {
          time: "Hora 2",
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
  .type-icon { font-size: 22px; margin: 4px 0; }
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
        <div class="type-icon">🔢</div>
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
          time: "Hora 3",
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
      ],
      cierre: "Diez días le tomó a Brendan Eich crear el lenguaje. Tres horas a ustedes para escribir su primer script real. La diferencia entre ver y entender empieza aquí.",
      frase_docente: "La IA escribe código. El programador entiende lo que la IA escribió. Hoy empezamos a entender."
    },
    {
      id: "thu",
      label: "Jueves — 📅 Sin actividades programadas",
      purpose: "Día sin sesión. No hay actividades programadas en DEWE para esta jornada.",
      hours: [
        {
          time: "📅 Sin sesión",
          title: "📅 Sin actividades programadas",
          theory: "Hoy no hay sesión de DEWE. Las actividades del lunes (introducción a JavaScript) son la base sobre la que construiremos a partir de la semana 12.\n\n📌 RECORDATORIO\nSi el lunes no terminaste el script.js con el programa de bienvenida + rango, este es un buen día para terminarlo en casa. La próxima semana entramos a manipulación del DOM y necesitamos esa base sólida.\n\n📚 REPASO SUGERIDO (OPCIONAL)\n• Diferencia entre let y const.\n• Los 5 tipos básicos: string, number, boolean, null, undefined.\n• Sintaxis de template literal con backticks y ${}.\n• Convertir string a número con Number().",
          notebook: "Repaso voluntario:\n1. Anota un ejemplo propio de cada uno de los 5 tipos básicos.\n2. Reescribe en template literal: \"Hola \" + nombre + \", bienvenido a \" + ciudad + \".\"\n3. ¿Qué devuelve Number(\"42\") + 8? ¿Y \"42\" + 8?",
          practice: "Sin práctica obligatoria. Si quieres, abre tu script.js del lunes y experimenta agregándole más rangos o más preguntas.",
          product: "Sin entregable.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Día sin sesión. Si algún alumno se acerca a preguntar, reforzar que la próxima semana arrancamos con DOM y que tener firme lo del lunes es indispensable."
        }
      ],
      cierre: "Un día de pausa también es parte del aprendizaje — el cerebro consolida cuando descansa.",
      frase_docente: "El descanso no es ausencia de progreso; es la condición para que ocurra."
    },
    {
      id: "fri",
      label: "Viernes — 🎖️ 15 de Mayo: Día del Maestro",
      purpose: "No hay clases. Conmemoración del Día del Maestro en México — un día para reconocer a quienes dedican su vida a enseñar.",
      hours: [
        {
          time: "📅 Sin sesión",
          title: "🎖️ 15 de Mayo — Día del Maestro",
          theory: "El Día del Maestro se celebra en México cada 15 de mayo desde 1918, cuando el presidente Venustiano Carranza decretó esta fecha en honor a la profesión docente. ✏️\n\n📜 EL ORIGEN\nLa fecha fue elegida por dos diputados, Benito Ramírez García y Enrique Viesca Lobatón, en homenaje a San Juan Bautista de La Salle — el santo patrono de los maestros para la Iglesia Católica, canonizado en 1900 y declarado patrón de los educadores en 1950 por el Papa Pío XII.\n\n👩‍🏫 ¿POR QUÉ EXISTE ESTE DÍA?\nPorque enseñar no es solo transmitir información. Es despertar curiosidad, sostener la duda, acompañar el error, celebrar el avance. Un maestro deja huella mucho después de que termine la clase — a veces décadas después, cuando un ex-alumno recuerda exactamente la frase que le cambió la forma de mirar algo.\n\n🇲🇽 EN MÉXICO\nEl 15 de mayo es día de descanso obligatorio para el personal docente de educación básica y media superior. Las escuelas suelen organizar eventos el día previo: presentaciones de los alumnos, regalos, palabras de agradecimiento.\n\n🌎 OTROS PAÍSES\n• España y muchos países hispanos: 27 de noviembre (San José de Calasanz).\n• Estados Unidos: primer martes de mayo.\n• China: 10 de septiembre.\n• Día Mundial de los Docentes (UNESCO): 5 de octubre.\n\n💛 PARA TI, ESTUDIANTE\nEl mejor regalo para un maestro no es material — es que lo aprendido se use, se cuestione y se transmita. Si hubo un docente que te marcó, hoy es buen día para escribirle un mensaje.",
          notebook: "Reflexión opcional:\n1. ¿Qué maestro o maestra recuerdas con más cariño? ¿Por qué?\n2. ¿Qué aprendiste de él/ella que sigas usando hoy?\n3. ¿Hay alguna frase suya que se te quedó grabada?\n4. Si tú fueras maestro por un día, ¿qué clase darías?",
          practice: "Día de suspensión — no hay práctica en PC.",
          product: "Descanso. Si te animas, escribe un mensaje a un maestro que te haya marcado — no tiene que ser largo.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Sin sesión. Felicidades a quienes hacen de la docencia su vocación — esta clase también existe gracias a maestros que les enseñaron antes a sus actuales maestros. La cadena no se rompe."
        }
      ],
      cierre: "Un maestro influye en la eternidad — nunca puede saber dónde se detiene su influencia. — Henry Adams.",
      frase_docente: "Enseñar es la única profesión que crea a todas las demás."
    }
  ]
};
