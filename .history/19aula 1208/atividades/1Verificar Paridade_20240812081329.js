function verificarParidade() {
    let numero = 7;
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log(`O número é ${verificarParidade()}.`);
