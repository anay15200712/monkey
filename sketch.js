
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  monkey =createSprite(80,320);
monkey.addAnimation("monkey",monkey_running);
monkey.scale=0.2;
  ground=createSprite(300,380,600,10);
  
}


function draw() {
  background("white");
  text("Score: "+score,500,50);
  if(score>0 && score%100==0){
  }
  monkey.collide(ground);
  spawnobstacle();
  spawnbanana();
  drawSprites();
}
function spawnobstacle(){
  if(World.frameCount %300 ==0){
     var obstacle=createSprite(600,350,40,10);
  obstacle.velocityX=-3;
 obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.lifetime=300;
    //cloudgroup.add(cloud);
}
}
  
  function spawnbanana(){
  if(World.frameCount %300 ==0){
     var banana=createSprite(600,200,40,10);banana.velocityX=-3;
 banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.lifetime=300;
    //cloudgroup.add(cloud);
}
  }





