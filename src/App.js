/**
 * APLICACIÓN PRINCIPAL DEL PORTFOLIO
 * Aplicación React SPA (Single Page Application) que organiza el portfolio personal
 * Características: navegación por secciones, pantalla splash, notificaciones, responsive design
 * Arquitectura: Header + Sidebar + Main Content con gestión de estados global
 */

import React, { useState } from 'react';
import './App.css';
import SidebarLeft from './components/Sidebar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Splash from './components/Splash'
import { BiBell, BiLogoGithub, BiLogoLinkedin, BiLogoBehance } from 'react-icons/bi';

/**
 * COMPONENTE: APP HEADER
 * Cabecera principal con logo, título, redes sociales y notificaciones
 * @param {Function} onNotificationClick - Callback para mostrar panel de notificaciones
 * @param {Function} onToggleSidebar - Callback para abrir/cerrar sidebar en móvil
 */
function AppHeader({ onNotificationClick, onToggleSidebar }) {
  return (
    <header className="Header">
      {/* SECCIÓN PRINCIPAL DEL HEADER - Logo, título y redes sociales */}
      <div className="Header-index">
        {/* Botón hamburguesa para móviles */}
        <button 
          className="toggle-sidebar" 
          onClick={onToggleSidebar} 
          aria-label="Abrir/cerrar menú de navegación"
        >
          ☰
        </button>
        
        {/* Logo corporativo */}
        <img 
          src={process.env.PUBLIC_URL + '/logo1.png'} 
          alt="Logo del Portfolio de Andrea Valbuena" 
          className="Header-logo" 
        />
        
        {/* Título de la aplicación */}
        <span className="Header-title">Mi Portfolio</span>
        
        {/* ENLACES A REDES SOCIALES - GitHub, LinkedIn y Behance */}
        <div className="Header-socials">
          <a 
            href="https://github.com/Avalob" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
            title="GitHub de Andrea Valbuena"
          >
            <BiLogoGithub className="icon-social" />
          </a>
          <a 
            href="https://es.linkedin.com/in/andreavalbuenalobaton" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
            title="LinkedIn de Andrea Valbuena"
          >
            <BiLogoLinkedin className="icon-social" />
          </a>
          <a 
            href="https://www.behance.net/andreavalbuena" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="icon-link"
            title="Behance de Andrea Valbuena"
          >
            <BiLogoBehance className="icon-social-BiLogoBehance" />
          </a>
        </div>
      </div>

      {/* ACCIONES DEL HEADER - Botón de notificaciones */}
      <div className="header-actions">
        <button 
          className="icon-button" 
          title="Notificaciones" 
          onClick={onNotificationClick}
        >
          <BiBell className="icon-notifications" />
        </button>
      </div>
    </header>
  );
}

/**
 * COMPONENTE: PANEL DE NOTIFICACIONES
 * Overlay que muestra notificaciones del sistema (actualizaciones, nuevos proyectos, etc.)
 * @param {Array} notifications - Lista de notificaciones a mostrar
 * @param {Function} onClose - Callback para cerrar el panel
 * @param {Function} onNavigate - Callback para navegar a una sección específica
 */
function NotificationPanel({ notifications, onClose, onNavigate }) {
  return (
    <div className="notification-panel">
      {/* Botón de cierre */}
      <button className="close-button" onClick={onClose}>×</button>
      
      <h3>Notificaciones</h3>
      
      {/* Lista de notificaciones */}
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            <span className="notification-message">{notification.message}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * COMPONENTE PRINCIPAL: APP
 * Componente raíz que gestiona el estado global y la arquitectura de la aplicación
 * Maneja: navegación entre secciones, pantalla splash, notificaciones y responsive design
 */
function App() {
  /**
   * ESTADOS GLOBALES DE LA APLICACIÓN
   * - section: sección actualmente visible ('home', 'projects', 'skills', 'contact')
   * - showSplash: controla si se muestra la pantalla de carga inicial
   * - showNotifications: controla la visibilidad del panel de notificaciones
   * - isSidebarVisible: controla si la sidebar está visible (responsive)
   */
  const [section, setSection] = useState('home');
  const [showSplash, setShowSplash] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(() => window.innerWidth > 768);

  /**
   * DATOS DE NOTIFICACIONES
   * Lista estática de notificaciones que simula actualizaciones del portfolio
   */
  const notifications = [
    { message: 'Nueva skill aprendida: React Hooks', link: '#skills' },
    { message: 'Nuevo proyecto añadido: Portfolio Web', link: '#projects' },
  ];

  /**
   * LÓGICA DE RENDERIZADO CONDICIONAL
   * Determina qué componente principal mostrar según la sección activa
   */
  let MainContent;
  if (section === 'projects') MainContent = <Projects />;
  else if (section === 'skills') MainContent = <Skills />;
  else if (section === 'contact') MainContent = <Contact />;
  else MainContent = <Home />;

  /**
   * RENDERIZADO CONDICIONAL: PANTALLA SPLASH
   * Si showSplash es true, muestra solo la pantalla de carga
   */
  if (showSplash) return <Splash onContinue={() => setShowSplash(false)} />;

  /**
   * RENDERIZADO PRINCIPAL DE LA APLICACIÓN
   * Layout completo con header, sidebar condicional y contenido principal
   */
  return (
    <>
      {/* HEADER GLOBAL - Siempre visible */}
      <AppHeader
        onNotificationClick={() => setShowNotifications(true)}
        onToggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)}
      />
      
      {/* PANEL DE NOTIFICACIONES - Overlay condicional */}
      {showNotifications && (
        <NotificationPanel
          notifications={notifications}
          onClose={() => setShowNotifications(false)}
          onNavigate={section => setSection(section)}
        />
      )}
      
      {/* LAYOUT PRINCIPAL - Sidebar + Contenido */}
      <div className="app-layout">
        {/* SIDEBAR - Visible según estado responsive */}
        {isSidebarVisible && (
          <SidebarLeft
            setSection={setSection}
            section={section}
            onToggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)}
          />
        )}
        
        {/* ÁREA DE CONTENIDO PRINCIPAL - Se adapta según visibilidad de sidebar */}
        <main className={`main-feed ${isSidebarVisible ? '' : 'collapsed'}`}>
          {MainContent}
        </main>
      </div>
    </>
  );
}

export default App;
