// SEGURIDAD: Si no se encuentra en localStorage info del usuario
// no lo deja acceder a la página, redirigiendo al login inmediatamente.




(function comprobacion() {
  // no lo deja acceder a la página, redirigiendo al login inmediatamente.
  const jwt = localStorage.getItem('jwt');

  if (!jwt) {
    // usamos el replace para no guardar en el historial la url anterior
    location.replace('./');
  }

  console.log("PASÓ CORRECTAMENTE LA COMPROBACION");
})()





/* ------ comienzan las funcionalidades una vez que carga el documento ------ */
window.addEventListener('load', function () {

  /* ---------------- variables globales y llamado a funciones ---------------- */
  
  
  const ENDPOINTBASE = 'https://ctd-todo-api.herokuapp.com/v1';
  const JWT = this.localStorage.getItem('jwt');

  const btnCerrarSesion = this.document.querySelector('#closeApp');
  const nombreUsuario = this.document.querySelector('.user-info p');
  const contenedorTareasPendientes = this.document.querySelector('.tareas-pendientes');
  const contenedorTareasTerminadas = this.document.querySelector('.tareas-terminadas');
  const formCrearTarea = this.document.querySelector('form.nueva-tarea');
  const inputNuevaTarea = this.document.querySelector('#nuevaTarea');





  /* -------------------------------------------------------------------------- */
  /*                          FUNCIÓN 1 - Cerrar sesión                         */
  /* -------------------------------------------------------------------------- */

  btnCerrarSesion.addEventListener('click', function () {




    console.log("Cerrar sesion");
    const confirmacion = confirm('¿Seguro desea cerrar sesión?');

    // si lo confirmó, cerramos la sesion
    if (confirmacion) {
      //  limpiamos el storage
      localStorage.clear();
      // lo llevamos a la pantalla de login
      location.replace('./');
    }
   



  });

  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 2 - Obtener nombre de usuario [GET]                */
  /* -------------------------------------------------------------------------- */

  


  function obtenerNombreUsuario() {

    const url = `${ENDPOINTBASE}/users/getMe`;

    const configuraciones = {
      method: 'GET',
      headers: {
        authorization: JWT
      }
    }

    // lanzamos la consulta para saber los datos del usuario👇
    fetch(url, configuraciones)
      .then(respueta => respueta.json())
      .then(data => {
        console.log(data)
        // reemplazamos el texto del nodo parrafo correspondiente
        nombreUsuario.textContent = data.firstName
      })


  };
  obtenerNombreUsuario()




  /* -------------------------------------------------------------------------- */
  /*                 FUNCIÓN 3 - Obtener listado de tareas [GET]                */
  /* -------------------------------------------------------------------------- */

  


  function consultarTareas() {


    const url = `${ENDPOINTBASE}/tasks`;

    const configuraciones = {
      method: 'GET',
      headers: {
        authorization: JWT
      }
    }

    // lanzamos la consulta para saber las tareas del usuario👇
    fetch(url, configuraciones)
      .then(respueta => respueta.json())
      .then(data => {
        console.log(data)
        // llamo a la funcion que pinta las tareas en pantalla
        renderizarTareas(data);
      })


  };
  consultarTareas();




  /* -------------------------------------------------------------------------- */
  /*                    FUNCIÓN 4 - Crear nueva tarea [POST]                    */
  /* -------------------------------------------------------------------------- */


  formCrearTarea.addEventListener('submit', function (event) {
    event.preventDefault();

    const url = `${ENDPOINTBASE}/tasks`;

    const configuraciones = {
      method: 'POST',
      headers: {
        'content-type':'application/json',
        authorization : JWT
      },
      body: JSON.stringify({
        description: inputNuevaTarea.value,
        completed: false
      })
    }
    
    fetch(url, configuraciones)
    .then(response => response.json())
    .then(data => data)


    consultarTareas();


  });


  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 5 - Renderizar tareas en pantalla                 */
  /* -------------------------------------------------------------------------- */
  function renderizarTareas(listado) {


    console.log("pintando");
    // filtramos las terminadas
    const listadoTareasTerminadas = listado.filter( item => item.completed)
    const listadoTareasPendientes = listado.filter( item => !item.completed)

    contenedorTareasPendientes.innerHTML = '';
    contenedorTareasTerminadas.innerHTML = '';

    console.log("Pendientes");
    console.log(listadoTareasPendientes);
    console.log("Terminadas");
    console.log(listadoTareasTerminadas);

    listadoTareasPendientes.forEach( tarea => {
      // por cada tarea inyectamos un nodo li
      contenedorTareasPendientes.innerHTML += `
      <li class="tarea" data-aos="fade-down">
        <button class="change" id="${tarea.id}"><i class="fa-regular fa-circle"></i></button>
        <div class="descripcion">
          <p class="nombre">${tarea.description}</p>
          <p class="timestamp">${tarea.createdAt}</p>
        </div>
      </li>
      `
    })
    listadoTareasTerminadas.forEach( tarea => {
      // por cada tarea inyectamos un nodo li
      contenedorTareasTerminadas.innerHTML += `
      <li class="tarea" data-aos="fade-up">
        <div class="hecha">
          <i class="fa-regular fa-circle-check"></i>
        </div>
        <div class="descripcion">
          <p class="nombre">${tarea.description}</p>
          <div class="cambios-estados">
            <button class="change incompleta" id="${tarea.id}" ><i class="fa-solid fa-rotate-left"></i></button>
            <button class="borrar" id="${tarea.id}"><i class="fa-regular fa-trash-can"></i></button>
          </div>
        </div>
      </li>
      `
    })




  };

  /* -------------------------------------------------------------------------- */
  /*                  FUNCIÓN 6 - Cambiar estado de tarea [PUT]                 */
  /* -------------------------------------------------------------------------- */
  function botonesCambioEstado() {
    
    



  }


  /* -------------------------------------------------------------------------- */
  /*                     FUNCIÓN 7 - Eliminar tarea [DELETE]                    */
  /* -------------------------------------------------------------------------- */
  function botonBorrarTarea() {
   
    

    

  };

});