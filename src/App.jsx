import { useContext, useEffect, useState } from "react";
import Pelicula from "./components/Pelicula.jsx";
import Interprete from "./components/Interprete.jsx";
import "./App.css";
import { contextoPeliculas } from "./contexts/ProveedorPeliculas.jsx";

function App() {
  const {
    insertarInterprete,
    borrarInterprete,
    actualizarInterprete,
    peliculas,
    interpretes,
  } = useContext(contextoPeliculas);

  const interprete = {
    id: "7875c83a-9b8c-4dc9-9e46-fd9a6d6161ed",
    nombre: "Francisco",
    apellidos: "Lucas ",
    fecha_nacimiento: "2010-11-11",
    url_imagen: "https://picsum.photos/300/400/?random=531",
    biografia: "Actor.",
  };

  return (
    <>
      <button
        onClick={() => {
          console.log("Intentando insertar un intérprete.");
          insertarInterprete();
        }}
      >
        Añadir intérprete al servidor
      </button>
      <button
        onClick={() => {
          console.log("Intentando borrar intérprete.");
          //borrarInterprete("622ff59d-3785-44cf-af42-b8013a8980fc");
        }}
      >
        Borrar intérprete del servidor
      </button>
      <button
        onClick={() => {
          console.log("Intentando actualizar intérprete.");
          actualizarInterprete(interprete);
        }}
      >
        Actualizar intérprete del servidor
      </button>
      <h2>Listado de películas.</h2>
      <div>
        {peliculas.length
          ? peliculas.map((peli) => {
              return <Pelicula key={peli.id} datos={peli} />;
            })
          : "No se han encontrado películas"}
      </div>
      <h2>Listado de intépretes.</h2>
      {interpretes.length
        ? interpretes.map((interprete) => {
            return <Interprete key={interprete.id} datos={interprete} />;
          })
        : "No se han encontrado intérpretes"}
    </>
  );
}

export default App;
