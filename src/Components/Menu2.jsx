import { useState } from "react";
import React from "react";

const Menu2 = ({ starters, maincourse, special, dessert, pizzas2 }) => {
  const allStarters = starters;
  const allMainCourse = maincourse;
  const allSpecial = special;
  const allDesert = dessert;
  const AllPizzas = pizzas2;

  const [showStarters, setStarters] = useState(false);
  const [showMainCourse, setMainCourse] = useState(false);
  const [showSpecial, setSpecial] = useState(false);
  const [showDessert, setDessert] = useState(false);
  const [showPizzas, setPizzas] = useState(false);

  const abrirEntrantes = () => {
    setStarters(!showStarters);
  };

  const abrirPlatoPrincipal = () => {
    setMainCourse(!showMainCourse);
  };

  const abrirPlatoEspecial = () => {
    setSpecial(!showSpecial);
  };

  const abrirPostre = () => {
    setDessert(!showDessert);
  };

  const abrirPizzas = () => {
    setPizzas(!showPizzas);
  };

  return (
    <div className="main-menu">
      <div className="todoentrantes">
        <button onClick={abrirEntrantes}>
          <h1>Starters</h1>
        </button>
        {showStarters ? (
          <div className="entrantes">
            {allStarters.map((entra) => {
              return (
                <div>
                  <br />
                  <hr />
                  <ul>
                    <h2 className="nom-pre" key={entra.id}>
                      {entra.name} <li className="precio">{entra.precio}€</li>
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
          <h1>Main Course</h1>
        </button>
        {showMainCourse ? (
          <div className="platop">
            {allMainCourse.map((platop) => {
              return (
                <div>
                  <br />
                  <hr />
                  <ul>
                    <h2 className="nom-pre" key={platop.id}>
                      {platop.name}
                      <li>{platop.precio}€</li>
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
          <h1>Special Homemade Dishes</h1>
        </button>
        {showSpecial ? (
          <div className="platoEs">
            {allSpecial.map((especial) => {
              return (
                <div>
                  <br />
                  <hr />
                  <ul>
                    <h2 className="nom-pre" key={especial.id}>
                      {especial.name}
                      <li>{especial.precio}€</li>
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
          <h1>Our Pizzas</h1>
        </button>
        {showPizzas ? (
          <div className="pizza">
            {AllPizzas.map((pizza) => {
              return (
                <div>
                  <br />
                  <hr />
                  <ul>
                    <h2 className="nom-pre" key={pizza.id}>
                      {pizza.name} <li>{pizza.precio}€</li>
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
          <h1>Desserts</h1>
        </button>
        {showDessert ? (
          <div className="postr">
            {allDesert.map((postre) => {
              return (
                <div>
                  <br />
                  <hr />
                  <ul>
                    <h2 className="nom-pre" key={postre.id}>
                      {postre.name}
                      <li>{postre.precio}€</li>
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

export default Menu2;
