import imgW06S01 from '../assets/w06_s01_infografia.png';
import imgW06S02 from '../assets/w06_s02_infografia.png';
import imgW06S03 from '../assets/w06_s03_infografia.png';
import imgW06S04 from '../assets/w06_s04_infografia.png';
import imgW03S01 from '../assets/w03_s01_infografia.png';
import imgW04S01 from '../assets/w04_s01_infografia.jpg';
import imgW04S02 from '../assets/w04_s02_infografia.jpg';
import imgW04S03 from '../assets/w04_s03_infografia.png';

import imgW05S01 from '../assets/w05_s01_infografia.jpg';
import imgSlide1 from '../assets/slide1_portada_lanzamiento.png';
import imgSlide2 from '../assets/slide2_ficha_playstore.png';
import imgSlide3 from '../assets/slide3_galeria_pantallas.png';
import imgSlide4 from '../assets/slide4_formulas_matematicas.png';
import imgSlide5 from '../assets/slide5_descarga_qr_creditos.png';
import imgGSlide1 from '../assets/slide1_portada.png';
import imgGSlide2 from '../assets/slide2_que_hace_el_juego.png';
import imgGSlide3 from '../assets/slide3_instrucciones.png';
import imgGSlide4 from '../assets/slide4_personajes_elementos.png';
import imgGSlide5 from '../assets/slide5_niveles_dificultad.png';
import imgGSlide6 from '../assets/slide6_galeria_mockups.png';
import imgGSlide7 from '../assets/slide7_creditos.png';

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
        { id: 'RA 2.2', title: 'Control Financiero, Modelos de Cálculo y Apps Móviles', peso: '15%', weeks: ['W09', 'W10', 'W11', 'W12'] }
      ]
    },
    {
      id: 'C3',
      label: 'Tercer Corte',
      peso: '35%',
      dates: '09 Nov - 11 Dic 2026',
      captureDates: '10 al 11 Dic 2026',
      deadline: '11 Dic 2026',
      ras: [
        { id: 'RA 3.1', title: 'Cierre de App GeoCalc y Hojas de Cálculo Avanzadas', peso: '20%', weeks: ['W13', 'W14'] },
        { id: 'RA 3.2', title: 'Proyecto Integrador EDOA', peso: '15%', weeks: ['W15', 'W16'] }
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
        'Apertura oficial del RA 2.2 (Segundo Corte - 15% · Control Financiero y Gestión de Hojas de Cálculo).',
        'Lunes (Realizada): Proyección completa de Fifteen Million Merits (Black Mirror), debate grupal y tabla de auditoría en libreta (Sello 1).',
        'Miércoles (Hora 5): Taller en PC — Maquetación de la bitácora en Google Sheets, formato Moneda ($) y 15 movimientos escolares (Sello 2).',
        'Jueves (Horas 6-7): Balances diarios automáticos (=D4-E4, =F4-E5), tabla de resumen (=SUMA, =PROMEDIO, =MAX, =MIN) y semáforo condicional (Sellos 3 y 4).',
        'Viernes (Hora 8): Dashboard gráfico (Pastel y Columnas), corte final y acreditación de Semana 09 (Sello Final).'
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
        'Apertura oficial del RA 2.2 (Segundo Corte - 15% · Control Financiero y Gestión de Hojas de Cálculo).',
        'Lunes (Realizada): Proyección completa de Fifteen Million Merits (Black Mirror), debate grupal y tabla de auditoría en libreta (Sello 1).',
        'Miércoles (Hora 5): Taller en PC — Maquetación de la bitácora en Google Sheets, formato Moneda ($) y 15 movimientos escolares (Sello 2).',
        'Jueves (Horas 6-7): Balances diarios automáticos (=D4-E4, =F4-E5), tabla de resumen (=SUMA, =PROMEDIO, =MAX, =MIN) y semáforo condicional (Sellos 3 y 4).',
        'Viernes (Hora 8): Dashboard gráfico (Pastel y Columnas), corte final y acreditación de Semana 09 (Sello Final).'
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
        'Apertura oficial del RA 2.2 (Segundo Corte - 15% · Control Financiero y Gestión de Hojas de Cálculo).',
        'Lunes (Realizada): Proyección completa de Fifteen Million Merits (Black Mirror), debate grupal y tabla de auditoría en libreta (Sello 1).',
        'Miércoles (Hora 5): Taller en PC — Maquetación de la bitácora en Google Sheets, formato Moneda ($) y 15 movimientos escolares (Sello 2).',
        'Jueves (Horas 6-7): Balances diarios automáticos (=D4-E4, =F4-E5), tabla de resumen (=SUMA, =PROMEDIO, =MAX, =MIN) y semáforo condicional (Sellos 3 y 4).',
        'Viernes (Hora 8): Dashboard gráfico (Pastel y Columnas), corte final y acreditación de Semana 09 (Sello Final).'
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
      status: 'historical',
      presentationUrl: './html/W07.html',
      summary: 'Investigación en computadora de tipos de gráficas estadísticas, consolidación de los 3 cortes de evaluación, formato condicional tricolor (<60, 60-80, >80), normalización con =NOMPROPIO y fusión masiva con Autocrat.',
      expectedProduct: 'Directorio con fórmula de 3 cortes y semáforo tricolor, carpeta en Drive con +30 expedientes en PDF y entrega en Classroom.',
      notices: [
        'Apertura oficial del RA 2.2 (Segundo Corte - 15% · Control Financiero y Gestión de Hojas de Cálculo).',
        'Lunes (Realizada): Proyección completa de Fifteen Million Merits (Black Mirror), debate grupal y tabla de auditoría en libreta (Sello 1).',
        'Miércoles (Hora 5): Taller en PC — Maquetación de la bitácora en Google Sheets, formato Moneda ($) y 15 movimientos escolares (Sello 2).',
        'Jueves (Horas 6-7): Balances diarios automáticos (=D4-E4, =F4-E5), tabla de resumen (=SUMA, =PROMEDIO, =MAX, =MIN) y semáforo condicional (Sellos 3 y 4).',
        'Viernes (Hora 8): Dashboard gráfico (Pastel y Columnas), corte final y acreditación de Semana 09 (Sello Final).'
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
            { title: '4. Encuadre RA 2.2', desc: 'Introducción a control financiero y gestión de hojas de cálculo.' }
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
Encuadre del RA 2.2: Control Financiero y Gestión de Hojas de Cálculo.`,
          closure: 'Acreditación del RA 2.1 asentada en listas oficiales y encuadre del RA 2.2 (Control Financiero y Hojas de Cálculo).'
        }
      ]
    },
    'W08': {
      id: 'W08',
      label: 'Semana 08',
      title: 'Dominio de Autocrat, Operadores Aritméticos, Matriz 10x10 y Forms-Sheets',
      dates: '05 Oct - 09 Oct',
      status: 'historical',
      presentationUrl: './html/W08.html',
      summary: 'Conclusión exitosa de Autocrat y Boleta de Parciales en Lunes; laboratorio de Aritmética y Matriz de Multiplicación con referencias fijas ($) el Miércoles; y Forms conectado a Sheets en tiempo real el Jueves.',
      expectedProduct: 'Reporte Técnico de Autocrat en Docs, Matriz 10x10 con $ en Sheets, y Formulario conectado a Sheets con respuestas en vivo.',
      notices: [
        'Apertura oficial del RA 2.2 (Segundo Corte - 15% · Control Financiero y Gestión de Hojas de Cálculo).',
        'Lunes (Realizada): Proyección completa de Fifteen Million Merits (Black Mirror), debate grupal y tabla de auditoría en libreta (Sello 1).',
        'Miércoles (Hora 5): Taller en PC — Maquetación de la bitácora en Google Sheets, formato Moneda ($) y 15 movimientos escolares (Sello 2).',
        'Jueves (Horas 6-7): Balances diarios automáticos (=D4-E4, =F4-E5), tabla de resumen (=SUMA, =PROMEDIO, =MAX, =MIN) y semáforo condicional (Sellos 3 y 4).',
        'Viernes (Hora 8): Dashboard gráfico (Pastel y Columnas), corte final y acreditación de Semana 09 (Sello Final).'
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
Encuadre del RA 2.2: Control Financiero y Gestión de Hojas de Cálculo.`,
          closure: 'Acreditación oficial del RA 2.1 asentada en listas y encuadre del RA 2.2 (Control Financiero y Hojas de Cálculo).'
        }
      ]
    },
    'W09': {
      id: 'W09',
      label: 'Semana 09',
      title: 'Presupuesto Personal y Control de Gastos (Black Mirror)',
      dates: '12 Oct - 16 Oct',
      status: 'historical',
      templateUrl: './templates/Plantilla_Presupuesto_Personal_Semana09.xlsx',
      summary: 'Desarrollo de un sistema interactivo de Presupuesto Personal en Google Sheets con proyección de Fifteen Million Merits (Black Mirror), formato moneda ($), balance diario, resúmenes estadísticos (=SUMA, =PROMEDIO, =MAX, =MIN), semáforo condicional y dashboard gráfico.',
      expectedProduct: 'Presupuesto Personal con Registro de Gastos + Resumen Estadístico + Semáforo de Ahorro + Dashboard Gráfico.',
      notices: [
        'Apertura oficial del RA 2.2 (Segundo Corte - 15% · Control Financiero y Gestión de Hojas de Cálculo).',
        'Lunes (Realizada): Proyección completa de Fifteen Million Merits (Black Mirror), debate grupal y tabla de auditoría en libreta (Sello 1).',
        'Miércoles (Hora 5): Taller en PC — Maquetación de la bitácora en Google Sheets, formato Moneda ($) y 15 movimientos escolares (Sello 2).',
        'Jueves (Horas 6-7): Balances diarios automáticos (=D4-E4, =F4-E5), tabla de resumen (=SUMA, =PROMEDIO, =MAX, =MIN) y semáforo condicional (Sellos 3 y 4).',
        'Viernes (Hora 8): Dashboard gráfico (Pastel y Columnas), corte final y acreditación de Semana 09 (Sello Final).'
      ],
      sessions: [
        {
          id: 'S1', label: 'Sesión 01', subtitle: 'Lunes (4 hrs) · Fifteen Million Merits: Auditoría de Gastos en Libreta',
          unlockDate: '2026-10-12',
          unlockLabel: 'Lunes 12 de Octubre, 15:00 hrs',
          start: '¿Sabes exactamente cuántos Méritos o pesos gastas en pasajes, lonche y gustos durante una semana escolar?',
          dictation: `⏱️ HORA 1 · Black Mirror y Gastos Invisibles:
En "Fifteen Million Merits" de Black Mirror, los personajes pedalean a diario acumulando Méritos, pero compras automáticas e innecesarias se los descuentan sin que lo noten. En la vida diaria ocurre lo mismo: los gastos hormiga invisibles evaporan nuestros recursos si no llevamos un registro consciente de cada peso.

⏱️ HORA 2 · Maquetación de la Bitácora:
Una hoja de cálculo sin estructura es como pedalear a ciegas. Para dominar nuestras finanzas necesitamos un tablero con reglas claras que defina qué entra, qué sale y cuánto nos queda disponible en cada momento.

⏱️ HORA 3 · Formato Moneda ($) y 15 Gastos:
Para Google Sheets el número 50 es solo un valor abstracto. Al aplicar el formato Moneda ($), le indicamos que es dinero real, activando el signo de pesos y dos decimales para rastrear cada centavo que entra y sale.

⏱️ HORA 4 · Diagnóstico Visual y Sello 1:
El orden visual refleja control administrativo. Una tabla sin textos cortados y con números alineados a la derecha nos permite diagnosticar al instante en qué se fuga el dinero antes de aplicar cualquier fórmula matemática.`,
          learningResult: 'Analizar el episodio Fifteen Million Merits, maquetar la bitácora contable, aplicar formato Moneda ($) y registrar 15 movimientos financieros escolares.',
          identification: { topic: 'Black Mirror & Presupuesto Personal', evidence: 'Reflexión + Bitácora Maquetada con Gastos Registrados', organization: 'Individual', location: 'Laboratorio', time: '4 hrs' },
          infographicTitle: 'Estructura Visual del Presupuesto Personal',
          infographicSteps: [
            { title: '1. Proyección Black Mirror', desc: 'Analiza el consumo involuntario de Méritos en el episodio Fifteen Million Merits.' },
            { title: '2. Maquetación Limpia', desc: 'Crea 6 columnas: Día, Categoría, Descripción, Ingreso, Egreso y Saldo.' },
            { title: '3. Formato Moneda ($)', desc: 'Aplica formato numérico de moneda en todas las celdas financieras.' },
            { title: '4. Registro de 15 Gastos', desc: 'Captura movimientos reales/simulados de una semana escolar típica.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · LUNES (4 HORAS)
Metodología por Hora: Dictado Breve ➔ Ejemplo Concreto ➔ Pasos Sencillos ➔ Cómo Debe Quedar

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 1 (50 min) · Black Mirror: Créditos y Gastos Hormiga
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ DICTADO BREVE:
"En "Fifteen Million Merits" de Black Mirror, los personajes pedalean a diario acumulando Méritos, pero compras automáticas e innecesarias se los descuentan sin que lo noten. En la vida diaria ocurre lo mismo: los gastos hormiga invisibles evaporan nuestros recursos si no llevamos un registro consciente de cada peso."

💡 EJEMPLO:
Bing gana 100 créditos pedaleando, pero gasta 15 en silenciar anuncios, 30 en comida y 40 en ropa para su avatar. Solo le quedan 15 créditos reales.

💻 PASOS SENCILLOS:
1. Observar la proyección en cañón del episodio (pedaleo y compras virtuales).
2. Identificar en la libreta 3 compras innecesarias que descuentan créditos en la serie.
3. Relacionar cada compra con un gasto propio (pasajes, comida chatarra, recargas).

🏷️ CÓMO DEBE QUEDAR (Libreta):
Cuadro comparativo de 2 columnas: "Gasto en la Serie" vs "Mi Gasto Real Escolar" + conclusión de 1 línea.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 2 (50 min) · Maquetación de la Bitácora (Estructura Base)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ DICTADO BREVE:
"Una hoja de cálculo sin estructura es como pedalear a ciegas. Para dominar nuestras finanzas necesitamos un tablero con reglas claras que defina qué entra, qué sale y cuánto nos queda disponible en cada momento."

💡 EJEMPLO:
Hoja titulada \`Mi_Presupuesto_Semanal_301\` con membrete A1:F1 institucional azul marino y 6 encabezados en A3:F3: Día | Categoría | Descripción | Ingreso ($) | Egreso ($) | Saldo ($).

💻 PASOS SENCILLOS:
1. Crear hoja nueva en Google Sheets y nombrarla \`Mi_Presupuesto_Semanal_301\`.
2. Combinar A1:F1 para membrete, centrar y aplicar fondo azul marino con letra blanca negrita.
3. Escribir los 6 encabezados en A3:F3 y aplicar bordes limpios de celda.

🏷️ CÓMO DEBE QUEDAR (Pantalla Sheets):
Membrete A1:F1 azul marino institucional + 6 columnas A3:F3 con bordes limpios.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 3 (50 min) · Formato Moneda ($) y 15 Movimientos
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ DICTADO BREVE:
"Para Google Sheets el número 50 es solo un valor abstracto. Al aplicar el formato Moneda ($), le indicamos que es dinero real, activando el signo de pesos y dos decimales para rastrear cada centavo que entra y sale."

💡 EJEMPLO:
Al escribir 15 en Egreso, Google Sheets muestra automáticamente $ 15.00 con coma y decimales.

💻 PASOS SENCILLOS:
1. Seleccionar el rango contable D4:F19.
2. Aplicar menú: Formato > Número > Moneda ($).
3. Registrar 15 movimientos escolares (1 ingreso semanal de beca/apoyo y 14 egresos como pasajes, copias, comida).

🏷️ CÓMO DEBE QUEDAR (Pantalla Sheets):
15 filas capturadas con formato numérico Moneda ($ 0.00) visible en ingresos y egresos.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 4 (50 min) · Diagnóstico Visual y Primer Sello
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ DICTADO BREVE:
"El orden visual refleja control administrativo. Una tabla sin textos cortados y con números alineados a la derecha nos permite diagnosticar al instante en qué se fuga el dinero antes de aplicar cualquier fórmula matemática."

💡 EJEMPLO:
Doble clic entre las columnas para autoajustar textos, categorías centradas y cantidades a la derecha.

💻 PASOS SENCILLOS:
1. Autoajustar columnas A a F haciendo doble clic en sus separadores para que ningún texto quede cortado.
2. Alinear números a la derecha y categorías al centro.
3. Escribir 2 líneas en libreta: "Mi mayor gasto hormiga detectado fue..."
4. Presentar libreta y pantalla para firma del SELLO 1.

🏷️ CÓMO DEBE QUEDAR (SELLO 1):
Bitácora maquetada con 15 movimientos + formato $ activo + membrete limpio + conclusión en libreta firmada. 👉 SELLO 1`,
          closure: 'Reflexión de Black Mirror redactada en libreta y bitácora de gastos maquetada con formato Moneda ($).'
        },
        {
          id: 'S2', label: 'Sesión 02', subtitle: 'Miércoles (1 hr) · Maquetación en Google Sheets y Formato Moneda ($)',
          unlockDate: '2026-10-14',
          unlockLabel: 'Miércoles 14 de Octubre, 15:00 hrs',
          start: '¿Cómo calcular automáticamente si te queda dinero al final de cada día?',
          dictation: `Tener una lista de números en la pantalla es solo la mitad del trabajo. Una tabla sin fórmulas es como un reloj sin manecillas: se ve bien, pero no nos dice la hora exacta.

Hoy le enseñaremos a Google Sheets a pensar por nosotros mediante el concepto del Balance Contable. La regla es muy sencilla: tomamos todo el dinero que entra (nuestros Ingresos) y le restamos todo el dinero que sale (nuestros Egresos).

Si tus ingresos son mayores que tus egresos, obtienes un resultado positivo llamado Superávit, que significa tranquilidad y capacidad de ahorro. Pero si gastas más de lo que recibes, caes en un Déficit o números rojos que generan deudas.

Programaremos fórmulas de resta directa en Google Sheets para que, con solo cambiar un monto, el saldo disponible se calcule automáticamente en tiempo real, transformando tu hoja en un consultor financiero personal.`,
          learningResult: 'Programar fórmulas de resta directas para calcular el Saldo Neto al final de cada día.',
          identification: { topic: 'Balance Contable & Restas', evidence: 'Columna de Saldo Acumulado Operando', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Fórmulas de Balance Diario',
          infographicSteps: [
            { title: '1. Sintaxis de Resta', desc: 'Aplica el operador menos (-) para calcular saldos.' },
            { title: '2. Primer Saldo (F4)', desc: '=D4-E4 (Ingreso menos Egreso inicial).' },
            { title: '3. Saldo Acumulado (F5)', desc: '=F4-E5 (Saldo anterior menos nuevo egreso).' },
            { title: '4. Arrastre de Fórmula', desc: 'Copia la fórmula con el cuadrito azul de relleno.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · MIÉRCOLES (1 HORA)
Metodología: Explicación Breve (5 min) ➔ Práctica Guiada en PC (35 min) ➔ Cierre en Libreta

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 5 (50 min) · Programación de Balances (=Ingresos - Egresos)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Para saber si estamos ahorrando o en números rojos, la computadora calculará automáticamente el saldo neto al restar nuestros egresos de nuestros ingresos."

📝 DICTADO HORA 5:
Tener una lista de números en la pantalla es solo la mitad del trabajo. Una tabla sin fórmulas es como un reloj sin manecillas: se ve bien, pero no nos dice la hora exacta.

Hoy le enseñaremos a Google Sheets a pensar por nosotros mediante el concepto del Balance Contable. La regla es muy sencilla: tomamos todo el dinero que entra (nuestros Ingresos) y le restamos todo el dinero que sale (nuestros Egresos).

Si tus ingresos son mayores que tus egresos, obtienes un resultado positivo llamado Superávit, que significa tranquilidad y capacidad de ahorro. Pero si gastas más de lo que recibes, caes en un Déficit o números rojos que generan deudas.

Programaremos fórmulas de resta directa en Google Sheets para que, con solo cambiar un monto, el saldo disponible se calcule automáticamente en tiempo real, transformando tu hoja en un consultor financiero personal.

🖥️ DEMO EN CAÑÓN (5 min):
Modelar la fórmula F4: =D4-E4 y F5: =F4-E5, y cómo arrastrarla hacia abajo en la columna de Saldo Acumulado.

💻 RETO 1 (35 min en PC):
Programar la columna de Saldo Acumulado en cada fila del presupuesto.

📊 RESULTADO ESPERADO HORA 5 (Pantalla Google Sheets):
Fila 4: =D4-E4 ($300.00) | Fila 5: =F4-E5 ($285.00) | Fila 6: =F5-E6 ($240.00)... Saldo automático.

🏷️ EVIDENCIA Y SELLO 2:
Columna de Saldo Acumulado calculando balances automáticamente. 👉 SELLO 2`,
          closure: 'Fórmulas de balance diario programadas y funcionando.'
        },
        {
          id: 'S3', label: 'Sesión 03', subtitle: 'Jueves (2 hrs) · Laboratorio Pro en Google Sheets: Balances, Métricas & Semáforo',
          unlockDate: '2026-10-15',
          unlockLabel: 'Jueves 15 de Octubre, 15:00 hrs',
          start: '¿Cuál fue tu día más caro y cuánto gastaste en promedio diariamente?',
          dictation: `⏱️ HORA 1 · De la Ficción al Tablero Financiero:
Una hoja de cálculo sin estructura es exactamente como pedalear a ciegas en el mundo de Black Mirror: trabajas y te esfuerzas todos los días, pero al final de la semana tu dinero simplemente desapareció sin dejar rastro. El verdadero poder de un profesional de la informática no radica en escribir números aislados, sino en construir un tablero de control contable donde cada variable tenga una etiqueta, un propósito y una celda asignada.

Para tomar el control de nuestras finanzas escolares, hoy configuraremos nuestra bitácora en seis columnas maestras: Día, Categoría, Descripción, Ingresos, Egresos y Saldo Disponible. Al aplicar el formato numérico de Moneda ($), le enseñamos a Google Sheets a tratar cada cifra como dinero real, añadiendo el símbolo de pesos, comas de miles y centavos exactos para rastrear las fugas de capital.

Finalmente, convertiremos la hoja en un consultor financiero automatizado mediante fórmulas de balance diario. Con una simple resta programada (=D4-E4 y =F4-E5), la computadora calculará en tiempo real cuánto dinero nos queda después de cada pasaje, cada lonche o cada copia, transformando una lista estática en un sistema inteligente de supervivencia económica.

⏱️ HORA 2 · El Cerebro Estadístico y el Semáforo de Wall Street:
En el mundo empresarial y financiero existe una regla indiscutible: los directores ejecutivos nunca leen listas interminables de números; lo que exigen son resúmenes analíticos e indicadores clave de rendimiento que cuenten la verdad del negocio de un solo vistazo. Cuando aprendes a sintetizar docenas de filas en cuatro datos estadísticos, dejas de ser un capturista de datos para convertirte en un estratega.

Al costado de nuestro presupuesto programaremos las cuatro funciones estadísticas fundamentales: SUMA para auditar el gasto total acumulado, PROMEDIO para descubrir cuánto nos cuesta sobrevivir cada día escolar, y MAX y MIN para identificar con precisión matemática cuál fue nuestro día de mayor derroche y cuál el más disciplinado. Estas métricas revelan lo que los economistas llaman el "Gasto Vampiro": pequeñas fugas cotidianas que, multiplicadas por doscientos días de clase, representan miles de pesos evaporados.

Para blindar nuestro presupuesto, colocaremos un escudo de seguridad visual llamado Formato Condicional. Diseñaremos un Semáforo Inteligente Tricolor que reaccionará en milisegundos a tus resultados: iluminará tu saldo final en verde de tranquilidad cuando logres ahorrar, en amarillo preventivo si estás en la cuerda floja, y en rojo de alarma crítica si gastaste más créditos de los que tenías, avisándote del peligro sin que tengas que buscar la cifra entre todas las celdas.`,
          learningResult: 'Construir la tabla de resumen estadístico y configurar el semáforo condicional tricolor de ahorro.',
          identification: { topic: 'Estadística & Semáforo Financiero', evidence: 'Tabla Resumen + Semáforo Condicional', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Resumen Estadístico y Semáforo',
          infographicSteps: [
            { title: '1. Función =SUMA', desc: '=SUMA(E4:E18) calcula el total absoluto gastado.' },
            { title: '2. Función =PROMEDIO', desc: '=PROMEDIO(E4:E18) obtiene el gasto promedio diario.' },
            { title: '3. Max y Min', desc: '=MAX(E4:E18) y =MIN(E4:E18) hallan el mayor y menor gasto.' },
            { title: '4. Semáforo Tricolor', desc: 'Aplica verde para ahorro (>0), amarillo (0-20) y rojo (<0).' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · JUEVES (2 HORAS)
Metodología: Demostración Visual (5 min) ➔ Reto Autónomo en PC (40 min) ➔ Auditoría de Sellos

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 1 (50 min) · Maquetación Pro, Gastos Vampiro y Balances
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Muchachos, ¿sabían que gastar $38 pesos diarios en papitas y refresco equivale a $7,600 pesos al año? Literalmente se están comiendo una laptop en pura comida chatarra. Hoy abrimos Google Sheets para encender el radar contable y programar fórmulas de balance en tiempo real."

📝 DICTADO HORA 1:
Una hoja de cálculo sin estructura es exactamente como pedalear a ciegas en el mundo de Black Mirror: trabajas y te esfuerzas todos los días, pero al final de la semana tu dinero simplemente desapareció sin dejar rastro. El verdadero poder de un profesional de la informática no radica en escribir números aislados, sino en construir un tablero de control contable donde cada variable tenga una etiqueta, un propósito y una celda asignada.

Para tomar el control de nuestras finanzas escolares, hoy configuraremos nuestra bitácora en seis columnas maestras: Día, Categoría, Descripción, Ingresos, Egresos y Saldo Disponible. Al aplicar el formato numérico de Moneda ($), le enseñamos a Google Sheets a tratar cada cifra como dinero real, añadiendo el símbolo de pesos, comas de miles y centavos exactos para rastrear las fugas de capital.

Finalmente, convertiremos la hoja en un consultor financiero automatizado mediante fórmulas de balance diario. Con una simple resta programada (=D4-E4 y =F4-E5), la computadora calculará en tiempo real cuánto dinero nos queda después de cada pasaje, cada lonche o cada copia, transformando una lista estática en un sistema inteligente de supervivencia económica.

💡 DATO CURIOSO:
"El Efecto Latte / Gasto Vampiro: pequeñas compras de menos de $20 pesos que pasan desapercibidas en el bolsillo pero suman miles de pesos en el balance anual."

🖥️ DEMO EN CAÑÓN (5 min):
1) Abrir sheets.new. Combinar A1:F1 institucional: CONALEP PACHUCA II — CONTROL DE PRESUPUESTO PERSONAL.
2) Encabezados A3:F3 en verde petróleo con bordes completos: Día | Categoría | Descripción | Ingreso ($) | Egreso ($) | Saldo ($).
3) Rango D4:F18 ➔ Formato > Número > Moneda ($).
4) Fórmulas de balance: En F4 teclear =D4-E4. En F5 teclear =F4-E5 y dar doble clic en el cuadrito azul para correr el balance hasta F18.

💻 RETO 1 EN PC (40 min):
Maquetar la hoja, dar formato de moneda a todas las cifras numéricas, capturar 15 movimientos escolares basados en la libreta y programar la columna de saldo acumulado.

🏷️ EVIDENCIA Y SELLO 3:
Bitácora maquetada con formato moneda ($), 15 registros escolares y columna de saldo calculando restas automáticas en vivo. 👉 SELLO 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 2 (50 min) · Resumen Estadístico & Semáforo de Wall Street
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Los analistas de Wall Street no leen listas interminables de números; exigen tableros con métricas clave y semáforos inteligentes. Hoy programaremos 4 funciones matemáticas al costado de su hoja y le pondremos un escudo visual a su saldo que se iluminará en verde, amarillo o rojo."

📝 DICTADO HORA 2:
En el mundo empresarial y financiero existe una regla indiscutible: los directores ejecutivos nunca leen listas interminables de números; lo que exigen son resúmenes analíticos e indicadores clave de rendimiento que cuenten la verdad del negocio de un solo vistazo. Cuando aprendes a sintetizar docenas de filas en cuatro datos estadísticos, dejas de ser un capturista de datos para convertirte en un estratega.

Al costado de nuestro presupuesto programaremos las cuatro funciones estadísticas fundamentales: SUMA para auditar el gasto total acumulado, PROMEDIO para descubrir cuánto nos cuesta sobrevivir cada día escolar, y MAX y MIN para identificar con precisión matemática cuál fue nuestro día de mayor derroche y cuál el más disciplinado. Estas métricas revelan lo que los economistas llaman el "Gasto Vampiro": pequeñas fugas cotidianas que, multiplicadas por doscientos días de clase, representan miles de pesos evaporados.

Para blindar nuestro presupuesto, colocaremos un escudo de seguridad visual llamado Formato Condicional. Diseñaremos un Semáforo Inteligente Tricolor que reaccionará en milisegundos a tus resultados: iluminará tu saldo final en verde de tranquilidad cuando logres ahorrar, en amarillo preventivo si estás en la cuerda floja, y en rojo de alarma crítica si gastaste más créditos de los que tenías, avisándote del peligro sin que tengas que buscar la cifra entre todas las celdas.

💡 ANÉCDOTA EMPRESARIAL:
"Los bancos detectan fraudes y quiebras con reglas de formato condicional automáticas. Hoy construiremos ese mismo escudo financiero sobre su propio dinero."

🖥️ DEMO EN CAÑÓN (5 min):
1) Tabla lateral H3:I8.
   H4: =SUMA(D4:D18)  |  H5: =SUMA(E4:E18)
   H6: =PROMEDIO(E4:E18)  |  H7: =MAX(E4:E18)  |  H8: =MIN(E4:E18)
2) Formato Condicional sobre Saldo Final (F18):
   Verde claro (> 20 Ahorro) | Amarillo (0 a 20 Riesgo) | Rojo vivo (< 0 Quiebra / Déficit).
3) Prueba de estrés: Subir un gasto a $500 y ver cómo el saldo se vuelve rojo al instante.

💻 RETO 2 EN PC (35 min):
Construir la tabla estadística lateral con las 4 funciones y configurar las 3 reglas del semáforo tricolor sobre el saldo final.

🏷️ EVIDENCIA Y SELLO 4:
Tabla de resumen estadístico funcionando con las 4 funciones y semáforo condicional reactivo sobre el Saldo Final. 👉 SELLO 4`,
          closure: 'Resumen estadístico y semáforo condicional de ahorro terminados.'
        },
        {
          id: 'S4', label: 'Sesión 04', subtitle: 'Viernes (1 hr) · Dashboard Gráfico & Cierre',
          unlockDate: '2026-10-16',
          unlockLabel: 'Viernes 16 de Octubre, 15:00 hrs',
          start: '¿Cómo presentar tus resultados financieros con gráficos ejecutivos?',
          dictation: `En el mundo profesional existe una máxima indiscutible: una imagen vale más que mil números. Cuando presentas un proyecto, las tablas saturadas de cifras pueden resultar abrumadoras y difíciles de interpretar.

Para comunicar resultados de forma clara y convincente se utilizan los Dashboards o Tableros de Control Ejecutivo, los cuales combinan los mejores gráficos visuales para contar la historia real detrás de los datos.

Hoy traduciremos nuestras finanzas en dos gráficos esenciales: una Gráfica de Pastel para ver qué porcentaje del dinero se va en transporte, lonche o antojos, y una Gráfica de Columnas para comparar la tendencia de gasto día a día.

Al integrar estos gráficos en tu hoja, habrás creado un Dashboard Financiero de nivel profesional, concluyendo tu práctica con una herramienta estratégica que te servirá para toda tu vida.`,
          learningResult: 'Insertar una gráfica de pastel y una gráfica de columnas para el Dashboard de Presupuesto Personal.',
          identification: { topic: 'Dashboard Gráfico & Cierre', evidence: 'Dashboard Financiero Completo con Gráficos', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Dashboard de Presupuesto Personal',
          infographicSteps: [
            { title: '1. Gráfica de Pastel', desc: 'Visualiza la distribución del dinero por categorías (B4:B18 y E4:E18).' },
            { title: '2. Gráfica de Columnas', desc: 'Compara el nivel de gasto de Lunes a Viernes (A4:A18 y E4:E18).' },
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

📝 DICTADO HORA 8:
En el mundo profesional existe una máxima indiscutible: una imagen vale más que mil números. Cuando presentas un proyecto, las tablas saturadas de cifras pueden resultar abrumadoras y difíciles de interpretar.

Para comunicar resultados de forma clara y convincente se utilizan los Dashboards o Tableros de Control Ejecutivo, los cuales combinan los mejores gráficos visuales para contar la historia real detrás de los datos.

Hoy traduciremos nuestras finanzas en dos gráficos esenciales: una Gráfica de Pastel para ver qué porcentaje del dinero se va en transporte, lonche o antojos, y una Gráfica de Columnas para comparar la tendencia de gasto día a día.

Al integrar estos gráficos en tu hoja, habrás creado un Dashboard Financiero de nivel profesional, concluyendo tu práctica con una herramienta estratégica que te servirá para toda tu vida.

💻 RETO 4 (25 min en PC):
Insertar 2 gráficas estadísticas en la hoja:
1) Gráfica de Pastel (Distribución por categoría: B4:B11 y E4:E11).
2) Gráfica de Columnas (Comparativa diaria: A4:A11 y E4:E11).

📊 RESULTADO ESPERADO HORA 8 (Dashboard Final Completo):
Gráfica de Pastel mostrando porcentajes por categoría + Gráfica de Columnas mostrando picos diarios de gasto.

🏷️ EVIDENCIA Y SELLO FINAL:
Dashboard de Presupuesto Personal completado con 2 gráficas y sellos revisados. 👉 SELLO FINAL`,
          closure: 'Dashboard de Presupuesto Personal terminado con gráficos de pastel y columnas.'
        }
      ]
    },
    'W10': {
      id: 'W10',
      label: 'Semana 10',
      title: 'App Móvil GeoCalc en App Inventor (Portada, Menú, Cuadrado y Rectángulo)',
      dates: '19 Oct - 23 Oct',
      status: 'historical',
      templateUrl: './templates/GeoCalc_CONALEP.aia',
      templateFileName: 'GeoCalc_CONALEP.aia',
      templateBtnText: 'Descargar Proyecto Maestro (.aia)',
      templateBtnColor: '#005C42',
      toolUrl: 'https://ai2.appinventor.mit.edu',
      toolBtnText: 'Abrir MIT App Inventor',
      summary: 'Inicio de la app GeoCalc en MIT App Inventor: diseño en libreta y maquetación en PC de Screen1 (Portada), Screen2 (Menú Principal), Screen3 (Cuadrado con área y perímetro) y Screen4 (Rectángulo con área y perímetro).',
      expectedProduct: 'Proyecto GeoCalc con Portada, Menú, Cuadrado y Rectángulo maquetados y programados con bloques aritméticos.',
      notices: [
        'Alineación Curricular: Actividad integradora del RA 2.2 (Segundo Corte · 15%).',
        'Avance Concluido en Semana 10: Screen1 (Portada), Screen2 (Menú Principal), Screen3 (Cuadrado) y Screen4 (Rectángulo) con cálculo de área y perímetro programados.',
        'Continuación en Semana 11: Pantallas de Triángulo, Círculo y Pentágono, conclusión de bloques, AI Companion y evaluación sumativa.'
      ],
      sessions: [
        {
          id: 'S1', label: 'Sesión 01', subtitle: 'Lunes (4 hrs) · Portada y Menú en Libreta & Arranque en App Inventor (REALIZADA)',
          start: '¿Cómo se transforma una fórmula geométrica en una app interactiva para celular?',
          dictation: `⏱️ HORA 1 · De la Pantalla Táctil a la Arquitectura UI/UX:
El desarrollo de aplicaciones móviles se fundamenta en la arquitectura basada en eventos, donde el flujo de ejecución responde a las interacciones del usuario. En la industria, el diseño de interfaces se rige por los principios de Experiencia de Usuario (UX) y Diseño Visual (UI), buscando minimizar la carga mental con botones ergonómicos y etiquetas claras.

⏱️ HORA 2 · El Enrutador de Pantallas y el Menú Principal:
Las aplicaciones complejas distribuyen sus módulos en múltiples pantallas para optimizar memoria RAM y facilitar la navegación. En App Inventor, la transición entre vistas se gestiona mediante el controlador de pantallas nativo, el cual suspende temporalmente la vista previa y carga en primer plano el nuevo lienzo de trabajo.

⏱️ HORA 3 · Bocetado en Papel y Wireframing:
Antes de tocar una sola línea de código o insertar componentes en el lienzo digital, los ingenieros de software diseñan bocetos visuales en papel. Dibujar la portada y la distribución del menú en la libreta permite dimensionar los espacios, jerarquizar los botones y definir los datos que se pedirán al usuario.

⏱️ HORA 4 · Arranque del Proyecto en MIT App Inventor:
Al trasladar el diseño de la libreta a la nube, se configuran las disposiciones verticales y horizontales necesarias, se cargan los activos multimedia como el logotipo de CONALEP y se construyen las dos pantallas iniciales: Screen1 (Portada) y MenuPrincipal.`,
          learningResult: 'Diseñar en libreta los wireframes de Portada y Menú, y arrancar su maquetación digital en MIT App Inventor.',
          identification: { topic: 'Wireframing & Arquitectura Móvil', evidence: 'Bocetos en Libreta + Avance en App Inventor', organization: 'Individual', location: 'Aula / Laboratorio', time: '4 hrs' },
          infographicTitle: 'Ruta del Día: Del Papel a la Nube',
          infographicSteps: [
            { title: '1. Wireframe en Libreta', desc: 'Bocetado de Screen1 (Portada) y Screen2 (Menú) con sus 5 botones.' },
            { title: '2. Login en App Inventor', desc: 'Apertura de sesión en ai2.appinventor.mit.edu y proyecto GeoCalc.' },
            { title: '3. Membrete y Logo', desc: 'Disposición verde con escudo CONALEP y datos del módulo.' },
            { title: '4. Avance de Maquetación', desc: 'Inserción de componentes en Screen1 y creación de MenuPrincipal.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · LUNES (4 HORAS) — SESIÓN REALIZADA
Metodología: Wireframing en Libreta ➔ Explicación en Cañón ➔ Arranque en PC ➔ Cotejo de Bocetos

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 1 y 2 (100 min) · Bocetado en Libreta (Wireframes de Portada y Menú)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Ningún arquitecto construye un rascacielos sin planos, y ningún programador abre un editor sin haber dibujado primero su app en papel. Hoy diseñamos en la libreta los dos planos maestros de nuestra app: la Portada Institucional y el Menú Principal."

📝 ACTIVIDAD EN LIBRETA:
1. Diseñar el wireframe de Screen1: encabezado institucional, espacio del escudo CONALEP, datos de la escuela, módulo, maestro, caja de texto para el alumno y botón de entrar.
2. Diseñar el wireframe de MenuPrincipal: tarjeta de título y los 5 botones para Cuadrado, Rectángulo, Triángulo, Círculo y Pentágono.

🏷️ EVIDENCIA Y SELLO 1:
Bocetos terminados en libreta de Screen1 y Screen2 con jerarquía visual. 👉 SELLO 1 (LIBRETA)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 3 y 4 (100 min) · Arranque de Maquetación en MIT App Inventor
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Ahora que los planos están listos en la libreta, abrimos las computadoras para comenzar a construir el esqueleto digital en App Inventor."

🖥️ DEMO EN CAÑÓN (10 min):
1) Abrir ai2.appinventor.mit.edu con cuenta Google.
2) Iniciar nuevo proyecto: GeoCalc_Grupo301.
3) Subir el logo de CONALEP a los Medios/Assets.
4) Maquetar Screen1 con Disposición Vertical verde (#005C42), textos y caja de texto para el alumno.
5) Clic en 'Add Screen' ➔ MenuPrincipal.

💻 RETO EN PC:
Los alumnos comenzaron a colocar los componentes visuales de Screen1 y Screen2 en App Inventor. Al ser una práctica desde cero, no concluyeron al 100% la maquetación en la computadora; el proyecto se continuará y finalizará el miércoles en el laboratorio.

🏷️ EVIDENCIA:
Proyecto GeoCalc_Grupo301 creado en App Inventor con avance en Screen1 y MenuPrincipal.`,
          closure: 'Bocetos en libreta concluidos y arranque de maquetación en App Inventor registrado. Se continúa el miércoles.'
        },
        {
          id: 'S2', label: 'Sesión 02', subtitle: 'Miércoles (1 hr) · Conclusión de Portada, Menú & Maquetación de Cuadrado',
          start: '¿Cómo validar que la navegación entre pantallas funcione fluidamente sin errores?',
          dictation: `⏱️ HORA 5 · Ajuste Fino de Interfaces y Salto de Pantalla:
En el ciclo de desarrollo de software móvil, la transición del prototipo en papel (wireframe) a la interfaz digital requiere ajustar propiedades visuales clave: anchos en modo "Fill parent", alineaciones horizontales al centro y contraste cromático institucional. La conexión entre pantallas se valida mediante el bloque nativo open another screen, garantizando que el usuario pueda transitar fluidamente entre la portada de presentación y el catálogo de figuras sin bloqueos de memoria.`,
          learningResult: 'Concluir en App Inventor la maquetación de Portada y Menú, programar el salto entre pantallas y maquetar ScreenCuadrado.',
          identification: { topic: 'Navegación Móvil & Formatos', evidence: 'Portada y Menú Terminados + Cuadrado Maquetado', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Ruta del Miércoles: Conexión de Pantallas',
          infographicSteps: [
            { title: '1. Afinar Portada', desc: 'Asegura que el logo, datos y botón de acceso estén bien alineados.' },
            { title: '2. Terminar Menú', desc: 'Configura los 5 botones con textos legibles y nombres técnicos.' },
            { title: '3. Bloque de Salto', desc: 'when Btn_Ingresar.Click do open another screen "MenuPrincipal".' },
            { title: '4. Pantalla Cuadrado', desc: 'Add Screen: ScreenCuadrado con fórmula visible y caja numéricas.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · MIÉRCOLES (1 HORA)
Metodología: Demostración en Cañón (5 min) ➔ Reto Autónomo en PC (40 min) ➔ Auditoría de Sellos

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 5 (50 min) · Conclusión de Portada, Menú y Maquetación de Cuadrado
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"El lunes diseñamos los planos en papel y pusimos los primeros ladrillos digitales; hoy afinamos los detalles visuales de la portada y el menú, comprobamos que el botón de salto funcione al 100% y abrimos la primera calculadora: el Cuadrado."

📝 DICTADO HORA 5:
En el ciclo de desarrollo de software móvil, la transición del prototipo en papel (wireframe) a la interfaz digital requiere ajustar propiedades visuales clave: anchos en modo "Fill parent", alineaciones horizontales al centro y contraste cromático institucional. La conexión entre pantallas se valida mediante el bloque nativo open another screen, garantizando que el usuario pueda transitar fluidamente entre la portada de presentación y el catálogo de figuras sin bloqueos de memoria.

🖥️ DEMO EN CAÑÓN (5 min):
1) Abrir el proyecto GeoCalc_Grupo301 en App Inventor.
2) Revisar Screen1: centrar encabezados, verificar que Txt_NombreAlumno tenga ancho ajustado y Btn_Ingresar tenga texto visible.
3) En MenuPrincipal: verificar los 5 botones nombrados técnicamente (Btn_Cuadrado, Btn_Rectangulo, etc.).
4) En el Blocks Editor de Screen1: conectar when Btn_Ingresar.Click do open another screen "MenuPrincipal".
5) Add Screen: ScreenCuadrado con tarjeta de fórmula (A = L², P = 4L), caja con NumbersOnly = True y botón de regreso.

💻 RETO EN PC (40 min):
1. Terminar y pulir la portada y el menú en App Inventor.
2. Probar en el emulador/pantalla que el botón 'INGRESAR AL MENÚ' cambie de pantalla correctamente.
3. Maquetar ScreenCuadrado con su botón de volver al menú.

🏷️ EVIDENCIA Y SELLO 2:
Portada y Menú concluidos y funcionando en App Inventor + ScreenCuadrado maquetada. 👉 SELLO 2 (PC)`,
          closure: 'Portada y Menú terminados y funcionando con cambio de pantalla, y ScreenCuadrado maquetada.'
        },
        {
          id: 'S3', label: 'Sesión 03', subtitle: 'Jueves (2 hrs) · Figuras Restantes & Blocks Editor',
          start: '¿Cómo conectar el cerebro matemático de la app para calcular áreas y perímetros?',
          dictation: `⏱️ HORA 6 · Maquetación de Figuras de Orden Superior:
El diseño modular permite clonar la estructura de interfaces ya probadas. Al diseñar las pantallas de Rectángulo, Triángulo, Círculo y Pentágono, se replican los mismos patrones de diseño: barra superior de navegación, tarjeta didáctica de fórmulas, campos numéricos protegidos y tarjetas de resultados estilizadas.

⏱️ HORA 7 · Programación de Bloques Aritméticos:
En el Blocks Editor, los operadores aritméticos (multiplicación, suma, división) transforman los valores ingresados por el usuario en resultados geométricos precisos. Mediante el bloque de concatenación, el sistema une los valores numéricos con sus unidades métricas (cm² y cm), presentando una respuesta legible y profesional.`,
          learningResult: 'Maquetar las pantallas restantes y programar los bloques de cálculo para las figuras geométricas.',
          identification: { topic: 'Programación por Bloques & Módulos', evidence: '7 Pantallas Maquetadas + Bloques Operativos', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Ruta del Jueves: Lógica Matemática',
          infographicSteps: [
            { title: '1. Figuras Restantes', desc: 'Maqueta Rectángulo, Triángulo, Círculo y Pentágono.' },
            { title: '2. Bloques Cuadrado y Rectángulo', desc: 'Multiplica lados y suma perímetros en el Blocks Editor.' },
            { title: '3. Triángulo, Círculo y Pentágono', desc: 'Aplica división ((b*h)/2), Pi (3.1416) y apotema.' },
            { title: '4. Botones de Limpieza', desc: 'Resetea campos de texto y etiquetas a su estado inicial.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · JUEVES (2 HORAS)
Metodología: Demostración en Cañón (5 min) ➔ Reto Autónomo en PC (40 min) ➔ Auditoría de Sellos

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 6 (50 min) · Maquetación de Pantallas Restantes (Rectángulo a Pentágono)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Ya dominamos el Cuadrado; ahora replicamos la estructura en las otras 4 figuras para completar nuestro centro geométrico."

🖥️ DEMO EN CAÑÓN (5 min):
Creación ágil de ScreenRectangulo, ScreenTriangulo, ScreenCirculo y ScreenPentagono con botones de regreso al Menú.

💻 RETO EN PC (40 min):
Completar la maquetación de las 7 pantallas del proyecto en el Designer.

🏷️ EVIDENCIA Y SELLO 3:
Las 7 pantallas maquetadas y enlazadas en el Designer de App Inventor. 👉 SELLO 3

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 7 (50 min) · Blocks Editor: Conectando el Cerebro Matemático
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Las pantallas ya existen; hoy les damos vida con los bloques de cálculo para que multipliquen, dividan y muestren resultados con unidades de medida."

🖥️ DEMO EN CAÑÓN (5 min):
1) Programar bloques de cálculo:
   - Cuadrado: Área = Lado * Lado, Perímetro = 4 * Lado.
   - Pentágono: Perímetro = 5 * Lado, Área = (Perímetro * Apotema) / 2.
2) Unir unidades: join("Área = ", resultado, " cm²").
3) Programar botones de limpiar.

💻 RETO EN PC (40 min):
Programar la lógica completa de las 5 figuras en el Blocks Editor.

🏷️ EVIDENCIA Y SELLO 4:
Bloques de cálculo y limpieza programados y funcionales en las figuras. 👉 SELLO 4`,
          closure: 'Las 7 pantallas quedaron maquetadas y con sus bloques de cálculo programados.'
        },
        {
          id: 'S4', label: 'Sesión 04', subtitle: 'Viernes (1 hr) · Emulación en Celular & Manual de Usuario',
          start: '¿Cómo certificar la calidad de una app móvil en un teléfono real y documentar su uso?',
          dictation: `⏱️ HORA 8 · Emulación en Hardware Real y Manual de Usuario:
La depuración en hardware real mediante MIT AI2 Companion valida que la experiencia táctil, la respuesta de los botones y el formato de las pantallas se comporten correctamente en diferentes resoluciones móviles. La documentación técnica mediante el Manual de Usuario certifica que el producto fue verificado con casos de prueba matemáticos y está listo para ser utilizado por terceros.`,
          learningResult: 'Probar la app en vivo en el celular con AI Companion y elaborar el Manual de Usuario en PDF.',
          identification: { topic: 'Depuración Móvil & Manual de Usuario', evidence: 'App en Celular + Manual de Usuario en PDF', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Ruta del Viernes: Prueba y Cierre',
          infographicSteps: [
            { title: '1. Conexión QR', desc: 'Escanea el código con MIT AI2 Companion en el celular.' },
            { title: '2. Casos de Prueba', desc: 'Resuelve los 5 ejercicios de control en la pantalla táctil.' },
            { title: '3. Capturas de Pantalla', desc: 'Toma fotos/capturas reales de los resultados obtenidos.' },
            { title: '4. Manual en PDF', desc: 'Redacta el manual en Word/Docs con portada y tabla cotejada.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · VIERNES (1 HORA)
Metodología: Prueba en Celular (20 min) ➔ Redacción Técnica (20 min) ➔ Corte de Sellos (10 min)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 8 (50 min) · Emulación en Vivo y Elaboración del Manual de Usuario
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"El momento cumbre: pasamos la app a nuestro propio celular mediante código QR, resolvemos los casos de prueba y redactamos el manual que certifica su calidad."

🖥️ DEMO EN CAÑÓN (5 min):
1) Menú 'Connect' ➔ 'AI Companion'.
2) Escanear con la cámara y probar la app corriendo en tiempo real.
3) Mostrar la estructura del Manual de Usuario en Word/Docs.

💻 RETO EN PC (35 min):
1. Conectar celular, probar las 5 figuras y tomar capturas de los resultados.
2. Armar el documento 'Manual_Usuario_GeoCalc_Apellido_Nombre.pdf' con portada institucional, diagrama de pantallas, capturas reales y tabla de casos de prueba.

🏷️ EVIDENCIA Y SELLO FINAL:
App probada en vivo en el celular + Manual de Usuario entregado en PDF. 👉 SELLO FINAL (SELLO 5)`,
          closure: 'App probada exitosamente en celulares y entrega del Manual de Usuario completada.'
        }
      ]
    },
    'W11': {
      id: 'W11',
      label: 'Semana 11',
      title: 'App GeoCalc: Diseños, Navegación y Pruebas en Vivo (Cierre de Semana)',
      dates: '26 Oct - 30 Oct',
      status: 'historical',
      templateUrl: './templates/GeoCalc_CONALEP.aia',
      templateFileName: 'GeoCalc_CONALEP.aia',
      templateBtnText: 'Descargar Proyecto Maestro (.aia)',
      templateBtnColor: '#005C42',
      toolUrl: 'https://ai2.appinventor.mit.edu',
      toolBtnText: 'Abrir MIT App Inventor',
      summary: 'Consolidación de la app GeoCalc en MIT App Inventor: maquetación visual de las 7 pantallas, enlaces de navegación, pruebas en vivo en celulares con MIT AI2 Companion y apoyo institucional en proyectos de robótica para el aniversario.',
      expectedProduct: 'Proyecto GeoCalc con las 7 pantallas maquetadas y probadas en smartphones vía MIT AI2 Companion.',
      notices: [
        'Lunes (Realizada): Maquetación al 100% de las 7 pantallas en Designer y programación de los botones de navegación iniciales (Portada ➔ Menú ➔ Figuras).',
        'Miércoles (Hora 5): Sesión de prueba y emulación de la app en smartphones mediante MIT AI2 Companion (código QR), ajustes de interfaz y cierre de la entrega en EDOA (Sello 2).',
        'Jueves (Sesión Cedida): Apoyo al Profr. Alex en proyectos de Robots para el Aniversario del Plantel con los alumnos del grupo 301-INFO25.',
        'Viernes: Actividad Institucional y Festival Conmemorativo del Día de Muertos en CONALEP Pachuca II (sin laboratorio ordinario).'
      ],
      sessions: [
        {
          id: 'S1', label: 'Sesión 01', subtitle: 'Lunes (4 hrs) · Maquetación de 7 Pantallas y Botones de Navegación (REALIZADA)',
          start: '¿Cómo estructuramos una arquitectura completa de 7 pantallas para que un usuario navegue fluidamente en su teléfono?',
          dictation: `⏱️ HORA 1-4 · Arquitectura UI y Flujo de Navegación Multi-Pantalla:
En el desarrollo de aplicaciones móviles profesionales, la fase de maquetación en el Designer define la experiencia espacial del usuario. La consistencia visual se logra aplicando un sistema de diseño homogéneo en las 7 pantallas del sistema: Portada institucional con membrete oficial, Menú principal centrado con accesos ergonómicos y 5 pantallas de figuras geométricas con tarjetas de fórmulas, entradas numéricas restringidas y botones de acción. La navegación se programa con el bloque nativo open another screen, estableciendo un flujo bidireccional estable entre la portada, el menú y cada una de las calculadoras.`,
          learningResult: 'Completar la maquetación visual de las 7 pantallas y programar los enlaces de navegación iniciales.',
          identification: { topic: 'Maquetación Total y Navegación GeoCalc', evidence: 'App en App Inventor con 7 Pantallas', organization: 'Individual en PC', location: 'Laboratorio de Informática', time: '4 hrs' },
          infographicTitle: 'Ruta Sesión 01 (REALIZADA)',
          infographicSteps: [
            { title: '1. Portada y Menú', desc: 'Maqueta Screen1 institucional y Screen2 con los 5 botones centrados.' },
            { title: '2. 5 Pantallas Figuras', desc: 'Diseña Cuadrado, Rectángulo, Triángulo, Círculo y Pentágono con cajas NumbersOnly.' },
            { title: '3. Botón de Entrada', desc: 'Programa el salto de Screen1 a MenuPrincipal mediante open another screen.' },
            { title: '4. Enlaces de Menú', desc: 'Conecta cada botón de figura y asegura el botón de retorno al menú.' }
          ],
          development: `🎙️ REGISTRO DE AVANCE DOCENTE · LUNES (4 HORAS)
Estatus: ¡Sesión completada con éxito rotundo en laboratorio!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORAS 1 A 4 (16:50 - 20:10) · Maquetación Total y Navegación
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Se logró la meta técnica de la jornada:
1) Maquetación visual (Designer) de la totalidad de las 7 pantallas:
   - Screen1 (Portada con membrete CONALEP Pachuca II, datos y botón de ingreso).
   - Screen2 (MenuPrincipal con 5 accesos directos ergonómicos).
   - ScreenCuadrado, ScreenRectangulo, ScreenTriangulo, ScreenCirculo y ScreenPentagono.
2) Primeros bloques de navegación:
   - Programación del salto inicial: when btnIngresar.Click do open another screen 'MenuPrincipal'.
   - Programación de botones de menú hacia pantallas secundarias y botones de retorno al menú.

👉 EVIDENCIA REGISTRADA (SELLO 1): Las 7 pantallas maquetadas al 100% en Designer y botones de navegación operando.`,
          closure: 'Maquetación de las 7 pantallas y navegación base completada exitosamente.'
        },
        {
          id: 'S2', label: 'Sesión 02', subtitle: 'Miércoles (1 hr) · Pruebas en Celular con MIT AI2 Companion & Cierre EDOA',
          start: '¿Cómo se siente nuestra aplicación al tocarla directamente en la pantalla de un smartphone real?',
          dictation: `⏱️ HORA 5 · Emulación en Hardware Real y Pruebas de Usabilidad:
Las pruebas de aceptación en dispositivos móviles permiten comprobar en vivo la ergonomía táctil, los tiempos de carga y el comportamiento de las pantallas bajo hardware real. Mediante MIT AI2 Companion, el entorno se conecta por red local vía código QR, permitiendo validar la fluidez del paso entre la portada institucional, el catálogo de figuras y el retorno al menú sin bloqueos.`,
          learningResult: 'Conectar la app a smartphones mediante código QR y validar la navegación táctil en tiempo real.',
          identification: { topic: 'Testing Móvil con AI Companion', evidence: 'App Corriendo en Smartphone', organization: 'Individual / Parejas', location: 'Laboratorio de Informática', time: '1 hr' },
          infographicTitle: 'Ruta Sesión 02 (1 Hora)',
          infographicSteps: [
            { title: '1. Connect AI Companion', desc: 'Despliega el código QR de 6 caracteres desde el menú Connect.' },
            { title: '2. Escaneo en Celular', desc: 'Abre MIT AI2 Companion en Android y escanea el código.' },
            { title: '3. Navegación Táctil', desc: 'Prueba el paso entre Portada, Menú y las 5 pantallas de figuras.' },
            { title: '4. Ajustes y Sello', desc: 'Corrige dimensiones visuales desbordadas y sella la práctica de la semana.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · MIÉRCOLES (1 HORA)
Metodología: Demo Cañón QR (8 min) ➔ Emulación y Pruebas en Celular (35 min) ➔ Cierre y Sellos (7 min)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 5 (17:40 - 18:30) · Pruebas en Vivo en Smartphone
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"El diseño ya está listo en la computadora; hoy hacemos magia: escaneamos el código QR, descargamos la app a nuestro teléfono y comprobamos cómo se siente en nuestras propias manos antes de cerrar el proyecto."

🖥️ DEMO EN CAÑÓN (8 min):
1) Menú 'Connect' ➔ 'AI Companion'.
2) Proyectar el código QR de 6 letras.
3) Escanear con la cámara del teléfono y mostrar en pantalla cómo cambia de Portada a Menú al toque del dedo.
4) Indicar a los alumnos que verifiquen que ningún texto se corte en pantallas pequeñas.

💻 RETO EN PC Y MÓVIL (35 min):
1. Abrir su proyecto GeoCalc en App Inventor.
2. Conectar su celular mediante MIT AI2 Companion (Wi-Fi o código).
3. Recorrer el flujo completo de las 7 pantallas.
4. Ajustar propiedades 'Width = Fill parent' si algún botón se ve estrecho.

👉 EVIDENCIA DE CIERRE (SELLO 2): App GeoCalc probada y ejecutándose en vivo en el celular del alumno mediante AI Companion.`,
          closure: 'Pruebas en vivo con AI Companion concluidas y cierre de entrega de GeoCalc.'
        },
        {
          id: 'S3', label: 'Sesión 03', subtitle: 'Jueves (2 hrs) · Apoyo Interdisciplinario: Proyectos de Robótica para el Aniversario',
          start: '¿Cómo colaboramos en equipo para que los proyectos tecnológicos del plantel brillen en el aniversario?',
          dictation: `⏱️ HORAS 6 Y 7 · Colaboración Tecnológica Inter-Áreas y Robótica:
La transversalidad educativa fortalece el perfil de egreso técnico al integrar conocimientos ofimáticos, de software y de control algorítmico en proyectos mecánicos y electrónicos. En apoyo al compañero docente Profr. Alex, se orienta la sesión hacia el ensamblaje, cableado y programación de prototipos robóticos estudiantiles para las demostraciones institucionales del Aniversario de CONALEP Pachuca II.`,
          learningResult: 'Colaborar en el armado, calibración y pruebas de prototipos robóticos para el Aniversario.',
          identification: { topic: 'Vinculación Tecnológica y Robótica', evidence: 'Avance de Prototipos Robóticos', organization: 'Equipos de Trabajo', location: 'Laboratorio de Cómputo / Taller', time: '2 hrs' },
          infographicTitle: 'Ruta Sesión 03 (Jueves)',
          infographicSteps: [
            { title: '1. Coordinación Colegiada', desc: 'Sesión cedida en apoyo al Profr. Alex para proyectos del aniversario.' },
            { title: '2. Ensamble de Hardware', desc: 'Montaje de chasis, motores y conexiones electrónicas de los robots.' },
            { title: '3. Lógica y Sensores', desc: 'Revisión de rutinas de control y sensores de seguimiento.' },
            { title: '4. Pruebas de Pista', desc: 'Calibración de desplazamiento rumbo a las demostraciones oficiales.' }
          ],
          development: `🎙️ GUÍA DE ACOMPAÑAMIENTO DOCENTE · JUEVES (2 HORAS)
Propósito: Sesión cedida al Profr. Alex para el impulso de proyectos de Robótica estudiantil.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORAS 6 Y 7 (16:50 - 18:30) · Acompañamiento en Proyectos de Robótica
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1) Coordinación con el Profr. Alex para organizar a los equipos del grupo 301-INFO25.
2) Asesoría a los estudiantes en estructuración de diagramas, pruebas de motores y depuración de código de control.
3) Pruebas de movilidad y alistamiento de los prototipos para las exhibiciones del Aniversario del Plantel.
4) Registro de participación y trabajo colaborativo de los alumnos.`,
          closure: 'Jornada de robótica estudiantil concluida con éxito en apoyo al aniversario.'
        }
      ]
    },
    'W12': {
      id: 'W12',
      label: 'Semana 12',
      title: 'App GeoCalc: Programación con Doble Botón (7 Figuras · 9 Pantallas)',
      dates: '02 Nov - 06 Nov',
      status: 'historical',
      templateUrl: './templates/GeoCalc_CONALEP.aia',
      templateFileName: 'GeoCalc_CONALEP.aia',
      templateBtnText: 'Descargar Proyecto Maestro (.aia)',
      templateBtnColor: '#005C42',
      toolUrl: 'https://ai2.appinventor.mit.edu',
      toolBtnText: 'Abrir MIT App Inventor',
      summary: 'Programación exclusiva en el Blocks Editor para las figuras geométricas iniciales (Círculo, Cuadrado y Rectángulo), implementando dos botones independientes por pantalla (Perímetro y Área).',
      expectedProduct: 'Proyecto GeoCalc con 9 pantallas y las primeras figuras programadas con doble botón (Perímetro y Área) y botón Limpiar.',
      notices: [
        '⚠️ Lunes 02 de Noviembre: Suspensión oficial de labores docentes (Día de Muertos / Feriado Nacional).',
        'Estructura de la App: 9 pantallas en total (Screen1, MenuPrincipal y 7 pantallas de figuras).',
        'Modelo Didáctico: 2 botones por pantalla (uno para Perímetro y otro para Área) más botón de Limpiar.',
        'Miércoles (Sesión 01 · 1 hr): Círculo, Cuadrado y Rectángulo con doble botón (Sello 1).',
        'Jueves (Sesión 02 · 2 hrs): Triángulo Equilátero, Triángulo Isósceles y Pentágono Regular (Sello 2).',
        'Viernes (Sesión 03 · 1 hr): Triángulo Escaleno y chequeo integral de las 7 figuras (Sello 3).',
        'Semana 13 (Continuación): Conclusión de fórmulas de Pentágono y los 3 Triángulos el Lunes.'
      ],
      sessions: [
        {
          id: 'S1', label: 'Sesión 01', subtitle: 'Miércoles (1 hr) · Doble Botón: Círculo, Cuadrado y Rectángulo',
          start: '¿Por qué es mejor darle al usuario dos botones separados: uno para Perímetro y otro para Área?',
          dictation: `⏱️ HORA 1 · Arquitectura de Ejecución Desacoplada:
En el desarrollo de software móvil, desacoplar las acciones permite al usuario obtener solo la información que necesita. Al implementar dos botones independientes en cada pantalla (Btn_CalcularPerimetro y Btn_CalcularArea), el flujo de ejecución activa únicamente la rutina matemática solicitada. En el Círculo, Perímetro ejecuta 2·π·r y Área ejecuta π·r²; en el Cuadrado, 4·L y L²; y en el Rectángulo, 2b+2h y b·h. Ambas salidas formatean su etiqueta con su respectiva unidad métrica (cm o cm²).`,
          learningResult: 'Programar los bloques de los dos botones (Perímetro y Área) para Círculo, Cuadrado y Rectángulo.',
          identification: { topic: 'Doble Botón: Círculo, Cuadrado y Rectángulo', evidence: 'Bloques Programados (3 Figuras)', organization: 'Individual en PC', location: 'Laboratorio de Informática', time: '1 hr' },
          infographicTitle: 'Ruta Sesión 01 (Miércoles)',
          infographicSteps: [
            { title: '1. Botón Perímetro', desc: 'Programa when Btn_CalcularPerimetro.Click actualizando Lbl_ResPerimetro.' },
            { title: '2. Botón Área', desc: 'Programa when Btn_CalcularArea.Click actualizando Lbl_ResArea.' },
            { title: '3. 3 Figuras Base', desc: 'Aplica la lógica en ScreenCirculo, ScreenCuadrado y ScreenRectangulo.' },
            { title: '4. Botón Limpiar', desc: 'Vacia cajas de texto y restaura las etiquetas a guiones.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · MIÉRCOLES (1 HORA)
Metodología: Demo Cañón Doble Botón (15 min) ➔ Reto en PC (25 min) ➔ Revisión de Sello (10 min)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 1 (17:40 - 18:30) · El Modelo de Dos Botones
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Antes teníamos un solo botón que hacía todo. Ahora le damos el control total al usuario: un botón para Perímetro y otro para Área. Vamos a programar cómo cada botón responde por separado en el Círculo, Cuadrado y Rectángulo."

🖥️ DEMO EN CAÑÓN (15 min):
1) ScreenCirculo:
   - when Btn_CalcularPerimetro.Click: set Lbl_ResPerimetro to join [ 2 * 3.1416 * Txt_Radio , ' cm' ].
   - when Btn_CalcularArea.Click: set Lbl_ResArea to join [ 3.1416 * (Txt_Radio * Txt_Radio) , ' cm²' ].
2) ScreenCuadrado: Perímetro = 4*L y Área = L*L.
3) ScreenRectangulo: Perímetro = 2*b + 2*h y Área = b*h.
4) Botón Limpiar: vaciar Txt y reiniciar Lbl.

💻 RETO EN PC (25 min):
Cada alumno programa y prueba en máquina los dos botones en las 3 pantallas.
👉 SELLO 1: Círculo, Cuadrado y Rectángulo concluidos con doble botón y botón Limpiar.`,
          closure: 'Bloques de Círculo, Cuadrado y Rectángulo concluidos exitosamente.'
        },
        {
          id: 'S2', label: 'Sesión 02', subtitle: 'Jueves (2 hrs) · Triángulos (Equilátero e Isósceles) y Pentágono Regular',
          start: '¿Cómo cambian las fórmulas de perímetro entre un triángulo de 3 lados iguales y uno de 2 lados iguales?',
          dictation: `⏱️ HORA 2-3 · Variantes Geométricas de Triángulos y Polígonos Regulares:
Aunque el área de cualquier triángulo responde al principio fundamental A = (b·h)/2, el cálculo perimetral varía según su morfología: en el Triángulo Equilátero se multiplica 3·L, mientras que en el Isósceles se suman los dos lados idénticos más la base (2L + b). En el Pentágono Regular, el botón de perímetro multiplica 5·L, y el botón de área procesa la relación de apotema dividiendo el producto entre 2.`,
          learningResult: 'Programar el doble botón para Triángulo Equilátero, Triángulo Isósceles y Pentágono Regular.',
          identification: { topic: 'Triángulos Equilátero, Isósceles y Pentágono', evidence: 'Bloques de 3 Pantallas', organization: 'Individual en PC', location: 'Laboratorio de Informática', time: '2 hrs' },
          infographicTitle: 'Ruta Sesión 02 (Jueves)',
          infographicSteps: [
            { title: '1. Triángulo Equilátero', desc: 'Perímetro con 3 * Lado y Área con (Base * Altura) / 2.' },
            { title: '2. Triángulo Isósceles', desc: 'Perímetro con (2 * LadoIgual) + Base y Área con (Base * Altura) / 2.' },
            { title: '3. Pentágono Regular', desc: 'Perímetro con 5 * Lado y Área con ((5*L) * Apotema) / 2.' },
            { title: '4. Depuración PC', desc: 'Verifica que ningún bloque tenga advertencias o desconexiones.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · JUEVES (2 HORAS)
Metodología: Triángulos Equilátero e Isósceles (50 min) ➔ Pentágono Regular (50 min) ➔ Sellos (20 min)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 2 (16:50 - 17:40) · Triángulo Equilátero e Isósceles
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"El área de los triángulos siempre es base por altura sobre dos, pero sus perímetros son muy distintos: en el equilátero multiplicamos por 3, y en el isósceles sumamos los dos lados iguales más la base."

🖥️ DEMO EN CAÑÓN (15 min):
1) ScreenTrianguloEquilatero:
   - Btn_CalcularPerimetro: 3 * Txt_Lado.
   - Btn_CalcularArea: math_division [ Txt_Base * Txt_Altura , 2 ].
2) ScreenTrianguloIsosceles:
   - Btn_CalcularPerimetro: (2 * Txt_LadoIgual) + Txt_Base.
   - Btn_CalcularArea: math_division [ Txt_Base * Txt_Altura , 2 ].

💻 RETO EN PC (35 min):
Alumnos programan y prueban ambas pantallas en máquina.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 3 (17:40 - 18:30) · Pentágono Regular: Perímetro y Apotema
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"En el pentágono, el botón de Perímetro hace 5 por Lado. Y el botón de Área toma ese perímetro y lo multiplica por el apotema antes de dividir entre 2."

🖥️ DEMO EN CAÑÓN (10 min):
1) ScreenPentagono:
   - Btn_CalcularPerimetro: 5 * Txt_Lado.
   - Btn_CalcularArea: math_division [ (5 * Txt_Lado) * Txt_Apotema , 2 ].

💻 RETO EN PC (35 min):
Programar y testear los bloques de ScreenPentagono en máquina.
👉 SELLO 2: Triángulo Equilátero, Isósceles y Pentágono con doble botón y botón Limpiar funcionales.`,
          closure: 'Bloques de Triángulo Equilátero, Isósceles y Pentágono completados al 100%.'
        },
        {
          id: 'S3', label: 'Sesión 03', subtitle: 'Viernes (1 hr) · Triángulo Escaleno y Cierre de las 7 Figuras',
          start: '¿Cómo calculamos el perímetro cuando los tres lados del triángulo son completamente desiguales?',
          dictation: `⏱️ HORA 4 · Triángulo Escaleno y Consolidación de 9 Pantallas:
El Triángulo Escaleno presenta tres aristas de longitud dispar, por lo que su perímetro requiere la adición encadenada de sus tres componentes escalares (a + b + c), manteniendo el cálculo de superficie mediante la altura ortogonal conocida ((base·h)/2). Concluir esta pantalla cierra formalmente la arquitectura completa de 9 pantallas del sistema GeoCalc.`,
          learningResult: 'Completar la programación del Triángulo Escaleno y verificar el funcionamiento de las 7 figuras.',
          identification: { topic: 'Triángulo Escaleno & Cierre 7 Figuras', evidence: '7 Figuras con Doble Botón al 100%', organization: 'Individual en PC', location: 'Laboratorio de Informática', time: '1 hr' },
          infographicTitle: 'Ruta Sesión 03 (Viernes)',
          infographicSteps: [
            { title: '1. Perímetro Escaleno', desc: 'Suma Lado A + Lado B + Lado C con bloques math_add encadenados.' },
            { title: '2. Área Escaleno', desc: 'Aplica (Base * Altura) / 2 concatenando cm².' },
            { title: '3. Chequeo de 7 Figuras', desc: 'Recorre las 7 pantallas comprobando que ambos botones funcionen.' },
            { title: '4. Sello de la Semana', desc: 'Obtén el sello tras verificar las 7 figuras y el botón Limpiar.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · VIERNES (1 HORA)
Metodología: Demo Cañón Escaleno (10 min) ➔ Reto en PC (30 min) ➔ Revisión General (10 min)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 4 (15:00 - 15:50) · El Triángulo Escaleno y Cierre Total
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"El escaleno tiene todos sus lados distintos: para su perímetro sumamos Lado A + Lado B + Lado C. Con esta figura cerramos con broche de oro las 7 calculadoras de la app."

🖥️ DEMO EN CAÑÓN (10 min):
1) ScreenTrianguloEscaleno:
   - Btn_CalcularPerimetro: Txt_LadoA + Txt_LadoB + Txt_LadoC.
   - Btn_CalcularArea: math_division [ Txt_Base * Txt_Altura , 2 ].
2) Chequeo general en App Inventor: 9 pantallas enlazadas con el Menú Principal.

💻 RETO EN PC (30 min):
1. Completar la programación de ScreenTrianguloEscaleno.
2. Hacer una revisión exhaustiva de que las 7 figuras tengan sus 2 botones y botón Limpiar.

👉 SELLO 3: Las 7 figuras geométricas programadas con doble botón al 100%.`,
          closure: 'Las 7 figuras geométricas con doble botón en proceso de cierre.'
        }
      ]
    },
    'W13': {
      id: 'W13',
      label: 'Semana 13',
      title: 'Cierre de Fórmulas GeoCalc (Pentágono y 3 Triángulos) & Cine-Debate Black Mirror',
      dates: '09 Nov - 13 Nov',
      status: 'historical',
      templateUrl: './templates/GeoCalc_CONALEP.aia',
      templateFileName: 'GeoCalc_CONALEP.aia',
      templateBtnText: 'Descargar Proyecto Maestro (.aia)',
      templateBtnColor: '#005C42',
      toolUrl: 'https://ai2.appinventor.mit.edu',
      toolBtnText: 'Abrir MIT App Inventor',
      summary: 'Conclusión al 100% de las fórmulas en bloques pendientes de GeoCalc (Pentágono Regular y los 3 Triángulos: Equilátero, Isósceles y Escaleno con doble botón Perímetro/Área) y análisis crítico de impacto tecnológico con Black Mirror.',
      expectedProduct: '4 pantallas restantes (Pentágono y 3 Triángulos) programadas con doble botón + Tabla de Análisis en 3 Columnas en libreta.',
      notices: [
        'Lunes 09 Nov (Sesión 01 · 4 hrs): Conclusión obligatoria de las 4 figuras faltantes en Blocks Editor (Pentágono Regular, Triángulo Equilátero, Triángulo Isósceles y Triángulo Escaleno) con doble botón (Perímetro y Área) y botón Limpiar.',
        'Actividad Complementaria Lunes (Si da tiempo): Proyección y análisis en 3 columnas del episodio de Black Mirror "Joan es horrible" (Joan Is Awful · T6E1) sobre Términos y Condiciones, captura de datos móviles e IA.',
        'Miércoles, Jueves y Viernes: Sesiones por definir de acuerdo con el avance real logrado el lunes en laboratorio.'
      ],
      sessions: [
        {
          id: 'S1',
          label: 'Sesión 01',
          subtitle: 'Lunes (4 hrs) · Fórmulas Faltantes (Pentágono y 3 Triángulos) + Black Mirror',
          start: '¿Cómo concluimos los bloques matemáticos del Pentágono y los 3 Triángulos, y qué ocurre cuando aceptamos los "Términos y Condiciones" de una app sin leerlos?',
          dictation: `⏱️ HORAS 1 Y 2 · Conclusión de Fórmulas Geométricas en Bloques (Pentágono y 3 Triángulos):
Para cerrar las nueve pantallas de la aplicación GeoCalc en MIT App Inventor, se programan las cuatro calculadoras restantes bajo el estándar de doble botón independiente (Btn_CalcularPerimetro y Btn_CalcularArea). En el Pentágono Regular, el perímetro multiplica cinco veces el lado (5·L) y el área procesa el producto del perímetro por la apotema dividido entre dos. En las tres variantes de triángulos (Equilátero, Isósceles y Escaleno), la superficie responde a la misma fórmula universal (Base por Altura sobre dos), mientras que el perímetro se adapta a la geometría de sus lados: 3·L para tres lados iguales, 2·L + b para dos lados iguales, y la suma Lado A + Lado B + Lado C cuando sus tres aristas son diferentes.

⏱️ HORAS 3 Y 4 (SI DA TIEMPO) · Documentos Digitales, Privacidad Móvil y Black Mirror ("Joan es horrible"):
Cada vez que instalamos una aplicación móvil y presionamos el botón "Acepto los Términos y Condiciones", firmamos un contrato digital vinculante. A través del análisis del episodio "Joan es horrible" (Black Mirror), reflexionamos sobre cómo los algoritmos, la recolección de datos desde el teléfono celular y la inteligencia artificial pueden automatizar la vida privada de un usuario cuando la tecnología se diseña sin límites éticos.`,
          learningResult: 'Programar al 100% los bloques de Perímetro, Área y Limpiar para el Pentágono Regular y los 3 Triángulos (Equilátero, Isósceles y Escaleno), y analizar en una tabla de 3 columnas el impacto de los contratos digitales y las apps móviles.',
          identification: {
            topic: 'Pentágono, 3 Triángulos & Análisis Black Mirror',
            evidence: '4 Figuras en Bloques (Sello 1) + Tabla de 3 Columnas en Libreta (Sello 2)',
            organization: 'Individual en PC y Libreta',
            location: 'Laboratorio de Informática',
            time: '4 hrs'
          },
          infographicTitle: 'Ruta Sesión 01 (Lunes · 4 Horas)',
          infographicSteps: [
            { title: '1. Pentágono Regular', desc: 'Programa Perímetro (5 * Lado) y Área (((5 * Lado) * Apotema) / 2) + Limpiar.' },
            { title: '2. Triángulos Equilátero e Isósceles', desc: 'Programa Perímetro (3*L y 2*L+b) y Área ((b*h)/2) en ambas pantallas.' },
            { title: '3. Triángulo Escaleno y Sello 1', desc: 'Programa Perímetro (A + B + C) y Área ((b*h)/2) para completar las 7 figuras.' },
            { title: '4. Black Mirror (Si da tiempo)', desc: 'Proyección de "Joan es horrible" (T6E1) y Tabla de 3 Columnas en libreta.' }
          ],
          developmentColumns: [
            {
              groupTitle: '📐 PARTE 1 (HORAS 1 Y 2) · DESARROLLO EN COLUMNAS: FÓRMULAS FALTANTES EN BLOCKS EDITOR',
              groupSubtitle: 'Programa en cada pantalla sus 3 eventos: Btn_CalcularPerimetro.Click, Btn_CalcularArea.Click y Btn_Limpiar.Click',
              columnsCount: 2,
              items: [
                {
                  badge: 'Columna 1 · Polígono Regular',
                  title: 'Pentágono Regular',
                  screen: 'ScreenPentagono',
                  color: '#025940',
                  bgHeader: '#ecfdf5',
                  rows: [
                    { label: 'Entradas (TextBox)', value: 'Txt_Lado  |  Txt_Apotema' },
                    { label: '🟢 Btn_CalcularPerimetro.Click', value: 'set Lbl_ResPerimetro.Text to join:\n  [ 5 × Txt_Lado.Text , " cm" ]' },
                    { label: '🔵 Btn_CalcularArea.Click', value: 'set Lbl_ResArea.Text to join:\n  [ ((5 × Txt_Lado.Text) × Txt_Apotema.Text) / 2 , " cm²" ]' },
                    { label: '🧹 Btn_Limpiar.Click', value: 'Txt_Lado.Text = "" | Txt_Apotema.Text = ""\nLbl_ResPerimetro = "-- cm" | Lbl_ResArea = "-- cm²"' }
                  ]
                },
                {
                  badge: 'Columna 2 · 3 Lados Iguales',
                  title: 'Triángulo Equilátero',
                  screen: 'ScreenTrianguloEquilatero',
                  color: '#1d4ed8',
                  bgHeader: '#eff6ff',
                  rows: [
                    { label: 'Entradas (TextBox)', value: 'Txt_Lado  |  Txt_Base  |  Txt_Altura' },
                    { label: '🟢 Btn_CalcularPerimetro.Click', value: 'set Lbl_ResPerimetro.Text to join:\n  [ 3 × Txt_Lado.Text , " cm" ]' },
                    { label: '🔵 Btn_CalcularArea.Click', value: 'set Lbl_ResArea.Text to join:\n  [ (Txt_Base.Text × Txt_Altura.Text) / 2 , " cm²" ]' },
                    { label: '🧹 Btn_Limpiar.Click', value: 'Vaciar Txt_Lado, Txt_Base, Txt_Altura\nRestaurar Lbl_ResPerimetro y Lbl_ResArea' }
                  ]
                },
                {
                  badge: 'Columna 3 · 2 Lados Iguales + Base',
                  title: 'Triángulo Isósceles',
                  screen: 'ScreenTrianguloIsosceles',
                  color: '#7e22ce',
                  bgHeader: '#faf5ff',
                  rows: [
                    { label: 'Entradas (TextBox)', value: 'Txt_LadoIgual  |  Txt_Base  |  Txt_Altura' },
                    { label: '🟢 Btn_CalcularPerimetro.Click', value: 'set Lbl_ResPerimetro.Text to join:\n  [ (2 × Txt_LadoIgual.Text) + Txt_Base.Text , " cm" ]' },
                    { label: '🔵 Btn_CalcularArea.Click', value: 'set Lbl_ResArea.Text to join:\n  [ (Txt_Base.Text × Txt_Altura.Text) / 2 , " cm²" ]' },
                    { label: '🧹 Btn_Limpiar.Click', value: 'Vaciar Txt_LadoIgual, Txt_Base, Txt_Altura\nRestaurar Lbl_ResPerimetro y Lbl_ResArea' }
                  ]
                },
                {
                  badge: 'Columna 4 · 3 Lados Diferentes',
                  title: 'Triángulo Escaleno',
                  screen: 'ScreenTrianguloEscaleno',
                  color: '#c2410c',
                  bgHeader: '#fff7ed',
                  rows: [
                    { label: 'Entradas (TextBox)', value: 'Txt_LadoA | Txt_LadoB | Txt_LadoC | Txt_Base | Txt_Altura' },
                    { label: '🟢 Btn_CalcularPerimetro.Click', value: 'set Lbl_ResPerimetro.Text to join:\n  [ Txt_LadoA.Text + Txt_LadoB.Text + Txt_LadoC.Text , " cm" ]' },
                    { label: '🔵 Btn_CalcularArea.Click', value: 'set Lbl_ResArea.Text to join:\n  [ (Txt_Base.Text × Txt_Altura.Text) / 2 , " cm²" ]' },
                    { label: '🧹 Btn_Limpiar.Click', value: 'Vaciar las 5 cajas de texto\nRestaurar Lbl_ResPerimetro y Lbl_ResArea' }
                  ]
                }
              ]
            },
            {
              groupTitle: '🎬 PARTE 2 (SI DA TIEMPO · HORAS 3 Y 4) · BLACK MIRROR: "JOAN ES HORRIBLE" (TABLA EN 3 COLUMNAS)',
              groupSubtitle: 'Ya vimos el de videojuegos (Playtest) y el de calificación social (Caída en picada). Hoy analizamos "Joan Is Awful" (T6E1) o "Añicos / Smithereens" (T5E2) trazando estas 3 columnas en la libreta:',
              columnsCount: 3,
              items: [
                {
                  badge: 'Columna 1 en Libreta',
                  title: '1. La App y la Tecnología',
                  screen: '¿Qué sistema aparece?',
                  color: '#0f172a',
                  bgHeader: '#f1f5f9',
                  rows: [
                    { label: 'En "Joan es horrible" (T6E1)', value: 'La app "Streamberry" capta con el micrófono del celular todo lo que hace la usuaria y una computadora cuántica con IA genera una serie de su vida en tiempo real.' },
                    { label: 'Alternativa "Añicos" (T5E2)', value: 'Una app de red social diseñada con algoritmos de dopamina y notificaciones para que el usuario no pueda despegar la vista del teléfono.' },
                    { label: 'Pregunta para tu Columna 1', value: '¿Qué componentes del celular (micrófono, cámara, pantalla, botones) usa la app del capítulo?' }
                  ]
                },
                {
                  badge: 'Columna 2 en Libreta',
                  title: '2. Documentos y Datos',
                  screen: 'Relación con EDOA',
                  color: '#0369a1',
                  bgHeader: '#f0f9ff',
                  rows: [
                    { label: 'El Contrato Digital', value: 'Al crear su cuenta en la app, Joan presionó el botón "Aceptar Términos y Condiciones" sin leer el documento digital donde cedía su identidad.' },
                    { label: 'Automatización Masiva', value: 'Igual que en combinación de correspondencia o en bloques de software, un documento legal digital se procesa automáticamente para millones de usuarios.' },
                    { label: 'Pregunta para tu Columna 2', value: '¿Por qué es peligroso presionar "Aceptar" en un documento digital sin revisar qué permisos pide la app?' }
                  ]
                },
                {
                  badge: 'Columna 3 en Libreta',
                  title: '3. Ética del Programador',
                  screen: 'Tu Regla de Diseño',
                  color: '#15803d',
                  bgHeader: '#f0fdf4',
                  rows: [
                    { label: 'De Usuario a Creador', value: 'En MIT App Inventor ustedes ya no son solo usuarios: ahora son quienes programan qué hace cada botón cuando alguien lo toca.' },
                    { label: 'Diseño Responsable', value: 'Una app profesional debe procesar solo los datos necesarios (como GeoCalc) sin espiar ni engañar al usuario.' },
                    { label: 'Pregunta para tu Columna 3', value: 'Si tú fueras el creador de esa app, ¿qué regla o botón de seguridad le programarías para proteger a las personas?' }
                  ]
                }
              ]
            }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · LUNES (4 HORAS)
Metodología: Bloques en 4 Columnas: Pentágono y 3 Triángulos (Horas 1-2) ➔ Revisión y Sello 1 ➔ Black Mirror y Tabla de 3 Columnas en Libreta (Horas 3-4, si da tiempo)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORAS 1 Y 2 (16:50 - 18:30) · Conclusión de Fórmulas: Pentágono y los 3 Triángulos
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Ya tenemos listos el Círculo, el Cuadrado y el Rectángulo. Hoy en la primera mitad de la sesión vamos a liquidar las 4 pantallas que nos faltan siguiendo el tablero de 4 columnas: el Pentágono Regular y la familia completa de los 3 Triángulos (Equilátero, Isósceles y Escaleno)."

🖥️ DEMO RÁPIDA POR COLUMNAS EN CAÑÓN (15 min):
1) Columna 1 (ScreenPentagono):
   - Perímetro = 5 * Txt_Lado
   - Área = ((5 * Txt_Lado) * Txt_Apotema) / 2
2) Columna 2 (ScreenTrianguloEquilatero):
   - Perímetro = 3 * Txt_Lado  |  Área = (Txt_Base * Txt_Altura) / 2
3) Columna 3 (ScreenTrianguloIsosceles):
   - Perímetro = (2 * Txt_LadoIgual) + Txt_Base  |  Área = (Txt_Base * Txt_Altura) / 2
4) Columna 4 (ScreenTrianguloEscaleno):
   - Perímetro = Txt_LadoA + Txt_LadoB + Txt_LadoC  |  Área = (Txt_Base * Txt_Altura) / 2

💻 RETO EN PC (75 min):
Guiándose con las 4 columnas en pantalla, cada alumno termina de programar las 4 figuras faltantes con sus botones de Perímetro, Área y Limpiar.

🏷️ EVIDENCIA Y SELLO 1:
Las 7 figuras geométricas (9 pantallas en total) 100% programadas en el Blocks Editor sin errores ni advertencias amarillas. 👉 SELLO 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORAS 3 Y 4 (18:30 - 20:10 · SI DA TIEMPO) · Cine-Debate Black Mirror en 3 Columnas
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Ya vimos qué pasa con la realidad virtual en los videojuegos y qué pasa cuando una app califica a las personas en 'Caída en picada'. Hoy veremos qué pasa cuando instalas una app en tu teléfono y presionas el botón 'Acepto los Términos y Condiciones' sin leer el documento digital."

💻 RETO EN LIBRETA (TABLA DE 3 COLUMNAS):
1. Trazar en la libreta la Tabla de Análisis de 3 Columnas que aparece arriba en el Desarrollo:
   - Columna 1: La App y la Tecnología del episodio.
   - Columna 2: Documentos Digitales y Datos capturados.
   - Columna 3: Ética del Programador (¿qué regla programarías tú?).
2. Proyección del episodio ("Joan es horrible" · T6E1) y llenado de las 3 columnas.

🏷️ EVIDENCIA Y SELLO 2 (OPCIONAL / SI DA TIEMPO):
Tabla de 3 columnas completada en la libreta con la reflexión sobre el episodio. 👉 SELLO 2`,
          closure: 'Fórmulas de las 7 figuras concluidas al 100% en App Inventor y reflexión tecnológica registrada en columnas.'
        },
        {
          id: 'S2',
          label: 'Sesión 02',
          subtitle: 'Miércoles (1 hr) · Auditoría Final en Celular (APK / AI Companion) & Calificación en Lista',
          start: '¿Cómo verificamos que la aplicación instalada en el teléfono cumpla con todos los estándares técnicos y matemáticos?',
          dictation: `⏱️ HORA 5 · Auditoría Final de Aplicación Móvil en Dispositivos Reales:
En la fase final de entrega de software móvil, la auditoría de control de calidad evalúa la app directamente en el hardware del usuario final. Se verifica que el paquete instalado (APK) o la sesión de emulación (AI Companion) ejecute fluidamente la navegación por las 9 pantallas, que los botones de Perímetro y Área respondan sin congelamientos y que los campos de entrada se restablezcan correctamente con la rutina de reseteo. El docente registra la acreditación técnica en la lista de control del grupo.`,
          learningResult: 'Comprobar en el smartphone la correcta ejecución de las 7 figuras y obtener la firma de aprobación técnica.',
          identification: {
            topic: 'Auditoría Móvil y Aprobación GeoCalc',
            evidence: 'App GeoCalc Aprobada en Smartphone (Sello)',
            organization: 'Individual en Smartphone y PC',
            location: 'Laboratorio de Informática',
            time: '1 hr'
          },
          infographicTitle: 'Ruta Sesión 02 (Miércoles · 1 Hora)',
          infographicSteps: [
            { title: '1. Verificación Inicial', desc: 'Apertura de la app desde la pantalla de inicio del teléfono.' },
            { title: '2. Banco de Pruebas', desc: 'Comprobación de resultados de Perímetro y Área en las 7 figuras.' },
            { title: '3. Botón Limpiar', desc: 'Verificación de que los campos y etiquetas se reseteen.' },
            { title: '4. Firma y Sello', desc: 'Asentamiento de firma y avance técnico en la lista oficial.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · MIÉRCOLES (1 HORA)
Metodología: Auditoría de Dispositivos Móviles en Escritorio (40 min) ➔ Registro de Firmas (10 min)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 5 (17:40 - 18:30) · Ronda de Auditoría Técnica de la App en Teléfono
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Hoy pasamos de la computadora a las manos del cliente: revisamos que su app instalada en su propio celular navegue por las 9 pantallas, calcule con precisión y no se trabe al presionar Perímetro o Área."

🖥️ CRITERIOS DE REVISIÓN EN ESCRITORIO:
1) Portada institucional con nombre del alumno y grupo 301-INFO25.
2) Menú Principal con los 7 accesos directos a las figuras.
3) Funcionamiento de los dos botones (Perímetro y Área) con unidades cm y cm².
4) Botón Limpiar operativo.

👉 EVIDENCIA: Firma y sello de aprobación técnica de la App GeoCalc en smartphone.`,
          closure: 'Ronda de revisiones móviles concluida y avance registrado en lista.'
        },
        {
          id: 'S3',
          label: 'Sesión 03',
          subtitle: 'Jueves (2 hrs) · Pruebas de APK, Ícono en Dibujos de Google y Manual de Acceso',
          start: '¿Cómo garantizamos la autonomía del usuario con un ícono personalizado y un manual paso a paso de acceso a MIT App Inventor?',
          dictation: `⏱️ HORAS 6 Y 7 · Documentación de Acceso, Identidad Visual y Pruebas de APK:
En el desarrollo de soluciones ofimáticas y móviles, la adopción tecnológica depende de manuales claros de inducción. El estudiante genera en Dibujos de Google un ícono geométrico vectorial para la aplicación e instala el paquete compilado (.apk) en su dispositivo físico. De forma paralela, redacta en su libreta técnica el manual de acceso a MIT App Inventor detallando los pasos de autenticación con cuenta Google, importación de archivos de proyecto (.aia) y configuración del puente de prueba en tiempo real mediante AI Companion.`,
          learningResult: 'Completar la instalación del APK con ícono personalizado y redactar el manual de acceso y operación de App Inventor en la libreta.',
          identification: {
            topic: 'Pruebas APK, Ícono Vectorial y Manual',
            evidence: 'Manual de Acceso en Libreta + APK con Ícono (Sello 2)',
            organization: 'Individual en PC y Libreta',
            location: 'Laboratorio de Informática',
            time: '2 hrs'
          },
          infographicTitle: 'Ruta Sesión 03 (Jueves · 2 Horas)',
          infographicSteps: [
            { title: '1. Ícono Vectorial', desc: 'Diseño de logotipo en Dibujos de Google y exportación a PNG.' },
            { title: '2. Enlace en Screen1', desc: 'Asignación de Icon en propiedades de Screen1 y compilación del APK.' },
            { title: '3. Manual de Acceso', desc: 'Registro en libreta de los pasos de login, carga de AIA y Companion.' },
            { title: '4. Pruebas y Sello', desc: 'Prueba de ejecución en smartphone y acreditación en escritorio.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · JUEVES (2 HORAS)
Metodología: Desglose por Horas (Hora 6: Ícono e Instalación de APK ➔ Hora 7: Manual de Usuario en Libreta)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 6 (16:50 - 17:40) · Ícono Vectorial en Dibujos de Google e Instalación APK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO (Inicio · 5 min):
"Una aplicación sin ícono se pierde entre cientos en el teléfono. Hoy en la primera hora le damos identidad a GeoCalc usando Dibujos de Google y dejamos el APK listo e instalado."

🖥️ DEMO EN CAÑÓN (10 min):
1) Abrir drawings.google.com en el navegador.
2) Configurar lienzo cuadrado (512x512 px) con fondo verde institucional CONALEP.
3) Dibujar figuras geométricas con trazo blanco y texto 'GeoCalc'.
4) Descargar en formato PNG y subirlo a App Inventor como 'Icon'.
5) Compilar en 'Build > Android App (.apk)' y descargar en el celular.

💻 RETO EN PC (30 min):
Alumnos compilan su APK con el ícono y lo instalan en sus teléfonos móviles.
👉 CHECK HORA 6: APK instalado con ícono propio visible en el cajón de apps del smartphone.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 7 (17:40 - 18:30) · Manual de Acceso y Operación en Libreta Técnica
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO (Inicio · 5 min):
"El mejor software del mundo no sirve si nadie sabe cómo entrar a él. Vamos a redactar en su libreta el manual de acceso para que cualquier persona pueda abrir y usar el proyecto en App Inventor."

🖥️ DEMO EN CAÑÓN (10 min):
Estructura del Manual de Acceso en libreta:
1) Paso 1: Ingreso a ai2.appinventor.mit.edu con cuenta institucional o personal.
2) Paso 2: Menú Projects > Import project (.aia) from my computer.
3) Paso 3: Conexión mediante MIT AI2 Companion (código de 6 letras o QR).
4) Paso 4: Pruebas en vivo y resolución de errores comunes.

💻 RETO EN LIBRETA (30 min):
Redactar con letra clara y diagramas el manual de 4 pasos en la libreta.

🏷️ EVIDENCIA Y SELLO:
Manual de acceso concluido en libreta y APK con ícono revisado. 👉 SELLO 2`,
          closure: 'APK probado con ícono propio y manual de acceso registrado en la libreta técnica.'
        },
        {
          id: 'S4',
          label: 'Sesión 04',
          subtitle: 'Viernes (1 hr) · ⚠️ Suspensión de Labores del Grupo 301-INFO25 (Concurso Robótica Gdl)',
          start: 'Aviso Oficial: Suspensión de actividades presenciales para el grupo 301-INFO25 el viernes 13 de noviembre.',
          dictation: `⏱️ HORA 8 · Suspensión Justificada de Labores Escolares (Grupo 301-INFO25):
Por disposición institucional y justificación de jornada completa, se suspenden las actividades presenciales del grupo 301-INFO25 este viernes 13 de noviembre debido a la comisión del Mtro. Cruz (titular de 5 horas de clase del grupo) al Concurso Nacional de Robótica en la ciudad de Guadalajara, sumado a permisos económicos y ausencias autorizadas del personal docente complementario. Las actividades del módulo EDOA-20 se reanudan presencialmente el Miércoles 18 de Noviembre con el arranque de las 7 Diapositivas de "El Juego" en Google Slides.`,
          learningResult: 'Comprender la recalendarización de entrega de proyectos y preparar insumos para la Semana 14.',
          identification: {
            topic: 'Suspensión Grupal Autorizada',
            evidence: 'Cierre Operativo Semana 13 (Justificación)',
            organization: 'Institucional',
            location: 'Plantel CONALEP',
            time: '1 hr'
          },
          infographicTitle: 'Estado de la Jornada (Viernes 13 Nov)',
          infographicSteps: [
            { title: '1. Comisión Robótica', desc: 'Mtro. Cruz viaja a concurso en Guadalajara (5 horas del grupo).' },
            { title: '2. Permisos Docentes', desc: 'Permisos económicos autorizados para docentes de horas complementarias.' },
            { title: '3. Cierre Semana 13', desc: 'Semana 13 concluida formalmente con el APK y Manual del jueves.' },
            { title: '4. Reencuentro S14', desc: 'Clase presencial el Miércoles 18 de Noviembre (17:40 hrs).' }
          ],
          development: `🎙️ AVISO INSTITUCIONAL DOCENTE · VIERNES 13 DE NOVIEMBRE
Estado del Grupo 301-INFO25: Suspensión de Labores por Comisión y Permisos

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 8 (15:00 - 15:50) · Suspensión Grupal Autorizada
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📋 MOTIVO DE SUSPENSIÓN:
1) El Mtro. Cruz imparte 5 horas al grupo 301-INFO25 y viajó comisionado a Guadalajara al Concurso de Robótica.
2) Permisos económicos y ausencias justificadas del resto de la plantilla del día, incluido el Dr. Felipe López Salazar.
3) La dirección del plantel autorizó la no asistencia del grupo 301-INFO25.

📅 REANUDACIÓN DE ACTIVIDADES:
• Lunes 16 Noviembre: Suspensión Oficial Federal (Aniversario de la Revolución Mexicana).
• Miércoles 18 Noviembre (17:40 - 18:30): Sesión 01 de la Semana 14 (7 Diapositivas en Google Slides).`,
          closure: 'Jornada suspendida formalmente por comisión nacional de robótica y permisos docentes.'
        }
      ]
    },
    'W14': {
      id: 'W14',
      label: 'Semana 14',
      title: 'Presentaciones Electrónicas: Ficha y Reglas de "El Juego" (7 Diapositivas en Google Slides)',
      dates: '16 Nov - 20 Nov',
      status: 'active',
      toolUrl: 'https://slides.google.com',
      toolBtnText: 'Abrir Google Slides',
      summary: 'Diseño integral de una presentación ejecutiva de 7 diapositivas en Presentaciones de Google (Google Slides) con la ficha técnica, reglas, personajes, niveles, mockups y descarga de "El Juego" (GeoCalc), configurando interactividad y publicación web.',
      expectedProduct: 'Presentación de 7 diapositivas en Google Slides con imágenes de referencia, enlaces interactivos y URL pública publicada en la web.',
      notices: [
        '⚠️ LUNES 16 DE NOVIEMBRE: Suspensión Oficial de Labores por la Conmemoración del Aniversario de la Revolución Mexicana. No hay clases en el plantel.',
        'MIÉRCOLES 18 DE NOVIEMBRE (Sesión 01 · 1 hr · 17:40 - 18:30): Construcción de las 7 diapositivas de "El Juego" en Google Slides siguiendo las plantillas de referencia.',
        'JUEVES 19 DE NOVIEMBRE (Sesión 02 · 2 hrs · 16:50 - 18:30): Hipervínculos internos, interactividad de navegación y coevaluación en pares en laboratorio.',
        'VIERNES 20 DE NOVIEMBRE (Sesión 03 · 1 hr · 15:00 - 15:50): Publicación en la web (archivo público sin restricciones) y evaluación sumativa definitiva.'
      ],
      sessions: [
        {
          id: 'S1',
          label: 'Sesión 01',
          subtitle: 'Miércoles (1 hr · 17:40 - 18:30) · Las 7 Diapositivas de "El Juego" en Google Slides',
          start: '¿Cómo estructuramos la ficha técnica y las reglas de un videojuego en 7 diapositivas ejecutivas que comuniquen su valor al instante?',
          dictation: `⏱️ HORA 1 · Diseño Ejecutivo de Videojuegos y Suite de 7 Diapositivas en Google Slides:
En la industria tecnológica y de entretenimiento digital, un producto de software no se distribuye sin su documentación visual y su Pitch Deck. Mediante Presentaciones de Google, el estudiante crea una suite ejecutiva de siete diapositivas estandarizadas: 1) Portada oficial con logotipo e identidad CONALEP; 2) Sinopsis y objetivo ("¿Qué hace el juego?"); 3) Instrucciones y reglas de la partida paso a paso; 4) Personajes, elementos geométricos y botones de control; 5) Niveles de reto y curva de dificultad; 6) Galería de mockups con capturas reales en smartphones; y 7) Ficha de créditos de autor con código QR oficial para la descarga del paquete APK.`,
          learningResult: 'Crear en Google Slides la estructura visual de las 7 diapositivas de "El Juego" (GeoCalc) integrando textos ejecutivos, capturas reales y código QR.',
          identification: {
            topic: '7 Diapositivas de "El Juego" en Slides',
            evidence: 'Presentación Google Slides (7 Diapositivas · Sello 1)',
            organization: 'Individual en PC (Google Slides)',
            location: 'Laboratorio de Informática',
            time: '1 hr'
          },
          infographicTitle: 'Ruta Sesión 01 (Miércoles · 1 Hora)',
          infographicSteps: [
            { title: '1. Portada y Sinopsis', desc: 'Diapositivas 1 y 2 con título oficial, ícono y misión del juego.' },
            { title: '2. Reglas y Elementos', desc: 'Diapositivas 3 y 4 con pasos de juego, vidas/puntos y botones de acción.' },
            { title: '3. Niveles y Mockups', desc: 'Diapositivas 5 y 6 con retos progresivos y 3 celulares con capturas.' },
            { title: '4. Créditos y QR', desc: 'Diapositiva 7 con datos del alumno, grupo 301-INFO25 y QR de descarga.' }
          ],
          developmentColumns: [
            {
              groupTitle: '🎮 ARQUITECTURA DE LAS 7 DIAPOSITIVAS DE "EL JUEGO" EN GOOGLE SLIDES',
              groupSubtitle: 'Guía visual con imágenes de referencia para proyectar en cañón y reproducir en computadoras',
              columnsCount: 3,
              items: [
                {
                  badge: 'Diapositiva 1 · Portada',
                  title: 'Portada Oficial del Juego',
                  screen: 'Slide 1 · Título e Identidad',
                  color: '#005C42',
                  bgHeader: '#ecfdf5',
                  image: imgGSlide1,
                  rows: [
                    { label: 'Título del Juego', value: 'GeoCalc · La Aventura Matemática' },
                    { label: 'Subtítulo', value: 'Videojuego Móvil Educativo · Android APK' },
                    { label: 'Elemento Gráfico', value: 'Logotipo / Ícono central de Dibujos de Google' },
                    { label: 'Membrete Institucional', value: 'CONALEP Pachuca II · EDOA-20 · Grupo 301-INFO25' }
                  ]
                },
                {
                  badge: 'Diapositiva 2 · Sinopsis',
                  title: '¿Qué Hace el Juego?',
                  screen: 'Slide 2 · Objetivo y Misión',
                  color: '#1E3A8A',
                  bgHeader: '#eff6ff',
                  image: imgGSlide2,
                  rows: [
                    { label: 'Premisa Principal', value: 'Conviértete en el Arquitecto Digital y supera retos de cálculo geométrico.' },
                    { label: 'Mecánica Central', value: 'Calcula perímetros y áreas en tiempo real para desbloquear mundos.' },
                    { label: 'Características Clave', value: '7 Figuras geométricas, respuestas instantáneas y modo offline.' },
                    { label: 'Audiencia Objetivo', value: 'Estudiantes de secundaria y bachillerato que buscan agilidad mental.' }
                  ]
                },
                {
                  badge: 'Diapositiva 3 · Reglas',
                  title: 'Instrucciones y Reglas de Juego',
                  screen: 'Slide 3 · ¿Cómo Jugar?',
                  color: '#B45309',
                  bgHeader: '#fffbeb',
                  image: imgGSlide3,
                  rows: [
                    { label: 'Paso 1: Selecciona', value: 'Elige una figura geométrica en el Menú Principal.' },
                    { label: 'Paso 2: Ingresa Datos', value: 'Escribe las medidas en las cajas de texto (TextBox).' },
                    { label: 'Paso 3: Presiona Acción', value: 'Toca Perímetro (verde) o Área (azul) para obtener tu puntaje.' },
                    { label: 'Reglas de Partida', value: '3 Vidas por nivel, límite de tiempo de 60s y penalización por error.' }
                  ]
                },
                {
                  badge: 'Diapositiva 4 · Elementos',
                  title: 'Personajes y Mecánicas',
                  screen: 'Slide 4 · Interfaz y Controles',
                  color: '#7C3AED',
                  bgHeader: '#faf5ff',
                  image: imgGSlide4,
                  rows: [
                    { label: 'El Jugador', value: 'El Arquitecto Digital (Tú): resuelve figuras y acumula puntos.' },
                    { label: 'Figuras Objetivo', value: 'Círculo, Cuadrado, Rectángulo, Pentágono y 3 Triángulos.' },
                    { label: 'Botón Perímetro', value: 'Verde · Calcula contorno en cm (+100 puntos).' },
                    { label: 'Botón Área', value: 'Azul · Procesa superficie en cm² (+250 puntos).' },
                    { label: 'Botones Auxiliares', value: 'Limpiar (resetea campos) y Menú (retorna al lobby).' }
                  ]
                },
                {
                  badge: 'Diapositiva 5 · Progresión',
                  title: 'Niveles y Curva de Dificultad',
                  screen: 'Slide 5 · Desafíos del Juego',
                  color: '#C2410C',
                  bgHeader: '#fff7ed',
                  image: imgGSlide5,
                  rows: [
                    { label: 'Nivel 1 (Fácil)', value: 'Círculo y Cuadrado · Medidas enteras de 1 dígito.' },
                    { label: 'Nivel 2 (Medio)', value: 'Rectángulo y Pentágono · Uso de decimales y apotema.' },
                    { label: 'Nivel 3 (Difícil)', value: 'Triángulos Isósceles y Escaleno · Múltiples variables y lados.' },
                    { label: 'Nivel 4 (Experto)', value: 'Desafío Contra Reloj · Resolver 5 figuras en menos de 90 segundos.' }
                  ]
                },
                {
                  badge: 'Diapositiva 6 · Galería',
                  title: 'Galería de Pantallas (Mockups)',
                  screen: 'Slide 6 · Capturas en Teléfono',
                  color: '#0284C7',
                  bgHeader: '#f0f9ff',
                  image: imgGSlide6,
                  rows: [
                    { label: 'Pantalla 1 (Lobby)', value: 'Screen1 con logotipo, presentación y botón Iniciar.' },
                    { label: 'Pantalla 2 (Niveles)', value: 'Menú Principal con acceso táctil a las 7 figuras.' },
                    { label: 'Pantalla 3 (Partida)', value: 'Pantalla de cálculo activa con resultados en cm y cm².' },
                    { label: 'Estilo Visual', value: '3 Smartphones flotantes con marcos, sombras y alta definición.' }
                  ]
                },
                {
                  badge: 'Diapositiva 7 · Descarga',
                  title: 'Créditos y Código QR Oficial',
                  screen: 'Slide 7 · Instalador APK',
                  color: '#0F172A',
                  bgHeader: '#f8fafc',
                  image: imgGSlide7,
                  rows: [
                    { label: 'Código QR Oficial', value: 'Escaneo directo con cámara móvil para descargar el APK.' },
                    { label: 'Desarrollador Líder', value: 'Nombre y Apellidos del Estudiante.' },
                    { label: 'Plantel Educativo', value: 'CONALEP Pachuca II · CCT 13DPT0002Y.' },
                    { label: 'Módulo y Grupo', value: 'EDOA-20 · Grupo 301-INFO25 · Semestre 1.26.27.' }
                  ]
                }
              ]
            }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · MIÉRCOLES (1 HORA · 17:40 - 18:30)
Metodología: Sesión 01 de Semana 14 (Lunes sin clases) ➔ Proyección de Plantillas Visuales en Cañón (15 min) ➔ Construcción en PC (35 min) ➔ Revisión de Enlace (10 min)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 1 (17:40 - 18:30) · Montaje de las 7 Diapositivas de "El Juego"
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO (Inicio · 5 min):
"El lunes descansamos por la Revolución Mexicana, pero hoy arrancamos la Semana 14 con todo: su juego GeoCalc ya funciona en el celular, ahora vamos a documentarlo con una presentación ejecutiva de 7 diapositivas que simula el lanzamiento oficial de un videojuego."

🖥️ DEMO EN CAÑÓN POR BLOQUES (15 min):
1) Abrir slides.new en el navegador. Nombrar el archivo: 'El_Juego_GeoCalc_Apellido_Nombre'.
2) Bloque Identidad (Slides 1 y 2):
   - Diapositiva 1: Portada con el ícono diseñado en Dibujos de Google, título en negritas y datos de CONALEP Pachuca II.
   - Diapositiva 2: ¿Qué hace el juego? Sinopsis del 'Arquitecto Digital', objetivo de cálculo y características destacadas.
3) Bloque Jugabilidad (Slides 3, 4 y 5):
   - Diapositiva 3: Instrucciones en 3 pasos (Selecciona figura, ingresa medidas, presiona botón) y reglas de vidas/tiempo.
   - Diapositiva 4: Personajes y Elementos (El Jugador, las 7 figuras y los botones Perímetro verde y Área azul).
   - Diapositiva 5: Niveles (Fácil, Medio, Difícil y Modo Contra Reloj).
4) Bloque Showcase y Descarga (Slides 6 y 7):
   - Diapositiva 6: Mockups con 3 teléfonos mostrando Screen1, Menú y una Pantalla de Cálculo.
   - Diapositiva 7: Ficha técnica del alumno, datos del plantel y la imagen del Código QR generado en App Inventor (Build APK).

💻 RETO EN PC (35 min):
Cada alumno construye sus 7 diapositivas guiándose por los ejemplos proyectados en pantalla.
👉 CHECK HORA 1: Estructura de 7 diapositivas completa con tipografía uniforme y sin errores ortográficos.

🏷️ EVIDENCIA Y SELLO:
Presentación de 7 diapositivas completa en Google Slides. 👉 SELLO 1`,
          closure: 'Estructura de las 7 diapositivas de "El Juego" concluida en Google Slides y compartida en Google Drive.'
        },
        {
          id: 'S2',
          label: 'Sesión 02',
          subtitle: 'Jueves (2 hrs · 16:50 - 18:30) · Interactividad, Enlaces Internos y Coevaluación en Pares',
          start: '¿Cómo convertimos una presentación estática en un prototipo interactivo donde los botones cambien de diapositiva como si fuera el juego real?',
          dictation: `⏱️ HORAS 2 Y 3 · Prototipado Interactivo, Hipervínculos Internos y Coevaluación en Google Slides:
En el diseño contemporáneo de interfaces digitales, el prototipado interactivo simula la experiencia real del usuario antes del despliegue masivo. Mediante la herramienta de hipervínculos internos de Presentaciones de Google (Insertar > Enlace > Diapositivas de esta presentación), el estudiante conecta los botones y formas de la diapositiva hacia pantallas específicas, permitiendo saltar del Menú Principal a las instrucciones o a los niveles. En la segunda fase de la sesión, los estudiantes realizan una coevaluación en parejas, navegando la presentación de un compañero en modo pantalla completa para verificar usabilidad, consistencia estética y enlaces rotos.`,
          learningResult: 'Configurar hipervínculos internos entre diapositivas en Google Slides para crear una navegación interactiva y coevaluar el proyecto de un compañero.',
          identification: {
            topic: 'Hipervínculos e Interactividad en Slides',
            evidence: 'Presentación Interactiva + Ficha de Coevaluación (Sello 2)',
            organization: 'Individual en PC y Coevaluación en Parejas',
            location: 'Laboratorio de Informática',
            time: '2 hrs'
          },
          infographicTitle: 'Ruta Sesión 02 (Jueves · 2 Horas)',
          infographicSteps: [
            { title: '1. Creación de Botones', desc: 'Dibujar formas redondeadas con texto ("Jugar", "Reglas", "Niveles", "Menú").' },
            { title: '2. Enlaces Internos', desc: 'Asignar a cada botón su salto hacia la diapositiva correspondiente (Ctrl+K).' },
            { title: '3. Botón Retorno Universal', desc: 'Colocar un botón de regreso al lobby en las diapositivas 2 a la 7.' },
            { title: '4. Coevaluación Cruzada', desc: 'Intercambiar computadoras, probar en F5 y evaluar con rúbrica técnica.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · JUEVES (2 HORAS · 16:50 - 18:30)
Metodología: Desglose Estricto por Horas (Hora 2: Interactividad e Hipervínculos ➔ Hora 3: Coevaluación y Calificación en Lista)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 2 (16:50 - 17:40) · Enlaces Internos y Prototipado Navegable
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO (Inicio · 5 min):
"Una presentación tradicional se pasa con la barra espaciadora. Hoy vamos a convertir nuestras 7 diapositivas en una aplicación interactiva: al tocar un botón en pantalla, la presentación saltará automáticamente a esa sección del juego."

🖥️ DEMO EN CAÑÓN (10 min):
1) Seleccionar una forma o botón en la Diapositiva 1 (ej. 'Ver Instrucciones').
2) Presionar Ctrl+K (o Insertar > Enlace).
3) Desplegar 'Diapositivas en esta presentación' y seleccionar 'Diapositiva 3: Instrucciones'.
4) En las diapositivas 2 a 7, crear un botón flotante en la esquina inferior: '🏠 Menú' vinculado a la Diapositiva 1.
5) Presionar 'Presentar' (Ctrl+F5) y demostrar la navegación táctil/ratón.

💻 RETO EN PC (30 min):
Los alumnos vinculan todos los botones de su presentación y prueban la navegación fluida.
👉 CHECK HORA 2: Todos los botones navegan correctamente sin salir de la presentación.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 3 (17:40 - 18:30) · Coevaluación Cruzada en Pares y Retroalimentación
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO (Inicio · 5 min):
"El mejor evaluador de un videojuego es otro jugador. Cámbiense de asiento con su compañero de al lado: van a jugar su presentación y verificar si los botones funcionan y si el diseño cumple con los 7 requisitos."

🖥️ DINÁMICA DE COEVALUACIÓN (10 min):
1) Cada alumno abre la presentación de su compañero en modo presentación completa.
2) Cotejo de 4 puntos clave:
   - ¿Están completas las 7 diapositivas solicitadas?
   - ¿Los botones interactivos saltan a la diapositiva correcta?
   - ¿Se ve nítido el código QR y los mockups de teléfono?
   - ¿Hay buena ortografía y contraste de colores?
3) Registro de comentarios constructivos en la libreta del compañero.

💻 RETO EN PC Y LIBRETA (30 min):
Pruebas cruzadas y ajustes finales en el archivo de Google Slides.

🏷️ EVIDENCIA Y SELLO:
Presentación interactiva validada y coevaluación registrada. 👉 SELLO 2`,
          closure: 'Presentación de 7 diapositivas interactiva concluida y validada por pares.'
        },
        {
          id: 'S3',
          label: 'Sesión 03',
          subtitle: 'Viernes (1 hr · 15:00 - 15:50) · Publicación Web en Google Slides y Evaluación Sumativa',
          start: '¿Cómo publicamos nuestra presentación en internet para que cualquiera pueda abrirla en pantalla completa sin iniciar sesión en Google?',
          dictation: `⏱️ HORA 4 · Despliegue en la Nube, Publicación Web y Evaluación Sumativa:
La ofimática en la nube culmina con la publicación y distribución global del contenido digital. A través de la función 'Publicar en la web' de Presentaciones de Google, la presentación se convierte en un reproductor web interactivo independiente, accesible desde cualquier navegador sin solicitar permisos de edición ni cuenta de correo. El docente evalúa sumativamente el proyecto final de la Semana 14 considerando el cumplimiento de las siete diapositivas, la calidad visual, los hipervínculos operativos y la disponibilidad del enlace público en la lista oficial.`,
          learningResult: 'Publicar la presentación en la web mediante Google Slides, obtener el enlace público autónomo y acreditar la evaluación sumativa de la Semana 14.',
          identification: {
            topic: 'Publicación Web y Evaluación Sumativa',
            evidence: 'URL Pública de Google Slides + Calificación en Lista Oficial (Sello 3)',
            organization: 'Individual en PC y Proyección',
            location: 'Laboratorio de Informática',
            time: '1 hr'
          },
          infographicTitle: 'Ruta Sesión 03 (Viernes · 1 Hora)',
          infographicSteps: [
            { title: '1. Archivo > Publicar', desc: 'Ir al menú Archivo > Compartir > Publicar en la web.' },
            { title: '2. Configuración de Enlace', desc: 'Hacer clic en el botón azul "Publicar" y aceptar el diálogo de confirmación.' },
            { title: '3. Prueba en Incógnito', desc: 'Abrir una pestaña privada (Ctrl+Shift+N) y pegar el enlace para validar el acceso.' },
            { title: '4. Calificación Oficial', desc: 'Presentar el enlace al docente y registrar la calificación definitiva en lista.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · VIERNES (1 HORA · 15:00 - 15:50)
Metodología: Publicación Web (15 min) ➔ Revisión Individual y Asentamiento de Notas (35 min)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 4 (15:00 - 15:50) · Despliegue Público y Evaluación Sumativa
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Hoy es el gran estreno: convertiremos sus diapositivas privadas en un enlace web público que pueden compartir con quien quieran o poner en su portafolio digital."

🖥️ DEMO EN CAÑÓN (10 min):
1) En Google Slides, ir a: Archivo > Compartir > Publicar en la web.
2) Pestaña 'Enlace' > Clic en 'Publicar' > Aceptar el aviso de confirmación.
3) Copiar el enlace generado (docs.google.com/presentation/d/e/.../pub).
4) Abrir ventana de incógnito (Ctrl+Shift+N) y comprobar que el pitch deck se despliega en pantalla completa.

💻 REVISIÓN EN ESCRITORIO (35 min):
El docente revisa en cada lugar el enlace web publicado y registra el cumplimiento de los 7 elementos clave.

📋 RÚBRICA SUMATIVA SEMANA 14 (100%):
• Diapositivas 1 y 2 (Portada institucional con ícono y ¿Qué hace el juego?): 20%
• Diapositivas 3, 4 y 5 (Instrucciones, Personajes/Elementos y Niveles de reto): 30%
• Diapositivas 6 y 7 (Galería de Mockups y Créditos con Código QR APK): 25%
• Interactividad (Hipervínculos internos entre diapositivas): 15%
• Despliegue Web (Enlace público verificado en incógnito): 10%

👉 RESULTADO: Calificación asentada formalmente en la lista de calificaciones del grupo 301-INFO25.`,
          closure: 'Semana 14 concluida satisfactoriamente con la publicación web de las presentaciones y evaluación sumativa registrada.'
        }
      ]
    }
  }
};