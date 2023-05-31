import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Menu = ({ entrantes, platoPrincipal, platoEspecial, postre, pizzas }) => {
  const { t, i18n } = useTranslation();

  // const todoEntrantes = entrantes;
  // const todoPlatoPrincipal = platoPrincipal;
  // const todoPlatoEspecial = platoEspecial;
  // const todoPostre = postre;
  // const todoPizzas = pizzas;

  const [mostrarEntrantes, setEntrantes] = useState(false);
  const [mostrarPlatoPrincipal, setPlatoPrincipal] = useState(false);
  const [mostrarPlatoEspecial, setPlatoEspecial] = useState(false);
  const [mostrarPostre, setPostre] = useState(false);
  const [mostrarPizzas, setPizzas] = useState(false);

  const abrirEntrantes = () => {
    setEntrantes(!mostrarEntrantes);
  };

  const abrirPlatoPrincipal = () => {
    setPlatoPrincipal(!mostrarPlatoPrincipal);
  };

  const abrirPlatoEspecial = () => {
    setPlatoEspecial(!mostrarPlatoEspecial);
  };

  const abrirPostre = () => {
    setPostre(!mostrarPostre);
  };

  const abrirPizzas = () => {
    setPizzas(!mostrarPizzas);
  };

  const menuData = {
    entrantes: entrantes[i18n.language],
    platoPrincipal: platoPrincipal[i18n.language],
    platoEspecial: platoEspecial[i18n.language],
    postre: postre[i18n.language],
    pizzas: pizzas[i18n.language],
  };

  console.log(menuData.entrantes.starters);

  return (
    <div className="main-menu">
      <div className="todoentrantes">
        <button onClick={abrirEntrantes}>
          <h1>{t("home-container.main-menu.entrantes")}</h1>
        </button>
        {mostrarEntrantes ? (
          <div className="entrantes">
            {menuData.entrantes.starters.map((entra) => {
              return (
                <div>
                  <br />
                  <hr />
                  <ul>
                    <h2 className="nom-pre" key={entra.id}>
                      {entra.name} <li className="precio">{entra.price}€</li>
                    </h2>
                    <p className="descrip">{entra.description}</p>
                  </ul>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="platoPrincipal">
        <button onClick={abrirPlatoPrincipal}>
          <h1>{t("home-container.main-menu.platoPrincipal")}</h1>
        </button>
        {mostrarPlatoPrincipal ? (
          <div className="platop">
            {menuData.platoPrincipal.maincourse.map((platop) => {
              return (
                <div>
                  <br />
                  <hr />
                  <ul>
                    <h2 className="nom-pre" key={platop.id}>
                      {platop.name}
                      <li>{platop.price}€</li>
                    </h2>
                    <p className="descrip">{platop.description}</p>
                  </ul>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="platoEspecial">
        <button onClick={abrirPlatoEspecial}>
          <h1>{t("home-container.main-menu.platoEspecial")}</h1>
        </button>
        {mostrarPlatoEspecial ? (
          <div className="platoEs">
            {menuData.platoEspecial.special.map((especial) => {
              return (
                <div>
                  <br />
                  <hr />
                  <ul>
                    <h2 className="nom-pre" key={especial.id}>
                      {especial.name}
                      <li>{especial.price}€</li>
                    </h2>
                    <p className="descrip">{especial.description}</p>
                  </ul>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="pizzas">
        <button onClick={abrirPizzas}>
          <h1>{t("home-container.main-menu.pizzas")}</h1>
        </button>
        {mostrarPizzas ? (
          <div className="pizza">
            {menuData.pizzas.pizzas.map((pizza) => {
              return (
                <div>
                  <br />
                  <hr />
                  <ul>
                    <h2 className="nom-pre" key={pizza.id}>
                      {pizza.name} <li>{pizza.price}€</li>
                    </h2>
                    <p className="decrip">{pizza.description}</p>
                  </ul>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="postre">
        <button onClick={abrirPostre}>
          <h1>{t("home-container.main-menu.postre")}</h1>
        </button>
        {mostrarPostre ? (
          <div className="postr">
            {menuData.postre.desserts.map((postre) => {
              return (
                <div>
                  <br />
                  <hr />
                  <ul>
                    <h2 className="nom-pre" key={postre.id}>
                      {postre.name}
                      <li>{postre.price}€</li>
                    </h2>
                    <p className="descrip">{postre.description}</p>
                  </ul>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Menu;
