//4) Uma cidade pretende apurar os votos de sua eleição. 
//Faça um programa para ler o número total de eleitores. 
//Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, 
//deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 

let totalEleitores = Number(prompt('Digite o total de eleitores: '));

if (isNaN(totalEleitores) || totalEleitores <= 0) {
    alert('Valor inválido, tente novamente.');
} else {
    let votosX = Number(prompt('Digite quantos votos o candidato X obteve: '));
    if (isNaN(votosX) || votosX < 0) {
        alert('Valor inválido, tente novamente.');
    } else {
        let votosY = Number(prompt('Digite quantos votos o candidato Y obteve: '));
        if (isNaN(votosY) || votosY < 0) {
            alert('Valor inválido, tente novamente.');
        } else {
            let votosB = Number(prompt('Digite quantos votos brancos: '));
            if (isNaN(votosB) || votosB < 0) {
                alert('Valor inválido, tente novamente.');
            } else {
                let votosN = Number(prompt('Digite quantos votos nulos: '));
                if (isNaN(votosN) || votosN < 0) {
                    alert('Valor inválido, tente novamente.');
                } else {
                    let totalVotos = votosX + votosY + votosB + votosN;
                    if (totalVotos !== totalEleitores) {
                        alert('O total de votos não é igual ao número de eleitores. Tente novamente.');
                    } else {
                        let percentualX = (votosX / totalEleitores) * 100;
                        let percentualY = (votosY / totalEleitores) * 100;
                        let percentualB = (votosB / totalEleitores) * 100;
                        let percentualN = (votosN / totalEleitores) * 100;

                        alert(
                            `Resultados:\n` +
                            `Candidato X: ${percentualX.toFixed(2)}%\n` +
                            `Candidato Y: ${percentualY.toFixed(2)}%\n` +
                            `Votos Brancos: ${percentualB.toFixed(2)}%\n` +
                            `Votos Nulos: ${percentualN.toFixed(2)}%`
                        );
                    }
                }
            }
        }
    }
}

//x 