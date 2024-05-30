//3. Calculadora Simples:   - Implemente uma calculadora
//que recebe dois números e uma operação (adição, subtração,
//multiplicação, divisão) e retorna o resultado.


// let numero1 = 8;
// let numero2 = 6;
// let operacao = "subtração"; 

// let resultado;
// switch (operacao) {
//     case "adição":
//         resultado = numero1 + numero2;
//         break;
//     case "subtração":
//         resultado = numero1 - numero2;
//         break;
//     case "multiplicação":
//         resultado = numero1 * numero2;
//         break;
//     case "divisão":
//         resultado = numero1 / numero2;
//         break;
//     default:
//         console.log("Operação inválida.");
// }

// console.log(operacao + " é: " + resultado);


document.getElementById('calcular').addEventListener('click', function() {
    var numero1 = document.getElementById('numero1').value.trim();
    var numero2 = document.getElementById('numero2').value.trim();
    var operacao = document.getElementById('operacao').value;

    if (numero1 === '' || numero2 === '') {
        alert("Por favor, insira números válidos.");
        return;
    }

    var num1 = parseFloat(numero1);
    var num2 = parseFloat(numero2);

    var resultado;

    switch (operacao) {
        case 'soma':
            resultado = num1 + num2;
            break;
        case 'subtracao':
            resultado = num1 - num2;
            break;
        case 'multiplicacao':
            resultado = num1 * num2;
            break;
        case 'divisao':
            if (num2 === 0) {
                alert("Não é possível dividir por zero.");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Operação inválida.");
            return;
    }

    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
});
