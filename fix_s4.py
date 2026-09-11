import re

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'r') as f:
    content = f.read()

old_s4 = """        {
          id: 'S4', label: 'Sesión 04', subtitle: 'Jueves (2 hrs) · Fórmulas & Dashboard',
          unlockDate: '2026-09-10',
          unlockLabel: 'Jueves 10 de Septiembre, 15:00 hrs',
          start: '¿Cómo sintetizar la información de 40 estudiantes en un solo vistazo?',
          dictation: 'Un Dashboard, o panel de control, es una herramienta ejecutiva que sintetiza grandes volúmenes de datos mediante tarjetas de métricas (KPIs) y gráficas visuales. Su objetivo principal es transformar datos crudos en información digerible para tomar decisiones estratégicas rápidamente. Por su parte, las fórmulas en las hojas de cálculo son el motor que automatiza este análisis; al utilizar funciones nativas sobre rangos específicos, el sistema procesa la información y actualiza los resultados en tiempo real.',
          learningResult: 'Construir fórmulas estadísticas básicas y tarjetas de resumen.',
          identification: { topic: 'Métricas & Dashboard', evidence: 'Mini Dashboard', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Ruta de la Sesión',
          infographicSteps: [
            { title: '1. Función CONTARA', desc: 'Contar texto o nombres' },
            { title: '2. Tablero de Control', desc: '4 cuadros de resumen' },
            { title: '3. Gráfica Circular', desc: 'Distribución visual' },
            { title: '4. Dashboard', desc: 'Ajuste de diseño' }
          ],
          development: 'Apertura de un espacio superior (filas 1-5) para crear el dashboard. Uso de =CONTARA para sumar estudiantes. Inserción de gráfica de pastel sobre "Dispositivos en casa" y personalización estética ejecutiva.',
          closure: 'Dashboard funcional que cambia dinámicamente si se alteran los datos.'
        },"""

new_s4 = """        {
          id: 'S4', label: 'Sesión 04', subtitle: 'Jueves (2 hrs) · Retos de Filtro Avanzado',
          unlockDate: '2026-09-10',
          unlockLabel: 'Jueves 10 de Septiembre, 15:00 hrs',
          start: '¿Cómo aplicas la lógica para combinar diferentes filtros a la vez?',
          dictation: 'El dominio de una base de datos no solo requiere conocer las herramientas, sino aplicar lógica condicional para aislar información precisa. Al combinar múltiples criterios (filtros simultáneos), exclusiones o búsquedas específicas de texto, podemos resolver escenarios complejos y extraer inteligencia operativa en tiempo récord, sin alterar el archivo original.',
          learningResult: 'Aplicar lógica de filtros combinados y ordenamiento múltiple.',
          identification: { topic: 'Filtros Avanzados', evidence: 'Capturas de Retos', organization: 'Individual', location: 'Laboratorio', time: '2 hrs' },
          infographicTitle: 'Retos Relámpago',
          infographicSteps: [
            { title: '1. Doble Condición', desc: 'Colonia + Dispositivo' },
            { title: '2. Orden Inverso', desc: 'Filtrar y Ordenar Z-A' },
            { title: '3. Exclusión', desc: 'Desmarcar casillas' },
            { title: '4. Búsqueda Textual', desc: 'Buscar apellidos' }
          ],
          development: 'Resolución de 4 "Retos Relámpago" dictados por el docente para aislar datos combinando condiciones lógicas. Generación de 4 capturas de pantalla de evidencia integradas a Google Docs.',
          closure: 'Evidencias capturadas en Docs y comprensión sólida de las vistas.'
        },"""

if old_s4 in content:
    content = content.replace(old_s4, new_s4)
    with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'w') as f:
        f.write(content)
    print("S4 replaced successfully!")
else:
    print("Could not find the exact old_s4 block to replace.")
