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
          label: "Lunes — Cierre App Inventor + Hola ESP32",
          purpose: "Cerrar el ciclo de App Inventor con una revisión de proyectos y dar el primer paso con ESP32 en Wokwi, entendiendo por qué esta placa es la base ideal para proyectos Bluetooth.",
          hours: [
            {
              time: "Hora 1",
              title: "Cierre de App Inventor: revisión de proyectos",
              theory: "Antes de avanzar a nueva tecnología es importante consolidar lo que ya construimos. Una aplicación móvil funcional demuestra que dominas la lógica de bloques, la interfaz de usuario y la navegación entre pantallas — habilidades que aplicarás directamente cuando diseñes la app que controlará el ESP32 por Bluetooth.",
              notebook: "Título: Lo que aprendí con App Inventor.\n1. Escribe las 3 pantallas o funciones principales de tu app.\n2. ¿Qué bloque fue el más difícil de entender y cómo lo resolviste?\n3. ¿Qué mejorarías si tuvieras más tiempo?\n4. Escribe una conexión entre lo que hiciste en App Inventor y lo que crees que harás con el ESP32.",
              practice: "1. Abrir el proyecto de App Inventor en el navegador.\n2. Navegar la app en el emulador o teléfono y verificar que todas las pantallas funcionan.\n3. Mostrar al docente la función principal de la app.\n4. Identificar qué componente de la app podría usarse para mandar comandos a una placa electrónica (pista: botones y TextBox).\n5. Anotar en libreta: ¿cómo mandarías el texto '1' al presionar un botón en App Inventor?",
              code: "// No aplica código en esta hora.\n// Reflexión: ¿qué bloque de App Inventor\n// usarías para enviar un texto por Bluetooth?\n\n// Pista: BluetoothClient.SendText(\"1\")",
              codeRef: "// Bloque App Inventor para enviar dato:\n//\n// cuando Boton1.Clic\n//   llamar BluetoothClient1.EnviarTexto\n//   texto: \"1\"\n//\n// Esto es exactamente lo que conectará\n// el teléfono con el ESP32 más adelante.",
              product: "App Inventor revisada y aprobada. Conexión conceptual establecida entre App Inventor y el control Bluetooth del ESP32.",
              teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta hora es de consolidación y transición. No extender la revisión más de lo necesario — el objetivo es cerrar el ciclo con satisfacción y crear expectativa para lo que viene. La pregunta sobre BluetoothClient.SendText es el puente mental clave entre ambas tecnologías."
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
              teacherNotes: "👨‍🏫 NOTA DOCENTE: El error más común es no conectar el GND del LED al GND de la placa. Si el LED no enciende, pedir que sigan el cable verde desde el pin 2 hasta el LED y de ahí hasta GND. Dejar que lo descubran solos antes de intervenir."
            },
            {
              time: "Hora 3",
              title: "Serial Monitor: controlar el LED con comandos",
              theory: "El Serial Monitor es una ventana de comunicación entre la computadora y el ESP32. Permite enviar texto y recibir respuestas en tiempo real. Esto es exactamente lo que hará el teléfono cuando se conecte por Bluetooth: enviar un carácter ('1' o '0') y el ESP32 reacciona encendiendo o apagando el LED. Al practicarlo con el Serial Monitor en Wokwi, aprendes la lógica completa antes de introducir el Bluetooth.",
              notebook: "Título: Serial Monitor como simulador de Bluetooth.\n1. ¿Qué función tiene Serial.available() en el código?\n2. ¿Qué diferencia hay entre Serial.read() y Serial.println()?\n3. Dibuja el flujo: teclado → Serial Monitor → ESP32 → LED.\n4. ¿Cómo cambia ese flujo cuando usas Bluetooth? ¿Qué sustituye al teclado?",
              practice: "1. En el mismo proyecto de Wokwi, reemplazar el código Blink por el sketch de control serial.\n2. Presionar ▶ para iniciar la simulación.\n3. Abrir el Serial Monitor (ícono de terminal en Wokwi).\n4. Escribir '1' y presionar Enter → verificar que el LED enciende.\n5. Escribir '0' y presionar Enter → verificar que el LED apaga.\n6. Verificar el mensaje de respuesta en el monitor ('LED encendido' / 'LED apagado').\n7. Experimentar con otros caracteres y observar que no pasa nada (lógica de comandos desconocidos).",
              code: "const int LED_PIN = 2;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN, OUTPUT);\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Escribe 1 o 0:\");\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    char cmd = Serial.read();\n\n    if (cmd == '') {\n      digitalWrite(LED_PIN, );\n      Serial.println(\"\");\n    }\n    else if (cmd == '') {\n      digitalWrite(LED_PIN, );\n      Serial.println(\"\");\n    }\n  }\n}",
              codeRef: "const int LED_PIN = 2;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_PIN, OUTPUT);\n  digitalWrite(LED_PIN, LOW);\n  Serial.println(\"Escribe 1 o 0:\");\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    char cmd = Serial.read();\n\n    if (cmd == '1') {\n      digitalWrite(LED_PIN, HIGH);\n      Serial.println(\"LED encendido\");\n    }\n    else if (cmd == '0') {\n      digitalWrite(LED_PIN, LOW);\n      Serial.println(\"LED apagado\");\n    }\n  }\n}",
              product: "LED controlado desde el Serial Monitor con comandos '1' y '0'. Lógica de Bluetooth comprendida y simulada.",
              teacherNotes: "👨‍🏫 NOTA DOCENTE: Insistir en que esto NO es Bluetooth todavía — es la misma lógica con diferente canal. Cuando llegue el ESP32 físico solo cambiará Serial por SerialBT. Quien termine antes: pedirle que agregue un segundo LED en otro pin y que responda al comando '2'."
            }
          ],
          cierre: "Hoy cerraste una etapa y abriste otra. Tu teléfono ya puede hablar con hardware — solo falta conectar los cables.",
          frase_docente: "La lógica no cambia. Solo cambia el cable."
        },
        {
          id: "thu",
          label: "Jueves — Semáforo ESP32 + Diseño de la App",
          purpose: "Ampliar el proyecto a un semáforo de 3 LEDs controlado por comandos de una sola letra, y diseñar en App Inventor la interfaz que enviará esos comandos por Bluetooth.",
          hours: [
            {
              time: "Hora 1",
              title: "Semáforo con 3 LEDs controlado por Serial",
              theory: "Un semáforo es un sistema de señalización que solo puede mostrar un estado a la vez — rojo, amarillo o verde. En código esto se traduce en: apagar todos los LEDs y encender solo el que corresponde al comando recibido. Para controlar 3 LEDs independientes necesitamos 3 pines GPIO diferentes. El principio es el mismo que la hora anterior pero escalado: en lugar de '1' y '0', ahora usamos 'R', 'Y' y 'G' como comandos.",
              notebook: "Título: Semáforo con ESP32.\n1. Dibuja el circuito: ESP32 con 3 LEDs (rojo pin 25, amarillo pin 26, verde pin 27).\n2. ¿Por qué hay que apagar todos los LEDs antes de encender el que corresponde?\n3. ¿Qué pasa si no apagas los otros antes?\n4. Escribe la tabla de comandos: R → LED rojo, Y → LED amarillo, G → LED verde.",
              practice: "1. En Wokwi agregar 2 LEDs más (amarillo y verde) con sus resistencias.\n2. Conectar: rojo → pin 25, amarillo → pin 26, verde → pin 27.\n3. Escribir el sketch del semáforo.\n4. Simular y probar en el Serial Monitor:\n   - Escribir 'R' → solo LED rojo enciende.\n   - Escribir 'Y' → solo LED amarillo enciende.\n   - Escribir 'G' → solo LED verde enciende.\n5. Verificar que al cambiar de color el anterior se apaga.",
              code: "const int LED_ROJO     = 25;\nconst int LED_AMARILLO = 26;\nconst int LED_VERDE    = 27;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_ROJO,     );\n  pinMode(LED_AMARILLO, );\n  pinMode(LED_VERDE,    );\n  Serial.println(\"R=Rojo  Y=Amarillo  G=Verde\");\n}\n\nvoid apagar_todos() {\n  digitalWrite(LED_ROJO,     LOW);\n  digitalWrite(LED_AMARILLO, LOW);\n  digitalWrite(LED_VERDE,    LOW);\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    char cmd = Serial.read();\n    apagar_todos();\n\n    if      (cmd == '') digitalWrite(LED_ROJO,     HIGH);\n    else if (cmd == '') digitalWrite(LED_AMARILLO, HIGH);\n    else if (cmd == '') digitalWrite(LED_VERDE,    HIGH);\n\n    Serial.print(\"Comando: \");\n    Serial.println(cmd);\n  }\n}",
              codeRef: "const int LED_ROJO     = 25;\nconst int LED_AMARILLO = 26;\nconst int LED_VERDE    = 27;\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(LED_ROJO,     OUTPUT);\n  pinMode(LED_AMARILLO, OUTPUT);\n  pinMode(LED_VERDE,    OUTPUT);\n  Serial.println(\"R=Rojo  Y=Amarillo  G=Verde\");\n}\n\nvoid apagar_todos() {\n  digitalWrite(LED_ROJO,     LOW);\n  digitalWrite(LED_AMARILLO, LOW);\n  digitalWrite(LED_VERDE,    LOW);\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    char cmd = Serial.read();\n    apagar_todos();\n\n    if      (cmd == 'R') digitalWrite(LED_ROJO,     HIGH);\n    else if (cmd == 'Y') digitalWrite(LED_AMARILLO, HIGH);\n    else if (cmd == 'G') digitalWrite(LED_VERDE,    HIGH);\n\n    Serial.print(\"Comando: \");\n    Serial.println(cmd);\n  }\n}",
              product: "Semáforo de 3 LEDs funcional en Wokwi, respondiendo a comandos R, Y, G desde el Serial Monitor.",
              teacherNotes: "👨‍🏫 NOTA DOCENTE: La función apagar_todos() es el concepto clave — enseña a pensar en 'resetear el estado antes de aplicar el nuevo'. Si alguien pregunta por qué no solo encender el nuevo, demostrar qué pasa sin apagar los otros primero. Quien termine antes: agregar un comando 'A' que haga el ciclo automático rojo→amarillo→verde con delay."
            },
            {
              time: "Hora 2",
              title: "App Inventor: diseño de la app controladora",
              theory: "Ahora que el ESP32 entiende los comandos R, Y y G, necesitamos una app que los envíe. En App Inventor el componente BluetoothClient permite conectarse a dispositivos Bluetooth y enviar texto con el bloque EnviarTexto. La interfaz tendrá: un ListPicker para elegir el dispositivo, un botón Conectar y tres botones de color que enviarán cada uno su letra correspondiente. La app no sabe de LEDs — solo sabe que al presionar un botón manda un carácter.",
              notebook: "Título: App controladora de semáforo.\n1. Dibuja el diseño de la app con sus elementos: ListPicker, botón Conectar, 3 botones de color.\n2. ¿Qué bloque de App Inventor envía texto por Bluetooth?\n3. ¿Qué texto manda el botón Rojo? ¿Y el Verde?\n4. ¿Por qué el ListPicker debe ir antes del botón Conectar?",
              practice: "1. Abrir MIT App Inventor (ai2.appinventor.mit.edu).\n2. Crear nuevo proyecto: 'Semaforo_BT'.\n3. En el Diseñador agregar:\n   - ListPicker (para buscar dispositivos BT) — texto: 'Buscar dispositivo'\n   - Botón Conectar\n   - Label que muestre el estado de conexión\n   - 3 botones: Rojo (fondo rojo), Amarillo (fondo amarillo), Verde (fondo verde)\n   - Componente BluetoothClient (no visible)\n4. En el Editor de Bloques programar:\n   - ListPicker.AntesDeSeleccionar → cargar dispositivos BT\n   - ListPicker.DespuésDeSeleccionar → conectar al seleccionado\n   - Cada botón de color → BluetoothClient.EnviarTexto con su letra\n5. Probar en el emulador que los botones responden.",
              code: "// Este es el texto que enviará cada botón:\n\n// Botón ROJO    → EnviarTexto: \"R\"\n// Botón AMARILLO → EnviarTexto: \"Y\"\n// Botón VERDE   → EnviarTexto: \"G\"\n\n// El ESP32 recibirá ese carácter\n// y encenderá el LED correspondiente.",
              codeRef: "// Bloques App Inventor (lógica):\n//\n// cuando ListPicker1.AntesDeSeleccionar\n//   asignar ListPicker1.Elementos =\n//     BluetoothClient1.DispositivosEmparejados\n//\n// cuando ListPicker1.DespuésDeSeleccionar\n//   llamar BluetoothClient1.Conectar\n//   dirección: ListPicker1.Selección\n//\n// cuando BotonRojo.Clic\n//   llamar BluetoothClient1.EnviarTexto\n//   texto: \"R\"\n//\n// cuando BotonVerde.Clic\n//   llamar BluetoothClient1.EnviarTexto\n//   texto: \"G\"",
              product: "App Inventor con diseño completo del controlador de semáforo: conexión BT y 3 botones que envían R, Y, G.",
              teacherNotes: "👨‍🏫 NOTA DOCENTE: En esta hora no habrá conexión Bluetooth real — el objetivo es tener la app lista para cuando llegue el ESP32 físico. Verificar que los bloques estén bien programados aunque no se puedan probar completos. El emulador puede confirmar que los botones responden aunque no haya BT."
            },
            {
              time: "Hora 3",
              title: "Flujo completo: app → Bluetooth → ESP32 → LED",
              theory: "Cuando el ESP32 físico llegue, el único cambio en el código será reemplazar Serial por SerialBT — la lógica de comandos R, Y, G es exactamente la misma. El teléfono ocupa el lugar del Serial Monitor: envía un carácter, el ESP32 lo lee, apaga todos los LEDs y enciende el correspondiente. Entender este flujo completo antes de tener el hardware es lo que permitirá que la conexión funcione al primer intento.",
              notebook: "Título: Flujo completo del proyecto.\n1. Dibuja el diagrama completo: Teléfono → App Inventor → Bluetooth → ESP32 → LEDs.\n2. ¿Qué línea de código cambia al pasar de simulación a hardware real?\n3. Escribe el nombre del componente de App Inventor que maneja Bluetooth.\n4. ¿Qué debe pasar primero: conectar por Bluetooth o presionar el botón de color? ¿Por qué?",
              practice: "1. Abrir el proyecto Wokwi del semáforo.\n2. Simular el flujo completo usando el Serial Monitor como si fuera la app:\n   - Escribir R → verificar LED rojo\n   - Escribir Y → verificar LED amarillo\n   - Escribir G → verificar LED verde\n3. En el código de Wokwi, mostrar el cambio que se hará para hardware real:\n   cambiar Serial.available() → SerialBT.available()\n   cambiar Serial.read() → SerialBT.read()\n4. Guardar el proyecto de Wokwi con el nombre 'Semaforo_BT_v1'.\n5. Guardar el proyecto de App Inventor.\n6. Documentar en libreta: lista de materiales para el ESP32 físico.",
              code: "// SIMULACIÓN (Wokwi — hoy)\n// ─────────────────────────\nif (Serial.available()) {\n  char cmd = Serial.read();\n}\n\n// HARDWARE REAL (próxima semana)\n// ─────────────────────────────\n// #include \"BluetoothSerial.h\"\n// BluetoothSerial SerialBT;\n//\n// if (SerialBT.available()) {\n//   char cmd = SerialBT.read();\n// }",
              codeRef: "// Versión completa para ESP32 físico:\n\n#include \"BluetoothSerial.h\"\n\nBluetoothSerial SerialBT;\n\nconst int LED_ROJO     = 25;\nconst int LED_AMARILLO = 26;\nconst int LED_VERDE    = 27;\n\nvoid apagar_todos() {\n  digitalWrite(LED_ROJO,     LOW);\n  digitalWrite(LED_AMARILLO, LOW);\n  digitalWrite(LED_VERDE,    LOW);\n}\n\nvoid setup() {\n  Serial.begin(115200);\n  SerialBT.begin(\"Semaforo_BT\");\n  pinMode(LED_ROJO,     OUTPUT);\n  pinMode(LED_AMARILLO, OUTPUT);\n  pinMode(LED_VERDE,    OUTPUT);\n}\n\nvoid loop() {\n  if (SerialBT.available()) {\n    char cmd = SerialBT.read();\n    apagar_todos();\n    if      (cmd == 'R') digitalWrite(LED_ROJO,     HIGH);\n    else if (cmd == 'Y') digitalWrite(LED_AMARILLO, HIGH);\n    else if (cmd == 'G') digitalWrite(LED_VERDE,    HIGH);\n  }\n}",
              product: "Flujo completo documentado. Proyectos Wokwi y App Inventor guardados y listos para hardware real.",
              teacherNotes: "👨‍🏫 NOTA DOCENTE: El cierre de esta hora es la lista de materiales. Cada alumno debe anotar: 1 ESP32 DevKit, 3 LEDs (rojo, amarillo, verde), 3 resistencias 220Ω, cables dupont, protoboard. Esto es lo que traerán o comprarán para W10. Revisar que todos tengan ambos proyectos guardados antes de salir."
            }
          ],
          cierre: "El semáforo responde a tus comandos. La app está lista. Solo falta el cable que no existe — el Bluetooth. La próxima semana lo conectamos.",
          frase_docente: "Ya programaste el hardware y diseñaste la app. Lo único que falta es que se conozcan."
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
