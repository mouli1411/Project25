
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
  paper = new Paper(600,600,5,5);
  Engine.run(engine);
  dustbinObj=new dustbin(1200,650);
  }


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
  groundObject.display();
  dustbinObj.display();
  paper.display();
}
function keyPressed (){
  if (keyCode===ENTER){
    Matter.Body.applyForce(paper.body, paper.body.position,{x:1000,y:540});
  }
}
