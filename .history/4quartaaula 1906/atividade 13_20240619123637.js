
//13) Em um jogo o seu personagem tem 100 de HP (vida). 
//Criar um programa onde o usuário digite o valor de um dano (ataque sofrido pelo personagem). 
//Caso a vida do personagem chegue a zero ou negativo, mostrar na tela "Game Over". 
//Se a vida ficar de 1 a 20, mostrar "Dano crítico, quase sem vida", se a vida ficar de 21 a 50, mostrar "Dano moderado, vida estável" 
//e se a vida ficar entre 51 a 100, mostrar "Dano leve, vida boa!".

let vida = 100;
var dano = prompt('Digite o valor do dano: ')

Vida = dano - vida

if (Vida <= 0) {
    alert('Game Over');
} else if (Vida <= 20) {
    alert('Dano crítico, quase sem vida');
} else if (Vida <= 50) {
    alert('Dano moderado, vida estável');
} else if (Vida <= 100) {
    alert('Dano leve, vida boa!');
}
