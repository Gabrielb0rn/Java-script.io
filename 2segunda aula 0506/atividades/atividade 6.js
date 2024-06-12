//6) Em uma fábrica de reciclagem de materiais, cada 10kg de plástico rendem R$2,00 cada 30kg de papel rendem R$3,00 e cada 50kg de metal rendem R$5,00. Perguntar ao usuário a quantidade (kg) de cada material que deseja entregar na fábrica e mostrar o total que receberá em reais. 




function calcularValorRecebido(plastico, papel, metal) {
    const valorPlastico = (plastico / 10) * 2;
    const valorPapel = (papel / 30) * 3;
    const valorMetal = (metal / 50) * 5;
    
    return valorPlastico + valorPapel + valorMetal;
}

let plastico = Number(prompt('Digite a quantidade de plástico em kg: '));
if (isNaN(plastico) || plastico < 0) {
    alert('Quantidade inválida, tente novamente.');
} else {
    let papel = Number(prompt('Digite a quantidade de papel em kg: '));
    if (isNaN(papel) || papel < 0) {
        alert('Quantidade inválida, tente novamente.');
    } else {
        let metal = Number(prompt('Digite a quantidade de metal em kg: '));
        if (isNaN(metal) || metal < 0) {
            alert('Quantidade inválida, tente novamente.');
        } else {
            let valorTotal = calcularValorRecebido(plastico, papel, metal);
            alert('O valor total que você receberá é: R$' + valorTotal.toFixed(2));
        }
    }
}









//x