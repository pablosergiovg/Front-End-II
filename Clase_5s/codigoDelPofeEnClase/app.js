const body = document.body;
const icono = document.getElementById("icono");

function cambioTema() {
  //parrafo.classList.toggle("parrafo-dark");
  const tema = body.classList.toggle("dark");

  if (tema) {
    icono.textContent = "☀️";
  } else {
    icono.textContent = "🌙";
  }
}

let parrafos = "<p>asdsadsads<p>";
