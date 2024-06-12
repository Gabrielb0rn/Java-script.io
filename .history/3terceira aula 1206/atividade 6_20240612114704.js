//6) Você é um amante da natureza e adora fazer trilhas. Criar um programa que calcule a velocidade média das trilhas que você realiza.
// Para isso, devem ser digitados os dados de distância percorrida (quilômetros) e tempo que a trilha durou (horas).
// Fazer então o cálculo da velocidade média e mostrar na tela a mensagem "Sua média de velocidade durante essa trilha foi de X km/h", sendo X a velocidade.


var distanciaPercorrida = parseFloat(prompt("Digite a distância percorrida (em quilômetros):"));
var tempoTrilhaHoras = parseFloat(prompt("Digite o tempo que a trilha durou (em horas):"));

var velocidadeMedia = distanciaPercorrida / tempoTrilhaHoras;

alert("Sua média de velocidade durante essa trilha foi de " + velocidadeMedia.toFixed(2) + " km/h.");





//x