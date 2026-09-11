import re

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the single quotes for `development:` with backticks, and same for `dictation:` just in case
pattern = r"development: 'Resolución de 4.*?Docs\.'"
new_dev = r"`Resolución de 4 \"Retos Relámpago\" dictados por el docente para aislar datos combinando condiciones lógicas:\n\n1️⃣ **Doble Filtro:** Mostrar únicamente a alumnos de la colonia \"Centro\" QUE ADEMÁS tengan \"Laptop\".\n2️⃣ **Orden Inverso:** Filtrar a quienes usan \"PC de Escritorio\" y ordenarlos alfabéticamente de la Z a la A por Apellidos.\n3️⃣ **Exclusión:** Desmarcar la opción de \"Laptop\" en el filtro para ocultarlos, dejando las demás activas.\n4️⃣ **Búsqueda Textual:** Usar la barra de búsqueda del filtro en \"Apellidos\" para encontrar un apellido específico y ordenar sus Nombres de la A a la Z.\n\nGeneración de 4 capturas de pantalla de evidencia integradas y explicadas en Google Docs.`"

if re.search(pattern, content, flags=re.DOTALL):
    content = re.sub(pattern, "development: " + new_dev, content, flags=re.DOTALL)
    with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed JS syntax")
else:
    print("Pattern not found!")
