import re

file_path = "/Users/felipelopezsalazar/Developer/Proyectos_CONALEP/Portal CONALEP/conalep/EDOA_V2/src/data/teachingPlan.js"
with open(file_path, "r", encoding="utf-8") as f:
    text = f.read()

pos_w08 = text.find("'W08':")
pos_end_w08 = text.find("    }", text.find("closure: 'Acreditación oficial del RA 2.1", pos_w08))
pos_end_w08_full = text.find("    }", pos_end_w08 + 5) + 5

w08_basic_replacement = """'W08': {
      id: 'W08',
      label: 'Semana 08',
      title: 'Dominio de Autocrat, Operaciones Básicas y Tablas de Multiplicar en Sheets',
      dates: '05 Oct - 09 Oct',
      status: 'active',
      presentationUrl: './html/W08.html',
      summary: 'Conclusión de Autocrat y Boleta de Parciales el Lunes; iniciación a las 4 operaciones básicas (+, -, *, /), =SUMA y =PROMEDIO el Miércoles; construcción de las Tablas de Multiplicar del 1 al 10 con arrastre de fórmulas el Jueves; y evaluación sumativa el Viernes.',
      expectedProduct: 'Reporte Técnico de Autocrat en Docs, Hoja de Operaciones Básicas y Presupuesto en Sheets, y Panel de Tablas de Multiplicar del 1 al 10.',
      notices: [
        'Lunes (Horas 1-4): Conclusión exitosa de Autocrat, maquetación de la Boleta de Parciales y Reporte Técnico de Práctica en Docs.',
        'Miércoles (Horas 5-6): Iniciación a Google Sheets desde cero: +, -, *, /, formato de moneda, =SUMA y =PROMEDIO.',
        'Jueves (Horas 7-8): Tablas de multiplicar del 1 al 10, arrastre inteligente de fórmulas y formato condicional visual.',
        'Viernes (Hora 9): Mini reto práctico integrador, Kahoot sumativo y cierre oficial del RA 2.1.'
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
          id: 'S2', label: 'Sesión 02', subtitle: 'Miércoles (2 hrs) · Hojas de Cálculo Básicas: Fórmulas +, -, *, / y =SUMA',
          unlockDate: '2026-10-07',
          unlockLabel: 'Miércoles 7 de Octubre, 15:00 hrs',
          start: '¿Cómo construir tu primera hoja de cálculo y calcular totales sin usar calculadora?',
          dictation: 'Una hoja de cálculo es una cuadrícula compuesta por columnas (letras) y filas (números). Para realizar cualquier cálculo matemático, es obligatorio iniciar la celda con el signo igual (=). Los cuatro operadores básicos son la suma (+), la resta (-), la multiplicación (*) y la división (/), los cuales permiten automatizar resultados de forma instantánea.',
          learningResult: 'Identificar celdas, usar los 4 operadores básicos, aplicar formato de moneda y calcular totales con =SUMA y =PROMEDIO.',
          identification: { topic: 'Operadores Básicos & Formato Tabular', evidence: 'Presupuesto Escolar Calculado en Sheets', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Iniciación a Hojas de Cálculo',
          infographicSteps: [
            { title: '1. El Signo = Obligatorio', desc: 'Inicia toda fórmula con = para activar el modo matemático.' },
            { title: '2. Operadores Básicos', desc: 'Usa + (suma), - (resta), * (multiplicación) y / (división).' },
            { title: '3. Formato de Moneda', desc: 'Aplica el símbolo de pesos ($) y 2 decimales a los precios.' },
            { title: '4. =SUMA y =PROMEDIO', desc: 'Suma rangos completos (A2:A10) sin teclear celda por celda.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · MIÉRCOLES (2 HORAS)
Metodología: Demo Guiada (2-3 min) ➔ Retos Autónomos en PC (10-15 min) ➔ Auditoría

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 5 (50 min) · Las 4 Operaciones Básicas (+, -, *, /) y Formato Moneda
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO (Apertura al entrar):
"Muchachos, buenas tardes. Hoy aprenderemos a usar la calculadora más potente del mundo: Google Sheets. A partir de hoy, nunca más volverán a sumar ni multiplicar a mano. Si aprenden a usar el signo igual (=), la computadora trabajará por ustedes."

🖥️ DEMO EN CAÑÓN (3 min):
1) Explicar anatomía de la celda: Columna (letra) + Fila (número) ➔ Celda (ej. A1).
2) Escribir en vivo las 4 fórmulas elementales:
   • Suma: =A2+B2
   • Resta: =A2-B2
   • Multiplicación: =A2*B2
   • División: =A2/B2
3) Seleccionar celdas numéricas y dar clic en el botón de Formato de Moneda ($).

💻 RETO 1 (35 min en PC):
Crear la hoja Operaciones_Basicas_Grupo301. Construir una tabla sencilla con 5 productos (compras de papelería) con precio y cantidad, calculando el Total por producto (=Cantidad*Precio).

🏷️ EVIDENCIA Y SELLO:
Tabla de 5 productos calculada con el operador de multiplicación (*) y formato de moneda ($). 👉 SELLO 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 6 (50 min) · Fórmulas de Acumulación: =SUMA() y =PROMEDIO()
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Sumar celda por celda como =A2+A3+A4 es cansado y lento. Hoy aprenderemos la función mágica =SUMA() para sumar 50 números en un segundo usando rangos con dos puntos (:)."

🖥️ DEMO EN CAÑÓN (3 min):
1) Mostrar la diferencia entre =A2+A3+A4+A5 y la función formal =SUMA(A2:A6).
2) Explicar qué significan los dos puntos (:): "desde la celda A2 hasta la celda A6".
3) Enseñar la función =PROMEDIO(A2:A6).
4) Dar color de fondo a los encabezados y poner bordes negros a la tabla.

💻 RETO 2 (35 min en PC):
En la misma hoja de compras, agregar al final de la tabla:
• Fila de Total General usando =SUMA(E2:E6).
• Fila de Precio Promedio usando =PROMEDIO(C2:C6).
• Pintar los encabezados de verde y colocar bordes a todas las celdas.

🏷️ EVIDENCIA Y SELLO:
Presupuesto escolar completo con =SUMA, =PROMEDIO y diseño visual limpio. 👉 SELLO 5`,
          closure: 'Tabla de operaciones básicas y presupuesto calculados con =SUMA y =PROMEDIO con formato de moneda.'
        },
        {
          id: 'S3', label: 'Sesión 03', subtitle: 'Jueves (2 hrs) · Tablas de Multiplicar y Arrastre Inteligente',
          unlockDate: '2026-10-08',
          unlockLabel: 'Jueves 8 de Octubre, 15:00 hrs',
          start: '¿Cómo construir la tabla de multiplicar del 1 al 10 en segundos arrastrando fórmulas?',
          dictation: 'El arrastre de fórmulas mediante el controlador de relleno (el cuadrito azul de la esquina inferior derecha de la celda) permite copiar la lógica matemática a lo largo de columnas enteras. Al combinar tablas numeradas con fórmulas de multiplicación, podemos construir patrones matemáticos dinámicos y aplicar formato condicional para resaltar resultados.',
          learningResult: 'Construir tablas de multiplicar individuales del 1 al 10, dominar el arrastre vertical de fórmulas y aplicar formato condicional básico.',
          identification: { topic: 'Tablas de Multiplicar & Arrastre de Fórmulas', evidence: 'Panel de Tablas del 1 al 10 en Sheets', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Tablas de Multiplicar y Arrastre',
          infographicSteps: [
            { title: '1. Estructura de la Tabla', desc: 'Crea columnas para Número, Multiplicador y Resultado.' },
            { title: '2. Fórmula de Multiplicación', desc: 'Escribe =A2*B2 en la primera fila de la tabla.' },
            { title: '3. Arrastre Inteligente', desc: 'Toma el cuadro azul de la esquina y arrastra hacia abajo.' },
            { title: '4. Formato Condicional', desc: 'Resalta en verde los resultados mayores a 50.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · JUEVES (2 HORAS)
Metodología: Demo Guiada (2-3 min) ➔ Retos Autónomos en PC (10-15 min) ➔ Auditoría

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 7 (50 min) · Construcción de Tablas de Multiplicar Individuales (del 1 al 5)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO (Apertura al entrar):
"Muchachos, cuando éramos niños nos hacían memorizar las tablas de multiplicar a la fuerza. Hoy seremos los arquitectos de las tablas: programaremos una hoja donde solo cambiemos el número base y toda la tabla se recalculara sola al instante."

🖥️ DEMO EN CAÑÓN (3 min):
1) Diseñar en pantalla la estructura de la Tabla del 7:
   • Columna A: Número Fijo (7)
   • Columna B: Multiplicador (1, 2, 3... 10)
   • Columna C: Resultado (=A2*B2)
2) Demostrar cómo se arrastra la fórmula hacia abajo usando el punto azul de la esquina inferior derecha de la celda.

💻 RETO 3 (35 min en PC):
Crear la hoja Tablas_Multiplicar_Grupo301. Construir de forma limpia las tablas del 1, 2, 3, 4 y 5 usando la fórmula =A2*B2 y arrastrando la fórmula verticalmente.

🏷️ EVIDENCIA Y SELLO:
Tablas del 1 al 5 programadas con fórmulas de multiplicación y arrastre funcionando. 👉 SELLO 6

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 8 (50 min) · Panel Completo de Tablas (6 al 10) y Formato Condicional
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Ahora completaremos nuestro gran panel de matemáticas. Haremos que las tablas se vean hermosas con colores por cada número y programaremos una alerta visual para que la hoja pinte de verde solo los números múltiplos grandes."

🖥️ DEMO EN CAÑÓN (3 min):
1) Completar en pantalla las tablas del 6, 7, 8, 9 y 10.
2) Aplicar Formato Condicional Básico:
   • Regla: Texto o Valor *Mayor que* `50` ➔ Fondo Verde claro (`#D4EDDA`), texto verde oscuro.

💻 RETO 4 (35 min en PC):
1) Construir las tablas del 6, 7, 8, 9 y 10 al lado de las anteriores.
2) Dar un color de fondo diferente a la cabecera de cada tabla (ej. Tabla del 7 azul, Tabla del 8 morada).
3) Aplicar Formato Condicional para resaltar todos los resultados mayores a 50 en color verde.

🏷️ EVIDENCIA Y SELLO:
Panel completo de las 10 tablas de multiplicar formateado y con formato condicional de mayores a 50 activo. 👉 SELLO 7`,
          closure: 'Panel de tablas de multiplicar del 1 al 10 programado y semaforizado con formato condicional.'
        },
        {
          id: 'S4', label: 'Sesión 04', subtitle: 'Viernes (1 hr) · Mini Reto Integrador & Kahoot Fundamentos',
          unlockDate: '2026-10-09',
          unlockLabel: 'Viernes 9 de Octubre, 15:00 hrs',
          start: '¿Demostraste el dominio de las operaciones básicas y fórmulas en Hojas de Cálculo?',
          dictation: 'El cierre de la semana de iniciación a hojas de cálculo certifica la comprensión de la anatomía de celdas, los 4 operadores básicos, el uso de funciones fundamentales como =SUMA y =PROMEDIO, y la habilidad para construir tablas numéricas dinámicas.',
          learningResult: 'Resolver un mini reto integrador de 4 operaciones, contestar el Kahoot sumativo y asentar calificaciones.',
          identification: { topic: 'Mini Reto Integrador & Kahoot Fundamentos', evidence: 'Mini Reto + Kahoot + Acreditación RA 2.1', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Evaluación y Acreditación de Fundamentos',
          infographicSteps: [
            { title: '1. Mini Reto Integrador', desc: 'Resuelve 1 suma, 1 resta, 1 multiplicación y 1 promedio de forma autónoma.' },
            { title: '2. Kahoot Fundamentos', desc: 'Prueba de 20 preguntas sencillas sobre celdas, fórmulas y operadores.' },
            { title: '3. Cotejo de Sellos', desc: 'Verificación del portafolio completo de sellos de la semana.' },
            { title: '4. Acreditación Oficial', desc: 'Asentamiento de calificaciones definitivas del RA 2.1.' }
          ],
          development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · VIERNES (1 HORA)
Metodología: Mini Reto Integrador + Kahoot Fundamentos + Acreditación Oficial

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 9 (50 min) · Mini Reto Práctico, Kahoot y Cierre de RA 2.1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO (Apertura al entrar):
"Muchachos, hoy cerramos nuestra semana de fundamentos en hojas de cálculo. Han pasado de combinar documentos en Autocrat a programar fórmulas matemáticas y construir paneles numéricos. Hoy demostraremos quién domina las bases con nuestro mini reto y el Kahoot semanal."

🖥️ DEMO EN CAÑÓN (2 min):
Explicar el Mini Reto Integrador: Una tabla sencilla con 4 datos donde deben aplicar 1 suma, 1 resta, 1 multiplicación y 1 promedio sin ayuda.

💻 RETO FINAL (25 min en Dispositivos):
1) Resolver el Mini Reto Integrador en PC (10 min).
2) Resolver el Kahoot Sumativo de Fundamentos de 20 preguntas (15 min).

🏷️ CIERRE Y ASENTAMIENTO OFICIAL (20 min):
Cotejo del portafolio completo de sellos acumulados y asentamiento de calificaciones oficiales del RA 2.1 en listas de control escolar.
Encuadre del RA 2.2: Presentaciones Electrónicas Interactivas.`,
          closure: 'Mini reto resuelto, Kahoot completado y acreditación oficial del RA 2.1 asentada en listas.'
        }
      ]
    }"""

new_text = text[:pos_w08] + w08_basic_replacement + "\n" + text[pos_end_w08_full:]
with open(file_path, "w", encoding="utf-8") as f:
    f.write(new_text)

print("teachingPlan.js updated cleanly with basic spreadsheet sessions for W08!")
