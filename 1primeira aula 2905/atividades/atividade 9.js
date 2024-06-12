//9) Um festival de balonismo oferece passeios de balão. Para cada 5 minutos de voo, são necessários 10m³ (metros cúbicos) de gás, sendo que o metro cúbico de gás custa R$15 reais. 
//No balão cabem no máximo 4 pessoas. O cálculo do valor do passeio é feito somando o valor gasto em gás, mais uma taxa de R$20 reais por pessoa. 
//Criar um programa que pergunte quantas pessoas vão no passeio e o tempo de passeio. Mostrar na tela o total cobrado pelo passeio.


const numeroPessoas = parseInt(prompt("Digite o número de pessoas que irão no passeio: "));

const tempoPasseioMinutos = parseInt(prompt("Digite o tempo de passeio desejado em minutos: "));

const volumeGasMetroCubico = (tempoPasseioMinutos / 5) * 10;

const valorGas = volumeGasMetroCubico * 15;

const taxaPorPessoa = 20;

const totalCobrado = valorGas + (taxaPorPessoa * numeroPessoas);

alert("Total cobrado pelo passeio: R$ " + totalCobrado.toFixed(2));


//x