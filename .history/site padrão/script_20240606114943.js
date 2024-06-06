
  document.getElementById("calcular-votos").addEventListener("click", calculateResults);
  
  const calculateResults = () => {
    try {
      const totalEleitores = Number(prompt('Digite o total de eleitores: '));
  
      if (isNaN(totalEleitores) || totalEleitores <= 0) {
        alert('Valor inválido, tente novamente.');
        return;
      }
  
      const votos = [];
      for (let i = 0; i < 4; i++) {
        const promptMessage = ['Digite quantos votos o candidato X obteve: ',
                              'Digite quantos votos o candidato Y obteve: ',
                              'Digite quantos votos em branco: ',
                              'Digite quantos votos nulos: '][i];
        const voto = Number(prompt(promptMessage));
  
        if (isNaN(voto) || voto < 0) {
          alert('Valor inválido, tente novamente.');
          return;
        }
  
        votos.push(voto);
      }
  
      const totalVotos = votos.reduce((sum, voto) => sum + voto, 0);
  
      if (totalVotos !== totalEleitores) {
        alert('O total de votos não é igual ao número de eleitores. Tente novamente.');
        return;
      }
  
      const percentuais = votos.map((voto, index) => {
        return (voto / totalEleitores) * 100;
      });
  
      const resultados = `Resultados:\n` +
                         `Candidato X: ${percentuais[0].toFixed(2)}%\n` +
                         `Candidato Y: ${percentuais[1].toFixed(2)}%\n` +
                         `Votos em Branco: ${percentuais[2].toFixed(2)}%\n` +
                         `Votos Nulos: ${percentuais[3].toFixed(2)}%`;
  
      alert(resultados);
    } catch (error) {
      console.error(error);
    }
  };
  