 //Crie um trecho de código que me diga quanto cobrar para vender
 //um notebook usado: o seu custo foi R$3000, por quanto devo
 //vendê-lo descontando 25%?


// let valorNotebook = 2500;

// let desconto = 0.25;

// let valorComDesconto = valorNotebook * desconto;

// let precoVenda = valorNotebook - valorComDesconto;

// console.log("O preço vendido com desconto: é: R$" + precoVenda.toFixed(2));

function calcularPrecoVenda() {
    
    var custo = document.getElementById('custo').value;
    
    if (custo === '') {
        document.getElementById('resultado').innerText = "Por favor, insira um valor para o custo.";
        return;
    }
    
    var custoNumero = Number(custo);

    if (custoNumero <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira um valor positivo para o custo.";
        return;
    }
    
    var desconto = custoNumero * 0.25;
    
    var precoVenda = custoNumero - desconto;
    
    document.getElementById('resultado').innerText = "O preço de venda do notebook usado deve ser R$ " + precoVenda.toFixed(2) + ".";
}
