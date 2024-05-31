//2) Na sua lista de compras do mercado, constam apenas 3 itens: arroz, batata palha e um suco de garrafa.
// Porém, você possui apenas uma nota de R$100 para pagar.
// Faça um programa no qual sejam digitados os valores dos itens e mostre na tela valor que você deve receber (troco).


const precoArroz = parseFloat(prompt("Digite o preço do arroz: "));
const precoBatataPalha = parseFloat(prompt("Digite o preço da batata palha: "));
const precoSuco = parseFloat(prompt("Digite o preço do suco de garrafa: "));

const totalCompra = precoArroz + precoBatataPalha + precoSuco;

if (totalCompra <= 100) {
    const troco = 100 - totalCompra;
    console.log("O seu troco é de R$" + troco.toFixed(2));
} else {
    console.log("Desculpe, mas o valor total da compra excede R$100. Não é possível realizar a compra com essa quantia.");
}


