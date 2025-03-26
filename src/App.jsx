import { useEffect, useState } from "react";
import Pelicula from "./components/Pelicula.jsx";
import Interprete from "./components/Interprete.jsx";
import "./App.css";

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [interpretes, setInterpretes] = useState([]);
  const [errorGeneral, setErrorGeneral] = useState("");

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
      nombre: "Sin Nombre",
      apellidos: "Sin apellidos",
      fecha_nacimiento: "000-00-00",
      url_imagen: "https://picsum.photos/300/400/?random=54",
      biografia: "Actor conocido por una película",
    };
  };

  //console.log(crearInterprete());

  const insertarInterprete = () => {
    fetch("http://localhost:3000/actores", {
      method: "POST",
      body: JSON.stringify(crearInterprete()),
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
