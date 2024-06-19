//4) Seu sonho é construir uma piscina. Para cada metro quadrado, são necessários 120 azulejos.
// O cálculo de área em metros quadrados, é feito multiplicando a largura pelo comprimento. 
// Digitar os valores (em metros) da largura e comprimento que deseja a piscina. 
// Mostrar na tela a quantidade de azulejos que devem ser comprados e o valor total a ser pago, sendo que uma caixa de azulejo com 60 unidades custa R$45,50.



var largura = parseFloat(prompt("Digite a largura da piscina (em metros):"));
var comprimento = parseFloat(prompt("Digite o comprimento da piscina (em metros):"));

var area = largura * comprimento;
var quantidadeAzulejos = area * 120;
var precoPorCaixa = 45.50;
var quantidadeCaixas = Math.ceil(quantidadeAzulejos / 60);
var valorTotal = quantidadeCaixas * precoPorCaixa;

alert("Quantidade de azulejos necessários: " + quantidadeAzulejos + "\nValor total a ser pago: R$" + valorTotal.toFixed(2));





//x 