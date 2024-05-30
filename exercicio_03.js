//Crie um trecho de código que lê a idade de uma pessoa
//e mostra o ano em que ela nasceu. O cálculo é
//ANO ATUAL - IDADE inserida;


// let anoAtual = 2024;

// let idade = 44;

// Ano de nascimento
// let anoNascimento = anoAtual - idade;

// console.log("Ano do seu nascimento: É " + anoNascimento);

function calcularAnoNascimento() {
    var anoAtual = new Date().getFullYear();

    var idade = document.getElementById('idade').value;

    var anoNascimento = anoAtual - idade;

    document.getElementById('resultado').innerText = "Você nasceu no ano de " + anoNascimento + ".";
}
