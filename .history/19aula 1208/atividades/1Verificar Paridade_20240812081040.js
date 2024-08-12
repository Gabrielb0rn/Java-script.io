function verificarParidade(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }

    
}

let numero = 7
console.log(`O número ${numero} é ${verificarParidade(numero)}.`)