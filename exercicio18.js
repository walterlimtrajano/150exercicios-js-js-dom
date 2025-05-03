function encontrarMaiorNumero(array) {
    return Math.max(...array);
}

const numeros = [10, 25, 47, 3, 88, 7];
const maior = encontrarMaiorNumero(numeros);
console.log(`O maior número é: ${maior}`);
