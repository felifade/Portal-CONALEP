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
        { id: "W07", label: "Semana 07 (13-17 Abr)" },
        { id: "W08", label: "Semana 08 (20-24 Abr)" }
      ]
    },
    {
      id: "RA2.1",
      title: "2.1 RA (40%)",
      weeks: [
        { id: "W09", label: "Semana 09 (27 Abr-01 May)" },
        { id: "W10", label: "Semana 10 (04-08 May)" },
        { id: "W11", label: "Semana 11 (11-15 May)" }
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
              code: "<!DOCTYPE html>\n<html>\n  <head>\n    <!-- ¿Qué va aquí? -->\n  </head>\n  <body>\n    <!-- Tu contenido aquí -->\n  </body>\n</html>",
              codeRef: "<!DOCTYPE html>\n<html lang=\"es\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <title>Mi Sitio</title>\n  </head>\n  <body>\n    <h1>Hola Mundo</h1>\n  </body>\n</html>"
            },
            {
              time: "Hora 2",
              theory: "Las etiquetas organizan el contenido.",
              notebook: "Lista etiquetas básicas.",
              practice: "Agregar títulos y párrafos.",
              code: "<!-- Agrega un título y un párrafo -->\n<h1></h1>\n<p></p>",
              codeRef: "<h1>Resident Evil</h1>\n<p>Saga de videojuegos de terror y acción.</p>"
            },
            {
              time: "Hora 3",
              theory: "Las secciones ayudan a organizar la página.",
              notebook: "Explica section y article.",
              practice: "Agregar secciones.",
              code: "<!-- Crea una sección con id y un subtítulo -->\n<section id=\"\">\n  <h2></h2>\n</section>",
              codeRef: "<section id=\"personajes\">\n  <h2>Personajes principales</h2>\n</section>\n\n<section id=\"juegos\">\n  <h2>Juegos de la saga</h2>\n</section>"
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
              code: "<!-- Lista sin orden — agrega al menos 5 juegos -->\n<ul>\n  <li></li>\n  <li></li>\n  <li></li>\n</ul>",
              codeRef: "<ul>\n  <li>Resident Evil (1996)</li>\n  <li>Resident Evil 2 (1998)</li>\n  <li>Resident Evil 3 (1999)</li>\n  <li>Resident Evil 4 (2005)</li>\n  <li>Resident Evil 7 (2017)</li>\n</ul>"
            },
            {
              time: "Hora 2",
              theory: "Las tablas organizan datos.",
              notebook: "Dibuja tabla.",
              practice: "Crear tabla.",
              code: "<!-- Tabla con encabezados y al menos 3 filas -->\n<table>\n  <tr>\n    <th></th>\n    <th></th>\n  </tr>\n  <tr>\n    <td></td>\n    <td></td>\n  </tr>\n</table>",
              codeRef: "<table border=\"1\">\n  <tr>\n    <th>Juego</th>\n    <th>Año</th>\n  </tr>\n  <tr>\n    <td>Resident Evil</td>\n    <td>1996</td>\n  </tr>\n  <tr>\n    <td>Resident Evil 2</td>\n    <td>1998</td>\n  </tr>\n</table>"
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
              code: "<!-- Formulario con al menos nombre y correo -->\n<form>\n  <label>:</label><br>\n  <input type=\"\"><br><br>\n\n  <input type=\"submit\" value=\"\">\n</form>",
              codeRef: "<form>\n  <label>Nombre:</label><br>\n  <input type=\"text\"><br><br>\n\n  <label>Correo:</label><br>\n  <input type=\"email\"><br><br>\n\n  <input type=\"submit\" value=\"Enviar\">\n  <input type=\"reset\" value=\"Limpiar\">\n</form>"
            },
            {
              time: "Hora 2",
              theory: "Los enlaces permiten navegar.",
              notebook: "Ejemplo enlace.",
              practice: "Agregar navegación.",
              code: "<!-- Crea un menú con al menos 3 enlaces internos -->\n<nav>\n  <a href=\"#\">Sección 1</a>\n  <a href=\"#\">Sección 2</a>\n</nav>",
              codeRef: "<nav>\n  <a href=\"#personajes\">Personajes</a>\n  <a href=\"#juegos\">Juegos</a>\n  <a href=\"#contacto\">Contacto</a>\n</nav>"
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
              code: "<!-- ¿Qué secciones de tu sitio podrían ser páginas separadas? -->\n<section id=\"\">\n  <h2></h2>\n  <article>\n    <h3></h3>\n    <p></p>\n  </article>\n</section>",
              codeRef: "<section id=\"personajes\">\n  <h2>Personajes principales</h2>\n  <article>\n    <h3>Leon S. Kennedy</h3>\n    <p>Uno de los personajes más importantes de la saga.</p>\n  </article>\n</section>",
              product: "Proyecto base funcional con index.html revisado y esquema inicial de crecimiento del sitio.",
              teacherNotes: "👨‍🏫 NOTA DOCENTE: Aquí puedes cerrar la sesión haciendo que verbalicen: 'Hoy no hice una página suelta, empecé un proyecto web'. Eso les cambia el chip. También conviene revisar que todos realmente tengan el archivo dentro de la carpeta correcta."
            }
          ]
        },
        {
          id: "thu",
          label: "Jueves — Navegación interna y uso de ID",
          purpose: "Reforzar el uso de enlaces internos dentro del mismo documento HTML (index.html), comprendiendo la relación exacta entre el atributo href y el identificador id para crear una navegación fluida.",
          hours: [
            {
              time: "Hora 1",
              title: "Enlaces internos y tipos de enlaces",
              theory: "Los enlaces en HTML permiten conectar distintas partes de un sitio web. Los enlaces internos permiten moverse dentro de la misma página. Se crean con la etiqueta <a> y el atributo href. Cuando el valor de href inicia con el símbolo #, el enlace apunta a un elemento dentro del mismo documento. Ese elemento debe tener un atributo id que coincida exactamente. Ejemplo: <a href=\"#contacto\"> <section id=\"contacto\"> Además, existen otros tipos de enlaces: 1. Enlaces internos (#) → misma página, 2. Enlaces a otra página → archivo HTML, 3. Enlaces externos → sitios web.",
              notebook: "Título: Tipos de enlaces en HTML. 1. Escribe los 3 tipos de enlaces. 2. Escribe un ejemplo de cada uno. 3. Explica cuándo usarías cada tipo. 4. ¿Qué pasa si el id no coincide con el href?",
              practice: "1. Abrir el archivo index.html del proyecto. 2. Localizar el menú dentro de la etiqueta <nav>. 3. Identificar los enlaces que ya existen (#personajes, #juegos, etc.). 4. Agregar una nueva opción en el menú: <a href=\"#inicio\">Inicio</a>. 5. Buscar el encabezado principal (<header>). 6. Modificarlo para agregar el id: <header id=\"inicio\">. 7. Guardar el archivo. 8. Abrir el archivo en el navegador. 9. Hacer clic en el enlace \"Inicio\". 10. Verificar que la página se desplace correctamente al inicio.",
              code: "<!-- ¿Cómo conectas el enlace con el id correcto? -->\n<a href=\"#\">Inicio</a>\n\n<header id=\"\">",
              codeRef: "<a href=\"#inicio\">Inicio</a>\n\n<header id=\"inicio\">",
              product: "Menú actualizado con un enlace interno funcional que desplaza correctamente dentro de la página",
              teacherNotes: "Aquí no los dejes avanzar rápido. Haz que TODOS prueben el enlace. Si no hacen clic, no aprenden."
            },
            {
              time: "Hora 2",
              title: "Navegación interna dentro del documento",
              theory: "La verdadera navegación interna depende de que los IDs estén colocados estratégicamente en las secciones del sitio. Un error en una sola letra del ID hará que el enlace no funcione. Es fundamental que el alumno entienda que el símbolo # le dice al navegador: 'busca este nombre dentro de este mismo archivo'.",
              notebook: "Título: Navegación dentro del mismo documento. 1. ¿Cuál es la función del símbolo # en el href? 2. ¿En qué etiqueta debe colocarse el atributo id para que el salto sea exitoso? 3. Dibuja el flujo: Clic en enlace -> El navegador busca el ID -> Desplazamiento visual.",
              practice: "1. Revisar cada <section> de index.html. 2. Asegurarse de que tengan IDs únicos (personajes, juegos, contacto). 3. Verificar que los enlaces del nav apunten exactamente a esos nombres precedidos por #. 4. Probar cada enlace en el navegador y corregir errores de ortografía en los nombres.",
              code: "<!-- El href y el id deben coincidir exactamente -->\n<a href=\"#\">Personajes</a>\n\n<section id=\"\">",
              codeRef: "<a href=\"#personajes\">Personajes</a>\n\n<section id=\"personajes\">",
              product: "Navegación interna 100% funcional entre todas las secciones del index.html",
              teacherNotes: "El error más común es olvidar el # en el href o escribir el ID con mayúsculas/minúsculas diferentes. Haz que sean minuciosos."
            }
          ],
          cierre: "Hoy tu página aprendió a navegar por sí misma sin necesidad de archivos externos todavía.",
          frase_docente: "Un enlace sin un ID correspondiente es como enviar una carta a una casa sin número."
        },
        {
          id: "fri",
          label: "Viernes — Transición a la primera página externa",
          purpose: "Iniciar la transición de una página única a un sitio web real mediante la creación y conexión del archivo personajes.html, comprendiendo la diferencia entre navegación interna y externa.",
          hours: [
            {
              time: "Hora 1",
              title: "Repaso de enlaces internos vs. externos",
              theory: "Hasta ahora el sitio funciona como una sola página utilizando enlaces internos (#). Sin embargo, los sitios web reales están formados por múltiples archivos HTML conectados. Un enlace interno (#) busca contenido dentro del mismo archivo. Un enlace a archivo busca un documento nuevo en la misma carpeta.",
              notebook: "Título: Enlaces internos vs. Archivos externos. 1. Explica la diferencia entre <a href=\"#personajes\"> y <a href=\"personajes.html\">. 2. ¿Por qué es necesario crear archivos independientes para sitios grandes? 3. Dibuja el mapa: index.html -> personajes.html.",
              practice: "1. Abrir index.html y localizar el nav. 2. Analizar el código actual. 3. Discutir por qué usar '#' limita el crecimiento de la página si hay mucha información.",
              code: "<!-- ¿Cuál es la diferencia? Completa los href -->\n<!-- Enlace interno (misma página): -->\n<a href=\"\">Personajes</a>\n\n<!-- Enlace externo (otro archivo): -->\n<a href=\"\">Personajes</a>",
              codeRef: "<!-- Interno — salta dentro del mismo archivo -->\n<a href=\"#personajes\">Personajes</a>\n\n<!-- Externo — abre otro archivo .html -->\n<a href=\"personajes.html\">Personajes</a>",
              product: "Comprensión clara de la diferencia entre ambos tipos de navegación",
              teacherNotes: "Asegúrate de que entiendan que al cambiar el href a personajes.html, el navegador ya no saltará hacia abajo, sino que cargará un nuevo archivo."
            },
            {
              time: "Hora 2",
              title: "Creación del archivo personajes.html",
              theory: "Cada página de un sitio web debe ser un archivo .html independiente. Estos archivos deben vivir en la misma carpeta principal para que el navegador los encuentre fácilmente. Aunque sea una página nueva, debe seguir teniendo la estructura básica (html, head, body).",
              notebook: "Título: Estructura de personajes.html. 1. Escribe la estructura básica necesaria para el nuevo archivo. 2. ¿Qué título le pondrás a esta pestaña en la etiqueta <title>?",
              practice: "1. Crear un nuevo archivo en la carpeta del proyecto. 2. Nombrarlo exactamente como: personajes.html. 3. Escribir la estructura básica de HTML5. 4. Agregar un título <h1>Personajes</h1> y un párrafo <p>Página en construcción</p>. 5. Guardar el archivo.",
              code: "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title><!-- Título de la pestaña --></title>\n</head>\n<body>\n  <!-- Tu contenido aquí -->\n</body>\n</html>",
              codeRef: "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Personajes</title>\n</head>\n<body>\n  <h1>Personajes</h1>\n  <p>Página en construcción</p>\n</body>\n</html>",
              product: "Archivo personajes.html creado y listo para ser enlazado",
              teacherNotes: "El error más común aquí es que guarden el archivo con errores de dedo en el nombre. 'personaje.html' (sin s) romperá el enlace después."
            },
            {
              time: "Hora 3",
              title: "Conexión y prueba de navegación",
              theory: "Para que el usuario pueda llegar a la nueva página, debemos modificar el enlace en el menú del index.html. Al quitar el símbolo # y poner el nombre del archivo, el navegador entenderá que debe salir del documento actual y abrir el nuevo.",
              notebook: "Título: Conexión entre páginas. 1. ¿Cómo quedó el enlace final en el nav? 2. ¿Qué sucede en el navegador cuando haces clic? 3. ¿Cómo podrías regresar al inicio desde personajes.html?",
              practice: "1. Regresar al archivo index.html. 2. Localizar el enlace de Personajes en el menú. 3. Cambiar href=\"#personajes\" por href=\"personajes.html\". 4. Guardar index.html. 5. Abrir index.html en el navegador. 6. Probar el menú y verificar que se abra la nueva página de Personajes.",
              code: "<!-- Cambia el href para que abra un archivo externo -->\n<a href=\"\">Personajes</a>",
              codeRef: "<a href=\"personajes.html\">Personajes</a>",
              product: "Navegación funcional entre el index y la nueva página externa",
              teacherNotes: "Si el enlace no funciona, es casi seguro que el nombre del archivo no coincide exactamente con el href. Haz que revisen letra por letra."
            }
          ],
          cierre: "Hoy tu página dejó de ser un solo documento y comenzó su transformación en un sitio web profesional.",
          frase_docente: "La web no es una hoja, es una red de páginas conectadas entre sí."
        },
        {
          id: "dual",
          label: "Repositorio de Actividades Duales (Semana 07)",
          activities: [
            {
              title: "Tarea 1: Estructura del proyecto",
              instruction: "Basado en la infografía adjunta: 1. Certifica que tu carpeta raíz 'Sitio_Resident_Evil' contenga las subcarpetas img y css. 2. Verifica que el archivo index.html esté en la raíz y no dentro de las carpetas. 3. Identifica en tu libreta qué contenido de tu página actual se moverá a páginas independientes.",
              image: "infografia_lunes.png"
            },
            {
              title: "Tarea 2: Navegación y Enlaces Internos",
              instruction: "Utiliza la infografía 'Navegación y Enlaces Internos HTML' para: 1. Identificar la diferencia entre un enlace externo y un marcador interno (#). 2. Dibujar en tu libreta el esquema de navegación mostrado. 3. Escribir el código de un menú nav que contenga al menos 3 enlaces a secciones de una misma página.",
              image: "infografia_jueves.png"
            }
          ]
        },
        {
          id: "key",
          label: "Código Clave — Navegación",
          hours: [
            {
              time: "Snippets de la semana",
              theory: "Resumen de los bloques de código más importantes para la navegación interna y externa.",
              notebook: "Anotar en la sección de apuntes rápidos.",
              practice: "Usar estos bloques como referencia constante.",
              code: "<!-- Completa los valores correctos -->\n<header id=\"\">\n<a href=\"\">Inicio</a>\n\n<a href=\"\">Ver Personajes</a>",
              codeRef: "<!-- Salto interno -->\n<header id=\"inicio\">\n<a href=\"#inicio\">Inicio</a>\n\n<!-- Salto externo (nuevo archivo) -->\n<a href=\"personajes.html\">Ver Personajes</a>"
            }
          ]
        }
      ]
    },
    "W08": {
      days: [
        {
          id: "mon",
          label: "Lunes — Rutas relativas y expansión del sitio web",
          purpose: "Comprender y aplicar correctamente las rutas relativas en un proyecto web, integrando múltiples páginas con imágenes y navegación funcional.",
          hours: [
            {
              time: "Hora 1",
              title: "Página juegos.html y rutas relativas",
              theory: "En un sitio web, los archivos se organizan en carpetas para mantener orden. Para conectar estos archivos se utilizan rutas relativas. El símbolo ../ significa subir un nivel en la estructura de carpetas. Ejemplo: para acceder a una imagen desde 'paginas/juegos.html', la ruta sería '../img/archivo.jpg'. Si la ruta está mal escrita, el recurso no se mostrará.",
              notebook: "Título: Rutas relativas en HTML. 1. Copia el dictado completo. 2. Dibuja la estructura del proyecto. 3. Responde: ¿Cómo accedes a juegos.html desde index.html? ¿Cómo accedes a una imagen desde juegos.html? ¿Qué significa '../'? 4. Escribe 2 errores comunes al usar rutas.",
              practice: "1. Crear o abrir paginas/juegos.html. 2. Agregar título y lista de al menos 5 juegos. 3. Insertar mínimo 5 imágenes usando ../img/archivo.jpg. 4. Asegurar que tengan atributo alt y funcionen correctamente. 5. Agregar navegación: <a href=\"../index.html\">Inicio</a>. 6. Probar en navegador y corregir errores de ruta.",
              code: "<!-- Completa las rutas correctas -->\n<img src=\"\" alt=\"\">\n<img src=\"\" alt=\"\">\n<img src=\"\" alt=\"\">\n\n<!-- ¿Cómo regresas al inicio desde paginas/? -->\n<a href=\"\">Inicio</a>",
              codeRef: "<img src=\"../img/re4.jpg\" alt=\"Resident Evil 4\">\n<img src=\"../img/re7.jpg\" alt=\"Resident Evil 7\">\n<img src=\"../img/re_village.jpg\" alt=\"RE Village\">\n\n<!-- Desde paginas/ se sube un nivel con ../ -->\n<a href=\"../index.html\">Inicio</a>",
              product: "Página juegos.html con múltiples imágenes correctamente enlazadas usando rutas relativas",
              teacherNotes: "Aquí se detecta quién entiende rutas. No ayudar de inmediato. Hacer que el alumno identifique el error por su cuenta."
            },
            {
              time: "Hora 2",
              title: "Página cronologia.html con imágenes",
              theory: "Una cronología permite organizar eventos en orden dentro de una página web. El uso de listas ordenadas (<ol>) permite estructurar la información de forma clara. Al igual que en juegos.html, las imágenes en esta página deben estar correctamente enlazadas mediante rutas relativas que suban un nivel hacia la carpeta img.",
              notebook: "Título: Organización de contenido en HTML. 1. Copia el dictado. 2. Responde: ¿Qué es una cronología? ¿Por qué es importante organizar la información?",
              practice: "1. Crear paginas/cronologia.html. 2. Agregar título y lista ordenada con al menos 5 elementos históricos. 3. Insertar mínimo 4 imágenes usando ../img/archivo.jpg. 4. Agregar navegación: <a href=\"../index.html\">Inicio</a> y <a href=\"juegos.html\">Juegos</a>. 5. Guardar y probar en navegador.",
              code: "<!-- Lista ordenada — recuerda la ruta desde paginas/ -->\n<ol>\n  <li></li>\n  <li></li>\n  <li></li>\n</ol>\n\n<img src=\"\" alt=\"\">",
              codeRef: "<ol>\n  <li>1996 — Resident Evil</li>\n  <li>1998 — Resident Evil 2</li>\n  <li>2005 — Resident Evil 4</li>\n</ol>\n\n<img src=\"../img/re1.jpg\" alt=\"Resident Evil 1\">",
              product: "Página cronologia.html funcional con imágenes y navegación correcta",
              teacherNotes: "Aquí se evalúa la organización del contenido y el uso consistente de rutas relativas entre archivos de la misma carpeta."
            },
            {
              time: "Hora 3",
              title: "Página contacto.html y navegación completa",
              theory: "Un sitio web debe permitir navegación entre todas sus páginas sin errores. Cada página debe tener enlaces redundantes que permitan regresar al inicio o moverse a secciones clave. Además, el sitio en este punto ya debe integrar formularios básicos para capturar información del usuario.",
              notebook: "Título: Navegación en un sitio web. 1. Copia el dictado. 2. Responde: ¿Qué pasa si una ruta está mal escrita? ¿Por qué es importante la navegación?",
              practice: "1. Crear paginas/contacto.html con estructura de formulario básica (nombre, correo, comentario, botón). 2. Agregar navegación: <a href=\"../index.html\">Inicio</a> y <a href=\"personajes.html\">Personajes</a>. 3. En index.html, agregar enlaces a juegos.html, cronologia.html y contacto.html. 4. Probar la navegación completa del sitio.",
              code: "<!-- ¿Cuál es la ruta correcta desde paginas/ hacia index.html? -->\n<a href=\"\">Inicio</a>\n\n<!-- ¿Y hacia otra página en la misma carpeta paginas/? -->\n<a href=\"\">Juegos</a>",
              codeRef: "<a href=\"../index.html\">Inicio</a>\n\n<!-- Desde paginas/ a otra en paginas/ no necesita ../ -->\n<a href=\"juegos.html\">Juegos</a>",
              product: "Sitio web completo con navegación funcional entre todas las páginas",
              teacherNotes: "Aquí deben probar todo el sitio antes de darlo por terminado. No permitir que entreguen sin verificar la integridad de todos los enlaces."
            }
          ],
          cierre: "Hoy aprendiste a ubicarte dentro de tu propio proyecto… eso es lo que hace que un sitio web funcione correctamente.",
          frase_docente: "Si entiendes las rutas, puedes conectar todo tu sitio web."
        },
        {
          id: "thu",
          label: "Jueves — Cronología y Contacto: completar el sitio",
          purpose: "Crear las dos páginas restantes del sitio (cronologia.html y contacto.html) aplicando rutas relativas para imágenes y navegación, dejando el sitio de 5 páginas completamente funcional.",
          hours: [
            {
              time: "Hora 1",
              title: "Página cronologia.html con imágenes",
              theory: "Una cronología organiza eventos en orden cronológico. En HTML se usa la lista ordenada <ol> para estructurar esa información de forma clara y jerárquica. Las imágenes siguen la misma lógica de rutas relativas que aplicamos en juegos.html: desde la carpeta paginas/ se sube un nivel con ../ para llegar a la carpeta img/. Si la ruta está mal escrita, la imagen no se mostrará — exactamente el mismo principio del lunes.",
              notebook: "Título: cronologia.html — lista ordenada e imágenes. 1. Copia el dictado completo. 2. Dibuja la estructura de carpetas recordando desde dónde estás escribiendo la ruta. 3. Responde: ¿qué etiqueta se usa para una lista ordenada? ¿cómo se escribe la ruta de una imagen desde paginas/? ¿qué diferencia hay entre <ol> y <ul>? 4. Escribe la ruta correcta para llegar a ../img/ desde paginas/cronologia.html.",
              practice: "1. Crear el archivo paginas/cronologia.html con estructura básica HTML5.\n2. Agregar dentro de <body> un <h1> con el título de la página.\n3. Crear una lista ordenada <ol> con al menos 5 entregas o eventos de la saga (año + nombre + descripción corta).\n4. Insertar mínimo 4 imágenes usando la ruta ../img/archivo.jpg con su atributo alt.\n5. Agregar navegación en la parte superior:\n   <a href=\"../index.html\">Inicio</a>\n   <a href=\"personajes.html\">Personajes</a>\n   <a href=\"juegos.html\">Juegos</a>\n6. Guardar y probar en el navegador.\n7. Verificar que todas las imágenes carguen y los enlaces funcionen.\n8. Corregir errores antes de continuar.",
              code: "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Cronología</title>\n</head>\n<body>\n\n  <nav>\n    <a href=\"\">Inicio</a>\n    <a href=\"\">Personajes</a>\n    <a href=\"\">Juegos</a>\n  </nav>\n\n  <h1>Cronología de Resident Evil</h1>\n\n  <!-- Lista ordenada con al menos 5 elementos -->\n  <ol>\n    <li></li>\n  </ol>\n\n  <!-- Mínimo 4 imágenes con ruta ../img/ -->\n  <img src=\"\" alt=\"\">\n\n</body>\n</html>",
              codeRef: "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Cronología</title>\n</head>\n<body>\n\n  <nav>\n    <a href=\"../index.html\">Inicio</a>\n    <a href=\"personajes.html\">Personajes</a>\n    <a href=\"juegos.html\">Juegos</a>\n  </nav>\n\n  <h1>Cronología de Resident Evil</h1>\n\n  <ol>\n    <li>1996 — Resident Evil: el inicio de la saga</li>\n    <li>1998 — Resident Evil 2: Raccoon City</li>\n    <li>2005 — Resident Evil 4: nueva dirección</li>\n    <li>2017 — Resident Evil 7: regreso al horror</li>\n    <li>2021 — Resident Evil Village</li>\n  </ol>\n\n  <img src=\"../img/re1.jpg\" alt=\"Resident Evil 1\">\n  <img src=\"../img/re2.jpg\" alt=\"Resident Evil 2\">\n\n</body>\n</html>",
              product: "Página cronologia.html funcional con lista ordenada, mínimo 4 imágenes y navegación correcta hacia index, personajes y juegos.",
              teacherNotes: "👨‍🏫 NOTA DOCENTE: Insistir en que es la misma lógica de rutas que el lunes — no es contenido nuevo, es práctica repetida. Si un alumno tiene imágenes rotas, hacer que trace mentalmente el camino: 'estoy en paginas/, necesito subir un nivel con ../ para llegar a img/'. No dar la respuesta directa, guiar el razonamiento."
            },
            {
              time: "Hora 2",
              title: "Página contacto.html y mejora de interfaz HTML",
              theory: "La página de contacto es el punto de comunicación entre el usuario y el sitio. Un formulario bien estructurado usa etiquetas <label> vinculadas a sus campos con el atributo for y el id del input correspondiente — esto mejora la accesibilidad y la experiencia del usuario. Además, en esta hora vamos a mejorar la interfaz HTML del sitio agregando atributos semánticos que hacen que la página sea más clara visualmente aunque aún no tenga CSS: usar placeholder en los inputs, agregar un <footer>, y asegurarse de que cada página tenga una estructura coherente con header, nav, main y footer.",
              notebook: "Título: contacto.html — formulario y estructura semántica. 1. Copia el dictado. 2. Escribe qué hace el atributo for en un <label> y para qué sirve el atributo id en un <input>. 3. Lista las etiquetas semánticas que debe tener una página completa: header, nav, main, footer. 4. Responde: ¿qué es el placeholder y por qué mejora la experiencia del usuario?",
              practice: "1. Crear el archivo paginas/contacto.html con estructura HTML5 completa usando <header>, <nav>, <main> y <footer>.\n2. En el <nav> agregar enlaces a: ../index.html, personajes.html, juegos.html, cronologia.html.\n3. Dentro de <main> crear un formulario con:\n   - Nombre (input type=\"text\" con placeholder)\n   - Correo (input type=\"email\" con placeholder)\n   - Asunto (input type=\"text\" con placeholder)\n   - Mensaje (textarea con placeholder)\n   - Botón enviar y botón limpiar\n4. Usar <label for=\"...\"> vinculado a cada campo.\n5. En index.html agregar en el nav el enlace a paginas/contacto.html.\n6. Probar la navegación completa del sitio: inicio → todas las páginas → regreso.\n7. Capturar el sitio funcionando en el navegador.",
              code: "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Contacto</title>\n</head>\n<body>\n\n  <header>\n    <h1></h1>\n  </header>\n\n  <nav>\n    <a href=\"\">Inicio</a>\n    <a href=\"\">Personajes</a>\n    <a href=\"\">Juegos</a>\n    <a href=\"\">Cronología</a>\n  </nav>\n\n  <main>\n    <h2>Envíanos un mensaje</h2>\n\n    <form>\n      <!-- label + input para: nombre, correo, asunto, mensaje -->\n      <!-- Recuerda: for en label debe coincidir con id en input -->\n\n      <input type=\"submit\" value=\"\">\n      <input type=\"reset\" value=\"\">\n    </form>\n  </main>\n\n  <footer>\n    <p></p>\n  </footer>\n\n</body>\n</html>",
              codeRef: "<!DOCTYPE html>\n<html lang=\"es\">\n<head>\n  <meta charset=\"UTF-8\">\n  <title>Contacto</title>\n</head>\n<body>\n\n  <header>\n    <h1>Contacto</h1>\n  </header>\n\n  <nav>\n    <a href=\"../index.html\">Inicio</a>\n    <a href=\"personajes.html\">Personajes</a>\n    <a href=\"juegos.html\">Juegos</a>\n    <a href=\"cronologia.html\">Cronología</a>\n  </nav>\n\n  <main>\n    <h2>Envíanos un mensaje</h2>\n\n    <form>\n\n      <label for=\"nombre\">Nombre:</label><br>\n      <input type=\"text\" id=\"nombre\" placeholder=\"Tu nombre completo\"><br><br>\n\n      <label for=\"correo\">Correo:</label><br>\n      <input type=\"email\" id=\"correo\" placeholder=\"tucorreo@ejemplo.com\"><br><br>\n\n      <label for=\"asunto\">Asunto:</label><br>\n      <input type=\"text\" id=\"asunto\" placeholder=\"¿De qué se trata?\"><br><br>\n\n      <label for=\"mensaje\">Mensaje:</label><br>\n      <textarea id=\"mensaje\" rows=\"5\" cols=\"40\" placeholder=\"Escribe tu mensaje aquí...\"></textarea><br><br>\n\n      <input type=\"submit\" value=\"Enviar\">\n      <input type=\"reset\" value=\"Limpiar\">\n\n    </form>\n  </main>\n\n  <footer>\n    <p>Fan Page de Resident Evil — Proyecto HTML</p>\n  </footer>\n\n</body>\n</html>",
              product: "Página contacto.html completa con formulario semántico, navegación hacia las 4 páginas del sitio y estructura header/nav/main/footer. Sitio de 5 páginas completamente funcional y navegable.",
              teacherNotes: "👨‍🏫 NOTA DOCENTE: El cierre de esta hora es la prueba completa del sitio. Pedir a los alumnos que naveguen por cada página sin saltar pasos: Inicio → Personajes → Juegos → Cronología → Contacto → regreso a Inicio. Si algún enlace falla, deben encontrar el error ellos mismos antes de pedir ayuda. Al final, quien tenga las 5 páginas funcionando tiene el proyecto base listo para recibir CSS."
            }
          ],
          cierre: "Hoy completaste las 5 páginas de tu sitio. Ya tienes una estructura real de proyecto web: organización de carpetas, rutas relativas, imágenes y navegación completa entre todas las páginas.",
          frase_docente: "Un sitio no es una página — es una red. Hoy terminaste de conectar la tuya."
        },
        {
          id: "dual",
          label: "Repositorio de Actividades Duales (Semana 08)",
          activities: [
            {
              title: "Tarea 1: Rutas Relativas y Estructura",
              instruction: "De acuerdo con la infografía 'Rutas Relativas en un Sitio Web': 1. Identifica tu ubicación actual antes de escribir una ruta. 2. Usa ../ para subir de nivel cuando estés dentro de la carpeta 'paginas'. 3. Asegúrate de que la ruta Locación -> Destino sea correcta para que las imágenes se visualicen.",
              image: "infografia_semana_08.png"
            }
          ]
        }
      ]
    },
    "W09": { days: [] },
    "W10": { days: [] },
    "W11": { days: [] }
  }
};
