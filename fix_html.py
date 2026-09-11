import re

with open('conalep/EDOA_V2/public/html/W04.html', 'r', encoding='utf-8') as f:
    content = f.read()

# I will replace the 4 slides for Jueves Hora 6 and Hora 7 with 2 slides for Retos Relámpago.
# The pattern will match from: <section class="slide">\n      <span class="eyebrow">Sesión 03 · Jueves · Hora 6</span>
# To the end of Hora 7 cierre: </footer>\n    </section> (just before Viernes Hora 8)

pattern = r'<section class="slide">\s*<span class="eyebrow">Sesión 03 · Jueves · Hora 6</span>.*?</footer>\s*</section>\s*<section class="slide">\s*<span class="eyebrow">Sesión 03 · Jueves · Hora 6 · ejemplo y cierre</span>.*?</footer>\s*</section>\s*<section class="slide">\s*<span class="eyebrow">Sesión 03 · Jueves · Hora 7</span>.*?</footer>\s*</section>\s*<section class="slide">\s*<span class="eyebrow">Sesión 03 · Jueves · Hora 7 · ejemplo y cierre</span>.*?</footer>\s*</section>'

new_slides = """<section class="slide">
      <span class="eyebrow">Sesión 03 · Jueves · Hora 6 y 7</span>
      <h2>Retos Relámpago de Filtro Avanzado</h2>
      <div class="work-grid">
        <article class="panel dictado">
          <div class="mini-title">Inicio · dictado</div>
          <p>El dominio de una base de datos requiere lógica condicional para aislar información.</p>
<p>Al combinar criterios o hacer búsquedas específicas, podemos extraer inteligencia operativa en tiempo récord.</p>
        </article>
        <article class="panel docs">
          <div class="mini-title">Docs documenta</div>
          <ol><li>Reto 1: Filtro doble (Colonia + Dispositivo).</li>
<li>Reto 2: Orden inverso (Z-A).</li>
<li>Reto 3: Exclusión (Desmarcar casillas).</li>
<li>Reto 4: Búsqueda textual específica.</li></ol>
        </article>
        <article class="panel sheets">
          <div class="mini-title">Sheets practica</div>
          <ol><li>Filtrar y capturar Reto 1.</li>
<li>Filtrar y capturar Reto 2.</li>
<li>Filtrar y capturar Reto 3.</li>
<li>Filtrar y capturar Reto 4.</li></ol>
        </article>
      </div>
      <footer><strong>Producto:</strong> Evidencia de 4 capturas en Google Docs.</footer>
    </section>

    <section class="slide">
      <span class="eyebrow">Sesión 03 · Jueves · Hora 6 y 7 · ejemplo y cierre</span>
      <h2>Ejemplo del producto esperado</h2>
      <div class="example-grid">
        <article class="mock"><div class="final-grid">
  <span>Captura Reto 1</span><span>Captura Reto 2</span><span>Captura Reto 3</span><span>Captura Reto 4</span>
</div></article>
        <article class="panel gold">
          <div class="mini-title">Cierre en libreta</div>
          <ol><li>¿Por qué es útil combinar dos filtros a la vez?</li>
<li>¿Qué ventaja tiene la barra de búsqueda en el filtro?</li>
<li>¿Por qué el filtro no daña tu base de datos?</li></ol>
          <div class="product-box"><strong>Entregable:</strong> Documento Docs con las 4 evidencias.</div>
        </article>
      </div>
      <footer><strong>Regla:</strong> avance técnico en Sheets + evidencia breve en Docs.</footer>
    </section>"""

if re.search(pattern, content, flags=re.DOTALL):
    new_content = re.sub(pattern, new_slides, content, flags=re.DOTALL)
    with open('conalep/EDOA_V2/public/html/W04.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("HTML updated successfully!")
else:
    print("Pattern not found in HTML!")
