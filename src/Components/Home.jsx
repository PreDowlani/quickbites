import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../Data/imagenes";
import { Link } from "react-router-dom";

const Home = () => {
  // // Configurar las opciones del carrusel
  // const settings = {
  //   dots: true, // Mostrar puntos de navegación
  //   infinite: true, // Habilitar el desplazamiento infinito
  //   speed: 500, // Velocidad de transición en milisegundos
  //   slidesToShow: 3, // Número de imágenes a mostrar por pantalla
  //   slidesToScroll: 1, // Número de imágenes a desplazar por cada click
  // };

  const [sliderSettings, setSliderSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth <= 462) {
        setSliderSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        });
      } else if (windowWidth >= 463 && windowWidth <= 850) {
        setSliderSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        });
      } else {
        setSliderSettings({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
        });
      }
    };

    handleResize();

    const resizeListener = window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <div className="home-container">
      <div className="name">
        <h1>Quick Bites</h1>
        <p>Unique & Trendy</p>
      </div>
      <div className="aboutus">
        <h2>Experimenta el Sabor de la Comida Casera</h2>
        <p>
          En Quick Bites, nos apasiona ofrecer una experiencia única de comida
          casera y una variedad de comida callejera asiática y europea. Nuestro
          objetivo principal es deleitar tu paladar con sabores auténticos y
          platos preparados con ingredientes frescos y de alta calidad. Desde
          jugosas hamburguesas hasta deliciosos cuencos de fideos y sándwiches
          gourmet, nuestro menú tiene algo para todos. Nos enorgullece colaborar
          con proveedores locales y ofrecer opciones vegetarianas y veganas. Ven
          y disfruta de una experiencia culinaria rápida pero llena de sabor en
          Quick Bites. ¡Esperamos darte la bienvenida con los brazos abiertos!
        </p>
        <br />
        <p>
          Nos enorgullece ofrecer una experiencia culinaria única con nuestra
          comida casera y variedades de comida callejera. Nuestro objetivo es
          brindarte platos sabrosos y auténticos preparados con ingredientes
          frescos y de alta calidad. Desde apetitosas hamburguesas hasta cuencos
          de fideos asiáticos y sándwiches gourmet, tenemos opciones para
          satisfacer todos los gustos. Trabajamos con proveedores locales y
          ofrecemos opciones vegetarianas y veganas.
        </p>
      </div>
      <div className="galeria">
        <Slider className="slider" {...sliderSettings}>
          {images.map((image) => (
            <div key={image.id} className="some-pics">
              <img src={image.src} alt="todo" height="300px" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="footer">
        <h2>© Quick Bites</h2>
        <p>
          Todos los derechos reservados. | Para obtener más información,{" "}
          <Link to={"/contact"}>Haz clic aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
