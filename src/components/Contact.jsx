/**
 * COMPONENTE CONTACT
 * Interfaz de contacto con estilo chat interactivo
 * Características: envío de emails vía EmailJS, validación de formularios, feedback en tiempo real
 * Simula una conversación con mensajes del bot y respuestas del usuario
 */

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

/**
 * COMPONENTE PRINCIPAL: CONTACT
 * Renderiza un sistema de chat para contacto con integración de EmailJS
 */
export default function Contact() {
  /**
   * ESTADOS DEL COMPONENTE
   * - form: datos del formulario (nombre, email, mensaje)
   * - messages: historial de mensajes del chat (bot y usuario)
   */
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [messages, setMessages] = useState([
    { from: 'bot', text: '¡Hola! 👋 ¿Quieres contactar comigo?' },
  ]);

  /**
   * FUNCIÓN: MANEJO DE CAMBIOS EN FORMULARIO
   * Actualiza el estado del formulario cuando el usuario escribe
   * @param {Event} e - Evento de cambio del input
   */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /**
   * FUNCIÓN: ENVÍO DE MENSAJE
   * Valida los datos, muestra el mensaje en el chat y envía email vía EmailJS
   * Proporciona feedback inmediato sobre el estado del envío
   */
  const handleSend = () => {
    // Validación: verifica que todos los campos estén completos
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    
    // Añade el mensaje del usuario al chat
    setMessages([
      ...messages,
      { from: 'user', text: `${form.name} (${form.email}): ${form.message}` },
    ]);
    
    // Envío del email usando EmailJS
    emailjs
      .send(
        'service_4ggfl6r',    // ID del servicio EmailJS
        'template_uvsjcl5',   // ID de la plantilla EmailJS
        { name: form.name, email: form.email, message: form.message },
        'FxUWVTdKBWSYfkWEz'   // Clave pública de EmailJS
      )
      .then(
        // Éxito: confirma el envío al usuario
        () =>
          setMessages((msgs) => [
            ...msgs,
            { from: 'bot', text: '¡Mensaje enviado! Te responderé pronto ✨' },
          ]),
        // Error: informa sobre el fallo
        () =>
          setMessages((msgs) => [
            ...msgs,
            { from: 'bot', text: 'Hubo un error al enviar el mensaje 😢' },
          ])
      );
    
    // Limpia solo el campo de mensaje para permitir enviar otro
    setForm({ ...form, message: '' });
  };

  /**
   * RENDERIZADO DEL COMPONENTE
   * Estructura del chat de contacto con historial y formulario
   */
  return (
    <section className="contact box">
      <h2 className="section-title">Contacto</h2>
      
      {/* VENTANA DE CHAT - Historial de mensajes entre bot y usuario */}
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-message ${msg.from === 'user' ? 'user' : 'bot'}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      
      {/* FORMULARIO DE ENTRADA - Campos para datos de contacto y mensaje */}
      <div className="chat-input">
        {/* Campo de nombre */}
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
        />
        
        {/* Campo de email */}
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={form.email}
          onChange={handleChange}
        />
        
        {/* Campo de mensaje (textarea para texto largo) */}
        <textarea
          rows="2"
          name="message"
          placeholder="Escribe tu mensaje..."
          value={form.message}
          onChange={handleChange}
        ></textarea>
        
        {/* Botón de envío */}
        <button className="btn" onClick={handleSend}>
          Enviar
        </button>
      </div>
    </section>
  );
}
