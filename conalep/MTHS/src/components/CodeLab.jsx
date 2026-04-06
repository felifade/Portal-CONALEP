import React, { useState, useRef, useEffect } from 'react';

const BOILERPLATE = {
  html: `<h1>¡Hola Grupo 601!</h1>
<p>Los admiro y los quiero mucho. ¡A darle con todo al código!</p>`,
  cssDefault: ``,
  js: ``
};

const RESIDENT_EVIL = {
  html: `<h1>🧟 Resident Evil Labs</h1>
<div class="mansion">
  <p>Status: <span id="status">Normal</span></p>
  <button id="alertBtn">Activar Alerta</button>
</div>`,
  css: `.mansion { background: #050505; color: #ff0000; padding: 40px; border: 5px solid #333; }\n#alertBtn { background: #800; color: white; border: none; padding: 10px 20px; cursor: pointer; }`,
  js: `const btn = document.getElementById('alertBtn');\nbtn.addEventListener('click', () => {\n  document.getElementById('status').innerText = '¡PELIGRO: Virus Detectado!';\n  document.body.style.background = '#300';\n});`
};

const highlightCode = (code, type) => {
  if (!code) return '';
  const escaped = code.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  if (type === 'html') {
    const htmlRegex = /(&lt;!--[\s\S]*?--&gt;)|(&lt;\/?[a-zA-Z0-9]+)|(\s[a-zA-Z-]+(?==))|("[^"]*"|'[^']*')/g;
    return escaped.replace(htmlRegex, (match, m1, m2, m3, m4) => {
      if (m1) return `<span class="token comment">${m1}</span>`;
      if (m2) return `<span class="token tag">${m2}</span>`;
      if (m3) return ` <span class="token attr-name">${m3.trim()}</span>`;
      if (m4) return `<span class="token string">${m4}</span>`;
      return match;
    });
  }
  if (type === 'css') {
    const cssRegex = /(\/\*[\s\S]*?\*\/)|([^{}\s][^{}]+(?=\{))|([a-zA-Z-]+(?=\s*:))|(:[^;]+;)/g;
    return escaped.replace(cssRegex, (match, m1, m2, m3, m4) => {
      if (m1) return `<span class="token comment">${m1}</span>`;
      if (m2) return `<span class="token selector">${m2}</span>`;
      if (m3) return `<span class="token property">${m3}</span>`;
      if (m4) return `:<span class="token value">${m4.substring(1)}</span>`;
      return match;
    });
  }
  if (type === 'js') {
    const jsRegex = /(\/\/.*|\/\*[\s\S]*?\*\/)|\b(const|let|var|function|return|if|else|for|while|try|catch|new|async|await)\b|("[^"]*"|'[^']*'|`[^`]*`)|([0-9.]+)|([a-zA-Z0-9_]+)(?=\()/g;
    return escaped.replace(jsRegex, (match, m1, m2, m3, m4, m5) => {
      if (m1) return `<span class="token comment">${m1}</span>`;
      if (m2) return `<span class="token keyword">${m2}</span>`;
      if (m3) return `<span class="token string">${m3}</span>`;
      if (m4) return `<span class="token number">${m4}</span>`;
      if (m5) return `<span class="token function">${m5}</span>`;
      return match;
    });
  }
  return escaped;
};

const ProEditor = ({ value, onChange, type, fontSize }) => {
  const preRef = useRef(null);
  const textareaRef = useRef(null);
  const gutterRef = useRef(null);
  const handleScroll = () => { if (preRef.current && textareaRef.current && gutterRef.current) { const t = textareaRef.current.scrollTop; preRef.current.scrollTop = t; gutterRef.current.scrollTop = t; preRef.current.scrollLeft = textareaRef.current.scrollLeft; } };
  const lineNumbers = Array.from({ length: value.split('\n').length }, (_, i) => i + 1);
  return (
    <div className="pro-editor-container">
      <div className="pro-gutter" ref={gutterRef} style={{ fontSize: `${fontSize}px` }}>{lineNumbers.map(n => <div key={n} className="line-number">{n}</div>)}</div>
      <div className="pro-editor-wrapper">
        <pre className="pro-highlighter" ref={preRef} aria-hidden="true" style={{ fontSize: `${fontSize}px` }}><code dangerouslySetInnerHTML={{ __html: highlightCode(value, type) + '\n' }} /></pre>
        <textarea className={`pro-textarea ${type}-caret`} ref={textareaRef} style={{ fontSize: `${fontSize}px` }} value={value} onChange={(e) => onChange(e.target.value)} onScroll={handleScroll} spellCheck="false" onCopy={(e) => { e.preventDefault(); const s = value.substring(textareaRef.current.selectionStart, textareaRef.current.selectionEnd); if (s) e.clipboardData.setData('text/plain', s); }} />
      </div>
    </div>
  );
};

const CodeLab = () => {
  const [activeTab, setActiveTab] = useState('html');
  const [htmlCode, setHtmlCode] = useState(BOILERPLATE.html);
  const [jsCode, setJsCode] = useState(BOILERPLATE.js);
  const [cssFiles, setCssFiles] = useState([{ id: 'm', name: 'main.css', content: BOILERPLATE.cssDefault }]);
  const [activeCssFileId, setActiveCssFileId] = useState('m');
  const [viewCode, setViewCode] = useState('');
  const [fontSize, setFontSize] = useState(15);
  const [toasts, setToasts] = useState([]);
  const [confirm, setConfirm] = useState({ active: false, message: '', onConfirm: null });

  const addToast = (m, t = 'success') => { const id = Date.now(); setToasts(p => [...p, { id, message: m, type: t }]); setTimeout(() => setToasts(p => p.filter(x => x.id !== id)), 4000); };
  const updateCss = (c) => setCssFiles(p => p.map(f => f.id === activeCssFileId ? { ...f, content: c } : f));
  const combine = () => `<!DOCTYPE html><html><head><style>${cssFiles.map(f => f.content).join('\n')}</style></head><body>${htmlCode}<script>try { ${jsCode} } catch(e){console.error(e);}</script></body></html>`;
  
  const handleLoadTemplate = (type) => {
    if (type === 'resident') {
      setHtmlCode(RESIDENT_EVIL.html);
      setCssFiles([{ id: 'm', name: 'main.css', content: RESIDENT_EVIL.css }]);
      setJsCode(RESIDENT_EVIL.js);
      addToast('Plantilla: Resident Evil Cargada', 'info');
    } else {
      setHtmlCode(BOILERPLATE.html);
      setCssFiles([{ id: 'm', name: 'main.css', content: BOILERPLATE.cssDefault }]);
      setJsCode(BOILERPLATE.js);
      addToast('Plantilla Básica Cargada');
    }
    setViewCode(combine());
  };

  return (
    <div className="codelab-container">
      <header className="codelab-header">
        <div className="codelab-info">
          <span className="lab-badge">🧪 LABORATORIO V2</span>
          <h1 className="lab-title">Editor Pro de Felipe López</h1>
        </div>
        <div className="codelab-actions">
          <button className="lab-btn secondary" onClick={() => handleLoadTemplate('basic')}>📄 Básica</button>
          <button className="lab-btn secondary" onClick={() => handleLoadTemplate('resident')}>🧟 Resident Evil</button>
          <div className="divider"></div>
          <div className="font-controls">
            <button className="font-btn" onClick={() => setFontSize(p => Math.max(10, p - 2))}>A-</button>
            <span className="font-val">{fontSize}</span>
            <button className="font-btn" onClick={() => setFontSize(p => Math.min(30, p + 2))}>A+</button>
          </div>
          <div className="divider"></div>
          <button className="lab-btn help" onClick={() => { navigator.clipboard.writeText(combine()).then(() => addToast('¡Proyecto Copiado!', 'success')); }}>📋 Copiar</button>
          <button className="lab-btn danger" onClick={() => setConfirm({ active: true, message: '¿Limpiar todo?', onConfirm: () => { setHtmlCode(''); setCssFiles([{id:'m',name:'main.css',content:''}]); setJsCode(''); setViewCode(''); addToast('Limpio', 'warning'); } })}>🗑️</button>
          <button className="lab-btn primary" onClick={() => { setViewCode(combine()); addToast('¡Vista previa actualizada!', 'info'); }}>▶ EJECUTAR</button>
        </div>
      </header>

      <div className="codelab-main">
        <div className="editor-pane">
          <div className="tab-navigation">
            <button className={`tab-link html ${activeTab === 'html' ? 'active' : ''}`} onClick={() => setActiveTab('html')}>HTML</button>
            <button className={`tab-link css ${activeTab === 'css' ? 'active' : ''}`} onClick={() => setActiveTab('css')}>CSS ({cssFiles.length})</button>
            <button className={`tab-link js ${activeTab === 'js' ? 'active' : ''}`} onClick={() => setActiveTab('js')}>JS</button>
          </div>
          {activeTab === 'css' && (
            <div className="file-bar">
              {cssFiles.map(f => (
                <div key={f.id} className={`file-tab ${activeCssFileId === f.id ? 'active' : ''}`} onClick={() => setActiveCssFileId(f.id)}>
                  <span>📄 {f.name}</span>
                  <button className="file-icon-btn delete" onClick={(e) => { e.stopPropagation(); setConfirm({ active: true, message: `¿Borrar "${f.name}"?`, onConfirm: () => setCssFiles(cssFiles.filter(cf=>cf.id!==f.id)) }); }}>×</button>
                </div>
              ))}
              <button className="add-file-btn" onClick={() => { const n = window.prompt('Nombre:'); if (n) setCssFiles([...cssFiles, {id: Date.now().toString(), name:n, content:''}]); }}>+</button>
            </div>
          )}
          <div className="editor-body">
            <ProEditor value={activeTab === 'html' ? htmlCode : activeTab === 'css' ? (cssFiles.find(f => f.id === activeCssFileId)?.content || '') : jsCode} 
                       onChange={activeTab === 'html' ? setHtmlCode : activeTab === 'css' ? updateCss : setJsCode}
                       type={activeTab} fontSize={fontSize} />
          </div>
          <div className="editor-status">
            <span>{activeTab === 'css' ? cssFiles.find(f => f.id === activeCssFileId)?.name : `${activeTab.toUpperCase()} File`}</span>
            <span>Zoom: {fontSize}px</span>
          </div>
        </div>

        <div className="preview-pane">
          <div className="pane-header"><span>🌐 Vista Previa Modular</span></div>
          <iframe title="preview" className="preview-iframe" srcDoc={viewCode || combine()} />
        </div>
      </div>

      <div className="toast-container">{toasts.map(t => (<div key={t.id} className={`toast-item ${t.type}`}><span className="toast-icon">{t.type === 'success' ? '✅' : 'ℹ️'}</span><span>{t.message}</span></div>))}</div>

      {confirm.active && (
        <div className="confirm-overlay">
          <div className="confirm-modal">
            <h3>Confirmar</h3><p>{confirm.message}</p>
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
