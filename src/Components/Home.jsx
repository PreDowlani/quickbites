import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import images from "../Data/imagenes";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

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
        <h2>{t("home-container.aboutus.h2")}</h2>
        <p>{t("home-container.aboutus.p1")}</p>
        <br />
        <p>{t("home-container.aboutus.p2")}</p>
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
          {t("home-container.footer.p")}{" "}
          <Link to={"/contact"}>{t("home-container.footer.p2")}</Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
