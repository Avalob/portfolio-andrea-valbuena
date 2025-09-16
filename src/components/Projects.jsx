// Importaciones necesarias
import React, { useState } from 'react';

// Lista de proyectos con sus datos principales
const PROJECTS = [
  {
    id: 1,
    title: 'Tresele',
    desc: 'Página web para una escuela de corte y confección y atelier de moda. Estilo elegante y amigable, con diseño responsivo y optimizado, transmitiendo cercanía y profesionalidad en el mundo de la moda.',
    tech: ['WordPress', 'Elementor'],
    type: 'WordPress',
    style: 'label-design',
    className: 'type-wordpress',
    vimeo: 'https://vimeo.com/1119062509?share=copy#t=0',
    thumbnail: './Tresele-home.jpg',
    web: 'https://www.tresele.com'
  },
  {
    id: 9,
    title: 'React Calculadora Meta',
    desc: 'Primer proyecto desarrollado durante el curso Meta Front-End Developer, una calculadora funcional que aplica los conceptos fundamentales de React.',
    tech: ['React'],
    type: 'React',
    style: 'label-frontend',
    className: 'type-react',
    vimeo: 'https://vimeo.com/1119046183?share=copy#t=0',
    thumbnail: './calculadora.png',
    demo: 'https://avalob.github.io/react-calculadora-meta/', // Enlace al botón "Demo"
    code: 'https://github.com/Avalob/react-calculadora-meta' // Enlace al botón "Code"
  },
  // { id: 2, title: 'Santissimo', desc: 'Página web para un restaurante de lujo en el centro histórico de Alcalá de Henares. Estilo sofisticado y elegante, con un diseño visual que resalta la exclusividad del lugar. Incluye menús, reservas online y optimización para dispositivos móviles.', tech: ['WordPress', 'Divi'], type: 'WordPress', style: 'label-design', className: 'type-wordpress', video: './videos/tresele-video.mp4', thumbnail: './Tresele-home.jpg' },
  {
    id: 3,
    title: 'Prevan',
    desc: 'Página web para una empresa de equipamientos para vehículos. Estilo moderno y actual, con una identidad visual de inspiración racing. Además del desarrollo web, realicé el diseño del logotipo, reforzando la marca y su imagen dinámica.',
    tech: ['WordPress', 'Elementor'],
    type: 'WordPress',
    style: 'label-design',
    className: 'type-wordpress',
    vimeo: 'https://vimeo.com/1119053327?share=copy#t=0',
    thumbnail: './Prevan-home.png',
    web: 'https://prevanequipamientos.es/'
  },
  {
    id: 4,
    title: 'Demovi',
    desc: 'Página web para una empresa de campamentos juveniles. Estilo infantil y divertido, con un diseño colorido y accesible. Incluye sistema de inscripción online a los campamentos, facilitando el registro de participantes y mejorando la comunicación con las familias.',
    tech: ['WordPress', 'Divi'],
    type: 'WordPress',
    style: 'label-design',
    className: 'type-wordpress',
    vimeo: 'https://vimeo.com/1119057808?share=copy#t=0', // Actualiza si tienes el link correcto para Demovi
    thumbnail: process.env.PUBLIC_URL + '/Demovi-home.jpg',
    web: 'https://demovi.es/'
  },
  // { id: 5, title: 'Grupo ITM', desc: 'Página web para una empresa de electricistas que ofrece servicios tanto comerciales como residenciales. Diseño minimalista y equilibrado, utilizando los colores corporativos de la empresa para reforzar su identidad visual. La web es responsiva, clara y funcional, destacando los servicios, contacto y referencias de proyectos realizados.', tech: ['WordPress', 'Divi'], type: 'WordPress', style: 'label-design', className: 'type-wordpress', video: './videos/tresele-video.mp4', thumbnail: './Tresele-home.jpg' },
  {
    id: 6,
    title: 'Planetario Móvil',
    desc: 'Página web para una empresa que vende y alquila planetarios móviles, con un estilo inspirado en el espacio y la astronomía. Diseño visual y responsivo, que transmite emoción y profesionalidad. Incluye secciones de catálogo de planetarios, reservas y contacto, destacando la experiencia inmersiva que ofrecen sus servicios.',
    tech: ['WordPress', 'Divi'],
    type: 'WordPress',
    style: 'label-design',
    className: 'type-wordpress',
    vimeo: 'https://vimeo.com/1119053800?share=copy#t=0', // Actualiza si tienes el link correcto para Planetario
    thumbnail: process.env.PUBLIC_URL + '/Planetario-home.png',
    web:'https://planetariomovil.es/'
  },
  {
    id: 7,
    title: 'Portfolio',
    desc: 'Portfolio personal creado con React',
    tech: ['React'],
    type: 'React',
    style: 'label-frontend',
    className: 'type-react',
    vimeo: 'https://vimeo.com/1119059685?share=copy#t=20',
    noDemo: true,
    thumbnail: './Portfolio.png',
    code: 'https://github.com/Avalob/portfolio-andrea-valbuena',
  },
  {
    id: 8,
    title: 'React Mouse Tracker',
    desc: 'Proyecto desarrollado durante el curso avanzado de React ofrecido por Meta, una aplicación interactiva que rastrea la posición del mouse y la muestra en tiempo real en diferentes formatos. El diseño es visual y dinámico, pensado para mostrar de manera clara la interacción del usuario con la interfaz.',
    tech: ['React'],
    type: 'React',
    style: 'label-frontend',
    className: 'type-react',
    vimeo: 'https://vimeo.com/1119060764?share=copy#t=0', // Añade el link de Vimeo si lo tienes
    thumbnail: './mouse.png',
    demo:'https://avalob.github.io/react-mouse-tracker/',
    code:'https://github.com/Avalob/react-mouse-tracker'
  },
  {
    id: 10,
    title: 'Treseleapp',
    desc: 'Tresele App es un ERP web en uso real que centraliza la gestión de clientes, alumnos, matrículas, citas, prendas y pagos, digitalizando los procesos del atelier y la escuela de patronaje para una gestión eficiente y segura.',
    tech: ['HTML', 'PHP', 'MYSQL'],
    type: 'HTML',
    style: 'label-markup',
    className: 'type-html',
    vimeo: 'https://vimeo.com/1119061339?share=copy#t=0', // Añade el link de Vimeo si lo tienes
    thumbnail: process.env.PUBLIC_URL + '/Tresele-app-home.png', 
    web: 'https://treseleapp.es/',
    code: 'https://github.com/Avalob/Tresele-app',
  },
  {
    id: 11,
    title: 'Lucky Shrub Website',
    desc: 'Proyecto final del curso "HTML and CSS in depth" de Meta/Coursera, desarrollado para una empresa ficticia de jardinería y paisajismo. La web es completamente responsive y moderna, con un diseño profesional, visual y accesible, centrado en una experiencia de usuario clara y atractiva.',
    tech: ['HTML', 'CSS'],
    type: 'HTML',
    style: 'label-markup',
    className: 'type-html',
    vimeo: 'https://vimeo.com/1119059151?share=copy#t=0', // Añade el link de Vimeo si lo tienes
    thumbnail: './Lucky-Shrub.png',
    demo: 'https://avalob.github.io/lucky-shrub-website/',
    code:'https://github.com/Avalob/lucky-shrub-website'
  },
  {
    id: 12,
    title: 'Telecom-ERP',
    desc: 'Aplicación web ERP para la gestión integral de Telecom, centralizando clientes, pedidos, incidencias, facturación y procesos internos en un entorno seguro y eficiente.',
    tech: ['HTML', 'CSS', 'PHP'],
    type: 'HTML',
    style: 'label-markup',
    className: 'type-html',
    vimeo: 'https://vimeo.com/1119058567?share=copy#t=0', // Añade el link de Vimeo si lo tienes
    thumbnail: process.env.PUBLIC_URL + '/telecom.png',
    code: 'https://github.com/Avalob/Telecom-ERP'
  },
];

// Filtros disponibles para los proyectos
const FILTERS = ['Todos', 'React', 'WordPress', 'HTML'];

const TECH_CLASSES = {
  React: 'label-frontend',
  Tailwind: 'label-design',
};

// Componente principal de Projects
export default function Projects() {
  // Estados para manejar el filtro, hover y lightbox
  const [filter, setFilter] = useState('Todos');
  const [playing, setPlaying] = useState({});

  // Filtrado de proyectos según el filtro seleccionado
  const filtered = filter === 'Todos'
    ? PROJECTS
    : PROJECTS.filter(p => p.type === filter);

  // Solo reproducir/cambiar a vídeo al hacer click (siempre, tanto móvil como escritorio)
  const handleMediaClick = (id) => {
    setPlaying(p => ({ ...p, [id]: true }));
  };

  // Renderizado del componente
  return (
    <section className="box">
      <h2 className="section-title">Proyectos</h2>
      {/* Filtros de categorías de proyectos */}
      <div className="filters" style={{
        display: 'flex',
        flexWrap: 'wrap', // Permitir que los botones se ajusten a múltiples líneas
        gap: '8px', // Espaciado entre botones
        justifyContent: 'center', // Centrar los botones horizontalmente
        marginBottom: '16px', // Espaciado inferior
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
      {/* Lista de proyectos filtrados */}
      <ul className="project-list" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '32px',
        padding: 0,
        margin: 0,
        listStyle: 'none',
        alignItems: 'stretch',
        width: '100%',
        boxSizing: 'border-box',
      }}>
        {filtered.map((p) => (
          <li key={p.id} className="project-item" style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#181c22', borderRadius: '12px', boxShadow: '0 2px 8px #0002', padding: '16px', boxSizing: 'border-box' }}>
            <div className="project-info" style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
              <div className="project-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="project-title">{p.title}</span>
                <div className="project-tags" style={{ marginLeft: 'auto', display: 'flex', gap: '8px' }}>
                  {p.tech.map((tech, index) => (
                    <span key={index} className={`skill-label ${TECH_CLASSES[tech] || ''}`}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-desc" style={{ marginTop: '8px', color: '#b0b8c1', fontSize: '14px' }}>{p.desc}</div>
            </div>
            <div
              className="project-media-wrapper"
              onClick={() => p.vimeo && handleMediaClick(p.id)}
              style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '8px', borderRadius: '8px', overflow: 'hidden', background: '#181c22', flexShrink: 0, cursor: 'pointer' }}
            >
              {/* Mostrar imagen si no está activo el vídeo */}
              {!playing[p.id] && (
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', position: 'absolute', top: 0, left: 0, borderRadius: '8px', zIndex: 2, overflow: 'hidden' }}
                />
              )}
              {/* Mostrar Vimeo si existe y showVideo */}
              {p.vimeo && playing[p.id] && (
                <iframe
                  src={`https://player.vimeo.com/video/${p.vimeo.match(/(\d+)/)?.[1]}?autoplay=1&muted=1&background=1&title=0&byline=0&portrait=0`}
                  title={p.title}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, borderRadius: '8px', overflow: 'hidden', background: '#000', margin: 0, padding: 0, boxSizing: 'border-box', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                />
              )}
            </div>
            <div className="project-links" style={{ display: 'flex', gap: '8px', marginTop: '8px', flexShrink: 0 }}>
              {p.web && (
                <a className="btn" href={p.web} target="_blank" rel="noopener noreferrer">Web</a>
              )}
              {p.demo && (
                <a className="btn" href={p.demo} target="_blank" rel="noopener noreferrer">Demo</a>
              )}
              {p.code && (
                <a className="btn" href={p.code} target="_blank" rel="noopener noreferrer">Code</a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}