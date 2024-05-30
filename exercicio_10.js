//Crie um programa que determina a categoria de uma pessoa
//baseada na idade (criança, adolescente, adulto, idoso).

// let idade = 90;

// if (idade >= 0 && idade <= 12) {
//     console.log("Criança");
// } else if (idade > 12 && idade < 18) {
//     console.log("Adolescente");
// } else if (idade >= 18 && idade < 60) {
//     console.log("Adulto");
// } else if (idade >= 60 || idade > 120) {
//     console.log("Idoso");
// } else {
//     console.log("Idade inválida.");
// }

document.getElementById('btnVerificar').addEventListener('click', function() {
    const idadeValor = document.getElementById('inputIdade').value.trim();

    if (idadeValor === '') {
        alert("Por favor, insira uma idade válida.");
        return;
    }

    const idadeNumero = parseInt(idadeValor);

    let tipoCategoria;

    if (idadeNumero >= 0 && idadeNumero <= 12) {
        tipoCategoria = "Criança";
    } else if (idadeNumero >= 13 && idadeNumero <= 17) {
        tipoCategoria = "Adolescente";
    } else if (idadeNumero >= 18 && idadeNumero <= 64) {
        tipoCategoria = "Adulto";
    } else if (idadeNumero >= 65) {
        tipoCategoria = "Idoso";
    } else {
        alert("Idade inválida.");
        return;
    }

    document.getElementById('outputResultado').innerText = `Categoria: ${tipoCategoria}`;
});
