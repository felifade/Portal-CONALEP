# -*- coding: utf-8 -*-
with open('conalep/EDOA/public/html/W01.html', 'r', encoding='utf-8') as f:
    html = f.read()

reading = """
    <!-- LECTURA BASE HORA 4 -->
    <section class="slide">
      <span class="eyebrow">Lectura base · Hora 4</span>
      <h2>El pasillo 13: protocolo zombie en la escuela</h2>
      <div class="ra-box" style="margin-bottom: 15px; margin-top: 10px;">
        <strong>¡Misión de formato! 🧟‍♂️</strong><br>Toma el dictado de este relato en tu documento de Google Docs. Usa tu creatividad y las herramientas (títulos, negritas, justificado, emojis e imágenes) para transformarlo en un reporte profesional. ¡Dale vida al texto y demuestra cómo un buen formato salva la clase!
      </div>
      <div class="reading">
        <article class="text">
          <h3>Inicio del relato</h3>
          <p>La primera señal apareció durante el cambio de clase. En el pasillo 13, las luces parpadearon tres veces y las bocinas soltaron un ruido extraño, como si alguien hubiera conectado un videojuego viejo al sistema de avisos. Nadie se asustó al principio; varios pensaron que era una broma del taller de mantenimiento.</p>
          <p>Pero después se escuchó un golpe seco en la puerta del laboratorio. Del otro lado, un alumno caminaba muy lento, con la mochila abierta, la mirada perdida y una libreta mordida entre las manos. No parecía peligroso, pero repetía una sola frase: “entreguen el archivo... sin nombre... sin formato...”</p>
          <p>La profesora cerró la puerta con calma y escribió en el pizarrón: Protocolo de documentos claros. Si esto es una emergencia, necesitamos ordenar la información antes de actuar.</p>
        </article>
        <article class="text">
          <h3>Organización del equipo</h3>
          <p>El grupo se dividió en equipos. Unos revisaron cámaras, otros buscaron el origen del aviso y otros abrieron Google Docs para registrar cada hallazgo. La primera versión del reporte era un desastre: no tenía título, mezclaba ideas, las capturas estaban enormes y nadie sabía qué imagen explicaba cada paso.</p>
          <p>Entonces decidieron mejorar el documento. Agregaron un título llamativo, subtítulos para separar la situación, las evidencias y las acciones. Pusieron en negritas las palabras importantes: protocolo, evidencia, archivo, seguridad y formato. Subrayaron las instrucciones que no podían olvidarse y usaron emojis con moderación para identificar alerta, revisión y entrega.</p>
          <p>Al terminar, descubrieron que el “zombie” no era un monstruo, sino un estudiante agotado que llevaba tres noches entregando archivos sin nombre. La verdadera amenaza no era el pasillo 13: era trabajar sin orden. Desde ese día, el grupo prometió que cada documento tendría estructura, claridad y evidencia suficiente para que cualquiera pudiera entenderlo.</p>
        </article>
      </div>
    </section>
"""

# Insert it before Hora 5
html = html.replace('<!-- FASE 3: EJEMPLO VISUAL (Slide 2 de la hora) -->\n    <section class="slide">\n      <span class="eyebrow">Sesión 03 · Hora 5</span>', reading + '\n    <!-- FASE 3: EJEMPLO VISUAL (Slide 2 de la hora) -->\n    <section class="slide">\n      <span class="eyebrow">Sesión 03 · Hora 5</span>')

with open('conalep/EDOA/public/html/W01.html', 'w', encoding='utf-8') as f:
    f.write(html)
