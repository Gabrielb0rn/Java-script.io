//7) Criar um programa que realize o cálculo de uma média ponderada (considerando o peso da nota) da faculdade.
// A média é composta por três notas: Atividade Individual, Seminário em Equipe, Projeto final.
// O usuário deve digitar as três notas e os seus respectivos pesos.
// A média deve ser calculada e mostrada na tela.



// Pedindo ao usuário para digitar as três notas
var notaAtividade = parseFloat(prompt("Digite a nota da Atividade Individual:"));
var notaSeminario = parseFloat(prompt("Digite a nota do Seminário em Equipe:"));
var notaProjeto = parseFloat(prompt("Digite a nota do Projeto Final:"));

// Pedindo ao usuário para digitar os pesos das notas
var pesoAtividade = parseFloat(prompt("Digite o peso da Atividade Individual (em porcentagem):"));
var pesoSeminario = parseFloat(prompt("Digite o peso do Seminário em Equipe (em porcentagem):"));
var pesoProjeto = parseFloat(prompt("Digite o peso do Projeto Final (em porcentagem):"));

// Calculando a média ponderada
var somaPesos = pesoAtividade + pesoSeminario + pesoProjeto;
var mediaPonderada = (notaAtividade * (pesoAtividade / 100) + notaSeminario * (pesoSeminario / 100) + notaProjeto * (pesoProjeto / 100)) / somaPesos;

// Mostrando o resultado na tela
alert("A média ponderada é: " + mediaPonderada.toFixed(2));


















//x