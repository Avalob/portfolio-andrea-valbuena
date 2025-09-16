import React, { useEffect, useState } from 'react';

export default function Splash({ onContinue }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Cargando...');

  useEffect(() => {
    if (progress < 100) {
      const timer = setTimeout(() => setProgress(progress + 1), 20); // Ajusto el tiempo de carga
      return () => clearTimeout(timer);
    } else {
      setStatus('¡Listo! Conectado.');
    }
  }, [progress]);

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <img src="./logo1.png" alt="Logo" className="splash-logo" />
        <h1 className="splash-title">{status}</h1>
        <div className="loading-bar">
          <div className="loading-progress" style={{ width: `${progress}%` }}></div>
        </div>
        <button
          className={`btn btn-secondary splash-button ${progress < 100 ? 'btn-disabled' : ''}`}
          onClick={onContinue}
          disabled={progress < 100}
        >
          Ver Portfolio
        </button>
      </div>
    </div>
  );
}
