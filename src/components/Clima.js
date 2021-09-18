import React from "react";
import PropTypes from "prop-types";

export const Clima = ({ resultado }) => {
  //estraer los valores

  const { name, main } = resultado;

  if (!name) return null;

  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {name} es: </h2>
        <p className="temperatura">
          {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
        </p>
        <p>
          Temperatura Máxima:
          {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
        </p>
        <p>
          Temperatura Minima:
          {parseFloat(main.temp - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
        </p>
      </div>
    </div>
  );
};

Clima.protTypes = {
  resultado: PropTypes.object.isRequired,
};
