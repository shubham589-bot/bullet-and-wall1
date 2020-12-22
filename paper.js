class Paper {
    constructor(x,y) {
      var options = {
          isStatic:false,
          restitution : 0.3,
          friction : 0.5,
          density : 1.2
      }
      this.body = Bodies.circle(x,y,25,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(color(55,85,64));
      ellipse(pos.x, pos.y,25);
    }
  }