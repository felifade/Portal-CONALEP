export const W08 = {
  materia: "mths",
  weekId: "W08",
  days: [
    {
      id: "tue",
      label: "Martes — Desarrollo de pantallas WiFi y Riesgos",
      purpose: "Finalizar el desarrollo de las pantallas de seguridad digital en App Inventor (Contraseñas, WiFi y Riesgos) e integrar contenido e interacción básica.",
      hours: [
        {
          time: "Hora 1",
          title: "Pantallas: Contraseñas y WiFi Seguro",
          theory: "Una aplicación de seguridad efectiva debe cubrir múltiples vectores de ataque. En esta sesión consolidaremos el diseño de las pantallas de Contraseñas y WiFi, asegurando que ambas tengan navegación bidireccional y alertas mediante Notifier.",
          notebook: "Dibuja el esquema de navegación entre Menu -> Contraseñas y Menu -> WiFi. Anota los mensajes que mostrará el Notifier en cada pantalla.",
          practice: "1. Terminar desarrollo de pantalla 'Contraseñas'. 2. Iniciar y completar pantalla 'WiFi'. 3. En ambas: agregar labels, imágenes y componente Notifier. 4. Programar los bloques para mostrar consejos de seguridad. 5. Verificar navegación desde el Menú principal. 6. Capturar ambas pantallas.",
          product: "Pantallas de Contraseñas y WiFi funcionales con diseño validado.",
          images: ["contra.png", "wifi.png"],
          teacherNotes: "Asegura que los alumnos no olviden el botón de 'Inicio' en cada nueva pantalla para no quedar atrapados en la navegación."
        },
        {
          time: "Hora 2",
          title: "Pantalla: Riesgos Digitales y Documentación",
          theory: "La identificación de riesgos es el paso final de nuestra interfaz de seguridad. Tras completar esta pantalla, el alumno debe ser capaz de documentar su proceso técnico de manera organizada en la nube.",
          notebook: "¿Crees que tu aplicación es fácil de usar? Justifica tu respuesta. Anota los 3 riesgos que incluiste en la última pantalla.",
          practice: "1. Crear pantalla 'Riesgos'. 2. Agregar contenido informativo sobre 3 amenazas digitales. 3. Configurar Notifier y Botón de interacción. 4. Validar navegación total del sitio. 5. Crear documento 'Semana 08' en Google Docs con tabla de 3 columnas (Nombre, Captura, Descripción) e insertar las evidencias de las 3 pantallas y el Menú.",
          product: "Aplicación con 3 pantallas de seguridad y reporte de evidencia profesional.",
          image: "riesgos.png",
          teacherNotes: "Verifica la calidad de las descripciones en la tabla de Google Docs; deben explicar qué hace cada componente."
        }
      ],
      cierre: "Hoy lograste consolidar la interfaz de tu aplicación y documentar tu avance profesionalmente.",
      frase_docente: "La documentación es tan importante como el código; permite que otros entiendan tu visión."
    },
    {
      id: "wed",
      label: "Miércoles — Evaluación Interactiva",
      purpose: "Agregar una funcionalidad interactiva dentro de la aplicación móvil mediante la creación de un mini cuestionario en App Inventor.",
      hours: [
        {
          time: "Hora 1",
          title: "Pantalla: Evaluación (Mini cuestionario)",
          theory: "La interactividad permite que el usuario reciba retroalimentación en tiempo real. Un mini cuestionario es una excelente forma de validar si el usuario ha comprendido las recomendaciones de seguridad presentadas previamente en la aplicación.",
          notebook: "Copia la lógica de los bloques para el botón 'Sí' (Incorrecto) y 'No' (Correcto). Explica por qué es importante dar retroalimentación inmediata.",
          practice: "1. Crear pantalla 'Evaluación'. 2. Agregar Label con la pregunta de seguridad. 3. Insertar botones de respuesta ('Sí' y 'No'). 4. Agregar componente Notifier. 5. Programar respuestas: Botón 'Sí' -> Mensaje de riesgo; Botón 'No' -> Mensaje de buena práctica. 6. Conectar navegación desde la pantalla Menú y probar funcionalidad. 7. Capturar evidencia de las respuestas correcta e incorrecta.",
          product: "Pantalla interactiva de evaluación funcional y documentada.",
          image: "eva1.png",
          teacherNotes: "Observa que los alumnos configuren correctamente los títulos y mensajes del Notifier para que la experiencia de usuario sea profesional."
        }
      ],
      cierre: "Hoy completaste el ciclo de desarrollo de tu app agregando interactividad lógica.",
      frase_docente: "Un sistema que responde al usuario es un sistema que realmente comunica."
    },
    {
      id: "thu",
      label: "Jueves — Programación de la app en App Inventor",
      purpose: "Programar la navegación, los botones de interacción, la pantalla de evaluación y el botón de regreso al menú para tener una aplicación móvil completamente funcional.",
      hours: [
        {
          time: "Hora 1",
          title: "Navegación y botones de interacción",
          theory: "La programación en App Inventor se hace con bloques visuales. Cada botón tiene un evento 'when Button.Click do' que ejecuta una acción. Para navegar entre pantallas se usa 'open another screen' y para mostrar mensajes se usa 'call Notifier.ShowAlert'.",
          notebook: "Anota los nombres exactos de cada pantalla en tu proyecto: Portada, Menu, Contraseñas, WiFi, Riesgos, Evaluación. Escribe qué mensaje mostrará el Notifier en cada pantalla de contenido.",
          practice: "BOTÓN ENTRAR (Portada):\n1. Ir a la pantalla Portada en el Diseñador.\n2. Cambiar a la pestaña Bloques.\n3. Buscar el bloque 'when BtnEntrar.Click do'.\n4. Dentro, agregar el bloque 'open another screen' y escribir: Menu.\n\nBOTONES DEL MENÚ:\n5. Ir a la pantalla Menu en el Diseñador.\n6. Cambiar a la pestaña Bloques.\n7. Para cada botón del menú, agregar un bloque 'when BtnX.Click do' con 'open another screen':\n   - BtnContraseñas → screenName: Contraseñas\n   - BtnWiFi → screenName: WiFi\n   - BtnRiesgos → screenName: Riesgos\n   - BtnEvaluación → screenName: Evaluación\n\nBOTONES DE INTERACCIÓN (uno en cada pantalla):\n8. Pantalla Contraseñas → bloque 'when BtnConsejo.Click do' → 'call Notifier.ShowAlert' → message: 'Usa contraseñas diferentes para cada cuenta'\n9. Pantalla WiFi → bloque 'when BtnRecomendacion.Click do' → 'call Notifier.ShowAlert' → message: 'No ingreses contraseñas en redes públicas'\n10. Pantalla Riesgos → bloque 'when BtnRiesgo.Click do' → 'call Notifier.ShowAlert' → message: 'Evita descargar archivos de sitios desconocidos'",
          product: "Navegación completa entre las 6 pantallas y mensajes de Notifier funcionando en Contraseñas, WiFi y Riesgos.",
          teacherNotes: "Verifica que los alumnos escriban los nombres de pantalla exactamente igual que en el Diseñador (mayúsculas incluidas). Un error tipográfico impide la navegación. Recuérda que 'open another screen' requiere el nombre exacto de la pantalla."
        },
        {
          time: "Hora 2",
          title: "Evaluación, botón de regreso y prueba final",
          theory: "Una aplicación bien diseñada siempre permite al usuario regresar. El botón de regreso evita que el usuario quede atrapado en una pantalla. Al terminar la programación, siempre hay que hacer una prueba completa del flujo de la aplicación.",
          notebook: "Dibuja el flujo completo de tu aplicación: Portada → Menu → cada pantalla → regreso al Menu. Anota qué hace cada botón que programaste hoy.",
          practice: "PANTALLA DE EVALUACIÓN:\n1. Ir a la pantalla Evaluación en Bloques.\n2. Botón 'Sí': agregar 'when BtnSi.Click do' → 'call Notifier.ShowAlert' → message: 'Incorrecto. Es un riesgo de seguridad.'\n3. Botón 'No': agregar 'when BtnNo.Click do' → 'call Notifier.ShowAlert' → message: 'Correcto. Es una buena práctica.'\n\nBOTÓN REGRESAR AL MENÚ (repetir en Contraseñas, WiFi, Riesgos y Evaluación):\n4. En cada pantalla secundaria, agregar un botón 'Regresar' si aún no existe.\n5. En Bloques: 'when BtnRegresar.Click do' → 'open another screen' → screenName: Menu\n\nPRUEBA GENERAL:\n6. Conectar el teléfono o usar el emulador (MIT AI2 Companion).\n7. Verificar cada ruta:\n   - Portada → Menu (botón Entrar)\n   - Menu → Contraseñas → mensaje → Regresar al Menu\n   - Menu → WiFi → mensaje → Regresar al Menu\n   - Menu → Riesgos → mensaje → Regresar al Menu\n   - Menu → Evaluación → respuesta Sí → respuesta No → Regresar al Menu\n8. Corregir cualquier error antes de tomar capturas.\n\nEVIDENCIA EN GOOGLE DOCS:\n9. Abrir el documento 'Semana 08' en Google Docs.\n10. Insertar una tabla con 3 columnas: Pantalla | Captura | Descripción.\n11. Agregar una fila por cada pantalla con: nombre de la pantalla, captura de pantalla y una descripción breve de lo que hace.",
          product: "Aplicación móvil completamente funcional con navegación, mensajes interactivos, evaluación y botón de regreso. Evidencia documentada en Google Docs.",
          teacherNotes: "Durante la prueba final, pide a los alumnos que intercambien teléfonos para probar la app de un compañero. Esto detecta errores que el propio autor no nota. Verifica que la tabla en Google Docs tenga descripción real, no solo 'botón' o 'pantalla'."
        }
      ],
      cierre: "Hoy terminaste de programar tu aplicación móvil. Ya tienes navegación, interacción y evaluación funcionando. ¡Felicidades!",
      frase_docente: "Programar es resolver problemas paso a paso; hoy lo demostraste pantalla a pantalla."
    }
  ]
};
