/*  Escribe una funcion que calcule los millisegundos que han pasado
desde media noche 00:00:00 hasta la hora actual teniendo en
 cuenta que:– Hay 1000 millisegundos en un segundo– Podemos obtener la hora, minutos y segundos con la función
 "getTime"*/ 

 function calcularMilisegundos() {
    
    let ahora = new Date();
    let medianoche = new Date(ahora.getFullYear(), ahora.getMonth(), ahora.getDate());
    return ahora - medianoche;
}

console.log(calcularMilisegundos(50));

