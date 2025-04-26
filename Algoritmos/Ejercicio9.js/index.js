//  Escribir un algoritmo que determine si un año es bisiesto.

function esBisiesto(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 === 0)) {
      return true;  
    } else {
      return false;
    }
  }
  
  let año = 2025;
  if (esBisiesto(año)) {
    console.log(año + " es un año bisiesto.");
  } else {
    console.log(año + " no es un año bisiesto.");
  }
  