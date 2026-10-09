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
        { id: 'RA 2.1', title: 'Fusión Masiva de Datos', peso: '20%', weeks: ['W06', 'W07', 'W08'] },
        { id: 'RA 2.2', title: 'Presentaciones Interactivas', peso: '15%', weeks: ['W09'] }
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
      title: 'Investigación de Gráficas, 3 Cortes, Semáforo Tricolor y Fusión Masiva',
      dates: '28 Sep - 02 Oct',
      status: 'active',
      presentationUrl: './html/W07.html',
      summary: 'Investigación en computadora de tipos de gráficas estadísticas, consolidación de los 3 cortes de evaluación, formato condicional tricolor (<60, 60-80, >80), normalización con =NOMPROPIO y fusión masiva con Autocrat.',
      expectedProduct: 'Directorio con fórmula de 3 cortes y semáforo tricolor, carpeta en Drive con +30 expedientes en PDF y entrega en Classroom.',
      notices: [
        'Lunes: Kahoot inicial, investigación en computadora de 5 tipos de gráficas, fórmula de suma de los 3 cortes y semáforo tricolor (<60 rojo, 60-80 amarillo, >80 verde).',
        'Miércoles: Normalización forense con =NOMPROPIO(), fusión masiva con Autocrat (+30 PDFs en Drive), permisos públicos y entrega oficial en Classroom.',
        'Jueves: Sin actividades presenciales por comisión oficial sindical del docente.'
      ],
      sessions: [
        {
          id: 'S1', label: 'Sesión 01', subtitle: 'Lunes (4 hrs) · Gráficas en PC, Fórmulas de Cortes & Semáforo Tricolor',
          unlockDate: '2026-09-28',
          unlockLabel: 'Lunes 28 de Septiembre, 15:00 hrs',
          start: '¿Cómo estructurar datos y visualizarlos gráficamente para evaluar el desempeño académico?',
          dictation: 'La representación gráfica y la parametrización cuantitativa son esenciales para la toma de decisiones. Mientras que los 5 tipos esenciales de gráficas permiten comunicar tendencias y distribuciones, la estructura de evaluación en tres cortes acumulativos permite determinar la calificación total mediante fórmulas matriciales (=SUMA) y alertas visuales tricolor (<60 rojo, 60-80 amarillo, >80 verde).',
          learningResult: 'Investigar en computadora 5 tipos de gráficas, calcular el total de los 3 cortes y aplicar semaforización tricolor.',
          identification: { topic: 'Gráficas, Cortes & Semáforo', evidence: 'Investigación PC + Hoja Semáforo Tricolor', organization: 'Individual', location: 'Laboratorio', time: '4 hrs' },
          infographicTitle: 'Visualización, Fórmulas y Semáforos',
          infographicSteps: [
            { title: '1. Kahoot Inicial', desc: 'Evaluación de correspondencia y maquetación de plantillas.' },
            { title: '2. Investigación en PC', desc: 'Investiga barras, columnas, pastel, histograma y líneas con definición, uso e imagen.' },
            { title: '3. Suma de 3 Cortes', desc: 'Calcula el total acumulado con la fórmula =SUMA(Corte1:Corte3).' },
            { title: '4. Semáforo Tricolor', desc: 'Aplica formato condicional: <60 rojo, 60-80 amarillo, >80 verde.' }
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
⏱️ HORA 2 (50 min) · Investigación Técnica en Computadora (5 Tipos de Gráficas)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"En la toma de decisiones empresariales nadie lee sábanas de números crudos. Si le presentan una tabla de 500 filas al director general, los despide; si le presentan una gráfica visual de impacto, autoriza el presupuesto en 2 minutos. Hoy investigaremos en sus computadoras los 5 pilares de la visualización de datos."

💡 DATO HISTÓRICO:
En 1858 Florence Nightingale salvó miles de vidas al inventar una gráfica circular (diagrama de área polar) que convenció al parlamento británico de invertir en sanidad militar.

🖥️ DEMO EN CAÑÓN (3 min):
Estructura obligatoria para cada una de las 5 gráficas:
1) Gráfica de Barras (categorías horizontales)
2) Gráfica de Columnas (comparación vertical)
3) Gráfica de Pastel / Circular (proporciones de un 100%)
4) Histograma (distribución de frecuencias y rangos)
5) Gráfica de Líneas (tendencias continuas)
Requisitos: Definición técnica, casos de uso empresarial/escolar e imagen ilustrativa.

💻 RETO 1 (35 min en PC):
Investigar en el navegador de la computadora los 5 tipos de gráficas estadísticas recopilando definición, aplicación práctica e imagen de ejemplo.

🏷️ EVIDENCIA: Pantalla de la computadora con las 5 gráficas investigadas y documentadas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 3 (50 min) · Estructura de los 3 Cortes y Fórmula de Suma Total
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Hasta este momento, la hoja de cálculo ha sido una simple libreta digital bonita. En esta hora le daremos cerebro matemático propio. El modelo de evaluación CONALEP no se calcula al azar: se compone de 3 cortes acumulativos. Vamos a programar la fórmula algorítmica que consolide los tres parciales para obtener la calificación total definitiva de cada estudiante."

💡 DATO FILOSÓFICO Y TECNOLÓGICO:
En 1979 VisiCalc transformó la economía mundial al permitir que al modificar un solo número, toda una matriz de miles de filas se recalculara automáticamente en milisegundos.

🖥️ DEMO 3 (3 min): Columnas Corte 1, Corte 2, Corte 3 y Calificación Total. Modelar la fórmula matricial: =SUMA(F2:H2).
💻 RETO 3 (15 min en PC): Integrar columnas de cortes, capturar valores de 0 a 100, programar =SUMA() y arrastrar verticalmente a todo el grupo.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 4 (50 min) · Formato Condicional Tricolor
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"En la industria y en las direcciones corporativas los directores no tienen tiempo de leer 500 números: necesitan tomar decisiones en 3 segundos a golpe de vista. Hoy convertiremos su hoja de cálculo en un tablero de control con semáforos ejecutivos tricolor."

🖥️ DEMO 4 (3 min):
Menú Formato ➔ Formato condicional:
1) Menor que 60 ➔ Fondo Rojo suave (#F8D7DA).
2) Está entre 60 y 80 ➔ Fondo Amarillo suave (#FFF3CD).
3) Mayor que 80 ➔ Fondo Verde suave (#D4EDDA).

💻 RETO 4 (15 min en PC):
Aplicar las 3 reglas condicionales a la columna total y realizar prueba reactiva de cambio de notas.

🏷️ EVIDENCIA Y SELLO:
Pantalla con hoja de cálculo, fórmulas de cortes calculadas y columna semaforizada en los 3 colores. 👉 SELLO 2
Aviso docente: La función =NOMPROPIO() la modelaremos el miércoles en la Hora 5 antes de presionar el botón de Autocrat.`,
          closure: 'Investigación de gráficas concluida en PC, fórmula de suma de cortes activa y semáforo tricolor configurado.'
        },
        {
          id: 'S2', label: 'Sesión 02', subtitle: 'Miércoles (2 hrs) · Normalización =NOMPROPIO, Autocrat & Classroom',
          unlockDate: '2026-09-30',
          unlockLabel: 'Miércoles 30 de Septiembre, 15:00 hrs',
          start: '¿Cómo normalizar nombres desordenados y fusionar datos en expedientes oficiales en PDF?',
          dictation: 'La función =NOMPROPIO garantiza que los nombres y apellidos cumplan con la ortotipografía formal antes de ser inyectados en documentos legales. La combinación masiva de correspondencia mediante Autocrat vincula estas bases de datos saneadas con plantillas de Google Docs para generar en segundos decenas de expedientes en PDF con permisos corporativos en la nube.',
          learningResult: 'Aplicar =NOMPROPIO(), vincular plantilla, ejecutar Autocrat (+30 PDFs), configurar permisos públicos en Google Drive y entregar bitácora en Classroom.',
          identification: { topic: 'NOMPROPIO, Autocrat & Nube', evidence: '+30 PDFs en Drive + Entrega Classroom', organization: 'Individual / Parejas', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Normalización, Fusión Masiva y Entrega',
          infographicSteps: [
            { title: '1. Función =NOMPROPIO', desc: 'Convierte textos desordenados a mayúscula inicial limpia.' },
            { title: '2. Fusión Autocrat', desc: 'Mapea etiquetas y genera los +30 PDFs en Drive.' },
            { title: '3. Permisos Públicos', desc: 'Configura acceso Lector y prueba en modo incógnito.' },
            { title: '4. Entrega Classroom', desc: 'Adjunta bitácora con capturas y link público verificado.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · MIÉRCOLES (2 HORAS)
Metodología: Demo Guiada (2-3 min) ➔ Retos Autónomos en PC (10-15 min) ➔ Auditoría

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 5 (50 min) · Normalización =NOMPROPIO() y Fusión Masiva Autocrat
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO (Apertura al entrar):
"Muchachos, el lunes calcularon los 3 cortes, semaforizaron el grupo e investigaron las 5 gráficas en la computadora. Pero antes de fusionar los datos a PDF, necesitamos aplicar la regla forense: 'Garbage In, Garbage Out'. Si Juan escribió su nombre en minúsculas, el título oficial saldrá viciado. En esta hora aprenderemos la función =NOMPROPIO() para dejar los nombres impecables y luego Autocrat generará más de 30 expedientes individuales en PDF en su Google Drive."

🖥️ DEMO 1 EN CAÑÓN (3 min):
En Google Sheets, modelar la sintaxis: =NOMPROPIO(A2) para convertir textos desordenados a mayúscula inicial y minúsculas homogéneas. Pegar como valores.

🖥️ DEMO 2 EN CAÑÓN (3 min):
1. Abrir Extensiones ➔ Autocrat ➔ Launch.
2. Nombrar el Job: Expedientes_Oficiales_Grupo301.
3. Vincular Plantilla_Expediente_Grupo301 en Google Docs.
4. Mapear etiquetas maestras (<<Nombre>>, <<Apellidos>>, <<Cortes>>, <<Total>>, <<Estatus>>).
5. Configurar modo Multiple output mode (PDF) y carpeta de salida.

💻 RETO 5 (25 min en PC):
Aplicar =NOMPROPIO() en columnas de nombres, mapear campos en Autocrat, presionar Run Job y supervisar la generación de los +30 expedientes individuales en PDF en Google Drive.

💻 RETO 6 (10 min en PC):
Auditoría express entre pares: abrir 2 PDFs al azar de un compañero y verificar que no existan etiquetas rotas (<< >>) y el ajuste estricto a 1 sola página.

🏷️ EVIDENCIA Y SELLO:
Base de datos con nombres normalizados y carpeta de Drive con los 30+ PDFs generados. 👉 SELLO 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 6 (50 min) · Seguridad Nube y Entrega Oficial en Classroom
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"De nada sirve haber generado los documentos más profesionales del estado de Hidalgo si cuando su cliente o docente abre el enlace, la pantalla le dice: 'Acceso Denegado / Solicita Permiso'. Hoy configuraremos privilegios de red y cerraremos la entrega oficial en Google Classroom."

🖥️ DEMO 1 (3 min):
En Google Drive, cambiar acceso general de la carpeta a: "Cualquier persona que tenga el vínculo (Lector)". La prueba de fuego: Probar el enlace en una ventana privada de incógnito.

💻 RETO 7 (15 min en PC):
Configurar la carpeta de Google Drive como pública en modo Lector y validar que abra en ventana de incógnito sin pedir cuenta.

🖥️ DEMO 2 (2 min):
Formato ejecutivo de la bitácora en Google Docs (capturas de pantalla con pie de figura) y entrega en Classroom.

💻 RETO 8 (15 min en PC):
Pegar el enlace público verificado en la tarea asignada de Google Classroom, adjuntar la bitácora con capturas y presionar Entregar Tarea.

🏷️ EVIDENCIA Y SELLO:
Pantalla de Google Classroom con la tarea entregada y enlace verificado. 👉 SELLO 4
Aviso docente: Mañana jueves no hay sesión presencial por comisión sindical; el viernes cerramos con el Kahoot final y calificaciones oficiales.`,
          closure: 'Nombres normalizados con =NOMPROPIO, expedientes generados con Autocrat, carpeta pública verificada y tarea entregada en Classroom.'
        },
        {
          id: 'S3', label: 'Sesión 03', subtitle: 'Jueves (2 hrs) · Sin Actividades (Permiso Sindical)',
          unlockDate: '2026-10-01',
          unlockLabel: 'Jueves 1 de Octubre, 15:00 hrs',
          start: '¿Cómo garantizar que un cliente o directivo pueda consultar tus archivos sin contraseñas?',
          dictation: 'Sesión presencial no impartida por comisión y permiso oficial docente de carácter sindical. Espacio de trabajo autónomo para regularización de entregas.',
          learningResult: 'Regularización autónoma de archivos y entregas en Google Classroom.',
          identification: { topic: 'Permiso Sindical / Regularización', evidence: 'Regularización Classroom', organization: 'Individual', location: 'Autónomo', time: '2 hrs' },
          infographicTitle: 'Aviso Institucional',
          infographicSteps: [
            { title: '1. Permiso Sindical', desc: 'Sesión presencial no impartida por comisión oficial.' },
            { title: '2. Trabajo Autónomo', desc: 'Revisa y completa tus archivos en Google Drive.' },
            { title: '3. Regularización', desc: 'Verifica tu entrega en Google Classroom antes del viernes.' }
          ],
          development: `⚠️ AVISO INSTITUCIONAL · JUEVES (SIN ACTIVIDADES PRESENCIALES)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ SESIÓN 03 (JUEVES) · COMISIÓN Y PERMISO SINDICAL DOCENTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ INDICACIÓN PARA EL GRUPO:
Sesión presencial no impartida por permiso y comisión oficial docente de carácter sindical.

💻 ACTIVIDAD AUTÓNOMA DE REGULARIZACIÓN:
Los alumnos que hayan tenido pendientes en la entrega de su carpeta o bitácora el día miércoles deberán aprovechar estas dos horas de forma autónoma para concluir sus archivos y regularizar su entrega en Google Classroom antes del cierre definitivo del viernes.`,
          closure: 'Espacio de regularización autónoma para alumnos rezagados.'
        },
        {
          id: 'S4', label: 'Sesión 04', subtitle: 'Viernes (1 hr) · Kahoot Final RA 2.1 & Calificaciones',
          unlockDate: '2026-10-02',
          unlockLabel: 'Viernes 2 de Octubre, 15:00 hrs',
          start: '¿Demostraste el dominio total de la automatización masiva documental?',
          dictation: 'La evaluación sumativa con Kahoot integra el dominio de correspondencia masiva, saneamiento forense de datos con =NOMPROPIO, programación de fórmulas de cortes, semaforización tricolor, interpretación de gráficas y distribución segura en la nube, consolidando las competencias del Resultado de Aprendizaje 2.1.',
          learningResult: 'Resolver la evaluación sumativa de 20 reactivos, cotejar sellos y recibir calificación del RA 2.1.',
          identification: { topic: 'Evaluación Sumativa RA 2.1', evidence: 'Kahoot + 4 Sellos Acumulados', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Evaluación y Calificaciones Oficiales',
          infographicSteps: [
            { title: '1. Kahoot Sumativo', desc: 'Evaluación técnica integral del RA 2.1 en dispositivos.' },
            { title: '2. Cotejo de Sellos', desc: 'Verificación de los 4 sellos acumulados en la semana.' },
            { title: '3. Calificaciones', desc: 'Asentamiento de notas oficiales en listas de control escolar.' },
            { title: '4. Encuadre RA 2.2', desc: 'Introducción a presentaciones electrónicas interactivas.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · VIERNES (1 HORA)
Metodología: Kahoot Sumativo + Auditoría de Sellos + Asentamiento de Calificaciones

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 7 (50 min) · Kahoot Final y Acreditación del RA 2.1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO (Apertura al entrar):
"Muchachos, hoy cerramos oficialmente el Resultado de Aprendizaje 2.1. Concluyeron la base de datos, dominaron fórmulas de cortes, semáforos condicionales, tipos de gráficas y fusión masiva en la nube. Hoy jugamos el Kahoot final para demostrar el dominio técnico del bloque y asentar sus calificaciones oficiales."

🖥️ DEMO EN CAÑÓN (2 min):
Proyectar el PIN del Kahoot Oficial del RA 2.1 (20 reactivos sobre todo el flujo: fórmulas, etiquetas, formato condicional, gráficas, Autocrat y permisos de nube).

💻 RETO FINAL (25 min en Dispositivos):
Resolver la evaluación sumativa en dispositivos individuales. Podio de ganadores y premiación simbólica.

🏷️ CIERRE Y ASENTAMIENTO OFICIAL (20 min):
Cotejo de los 4 sellos acumulados en la semana y asentamiento de calificaciones oficiales del RA 2.1 en listas de control escolar.
Encuadre del RA 2.2: Presentaciones Electrónicas Interactivas.`,
          closure: 'Acreditación del RA 2.1 asentada en listas oficiales y encuadre del RA 2.2.'
        }
      ]
    },
    'W08': {
      id: 'W08',
      label: 'Semana 08',
      title: 'Dominio de Autocrat, Operadores Aritméticos, Matriz 10x10 y Forms-Sheets',
      dates: '05 Oct - 09 Oct',
      status: 'active',
      presentationUrl: './html/W08.html',
      summary: 'Conclusión exitosa de Autocrat y Boleta de Parciales en Lunes; laboratorio de Aritmética y Matriz de Multiplicación con referencias fijas ($) el Miércoles; y Forms conectado a Sheets en tiempo real el Jueves.',
      expectedProduct: 'Reporte Técnico de Autocrat en Docs, Matriz 10x10 con $ en Sheets, y Formulario conectado a Sheets con respuestas en vivo.',
      notices: [
        'Lunes (Horas 1-4): Conclusión exitosa de Autocrat, maquetación de la Boleta de Parciales y Reporte Técnico de Práctica.',
        'Miércoles (Horas 5-6): Operaciones aritméticas, jerarquía de paréntesis y Matriz de Multiplicación 10x10 con referencias fijas ($).',
        'Jueves (Horas 7-8): Diseño de Google Forms con validación de respuestas y captura de datos en vivo en Google Sheets.',
        'Viernes (Hora 9): Dashboard express con gráfica, Kahoot sumativo y cierre del RA 2.1.'
      ],
      sessions: [
        {
          id: 'S1', label: 'Sesión 01', subtitle: 'Lunes (4 hrs) · Dominio de Autocrat, Machote 2 & Reporte Técnico',
          unlockDate: '2026-10-05',
          unlockLabel: 'Lunes 5 de Octubre, 15:00 hrs',
          start: '¿Cómo demostrar el dominio total de la automatización masiva mediante evidencias técnicas?',
          dictation: 'El dominio de las herramientas de automatización masiva exige no solo la ejecución asistida de algoritmos, sino la capacidad de diseñar desde cero machotes maquetados con tablas de correspondencia y documentar técnicamente el proceso mediante reportes con evidencias visuales e indicadores de calidad.',
          learningResult: 'Concluir el Job 1 de Autocrat, diseñar el machote de Boleta de Parciales en Docs, ejecutar el Job 2 autónomamente y compilar el Reporte Técnico con 8 capturas.',
          identification: { topic: 'Autocrat Autónomo & Reporte Técnico', evidence: '+30 Boletas PDF + Reporte de Práctica Docs', organization: 'Individual', location: 'Laboratorio', time: '4 hrs' },
          infographicTitle: 'Dominio Técnico y Reporte de Evidencias',
          infographicSteps: [
            { title: '1. Dictado y Job 1', desc: 'Dictado del reporte y conclusión de los Pasos 4 a 9 de Autocrat.' },
            { title: '2. Machote 2 Docs', desc: 'Maquetación de Boleta Oficial de Parciales con tabla y firma en 1 página.' },
            { title: '3. Job 2 Autónomo', desc: 'Configuración de Autocrat y generación de +30 Boletas PDF en Drive.' },
            { title: '4. Reporte Técnico', desc: 'Compilación de las 8 capturas con pie de figura y conclusiones.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · LUNES (4 HORAS)
Metodología: Demo Guiada (2-3 min) ➔ Retos Autónomos en PC (10-15 min) ➔ Auditoría

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 1 (50 min) · Dictado del Reporte, Pasos 4 al 9 y Primer Lote
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO (Apertura al entrar):
"Muchachos, en el mundo laboral a ningún ingeniero le pagan solo por presionar botones; le pagan por documentar técnicamente cómo resolvió el problema. Hoy no solo generaremos más de 60 documentos oficiales en la nube: compilaremos un Reporte de Práctica Profesional con evidencia visual de cada paso del algoritmo."

📝 DICTADO EN LIBRETA · ESTRUCTURA DEL REPORTE TÉCNICO (10-12 min):
Dictar pausadamente el siguiente bloque en la libreta de apuntes:

📌 Título en Libreta:
"Práctica Profesional de Automatización Documental y Memoria Técnica de Evidencias"

1. Propósito de la Sesión:
"En el mundo laboral, un especialista en tecnología no solo ejecuta herramientas en la nube; también demuestra y documenta cómo resolvió el problema. Hoy concluiremos nuestra primera automatización de expedientes y diseñaremos desde cero una Boleta Oficial de Parciales, compilando un Reporte Técnico con 8 evidencias visuales que certifican nuestro dominio de Google Sheets, Docs y Autocrat."

2. Estructura Oficial del Reporte Técnico (en Google Docs):
"El reporte se elaborará en Google Docs con el nombre Reporte_Practica_Automatizacion_PrimerApellido_PrimerNombre e incluirá cuatro secciones:
a) Portada Institucional: Datos de CONALEP Pachuca II, Módulo EDOA-20, Grupo 301, fecha y nombre del alumno.
b) Objetivo y Justificación: Explicación breve de por qué la automatización masiva ahorra horas de trabajo manual y evita el error humano.
c) Galería de Evidencias (Las 8 Capturas): Cada captura debe ir centrada con pie de figura numerado (ej. Figura 1: Base de datos normalizada).
d) Conclusiones Técnicas: Reflexión personal sobre la calidad de datos y la velocidad de procesamiento en la nube."

3. Checklist de las 8 Capturas Obligatorias:
1) Captura 1: Base de datos en Sheets con los 3 Cortes calculados (=SUMA) y el Semáforo Tricolor.
2) Captura 2: Asistente de Autocrat en el Paso 4 (File Settings: Expediente_<<Apellidos>>_<<Nombre>>, formato PDF y Multiple output).
3) Captura 3: Barra de progreso de Autocrat en vivo generando los expedientes (Run Job).
4) Captura 4: Carpeta de Google Drive 01_Expedientes_PDF con el primer lote de +30 PDFs creados.
5) Captura 5: Nuevo Machote en Google Docs (Boleta Oficial de Parciales CONALEP) maquetado en 1 sola página.
6) Captura 6: Configuración y mapeo de las 5 etiquetas de calificaciones en el Job 2 de Autocrat.
7) Captura 7: Carpeta de Google Drive 02_Boletas_Oficiales_PDF con el segundo lote de +30 boletas en PDF.
8) Captura 8: Una Boleta en PDF abierta en pantalla, demostrando que los datos se sustituyeron limpiamente sin etiquetas rotas << >>.

🖥️ DEMO EN CAÑÓN (5 min):
Explicación de Pasos 4 al 9 de Autocrat: File Settings (Nombre dinámico, PDF, Multiple mode), carpeta de salida 01_Expedientes_PDF y clic en Save.

💻 RETO 1 (20 min en PC):
Completar pasos 4 a 9, presionar Run Job, monitorear la barra de progreso, verificar lote en Drive y tomar Capturas 1 a 4.

🏷️ EVIDENCIA Y SELLO:
Pantalla con primer lote de PDFs en Drive y capturas 1 a 4 recopiladas. 👉 SELLO 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 2 (50 min) · Maquetación del Machote 2 ("Boleta de Parciales")
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Ya dominan la teoría. Ahora vamos al reto de producción: ustedes son el Departamento de Control Escolar de CONALEP Pachuca II. Van a maquetar desde una hoja en blanco una Boleta Oficial de Calificaciones por Cortes para entregar a los tutores."

📝 APUNTE EN LIBRETA · TABLA DE MAPEO DE VARIABLES (10 min):
Copiar la matriz de sincronización:
<<Nombre>> ➔ Nombre | <<Apellidos>> ➔ Apellidos | <<Colonia>> ➔ Colonia
<<Corte 1>> ➔ Corte 1 | <<Corte 2>> ➔ Corte 2 | <<Corte 3>> ➔ Corte 3
<<Total>> ➔ Total | <<Estatus>> ➔ Estatus

💻 RETO 2 (30 min en PC):
Abrir Google Docs (Plantilla_Boleta_Parciales_Grupo301) y maquetar:
1) Membrete institucional CONALEP.
2) Datos del estudiante (Nombre, Apellidos, Colonia).
3) Tabla formal de calificaciones de 3 parciales (Corte 1, 2, 3), Total y Estatus.
4) Cuadro de observaciones disciplinarias/tutoriales.
5) Línea al pie para firma del padre o tutor.
6) Regla estricta: Ajuste a 1 sola página sin hojas en blanco sobrantes.

📸 ACCIÓN DE CIERRE: Tomar Captura 5 del machote terminado.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 3 (50 min) · Configuración Autónoma del Job 2 y Fusión Masiva
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Tienen su base de datos lista y su nueva plantilla maquetada. Ahora viene la prueba de fuego de autonomía técnica: configurarán el Job 2 en Autocrat de principio a fin de forma totalmente individual."

💻 RETO 3 (25 min en PC):
Crear carpeta en Drive: 02_Boletas_Oficiales_Grupo301. En Sheets, abrir Autocrat ➔ New Job (Boletas_Oficiales_301). Configurar autónomamente los 9 pasos: plantilla Docs, mapeo de las 5 etiquetas, salida PDF en Multiple mode y guardar. (📸 Tomar Captura 6).

💻 RETO 4 (15 min en PC):
Presionar Run Job. Monitorear en vivo la generación de los +30 PDFs de boletas individuales en Google Drive. (📸 Tomar Captura 7 de la carpeta en Drive y Captura 8 de una boleta abierta).

🏷️ EVIDENCIA Y SELLO:
Carpeta 02_Boletas_Oficiales_Grupo301 llena de PDFs y capturas 5 a 8 completas. 👉 SELLO 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 4 (50 min) · Ensamble del Reporte en Docs y Asentamiento Oficial
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Hora de compilar su obra técnica. Todo ingeniero entrega una memoria descriptiva con capturas y conclusiones antes de liberar el sistema."

💻 RETO 5 (30 min en PC):
Abrir Google Docs (Reporte_Practica_Automatizacion_Apellidos_Nombre) y maquetar:
1) Portada formal (CONALEP, módulo EDOA-20, grupo 301, datos del alumno).
2) Objetivo y Justificación técnica.
3) Desarrollo: Insertar las 8 Capturas de Pantalla con pie de figura numerado.
4) Conclusión técnica personal sobre ahorro de tiempo y prevención del error humano (GIGO).

📝 CIERRE EN LIBRETA (10 min):
Anotar la conclusión sintética del algoritmo de correspondencia masiva en la nube.

🏷️ CIERRE Y SELLO 3:
Revisión docente del Reporte de Práctica con sus 8 capturas + cotejo de libreta. 👉 SELLO 3 (Dominio Certificado de Autocrat).`,
          closure: 'Reporte de Práctica compilado en Google Docs con 8 capturas y segundo lote de boletas generado en Drive.'
        },
        {
          id: 'S2', label: 'Sesión 02', subtitle: 'Miércoles (1 hr) · Iniciación a Sumas en Hojas de Cálculo',
          unlockDate: '2026-10-07',
          unlockLabel: 'Miércoles 7 de Octubre, 15:00 hrs',
          start: '¿Cómo hacer sumas sencillas y acumuladas en Google Sheets sin sumar a mano?',
          dictation: 'La función de suma es la operación fundamental en las hojas de cálculo. Para realizar cálculos eficientes debemos iniciar toda fórmula con el signo igual (=) y emplear los operadores de suma directa o la función nativa =SUMA() para procesar rangos numéricos.',
          learningResult: 'Ingresar fórmulas de suma directa y utilizar la función nativa =SUMA().',
          identification: { topic: 'Sumas Básicas y Función =SUMA', evidence: 'Práctica de Sumas en Sheets', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Iniciación a Sumas en Sheets',
          infographicSteps: [
            { title: '1. El Signo Igual (=)', desc: 'Inicia toda fórmula escribiendo primero el signo igual.' },
            { title: '2. Suma Directa (+)', desc: 'Suma celdas individuales utilizando la sintaxis =A1+B1.' },
            { title: '3. Función =SUMA()', desc: 'Suma rangos completos de datos escribiendo =SUMA(A1:A10).' },
            { title: '4. Arrastre Azul', desc: 'Copia fórmulas fácilmente usando el cuadrado de relleno.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · MIÉRCOLES (1 HORA)
Metodología: Explicación Breve (5 min) ➔ Práctica Guiada en PC (35 min) ➔ Cierre en Libreta

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 5 (50 min) · Iniciación a Sumas (+ y =SUMA)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO (Apertura al entrar):
"Muchachos, buenas tardes. La herramienta número uno en cualquier empleo es saber sumar datos rápidamente en la computadora. Hoy aprenderemos a programar sumas directas y la función =SUMA en Google Sheets."

🖥️ DEMO EN CAÑÓN (5 min):
Mostrar cómo iniciar una fórmula con el signo igual (=), sumar celdas directas (=A1+B1) y usar la función =SUMA(A1:A10).

💻 RETO 1 (35 min en PC):
Crear la hoja Practica_Sumas_Grupo301 y resolver los ejercicios prácticos de acumulación de datos numéricos.

📝 CIERRE EN LIBRETA (10 min):
Anotar la regla de oro: toda fórmula en hojas de cálculo debe iniciar obligatoriamente con el signo igual (=).

🏷️ EVIDENCIA Y SELLO:
Hoja de cálculo con la práctica de sumas completada. 👉 SELLO 4`,
          closure: 'Matriz de multiplicación 10x10 construida con referencias fijas ($) y formato condicional térmico.'
        },
        {
          id: 'S3', label: 'Sesión 03', subtitle: 'Jueves (2 hrs) · Operaciones Básicas & Calculador Geométrico',
          unlockDate: '2026-10-08',
          unlockLabel: 'Jueves 8 de Octubre, 15:00 hrs',
          start: '¿Cómo calcular restas, multiplicaciones, divisiones, raíces y potencias, y aplicar fórmulas de geometría con imágenes en Sheets?',
          dictation: 'El cálculo matemático en hojas de cálculo abarca las operaciones fundamentales (resta, multiplicación, división, raíz y potencia). Al asociar estas operaciones con expresiones geométricas y representaciones visuales, construimos herramientas interactivas para calcular áreas y perímetros en tiempo real.',
          learningResult: 'Aplicar operaciones matemáticas fundamentales y maquetar el calculador de áreas y perímetros con imágenes de fórmulas.',
          identification: { topic: 'Operaciones & Geometría', evidence: 'Calculador Geométrico Maquetado', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Operaciones & Calculador Geométrico',
          infographicSteps: [
            { title: '1. Operaciones Básicas', desc: 'Practica restas (-), multiplicaciones (*), divisiones (/) y potencias (^).' },
            { title: '2. Imagen de Figura', desc: 'Inserta la imagen de la figura geométrica con su fórmula.' },
            { title: '3. Variables de Entrada', desc: 'Identifica y coloca las celdas para base, altura, lado o radio.' },
            { title: '4. Fórmulas de Área y Perímetro', desc: 'Programa las fórmulas automáticas para calcular resultados.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · JUEVES (2 HORAS)
Metodología: Explicación Breve (5 min) ➔ Práctica Autónoma en PC (35 min) ➔ Auditoría

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 6 (50 min) · Resta, Multiplicación, División, Raíz y Potencia
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Ya sabemos sumar. Ahora dominaremos las 5 herramientas operativas restantes: resta (-), multiplicación (*), división (/), raíz cuadrada (=RAIZ) y potencias (^)."

🖥️ DEMO EN CAÑÓN (5 min):
Modelar cada operador en pantalla con ejemplos numéricos directos.

💻 RETO 2 (35 min en PC):
Crear la hoja Calculadora_Operaciones_Grupo301 y resolver la tabla de ejercicios con las 5 operaciones fundamentales.

🏷️ EVIDENCIA Y SELLO:
Tabla de operaciones resuelta con fórmulas formales. 👉 SELLO 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 7 (50 min) · Calculador de Áreas y Perímetros (Imágenes y Variables)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Vamos a combinar la geometría con las fórmulas de Sheets. Insertaremos imágenes de figuras geométricas con su fórmula visual e identificaremos las celdas de variables para calcular áreas y perímetros en automático."

🖥️ DEMO EN CAÑÓN (5 min):
Mostrar cómo insertar la imagen de una figura (p. ej. Triángulo o Rectángulo), definir las celdas de entrada para Base y Altura, y programar la fórmula del área.

💻 RETO 3 (35 min en PC):
1) Insertar imágenes de las figuras geométricas con sus fórmulas visibles.
2) Identificar y configurar las celdas de las variables de entrada (base, altura, lado, radio).
3) Programar las primeras fórmulas de Área y Perímetro.

🏷️ EVIDENCIA Y SELLO:
Calculador geométrico maquetado con imágenes y primeras fórmulas activas. 👉 SELLO 6`,
          closure: 'Formulario vinculado a Google Sheets en tiempo real con validación y fórmulas de resumen.'
        },
        {
          id: 'S4', label: 'Sesión 04', subtitle: 'Viernes (1 hr) · Cierre de Calculador Geométrico & Kahoot Final RA 2.1',
          unlockDate: '2026-10-09',
          unlockLabel: 'Viernes 9 de Octubre, 15:00 hrs',
          start: '¿Completaste el calculador de áreas y perímetros y estás listo para evaluar tus aprendizajes en el Kahoot?',
          dictation: 'El cierre del Resultado de Aprendizaje 2.1 integra el dominio del motor de combinación Autocrat, el manejo de operaciones matemáticas fundamentales en Google Sheets y el desarrollo del calculador geométrico, certificando la acreditación oficial del bloque.',
          learningResult: 'Finalizar el calculador de áreas y perímetros, resolver el Kahoot sumativo y asentar calificaciones del RA 2.1.',
          identification: { topic: 'Calculador Geométrico & Kahoot RA 2.1', evidence: 'Calculador Geométrico + Kahoot + Acreditación RA 2.1', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Cierre y Acreditación Final RA 2.1',
          infographicSteps: [
            { title: '1. Figuras Completas', desc: 'Calcula área y perímetro de Cuadrado, Triángulo, Círculo y Trapecio.' },
            { title: '2. Formato Limpio', desc: 'Aplica colores y bordes claros a la hoja de cálculo.' },
            { title: '3. Kahoot Sumativo', desc: 'Prueba de 20 reactivos sobre Autocrat, Operadores y Geometría.' },
            { title: '4. Acreditación', desc: 'Cotejo de sellos y asentamiento oficial de calificaciones del RA 2.1.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · VIERNES (1 HORA)
Metodología: Finalización de Calculador Geométrico + Kahoot Sumativo + Acreditación RA 2.1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 8 (50 min) · Cierre del Calculador Geométrico y Acreditación RA 2.1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Hoy cerraremos nuestro calculador de áreas y perímetros de figuras geométricas y evaluaremos nuestros aprendizajes en el Kahoot sumativo para acreditar el RA 2.1."

💻 RETO 4 (20 min en PC):
1) Finalizar las fórmulas para todas las figuras (Cuadrado, Rectángulo, Triángulo, Círculo, Trapecio).
2) Dar un formato visual limpio a la hoja (bordes, colores claros de celdas).

📊 KAHOOT SUMATIVO RA 2.1 (20 min):
Prueba evaluativa de 20 reactivos integradores (Autocrat, Sumas, Operadores Básicos y Fórmulas Geométricas).

📝 CORTE DE SELLOS Y ACREDITACIÓN (10 min):
Cotejo del portafolio completo de sellos acumulados y asentamiento oficial de calificaciones del RA 2.1.

🏷️ EVIDENCIA Y SELLO:
Calculador geométrico terminado + Kahoot resuelto + Calificación asentada. 👉 SELLO FINAL (Acreditación RA 2.1)
🗣️ FRASE GANCHO (Apertura al entrar):
"Muchachos, hoy cerramos formalmente el Resultado de Aprendizaje 2.1. Han pasado de combinar textos sencillos a programar matrices térmicas de 100 celdas y capturar datos en tiempo real. Hoy cerramos con un Dashboard express y nuestro Kahoot sumativo final."

🖥️ DEMO EN CAÑÓN (2 min):
Insertar 2 gráficas dinámicas (Columnas y Pastel) vinculadas a la hoja de respuestas del formulario.

💻 RETO FINAL (25 min en Dispositivos):
1) Construir el Dashboard express con 2 gráficas (10 min).
2) Resolver el Kahoot Sumativo Oficial del RA 2.1 de 20 reactivos (15 min).

🏷️ CIERRE Y ASENTAMIENTO OFICIAL (20 min):
Cotejo de los sellos acumulados y asentamiento de calificaciones oficiales del RA 2.1 en listas de control escolar.
Encuadre del RA 2.2: Presentaciones Electrónicas Interactivas.`,
          closure: 'Acreditación oficial del RA 2.1 asentada en listas y encuadre del RA 2.2.'
        }
      ]
    },
    'W09': {
      id: 'W09',
      label: 'Semana 09',
      title: 'Presupuesto Personal y Control de Gastos del Estudiante',
      dates: '12 Oct - 16 Oct',
      status: 'upcoming',
      summary: 'Desarrollo de un sistema interactivo de Presupuesto Personal en Google Sheets con formato moneda ($), balance diario, resúmenes estadísticos (=SUMA, =PROMEDIO, =MAX, =MIN), semáforo condicional y dashboard con gráficos de pastel y columnas.',
      expectedProduct: 'Presupuesto Personal con Registro de Gastos + Resumen Estadístico + Semáforo de Ahorro + Dashboard Gráfico.',
      notices: [
        'Lunes (Horas 1-4): Encuadre de educación financiera, maquetación de la bitácora y registro de gastos reales/simulados.',
        'Miércoles (Hora 5): Programación de fórmulas de balance diario (=Ingresos - Egresos).',
        'Jueves (Horas 6-7): Resumen estadístico (=SUMA, =PROMEDIO, =MAX, =MIN) y semáforo condicional de ahorro.',
        'Viernes (Hora 8): Dashboard gráfico (Pastel y Columnas) y corte final de sellos de la semana.'
      ],
      sessions: [
        {
          id: 'S1', label: 'Sesión 01', subtitle: 'Lunes (4 hrs) · Maquetación & Registro Diario de Gastos',
          unlockDate: '2026-10-12',
          unlockLabel: 'Lunes 12 de Octubre, 15:00 hrs',
          start: '¿Sabes exactamente cuánto dinero gastas en pasajes, lonche y gustos durante una semana escolar?',
          dictation: 'El presupuesto personal es el mapa financiero que visibiliza en qué se va nuestro dinero. Un egreso no registrado se convierte en un gasto hormiga que frena nuestras metas. Al organizar los ingresos y gastos en columnas con formato de Moneda ($), transformamos datos dispersos en inteligencia contable para tomar el control de nuestra economía.',
          learningResult: 'Maquetar una bitácora contable limpia, aplicar formato Moneda ($) y registrar 15 movimientos financieros escolares.',
          identification: { topic: 'Presupuesto Personal & Formato Moneda', evidence: 'Bitácora Maquetada con Gastos Registrados', organization: 'Individual', location: 'Laboratorio', time: '4 hrs' },
          infographicTitle: 'Registro y Formato Financiero',
          infographicSteps: [
            { title: '1. Conceptos Básicos', desc: 'Identifica ingresos, egresos fijos, egresos variables y ahorro.' },
            { title: '2. Maquetación Limpia', desc: 'Crea columnas para Día, Categoría, Descripción, Ingreso y Egreso.' },
            { title: '3. Formato Moneda ($)', desc: 'Aplica formato numérico de moneda en todas las celdas financieras.' },
            { title: '4. Captura de Gastos', desc: 'Registra 15 movimientos típicos de una semana escolar.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · LUNES (4 HORAS)
Metodología: Explicación de Conceptos (15 min) ➔ Maquetación en PC (45 min) ➔ Captura y Registro

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 1 (50 min) · Encuadre y Conceptos de Educación Financiera
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Muchachos, la educación financiera es la herramienta que distingue a quien administra bien su dinero de quien nunca le alcanza. Hoy empezaremos a controlar nuestro presupuesto en Google Sheets."

📝 DICTADO EN LIBRETA (10 min):
Definición de Ingresos (beca, mesada, apoyos), Egresos Fijos (pasaje, comida), Egresos Variables (gustos) y Saldo de Ahorro.

💻 RETO 1 (25 min en PC):
Abrir Google Sheets y maquetar el membrete de la hoja Mi_Presupuesto_Semanal_Grupo301.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 2 (50 min) · Formato Estético Profesional de Celdas
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🖥️ DEMO EN CAÑÓN (5 min):
Combinar celdas para encabezados, aplicar bordes limpios y paleta de colores profesional.

💻 RETO 2 (45 min en PC):
Configurar el formato numérico de Moneda ($) en todas las columnas financieras y aplicar relleno de filas alternadas.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 3 (50 min) · Captura de Datos de Simulación Real
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💻 RETO 3 (50 min en PC):
Registrar 15 movimientos financieros reales o simulados de una semana escolar típica (pasaje, lonche, fotocopias, recarga, snacks).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 4 (50 min) · Revisión y Primer Cierre
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💻 RETO 4 (35 min en PC):
Validar que ningún monto esté sin formato de moneda y organizar los datos por días (Lunes a Viernes).

📝 CIERRE EN LIBRETA (15 min):
Reflexión sobre los gastos que a veces no notamos (gastos hormiga).

🏷️ EVIDENCIA Y SELLO:
Bitácora maquetada con formato moneda ($) y registro de gastos. 👉 SELLO 1`,
          closure: 'Bitácora de gastos maquetada y registrada con formato estético de moneda.'
        },
        {
          id: 'S2', label: 'Sesión 02', subtitle: 'Miércoles (1 hr) · Fórmulas de Balance Diario',
          unlockDate: '2026-10-14',
          unlockLabel: 'Miércoles 14 de Octubre, 15:00 hrs',
          start: '¿Cómo calcular automáticamente si te queda dinero al final de cada día?',
          dictation: 'El balance contable es la diferencia entre el dinero que entra y el dinero que sale. La fórmula del Saldo Disponible =Ingresos - Egresos nos indica en tiempo real si mantenemos superávit (dinero a favor) o déficit (deuda). En Google Sheets, las restas se programan directamente usando el operador menos (-).',
          learningResult: 'Programar fórmulas de resta directas para calcular el Saldo Neto al final de cada día.',
          identification: { topic: 'Balance Contable & Restas', evidence: 'Columna de Saldo Acumulado Operando', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Fórmulas de Balance Diario',
          infographicSteps: [
            { title: '1. Sintaxis de Resta', desc: 'Aplica el operador menos (-) para calcular saldos.' },
            { title: '2. Fórmula de Balance', desc: '=Ingreso_Día - Egreso_Día.' },
            { title: '3. Saldo Acumulado', desc: 'Programa la celda de saldo disponible.' },
            { title: '4. Verificación', desc: 'Prueba la fórmula modificando un monto de gasto.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · MIÉRCOLES (1 HORA)
Metodología: Explicación Breve (5 min) ➔ Práctica Guiada en PC (35 min) ➔ Cierre en Libreta

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 5 (50 min) · Programación de Balances (=Ingresos - Egresos)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Para saber si estamos ahorrando o en números rojos, la computadora calculará automáticamente el saldo neto al restar nuestros egresos de nuestros ingresos."

🖥️ DEMO EN CAÑÓN (5 min):
Modelar la fórmula de resta =Ingresos - Egresos y cómo aplicarla en la columna de Saldo Acumulado.

💻 RETO 1 (35 min en PC):
Programar la columna de Saldo Acumulado en cada fila del presupuesto.

📝 CIERRE EN LIBRETA (10 min):
Anotar la fórmula utilizada para calcular el saldo neto disponible.

🏷️ EVIDENCIA Y SELLO:
Columna de Saldo Acumulado calculando balances automáticamente. 👉 SELLO 2`,
          closure: 'Fórmulas de balance diario programadas y funcionando.'
        },
        {
          id: 'S3', label: 'Sesión 03', subtitle: 'Jueves (2 hrs) · Resumen Estadístico & Semáforo de Ahorro',
          unlockDate: '2026-10-15',
          unlockLabel: 'Jueves 15 de Octubre, 15:00 hrs',
          start: '¿Cuál fue tu día más caro y cuánto gastaste en promedio diariamente?',
          dictation: 'Las funciones de resumen (=SUMA, =PROMEDIO, =MAX, =MIN) procesan grandes listas numéricas para extraer métricas clave de toma de decisiones. El Formato Condicional actúa como un escudo visual de alerta que cambia automáticamente el color de la celda según la salud de nuestras finanzas.',
          learningResult: 'Construir la tabla de resumen estadístico y configurar el semáforo condicional tricolor de ahorro.',
          identification: { topic: 'Estadística & Semáforo Financiero', evidence: 'Tabla Resumen + Semáforo Condicional', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Resumen Estadístico y Semáforo',
          infographicSteps: [
            { title: '1. Función =SUMA', desc: 'Calcula el total absoluto gastado en la semana.' },
            { title: '2. Función =PROMEDIO', desc: 'Obtén el costo promedio por día escolar.' },
            { title: '3. Max y Min', desc: 'Identifica el día con mayor (=MAX) y menor (=MIN) gasto.' },
            { title: '4. Semáforo Tricolor', desc: 'Aplica verde para ahorro, amarillo para límite y rojo para déficit.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · JUEVES (2 HORAS)
Metodología: Explicación Breve (5 min) ➔ Práctica Autónoma en PC (35 min) ➔ Auditoría

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 6 (50 min) · Tabla de Métricas (=SUMA, =PROMEDIO, =MAX, =MIN)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"No basta con ver gastos sueltos: un verdadero analista usa funciones estadísticas para descubrir cuál fue su día más caro y cuánto gasta en promedio por día."

🖥️ DEMO EN CAÑÓN (5 min):
Explicar la sintaxis de =SUMA(rango), =PROMEDIO(rango), =MAX(rango) y =MIN(rango).

💻 RETO 2 (35 min en PC):
Construir la tabla de resumen semanal con las 4 funciones estadísticas.

🏷️ EVIDENCIA Y SELLO:
Tabla de resumen estadístico funcionando con las 4 fórmulas. 👉 SELLO 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 7 (50 min) · Semáforo Condicional de Salud Financiera
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Pondremos un escudo visual a nuestro presupuesto. Si estamos ahorrando se pondrá verde; si gastamos de más se pondrá rojo como señal de alerta."

🖥️ DEMO EN CAÑÓN (5 min):
Mostrar la regla de Formato Condicional sobre el Saldo Final (Verde > 0, Amarillo 0-20, Rojo < 0).

💻 RETO 3 (35 min en PC):
Configurar el semáforo condicional tricolor sobre el Saldo Final de la semana.

🏷️ EVIDENCIA Y SELLO:
Semáforo condicional tricolor reactivo en el Saldo Final. 👉 SELLO 4`,
          closure: 'Resumen estadístico y semáforo condicional de ahorro terminados.'
        },
        {
          id: 'S4', label: 'Sesión 04', subtitle: 'Viernes (1 hr) · Dashboard Gráfico & Cierre',
          unlockDate: '2026-10-16',
          unlockLabel: 'Viernes 16 de Octubre, 15:00 hrs',
          start: '¿Cómo presentar tus resultados financieros con gráficos ejecutivos?',
          dictation: 'Un Dashboard Financiero sintetiza los datos en gráficos ejecutivos. La Gráfica de Pastel permite analizar la proporción porcentual de los gastos por categoría, mientras que la Gráfica de Columnas muestra la tendencia de consumo día con día, facilitando la toma de decisiones informadas.',
          learningResult: 'Insertar una gráfica de pastel y una gráfica de columnas para el Dashboard de Presupuesto Personal.',
          identification: { topic: 'Dashboard Gráfico & Cierre', evidence: 'Dashboard Financiero Completo con Gráficos', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Dashboard de Presupuesto Personal',
          infographicSteps: [
            { title: '1. Gráfica de Pastel', desc: 'Visualiza la distribución del dinero por categorías.' },
            { title: '2. Gráfica de Columnas', desc: 'Compara el nivel de gasto de Lunes a Viernes.' },
            { title: '3. Formato Ejecutivo', desc: 'Ajusta colores, títulos y etiquetas de datos.' },
            { title: '4. Cierre y Sellos', desc: 'Cotejo final del portafolio de sellos acumulados.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · VIERNES (1 HORA)
Metodología: Práctica en PC (25 min) ➔ Reflexión y Corte de Sellos (25 min)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 8 (50 min) · Visualización Dinámica de Gastos y Cierre de Semana 09
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Hoy le daremos el toque final a nuestro proyecto creando un Dashboard visual con gráficas de pastel y columnas para exponer nuestras finanzas de forma profesional."

💻 RETO 4 (25 min en PC):
Insertar 2 gráficas estadísticas en la hoja:
1) Gráfica de Pastel (Distribución por categoría: Pasaje vs Comida vs Gustos).
2) Gráfica de Columnas (Comparativa de gastos diarios de Lunes a Viernes).

📝 CIERRE Y CORTE DE SELLOS (25 min):
Escribir la conclusión personal sobre el aprendizaje del control de gastos y cotejo de sellos acumulados de la Semana 09.

🏷️ EVIDENCIA Y SELLO:
Dashboard de Presupuesto Personal completado con 2 gráficas y sellos revisados. 👉 SELLO FINAL`,
          closure: 'Dashboard de Presupuesto Personal terminado con gráficos de pastel y columnas.'
        }
      ]
    }

  }
};
