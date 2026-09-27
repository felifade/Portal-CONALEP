with open("conalep/EDOA_V2/src/data/teachingPlan.js", "r", encoding="utf-8") as f:
    text = f.read()

# 1. Asegurar que W07 tenga status: 'active' y las demás status: 'historical'
text = text.replace("'status': 'active'", "'status': 'historical'")
text = text.replace("status: 'active'", "status: 'historical'")

# Buscar W07
pos_w07 = text.find("'W07': {")
if pos_w07 != -1:
    # Reemplazar el status dentro de W07 a active
    w07_block = text[pos_w07:pos_w07+300]
    w07_block_active = w07_block.replace("status: 'upcoming'", "status: 'active'").replace("status: 'historical'", "status: 'active'")
    text = text[:pos_w07] + w07_block_active + text[pos_w07+300:]
    print("W07 status set to active safely!")

# 2. Localizar el development de W07 S1 específicamente
idx_dev = text.find("development: `Instrucciones de la Sesión:\n\n1️⃣ Completar Directorio:")
if idx_dev != -1:
    end_dev = text.find("`", idx_dev + 15)
    new_dev_str = """development: `Metodología: Guía Docente (2-3 min) + Retos Autónomos en Máquinas (10-15 min)

⏱️ HORA 1 (50 min) · Kahoot de Evaluación Inicial:
• [0-10m] Proyección de PIN de Kahoot (20 reactivos sobre correspondencia, Docs y Sheets).
• [10-35m] Conducción de la prueba técnica en dispositivos.
• [35-50m] Retroalimentación en plenaria y registro de puntaje en libreta. (Sello 1)

⏱️ HORA 2 (50 min) · Auditoría Forense y Normalización del Directorio:
• [0-5m] Demo 1 (3 min): Detección de celdas vacías y uso de =NOMPROPIO.
• [5-20m] RETO 1 (15 min en PC): Auditar Directorio_Grupo_301, corregir celdas vacías y normalizar nombres.
• [20-25m] Demo 2 (2 min): Verificación de calificaciones numéricas en la columna Promedio.
• [25-40m] RETO 2 (15 min en PC): Completar el 100% de calificaciones numéricas del grupo (cero faltantes).
• [40-50m] Revisión y resolución de dudas entre filas.

⏱️ HORA 3 (50 min) · Lógica Condicional (=SI) y Semáforos:
• [0-5m] Demo 3 (3 min): Sintaxis =SI(Promedio>=7.0, "Aprobado", "Reprobado").
• [5-20m] RETO 3 (15 min en PC): Insertar columna Estatus, programar la fórmula =SI y arrastrar a todo el grupo.
• [20-25m] Demo 4 (2 min): Formato Condicional automático (verde para Aprobado, rojo para Reprobado).
• [25-40m] RETO 4 (15 min en PC): Aplicar semaforización de colores en toda la columna Estatus.
• [40-50m] Revisión docente y firma: Directorio evaluado y semaforizado al 100%. (Sello 2)

⏱️ HORA 4 (50 min) · Enlace Mapeado y Fusión Masiva con Autocrat:
• [0-5m] Demo 5 (3 min): Apertura de Autocrat y vinculación con Plantilla_Expediente_Grupo301.
• [5-20m] RETO 5 (15 min en PC): Mapear estrictamente las 5 etiquetas (<<Nombre>>, <<Apellidos>>, <<Colonia>>, <<Dispositivo>>, <<Estatus>>).
• [20-25m] Demo 6 (2 min): Parámetros de salida en modo Multiple Output (PDF).
• [25-45m] RETO 6 (20 min en PC): Ejecutar Run Job, supervisar la generación en Google Drive y corregir incidencias.
• [45-50m] Verificación de la carpeta en Drive con los más de 30 PDFs generados en vivo. (Sello 3)`"""
    text = text[:idx_dev] + new_dev_str + text[end_dev+1:]
    print("W07 S1 development replaced safely!")
else:
    print("Could not find exact W07 development string, checking...")

with open("conalep/EDOA_V2/src/data/teachingPlan.js", "w", encoding="utf-8") as f:
    f.write(text)

