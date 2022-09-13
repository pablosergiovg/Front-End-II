//Realizamos en conjunto una posible solución para que un usuario desafíe al sistema en un encuentro de piedra, papel o tijera. Esta solución es completamente válida, pero ahora te tocará mejorar el código. ¿De qué se trata esto? Actualmente el código es un gran bloque que cumple muchas tareas. En primera instancia, te recomendamos que pienses en hacer pequeñas tareas que vayan resolviendo cada tarea de manera individual y luego ejecutar todo junto. ¿Una pista? Te dejamos algunas preguntas disparadoras para que puedas encontrar por dónde empezar:
//- ¿Qué mejoras podríamos introducir en este código?
//- ¿Hay algun tipo de condicional que nos facilitará la tarea de comparar?
//- ¿Podemos separar el código en “partes”? ¿Qué partes serían?

//MICODIGO 

/* let confirmacionDeDuelo = confirm(`¿Aceptas un duelo de piedra, papel o tijera con esta página? soy una fiera...`);

if(confirmacionDeDuelo){

    alert(`¿Como jugar?, fácil! -> Piedra = 1, Papel = 2, Tijera = 3`);

    let valorUsuario = parseInt(prompt(`Piedra(1), Papel(2) ó Tijera(3)?`));

    let mensajeEmpate = `te dejé empatar :]`;

    let mensajeGanaUsuario = "`te dejé ganar para que lo puedas poner en tu curriculum :)`";

    let mensajeGanaMaquina = `Perdiste, soy una fiera, te lo advertí...`;

    let valorPagina = Math.trunc(Math.random()*3+1);

    if(valorUsuario === valorPagina){
        alert(mensajeEmpate);
    }else if(valorUsuario === 1 && valorPagina === 2){
        alert(mensajeGanaMaquina);
    }else if(valorUsuario === 1 && valorPagina === 3){
        alert(mensajeGanaUsuario);
    }else if(valorUsuario === 2 && valorPagina === 1){
        alert(mensajeGanaUsuario);
    }else if(valorUsuario === 2 && valorPagina === 3){
        alert(mensajeGanaMaquina);
    }else if(valorUsuario === 3 && valorPagina === 1){
        alert(mensajeGanaMaquina);
    }else if(valorUsuario === 3 && valorPagina === 2){
        alert(mensajeGanaUsuario)
    }else{
        alert(`debias colocar el número 1, el 2 ó el 3, recarga la página para volver a intentarlo`);
    }
}else{
    alert(`pecho frío!`)
}; */


//MIMICRODESAFIO 

/* let confirmacionDeDuelo = confirm(`¿Aceptas un duelo de piedra, papel o tijera con esta página? el primero en llegar a 3 puntos gana`);

let puntaje = [0,0];

if(confirmacionDeDuelo){

    while(puntaje[0] < 3 && puntaje[1] < 3){

        alert(`Puntaje actual TU: ${puntaje[0]}pts. - YO: ${puntaje[1]}pts.`);

        let valorUsuario = parseInt(prompt(`elige un numero: Piedra(1), Papel(2) ó Tijera(3)?`));

        let mensajeEmpateRonda = `empate!`;

        let mensajeGanaUsuarioRonda = "ganaste!";

        let mensajeGanaMaquinaRonda = `perdiste`;

        let valorPagina = Math.trunc(Math.random()*3+1);

        if(valorUsuario === valorPagina){
            alert(mensajeEmpateRonda);
        }else if(valorUsuario === 1 && valorPagina === 2){
            alert(mensajeGanaMaquinaRonda);
            puntaje[1]++;
        }else if(valorUsuario === 1 && valorPagina === 3){
            alert(mensajeGanaUsuarioRonda);
            puntaje[0]++;
        }else if(valorUsuario === 2 && valorPagina === 1){
            alert(mensajeGanaUsuarioRonda);
            puntaje[0]++;
        }else if(valorUsuario === 2 && valorPagina === 3){
            alert(mensajeGanaMaquinaRonda);
            puntaje[1]++;
        }else if(valorUsuario === 3 && valorPagina === 1){
            alert(mensajeGanaMaquinaRonda);
            puntaje[1]++;
        }else if(valorUsuario === 3 && valorPagina === 2){
            alert(mensajeGanaUsuarioRonda)
            puntaje[0]++;
        }else{
            alert(`puedes utilizar solamente los números 1, 2 ó 3.`);
        }
        
    }

}else{
    alert(`pecho frío!`)
};

if(puntaje[0] === 3){
    alert(`Felicidades, me ganaste`);
}

if(puntaje[1] === 3){
    alert(`Buen intento, quizás tengas mejor suerte para la próxima.`)
} */





//EZE CODIGO

/* const respuesta = [
    ["Piedra: empate.", "Papel: perdiste.", "Tijeras: ganaste."],
    ["Piedra: ganaste.", "Papel: empate.", "Tijeras: perdiste."],
    ["Piedra: perdiste.", "Papel: ganaste.", "Tijeras: empate."]
];

let ganadas = 0

for(let i = 1;i <= 5; i++) {
    let eleccion = prompt("Ronda " + i + ": Elejí: Piedra(1) - Papel(2) - Tijeras(3)");
    if (isNaN(eleccion)) {
        alert("No es un número!")
        i--;
        continue;
    }
    if (eleccion > 3 || eleccion < 1) {
        alert("Número incorrecto! Ingrese número entre 1 y 3.")
        continue;
    }
    let respuestaActual = respuesta[eleccion - 1][Math.trunc(Math.random() * 3)]
    alert(respuestaActual)
    if (respuestaActual.includes("ganaste")) {
        ganadas++;
    } else if (respuestaActual.includes("empate")) {
        i--;
        continue;
    }

    if(ganadas === 3) {
        alert("Has ganado!");
        break;
    } else if (i-ganadas === 3) {
        alert("Has perdido!");
    }
} */





//JAVI CODIGO

/* let eleccionMaquina = Math.floor(Math.random() * 3 + 1)
let inputUsuario = ''

function ganar() {
    alert('GANASTE!')
}

function empatar() {
    alert('EMPATARON')
}

function perder() {
    alert('PERDISTE...')
}

function error() {
    alert('Hubo un error, volvé a ingresar una opción!')
    eleccionMaquina = Math.floor(Math.random() * 3 + 1)
    comenzarJuego()
}

function comenzarJuego() {    
    inputUsuario = prompt('Elegir piedra, papel o tijera');
    if (inputUsuario.toLowerCase() === 'piedra') {
        inputUsuario = 1
        partida()
    } else if (inputUsuario.toLowerCase() === 'papel') {
        inputUsuario = 2
        partida()
    } else if (inputUsuario.toLowerCase() === 'tijera') {
        inputUsuario = 3
        partida()
    } else {
        error()
    }    
}

function partida() {
    console.log(eleccionMaquina)
    console.log(inputUsuario)
    switch (eleccionMaquina) {
        case 1:
            if (inputUsuario === 1) {
                empatar()
            } else if (inputUsuario === 2) {
                ganar()
            } else {
                perder()
            }
            break;
        case 2:
            if (inputUsuario === 1) {
                perder()
            } else if (inputUsuario === 3) {
                ganar()
            } else {
                empatar()
            }
            break;
        case 3:
            if (inputUsuario === 1) {
                ganar()
            } else if (inputUsuario === 2) {
                perder()
            } else {
                empatar()
            }
            break;
        default:
            alert('error')
            break;
    }
}

comenzarJuego(); */


//JONA CODIGO


/*
const opciones = [
    "Piedra",
    "Papel",
    "Tijera"
];

while (true) {
    const promptJugador = prompt("Elige tu opción (1: Piedra, 2: Papel, 3: Tijera)");
    
    if (!promptJugador) {
        break;
    }

    const seleccionJugador = parseInt(promptJugador);

    if (isNaN(seleccionJugador) || seleccionJugador < 1 || seleccionJugador > 3) {
        alert("Opción invalida. Vuelva a intentarlo.")
        continue;
    }
    
    const seleccionCPU = ~~(Math.random() * 3) + 1;

    const resultado = resolver(seleccionJugador, seleccionCPU);

    if (resultado > 0) {
        alert(mensajeResultado(seleccionJugador, seleccionCPU, 0));
    } else if (resultado < 0) {
        alert(mensajeResultado(seleccionJugador, seleccionCPU, 1));
    } else {
        alert(mensajeResultado(seleccionJugador, seleccionCPU, 2));
    }
}

function mensajeResultado(seleccionJugador, seleccionCPU, mensaje) {
    mensajes = [
        "¡Ganaste!",
        "Perdiste",
        "Empate"
    ];
    return `Elegiste ${opciones[seleccionJugador - 1]}\nLa CPU eligió: ${opciones[seleccionCPU - 1]}\n${mensajes[mensaje]}`;
}

function resolver(jugador, cpu) {
    const result = jugador - cpu;
    if (Math.abs(result) > 1) {
        return (result * -1);
    }
    return result;
}
*/




//IVAN CODIGO

/* let puntajes = [0,0]
while (puntajes[0] < 3 && puntajes[1] < 3){
    console.log(puntajes);
    let eleccionMaquina = Math.floor(Math.random()*3+1); 
    console.log(eleccionMaquina);
    let eleccionHumana = parseInt(prompt(`Eleji: papel(1) - piedra(2) - tijera(3)
    Puntajes: ${puntajes}`));
    if (eleccionHumana === 1 || eleccionHumana === 2 || eleccionHumana === 3) {

        let elecciones = [[eleccionMaquina, eleccionHumana], ["La maquina", "La persona"]];

        if(elecciones[0][0] === elecciones[0][1]){
            alert("Empate")
        } else if(elecciones[0][0] + elecciones[0][1] === 3){
            let ganadorRonda = elecciones[0].indexOf(1)
            puntajes[ganadorRonda]++;
            alert(`gano ${elecciones[1][ganadorRonda]}, puntajes: ${puntajes}`)
        } else if(elecciones[0][1] + elecciones[0][0] === 4){
            let ganadorRonda = elecciones[0].indexOf(3)
            puntajes[ganadorRonda]++;
            alert(`gano ${elecciones[1][ganadorRonda]}, puntajes: ${puntajes}`)
        } else if(elecciones[0][1] + elecciones[0][0] === 5){
            let ganadorRonda = elecciones[0].indexOf(2)
            puntajes[ganadorRonda]++;
            alert(`gano ${elecciones[1][ganadorRonda]}, puntajes: ${puntajes}`)
        }

    } else if (eleccionHumana == 6){
        puntajes[1] ++
    } else if (eleccionHumana == 9){
        puntajes[0] ++
    } 
    else{
        alert("Tenes que poner 1, 2 o 3")
    }
} */

//CODIGOPROFESOR 

