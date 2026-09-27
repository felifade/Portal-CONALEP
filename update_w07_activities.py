import re

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Desarrollo ampliado con la dinámica "Guía de 2 a 3 min + Práctica Autónoma de 10 a 15 min"
expanded_dev_w07_s1 = """`Estrategia Didáctica: Guía Docente (2-3 min) + Bloque Autónomo en Máquinas (10-15 min)

⏱️ BLOQUE 1 (50 min) · Kahoot y Reactivación Técnica:
• [0-10m] Proyección de PIN y encuadre.
• [10-35m] Conducción de la prueba de 20 reactivos (Docs, Sheets, Autocrat, sintaxis << >>).
• [35-50m] Retroalimentación en plenaria y registro de puntaje en libreta. (Sello 1)

⏱️ BLOQUE 2 (50 min) · Auditoría Forense y Normalización del Directorio:
• [0-5m] Demostración en cañón: detección de campos nulos y sintaxis de =NOMPROPIO().
• [5-20m] RETO 1 (15 min de trabajo autónomo): Auditar Directorio_Grupo_301, corregir celdas vacías y normalizar nombres en mayúsculas/minúsculas.
• [20-25m] Demostración en cañón: verificación de la columna Promedio y formatos numéricos.
• [25-40m] RETO 2 (15 min de trabajo autónomo): Completar el 100% de calificaciones numéricas y asegurar cero celdas vacías.
• [40-50m] Auditoría rápida docente entre filas y resolución de dudas.

⏱️ BLOQUE 3 (50 min) · Lógica Condicional (=SI) y Formato Visual:
• [0-5m] Demostración en cañón: estructura de la fórmula =SI(Promedio>=7.0, "Aprobado", "Reprobado").
• [5-20m] RETO 3 (15 min de trabajo autónomo): Insertar columna Estatus, programar la fórmula y arrastrar a los 30+ alumnos.
• [20-25m] Demostración en cañón: reglas de Formato Condicional (verde suave para Aprobado, rojo suave para Reprobado).
• [25-40m] RETO 4 (15 min de trabajo autónomo): Configurar semaforización automática en toda la columna Estatus.
• [40-50m] Revisión y firma de avance: Directorio normalizado y semaforizado al 100%. (Sello 2)

⏱️ BLOQUE 4 (50 min) · Enlace Mapeado y Fusión Masiva con Autocrat:
• [0-5m] Demostración en cañón: apertura de Autocrat, New Job y vinculación con Plantilla_Expediente_Grupo301.
• [5-20m] RETO 5 (15 min de trabajo autónomo): Mapear estrictamente las 5 etiquetas (<<Nombre>>, <<Apellidos>>, <<Colonia>>, <<Dispositivo>>, <<Estatus>>).
• [20-25m] Demostración en cañón: configuración de salida dinámica Expediente_<<Apellidos>>_<<Nombre>> en modo Multiple Output (PDF).
• [25-45m] RETO 6 (20 min de trabajo autónomo): Ejecutar Run Job, supervisar la generación en Google Drive y resolver incidencias de etiquetas rotas.
• [45-50m] Verificación de la carpeta en Drive con los más de 30 PDFs generados en vivo. (Sello 3)`"""

pattern = r"(id: 'S1', label: 'Sesión 01', subtitle: 'Lunes \(4 hrs\) · )[^\']+(\'[\s\S]*?development:\s*)`[^`]+(`)"

content = re.sub(pattern, r"\g<1>Lunes (4 hrs) · Kahoot, Directorio & Fusión Masiva\g<2>" + expanded_dev_w07_s1 + r"\g<3>", content)

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Desarrollo de W07 ampliado con metodología Guía 2-3m + Práctica 10-15m")
