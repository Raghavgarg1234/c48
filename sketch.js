var bgImg,bg;
var bird,birdImg

function preload () {
  bgImg = loadImage("BackGround.jpg");
  birdImg = loadImage("Bird.png");
  obImg =loadImage("Obstacles.png")
}

function setup(){
  createCanvas(500,500);
  bg=createSprite(250,250,500,500);
  bg.velocityX = -2 
  bg.scale=0.6
  bg.addImage(bgImg);
  bird = createSprite(50,200,10,10);
  bird.addImage(birdImg)
  bird.scale = 0.13;
  ob1Group=new Group()
  ob2Group=new Group()
}

function draw() {
  background (bgImg);
  if (bg.x<0) {
    bg.x = bg.width/2
 }

  if (keyDown("space")){

   bird.velocityY = -12

  }
  bird.velocityY+=0.8;

 
  spawnObstacles1();
  spawnObstacles2()
  drawSprites ();

  if(bird.isTouching(ob1Group)||bird.isTouching(ob2Group)||bird.y>500){
    ground.x = 0;
    ob1Group.setVelocityXEach(0);
    ob2Group.setVelocityXEach(0);
    bird.destroy();
    bg.destroy();
    strokeWeight(5);
    stroke("green");
    fill("red");
    textSize(33);
    text("Game Over!! Nice try",100,250)
  }
}
function spawnObstacles1(){
  if (frameCount%80 == 0 ){
    var ob = createSprite(300,100,10,10);
    ob.velocityX=-3;
    ob.addImage(obImg)
    
    ob.scale=random(0.3,0.4)
    ob1Group.add(ob)

  }
}

function spawnObstacles2(){
  if (frameCount%80 == 0 ){
    var ob2 = createSprite(300,450 ,10,10);
    ob2.velocityX=-3;
    ob2.addImage(obImg)
    
    ob2.scale=random(0.1,0.3 )
     ob2Group.add(ob2);
  }
}