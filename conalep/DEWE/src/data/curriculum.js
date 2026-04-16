export const curriculumData = {
  subject: "Elaboración de Páginas Web (DEWE-20)",
  group: "601",
  ras: [
    {
      id: "RA1.1",
      title: "1.1 RA (10%)",
      weeks: [
        { id: "W00", label: "Semana 00 (09-13 Feb)" },
        { id: "W01", label: "Semana 01 (16-20 Feb)" },
        { id: "W02", label: "Semana 02 (23-27 Feb)" }
      ]
    },
    {
      id: "RA1.2",
      title: "1.2 RA (25%)",
      weeks: [
        { id: "W03", label: "Semana 03 (02-06 Mar)" },
        { id: "W04", label: "Semana 04 (09-13 Mar)" },
        { id: "W05", label: "Semana 05 (16-20 Mar)" }
      ]
    },
    {
      id: "RA1.3",
      title: "1.3 RA (25%)",
      weeks: [
        { id: "W06", label: "Semana 06 (23-27 Mar)" },
        { id: "W07", label: "Semana 07 (13-17 Abr)" }
      ]
    }
  ],
  schedules: {
    "W00": { days: [] },
    "W01": { days: [] },
    "W02": { days: [] },
    "W03": { days: [] },
    "W04": { days: [] },
    "W05": {
      days: [
        {
          id: "mon",
          label: "Lunes — Psicología del color",
          hours: [
            {
              time: "Hora 1",
              theory: "Los colores transmiten emociones y significados. En diseño web, elegir correctamente los colores ayuda a comunicar mejor el mensaje del sitio.",
              notebook: "Escribe 5 colores y qué emoción transmiten.",
              practice: "Buscar 3 sitios web e identificar su paleta de colores.",
              code: "/* No aplica código */"
            },
            {
              time: "Hora 2",
              theory: "Una paleta de colores es un conjunto de colores que se utilizan de manera consistente en un sitio.",
              notebook: "Crea una paleta de 4 colores para un sitio web.",
              practice: "Diseñar una paleta para un sitio de videojuegos.",
              code: "/* No aplica código */"
            },
            {
              time: "Hora 3",
              theory: "El contraste permite que el contenido sea legible.",
              notebook: "Explica por qué el contraste es importante.",
              practice: "Comparar ejemplos con buen y mal contraste.",
              code: "/* No aplica código */"
            }
          ]
        },
        {
          id: "thu",
          label: "Jueves — Tipografía",
          hours: [
            {
              time: "Hora 1",
              theory: "La tipografía influye en la legibilidad y estilo del sitio.",
              notebook: "Escribe 3 tipos de letra y su uso.",
              practice: "Analizar tipografías en páginas web.",
              code: "/* No aplica código */"
            },
            {
              time: "Hora 2",
              theory: "El tamaño y jerarquía del texto organizan la información.",
              notebook: "Ejemplo de títulos y subtítulos.",
              practice: "Diseñar estructura de texto.",
              code: "/* No aplica código */"
            }
          ]
        },
        {
          id: "fri",
          label: "Viernes — Wireframe y mapa del sitio",
          hours: [
            {
              time: "Hora 1",
              theory: "Un wireframe es un boceto de cómo se organizará un sitio web.",
              notebook: "Dibuja un wireframe básico.",
              practice: "Crear wireframe de una página web.",
              code: "/* No aplica código */"
            },
            {
              time: "Hora 2",
              theory: "El mapa del sitio muestra la estructura de navegación.",
              notebook: "Dibuja un mapa del sitio.",
              practice: "Organizar páginas.",
              code: "/* No aplica código */"
            },
            {
              time: "Hora 3",
              theory: "La regla de los tercios ayuda a organizar visualmente los elementos.",
              notebook: "Dibuja ejemplo de regla de tercios.",
              practice: "Aplicar en diseño.",
              code: "/* No aplica código */"
            }
          ]
        },
        {
          id: "dual",
          label: "Actividad Dual — Infografía en libreta",
          content: "Instrucción:\n\nElabora una infografía en tu libreta que incluya:\n\n- Psicología del color\n- Tipografía\n- Wireframe\n- Mapa del sitio"
        }
      ]
    },
    "W06": {
      days: [
        {
          id: "mon",
          label: "Lunes — Estructura HTML",
          hours: [
            {
              time: "Hora 1",
              theory: "HTML permite estructurar una página web mediante etiquetas.",
              notebook: "Escribe la estructura básica HTML.",
              practice: "Crear archivo HTML base.",
              code: "<!DOCTYPE html>\n<html>\n  <head></head>\n  <body></body>\n</html>"
            },
            {
              time: "Hora 2",
              theory: "Las etiquetas organizan el contenido.",
              notebook: "Lista etiquetas básicas.",
              practice: "Agregar títulos y párrafos.",
              code: "<h1>Titulo</h1>\n<p>Texto</p>"
            },
            {
              time: "Hora 3",
              theory: "Las secciones ayudan a organizar la página.",
              notebook: "Explica section y article.",
              practice: "Agregar secciones.",
              code: "<section>\n  <h2>Contenido</h2>\n</section>"
            }
          ]
        },
        {
          id: "thu",
          label: "Jueves — Contenido del sitio",
          hours: [
            {
              time: "Hora 1",
              theory: "Las listas permiten organizar información.",
              notebook: "Ejemplo lista.",
              practice: "Crear lista de juegos.",
              code: "<ul>\n  <li>Juego</li>\n</ul>"
            },
            {
              time: "Hora 2",
              theory: "Las tablas organizan datos.",
              notebook: "Dibuja tabla.",
              practice: "Crear tabla.",
              code: "<table>\n  <tr>\n    <td>Dato</td>\n  </tr>\n</table>"
            }
          ]
        },
        {
          id: "fri",
          label: "Viernes — Formulario y cierre",
          hours: [
            {
              time: "Hora 1",
              theory: "Los formularios capturan datos.",
              notebook: "Ejemplo de formulario.",
              practice: "Crear formulario.",
              code: "<form>\n  <input type='text'>\n</form>"
            },
            {
              time: "Hora 2",
              theory: "Los enlaces permiten navegar.",
              notebook: "Ejemplo enlace.",
              practice: "Agregar navegación.",
              code: "<a href='#'>Link</a>"
            },
            {
              time: "Hora 3",
              theory: "Un sitio completo integra todo.",
              notebook: "Describe tu sitio.",
              practice: "Integrar proyecto.",
              code: "<!-- Proyecto completo -->"
            }
          ]
        },
        {
          id: "dual",
          label: "Actividad Dual — Infografía en libreta",
          content: "Instrucción:\n\nElabora una infografía en tu libreta que incluya:\n\n- Estructura HTML\n- Etiquetas básicas\n- Listas\n- Tablas\n- Formularios"
        }
      ]
    },
    "W07": {
      days: [
        {
          id: "mon",
          label: "Lunes — Organización del proyecto web",
          purpose: "Tomar el sitio HTML trabajado en la Semana 06 y convertirlo en un proyecto web organizado, comprendiendo la importancia de las carpetas, los nombres de archivos y la estructura lógica del sitio.",
          hours: [
            {
              time: "Hora 1",
              title: "Estructura de un proyecto web",
              theory: "Un sitio web no está formado por un solo archivo. Aunque al principio parezca que todo vive dentro de un documento HTML, en realidad un proyecto web se construye con varios archivos organizados dentro de carpetas. Esta organización permite trabajar con orden, corregir errores con mayor facilidad y ampliar el sitio sin perder el control del proyecto. En desarrollo web, normalmente el archivo principal se llama index.html, porque es la página de entrada del sitio. Además, es común separar los recursos: por ejemplo, las imágenes se guardan en una carpeta llamada img y las hojas de estilo se guardan en una carpeta llamada css. Esta lógica no solo sirve para que el proyecto se vea ordenado, sino también para que el navegador encuentre correctamente los recursos que necesita. Un proyecto desorganizado puede provocar archivos perdidos, enlaces rotos, rutas incorrectas y dificultades para seguir trabajando más adelante. Por eso, antes de pensar en diseño o en más páginas, primero hay que entender cómo se organiza un proyecto web.",
              notebook: "Título: Estructura de un proyecto web. Instrucciones: 1. Dibuja una carpeta principal llamada Sitio_Resident_Evil. 2. Dentro de esa carpeta dibuja el archivo index.html. 3. Agrega dos carpetas internas llamadas img y css. 4. Debajo del dibujo escribe qué función cumple cada elemento. 5. Finalmente responde: ¿Por qué es importante organizar un proyecto web desde el inicio?",
              practice: "1. En el escritorio o en la carpeta de trabajo crear una carpeta llamada Sitio_Resident_Evil. 2. Entrar a esa carpeta y crear dos carpetas internas: img y css. 3. Verificar que los nombres estén escritos correctamente, sin espacios extra ni errores de mayúsculas. 4. Mostrar al docente la estructura creada antes de continuar. 5. No avanzar hasta confirmar que la base del proyecto quedó correcta.",
              code: "Sitio_Resident_Evil/\n├── img/\n└── css/",
              product: "Carpeta principal del proyecto creada correctamente con las subcarpetas img y css.",
              teacherNotes: "👨‍🏫 NOTA DOCENTE: Aquí conviene insistir en que todavía no se diseña ni se mete CSS. El objetivo es que entiendan la lógica de organización. Revisa nombres de carpetas uno por uno, porque muchos alumnos escriben mal css o crean la carpeta fuera del proyecto."
            },
            {
              time: "Hora 2",
              title: "Reutilización del HTML de la Semana 06",
              theory: "En la Semana 06 se construyó una página completa en HTML sobre Resident Evil. Ese trabajo ya no debe verse como un ejercicio aislado, sino como la base de un proyecto web real. En desarrollo web no siempre se empieza desde cero. Muchas veces se reutiliza código, se reorganiza y se mejora. Eso significa que el trabajo anterior tiene valor y puede crecer. Ahora el objetivo no es rehacer toda la página, sino aprender a integrarla correctamente en una estructura de proyecto. También es importante comprender que cada elemento HTML cumple una función específica dentro del sitio: algunos organizan la estructura general, otros contienen información, otros ayudan a navegar y otros permiten capturar datos. Reconocer lo que ya tiene el sitio ayuda al alumno a ver que ya no está empezando, sino avanzando sobre una base real. Este paso es importante porque conecta lo aprendido anteriormente con la nueva lógica del proyecto.",
              notebook: "Título: Elementos HTML que ya tiene mi sitio. Instrucciones: 1. Haz una lista con las etiquetas y elementos que ya tiene tu página de Resident Evil. 2. Incluye al menos los siguientes: header, nav, section, article, img, ul, ol, table, form, footer. 3. Junto a cada uno escribe para qué sirve. 4. Al final responde: ¿Qué parte de mi sitio está mejor lograda y cuál necesita mejorar?",
              practice: "1. Dentro de la carpeta Sitio_Resident_Evil crear el archivo index.html. 2. Abrir ese archivo en el editor de texto o IDE que estén usando. 3. Copiar o reescribir el HTML trabajado en la Semana 06 sobre Resident Evil. 4. Guardar correctamente el archivo. 5. Abrir index.html en el navegador y revisar que el contenido principal aparezca. 6. Si hay errores, corregirlos antes de continuar.",
              code: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resident Evil</title>
</head>

<body>

  <!-- ENCABEZADO -->
  <header>
    <h1>Resident Evil</h1>
    <p>Fan page creada en HTML puro</p>
    <hr>
  </header>

  <!-- MENÚ -->
  <nav>
    <ul>
      <li><a href="#personajes">Personajes</a></li>
      <li><a href="#juegos">Juegos</a></li>
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

      <img src="https://upload.wikimedia.org/wikipedia/en/0/03/Resident_Evil_4_cover.jpg" width="250" alt="Resident Evil">

      <hr>
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

      <p>Visita el sitio oficial:</p>
      <a href="https://www.residentevil.com/" target="_blank">Página oficial</a>

      <hr>
    </section>

    <!-- CRONOLOGÍA -->
    <section id="cronologia">
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
          <td>Resident Evil 4</td>
          <td>2005</td>
          <td>Acción / Horror</td>
        </tr>

        <tr>
          <td>Resident Evil 7</td>
          <td>2017</td>
          <td>Survival Horror</td>
        </tr>

      </table>

      <hr>
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
</html>`,
              product: "Archivo index.html creado y funcionando con el contenido base del proyecto.",
              teacherNotes: `👨‍🏫 NOTA DOCENTE: Aquí no se trata de que reescriban todo perfecto desde memoria, sino de que comprendan que están convirtiendo un ejercicio en un proyecto. Puedes pedir que localicen visualmente en su HTML dónde está el header, el nav o el form.

👨‍🏫 CÓDIGO COMPLETO DE REFERENCIA:
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resident Evil</title>
</head>
<body>
  <header>
    <h1>Resident Evil</h1>
    <p>Fan page creada en HTML puro</p>
    <hr>
  </header>
  <nav>
    <ul>
      <li><a href="#personajes">Personajes</a></li>
      <li><a href="#juegos">Juegos</a></li>
      <li><a href="#cronologia">Cronología</a></li>
      <li><a href="#contacto">Contacto</a></li>
    </ul>
    <hr>
  </nav>
  <main>
    <section id="personajes">
      <h2>Personajes principales</h2>
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
      <img src="https://upload.wikimedia.org/wikipedia/en/0/03/Resident_Evil_4_cover.jpg" width="250" alt="Resident Evil">
      <hr>
    </section>
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
      <p>Visita el sitio oficial:</p>
      <a href="https://www.residentevil.com/" target="_blank">Página oficial</a>
      <hr>
    </section>
    <section id="cronologia">
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
          <td>Resident Evil 4</td>
          <td>2005</td>
          <td>Acción / Horror</td>
        </tr>
        <tr>
          <td>Resident Evil 7</td>
          <td>2017</td>
          <td>Survival Horror</td>
        </tr>
      </table>
      <hr>
    </section>
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
  <footer>
    <p>Fan Page de Resident Evil - Proyecto HTML</p>
  </footer>
</body>
</html>`
            },
            {
              time: "Hora 3",
              title: "Pensar el crecimiento del sitio web",
              theory: "Un sitio web puede comenzar como una sola página, pero cuando su contenido crece, conviene dividirlo en varias páginas para organizar mejor la información. Esto ayuda a que el usuario navegue con mayor claridad y a que el desarrollador mantenga mejor el proyecto. Por ejemplo, en el sitio de Resident Evil se puede dejar una página principal con la información general y después separar apartados como personajes, juegos o contacto en archivos distintos. Pensar de esta manera ayuda al alumno a dejar de ver HTML como un conjunto de etiquetas sueltas y empezar a verlo como una estructura de información. Un buen desarrollador no solo programa, también decide cómo organizar el contenido para que tenga lógica. Esta hora no busca todavía separar el proyecto en varias páginas, sino que el alumno visualice esa posibilidad y empiece a preparar mentalmente la navegación que trabajará después.",
              notebook: "Título: Posibles páginas de mi sitio. Instrucciones: 1. Escribe qué partes del sitio Resident Evil podrían convertirse en páginas separadas. 2. Menciona al menos tres: personajes, juegos, contacto. 3. Dibuja un esquema sencillo donde muestres cuál sería la página principal y cuáles serían las secundarias. 4. Explica por qué convendría dividir esa información en varios archivos y no dejarla toda en una sola página.",
              practice: "1. Revisar index.html en el navegador. 2. Confirmar que el contenido principal cargue correctamente. 3. Corregir errores visibles en títulos, párrafos o etiquetas sin cerrar. 4. Identificar dentro del archivo qué secciones podrían ir después en otros archivos HTML. 5. Guardar una versión ordenada y funcional del proyecto al finalizar la clase.",
              code: "<section id=\"personajes\">\n  <h2>Personajes principales</h2>\n  <article>\n    <h3>Leon S. Kennedy</h3>\n    <p>Uno de los personajes más importantes de la saga.</p>\n  </article>\n</section>",
              product: "Proyecto base funcional con index.html revisado y esquema inicial de crecimiento del sitio.",
              teacherNotes: "👨‍🏫 NOTA DOCENTE: Aquí puedes cerrar la sesión haciendo que verbalicen: 'Hoy no hice una página suelta, empecé un proyecto web'. Eso les cambia el chip. También conviene revisar que todos realmente tengan el archivo dentro de la carpeta correcta."
            }
          ]
        },
        {
          id: "thu",
          label: "Jueves — Navegación y transición a múltiples páginas",
          purpose: "Comprender el uso de enlaces en HTML y comenzar la transición de una página única a un sitio web con múltiples páginas.",
          hours: [
            {
              time: "Hora 1",
              title: "Enlaces internos y tipos de enlaces",
              theory: "Los enlaces en HTML permiten conectar distintas partes de un sitio web. Los enlaces internos permiten moverse dentro de la misma página. Se crean con la etiqueta <a> y el atributo href. Cuando el valor de href inicia con el símbolo #, el enlace apunta a un elemento dentro del mismo documento. Ese elemento debe tener un atributo id que coincida exactamente. Ejemplo: <a href=\"#contacto\"> <section id=\"contacto\"> Además, existen otros tipos de enlaces: 1. Enlaces internos (#) → misma página, 2. Enlaces a otra página → archivo HTML, 3. Enlaces externos → sitios web.",
              notebook: "Título: Tipos de enlaces en HTML. 1. Escribe los 3 tipos de enlaces. 2. Escribe un ejemplo de cada uno. 3. Explica cuándo usarías cada tipo. 4. ¿Qué pasa si el id no coincide con el href?",
              practice: "1. Abrir el archivo index.html del proyecto. 2. Localizar el menú dentro de la etiqueta <nav>. 3. Identificar los enlaces que ya existen (#personajes, #juegos, etc.). 4. Agregar una nueva opción en el menú: <a href=\"#inicio\">Inicio</a>. 5. Buscar el encabezado principal (<header>). 6. Modificarlo para agregar el id: <header id=\"inicio\">. 7. Guardar el archivo. 8. Abrir el archivo en el navegador. 9. Hacer clic en el enlace \"Inicio\". 10. Verificar que la página se desplace correctamente al inicio. 11. Si no funciona: revisar que el id esté bien escrito, revisar que el href tenga el símbolo # y corregir errores.",
              code: "<a href=\"#inicio\">Inicio</a>\n<header id=\"inicio\">",
              product: "Menú actualizado con un enlace interno funcional que desplaza correctamente dentro de la página",
              teacherNotes: "Aquí no los dejes avanzar rápido. Haz que TODOS prueben el enlace. Si no hacen clic, no aprenden."
            },
            {
              time: "Hora 2",
              title: "Paso de una página a múltiples páginas",
              theory: "Hasta ahora el sitio funciona como una sola página usando enlaces internos (#). Sin embargo, los sitios web reales están formados por múltiples páginas conectadas entre sí. Esto permite: mejor organización, mayor claridad y crecimiento del proyecto. Ejemplo: index.html, personajes.html, juegos.html, contacto.html. Ahora el enlace apunta a otro archivo, no a una sección.",
              notebook: "Título: De una página a un sitio web. 1. Explica la diferencia entre #personajes y personajes.html. 2. Dibuja la estructura: Inicio ├── Personajes ├── Juegos └── Contacto. 3. ¿Cuál es mejor para un sitio grande?",
              practice: "1. Crear archivos: personajes.html, juegos.html y contacto.html. 2. En personajes.html escribir: <h1>Personajes</h1> <p>Página en construcción</p>. 3. Modificar en index.html: <a href=\"#personajes\"> por <a href=\"personajes.html\">. 4. Guardar. 5. Probar en navegador.",
              code: "<a href=\"personajes.html\">Personajes</a>\n<h1>Personajes</h1>",
              product: "Creación de múltiples páginas y navegación funcional entre archivos",
              teacherNotes: "Aquí van a fallar en rutas y nombres. Es parte del aprendizaje, no intervenir demasiado rápido."
            }
          ],
          cierre: "Hoy tu página dejó de ser una sola hoja… y empezó a ser un sitio web.",
          frase_docente: "Un sitio web sin navegación es como un libro sin índice: el contenido está, pero nadie sabe cómo llegar a él."
        },
        {
          id: "fri",
          label: "Viernes — Introducción a CSS y diseño visual del sitio",
          purpose: "Comprender cómo CSS transforma la apariencia de un sitio web, aplicando estilos básicos para mejorar el diseño del proyecto desarrollado.",
          hours: [
            {
              time: "Hora 1",
              title: "HTML vs CSS (Inicio del diseño web)",
              theory: "HTML se encarga de la estructura de una página web. Define qué elementos existen: títulos, párrafos, imágenes, enlaces. CSS se encarga de la apariencia. Permite modificar colores, fondos, tamaños, espacios y diseño visual. Un sitio solo con HTML funciona, pero se ve básico. Un sitio con CSS se vuelve visualmente atractivo y profesional. Por eso se dice: HTML construye la estructura y CSS define el diseño.",
              notebook: "Título: HTML vs CSS. 1. Escribe qué hace HTML. 2. Escribe qué hace CSS. 3. Anota 5 cosas que CSS puede modificar en una página web. 4. Responde: ¿Por qué es importante el diseño en un sitio web?",
              practice: "1. Entrar a la carpeta del proyecto. 2. Abrir la carpeta css. 3. Crear un archivo llamado: estilos.css. 4. Abrir index.html. 5. Dentro de la etiqueta <head> agregar: <link rel=\"stylesheet\" href=\"css/estilos.css\">. 6. Guardar cambios. 7. Abrir el sitio en el navegador. 8. Verificar que el archivo esté enlazado correctamente.",
              code: "<link rel=\"stylesheet\" href=\"css/estilos.css\">",
              product: "Archivo estilos.css creado y correctamente enlazado con index.html",
              teacherNotes: "Aquí muchos alumnos fallarán en la ruta del archivo. Verificar que la carpeta css esté bien escrita y en la ubicación correcta."
            },
            {
              time: "Hora 2",
              title: "Primeros estilos con CSS",
              theory: "CSS funciona mediante reglas que tienen tres partes: selector { propiedad: valor; }. El selector indica qué elemento se modificará. La propiedad indica qué se quiere cambiar. El valor indica cómo se verá. Ejemplo: body { background-color: black; color: white; }. Esto cambia el fondo y el color del texto de toda la página.",
              notebook: "Título: Estructura de CSS. 1. Escribe la estructura de una regla CSS. 2. Explica qué es: - selector, - propiedad, - valor. 3. Escribe un ejemplo de regla CSS.",
              practice: "1. Abrir el archivo estilos.css. 2. Agregar las siguientes reglas: body { background-color: #111; color: white; } h1 { color: red; }. 3. Guardar cambios. 4. Abrir el sitio en el navegador. 5. Observar los cambios visuales.",
              code: "body {\n  background-color: #111;\n  color: white;\n}\n\nh1 {\n  color: red;\n}",
              product: "Sitio con fondo oscuro y cambios visibles en texto y títulos",
              teacherNotes: "Este es el momento clave. Aquí los alumnos ven el impacto real de CSS. Deja que experimenten cambiando colores."
            },
            {
              time: "Hora 3",
              title: "Diseño e identidad visual del sitio",
              theory: "El diseño de un sitio web no debe ser al azar. Cada página debe tener una identidad visual. Esto incluye: - colores principales, - colores secundarios, - fondo, - estilo general. Un buen diseño hace que el sitio sea más claro, atractivo y fácil de usar.",
              notebook: "Título: Diseño de mi sitio web. 1. Define: - color principal, - color secundario, - color de fondo. 2. Describe el estilo de tu sitio: - oscuro, - gamer, - elegante. 3. Explica por qué elegiste esos colores.",
              practice: "1. Abrir estilos.css. 2. Agregar estilos adicionales: a { color: #ff4d4d; } section { margin-bottom: 20px; padding: 10px; border: 1px solid #444; }. 3. Aplicar cambios visuales al sitio. 4. Guardar. 5. Revisar en navegador. 6. Ajustar colores según el estilo elegido.",
              code: "a {\n  color: #ff4d4d;\n}\n\nsection {\n  margin-bottom: 20px;\n  padding: 10px;\n  border: 1px solid #444;\n}",
              product: "Sitio con identidad visual básica definida y mejoras visibles en diseño",
              teacherNotes: "Aquí el alumno deja de copiar y empieza a decidir. Motiva a que personalicen su sitio."
            }
          ],
          cierre: "Hoy tu sitio dejó de verse como código… y empezó a verse como una página real.",
          frase_docente: "El diseño no es solo cómo se ve, es cómo se siente usarlo."
        },
