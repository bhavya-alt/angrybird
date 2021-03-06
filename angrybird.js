class Angrybird {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("folder/base.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill(255);
      push();
      translate(pos.x,pos.y);
      rotate(this.body.angle);
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  