import re

with open('conalep/EDOA_V2/public/html/W04.html', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'<section class="slide">\s*<span class="eyebrow">Sesión 03 · Jueves · Hora 6 y 7</span>.*?</footer>\s*</section>\s*<section class="slide">\s*<span class="eyebrow">Sesión 03 · Jueves · Hora 6 y 7 · ejemplo y cierre</span>.*?</footer>\s*</section>'

new_slides = """<section class="slide">
      <span class="eyebrow">Sesión 04 · Jueves · Hora 6</span>
      <h2>Filtros Avanzados: Doble Condición y Orden</h2>
      <div class="work-grid">
        <article class="panel dictado">
          <div class="mini-title">Inicio · dictado</div>
          <p>El dominio de una base de datos no solo requiere conocer las herramientas, sino aplicar lógica condicional para aislar información precisa.</p>
<p>Al combinar múltiples criterios y ordenamientos, extraemos inteligencia operativa en tiempo récord sin alterar el archivo original.</p>
        </article>
        <article class="panel docs">
          <div class="mini-title">Reto 1: Doble Filtro</div>
          <p>Aplica dos filtros al mismo tiempo: Configura la tabla para mostrar únicamente a los alumnos que viven en la colonia <strong>Centro</strong> Y que tienen una <strong>Laptop</strong>. Toma captura.</p>
        </article>
        <article class="panel sheets">
          <div class="mini-title">Reto 2: Orden Inverso</div>
          <p>Filtra la lista para mostrar únicamente a los compañeros que usan <strong>PC de Escritorio</strong>. Una vez aislados, ordena la columna de Apellidos de la <strong>Z a la A</strong> (orden descendente). Toma captura.</p>
        </article>
      </div>
      <footer><strong>Producto:</strong> Dos capturas de pantalla de los primeros retos en Google Docs.</footer>
    </section>

    <section class="slide">
      <span class="eyebrow">Sesión 04 · Jueves · Hora 7</span>
      <h2>Filtros Avanzados: Exclusión y Búsqueda</h2>
      <div class="work-grid">
        <article class="panel dictado">
          <div class="mini-title">Inicio · dictado</div>
          <p>Las vistas dinámicas nos permiten excluir información masiva con un clic o encontrar agujas en un pajar utilizando el buscador integrado del filtro.</p>
        </article>
        <article class="panel docs">
          <div class="mini-title">Reto 3: Exclusión</div>
          <p>Ve a la columna de Dispositivos y desmarca ÚNICAMENTE la opción de <strong>Laptop</strong> para ocultarlos. Deja activadas todas las demás casillas para analizar otras alternativas. Toma captura.</p>
        </article>
        <article class="panel sheets">
          <div class="mini-title">Reto 4: Búsqueda Rápida</div>
          <p>Ve a 'Apellidos', haz clic en Borrar y en la barra de búsqueda escribe un apellido común. Selecciona solo a esos alumnos y ordena sus Nombres de la <strong>A a la Z</strong>. Toma captura.</p>
        </article>
      </div>
      <footer><strong>Producto:</strong> Dos capturas adicionales en Docs completando los 4 retos.</footer>
    </section>

    <section class="slide">
      <span class="eyebrow">Sesión 04 · Jueves · Hora 6 y 7 · cierre</span>
      <h2>Ejemplo del producto esperado</h2>
      <div class="example-grid">
        <article class="mock"><div class="final-grid">
  <span>Evidencia Reto 1</span><span>Evidencia Reto 2</span><span>Evidencia Reto 3</span><span>Evidencia Reto 4</span>
</div></article>
        <article class="panel gold">
          <div class="mini-title">Cierre en libreta</div>
          <ol><li>¿Por qué es útil combinar dos filtros a la vez?</li>
<li>¿Qué ventaja tiene la barra de búsqueda dentro del filtro?</li>
<li>¿Cuál de los 4 retos te pareció más difícil de aislar lógicamente?</li></ol>
          <div class="product-box"><strong>Entregable:</strong> Documento Docs con las 4 evidencias.</div>
        </article>
      </div>
      <footer><strong>Regla:</strong> avance técnico en Sheets + evidencia en Docs.</footer>
    </section>"""

if re.search(pattern, content, flags=re.DOTALL):
    new_content = re.sub(pattern, new_slides, content, flags=re.DOTALL)
    with open('conalep/EDOA_V2/public/html/W04.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("HTML detailed updated successfully!")
else:
    print("Pattern not found in HTML!")
