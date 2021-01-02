
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     g1 = new Ground(300,100,300,10);
	 b1 = new paper(200,300,30);
	 b2 = new paper(230,300,30);
	 b3 = new paper(260,300,30);
	 b4 = new paper(290,300,30);
	 b5 = new paper(320,300,30);
	 chain1 = new Chain(b1.body,{x:200,y:100});
	 chain2 = new Chain(b2.body,{x:230,y:100});
	 chain3 = new Chain(b3.body,{x:260,y:100});
	 chain4 = new Chain(b4.body,{x:290,y:100});
	 chain5 = new Chain(b5.body,{x:320,y:100});
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  g1.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  

  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(b1.body,b1.body.position,{x:-25,y:0});
  }
}
  


