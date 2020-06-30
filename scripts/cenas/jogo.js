class Jogo {
  constructor() {
    this.cenario
    this.cenario1
    this.heroi
    this.vida
    this.moeda
    this.inimigos = []
    this.inimigoAtual
    this.mapaInimigos = fita.mapa
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
          inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao + 32 ;
        }
        else if ( inimigo.nome === 'gota voadora' )  {
          inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao - 60;
        }
        else {
          inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao;
        }
      }
  
      if ( typeof inimigo.delay === 'object' ) inimigo.delay = random(inimigo.delay[0], inimigo.delay[1])
  
    })
  
  
  
    arrDefStuffs.forEach(stuff => {
      stuff.alturaTela  = height * stuff.fatorAlturaTela;
      stuff.larguraTela = stuff.alturaTela * stuff.fatorLarguraTela;
      if ( typeof stuff.delay === 'object' ) stuff.delay = random(stuff.delay[0], stuff.delay[1])

      if ( canvasSize.cnvCod === 'xl-l' ) {
        stuff.distanciaDoChao = stuff.distanciaDoChao + posicaoDoChao;
      }
      if ( canvasSize.cnvCod === 'lg-l' ) {
        stuff.distanciaDoChao = stuff.distanciaDoChao + posicaoDoChao - 30;
      }
      if ( canvasSize.cnvCod === 'md-l' ) {
        stuff.distanciaDoChao = stuff.distanciaDoChao + posicaoDoChao - 90;
      }
      if ( canvasSize.cnvCod === 'sm-l' ) {
        stuff.distanciaDoChao = stuff.distanciaDoChao + posicaoDoChao - 130;
      }
      else {
        stuff.distanciaDoChao = stuff.distanciaDoChao + posicaoDoChao - 130;
      }
  
    })
  

    this.cenario = new CenarioHalloween(20);
    this.cenario1 = new CenarioHalloweenPlano1(20);
    this.heroi   = new Personagem(personagemHeroi);
    this.inimigos = arrDefInimigos.map(inimigo => {
      return new Inimigo(inimigo)
    })
  
    this.moeda = new Moeda(arrDefStuffs[0])
    this.vida = new Vida(arrDefStuffs[1])

    administradorVida = new AdministradorVida(fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial)
  
    for( let i = 0; i < random(3,6); i++ ){
      this.moscas.push(this.mosca = new Mosca());
    }
  
  }
  
  
  setup() {
    this.defObjetcsOnCene()

    this.pontuacao = new Pontuacao();
    jogoPause = new PauseJogo(imagemPause);
    fimJogoGota = new FimJogo(imagemFimJogoGota);
    fimJogoTroll = new FimJogo(imagemFimJogoTroll);
  }
  


  keyPressed() {
    if ( key === 'ArrowUp' && isLooping && ( cenaAtual.substring(0,3) !== 'fim' && cenaAtual.substring(0,4) !== 'tela' ) ) this.heroi.pula();
  
    if ( key === ' ' && ( cenaAtual.substring(0,3) !== 'fim' && cenaAtual.substring(0,4) !== 'tela' ) ) {
      tooglePause()
    }
  }



  draw() {
    this.cenario.exibe();
    this.cenario.move();

    if ( this.heroi.invencivel === 2 ) {
      this.heroi.exibe2(personagemHeroi.imagemPiscando)
    }
    else if ( this.heroi.invencivel === 1 ) {
      this.heroi.exibe2(personagemHeroi.imagemPiscando2)
    }
    else {
      this.heroi.exibe()
    }
    this.heroi.aplicaGravidade();
    
    this.moeda.exibe()
    this.moeda.move()

    this.vida.exibe()
    this.vida.move()
    
    if ( this.heroi.estaColidindoStuffs(this.moeda) ) {
      somDaMoeda.play();
      this.pontuacao.adicionarPontosMoeda()
      this.moeda.pegaMoeda()
    }
    
    
    if ( this.heroi.estaColidindoStuffs(this.vida) ) {

      if ( administradorVida.vidasAtual >= qtdMaxVidas ) {
        somDaVidaCheia.play()
      }
      else {
        somDaVida.play();
      } 
      administradorVida.ganhaVida()
      this.vida.pegaVida()
    }
    

    this.inimigoAtual = this.inimigos[this.idxInimigoAtual]
    // this.inimigoAtual = random(this.inimigos)
    const isInimigoVisivel = this.inimigoAtual.x < - this.inimigoAtual.largura

    this.inimigoAtual.exibe()
    this.inimigoAtual.move()

    if ( isInimigoVisivel ) {
      this.idxInimigoAtual = parseInt(random(0, this.inimigos.length))
      this.inimigoAtual.reaparecer()

      if ( this.idxInimigoAtual > this.inimigos.length - 1 ) {
        this.idxInimigoAtual = 0
      }
    }



    this.cenario1.exibe();
    
    for( let i = 0; i < this.moscas.length; i++ ) {
      this.moscas[i].exibe();
      this.moscas[i].moveParticle();
    }
    
    this.cenario1.move();
    
    this.pontuacao.exibe();
    this.pontuacao.adicionarPontos()


    // Verificação de colisão com inimigo perda de vida e fim do jogo
    if ( this.heroi.estaColidindo(this.inimigoAtual) ) {
      administradorVida.perdeVida()
      this.heroi.tornarInvencivel()

      if ( administradorVida.vidasAtual === 0 ) {
        somBruxaPerdeu.play()
        if ( this.inimigoAtual.nome === 'gota' || this.inimigoAtual.nome === 'gota voadora' ) {
          mudaJogo('fimJogoGota')
        }
        else {
          mudaJogo('fimJogoTroll')
        }
        somDoJogo.pause();
        somGameOver.play()
      }
      else {
        somGritoBruxa.play();
      }
    }


    this.mudaDificuldade()

    administradorVida.draw()
    
    textAlign(LEFT)
    stroke('darkred')
    strokeWeight(5)
    fill('white')
    textSize(36)
    text(dificuldadeJogo[this.idxDificuldade].nome , 10, height - 30 )
    strokeWeight(0)
    
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
  
          // console.log(`Trocou Velocidade ${dificuldade.nome}: ${velocidadeInimigos}`);
        }
      }
    })
  
  }
  
}