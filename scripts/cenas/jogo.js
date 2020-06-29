class Jogo {
  constructor() {
    this.cenario
    this.cenario1
    this.heroi
    this.moeda
    this.inimigos = []
    this.inimigoAtual
    this.idxInimigoAtual = 0
    this.moscas = []
    this.mosca
    this.idxDificuldade = 0
    this.pontuacao = 0
  }


  defObjetcsOnCene() {
    personagemHeroi.alturaTela = height * 0.25;
    personagemHeroi.larguraTela = Math.round(personagemHeroi.alturaTela * 0.815);
    personagemHeroi.distanciaDoChao = personagemHeroi.distanciaDoChao + posicaoDoChao;
  
    arrDefInimigos.forEach(inimigo => {
      inimigo.alturaTela      = height * inimigo.fatorAlturaTela;
      inimigo.larguraTela     = inimigo.alturaTela * inimigo.fatorLarguraTela;
      inimigo.velocidade      = inimigo.velocidade + velocidadeInimigos
  
      if ( canvasSize.cnvCod === 'xl-l' ) {
        inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao;
      }
      else if ( canvasSize.cnvCod === 'lg-l' ) {
        inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao + 4;
      }
      else if ( canvasSize.cnvCod === 'md-l' ) {
        if ( inimigo.nome === 'troll' ) {
          inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao + 24 ;
        }
        else if ( inimigo.nome === 'gota voadora' )  {
          inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao - 28 ;
        }
        else {
          inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao + 8;
        }  
      }
      else if ( canvasSize.cnvCod === 'sm-l' ) {
        if ( inimigo.nome === 'troll' ) {
          inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao + 24 ;
        }
        else if ( inimigo.nome === 'gota voadora' )  {
          inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao - 28 ;
        }
        else {
          inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao + 8;
        }
      
      }
  
      if ( typeof inimigo.delay === 'object' ) inimigo.delay = random(inimigo.delay[0], inimigo.delay[1])
      // console.log(inimigo );
  
    })
  
  
  
    arrDefStuffs.forEach(stuff => {
      if ( canvasSize.cnvCod === 'xl-l' ) {
        stuff.alturaTela  = height * stuff.fatorAlturaTela;
        stuff.larguraTela = stuff.alturaTela * stuff.fatorLarguraTela;
        stuff.distanciaDoChao = stuff.distanciaDoChao + posicaoDoChao;
    
        if ( typeof stuff.delay === 'object' ) stuff.delay = random(stuff.delay[0], stuff.delay[1])
      }
      if ( canvasSize.cnvCod === 'lg-l' ) {
        stuff.alturaTela  = height * stuff.fatorAlturaTela;
        stuff.larguraTela = stuff.alturaTela * stuff.fatorLarguraTela;
        stuff.distanciaDoChao = stuff.distanciaDoChao + posicaoDoChao - 30;
    
        if ( typeof stuff.delay === 'object' ) stuff.delay = random(stuff.delay[0], stuff.delay[1])
      }
      if ( canvasSize.cnvCod === 'md-l' ) {
        stuff.alturaTela  = height * stuff.fatorAlturaTela;
        stuff.larguraTela = stuff.alturaTela * stuff.fatorLarguraTela;
        stuff.distanciaDoChao = stuff.distanciaDoChao + posicaoDoChao - 90;
    
        if ( typeof stuff.delay === 'object' ) stuff.delay = random(stuff.delay[0], stuff.delay[1])
      }
      if ( canvasSize.cnvCod === 'sm-l' ) {
        stuff.alturaTela  = height * stuff.fatorAlturaTela;
        stuff.larguraTela = stuff.alturaTela * stuff.fatorLarguraTela;
        stuff.distanciaDoChao = stuff.distanciaDoChao + posicaoDoChao - 120;
    
        if ( typeof stuff.delay === 'object' ) stuff.delay = random(stuff.delay[0], stuff.delay[1])
      }
  
    })
  
  
    this.cenario = new CenarioHalloween(20);
    this.cenario1 = new CenarioHalloweenPlano1(20);
    this.heroi   = new Personagem(personagemHeroi);
    this.inimigos = arrDefInimigos.map(inimigo => {
      return new Inimigo(inimigo)
    })
  
    this.moeda = new Moeda(arrDefStuffs[0])
  
    for( let i = 0; i < random(3,6); i++ ){
      this.moscas.push(this.mosca = new Mosca());
    }
  
  }
  
  
  setup() {
    this.defObjetcsOnCene()

    this.pontuacao = new Pontuacao();
    fimJogoGota = new FimJogo(imagemFimJogoGota);
    fimJogoTroll = new FimJogo(imagemFimJogoTroll);
  
  }
  
  keyPressed() {
    if ( key === 'ArrowUp' && isLooping ) this.heroi.pula();
  
    if ( key === ' ' ) {
      toogleLoop()
    }
  }

  draw() {
    this.cenario.exibe();
    this.cenario.move();

    this.heroi.exibe();
    this.heroi.aplicaGravidade();
    
    this.moeda.exibe()
    this.moeda.move()
    
    if ( this.heroi.estaColidindo(this.moeda) ) {
      somDaMoeda.play();
      console.log(`colidindo com ${this.moeda.nome}`);
      
      // noLoop();
      // filter(GRAY);
      
      this.pontuacao.adicionarPontosMoeda()
      this.moeda.pegaMoeda()
    }
    
    this.inimigoAtual = this.inimigos[this.idxInimigoAtual]
    const isInimigoVisivel = this.inimigoAtual.x < - this.inimigoAtual.largura

    this.inimigoAtual.exibe()
    this.inimigoAtual.move()

    if ( isInimigoVisivel ) {
      this.idxInimigoAtual++
      if ( this.idxInimigoAtual > this.inimigos.length - 1 ) {
        this.idxInimigoAtual = 0
      }
      console.log(this.inimigoAtual.nome)
    }



    this.cenario1.exibe();
    
    for( let i = 0; i < this.moscas.length; i++ ) {
      this.moscas[i].exibe();
      this.moscas[i].moveParticle();
    }
    
    this.cenario1.move();
    
    this.pontuacao.exibe();
    this.pontuacao.adicionarPontos()


    // Verificação de colisão e fim do jogo
    if ( this.heroi.estaColidindo(this.inimigoAtual) ) {
      // fimJogo(inimigoAtual.nome);
      somColisao.play();
      console.log(`colidindo com ${this.inimigoAtual.nome}`);
      
      // noLoop();
      // filter(GRAY);

      if ( this.inimigoAtual.nome === 'gota' || this.inimigoAtual.nome === 'gota voadora' ) {
        // fimJogoGota.exibe();
        mudaJogo('fimJogoGota')
      }
      else {
        // fimJogoTroll.exibe()
        mudaJogo('fimJogoTroll')
      }
      // cenario.exibeGray();
      // this.heroi.exibeGray();
      // inimigo.exibe();
      // somDoJogo.pause();
    }


    this.mudaDificuldade()

    
    textAlign(LEFT)
    stroke('darkred')
    fill('white')
    textSize(36)
    text(dificuldadeJogo[this.idxDificuldade].nome , 10, height - 30 )
    
  }




  mudaDificuldade() {
    dificuldadeJogo.forEach(dificuldade => {
      if ( parseInt(this.pontuacao.getPontuacao()) >= dificuldade.pontosNaTroca && parseInt(this.pontuacao.getPontuacao()) < dificuldade.pontosNaTroca + 10 ) {
        if ( velocidadeInimigos !== dificuldade.velocidadeInimigos ) {
          velocidadeInimigos = dificuldade.velocidadeInimigos
          this.idxDificuldade++
  
          this.inimigos.forEach(inimigo => {
            inimigo.velocidade = inimigo.velocidadeOriginal + velocidadeInimigos;
          })
  
          console.log(`Trocou Velocidade ${dificuldade.nome}: ${velocidadeInimigos}`);
        }
      }
    })
  
  }
  
}