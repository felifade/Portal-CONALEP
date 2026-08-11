export const W08 = {
  materia: "dewe",
  weekId: "W08",
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
      id: "fri",
      label: "Viernes — Repaso del sitio + Introducción a CSS",
      purpose: "Verificar que el sitio de 5 páginas esté completamente funcional y dar los primeros pasos con CSS para cambiar la apariencia visual del sitio.",
      hours: [
        {
          time: "Hora 1",
          title: "Repaso: auditoría del sitio de 5 páginas",
          theory: "Un sitio web no está terminado hasta que cada página carga correctamente, todas las imágenes aparecen y todos los enlaces funcionan en ambas direcciones. Antes de agregar CSS, la estructura HTML debe ser sólida — un error de ruta o un enlace roto se vuelve invisible bajo los estilos y es mucho más difícil de corregir después.",
          notebook: "Título: Checklist del sitio completo.\n1. Escribe las 5 páginas de tu sitio y su ubicación (index en raíz, resto en paginas/).\n2. Para cada página anota: ¿carga? ¿imágenes visibles? ¿nav funciona?\n3. Responde: ¿qué diferencia hay entre una ruta ../img/ y una ruta img/ y cuándo falla cada una?\n4. Dibuja el mapa de navegación completo del sitio.",
          practice: "1. Abrir index.html en el navegador.\n2. Hacer clic en cada enlace del nav y verificar que abre la página correcta.\n3. En cada página hija: verificar que el enlace 'Inicio' regresa a index.html.\n4. Verificar que todas las imágenes cargan (no deben aparecer íconos rotos).\n5. Si hay errores: identificar si es problema de nombre de archivo, extensión o nivel de carpeta.\n6. Anotar en libreta los errores encontrados y cómo se corrigieron.",
          code: "<!-- Checklist: completa los href correctos -->\n\n<!-- Desde index.html hacia páginas hijas -->\n<a href=\"\">Personajes</a>\n<a href=\"\">Juegos</a>\n<a href=\"\">Cronología</a>\n<a href=\"\">Contacto</a>\n\n<!-- Desde paginas/cualquiera.html hacia inicio -->\n<a href=\"\">Inicio</a>\n\n<!-- Imagen desde paginas/ hacia img/ -->\n<img src=\"\" alt=\"\">",
          codeRef: "<!-- Desde index.html hacia páginas hijas -->\n<a href=\"paginas/personajes.html\">Personajes</a>\n<a href=\"paginas/juegos.html\">Juegos</a>\n<a href=\"paginas/cronologia.html\">Cronología</a>\n<a href=\"paginas/contacto.html\">Contacto</a>\n\n<!-- Desde paginas/cualquiera.html hacia inicio -->\n<a href=\"../index.html\">Inicio</a>\n\n<!-- Imagen desde paginas/ hacia img/ -->\n<img src=\"../img/re1.jpg\" alt=\"Resident Evil 1\">",
          product: "Sitio auditado: 5 páginas funcionales, imágenes cargando, navegación completa sin errores.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Esta hora es diagnóstica. No es tiempo libre — es revisión sistemática. El alumno que diga 'ya lo tengo' debe demostrarlo navegando el sitio completo delante del docente. Los errores más comunes: href sin paginas/ desde index, o sin ../ desde páginas hijas. Quien termina antes ayuda a quien tiene errores."
        },
        {
          time: "Hora 2",
          title: "CSS: vincular hoja de estilos y primeras propiedades",
          theory: "CSS (Cascading Style Sheets — Hojas de Estilo en Cascada) es el lenguaje que controla la apariencia visual de las páginas HTML. Se escribe en un archivo separado con extensión .css y se vincula al HTML mediante la etiqueta <link> dentro del <head>. La sintaxis básica es: selector { propiedad: valor; }. El selector indica a qué elemento HTML se aplica el estilo, la propiedad qué aspecto se cambia, y el valor cómo queda.",
          notebook: "Título: Introducción a CSS.\n1. Escribe la sintaxis básica de una regla CSS con sus 3 partes: selector, propiedad y valor.\n2. ¿Dónde se coloca el <link> para vincular el CSS?\n3. ¿Por qué se recomienda un archivo CSS externo en lugar de escribir estilos dentro del HTML?\n4. Escribe la regla CSS para poner el fondo del body en color negro y el texto en blanco.",
          practice: "1. Crear la carpeta css/ dentro de tu proyecto (si no existe).\n2. Crear el archivo css/style.css.\n3. En el <head> de index.html agregar: <link rel=\"stylesheet\" href=\"css/style.css\">.\n4. En style.css escribir las siguientes reglas:\n   - body: background-color oscuro, color de texto claro, font-family sans-serif.\n   - h1: color de acento (rojo, azul, etc.), font-size más grande.\n   - p: line-height para mejor lectura.\n5. Guardar y verificar en el navegador que los estilos se aplican.\n6. Si no aparecen: revisar la ruta del href en el link.",
          code: "/* Completa las propiedades y valores */\n\nbody {\n  background-color: ;\n  color: ;\n  font-family: ;\n}\n\nh1 {\n  color: ;\n  font-size: ;\n}\n\np {\n  line-height: ;\n}",
          codeRef: "/* css/style.css — estilos base del sitio */\n\nbody {\n  background-color: #0f1117;\n  color: #e2e8f0;\n  font-family: Arial, sans-serif;\n  margin: 0;\n  padding: 0;\n}\n\nh1 {\n  color: #e53e3e;\n  font-size: 2rem;\n}\n\np {\n  line-height: 1.6;\n}\n\n/* Vincular en el <head> de index.html: */\n/* <link rel=\"stylesheet\" href=\"css/style.css\"> */",
          product: "Archivo css/style.css creado y vinculado a index.html con estilos básicos aplicados a body, h1 y p.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: El error más frecuente es la ruta del link. Desde index.html la ruta es css/style.css (sin ../). Desde paginas/ sería ../css/style.css — ese punto se aborda en la hora 3. Enfocarse primero en que funcione en index.html antes de extenderlo a las demás páginas."
        },
        {
          time: "Hora 3",
          title: "CSS: estilizar el nav, colores y tipografía",
          theory: "El nav es uno de los elementos más importantes visualmente porque aparece en todas las páginas. Con CSS podemos cambiar su color de fondo, el espaciado entre los enlaces y el comportamiento al pasar el cursor (hover). La pseudo-clase :hover permite aplicar estilos solo cuando el usuario pasa el mouse sobre un elemento — esto hace la navegación más intuitiva y profesional.",
          notebook: "Título: Estilizar el nav con CSS.\n1. ¿Qué es una pseudo-clase en CSS? Escribe el ejemplo de :hover.\n2. Escribe la diferencia entre padding y margin.\n3. ¿Por qué cambiar el display de los <a> dentro del nav a inline-block mejora el diseño?\n4. Dibuja cómo se vería tu nav antes y después de aplicar CSS.",
          practice: "1. En style.css agregar estilos para el nav:\n   - Fondo oscuro, padding vertical.\n2. Estilizar los enlaces a dentro del nav:\n   - Quitar el subrayado (text-decoration: none).\n   - Color de texto claro.\n   - Padding horizontal para separar los links.\n   - display: inline-block.\n3. Agregar :hover con cambio de color de fondo o texto.\n4. Vincular css/style.css a las 4 páginas hijas usando la ruta ../css/style.css.\n5. Verificar que el nav se vea igual en las 5 páginas.",
          code: "/* Completa los valores para el nav */\n\nnav {\n  background-color: ;\n  padding: ;\n}\n\nnav a {\n  color: ;\n  text-decoration: ;\n  padding: ;\n  display: ;\n}\n\nnav a:hover {\n  background-color: ;\n  color: ;\n}",
          codeRef: "/* Nav estilizado */\n\nnav {\n  background-color: #1a1a2e;\n  padding: 12px 20px;\n}\n\nnav a {\n  color: #e2e8f0;\n  text-decoration: none;\n  padding: 8px 16px;\n  display: inline-block;\n  border-radius: 4px;\n}\n\nnav a:hover {\n  background-color: #e53e3e;\n  color: #ffffff;\n}\n\n/* En páginas hijas vincular con: */\n/* <link rel=\"stylesheet\" href=\"../css/style.css\"> */",
          product: "Nav estilizado y consistente en las 5 páginas del sitio. Primeros estilos CSS funcionales con hover interactivo.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: El punto crítico de esta hora es la ruta del link en las páginas hijas: ../css/style.css (con ../). Si olvidan el ../ el CSS no aplica. Hacer que lo comparen con la ruta de las imágenes — es la misma lógica. El cierre ideal es que el nav se vea idéntico al navegar entre las 5 páginas."
        }
      ],
      cierre: "Hoy tu sitio dejó de ser solo estructura y comenzó a tener identidad visual. El mismo CSS que vinculaste hoy puede evolucionar durante todo el semestre.",
      frase_docente: "HTML construye la casa. CSS la decora. Hoy pusiste el primer color en las paredes."
    },
    {
      id: "dual",
      label: "Repositorio de Actividades Duales (Semana 08)",
      activities: [
        {
          title: "Tarea 1: Rutas Relativas y Estructura",
          instruction: "De acuerdo con la infografía 'Rutas Relativas en un Sitio Web': 1. Identifica tu ubicación actual antes de escribir una ruta. 2. Usa ../ para subir de nivel cuando estés dentro de la carpeta 'paginas'. 3. Asegúrate de que la ruta Locación -> Destino sea correcta para que las imágenes se visualicen.",
          image: "infografia_semana_08.png"
        },
        {
          title: "Tarea 2: Completar el Sitio Web de 5 Páginas",
          instruction: "De acuerdo con la infografía 'Completar el sitio web de 5 páginas': 1. Crea cronologia.html con lista ordenada <ol> y mínimo 4 imágenes usando rutas relativas ../img/. 2. Crea contacto.html con formulario semántico usando <label for> vinculado al <input id> correspondiente. 3. Verifica que las 5 páginas (index, personajes, juegos, cronología, contacto) estén conectadas entre sí mediante navegación.",
          image: "s8_info02.png"
        }
      ]
    }
  ]
};
