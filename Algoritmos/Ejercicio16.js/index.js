// Escribir una función que convierta un número romano a número arábigo.

const valoresRomanos = {
  'I': 1, 'V': 5, 'X': 10, 'L': 50, 
  'C': 100, 'D': 500, 'M': 1000
};

function romanoAEntero(romano) {
  let total = 0; 

  for (let i = 0; i < romano.length; i++) {
      let actual = valoresRomanos[romano[i]]; 
      let siguiente = valoresRomanos[romano[i + 1]]; 

      if (siguiente && actual < siguiente) {
          total -= actual;
      } else {
          total += actual;
      }
  }

  return total;
}
  
console.log(romanoAEntero("X"));  // 10
  