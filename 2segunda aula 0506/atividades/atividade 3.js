//3) Programar a conversão de uma temperatura digitada pelo usuário em graus Celsius para Fahrenheit. Mostrar o resultado na tela. 



function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

let celsius = Number(prompt('Digite a temperatura em graus Celsius: '));

if (isNaN(celsius)) {
    alert('Digite uma temperatura válida.');
} else {
    let fahrenheit = celsiusParaFahrenheit(celsius);

    alert('A temperatura em Fahrenheit é: ' + fahrenheit.toFixed(2) + '°F');
}



//x