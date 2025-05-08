import React, { useContext } from "react";
import Interprete from "./Interprete.jsx";
import { contextoPeliculas } from "../contexts/ProveedorPeliculas.jsx";

const ListadoInterpretes = () => {
  const { interpretes } = useContext(contextoPeliculas);
  return (
    <>
      <div>
        <h2>Listado de intépretes.</h2>
        {interpretes.length
          ? interpretes.map((interprete) => {
              return <Interprete key={interprete.id} datos={interprete} />;
            })
          : "No se han encontrado intérpretes"}
      </div>
    </>
  );
};

export default ListadoInterpretes;
