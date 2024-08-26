// Você tem um array com os nomes dos dias da semana ["Segunda", "Terça",
//     "Quarta", "Quinta", "Sexta"]. Adicione "Sábado" ao final do array e "Domingo"
//     ao início. Em seguida, remova o último dia da semana. Passos:
//     1. Adicione "Sábado" ao final do array.
//     2. Adicione "Domingo" ao início do array.
//     3. Remova o último elemento do array.



// Passo 1: Crie o array com os nomes dos dias da semana
let diasDaSemana = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

// Passo 2: Adicione "Sábado" ao final do array
diasDaSemana.push("Sábado");

// Passo 3: Adicione "Domingo" ao início do array
diasDaSemana.unshift("Domingo");

// Passo 4: Remova o último elemento do array
diasDaSemana.pop();

// Exibindo o array resultante
console.log(diasDaSemana);
