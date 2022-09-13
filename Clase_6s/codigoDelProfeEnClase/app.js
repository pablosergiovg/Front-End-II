const clase = {
  portada: "./js.png",
  alt: "imagen JavaScript",
  numero: "6",
  temas: [
    "nodos",
    "createElement()",
    "createTextNode()",
    "appendChild()",
    "atributos dinámicos",
    "hasAttribute()",
    "getAttribute()",
    "removeAttribute()",
    "setAttribute()",
  ],
  nombre: "Trabajamos con nodos",
};

const nodoImgClase = document.querySelector("img");
const nodoNumeroClase = document.querySelector(".title span");
const nodoTextoClase = document.querySelector(".paragraph");
const nodoListaClase = document.querySelector(".list-container");

nodoImgClase.setAttribute("src", clase.portada);
nodoImgClase.setAttribute("alt", clase.alt);

const numTexto = document.createTextNode(clase.numero);
//console.log(numTexto);
nodoNumeroClase.appendChild(numTexto);

const parrafoTexto = document.createTextNode(clase.nombre);
nodoTextoClase.appendChild(parrafoTexto);

for (let i = 0; i < clase.temas.length; i++) {
  const item = document.createElement("li");
  item.classList.add("lista");

  const texto = document.createTextNode(clase.temas[i]);

  item.appendChild(texto);
  nodoListaClase.appendChild(item);
}

/*
clase.temas.forEach((tema) => {
  nodoListaClase.innerHTML += `
    <li>${tema}</li>
  `;
});
*/
