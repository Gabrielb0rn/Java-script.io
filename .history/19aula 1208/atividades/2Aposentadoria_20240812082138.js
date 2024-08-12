function idadeParaAposentadoria(idade) {
    const idadeMinimaParaAposentadoria = 65;

    if (idade >= idadeMinimaParaAposentadoria) {
        return "Você já pode se aposentar.";
    } else {
        const anosRestantes = idadeMinimaParaAposentadoria - idade;
        return `Você ainda precisa trabalhar por mais ${anosRestantes} anos.`;
    }
}

// console.log(idadeParaAposentadoria(70));
// console.log(idadeParaAposentadoria(50));
