//20) Você é um ciclista profissional e pretende participar da competição "Volta à Ilha de Bike", revezamento em equipes, com equipes de 4 integrantes. 
//O percurso tem um total de 140km, sendo dividido em 4 partes: Trecho 1 Av. Beira-Mar até Cachoeira do Bom Jesus (30km),
//Trecho 2 Cachoeira do Bom Jesus até Lagoa da Conceição (45km), Trecho 3 Lagoa da Conceição até Pântano do Sul (30km), Trecho 4 Pântano do Sul até Av. Beira-Mar (35km). 
//Criar um programa que recebe o nome da equipe, em seguida o nome de cada um dos 4 integrantes e o tempo em horas que gastou pedalando o seu trecho. 
//Ao final mostrar a velocidade média de cada trecho e a velocidade média geral (total dos 4 trechos) com duas casas após a vírgula. 
//Se a velocidade média geral ficar abaixo de 15km/h mostrar uma mensagem "Desempenho pode melhorar bastante!", 
//caso a velocidade média fique de 15 a 18km/h mostrar uma mensagem "Desempenho bom, mas ainda pode melhorar!" e se a média ficar acima de 18km/h 
//mostrar uma mensagem "Desempenho excelente. Parabéns!"

var nomeEquipe = prompt("Digite o nome da equipe: ");

var nomesIntegrantes = [];
var temposTrechos = [];

for (var i = 1; i <= 4; i++) {
  nomesIntegrantes.push(prompt("Digite o nome do integrante " + i + ": "));
  temposTrechos.push(parseFloat(prompt("Digite o tempo do trecho " + i + " em horas: ")));
}

var distanciasTrechos = [30, 45, 30, 35];
var velocidadesTrechos = [];
var velocidadeMediaGeral = 0;

for (var i = 0; i < 4; i++) {
  velocidadesTrechos.push((distanciasTrechos[i] / temposTrechos[i]).toFixed(2));
  velocidadeMediaGeral += distanciasTrechos[i] / temposTrechos[i];
}

velocidadeMediaGeral = (velocidadeMediaGeral / 4).toFixed(2);

console.log("--------------------------------------------------");
console.log("Resultados da equipe " + nomeEquipe + ":");
console.log("--------------------------------------------------");

for (var i = 0; i < 4; i++) {
  console.log("Trecho " + (i + 1) + ": " + nomesIntegrantes[i] + " - Velocidade média: " + velocidadesTrechos[i] + " km/h");
}

console.log("Velocidade média geral: " + velocidadeMediaGeral + " km/h");

if (velocidadeMediaGeral < 15) {
  console.log("Desempenho pode melhorar bastante!");
} else if (velocidadeMediaGeral >= 15 && velocidadeMediaGeral <= 18) {
    alert("Desempenho bom, mas ainda pode melhorar!");
} else {
  alert("Desempenho excelente. Parabéns!");
}

//x