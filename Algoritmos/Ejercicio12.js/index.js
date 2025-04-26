// Escribir una función que elimine los elementos duplicados de un array.

function eliminarDuplicado(array) {

    const arrayUnico = [];
    
    for (let i = 0; i < array.length; i++) {
      
      if (!arrayUnico.includes(array[i])) {
        
        arrayUnico.push(array[i]);
      }
    }
    
    return arrayUnico;
  }
  
  const meArray = [0, 2, 8, 3, 4, 4, 5, 5];
  const resultado = eliminarDuplicado(meArray);
  
  console.log(resultado);
  