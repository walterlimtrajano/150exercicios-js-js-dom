function encontrarMenorNumero(array){
    return  Math.min(...array)
}

const numeros = [10, 25, 47, 3, 88, 7];
const menor = encontrarMenorNumero(numeros);
console.log(`O menor número é: ${menor}`);