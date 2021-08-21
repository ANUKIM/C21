class Ball {
    constructor(x, y, w){
        var ball_options = {
            restitution: 0.95,
            
          }
      
    this.body = Bodies.circle(x, y, w,ball_options);
    this.w = w;
    World.add(world, this.body);
  }     
  show() {
    var pos = this.body.position;
    push();
    ellipseMode(RADIUS);
    stroke(255);
    fill(127);
    ellipse(pos.x, pos.y, this.w,this.w );
    pop();

  }

    }

