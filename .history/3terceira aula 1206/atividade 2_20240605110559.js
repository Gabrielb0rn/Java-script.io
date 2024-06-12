//2) Desenvolva uma programação que peça ao usuário para digitar o ano do seu nascimento no formato (YYYY) e o ano atual também no formato (YYYY). 
//Em seguida mostre na tela qual a idade do usuário em anos, em meses, em dias e em semanas. 




let anoAtual = 2024;

let anoNascimento = Number(prompt('Digite seu ano de nascimento no formato (YYYY): '));

if (isNaN(anoNascimento) || anoNascimento > anoAtual) {
    alert('Digite uma data válida.');
} else {
    let idade = anoAtual - anoNascimento;
    
    let meses = idade * 12;
    let dias = idade * 365;
    let semanas = Math.floor(dias / 7);

    alert('Você tem ' + idade + ' anos, ' + meses + ' meses, ' + dias + ' dias, e ' + semanas + ' semanas.');
}


//x