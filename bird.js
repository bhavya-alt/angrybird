class Bird extends Angrybird{
    constructor(x, y, width, height) {
     super(x,y,width,height);
     this.image=loadImage("folder/bird.png");
    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      pos.y=mouseY;
      super.display();
    }
  }