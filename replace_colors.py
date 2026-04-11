import os

replacements = {
    "#006341": "#025940",
    "#004d32": "#013a29",
    "#d9efe4": "#e0ece7",
    "#f3f8f5": "#f4f7f6",
    "#0b3d2c": "#1a2320",
    "#4a6b5f": "#5e7069",
    "#e2ede8": "#dce4e0"
}

files_to_modify = [
    "assets/index-C55H5GmE.css",
    "conalep/DEWE/dist/assets/index-C55H5GmE.css",
    "conalep/MTHS/dist/assets/index-C55H5GmE.css"
]

for filepath in files_to_modify:
    if os.path.exists(filepath):
        with open(filepath, 'r') as f:
            content = f.read()
        for old, new in replacements.items():
            content = content.replace(old, new)
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Updated {filepath}")
    else:
        print(f"File not found: {filepath}")
