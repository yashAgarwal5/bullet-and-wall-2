var bullet,wall;
var speed,weight,thickness;

function setup() {
  createCanvas(800,400);
  

   thickness = random(22,83);
  speed=random(55,90);
  weight = random(400,1500);
 bullet = createSprite(50,200,50,50);
 bullet.velocityX=speed

  

  wall =createSprite(780,200,30,100)
}

function draw() {
  background(255,255,255);  
 if(hasCollided(bullet,wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight*speed*speed/(thickness*thickness*thickness);

  if( damage>10)
{
  bullet.shapeColor=color(255,0,0);
}
 
 if (damage<10)
 {
   bullet.shapeColor = color(0,255,0);
 }


}

 bullet.display();
wall.display();
  }

  function hasCollided(lbullet,lwall){

  bulletRightEdge = lbullet.x +lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}
  return false;
  }




