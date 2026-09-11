with open("conalep/EDOA_V2/src/data/teachingPlan.js", "r", encoding="utf-8") as f:
    content = f.read()

# I am missing a closing brace before ",\n    'W05': {"
import re
content = content.replace(",\n    'W05': {", "    },\n    'W05': {")

with open("conalep/EDOA_V2/src/data/teachingPlan.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Braces fixed!")
