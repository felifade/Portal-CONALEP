with open("conalep/EDOA_V2/src/components/TeachingPortal.jsx", "r", encoding="utf-8") as f:
    code = f.read()

# Función para calcular la semana activa por defecto dinámicamente
helper_func = """function getDefaultActiveWeek() {
  try {
    const weekKeys = Object.keys(teachingPlan.weeks);
    if (!weekKeys.length) return 'W00';
    // Buscar la última semana marcada como 'active'
    const activeWeeks = weekKeys.filter(k => teachingPlan.weeks[k]?.status === 'active');
    if (activeWeeks.length) return activeWeeks[activeWeeks.length - 1];
    // O retornar la última semana disponible
    return weekKeys[weekKeys.length - 1];
  } catch (e) {
    return 'W07';
  }
}

"""

# Reemplazar const [activeWeek, setActiveWeek] = useState('W04');
old_state = "const [activeWeek, setActiveWeek] = useState('W04');"
new_state = "const [activeWeek, setActiveWeek] = useState(getDefaultActiveWeek);"

if old_state in code:
    code = code.replace("const TeachingPortal = () => {", helper_func + "const TeachingPortal = () => {")
    code = code.replace(old_state, new_state)
    with open("conalep/EDOA_V2/src/components/TeachingPortal.jsx", "w", encoding="utf-8") as f:
        f.write(code)
    print("Default week logic updated successfully!")
else:
    print("Could not find old_state")
