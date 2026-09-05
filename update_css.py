import re

with open('conalep/EDOA_V2/src/styles/TeachingPortal.css', 'r') as f:
    content = f.read()

# Replace the block from /* --- COLUMN 1: CORTE RAIL --- */ down to /* --- COLUMN 2: CLASS GUIDE --- */
pattern = r"/\* --- COLUMN 1: CORTE RAIL ---\s*\*/.*?/\* --- COLUMN 2: CLASS GUIDE ---\s*\*/"

new_css = """/* --- COLUMN 1: CORTE RAIL (MTCS Replica) --- */
.lesson-rail {
  background: white;
  border-right: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 15px;
  gap: 15px;
}

.lesson-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
  color: #0f172a;
}
.lesson-brand strong { display: block; font-size: 15px; font-weight: 800; }
.lesson-brand span { font-size: 11px; color: #64748b; }

.corte-stack {
  display: grid;
  gap: 12px;
}

.corte-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
}
.corte-card.active {
  border-color: #10b981;
  border-left: 4px solid #10b981;
}

.corte-card-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 8px;
}
.corte-card-header span { font-size: 13.5px; font-weight: 800; color: #0f172a; }
.corte-card-header strong { font-size: 12px; font-weight: 850; color: #059669; }

.ra-list {
  display: grid;
  gap: 10px;
  margin-top: 10px;
}

.ra-mini {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  padding: 10px;
}
.ra-mini-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
}
.ra-mini-top strong { color: #1d4ed8; font-size: 11px; display: block; }
.ra-mini-top span { font-size: 11px; font-weight: 700; color: #475569; display: block; margin-top: 2px; line-height: 1.2; }
.ra-mini-top small { font-size: 10px; font-weight: 700; color: #64748b; background: #e2e8f0; padding: 1px 4px; border-radius: 4px; }

.ra-weeks-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 5px;
}

.ra-week-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  padding: 4px 6px;
  border-radius: 12px;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease;
  position: relative;
}
.ra-week-pill:hover { border-color: #94a3b8; background: #f1f5f9; }
.ra-week-pill.active { background: #025940; border-color: #025940; color: white; }
.ra-week-pill.active .pill-badge { background: rgba(255, 255, 255, 0.2); color: white; }
.ra-week-pill.active .pill-label { color: white; font-weight: 700; }

.pill-badge {
  background: #f1f5f9;
  color: #64748b;
  font-size: 9px;
  font-weight: 800;
  padding: 2px 4px;
  border-radius: 4px;
}
.pill-label { font-size: 10px; color: #334155; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

.pill-status-dot { color: #ef4444; font-size: 12px; position: absolute; top: -3px; right: -2px; }

/* --- COLUMN 2: CLASS GUIDE --- */"""

new_content = re.sub(pattern, new_css, content, flags=re.DOTALL)

with open('conalep/EDOA_V2/src/styles/TeachingPortal.css', 'w') as f:
    f.write(new_content)

print("CSS updated successfully!")
