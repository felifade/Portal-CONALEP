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
          title: "🔁 Continuación del bootstrap — terminar drivers, COM y sketch 'vivo'",
          theory: "La Hora 1 muchas veces no alcanza para que TODOS los alumnos terminen el bootstrap del ESP32. Esta hora es para que nadie se quede atrás: terminar de instalar drivers, lograr que el puerto COM aparezca en Windows, y confirmar la comunicación con el sketch 'vivo'.\n\n🎯 OBJETIVO ÚNICO\nQue al final de esta hora TODOS tengan en su Serial Monitor la palabra 'vivo' apareciendo a 115200 baud. Sin excepciones.\n\n📌 TRES BLOQUEOS COMUNES\n1. Cable USB de solo carga → cambiar por uno de datos.\n2. Driver no instalado o mal instalado → reinstalar como administrador y reiniciar.\n3. Botón BOOT no presionado durante 'Connecting...' → presionar y soltar cuando empiece la subida.\n\nSi tu compañero ya terminó, ofrécele ayuda al que sigue trabado — explicar a otro es la mejor forma de afianzar lo que aprendiste.",
          notebook: "Si ya tienes 'vivo' en Serial Monitor:\n1. Anota qué problema (si tuvo alguno) y cómo lo resolviste.\n2. ¿Qué pasos darías la próxima vez que conectes un ESP32 a una PC nueva?\n3. ¿Por qué es importante el sketch 'vivo' antes de cargar programas más complejos?",
          practice: "🆘 RUTA DE DEPURACIÓN (seguir en orden):\n\nPaso A — ¿El ESP32 enciende?\n  • Mira el LED rojo cerca del puerto USB. Si NO enciende:\n    - Cambia el cable USB (probablemente sea de solo carga).\n    - Prueba otro puerto USB de la PC.\n\nPaso B — ¿Aparece en Administrador de Dispositivos?\n  • Win+X → Administrador de Dispositivos → 'Puertos (COM y LPT)'.\n  • Si NO aparece:\n    - Identificar chip (CP2102 o CH340) y reinstalar driver como administrador.\n    - Reiniciar la PC después de instalar.\n    - Volver a conectar.\n\nPaso C — ¿Compila el sketch?\n  • File → New → pegar el sketch 'vivo'.\n  • Tools → Board → ESP32 Dev Module.\n  • Tools → Port → seleccionar el COM identificado.\n  • Click en ✓ (Verify). Si truena:\n    - Revisar que la URL del board manager esté en File → Preferences.\n    - Reinstalar el paquete ESP32 desde Boards Manager.\n\nPaso D — ¿Sube al ESP32?\n  • Click en → (Upload).\n  • Si se queda en 'Connecting....._____':\n    - Mantener presionado el botón BOOT del ESP32.\n    - Soltar cuando empiece la subida real.\n  • Si dice 'Failed to connect':\n    - Cerrar el Serial Monitor (a veces bloquea el puerto).\n    - Volver a intentar.\n\nPaso E — ¿Se ve 'vivo' en Serial Monitor?\n  • Tools → Serial Monitor.\n  • Confirmar 115200 baud abajo a la derecha.\n  • Presionar el botón EN (reset) del ESP32.\n  • Debe aparecer 'vivo'.\n  • Si aparece basura ilegible (Ⱨ䶻⼬): baudrate equivocado — cambiar a 115200.\n\n💡 SI YA TERMINASTE:\n  • Ayuda a un compañero que esté trabado.\n  • Si todo el grupo terminó, sigue al adelanto opcional:\n    - Modificar el sketch 'vivo' para que imprima tu nombre cada 2 segundos en vez de 'vivo' cada vez que se enciende.\n    - Guardar como 'Test_MiNombre'.\n\n📸 EVIDENCIA OBLIGATORIA — captura del Serial Monitor mostrando 'vivo' (o tu nombre) saliendo a 115200 baud. Subir a Classroom.",
          product: "ESP32 reconocido en puerto COM, sketch 'vivo' (o variante con nombre) cargado y mostrando salida en Serial Monitor a 115200 baud. Captura de pantalla subida a Classroom.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta hora es el COLCHÓN para que la clase llegue completa al final del bootstrap. Estrategias: (1) Identificar al inicio 2-3 alumnos que ya terminaron en Hora 1 y volverlos 'asistentes' — pueden destrabar a 1-2 compañeros cada uno mientras tú atiendes los casos más complejos. (2) Si alguien lleva 30 min trabado en el mismo paso, MOVER a otra PC en lugar de seguir depurando — frecuentemente es un problema de la PC, no del alumno. (3) Tener LISTOS en un USB los instaladores CP210x y CH341SER para evitar depender del WiFi escolar. (4) Si todo el grupo termina antes, anunciar el reto opcional ('imprime tu nombre') — esto los acerca al concepto de modificar código existente, no solo cargarlo. (5) AL FINAL de la hora, hacer un mini-cierre verbal: '¿quién no llegó a vivo?' — los que falten quedan en lista para apoyo en horario de tutoría."
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
