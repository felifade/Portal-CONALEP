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
        { id: 'RA1.1', title: 'Entorno Nube y Estilos Base', peso: '10%', weeks: ['W01'] },
        { id: 'RA1.2', title: 'Formato Avanzado y Documentos', peso: '10%', weeks: ['W02'] },
        { id: 'RA1.3', title: 'Automatización y Colaboración', peso: '10%', weeks: ['W03', 'W04'] }
      ]
    },
    {
      id: 'C2',
      label: 'Segundo Corte',
      peso: '35%',
      ras: [
        { id: 'RA2.1', title: 'Fusión Masiva de Datos', peso: '15%', weeks: ['W05', 'W06'] },
        { id: 'RA2.2', title: 'Presentaciones Interactivas', peso: '20%', weeks: ['W07', 'W08', 'W09'] }
      ]
    },
    {
      id: 'C3',
      label: 'Tercer Corte',
      peso: '35%',
      ras: [
        { id: 'RA3.1', title: 'Hojas de Cálculo Avanzadas', peso: '20%', weeks: ['W10', 'W11', 'W12'] },
        { id: 'RA3.2', title: 'Proyecto Integrador EDOA', peso: '15%', weeks: ['W13', 'W14', 'W15'] }
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
      hours: [
        {
          id: 'H1',
          label: 'Hora 1',
          subtitle: 'Presentación del Módulo',
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
        },
        { id: 'H2', label: 'Hora 2', subtitle: 'Evaluación Diagnóstica', start: '¿Qué tanto sabes de la nube?', dictation: 'El diagnóstico no tiene valor en la calificación, pero establece la línea base de nuestras habilidades.', learningResult: 'Completar formulario diagnóstico.', identification: { topic: 'Diagnóstico', evidence: 'Formulario', organization: 'Individual', location: 'Laboratorio', time: '50 min' }, infographicTitle: 'Pasos del Diagnóstico', infographicSteps: [{title:'1. Login',desc:'Accede a tu cuenta'}, {title:'2. Form',desc:'Abre Classroom'}, {title:'3. Responde',desc:'Lee con cuidado'}, {title:'4. Envía',desc:'Asegura la entrega'}], development: 'Realización de la prueba diagnóstica en Google Forms.', closure: 'Captura de pantalla de finalización.' },
        { id: 'H3', label: 'Hora 3', subtitle: 'Creación de Cuentas', start: '¿Tienes acceso a tu correo institucional?', dictation: 'La identidad digital institucional es el primer paso para acceder a las herramientas empresariales de Google Workspace.', learningResult: 'Activar cuentas institucionales.', identification: { topic: 'Identidad Digital', evidence: 'Cuenta activa', organization: 'Individual', location: 'Laboratorio', time: '50 min' }, infographicTitle: 'Activación de Cuenta', infographicSteps: [{title:'1. Portal',desc:'Ingresa a Office/Google'}, {title:'2. Usuario',desc:'Tu matrícula'}, {title:'3. Clave',desc:'Contraseña temporal'}, {title:'4. Seguridad',desc:'Cambia tu clave'}], development: 'Asistencia técnica para recuperar y configurar cuentas institucionales.', closure: 'Envío de correo de prueba al docente.' },
        { id: 'H4', label: 'Hora 4', subtitle: 'Conociendo Drive', start: '¿Dónde viven tus archivos?', dictation: 'Google Drive es nuestra memoria principal. Un archivo perdido es un archivo no evaluado.', learningResult: 'Crear la estructura de carpetas del semestre.', identification: { topic: 'Estructura Drive', evidence: 'Carpetas creadas', organization: 'Individual', location: 'Laboratorio', time: '50 min' }, infographicTitle: 'Estructura de Carpetas', infographicSteps: [{title:'1. Raíz',desc:'Carpeta EDOA-20'}, {title:'2. Cortes',desc:'Corte 1, 2 y 3'}, {title:'3. Semanas',desc:'Semana 01, 02...'}, {title:'4. Color',desc:'Asigna color institucional'}], development: 'Creación de la jerarquía de carpetas en Google Drive.', closure: 'Enlace de la carpeta raíz pegado en Classroom.' },
        { id: 'H5', label: 'Hora 5', subtitle: 'Cierre de Semana 00', start: '¿Estamos listos para iniciar?', dictation: 'La preparación técnica es la base del éxito en cualquier entorno digital. Sin infraestructura, no hay desarrollo.', learningResult: 'Verificar checklist de inicio de semestre.', identification: { topic: 'Checklist', evidence: 'Firmas completas', organization: 'Individual', location: 'Aula', time: '50 min' }, infographicTitle: 'Checklist Final', infographicSteps: [{title:'1. Libreta',desc:'Forrada y con datos'}, {title:'2. Drive',desc:'Carpetas listas'}, {title:'3. Correo',desc:'Activo en celular'}, {title:'4. Classroom',desc:'Unidos a la clase'}], development: 'Revisión final de libretas y cuentas activas.', closure: 'Sello de semana 00 completada.' }
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
      hours: [
        {
          id: 'H1',
          label: 'Hora 1',
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
        },
        { id: 'H2', label: 'Hora 2', subtitle: 'Atajos de Teclado', start: '¿Por qué usar el mouse te hace lento?', dictation: 'Los atajos de teclado (shortcuts) son combinaciones de teclas que ejecutan comandos rápidamente. En entornos corporativos, dominar los atajos incrementa la productividad hasta en un 40%.', learningResult: 'Memorizar y aplicar los 5 atajos universales.', identification: { topic: 'Atajos', evidence: 'Práctica', organization: 'Individual', location: 'Laboratorio', time: '50 min' }, infographicTitle: 'Atajos Universales', infographicSteps: [{title:'1. Ctrl+C',desc:'Copiar elemento'}, {title:'2. Ctrl+V',desc:'Pegar elemento'}, {title:'3. Ctrl+Z',desc:'Deshacer error'}, {title:'4. Ctrl+A',desc:'Seleccionar todo'}], development: 'Práctica cronometrada de copiar, pegar y formatear texto usando únicamente el teclado.', closure: 'Reto de velocidad superado (Check del docente).' },
        { id: 'H3', label: 'Hora 3', subtitle: 'Jerarquía Visual', start: '¿Por qué los libros tienen tamaños de letra distintos?', dictation: 'La jerarquía visual guía el ojo del lector. En documentos digitales, no se cambian los tamaños manualmente, se utilizan los "Estilos de Párrafo" para darle estructura semántica al archivo.', learningResult: 'Diferenciar entre Texto Normal, Título y Subtítulo.', identification: { topic: 'Estilos Base', evidence: 'Documento', organization: 'Individual', location: 'Laboratorio', time: '50 min' }, infographicTitle: 'Niveles de Texto', infographicSteps: [{title:'1. Título',desc:'Solo uno por documento'}, {title:'2. Subtítulo',desc:'Apoyo al título principal'}, {title:'3. Encabezado',desc:'Secciones del documento'}, {title:'4. Normal',desc:'Cuerpo del texto'}], development: 'Los alumnos aplican estilos a un texto plano proporcionado por el docente.', closure: 'Documento con jerarquía visual correcta.' },
        { id: 'H4', label: 'Hora 4', subtitle: 'Encabezados (H1, H2, H3)', start: '¿Cómo estructurar un documento largo?', dictation: 'Los encabezados 1, 2 y 3 crean el esqueleto del documento. Son fundamentales para generar índices automáticos y para que los lectores de pantalla entiendan el contenido.', learningResult: 'Aplicar H1, H2 y H3 lógicamente.', identification: { topic: 'Encabezados', evidence: 'Práctica', organization: 'Individual', location: 'Laboratorio', time: '50 min' }, infographicTitle: 'Uso de Encabezados', infographicSteps: [{title:'1. H1',desc:'Temas principales'}, {title:'2. H2',desc:'Subtemas de H1'}, {title:'3. H3',desc:'Detalles de H2'}, {title:'4. Índice',desc:'Se generan solos'}], development: 'Extender el documento de la Hora 3 aplicando H1, H2 y H3.', closure: 'Revisión del panel de esquema de Google Docs.' },
        { id: 'H5', label: 'Hora 5', subtitle: 'Cierre Semana 01', start: '¿Sabes compartir correctamente un archivo?', dictation: 'Compartir un enlace privado a un profesor es como entregar un examen en una caja fuerte sin la llave. Siempre debes ajustar los permisos a "Lector" o "Cualquier persona con el enlace".', learningResult: 'Ajustar permisos de Google Drive.', identification: { topic: 'Permisos', evidence: 'Enlace público', organization: 'Individual', location: 'Aula', time: '50 min' }, infographicTitle: 'Permisos en Drive', infographicSteps: [{title:'1. Compartir',desc:'Clic botón azul superior'}, {title:'2. Acceso',desc:'Cambiar a Público'}, {title:'3. Rol',desc:'Asignar rol de Lector'}, {title:'4. Copiar',desc:'Copiar enlace final'}], development: 'Generar el enlace del documento "Semana 01" con permisos de Lector y subirlo a Classroom.', closure: 'Entrega en Classroom confirmada.' }
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
      hours: [
        {
          id: 'H1',
          label: 'Hora 1',
          subtitle: 'El Índice Automático',
          start: '¿Aún escribes puntitos en tus índices manualmente?',
          dictation: 'El índice automático recopila todos los Encabezados aplicados en el documento y genera una tabla de contenido clicable que se actualiza sola al modificar las páginas.',
          learningResult: 'Generar e interactuar con la Tabla de Contenido.',
          identification: { topic: 'Índices', evidence: 'Índice insertado', organization: 'Individual', location: 'Laboratorio', time: '50 min' },
          infographicTitle: 'Pasos para el Índice',
          infographicSteps: [
            { title: '1. Estilos', desc: 'Asegura tener H1 y H2.' },
            { title: '2. Insertar', desc: 'Menú Insertar > Tabla.' },
            { title: '3. Diseño', desc: 'Elegir con o sin números.' },
            { title: '4. Actualizar', desc: 'Clic en la flecha si hay cambios.' }
          ],
          development: 'Recuperar el archivo Semana 01 y agregarle una hoja exclusiva para el índice automático.',
          closure: 'Verificar que el índice sea navegable.'
        },
        { id: 'H2', label: 'Hora 2', subtitle: 'Tablas de Datos y Viñetas', start: '¿Cómo presentar listas sin aburrir?', dictation: 'Las tablas ordenan datos complejos en matrices, mientras que las viñetas agrupan elementos simples. Ambas herramientas mejoran drásticamente la legibilidad.', learningResult: 'Insertar tablas y viñetas personalizadas.', identification: { topic: 'Tablas', evidence: 'Documento', organization: 'Individual', location: 'Laboratorio', time: '50 min' }, infographicTitle: 'Anatomía de Tablas', infographicSteps: [{title:'1. Fila',desc:'Línea horizontal'}, {title:'2. Columna',desc:'Línea vertical'}, {title:'3. Celda',desc:'Cruce de ambas'}, {title:'4. Borde',desc:'Líneas visibles'}], development: 'Crear una lista de 10 recomendaciones y una tabla de 3 columnas describiendo los Estilos Base.', closure: 'Tabla formateada con colores.' },
        { id: 'H3', label: 'Hora 3', subtitle: 'Maquetación de Oficios', start: '¿Sabes cómo solicitar algo formalmente?', dictation: 'Un oficio requiere justificación de texto, interlineado formal, fecha alineada a la derecha y saludos protocolares institucionales.', learningResult: 'Redactar un oficio formal a la dirección.', identification: { topic: 'Oficio', evidence: 'Oficio redactado', organization: 'Individual', location: 'Laboratorio', time: '50 min' }, infographicTitle: 'Partes del Oficio', infographicSteps: [{title:'1. Fecha',desc:'Alineada derecha'}, {title:'2. Destinatario',desc:'Cargo completo'}, {title:'3. Cuerpo',desc:'Justificado 1.15'}, {title:'4. Firma',desc:'Atentamente central'}], development: 'Redactar un oficio real solicitando permiso para usar el laboratorio.', closure: 'Oficio con estructura formal.' },
        { id: 'H4', label: 'Hora 4', subtitle: 'Marcas de Agua e Imágenes', start: '¿Cómo proteger o brandear tu documento?', dictation: 'La marca de agua es una imagen translúcida en el fondo que indica confidencialidad o identidad corporativa sin entorpecer la lectura.', learningResult: 'Insertar marcas de agua institucionales.', identification: { topic: 'Identidad', evidence: 'Doc brandeado', organization: 'Individual', location: 'Laboratorio', time: '50 min' }, infographicTitle: 'Marca de Agua', infographicSteps: [{title:'1. Menú',desc:'Insertar > Marca'}, {title:'2. Tipo',desc:'Elegir Imagen'}, {title:'3. Transparencia',desc:'Opacidad al 50%'}, {title:'4. Revisión',desc:'Debe poder leerse'}], development: 'Insertar logo de CONALEP como marca de agua en el oficio.', closure: 'Documento institucional terminado.' },
        { id: 'H5', label: 'Hora 5', subtitle: 'Cierre de Semana 02', start: '¿Tu documento cumple los estándares?', dictation: 'La coevaluación permite auditar el trabajo de un colega utilizando una lista de cotejo para detectar errores antes de la entrega final.', learningResult: 'Aplicar lista de cotejo al compañero.', identification: { topic: 'Coevaluación', evidence: 'Lista cotejo', organization: 'Parejas', location: 'Aula', time: '50 min' }, infographicTitle: 'Auditoría', infographicSteps: [{title:'1. Índice',desc:'¿Se actualiza?'}, {title:'2. Oficio',desc:'¿Está justificado?'}, {title:'3. Tabla',desc:'¿Tiene bordes?'}, {title:'4. Permisos',desc:'¿Es Lector público?'}], development: 'Intercambiar lugares y revisar el documento del compañero. Hacer correcciones.', closure: 'Sello de evidencia Semana 02.' }
      ]
    },
    'W03': {
      id: 'W03',
      label: 'Semana 03',
      title: 'Automatización y Fichas',
      dates: '31 Ago - 04 Sep',
      status: 'active',
      presentationUrl: './html/W03.html',
      summary: 'Uso de Fichas Inteligentes, Menús desplegables y Plantillas para crear documentos vivos e interactivos.',
      expectedProduct: 'Currículum Vitae interactivo y Checklists funcionales.',
      hours: [
        {
          id: 'H1',
          label: 'Hora 1',
          subtitle: 'Fichas Inteligentes (@)',
          start: '¿Y si tu documento fuera interactivo?',
          dictation: 'Las Fichas Inteligentes (Smart Chips) son herramientas de Google Docs que permiten insertar elementos interactivos como menús desplegables con solo escribir el símbolo arroba (@).',
          learningResult: 'Insertar menús desplegables y chips de estado.',
          identification: { topic: 'Smart Chips', evidence: 'Menú activo', organization: 'Individual', location: 'Laboratorio', time: '50 min' },
          infographicTitle: 'Poder del @',
          infographicSteps: [
            { title: '1. Activar', desc: 'Escribe @' },
            { title: '2. Fecha', desc: 'Calendario interactivo.' },
            { title: '3. Menú', desc: 'Dropdown de estados.' },
            { title: '4. Personas', desc: 'Etiqueta contactos.' }
          ],
          development: 'Crear documento "Gestión 301". Insertar menús de estado para proyectos.',
          closure: 'Menús funcionando en pantalla.'
        },
        { id: 'H2', label: 'Hora 2', subtitle: 'Add-ons y Checklists', start: '¿Qué es un Add-on?', dictation: 'Los Complementos (Add-ons) son aplicaciones de terceros que se instalan dentro de Docs para agregar funciones extra como generadores de códigos QR.', learningResult: 'Instalar un complemento y generar un QR.', identification: { topic: 'Extensiones', evidence: 'QR Funcional', organization: 'Individual', location: 'Laboratorio', time: '50 min' }, infographicTitle: 'Complementos', infographicSteps: [{title:'1. Menú',desc:'Extensiones'}, {title:'2. Buscar',desc:'QR Generator'}, {title:'3. Instalar',desc:'Dar permisos'}, {title:'4. Ejecutar',desc:'Generar QR'}], development: 'Hacer lista de tareas con casillas. Instalar Add-on de QR e incrustar portal.', closure: 'Profesor escanea el QR.' },
        { id: 'H3', label: 'Hora 3', subtitle: 'Firma Digital y Lienzo', start: '¿Cómo firmas en digital?', dictation: 'El Lienzo de Dibujo integrado permite crear firmas digitales a mano alzada sin salir del procesador de texto ni usar programas externos.', learningResult: 'Dibujar e insertar una firma digital.', identification: { topic: 'Firma Digital', evidence: 'Documento', organization: 'Individual', location: 'Laboratorio', time: '50 min' }, infographicTitle: 'Lienzo Nativo', infographicSteps: [{title:'1. Abrir',desc:'Insertar > Dibujo'}, {title:'2. Línea',desc:'Mano alzada'}, {title:'3. Trazar',desc:'Firma con mouse'}, {title:'4. Guardar',desc:'Incrustar al final'}], development: 'Diseñar la firma en el lienzo e incrustarla al final de la página.', closure: 'Documento con validez visual.' },
        { id: 'H4', label: 'Hora 4', subtitle: 'Plantillas (Currículum)', start: '¿Por qué inventar la rueda?', dictation: 'Las Plantillas son documentos pre-diseñados que ahorran tiempo de maquetación y garantizan formatos con estándares profesionales.', learningResult: 'Construir un CV usando plantillas.', identification: { topic: 'Plantillas', evidence: 'CV Terminado', organization: 'Individual', location: 'Laboratorio', time: '50 min' }, infographicTitle: 'Uso de Plantillas', infographicSteps: [{title:'1. Galería',desc:'Abre docs.new'}, {title:'2. Selección',desc:'Elige Currículum'}, {title:'3. Vaciado',desc:'Llena tus datos'}, {title:'4. Ajustes',desc:'Firma y menú'}], development: 'Llenar CV, aplicar menús desplegables y agregar la firma digital.', closure: 'CV listo para mundo laboral.' },
        { id: 'H5', label: 'Hora 5', subtitle: 'Cierre Semana 03', start: '¿Todo es dinámico?', dictation: 'La automatización básica en documentos reduce errores humanos. Un CV interactivo destaca por encima de un simple PDF plano.', learningResult: 'Verificar interactividad y entrega.', identification: { topic: 'Entregables', evidence: 'Classroom', organization: 'Individual', location: 'Aula', time: '50 min' }, infographicTitle: 'Check final W03', infographicSteps: [{title:'1. Fichas',desc:'Funcionan'}, {title:'2. QR',desc:'Escanea al portal'}, {title:'3. Firma',desc:'Integrada bien'}, {title:'4. Entrega',desc:'Lector público'}], development: 'Prueba de estrés de los enlaces externos y menús.', closure: 'Kahoot semanal y sello.' }
      ]
    },
    'W04': {
      id: 'W04',
      label: 'Semana 04',
      title: 'Intro a Hojas de Cálculo',
      dates: '07 Sep - 11 Sep',
      status: 'upcoming',
      presentationUrl: null,
      summary: 'El salto de Docs a Sheets. Introducción a celdas, filas, columnas y operaciones matemáticas básicas.',
      expectedProduct: 'Directorio visual y Creador de Tablas de Multiplicar dinámico.',
      hours: [
        {
          id: 'H1',
          label: 'Hora 1',
          subtitle: 'El paradigma de la Celda',
          start: '¿Las matemáticas te dan miedo?',
          dictation: 'Una Hoja de Cálculo es una matriz compuesta por filas horizontales (números) y columnas verticales (letras). La intersección es una Celda.',
          learningResult: 'Comprender la cuadrícula y aplicar formato visual básico.',
          identification: { topic: 'Intro Sheets', evidence: 'Tabla visual', organization: 'Individual', location: 'Laboratorio', time: '50 min' },
          infographicTitle: 'Anatomía Sheets',
          infographicSteps: [
            { title: '1. Filas', desc: 'Horizontales (1,2,3)' },
            { title: '2. Columnas', desc: 'Verticales (A,B,C)' },
            { title: '3. Celda', desc: 'Cruce (Ej. B4)' },
            { title: '4. Formato', desc: 'Color y bordes' }
          ],
          development: 'Crear "Directorio de Favoritos". Solo aplicar formato estético de colores y bordes sin matemáticas.',
          closure: 'Inventario visual entregado.'
        },
        { id: 'H2', label: 'Hora 2', subtitle: 'Operaciones Básicas', start: '¿Por qué Sheet es una calculadora?', dictation: 'Cualquier operación en Sheets debe comenzar con el signo igual (=). Si no se coloca, se tratará como simple texto.', learningResult: 'Ejecutar sumas, restas y multiplicaciones.', identification: { topic: 'Fórmulas', evidence: 'Archivo', organization: 'Individual', location: 'Laboratorio', time: '50 min' }, infographicTitle: 'Sintaxis', infographicSteps: [{title:'1. Signo Igual',desc:'Inicia fórmula ='}, {title:'2. Celda 1',desc:'Ej. A1'}, {title:'3. Operador',desc:'+, -, *, /'}, {title:'4. Celda 2',desc:'Ej. B1 y Enter'}], development: 'Ejercicios rápidos de operaciones básicas vinculando celdas.', closure: 'Verificación de cambio de datos.' },
        { id: 'H3', label: 'Hora 3', subtitle: 'La magia de Autocompletar', start: '¿Qué pasa si tienes 1000 filas?', dictation: 'Autocompletar (el cuadro azul en la esquina) es la herramienta más poderosa. Copia lógica matemática a cientos de celdas en segundos.', learningResult: 'Dominar la función de arrastre.', identification: { topic: 'Autofill', evidence: 'Práctica', organization: 'Individual', location: 'Laboratorio', time: '50 min' }, infographicTitle: 'Autocompletar', infographicSteps: [{title:'1. Fórmula',desc:'Crea la primera'}, {title:'2. Selección',desc:'Clic celda'}, {title:'3. Esquina',desc:'Apunta al cuadrito'}, {title:'4. Arrastre',desc:'Jala hacia abajo'}], development: 'Aplicar fórmula a lista de 50 artículos arrastrando el cursor.', closure: 'Lista completada rápido.' },
        { id: 'H4', label: 'Hora 4', subtitle: 'El Creador de Tablas', start: '¿Cómo anclar una celda?', dictation: 'Una "Referencia Absoluta" fija una celda usando el símbolo de dólar ($A$1). Evita que la fórmula se mueva al autocompletar.', learningResult: 'Diseñar un creador de tablas dinámico.', identification: { topic: 'Ref. Absolutas', evidence: 'Creador Tablas', organization: 'Individual', location: 'Laboratorio', time: '50 min' }, infographicTitle: 'Uso del Dólar $', infographicSteps: [{title:'1. Maestra',desc:'Celda clave A1'}, {title:'2. Secuencia',desc:'Números 1 al 10'}, {title:'3. Fijar',desc:'Fórmula =$A$1*B1'}, {title:'4. Arrastrar',desc:'Completa la tabla'}], development: 'Diseñar el Creador. Al cambiar el número maestro a 15, toda la tabla debe actualizarse sola.', closure: 'Tabla dinámica funcionando.' },
        { id: 'H5', label: 'Hora 5', subtitle: 'Cierre Semana 04', start: '¿Listo para los datos?', dictation: 'Las hojas de cálculo son el motor administrativo. Entender la diferencia entre referencia relativa y absoluta es clave.', learningResult: 'Entregar la práctica integradora.', identification: { topic: 'Entregables W04', evidence: 'Classroom', organization: 'Individual', location: 'Aula', time: '50 min' }, infographicTitle: 'Checklist W04', infographicSteps: [{title:'1. Inventario',desc:'Con formato'}, {title:'2. Operaciones',desc:'Uso del ='}, {title:'3. Tablas',desc:'Fijadas con $'}, {title:'4. Enlace',desc:'Lector Público'}], development: 'Revisión final probando "Creadores de Tablas" de alumnos al azar.', closure: 'Sello de cierre de semana.' }
      ]
    }
  }
};
