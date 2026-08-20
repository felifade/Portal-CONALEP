import re

with open('conalep/EDOA/public/html/W01.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Expandir Hora 1
html = html.replace(
    '<p>El uso del correo institucional es obligatorio y nuestra primera línea de defensa para la organización. Una cuenta estandarizada nos permite vernos como profesionales.</p>',
    '<p>El uso de la cuenta de correo institucional es de carácter estrictamente obligatorio para todo estudiante. Esta herramienta representa nuestra primera línea de defensa para mantener el orden, la organización y la seguridad de nuestra información escolar. Al estandarizar nuestros correos con un formato profesional, proyectamos una imagen de seriedad, respeto y pertenencia a la institución, preparándonos desde hoy para las exigencias del entorno laboral.</p>'
)

html = html.replace(
    '<tr><td>1</td><td>Abrir navegador y entrar a <strong>gmail.com</strong>.</td></tr>',
    '<tr><td>1</td><td>Abrir el navegador Google Chrome, cerrar cuentas personales e ingresar a <strong>gmail.com</strong> desde cero.</td></tr>'
)

html = html.replace(
    '<tr><td>3</td><td>Crear la contraseña oficial (Protocolo Zombie) y apuntarla en la libreta.</td></tr>',
    '<tr><td>3</td><td>Configurar la contraseña oficial aplicando el "Protocolo Zombie" (segura pero fácil de recordar) y anotar los accesos de inmediato en la libreta para no olvidarla.</td></tr>'
)

# Expandir Hora 2
html = html.replace(
    '<p>Google Classroom será nuestro cuartel general. Unirse al salón correcto asegura que no nos perdamos las misiones y entregas de toda la semana.</p>',
    '<p>Google Classroom funcionará como nuestro cuartel general de operaciones durante todo el semestre. Unirse de forma correcta y oportuna a la plataforma asegura que ningún estudiante quede rezagado y que las notificaciones, rúbricas de evaluación y materiales de apoyo lleguen a tiempo. Todo trabajo, práctica o proyecto deberá subirse únicamente a través de esta plataforma para garantizar la trazabilidad de sus evidencias.</p>'
)

html = html.replace(
    '<tr><td>1</td><td>Entrar a <strong>classroom.google.com</strong>.</td></tr>',
    '<tr><td>1</td><td>Ingresar a <strong>classroom.google.com</strong> verificando siempre en la esquina superior derecha que su cuenta institucional esté activa.</td></tr>'
)

html = html.replace(
    '<tr><td>2</td><td>Dar clic en el símbolo <strong>+</strong> y luego en "Unirse a una clase".</td></tr>',
    '<tr><td>2</td><td>Dar clic en el símbolo <strong>+</strong> ubicado en la parte superior derecha y seleccionar la opción "Unirse a una clase".</td></tr>'
)

html = html.replace(
    '<tr><td>3</td><td>Escribir el código proyectado y verificar el módulo.</td></tr>',
    '<tr><td>3</td><td>Introducir el código oficial proyectado en el pizarrón, asegurándose de respetar mayúsculas y minúsculas, y confirmar el acceso al módulo correspondiente.</td></tr>'
)

# Expandir Hora 3
html = html.replace(
    '<p>El almacenamiento en la nube evita la pérdida de información. Cada archivo debe tener un nombre claro para encontrarlo rápido; el desorden digital retrasa el trabajo.</p>',
    '<p>El almacenamiento en la nube, como Google Drive, es el estándar actual para evitar la pérdida irreversible de información. Cada archivo, documento o carpeta que generemos debe estar etiquetado con un nombre claro, lógico y descriptivo, permitiendo su recuperación en segundos. El desorden digital es el peor enemigo de la productividad; estructurar nuestra información nos hace estudiantes más eficientes, organizados y preparados para el futuro.</p>'
)

html = html.replace(
    '<tr><td>1</td><td>Abrir <strong>Google Drive</strong> y crear carpeta: <em>EDOA_Grupo_Apellido</em>.</td></tr>',
    '<tr><td>1</td><td>Acceder a la aplicación de <strong>Google Drive</strong> y crear una nueva carpeta raíz llamada exactamente: <em>EDOA_Grupo_Apellido_Nombre</em>.</td></tr>'
)

html = html.replace(
    '<tr><td>2</td><td>Dentro, crear <strong>Práctica 01</strong>.</td></tr>',
    '<tr><td>2</td><td>Entrar en esa carpeta y crear una subcarpeta denominada <strong>Práctica 01</strong> para mantener el historial ordenado.</td></tr>'
)

html = html.replace(
    '<tr><td>3</td><td>Crear Documento de Google y nombrarlo "Mini Manual".</td></tr>',
    '<tr><td>3</td><td>Generar un nuevo <strong>Documento de Google</strong> en esa ruta y nombrarlo "Mini Manual de Supervivencia", comprobando que se haya guardado automáticamente.</td></tr>'
)

# Expandir Hora 4
html = html.replace(
    '<p>La captura de datos es el paso 1. Al copiar el Protocolo Zombie, practicamos precisión y atajos de teclado básicos como Ctrl+C y Ctrl+V.</p>',
    '<p>La captura precisa y rápida de datos es el primer paso fundamental en la elaboración de documentos. Al transcribir o copiar el "Protocolo Zombie", los estudiantes ponen en práctica no solo su velocidad de escritura, sino el dominio de atajos de teclado esenciales (Ctrl+C, Ctrl+V, Ctrl+Z). Dominar el teclado agiliza el trabajo diario y reduce la fatiga motriz, permitiendo enfocar la energía mental en el contenido y no en el tecleo.</p>'
)

html = html.replace(
    '<tr><td>1</td><td>Escribir título: "Protocolo Zombie Formateado".</td></tr>',
    '<tr><td>1</td><td>En el documento recién creado, escribir como primer elemento el título principal: "Protocolo Zombie Formateado".</td></tr>'
)

html = html.replace(
    '<tr><td>2</td><td>Copiar la lectura proporcionada sobre el protocolo zombie y pegarla.</td></tr>',
    '<tr><td>2</td><td>Leer, seleccionar y copiar cuidadosamente el texto del protocolo zombie proporcionado por el profesor, y pegarlo en el documento.</td></tr>'
)

html = html.replace(
    '<tr><td>3</td><td>Separar en tres párrafos.</td></tr>',
    '<tr><td>3</td><td>Analizar la lectura y presionar la tecla Enter (Retorno) para dividir estructuralmente la información en tres párrafos manejables.</td></tr>'
)

# Expandir Hora 5
html = html.replace(
    '<p>Justificar, alinear y elegir una fuente legible. Un buen formato convierte un bloque de texto aburrido en un documento fácil de leer y comprender.</p>',
    '<p>Las herramientas de justificación, alineación, interlineado y selección de fuentes son la clave del diseño editorial. Un formato adecuado transforma inmediatamente un bloque masivo de texto aburrido y pesado en un documento limpio, estructurado y fácil de asimilar. Acostumbrarse a aplicar estos principios de legibilidad es indispensable para presentar tareas, oficios y reportes que generen una excelente impresión en quien los lee.</p>'
)

html = html.replace(
    '<tr><td>1</td><td>Seleccionar todo el texto (Ctrl+A).</td></tr>',
    '<tr><td>1</td><td>Seleccionar absolutamente todo el texto del documento utilizando el atajo de teclado maestro (Ctrl+A o Cmd+A).</td></tr>'
)

html = html.replace(
    '<tr><td>2</td><td>Cambiar fuente a <strong>Arial 12</strong> o similar, e interlineado 1.5.</td></tr>',
    '<tr><td>2</td><td>Aplicar la fuente <strong>Arial o Calibri a tamaño 12 puntos</strong>, y ajustar el <strong>interlineado a 1.5 líneas</strong> para dar respiro visual.</td></tr>'
)

html = html.replace(
    '<tr><td>3</td><td>Justificar el texto y aplicar negritas a palabras clave.</td></tr>',
    '<tr><td>3</td><td>Justificar todo el bloque de texto (Ctrl+J) e identificar palabras clave dentro de los párrafos para resaltarlas aplicando "Negritas" (Ctrl+B).</td></tr>'
)

# Expandir Hora 6
html = html.replace(
    '<p>Usar los estilos automáticos (Título 1, Título 2) en lugar de dar tamaño a mano, es el secreto de los profesionales. Le dice a la máquina la estructura del texto.</p>',
    '<p>El uso correcto de los estilos automáticos (Título 1, Título 2, Texto normal) en lugar de modificar tamaños manualmente, es el verdadero secreto de la ofimática profesional. Al usarlos, no solo cambiamos la apariencia, sino que le indicamos a la computadora la estructura semántica, jerarquía y niveles lógicos del documento. Esto garantiza consistencia total a lo largo de las páginas y habilita opciones avanzadas en procesadores de texto.</p>'
)

html = html.replace(
    '<tr><td>1</td><td>Seleccionar el título principal y aplicar <strong>Título 1</strong> desde la barra.</td></tr>',
    '<tr><td>1</td><td>Seleccionar el texto principal en la parte superior y asignar el estilo <strong>Título 1</strong> utilizando la barra de herramientas de estilos.</td></tr>'
)

html = html.replace(
    '<tr><td>2</td><td>Seleccionar los subtítulos y aplicar <strong>Título 2</strong>.</td></tr>',
    '<tr><td>2</td><td>Ubicar las sub-secciones o subtítulos dentro del texto y clasificar su jerarquía aplicando el estilo <strong>Título 2</strong> de manera consistente.</td></tr>'
)

html = html.replace(
    '<tr><td>3</td><td>Auto-revisión de ortografía.</td></tr>',
    '<tr><td>3</td><td>Ejecutar la herramienta de revisión ortográfica automática de Docs para pulir cualquier error de captura restante.</td></tr>'
)

# Expandir Hora 7
html = html.replace(
    '<p>Hacer un índice manualmente propicia errores. Si aplicamos estilos, la computadora puede generar una Tabla de Contenido en dos clics.</p>',
    '<p>Intentar construir un índice general de forma manual propicia errores humanos, descuadres y pérdida excesiva de tiempo. El premio a la correcta aplicación de "Estilos" (Títulos) es que el procesador de texto puede mapear todo el documento e inyectar una "Tabla de Contenido" dinámica en cuestión de segundos. Si el documento sufre cambios o crece 100 páginas, el índice se recalcula y se actualiza con un solo clic.</p>'
)

html = html.replace(
    '<tr><td>1</td><td>Colocar el cursor en la página 2 (después de portada).</td></tr>',
    '<tr><td>1</td><td>Realizar un salto de página e insertar el cursor limpiamente en la página 2 (inmediatamente después de la portada oficial).</td></tr>'
)

html = html.replace(
    '<tr><td>2</td><td>Ir al menú superior: <strong>Insertar > Índice</strong>.</td></tr>',
    '<tr><td>2</td><td>Navegar a través del menú superior hacia la ruta: <strong>Insertar > Índice</strong> (o Tabla de contenido).</td></tr>'
)

html = html.replace(
    '<tr><td>3</td><td>Seleccionar el formato con números de página.</td></tr>',
    '<tr><td>3</td><td>Elegir el modelo tradicional con números de página, y posteriormente probar dar clic en los títulos para saltar de sección.</td></tr>'
)

# Expandir Hora 8
html = html.replace(
    '<p>El formato profesional, el orden en la nube y la claridad visual son competencias que sirven para toda la vida escolar.</p>',
    '<p>El formato profesional, el orden riguroso en la nube y la claridad de jerarquías visuales no son caprichos estéticos, sino competencias digitales que te acompañarán durante toda tu vida académica y laboral. Finalizamos esta semana demostrando que el dominio de las herramientas ofimáticas nos separa de los aficionados, dándonos el poder de crear documentos con un estándar de calidad que garantiza que nuestro trabajo será valorado y respetado.</p>'
)

html = html.replace(
    '<tr><td>1</td><td>Guardar cambios y preparar dispositivo.</td></tr>',
    '<tr><td>1</td><td>Verificar el autoguardado en la nube de todas las prácticas, cerrar sesión adecuadamente y alistar su dispositivo móvil.</td></tr>'
)

html = html.replace(
    '<tr><td>2</td><td>Entrar a <strong>kahoot.it</strong>.</td></tr>',
    '<tr><td>2</td><td>Ingresar desde su navegador o aplicación móvil a <strong>kahoot.it</strong> y esperar indicaciones del profesor.</td></tr>'
)

html = html.replace(
    '<tr><td>3</td><td>Ingresar el PIN y competir en la trivia interactiva.</td></tr>',
    '<tr><td>3</td><td>Introducir el PIN oficial de la sala, poner su primer nombre real y competir limpiamente en la evaluación interactiva semanal.</td></tr>'
)

# AGREGAR PASO 4 Y PREGUNTAS AL EJEMPLO VISUAL DE HORA 8
html = html.replace(
    '<tr><td>3</td><td>Introducir el PIN oficial de la sala, poner su primer nombre real y competir limpiamente en la evaluación interactiva semanal.</td></tr>',
    '<tr><td>3</td><td>Introducir el PIN oficial de la sala, poner su primer nombre real y competir limpiamente en la evaluación interactiva semanal.</td></tr>\n              <tr><td>4</td><td>Copiar las preguntas de reflexión en la libreta, y responderlas con sus propias palabras mientras se califica su avance.</td></tr>'
)

html = html.replace(
    '''<div class="mini-title">Dinámica</div>
          <ul class="questions">
            <li>Preguntas de velocidad, formatos, atajos y orden.</li>
          </ul>''',
    '''<div class="mini-title">Responder en la Libreta (Evaluación)</div>
          <ul class="questions">
            <li>¿Por qué es un error cambiar el tamaño a mano en vez de usar "Estilos"?</li>
            <li>¿Qué ventajas te da tener tus archivos ordenados en la nube?</li>
            <li>¿Qué sucede con el Índice si agregas 5 páginas más al manual?</li>
          </ul>'''
)


with open('conalep/EDOA/public/html/W01.html', 'w', encoding='utf-8') as f:
    f.write(html)
