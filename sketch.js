let velocidadeInimigos = dificuldadeJogo[0].velocidadeInimigos;


let arrDefInimigos = [
  personagemInimigo,
  personagemInimigoGrande,
  personagemInimigoVoador,
  // personagemInimigoVoador2,
]


let arrDefStuffs = [
  stuffMoeda,
  stuffVida,
]



function resetGame() {
  jogo = 0
  jogo = new Jogo()
  jogo.setup()
}


function setup() {
  cnv = defCanvasJogo();
  centerObject(cnv);
  cnv.parent('sketch-holder');
  // posicaoDoChao = (parseInt(height / 8.6))

  
  // cenaAtual = telaInicial
  telaInicial = new InicioJogo(imagemInicio, fonts);
  resetGame()

  cenas = {
    jogo: jogo,
    telaInicial: telaInicial,
    fimJogoGota,
    fimJogoTroll,
    jogoPause,
  }

  // botaoGerenciador = new BotaoGerenciador('Iniciar', 'Iniciar', width/2, height/5*4)
  frameRate(22);     // O frameRate padrão é por volta de 30. Caso queiramos mudar, colocamos essa função.
  somDoJogo.loop();

}



// function toogleInicio() {
//   isInicio = !isInicio;
//   if ( isInicio ) {
//     noLoop();
//   } 
//   else {
//     loop();
//   }
// }

function mudaJogo(cena) {
  // if ( cenaAtual.substring(0,3) === 'fim' ) {
  //   jogo.setup()
  //   jogo = new Jogo()
  //   // cenaAtual 
  // }
  // else {
    cenaAtual = cena
  // }
}





function draw() {
  // console.log(cenaAtual);
  
  cenas[cenaAtual].draw()

  // if ( cenaAtual === 'telaInicial' ) {
  //   telaInicial.exibe()
  // }
  // else if ( cenaAtual === 'jogo' ) {
  //   jogo.draw()
  // }

}

