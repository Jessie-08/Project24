
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper, ground;


function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(100,250,50,);

	ground = new Ground(600,450,1200,20);

	bin1 = new Dustbin(900,430,200,10);
	bin2 = new Dustbin(800,380,10,100)
    bin3 = new Dustbin(1000,380,10,100);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  //drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:450,y:-450});
	}
}



