# CLAUDE.md — Reglas para edición con IA

## Estructura del proyecto

```
Portal CONALEP/
├── index.html          ← Página principal (vanilla HTML, no tocar sin autorización)
├── sw.js               ← Service Worker compartido
├── deploy.sh           ← Script de deploy — SIEMPRE usar esto para publicar
├── shared/             ← Componentes y estilos compartidos entre materias
│   ├── components/     ← Sidebar, WeekView, CodeLab, PinModal
│   └── styles/         ← App.css, variables.css
└── conalep/
    ├── MTHS/           ← Materia: Manejo de Tecnologías de Hardware y Software (Grupo 401)
    └── DEWE/           ← Materia: Elaboración de Páginas Web (Grupo 601)
```

## Reglas de edición — OBLIGATORIAS

### 1. Aislamiento entre materias
- NUNCA importar datos de una materia en el código de otra.
- NUNCA editar `conalep/DEWE/` para arreglar algo de `conalep/MTHS/` y viceversa.
- Cada archivo de schedule declara `materia: "mths"` o `materia: "dewe"` — verificarlo antes de editar.

### 2. Archivos de datos
- El contenido de cada semana vive en `src/data/schedules/WXX.js` — un archivo por semana.
- `src/data/curriculum.js` solo contiene metadatos (cortes, RAs, lista de semanas) — NO contenido de sesiones.
- Para agregar o editar una sesión: editar SOLO el archivo `schedules/WXX.js` correspondiente.
- Para agregar una nueva semana: crear `schedules/WXX.js` e importarlo en `curriculum.js`.

### 3. IDs únicos
- Las semanas se identifican como `"W00"` a `"W14"` — consistente en todos los archivos.
- Los RAs tienen IDs únicos por materia: `"RA1.1"`, `"RA2"`, etc. No usar nombres genéricos.
- Los días usan IDs: `"mon"`, `"tue"`, `"wed"`, `"thu"`, `"fri"`.

### 4. Componentes compartidos
- Los componentes en `shared/components/` son genéricos — NO deben contener datos de ninguna materia.
- Si se necesita un comportamiento específico de una materia, crearlo como override en `conalep/MTHS/src/components/` o `conalep/DEWE/src/components/`.
- Cambios en `shared/` afectan AMBAS materias — verificar que funciona en las dos antes de publicar.

### 5. Assets
- Los assets de MTHS tienen prefijo `mths_`: `mths_eva1.png`, `mths_contra.png`
- Los assets de DEWE tienen prefijo `dewe_`: `dewe_s8_info02.png`
- NUNCA usar nombres genéricos como `infografia.png` sin prefijo de materia.

### 6. Deploy
- SIEMPRE terminar una sesión de edición con `bash deploy.sh` desde la raíz del proyecto.
- `deploy.sh` bumps la versión del SW, hace build de ambas apps y pushea a GitHub.
- Si solo se modifica una materia, igual correr `deploy.sh` completo.

### 7. Rutas y configuración Vite
- Ambas apps usan `base: "./"` en `vite.config.js` — no cambiar.
- El alias `@shared` apunta a `../../shared` — usarlo para importar componentes compartidos.
- No agregar dependencias externas sin autorización del usuario.

## Estructura de un archivo de semana

```js
// conalep/MTHS/src/data/schedules/W09.js
export const W09 = {
  materia: "mths",   // ← SIEMPRE declarar la materia
  weekId: "W09",     // ← Debe coincidir con el nombre del archivo y el ID en curriculum.js
  days: [
    {
      id: "tue",
      label: "Martes — ...",
      purpose: "...",
      hours: [ { time: "Hora 1", title: "...", theory: "...", ... } ],
      cierre: "...",
      frase_docente: "..."
    }
  ]
};
```

## Qué NO hacer nunca

- No borrar archivos sin autorización explícita.
- No cambiar el diseño visual sin autorización.
- No modificar `index.html` (página principal) sin autorización.
- No hacer push directo a GitHub — siempre usar `deploy.sh`.
- No renombrar IDs existentes de semanas, RAs o cortes (rompe referencias).
- No duplicar componentes que ya existen en `shared/`.
