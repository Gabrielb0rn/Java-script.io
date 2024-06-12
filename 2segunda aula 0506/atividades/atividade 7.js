//7) Em uma festa de família alemã, 45 pessoas foram convidadas para beber. Para tanto, foram comprados 300 litros de chopp. 
//Criar um programa que calcule a média de litros bebidos por pessoa, considerando ainda a quantidade de chopp (litros) desperdiçado 
//e a quantidade de chopp (litros) que sobrou. Esses dados devem ser digitados pelo usuário. 
//Caso não tenha havido desperdício e não tenha sobrado chopp, digitar 0 para ambos. Ao final, mostrar a média de litros bebidos por pessoa na festa.






const convidados = 45;
const totalChopp = 300;

let desperdicado = Number(prompt('Digite a quantidade de chopp desperdiçado em litros: '));
if (isNaN(desperdicado) || desperdicado < 0) {
    alert('Quantidade inválida, tente novamente.');
} else {
    let sobrou = Number(prompt('Digite a quantidade de chopp que sobrou em litros: '));
    if (isNaN(sobrou) || sobrou < 0) {
        alert('Quantidade inválida, tente novamente.');
    } else {
        let consumido = totalChopp - desperdicado - sobrou;
        let mediaPorPessoa = consumido / convidados;
        alert('A média de litros bebidos por pessoa na festa é: ' + mediaPorPessoa.toFixed(2) + ' litros.');
    }
}




//x