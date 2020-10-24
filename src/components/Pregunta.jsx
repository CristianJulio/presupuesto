import React, { useState } from "react";
import Error from "./Error";
import PropTypes from 'prop-types';

const Pregunta = ({ setPresupuesto, setRestante }) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const definirPresupuesto = (e) => {
    setCantidad(Number(e.target.value));
  };
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    if (cantidad <= 0 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    // Después de validar
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
  };

  return (
    <>
      <h2>Ingresa tu presupuesto semanal</h2>

      {error ? (
        <Error mensaje="Hubo un error al ingresar el presupuesto" />
      ) : null}

      <form onSubmit={agregarPresupuesto}>
        <input
          className="u-full-width"
          type="number"
          onChange={definirPresupuesto}
        />

        <input
          className="u-full-width button-primary"
          type="submit"
          value="Definir presupuesto"
        />
      </form>
    </>
  );
};

Pregunta.propTypes = {
  setPresupuesto: PropTypes.func.isRequired,
  setRestante: PropTypes.func.isRequired
}

export default Pregunta;
