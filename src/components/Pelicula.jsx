import React from "react";

const Pelicula = (props) => {
  const { id, titulo, director, genero } = props.datos;
  return (
    <div>
      <h3>
        {id} - {titulo} Dirigida por {director} ({genero})
      </h3>
    </div>
  );
};

export default Pelicula;
