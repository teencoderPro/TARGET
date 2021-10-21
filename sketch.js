var bg1,g1,g2,g3,g4;
var targetImg,targetGroup,crossHair,crossHairImg;

function preload () {
  bg1 = loadImage("Shooting range1.jpeg");
  targetImg = loadImage("aim.png");
  crossHairImg = loadImage("crossHair.png");      
}

function setup() {
  createCanvas(1350,650);

  targetGroup=new Group();

  g1 = createSprite(650,1,1300,1);
  g1.visible=false;
  g2 = createSprite(650,649,1300,1);
  g2.visible=false;
  g3 = createSprite(1,325,1,650);
  g3.visible=false;
  g4 = createSprite(1299,325,1,650);
  g4.visible=false;

  crossHair = createSprite(650,325,20,20);
  crossHair.addImage(crossHairImg);
  crossHair.scale = 0.1;

}

function draw() {
    background(bg1);  
    targets();

    targetGroup.bounceOff(g1);
    targetGroup.bounceOff(g2);
    targetGroup.bounceOff(g3);
    targetGroup.bounceOff(g4);

    crossHair.y = World.mouseY;
    crossHair.x= World.mouseX;

  if(crossHair.isTouching(targetGroup)){
    targetGroup.destroyEach();
  }

      drawSprites();
  }

  function targets(){
    if (frameCount % 100 === 0) {
       target = createSprite(650,325,20,20);
      target.addImage(targetImg);
      target.velocityY = random([-4,4]);
      target.velocityX = random([-4,4]);
      target.scale = 0.1;
    
      target.lifetime = 200;
    
      targetGroup.add(target);  
    }
  }


  

