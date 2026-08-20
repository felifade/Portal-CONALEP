# -*- coding: utf-8 -*-
with open('conalep/EDOA/public/html/W01.html', 'r', encoding='utf-8') as f:
    html = f.read()

old_questions = """<ul class="questions">
            <li>¿Por qué es un error cambiar el tamaño a mano en vez de usar "Estilos"?</li>
            <li>¿Qué ventajas te da tener tus archivos ordenados en la nube?</li>
            <li>¿Qué sucede con el Índice si agregas 5 páginas más al manual?</li>
          </ul>"""

new_questions = """<ul class="questions" style="font-size: clamp(14px, 1vw, 18px);">
            <li>1. ¿Por qué es un error cambiar el tamaño a mano en vez de usar "Estilos"?</li>
            <li>2. ¿Qué ventajas te da tener tus archivos ordenados en la nube de Google Drive?</li>
            <li>3. ¿Qué sucede con el Índice automático si agregas 5 páginas más al manual?</li>
            <li>4. Menciona tres diferencias clave entre guardar un archivo localmente y guardarlo en la nube.</li>
            <li>5. ¿Para qué sirve ajustar los permisos de un documento a "Cualquier usuario que tenga el vínculo"?</li>
            <li>6. Explica con tus palabras qué es una contraseña segura.</li>
            <li>7. ¿Cuál es el atajo de teclado para deshacer un error y por qué es más rápido que usar el mouse?</li>
            <li>8. ¿Qué impacto visual tiene aplicar alineación "Justificada" a un bloque largo de texto?</li>
            <li>9. ¿Por qué es importante utilizar una nomenclatura clara (Ej. Apellido_Nombre_Practica01) en tus archivos escolares?</li>
            <li>10. ¿Cómo contribuye el uso de listas con viñetas y tablas a que un manual sea más fácil de leer?</li>
          </ul>"""

html = html.replace(old_questions, new_questions)

with open('conalep/EDOA/public/html/W01.html', 'w', encoding='utf-8') as f:
    f.write(html)
