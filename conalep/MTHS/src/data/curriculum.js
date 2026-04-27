export const curriculumData = {
  subject: "Manejo de Tecnologías de Hardware y Software (MTHS)",
  group: "401",
  cortes: [
    { id: 1, label: "1er Corte", peso: "30%" },
    { id: 2, label: "2do Corte", peso: "35%" },
    { id: 3, label: "3er Corte", peso: "35%" },
  ],
  ras: [
    {
      id: "RA1.1",
      title: "1.1 RA (15%)",
      corte: 1,
      weeks: [
        { id: "W00", label: "Semana 00 (09-13 Feb)" },
        { id: "W01", label: "Semana 01 (16-20 Feb)" },
        { id: "W02", label: "Semana 02 (23-27 Feb)" }
      ]
    },
    {
      id: "RA1.2",
      title: "1.2 RA (15%)",
      corte: 1,
      weeks: [
        { id: "W03", label: "Semana 03 (02-06 Mar)" },
        { id: "W04", label: "Semana 04 (09-13 Mar)" },
        { id: "W05", label: "Semana 05 (16-20 Mar)" }
      ]
    },
    {
      id: "RA2",
      title: "2.1 · 2.2 RA (35%)",
      corte: 2,
      weeks: [
        { id: "W06", label: "Semana 06 (23-27 Mar)" },
        { id: "W07", label: "Semana 07 (13-17 Abr)" },
        { id: "W08", label: "Semana 08 (20-24 Abr)" }
      ]
    },
    {
      id: "RA3.1",
      title: "3.1 RA (20%)",
      corte: 3,
      weeks: [
        { id: "W09", label: "Semana 09 (27 Abr-01 May)" },
        { id: "W10", label: "Semana 10 (04-08 May)" },
        { id: "W11", label: "Semana 11 (11-15 May)" }
      ]
    },
    {
      id: "RA3.2",
      title: "3.2 RA (15%)",
      corte: 3,
      weeks: [
        { id: "W12", label: "Semana 12 (18-22 May)" },
        { id: "W13", label: "Semana 13 (25-29 May)" },
        { id: "W14", label: "Semana 14 (01-05 Jun)" }
      ]
    }
  ],
  schedules: {
    "W00": { days: [] },
    "W01": { days: [] },
    "W02": { days: [] },
    "W03": { days: [] },
    "W04": { days: [] },
    "W05": { days: [] },
    "W06": {
      days: [
        {
          id: "tue",
          label: "Martes — Análisis Digital (H1-H2)",
          purpose: "Analizar los impactos sociales y éticos de la tecnología a través de medios audiovisuales.",
          hours: [
            {
              time: "Hora 1",
              title: "Capítulo de Black Mirror",
              theory: "La tecnología no es neutra; su implementación afecta las relaciones sociales, el estatus y la percepción de la realidad. Analizaremos un episodio que explora un sistema de puntuación social y sus consecuencias en la libertad individual.",
              notebook: "Actividad 01: Responder preguntas de reflexión sobre el episodio en tu libreta.",
              practice: "Visionado del capítulo y toma de notas sobre los elementos tecnológicos presentados.",
              product: "Cuestionario resuelto.",
              teacherNotes: "Fomenta la discusión sobre si algo similar existe hoy en día (redes sociales)."
            }
          ]
        },
        {
          id: "wed",
          label: "Miércoles — Metodología Cornell (H3)",
          purpose: "Sintetizar información técnica utilizando métodos profesionales de toma de notas.",
          hours: [
            {
              time: "Hora 1",
              title: "Resumen Método Cornell",
              theory: "El método Cornell es un sistema de toma de notas que ayuda a organizar ideas, identificar conceptos clave y facilitar el repaso. Se divide en tres secciones: Notas, Palabras Clave y Resumen.",
              notebook: "Elaborar el resumen de la sesión utilizando el formato Cornell.",
              practice: "Crear un documento de Google y aplicar el formato Cornell para resumir el tema de la sesión.",
              product: "Documento de Google con el resumen Cornell.",
              teacherNotes: "Revisa que el resumen final sea conciso y capture la esencia del tema."
            }
          ]
        },
        {
          id: "thu",
          label: "Jueves — Ética y Diseño (H4-H5)",
          purpose: "Debatir sobre justicia tecnológica y proponer soluciones digitales éticas.",
          hours: [
            {
              time: "Hora 1",
              title: "Debate: Justicia y Tecnología",
              theory: "¿Quién controla a quién? El debate ético en tecnología busca entender si los algoritmos y sistemas digitales actuales promueven la equidad o profundizan las brechas sociales.",
              notebook: "Responder:\n1. ¿El sistema del episodio es justo o injusto?\n2. ¿Quién tiene el control real: las personas o la tecnología?\n3. ¿Qué pasaría si ese sistema se implementa en México?",
              practice: "Debate grupal sobre las respuestas y el impacto cultural.",
              product: "Reflexión escrita en libreta.",
              teacherNotes: "Guía el debate hacia el concepto de 'Sesgo Algorítmico'."
            },
            {
              time: "Hora 2",
              title: "Laboratorio: Sistema Digital Ideal",
              theory: "Como tecnólogos, tenemos la responsabilidad de diseñar sistemas que eviten el abuso. El diseño centrado en el ser humano busca que la tecnología sirva a la sociedad y no al revés.",
              notebook: "Propuesta de diseño: 1. App/Sistema social, 2. Funcionamiento, 3. Reglas, 4. Prevención de abusos.",
              practice: "Diseñar un boceto o esquema del sistema digital ideal propuesto.",
              product: "Propuesta de sistema digital ideal.",
              teacherNotes: "Anima a los alumnos a ser creativos pero realistas en sus propuestas."
            }
          ],
          cierre: "La Semana 06 nos ha servido para reflexionar sobre nuestra responsabilidad como futuros creadores de tecnología.",
          frase_docente: "La tecnología debe ser una herramienta para la libertad, no una cadena para la sociedad."
        }
      ]
    },
    "W07": {
      days: [
        {
          id: "tue",
          label: "Martes — Apps y Diseño (H1-H2)",
          purpose: "Comprender el impacto de las aplicaciones móviles e iniciar el diseño de una herramienta de seguridad digital.",
          hours: [
            {
              time: "Hora 1",
              title: "Transformación Digital",
              theory: "Las aplicaciones móviles han transformado nuestra forma de interactuar con el mundo. Lo que antes requería una computadora física o un trámite presencial, hoy se resuelve con un toque en la pantalla.\n\nPara crear una aplicación, primero debemos entender que una app es una solución a un problema. Hoy comenzaremos a usar MIT App Inventor, una herramienta profesional que utiliza bloques de lógica.",
              notebook: "Identifica 3 apps que uses diario. Describe qué problema resuelven y qué pasaría si dejaran de existir mañana.",
              practice: "1. Ingresa a App Inventor con tu cuenta.\n2. Crea un proyecto: 'Seguridad_Digital_401'.\n3. Explora la Paleta y Componentes.",
              product: "Proyecto base en App Inventor.",
              teacherNotes: "Verifica que todos puedan loguearse con su cuenta de Google."
            },
            {
              time: "Hora 2",
              title: "Diseño de Portada Institucional",
              theory: "Una aplicación institucional debe reflejar profesionalismo e identidad. Al diseñar la portada (Splash Screen), es vital usar los colores oficiales (Verde y Blanco) y los logotipos de la institución. Esto genera confianza en el usuario y le asegura que está entrando a un entorno oficial de consulta técnica.\n\nEn esta etapa, la claridad es lo más importante. No debemos saturar la pantalla; cada elemento debe tener un propósito claro: identificar la escuela, el estudiante, la materia y el profesor enlace.",
              notebook: "Haz una lista de los 6 elementos que incluirás en tu portada en orden: 1. Escuela, 2. Tu nombre, 3. Grupo, 4. Materia, 5. Profesor, 6. Logo. Anota qué tamaño de letra usarás para que los títulos se vean más grandes que los datos personales.",
              practice: "1. En Screen1, agrega una 'Disposición Vertical' y alinea todo al centro.\n2. Agrega una Etiqueta con el nombre de la escuela: 'CONALEP PACHUCA II'.\n3. Agrega una Etiqueta para tu nombre: '[Escribe aquí tu nombre completo]'.\n4. Agrega una Etiqueta con tu grupo: 'Grupo 401'.\n5. Agrega una Etiqueta con la materia: 'MTHS'.\n6. Agrega una Etiqueta con el nombre del profesor: 'Dr. Felipe López Salazar'.\n7. Arrastra una Imagen y selecciona el logotipo oficial del plantel.\n8. Configura el Botón con el texto: 'ACCEDER AL ÁREA TÉCNICA'.",
              product: "Portada institucional completa y jerarquizada en App Inventor.",
              teacherNotes: "Verifica que el nombre del alumno esté en negritas para resaltarlo y que el logo no sea demasiado grande para evitar el scroll."
            }
          ]
        },
        {
          id: "wed",
          label: "Miércoles — Desarrollo de aplicación móvil – Creación de menú (H3)",
          purpose: "Desarrollar la pantalla principal de navegación (Menú) y programar la lógica de acceso desde la portada.",
          hours: [
            {
              time: "Hora 1",
              title: "Creación del Menú Principal",
              theory: "En esta sesión se continuó con el desarrollo de la aplicación móvil utilizando App Inventor. Los alumnos crearon una segunda pantalla llamada Menu, la cual funciona como el menú principal de la aplicación. En esta pantalla agregaron un título y botones de navegación con diferentes opciones relacionadas con el contenido de la app. También programaron el botón Entrar desde la pantalla de portada para permitir la navegación hacia el menú.",
              notebook: "Escribe la lista de las 3 opciones de seguridad que incluirás en tu menú y qué bloque de App Inventor usarás para cambiar de pantalla.",
              practice: "Práctica II: Crear una nueva pantalla (Menú)\n\n1. Crear una pantalla llamada Menu.\n2. Agregar un título con el texto 'Menú principal'.\n3. Agregar al menos tres botones: Contraseñas seguras, WiFi seguro y Riesgos digitales.\n4. Programar el botón 'Entrar' (en la Screen1) para navegar a la pantalla Menu.\n5. Probar el funcionamiento de la aplicación.",
              product: "Pantalla de menú funcional con botones y navegación programada.",
              teacherNotes: "Verifica que el nombre de la pantalla en el bloque de código coincida exactamente con el nombre dado a la ventana (Case Sensitive)."
            }
          ]
        },
        {
          id: "thu",
          label: "Jueves — Desarrollo de pantallas y lógica (H4-H5)",
          purpose: "Desarrollar pantallas funcionales integrando contenido multimedia e interacción mediante componentes del sistema.",
          hours: [
            {
              time: "Hora 1",
              title: "Desarrollo de pantalla: Contraseñas",
              theory: "Una aplicación de seguridad digital debe ser informativa. En esta sesión aprenderemos a crear pantallas específicas para cada tema, integrando elementos visuales (imágenes y etiquetas) con elementos de interacción social (notificaciones) para guiar al usuario.",
              notebook: "Anota las 3 recomendaciones de seguridad para contraseñas que incluirás en tu app. Escribe la lógica del bloque Notifier que usarás.",
              practice: "1. Crear pantalla 'Contraseñas'.\n2. Agregar etiquetas para título y contenido con 3 recomendaciones.\n3. Insertar una imagen relacionada (candado/usuario).\n4. Agregar un Botón ('Ver consejo') y el componente Notifier.\n5. Programar: Al hacer clic en el botón, mostrar mensaje: 'Usa contraseñas diferentes para cada cuenta'.\n6. Conectar navegación desde la pantalla Menu.",
              product: "Pantalla de contraseñas funcional y accesible.",
              teacherNotes: "Verifica que el componente Notifier se use correctamente para mensajes de tipo alerta o diálogo."
            },
            {
              time: "Hora 2",
              title: "Desarrollo de pantalla: WiFi seguro",
              theory: "El uso de redes públicas es uno de los mayores riesgos digitales. Aprenderemos a duplicar la lógica de diseño para crear una segunda pantalla dedicada al WiFi, reforzando la navegación bidireccional entre el menú principal y las secciones de contenido.",
              notebook: "¿Cuáles son los peligros de ingresar datos sensibles en una red WiFi pública? Lista 3 consejos rápidos.",
              practice: "1. Crear pantalla 'WiFi'.\n2. Agregar título, 3 recomendaciones en etiquetas e imagen descriptiva.\n3. Insertar Botón ('Ver recomendación') y componente Notifier.\n4. Programar: Al hacer clic, mostrar: 'No ingreses contraseñas en redes públicas'.\n5. Conectar navegación bidireccional con la pantalla Menu.\n6. Realizar pruebas finales de navegación y mensajes.",
              product: "Pantalla de WiFi seguro integrada y probada.",
              teacherNotes: "Observa la jerarquía visual de los elementos para asegurar que el contenido sea legible."
            }
          ],
          cierre: "Hoy logramos expandir nuestra app con pantallas de contenido real e interacción con el usuario.",
          frase_docente: "La interactividad es lo que convierte una página estática en una verdadera herramienta digital."
        }
      ]
    },
    "W08": {
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
    },
    "W09": {
      days: [
        {
          id: "mon",
          label: "Lunes — Conclusión App Inventor + Hola ESP32 (H1-H2)",
          purpose: "Cerrar definitivamente el proyecto de App Inventor con prueba final y evidencia, y dar el primer paso con ESP32 simulando en Wokwi.",
          hours: [
            {
              time: "Hora 1",
              title: "Conclusión de la app móvil: prueba final y APK",
              theory: "La semana pasada programamos la navegación completa, los mensajes Notifier, la pantalla de Evaluación y el botón de regreso. Hoy cerramos el ciclo: verificamos que todo funciona de extremo a extremo, generamos el APK para instalar la app en el teléfono y entregamos la evidencia en Google Docs. Una app terminada y documentada es el primer producto profesional que construiste.",
              notebook: "Título: Cierre de mi app de seguridad digital.\n1. Dibuja el mapa de navegación completo: Portada → Menu → las 4 pantallas → regreso.\n2. ¿Qué pantalla fue la más difícil de programar?\n3. ¿Qué mejorarías si tuvieras más tiempo?\n4. ¿Qué componente de App Inventor crees que podrías usar para mandar datos a una placa electrónica? (Pista: BluetoothClient)",
              practice: "PRUEBA FINAL:\n1. Abrir el proyecto en App Inventor y conectar con MIT AI2 Companion o emulador.\n2. Navegar todas las rutas:\n   - Portada → Menu → Contraseñas → consejo → Regresar\n   - Portada → Menu → WiFi → recomendación → Regresar\n   - Portada → Menu → Riesgos → aviso → Regresar\n   - Portada → Menu → Evaluación → respuesta Sí → respuesta No → Regresar\n3. Corregir cualquier error de navegación o texto.\n\nGENERAR APK:\n4. En App Inventor: Generar → App (archivo .apk).\n5. Instalar la app en el teléfono escaneando el código QR.\n6. Probar la app instalada (no solo el Companion).\n\nEVIDENCIA FINAL:\n7. Abrir Google Docs 'Semana 08'.\n8. Verificar que la tabla tiene una fila por cada pantalla con: nombre, captura y descripción.\n9. Agregar al final una reflexión de 3 líneas sobre lo que aprendiste.",
              product: "App instalada en el teléfono (APK). Google Docs con tabla completa de 5 pantallas + reflexión. Proyecto aprobado por el docente.",
              teacherNotes: "👨‍🏫 NOTA DOCENTE: La generación del APK puede tardar 1-2 minutos. Mientras esperan, pedir que redacten la reflexión. Quien no tenga alguna pantalla completa: priorizarla antes de generar el APK. El objetivo es que todos salgan de esta hora con algo instalable en el teléfono — aunque sea básico."
            },
            {
              time: "Hora 2",
              title: "ESP32 en Wokwi: primer proyecto",
              theory: "El ESP32 es un microcontrolador moderno con WiFi y Bluetooth integrados en el mismo chip. A diferencia del Arduino Uno que necesita un módulo HC-05 externo para Bluetooth, el ESP32 ya lo trae — esto significa menos cableado, menos componentes y menos puntos de falla. Wokwi es un simulador web que permite programar y probar circuitos con ESP32 sin necesitar la placa física, ideal para aprender la lógica antes de trabajar con hardware real.",
              notebook: "Título: ESP32 vs Arduino Uno.\n1. Escribe 3 diferencias entre el ESP32 y el Arduino Uno.\n2. ¿Qué ventaja tiene el ESP32 para proyectos Bluetooth?\n3. ¿Qué es Wokwi y para qué lo usaremos?\n4. Dibuja la placa ESP32 e identifica: pines GPIO, GND, 3.3V y el puerto USB.",
              practice: "1. Abrir wokwi.com en el navegador.\n2. Iniciar sesión con Google.\n3. Clic en New Project → seleccionar ESP32.\n4. En el panel de simulación, clic en '+' y agregar un LED y una resistencia de 220Ω.\n5. Conectar: GPIO 2 → resistencia → LED(+) → GND.\n6. En el editor escribir el sketch Blink para el pin 2.\n7. Presionar ▶ y verificar que el LED parpadea.\n8. Cambiar el valor de delay() y observar el efecto.",
              code: "// Completa los valores faltantes\n\nconst int LED_PIN = 2;\n\nvoid setup() {\n  pinMode(LED_PIN, );\n}\n\nvoid loop() {\n  digitalWrite(LED_PIN, );\n  delay();\n  digitalWrite(LED_PIN, );\n  delay();\n}",
              codeRef: "const int LED_PIN = 2;\n\nvoid setup() {\n  pinMode(LED_PIN, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(LED_PIN, HIGH);  // encender\n  delay(500);                   // esperar 500ms\n  digitalWrite(LED_PIN, LOW);   // apagar\n  delay(500);\n}",
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
    },
    "W10": { days: [] },
    "W11": { days: [] },
    "W12": { days: [] },
    "W13": { days: [] },
    "W14": { days: [] }
  }
};
