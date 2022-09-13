const formulario = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const pass = document.querySelector("#pass");
const tel = document.querySelector("#tel");
const hobbies = document.querySelectorAll("input[name='hobbies']");
const nacionalidad = document.querySelectorAll("input[name='nacionalidad']");

const datos = {
  nombre: "",
  pass: "",
  tel: "",
  hobbies: [],
  nacionalidad: "",
};

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  console.log(nombre.value);
  datos.nombre = normalizarNombre(nombre.value);

  console.log(pass.value);
  datos.pass = pass.value;

  console.log(tel.value);
  datos.tel = tel.value;

  console.log(hobbies);

  hobbies.forEach((hobbie) => {
    console.log(`${hobbie.id} --> ${hobbie.checked}`);
    if (hobbie.checked) {
      datos.hobbies.push(hobbie.id);
    }
  });
  nacionalidad.forEach((pais) => {
    console.log(`${pais.id} --> ${pais.checked}`);
    if (pais.checked) {
      datos.nacionalidad = pais.id;
    }
  });

  console.log(datos);

  formulario.reset();
});

function normalizarNombre(nombre) {
  return nombre.toUpperCase();
}
