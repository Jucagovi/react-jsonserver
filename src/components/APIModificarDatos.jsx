import React, { useContext } from "react";
import ListadoInterpretes from "./ListadoInterpretes";
import { contextoPeliculas } from "../contexts/ProveedorPeliculas.jsx";

const APIModificarDatos = () => {
  const { actualizarInterprete } = useContext(contextoPeliculas);

  /**
   * Intérpete para modificar en la API.
   * Evidentemente esta acción se realiza a través de un formulario controlado
   * siguiendo estos pasos:
   *      -> se obtienen los datos del intérprete,
   *      -> se colocan en un estado,
   *      -> es estado controla un formulario en donde el
   *          usuario modificará los datos,
   *      -> una vez terminado, se envía ese estado al servidor.
   * No es el objetivo de este ejemplo, así que se ha simplificado su funcionamiento.
   */
  const interprete = {
    id: "9f4891a1-3019-4b0c-a2d9-f699c1bca681",
    nombre: "Feo",
    apellidos: "De Verdad",
    fecha_nacimiento: "2010-11-11",
    url_imagen: "https://picsum.photos/300/400/?random=531",
    biografia: "Actor muy feo.",
  };

  return (
    <>
      <h2>Modificar datos del servidor</h2>
      <button
        onClick={() => {
          actualizarInterprete(interprete);
        }}
      >
        Actualizar intérprete del servidor
      </button>
      <ListadoInterpretes />
    </>
  );
};

export default APIModificarDatos;
