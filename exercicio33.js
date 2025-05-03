const alunos = [
    { nome: "Ana", idade: 17, notas: [8, 7, 9] },
    { nome: "Bruno", idade: 18, notas: [6, 5, 7] },
    { nome: "Carla", idade: 20, notas: [9, 8, 10] }
];

const alunosMaioresDeIdade = alunos.filter(aluno => aluno.idade >= 18);

console.log("Alunos com 18 anos ou mais:", alunosMaioresDeIdade);
