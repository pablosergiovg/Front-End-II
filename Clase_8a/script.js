//capturo toda la ventana del navegador y agrego el evento load(cuando se termine de cargar la página, me va a mostrar lo de adentro)
window.addEventListener("load", function(){

    let botonAlerta = document.querySelector(".boton-alerta"); //capturo el boton del html pot su etiqueta(".boton-alerta")
    botonAlerta.addEventListener("click", function(){ //le agrego un evento click al boton de alerta.
        alert("tocaste el boton!"); //al tocar el boton se activa el evento y me tira el alert.
    });

});


//Siguiendo con el script de arriba, si quisiera prevenir una accion nativa de html, como por ejemplo que al tocar el boton me escroleara para abajo, agregaría como parametro a la función otro evento:
//window.addEventListener("load", function(//OTROEVENTO ){
//y luego colocaría el .preventDefault(); de ese elemento:
//OTROEVENTO .preventDefault();
//se escribe pegado OTROEVENTO.preventDeFault();