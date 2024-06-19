//12) Faça um programa no qual o usuário digite a cor que está no semáforo (verde, amarelo, vermelho).
// Caso seja digitado verde, mostre na tela "Pode seguir!", se for digitado amarelo, mostre "Alerta, pare!" e se for digitado vermelho, mostre "Pare imediatamente!".

var cor = prompt("Digite a cor do semáforo")

if (cor == "verde") {
    alert("Pode seguir!")
} else if (cor == "amarelo") {
    alert("Alerta, pare!")
} else if (cor == "vermelho") {
    alert("Pare imediatamente!")
} else {
    alert("Digite uma cor válida")
}