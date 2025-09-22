/**
 * COMPONENTE SKILLS
 * Muestra las habilidades técnicas organizadas por categorías con sistema de filtrado
 * Características: grid responsivo, iconos temáticos, filtros por categoría
 * Categorías: Frontend/Backend, Bases de datos, Herramientas, Diseño, Markup
 */

// Importaciones de React y librerías de iconos
import React, { useState } from 'react';
import { FaWordpress, FaCubes, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaGitAlt, FaGithub, FaAndroid, FaCloud } from 'react-icons/fa';
import { SiSketchup, SiAdobepremierepro, SiCanva, SiCoreldraw, SiAdobeindesign, SiGnubash, SiSqlite, SiMongodb, SiSpringboot, SiEclipseide, SiFigma, SiAdobephotoshop, SiTailwindcss, SiJson, SiMarkdown, SiAdobeillustrator } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";

/**
 * CONFIGURACIÓN DE HABILIDADES
 * Array que contiene todas las habilidades técnicas con metadatos
 * Estructura: id, nombre, categoría, tipo, icono con colores temáticos
 * Colores por tipo: Frontend(#4079FF), Backend(#FF007F), DevOps(#40FFAA), Design(#F7DF1E)
 */
const SKILLS = [
  /* 
   * LENGUAJES & FRAMEWORKS
   * Tecnologías de desarrollo frontend y backend
   */
  { id: 1, name: 'JavaScript', category: 'Lenguajes & Frameworks', type: 'Frontend', icon: <IoLogoJavascript style={{ color: '#4079FF' }} /> },
  { id: 3, name: 'Java', category: 'Lenguajes & Frameworks', type: 'Backend', icon: <FaJava style={{ color: '#FF007F' }} /> },
  { id: 18, name: 'HTML5', category: 'Lenguajes & Frameworks', type: 'Frontend', icon: <FaHtml5 style={{ color: '#4079FF' }} /> },
  { id: 19, name: 'CSS3', category: 'Lenguajes & Frameworks', type: 'Frontend', icon: <FaCss3Alt style={{ color: '#4079FF' }} /> },
  { id: 22, name: 'React', category: 'Lenguajes & Frameworks', type: 'Frontend', icon: <FaReact style={{ color: '#4079FF' }} /> },
  { id: 29, name: 'Node.js', category: 'Lenguajes & Frameworks', type: 'Backend', icon: <FaNodeJs style={{ color: '#FF007F' }} /> },
  { id: 32, name: 'Spring Boot', category: 'Lenguajes & Frameworks', type: 'Backend', icon: <SiSpringboot style={{ color: '#FF007F' }} /> },

  /* 
   * BASES DE DATOS
   * Sistemas de gestión de bases de datos relacionales y NoSQL
   */
  { id: 39, name: 'MySQL', category: 'Bases de datos', type: 'Backend', icon: <GrMysql style={{ color: '#FF007F' }} /> },
  { id: 46, name: 'MongoDB', category: 'Bases de datos', type: 'Backend', icon: <SiMongodb style={{ color: '#FF007F' }} /> },
  { id: 47, name: 'SQLite', category: 'Bases de datos', type: 'Backend', icon: <SiSqlite style={{ color: '#FF007F' }} /> },

  /* 
   * HERRAMIENTAS DE DESARROLLO
   * IDEs, control de versiones, plataformas de desarrollo y CMS
   */
  { id: 54, name: 'Git', category: 'Herramientas', type: 'DevOps', icon: <FaGitAlt style={{ color: '#40FFAA' }} /> },
  { id: 55, name: 'GitHub', category: 'Herramientas', type: 'DevOps', icon: <FaGithub style={{ color: '#40FFAA' }} /> },
  { id: 56, name: 'Bash', category: 'Herramientas', type: 'DevOps', icon: <SiGnubash style={{ color: '#40FFAA' }} /> },
  { id: 57, name: 'VS Code', category: 'Herramientas', type: 'DevOps', icon: <VscVscode style={{ color: '#40FFAA' }} /> },
  { id: 58, name: 'Android Studio', category: 'Herramientas', type: 'DevOps', icon: <FaAndroid style={{ color: '#40FFAA' }} /> },
  { id: 59, name: 'Eclipse', category: 'Herramientas', type: 'DevOps', icon: <SiEclipseide style={{ color: '#40FFAA' }} /> },
  { id: 60, name: 'Google Cloud', category: 'Herramientas', type: 'DevOps', icon: <FaCloud style={{ color: '#40FFAA' }} /> },
  { id: 112, name: 'WordPress', category: 'Herramientas', type: 'DevOps', icon: <FaWordpress style={{ color: '#40FFAA' }} /> },

  /* 
   * DISEÑO Y CREATIVIDAD
   * Software de diseño gráfico, UI/UX, edición multimedia y prototipado
   */
  { id: 100, name: 'Figma', category: 'Diseño', type: 'Design', icon: <SiFigma style={{ color: '#F7DF1E' }} /> },
  { id: 101, name: 'Adobe Photoshop', category: 'Diseño', type: 'Design', icon: <SiAdobephotoshop style={{ color: '#F7DF1E' }} /> },
  { id: 102, name: 'Illustrator', category: 'Diseño', type: 'Design', icon: <SiAdobeillustrator style={{ color: '#F7DF1E' }} /> },
  { id: 103, name: 'InDesign', category: 'Diseño', type: 'Design', icon: <SiAdobeindesign style={{ color: '#F7DF1E' }} /> },
  { id: 104, name: 'CorelDRAW', category: 'Diseño', type: 'Design', icon: <SiCoreldraw style={{ color: '#F7DF1E' }} /> },
  { id: 105, name: 'Canva', category: 'Diseño', type: 'Design', icon: <SiCanva style={{ color: '#F7DF1E' }} /> },
  { id: 106, name: 'Tailwind', category: 'Diseño', type: 'Design', icon: <SiTailwindcss style={{ color: '#F7DF1E' }} /> },
  { id: 107, name: 'Adobe Premiere Pro', category: 'Diseño', type: 'Design', icon: <SiAdobepremierepro style={{ color: '#F7DF1E' }} /> },
  { id: 108, name: 'SketchUp', category: 'Diseño', type: 'Design', icon: <SiSketchup style={{ color: '#F7DF1E' }} /> },
  { id: 109, name: 'Clo3D', category: 'Diseño', type: 'Design', icon: <FaCubes style={{ color: '#F7DF1E' }} /> },

  /* 
   * LENGUAJES DE MARCADO Y DATOS
   * Formatos de intercambio de datos y documentación
   */
  { id: 110, name: 'Markdown', category: 'Lenguajes de Marcado', type: 'Markup', icon: <SiMarkdown style={{ color: '#4079FF' }} /> },
  { id: 111, name: 'JSON', category: 'Lenguajes de Marcado', type: 'Markup', icon: <SiJson style={{ color: '#4079FF' }} /> },
];

/**
 * FILTROS DE CATEGORÍAS
 * Define las categorías disponibles para filtrar habilidades
 * "Todos" muestra todas las habilidades sin filtro
 */
const FILTERS = ['Todos', 'Lenguajes & Frameworks', 'Bases de datos', 'Herramientas', 'Diseño', 'Lenguajes de Marcado'];

/**
 * COMPONENTE PRINCIPAL: SKILLS
 * Renderiza la sección de habilidades con sistema de filtrado y grid responsivo
 */
export default function Skills() {
  /**
   * ESTADO DEL COMPONENTE
   * - filter: categoría actualmente seleccionada para filtrar habilidades
   */
  const [filter, setFilter] = useState('Todos');
  
  /**
   * LÓGICA DE FILTRADO
   * Filtra las habilidades según la categoría seleccionada
   * Si "Todos" está seleccionado, muestra todas las habilidades
   */
  const filteredSkills = filter === 'Todos' ? SKILLS : SKILLS.filter(skill => skill.category === filter);

  /**
   * RENDERIZADO DEL COMPONENTE
   * Estructura principal de la sección de habilidades
   */
  return (
    <section className="box">
      <h2 className="section-title">Habilidades</h2>
      
      {/* FILTROS DE CATEGORÍAS - Botones para filtrar habilidades por categoría */}
      <div className="filters" style={{
        display: 'flex',
        flexWrap: 'wrap', 
        gap: '8px', 
        justifyContent: 'center', 
        marginBottom: '16px', 
      }}>
        {FILTERS.map(f => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      
      {/* GRID DE HABILIDADES - Grid responsivo con tarjetas de habilidades */}
      <ul className="skills-list" style={{
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', 
        gap: '16px',
        padding: 0,
        margin: 0,
        listStyle: 'none',
      }}>
        {filteredSkills.map(skill => (
          <li key={skill.id} className="skill-item" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            background: '#181c22', 
            borderRadius: '8px',
            padding: '16px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)', 
          }}>
            {/* Icono de la habilidad con tamaño grande */}
            <div className="skill-icon" style={{ fontSize: '32px', marginBottom: '8px' }}>
              {skill.icon}
            </div>
            
            {/* Nombre de la habilidad */}
            <div className="skill-name" style={{ fontSize: '14px', fontWeight: 'bold', color: '#fff' }}>
              {skill.name}
            </div>
            
            {/* Etiqueta del tipo de habilidad */}
            <div className={`skill-label ${skill.labelStyle}`} style={{ fontSize: '12px', color: '#b0b8c1' }}>
              {skill.type}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}