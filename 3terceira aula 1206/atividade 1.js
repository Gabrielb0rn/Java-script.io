//1) Desenvolva um programa que pergunte ao usuário o salário bruto e calcule o salário líquido, considerando um desconto de 20% para impostos.


var salarioBruto = parseFloat(prompt("Digite o salário bruto:"));

var descontoImposto = salarioBruto * 0.20;

var salarioLiquido = salarioBruto - descontoImposto;

alert("O salário líquido é: " + salarioLiquido.toFixed(2));


//x