import React from 'react';
import './Hero.css';
import consultorio from '../../assets/consultorio-odontologico.jpg';

const Hero = () => {
  return (
    <section className="hero-section" 
      style={{
          backgroundImage: `url(${consultorio})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '400px', 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff'
      }}
    >
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h2>Transformando sorrisos, cuidando de você.</h2>
        <p>
          Bem-vindo à {"Clínica Odontológica Aguiar"}, onde a excelência em tratamentos encontra um atendimento humano e personalizado. Nossa equipe está pronta para oferecer a melhor experiência em saúde bucal.
        </p>
        <a 
          href={`https://api.whatsapp.com/send?phone=${"(11) 99999-9999"}&text=Olá, gostaria de agendar uma consulta online. Por favor, me envie mais informações.`}
          className="cta-button" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Agende sua Consulta Online
        </a>
      </div>
    </section>
  );
};

export default Hero;