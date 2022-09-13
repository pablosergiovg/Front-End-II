//PASO 12 aquí capturamos el objeto window y le agregamos el evento load.
window.addEventListener("load", function() {
const noticias = [
    {
        titulo:"Turismo de vacunas: 2.000 personas por día reciben su dosis en el aeropuerto de Miami",
        imgUrl: "https://www.infobae.com/new-resizer/H9B9uvmwpunxOo6DwuGGMoaVGiE=/265x149/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/YXOQB3X5SZ2HPD2SWP2HOCBDZA.jpg",
        descripcion: "Fácil y rápido son los dos adjetivos que más repiten las personas que describen cómo es el proceso de vacunación en el aeropuerto internacional de Miami. En su mayoría son turistas internacionales quienes se inoculan al día en la clínica instalada en la terminal aérea",
        fecha:"07/06/21",
        tipoNacional: true

    },
    {
        titulo:"El gran gesto por amor de Jennifer Lopez hacia Ben Affleck",
        imgUrl: "https://www.infobae.com/new-resizer/9qc1rervLRhJWJ5iTr0ODd_ctMM=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/MSQDSQCH7NDAFLLCXFS7IO2PFU.jpg",
        descripcion: "La cantante fue vista averiguando sobre escuelas en Los Ángeles, lo que hace suponer que podría mudarse con sus hijos allí para estar cerca del actor",
        fecha:"02/06/21",
        tipoNacional: false

    },
    {
        titulo:"Cómo evitar que se empañen los anteojos al usar barbijo",
        imgUrl: "https://www.infobae.com/new-resizer/ORz7JmzOGrdIjerazIGIpwiqOHk=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/QVRO3YNJMNGNFP773UOWZYM3FU.jpg",
        descripcion: "Para quienes utilizan anteojos, la combinación del uso obligatorio de tapabocas desde el año pasado se volvió una complicación. Paso a paso para evitar que se empañen",
        fecha:"01/06/21",
        tipoNacional: true

    },
    {
        titulo:"La UE aprobó el fondo de USD 21.000 millones para apoyar a las regiones más afectadas por la transición verde",
        imgUrl: "https://www.infobae.com/new-resizer/n515a-2ZZvJJgZ3EI6sfxWYm5Lg=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/UEEVG5ND43BTLP5RTK3V62NISM.jpg",
        descripcion: "El objetivo es ayudar a los países a emprender la transición ecológica en su camino hacia una economía libre de emisiones de gases de efecto invernadero a mitad de siglo",
        fecha:"04/06/21",
        tipoNacional: false

    },
    {
        titulo:"Maradona: cómo es la muestra fotográfica argentina que deslumbra a todos en Serbia",
        imgUrl: "https://www.infobae.com/new-resizer/mmsbZbq2RWQDDHGiP4MxaBbK6RQ=/768x432/filters:format(jpg):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/TM2UEM7JNZE4JH2SXGPPGPTTOQ.jpg",
        descripcion: "La exposición, que cuenta con postales icónicas de “El Diez” que capturaron los fotógrafos de la agencia de noticias Télam, es uno de los hitos del festival Mes de la Fotografía de Belgrado",
        fecha:"07/06/21",
        tipoNacional: true
    }
];

//PASO 1 capturar elementos(en este caso sections)
const seccionInternacionales = document.getElementById('internacionales');
const seccionNacionales = document.getElementById('nacionales');

//PASO 5 creamos unas variables para poder utilizarlas en el pedazo de codigo HTML que queremos incrustar al original. Estas variables son las que van a guardar los datos del array.
let titulo = "";
let imagen = "";
let fecha = "";
let descripcion = "";

//PASO 2 creamos un forEach para iterar en la array y extraer los datos necesarios.
noticias.forEach(item => {   
    
    //PASO 3 este if capturará solo los objetos literales que que en su valor "tipoNacional" diga true, para ello accedemos mediante el parametro item, adjuticandole el .tipoNacional.
  if (item.tipoNacional) {

    //PASO 6 en este paso es donde le adjudicamos a cada variable(por iteración) la informacion que queremos para que dentro del pedazo de texto cumplan con la funcion.
      titulo = item.titulo;
      imagen = item.imgUrl;
      fecha = item.fecha;
      descripcion = item.descripcion;
      
      //PASO 4 declaramos una variable que nos permita almacenar un pedazo de codigo HTML, el cual vamos a agregar al HTML original.
      let articulo = `
      <article class="noticia">
          <img src="${imagen}" alt="noticia" />
          <span> <h4 class="titulo">${titulo}</h4> <p class="fecha">${fecha}</p></span>
          <p class="descripcion">${descripcion}</p>
      </article>
      `;
      //PASO 7 aquí estamos colocando y agregando(por cada iteracion) el pedazo de codigo HTML dentro de la section con el id nacionales.
    seccionNacionales.innerHTML += articulo;

    //PASO 8 este else capturará solo los objetos literales que que en su valor "tipoacional" diga false.
  } else {
    
    //PASO 9 aquí hacemos lo mismo que en el PASO 6.
      titulo = item.titulo;  
      imagen = item.imgUrl;
      fecha = item.fecha;
      descripcion = item.descripcion;
      //PASO 10 aquí hacemos lo mismo que el PASO 4.
      let articulo = `
      <article class="noticia">
          <img src="${imagen}" alt="noticia" />
          <span> <h4 class="titulo">${titulo}</h4> <p class="fecha">${fecha}</p></span>
          <p class="descripcion">${descripcion}</p>
      </article>
      `;
      //PASO 11 aquí hacemos lo mismo que el PASO 7.    
    seccionInternacionales.innerHTML += articulo
    
  }
})

//PASO 13 aquí capturamos la clase .iconosFooter del div en el footer.
const iconos = document.querySelector('.iconosFooter')
//PASO 14 aquí le agregamos el evento click al div con la clase .iconosFooter, que en el paso anterior habíamos capturado.
iconos.addEventListener('click', function() {    
    alert('¡¡¡ATAQUE DEL GATO NINJA COME-PIZZA!!!')
})



})