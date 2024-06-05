//5) Criar um programa que calcule o IMC, no qual o usuário deve digitar o seu peso e altura, realizar o cálculo (peso / altura * altura) e mostrar o resultado na tela. 



function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

let peso = Number(prompt('Digite seu peso em kg: '));
if (isNaN(peso) || peso <= 0) {
    alert('Peso inválido, tente novamente.');
} else {
    let altura = Number(prompt('Digite sua altura em metros: '));
    if (isNaN(altura) || altura <= 0) {
        alert('Altura inválida, tente novamente.');
    } else {
        let imc = calcularIMC(peso, altura);
        alert('Seu IMC é: ' + imc.toFixed(2));
    }
}



//x