//8) Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) 
//e uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25).

var alturaEmMetros = Number(prompt("Digite sua altura em centimetros: "));
var peso = Number(prompt("Digite seu peso: "));

var alturaEmMetros = altura / 100; 

var imc = peso / (alturaEmMetros * alturaEmMetros);

if (imc < 18) {
  console.log("Seu IMC é: " + imc.toFixed(2) + ". Você está abaixo do peso.");
} else if (imc >= 18 && imc <= 25) {
  console.log("Seu IMC é: " + imc.toFixed(2) + ". Você está na faixa de peso ideal.");
} else {
  console.log("Seu IMC é: " + imc.toFixed(2) + ". Você está acima do peso.");
}



//x