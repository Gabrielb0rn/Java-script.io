//19) Um nutricionista precisa controlar a dieta para pacientes celíacos (intolerantes à glúten) e pacientes com intolerância à lactose. 
//Criar um programa onde o paciente deve digitar seu nome e em seguida responder se é celíaco (primeira pergunta) e se é intolerante à lactose (segunda pergunta). 
//Validar as respostas de SIM e NÃO para letras maiúsculas e minúsculas. 
//Em seguida coletar os dados de 3 alimentos, sendo digitado o nome do alimento, se ele contém glúten ou não e se ele contém lactose ou não. 
//Ao final, informar se o paciente pode comer os 3 alimentos digitados "Dieta adequada!" ou não pode "Dieta inadequada, 
//contém alimentos aos quais o paciente é intolerante!".

var nome = String(prompt('Digite seu nome: '));
var nomeCalico = String(prompt('Você é celíaco? (S ou N)\nResposta: ')).toUpperCase();
var nomeLactose = String(prompt('Você é intolerante à lactose? (S ou N)\nResposta: ')).toUpperCase();

var dietaAdequada = true;

for (var i = 1; i <= 3; i++) {
  var alimento = String(prompt('Digite o nome do alimento ' + i + ': '));
  var contemGluten = String(prompt('O alimento ' + alimento + ' contém glúten? (S ou N)\nResposta: ')).toUpperCase();
  var contemLactose = String(prompt('O alimento ' + alimento + ' contém lactose? (S ou N)\nResposta: ')).toUpperCase();

  if ((nomeCalico === 'S' && contemGluten === 'S') || (nomeLactose === 'S' && contemLactose === 'S')) {
    dietaAdequada = false;
    break;
  }
}

if (dietaAdequada) {
  console.log("Dieta adequada!");
} else {
  console.log("Dieta inadequada, contém alimentos aos quais o paciente é intolerante!");
}














//x