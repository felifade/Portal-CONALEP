import imgW03S01 from '../assets/w03_s01_infografia.png';

export const teachingPlan = {
  module: {
    code: 'EDOA-20',
    subject: 'Elaboración de Documentos Digitales Avanzados',
    group: '301-INFO25',
    campus: 'CONALEP Pachuca II',
    teacher: 'Dr. Felipe López Salazar',
    classroomCode: 'edf-301-a',
    semester: '1.26.27'
  },
  cortes: [
    {
      id: 'C1',
      label: 'Primer Corte',
      peso: '30%',
      ras: [
        { id: 'RA_Diag', title: 'Diagnóstico e Inducción', peso: '0%', weeks: ['W00'] },
        { id: 'RA 1.1', title: 'Entorno Nube y Estilos Base', peso: '10%', weeks: ['W01'] },
        { id: 'RA 1.2', title: 'Formato Avanzado y Documentos', peso: '10%', weeks: ['W02'] },
        { id: 'RA 1.3', title: 'Automatización y Colaboración', peso: '10%', weeks: ['W03', 'W04'] }
      ]
    },
    {
      id: 'C2',
      label: 'Segundo Corte',
      peso: '35%',
      ras: [
        { id: 'RA 2.1', title: 'Fusión Masiva de Datos', peso: '15%', weeks: ['W05', 'W06'] },
        { id: 'RA 2.2', title: 'Presentaciones Interactivas', peso: '20%', weeks: ['W07', 'W08', 'W09'] }
      ]
    },
    {
      id: 'C3',
      label: 'Tercer Corte',
      peso: '35%',
      ras: [
        { id: 'RA 3.1', title: 'Hojas de Cálculo Avanzadas', peso: '20%', weeks: ['W10', 'W11', 'W12'] },
        { id: 'RA 3.2', title: 'Proyecto Integrador EDOA', peso: '15%', weeks: ['W13', 'W14', 'W15'] }
      ]
    }
  ],
  weeks: {
    'W00': {
      id: 'W00',
      label: 'Semana 00',
      title: 'Encuadre y Diagnóstico',
      dates: '10 Ago - 14 Ago',
      status: 'historical',
      presentationUrl: './html/W00.html',
      summary: 'Reglamento de laboratorio, encuadre del módulo y evaluación diagnóstica de habilidades digitales.',
      expectedProduct: 'Evaluación diagnóstica y firma de reglamento.',
      sessions: [
        {
          id: 'S1', label: 'Sesión 01', subtitle: 'Lunes (4 hrs) · Encuadre',
          start: '¿Por qué un documento mal formateado puede costarte un empleo?',
          dictation: 'La elaboración de documentos digitales no trata sobre escribir más rápido, sino sobre estructurar la información con estándares profesionales que garanticen accesibilidad y automatización.',
          learningResult: 'Conocer las políticas del módulo y firmar reglamento.',
          identification: { topic: 'Encuadre EDOA', evidence: 'Reglamento', organization: 'Grupal', location: 'Aula', time: '4 hrs' },
          infographicTitle: 'Ruta del Día',
          infographicSteps: [{ title: '1. Presentación', desc: 'Conocer el módulo' }, { title: '2. Reglas', desc: 'Uso de laboratorio' }, { title: '3. Evaluación', desc: 'RAs y Cortes' }, { title: '4. Firmas', desc: 'Compromiso' }],
          development: 'Presentación del temario. Toma de acuerdos de clase y lectura del reglamento del laboratorio de informática.',
          closure: 'Firma de enterado en la libreta por parte del alumno.'
        },
        {
          id: 'S2', label: 'Sesión 02', subtitle: 'Miércoles (1 hr) · Diagnóstico',
          start: '¿Qué tanto sabes de la nube?',
          dictation: 'El diagnóstico no tiene valor en la calificación, pero establece la línea base de nuestras habilidades para el semestre.',
          learningResult: 'Completar formulario diagnóstico.',
          identification: { topic: 'Diagnóstico', evidence: 'Formulario Forms', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Ruta del Día',
          infographicSteps: [{ title: '1. Login', desc: 'Acceso a cuenta' }, { title: '2. Enlace', desc: 'Abrir formulario' }, { title: '3. Lectura', desc: 'Responder honesto' }, { title: '4. Envío', desc: 'Confirmar entrega' }],
          development: 'Realización de la prueba diagnóstica en Google Forms evaluando conocimientos previos de ofimática.',
          closure: 'Captura de pantalla de finalización.'
        },
        {
          id: 'S3', label: 'Sesión 03', subtitle: 'Jueves (2 hrs) · Identidad Digital',
          start: '¿Tienes acceso a tu correo institucional?',
          dictation: 'La identidad digital institucional es el primer paso para acceder a las herramientas empresariales de Google Workspace de forma segura y sin límites de almacenamiento.',
          learningResult: 'Activar cuentas institucionales y recuperar contraseñas.',
          identification: { topic: 'Identidad', evidence: 'Correo Activo', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Ruta del Día',
          infographicSteps: [{ title: '1. Office 365', desc: 'Verificar cuenta' }, { title: '2. Contraseña', desc: 'Actualizar clave' }, { title: '3. Google', desc: 'Login Workspace' }, { title: '4. Classroom', desc: 'Unirse a clases' }],
          development: 'Taller de recuperación de cuentas institucionales y unión masiva a los Google Classroom del semestre.',
          closure: 'Alumno unido al Classroom de EDOA-20.'
        },
        {
          id: 'S4', label: 'Sesión 04', subtitle: 'Viernes (1 hr) · Estructura Drive',
          start: '¿Dónde viven tus archivos?',
          dictation: 'Google Drive es nuestra memoria principal. Un archivo perdido es un archivo no evaluado. Hoy sentaremos las bases de nuestra organización en la nube.',
          learningResult: 'Crear la jerarquía de carpetas del semestre.',
          identification: { topic: 'Drive', evidence: 'Carpetas listas', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Ruta del Día',
          infographicSteps: [{ title: '1. Raíz', desc: 'Crear EDOA-20' }, { title: '2. Cortes', desc: 'Carpetas 1, 2 y 3' }, { title: '3. Semanas', desc: 'Carpetas por semana' }, { title: '4. Cierre', desc: 'Sello semanal' }],
          development: 'Creación del árbol de carpetas semestral en la cuenta institucional de Drive.',
          closure: 'Sello de semana 00 y revisión de libretas.'
        }
      ]
    },
    'W01': {
      id: 'W01',
      label: 'Semana 01',
      title: 'Nube y Estilos Base',
      dates: '17 Ago - 21 Ago',
      status: 'historical',
      presentationUrl: './html/W01.html',
      summary: 'Configuración del procesador de texto en la nube y aplicación de estilos jerárquicos de Google Docs.',
      expectedProduct: 'Documento base con aplicación de estilos y atajos de teclado.',
      sessions: [
        {
          id: 'S1', label: 'Sesión 01', subtitle: 'Lunes (4 hrs) · La Nube y Atajos',
          start: '¿Qué pasa si tu computadora explota hoy?',
          dictation: 'Trabajar en la nube significa que el documento no vive en tu PC, sino en servidores remotos. Los atajos de teclado (shortcuts) son el secreto para operar en este entorno a velocidad profesional.',
          learningResult: 'Comprender el autoguardado y usar atajos universales.',
          identification: { topic: 'Cloud & Shortcuts', evidence: 'Doc Base', organization: 'Individual', location: 'Laboratorio', time: '4 hrs' },
          infographicTitle: 'Ruta del Día',
          infographicSteps: [{ title: '1. Nube', desc: 'Autoguardado' }, { title: '2. Ctrl+C/V', desc: 'Copiar y Pegar' }, { title: '3. Ctrl+Z', desc: 'Deshacer error' }, { title: '4. Velocidad', desc: 'Práctica teclado' }],
          development: 'Demostración del guardado en tiempo real. Práctica intensiva de formato usando únicamente combinaciones de teclado.',
          closure: 'Reto de velocidad superado con firma.'
        },
        {
          id: 'S2', label: 'Sesión 02', subtitle: 'Miércoles (1 hr) · Jerarquía Visual',
          start: '¿Por qué los libros tienen tamaños de letra distintos?',
          dictation: 'La jerarquía visual guía el ojo del lector. En documentos digitales, no se cambian los tamaños manualmente, se utilizan los "Estilos de Párrafo".',
          learningResult: 'Diferenciar entre Texto Normal, Título y Subtítulo.',
          identification: { topic: 'Estilos Base', evidence: 'Texto estructurado', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Ruta del Día',
          infographicSteps: [{ title: '1. Título', desc: 'Principal' }, { title: '2. Subtítulo', desc: 'Secundario' }, { title: '3. Normal', desc: 'Cuerpo' }, { title: '4. Limpieza', desc: 'Quitar formato' }],
          development: 'Los alumnos aplican los 3 estilos base a un documento desordenado proporcionado por el docente.',
          closure: 'Documento con jerarquía visual primaria correcta.'
        },
        {
          id: 'S3', label: 'Sesión 03', subtitle: 'Jueves (2 hrs) · Encabezados (H1-H3)',
          start: '¿Cómo estructurar un documento largo?',
          dictation: 'Los encabezados 1, 2 y 3 (H1, H2, H3) crean el esqueleto del documento. Son fundamentales para la accesibilidad y los índices.',
          learningResult: 'Aplicar H1, H2 y H3 lógicamente.',
          identification: { topic: 'Encabezados', evidence: 'Documento largo', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Ruta del Día',
          infographicSteps: [{ title: '1. Esquema', desc: 'Abrir panel' }, { title: '2. H1', desc: 'Temas' }, { title: '3. H2', desc: 'Subtemas' }, { title: '4. H3', desc: 'Detalles' }],
          development: 'Extender el documento anterior aplicando múltiples niveles de encabezados para estructurar secciones de texto.',
          closure: 'Revisión del panel de esquema lateral en Docs.'
        },
        {
          id: 'S4', label: 'Sesión 04', subtitle: 'Viernes (1 hr) · Permisos',
          start: '¿Sabes compartir correctamente un archivo?',
          dictation: 'Compartir un enlace privado es como entregar una caja fuerte sin la llave. Siempre debes ajustar los permisos a Lector público.',
          learningResult: 'Ajustar permisos de Google Drive y entregar.',
          identification: { topic: 'Permisos', evidence: 'Classroom', organization: 'Individual', location: 'Aula', time: '1 hr' },
          infographicTitle: 'Ruta del Día',
          infographicSteps: [{ title: '1. Compartir', desc: 'Botón azul' }, { title: '2. Acceso', desc: 'Público' }, { title: '3. Rol', desc: 'Lector' }, { title: '4. Entrega', desc: 'Subir link' }],
          development: 'Generar el enlace del documento semanal con permisos abiertos y subirlo a Classroom.',
          closure: 'Sello semanal y verificación final.'
        }
      ]
    },
    'W02': {
      id: 'W02',
      label: 'Semana 02',
      title: 'Documentos Formales e Índices',
      dates: '24 Ago - 28 Ago',
      status: 'historical',
      presentationUrl: './html/W02.html',
      summary: 'Maquetación de oficios, tablas de información e índices automatizados.',
      expectedProduct: 'Oficio formal con índice, tabla de datos y marca de agua.',
      sessions: [
        {
          id: 'S1', label: 'Sesión 01', subtitle: 'Lunes (4 hrs) · Índices y Tablas',
          start: '¿Aún escribes puntitos en tus índices manualmente?',
          dictation: 'El índice automático recopila los Encabezados para generar un mapa clicable. Las tablas ordenan datos complejos en matrices de filas y columnas.',
          learningResult: 'Insertar tablas de contenido automáticas y tablas de datos.',
          identification: { topic: 'Índices y Tablas', evidence: 'Doc con Índice', organization: 'Individual', location: 'Laboratorio', time: '4 hrs' },
          infographicTitle: 'Ruta del Día',
          infographicSteps: [{ title: '1. Índice', desc: 'Insertar TDC' }, { title: '2. Tablas', desc: 'Filas y Columnas' }, { title: '3. Viñetas', desc: 'Listas' }, { title: '4. Formato', desc: 'Color celdas' }],
          development: 'Crear hoja inicial para índice automático. Diseñar una lista de viñetas y una tabla comparativa a 3 columnas.',
          closure: 'Índice navegable y tabla formateada.'
        },
        {
          id: 'S2', label: 'Sesión 02', subtitle: 'Miércoles (1 hr) · Maquetación Oficios',
          start: '¿Sabes cómo solicitar algo formalmente a la dirección?',
          dictation: 'Un oficio es el estándar de comunicación institucional. Requiere rigor en justificación, interlineado y alineación de fechas.',
          learningResult: 'Redactar un oficio formal.',
          identification: { topic: 'Oficio', evidence: 'Borrador Oficio', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Ruta del Día',
          infographicSteps: [{ title: '1. Fecha', desc: 'Derecha' }, { title: '2. Destinatario', desc: 'Directorio' }, { title: '3. Cuerpo', desc: 'Justificado' }, { title: '4. Despedida', desc: 'Firma central' }],
          development: 'Redactar un oficio simulado para solicitud de insumos siguiendo las normas de alineación formal.',
          closure: 'Oficio redactado y justificado.'
        },
        {
          id: 'S3', label: 'Sesión 03', subtitle: 'Jueves (2 hrs) · Identidad Visual',
          start: '¿Cómo proteger o brandear tu documento?',
          dictation: 'La marca de agua (Watermark) es un elemento translúcido en el fondo que indica confidencialidad, estado o identidad corporativa.',
          learningResult: 'Insertar marcas de agua e imágenes.',
          identification: { topic: 'Marca de Agua', evidence: 'Doc brandeado', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Ruta del Día',
          infographicSteps: [{ title: '1. Insertar', desc: 'Menú Marca' }, { title: '2. Logo', desc: 'Buscar imagen' }, { title: '3. Opacidad', desc: 'Ajustar 50%' }, { title: '4. Ajuste', desc: 'Lectura clara' }],
          development: 'Insertar el logo oficial de CONALEP como marca de agua en el fondo del oficio formal.',
          closure: 'Documento con identidad institucional correcta.'
        },
        {
          id: 'S4', label: 'Sesión 04', subtitle: 'Viernes (1 hr) · Coevaluación',
          start: '¿Tu documento cumple todos los estándares?',
          dictation: 'La coevaluación permite auditar el trabajo de un colega utilizando listas de cotejo para prevenir errores antes de la entrega formal.',
          learningResult: 'Auditar documentos de compañeros y entregar.',
          identification: { topic: 'Auditoría', evidence: 'Classroom', organization: 'Parejas', location: 'Aula', time: '1 hr' },
          infographicTitle: 'Ruta del Día',
          infographicSteps: [{ title: '1. Intercambio', desc: 'Cambiar PC' }, { title: '2. Auditar', desc: 'Revisar checklist' }, { title: '3. Corregir', desc: 'Ajustar fallos' }, { title: '4. Entregar', desc: 'Subir enlace' }],
          development: 'Revisión cruzada entre parejas. Corrección de errores y entrega final en plataforma.',
          closure: 'Sello semanal y puntaje.'
        }
      ]
    },
    'W03': {
      id: 'W03',
      label: 'Semana 03',
      title: 'Automatización y Hojas de Cálculo',
      dates: '31 Ago - 04 Sep',
      status: 'active',
      presentationUrl: './html/W03.html',
      summary: 'Uso de Fichas Inteligentes, Códigos QR y el gran salto a la Matriz de Hojas de Cálculo.',
      expectedProduct: 'Currículum Interactivo en Docs y Tablas dinámicas en Sheets.',
      sessions: [
        {
          id: 'S1', label: 'Sesión 01', subtitle: 'Lunes (4 hrs) · Automatización Docs',
          start: '¿Y si tu documento cobrara vida propia?',
          dictation: 'Hoy transformaremos un procesador de texto estático en una herramienta viva. Aprenderemos a insertar menús con fichas inteligentes (@), programar códigos QR mediante Add-ons, trazar firmas digitales en el lienzo y estandarizar datos usando Plantillas (Currículum).',
          learningResult: 'Dominar la automatización e interactividad en Google Docs.',
          identification: { topic: 'Automatización', evidence: 'CV Interactivo', organization: 'Individual', location: 'Laboratorio', time: '4 hrs' },
          infographicTitle: 'Ruta del Día',
          infographicImage: imgW03S01,
          infographicSteps: [{ title: '1. Fichas @', desc: 'Menús y Fechas' }, { title: '2. QR Code', desc: 'Add-ons' }, { title: '3. Lienzo', desc: 'Firma Digital' }, { title: '4. Plantilla', desc: 'Diseño de CV' }],
          development: 'Creación de controles interactivos con el símbolo @. Instalación del generador de QR. Trazo de firma a mano alzada y vaciado en una plantilla de Currículum.',
          closure: 'Currículum vitae interactivo, firmado y con código QR funcional.'
        },
        {
          id: 'S2', label: 'Sesión 02', subtitle: 'Miércoles (1 hr) · Continuación',
          start: '¿Dónde nos quedamos el lunes?',
          dictation: 'En esta sesión continuaremos con la elaboración técnica de nuestro Currículum interactivo, guiados por la Ruta del Día que trazamos en la primera sesión.',
          learningResult: 'Continuar la automatización e interactividad en Google Docs.',
          identification: { topic: 'CV Interactivo', evidence: 'Avance Práctico', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Continuación',
          infographicSteps: [{ title: '1. Retomar', desc: 'Abrir Doc' }, { title: '2. Ajustes', desc: 'Detalles visuales' }, { title: '3. QR', desc: 'Generador' }, { title: '4. Avance', desc: 'Progreso guardado' }],
          development: 'Continuación del trabajo práctico guiado por la infografía: Inserción de códigos QR, uso del lienzo para firma digital y acomodo visual de la plantilla del Currículum.',
          closure: 'Avance validado del Currículum.'
        },
        {
          id: 'S3', label: 'Sesión 03', subtitle: 'Jueves (2 hrs) · Continuación',
          start: '¿Listos para pulir los detalles finales de nuestro CV interactivo?',
          dictation: 'La calidad está en los detalles. Dedicaremos esta sesión doble a perfeccionar la plantilla, asegurar que las fichas inteligentes funcionen y que los códigos QR apunten correctamente a sus destinos.',
          learningResult: 'Perfeccionar y consolidar el formato avanzado del documento.',
          identification: { topic: 'Pruebas Finales', evidence: 'CV Terminado', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Cierre de Diseño',
          infographicSteps: [{ title: '1. Revisión', desc: 'Fichas @' }, { title: '2. Test QR', desc: 'Escanear' }, { title: '3. Firma', desc: 'Trazo manual' }, { title: '4. Formato', desc: 'Detalles' }],
          development: 'Pruebas de funcionalidad de las fichas desplegables y del código QR con celulares. Alineación de textos, márgenes y aplicación de formato avanzado.',
          closure: 'Documento interactivo 100% terminado.'
        },
        {
          id: 'S4', label: 'Sesión 04', subtitle: 'Viernes (1 hr) · Evaluación',
          start: '¿Qué hemos aprendido sobre la automatización de documentos?',
          dictation: 'Es momento de auditar nuestro progreso. La evaluación final consiste en asegurar que el documento interactivo cumpla con todas las especificaciones solicitadas (Fichas, QR, Firma) y sus permisos públicos.',
          learningResult: 'Evaluar el Currículum Interactivo y auditar las entregas.',
          identification: { topic: 'Evaluación', evidence: '100% Entregas', organization: 'Individual', location: 'Aula', time: '1 hr' },
          infographicTitle: 'Ruta de Entrega',
          infographicSteps: [{ title: '1. Auditar', desc: 'Checklist' }, { title: '2. Enlace', desc: 'Cualquiera lee' }, { title: '3. Classroom', desc: 'Subida oficial' }, { title: '4. Acreditación', desc: 'Registro' }],
          development: 'Verificación uno-a-uno de que el enlace de compartir de Google Docs esté como "Cualquier usuario con el vínculo". Evaluación final del Currículum en Google Classroom.',
          closure: 'Proyecto evaluado y bloque cerrado.'
        }
      ]
    },
    'W04': {
      id: 'W04',
      label: 'Semana 04',
      title: 'Hojas de Cálculo Avanzadas',
      dates: '07 Sep - 11 Sep',
      status: 'upcoming',
      presentationUrl: null,
      summary: 'Funciones estadísticas básicas y validación de datos en Google Sheets.',
      expectedProduct: 'Boleta de calificaciones automatizada.',
      sessions: [
        {
          id: 'S1', label: 'Sesión 01', subtitle: 'Lunes (4 hrs) · Funciones Básicas',
          start: '¿Cómo sumar 100 números en 1 segundo?',
          dictation: 'Las Funciones son fórmulas preprogramadas. En lugar de sumar celda por celda (A1+A2+A3), usamos la función =SUMA() con rangos.',
          learningResult: 'Aplicar funciones SUMA, PROMEDIO y MAX.',
          identification: { topic: 'Funciones', evidence: 'Boleta', organization: 'Individual', location: 'Laboratorio', time: '4 hrs' },
          infographicTitle: 'Ruta del Día',
          infographicSteps: [{ title: '1. Igual =', desc: 'Escribir Función' }, { title: '2. Paréntesis', desc: 'Abrir (' }, { title: '3. Rango', desc: 'Seleccionar celdas' }, { title: '4. Enter', desc: 'Cerrar y calcular' }],
          development: 'Desarrollo de boleta automatizada.',
          closure: 'Archivo entregado en Classroom.'
        },
        {
          id: 'S2', label: 'Sesión 02', subtitle: 'Miércoles (1 hr) · Gráficos',
          start: '¿Por qué las empresas aman las gráficas?',
          dictation: 'Una gráfica convierte una tabla de números aburridos en una historia visual fácil de digerir para la toma de decisiones.',
          learningResult: 'Generar gráficas de barras y pastel.',
          identification: { topic: 'Gráficos', evidence: 'Dashboard', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Ruta del Día',
          infographicSteps: [{ title: '1. Datos', desc: 'Seleccionar tabla' }, { title: '2. Insertar', desc: 'Gráfico' }, { title: '3. Tipo', desc: 'Elegir diseño' }, { title: '4. Personalizar', desc: 'Colores' }],
          development: 'Generar gráficas a partir de la boleta de calificaciones.',
          closure: 'Gráficas insertadas.'
        },
        {
          id: 'S3', label: 'Sesión 03', subtitle: 'Jueves (2 hrs) · Validación de Datos',
          start: '¿Cómo evitar que el usuario rompa tu tabla?',
          dictation: 'La Validación de Datos restringe lo que se puede escribir en una celda, evitando errores tipográficos en bases de datos masivas.',
          learningResult: 'Crear listas desplegables en Sheets.',
          identification: { topic: 'Validación', evidence: 'Menús Sheets', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Ruta del Día',
          infographicSteps: [{ title: '1. Menú', desc: 'Datos > Validar' }, { title: '2. Criterio', desc: 'Menú desplegable' }, { title: '3. Opciones', desc: 'Escribir ítems' }, { title: '4. Guardar', desc: 'Probar celda' }],
          development: 'Agregar listas desplegables para el estatus de las calificaciones (Aprobado/Reprobado).',
          closure: 'Validación funcionando.'
        },
        {
          id: 'S4', label: 'Sesión 04', subtitle: 'Viernes (1 hr) · Cierre y Entregas',
          start: '¿Tu dashboard está completo?',
          dictation: 'Un archivo de datos requiere revisión meticulosa. La limpieza de celdas vacías y la protección de rangos son vitales antes del envío.',
          learningResult: 'Finalizar la boleta y enviarla.',
          identification: { topic: 'Cierre', evidence: 'Classroom', organization: 'Individual', location: 'Aula', time: '1 hr' },
          infographicTitle: 'Ruta del Día',
          infographicSteps: [{ title: '1. Funciones', desc: 'Revisar #' }, { title: '2. Gráficas', desc: 'Claras' }, { title: '3. Estética', desc: 'Limpieza' }, { title: '4. Envío', desc: 'Lector' }],
          development: 'Revisión final de la Boleta con Gráficas.',
          closure: 'Sello semanal W04.'
        }
      ]
    }
  }
};
