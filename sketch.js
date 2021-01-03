const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)
	background("black")
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof= new Roof(width/2,height/4,width/7,20);
    var diameter=40;
	
	
	bob1= new Bob(roof.x-diameter*2,height/2,diameter);
	bob2= new Bob(roof.x-diameter,height/2,diameter);
	bob3= new Bob(roof.x,height/2,diameter);
	bob4= new Bob(roof.x+diameter,height/2,diameter);
	bob5= new Bob(roof.x+diameter*2,height/2,diameter);
	
	chain1 = new Chain(bob1.bob,roof.body,-diameter*2,0);  
	chain2 = new Chain(bob2.bob,roof.body,-diameter,0);      //chain on the leftside
	chain3 = new Chain(bob3.bob,roof.body,0,0);               //chain attached to the center of the roof
	chain4 = new Chain(bob4.bob,roof.body,diameter,0);      //chain on the right side
	chain5 = new Chain(bob5.bob,roof.body,diameter*2,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");

  //Engine.update(engine);

  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  

 
}



function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.bob,bob1.bob.position,{x:-50,y:-45});

	}
}