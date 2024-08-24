document.getElementById("plrForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var nota = parseFloat(document.getElementById("nota").value.replace(',', '.'));//ignora ponto e virgula do usuario
    var salario = parseFloat(document.getElementById("salario").value.replace(/\./g, '').replace(',', '.'));// ignora ponto e virgula do usuario
    var plr = 0.800;
    var meses_trabalhados = parseInt(document.getElementById("meses_trabalhados").value);
    var calculo = ((((nota * salario) * plr) / 12) * meses_trabalhados) / 100; // Dividindo por 100 para ficar no formato milhares
    var calculo_formatado = calculo.toFixed(2);
    document.getElementById("resultado").innerHTML = " TA BOCHECHA EM !!!!: R$ " + calculo_formatado;
    document.getElementById("plrForm").reset(); // Limpa os campos após o envio do formulário
});