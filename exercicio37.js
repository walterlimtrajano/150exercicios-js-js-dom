function inverterStrings(array) {
    return array.map(str => str.split('').reverse().join(''));
}

const palavras = ["casa", "carro", "banana"];
const palavrasInvertidas = inverterStrings(palavras);

console.log(palavrasInvertidas);
