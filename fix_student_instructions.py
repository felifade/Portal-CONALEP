import re

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Define the new development text with clear student instructions
new_dev = r"`**Instrucciones para el Alumno:**\n\n1️⃣ **Preparar el Lienzo:** Abre tu archivo de Hojas de Cálculo ''Directorio Grupo 301'' (el que hiciste la semana pasada) e inserta 6 filas en blanco hasta arriba. Este será tu espacio para el Panel de Control (Dashboard).\n\n2️⃣ **Panel de Fórmulas:** En esas nuevas celdas, calcula automáticamente los datos de tus compañeros usando: \n• =CONTARA (Total de registros)\n• =PROMEDIO (Promedio de edad)\n• =MAX y =MIN (El alumno más grande y el más chico)\n• =CONTAR.SI (Cuántos hombres y cuántas mujeres hay).\n\n3️⃣ **Panel de Gráficos:** Selecciona tus datos e inserta 4 gráficas (Pastel para Sexo, Barras para Edades, Anillo para Dispositivos y Columnas para Colonias). Acomódalas estéticamente debajo de tus fórmulas.\n\n4️⃣ **Alertas Visuales:** Selecciona la columna de ''Dispositivos'' y ponle una regla de Formato Condicional para que se pinte de ROJO automáticamente si dice ''Ninguno''.\n\n5️⃣ **Evidencia:** Toma capturas de tu Dashboard funcional y súbelas a tu bitácora de Google Docs.`"

# Regex to find the development block in W05 S1
pattern = r"(id: 'S1', label: 'Sesión 01', subtitle: 'Jueves \(2 hrs\) · Dashboard y Fórmulas',.*?development:\s*)`[^`]*`(,\s*closure: 'Dashboard interactivo que cambia colores y gráficas en tiempo real.')"

if re.search(pattern, content, flags=re.DOTALL):
    content = re.sub(pattern, r"\1" + new_dev + r"\2", content, flags=re.DOTALL)
    with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Student instructions updated!")
else:
    print("Pattern not found for development block.")
