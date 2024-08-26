// Você tem uma lista de tarefas [ "Lavar a louça", "Estudar", "Fazer compras"].
// Adicione uma nova tarefa ao final da lista e depois remova a primeira tarefa,
// já que foi completada. Por fim, verifique se "Estudar" ainda está na lista.






// Crie a lista de tarefas
let tarefas = ["Lavar a louça", "Estudar", "Fazer compras"];

// Adicione uma nova tarefa ao final da lista
tarefas.push("Ir à academia");

// Remova a primeira tarefa da lista, pois foi completada
tarefas.shift();

// Verifique se "Estudar" ainda está na lista
let temEstudar = tarefas.includes("Estudar");

// Exibindo o estado final da lista e o resultado da verificação
console.log(tarefas);  // Lista atualizada
console.log(temEstudar);  // Verificação se "Estudar" ainda está na lista
