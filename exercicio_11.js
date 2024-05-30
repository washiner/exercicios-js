//Escreva um programa que converte notas numéricas em
//conceitos (A, B, C, D, F) baseado em um sistema de pontuação.


// let nota = 15; // valor da nota

// let conceito;

// switch (true) {
//     case (nota >= 90):
//         conceito = "A";
//         break;
//     case (nota >= 80):
//         conceito = "B";
//         break;
//     case (nota >= 70):
//         conceito = "C";
//         break;
//     case (nota >= 60):
//         conceito = "D";
//         break;
//     default:
//         conceito = "F";
// }

// console.log("Sua nota" + nota + ", o conceito é: " + conceito);

document.getElementById('btnConverter').addEventListener('click', function() {
    var notaValor = document.getElementById('notaInput').value.trim();

    if (notaValor === '') {
        alert("Por favor, insira uma nota válida.");
        return;
    }

    var notaNumero = parseFloat(notaValor);
    var conceito;

    switch (true) {
        case (notaNumero >= 90 && notaNumero <= 100):
            conceito = "A";
            break;
        case (notaNumero >= 80 && notaNumero < 90):
            conceito = "B";
            break;
        case (notaNumero >= 70 && notaNumero < 80):
            conceito = "C";
            break;
        case (notaNumero >= 60 && notaNumero < 70):
            conceito = "D";
            break;
        case (notaNumero >= 0 && notaNumero < 60):
            conceito = "F";
            break;
        default:
            alert("Nota inválida.");
            return;
    }

    document.getElementById('resultadoNota').innerText = `Conceito: ${conceito}`;
});
