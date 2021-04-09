class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.ground = Bodies.rectangle(450,390,900,20,options);
      this.width = width;
      this.height = height;
      World.add(world, this.ground);
    }
    display(){
      fill("brown");
      rectMode(CENTER);
      rect(this.ground.position.x, this.ground.position.y, 900, 20);
    }
  };
