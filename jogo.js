$(document).ready( function(){


    $("#btn-iniciar").click(
        ()=>{
            
            if($('#apelido-jogador1').val() == ''){
                alert('Insira o nome do Jogador 1')
                return false;
            }

            if($('#apelido-jogador2').val() == ''){
                alert('Insira o nome do Jogador 2')
                return false;
            }

            $('#nome-jogador1').html($('#apelido-jogador1').val());
            $('#nome-jogador2').html($('#apelido-jogador2').val());
            
            
            $('#pagina-inicial').hide();
            $('#palco-jogo').show();


            console.log('Passou')
        }
    );

});