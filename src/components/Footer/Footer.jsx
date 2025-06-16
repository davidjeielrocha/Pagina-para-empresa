import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-contact">
          <h4>{import.meta.env.VITE_COMPANY_NOME}</h4>
          <p>{import.meta.env.VITE_COMPANY_ENDERECO}</p>
          <p>{import.meta.env.VITE_COMPANY_EMAIL}</p>
        </div>
        <div className="footer-social">
          <h4>Siga-nos</h4>
          <a href={`#${import.meta.env.VITE_COMPANY_INSTA}`} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={`#${import.meta.env.VITE_COMPANY_FACE}`} target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} {import.meta.env.VITE_COMPANY_NOME}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;