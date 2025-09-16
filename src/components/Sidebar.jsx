// Importaciones necesarias
import React from 'react';
import { FaHome, FaMailBulk } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";

// Componente principal de la barra lateral
export default function Sidebar({ section, setSection, onToggleSidebar }) {
  // Función para manejar el cambio de sección
  const handleClick = (sectionName) => {
    setSection(sectionName);
    if (typeof onToggleSidebar === 'function' && window.innerWidth <= 768) {
      onToggleSidebar();
    }
  };

  return (
    <nav className="Sidebar">
      <ul className="Sidebar-list">
        {/* Elementos de navegación */}
        <li className={`Sidebar-item ${section === 'home' ? 'active' : ''}`}>
          <a
            href="#home"
            className={`Sidebar-link ${section === 'home' ? 'active' : ''}`}
            onClick={e => {
              e.preventDefault();
              handleClick('home');
            }}
          >
            <FaHome style={{ marginRight: 8 }} />
            Inicio
          </a>
        </li>
        <li className={`Sidebar-item ${section === 'projects' ? 'active' : ''}`}>
          <a
            href="#projects"
            className={`Sidebar-link ${section === 'projects' ? 'active' : ''}`}
            onClick={e => {
              e.preventDefault();
              handleClick('projects');
            }}
          >
            <GrProjects style={{ marginRight: 8 }} />
            Proyectos
          </a>
        </li>
        <li className={`Sidebar-item ${section === 'skills' ? 'active' : ''}`}>
          <a
            href="#skills"
            className={`Sidebar-link ${section === 'skills' ? 'active' : ''}`}
            onClick={e => {
              e.preventDefault();
              handleClick('skills');
            }}
          >
            <GiSkills style={{ marginRight: 8 }} />
            Habilidades
          </a>
        </li>
        <li className={`Sidebar-item ${section === 'contact' ? 'active' : ''}`}>
          <a
            href="#contact"
            className={`Sidebar-link ${section === 'contact' ? 'active' : ''}`}
            onClick={e => {
              e.preventDefault();
              handleClick('contact');
            }}
          >
            <FaMailBulk style={{ marginRight: 8 }} />
            Contacto
          </a>
        </li>
      </ul>
      {/* Botón para descargar el CV */}
      <div style={{ padding: '16px', textAlign: 'start', width: '100%' }}>
        <a href="/Curriculum-Andrea-Valbuena.pdf" download className="btn" >
          Descargar CV
        </a>
      </div>
    </nav>
  );
}


