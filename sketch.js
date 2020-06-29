let velocidadeInimigos = dificuldadeJogo[0].velocidadeInimigos;


let arrDefInimigos = [
  personagemInimigo,
  personagemInimigoGrande,
  personagemInimigoVoador,
  // personagemInimigoVoador2,
]


let arrDefStuffs = [
  stuffMoeda,
  stuffCoracao,
]



function setup() {
  cnv = defCanvasJogo();
  centerObject(cnv);
  cnv.parent('sketch-holder');

  telaInicial = new InicioJogo(imagemInicio, fonts);
  // cenaAtual = telaInicial
  jogo = new Jogo()
  jogo.setup()
  cenas = {
    jogo: jogo,
    telaInicial: telaInicial,
    fimJogoGota,
    fimJogoTroll,

  }

  // botaoGerenciador = new BotaoGerenciador('Iniciar', 'Iniciar', width/2, height/5*4)

  frameRate(30);     // O frameRate padrão é por volta de 30. Caso queiramos mudar, colocamos essa função.

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
  cenaAtual = cena
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

