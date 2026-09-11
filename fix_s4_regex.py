import re

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'r') as f:
    content = f.read()

# Using regex to replace the S4 block within W04
pattern = r"(id: 'S4', label: 'Sesión 04', subtitle: 'Jueves \(2 hrs\).*?)(?=\s*\{\s*id: 'S5')"

new_s4_content = """id: 'S4', label: 'Sesión 04', subtitle: 'Jueves (2 hrs) · Retos de Filtro Avanzado',
          unlockDate: '2026-09-10',
          unlockLabel: 'Jueves 10 de Septiembre, 15:00 hrs',
          start: '¿Cómo aplicas la lógica para combinar diferentes filtros a la vez?',
          dictation: 'El dominio de una base de datos no solo requiere conocer las herramientas, sino aplicar lógica condicional para aislar información precisa. Al combinar múltiples criterios (filtros simultáneos), exclusiones o búsquedas específicas de texto, podemos resolver escenarios complejos y extraer inteligencia operativa en tiempo récord, sin alterar el archivo original.',
          learningResult: 'Aplicar lógica de filtros combinados y ordenamiento múltiple.',
          identification: { topic: 'Filtros Avanzados', evidence: 'Capturas de Retos', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Retos Relámpago',
          infographicSteps: [
            { title: '1. Dob Condición', desc: 'Colonia + Dispositivo' },
            { title: '2. Orden Inverso', desc: 'Filtro + Orden Z-A' },
            { title: '3. Exclusión', desc: 'Desmarcar opciones' },
            { title: '4. Texto Específico', desc: 'Buscar apellidos' }
          ],
          development: 'Resolución de 4 "Retos Relámpago" dictados por el docente para aislar datos combinando condiciones lógicas. Generación de 4 capturas de pantalla de evidencia integradas a Google Docs.',
          closure: 'Evidencias capturadas en Docs y comprensión sólida de las vistas.'
        },"""

content = re.sub(pattern, new_s4_content, content, flags=re.DOTALL)

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'w') as f:
    f.write(content)

print("teachingPlan.js regex replaced!")
