//3) Desenvolva um programa que peça dois números ao usuário e informe qual é o maior e qual é o menor, ou se são iguais.

var numero1 = prompt("Digite o primeiro número: ");
var numero2 = prompt("Digite o segundo número: ");

if (numero1 > numero2) {
  alert("O primeiro número é maior que o segundo.");
} else if (numero1 < numero2) {
  alert("O segundo número é maior que o primeiro.");
} else {
  alert("Os números são iguais.");
}

//x