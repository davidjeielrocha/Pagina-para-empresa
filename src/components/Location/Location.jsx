import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <section id="location" className="location-section pb-4">
      <div className="container">
        <h2 className="section-title">Nossa Localização</h2>
        <p className="address">
          Endereço: {"Endereço de testes"}
        </p>
        <div className="map-container">
          {/* Instrução: Vá ao Google Maps, pesquise seu endereço, clique em "Compartilhar" > "Incorporar um mapa" e copie o código do iframe aqui. */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.029415881028!2d-47.929229885145!3d-15.80805198906915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3b2a59a5d5f9%3A0x6b4c5d5d5d5d5d5d!2sInstituto%20de%20Educa%C3%A7%C3%A3o%20Superior%20de%20Bras%C3%ADlia%20(IESB)!5e0!3m2!1spt-BR!2sbr!4v1622666666666!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Localização da ${"Endereço de testes"}`}
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Location;