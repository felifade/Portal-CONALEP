import React, { useState, useRef } from 'react';
import { ExternalLink, History, Monitor, Sun, Moon } from 'lucide-react';
import { proyectoHistory } from '../data/proyecto_history';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const CodeEditor = ({ value, onChange, lang, light }) => {
  const preRef = useRef(null);

  const highlighted = (() => {
    try {
      const g =
        lang === 'html' ? Prism.languages.markup :
        lang === 'css'  ? Prism.languages.css     :
        lang === 'js'   ? Prism.languages.javascript : null;
      return g ? Prism.highlight(value, g, lang) : esc(value);
    } catch { return esc(value); }
  })();

  const syncScroll = e => {
    if (preRef.current) {
      preRef.current.scrollTop  = e.target.scrollTop;
      preRef.current.scrollLeft = e.target.scrollLeft;
    }
  };

  return (
    <div className={`ph-editor-wrap ${light ? 'ph-theme-light' : ''}`}>
      <pre
        ref={preRef}
        className="ph-editor-pre"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: highlighted + '\n' }}
      />
      <textarea
        className="ph-editor-textarea"
        value={value}
        onChange={e => onChange(e.target.value)}
        onScroll={syncScroll}
        spellCheck={false}
        autoCapitalize="off"
        autoCorrect="off"
      />
    </div>
  );
};

const CopyBtn = ({ text }) => {
  const [label, setLabel] = useState('Copiar');
  const copy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setLabel('¡Copiado!');
      setTimeout(() => setLabel('Copiar'), 2000);
    });
  };
  return <button className="ph-copy-btn" onClick={copy}>{label}</button>;
};

const HistorialPanel = () => {
  const [activeSnap, setActiveSnap]   = useState(0);
  const [activeFile, setActiveFile]   = useState(0);
  const [previewMode, setPreviewMode] = useState(false);
  const [editedFiles, setEditedFiles] = useState({});
  const [livePreview, setLivePreview] = useState(null);
  const [lightTheme, setLightTheme]   = useState(false);

  const snap    = proyectoHistory[activeSnap];
  const file    = snap.files[activeFile] ?? snap.files[0];
  const fileKey = `${snap.id}-${activeFile}`;
  const currentContent = editedFiles[fileKey] ?? file.content;

  const handleSnap = (i) => { setActiveSnap(i); setActiveFile(0); setLivePreview(null); };
  const handleFile = (i) => { setActiveFile(i); setLivePreview(null); };
  const handleEdit = (val) => setEditedFiles(prev => ({ ...prev, [fileKey]: val }));

  const handleRun = () => {
    if (file.buildPreview) {
      setLivePreview(file.buildPreview(currentContent));
      setPreviewMode(true);
    }
  };

  const previewSrc = livePreview ?? snap.srcdoc;

  return (
    <div className="ph-panel">
      <div className="ph-header">
        <div className="ph-header-left">
          <History size={14} className="ph-icon" />
          <span className="ph-header-title">Historial del Proyecto</span>
          <span className="ph-header-sub">Solo Modo Docente</span>
        </div>
        <div className="ph-header-actions">
          <button
            className={`ph-theme-toggle ${lightTheme ? 'active' : ''}`}
            onClick={() => setLightTheme(t => !t)}
            title={lightTheme ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro (proyector)'}
          >
            {lightTheme ? <Moon size={13} /> : <Sun size={13} />}
            {lightTheme ? 'Oscuro' : 'Claro'}
          </button>
          <button
            className={`ph-preview-toggle ${previewMode ? 'active' : ''}`}
            onClick={() => setPreviewMode(p => !p)}
          >
            <Monitor size={13} />
            {previewMode ? 'Ver código' : 'Ver preview'}
          </button>
        </div>
      </div>

      {/* Snapshot tabs */}
      <div className="ph-snap-tabs">
        {proyectoHistory.map((s, i) => (
          <button
            key={s.id}
            className={`ph-snap-tab ${activeSnap === i ? 'active' : ''}`}
            onClick={() => handleSnap(i)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="ph-snap-meta">
        <strong>{snap.title}</strong>
        <span>{snap.description}</span>
      </div>

      {previewMode ? (
        <div className="ph-preview-wrap">
          <div className="ph-preview-bar">
            <button className="ph-back-btn" onClick={() => setPreviewMode(false)}>
              ← Ver código
            </button>
            {livePreview && (
              <span className="ph-preview-badge">Vista de tu código editado</span>
            )}
          </div>
          <iframe srcDoc={previewSrc} title={snap.title} className="ph-preview-iframe" />
        </div>
      ) : (
        <div className="ph-code-area">
          <div className="ph-code-tabs">
            {snap.files.map((f, i) => (
              <button
                key={i}
                className={`ph-code-tab ${activeFile === i ? 'active' : ''}`}
                onClick={() => handleFile(i)}
              >
                {f.label}
              </button>
            ))}
            <div className="ph-code-actions">
              <CopyBtn text={currentContent} />
              {file.buildPreview && (
                <button className="ph-run-btn" onClick={handleRun}>▶ Ver resultado</button>
              )}
            </div>
          </div>
          <CodeEditor value={currentContent} onChange={handleEdit} lang={file.lang} light={lightTheme} />
        </div>
      )}
    </div>
  );
};

const ProyectoView = ({ isTeacherMode }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="proyecto-view">
      <div className="proyecto-header">
        <div className="proyecto-header-text">
          <h2 className="proyecto-title">Proyecto Final — Resident Evil</h2>
          <p className="proyecto-desc">
            Sitio web desarrollado en clase semana a semana. Cada técnica aprendida se aplica aquí.
          </p>
        </div>
        <a
          href="./proyecto/index.html"
          target="_blank"
          rel="noopener noreferrer"
          className="proyecto-open-btn"
        >
          <ExternalLink size={14} />
          Abrir en pestaña
        </a>
      </div>

      <div className="proyecto-iframe-wrapper">
        {!loaded && (
          <div className="proyecto-loading">
            <span className="proyecto-loading-dot" />
            <span className="proyecto-loading-dot" />
            <span className="proyecto-loading-dot" />
          </div>
        )}
        <iframe
          src="./proyecto/index.html"
          title="Proyecto Resident Evil"
          className="proyecto-iframe"
          style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s' }}
          onLoad={() => setLoaded(true)}
        />
      </div>

      {isTeacherMode && <HistorialPanel />}
    </div>
  );
};

export default ProyectoView;
