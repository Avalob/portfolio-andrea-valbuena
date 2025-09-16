import React, { useState } from 'react';
import './App.css';
import SidebarLeft from './components/Sidebar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Splash from './components/Splash'
import { BiBell, BiLogoGithub, BiLogoLinkedin, BiLogoBehance } from 'react-icons/bi';

function AppHeader({ onNotificationClick, onToggleSidebar }) {
  return (
    <header className="Header">
      <div className="Header-index">
        <button className="toggle-sidebar" onClick={onToggleSidebar} aria-label="Abrir/cerrar menú de navegación">☰</button>
        <img src={process.env.PUBLIC_URL + '/logo1.png'} alt="Logo" className="Header-logo" />
        <span className="Header-title">Mi Portfolio</span>
        <div className="Header-socials">
          <a href="https://github.com/Avalob" target="_blank" rel="noopener noreferrer" className="icon-link">
            <BiLogoGithub className="icon-social" />
          </a>
          <a href="https://es.linkedin.com/in/andreavalbuenalobaton" target="_blank" rel="noopener noreferrer" className="icon-link">
            <BiLogoLinkedin className="icon-social" />
          </a>
          <a href="https://www.behance.net/andreavalbuena" target="_blank" rel="noopener noreferrer" className="icon-link">
            <BiLogoBehance className="icon-social-BiLogoBehance" />
          </a>
        </div>
      </div>

      <div className="header-actions">
        <button className="icon-button" title="Notificaciones" onClick={onNotificationClick}>
          <BiBell className="icon-notifications" />
        </button>
  
      </div>
    </header>
  );
}

function NotificationPanel({ notifications, onClose, onNavigate }) {
  return (
    <div className="notification-panel">
      <button className="close-button" onClick={onClose}>×</button>
      <h3>Notificaciones</h3>
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

function App() {
  const [section, setSection] = useState('home');
  const [showSplash, setShowSplash] = useState(true);
  const [showNotifications, setShowNotifications] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(() => window.innerWidth > 768);

  const notifications = [
    { message: 'Nueva skill aprendida: React Hooks', link: '#skills' },
    { message: 'Nuevo proyecto añadido: Portfolio Web', link: '#projects' },
  ];

  let MainContent;
  if (section === 'projects') MainContent = <Projects />;
  else if (section === 'skills') MainContent = <Skills />;
  else if (section === 'contact') MainContent = <Contact />;
  else MainContent = <Home />;

  if (showSplash) return <Splash onContinue={() => setShowSplash(false)} />;

  return (
    <>
      <AppHeader
        onNotificationClick={() => setShowNotifications(true)}
        onToggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)}
      />
      {showNotifications && (
        <NotificationPanel
          notifications={notifications}
          onClose={() => setShowNotifications(false)}
          onNavigate={section => setSection(section)}
        />
      )}
      <div className="app-layout">
        {isSidebarVisible && (
          <SidebarLeft
            setSection={setSection}
            section={section}
            onToggleSidebar={() => setIsSidebarVisible(!isSidebarVisible)}
          />
        )}
        <main className={`main-feed ${isSidebarVisible ? '' : 'collapsed'}`}>
          {MainContent}
        </main>
      </div>
    </>
  );
}

export default App;
