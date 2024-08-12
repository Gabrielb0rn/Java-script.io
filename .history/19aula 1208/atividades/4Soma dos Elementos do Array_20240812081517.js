function somaElementos(array) {
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    return soma;
}

// Exemplo de uso:
let numeros = [10, 20, 30, 40, 50];
console.log(`A soma dos elementos do array é: ${somaElementos(numeros)}`);
