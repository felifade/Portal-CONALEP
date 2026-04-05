import { useMemo, useState } from "react";

const materias = [
  {
    id: "dewe-20",
    nombre: "Elaboración de Páginas Web (DEWE-20)",
    grupo: "601",
    horario: "Lunes 5:40 pm - 8:10 pm · Jueves 4:50 pm - 6:30 pm · Viernes 3:30 pm - 6:30 pm",
    descripcion:
      "Portal docente para organizar teoría, prácticas, actividades duales, recursos y evidencias por semana.",
    ras: [
      {
        id: "ra-1-1",
        titulo: "1.1 RA (10%)",
        semanas: ["Semana 00", "Semana 01", "Semana 02"],
      },
      {
        id: "ra-1-2",
        titulo: "1.2 RA (25%)",
        semanas: ["Semana 03", "Semana 04", "Semana 05"],
      },
      {
        id: "ra-1-3",
        titulo: "1.3 RA (25%)",
        semanas: ["Semana 06", "Semana 07"],
      },
    ],
    semanas: {
      "Semana 00": {
        tema: "Encuadre, herramientas de estudio y organización",
        lunesJueves: "Presentación del módulo, reglas de clase, evaluación y elaboración de mapa conceptual de conocimientos previos.",
        dual: "Infografía en libreta sobre reglas de clase, nombre de la materia y técnicas de apuntes eficaces.",
        viernes: "Creación del documento base en Google Docs y organización inicial del manual de prácticas.",
      },
      "Semana 01": {
        tema: "Fundamentos y planeación de sitios web",
        lunesJueves: "Internet, WWW, W3C, objetivo del sitio, audiencia y contenido.",
        dual: "Infografía en libreta sobre Internet vs Web, protocolos y elementos básicos de la planeación de un sitio.",
        viernes: "Mapa del sitio y estructura digital inicial del proyecto.",
      },
      "Semana 02": {
        tema: "Diseño visual y maquetación",
        lunesJueves: "Psicología del color, tipografía, regla de tercios, sitemap y wireframe.",
        dual: "Infografía resumen sobre color, tipografía, regla de tercios y wireframe como evidencia en libreta.",
        viernes: "Guía de estilo digital y primera maqueta del sitio en Google Docs.",
      },
      "Semana 03": {
        tema: "HTML5: estructura básica y primeros bloques",
        lunesJueves: "Etiquetas básicas, estructura html, head y body, encabezados y párrafos.",
        dual: "Infografía en libreta sobre qué es HTML5, etiquetas y estructura básica del documento.",
        viernes: "Primera página web funcional en local y práctica guiada con etiquetas básicas.",
      },
      "Semana 04": {
        tema: "Organización del contenido en HTML",
        lunesJueves: "Etiquetas semánticas, listas, jerarquía de contenido y wireframe estructural.",
        dual: "Infografía sobre etiquetas semánticas, listas y jerarquía web para recuperar contenido en libreta.",
        viernes: "Página temática en HTML puro aplicando estructura, listas y navegación simple.",
      },
      "Semana 05": {
        tema: "Imágenes, enlaces y tablas",
        lunesJueves: "Uso de img, a, tablas y organización de información en páginas estáticas.",
        dual: "Infografía sobre imágenes, enlaces, listas y tablas como resumen del contenido visto.",
        viernes: "Construcción de una fan page temática con secciones, imagen, enlaces y tabla.",
      },
      "Semana 06": {
        tema: "Página funcional completa en HTML puro",
        lunesJueves: "Consolidación de etiquetas intermedias y estructura completa de una página temática.",
        dual: "Infografía sobre etiquetas usadas para construir una página funcional: imagen, enlaces, tabla y formulario.",
        viernes: "Práctica completa tipo fan page con bloques de código y construcción por misiones.",
      },
      "Semana 07": {
        tema: "Organización de carpetas, enlaces y sitio multipágina",
        dias: {
          lunes: {
            horas: [
              {
                hora: "Hora 1",
                teoria: "Un sitio web no está formado por un solo archivo. Está compuesto por varios archivos organizados en carpetas. Esta organización permite que el proyecto sea más claro, fácil de corregir y funcional. Normalmente, la página principal se llama index.html y otras carpetas como img o css ayudan a separar recursos.",
                libreta: "Dibuja la estructura de un sitio web con una carpeta principal, tres archivos HTML y dos carpetas internas llamadas img y css. Escribe debajo para qué sirve cada elemento.",
                practica: "Crear en la computadora una carpeta llamada Sitio_Resident_Evil y dentro de ella crear las carpetas img y css."
              },
              {
                hora: "Hora 2",
                teoria: "El nombre de los archivos en un proyecto web debe ser claro, corto y sin espacios. El archivo principal generalmente se llama index.html. Si los nombres están mal escritos, el sitio puede dejar de funcionar o perder navegación.",
                libreta: "Escribe tres ejemplos de nombres correctos para archivos web y tres ejemplos incorrectos. Explica por qué no conviene usar espacios o nombres confusos.",
                practica: "Crear dentro de la carpeta principal los archivos index.html, personajes.html y contacto.html."
              },
              {
                hora: "Hora 3",
                teoria: "Antes de conectar páginas, primero debemos asegurarnos de que el proyecto tenga una estructura lógica. La organización correcta evita errores cuando después agregamos imágenes, enlaces y estilos.",
                libreta: "Haz un pequeño esquema donde muestres qué archivo sería la página principal y cuáles serían páginas secundarias.",
                practica: "Abrir los archivos creados y escribir una estructura mínima en cada uno con título y contenido básico."
              }
            ]
          },
          jueves: {
            horas: [
              {
                hora: "Hora 1",
                teoria: "Los enlaces permiten conectar páginas dentro de un mismo sitio. Esto se logra con la etiqueta <a> y el atributo href. Gracias a esto, el usuario puede desplazarse entre secciones sin salir del proyecto.",
                libreta: "Escribe la etiqueta de enlace y explica con tus palabras qué hace el atributo href. Después dibuja tres páginas unidas con flechas.",
                practica: "En index.html agregar enlaces hacia personajes.html y contacto.html."
              },
              {
                hora: "Hora 2",
                teoria: "Cuando una página puede regresar al inicio, la navegación se vuelve más clara. Un sitio bien organizado no deja al usuario perdido. Por eso, cada página secundaria debe tener un enlace de regreso.",
                libreta: "Escribe por qué es importante que un sitio tenga navegación clara. Después anota un ejemplo de enlace para volver al inicio.",
                practica: "En personajes.html y contacto.html agregar un enlace que regrese a index.html."
              },
              {
                hora: "Hora 3",
                teoria: "Las rutas relativas son direcciones internas que permiten que una página encuentre otra dentro del mismo proyecto. Si los archivos están en la misma carpeta, basta con escribir su nombre correctamente.",
                libreta: "Explica qué pasaría si en un enlace el nombre del archivo estuviera mal escrito. Da un ejemplo.",
                practica: "Probar la navegación completa entre las tres páginas y corregir errores de escritura o rutas."
              }
            ]
          },
          viernes: {
            horas: [
              {
                hora: "Hora 1",
                teoria: "Un sitio web no solo debe navegarse, también debe comunicar algo. Una vez creada la estructura, se agrega contenido real para que cada página tenga sentido y propósito.",
                libreta: "Escribe qué información pondrías en la página de inicio, en personajes y en contacto dentro de tu proyecto.",
                practica: "Agregar texto real y títulos en cada una de las tres páginas del proyecto."
              },
              {
                hora: "Hora 2",
                teoria: "Cuando todas las páginas tienen contenido, el proyecto deja de ser un ejercicio y empieza a parecer un sitio real. La consistencia entre páginas ayuda a que el usuario entienda la lógica del sitio.",
                libreta: "Haz una lista con los elementos que debe tener cada página para que el sitio se vea organizado.",
                practica: "Agregar listas, subtítulos y mejor contenido a personajes.html y contacto.html."
              },
              {
                hora: "Hora 3",
                teoria: "Un proyecto web puede crecer poco a poco. Una vez que la navegación básica funciona, podemos expandirlo agregando nuevas páginas. Así se construyen sitios más completos.",
                libreta: "Diseña una nueva página llamada juegos.html y anota qué contenido debería llevar.",
                practica: "Crear juegos.html, agregarla al menú del sitio y conectar la navegación con las demás páginas."
              }
            ]
          }
        },
        dual: "Infografía en libreta: qué es un sitio web, estructura de carpetas, función de index.html y navegación entre páginas.",
        codigo: "<a href='personajes.html'>Personajes</a> | <a href='contacto.html'>Contacto</a>"
      },
    },
  },
];

function Sidebar({ materia, semanaActiva, setSemanaActiva }) {
  const [abiertos, setAbiertos] = useState(["ra-1-3"]);

  const toggleRA = (raId) => {
    setAbiertos((prev) =>
      prev.includes(raId) ? prev.filter((id) => id !== raId) : [...prev, raId]
    );
  };

  return (
    <aside className="w-full max-w-sm border-r border-slate-200 bg-white p-5">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Pestañas del documento</p>
          <h2 className="text-2xl font-black text-slate-800">{materia.id.toUpperCase()}</h2>
        </div>
        <button className="rounded-full bg-slate-100 px-3 py-1 text-xl text-slate-600">+</button>
      </div>

      <div className="space-y-4">
        {materia.ras.map((ra) => {
          const abierto = abiertos.includes(ra.id);
          return (
            <div key={ra.id}>
              <button
                onClick={() => toggleRA(ra.id)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left hover:bg-slate-100"
              >
                <span className="flex items-center gap-2 font-bold text-slate-700">
                  <span className="rounded-md bg-slate-200 px-2 py-1 text-xs">1</span>
                  {ra.titulo}
                </span>
                <span className="text-slate-500">{abierto ? "▾" : "▸"}</span>
              </button>

              {abierto && (
                <div className="mt-2 space-y-2 pl-6">
                  {ra.semanas.map((semana) => {
                    const activa = semanaActiva === semana;
                    return (
                      <button
                        key={semana}
                        onClick={() => setSemanaActiva(semana)}
                        className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                          activa
                            ? "bg-blue-100 text-blue-800"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <span className="rounded-md border border-current px-2 py-1 text-xs">▤</span>
                        <span className="font-semibold">{semana}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        <button className="mt-4 flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-slate-700 hover:bg-slate-100">
          <span className="rounded-md border border-current px-2 py-1 text-xs">▤</span>
          <span className="font-semibold">Plantilla</span>
        </button>
      </div>
    </aside>
  );
}

function ContentPanel({ materia, semanaActiva }) {
  const data = materia.semanas[semanaActiva];

  return (
    <main className="flex-1 bg-slate-50 p-8 md:p-10">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">{materia.nombre}</p>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-slate-900">{semanaActiva}</h1>
            <p className="mt-2 text-lg text-slate-600">{data.tema}</p>
            <p className="mt-3 text-sm text-slate-500">Grupo {materia.grupo} · {materia.horario}</p>
          </div>

          <div className="space-y-6">
            {Object.entries(data.dias).map(([dia, info]) => (
              <section key={dia} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h2 className="text-xl font-bold text-slate-800 capitalize">{dia}</h2>
                <div className="mt-4 space-y-3">
                  {info.horas.map((h, i) => (
                    <div key={i} className="rounded-xl bg-slate-50 p-4 border space-y-4">
                      <p className="font-semibold text-slate-700">{h.hora}</p>

                      <details className="rounded-lg bg-white p-3 border">
                        <summary className="cursor-pointer font-semibold text-slate-800">10 min de teoría</summary>
                        <p className="mt-3 text-sm text-slate-600">{h.teoria}</p>
                      </details>

                      <details className="rounded-lg bg-white p-3 border">
                        <summary className="cursor-pointer font-semibold text-slate-800">Actividad en libreta</summary>
                        <p className="mt-3 text-sm text-slate-600">{h.libreta}</p>
                      </details>

                      <details className="rounded-lg bg-white p-3 border">
                        <summary className="cursor-pointer font-semibold text-slate-800">Actividad práctica</summary>
                        <p className="mt-3 text-sm text-slate-600">{h.practica}</p>
                      </details>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h2 className="text-lg font-bold text-amber-800">Actividad dual</h2>
              <p className="mt-3 text-sm text-amber-900">{data.dual}</p>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-slate-100 p-5">
              <h2 className="text-lg font-bold text-slate-800">Código clave</h2>
              <p className="mt-3 text-sm font-mono text-slate-700">{data.codigo}</p>
            </section>
          </div>

          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6">
            <h3 className="text-xl font-bold text-slate-800">Vista del proyecto</h3>
            <p className="mt-2 text-slate-600">
              Este portal ya está pensado como proyecto modular. Cada semana tendrá teoría, práctica,
              infografía dual, recursos y evidencias. El siguiente paso es cargar todo el contenido real
              de DEWE-20 con detalle completo por sesión.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function PortalDocenteProyecto() {
  const materia = useMemo(() => materias[0], []);
  const [semanaActiva, setSemanaActiva] = useState("Semana 07");

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Proyecto Portal Docente</p>
            <h1 className="text-2xl font-black text-slate-900">Sistema modular de clases</h1>
          </div>
          <div className="rounded-2xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            Materia piloto: DEWE-20
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
        <Sidebar materia={materia} semanaActiva={semanaActiva} setSemanaActiva={setSemanaActiva} />
        <ContentPanel materia={materia} semanaActiva={semanaActiva} />
      </div>
    </div>
  );
}
