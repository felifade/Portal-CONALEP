export const W09 = {
  materia: "dewe",
  weekId: "W09",
  days: [
    {
      id: "mon",
      label: "Lunes — CSS completo en todo el sitio",
      purpose: "Concluir la vinculación del CSS a las páginas pendientes y aprender a estilizar imágenes con efectos hover y organizar el contenido con Flexbox, todo desde un único archivo style.css.",
      hours: [
        {
          time: "Hora 1",
          title: "Vincular style.css a todas las páginas del sitio",
          theory: "Un sitio web profesional mantiene un único archivo CSS compartido por todas sus páginas. Esto garantiza que el diseño sea consistente — si cambias el color del nav en style.css, cambia en las 5 páginas al mismo tiempo. La única diferencia entre vincular desde index.html y desde las páginas hijas es la ruta: desde paginas/ hay que subir un nivel con ../ igual que se hace con las imágenes.",
          notebook: "Título: Un CSS para todo el sitio.\n1. ¿Por qué es mejor un solo archivo CSS para todo el sitio en lugar de uno por página?\n2. Escribe la etiqueta <link> correcta para index.html y para paginas/personajes.html.\n3. ¿Qué pasa visualmente si olvidas agregar el <link> en una página?\n4. ¿En qué se parece la ruta del CSS a la ruta de las imágenes desde paginas/?",
          practice: "1. Abrir paginas/personajes.html en el editor.\n2. Dentro del <head> agregar:\n   <link rel=\"stylesheet\" href=\"../css/style.css\">\n3. Guardar y abrir en el navegador — verificar que los estilos aparecen.\n4. Repetir el mismo paso en paginas/juegos.html.\n5. Repetir en paginas/cronologia.html.\n6. Abrir cada página y confirmar que nav, colores y tipografía son iguales en las 5 páginas.\n7. Si una página no aplica estilos: revisar que el <link> esté dentro del <head> y que la ruta tenga ../",
          code: "<!-- En index.html (ya lo tienen) -->\n<link rel=\"stylesheet\" href=\"\">\n\n<!-- En paginas/personajes.html -->\n<link rel=\"stylesheet\" href=\"\">\n\n<!-- En paginas/juegos.html -->\n<link rel=\"stylesheet\" href=\"\">\n\n<!-- En paginas/cronologia.html -->\n<link rel=\"stylesheet\" href=\"\">",
          codeRef: "<!-- En index.html -->\n<link rel=\"stylesheet\" href=\"css/style.css\">\n\n<!-- En paginas/personajes.html -->\n<link rel=\"stylesheet\" href=\"../css/style.css\">\n\n<!-- En paginas/juegos.html -->\n<link rel=\"stylesheet\" href=\"../css/style.css\">\n\n<!-- En paginas/cronologia.html -->\n<link rel=\"stylesheet\" href=\"../css/style.css\">",
          product: "Las 5 páginas del sitio con el mismo CSS aplicado — diseño consistente y unificado.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: El error más común es poner css/style.css en las páginas hijas en lugar de ../css/style.css. Antes de avanzar a H2 verificar que TODOS tengan las 5 páginas con estilos. Quien tenga errores: comparar la ruta del CSS con la ruta de sus imágenes — es exactamente la misma lógica con ../",
        },
        {
          time: "Hora 2",
          title: "CSS: imágenes con estilo y efecto hover",
          theory: "Las imágenes sin CSS se muestran en su tamaño original y sin ningún acabado visual. Con CSS podemos limitarlas a un ancho máximo para que no rompan el layout, redondear sus esquinas con border-radius y agregar una sombra con box-shadow para darles profundidad. La propiedad transition permite que los cambios de estilo ocurran de forma suave en lugar de instantánea — combinada con transform en :hover produce el efecto de zoom que hace que las imágenes se sientan interactivas.",
          notebook: "Título: Estilizar imágenes con CSS.\n1. ¿Para qué sirve max-width en una imagen? ¿Qué diferencia hay con width?\n2. Escribe la regla CSS para redondear completamente una imagen (hacerla círculo).\n3. ¿Qué hace transform: scale(1.05)?\n4. ¿Por qué se necesita transition para que el efecto hover se vea suave?",
          practice: "1. Abrir css/style.css.\n2. Agregar al final las siguientes reglas para las imágenes:\n   - max-width y display block.\n   - border-radius para esquinas redondeadas.\n   - box-shadow para sombra.\n   - transition de 0.3s.\n3. Agregar regla img:hover con transform: scale(1.05).\n4. Guardar y probar en el navegador — pasar el cursor sobre las imágenes.\n5. Ajustar los valores de border-radius y box-shadow hasta que se vea bien.\n6. Verificar que el efecto funciona en juegos.html, personajes.html y cronologia.html sin tocar esos archivos.",
          code: "/* Agrega estas reglas en style.css */\n\nimg {\n  max-width: ;\n  display: ;\n  border-radius: ;\n  box-shadow: ;\n  transition: ;\n}\n\nimg:hover {\n  transform: ;\n}",
          codeRef: "/* Imágenes estilizadas */\n\nimg {\n  max-width: 280px;\n  display: block;\n  border-radius: 8px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.6);\n  transition: transform 0.3s ease;\n}\n\nimg:hover {\n  transform: scale(1.05);\n}",
          product: "Todas las imágenes del sitio con esquinas redondeadas, sombra y efecto de zoom al pasar el cursor.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Este es el momento más visual de la semana — los alumnos ven el efecto hover en tiempo real. Dejar que experimenten con los valores: border-radius: 50% hace círculo, box-shadow acepta colores (pueden poner rojo para tema RE). No corregir los valores creativos, solo los errores de sintaxis."
        },
        {
          time: "Hora 3",
          title: "CSS: Flexbox para galería y centrado del contenido",
          theory: "Flexbox es un sistema de CSS que organiza elementos en filas o columnas de forma automática y flexible. Al aplicar display: flex a un contenedor, todos sus hijos se acomodan en fila. Con flex-wrap: wrap se permite que los elementos pasen a la siguiente línea cuando ya no caben — esto crea galerías responsive sin JavaScript. La propiedad gap controla el espacio entre elementos y justify-content centra o distribuye el contenido horizontalmente.",
          notebook: "Título: Flexbox en CSS.\n1. ¿A qué elemento se aplica display: flex — al contenedor o a los hijos?\n2. ¿Para qué sirve flex-wrap: wrap?\n3. ¿Qué hace justify-content: center?\n4. Dibuja cómo se verían 5 imágenes sin Flexbox vs con Flexbox y flex-wrap: wrap.",
          practice: "1. En cada página con galería de imágenes (juegos, personajes, cronologia), envolver las imágenes en un <div class=\"galeria\"> si no lo tienen ya.\n2. En style.css agregar al final:\n   - Regla .galeria con display flex, flex-wrap wrap, gap y justify-content.\n3. Agregar regla para main con max-width y margin auto para centrar el contenido.\n4. Guardar y verificar que las imágenes se acomodan en filas automáticas.\n5. Cambiar el tamaño de la ventana del navegador para ver cómo se reorganizan solas.",
          code: "/* Agrega en style.css */\n\nmain {\n  max-width: ;\n  margin: ;\n  padding: ;\n}\n\n.galeria {\n  display: ;\n  flex-wrap: ;\n  gap: ;\n  justify-content: ;\n}",
          codeRef: "/* Centrar el contenido principal */\n\nmain {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 24px 20px;\n}\n\n/* Galería flexible */\n\n.galeria {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  justify-content: center;\n}",
          product: "Galería de imágenes organizada en filas con Flexbox y contenido centrado en todas las páginas.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Lo más común es que apliquen display:flex al elemento img en lugar del contenedor — recordar que Flexbox se aplica al padre. Si no tienen un div.galeria, pedirles que lo agreguen solo en la página donde lo necesiten. El efecto de redimensionar la ventana y ver las imágenes reorganizarse solas siempre genera reacción positiva."
        }
      ],
      cierre: "Hoy el sitio pasó de HTML puro a tener un diseño unificado, imágenes con acabado profesional y una galería que se organiza sola. Todo con un único archivo CSS.",
      frase_docente: "Un buen CSS hace que el mismo HTML se vea completamente diferente. Hoy lo comprobaste."
    },
    {
      id: "thu",
      label: "Jueves — CSS: estilizar el nav",
      purpose: "Transformar la barra de navegación de texto plano a un componente con identidad visual: color de fondo, espaciado, hover en los enlaces y destacar la página activa.",
      hours: [
        {
          time: "Hora 1",
          title: "CSS: color, hover y página activa en el nav",
          theory: "El `<nav>` es el elemento más visto del sitio — aparece en todas las páginas. Sin CSS tiene fondo transparente y los enlaces se ven como texto subrayado azul. Con CSS podemos darle un color de fondo que defina el tema visual del sitio, quitar el subrayado de los enlaces con `text-decoration: none`, agregar padding para que los links sean más fáciles de clicar y usar `:hover` para que cambien de color al pasar el cursor. La clase `.activo` en el `<a>` de la página actual permite distinguir en qué sección está el usuario.",
          notebook: "Título: Estilizar el nav con CSS.\n1. ¿Por qué es importante darle estilos al nav? → ________________________________\n2. ¿Qué hace text-decoration: none en un enlace? → ________________________________\n3. ¿Qué diferencia hay entre nav a y nav a:hover? → ________________________________\n4. ¿Para qué sirve la clase .activo en un enlace? → ________________________________\n5. Escribe la regla CSS para que el nav tenga fondo oscuro y los enlaces sean blancos. → ________________________________",
          practice: "1. Abrir css/style.css.\n2. Agregar las reglas para el nav:\n   - Fondo de color con background-color.\n   - display flex y gap para alinear los enlaces en fila.\n   - padding interno.\n3. Agregar reglas para nav a:\n   - color blanco.\n   - text-decoration none.\n   - padding en cada enlace.\n4. Agregar nav a:hover con un color diferente y transition.\n5. En cada HTML, agregar class=\"activo\" al enlace que corresponde a la página actual.\n6. Agregar nav a.activo con un color o subrayado que lo diferencie.\n7. Guardar y verificar en las 5 páginas que el nav se ve igual y el enlace activo se distingue.",
          code: "/* Agrega en style.css */\n\nnav {\n  background-color: ;\n  display: ;\n  gap: ;\n  padding: ;\n}\n\nnav a {\n  color: ;\n  text-decoration: ;\n  padding: ;\n  transition: ;\n}\n\nnav a:hover {\n  color: ;\n}\n\nnav a.activo {\n  color: ;\n  font-weight: ;\n}",
          codeRef: "/* Nav estilizado */\n\nnav {\n  background-color: #1a0000;\n  display: flex;\n  gap: 8px;\n  padding: 12px 24px;\n}\n\nnav a {\n  color: #ffffff;\n  text-decoration: none;\n  padding: 8px 16px;\n  border-radius: 4px;\n  transition: background-color 0.2s ease;\n}\n\nnav a:hover {\n  background-color: #8b0000;\n  color: #ffffff;\n}\n\nnav a.activo {\n  background-color: #8b0000;\n  color: #ffffff;\n  font-weight: bold;\n}",
          product: "Nav con fondo oscuro, enlaces en fila, efecto hover y enlace activo visible en las 5 páginas del sitio.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: El error más común es agregar class=\"activo\" en TODOS los archivos al mismo enlace en lugar de al que corresponde a cada página. Verificar que en index.html el activo es 'Inicio', en juegos.html es 'Juegos', etc. Los colores del ejemplo usan el tema Resident Evil — dejar que los alumnos ajusten los colores a su propio tema. Quien termine antes: agregar `position: sticky; top: 0;` al nav para que quede fijo al hacer scroll."
        },
        {
          time: "Hora 2",
          title: "CSS: estilizar el footer",
          theory: "El footer cierra el sitio visualmente igual que el nav lo abre. En HTML ya tienen un `<footer>` con texto como el nombre del sitio, el año o el autor. Con CSS le damos color de fondo que haga juego con el nav, centramos el texto con `text-align: center`, le damos `padding` para que no se vea apretado y separamos el contenido con `margin-top: auto` si el footer está dentro de un flex container. El resultado: el sitio tiene cabeza, cuerpo y pie — estructura visual completa.",
          notebook: "Título: El footer en CSS.\n1. ¿Qué información suele tener un footer? → ________________________________\n2. ¿Qué propiedad centra el texto dentro del footer? → ________________________________\n3. ¿Cómo haces que el footer tenga el mismo color de fondo que el nav? → ________________________________\n4. ¿Qué diferencia hay entre padding y margin? → ________________________________\n5. Escribe la regla CSS completa para un footer con fondo oscuro, texto blanco y centrado. → ________________________________",
          practice: "1. Verificar que cada HTML tiene un <footer> con contenido (si no, agregarlo).\n   Ejemplo: <footer><p>© 2025 — Mi Sitio Web</p></footer>\n2. Abrir css/style.css y agregar al final las reglas del footer.\n3. Usar el mismo color de fondo que el nav para que coincidan.\n4. Centrar el texto y agregar padding arriba y abajo.\n5. Cambiar el color del texto a blanco o un tono claro.\n6. Agregar un margin-top para separar el footer del contenido principal.\n7. Guardar y verificar en las 5 páginas que el footer se ve igual en todas.",
          code: "/* Agrega en style.css */\n\nfooter {\n  background-color: ;\n  color: ;\n  text-align: ;\n  padding: ;\n  margin-top: ;\n}\n\nfooter p {\n  font-size: ;\n}",
          codeRef: "/* Footer */\n\nfooter {\n  background-color: #1a0000;\n  color: #cccccc;\n  text-align: center;\n  padding: 20px 24px;\n  margin-top: 40px;\n}\n\nfooter p {\n  font-size: 14px;\n}",
          product: "Footer con color de fondo, texto centrado y padding aplicado en las 5 páginas del sitio.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Si el footer no llega al fondo de la página cuando el contenido es corto, es porque el body no ocupa el alto completo. Solución: agregar `min-height: 100vh; display: flex; flex-direction: column;` al body y `flex: 1;` al main. No es obligatorio resolverlo hoy — mencionarlo como curiosidad para quien pregunte. El color debe coincidir con el nav — recordar a los alumnos que consistencia visual = sitio profesional."
        }
      ],
      cierre: "El nav arriba, el footer abajo — el sitio ya tiene estructura visual completa. Todo con el mismo archivo CSS.",
      frase_docente: "El diseño no es decoración — es comunicación."
    },
    {
      id: "fri",
      label: "Viernes — Día del Trabajo (Sin clases)",
      purpose: "No hay clases. 1 de mayo — Día Internacional del Trabajo.",
      hours: [
        {
          time: "📅 Sin sesión",
          title: "1 de Mayo — Día Internacional del Trabajo",
          theory: "El 1 de mayo se conmemora el Día Internacional del Trabajo en memoria de los Mártires de Chicago: el 4 de mayo de 1886, obreros en huelga que exigían la jornada de 8 horas fueron reprimidos en la plaza Haymarket. Murieron trabajadores y policías, y varios líderes sindicales fueron ejecutados en juicios considerados injustos. En México es día de descanso obligatorio desde 1923. La jornada de 8 horas que hoy damos por sentada fue conquistada con esa lucha.",
          notebook: "Reflexión (opcional para quien quiera):\n1. ¿Cuántas horas diarias trabajaban los obreros antes de 1886?\n2. ¿Qué pedían los trabajadores en la huelga de Chicago?\n3. ¿Por qué crees que esta fecha se recuerda en todo el mundo?\n4. ¿Qué derechos laborales existen hoy que antes no existían?",
          practice: "Día de descanso — no hay práctica en PC.",
          product: "Descanso merecido. Nos vemos la próxima semana.",
          teacherNotes: "👨‍🏫 NOTA DOCENTE: Sin sesión. Si quieres, comparte la reflexión de libreta como actividad voluntaria por plataforma."
        }
      ],
      cierre: "Los derechos que tenemos hoy alguien los ganó ayer. Descansa y nos vemos la próxima semana.",
      frase_docente: "Detrás de cada derecho laboral hay una historia de valentía."
    },
    {
      id: "dual",
      label: "Repositorio de Actividades Duales (Semana 09)",
      activities: [
        {
          title: "Semana 09 — Referencia Visual",
          instruction: "Usa esta infografía como guía rápida durante la sesión: revisa las reglas CSS vistas en clase y verifica que tu style.css las incluya todas antes de cerrar el proyecto.",
          image: "dewe_w09_info01.png"
        }
      ]
    }
  ]
};
