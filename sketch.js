var bullet, wall;
var speed, weight, thickness;
var bulletRightEdge, wallLeftEdge;

function setup() {
  createCanvas(1600,400);


  bullet = createSprite(50, 200, 50, 20);
  wall = createSprite (1200, 200, thickness, 100);
  
  thickness = random(22, 83)
  speed=random(223, 321);
  weight=random(30, 52);

  bullet.velocityX = speed;
  
  
}

function draw() {

  background("black");
  wall.shapeColor = 80, 80, 80

  if (hasCollided(bullet, wall)) {
    bullet.velocityX=0;
    var damage=(0.5 * weight * speed * speed)/(thickness*thickness*thickness)
    if (damage>10) {
      wall.shapeColor = "red";
    }
    
    if (damage<10) {
      wall.shapeColor = "green";
    }
  } 



  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
}