const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//Namespacing

var engine,world;
var ball,box1,box2,box3,box4,box5,bird,pig1,pig2,log1,log2,log3,log4,ground;

function setup() {
  var canvas = createCanvas(1200,400);
  
  engine = Engine.create();
  world = engine.world;

  bird = new Bird(100,100);

  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  
  pig1 = new Pig(810,350)

  log1 = new Log(810,260,300,PI/2);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  log2 = new Log(810,180,300,PI/2);
  pig2 = new Pig(810,220);

  box5 = new Box(810,160,70,70);
  log3 = new Log(760,120,150,PI/7);
  log4 = new Log(870,120,150,-PI/7);


  console.log(bird)
  ground = new Ground(600,380,1200,20);
 

}

function draw() {
  background(0); 
  
  Engine.update(engine);

  rectMode(CENTER);

  box1.display();
  box2.display();
  pig1.display();

  log1.display();

  box3.display();
  box4.display();
  log2.display();
  pig2.display();
  box5.display();
  log3.display();
  log4.display();

  ground.display();

  bird.display();


}