import React from 'react';
import  clareamento from '../../assets/clareamento-dental.jpg';
import  implante from '../../assets/implante-dentario.jpg';
import aparelho from '../../assets/aparelho-ortodontico.jpg';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section pb-2">
      <div className="container">
        <h2 className="section-title">Resultados que Inspiram Confiança</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">
            <img src={clareamento} alt="Resultado de clareamento dental" />
            <div className="portfolio-caption">Clareamento Dental</div>
          </div>
          <div className="portfolio-item">
            <img src={implante} alt="Resultado de implante" />
            <div className="portfolio-caption">Implante Dentário</div>
          </div>
           <div className="portfolio-item">
            <img src={aparelho} alt="Resultado de ortodontia" />
            <div className="portfolio-caption">Aparelho Ortodôntico</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;