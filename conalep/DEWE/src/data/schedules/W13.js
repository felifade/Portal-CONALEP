export const W13 = {
  materia: "dewe",
  weekId: "W13",
  days: [
    {
      id: "mon",
      label: "Lunes — 🎨 El sitio responde sin recargar: DOM, Eventos y Funciones",
      purpose: "Salir definitivamente de prompt/alert/console. Aprender a modificar el sitio Resident Evil EN VIVO desde JavaScript usando el DOM. Conectar botones reales a acciones. Construir un mini-proyecto integrador (sistema de vida del personaje) que use todo lo aprendido.",
      hours: [
        {
          time: "Hora 1",
          title: "🔬 El DOM — la página es un árbol que puedes modificar",
          theory: "🌳 ¿QUÉ ES EL DOM?\nDOM significa Document Object Model — el HTML convertido en una estructura de objetos que JavaScript puede leer y modificar. Cada etiqueta HTML (h1, p, div, button...) es un objeto con propiedades que puedes cambiar en tiempo real.\n\n🎯 EL SELECTOR FUNDAMENTAL\ndocument.querySelector(selector) — busca el PRIMER elemento que coincida con un selector CSS y lo devuelve. Si no lo encuentra, devuelve null.\n\n  document.querySelector('h1')          // primer <h1> del documento\n  document.querySelector('.titulo')     // primer elemento con clase 'titulo'\n  document.querySelector('#menu')       // elemento con id 'menu'\n  document.querySelector('button')      // primer <button>\n\n✏️ PROPIEDADES QUE PUEDES CAMBIAR\n• .textContent  → el texto dentro del elemento\n• .innerHTML    → el HTML dentro del elemento (cuidado: ejecuta etiquetas)\n• .style.color, .style.background, .style.fontSize ... → cualquier propiedad CSS\n• .src          → para <img>: la URL de la imagen\n• .classList    → manipular clases (add, remove, toggle)\n\n🪟 SIN RECARGAR LA PÁGINA\nLo más importante: estos cambios pasan AL INSTANTE en el navegador. No hay que recargar nada. El usuario los ve en tiempo real.\n\n💡 LA CONSOLA ES TU SANDBOX\nF12 → Console es perfecto para experimentar. Cada línea que escribes y ejecutas con Enter modifica la página viva.",
          notebook: "Título: El DOM — la página como objeto.\n1. ¿Qué significan las letras D, O, M?\n2. ¿Qué hace document.querySelector()?\n3. ¿Cuál es la diferencia entre .textContent y .innerHTML?\n4. ¿Qué pasa si querySelector no encuentra el elemento?\n5. Da 3 ejemplos de propiedades de .style que se pueden modificar.\n6. ¿Por qué los cambios al DOM no requieren recargar la página?",
          practice: "🧪 LABORATORIO EN CONSOLA — abre TU sitio Resident Evil (el index.html), pulsa F12 → Console, y ejecuta línea por línea:\n\n```js\n// 1. Cambiar el título principal\ndocument.querySelector('h1').textContent = '🧟 VIRUS T ACTIVADO';\n\n// 2. Pintar el fondo de sangre\ndocument.body.style.background = '#1a0000';\n\n// 3. Cambiar el color de todos los párrafos (solo el primero por ahora)\ndocument.querySelector('p').style.color = '#ff4444';\n\n// 4. Hacer el título gigante\ndocument.querySelector('h1').style.fontSize = '60px';\n\n// 5. Ocultar un elemento (cambia .menu por una clase que tengas)\ndocument.querySelector('nav').style.display = 'none';\n\n// 6. Mostrarlo de nuevo\ndocument.querySelector('nav').style.display = 'block';\n\n// 7. Cambiar todo el texto del body (¡cuidado, borra TODO!)\ndocument.body.innerHTML = '<h1 style=\"color:red\">RACCOON CITY DESTRUIDA</h1>';\n\n// 8. Recargar la página (F5) para volver al original\n```\n\n🎯 RETO INDIVIDUAL — convierte tu sitio en 'MODO APOCALIPSIS' en máximo 5 líneas de consola:\n• Fondo negro o rojo oscuro\n• Título gigante en rojo brillante\n• Algún elemento oculto o cambiado\n• Toma captura del resultado\n\n🚫 IMPORTANTE — estos cambios desde la consola NO se guardan. Al recargar todo vuelve al original. Para que sean permanentes hay que escribirlos en script.js — eso es la Hora 2.",
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

  /* Browser mockup */
  .browser { background: #21262d; border-radius: 8px; border: 1px solid #30363d; overflow: hidden; margin-bottom: 12px; }
  .browser-bar { background: #161b22; padding: 6px 10px; display: flex; gap: 6px; align-items: center; border-bottom: 1px solid #30363d; }
  .dot { width: 10px; height: 10px; border-radius: 50%; }
  .dot.r { background: #f85149; } .dot.y { background: #d29922; } .dot.g { background: #3fb950; }
  .url { flex: 1; background: #0d1117; padding: 4px 10px; border-radius: 4px; font-size: 10px; color: #8b949e; font-family: monospace; }
  .page-before, .page-after { padding: 18px 14px; min-height: 100px; }
  .page-before { background: #fff; color: #222; }
  .page-after { background: #1a0000; color: #ff4444; }
  .page-before h4 { color: #222; margin-bottom: 6px; }
  .page-after h4 { color: #ff4444; font-size: 22px; margin-bottom: 6px; text-shadow: 0 0 8px #ff0000; }
  .page-before p, .page-after p { font-size: 12px; }

  .code { font-family: 'Consolas','Monaco',monospace; font-size: 12px; background: #0d1117; border: 1px solid #21262d; border-radius: 6px; padding: 10px 12px; color: #e6edf3; line-height: 1.7; overflow-x: auto; white-space: pre; margin-bottom: 8px; }
  .c-com { color: #6e7681; font-style: italic; }
  .c-key { color: #ff7b72; }
  .c-fn  { color: #d2a8ff; }
  .c-str { color: #a5d6ff; }
  .c-prop { color: #79c0ff; }
  .arrow-down { text-align: center; color: #f7df1e; font-size: 22px; font-weight: 800; margin: 4px 0; }
  .label { font-size: 10px; color: #8b949e; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px; }

  /* Tree */
  .tree-row { display: flex; align-items: center; gap: 8px; font-family: 'Consolas',monospace; font-size: 13px; padding: 4px 0; }
  .tree-tag { color: #79c0ff; }
  .tree-text { color: #c9d1d9; }
  .tree-indent { color: #6e7681; }
  .tree-prop { display: flex; gap: 6px; font-size: 11px; color: #8b949e; padding-left: 28px; margin-bottom: 6px; }
  .tree-prop .k { color: #d2a8ff; }
  .tree-prop .v { color: #a5d6ff; }
  .note { background: #1a1f29; border-left: 3px solid #f7df1e; padding: 10px 12px; font-size: 11px; color: #8b949e; margin-top: 12px; border-radius: 0 4px 4px 0; line-height: 1.6; }
  .note strong { color: #e6edf3; }
  .note code { color: #79c0ff; font-family: monospace; }
  .full { grid-column: 1 / -1; }
</style>
</head>
<body>
<h2>🔬 El DOM en vivo — antes y después de modificarlo</h2>
<div class="layout">

  <div class="panel">
    <h3>📄 Antes — la página original</h3>
    <div class="browser">
      <div class="browser-bar">
        <div class="dot r"></div><div class="dot y"></div><div class="dot g"></div>
        <div class="url">🌐 file:///index.html</div>
      </div>
      <div class="page-before">
        <h4>Resident Evil — Inicio</h4>
        <p>Bienvenido a Raccoon City.</p>
      </div>
    </div>
    <div class="label">Estructura DOM (vista de árbol)</div>
    <div class="tree-row"><span class="tree-tag">&lt;body&gt;</span></div>
    <div class="tree-row"><span class="tree-indent">└─</span><span class="tree-tag">&lt;h1&gt;</span><span class="tree-text">"Resident Evil — Inicio"</span></div>
    <div class="tree-prop"><span class="k">.textContent</span> = <span class="v">"Resident Evil — Inicio"</span></div>
    <div class="tree-prop"><span class="k">.style.color</span> = <span class="v">"black"</span></div>
  </div>

  <div class="panel">
    <h3>✏️ Después — JS modificó el DOM</h3>
    <div class="browser">
      <div class="browser-bar">
        <div class="dot r"></div><div class="dot y"></div><div class="dot g"></div>
        <div class="url">🌐 file:///index.html</div>
      </div>
      <div class="page-after">
        <h4>🧟 VIRUS T ACTIVADO</h4>
        <p>Bienvenido a Raccoon City.</p>
      </div>
    </div>
    <div class="label">Mismo árbol, propiedades cambiadas</div>
    <div class="tree-row"><span class="tree-tag">&lt;body&gt;</span></div>
    <div class="tree-row"><span class="tree-indent">└─</span><span class="tree-tag">&lt;h1&gt;</span><span class="tree-text">"🧟 VIRUS T ACTIVADO"</span></div>
    <div class="tree-prop"><span class="k">.textContent</span> = <span class="v">"🧟 VIRUS T ACTIVADO"</span></div>
    <div class="tree-prop"><span class="k">.style.color</span> = <span class="v">"#ff4444"</span></div>
  </div>

  <div class="panel full">
    <h3>⚡ El código que hace la magia</h3>
    <div class="code">
<span class="c-com">// Seleccionar el título y cambiar su texto</span>
<span class="c-fn">document</span>.<span class="c-fn">querySelector</span>(<span class="c-str">'h1'</span>).<span class="c-prop">textContent</span> = <span class="c-str">'🧟 VIRUS T ACTIVADO'</span>;

<span class="c-com">// Pintar el fondo de la página de rojo oscuro</span>
<span class="c-fn">document</span>.<span class="c-prop">body</span>.<span class="c-prop">style</span>.<span class="c-prop">background</span> = <span class="c-str">'#1a0000'</span>;

<span class="c-com">// Cambiar el color del primer párrafo</span>
<span class="c-fn">document</span>.<span class="c-fn">querySelector</span>(<span class="c-str">'p'</span>).<span class="c-prop">style</span>.<span class="c-prop">color</span> = <span class="c-str">'#ff4444'</span>;
    </div>
    <div class="note">
      <strong>Patrón clave:</strong> <code>document.querySelector(selector).propiedad = valor</code>. Selecciona, accede a la propiedad, asigna nuevo valor. <strong>Todo cambia al instante</strong> en el navegador sin recargar.
    </div>
  </div>

</div>
</body>
</html>
`,
          product: "Capturas del sitio modificado vía consola en modo apocalipsis (mínimo 3 cambios visibles). Libreta con las 6 respuestas de teoría + los 5 selectores que probaron + qué hicieron en el reto.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta hora es 100% consola — nadie toca script.js todavía. Hace falta que los alumnos VEAN que el cambio es instantáneo (sin F5) para que internalicen el modelo mental del DOM. Si un alumno se asusta porque 'rompió' su sitio: F5 vuelve todo al original — los cambios en consola son volátiles. Aprovechar el paso 7 (innerHTML que borra todo) para discutir la diferencia entre textContent (texto) e innerHTML (HTML — peligroso si viene de usuario por XSS, pero eso es de seguridad para más adelante). El reto 'modo apocalipsis' es deliberadamente abierto — los más creativos sorprenden."
        },
        {
          time: "Hora 2",
          title: "🖱️ Eventos — el sitio escucha al usuario",
          theory: "🎧 LA IDEA: HASTA AHORA JS CORRÍA UNA VEZ\nTodo el código que han escrito se ejecuta cuando carga la página y se acabó. Si el usuario hace clic en un botón, no pasa nada — porque nadie está ESCUCHANDO.\n\nHoy aprenderemos a hacer que el código se ejecute SOLO cuando el usuario hace algo: clic, mover el mouse, pulsar una tecla, etc.\n\n🎯 addEventListener — EL VERBO MÁGICO\nLa sintaxis es:\n\n  elemento.addEventListener('tipo-evento', function() {\n    // código que se ejecuta cuando pasa el evento\n  });\n\nLos tres ingredientes:\n• elemento  → qué se está escuchando (un botón, un div, todo el documento...)\n• 'tipo-evento' → qué acción esperamos ('click', 'mouseover', 'keydown'...)\n• function() {...} → qué hacer cuando ocurre el evento\n\n🔥 EVENTOS COMUNES\n• 'click'       → el usuario hace clic\n• 'mouseover'   → el mouse entra al elemento (hover)\n• 'mouseout'    → el mouse sale del elemento\n• 'keydown'     → el usuario presiona una tecla\n• 'submit'      → se envía un formulario\n• 'input'       → cambió el contenido de un input\n\n💡 FUNCIONES ANÓNIMAS\nLa function() { ... } que va dentro de addEventListener se llama 'función anónima' — no tiene nombre, solo existe para responder a ese evento. Es totalmente normal en JS.\n\n📦 VARIABLES PARA NO REPETIR\nEn lugar de escribir document.querySelector('#btn-alarma') tres veces, lo guardas en una variable:\n\n  const btnAlarma = document.querySelector('#btn-alarma');\n  btnAlarma.addEventListener('click', function() { ... });\n  btnAlarma.style.background = 'red';\n\nMás corto, más legible, menos errores.",
          notebook: "Título: Eventos — el sitio escucha.\n1. ¿Qué hace addEventListener?\n2. Lista los 3 ingredientes que necesita addEventListener.\n3. ¿Qué es una función anónima?\n4. Da 4 tipos de eventos diferentes a 'click'.\n5. ¿Por qué conviene guardar el resultado de querySelector en una variable?\n6. ¿Qué pasaría si añades dos addEventListener al mismo botón?",
          practice: "🧪 LABORATORIO — esta vez SÍ tocas tu script.js (vamos a hacer cambios permanentes).\n\nPaso 1 — Agregar HTML al index.html (donde quieras):\n\n```html\n<div class=\"controles\">\n  <button id=\"btn-alarma\">🚨 Activar alarma</button>\n  <button id=\"btn-calma\">😌 Desactivar</button>\n  <div id=\"estado\">Estado: 🟢 tranquilo</div>\n</div>\n```\n\nPaso 2 — Escribir en js/script.js:\n\n```js\n// =====================================================\n// Sistema de alarma — DEWE Semana 13 Hora 2\n// =====================================================\n\n// 1. Guardar los elementos en variables\nconst btnAlarma = document.querySelector('#btn-alarma');\nconst btnCalma  = document.querySelector('#btn-calma');\nconst estado    = document.querySelector('#estado');\n\n// 2. Conectar el botón ALARMA al evento click\nbtnAlarma.addEventListener('click', function() {\n  document.body.style.background = '#660000';\n  estado.textContent = 'Estado: 🔴 PELIGRO INMINENTE';\n  estado.style.color = 'white';\n});\n\n// 3. Conectar el botón CALMA al evento click\nbtnCalma.addEventListener('click', function() {\n  document.body.style.background = '';\n  estado.textContent = 'Estado: 🟢 tranquilo';\n  estado.style.color = '';\n});\n\nconsole.log('✅ Sistema de alarma cargado');\n```\n\nPaso 3 — Guardar todo, abrir index.html en el navegador y probar:\n• Click en 'Activar alarma' → el sitio se vuelve rojo, mensaje cambia.\n• Click en 'Desactivar' → vuelve al normal.\n• Recargar página → vuelve al normal.\n\n🎯 RETO — agregar un tercer botón '🔊 Sonido de zombi' que al hacer hover (mouseover) cambie su texto a '🧟 GROOOAARRR' y al salir (mouseout) vuelva al original.\n\n```js\nbtnSonido.addEventListener('mouseover', function() {\n  btnSonido.textContent = '🧟 GROOOAARRR';\n});\n\nbtnSonido.addEventListener('mouseout', function() {\n  btnSonido.textContent = '🔊 Sonido de zombi';\n});\n```",
          diagram: `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0d1117; font-family: 'Segoe UI', sans-serif; color: #e6edf3; padding: 24px; }
  h2 { font-size: 15px; color: #f7df1e; margin-bottom: 18px; }
  .layout { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  @media (max-width: 720px) { .layout { grid-template-columns: 1fr; } }
  .panel { background: #161b22; border: 1px solid #30363d; border-radius: 10px; padding: 16px; }
  .panel h3 { font-size: 11px; color: #58a6ff; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.6px; }
  .full { grid-column: 1 / -1; }

  /* Demo interactivo */
  .demo { padding: 24px 18px; border-radius: 8px; transition: background 0.3s; background: #f0f0f0; color: #222; text-align: center; }
  .demo.alerta { background: #660000; color: white; }
  .demo h4 { font-size: 18px; margin-bottom: 12px; }
  .estado-box { font-family: 'Consolas',monospace; font-size: 13px; padding: 8px 12px; background: rgba(0,0,0,0.15); border-radius: 4px; margin: 12px 0; }
  .btn-demo { padding: 10px 18px; border-radius: 6px; border: none; font-weight: 700; cursor: pointer; font-size: 13px; margin: 4px; transition: transform 0.1s; }
  .btn-demo:hover { transform: scale(1.05); }
  .btn-alarma { background: #f85149; color: white; }
  .btn-calma  { background: #3fb950; color: white; }

  .code { font-family: 'Consolas','Monaco',monospace; font-size: 12px; background: #0d1117; border: 1px solid #21262d; border-radius: 6px; padding: 12px; color: #e6edf3; line-height: 1.7; overflow-x: auto; white-space: pre; }
  .c-com { color: #6e7681; font-style: italic; }
  .c-key { color: #ff7b72; }
  .c-fn  { color: #d2a8ff; }
  .c-str { color: #a5d6ff; }
  .c-prop { color: #79c0ff; }

  /* Flujo de evento */
  .flow { display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap; margin: 14px 0; }
  .flow-step { padding: 8px 12px; background: #21262d; border: 1px solid #30363d; border-radius: 6px; font-size: 11px; }
  .flow-step.user { color: #f7df1e; border-color: #f7df1e; background: #2a2510; }
  .flow-step.event { color: #79c0ff; border-color: #79c0ff; background: #102030; }
  .flow-step.action { color: #3fb950; border-color: #3fb950; background: #1a3a1a; }
  .flow-arrow { color: #f7df1e; font-weight: 800; font-size: 16px; }
  .note { background: #1a1f29; border-left: 3px solid #f7df1e; padding: 10px 12px; font-size: 11px; color: #8b949e; margin-top: 12px; border-radius: 0 4px 4px 0; line-height: 1.6; }
  .note strong { color: #e6edf3; }
  .note code { color: #79c0ff; font-family: monospace; }
</style>
</head>
<body>
<h2>🖱️ Demo en vivo — haz clic y mira cómo reacciona</h2>

<div class="layout">

  <div class="panel">
    <h3>🎮 Pruébalo aquí mismo</h3>
    <div id="demo-box" class="demo">
      <h4>🌆 Raccoon City</h4>
      <div id="demo-estado" class="estado-box">Estado: 🟢 tranquilo</div>
      <button id="demo-alarma" class="btn-demo btn-alarma">🚨 Activar alarma</button>
      <button id="demo-calma" class="btn-demo btn-calma">😌 Desactivar</button>
    </div>
    <div class="note">
      ↑ Este demo es <strong>JavaScript real corriendo</strong>. Haz clic en los botones y verás que el ambiente cambia sin recargar.
    </div>
  </div>

  <div class="panel">
    <h3>⚡ El código detrás del demo</h3>
    <div class="code">
<span class="c-com">// Guardar elementos en variables</span>
<span class="c-key">const</span> btn = <span class="c-fn">document</span>.<span class="c-fn">querySelector</span>(<span class="c-str">'#alarma'</span>);
<span class="c-key">const</span> estado = <span class="c-fn">document</span>.<span class="c-fn">querySelector</span>(<span class="c-str">'#estado'</span>);

<span class="c-com">// Escuchar el clic</span>
btn.<span class="c-fn">addEventListener</span>(<span class="c-str">'click'</span>, <span class="c-key">function</span>() {
  <span class="c-fn">document</span>.<span class="c-prop">body</span>.<span class="c-prop">style</span>.<span class="c-prop">background</span> = <span class="c-str">'#660000'</span>;
  estado.<span class="c-prop">textContent</span> = <span class="c-str">'🔴 PELIGRO'</span>;
});
    </div>
    <div class="flow">
      <span class="flow-step user">👤 Usuario hace clic</span>
      <span class="flow-arrow">→</span>
      <span class="flow-step event">📡 Evento 'click'</span>
      <span class="flow-arrow">→</span>
      <span class="flow-step action">⚡ Función se ejecuta</span>
    </div>
  </div>

</div>

<script>
  // Demo interactivo del propio diagrama
  var demoBox = document.getElementById('demo-box');
  var demoEstado = document.getElementById('demo-estado');
  var demoAlarma = document.getElementById('demo-alarma');
  var demoCalma = document.getElementById('demo-calma');

  demoAlarma.addEventListener('click', function() {
    demoBox.classList.add('alerta');
    demoEstado.textContent = 'Estado: 🔴 PELIGRO INMINENTE';
  });

  demoCalma.addEventListener('click', function() {
    demoBox.classList.remove('alerta');
    demoEstado.textContent = 'Estado: 🟢 tranquilo';
  });
</script>
</body>
</html>
`,
          product: "Sistema de alarma funcionando en su sitio Resident Evil — dos botones reales que cambian el ambiente al hacer clic + el reto de hover en el tercer botón. Captura del estado 'PELIGRO' visible.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta es la PRIMERA VEZ que los alumnos ven código que se ejecuta 'cuando el usuario haga algo' — antes todo corría una vez. Es un cambio mental grande. Insistir en el orden: PRIMERO seleccionar el elemento (con querySelector), DESPUÉS añadirle el listener. Errores típicos:\n• Querer agregar listener antes de que el HTML cargue → usar defer (ya está desde W12).\n• Olvidar las comillas en 'click'.\n• Confundir mouseover (entra) con mouseout (sale).\n• Hacer btnAlarma.click() en vez de addEventListener — el primero EJECUTA el click ahora mismo, no espera al usuario.\nEl reto de mouseover/mouseout es bueno para discutir hover puro CSS vs hover con JS (cuándo usar cada uno)."
        },
        {
          time: "Hora 3",
          title: "❤️ Mini-proyecto: Sistema de vida del personaje (todo junto)",
          theory: "🎯 LO QUE VAMOS A CONSTRUIR\nUn pequeño 'panel de personaje' en su sitio Resident Evil con:\n• Un número de vida visible (empieza en 100)\n• Botón 'Curar (+10)' que aumenta la vida\n• Botón 'Recibir daño (-15)' que disminuye la vida\n• Cuando la vida llega a 0 → aparece 'GAME OVER' gigante en rojo\n• Botón 'Resetear' para volver a 100\n\nEsto es UN MINI-JUEGO funcional integrado a su sitio. Usa TODO lo aprendido hoy: querySelector, eventos, y un concepto nuevo: FUNCIONES.\n\n🧩 LA PIEZA NUEVA: FUNCIONES\nUna función es un bloque de código con nombre que se puede llamar varias veces. La sintaxis básica:\n\n  function actualizar() {\n    // código que hace algo\n  }\n\n  actualizar();  // llamar a la función → ejecuta el código de adentro\n\n🤔 ¿POR QUÉ NECESITAMOS FUNCIONES HOY?\nCada vez que cambia la vida (curar, dañar, resetear) hay que:\n  1. Mostrar el nuevo número en pantalla\n  2. Revisar si vida ≤ 0 → mostrar GAME OVER\n  3. Limitar a máximo 100\n\nSi no usamos función, tendríamos que copiar y pegar esa lógica en CADA evento. Mal idea: si después cambias algo, hay que cambiarlo en 3 lugares.\n\nCon una función actualizar(), escribimos esa lógica UNA SOLA VEZ y la llamamos desde donde la necesitemos. Es el concepto fundamental de 'reutilización de código' — el primer paso para pensar como programador.\n\n📐 ESTRUCTURA DEL PROGRAMA\n  1. Variable: let vida = 100\n  2. Variables para los elementos (querySelector)\n  3. Función actualizar()\n  4. Listeners para los 3 botones (cada uno modifica vida y llama actualizar)\n  5. Llamada inicial a actualizar() para mostrar el estado inicial",
          notebook: "Título: Mini-proyecto Sistema de Vida.\n1. ¿Qué es una función en JavaScript?\n2. ¿Por qué conviene usar una función en lugar de copiar y pegar código?\n3. En el sistema de vida, lista los 3 eventos que vamos a escuchar.\n4. ¿Qué pasa si vida queda negativa? ¿Cómo lo evitamos?\n5. ¿Por qué llamamos actualizar() al final del programa (antes de los listeners)?\n6. Reflexión: si después quisieras agregar 'envenenamiento' (resta 5 cada segundo), ¿qué tendrías que añadir al código?",
          practice: "🛠️ LABORATORIO INTEGRADOR\n\nPaso 1 — Agregar al HTML del index.html (dentro del body):\n\n```html\n<section class=\"panel-vida\">\n  <h2>🦹 Leon S. Kennedy</h2>\n  <div class=\"barra-fondo\">\n    <div id=\"barra-fill\"></div>\n  </div>\n  <p>❤️ Vida: <span id=\"num-vida\">100</span> / 100</p>\n  <button id=\"btn-curar\">💊 Curar (+10)</button>\n  <button id=\"btn-danio\">💥 Daño (-15)</button>\n  <button id=\"btn-reset\">🔄 Resetear</button>\n  <h3 id=\"game-over\"></h3>\n</section>\n```\n\nPaso 2 — Estilos mínimos en style.css:\n\n```css\n.panel-vida {\n  background: #1a1a1a; color: #fff;\n  padding: 20px; border-radius: 10px;\n  margin: 20px 0; max-width: 400px;\n}\n.barra-fondo {\n  background: #333; height: 20px;\n  border-radius: 10px; overflow: hidden;\n  margin: 12px 0;\n}\n#barra-fill {\n  background: #3fb950; height: 100%;\n  width: 100%; transition: all 0.3s;\n}\n.panel-vida button {\n  padding: 8px 14px; margin: 4px; border: none;\n  border-radius: 6px; cursor: pointer; font-weight: bold;\n}\n#game-over {\n  color: red; font-size: 30px; margin-top: 16px;\n  text-shadow: 0 0 10px red;\n}\n```\n\nPaso 3 — JavaScript completo en script.js (a continuación del código de la H2):\n\n```js\n// =====================================================\n// Sistema de vida — DEWE Semana 13 Hora 3\n// =====================================================\n\n// 1. Variable principal\nlet vida = 100;\n\n// 2. Capturar elementos\nconst numVida   = document.querySelector('#num-vida');\nconst barraFill = document.querySelector('#barra-fill');\nconst gameOver  = document.querySelector('#game-over');\nconst btnCurar  = document.querySelector('#btn-curar');\nconst btnDanio  = document.querySelector('#btn-danio');\nconst btnReset  = document.querySelector('#btn-reset');\n\n// 3. Función que actualiza la pantalla con el valor actual de vida\nfunction actualizar() {\n  // Limitar entre 0 y 100\n  if (vida < 0)   vida = 0;\n  if (vida > 100) vida = 100;\n\n  // Mostrar número\n  numVida.textContent = vida;\n\n  // Actualizar barra (ancho proporcional)\n  barraFill.style.width = vida + '%';\n\n  // Color según vida\n  if (vida > 60) {\n    barraFill.style.background = '#3fb950';   // verde\n  } else if (vida > 30) {\n    barraFill.style.background = '#d29922';   // amarillo\n  } else {\n    barraFill.style.background = '#f85149';   // rojo\n  }\n\n  // Game over\n  if (vida === 0) {\n    gameOver.textContent = '💀 GAME OVER';\n  } else {\n    gameOver.textContent = '';\n  }\n}\n\n// 4. Conectar eventos\nbtnCurar.addEventListener('click', function() {\n  vida = vida + 10;\n  actualizar();\n});\n\nbtnDanio.addEventListener('click', function() {\n  vida = vida - 15;\n  actualizar();\n});\n\nbtnReset.addEventListener('click', function() {\n  vida = 100;\n  actualizar();\n});\n\n// 5. Llamada inicial para mostrar estado de arranque\nactualizar();\n```\n\nPaso 4 — Probar en el navegador:\n• La barra arranca en 100% verde.\n• 'Daño' baja la vida y eventualmente la barra se pone amarilla, luego roja.\n• 'Curar' la sube de regreso (sin pasar de 100).\n• A los 7 clicks de daño llega a -5 → se limita a 0 → aparece GAME OVER gigante.\n• 'Resetear' vuelve a 100.\n\n🎯 RETOS OPCIONALES (para los rápidos):\n• A. Cuando GAME OVER, desactivar el botón 'Daño' (btnDanio.disabled = true) hasta resetear.\n• B. Añadir un contador de cuántas veces te han curado vs dañado.\n• C. Cambiar el nombre del personaje al inicio con un prompt y mostrarlo en el h2.",
          diagram: `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0d1117; font-family: 'Segoe UI', sans-serif; color: #e6edf3; padding: 24px; }
  h2 { font-size: 15px; color: #f7df1e; margin-bottom: 18px; }
  .layout { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  @media (max-width: 720px) { .layout { grid-template-columns: 1fr; } }
  .panel { background: #161b22; border: 1px solid #30363d; border-radius: 10px; padding: 16px; }
  .panel h3 { font-size: 11px; color: #58a6ff; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.6px; }

  /* Demo funcional */
  .panel-vida-demo { background: linear-gradient(180deg, #1a1a1a, #0a0a0a); color: #fff; padding: 22px; border-radius: 10px; border: 2px solid #333; }
  .panel-vida-demo h4 { font-size: 17px; margin-bottom: 14px; color: #f7df1e; text-shadow: 0 0 8px rgba(247,223,30,0.3); }
  .barra-fondo { background: #333; height: 24px; border-radius: 12px; overflow: hidden; margin: 14px 0; box-shadow: inset 0 2px 4px rgba(0,0,0,0.5); }
  #demo-barra { background: #3fb950; height: 100%; width: 100%; transition: width 0.4s, background 0.4s; }
  .vida-text { font-size: 14px; margin: 10px 0; font-family: 'Consolas',monospace; }
  .vida-text span { color: #3fb950; font-weight: bold; font-size: 18px; }
  .btn-demo { padding: 9px 14px; margin: 4px 3px; border: none; border-radius: 6px; cursor: pointer; font-weight: 700; font-size: 12px; transition: transform 0.1s; color: white; }
  .btn-demo:hover { transform: scale(1.05); }
  .btn-curar  { background: #3fb950; }
  .btn-danio  { background: #f85149; }
  .btn-reset  { background: #58a6ff; }
  #demo-gameover { color: #f85149; font-size: 22px; font-weight: 900; text-align: center; margin-top: 16px; text-shadow: 0 0 12px #f85149; min-height: 30px; }

  .code { font-family: 'Consolas',monospace; font-size: 11.5px; background: #0d1117; border: 1px solid #21262d; border-radius: 6px; padding: 12px; color: #e6edf3; line-height: 1.65; overflow-x: auto; white-space: pre; }
  .c-com { color: #6e7681; font-style: italic; }
  .c-key { color: #ff7b72; }
  .c-fn  { color: #d2a8ff; }
  .c-str { color: #a5d6ff; }
  .c-prop { color: #79c0ff; }
  .c-num { color: #f7df1e; }
  .note { background: #1a1f29; border-left: 3px solid #f7df1e; padding: 10px 12px; font-size: 11px; color: #8b949e; margin-top: 12px; border-radius: 0 4px 4px 0; line-height: 1.6; }
  .note strong { color: #e6edf3; }
</style>
</head>
<body>
<h2>❤️ Sistema de vida — DEMO FUNCIONAL (juega con él)</h2>

<div class="layout">

  <div class="panel">
    <h3>🎮 Pruébalo — haz clic en los botones</h3>
    <div class="panel-vida-demo">
      <h4>🦹 Leon S. Kennedy</h4>
      <div class="barra-fondo">
        <div id="demo-barra"></div>
      </div>
      <div class="vida-text">❤️ Vida: <span id="demo-num">100</span> / 100</div>
      <button id="demo-curar" class="btn-demo btn-curar">💊 Curar (+10)</button>
      <button id="demo-danio" class="btn-demo btn-danio">💥 Daño (-15)</button>
      <button id="demo-reset" class="btn-demo btn-reset">🔄 Resetear</button>
      <div id="demo-gameover"></div>
    </div>
    <div class="note">
      ↑ <strong>Esto es exactamente lo que vas a construir hoy.</strong> Pruébalo: dale clic a 'Daño' varias veces hasta llegar a 0 y observa cómo la barra cambia de color y aparece GAME OVER.
    </div>
  </div>

  <div class="panel">
    <h3>⚡ El corazón del programa: la función actualizar()</h3>
    <div class="code">
<span class="c-key">let</span> vida = <span class="c-num">100</span>;

<span class="c-key">function</span> <span class="c-fn">actualizar</span>() {
  <span class="c-com">// Limitar entre 0 y 100</span>
  <span class="c-key">if</span> (vida &lt; <span class="c-num">0</span>)   vida = <span class="c-num">0</span>;
  <span class="c-key">if</span> (vida &gt; <span class="c-num">100</span>) vida = <span class="c-num">100</span>;

  <span class="c-com">// Mostrar número en pantalla</span>
  numVida.<span class="c-prop">textContent</span> = vida;
  barraFill.<span class="c-prop">style</span>.<span class="c-prop">width</span> = vida + <span class="c-str">'%'</span>;

  <span class="c-com">// Color según nivel de vida</span>
  <span class="c-key">if</span> (vida &gt; <span class="c-num">60</span>) {
    barraFill.<span class="c-prop">style</span>.<span class="c-prop">background</span> = <span class="c-str">'#3fb950'</span>;
  } <span class="c-key">else if</span> (vida &gt; <span class="c-num">30</span>) {
    barraFill.<span class="c-prop">style</span>.<span class="c-prop">background</span> = <span class="c-str">'#d29922'</span>;
  } <span class="c-key">else</span> {
    barraFill.<span class="c-prop">style</span>.<span class="c-prop">background</span> = <span class="c-str">'#f85149'</span>;
  }

  <span class="c-com">// Game over</span>
  <span class="c-key">if</span> (vida === <span class="c-num">0</span>) gameOver.<span class="c-prop">textContent</span> = <span class="c-str">'💀 GAME OVER'</span>;
  <span class="c-key">else</span>             gameOver.<span class="c-prop">textContent</span> = <span class="c-str">''</span>;
}
    </div>
    <div class="note">
      <strong>Por qué función:</strong> esta misma lógica se llama desde los 3 botones (curar, dañar, resetear). Sin función habría que copiar/pegar 3 veces. Mantener UNA fuente de la verdad es el corazón del buen código.
    </div>
  </div>

</div>

<script>
  var demoVida = 100;
  var demoBarra = document.getElementById('demo-barra');
  var demoNum = document.getElementById('demo-num');
  var demoGameOver = document.getElementById('demo-gameover');

  function demoActualizar() {
    if (demoVida < 0) demoVida = 0;
    if (demoVida > 100) demoVida = 100;
    demoNum.textContent = demoVida;
    demoBarra.style.width = demoVida + '%';
    if (demoVida > 60)      demoBarra.style.background = '#3fb950';
    else if (demoVida > 30) demoBarra.style.background = '#d29922';
    else                    demoBarra.style.background = '#f85149';
    if (demoVida === 0) demoGameOver.textContent = '💀 GAME OVER';
    else                demoGameOver.textContent = '';
  }

  document.getElementById('demo-curar').addEventListener('click', function() {
    demoVida = demoVida + 10;
    demoActualizar();
  });
  document.getElementById('demo-danio').addEventListener('click', function() {
    demoVida = demoVida - 15;
    demoActualizar();
  });
  document.getElementById('demo-reset').addEventListener('click', function() {
    demoVida = 100;
    demoActualizar();
  });

  demoActualizar();
</script>
</body>
</html>
`,
          code: "// =====================================================\n// Sistema de vida — DEWE Semana 13 Hora 3\n// Completa los espacios en blanco\n// =====================================================\n\nlet vida = 100;\n\nconst numVida   = document.querySelector('#num-vida');\nconst barraFill = document.querySelector('#barra-fill');\nconst gameOver  = document.querySelector('#game-over');\nconst btnCurar  = document.querySelector('#btn-curar');\nconst btnDanio  = document.querySelector('#btn-danio');\nconst btnReset  = document.querySelector('#btn-reset');\n\nfunction actualizar() {\n  if (vida < 0)   vida = 0;\n  if (vida > 100) vida = ;          // ¿a qué valor lo limitamos?\n\n  numVida.textContent = vida;\n  barraFill.style.width = vida + '%';\n\n  if (vida > 60) {\n    barraFill.style.background = '#3fb950';\n  } else if (vida > 30) {\n    barraFill.style.background = '';   // ¿qué color para nivel medio?\n  } else {\n    barraFill.style.background = '#f85149';\n  }\n\n  if (vida === 0) {\n    gameOver.textContent = '💀 GAME OVER';\n  } else {\n    gameOver.textContent = '';\n  }\n}\n\nbtnCurar.addEventListener('click', function() {\n  vida = vida + ;                       // ¿cuánto cura?\n  actualizar();\n});\n\nbtnDanio.addEventListener('click', function() {\n  vida = vida - 15;\n  ();                                   // ¿qué función llamamos?\n});\n\nbtnReset.addEventListener('click', function() {\n  vida = ;                              // ¿valor inicial?\n  actualizar();\n});\n\nactualizar();   // mostrar estado inicial",
          codeRef: "// =====================================================\n// Sistema de vida — DEWE Semana 13 Hora 3 — VERSIÓN COMPLETA\n// =====================================================\n\nlet vida = 100;\n\nconst numVida   = document.querySelector('#num-vida');\nconst barraFill = document.querySelector('#barra-fill');\nconst gameOver  = document.querySelector('#game-over');\nconst btnCurar  = document.querySelector('#btn-curar');\nconst btnDanio  = document.querySelector('#btn-danio');\nconst btnReset  = document.querySelector('#btn-reset');\n\nfunction actualizar() {\n  if (vida < 0)   vida = 0;\n  if (vida > 100) vida = 100;\n\n  numVida.textContent = vida;\n  barraFill.style.width = vida + '%';\n\n  if (vida > 60) {\n    barraFill.style.background = '#3fb950';   // verde\n  } else if (vida > 30) {\n    barraFill.style.background = '#d29922';   // amarillo\n  } else {\n    barraFill.style.background = '#f85149';   // rojo\n  }\n\n  if (vida === 0) {\n    gameOver.textContent = '💀 GAME OVER';\n  } else {\n    gameOver.textContent = '';\n  }\n}\n\nbtnCurar.addEventListener('click', function() {\n  vida = vida + 10;\n  actualizar();\n});\n\nbtnDanio.addEventListener('click', function() {\n  vida = vida - 15;\n  actualizar();\n});\n\nbtnReset.addEventListener('click', function() {\n  vida = 100;\n  actualizar();\n});\n\nactualizar();",
          product: "Mini-juego de sistema de vida funcionando dentro del sitio Resident Evil. Captura mostrando los 3 estados: vida alta (verde), vida media (amarillo), GAME OVER (rojo). Subir a Classroom.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: ESTA es LA hora más importante del corte. Los alumnos integran TODO lo aprendido en un mini-proyecto que funciona, se ve bien y pueden enseñarle a su mamá. Pasos pedagógicos:\n\n1. Mostrar el demo del diagrama PRIMERO (que jueguen 2 minutos con él). Esto da la motivación.\n2. Después construir paso a paso. NO darles el código completo de un jalón — agregar feature por feature: primero solo el botón curar+actualizar texto, luego dañar, luego la barra visual, luego los colores, luego GAME OVER.\n3. La función actualizar() es donde aparece el concepto de FUNCIÓN. No introducirlo de seco — dejar que duplican código primero, sufran, y propongan ellos solos 'esto se podría reutilizar'. Ahí entra la función como solución.\n4. El reto C (cambiar nombre con prompt) conecta con W12 — buen cierre de RA2.2.\n\nErrores típicos:\n• Olvidar llamar actualizar() después de cambiar vida → la pantalla no se mueve aunque la variable cambie.\n• Confundir = (asignación) con === (comparación) en if (vida === 0).\n• Poner los listeners DENTRO de la función actualizar — solo deben registrarse UNA VEZ al cargar.\n• Olvidar la llamada inicial actualizar() al final → al cargar la página no se ven los datos iniciales (técnicamente sí porque el HTML los muestra, pero el patrón es siempre llamar al final)."
        }
      ],
      cierre: "Tres horas, tres saltos: leer el DOM, hacerlo escuchar, hacerlo reaccionar con lógica reutilizable. Hoy su sitio dejó de ser una página estática.",
      frase_docente: "Cuando una función se llama desde tres lugares, esa función ya te ahorró tres bugs."
    },
    {
      id: "thu",
      label: "Jueves — 🚧 Por planear",
      purpose: "Sesión pendiente. Se planeará en función del avance del lunes y de lo que el grupo necesite reforzar antes del cierre del corte.",
      hours: [
        {
          time: "🚧 Por planear",
          title: "🚧 Sesión por planear",
          theory: "Esta sesión se planeará después del lunes. Direcciones probables:\n\n• Formularios HTML + .value para reemplazar prompt() por inputs reales.\n• Arrays y bucles (for, forEach) para manejar colecciones (galería, inventario).\n• Local Storage para guardar el progreso del juego entre recargas.\n• Refactorizar el sistema de vida con más features (envenenamiento, items recogidos).",
          notebook: "Sin libreta — sesión por confirmar.",
          practice: "Sin práctica obligatoria.",
          product: "Por definir.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Decidir el viernes anterior según avance del grupo. Si terminaron sistema de vida con holgura → arrays/bucles. Si batallaron → reforzar DOM + eventos con otro mini-proyecto."
        }
      ],
      cierre: "Sesión por definir.",
      frase_docente: "El plan se ajusta a lo que el aula dice — no al revés."
    },
    {
      id: "fri",
      label: "Viernes — 🚧 Por planear",
      purpose: "Sesión de viernes con grupo completo (incluye los del dual). Se planeará tras el jueves.",
      hours: [
        {
          time: "🚧 Por planear",
          title: "🚧 Sesión por planear",
          theory: "Posibles direcciones para esta sesión integradora con grupo completo:\n\n• Mini-proyecto final del RA2.2 que integre DOM + Eventos + Funciones.\n• Práctica colaborativa con IA donde cada equipo agrega una feature al sitio.\n• Showcase y crítica entre alumnos del trabajo de la semana.",
          notebook: "Sin libreta — sesión por confirmar.",
          practice: "Sin práctica obligatoria.",
          product: "Por definir.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Recordar que el viernes llegan los del dual — diseñar la sesión asumiendo que parte del grupo NO estuvo entre semana. Repaso + extensión es el patrón que funcionó la W12."
        }
      ],
      cierre: "Sesión por definir.",
      frase_docente: "Una clase con audiencia mixta enseña dos veces — y ese es buen entrenamiento docente."
    }
  ]
};
