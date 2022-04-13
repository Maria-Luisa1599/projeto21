
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var groundObj;
var parede;
var parede2;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	var plane_options={
		isStatic: true
	}
	var parede_options={
		isStatic: true
	}
	var parede2_options={
		isStatic: true
	}
	var ball_options={
		restution:0.01,
		friction:1,
	    frictionAir:0.01
	}

	groundObj = Bodies.rectangle(width/2,670,width,20, plane_options);
    World.add(world, groundObj);	

	parede = Bodies.rectangle(500, 600, 20, 120, parede_options);
	World.add(world, parede);

	parede2 = Bodies.rectangle(700, 600, 20, 120, parede2_options);
	World.add(world, parede2);

	ball = Bodies.circle(160, 100, 11, ball_options);
	World.add(world, ball);


	fill("white");
	rectMode(CENTER);
	ellipseMode(RADIUS);

	//Create the Bodies Here.



}


function draw() {
  background("lightblue");
  Engine.update(engine);
  rect(groundObj.position.x, groundObj.position.y, width, 20);
  rect(parede.position.x, parede.position.y, 20, 120);
  rect(parede2.position.x, parede2.position.y, 20, 120);

  ellipse(ball.position.x, ball.position.y,11, 11);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x: 20, y: -15})
	}
}

