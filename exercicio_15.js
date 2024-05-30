//Crie um jogo onde o programa escolhe um número aleatório e o 
//jogador tem que adivinhar qual é. O programa deve fornecer
//dicas se o número fornecido é maior ou menor.
// var numeroSecreto = Math.floor(Math.random() * 100) + 1;

// let palpite = 91;

// palpite = parseInt(palpite);

// if (palpite === numeroSecreto) {
//     console.log(`Parabéns! Você acertou o número secreto ${numeroSecreto}!`);
// } else if (palpite < numeroSecreto) {
//     console.log("O número é maior!");
// } else {
//     console.log("O número é menor!");
// }

document.getElementById('adivinhar').addEventListener('click', function() {
    var palpite = parseInt(document.getElementById('palpite').value.trim());

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("Por favor, insira um palpite válido (entre 1 e 100).");
        return;
    }

    var numeroSecreto = Math.floor(Math.random() * 100) + 1;

    if (palpite === numeroSecreto) {
        document.getElementById('dica').innerText = `Parabéns! Você acertou o número secreto ${numeroSecreto}!`;
    } else if (palpite < numeroSecreto) {
        document.getElementById('dica').innerText = "O número é maior!";
    } else {
        document.getElementById('dica').innerText = "O número é menor!";
    }
});

