import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <div className="contact-wrapper">
          <div className="contact-form">
            <h3>Envie uma Mensagem</h3>
            <form>
              <input type="text" placeholder="Seu Nome" required />
              <input type="email" placeholder="Seu E-mail" required />
              <textarea placeholder="Sua Mensagem" rows="5" required></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
          <div className="contact-info">
            <h3>Ou Fale Conosco Diretamente</h3>
            <p><strong>Telefone:</strong> {"(11) 99999-9999"}</p>
            <p><strong>E-mail:</strong> {"contato@clinicaaguiar.com"}</p>
            <a 
              href={`https://api.whatsapp.com/send?phone=${"(11) 99999-9999"}&text=Olá, gostaria de mais informações sobre os serviços da ${"Clínica Odontológica Aguiar"}.`}
              className="whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;