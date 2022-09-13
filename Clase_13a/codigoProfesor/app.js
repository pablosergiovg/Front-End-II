const estadoUsuario = {
  email: "",
  password: "",
  legal: false,
};

const erroresPresentes = [];

const errores = {
  email: "Email no válido o incorrecto",
  password: "Constraseña no válida o incorrecta",
  legal: "Es necesario aceptar los términos y condiciones",
};

const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const inputLegal = document.querySelector("#legal");
const cajaErrores = document.querySelector(".errores");
const formulario = document.querySelector("form");

/* inputEmail.addEventListener("focus", function () {
  console.log("estoy en el email");
});
inputEmail.addEventListener("blur", function () {
  console.log("Me fui del email");
});
inputEmail.addEventListener("input", function (e) {
  console.log("cambia algo en mi texto");
  console.log(e);
  estadoUsuario.email = inputEmail.value;
  console.log(estadoUsuario);

  if (validarEmail(estadoUsuario.email)) {
    inputEmail.classList.add("border-ok");
  } else {
    inputEmail.classList.remove("border-ok");
  }
}); */

inputEmail.addEventListener("change", function () {
  console.log("cambio el texto");
});

formulario.addEventListener("submit", function (e) {
  e.preventDefault();

  cajaErrores.innerHTML = "Iniciado sesion...";

  // actualizamos el estdio del usuario
  estadoUsuario.email = normalizarTexto(inputEmail.value);
  estadoUsuario.password = normalizarContrasenia(inputPassword.value);
  estadoUsuario.legal = inputLegal.checked;

  //validar campos
  const correoValidado = validarEmail(estadoUsuario.email);
  const contraseniaValidado = validarPassword(estadoUsuario.password);
  const legalValidado = validarLegal(estadoUsuario.legal);

  // simulamos conectar con el servidor
  setTimeout(() => {
    if (correoValidado && contraseniaValidado && legalValidado) {
      location.href = "./usuario.html";
      console.log(estadoUsuario);
    } else {
      console.log(estadoUsuario);
      //renderizar cambios 👇
      cajaErrores.innerHTML = listadoErrores(erroresPresentes);
    }

    // Limpiamos los ultimos errores
    erroresPresentes.length = 0;
  }, 2000);
});

/* -------------------------------------------------------------------------- */
/*                                RENDERIZADOS                                */
/* -------------------------------------------------------------------------- */
function listadoErrores(listado) {
  /*let contenido = [];

  listado.forEach((item) => {
    contenido.push(`<p><smal>${item}</smal></p>`);
  });

  contenido = contenido.join("");
*/

  const contenido = listado
    .map((item) => `<p><small>${item}</small></p>`)
    .join("");

  return contenido;
}

/* -------------------------------------------------------------------------- */
/*                              FUNCIONES UTILES                              */
/* -------------------------------------------------------------------------- */
function normalizarTexto(texto) {
  // paso todo a minusculas y quito espacios sobrantes 👇
  return texto.toLowerCase().trim();
}

function normalizarContrasenia(texto) {
  // quito espacios sobrantes 👇
  return texto.trim();
}

function validarEmail(email) {
  let resultado = false;
  // si pasa las pruebas lo damos por válido 👇
  if (
    email.includes("@") &&
    email.length > 5 &&
    email.includes(".") &&
    !email.includes(" ")
  ) {
    resultado = true;
  } else {
    erroresPresentes.push(errores.email);
  }
  return resultado;
}

function validarPassword(password) {
  let resultado = false;
  // si pasa las pruebas lo damos por válido 👇
  if (password.length > 4 && !password.includes(" ")) {
    resultado = true;
  } else {
    // agrego el mensaje correspondiente 👇
    erroresPresentes.push(errores.password);
  }

  return resultado;
}

function validarLegal(verificacion) {
  let resultado = false;
  // si pasa las pruebas lo damos por válido 👇
  if (verificacion) {
    resultado = true;
  } else {
    // agrego el mensaje correspondiente 👇
    erroresPresentes.push(errores.legal);
  }

  return resultado;
}
