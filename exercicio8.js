const notas = [8, 6.5, 9];

// Imprimindo cada nota
console.log(`A primeira nota do aluno é: ${notas[0]}`);
console.log(`A segunda nota do aluno é: ${notas[1]}`);
console.log(`A terceira nota do aluno é: ${notas[2]}`);

// Calculando a média
const media = (notas[0] + notas[1] + notas[2]) / 3;
console.log(`A média do aluno é: ${media.toFixed(2)}`);

// Verificando aprovação
if (media >= 7) {
    console.log("O aluno está: APROVADO");
} else {
    console.log("O aluno está: REPROVADO");
}
