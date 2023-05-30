import React from "react";

const Contact = () => {
  return (
    <div className="contacto">
      <div className="contact">
        <h1>Contáctanos :</h1>
      </div>
      <div className="info">
        <h1>Quick Bites</h1>
        <h3>Dirección: Calle Principal 123, Ciudad, Estado 12345</h3>
        <h3>Teléfono: (555) 123-4567</h3>
        <h3>Email: info@deliciousbites.com</h3>
        <div className="timings">
          <ul>Horarios de apertura:</ul>
          <li>Lunes a Viernes: 11:00 am - 10:00 pm</li>
          <li>Sábado y Domingo: 12:00 pm - 11:00 pm</li>
        </div>
      </div>
    </div>
  );
};

export default Contact;
