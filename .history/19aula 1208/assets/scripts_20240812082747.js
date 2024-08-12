function idadeParaAposentadoria() {
    const idadeMinimaParaAposentadoria = 65;
    const idade = prompt("Por favor, insira sua idade:");

    if (idade >= idadeMinimaParaAposentadoria) {
        console.log("Você já pode se aposentar.");
    } else {
        const anosRestantes = idadeMinimaParaAposentadoria - idade;
        console.log(`Faltam ${anosRestantes} anos para você se aposentar.`);
    }
}

idadeParaAposentadoria();
