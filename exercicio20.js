function calcularMedia(array) {
    const soma = array.reduce((total, numero) => total + numero, 0);
    return soma / array.length;
}

const numeros = [10, 20, 30, 40, 50];
const media = calcularMedia(numeros);
console.log(`A média dos números é: ${media}`);
