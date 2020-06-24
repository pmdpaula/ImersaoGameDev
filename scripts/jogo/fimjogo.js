class FimJogo {
  constructor() {
    this.imagemFim = width > height ? loadImage("imagens/assets/gameover02.png") : loadImage("imagens/assets/gameover02_v.png");
    this.altura = null;
    this.largura = null;
    this.x = 0;
    this.y = 0;
    this.fator = width > height ? width / height * 0.5 : width / height * 1.5
  }

  exibe() {
    this.largura = this.imagemFim.width  * this.fator
    this.altura  = this.imagemFim.height * this.fator

    image(this.imagemFim,
      this.x = width / 2 - (this.largura / 2),
      this.y = height / 2 - (this.altura / 2),
      this.largura,
      this.altura,
      );
  }
}