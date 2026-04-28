export const W06 = {
  materia: "dewe",
  weekId: "W06",
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
};
