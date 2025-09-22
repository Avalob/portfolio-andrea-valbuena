import React from 'react';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

/**
 * COMPONENTE PROFILE
 * Renderiza la información personal del usuario en el portfolio
 * Incluye: avatar, nombre, biografía y métodos de contacto
 * Se utiliza como tarjeta de presentación principal
 */
export default function Profile() {
  /**
   * RENDERIZADO DEL COMPONENTE
   * Estructura de la tarjeta de perfil con información personal y contacto
   */
  return (
    <div className="profile-wrapper">
      <div className="profile">
        
        {/* AVATAR DEL USUARIO - Imagen de perfil con estilos de recorte optimizados */}
        <img 
          src={process.env.PUBLIC_URL + "/avatar.png"} 
          alt="Avatar de Andrea Valbuena" 
          className="profile-avatar" 
        />
        
        {/* INFORMACIÓN PERSONAL - Datos principales del usuario */}
        <div className="profile-info">
          {/* Nombre completo */}
          <h2 className="profile-name">Andrea Valbuena</h2>
          
          {/* Handle/username para redes sociales */}
          <p className="profile-username">@avalob</p>
          
          {/* Biografía profesional - Descripción de habilidades y enfoque */}
          <p className="profile-bio">
            Desarrolladora Full Stack especializada en aplicaciones web modernas y funcionales. Combino creatividad y organización para entregar proyectos intuitivos y visualmente atractivos, siempre aprendiendo y aportando en equipo.
          </p>
          
          {/* MÉTODOS DE CONTACTO - Enlaces directos para comunicación */}
          <div className="profile-contact">
            {/* Botón de email con icono */}
            <a href="mailto:andreavallob22@gmail.com" className="btn">
              <MdOutlineEmail className="contact-icon" /> Email
            </a>
            
            {/* Botón de teléfono con icono */}
            <a href="tel:+34666926010" className="btn">
              <FaPhone className="contact-icon" /> Llamar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}