import re

with open('conalep/EDOA_V2/src/styles/TeachingPortal.css', 'r') as f:
    content = f.read()

pattern = r"/\* --- COLUMN 3: RADAR OPERATIVO ---\s*\*/.*?/\* Info step numbers \*/"

new_css = """/* --- COLUMN 3: LESSON CONTEXT (MTCS Replica) --- */
.lesson-context {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  background: white;
  border-left: 1px solid #e2e8f0;
  overflow-y: auto;
}

.context-panel {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 18px;
  box-shadow: 0 4px 15px rgba(15, 23, 42, 0.03);
}

/* Info step numbers */"""

new_content = re.sub(pattern, new_css, content, flags=re.DOTALL)

with open('conalep/EDOA_V2/src/styles/TeachingPortal.css', 'w') as f:
    f.write(new_content)

print("CSS updated successfully for right sidebar!")
