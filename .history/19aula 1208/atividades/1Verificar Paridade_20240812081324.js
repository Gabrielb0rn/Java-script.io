function verificarParidade() {
    let numero = 7;
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

// Exemplo de uso:
console.log(`O número é ${verificarParidade()}.`);
