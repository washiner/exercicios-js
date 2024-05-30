function converterMetrosParaMilimetros() {
    
    const metros = parseInt(document.getElementById('metros').value);

    if (!metros || metros <= 0) {
        document.getElementById('resultado').innerText = "Por favor, insira um valor positivo em metros.";
        return;
    }
    
    const milimetros = metros * 1000;
    
    document.getElementById('resultado').innerText = metros + " metros é igual a " + milimetros + " milímetros.";
}
