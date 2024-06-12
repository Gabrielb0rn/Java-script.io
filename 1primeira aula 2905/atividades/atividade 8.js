//8) Uma pousada cobra R$280 reais a diária por quarto e R$15 reais o café por pessoa por dia. 
//Você pretende passar um tempo com alguns amigos nessa pousada, sendo que todos ficarão no mesmo quarto. 
//Informar a quantidade de pessoas, o número de diárias e quantas pessoas do grupo vão querer café diário. Mostrar na tela o total a pagar.



const quantidadePessoas = parseInt(prompt("Digite a quantidade de pessoas no grupo: "));

const numeroDiarias = parseInt(prompt("Digite o número de diárias desejadas: "));

const pessoasComCafeDiario = parseInt(prompt("Digite a quantidade de pessoas que desejam café diário: "));

const valorDiariaQuarto = 280;
const valorCafePorPessoa = 15;

const totalDiarias = valorDiariaQuarto * numeroDiarias;
const totalCafe = valorCafePorPessoa * pessoasComCafeDiario * numeroDiarias;

const totalPagar = totalDiarias + totalCafe;

alert("Total a pagar: R$ " + totalPagar.toFixed(2));


//x