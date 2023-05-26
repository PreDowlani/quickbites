import React from "react";

const Contact = () => {
  return (
    <div className="contacto">
      <div className="contact">
        <h1>Contact us :</h1>
      </div>
      <div className="info">
        <h1>Quick Bites</h1>
        <h3>Adress : 123 Main Street, Cityville, State 12345</h3>
        <h3>Phone Number: (555) 123-4567</h3>
        <h3>Email: info@deliciousbites.com</h3>
        <div className="timings">
          <ul>Opening Hours:</ul>
          <li>Monday to Friday: 11:00 am - 10:00 pm</li>
          <li>Saturday and Sunday: 12:00 pm - 11:00 pm</li>
        </div>
      </div>
    </div>
  );
};

export default Contact;
