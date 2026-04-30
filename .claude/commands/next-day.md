# Comando: /next-day

Analiza el currículo de la materia indicada, detecta el siguiente día sin contenido y propón la clase completa antes de implementar nada.

## Uso
- `/next-day mths` — analiza MTHS
- `/next-day dewe` — analiza DEWE
- `/next-day` — analiza ambas materias

## Instrucciones para Claude

1. **Leer el currículo** de la materia indicada:
   - MTHS: `conalep/MTHS/src/data/curriculum.js`
   - DEWE: `conalep/DEWE/src/data/curriculum.js`

2. **Identificar el siguiente hueco**: recorre `schedules` semana por semana, día por día (`mon`, `tue`, `wed`, `thu`, `fri`), y encuentra el primer día que tenga `hours: []` o que no exista en el array `days`.

3. **Analizar el contexto pedagógico**:
   - ¿Qué aprendieron en los días anteriores de esa semana?
   - ¿Qué aprendieron la semana anterior?
   - ¿Qué habilidad o tema es el siguiente paso lógico?
   - ¿Cuántas horas tiene ese día (revisar días equivalentes de semanas anteriores)?

4. **Mostrar la propuesta COMPLETA** con este formato exacto, sin implementar nada todavía:

---

### 📋 Propuesta — [MATERIA] Semana [N] [Día]

**Título del día:** ...
**Propósito:** ...
**Por qué tiene sentido aquí:** (1-2 líneas explicando la progresión pedagógica)

#### 🟦 Hora 1 — [Título]
- **Teoría:** ...
- **Cuaderno:** ...
- **Práctica:** (pasos numerados)
- **Código:**
  ```[lenguaje]
  ...
  ```
- **Producto:** ...
- **Nota docente:** ...

#### 🟦 Hora 2 — [Título]
(misma estructura)

**Cierre:** "..."
**Frase docente:** "..."

---

5. **Preguntar al final**: "¿Lo implemento tal cual o ajustamos algo?"

6. **Solo implementar** cuando el usuario confirme con "sí", "implementa", "dale" o similar. Nunca antes.

7. Al implementar: agregar el nuevo día en el array `days` de la semana correspondiente, hacer build con `npm run build` dentro de la carpeta de la materia, y hacer commit con el formato `content: add [MATERIA] W[N] [día] ([tema]) and bump dist`.
