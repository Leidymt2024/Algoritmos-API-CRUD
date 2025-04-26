//  Crear un programa que devuelva los números primos hasta el  número (n).

function esPrimo(num) {
   
    if (num <= 1) {
      return false;
    }

    for (let i = 2; i < num; i++) {  
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function mostrarPrimosHasta(n) {
    // Recorrer desde 2 hasta n
    for (let i = 2; i <= n; i++) {
      if (esPrimo(i)) {
        console.log(i);
      }
    }
  }
  
  mostrarPrimosHasta(30);
  