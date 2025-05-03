// Variáveis em escopo global
var produto = "Notebook";
const codigoProduto = "NTB-001";

function registrarProduto() {
    // Variável em escopo local da função
    let categoria = "Informática";

    // Impressão com quebra de linha
    console.log(produto);
    console.log(categoria);
    console.log(codigoProduto);
}

// Executa a função
registrarProduto();
