import re

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'r') as f:
    content = f.read()

# Add import
import_statement = "import imgW04S03 from '../assets/w04_s03_infografia.png';"
if "imgW04S03" not in content:
    content = content.replace("import imgW04S02 from '../assets/w04_s02_infografia.jpg';", "import imgW04S02 from '../assets/w04_s02_infografia.jpg';\n" + import_statement)

# Replace the block
old_s3 = """          id: 'S3', label: 'Sesión 03', subtitle: 'Miércoles (1 hr) · Filtros y Búsquedas',
          unlockDate: '2026-09-09',
          unlockLabel: 'Miércoles 9 de Septiembre, 15:00 hrs',
          start: '¿Filtrar datos significa que borramos lo que no vemos?',
          dictation: 'Filtrar información no significa eliminar datos; consiste en crear una vista temporal y dinámica que aísla visualmente los registros que cumplen con condiciones específicas. Por otro lado, la herramienta de ordenamiento reestructura todas las filas en secuencia alfanumérica. Ambas herramientas nos permiten responder preguntas operativas en segundos sin alterar ni dañar la base de datos original.',
          learningResult: 'Consultar y analizar el directorio mediante filtros y ordenamiento.',
          identification: { topic: 'Consultas', evidence: 'Vistas de Filtro', organization: 'Individual', location: 'Laboratorio', time: '1 hr' },
          infographicTitle: 'Ruta de la Sesión',
          infographicSteps: [
            { title: '1. Activar Filtro', desc: 'Datos > Crear filtro' },
            { title: '2. Orden A-Z', desc: 'Por apellidos' },
            { title: '3. Filtrar Colonia', desc: 'Por zonas' },
            { title: '4. Filtrar Dispositivo', desc: 'Identificar necesidades' }
          ],"""

new_s3 = """          id: 'S3', label: 'Sesión 03', subtitle: 'Miércoles (1 hr) · Filtros y Búsquedas',
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
          ],"""

content = content.replace(old_s3, new_s3)

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'w') as f:
    f.write(content)

print("teachingPlan.js S3 updated!")
