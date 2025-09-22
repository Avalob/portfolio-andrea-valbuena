/**
 * COMPONENTE SPLASH
 * Pantalla de carga inicial del portfolio con barra de progreso animada
 * Características: animación de carga, logo personal, botón de acceso
 * Se muestra antes de la aplicación principal para crear una experiencia de entrada suave
 */

import React, { useEffect, useState } from 'react';

/**
 * COMPONENTE PRINCIPAL: SPLASH
 * @param {Function} onContinue - Callback que se ejecuta cuando el usuario hace clic en "Ver Portfolio"
 */
export default function Splash({ onContinue }) {
  /**
   * ESTADOS DEL COMPONENTE
   * - progress: porcentaje de progreso de carga (0-100)
   * - status: mensaje de estado que se muestra al usuario
   */
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Cargando...');

  /**
   * EFECTO: SIMULACIÓN DE CARGA
   * Incrementa el progreso gradualmente hasta llegar al 100%
   * Cambia el estado del mensaje cuando la carga está completa
   */
  useEffect(() => {
    if (progress < 100) {
      // Incrementa el progreso cada 20ms para crear animación suave
      const timer = setTimeout(() => setProgress(progress + 1), 20);
      return () => clearTimeout(timer);
    } else {
      // Cambia el mensaje cuando la carga está completa
      setStatus('¡Listo! Conectado.');
    }
  }, [progress]);

  /**
   * RENDERIZADO DEL COMPONENTE
   * Estructura de la pantalla de splash con logo, progreso y botón de acceso
   */
  return (
    <div className="splash-screen">
      <div className="splash-content">
        
        {/* LOGO CORPORATIVO - Imagen de marca del portfolio */}
        <img 
          src={process.env.PUBLIC_URL + "/logo1.png"} 
          alt="Logo del Portfolio de Andrea Valbuena" 
          className="splash-logo" 
        />
        
        {/* MENSAJE DE ESTADO - Indica el progreso de carga al usuario */}
        <h1 className="splash-title">{status}</h1>
        
        {/* BARRA DE PROGRESO - Visualización del progreso de carga */}
        <div className="loading-bar">
          <div 
            className="loading-progress" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* BOTÓN DE ACCESO - Permite entrar al portfolio cuando la carga está completa */}
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
