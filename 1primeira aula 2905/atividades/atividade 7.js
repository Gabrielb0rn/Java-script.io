//7) Um festival de música está terceirizando a montagem da estrutura. A empresa contratada necessita saber uma estimativa de público para calcular a quantidade de bares e banheiros. 
//O cálculo utilizado é de 1 banheiro para cada 50 pessoas e 1 bar para cada 150 pessoas. 
//Criar um programa onde seja digitado o público esperado e mostrar na tela em média quantos banheiros e bares seriam necessários.




const publicoEsperado = parseInt(prompt("Digite o público esperado para o festival de música: "));

const banheirosNecessarios = Math.ceil(publicoEsperado / 50);
const baresNecessarios = Math.ceil(publicoEsperado / 150);

alert("Com um público de " + publicoEsperado + " pessoas:\n" +
      "Seriam necessários em média " + banheirosNecessarios + " banheiro(s) e " +
      baresNecessarios + " bar(es).");



//x