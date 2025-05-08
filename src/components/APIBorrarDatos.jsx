import React, { useContext } from "react";
import ListadoInterpretes from "./ListadoInterpretes";
import { contextoPeliculas } from "../contexts/ProveedorPeliculas.jsx";

const APIBorrarDatos = () => {
  const { borrarInterprete } = useContext(contextoPeliculas);
  return (
    <>
      <h2>Borrar datos en un API.</h2>
      <button
        onClick={() => {
          borrarInterprete("d8d49b78-7abb-48b1-a839-2332014ea672");
        }}
      >
        Borrar intérprete del servidor
      </button>
      <ListadoInterpretes />
    </>
  );
};

export default APIBorrarDatos;
