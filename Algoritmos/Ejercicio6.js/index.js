//  Crear un programa que calcule el número Fibonacci en la posición (n). 

function fibonacci(n) {
 let secuencia = [];

   for (let i = 0; i <= n; i++) {
    if (secuencia.length === 0) {
       secuencia.push(0);
     } else if (secuencia.length === 1) {
       secuencia.push(1);
     } else {
       let siguiente = secuencia[i - 1] + secuencia[i - 2];
       secuencia.push(siguiente);
     }
   }

   return secuencia;
 }

 console.log(fibonacci(5));
