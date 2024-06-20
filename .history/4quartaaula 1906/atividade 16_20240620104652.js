
//16) Elabore um programa que leia três lados de um triângulo e mostre na tela se ele é equilátero, isósceles ou escaleno. 
//Quando os três lados forem iguais trata-se de um triângulo equilátero, dois lados iguais é um triângulo isósceles e os três lados diferentes é um triângulo escaleno.


var ladoUm = Number(prompt('Digite o primeiro lado do triângulo: '))
var ladoDois = Number(prompt('Digite o segundo lado do triângulo: '))
var ladoTres = Number(prompt('Digite o terceiro lado do triângulo: '))

if (ladoUm === ladoDois && ladoDois === ladoTres) {
    alert('Triângulo Equilátero')
} else if (ladoUm === ladoDois || ladoUm === ladoTres || ladoDois === ladoTres) {
    alert('Triângulo Isósceles')
} else {
    alert('Triângulo Escaleno')
}


//x