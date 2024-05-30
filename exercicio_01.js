function calcularMedia() {
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;

    if (nota1 === '' || nota2 === '' || nota3 === '') {
        document.getElementById('resultado').textContent = "Por favor, insira todas as notas corretamente.";
        return;
    }

    var media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;

    document.getElementById('resultado').textContent = "A média é: " + media.toFixed(2);
}

document.getElementById('calcularButton').onclick = calcularMedia;
