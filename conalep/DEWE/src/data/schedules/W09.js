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
          teacherNotes: "👨‍🏫 NOTA DOCENTE: El error más común es poner css/style.css en las páginas hijas en lugar de ../css/style.css. Antes de avanzar a H2 verificar que TODOS tengan las 5 páginas con estilos. Quien tenga errores: comparar la ruta del CSS con la ruta de sus imágenes — es exactamente la misma lógica con ../"
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
    }
  ]
};
