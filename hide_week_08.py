import os

filepath = "conalep/MTHS/dist/assets/index-C2Lb-qff.js"
old_str = ",{id:`W08`,label:`Semana 08 (20-24 Abr)`}"
new_str = ""

if os.path.exists(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    if old_str in content:
        content = content.replace(old_str, new_str)
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Successfully hidden Semana 08 in {filepath}")
    else:
        print(f"String not found in {filepath}. It might already be hidden or slightly different.")
else:
    print(f"File not found: {filepath}")
