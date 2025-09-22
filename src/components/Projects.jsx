import React, { useState } from "react";

/**
 * CONFIGURACIÓN DE PROYECTOS
 * Array que contiene toda la información de los proyectos del portfolio
 * Cada proyecto incluye: título, descripción, tecnologías, enlaces y multimedia
 * Tipos de enlaces disponibles: "web" (sitio en vivo), "code" (repositorio), "demo" (demostración)
 */
const PROJECTS = [
  {
    id: 1,
    title: "Tresele",
    desc: "Página web para una escuela de corte y confección y atelier de moda. Estilo elegante y amigable, con diseño responsivo y optimizado, transmitiendo cercanía y profesionalidad en el mundo de la moda.",
    tech: ["WordPress", "Elementor"],
    type: "WordPress",
    style: "label-design",
    className: "type-wordpress",
    vimeo: "https://vimeo.com/1119062509?share=copy#t=0",
    thumbnail: process.env.PUBLIC_URL + "/Tresele-home.jpg",
    web: "https://www.tresele.com",
  },
  {
    id: 9,
    title: "React Calculadora Meta",
    desc: "Primer proyecto desarrollado durante el curso Meta Front-End Developer, una calculadora funcional que aplica los conceptos fundamentales de React.",
    tech: ["React"],
    type: "React",
    style: "label-frontend",
    className: "type-react",
    vimeo: "https://vimeo.com/1119046183?share=copy#t=0",
    thumbnail: process.env.PUBLIC_URL + "/calculadora.png",
    demo: "https://avalob.github.io/react-calculadora-meta/",
    code: "https://github.com/Avalob/react-calculadora-meta",
  },
  {
    id: 2,
    title: "Santissimo",
    desc: "Página web para un restaurante de alta gama en el centro histórico de Alcalá de Henares. Estilo sofisticado y elegante, con un diseño visual que resalta la exclusividad del lugar. Incluye menús, reservas online y optimización para dispositivos móviles.",
    tech: ["WordPress", "Divi"],
    type: "WordPress",
    style: "label-design",
    className: "type-wordpress",
    vimeo: "https://vimeo.com/1120758496?share=copy",
    thumbnail: process.env.PUBLIC_URL + "/Santissimo-home.png",
    web: "https://santissimo.es/",
  },
  {
    id: 3,
    title: "Prevan",
    desc: "Página web para una empresa de equipamientos para vehículos. Estilo moderno y actual, con una identidad visual de inspiración racing. Además del desarrollo web, realicé el diseño del logotipo, reforzando la marca y su imagen dinámica.",
    tech: ["WordPress", "Elementor"],
    type: "WordPress",
    style: "label-design",
    className: "type-wordpress",
    vimeo: "https://vimeo.com/1119053327?share=copy#t=0",
    thumbnail: process.env.PUBLIC_URL + "/Prevan-home.png",
    web: "https://prevanequipamientos.es/",
  },
  {
    id: 4,
    title: "Demovi",
    desc: "Página web para una empresa de campamentos juveniles. Estilo infantil y divertido, con un diseño colorido y accesible. Incluye sistema de inscripción online a los campamentos, facilitando el registro de participantes y mejorando la comunicación con las familias.",
    tech: ["WordPress", "Divi"],
    type: "WordPress",
    style: "label-design",
    className: "type-wordpress",
    vimeo: "https://vimeo.com/1119057808?share=copy#t=0", 
    thumbnail: process.env.PUBLIC_URL + "/Demovi-home.jpg",
    web: "https://demovi.es/",
  },
  // { id: 5, title: 'Grupo ITM', desc: 'Página web para una empresa de electricistas que ofrece servicios tanto comerciales como residenciales. Diseño minimalista y equilibrado, utilizando los colores corporativos de la empresa para reforzar su identidad visual. La web es responsiva, clara y funcional, destacando los servicios, contacto y referencias de proyectos realizados.', tech: ['WordPress', 'Divi'], type: 'WordPress', style: 'label-design', className: 'type-wordpress', video: './videos/tresele-video.mp4', thumbnail: './Tresele-home.jpg' },
  {
    id: 6,
    title: "Planetario Móvil",
    desc: "Página web para una empresa que vende y alquila planetarios móviles, con un estilo inspirado en el espacio y la astronomía. Diseño visual y responsivo, que transmite emoción y profesionalidad. Incluye secciones de catálogo de planetarios, reservas y contacto, destacando la experiencia inmersiva que ofrecen sus servicios.",
    tech: ["WordPress", "Divi"],
    type: "WordPress",
    style: "label-design",
    className: "type-wordpress",
    vimeo: "https://vimeo.com/1119053800?share=copy#t=0",
    thumbnail: process.env.PUBLIC_URL + "/Planetario-home.png",
    web: "https://planetariomovil.es/",
  },
  {
    id: 7,
    title: "Portfolio",
    desc: "Portfolio personal creado con React",
    tech: ["React"],
    type: "React",
    style: "label-frontend",
    className: "type-react",
    vimeo: "https://vimeo.com/1119059685?share=copy#t=20",
    noDemo: true,
    thumbnail: process.env.PUBLIC_URL + "/Portfolio.png",
    code: "https://github.com/Avalob/portfolio-andrea-valbuena",
  },
  {
    id: 8,
    title: "React Mouse Tracker",
    desc: "Proyecto desarrollado durante el curso avanzado de React ofrecido por Meta, una aplicación interactiva que rastrea la posición del mouse y la muestra en tiempo real en diferentes formatos. El diseño es visual y dinámico, pensado para mostrar de manera clara la interacción del usuario con la interfaz.",
    tech: ["React"],
    type: "React",
    style: "label-frontend",
    className: "type-react",
    vimeo: "https://vimeo.com/1119060764?share=copy#t=0",
    thumbnail: process.env.PUBLIC_URL + "/mouse.png",
    demo: "https://avalob.github.io/react-mouse-tracker/",
    code: "https://github.com/Avalob/react-mouse-tracker",
  },
  {
    id: 10,
    title: "Treseleapp",
    desc: "Tresele App es un ERP web en uso real que centraliza la gestión de clientes, alumnos, matrículas, citas, prendas y pagos, digitalizando los procesos del atelier y la escuela de patronaje para una gestión eficiente y segura.",
    tech: ["HTML", "PHP", "MYSQL"],
    type: "HTML",
    style: "label-markup",
    className: "type-html",
    vimeo: "https://vimeo.com/1119061339?share=copy#t=0",
    thumbnail: process.env.PUBLIC_URL + "/Tresele-app-home.png",
    web: "https://treseleapp.es/",
    code: "https://github.com/Avalob/Tresele-app",
  },
  {
    id: 11,
    title: "Lucky Shrub Website",
    desc: 'Proyecto final del curso "HTML and CSS in depth" de Meta/Coursera, desarrollado para una empresa ficticia de jardinería y paisajismo. La web es completamente responsive y moderna, con un diseño profesional, visual y accesible, centrado en una experiencia de usuario clara y atractiva.',
    tech: ["HTML", "CSS"],
    type: "HTML",
    style: "label-markup",
    className: "type-html",
    vimeo: "https://vimeo.com/1119059151?share=copy#t=0",
    thumbnail: process.env.PUBLIC_URL + "/Lucky-Shrub.png",
    demo: "https://avalob.github.io/lucky-shrub-website/",
    code: "https://github.com/Avalob/lucky-shrub-website",
  },
  {
    id: 12,
    title: "Telecom-ERP",
    desc: "Aplicación web ERP para la gestión integral de Telecom, centralizando clientes, pedidos, incidencias, facturación y procesos internos en un entorno seguro y eficiente.",
    tech: ["HTML", "CSS", "PHP"],
    type: "HTML",
    style: "label-markup",
    className: "type-html",
    vimeo: "https://vimeo.com/1119058567?share=copy#t=0",
    thumbnail: process.env.PUBLIC_URL + "/telecom.png",
    code: "https://github.com/Avalob/Telecom-ERP",
  },
];

/**
 * FILTROS DE CATEGORÍAS
 * Define las categorías disponibles para filtrar proyectos por tecnología
 * "Todos" muestra todos los proyectos sin filtro
 */
const FILTERS = ["Todos", "React", "WordPress", "HTML"];

/**
 * MAPEO DE CLASES CSS PARA TECNOLOGÍAS
 * Asigna clases CSS específicas a cada tecnología para el styling de etiquetas
 */
const TECH_CLASSES = {
  React: "label-frontend",
  Tailwind: "label-design",
};

/**
 * COMPONENTE PRINCIPAL: PROJECTS
 * Renderiza la sección de proyectos del portfolio con:
 * - Sistema de filtrado por categorías
 * - Grid de proyectos con información y multimedia
 * - Reproducción de videos bajo demanda
 * - Enlaces a sitios web, demos y código en github
 */
export default function Projects() {
  /**
   * ESTADOS DEL COMPONENTE
   * - filter: categoría actualmente seleccionada para filtrar proyectos
   * - playing: objeto que controla qué videos están reproduciéndose (por ID de proyecto)
   */
  const [filter, setFilter] = useState("Todos");
  const [playing, setPlaying] = useState({});

  /**
   * LÓGICA DE FILTRADO
   * Filtra los proyectos según la categoría seleccionada
   * Si "Todos" está seleccionado, muestra todos los proyectos
   */
  const filtered =
    filter === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.type === filter);

  /**
   * MANEJO DE REPRODUCCIÓN DE VIDEOS
   * Activa la reproducción del video de Vimeo cuando se hace clic en la imagen
   * @param {number} id - ID del proyecto cuyo video se va a reproducir
   */
  const handleMediaClick = (id) => {
    setPlaying((p) => ({ ...p, [id]: true }));
  };

  /**
   * RENDERIZADO DEL COMPONENTE
   * Estructura principal de la sección de proyectos
   */
  return (
    <section className="box">
      <h2 className="section-title">Proyectos</h2>
      
      {/* FILTROS DE CATEGORÍAS - Botones para filtrar proyectos por tecnología */}
      <div className="filters">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`filter-btn ${filter === f ? "active" : ""}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>
      
      {/* GRID DE PROYECTOS - Lista de proyectos filtrados con información y multimedia */}
      <ul className="project-list">
        {filtered.map((p) => (
          <li key={p.id} className="project-item">
            
            {/* INFORMACIÓN DEL PROYECTO - Título, tecnologías y descripción */}
            <div className="project-info">
              <div className="project-header">
                <span className="project-title">{p.title}</span>
                
                {/* Etiquetas de tecnologías utilizadas */}
                <div className="project-tags">
                  {p.tech.map((tech, index) => (
                    <span
                      key={index}
                      className={`skill-label ${TECH_CLASSES[tech] || ""}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="project-desc">{p.desc}</div>
            </div>
            
            {/* MULTIMEDIA DEL PROYECTO - Imagen estática y video bajo demanda */}
            <div
              className="project-media-wrapper"
              onClick={() => p.vimeo && handleMediaClick(p.id)}
            >
              {/* Imagen de miniatura (se muestra cuando el video no está activo) */}
              {!playing[p.id] && (
                <img
                  src={p.thumbnail}
                  alt={p.title}
                  className="project-image"
                />
              )}
              
              {/* Video de Vimeo embebido (se muestra solo cuando está activo) */}
              {p.vimeo && playing[p.id] && (
                <iframe
                  src={`https://player.vimeo.com/video/${
                    p.vimeo.match(/(\d+)/)?.[1]
                  }?autoplay=1&muted=1&background=1&title=0&byline=0&portrait=0`}
                  title={p.title}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  className="project-iframe"
                />
              )}
            </div>
            
            {/* ENLACES DEL PROYECTO - Botones para web, demo y código fuente */}
            <div className="project-links">
              {/* Enlace al sitio web en vivo */}
              {p.web && (
                <a
                  className="btn"
                  href={p.web}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Web
                </a>
              )}
              
              {/* Enlace a la demostración */}
              {p.demo && (
                <a
                  className="btn"
                  href={p.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              )}
              
              {/* Enlace al código fuente en github*/}
              {p.code && (
                <a
                  className="btn"
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
