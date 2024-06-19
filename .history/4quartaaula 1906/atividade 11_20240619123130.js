//11)  Elabore um programa que converta uma quantidade de dólares para reais. 
//Devem ser solicitados o valor em dólares e a cotação do dólar. Mostre a conversão para reais na tela. 
//Se a cotação do dólar estiver acima de 5 reais, exiba uma mensagem informando que está caro, senão exiba uma mensagem de que está barato.


var valorDolar = Number(prompt('Digite o valor em dolares: '))
var cotacaoDolar = Number(prompt('Digite a cotação do dolar: '))

conversaoDolar = valorDolar * cotacaoDolar

alert('O valor em reais é: ' + conversaoDolar)


if (cotacaoDolar > 5) {
    alert('Está caro');
} else {
    alert('Esta barato');
}

