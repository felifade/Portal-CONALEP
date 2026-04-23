import React, { useState, useRef, useEffect, useCallback } from 'react';

const BOILERPLATE = {
  html: `<h1>¡Hola Grupo 601!</h1>\n<p>Los admiro y los quiero mucho. ¡A darle con todo al código!</p>`,
  cssDefault: ``,
  js: ``
};

const RESIDENT_EVIL = {
  html: `<h1>🧟 Resident Evil Labs</h1>\n<div class="mansion">\n  <p>Status: <span id="status">Normal</span></p>\n  <button id="alertBtn">Activar Alerta</button>\n</div>`,
  css: `.mansion { background: #050505; color: #ff0000; padding: 40px; border: 5px solid #333; }\n#alertBtn { background: #800; color: white; border: none; padding: 10px 20px; cursor: pointer; }`,
  js: `const btn = document.getElementById('alertBtn');\nbtn.addEventListener('click', () => {\n  document.getElementById('status').innerText = '¡PELIGRO: Virus Detectado!';\n  document.body.style.background = '#300';\n});`
};

const TOAST_ICONS = { success: '✅', info: 'ℹ️', warning: '⚠️', error: '❌' };

const highlightCode = (code, type) => {
  if (!code) return '';
  const escaped = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  if (type === 'html') {
    return escaped.replace(/(&lt;!--[\s\S]*?--&gt;)|(&lt;\/?[a-zA-Z0-9]+)|(\s[a-zA-Z-]+(?==))|("[^"]*"|'[^']*')/g, (m, m1, m2, m3, m4) => {
      if (m1) return `<span class="token comment">${m1}</span>`;
      if (m2) return `<span class="token tag">${m2}</span>`;
      if (m3) return ` <span class="token attr-name">${m3.trim()}</span>`;
      if (m4) return `<span class="token string">${m4}</span>`;
      return m;
    });
  }
  if (type === 'css') {
    return escaped.replace(/(\/\*[\s\S]*?\*\/)|([^{}\s][^{}]+(?=\{))|([a-zA-Z-]+(?=\s*:))|(:[^;]+;)/g, (m, m1, m2, m3, m4) => {
      if (m1) return `<span class="token comment">${m1}</span>`;
      if (m2) return `<span class="token selector">${m2}</span>`;
      if (m3) return `<span class="token property">${m3}</span>`;
      if (m4) return `:<span class="token value">${m4.substring(1)}</span>`;
      return m;
    });
  }
  if (type === 'js') {
    return escaped.replace(/(\/\/.*|\/\*[\s\S]*?\*\/)|\b(const|let|var|function|return|if|else|for|while|try|catch|new|async|await)\b|("[^"]*"|'[^']*'|`[^`]*`)|([0-9.]+)|([a-zA-Z0-9_]+)(?=\()/g, (m, m1, m2, m3, m4, m5) => {
      if (m1) return `<span class="token comment">${m1}</span>`;
      if (m2) return `<span class="token keyword">${m2}</span>`;
      if (m3) return `<span class="token string">${m3}</span>`;
      if (m4) return `<span class="token number">${m4}</span>`;
      if (m5) return `<span class="token function">${m5}</span>`;
      return m;
    });
  }
  return escaped;
};

const ProEditor = ({ value, onChange, type, fontSize }) => {
  const preRef = useRef(null);
  const textareaRef = useRef(null);
  const gutterRef = useRef(null);
  const handleScroll = () => {
    if (preRef.current && textareaRef.current && gutterRef.current) {
      const t = textareaRef.current.scrollTop;
      preRef.current.scrollTop = t;
      gutterRef.current.scrollTop = t;
      preRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  };
  const lineNumbers = Array.from({ length: Math.max(value.split('\n').length, 1) }, (_, i) => i + 1);
  return (
    <div className="pro-editor-container">
      <div className="pro-gutter" ref={gutterRef} style={{ fontSize: `${fontSize}px`, paddingTop: '16px' }}>
        {lineNumbers.map(n => <div key={n} className="line-number">{n}</div>)}
      </div>
      <div className="pro-editor-wrapper">
        <pre className="pro-highlighter" ref={preRef} aria-hidden="true" style={{ fontSize: `${fontSize}px` }}>
          <code dangerouslySetInnerHTML={{ __html: highlightCode(value, type) + '\n' }} />
        </pre>
        <textarea
          className={`pro-textarea ${type}-caret`}
          ref={textareaRef}
          style={{ fontSize: `${fontSize}px` }}
          value={value}
          onChange={e => onChange(e.target.value)}
          onScroll={handleScroll}
          spellCheck="false"
          onCopy={e => {
            e.preventDefault();
            const s = value.substring(textareaRef.current.selectionStart, textareaRef.current.selectionEnd);
            if (s) e.clipboardData.setData('text/plain', s);
          }}
        />
      </div>
    </div>
  );
};

const CodeLab = () => {
  const [activeTab, setActiveTab] = useState('html');
  const [htmlCode, setHtmlCode] = useState(() => localStorage.getItem('dewe-codelab-html') || BOILERPLATE.html);
  const [jsCode, setJsCode]     = useState(() => localStorage.getItem('dewe-codelab-js')   || BOILERPLATE.js);
  const [cssFiles, setCssFiles] = useState(() => {
    const saved = localStorage.getItem('dewe-codelab-css');
    return saved ? JSON.parse(saved) : [{ id: 'm', name: 'main.css', content: BOILERPLATE.cssDefault }];
  });
  const [activeCssFileId, setActiveCssFileId] = useState('m');
  const [viewCode, setViewCode]   = useState('');
  const [fontSize, setFontSize]   = useState(15);
  const [toasts, setToasts]       = useState([]);
  const [confirm, setConfirm]     = useState({ active: false, message: '', onConfirm: null });
  const [autoRun, setAutoRun]           = useState(false);
  const [addingFile, setAddingFile]     = useState(false);
  const [newFileName, setNewFileName]   = useState('');
  const [previewCollapsed, setPreviewCollapsed] = useState(false);

  const autoRunTimer = useRef(null);

  useEffect(() => { localStorage.setItem('dewe-codelab-html', htmlCode); }, [htmlCode]);
  useEffect(() => { localStorage.setItem('dewe-codelab-js',   jsCode);   }, [jsCode]);
  useEffect(() => { localStorage.setItem('dewe-codelab-css',  JSON.stringify(cssFiles)); }, [cssFiles]);

  const addToast = (m, t = 'success') => {
    const id = Date.now();
    setToasts(p => [...p, { id, message: m, type: t }]);
    setTimeout(() => setToasts(p => p.filter(x => x.id !== id)), 4000);
  };

  const updateCss = c => setCssFiles(p => p.map(f => f.id === activeCssFileId ? { ...f, content: c } : f));

  const combine = useCallback(() =>
    `<!DOCTYPE html><html><head><style>${cssFiles.map(f => f.content).join('\n')}</style></head><body>${htmlCode}<script>try{${jsCode}}catch(e){console.error(e);}<\/script></body></html>`,
    [htmlCode, jsCode, cssFiles]
  );

  // Auto-run debounce
  useEffect(() => {
    if (!autoRun) return;
    clearTimeout(autoRunTimer.current);
    autoRunTimer.current = setTimeout(() => setViewCode(combine()), 800);
    return () => clearTimeout(autoRunTimer.current);
  }, [htmlCode, jsCode, cssFiles, autoRun, combine]);

  // Keyboard shortcut Cmd+Enter / Ctrl+Enter
  useEffect(() => {
    const handler = e => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        setViewCode(combine());
        addToast('¡Ejecutado!', 'success');
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [combine]);

  const handleRun = () => {
    setViewCode(combine());
    addToast('¡Vista previa actualizada!', 'info');
  };

  const handleDownload = () => {
    const blob = new Blob([combine()], { type: 'text/html' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href     = url;
    a.download = 'mi-proyecto.html';
    a.click();
    URL.revokeObjectURL(url);
    addToast('Archivo descargado', 'success');
  };

  const handleLoadTemplate = type => {
    if (type === 'resident') {
      setHtmlCode(RESIDENT_EVIL.html);
      setCssFiles([{ id: 'm', name: 'main.css', content: RESIDENT_EVIL.css }]);
      setJsCode(RESIDENT_EVIL.js);
      addToast('Plantilla Resident Evil cargada', 'info');
    } else {
      setHtmlCode(BOILERPLATE.html);
      setCssFiles([{ id: 'm', name: 'main.css', content: BOILERPLATE.cssDefault }]);
      setJsCode(BOILERPLATE.js);
      addToast('Plantilla básica cargada', 'info');
    }
  };

  const handleAddFile = () => {
    const name = newFileName.trim();
    if (!name) return;
    const finalName = name.endsWith('.css') ? name : `${name}.css`;
    const id = Date.now().toString();
    setCssFiles(p => [...p, { id, name: finalName, content: '' }]);
    setActiveCssFileId(id);
    setNewFileName('');
    setAddingFile(false);
  };

  const activeCode = activeTab === 'html' ? htmlCode
    : activeTab === 'css' ? (cssFiles.find(f => f.id === activeCssFileId)?.content || '')
    : jsCode;

  const lineCount = activeCode.split('\n').length;
  const activeCssName = cssFiles.find(f => f.id === activeCssFileId)?.name || 'main.css';
  const statusLabel = activeTab === 'css' ? activeCssName : activeTab.toUpperCase();

  return (
    <div className="codelab-container">

      {/* ── HEADER ── */}
      <header className="codelab-header">
        <div className="codelab-info">
          <span className="lab-badge">CodeLab</span>
          <h1 className="lab-title">Editor de Código</h1>
        </div>
        <div className="codelab-actions">
          <span className="actions-label">Plantilla:</span>
          <button className="lab-btn secondary" onClick={() => handleLoadTemplate('basic')}>Básica</button>
          <button className="lab-btn secondary" onClick={() => handleLoadTemplate('resident')}>Resident Evil</button>
          <div className="divider" />
          <div className="font-controls">
            <button className="font-btn" onClick={() => setFontSize(p => Math.max(10, p - 2))}>A−</button>
            <span className="font-val">{fontSize}</span>
            <button className="font-btn" onClick={() => setFontSize(p => Math.min(30, p + 2))}>A+</button>
          </div>
          <div className="divider" />
          <button
            className={`lab-btn autorun-btn ${autoRun ? 'autorun-on' : ''}`}
            onClick={() => setAutoRun(p => !p)}
            title="Ejecutar automáticamente mientras escribes"
          >
            ⚡ {autoRun ? 'Auto: ON' : 'Auto: OFF'}
          </button>
          <button className="lab-btn help" onClick={() => navigator.clipboard.writeText(combine()).then(() => addToast('¡Proyecto copiado!', 'success'))}>
            Copiar todo
          </button>
          <button className="lab-btn download-btn" onClick={handleDownload}>
            ↓ Descargar
          </button>
          <button className="lab-btn danger" onClick={() => setConfirm({ active: true, message: '¿Limpiar todo el código?', onConfirm: () => { setHtmlCode(''); setCssFiles([{id:'m',name:'main.css',content:''}]); setJsCode(''); setViewCode(''); addToast('Código limpiado', 'warning'); } })}>
            Limpiar
          </button>
          <button className="lab-btn primary" onClick={handleRun} title="También: Cmd+Enter / Ctrl+Enter">
            ▶ Ejecutar
          </button>
        </div>
      </header>

      {/* ── MAIN SPLIT ── */}
      <div className="codelab-main">

        {/* Editor */}
        <div className="editor-pane">
          <div className="tab-navigation">
            <button className={`tab-link html ${activeTab === 'html' ? 'active' : ''}`} onClick={() => setActiveTab('html')}>HTML</button>
            <button className={`tab-link css  ${activeTab === 'css'  ? 'active' : ''}`} onClick={() => setActiveTab('css')}>
              CSS {cssFiles.length > 1 && <span className="tab-count">{cssFiles.length}</span>}
            </button>
            <button className={`tab-link js   ${activeTab === 'js'   ? 'active' : ''}`} onClick={() => setActiveTab('js')}>JS</button>
            <div className="tab-spacer" />
            <span className="shortcut-hint">⌘ + Enter para ejecutar</span>
          </div>

          {activeTab === 'css' && (
            <div className="file-bar">
              {cssFiles.map(f => (
                <div key={f.id} className={`file-tab ${activeCssFileId === f.id ? 'active' : ''}`} onClick={() => setActiveCssFileId(f.id)}>
                  <span>{f.name}</span>
                  {cssFiles.length > 1 && (
                    <button className="file-icon-btn delete" onClick={e => { e.stopPropagation(); setConfirm({ active: true, message: `¿Borrar "${f.name}"?`, onConfirm: () => { setCssFiles(cssFiles.filter(cf => cf.id !== f.id)); setActiveCssFileId('m'); } }); }}>×</button>
                  )}
                </div>
              ))}
              {addingFile ? (
                <div className="add-file-inline">
                  <input
                    autoFocus
                    className="add-file-input"
                    value={newFileName}
                    onChange={e => setNewFileName(e.target.value)}
                    onKeyDown={e => { if (e.key === 'Enter') handleAddFile(); if (e.key === 'Escape') { setAddingFile(false); setNewFileName(''); } }}
                    placeholder="nombre.css"
                    maxLength={32}
                  />
                  <button className="add-file-confirm" onClick={handleAddFile}>✓</button>
                  <button className="add-file-cancel"  onClick={() => { setAddingFile(false); setNewFileName(''); }}>×</button>
                </div>
              ) : (
                <button className="add-file-btn" onClick={() => setAddingFile(true)} title="Nuevo archivo CSS">+</button>
              )}
            </div>
          )}

          <div className="editor-body">
            <ProEditor
              value={activeCode}
              onChange={activeTab === 'html' ? setHtmlCode : activeTab === 'css' ? updateCss : setJsCode}
              type={activeTab}
              fontSize={fontSize}
            />
          </div>

          <div className="editor-status">
            <span className={`status-lang lang-${activeTab}`}>{statusLabel}</span>
            <div className="status-right">
              <span>{lineCount} {lineCount === 1 ? 'línea' : 'líneas'}</span>
              <span className="status-sep">·</span>
              <span>Zoom {fontSize}px</span>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className={`preview-pane ${previewCollapsed ? 'collapsed' : ''}`}>
          <div className="pane-header preview-header">
            {!previewCollapsed && <span className={`preview-dot ${autoRun ? 'live' : ''}`} />}
            {!previewCollapsed && <span>Vista previa</span>}
            {!previewCollapsed && autoRun && <span className="live-badge">EN VIVO</span>}
            <button
              className="preview-toggle-btn"
              onClick={() => setPreviewCollapsed(p => !p)}
              title={previewCollapsed ? 'Expandir vista previa' : 'Colapsar vista previa'}
            >
              {previewCollapsed ? '◀' : '▶'}
            </button>
          </div>
          <iframe title="preview" className="preview-iframe" srcDoc={viewCode || combine()} />
        </div>
      </div>

      {/* Toasts */}
      <div className="toast-container">
        {toasts.map(t => (
          <div key={t.id} className={`toast-item ${t.type}`}>
            <span className="toast-icon">{TOAST_ICONS[t.type] || '✅'}</span>
            <span>{t.message}</span>
          </div>
        ))}
      </div>

      {/* Confirm dialog */}
      {confirm.active && (
        <div className="confirm-overlay">
          <div className="confirm-modal">
            <h3>Confirmar</h3>
            <p>{confirm.message}</p>
            <div className="confirm-actions">
              <button className="confirm-btn cancel" onClick={() => setConfirm({ active: false })}>Cancelar</button>
              <button className="confirm-btn danger" onClick={() => { confirm.onConfirm(); setConfirm({ active: false }); }}>Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeLab;
