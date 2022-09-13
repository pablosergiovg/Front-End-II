/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

const formulario = document.querySelector("form");
const comentario = document.querySelector("#comentario");
const comentarios = document.querySelector(".comentarios");

let listadoComentarios = JSON.parse(localStorage.getItem("lista"));

if (listadoComentarios) {
    busqueda(listadoComentarios);
  } else {
    listadoComentarios = [];
  }

formulario.addEventListener("submit" , function (e) {
    e.preventDefault();
    let contenido = valores();
    listadoComentarios.push(contenido);
    comentario.value= "";

    localStorage.setItem("lista", JSON.stringify(listadoComentarios));

    renderizarParrafo(contenido)
    
});

function valores() {
    let coment = comentario.value.trim();
    return coment
}

function busqueda(list) {
    list.forEach((element) => {
        renderizarParrafo(element);
    });
}

function renderizarParrafo(elemento) {
    let pNodo = document.createElement("p");
        let texto = document.createTextNode(elemento);

        pNodo.appendChild(texto);
        comentarios.appendChild(pNodo);
}