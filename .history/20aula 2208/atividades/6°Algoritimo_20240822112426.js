/*
Maria está realizando compras online. Crie um array inicialmente vazio chamado 'carrinho'. Adicione os produtos
"camiseta", "calça" e "sapato" ao carrinho. Remova o primeiro produto da lista e,
em seguida, modifique o segundo produto para "tênis". Imprima o carrinho de compras atualizado no final.
*/


// Criando um array inicialmente vazio chamado 'carrinho'
let carrinho = [];

// Adicionando os produtos "camiseta", "calça" e "sapato" ao carrinho
carrinho.push("camiseta");
carrinho.push("calça");
carrinho.push("sapato");

// Removendo o primeiro produto da lista
carrinho.shift();

// Modificando o segundo produto para "tênis"
carrinho[1] = "tênis";

// Imprimindo o carrinho de compras atualizado no final
console.log("Carrinho de Compras Atualizado:", carrinho);
