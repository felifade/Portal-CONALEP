import re

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'r', encoding='utf-8') as f:
    content = f.read()

import_lines = """import imgW06S01 from '../assets/w06_s01_infografia.png';
import imgW06S02 from '../assets/w06_s02_infografia.png';
import imgW06S03 from '../assets/w06_s03_infografia.png';
import imgW06S04 from '../assets/w06_s04_infografia.png';
"""

if 'imgW06S01' not in content:
    content = import_lines + content

w06_data = """,
    'W06': {
      id: 'W06',
      label: 'Semana 06',
      title: 'Fusión Masiva de Datos y Auditoría Digital',
      dates: '21 Sep - 25 Sep',
      status: 'active',
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
          id: 'S1', label: 'Sesión 01', subtitle: 'Lunes (4 hrs) · Ética y Maquetación',
          unlockDate: '2026-09-21',
          unlockLabel: 'Lunes 21 de Septiembre, 15:00 hrs',
          start: '¿Tu huella digital y tus datos hablan de ti incluso cuando no estás conectado?',
          dictation: 'En la era digital, la recopilación sistemática de datos personales no es una simple tarea administrativa; constituye la base sobre la cual los algoritmos clasifican, segmentan y condicionan las oportunidades humanas. La automatización documental debe ejecutarse bajo estrictos principios de ética, privacidad y responsabilidad operativa, reconociendo que detrás de cada registro existe una persona sujeta a decisiones del sistema.',
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
          development: `Instrucciones de la Sesión:

1️⃣ Cine-Debate: Proyección guiada de Black Mirror (Nosedive). Análisis sobre reputación algorítmica y registro de 3 reflexiones en libreta.
2️⃣ Diseño de Plantilla en Docs: Creación de Plantilla_Expediente_Grupo301 con membrete CONALEP, tabla de contención de bordes ocultos (0 pt) y paleta institucional.
3️⃣ Inyección de Etiquetas: Inserción de variables dobles: <<Nombre>>, <<Apellidos>>, <<Colonia>>, <<Dispositivo>>, <<Estatus>>.
4️⃣ Reto Avanzado: Diseñar versión horizontal para reconocimiento/certificado.`,
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
          id: 'S3', label: 'Sesión 03', subtitle: 'Jueves (2 hrs) · Fusión Masiva & Auditoría',
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
          development: `Instrucciones de la Sesión:

1️⃣ Mapeo: Asociar cada variable con su columna en Sheets y configurar nombre dinámico: Expediente_<<Apellidos>>_<<Nombre>>.
2️⃣ Run Job: Ejecutar la fusión masiva en modo Multiple Output (archivos individuales en PDF).
3️⃣ Auditoría Cruzada: Revisar 3 PDFs de un compañero para asegurar que no haya saltos de página incorrectos ni etiquetas sin sustituir.
4️⃣ Entrega: Ajustar permisos de la carpeta a "Cualquier persona con el vínculo (Lector)" y subir enlace a Classroom.`,
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
    }"""

if "'W06': {" not in content:
    content = re.sub(r'(\n\s*\}\s*\n\s*\}\s*\;\s*$)', w06_data + r'\1', content)
    with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("W06 injected successfully via script!")
else:
    print("W06 already present in teachingPlan.js")
