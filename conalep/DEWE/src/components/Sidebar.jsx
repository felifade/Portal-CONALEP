
const Sidebar = ({ activeView, onViewSelect }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="school-brand">
          <h1 className="school-title">CONALEP</h1>
          <h2 className="school-subtitle">Pachuca II</h2>
        </div>
        <div className="author-credits">
          <p className="author-label">Realizado por:</p>
          <p className="author-name">Dr. Felipe López Salazar</p>
        </div>
      </div>

      <nav className="nav-container">
        <div className="main-nav-section">
          <a
            className={`main-nav-link ${activeView === 'codelab' ? 'active' : ''}`}
            onClick={() => onViewSelect('codelab')}
          >
            <span className="doc-icon">🧪</span>
            Laboratorio de Código
          </a>
          <a
            className={`main-nav-link ${activeView === 'curriculum' ? 'active' : ''}`}
            onClick={() => onViewSelect('curriculum')}
          >
            <span className="doc-icon">📚</span>
            Contenido del Curso
          </a>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
