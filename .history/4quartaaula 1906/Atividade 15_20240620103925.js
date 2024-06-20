//15) Uma feira está realizando promoção na compra de ovos. 
//Os ovos custam 40 centavos cada, se forem comprados até 12 (uma dúzia), 30 centavos cada, se forem comprados de 13 a 24 (até duas dúzias) e 25 centavos cada, 
//caso sejam comprados mais que duas dúzias. Faça um programa que leia o número de ovos comprados, calcule e mostre na tela o valor total da compra.






var ovosComprados = parseInt(prompt("Digite o número de ovos comprados: "));
var valorTotal = 0;

if (ovosComprados <= 12) {
  valorTotal = ovosComprados * 0.40;
} else if (ovosComprados <= 24) {
  valorTotal = ovosComprados * 0.30;
} else {
  valorTotal = ovosComprados * 0.25;
}

console.log("O valor total da compra é: R$ " + valorTotal.toFixed(2));















