function stringsQueComecamComA(array) {
    return array.filter(palavra => palavra.startsWith("A"));
}

const palavras = ["Amor", "Casa", "Árvore", "Avião", "Bola"];
const resultado = stringsQueComecamComA(palavras);

console.log(`Palavras que começam com 'A': ${resultado}`);
