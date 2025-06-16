import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">O que Nossos Pacientes Dizem</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <blockquote>
              "Atendimento nota mil! A Dra. Larissa e sua equipe são extremamente profissionais e atenciosos. Recomendo de olhos fechados!"
            </blockquote>
            <p className="testimonial-author">- Maria S., Paciente de Ortodontia</p>
          </div>
          <div className="testimonial-card">
            <blockquote>
              "Eu tinha muito medo de dentista, mas a clínica mudou minha percepção. O tratamento de canal foi super tranquilo. Obrigado!"
            </blockquote>
            <p className="testimonial-author">- João P., Paciente de Endodontia</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;