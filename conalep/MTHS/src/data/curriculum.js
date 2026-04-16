export const curriculumData = {
  subject: "Manejo de Tecnologías de Hardware y Software (MTHS)",
  group: "401",
  ras: [
    {
      id: "RA1.1",
      title: "1.1 RA (15%)",
      weeks: [
        { id: "W00", label: "Semana 00 (09-13 Feb)" },
        { id: "W01", label: "Semana 01 (16-20 Feb)" },
        { id: "W02", label: "Semana 02 (23-27 Feb)" }
      ]
    },
    {
      id: "RA1.2",
      title: "1.2 RA (15%)",
      weeks: [
        { id: "W03", label: "Semana 03 (02-06 Mar)" },
        { id: "W04", label: "Semana 04 (09-13 Mar)" },
        { id: "W05", label: "Semana 05 (16-20 Mar)" }
      ]
    },
    {
      id: "RA2.1",
      title: "2.1 RA (20%)",
      weeks: [
        { id: "W06", label: "Semana 06 (23-27 Mar)" },
        { id: "W07", label: "Semana 07 (13-17 Abr)" }
        // { id: "W08", label: "Semana 08 (20-24 Abr)" }
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
    "W06": { days: [] },
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
    // "W08": { days: [] }
  }
};
