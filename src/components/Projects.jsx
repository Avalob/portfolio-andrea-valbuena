// Importaciones necesarias
import React, { useState, useRef, useEffect } from 'react';

// Lista de proyectos con sus datos principales
const PROJECTS = [
  { id: 1, title: 'Tresele', desc: 'Página web para una escuela de corte y confección y atelier de moda. Estilo elegante y amigable, con diseño responsivo y optimizado, transmitiendo cercanía y profesionalidad en el mundo de la moda.', tech: ['WordPress', 'Elementor'], type: 'WordPress', style: 'label-design', className: 'type-wordpress', video: '/videos/tresele-video.mp4', thumbnail: '/Tresele-home.jpg' },
  // { id: 2, title: 'Santissimo', desc: 'Página web para un restaurante de lujo en el centro histórico de Alcalá de Henares. Estilo sofisticado y elegante, con un diseño visual que resalta la exclusividad del lugar. Incluye menús, reservas online y optimización para dispositivos móviles.', tech: ['WordPress', 'Divi'], type: 'WordPress', style: 'label-design', className: 'type-wordpress', video: '/videos/tresele-video.mp4', thumbnail: '/Tresele-home.jpg' },
  { id: 3, title: 'Prevan', desc: 'Página web para una empresa de equipamientos para vehículos. Estilo moderno y actual, con una identidad visual de inspiración racing. Además del desarrollo web, realicé el diseño del logotipo, reforzando la marca y su imagen dinámica.', tech: ['WordPress', 'Elementor'], type: 'WordPress', style: 'label-design', className: 'type-wordpress', video: '/videos/Prevan-video.mp4', thumbnail: '/Prevan-home.png' },
  { id: 4, title: 'Demovi', desc: 'Página web para una empresa de campamentos juveniles. Estilo infantil y divertido, con un diseño colorido y accesible. Incluye sistema de inscripción online a los campamentos, facilitando el registro de participantes y mejorando la comunicación con las familias.', tech: ['WordPress', 'Divi'], type: 'WordPress', style: 'label-design', className: 'type-wordpress', video: '/videos/demovi-video.mp4', thumbnail: '/Demovi-home.jpg' },
  // { id: 5, title: 'Grupo ITM', desc: 'Página web para una empresa de electricistas que ofrece servicios tanto comerciales como residenciales. Diseño minimalista y equilibrado, utilizando los colores corporativos de la empresa para reforzar su identidad visual. La web es responsiva, clara y funcional, destacando los servicios, contacto y referencias de proyectos realizados.', tech: ['WordPress', 'Divi'], type: 'WordPress', style: 'label-design', className: 'type-wordpress', video: '/videos/tresele-video.mp4', thumbnail: '/Tresele-home.jpg' },
  { id: 6, title: 'Planetario Móvil', desc: 'Página web para una empresa que vende y alquila planetarios móviles, con un estilo inspirado en el espacio y la astronomía. Diseño visual y responsivo, que transmite emoción y profesionalidad. Incluye secciones de catálogo de planetarios, reservas y contacto, destacando la experiencia inmersiva que ofrecen sus servicios.', tech: ['WordPress', 'Divi'], type: 'WordPress', style: 'label-design', className: 'type-wordpress', video: '/videos/planetario-video.mp4', thumbnail: '/Planetario-home.png' },
  { id: 7, title: 'Portfolio', desc: 'Portfolio personal creado con React', tech: ['React'], type: 'React', style: 'label-frontend', className: 'type-react', video: '/videos/tresele-video.mp4', noDemo: true, thumbnail: '/Tresele-home.jpg' },
  { id: 8, title: 'React Mouse Tracker', desc: 'Proyecto desarrollado durante el curso avanzado de React ofrecido por Meta, una aplicación interactiva que rastrea la posición del mouse y la muestra en tiempo real en diferentes formatos. El diseño es visual y dinámico, pensado para mostrar de manera clara la interacción del usuario con la interfaz.', tech: ['React'], type: 'React', style: 'label-frontend', className: 'type-react', video: '/videos/mouse-video.mp4', thumbnail: '/mouse.png' },
  { id: 9, title: 'React Calculadora Meta', desc: 'Primer proyecto desarrollado durante el curso Meta Front-End Developer, una calculadora funcional que aplica los conceptos fundamentales de React. Estilo simple y amigable, centrado en la usabilidad y la interacción en tiempo real.', tech: ['React'], type: 'React', style: 'label-frontend', className: 'type-react', video: '/videos/calculadora-video.mp4', thumbnail: '/calculadora.png' },
  { id: 10, title: 'Treseleapp', desc: 'Tresele App es un ERP web en uso real que centraliza la gestión de clientes, alumnos, matrículas, citas, prendas y pagos, digitalizando los procesos del atelier y la escuela de patronaje para una gestión eficiente y segura.', tech: ['HTML', 'PHP', 'MYSQL'], type: 'HTML', style: 'label-markup', className: 'type-html', video: '/videos/tresele-app-video.mp4', thumbnail: '/Tresele-app-home.png' },
  { id: 11, title: 'Lucky Shrub Website', desc: 'Proyecto final del curso "HTML and CSS in depth" de Meta/Coursera, desarrollado para una empresa ficticia de jardinería y paisajismo. La web es completamente responsive y moderna, con un diseño profesional, visual y accesible, centrado en una experiencia de usuario clara y atractiva.', tech: ['HTML', 'CSS'], type: 'HTML', style: 'label-markup', className: 'type-html', video: '/videos/Lucky-Shrub-video.mp4', thumbnail: '/Lucky-Shrub.png' },
  { id: 12, title: 'Telecom-ERP', desc: 'Aplicación web ERP para la gestión integral de Telecom, centralizando clientes, pedidos, incidencias, facturación y procesos internos en un entorno seguro y eficiente.', tech: ['HTML', 'CSS', 'PHP'], type: 'HTML', style: 'label-markup', className: 'type-html', video: '/videos/telecom-video.mp4', thumbnail: '/telecom.png' },
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
  const [hovered, setHovered] = useState({});
  const [lightbox, setLightbox] = useState(null);
  const videoRefs = useRef({});

  // Filtrado de proyectos según el filtro seleccionado
  let filtered = filter === 'Todos' ? PROJECTS : PROJECTS.filter(p => p.type === filter);
  // Si filtro es 'Todos', Prevan primero y Treseleapp segundo, el resto en el orden original
  if (filter === 'Todos') {
    const prevan = filtered.find(p => p.title === 'Prevan');
    const treseleapp = filtered.find(p => p.title === 'Treseleapp');
    const rest = filtered.filter(p => p.title !== 'Prevan' && p.title !== 'Treseleapp');
    filtered = [prevan, treseleapp, ...rest];
  }

  // Funciones para manejar hover y reproducir/pausar video
  const handleMouseEnter = (id) => {
    setHovered(h => ({ ...h, [id]: true }));
    const video = videoRefs.current[id]?.current;
    if (video && video instanceof HTMLVideoElement) {
      if (video.paused && video.readyState > 2) {
        try {
          video.play();
        } catch (e) {}
      }
    }
  };
  const handleMouseLeave = (id) => {
    setHovered(h => ({ ...h, [id]: false }));
    const video = videoRefs.current[id]?.current;
    if (video && video instanceof HTMLVideoElement) {
      if (!video.paused) {
        try {
          video.pause();
          video.currentTime = 0;
        } catch (e) {}
      }
    }
  };

  // Forzar reproducción automática en móvil
  useEffect(() => {
    if (window.innerWidth <= 768) {
      const playAll = () => {
        Object.values(videoRefs.current).forEach(ref => {
          const video = ref?.current;
          if (video && video.paused) {
            video.play().catch(() => {});
          }
        });
        window.removeEventListener('touchstart', playAll);
        window.removeEventListener('click', playAll);
      };
      window.addEventListener('touchstart', playAll, { once: true });
      window.addEventListener('click', playAll, { once: true });
      return () => {
        window.removeEventListener('touchstart', playAll);
        window.removeEventListener('click', playAll);
      };
    }
  }, [filtered]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (video instanceof HTMLVideoElement) {
            if (entry.isIntersecting) {
              video.muted = true; // Aseguramos que el video esté silenciado
              video.playsInline = true; // Aseguramos que se reproduzca en línea
              video.play().catch(() => {}); // Intentamos reproducir el video
            } else {
              video.pause(); // Pausamos el video si sale del viewport
            }
          }
        });
      },
      { threshold: 0.5 } // Al menos el 50% del video debe estar visible
    );

    Object.values(videoRefs.current).forEach((ref) => {
      const video = ref?.current;
      if (video) observer.observe(video);
    });

    return () => {
      Object.values(videoRefs.current).forEach((ref) => {
        const video = ref?.current;
        if (video) observer.unobserve(video);
      });
      observer.disconnect();
    };
  }, [filtered]);

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
        {filtered.map((p) => {
          if (!videoRefs.current[p.id]) videoRefs.current[p.id] = React.createRef();
          return (
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
                onMouseEnter={() => handleMouseEnter(p.id)}
                onMouseLeave={() => handleMouseLeave(p.id)}
                style={{ position: 'relative', width: '100%', height: '200px', marginBottom: '8px', borderRadius: '8px', overflow: 'hidden', background: '#181c22', flexShrink: 0, cursor: 'pointer' }}
                onClick={() => {
                  if (window.innerWidth > 768) {
                    setLightbox({ video: p.video, thumbnail: p.thumbnail, title: p.title });
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Ver video de ${p.title}`}
              >
                {!hovered[p.id] && (
                  <img
                    src={p.thumbnail}
                    alt={p.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', position: 'absolute', top: 0, left: 0, zIndex: 2 }}
                  />
                )}
                <video
                  ref={videoRefs.current[p.id]}
                  className="project-video"
                  src={p.video}
                  poster={p.thumbnail}
                  loop
                  muted
                  playsInline
                  autoPlay={window.innerWidth <= 768}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', top: 0, left: 0, zIndex: 1, opacity: window.innerWidth <= 768 ? 1 : hovered[p.id] ? 1 : 0, transition: 'opacity 0.2s' }}
                />
              </div>
              <div className="project-links" style={{ display: 'flex', gap: '8px', marginTop: '8px', flexShrink: 0 }}>
                {!p.noDemo && (
                  p.type === 'WordPress'
                    ? (
                        <a
                          className="btn"
                          href={(() => {
                            if (p.title === 'Tresele') return 'https://tresele.com/';
                            if (p.title === 'Demovi') return 'https://demovi.es/';
                            if (p.title === 'Planetario Móvil') return 'https://planetariomovil.es/';
                            if (p.title === 'Prevan') return 'https://prevanequipamientos.es/';
                            // if (p.title === 'Grupo ITM') return 'https://grupoitm.es/';
                            // if (p.title === 'Santissimo') return 'https://santissimo.es/';
                            return undefined;
                          })()}
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={p.title === 'Tresele' || p.title === 'Demovi' || p.title === 'Planetario Móvil' || p.title === 'Prevan' /* || p.title === 'Grupo ITM' || p.title === 'Santissimo' */ ? 0 : -1}
                          aria-disabled={!(p.title === 'Tresele' || p.title === 'Demovi' || p.title === 'Planetario Móvil' || p.title === 'Prevan' /* || p.title === 'Grupo ITM' || p.title === 'Santissimo' */)}
                        >
                          Web
                        </a>
                      )
                    : (
                        p.title === 'React Mouse Tracker'
                          ? <a className="btn" href="https://avalob.github.io/react-mouse-tracker/" target="_blank" rel="noopener noreferrer">Demo</a>
                          : p.title === 'React Calculadora Meta'
                            ? <a className="btn" href="https://avalob.github.io/react-calculadora-meta/" target="_blank" rel="noopener noreferrer">Demo</a>
                            : p.title === 'Lucky Shrub Website'
                              ? <a className="btn" href="https://avalob.github.io/lucky-shrub-website/" target="_blank" rel="noopener noreferrer">Demo</a>
                              : p.title === 'Treseleapp'
                                ? <a className="btn" href="https://treseleapp.es" target="_blank" rel="noopener noreferrer">Web</a>
                                : <button className="btn">Demo</button>
                      )
                )}
                {p.type !== 'WordPress' && (
                  p.title === 'React Mouse Tracker'
                    ? <a className="btn" href="https://github.com/Avalob/react-mouse-tracker" target="_blank" rel="noopener noreferrer">Código</a>
                    : p.title === 'React Calculadora Meta'
                      ? <a className="btn" href="https://github.com/Avalob/react-calculadora-meta?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">Código</a>
                      : p.title === 'Lucky Shrub Website'
                        ? <a className="btn" href="https://github.com/Avalob/lucky-shrub-website" target="_blank" rel="noopener noreferrer">Código</a>
                        : p.title === 'Treseleapp'
                          ? <a className="btn" href="https://github.com/Avalob/Tresele-app" target="_blank" rel="noopener noreferrer">Código</a>
                          : <button className="btn">Código</button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
      {/* Lightbox para video */}
      {lightbox && (
        <div
          className="lightbox-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setLightbox(null)}
        >
          <div
            style={{ position: 'relative', maxWidth: '90vw', maxHeight: '80vh', background: 'transparent' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              style={{ position: 'absolute', top: 8, right: 8, zIndex: 2, background: 'rgba(0,0,0,0.7)', color: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, fontSize: 22, cursor: 'pointer' }}
              aria-label="Cerrar video"
            >
              ×
            </button>
            <video
              src={lightbox.video}
              poster={lightbox.thumbnail}
              controls
              autoPlay
              style={{ width: '100%', height: 'auto', maxHeight: '80vh', borderRadius: 12, background: '#000' }}
            />
            <div style={{ color: '#fff', textAlign: 'center', marginTop: 8 }}>{lightbox.title}</div>
          </div>
        </div>
      )}
    </section>
  );
}
