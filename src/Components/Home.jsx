import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../Data/imagenes";
import { Link } from "react-router-dom";

const Home = () => {
  // Configurar las opciones del carrusel
  const settings = {
    dots: true, // Mostrar puntos de navegación
    infinite: true, // Habilitar el desplazamiento infinito
    speed: 500, // Velocidad de transición en milisegundos
    slidesToShow: 3, // Número de imágenes a mostrar por pantalla
    slidesToScroll: 1, // Número de imágenes a desplazar por cada clic
  };

  return (
    <div className="home-container">
      <div className="name">
        <h1>Quick Bites</h1>
        <p>Unique & Trendy</p>
      </div>
      <div className="aboutus">
        <h2>Experience The Taste Of Homemade Food </h2>
        <p>
          At Quick Bites, we are passionate about offering a unique experience
          of homemade food and a variety of Asian and European street food. Our
          main goal is to delight your taste buds with authentic flavors and
          dishes prepared with fresh, high-quality ingredients. From juicy
          burgers to delicious noodle bowls and gourmet sandwiches, our menu has
          something for everyone. We take pride in collaborating with local
          suppliers and providing vegetarian and vegan options. Come and enjoy a
          quick yet flavorful culinary experience at Quick Bites. We look
          forward to welcoming you with open arms!"
        </p>
        <br />
        <p>
          We take pride in offering a unique culinary experience with our
          homemade food and varieties of street food. Our aim is to provide you
          with tasty and authentic dishes prepared with fresh, high-quality
          ingredients. From mouthwatering burgers to Asian noodle bowls and
          gourmet sandwiches, we have options to cater to all tastes. We work
          with local suppliers and offer vegetarian and vegan choices.
        </p>
      </div>
      <div className="galeria">
        <Slider {...settings}>
          {images.map((image) => (
            <div key={image.id} className="some-pics">
              <img src={image.src} alt="todo" height="300px" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="footer">
        <h2>© Quick Bites </h2>
        <p>
          All Rights Reserved. | For more information{" "}
          <Link to={"/contact"}>Click here</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
