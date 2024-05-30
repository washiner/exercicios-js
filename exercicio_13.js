//Crie um programa que verifica se três segmentos formam 
//um triângulo e, se sim, determina seu tipo
//(equilátero, isósceles, escaleno).

// let ladoA = 10;
// let ladoB = 15;
// let ladoC = 22;

// let formaTriangulo = (ladoA + ladoB > ladoC) && (ladoA + ladoC > ladoB) && (ladoB + ladoC > ladoA);

// if (formaTriangulo) {
//     if (ladoA === ladoB && ladoB === ladoC) {
//         console.log("triângulo equilátero.");
//     } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
//         console.log("triângulo isósceles.");
//     } else {
//         console.log("triângulo escaleno.");
//     }
// } else {
//     console.log("Os lados não formam um triângulo.");
// }

document.getElementById('verificar').addEventListener('click', function() {
    var ladoA = document.getElementById('lado1').value.trim();
    var ladoB = document.getElementById('lado2').value.trim();
    var ladoC = document.getElementById('lado3').value.trim();

    if (ladoA === '' || ladoB === '' || ladoC === '') {
        alert("Por favor, insira valores válidos para todos os segmentos.");
        return;
    }

    var ladoA = parseFloat(ladoA);
    var ladoB = parseFloat(ladoB);
    var ladoC = parseFloat(ladoC);

    if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        alert("Os segmentos devem ser maiores que zero.");
        return;
    }

    var formaTriangulo = (ladoA + ladoB > ladoC) && (ladoA + ladoC > ladoB) && (ladoB + ladoC > ladoA);

    var resultado;

    if (formaTriangulo) {
        if (ladoA === ladoB && ladoB === ladoC) {
            resultado = "Os segmentos formam um triângulo equilátero.";
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            resultado = "Os segmentos formam um triângulo isósceles.";
        } else {
            resultado = "Os segmentos formam um triângulo escaleno.";
        }
    } else {
        resultado = "Os segmentos não formam um triângulo.";
    }

    document.getElementById('resultado').innerText = resultado;
});
