with open("conalep/EDOA_V2/src/data/teachingPlan.js", "r", encoding="utf-8") as f:
    text = f.read()

pos_w07 = text.find("'W07': {")
pos_dev = text.find("development: `", pos_w07)
end_dev = text.find("`", pos_dev + 15)

teleprompter_text = """development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · LUNES (4 HORAS)
Metodología: Demo Guiada (2-3 min) ➔ Retos Autónomos en PC (10-15 min) ➔ Auditoría

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 1 (50 min) · Evaluación Inicial (Kahoot S06) y Encuadre
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO (Apertura al entrar):
"Muchachos, imaginen que son directores de admisiones de la UNAM y tienen que emitir 50,000 cartas de aceptación personalizadas este viernes. ¿Contratarían a 100 personas para escribir una por una en Word, o diseñarían un algoritmo de 3 clics? Hoy demostraremos quién domina los conceptos antes de tocar la base de datos."

💡 DATO CURIOSO:
En 1888 nació la correspondencia masiva mecánica en la empresa Addressograph usando planchas de metal. Tardaban semanas en lo que hoy nosotros haremos en 45 segundos en la nube.

🖥️ DEMO EN CAÑÓN (2 min):
Proyectar el PIN de Kahoot (20 reactivos sobre correspondencia, software y maquetación). Ingreso obligatorio con Primer Apellido y Primer Nombre.

💻 RETO 0 (25 min en Dispositivos):
Resolver la prueba de 20 preguntas con rigor técnico. Podio a los 3 primeros lugares.

🏷️ EVIDENCIA Y SELLO:
Dictar en libreta: "Evaluación diagnóstica Semana 07: Convalida los fundamentos de combinación de correspondencia, métodos ofimáticos y maquetación de plantillas." Anotar puntaje. 👉 SELLO 1

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 2 (50 min) · Auditoría Forense y Normalización del Directorio
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"En informática forense existe la regla GIGO: Garbage In, Garbage Out. Si a un sistema le metes datos basura, te va a escupir 30 documentos basura en PDF. Si el nombre de Juan está todo en minúsculas o a María le falta la colonia, el expediente oficial saldrá incompleto y no tendrá validez legal."

💡 ANÉCDOTA DEL MUNDO REAL:
En 2019 una aerolínea británica imprimió 2,000 pases con el texto 'NULL' en el asiento por culpa de celdas vacías. Los pasajeros no pudieron volar y la empresa perdió millones en demandas. Hoy seremos cirujanos de datos.

🖥️ DEMO 1 (3 min): Detección de campos nulos y sintaxis de =NOMPROPIO() para homogeneizar nombres.
💻 RETO 1 (15 min en PC): Auditar Directorio_Grupo_301, quitar celdas vacías y normalizar nombres en mayúsculas/minúsculas.

🖥️ DEMO 2 (2 min): Configuración de la columna Promedio en formato número con 1 decimal.
💻 RETO 2 (15 min en PC): Completar el 100% de calificaciones numéricas sin que falte ni una.

🏷️ EVIDENCIA: Hoja de cálculo limpia, sin celdas vacías y con tipografía uniforme.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 3 (50 min) · Lógica Condicional (=SI) y Semáforos Visuales
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Le daremos cerebro a la hoja de cálculo: la computadora leerá la nota de cada alumno y decidirá sola quién aprueba sin intervención humana. Cero favoritismos: pura lógica algorítmica."

💡 DATO FILOSÓFICO / TECNOLÓGICO:
George Boole formuló la lógica condicional en 1847. Toda la inteligencia artificial moderna, los algoritmos de redes sociales y los bancos funcionan bajo este mismo principio.

🖥️ DEMO 3 (3 min): Sintaxis en el cañón: =SI(Promedio >= 7.0, "Aprobado", "Reprobado").
💻 RETO 3 (15 min en PC): Crear columna Estatus, programar la fórmula =SI y arrastrarla a todo el grupo.

🖥️ DEMO 4 (2 min): Formato Condicional (Verde suave para Aprobado, Rojo suave para Reprobado).
💻 RETO 4 (15 min en PC): Aplicar semaforización automática a toda la columna Estatus.

🏷️ EVIDENCIA Y SELLO: Alumno muestra pantalla con la columna calculada y semaforizada. 👉 SELLO 2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 4 (50 min) · Enlace Mapeado y Fusión Masiva con Autocrat
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"Llegó el momento cumbre: presionaremos el botón rojo y verán a los servidores de Google generar +30 PDFs sin tocar el teclado."

🖥️ DEMO 5 (3 min): Abrir Autocrat (Extensiones ➔ Autocrat ➔ Launch) y vincular Plantilla_Expediente_Grupo301.
💻 RETO 5 (15 min en PC): Mapear estrictamente las 5 etiquetas (<<Nombre>>, <<Apellidos>>, <<Colonia>>, <<Dispositivo>>, <<Estatus>>).

🖥️ DEMO 6 (2 min): Nomenclatura Expediente_<<Apellidos>>_<<Nombre>> en modo Multiple Output (PDF).
💻 RETO 6 (20 min en PC): Ejecutar Run Job, supervisar la generación en Google Drive y corregir incidencias.

🏷️ EVIDENCIA Y SELLO: Carpeta de Google Drive con los 30+ PDFs generados en vivo. 👉 SELLO 3`"""

text = text[:pos_dev] + teleprompter_text + text[end_dev+1:]

with open("conalep/EDOA_V2/src/data/teachingPlan.js", "w", encoding="utf-8") as f:
    f.write(text)

print("teachingPlan.js actualizado con el Teleprompter Ejecutivo!")
