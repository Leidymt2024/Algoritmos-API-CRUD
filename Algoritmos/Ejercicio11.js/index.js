// Encontrar el segundo número más grande en un array.

let numeros = [5, 3, 2, 1, 1, 9, 5];

numeros.sort((a, b) => b - a); 
let segundoMasGrande = numeros[1];  

console.log(segundoMasGrande);  
