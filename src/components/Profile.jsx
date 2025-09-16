import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";



// Componente principal del perfil
export default function Profile() {
  return (
    <div className="profile-wrapper">
      <div className="profile">
        {/* Avatar del usuario */}
        <img src="./avatar.png" alt="Avatar" className="profile-avatar" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        {/* Información del usuario */}
        <div className="profile-info">
          <h2 className="profile-name">Andrea Valbuena</h2>
          <p className="profile-username">@avalob</p>
          <p className="profile-bio">
            Desarrolladora Full Stack especializada en aplicaciones web modernas y funcionales. Combino creatividad y organización para entregar proyectos intuitivos y visualmente atractivos, siempre aprendiendo y aportando en equipo.
          </p>
          {/* Botones de contacto */}
          <div className="profile-contact">
            <a href="mailto:andreavallob22@gmail.com" className="btn">
              <MdOutlineEmail style={{ marginRight: '8px' }} /> Email
            </a>
            <a href="tel:+34666926010" className="btn">
              <FaPhone style={{ marginRight: '8px' }} /> Llamar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}