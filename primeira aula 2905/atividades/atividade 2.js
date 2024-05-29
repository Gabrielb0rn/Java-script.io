//2) Na sua lista de compras do mercado, constam apenas 3 itens: arroz, batata palha e um suco de garrafa.
// Porém, você possui apenas uma nota de R$100 para pagar.
// Faça um programa no qual sejam digitados os valores dos itens e mostre na tela valor que você deve receber (troco).

let arroz, batataPalha, sucoDeGarrafa

arroz = Number(10)
batataPalha = Number(15)
sucoDeGarrafa = Number(25)

let dinheiro = Number(100)

var escolha = String(prompt('Escolha os itens que deseja comprar:\n1- Arroz\n2- Batata palha\n3-Suco de garrafa'))

switch escolha{
    case 1:
    troco = (arroz % dinheiro)
    alert(troco)
}