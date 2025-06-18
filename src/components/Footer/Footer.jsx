import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-contact">
          <h4>{"Clínica Odontológica Aguiar"}</h4>
          <p>{"Endereço de testes"}</p>
          <p>{"contato@clinicaaguiar.com"}</p>
        </div>
        <div className="footer-social">
          <h4>Siga-nos</h4>
          <a href={`#${"Endereço do Instagram"}`} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={`#${"Endereço do Facebook"}`} target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} {"Clínica Odontológica Aguiar"}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;