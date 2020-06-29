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



function centerObject(obj) {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  obj.position(x, y);
}






function setup() {
  cnv = defCanvasJogo();
  centerObject(cnv);

  cnv.parent('sketch-holder');

  defObjetcsOnCene()

  pontuacao = new Pontuacao();

  fimJogoGota = new FimJogo(imagemFimJogoGota);
  fimJogoTroll = new FimJogo(imagemFimJogoTroll);

  frameRate(30);     // O frameRate padrão é por volta de 30. Caso queiramos mudar, colocamos essa função.

  somDoJogo.loop();

  for( let i = 0; i < random(3,6); i++ ){
    moscas.push(mosca = new Mosca());
  }
}






function windowResized() {
  // cnv = defCanvasJogo();
  centerObject(cnv);
  // defObjetcsOnCene()
}








function toogleLoop() {
  isLooping = !isLooping;
  if ( isLooping ) {
    loop();
  } 
  else {
    noLoop();
  }
}




function toogleInicio() {
  isInicio = !isInicio;
  if ( isInicio ) {
    noLoop();
  } 
  else {
    loop();
  }
}






function keyPressed() {
  if ( key === 'ArrowUp' && isLooping ) heroi.pula();

  if ( key === ' ' ) {
    toogleLoop()
  }
    
}



function mudaDificuldade() {
  dificuldadeJogo.forEach(dificuldade => {
    if ( parseInt(pontuacao.getPontuacao()) >= dificuldade.pontosNaTroca && parseInt(pontuacao.getPontuacao()) < dificuldade.pontosNaTroca + 10 ) {
      if ( velocidadeInimigos !== dificuldade.velocidadeInimigos ) {
        velocidadeInimigos = dificuldade.velocidadeInimigos
        idxDificuldade++

        inimigos.forEach(inimigo => {
          inimigo.velocidade = inimigo.velocidadeOriginal + velocidadeInimigos;
        })

        console.log(`Trocou Velocidade ${dificuldade.nome}: ${velocidadeInimigos}`);
      }
    }
  })

}



function draw() {
  if ( isInicio ) {
    telaInicio.exibe()

  }
  else {
    cenario.exibe();
    cenario.move();

    heroi.exibe();
    heroi.aplicaGravidade();
    
    moeda.exibe()
    moeda.move()
    
    if ( heroi.estaColidindo(moeda) ) {
      somDaMoeda.play();
      console.log(`colidindo com ${moeda.nome}`);
      
      // noLoop();
      // filter(GRAY);
      
      pontuacao.adicionarPontosMoeda()
      moeda.pegaMoeda()
    }
    
    inimigoAtual = inimigos[idxInimigoAtual]
    const isInimigoVisivel = inimigoAtual.x < - inimigoAtual.largura

    inimigoAtual.exibe()
    inimigoAtual.move()

    if ( isInimigoVisivel ) {
      idxInimigoAtual++
      if ( idxInimigoAtual > inimigos.length - 1 ) {
        idxInimigoAtual = 0
      }
      console.log(inimigoAtual.nome)
    }

    if ( heroi.estaColidindo(inimigoAtual) ) {
      // fimJogo(inimigoAtual.nome);
      somColisao.play();
      console.log(`colidindo com ${inimigoAtual.nome}`);
      
      // noLoop();
      filter(GRAY);

      if ( inimigoAtual.nome === 'gota' || inimigoAtual.nome === 'gota voadora' ) {
        fimJogoGota.exibe();
      }
      else {
        fimJogoTroll.exibe()
      }
      // cenario.exibeGray();
      // heroi.exibeGray();
      // inimigo.exibe();
      // somDoJogo.pause();
    }


    cenario1.exibe();
    cenario1.move();

    pontuacao.exibe();
    pontuacao.adicionarPontos()

    mudaDificuldade()

    textAlign(LEFT)
    fill('#333')
    textSize(40)
    text(dificuldadeJogo[idxDificuldade].nome , 10, height - 30 )
    
    for( let i = 0; i < moscas.length; i++ ) {
      moscas[i].exibe();
      moscas[i].moveParticle();
    }
  }

}

