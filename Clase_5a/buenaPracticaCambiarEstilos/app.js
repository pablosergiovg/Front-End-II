let body = document.querySelector("body");
let div = document.querySelector("div")

//PRUEBA 1
/* let confirmarClases = confirm("Aceptar para ver el texto con estilos, Cancelar para verlo sin estilos.");

if(confirmarClases){
    body.classList.toggle("centrar");
    div.classList.toggle("div")
} */


//PRUEBA 2

let boton = document.getElementById("boton");

function estilo(){

    body.classList.toggle("centrar");
    div.classList.toggle("div")

}
