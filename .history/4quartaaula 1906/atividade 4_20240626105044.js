//4) Faça um programa que solicite o salário e os anos de serviço de um funcionário.
// Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.

var salarioBruto = parseFloat(prompt("Digite o salário bruto:"));
var anosServico = parseInt(prompt("Digite os anos de serviço:"));

if (anosServico > 5) {
  var bonus = salarioBruto * 0.05;
  var salarioLiquido = salarioBruto + bonus;
  alert("Salário líquido: R$" + salarioLiquido.toFixed(2));
} else {
  alert("Salário líquido: R$" + salarioBruto.toFixed(2));
}

//a função toFixed(2) Retorna '0.00'


//x 