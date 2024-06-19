//8) Fazer um programa no qual o usuário digite a sua altura e o seu peso, ao final mostre o IMC (índice de massa corporal) 
//e uma mensagem se está abaixo do peso (IMC menor que 18), na faixa de peso ideal (IMC de 18 a 25) ou acima do peso (IMC maior 25).

var altura = Number(prompt("Digite sua altura: "));
var peso = Number(prompt("Digite seu peso: "));
var imc = peso / (altura * altura);

if (imc < 18) {
    alert("Você está abaixo do peso");
} else if (imc >= 18 && imc <= 25) {
    alert("Você está na faixa de peso ideal");
} else {
    alert("Você está acima do peso");
}

//x