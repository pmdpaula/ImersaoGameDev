class InicioJogo {
  constructor(imagemInicio, fonts, toogleInicio) {
    this.imagemInicio = imagemInicio;
    this.fontNormal = fonts[0]
    this.fontStrong = fonts[1]
    this.toogleInicio = toogleInicio
    this.botaoIniciar = new Clickable();
    this.altura = width;
    this.largura = height;
    this.x = 0;
    this.y = 0;

    this.fontSize           = width > 1600 ? 120 : 90
    this.tituloPosicao      = width > 1600 ? [30, 100] : [25, 70]
    this.subTituloPosicao   = width > 1600 ? [30, 280] : [25, 200]
    this.historiaPosicao    = width > 1600 ? [890, 100] : [600, 100]
    this.defBotaoIniciar    =
    {
      resize: width > 1600 ? [400, 100] : [300,70],
      locate: width > 1600 ? [(width / 2 - 200), height - 250] : [(width / 2 - 150), height - 180],
      textSize: width > 1600 ? 30 : 20,
    }
  }

  exibe() {
    image(this.imagemInicio,
      this.x,
      this.y,
    );

    this.exibeTextoTitulo()
    this.exibeTextoSubTitulo()
    this.exibeTextoHistoria()
    this.criaBotaoIniciar()
  }

  exibeTextoTitulo() {
    stroke('rgba(255, 0, 0, 1)');
    strokeWeight(4);
    fill('rgba(255, 140, 0, 0.7)');
    textFont(this.fontStrong);
    textSize(this.fontSize);
    textAlign(LEFT);
    text('Hipsta', this.tituloPosicao[0], this.tituloPosicao[1] );
  }


  exibeTextoSubTitulo() {
    stroke('rgba(255, 0, 0, 1)');
    strokeWeight(2);
    fill('rgba(255, 140, 0, 0.7)');
    textFont(this.fontStrong);
    textSize(this.fontSize / 2);
    text('Em: A Busca dos Cogumelos', this.subTituloPosicao[0], this.subTituloPosicao[1] );
  }

  exibeTextoHistoria() {
    // stroke('rgba(255, 0, 0, 1)');
    strokeWeight(0);
    textFont(this.fontNormal);
    textSize(this.fontSize / 3.4);
    textAlign(CENTER, TOP);
    fill('lightgray');
    text(`A bruxinha Hipsta vai fazer uma festa para
    seus amigos e a precisa buscar cogumelos para as bebidas.
    Mas os cogumelos somente são encontrados na floresta Hoswell`, this.historiaPosicao[0] + 5, this.historiaPosicao[1] + 5, 900, 400 );
    fill('black');
    text(`A bruxinha Hipsta vai fazer uma festa para
    seus amigos e a precisa buscar cogumelos para as bebidas.
    Mas os cogumelos somente são encontrados na floresta Hoswell`, this.historiaPosicao[0], this.historiaPosicao[1], 900, 400 );
  }


  criaBotaoIniciar() {
    this.botaoIniciar.resize(this.defBotaoIniciar.resize[0], this.defBotaoIniciar.resize[1]);
    this.botaoIniciar.locate(this.defBotaoIniciar.locate[0], this.defBotaoIniciar.locate[1]);
    this.botaoIniciar.cornerRadius = 50;
    this.botaoIniciar.stroke = "rgba(255, 0, 0, 1)";
    this.botaoIniciar.textSize = this.defBotaoIniciar.textSize;
    
    this.botaoIniciar.onHover = function(e) {
      this.color = 'rgba(255, 140, 0, 1)'; 
      this.text = 'Vai! Clica aqui.'
    }
    
    this.botaoIniciar.onOutside = function(e) {
      this.color = 'rgba(255, 140, 0, 0.5)'; 
      this.text = 'Clique aqui para iniciar'
    }
    
    this.botaoIniciar.onPress = function(e) {
      toogleInicio()
      console.log("I have been pressed!");
    }
  
    this.botaoIniciar.draw()
  }
}