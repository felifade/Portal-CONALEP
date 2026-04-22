import React, { useState, useEffect, useRef } from 'react';
import { Lock } from 'lucide-react';

const CORRECT_PIN = import.meta.env.VITE_TEACHER_PIN || '2024';

const PinModal = ({ onSuccess, onCancel }) => {
  const [pin, setPin]     = useState('');
  const [error, setError] = useState(false);
  const inputRef          = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pin === CORRECT_PIN) {
      onSuccess();
    } else {
      setError(true);
      setPin('');
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="pin-modal-overlay" onClick={onCancel}>
      <div className={`pin-modal-card ${error ? 'shake' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="pin-modal-header">
          <h3><Lock size={20} /> Acceso Docente</h3>
          <p>Ingresa el PIN de seguridad</p>
        </div>

        <form onSubmit={handleSubmit} className="pin-modal-form">
          <input
            ref={inputRef}
            type="password"
            maxLength="4"
            placeholder="••••"
            value={pin}
            onChange={e => setPin(e.target.value.replace(/[^0-9]/g, ''))}
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

        {error && <p className="error-text">PIN incorrecto. Intenta de nuevo.</p>}
      </div>
    </div>
  );
};

export default PinModal;
