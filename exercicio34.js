const alunos2 = [
    { nome: "Ana", idade: 17, notas: [8, 7, 9] },
    { nome: "Bruno", idade: 18, notas: [6, 5, 7] },
    { nome: "Carla", idade: 20, notas: [9, 8, 10] }
];

const somaDasIdades = alunos2.reduce((soma, aluno) => soma + aluno.idade, 0);
const mediaIdades = somaDasIdades / alunos2.length;

console.log(`Média das idades: ${mediaIdades}`);
