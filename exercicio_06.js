//Escreva um programa que leia um valor de uma temperatura
//em CELSIUS e converte para FAHRENHEIT.
//O cálculo é: CELSIUS * 1,8 + 32.

// let celsius = 28;

 //formula
// let fahrenheit = celsius * 1.8 + 32;

// console.log(celsius + " graus Celsius equivale a -> " + fahrenheit + " graus Fahrenheit.");

function converterCelsiusFahrenheit() {
    // Obtém a temperatura em Celsius inserida pelo usuário
    const celsius = parseFloat(document.getElementById('celsius').value);

    // Verifica se o valor inserido é válido
    if (isNaN(celsius)) {
        document.getElementById('resultado').innerText = "Por favor, insira um valor numérico para a temperatura em Celsius.";
        return;
    }
    
    // Calcula a temperatura em Fahrenheit
    const fahrenheit = celsius * 1.8 + 32;
    
    // Exibe o resultado na página
    document.getElementById('resultado').innerText = celsius + " °C é igual a " + fahrenheit.toFixed(2) + " °F.";
}
