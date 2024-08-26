/*
Uma loja precisa atualizar seu sistema de controle de estoque.
Crie um vetor chamado 'estoqueProdutos' com os produtos "camiseta", "calça" e "sapato". 
Adicione o produto "meia" ao final da lista. Remova o primeiro produto da lista e mude
o segundo produto para "bermuda". Imprima o estoque atualizado no final.
*/



// Criando o vetor com os produtos iniciais
let estoqueProdutos = ["camiseta", "calça", "sapato"];

// Adicionando "meia" ao final da lista
estoqueProdutos.push("meia");

// Removendo o primeiro produto da lista
estoqueProdutos.shift();

// Mudando o segundo produto para "bermuda"
estoqueProdutos[1] = "bermuda";

// Imprimindo o estoque atualizado
console.log(estoqueProdutos);
