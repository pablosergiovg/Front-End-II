const formulario = document.querySelector("form");
const nombre = document.querySelector("#nombre");
const contrasenia = document.querySelector("#pass");
const telefono = document.querySelector("#tel");
const hobbies = document.querySelectorAll("input[name='hobbies']");
const nacionalidad = document.querySelectorAll("input[name='nacionalidad']");

const datosPersona = {
    nombre: '',
    telefono: '',
    contrasenia: '',
    hobbies: [],
    nacionalidad: ''
  }


formulario.addEventListener("submit", function(event){

    event.preventDefault();
   
    datosPersona.nombre = nombre.value;

    datosPersona.telefono = telefono.value;

    datosPersona.contrasenia = contrasenia.value;

    hobbies.forEach((hobbie) => {
        if(hobbie.checked){
            datosPersona.hobbies.push(hobbie.id);
        }
    });

    nacionalidad.forEach((pais) => {
        if(pais.checked){
            datosPersona.nacionalidad = pais.id;
        }
    });
    

    console.log(datosPersona);

    formulario.reset();

})


function normalizarNombres(nombreUsuario){
    nombreUsuario.toUpperCase();
}