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

  useEffect(() => {
    traerDatos("http://localhost:3000/peliculas", setPeliculas);
    traerDatos("http://localhost:3000/actores", setInterpretes);
  }, []);

  return (
    <>
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
      {console.log(peliculas.length)}
      {console.log(interpretes.length)}
    </>
  );
}

export default App;
