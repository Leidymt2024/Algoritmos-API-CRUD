//  Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.

function queSigloEs(Año) {

    let siglo = Math.ceil(Año / 100); 
    return siglo;
  }
  
  console.log(queSigloEs(2025));  
