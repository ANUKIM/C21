const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ball
var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  btn1 = createImg('right.png');
   btn1.position(220,30); 
   btn1.size(50,50);
    btn1.mouseClicked(hForce);
    btn2 = createImg('up.png');
    btn2.position(150,30); 
    btn2.size(50,50);
     btn2.mouseClicked(vForce);

  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
ball=new Ball (100,10,20);
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ball.show()
  Engine.update(engine);
}
function hForce()
 {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0}); }
    
    function vForce()
 {
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.02}); }
    


