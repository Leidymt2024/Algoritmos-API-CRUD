// Determinar si una palabra es un palíndromo. 

function esPalindromo(palabra) {

    const palabraReversa = palabra.toLowerCase().split('').reverse().join('');
    return palabra.toLowerCase() === palabraReversa;
  }
  
  console.log(esPalindromo('reconocer'));  // true
  console.log(esPalindromo('fallo'));   // false
  