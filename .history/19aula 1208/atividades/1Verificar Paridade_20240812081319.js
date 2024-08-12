function verificarParidade() {
    let numero = 7;  // A variável é declarada dentro da função
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

// Exemplo de uso:
console.log(`O número é ${verificarParidade()}.`);
