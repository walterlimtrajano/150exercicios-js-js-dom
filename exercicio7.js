const aluno = {
    nome: "Maria Oliveira",
    cpf: "123.456.789-00",
    cidade: "Fortaleza",
    notas: [1.0, 2.0, 4.0, 8.0]
};

console.log(aluno.nome);
console.log(aluno.cpf);
console.log(aluno.cidade);
console.log(aluno.notas);
aluno.notas.forEach((nota, index) => {
    console.log(`nota ${index + 1}: ${nota}`);
});

let soma = 0;
for (let nota of aluno.notas) {
    soma += nota;
}

let media = soma / aluno.notas.length;
console.log(`Média das notas: ${media.toFixed(2)}`);
let notaAleatoria = aluno.notas[Math.floor(Math.random() * aluno.notas.length)];
let notaConvertida = notaAleatoria * 10;
console.log(`Nota aleatória escolhida: ${notaAleatoria}`);
console.log(`Nota convertida para escala 0–100: ${notaConvertida}`);
