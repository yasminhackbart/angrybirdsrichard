class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image2 = loadImage("sprites/smoke.png");
    // criando uma matriz que vai pegar posx e posy do passaro 
    this.trajetoria = [];
  }

  display() {
     super.display();

     if(this.body.position.x>200 && this.body.velocity.x>5 ){

    //pega posicao x e y do passaro cada vez que ele se mexe
    var position = [this.body.position.x,this.body.position.y];
    //adiciona dentro da matriz a posição
    this.trajetoria.push(position);
     }
    // trajetoria[[20,30]]
    // trejetoria[[20,30],[30,40]]
    // trejetoria[[20,30],[30,40],[70,80]]

    // primeiro - inicialização, onde ele vai começar na matriz
    // segundo - condição de parada, ele vai parar no final da matriz
    // trajetoria.length - retorna o tamanho da matriz
    // sempre ter que ser menor (<) , pois a matriz começa em zero
    // terceiro - de quanto em quanto ele vai aumentar, nesse caso ele vai de 1 em 1
    // 0 - 1- 2-3-4 .. até o tamanho da matriz
    for(var i=0;i<this.trajetoria.length;i++){
      // this.trajetoria[i][0] - corresponde a posicao x
      // this.trajetoria[i][1] - corresponde a posicao y
       image(this.image2, this.trajetoria[i][0], this.trajetoria[i][1]);
    }

   

  
  }
}
