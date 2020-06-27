class FimJogo {
  constructor(imagemFim) {
    // this.nomeInimigo = nomeInimigo;
    // this.imagemFim = ( this.nomeInimigo === 'gota' || this.nomeInimigo === 'gota voadora' ) ? loadImage("imagens/assets/gameover_gota.png") : loadImage("imagens/assets/gameover_troll.png");
    this.imagemFim = imagemFim;
    this.altura = null;
    this.largura = null;
    this.x = 0;
    this.y = 0;
    this.fator = width > height ? width * 0.001 : height * 0.0015

  //   if ( nomeInimigo = 'gota' || nomeInimigo = 'gota voadora' )
  //     loadImage("imagens/assets/gameover_gota.png")

  }

  exibe() {
    this.largura = this.imagemFim.width  * this.fator
    this.altura  = this.imagemFim.height * this.fator


    // if ( nomeInimigo === 'gota' || nomeInimigo === 'gota voadora' ) {
    //   // setInterval(() => {
    //     this.imagemFim = loadImage("imagens/assets/gameover_gota.png");
    //     // this.imagemFim = loadImage("imagens/assets/gameover_gota.png");
    //     console.log(nomeInimigo);
    //   // })
    // }
    // if ( nomeInimigo === 'troll' ) this.imagemFim = loadImage("imagens/assets/gameover_troll.png");

    image(this.imagemFim,
      this.x = width / 2 - (this.largura / 2),
      this.y = height / 2 - (this.altura / 2),
      this.largura,
      this.altura,
      );
  }
}