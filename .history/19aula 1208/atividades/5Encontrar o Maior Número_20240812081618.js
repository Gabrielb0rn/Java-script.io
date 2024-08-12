function encontrarMaiorNumero(array) {
    let maiorNumero = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i];
        }
    }

    return maiorNumero;
}

let numeros = [15, 22, 34, 42, 7];
console.log(`O maior número do array é: ${encontrarMaiorNumero(numeros)}`);
