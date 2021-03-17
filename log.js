class Log extends Angrybird{
    constructor(x, y, width, height, angle) {
      super(x,y,width,height);
      Matter.Body.setAngle(this.body,angle);
      this.image=loadImage("folder/wood2.png");
      
      World.add(world, this.body);
    }
    
    }
  
  