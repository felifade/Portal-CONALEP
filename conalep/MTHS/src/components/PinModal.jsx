import React, { useState, useEffect, useRef } from 'react';

const PinModal = ({ onSuccess, onCancel }) => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  // Auto-focus the input on open
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin === '2024') {
      onSuccess();
    } else {
      setError(true);
      setPin('');
      // Shake effect or simple red border
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="pin-modal-overlay" onClick={onCancel}>
      <div className={`pin-modal-card ${error ? 'shake' : ''}`} onClick={(e) => e.stopPropagation()}>
        <div className="pin-modal-header">
          <h3>🔐 Acceso Docente</h3>
          <p>Ingrese el PIN de seguridad</p>
        </div>
        
        <form onSubmit={handleSubmit} className="pin-modal-form">
          <input
            ref={inputRef}
            type="password"
            maxLength="4"
            placeholder="****"
            value={pin}
            onChange={(e) => setPin(e.target.value.replace(/[^0-9]/g, ''))}
            className={error ? 'input-error' : ''}
          />
          
          <div className="pin-modal-actions">
            <button type="button" className="btn-secondary" onClick={onCancel}>
              Cancelar
            </button>
            <button type="submit" className="btn-primary">
              Verificar
            </button>
          </div>
        </form>
        
        {error && <p className="error-text">PIN Incorrecto. Intente de nuevo.</p>}
      </div>
    </div>
  );
};

export default PinModal;
