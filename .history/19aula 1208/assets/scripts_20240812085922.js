//  -------------------------- Verificar Paridade ------------------------------------

document.getElementById('formParidade').addEventListener('submit', function(event) {
    event.preventDefault();
    const numero = parseInt(document.getElementById('numeroParidade').value);
    const resultado = verificarParidade(numero);
    document.getElementById('resultadoParidade').innerText = `O número é ${resultado}.`;
});

function verificarParidade(numero) {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}

// --------------------------- Calculadora de Aposentadoria --------------------------

document.getElementById('formAposentadoria').addEventListener('submit', function(event) {
    event.preventDefault();
    const idade = parseInt(document.getElementById('idadeAposentadoria').value);
    const resultado = idadeParaAposentadoria(idade);
    document.getElementById('resultadoAposentadoria').innerText = resultado;
});

function idadeParaAposentadoria(idade) {
    const idadeMinimaParaAposentadoria = 65;
    if (idade >= idadeMinimaParaAposentadoria) {
        return "Você já pode se aposentar.";
    } else {
        const anosRestantes = idadeMinimaParaAposentadoria - idade;
        return `Faltam ${anosRestantes} anos para você se aposentar.`;
    }
}

// ------------------------------ Lendo Números --------------------------------------

document.getElementById('formLendoNumeros').addEventListener('submit', function(event) {
    event.preventDefault();
    const numero1 = parseInt(document.getElementById('numero1').value);
    const numero2 = parseInt(document.getElementById('numero2').value);
    const maiorNumero = Math.max(numero1, numero2);
    document.getElementById('resultadoLendoNumeros').innerText = `Maior número entrado: ${maiorNumero}`;
});

// ------------------------ Soma dos Elementos do Array -----------------------------

document.getElementById('calcularSoma').addEventListener('click', function() {
    const numeros = [5, 10, 15, 20, 25]; // Array de exemplo
    const soma = somaElementos(numeros);
    document.getElementById('resultadoSoma').innerText = `Soma dos elementos: ${soma}`;
});

function somaElementos(array) {
    return array.reduce((total, num) => total + num, 0);
}

// ------------------------ Encontrar o Maior Número --------------------------------

document.getElementById('encontrarMaior').addEventListener('click', function() {
    const numeros = [5, 10, 15, 20, 25]; // Array de exemplo
    const maiorNumero = encontrarMaiorNumero(numeros);
    document.getElementById('resultadoMaior').innerText = `Maior número no array: ${maiorNumero}`;
});

function encontrarMaiorNumero(array) {
    return Math.max(...array);
}

