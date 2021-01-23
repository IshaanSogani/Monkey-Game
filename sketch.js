
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score
var gamestate = "PLAY";

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
 monkey = createSprite(80, 315, 20, 20);
 monkey.addAnimation("moving", monkey_running);
 monkey.scale= 0.1     
   
 ground = createSprite(400, 350, 900, 10);
 ground.velocityX = -4
 ground.x = ground.width /2;
  
  obstaclesGroup = createGroup();
  FoodGroup =  createGroup();
  
  
  
}

function draw() {
background(225);
  
  
  
  if(gamestate === "PLAY"){
  
  if(ground.x<0){
    ground.x = ground.width /2;
  }
  
  monkey.collide(ground);
  
if(keyDown("space")){
 monkey.velocityY=-11; 
  
}  
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if(monkey.isTouching(obstaclesGroup)){
    gamestate = "END";
  }
  
 foodGroup()
 obstacleGroup();
  }
  
  if(gamestate === "END"){
    background("black")
    text("Game over", 200, 200)
    monkey.destroy();
    obstaclesGroup.destroyEach();
    FoodGroup.destroyEach();
    ground.destroy();
  }
  
  
  
  
  
  
drawSprites();
  
}

   function foodGroup(){
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    FoodGroup.add(banana);
    banana.lifetime = 250;
   }
   }
                                   
                 
   function obstacleGroup() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacles = createSprite(600,315,40,10);
    obstacles.y = Math.round(random(315,316));
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.2;
    obstacles.velocityX = -3;
    obstaclesGroup.add(obstacles);
     //assign lifetime to the variable
    obstacles.lifetime = 250;
  }
   }
