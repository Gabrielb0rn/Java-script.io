/*
Carlos está definindo suas metas para a semana. Crie um array inicialmente vazio chamado metasSemana.
Adicione três metas à lista. Verifique se a segunda meta é "exercício físico". Se não for, 
modifique-a para "praticar esportes". Imprima a lista de metas semanais no final.

Dicas: Empurrar em inglês - If
*/


// Cria um array vazio chamado metasSemana
let metasSemana = [];

// Adiciona três metas à lista
metasSemana.push("estudar", "exercício físico", "ler um livro");

// Verifica se a segunda meta é "exercício físico". Se não for, modifica-a para "praticar esportes"
if (metasSemana[1] !== "exercício físico") {
    metasSemana[1] = "praticar esportes";
}

// Imprime a lista de metas semanais
console.log(metasSemana);
