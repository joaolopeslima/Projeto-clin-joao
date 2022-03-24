function checagem() { 
    
    var selMed = document.getElementById('selMed');

    var selHorario = document.getElementById('selHorario')

    var checaMed = selMed.options[selMed.selectedIndex].value;

    var checaHorario = selHorario.options[selHorario.selectedIndex].value

    if (checaMed == 0 || checaHorario == 0){
        alert ("selecione todos os itens");
    }
    else{
        window.location.href ="projetoClinJoao-Cadastro.html"
    }

 }
    