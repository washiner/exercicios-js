//Desenvolva um programa que calcula o valor 
//final após aplicar um desconto a um determinado preço.

// let precoNormal = 100;
// let desconto = 10;

// let valorDesconto = (precoNormal * desconto) / 100;

// let valorFinal = precoNormal - valorDesconto;


// console.log("O preço original é R$ " + precoNormal.toFixed(2));
// console.log("O valor do desconto é R$ " + valorDesconto.toFixed(2));
// console.log("O preço final após aplicar o desconto é R$ " + valorFinal.toFixed(2));

document.getElementById('calcular').addEventListener('click', function() {
    var precoStr = document.getElementById('preco').value.trim();
    var descontoStr = document.getElementById('desconto').value.trim();

    if (precoStr === '' || descontoStr === '') {
        alert("Por favor, insira valores válidos para o preço e o desconto.");
        return;
    }

    var preco = parseFloat(precoStr);
    var desconto = parseFloat(descontoStr);

    var valorDesconto = (preco * desconto) / 100;
    var precoFinal = preco - valorDesconto;

    document.getElementById('resultado').innerText = `Preço Final: R$ ${precoFinal.toFixed(2)}`;
});
