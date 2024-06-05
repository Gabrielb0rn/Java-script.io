//4) Uma cidade pretende apurar os votos de sua eleição. 
//Faça um programa para ler o número total de eleitores. 
//Em seguida o número de votos do candidato X, o número de votos do candidato Y, total de votos brancos e total de votos nulos (a soma desses quatro, 
//deve ser igual ao total de eleitores). Calcular e escrever o percentual que cada um representa em relação ao total de eleitores. 

totalEleitores = Number(prompt('Digite o total de eleitores: '))

if (isNaN(totalEleitores)){
    alert('Valor inválido, tente novamente.')
}
 else votosX = Number(prompt('Digite quantos votos o candidato X obteve: '))
  if (isNaN(votosX)){
    alert('Valor inválido, tente novamente.')
  }
   else votosY = Number(prompt('Digite quantos votos o candidato Y obteve: '))
    if (isNaN(votosY)){
    alert('Valor inválido, tente novamente.')
  } 
     else votosB = Number(prompt('Digite quantos votos brancos: '))
      if (isNaN(votosB)){
     alert('Valor inválido, tente novamente.')
     } 
      else votosN = Number(prompt('Digite quantos votos nulos: '))
       if (isNaN(votosN)){
    alert('Valor inválido, tente novamente.')
    }   
        else (verificarTotal) (votosX + votosY + votosB + votosN)
         if ((verificarTotal) = (totalEleitores)){
            
         }

//x