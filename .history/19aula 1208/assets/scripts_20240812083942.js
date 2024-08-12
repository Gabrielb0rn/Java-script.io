//  --------------------------------- Aposentadoria ---------------------------------------------

document.getElementById('formAposentadoria').addEventListener('submit', function(event) {
    event.preventDefault();
    const idade = document.getElementById('idade').value;
    const idadeMinimaParaAposentadoria = 65;
    let resultado;

    if (idade >= idadeMinimaParaAposentadoria) {
        resultado = "Você já pode se aposentar.";
    } else {
        const anosRestantes = idadeMinimaParaAposentadoria - idade;
        resultado = `Faltam ${anosRestantes} anos para você se aposentar.`;
    }

    document.getElementById('resultadoAposentadoria').innerText = resultado;
});

// --------------------------------- Calculadora de IMC ----------------------------------------

document.getElementById('formIMC').addEventListener('submit', function(event) {
    event.preventDefault();
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const imc = (peso / (altura * altura)).toFixed(2);
    let categoria;

    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc < 24.9) {
        categoria = "Peso normal";
    } else if (imc < 29.9) {
        categoria = "Sobrepeso";
    } else {
        categoria = "Obesidade";
    }

    document.getElementById('resultadoIMC').innerText = `Seu IMC é ${imc} (${categoria})`;
});

// -------------------------- Verificação de Número Par ou Ímpar ------------------------------

document.getElementById('formParImpar').addEventListener('submit', function(event) {
    event.preventDefault();
    const numero = parseInt(document.getElementById('numero').value);
    const resultado = numero % 2 === 0 ? "O número é par." : "O número é ímpar.";
    
    document.getElementById('resultadoParImpar').innerText = resultado;
});

// ---------------------------- Adicione mais scripts conforme necessário ------------------------
