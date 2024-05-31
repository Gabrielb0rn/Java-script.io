//6) Desenvolver um programa que realize o cálculo de consumo de combustível por quilometragem, para veículos (km por litro). 
//Para isso, devem ser digitados os dados de distância total percorrida (km) e total de combustível gasto (litros), mostrando o resultado ao final.




const distanciaPercorridaKm = parseFloat(prompt("Digite a distância total percorrida (em km): "));

const combustivelGastoLitros = parseFloat(prompt("Digite o total de combustível gasto (em litros): "));

const consumoCombustivelPorKm = distanciaPercorridaKm / combustivelGastoLitros;

alert("O consumo de combustível por quilometragem é de: " + consumoCombustivelPorKm.toFixed(2) + " km/l");

