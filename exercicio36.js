function multiplosDeCinco(array) {
    return array.filter(numero => numero % 5 === 0);
}

const numeros2 = [5, 10, 12, 14, 15, 20, 23];
const resultado = multiplosDeCinco(numeros2);

console.log("Números múltiplos de 5:", resultado);
