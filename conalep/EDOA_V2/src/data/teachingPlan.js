import imgW06S01 from '../assets/w06_s01_infografia.png';
import imgW06S02 from '../assets/w06_s02_infografia.png';
import imgW06S03 from '../assets/w06_s03_infografia.png';
import imgW06S04 from '../assets/w06_s04_infografia.png';
import imgW03S01 from '../assets/w03_s01_infografia.png';
import imgW04S01 from '../assets/w04_s01_infografia.jpg';
import imgW04S02 from '../assets/w04_s02_infografia.jpg';
import imgW04S03 from '../assets/w04_s03_infografia.png';

import imgW05S01 from '../assets/w05_s01_infografia.jpg';

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
      dates: '10 Ago - 22 Sep 2026',
      captureDates: '21 al 22 Sep 2026',
      deadline: '22 Sep 2026',
      ras: [
        { id: 'RA_Diag', title: 'Diagnóstico e Inducción', peso: '0%', weeks: ['W00'] },
        { id: 'RA 1.1', title: 'Entorno Nube y Estilos Base', peso: '10%', weeks: ['W01'] },
        { id: 'RA 1.2', title: 'Formato Avanzado y Documentos', peso: '10%', weeks: ['W02'] },
        { id: 'RA 1.3', title: 'Automatización y Colaboración', peso: '10%', weeks: ['W03', 'W04', 'W05'] }
      ]
    },
    {
      id: 'C2',
      label: 'Segundo Corte',
      peso: '35%',
      dates: '23 Sep - 04 Nov 2026',
      captureDates: '03 al 04 Nov 2026',
      deadline: '04 Nov 2026',
      ras: [
        { id: 'RA 2.1', title: 'Fusión Masiva de Datos', peso: '15%', weeks: ['W06'] },
        { id: 'RA 2.2', title: 'Presentaciones Interactivas', peso: '20%', weeks: ['W07', 'W08', 'W09'] }
      ]
    },
    {
      id: 'C3',
      label: 'Tercer Corte',
      peso: '35%',
      dates: '05 Nov - 11 Dic 2026',
      captureDates: '10 al 11 Dic 2026',
      deadline: '11 Dic 2026',
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
          id: 'S1', label: 'Sesión 01', subtitle: 'Lunes (4 hrs) · Kahoot, Directorio & Fusión Masiva',
          start: '¿Cómo se multiplican cientos de documentos personalizados sin escribirlos uno por uno?',
          dictation: 'La combinación de correspondencia desacopla el diseño documental de la fuente de datos. Conocer los programas, complementos y metodologías disponibles en la industria es indispensable para seleccionar la herramienta adecuada según el volumen y la infraestructura tecnológica de la organización.',
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
          id: 'S3', label: 'Sesión 03', subtitle: 'Jueves (2 hrs) · Suspensión Institucional',
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
      status: 'historical',
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
      notices: [
        'Todo inicia desde Google Classroom y el documento maestro del RA 1.3.',
        'La evidencia se documenta en la pestaña Semana 04 de Google Docs.',
        'Las capturas deben mostrar claramente el avance técnico realizado.',
        'Las hojas de cálculo deben quedar con datos limpios, ordenados y legibles.'
      ],
      sessions: [
        {
          id: 'S1', label: 'Sesión 01', subtitle: 'Lunes (2 hrs) · Docs & Registro Base',
          unlockDate: '2026-09-07',
          unlockLabel: 'Lunes 7 de Septiembre, 15:00 hrs',
          start: '¿Cuál es la diferencia entre redactar un texto y estructurar una base de datos?',
          dictation: 'Una hoja de cálculo es una poderosa herramienta digital estructurada como una matriz bidimensional. Está organizada en filas (números) y columnas (letras). Su propósito principal no es solo almacenar texto, sino capturar, estructurar, calcular y analizar grandes volúmenes de datos numéricos y alfanuméricos mediante fórmulas. Además, la normalización de datos consiste en dividir la información en columnas con propósitos únicos y altamente específicos para evitar duplicidades, prevenir errores humanos y facilitar significativamente las búsquedas futuras.',
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
          unlockDate: '2026-09-07',
          unlockLabel: 'Lunes 7 de Septiembre, 15:00 hrs',
          start: '¿Cómo garantizamos que nadie escriba datos equivocados en una hoja compartida?',
          dictation: 'El diseño profesional en una hoja de cálculo tiene una función operativa: permite congelar paneles para evitar que la información clave se pierda de vista al desplazarse. Por otro lado, la "Validación de Datos" es una estricta regla de calidad que restringe la entrada de información a valores predeterminados (como menús desplegables), lo que erradica errores tipográficos, estandariza la escritura y permite que las fórmulas y filtros funcionen con 100% de precisión.',
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
          unlockDate: '2026-09-09',
          unlockLabel: 'Miércoles 9 de Septiembre, 15:00 hrs',
          start: '¿Filtrar datos significa que borramos lo que no vemos?',
          dictation: 'Filtrar información no significa eliminar datos; consiste en crear una vista temporal y dinámica que aísla visualmente los registros que cumplen con condiciones específicas. Por otro lado, la herramienta de ordenamiento reestructura todas las filas en secuencia alfanumérica. Ambas herramientas nos permiten responder preguntas operativas en segundos sin alterar ni dañar la base de datos original.',
          learningResult: 'Consultar y analizar el directorio mediante filtros y ordenamiento.',
          identification: { topic: 'Consultas', evidence: 'Vistas de Filtro', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Sesión 03 · Hora 5',
          infographicImage: imgW04S03,
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
          id: 'S4', label: 'Sesión 04', subtitle: 'Jueves (2 hrs) · Retos de Filtro Avanzado',
          unlockDate: '2026-09-10',
          unlockLabel: 'Jueves 10 de Septiembre, 15:00 hrs',
          start: '¿Cómo aplicas la lógica para combinar diferentes filtros a la vez?',
          dictation: 'El dominio de una base de datos no solo requiere conocer las herramientas, sino aplicar lógica condicional para aislar información precisa. Al combinar múltiples criterios (filtros simultáneos), exclusiones o búsquedas específicas de texto, podemos resolver escenarios complejos y extraer inteligencia operativa en tiempo récord, sin alterar el archivo original.',
          learningResult: 'Aplicar lógica de filtros combinados y ordenamiento múltiple.',
          identification: { topic: 'Filtros Avanzados', evidence: 'Capturas de Retos', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicImage: imgW04S03,
          infographicTitle: 'Retos Relámpago',
          infographicSteps: [
            { title: '1. Dob Condición', desc: 'Colonia + Dispositivo' },
            { title: '2. Orden Inverso', desc: 'Filtro + Orden Z-A' },
            { title: '3. Exclusión', desc: 'Desmarcar opciones' },
            { title: '4. Texto Específico', desc: 'Buscar apellidos' }
          ],
          development: `Cronograma Desglosado por Horas:

⏱️ HORA 1 (50m) · Kahoot de Evaluación Inicial:
• Proyección del PIN de Kahoot (20 preguntas técnicas sobre combinación de correspondencia, métodos ofimáticos y maquetación de plantillas).
• Registro de puntaje y retroalimentación grupal en libreta. (Sello 1)

⏱️ HORA 2 (50m) · Auditoría Forense del Directorio:
• Abrir Directorio_Grupo_301 en Google Sheets.
• Detección de campos nulos en Nombre, Apellidos, Colonia o Dispositivo.
• Aplicación de =NOMPROPIO() para estandarizar tipografía y verificación de calificaciones numéricas (Promedio).

⏱️ HORA 3 (50m) · Programación de Estatus Lógico (=SI):
• Inserción de la columna oficial Estatus.
• Programación de la fórmula: =SI(Promedio>=7.0, "Aprobado", "Reprobado").
• Configuración de regla de Formato Condicional automática (verde/rojo). (Sello 2)

⏱️ HORA 4 (50m) · Enlace y Fusión Masiva con Autocrat:
• Vincular la Plantilla_Expediente_Grupo301 de Google Docs.
• Mapeo estricto de las 5 etiquetas (<<Nombre>>, <<Apellidos>>, <<Colonia>>, <<Dispositivo>>, <<Estatus>>).
• Configuración de salida en Multiple Output Mode y ejecución (Run Job) generando +30 PDFs en Drive. (Sello 3)`,
          closure: 'Evidencias capturadas en Docs y comprensión sólida de las vistas.'
        },
        {
          id: 'S5', label: 'Sesión 05', subtitle: 'Viernes (1 hr) · Auditoría & Evaluación',
          unlockDate: '2026-09-11',
          unlockLabel: 'Viernes 11 de Septiembre, 15:00 hrs',
          start: '¿Tu enlace se puede abrir desde cualquier dispositivo sin pedir contraseña?',
          dictation: 'El ciclo de producción de un documento no concluye al terminar su diseño, sino al garantizar su correcta distribución. La auditoría estricta de permisos de acceso en la nube es una competencia profesional ineludible; el mejor trabajo del mundo pierde su valor si el cliente final se topa con un mensaje de "Acceso Denegado".',
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
      ]    },
    'W05': {
      id: 'W05',
      label: 'Semana 05',
      title: 'Fórmulas Estadísticas y Dashboards Visuales',
      dates: '14 Sep - 18 Sep',
      status: 'upcoming',
      presentationUrl: './html/W05.html',
      summary: 'Desarrollo de un Panel de Control (Dashboard) interactivo usando funciones estadísticas nativas, inserción de múltiples gráficos de datos y formateo condicional automático.',
      expectedProduct: 'Directorio ampliado con Panel de Fórmulas y 4 Gráficos dinámicos.',
      notices: [
        '¡Semana corta! Lunes, martes y miércoles están inactivos por festividades patrias.',
        'Solo contaremos con la sesión del Jueves para terminar el bloque técnico.',
        'El Viernes será exclusivo para captura y subida de calificaciones del SAE.'
      ],
      sessions: [
        {
          id: 'S1', label: 'Sesión 01', subtitle: 'Jueves (2 hrs) · Dashboard y Fórmulas',
          unlockDate: '2026-09-17',
          unlockLabel: 'Jueves 17 de Septiembre, 15:00 hrs',
          start: '¿Una tabla llena de texto sirve para tomar decisiones rápidas?',
          dictation: 'Un Dashboard transforma datos crudos en información visual altamente digerible. Al insertar gráficos dinámicos vinculados a fórmulas como promedios o sumas y aplicar formatos condicionales, la hoja de cálculo se convierte en una presentación ejecutiva que reacciona en vivo a cualquier cambio.',
          learningResult: 'Construir fórmulas estadísticas y maquetar gráficas dinámicas.',
          identification: { topic: 'Gráficos y Fórmulas', evidence: 'Dashboard Completo', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Dashboard Interactivo',
          infographicImage: imgW05S01,
          infographicSteps: [
            { title: '1. Aplica Fórmulas', desc: 'Calcula, analiza y automatiza con fórmulas.' },
            { title: '2. Crea Gráficos', desc: 'Visualiza la información de forma profesional.' },
            { title: '3. Formato Condicional', desc: 'Resalta lo importante de un vistazo.' },
            { title: '4. Dashboard final', desc: 'Organiza y presenta resultados claros.' }
          ],
          development: `**Instrucciones para el Alumno:**

1️⃣ **Preparar el Lienzo:** Abre tu archivo de Hojas de Cálculo ''Directorio Grupo 301'' (el que hiciste la semana pasada) e inserta 6 filas en blanco hasta arriba. Este será tu espacio para el Panel de Control (Dashboard).

2️⃣ **Panel de Fórmulas:** En esas nuevas celdas, calcula automáticamente los datos de tus compañeros usando: 
• =CONTARA (Total de registros)
• =PROMEDIO (Promedio de edad)
• =MAX y =MIN (El alumno más grande y el más chico)
• =CONTAR.SI (Cuántos hombres y cuántas mujeres hay).

3️⃣ **Panel de Gráficos:** Selecciona tus datos e inserta 4 gráficas (Pastel para Sexo, Barras para Edades, Anillo para Dispositivos y Columnas para Colonias). Acomódalas estéticamente debajo de tus fórmulas.

4️⃣ **Alertas Visuales:** Selecciona la columna de ''Dispositivos'' y ponle una regla de Formato Condicional para que se pinte de ROJO automáticamente si dice ''Ninguno''.

5️⃣ **Evidencia:** Toma capturas de tu Dashboard funcional y súbelas a tu bitácora de Google Docs.`,
          closure: 'Dashboard interactivo que cambia colores y gráficas en tiempo real.'
        },
        {
          id: 'S2', label: 'Sesión 02', subtitle: 'Viernes (1 hr) · Cierre de Corte y SAE',
          unlockDate: '2026-09-18',
          unlockLabel: 'Viernes 18 de Septiembre, 15:00 hrs',
          start: '¿Están listas tus evidencias para la evaluación oficial?',
          dictation: 'El cierre de un ciclo técnico exige una auditoría rigurosa. En esta sesión validaremos que todas las evidencias del Primer Corte estén correctamente almacenadas y compartidas. El trabajo no entregado correctamente carece de valor.',
          learningResult: 'Revisión de promedios, regularización y Kahoot.',
          identification: { topic: 'Evaluación SAE', evidence: 'Calificaciones Firmadas', organization: 'Individual', location: 'Aula', time: '1 hr' },
          infographicTitle: 'Cierre de Corte',
          infographicSteps: [
            { title: '1. Auditoría', desc: 'Revisión de portafolios' },
            { title: '2. Kahoot', desc: 'Repaso gigante del bloque' },
            { title: '3. Regularización', desc: 'Ponerse al corriente' },
            { title: '4. Promedios', desc: 'Firma de calificaciones' }
          ],
          development: 'Sesión de trabajo autónomo para los alumnos: revisión de calificaciones, regularización y Kahoot de fin de bloque. El docente emplea el tiempo para promediar, capturar y subir calificaciones oficiales al sistema SAE.',
          closure: 'Corte 1 finalizado, actas firmadas y calificaciones en sistema.'
        }
      ]
    },
    'W06': {
      id: 'W06',
      label: 'Semana 06',
      title: 'Fusión Masiva de Datos y Auditoría Digital',
      dates: '21 Sep - 25 Sep',
      status: 'historical',
      presentationUrl: './html/W06.html',
      summary: 'Combinación de correspondencia por lotes (Google Docs + Sheets con Autocrat), dilemas éticos sobre reputación algorítmica y evaluación del RA 2.1.',
      expectedProduct: 'Carpeta en Google Drive con más de 30 expedientes/constancias en PDF generados automáticamente.',
      notices: [
        'Inicio formal del RA 2.1: Fusión Masiva de Datos.',
        'Las 4 sesiones cuentan con infografía técnica y ruta clara de trabajo.',
        'El viernes concluye el resultado de aprendizaje con el Kahoot semanal y cierre de portafolio.'
      ],
      sessions: [
        {
          id: 'S1', label: 'Sesión 01', subtitle: 'Lunes (4 hrs) · Kahoot, Directorio & Fusión Masiva',
          unlockDate: '2026-09-21',
          unlockLabel: 'Lunes 21 de Septiembre, 15:00 hrs',
          start: '¿Cómo se multiplican cientos de documentos personalizados sin escribirlos uno por uno?',
          dictation: 'La combinación de correspondencia desacopla el diseño documental de la fuente de datos. Conocer los programas, complementos y metodologías disponibles en la industria es indispensable para seleccionar la herramienta adecuada según el volumen y la infraestructura tecnológica de la organización.',
          learningResult: 'Analizar el perfilamiento algorítmico y maquetar una plantilla institucional con variables en Google Docs.',
          identification: { topic: 'Ética y Plantilla Base', evidence: 'Plantilla Maestra Docs', organization: 'Individual / Parejas', location: 'Laboratorio', time: '4 hrs' },
          infographicTitle: 'Ética de Datos y Maquetación Documental',
          infographicImage: imgW06S01,
          infographicSteps: [
            { title: '1. Reputación Digital', desc: 'Tu identidad y huella también cuentan.' },
            { title: '2. Debate Ético', desc: 'Analiza, reflexiona y argumenta sobre datos personales.' },
            { title: '3. Maqueta tu Documento', desc: 'Diseño profesional y funcional con retículas y tablas.' },
            { title: '4. Combina y Genera', desc: 'Inyección de etiquetas dinámicas <<Variables>>.' }
          ],
          development: `Cronograma Desglosado por Horas:

⏱️ HORA 1 (50m) · Kahoot de Evaluación Inicial:
• Proyección del PIN de Kahoot (20 preguntas técnicas sobre combinación de correspondencia, métodos ofimáticos y maquetación de plantillas).
• Registro de puntaje y retroalimentación grupal en libreta. (Sello 1)

⏱️ HORA 2 (50m) · Auditoría Forense del Directorio:
• Abrir Directorio_Grupo_301 en Google Sheets.
• Detección de campos nulos en Nombre, Apellidos, Colonia o Dispositivo.
• Aplicación de =NOMPROPIO() para estandarizar tipografía y verificación de calificaciones numéricas (Promedio).

⏱️ HORA 3 (50m) · Programación de Estatus Lógico (=SI):
• Inserción de la columna oficial Estatus.
• Programación de la fórmula: =SI(Promedio>=7.0, "Aprobado", "Reprobado").
• Configuración de regla de Formato Condicional automática (verde/rojo). (Sello 2)

⏱️ HORA 4 (50m) · Enlace y Fusión Masiva con Autocrat:
• Vincular la Plantilla_Expediente_Grupo301 de Google Docs.
• Mapeo estricto de las 5 etiquetas (<<Nombre>>, <<Apellidos>>, <<Colonia>>, <<Dispositivo>>, <<Estatus>>).
• Configuración de salida en Multiple Output Mode y ejecución (Run Job) generando +30 PDFs en Drive. (Sello 3)`,
          closure: 'Plantilla de Docs guardada en Drive con todas las etiquetas listas para vincular.'
        },
        {
          id: 'S2', label: 'Sesión 02', subtitle: 'Miércoles (1 hr) · Normalización & Motor',
          unlockDate: '2026-09-23',
          unlockLabel: 'Miércoles 23 de Septiembre, 15:00 hrs',
          start: '¿Un dato mal escrito en la base de datos arruinará cientos de documentos?',
          dictation: 'La integridad de un proceso de fusión depende directamente de la calidad estructural de la base de datos de origen. Cualquier discrepancia en mayúsculas, espacios invisibles o celdas vacías se replicará exponencialmente en los documentos finales. Mediante funciones lógicas y de texto se normaliza la información antes de activar el motor de procesamiento por lotes.',
          learningResult: 'Normalizar datos con fórmulas y configurar el complemento Autocrat.',
          identification: { topic: 'Calidad de Datos & Add-on', evidence: 'Job de Autocrat configurado', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Normalización de Datos y Motor de Fusión',
          infographicImage: imgW06S02,
          infographicSteps: [
            { title: '1. Limpia y Normaliza', desc: 'Corrige mayúsculas y espacios con =NOMPROPIO.' },
            { title: '2. Evalúa con Lógica', desc: 'Usa fórmulas =SI para clasificar información.' },
            { title: '3. Automatiza con Autocrat', desc: 'Conecta tu hoja de cálculo y prepara el Job.' }
          ],
          development: `Instrucciones de la Sesión:

1️⃣ Auditoría con Fórmulas: Abrir Directorio de Sheets y aplicar =NOMPROPIO() para estandarizar nombres.
2️⃣ Columna de Estatus: Crear columna evaluada con la función lógica =SI(Edad>=16, "Acreditado", "En Observación").
3️⃣ Preparación de Autocrat: Instalar el complemento, crear nuevo Job y enlazar la plantilla de Google Docs.`,
          closure: 'Base de datos limpia y trabajo de Autocrat guardado en borrador para la fusión.'
        },
        {
          id: 'S3', label: 'Sesión 03', subtitle: 'Jueves (2 hrs) · Suspensión Institucional',
          unlockDate: '2026-09-24',
          unlockLabel: 'Jueves 24 de Septiembre, 15:00 hrs',
          start: '¿Es posible generar 30 o 50 contratos oficiales en menos de dos minutos?',
          dictation: 'El mapeo de campos establece la correspondencia exacta entre las variables de la plantilla y los encabezados de la hoja de cálculo. En entornos corporativos, la parametrización de nombres de archivo dinámicos y la segmentación por condiciones lógicas permiten generar miles de documentos independientes en la nube sin requerir almacenamiento físico local.',
          learningResult: 'Ejecutar la combinación por lotes en PDF y auditar carpetas compartidas.',
          identification: { topic: 'Procesamiento Masivo', evidence: 'Carpeta con +30 PDFs en Drive', organization: 'Individual / Coevaluación', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Fusión Masiva y Auditoría Digital',
          infographicImage: imgW06S03,
          infographicSteps: [
            { title: '1. Mapea los Campos', desc: 'Conecta tus datos de Sheets con la plantilla Docs.' },
            { title: '2. Genera en Lote', desc: 'De un clic, decenas de documentos PDF en Drive.' },
            { title: '3. Revisa y Audita', desc: 'Auditoría entre pares para verificar calidad visual.' },
            { title: '4. Entrega en Drive', desc: 'Enlace público configurado y entrega en Classroom.' }
          ],
          development: `Aviso Institucional:

Sesión no impartida debido a la participación del grupo en la actividad matutina escolar del plantel.

La instalación de Autocrat y la combinación de correspondencia masiva se realizarán en el bloque de 4 horas del lunes de la Semana 07.`,
          closure: 'Carpeta con todos los PDFs individuales compartida y entregada oficialmente.'
        },
        {
          id: 'S4', label: 'Sesión 04', subtitle: 'Viernes (1 hr) · Evaluación & Cierre RA',
          unlockDate: '2026-09-25',
          unlockLabel: 'Viernes 25 de Septiembre, 15:00 hrs',
          start: '¿Qué tan sólido es tu conocimiento sobre combinación de correspondencia?',
          dictation: 'El cierre de un resultado de aprendizaje valida tanto las habilidades procedimentales como la comprensión conceptual de los flujos de automatización digital. La evaluación técnica y la auditoría de portafolios certifican que el alumno es capaz de implementar soluciones de productividad con estándares de la industria.',
          learningResult: 'Completar la evaluación de 20 preguntas y acreditar el RA 2.1.',
          identification: { topic: 'Evaluación y Calificaciones', evidence: 'Kahoot 20 reactivos & Portafolio', organization: 'Individual', location: 'Aula', time: '1 hr' },
          infographicTitle: 'Evaluación y Auditoría de Resultados',
          infographicImage: imgW06S04,
          infographicSteps: [
            { title: '1. Evaluación en Kahoot', desc: 'Demuestra tu dominio técnico con 20 preguntas.' },
            { title: '2. Revisión de Notas', desc: 'Audita tus resultados y califica tu avance del RA 2.1.' },
            { title: '3. Portafolio y Cierre', desc: 'Entrega final y resguardo de evidencia oficial.' }
          ],
          development: `Instrucciones de la Sesión:

1️⃣ Kahoot de Retención: Desafío grupal de 20 preguntas técnicas sobre combinación, fórmulas y ética digital.
2️⃣ Revisión Docente: Registro de calificaciones y firma de actas de acreditación del RA 2.1.
3️⃣ Regularización: Atención a alumnos con casos especiales o pendientes en la entrega de su carpeta.`,
          closure: 'RA 2.1 acreditado al 100%, evidencias archivadas y sellos asentados.'
        }
      ]
    },
    'W07': {
      id: 'W07',
      label: 'Semana 07',
      title: 'Normalización de Datos y Fusión Masiva en la Nube',
      dates: '28 Sep - 02 Oct',
      status: 'active',
      presentationUrl: './html/W07.html',
      summary: 'Implementación práctica del Método 1 (Google Docs + Sheets + Autocrat), normalización de datos con fórmula =SI y generación de +30 PDFs en Drive.',
      expectedProduct: 'Directorio finalizado con fórmula =SI y carpeta de Drive con más de 30 expedientes individuales en PDF.',
      notices: [
        'Materialización práctica de la investigación realizada en la Semana 06.',
        'Se completará el Directorio del Grupo 301 con calificaciones y la fórmula condicional =SI.',
        'Ejecución masiva con Autocrat y auditoría de permisos públicos en Google Drive.'
      ],
      sessions: [
        {
          id: 'S1', label: 'Sesión 01', subtitle: 'Lunes (4 hrs) · Kahoot, Directorio & Fusión Masiva',
          unlockDate: '2026-09-28',
          unlockLabel: 'Lunes 28 de Septiembre, 15:00 hrs',
          start: '¿Cómo automatizamos la decisión de quién aprueba o reprueba a partir de sus notas?',
          dictation: 'Antes de ejecutar un proceso de automatización por lotes, es imperativo garantizar la integridad y completitud de la base de datos de origen. La función lógica condicional permite que la hoja de cálculo evalúe parámetros cuantitativos como el promedio y asigne de forma autónoma una categoría cualitativa, eliminando el error humano.',
          learningResult: 'Completar el directorio con la fórmula =SI y generar +30 PDFs con Autocrat.',
          identification: { topic: 'Fórmula =SI & Autocrat', evidence: 'Directorio + Fusión Masiva', organization: 'Individual', location: 'Laboratorio', time: '4 hrs' },
          infographicTitle: 'Normalización y Fusión Masiva',
          infographicSteps: [
            { title: '1. Audita el Directorio', desc: 'Verifica que no haya celdas vacías en ninguna columna.' },
            { title: '2. Aplica la Fórmula =SI', desc: 'Asigna automáticamente Aprobado o Reprobado según el promedio.' },
            { title: '3. Enlaza con Autocrat', desc: 'Conecta la plantilla de Docs con los datos de Sheets.' },
            { title: '4. Genera tus PDFs', desc: 'Ejecuta la combinación por lotes en Google Drive.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · LUNES (4 HORAS)
Metodología: Demo Guiada (2-3 min) ➔ Retos Autónomos en PC (10-15 min) ➔ Auditoría

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 1 (50 min) · Evaluación Inicial (Kahoot S06) y Encuadre
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO (Apertura al entrar):
"Muchachos, imaginen que son directores de admisiones de la UNAM y tienen que emitir 50,000 cartas de aceptación personalizadas este viernes. ¿Contratarían a 100 personas para escribir una por una en Word, o diseñarían un algoritmo de 3 clics? Hoy demostraremos quién domina los conceptos antes de tocar la base de datos."

💡 DATO CURIOSO:
En 1888 nació la correspondencia masiva mecánica en la empresa Addressograph usando planchas de metal. Tardaban semanas en lo que hoy nosotros haremos en 45 segundos en la nube.

🖥️ DEMO EN CAÑÓN (2 min):
Proyectar el PIN de Kahoot (20 reactivos sobre correspondencia, software y maquetación). Ingreso obligatorio con Primer Apellido y Primer Nombre.

💻 RETO 0 (25 min en Dispositivos):
Resolver la prueba de 20 preguntas con rigor técnico. Podio a los 3 primeros lugares.

🏷️ EVIDENCIA Y SELLO:
Dictar en libreta: "Evaluación diagnóstica Semana 07: Convalida los fundamentos de combinación de correspondencia, métodos ofimáticos y maquetación de plantillas." Anotar puntaje. 👉 SELLO 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 2 (50 min) · Auditoría Forense y Normalización del Directorio
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"En informática forense existe la regla GIGO: Garbage In, Garbage Out. Si a un sistema le metes datos basura, te va a escupir 30 documentos basura en PDF. Si el nombre de Juan está todo en minúsculas o a María le falta la colonia, el expediente oficial saldrá incompleto y no tendrá validez legal."

💡 ANÉCDOTA DEL MUNDO REAL:
En 2019 una aerolínea británica imprimió 2,000 pases con el texto 'NULL' en el asiento por culpa de celdas vacías. Los pasajeros no pudieron volar y la empresa perdió millones en demandas. Hoy seremos cirujanos de datos.

🖥️ DEMO 1 (3 min): Detección de campos nulos y sintaxis de =NOMPROPIO() para homogeneizar nombres.
💻 RETO 1 (15 min en PC): Auditar Directorio_Grupo_301, quitar celdas vacías y normalizar nombres en mayúsculas/minúsculas.

🖥️ DEMO 2 (2 min): Configuración de la columna Promedio en formato número con 1 decimal.
💻 RETO 2 (15 min en PC): Completar el 100% de calificaciones numéricas sin que falte ni una.

🏷️ EVIDENCIA: Hoja de cálculo limpia, sin celdas vacías y con tipografía uniforme.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 3 (50 min) · Lógica Condicional (=SI) y Semáforos Visuales
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Le daremos cerebro a la hoja de cálculo: la computadora leerá la nota de cada alumno y decidirá sola quién aprueba sin intervención humana. Cero favoritismos: pura lógica algorítmica."

💡 DATO FILOSÓFICO / TECNOLÓGICO:
George Boole formuló la lógica condicional en 1847. Toda la inteligencia artificial moderna, los algoritmos de redes sociales y los bancos funcionan bajo este mismo principio.

🖥️ DEMO 3 (3 min): Sintaxis en el cañón: =SI(Promedio >= 7.0, "Aprobado", "Reprobado").
💻 RETO 3 (15 min en PC): Crear columna Estatus, programar la fórmula =SI y arrastrarla a todo el grupo.

🖥️ DEMO 4 (2 min): Formato Condicional (Verde suave para Aprobado, Rojo suave para Reprobado).
💻 RETO 4 (15 min en PC): Aplicar semaforización automática a toda la columna Estatus.

🏷️ EVIDENCIA Y SELLO: Alumno muestra pantalla con la columna calculada y semaforizada. 👉 SELLO 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 4 (50 min) · Enlace Mapeado y Fusión Masiva con Autocrat
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Llegó el momento cumbre: presionaremos el botón rojo y verán a los servidores de Google generar +30 PDFs sin tocar el teclado."

🖥️ DEMO 5 (3 min): Abrir Autocrat (Extensiones ➔ Autocrat ➔ Launch) y vincular Plantilla_Expediente_Grupo301.
💻 RETO 5 (15 min en PC): Mapear estrictamente las 5 etiquetas (<<Nombre>>, <<Apellidos>>, <<Colonia>>, <<Dispositivo>>, <<Estatus>>).

🖥️ DEMO 6 (2 min): Nomenclatura Expediente_<<Apellidos>>_<<Nombre>> en modo Multiple Output (PDF).
💻 RETO 6 (20 min en PC): Ejecutar Run Job, supervisar la generación en Google Drive y corregir incidencias.

🏷️ EVIDENCIA Y SELLO: Carpeta de Google Drive con los 30+ PDFs generados en vivo. 👉 SELLO 3`,
          closure: 'Base de datos normalizada con fórmulas y lote de expedientes en PDF generado.'
        },
        {
          id: 'S2', label: 'Sesión 02', subtitle: 'Miércoles (2 hrs) · Auditoría & Entrega Classroom',
          unlockDate: '2026-09-30',
          unlockLabel: 'Miércoles 30 de Septiembre, 15:00 hrs',
          start: '¿Tus documentos generados cumplen con todos los estándares profesionales?',
          dictation: 'Un flujo automatizado no concluye con la ejecución del script; requiere una fase crítica de control de calidad. Al comparar el método en la nube frente a los métodos locales investigados, analizaremos ventajas operativas en términos de colaboración, almacenamiento centralizado y accesibilidad.',
          learningResult: 'Auditar entre pares 3 documentos generados al azar.',
          identification: { topic: 'Control de Calidad', evidence: 'Auditoría entre Pares', organization: 'Parejas', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Auditoría y Control de Calidad',
          infographicSteps: [
            { title: '1. Intercambio', desc: 'Audita 3 PDFs generados por un compañero.' },
            { title: '2. Checklist Visual', desc: 'Verifica que no haya etiquetas sin sustituir.' },
            { title: '3. Corrección', desc: 'Reejecuta la fusión si se detectaron desajustes.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · MIÉRCOLES (2 HORAS)
Metodología: Demo Guiada (2-3 min) ➔ Retos Autónomos en PC (10-15 min) ➔ Auditoría

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 5 (50 min) · Auditoría Forense entre Pares (Control de Calidad)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO (Apertura al entrar):
"Muchachos, en la industria del software ningún programador audita su propio código porque padece de 'ceguera de taller'. Hoy intercambiaremos lugares de trabajo: seremos auditores externos implacables buscando fallas de maquetación en el trabajo del colega antes de que llegue a manos de las autoridades."

💡 ANÉCDOTA FORENSE (El Error Millonario):
En 1962, la sonda espacial Mariner 1 de la NASA tuvo que ser destruida a los 293 segundos de despegar porque un programador omitió una simple barra sobre una letra en el código de cálculo manual. Costó 18 millones de dólares. Un error minúsculo en un documento oficial arruina todo el proyecto.

🖥️ DEMO EN CAÑÓN (3 min):
Proyectar el Checklist de 3 puntos: 1) Cero etiquetas rotas (<< >>), 2) Ajuste estricto a 1 sola hoja sin páginas en blanco, 3) Coincidencia de promedio y estatus.

💻 RETO 7 (15 min en PC):
Intercambiar equipo con el compañero de al lado. Abrir 3 PDFs generados al azar y anotar el dictamen de auditoría en la libreta del compañero.

💻 RETO 8 (15 min en PC):
Regresar a su máquina. Si el auditor encontró errores de formato, corregir la plantilla de Docs o la celda en Sheets y reejecutar Autocrat de inmediato.

🏷️ EVIDENCIA Y SELLO:
Lista de cotejo firmada en libreta y lote de PDFs verificado al 100%. 👉 SELLO 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 6 (50 min) · Seguridad Nube y Entrega Oficial en Classroom
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"De nada sirve haber generado los documentos más profesionales del estado de Hidalgo si cuando su cliente o docente abre el enlace, la pantalla le dice: 'Acceso Denegado / Solicita Permiso'. Hoy configuraremos privilegios de red y cerraremos la entrega oficial en Google Classroom."

🖥️ DEMO 1 (3 min):
En Google Drive, cambiar acceso general de la carpeta a: "Cualquier persona que tenga el vínculo (Lector)". La prueba de fuego: Probar el enlace en una ventana privada de incógnito.

💻 RETO 9 (15 min en PC):
Configurar la carpeta de Google Drive como pública en modo Lector y validar que abra en ventana de incógnito sin pedir cuenta.

🖥️ DEMO 2 (2 min):
Formato ejecutivo de la bitácora en Google Docs (capturas de pantalla con pie de figura) y entrega en Classroom.

💻 RETO 10 (15 min en PC):
Pegar el enlace público verificado en la tarea asignada de Google Classroom, adjuntar la bitácora con capturas y presionar Entregar Tarea.

🏷️ EVIDENCIA Y SELLO:
Pantalla de Google Classroom con la tarea entregada y enlace verificado. 👉 SELLO 5
Aviso docente: Mañana jueves no hay sesión presencial por comisión sindical; el viernes cerramos con el Kahoot final y calificaciones oficiales.`,
          closure: 'Expedientes verificados sin vicios de origen.'
        },
        {
          id: 'S3', label: 'Sesión 03', subtitle: 'Jueves (2 hrs) · Sin Actividades (Permiso Sindical)',
          unlockDate: '2026-10-01',
          unlockLabel: 'Jueves 1 de Octubre, 15:00 hrs',
          start: '¿Cómo garantizar que un cliente o directivo pueda consultar tus archivos sin contraseñas?',
          dictation: 'La distribución de documentos masivos en entornos profesionales exige una gestión estricta de privilegios de acceso. Un repositorio en la nube con permisos mal configurados anula la efectividad del proceso de automatización. El reporte de evidencia consolida la memoria técnica del flujo desarrollado.',
          learningResult: 'Configurar permisos de lectura en Drive y entregar la tarea en Classroom.',
          identification: { topic: 'Nube y Entrega', evidence: 'Carpeta pública en Classroom', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Gestión en la Nube y Entrega',
          infographicSteps: [
            { title: '1. Permisos en Drive', desc: 'Configura la carpeta como Cualquier persona con el enlace (Lector).' },
            { title: '2. Bitácora de Evidencia', desc: 'Inserta capturas de la fórmula =SI y del proceso de Autocrat.' },
            { title: '3. Entrega Oficial', desc: 'Sube el enlace verificado a Google Classroom.' }
          ],
          development: `⚠️ AVISO INSTITUCIONAL · JUEVES (SIN ACTIVIDADES PRESENCIALES)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ SESIÓN 03 (JUEVES) · COMISIÓN Y PERMISO SINDICAL DOCENTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ INDICACIÓN PARA EL GRUPO:
Sesión presencial no impartida por permiso y comisión oficial docente de carácter sindical.

💻 ACTIVIDAD AUTÓNOMA DE REGULARIZACIÓN:
Los alumnos que hayan tenido pendientes en la entrega de su carpeta o bitácora el día miércoles deberán aprovechar estas dos horas de forma autónoma para concluir sus archivos y regularizar su entrega en Google Classroom antes del cierre definitivo del viernes.`,
          closure: 'Carpeta compartida y bitácora entregada en Classroom.'
        },
        {
          id: 'S4', label: 'Sesión 04', subtitle: 'Viernes (1 hr) · Kahoot Final & Cierre RA 2.1',
          unlockDate: '2026-10-02',
          unlockLabel: 'Viernes 2 de Octubre, 15:00 hrs',
          start: '¿Concluiste satisfactoriamente todas las evidencias del RA 2.1?',
          dictation: 'El cierre de un resultado de aprendizaje valida tanto las habilidades procedimentales como la comprensión conceptual de los flujos de automatización digital. La evaluación técnica y la auditoría de portafolios certifican que el alumno es capaz de implementar soluciones ofimáticas profesionales.',
          learningResult: 'Acreditar el RA 2.1 y registrar calificaciones en listas oficiales.',
          identification: { topic: 'Acreditación y Cierre', evidence: 'Portafolio Completo RA 2.1', organization: 'Individual', location: 'Aula', time: '1 hr' },
          infographicTitle: 'Acreditación del RA 2.1',
          infographicSteps: [
            { title: '1. Auditoría Docente', desc: 'Revisión final de enlaces y sellos en Classroom.' },
            { title: '2. Firma de Actas', desc: 'Registro de puntajes oficiales del resultado.' },
            { title: '3. Encuadre RA 2.2', desc: 'Introducción a presentaciones electrónicas avanzadas.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · VIERNES (1 HORA)
Metodología: Kahoot Sumativo + Auditoría de Sellos + Asentamiento de Calificaciones

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 7 (50 min) · Kahoot Final y Acreditación del RA 2.1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO (Apertura al entrar):
"Muchachos, hoy cerramos oficialmente el Resultado de Aprendizaje 2.1. Concluyeron la base de datos, dominaron fórmulas condicionales y generaron documentos en lote en la nube. Hoy jugamos el Kahoot final para demostrar el dominio técnico del bloque y asentar sus calificaciones oficiales."

🖥️ DEMO EN CAÑÓN (2 min):
Proyectar el PIN del Kahoot Oficial del RA 2.1 (20 reactivos sobre todo el flujo: fórmulas, etiquetas, Autocrat y permisos de nube).

💻 RETO FINAL (25 min en Dispositivos):
Resolver la evaluación sumativa en dispositivos. Podio de ganadores y premiación simbólica.

🏷️ CIERRE Y ASENTAMIENTO OFICIAL (20 min):
Cotejo de los 5 sellos acumulados en la semana y asentamiento de calificaciones oficiales del RA 2.1 en listas de control escolar.
Encuadre del RA 2.2: Presentaciones Electrónicas Interactivas.`,
          closure: 'RA 2.1 acreditado al 100% y ciclo cerrado.'
        }
      ]
    }
  }
};
