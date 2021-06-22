const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, ground;
var ball, rope ;
var earth
var backgroundImg
function preload() {

}

function setup() {
  createCanvas(1070, 650);
  engine = Engine.create();
  world = engine.world;



  ground = new Ground(600, 600, 1200, 100);
  earth = new Earth(1000,210,100,100)
 

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11 = new Box(800, 100, 70, 70);
  box12 = new Box(800, 100, 70, 70);
  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);
  box17 = new Box(700, 100, 70, 70);
  box18 = new Box(700, 100, 70, 70);
  box19 = new Box(700, 100, 70, 70);
  box20 = new Box(800, 100, 70, 70);
  box21 = new Box(900, 100, 70, 70);

  cloud1 = new Cloud(100,130,100,100)
  cloud2 = new Cloud(190,250,200,100)
  cloud3 = new Cloud(300,330,100,100)
  cloud4 = new Cloud(500,130,300,100)
  cloud5 = new Cloud(300,30,200,100)
  cloud6 = new Cloud(400,430,400,100)

  ball = new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x: 20, y: 20 });
  rope.scale = -0.001

  Engine.run(engine);

}

function draw() {
  background("skyblue");
 
  Engine.update(engine);
  fill("skyblue")
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()
  box19.display()
  box20.display()
  box21.display()
  earth.display();
cloud1.display()
cloud2.display()
cloud3.display()
cloud4.display()
cloud5.display()
cloud6.display()
  ball.display();
  fill("red")
  rope.display();

  fill(253,124,117)
  textFont("Edwardian Script ITC")
  textSize(35)

  text ("Press Space  ot destory virus again and protect planet earth", 5,25)

}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased(){
  rope.fly();
  
}

function keyPressed(){ 
if(keyCode === 32){
  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box5 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 100, 70, 70);
  box7 = new Box(800, 100, 70, 70);
  box8 = new Box(800, 100, 70, 70);
  box9 = new Box(800, 100, 70, 70);
  box10 = new Box(800, 100, 70, 70);
  box11 = new Box(800, 100, 70, 70);
  box12 = new Box(800, 100, 70, 70);
  box13 = new Box(700, 100, 70, 70);
  box14 = new Box(700, 100, 70, 70);
  box15 = new Box(700, 100, 70, 70);
  box16 = new Box(700, 100, 70, 70);
  box17 = new Box(700, 100, 70, 70);
  box18 = new Box(700, 100, 70, 70);
  box19 = new Box(700, 100, 70, 70);
  box20 = new Box(800, 100, 70, 70);
  box21 = new Box(900, 100, 70, 70);

  
rope.attach(ball.body)



}
}