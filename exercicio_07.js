//Crie um programa que verifica se um número é positivo, negativo ou zero.

// let num = -9;

// if (num > 0) {
//     console.log("positivo.");
// } else if (num < 0) {
//     console.log("negativo.");
// } else {
//     console.log("O número é zero.");
// }

document.getElementById('verificar').addEventListener('click', function() {
    // Obtém o número inserido pelo usuário
    const numero = parseFloat(document.getElementById('numero').value);

    // Verifica se o número é positivo, negativo ou zero e exibe o resultado
    if (numero > 0) {
        document.getElementById('resultado').innerText = "O número " + numero + " é positivo.";
    } else if (numero < 0) {
        document.getElementById('resultado').innerText = "O número " + numero + " é negativo.";
    } else {
        document.getElementById('resultado').innerText = "O número é zero.";
    }
});
