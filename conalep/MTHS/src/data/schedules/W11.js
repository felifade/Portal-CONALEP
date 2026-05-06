export const W11 = {
  materia: "mths",
  weekId: "W11",
  days: [
    {
      id: "tue",
      label: "Martes — Dos botones, dos LEDs independientes",
      purpose: "Escalar el patrón toggle a múltiples entradas y salidas: cada botón controla su propio LED de forma completamente independiente.",
      hours: [
        {
          time: "Hora 1",
          title: "Programa 07: dos botones, dos LEDs — control independiente",
          theory: "Escalamos el proyecto: dos botones controlan dos LEDs de forma independiente. Cada botón tiene su propia variable de estado, su propio anteriorEstado y su propia lógica de toggle. El patrón es idéntico al Programa 06, solo se duplica.\n\n🔌 PINES\n- LED1 → GPIO 2\n- LED2 → GPIO 13\n- BOTON1 → GPIO 4\n- BOTON2 → GPIO 5\n\n📋 LO QUE APRENDERÁS\n- Cómo escalar un patrón a múltiples entradas y salidas\n- La importancia de nombres claros (led1Estado vs led2Estado)\n- Que cada botón necesita su propio 'anteriorEstado' para detectar flancos independientes\n\n🎯 RETO FINAL\nAgregar un comando 'b' por Serial Monitor que encienda ambos LEDs simultáneamente (combina Serial + botones del Programa 07).",
          notebook: "Título: Dos botones, dos LEDs.\n1. ¿Por qué cada botón necesita su propia variable anteriorEstado?\n2. Si led1Estado = true y led2Estado = false, ¿cuál LED está encendido?\n3. ¿Qué pasa si compartes una sola variable anteriorEstado para ambos botones?\n4. Dibuja el circuito: ESP32 con 2 LEDs y 2 botones, indicando los pines.\n5. Reflexión: ¿qué diferencia hay entre controlar un LED por Serial y controlarlo con un botón físico? ¿En qué situación usarías cada uno?",
          practice: "1. Abrir el proyecto Programa_06 en Wokwi.\n2. Agregar: LED2 con resistencia 220Ω en GPIO 13, y Botón2 con GND en GPIO 5.\n3. Copiar el Programa 07 y completar los espacios en blanco.\n4. Presionar ▶ y probar:\n   - Botón 1 → toggle de LED1 (no afecta LED2)\n   - Botón 2 → toggle de LED2 (no afecta LED1)\n   - Ambos botones → cada LED cambia de forma independiente\n5. Reto: agregar en loop() un comando por Serial Monitor 'b' que encienda ambos LEDs.\n6. Guardar como 'Programa_07_DosBotones'.",
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
  .pin { position: absolute; font-size: 9px; color: #8b949e; white-space: nowrap; }
  .p-gnd1  { left: 6px; top: 118px; }
  .p-gp4   { left: 6px; top: 138px; }
  .p-gnd2  { left: 6px; top: 158px; }
  .p-gp5   { left: 6px; top: 178px; }
  .p-gp2   { right: 6px; top: 118px; }
  .p-gnd3  { right: 6px; top: 138px; }
  .p-gp13  { right: 6px; top: 158px; }
  .p-gnd4  { right: 6px; top: 178px; }
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
  .led { position: absolute; }
  .led-tri { width: 0; height: 0; border-left: 9px solid transparent; border-right: 9px solid transparent; margin: 0 auto; }
  .led-line-v { width: 2px; height: 8px; margin: 0 auto; }
  .led1 { right: 34px; top: 114px; }
  .led2 { right: 34px; top: 154px; }
  .led-lbl { position: absolute; font-size: 9px; color: #8b949e; }
  .ll1 { right: 24px; top: 140px; }
  .ll2 { right: 24px; top: 180px; }
  .res { position: absolute; width: 14px; height: 16px; background: #21262d; border: 1.5px solid #d29922; border-radius: 2px; }
  .res1 { right: 56px; top: 118px; }
  .res2 { right: 56px; top: 158px; }
  .res-lbl { position: absolute; font-size: 8px; color: #d29922; }
  .rl1 { right: 52px; top: 136px; }
  .rl2 { right: 52px; top: 176px; }
  svg.wires { position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; }
  .table-box { flex: 1; min-width: 180px; }
  table { width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 16px; }
  th { background: #21262d; color: #58a6ff; padding: 6px 10px; text-align: left; font-size: 10px; }
  td { padding: 6px 10px; border-bottom: 1px solid #21262d; color: #8b949e; }
  td strong { color: #e6edf3; }
  .note { background: #161b22; border: 1px solid #30363d; border-radius: 8px; padding: 10px 12px; font-size: 10px; color: #8b949e; line-height: 1.6; }
  .note strong { color: #e6edf3; }
  code { color: #79c0ff; }
</style>
</head>
<body>
<h2>🔌 Circuito — Programa 07: 2 botones + 2 LEDs independientes</h2>
<div class="layout">
  <div class="circuit">
    <span class="pin p-gnd1">GND</span>
    <span class="pin p-gp4">GPIO 4</span>
    <span class="pin p-gnd2">GND</span>
    <span class="pin p-gp5">GPIO 5</span>
    <span class="pin p-gp2">GPIO 2</span>
    <span class="pin p-gnd3">GND</span>
    <span class="pin p-gp13">GPIO 13</span>
    <span class="pin p-gnd4">GND</span>
    <div class="esp32">ESP32</div>
    <div class="btn btn1">▣</div>
    <span class="btn-lbl bl1">BTN1</span>
    <div class="btn btn2">▣</div>
    <span class="btn-lbl bl2">BTN2</span>
    <div class="res res1"></div>
    <span class="res-lbl rl1">220Ω</span>
    <div class="res res2"></div>
    <span class="res-lbl rl2">220Ω</span>
    <div class="led led1">
      <div class="led-tri" style="border-top: 16px solid #f85149;"></div>
      <div class="led-line-v" style="background:#f85149;"></div>
    </div>
    <span class="led-lbl ll1">LED1</span>
    <div class="led led2">
      <div class="led-tri" style="border-top: 16px solid #3fb950;"></div>
      <div class="led-line-v" style="background:#3fb950;"></div>
    </div>
    <span class="led-lbl ll2">LED2</span>
    <svg class="wires">
      <line x1="130" y1="143" x2="56" y2="143" stroke="#58a6ff" stroke-width="2"/>
      <polyline points="43,156 43,240 180,240 180,225" fill="none" stroke="#8b949e" stroke-width="2"/>
      <line x1="130" y1="183" x2="56" y2="181" stroke="#79c0ff" stroke-width="2"/>
      <polyline points="43,194 43,260 200,260 200,225" fill="none" stroke="#8b949e" stroke-width="1.5" stroke-dasharray="4,2"/>
      <line x1="230" y1="124" x2="286" y2="124" stroke="#f0883e" stroke-width="2"/>
      <line x1="300" y1="124" x2="313" y2="122" stroke="#f0883e" stroke-width="2"/>
      <polyline points="322,138 322,240 180,240" fill="none" stroke="#8b949e" stroke-width="2"/>
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
          codeRef: "// PROGRAMA 07 — Dos botones, dos LEDs independientes\n\nconst int LED1_PIN   = 2;\nconst int LED2_PIN   = 13;\nconst int BOTON1_PIN = 4;\nconst int BOTON2_PIN = 5;\n\nbool led1Estado   = false;\nbool led2Estado   = false;\nbool anteriorBot1 = HIGH;\nbool anteriorBot2 = HIGH;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED1_PIN,   OUTPUT);\n  pinMode(LED2_PIN,   OUTPUT);\n  pinMode(BOTON1_PIN, INPUT_PULLUP);\n  pinMode(BOTON2_PIN, INPUT_PULLUP);\n  Serial.println(\"BOT1 = LED1  |  BOT2 = LED2\");\n}\n\nvoid loop() {\n  bool estadoBot1 = digitalRead(BOTON1_PIN);\n  bool estadoBot2 = digitalRead(BOTON2_PIN);\n\n  if (anteriorBot1 == HIGH && estadoBot1 == LOW) {\n    delay(50);\n    if (digitalRead(BOTON1_PIN) == LOW) {\n      led1Estado = !led1Estado;\n      digitalWrite(LED1_PIN, led1Estado);\n      Serial.print(\"LED1: \"); Serial.println(led1Estado ? \"ON\" : \"OFF\");\n    }\n  }\n\n  if (anteriorBot2 == HIGH && estadoBot2 == LOW) {\n    delay(50);\n    if (digitalRead(BOTON2_PIN) == LOW) {\n      led2Estado = !led2Estado;\n      digitalWrite(LED2_PIN, led2Estado);\n      Serial.print(\"LED2: \"); Serial.println(led2Estado ? \"ON\" : \"OFF\");\n    }\n  }\n\n  anteriorBot1 = estadoBot1;\n  anteriorBot2 = estadoBot2;\n}",
          product: "Proyecto Programa_07_DosBotones: cada botón controla su LED de forma independiente con toggle. Reto: comando 'b' por Serial enciende ambos.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: La pregunta de la libreta #3 (¿qué pasa si compartes una sola variable anteriorEstado?) es excelente para discutir: si ambos botones comparten el mismo anteriorEstado, el segundo botón puede ver un flanco que no le corresponde y activarse incorrectamente. Dejar que lo experimenten si el tiempo lo permite. El reto del Serial 'b' conecta con semanas anteriores — quienes lo logren habrán integrado múltiples semanas de contenido en un solo programa."
        }
      ],
      cierre: "De un botón a dos, el patrón se repite y el código escala naturalmente. Cada componente nuevo es solo una copia del anterior con nombre diferente.",
      frase_docente: "Escalar no es complicar — es repetir lo que ya sabes con más piezas."
    }
  ]
};
