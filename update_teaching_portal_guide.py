with open("conalep/EDOA_V2/src/data/teachingPlan.js", "r", encoding="utf-8") as f:
    text = f.read()

pos_w07 = text.find("'W07': {")
pos_dev = text.find("development: `", pos_w07)
end_dev = text.find("`", pos_dev + 15)

expanded_portal_script = """development: `🎙️ GUION DIDÁCTICO Y CRONOGRAMA OPERATIVO (LUNES · 4 HORAS)
Metodología: Demostración Breve (2-3 min) + Reto Autónomo en PC (10-15 min) + Auditoría Focalizada

⏱️ HORA 1 (50 min) · Evaluación Inicial (Kahoot S06) y Encuadre:
• [0-10m] Frase Gancho: "Si tuvieran que enviar 50,000 cartas de aceptación a la UNAM este viernes, ¿las harían a mano o con un algoritmo de 3 clics?"
  💡 Dato curioso: La correspondencia masiva nació en 1888 con planchas mecánicas en Addressograph; hoy la haremos en segundos en la nube.
• [10-35m] Proyección de PIN de Kahoot (20 preguntas técnicas: Docs, Sheets, Autocrat, sintaxis << >>, borde 0 pt).
• [35-50m] Retroalimentación grupal y registro del puntaje obtenido en libreta. (Sello 1)

⏱️ HORA 2 (50 min) · Auditoría Forense y Normalización del Directorio:
• [0-5m] Frase: "En bases de datos existe la regla GIGO: si entra basura, salen 30 documentos basura en PDF."
  💡 Anécdota: En 2019 una aerolínea imprimió 2,000 pases con 'NULL' por celdas vacías y perdió millones. Hoy seremos cirujanos de datos.
  🖥️ Demo 1 (3 min): Detección de campos nulos y sintaxis de =NOMPROPIO().
• [5-20m] RETO 1 (15 min en PC): Auditar Directorio_Grupo_301, corregir celdas vacías y normalizar nombres en mayúsculas/minúsculas.
• [20-25m] Demo 2 (2 min): Verificación de calificaciones numéricas en la columna Promedio (valores con punto decimal).
• [25-40m] RETO 2 (15 min en PC): Completar el 100% de calificaciones numéricas del grupo (cero faltantes).
• [40-50m] Auditoría rápida docente entre filas y resolución de dudas.

⏱️ HORA 3 (50 min) · Lógica Condicional (=SI) y Semáforos Visuales:
• [0-5m] Frase: "Le daremos cerebro a la hoja de cálculo: la computadora leerá la nota y decidirá sola quién aprueba sin intervención humana."
  💡 Dato filosófico: George Boole formuló la lógica condicional en 1847; toda la IA y sistemas bancarios del mundo funcionan sobre este principio.
  🖥️ Demo 3 (3 min): Sintaxis =SI(Promedio>=7.0, "Aprobado", "Reprobado").
• [5-20m] RETO 3 (15 min en PC): Insertar columna Estatus, programar la fórmula =SI y arrastrar a los 30+ alumnos.
• [20-25m] Demo 4 (2 min): Formato Condicional automático (verde para Aprobado, rojo para Reprobado).
• [25-40m] RETO 4 (15 min en PC): Aplicar semaforización de colores en toda la columna Estatus.
• [40-50m] Revisión y firma de avance: Directorio evaluado y semaforizado al 100%. (Sello 2)

⏱️ HORA 4 (50 min) · Enlace Mapeado y Fusión Masiva con Autocrat:
• [0-5m] Frase: "Llegó el momento de presionar el botón rojo: verán a los servidores de Google generar +30 PDFs sin tocar el teclado."
  🖥️ Demo 5 (3 min): Apertura de Autocrat y vinculación con Plantilla_Expediente_Grupo301.
• [5-20m] RETO 5 (15 min en PC): Mapear estrictamente las 5 etiquetas (<<Nombre>>, <<Apellidos>>, <<Colonia>>, <<Dispositivo>>, <<Estatus>>).
• [20-25m] Demo 6 (2 min): Parámetros de salida en modo Multiple Output (PDF).
• [25-45m] RETO 6 (20 min en PC): Ejecutar Run Job, supervisar la generación en Google Drive y corregir incidencias de etiquetas rotas.
• [45-50m] Verificación de la carpeta en Drive con los más de 30 PDFs generados en vivo. (Sello 3)`"""

text = text[:pos_dev] + expanded_portal_script + text[end_dev+1:]

with open("conalep/EDOA_V2/src/data/teachingPlan.js", "w", encoding="utf-8") as f:
    f.write(text)

print("Portal web actualizado con el guion didáctico enriquecido!")
