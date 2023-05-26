import React, { useState } from "react";

const Menu = ({ entrantes, platoPrincipal, platoEspecial, postre }) => {
  const todoEntrantes = entrantes;
  const todoPlatoPrincipal = platoPrincipal;
  const todoPlatoEspecial = platoEspecial;
  const todoPostre = postre;

  const [mostrarEntrantes, setEntrantes] = useState(false);
  const [mostrarPlatoPrincipal, setPlatoPrincipal] = useState(false);
  const [mostrarPlatoEspecial, setPlatoEspecial] = useState(false);
  const [mostrarPostre, setPostre] = useState(false);

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

  return (
    <div className="main-menu">
      <div className="todoentrantes">
        <button onClick={abrirEntrantes}>
          <h1>Entrantes</h1>
        </button>
        {mostrarEntrantes ? (
          <div className="entrantes">
            {todoEntrantes.map((entra) => {
              return (
                <div>
                  <hr />
                  <ul>
                    <h2 className="nom-pre">
                      {entra.nombre} <li className="precio">{entra.precio}€</li>
                    </h2>
                    <p className="descrip">{entra.descripcion}</p>
                  </ul>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="platoPrincipal">
        <button onClick={abrirPlatoPrincipal}>
          <h1>Plato Principal</h1>
        </button>
        {mostrarPlatoPrincipal ? (
          <div className="platop">
            {todoPlatoPrincipal.map((platop) => {
              return (
                <div>
                  <hr />
                  <ul>
                    <h2 className="nom-pre">
                      {platop.nombre}
                      <li>{platop.precio}€</li>
                    </h2>
                    <p className="descrip">{platop.descripcion}</p>
                  </ul>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="platoEspecial">
        <button onClick={abrirPlatoEspecial}>
          <h1>Platos Especial de la Casa</h1>
        </button>
        {mostrarPlatoEspecial ? (
          <div className="platoEs">
            {todoPlatoEspecial.map((especial) => {
              return (
                <div>
                  <hr />
                  <ul>
                    <h2 className="nom-pre">
                      {especial.nombre}
                      <li>{especial.precio}€</li>
                    </h2>
                    <p className="descrip">{especial.descripcion}</p>
                  </ul>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="postre">
        <button onClick={abrirPostre}>
          <h1>Postres</h1>
        </button>
        {mostrarPostre ? (
          <div className="postr">
            {todoPostre.map((postre) => {
              return (
                <div>
                  <hr />
                  <ul>
                    <h2 className="nom-pre">
                      {postre.nombre}
                      <li>{postre.precio}€</li>
                    </h2>
                    <p className="descrip">{postre.descripcion}</p>
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
