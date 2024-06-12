//5) Os leões baios são animais territoriais.
// Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos.
// Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental.
// Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e 
//mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.


var numCasais = parseInt(prompt("Digite o número de casais de leões baio:"));


var areaCasais = numCasais * 400;
var numIndividuosSolteiros = 9 + 5 - (2 * numCasais); 
var areaIndividuosSolteiros = numIndividuosSolteiros * 320;
var areaTotal = areaCasais + areaIndividuosSolteiros;

alert("A soma geral da área dominada é de " + areaTotal + " km².");



//x