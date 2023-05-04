var rodada = 1;
var matriz_jogo = Array(3);

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

    $('.settings').click( function(){
        
        var id_campo_clicado = this.id;
        jogada(id_campo_clicado)
    });

    function jogada(id){
        var icone = '';
        var ponto = 0;


        if(rodada % 2 == 1){
            icone = 'url("imagens/marcacao_1.png")';
            ponto = -1;
            console.log('Jogador 1')
        }
        else{
            icone = 'url("imagens/marcacao_2.png")';
            ponto = 1;
            console.log('Jogador 2')
        }
        rodada++;

        $('#'+id).css('background-image', icone);
    }

});