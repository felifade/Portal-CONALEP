import re

with open('conalep/EDOA/public/html/W01.html', 'r', encoding='utf-8') as f:
    html = f.read()

# HORA 1
html = html.replace(
    '<p>Classroom será el espacio donde se publicarán indicaciones. La organización digital inicia antes de escribir: saber dónde guardar, cómo nombrar y entregar.</p>',
    '<p>Classroom será el espacio donde se publicarán indicaciones y se entregarán todos los productos. La organización digital inicia mucho antes de escribir: saber dónde guardar, cómo estructurar las carpetas, cómo nombrar un archivo de forma lógica y cómo entregar puntualmente, son las habilidades primarias que separan a un aficionado de un profesional. Un entorno digital ordenado previene la pérdida de trabajo y nos hace más eficientes.</p>'
)
html = html.replace(
    '<tr><td>1</td><td>Entrar a Google Classroom y unirse con el código.</td></tr>',
    '<tr><td>1</td><td>Abrir el navegador con cuenta institucional, ingresar a <strong>Classroom</strong> y unirse puntualmente a la clase con el código oficial.</td></tr>'
)
html = html.replace(
    '<tr><td>2</td><td>Abrir Google Drive y crear la carpeta principal.</td></tr>',
    '<tr><td>2</td><td>Acceder a <strong>Google Drive</strong>, crear una nueva carpeta raíz denominada con la nomenclatura oficial: <em>Módulo_Grupo_Apellidos_Nombres</em>.</td></tr>'
)
html = html.replace(
    '<tr><td>3</td><td>Crear la subcarpeta <strong>Evidencias_Semana_01</strong>.</td></tr>',
    '<tr><td>3</td><td>Entrar a la carpeta raíz y crear la subcarpeta <strong>Evidencias_Semana_01</strong> para resguardar los productos de estas sesiones.</td></tr>'
)

# HORA 2
html = html.replace(
    '<p>Un mini manual es un documento breve y ordenado. En esta práctica registraremos lo aprendido aplicando formato profesional.</p>',
    '<p>Un mini manual de supervivencia digital es un documento breve, técnico y rigurosamente ordenado. A través de esta práctica no solo registraremos los conceptos teóricos aprendidos, sino que los materializaremos aplicando un formato editorial altamente profesional. La documentación clara de un proceso es el principio del desarrollo de proyectos complejos; si no puedes explicarlo paso a paso en un manual, entonces aún no lo dominas.</p>'
)
html = html.replace(
    '<tr><td>1</td><td>Crear un documento nuevo en la carpeta del módulo.</td></tr>',
    '<tr><td>1</td><td>Ingresar a la carpeta de evidencias en Drive, generar un <strong>Documento de Google</strong> nuevo en blanco.</td></tr>'
)
html = html.replace(
    '<tr><td>2</td><td>Nombrarlo correctamente con tu nombre.</td></tr>',
    '<tr><td>2</td><td>Nombrar inmediatamente el archivo en la esquina superior izquierda como <em>Mini Manual - Apellido Nombre</em> para que inicie el autoguardado.</td></tr>'
)
html = html.replace(
    '<tr><td>3</td><td>Escribir el título y crear las secciones base.</td></tr>',
    '<tr><td>3</td><td>Digitar el gran título principal "Mini Manual de Supervivencia", presionar Enter y definir la estructura inicial de secciones y apartados base.</td></tr>'
)

# HORA 3
html = html.replace(
    '<p>La velocidad es clave, pero de nada sirve si no sabemos entregar el archivo. Compartir en la nube requiere ajustar permisos a "Cualquier usuario" para evitar bloqueos.</p>',
    '<p>La agilidad motriz frente al teclado es clave para la productividad, pero de nada sirve si no sabemos cómo entregar y distribuir el archivo. Compartir documentos en la nube requiere comprender la configuración de accesos; si no se ajustan los permisos a "Cualquier usuario con el enlace" en modo Lector, la información permanecerá bloqueada para el destinatario. Dominar los niveles de privacidad (Lector, Comentador, Editor) es vital en entornos de colaboración remota.</p>'
)
html = html.replace(
    '<tr><td>1</td><td>Entrar a typing.com y realizar prueba de 1 minuto.</td></tr>',
    '<tr><td>1</td><td>Acceder a la plataforma <strong>typing.com</strong>, seleccionar la prueba cronometrada de 1 minuto y ejecutarla utilizando postura correcta y ambos índices en F y J.</td></tr>'
)
html = html.replace(
    '<tr><td>2</td><td>Registrar PPM e insertar captura en el manual.</td></tr>',
    '<tr><td>2</td><td>Tomar una captura de pantalla del resultado final (Palabras Por Minuto - PPM), recortarla para que se vea legible, e insertarla estratégicamente en el manual.</td></tr>'
)
html = html.replace(
    '<tr><td>3</td><td>Ir a Compartir en Docs y cambiar a <strong>Cualquier usuario (Lector)</strong>.</td></tr>',
    '<tr><td>3</td><td>Dar clic en el botón azul de Compartir, modificar el acceso restringido a <strong>Cualquier usuario con el vínculo</strong> con rol de Lector, y copiar el enlace generado.</td></tr>'
)

# HORA 4
html = html.replace(
    '<p>Dar formato a un documento significa organizarlo para que otra persona pueda leerlo sin confundirse. Un texto con títulos, listas e imágenes comunica mejor.</p>',
    '<p>Dar formato a un documento no es simplemente "ponerlo bonito"; significa diseñar su arquitectura para que cualquier persona pueda consumirlo sin fatiga visual ni confusión. Un bloque interminable de texto genera rechazo inmediato. Sin embargo, cuando fragmentamos la información utilizando títulos, espaciados generosos, alineación justificada, listas con viñetas e imágenes de apoyo, el texto se transforma en un mensaje que verdaderamente comunica y persuade.</p>'
)
html = html.replace(
    '<tr><td>1</td><td>Copiar la lectura del Zombie sin formato.</td></tr>',
    '<tr><td>1</td><td>Leer comprensivamente el documento "Protocolo Zombie", seleccionarlo completo (Ctrl+A), copiarlo (Ctrl+C) e inyectarlo en el manual sin heredar formato (Pegar sin formato).</td></tr>'
)
html = html.replace(
    '<tr><td>2</td><td>Aplicar título 18-20, subtítulos 16-18 y justificado.</td></tr>',
    '<tr><td>2</td><td>Jerarquizar la fuente: Título principal en tamaño 18-20 pts, subtítulos en 16-18 pts, texto normal en 12 pts, aplicar alineación <strong>Justificada</strong> (Ctrl+J) e interlineado de 1.5 líneas.</td></tr>'
)
html = html.replace(
    '<tr><td>3</td><td>Usar negritas, viñetas, emojis e imágenes.</td></tr>',
    '<tr><td>3</td><td>Aplicar <strong>Negritas</strong> (Ctrl+B) únicamente en palabras clave, separar listas usando viñetas o emojis, y anexar al menos dos imágenes representativas centradas en la página.</td></tr>'
)

# HORA 5
html = html.replace(
    '<p>El formato profesional utiliza recursos visuales con intención. Las listas ordenan ideas y las tablas comparan información rápida.</p>',
    '<p>El diseño editorial moderno emplea recursos visuales con estricta intención. Cuando redactas reglas o secuencias, las listas con viñetas ordenan las ideas paso a paso; cuando manejas variables, fechas o comandos, las tablas cuadriculadas permiten comparar la información de manera ultrarrápida. Aprender a elegir entre un párrafo, una viñeta o una celda es lo que define a un creadter de documentos estructurados con madurez académica.</p>'
)
html = html.replace(
    '<tr><td>1</td><td>Crear la sección <strong>Mis herramientas de supervivencia digital</strong>.</td></tr>',
    '<tr><td>1</td><td>Desplazarse a una nueva página en blanco e introducir el encabezado principal denominado <strong>"Mis herramientas de supervivencia digital"</strong>.</td></tr>'
)
html = html.replace(
    '<tr><td>2</td><td>Redactar lista con viñetas: 3 reglas de oro.</td></tr>',
    '<tr><td>2</td><td>Redactar una lista estilizada utilizando viñetas de símbolos personalizados o emojis, que describa 3 reglas de oro inquebrantables para el trabajo en línea.</td></tr>'
)
html = html.replace(
    '<tr><td>3</td><td>Insertar tabla (2 columnas x 6 filas) con 5 atajos.</td></tr>',
    '<tr><td>3</td><td>A través del menú Insertar, trazar una tabla de 2 columnas por 6 filas. La primera fila fungirá como encabezado sombreado; las filas inferiores enlistarán 5 atajos vitales del teclado.</td></tr>'
)

with open('conalep/EDOA/public/html/W01.html', 'w', encoding='utf-8') as f:
    f.write(html)
