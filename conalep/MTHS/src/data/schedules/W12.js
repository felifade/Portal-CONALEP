export const W12 = {
  materia: "mths",
  weekId: "W12",
  days: [
    {
      id: "tue",
      label: "Martes — 🔧 Armado del circuito + 💻 Control desde Serial",
      purpose: "Cerrar la práctica que quedó pendiente la semana pasada: armar el circuito físico con LED + resistencia en protoboard siguiendo indicaciones paso a paso, y luego cargar el Programa 03 para controlar ese LED desde el Serial Monitor con los comandos '1', '0' y 'p'.",
      hours: [
        {
          time: "Hora 1",
          title: "🔧 Armado del circuito en protoboard — paso a paso",
          theory: "Hoy nos preparamos para el Programa 03 (Hora 2): armar correctamente un circuito mínimo con un LED controlado por el ESP32. Un circuito bien armado AHORA evita 90% de los problemas DESPUÉS.\n\n🪛 LA PROTOBOARD POR DENTRO (importante)\nLos huecos NO están todos conectados entre sí — hay un patrón eléctrico oculto:\n\n• Filas de los lados (marcadas + y −): son las LÍNEAS DE ALIMENTACIÓN. Cada fila completa está conectada horizontalmente de extremo a extremo.\n• Columnas del centro: están conectadas VERTICALMENTE en grupos de 5 huecos. La zanja del centro PARTE esa conexión en dos mitades (una arriba, una abajo).\n\nDOS componentes que comparten una columna ESTÁN conectados eléctricamente — sin necesidad de cable. Esa es la magia de la protoboard.\n\n💡 EL LED TIENE POLARIDAD\nNo es un cable cualquiera — solo conduce en UN sentido:\n• Pata LARGA = ánodo = (+) = recibe la corriente del GPIO\n• Pata CORTA = cátodo = (−) = la corriente se va a GND\n\nSi lo conectas al revés: NO enciende. NO se daña, simplemente no funciona. Esa es la prueba número uno cuando 'no enciende el LED'.\n\n🛡️ ¿POR QUÉ RESISTENCIA 220Ω?\nUn LED solo necesita ~2 V para encender. El GPIO del ESP32 entrega 3.3 V. Si conectas el LED directo: pasa demasiada corriente y SE QUEMA en segundos. La resistencia limita la corriente a un nivel seguro (~15 mA).\n\nLa resistencia va EN SERIE con el LED — antes o después da igual, mientras esté en el mismo camino de corriente.\n\nIdentificación por colores: 220Ω = rojo, rojo, marrón, dorado.\n\n🎯 EL CIRCUITO DE HOY\n• LED (pata larga +) → resistencia 220Ω → GPIO 2 del ESP32\n• LED (pata corta −) → GND del ESP32\n\nNada más. Sin botones (los botones quedan para más adelante). Es lo más simple posible.\n\n📱 ALTERNATIVA — TABLET ANDROID CON OTG (opción secundaria)\nSi no tienes PC disponible (o prefieres trabajar desde la tablet), TODO el flujo funciona igual desde un Android — incluyendo la tablet Honor X8a que les dieron a todos. Lo único que cambia es el 'IDE': en lugar de Arduino IDE en Windows se usa la app ArduinoDroid en la tablet, conectando el ESP32 vía un adaptador USB.\n\nEl circuito físico es IDÉNTICO. El código es IDÉNTICO. La salida en el LED es IDÉNTICA. Lo único distinto es por dónde se compila y se sube.\n\n🧰 MATERIAL EXTRA PARA LA OPCIÓN ANDROID\n• Tablet Honor X8a (la que todos tienen del programa CONALEP).\n• El cable USB-C de carga que viene con la tablet.\n• Un adaptador USB-A (hembra) → USB-C (macho) — se compra en cualquier tienda de electrónica por ~30-60 pesos. Es el adaptador chico que permite conectar el cable USB-A del ESP32 al puerto USB-C de la tablet.\n• ArduinoDroid instalada (gratis, Play Store).\n\nLa primera vez que abres ArduinoDroid descarga las librerías ESP32 (~200 MB, tarda 5-10 min con WiFi). Hacerlo en casa antes de la clase.",
          notebook: "Título: Armado del circuito físico.\n1. ¿Cómo se conectan eléctricamente los huecos de los lados (+ y −) de la protoboard?\n2. ¿Cómo se conectan los huecos centrales? ¿Qué pasa con la zanja del centro?\n3. ¿Cómo se distingue la pata + del LED de la pata −?\n4. Si conectas el LED al revés, ¿qué pasa? ¿Se daña?\n5. ¿Para qué sirve la resistencia 220Ω? ¿Qué pasaría si la quitas?\n6. ¿Por qué decimos que la resistencia y el LED van 'en serie'?\n7. Dibuja el circuito completo en tu libreta y márcalo: GPIO 2, GND, ánodo, cátodo, resistencia.",
          practice: "🧰 PASO 0 — Verificar materiales (en la mesa)\n• 1 ESP32 DevKit con cable USB de datos\n• 1 protoboard (cualquier tamaño)\n• 1 LED (cualquier color)\n• 1 resistencia de 220Ω (rojo-rojo-marrón-dorado)\n• 2 cables jumper macho-macho\n• NO se necesita botón hoy\n\n🪜 PASO 1 — Identificar las partes de la protoboard\n  1. Toma la protoboard y obsérvala con atención.\n  2. Localiza las DOS filas largas de los lados (marcadas '+' rojo y '−' azul). Son las líneas de alimentación.\n  3. Localiza la ZANJA del centro — divide la protoboard en mitad de arriba y mitad de abajo.\n  4. Confirma con tu compañero: '¿qué huecos están conectados entre sí?'\n\n🔲 PASO 2 — Colocar el ESP32 sobre la protoboard\n  1. Toma el ESP32 con cuidado por los lados (NO toques los pines).\n  2. Alinea las dos filas de pines del ESP32 con los huecos centrales — UNA fila a cada lado de la zanja.\n  3. Empuja suave y parejo hasta que TODAS las patas entren.\n  4. Verifica visualmente: la zanja debe quedar JUSTO en medio del ESP32.\n  5. NO conectes el USB todavía.\n\n💡 PASO 3 — Identificar polaridad del LED\n  1. Toma el LED y obsérvalo a contraluz.\n  2. Localiza la pata LARGA (es la +, el ánodo).\n  3. Localiza la pata CORTA (es la −, el cátodo). También verás un 'corte plano' en el borde del LED del lado de la pata corta.\n  4. Anota en tu libreta cuál identificaste como + y cuál como −.\n\n🔌 PASO 4 — Insertar el LED en la protoboard\n  1. Toma el LED por el cuerpo (no por las patas).\n  2. Inserta la pata LARGA (+) en una columna LIBRE de la mitad de arriba de la protoboard. Anota la columna (ej: columna 15).\n  3. Inserta la pata CORTA (−) en la fila de la línea negativa '−' del costado.\n  4. Verifica: el LED debe quedar parado, las dos patas en huecos distintos.\n\n〰️ PASO 5 — Insertar la resistencia\n  1. Toma la resistencia de 220Ω (rojo-rojo-marrón).\n  2. La resistencia NO tiene polaridad — puede ir en cualquier sentido.\n  3. Una pata en la MISMA columna donde está la pata larga (+) del LED.\n  4. La otra pata en una columna LIBRE diferente. Anota esa columna (ej: columna 20).\n\n🔗 PASO 6 — Cables al ESP32\n  1. Cable jumper #1: conecta la columna donde está el otro extremo de la resistencia → pin GPIO 2 del ESP32.\n  2. Cable jumper #2: conecta la fila negativa '−' (donde está la pata corta del LED) → pin GND del ESP32.\n  3. Verifica visualmente que ningún cable haga cortocircuito (que no toque otros pines).\n\n🔍 PASO 7 — Inspección final (ANTES de conectar USB)\n  Llama a un compañero o al docente y revisen JUNTOS:\n  ☐ La pata LARGA del LED conecta con la resistencia.\n  ☐ La resistencia conecta con GPIO 2 (vía cable).\n  ☐ La pata CORTA del LED conecta con GND (vía la fila negativa y el cable).\n  ☐ Ningún cable toca pines extra del ESP32.\n  ☐ El ESP32 está bien insertado (zanja en medio).\n  Si las 5 ☐ están marcadas → procede al Paso 8. Si no → corrige antes de conectar USB.\n\n✅ PASO 8 — Prueba con sketch Blink básico\n  1. Conecta el cable USB al ESP32 y la PC.\n  2. Arduino IDE: Tools → Board → ESP32 Dev Module · Tools → Port → COMx.\n  3. File → New Sketch. Pegar el código (con espacios en blanco) y completar.\n  4. Verificar (✓) → Subir (→). Esperar 'Done uploading.'\n  5. ✨ El LED debe parpadear AUTOMÁTICAMENTE cada 500 ms (medio segundo encendido, medio segundo apagado).\n\n📱 PASO 8-B (Alternativa Android) — Cargar Blink desde la tablet Honor X8a\n  Si prefieres usar la tablet en lugar de la PC, sigue estos pasos en vez del Paso 8 anterior:\n  1. Tener instalado ArduinoDroid desde Play Store (mejor desde casa, descarga ~80 MB la app + ~200 MB librerías ESP32 la primera vez).\n  2. Conectar el adaptador USB-A (hembra) → USB-C (macho) al puerto USB-C de la tablet.\n  3. Conectar el cable del ESP32 al adaptador. La tablet detecta el ESP32 y pregunta '¿Permitir que ArduinoDroid acceda al dispositivo USB?' → tocar 'Aceptar' (marcar 'Usar de forma predeterminada' si quieres que no vuelva a preguntar).\n  4. Abrir ArduinoDroid → 'Sketch' → 'New Sketch' → pegar el código Blink (el mismo que en el Paso 8) y completar.\n  5. Tocar el menú (☰) → 'Board' → seleccionar 'ESP32 Dev Module'.\n  6. Tocar el ícono de la palomita ✓ para compilar. Esperar el mensaje 'Compilation successful'.\n  7. Tocar el ícono de la flecha → para subir al ESP32. Esperar 'Upload complete'.\n  8. ✨ El LED debe parpadear igual que con la PC — cada 500 ms.\n\n  💡 NOTA: La primera compilación tarda más (la app está calentando librerías). Las siguientes son rápidas.\n\n🆘 ¿NO ENCIENDE EL LED?\n  1. Verifica polaridad — voltea el LED y vuelve a probar.\n  2. Verifica que la resistencia esté en su lugar (220Ω, no otra).\n  3. Verifica que el cable a GPIO 2 esté en el pin correcto del ESP32.\n  4. Verifica que el cable a GND esté en un pin GND real (hay varios en el ESP32, todos sirven).\n  5. Si nada de eso funciona → llama al docente.\n\n💾 Guardar como 'Programa_Blink_Verificacion'. El circuito QUEDA armado para la Hora 2.",
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

  .mat-grid {
    display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;
  }
  .mat-card {
    background: #161b22; border: 1px solid #30363d; border-radius: 10px;
    padding: 10px 6px; text-align: center;
  }
  .mat-icon { font-size: 22px; display: block; margin-bottom: 4px; }
  .mat-name { font-size: 10px; font-weight: 700; color: #e6edf3; display: block; }
  .mat-spec { font-size: 9px; color: #8b949e; display: block; margin-top: 2px; }

  /* LED polarity */
  .led-box {
    background: #161b22; border: 1px solid #30363d; border-radius: 10px;
    padding: 14px; display: flex; gap: 16px; align-items: center;
  }
  .led-visual {
    background: #0d1117; border: 1px solid #30363d; border-radius: 8px;
    padding: 16px; width: 130px; text-align: center;
  }
  .led-bulb {
    width: 50px; height: 50px; background: radial-gradient(circle, #ffd700 0%, #ff8c00 70%, #b35900 100%);
    border-radius: 50%; margin: 0 auto 8px; box-shadow: 0 0 20px #ffaa00;
  }
  .led-legs { display: flex; justify-content: center; gap: 8px; }
  .leg-long {
    background: #d4d4d4; width: 4px; height: 36px;
    position: relative;
  }
  .leg-long::after {
    content: '+'; position: absolute; bottom: -16px; left: 50%; transform: translateX(-50%);
    color: #3fb950; font-weight: 700; font-size: 14px;
  }
  .leg-short {
    background: #d4d4d4; width: 4px; height: 22px;
    position: relative;
  }
  .leg-short::after {
    content: '−'; position: absolute; bottom: -16px; left: 50%; transform: translateX(-50%);
    color: #f85149; font-weight: 700; font-size: 18px;
  }
  .led-info { flex: 1; font-size: 11px; color: #c9d1d9; line-height: 1.7; }
  .led-info strong { color: #58a6ff; }
  .led-info .plus { color: #3fb950; font-weight: 700; }
  .led-info .minus { color: #f85149; font-weight: 700; }

  /* Connections list */
  .conn-list {
    background: #161b22; border: 1px solid #30363d; border-radius: 10px;
    padding: 14px;
  }
  .conn-step {
    display: flex; gap: 10px; align-items: center;
    padding: 6px 0; font-size: 11px; color: #c9d1d9;
    border-bottom: 1px dashed #21262d;
  }
  .conn-step:last-child { border-bottom: none; }
  .step-num {
    background: #1f6feb; color: white; width: 22px; height: 22px;
    border-radius: 50%; display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700; flex-shrink: 0;
  }
  .pin-badge {
    background: #1a3a1a; color: #3fb950; border-radius: 4px;
    padding: 1px 5px; font-size: 9px; font-weight: 700;
  }
  .pin-gnd { background: #1a1a2a; color: #8b949e; border-radius: 4px; padding: 1px 5px; font-size: 9px; }

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

<p class="sec-title">🧰 Materiales (en la mesa)</p>
<div class="mat-grid">
  <div class="mat-card">
    <span class="mat-icon">🔲</span>
    <span class="mat-name">ESP32 DevKit</span>
    <span class="mat-spec">+ cable USB datos</span>
  </div>
  <div class="mat-card">
    <span class="mat-icon">🟦</span>
    <span class="mat-name">Protoboard</span>
    <span class="mat-spec">cualquier tamaño</span>
  </div>
  <div class="mat-card">
    <span class="mat-icon">💡</span>
    <span class="mat-name">LED</span>
    <span class="mat-spec">cualquier color</span>
  </div>
  <div class="mat-card">
    <span class="mat-icon">〰️</span>
    <span class="mat-name">Resistencia 220Ω</span>
    <span class="mat-spec">rojo-rojo-marrón</span>
  </div>
  <div class="mat-card">
    <span class="mat-icon">🔌</span>
    <span class="mat-name">Cables jumper</span>
    <span class="mat-spec">2 macho-macho</span>
  </div>
  <div class="mat-card" style="opacity:.4;">
    <span class="mat-icon">🚫</span>
    <span class="mat-name">Sin botón</span>
    <span class="mat-spec">hoy NO se usa</span>
  </div>
</div>

<p class="sec-title">💡 Identificar la polaridad del LED</p>
<div class="led-box">
  <div class="led-visual">
    <div class="led-bulb"></div>
    <div class="led-legs">
      <div class="leg-long"></div>
      <div class="leg-short"></div>
    </div>
  </div>
  <div class="led-info">
    <div><strong>Pata LARGA</strong> = <span class="plus">ánodo (+)</span> → va al GPIO vía resistencia.</div>
    <div><strong>Pata CORTA</strong> = <span class="minus">cátodo (−)</span> → va a GND.</div>
    <div style="margin-top:10px; color:#8b949e;">Si lo conectas al revés: NO enciende. NO se daña. Voltéalo y listo.</div>
  </div>
</div>

<p class="sec-title">🔗 Conexiones — orden de armado</p>
<div class="conn-list">
  <div class="conn-step">
    <span class="step-num">1</span>
    <span>ESP32 a caballo sobre la zanja central de la protoboard.</span>
  </div>
  <div class="conn-step">
    <span class="step-num">2</span>
    <span>LED pata larga (+) → columna libre arriba · pata corta (−) → fila <span class="pin-gnd">−</span> del costado.</span>
  </div>
  <div class="conn-step">
    <span class="step-num">3</span>
    <span>Resistencia 220Ω: una pata en la columna del LED (+) · otra en columna libre.</span>
  </div>
  <div class="conn-step">
    <span class="step-num">4</span>
    <span>Cable: columna libre de la resistencia → <span class="pin-badge">GPIO 2</span> del ESP32.</span>
  </div>
  <div class="conn-step">
    <span class="step-num">5</span>
    <span>Cable: fila <span class="pin-gnd">−</span> → <span class="pin-gnd">GND</span> del ESP32.</span>
  </div>
</div>

<p class="sec-title">🔍 Checklist final ANTES de conectar USB</p>
<div class="check-card">
  <h4>⚠️ Revisar con un compañero antes de cargar:</h4>
  <div class="check-row"><div class="box-icon"></div><span>Pata LARGA del LED → conecta con la resistencia.</span></div>
  <div class="check-row"><div class="box-icon"></div><span>Resistencia → conecta con GPIO 2 (vía cable).</span></div>
  <div class="check-row"><div class="box-icon"></div><span>Pata CORTA del LED → conecta con GND.</span></div>
  <div class="check-row"><div class="box-icon"></div><span>Ningún cable toca pines extra del ESP32.</span></div>
  <div class="check-row"><div class="box-icon"></div><span>ESP32 bien insertado, zanja en medio.</span></div>
</div>

</body>
</html>
`,
          code: "// SKETCH DE VERIFICACIÓN — Blink básico\n// Comprueba que el circuito está bien armado: el LED debe parpadear cada 500 ms\n// Completa los espacios en blanco\n\n#define LED_PIN 2\n\nvoid setup() {\n  pinMode(LED_PIN,  );           // ¿OUTPUT o INPUT?\n  Serial.begin(115200);\n  Serial.println(\"Circuito listo — si el LED parpadea, todo bien.\");\n}\n\nvoid loop() {\n  digitalWrite(LED_PIN,  );      // encender\n  delay(500);\n  digitalWrite(LED_PIN,  );      // apagar\n  delay( );                      // medio segundo\n}",
          codeRef: "// SKETCH DE VERIFICACIÓN — Blink básico\n\n#define LED_PIN 2\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);\n  Serial.begin(115200);\n  Serial.println(\"Circuito listo — si el LED parpadea, todo bien.\");\n}\n\nvoid loop() {\n  digitalWrite(LED_PIN, HIGH);\n  delay(500);\n  digitalWrite(LED_PIN, LOW);\n  delay(500);\n}",
          product: "Circuito armado en protoboard con LED + resistencia 220Ω + ESP32, conectado a la PC, con el sketch Blink corriendo y el LED parpadeando cada 500 ms. El circuito QUEDA armado para la Hora 2 (no se desarma).",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta hora es 80% pedagogía de hardware básico. Los errores típicos a vigilar y atender PROACTIVAMENTE: (1) LED al revés (es lo más frecuente — no se daña, solo voltéenlo); (2) resistencia ausente o de valor incorrecto (¡revisar bandas de colores antes de Upload!); (3) pin GND confundido con otro pin del ESP32 (hay varios GND, todos sirven pero algunos alumnos no los identifican); (4) cable mal pinchado (el hueco del jumper no atrapó bien el cable interno). Sobre el flujo: el Paso 7 (checklist final) es crítico — NO debe haber un solo USB conectado en el aula antes de que esa revisión esté hecha. Eso evita LEDs quemados y frustración. Sobre el sketch Blink: deliberadamente simple — si parpadea, el circuito está bien y la Hora 2 va a fluir; si no parpadea, mejor descubrirlo ahora con código sencillo que con Programa 03 cargado. Tener disponibles 2-3 LEDs + resistencias extra por si algún alumno daña los suyos.\n\n📱 SOBRE LA ALTERNATIVA ANDROID: El docente probó el flujo completo con la tablet Honor X8a (la que todos los alumnos recibieron) + adaptador USB-A→USB-C + ArduinoDroid — funciona idéntico al de PC. Esta opción es UTILÍSIMA cuando: (a) el aula no tiene PC libre para todos, (b) el alumno quiere trabajar en casa pero no tiene laptop, (c) hay problemas de drivers en la PC. Recomendaciones para el aula: (1) Pedir a los alumnos que instalen ArduinoDroid EN CASA antes de la clase para no consumir el WiFi escolar con descargas de 280 MB simultáneas. (2) Llevar 3-4 adaptadores USB-A→USB-C de respaldo (~$50 cada uno) — son la pieza más fácil de olvidar. (3) Si un alumno no tiene PC y olvidó el adaptador, prestarle uno de los del aula. (4) En ArduinoDroid el botón BOOT del ESP32 se usa igual: si 'Connecting...' se atora, mantener BOOT presionado hasta que empiece la subida."
        },
        {
          time: "Hora 2",
          title: "Programa 03: Control del LED desde el Serial Monitor",
          theory: "Ya cerramos la cadena USB → ESP32 → LED en hardware real (Hora 1 + Programa 04). Ahora invertimos la dirección de la comunicación: el ESP32 deja de solo HABLAR por el Serial — hoy también nos ESCUCHA.\n\n🔄 COMUNICACIÓN BIDIRECCIONAL\nEl puerto serial es de doble vía:\n• PC → ESP32: tú escribes, el ESP32 lee.\n• ESP32 → PC: el ESP32 escribe, tú lees.\nHasta hoy solo usamos la dirección 2. Hoy abrimos la dirección 1.\n\n📥 EL BUFFER DE ENTRADA\nCuando escribes algo en el Serial Monitor y presionas Enter, esos caracteres se guardan en un buffer dentro del ESP32 — una pequeña cola de espera. En cada loop() preguntamos si hay algo ahí:\n\n• Serial.available() → devuelve cuántos caracteres están esperando (0 = nada, >0 = hay algo).\n• Serial.read() → toma UN carácter del buffer y lo devuelve. Avanza la cola.\n\n```\nif (Serial.available() > 0) {\n  char comando = Serial.read();\n  // ahora 'comando' es '1', '0', 'p', etc.\n}\n```\n\n🎯 COMANDOS DE HOY\n• '1' → encender LED\n• '0' → apagar LED\n• 'p' → parpadear (cambia cada 300 ms)\n\n⚠️ EL OPERADOR ' (COMILLAS SIMPLES)\nFíjate que comparamos con comillas simples: comando == '1' (no comando == 1). Las comillas simples representan el CARÁCTER '1', no el número uno. Son cosas distintas: el carácter '1' es el código 49 en ASCII, el número 1 es 1.\n\n⏱️ millis() — TIMING NO BLOQUEANTE (concepto nuevo)\nPara el modo parpadeo NO podemos usar delay() — si usáramos delay(300), durante esos 300 ms el ESP32 estaría 'congelado' y NO escucharía nuevos comandos. Solución: millis().\n\nmillis() devuelve cuántos milisegundos lleva encendido el ESP32. Cada vez que el loop() pasa, comparamos:\n• ¿millis() - ultimoCambio es ≥ 300?\n• Si sí → toca cambiar el LED y guardar el momento.\n• Si no → seguir, sin bloquear.\n\nAsí el loop() sigue dando vueltas todo el tiempo y puede escuchar nuevos comandos EN MEDIO de un parpadeo. ✨\n\n📱 ALTERNATIVA TABLET ANDROID: El flujo es idéntico desde ArduinoDroid en la Honor X8a. El Serial Monitor de la app permite enviar los comandos '1', '0', 'p' igual que el Serial Monitor de Arduino IDE en PC. Misma experiencia.",
          notebook: "Título: El ESP32 también escucha.\n1. ¿Qué devuelve Serial.available() si nadie ha escrito nada en el Serial Monitor?\n2. ¿Qué diferencia hay entre Serial.read() y Serial.println()?\n3. ¿Por qué comparamos con comillas: comando == '1' y no comando == 1?\n4. ¿Para qué sirve millis() y por qué NO usamos delay() en el modo parpadeo?\n5. Si presionas la tecla '1' SIN dar Enter en Serial Monitor, ¿el ESP32 hace algo? ¿Por qué?\n6. Si estando en modo 'p' presionas '0', ¿qué tan rápido se detiene el parpadeo? Explica con millis().\n7. Da un ejemplo de la vida real donde un dispositivo escucha comandos por un canal (Alexa, control remoto TV, etc.).",
          practice: "🔧 PASO 1 — Reutilizar el circuito de la Hora 1\n• Quitar el botón — esta hora NO lo usamos.\n• Dejar SOLO el LED en GPIO 2 con su resistencia 220Ω → GND.\n• El ESP32 sigue conectado por USB en el mismo puerto COM.\n\n💻 PASO 2 — Cargar el código\n  1. Arduino IDE → File → New Sketch.\n  2. Pegar el código (con espacios en blanco) y completar.\n  3. Verificar (✓) → Subir (→). Esperar 'Done uploading.'\n\n📡 PASO 3 — Configurar el Serial Monitor para enviar comandos\n  1. Tools → Serial Monitor (Ctrl+Shift+M).\n  2. Confirmar 115200 baud abajo a la derecha.\n  3. ⚠️ IMPORTANTE: en la barra inferior del Serial Monitor cambiar 'No line ending' → 'Newline' (o 'Both NL & CR').\n     Esto hace que al presionar Enter se mande efectivamente el carácter al ESP32.\n  4. En el campo de texto de ARRIBA del Serial Monitor, escribir el comando y presionar Enter.\n\n📱 VARIANTE ANDROID — Si usas ArduinoDroid en la tablet:\n  • Paso 2 alternativo: ArduinoDroid → Sketch → New Sketch → pegar el código → menú ☰ → Board → ESP32 Dev Module → ✓ compilar → → subir.\n  • Paso 3 alternativo: en ArduinoDroid, menú ☰ → Serial Monitor → confirmar 115200 baud → en el selector de 'Line ending' elegir 'Newline' (NL) → escribir el comando en el campo inferior → 'Send'.\n  • El comportamiento del LED y de las respuestas es IDÉNTICO al de PC.\n\n🧪 PASO 4 — Probar los 3 comandos\n  • Escribir '1' + Enter → LED enciende. Serial debe imprimir 'LED encendido'.\n  • Escribir '0' + Enter → LED apaga. Serial: 'LED apagado'.\n  • Escribir 'p' + Enter → LED empieza a parpadear cada 300 ms. Serial: 'LED parpadeando — escribe 0 o 1 para detener'.\n  • Estando en parpadeo, escribir '0' + Enter → debe detenerse INMEDIATAMENTE. Eso es el poder de millis().\n\n🔬 PASO 5 — Experimentos\n  Experimento A: Escribir un carácter que NO sea 1/0/p (ejemplo: 'x'). ¿Qué hace el ESP32? ¿Por qué no truena?\n  Experimento B: Cambiar INTERVALO_PARPADEO de 300 a 50. Subir de nuevo. ¿Cómo se ve el parpadeo? ¿Sigues pudiendo detenerlo con '0'?\n  Experimento C: Cambiar INTERVALO_PARPADEO a 2000. ¿Cómo se siente ahora? ¿Le tienes que esperar para detener?\n\n💾 Guardar como 'Programa_03_Serial_Control'.\n📸 Subir a Classroom: captura del Serial Monitor con los 3 comandos enviados y sus respuestas.",
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

  .pin-card {
    background: #161b22; border: 1px solid #30363d; border-radius: 10px;
    padding: 12px; max-width: 320px;
  }
  .pin-card h4 { font-size: 11px; color: #58a6ff; margin-bottom: 8px; }
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
  .pin-gnd { background: #1a1a2a; color: #8b949e; border-radius: 4px; padding: 1px 5px; font-size: 9px; }

  .cmd-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  .cmd-card {
    background: #161b22; border: 1px solid #30363d; border-radius: 10px;
    padding: 12px; text-align: center;
  }
  .cmd-key {
    background: #0d1117; border: 1px solid #58a6ff; color: #79c0ff;
    font-family: 'Consolas', monospace; font-size: 18px; font-weight: 700;
    width: 36px; height: 36px; border-radius: 6px;
    display: inline-flex; align-items: center; justify-content: center;
    margin-bottom: 8px;
  }
  .cmd-action { font-size: 11px; font-weight: 700; color: #e6edf3; margin-bottom: 4px; }
  .cmd-icon { font-size: 22px; display: block; margin: 6px 0; }
  .cmd-card.blink .cmd-key { border-color: #d29922; color: #f0c040; }

  .serial-frame {
    background: #1e1e1e; border: 1px solid #30363d; border-radius: 8px;
    overflow: hidden;
  }
  .serial-bar {
    background: #2d2d30; padding: 6px 12px; font-size: 10px;
    color: #cccccc; display: flex; justify-content: space-between; align-items: center;
    border-bottom: 1px solid #1a1a1a;
  }
  .serial-bar .baud { color: #4ec9b0; font-family: 'Consolas', monospace; }
  .serial-input {
    background: #1e1e1e; padding: 6px 10px; display: flex; gap: 6px; align-items: center;
    border-bottom: 1px solid #1a1a1a;
  }
  .serial-input .prompt { color: #569cd6; font-family: 'Consolas', monospace; font-size: 11px; }
  .serial-input .box {
    flex: 1; background: #0d1117; border: 1px solid #30363d;
    padding: 3px 8px; font-family: 'Consolas', monospace; font-size: 11px;
    color: #d4d4d4; border-radius: 3px;
  }
  .serial-input .send {
    background: #1f6feb; color: white; padding: 3px 10px;
    border-radius: 3px; font-size: 10px; font-weight: 700;
  }
  .serial-input .nl {
    background: #094771; color: #4ec9b0; padding: 1px 6px;
    border-radius: 3px; font-size: 9px; font-family: 'Consolas', monospace;
  }
  .serial-body {
    padding: 10px 12px; font-family: 'Consolas', monospace; font-size: 11px;
    line-height: 1.6; color: #d4d4d4; max-height: 220px; overflow-y: auto;
  }
  .you { color: #4ec9b0; }
  .esp { color: #d4d4d4; }
  .info { color: #569cd6; }
  .cmt { color: #6a9955; }

  .flow { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
  .flow-node {
    background: #161b22; border: 1px solid #30363d; border-radius: 8px;
    padding: 8px 12px; font-size: 10px; color: #c9d1d9; min-width: 120px; text-align: center;
  }
  .flow-node b { color: #58a6ff; display: block; font-size: 9px; margin-bottom: 2px; }
  .flow-arrow { color: #3fb950; font-size: 16px; }
</style>
</head>
<body>

<p class="sec-title">🔌 Circuito mínimo</p>
<div class="pin-card">
  <h4>💡 Solo un LED</h4>
  <div class="pin-row">
    <span class="dot" style="background:#3fb950"></span>
    <span>Pata larga (+) → R 220Ω → <span class="pin-badge">GPIO 2</span></span>
  </div>
  <div class="pin-row">
    <span class="dot" style="background:#8b949e"></span>
    <span>Pata corta (−) → <span class="pin-gnd">GND</span></span>
  </div>
</div>

<p class="sec-title">🎯 Comandos disponibles</p>
<div class="cmd-grid">
  <div class="cmd-card">
    <div class="cmd-key">1</div>
    <div class="cmd-icon">💡</div>
    <div class="cmd-action">Encender</div>
  </div>
  <div class="cmd-card">
    <div class="cmd-key">0</div>
    <div class="cmd-icon">⚫</div>
    <div class="cmd-action">Apagar</div>
  </div>
  <div class="cmd-card blink">
    <div class="cmd-key">p</div>
    <div class="cmd-icon">✨</div>
    <div class="cmd-action">Parpadear</div>
  </div>
</div>

<p class="sec-title">🔄 Flujo de datos</p>
<div class="flow">
  <div class="flow-node"><b>1. Tú escribes</b>'1' + Enter</div>
  <span class="flow-arrow">→</span>
  <div class="flow-node"><b>2. Buffer</b>Serial.available()</div>
  <span class="flow-arrow">→</span>
  <div class="flow-node"><b>3. Lee</b>Serial.read()</div>
  <span class="flow-arrow">→</span>
  <div class="flow-node"><b>4. Reacciona</b>digitalWrite()</div>
</div>

<p class="sec-title">📡 Cómo se ve el Serial Monitor</p>
<div class="serial-frame">
  <div class="serial-bar">
    <span>📡 Serial Monitor — COM5</span>
    <span class="baud">115200 baud · Newline</span>
  </div>
  <div class="serial-input">
    <span class="prompt">▸</span>
    <div class="box">1</div>
    <span class="send">Send</span>
    <span class="nl">\\n</span>
  </div>
  <div class="serial-body">
    <div><span class="info">Programa 03 — Control desde Serial</span></div>
    <div><span class="info">Comandos: 1 = encender | 0 = apagar | p = parpadear</span></div>
    <div><span class="you">▸ 1</span></div>
    <div><span class="esp">LED encendido</span></div>
    <div><span class="you">▸ 0</span></div>
    <div><span class="esp">LED apagado</span></div>
    <div><span class="you">▸ p</span></div>
    <div><span class="esp">LED parpadeando — escribe 0 o 1 para detener</span></div>
    <div><span class="cmt">// el LED parpadea en la protoboard ✨</span></div>
    <div><span class="you">▸ 0</span></div>
    <div><span class="esp">LED apagado</span></div>
  </div>
</div>

</body>
</html>
`,
          code: "// PROGRAMA 03 — Control del LED desde el Serial Monitor\n// Comandos: '1' = encender | '0' = apagar | 'p' = parpadear\n// Completa los espacios en blanco\n\n#define LED_PIN 2\n#define INTERVALO_PARPADEO 300   // ms entre cambios al parpadear\n\nchar modo = '0';                  // '0' apagado, '1' encendido, 'p' parpadeando\nunsigned long ultimoCambio = 0;\nbool estadoParpadeo = false;\n\nvoid setup() {\n  Serial.begin( );                // baudrate del ESP32\n  pinMode(LED_PIN,  );            // ¿OUTPUT o INPUT?\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Programa 03 — Control desde Serial\");\n  Serial.println(\"Comandos: 1 = encender | 0 = apagar | p = parpadear\");\n}\n\nvoid loop() {\n  // 1. ¿Llegó un comando del Serial?\n  if (Serial.available() > 0) {\n    char comando = Serial.read();\n\n    if (comando == '1') {\n      modo = '1';\n      digitalWrite(LED_PIN,  );    // encender\n      Serial.println(\"LED encendido\");\n    }\n    else if (comando == '0') {\n      modo = '0';\n      digitalWrite(LED_PIN,  );    // apagar\n      Serial.println(\"LED apagado\");\n    }\n    else if (comando ==  ) {        // ¿qué carácter activa el parpadeo?\n      modo = 'p';\n      ultimoCambio = millis();\n      Serial.println(\"LED parpadeando — escribe 0 o 1 para detener\");\n    }\n  }\n\n  // 2. Si está en modo parpadeo, alternar cada INTERVALO_PARPADEO ms\n  if (modo == 'p') {\n    if (millis() - ultimoCambio >= INTERVALO_PARPADEO) {\n      estadoParpadeo = !estadoParpadeo;\n      digitalWrite(LED_PIN,  );    // aplicar el nuevo estado\n      ultimoCambio = millis();\n    }\n  }\n}",
          codeRef: "// PROGRAMA 03 — Control del LED desde el Serial Monitor\n// Comandos: '1' = encender | '0' = apagar | 'p' = parpadear\n\n#define LED_PIN 2\n#define INTERVALO_PARPADEO 300\n\nchar modo = '0';\nunsigned long ultimoCambio = 0;\nbool estadoParpadeo = false;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN, OUTPUT);\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Programa 03 — Control desde Serial\");\n  Serial.println(\"Comandos: 1 = encender | 0 = apagar | p = parpadear\");\n}\n\nvoid loop() {\n  if (Serial.available() > 0) {\n    char comando = Serial.read();\n\n    if (comando == '1') {\n      modo = '1';\n      digitalWrite(LED_PIN, HIGH);\n      Serial.println(\"LED encendido\");\n    }\n    else if (comando == '0') {\n      modo = '0';\n      digitalWrite(LED_PIN, LOW);\n      Serial.println(\"LED apagado\");\n    }\n    else if (comando == 'p') {\n      modo = 'p';\n      ultimoCambio = millis();\n      Serial.println(\"LED parpadeando — escribe 0 o 1 para detener\");\n    }\n  }\n\n  if (modo == 'p') {\n    if (millis() - ultimoCambio >= INTERVALO_PARPADEO) {\n      estadoParpadeo = !estadoParpadeo;\n      digitalWrite(LED_PIN, estadoParpadeo);\n      ultimoCambio = millis();\n    }\n  }\n}",
          product: "Proyecto Programa_03_Serial_Control: el LED responde a 3 comandos ('1', '0', 'p') enviados desde el Serial Monitor. Captura del Serial mostrando los tres comandos enviados y sus respuestas + foto del LED parpadeando.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Dos conceptos nuevos importantes que es bueno reforzar: (1) la diferencia entre el CARÁCTER '1' (comillas simples) y el NÚMERO 1 — esta confusión va a aparecer toda la carrera, hoy es un buen momento para asentarla. Mostrar en pizarra: ASCII '1' = 49, '0' = 48, 'p' = 112. (2) millis() vs delay() es probablemente el cambio mental más grande del semestre — la idea de que el código no se 'pausa' sino que sigue dando vueltas y compara tiempos. Si alguien lo entiende a la primera, está listo para programar interfaces interactivas. Sobre el 'Newline' del Serial Monitor: es la causa #1 de 'no me funciona' — si el alumno deja 'No line ending', los comandos llegan pero los Serial.read() pueden no procesarlos como espera. Verificar en la barra inferior. Sobre el experimento A (carácter inválido como 'x'): el código simplemente IGNORA — buena oportunidad para discutir 'manejo defensivo' (no truena con entrada inesperada). Si alguien va rápido, retarlo a agregar un comando 'h' (help) que reimprima la lista de comandos.\n\n📱 SOBRE EL FLUJO ANDROID: El Serial Monitor de ArduinoDroid acepta exactamente los mismos comandos ('1', '0', 'p') y muestra las mismas respuestas que en PC. La única curva de aprendizaje extra es ubicar dónde está el selector de 'Line ending' dentro de la app (suele estar en el menú de configuración del Serial Monitor, no en la barra principal). Si un alumno reporta que 'no responde el ESP32 a sus comandos' en ArduinoDroid, el primer check es ese: Line ending = Newline. Probado en Honor X8a — funciona idéntico al de PC."
        }
      ],
      cierre: "Hoy cerramos el círculo: armaron físicamente el circuito que la semana pasada quedó solo en teoría, y enseguida lo controlaron desde el Serial Monitor con tres comandos simples. El ESP32 ya no es una abstracción — es una pieza de hardware que obedece lo que escribes.",
      frase_docente: "Un buen circuito no es el más complicado — es el que aguanta la siguiente clase sin que tengas que rearmarlo."
    },
    {
      id: "wed",
      label: "Miércoles — 🔧 Cargar el Programa 03: alternativas cuando ArduinoDroid falla",
      purpose: "Garantizar que TODO alumno tenga el Programa 03 (control del LED desde Serial: '1' encender, '0' apagar, 'p' parpadear) corriendo en su ESP32. Si ArduinoDroid no logró cargar el programa desde la tablet, hoy probamos 4 vías alternativas escalonadas.",
      hours: [
        {
          time: "Hora 1",
          title: "🔧 Programa 03: Control del LED desde Serial — 4 alternativas para cargarlo",
          theory: "El martes muchos no lograron cargar el programa desde ArduinoDroid en la tablet — el flujo Android es prometedor pero a veces falla por librerías, permisos USB o el modo BOOT del ESP32. Hoy ofrecemos 4 caminos: si uno falla, pasamos al siguiente. La meta es que TODOS terminen la clase con el Programa 03 funcionando — no importa por cuál vía.\n\n🛣️ LAS 4 VÍAS (en orden de cercanía a lo que ya intentaron)\n\n📱 VÍA A — Re-intentar ArduinoDroid con ajustes\nA veces ArduinoDroid funciona con pequeños retoques:\n• Limpiar caché de la app: Ajustes de Android → Apps → ArduinoDroid → Almacenamiento → Borrar caché.\n• Forzar permisos USB: desconectar el ESP32, abrir ArduinoDroid, conectar el ESP32, en el diálogo emergente tocar 'Permitir' Y marcar 'Usar de forma predeterminada'.\n• Botón BOOT: durante el Upload, mantener presionado el botón BOOT del ESP32 hasta que el progreso empiece a avanzar.\n\n📱 VÍA B — Bluino Loader (alternativa Android)\nOtra app Arduino-compatible para Android, suele ser más estable que ArduinoDroid con ESP32:\n• Buscar en Play Store: 'Bluino Loader Arduino IDE'.\n• Gratis con anuncios.\n• Soporta ESP32 nativamente.\n• Mismo cable OTG, mismo adaptador.\n\n💻 VÍA C — Caer al flujo PC (Arduino IDE Windows)\nLa opción más segura — el flujo que documentamos el martes Hora 1 funciona sin sorpresas:\n• Arduino IDE en la PC del aula (o tuya).\n• Tools → Board → ESP32 Dev Module · Port → COMx.\n• Verificar (✓) → Subir (→).\n\n🌐 VÍA D — Wokwi (simulador web, sin hardware)\nSi NADA de lo anterior funciona, no perdemos la clase:\n• Abrir https://wokwi.com en cualquier navegador (PC, tablet o celular).\n• Crear un nuevo proyecto ESP32.\n• Armar el mismo circuito virtual: LED en GPIO 2 + R 220Ω + GND.\n• Pegar el código del Programa 03 y presionar ▶ (play).\n• Wokwi tiene su propio Serial Monitor — funciona idéntico al de Arduino IDE.\n• Aunque no es hardware real, EL APRENDIZAJE ES EL MISMO. Hardware queda como tarea para casa.\n\n💡 BONUS — Serial USB Terminal (solo monitor)\nSi YA cargaste el programa antes (en PC o ArduinoDroid) pero ahora solo quieres mandar comandos desde la tablet:\n• Instalar 'Serial USB Terminal' (Kai Morich) — gratis, Play Store.\n• Conectar el ESP32 por OTG.\n• Configurar 115200 baud + Newline.\n• Escribir '1', '0', 'p' y mandar.\n\nNo compila ni sube código — solo es Serial Monitor por USB. Perfecto cuando el problema NO era el código sino el Serial Monitor de ArduinoDroid.",
          notebook: "Título: Plan B cuando la herramienta falla.\n1. ¿En qué paso exacto se atoró ArduinoDroid en tu tablet el martes? (no compiló / no detectó el ESP32 / 'Connecting...' eterno / Serial Monitor no responde a los comandos)\n2. ¿Cuál de las 4 vías terminó funcionando para ti? ¿Por qué?\n3. Ventajas de cada vía con tus palabras (rápido / sin internet / sin PC / etc.).\n4. Si tuvieras que prepararle el ESP32 a un compañero nuevo el próximo semestre, ¿cuál vía le recomendarías primero?\n5. ¿Qué aprendiste hoy sobre 'cuando una herramienta falla, hay que tener un plan B'?",
          practice: "🕐 ESTRUCTURA DE LA HORA (60 min)\n\n10 min — DIAGNÓSTICO PERSONAL\n  • Cada alumno anota en su libreta dónde exactamente se atoró ArduinoDroid el martes.\n  • El docente recorre las mesas y categoriza: ¿es problema de compilación, de detección USB, de flasheo, o de Serial Monitor?\n  • Los que YA terminaron el martes se vuelven 'asistentes' del docente.\n\n35 min — PROBAR LA VÍA QUE CORRESPONDA\n  Según el diagnóstico, elegir la primera vía a intentar:\n  • Problema menor (cache, permisos, BOOT) → Vía A.\n  • ArduinoDroid simplemente no funciona en tu tablet → Vía B (Bluino Loader).\n  • Sin tiempo para experimentar / PC disponible → Vía C.\n  • Sin hardware accesible / urgencia de avanzar → Vía D (Wokwi).\n\n  📋 EL CÓDIGO ES IDÉNTICO EN LAS 4 VÍAS. Copiar el Programa 03 del bloque de código de abajo (todo el archivo, sin completar nada — está listo para pegar) y subirlo / pegarlo según la vía elegida.\n\n15 min — VERIFICACIÓN EN VIVO\n  • Cada alumno demuestra al docente los 3 comandos:\n    - Escribir '1' → LED enciende. Serial responde 'LED encendido'.\n    - Escribir '0' → LED apaga. Serial responde 'LED apagado'.\n    - Escribir 'p' → LED parpadea. Serial responde 'LED parpadeando...'.\n  • Si está en Wokwi (Vía D), demostrar los 3 comandos en el simulador.\n  • Sacar captura del Serial Monitor con los 3 comandos enviados y subirla a Classroom.\n\n📸 EVIDENCIA OBLIGATORIA\n• Foto del LED encendido (Vías A, B, C) O captura de Wokwi (Vía D).\n• Captura del Serial Monitor mostrando los 3 comandos.\n• En Classroom, mencionar qué vía terminó funcionando para ti.",
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

  /* Decision tree */
  .tree {
    background: #161b22; border: 1px solid #30363d; border-radius: 10px;
    padding: 16px;
  }
  .question {
    background: #1f1700; border: 1px solid #d29922; border-radius: 8px;
    padding: 10px 14px; margin-bottom: 12px;
    font-size: 12px; color: #f0c040; font-weight: 700;
  }
  .branches { display: flex; flex-direction: column; gap: 8px; }
  .branch {
    display: flex; gap: 10px; align-items: stretch;
    background: #0d1117; border-radius: 6px; overflow: hidden;
  }
  .branch-label {
    background: #1f6feb; color: white;
    padding: 8px 12px; font-size: 11px; font-weight: 700;
    display: flex; align-items: center; min-width: 70px; justify-content: center;
  }
  .branch.a .branch-label { background: #6e7681; }
  .branch.b .branch-label { background: #1f6feb; }
  .branch.c .branch-label { background: #3fb950; }
  .branch.d .branch-label { background: #d29922; }
  .branch-content {
    flex: 1; padding: 8px 12px; font-size: 11px; color: #c9d1d9; line-height: 1.5;
  }
  .branch-content b { color: #e6edf3; }

  /* Apps cards */
  .apps { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; }
  .app-card {
    background: #161b22; border: 1px solid #30363d; border-radius: 10px;
    padding: 12px;
  }
  .app-card h4 { font-size: 11px; margin-bottom: 6px; }
  .app-card .icon { font-size: 24px; display: block; margin-bottom: 6px; }
  .app-card .desc { font-size: 10px; color: #8b949e; line-height: 1.5; }
  .app-card.a h4 { color: #f0c040; }
  .app-card.b h4 { color: #79c0ff; }
  .app-card.c h4 { color: #3fb950; }
  .app-card.d h4 { color: #ff7b72; }

  /* Commands recap */
  .cmd-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
  .cmd-card {
    background: #161b22; border: 1px solid #30363d; border-radius: 10px;
    padding: 12px; text-align: center;
  }
  .cmd-key {
    background: #0d1117; border: 1px solid #58a6ff; color: #79c0ff;
    font-family: 'Consolas', monospace; font-size: 18px; font-weight: 700;
    width: 36px; height: 36px; border-radius: 6px;
    display: inline-flex; align-items: center; justify-content: center;
    margin-bottom: 8px;
  }
  .cmd-card.blink .cmd-key { border-color: #d29922; color: #f0c040; }
  .cmd-action { font-size: 11px; font-weight: 700; color: #e6edf3; }
  .cmd-icon { font-size: 22px; display: block; margin: 6px 0; }
</style>
</head>
<body>

<p class="sec-title">🛣️ Las 4 vías para cargar el Programa 03</p>
<div class="tree">
  <div class="question">¿Tu ArduinoDroid del martes no funcionó? Elige tu vía:</div>
  <div class="branches">
    <div class="branch a">
      <div class="branch-label">VÍA A</div>
      <div class="branch-content"><b>Re-intentar ArduinoDroid con ajustes</b><br>Limpiar caché · Permisos USB · BOOT durante upload.</div>
    </div>
    <div class="branch b">
      <div class="branch-label">VÍA B</div>
      <div class="branch-content"><b>Bluino Loader</b> — Otra app Arduino para Android (Play Store, gratis).</div>
    </div>
    <div class="branch c">
      <div class="branch-label">VÍA C</div>
      <div class="branch-content"><b>Arduino IDE en PC</b> — La opción más segura, siempre funciona.</div>
    </div>
    <div class="branch d">
      <div class="branch-label">VÍA D</div>
      <div class="branch-content"><b>Wokwi (simulador web)</b> — Sin hardware. wokwi.com → ESP32 → mismo código.</div>
    </div>
  </div>
</div>

<p class="sec-title">📲 Apps Android útiles</p>
<div class="apps">
  <div class="app-card a">
    <span class="icon">⚙️</span>
    <h4>ArduinoDroid</h4>
    <p class="desc">IDE completo · compila + sube · ~80 MB.<br>Inestable con algunos ESP32.</p>
  </div>
  <div class="app-card b">
    <span class="icon">🔵</span>
    <h4>Bluino Loader</h4>
    <p class="desc">IDE completo alternativo · más estable con ESP32 · gratis con ads.</p>
  </div>
  <div class="app-card c">
    <span class="icon">📡</span>
    <h4>Serial USB Terminal</h4>
    <p class="desc">SOLO Serial Monitor · no compila · perfecto si ya subiste con PC.</p>
  </div>
  <div class="app-card d">
    <span class="icon">🌐</span>
    <h4>Wokwi (navegador)</h4>
    <p class="desc">Simulador web · sin hardware · funciona en cualquier dispositivo.</p>
  </div>
</div>

<p class="sec-title">🎯 Recordatorio — los 3 comandos del Programa 03</p>
<div class="cmd-grid">
  <div class="cmd-card">
    <div class="cmd-key">1</div>
    <div class="cmd-icon">💡</div>
    <div class="cmd-action">Encender</div>
  </div>
  <div class="cmd-card">
    <div class="cmd-key">0</div>
    <div class="cmd-icon">⚫</div>
    <div class="cmd-action">Apagar</div>
  </div>
  <div class="cmd-card blink">
    <div class="cmd-key">p</div>
    <div class="cmd-icon">✨</div>
    <div class="cmd-action">Parpadear</div>
  </div>
</div>

</body>
</html>
`,
          code: "// PROGRAMA 03 — Control del LED desde el Serial Monitor\n// Comandos: '1' = encender | '0' = apagar | 'p' = parpadear\n// CÓDIGO LISTO PARA COPIAR Y PEGAR — sin espacios en blanco\n\n#define LED_PIN 2\n#define INTERVALO_PARPADEO 300   // ms entre cambios al parpadear\n\nchar modo = '0';                  // '0' apagado, '1' encendido, 'p' parpadeando\nunsigned long ultimoCambio = 0;\nbool estadoParpadeo = false;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN, OUTPUT);\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Programa 03 — Control desde Serial\");\n  Serial.println(\"Comandos: 1 = encender | 0 = apagar | p = parpadear\");\n}\n\nvoid loop() {\n  // 1. ¿Llegó un comando del Serial?\n  if (Serial.available() > 0) {\n    char comando = Serial.read();\n\n    if (comando == '1') {\n      modo = '1';\n      digitalWrite(LED_PIN, HIGH);\n      Serial.println(\"LED encendido\");\n    }\n    else if (comando == '0') {\n      modo = '0';\n      digitalWrite(LED_PIN, LOW);\n      Serial.println(\"LED apagado\");\n    }\n    else if (comando == 'p') {\n      modo = 'p';\n      ultimoCambio = millis();\n      Serial.println(\"LED parpadeando — escribe 0 o 1 para detener\");\n    }\n  }\n\n  // 2. Si está en modo parpadeo, alternar cada INTERVALO_PARPADEO ms\n  if (modo == 'p') {\n    if (millis() - ultimoCambio >= INTERVALO_PARPADEO) {\n      estadoParpadeo = !estadoParpadeo;\n      digitalWrite(LED_PIN, estadoParpadeo);\n      ultimoCambio = millis();\n    }\n  }\n}",
          codeRef: "// PROGRAMA 03 — Control del LED desde el Serial Monitor\n// Comandos: '1' = encender | '0' = apagar | 'p' = parpadear\n\n#define LED_PIN 2\n#define INTERVALO_PARPADEO 300\n\nchar modo = '0';\nunsigned long ultimoCambio = 0;\nbool estadoParpadeo = false;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN, OUTPUT);\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Programa 03 — Control desde Serial\");\n  Serial.println(\"Comandos: 1 = encender | 0 = apagar | p = parpadear\");\n}\n\nvoid loop() {\n  if (Serial.available() > 0) {\n    char comando = Serial.read();\n\n    if (comando == '1') {\n      modo = '1';\n      digitalWrite(LED_PIN, HIGH);\n      Serial.println(\"LED encendido\");\n    }\n    else if (comando == '0') {\n      modo = '0';\n      digitalWrite(LED_PIN, LOW);\n      Serial.println(\"LED apagado\");\n    }\n    else if (comando == 'p') {\n      modo = 'p';\n      ultimoCambio = millis();\n      Serial.println(\"LED parpadeando — escribe 0 o 1 para detener\");\n    }\n  }\n\n  if (modo == 'p') {\n    if (millis() - ultimoCambio >= INTERVALO_PARPADEO) {\n      estadoParpadeo = !estadoParpadeo;\n      digitalWrite(LED_PIN, estadoParpadeo);\n      ultimoCambio = millis();\n    }\n  }\n}",
          product: "Cada alumno con el Programa 03 funcionando en ALGUNA de las 4 vías (A, B, C o D). Foto del LED encendido / apagado / parpadeando (vías A-C) o captura de Wokwi (vía D) + captura del Serial Monitor con los 3 comandos enviados. Subir a Classroom mencionando qué vía funcionó.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta hora es 100% pragmatismo — la meta es que NADIE termine sin Programa 03 corriendo. Estrategias:\n\n(1) MINI-DIAGNÓSTICO COLECTIVO AL INICIO: '¿Quién logró el Programa 03 ayer?' (manos arriba) · '¿Quién se atoró en compilación?' · '¿Quién se atoró en upload?' · '¿Quién no logró nada con la tablet?'. Esto te dice qué porcentaje del grupo necesita cada vía y te permite anunciar UNA migración colectiva si más del 50% está atorado en lo mismo.\n\n(2) ASISTENTES: Identificar a los que ya terminaron y volverlos tu equipo de apoyo. Pueden destrabar 1-2 compañeros cada uno mientras tú atiendes los casos complejos.\n\n(3) ORDEN DE VÍAS — NO predicar: si un alumno ya intentó ArduinoDroid 30 min y no le sale, NO le digas 'intenta otra vez con ajustes'. Salta directo a Vía B o C. La idea NO es que aprenda a depurar ArduinoDroid, sino que tenga el Programa 03 corriendo.\n\n(4) WOKWI ES LA RED DE SEGURIDAD: Si un alumno NO tiene PC accesible y la tablet le falla de verdad, mándalo directo a Wokwi (Vía D). El aprendizaje del código y del Serial Monitor es idéntico — el hardware queda como tarea opcional para casa. Mejor que termine la clase con conocimiento que con frustración.\n\n(5) BLUINO LOADER: Esta es la vía menos conocida pero suele funcionar cuando ArduinoDroid no. Vale la pena que la pruebes ANTES de la clase para conocer su flujo y poder guiarlos.\n\n(6) IMPORTANTE — sobre el nombre 'Programa 03': este nombre se reutiliza para esta nueva fase de hardware. En W10 existió otro 'Programa 03' que era 'leer un botón en simulador Wokwi'. Si algún alumno pregunta, explicarle que el contador se 'reinició' para los programas físicos del ESP32."
        }
      ],
      cierre: "Hoy no se trataba de aprender ArduinoDroid — se trataba de aprender que ninguna herramienta es indispensable cuando hay un plan B (y un plan C, y un plan D). El Programa 03 vive ahora en su ESP32, en su PC, o en un simulador web — en cualquier lugar, hace lo mismo.",
      frase_docente: "La diferencia entre un técnico que se queda atorado y uno que entrega no es la herramienta — es la cantidad de planes de respaldo que tiene listos."
    },
    {
      id: "thu",
      label: "Jueves — 📡 BLE: el programa que sí funciona + análisis con IA",
      purpose: "Cargar el Programa 04 (BLE + Serial + Botón) — la versión funcional probada por el docente que reemplaza el intento del miércoles que no terminó de funcionar. Como actividad principal, los alumnos desglosan el código línea por línea usando una IA como tutor, y en Hora 2 controlan el LED desde el celular vía BLE.",
      hours: [
        {
          time: "Hora 1",
          title: "📡 Cargar el Programa 04 (BLE + Serial + Botón) + análisis del código con IA",
          theory: "Después de la batalla del miércoles para cargar el Programa 03, hoy damos un salto grande: BLE (Bluetooth Low Energy). En lugar de mandar comandos por cable USB, los mandaremos desde el celular. Y lo bonito es que el mismo programa acepta los comandos por TRES caminos a la vez — Serial, BLE y el botón físico.\n\n📡 ¿QUÉ ES BLE (Bluetooth Low Energy)?\nBLE es una versión del Bluetooth pensada para gastar muy poca energía. Es la que usan smartwatches, sensores de salud, candados inteligentes y los AirTags. A diferencia del Bluetooth clásico (que se usa para audífonos), BLE no mantiene una conexión continua — se 'despierta' solo cuando hay datos que enviar.\n\n🏷️ SERVICIO Y CARACTERÍSTICA — los dos conceptos clave\nCada dispositivo BLE anuncia:\n• Un SERVICIO (Service) — una 'categoría' de funciones que ofrece.\n• Una CARACTERÍSTICA (Characteristic) — el 'buzón' donde se escriben o leen datos dentro de ese servicio.\n\nPara identificarlos sin confusión, cada uno tiene un UUID — un código largo único (como una dirección IP pero para BLE). Nuestro programa define:\n• SERVICE_UUID: 4fafc201-1fb5-459e-8fcc-c5c9c331914b\n• CHARACTERISTIC_UUID: beb5483e-36e1-4688-b7f5-ea07361b26a8\n\nEsos UUIDs son arbitrarios — solo necesitan ser únicos. La app del celular y el ESP32 deben usar los MISMOS UUIDs para hablarse.\n\n🎯 EL PROGRAMA DE HOY (el que SÍ FUNCIONA)\nEl miércoles intentamos cargar el Programa 03 — algunos lograron pero el LED no respondía. Hoy les damos un programa más completo que ya está PROBADO y funciona:\n• Acepta los comandos '1' / '0' / 'p' por TRES vías: Serial, BLE y un botón físico.\n• Imprime en el Serial Monitor de DÓNDE vino cada comando (entre corchetes: [SERIAL], [BLE], [Botón]).\n• El comando 'p' parpadea 3 veces (no infinito).\n• El comando desconocido NO truena — solo imprime un mensaje de error elegante.\n\n🧠 EL PATRÓN: UNA FUNCIÓN, MÚLTIPLES FUENTES\nLo más elegante del programa es que NO duplica código. Hay UNA sola función llamada procesarComando(char comando, String origen) que hace TODO el trabajo. Las 3 fuentes (Serial, BLE, Botón) simplemente la llaman cuando llega un comando. Eso es ARQUITECTURA — algo que verás en sistemas operativos, apps móviles, servidores web. Hoy lo ven aplicado en un ESP32.\n\n🤖 ANÁLISIS CON IA — ACTIVIDAD CENTRAL DE HOY\nComo el código tiene partes nuevas (BLE, clases, callbacks, UUIDs), van a usar una IA como tutor personal. Le pasarán el código completo, le harán preguntas específicas por sección, y anotarán las respuestas en su libreta CON SUS PROPIAS PALABRAS.\n\n⚠️ REGLA DE ORO: la IA explica; ustedes ENTIENDEN. Si la respuesta de la IA tiene una palabra que no conocen, pregúntenle qué significa. NO copien y peguen sin entender — eso no les sirve para el examen ni para el proyecto final.",
          notebook: "Título: Análisis del Programa BLE — sección por sección.\n\nINSTRUCCIONES:\n1. Copia el código completo del bloque de abajo a una IA (ChatGPT, Claude, Gemini, Copilot, lo que tengan).\n2. Para cada sección abajo, hazle una pregunta específica a la IA y anota la respuesta en TUS PALABRAS (no copies y pegues — reformula).\n3. Si una palabra de la respuesta no la entiendes, vuelve a preguntar.\n\n📋 SECCIONES A DESGLOSAR (Hora 1 — primeras 4)\n\n1. Sección de #include (líneas 1-3)\n   → Pregunta a la IA: '¿Para qué sirven las 3 librerías BLEDevice.h, BLEUtils.h y BLEServer.h?'\n   → Escribe la respuesta resumida.\n\n2. Sección de UUIDs (líneas con SERVICE_UUID y CHARACTERISTIC_UUID)\n   → Pregunta a la IA: '¿Qué es un UUID en BLE y por qué se necesitan dos diferentes en este código?'\n   → Escribe la respuesta.\n\n3. La clase MyCallbacks (el bloque que empieza con 'class MyCallbacks : public BLECharacteristicCallbacks')\n   → Pregunta a la IA: '¿Qué hace el método onWrite y cuándo se ejecuta automáticamente?'\n   → Escribe la respuesta.\n\n4. La función procesarComando (la función larga con los if/else)\n   → Pregunta a la IA: '¿Por qué la función recibe el parámetro origen y para qué se usa?'\n   → Escribe la respuesta.\n\n🤔 PREGUNTA DE CIERRE DE LA HORA 1\n¿Qué ventaja tiene tener UNA función procesarComando en lugar de copiar el mismo if/else en 3 lugares distintos (Serial, BLE, Botón)?",
          practice: "🕐 ESTRUCTURA DE LA HORA (60 min)\n\n1️⃣ PASO 1 (5 min) — Verificar circuito\n  • LED en GPIO 2 (con resistencia 220Ω → GND).\n  • Botón entre GPIO 4 y GND.\n  • ESP32 conectado por USB (PC o tablet con la vía que les funcionó ayer).\n\n2️⃣ PASO 2 (10 min) — Cargar el código del Programa BLE\n  • Abrir Arduino IDE (o la vía que les funcionó ayer).\n  • File → New Sketch.\n  • COPIAR Y PEGAR el código completo del bloque de abajo (sin modificaciones).\n  • Tools → Board → ESP32 Dev Module · Port → COMx.\n  • Verificar (✓). La primera vez puede tardar 30-60 s porque compila las librerías BLE.\n  • Subir (→). Si pide BOOT, mantenerlo presionado.\n\n3️⃣ PASO 3 (5 min) — Probar Serial y Botón (BLE en Hora 2)\n  • Abrir Serial Monitor a 115200 baud.\n  • Debe aparecer el banner: 'ESP32 BLE + Serial + Botón', 'Nombre: ESP32-Felipe', y la lista de comandos.\n  • PROBAR SERIAL: escribir '1' + Enter → LED enciende, Serial dice '[SERIAL] Comando: 1' y '✓ LED encendido'.\n  • PROBAR BOTÓN: presionar el botón físico → LED cambia de estado, Serial dice '✓ Botón presionado - LED encendido'.\n\n4️⃣ PASO 4 (35 min) — ANÁLISIS DEL CÓDIGO CON IA (actividad principal)\n  • Abrir una IA en celular o navegador: ChatGPT, Claude, Gemini, Copilot.\n  • Copiar el código completo del bloque de abajo y pegarlo en el chat de la IA.\n  • Hacer una pregunta para CADA una de las 4 secciones de la libreta (ver columna 'Libreta').\n  • Anotar las respuestas EN PALABRAS PROPIAS — no copiar y pegar.\n  • Si una palabra no la entiendes, pregúntale a la IA qué significa.\n\n5️⃣ PASO 5 (5 min) — Cierre y respuesta colectiva\n  • El docente pregunta al grupo: '¿qué hace exactamente la clase MyCallbacks?'.\n  • 2-3 alumnos comparten su respuesta.\n  • El docente clarifica si hay confusión.\n\n📸 EVIDENCIA OBLIGATORIA AL FINAL DE LA HORA\n• Captura del Serial Monitor mostrando el banner y al menos un '[SERIAL] Comando: 1' o '[Botón] presionado'.\n• Foto de la libreta con las 4 secciones desglosadas y la respuesta a la pregunta de cierre.",
          code: "// PROGRAMA 04 — Control BLE + Serial + Botón\n// CÓDIGO LISTO PARA COPIAR Y PEGAR — funciona tal cual\n// (Esta es la versión funcional probada por el docente)\n\n#include <BLEDevice.h>\n#include <BLEUtils.h>\n#include <BLEServer.h>\n\n#define LED_PIN 2\n#define BUTTON_PIN 4\n\n#define SERVICE_UUID        \"4fafc201-1fb5-459e-8fcc-c5c9c331914b\"\n#define CHARACTERISTIC_UUID \"beb5483e-36e1-4688-b7f5-ea07361b26a8\"\n\nBLECharacteristic *pCharacteristic;\nint ledState = LOW;\nint lastButtonState = HIGH;\n\n// ===== DECLARACIÓN HACIA ADELANTE =====\nvoid procesarComando(char comando, String origen);\n\nclass MyCallbacks : public BLECharacteristicCallbacks {\n  void onWrite(BLECharacteristic *pCharacteristic) {\n    String value = pCharacteristic->getValue();\n\n    if (value.length() > 0) {\n      char comando = value[0];\n      procesarComando(comando, \"BLE\");\n    }\n  }\n};\n\n// Función para procesar comandos (sirve para BLE y Serial)\nvoid procesarComando(char comando, String origen) {\n  Serial.print(\"[\");\n  Serial.print(origen);\n  Serial.print(\"] Comando: \");\n  Serial.println(comando);\n\n  if (comando == '1') {\n    digitalWrite(LED_PIN, HIGH);\n    ledState = HIGH;\n    Serial.println(\"✓ LED encendido\");\n  }\n  else if (comando == '0') {\n    digitalWrite(LED_PIN, LOW);\n    ledState = LOW;\n    Serial.println(\"✓ LED apagado\");\n  }\n  else if (comando == 'p') {\n    Serial.println(\"✓ Parpadeando...\");\n    for (int i = 0; i < 3; i++) {\n      digitalWrite(LED_PIN, HIGH);\n      delay(300);\n      digitalWrite(LED_PIN, LOW);\n      delay(300);\n    }\n    ledState = LOW;\n    Serial.println(\"  ...listo\");\n  }\n  else if (comando != '\\n' && comando != '\\r' && comando != ' ') {\n    Serial.print(\"✗ Comando desconocido: '\");\n    Serial.print(comando);\n    Serial.println(\"'\");\n  }\n}\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);\n  pinMode(BUTTON_PIN, INPUT_PULLUP);\n  digitalWrite(LED_PIN, LOW);\n\n  Serial.begin(115200);\n\n  // ===== CONFIGURAR BLE =====\n  BLEDevice::init(\"ESP32-Felipe\");\n  BLEServer *pServer = BLEDevice::createServer();\n  BLEService *pService = pServer->createService(SERVICE_UUID);\n\n  pCharacteristic = pService->createCharacteristic(\n    CHARACTERISTIC_UUID,\n    BLECharacteristic::PROPERTY_WRITE\n  );\n\n  pCharacteristic->setCallbacks(new MyCallbacks());\n  pService->start();\n\n  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();\n  pAdvertising->start();\n\n  Serial.println(\"=================================\");\n  Serial.println(\" ESP32 BLE + Serial + Botón\");\n  Serial.println(\" Nombre: ESP32-Felipe\");\n  Serial.println(\"=================================\");\n  Serial.println(\" Comandos:\");\n  Serial.println(\"  '1' = Encender LED\");\n  Serial.println(\"  '0' = Apagar LED\");\n  Serial.println(\"  'p' = Parpadear 3 veces\");\n  Serial.println(\" Funciona por: Serial, BLE, Botón\");\n  Serial.println(\"=================================\");\n}\n\nvoid loop() {\n  // ===== LEER BOTÓN FÍSICO =====\n  int currentButtonState = digitalRead(BUTTON_PIN);\n\n  if (currentButtonState != lastButtonState && currentButtonState == LOW) {\n    delay(20);\n    ledState = (ledState == LOW) ? HIGH : LOW;\n    digitalWrite(LED_PIN, ledState);\n\n    Serial.print(\"✓ Botón presionado - LED \");\n    Serial.println(ledState == HIGH ? \"encendido\" : \"apagado\");\n  }\n  lastButtonState = currentButtonState;\n\n  // ===== LEER COMANDOS SERIAL =====\n  if (Serial.available()) {\n    char comando = Serial.read();\n    procesarComando(comando, \"SERIAL\");\n  }\n\n  delay(10);\n}",
          codeRef: "// PROGRAMA 04 — Control BLE + Serial + Botón (versión funcional, probada)\n\n#include <BLEDevice.h>\n#include <BLEUtils.h>\n#include <BLEServer.h>\n\n#define LED_PIN 2\n#define BUTTON_PIN 4\n\n#define SERVICE_UUID        \"4fafc201-1fb5-459e-8fcc-c5c9c331914b\"\n#define CHARACTERISTIC_UUID \"beb5483e-36e1-4688-b7f5-ea07361b26a8\"\n\nBLECharacteristic *pCharacteristic;\nint ledState = LOW;\nint lastButtonState = HIGH;\n\n// ===== DECLARACIÓN HACIA ADELANTE =====\nvoid procesarComando(char comando, String origen);\n\nclass MyCallbacks : public BLECharacteristicCallbacks {\n  void onWrite(BLECharacteristic *pCharacteristic) {\n    String value = pCharacteristic->getValue();\n\n    if (value.length() > 0) {\n      char comando = value[0];\n      procesarComando(comando, \"BLE\");\n    }\n  }\n};\n\n// Función para procesar comandos (sirve para BLE y Serial)\nvoid procesarComando(char comando, String origen) {\n  Serial.print(\"[\");\n  Serial.print(origen);\n  Serial.print(\"] Comando: \");\n  Serial.println(comando);\n\n  if (comando == '1') {\n    digitalWrite(LED_PIN, HIGH);\n    ledState = HIGH;\n    Serial.println(\"✓ LED encendido\");\n  }\n  else if (comando == '0') {\n    digitalWrite(LED_PIN, LOW);\n    ledState = LOW;\n    Serial.println(\"✓ LED apagado\");\n  }\n  else if (comando == 'p') {\n    Serial.println(\"✓ Parpadeando...\");\n    for (int i = 0; i < 3; i++) {\n      digitalWrite(LED_PIN, HIGH);\n      delay(300);\n      digitalWrite(LED_PIN, LOW);\n      delay(300);\n    }\n    ledState = LOW;\n    Serial.println(\"  ...listo\");\n  }\n  else if (comando != '\\n' && comando != '\\r' && comando != ' ') {\n    Serial.print(\"✗ Comando desconocido: '\");\n    Serial.print(comando);\n    Serial.println(\"'\");\n  }\n}\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);\n  pinMode(BUTTON_PIN, INPUT_PULLUP);\n  digitalWrite(LED_PIN, LOW);\n\n  Serial.begin(115200);\n\n  // ===== CONFIGURAR BLE =====\n  BLEDevice::init(\"ESP32-Felipe\");\n  BLEServer *pServer = BLEDevice::createServer();\n  BLEService *pService = pServer->createService(SERVICE_UUID);\n\n  pCharacteristic = pService->createCharacteristic(\n    CHARACTERISTIC_UUID,\n    BLECharacteristic::PROPERTY_WRITE\n  );\n\n  pCharacteristic->setCallbacks(new MyCallbacks());\n  pService->start();\n\n  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();\n  pAdvertising->start();\n\n  Serial.println(\"=================================\");\n  Serial.println(\" ESP32 BLE + Serial + Botón\");\n  Serial.println(\" Nombre: ESP32-Felipe\");\n  Serial.println(\"=================================\");\n  Serial.println(\" Comandos:\");\n  Serial.println(\"  '1' = Encender LED\");\n  Serial.println(\"  '0' = Apagar LED\");\n  Serial.println(\"  'p' = Parpadear 3 veces\");\n  Serial.println(\" Funciona por: Serial, BLE, Botón\");\n  Serial.println(\"=================================\");\n}\n\nvoid loop() {\n  // ===== LEER BOTÓN FÍSICO =====\n  int currentButtonState = digitalRead(BUTTON_PIN);\n\n  if (currentButtonState != lastButtonState && currentButtonState == LOW) {\n    delay(20);\n    ledState = (ledState == LOW) ? HIGH : LOW;\n    digitalWrite(LED_PIN, ledState);\n\n    Serial.print(\"✓ Botón presionado - LED \");\n    Serial.println(ledState == HIGH ? \"encendido\" : \"apagado\");\n  }\n  lastButtonState = currentButtonState;\n\n  // ===== LEER COMANDOS SERIAL =====\n  if (Serial.available()) {\n    char comando = Serial.read();\n    procesarComando(comando, \"SERIAL\");\n  }\n\n  delay(10);\n}",
          product: "ESP32 con el Programa 04 (BLE + Serial + Botón) cargado y respondiendo a los comandos por Serial y por el botón físico. Libreta con las 4 primeras secciones del código desglosadas usando IA (con las respuestas reformuladas en palabras propias).",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta hora introduce TRES conceptos nuevos a la vez (BLE, callbacks, AI como tutor). El truco es no profundizar en ninguno demasiado en Hora 1 — usar la IA es lo que les permitirá ir a su ritmo.\n\n(1) SOBRE LA CARGA DEL CÓDIGO: La primera compilación con librerías BLE tarda 30-60 segundos — avisar al grupo o se desesperan. Si en una PC vieja tarda 2 minutos, es normal.\n\n(2) SOBRE EL USO DE IA: Este es el primer ejercicio del semestre donde los alumnos usan IA COMO HERRAMIENTA DE APRENDIZAJE explícitamente. Reforzar la regla: 'la IA explica, ustedes entienden'. Pasar entre las mesas y preguntar al azar 'explícame con tus palabras qué hace este bloque' — si responden con frases textuales de la IA, pedirles que lo cuenten 'como si se lo explicaras a tu hermano de 12 años'.\n\n(3) SOBRE EL CÓDIGO: La declaración hacia adelante (line 'void procesarComando(char comando, String origen);' antes de la clase) es importante — sin ella, la clase MyCallbacks no podría llamar a procesarComando porque aún no está 'declarada'. C++ es estricto con esto. Si algún alumno pregunta, esa es la explicación corta.\n\n(4) SOBRE EL BOTÓN: El delay(20) después de detectar el botón es un debounce simplificado (más sencillo que el del Programa 05 que está pendiente). Es 'suficientemente bueno' para esta hora.\n\n(5) NIVELES DE ACOMPAÑAMIENTO: Algunos alumnos van a copiar y pegar respuestas de la IA sin entender. Identificar 2-3 que lo estén haciendo bien y volverlos modelo del resto. Para los que no entienden, sentarse 5 min con ellos y desmenuzar UNA sección juntos como ejemplo."
        },
        {
          time: "Hora 2",
          title: "📱 Controlar el LED desde el celular vía BLE + completar análisis",
          theory: "En Hora 1 cargamos el programa y lo probamos por Serial y Botón. Ahora abrimos el tercer canal: BLE. La meta de esta hora es ENCENDER el LED desde el celular, sin cable.\n\n📲 APP PARA BLE EN EL CELULAR — LA QUE USAMOS EN CLASE\n• BLE Controller — Play Store, GRATIS.\n  Es la app que usamos para esta práctica. Tiene interfaz simple: escanear → conectar → enviar comandos a la característica. Algunas versiones permiten configurar BOTONES PERSONALIZADOS que envían '1', '0', 'p' con un solo tap.\n\nAlternativas si BLE Controller no carga o presenta problemas:\n• nRF Connect for Mobile (Nordic Semiconductor) — más técnica, ideal para depurar.\n• LightBlue (Punch Through) — Android e iOS, gratis.\n• Serial Bluetooth Terminal (Kai Morich) — Android — modo BLE → escanear → conectar.\n\n🔄 EL FLUJO DE CONEXIÓN BLE EN GENERAL\n1. El ESP32 está ANUNCIANDO ('advertising') su nombre 'ESP32-Felipe'.\n2. El celular ESCANEA y encuentra el ESP32.\n3. El celular se CONECTA al ESP32.\n4. El celular descubre los SERVICIOS y CARACTERÍSTICAS disponibles.\n5. El celular ESCRIBE un carácter ('1', '0' o 'p') en la característica con UUID beb5483e-...\n6. El ESP32 recibe esa escritura → su método onWrite se ejecuta → llama a procesarComando con origen 'BLE' → mueve el LED.\n\n🪞 PARALELISMO CON SERIAL\nNotar la simetría:\n• Serial: PC escribe carácter en el puerto serie → Serial.read() lo recibe → llama a procesarComando con origen 'SERIAL'.\n• BLE: Celular escribe carácter en la característica → onWrite() se dispara → llama a procesarComando con origen 'BLE'.\n\nEs el mismo concepto (alguien externo manda un dato, el ESP32 lo procesa) por dos vías distintas. Esa es la elegancia del programa.\n\n🔋 ¿POR QUÉ BLE ES MEJOR QUE BLUETOOTH CLÁSICO PARA ESTO?\n• Consume MENOS BATERÍA — el ESP32 puede correr meses con una batería pequeña usando BLE bien.\n• Conexión más rápida — emparejarse toma 1-2 segundos en lugar de 10-15.\n• Mejor para pequeños mensajes — como nuestros caracteres '1', '0', 'p'.\n• Es estándar en TODO smartphone moderno (iPhone, Android).",
          notebook: "Título: Análisis del Programa BLE — completar.\n\n📋 SECCIONES RESTANTES A DESGLOSAR (Hora 2 — secciones 5-7)\n\n5. La función setup() — específicamente las líneas que empiezan con BLEDevice::, BLEServer, BLEService y BLEAdvertising.\n   → Pregunta a la IA: '¿Qué hace cada uno de esos 4 objetos (BLEDevice, BLEServer, BLEService, BLEAdvertising) en el setup?'\n   → Escribe la respuesta resumida en tus palabras.\n\n6. La función loop() — explica las 3 partes principales.\n   → Pregunta a la IA: 'Explícame las 3 secciones del loop: lectura del botón, lectura del Serial, y delay(10). ¿Qué hace cada una?'\n   → Escribe la respuesta.\n\n7. El detalle del botón — específicamente la línea: 'ledState = (ledState == LOW) ? HIGH : LOW;'\n   → Pregunta a la IA: 'Explícame qué hace la línea ledState = (ledState == LOW) ? HIGH : LOW; ¿Qué es ese operador \"? :\"?'\n   → Escribe la respuesta.\n\n🤔 PREGUNTAS DE INTEGRACIÓN (responder con tus propias palabras, sin IA)\n8. Cuando mandas '1' por BLE desde el celular, ¿qué función se ejecuta primero en el ESP32? ¿Y después qué pasa?\n9. ¿Cuál es la diferencia funcional entre mandar '1' por Serial, por BLE, o presionar el botón? Responde en términos de QUÉ pasa con el LED.\n10. Si quisieras agregar un cuarto comando 'r' que parpadee 6 veces en lugar de 3, ¿qué líneas EXACTAS del código tendrías que modificar/agregar?\n\n🚀 SI HICISTE EL RETO DEL SEGUNDO LED — RESPONDE TAMBIÉN:\n11. Lista las modificaciones específicas que hiciste al código (línea por línea, qué agregaste / qué cambiaste).\n12. ¿En qué función (setup, loop, procesarComando, etc.) agregaste los nuevos casos '2' y '3'? ¿Por qué ahí y no en otra?\n13. Predicción antes de probar: ¿qué pasaría si dejaras el LED2 sin la línea pinMode(LED2_PIN, OUTPUT) en el setup? ¿El '2' encendería el LED2? Justifica con lo que entendiste de cómo funciona el GPIO.",
          practice: "🕐 ESTRUCTURA DE LA HORA (60 min)\n\n1️⃣ PASO 1 (5 min) — Verificar que el programa de Hora 1 sigue cargado\n  • El ESP32 debe seguir advertising. Si reiniciaron la PC, volver a abrir Serial Monitor y presionar el botón EN del ESP32 para ver el banner.\n  • LED debe responder al botón físico — si no, recargar el código de Hora 1.\n\n2️⃣ PASO 2 (5 min) — Instalar BLE Controller\n  • Abrir Play Store en el celular.\n  • Buscar: 'BLE Controller'.\n  • Instalar la app.\n  • Aceptar permisos de Bluetooth y ubicación al abrir (BLE en Android requiere ubicación por seguridad — regla de Google, no porque la app sepa dónde estás).\n\n3️⃣ PASO 3 (5 min) — Escanear y conectar\n  • Abrir BLE Controller.\n  • Tocar 'Scan' / 'Buscar dispositivos'.\n  • Identificar 'ESP32-Felipe' en la lista.\n    ⚠️ Si varios compañeros cargaron el código sin cambiarle el nombre, pueden aparecer varios 'ESP32-Felipe' — guíate por la señal MÁS FUERTE (RSSI más cercano a 0, típicamente -40 a -60 dBm cuando está cerca).\n  • Tocar el dispositivo correcto para conectarte.\n\n4️⃣ PASO 4 (10 min) — Enviar comandos a la característica\n  • Una vez conectado, BLE Controller muestra los servicios del ESP32.\n  • Buscar el servicio con UUID que empieza con '4fafc201-...'.\n  • Seleccionar la característica con UUID 'beb5483e-...' (la WRITE).\n  • En el campo de texto, escribir: 1\n  • Tocar 'Send' / 'Write'.\n  • El LED debe ENCENDER. En el Serial Monitor de la PC (si lo tienes abierto) aparece: '[BLE] Comando: 1' y '✓ LED encendido'.\n  • Repetir con '0' (apaga) y 'p' (parpadea 3 veces).\n\n  💡 TIP — si tu BLE Controller permite configurar botones personalizados, créa 3 botones: uno con valor '1' (etiqueta 'Encender'), otro con '0' ('Apagar'), otro con 'p' ('Parpadear'). Después solo tocas y listo, sin escribir cada vez.\n\n5️⃣ PASO 5 (15 min) — Completar el análisis con IA en libreta\n  • Volver a la IA donde quedó el análisis de Hora 1.\n  • Responder las secciones 5, 6 y 7 con la ayuda de la IA.\n  • Responder las preguntas 8, 9 y 10 SIN IA — en sus propias palabras.\n\n6️⃣ PASO 6 (5 min) — Demostración al docente\n  • Cada alumno (o pareja) demuestra:\n    - LED encendido por BLE desde el celular (mostrar la pantalla de BLE Controller después del 'Send').\n    - LED apagado por BLE.\n    - Parpadeo de 3 veces.\n  • El docente verifica que el Serial Monitor muestra los tres '[BLE] Comando: x' correspondientes.\n\n🚀 RETO — AGREGAR UN SEGUNDO LED (si terminaste antes — actividad para mantenerte ocupado/a)\n  Una vez funcionando el LED por BLE, aplica lo que entendiste del código para EXTENDERLO. La meta es controlar un segundo LED con comandos nuevos.\n\n  🧰 Material extra:\n  • 1 LED más (de otro color si tienes — naranja, verde, azul).\n  • 1 resistencia 220Ω adicional.\n  • 1 cable jumper más.\n\n  🎯 Nuevos comandos a implementar:\n  • '2' → encender LED2\n  • '3' → apagar LED2\n  • 'b' (bonus) → ambos LEDs encendidos a la vez\n\n  🔌 Circuito adicional:\n  • LED2 pata larga (+) → R 220Ω → GPIO 5\n  • LED2 pata corta (−) → GND (la misma fila '−' del LED1)\n\n  📋 Misión — identifica TÚ MISMO qué partes del código necesitas modificar.\n  Pistas (sin spoilers de la respuesta):\n  • Hay UNA línea cerca del inicio que define el pin del LED actual (#define LED_PIN 2) — necesitas otra IGUAL para el segundo LED.\n  • En setup() hay líneas que 'inicializan' el LED como salida — necesitas duplicarlas para LED2.\n  • En procesarComando() hay un patrón if/else if — necesitas agregar más else if para '2', '3' y opcionalmente 'b'.\n  • El banner del setup() lista los comandos — actualízalo con los nuevos.\n\n  💡 SI TE ATORAS DESPUÉS DE 10 MIN DE INTENTAR: vuelve a la IA. Pega tu código modificado y pregunta 'qué le falta para que funcione el comando 2'. Pero PRIMERO intenta tú.\n\n  📸 EVIDENCIA DEL RETO (opcional pero recomendada):\n  • Foto con LOS DOS LEDs (uno encendido, otro apagado) controlados desde BLE Controller.\n  • Captura del Serial Monitor mostrando los nuevos comandos '[BLE] Comando: 2' y '[BLE] Comando: 3'.\n  • Copia del código modificado (pégalo en Classroom).\n\n📸 EVIDENCIA OBLIGATORIA DE LA HORA (base, sin reto)\n• Captura de BLE Controller mostrando la conexión exitosa al ESP32-Felipe.\n• Captura del Serial Monitor mostrando los 3 comandos '[BLE]' procesados.\n• Foto de la libreta con las secciones 5-10 completadas.\n• Video corto (15 s, opcional pero recomendado) del LED respondiendo al celular.",
          code: "// Mismo Programa 04 cargado en Hora 1 — referencia rápida.\n// El código completo está en la Hora 1.\n\n// Recordatorio del flujo BLE:\n// 1. Celular escribe '1' a la característica con UUID beb5483e-36e1-4688-b7f5-ea07361b26a8\n// 2. Se dispara onWrite() en la clase MyCallbacks\n// 3. onWrite() lee value[0] → llama a procesarComando(comando, \"BLE\")\n// 4. procesarComando imprime '[BLE] Comando: 1', enciende el LED, imprime '✓ LED encendido'",
          codeRef: "// Mismo Programa 04 cargado en Hora 1 — referencia rápida.\n// El código completo está en la Hora 1.\n\n// Recordatorio del flujo BLE:\n// 1. Celular escribe '1' a la característica con UUID beb5483e-36e1-4688-b7f5-ea07361b26a8\n// 2. Se dispara onWrite() en la clase MyCallbacks\n// 3. onWrite() lee value[0] → llama a procesarComando(comando, \"BLE\")\n// 4. procesarComando imprime '[BLE] Comando: 1', enciende el LED, imprime '✓ LED encendido'",
          product: "Cada alumno demuestra el LED respondiendo a los 3 comandos ('1', '0', 'p') enviados desde BLE Controller en su celular vía BLE. Libreta con las secciones 5-7 desglosadas con IA y las preguntas 8-10 contestadas con palabras propias (más 11-13 si hizo el reto del segundo LED). Captura de BLE Controller + Serial Monitor + video del LED respondiendo subidos a Classroom.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta hora es VISUALMENTE espectacular — los alumnos prenden y apagan el LED desde su celular sin cable. Es uno de los momentos 'wow' del semestre. Aprovecharlo para reforzar la idea de que TODO lo que aprendimos (estructuras, funciones, estado) se conecta cuando se hace algo así.\n\n(1) SOBRE BLE CONTROLLER: Es la app que usamos en clase. Más simple que nRF Connect — interfaz amigable, algunas versiones permiten configurar botones personalizados que envían los valores directos ('1', '0', 'p') con un solo tap. Demostrar al grupo en proyector la primera conexión: scan → identificar 'ESP32-Felipe' → connect → seleccionar característica → enviar '1'. Después dejarlos solos. Si alguno no puede instalar BLE Controller, intentar nRF Connect for Mobile o LightBlue como alternativas.\n\n(2) PERMISOS DE UBICACIÓN EN ANDROID: BLE en Android 6+ requiere permiso de ubicación 'mientras se usa la app' para escanear. NO es porque la app sepa dónde estás — es porque los dispositivos BLE pueden ser usados para geolocalizar (regla de Google). Algunos alumnos pueden negarse a aceptar — explicarles la razón.\n\n(3) EL NOMBRE 'ESP32-Felipe': Si varios alumnos cargan el código sin cambiar nada, TODOS los ESP32 se llaman 'ESP32-Felipe'. En el scanner aparecerán varios — los alumnos deben identificar el suyo por la SEÑAL más fuerte (RSSI más cercano a 0 en BLE Controller, típicamente entre -40 y -60 dBm cuando está cerca). Si hay confusión, reto opcional: que cada alumno cambie BLEDevice::init(\"ESP32-Felipe\") por BLEDevice::init(\"ESP32-SuNombre\") y recompile.\n\n(4) SOBRE EL ANÁLISIS CON IA — REPASO: La pregunta 10 ('¿qué líneas modificarías para agregar un comando r?') es la PRUEBA real de que entendieron. Si no logran responderla, su análisis con IA fue superficial. Apoyarlos individualmente si lo necesitan.\n\n(5) IMPORTANTE — Si NO funciona BLE en algún alumno: opciones de fallback: (a) verificar que el celular tiene Bluetooth activado (sí, suena obvio), (b) cerrar y volver a abrir BLE Controller, (c) reiniciar el ESP32 (botón EN), (d) instalar otra app (nRF Connect o LightBlue), (e) si nada funciona, el alumno puede trabajar TODA la hora desde Serial — el código y el análisis siguen siendo válidos. La meta es que ENTIENDAN el programa, no necesariamente que controlen el LED desde el celular.\n\n(6) SOBRE EL RETO DEL SEGUNDO LED (mantener ocupados a los que acaban): Es el ejercicio MÁS valioso de la hora porque OBLIGA a aplicar lo que entendieron del código. Quien lo logre demuestra comprensión real (no superficial). Recomendaciones: (a) tener 5-6 LEDs y resistencias 220Ω extra disponibles en el aula para prestar; (b) NO darles la respuesta — máximo guiarlos con preguntas ('¿dónde se inicializa el LED1? ¿qué tendrías que hacer igual para el LED2?'); (c) si alguien lo logra rápido, retarlos con el bonus 'b' (ambos LEDs encendidos) o incluso una variante 'a' (parpadeo alternado entre LED1 y LED2 — esto requiere usar millis() para no bloquear). El reto está pensado como ACTIVIDAD DIFERENCIADA — los rápidos no se aburren y los del ritmo normal no se sienten presionados a hacerlo."
        }
      ],
      cierre: "Hoy controlaron un dispositivo físico desde su celular sin tocarlo — eso es lo que llaman 'Internet de las Cosas' en una de sus formas más puras. Y el código que lo hace posible NO es magia: cada línea tiene una función específica que ahora pueden explicar con palabras propias.",
      frase_docente: "La diferencia entre copiar código y entender código es la libreta. La IA acelera el aprendizaje, pero solo cuando reformulas lo que te explicó."
    }
  ]
};
