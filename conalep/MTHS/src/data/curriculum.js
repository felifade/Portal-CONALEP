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
        { id: "W07", label: "Semana 07 (13-17 Abr)" },
        { id: "W08", label: "Semana 08 (20-24 Abr)" }
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
          label: "Miércoles — Lógica y Eventos (H3)",
          purpose: "Aprender a programar la navegación entre pantallas mediante bloques de lógica.",
          hours: [
            {
              time: "Hora 1",
              title: "Eventos y Navegación",
              theory: "Programar es dar instrucciones. En App Inventor conectamos bloques como rompecabezas. La lógica básica es: 'Cuando el usuario haga clic en este botón, entonces abre esta otra pantalla'.",
              notebook: "Escribe la lógica en pseudocódigo: 1. Veo portada, 2. Presiono botón, 3. Sistema abre Menú.",
              practice: "1. Crea ventana nueva: 'Menu'.\n2. En Bloques, usa: 'cuando Boton1.Click'.\n3. Agrega: 'abrir otra pantalla -> Menu'.",
              product: "Navegación funcional entre pantallas.",
              teacherNotes: "Asegúrate de que escriban el nombre de la pantalla idéntico en el bloque."
            }
          ]
        },
        {
          id: "thu",
          label: "Jueves — Menú y Pruebas (H4-H5)",
          purpose: "Construir el panel principal de funciones y validar el funcionamiento de la aplicación.",
          hours: [
            {
              time: "Hora 1",
              title: "Organización del Menú",
              theory: "Usamos 'Disposiciones' (Arrangements) para alinear botones. El menú principal debe ser intuitivo; si un menú es confuso, el usuario cerrará la app.",
              notebook: "Dibuja iconos para tus 3 temas de seguridad: 1. Contraseñas, 2. WiFi, 3. Riesgos.",
              practice: "1. En 'Menu', usa 'Disposición Vertical'.\n2. Agrega y personaliza 3 botones con temas de seguridad.",
              product: "Panel de control diseñado.",
              teacherNotes: "Explica la diferencia entre ancho 'Automático' y 'Ajustar al contenedor'."
            },
            {
              time: "Hora 2",
              title: "Testing y Calidad",
              theory: "Hacer pruebas permite ver la app con ojos de usuario. A veces, un botón no es claro o los colores no contrastan bien. Corregir esto diferencia un proyecto escolar de uno profesional.",
              notebook: "Autoevaluación: ¿Qué fue lo más fácil? ¿Qué lógica te costó más? ¿Qué función secreta agregarías?",
              practice: "1. Revisa ortografía y navegación.\n2. Prueba con 'AI Companion'.\n3. Genera código QR y prueba en un dispositivo real.",
              product: "Aplicación funcional en dispositivo.",
              teacherNotes: "Facilita las tablets del laboratorio si los alumnos no tienen teléfono."
            }
          ],
          cierre: "Hoy logramos construir nuestra primera aplicación móvil funcional.",
          frase_docente: "Un desarrollador no solo crea código, soluciona problemas reales."
        }
      ]
    },
    "W08": { days: [] }
  }
};
