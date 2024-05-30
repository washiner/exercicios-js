//Desenvolva um programa que simula um sistema de empréstimo,
//determinando se um cliente é elegível com base na renda,
//idade e histórico de crédito.

//Critérios
// let idadeMin = 18;
// let idadeMax = 65;
// let rendaMin = 3500;
// let historicoCredito = "regular";

//cliente atual
// let idade = 44;
// let renda = 3900;
// let historicoCliente = "regular";

//cliente elegivel

// let resultado;

// if (idade < idadeMin || idade > idadeMax) {
//     resultado = "Idade não elegível. A idade deve estar entre " + idadeMin + " e " + idadeMax + " anos.";
// } else if (renda < rendaMin) {
//     resultado = "Renda não elegível. A renda mínima deve ser de R$ " + rendaMin + ".";
// } else if (historicoCliente.toLowerCase() !== historicoCredito) {
//     resultado = "Histórico de crédito não elegível. O histórico deve ser 'bom'.";
// } else {
//     resultado = "Parabéns! Você é elegível para o empréstimo.";
// }

// console.log(resultado);

document.getElementById('verificar').addEventListener('click', function() {
    const idadeMin = 18;
    const idadeMax = 65;
    const rendaMin = 3500;
    const historicoCredito = "bom";

    const idade = parseInt(document.getElementById('idade').value.trim());
    const renda = parseFloat(document.getElementById('renda').value.trim());
    const historicoCliente = document.getElementById('historico').value.trim().toLowerCase();

    let resultado;

    if (!idade || !renda) {
        alert("Por favor, preencha todos os campos com valores válidos.");
        return;
    }

    if (idade < idadeMin || idade > idadeMax) {
        resultado = "Idade não elegível. A idade deve estar entre " + idadeMin + " e " + idadeMax + " anos.";
    } else if (renda < rendaMin) {
        resultado = "Renda não elegível. A renda mínima deve ser de R$ " + rendaMin + ".";
    } else if (historicoCliente !== historicoCredito) {
        resultado = "Histórico de crédito não elegível. O histórico deve ser 'bom'.";
    } else {
        resultado = "Parabéns! Você é elegível para o empréstimo.";
    }

    document.getElementById('resultado').innerText = resultado;
});
