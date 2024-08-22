/*
João está planejando seus exercícios físicos semanais. Crie um array chamado exerciciosSemana com os exercícios
"corrida", "flexões" e "abdominais". Verifique se o último exercício da lista é "alongamento".
Se não for, adicione "alongamento" ao final da lista. Imprima a lista de exercícios atualizada no final.
*/




// Criando um array chamado 'exerciciosSemana' com três exercícios
let exerciciosSemana = ["corrida", "flexões", "abdominais"];

// Verificando se o último exercício da lista é "alongamento"
if (exerciciosSemana[exerciciosSemana.length - 1] !== "alongamento") {
    exerciciosSemana.push("alongamento");
}

// Imprimindo a lista de exercícios atualizada no final
console.log("Lista de Exercícios Atualizada:", exerciciosSemana);
