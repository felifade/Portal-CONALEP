import re

with open("conalep/EDOA_V2/src/data/teachingPlan.js", "r", encoding="utf-8") as f:
    text = f.read()

# Teleprompter del Miércoles (2 horas)
wednesday_teleprompter = """development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · MIÉRCOLES (2 HORAS)
Metodología: Demo Guiada (2-3 min) ➔ Retos Autónomos en PC (10-15 min) ➔ Auditoría

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 5 (50 min) · Auditoría Forense entre Pares (Control de Calidad)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO (Apertura al entrar):
"Muchachos, en la industria del software ningún programador audita su propio código porque padece de 'ceguera de taller'. Hoy intercambiaremos lugares de trabajo: seremos auditores externos implacables buscando fallas de maquetación en el trabajo del colega antes de que llegue a manos de las autoridades."

💡 ANÉCDOTA FORENSE (El Error Millonario):
En 1962, la sonda espacial Mariner 1 de la NASA tuvo que ser destruida a los 293 segundos de despegar porque un programador omitió una simple barra sobre una letra en el código de cálculo manual. Costó 18 millones de dólares. Un error minúsculo en un documento oficial arruina todo el proyecto.

🖥️ DEMO EN CAÑÓN (3 min):
Proyectar el Checklist de 3 puntos: 1) Cero etiquetas rotas (<< >>), 2) Ajuste estricto a 1 sola hoja sin páginas en blanco, 3) Coincidencia de promedio y estatus.

💻 RETO 7 (15 min en PC):
Intercambiar equipo con el compañero de al lado. Abrir 3 PDFs generados al azar y anotar el dictamen de auditoría en la libreta del compañero.

💻 RETO 8 (15 min en PC):
Regresar a su máquina. Si el auditor encontró errores de formato, corregir la plantilla de Docs o la celda en Sheets y reejecutar Autocrat de inmediato.

🏷️ EVIDENCIA Y SELLO:
Lista de cotejo firmada en libreta y lote de PDFs verificado al 100%. 👉 SELLO 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 6 (50 min) · Seguridad Nube y Entrega Oficial en Classroom
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO:
"De nada sirve haber generado los documentos más profesionales del estado de Hidalgo si cuando su cliente o docente abre el enlace, la pantalla le dice: 'Acceso Denegado / Solicita Permiso'. Hoy configuraremos privilegios de red y cerraremos la entrega oficial en Google Classroom."

🖥️ DEMO 1 (3 min):
En Google Drive, cambiar acceso general de la carpeta a: "Cualquier persona que tenga el vínculo (Lector)". La prueba de fuego: Probar el enlace en una ventana privada de incógnito.

💻 RETO 9 (15 min en PC):
Configurar la carpeta de Google Drive como pública en modo Lector y validar que abra en ventana de incógnito sin pedir cuenta.

🖥️ DEMO 2 (2 min):
Formato ejecutivo de la bitácora en Google Docs (capturas de pantalla con pie de figura) y entrega en Classroom.

💻 RETO 10 (15 min en PC):
Pegar el enlace público verificado en la tarea asignada de Google Classroom, adjuntar la bitácora con capturas y presionar Entregar Tarea.

🏷️ EVIDENCIA Y SELLO:
Pantalla de Google Classroom con la tarea entregada y enlace verificado. 👉 SELLO 5
Aviso docente: Mañana jueves no hay sesión presencial por comisión sindical; el viernes cerramos con el Kahoot final y calificaciones oficiales.`"""

# Teleprompter del Jueves (Aviso de suspensión sindical)
thursday_teleprompter = """development: `⚠️ AVISO INSTITUCIONAL · JUEVES (SIN ACTIVIDADES PRESENCIALES)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ SESIÓN 03 (JUEVES) · COMISIÓN Y PERMISO SINDICAL DOCENTE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ INDICACIÓN PARA EL GRUPO:
Sesión presencial no impartida por permiso y comisión oficial docente de carácter sindical.

💻 ACTIVIDAD AUTÓNOMA DE REGULARIZACIÓN:
Los alumnos que hayan tenido pendientes en la entrega de su carpeta o bitácora el día miércoles deberán aprovechar estas dos horas de forma autónoma para concluir sus archivos y regularizar su entrega en Google Classroom antes del cierre definitivo del viernes.`"""

# Teleprompter del Viernes (Kahoot final RA 2.1)
friday_teleprompter = """development: `🎙️ TELEPROMPTER EJECUTIVO DOCENTE · VIERNES (1 HORA)
Metodología: Kahoot Sumativo + Auditoría de Sellos + Asentamiento de Calificaciones

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
⏱️ HORA 7 (50 min) · Kahoot Final y Acreditación del RA 2.1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🗣️ FRASE GANCHO (Apertura al entrar):
"Muchachos, hoy cerramos oficialmente el Resultado de Aprendizaje 2.1. Concluyeron la base de datos, dominaron fórmulas condicionales y generaron documentos en lote en la nube. Hoy jugamos el Kahoot final para demostrar el dominio técnico del bloque y asentar sus calificaciones oficiales."

🖥️ DEMO EN CAÑÓN (2 min):
Proyectar el PIN del Kahoot Oficial del RA 2.1 (20 reactivos sobre todo el flujo: fórmulas, etiquetas, Autocrat y permisos de nube).

💻 RETO FINAL (25 min en Dispositivos):
Resolver la evaluación sumativa en dispositivos. Podio de ganadores y premiación simbólica.

🏷️ CIERRE Y ASENTAMIENTO OFICIAL (20 min):
Cotejo de los 5 sellos acumulados en la semana y asentamiento de calificaciones oficiales del RA 2.1 en listas de control escolar.
Encuadre del RA 2.2: Presentaciones Electrónicas Interactivas.`"""

pos_w07 = text.find("'W07': {")
# Reemplazar S2
pos_s2 = text.find("id: 'S2'", pos_w07)
pos_dev_s2 = text.find("development: `", pos_s2)
end_dev_s2 = text.find("`", pos_dev_s2 + 15)
text = text[:pos_dev_s2] + wednesday_teleprompter + text[end_dev_s2+1:]

# Reemplazar subtítulo de S2 para indicar 2 hrs
text = text.replace("subtitle: 'Miércoles (1 hr) · Auditoría Cruzada'", "subtitle: 'Miércoles (2 hrs) · Auditoría & Entrega Classroom'")

# Reemplazar S3
pos_s3 = text.find("id: 'S3'", pos_w07)
pos_dev_s3 = text.find("development: `", pos_s3)
end_dev_s3 = text.find("`", pos_dev_s3 + 15)
text = text[:pos_dev_s3] + thursday_teleprompter + text[end_dev_s3+1:]

# Reemplazar subtítulo de S3 para indicar permiso sindical
text = text.replace("subtitle: 'Jueves (2 hrs) · Permisos & Portafolio'", "subtitle: 'Jueves (2 hrs) · Sin Actividades (Permiso Sindical)'")

# Reemplazar S4
pos_s4 = text.find("id: 'S4'", pos_w07)
pos_dev_s4 = text.find("development: `", pos_s4)
end_dev_s4 = text.find("`", pos_dev_s4 + 15)
text = text[:pos_dev_s4] + friday_teleprompter + text[end_dev_s4+1:]

# Reemplazar subtítulo de S4
text = text.replace("subtitle: 'Viernes (1 hr) · Cierre RA 2.1'", "subtitle: 'Viernes (1 hr) · Kahoot Final & Cierre RA 2.1'")

with open("conalep/EDOA_V2/src/data/teachingPlan.js", "w", encoding="utf-8") as f:
    f.write(text)

print("teachingPlan.js actualizado con Miércoles 2h, Jueves sindical y Viernes Kahoot!")
