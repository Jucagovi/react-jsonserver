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
  const [cargando, setCargando] = useState("");

  // Función para traer datos de la API y modificar un estado.
  const traerDatos = (URL, setter) => {
    fetch(URL)
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
    fetch("http://localhost:3000/actores", {
      method: "POST", // <-- Cambio de método.
      body: JSON.stringify(crearInterprete()), // <-- Datos a insertar.
      headers: { "Content-Type": "application/json" },
    })
      .then((respuesta) => {
        return respuesta.json();
      })
      .catch((error) => {
        console.log(error);
      })
      .then((datos) => {
        console.log("Éxito");
      });
  };

  const borrarInterprete = (identificador) => {
    fetch(`http://localhost:3000/actores/${identificador}`, {
      method: "DELETE", // <-- Cambio de método.
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        console.log("Éxito");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const actualizarInterprete = (interprete) => {
    fetch(`http://localhost:3000/actores/${interprete.id}`, {
      method: "PATCH", // <-- Cambio de método. PUT actualiza todo el registro y PATCH sólo lo que cambia.
      body: JSON.stringify(interprete), // <-- Datos a actualizar.
      headers: { "Content-Type": "application/json" },
    })
      .then((respuesta) => {
        return respuesta.json();
      })
      .catch((error) => {
        console.log(error);
      })
      .then((datos) => {
        console.log("Éxito");
      });
  };

  useEffect(() => {
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
