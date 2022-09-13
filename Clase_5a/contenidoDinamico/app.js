const tempalate = `<h1>Hola Mundo!</h1>`;
const parrafo = `<p>Hola mundo, como estan? esto es una prueba a ver que onda.</p>`

const body = document.getElementById("body");

body.innerText = tempalate + parrafo;//este solo muestra el texto y las etiquetas.
body.innerHTML = tempalate + parrafo;//este solo muestra solo el contenido de las etiquetas.