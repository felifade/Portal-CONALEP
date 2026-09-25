import re

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Reemplazar subtitulo y desarrollo de S3 de W06
pattern = r"(id: 'S3', label: 'Sesión 03', subtitle: ')(Jueves \(2 hrs\) · [^']+)('[\s\S]*?development:\s*`)([^`]+)(`)"

replacement = r"\g<1>Jueves (2 hrs) · Suspensión Institucional\g<3>Aviso Institucional:\n\nSesión no impartida debido a la participación del grupo en la actividad matutina escolar del plantel.\n\nLa instalación de Autocrat y la combinación de correspondencia masiva se realizarán en el bloque de 4 horas del lunes de la Semana 07.\g<5>"

content = re.sub(pattern, replacement, content)

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Actualizado S3 de W06 en teachingPlan.js")
