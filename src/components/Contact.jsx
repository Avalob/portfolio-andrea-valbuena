import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [messages, setMessages] = useState([
    { from: 'bot', text: '¡Hola! 👋 ¿Quieres contactar comigo?' },
  ]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setMessages([
      ...messages,
      { from: 'user', text: `${form.name} (${form.email}): ${form.message}` },
    ]);
    emailjs
      .send(
        'service_4ggfl6r',
        'template_uvsjcl5',
        { name: form.name, email: form.email, message: form.message },
        'FxUWVTdKBWSYfkWEz'
      )
      .then(
        () =>
          setMessages((msgs) => [
            ...msgs,
            { from: 'bot', text: '¡Mensaje enviado! Te responderé pronto ✨' },
          ]),
        () =>
          setMessages((msgs) => [
            ...msgs,
            { from: 'bot', text: 'Hubo un error al enviar el mensaje 😢' },
          ])
      );
    setForm({ ...form, message: '' });
  };

  return (
    <section className="contact box">
      <h2 className="section-title">Contacto</h2>
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
      <div className="chat-input">
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          rows="2"
          name="message"
          placeholder="Escribe tu mensaje..."
          value={form.message}
          onChange={handleChange}
        ></textarea>
        <button className="btn" onClick={handleSend}>
          Enviar
        </button>
      </div>
    </section>
  );
}
