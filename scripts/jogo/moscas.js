class Mosca {
  constructor() {
    this.matriz        = null;
    this.spritesImagem = [16,1];
    this.imagem        = loadImage('imagens/insetos/fly_idle.png');
    this.x = random(0,width);
    this.y = random(0,height);
    this.larguraSprite = this.imagem.width / this.spritesImagem[0];
    this.alturaSprite  = this.imagem.height / this.spritesImagem[1];
    this.larguraSprite = 32;
    this.alturaSprite  = 64;
    this.largura       = this.larguraSprite/3;
    this.altura        = this.alturaSprite/3;

    this.xSpeed = random(-2,2);
    this.ySpeed = random(-1,1.5);

    this.frameAtual = 0;
  }


  exibe() {
    this.criaMatriz();

    image(this.imagem,
          this.x,
          this.y,
          this.largura,
          this.altura,
          this.matriz[this.frameAtual][0],
          this.matriz[this.frameAtual][1],
          this.larguraSprite,
          this.alturaSprite
    );

    this.anima();
  }

  anima() {
    this.frameAtual >= this.matriz.length - 1 ? this.frameAtual = 0 : this.frameAtual++
  }


  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }

  
  criaMatriz() {
    let totalQuadros = this.spritesImagem[0] * this.spritesImagem[1];
    this.matriz = [[0, 0]];
  
    for ( let y = 0; y < totalQuadros; y = y + this.spritesImagem[0]) {
      if ( y !== 0 ) this.matriz.push([ 0, (this.matriz[y-1][1] + this.alturaSprite) ])
      
      for ( let x = 1; x < this.spritesImagem[0] ; x++) {
        this.matriz.push([ (this.matriz[x-1][0] + this.larguraSprite), this.matriz[y][1] ])
      }      
    }
  }
}