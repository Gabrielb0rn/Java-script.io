//12) Faça um programa no qual o usuário digite a cor que está no semáforo (verde, amarelo, vermelho).
// Caso seja digitado verde, mostre na tela "Pode seguir!", se for digitado amarelo, mostre "Alerta, pare!" e se for digitado vermelho, mostre "Pare imediatamente!".

var cor = String(prompt("Digite a cor do semáforo (Verde, Amarelo, Vermelho)"))

if (cor == "Verde") {
    alert("Pode seguir!")
} else if (cor == "Amarelo") {
    alert("Alerta, pare!")
} else if (cor == "Vermelho") {
    alert("Pare imediatamente!")
} else {
    alert("Digite uma cor válida")
}