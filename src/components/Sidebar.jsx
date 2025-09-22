/**
 * COMPONENTE SIDEBAR
 * Barra lateral de navegación principal del portfolio
 * Características: navegación entre secciones, estados activos, responsive design
 * Incluye: enlaces de navegación, iconos temáticos y descarga de CV
 */

// Importaciones de React y librerías de iconos
import React from 'react';
import { FaHome, FaMailBulk } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";

/**
 * COMPONENTE PRINCIPAL: SIDEBAR
 * @param {string} section - Sección actualmente seleccionada
 * @param {Function} setSection - Función para cambiar la sección activa
 * @param {Function} onToggleSidebar - Función para cerrar/abrir sidebar en móvil
 */
export default function Sidebar({ section, setSection, onToggleSidebar }) {
  /**
   * FUNCIÓN: MANEJO DE NAVEGACIÓN
   * Cambia la sección activa y cierra la sidebar en dispositivos móviles
   * @param {string} sectionName - Nombre de la sección a activar
   */
  const handleClick = (sectionName) => {
    // Cambia la sección activa
    setSection(sectionName);
    
    // En móviles (≤768px), cierra automáticamente la sidebar tras seleccionar
    if (typeof onToggleSidebar === 'function' && window.innerWidth <= 768) {
      onToggleSidebar();
    }
  };

  /**
   * RENDERIZADO DEL COMPONENTE
   * Estructura de navegación lateral con enlaces y botón de descarga
   */
  return (
    <nav className="Sidebar">
      {/* LISTA DE NAVEGACIÓN - Enlaces principales del portfolio */}
      <ul className="Sidebar-list">
        
        {/* ENLACE: INICIO - Página principal con perfil y feed social */}
        <li className={`Sidebar-item ${section === 'home' ? 'active' : ''}`}>
          <a
            href="#home"
            className={`Sidebar-link ${section === 'home' ? 'active' : ''}`}
            onClick={e => {
              e.preventDefault(); // Evita navegación por URL
              handleClick('home');
            }}
          >
            <FaHome style={{ marginRight: 8 }} />
            Inicio
          </a>
        </li>
        
        {/* ENLACE: PROYECTOS - Galería de trabajos realizados */}
        <li className={`Sidebar-item ${section === 'projects' ? 'active' : ''}`}>
          <a
            href="#projects"
            className={`Sidebar-link ${section === 'projects' ? 'active' : ''}`}
            onClick={e => {
              e.preventDefault(); // Evita navegación por URL
              handleClick('projects');
            }}
          >
            <GrProjects style={{ marginRight: 8 }} />
            Proyectos
          </a>
        </li>
        
        {/* ENLACE: HABILIDADES - Competencias técnicas y herramientas */}
        <li className={`Sidebar-item ${section === 'skills' ? 'active' : ''}`}>
          <a
            href="#skills"
            className={`Sidebar-link ${section === 'skills' ? 'active' : ''}`}
            onClick={e => {
              e.preventDefault(); // Evita navegación por URL
              handleClick('skills');
            }}
          >
            <GiSkills style={{ marginRight: 8 }} />
            Habilidades
          </a>
        </li>
        
        {/* ENLACE: CONTACTO - Formulario de contacto tipo chat */}
        <li className={`Sidebar-item ${section === 'contact' ? 'active' : ''}`}>
          <a
            href="#contact"
            className={`Sidebar-link ${section === 'contact' ? 'active' : ''}`}
            onClick={e => {
              e.preventDefault(); // Evita navegación por URL
              handleClick('contact');
            }}
          >
            <FaMailBulk style={{ marginRight: 8 }} />
            Contacto
          </a>
        </li>
      </ul>
      
      {/* ACCIÓN SECUNDARIA - Descarga directa del curriculum vitae */}
      <div style={{ padding: '16px', textAlign: 'start', width: '100%' }}>
        <a 
          href="./Curriculum-Andrea-Valbuena.pdf" 
          download 
          className="btn"
        >
          Descargar CV
        </a>
      </div>
    </nav>
  );
}


