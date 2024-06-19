//1) Crie um programa onde o usuário digite um número e informe se é positivo ou negativo.

var salarioBruto = parseFloat(prompt("Digite o salário bruto:"));

var descontoImposto = salarioBruto * 0.20;

var salarioLiquido = salarioBruto - descontoImposto;

alert("O salário líquido é: " + salarioLiquido.toFixed(2));


//x