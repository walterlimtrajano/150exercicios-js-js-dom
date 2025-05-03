function transformarParaMaiusculas(array) {
    return array.map(palavra => palavra.toUpperCase());
}

const palavras = ["javascript", "html", "css"];
const palavrasMaiusculas = transformarParaMaiusculas(palavras);

console.log(palavrasMaiusculas);
