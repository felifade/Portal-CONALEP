export const W10 = {
  materia: "mths",
  weekId: "W10",
  days: [
    {
      id: "tue",
      label: "Martes — Entradas digitales: el botón físico",
      purpose: "Pasar de salidas (LEDs que encienden y apagan) a entradas (botones que el ESP32 puede leer), entendiendo INPUT_PULLUP y la lógica invertida.",
      hours: [
        {
          time: "Hora 1",
          title: "Programa 03: leer el estado de un botón",
          theory: "Hasta ahora el ESP32 solo ha enviado señales hacia afuera (LEDs). Hoy aprenderá a escuchar: leer el estado de un botón físico. Un GPIO configurado como entrada puede detectar si hay voltaje (HIGH) o no (LOW) en el pin.\n\n🔌 INPUT_PULLUP — la resistencia interna\nEl ESP32 tiene resistencias pull-up internas que puedes activar con INPUT_PULLUP. Cuando usas esta configuración:\n- El pin normalmente lee HIGH (3.3V)\n- Al presionar el botón (que conecta el pin a GND), lee LOW (0V)\n- Resultado: la lógica es invertida — LOW significa PRESIONADO\n\nVentaja: no necesitas una resistencia externa, el chip la incluye.\n\n📖 digitalRead()\nLee el estado actual de un pin de entrada:\n\n```\nint estado = digitalRead(BOTON_PIN);\n// estado será HIGH (1) o LOW (0)\n```\n\n🔁 EL CIRCUITO EN WOKWI\nPara el botón:\n- Un terminal del botón → GPIO 4\n- El otro terminal del botón → GND\n- No se necesita resistencia externa (la activa INPUT_PULLUP)",
          notebook: "Título: Entradas digitales — INPUT_PULLUP.\n1. ¿Cuál es la diferencia entre OUTPUT e INPUT_PULLUP?\n2. Con INPUT_PULLUP, ¿qué lee el pin cuando el botón NO está presionado? → ___\n3. Con INPUT_PULLUP, ¿qué lee el pin cuando el botón SÍ está presionado? → ___\n4. ¿Por qué se dice que la lógica es 'invertida'?\n5. ¿Para qué sirve digitalRead()?\n6. ¿Por qué no necesitamos una resistencia externa con INPUT_PULLUP?",
          practice: "1. Abrir Wokwi y crear un nuevo proyecto ESP32.\n2. Agregar un LED con resistencia 220Ω al GPIO 2 (igual que las prácticas anteriores).\n3. Agregar un PushButton: un terminal al GPIO 4, el otro terminal a GND.\n4. Copiar el código del Programa 03 y completar los espacios en blanco.\n5. Presionar ▶ y abrir el Serial Monitor (115200 baudios).\n6. Observar el Serial Monitor sin tocar el botón — ¿qué imprime?\n7. Presionar y soltar el botón varias veces — ¿qué cambia?\n8. Mantener el botón presionado — ¿cuántas veces imprime 'PRESIONADO' por segundo?\n9. Guardar como 'Programa_03_LeerBoton'.",
          diagram: `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #0d1117;
    font-family: 'Segoe UI', sans-serif;
    color: #e6edf3;
    padding: 24px;
  }
  h2 { font-size: 15px; color: #58a6ff; margin-bottom: 18px; letter-spacing: .5px; }
  .diagram { display: flex; gap: 32px; align-items: flex-start; flex-wrap: wrap; }
  .circuit {
    position: relative;
    width: 340px;
    height: 300px;
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 12px;
    flex-shrink: 0;
  }
  .esp32 {
    position: absolute;
    left: 120px; top: 80px;
    width: 100px; height: 140px;
    background: #1a3a1a;
    border: 2px solid #3fb950;
    border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700; color: #3fb950;
    letter-spacing: 1px;
  }
  .pin {
    position: absolute;
    font-size: 9px;
    color: #8b949e;
    white-space: nowrap;
  }
  .pin-gnd-l  { left: 6px; top: 108px; }
  .pin-gpio4  { left: 6px; top: 128px; }
  .pin-gpio2  { right: 6px; top: 108px; }
  .pin-gnd-r  { right: 6px; top: 128px; }
  .btn-body {
    position: absolute;
    left: 30px; top: 108px;
    width: 28px; height: 28px;
    background: #21262d;
    border: 2px solid #58a6ff;
    border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    font-size: 10px; color: #58a6ff;
  }
  .btn-label {
    position: absolute;
    left: 18px; top: 142px;
    font-size: 9px; color: #8b949e;
  }
  .led-body {
    position: absolute;
    right: 30px; top: 104px;
    width: 20px; height: 28px;
  }
  .led-triangle {
    width: 0; height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 18px solid #f85149;
    margin: 0 auto;
  }
  .led-line {
    width: 2px; height: 10px;
    background: #f85149;
    margin: 0 auto;
  }
  .led-label {
    position: absolute;
    right: 18px; top: 138px;
    font-size: 9px; color: #8b949e;
  }
  .res-body {
    position: absolute;
    right: 58px; top: 112px;
    width: 16px; height: 18px;
    background: #21262d;
    border: 1.5px solid #d29922;
    border-radius: 3px;
  }
  .res-label {
    position: absolute;
    right: 54px; top: 134px;
    font-size: 9px; color: #d29922;
  }
  svg.wires {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    overflow: visible;
    pointer-events: none;
  }
  .info { flex: 1; min-width: 200px; }
  .info-row {
    display: flex; gap: 10px; align-items: flex-start;
    margin-bottom: 12px;
    padding: 10px 12px;
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 8px;
  }
  .info-icon { font-size: 18px; flex-shrink: 0; }
  .info-text h4 { font-size: 11px; color: #58a6ff; margin-bottom: 3px; }
  .info-text p  { font-size: 10px; color: #8b949e; line-height: 1.5; }
  .chip-label {
    position: absolute;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    pointer-events: none;
  }
  .chip-label span { display: block; }
</style>
</head>
<body>
<h2>🔌 Circuito — Programas 03 y 04: Botón + LED con ESP32</h2>
<div class="diagram">
  <div class="circuit">
    <span class="pin pin-gnd-l">GND</span>
    <span class="pin pin-gpio4">GPIO 4</span>
    <span class="pin pin-gpio2">GPIO 2</span>
    <span class="pin pin-gnd-r">GND</span>
    <div class="esp32">
      <div class="chip-label">
        <span>ESP</span>
        <span>32</span>
      </div>
    </div>
    <div class="btn-body">▣</div>
    <span class="btn-label">BTN</span>
    <div class="res-body"></div>
    <span class="res-label">220Ω</span>
    <div class="led-body">
      <div class="led-triangle"></div>
      <div class="led-line"></div>
    </div>
    <span class="led-label">LED</span>
    <svg class="wires">
      <line x1="120" y1="135" x2="58" y2="122" stroke="#58a6ff" stroke-width="2"/>
      <polyline points="44,136 44,230 160,230 160,220" fill="none" stroke="#8b949e" stroke-width="2"/>
      <line x1="220" y1="121" x2="294" y2="121" stroke="#f0883e" stroke-width="2"/>
      <line x1="310" y1="121" x2="295" y2="114" stroke="#f0883e" stroke-width="2"/>
      <polyline points="305,132 305,220 240,220 240,135" fill="none" stroke="#8b949e" stroke-width="2"/>
    </svg>
  </div>
  <div class="info">
    <div class="info-row">
      <span class="info-icon">🔵</span>
      <div class="info-text">
        <h4>Botón → GPIO 4 + GND</h4>
        <p>Un terminal al GPIO 4, el otro a GND. Sin resistencia externa — usa <strong>INPUT_PULLUP</strong> interna del ESP32.</p>
      </div>
    </div>
    <div class="info-row">
      <span class="info-icon">🟠</span>
      <div class="info-text">
        <h4>LED → GPIO 2 con resistencia 220Ω</h4>
        <p>GPIO 2 → resistencia 220Ω → ánodo LED (+) → cátodo LED (–) → GND.</p>
      </div>
    </div>
    <div class="info-row">
      <span class="info-icon">⚠️</span>
      <div class="info-text">
        <h4>Lógica invertida con INPUT_PULLUP</h4>
        <p><strong>LOW</strong> = botón presionado<br><strong>HIGH</strong> = botón suelto</p>
      </div>
    </div>
    <div class="info-row">
      <span class="info-icon">🔑</span>
      <div class="info-text">
        <h4>Código clave</h4>
        <p><code style="color:#79c0ff;font-size:10px">pinMode(BOTON_PIN, INPUT_PULLUP);</code><br>
        <code style="color:#79c0ff;font-size:10px">digitalRead(BOTON_PIN) == LOW</code></p>
      </div>
    </div>
  </div>
</div>
</body>
</html>
`,
          code: "// PROGRAMA 03 — Leer estado de un botón\n// Completa los espacios en blanco\n\nconst int LED_PIN   = 2;\nconst int BOTON_PIN = ;  // ¿qué pin?\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN,   OUTPUT);\n  pinMode(BOTON_PIN, );  // ¿INPUT o INPUT_PULLUP?\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Presiona el botón...\");\n}\n\nvoid loop() {\n  int estado = digitalRead( );  // ¿qué pin leer?\n\n  if (estado == ) {  // ¿LOW o HIGH cuando está presionado?\n    Serial.println(\">>> PRESIONADO\");\n  } else {\n    Serial.println(\"    suelto\");\n  }\n\n  delay(200);\n}",
          codeRef: "// PROGRAMA 03 — Leer estado de un botón\n\nconst int LED_PIN   = 2;\nconst int BOTON_PIN = 4;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN,   OUTPUT);\n  pinMode(BOTON_PIN, INPUT_PULLUP);\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Presiona el botón...\");\n}\n\nvoid loop() {\n  int estado = digitalRead(BOTON_PIN);\n\n  if (estado == LOW) {\n    Serial.println(\">>> PRESIONADO\");\n  } else {\n    Serial.println(\"    suelto\");\n  }\n\n  delay(200);\n}",
          product: "Proyecto Programa_03_LeerBoton en Wokwi: el Serial Monitor muestra correctamente 'PRESIONADO' / 'suelto' según el estado del botón.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: El error más común es usar INPUT en lugar de INPUT_PULLUP — el pin flotará y mostrará valores aleatorios. Dejar que lo vean: sin INPUT_PULLUP el Serial muestra 'PRESIONADO' aunque no toquen el botón. Segundo punto: muchos asumen que HIGH = presionado porque los LEDs encendían con HIGH. Insistir en que con INPUT_PULLUP la lógica es la inversa — eso es lo que confunde al principio y es lo más importante de esta sesión."
        }
      ],
      cierre: "El ESP32 ya no solo actúa — ahora también escucha. INPUT_PULLUP, digitalRead() y la lógica invertida son las herramientas de cualquier sistema que responde al mundo físico.",
      frase_docente: "Un sistema que solo actúa es un robot. Uno que también escucha es un sistema inteligente."
    },
    {
      id: "wed",
      label: "Miércoles — El botón controla el LED",
      purpose: "Conectar la lectura del botón con una salida: el estado del botón determina el estado del LED en tiempo real. Control momentáneo — la base del ciclo entrada → proceso → salida.",
      hours: [
        {
          time: "Hora 1",
          title: "Programa 04: el botón controla el LED",
          theory: "Ahora que el ESP32 puede leer el botón, conectamos la lectura con la salida: el estado del botón determina el estado del LED en tiempo real. Esto es entrada → procesamiento → salida, el ciclo básico de cualquier sistema electrónico.\n\n⚡ MOMENTÁNEO vs. TOGGLE\nHoy implementamos control momentáneo:\n- Mientras mantienes presionado → LED encendido\n- Al soltar → LED apagado\n\nEs la misma lógica de un timbre de puerta: suena mientras lo presionas, para cuando lo sueltas.\n\n🔄 EL IF-ELSE DIRECTO\n```\nif (digitalRead(BOTON_PIN) == LOW) {\n  digitalWrite(LED_PIN, HIGH);  // presionado → encender\n} else {\n  digitalWrite(LED_PIN, LOW);   // suelto → apagar\n}\n```\n\n📌 NOTA: Esto también puede escribirse en una sola línea:\n```\ndigitalWrite(LED_PIN, !digitalRead(BOTON_PIN));\n```\nLa negación (!) invierte el valor — como la lógica invertida ya lo hace de forma natural.",
          notebook: "Título: Botón controla LED.\n1. Dibuja el diagrama de flujo: botón presionado → LED encendido / botón suelto → LED apagado.\n2. ¿Qué tipo de control es este: momentáneo o permanente? ¿Por qué?\n3. Explica con tus palabras la línea: digitalWrite(LED_PIN, !digitalRead(BOTON_PIN))\n4. ¿Qué diferencia hay entre este programa y controlar el LED desde el Serial Monitor?\n5. Da un ejemplo de la vida real donde se use control momentáneo.",
          practice: "1. Abrir el proyecto Programa_03 del martes (no crear uno nuevo).\n2. Actualizar el código con el Programa 04.\n3. Presionar ▶ y probar:\n   - Presionar el botón → LED enciende al instante\n   - Soltar el botón → LED apaga al instante\n   - Mantener presionado → LED se queda encendido\n4. Reto: modificar el código para que el LED parpadee 5 veces rápido al presionar el botón (en lugar de quedarse encendido).\n5. Guardar como 'Programa_04_BotonLED'.",
          diagram: `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    background: #0d1117;
    font-family: 'Segoe UI', sans-serif;
    color: #e6edf3;
    padding: 24px;
  }
  h2 { font-size: 15px; color: #58a6ff; margin-bottom: 18px; letter-spacing: .5px; }
  .diagram { display: flex; gap: 32px; align-items: flex-start; flex-wrap: wrap; }
  .circuit {
    position: relative;
    width: 340px;
    height: 300px;
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 12px;
    flex-shrink: 0;
  }
  .esp32 {
    position: absolute;
    left: 120px; top: 80px;
    width: 100px; height: 140px;
    background: #1a3a1a;
    border: 2px solid #3fb950;
    border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700; color: #3fb950;
    letter-spacing: 1px;
  }
  .pin {
    position: absolute;
    font-size: 9px;
    color: #8b949e;
    white-space: nowrap;
  }
  .pin-gnd-l  { left: 6px; top: 108px; }
  .pin-gpio4  { left: 6px; top: 128px; }
  .pin-gpio2  { right: 6px; top: 108px; }
  .pin-gnd-r  { right: 6px; top: 128px; }
  .btn-body {
    position: absolute;
    left: 30px; top: 108px;
    width: 28px; height: 28px;
    background: #21262d;
    border: 2px solid #58a6ff;
    border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    font-size: 10px; color: #58a6ff;
  }
  .btn-label {
    position: absolute;
    left: 18px; top: 142px;
    font-size: 9px; color: #8b949e;
  }
  .led-body {
    position: absolute;
    right: 30px; top: 104px;
    width: 20px; height: 28px;
  }
  .led-triangle {
    width: 0; height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 18px solid #f85149;
    margin: 0 auto;
  }
  .led-line {
    width: 2px; height: 10px;
    background: #f85149;
    margin: 0 auto;
  }
  .led-label {
    position: absolute;
    right: 18px; top: 138px;
    font-size: 9px; color: #8b949e;
  }
  .res-body {
    position: absolute;
    right: 58px; top: 112px;
    width: 16px; height: 18px;
    background: #21262d;
    border: 1.5px solid #d29922;
    border-radius: 3px;
  }
  .res-label {
    position: absolute;
    right: 54px; top: 134px;
    font-size: 9px; color: #d29922;
  }
  svg.wires {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    overflow: visible;
    pointer-events: none;
  }
  .info { flex: 1; min-width: 200px; }
  .info-row {
    display: flex; gap: 10px; align-items: flex-start;
    margin-bottom: 12px;
    padding: 10px 12px;
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 8px;
  }
  .info-icon { font-size: 18px; flex-shrink: 0; }
  .info-text h4 { font-size: 11px; color: #58a6ff; margin-bottom: 3px; }
  .info-text p  { font-size: 10px; color: #8b949e; line-height: 1.5; }
  .chip-label {
    position: absolute;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    pointer-events: none;
  }
  .chip-label span { display: block; }
</style>
</head>
<body>
<h2>🔌 Circuito — Programas 03 y 04: Botón + LED con ESP32</h2>
<div class="diagram">
  <div class="circuit">
    <span class="pin pin-gnd-l">GND</span>
    <span class="pin pin-gpio4">GPIO 4</span>
    <span class="pin pin-gpio2">GPIO 2</span>
    <span class="pin pin-gnd-r">GND</span>
    <div class="esp32">
      <div class="chip-label">
        <span>ESP</span>
        <span>32</span>
      </div>
    </div>
    <div class="btn-body">▣</div>
    <span class="btn-label">BTN</span>
    <div class="res-body"></div>
    <span class="res-label">220Ω</span>
    <div class="led-body">
      <div class="led-triangle"></div>
      <div class="led-line"></div>
    </div>
    <span class="led-label">LED</span>
    <svg class="wires">
      <line x1="120" y1="135" x2="58" y2="122" stroke="#58a6ff" stroke-width="2"/>
      <polyline points="44,136 44,230 160,230 160,220" fill="none" stroke="#8b949e" stroke-width="2"/>
      <line x1="220" y1="121" x2="294" y2="121" stroke="#f0883e" stroke-width="2"/>
      <line x1="310" y1="121" x2="295" y2="114" stroke="#f0883e" stroke-width="2"/>
      <polyline points="305,132 305,220 240,220 240,135" fill="none" stroke="#8b949e" stroke-width="2"/>
    </svg>
  </div>
  <div class="info">
    <div class="info-row">
      <span class="info-icon">🔵</span>
      <div class="info-text">
        <h4>Botón → GPIO 4 + GND</h4>
        <p>Un terminal al GPIO 4, el otro a GND. Sin resistencia externa — usa <strong>INPUT_PULLUP</strong> interna del ESP32.</p>
      </div>
    </div>
    <div class="info-row">
      <span class="info-icon">🟠</span>
      <div class="info-text">
        <h4>LED → GPIO 2 con resistencia 220Ω</h4>
        <p>GPIO 2 → resistencia 220Ω → ánodo LED (+) → cátodo LED (–) → GND.</p>
      </div>
    </div>
    <div class="info-row">
      <span class="info-icon">⚠️</span>
      <div class="info-text">
        <h4>Lógica invertida con INPUT_PULLUP</h4>
        <p><strong>LOW</strong> = botón presionado<br><strong>HIGH</strong> = botón suelto</p>
      </div>
    </div>
    <div class="info-row">
      <span class="info-icon">🔑</span>
      <div class="info-text">
        <h4>Código clave</h4>
        <p><code style="color:#79c0ff;font-size:10px">if (digitalRead(BOTON_PIN) == LOW)</code><br>
        <code style="color:#79c0ff;font-size:10px">digitalWrite(LED_PIN, HIGH/LOW);</code></p>
      </div>
    </div>
  </div>
</div>
</body>
</html>
`,
          code: "// PROGRAMA 04 — El botón controla el LED\n// Completa los espacios en blanco\n\nconst int LED_PIN   = 2;\nconst int BOTON_PIN = 4;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN,   OUTPUT);\n  pinMode(BOTON_PIN, );\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Presiona el botón para encender el LED\");\n}\n\nvoid loop() {\n  if (digitalRead(BOTON_PIN) == ) {  // ¿presionado?\n    digitalWrite(LED_PIN, );          // encender\n    Serial.println(\"LED: ON\");\n  } else {\n    digitalWrite(LED_PIN, );          // apagar\n    Serial.println(\"LED: OFF\");\n  }\n  delay(100);\n}",
          codeRef: "// PROGRAMA 04 — El botón controla el LED\n\nconst int LED_PIN   = 2;\nconst int BOTON_PIN = 4;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN,   OUTPUT);\n  pinMode(BOTON_PIN, INPUT_PULLUP);\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Presiona el botón para encender el LED\");\n}\n\nvoid loop() {\n  if (digitalRead(BOTON_PIN) == LOW) {\n    digitalWrite(LED_PIN, HIGH);\n    Serial.println(\"LED: ON\");\n  } else {\n    digitalWrite(LED_PIN, LOW);\n    Serial.println(\"LED: OFF\");\n  }\n  delay(100);\n}",
          product: "Proyecto Programa_04_BotonLED: el LED enciende mientras se presiona el botón y apaga al soltarlo. Reto extra: parpadeo al presionar.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: El delay(100) evita que el Serial Monitor se llene demasiado rápido, pero introduce un pequeño retraso perceptible. Señalar esto: es un compromiso entre legibilidad del Serial Monitor y respuesta del botón. El reto de parpadeo al presionar requiere un for loop dentro del if — quien llegue ahí ya conectó la semana anterior con la actual."
        }
      ],
      cierre: "De leer un botón a controlar una salida: el ESP32 responde al mundo físico en tiempo real. Mañana aprenderemos a filtrarlo.",
      frase_docente: "Saber leer no es suficiente — hay que saber reaccionar."
    },
    {
      id: "thu",
      label: "Jueves — Primer encendido del ESP32 (Windows + puerto serial)",
      purpose: "Bootstrap completo del ESP32 en máquinas Windows: del cable USB al primer 'Hello World' por el Serial Monitor. Al final del día reproducimos el Programa 04 del miércoles, pero esta vez en hardware real, viendo en vivo lo que sale por el puerto serial.",
      hours: [
        {
          time: "Hora 1",
          title: "Setup en Windows: del cable USB al puerto COM",
          theory: "Cuando conectas el ESP32 a la PC con un cable USB, hay TRES cosas que tienen que estar bien para que la PC lo reconozca:\n\n1️⃣ EL CHIP USB‑SERIAL\nEl ESP32 no habla USB nativo — usa un chip puente (USB↔Serial) que traduce. Hay dos modelos comunes en placas DevKit:\n• CP2102 (Silicon Labs)\n• CH340 / CH9102 (WCH)\nMira el chip cuadrado pequeño que está justo al lado del puerto micro‑USB de tu ESP32 — ahí dice cuál tienes.\n\n2️⃣ EL DRIVER\nWindows no trae los drivers de estos chips de fábrica. Hay que descargar e instalar el correcto:\n• CP2102 → driver de Silicon Labs (silabs.com)\n• CH340 → driver CH341SER de WCH\nSin el driver, Windows ve un dispositivo desconocido y no asigna puerto.\n\n3️⃣ EL PUERTO COM\nUna vez instalado el driver, Windows asigna un número de puerto: COM3, COM5, COM7, etc. Ese número aparece en el Administrador de dispositivos. Es el 'teléfono' por el que la PC y el ESP32 se comunican.\n\n📡 BAUDRATE — el idioma del puerto\nLa velocidad de comunicación serial se mide en baudios. El estándar del ESP32 es 115200 baud. Ambos lados (PC y ESP32) tienen que usar el mismo número o sale basura ilegible.\n\n🔑 RESUMEN\n• Driver = traductor\n• Puerto COM = teléfono\n• Baudrate = idioma\nLos tres tienen que estar bien para que la PC y el ESP32 se entiendan.",
          notebook: "Título: Mi primera conexión con el ESP32.\n1. ¿Qué chip USB‑Serial trae tu ESP32 (CP2102 o CH340)? ¿Cómo lo identificaste?\n2. ¿Qué número de puerto COM te asignó Windows?\n3. Con tus palabras: ¿para qué sirve un driver USB‑Serial?\n4. ¿Qué es el baudrate y por qué la PC y el ESP32 deben usar el mismo?\n5. Si conectas tu ESP32 en la PC de un compañero, ¿el número de COM va a ser el mismo? ¿Por qué?\n6. ¿Qué pasaría si en Arduino IDE seleccionas COM3 cuando tu ESP32 está realmente en COM5?\n7. ¿Por qué algunos cables USB no funcionan (aunque carguen el celular bien)?",
          practice: "🛠️ PASO 0 — Verificar materiales\n• ESP32 DevKit\n• Cable USB DE DATOS (no de solo carga — los cables de carga no tienen los hilos de datos)\n• PC con Windows 10/11\n\n🔍 PASO 1 — Identificar tu chip USB‑Serial\nMira el chip cuadrado pequeño junto al puerto micro‑USB del ESP32:\n• Dice CP2102 → driver Silicon Labs\n• Dice CH340 o CH9102 → driver WCH\nAnotar en libreta cuál tienes.\n\n💾 PASO 2 — Instalar el driver correcto\nCP2102:\n  1. Ir a silabs.com → buscar 'CP210x VCP Drivers'\n  2. Descargar la versión Windows Universal\n  3. Descomprimir, ejecutar el instalador → Siguiente → Siguiente → Finalizar\nCH340:\n  1. Buscar en Google: 'CH341SER.EXE descarga'\n  2. Descargar el instalador\n  3. Ejecutar como Administrador (clic derecho → 'Ejecutar como administrador')\n  4. Botón 'INSTALL' → esperar mensaje 'Driver install success!'\n• Si Windows lo pide, reiniciar la PC.\n\n🔌 PASO 3 — Conectar el ESP32 y detectar el puerto COM\n  1. Conectar el ESP32 a la PC con el cable USB\n  2. El LED rojo del ESP32 debe encender (señal de alimentación)\n  3. Abrir Administrador de dispositivos: Win+X → 'Administrador de dispositivos'\n  4. Buscar la sección 'Puertos (COM y LPT)'\n  5. Ahí debe aparecer:\n     - 'Silicon Labs CP210x USB to UART Bridge (COMx)' → CP2102\n     - 'USB-SERIAL CH340 (COMx)' → CH340\n  6. Anotar el número COM (ej. COM5) — lo necesitamos en el Paso 7.\n• Si NO aparece → el driver no se instaló bien O el cable es de solo carga. Pedir ayuda.\n\n🧰 PASO 4 — Instalar Arduino IDE 2.x\n  1. Ir a arduino.cc/en/software\n  2. Descargar 'Arduino IDE 2.x' para Windows\n  3. Instalar con todas las opciones por defecto (aceptar drivers Arduino que pida)\n\n⚙️ PASO 5 — Agregar soporte ESP32 al IDE\n  1. Abrir Arduino IDE\n  2. File → Preferences\n  3. En el campo 'Additional boards manager URLs' pegar:\n     https://espressif.github.io/arduino-esp32/package_esp32_index.json\n  4. OK\n\n📦 PASO 6 — Instalar el paquete ESP32\n  1. Tools → Board → Boards Manager…\n  2. Buscar 'esp32'\n  3. Instalar 'esp32 by Espressif Systems' (espera 2–5 min, descarga ~200 MB)\n\n🎯 PASO 7 — Seleccionar placa y puerto\n  1. Tools → Board → esp32 → 'ESP32 Dev Module'\n  2. Tools → Port → COMx (el que anotaste en el Paso 3)\n  3. Tools → Upload Speed → 115200\n\n✅ PASO 8 — Hello Serial: confirmar que la PC habla con el ESP32\n  1. File → New Sketch\n  2. Pegar el código 'Hello Serial' (ver bloque de código)\n  3. Click en ✓ (Verify) — debe compilar sin errores\n  4. Click en → (Upload). Mensaje: 'Connecting...'\n     - Si se queda en 'Connecting....._____' por más de 10 s, mantener presionado el botón BOOT del ESP32 hasta que empiece a subir\n  5. Esperar 'Done uploading.'\n  6. Tools → Serial Monitor (o Ctrl+Shift+M)\n  7. En la esquina inferior derecha del Serial Monitor, seleccionar '115200 baud'\n  8. Debe imprimir: 'ESP32 listo — primera conexion' y luego 'vivo' cada segundo\n\n📸 EVIDENCIA — captura del Serial Monitor con el mensaje 'vivo' apareciendo, junto al puerto COM visible. Subir a Classroom.",
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

  /* Flow steps */
  .flow { display: flex; flex-wrap: wrap; gap: 8px; }
  .step {
    flex: 1 1 calc(25% - 8px); min-width: 110px;
    background: #161b22; border: 1px solid #30363d; border-radius: 10px;
    padding: 10px 8px; text-align: center; position: relative;
  }
  .step .num {
    position: absolute; top: -8px; left: 50%; transform: translateX(-50%);
    background: #1f6feb; color: white; font-size: 10px; font-weight: 700;
    width: 18px; height: 18px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
  }
  .step .icon { font-size: 22px; display: block; margin: 6px 0 4px; }
  .step .label { font-size: 10px; font-weight: 700; color: #e6edf3; display: block; }
  .step .sub { font-size: 9px; color: #8b949e; display: block; margin-top: 2px; }
  .step.key { border-color: #d29922; background: #1f1700; }
  .step.key .label { color: #f0c040; }

  /* Chip identification */
  .chip-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .chip-card {
    background: #161b22; border: 1px solid #30363d; border-radius: 10px;
    padding: 12px;
  }
  .chip-card h4 { font-size: 11px; color: #58a6ff; margin-bottom: 6px; }
  .chip-card .marking {
    font-family: 'Consolas', monospace; font-size: 13px; color: #79c0ff;
    background: #0d1117; border: 1px solid #30363d;
    padding: 6px 8px; border-radius: 4px; margin-bottom: 6px; text-align: center;
    letter-spacing: 1px;
  }
  .chip-card p { font-size: 10px; color: #8b949e; line-height: 1.5; }
  .chip-card a { color: #58a6ff; }

  /* Device manager mock */
  .devmgr {
    background: #f3f3f3; color: #000; border-radius: 6px;
    border: 1px solid #999; font-family: 'Segoe UI', sans-serif;
    padding: 8px 10px; font-size: 11px; max-width: 460px;
  }
  .devmgr .title-bar {
    background: #0078d4; color: white;
    margin: -8px -10px 6px; padding: 4px 8px;
    border-radius: 6px 6px 0 0; font-size: 10px;
  }
  .devmgr .tree { line-height: 1.7; }
  .devmgr .tree-item { padding-left: 16px; position: relative; }
  .devmgr .tree-item::before {
    content: '▸'; position: absolute; left: 4px; color: #666; font-size: 9px;
  }
  .devmgr .tree-item.open::before { content: '▾'; }
  .devmgr .com {
    background: #fff5cc; border: 1px solid #d29922; padding: 1px 6px;
    border-radius: 3px; font-weight: 700; color: #6d4c00;
  }

  /* Comm bus */
  .bus { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-top: 8px; }
  .bus-node {
    background: #161b22; border: 1px solid #30363d; border-radius: 8px;
    padding: 8px 12px; text-align: center; min-width: 90px;
  }
  .bus-node .ic { font-size: 20px; display: block; margin-bottom: 2px; }
  .bus-node .nm { font-size: 10px; font-weight: 700; color: #e6edf3; }
  .bus-node .sub { font-size: 9px; color: #8b949e; }
  .bus-arrow {
    flex: 1; height: 2px; background: linear-gradient(90deg, #1f6feb, #3fb950);
    border-radius: 2px; min-width: 30px; position: relative;
  }
  .bus-arrow::after {
    content: ''; position: absolute; right: -6px; top: -4px;
    border-left: 6px solid #3fb950;
    border-top: 5px solid transparent; border-bottom: 5px solid transparent;
  }
  .bus-tag {
    background: #0d1117; border: 1px solid #30363d; border-radius: 12px;
    padding: 1px 8px; font-size: 9px; color: #79c0ff; font-family: 'Consolas', monospace;
    position: absolute; top: -10px; left: 50%; transform: translateX(-50%);
    white-space: nowrap;
  }
</style>
</head>
<body>

<p class="sec-title">🔍 Identifica tu chip USB‑Serial</p>
<div class="chip-grid">
  <div class="chip-card">
    <h4>Opción A — Silicon Labs</h4>
    <div class="marking">CP2102</div>
    <p>Driver: <strong>CP210x VCP Drivers</strong> de silabs.com — instalador <code>.exe</code> con asistente.</p>
  </div>
  <div class="chip-card">
    <h4>Opción B — WCH</h4>
    <div class="marking">CH340 / CH9102</div>
    <p>Driver: <strong>CH341SER.EXE</strong> — ejecutar como administrador y presionar 'INSTALL'.</p>
  </div>
</div>

<p class="sec-title">📋 Flujo de setup en Windows (8 pasos)</p>
<div class="flow">
  <div class="step"><span class="num">1</span><span class="icon">🔌</span><span class="label">Cable USB</span><span class="sub">de datos, no carga</span></div>
  <div class="step"><span class="num">2</span><span class="icon">🔍</span><span class="label">Identificar chip</span><span class="sub">CP2102 o CH340</span></div>
  <div class="step"><span class="num">3</span><span class="icon">💾</span><span class="label">Instalar driver</span><span class="sub">según el chip</span></div>
  <div class="step key"><span class="num">4</span><span class="icon">📟</span><span class="label">Adm. dispositivos</span><span class="sub">anotar COMx</span></div>
  <div class="step"><span class="num">5</span><span class="icon">🧰</span><span class="label">Arduino IDE</span><span class="sub">arduino.cc</span></div>
  <div class="step"><span class="num">6</span><span class="icon">📦</span><span class="label">Boards Manager</span><span class="sub">esp32 Espressif</span></div>
  <div class="step"><span class="num">7</span><span class="icon">🎯</span><span class="label">Seleccionar</span><span class="sub">placa + COMx</span></div>
  <div class="step key"><span class="num">8</span><span class="icon">📡</span><span class="label">Hello Serial</span><span class="sub">115200 baud</span></div>
</div>

<p class="sec-title">📟 Cómo se ve en Administrador de dispositivos</p>
<div class="devmgr">
  <div class="title-bar">📟 Administrador de dispositivos</div>
  <div class="tree">
    <div class="tree-item">Adaptadores de pantalla</div>
    <div class="tree-item">Equipo</div>
    <div class="tree-item open">Puertos (COM y LPT)</div>
    <div class="tree-item" style="padding-left:32px;">Silicon Labs CP210x USB to UART Bridge <span class="com">(COM5)</span></div>
    <div class="tree-item">Procesadores</div>
    <div class="tree-item">Teclados</div>
  </div>
</div>

<p class="sec-title">🔄 La cadena de comunicación</p>
<div class="bus">
  <div class="bus-node"><span class="ic">💻</span><span class="nm">PC Windows</span><span class="sub">Serial Monitor</span></div>
  <div class="bus-arrow"><span class="bus-tag">USB · COM5</span></div>
  <div class="bus-node"><span class="ic">🔀</span><span class="nm">Chip USB↔Serial</span><span class="sub">CP2102 / CH340</span></div>
  <div class="bus-arrow"><span class="bus-tag">UART · 115200</span></div>
  <div class="bus-node"><span class="ic">🔲</span><span class="nm">ESP32</span><span class="sub">Serial.println()</span></div>
</div>

</body>
</html>
`,
          code: "// HELLO SERIAL — primer programa para confirmar que la PC habla con el ESP32\n// Completa los espacios en blanco\n\nvoid setup() {\n  Serial.begin( );        // ¿qué baudrate usa el ESP32 por defecto?\n  delay(1000);\n  Serial.println(\"ESP32 listo — primera conexion\");\n}\n\nvoid loop() {\n  Serial.println( );      // imprimir la palabra \"vivo\" cada segundo\n  delay(1000);\n}",
          codeRef: "// HELLO SERIAL — primer programa para confirmar que la PC habla con el ESP32\n\nvoid setup() {\n  Serial.begin(115200);\n  delay(1000);\n  Serial.println(\"ESP32 listo — primera conexion\");\n}\n\nvoid loop() {\n  Serial.println(\"vivo\");\n  delay(1000);\n}",
          product: "Captura de pantalla del Serial Monitor mostrando 'ESP32 listo — primera conexion' seguido de varios 'vivo', con el indicador '115200 baud' visible y el puerto COMx anotado en libreta.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Este es el día más frágil del semestre — un cable de carga, un driver mal instalado, una placa CH340 confundida con CP2102, y el alumno se atora 40 min. Recomendaciones: (1) Pre‑descargar AMBOS instaladores (CP210x y CH341SER) en una USB y pasarla en el aula — el internet del CONALEP no siempre alcanza para 200 MB del paquete ESP32 multiplicado por 20 PCs. (2) Verificar primero que la placa esté reconocida en Administrador de dispositivos ANTES de abrir Arduino IDE — separa errores de driver de errores de IDE. (3) El botón BOOT: muchos ESP32 NO necesitan presionarlo, pero los clones chinos baratos sí — si 'Connecting....._____' se cuelga, mantener BOOT presionado hasta que empiece a subir y soltar. (4) Si un alumno ve caracteres ilegibles en el Serial Monitor (Ⱨ䶻⼬), el baudrate está mal — revisar abajo a la derecha. (5) Llevar 2-3 cables USB de datos extra; los cables de solo carga son la causa #1 de 'no se conecta'."
        },
        {
          time: "Hora 2",
          title: "Programa 04 en hardware real + Serial Monitor en vivo",
          theory: "Ahora que la PC y el ESP32 ya se hablan, vamos a reproducir el Programa 04 del miércoles — pero esta vez en silicio real, no en simulador.\n\n🌉 DEL SIMULADOR A LA PROTOBOARD\nEn el simulador (Wokwi) el comportamiento es 'limpio': el botón es perfecto, los tiempos son exactos. En hardware real veremos pequeñas diferencias — y eso es bueno, porque el mundo real es así.\n\n🪟 SERIAL.PRINTLN() COMO VENTANA DE DEPURACIÓN\nHasta ahora 'veíamos' qué pasa por el LED. Ahora agregamos una segunda ventana: imprimimos en cada ciclo del loop() el estado del botón y del LED. El Serial Monitor se vuelve un rastreo en vivo de lo que está pensando el ESP32.\n\nEsto es FUNDAMENTAL para el resto del curso — cuando algo no funciona, lo primero que haces es agregar Serial.println() para ver qué está pasando dentro.\n\n📐 print vs println\n• Serial.print(\"Hola\") → escribe 'Hola' y se queda en la misma línea\n• Serial.println(\"Hola\") → escribe 'Hola' y salta a la siguiente línea\nUsamos print() para ir armando una línea en pedazos, y println() para cerrarla.\n\n⚡ EL CICLO\nCada 100 ms el loop() se ejecuta:\n  1. Lee el botón\n  2. Aplica el estado al LED (invertido por INPUT_PULLUP)\n  3. Imprime ambos valores al Serial\nResultado: una línea nueva en el Serial Monitor cada décima de segundo, mostrando el estado actual.",
          notebook: "Título: Hardware real + Serial Monitor.\n1. ¿Por qué digitalRead() devuelve 1 (HIGH) cuando NO presionas el botón?\n2. ¿Qué hace el operador ! en digitalWrite(LED_PIN, !boton)?\n3. Diferencias que notaste entre el simulador (miércoles) y la protoboard (hoy).\n4. ¿Para qué sirve Serial.print() vs Serial.println()?\n5. Si quitas el delay(100), ¿qué crees que pasaría con el Serial Monitor?\n6. ¿Qué ventaja tiene ver los valores en el Serial Monitor en lugar de solo ver el LED?\n7. Si presionas el botón muy rápido (clic clic clic), ¿alcanzas a ver cada estado en el Serial?",
          practice: "🔧 PASO 1 — Armar el circuito en protoboard\n• ESP32 centrado en la protoboard\n• LED: pata larga (+) → resistencia 220Ω → GPIO 2. Pata corta (−) → línea GND\n• Botón táctil de 4 pines: terminal A → GPIO 4. Terminal B → línea GND\n• Puente: pin GND del ESP32 → línea GND de la protoboard\n• Verificar visualmente ANTES de conectar el USB\n\n💻 PASO 2 — Cargar el código\n  1. Conectar el ESP32 (debe aparecer el COM ya conocido)\n  2. File → New Sketch\n  3. Copiar el código de la sección de abajo\n  4. Completar los espacios en blanco\n  5. Verificar (✓) y subir (→)\n\n📡 PASO 3 — Abrir Serial Monitor\n  1. Tools → Serial Monitor\n  2. Confirmar 115200 baud abajo a la derecha\n  3. Ver las líneas saliendo cada 100 ms con 'Boton: 1 | LED: 0'\n\n🔬 PASO 4 — Experimentos\n  Experimento A: Sin presionar nada\n    → Debe salir continuamente: 'Boton: 1 | LED: 0' (LED apagado)\n  Experimento B: Mantener presionado\n    → Debe salir continuamente: 'Boton: 0 | LED: 1' (LED encendido)\n  Experimento C: Presionar y soltar rápido (5 veces seguidas)\n    → Anotar qué se ve en el Serial — ¿se alcanzan a ver los cambios?\n  Experimento D: Cambiar delay(100) por delay(1000) y volver a subir\n    → ¿Qué cambia en el Serial Monitor?\n  Experimento E (reto): Cambiar delay(100) por delay(10) y volver a subir\n    → ¿El Serial se llena más rápido? ¿Sigue siendo legible?\n\n💾 Guardar como 'Programa_04_Real_Serial'.\n📸 Subir a Classroom: foto del circuito armado + captura del Serial Monitor.",
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

  /* Serial monitor mock */
  .serial-frame {
    background: #1e1e1e; border: 1px solid #30363d; border-radius: 8px;
    overflow: hidden;
  }
  .serial-bar {
    background: #2d2d30; padding: 6px 12px; font-size: 10px;
    color: #cccccc; display: flex; justify-content: space-between;
    border-bottom: 1px solid #1a1a1a;
  }
  .serial-bar .baud { color: #4ec9b0; font-family: 'Consolas', monospace; }
  .serial-body {
    padding: 10px 12px; font-family: 'Consolas', monospace; font-size: 11px;
    line-height: 1.5; color: #d4d4d4; max-height: 200px; overflow-y: auto;
  }
  .serial-line { white-space: nowrap; }
  .serial-line.pressed { background: rgba(76, 175, 80, 0.08); }
  .k { color: #569cd6; }
  .v0 { color: #ce9178; }
  .v1 { color: #4ec9b0; }
  .pipe { color: #6a9955; }

  /* Cycle */
  .cycle { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
  .cycle-step {
    background: #161b22; border: 1px solid #30363d; border-radius: 8px;
    padding: 8px 10px; font-size: 10px; color: #c9d1d9; min-width: 100px;
  }
  .cycle-step b { color: #58a6ff; display: block; font-size: 9px; margin-bottom: 2px; }
  .cycle-arrow { color: #58a6ff; font-size: 14px; }
</style>
</head>
<body>

<p class="sec-title">🔗 Conexiones (mismo circuito que el simulador del miércoles)</p>
<div class="pins">
  <div class="pin-card">
    <h4>💡 LED</h4>
    <div class="pin-row">
      <span class="dot" style="background:#3fb950"></span>
      <span>Pata larga (+) → R 220Ω → <span class="pin-badge">GPIO 2</span></span>
    </div>
    <div class="pin-row">
      <span class="dot" style="background:#8b949e"></span>
      <span>Pata corta (−) → <span class="pin-gnd">GND</span></span>
    </div>
  </div>
  <div class="pin-card">
    <h4>🔘 Botón</h4>
    <div class="pin-row">
      <span class="dot" style="background:#58a6ff"></span>
      <span>Terminal A → <span class="pin-badge">GPIO 4</span></span>
    </div>
    <div class="pin-row">
      <span class="dot" style="background:#8b949e"></span>
      <span>Terminal B → <span class="pin-gnd">GND</span></span>
    </div>
  </div>
</div>

<p class="sec-title">⚡ Ciclo del loop() — cada 100 ms</p>
<div class="cycle">
  <div class="cycle-step"><b>1. Leer</b>digitalRead(BOTON_PIN)</div>
  <span class="cycle-arrow">→</span>
  <div class="cycle-step"><b>2. Aplicar</b>digitalWrite(LED_PIN, !boton)</div>
  <span class="cycle-arrow">→</span>
  <div class="cycle-step"><b>3. Imprimir</b>Serial.println(...)</div>
  <span class="cycle-arrow">↻</span>
  <div class="cycle-step"><b>4. Esperar</b>delay(100)</div>
</div>

<p class="sec-title">📡 Lo que verás en el Serial Monitor</p>
<div class="serial-frame">
  <div class="serial-bar">
    <span>📡 Serial Monitor — COM5</span>
    <span class="baud">115200 baud</span>
  </div>
  <div class="serial-body">
    <div class="serial-line"><span class="k">Programa 04 — boton controla LED</span></div>
    <div class="serial-line"><span class="k">Boton:</span> <span class="v1">1</span> <span class="pipe">|</span> <span class="k">LED:</span> <span class="v0">0</span></div>
    <div class="serial-line"><span class="k">Boton:</span> <span class="v1">1</span> <span class="pipe">|</span> <span class="k">LED:</span> <span class="v0">0</span></div>
    <div class="serial-line"><span class="k">Boton:</span> <span class="v1">1</span> <span class="pipe">|</span> <span class="k">LED:</span> <span class="v0">0</span></div>
    <div class="serial-line pressed"><span class="k">Boton:</span> <span class="v0">0</span> <span class="pipe">|</span> <span class="k">LED:</span> <span class="v1">1</span> &nbsp;<span class="pipe">// ← presionado</span></div>
    <div class="serial-line pressed"><span class="k">Boton:</span> <span class="v0">0</span> <span class="pipe">|</span> <span class="k">LED:</span> <span class="v1">1</span></div>
    <div class="serial-line pressed"><span class="k">Boton:</span> <span class="v0">0</span> <span class="pipe">|</span> <span class="k">LED:</span> <span class="v1">1</span></div>
    <div class="serial-line"><span class="k">Boton:</span> <span class="v1">1</span> <span class="pipe">|</span> <span class="k">LED:</span> <span class="v0">0</span> &nbsp;<span class="pipe">// ← soltado</span></div>
    <div class="serial-line"><span class="k">Boton:</span> <span class="v1">1</span> <span class="pipe">|</span> <span class="k">LED:</span> <span class="v0">0</span></div>
  </div>
</div>

</body>
</html>
`,
          code: "// PROGRAMA 04 (hardware real) — botón controla LED + traza serial\n// Completa los espacios en blanco\n\n#define LED_PIN    2\n#define BOTON_PIN  4\n\nvoid setup() {\n  Serial.begin( );                       // baudrate estándar del ESP32\n  pinMode(LED_PIN,   OUTPUT);\n  pinMode(BOTON_PIN,  );                 // botón con resistencia interna pull-up\n  Serial.println(\"Programa 04 — boton controla LED\");\n}\n\nvoid loop() {\n  bool boton = digitalRead( );           // ¿qué pin lee el botón?\n  digitalWrite(LED_PIN,  );              // INPUT_PULLUP → invertir\n\n  Serial.print(\"Boton: \");\n  Serial.print(boton);\n  Serial.print(\" | LED: \");\n  Serial.println( );                     // imprimir el estado del LED\n\n  delay(100);\n}",
          codeRef: "// PROGRAMA 04 (hardware real) — botón controla LED + traza serial\n\n#define LED_PIN    2\n#define BOTON_PIN  4\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN,   OUTPUT);\n  pinMode(BOTON_PIN, INPUT_PULLUP);\n  Serial.println(\"Programa 04 — boton controla LED\");\n}\n\nvoid loop() {\n  bool boton = digitalRead(BOTON_PIN);\n  digitalWrite(LED_PIN, !boton);\n\n  Serial.print(\"Boton: \");\n  Serial.print(boton);\n  Serial.print(\" | LED: \");\n  Serial.println(!boton);\n\n  delay(100);\n}",
          product: "Proyecto Programa_04_Real_Serial: el LED enciende mientras el botón se mantiene presionado, y el Serial Monitor muestra 'Boton: x | LED: y' actualizándose cada 100 ms. Foto del circuito armado + captura del Serial Monitor entregadas en Classroom.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: La transición simulador → hardware real es un momento clave — los alumnos ven que el código que escribieron el miércoles funciona idéntico en silicio. Resaltar: 'la lógica no cambió, solo el medio'. Sobre Serial.println() como herramienta: este es el momento de plantar la semilla — TODO el resto del semestre, cuando algo no funcione, lo primero será agregar prints. Es la herramienta de depuración #1 en sistemas embebidos. Sobre los experimentos: el delay(10) llena el Serial muy rápido y se vuelve ilegible — buena oportunidad para discutir 'velocidad de muestreo vs. legibilidad humana'. Si algún alumno ya pidió hacer toggle (Programa 06) o contador (Programa 05), invitarlo a guardar ese reto para el viernes — hoy es día de bootstrap, no de funcionalidad nueva."
        }
      ],
      cierre: "Hoy cruzaron el puente más importante del semestre: del código que vive en la pantalla del simulador al código que vive en silicio. Aprendieron a instalar drivers, identificar puertos COM y leer el Serial Monitor — herramientas que usarán en CADA sesión que viene. Todo lo demás es ampliar lo que ya hicieron hoy.",
      frase_docente: "Un programa que solo funciona en el simulador es una promesa. Uno que funciona conectado por USB es una herramienta."
    }
  ]
};
