// Ordenar un array de números en orden ascendente (sin usar sort).  

function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let current = arr[i];  
        let j = i - 1;

        while (j >= 0 && arr[j] > current) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = current;
    }
    
    return arr;
}

let numeros = [5, 25, 9, 0, 5, 10];
console.log(insertionSort(numeros)); 
