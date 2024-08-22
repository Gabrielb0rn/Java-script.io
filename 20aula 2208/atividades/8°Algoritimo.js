/*
Ana está organizando suas tarefas de limpeza semanal. Crie um array inicialmente vazio chamado tarefasLimpeza. 
Solicite a Ana para adicionar quatro tarefas à lista. Remova a terceira tarefa da lista e, em seguida,
mude a segunda tarefa para "limpar banheiro". Imprima a lista de tarefas de limpeza atualizada no final.
*/




// Criando um array inicialmente vazio chamado 'tarefasLimpeza'
let tarefasLimpeza = [];

// Solicitando a Ana para adicionar quatro tarefas à lista
for (let i = 0; i < 4; i++) {
    let tarefa = prompt("Ana, adicione uma tarefa de limpeza à sua lista:");
    tarefasLimpeza.push(tarefa);
}

// Removendo a terceira tarefa da lista
tarefasLimpeza.splice(2, 1);

// Mudando a segunda tarefa para "limpar banheiro"
tarefasLimpeza[1] = "limpar banheiro";

// Imprimindo a lista de tarefas de limpeza atualizada no final
console.log("Lista de Tarefas de Limpeza Atualizada:", tarefasLimpeza);
