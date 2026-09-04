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
      hours: Array.from({length: 8}, (_, i) => ({
        id: `H${i+1}`,
        label: `Hora ${i+1}`,
        subtitle: 'Actividad de Encuadre',
        start: '¿Por qué un documento mal formateado puede costarte un empleo?',
        dictation: 'La elaboración de documentos digitales avanzados no trata sobre escribir más rápido, sino sobre estructurar la información con estándares profesionales que garanticen su lectura, accesibilidad y automatización en entornos empresariales.',
        learningResult: 'Conocer las políticas del módulo, el sistema de evaluación y la metodología de trabajo en laboratorio.',
        identification: { topic: 'Encuadre EDOA', evidence: 'Apunte en libreta', organization: 'Individual', location: 'Aula', time: '50 min' },
        infographicTitle: 'Reglas de Oro del Laboratorio',
        infographicSteps: [
          { title: '1. Equipo', desc: 'Revisar la computadora asignada al entrar.' },
          { title: '2. Cuentas', desc: 'Usar siempre el correo institucional.' },
          { title: '3. Respaldo', desc: 'Todo se guarda en Google Drive.' },
          { title: '4. Entrega', desc: 'Enlaces en Classroom antes del timbre.' }
        ],
        development: 'Presentación del encuadre por parte del docente. Los alumnos anotan los porcentajes de evaluación y las reglas de laboratorio.',
        closure: 'Firma de enterado en la libreta por parte del alumno.'
      }))
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
      hours: Array.from({length: 8}, (_, i) => ({
        id: `H${i+1}`,
        label: `Hora ${i+1}`,
        subtitle: 'El paradigma de la Nube',
        start: '¿Qué pasa si tu computadora explota hoy?',
        dictation: 'Trabajar en la nube significa que el documento no vive en el dispositivo físico, sino en un servidor remoto. Esto permite colaboración en tiempo real, autoguardado constante y acceso desde cualquier dispositivo.',
        learningResult: 'Comprender la diferencia entre un archivo local y un documento en la nube.',
        identification: { topic: 'Cloud Computing', evidence: 'Apunte', organization: 'Individual', location: 'Aula', time: '50 min' },
        infographicTitle: 'Beneficios de la Nube',
        infographicSteps: [
          { title: '1. Autoguardado', desc: 'Cero pérdida de datos.' },
          { title: '2. Accesibilidad', desc: 'Abre desde tu celular o PC.' },
          { title: '3. Colaboración', desc: 'Múltiples usuarios a la vez.' },
          { title: '4. Historial', desc: 'Recupera versiones anteriores.' }
        ],
        development: 'Demostración de cómo Google Docs guarda en tiempo real. Los alumnos crean su primer archivo llamado "Semana 01".',
        closure: 'Apunte de los beneficios firmado en libreta.'
      }))
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
      hours: Array.from({length: 8}, (_, i) => ({
        id: `H${i+1}`,
        label: `Hora ${i+1}`,
        subtitle: 'Maquetación de Oficios',
        start: '¿Sabes cómo solicitar algo formalmente?',
        dictation: 'Un oficio requiere justificación de texto, interlineado formal, fecha alineada a la derecha y saludos protocolares institucionales.',
        learningResult: 'Redactar un oficio formal a la dirección.',
        identification: { topic: 'Oficio', evidence: 'Oficio redactado', organization: 'Individual', location: 'Laboratorio', time: '50 min' },
        infographicTitle: 'Partes del Oficio',
        infographicSteps: [
          { title: '1. Fecha', desc: 'Alineada derecha' },
          { title: '2. Destinatario', desc: 'Cargo completo' },
          { title: '3. Cuerpo', desc: 'Justificado 1.15' },
          { title: '4. Firma', desc: 'Atentamente central' }
        ],
        development: 'Redactar un oficio real solicitando permiso para usar el laboratorio.',
        closure: 'Oficio con estructura formal.'
      }))
    },
    'W03': {
      id: 'W03',
      label: 'Semana 03',
      title: 'Automatización y Hojas de Cálculo',
      dates: '31 Ago - 04 Sep',
      status: 'active',
      presentationUrl: './html/W03.html',
      summary: 'Lunes: Automatización Docs (Fichas y QR). Miércoles/Jueves: Intro Sheets (Relativo vs Absoluto). Viernes: Verificación.',
      expectedProduct: 'Currículum Interactivo y Tablas de Multiplicar dinámicas.',
      hours: [
        {
          id: 'H1', label: 'Hora 1 (Lun)', subtitle: 'Fichas Inteligentes (@)',
          start: '¿Y si tu documento fuera interactivo?',
          dictation: 'Las Fichas Inteligentes (Smart Chips) permiten insertar elementos interactivos como menús desplegables con solo escribir el símbolo arroba (@).',
          learningResult: 'Insertar menús desplegables y chips de estado.',
          identification: { topic: 'Smart Chips', evidence: 'Menú activo', organization: 'Individual', location: 'Laboratorio', time: '50 min' },
          infographicTitle: 'Poder del @',
          infographicSteps: [{ title: '1. Activar', desc: 'Escribe @' }, { title: '2. Fecha', desc: 'Calendario interactivo.' }, { title: '3. Menú', desc: 'Dropdown de estados.' }, { title: '4. Personas', desc: 'Etiqueta contactos.' }],
          development: 'Crear documento "Gestión 301". Insertar menús de estado para proyectos.',
          closure: 'Menús funcionando en pantalla.'
        },
        {
          id: 'H2', label: 'Hora 2 (Lun)', subtitle: 'Add-ons y Checklists',
          start: '¿Qué es un Add-on?',
          dictation: 'Los Complementos (Add-ons) son aplicaciones de terceros que se instalan dentro de Docs para agregar funciones extra como generadores de códigos QR.',
          learningResult: 'Instalar un complemento y generar un QR.',
          identification: { topic: 'Extensiones', evidence: 'QR Funcional', organization: 'Individual', location: 'Laboratorio', time: '50 min' },
          infographicTitle: 'Complementos',
          infographicSteps: [{ title: '1. Menú', desc: 'Extensiones' }, { title: '2. Buscar', desc: 'QR Generator' }, { title: '3. Instalar', desc: 'Dar permisos' }, { title: '4. Ejecutar', desc: 'Generar QR' }],
          development: 'Hacer lista de tareas con casillas. Instalar Add-on de QR e incrustar portal.',
          closure: 'Profesor escanea el QR.'
        },
        {
          id: 'H3', label: 'Hora 3 (Lun)', subtitle: 'Firma Digital',
          start: '¿Cómo firmas en digital?',
          dictation: 'El Lienzo de Dibujo integrado permite crear firmas digitales a mano alzada sin salir del procesador de texto.',
          learningResult: 'Dibujar e insertar una firma digital.',
          identification: { topic: 'Firma Digital', evidence: 'Documento firmado', organization: 'Individual', location: 'Laboratorio', time: '50 min' },
          infographicTitle: 'Lienzo Nativo',
          infographicSteps: [{ title: '1. Abrir', desc: 'Insertar > Dibujo' }, { title: '2. Línea', desc: 'Mano alzada' }, { title: '3. Trazar', desc: 'Firma con mouse' }, { title: '4. Guardar', desc: 'Incrustar al final' }],
          development: 'Diseñar la firma en el lienzo e incrustarla al final de la página.',
          closure: 'Documento con validez visual.'
        },
        {
          id: 'H4', label: 'Hora 4 (Lun)', subtitle: 'Plantillas Oficiales',
          start: '¿Por qué inventar la rueda?',
          dictation: 'Las Plantillas son documentos pre-diseñados que ahorran tiempo de maquetación y garantizan formatos con estándares profesionales.',
          learningResult: 'Construir un CV usando plantillas.',
          identification: { topic: 'Plantillas', evidence: 'CV Terminado', organization: 'Individual', location: 'Laboratorio', time: '50 min' },
          infographicTitle: 'Uso de Plantillas',
          infographicSteps: [{ title: '1. Galería', desc: 'Abre docs.new' }, { title: '2. Selección', desc: 'Elige Currículum' }, { title: '3. Vaciado', desc: 'Llena tus datos' }, { title: '4. Ajustes', desc: 'Firma y menú' }],
          development: 'Llenar CV, aplicar menús desplegables y agregar la firma digital.',
          closure: 'CV listo para entrega en Classroom.'
        },
        {
          id: 'H5', label: 'Hora 5 (Mié)', subtitle: 'Directorio Visual (Sheets)',
          start: '¿Las matemáticas te dan miedo?',
          dictation: 'Iniciaremos con Hojas de Cálculo (Sheets). Por ahora no usaremos fórmulas, solo conoceremos la matriz de celdas para crear directorios o inventarios.',
          learningResult: 'Reconocer filas, columnas y celdas.',
          identification: { topic: 'Intro Sheets', evidence: 'Inventario', organization: 'Individual', location: 'Laboratorio', time: '50 min' },
          infographicTitle: 'Anatomía de Sheets',
          infographicSteps: [{ title: '1. Filas', desc: 'Horizontales (1,2,3)' }, { title: '2. Columnas', desc: 'Verticales (A,B,C)' }, { title: '3. Celda', desc: 'Intersección' }, { title: '4. Formato', desc: 'Colores' }],
          development: 'Práctica relax: Crear un directorio o inventario de videojuegos usando únicamente herramientas de color, bordes y alineación.',
          closure: 'Entregar enlace en Classroom.'
        },
        {
          id: 'H6', label: 'Hora 6 (Jue)', subtitle: 'Autocompletar',
          start: '¿Qué pasa si tienes mil registros?',
          dictation: 'El Autocompletar permite arrastrar una lógica a cientos de celdas. Es la herramienta de productividad más importante de Sheets.',
          learningResult: 'Dominar la función de arrastre.',
          identification: { topic: 'Autocompletar', evidence: 'Secuencia', organization: 'Individual', location: 'Laboratorio', time: '50 min' },
          infographicTitle: 'Cuadro Azul',
          infographicSteps: [{ title: '1. Selecciona', desc: 'Haz clic en celda' }, { title: '2. Esquina', desc: 'Busca cuadro azul' }, { title: '3. Clic', desc: 'Mantén presionado' }, { title: '4. Arrastra', desc: 'Desliza abajo' }],
          development: 'Práctica de series numéricas automáticas y copia de palabras en bloque.',
          closure: 'Revisión en pantalla.'
        },
        {
          id: 'H7', label: 'Hora 7 (Jue)', subtitle: 'Creador de Tablas',
          start: '¿Cómo anclar una celda?',
          dictation: 'Fijar una celda con el signo de dólar ($) se llama Referencia Absoluta. Evita que la celda maestra se mueva al usar autocompletar.',
          learningResult: 'Crear tablas de multiplicar dinámicas.',
          identification: { topic: 'Ref Absolutas', evidence: 'Tablas', organization: 'Individual', location: 'Laboratorio', time: '50 min' },
          infographicTitle: 'Referencia Absoluta',
          infographicSteps: [{ title: '1. Maestra', desc: 'Celda con el N' }, { title: '2. Signo $', desc: 'Ej. $A$1' }, { title: '3. Fórmula', desc: 'Multiplicar *' }, { title: '4. Arrastrar', desc: 'Completa la tabla' }],
          development: 'Diseñar el creador. Al cambiar el número maestro, toda la tabla debe actualizarse automáticamente.',
          closure: 'Tablas dinámicas funcionando.'
        },
        {
          id: 'H8', label: 'Hora 8 (Vie)', subtitle: 'Kahoot y Verificación',
          start: '¿Qué aprendimos esta semana?',
          dictation: 'El cierre semanal sirve para evaluar la retención de conocimientos mediante herramientas gamificadas y asegurar que todos los enlaces estén correctos en Classroom.',
          learningResult: 'Consolidar aprendizaje y auditar entregas.',
          identification: { topic: 'Verificación', evidence: 'Classroom 100%', organization: 'Grupal', location: 'Aula', time: '50 min' },
          infographicTitle: 'Cierre Semanal',
          infographicSteps: [{ title: '1. Kahoot', desc: 'Participa con PIN' }, { title: '2. Auditar', desc: 'Revisar Classroom' }, { title: '3. Dudas', desc: 'Resolver fallos' }, { title: '4. Firma', desc: 'Sello final' }],
          development: 'Juego de Kahoot sobre los temas de la semana. Verificación uno a uno de las subidas en Classroom.',
          closure: 'Despedida de la semana 03.'
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
      hours: Array.from({length: 8}, (_, i) => ({
        id: `H${i+1}`,
        label: `Hora ${i+1}`,
        subtitle: 'Celdas y Fórmulas',
        start: '¿Cómo sumar 100 números en 1 segundo?',
        dictation: 'Las Funciones son fórmulas preprogramadas. En lugar de sumar celda por celda (A1+A2+A3), usamos la función =SUMA(A1:A3).',
        learningResult: 'Aplicar funciones SUMA, PROMEDIO y MAX.',
        identification: { topic: 'Funciones', evidence: 'Boleta', organization: 'Individual', location: 'Laboratorio', time: '50 min' },
        infographicTitle: 'Uso de Funciones',
        infographicSteps: [{ title: '1. Igual =', desc: 'Escribir =PROMEDIO' }, { title: '2. Paréntesis', desc: 'Abrir (' }, { title: '3. Rango', desc: 'Seleccionar celdas' }, { title: '4. Enter', desc: 'Cerrar y calcular' }],
        development: 'Desarrollar una pequeña boleta escolar usando funciones básicas.',
        closure: 'Archivo entregado en Classroom.'
      }))
    }
  }
};
