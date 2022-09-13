let confirmarCambios = confirm("¿cambiar colores?");

//consulta si confirmarCambios es true.
if(confirmarCambios){

    //CAPTURANDO TITULO
    const titulo = document.querySelector   ("h1");

    titulo.style.color = "red"; //le    cambio el estilo que ya tiene.
    titulo.innerHTML += " y Universo." //   le cambio el contenido de la etiqueta  h1.


    //CAPTURANDO BODY
    const body = document.querySelector ("body");

    body.style.backgroundColor =    "#c2c2c2"; //le cambio el estilo del   background del body

}


//NOTA cuando necesitamos modificar mucho los estilos de alguna clase o etiqueta, lo ideal es crear una nueva clase en css y luego añadir esa clase mediante javascript cuando sea necesario, ejempo cuando un usuario desea poner en modo oscuro la pagina.
