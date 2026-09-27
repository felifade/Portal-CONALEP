import re

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Actualizar el bloque de desarrollo de W07 Sesión 01 para que contemple explícitamente el Kahoot en la Hora 1
pattern_w07_s1 = r"(id: 'S1', label: 'Sesión 01', subtitle: 'Lunes \(4 hrs\) · )[^\']+(\'[\s\S]*?development: `)[^`]+(`)"

rep_sub = "Lunes (4 hrs) · Kahoot, Directorio & Fusión"
rep_dev = """Cronograma Desglosado por Horas:

⏱️ HORA 1 (50m) · Kahoot de Evaluación Inicial:
• Proyección del PIN de Kahoot (20 preguntas técnicas sobre combinación de correspondencia, métodos ofimáticos y maquetación de plantillas).
• Registro de puntaje y retroalimentación grupal en libreta. (Sello 1)

⏱️ HORA 2 (50m) · Auditoría Forense del Directorio:
• Abrir Directorio_Grupo_301 en Google Sheets.
• Detección de campos nulos en Nombre, Apellidos, Colonia o Dispositivo.
• Aplicación de =NOMPROPIO() para estandarizar tipografía y verificación de calificaciones numéricas (Promedio).

⏱️ HORA 3 (50m) · Programación de Estatus Lógico (=SI):
• Inserción de la columna oficial Estatus.
• Programación de la fórmula: =SI(Promedio>=7.0, "Aprobado", "Reprobado").
• Configuración de regla de Formato Condicional automática (verde/rojo). (Sello 2)

⏱️ HORA 4 (50m) · Enlace y Fusión Masiva con Autocrat:
• Vincular la Plantilla_Expediente_Grupo301 de Google Docs.
• Mapeo estricto de las 5 etiquetas (<<Nombre>>, <<Apellidos>>, <<Colonia>>, <<Dispositivo>>, <<Estatus>>).
• Configuración de salida en Multiple Output Mode y ejecución (Run Job) generando +30 PDFs en Drive. (Sello 3)"""

content = re.sub(pattern_w07_s1, r"\g<1>" + rep_sub + r"\g<2>" + rep_dev + r"\g<3>", content)

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("teachingPlan.js actualizado con el desglose de 4 horas para W07 S1")
