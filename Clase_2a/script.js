//ALERT tira "indefinido" en consola del navegador con el console.log.
//alert(`No vayas a voltear!!! en serio!!!!!`);

//CONFIRM sin mostrar en consola del navegador.
//confirm(`quieres almorzar?`);

//CONFIRM mostrando en consola del navegador.
//console.log(confirm(`quieres almorzar?`));

//CONFIRM almacenado en una variable y mostrado en consola.
//let confirmacion = confirm(`quieres almorzar?`);
//console.log(confirmacion);

//PROMPT muestra en consola lo que la persona escriba(aceptando), o null si la persona cancela.
//console.log(prompt(`Dime tu nombre completo humano!!`));

//CONSOLELOG sirve para mostrar en consola del navegador


//PROBANDO -------------------------------------------


/* let nombreUsuario = prompt(`hola!, dime tu nombre!`);

console.log(confirm(`te llamas ${nombreUsuario}?`)); */


//TRATOPERSONALIZADO ---------------------------------


/* let tratoPersonalizado = confirm(`desea recibir un trato personalizado?`);

if(tratoPersonalizado){
    let nombreUsuario = prompt(`ingrese su nombre`);
    alert(`gracias por visitarnos ${nombreUsuario}, por favor disfrute de su estadía en la página! :D`);
}else{
    alert(`Gracias por navegar por estos lares!`);
} */


//PIEDRAPAPAELOTIJERA --------------------------------


//Piedra, Papel o Tijera.

let confirmacionDeDuelo = confirm(`¿Aceptas un duelo de piedra, papel o tijera con esta página? soy una fiera...`);

if(confirmacionDeDuelo){
    alert(`¿Como jugar?, fácil! -> Piedra = 1, Papel = 2, Tijera = 3`);

    let valorUsuario = parseInt(prompt(`Piedra(1), Papel(2) ó Tijera(3)?`));

    let valorPagina = Math.trunc(Math.random()*3+1);

    if(valorUsuario === valorPagina){
        alert(`te dejé empatar :]`);
    }else if(valorUsuario === 1 && valorPagina === 2){
        alert(`Perdiste, soy una fiera, te lo advertí...`);
    }else if(valorUsuario === 1 && valorPagina === 3){
        alert(`te dejé ganar para que lo puedas poner en tu curriculum :)`);
    }else if(valorUsuario === 2 && valorPagina === 1){
        alert(`te dejé ganar para que lo puedas poner en tu curriculum :)`);
    }else if(valorUsuario === 2 && valorPagina === 3){
        alert(`Perdiste, soy una fiera, te lo advertí...`);
    }else if(valorUsuario === 3 && valorPagina === 1){
        alert(`Perdiste, soy una fiera, te lo advertí...`);
    }else if(valorUsuario === 3 && valorPagina === 2){
        alert(`te dejé ganar para que lo puedas poner en tu curriculum :)`)
    }else{
        alert(`debias colocar el número 1, el 2 ó el 3, recarga la página para volver a intentarlo`)
    }
}else{
    alert(`pecho frío!`)
};


/* //BUCLESESPECIFICOS ------------------------------------

//FORIN *para recorrer OBJETOS*

let personaje = {
    nombre: `Luc`,
    apellido: `Skywalker`,
    edad: 25
}

for(let caracteristica in personaje){
    console.log(personaje[caracteristica]);
}


//FOROF *para recorrer ARRAYS y STRINGS*

let series = [`The Mandalorian`, `The Office`, `Brook`];

for(let unaSerie of series) {
    console.log(unaSerie);
} */