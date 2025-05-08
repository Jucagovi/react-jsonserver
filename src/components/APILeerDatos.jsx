import React from "react";
import "./APILeerDatos.css";
import ListadoPeliculas from "./ListadoPeliculas.jsx";
import ListadoInterpretes from "./ListadoInterpretes.jsx";

const APILeerDatos = () => {
  return (
    <>
      <div className='APILeerDatos-contenedor'>
        <ListadoPeliculas />
        <ListadoInterpretes />
      </div>
    </>
  );
};

export default APILeerDatos;
