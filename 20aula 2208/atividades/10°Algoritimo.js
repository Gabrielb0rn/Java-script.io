/*
 Crie um vetor de 10 números e peça para o usuário qual número ele deseja verificar se existe no vetor. 
 Caso exista, o programa deve mostrar todos os índices que ele se encontra.

 Dicas: Use dois vetores - Use um laços de repetição
*/



// Cria um vetor de 10 números
let numeros = [5, 8, 12, 7, 8, 10, 8, 3, 14, 8];

// Solicita ao usuário o número que ele deseja verificar
let numeroParaVerificar = parseInt(prompt("Digite o número que deseja verificar no vetor:"));

// Vetor para armazenar os índices onde o número é encontrado
let indicesEncontrados = [];

// Laço para verificar em quais índices o número aparece
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroParaVerificar) {
        indicesEncontrados.push(i);
    }
}

// Verifica se o número foi encontrado e exibe os índices
if (indicesEncontrados.length > 0) {
    console.log(`O número ${numeroParaVerificar} foi encontrado nos índices: ${indicesEncontrados.join(", ")}`);
} else {
    console.log(`O número ${numeroParaVerificar} não foi encontrado no vetor.`);
}
