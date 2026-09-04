import React from 'react';
import { CalendarDays, GraduationCap, LayoutDashboard, FlaskConical } from 'lucide-react';

const Sidebar = ({ activeView, onViewSelect, isMobileOpen, onMobileClose }) => {
  return (
    <>
      {isMobileOpen && (
        <div className="sidebar-overlay" onClick={onMobileClose} />
      )}
      <aside className={`sidebar ${isMobileOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <div className="school-brand">
            <div className="brand-icon">
              <GraduationCap size={18} color="white" strokeWidth={2.5} />
            </div>
            <div className="school-info">
              <h1 className="school-title">CONALEP</h1>
              <p className="school-subtitle">Pachuca II</p>
            </div>
          </div>
          <div className="author-credits">
            <p className="author-label">Realizado por</p>
            <p className="author-name">Dr. Felipe López Salazar</p>
          </div>
          <div style={{ fontSize: '11px', color: '#facc15', textAlign: 'right', paddingRight: '12px', paddingBottom: '6px', fontWeight: 'bold', letterSpacing: '1px' }}>
            v91-dash
          </div>
        </div>

        <nav className="nav-container">
          <div className="main-nav-section">
            <a
              className={`main-nav-link ${activeView === 'teaching' ? 'active' : ''}`}
              onClick={() => { onViewSelect('teaching'); if (onMobileClose) onMobileClose(); }}
            >
              <CalendarDays size={15} className="doc-icon" />
              Planeación por semana
            </a>
            <a
              className={`main-nav-link ${activeView === 'dashboard' ? 'active' : ''}`}
              onClick={() => { onViewSelect('dashboard'); if (onMobileClose) onMobileClose(); }}
            >
              <LayoutDashboard size={15} className="doc-icon" />
              Dashboard Principal
            </a>
            <a
              className={`main-nav-link ${activeView === 'codelab' ? 'active' : ''}`}
              onClick={() => { onViewSelect('codelab'); if (onMobileClose) onMobileClose(); }}
            >
              <FlaskConical size={15} className="doc-icon" />
              Laboratorio de Código
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
