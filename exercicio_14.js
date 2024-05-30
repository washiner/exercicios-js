//Implemente um programa que verifica se um ano é bissexto ou não.

// let ano = 2024;

// let Bissexto;
// if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
//     Bissexto = true;
// } else {
//     Bissexto = false;
// }

// if (Bissexto) {
//     console.log(ano + " é um ano bissexto.");
// } else {
//     console.log(ano + " não é um ano bissexto.");
// }

document.getElementById('verificar').addEventListener('click', function() {
    var ano = parseInt(document.getElementById('ano').value.trim());

    if (!ano) {
        alert("Por favor, insira um ano válido.");
        return;
    }

    let bissexto;

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        bissexto = true;
    } else {
        bissexto = false;
    }

    if (bissexto) {
        document.getElementById('resultado').innerText = ano + " é um ano bissexto.";
    } else {
        document.getElementById('resultado').innerText = ano + " não é um ano bissexto.";
    }
});

