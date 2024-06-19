//7) Criar um programa que pergunte o nome e a idade da pessoa, e se tem comorbidade (S ou N). 
//Mostrar mensagem "Pode se vacinar!" caso a idade seja maior ou igual a 60 ou tenha comorbidade. 
//Caso contrário, mostrar mensagem "Não pode se vacinar!".

var nome = String(prompt('Digite seu nome'))
var idade = Number(prompt('Digite sua idade'))
var comorbidade = String(prompt('Tem comorbidade (S ou N)'))

if (idade >= 60 || comorbidade == 'S') {
    alert('Pode se vacinar!')
} else {
    alert('Não pode se vacinar!'));}


//x