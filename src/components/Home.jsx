import React, { useState } from 'react';
import Profile from './Profile';
import SocialFeed from './SocialFeed';

// Componente principal de la pantalla de inicio
export default function Home() {
  const [section, setSection] = useState('home');

  return (
    <div className="home">
      {/* Perfil del usuario */}
      <Profile>
        <p>Desarrolladora de aplicaciones multiplataforma con formación en DAM y conocimientos en Java, SQL, JavaScript, Git y React. Me apasiona crear soluciones tecnológicas, aprender de manera continua y aportar en proyectos colaborativos, combinando organización y capacidad de resolución de problemas.</p>
      </Profile>

      {/* Contenido dinámico basado en la sección activa */}
      <main>
        {section === 'home' && (
          <div className="box">
            <h2 className="section-title">Sobre mí</h2>
            <SocialFeed />
          </div>
        )}
        {section === 'projects' && (
          <div className="box">
            <h2 className="section-title">Proyectos</h2>
            <p>Aquí están mis proyectos destacados.</p>
          </div>
        )}
        {section === 'skills' && (
          <div className="box">
            <h2 className="section-title">Habilidades</h2>
            <p>Estas son mis habilidades principales.</p>
          </div>
        )}
        {section === 'contact' && (
          <div className="box">
            <h2 className="section-title">Contacto</h2>
            <p>Puedes contactarme a través de correo o teléfono.</p>
          </div>
        )}
      </main>
    </div>
  );
}
