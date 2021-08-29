var path;
var Runner1 , Runner2;



function preload(){
  //pre-load images
}
//Create Path Sprite
var path = createSprite (200,200);
path.addImage(path.png);
path.y=path.width /2;
path.velocityY= -2;

//Loading Image

//Moving Background
path.addImage(pathImg);
path.velocityY=4;
path.scale=1.2;
if(path.y > 400){
  path.y = height/2;
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  boy = createSprite(50,160,20,50);
  boy.addAnimation(Runner1, Runner2);
  boy.velocityX = -2;
  boy.scale=1.2;
}

function draw() {
  background(0);

}
