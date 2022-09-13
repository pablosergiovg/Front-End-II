/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

/* Actividad
A continuación de la página de comentarios, la idea para la mesa de trabajo es crear otro botón,  que él mismo nos permita eliminar todos los comentarios existentes. Esto tiene que impactar en local storage para que no queden al abrir nuevamente la página.
A su vez, necesitamos que los comentarios también muestran el momento(día, hora y minutos) en el que fueron realizados. En este caso, para la UI es libertad creativa. podrán mostrarlo de la manera que crean conveniente. */




const formulario = document.querySelector("form");

const botonBorrar = document.createElement("button");
const textoBoton = document.createTextNode("Borrar");
botonBorrar.appendChild(textoBoton);
formulario.appendChild(botonBorrar);
botonBorrar.setAttribute("type", "button");


botonBorrar.addEventListener("click", () => {

    localStorage.clear();
    divHistorial.innerHTML = "";
    historialBusquedas = [];

})


const inputBusqueda = document.querySelector("#comentario");

const divHistorial = document.querySelector(".comentarios");


let historialBusquedas = JSON.parse(localStorage.getItem("lista"));

if(historialBusquedas){
    renderizarBusqueda(historialBusquedas);
}else{
    historialBusquedas = [];
}



//DOS 
//IMPLEMENTANDO EL SUBMIT PARA QUE CUANDO ENVIEN EL FORMULARIO SE GUARDE EN UNA ARRAY.
formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    const fecha = new Date();

    const horaComentario = {
        comentario: capturarBusqueda(),
        hora: fecha
    }

    divHistorial.innerHTML = "";

    historialBusquedas.push(horaComentario);
    inputBusqueda.value = "";

    localStorage.setItem("lista", JSON.stringify(historialBusquedas));

    renderizarBusqueda(historialBusquedas);


})


/*<-------------- Funcionalidades --------------->*/


//UNO 
//CAPTURANDO EL CONTENIDO DEL INPUT CON .VALUE
//LIMPIANDO LOS ESPACIOS CON TRIM().
function capturarBusqueda(){

    let buscado = inputBusqueda.value.trim();
    return buscado;

}


//TRES 
//RENDERIZANDO LAS BUSQUEDAS EN ETIQUETAS <p></p>
function renderizarBusqueda(listado){

    listado.forEach(element => {
        console.log(element);
        let nodoP = document.createElement("p");
        let textoP = document.createTextNode(element.comentario + "____" + element.hora);

        nodoP.appendChild(textoP);
        divHistorial.appendChild(nodoP)
    })

}


