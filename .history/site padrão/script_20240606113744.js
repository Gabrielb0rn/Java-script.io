
document.getElementById("calcular-votos").addEventListener("click", function() {
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
  });
  
