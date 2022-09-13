//Realizar un script que permita sumar un array de números consecutivamente, de forma que se sume el primer número con el segundo y lo imprima por consola. Luego, tenemos que tomar este resultado y sumarle el tercer numero, y asi hasta terminar de recorrer el array;


let numeros = [1, 2, 4, 8]

function sumatoria(array){

    let acumulado = 0;

    for(let i = 0; i < array.length; i++){

        acumulado += array[i];
        console.log(acumulado);

    }

}
sumatoria(numeros);