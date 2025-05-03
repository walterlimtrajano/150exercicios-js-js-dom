const alunos = [
    {
        nome: "Ana",
        idade: 20,
        notas: [8, 7.5, 9, 10]
    },
    {
        nome: "Bruno",
        idade: 22,
        notas: [6, 5.5, 7, 8]
    },
    {
        nome: "Carla",
        idade: 19,
        notas: [9, 9.5, 10, 8.5]
    }
]
const nomes = alunos.map(aluno => aluno = aluno.nome)
console.log(`nomes dos alunos: ${nomes}`)