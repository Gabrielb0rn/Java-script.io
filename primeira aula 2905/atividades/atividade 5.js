//5) Uma feira de livros está fazendo promoção onde na compra de 3 livros, o(a) comprador(a) ganha 15% de desconto. 
//Criar um programa que receba os valores dos 3 livros e mostra na tela o total dos livros sem desconto e com desconto.



const precoLivro1 = parseFloat(prompt("Digite o valor do primeiro livro: "));
const precoLivro2 = parseFloat(prompt("Digite o valor do segundo livro: "));
const precoLivro3 = parseFloat(prompt("Digite o valor do terceiro livro: "));

const totalSemDesconto = precoLivro1 + precoLivro2 + precoLivro3;

const desconto = 0.15; // 15%
const totalComDesconto = totalSemDesconto - (totalSemDesconto * desconto);

alert("Total dos livros sem desconto: R$ " + totalSemDesconto.toFixed(2) +
      "\nTotal dos livros com desconto (15%): R$ " + totalComDesconto.toFixed(2));





