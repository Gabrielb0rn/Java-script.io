//4) Faça um programa que solicite o salário e os anos de serviço de um funcionário. Se ele tiver mais de 5 anos de serviço, dê um bônus de 5% sobre o salário.



var largura = parseFloat(prompt("Digite a largura da piscina (em metros):"));
var comprimento = parseFloat(prompt("Digite o comprimento da piscina (em metros):"));

var area = largura * comprimento;
var quantidadeAzulejos = area * 120;
var precoPorCaixa = 45.50;
var quantidadeCaixas = Math.ceil(quantidadeAzulejos / 60);
var valorTotal = quantidadeCaixas * precoPorCaixa;

alert("Quantidade de azulejos necessários: " + quantidadeAzulejos + "\nValor total a ser pago: R$" + valorTotal.toFixed(2));





//x 