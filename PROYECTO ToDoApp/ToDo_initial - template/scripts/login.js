/* -------------------------------------------------------------------------- */
/*   chequeamos que ya este logueado el usuario, a traves del local storage   */
/* -------------------------------------------------------------------------- */

const jwt = localStorage.getItem('jwt');

if(jwt){
    location.replace('/mis-tareas.html')
}


window.addEventListener('load', function () {
    /* ---------------------- obtenemos variables globales ---------------------- */
   
    const form = document.querySelector("form");
    const inputEmail = document.querySelector("#inputEmail");
    const inputPassword = document.querySelector("#inputPassword");



    /* -------------------------------------------------------------------------- */
    /*            FUNCIÓN 1: Escuchamos el submit y preparamos el envío           */
    /* -------------------------------------------------------------------------- */
    form.addEventListener('submit', function (event) {

        event.preventDefault();
       
        const usuario = {
            email: inputEmail.value,
            password: inputPassword.value,
        }
        
        realizarLogin(usuario);


    });


    /* -------------------------------------------------------------------------- */
    /*                     FUNCIÓN 2: Realizar el login [POST]                    */
    /* -------------------------------------------------------------------------- */
    function realizarLogin(user) {
       
        const url = 'https://ctd-todo-api.herokuapp.com/v1/users/login';

        const config = {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(user),
        }

        fetch(url, config)
        .then(res => res.json())
        .then(data => {

            localStorage.setItem('jwt', data.jwt);

            location.replace('/mis-tareas.html');
            
        })


        
    };


});