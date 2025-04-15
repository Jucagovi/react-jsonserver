import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProveedorPeliculas from "./contexts/ProveedorPeliculas.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProveedorPeliculas>
      <App />
    </ProveedorPeliculas>
  </StrictMode>
);
