function multiplosDeTres(array) {
    return array.filter(numero => numero % 3 === 0);
}

const numeros = [1, 3, 4, 6, 9, 10, 12];
const resultado = multiplosDeTres(numeros);

console.log(`Números múltiplos de 3: ${resultado}`);
