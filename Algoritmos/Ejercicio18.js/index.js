// Crear un programa que transforme una frase en "notación hacker" (leet speak). 

function convertirVocales(frase) {
    let resultado = ""; 
    
    for (let i = 0; i < frase.length; i++) {
      let letra = frase[i]; 
      
      // Reemplazamos las vocales por números
      if (letra === 'a' || letra === 'A') {
        resultado += '4';
      } else if (letra === 'e' || letra === 'E') {
        resultado += '3';
      } else if (letra === 'i' || letra === 'I') {
        resultado += '!';
      } else if (letra === 'o' || letra === 'O') {
        resultado += '0';
      } else if (letra === 'u' || letra === 'U') {
        resultado += '7';
      } else {
        resultado += letra; 
      }
    }
    
    return resultado; 
  }
  
  let frase = "Las compis del Code";
  let fraseLeet = convertirVocales(frase);
  console.log(fraseLeet); 
  