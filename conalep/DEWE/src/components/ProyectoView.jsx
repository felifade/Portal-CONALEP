import React, { useState } from 'react';
import { ExternalLink, History, Monitor } from 'lucide-react';
import { proyectoHistory } from '../data/proyecto_history';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';

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
        <button
          className={`ph-preview-toggle ${previewMode ? 'active' : ''}`}
          onClick={() => setPreviewMode(p => !p)}
        >
          <Monitor size={13} />
          {previewMode ? 'Ver código' : 'Ver preview'}
        </button>
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
          <div className="ph-editor-wrap">
            <Editor
              value={currentContent}
              onValueChange={handleEdit}
              highlight={code => {
                const grammar =
                  file.lang === 'css'  ? Prism.languages.css  :
                  file.lang === 'js'   ? Prism.languages.javascript :
                  file.lang === 'html' ? Prism.languages.markup : null;
                return grammar
                  ? Prism.highlight(code, grammar, file.lang)
                  : code;
              }}
              padding={20}
              className="ph-editor"
              textareaClassName="ph-editor-textarea"
              preClassName="ph-editor-pre"
            />
          </div>
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
