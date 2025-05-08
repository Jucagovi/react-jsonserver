import React, { useContext } from "react";
import Pelicula from "./Pelicula.jsx";
import { contextoPeliculas } from "../contexts/ProveedorPeliculas.jsx";

const ListadoPeliculas = () => {
  const { peliculas } = useContext(contextoPeliculas);
  return (
    <>
      <div>
        <h2>Listado de películas.</h2>
        <div>
          {peliculas.length
            ? peliculas.map((peli) => {
                return <Pelicula key={peli.id} datos={peli} />;
              })
            : "No se han encontrado películas."}
        </div>
      </div>
    </>
  );
};

export default ListadoPeliculas;
