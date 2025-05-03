function transformarParaMinusculas(array) {
    return array.map(palavra => palavra.toLowerCase());
}

const palavras = ["JAVASCRIPT", "HTML", "CSS"];
const palavrasMinusculas = transformarParaMinusculas(palavras);

console.log(palavrasMinusculas);
