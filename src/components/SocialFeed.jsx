// Importaciones necesarias
import React, { useState } from 'react';
import { FaBriefcase, FaRegClock, FaGraduationCap, FaThumbsUp, FaComment, FaChevronDown } from 'react-icons/fa';
import { GrCertificate } from "react-icons/gr";

// Datos del usuario
// Aquí se define la información básica del usuario que se mostrará en los posts
const user = {
  name: 'Andrea Valbuena',
  username: '@avalob',
  avatar: '/avatar.png',
};

// Mapeo de iconos por tipo de post
// Esto permite asignar un icono específico a cada tipo de post
const POST_ICONS = {
  experiencia: <FaBriefcase color="#4079FF" />,
  educacion: <FaGraduationCap color="#FF007F" />,
  cursos: <GrCertificate color="#F7DF1E" />,
  hobbies: <FaRegClock color="#40FFAA" />
};

// Datos de los posts
// Aquí se define la estructura y contenido de cada post
const postsData = [
  {
    id: 1,
    type: 'experiencia',
    title: 'Experiencia Profesional',
    date: 'Hace 2 días',
    experiences: [
      {
        puesto: 'Desarrolladora Web EMCO Agency',
        periodo: 'Enero 2025 Mayo 2025',
        detalles: `Descripción general
Desarrollé sitios web para clientes utilizando WordPress, CSS y JavaScript, combinando funcionalidad, diseño y optimización SEO para mejorar la presencia online de los clientes

Logros y responsabilidades clave
Desarrollo de sitios web en WordPress, adaptando temas y creando funcionalidades personalizadas con CSS y JavaScript
Optimización SEO on-page para mejorar visibilidad y posicionamiento en buscadores
Colaboración con diseñadores y clientes para transformar ideas y prototipos en sitios web completos y funcionales
Implementación de buenas prácticas de accesibilidad y rendimiento web

Resultados destacados
Entrega de 7 proyectos completos a clientes, todos con feedback positivo por usabilidad y diseño
Mejoras en velocidad y rendimiento de sitios web, aumentando la satisfacción de los usuarios`
      },
      {
        puesto: 'Desarrollo Web Freelance',
        periodo: '2022 2024',
        detalles: `Descripción general
Gestión de proyectos web completos para clientes y propios, desarrollando soluciones personalizadas en front-end y back-end

Logros y responsabilidades clave
Creación de sitios web y aplicaciones dinámicas con HTML, CSS, JavaScript, PHP y SQL (MariaDB)
Desarrollo y despliegue en dominios propios

Proyectos destacados
2 sitios web completos en WordPress con diseño responsivo y optimización SEO
Aplicación web completa para gestión empresarial sistema en PHP con AJAX, incluyendo chat interno, gráficos de datos, gestión de asistencias y compras de clases para alumnos
Adaptación de sitios web a dispositivos móviles mediante responsive design
Consultoría técnica y mantenimiento de proyectos web para clientes

Resultados destacados
Lanzamiento exitoso de múltiples proyectos web con interfaces modernas y experiencia de usuario optimizada
Implementación de funcionalidades complejas en aplicaciones web, aumentando la eficiencia de procesos internos de clientes`
      },
      {
        puesto: 'Sastra de Televisión Mediaset',
        periodo: '2021 2024',
        detalles: `Descripción general
Gestión y coordinación de vestuario para producciones televisivas, trabajando bajo presión y asegurando resultados de alta calidad

Logros y responsabilidades clave
Organización y planificación de recursos de vestuario para producciones en directo
Comunicación y colaboración con equipos multidisciplinares (producción, dirección, cámara)
Atención al detalle y cumplimiento de plazos ajustados en entornos dinámicos

Resultados destacados
Contribución a producciones sin retrasos ni incidencias de vestuario durante tres años consecutivos
Desarrollo de habilidades transferibles a entornos tech gestión de proyectos, resolución de problemas y coordinación efectiva de equipos`
      }
    ],
    reactions: { like: 120, love: 7, fun: 32, wow: 1 },
    comments: []
  },
  {
    id: 2,
    type: 'educacion',
    title: 'Educación',
    date: 'Hace 4 días',
    educations: [
      { grado: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)', centro: 'Digitech FP', periodo: '2023 – 2025', detalles: `Desarrollo de aplicaciones full stack para escritorio, web y móvil.

Lenguajes y tecnologías: Java, PHP, JavaScript, HTML, CSS, SQL/MariaDB, frameworks y librerías modernas.

Creación de juegos y aplicaciones móviles con Android Studio, integrando lógica, gráficos y gestión de eventos.

Diseño y gestión de bases de datos, programación orientada a objetos, APIs y consumo de servicios externos.

Implementación de sistemas y redes: conocimiento de protocolos, configuración básica y administración de entornos conectados.

Creación de interfaces interactivas y responsivas, control de versiones con Git y despliegue en servidores y plataformas en la nube.

Aprendizaje de metodologías ágiles (Scrum/Kanban) y buenas prácticas de desarrollo.

Comprensión y uso de inglés técnico en documentación, APIs y entornos de desarrollo.

Trabajo en proyectos integrales con énfasis en seguridad, escalabilidad y experiencia de usuario.` },
      { grado: 'Grado en Matemáticas (incompleto, segundo año)', centro: 'UNED', periodo: '2021 – 2023', detalles: `Desarrollo de pensamiento lógico y analítico, resolución de problemas complejos y modelado de sistemas.

Habilidades transferibles a programación: algoritmos, estructuras de datos y optimización de procesos.` },
      { grado: 'Grado Superior en Asesoría de Imagen Personal (AIP)', centro: 'IES Santa Engracia', periodo: '2011 – 2013', detalles: `Gestión de proyectos, planificación de recursos y optimización de procesos.

Coordinación de equipos y mejora continua, habilidades aplicables a entornos de desarrollo de software.` },
      { grado: 'Máster en Visual Merchandising y Escaparatismo', centro: 'Salesas Instituto', periodo: '', detalles: `Desarrollo de creatividad aplicada al diseño, atención al detalle y experiencia del usuario.

Capacidad para transformar ideas conceptuales en soluciones visuales y funcionales, útil en UI/UX y diseño front-end.` }
    ],
    reactions: { like: 45, love: 2, fun: 1, wow: 0 },
    comments: []
  },
  {
    id: 3,
    type: 'cursos',
    title: 'Otros cursos',
    date: 'Hace 1 semana',
    cursos: [
      {
        nombre: 'Certificado de Profesionalidad en Desarrollo de Productos Editoriales Multimedia',
        centro: 'CIC Formación, 2025',
        detalles: `Formación en creación de contenidos digitales interactivos y multimedia.

Aprendizaje de herramientas y procesos de diseño digital, maquetación y publicación online.`
      },
      {
        nombre: 'Curso Frontend React',
        centro: 'Meta / Coursera',
        detalles: `Desarrollo de interfaces web modernas y dinámicas utilizando React, JSX, componentes, hooks y gestión de estado.

Prácticas en integración de APIs, consumo de datos y optimización de rendimiento en aplicaciones front-end.`
      }
    ],
    reactions: { like: 32, love: 1, fun: 0, wow: 1 },
    comments: []
  },
  {
    id: 4,
    type: 'hobbies',
    title: 'Hobbies y Pasiones',
    date: 'Hoy',
    hobbies: [
      {
        nombre: 'Danza',
        detalles: 'Apasionada del baile contemporáneo y los bailes latinos, actividad que potencia disciplina, coordinación y expresión corporal.'
      },
      {
        nombre: 'Arte dramático y cine',
        detalles: 'He realizado 4 cursos en Coraza Estudio para el Actor, desarrollando habilidades en interpretación, teatro y análisis de personajes. Me encanta explorar el arte dramático y el cine, fomentando creatividad y storytelling.'
      },
      {
        nombre: 'Moda y diseño creativo',
        detalles: 'Colaboro con mi madre en diseño de ropa, creando piezas innovadoras y únicas. Me encanta imaginar moda diferente y experimentar con colores, texturas y estilos.'
      },
      {
        nombre: 'Aprendizaje continuo',
        detalles: 'Me encanta estudiar, aprender y hacer cursos, siempre investigando nuevas tecnologías, metodologías y herramientas para mejorar mis habilidades como desarrolladora.'
      },
      {
        nombre: 'Creatividad aplicada',
        detalles: 'Todas estas pasiones refuerzan mi capacidad creativa, sensibilidad estética y atención al detalle, competencias que aplico también en desarrollo web y diseño de interfaces.'
      }
    ],
    reactions: { like: 18, love: 0, fun: 0, wow: 0 },
    comments: []
  }
];

// Componente principal del feed social
export default function SocialFeed() {
  // Estados para manejar los posts, reacciones, detalles y comentarios
  const [posts, setPosts] = useState(postsData);
  const [userReactions, setUserReactions] = useState({});
  const [expandedDetails, setExpandedDetails] = useState({});
  const [newComments, setNewComments] = useState({});
  const [expandedComments, setExpandedComments] = useState({});

  // Función para alternar la visibilidad de los detalles de un post
  const toggleDetails = (postId, index) => {
    setExpandedDetails(prev => ({
      ...prev,
      [postId]: {
        ...prev[postId],
        [index]: !prev[postId]?.[index]
      }
    }));
  };

  // Función para manejar las reacciones de los usuarios
  const handleReact = (postId, key) => {
    setPosts(posts => posts.map(post => {
      if (post.id !== postId) return post;
      const prevKey = userReactions[postId];
      let newReactions = { ...post.reactions };
      if (prevKey && newReactions[prevKey] > 0) {
        newReactions[prevKey] = newReactions[prevKey] - 1;
      }
      newReactions[key] = (newReactions[key] || 0) + 1;
      return { ...post, reactions: newReactions };
    }));
    setUserReactions(r => ({ ...r, [postId]: key }));
  };

  // Función para manejar el envío de comentarios
  const handleCommentSubmit = (postId, comment) => {
    if (!comment.trim()) return;
    setPosts(posts => posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, { user: user.name, text: comment }]
        };
      }
      return post;
    }));
  };

  // Función para formatear los detalles en párrafos y listas
  function renderDetalles(detalles) {
    if (!detalles) return null;
    const lines = detalles.split('\n');
    const result = [];
    let list = [];
    lines.forEach((line, idx) => {
      if (line.startsWith('- ')) {
        list.push(<li key={idx}>{line.replace('- ', '')}</li>);
      } else {
        if (list.length) {
          result.push(<ul key={`ul-${idx}`}>{list}</ul>);
          list = [];
        }
        if (line.trim() !== '') {
          result.push(<p key={`p-${idx}`}>{line}</p>);
        }
      }
    });
    if (list.length) {
      result.push(<ul key={`ul-end`}>{list}</ul>);
    }
    return result;
  }

  // Renderizado del componente
  return (
    <div className="feed">
      {/* Mapeo de los posts */}
      {posts.map(post => {
        return (
          <div className="post-card" key={post.id}>
            {/* Cabecera del post */}
            <div className="post-header-social" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src={user.avatar} alt={user.name} className="avatar post-avatar-social" style={{ objectFit: 'cover', objectPosition: 'center' }} />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="post-name-social">{user.name}</span>
                  <span className="post-date-social">· {post.date}</span>
                </div>
                <span className="post-username-social">{user.username}</span>
              </div>
             
            </div>
            {/* Título y contenido */}
            <div className="card-title post-title-social" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {POST_ICONS[post.type]}
              <span>{post.title}</span>
            </div>
            {/* Renderizado dinámico según el tipo de post */}
            {post.type === 'experiencia' ? (
              <div className="post-content post-content-social">
                <ul>
                  {post.experiences.map((exp, idx) => (
                    <li key={idx} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <strong>{exp.puesto}</strong>
                        <span style={{ marginLeft: 4 }}>
                          ({exp.periodo})
                          <button
                            className="btn-toggle-details"
                            onClick={() => toggleDetails(post.id, idx)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginLeft: 6 }}
                            aria-label={expandedDetails[post.id]?.[idx] ? 'Ocultar detalles' : 'Ver detalles'}
                          >
                            <FaChevronDown style={{ transition: 'transform 0.2s', transform: expandedDetails[post.id]?.[idx] ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                          </button>
                        </span>
                      </span>
                      {expandedDetails[post.id]?.[idx] && exp.detalles && (
                        <div className="details">
                          {renderDetalles(exp.detalles)}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : post.type === 'educacion' ? (
              <div className="post-content post-content-social">
                <ul>
                  {post.educations.map((edu, idx) => (
                    <li key={idx} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <strong>{edu.grado}</strong>
                        <span style={{ marginLeft: 4 }}>
                          {edu.centro ? `(${edu.centro}` : ''}{edu.periodo ? `, ${edu.periodo}` : edu.centro ? ')' : ''}
                          <button
                            className="btn-toggle-details"
                            onClick={() => toggleDetails(post.id, idx)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginLeft: 6 }}
                            aria-label={expandedDetails[post.id]?.[idx] ? 'Ocultar detalles' : 'Ver detalles'}
                          >
                            <FaChevronDown style={{ transition: 'transform 0.2s', transform: expandedDetails[post.id]?.[idx] ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                          </button>
                        </span>
                      </span>
                      {expandedDetails[post.id]?.[idx] && edu.detalles && (
                        <div className="details">
                          {renderDetalles(edu.detalles)}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : post.type === 'cursos' ? (
              <div className="post-content post-content-social">
                <ul>
                  {post.cursos.map((curso, idx) => (
                    <li key={idx} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        {curso.nombre}
                        <span style={{ marginLeft: 4 }}>
                          {curso.centro ? `– ${curso.centro}` : ''}
                          <button
                            className="btn-toggle-details"
                            onClick={() => toggleDetails(post.id, idx)}
                            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginLeft: 6 }}
                            aria-label={expandedDetails[post.id]?.[idx] ? 'Ocultar detalles' : 'Ver detalles'}
                          >
                            <FaChevronDown style={{ transition: 'transform 0.2s', transform: expandedDetails[post.id]?.[idx] ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                          </button>
                        </span>
                      </span>
                      {expandedDetails[post.id]?.[idx] && curso.detalles && (
                        <div className="details">
                          {renderDetalles(curso.detalles)}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : post.type === 'hobbies' ? (
              <div className="post-content post-content-social">
                <ul>
                  {post.hobbies.map((hob, idx) => (
                    <li key={idx} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        {hob.nombre}
                        <button
                          className="btn-toggle-details"
                          onClick={() => toggleDetails(post.id, idx)}
                          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginLeft: 6 }}
                          aria-label={expandedDetails[post.id]?.[idx] ? 'Ocultar detalles' : 'Ver detalles'}
                        >
                          <FaChevronDown style={{ transition: 'transform 0.2s', transform: expandedDetails[post.id]?.[idx] ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
                        </button>
                      </span>
                      {expandedDetails[post.id]?.[idx] && hob.detalles && (
                        <div className="details">
                          {renderDetalles(hob.detalles)}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {/* Acciones: reacciones y comentarios */}
            <div className="card-actions post-actions-social" style={{ display: 'flex', alignItems: 'center', gap: '16px', flexDirection: 'row', justifyContent: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' ,flexDirection: 'column-reverse'}}>
                <button
                  className={`btn ${userReactions[post.id] === 'like' ? 'btn-active' : ''}`}
                  onClick={() => handleReact(post.id, 'like')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    backgroundColor: userReactions[post.id] === 'like' ? 'var(--color-label-primary-bg)' : 'var(--color-bg-subtle)',
                    color: userReactions[post.id] === 'like' ? 'var(--color-btn-primary-fg)' : 'var(--color-fg-default)',
                  }}
                >
                  <FaThumbsUp className="icon-space" />
                  {userReactions[post.id] === 'like' ? 'Like' : 'Like'}
                </button>
                <div
                  className="like-count"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '14px',
                    color: 'var(--color-label-primary-bg)',
                    fontWeight: 'bold',
                    backgroundColor: 'var(--color-bg-subtle)',
                    padding: '4px 8px',
                    borderRadius: '12px',
                  }}
                >
                  <FaThumbsUp />
                  {post.reactions.like || 0}
                </div>
              </div>
              <button
                className="btn"
                onClick={() => setExpandedComments(ec => ({ ...ec, [post.id]: !ec[post.id] }))}
              >
                <FaComment className="icon-space" /> Comentarios
              </button>
            </div>
            {/* Sección de comentarios, solo visible si está expandida */}
            {expandedComments[post.id] && (
              <div className="comments-section">
                <div className="comment-label">Comentarios</div>
                {post.comments.length === 0 && (
                  <div className="comment-empty">Sé el primero en comentar.</div>
                )}
                {post.comments.map((c, i) => (
                  <div key={i} className="comment">
                    <span className="comment-user-label">{c.user}:</span>
                    <span className="comment-text">{c.text}</span>
                  </div>
                ))}
                <div className="comment-form">
                  <input
                    type="text"
                    placeholder="Escribe un comentario..."
                    value={newComments[post.id] || ''}
                    onChange={e => setNewComments({ ...newComments, [post.id]: e.target.value })}
                    className="comment-input"
                  />
                  <button
                    onClick={() => {
                      handleCommentSubmit(post.id, newComments[post.id] || '');
                      setNewComments({ ...newComments, [post.id]: '' });
                    }}
                    className="btn send-comment"
                  >
                    Enviar
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}

    </div>
  );
}
