// Crear un algoritmo que devuelva el factorial de un número.

function calcularFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    
    return n * calcularFactorial(n - 1); 
}

console.log(calcularFactorial(10)); 
