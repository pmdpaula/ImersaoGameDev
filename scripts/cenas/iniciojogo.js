class InicioJogo {
  constructor(imagemInicio, fonts) {
    this.imagemInicio = imagemInicio;
    this.fontNormal = fonts[0]
    this.fontStrong = fonts[1]
    this.botaoIniciar = new Clickable();
    this.altura = width;
    this.largura = height;
    this.x = 0;
    this.y = 0;

    this.fontSize           = (parseInt(height / 6))
    this.strokeWeight       = 1
    this.tituloPosicao      = [(parseInt(width / 12 * 0.5)), (parseInt(height / 12 * 1.2))]
    this.subTituloPosicao   = [(parseInt(width / 12 * 0.5)), (parseInt(height / 12 * 4))]
    this.historiaPosicao    = [(parseInt(width / 12 * 7)), (parseInt(height / 12 * 1.2))]
    this.quadroHistoria     = [(parseInt(width * 0.4)), (parseInt(height / 1.5))]
    this.defBotaoIniciar = {
      resize: [(width / 4), (height / 12)],
      locate: [(width / 2 - (width / 4 / 2)), (height / 12 * 8)],
      textSize: (parseInt(height / 30)),
    }

    
  }

  draw() {
    image(this.imagemInicio,
      this.x,
      this.y,
    );

    this.exibeTextoTitulo()
    this.exibeTextoSubTitulo()
    this.exibeTextoHistoria()
    // this._botaoIniciar()
    this.criaBotaoIniciar()
  }

  exibeTextoTitulo() {
    stroke('rgba(255, 0, 0, 1)');
    strokeWeight(this.strokeWeight);
    fill('rgba(255, 140, 0, 0.7)');
    textFont(this.fontStrong);
    textSize(this.fontSize);
    textAlign(LEFT);
    text('Hipsta', this.tituloPosicao[0], this.tituloPosicao[1] );
  }


  exibeTextoSubTitulo() {
    stroke('rgba(255, 0, 0, 1)');
    strokeWeight(this.strokeWeight/2);
    fill('rgba(255, 140, 0, 0.7)');
    textFont(this.fontStrong);
    textSize(this.fontSize / 2.5);
    text('Em: A Busca dos Cogumelos', this.subTituloPosicao[0], this.subTituloPosicao[1] );
  }

  exibeTextoHistoria() {
    // stroke('rgba(255, 0, 0, 1)');
    strokeWeight(0);
    textFont(this.fontNormal);
    textSize(this.fontSize / 3.8);
    textAlign(CENTER, TOP);
    fill('lightgray');
    text(`A bruxinha Hipsta vai fazer uma festa para
    seus amigos e a precisa buscar cogumelos para as bebidas.
    Mas os cogumelos somente são encontrados na floresta Hoswell
    e a Hipsta deve atravesar a floresta coletando os cogumelos.`, this.historiaPosicao[0] + 5, this.historiaPosicao[1] + 5, this.quadroHistoria[0], this.quadroHistoria[1] );
    fill('black');
    text(`A bruxinha Hipsta vai fazer uma festa para
    seus amigos e a precisa buscar cogumelos para as bebidas.
    Mas os cogumelos somente são encontrados na floresta Hoswell
    e a Hipsta deve atravesar a floresta coletando os cogumelos.`, this.historiaPosicao[0], this.historiaPosicao[1], this.quadroHistoria[0], this.quadroHistoria[1] );
  }


  criaBotaoIniciar() {
    this.botaoIniciar.resize(this.defBotaoIniciar.resize[0], this.defBotaoIniciar.resize[1]);
    this.botaoIniciar.locate(this.defBotaoIniciar.locate[0], this.defBotaoIniciar.locate[1]);
    this.botaoIniciar.cornerRadius = 50;
    this.botaoIniciar.stroke = "rgba(255, 0, 0, 1)";
    this.botaoIniciar.textSize = this.defBotaoIniciar.textSize;
    
    this.botaoIniciar.onHover = function() {
      this.color = 'rgba(255, 140, 0, 1)'; 
      this.text = 'Vai! Clica aqui.'
    }
    
    this.botaoIniciar.onOutside = function() {
      this.color = 'rgba(255, 140, 0, 0.5)'; 
      this.text = 'Clique aqui para iniciar'
    }
    
    this.botaoIniciar.onPress = function() {
      // toogleInicio()
      mudaJogo('jogo')
    }
  
    this.botaoIniciar.draw()
  }


  _botaoIniciar() {
    botaoGerenciador.y = height / 7 * 5
    botaoGerenciador.draw()
  }
}