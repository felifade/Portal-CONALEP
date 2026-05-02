/* ─────────────────────────────────────────────────────────────
   HTML base — el index.html que se creó en W08 Lunes
   ───────────────────────────────────────────────────────────── */
const INDEX_HTML = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resident Evil V 1.2</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- ENCABEZADO -->
  <header>
    <section id="inicio">
      <h1>Resident Evil</h1>
      <p>Fan page creada en HTML puro</p>
    </section>
  </header>

  <!-- MENÚ -->
  <nav>
    <ul>
      <li><a href="#inicio" class="activo">Inicio</a></li>
      <li><a href="paginas/personajes.html">Personajes</a></li>
      <li><a href="paginas/juegos.html">Juegos</a></li>
      <li><a href="#cronologia">Cronología</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
    <hr>
  </nav>

  <!-- CONTENIDO PRINCIPAL -->
  <main>

    <!-- PERSONAJES -->
    <section id="personajes">
      <h2>Personajes principales</h2>
      <a href="paginas/personajes.html">ABRIR VISTA COMPLETA</a>
      <article>
        <h3>Leon S. Kennedy</h3>
        <p>Uno de los personajes más importantes de la saga.</p>
      </article>
      <article>
        <h3>Jill Valentine</h3>
        <p>Miembro de S.T.A.R.S. reconocida por su inteligencia.</p>
      </article>
      <article>
        <h3>Chris Redfield</h3>
        <p>Protagonista clave en la lucha contra Umbrella.</p>
      </article>
      <img src="https://upload.wikimedia.org/wikipedia/en/0/03/Resident_Evil_4_cover.jpg" width="250" alt="RE4">
      <a href="#inicio">Regresar al Inicio</a>
    </section>

    <!-- JUEGOS -->
    <section id="juegos">
      <h2>Juegos representativos</h2>
      <ul>
        <li>Resident Evil</li>
        <li>Resident Evil 2</li>
        <li>Resident Evil 3</li>
        <li>Resident Evil 4</li>
        <li>Resident Evil 7</li>
        <li>Resident Evil Village</li>
      </ul>
      <p>Visita: <a href="https://www.residentevil.com/" target="_blank">Página oficial</a></p>
      <a href="#inicio">Regresar al Inicio</a>
    </section>

    <!-- CRONOLOGÍA -->
    <section id="cronologia">
      <h2>Cronología básica</h2>
      <table border="1">
        <tr><th>Juego</th><th>Año</th><th>Tipo</th></tr>
        <tr><td>Resident Evil</td><td>1996</td><td>Survival Horror</td></tr>
        <tr><td>Resident Evil 2</td><td>1998</td><td>Survival Horror</td></tr>
        <tr><td>Resident Evil 4</td><td>2005</td><td>Acción / Horror</td></tr>
        <tr><td>Resident Evil 7</td><td>2017</td><td>Survival Horror</td></tr>
      </table>
    </section>

    <!-- CONTACTO -->
    <section id="contacto">
      <h2>Contacto</h2>
      <form>
        <label>Nombre:</label><br>
        <input type="text"><br><br>
        <label>Correo:</label><br>
        <input type="email"><br><br>
        <label>Edad:</label><br>
        <input type="number"><br><br>
        <label>Comentario:</label><br>
        <textarea rows="4" cols="30"></textarea><br><br>
        <input type="submit" value="Enviar">
        <input type="reset" value="Limpiar">
      </form>
    </section>

  </main>

  <hr>

  <!-- PIE DE PÁGINA -->
  <footer>
    <p>Fan Page de Resident Evil - Proyecto HTML</p>
  </footer>

</body>
</html>`;

/* ─────────────────────────────────────────────────────────────
   paginas/personajes.html — creada en W08 Jueves
   ───────────────────────────────────────────────────────────── */
const PERSONAJES_HTML = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Personajes — Resident Evil</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>

  <header>
    <h1>Personajes</h1>
  </header>

  <nav>
    <ul>
      <li><a href="../index.html">Inicio</a></li>
      <li><a href="personajes.html" class="activo">Personajes</a></li>
      <li><a href="juegos.html">Juegos</a></li>
      <li><a href="cronologia.html">Cronología</a></li>
    </ul>
  </nav>

  <main>
    <section>
      <h2>Personajes principales</h2>

      <article>
        <h3>Leon S. Kennedy</h3>
        <p>Ex-oficial del Departamento de Policía de Raccoon City. Sobrevivió al brote del T-Virus en 1998.</p>
      </article>

      <article>
        <h3>Jill Valentine</h3>
        <p>Miembro fundadora de S.T.A.R.S. Sobrevivió a la Mansión Spencer y al incidente de Raccoon City.</p>
      </article>

      <article>
        <h3>Chris Redfield</h3>
        <p>Cofundador de S.T.A.R.S. y del B.S.A.A. Ha enfrentado a Umbrella en múltiples misiones.</p>
      </article>

      <article>
        <h3>Claire Redfield</h3>
        <p>Hermana de Chris. Llegó a Raccoon City buscándolo y sobrevivió junto a Sherry Birkin.</p>
      </article>

      <article>
        <h3>Ada Wong</h3>
        <p>Agente de identidad misteriosa. Sus lealtades siempre han sido ambiguas.</p>
      </article>

      <article>
        <h3>Albert Wesker</h3>
        <p>Ex-capitán de S.T.A.R.S. Infectado con el Prototype Virus. Buscaba dominar el mundo.</p>
      </article>
    </section>
  </main>

  <footer>
    <p>Fan Page de Resident Evil - Proyecto HTML</p>
  </footer>

</body>
</html>`;

/* ─────────────────────────────────────────────────────────────
   paginas/juegos.html — creada en W08 Jueves
   ───────────────────────────────────────────────────────────── */
const JUEGOS_HTML = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Juegos — Resident Evil</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>

  <header>
    <h1>Juegos</h1>
  </header>

  <nav>
    <ul>
      <li><a href="../index.html">Inicio</a></li>
      <li><a href="personajes.html">Personajes</a></li>
      <li><a href="juegos.html" class="activo">Juegos</a></li>
      <li><a href="cronologia.html">Cronología</a></li>
    </ul>
  </nav>

  <main>
    <section>
      <h2>Juegos representativos</h2>

      <ul>
        <li>Resident Evil (1996)</li>
        <li>Resident Evil 2 (1998)</li>
        <li>Resident Evil 3: Nemesis (1999)</li>
        <li>Resident Evil 4 (2005)</li>
        <li>Resident Evil 5 (2009)</li>
        <li>Resident Evil 6 (2012)</li>
        <li>Resident Evil 7: Biohazard (2017)</li>
        <li>Resident Evil 2 Remake (2019)</li>
        <li>Resident Evil Village (2021)</li>
        <li>Resident Evil 4 Remake (2023)</li>
      </ul>

      <p>Visita el sitio oficial:</p>
      <a href="https://www.residentevil.com/" target="_blank">residentevil.com</a>
    </section>
  </main>

  <footer>
    <p>Fan Page de Resident Evil - Proyecto HTML</p>
  </footer>

</body>
</html>`;

/* ─────────────────────────────────────────────────────────────
   paginas/cronologia.html — creada en W08 Jueves
   ───────────────────────────────────────────────────────────── */
const CRONOLOGIA_HTML = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Cronología — Resident Evil</title>
  <link rel="stylesheet" href="../css/style.css">
</head>
<body>

  <header>
    <h1>Cronología</h1>
  </header>

  <nav>
    <ul>
      <li><a href="../index.html">Inicio</a></li>
      <li><a href="personajes.html">Personajes</a></li>
      <li><a href="juegos.html">Juegos</a></li>
      <li><a href="cronologia.html" class="activo">Cronología</a></li>
    </ul>
  </nav>

  <main>
    <section>
      <h2>Cronología básica</h2>

      <table border="1">
        <tr>
          <th>Juego</th>
          <th>Año</th>
          <th>Tipo</th>
        </tr>
        <tr>
          <td>Resident Evil</td>
          <td>1996</td>
          <td>Survival Horror</td>
        </tr>
        <tr>
          <td>Resident Evil 2</td>
          <td>1998</td>
          <td>Survival Horror</td>
        </tr>
        <tr>
          <td>Resident Evil 3: Nemesis</td>
          <td>1999</td>
          <td>Survival Horror</td>
        </tr>
        <tr>
          <td>Resident Evil 4</td>
          <td>2005</td>
          <td>Acción / Horror</td>
        </tr>
        <tr>
          <td>Resident Evil 7: Biohazard</td>
          <td>2017</td>
          <td>Survival Horror</td>
        </tr>
        <tr>
          <td>Resident Evil Village</td>
          <td>2021</td>
          <td>Survival Horror</td>
        </tr>
      </table>
    </section>
  </main>

  <footer>
    <p>Fan Page de Resident Evil - Proyecto HTML</p>
  </footer>

</body>
</html>`;

/* ─────────────────────────────────────────────────────────────
   CSS Semana 09 Lunes — el CSS real de clase
   ───────────────────────────────────────────────────────────── */
const CSS_W09_LUNES = `/* SEMANA 09 LUNES */

body {
  background-color: green;
  color: #e2e8f0;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

h1 {
  color: #e53e3e;
  font-size: 2rem;
}

p {
  line-height: 1.6;
}

/* Nav estilizado */
nav {
  background-color: #1a0000;
  display: flex;
  gap: 8px;
  padding: 12px 24px;
}

/* Imágenes estilizadas */
img {
  max-width: 280px;
  display: block;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.05);
}

/* Centrar el contenido principal */
main {
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 20px;
}

/* Galería flexible */
.galeria {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}`;

/* ─────────────────────────────────────────────────────────────
   CSS Semana 09 Jueves — nav a + hover + .activo
   ───────────────────────────────────────────────────────────── */
const CSS_W09_JUEVES = `/* SEMANA 09 JUEVES */

nav a {
  color: #ffffff;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
}

nav a:hover {
  background-color: #8b0000;
  color: #ffffff;
}

nav a.activo {
  background-color: #8b0000;
  color: #ffffff;
  font-weight: bold;
}`;

/* ─────────────────────────────────────────────────────────────
   Helpers para construir el srcdoc de cada snapshot
   ───────────────────────────────────────────────────────────── */
const withCSS = (html, css) =>
  html.replace(
    '<link rel="stylesheet" href="css/style.css">',
    `<style>${css}</style>`
  );

const withCSSNested = (html, css) =>
  html.replace(
    '<link rel="stylesheet" href="../css/style.css">',
    `<style>${css}</style>`
  );

/* CSS acumulado al final de W09 */
const CSS_FINAL = CSS_W09_LUNES + '\n\n' + CSS_W09_JUEVES;

/* ─────────────────────────────────────────────────────────────
   HTML actual del proyecto (W09 final — con btn-ver / btn-volver)
   ───────────────────────────────────────────────────────────── */
const INDEX_V2 = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resident Evil — Fan Page</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <header>
    <section id="inicio">
      <h1>Resident Evil</h1>
      <p>Fan page creada en HTML + CSS</p>
    </section>
  </header>

  <nav>
    <ul>
      <li><a href="#inicio" class="activo">Inicio</a></li>
      <li><a href="paginas/personajes.html">Personajes</a></li>
      <li><a href="paginas/juegos.html">Juegos</a></li>
      <li><a href="#cronologia">Cronología</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
  </nav>

  <main>

    <section id="personajes">
      <h2>Personajes principales</h2>
      <a href="paginas/personajes.html" class="btn-ver">ABRIR VISTA COMPLETA</a>

      <article>
        <h3>Leon S. Kennedy</h3>
        <p>Uno de los personajes más importantes de la saga. Destaca por su valentía y evolución dentro de la historia.</p>
      </article>

      <article>
        <h3>Jill Valentine</h3>
        <p>Miembro de S.T.A.R.S. reconocida por su inteligencia y habilidades en combate.</p>
      </article>

      <article>
        <h3>Chris Redfield</h3>
        <p>Protagonista clave en la lucha contra Umbrella y otras amenazas biológicas.</p>
      </article>

      <img src="https://upload.wikimedia.org/wikipedia/en/0/03/Resident_Evil_4_cover.jpg" width="250" alt="Resident Evil 4">
      <a href="#inicio" class="btn-volver">↑ Regresar al Inicio</a>
    </section>

    <section id="juegos">
      <h2>Juegos representativos</h2>
      <ul>
        <li>Resident Evil (1996)</li>
        <li>Resident Evil 2 (1998)</li>
        <li>Resident Evil 3 (1999)</li>
        <li>Resident Evil 4 (2005)</li>
        <li>Resident Evil 7 (2017)</li>
        <li>Resident Evil Village (2021)</li>
      </ul>
      <p>Visita el sitio oficial: <a href="https://www.residentevil.com/" target="_blank">residentevil.com</a></p>
      <a href="#inicio" class="btn-volver">↑ Regresar al Inicio</a>
    </section>

    <section id="cronologia">
      <h2>Cronología básica</h2>
      <table>
        <tr><th>Juego</th><th>Año</th><th>Tipo</th></tr>
        <tr><td>Resident Evil</td><td>1996</td><td>Survival Horror</td></tr>
        <tr><td>Resident Evil 2</td><td>1998</td><td>Survival Horror</td></tr>
        <tr><td>Resident Evil 4</td><td>2005</td><td>Acción / Horror</td></tr>
        <tr><td>Resident Evil 7</td><td>2017</td><td>Survival Horror</td></tr>
      </table>
    </section>

    <section id="contacto">
      <h2>Contacto</h2>
      <form>
        <label>Nombre:</label><br>
        <input type="text" placeholder="Tu nombre"><br><br>
        <label>Correo:</label><br>
        <input type="email" placeholder="tu@correo.com"><br><br>
        <label>Edad:</label><br>
        <input type="number" placeholder="17"><br><br>
        <label>Comentario:</label><br>
        <textarea rows="4" cols="30" placeholder="Escribe tu comentario..."></textarea><br><br>
        <input type="submit" value="Enviar">
        <input type="reset" value="Limpiar">
      </form>
    </section>

  </main>

  <footer>
    <p>Fan Page de Resident Evil — Proyecto DEWE · Grupo 601 · CONALEP Pachuca II</p>
  </footer>

</body>
</html>`;

/* ─────────────────────────────────────────────────────────────
   CSS profesional completo — el que se ve al abrir el proyecto
   ───────────────────────────────────────────────────────────── */
const CSS_PRO = `/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* ── Body ── */
body {
  background-color: #0a0a0a;
  color: #f0f0f0;
  font-family: 'Segoe UI', Arial, sans-serif;
}

/* ── Header ── */
header {
  background-color: #1a0000;
  padding: 60px 60px;
  text-align: center;
  border-bottom: 3px solid #b91c1c;
}

header h1 {
  font-size: 56px;
  color: #ef4444;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 10px;
  text-shadow: 0 0 30px rgba(185,28,28,0.5);
}

header p {
  color: #888;
  font-size: 14px;
  letter-spacing: 2px;
}

/* ── Nav ── */
nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(10, 10, 10, 0.95);
  border-bottom: 2px solid #b91c1c;
  backdrop-filter: blur(8px);
}

nav ul {
  list-style: none;
  display: flex;
  gap: 8px;
  padding: 0 40px;
  margin: 0;
  height: 56px;
  align-items: center;
}

nav a {
  color: #888;
  text-decoration: none;
  font-size: 13px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding-bottom: 4px;
  position: relative;
  transition: color 0.2s;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 0; height: 2px;
  background-color: #ef4444;
  transition: width 0.25s ease;
}

nav a:hover { color: #f0f0f0; }
nav a:hover::after { width: 100%; }
nav a.activo { color: #ef4444; }
nav a.activo::after { width: 100%; }

/* ── Main / Sections ── */
main { padding: 0; }

section {
  padding: 50px 60px;
  border-bottom: 1px solid #1a1a1a;
}

h2 {
  font-size: 28px;
  color: #ef4444;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 24px;
  border-left: 4px solid #b91c1c;
  padding-left: 16px;
}

/* ── Articles ── */
article {
  background-color: #1a1a1a;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  padding: 20px 24px;
  margin-bottom: 16px;
  transition: border-color 0.25s ease, transform 0.25s ease;
}

article:hover {
  border-color: #b91c1c;
  transform: translateY(-3px);
}

article h3 { color: #f0f0f0; margin-bottom: 8px; font-size: 18px; }
article p  { color: #888; line-height: 1.6; }

/* ── Links ── */
a { color: #ef4444; }
a:hover { color: #f87171; }

.btn-ver {
  display: inline-block;
  margin-bottom: 24px;
  padding: 10px 24px;
  border: 1.5px solid #b91c1c;
  border-radius: 6px;
  color: #ef4444;
  text-decoration: none;
  font-size: 12px;
  letter-spacing: 2px;
  transition: background-color 0.2s;
}

.btn-ver:hover { background-color: rgba(185,28,28,0.15); color: #ef4444; }

.btn-volver {
  display: inline-block;
  margin-top: 20px;
  color: #555;
  font-size: 12px;
  text-decoration: none;
  letter-spacing: 1px;
  transition: color 0.2s;
}

.btn-volver:hover { color: #ef4444; }

/* ── Image ── */
img {
  border: 2px solid #b91c1c;
  border-radius: 8px;
  display: block;
  margin: 24px 0;
}

/* ── Lista de juegos ── */
ul { padding-left: 24px; }
ul li {
  padding: 8px 0;
  color: #ccc;
  border-bottom: 1px solid #1a1a1a;
  list-style: none;
}
ul li::before { content: '▸ '; color: #b91c1c; }

/* ── Tabla ── */
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 20px;
}
th {
  background-color: #b91c1c;
  color: white;
  padding: 12px 16px;
  text-align: left;
  letter-spacing: 1px;
}
td {
  padding: 10px 16px;
  border: 1px solid #2a2a2a;
  color: #ccc;
}
tr:hover td { background-color: #1a1a1a; }

/* ── Formulario ── */
label {
  color: #888;
  font-size: 13px;
  letter-spacing: 1px;
  display: block;
  margin-bottom: 4px;
}

input[type="text"],
input[type="email"],
input[type="number"],
textarea {
  background-color: #1a1a1a;
  border: 1px solid #333;
  color: #f0f0f0;
  padding: 10px 14px;
  border-radius: 6px;
  width: 320px;
  font-size: 14px;
  font-family: inherit;
  transition: border-color 0.2s;
}

input:focus, textarea:focus {
  border-color: #b91c1c;
  outline: none;
}

input[type="submit"] {
  background-color: #b91c1c;
  color: white;
  border: none;
  padding: 10px 28px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
  width: auto;
}
input[type="submit"]:hover { background-color: #ef4444; }

input[type="reset"] {
  background-color: transparent;
  border: 1px solid #333;
  color: #888;
  padding: 10px 28px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  width: auto;
}
input[type="reset"]:hover { border-color: #555; color: #ccc; }

/* ── Footer ── */
footer {
  background-color: #050505;
  border-top: 1px solid #1a1a1a;
  padding: 32px 60px;
  text-align: center;
  color: #444;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
}`;

/* ─────────────────────────────────────────────────────────────
   W10 Viernes — bloques de JS acumulables
   ───────────────────────────────────────────────────────────── */
const SCRIPT_H1 = `    // ── Hora 1: Variables y console.log ─────────────────────
    let titulo = "Resident Evil Fan Page";
    let version = "1.0";
    let anio = 2026;

    console.log("Bienvenido a: " + titulo);
    console.log("Versión: " + version);
    console.log("Año: " + anio);`;

const FUNC_MOSTRAR_INFO = `    // ── Hora 2: getElementById + onclick ───────────────────
    function mostrarInfo() {
      let elem = document.getElementById("info-extra");
      if (elem.style.display === "none") {
        elem.style.display = "block";
      } else {
        elem.style.display = "none";
      }
    }`;

const FUNC_TOGGLE_MODO = `    // ── Hora 3: classList.toggle + modo claro ───────────────
    function toggleModo() {
      document.body.classList.toggle("modo-claro");
      let btn = document.getElementById("btn-modo");
      if (document.body.classList.contains("modo-claro")) {
        btn.textContent = "🌙 Modo Oscuro";
      } else {
        btn.textContent = "☀ Modo Claro";
      }
    }`;

const makeScript = (...parts) =>
  `  <script>\n${parts.join('\n\n')}\n  </script>`;

/* ── Piezas de HTML que se van agregando ─────────────────── */
const PERSONAJES_CON_BOTON =
`      <h2>Personajes principales</h2>
      <button onclick="mostrarInfo()">🔍 Más información</button>
      <p id="info-extra" style="display:none; margin-top:8px; color:#888;">
        Los personajes son agentes especiales que combaten amenazas biológicas.
        Cada uno tiene habilidades únicas de combate y supervivencia.
      </p>
      <a href="paginas/personajes.html" class="btn-ver">ABRIR VISTA COMPLETA</a>`;

const LI_BTN_MODO =
`<li><a href="#contacto">Contacto</a></li>
      <li>
        <button id="btn-modo" onclick="toggleModo()"
          style="cursor:pointer;padding:6px 14px;background:#8b0000;color:white;border:none;border-radius:4px;font-size:13px;">
          ☀ Modo Claro
        </button>
      </li>`;

const STYLE_MODO_CLARO =
`<link rel="stylesheet" href="css/style.css">
  <style>
    /* ── W10 H3: Modo claro ───────────────────────────────── */
    body.modo-claro { background-color: #f5f5f5; color: #111111; }
    body.modo-claro nav { background-color: #dddddd; }
    body.modo-claro nav a { color: #222222; }
    body.modo-claro nav a:hover { background-color: #b91c1c; color: #ffffff; }
    body.modo-claro h2 { color: #b91c1c; }
  </style>`;

/* ── index.html de cada hora — base: INDEX_V2 + CSS_PRO ─────
   (las horas JS se construyen sobre el sitio ya con CSS pro) */
const INDEX_W10_H1 = INDEX_V2
  .replace('</body>', makeScript(SCRIPT_H1) + '\n\n</body>');

const INDEX_W10_H2 = INDEX_V2
  .replace(
    '      <h2>Personajes principales</h2>\n      <a href="paginas/personajes.html" class="btn-ver">ABRIR VISTA COMPLETA</a>',
    PERSONAJES_CON_BOTON
  )
  .replace('</body>', makeScript(SCRIPT_H1, FUNC_MOSTRAR_INFO) + '\n\n</body>');

const INDEX_W10_H3 = INDEX_V2
  .replace('<link rel="stylesheet" href="css/style.css">', STYLE_MODO_CLARO)
  .replace(
    '      <h2>Personajes principales</h2>\n      <a href="paginas/personajes.html" class="btn-ver">ABRIR VISTA COMPLETA</a>',
    PERSONAJES_CON_BOTON
  )
  .replace('<li><a href="#contacto">Contacto</a></li>', LI_BTN_MODO)
  .replace('</body>', makeScript(SCRIPT_H1, FUNC_MOSTRAR_INFO, FUNC_TOGGLE_MODO) + '\n\n</body>');

/* ── Snippets para dictar en clase (solo lo nuevo de cada hora) */
const SNIPPET_JS_H1 =
`// Agregar antes de </body> en index.html

let titulo = "Resident Evil Fan Page";
let version = "1.0";
let anio = 2026;

console.log("Bienvenido a: " + titulo);
console.log("Versión: " + version);
console.log("Año: " + anio);`;

const SNIPPET_HTML_H2 =
`<!-- Agregar en #personajes, después del <h2> -->

<button onclick="mostrarInfo()">🔍 Más información</button>
<p id="info-extra" style="display:none; margin-top:8px; color:#888;">
  Los personajes son agentes especiales que combaten amenazas biológicas.
  Cada uno tiene habilidades únicas de combate y supervivencia.
</p>`;

const SNIPPET_JS_H2 =
`// Agregar dentro del <script>

function mostrarInfo() {
  let elem = document.getElementById("info-extra");
  if (elem.style.display === "none") {
    elem.style.display = "block";
  } else {
    elem.style.display = "none";
  }
}`;

const SNIPPET_CSS_H3 =
`/* Agregar en <head>, dentro de un <style> nuevo */

body.modo-claro {
  background-color: #f5f5f5;
  color: #111111;
}
body.modo-claro nav {
  background-color: #dddddd;
}
body.modo-claro nav a {
  color: #222222;
}
body.modo-claro nav a:hover {
  background-color: #b91c1c;
  color: #ffffff;
}
body.modo-claro h2 {
  color: #b91c1c;
}`;

const SNIPPET_HTML_H3 =
`<!-- Agregar en <nav>, al final de la <ul> -->

<li>
  <button id="btn-modo" onclick="toggleModo()"
    style="cursor:pointer; padding:6px 14px;
           background:#8b0000; color:white;
           border:none; border-radius:4px; font-size:13px;">
    ☀ Modo Claro
  </button>
</li>`;

const SNIPPET_JS_H3 =
`// Agregar dentro del <script>

function toggleModo() {
  document.body.classList.toggle("modo-claro");
  let btn = document.getElementById("btn-modo");
  if (document.body.classList.contains("modo-claro")) {
    btn.textContent = "🌙 Modo Oscuro";
  } else {
    btn.textContent = "☀ Modo Claro";
  }
}`;

/* ─────────────────────────────────────────────────────────────
   Estructura de carpetas (W08 Jueves)
   ───────────────────────────────────────────────────────────── */
const ESTRUCTURA = `proyecto/
├── index.html          ← página principal
├── css/
│   └── style.css       ← hoja de estilos (vacía por ahora)
├── paginas/
│   ├── personajes.html ← sección de personajes
│   ├── juegos.html     ← sección de juegos
│   └── cronologia.html ← tabla cronológica
└── img/
    └── (imágenes aquí)

Los enlaces del index.html apuntan a cada página:
  href="paginas/personajes.html"
  href="paginas/juegos.html"
  href="#cronologia"  ← sección que queda en index`;

/* ─────────────────────────────────────────────────────────────
   HISTORIAL
   ───────────────────────────────────────────────────────────── */
const NO_LINK = (html) => html.replace('<link rel="stylesheet" href="css/style.css">', '');

export const proyectoHistory = [
  {
    id: 'w08-lunes',
    label: 'S08 · Lunes',
    title: 'Semana 08 — Lunes: HTML base en un solo archivo',
    description: 'Se creó el index.html con todas las secciones en una sola página: header, nav, personajes, juegos, cronología, contacto y footer. Sin CSS todavía.',
    srcdoc: NO_LINK(INDEX_HTML),
    files: [
      {
        label: 'index.html', lang: 'html', content: INDEX_HTML,
        buildPreview: (c) => NO_LINK(c),
      },
    ],
  },
  {
    id: 'w08-jueves',
    label: 'S08 · Jueves',
    title: 'Semana 08 — Jueves: Separación en páginas',
    description: 'Se creó la estructura de carpetas: css/, paginas/, img/. Las secciones se movieron a archivos HTML independientes.',
    srcdoc: NO_LINK(INDEX_HTML),
    files: [
      {
        label: '📁 Estructura', lang: 'text', content: ESTRUCTURA,
        buildPreview: null,
      },
      {
        label: 'paginas/personajes.html', lang: 'html', content: PERSONAJES_HTML,
        buildPreview: (c) => withCSSNested(c, ''),
      },
      {
        label: 'paginas/juegos.html', lang: 'html', content: JUEGOS_HTML,
        buildPreview: (c) => withCSSNested(c, ''),
      },
      {
        label: 'paginas/cronologia.html', lang: 'html', content: CRONOLOGIA_HTML,
        buildPreview: (c) => withCSSNested(c, ''),
      },
    ],
  },
  {
    id: 'w09-lunes',
    label: 'S09 · Lunes',
    title: 'Semana 09 — Lunes: CSS completo en todo el sitio',
    description: 'Primera sesión de CSS: fondo verde, tipografía, nav con fondo oscuro, imágenes con hover scale, main centrado y clase .galeria con flexbox.',
    srcdoc: withCSS(INDEX_HTML, CSS_W09_LUNES),
    files: [
      {
        label: 'css/style.css', lang: 'css', content: CSS_W09_LUNES,
        buildPreview: (c) => withCSS(INDEX_HTML, c),
      },
      {
        label: 'index.html', lang: 'html', content: INDEX_HTML,
        buildPreview: (c) => withCSS(c, CSS_W09_LUNES),
      },
    ],
  },
  {
    id: 'w09-jueves',
    label: 'S09 · Jueves',
    title: 'Semana 09 — Jueves: Nav links estilizados',
    description: 'Se agregaron estilos a los enlaces del nav: color blanco, padding, hover con fondo #8b0000 y clase .activo resaltada.',
    srcdoc: withCSS(INDEX_HTML, CSS_FINAL),
    files: [
      {
        label: 'css/style.css (nuevo)', lang: 'css', content: CSS_W09_JUEVES,
        buildPreview: (c) => withCSS(INDEX_HTML, CSS_W09_LUNES + '\n\n' + c),
      },
      {
        label: 'css/style.css (completo)', lang: 'css', content: CSS_FINAL,
        buildPreview: (c) => withCSS(INDEX_HTML, c),
      },
    ],
  },
  {
    id: 'w10-vie-css',
    label: 'S10 · Vie CSS',
    title: 'Semana 10 — Viernes: CSS profesional completo',
    description: 'Reescritura total del style.css: fondo oscuro, tipografía, header, nav sticky, articles con hover, tabla, formulario y footer. De básico a profesional.',
    srcdoc: withCSS(INDEX_V2, CSS_PRO),
    files: [
      {
        label: 'css/style.css', lang: 'css', content: CSS_PRO,
        buildPreview: (c) => withCSS(INDEX_V2, c),
      },
      {
        label: 'index.html', lang: 'html', content: INDEX_V2,
        buildPreview: (c) => withCSS(c, CSS_PRO),
      },
    ],
  },
  {
    id: 'w10-vie-h1',
    label: 'S10 · H1',
    title: 'Semana 10 — Vie H1: Variables y console.log',
    description: 'Primer contacto con JavaScript. Se agrega <script> con variables y console.log. Abre F12 → Console para ver los mensajes.',
    srcdoc: withCSS(INDEX_W10_H1, CSS_PRO),
    files: [
      {
        label: '🆕 Lo que agregamos', lang: 'js', content: SNIPPET_JS_H1,
        buildPreview: null,
      },
      {
        label: 'index.html', lang: 'html', content: INDEX_W10_H1,
        buildPreview: (c) => c.replace('<link rel="stylesheet" href="css/style.css">', `<style>${CSS_PRO}</style>`),
      },
    ],
  },
  {
    id: 'w10-vie-h2',
    label: 'S10 · H2',
    title: 'Semana 10 — Vie H2: getElementById + onclick',
    description: 'Se agrega un botón en #personajes que muestra u oculta un párrafo usando getElementById y onclick.',
    srcdoc: withCSS(INDEX_W10_H2, CSS_PRO),
    files: [
      {
        label: '🆕 HTML — en personajes', lang: 'html', content: SNIPPET_HTML_H2,
        buildPreview: null,
      },
      {
        label: '🆕 JS — mostrarInfo()', lang: 'js', content: SNIPPET_JS_H2,
        buildPreview: null,
      },
      {
        label: 'index.html', lang: 'html', content: INDEX_W10_H2,
        buildPreview: (c) => c.replace('<link rel="stylesheet" href="css/style.css">', `<style>${CSS_PRO}</style>`),
      },
    ],
  },
  {
    id: 'w10-vie-h3',
    label: 'S10 · H3',
    title: 'Semana 10 — Vie H3: classList.toggle + modo claro',
    description: 'Se agrega botón ☀ Modo Claro en el nav que cambia el tema de toda la página usando classList.toggle().',
    srcdoc: INDEX_W10_H3.replace('<link rel="stylesheet" href="css/style.css">', `<style>${CSS_PRO}</style>`),
    files: [
      {
        label: '🆕 CSS — .modo-claro', lang: 'css', content: SNIPPET_CSS_H3,
        buildPreview: null,
      },
      {
        label: '🆕 HTML — botón en nav', lang: 'html', content: SNIPPET_HTML_H3,
        buildPreview: null,
      },
      {
        label: '🆕 JS — toggleModo()', lang: 'js', content: SNIPPET_JS_H3,
        buildPreview: null,
      },
      {
        label: 'index.html', lang: 'html', content: INDEX_W10_H3,
        buildPreview: (c) => c.replace('<link rel="stylesheet" href="css/style.css">', `<style>${CSS_PRO}</style>`),
      },
    ],
  },
];
