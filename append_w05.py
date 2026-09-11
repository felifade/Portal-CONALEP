import re

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'r', encoding='utf-8') as f:
    content = f.read()

w05_content = """,
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
        '¡Semana corta! Lunes, martes y miércoles están inactivos por festividades patrias.',
        'Solo contaremos con la sesión del Jueves para terminar el bloque técnico.',
        'El Viernes será exclusivo para captura y subida de calificaciones del SAE.'
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
          infographicSteps: [
            { title: '1. Fórmulas Base', desc: 'SUMA, PROMEDIO, CONTAR.SI' },
            { title: '2. Gráfico Pastel', desc: 'Porcentaje de Sexo' },
            { title: '3. Gráfico Barras', desc: 'Edades y Colonias' },
            { title: '4. Formato Condicional', desc: 'Pintar celdas en rojo' }
          ],
          development: `Construcción del Dashboard en las filas 1-6.\\n\\n1️⃣ **Fórmulas Aritméticas y Estadísticas:** Uso de =CONTARA, =SUMA, =PROMEDIO, =MAX, =MIN, =CONTAR.SI para analizar edades y sexos.\\n2️⃣ **4 Gráficos Visuales:** Pastel (Sexo), Barras (Edades), Anillo (Dispositivo) y Columnas (Colonia).\\n3️⃣ **Formato Condicional:** Regla automática para pintar de rojo a quienes no tienen dispositivo ("Ninguno").\\n\\nCapturas del dashboard funcional añadidas al Google Docs maestro.`,
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
    }
  }"""

# Inject before the final `  }` of the teachingPlan object
pattern = r"(\s+\]\s+\}\s+)\}\s*;"
if re.search(pattern, content):
    content = re.sub(pattern, r"\1" + w05_content + "\n};", content)
    with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("W05 appended!")
else:
    print("Pattern not found for W05 injection.")
