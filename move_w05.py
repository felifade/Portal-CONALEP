import re

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Update RA 1.3
old_ra13 = r"\{ id: 'RA 1\.3', title: 'Automatización y Colaboración', peso: '10%', weeks: \['W03', 'W04'\] \}"
new_ra13 = r"{ id: 'RA 1.3', title: 'Automatización y Colaboración', peso: '10%', weeks: ['W03', 'W04', 'W05'] }"
content = re.sub(old_ra13, new_ra13, content)

# 2. Update RA 2.1
old_ra21 = r"\{ id: 'RA 2\.1', title: 'Fusión Masiva de Datos', peso: '15%', weeks: \['W05', 'W06'\] \}"
new_ra21 = r"{ id: 'RA 2.1', title: 'Fusión Masiva de Datos', peso: '15%', weeks: ['W06'] }"
content = re.sub(old_ra21, new_ra21, content)

with open('conalep/EDOA_V2/src/data/teachingPlan.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("teachingPlan.js updated successfully to move W05 to RA 1.3!")
