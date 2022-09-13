window.addEventListener("load", function(){

    //let campoNobre = document.querySelector("#nombre");
    
    /* //focus, se ejecuta apenas se apreta dentro del campo.
    campoNobre.addEventListener("focus", function(){
        console.log(1);
    }) */

    /* //blur, se ejecuta una vez el usuario clickea fuera del campo.
    campoNobre.addEventListener("blur", function(){
        console.log(1);
    }) */

    /* //change, capta los cambios en el campo, si salgo y entro sin cambiar nada no capta nada.
    campoNobre.addEventListener("change", function(){
        console.log(1);
    }) */
    
    let formulario = document.querySelector(".formulario");
    
    
    formulario.addEventListener("submit", function(e){
        
        let errores = [];
        
        let campoNombre = document.querySelector("#nombre");

        
        
        if(campoNombre.value == ""){
            errores.push("El campo de nombre debe estar completo.");
        }else if(campoNombre.value.length < 3){
            errores.push("El nombre debe contar con al menos 3 caracteres.");
        }
    
        
        let campoContraseña = document.querySelector("#password");
        
        if(campoContraseña.value == ""){
        errores.push("debe colocar una contraseña.");
        }else if(campoContraseña.value.length < 8){
            errores.push("La contraseña debe contar con al menos    8 caracteres.");
        }
        
        
        let genero = document.querySelector("#genero");
        
        if(genero.value == 0){
            errores.push("Seleccione un genero");
        }

        
        let campoFecha = document.querySelector("#fecha");

        if(campoFecha.value == ""){
            errores.push("Debe seleccionar una fecha.");
        }
        
        let terminosCondiciones = document.querySelector("#tyc");

        if(!terminosCondiciones.checked){
            errores.push("no ha aceptado los terminos y     condiciones.");
        }
        
        
        //Si se detecta algún error, preventDefault no enviará el formulario.
        if(errores.length > 0){
            e.preventDefault();
        }
        
        let ulErrores = document.querySelector("div.errores ul");

        ulErrores.innerHTML = "";
        
        console.log(errores);

        errores.forEach(error => {
            ulErrores.innerHTML += "<li>" + error + "</li>";
        });
        
    })

    


})