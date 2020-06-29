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

    if ( canvasSize.cnvCod === 'xl-l' ) {
      this.fontSize           = 120
      this.strokeWeight       = 4
      this.tituloPosicao      = [50, 100]
      this.subTituloPosicao   = [50, 280]
      this.historiaPosicao    = [900, 100]
      this.quadroHistoria     = [600, 500]
      this.defBotaoIniciar    = {
        resize: [400, 80],
        locate: [(width / 2 - 200), height / 1.5],
        textSize: 30,
      }
    }
    else if ( canvasSize.cnvCod === 'lg-l' ) {
      this.fontSize           = 96
      this.strokeWeight       = 3
      this.tituloPosicao      = [25, 70]
      this.subTituloPosicao   = [25, 220]
      this.historiaPosicao    = [650, 85]
      this.quadroHistoria     = [600, 500]
      this.defBotaoIniciar    = {
        resize: [300,70],
        locate: [(width / 2 - 150), height - 180],
        textSize: 20,
      }
    }
    else if ( canvasSize.cnvCod === 'md-l' ) {
      this.fontSize           = 72
      this.strokeWeight       = 2
      this.tituloPosicao      = [25, 60]
      this.subTituloPosicao   = [25, 170]
      this.historiaPosicao    = [400, 70]
      this.quadroHistoria     = [600, 500]
      this.defBotaoIniciar    = {
        resize: [240,60],
        locate: [(width / 2 - 120), height - 160],
        textSize: 18,
      }
    }
    else if ( canvasSize.cnvCod === 'sm-l' ) {
      this.fontSize           = 66
      this.strokeWeight       = 1
      this.tituloPosicao      = [20, 60]
      this.subTituloPosicao   = [20, 150]
      this.historiaPosicao    = [420, 50]
      this.quadroHistoria     = [340, 600]
      this.defBotaoIniciar    = {
        resize: [210,50],
        locate: [(width / 2 - 105), height - 130],
        textSize: 16,
      }
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
    }
  
    this.botaoIniciar.draw()
  }
}