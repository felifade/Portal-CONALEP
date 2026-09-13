import re

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update the import from .png to .jpg
content = content.replace("import imgW05S01 from '../assets/w05_s01_infografia.png';", "import imgW05S01 from '../assets/w05_s01_infografia.jpg';")

# 2. Update the infographicSteps for W05 S1
old_steps = r"infographicSteps: \[\s*\{ title: '1\. Fórmulas Base', desc: 'SUMA, PROMEDIO, CONTAR\.SI' \},\s*\{ title: '2\. Gráfico Pastel', desc: 'Porcentaje de Sexo' \},\s*\{ title: '3\. Gráfico Barras', desc: 'Edades y Colonias' \},\s*\{ title: '4\. Formato Condicional', desc: 'Pintar celdas en rojo' \}\s*\]"

new_steps = """infographicSteps: [
            { title: '1. Aplica Fórmulas', desc: 'Calcula, analiza y automatiza con fórmulas.' },
            { title: '2. Crea Gráficos', desc: 'Visualiza la información de forma profesional.' },
            { title: '3. Formato Condicional', desc: 'Resalta lo importante de un vistazo.' },
            { title: '4. Dashboard final', desc: 'Organiza y presenta resultados claros.' }
          ]"""

if re.search(old_steps, content):
    content = re.sub(old_steps, new_steps, content)
else:
    print("WARNING: Could not find old steps to replace. Trying a more general regex...")
    # fallback regex
    fallback = r"infographicSteps:\s*\[.*?\]"
    # we only want to replace the FIRST occurrence after W05
    w05_idx = content.find("'W05': {")
    if w05_idx != -1:
        match = re.search(fallback, content[w05_idx:], re.DOTALL)
        if match:
            start = w05_idx + match.start()
            end = w05_idx + match.end()
            content = content[:start] + new_steps + content[end:]
        else:
            print("Still failed to find steps.")

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("teachingPlan.js updated successfully!")
