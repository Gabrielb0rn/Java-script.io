//10) As baleias da Groenlândia estão entre os animais que vivem mais tempo na Terra, em média 200 anos. 
//A reprodução se dá a cada 4 anos, tendo somente 1 filhote por vez. 
//Programar um sistema que calcule o total de filhotes ao longo da vida e a média de filhotes de uma baleia dessa espécie por década.



const expectativaVida = 200;
const intervaloReproducao = 4;

const totalFilhotes = Math.floor(expectativaVida / intervaloReproducao);

const decadas = expectativaVida / 10;
const mediaFilhotesPorDecada = totalFilhotes / decadas;

console.log("Total de filhotes ao longo da vida: " + totalFilhotes);
console.log("Média de filhotes por década: " + mediaFilhotesPorDecada.toFixed(2));


//x