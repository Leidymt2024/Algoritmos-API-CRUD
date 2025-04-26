// Escribir una función que encuentre el número mayor en un array.

function numeroMayor(array) {
    let mayor = array[0]; 

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }

    return mayor;
}

const numeros = [0, 100, 4, 8, 10, 55, 1, 20, 25, 105];
console.log(numeroMayor(numeros));

