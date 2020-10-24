import React, { useState } from "react";
import Error from "./Error";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const Formulario = ({setGasto, setCrearGasto}) => {
  const [nombreGasto, setNombreGasto] = useState("");
  const [cantidadGasto, setCantidadGasto] = useState(0);
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar
    if (
      nombreGasto.trim() === "" ||
      cantidadGasto <= 0 ||
      isNaN(cantidadGasto)
    ) {
      setError(true);
      return;
    }

    // Eliminar mensaje
    setError(false);

    // Crear gasto
    const gasto = {
      nombre: nombreGasto,
      cantidad: cantidadGasto,
      id: nanoid()
    }

    // Pasar gasto al componente principal
    setGasto(gasto);
    setCrearGasto(true);

    // Resetear el fomulario
    setNombreGasto('');
    setCantidadGasto(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? (
        <Error mensaje="El nombre del gasto no puede estar vacio y el gasto no puede ser menor a 1" />
      ) : null}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          className="u-full-width"
          onChange={(e) => setNombreGasto(e.target.value)}
          placeholder="ej. Transporte"
          type="text"
          value={nombreGasto}
        />
      </div>

      <div className="campo">
        <label>Cantidad Gasto</label>
        <input
          className="u-full-width"
          onChange={(e) => setCantidadGasto(Number(e.target.value))}
          type="number"
          value={cantidadGasto}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar Gasto"
      />
    </form>
  );
};

Formulario.protoTypes = {
  setGasto: PropTypes.func.isRequired,
  setCrearGasto: PropTypes.func.isRequired
}

export default Formulario;
