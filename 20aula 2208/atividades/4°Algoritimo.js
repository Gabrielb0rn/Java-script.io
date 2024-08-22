/*
Ana está organizando suas tarefas diárias. 
Crie um array inicialmente vazio chamado 'tarefas'. Solicite a Ana para adicionar três tarefas à lista.
Remova a segunda tarefa da lista e, em seguida, adicione "ligar para o médico" ao final da lista. 
Imprima a lista de tarefas atualizada no final.
*/



// Criando um array vazio chamado 'tarefas'
let tarefas = [];

// Solicitando a Ana para adicionar três tarefas à lista
for (let i = 0; i < 3; i++) {
    let tarefa = prompt("Ana, adicione uma tarefa à sua lista:");
    tarefas.push(tarefa);
}

// Removendo a segunda tarefa da lista
tarefas.splice(1, 1);

// Adicionando "ligar para o médico" ao final da lista
tarefas.push("ligar para o médico");

// Imprimindo a lista de tarefas atualizada no final
console.log("Lista de Tarefas Atualizada:", tarefas);
