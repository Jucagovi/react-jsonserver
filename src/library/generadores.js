const nombresLista = [
  "Ana",
  "María",
  "Pedro",
  "Elena",
  "Luis",
  "Claudio",
  "Martina",
  "Juan",
  "Raquel",
  "Andrés",
  "Sofía",
  "Diego",
  "Lucía",
  "Daniel",
  "Fernando",
];

const apellidosLista = [
  "Martínez",
  "Gómez",
  " Pérez",
  "Suárez",
  " García",
  "Rodríguez",
  " López",
  "Hernández",
  "Álvarez",
  "Navarro",
  "Piñero",
  "García",
  "Torres",
  "Jiménez",
];

function obtenerNumeroAleatorio(min, max) {
  if (min < max) {
    const range = max - min;
    return Math.floor(Math.random() * range) + min;
  }
}

function obtenerNombreAleatorio(nombres) {
  const randomIndex = Math.floor(Math.random() * nombres.length);
  return nombres[randomIndex];
}

function obtenerApellidoAleatorio(apellidos) {
  const randomIndex = Math.floor(Math.random() * apellidos.length);
  return apellidos[randomIndex];
}

function obtenerFechaNacimientoAleatoria() {
  const currentYear = new Date().getFullYear();
  const minBirthYear = Math.max(1970, currentYear - 20);
  const maxBirthYear = currentYear - 1;

  // Si el año de nacimiento mínimo es mayor que el máximo, devuelve null
  if (maxBirthYear < minBirthYear) {
    return null;
  }

  // Calcular los timestamps UTC más antiguos y más recientes dentro del rango
  const earliestTimestamp = Date.UTC(minBirthYear, 0, 1);
  const latestTimestamp = Date.UTC(maxBirthYear, 11, 31);

  // Generar un timestamp aleatorio entre estos dos valores
  let timestamp =
    Math.random() * (latestTimestamp - earliestTimestamp) + earliestTimestamp;

  // Crear una nueva fecha a partir del timestamp
  const bDate = new Date(timestamp);

  // Formatear la fecha como YYYY/MM/DD con zeras en caso de números singulares
  return `${bDate.getFullYear()}-${String(bDate.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(bDate.getDate()).padStart(2, "0")}`;
}

export {
  nombresLista,
  apellidosLista,
  obtenerNombreAleatorio,
  obtenerApellidoAleatorio,
  obtenerFechaNacimientoAleatoria,
  obtenerNumeroAleatorio,
};
