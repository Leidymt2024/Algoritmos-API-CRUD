//  Crear un algoritmo que valide si un string tiene paréntesis balanceados. 

function validarParentesis(str) { 
    let contador = 0; 
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] === '(') {
        contador++;
      } else if (str[i] === ')') {
        contador--;
      }
      
      if (contador < 0) {
        return false; 
      }
    }
    
    return contador === 0;
  }
  
  console.log(validarParentesis("(())")); // true
  console.log(validarParentesis("(()"));  // false

  