export const W09 = {
  materia: "mths",
  weekId: "W09",
  days: [
    {
      id: "tue",
      label: "Martes — Conclusión App Inventor + Hola ESP32 (H1-H2)",
      purpose: "Cerrar el proyecto de App Inventor mostrando el funcionamiento al docente, y dar el primer paso con ESP32 simulando en Wokwi.",
      hours: [
        {
          time: "Hora 1",
          title: "Conclusión de la app móvil: demostración al docente",
          theory: "La semana pasada programamos la navegación completa, los mensajes Notifier, la pantalla de Evaluación y el botón de regreso. Hoy cerramos el ciclo: cada alumno demuestra al docente que su app funciona de extremo a extremo navegando todas las pantallas en el emulador o teléfono con MIT AI2 Companion.",
          notebook: "Título: Cierre de mi app de seguridad digital.\n1. Dibuja el mapa de navegación completo: Portada → Menu → las 4 pantallas → regreso.\n2. ¿Qué pantalla fue la más difícil de programar?\n3. ¿Qué mejorarías si tuvieras más tiempo?\n4. ¿Qué componente de App Inventor crees que podrías usar para mandar datos a una placa electrónica? (Pista: BluetoothClient)",
          practice: "1. Abrir el proyecto en App Inventor y conectar con MIT AI2 Companion o emulador.\n2. Navegar todas las rutas frente al docente:\n   - Portada → Menu → Contraseñas → consejo → Regresar\n   - Portada → Menu → WiFi → recomendación → Regresar\n   - Portada → Menu → Riesgos → aviso → Regresar\n   - Portada → Menu → Evaluación → respuesta Sí → respuesta No → Regresar\n3. Corregir cualquier error antes de la demostración.\n4. Quien termine antes: apoyar a un compañero que aún no tenga su app lista.",
          product: "App de seguridad digital demostrada y aprobada por el docente.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Revisión rápida uno por uno — el criterio es que las pantallas naveguen correctamente y los Notifier muestren texto. No es necesario que sea perfecto en diseño. Quien no terminó la semana pasada tiene esta hora para completar lo mínimo. Mantener el ritmo para arrancar Wokwi en H2."
        },
        {
          time: "Hora 2",
          title: "ESP32 en Wokwi: primer proyecto",
          theory: "El ESP32 es un microcontrolador moderno con WiFi y Bluetooth integrados en el mismo chip. A diferencia del Arduino Uno que necesita un módulo HC-05 externo para Bluetooth, el ESP32 ya lo trae — esto significa menos cableado, menos componentes y menos puntos de falla. Wokwi es un simulador web que permite programar y probar circuitos con ESP32 sin necesitar la placa física, ideal para aprender la lógica antes de trabajar con hardware real.",
          notebook: "Título: ESP32 vs Arduino Uno.\n1. Escribe 3 diferencias entre el ESP32 y el Arduino Uno.\n2. ¿Qué ventaja tiene el ESP32 para proyectos Bluetooth?\n3. ¿Qué es Wokwi y para qué lo usaremos?\n4. Dibuja la placa ESP32 e identifica: pines GPIO, GND, 3.3V y el puerto USB.",
          practice: "1. Abrir wokwi.com en el navegador.\n2. Iniciar sesión con Google.\n3. Clic en New Project → seleccionar ESP32.\n4. En el panel de simulación, clic en '+' y agregar un LED y una resistencia de 220Ω.\n5. Conectar: GPIO 2 → resistencia → LED(+) → GND.\n6. En el editor escribir el sketch Blink para el pin 2.\n7. Presionar ▶ y verificar que el LED parpadea.\n8. Cambiar el valor de delay() y observar el efecto.",
          code: "// Práctica 1 — Control de LED por comandos\n// Versión Serial (simula el Bluetooth para aprender en Wokwi)\n\nconst int LED_PIN = 2;  // GPIO donde está conectado el LED\n\nvoid setup() {\n  Serial.begin(115200);           // Inicia comunicación serial a 115200 baudios\n  pinMode(LED_PIN, OUTPUT);       // Configura el pin como salida\n  digitalWrite(LED_PIN, LOW);     // El LED empieza apagado\n\n  Serial.println(\"=================================\");\n  Serial.println(\"  Control de LED - Práctica 1\");\n  Serial.println(\"=================================\");\n  Serial.println(\"Envía '1' para encender el LED\");\n  Serial.println(\"Envía '0' para apagar el LED\");\n  Serial.println(\"Envía 'p' para parpadear 3 veces\");\n  Serial.println(\"---------------------------------\");\n}\n\nvoid loop() {\n  // Si hay un dato esperando en el buffer serial, lo leemos\n  if (Serial.available()) {\n    char comando = Serial.read();\n\n    if (comando == '1') {\n      digitalWrite(LED_PIN, HIGH);\n      Serial.println(\"✓ LED encendido\");\n    } \n    else if (comando == '0') {\n      digitalWrite(LED_PIN, LOW);\n      Serial.println(\"✓ LED apagado\");\n    }\n    else if (comando == 'p') {\n      Serial.println(\"✓ Parpadeando...\");\n      for (int i = 0; i < 3; i++) {\n        digitalWrite(LED_PIN, HIGH);\n        delay(300);\n        digitalWrite(LED_PIN, LOW);\n        delay(300);\n      }\n      Serial.println(\"  ...listo\");\n    }\n    // Ignoramos saltos de línea y espacios en blanco\n    else if (comando != '\\n' && comando != '\\r' && comando != ' ') {\n      Serial.print(\"✗ Comando desconocido: '\");\n      Serial.print(comando);\n      Serial.println(\"'\");\n    }\n  }\n}",
          product: "Proyecto creado en Wokwi con LED parpadeando en ESP32. Primera interacción con la plataforma de simulación.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: El error más común es no conectar el GND del LED al GND de la placa. Si el LED no enciende, pedir que sigan el cable desde el pin 2 hasta el LED y de ahí hasta GND. Dejar que lo descubran solos antes de intervenir."
        }
      ],
      cierre: "Cerraste tu primera app móvil y encendiste tu primer LED en ESP32. Esta semana la tecnología cambió de pantalla a circuito.",
      frase_docente: "Construir algo que funciona es la mejor forma de aprender."
    },
    {
      id: "wed",
      label: "Miércoles — Semáforo ESP32 (H3)",
      purpose: "Escalar el proyecto Wokwi a un semáforo de 3 LEDs controlado por comandos desde el Serial Monitor, aprendiendo la lógica de estado que más adelante usará el Bluetooth.",
      hours: [
        {
          time: "Hora 1",
          title: "Semáforo con 3 LEDs controlado por Serial Monitor",
          theory: "Un semáforo solo puede mostrar un estado a la vez — rojo, amarillo o verde. En código esto se traduce en: apagar todos los LEDs y encender solo el que corresponde al comando recibido. El Serial Monitor actúa hoy como el teléfono: envía un carácter y el ESP32 reacciona. Para controlar 3 LEDs independientes necesitamos 3 pines GPIO diferentes y una función apagar_todos() que garantice que solo un LED esté activo en cada momento.",
          notebook: "Título: Semáforo con ESP32.\n1. Dibuja el circuito: ESP32 con 3 LEDs (rojo pin 25, amarillo pin 26, verde pin 27).\n2. ¿Por qué hay que apagar todos los LEDs antes de encender el que corresponde?\n3. ¿Qué pasa si no apagas los otros antes de encender el nuevo?\n4. Escribe la tabla de comandos: R → LED rojo, Y → LED amarillo, G → LED verde.\n5. ¿Qué reemplazaría al Serial Monitor cuando tengamos el ESP32 físico?",
          practice: "1. Abrir el proyecto Wokwi del lunes.\n2. Agregar 2 LEDs más (amarillo y verde) con sus resistencias 220Ω.\n3. Conectar: LED rojo → pin 25, LED amarillo → pin 26, LED verde → pin 27.\n4. Reemplazar el código Blink con el sketch del semáforo.\n5. Presionar ▶ y abrir el Serial Monitor.\n6. Probar cada comando:\n   - Escribir 'R' → solo LED rojo enciende.\n   - Escribir 'Y' → solo LED amarillo enciende.\n   - Escribir 'G' → solo LED verde enciende.\n7. Verificar que al cambiar de color el anterior se apaga.\n8. Guardar el proyecto como 'Semaforo_Serial_v1'.",
          code: "const int LED_ROJO     = 25;\nconst int LED_AMARILLO = 26;\nconst int LED_VERDE    = 27;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_ROJO,     );\n  pinMode(LED_AMARILLO, );\n  pinMode(LED_VERDE,    );\n  Serial.println(\"R=Rojo  Y=Amarillo  G=Verde\");\n}\n\nvoid apagar_todos() {\n  digitalWrite(LED_ROJO,     LOW);\n  digitalWrite(LED_AMARILLO, LOW);\n  digitalWrite(LED_VERDE,    LOW);\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    char cmd = Serial.read();\n    apagar_todos();\n\n    if      (cmd == '') digitalWrite(LED_ROJO,     HIGH);\n    else if (cmd == '') digitalWrite(LED_AMARILLO, HIGH);\n    else if (cmd == '') digitalWrite(LED_VERDE,    HIGH);\n\n    Serial.print(\"Comando: \");\n    Serial.println(cmd);\n  }\n}",
          codeRef: "const int LED_ROJO     = 25;\nconst int LED_AMARILLO = 26;\nconst int LED_VERDE    = 27;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_ROJO,     OUTPUT);\n  pinMode(LED_AMARILLO, OUTPUT);\n  pinMode(LED_VERDE,    OUTPUT);\n  Serial.println(\"R=Rojo  Y=Amarillo  G=Verde\");\n}\n\nvoid apagar_todos() {\n  digitalWrite(LED_ROJO,     LOW);\n  digitalWrite(LED_AMARILLO, LOW);\n  digitalWrite(LED_VERDE,    LOW);\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    char cmd = Serial.read();\n    apagar_todos();\n\n    if      (cmd == 'R') digitalWrite(LED_ROJO,     HIGH);\n    else if (cmd == 'Y') digitalWrite(LED_AMARILLO, HIGH);\n    else if (cmd == 'G') digitalWrite(LED_VERDE,    HIGH);\n\n    Serial.print(\"Comando: \");\n    Serial.println(cmd);\n  }\n}",
          product: "Semáforo de 3 LEDs funcional en Wokwi respondiendo a comandos R, Y, G desde el Serial Monitor. Proyecto guardado.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: La función apagar_todos() es el concepto clave — enseña a resetear el estado antes de aplicar el nuevo. Si alguien pregunta por qué no solo encender el nuevo sin apagar, demostrar en vivo qué pasa: los LEDs quedan encendidos simultáneamente. Quien termine antes: agregar un comando 'A' que haga el ciclo automático rojo→amarillo→verde con delay(1000) dentro de un else."
        }
      ],
      cierre: "Tres LEDs, tres comandos, una función que lo mantiene limpio. Esa es la lógica que el Bluetooth usará.",
      frase_docente: "Resetear antes de actuar — en código y en la vida."
    },
    {
      id: "thu",
      label: "Jueves — Pendiente según avance",
      purpose: "Sesión flexible — se definirá según el avance del grupo en la semana.",
      hours: []
    }
  ]
};
