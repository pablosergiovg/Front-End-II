//EJEMPLO capturando la etiqueta h1 y modificando su valor con textContent.
const titulo = document.querySelector('h1')
titulo.textContent = 'Clase 7'



//PASO 1 creamos un array con los materiales necesarios para ir tomandolos, en este caso links de imágenes.
const listaImagenes = [
"https://es.web.img3.acsta.net/pictures/14/03/17/10/20/509771.jpg",
"https://upload.wikimedia.org/wikipedia/en/c/cc/A_Bug%27s_Life.jpg",
"https://upload.wikimedia.org/wikipedia/en/c/c0/Toy_Story_2.jpg"
];


//PASO 2 capturamos el elemento de HTML, ya sea la etiqueta, clase o id.
const items = document.querySelectorAll('.item')

//PASO 3 creamos un forEach para iterer cada elemento de mi array listaImagenes(links).
items.forEach((elemento, index) => {

  const linkImg = document.createElement('a'); //creamos un elemento(etiqueta a) y la almacenamos en la variable linkImg.
  linkImg.classList.add('rutas-img'); //agregamos una clase a la rtiqueta a(linkImg) mediante classList.add.
  linkImg.innerHTML = `<img src="${listaImagenes[index]}"/>`; //con innerHTLM modificamos y mostramos la imagen, en cambio con innetTest o textContent mostrariamos la etiqueta completa.
  linkImg.setAttribute('href', listaImagenes[index]);//con setAttribute le agregamos un atributo, en este caso un href="" y dentro se le coloca "listaImagenes en la posicion index(en cada vuelta incrementa un indice de la array))"
  linkImg.setAttribute('target', '_blank'); //aquí tambien se le agrega otro atributo, el target="" y dentro se le coloca el valor _blank, que hace que al dar click en la imagen se abra en otra pestaña.

  elemento.appendChild(linkImg); //que es elemento?, se hace hijo de a?, imagen va dentro de a.. agarra todo a y sus nodos hijos?... pero elemento? que es?...
})


/* for (let i = 0; i < listaImagenes.length; i++) {
  contenedor.innerHTML += `
<article class="item">
    <a class="rutas-img" href="${listaImagenes[i]} target="_blank"><img src="${listaImagenes[i]}"/></a>
</article>
`
} */

