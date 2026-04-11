import os

files_to_modify = [
    "conalep/DEWE/src/styles/App.css",
    "conalep/MTHS/src/styles/App.css",
    "assets/index-C55H5GmE.css",
    "conalep/DEWE/dist/assets/index-C55H5GmE.css",
    "conalep/MTHS/dist/assets/index-C55H5GmE.css"
]

old_line = ".main-nav-link { color: rgba(255,255,255,0.9) !important; }"
new_line = ".main-nav-link { color: rgba(255,255,255,0.9) !important; background: transparent !important; border-color: rgba(255,255,255,0.1) !important; }"

for filepath in files_to_modify:
    if os.path.exists(filepath):
        with open(filepath, 'r') as f:
            content = f.read()
        
        content = content.replace(old_line, new_line)
        
        with open(filepath, 'w') as f:
            f.write(content)
        print(f"Fixed {filepath}")
    else:
        print(f"File not found: {filepath}")
