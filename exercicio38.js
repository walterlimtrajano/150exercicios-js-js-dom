function filtrarPalavrasComA(array) {
    return array.filter(str => str.endsWith("a"));
}

const palavras = ["banana", "uva", "limão", "maçã", "laranja"];
const palavrasComA = filtrarPalavrasComA(palavras);

console.log(palavrasComA);
