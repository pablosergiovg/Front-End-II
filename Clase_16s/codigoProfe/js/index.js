console.log("banco");

const contenedor = document.querySelector(".bancaMobile");

const promesa = new Promise((resolve, reject) => {
  // Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito, y reject(...) cuando falla.
  // En este ejemplo, usamos setTimeout(...) para simular código asíncrono, es decir una petición al servidor.
  // La variable cuentaBancaria simula la informacion en la base de datos.
  // En la "vida real", vamos a recurrir a un fetch() [lo cual se ve la proxima clase].
  const cuentaBancaria = {
    estado: "activo",
    usuario: "Michael Scott",
    cajaDeAhorros: 0,
  };

  setTimeout(() => {
    if (cuentaBancaria.cajaDeAhorros <= 0) {
      reject({
        mensaje: "No tenés fondos",
        estatus: 400,
        cuenta: cuentaBancaria,
      });
    } else if (cuentaBancaria.estado != "activo") {
      reject({
        mensaje: "No tenés cuenta",
        estatus: 404,
        cuenta: cuentaBancaria,
      });
    } else {
      resolve({
        mensaje: "La transacción fue resuelta con exito",
        estatus: 200,
        cuenta: cuentaBancaria,
      });
    }
  }, 2500);
});

console.log(promesa);
promesa1
  .then((respuesta) => {
    console.log(respuesta);
    console.log(promesa);
    contenedor.innerHTML = `<h4>${respuesta.mensaje}</h4>`;
    contenedor.innerHTML += `<p>tenes: ${respuesta.cuenta.cajaDeAhorros}</p>`;
  })
  .catch((error) => {
    console.log(error);
    console.log(promesa);
    contenedor.innerHTML = `<h4>${error.mensaje}</h4>`;
    contenedor.innerHTML += `<p>tenes: ${error.cuenta.cajaDeAhorros}</p>`;
  });

/*
fetch("https://jsonplaceholder.typicode.com/todos/2")
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    contenedor.innerHTML = `<h4>${json.title}</h4>`;
  });
*/
