var object3,mrect,frect,object1,object2;
function setup() {
  createCanvas(1200,800);
 mrect = createSprite(400, 200, 50, 50);
 mrect.shapeColor = "red";
 frect = createSprite (600,300,100,50);
 frect.shapeColor = "red";
 object1 = createSprite(500,400,80,50);
 object1.shapeColor = "red";
 object2 = createSprite(700,500,90,50);
 object2.shapeColor = "red";
 object3 = createSprite(150,400,80,50);
 object3.shapeColor = "red";
 mrect.debug = true;
 frect.debug = true;
 object1.debug = true;
 object2.debug = true;
object3.velocityX = 2;
object1.velocityX = -2;
}

function draw() {
  background("black");  
  
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;
  
  isTouching(mrect,object1);
  bounceOff(object1,object3);
  
  drawSprites();
}



























