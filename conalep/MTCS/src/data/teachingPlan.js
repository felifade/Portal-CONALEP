export const teachingPlan = {
  module: {
    code: 'MTCS-20',
    subject: 'Manejo de Tecnologias de Ciberseguridad',
    group: '501',
    campus: 'CONALEP Pachuca II',
    teacher: 'Dr. Felipe Lopez Salazar',
    classroomCode: 'j6bnku3j',
    semester: '1.26.27',
  },
  cortes: [
    {
      id: 'C1',
      label: 'Primer corte',
      weight: '30%',
      weeks: 6,
      dates: '10 Ago - 18 Sep',
      captureDates: '21 al 22 Sep 2026',
      deadline: '22 Sep 2026',
      ras: [
        {
          id: 'RA 1.1',
          title: 'Conexiones de red',
          weight: '15%',
          weeks: 4,
          description: 'Identifica conceptos, dispositivos y configuraciones basicas de red.',
          weekIds: ['W00', 'W01', 'W02', 'W03'],
        },
        {
          id: 'RA 1.2',
          title: 'Direccionamiento y enrutamiento',
          weight: '15%',
          weeks: 2,
          description: 'Reconoce direccionamiento IP, rutas y pruebas basicas de conectividad.',
          weekIds: ['W04', 'W05'],
        },
      ],
    },
    {
      id: 'C2',
      label: 'Segundo corte',
      weight: '35%',
      weeks: 8,
      dates: '21 Sep - 04 Nov',
      captureDates: '03 al 04 Nov 2026',
      deadline: '04 Nov 2026',
      ras: [
        {
          id: 'RA 2.1',
          title: 'Fundamentos y principios de ciberseguridad',
          weight: '20%',
          weeks: 3,
          description: 'Relaciona amenazas, vulnerabilidades y medidas de proteccion.',
          weekIds: ['W06', 'W07', 'W08'],
        },
        {
          id: 'RA 2.2',
          title: 'Protocolos y confidencialidad',
          weight: '15%',
          weeks: 3,
          description: 'Distingue protocolos seguros y criterios de confidencialidad.',
          weekIds: ['W09', 'W10', 'W11'],
        },
      ],
    },
    {
      id: 'C3',
      label: 'Tercer corte',
      weight: '35%',
      weeks: 8,
      dates: '02 Nov - 11 Dic',
      captureDates: '10 al 11 Dic 2026',
      deadline: '11 Dic 2026',
      ras: [
        {
          id: 'RA 3.1',
          title: 'Fundamentos y optimizacion',
          weight: '20%',
          weeks: 4,
          description: 'Proyecto Videojuegos: Arte pixel-art, mecánicas y físicas de plataformas en Construct 3.',
          weekIds: ['W12', 'W13', 'W14', 'W15'],
        },
        {
          id: 'RA 3.2',
          title: 'Estructuras de control',
          weight: '15%',
          weeks: 4,
          description: 'Proyecto Videojuegos: Lógica algorítmica, variables de ciberseguridad, HUD y exportación web.',
          weekIds: ['W16', 'W17', 'W18', 'W19'],
        },
      ],
    },
  ],
  weeks: [
    {
      id: 'W00',
      label: 'Semana 00',
      dateRange: '10 - 14 Ago',
      status: 'Histórico',
      corteId: 'C1',
      raId: 'RA 1.1',
      title: 'Diagnostico e Induccion al Modulo',
      result: 'Reconoce los propositos formativos de ciberseguridad y evalua saberes previos de conectividad.',
      htmlUrl: './html/W00.html',
      identification: {
        place: 'Aula 05 / Laboratorio',
        modality: 'Evaluacion diagnostica individual',
        product: 'Prueba diagnostica y encuadre firmado',
      },
      notices: [
        'Presentacion del programa de estudios MTCS-20.',
        'Reglamento del laboratorio y criterios de evaluacion.',
      ],
      hours: [
        {
          id: 'H01',
          label: 'Hora 1',
          title: 'Bienvenida y propositos de la ciberseguridad',
          start: 'Pregunta detonadora: ¿Que informacion personal dejamos en internet cada dia sin darnos cuenta?',
          dictation: 'La ciberseguridad es la disciplina encargada de proteger sistemas, redes, dispositivos y datos contra accesos no autorizados, ataques digitales o robo de identidad.',
          learningResult: 'El estudiante reconoce el valor de proteger activos digitales personales y escolares.',
          identification: 'Tema: Conceptos fundamentales. Evidencia: notas de encuadre en libreta.',
          infographicTitle: 'Los 3 Pilares CIA de la Seguridad',
          infographicSteps: [
            'Confidencialidad: solo personal autorizado lee los datos.',
            'Integridad: los datos no son alterados ni borrados.',
            'Disponibilidad: los sistemas funcionan cuando se necesitan.',
            'Autenticacion: validar que eres quien dices ser.',
          ],
          development: 'Explicacion del mapa curricular del semestre, evaluacion diagnostica y conformacion de las carpetas de trabajo.',
          closure: 'Registro en libreta de los 3 pilares CIA y firma del encuadre.',
        },
        {
          id: 'H02',
          label: 'Hora 2',
          title: 'Evaluacion diagnostica de redes',
          start: 'Identificar que dispositivos de red conocen los estudiantes en su entorno domestico y escolar.',
          dictation: 'Un activo critico es cualquier elemento de hardware, software o informacion que posea valor estrategico y cuya perdida afecte las operaciones de una organizacion.',
          learningResult: 'El estudiante identifica vulnerabilidades comunes en dispositivos domesticos.',
          identification: 'Tema: Evaluacion diagnostica. Evidencia: cuestionario en Classroom.',
          infographicTitle: 'Cadena de Vulnerabilidad',
          infographicSteps: [
            'Usuario: contrasenas debiles o compartidas.',
            'Dispositivo: software sin parches de seguridad.',
            'Red Wi-Fi: transmisiones sin cifrado fuerte.',
            'Servidor: exposicion innecesaria en internet.',
          ],
          development: 'Resolucion del cuestionario diagnostico en Google Classroom j6bnku3j y puesta en comun.',
          closure: 'Retroalimentacion grupal sobre los conceptos de mayor dificultad detectados.',
        },
        {
          id: 'H03',
          label: 'Hora 3',
          title: 'Riesgos digitales y huella en linea',
          start: 'Analisis de casos reales de filtracion de datos en redes sociales.',
          dictation: 'La ingenieria social aprovecha la confianza y el descuido humano para obtener acceso a informacion confidencial sin necesidad de vulnerar software complejo.',
          learningResult: 'El estudiante distingue ataques tecnicos de manipulaciones de ingenieria social.',
          identification: 'Tema: Amenazas digitales. Evidencia: analisis de caso en libreta.',
          infographicTitle: 'Ciclo de la Ingenieria Social',
          infographicSteps: [
            'Recoleccion: busqueda de datos publicos de la victima.',
            'Contacto: suplantacion de identidad de confianza.',
            'Engano: solicitud urgente de clave o codigo.',
            'Ejecucion: acceso indebido y toma de control.',
          ],
          development: 'Revision de tecnicas de phishing y analisis de capturas de correos y mensajes fraudulentos.',
          closure: 'Redaccion de un decálogo de prevencion de fraude en libreta.',
        },
        {
          id: 'H04',
          label: 'Hora 4',
          title: 'Higiene digital: Contrasenas y 2FA',
          start: '¿Cuanto tarda una computadora en descifrar una contrasena de 6 letras comparada con una de 12 caracteres?',
          dictation: 'La autenticacion de dos factores (2FA) combina algo que el usuario sabe (contrasena) con algo que tiene (telefono o llave de seguridad) para evitar accesos no autorizados.',
          learningResult: 'El estudiante disena contrasenas robustas y configura metodos de doble factor.',
          identification: 'Tema: Autenticacion robusta. Evidencia: guia de seguridad personal.',
          infographicTitle: 'Nivel de Robustez de Acceso',
          infographicSteps: [
            'Longitud: minimo 12 a 16 caracteres.',
            'Variedad: mayusculas, minusculas, numeros y simbolos.',
            'Unicidad: nunca repetir contrasenas entre cuentas.',
            'Doble factor: activar verificacion por app autenticadora.',
          ],
          development: 'Demostracion de entropia de contrasenas y simulacion de ataques de fuerza bruta con diccionarios.',
          closure: 'Verificacion y actualizacion de seguridad de la cuenta de Google individual.',
        },
        {
          id: 'H05',
          label: 'Hora 5',
          title: 'Cierre del encuadre y organizacion de trabajo',
          start: 'Revision de las herramientas que usaremos durante el semestre: Docs, Classroom y simuladores.',
          dictation: 'El laboratorio de ciberseguridad exige disciplina operativa: uso exclusivo de la cuenta asignada, no instalar software sin autorizacion y respaldar cada sesion.',
          learningResult: 'El estudiante organiza su espacio de trabajo digital y asume compromisos de clase.',
          identification: 'Tema: Organizacion operativa. Evidencia: carpeta compartida en Drive.',
          infographicTitle: 'Flujo de Trabajo del Semestre',
          infographicSteps: [
            'Classroom j6bnku3j: recepcion y entrega de actividades.',
            'Google Docs: estructuracion de documentos con indice.',
            'Libreta fisica: dictados, esquemas y sellos anti-copia.',
            'Consola y red: practicas guiadas de diagnostico.',
          ],
          development: 'Creacion de la estructura de carpetas en Google Drive y enlace con Google Classroom.',
          closure: 'Sello del docente en libreta y entrega de la primera evidencia de organizacion.',
        },
      ],
    },
    {
      id: 'W01',
      label: 'Semana 01',
      dateRange: '17 - 21 Ago',
      status: 'Histórico',
      corteId: 'C1',
      raId: 'RA 1.1',
      title: 'Fundamentos de Redes y Riesgos Digitales',
      result: 'Reconoce la estructura de una red de datos, los componentes basicos y su relacion con los resultados de aprendizaje.',
      htmlUrl: './html/W01.html',
      identification: {
        place: 'Laboratorio de Computo',
        modality: 'Trabajo en parejas con entrega individual',
        product: 'Documento en Google Docs con tabla curricular e imagenes',
      },
      notices: [
        'Uso obligatorio de la misma cuenta de Google/Drive en Classroom.',
        'Entrega del documento con portada formal y tabla curricular.',
      ],
      hours: [
        {
          id: 'H01',
          label: 'Hora 1',
          title: 'Mapa curricular y arquitectura del modulo',
          start: '¿Que diferencia existe entre navegar en internet y entender la red que hace posible esa navegacion?',
          dictation: 'La ciberseguridad no comienza programando ni configurando cortafuegos, sino comprendiendo la arquitectura de las redes y la importancia de proteger la informacion que viaja por ellas.',
          learningResult: 'El estudiante explica la relacion entre arquitectura de red y prevencion de riesgos.',
          identification: 'Tema: Introduccion a redes. Evidencia: mapa curricular en libreta.',
          infographicTitle: 'Ruta Formativa del Modulo MTCS',
          infographicSteps: [
            'Unidad 1: Conceptos, dispositivos y direccionamiento IP.',
            'Unidad 2: Amenazas, protocolos seguros y confidencialidad.',
            'Unidad 3: Diagnostico, comandos y controles tecnicos.',
            'Proyecto: Auditoria integral de una red local.',
          ],
          development: 'Explicacion detallada del mapa de resultados de aprendizaje (RA 1.1 a RA 3.2) y su ponderacion.',
          closure: 'Registro manuscrito en libreta del mapa formativo y dictado de apertura.',
        },
        {
          id: 'H02',
          label: 'Hora 2',
          title: 'Configuracion de Classroom y Documento Base',
          start: 'Ingreso al laboratorio y conexion a Classroom con codigo j6bnku3j.',
          dictation: 'Un documento formal de ciberseguridad debe contener portada institucional, numeracion automatica, encabezados jerarquicos y una estructura clara de evidencias.',
          learningResult: 'El estudiante estructura un documento formal en Google Docs para el modulo.',
          identification: 'Tema: Documentacion tecnica. Evidencia: portada y formato en Docs.',
          infographicTitle: 'Estructura Formal del Documento',
          infographicSteps: [
            'Portada: datos institucionales, modulo, grupo y alumno.',
            'Indice automatico: tabla de contenido vinculada a estilos.',
            'Cuerpo de trabajo: secciones por hora de clase.',
            'Evidencias: capturas legibles y reflexiones manuscritas.',
          ],
          development: 'Creacion del documento en Google Docs, configuracion de margenes, tipografia y portada oficial.',
          closure: 'Verificacion de acceso a Classroom y guardado en la nube.',
        },
        {
          id: 'H03',
          label: 'Hora 3',
          title: 'Tabla Curricular de Resultados de Aprendizaje',
          start: 'Relacionar cada RA del programa con una situacion cotidiana de proteccion de datos.',
          dictation: 'Cada resultado de aprendizaje representa una competencia tecnica que combina saberes teoricos, habilidades practicas y actitudes profesionales frente al manejo de datos.',
          learningResult: 'El estudiante ejemplifica los 5 RAs del modulo con casos practicos e imagenes.',
          identification: 'Tema: Resultados de aprendizaje. Evidencia: tabla de 3 columnas en Docs.',
          infographicTitle: 'Matriz de Aprendizaje por RAs',
          infographicSteps: [
            'RA 1.1: Conexiones de red optimas y cableado.',
            'RA 1.2: Direccionamiento IP y tablas de enrutamiento.',
            'RA 2.1: Principios de confidencialidad y privacidad.',
            'RA 2.2: Protocolos seguros de mitigacion y alertas.',
          ],
          development: 'Construccion en Google Docs de una tabla de 3 columnas (RA, Ejemplo cotidiano, Imagen representativa).',
          closure: 'Revision del avance de la tabla y retroalimentacion sobre las imagenes seleccionadas.',
        },
        {
          id: 'H04',
          label: 'Hora 4',
          title: 'Riesgos en redes locales: Malware y Phishing',
          start: '¿Como entra un virus a una red escolar si nadie descargo archivos ejecutables sospechosos?',
          dictation: 'El malware en redes modernas utiliza tecnicas de propagacion lateral, aprovechando puertos abiertos y computadoras desactualizadas para infectar otros nodos.',
          learningResult: 'El estudiante clasifica los principales vectores de ataque en redes locales.',
          identification: 'Tema: Vectores de ataque. Evidencia: mapa conceptual en Docs.',
          infographicTitle: 'Vectores de Infeccion en Red',
          infographicSteps: [
            'Descarga directa: archivos adjuntos y sitios no confiables.',
            'Medios extraibles: memorias USB infectadas.',
            'Vulnerabilidades: puertos y protocolos obsoletos sin parche.',
            'Movimiento lateral: salto entre maquinas de la misma LAN.',
          ],
          development: 'Analisis guiado de tipos de malware (troyanos, ransomware, gusanos) y metodos de deteccion.',
          closure: 'Registro de tres medidas preventivas para computadoras en red escolar.',
        },
        {
          id: 'H05',
          label: 'Hora 5',
          title: 'Consolidacion de evidencias y cierre de semana',
          start: 'Revision de formato, ortografia y entrega formal en Google Classroom.',
          dictation: 'La entrega puntual y estructurada de informes tecnicos es un habito profesional basico del analista de sistemas y ciberseguridad.',
          learningResult: 'El estudiante concluye y entrega su reporte de Semana 01 en Classroom.',
          identification: 'Tema: Evaluacion formativa. Evidencia: documento entregado y libreta sellada.',
          infographicTitle: 'Checklist de Entrega Semana 01',
          infographicSteps: [
            'Portada completa y revisada.',
            'Tabla curricular con los 5 RAs ejemplificados.',
            'Imagenes pertinentes insertadas en la tabla.',
            'Apuntes de libreta mostrados para firma docente.',
          ],
          development: 'Verificacion final en pares del documento y envio en Google Classroom j6bnku3j.',
          closure: 'Sellado de libretas y registro de cumplimiento en lista de cotejo docente.',
        },
      ],
    },
    {
      id: 'W02',
      label: 'Semana 02',
      dateRange: '24 - 28 Ago',
      status: 'Histórico',
      corteId: 'C1',
      raId: 'RA 1.1',
      title: 'Redes Basicas: Topologias, Dispositivos y Medios',
      result: 'Identifica los tipos de red (PAN, LAN, WAN), dispositivos clave (Hub, Switch, Router) y medios fisicos de transmision.',
      htmlUrl: './html/W02.html',
      identification: {
        place: 'Laboratorio de Computo',
        modality: 'Trabajo colaborativo con reporte individual',
        product: 'Documento en Docs con comparativas visuales, infografia y mapa de red',
      },
      notices: [
        'Elaboracion de indices automaticos formales en Google Docs.',
        'Reposicion de sesion documentada en oficio oficial.',
      ],
      hours: [
        {
          id: 'H01',
          label: 'Hora 1',
          title: 'Tipos de redes por alcance: PAN, LAN y WAN',
          start: 'Pregunta guia: ¿Que redes usamos todos los dias en la escuela y en casa sin darnos cuenta?',
          dictation: 'Una red de datos es un conjunto de dispositivos conectados que pueden compartir informacion, recursos o servicios. No se puede proteger lo que no se conoce; por eso, mapear una red es el primer paso.',
          learningResult: 'El estudiante diferencia redes PAN, LAN y WAN indicando alcance y riesgos.',
          identification: 'Tema: Tipos de redes. Evidencia: mapa mental en Docs.',
          infographicTitle: 'Escalas de Cobertura de Red',
          infographicSteps: [
            'PAN: metros personales (Bluetooth celular-audifonos).',
            'LAN: edificio o laboratorio (cableado y Wi-Fi escolar).',
            'MAN: interconexion de campus en una misma ciudad.',
            'WAN: alcance mundial e interconexion global (Internet).',
          ],
          development: 'Elaboracion de un mapa mental en Google Docs clasificando PAN, LAN y WAN con ejemplos cotidianos.',
          closure: 'Registro manuscrito en libreta del dictado y preguntas reflexivas.',
        },
        {
          id: 'H02',
          label: 'Hora 2',
          title: 'Dispositivos de conexion: Hub vs Switch',
          start: 'Analogia: ¿Que diferencia hay entre gritar un mensaje a todo el salon o entregarlo en secreto al destinatario?',
          dictation: 'Un Hub repite los paquetes a todos sus puertos provocando colisiones e inseguridad. Un Switch aprende las direcciones MAC y entrega los datos exclusivamente al puerto del destinatario.',
          learningResult: 'El estudiante explica la diferencia tecnica y de seguridad entre Hub y Switch.',
          identification: 'Tema: Hardware de conmutacion. Evidencia: cuadro comparativo.',
          infographicTitle: 'Hub vs Switch: Flujo de Paquetes',
          infographicSteps: [
            'Hub (Inseguro): difunde a todos los puertos a la vez.',
            'Switch (Seguro): inspecciona la MAC destino.',
            'Tabla MAC: asocia puerto fisico con direccion de tarjeta.',
            'Seguridad: previene espionaje pasivo en la red local.',
          ],
          development: 'Creacion de un cuadro comparativo analizando colisiones, rendimiento y vulnerabilidad de sniffing.',
          closure: 'Pregunta analitica en libreta: ¿Por que no se deben usar hubs en entornos que manejen datos confidenciales?',
        },
        {
          id: 'H03',
          label: 'Hora 3',
          title: 'El Router y la puerta hacia el exterior',
          start: '¿Como sabe un paquete de datos del laboratorio como salir de Pachuca y llegar al servidor de Google?',
          dictation: 'El router es el dispositivo de Capa 3 que interconecta redes distintas, determina la mejor ruta para los paquetes y traduce direcciones privadas a publicas mediante NAT.',
          learningResult: 'El estudiante identifica el rol del router como enlace entre la LAN e internet.',
          identification: 'Tema: Enrutamiento basico. Evidencia: diagrama de bloques.',
          infographicTitle: 'Camino de un Paquete hacia Internet',
          infographicSteps: [
            'PC Local: genera el paquete con IP origen y destino.',
            'Switch: conmuta el paquete hasta la puerta de enlace.',
            'Router: traduce la IP con NAT y enruta a la WAN.',
            'Internet: viaja por fibra y nodos hasta el servidor web.',
          ],
          development: 'Diagramacion del flujo de conexion: Computadora ➔ Switch ➔ Router ➔ Proveedor ISP ➔ Internet.',
          closure: 'Explicacion breve en libreta de que es una Puerta de Enlace (Default Gateway).',
        },
        {
          id: 'H04',
          label: 'Hora 4',
          title: 'Medios de transmision: UTP, Fibra Optica y Wi-Fi',
          start: '¿Por que el internet por cable suele ser mas estable y seguro que el Wi-Fi en un examen escolar?',
          dictation: 'Los medios guiados como el cable de par trenzado (UTP) y la fibra optica ofrecen mayor velocidad e inmunidad a interferencias, mientras que el Wi-Fi ofrece movilidad pero mayor exposicion a ataques.',
          learningResult: 'El estudiante compara caracteristicas fisicas, velocidad y seguridad de los medios de red.',
          identification: 'Tema: Medios de transmision. Evidencia: infografia digital.',
          infographicTitle: 'Comparativa de Medios de Transmision',
          infographicSteps: [
            'UTP Cat6: cobre, hasta 100m, sensible a ruido electromagnetico.',
            'Fibra Optica: pulsos de luz, kilometros, maxima velocidad.',
            'Wi-Fi 6: ondas de radio, flexible, requiere cifrado WPA3.',
            'Riesgo: el medio inalambrico puede ser interceptado a distancia.',
          ],
          development: 'Diseno de una infografia digital en Google Docs sobre ventajas, limites y riesgos de cada medio.',
          closure: 'Anotacion en libreta: ¿Que medio fisico conviene mas para el servidor principal de una empresa y por que?',
        },
        {
          id: 'H05',
          label: 'Hora 5',
          title: 'Mapeo de red basica y puntos criticos de seguridad',
          start: 'Observacion del laboratorio de computo: identificar fisicamente el switch, los cables canalizados y el router.',
          dictation: 'El mapa de topologia representa la distribucion fisica y logica de los nodos de red. Permite identificar cuellos de botella y ubicar los puntos criticos donde deben colocarse cortafuegos.',
          learningResult: 'El estudiante dibuja el mapa de red del laboratorio e identifica el punto critico de proteccion.',
          identification: 'Tema: Topologia de red. Evidencia: mapa de red con punto critico.',
          infographicTitle: 'Topologia Estrella del Laboratorio',
          infographicSteps: [
            '50 Equipos de computo conectados por cable UTP.',
            'Switch central en el rack de comunicaciones.',
            'Enlace troncal hacia el Router / Firewall del plantel.',
            'Punto critico: el enlace unico de salida hacia internet.',
          ],
          development: 'Elaboracion del mapa de red del laboratorio en Docs, creacion del Indice Automatico y entrega en Classroom.',
          closure: 'Sellado de libretas con la conclusion del mapa y comprobacion de entrega en Classroom.',
        },
      ],
    },
    {
      id: 'W03',
      label: 'Semana 03',
      dateRange: '31 Ago - 04 Sep',
      status: 'Realizada',
      corteId: 'C1',
      raId: 'RA 1.1',
      title: 'Modelo OSI y Protocolos de Comunicacion',
      result: 'Distingue las 7 capas del Modelo OSI y la diferencia practica entre TCP y UDP mediante ejemplos e inspeccion en navegador.',
      htmlUrl: './html/W03.html',
      identification: {
        place: 'Laboratorio de Computo',
        modality: 'Trabajo individual con apoyo en parejas',
        product: 'Apunte por hora en libreta y evidencia digital en Google Docs',
      },
      notices: [
        'Classroom: j6bnku3j. Usar siempre la misma cuenta de Drive.',
        'Desfile 16 de septiembre: 8:00 a.m., uniforme de gala, Monumento de los Ninos Heroes.',
        'Cooperacion Teleton pendiente.',
        'Forrado de butacas con hule.',
      ],
      hours: [
        {
          id: 'H01',
          label: 'Hora 1',
          title: 'Modelo OSI con palabras cotidianas',
          start: 'Preguntar que pasa cuando mandan un mensaje por WhatsApp antes de que llegue al otro telefono.',
          dictation: 'El Modelo OSI divide la comunicacion de red en siete capas. Sirve para entender como viaja la informacion desde una aplicacion hasta el cable, el Wi-Fi o internet, y como regresa al dispositivo que la recibe.',
          learningResult: 'El estudiante explica para que sirve el Modelo OSI y relaciona al menos tres capas con ejemplos de uso diario.',
          identification: 'Tema: Modelo OSI. Evidencia: apunte en libreta e inspeccion F12 en Docs.',
          infographicTitle: 'El viaje de un mensaje en la red',
          infographicImage: 'mtcs-modelo-osi-paquete-digital.jpg',
          infographicSteps: [
            'Aplicacion (Capa 7): escribo y envio el mensaje en la app.',
            'Transporte (Capa 4): se divide en paquetes y verifica entrega.',
            'Red (Capa 3): se asigna la IP y se decide por donde viaja.',
            'Fisica (Capa 1): viaja como senales por Wi-Fi, cable o antenas.',
          ],
          development: 'Explicar las siete capas con la analogia del envio de una carta postal. Despues observar en vivo en DevTools (F12) de neal.fun los encabezados HTTP, TLS, IP del servidor y bytes transferidos.',
          closure: 'En la libreta dibujan la piramide OSI de 7 capas y responden por que cortar un cable es Capa 1 y robar contrasenas ocurre en Capa 7.',
        },
        {
          id: 'H02',
          label: 'Hora 2',
          title: 'TCP y UDP en la vida diaria',
          start: 'Comparar una llamada, un video en vivo, un videojuego y una descarga para reconocer cuando importa mas la rapidez o la seguridad de llegada.',
          dictation: 'TCP prioriza que la informacion llegue completa y en orden. UDP prioriza la rapidez, aunque pueda perderse una parte. Ambos se usan segun lo que necesite la comunicacion.',
          learningResult: 'El estudiante diferencia TCP y UDP usando ejemplos cotidianos y justifica cual conviene en distintos casos.',
          identification: 'Tema: Protocolos de transporte. Evidencia: telemetria en packetlosstest.com y Kahoot.',
          infographicTitle: 'Rapidez vs Confirmacion',
          infographicImage: 'mtcs-protocolos-transporte-tcp-udp.jpg',
          infographicSteps: [
            'TCP (Garantizado): confirma cada paquete recibido.',
            'TCP (Ordenado): reordena paquetes y reenvia perdidos.',
            'UDP (Rapido): dispara datos en tiempo real sin espera.',
            'UDP (Tolerante): tolera pequenas perdidas para evitar lag.',
          ],
          development: 'Construir una comparacion con casos reales: navegacion web, transferencias bancarias, videollamadas, streaming y videojuegos. Realizar prueba de telemetria en packetlosstest.com.',
          closure: 'Kahoot de cierre de las Horas 1 y 2, y registro en libreta de dos ejemplos de TCP y dos de UDP con justificacion.',
        },
        {
          id: 'H03',
          label: 'Hora 3',
          title: 'MAC, OUI y NIC (Direccion Fisica)',
          start: 'Ubicar que cada dispositivo necesita una identidad fisica inmutable para participar en la red.',
          dictation: 'La direccion MAC es el identificador fisico de 48 bits grabado de fabrica en la tarjeta de red. Los primeros 6 caracteres (OUI) identifican al fabricante y los ultimos 6 son el numero de serie del chip.',
          learningResult: 'El estudiante reconoce la funcion de MAC, OUI y NIC en la identificacion fisica de dispositivos.',
          identification: 'Tema en continuidad hacia Semana 04. Evidencia: ficha forense con getmac y macvendors.com.',
          infographicTitle: 'Anatomia de la Direccion MAC',
          infographicSteps: [
            '48 Bits: representados en 12 digitos hexadecimales.',
            'OUI (Primeros 6 digitos): fabricante asignado por IEEE.',
            'NIC (Ultimos 6 digitos): identificador unico del chip.',
            'MAC Spoofing: riesgo de clonacion por atacantes.',
          ],
          development: 'Ejecutar getmac en la consola CMD para obtener la MAC de la PC del laboratorio y consultar en macvendors.com el fabricante real del hardware.',
          closure: 'Ficha individual en libreta con datos del equipo y reflexion sobre por que el filtrado MAC no es suficiente seguridad.',
        },
        {
          id: 'H04',
          label: 'Hora 4',
          title: 'IP privada, IP publica y NAT (Capa de Red)',
          start: 'Comparar el domicilio interno de una casa con la direccion visible hacia la calle.',
          dictation: 'La IP privada identifica equipos dentro de una red local. La IP publica representa la salida hacia internet. NAT permite que varios equipos compartan una sola salida publica.',
          learningResult: 'El estudiante distingue IP privada, IP publica y NAT en una red escolar o domestica.',
          identification: 'Tema en continuidad hacia Semana 04. Evidencia: mapa de geolocalizacion en iplocation.io.',
          infographicTitle: 'De la Escuela a Internet: Traduccion NAT',
          infographicSteps: [
            'PC Escolar: tiene IP privada (ej. 192.168.1.X).',
            'Router CONALEP: aplica traduccion NAT a la salida.',
            'IP Publica: direccion unica con la que navega ante el mundo.',
            'Servidor Remoto: recibe la peticion desde la IP publica.',
          ],
          development: 'Identificar la IP privada en consola con ipconfig y entrar a iplocation.io para registrar la IP publica del plantel y ubicar satelitalmente servidores mundiales.',
          closure: 'Dibujo en libreta del diagrama de flujo PC privada ➔ Router NAT ➔ Internet ➔ Servidor destino.',
        },
        {
          id: 'H05',
          label: 'Hora 5',
          title: 'Comandos basicos de diagnostico en consola',
          start: 'Preguntar como comprobarian si una computadora tiene red, internet o una falla de ruta sin abrir ventanas graficas.',
          dictation: 'Los comandos de red permiten revisar configuracion y probar conectividad. ipconfig muestra datos del equipo, ping prueba respuesta y tracert muestra la ruta hacia un destino.',
          learningResult: 'El estudiante interpreta resultados de ipconfig, ping y tracert en la consola CMD.',
          identification: 'Tema en continuidad hacia Semana 04. Evidencia: reporte corto de pruebas en CMD.',
          infographicTitle: 'Diagnostico Forense en 3 Pasos',
          infographicSteps: [
            'ipconfig /all: verificar IP, mascara, gateway y DNS.',
            'ping 8.8.8.8: probar latencia en ms y perdida de paquetes.',
            'tracert conalep.edu.mx: rastrear los saltos de routers.',
            'Diagnostico: explicar si la conexion es optima o lenta.',
          ],
          development: 'Realizar pruebas guiadas en laboratorio ejecutando los tres comandos en CMD y pegando capturas con el usuario visible en Google Docs.',
          closure: 'Conclusion semanal de bitacora en libreta y firma autografa del estudiante.',
        },
      ],
      sessions: [
        {
          id: 'S01',
          label: 'Sesión 01',
          duration: '1 hora',
          title: 'Modelo OSI con analogía cotidiana',
          hourIds: ['H01'],
          product: 'Apunte OSI con analogía y ejemplos por capa.',
        },
        {
          id: 'S02',
          label: 'Sesión 02',
          duration: '1 hora',
          title: 'Protocolos de transporte TCP y UDP',
          hourIds: ['H02'],
          product: 'Comparación TCP/UDP y Kahoot de cierre.',
        },
      ],
    },
    {
      id: 'W04',
      label: 'Semana 04',
      dateRange: '07 - 11 Sep',
      status: 'Histórico',
      corteId: 'C1',
      raId: 'RA 1.2',
      title: 'Diagnóstico de Red: MAC, IP y Consola',
      result: 'Reconoce y calcula direccionamiento IP, subredes, aislamiento y realiza pruebas básicas de conectividad.',
      htmlUrl: './html/W03.html',
      identification: {
        place: 'Laboratorio de Computo',
        modality: 'Trabajo individual con apoyo operativo en parejas',
        product: 'Diagnostico de red en Google Docs y cierre en libreta',
      },
      notices: [
        'Semana de apertura del RA 1.2: Direccionamiento y Enrutamiento (15% del primer corte).',
        'Lunes 07 y Martes 08: sin clases presenciales. El portal y las actividades se activan el Miércoles 09 a las 15:00 hrs.',
        'Preparativos para el desfile del 16 de septiembre.',
      ],
      hours: [
        {
          id: 'H01',
          label: 'Hora 1',
          title: 'Profundizacion en MAC Address y Filtrado',
          start: '¿Como detecta un administrador de red si alguien conecto un celular no autorizado?',
          dictation: 'La direccion MAC es un identificador fisico asociado a la tarjeta de red de cada dispositivo. Funciona dentro de la red local y permite reconocer que equipo intenta comunicarse, aunque todos esten conectados al mismo modem o switch. Se representa mediante pares hexadecimales; los primeros identifican al fabricante mediante el OUI y los ultimos distinguen la interfaz especifica. Por eso ayuda a auditar equipos, pero no debe considerarse una proteccion perfecta, porque puede falsificarse mediante MAC spoofing.',
          learningResult: 'El estudiante evalua la efectividad del filtrado MAC en redes inalambricas.',
          identification: 'Tema: Seguridad en Capa 2. Evidencia: reporte de filtrado.',
          infographicTitle: 'Ruta Forense de Capa 2: MAC Address y Fabricante OUI',
          infographicImage: 'mtcs-ruta-forense-capa-2-mac-oui-spoofing.jpg',
          infographicSteps: [
            '1. Terminal: ejecutar getmac /v en CMD de Windows.',
            '2. Identificar OUI: separar fabricante (3 primeros pares) y tarjeta (3 ultimos).',
            '3. Auditoria web: buscar en macvendors.com fabricante real de la NIC.',
            '4. Evaluacion forense: analizar riesgos de MAC spoofing y registrar reporte.',
          ],
          development: 'Auditoria de direcciones MAC en el laboratorio escolar y analisis de herramientas de monitoreo.',
          closure: 'Anotacion en libreta: ventajas y vulnerabilidades del filtrado de hardware.',
        },
        {
          id: 'H02',
          label: 'Sesión 02 (2 hrs)',
          title: 'Direccionamiento Lógico: Anatomía IP, Cálculo y Segmentación',
          start: '¿Cómo se calculan los límites de una red y cómo evitamos que una máquina de alumnos ataque a los servidores de Dirección?',
          dictation: 'El direccionamiento IP organiza la red dividiendo cada dirección de 32 bits en porción de red y porción de host. La máscara 255.255.255.0 indica que los tres primeros octetos son comunes para todas las máquinas del laboratorio. A partir de esa máscara se obtienen cuatro datos matemáticos vitales: la dirección de red (.0), el primer host útil o gateway (.1), el último host asignable (.254) y la dirección de broadcast (.255). Además, la segmentación mediante la máscara 255.255.255.128 (/25) divide el espacio con un salto de 128, aislando el tráfico entre subredes para que no se comuniquen directamente sin reglas de firewall.',
          learningResult: 'El estudiante calcula los cuatro datos fundamentales de una red IPv4 y resuelve casos forenses de aislamiento lógico por ciberseguridad.',
          identification: 'Tema: Capa 3 y Segmentación. Evidencia: ficha técnica en Docs y diagrama en libreta.',
          infographicTitle: 'Direccionamiento y Práctica en Laboratorio',
          infographicImages: [
            {
              src: 'mtcs-mapa-anatomia-ip-red-hosts-broadcast-subredes.jpg',
              title: '1. Marco Teórico: Mapa de Anatomía IP, Límites y Subredes',
            },
            {
              src: 'mtcs-ruta-practica-laboratorio-ip.jpg',
              title: '2. Ruta de la Práctica: Diagnóstico IP y Aislamiento en Laboratorio',
            },
          ],
          infographicSteps: [
            '1. CMD ipconfig: abrir consola negra y extraer la IP activa y máscara de la estación.',
            '2. Ficha en Docs: calcular matemáticamente ID (.0), Gateway (.1), Host (.254) y Broadcast (.255).',
            '3. Validación Web: comprobar el cálculo en calculator.net con máscara /24 y pegar captura en Docs.',
            '4. Misión y Libreta: resolver caso de aislamiento Alumno vs Servidor y dibujar esquema con sello docente.',
          ],
          development: 'Taller práctico en laboratorio: extracción de IP en consola CMD, cálculo de la ficha técnica de red en Google Docs, validación con la calculadora web de subredes y resolución del reto de ciberseguridad de aislamiento con máscara /25.',
          closure: 'Registro de la tabla técnica en Docs, dibujo del diagrama de dos subredes con candado en libreta y obtención de sello docente.',
        },
        {
          id: 'H03',
          label: 'Sesión 03 (2 hrs)',
          title: 'Diagnóstico en Consola (CMD) y Evaluación de Direccionamiento',
          start: 'Misión hacker ético: diagnosticar el estado completo de red en consola y evaluar saberes con Kahoot.',
          dictation: 'El diagnóstico de red consiste en revisar datos del equipo y hacer pruebas para saber dónde está la falla, sin depender solo del mensaje general de sin internet. ipconfig /all muestra la identidad lógica del equipo, como IP, máscara, gateway y DNS. ping comprueba si otro equipo o servidor responde y cuánto tarda en contestar; tracert muestra los saltos que siguen los datos hasta llegar a su destino, y nslookup ayuda a verificar la resolución de nombres. Con esos resultados se puede argumentar si el problema está en la computadora, en la red local, en DNS o en la salida a internet.',
          learningResult: 'El estudiante ejecuta una auditoría completa de red en consola, consolida su portafolio en Docs y demuestra dominio en el Kahoot.',
          identification: 'Tema: Auditoría en CMD y Evaluación. Evidencia: portafolio en Classroom y libreta sellada.',
          infographicTitle: 'Cómic Educativo y Batería de Pruebas en Consola (CMD)',
          infographicImages: [
            {
              src: 'mtcs-comic-redes-ciberseguridad-semana04.jpg',
              title: 'Cómic Educativo: Misión Auditoría de Red y Kahoot'
            },
            {
              src: 'mtcs-bateria-pruebas-cmd-forense.jpg',
              title: 'Batería de Pruebas Forenses en Consola (CMD)'
            }
          ],
          infographicSteps: [
            '1. ipconfig /all: capturar identidad lógica local, máscara, gateway y servidores DNS en CMD.',
            '2. ping & tracert: medir latencia en ms, pérdida de paquetes y número de saltos hacia servidores centrales.',
            '3. nslookup: consultar y traducir nombres de dominio a direcciones IP públicas.',
            '4. Kahoot Formativo (20 reactivos): resolver desafío en vivo, capturar podio y actualizar índice en Docs.',
          ],
          development: 'Ejecución de la batería de 4 pruebas forenses en CMD (ipconfig /all, ping, tracert, nslookup), competencia gamificada en Kahoot de 20 reactivos sobre direccionamiento/redes y consolidación del índice formal en Docs.',
          closure: 'Sellado final de libretas de la semana, publicación de podio Kahoot y registro de avance en SIGA.',
        },
      ],
      sessions: [
        {
          id: 'S01',
          label: 'Sesión 01',
          duration: '1 hora',
          title: 'Diagnóstico inicial: identidad fisica del equipo',
          hourIds: ['H01'],
          product: 'Ficha MAC/OUI/NIC del equipo asignado con explicacion propia.',
          unlockDate: '2026-09-09',
          unlockLabel: 'Miércoles 09 de Septiembre (15:00 hrs)',
        },
        {
          id: 'S02',
          label: 'Sesión 02',
          duration: '2 horas',
          title: 'Direccionamiento lógico: anatomía IP, cálculo y segmentación',
          hourIds: ['H02'],
          product: 'Ficha técnica de red calculada, comprobación web y resolución de casos forenses.',
          unlockDate: '2026-09-09',
          unlockLabel: 'Miércoles 09 de Septiembre (15:00 hrs)',
        },
        {
          id: 'S03',
          label: 'Sesión 03',
          duration: '2 horas',
          title: 'Diagnóstico completo con CMD y evaluación de direccionamiento',
          hourIds: ['H03'],
          product: 'Reporte de diagnóstico en CMD, participación en Kahoot y portafolio de direccionamiento acreditado.',
          unlockDate: '2026-09-11',
          unlockLabel: 'Viernes 11 de Septiembre (15:00 hrs)',
        },
      ],
    },
    {
      id: 'W05',
      label: 'Semana 05',
      dateRange: '14 - 18 Sep',
      status: 'Realizada',
      corteId: 'C1',
      raId: 'RA 1.2',
      title: 'Fundamentos de Linux y Ciberseguridad',
      result: 'Investiga y comprende los fundamentos técnicos de Linux, sus distribuciones para ciberseguridad, ventajas frente a Windows y arquitectura de máquinas virtuales.',
      htmlUrl: './html/W05.html',
      identification: {
        place: 'Laboratorio de Cómputo / Aula',
        modality: 'Trabajo individual con discusión en parejas',
        product: 'Cuestionario de 10 temas en libreta con sello docente y evaluación Kahoot',
      },
      notices: [
        'Miércoles 16 de septiembre: suspensión oficial de labores por la conmemoración de la Independencia de México.',
        'Actividades concentradas en investigación documental, marco teórico y evaluación formativa gamificada.',
      ],
      hours: [
        {
          id: 'H01',
          label: 'Sesión 01 (2 hrs)',
          title: 'Investigación Documental: Los 10 Ejes de Linux en Ciberseguridad',
          start: 'Durante cuatro semanas diagnosticamos redes en Windows con CMD, pero en los centros de respuesta a incidentes (SOC) y en la nube, más del 90% de los servidores corren en Linux. ¿Por qué un analista de seguridad profesional está obligado a dominar Linux?',
          dictation: 'Hasta la semana pasada trabajamos sobre Windows porque es el entorno gráfico habitual. Sin embargo, en el ejercicio profesional de la ciberseguridad y la administración de servidores, más del 90% de la infraestructura de internet, centros de datos y dispositivos de red operan sobre sistemas Linux. Adoptamos Linux en esta etapa formativa por cuatro razones estratégicas: 1) Control del sistema: al ser de código abierto, permite inspeccionar el kernel, los permisos y las conexiones sin capas visuales que oculten información; 2) Eficiencia y seguridad: la mayoría de los servidores operan en modo "Headless" (sin entorno gráfico), reduciendo memoria desperdiciada y minimizando puertos vulnerables a ataques; 3) Filosofía unificada: en Linux "todo es un archivo" organizado bajo un árbol único que nace de la raíz (/), lo que permite configurar y auditar cualquier servicio mediante texto plano; y 4) Ecosistema nativo: las herramientas de análisis forense, auditoría y monitoreo se desarrollan prioritariamente para terminales Unix/Linux.',
          learningResult: 'El estudiante investiga y argumenta los 10 ejes técnicos de Linux, sus distribuciones de seguridad y arquitectura de archivos.',
          identification: 'Tema: Fundamentos de Linux. Evidencia: cuestionario en libreta sellado.',
          infographicTitle: 'Los 10 Ejes de Linux para Ciberseguridad',
          infographicSteps: [
            '1. Definición técnica: qué es el kernel Linux y su origen con Linus Torvalds en 1991.',
            '2. Distribuciones generales (Debian, Ubuntu, Fedora) y de ciberseguridad (Kali, Parrot, Tails).',
            '3. Ventajas y desventajas frente a Windows: control, modo Headless y curva de aprendizaje.',
            '4. Arquitectura y seguridad: árbol raíz (/), "Todo es un archivo", permisos root y máquinas virtuales.',
          ],
          development: 'Investigación guiada individual y en parejas de las 10 preguntas clave sobre Linux, distribuciones de pentesting, ventajas operativas, filosofía de archivos y herramientas forenses.',
          closure: 'Revisión preliminar del cuestionario en libreta y asignación de temas para el desafío Kahoot.',
        },
        {
          id: 'H02',
          label: 'Sesión 02 (2 hrs)',
          title: 'Plenaria de Resultados y Desafío Formativo Kahoot (20 Reactivos)',
          start: 'Si tuvieras que auditar una red corporativa hoy mismo, ¿qué distribución de Linux elegirías y por qué no intentarías hacerlo desde una computadora común con Windows?',
          dictation: 'En ciberseguridad no existe una sola herramienta mágica; existe una cadena de herramientas especializadas. Para el reconocimiento de redes usamos Nmap; para inspeccionar el tráfico usamos Wireshark y tcpdump; para pruebas de penetración autorizadas recurrimos a Kali Linux o Parrot OS; para navegar sin dejar rastros forenses en la memoria volátil usamos Tails; y para auditar incidentes posteriores a un ataque analizamos la memoria RAM con Volatility. Todo este ecosistema se apoya en el aislamiento seguro mediante Máquinas Virtuales para garantizar que ninguna prueba dañe la estación anfitriona.',
          learningResult: 'El estudiante consolida conocimientos teóricos sobre Linux y demuestra dominio temático en la evaluación interactiva.',
          identification: 'Tema: Síntesis de Linux y Evaluación. Evidencia: libreta sellada y podio Kahoot.',
          infographicTitle: 'Desafío Kahoot: Fundamentos de Linux y Ciberseguridad',
          infographicSteps: [
            '1. Plenaria: discusión de diferencias entre Unix y Linux, y gestión de permisos root/sudo.',
            '2. Evaluación Kahoot: 20 reactivos cubriendo los 10 temas de investigación.',
            '3. Retroalimentación inmediata reactivo por reactivo para aclarar dudas técnicas.',
            '4. Evidencia: captura del podio o puntaje en Google Docs y sello final en libreta.',
          ],
          development: 'Puesta en común de los resultados de investigación, resolución de dudas en plenaria y aplicación del Kahoot de 20 reactivos con retroalimentación grupal.',
          closure: 'Registro de la captura del podio Kahoot en Google Docs y sellado definitivo del cuestionario en libreta.',
        },
      ],
      sessions: [
        {
          id: 'S01',
          label: 'Sesión 01',
          duration: '2 horas',
          title: 'Investigación documental: los 10 ejes de Linux en ciberseguridad',
          hourIds: ['H01'],
          product: 'Cuestionario de 10 temas avanzado en libreta física con análisis propio.',
          unlockDate: '2026-09-17',
          unlockLabel: 'Jueves 17 de Septiembre (15:00 hrs)',
        },
        {
          id: 'S02',
          label: 'Sesión 02',
          duration: '2 horas',
          title: 'Plenaria de resultados y desafío formativo Kahoot',
          hourIds: ['H02'],
          product: 'Cuestionario completo sellado en libreta y captura del podio Kahoot en Google Docs.',
          unlockDate: '2026-09-18',
          unlockLabel: 'Viernes 18 de Septiembre (15:00 hrs)',
        },
      ],
    },
    {
      id: 'W06',
      label: 'Semana 06',
      dateRange: '21 - 25 Sep',
      status: 'Completada',
      defaultWeek: false,
      corteId: 'C2',
      raId: 'RA 2.1',
      title: 'Misión Cloud Recon: Auditoría y Terminal Linux',
      result: 'Audita entornos virtuales en la nube (Google Cloud Shell), reconoce hardware, estructura de directorios y manipula archivos mediante la consola de comandos.',
      htmlUrl: './html/W06.html',
      pdfUrl: './docs/Operacion_Servidor_Fantasma_Lectura_Oficial_MTCS.pdf',
      pdfTitle: 'El Asalto Invisible: El Hackeo Silencioso a Tesla (MTCS-20)',
      readingCase: {
        title: 'El Asalto Invisible: El Hackeo Silencioso a Tesla',
        kicker: '🕵️‍♂️ CRÓNICA DE CIBERSEGURIDAD · CASO FORENSE EN 1 CUARTILLA',
        badge: 'Segundo Corte (35%) · RA 2.1',
        synopsis: 'Una consola de Kubernetes expuesta a Internet sin contraseña permitió a atacantes secuestrar los procesadores Intel Xeon de Tesla en AWS. Sin borrar archivos ni pedir rescate, convirtieron la infraestructura en una mina de Monero al 100% de CPU. El equipo Blue Team debió operar en modo Headless mediante comandos Bash para auditar la intrusión antes de que la factura de la nube se saliera de control.',
        pdfUrl: './docs/Operacion_Servidor_Fantasma_Lectura_Oficial_MTCS.pdf',
        actsCount: 5,
        typeLabel: 'Crónica Pericial de 1 Cuartilla',
        rolesTitle: 'Ejes Clave del Incidente Forense',
        rolesIcon: '🛡️',
        stagesTitle: 'Estructura del Estudio de Caso (5 Momentos)',
        timeEstimate: '15 - 20 minutos (Lectura ágil y análisis en aula)',
        roles: [
          { role: '⚡ La Brecha Abierta', desc: 'Consola Kubernetes expuesta a Internet sin contraseña en Amazon Web Services (AWS).' },
          { role: '⚙️ Parasitismo de Silicio', desc: 'Uso no autorizado de procesadores Intel Xeon para minería de criptomonedas (Monero).' },
          { role: '🕵️ Enmascaramiento Web', desc: 'Tráfico de red camuflado detrás de Cloudflare para eludir las listas de bloqueo del cortafuegos.' },
          { role: '🛠️ Auditoría en Consola', desc: 'Inspección forense en modo Headless con whoami, uptime, lscpu, /etc/passwd y curl ifconfig.me.' },
        ],
        stages: [
          { step: '1', badge: 'Parte 1', title: 'El Robo que Nadie Vio Venir', desc: 'Intrusión sin extorsión: sin pantallas de rescate ni archivos borrados para no alertar al personal.' },
          { step: '2', badge: 'Parte 2', title: 'La Puerta Abierta y el Parásito', desc: 'Acceso por consola Kubernetes desprotegida y despliegue de scripts de Cryptojacking (Monero).' },
          { step: '3', badge: 'Parte 3', title: 'Servidores con Fiebre sin Síntomas', desc: 'Modo Headless sin interfaz gráfica; detección mediante la factura eléctrica y de cómputo en la nube.' },
          { step: '4', badge: 'Parte 4', title: 'Contraataque Pericial del Blue Team', desc: 'Batería de comandos Linux: UID 1000, Load Average > 4.0, silicio Xeon, nologin y doble IP (NAT).' },
          { step: '5', badge: 'Parte 5', title: 'La Moraleja Pericial', desc: 'En la nube, el silicio y la energía son dinero: una consola sin llave se convierte en cajero automático.' },
        ],
        deliverables: [
          { emoji: '📄', label: 'Crónica Oficial en PDF (1 Cuartilla)', detail: 'Lectura ágil de una sola página con la anatomía del ataque real y comandos forenses.' },
          { emoji: '📊', label: 'Organizador Visual de 3 Columnas', detail: 'Vector de ataque, síntomas técnicos y respuesta forense en libreta física con sello docente.' },
          { emoji: '📝', label: 'Cuestionario de Control (5 Preguntas)', detail: 'Comprobación de lectura y síntesis técnica respondida a mano en libreta de apuntes.' },
          { emoji: '⭐', label: 'Sello Docente de Sesión 01', detail: 'Acreditación formativa requerida para acceder a la práctica en terminal de la Sesión 02.' },
        ],
      },
      identification: {
        place: 'Aula de Clase y Laboratorio de Cómputo',
        modality: 'Trabajo individual y lectura colaborativa en parejas',
        product: 'Lectura táctica analizada, organizador visual en libreta con sello y bitácora en Google Cloud Shell',
      },
      notices: [
        'Apertura oficial del Segundo Corte de evaluación (RA 2.1 - 35%).',
        'Miércoles 23 Sep: Estudio del caso Tesla (Cryptojacking en Kubernetes/AWS) y resumen pericial.',
        'Jueves 24 Sep: Laboratorio hands-on en Google Cloud Shell con la Guía Oficial en PDF (Fases 0 a 5).',
        'Viernes 25 Sep (Hoy): Conclusión de bitácora en nano, entrega en Classroom (j6bnku3j) y Desafío Kahoot (20 Reactivos).',
      ],
      hours: [
        {
          id: 'H01',
          label: 'Sesión 01 (Miércoles 23 Sep)',
          title: 'Estudio de Caso Tesla: Cryptojacking en la Nube y Resumen Pericial',
          start: '¿Por qué un ciberdelincuente preferiría secuestrar la potencia de un servidor en la nube para minar criptomonedas silenciosamente en lugar de borrar tus datos o pedir rescate?',
          dictation: 'El Cryptojacking es el uso no autorizado del poder de cómputo de una organización para minar criptomonedas. A diferencia del Ransomware, no destruye información ni altera el funcionamiento aparente, sino que parasita los recursos de procesador y memoria RAM, disparando los costos de infraestructura en la nube. Los servidores empresariales sin interfaz gráfica (modo Headless) se gestionan exclusivamente mediante comandos en la shell de Bash. El análisis pericial defensivo (Blue Team) exige auditar: 1) Identidad y privilegios con whoami e id; 2) Carga de procesamiento con uptime; 3) Arquitectura de hardware con lscpu; 4) Integridad del sistema en /etc/passwd; y 5) Vector de red mediante la correlación entre IP privada interna (hostname -I) y pública (curl ifconfig.me).',
          learningResult: 'El estudiante analiza vectores de ataque en la nube, contrasta amenazas silenciosas y construye un resumen analítico pericial en libreta.',
          identification: 'Tema: Estudio de Caso Cryptojacking en la Nube. Evidencia: Resumen analítico y cuestionario en libreta sellada.',
          infographicTitle: 'Misión Cloud Recon: Auditoría Forense en Google Cloud Shell',
          infographicImage: 'mtcs-auditoria-cloud-recon-semana05.jpg',
          infographicSteps: [
            '1. Vector de Entrada: Consola de Kubernetes expuesta a internet sin contraseña en AWS.',
            '2. Minería Parásita: Procesadores Intel Xeon ejecutando scripts de Monero (XMR) al 100% de CPU.',
            '3. Modo Headless: Servidores sin entorno gráfico detectados por la factura de la nube.',
            '4. Batería Forense Bash: whoami, id (UID 1000), uptime, lscpu y correlación de IP pública.',
          ],
          development: 'Lectura guiada del caso real del hackeo silencioso a Tesla. Elaboración en libreta del resumen analítico pericial y resolución del cuestionario de control de 5 preguntas.',
          closure: 'Revisión grupal y colocación del primer sello docente en libreta.',
        },
        {
          id: 'H02',
          label: 'Sesión 02 (Jueves 24 Sep)',
          title: 'Laboratorio Hands-on: Misión Cloud Recon en Google Cloud Shell (Guía Oficial PDF)',
          start: 'Ayer analizamos la anatomía del incidente de Tesla. Hoy ejecutamos la auditoría en la terminal real de Google Cloud Shell con la Guía Oficial en PDF.',
          dictation: 'Google Cloud Shell proporciona un contenedor efímero con Debian GNU/Linux 12 y 5 GB de almacenamiento persistente en /home. Durante la sesión de laboratorio se ejecutan las 5 fases de reconocimiento: 1) Identidad y privilegios (whoami, id); 2) Carga de silicio (uptime, lscpu, free -h); 3) Inspección del árbol raíz (/etc/os-release, /etc/passwd con shell /usr/sbin/nologin); 4) Red y geolocalización (hostname -I vs curl ifconfig.me en iplocation.io); y 5) Gestión de directorios (mkdir) y edición de bitácora en consola con nano.',
          learningResult: 'El estudiante ejecuta las fases de auditoría forense en Google Cloud Shell, documenta hallazgos y redacta su bitácora en consola.',
          identification: 'Tema: Auditoría en Cloud Shell y Manipulación en Consola. Evidencia: Ficha de laboratorio y avance de bitácora en terminal.',
          infographicTitle: 'Gestión de Archivos en Consola y Guía Oficial de Laboratorio',
          infographicImage: 'mtcs-gestion-archivos-nano-kahoot-semana05.jpg',
          infographicSteps: [
            '1. Conexión y Acceso: shell.cloud.google.com y verificación de Debian GNU/Linux.',
            '2. Auditoría Técnica: Registro de CPU Xeon, memoria RAM disponible y disco persistente.',
            '3. Red y Datacenter: Triangulación de la IP pública y geolocalización con iplocation.io.',
            '4. Inicio de Bitácora: mkdir lab_mtcs y edición de bitacora_semana06.txt en nano.',
          ],
          development: 'Trabajo autónomo y guiado mediante la Guía Oficial de Laboratorio en PDF (Guia_Laboratorio_Cloud_Recon_MTCS_Semana06.pdf). Ejecución de las fases 0 a 5 en la consola de comandos.',
          closure: 'Registro de datos obtenidos en la ficha técnica y resguardo de la sesión en Cloud Shell.',
        },
        {
          id: 'H03',
          label: 'Sesión 03 (Viernes 25 Sep - Hoy)',
          title: 'Cierre de Bitácora, Cómic Pericial de 6 Viñetas y Desafío Gamificado Kahoot',
          start: 'Antes de competir en el Kahoot, ¿cómo podemos ilustrar en 6 cuadros la historia completa del hackeo a Tesla y los comandos que usamos en Cloud Shell?',
          dictation: 'El cierre de la auditoría requiere validar la persistencia del archivo pericial con cat y comprobar la presencia del registro del estudiante utilizando el filtro grep "ALUMNO". Para consolidar los aprendizajes de forma visual y reflexiva, los estudiantes elaboran un cómic técnico de 6 viñetas en su libreta que narra: 1) La brecha en Kubernetes; 2) El silicio Intel Xeon minando Monero; 3) La alarma financiera y el Load Average; 4) La auditoría con whoami e id; 5) El bastionado con /usr/sbin/nologin; y 6) El podio final de Kahoot. La evaluación formativa concluye con el desafío interactivo de 20 reactivos.',
          learningResult: 'El estudiante sintetiza visualmente la intrusión mediante un cómic pericial de 6 viñetas, concluye su bitácora y demuestra dominio en el Kahoot.',
          identification: 'Tema: Cómic Forense de 6 Viñetas y Kahoot. Evidencia: Cómic en libreta sellado, bitácora y podio Kahoot.',
          infographicTitle: 'Cómic de 6 Viñetas y Desafío Kahoot (20 Reactivos)',
          infographicImage: 'mtcs-gestion-archivos-nano-kahoot-semana05.jpg',
          infographicSteps: [
            '1. Cierre en Nano: Guardar con Ctrl+O, salir con Ctrl+X y filtrar con grep "ALUMNO".',
            '2. Cómic en Libreta: Rejilla de 6 viñetas narrando el caso Tesla y los comandos en Cloud Shell.',
            '3. Entrega Classroom: Subida formal del documento Docs con las 4 capturas requeridas (código j6bnku3j).',
            '4. Desafío Kahoot: 20 reactivos (20 seg/reactivo) con retroalimentación grupal y podio.',
          ],
          development: 'Finalización de la bitácora en terminal, creación del cómic pericial de 6 viñetas en libreta como acordeón visual previo, entrega en Classroom y aplicación del Kahoot oficial de 20 reactivos.',
          closure: 'Publicación del podio de ganadores en Kahoot, sellado de libretas (cómic + bitácora) y cierre de semana.',
        },
      ],
      sessions: [
        {
          id: 'S01',
          label: 'Sesión 01',
          duration: '1 hora',
          title: 'Estudio de caso Tesla: Cryptojacking en la nube y resumen pericial',
          hourIds: ['H01'],
          product: 'Lectura analizada del caso Tesla, resumen analítico pericial en libreta y cuestionario de control con sello docente.',
          unlockDate: '2026-09-23',
          unlockLabel: 'Miércoles 23 de Septiembre (18:30 hrs)',
        },
        {
          id: 'S02',
          label: 'Sesión 02',
          duration: '2 horas',
          title: 'Laboratorio en Google Cloud Shell: Misión Cloud Recon (Guía PDF)',
          hourIds: ['H02'],
          product: 'Terminal activa verificada, ejecución de Fases 0 a 5 en la Guía Oficial en PDF y avance de bitácora en nano.',
          unlockDate: '2026-09-24',
          unlockLabel: 'Jueves 24 de Septiembre (16:50 hrs)',
        },
        {
          id: 'S03',
          label: 'Sesión 03',
          duration: '2 horas',
          title: 'Cierre de bitácora, Cómic pericial de 6 viñetas y Desafío Kahoot (20 Reactivos)',
          hourIds: ['H03'],
          product: 'Cómic de 6 viñetas dibujado y coloreado en libreta, bitácora sellada, reporte en Classroom (j6bnku3j) y podio Kahoot.',
          unlockDate: '2026-09-25',
          unlockLabel: 'Viernes 25 de Septiembre (18:30 hrs)',
        },
      ],
    },
    {
      id: 'W07',
      label: 'Semana 07',
      dateRange: '28 Sep - 02 Oct',
      status: 'Completada',
      corteId: 'C2',
      raId: 'RA 2.1',
      title: 'Las Llaves del Reino: Permisos y Mínimo Privilegio en Linux',
      result: 'Aplica el principio de mínimo privilegio y la Tríada CIA, analizando la estructura de usuarios y permisos en Linux (rwx / chmod) y blindando servidores ante configuraciones inseguras.',
      htmlUrl: './html/W07.html',
      pdfUrl: './pdf/Guia_Laboratorio_Forense_Linux_MTCS_Semana07.pdf',
      identification: {
        place: 'Aula de Clase y Laboratorio de Cómputo',
        modality: 'Trabajo individual con libreta y terminal Linux (Cloud Shell)',
        product: 'Tríada CIA en libreta, anatomía de /etc/passwd con ejercicios rwx y laboratorio "Blindando el Servidor"',
      },
      notices: [
        'Arranque del RA 2.1 (Segundo Corte - 20%).',
        'Miércoles 30 Sep: Reactivación con Desafío Kahoot de la Semana 06 e introducción a la Tríada CIA (Sello 1).',
        'Jueves 01 Oct: Anatomía de usuarios (Root vs UID 1000) y lectura forense de permisos rwx (Sello 2).',
        'Viernes 02 Oct: Matemática octal de chmod y laboratorio práctico "Blindando el Servidor" (Sello 3).',
      ],
      hours: [
        {
          id: 'H01',
          label: 'Sesión 01 (Miércoles 30 Sep)',
          title: 'Reactivación Kahoot S06 y Fundamentos de la Tríada CIA',
          hook: '¿Sabían que el 95% de los ciberataques exitosos a nivel mundial no son por hackers de película, sino porque alguien violó una regla de la Tríada CIA o dejó una contraseña débil? Hoy abrimos el corte con nuestro Kahoot pendiente y aprenderemos los 3 mandamientos sagrados de la seguridad.',
          start: '¿Por qué en ciberseguridad todo se resume a proteger la Confidencialidad, Integridad y Disponibilidad?',
          dictation: 'En ciberseguridad, toda protección gira en torno a tres pilares fundamentales conocidos como la Tríada CIA: 1) Confidencialidad: Garantiza que la información solo sea accesible para personas autorizadas; 2) Integridad: Asegura que los datos se mantengan exactos y protegidos contra modificaciones no autorizadas o borrados accidentales; 3) Disponibilidad: Asegura que los servicios y servidores estén operativos en el momento exacto en que los usuarios los necesiten. Regla de Oro: El Principio de Mínimo Privilegio (Zero Trust) exige otorgar únicamente los accesos indispensables para realizar una tarea.',
          workBlock: {
            duration: '25 minutos',
            title: 'Fase de Kahoot y Esquema de Libreta',
            steps: [
              'Competir en el Kahoot S06 (20 reactivos sobre Caso Tesla y terminal Linux). Anotar podio y puntaje en la parte superior de la libreta.',
              'Dibujar en libreta un triángulo grande de la Tríada CIA con 3 divisiones (C, I, A). Redactar en cada arista un ejemplo de la vida real (ej. robo de contraseña, alteración de calificaciones, caída de un servidor).'
            ]
          },
          learningResult: 'El estudiante aplica la Tríada CIA y el principio de mínimo privilegio en el análisis de incidentes de seguridad.',
          identification: 'Tema: Tríada CIA y Principio Zero Trust. Evidencia: Triángulo CIA y registro de Kahoot en libreta sellado.',
          development: 'Evaluación diagnóstica con el Kahoot de la Semana 06 (Caso Tesla y Cloud Recon), dictado técnico sobre la Tríada CIA y elaboración del esquema visual en libreta.',
          closure: 'Firma del Sello 1 y registro del podio de Kahoot.',
          faq: [
            { q: '¿Qué arista rompe un ransomware?', a: 'Disponibilidad (bloquea el acceso) e Integridad al cifrar los archivos sin permiso.' },
            { q: '¿Qué arista rompe tirar el portal escolar?', a: 'Disponibilidad (ataque de denegación de servicio DDoS).' }
          ],
          sello: {
            num: 'Sello 1',
            desc: 'Triángulo de la Tríada CIA en libreta con 3 ejemplos + Puntaje de Kahoot S06 anotado.'
          }
        },
        {
          id: 'H02',
          label: 'Sesión 02 (Jueves 01 Oct · Hora 1)',
          title: 'Auditoría Forense de Identidad: Superusuario Root vs UID y Cuentas Ocultas',
          hook: '¿Sabían que en el código de Linux existe un comando de 7 letras (rm -rf /) que puede borrar un servidor completo en 3 segundos? En Windows sale una ventana que te dice ¿Deseas confirmar?, pero Linux confía ciegamente en root. Si root ordena autodestruirse, la máquina lo hace sin chistar. Por eso nadie trabaja como root; usamos sudo.',
          start: '¿Por qué en Linux nunca se debe iniciar sesión directamente como root para trabajar?',
          dictation: 'En el sistema operativo Linux, la cuenta suprema de administración se denomina root y posee de forma predeterminada el identificador UID 0. Por políticas de ciberseguridad y bastionado (hardening), nunca se opera un servidor directamente desde la sesión de root. Para tareas de mantenimiento se utiliza el comando sudo, el cual otorga privilegios administrativos temporales y genera un registro de auditoría de cada acción ejecutada.',
          workBlock: {
            duration: '25-30 minutos',
            title: 'Misión Cazador de Backdoors y Cuentas Ocultas (Cloud Shell + Libreta)',
            steps: [
              'Paso 1 (Cazador de Backdoors con UID 0): Ejecutar en Cloud Shell: awk -F: \'$3 == 0 {print $1, $3}\' /etc/passwd. Registrar en libreta cuántas cuentas tienen UID 0. Si existiera otra cuenta además de root, documentar que se trata de una puerta trasera.',
              'Paso 2 (Inspección Forense de Tu Cuenta): Ejecutar whoami e id. Anotar en libreta tu nombre de usuario, UID (1000) y grupos a los que perteneces.',
              'Paso 3 (Tabla de Clasificación de Cuentas): Ejecutar head -n 6 /etc/passwd y tail -n 6 /etc/passwd. Construir en libreta una tabla con 4 cuentas (root, daemon, nobody, tu_usuario) indicando: Usuario, UID, Directorio Home y Shell asignado.',
              'Paso 4 (Deducción Técnica): Responder en libreta: ¿Por qué las cuentas de servicio del sistema tienen como shell /usr/sbin/nologin o /bin/false en lugar de /bin/bash?',
              'Paso 5 (El Asalto Fallido a /etc/shadow): Ejecutar cat /etc/shadow. Copiar en la libreta el mensaje exacto de error que arroja el kernel de Linux (Permission denied) y justificar por qué ni siquiera un usuario de informática puede mirar los hashes.'
            ]
          },
          terminalRadar: 'awk -F: \'$3 == 0 {print $1, $3}\' /etc/passwd ➔ root 0\nid ➔ uid=1000(usuario) gid=1000(usuario)...\ncat /etc/shadow ➔ cat: /etc/shadow: Permission denied',
          learningResult: 'El estudiante audita cuentas de sistema y privilegios UID mediante filtros en consola, diferenciando cuentas humanas de servicios protegidos en /etc/passwd y /etc/shadow.',
          identification: 'Tema: Auditoría de Cuentas y Privilegios en Linux. Evidencia: Tabla de 4 cuentas, filtro UID 0 y captura de error de /etc/shadow.',
          development: 'Ejecución de filtros awk y head/tail sobre /etc/passwd en Cloud Shell. Detección de cuentas UID 0, análisis de shells /usr/sbin/nologin e intento de lectura de /etc/shadow para documentar el bloqueo del sistema.',
          closure: 'Revisión grupal rápida del significado del error de /etc/shadow y preparación para la anatomía de permisos rwx.',
          faq: [
            { q: '¿Qué significa que una cuenta tenga UID 0?', a: 'Significa que el kernel de Linux le da autoridad total e ilimitada sobre el sistema, sin importar el nombre que tenga.' },
            { q: '¿Por qué no puedo leer /etc/shadow con mi usuario?', a: 'Porque contiene los hashes criptográficos de las contraseñas y sus permisos son 0000 o 0640 propiedad exclusiva de root.' }
          ],
          sello: {
            num: 'Sello 2 (Parte 1: Identidad)',
            desc: 'Filtro UID 0 anotado + Tabla comparativa de 4 cuentas con shells + Error de /etc/shadow explicado.'
          }
        },
        {
          id: 'H03',
          label: 'Sesión 02 (Jueves 01 Oct · Hora 2)',
          title: 'Laboratorio de Cerraduras Rotas: Anatomía rwx y el Misterio del Búnker',
          hook: '¿Sabían por qué cuando ejecutamos ls -l salen 10 letras raras como -rwxr-xr--? Es un sistema de cerraduras inventado en los años 70 en los Laboratorios Bell que hoy corre en el 96% del top 1 millón de servidores web del planeta. Quien aprende a leer estas 10 letras entiende exactamente si un hacker puede entrar a un servidor o rebotar.',
          start: '¿Qué significan las letras r, w, x que aparecen al ejecutar ls -l en la terminal?',
          dictation: 'En los sistemas basados en UNIX/Linux, los permisos de acceso se dividen en tres tríadas asociadas a tres niveles de propiedad: 1) Dueño (User - u): Creador del archivo; 2) Grupo (Group - g): Cuentas asignadas a un rol específico; 3) Otros (Others - o): Todo usuario que no sea el dueño ni pertenezca al grupo. Los tres permisos fundamentales son: r (Read - Lectura de contenido), w (Write - Modificación o eliminación) y x (Execute - Ejecución como programa o script).',
          workBlock: {
            duration: '25-30 minutos',
            title: 'Laboratorio Hands-on: Bloqueos de Consola y Matriz de Auditoría',
            steps: [
              'Experimento 1 (El Script Desarmado): En Cloud Shell ejecutar: echo \'echo "Auditoría Exitosa"\' > audit.sh. Quitarle permisos de ejecución con: chmod -x audit.sh. Intentar ejecutarlo con: ./audit.sh. Copiar en la libreta el mensaje exacto de error (bash: ./audit.sh: Permission denied). Luego devolverle la ejecución solo al dueño con: chmod u+x audit.sh y verificar su ejecución.',
              'Experimento 2 (El Enigma del Búnker Inaccesible): Crear carpeta con: mkdir bunker y dentro crear touch bunker/secreto.txt. Quitarle el permiso "x" al directorio con: chmod -x bunker. Intentar ingresar con: cd bunker. Anotar el error en libreta y responder la pregunta de oro: ¿Por qué no te deja entrar si todavía tienes permiso de lectura "r"? (Deducción: En directorios, la "x" no es ejecutar programas, ¡es el derecho de cruzar la puerta / navegar!).',
              'Matriz Forense de Auditoría (4 Casos de Empresa en Libreta):',
              '  • Caso A: La llave privada SSH id_rsa tiene permisos -rw-rw-rw-. ¿Por qué el servidor SSH se niega a conectar por seguridad?',
              '  • Caso B: El archivo db_clientes.sql tiene permisos -rw-r-----. Si un usuario pertenece al grupo, ¿puede borrarlo o solo leerlo?',
              '  • Caso C: Un atacante sube un troyano con permisos -rwxrwxrwx. ¿Qué riesgo crítico implica para el servidor?',
              '  • Caso D: Escribe exactamente cómo dejarías los permisos con letras (u, g, o) del archivo config.php que contiene la contraseña de MySQL para que nadie ajeno la lea.'
            ]
          },
          terminalRadar: 'chmod -x audit.sh && ./audit.sh ➔ bash: ./audit.sh: Permission denied\nchmod -x bunker && cd bunker ➔ bash: cd: bunker: Permission denied\nls -ld bunker ➔ drw-r--r-- 2 user user ... bunker',
          learningResult: 'El estudiante ejecuta pruebas de denegación de privilegios en consola con chmod (scripts y directorios), deduciendo la función operativa de r, w y x y auditando matrices de seguridad.',
          identification: 'Tema: Tríadas rwx y Dinámica de Denegación de Permisos. Evidencia: Registro de experimentos 1 y 2 en consola + Matriz de 4 casos resuelta.',
          development: 'Ejecución experimental de denegación de permisos en Cloud Shell: script sin bit "x" y directorio bloqueado con chmod -x. Resolución analítica de la matriz forense de 4 casos empresariales.',
          closure: 'Firma y cotejo del Sello 2 completo (Evidencias de H02 + Experimentos y Matriz de H03).',
          faq: [
            { q: '¿Qué significa la "x" en una carpeta?', a: 'Significa permiso de acceso/travesía. Sin "x", no puedes hacer cd a la carpeta ni acceder a sus archivos, aunque tengas "r".' },
            { q: '¿Por qué SSH rechaza una llave con 666 o rwx para otros?', a: 'Porque OpenSSH exige que las llaves privadas sean estrictamente confidenciales (600 / -rw-------). Si cualquiera puede leerla, la rechaza por insegura.' }
          ],
          sello: {
            num: 'Sello 2',
            desc: 'Tabla de cuentas (H02) + Los 2 experimentos de bloqueo documentados + Matriz de 4 casos resuelta (H03).'
          }
        },
        {
          id: 'H04',
          label: 'Sesión 03 (Viernes 02 Oct · Hora 1)',
          title: 'Cálculo y Notación Octal de Permisos: El Comando chmod',
          hook: '¿Por qué los administradores de sistemas no escriben letras y prefieren decir números como 755 o 644? En los inicios de la computación, la memoria RAM era tan escasa que inventaron un truco matemático binario: sumando solo 3 números (4 para leer, 2 para escribir y 1 para ejecutar), el procesador sabe a quién dejar pasar en microsegundos.',
          start: '¿Por qué los administradores de sistemas usamos números como 755 o 644 para cambiar permisos?',
          dictation: 'Para optimizar la administración de permisos, Linux implementa la notación octal asignando pesos numéricos binarios: Lectura (r) equivale a 4, Escritura (w) equivale a 2 y Ejecución (x) equivale a 1. Mediante la suma de estos valores se genera un número de tres dígitos que representa de forma exacta los privilegios del Dueño, Grupo y Otros. El comando del sistema para modificar estos atributos es chmod (Change Mode).',
          workBlock: {
            duration: '20 minutos',
            title: 'Tabla Matemática y Reto de Cálculo Mental',
            steps: [
              'Copiar la regla matemática en libreta: r=4, w=2, x=1, -=0.',
              'Construir la tabla de 4 sumas: 4+2+1=7 (Todo), 4+2+0=6 (rw), 4+0+1=5 (rx), 4+0+0=4 (r).',
              'Calcular el número octal de: 1) -rwxr-xr-- (754), 2) -rw-r--r-- (644) y 3) -rwx------ (700).'
            ]
          },
          learningResult: 'El estudiante calcula notaciones octales de permisos y aplica cambios de seguridad con chmod.',
          identification: 'Tema: Notación Octal y Comando chmod. Evidencia: Matriz de sumas 4-2-1 en libreta.',
          development: 'Tabla matemática de sumas (4+2+1=7, 4+2+0=6, 4+0+1=5). Análisis de los códigos de la industria: 777 (peligro), 755 (servidor/web), 644 (archivos) y 600 (blindado).',
          closure: 'Resolución del reto rápido de cálculo octal en libreta.',
          faq: [
            { q: '¿Por qué no usar 777 siempre?', a: 'Porque es como dejar la puerta de tu casa abierta con un letrero de bienvenida a cualquier ladrón.' }
          ],
          sello: {
            num: 'Sello 3 (Parte 1)',
            desc: 'Tabla matemática de sumas 4-2-1 y cálculos octales resueltos.'
          }
        },
        {
          id: 'H05',
          label: 'Sesión 03 (Viernes 02 Oct · Hora 2)',
          title: 'Laboratorio Hands-on: Misión Blindando el Servidor y Cierre Semanal',
          hook: 'Caso real: En 2023 un programador dejó una base de datos con 2 millones de registros con permiso 777 en la nube. Un bot automatizado la encontró en menos de 4 minutos y la borró pidiendo rescate. Hoy ustedes son el Blue Team que evitará que eso pase.',
          start: '¿Cómo solucionar un servidor donde un administrador novato dejó archivos confidenciales con 777?',
          dictation: 'El endurecimiento o bastionado de servidores requiere auditar permisos inseguros y aplicar el principio de menor privilegio. En esta misión, los estudiantes crean un entorno con archivos vulnerables (chmod 777), identifican las brechas con ls -l y aplican las correcciones pertinentes: chmod 600 para claves privadas, chmod 640 para bases de datos y chmod 644 para archivos públicos, validando la inmutabilidad de la configuración.',
          workBlock: {
            duration: '30 minutos',
            title: 'Misión Blue Team en Google Cloud Shell',
            steps: [
              'Crear carpeta lab_semana07 con archivos clave.key, base_datos.sql y web.html.',
              'Simular la falla del novato: chmod 777 * y comprobar el color verde de alerta con ls -l.',
              'Blindar clave.key con chmod 600 (solo el dueño puede leer).',
              'Asegurar base_datos.sql con chmod 640 (dueño edita, grupo lee).',
              'Publicar web.html con chmod 644 (todos leen, solo dueño edita).',
              'Validar con ls -l, tomar captura y entregar en Classroom (j6bnku3j).'
            ]
          },
          terminalRadar: 'chmod 600 clave.key ➔ -rw------- 1 user user clave.key\nchmod 640 base_datos.sql ➔ -rw-r----- 1 user user base_datos.sql\nchmod 644 web.html ➔ -rw-r--r-- 1 user user web.html',
          learningResult: 'El estudiante ejecuta una auditoría práctica de permisos, corrige vulnerabilidades con chmod y documenta la evidencia.',
          identification: 'Tema: Bastionado de Permisos en Servidores. Evidencia: Terminal con ls -l blindado, Sello 3 y entrega en Classroom.',
          development: 'Práctica guiada en Google Cloud Shell creando la carpeta lab_semana07, simulando la brecha con 777 y aplicando el blindaje 600, 640 y 644. Captura de pantalla para Google Classroom.',
          closure: 'Firma del Sello 3, encuadre para la subida en Google Classroom (j6bnku3j) y cierre de semana.',
          faq: [
            { q: '¿Por qué me sale Operation not permitted?', a: 'Solo el dueño o root con sudo pueden cambiar permisos de un archivo.' }
          ],
          sello: {
            num: 'Sello 3',
            desc: 'Terminal con ls -l mostrando clave.key (600), base_datos.sql (640) y web.html (644).'
          }
        },
      ],
      sessions: [
        {
          id: 'S01',
          label: 'Sesión 01',
          duration: '1 hora',
          title: 'Reactivación Kahoot S06 y Fundamentos de la Tríada CIA',
          hourIds: ['H01'],
          product: 'Puntaje de Kahoot registrado y esquema de la Tríada CIA (Confidencialidad, Integridad, Disponibilidad) en libreta.',
          unlockDate: '2026-09-30',
          unlockLabel: 'Miércoles 30 de Septiembre (18:30 hrs)',
        },
        {
          id: 'S02',
          label: 'Sesión 02',
          duration: '2 horas',
          title: 'Identidad de Usuarios (Root vs Sudo) y Anatomía de Permisos (rwx)',
          hourIds: ['H02', 'H03'],
          product: 'Diagrama de campos de /etc/passwd y resolución de 3 casos prácticos de permisos rwx en libreta.',
          unlockDate: '2026-10-01',
          unlockLabel: 'Jueves 01 de Octubre (16:50 hrs)',
        },
        {
          id: 'S03',
          label: 'Sesión 03',
          duration: '2 horas',
          title: 'Matemática Octal (chmod) y Laboratorio "Blindando el Servidor"',
          hourIds: ['H04', 'H05'],
          product: 'Matriz de cálculo octal completada, terminal con permisos corregidos y entrega en Classroom (j6bnku3j).',
          unlockDate: '2026-10-02',
          unlockLabel: 'Viernes 02 de Octubre (18:30 hrs)',
        },
      ],
    },
    {
      id: 'W08',
      label: 'Semana 08',
      dateRange: '05 - 09 Oct',
      status: 'En curso',
      defaultWeek: true,
      corteId: 'C2',
      raId: 'RA 2.1',
      title: 'Tríada CIA, Cerraduras en Linux y Gran Batalla Kahoot',
      result: 'Consolida la Tríada CIA y el principio de mínimo privilegio mediante organizadores gráficos, audita usuarios y permisos en Linux (rwx / chmod) y evalúa el dominio técnico en el laboratorio forense.',
      pdfUrl: './pdf/Guia_Laboratorio_Forense_Linux_MTCS_Semana07.pdf',
      identification: {
        place: 'Aula de Clase y Laboratorio de Cómputo',
        modality: 'Trabajo individual con libreta y Google Cloud Shell',
        product: 'Visualizador gráfico de Tríada CIA en libreta, laboratorio de rwx/chmod en terminal y Gran Kahoot de Cierre',
      },
      notices: [
        'Consolidación del RA 2.1 (Segundo Corte - 20%).',
        'Miércoles 07 Oct: Tríada CIA a fondo, casos reales de impacto y construcción del Visualizador Gráfico en libreta (Sello 1).',
        'Jueves 08 Oct: Cazador de Backdoors (/etc/passwd, root vs sudo) y Anatomía de Permisos rwx en Cloud Shell (Sello 2).',
        'Viernes 09 Oct: El Laboratorio del Búnker, Matemática de chmod y Gran Kahoot de Cierre de Semana (Sello 3).',
      ],
      hours: [
        {
          id: 'H01',
          label: 'Sesión 01 (Miércoles 07 Oct)',
          title: 'La Tríada CIA y Visualizador Gráfico de Ciberdefensa',
          hook: 'Si un atacante roba tus contraseñas vulnera la Confidencialidad; si altera tus notas en el sistema vulnera la Integridad; si tira la plataforma escolar en inscripciones vulnera la Disponibilidad. Hoy construimos el mapa mental definitivo de defensa.',
          start: '¿Cómo se relacionan las amenazas reales (Phishing, SQLi, DDoS) con los 3 pilares de la seguridad?',
          dictation: 'La Tríada CIA constituye la base doctrinaria de la seguridad informática: Confidencialidad (preservar el secreto ante accesos no autorizados), Integridad (garantizar la exactitud y no alteración de la información) y Disponibilidad (asegurar el acceso oportuno y confiable a los sistemas). El Principio de Mínimo Privilegio (Zero Trust) actúa como eje rector: ningún usuario o proceso debe contar con más privilegios de los estrictamente necesarios para su función.',
          workBlock: {
            duration: '30 minutos',
            title: 'Construcción del Visualizador Gráfico en Libreta',
            steps: [
              'Dividir la cuartilla en 3 columnas o bloques: Confidencialidad, Integridad y Disponibilidad.',
              'Anotar en cada bloque: Definición, Amenaza de impacto real y Mecanismo de defensa (Cifrado, Hashes, Respaldos).',
              'Colocar al centro o encabezado el principio Zero Trust / Mínimo Privilegio.',
              'Redactar un caso práctico personal de protección de sus cuentas digitales.'
            ]
          },
          learningResult: 'El estudiante aplica la Tríada CIA y el principio de mínimo privilegio en el diseño de un organizador visual defensivo.',
          identification: 'Tema: Tríada CIA y Principio Zero Trust. Evidencia: Visualizador Gráfico en libreta sellado.',
          development: 'Exposición docente con ejemplos reales de impacto (fuga de contraseñas, alteración de registros y ataques DDoS). Dictado técnico y construcción guiada del visualizador gráfico.',
          closure: 'Firma y sellado del Sello 1 en libreta.',
          faq: [
            { q: '¿Cuál pilar es el más importante de los tres?', a: 'Depende del sistema: en un hospital la Disponibilidad salva vidas; en un banco la Integridad y Confidencialidad protegen el dinero.' }
          ],
          sello: {
            num: 'Sello 1',
            desc: 'Visualizador Gráfico de la Tríada CIA y Principio de Mínimo Privilegio en libreta.'
          }
        },
        {
          id: 'H02',
          label: 'Sesión 02 (Jueves 08 Oct · Hora 1)',
          title: '¿Cómo Viajan los Secretos en Internet? (Confidencialidad y Base64)',
          hook: 'Cuando mandan un mensaje por WhatsApp o compran en línea, sus contraseñas viajan por cables y antenas públicas. Si viajaran en español normal, cualquiera los espiaría. Hoy nos convertiremos en ciberespías y aprenderemos cómo la terminal camufla la información.',
          start: '¿Por qué nunca se deben transmitir contraseñas o datos bancarios en texto legible?',
          dictation: 'En ciberseguridad, la Confidencialidad se garantiza transformando la información legible en código ininteligible para evitar que intermediarios no autorizados la comprendan. La codificación en Base64 es un estándar internacional que convierte secuencias de texto o binarios en un conjunto seguro de 64 caracteres imprimibles (letras mayúsculas, minúsculas, números y signos). Es la base con la que viajan contraseñas en cabeceras de red, tokens de sesión y archivos adjuntos en Internet.',
          workBlock: {
            duration: '25 minutos',
            title: 'Conceptos Clave de Criptografía en Libreta',
            steps: [
              'Definir en libreta texto en claro (plaintext) vs texto codificado (ciphertext).',
              'Registrar la regla de oro: Base64 camufla a simple vista; la criptografía robusta protege con llave matemática.',
              'Dibujar el esquema de transmisión: Mensaje legible ➔ [ Algoritmo Base64 ] ➔ Código Oculto.'
            ]
          },
          learningResult: 'El estudiante comprende los principios de ofuscación y codificación como primer nivel de confidencialidad en redes.',
          identification: 'Tema: Confidencialidad y Codificación Base64. Evidencia: Apunte y esquema de criptografía básica.',
          development: 'Explicación del riesgo de transmisión de datos en claro en redes públicas. Dictado técnico sobre el estándar Base64 y su aplicación en la industria.',
          closure: 'Reflexión grupal y preparación para la práctica en Google Cloud Shell.',
          faq: [
            { q: '¿Base64 es un cifrado inviolable?', a: 'No, es una codificación de transporte. Cualquiera con la herramienta base64 puede decodificarlo, pero evita la lectura directa a simple vista.' }
          ],
          sello: {
            num: 'Sello 2 (Parte 1)',
            desc: 'Apunte teórico de Confidencialidad y esquema de Base64 en libreta.'
          }
        },
        {
          id: 'H03',
          label: 'Sesión 02 (Jueves 08 Oct · Hora 2)',
          title: 'Misión Ciberespía: Cifrado y Descifrado en Google Cloud Shell',
          hook: 'Vamos a convertir su terminal en una estación de inteligencia militar. Crearán su propio mensaje secreto, lo transformarán en código y retarán a su compañero a descifrarlo.',
          start: '¿Cómo transformar una frase en código ininteligible con un solo comando de Linux?',
          dictation: 'En la terminal de Linux, el comando base64 permite codificar y decodificar flujos de texto en tiempo real. Mediante la tubería (|), redirigimos la salida del comando echo hacia base64 para camuflar el mensaje. Para revertir la transformación y recuperar el texto original, se utiliza el parámetro -d (decode), permitiendo la verificación inmediata de la información.',
          workBlock: {
            duration: '25 minutos',
            title: 'Laboratorio de Mensajes Secretos',
            steps: [
              'Camuflar mensaje propio: echo "Mision aprobada" | base64 y registrar el código resultante.',
              'Descifrar el código en terminal con: echo "CODIGO..." | base64 -d.',
              'Reto por parejas: Intercambiar un código en papel con su compañero de banca para descifrarlo en su consola.',
              'Anotar en libreta: Mensaje original, código base64 y mensaje descifrado del compañero.'
            ]
          },
          terminalRadar: 'echo "Hola" | base64 ➔ SG9sYQo=\necho "SG9sYQo=" | base64 -d ➔ Hola',
          learningResult: 'El estudiante aplica comandos de codificación y decodificación en terminal para salvaguardar la confidencialidad de la información.',
          identification: 'Tema: Práctica Forense de Codificación Base64. Evidencia: Registro del mensaje propio y descifrado en libreta sellado.',
          development: 'Demostración en pantalla del uso de base64 con tubería. Práctica guiada por parejas de intercambio de mensajes secretos.',
          closure: 'Revisión de libretas y sellado del Sello 2.',
          faq: [
            { q: '¿Qué pasa si olvido poner la bandera -d?', a: 'La terminal volverá a codificar el código ya codificado en lugar de descifrarlo.' }
          ],
          sello: {
            num: 'Sello 2',
            desc: 'Laboratorio Ciberespía: Mensaje en Base64 propio y descifrado de compañero en libreta.'
          }
        },
        {
          id: 'H04',
          label: 'Sesión 03 (Viernes 09 Oct · Hora 1)',
          title: 'El Candado Digital (chmod) y la Huella Digital Forense (md5sum)',
          hook: 'Ayer camuflamos mensajes en tránsito. Hoy aprenderán a blindar archivos en disco con chmod 000 y descubriremos el secreto que usan los bancos y los forenses para detectar si un hacker alteró una sola letra de un documento: la huella digital matemática (Hash md5sum).',
          start: '¿Cómo sabe un analista forense si un archivo fue alterado sin tener que leerlo completo?',
          dictation: 'En ciberseguridad, la Integridad se verifica mediante funciones hash como MD5, las cuales generan una huella digital matemática única e irreversible de 32 caracteres. El denominado Efecto Avalancha establece que la modificación de un solo carácter en el archivo altera completamente toda la huella resultante. En paralelo, el control de acceso en reposo se gestiona con directivas chmod, empleando 000 para bloqueo total y 600 para bóveda personal del dueño.',
          workBlock: {
            duration: '30 minutos',
            title: 'Laboratorio de Candados y Huellas Digitales',
            steps: [
              'Candado total: echo "Clave: 98765" > secretos.txt y aplicar chmod 000 secretos.txt (copiar el Permission denied).',
              'Bóveda personal: aplicar chmod 600 secretos.txt y comprobar lectura con cat.',
              'Efecto Avalancha en vivo: ejecutar echo "Felipe" | md5sum y luego echo "Felipe." | md5sum para ver cambiar la huella al 100%.',
              'Reto del Examen Hackeado: crear boleta.txt con nota 10, sacar md5sum boleta.txt, alterar la nota a 100 y comprobar que los hashes no coinciden.',
              'Dibujar en libreta el Semáforo de Permisos (000, 600, 644) y la deducción de Integridad.'
            ]
          },
          terminalRadar: 'chmod 000 secretos.txt ➔ cat: Permission denied\necho "Felipe" | md5sum ➔ 955848e...\necho "Felipe." | md5sum ➔ 3d18c2b...',
          learningResult: 'El estudiante aplica candados digitales con chmod y comprueba la integridad de la información mediante análisis forense con md5sum.',
          identification: 'Tema: Candados chmod e Integridad con md5sum. Evidencia: Error de consola, Efecto Avalancha y Semáforo sellados.',
          development: 'Práctica guiada en Google Cloud Shell alternando permisos de acceso 000/600 y experimentación con funciones hash MD5 demostrando el Efecto Avalancha.',
          closure: 'Revisión de libretas y apertura de la sesión de Kahoot.',
          faq: [
            { q: '¿Se puede descifrar un hash MD5 para recuperar la palabra?', a: 'No, los hashes son matemáticamente unidireccionales (de un solo sentido), no son reversibles como Base64.' }
          ],
          sello: {
            num: 'Sello 3 (Parte 1)',
            desc: 'Práctica de Candados chmod (000/600) y Huella Forense md5sum en libreta.'
          }
        },
        {
          id: 'H05',
          label: 'Sesión 03 (Viernes 09 Oct · Hora 2)',
          title: '🏆 Gran Kahoot de Cierre de Semana y Sellado Final',
          hook: 'Llegó la hora de la verdad: Tríada CIA, mensajes secretos en Base64 y los candados de Linux. Abran kahoot.it y compitan por el podio de ciberseguridad de 501.',
          start: '¿Quién dominará el podio en la batalla de ciberdefensa del corte?',
          dictation: 'La evaluación formativa gamificada afianza los conceptos de Confidencialidad, Integridad y Disponibilidad, la transformación de datos con Base64 y el control de accesos con chmod. Permite medir el aprendizaje de forma ágil, participativa y colaborativa en el cierre de ciclo semanal.',
          workBlock: {
            duration: '30 minutos',
            title: 'Batalla Kahoot y Evaluación Semanal',
            steps: [
              'Ingresar a kahoot.it con el PIN proyectado en pantalla.',
              'Resolver los reactivos sobre Tríada CIA, Base64 y permisos chmod.',
              'Registrar podio, puntaje y reflexiones en libreta.',
              'Revisión final de evidencias de la semana y estampado del Sello 3.'
            ]
          },
          learningResult: 'El estudiante demuestra dominio integral de los conceptos de ciberseguridad, criptografía básica y permisos en un entorno interactivo.',
          identification: 'Tema: Evaluación Formativa Integral RA 2.1. Evidencia: Podio de Kahoot y libreta sellada con Sello 3.',
          development: 'Desarrollo de la sesión interactiva en Kahoot, retroalimentación reactivo por reactivo y sellado final de libretas.',
          closure: 'Firma y sellado del Sello 3, felicitación al grupo y cierre de semana.',
          faq: [
            { q: '¿Qué cuenta si no alcancé podio en Kahoot?', a: 'Lo importante es tu participación, registrar tu puntaje y demostrar la libreta completa con los sellos 1, 2 y 3.' }
          ],
          sello: {
            num: 'Sello 3',
            desc: 'Semáforo de Permisos + Podio y puntaje de Kahoot registrado en libreta.'
          }
        }
      ],
      sessions: [
        {
          id: 'S01',
          label: 'Sesión 01',
          duration: '1 hora',
          title: 'La Tríada CIA y Visualizador Gráfico de Ciberdefensa',
          hourIds: ['H01'],
          product: 'Visualizador Gráfico de la Tríada CIA y Principio de Mínimo Privilegio (Zero Trust) en libreta.',
          unlockDate: '2026-10-07',
          unlockLabel: 'Miércoles 07 de Octubre (18:30 hrs)',
        },
        {
          id: 'S02',
          label: 'Sesión 02',
          duration: '2 horas',
          title: 'Misión Ciberespía: Criptografía Exprés en Terminal (Base64)',
          hourIds: ['H02', 'H03'],
          product: 'Apunte de Confidencialidad, mensaje propio cifrado y mensaje de compañero descifrado en libreta.',
          unlockDate: '2026-10-08',
          unlockLabel: 'Jueves 08 de Octubre (16:50 hrs)',
        },
        {
          id: 'S03',
          label: 'Sesión 03',
          duration: '2 horas',
          title: 'El Candado Digital de Linux (chmod 000/600) y Gran Kahoot',
          hourIds: ['H04', 'H05'],
          product: 'Semáforo de permisos (000, 600, 644), captura del Permission denied y podio de Kahoot en libreta.',
          unlockDate: '2026-10-09',
          unlockLabel: 'Viernes 09 de Octubre (18:30 hrs)',
        },
      ],
    },
    {
      id: 'W09',
      label: 'Semana 09',
      dateRange: '12 - 16 Oct',
      status: 'Completada',
      corteId: 'C2',
      raId: 'RA 2.2',
      title: 'El Asalto a las Contraseñas: Fuerza Bruta, OpenSSL y Escudo MFA',
      result: 'Distingue y aplica protocolos tecnológicos y criterios de confidencialidad, experimentando con ataques de diccionario, entropía de claves con OpenSSL y análisis de tráfico plano vs cifrado (HTTP vs HTTPS).',
      pdfUrl: './pdf/Guia_Laboratorio_Forense_Linux_MTCS_Semana07.pdf',
      identification: {
        place: 'Aula de Clase y Laboratorio de Cómputo',
        modality: 'Trabajo individual con libreta y Google Cloud Shell',
        product: 'Matriz del Riesgo, tabla de entropía, generación con openssl, comparativa HTTP/HTTPS y Gran Kahoot',
      },
      notices: [
        'Apertura oficial del RA 2.2 (Segundo Corte - 15% · Protocolos y Confidencialidad).',
        'Miércoles 14 Oct: El Triángulo del Riesgo (Activo, Amenaza y Vulnerabilidad) + Matriz de Libreta (Sello 1).',
        'Jueves 15 Oct: La Guerra de las Contraseñas (Fuerza Bruta vs Diccionarios) y Claves Militares con OpenSSL (Sello 2).',
        'Viernes 16 Oct: Auditoría Forense con Black Mirror (Triángulo del Riesgo en Videojuegos Inmersivos) y Gran Kahoot Semana 09 (Sello 3).',
      ],
      hours: [
        {
          id: 'H01',
          label: 'Sesión 01 (Miércoles 14 Oct)',
          title: 'El Triángulo del Riesgo: Activos, Amenazas y Vulnerabilidades',
          hook: '¿Sabían que los hackers casi nunca atacan la computadora más difícil, sino a la persona más confiada? En un banco pueden tener un firewall de 10 millones de pesos, pero si el cajero deja su contraseña pegada en un post-it, el banco está hackeado.',
          start: '¿Cómo se relacionan un activo valioso, una amenaza informática y una vulnerabilidad en un incidente real?',
          dictationTitle: 'EL TRIÁNGULO DEL RIESGO EN CIBERSEGURIDAD: ACTIVOS, AMENAZAS Y VULNERABILIDADES',
          dictation: 'En ciberseguridad corporativa, la gestión del riesgo se fundamenta en tres componentes interdependientes: 1) Activo de Información: Todo dato, sistema o infraestructura que posee valor tangible o intangible para la organización (ejemplos: bases de datos de clientes, propiedad intelectual, dinero digital o expedientes escolares); 2) Amenaza: Cualquier agente externo o interno con el potencial de causar daño o explotar un sistema (ejemplos: ciberdelincuentes, software malicioso, filtraciones de empleados o desastres físicos); 3) Vulnerabilidad: Debilidad o fallo en el diseño, configuración o procedimiento que permite a una amenaza materializarse (ejemplos: contraseñas débiles, puertos de red abiertos innecesariamente o software sin actualizar). La fórmula fundamental de la ciberdefensa establece que el Riesgo es directamente proporcional a la probabilidad de que una amenaza explote una vulnerabilidad (Riesgo = Amenaza × Vulnerabilidad). La mitigación consiste en aplicar salvaguardas y controles de seguridad para reducir dicha exposición a niveles tolerables.',
          workBlock: {
            duration: '30 minutos',
            title: 'Construcción de la Matriz de Riesgo en Libreta',
            steps: [
              'Anotar título centrado (tamaño 20) y copiar el dictado oficial justificado (tamaño 14).',
              'Dividir la cuartilla en 3 cuadrantes: 1) El Activo (base de datos escolar), 2) La Amenaza (atacante externo / phishing), 3) La Vulnerabilidad (clave 123456).',
              'Al centro de la página, redactar la fórmula matemática: Riesgo = Amenaza × Vulnerabilidad.',
              'Plantear un ejemplo de mitigación real: Implementar autenticación de dos factores (2FA) y claves de más de 12 caracteres.'
            ]
          },
          visualExample: {
            title: 'Esquema de la Matriz del Riesgo',
            badge: 'Referencia para Libreta',
            description: 'Distribución recomendada para el apunte gráfico de los 3 cuadrantes:',
            mockup: '┌────────────────────────────────────────────────────────┐\n│      [ TÍTULO CENTRADO · TAMAÑO 20 ]                   │\n│                                                        │\n│  [ TEXTO DEL DICTADO OFICIAL JUSTIFICADO · TAMAÑO 14 ] │\n├────────────────────────┬───────────────────────────────┤\n│ 1. EL ACTIVO (Valor)   │ 2. LA AMENAZA (Peligro)       │\n│ • Datos de alumnos     │ • Hacker / Malware espía      │\n│ • Calificaciones       │ • Ataques de phishing         │\n├────────────────────────┴───────────────────────────────┤\n│ 3. LA VULNERABILIDAD (Falla)                           │\n│ • Contraseñas débiles (ej. "admin123")                 │\n│ • Servidores sin parches de seguridad                  │\n├────────────────────────────────────────────────────────┤\n│   FÓRMULA: RIESGO = AMENAZA × VULNERABILIDAD           │\n│   MITIGACIÓN: Actualizar sistemas + Doble Factor (2FA) │\n└────────────────────────────────────────────────────────┘'
          },
          learningResult: 'El estudiante analiza los componentes del riesgo tecnológico y formula medidas de mitigación para salvaguardar activos de información.',
          identification: 'Tema: Gestión del Riesgo Tecnológico. Evidencia: Matriz de Riesgo de 3 cuadrantes en libreta.',
          development: 'Exposición interactiva sobre la anatomía de los ciberataques modernos. Dictado técnico sobre activos y vulnerabilidades, seguido de la elaboración gráfica de la Matriz de Riesgo.',
          closure: 'Revisión y sellado del Sello 1 en libreta.',
          faq: [
            { q: '¿Si no hay vulnerabilidad, existe riesgo?', a: 'El riesgo se reduce prácticamente a cero, porque aunque exista la amenaza, no tiene ninguna puerta para entrar.' }
          ],
          sello: {
            num: 'Sello 1',
            desc: 'Matriz de Riesgo con los 3 cuadrantes, fórmula y ejemplo de mitigación en libreta.'
          }
        },
        {
          id: 'H02',
          label: 'Sesión 02 (Jueves 15 Oct · Hora 1)',
          title: 'La Guerra de las Contraseñas: Fuerza Bruta vs Diccionarios',
          hook: '¿Sabían que en México la contraseña más usada sigue siendo "123456"? Los hackers usan una lista filtrada real con 32 millones de contraseñas llamada RockYou. Si tu clave está ahí, tardan 0.001 segundos en entrar.',
          start: '¿Cómo calcula un atacante el tiempo necesario para quebrar una contraseña por fuerza bruta?',
          dictationTitle: 'LA GUERRA DE LAS CONTRASEÑAS: ATAQUES DE DICCIONARIO Y FUERZA BRUTA',
          dictation: 'El mecanismo de autenticación más extendido en los sistemas informáticos sigue siendo la contraseña, representando simultáneamente el eslabón más vulnerable de la cadena de seguridad. Los atacantes no intentan adivinar contraseñas de forma manual, sino mediante herramientas automatizadas que ejecutan dos vectores principales: 1) Ataque por Fuerza Bruta: Prueba matemática exhaustiva de todas las combinaciones posibles de caracteres hasta dar con la correcta; su efectividad depende directamente de la longitud de la clave y de la potencia de cómputo del atacante; 2) Ataque de Diccionario: Utiliza listas masivas de contraseñas previamente filtradas y palabras comunes (como la célebre lista RockYou que contiene más de 32 millones de registros). Una contraseña compuesta únicamente por 6 u 8 caracteres numéricos puede ser vulnerada en milisegundos mediante aceleración por GPU. Para neutralizar estos ataques, se exige una longitud mínima de 12 a 16 caracteres alfanuméricos con caracteres especiales, alcanzando una entropía que eleva el tiempo de descifrado a miles de millones de años.',
          workBlock: {
            duration: '25 minutos',
            title: 'Tabla de Entropía y Tiempos de Ruptura',
            steps: [
              'Anotar título centrado (tamaño 20) y dictado justificado (tamaño 14).',
              'Dibujar en libreta una tabla comparativa de 4 niveles: Débil (6 núm), Regular (8 letras), Fuerte (10 letras+núm), Militar (14 alfanum con símbolos).',
              'Registrar los tiempos de ruptura estimados por GPU: de 0.001 segundos a más de 35,000 años.',
              'Responder: ¿Por qué las plataformas bloquean el acceso tras 3 o 5 intentos fallidos?'
            ]
          },
          visualExample: {
            title: 'Tabla de Entropía de Contraseñas',
            badge: 'Tiempos de Ruptura',
            description: 'Muestra de clasificación de contraseñas para libreta:',
            mockup: '┌─────────────────┬──────────────┬───────────────────────────────┐\n│ TIPO DE CLAVE   │ EJEMPLO      │ TIEMPO ESTIMADO DE RUPTURA    │\n├─────────────────┼──────────────┼───────────────────────────────┤\n│ Débil (6 car.)  │ 123456       │ 0.001 segundos (Instantáneo)  │\n│ Media (8 car.)  │ escuelaa     │ 3 minutos por diccionario     │\n│ Fuerte (10 car.)│ Escuel4#26   │ 4 semanas por fuerza bruta    │\n│ Militar (14 c.) │ xK9$mP2!qL9@ │ +35,000 años (Invulnerable)   │\n└─────────────────┴──────────────┴───────────────────────────────┘'
          },
          learningResult: 'El estudiante evalúa la fortaleza de contraseñas basándose en su longitud, complejidad y entropía criptográfica.',
          identification: 'Tema: Entropía y Ataques de Diccionario. Evidencia: Tabla comparativa de 4 niveles de contraseñas sellada.',
          development: 'Análisis de vectores de ataque por fuerza bruta y diccionarios de filtraciones masivas (RockYou). Construcción guiada de la tabla de entropía.',
          closure: 'Reflexión grupal y preparación para la práctica en Cloud Shell.',
          faq: [
            { q: '¿Qué es la lista RockYou?', a: 'Un archivo de texto real filtrado en 2009 que contiene más de 32 millones de contraseñas comunes usadas en ataques.' }
          ],
          sello: {
            num: 'Sello 2 (Parte 1)',
            desc: 'Tabla de entropía y tiempos de descifrado de contraseñas en libreta.'
          }
        },
        {
          id: 'H03',
          label: 'Sesión 02 (Jueves 15 Oct · Hora 2)',
          title: 'Generación Robusta de Secretos con Criptografía OpenSSL',
          hook: 'En ciberseguridad nunca inventamos contraseñas usando nuestra cabeza porque los atacantes usan psicología. Usamos la entropía matemática del procesador para generar claves militares.',
          start: '¿Cómo utilizar el motor criptográfico de Linux para generar contraseñas invulnerables?',
          dictationTitle: 'GENERACIÓN ROBUSTA DE SECRETOS CON CRIPTOGRAFÍA OPENSSL',
          dictation: 'Para garantizar que los secretos administrativos, credenciales de conexión y tokens de autenticación posean verdadera entropía matemática, los administradores de sistemas y analistas de ciberseguridad nunca inventan contraseñas basadas en nombres o palabras del diccionario. En entornos de producción GNU/Linux se emplean herramientas criptográficas como OpenSSL acopladas al generador de números pseudoaleatorios del kernel (/dev/urandom). Mediante el comando openssl rand, el procesador genera cadenas binarias aleatorias codificadas en Base64 o hexadecimal que garantizan una distribución estadística uniforme, anulando por completo la efectividad de los ataques de diccionario y forzando al atacante a un coste computacional inasumible.',
          workBlock: {
            duration: '25 minutos',
            title: 'Taller en Google Cloud Shell: Claves Militares',
            steps: [
              'Generar clave militar de 12 caracteres: openssl rand -base64 12.',
              'Generar superclave bancaria de 18 caracteres: openssl rand -base64 18.',
              'Guardar el secreto en un archivo: openssl rand -base64 16 > mis_claves.txt.',
              'Blindar con candado de dueño: chmod 600 mis_claves.txt.',
              'Anotar en libreta: La clave generada y la salida de ls -l mis_claves.txt (-rw-------).'
            ]
          },
          terminalRadar: 'openssl rand -base64 18 ➔ kL9#mP2!qL9@vX7$... \nchmod 600 mis_claves.txt\nls -l mis_claves.txt ➔ -rw------- 1 user user',
          learningResult: 'El estudiante utiliza herramientas de línea de comandos para generar secretos criptográficos y aplicar permisos de restricción en Linux.',
          identification: 'Tema: Generación Criptográfica con OpenSSL. Evidencia: Terminal con openssl y archivo blindado registrado.',
          development: 'Demostración de generación pseudoaleatoria con openssl en Cloud Shell. Creación y aseguramiento del archivo mis_claves.txt con permisos 600.',
          closure: 'Firma y sellado del Sello 2 en libreta.',
          faq: [
            { q: '¿Por qué base64 en openssl rand?', a: 'Porque convierte los bytes aleatorios crudos en caracteres legibles que se pueden escribir en cualquier teclado.' }
          ],
          sello: {
            num: 'Sello 2',
            desc: 'Generación con openssl rand y archivo mis_claves.txt con chmod 600 en libreta.'
          }
        },
        {
          id: 'H04',
          label: 'Sesión 03 (Viernes 16 Oct · Hora 1)',
          title: 'Auditoría Forense de Videojuegos: El Triángulo del Riesgo en Black Mirror',
          hook: 'Imaginen un videojuego tan inmersivo que se conecta directamente a sus neuronas para leer sus peores miedos... pero el sujeto olvida apagar su celular y no existe ningún botón de apagado de emergencia. Hoy veremos cómo un fallo físico destruye la mente en segundos.',
          start: '¿Cómo se materializa el Triángulo del Riesgo y colapsa la Tríada CIA en un videojuego neuronal?',
          dictationTitle: 'AUDITORÍA FORENSE DE SISTEMAS INMERSIVOS Y EL TRIÁNGULO DEL RIESGO',
          dictation: 'En ciberseguridad, la evaluación de riesgos en entornos inmersivos y tecnologías neuronales exige la aplicación estricta de la Tríada CIA y controles de mitigación física. Cuando un sistema interactúa con datos biométricos y neuronales, el Activo más crítico es la integridad mental y privacidad del usuario. La ausencia de mecanismos de desconexión física de emergencia (Kill Switch), la omisión de aislamiento electromagnético (como permitir teléfonos celulares encendidos) y la firma de acuerdos abusivos representan vulnerabilidades críticas que exponen al sistema a fallas catastróficas. Toda tecnología sin controles de riesgo auditados vulnera simultáneamente la Confidencialidad, Integridad y Disponibilidad del sujeto.',
          workBlock: {
            duration: '25 minutos',
            title: 'Ficha de Auditoría Forense: Caso Black Mirror en Libreta',
            steps: [
              'Anotar título centrado (tamaño 20) y dictado oficial justificado (tamaño 14).',
              'Identificar el Activo en riesgo: la mente, recuerdos y datos neuronales del protagonista.',
              'Señalar la Vulnerabilidad crítica: el celular encendido causando interferencia y la falta de un Kill Switch.',
              'Explicar el colapso de la Tríada CIA: Confidencialidad (miedos expuestos), Integridad (alucinación) y Disponibilidad (bloqueo mental).',
              'Proponer 2 medidas de mitigación que el docente o auditor habría exigido antes de conectar el chip.'
            ]
          },
          visualExample: {
            title: 'Ficha Forense de Ciberseguridad: Caso Black Mirror',
            badge: 'Auditoría de Ciberdefensa',
            description: 'Esquema visual para plasmar en libreta:',
            mockup: '┌─────────────────────────────────────────────────────────────────────────────┐\n│         FICHA FORENSE: EL TRIÁNGULO DEL RIESGO EN BLACK MIRROR              │\n├─────────────────────────────────────────────────────────────────────────────┤\n│ 1. EL ACTIVO CRÍTICO (Valor):                                               │\n│    • El cerebro, recuerdos íntimos y sistema nervioso del usuario.          │\n├─────────────────────────────────────────────────────────────────────────────┤\n│ 2. LA VULNERABILIDAD (Falla):                                               │\n│    • Celular encendido (sin modo avión) + Falta de botón Kill Switch.       │\n├─────────────────────────────────────────────────────────────────────────────┤\n│ 3. LA AMENAZA (Peligro):                                                    │\n│    • Interferencia electromagnética externa + Software experimental.        │\n├─────────────────────────────────────────────────────────────────────────────┤\n│ 4. IMPACTO EN TRÍADA CIA:                                                   │\n│    • Confidencialidad: Rota (extrae secretos y miedos privados).            │\n│    • Integridad: Rota (la señal corrompe la percepción de la realidad).     │\n│    • Disponibilidad: Rota (el sistema se congela y no permite salir).       │\n├─────────────────────────────────────────────────────────────────────────────┤\n│ 5. MEDIDA DE MITIGACIÓN (Solución):                                         │\n│    • Jaula de Faraday (aislamiento total) + Botón físico de corte de luz.   │\n└─────────────────────────────────────────────────────────────────────────────┘'
          },
          terminalRadar: 'Análisis Forense ➔ RIESGO = AMENAZA (Interferencia) × VULNERABILIDAD (Celular encendido sin Kill Switch)',
          learningResult: 'El estudiante aplica el Triángulo del Riesgo y la Tríada CIA al análisis crítico de incidentes tecnológicos en entornos inmersivos.',
          identification: 'Tema: Auditoría Forense Caso Black Mirror. Evidencia: Ficha de Triángulo del Riesgo y Tríada CIA en libreta.',
          development: 'Proyección del episodio, debate guiado sobre fallas de seguridad física y redacción de la ficha forense en libreta.',
          closure: 'Revisión de libretas y preparación para el Kahoot de cierre.',
          faq: [
            { q: '¿Qué es un Kill Switch?', a: 'Un interruptor físico de emergencia que corta la energía y desconecta el sistema de golpe si algo sale mal.' }
          ],
          sello: {
            num: 'Sello 3',
            desc: 'Ficha Forense de Black Mirror y podio de Kahoot registrado en libreta.'
          }
        },
        {
          id: 'H05',
          label: 'Sesión 03 (Viernes 16 Oct · Hora 2)',
          title: '🏆 Gran Kahoot de Cierre Semana 09 (Riesgo, Claves y Black Mirror)',
          hook: 'Llegó el momento de la verdad: Activos, Amenazas, Vulnerabilidades, ataques de Fuerza Bruta, claves militares con OpenSSL y el análisis forense de Black Mirror. Abran kahoot.it y que gane el mejor estratega de 501.',
          start: '¿Quién dominará el podio en la batalla de ciberseguridad de la Semana 09?',
          dictationTitle: 'EVALUACIÓN INTEGRAL DEL TRIÁNGULO DEL RIESGO Y CASO BLACK MIRROR',
          dictation: 'La evaluación formativa al cierre de la Semana 09 consolida el análisis integral de riesgos informáticos, la generación matemática de credenciales robustas y el análisis crítico de incidentes tecnológicos. La comprensión de los fallos de seguridad en sistemas inmersivos refuerza la necesidad de implementar controles preventivos, protocolos de aislamiento y salvaguardas antes de desplegar cualquier software en entornos de producción.',
          workBlock: {
            duration: '30 minutos',
            title: 'Batalla Gamificada Kahoot y Cierre Semanal',
            steps: [
              'Ingresar a kahoot.it con el PIN proyectado en pantalla.',
              'Competir en los 20 reactivos oficiales sobre Riesgos, Contraseñas y el Caso Black Mirror.',
              'Anotar puntaje, podio y conclusiones en libreta.',
              'Revisión final de evidencias de la semana y estampado del Sello 3.'
            ]
          },
          learningResult: 'El estudiante demuestra dominio integral de los conceptos de riesgo, contraseñas y ciberdefensa en una evaluación gamificada.',
          identification: 'Tema: Evaluación Formativa Integral Semana 09. Evidencia: Podio de Kahoot y libreta sellada con Sello 3.',
          development: 'Desarrollo de la sesión interactiva en Kahoot con 20 reactivos, retroalimentación técnica de reactivos clave y sellado de libretas.',
          closure: 'Firma y sellado del Sello 3, felicitación al grupo y cierre de semana.',
          faq: [
            { q: '¿Cómo subo mi evidencia a Classroom?', a: 'Toma foto de tus libretas con los sellos 1, 2 y 3 y súbela a la tarea de la Semana 09 (código j6bnku3j).' }
          ],
          sello: {
            num: 'Sello 3',
            desc: 'Ficha Forense de Black Mirror + Podio de Kahoot Semana 09 registrado en libreta.'
          }
        }
      ],
      sessions: [
        {
          id: 'S01',
          label: 'Sesión 01',
          duration: '1 hora',
          title: 'El Triángulo del Riesgo: Activos, Amenazas y Vulnerabilidades',
          hourIds: ['H01'],
          product: 'Matriz de Riesgo con los 3 cuadrantes, fórmula y medidas de mitigación en libreta.',
          unlockDate: '2026-10-14',
          unlockLabel: 'Miércoles 14 de Octubre (18:30 hrs)',
        },
        {
          id: 'S02',
          label: 'Sesión 02',
          duration: '2 horas',
          title: 'El Asalto a las Contraseñas y Claves Militares con OpenSSL',
          hourIds: ['H02', 'H03'],
          product: 'Tabla de entropía, generación de clave con openssl rand y archivo mis_claves.txt blindado con chmod 600.',
          unlockDate: '2026-10-15',
          unlockLabel: 'Jueves 15 de Octubre (16:50 hrs)',
        },
        {
          id: 'S03',
          label: 'Sesión 03',
          duration: '2 horas',
          title: 'Auditoría Forense con Black Mirror y Gran Kahoot Semana 09',
          hourIds: ['H04', 'H05'],
          product: 'Ficha de auditoría forense (Triángulo del Riesgo y Tríada CIA) y podio de Kahoot Semana 09 en libreta.',
          unlockDate: '2026-10-16',
          unlockLabel: 'Viernes 16 de Octubre (18:30 hrs)',
        },
      ],
    },
    {
      id: 'W10',
      label: 'Semana 10',
      dateRange: '19 - 23 Oct',
      status: 'Histórico',
      corteId: 'C2',
      raId: 'RA 2.2',
      title: 'Protocolos Web TLS, Técnica de Salting y Escudo MFA',
      result: 'Distingue protocolos seguros de capa de aplicación, experimentando con análisis forense de puertos HTTP/HTTPS, técnica de salting con OpenSSL y autenticación multifactor (MFA).',
      pdfUrl: './pdf/Guia_Laboratorio_Forense_Linux_MTCS_Semana07.pdf',
      identification: {
        place: 'Aula de Clase y Laboratorio de Cómputo',
        modality: 'Trabajo individual con libreta y Google Cloud Shell',
        product: 'Diagrama HTTP vs HTTPS con curl, práctica de Salting con OpenSSL, infografía MFA y Gran Kahoot',
      },
      notices: [
        'Consolidación del RA 2.2 (Segundo Corte - 15% · Protocolos y Confidencialidad).',
        'Miércoles 21 Oct: La Trampa de las Redes Abiertas (HTTP 80 vs HTTPS 443 con curl) (Sello 1).',
        'Jueves 22 Oct: Técnica de Salting con OpenSSL y neutralización de Tablas Rainbow (Sello 2).',
        'Viernes 23 Oct: El Escudo Multifactor (MFA / 2FA) y Gran Kahoot Semana 10 (Sello 3).',
      ],
      hours: [
        {
          id: 'H01',
          label: 'Sesión 01 (Miércoles 21 Oct)',
          title: 'La Trampa de las Redes Públicas: HTTP (80) vs HTTPS (443)',
          hook: 'Navegar en una web HTTP en una plaza comercial es como gritar tu contraseña con un megáfono: viaja en texto plano en el aire. Hoy aprenderemos a inspeccionar cabeceras con curl y blindar el canal con HTTPS.',
          start: '¿Cómo expone el protocolo HTTP las contraseñas en redes abiertas y qué capa agrega HTTPS?',
          dictationTitle: 'EL TRÁFICO WEB EN TEXTO PLANO FRENTE AL BLINDAJE HTTPS',
          dictation: 'En las redes de comunicación, los protocolos de la capa de aplicación determinan la privacidad de los datos transmitidos: 1) HTTP (Hypertext Transfer Protocol, puerto predeterminado 80): Transmite credenciales y contenido en texto claro sin cifrar, siendo vulnerable a ataques de intermediario (Man-in-the-Middle) e intercepción en redes abiertas; 2) HTTPS (HTTP Secure, puerto predeterminado 443): Incorpora la capa de seguridad TLS/SSL (Transport Layer Security), estableciendo un túnel criptográfico asimétrico de extremo a extremo que vuelve los datos ininteligibles para cualquier observador no autorizado. Toda plataforma digital moderna exige el redireccionamiento obligatorio hacia HTTPS para preservar la confidencialidad.',
          workBlock: {
            duration: '25 minutos',
            title: 'Inspección Forense con curl en Cloud Shell',
            steps: [
              'Anotar título centrado (tamaño 20) y dictado oficial justificado (tamaño 14).',
              'En Cloud Shell, consultar sitio inseguro: curl -I http://neverssl.com (observar HTTP/1.1 en puerto 80).',
              'Consultar sitio blindado: curl -I https://google.com (observar TLS y protocolo HTTP/2 en puerto 443).',
              'Dibujar en libreta el esquema comparativo de Candado Abierto vs Candado Cerrado.'
            ]
          },
          visualExample: {
            title: 'Diferencia de Puertos: HTTP (80) vs HTTPS (443)',
            badge: 'Seguridad en Redes Web',
            description: 'Esquema visual para plasmar en libreta:',
            mockup: '┌──────────────────────────────────────┬──────────────────────────────────────┐\n│  HTTP (Puerto 80) · INSEGURO         │  HTTPS (Puerto 443) · BLINDADO       │\n├──────────────────────────────────────┼──────────────────────────────────────┤\n│ 🔓 Candado Abierto                   │ 🔒 Candado Verde / Cerrado           │\n│ • Texto en claro (sin cifrar)        │ • Cifrado extremo a extremo (TLS)    │\n│ • Vulnerable a intercepción WiFi     │ • Datos ininteligibles para hackers  │\n└──────────────────────────────────────┴──────────────────────────────────────┘'
          },
          terminalRadar: 'curl -I http://neverssl.com ➔ HTTP/1.1 200 OK (Puerto 80 texto plano)\ncurl -I https://google.com ➔ HTTP/2 200 (Puerto 443 TLS blindado)',
          learningResult: 'El estudiante identifica la vulnerabilidad del tráfico en texto claro y verifica el blindaje de canales web mediante inspección de cabeceras.',
          identification: 'Tema: Protocolos de Aplicación HTTP/HTTPS. Evidencia: Pruebas con curl e infografía comparativa en libreta.',
          development: 'Análisis de puertos 80 y 443 en terminal, experimentación forense con curl y debate sobre riesgos de WiFi público.',
          closure: 'Revisión de libretas y estampado del Sello 1.',
          faq: [
            { q: '¿Por qué no debemos usar banca móvil en WiFi público?', a: 'Porque si el sitio o app no usa cifrado estricto, cualquier persona en la misma red WiFi puede interceptar el tráfico.' }
          ],
          sello: {
            num: 'Sello 1',
            desc: 'Prueba forense con curl e infografía HTTP vs HTTPS en libreta.'
          }
        },
        {
          id: 'H02',
          label: 'Sesión 02 (Jueves 22 Oct · Hora 1)',
          title: 'Tablas Rainbow y la Técnica Criptográfica de Salting',
          hook: 'Si todos usamos contraseñas comunes, un atacante no las adivina: busca el hash en un catálogo precalculado llamado Tablas Rainbow. ¿Cómo lo neutralizan los ingenieros? Echándole SAL criptográfica a la clave.',
          start: '¿Por qué el hash simple es vulnerable a diccionarios y cómo el Salting anula las Tablas Rainbow?',
          dictationTitle: 'CONTROLES DE INTEGRIDAD Y LA TÉCNICA CRIPTOGRÁFICA DE SALTING',
          dictation: 'El almacenamiento seguro de contraseñas prohíbe el uso de texto en claro y exige algoritmos de resumen criptográfico (hashing). Sin embargo, un atacante que posee hashes simples puede descifrarlos mediante ataques de diccionario y tablas precomputadas (Rainbow Tables). Para anular este vector, se implementa la técnica de Salting: Consiste en anexar una secuencia aleatoria de caracteres única («sal») a la contraseña del usuario antes de procesarla con la función hash. Al alterar drásticamente la entrada, el Efecto Avalancha genera un hash totalmente impredecible, inutilizando por completo las listas filtradas y obligando a calcular cada intento de forma individual.',
          workBlock: {
            duration: '25 minutos',
            title: 'Concepto y Mecánica del Salting en Libreta',
            steps: [
              'Anotar título centrado (tamaño 20) y dictado oficial justificado (tamaño 14).',
              'Dibujar el flujo del Salting: [ Contraseña ] + [ Sal Aleatoria ] ➔ Hash Criptográfico.',
              'Anotar la regla de oro: La sal inutiliza las tablas Rainbow porque convierte cada clave en única.',
              'Responder: ¿Dónde se almacena la sal? (R: Se guarda junto al hash en la base de datos de usuarios).'
            ]
          },
          visualExample: {
            title: 'Mecánica de Salting y Tablas Rainbow',
            badge: 'Criptografía Defensiva',
            description: 'Esquema visual para plasmar en libreta:',
            mockup: '┌─────────────────────────────────────────────────────────────────────────────┐\n│                       LA TÉCNICA DEL SALTING                                │\n├─────────────────────────────────────────────────────────────────────────────┤\n│ 1. HASH SIMPLE (Vulnerable):                                                │\n│    "conalep123" ➔ [ MD5 ] ➔ d2b78... (¡Está en la Tabla Rainbow!)           │\n├─────────────────────────────────────────────────────────────────────────────┤\n│ 2. HASH CON SALTING (Blindado):                                             │\n│    "conalep123" + [ Sal: 8a4f9c1b ] ➔ [ MD5 ] ➔ e7f10... (¡Imposible!)     │\n├─────────────────────────────────────────────────────────────────────────────┤\n│ ➔ El Efecto Avalancha destruye la efectividad de la lista RockYou.          │\n└─────────────────────────────────────────────────────────────────────────────┘'
          },
          terminalRadar: 'openssl rand -hex 4 ➔ Generador de sal criptográfica aleatoria de alta entropía',
          learningResult: 'El estudiante explica la vulnerabilidad de hashes simples y la necesidad de incorporar salting para neutralizar ataques de diccionario.',
          identification: 'Tema: Salting y Tablas Rainbow. Evidencia: Esquema del proceso de salting y respuesta de análisis en libreta.',
          development: 'Explicación de ataques precalculados (Rainbow Tables), demostración conceptual del salting y redacción en libreta.',
          closure: 'Preparación para el laboratorio práctico en Cloud Shell.',
          faq: [
            { q: '¿Qué es una Tabla Rainbow?', a: 'Una base de datos gigantesca con millones de contraseñas ya convertidas a hash para buscar coincidencias al instante.' }
          ],
          sello: {
            num: 'Sello 2 (Parte 1)',
            desc: 'Apunte formal de Salting y esquema de defensa contra Tablas Rainbow.'
          }
        },
        {
          id: 'H03',
          label: 'Sesión 02 (Jueves 22 Oct · Hora 2)',
          title: 'Taller en Cloud Shell: Salting con OpenSSL y Candado 600',
          hook: 'Es hora de poner a prueba la sal en consola: veremos cómo dos alumnos con la misma contraseña generan dos hashes totalmente distintos gracias a la sal de OpenSSL.',
          start: '¿Cómo generamos una sal en Linux y cómo altera el hash de nuestra contraseña?',
          dictationTitle: 'GENERACIÓN DE SAL Y BÓVEDA DE CREDENCIALES EN LINUX',
          dictation: 'En entornos GNU/Linux y servidores de autenticación, la generación de sal se realiza mediante fuentes criptográficas del sistema operativo (/dev/urandom). Al acoplar el generador pseudoaleatorio con OpenSSL mediante el comando openssl rand -hex, el sistema crea valores únicos e irrepetibles para cada usuario. La persistencia de estas credenciales se protege mediante el principio de mínimo privilegio en el sistema de archivos, restringiendo los permisos con chmod 600 para impedir la lectura no autorizada por otros procesos o usuarios locales.',
          workBlock: {
            duration: '25 minutos',
            title: 'Laboratorio de Salting en Google Cloud Shell',
            steps: [
              'Anotar título centrado (tamaño 20) y dictado oficial justificado (tamaño 14).',
              'Calcular hash sin sal: echo -n "conalep123" | md5sum (anotar huella en libreta).',
              'Generar sal aleatoria: SAL=$(openssl rand -hex 4); echo "Sal: $SAL".',
              'Calcular hash con sal: echo -n "conalep123$SAL" | md5sum (comprobar el cambio radical).',
              'Guardar credencial: echo "Usuario: alumno501 | Sal: $SAL" >> credenciales_seguras.txt && chmod 600 credenciales_seguras.txt.'
            ]
          },
          visualExample: {
            title: 'Flujo del Laboratorio en Terminal',
            badge: 'Laboratorio de Ciberdefensa',
            description: 'Comandos ejecutados en consola:',
            mockup: '┌─────────────────────────────────────────────────────────────────────────────┐\n│ $ echo -n "conalep123" | md5sum                                             │\n│ d2b78a946...  ➔ HASH ESTÁTICO VULNERABLE                                    │\n│                                                                             │\n│ $ SAL=$(openssl rand -hex 4)                                                │\n│ $ echo "Sal: $SAL"                                                          │\n│ Sal: 4f8b2e1a                                                               │\n│                                                                             │\n│ $ echo -n "conalep123$SAL" | md5sum                                         │\n│ c9a103f75...  ➔ HASH ÚNICO BLINDADO CON EFECTO AVALANCHA                    │\n│                                                                             │\n│ $ chmod 600 credenciales_seguras.txt ➔ BÓVEDA PRIVADA DEL DUEÑO             │\n└─────────────────────────────────────────────────────────────────────────────┘'
          },
          terminalRadar: 'echo -n "clave$SAL" | md5sum ➔ Hash personalizado inmune a tablas precalculadas',
          learningResult: 'El estudiante aplica técnicas prácticas de salting y gestión de permisos en consola para salvaguardar credenciales.',
          identification: 'Tema: Práctica de Salting con OpenSSL. Evidencia: Captura de comandos y salida de consola anotada en libreta.',
          development: 'Ejecución del taller en Google Cloud Shell, comprobación del Efecto Avalancha y blindaje del archivo con chmod 600.',
          closure: 'Revisión de pantallas, sellado del Sello 2 y conclusión.',
          faq: [
            { q: '¿Por qué usamos echo -n?', a: 'El parámetro -n evita agregar un salto de línea invisible al final del texto para que el hash sea exacto.' }
          ],
          sello: {
            num: 'Sello 2',
            desc: 'Práctica de Salting con OpenSSL, hashes comparados y archivo blindado en libreta.'
          }
        },
        {
          id: 'H04',
          label: 'Sesión 03 (Viernes 23 Oct · Hora 1)',
          title: 'El Escudo Multifactor (MFA / 2FA) y Tokens de Tiempo TOTP',
          hook: 'Si un hacker adivina tu contraseña y tu sal, ¿está todo perdido? NO, si tienes activado el Escudo Multifactor. Aunque tenga tu clave, el sistema le pedirá un código de 6 dígitos que solo existe en tu celular y cambia cada 30 segundos.',
          start: '¿Cuáles son los 3 factores de autenticación y cómo un código TOTP detiene una intrusión?',
          dictationTitle: 'EL ESCUDO MULTIFACTOR (MFA) Y ALTA DISPONIBILIDAD DE ACCESOS',
          dictation: 'La Autenticación Multifactor (MFA/2FA) es una salvaguarda de control de acceso que exige validar al menos dos categorías probatorias independientes antes de autorizar el ingreso a un sistema: 1) Factor de Conocimiento: Algo que sabes (contraseña o PIN); 2) Factor de Posesión: Algo que tienes (teléfono móvil, llave física FIDO o token generador de contraseñas de un solo uso TOTP); 3) Factor de Inherencia: Algo que eres (huella dactilar, biometría facial o de iris). La implementación de MFA neutraliza el 99.9% de los ataques de usurpación de identidad y fuerza bruta, garantizando la defensa en profundidad institucional.',
          workBlock: {
            duration: '25 minutos',
            title: 'Infografía de los 3 Factores de Autenticación en Libreta',
            steps: [
              'Anotar título centrado (tamaño 20) y dictado oficial justificado (tamaño 14).',
              'Dibujar los 3 pilares de MFA: 1) Lo que sabes, 2) Lo que tienes, 3) Lo que eres.',
              'Anotar la definición de TOTP (Time-based One-Time Password) y su ciclo de 30 segundos.',
              'Concluir: ¿Por qué un código por SMS es menos seguro que una app como Google Authenticator? (R: Por ataques de clonación SIM).'
            ]
          },
          visualExample: {
            title: 'Los 3 Factores de Autenticación (MFA)',
            badge: 'Control de Accesos',
            description: 'Infografía para plasmar en libreta:',
            mockup: '┌─────────────────────────────────────────────────────────────────────────────┐\n│                   🛡️ LOS 3 FACTORES DE AUTENTICACIÓN (MFA)                  │\n├─────────────────────────────────────────────────────────────────────────────┤\n│ 1. FACTOR DE CONOCIMIENTO (Algo que SABES):                                 │\n│    • Contraseñas alfanuméricas, PIN de 4 dígitos, respuestas secretas.      │\n├─────────────────────────────────────────────────────────────────────────────┤\n│ 2. FACTOR DE POSESIÓN (Algo que TIENES):                                    │\n│    • Celular con Google Authenticator (TOTP que cambia cada 30 segundos).   │\n│    • Llave física USB FIDO / YubiKey.                                       │\n├─────────────────────────────────────────────────────────────────────────────┤\n│ 3. FACTOR DE INHERENCIA (Algo que ERES · Biometría):                        │\n│    • Sensor de huella dactilar, reconocimiento facial 3D, escáner de iris.  │\n├─────────────────────────────────────────────────────────────────────────────┤\n│ ➔ Regla de Oro: [ Contraseña ] + [ Celular ] = 100% Protegido               │\n└─────────────────────────────────────────────────────────────────────────────┘'
          },
          terminalRadar: 'MFA Defense ➔ [ Conocimiento ] + [ Posesión ] neutraliza el 99.9% de ataques automatizados',
          learningResult: 'El estudiante diseña esquemas de autenticación multifactor diferenciando los factores probatorios para proteger accesos críticos.',
          identification: 'Tema: Autenticación Multifactor y Tokens TOTP. Evidencia: Infografía de los 3 factores en libreta.',
          development: 'Explicación interactiva de factores de prueba, demostración del funcionamiento de TOTP y dibujo de infografía en libreta.',
          closure: 'Preparación de dispositivos para el Kahoot de cierre de semana.',
          faq: [
            { q: '¿Qué significa TOTP?', a: 'Time-based One-Time Password: una contraseña de un solo uso que expira automáticamente cada 30 segundos.' }
          ],
          sello: {
            num: 'Sello 3 (Parte 1)',
            desc: 'Infografía de los 3 Factores de Autenticación y esquema TOTP en libreta.'
          }
        },
        {
          id: 'H05',
          label: 'Sesión 03 (Viernes 23 Oct · Hora 2)',
          title: '🏆 Gran Kahoot de Cierre Semana 10 y Sellado Final',
          hook: 'Llegó el momento de la verdad: HTTP vs HTTPS, Salting con OpenSSL, Tablas Rainbow y los 3 factores del Escudo MFA. Abran kahoot.it y compitan por el podio de 501.',
          start: '¿Quién dominará el podio en la batalla de ciberseguridad de la Semana 10?',
          dictationTitle: 'EVALUACIÓN INTEGRAL DE PROTOCOLOS, INTEGRIDAD Y AUTENTICACIÓN',
          dictation: 'La evaluación formativa al cierre de la Semana 10 consolida los principios técnicos del RA 2.2: el blindaje del transporte de datos mediante TLS, la neutralización de ataques de diccionario precalculados con la técnica de Salting, y la implementación de controles de acceso robustos mediante Autenticación Multifactor. El dominio de estos mecanismos constituye la base de la ingeniería de ciberdefensa profesional.',
          workBlock: {
            duration: '30 minutos',
            title: 'Batalla Gamificada Kahoot y Cierre Semanal',
            steps: [
              'Ingresar a kahoot.it con el PIN proyectado en pantalla.',
              'Competir en los 20 reactivos oficiales sobre Protocolos TLS, Salting y Escudo MFA.',
              'Anotar puntaje, podio y conclusiones en libreta.',
              'Revisión final de evidencias de la semana y estampado del Sello 3.'
            ]
          },
          learningResult: 'El estudiante demuestra dominio integral de los conceptos de protocolos seguros, salting y autenticación en una evaluación gamificada.',
          identification: 'Tema: Evaluación Formativa Integral Semana 10. Evidencia: Podio de Kahoot y libreta sellada con Sello 3.',
          development: 'Desarrollo de la sesión interactiva en Kahoot con 20 reactivos, retroalimentación técnica de reactivos clave y sellado de libretas.',
          closure: 'Firma y sellado del Sello 3, felicitación al grupo y cierre de semana.',
          faq: [
            { q: '¿Cómo subo mi evidencia a Classroom?', a: 'Toma foto de tus libretas con los sellos 1, 2 y 3 y súbela a la tarea de la Semana 10 (código j6bnku3j).' }
          ],
          sello: {
            num: 'Sello 3',
            desc: 'Infografía de los 3 Factores de MFA + Podio de Kahoot Semana 10 registrado en libreta.'
          }
        }
      ],
      sessions: [
        {
          id: 'S01',
          label: 'Sesión 01',
          duration: '1 hora',
          title: 'La Trampa de las Redes Públicas: HTTP (80) vs HTTPS (443)',
          hourIds: ['H01'],
          product: 'Prueba forense con curl e infografía comparativa HTTP vs HTTPS en libreta.',
          unlockDate: '2026-10-21',
          unlockLabel: 'Miércoles 21 de Octubre (18:30 hrs)',
        },
        {
          id: 'S02',
          label: 'Sesión 02',
          duration: '2 horas',
          title: 'Tablas Rainbow y la Técnica Criptográfica de Salting con OpenSSL',
          hourIds: ['H02', 'H03'],
          product: 'Práctica de Salting con OpenSSL, comparación de hashes y archivo blindado con chmod 600.',
          unlockDate: '2026-10-22',
          unlockLabel: 'Jueves 22 de Octubre (16:50 hrs)',
        },
        {
          id: 'S03',
          label: 'Sesión 03',
          duration: '2 horas',
          title: 'El Escudo Multifactor (MFA / 2FA) y Gran Kahoot Semana 10',
          hourIds: ['H04', 'H05'],
          product: 'Infografía de los 3 factores de autenticación, esquema TOTP y podio de Kahoot registrado.',
          unlockDate: '2026-10-23',
          unlockLabel: 'Viernes 23 de Octubre (18:30 hrs)',
        },
      ],
    },
    {
      id: 'W11',
      label: 'Semana 11',
      dateRange: '26 - 30 Oct',
      status: 'Histórico',
      corteId: 'C2',
      raId: 'RA 2.2',
      title: 'Ingeniería Social, Phishing y Enlaces Trampa (Typosquatting)',
      result: 'Identifica técnicas de manipulación psicológica (Ingeniería Social, Phishing y Spear Phishing) y detecta enlaces fraudulentos mediante inspección visual y en consola Linux.',
      pdfUrl: './pdf/Guia_Laboratorio_Forense_Linux_MTCS_Semana07.pdf',
      identification: {
        place: 'Aula de Clase y Laboratorio de Cómputo',
        modality: 'Trabajo individual en libreta, Linux Shell y evaluación Kahoot (2 sesiones por suspensión del viernes 30 Oct)',
        product: 'Cuadro de los 3 Anzuelos Mentales, Tabla de 2 Columnas en Linux Shell, Las 5 Banderas Rojas y Gran Kahoot Semana 11',
      },
      notices: [
        'Ajuste Oficial de Calendario: Viernes 30 de Octubre Suspensión de Actividades (Semana concentrada en Miércoles y Jueves).',
        'Miércoles 28 Oct (Sesión 01 · 1 hr): Ingeniería Social, Phishing y Cuadro de los 3 Anzuelos Mentales (Sello 1).',
        'Jueves 29 Oct (Sesión 02 · 2 hrs): Enlaces Trampa (Typosquatting) en Linux Shell, Las 5 Banderas Rojas y Gran Kahoot Semana 11 (Sellos 2 y 3).',
      ],
      hours: [
        {
          id: 'H01',
          label: 'Sesión 01 (Miércoles 28 Oct · 1 Hora)',
          title: 'Ingeniería Social, Phishing y los 3 Botones Mentales',
          hook: 'Cuando la computadora ya está blindada con HTTPS, Salting y MFA, el hacker ya no ataca a la máquina: ataca a la persona disfrazándose de banco, beca o jefe para que tú solito entregues tu clave.',
          start: '¿Por qué las personas caen en estafas digitales y cuáles son los 3 botones mentales que usa un atacante?',
          dictationTitle: 'INGENIERÍA SOCIAL, PHISHING Y GATILLOS DE MANIPULACIÓN',
          dictation: 'La Ingeniería Social es la técnica de manipular psicológicamente a una persona para que ella misma entregue sus contraseñas o información confidencial sin necesidad de hackear el sistema. Su método más común es el Phishing (pesca masiva), que envía millones de mensajes falsos iguales esperando que alguien caiga, mientras que el Spear Phishing (pesca con arpón) investiga a una sola víctima para enviarle un engaño personalizado con su nombre real y datos de su escuela o trabajo. Para lograr que la víctima actúe rápido y sin pensar, los estafadores presionan tres botones mentales: 1) Urgencia o Miedo (amenazar con cancelar una cuenta o beca en pocos minutos); 2) Curiosidad o Premio (prometer regalos, sorteos falsos o chismes); y 3) Autoridad (fingir ser un jefe, banco o director escolar para exigir obediencia inmediata).',
          workBlock: {
            duration: '25 minutos',
            title: 'Cuadro de los 3 Anzuelos de la Ingeniería Social en Libreta',
            steps: [
              'Anotar título centrado (tamaño 20) y dictado oficial justificado (tamaño 14).',
              'Trazar en libreta el Cuadro de los 3 Anzuelos Mentales (Urgencia/Miedo, Premio/Codicia y Autoridad).',
              'Escribir un ejemplo de mensaje trampa escolar para cada botón mental y la acción correcta para evitarlo.',
              'Revisión y estampado del Sello 1.'
            ]
          },
          visualExample: {
            title: 'Los 3 Anzuelos de la Ingeniería Social',
            badge: 'Factor Humano',
            description: 'Cuadro comparativo para plasmar en libreta:',
            mockup: '┌─────────────────────────────────────────────────────────────────────────────┐\n│                🎣 LOS 3 ANZUELOS DE LA INGENIERÍA SOCIAL                    │\n├──────────────────────┬───────────────────────────────────┬──────────────────┤\n│ BOTÓN MENTAL         │ EJEMPLO DE MENSAJE TRAMPA         │ ¿CÓMO LO EVITO?  │\n├──────────────────────┼───────────────────────────────────┼──────────────────┤\n│ 1. URGENCIA / MIEDO  │ "¡Tu beca CONALEP se cancelará    │ Respirar, no dar │\n│    (Te asusta)       │  en 15 min si no entras aquí!"    │ clic y preguntar │\n├──────────────────────┼───────────────────────────────────┼──────────────────┤\n│ 2. PREMIO / CODICIA  │ "¡Felicidades! Ganaste un iPhone, │ Desconfiar: nada │\n│    (Te emociona)     │  pon tu clave para reclamarlo."   │ es gratis en red │\n├──────────────────────┼───────────────────────────────────┼──────────────────┤\n│ 3. AUTORIDAD         │ "Soy el Director, pásame el       │ Confirmar en     │\n│    (Te intimida)     │  código de 6 dígitos que te llegó"│ persona o llamar │\n└──────────────────────┴───────────────────────────────────┴──────────────────┘'
          },
          terminalRadar: 'Regla de Oro: Ninguna institución legítima (Banco, Gobierno o CONALEP) te pedirá jamás tu contraseña ni tu código de 6 dígitos por mensaje.',
          learningResult: 'El estudiante distingue entre Phishing masivo y Spear Phishing, identificando los gatillos psicológicos de manipulación.',
          identification: 'Tema: Ingeniería Social y Phishing. Evidencia: Dictado y Cuadro de los 3 Anzuelos en libreta.',
          development: 'Explicación con ejemplos cotidianos de WhatsApp y becas, registro de dictado y elaboración del cuadro de anzuelos.',
          closure: 'Revisión de libretas y firma del Sello 1.',
          faq: [
            { q: '¿Qué es el Smishing?', a: 'Es el mismo ataque de Phishing pero enviado por mensaje SMS o WhatsApp en lugar de correo electrónico.' }
          ],
          sello: {
            num: 'Sello 1',
            desc: 'Dictado de Ingeniería Social y Cuadro de los 3 Anzuelos en libreta.'
          }
        },
        {
          id: 'H02',
          label: 'Sesión 02 (Jueves 29 Oct · Hora 1)',
          title: 'Enlaces Trampa (Typosquatting) y Tabla de 2 Columnas en Linux Shell',
          hook: '¿Cómo engaña un hacker a tus ojos cuando miras rápido el celular? Cambia la letra "o" por un cero (faceb00k.com) o junta una "r" y una "n" para simular una "m" (rnicrosoft.com). Hoy programaremos una tabla de 2 columnas en Linux que caza enlaces falsos.',
          start: '¿Qué es el Typosquatting y cómo podemos detectar dominios falsos en una tabla de 2 columnas en la terminal?',
          dictationTitle: 'ENLACES FALSOS Y SUPLANTACIÓN DE DOMINIOS (TYPOSQUATTING)',
          dictation: 'El Typosquatting (secuestro por error tipográfico) es una trampa visual que consiste en registrar nombres de páginas web casi idénticos a los sitios oficiales para robar contraseñas. Los atacantes aprovechan que las personas leen rápido en el celular y cambian letras parecidas: sustituyen la letra "o" por un cero (g00gle.com), cambian la letra "m" por una "r" y una "n" juntas (rnicrosoft.com), o agregan palabras con guiones (becas-conalep-gob.xyz). Antes de escribir cualquier contraseña, la regla de oro es revisar letra por letra el dominio principal de la página.',
          workBlock: {
            duration: '25 minutos',
            title: 'Práctica en Linux Shell: Tabla Detectora de 2 Columnas',
            steps: [
              'Anotar título centrado (tamaño 20) y dictado oficial justificado (tamaño 14).',
              'Ejecutar en Linux Shell el bucle comparador de enlaces reales vs enlaces con números cero o terminación .xyz.',
              'Copiar en la libreta la Tabla de 2 Columnas generada por la terminal (Columna 1: Enlace | Columna 2: Veredicto).',
              'Revisión y firma del Sello 2.'
            ]
          },
          visualExample: {
            title: 'Tabla de 2 Columnas en Linux Shell (Detector Typosquatting)',
            badge: 'Laboratorio Linux Shell',
            description: 'Comando y tabla de 2 columnas para plasmar en libreta:',
            mockup: '┌─────────────────────────────────────────────────────────────────────────────┐\n│ $ for url in "google.com" "g00gle.com" "facebook.com" "faceb00k.com" \\      │\n│              "conalep.edu.mx" "c0nalep-beca.xyz"; do                        │\n│     if [[ "$url" == *"0"* || "$url" == *".xyz"* ]]; then                    │\n│       printf "%-20s | 🚨 FALSO (TRAMPA DETECTADA)\\n" "$url"                 │\n│     else                                                                    │\n│       printf "%-20s | ✅ SITIO OFICIAL SEGURO\\n" "$url"                     │\n│     fi                                                                      │\n│   done                                                                      │\n├──────────────────────┬──────────────────────────────────────────────────────┤\n│ COLUMNA 1: ENLACE    │ COLUMNA 2: VEREDICTO AUTOMÁTICO                      │\n├──────────────────────┼──────────────────────────────────────────────────────┤\n│ google.com           │ ✅ SITIO OFICIAL SEGURO                              │\n│ g00gle.com           │ 🚨 FALSO (TRAMPA DETECTADA - Usa ceros)              │\n│ facebook.com         │ ✅ SITIO OFICIAL SEGURO                              │\n│ faceb00k.com         │ 🚨 FALSO (TRAMPA DETECTADA - Usa ceros)              │\n│ conalep.edu.mx       │ ✅ SITIO OFICIAL SEGURO                              │\n│ c0nalep-beca.xyz     │ 🚨 FALSO (TRAMPA DETECTADA - Dominio .xyz)           │\n└──────────────────────┴──────────────────────────────────────────────────────┘'
          },
          terminalRadar: 'Typosquatting Detector ➔ Revisa siempre ceros por letras "o" (0/o), "i" mayúscula por "l" (I/l) y terminaciones extrañas (.xyz, .top).',
          learningResult: 'El estudiante inspecciona URLs para identificar suplantación tipográfica (Typosquatting) apoyándose en scripts básicos de consola.',
          identification: 'Tema: Typosquatting y Análisis de Enlaces. Evidencia: Dictado y Tabla de 2 columnas en libreta.',
          development: 'Demostración visual de dominios engañosos, ejecución de la tabla de 2 columnas en Linux Shell y registro en libreta.',
          closure: 'Revisión de la tabla en libreta y estampado del Sello 2.',
          faq: [
            { q: '¿Si un enlace trampa tiene candado HTTPS significa que ya es real?', a: '¡No! Hoy los estafadores también pueden ponerle candado HTTPS gratuito a sus páginas falsas. Por eso debes leer bien las letras del nombre.' }
          ],
          sello: {
            num: 'Sello 2',
            desc: 'Dictado de Typosquatting y Tabla de 2 Columnas de enlaces verificada en libreta.'
          }
        },
        {
          id: 'H03',
          label: 'Sesión 02 (Jueves 29 Oct · Hora 2)',
          title: 'Reto "Las 5 Banderas Rojas" y 🏆 Gran Kahoot Semana 11',
          hook: 'Antes de irnos al puente del viernes 30, pondremos a prueba su ojo de detective: encontraremos las 5 Banderas Rojas ocultas en un mensaje falso de becas y competiremos en el Gran Kahoot "¿Real o Estafa?".',
          start: '¿Cuáles son las 5 señales de alerta en un correo fraudulento y quién dominará el podio del Kahoot Semana 11?',
          dictationTitle: 'AUDITORÍA DE LAS 5 BANDERAS ROJAS Y REGLAS DE VERIFICACIÓN',
          dictation: 'Todo mensaje de Phishing deja cinco rastros o Banderas Rojas que permiten descubrir el engaño antes de hacer clic: 1) Remitente extraño que no pertenece a la institución oficial; 2) Saludo genérico como "Estimado usuario" porque desconocen tu nombre real; 3) Amenaza urgente que exige actuar en pocos minutos; 4) Enlace falsificado mediante Typosquatting o sin protocolo seguro; y 5) Solicitud directa de contraseñas o códigos de verificación. Ante cualquier alerta, la regla defensiva es nunca abrir el enlace recibido y verificar la información por un canal independiente.',
          workBlock: {
            duration: '30 minutos',
            title: 'Detección de las 5 Banderas Rojas y Batalla Kahoot Semana 11',
            steps: [
              'Anotar título centrado (tamaño 20) y dictado oficial justificado (tamaño 14).',
              'Identificar y anotar en libreta las 5 Banderas Rojas del correo simulado de Becas proyectado en clase.',
              'Ingresar a kahoot.it para competir en los 20 reactivos de la Semana 11 ("¿Real o Estafa?").',
              'Registrar puntaje obtenido y pasar por el Sello 3 (Cierre Semanal).'
            ]
          },
          visualExample: {
            title: 'Radiografía de una Estafa: Las 5 Banderas Rojas',
            badge: 'Auditoría Anti-Phishing',
            description: 'Mensaje trampa analizado en clase:',
            mockup: '┌─────────────────────────────────────────────────────────────────────────────┐\n│ 📧 De: soporte-urgente@becas-benitojuarez.xyz          [🚩 1. Correo raro]  │\n│ Para: Estimado Alumno Seleccionado                     [🚩 2. Sin tu nombre]│\n│ Asunto: ¡ÚLTIMO AVISO! TU BECA SERÁ CANCELADA HOY      [🚩 3. Mete miedo]   │\n├─────────────────────────────────────────────────────────────────────────────┤\n│ Detectamos un error en tu pago. Tienes 15 minutos para entrar al siguiente  │\n│ enlace y escribir tu contraseña y el código de 6 dígitos de tu celular:     │\n│                                                                             │\n│ 👉 http://www.gob-mx-becas2026.xyz/login               [🚩 4. Sin HTTPS/.xyz]│\n│                                                                             │\n│ Si no envías tu contraseña y código ahorita, perderás el apoyo.             │\n│                                                        [🚩 5. Pide claves]  │\n└─────────────────────────────────────────────────────────────────────────────┘'
          },
          terminalRadar: 'Kahoot Semana 11 (20 Reactivos) ➔ Ingeniería Social, Phishing vs Spear Phishing, Botones Mentales y Typosquatting.',
          learningResult: 'El estudiante audita mensajes sospechosos identificando las 5 banderas rojas y acredita los conocimientos de la Semana 11.',
          identification: 'Tema: Auditoría Anti-Phishing y Evaluación Kahoot. Evidencia: Las 5 Banderas Rojas y podio de Kahoot con Sello 3.',
          development: 'Inspección grupal del mensaje simulado de becas, competencia en vivo en Kahoot y sellado final de libretas.',
          closure: 'Firma del Sello 3 y cierre de actividades previo a la suspensión oficial del viernes 30 de octubre.',
          faq: [
            { q: '¿Habrá sesión el viernes 30 de octubre?', a: 'No, por suspensión oficial de labores las actividades y los 3 sellos de la Semana 11 concluyen el jueves 29 de octubre.' }
          ],
          sello: {
            num: 'Sello 3',
            desc: 'Análisis de las 5 Banderas Rojas + Puntaje del Kahoot Semana 11 en libreta.'
          }
        }
      ],
      sessions: [
        {
          id: 'S01',
          label: 'Sesión 01',
          duration: '1 hora',
          title: 'Ingeniería Social, Phishing y los 3 Botones Mentales',
          hourIds: ['H01'],
          product: 'Dictado oficial y Cuadro de los 3 Anzuelos Mentales en libreta (Sello 1).',
          unlockDate: '2026-10-28',
          unlockLabel: 'Miércoles 28 de Octubre (18:30 hrs)',
        },
        {
          id: 'S02',
          label: 'Sesión 02',
          duration: '2 horas',
          title: 'Enlaces Trampa (Typosquatting), Las 5 Banderas Rojas y Gran Kahoot Semana 11',
          hourIds: ['H02', 'H03'],
          product: 'Tabla de 2 Columnas en Linux Shell, las 5 Banderas Rojas y podio de Kahoot Semana 11 (Sellos 2 y 3).',
          unlockDate: '2026-10-29',
          unlockLabel: 'Jueves 29 de Octubre (16:50 hrs)',
        },
      ],
    },
    {
      id: 'W12',
      label: 'Semana 12',
      dateRange: '02 - 06 Nov',
      status: 'En curso',
      corteId: 'C3',
      raId: 'RA 3.1',
      title: 'Cierre de 2° Corte y Proyecto Videojuego: Sprites Pixel-Art en Construct 3',
      result: 'Comprende la estructura gráfica de un motor de videojuegos 2D y diseña el catálogo de 6 sprites en cuadrícula de 16×16 píxeles con animaciones, puntos de origen y polígonos de colisión en Construct 3.',
      htmlUrl: './html/Manual_Videojuegos_Construct3.html',
      identification: {
        place: 'Aula de Clase y Laboratorio de Cómputo',
        modality: 'Trabajo individual en libreta y en editor web Construct 3 (editor.construct.net)',
        product: 'Ficha Técnica en libreta, proyecto .c3p con los 6 sprites de 16×16 px animados y Gran Kahoot Semana 12',
      },
      notices: [
        'Inicio oficial del Tercer Corte (35% · Unidad 3: Programación y Videojuegos en Construct 3).',
        'Miércoles 04 Nov (Sesión 01 · 1 hr): Cierre de promedios 2° Corte + ¿Qué es un Sprite, FPS y Punto de Origen? (Sello 1).',
        'Jueves 05 Nov (Sesión 02 · 2 hrs): Lienzo 640×360, Héroe Analista (16×16 px) y animaciones Idle, Run y Jump (Sello 2).',
        'Viernes 06 Nov (Sesión 03 · 2 hrs): Bot Malware, Llave TLS, Cristal Salting, Bloques y Gran Kahoot Semana 12 (Sello 3).',
      ],
      hours: [
        {
          id: 'H01',
          label: 'Sesión 01 (Miércoles 04 Nov · 1 Hora)',
          title: 'Cierre de 2° Corte e Introducción a los Motores de Videojuegos 2D (Construct 3)',
          hook: '¡Bienvenidos al Tercer Corte! Durante las próximas 4 semanas todo lo que aprendieron de ciberseguridad cobrará vida en su propio videojuego 2D llamado CyberDefender usando Construct 3.',
          start: '¿Qué es un Sprite, cómo funcionan los Fotogramas por Segundo (FPS) y por qué el Punto de Origen va en los pies?',
          dictationTitle: 'FUNDAMENTOS DE VIDEOJUEGOS 2D: SPRITES, ANIMACIONES Y COLISIONES',
          dictation: 'Un motor de videojuegos como Construct 3 es una plataforma que permite programar mundos interactivos mediante objetos gráficos y reglas lógicas sin escribir miles de líneas de código. El elemento visual básico de todo juego 2D es el Sprite, que consiste en una imagen bidimensional capaz de moverse e interactuar en la pantalla. Para darle vida a un Sprite se utilizan Fotogramas (Frames) que cambian rápidamente creando la ilusión de movimiento (como respirar, correr o saltar). Todo Sprite requiere dos ajustes técnicos esenciales: 1) El Punto de Origen (Origin), que es el punto exacto de apoyo donde se mide la posición del personaje (ubicado siempre en la planta de los pies para que pise el suelo correctamente); y 2) El Polígono de Colisión (Hitbox), que es la caja invisible que detecta cuando el jugador toca una plataforma, recoge una llave o choca contra un enemigo.',
          workBlock: {
            duration: '25 minutos',
            title: 'Ficha Técnica del Proyecto CyberDefender en Libreta',
            steps: [
              'Confirmar calificación final del Segundo Corte y hacer el separador del Tercer Corte en la libreta.',
              'Anotar título centrado (tamaño 20) y dictado oficial justificado (tamaño 14).',
              'Trazar en la libreta la Ficha Técnica de CyberDefender con los 6 sprites que crearemos esta semana.',
              'Revisión y firma del Sello 1.'
            ]
          },
          visualExample: {
            title: 'Ficha Técnica de Mi Videojuego: CyberDefender',
            badge: 'Unidad 3 · Construct 3',
            description: 'Ficha de planificación para plasmar en libreta:',
            mockup: '┌─────────────────────────────────────────────────────────────────────────────┐\n│             🎮 FICHA TÉCNICA DE MI PROYECTO: "CYBERDEFENDER"                │\n├─────────────────────────────────────────────────────────────────────────────┤\n│ • Motor Oficial: Construct 3 (editor.construct.net)                         │\n│ • Resolución de Ventana (Viewport): 640 × 360 píxeles (16:9 Retro)          │\n│ • Tamaño de los Sprites: Cuadrícula de 16 × 16 píxeles (Muestreo: Point)    │\n├─────────────────────────────────────────────────────────────────────────────┤\n│ • CATÁLOGO DE 6 SPRITES A CREAR ESTA SEMANA:                                │\n│   1. 🟩 Jugador (Héroe): Analista con visor verde #00ff66 (Origen: Tecla 2).│\n│   2. 🔴 Malware_Bot: Dron rojo #ef4444 con sensor amarillo (Origen: Tecla 5)│\n│   3. 🟡 Llave_TLS: Candado dorado #facc15 para abrir puerto 443.            │\n│   4. 🔵 Cristal_Salting: Gema azul #06b6d4 que otorga escudo de 6 seg.      │\n│   5. ⬜ Piso_Servidor y Puerta_Servidor: Bloques sólidos del datacenter.    │\n└─────────────────────────────────────────────────────────────────────────────┘'
          },
          terminalRadar: 'Construct 3 Setup ➔ Viewport: 640×360 px | Orientación: Landscape | Sampling: Point (Nitidez Pixel-Art)',
          learningResult: 'El estudiante comprende los conceptos de Sprite, FPS, Punto de Origen y Polígono de Colisión dentro de un motor 2D.',
          identification: 'Tema: Fundamentos de Videojuegos 2D. Evidencia: Separador de 3er Corte, dictado y Ficha Técnica en libreta.',
          development: 'Cierre de promedios del 2° Corte, presentación del Manual Interactivo de Construct 3 y registro de la Ficha Técnica.',
          closure: 'Revisión de libretas y estampado del Sello 1.',
          faq: [
            { q: '¿Necesito instalar algún programa pesado en mi computadora?', a: 'No, Construct 3 funciona 100% en el navegador web entrando a editor.construct.net.' }
          ],
          sello: {
            num: 'Sello 1',
            desc: 'Separador del 3er Corte, Dictado de Sprites y Ficha Técnica en libreta.'
          }
        },
        {
          id: 'H02',
          label: 'Sesión 02 (Jueves 05 Nov · Hora 1)',
          title: 'Lienzo Retro 640×360 y Trazo del Héroe Analista (16×16 px)',
          hook: 'Hoy abrimos Construct 3 y dibujamos a nuestro protagonista píxel por píxel usando la plantilla de 16×16 del Manual del Portal.',
          start: '¿Cómo configuramos un proyecto Pixel-Art nítido y dónde colocamos el Punto de Origen del Héroe?',
          dictationTitle: 'CONFIGURACIÓN DE VIEWPORT Y MATRIZ PIXEL-ART DEL JUGADOR',
          dictation: 'Para que un videojuego de estética Pixel-Art conserve bordes nítidos al escalarse en pantallas modernas, el proyecto debe configurarse en una resolución base de 640 por 360 píxeles (relación 16:9) con el modo de muestreo en Punto (Point). El personaje principal se diseña sobre un lienzo de 16 por 16 píxeles utilizando una paleta de alto contraste (traje oscuro #0f172a y visor verde neón #00ff66), fijando su Punto de Origen en la base inferior central mediante la tecla numérica 2.',
          workBlock: {
            duration: '30 minutos',
            title: 'Práctica en Construct 3: Creación del Proyecto y del Héroe',
            steps: [
              'Entrar a editor.construct.net y abrir a un lado el Manual de Videojuegos del Portal CONALEP.',
              'Crear proyecto CyberDefender_Apellido_501 (Viewport 640×360, Landscape, Sampling: Point).',
              'Insertar Sprite Jugador (16×16 px) y copiar el diseño del Analista con visor verde.',
              'Seleccionar la herramienta Origin y presionar la tecla 2 (base de las botas).'
            ]
          },
          visualExample: {
            title: 'Plantilla 16×16 del Héroe Analista',
            badge: 'Editor de Sprites',
            description: 'Cuadrícula oficial de 16×16 píxeles (T=#0f172a, V=#00ff66, P=#fcd34d, B=#334155):',
            mockup: '      0 1 2 3 4 5 6 7 8 9 A B C D E F\nFila 0: . . . . . T T T T T T . . . . .  <- Casco superior\nFila 1: . . . . T T T T T T T T . . . .\nFila 2: . . . . T P P P P P P T . . . .  <- Rostro\nFila 3: . . . . T V V V V V V T . . . .  <- Visor Neón (#00ff66)\nFila 4: . . . . T P P P P P P T . . . .\nFila 5: . . . . . T T T T T T . . . . .\nFila 6: . . B B T T T T T T T T B B . .  <- Hombros y Guantes\nFila 7: . . B B T T T T T T T T B B . .\nFila 8: . . . . T T V V V V T T . . . .  <- Núcleo verde\nFila 9: . . . . T T T T T T T T . . . .\nFila A: . . . . T T T . . T T T . . . .  <- Piernas\nFila B: . . . . T T T . . T T T . . . .\nFila C: . . . . T T T . . T T T . . . .\nFila D: . . . . B B B . . B B B . . . .\nFila E: . . . B B B B . . B B B B . . .  <- Botas\nFila F: . . . B B B B . . B B B B . . .  <- Suelas (Origen: Tecla 2)'
          },
          terminalRadar: 'Regla de Oro del Origen ➔ Presiona Tecla 2 en el teclado numérico para anclar en los pies (X:8, Y:16).',
          learningResult: 'El estudiante configura el entorno de Construct 3 y traza el sprite del protagonista con su punto de anclaje correcto.',
          identification: 'Tema: Lienzo Pixel-Art y Trazo del Héroe. Evidencia: Sprite Jugador en pantalla.',
          development: 'Configuración guiada del proyecto en Construct 3 y dibujo píxel por píxel del protagonista.',
          closure: 'Verificación del punto de origen en los pies antes de pasar a las animaciones.',
          faq: [
            { q: '¿Qué pasa si mi sprite se ve borroso?', a: 'Ve a las Propiedades del Proyecto a la izquierda y cambia Muestreo (Sampling) de Trilinear a Punto (Point).' }
          ],
          sello: {
            num: 'Sello 2 (Parte 1)',
            desc: 'Sprite del Héroe dibujado a 16×16 px con punto de origen en los pies.'
          }
        },
        {
          id: 'H03',
          label: 'Sesión 02 (Jueves 05 Nov · Hora 2)',
          title: 'Animaciones del Héroe (Idle, Run y Jump) y Caja de Colisión',
          hook: 'Un dibujo estático parece una estatua; con solo duplicar el cuadro y mover las botas 1 píxel, nuestro Analista empezará a respirar y correr.',
          start: '¿Cómo creamos las animaciones de Respirar (Idle), Correr (Run) y Saltar (Jump) en Construct 3?',
          dictationTitle: 'CONFIGURACIÓN DE ANIMACIONES Y POLÍGONO DE COLISIÓN EN CONSTRUCT 3',
          dictation: 'En el editor de Construct 3, un personaje utiliza tres secuencias básicas de animación: 1) Idle (Reposo), configurada a 3 fotogramas por segundo (FPS) con la opción Loop (Bucle) activada para simular la respiración cuando el jugador está quieto; 2) Run (Correr), configurada a 8 FPS en bucle alternando la altura de las botas para simular el paso; y 3) Jump (Salto), compuesta por un solo cuadro con las piernas flexionadas sin bucle. Finalmente, el polígono de colisión debe ajustarse a una caja rectangular uniforme para evitar que el personaje se atore en el piso al cambiar de cuadro.',
          workBlock: {
            duration: '30 minutos',
            title: 'Práctica en Construct 3: Las 3 Animaciones del Héroe',
            steps: [
              'Anotar título centrado (tamaño 20) y dictado oficial justificado (tamaño 14).',
              'Renombrar Default a Idle (2 cuadros bajando el torso 1 px, Speed: 3, Loop: Sí).',
              'Crear animación Run (4 cuadros alternando pies, Speed: 8, Loop: Sí) y animación Jump (1 cuadro, Loop: No).',
              'Ajustar el Polígono de Colisión a caja delimitadora (Bounding box), guardar respaldo .c3p y pasar por el Sello 2.'
            ]
          },
          visualExample: {
            title: 'Tabla de Configuración de Animaciones del Jugador',
            badge: 'Animación 2D',
            description: 'Parámetros exactos en el panel Animations de Construct 3:',
            mockup: '┌──────────────────┬────────────┬───────────────┬───────────────────────────────┐\n│ NOMBRE ANIMACIÓN │ CUADROS    │ VELOCIDAD FPS │ BUCLE (LOOP) Y FUNCIÓN        │\n├──────────────────┼────────────┼───────────────┼───────────────────────────────┤\n│ 1. Idle          │ 2 frames   │ 3 FPS         │ ✅ Sí (Respiración quieto)    │\n│ 2. Run           │ 4 frames   │ 8 FPS         │ ✅ Sí (Carrera alternando pie)│\n│ 3. Jump          │ 1 frame    │ 0 FPS         │ ❌ No (Suspendido en el aire) │\n└──────────────────┴────────────┴───────────────┴───────────────────────────────┘'
          },
          terminalRadar: 'Guardado Seguro ➔ Menú ➔ Proyecto ➔ Guardar como ➔ Descargar una copia (.c3p)',
          learningResult: 'El estudiante programa ciclos de animación en bucle y calibra cajas de colisión uniformes en su personaje.',
          identification: 'Tema: Animaciones Idle, Run y Jump. Evidencia: Personaje animado en Construct 3 y apunte en libreta.',
          development: 'Duplicación de fotogramas, edición de píxeles para simular respiración y paso, y ajuste de colisiones.',
          closure: 'Descarga de respaldo .c3p y firma del Sello 2.',
          faq: [
            { q: '¿Cómo duplico un cuadro rápido?', a: 'En la tira inferior de cuadros (Frames), haz clic derecho sobre el cuadro 0 y elige Duplicar.' }
          ],
          sello: {
            num: 'Sello 2',
            desc: 'Héroe con animaciones Idle, Run y Jump funcionando + Dictado en libreta.'
          }
        },
        {
          id: 'H04',
          label: 'Sesión 03 (Viernes 06 Nov · Hora 1)',
          title: 'Diseño del Bot Malware, Llave TLS, Cristal Salting y Bloques',
          hook: 'Un héroe necesita desafíos: hoy dibujaremos al centinela Troyano rojo, el candado dorado TLS del puerto 443, el cristal azul de Salting y los pisos del servidor.',
          start: '¿Cómo diseñamos los enemigos, coleccionables criptográficos y bloques del escenario en 16×16 px?',
          dictationTitle: 'DISEÑO DE ENEMIGOS, ÍTEMS CRIPTOGRÁFICOS Y BLOQUES MODULARES',
          dictation: 'El catálogo visual del videojuego integra la simbología técnica de ciberseguridad en objetos interactivos de 16 por 16 píxeles: 1) Malware_Bot: Utiliza colores de alerta (rojo #ef4444 y amarillo #facc15) con un polígono de colisión reducido al domo central para garantizar jugabilidad justa; 2) Llave_TLS y Cristal_Salting: Coleccionables con punto de origen en el centro exacto (tecla numérica 5) y animación de brillo a 4 FPS; y 3) Piso_Servidor y Puerta_Servidor: Bloques modulares repetibles que conforman la estructura física del centro de datos.',
          workBlock: {
            duration: '35 minutos',
            title: 'Laboratorio en Construct 3: Completar los 6 Sprites del Catálogo',
            steps: [
              'Anotar título centrado (tamaño 20) y dictado oficial justificado (tamaño 14).',
              'Crear el Sprite Malware_Bot (16×16 px) copiando la plantilla roja del Manual del Portal (Origen: Tecla 5).',
              'Crear los Sprites Llave_TLS (candado dorado) y Cristal_Salting (gema azul) con 2 cuadros de brillo.',
              'Crear los Sprites Piso_Servidor y Puerta_Servidor (compuerta chmod 600).'
            ]
          },
          visualExample: {
            title: 'Plantilla 16×16 del Bot de Malware y Llave TLS',
            badge: 'Catálogo de Sprites',
            description: 'Usa el botón del Manual Interactivo en el Portal para ver las 7 cuadrículas a color:',
            mockup: '┌──────────────────────────────────────┬──────────────────────────────────────┐\n│ 🔴 MALWARE_BOT (16×16 px)            │ 🟡 LLAVE_TLS (16×16 px)              │\n├──────────────────────────────────────┼──────────────────────────────────────┤\n│ • Carcasa Roja: #ef4444              │ • Oro Brillante: #facc15             │\n│ • Ojo Escáner:  #facc15              │ • Sombra Bronce: #b45309             │\n│ • Patas Acero:  #94a3b8              │ • Reflejo Luz:   #ffffff             │\n│ • Origen: Tecla 5 (Centro X:8, Y:8)  │ • Origen: Tecla 5 (Centro X:8, Y:8)  │\n│ • Colisión: Solo en la cabeza roja   │ • Animación: 2 cuadros a 4 FPS       │\n└──────────────────────────────────────┴──────────────────────────────────────┘'
          },
          terminalRadar: 'Recurso en Vivo ➔ Abre el Manual de Videojuegos Construct 3 en la cabecera del Portal para copiar cada píxel.',
          learningResult: 'El estudiante completa el catálogo de 6 objetos gráficos de su videojuego aplicando paletas cromáticas y puntos de origen.',
          identification: 'Tema: Catálogo de Sprites de Ciberseguridad. Evidencia: Los 6 objetos creados en el panel de Construct 3.',
          development: 'Dibujo guiado en el editor de Construct 3 apoyándose en los lienzos SVG del Manual del Portal.',
          closure: 'Verificación de los 6 objetos en el proyecto.',
          faq: [
            { q: '¿Dónde veo los dibujos a color grandes para copiarlos?', a: 'Haz clic en el botón del Manual de Construct 3 aquí mismo en el Portal y entra a la pestaña Sem 1: Sprites Pixel-Art.' }
          ],
          sello: {
            num: 'Sello 3 (Parte 1)',
            desc: 'Catálogo completo de 6 sprites diseñados en Construct 3.'
          }
        },
        {
          id: 'H05',
          label: 'Sesión 03 (Viernes 06 Nov · Hora 2)',
          title: '🏆 Gran Kahoot Semana 12 y Entrega del Archivo .c3p',
          hook: '¡Llegó la hora de demostrar quién domina Construct 3! Guardamos nuestro archivo .c3p de la Semana 1 del juego y competimos en el Gran Kahoot de la Semana 12.',
          start: '¿Quién conquistará el primer podio del Tercer Corte en el Kahoot de Construct 3 y Sprites Pixel-Art?',
          dictationTitle: 'AUDITORÍA DEL CATÁLOGO GRÁFICO Y RESPALDO DE PROYECTO (.C3P)',
          dictation: 'Al concluir la primera fase de desarrollo del videojuego, todo proyecto en Construct 3 debe empaquetarse y respaldarse en formato nativo .c3p (Construct 3 Project). La auditoría técnica verifica que los seis objetos gráficos posean dimensiones estandarizadas de 16 por 16 píxeles, muestreo en modo Punto, puntos de origen correctamente anclados y polígonos de colisión optimizados para preparar la programación física del nivel en la siguiente semana.',
          workBlock: {
            duration: '30 minutos',
            title: 'Respaldo .c3p y Batalla Gamificada Kahoot Semana 12',
            steps: [
              'Descargar el archivo del proyecto: Menú ➔ Proyecto ➔ Guardar como ➔ Descargar una copia (Sem12_Sprites_Apellido_501.c3p).',
              'Ingresar a kahoot.it con el PIN proyectado en el pizarrón.',
              'Competir en los 20 reactivos oficiales sobre Construct 3, Sprites, FPS, Origen y Colisiones.',
              'Anotar puntaje en la libreta, revisar los 6 sprites en pantalla con el docente y recibir el Sello 3.'
            ]
          },
          learningResult: 'El estudiante respalda su proyecto fuente .c3p y acredita el dominio conceptual de diseño de sprites y animaciones 2D.',
          identification: 'Tema: Evaluación Semana 12 y Entrega de Sello 1 de Videojuegos. Evidencia: Archivo .c3p, Kahoot y Sello 3.',
          development: 'Respaldo de archivos .c3p para la siguiente semana, aplicación del Kahoot de 20 preguntas y firma de libretas.',
          closure: 'Estampado del Sello 3 y cierre exitoso de la Semana 12.',
          faq: [
            { q: '¿Por qué es obligatorio guardar mi archivo .c3p en mi Google Drive o Classroom?', a: 'Porque la próxima semana abriremos ese mismo archivo .c3p para armar el escenario y ponerle gravedad a tus dibujos.' }
          ],
          sello: {
            num: 'Sello 3',
            desc: 'Catálogo de 6 sprites en archivo .c3p + Puntaje del Kahoot Semana 12 en libreta.'
          }
        }
      ],
      sessions: [
        {
          id: 'S01',
          label: 'Sesión 01',
          duration: '1 hora',
          title: 'Cierre de 2° Corte e Introducción a los Videojuegos 2D en Construct 3',
          hourIds: ['H01'],
          product: 'Separador de 3er Corte, Dictado de Sprites y Ficha Técnica de CyberDefender en libreta (Sello 1).',
          unlockDate: '2026-11-04',
          unlockLabel: 'Miércoles 04 de Noviembre (18:30 hrs)',
        },
        {
          id: 'S02',
          label: 'Sesión 02',
          duration: '2 horas',
          title: 'Lienzo 640×360, Trazo del Héroe (16×16 px) y Animaciones (Idle, Run, Jump)',
          hourIds: ['H02', 'H03'],
          product: 'Proyecto creado en Construct 3 con el Héroe dibujado y sus 3 animaciones activas (Sello 2).',
          unlockDate: '2026-11-05',
          unlockLabel: 'Jueves 05 de Noviembre (16:50 hrs)',
        },
        {
          id: 'S03',
          label: 'Sesión 03',
          duration: '2 horas',
          title: 'Catálogo Completo (Malware_Bot, Llave_TLS, Cristal_Salting) y Gran Kahoot Semana 12',
          hourIds: ['H04', 'H05'],
          product: 'Los 6 sprites terminados en archivo .c3p y puntaje del Gran Kahoot Semana 12 (Sello 3).',
          unlockDate: '2026-11-06',
          unlockLabel: 'Viernes 06 de Noviembre (18:30 hrs)',
        },
      ],
    },
  ],
};
