//17) Em uma máquina de cassino, ao jogar o jogador sempre ganha. 
//Em cada 'partida' o jogador pode formar sequências de frutas que rendem valores em dinheiro. 
//Criar um programa que pergunte ao jogador as três frutas sorteadas e mostre o valor ganho de acordo com a tabela a seguir.

  // CEREJA - CEREJA - CEREJA -> R$100
  // LARANJA - LARANJA - LARANJA -> R$80
  // CEREJA - LARANJA - CEREJA -> R$50
  // LARANJA - CEREJA - LARANJA -> R$25

  var frutaUm = prompt("Qual a primeira fruta? (CEREJA OU LARANJA)\nResposta: ").toUpperCase();
  var frutaDois = prompt("Qual a segunda fruta? (CEREJA OU LARANJA)\nResposta: ").toUpperCase();
  var frutaTres = prompt("Qual a terceira fruta? (CEREJA OU LARANJA)\nResposta: ").toUpperCase();
  var premio = 0;

  // a função toUpperCase
  
  if (frutaUm === "CEREJA" && frutaDois === "CEREJA" && frutaTres === "CEREJA") {
    premio = 100;
  } else if (frutaUm === "LARANJA" && frutaDois === "LARANJA" && frutaTres === "LARANJA") {
    premio = 80;
  } else if (frutaUm === "CEREJA" && frutaDois === "LARANJA" && frutaTres === "CEREJA") {
    premio = 50;
  } else if (frutaUm === "LARANJA" && frutaDois === "CEREJA" && frutaTres === "LARANJA") {
    premio = 25;
  }
  
  alert("Parabéns! Você ganhou R$" + premio + "!");

  //x