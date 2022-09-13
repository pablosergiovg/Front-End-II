const botones = document.querySelectorAll("button");

//aquí me muestra todos los botones.
console.log(botones);

function enviarMensaje(event) {
  //aquí me muestra el boton que capturé con el evento.
  console.log(event.target);
  let elemento = event.target;

  const dataSet = elemento.dataset;
  //aqui muestra los atributos que tienen la palabra "data" por delante, los muestra sin dicha palabra.
  console.log(dataSet);

  const titulo = dataSet.titulo;
  const idUsuario = Number(dataSet.idUsuario);

  //en estos 2 console.log muestra el contenido de cada uno de esos atributos creados manualmente.
  console.log(titulo);
  console.log(idUsuario);

  //link de la API a donde queremos enviar el json con los datos y el body con los datos.
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: titulo,
      userId: idUsuario,
    }),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((ress) => ress.json())
    .then((data) => {
      //aquí muestra el objeto que estamos enviando (la respuesta de la API).
      console.log(data);

      const contenedorMensaje = document.querySelector("#mensaje-posteado");
      //aquí pinta en la página el data.title que nos respondió la API.
      contenedorMensaje.textContent = data.title;
    });
}
//aquí al nodelist, mediante un forEach, capturamos el boton que el usuario clickee y llamamos a la función enviarMensaje.
botones.forEach((boton) => boton.addEventListener("click", enviarMensaje));
