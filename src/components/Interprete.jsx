import React from "react";

const Interprete = (props) => {
  const { nombre, apellidos } = props.datos;
  return (
    <div>
      <h3>
        {nombre} {apellidos}
      </h3>
    </div>
  );
};

export default Interprete;
