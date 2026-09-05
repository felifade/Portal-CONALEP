import imgW03S01 from '../assets/w03_s01_infografia.png';
import imgW04S01 from '../assets/w04_s01_infografia.jpg';
import imgW04S02 from '../assets/w04_s02_infografia.jpg';

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
      title: 'Directorio Inteligente y Transición a Hojas de Cálculo',
      dates: '07 Sep - 11 Sep',
      status: 'upcoming',
      presentationUrl: './html/W04.html',
      summary: 'Integración de Google Docs (pestaña y bitácora) y Google Sheets (Directorio del Grupo 301 con validación, filtros y fórmulas).',
      expectedProduct: 'Pestaña Semana 04 en Docs y Directorio Grupo 301 en Sheets.',
      sessions: [
        {
          id: 'S1', label: 'Sesión 01', subtitle: 'Lunes (2 hrs) · Docs & Registro Base',
          start: '¿Cuál es la diferencia entre redactar un texto y estructurar una base de datos?',
          dictation: 'Una hoja de cálculo es una matriz bidimensional de filas y columnas que permite almacenar, calcular y analizar datos. La normalización consiste en asignar a cada columna un dato único y específico para evitar redundancias y errores.',
          learningResult: 'Crear pestaña en Docs y registrar la base de datos del Grupo 301 en Sheets.',
          identification: { topic: 'Setup & Captura', evidence: 'Directorio Base', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Sesión 01 · Horas 1 y 2',
          infographicImage: imgW04S01,
          infographicSteps: [
            { title: '1. Pestaña Docs', desc: 'Crear pestaña Semana 04' },
            { title: '2. Portada & Checklist', desc: 'Metas y formato base' },
            { title: '3. Enlace Sheets', desc: 'Vincular archivo a Docs' },
            { title: '4. 9 Campos Base', desc: 'Nombre, edad, PC, equipo...' }
          ],
          development: 'Apertura de la bitácora en Docs, creación de la pestaña Semana 04 con portada y checklist. En Google Sheets, creación de Directorio_Grupo_301 con 9 campos (incluyendo PC asignada, dispositivo en casa y correo Conalep) y captura de registros.',
          closure: 'Pestaña en Docs formateada y archivo de Sheets enlazado con la estructura base.'
        },
        {
          id: 'S2', label: 'Sesión 02', subtitle: 'Lunes (2 hrs) · Formato & Validación',
          start: '¿Cómo garantizamos que nadie escriba datos equivocados en una hoja compartida?',
          dictation: 'La validación de datos restringe los valores que una celda puede recibir mediante listas predefinidas. Congelar filas inmoviliza los encabezados para que nunca se pierdan de vista al navegar por listas extensas.',
          learningResult: 'Aplicar inmovilización de paneles y validación con menús desplegables.',
          identification: { topic: 'Calidad de Datos', evidence: 'Directorio Validado', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Sesión 02 · Horas 3 y 4',
          infographicImage: imgW04S02,
          infographicSteps: [
            { title: '1. Inmovilizar Fila 1', desc: 'Encabezados siempre visibles' },
            { title: '2. Estilo Visual', desc: 'Alineación y bordes' },
            { title: '3. Listas Sexo/PC', desc: 'Menú desplegable simple' },
            { title: '4. Chips de Color', desc: 'Dispositivo en casa' }
          ],
          development: 'Inmovilización de la fila 1, alineación según tipo de dato, formato de bordes y configuración de reglas de validación de datos en columnas clave para erradicar errores tipográficos.',
          closure: 'Directorio estilizado con menús desplegables activos y evidencia en Docs.'
        },
        {
          id: 'S3', label: 'Sesión 03', subtitle: 'Miércoles (1 hr) · Filtros y Búsquedas',
          start: '¿Filtrar datos significa que borramos lo que no vemos?',
          dictation: 'Filtrar no elimina registros: oculta temporalmente los datos que no cumplen con un criterio específico. Permite responder preguntas estratégicas de inmediato sin alterar la información original.',
          learningResult: 'Consultar y analizar el directorio mediante filtros y ordenamiento.',
          identification: { topic: 'Consultas', evidence: 'Vistas de Filtro', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Ruta de la Sesión',
          infographicSteps: [
            { title: '1. Activar Filtro', desc: 'Datos > Crear filtro' },
            { title: '2. Orden A-Z', desc: 'Por apellidos' },
            { title: '3. Filtrar Colonia', desc: 'Por zonas' },
            { title: '4. Filtrar Dispositivo', desc: 'Identificar necesidades' }
          ],
          development: 'Creación de vistas de filtro en el directorio del grupo. Consultas rápidas: orden alfabético por apellidos, filtrado de alumnos sin computadora en casa y agrupación por colonias.',
          closure: 'Evidencia en Docs con capturas de pantalla y análisis de 3 líneas.'
        },
        {
          id: 'S4', label: 'Sesión 04', subtitle: 'Jueves (2 hrs) · Fórmulas & Dashboard',
          start: '¿Cómo sintetizar la información de 40 estudiantes en un solo vistazo?',
          dictation: 'Un dashboard o panel de control reúne los indicadores más importantes de una base de datos mediante fórmulas matemáticas y gráficas ejecutivas, facilitando la toma de decisiones.',
          learningResult: 'Construir fórmulas estadísticas básicas y tarjetas de resumen.',
          identification: { topic: 'Métricas & Dashboard', evidence: 'Mini Dashboard', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Ruta de la Sesión',
          infographicSteps: [
            { title: '1. Fórmulas Base', desc: '=CONTAR y =PROMEDIO' },
            { title: '2. Máximos/Mínimos', desc: '=MAX y =MIN de edad' },
            { title: '3. Tarjetas KPI', desc: 'Resumen visual del grupo' },
            { title: '4. Gráfica Pastel', desc: 'Distribución de equipos' }
          ],
          development: 'Cálculo de métricas del salón: total de alumnos registrados, promedio de edad, conteo de dispositivos. Diseño de tarjetas visuales de resumen y gráfica circular de equipamiento.',
          closure: 'Mini dashboard funcional y documentado en la bitácora de Docs.'
        },
        {
          id: 'S5', label: 'Sesión 05', subtitle: 'Viernes (1 hr) · Auditoría & Evaluación',
          start: '¿Tu enlace se puede abrir desde cualquier dispositivo sin pedir contraseña?',
          dictation: 'La gestión de accesos y permisos es la última fase de la producción digital. Una entrega profesional debe asegurar que el destinatario tenga acceso de lectura inmediato sin fricciones.',
          learningResult: 'Auditar permisos públicos, entregar en Classroom y evaluar conceptos.',
          identification: { topic: 'Cierre y Auditoría', evidence: '100% Entregado', organization: 'Individual', location: 'Aula', time: '1 hr' },
          infographicTitle: 'Ruta de la Sesión',
          infographicSteps: [
            { title: '1. Permisos Docs', desc: 'Cualquier persona / Lector' },
            { title: '2. Permisos Sheets', desc: 'Acceso verificado' },
            { title: '3. Subir Classroom', desc: 'Publicar enlaces' },
            { title: '4. Kahoot Semanal', desc: 'Competencia técnica' }
          ],
          development: 'Comprobación de enlaces en ventana de incógnito. Entrega de vínculos en Google Classroom (tarea oficial). Aplicación del Kahoot semanal de afianzamiento sobre hojas de cálculo.',
          closure: 'Semana 04 calificada, sellos registrados en libreta y proyecto evaluado.'
        }
      ]
    }
  }
};
