// Função tradicional
function objetivoCarreira(carreira) {
    return `Meu objetivo de carreira é me tornar um ${carreira}`;
}

// Arrow function
const objetivoCarreiraArrow = (carreira) => {
    return `Meu objetivo de carreira é me tornar um ${carreira}`;
};

// Testando as funções
console.log(objetivoCarreira("Desenvolvedor Full Stack"));
console.log(objetivoCarreiraArrow("Analista de Dados"));
