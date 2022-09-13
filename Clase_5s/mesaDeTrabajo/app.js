const body = document.body;
const icono = document.getElementById("icono");
const cambiarTema = document.getElementById("cambiar-tema");

function cambioTema(){

    const tema = body.classList.toggle("dark");

    if(tema){
        icono.textContent = "🌞";
        cambiarTema.style.backgroundColor = "white";
        cambiarTema.style.color = "black";
        cambiarTema.textContent = "TEMA CLARO " + icono.textContent;
    }else{
        icono.textContent = "🌛";
        cambiarTema.style.backgroundColor = "rgb(52, 52, 52)";
        cambiarTema.style.color = "white";
        cambiarTema.textContent = "TEMA OSCURO " + icono.textContent;

    }


}

