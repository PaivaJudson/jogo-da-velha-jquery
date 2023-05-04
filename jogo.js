var rodada = 1;
var matriz_jogo = Array(3);
matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;


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
        $('#'+id_campo_clicado).off();
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

        var linha_coluna = id.split('-');
        matriz_jogo[linha_coluna[0]][linha_coluna[1]] = ponto;
        verificarCombinacao();
    }


    function verificarCombinacao(){
        var pontos = 0;
        for(var i=1; i<=3; i++){
            pontos = pontos + matriz_jogo['a'][i];
        }
        ganhador(pontos);

        pontos = 0;
        for(var i=1; i<=3; i++){
            pontos = pontos + matriz_jogo['b'][i];
        }
        ganhador(pontos);

        pontos = 0;
        for(var i=1; i<=3; i++){
            pontos = pontos + matriz_jogo['c'][i];
        }
        ganhador(pontos);

    
        for(var l=1; l<=3; l++){
            pontos = 0;
            pontos = pontos + matriz_jogo['a'][i];
            pontos = pontos + matriz_jogo['b'][i];
            pontos = pontos + matriz_jogo['c'][i];

            ganhador(pontos);
        }

        pontos = 0;
        pontos = matriz_jogo['a'][1] + matriz_jogo['b'][2] + matriz_jogo['c'][3];
        ganhador(pontos);


        pontos = 0;
        pontos = matriz_jogo['a'][3] + matriz_jogo['b'][2] + matriz_jogo['c'][1];
        ganhador(pontos);

    }

    function ganhador(pontos){
        
        if(pontos == -3){
            var jogador1 = $("#apelido-jogador1").val();
            alert(jogador1+" é o(a) vencedor(a)");
            $('.settings').off();
        }
        
        if(pontos == 3){
            var jogador2 = $("#apelido-jogador2").val();
            alert(jogador2+" é o(a) vencedor(a)");
            $('.settings').off();
        }

    }

});