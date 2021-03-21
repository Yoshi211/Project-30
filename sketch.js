const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1, box1, box2, box3;

function setup() {
  createCanvas(800,400);

	engine = Engine.create();
	world = engine.world;

  ground1 = new Ground(390,240,300,20);
  ground2 = new Ground(400,400,800,20);

  box1 = new Box(330,200,30,40);
  box2 = new Box(360,200,30,40);
  box3 = new Box(390,200,30,40);
  box4 = new Box(420,200,30,40);
  box5 = new Box(450,200,30,40);
  
  box6 = new Box(360,150,30,40);
  box7 = new Box(390,150,30,40);
  box8 = new Box(420,150,30,40);

  box9 = new Box(390,100,30,40);

  polygon1 = new polygon(200,50);

  slingshot = new SlingShot(polygon1.body,{x:100,y:150});

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("white");  
  ground1.display();
  ground2.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  polygon1.display();
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body,{x: mouseX ,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(polygon1.body);
  }
}
