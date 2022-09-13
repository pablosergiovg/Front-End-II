// variables globales
const form = document.querySelector("form");
const busqueda = document.querySelector("#busqueda");
const listadoBusquedas = document.querySelector("#busquedas-realizadas");

let busquedasRealizadas = JSON.parse(localStorage.getItem("historial"));

if (busquedasRealizadas) {
  renderizarBusquedas(busquedasRealizadas);
} else {
  busquedasRealizadas = [];
}
console.log(busquedasRealizadas);

//frenamos la accion por defecto del formulario
//disparamos la logica
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let busquedaActual = captarData();
  busquedasRealizadas.push(busquedaActual);

  //almaceamos las busquedas en localStorage
  localStorage.setItem("historial", JSON.stringify(busquedasRealizadas));
  //ejecutamos la busqueda
  realizarBusqueda(busquedaActual);
});

//tomamos los datos ingresados en el buscador
//limpiamos el texto
function captarData() {
  let buscado = busqueda.value.trim();
  return buscado;
}

//renderizar busquedas almacenadas
function renderizarBusquedas(listado) {
  listado.forEach((element) => {
    let nodo = document.createElement("p");
    let texto = document.createTextNode(element);
    nodo.appendChild(texto);
    listadoBusquedas.appendChild(nodo);
  });
}

//Redireccionamos la location a google con la url parseada
function realizarBusqueda(texto) {
  location.href = `https://www.google.com/search?q=${texto}`;
}
