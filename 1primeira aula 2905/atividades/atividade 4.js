//4) Um(a) programador(a) deseja, ao final do mês, saber quantas horas por semana em média estudou programação.
//Crie um programa no qual seja digitado a quantidade de horas de cada semana do mês e no final mostre a média de horas por semana naquele mês.



let horasPorSemana = [];
const semanasNoMes = 4;

for (let i = 0; i < semanasNoMes; i++) {
    const horasSemana = parseFloat(prompt("Digite a quantidade de horas estudadas na semana " + (i + 1) + ": "));
    horasPorSemana.push(horasSemana);
}

let totalHoras = 0;
for (let i = 0; i < horasPorSemana.length; i++) {
    totalHoras += horasPorSemana[i];
}
const mediaHorasPorSemana = totalHoras / semanasNoMes;

alert("Média de horas por semana no mês: " + mediaHorasPorSemana.toFixed(2));




//x