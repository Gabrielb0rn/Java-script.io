//1) Criar um programa que receba o nome, idade e endereço de uma pessoa e mostre na tela esses dados.



var nome, idade, endereco

idade = Number(prompt('Digite sua idade: '))
nome = String(prompt('Digite o seu nome: '))
endereco = String(prompt('Digite o seu endereço: '))

alert('Sua idade: ' + idade + '\nSeu nome: '+ nome + '\nSeu endereço: '+ endereco)

//extra
let nome, idade, endereco;

do {
    nome = prompt('Digite o seu nome: ');
    if (!nome) {
        alert('Por favor, digite um nome válido.');
    }
} while (!nome);

do {
    let idadeStr = prompt('Digite sua idade: ');
    idade = parseInt(idadeStr);
    if (isNaN(idade) || idade <= 0) {
        alert('Por favor, digite uma idade válida.');
    }
} while (isNaN(idade) || idade <= 0);

do {
    endereco = prompt('Digite o seu endereço: ');
    if (!endereco) {
        alert('Por favor, digite um endereço válido.');
    }
} while (!endereco);

alert('Sua idade: ' + idade + '\nSeu nome: ' + nome + '\nSeu endereço: ' + endereco);


//x