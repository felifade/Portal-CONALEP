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
  /* ESP32 */
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
  /* Pines izquierda (botón) */
  .pin-gnd-l  { left: 6px; top: 108px; }
  .pin-gpio4  { left: 6px; top: 128px; }
  /* Pines derecha (LED) */
  .pin-gpio2  { right: 6px; top: 108px; }
  .pin-gnd-r  { right: 6px; top: 128px; }

  /* Botón */
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

  /* LED */
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

  /* Resistencia */
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

  /* Cables SVG */
  svg.wires {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    overflow: visible;
    pointer-events: none;
  }

  /* Info lateral */
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
    <!-- Pines -->
    <span class="pin pin-gnd-l">GND</span>
    <span class="pin pin-gpio4">GPIO 4</span>
    <span class="pin pin-gpio2">GPIO 2</span>
    <span class="pin pin-gnd-r">GND</span>

    <!-- ESP32 -->
    <div class="esp32">
      <div class="chip-label">
        <span>ESP</span>
        <span>32</span>
      </div>
    </div>

    <!-- Botón -->
    <div class="btn-body">▣</div>
    <span class="btn-label">BTN</span>

    <!-- Resistencia -->
    <div class="res-body"></div>
    <span class="res-label">220Ω</span>

    <!-- LED -->
    <div class="led-body">
      <div class="led-triangle"></div>
      <div class="led-line"></div>
    </div>
    <span class="led-label">LED</span>

    <!-- Cables -->
    <svg class="wires">
      <!-- GPIO4 → Botón (azul) -->
      <line x1="120" y1="135" x2="58" y2="122" stroke="#58a6ff" stroke-width="2"/>
      <!-- Botón → GND (gris) -->
      <polyline points="44,136 44,230 160,230 160,220" fill="none" stroke="#8b949e" stroke-width="2"/>
      <!-- GPIO2 → Resistencia (naranja) -->
      <line x1="220" y1="121" x2="294" y2="121" stroke="#f0883e" stroke-width="2"/>
      <!-- Resistencia → LED (naranja) -->
      <line x1="310" y1="121" x2="295" y2="114" stroke="#f0883e" stroke-width="2"/>
      <!-- LED → GND (gris) -->
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
          code: "// PROGRAMA 03 — Leer estado de un botón\n// Completa los espacios en blanco\n\nconst int LED_PIN   = 2;\nconst int BOTON_PIN = ;  // ¿qué pin?\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN,   OUTPUT);\n  pinMode(BOTON_PIN, );  // ¿INPUT o INPUT_PULLUP?\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Presiona el botón...\");\n}\n\nvoid loop() {\n  int estado = digitalRead( );  // ¿qué pin leer?\n\n  if (estado == ) {  // ¿LOW o HIGH cuando está presionado?\n    Serial.println(\">>> PRESIONADO\");\n  } else {\n    Serial.println(\"    suelto\");\n  }\n\n  delay(200);  // pausa para no saturar el Serial Monitor\n}",
          codeRef: "// PROGRAMA 03 — Leer estado de un botón\n\nconst int LED_PIN   = 2;\nconst int BOTON_PIN = 4;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN,   OUTPUT);\n  pinMode(BOTON_PIN, INPUT_PULLUP);  // Resistencia interna activa\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Presiona el botón...\");\n}\n\nvoid loop() {\n  int estado = digitalRead(BOTON_PIN);\n\n  if (estado == LOW) {  // LOW = presionado (lógica invertida con INPUT_PULLUP)\n    Serial.println(\">>> PRESIONADO\");\n  } else {\n    Serial.println(\"    suelto\");\n  }\n\n  delay(200);\n}",
          product: "Proyecto Programa_03_LeerBoton en Wokwi: el Serial Monitor muestra correctamente 'PRESIONADO' / 'suelto' según el estado del botón.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: El error más común es usar INPUT en lugar de INPUT_PULLUP — el pin flotará y mostrará valores aleatorios. Dejar que lo vean: sin INPUT_PULLUP el Serial muestra 'PRESIONADO' aunque no toquen el botón. Segundo punto: muchos asumen que HIGH = presionado porque los LEDs encendían con HIGH. Insistir en que con INPUT_PULLUP la lógica es la inversa — eso es lo que confunde al principio y es lo más importante de esta sesión."
        },
        {
          time: "Hora 2",
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
  /* ESP32 */
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
  /* Pines izquierda (botón) */
  .pin-gnd-l  { left: 6px; top: 108px; }
  .pin-gpio4  { left: 6px; top: 128px; }
  /* Pines derecha (LED) */
  .pin-gpio2  { right: 6px; top: 108px; }
  .pin-gnd-r  { right: 6px; top: 128px; }

  /* Botón */
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

  /* LED */
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

  /* Resistencia */
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

  /* Cables SVG */
  svg.wires {
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    overflow: visible;
    pointer-events: none;
  }

  /* Info lateral */
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
    <!-- Pines -->
    <span class="pin pin-gnd-l">GND</span>
    <span class="pin pin-gpio4">GPIO 4</span>
    <span class="pin pin-gpio2">GPIO 2</span>
    <span class="pin pin-gnd-r">GND</span>

    <!-- ESP32 -->
    <div class="esp32">
      <div class="chip-label">
        <span>ESP</span>
        <span>32</span>
      </div>
    </div>

    <!-- Botón -->
    <div class="btn-body">▣</div>
    <span class="btn-label">BTN</span>

    <!-- Resistencia -->
    <div class="res-body"></div>
    <span class="res-label">220Ω</span>

    <!-- LED -->
    <div class="led-body">
      <div class="led-triangle"></div>
      <div class="led-line"></div>
    </div>
    <span class="led-label">LED</span>

    <!-- Cables -->
    <svg class="wires">
      <!-- GPIO4 → Botón (azul) -->
      <line x1="120" y1="135" x2="58" y2="122" stroke="#58a6ff" stroke-width="2"/>
      <!-- Botón → GND (gris) -->
      <polyline points="44,136 44,230 160,230 160,220" fill="none" stroke="#8b949e" stroke-width="2"/>
      <!-- GPIO2 → Resistencia (naranja) -->
      <line x1="220" y1="121" x2="294" y2="121" stroke="#f0883e" stroke-width="2"/>
      <!-- Resistencia → LED (naranja) -->
      <line x1="310" y1="121" x2="295" y2="114" stroke="#f0883e" stroke-width="2"/>
      <!-- LED → GND (gris) -->
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
          code: "// PROGRAMA 04 — El botón controla el LED\n// Completa los espacios en blanco\n\nconst int LED_PIN   = 2;\nconst int BOTON_PIN = 4;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN,   OUTPUT);\n  pinMode(BOTON_PIN, );\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Presiona el botón para encender el LED\");\n}\n\nvoid loop() {\n  if (digitalRead(BOTON_PIN) == ) {  // ¿presionado?\n    digitalWrite(LED_PIN, );          // encender\n    Serial.println(\"LED: ON\");\n  } else {\n    digitalWrite(LED_PIN, );          // apagar\n    Serial.println(\"LED: OFF\");\n  }\n  delay(100);\n}",
          codeRef: "// PROGRAMA 04 — El botón controla el LED\n\nconst int LED_PIN   = 2;\nconst int BOTON_PIN = 4;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN,   OUTPUT);\n  pinMode(BOTON_PIN, INPUT_PULLUP);\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Presiona el botón para encender el LED\");\n}\n\nvoid loop() {\n  if (digitalRead(BOTON_PIN) == LOW) {\n    digitalWrite(LED_PIN, HIGH);\n    Serial.println(\"LED: ON\");\n  } else {\n    digitalWrite(LED_PIN, LOW);\n    Serial.println(\"LED: OFF\");\n  }\n  delay(100);\n}",
          product: "Proyecto Programa_04_BotonLED: el LED enciende mientras se presiona el botón y apaga al soltarlo. Reto extra: parpadeo al presionar.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: El delay(100) evita que el Serial Monitor se llene demasiado rápido, pero introduce un pequeño retraso perceptible. Señalar esto: es un compromiso entre legibilidad del Serial Monitor y respuesta del botón. El reto de parpadeo al presionar requiere un for loop dentro del if — quien llegue ahí ya conectó la semana anterior con la actual."
        }
      ],
      cierre: "El ESP32 ya no solo actúa — ahora también escucha. INPUT_PULLUP, digitalRead() y la lógica invertida son las herramientas de cualquier sistema que responde al mundo físico.",
      frase_docente: "Un sistema que solo actúa es un robot. Uno que también escucha es un sistema inteligente."
    },
    {
      id: "wed",
      label: "Miércoles — El problema del rebote (debounce)",
      purpose: "Descubrir por qué los botones sin filtro generan lecturas falsas y aprender la solución con debounce por delay.",
      hours: [
        {
          time: "Hora 1",
          title: "Programa 05: contador de pulsaciones — sin debounce y con debounce",
          theory: "Un botón mecánico no hace contacto limpio al presionarlo. En los primeros milisegundos 'rebota': hace y rompe contacto varias veces antes de estabilizarse. El ESP32 es tan rápido que detecta cada rebote como una pulsación separada.\n\n⚠️ EL PROBLEMA\nSin debounce: presionas el botón UNA vez → el contador sube 5, 10 o 15 unidades porque detectó 5, 10 o 15 'pulsaciones' del rebote mecánico.\n\n✅ LA SOLUCIÓN — debounce por delay\nCuando detectamos que el botón se presionó, esperamos 50 ms y volvemos a leer. Si después de 50 ms el botón sigue presionado, es una pulsación real. Si ya se soltó, fue un rebote.\n\n🔑 CONCEPTO CLAVE: FLANCO DESCENDENTE\nEn lugar de detectar 'botón presionado', detectamos el momento exacto en que cambia de suelto (HIGH) a presionado (LOW). Ese instante se llama flanco descendente y ocurre una sola vez por pulsación:\n\n```\nbool anteriorEstado = HIGH;\n\nvoid loop() {\n  bool estadoActual = digitalRead(BOTON_PIN);\n  \n  if (anteriorEstado == HIGH && estadoActual == LOW) {\n    // ← este if solo se cumple UNA vez por pulsación\n  }\n  \n  anteriorEstado = estadoActual;\n}\n```",
          notebook: "Título: Debounce — el rebote del botón.\n1. ¿Qué es el rebote mecánico de un botón?\n2. ¿Por qué el ESP32 detecta múltiples pulsaciones en un solo clic?\n3. ¿Qué es un flanco descendente?\n4. ¿Por qué comparamos anteriorEstado == HIGH && estadoActual == LOW?\n5. ¿Cuántos ms de delay se usan para debounce y por qué ese valor?\n6. ¿Qué pasaría si usamos delay(500) para debounce en lugar de delay(50)?",
          practice: "PARTE 1 — Sin debounce (ver el problema):\n1. Abrir Wokwi con el circuito del martes (LED en GPIO 2, botón en GPIO 4).\n2. Copiar la versión SIN debounce del Programa 05.\n3. Presionar ▶ y abrir el Serial Monitor.\n4. Presionar el botón despacio UNA sola vez — anotar cuántos conteos aparecieron.\n5. Presionar 5 veces — anotar el número final (¿es 5?).\n\nPARTE 2 — Con debounce (la solución):\n6. Actualizar el código con la versión CON debounce.\n7. Repetir: presionar 5 veces despacio — el contador debe llegar exactamente a 5.\n8. Presionar 10 veces — debe marcar exactamente 10.\n9. Guardar como 'Programa_05_Contador_Debounce'.",
          diagram: `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0d1117; font-family: 'Segoe UI', sans-serif; color: #e6edf3; padding: 24px; }
  h2 { font-size: 15px; color: #58a6ff; margin-bottom: 18px; }
  .panels { display: flex; gap: 20px; flex-wrap: wrap; }
  .panel {
    flex: 1; min-width: 260px;
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 10px;
    padding: 16px;
  }
  .panel h3 { font-size: 12px; margin-bottom: 12px; }
  .bad  h3 { color: #f85149; }
  .good h3 { color: #3fb950; }
  canvas { width: 100%; border-radius: 6px; background: #0d1117; display: block; }
  .desc { margin-top: 12px; font-size: 10px; color: #8b949e; line-height: 1.6; }
  .desc strong { color: #e6edf3; }
  .tag {
    display: inline-block;
    padding: 2px 8px; border-radius: 12px;
    font-size: 10px; font-weight: 700;
    margin-bottom: 8px;
  }
  .tag-bad  { background: #3d1a1a; color: #f85149; }
  .tag-good { background: #1a3a1a; color: #3fb950; }
  .steps { margin-top: 14px; }
  .step {
    display: flex; gap: 10px; align-items: flex-start;
    padding: 8px 10px;
    background: #21262d;
    border-radius: 6px;
    margin-bottom: 8px;
    font-size: 10px;
    color: #8b949e;
  }
  .step-num {
    background: #30363d;
    border-radius: 50%;
    width: 18px; height: 18px;
    display: flex; align-items: center; justify-content: center;
    font-size: 9px; font-weight: 700; color: #e6edf3;
    flex-shrink: 0;
  }
  code { color: #79c0ff; font-size: 10px; }
</style>
</head>
<body>
<h2>⚡ Programa 05 — El rebote del botón: sin debounce vs con debounce</h2>

<div class="panels">
  <!-- SIN DEBOUNCE -->
  <div class="panel bad">
    <span class="tag tag-bad">❌ Sin debounce</span>
    <h3>Señal real del botón (zoom extremo)</h3>
    <canvas id="bad" width="300" height="100"></canvas>
    <p class="desc">
      Presionas <strong>1 vez</strong> → el ESP32 detecta <strong>8–15 flancos</strong> en los primeros ~5 ms por el rebote mecánico.<br>
      Resultado: el contador sube varios números con un solo clic.
    </p>
  </div>

  <!-- CON DEBOUNCE -->
  <div class="panel good">
    <span class="tag tag-good">✅ Con debounce (delay 50 ms)</span>
    <h3>Señal filtrada</h3>
    <canvas id="good" width="300" height="100"></canvas>
    <p class="desc">
      Después de detectar el flanco, esperamos <strong>50 ms</strong> y confirmamos.<br>
      El rebote ya terminó — el ESP32 cuenta exactamente <strong>1 pulsación</strong>.
    </p>
  </div>
</div>

<div class="steps" style="margin-top:20px">
  <div class="step">
    <span class="step-num">1</span>
    <span>Detectar <strong>flanco descendente</strong>: <code>anteriorEstado == HIGH && estadoActual == LOW</code></span>
  </div>
  <div class="step">
    <span class="step-num">2</span>
    <span>Esperar: <code>delay(50);</code> — el rebote dura ~5 ms, 50 ms garantiza que terminó</span>
  </div>
  <div class="step">
    <span class="step-num">3</span>
    <span>Confirmar: <code>if (digitalRead(BOTON_PIN) == LOW)</code> — si sigue presionado, es real</span>
  </div>
  <div class="step">
    <span class="step-num">4</span>
    <span>Ejecutar la acción: <code>contador++;</code> — solo una vez por pulsación real</span>
  </div>
</div>

<script>
function drawBad(id) {
  const c = document.getElementById(id);
  const ctx = c.getContext('2d');
  c.width = c.offsetWidth * 2; c.height = 100;
  const w = c.width, h = c.height;
  ctx.fillStyle = '#0d1117'; ctx.fillRect(0,0,w,h);

  ctx.strokeStyle = '#f85149'; ctx.lineWidth = 2;
  ctx.beginPath();

  // idle HIGH
  let x = 0, y = 20;
  ctx.moveTo(x, y);
  x = w * 0.2; ctx.lineTo(x, y);

  // bouncing sequence
  const bounces = [
    [0,80],[5,20],[8,80],[12,20],[15,80],[18,20],[20,80],[22,20],[24,80],[26,20],
    [28,80],[40,80]
  ];
  bounces.forEach(([dx, ny]) => {
    x += dx * (w / 400);
    ctx.lineTo(x, ny);
  });
  // stable LOW
  ctx.lineTo(w * 0.7, 80);
  // release bounce
  const rel = [[0,20],[4,80],[7,20],[10,80],[13,20]];
  rel.forEach(([dx, ny]) => {
    x = w * 0.7 + dx * (w / 400);
    ctx.lineTo(x, ny);
  });
  ctx.lineTo(w, 20);
  ctx.stroke();

  // labels
  ctx.fillStyle = '#8b949e'; ctx.font = \`\${w/30}px Segoe UI\`;
  ctx.fillText('HIGH', 4, 18);
  ctx.fillText('LOW',  4, 92);

  // rebote bracket
  ctx.strokeStyle = '#f8514966'; ctx.lineWidth = 1;
  ctx.setLineDash([3,3]);
  ctx.strokeRect(w*0.19, 10, w*0.2, 80);
  ctx.setLineDash([]);
  ctx.fillStyle = '#f85149'; ctx.font = \`\${w/35}px Segoe UI\`;
  ctx.fillText('rebote ~5ms', w*0.2, 8);
}

function drawGood(id) {
  const c = document.getElementById(id);
  const ctx = c.getContext('2d');
  c.width = c.offsetWidth * 2; c.height = 100;
  const w = c.width, h = c.height;
  ctx.fillStyle = '#0d1117'; ctx.fillRect(0,0,w,h);

  ctx.strokeStyle = '#3fb950'; ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, 20);
  ctx.lineTo(w*0.25, 20);
  ctx.lineTo(w*0.25, 80);
  ctx.lineTo(w*0.65, 80);
  ctx.lineTo(w*0.65, 20);
  ctx.lineTo(w, 20);
  ctx.stroke();

  // delay zone
  ctx.fillStyle = '#3fb95022';
  ctx.fillRect(w*0.25, 10, w*0.08, 80);
  ctx.fillStyle = '#3fb950'; ctx.font = \`\${w/40}px Segoe UI\`;
  ctx.fillText('delay(50)', w*0.255, 8);
  ctx.fillText('✓ confirmado', w*0.34, 50);

  ctx.fillStyle = '#8b949e'; ctx.font = \`\${w/30}px Segoe UI\`;
  ctx.fillText('HIGH', 4, 18);
  ctx.fillText('LOW',  4, 92);
}

drawBad('bad');
drawGood('good');
</script>
</body>
</html>
`,
          code: "// PROGRAMA 05 — Contador con debounce\n// Completa los espacios en blanco\n\nconst int LED_PIN   = 2;\nconst int BOTON_PIN = 4;\n\nint  contador      = 0;\nbool anteriorEstado = ;  // ¿HIGH o LOW? (botón suelto al inicio)\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN,   OUTPUT);\n  pinMode(BOTON_PIN, INPUT_PULLUP);\n  Serial.println(\"Contador listo. Presiona el botón.\");\n}\n\nvoid loop() {\n  bool estadoActual = digitalRead( );\n\n  // Detectar flanco descendente (HIGH → LOW)\n  if (anteriorEstado ==  && estadoActual == ) {\n    delay( );  // esperar 50 ms para debounce\n\n    if (digitalRead(BOTON_PIN) == LOW) {  // confirmar que sigue presionado\n      contador = contador + 1;\n      Serial.print(\"Pulsaciones: \");\n      Serial.println( );\n\n      // Parpadear el LED para confirmar el conteo\n      digitalWrite(LED_PIN, HIGH);\n      delay(100);\n      digitalWrite(LED_PIN, );\n    }\n  }\n\n  anteriorEstado = estadoActual;\n}",
          codeRef: "// PROGRAMA 05 — Contador con debounce\n\nconst int LED_PIN   = 2;\nconst int BOTON_PIN = 4;\n\nint  contador       = 0;\nbool anteriorEstado = HIGH;  // botón suelto = HIGH con INPUT_PULLUP\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN,   OUTPUT);\n  pinMode(BOTON_PIN, INPUT_PULLUP);\n  Serial.println(\"Contador listo. Presiona el botón.\");\n}\n\nvoid loop() {\n  bool estadoActual = digitalRead(BOTON_PIN);\n\n  if (anteriorEstado == HIGH && estadoActual == LOW) {\n    delay(50);  // debounce: esperar que el rebote termine\n\n    if (digitalRead(BOTON_PIN) == LOW) {  // confirmar pulsación real\n      contador = contador + 1;\n      Serial.print(\"Pulsaciones: \");\n      Serial.println(contador);\n\n      digitalWrite(LED_PIN, HIGH);\n      delay(100);\n      digitalWrite(LED_PIN, LOW);\n    }\n  }\n\n  anteriorEstado = estadoActual;\n}",
          product: "Proyecto Programa_05_Contador_Debounce: el contador refleja exactamente cuántas veces se presionó el botón, sin lecturas falsas por rebote.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Es importante que vean el problema ANTES de la solución — PARTE 1 sin debounce. Algunos simuladores (Wokwi) pueden comportarse mejor que hardware real con el rebote; si no es visible, mencionar que en placa física el efecto es muy notorio. El concepto de flanco descendente (solo reaccionar al instante del cambio, no mientras está presionado) es fundamental para el resto del curso — repetirlo con diferentes palabras: 'no nos importa que esté presionado, nos importa el momento exacto en que se presionó'."
        }
      ],
      cierre: "Detectar el cuándo, no solo el qué. El flanco descendente y el debounce son la diferencia entre un sistema confiable y uno que cuenta de más.",
      frase_docente: "La señal perfecta no existe en el mundo físico. El buen ingeniero sabe filtrarla."
    },
    {
      id: "thu",
      label: "Jueves — Toggle: un botón que recuerda su estado",
      purpose: "Implementar el patrón toggle — cada pulsación cambia el estado del LED — entendiendo cómo guardar y cambiar estado en una variable booleana.",
      hours: [
        {
          time: "Hora 1",
          title: "Programa 06: toggle con botón — encender y apagar alternando",
          theory: "En el Programa 04, el LED encendía solo mientras mantenías presionado el botón. Hoy implementamos toggle: cada pulsación cambia el estado del LED de forma permanente, como un interruptor de pared.\n\n🔄 EL OPERADOR ! (negación booleana)\nSi tienes una variable bool, el operador ! la invierte:\n\n```\nbool estadoLED = false;\nestadoLED = !estadoLED;  // ahora es true\nestadoLED = !estadoLED;  // ahora es false otra vez\n```\n\nCada vez que ejecutas !estadoLED, el valor se alterna. Esto es el toggle.\n\n🧠 EL PATRÓN COMPLETO\n1. Detectar flanco descendente del botón (igual que Programa 05)\n2. Invertir la variable estadoLED con !\n3. Aplicar el nuevo estado al LED con digitalWrite()\n\n```\nif (anteriorBoton == HIGH && estadoBoton == LOW) {\n  delay(50);  // debounce\n  if (digitalRead(BOTON_PIN) == LOW) {\n    estadoLED = !estadoLED;           // toggle\n    digitalWrite(LED_PIN, estadoLED); // aplicar\n  }\n}\n```\n\n📌 La variable estadoLED 'recuerda' el último estado — el ESP32 guarda esa información aunque no estés presionando nada.",
          notebook: "Título: Toggle — el interruptor de pared.\n1. ¿Qué hace el operador ! sobre una variable bool?\n2. Si estadoLED = true, ¿qué vale después de estadoLED = !estadoLED? → ___\n3. ¿En qué se diferencia el Programa 06 del Programa 04?\n4. ¿Por qué necesitamos la variable anteriorBoton para el toggle?\n5. Da 3 ejemplos de la vida real donde se use el patrón toggle.",
          practice: "1. Abrir el proyecto del miércoles (Programa_05) en Wokwi.\n2. Copiar el código del Programa 06 y completar los espacios en blanco.\n3. Presionar ▶ y probar:\n   - Primer clic → LED enciende (queda encendido al soltar)\n   - Segundo clic → LED apaga\n   - Tercer clic → LED enciende\n   - ... y así alternando\n4. Verificar en el Serial Monitor que imprime 'LED: ON' y 'LED: OFF' alternando.\n5. Reto: agregar al Serial Monitor el número de veces que se ha pulsado (combinar contador + toggle).\n6. Guardar como 'Programa_06_Toggle'.",
          diagram: `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0d1117; font-family: 'Segoe UI', sans-serif; color: #e6edf3; padding: 24px; }
  h2 { font-size: 15px; color: #58a6ff; margin-bottom: 18px; }
  .layout { display: flex; gap: 24px; align-items: flex-start; flex-wrap: wrap; }
  .circuit {
    position: relative;
    width: 360px; height: 320px;
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 12px;
    flex-shrink: 0;
  }
  .esp32 {
    position: absolute;
    left: 130px; top: 70px;
    width: 100px; height: 180px;
    background: #1a3a1a;
    border: 2px solid #3fb950;
    border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700; color: #3fb950;
    letter-spacing: 1px;
  }
  .pin {
    position: absolute;
    font-size: 9px; color: #8b949e; white-space: nowrap;
  }
  /* left pins */
  .p-gnd1  { left: 6px; top: 118px; }
  .p-gp4   { left: 6px; top: 138px; }
  .p-gnd2  { left: 6px; top: 158px; }
  .p-gp5   { left: 6px; top: 178px; }
  /* right pins */
  .p-gp2   { right: 6px; top: 118px; }
  .p-gnd3  { right: 6px; top: 138px; }
  .p-gp13  { right: 6px; top: 158px; }
  .p-gnd4  { right: 6px; top: 178px; }

  /* buttons */
  .btn {
    position: absolute;
    width: 26px; height: 26px;
    background: #21262d;
    border: 2px solid #58a6ff;
    border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    font-size: 9px; color: #58a6ff;
  }
  .btn1 { left: 30px; top: 130px; }
  .btn2 { left: 30px; top: 168px; }
  .btn-lbl { position: absolute; font-size: 9px; color: #8b949e; }
  .bl1 { left: 20px; top: 160px; }
  .bl2 { left: 20px; top: 198px; }

  /* leds */
  .led { position: absolute; }
  .led-tri {
    width: 0; height: 0;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    margin: 0 auto;
  }
  .led-line-v { width: 2px; height: 8px; margin: 0 auto; }
  .led1 { right: 34px; top: 114px; }
  .led2 { right: 34px; top: 154px; }
  .led-lbl { position: absolute; font-size: 9px; color: #8b949e; }
  .ll1 { right: 24px; top: 140px; }
  .ll2 { right: 24px; top: 180px; }

  /* resistors */
  .res {
    position: absolute;
    width: 14px; height: 16px;
    background: #21262d;
    border: 1.5px solid #d29922;
    border-radius: 2px;
  }
  .res1 { right: 56px; top: 118px; }
  .res2 { right: 56px; top: 158px; }
  .res-lbl { position: absolute; font-size: 8px; color: #d29922; }
  .rl1 { right: 52px; top: 136px; }
  .rl2 { right: 52px; top: 176px; }

  svg.wires {
    position: absolute; top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
  }

  /* table */
  .table-box {
    flex: 1; min-width: 180px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 11px;
    margin-bottom: 16px;
  }
  th {
    background: #21262d;
    color: #58a6ff;
    padding: 6px 10px;
    text-align: left;
    font-size: 10px;
  }
  td {
    padding: 6px 10px;
    border-bottom: 1px solid #21262d;
    color: #8b949e;
  }
  td strong { color: #e6edf3; }
  .note {
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 10px;
    color: #8b949e;
    line-height: 1.6;
  }
  .note strong { color: #e6edf3; }
  code { color: #79c0ff; }
</style>
</head>
<body>
<h2>🔌 Circuito — Programa 07: 2 botones + 2 LEDs independientes</h2>
<div class="layout">
  <div class="circuit">
    <!-- Pines -->
    <span class="pin p-gnd1">GND</span>
    <span class="pin p-gp4">GPIO 4</span>
    <span class="pin p-gnd2">GND</span>
    <span class="pin p-gp5">GPIO 5</span>
    <span class="pin p-gp2">GPIO 2</span>
    <span class="pin p-gnd3">GND</span>
    <span class="pin p-gp13">GPIO 13</span>
    <span class="pin p-gnd4">GND</span>

    <!-- ESP32 -->
    <div class="esp32">ESP32</div>

    <!-- BTN1 -->
    <div class="btn btn1">▣</div>
    <span class="btn-lbl bl1">BTN1</span>

    <!-- BTN2 -->
    <div class="btn btn2">▣</div>
    <span class="btn-lbl bl2">BTN2</span>

    <!-- RES1 -->
    <div class="res res1"></div>
    <span class="res-lbl rl1">220Ω</span>

    <!-- RES2 -->
    <div class="res res2"></div>
    <span class="res-lbl rl2">220Ω</span>

    <!-- LED1 (red) -->
    <div class="led led1">
      <div class="led-tri" style="border-top: 16px solid #f85149;"></div>
      <div class="led-line-v" style="background:#f85149;"></div>
    </div>
    <span class="led-lbl ll1">LED1</span>

    <!-- LED2 (green) -->
    <div class="led led2">
      <div class="led-tri" style="border-top: 16px solid #3fb950;"></div>
      <div class="led-line-v" style="background:#3fb950;"></div>
    </div>
    <span class="led-lbl ll2">LED2</span>

    <svg class="wires">
      <!-- BTN1: GPIO4 → btn → GND (azul) -->
      <line x1="130" y1="143" x2="56" y2="143" stroke="#58a6ff" stroke-width="2"/>
      <polyline points="43,156 43,240 180,240 180,225" fill="none" stroke="#8b949e" stroke-width="2"/>
      <!-- BTN2: GPIO5 → btn → GND (cyan) -->
      <line x1="130" y1="183" x2="56" y2="181" stroke="#79c0ff" stroke-width="2"/>
      <polyline points="43,194 43,260 200,260 200,225" fill="none" stroke="#8b949e" stroke-width="1.5" stroke-dasharray="4,2"/>

      <!-- LED1: GPIO2 → res → led → GND (naranja) -->
      <line x1="230" y1="124" x2="286" y2="124" stroke="#f0883e" stroke-width="2"/>
      <line x1="300" y1="124" x2="313" y2="122" stroke="#f0883e" stroke-width="2"/>
      <polyline points="322,138 322,240 180,240" fill="none" stroke="#8b949e" stroke-width="2"/>

      <!-- LED2: GPIO13 → res → led → GND (verde) -->
      <line x1="230" y1="164" x2="286" y2="164" stroke="#3fb950" stroke-width="2"/>
      <line x1="300" y1="164" x2="313" y2="162" stroke="#3fb950" stroke-width="2"/>
      <polyline points="322,178 322,260 200,260" fill="none" stroke="#8b949e" stroke-width="1.5" stroke-dasharray="4,2"/>
    </svg>
  </div>

  <div class="table-box">
    <table>
      <tr><th>Componente</th><th>Pin ESP32</th></tr>
      <tr><td><strong>Botón 1</strong> (terminal A)</td><td>GPIO 4</td></tr>
      <tr><td><strong>Botón 1</strong> (terminal B)</td><td>GND</td></tr>
      <tr><td><strong>Botón 2</strong> (terminal A)</td><td>GPIO 5</td></tr>
      <tr><td><strong>Botón 2</strong> (terminal B)</td><td>GND</td></tr>
      <tr><td><strong>LED 1</strong> (rojo) + 220Ω</td><td>GPIO 2 → GND</td></tr>
      <tr><td><strong>LED 2</strong> (verde) + 220Ω</td><td>GPIO 13 → GND</td></tr>
    </table>

    <div class="note">
      <strong>Cada botón tiene su propio anteriorEstado</strong><br>
      <code>bool anteriorBot1 = HIGH;</code><br>
      <code>bool anteriorBot2 = HIGH;</code><br><br>
      Si compartieras una sola variable, el segundo botón podría ver un flanco que no le corresponde y activarse sin que lo presiones.
    </div>
  </div>
</div>
</body>
</html>
`,
          code: "// PROGRAMA 06 — Toggle LED con botón\n// Completa los espacios en blanco\n\nconst int LED_PIN   = 2;\nconst int BOTON_PIN = 4;\n\nbool estadoLED    = ;  // ¿true o false? (LED apagado al inicio)\nbool anteriorBoton = HIGH;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN,   OUTPUT);\n  pinMode(BOTON_PIN, INPUT_PULLUP);\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Presiona el botón para cambiar el LED.\");\n}\n\nvoid loop() {\n  bool estadoBoton = digitalRead(BOTON_PIN);\n\n  if (anteriorBoton ==  && estadoBoton == ) {  // flanco descendente\n    delay(50);\n    if (digitalRead(BOTON_PIN) == LOW) {\n      estadoLED = !;           // toggle — invertir estado\n      digitalWrite(LED_PIN, );  // aplicar al LED\n\n      if (estadoLED) {\n        Serial.println(\"LED: ON\");\n      } else {\n        Serial.println(\"LED: OFF\");\n      }\n    }\n  }\n\n  anteriorBoton = estadoBoton;\n}",
          codeRef: "// PROGRAMA 06 — Toggle LED con botón\n\nconst int LED_PIN   = 2;\nconst int BOTON_PIN = 4;\n\nbool estadoLED    = false;  // LED apagado al inicio\nbool anteriorBoton = HIGH;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN,   OUTPUT);\n  pinMode(BOTON_PIN, INPUT_PULLUP);\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Presiona el botón para cambiar el LED.\");\n}\n\nvoid loop() {\n  bool estadoBoton = digitalRead(BOTON_PIN);\n\n  if (anteriorBoton == HIGH && estadoBoton == LOW) {\n    delay(50);\n    if (digitalRead(BOTON_PIN) == LOW) {\n      estadoLED = !estadoLED;\n      digitalWrite(LED_PIN, estadoLED);\n\n      if (estadoLED) {\n        Serial.println(\"LED: ON\");\n      } else {\n        Serial.println(\"LED: OFF\");\n      }\n    }\n  }\n\n  anteriorBoton = estadoBoton;\n}",
          product: "Proyecto Programa_06_Toggle: el LED cambia de estado con cada pulsación del botón. Serial Monitor refleja ON/OFF.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: El concepto de 'estado que persiste' es nuevo para la mayoría. Preguntar: '¿Dónde vive el estado del LED cuando nadie toca nada?' — en la variable estadoLED. El hardware (LED encendido o apagado) es solo el reflejo de esa variable. Este patrón aparece en toda la programación: React con useState, videojuegos con flags de estado, menús con isOpen. El reto de combinar contador + toggle es excelente para quien va rápido."
        },
        {
          time: "Hora 2",
          title: "Programa 07: dos botones, dos LEDs — control independiente",
          theory: "Escalamos el proyecto: dos botones controlan dos LEDs de forma independiente. Cada botón tiene su propia variable de estado, su propio anteriorEstado y su propia lógica de toggle. El patrón es idéntico al Programa 06, solo se duplica.\n\n🔌 PINES\n- LED1 → GPIO 2\n- LED2 → GPIO 13\n- BOTON1 → GPIO 4\n- BOTON2 → GPIO 5\n\n📋 LO QUE APRENDERÁS\n- Cómo escalar un patrón a múltiples entradas y salidas\n- La importancia de nombres claros (led1Estado vs led2Estado)\n- Que cada botón necesita su propio 'anteriorEstado' para detectar flancos independientes\n\n🎯 RETO FINAL DE LA SEMANA\nAl final de Hora 2, agregar un comando 'b' por Serial Monitor que encienda ambos LEDs simultáneamente (combina Serial + botones del Programa 07 — igual que la Práctica 2 de la semana pasada pero ahora con toggle físico también).",
          notebook: "Título: Dos botones, dos LEDs.\n1. ¿Por qué cada botón necesita su propia variable anteriorEstado?\n2. Si led1Estado = true y led2Estado = false, ¿cuál LED está encendido?\n3. ¿Qué pasa si compartes una sola variable anteriorEstado para ambos botones?\n4. Dibuja el circuito: ESP32 con 2 LEDs y 2 botones, indicando los pines.\n5. Reflexión final de la semana: ¿qué diferencia hay entre controlar un LED por Serial y controlarlo con un botón físico? ¿En qué situación usarías cada uno?",
          practice: "1. Abrir el proyecto Programa_06 en Wokwi.\n2. Agregar: LED2 con resistencia 220Ω en GPIO 13, y Botón2 con GND en GPIO 5.\n3. Copiar el Programa 07 y completar los espacios en blanco.\n4. Presionar ▶ y probar:\n   - Botón 1 → toggle de LED1 (no afecta LED2)\n   - Botón 2 → toggle de LED2 (no afecta LED1)\n   - Ambos botones → cada LED cambia de forma independiente\n5. Reto: agregar en setup() un comando por Serial Monitor 'b' que encienda ambos LEDs (led1Estado = true, led2Estado = true).\n6. Guardar como 'Programa_07_DosBotones'.",
          diagram: `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<style>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #0d1117; font-family: 'Segoe UI', sans-serif; color: #e6edf3; padding: 24px; }
  h2 { font-size: 15px; color: #58a6ff; margin-bottom: 18px; }
  .layout { display: flex; gap: 24px; align-items: flex-start; flex-wrap: wrap; }
  .circuit {
    position: relative;
    width: 360px; height: 320px;
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 12px;
    flex-shrink: 0;
  }
  .esp32 {
    position: absolute;
    left: 130px; top: 70px;
    width: 100px; height: 180px;
    background: #1a3a1a;
    border: 2px solid #3fb950;
    border-radius: 6px;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700; color: #3fb950;
    letter-spacing: 1px;
  }
  .pin {
    position: absolute;
    font-size: 9px; color: #8b949e; white-space: nowrap;
  }
  /* left pins */
  .p-gnd1  { left: 6px; top: 118px; }
  .p-gp4   { left: 6px; top: 138px; }
  .p-gnd2  { left: 6px; top: 158px; }
  .p-gp5   { left: 6px; top: 178px; }
  /* right pins */
  .p-gp2   { right: 6px; top: 118px; }
  .p-gnd3  { right: 6px; top: 138px; }
  .p-gp13  { right: 6px; top: 158px; }
  .p-gnd4  { right: 6px; top: 178px; }

  /* buttons */
  .btn {
    position: absolute;
    width: 26px; height: 26px;
    background: #21262d;
    border: 2px solid #58a6ff;
    border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    font-size: 9px; color: #58a6ff;
  }
  .btn1 { left: 30px; top: 130px; }
  .btn2 { left: 30px; top: 168px; }
  .btn-lbl { position: absolute; font-size: 9px; color: #8b949e; }
  .bl1 { left: 20px; top: 160px; }
  .bl2 { left: 20px; top: 198px; }

  /* leds */
  .led { position: absolute; }
  .led-tri {
    width: 0; height: 0;
    border-left: 9px solid transparent;
    border-right: 9px solid transparent;
    margin: 0 auto;
  }
  .led-line-v { width: 2px; height: 8px; margin: 0 auto; }
  .led1 { right: 34px; top: 114px; }
  .led2 { right: 34px; top: 154px; }
  .led-lbl { position: absolute; font-size: 9px; color: #8b949e; }
  .ll1 { right: 24px; top: 140px; }
  .ll2 { right: 24px; top: 180px; }

  /* resistors */
  .res {
    position: absolute;
    width: 14px; height: 16px;
    background: #21262d;
    border: 1.5px solid #d29922;
    border-radius: 2px;
  }
  .res1 { right: 56px; top: 118px; }
  .res2 { right: 56px; top: 158px; }
  .res-lbl { position: absolute; font-size: 8px; color: #d29922; }
  .rl1 { right: 52px; top: 136px; }
  .rl2 { right: 52px; top: 176px; }

  svg.wires {
    position: absolute; top: 0; left: 0;
    width: 100%; height: 100%;
    pointer-events: none;
  }

  /* table */
  .table-box {
    flex: 1; min-width: 180px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 11px;
    margin-bottom: 16px;
  }
  th {
    background: #21262d;
    color: #58a6ff;
    padding: 6px 10px;
    text-align: left;
    font-size: 10px;
  }
  td {
    padding: 6px 10px;
    border-bottom: 1px solid #21262d;
    color: #8b949e;
  }
  td strong { color: #e6edf3; }
  .note {
    background: #161b22;
    border: 1px solid #30363d;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 10px;
    color: #8b949e;
    line-height: 1.6;
  }
  .note strong { color: #e6edf3; }
  code { color: #79c0ff; }
</style>
</head>
<body>
<h2>🔌 Circuito — Programa 07: 2 botones + 2 LEDs independientes</h2>
<div class="layout">
  <div class="circuit">
    <!-- Pines -->
    <span class="pin p-gnd1">GND</span>
    <span class="pin p-gp4">GPIO 4</span>
    <span class="pin p-gnd2">GND</span>
    <span class="pin p-gp5">GPIO 5</span>
    <span class="pin p-gp2">GPIO 2</span>
    <span class="pin p-gnd3">GND</span>
    <span class="pin p-gp13">GPIO 13</span>
    <span class="pin p-gnd4">GND</span>

    <!-- ESP32 -->
    <div class="esp32">ESP32</div>

    <!-- BTN1 -->
    <div class="btn btn1">▣</div>
    <span class="btn-lbl bl1">BTN1</span>

    <!-- BTN2 -->
    <div class="btn btn2">▣</div>
    <span class="btn-lbl bl2">BTN2</span>

    <!-- RES1 -->
    <div class="res res1"></div>
    <span class="res-lbl rl1">220Ω</span>

    <!-- RES2 -->
    <div class="res res2"></div>
    <span class="res-lbl rl2">220Ω</span>

    <!-- LED1 (red) -->
    <div class="led led1">
      <div class="led-tri" style="border-top: 16px solid #f85149;"></div>
      <div class="led-line-v" style="background:#f85149;"></div>
    </div>
    <span class="led-lbl ll1">LED1</span>

    <!-- LED2 (green) -->
    <div class="led led2">
      <div class="led-tri" style="border-top: 16px solid #3fb950;"></div>
      <div class="led-line-v" style="background:#3fb950;"></div>
    </div>
    <span class="led-lbl ll2">LED2</span>

    <svg class="wires">
      <!-- BTN1: GPIO4 → btn → GND (azul) -->
      <line x1="130" y1="143" x2="56" y2="143" stroke="#58a6ff" stroke-width="2"/>
      <polyline points="43,156 43,240 180,240 180,225" fill="none" stroke="#8b949e" stroke-width="2"/>
      <!-- BTN2: GPIO5 → btn → GND (cyan) -->
      <line x1="130" y1="183" x2="56" y2="181" stroke="#79c0ff" stroke-width="2"/>
      <polyline points="43,194 43,260 200,260 200,225" fill="none" stroke="#8b949e" stroke-width="1.5" stroke-dasharray="4,2"/>

      <!-- LED1: GPIO2 → res → led → GND (naranja) -->
      <line x1="230" y1="124" x2="286" y2="124" stroke="#f0883e" stroke-width="2"/>
      <line x1="300" y1="124" x2="313" y2="122" stroke="#f0883e" stroke-width="2"/>
      <polyline points="322,138 322,240 180,240" fill="none" stroke="#8b949e" stroke-width="2"/>

      <!-- LED2: GPIO13 → res → led → GND (verde) -->
      <line x1="230" y1="164" x2="286" y2="164" stroke="#3fb950" stroke-width="2"/>
      <line x1="300" y1="164" x2="313" y2="162" stroke="#3fb950" stroke-width="2"/>
      <polyline points="322,178 322,260 200,260" fill="none" stroke="#8b949e" stroke-width="1.5" stroke-dasharray="4,2"/>
    </svg>
  </div>

  <div class="table-box">
    <table>
      <tr><th>Componente</th><th>Pin ESP32</th></tr>
      <tr><td><strong>Botón 1</strong> (terminal A)</td><td>GPIO 4</td></tr>
      <tr><td><strong>Botón 1</strong> (terminal B)</td><td>GND</td></tr>
      <tr><td><strong>Botón 2</strong> (terminal A)</td><td>GPIO 5</td></tr>
      <tr><td><strong>Botón 2</strong> (terminal B)</td><td>GND</td></tr>
      <tr><td><strong>LED 1</strong> (rojo) + 220Ω</td><td>GPIO 2 → GND</td></tr>
      <tr><td><strong>LED 2</strong> (verde) + 220Ω</td><td>GPIO 13 → GND</td></tr>
    </table>

    <div class="note">
      <strong>Cada botón tiene su propio anteriorEstado</strong><br>
      <code>bool anteriorBot1 = HIGH;</code><br>
      <code>bool anteriorBot2 = HIGH;</code><br><br>
      Si compartieras una sola variable, el segundo botón podría ver un flanco que no le corresponde y activarse sin que lo presiones.
    </div>
  </div>
</div>
</body>
</html>
`,
          code: "// PROGRAMA 07 — Dos botones, dos LEDs independientes\n// Completa los espacios en blanco\n\nconst int LED1_PIN   = 2;\nconst int LED2_PIN   = ;   // ¿qué pin?\nconst int BOTON1_PIN = 4;\nconst int BOTON2_PIN = ;   // ¿qué pin?\n\nbool led1Estado    = false;\nbool led2Estado    = ;\nbool anteriorBot1  = HIGH;\nbool anteriorBot2  = ;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED1_PIN,   OUTPUT);\n  pinMode(LED2_PIN,   );\n  pinMode(BOTON1_PIN, INPUT_PULLUP);\n  pinMode(BOTON2_PIN, );\n  Serial.println(\"BOT1 = LED1  |  BOT2 = LED2\");\n}\n\nvoid loop() {\n  bool estadoBot1 = digitalRead(BOTON1_PIN);\n  bool estadoBot2 = digitalRead(BOTON2_PIN);\n\n  // Toggle LED1\n  if (anteriorBot1 == HIGH && estadoBot1 == LOW) {\n    delay(50);\n    if (digitalRead(BOTON1_PIN) == LOW) {\n      led1Estado = !;\n      digitalWrite(LED1_PIN, );\n      Serial.print(\"LED1: \"); Serial.println(led1Estado ? \"ON\" : \"OFF\");\n    }\n  }\n\n  // Toggle LED2\n  if (anteriorBot2 ==  && estadoBot2 == ) {\n    delay(50);\n    if (digitalRead(BOTON2_PIN) == LOW) {\n      led2Estado = !led2Estado;\n      digitalWrite(LED2_PIN, );\n      Serial.print(\"LED2: \"); Serial.println(led2Estado ? \"ON\" : \"OFF\");\n    }\n  }\n\n  anteriorBot1 = estadoBot1;\n  anteriorBot2 = estadoBot2;\n}",
          codeRef: "// PROGRAMA 07 — Dos botones, dos LEDs independientes\n\nconst int LED1_PIN   = 2;\nconst int LED2_PIN   = 13;\nconst int BOTON1_PIN = 4;\nconst int BOTON2_PIN = 5;\n\nbool led1Estado   = false;\nbool led2Estado   = false;\nbool anteriorBot1 = HIGH;\nbool anteriorBot2 = HIGH;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED1_PIN,   OUTPUT);\n  pinMode(LED2_PIN,   OUTPUT);\n  pinMode(BOTON1_PIN, INPUT_PULLUP);\n  pinMode(BOTON2_PIN, INPUT_PULLUP);\n  Serial.println(\"BOT1 = LED1  |  BOT2 = LED2\");\n}\n\nvoid loop() {\n  bool estadoBot1 = digitalRead(BOTON1_PIN);\n  bool estadoBot2 = digitalRead(BOTON2_PIN);\n\n  // Toggle LED1\n  if (anteriorBot1 == HIGH && estadoBot1 == LOW) {\n    delay(50);\n    if (digitalRead(BOTON1_PIN) == LOW) {\n      led1Estado = !led1Estado;\n      digitalWrite(LED1_PIN, led1Estado);\n      Serial.print(\"LED1: \"); Serial.println(led1Estado ? \"ON\" : \"OFF\");\n    }\n  }\n\n  // Toggle LED2\n  if (anteriorBot2 == HIGH && estadoBot2 == LOW) {\n    delay(50);\n    if (digitalRead(BOTON2_PIN) == LOW) {\n      led2Estado = !led2Estado;\n      digitalWrite(LED2_PIN, led2Estado);\n      Serial.print(\"LED2: \"); Serial.println(led2Estado ? \"ON\" : \"OFF\");\n    }\n  }\n\n  anteriorBot1 = estadoBot1;\n  anteriorBot2 = estadoBot2;\n}",
          product: "Proyecto Programa_07_DosBotones: cada botón controla su LED de forma independiente con toggle. Reto: comando 'b' por Serial enciende ambos.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: La pregunta de la libreta #3 (¿qué pasa si compartes una sola variable anteriorEstado?) es excelente para discutir: si ambos botones comparten el mismo anteriorEstado, el segundo botón puede ver un flanco que no le corresponde y activarse incorrectamente. Dejar que lo experimenten si el tiempo lo permite. El reto del Serial 'b' conecta con la semana anterior — quienes lo logren habrán integrado dos semanas de contenido en un solo programa."
        }
      ],
      cierre: "De leer un botón a manejar dos, de control momentáneo a toggle con estado persistente. Cada semana el ESP32 hace un poco más — y el código que lo controla también.",
      frase_docente: "El estado es memoria. Y la memoria es lo que separa una reacción de una decisión."
    }
  ]
};
