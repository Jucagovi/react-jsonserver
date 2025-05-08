import React, { useContext } from "react";
import { contextoPeliculas } from "../contexts/ProveedorPeliculas.jsx";
import ListadoInterpretes from "./ListadoInterpretes";

const APIInsertarDatos = () => {
  const { insertarInterprete } = useContext(contextoPeliculas);
  return (
    <>
      <h2>Inserción de datos en una API.</h2>
      <button
        onClick={() => {
          insertarInterprete();
        }}
      >
        Añadir intérprete al servidor
      </button>
      <ListadoInterpretes />
    </>
  );
};

export default APIInsertarDatos;
