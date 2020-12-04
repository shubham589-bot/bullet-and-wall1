var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 60, 30);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet.velocityX=speed
  wall = createSprite(1500,200,thickness,height/2)
  wall.shapeColor = color(32,64,128)
  bullet.shapeColor = "white"
}

function draw() 
{
  background(0);
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0 
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness)

    if(damage< 10){
      bullet.shapeColor = color(0,225,0)
    }

    if(damage>10){
      bullet.shapeColor = color(225,0,0)
    }

  }
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x 
   if(bulletRightEdge >= wallLeftEdge)
   {
      return true
   }
   return false
}