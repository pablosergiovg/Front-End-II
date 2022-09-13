window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
   
    const form = this.document.querySelector('.container form');
    const nombre = this.document.querySelector('#inputNombre');
    const apellido = this.document.querySelector('#inputApellido');
    const email = this.document.querySelector('#inputEmail');
    const contrasenia = this.document.querySelector('#inputPassword');
    const repetirContrasenia = this.document.querySelector('#inputPasswordRepetida');



    

    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {
      
        event.preventDefault();

        const usuario = {
            firstName: nombre.value,
            lastName: apellido.value,
            email: email.value,
            password: contrasenia.value,
        }

        realizarRegister(usuario);

    });

    /* -------------------------------------------------------------------------- */
    /*                    FUNCIÓN 2: Realizar el signup [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarRegister(user) {
        
        const url = 'https://ctd-todo-api.herokuapp.com/v1/users';

        const config = {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(user),
        };

        fetch(url, config)
        .then(res => res.json())
        .then(data => {
            if(data){
                location.replace('/');
            }

        })


    };


});