export const W11 = {
  materia: "dewe",
  weekId: "W11",
  days: [
    {
      id: "mon",
      label: "Lunes — 🟨 JavaScript desde cero: la consola como laboratorio",
      purpose: "Iniciar formalmente el aprendizaje de JavaScript. El viernes vieron lo que JS puede hacer (modo oscuro, galería, bienvenida) usando IA — hoy abrimos las DevTools y aprenden las primeras instrucciones del lenguaje: console.log, alert y prompt. Las variables, tipos y el primer archivo .js los retomamos en la W12.",
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
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta hora es 100% en la consola del navegador — nadie abre VS Code todavía. Importante: muchos alumnos NUNCA han abierto F12. Dedicar 5 minutos a que lo abran, lo cierren, lo muevan a la derecha. La línea sin comillas (paso 6) genera un ReferenceError — aprovecharla para enseñar que JS distingue palabras del lenguaje vs texto entre comillas. Si alguien pregunta por qué prompt devuelve un valor pero no lo imprime, decir que la próxima clase aprenderemos a guardarlo en una variable (eso ya queda para W12)."
        },
      ],
      cierre: "Diez días le tomó a Brendan Eich crear el lenguaje. Hoy ustedes escribieron las primeras palabras. La diferencia entre ver y entender empieza aquí.",
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
          theory: "Hoy no hay sesión de DEWE. Lo del lunes (consola del navegador con console.log, alert y prompt) es el primer escalón. En la W12 retomamos con variables, tipos y el primer archivo .js conectado al HTML.\n\n📌 RECORDATORIO\nAbre F12 en cualquier página web y practica las 3 instrucciones del lunes. No necesitas instalar nada — la consola siempre está ahí.\n\n📚 REPASO SUGERIDO (OPCIONAL)\n• ¿Qué hace console.log y dónde se ve el resultado?\n• ¿Qué diferencia hay entre alert y prompt?\n• ¿Qué pasa si escribes una palabra sin comillas en la consola?",
          notebook: "Repaso voluntario:\n1. Lista 3 cosas que JavaScript puede hacer en una página web.\n2. ¿Quién creó JavaScript y cuánto tardó?\n3. ¿Qué tecla abre las DevTools en cualquier navegador?",
          practice: "Sin práctica obligatoria. Si quieres, abre F12 en tu navegador y juega con la consola — prueba operaciones matemáticas, prompt() con preguntas raras, alert() con mensajes locos.",
          product: "Sin entregable.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Día sin sesión. Si algún alumno se acerca a preguntar, reforzar que la W12 retomamos con variables y el primer script.js — tener firme la consola del lunes facilita ese arranque."
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
