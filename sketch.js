
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	paper1 = new Paper(100,500)
  ground1 = new Ground(width/2,680,1600,20)
  dustbin1 = new Dustbin(1500,665,200,10)
  dustbin2 = new Dustbin(1405,610,10,100)
  dustbin3 = new Dustbin(1595,610,10,100)
 // console.log(dustbin1)

}
function draw() {
  background(0);
  Engine.update(engine)
  drawSprites()
  paper1.display()
  ground1.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  textSize(22)
  text("press w ",width/2,height/2)
  keyPressed()
}

function keyPressed()
{
  if(keyDown("w"))
  {
    Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
  }
}
