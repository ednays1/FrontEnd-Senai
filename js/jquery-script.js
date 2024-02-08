//efeito de esconder formulário de cadastro
$(document).ready(function(){
    $("#botao-cadastrar").click(function(){
        $("#section-login").slideToggle("slow");
        $("#section-cadastro").slideToggle("slow");
       // $("#botao-cadastrar").hide();
    });
}); 