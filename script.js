function checagem() { 
    
    var selMed = document.getElementById('selMed');

    var selData = document.getElementById('selData');

    var checaMed = selMed.options[selMed.selectedIndex].value;
    
    var checaData = selData.value;


    if (checaMed == 0){
        alert ("selecione o médico");
    }
    else{
        window.location.href ="projetoClinJoao-Cadastro.html"    
    }

 }
    function capturaDados(){

        var textoNome = document.getElementById('inputNome').value
        var textoSobrenome = document.getElementById('inputSobrenome').value
        var textoPeso = document.getElementById('inputPeso').value
        var textoAltura = document.getElementById('inputAltura').value
        var textoPressao = document.getElementById('inputPressao').value
        var textoSaturacao = document.getElementById('inputSaturacao').value
        var textoCPF = document.getElementById('inputCPF').value
        var textoNascimento = document.getElementById('inputNascimento').value

        console.log("nome: " + textoNome)
        console.log("Sobrenome: " + textoSobrenome)
        console.log("Peso: " + textoPeso)
        console.log("Altura: " + textoAltura)
        console.log("Pressão: " + textoPressao)
        console.log("Saturação: " + textoSaturacao)
        console.log("CPF: " + textoCPF)
        console.log("Data de Nascimento: " + textoNascimento)

    }

    

    /*dados:
    Nome, Sobrenome, Peso, Altura, Pressão Arterial, Saturação, CPF, Data de Nascimento */ 