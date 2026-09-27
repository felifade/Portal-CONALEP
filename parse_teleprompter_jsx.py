import re

with open("conalep/EDOA_V2/src/components/TeachingPortal.jsx", "r", encoding="utf-8") as f:
    code = f.read()

# Función helper para parsear el texto del teleprompter en tarjetas JSX visuales y elegantes
teleprompter_renderer = """
function renderTeleprompterBlocks(text) {
  if (!text) return null;
  
  // Si no tiene el formato especial de teleprompter, renderizar normal con saltos
  if (!text.includes('TELEPROMPTER') && !text.includes('FRASE GANCHO') && !text.includes('HORA 1')) {
    return <p className="development-text" style={{marginTop: '20px', whiteSpace: 'pre-wrap', lineHeight: '1.6'}}>{text}</p>;
  }

  // Dividir por bloques de horas o separadores
  const lines = text.split('\\n');
  const elements = [];
  let currentCard = null;
  let currentCardType = '';
  let currentCardTitle = '';
  let currentCardContent = [];

  const flushCard = () => {
    if (currentCardType && currentCardContent.length) {
      const contentText = currentCardContent.join('\\n').trim();
      elements.push(
        <div key={elements.length} className={`teleprompter-card card-${currentCardType}`}>
          <div className="card-badge-header">
            {currentCardTitle}
          </div>
          <div className="card-body-text">
            {contentText}
          </div>
        </div>
      );
      currentCardType = '';
      currentCardTitle = '';
      currentCardContent = [];
    }
  };

  lines.forEach((line, idx) => {
    const trimmed = line.trim();

    // Título general del teleprompter
    if (trimmed.startsWith('🎙️ TELEPROMPTER') || trimmed.startsWith('Metodología:')) {
      flushCard();
      elements.push(
        <div key={idx} className="teleprompter-header-banner">
          {trimmed}
        </div>
      );
      return;
    }

    // Cabeceras de Hora
    if (trimmed.startsWith('⏱️ HORA') || (trimmed.startsWith('━━━━━━━━') && lines[idx+1]?.includes('HORA'))) {
      flushCard();
      if (trimmed.startsWith('⏱️ HORA')) {
        elements.push(
          <div key={idx} className="teleprompter-hour-divider">
            {trimmed}
          </div>
        );
      }
      return;
    }
    if (trimmed.startsWith('━━━━━━━━')) {
      flushCard();
      return;
    }

    // Frase Gancho
    if (trimmed.startsWith('🗣️ FRASE GANCHO') || trimmed.startsWith('🗣️')) {
      flushCard();
      currentCardType = 'quote';
      currentCardTitle = trimmed;
      return;
    }

    // Dato Curioso / Anécdota
    if (trimmed.startsWith('💡 DATO') || trimmed.startsWith('💡 ANÉCDOTA') || trimmed.startsWith('💡')) {
      flushCard();
      currentCardType = 'tip';
      currentCardTitle = trimmed;
      return;
    }

    // Demo en Cañón
    if (trimmed.startsWith('🖥️ DEMO') || trimmed.startsWith('🖥️')) {
      flushCard();
      currentCardType = 'demo';
      currentCardTitle = trimmed;
      return;
    }

    // Retos en Máquinas
    if (trimmed.startsWith('💻 RETO') || trimmed.startsWith('💻')) {
      flushCard();
      currentCardType = 'todo';
      currentCardTitle = trimmed;
      return;
    }

    // Cierre y Sello
    if (trimmed.startsWith('🏷️ EVIDENCIA') || trimmed.startsWith('🏷️')) {
      flushCard();
      currentCardType = 'check';
      currentCardTitle = trimmed;
      return;
    }

    // Contenido dentro de la tarjeta actual
    if (currentCardType) {
      currentCardContent.push(line);
    } else if (trimmed) {
      elements.push(<p key={idx} className="teleprompter-plain-line">{trimmed}</p>);
    }
  });

  flushCard();

  return <div className="teleprompter-executive-container">{elements}</div>;
}
"""

# Reemplazar <p className="development-text"...>{currentSessionData.development}</p>
old_render = '<p className="development-text" style={{marginTop: \'20px\', whiteSpace: \'pre-wrap\', lineHeight: \'1.6\'}}>{currentSessionData.development}</p>'
new_render = '{renderTeleprompterBlocks(currentSessionData.development)}'

if old_render in code:
    # Inyectar la función auxiliar antes de TeachingPortal = () => {
    code = code.replace("const TeachingPortal = () => {", teleprompter_renderer + "\nconst TeachingPortal = () => {")
    code = code.replace(old_render, new_render)
    with open("conalep/EDOA_V2/src/components/TeachingPortal.jsx", "w", encoding="utf-8") as f:
        f.write(code)
    print("TeachingPortal.jsx modificado con renderizador nativo de tarjetas!")
else:
    print("No se encontró old_render exacto")
