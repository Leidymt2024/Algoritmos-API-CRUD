//  Crear un algoritmo que sume todos los números de un array. 

let num = [11, 20, 35, 4, 51, 60];  
let total = 0; 


for (let i = 0; i < num.length; i++) {
    total += num[i];
}

console.log("Suma Total:", total);