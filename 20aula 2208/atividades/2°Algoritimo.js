/*Desenvolva um aplicativo de lista de compras automatizada. Crie um array vazio chamado 'listaCompras'. 
Solicite ao usuário para adicionar três itens à lista. Verifique se o último item adicionado é "leite". 
Se não for, adicione "leite" ao final da lista. Imprima a lista de compras no final.*/






// Criando um array vazio chamado 'listaCompras'
let listaCompras = [];

// Solicitando ao usuário para adicionar três itens à lista
for (let i = 0; i < 3; i++) {
    let item = prompt("Adicione um item à lista de compras:");
    listaCompras.push(item);
}

// Verificando se o último item adicionado é "leite"
if (listaCompras[listaCompras.length - 1].toLowerCase() !== "leite") {
    listaCompras.push("leite");
}

// Imprimindo a lista de compras no final
console.log("Lista de Compras:", listaCompras);
