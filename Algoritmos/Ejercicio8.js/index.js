//Crear una función que cuente cuántas veces aparece un carácter en un string.

function contarletra(str, letra) {
    let contador = 0;

    for (let i = 0; i < str.length; i++) {
        
        if (str[i] === letra) {
            
            contador++;
        }
    }
    
    
    return contador;
}

let resultado = contarletra("programacion", "r");
console.log(resultado);
