class FimJogo {
  constructor(imagemFim) {
    this.imagemFim = imagemFim;
    this.altura = null;
    this.largura = null;
    this.x = 0;
    this.y = 0;
    this.fator = width > height ? width * 0.001 : height * 0.0015
    this.botaoReiniciar = new Clickable();

    if ( canvasSize.cnvCod === 'xl-l' ) {
      this.defBotaoReiniciar    = {
        resize: [800, 80],
        locate: [(width / 2 - 400), height / 1.7],
        textSize: 30,
      }
    }
    else if ( canvasSize.cnvCod === 'lg-l' ) {
      this.defBotaoReiniciar    = {
        resize: [600,70],
        locate: [(width / 2 - 300), height - 200],
        textSize: 20,
      }
    }
    else if ( canvasSize.cnvCod === 'md-l' ) {
      this.defBotaoReiniciar    = {
        resize: [460,60],
        locate: [(width / 2 - 230), height - 160],
        textSize: 18,
      }
    }
    else if ( canvasSize.cnvCod === 'sm-l' ) {
      this.defBotaoReiniciar    = {
        resize: [380,50],
        locate: [(width / 2 - 190), height - 150],
        textSize: 16,
      }
    }
  }

  draw() {
    filter(GRAY);
    
    this.largura = this.imagemFim.width  * this.fator
    this.altura  = this.imagemFim.height * this.fator
    
    
    image(this.imagemFim,
      this.x = width / 2 - (this.largura / 2),
      this.y = height / 2 - (this.altura / 2) - 100,
      this.largura,
      this.altura,
      );
      
      this.criaBotaoIniciar()
      // noLoop();
    
  }

  criaBotaoIniciar() {
    this.botaoReiniciar.resize(this.defBotaoReiniciar.resize[0], this.defBotaoReiniciar.resize[1]);
    this.botaoReiniciar.locate(this.defBotaoReiniciar.locate[0], this.defBotaoReiniciar.locate[1]);
    this.botaoReiniciar.cornerRadius = 50;
    this.botaoReiniciar.stroke = "rgba(255, 0, 0, 1)";
    this.botaoReiniciar.textSize = this.defBotaoReiniciar.textSize;
    
    this.botaoReiniciar.onHover = function() {
      this.color = 'rgba(255, 140, 0, 1)'; 
      this.text = 'Vai! Clica aqui.'
    }
    
    this.botaoReiniciar.onOutside = function() {
      this.color = 'rgba(255, 140, 0, 0.5)'; 
      this.text = 'Ei, não fique triste, podemos reiniciar aqui.'
    }
    
    this.botaoReiniciar.onPress = function(e) {
      // toogleInicio()
      mudaJogo('telaInicial')
    }
  
    this.botaoReiniciar.draw()
  }
}