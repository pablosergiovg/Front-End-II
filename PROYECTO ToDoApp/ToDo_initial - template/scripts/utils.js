/* ---------------------------------- texto --------------------------------- */
function validarTexto(texto) {
    
    if(texto.value.length < 20 && texto.value !== ""){
        return true;
    }else{
        console.log("texto no válido");
        return false;
    }


}

function normalizarTexto(texto) {
    
    return texto.value.trim();
    
}

/* ---------------------------------- email --------------------------------- */
function validarEmail(email) {

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
   
    if (emailRegex.test(email.value)) {
        return true;
    } else {
        console.log("email no válido");
        return false;
    }
    
}

function normalizarEmail(email) {

    return email.value.trim();
    
}

/* -------------------------------- password -------------------------------- */
function validarContrasenia(contrasenia) {


    if(contrasenia.value > 6){
        return true;
    }else{
        console.log("su contraseña debe tener al menos 7 caracteres");
        return false;
    }
    
}

function compararContrasenias(contrasenia_1, contrasenia_2) {

    if (contrasenia_1.value === contrasenia_2.value) {
        return true;
      } else {
        console.log("Las passwords deben de coincidir");
        return false; 
      }
    
}