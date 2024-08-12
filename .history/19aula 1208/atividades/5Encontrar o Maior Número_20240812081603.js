function encontrarMaiorNumero(array) {
    let maiorNumero = array[0]; // Assume que o primeiro elemento é o maior

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]; // Atualiza o maior número se encontrar um maior
        }
    }

    return maiorNumero;
}

// Exemplo de uso:
let numeros = [15, 22, 34, 42, 7];
console.log(`O maior número do array é: ${encontrarMaiorNumero(numeros)}`);
