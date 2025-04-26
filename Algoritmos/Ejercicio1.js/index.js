//Escribir una función que determine si un número es par o impar.

function verificar(numero) {
    return numero % 2 === 0 ? "Es Par" : "Es Impar";
}

console.log(verificar(11));