import React, { createContext, useState, useEffect } from "react";
import {
  obtenerNombreAleatorio,
  obtenerApellidoAleatorio,
  obtenerFechaNacimientoAleatoria,
  nombresLista,
  apellidosLista,
  obtenerNumeroAleatorio,
} from "../library/generadores.js";

const contextoPeliculas = createContext();

const ProveedorPeliculas = ({ children }) => {
  // Estados para la aplicación.
  const [peliculas, setPeliculas] = useState([]);
  const [interpretes, setInterpretes] = useState([]);
  const [errorGeneral, setErrorGeneral] = useState("");

  // Función para traer datos de la API y modificar un estado.
  const traerDatos = (URL, setter) => {
    fetch(URL, { method: "GET" })
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        setter(datos);
      })
      .catch((error) => {
        setErrorGeneral(error);
      });
  };

  // Función para crear un/a intérepete aleatorio/a.
  const crearInterprete = () => {
    return {
      id: crypto.randomUUID(),
      nombre: obtenerNombreAleatorio(nombresLista),
      apellidos: `${obtenerApellidoAleatorio(
        apellidosLista
      )} ${obtenerApellidoAleatorio(apellidosLista)}`,
      fecha_nacimiento: obtenerFechaNacimientoAleatoria(),
      url_imagen: `https://picsum.photos/300/400/?random=${obtenerNumeroAleatorio(
        1,
        600
      )}`,
      biografia: "Actor conocido por una película",
    };
  };

  const insertarInterprete = () => {
    console.log("Intentando insertar un intérprete.");
    fetch("http://localhost:3000/actores", {
      method: "POST", // <-- Cambio de método.
      body: JSON.stringify(crearInterprete()), // <-- Datos a insertar.
      headers: { "Content-Type": "application/json" },
    })
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        console.log("Éxito");
        /**
         * Se añade el intérprete nuevo al estado.
         * Es posible abordar esta acción de dos formas en función de la aplicación:
         *    a) añadiéndolo directamente al estado y evitar así una llamada a la API,
         *    b) volviendo a llamar a la APi y reemplazar todos los datos de estado actual.
         * Se ha optado por la primera opción para esta aplicación.
         */
        setInterpretes([...interpretes, datos]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const borrarInterprete = (identificador) => {
    console.log(
      `Intentando borrar al intérprete con identificador ${identificador}`
    );
    fetch(`http://localhost:3000/actores/${identificador}`, {
      method: "DELETE", // <-- Cambio de método.
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        console.log("Éxito");
        /**
         * Al igual que en el caso anterior, es posible modificar el estado
         * u obtener de nuevo los datos de la API (ya que han cambiado).
         * Se ha optado, de nuevo, por la primera opción.
         * Se usa filter para eliminar los datos del estado actual.
         */
        const _interpretes_temporal = interpretes.filter((interprete) => {
          //Devuelve los elementos que tienen distinto identificador.
          return interprete.id !== identificador;
        });
        setInterpretes(_interpretes_temporal);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const actualizarInterprete = (interprete) => {
    console.log("Intentando actualizar intérprete.");
    fetch(`http://localhost:3000/actores/${interprete.id}`, {
      method: "PATCH", // <-- Cambio de método. PUT actualiza todo el registro y PATCH sólo lo que cambia.
      body: JSON.stringify(interprete), // <-- Datos a actualizar.
      headers: { "Content-Type": "application/json" },
    })
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((datos) => {
        console.log("Éxito");
        /**
         * Como siempre, dos formas de abordar la actualización del estado.
         * Esta vez se optará por la segunda (traer los datos del servidor)
         * para disponer de un ejemplo de uso.
         */
        traerDatos("http://localhost:3000/actores", setInterpretes);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    /**
     * Se obtienen los datos al inicio de la aplicación para
     * que estén disponibles para el resto de componentes.
     */
    traerDatos("http://localhost:3000/peliculas", setPeliculas);
    traerDatos("http://localhost:3000/actores", setInterpretes);
  }, []);

  const datosExportar = {
    peliculas,
    interpretes,
    errorGeneral,
    crearInterprete,
    insertarInterprete,
    borrarInterprete,
    actualizarInterprete,
  };
  return (
    <contextoPeliculas.Provider value={datosExportar}>
      {children}
    </contextoPeliculas.Provider>
  );
};

export default ProveedorPeliculas;
export { contextoPeliculas };
