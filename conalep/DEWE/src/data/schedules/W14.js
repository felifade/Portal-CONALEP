export const W14 = {
  materia: "dewe",
  weekId: "W14",
  days: [
    {
      id: "mon",
      label: "Lunes — 🎮 El juego cobra vida: reconstrucción + funciones con parámetros + setInterval",
      purpose: "Cierre del semestre. H1: reconstruir el Sistema de Vida desde cero (para que TODOS lo tengan funcionando, incluyendo duales que no estuvieron). H2: refactor a funciones con parámetros — agregar daño crítico y poción sin reescribir lógica. H3: setInterval — el zombi ataca solo cada cierto tiempo, con botón para huir. Al final del día tienen un mini-juego de verdad.",
      hours: [
        {
          time: "Hora 1",
          title: "🔄 Reconstruir el Sistema de Vida desde cero",
          theory: "🎯 OBJETIVO DE LA HORA\nQue TODOS los alumnos terminen con un Sistema de Vida funcionando en su sitio Resident Evil. Quienes ya lo tenían lo limpian. Quienes no lo terminaron, lo construyen desde cero. Quienes no estuvieron (los del dual), lo aprenden ahora.\n\n📐 ESTRUCTURA DEL SISTEMA DE VIDA\nEs el patrón que ya conocemos:\n\n  1. Variable de estado:        let vida = 100\n  2. Variables de referencia:   const numVida = document.querySelector('#num-vida')\n  3. Función que refresca:      function actualizar() { ... }\n  4. Listeners para cada botón: btnCurar.addEventListener('click', function() { ... })\n  5. Llamada inicial:           actualizar()\n\n🧠 ¿POR QUÉ ESTA ESTRUCTURA?\n• La variable vida es la 'única fuente de la verdad'. Si cambia, la pantalla debe reflejarlo.\n• La función actualizar() centraliza TODO lo visual. Si después agregas algo nuevo (color, sonido, texto), va dentro de actualizar() y se aplica solito.\n• Cada listener solo MODIFICA la variable y luego LLAMA a actualizar(). No tiene lógica visual propia.\n\n📋 LO QUE CONSTRUIMOS HOY (versión limpia):\n• HTML: panel del personaje + barra de vida + 3 botones (Curar, Daño, Resetear) + zona GAME OVER.\n• CSS: panel oscuro tipo videojuego, barra con transición suave.\n• JS: variable vida, función actualizar(), 3 listeners.\n• Comportamiento: barra cambia de color (verde > 60, amarillo, rojo), GAME OVER al llegar a 0.\n\n💡 NOTA IMPORTANTE\nSi ya tenían el código del jueves W13, lo REVISAN y LIMPIAN — no lo borran. Quienes empiezan de cero, copian el código completo desde la sección de práctica.",
          notebook: "Título: Sistema de Vida — versión definitiva.\n1. ¿Cuál es la 'única fuente de la verdad' en el Sistema de Vida?\n2. ¿Por qué la función actualizar() centraliza toda la lógica visual?\n3. ¿Qué tarea tiene cada listener de los botones?\n4. ¿Por qué se llama actualizar() al final del archivo (antes de hacer clic en algo)?\n5. ¿Qué pasaría si olvidas llamar actualizar() después de modificar la variable vida?\n6. ¿Qué pasa con la barra de vida cuando vida llega a 0?",
          practice: "🛠️ RECONSTRUCCIÓN PASO A PASO\n\nPaso 1 — HTML (dentro del body del index.html):\n\n```html\n<section class=\"panel-vida\">\n  <h2>🦹 Leon S. Kennedy</h2>\n  <div class=\"barra-fondo\">\n    <div id=\"barra-fill\"></div>\n  </div>\n  <p>❤️ Vida: <span id=\"num-vida\">100</span> / 100</p>\n  <div class=\"botones\">\n    <button id=\"btn-curar\">💊 Curar (+10)</button>\n    <button id=\"btn-danio\">💥 Daño (-15)</button>\n    <button id=\"btn-reset\">🔄 Resetear</button>\n  </div>\n  <h3 id=\"game-over\"></h3>\n</section>\n```\n\nPaso 2 — CSS (en style.css):\n\n```css\n.panel-vida {\n  background: linear-gradient(180deg, #1a1a1a, #0a0a0a);\n  color: #fff;\n  padding: 24px;\n  border-radius: 12px;\n  margin: 20px auto;\n  max-width: 400px;\n  border: 2px solid #333;\n}\n.panel-vida h2 {\n  color: #f7df1e;\n  margin-bottom: 14px;\n}\n.barra-fondo {\n  background: #333;\n  height: 24px;\n  border-radius: 12px;\n  overflow: hidden;\n  margin: 12px 0;\n}\n#barra-fill {\n  background: #3fb950;\n  height: 100%;\n  width: 100%;\n  transition: width 0.4s, background 0.4s;\n}\n.botones button {\n  padding: 10px 14px;\n  margin: 4px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  font-weight: bold;\n  color: white;\n}\n#btn-curar { background: #3fb950; }\n#btn-danio { background: #f85149; }\n#btn-reset { background: #58a6ff; }\n#game-over {\n  color: #f85149;\n  font-size: 28px;\n  text-align: center;\n  text-shadow: 0 0 12px #f85149;\n  min-height: 30px;\n}\n```\n\nPaso 3 — JavaScript (en js/script.js):\n\n```js\n// =====================================================\n// Sistema de Vida v2 — DEWE Semana 14 Hora 1\n// Versión limpia, comentada, lista para extender\n// =====================================================\n\n// 1. Estado del juego\nlet vida = 100;\n\n// 2. Referencias al DOM\nconst numVida   = document.querySelector('#num-vida');\nconst barraFill = document.querySelector('#barra-fill');\nconst gameOver  = document.querySelector('#game-over');\nconst btnCurar  = document.querySelector('#btn-curar');\nconst btnDanio  = document.querySelector('#btn-danio');\nconst btnReset  = document.querySelector('#btn-reset');\n\n// 3. Función que refresca la pantalla con el valor actual de vida\nfunction actualizar() {\n  // Limitar entre 0 y 100\n  if (vida < 0)   vida = 0;\n  if (vida > 100) vida = 100;\n\n  // Mostrar número y ancho de barra\n  numVida.textContent = vida;\n  barraFill.style.width = vida + '%';\n\n  // Color de la barra según nivel de vida\n  if (vida > 60) {\n    barraFill.style.background = '#3fb950';   // verde\n  } else if (vida > 30) {\n    barraFill.style.background = '#d29922';   // amarillo\n  } else {\n    barraFill.style.background = '#f85149';   // rojo\n  }\n\n  // GAME OVER cuando vida es 0\n  if (vida === 0) {\n    gameOver.textContent = '💀 GAME OVER';\n  } else {\n    gameOver.textContent = '';\n  }\n}\n\n// 4. Listeners para los 3 botones\nbtnCurar.addEventListener('click', function() {\n  vida = vida + 10;\n  actualizar();\n});\n\nbtnDanio.addEventListener('click', function() {\n  vida = vida - 15;\n  actualizar();\n});\n\nbtnReset.addEventListener('click', function() {\n  vida = 100;\n  actualizar();\n});\n\n// 5. Llamada inicial — muestra el estado al cargar la página\nactualizar();\n```\n\nPaso 4 — Probar:\n• Cargar el sitio. La barra arranca al 100% en verde.\n• Click en Daño varias veces → la barra baja, cambia a amarillo y luego rojo.\n• A los ~7 clicks de daño aparece GAME OVER.\n• Resetear vuelve a 100.\n• Recargar la página vuelve a 100 también (porque la variable se inicializa).",
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

  .panel-vida-demo { background: linear-gradient(180deg, #1a1a1a, #0a0a0a); color: #fff; padding: 22px; border-radius: 10px; border: 2px solid #333; }
  .panel-vida-demo h4 { font-size: 17px; margin-bottom: 14px; color: #f7df1e; }
  .barra-fondo { background: #333; height: 22px; border-radius: 11px; overflow: hidden; margin: 12px 0; }
  #d1-barra { background: #3fb950; height: 100%; width: 100%; transition: all 0.4s; }
  .vida-text { font-size: 14px; margin: 8px 0; font-family: 'Consolas',monospace; }
  .vida-text span { color: #3fb950; font-weight: bold; font-size: 18px; }
  .btn-demo { padding: 9px 14px; margin: 4px 3px; border: none; border-radius: 6px; cursor: pointer; font-weight: 700; font-size: 12px; color: white; transition: transform 0.1s; }
  .btn-demo:hover { transform: scale(1.05); }
  .btn-curar { background: #3fb950; }
  .btn-danio { background: #f85149; }
  .btn-reset { background: #58a6ff; }
  #d1-gameover { color: #f85149; font-size: 22px; font-weight: 900; text-align: center; margin-top: 14px; text-shadow: 0 0 10px #f85149; min-height: 28px; }

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
<h2>🔄 Sistema de Vida v2 — versión definitiva (interactivo)</h2>

<div class="layout">

  <div class="panel">
    <h3>🎮 Demo funcional — haz clic</h3>
    <div class="panel-vida-demo">
      <h4>🦹 Leon S. Kennedy</h4>
      <div class="barra-fondo"><div id="d1-barra"></div></div>
      <div class="vida-text">❤️ Vida: <span id="d1-num">100</span> / 100</div>
      <button id="d1-curar" class="btn-demo btn-curar">💊 Curar (+10)</button>
      <button id="d1-danio" class="btn-demo btn-danio">💥 Daño (-15)</button>
      <button id="d1-reset" class="btn-demo btn-reset">🔄 Resetear</button>
      <div id="d1-gameover"></div>
    </div>
    <div class="note">
      ↑ <strong>Reconstruyan ESTO en su sitio.</strong> Quienes ya lo tenían del jueves W13: limpien y comenten su código. Quienes no: copien el código del laboratorio paso a paso.
    </div>
  </div>

  <div class="panel">
    <h3>⚡ Estructura clave — los 5 elementos</h3>
    <div class="code">
<span class="c-com">// 1. Estado</span>
<span class="c-key">let</span> vida = <span class="c-num">100</span>;

<span class="c-com">// 2. Referencias al DOM</span>
<span class="c-key">const</span> numVida = <span class="c-fn">document</span>.<span class="c-fn">querySelector</span>(<span class="c-str">'#num-vida'</span>);
<span class="c-com">// (... otros elementos)</span>

<span class="c-com">// 3. Función central</span>
<span class="c-key">function</span> <span class="c-fn">actualizar</span>() {
  <span class="c-com">// limita, muestra, colorea, game over</span>
}

<span class="c-com">// 4. Listeners</span>
btnCurar.<span class="c-fn">addEventListener</span>(<span class="c-str">'click'</span>, <span class="c-key">function</span>() {
  vida = vida + <span class="c-num">10</span>;
  <span class="c-fn">actualizar</span>();
});

<span class="c-com">// 5. Llamada inicial</span>
<span class="c-fn">actualizar</span>();
    </div>
    <div class="note">
      <strong>Patrón:</strong> los listeners SOLO modifican la variable y llaman <code style="color:#79c0ff;font-family:monospace;">actualizar()</code>. NO tienen lógica visual. Eso vive todo dentro de la función central. Si después cambias el diseño, lo cambias en UN solo lugar.
    </div>
  </div>

</div>

<script>
  var v1 = 100;
  var d1Num = document.getElementById('d1-num');
  var d1Barra = document.getElementById('d1-barra');
  var d1GameOver = document.getElementById('d1-gameover');

  function d1Actualizar() {
    if (v1 < 0) v1 = 0;
    if (v1 > 100) v1 = 100;
    d1Num.textContent = v1;
    d1Barra.style.width = v1 + '%';
    if (v1 > 60)      d1Barra.style.background = '#3fb950';
    else if (v1 > 30) d1Barra.style.background = '#d29922';
    else              d1Barra.style.background = '#f85149';
    if (v1 === 0) d1GameOver.textContent = '💀 GAME OVER';
    else          d1GameOver.textContent = '';
  }

  document.getElementById('d1-curar').addEventListener('click', function() { v1 = v1 + 10; d1Actualizar(); });
  document.getElementById('d1-danio').addEventListener('click', function() { v1 = v1 - 15; d1Actualizar(); });
  document.getElementById('d1-reset').addEventListener('click', function() { v1 = 100; d1Actualizar(); });
  d1Actualizar();
</script>
</body>
</html>
`,
          code: "// =====================================================\n// Sistema de Vida v2 — completa los espacios en blanco\n// =====================================================\n\nlet vida = 100;\n\nconst numVida   = document.querySelector('#num-vida');\nconst barraFill = document.querySelector('#barra-fill');\nconst gameOver  = document.querySelector('#game-over');\nconst btnCurar  = document.querySelector('#btn-curar');\nconst btnDanio  = document.querySelector('#btn-danio');\nconst btnReset  = document.querySelector('#btn-reset');\n\nfunction actualizar() {\n  if (vida < 0)   vida = 0;\n  if (vida > )   vida = 100;            // ¿límite superior?\n\n  numVida.textContent = vida;\n  barraFill.style.width = vida + '%';\n\n  if (vida > 60) {\n    barraFill.style.background = '#3fb950';\n  } else if (vida > ) {                  // ¿umbral medio?\n    barraFill.style.background = '#d29922';\n  } else {\n    barraFill.style.background = '#f85149';\n  }\n\n  if (vida ===  ) {                       // ¿condición de game over?\n    gameOver.textContent = '💀 GAME OVER';\n  } else {\n    gameOver.textContent = '';\n  }\n}\n\nbtnCurar.addEventListener('click', function() {\n  vida = vida + ;                         // ¿cuánto cura?\n  ();                                     // ¿qué función llamamos?\n});\n\nbtnDanio.addEventListener('click', function() {\n  vida = vida - 15;\n  actualizar();\n});\n\nbtnReset.addEventListener('click', function() {\n  vida = ;                                // ¿valor inicial?\n  actualizar();\n});\n\nactualizar();",
          codeRef: "// =====================================================\n// Sistema de Vida v2 — VERSIÓN COMPLETA\n// =====================================================\n\nlet vida = 100;\n\nconst numVida   = document.querySelector('#num-vida');\nconst barraFill = document.querySelector('#barra-fill');\nconst gameOver  = document.querySelector('#game-over');\nconst btnCurar  = document.querySelector('#btn-curar');\nconst btnDanio  = document.querySelector('#btn-danio');\nconst btnReset  = document.querySelector('#btn-reset');\n\nfunction actualizar() {\n  if (vida < 0)   vida = 0;\n  if (vida > 100) vida = 100;\n\n  numVida.textContent = vida;\n  barraFill.style.width = vida + '%';\n\n  if (vida > 60) {\n    barraFill.style.background = '#3fb950';\n  } else if (vida > 30) {\n    barraFill.style.background = '#d29922';\n  } else {\n    barraFill.style.background = '#f85149';\n  }\n\n  if (vida === 0) {\n    gameOver.textContent = '💀 GAME OVER';\n  } else {\n    gameOver.textContent = '';\n  }\n}\n\nbtnCurar.addEventListener('click', function() {\n  vida = vida + 10;\n  actualizar();\n});\n\nbtnDanio.addEventListener('click', function() {\n  vida = vida - 15;\n  actualizar();\n});\n\nbtnReset.addEventListener('click', function() {\n  vida = 100;\n  actualizar();\n});\n\nactualizar();",
          product: "Sistema de Vida v2 funcionando en el sitio Resident Evil — barra de vida con cambio de color, 3 botones (curar/dañar/resetear), GAME OVER al llegar a 0. Captura del sitio mostrando vida media (amarillo). Subir a Classroom.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta hora es de NIVELACIÓN. Asume que la mitad del grupo NO tiene el sistema funcionando (duales que llegan + los que se atoraron en W13). Pasos prácticos:\n• Mostrar el demo del diagrama PRIMERO — eso da la motivación y deja claro a qué se llega.\n• Construir paso a paso EN PIZARRA — html, css, js cada uno con su tiempo.\n• Hacer pausas para que verifiquen que su barra arranque al 100%.\n• Quienes ya tenían el código del jueves: tarea pasiva — comentarlo y verificar que funciona. Mientras los demás avanzan, ellos repasan.\nAl final de la hora, hacer ronda rápida: cada alumno dice 'mi vida arranca en X y baja a Y al dar daño'. Si alguien no llegó, identifica el error con el de al lado."
        },
        {
          time: "Hora 2",
          title: "🧰 Funciones con parámetros — agregar features sin reescribir lógica",
          theory: "📌 EL PROBLEMA QUE TENEMOS\nMira tu código de la H1. ¿Notas algo? Los listeners son MUY similares:\n\n  btnCurar.addEventListener('click', function() {\n    vida = vida + 10;\n    actualizar();\n  });\n\n  btnDanio.addEventListener('click', function() {\n    vida = vida - 15;\n    actualizar();\n  });\n\nCambia 'vida + 10' por 'vida - 15' y ya. Si quisieras agregar 'Poción +50' tendrías que copiar TODO el bloque otra vez. Mal. Esa es la señal de que necesitamos una función.\n\n🧰 FUNCIONES CON PARÁMETROS — LA SOLUCIÓN\nUna función con parámetros recibe valores entre paréntesis cuando la llamas:\n\n  function curar(cantidad) {\n    vida = vida + cantidad;\n    actualizar();\n  }\n\n  curar(10);   // suma 10\n  curar(50);   // suma 50\n  curar(100);  // suma 100\n\nLa palabra 'cantidad' dentro de los paréntesis es el PARÁMETRO — un nombre que toma el valor que le pases al llamar. Es como una variable temporal que solo existe dentro de la función.\n\n📐 LO QUE HACEMOS HOY\n1. Crear función curar(cantidad).\n2. Crear función recibirDanio(cantidad).\n3. Refactorizar los listeners para que solo llamen a esas funciones.\n4. Agregar 2 botones nuevos:\n   • Daño crítico (-40)\n   • Poción mágica (+50)\n   Y verás que NO necesitas reescribir lógica nueva — solo llamas a las funciones existentes con otro número.\n\n💡 EL MOMENTO 'AHA'\nCuando agregues el botón #5 y solo tengas que escribir UNA LÍNEA (curar(50)) en vez de tres, vas a ENTENDER por qué existen los parámetros. Es uno de los conceptos más importantes de toda la programación.\n\n🎁 BONUS — FUNCIONES PUEDEN DEVOLVER VALOR\nUna función puede DEVOLVER un valor con la palabra return:\n\n  function calcularDanio(arma) {\n    if (arma === 'cuchillo') return 5;\n    if (arma === 'pistola')  return 15;\n    if (arma === 'escopeta') return 40;\n    return 0;\n  }\n\n  const danio = calcularDanio('pistola');  // danio = 15\n\nNo lo usamos hoy, pero queda como dato para el viernes/próxima semana.",
          notebook: "Título: Funciones con parámetros.\n1. ¿Qué es un parámetro en una función?\n2. ¿Cuál es la diferencia entre 'function curar()' y 'function curar(cantidad)'?\n3. Si llamas curar(25), ¿qué valor toma la variable 'cantidad' dentro de la función?\n4. Antes del refactor, ¿cuántas líneas tenía cada listener? Después del refactor, ¿cuántas?\n5. Da 3 ejemplos de cuándo conviene usar parámetros en lugar de valores fijos.\n6. ¿Qué ventaja tiene agregar un botón nuevo con funciones vs sin funciones?",
          practice: "🛠️ REFACTOR + EXTENSIÓN\n\nPaso 1 — Crear las dos nuevas funciones (después de la función actualizar()):\n\n```js\n// Función con parámetro: recibe cuánto curar\nfunction curar(cantidad) {\n  vida = vida + cantidad;\n  actualizar();\n}\n\n// Función con parámetro: recibe cuánto daño hacer\nfunction recibirDanio(cantidad) {\n  vida = vida - cantidad;\n  actualizar();\n}\n```\n\nPaso 2 — Refactorizar los 3 listeners existentes para que usen las funciones:\n\n```js\nbtnCurar.addEventListener('click', function() {\n  curar(10);          // ← antes era: vida = vida + 10; actualizar();\n});\n\nbtnDanio.addEventListener('click', function() {\n  recibirDanio(15);   // ← antes era: vida = vida - 15; actualizar();\n});\n\nbtnReset.addEventListener('click', function() {\n  vida = 100;\n  actualizar();\n});\n```\n\nPaso 3 — Agregar 2 botones nuevos al HTML (junto a los otros):\n\n```html\n<button id=\"btn-critico\">⚔️ Daño crítico (-40)</button>\n<button id=\"btn-pocion\">🧪 Poción mágica (+50)</button>\n```\n\nPaso 4 — Conectar los 2 botones nuevos en el JS (al final, antes de actualizar()):\n\n```js\nconst btnCritico = document.querySelector('#btn-critico');\nconst btnPocion  = document.querySelector('#btn-pocion');\n\nbtnCritico.addEventListener('click', function() {\n  recibirDanio(40);   // ← MISMA FUNCIÓN, otro valor\n});\n\nbtnPocion.addEventListener('click', function() {\n  curar(50);          // ← MISMA FUNCIÓN, otro valor\n});\n```\n\n🎯 EL PUNTO PEDAGÓGICO\nFíjate que los 2 botones nuevos se agregaron con UNA LÍNEA cada uno. NO tuviste que reescribir la lógica de 'vida = vida + ...' ni el 'actualizar()'. Esa es la magia de las funciones con parámetros.\n\nPaso 5 — Probar:\n• Curar normal +10, Curar mágica +50.\n• Daño normal -15, Daño crítico -40 (dos críticos seguidos te mandan al rojo).\n• Mezcla los botones libremente — todo debe funcionar consistentemente.\n\n🚀 RETO OPCIONAL — agregar un 6° botón 'Suero milagroso' que cure 999 (lo cual quedará limitado a 100 por la función actualizar()). Con UNA LÍNEA: curar(999).",
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

  .panel-vida-demo { background: linear-gradient(180deg, #1a1a1a, #0a0a0a); color: #fff; padding: 22px; border-radius: 10px; border: 2px solid #333; }
  .panel-vida-demo h4 { font-size: 17px; margin-bottom: 14px; color: #f7df1e; }
  .barra-fondo { background: #333; height: 22px; border-radius: 11px; overflow: hidden; margin: 12px 0; }
  #d2-barra { background: #3fb950; height: 100%; width: 100%; transition: all 0.4s; }
  .vida-text { font-size: 14px; margin: 8px 0; font-family: 'Consolas',monospace; }
  .vida-text span { color: #3fb950; font-weight: bold; font-size: 18px; }
  .btn-demo { padding: 8px 12px; margin: 3px 2px; border: none; border-radius: 6px; cursor: pointer; font-weight: 700; font-size: 11px; color: white; transition: transform 0.1s; }
  .btn-demo:hover { transform: scale(1.05); }
  .btn-curar  { background: #3fb950; }
  .btn-pocion { background: #6a9955; }
  .btn-danio  { background: #f85149; }
  .btn-crit   { background: #8b0000; }
  .btn-reset  { background: #58a6ff; }
  #d2-gameover { color: #f85149; font-size: 22px; font-weight: 900; text-align: center; margin-top: 14px; text-shadow: 0 0 10px #f85149; min-height: 28px; }

  .code { font-family: 'Consolas',monospace; font-size: 11.5px; background: #0d1117; border: 1px solid #21262d; border-radius: 6px; padding: 12px; color: #e6edf3; line-height: 1.65; overflow-x: auto; white-space: pre; }
  .c-com { color: #6e7681; font-style: italic; }
  .c-key { color: #ff7b72; }
  .c-fn  { color: #d2a8ff; }
  .c-str { color: #a5d6ff; }
  .c-prop { color: #79c0ff; }
  .c-num { color: #f7df1e; }
  .c-param { color: #ffa657; }
  .note { background: #1a1f29; border-left: 3px solid #f7df1e; padding: 10px 12px; font-size: 11px; color: #8b949e; margin-top: 12px; border-radius: 0 4px 4px 0; line-height: 1.6; }
  .note strong { color: #e6edf3; }
</style>
</head>
<body>
<h2>🧰 Funciones con parámetros — 5 botones, UNA función curar() y UNA recibirDanio()</h2>

<div class="layout">

  <div class="panel">
    <h3>🎮 5 botones, comportamiento distinto, MISMA función</h3>
    <div class="panel-vida-demo">
      <h4>🦹 Leon S. Kennedy</h4>
      <div class="barra-fondo"><div id="d2-barra"></div></div>
      <div class="vida-text">❤️ Vida: <span id="d2-num">100</span> / 100</div>
      <button id="d2-curar"  class="btn-demo btn-curar">💊 Curar (+10)</button>
      <button id="d2-pocion" class="btn-demo btn-pocion">🧪 Poción (+50)</button>
      <br>
      <button id="d2-danio"  class="btn-demo btn-danio">💥 Daño (-15)</button>
      <button id="d2-crit"   class="btn-demo btn-crit">⚔️ Crítico (-40)</button>
      <br>
      <button id="d2-reset"  class="btn-demo btn-reset">🔄 Resetear</button>
      <div id="d2-gameover"></div>
    </div>
    <div class="note">
      ↑ Prueba <strong>Poción</strong> y <strong>Crítico</strong>. Esos 2 botones nuevos se agregaron con UNA LÍNEA de código cada uno gracias a las funciones con parámetros.
    </div>
  </div>

  <div class="panel">
    <h3>⚡ El código — funciones reutilizables</h3>
    <div class="code">
<span class="c-com">// Las DOS funciones con parámetro</span>
<span class="c-key">function</span> <span class="c-fn">curar</span>(<span class="c-param">cantidad</span>) {
  vida = vida + <span class="c-param">cantidad</span>;
  <span class="c-fn">actualizar</span>();
}

<span class="c-key">function</span> <span class="c-fn">recibirDanio</span>(<span class="c-param">cantidad</span>) {
  vida = vida - <span class="c-param">cantidad</span>;
  <span class="c-fn">actualizar</span>();
}

<span class="c-com">// Los 5 listeners — UNA LÍNEA cada uno</span>
btnCurar.<span class="c-fn">addEventListener</span>(<span class="c-str">'click'</span>, () =&gt; <span class="c-fn">curar</span>(<span class="c-num">10</span>));
btnPocion.<span class="c-fn">addEventListener</span>(<span class="c-str">'click'</span>, () =&gt; <span class="c-fn">curar</span>(<span class="c-num">50</span>));
btnDanio.<span class="c-fn">addEventListener</span>(<span class="c-str">'click'</span>, () =&gt; <span class="c-fn">recibirDanio</span>(<span class="c-num">15</span>));
btnCrit.<span class="c-fn">addEventListener</span>(<span class="c-str">'click'</span>, () =&gt; <span class="c-fn">recibirDanio</span>(<span class="c-num">40</span>));
    </div>
    <div class="note">
      <strong>El momento "aha":</strong> agregar el 6° botón solo requiere UNA línea. <code style="color:#79c0ff;font-family:monospace;">curar(999)</code> ya está. Esa es la potencia de los parámetros.
    </div>
  </div>

</div>

<script>
  var v2 = 100;
  var d2Num = document.getElementById('d2-num');
  var d2Barra = document.getElementById('d2-barra');
  var d2GameOver = document.getElementById('d2-gameover');

  function d2Actualizar() {
    if (v2 < 0) v2 = 0;
    if (v2 > 100) v2 = 100;
    d2Num.textContent = v2;
    d2Barra.style.width = v2 + '%';
    if (v2 > 60)      d2Barra.style.background = '#3fb950';
    else if (v2 > 30) d2Barra.style.background = '#d29922';
    else              d2Barra.style.background = '#f85149';
    d2GameOver.textContent = (v2 === 0) ? '💀 GAME OVER' : '';
  }

  function d2Curar(cantidad)   { v2 = v2 + cantidad; d2Actualizar(); }
  function d2RecibirDanio(c)   { v2 = v2 - c;        d2Actualizar(); }

  document.getElementById('d2-curar').addEventListener('click',  function() { d2Curar(10); });
  document.getElementById('d2-pocion').addEventListener('click', function() { d2Curar(50); });
  document.getElementById('d2-danio').addEventListener('click',  function() { d2RecibirDanio(15); });
  document.getElementById('d2-crit').addEventListener('click',   function() { d2RecibirDanio(40); });
  document.getElementById('d2-reset').addEventListener('click',  function() { v2 = 100; d2Actualizar(); });
  d2Actualizar();
</script>
</body>
</html>
`,
          code: "// =====================================================\n// Funciones con parámetros — completa los blancos\n// =====================================================\n\n// (Asume que ya tienes vida, querySelectors y función actualizar() del H1)\n\n// 1. Crear las funciones con parámetro\nfunction curar(cantidad) {\n  vida = vida + ;          // ¿qué sumamos a vida?\n  actualizar();\n}\n\nfunction recibirDanio(cantidad) {\n  vida = vida -  ;         // ¿qué restamos?\n  actualizar();\n}\n\n// 2. Refactorizar listeners existentes\nbtnCurar.addEventListener('click', function() {\n  (10);                   // ¿qué función llamamos?\n});\n\nbtnDanio.addEventListener('click', function() {\n  recibirDanio( );        // ¿cuánto daño?\n});\n\n// 3. Conectar botones nuevos (necesitas querySelectors antes)\nconst btnCritico = document.querySelector('#btn-critico');\nconst btnPocion  = document.querySelector('#btn-pocion');\n\nbtnCritico.addEventListener('click', function() {\n  recibirDanio(40);\n});\n\nbtnPocion.addEventListener('click', function() {\n  curar( );              // ¿cuánto cura la poción?\n});",
          codeRef: "// =====================================================\n// Funciones con parámetros — VERSIÓN COMPLETA\n// =====================================================\n\nfunction curar(cantidad) {\n  vida = vida + cantidad;\n  actualizar();\n}\n\nfunction recibirDanio(cantidad) {\n  vida = vida - cantidad;\n  actualizar();\n}\n\nbtnCurar.addEventListener('click', function() {\n  curar(10);\n});\n\nbtnDanio.addEventListener('click', function() {\n  recibirDanio(15);\n});\n\nconst btnCritico = document.querySelector('#btn-critico');\nconst btnPocion  = document.querySelector('#btn-pocion');\n\nbtnCritico.addEventListener('click', function() {\n  recibirDanio(40);\n});\n\nbtnPocion.addEventListener('click', function() {\n  curar(50);\n});",
          product: "Sistema de Vida con 5 botones funcionando: Curar +10, Poción +50, Daño -15, Crítico -40, Resetear. Demostrar que agregar un 6° botón solo requiere una línea (escribir el reto del Suero +999 en libreta).",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: ESTA hora es donde aterriza el concepto de PARÁMETROS — uno de los más fundamentales de toda la programación. Pasos pedagógicos:\n\n1. Mostrar PRIMERO el diagrama. Que toquen los 5 botones del demo. Que vean que Poción y Crítico hacen lo mismo que los otros pero con otro número.\n2. En su código: identificar la repetición primero. 'Mira las dos líneas vida = vida + 10 y vida = vida - 15. Casi idénticas.' Que ELLOS lo digan.\n3. Introducir el parámetro como 'el número que va dentro de los paréntesis es como un casillero — toma el valor que le pases al llamar'.\n4. El reto del 6° botón es ORO didáctico: 'agreguen Suero milagroso +999 en UNA línea'. Cuando lo hagan, hacer pausa. Recalcar: 'Antes hubiera sido un bloque de 3 líneas. Ahora es 1. Eso es el poder de las funciones con parámetros.'\n5. Errores típicos:\n   • Olvidar el parámetro en la declaración: function curar() { vida = vida + cantidad; } → cantidad no existe.\n   • Cambiar el nombre del parámetro y luego usar otro adentro: function curar(x) { vida = vida + cantidad; } → cantidad no está definida.\n   • Pasar string en vez de número: curar('10') → concatena en vez de sumar."
        },
        {
          time: "Hora 3",
          title: "🧟 setInterval — el zombi ataca solo cada cierto tiempo",
          theory: "🕐 EL TIEMPO EN JAVASCRIPT\nHasta ahora todo el código se ejecuta cuando ocurre un evento (click, mouseover...) o al cargar la página. Hoy aprendemos a que algo pase SOLO cada cierto tiempo, sin que el usuario haga nada.\n\nEso lo logra setInterval.\n\n📐 setInterval — LA SINTAXIS\nsetInterval(función, milisegundos) — ejecuta la función UNA Y OTRA VEZ con un intervalo de X milisegundos.\n\n  setInterval(function() {\n    console.log('Pasó un segundo');\n  }, 1000);   // 1000 ms = 1 segundo\n\nEsto imprime 'Pasó un segundo' cada segundo, para siempre.\n\n💡 IMPORTANTE — setInterval DEVUELVE UN ID\nCuando creas un interval, devuelve un identificador. Lo guardamos en una variable porque después lo necesitaremos para DETENERLO:\n\n  let miInterval = setInterval(function() { ... }, 3000);\n\n🛑 clearInterval — PARA DETENERLO\n  clearInterval(miInterval);   // detiene ese interval específico\n\nSin clearInterval, el setInterval corre HASTA QUE recargas la página. Es importante poder pararlo.\n\n🧟 LO QUE HACEMOS HOY\nAgregamos al Sistema de Vida:\n• Un botón 'Aparece un zombi' que inicia el ataque.\n• Una variable zombiInterval para guardar el ID del setInterval.\n• Cada 3 segundos, el zombi te quita 8 puntos de vida (llamando a recibirDanio(8) de la H2).\n• Un botón 'Huir' que detiene el ataque con clearInterval.\n• Un texto de alerta visible: '🧟 Un zombi te muerde'.\n\n🎮 ESTO ES UN JUEGO DE VERDAD\nPor primera vez, el sitio HACE algo solo. La vida baja sin que nadie haga clic. Tienen que reaccionar — curarse rápido, o huir. Es el momento en que JavaScript deja de ser 'el lenguaje que ejecuta cuando hago algo' y se vuelve 'el lenguaje que controla un mundo vivo'.\n\n⚠️ CUIDADO con MULTIPLES INTERVALS\nSi presionan 'Aparece zombi' varias veces sin huir, se acumulan varios intervals corriendo a la vez (cada uno restando 8 cada 3s). Para evitarlo, antes de crear uno nuevo, podemos verificar si ya existe.",
          notebook: "Título: setInterval — el tiempo en JS.\n1. ¿Qué hace setInterval?\n2. ¿Qué unidad usan los milisegundos? ¿Cuántos ms son 5 segundos?\n3. ¿Por qué setInterval devuelve un valor que guardamos en una variable?\n4. ¿Qué hace clearInterval?\n5. ¿Qué pasa si presionas 'Aparece zombi' 3 veces seguidas sin huir?\n6. Reflexión: nombra 3 cosas en una página real que usen setInterval (animaciones, relojes, etc.).",
          practice: "🧟 EL ZOMBI APARECE\n\nPaso 1 — Agregar al HTML (al final de los botones):\n\n```html\n<div class=\"zombi-zone\">\n  <button id=\"btn-zombi\">🧟 Aparece un zombi</button>\n  <button id=\"btn-huir\">🏃 Huir</button>\n  <p id=\"alerta-zombi\"></p>\n</div>\n```\n\nPaso 2 — CSS opcional para que se vea distinto:\n\n```css\n.zombi-zone { margin-top: 16px; padding-top: 12px; border-top: 1px solid #444; }\n#btn-zombi { background: #8b0000; }\n#btn-huir  { background: #d29922; }\n#alerta-zombi { color: #ff6b6b; font-weight: bold; margin-top: 8px; min-height: 20px; }\n```\n\nPaso 3 — JavaScript (al final de tu script.js):\n\n```js\n// =====================================================\n// El zombi ataca — DEWE Semana 14 Hora 3\n// =====================================================\n\nconst btnZombi  = document.querySelector('#btn-zombi');\nconst btnHuir   = document.querySelector('#btn-huir');\nconst alerta    = document.querySelector('#alerta-zombi');\n\n// Variable global para guardar el ID del intervalo\nlet zombiInterval = null;\n\nbtnZombi.addEventListener('click', function() {\n  // Evitar que se cree un segundo zombi si ya hay uno\n  if (zombiInterval !== null) return;\n\n  alerta.textContent = '🧟 ¡Un zombi te ataca! Corre o cúrate.';\n\n  // El zombi muerde cada 3 segundos\n  zombiInterval = setInterval(function() {\n    recibirDanio(8);   // ← REUSAMOS la función de la H2\n    console.log('🧟 Mordida. Vida: ' + vida);\n  }, 3000);\n});\n\nbtnHuir.addEventListener('click', function() {\n  if (zombiInterval === null) {\n    alerta.textContent = 'No hay zombis cerca.';\n    return;\n  }\n  clearInterval(zombiInterval);\n  zombiInterval = null;   // resetear para poder volver a invocar\n  alerta.textContent = '🏃 Lograste huir. Por ahora.';\n});\n```\n\nPaso 4 — Probar:\n• Click en 'Aparece un zombi' → cada 3 segundos pierdes 8 de vida.\n• Mientras tanto, puedes seguir usando Curar/Poción para resistir.\n• Si la vida llega a 0 → GAME OVER (gracias a la función actualizar de la H1).\n• Click en 'Huir' → el ataque se detiene.\n• Vuelves a clickar 'Zombi' → empieza otra ronda.\n\n🎯 RETO FINAL DEL SEMESTRE\nIntentar sobrevivir 30 segundos contra el zombi usando solo el botón Curar (+10). Hay que clickar rápido — el zombi quita 8 cada 3s, tú curas 10 al instante. Pero si lo clickeas muy seguido tu vida no pasa de 100. Estrategia.\n\n🚀 BONUS — agregar un segundo zombi MÁS RÁPIDO (cada 1.5s pero -5) — combinándolos hace la dificultad real.",
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

  .panel-vida-demo { background: linear-gradient(180deg, #1a1a1a, #0a0a0a); color: #fff; padding: 22px; border-radius: 10px; border: 2px solid #333; }
  .panel-vida-demo h4 { font-size: 17px; margin-bottom: 14px; color: #f7df1e; }
  .barra-fondo { background: #333; height: 22px; border-radius: 11px; overflow: hidden; margin: 12px 0; }
  #d3-barra { background: #3fb950; height: 100%; width: 100%; transition: all 0.4s; }
  .vida-text { font-size: 14px; margin: 8px 0; font-family: 'Consolas',monospace; }
  .vida-text span { color: #3fb950; font-weight: bold; font-size: 18px; }
  .btn-demo { padding: 8px 12px; margin: 3px 2px; border: none; border-radius: 6px; cursor: pointer; font-weight: 700; font-size: 11px; color: white; transition: transform 0.1s; }
  .btn-demo:hover { transform: scale(1.05); }
  .btn-curar { background: #3fb950; }
  .btn-zombi { background: #8b0000; }
  .btn-huir  { background: #d29922; }
  .btn-reset { background: #58a6ff; }
  #d3-gameover { color: #f85149; font-size: 22px; font-weight: 900; text-align: center; margin-top: 14px; text-shadow: 0 0 10px #f85149; min-height: 28px; }
  .zombi-zone { margin-top: 14px; padding-top: 12px; border-top: 1px solid #444; }
  #d3-alerta { color: #ff6b6b; font-weight: bold; font-size: 12px; margin-top: 8px; min-height: 18px; }

  .code { font-family: 'Consolas',monospace; font-size: 11.5px; background: #0d1117; border: 1px solid #21262d; border-radius: 6px; padding: 12px; color: #e6edf3; line-height: 1.65; overflow-x: auto; white-space: pre; }
  .c-com { color: #6e7681; font-style: italic; }
  .c-key { color: #ff7b72; }
  .c-fn  { color: #d2a8ff; }
  .c-str { color: #a5d6ff; }
  .c-num { color: #f7df1e; }
  .c-param { color: #ffa657; }
  .note { background: #1a1f29; border-left: 3px solid #f7df1e; padding: 10px 12px; font-size: 11px; color: #8b949e; margin-top: 12px; border-radius: 0 4px 4px 0; line-height: 1.6; }
  .note strong { color: #e6edf3; }
</style>
</head>
<body>
<h2>🧟 El zombi ataca SOLO — setInterval en vivo</h2>

<div class="layout">

  <div class="panel">
    <h3>🎮 Sobrevive — el zombi muerde cada 1.5 segundos</h3>
    <div class="panel-vida-demo">
      <h4>🦹 Leon S. Kennedy</h4>
      <div class="barra-fondo"><div id="d3-barra"></div></div>
      <div class="vida-text">❤️ Vida: <span id="d3-num">100</span> / 100</div>
      <button id="d3-curar" class="btn-demo btn-curar">💊 Curar (+10)</button>
      <button id="d3-reset" class="btn-demo btn-reset">🔄 Resetear</button>
      <div class="zombi-zone">
        <button id="d3-zombi" class="btn-demo btn-zombi">🧟 Aparece un zombi</button>
        <button id="d3-huir"  class="btn-demo btn-huir">🏃 Huir</button>
        <p id="d3-alerta"></p>
      </div>
      <div id="d3-gameover"></div>
    </div>
    <div class="note">
      ↑ Click <strong>🧟 Aparece un zombi</strong>. La vida bajará SOLA. Cura rápido o huye. Es el primer JS que actúa por su cuenta sin que tú hagas clic.
    </div>
  </div>

  <div class="panel">
    <h3>⚡ setInterval + clearInterval</h3>
    <div class="code">
<span class="c-com">// Variable para guardar el ID del intervalo</span>
<span class="c-key">let</span> zombiInterval = <span class="c-key">null</span>;

btnZombi.<span class="c-fn">addEventListener</span>(<span class="c-str">'click'</span>, <span class="c-key">function</span>() {
  <span class="c-com">// Evitar duplicados</span>
  <span class="c-key">if</span> (zombiInterval !== <span class="c-key">null</span>) <span class="c-key">return</span>;

  <span class="c-com">// El zombi muerde cada 3 segundos (3000 ms)</span>
  zombiInterval = <span class="c-fn">setInterval</span>(<span class="c-key">function</span>() {
    <span class="c-fn">recibirDanio</span>(<span class="c-num">8</span>);
  }, <span class="c-num">3000</span>);
});

btnHuir.<span class="c-fn">addEventListener</span>(<span class="c-str">'click'</span>, <span class="c-key">function</span>() {
  <span class="c-fn">clearInterval</span>(zombiInterval);
  zombiInterval = <span class="c-key">null</span>;
});
    </div>
    <div class="note">
      <strong>Reutilización:</strong> el zombi solo llama <code style="color:#79c0ff;font-family:monospace;">recibirDanio(8)</code> — la función con parámetro que hicimos en la H2. NO duplica lógica. El sistema crece sin reescribirse.
    </div>
  </div>

</div>

<script>
  var v3 = 100;
  var d3Num = document.getElementById('d3-num');
  var d3Barra = document.getElementById('d3-barra');
  var d3GameOver = document.getElementById('d3-gameover');
  var d3Alerta = document.getElementById('d3-alerta');
  var d3ZombiInterval = null;

  function d3Actualizar() {
    if (v3 < 0) v3 = 0;
    if (v3 > 100) v3 = 100;
    d3Num.textContent = v3;
    d3Barra.style.width = v3 + '%';
    if (v3 > 60)      d3Barra.style.background = '#3fb950';
    else if (v3 > 30) d3Barra.style.background = '#d29922';
    else              d3Barra.style.background = '#f85149';
    if (v3 === 0) {
      d3GameOver.textContent = '💀 GAME OVER';
      if (d3ZombiInterval !== null) {
        clearInterval(d3ZombiInterval);
        d3ZombiInterval = null;
        d3Alerta.textContent = '';
      }
    } else {
      d3GameOver.textContent = '';
    }
  }

  function d3Curar(cantidad) { v3 = v3 + cantidad; d3Actualizar(); }
  function d3RecibirDanio(c) { v3 = v3 - c; d3Actualizar(); }

  document.getElementById('d3-curar').addEventListener('click', function() { d3Curar(10); });
  document.getElementById('d3-reset').addEventListener('click', function() {
    v3 = 100;
    if (d3ZombiInterval !== null) {
      clearInterval(d3ZombiInterval);
      d3ZombiInterval = null;
    }
    d3Alerta.textContent = '';
    d3Actualizar();
  });
  document.getElementById('d3-zombi').addEventListener('click', function() {
    if (d3ZombiInterval !== null) return;
    d3Alerta.textContent = '🧟 ¡Un zombi te ataca! Corre o cúrate.';
    d3ZombiInterval = setInterval(function() {
      d3RecibirDanio(8);
    }, 1500);
  });
  document.getElementById('d3-huir').addEventListener('click', function() {
    if (d3ZombiInterval === null) {
      d3Alerta.textContent = 'No hay zombis cerca.';
      return;
    }
    clearInterval(d3ZombiInterval);
    d3ZombiInterval = null;
    d3Alerta.textContent = '🏃 Lograste huir. Por ahora.';
  });
  d3Actualizar();
</script>
</body>
</html>
`,
          code: "// =====================================================\n// El zombi ataca — completa los blancos\n// =====================================================\n\nconst btnZombi = document.querySelector('#btn-zombi');\nconst btnHuir  = document.querySelector('#btn-huir');\nconst alerta   = document.querySelector('#alerta-zombi');\n\nlet zombiInterval = null;\n\nbtnZombi.addEventListener('click', function() {\n  if (zombiInterval !== null) return;\n  alerta.textContent = '🧟 ¡Un zombi te ataca!';\n\n  zombiInterval = setInterval(function() {\n    recibirDanio( );           // ¿cuánto daño hace?\n  },  );                       // ¿cada cuántos ms? (3 segundos)\n});\n\nbtnHuir.addEventListener('click', function() {\n  if (zombiInterval === null) return;\n   (zombiInterval);            // ¿qué función detiene el intervalo?\n  zombiInterval = null;\n  alerta.textContent = '🏃 Lograste huir.';\n});",
          codeRef: "// =====================================================\n// El zombi ataca — VERSIÓN COMPLETA\n// =====================================================\n\nconst btnZombi = document.querySelector('#btn-zombi');\nconst btnHuir  = document.querySelector('#btn-huir');\nconst alerta   = document.querySelector('#alerta-zombi');\n\nlet zombiInterval = null;\n\nbtnZombi.addEventListener('click', function() {\n  if (zombiInterval !== null) return;\n  alerta.textContent = '🧟 ¡Un zombi te ataca! Corre o cúrate.';\n\n  zombiInterval = setInterval(function() {\n    recibirDanio(8);\n    console.log('🧟 Mordida. Vida: ' + vida);\n  }, 3000);\n});\n\nbtnHuir.addEventListener('click', function() {\n  if (zombiInterval === null) {\n    alerta.textContent = 'No hay zombis cerca.';\n    return;\n  }\n  clearInterval(zombiInterval);\n  zombiInterval = null;\n  alerta.textContent = '🏃 Lograste huir. Por ahora.';\n});",
          product: "Mini-juego completo en el sitio Resident Evil: vida + 5 botones de la H2 + zombi que ataca solo cada 3s + botón de huir. Captura mostrando vida bajando sola con el mensaje del zombi visible. Subir a Classroom. CIERRE DEL SEMESTRE.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: ESTE es EL momento del semestre. La primera vez que el sitio actúa SOLO sin esperar al usuario es un parteaguas mental. Pasos:\n\n1. Mostrar el demo PRIMERO. Que jueguen 3 minutos contra el zombi del diagrama. Que pierdan, ganen, huyan.\n2. Explicar setInterval con la analogía del despertador: 'cada cuántos minutos suena, hasta que lo apagues'.\n3. La parte del 'evitar duplicados' (if zombiInterval !== null) es importante — sin ella, presionar el botón 5 veces crea 5 zombis simultáneos. Demostrarlo es divertido.\n4. Recalcar la reutilización de recibirDanio(8) — el zombi no escribe lógica nueva, USA lo que hicieron en la H2.\n\nRETO DE CIERRE DEL SEMESTRE: 'Sobrevive 30 segundos contra el zombi usando solo Curar +10'. Quien lo logre, presenta su estrategia.\n\nAl FIN DE LA HORA: hacer una reflexión rápida. '¿Qué sabías de JavaScript hace 4 semanas? ¿Y ahora?'. La diferencia entre el alumno de hoy y el de la W11 (donde apenas escribía console.log) es enorme. Es justo cierre del semestre.\n\nErrores típicos:\n• Olvidar guardar el ID del setInterval → no se puede detener.\n• Pasar la función con paréntesis: setInterval(recibirDanio(8), 3000) — eso EJECUTA recibirDanio(8) UNA VEZ inmediatamente, no cada 3s. La sintaxis correcta es setInterval(function() { recibirDanio(8); }, 3000).\n• No limpiar zombiInterval = null después de clearInterval — el botón de aparecer ya no funcionará (la verificación falla)."
        }
      ],
      cierre: "Cierre del semestre. Tres horas, tres saltos: nivelaron a todos en el Sistema de Vida, descubrieron las funciones con parámetros como herramienta de no-repetición, y vieron por primera vez código que se ejecuta solo en el tiempo. El sitio ya no es una página — es un mundo vivo.",
      frase_docente: "Cuando la página actúa sin que tú la toques, ya estás programando juegos."
    },
    {
      id: "thu",
      label: "Jueves — 🚀 Inicio del proyecto del Maestro Guarneros — sitio desde cero",
      purpose: "Arrancar el proyecto integrador asignado por el Maestro Guarneros. Cada alumno construye su propio sitio web desde cero — HTML, CSS y JS — aplicando TODO lo aprendido en el semestre. El tema específico del sitio se definirá según las indicaciones del Maestro Guarneros (pendiente al momento de planear).",
      hours: [
        {
          time: "Hora 1",
          title: "🚀 Arranque del proyecto — definición del tema y estructura HTML",
          theory: "🎯 ESTE ES EL PROYECTO INTEGRADOR\nEl Maestro Guarneros indica el tema del sitio. Cada alumno construye SU propio sitio desde cero — no es una copia del Resident Evil que veníamos usando como playground.\n\n📋 LO QUE APLICAN DEL SEMESTRE\nTodo lo que hemos hecho desde la W05:\n• HTML semántico (header, nav, section, article, footer)\n• CSS para diseño completo (selectores, flex, grid, colores, tipografía)\n• JavaScript: variables, funciones, DOM, eventos, setInterval (W11-W14)\n\n📁 ESTRUCTURA DE CARPETAS QUE YA CONOCEN\n  mi-proyecto-guarneros/\n  ├── index.html\n  ├── css/\n  │   └── style.css\n  └── js/\n      └── script.js\n\n📝 PASOS DEL ARRANQUE\n1. Definir el tema del sitio (según indicación del Maestro Guarneros).\n2. Hacer un boceto rápido en libreta: ¿qué secciones tendrá?\n3. Crear la carpeta del proyecto + estructura básica.\n4. Escribir el HTML base con secciones vacías.\n\n💡 PARA EL DOCENTE\nEste contenido es ESQUEMÁTICO. El tema y los requisitos los define el Maestro Guarneros. Cuando se confirme, esta hora se actualizará con detalles específicos.",
          notebook: "Título: Arranque del proyecto Guarneros.\n1. ¿Cuál es el tema del sitio que vas a construir?\n2. Dibuja un boceto rápido: ¿qué secciones tendrá tu sitio?\n3. Lista los archivos y carpetas que necesitas crear.\n4. ¿Qué elementos HTML semánticos usarás en cada sección?",
          practice: "📂 SETUP INICIAL — paso a paso (independiente del tema):\n\nPaso 1 — Crear la carpeta del proyecto.\n  mi-proyecto-guarneros/\n\nPaso 2 — Crear las subcarpetas y archivos vacíos:\n  mi-proyecto-guarneros/\n  ├── index.html\n  ├── css/style.css\n  └── js/script.js\n\nPaso 3 — Escribir el HTML base mínimo en index.html:\n\n```html\n<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>[Tu tema aquí]</title>\n  <link rel=\"stylesheet\" href=\"css/style.css\">\n  <script src=\"js/script.js\" defer></script>\n</head>\n<body>\n  <header>\n    <h1>[Título del sitio]</h1>\n    <nav>\n      <a href=\"#inicio\">Inicio</a>\n      <a href=\"#contenido\">Contenido</a>\n      <a href=\"#contacto\">Contacto</a>\n    </nav>\n  </header>\n\n  <main>\n    <section id=\"inicio\">\n      <h2>Bienvenida</h2>\n      <p>...</p>\n    </section>\n\n    <section id=\"contenido\">\n      <h2>Contenido principal</h2>\n      <p>...</p>\n    </section>\n\n    <section id=\"contacto\">\n      <h2>Contacto</h2>\n      <p>...</p>\n    </section>\n  </main>\n\n  <footer>\n    <p>© 2026 — Proyecto del Maestro Guarneros</p>\n  </footer>\n</body>\n</html>\n```\n\nPaso 4 — Verificar abriendo en el navegador.\n\n⚠️ PENDIENTE: cuando el Maestro Guarneros confirme el tema y requisitos específicos, esta sección se actualiza con el contenido concreto.",
          product: "Carpeta del proyecto creada con estructura completa, HTML base con secciones semánticas y CSS+JS vinculados. Sitio abierto en navegador (vacío pero estructurado).",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta sesión es ESQUEMÁTICA porque el tema lo asigna el Maestro Guarneros. Cuando se confirme:\n• Actualizar el theory con la descripción específica del proyecto.\n• Ajustar las secciones del HTML base al tema.\n• Definir requisitos puntuales (cuántas secciones, qué JS debe tener, paleta de colores).\n• Si el tema involucra interactividad, planear qué features de JS aplicar (Sistema de Vida fue el patrón en W14 — aquí podrían aplicar otro)."
        },
        {
          time: "Hora 2",
          title: "🎨 Maquetación inicial: CSS base + primera estructura visual",
          theory: "🎨 ESTILO BASE\nUna vez con el HTML base armado, le damos la primera capa de estilo. No es el diseño final — es para que el sitio se vea estructurado y legible.\n\n📐 PILARES DEL CSS INICIAL\n• Reset / normalize: márgenes a 0, box-sizing border-box.\n• Tipografía: una fuente principal + tamaños base.\n• Paleta de colores: definir 3-5 colores que respeten el tema.\n• Layout principal: header arriba, main en el centro, footer abajo.\n• Nav: enlaces horizontales con espaciado.\n\n💡 PARA EL DOCENTE\nIgual que la H1, esto es ESQUEMÁTICO. La paleta y el estilo concreto dependen del tema del Maestro Guarneros.",
          notebook: "Título: CSS inicial del proyecto.\n1. ¿Qué paleta de 3-5 colores elegiste? ¿Por qué encajan con el tema?\n2. ¿Qué fuente principal usarás? ¿Sans-serif o serif?\n3. Boceto del layout principal: ¿cómo distribuyes header / main / footer?\n4. ¿Tu sitio tendrá modo oscuro o solo modo claro?",
          practice: "🎨 CSS BASE — punto de partida (ajustar al tema):\n\n```css\n/* Reset básico */\n* { box-sizing: border-box; margin: 0; padding: 0; }\nbody {\n  font-family: 'Segoe UI', system-ui, sans-serif;\n  line-height: 1.6;\n  color: #222;\n  background: #f5f5f5;\n}\n\n/* Header */\nheader {\n  background: #1a1a1a;\n  color: white;\n  padding: 20px;\n  text-align: center;\n}\nheader h1 { font-size: 32px; margin-bottom: 10px; }\nnav a {\n  color: white;\n  margin: 0 12px;\n  text-decoration: none;\n}\nnav a:hover { color: #f7df1e; }\n\n/* Main */\nmain {\n  max-width: 900px;\n  margin: 30px auto;\n  padding: 0 20px;\n}\nsection {\n  background: white;\n  padding: 24px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.05);\n}\nsection h2 {\n  border-bottom: 2px solid #ccc;\n  padding-bottom: 8px;\n  margin-bottom: 12px;\n}\n\n/* Footer */\nfooter {\n  background: #1a1a1a;\n  color: white;\n  text-align: center;\n  padding: 16px;\n  margin-top: 40px;\n}\n```\n\nReto: personalizar la paleta de colores según el tema asignado por el Maestro Guarneros.\n\n⚠️ PENDIENTE: cuando se confirme el tema, este CSS se ajusta con la identidad visual concreta.",
          product: "Sitio del proyecto Guarneros con CSS base aplicado, layout funcional y paleta de colores inicial. Captura del sitio mostrando header/main/footer estructurados.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta sesión también es esquemática. Cuando se defina el tema:\n• Concretar la paleta de colores que combine con el tema.\n• Decidir si el sitio incluye imágenes, videos, interactividad JS.\n• Si involucra JS, planear si reutilizan el patrón del Sistema de Vida o aplican algo nuevo (formularios, galería, etc.).\nIDEA OPCIONAL: si el tema lo permite, los alumnos pueden incluir su mini-juego del lunes como sección 'extra' del sitio."
        }
      ],
      cierre: "Arrancamos el proyecto del Maestro Guarneros. La estructura está, falta el contenido específico que define él.",
      frase_docente: "Todo proyecto grande empieza con una carpeta vacía y un index.html."
    },
    {
      id: "fri",
      label: "Viernes — 🚧 Por planear",
      purpose: "Última sesión del semestre con grupo completo (incluye duales). Probable showcase / exposición de los mini-juegos personales + evaluación final.",
      hours: [
        {
          time: "🚧 Por planear",
          title: "🚧 Sesión por planear",
          theory: "Última sesión del semestre. Direcciones probables:\n\n• Showcase: cada alumno presenta su mini-juego (Sistema de Vida + funciones + zombi) en 2 minutos.\n• Evaluación final: rúbrica del semestre, autoevaluación.\n• Despedida y reflexión sobre lo aprendido.",
          notebook: "Sin libreta — sesión por confirmar.",
          practice: "Sin práctica obligatoria — posible showcase.",
          product: "Por definir.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Última sesión. Asegurar que TODOS los alumnos tengan algún mini-juego que mostrar (aunque sea la versión básica de la H1 del lunes)."
        }
      ],
      cierre: "Sesión por definir — última del semestre.",
      frase_docente: "El semestre que termina es solo el principio del programador."
    }
  ]
};
