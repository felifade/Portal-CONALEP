import os

custom_css = """
/* Theme overrides for Green Sidebar */
.sidebar {
  background-color: var(--primary) !important;
  color: white !important;
}
.sidebar-header {
  background: var(--primary) !important;
  border-bottom: 2px solid rgba(255,255,255,0.1) !important;
}
.school-brand {
    border-left: 5px solid rgba(255,255,255,0.3) !important;
}
.school-title { color: white !important; }
.school-subtitle { color: rgba(255,255,255,0.8) !important; }
.author-credits { background: rgba(0,0,0,0.15) !important;}
.author-label, .author-name { color: white !important; }
.ra-title { color: white !important; }
.chevron { color: rgba(255,255,255,0.7) !important; }
.week-link { color: rgba(255,255,255,0.9) !important; }
.week-link:hover { background-color: rgba(255,255,255,0.1) !important; color: white !important; }
.week-link.active { background-color: white !important; color: var(--primary) !important; font-weight: 700 !important; }
.main-nav-link { color: rgba(255,255,255,0.9) !important; }
.main-nav-link:hover { background-color: rgba(255,255,255,0.1) !important; color: white !important; }
.main-nav-link.active { background-color: white !important; color: var(--primary) !important; font-weight: 700 !important; }
.sidebar-divider { color: rgba(255,255,255,0.5) !important; }
.ra-header:hover { background-color: rgba(0,0,0,0.1) !important; }
.ra-active .ra-title { color: #fff !important; font-weight: 800 !important; }
.doc-icon { opacity: 0.9 !important; }
"""

files_to_modify = [
    "conalep/DEWE/src/styles/App.css",
    "conalep/MTHS/src/styles/App.css",
    "assets/index-C55H5GmE.css",
    "conalep/DEWE/dist/assets/index-C55H5GmE.css",
    "conalep/MTHS/dist/assets/index-C55H5GmE.css"
]

for filepath in files_to_modify:
    if os.path.exists(filepath):
        with open(filepath, 'a') as f:
            f.write(custom_css)
        print(f"Appended to {filepath}")
    else:
        print(f"File not found: {filepath}")
