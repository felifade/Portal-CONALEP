with open('conalep/EDOA_V2/src/components/TeachingPortal.jsx', 'r', encoding='utf-8') as f:
    content = f.read()

old_p = """<p className="development-text" style={{marginTop: '20px'}}>{currentSessionData.development}</p>"""
new_p = """<p className="development-text" style={{marginTop: '20px', whiteSpace: 'pre-wrap', lineHeight: '1.6'}}>{currentSessionData.development}</p>"""

if old_p in content:
    content = content.replace(old_p, new_p)
    with open('conalep/EDOA_V2/src/components/TeachingPortal.jsx', 'w', encoding='utf-8') as f:
        f.write(content)
    print("JSX updated successfully!")
else:
    print("JSX not found!")
