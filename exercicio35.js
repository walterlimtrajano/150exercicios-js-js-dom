function decrementarArray(array) {
    return array.map(numero => numero - 1);
}

const numeros = [5, 10, 15, 20];
const numerosDecrementados = decrementarArray(numeros);

console.log("Números decrementados:", numerosDecrementados);
