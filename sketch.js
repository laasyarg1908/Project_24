
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var lefttWall, rightWall, bottomWall;
var ground, paperBall;

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	leftWall = new Dustbin(610, 420, 30, 100);
	rightWall = new Dustbin(750, 420, 30, 100);
	bottomWall = new Dustbin(680, 480, 120, 30);

	paperBall = new Paper(150, 430, 30);

	ground = new Ground(500, 495, 1000, 10);

	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  Engine.update(engine);

  leftWall.display();
  rightWall.display();
  bottomWall.display();

  paperBall.display();
  ground.display();
  

 
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:29, y:-39});
	}
}


