//  Escribir un programa que verifique si dos strings son anagramas. 

function sonAnagramas(str1, str2) {
   
    if (str1.length !== str2.length) {
      return false;
    }
  
    const str1Ordenada = str1.split('').sort().join('');
    const str2Ordenada = str2.split('').sort().join('');
   
    return str1Ordenada === str2Ordenada;
  }
  
  console.log(sonAnagramas("calienta", "alicante")); // true
  console.log(sonAnagramas("hola", "amor")); // false
  