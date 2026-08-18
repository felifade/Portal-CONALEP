const data = window.CONALEP_DASHBOARD_DATA;

const state = {
  month: ""
};

const labels = {
  pendiente: "Pendiente",
  atendido: "Atendido",
  curso: "Curso",
  directo: "Me toca",
  referencia: "Referencia",
  "sin-fecha": "Sin fecha"
};

function clean(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
}

function renderSummary() {
  const grid = document.getElementById("summaryGrid");
  grid.innerHTML = data.summary.map(item => `
    <article class="metric-card">
      <span class="status-label">${item.label}</span>
      <strong>${item.value}</strong>
      <span class="meta">${item.note}</span>
    </article>
  `).join("");
}

function renderRadar() {
  if (!document.getElementById("radarGroups")) return;
  const wrap = document.getElementById("radarGroups");
  wrap.innerHTML = data.radar.map(group => `
    <section class="radar-group ${group.kind}">
      <h3>${group.title}</h3>
      <ul>${group.items.map(item => `<li>${item}</li>`).join("")}</ul>
    </section>
  `).join("");
}

function renderMonthTabs() {
  const tabs = document.getElementById("monthTabs");
  const content = document.getElementById("monthContent");
  if (!data.months || !data.months.length) return;

  if (!state.month) state.month = data.months[0].id;

  tabs.innerHTML = data.months.map(month => `
    <button class="month-tab ${state.month === month.id ? "active" : ""}" data-month="${month.id}" style="--month-color:${month.color}">
      <span>${month.label}</span>
      <strong>${month.items.length}</strong>
    </button>
  `).join("");

  const month = data.months.find(item => item.id === state.month) || data.months[0];
  const doneMonth = (data.doneMonths || []).find(item => item.monthId === month.id);
  content.style.setProperty("--month-color", month.color);
  content.innerHTML = `
    <div class="month-header">
      <div>
        <span class="status-label">${month.range}</span>
        <h3>${month.label}</h3>
      </div>
      <span class="month-count">${month.items.length} fechas</span>
    </div>
    <div class="month-cards">
      ${month.items.map(item => `
        <article class="month-card">
          <span class="month-date">${item.date}</span>
          <h4>${item.title}</h4>
          <p>${item.note}</p>
          <div class="pill-row">
            ${(item.tags || []).map(tag => `<span class="pill">${labels[tag] || tag}</span>`).join("")}
          </div>
        </article>
      `).join("")}
    </div>
    ${doneMonth ? `
      <div class="done-inside">
        <div class="done-inside-heading">
          <span>Ya hice</span>
          <strong>${doneMonth.items.length} atendidos</strong>
        </div>
        <div class="done-inline-cards">
          ${doneMonth.items.map(item => `
            <article class="done-card done-${item.kind || "general"}">
              <span class="month-date">${item.date}</span>
              <h4>${item.title}</h4>
              <p>${item.note}</p>
              <span class="done-kind">${item.label || "Atendido"}</span>
              ${item.link ? `<a href="${item.link}">Abrir evidencia</a>` : ""}
            </article>
          `).join("")}
        </div>
      </div>
    ` : ""}
  `;

  tabs.querySelectorAll(".month-tab").forEach(button => {
    button.addEventListener("click", () => {
      state.month = button.dataset.month;
      renderMonthTabs();
    });
  });
}

function renderCriticalDates() {
  const wrap = document.getElementById("criticalDates");
  if (!wrap) return;
  const items = data.criticalDates || [];
  wrap.innerHTML = items.length ? items.map(item => `
    <article class="critical-card critical-${item.kind || "normal"}">
      <span class="critical-date">${item.date}</span>
      <h3>${item.title}</h3>
      <p>${item.note}</p>
      <span class="critical-tag">${item.label}</span>
    </article>
  `).join("") : `<p class="empty">Aqui pondremos las fechas que quieres tener siempre a la vista.</p>`;
}

function matchesFilter(event) {
  if (state.filter === "all") return true;
  return event.tags.includes(state.filter) || event.status === state.filter;
}

function matchesSearch(event) {
  const q = state.query.toLowerCase();
  if (!q) return true;
  return [event.title, event.date, event.description, event.type, event.status]
    .map(clean)
    .join(" ")
    .toLowerCase()
    .includes(q);
}

function renderEvents() {
  if (!document.getElementById("eventList")) return;
  const list = document.getElementById("eventList");
  const events = data.events.filter(event => matchesFilter(event) && matchesSearch(event));
  list.innerHTML = events.length ? events.map(event => `
    <article class="event-card">
      <div class="event-top">
        <span class="meta">${event.date || "Sin fecha exacta"}</span>
        <span class="pill ${event.status === "atendido" ? "done" : event.status === "pendiente" ? "pending" : ""}">${labels[event.status] || event.status}</span>
      </div>
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <div class="pill-row">
        ${event.tags.map(tag => `<span class="pill ${tag === "curso" ? "course" : tag === "sin-fecha" ? "no-date" : ""}">${labels[tag] || tag}</span>`).join("")}
      </div>
      ${event.link ? `<a href="${event.link}">Abrir fuente</a>` : ""}
    </article>
  `).join("") : `<p class="empty">No hay elementos con ese filtro.</p>`;
}

function renderSources() {
  document.getElementById("updatedAt").textContent = data.updatedAt;
  document.getElementById("sourceCount").textContent = `${data.sources.length} notas fuente`;
  document.getElementById("sourceLinks").innerHTML = data.sources
    .map(source => `<a href="${source.href}">${source.label}</a>`)
    .join("");
}

function bindControls() {
  if (!document.querySelector(".filter")) return;
  document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
      button.classList.add("active");
      state.filter = button.dataset.filter;
      renderEvents();
    });
  });

  document.getElementById("searchBox")?.addEventListener("input", event => {
    state.query = event.target.value;
    renderEvents();
  });
}

renderSummary();
renderMonthTabs();
renderCriticalDates();
renderSources();
