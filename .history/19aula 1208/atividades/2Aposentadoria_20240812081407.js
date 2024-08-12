function idadeParaAposentadoria(idade) {
    const idadeMinimaParaAposentadoria = 65;

    if (idade >= idadeMinimaParaAposentadoria) {
        return "Você já pode se aposentar.";
    } else {
        const anosRestantes = idadeMinimaParaAposentadoria - idade;
        return `Você ainda precisa trabalhar por mais ${anosRestantes} anos.`;
    }
}

// Exemplos de uso:
console.log(idadeParaAposentadoria(70)); // "Você já pode se aposentar."
console.log(idadeParaAposentadoria(50)); // "Você ainda precisa trabalhar por mais 15 anos."
