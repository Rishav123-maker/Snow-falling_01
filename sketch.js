const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,snow;
var backgroundImg;

function preload(){
   backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  engine  = Engine.create();
  world = engine.world;
  
  //if(frameCount%60===0){
    snow = new Snow(200,200);
   
 //}

  //createSprite(400, 200, 50, 50);
}

function draw() {
  Engine.update(engine);
  background(backgroundImg);  
  
 snow.display();
 snow.updateY();
  drawSprites();
}