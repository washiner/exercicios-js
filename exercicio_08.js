//Escreva um programa que determina se um número é par ou ímpar.

// let numero = 44;

// if (numero % 2 === 0) {
//     console.log("O número é par.");
// } else {
//     console.log("O número é ímpar.");
// }

document.getElementById('verificar').addEventListener('click', function() {
    var numero = document.getElementById('numero').value.trim();

    if (numero === '') {
        alert("Por favor, insira um número.");
        return;
    }

    var num = parseInt(numero);

    if (num % 2 === 0) {
        document.getElementById('resultado').innerText = `${num} número par.`;
    } else {
        document.getElementById('resultado').innerText = `${num} número ímpar.`;
    }
});

