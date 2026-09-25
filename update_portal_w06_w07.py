import re

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Actualizar el texto de la Sesión 01 de W06 para reflejar la investigación real
pattern_w06_s1 = r"(id: 'S1', label: 'Sesión 01', subtitle: 'Lunes \(4 hrs\) · )[^\']+(\'[\s\S]*?start: \')[^\']+(\'[\s\S]*?dictation: \')[^\']+(\'[\s\S]*?development: `)[^`]+(`)"

rep_subtitle = "Lunes (4 hrs) · Investigación y Métodos"
rep_start = "¿Cómo se multiplican cientos de documentos personalizados sin escribirlos uno por uno?"
rep_dictation = "La combinación de correspondencia desacopla el diseño documental de la fuente de datos. Conocer los programas, complementos y metodologías disponibles en la industria es indispensable para seleccionar la herramienta adecuada según el volumen y la infraestructura tecnológica de la organización."
rep_dev = """Instrucciones de la Sesión:

1️⃣ Investigación Formal: Concepto, utilidad y arquitectura de la combinación de correspondencia en libreta.
2️⃣ Tabla Comparativa de Software: Análisis de programas necesarios (procesadores de texto, gestores de bases de datos y motores de enlace como Autocrat).
3️⃣ Análisis de Tres Métodos: Recopilación visual de 3 vías de combinación (Google Workspace + Add-on, Microsoft Word + Excel local, y Google Apps Script / Extensiones).
4️⃣ Integración Digital: Transcripción de la investigación y bocetos a la bitácora de Google Drive."""

content = re.sub(pattern_w06_s1, r"\g<1>" + rep_subtitle + r"\g<2>" + rep_start + r"\g<3>" + rep_dictation + r"\g<4>" + rep_dev + r"\g<5>", content)

# Inyectar o actualizar W07 si no existe
w07_data = """,
    'W07': {
      id: 'W07',
      label: 'Semana 07',
      title: 'Normalización de Datos y Fusión Masiva en la Nube',
      dates: '28 Sep - 02 Oct',
      status: 'upcoming',
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
          id: 'S1', label: 'Sesión 01', subtitle: 'Lunes (4 hrs) · Directorio & Fusión Masiva',
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
          development: `Instrucciones de la Sesión:

1️⃣ Completar Directorio: Verificar datos faltantes y normalizar nombres en mayúsculas/minúsculas.
2️⃣ Fórmula Condicional: Insertar columna Estatus y programar =SI(Promedio>=7, "Aprobado", "Reprobado") con formato condicional verde/rojo.
3️⃣ Configuración de Autocrat: Enlazar Plantilla_Expediente_Grupo301 y mapear las etiquetas dinámicas.
4️⃣ Run Job: Generar los más de 30 PDFs individuales en Google Drive en modo Multiple Output.`,
          closure: 'Base de datos normalizada con fórmulas y lote de expedientes en PDF generado.'
        },
        {
          id: 'S2', label: 'Sesión 02', subtitle: 'Miércoles (1 hr) · Auditoría Cruzada',
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
          development: `Instrucciones de la Sesión:

1️⃣ Auditoría Cruzada: Abrir 3 PDFs de un compañero y revisar márgenes, sustitución y que quepa en 1 hoja.
2️⃣ Corrección de Errores: Ajustar plantillas o celdas con fallas y reejecutar la combinación si aplica.`,
          closure: 'Expedientes verificados sin vicios de origen.'
        },
        {
          id: 'S3', label: 'Sesión 03', subtitle: 'Jueves (2 hrs) · Permisos & Portafolio',
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
          development: `Instrucciones de la Sesión:

1️⃣ Configuración de Drive: Ajustar la carpeta contenedora con permisos de Lector público.
2️⃣ Compilación de Bitácora: Documentar el proceso con capturas de la tabla comparativa de métodos, la fórmula =SI y Autocrat terminado.
3️⃣ Entrega: Enviar la tarea en Google Classroom para evaluación oficial.`,
          closure: 'Carpeta compartida y bitácora entregada en Classroom.'
        },
        {
          id: 'S4', label: 'Sesión 04', subtitle: 'Viernes (1 hr) · Cierre RA 2.1',
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
          development: `Instrucciones de la Sesión:

1️⃣ Revisión Docente: Evaluación de carpetas de Drive y registro de calificaciones del RA 2.1.
2️⃣ Regularización: Apoyo directo a alumnos rezagados en la entrega.
3️⃣ Introducción al RA 2.2: Presentación del temario de diapositivas interactivas.`,
          closure: 'RA 2.1 acreditado al 100% y ciclo cerrado.'
        }
      ]
    }"""

if "'W07': {" not in content:
    content = re.sub(r'(\n\s*\}\s*\n\s*\}\s*\;\s*$)', w07_data + r'\1', content)
    print("W07 agregada exitosamente a teachingPlan.js")
else:
    print("W07 ya existía en teachingPlan.js")

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("teachingPlan.js actualizado con investigación en W06 y estructura de W07")
