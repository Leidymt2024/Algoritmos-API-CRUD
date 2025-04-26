// Crear un programa que convierta grados Celsius a Fahrenheit y viceversa.

// Función para convertir Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Función para convertir Fahrenheit a Celsius
function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Ejemplo
let celsius = 30;
let fahrenheit = celsiusAFahrenheit(celsius);
console.log(`${celsius}°C seria ${fahrenheit}°F`);

fahrenheit = 55;
celsius = fahrenheitACelsius(fahrenheit);
console.log(`${fahrenheit}°F seria ${celsius}°C`);
