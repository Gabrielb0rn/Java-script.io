









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

    document.getElementById('resultado').innerText = resultado;
}); 

// -----------------------------------------------------------------------------------------------