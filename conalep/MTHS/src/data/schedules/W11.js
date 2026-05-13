export const W11 = {
  materia: "mths",
  weekId: "W11",
  days: [
    {
      id: "tue",
      label: "Martes — 🔧 Bootstrap físico: construir el ESP y cargar el programa",
      purpose: "Cerrar la fase de instalación que quedó pendiente: terminar el setup del ESP32 en Windows, construir el circuito físico (botón + LED + resistencia) y cargar el Programa 04 — el mismo que ya funcionaba en Wokwi, ahora en hardware real.",
      hours: [
        {
          time: "Hora 1",
          title: "🪟 Cerrar la instalación + reconocer el ESP32 en el puerto COM",
          theory: "Ya escribimos código que funciona en Wokwi (simulador). Hoy damos el paso definitivo: hacer que ese mismo código corra en silicio real — un ESP32 conectado por USB a la computadora.\n\n🔌 EL CABLE NO ES SOLO ALIMENTACIÓN\nEl cable USB del ESP32 hace tres cosas a la vez:\n• Suministra 5 V de energía a la placa.\n• Carga el programa compilado desde la PC al microcontrolador.\n• Lleva los mensajes del Serial.print() de regreso a la PC.\n\nUn cable USB barato 'de solo carga' (los que vienen con power banks) NO sirve — esos no tienen los hilos de datos.\n\n🚪 EL PUERTO COM\nCuando conectas el ESP32, Windows lo registra como un puerto serial virtual con nombre COMx (COM3, COM4, COM7...). Si no aparece en el Administrador de Dispositivos significa que falta el driver del chip que traduce USB ↔ Serial:\n• Placas con CP2102 → driver de Silicon Labs.\n• Placas con CH340  → driver de WCH (más común en clones).\n\nSin driver, el ESP32 está conectado físicamente pero invisible para Arduino IDE.\n\n📦 EN ARDUINO IDE\n1. Tools → Board → ESP32 Dev Module (o el modelo que tengas).\n2. Tools → Port → seleccionar el COM que apareció al conectar.\n3. Si no aparece ningún puerto → cerrar Arduino IDE, instalar el driver, reabrir.\n\n🧪 PRUEBA MÍNIMA: SKETCH VACÍO\nEl primer programa NO debe tener LEDs ni botones — solo confirmar que la PC le habla al ESP32:\n\n  void setup() { Serial.begin(115200); Serial.println(\"vivo\"); }\n  void loop()  {}\n\nSi el Serial Monitor muestra 'vivo' una vez, la cadena USB → driver → IDE → ESP32 está completa. A partir de ahí todo lo demás es código.",
          notebook: "Título: Bootstrap físico del ESP32.\n1. ¿Qué tres cosas hace el cable USB cuando conectas el ESP32?\n2. ¿Por qué un cable 'de solo carga' no sirve?\n3. ¿Cómo se llama el puerto que aparece en Windows cuando conectas el ESP32?\n4. ¿Qué pasa si el chip USB-Serial es CH340 y no instalas su driver?\n5. ¿Por qué cargamos primero un sketch vacío antes de un programa real?",
          practice: "Trabajo paso a paso:\n\n1. Conectar el ESP32 con su cable USB a la PC.\n2. Abrir Administrador de Dispositivos (Win + X → Administrador de Dispositivos).\n3. Buscar la sección 'Puertos (COM y LPT)' — debe aparecer un nuevo COMx.\n   - Si NO aparece → instalar driver (CP2102 o CH340 según la placa) y reconectar.\n4. Abrir Arduino IDE.\n5. Tools → Board → ESP32 Dev Module.\n6. Tools → Port → seleccionar el COM que apareció.\n7. File → New → pegar este sketch mínimo:\n\n```cpp\nvoid setup() {\n  Serial.begin(115200);\n  Serial.println(\"vivo\");\n}\n\nvoid loop() {\n  // vacío\n}\n```\n\n8. Click en ✓ (Verify) para compilar.\n9. Click en → (Upload) para cargar al ESP32.\n   - Si pide 'Hold BOOT button' durante la carga: mantener presionado el botón BOOT del ESP32 hasta que aparezca 'Connecting...'.\n10. Tools → Serial Monitor → seleccionar 115200 baud.\n11. Pulsar el botón EN (reset) del ESP32. Debe aparecer la palabra 'vivo' en el Serial Monitor.\n12. Si aparece — la cadena completa funciona. Guardar el sketch como 'Test_Vivo'.",
          product: "ESP32 conectado, reconocido como puerto COM, sketch 'Test_Vivo' cargado y mostrando la palabra 'vivo' en el Serial Monitor a 115200 baud.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta hora es el cuello de botella real del semestre. El código no es el problema — el problema es el driver, el cable o el puerto. Pasos prácticos para el aula:\n• Tener listos los drivers CP2102 y CH340 en una USB o carpeta de red para no depender del WiFi escolar.\n• Identificar 2-3 alumnos rápidos como ayudantes — pueden destrabar a los demás mientras tú resuelves casos complejos.\n• Si una PC simplemente no reconoce el puerto, mover al alumno a otra PC en lugar de gastar 30 min depurando — el objetivo es que TODOS lleguen al 'vivo' antes de la hora 2.\n• El sketch vacío es deliberado: si fallara con un programa complejo, no sabríamos si es código o hardware. Vacío = aislamos hardware."
        },
        {
          time: "Hora 2",
          title: "Programa 08: Control del LED desde el Serial Monitor",
          theory: "Ya cerramos la cadena USB → ESP32 → LED en hardware real (Hora 1 + Programa 04). Ahora invertimos la dirección de la comunicación: el ESP32 deja de solo HABLAR por el Serial — hoy también nos ESCUCHA.\n\n🔄 COMUNICACIÓN BIDIRECCIONAL\nEl puerto serial es de doble vía:\n• PC → ESP32: tú escribes, el ESP32 lee.\n• ESP32 → PC: el ESP32 escribe, tú lees.\nHasta hoy solo usamos la dirección 2. Hoy abrimos la dirección 1.\n\n📥 EL BUFFER DE ENTRADA\nCuando escribes algo en el Serial Monitor y presionas Enter, esos caracteres se guardan en un buffer dentro del ESP32 — una pequeña cola de espera. En cada loop() preguntamos si hay algo ahí:\n\n• Serial.available() → devuelve cuántos caracteres están esperando (0 = nada, >0 = hay algo).\n• Serial.read() → toma UN carácter del buffer y lo devuelve. Avanza la cola.\n\n```\nif (Serial.available() > 0) {\n  char comando = Serial.read();\n  // ahora 'comando' es '1', '0', 'p', etc.\n}\n```\n\n🎯 COMANDOS DE HOY\n• '1' → encender LED\n• '0' → apagar LED\n• 'p' → parpadear (cambia cada 300 ms)\n\n⚠️ EL OPERADOR ' (COMILLAS SIMPLES)\nFíjate que comparamos con comillas simples: comando == '1' (no comando == 1). Las comillas simples representan el CARÁCTER '1', no el número uno. Son cosas distintas: el carácter '1' es el código 49 en ASCII, el número 1 es 1.\n\n⏱️ millis() — TIMING NO BLOQUEANTE (concepto nuevo)\nPara el modo parpadeo NO podemos usar delay() — si usáramos delay(300), durante esos 300 ms el ESP32 estaría 'congelado' y NO escucharía nuevos comandos. Solución: millis().\n\nmillis() devuelve cuántos milisegundos lleva encendido el ESP32. Cada vez que el loop() pasa, comparamos:\n• ¿millis() - ultimoCambio es ≥ 300?\n• Si sí → toca cambiar el LED y guardar el momento.\n• Si no → seguir, sin bloquear.\n\nAsí el loop() sigue dando vueltas todo el tiempo y puede escuchar nuevos comandos EN MEDIO de un parpadeo. ✨",
          notebook: "Título: El ESP32 también escucha.\n1. ¿Qué devuelve Serial.available() si nadie ha escrito nada en el Serial Monitor?\n2. ¿Qué diferencia hay entre Serial.read() y Serial.println()?\n3. ¿Por qué comparamos con comillas: comando == '1' y no comando == 1?\n4. ¿Para qué sirve millis() y por qué NO usamos delay() en el modo parpadeo?\n5. Si presionas la tecla '1' SIN dar Enter en Serial Monitor, ¿el ESP32 hace algo? ¿Por qué?\n6. Si estando en modo 'p' presionas '0', ¿qué tan rápido se detiene el parpadeo? Explica con millis().\n7. Da un ejemplo de la vida real donde un dispositivo escucha comandos por un canal (Alexa, control remoto TV, etc.).",
          practice: "🔧 PASO 1 — Reutilizar el circuito de la Hora 1\n• Quitar el botón — esta hora NO lo usamos.\n• Dejar SOLO el LED en GPIO 2 con su resistencia 220Ω → GND.\n• El ESP32 sigue conectado por USB en el mismo puerto COM.\n\n💻 PASO 2 — Cargar el código\n  1. Arduino IDE → File → New Sketch.\n  2. Pegar el código (con espacios en blanco) y completar.\n  3. Verificar (✓) → Subir (→). Esperar 'Done uploading.'\n\n📡 PASO 3 — Configurar el Serial Monitor para enviar comandos\n  1. Tools → Serial Monitor (Ctrl+Shift+M).\n  2. Confirmar 115200 baud abajo a la derecha.\n  3. ⚠️ IMPORTANTE: en la barra inferior del Serial Monitor cambiar 'No line ending' → 'Newline' (o 'Both NL & CR').\n     Esto hace que al presionar Enter se mande efectivamente el carácter al ESP32.\n  4. En el campo de texto de ARRIBA del Serial Monitor, escribir el comando y presionar Enter.\n\n🧪 PASO 4 — Probar los 3 comandos\n  • Escribir '1' + Enter → LED enciende. Serial debe imprimir 'LED encendido'.\n  • Escribir '0' + Enter → LED apaga. Serial: 'LED apagado'.\n  • Escribir 'p' + Enter → LED empieza a parpadear cada 300 ms. Serial: 'LED parpadeando — escribe 0 o 1 para detener'.\n  • Estando en parpadeo, escribir '0' + Enter → debe detenerse INMEDIATAMENTE. Eso es el poder de millis().\n\n🔬 PASO 5 — Experimentos\n  Experimento A: Escribir un carácter que NO sea 1/0/p (ejemplo: 'x'). ¿Qué hace el ESP32? ¿Por qué no truena?\n  Experimento B: Cambiar INTERVALO_PARPADEO de 300 a 50. Subir de nuevo. ¿Cómo se ve el parpadeo? ¿Sigues pudiendo detenerlo con '0'?\n  Experimento C: Cambiar INTERVALO_PARPADEO a 2000. ¿Cómo se siente ahora? ¿Le tienes que esperar para detener?\n\n💾 Guardar como 'Programa_08_Serial_Control'.\n📸 Subir a Classroom: captura del Serial Monitor con los 3 comandos enviados y sus respuestas.",
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
    <div><span class="info">Programa 08 — Control desde Serial</span></div>
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
          code: "// PROGRAMA 08 — Control del LED desde el Serial Monitor\n// Comandos: '1' = encender | '0' = apagar | 'p' = parpadear\n// Completa los espacios en blanco\n\n#define LED_PIN 2\n#define INTERVALO_PARPADEO 300   // ms entre cambios al parpadear\n\nchar modo = '0';                  // '0' apagado, '1' encendido, 'p' parpadeando\nunsigned long ultimoCambio = 0;\nbool estadoParpadeo = false;\n\nvoid setup() {\n  Serial.begin( );                // baudrate del ESP32\n  pinMode(LED_PIN,  );            // ¿OUTPUT o INPUT?\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Programa 08 — Control desde Serial\");\n  Serial.println(\"Comandos: 1 = encender | 0 = apagar | p = parpadear\");\n}\n\nvoid loop() {\n  // 1. ¿Llegó un comando del Serial?\n  if (Serial.available() > 0) {\n    char comando = Serial.read();\n\n    if (comando == '1') {\n      modo = '1';\n      digitalWrite(LED_PIN,  );    // encender\n      Serial.println(\"LED encendido\");\n    }\n    else if (comando == '0') {\n      modo = '0';\n      digitalWrite(LED_PIN,  );    // apagar\n      Serial.println(\"LED apagado\");\n    }\n    else if (comando ==  ) {        // ¿qué carácter activa el parpadeo?\n      modo = 'p';\n      ultimoCambio = millis();\n      Serial.println(\"LED parpadeando — escribe 0 o 1 para detener\");\n    }\n  }\n\n  // 2. Si está en modo parpadeo, alternar cada INTERVALO_PARPADEO ms\n  if (modo == 'p') {\n    if (millis() - ultimoCambio >= INTERVALO_PARPADEO) {\n      estadoParpadeo = !estadoParpadeo;\n      digitalWrite(LED_PIN,  );    // aplicar el nuevo estado\n      ultimoCambio = millis();\n    }\n  }\n}",
          codeRef: "// PROGRAMA 08 — Control del LED desde el Serial Monitor\n// Comandos: '1' = encender | '0' = apagar | 'p' = parpadear\n\n#define LED_PIN 2\n#define INTERVALO_PARPADEO 300\n\nchar modo = '0';\nunsigned long ultimoCambio = 0;\nbool estadoParpadeo = false;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN, OUTPUT);\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Programa 08 — Control desde Serial\");\n  Serial.println(\"Comandos: 1 = encender | 0 = apagar | p = parpadear\");\n}\n\nvoid loop() {\n  if (Serial.available() > 0) {\n    char comando = Serial.read();\n\n    if (comando == '1') {\n      modo = '1';\n      digitalWrite(LED_PIN, HIGH);\n      Serial.println(\"LED encendido\");\n    }\n    else if (comando == '0') {\n      modo = '0';\n      digitalWrite(LED_PIN, LOW);\n      Serial.println(\"LED apagado\");\n    }\n    else if (comando == 'p') {\n      modo = 'p';\n      ultimoCambio = millis();\n      Serial.println(\"LED parpadeando — escribe 0 o 1 para detener\");\n    }\n  }\n\n  if (modo == 'p') {\n    if (millis() - ultimoCambio >= INTERVALO_PARPADEO) {\n      estadoParpadeo = !estadoParpadeo;\n      digitalWrite(LED_PIN, estadoParpadeo);\n      ultimoCambio = millis();\n    }\n  }\n}",
          product: "Proyecto Programa_08_Serial_Control: el LED responde a 3 comandos ('1', '0', 'p') enviados desde el Serial Monitor. Captura del Serial mostrando los tres comandos enviados y sus respuestas + foto del LED parpadeando.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Dos conceptos nuevos importantes que es bueno reforzar: (1) la diferencia entre el CARÁCTER '1' (comillas simples) y el NÚMERO 1 — esta confusión va a aparecer toda la carrera, hoy es un buen momento para asentarla. Mostrar en pizarra: ASCII '1' = 49, '0' = 48, 'p' = 112. (2) millis() vs delay() es probablemente el cambio mental más grande del semestre — la idea de que el código no se 'pausa' sino que sigue dando vueltas y compara tiempos. Si alguien lo entiende a la primera, está listo para programar interfaces interactivas. Sobre el 'Newline' del Serial Monitor: es la causa #1 de 'no me funciona' — si el alumno deja 'No line ending', los comandos llegan pero los Serial.read() pueden no procesarlos como espera. Verificar en la barra inferior. Sobre el experimento A (carácter inválido como 'x'): el código simplemente IGNORA — buena oportunidad para discutir 'manejo defensivo' (no truena con entrada inesperada). Si alguien va rápido, retarlo a agregar un comando 'h' (help) que reimprima la lista de comandos."
        }
      ],
      cierre: "El simulador enseña la lógica; el hardware enseña la realidad. Hoy cerramos esa cadena — del cable USB al LED parpadeando con un botón real, con todo lo que pasa en medio bajo control.",
      frase_docente: "Cuando el código corre en silicio, ya no es teoría: es una máquina obedeciendo lo que escribiste."
    },
    {
      id: "wed",
      label: "Miércoles — 📅 Sin actividades programadas",
      purpose: "Día sin sesión de MTHS. No hay actividades programadas para esta jornada.",
      hours: [
        {
          time: "📅 Sin sesión",
          title: "📅 Sin actividades programadas",
          theory: "Hoy no hay sesión de MTHS. Lo que se hizo el martes (bootstrap del ESP32 + cargar Programa 04 en hardware real) es la base sobre la que construiremos el proyecto final a partir de la semana 12.\n\n📌 RECORDATORIO\nSi el martes no terminaste el circuito físico o no logró cargar el Programa 04 en hardware, este es un buen día para ponerse al corriente en casa. La semana 12 abre con el proyecto final y necesitamos que todos partan del mismo punto.\n\n🧰 LO QUE YA TIENES INSTALADO\n• Arduino IDE con soporte para ESP32.\n• Driver del chip USB-Serial (CP2102 o CH340).\n• Sketch 'Test_Vivo' como referencia rápida si algo falla.\n• Programa_04_Hardware corriendo en silicio real.",
          notebook: "Repaso voluntario:\n1. Anota los pasos para reconocer el ESP32 en Windows (puerto COM).\n2. ¿Qué papel cumple el Serial Monitor en el ciclo de desarrollo?\n3. ¿Qué diferencia notaste entre el botón en Wokwi y el botón real?",
          practice: "Sin práctica obligatoria. Si quieres adelantar, investiga qué es el Bluetooth Classic vs BLE y qué diferencia hay entre los dos — ese tema asoma la próxima semana.",
          product: "Sin entregable.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Día sin sesión. Si algún alumno se acerca, reforzar que la próxima semana arrancamos con el proyecto final y conectividad inalámbrica."
        }
      ],
      cierre: "Un día sin sesión también cuenta — el cerebro consolida cuando descansa.",
      frase_docente: "El descanso no es ausencia de progreso; es la condición para que ocurra."
    },
    {
      id: "thu",
      label: "Jueves — 📅 Sin actividades programadas",
      purpose: "Día sin sesión de MTHS. No hay actividades programadas para esta jornada.",
      hours: [
        {
          time: "📅 Sin sesión",
          title: "📅 Sin actividades programadas",
          theory: "Hoy no hay sesión de MTHS. Aprovecha para repasar el martes si te quedaste con dudas, o para preparar la mente: la semana 12 entra al proyecto final.\n\n🚀 LO QUE VIENE\nEn la semana 12 abrimos el último corte del semestre con el proyecto final. La idea es conectar el ESP32 inalámbricamente (Bluetooth) para controlar el LED desde un celular u otra PC — el detalle exacto del proyecto se confirma en la sesión del martes próximo.\n\n📚 SI QUIERES ADELANTARTE\n• Revisa que tu Programa_04_Hardware del martes siga funcionando.\n• Investiga: ¿qué es el Bluetooth y cómo se diferencia del Wi-Fi?\n• ¿Qué es 'pairing' (emparejamiento) entre dispositivos Bluetooth?",
          notebook: "Reflexión opcional:\n1. ¿En qué situación cotidiana usas Bluetooth?\n2. ¿Qué pasaría si dos dispositivos Bluetooth no se emparejaran antes de comunicarse?\n3. Si pudieras controlar el LED del ESP32 desde tu celular, ¿qué proyecto se te ocurre construir con eso?",
          practice: "Sin práctica obligatoria.",
          product: "Sin entregable.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Día sin sesión. Confirmar la próxima semana qué proyecto inalámbrico exacto se trabajará — Bluetooth Classic con app del celular es lo más viable, pero también queda abierto BLE o WiFi según el equipo disponible."
        }
      ],
      cierre: "El último corte abre la próxima semana — preparar la mente también es parte del trabajo.",
      frase_docente: "Lo que viene siempre se prepara antes — el éxito del próximo martes empieza con la calma de hoy."
    }
  ]
};
