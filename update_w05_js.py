import re

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Add import
import_stmt = "import imgW05S01 from '../assets/w05_s01_infografia.png';\n"
if "imgW05S01" not in content:
    content = content.replace("export const teachingPlan = {", import_stmt + "\nexport const teachingPlan = {")

# Add infographicImage to W05 S1
pattern = r"(id: 'S1', label: 'Sesión 01', subtitle: 'Jueves \(2 hrs\) · Dashboard y Fórmulas',.*?infographicTitle: 'Dashboard Interactivo',)"
replacement = r"\1\n          infographicImage: imgW05S01,"

content = re.sub(pattern, replacement, content, flags=re.DOTALL)

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("teachingPlan.js updated with W05 image!")
