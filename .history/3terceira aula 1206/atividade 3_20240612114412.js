//3) Crie um programa no qual o usuário deve digitar um número (base) e o seu expoente. Apresentar na tela o resultado da exponenciação.


var base = parseFloat(prompt("Digite a base:"));
var expoente = parseInt(prompt("Digite o expoente:"));
var resultado = Math.pow(base, expoente);

alert("O resultado da exponenciação é: " + resultado);


//x