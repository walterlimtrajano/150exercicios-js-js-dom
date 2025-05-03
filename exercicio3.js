// Variáveis globais
var nomeAluno = "João Silva";
const matricula = "20251001";

function registrarAluno() {
    // Variável local (escopo da função)
    let curso = "Engenharia da Computação";

    // Retorna a string formatada com template literals
    return `Nome: ${nomeAluno}, Curso: ${curso}, Matrícula: ${matricula}`;
}

// Exibe o resultado no console
console.log(registrarAluno());

