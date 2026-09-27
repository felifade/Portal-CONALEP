with open("conalep/EDOA_V2/src/styles/TeachingPortal.css", "r", encoding="utf-8") as f:
    css = f.read()

# Inyectar estilos ejecutivos tipo teleprompter para el bloque de desarrollo si no existen
custom_css = """
/* ESTILO EJECUTIVO TELEPROMPTER GUION DOCENTE */
.guide-teleprompter {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.6;
}
.guide-card-quote {
  background: #F0F4F8;
  border-left: 4px solid #1E3A8A;
  border-radius: 6px;
  padding: 12px 16px;
  margin-bottom: 12px;
  color: #1E293B;
  font-size: 0.92rem;
}
.guide-card-tip {
  background: #FEF9C3;
  border-left: 4px solid #CA8A04;
  border-radius: 6px;
  padding: 12px 16px;
  margin-bottom: 12px;
  color: #713F12;
  font-size: 0.90rem;
}
.guide-card-demo {
  background: #F3E8FF;
  border-left: 4px solid #7E22CE;
  border-radius: 6px;
  padding: 12px 16px;
  margin-bottom: 12px;
  color: #581C87;
  font-size: 0.90rem;
}
.guide-card-todo {
  background: #DCFCE7;
  border-left: 4px solid #15803D;
  border-radius: 6px;
  padding: 12px 16px;
  margin-bottom: 12px;
  color: #14532D;
  font-size: 0.92rem;
  font-weight: 500;
}
.guide-card-check {
  background: #E2E8F0;
  border-left: 4px solid #334155;
  border-radius: 6px;
  padding: 10px 14px;
  margin-bottom: 16px;
  color: #0F172A;
  font-size: 0.88rem;
  font-weight: 600;
}
"""

if ".guide-card-quote" not in css:
    with open("conalep/EDOA_V2/src/styles/TeachingPortal.css", "a", encoding="utf-8") as f:
        f.write(custom_css)
    print("Estilos ejecutivos teleprompter inyectados en TeachingPortal.css!")
else:
    print("Estilos ya presentes en TeachingPortal.css")
