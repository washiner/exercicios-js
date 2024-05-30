
function calcularIMC() {
    
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

   
    if (peso === '' || altura === '') {
        document.getElementById('resultado').textContent = "Por favor, insira o peso e a altura.";
        return;
    }

    var imc = calcularIMCValor(parseFloat(peso), parseFloat(altura));


    document.getElementById('resultado').textContent = "Seu IMC é: " + imc.toFixed(2);
}

function calcularIMCValor(peso, altura) {
    return peso / (altura * altura);
}

document.getElementById('calcularButton').onclick = calcularIMC;
