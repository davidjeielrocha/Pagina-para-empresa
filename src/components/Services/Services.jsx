import React from 'react';
import './Services.css';

const servicesData = [
  { title: 'Ortodontia', description: 'Correção da posição dos dentes e dos ossos maxilares.' },
  { title: 'Implantes Dentários', description: 'Soluções permanentes para a substituição de dentes perdidos.' },
  { title: 'Clareamento Dental', description: 'Tratamentos a laser e caseiros para um sorriso mais branco.' },
  { title: 'Endodontia', description: 'Tratamento de canal para salvar dentes danificados.' },
  { title: 'Odontopediatria', description: 'Cuidado especializado para a saúde bucal de crianças.' },
  { title: 'Harmonização Orofacial', description: 'Procedimentos estéticos para equilibrar o rosto e o sorriso.' }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Nossos Serviços</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;