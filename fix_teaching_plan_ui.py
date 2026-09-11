import re

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the development text to remove asterisks and format cleanly
old_dev = """`Resolución de 4 "Retos Relámpago" dictados por el docente para aislar datos combinando condiciones lógicas:\\n\\n1️⃣ **Doble Filtro:** Mostrar únicamente a alumnos de la colonia "Centro" QUE ADEMÁS tengan "Laptop".\\n2️⃣ **Orden Inverso:** Filtrar a quienes usan "PC de Escritorio" y ordenarlos alfabéticamente de la Z a la A por Apellidos.\\n3️⃣ **Exclusión:** Desmarcar la opción de "Laptop" en el filtro para ocultarlos, dejando las demás activas.\\n4️⃣ **Búsqueda Textual:** Usar la barra de búsqueda del filtro en "Apellidos" para encontrar un apellido específico y ordenar sus Nombres de la A a la Z.\\n\\nGeneración de 4 capturas de pantalla de evidencia integradas y explicadas en Google Docs.`"""

new_dev = """`Resolución de 4 "Retos Relámpago" dictados por el docente para aislar datos combinando condiciones lógicas:

1️⃣ Doble Filtro: Mostrar únicamente a alumnos de la colonia "Centro" QUE ADEMÁS tengan "Laptop".
2️⃣ Orden Inverso: Filtrar a quienes usan "PC de Escritorio" y ordenarlos alfabéticamente de la Z a la A por Apellidos.
3️⃣ Exclusión: Desmarcar la opción de "Laptop" en el filtro para ocultarlos, dejando las demás activas.
4️⃣ Búsqueda Textual: Usar la barra de búsqueda del filtro en "Apellidos" para encontrar un apellido específico y ordenar sus Nombres de la A a la Z.

Generación de 4 capturas de pantalla de evidencia integradas y explicadas en Google Docs.`"""

content = content.replace(old_dev, new_dev)

# Add the infographic back to S4
pattern = r"(id: 'S4', label: 'Sesión 04', subtitle: 'Jueves \(2 hrs\) · Retos de Filtro Avanzado',.*?identification: \{.*?\},)(\s*infographicTitle: 'Retos Relámpago',)"
replacement = r"\1\n          infographicImage: imgW04S03,\2"
content = re.sub(pattern, replacement, content, flags=re.DOTALL)

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("teachingPlan.js updated!")
