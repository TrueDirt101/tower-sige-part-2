const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
  createCanvas(800,400);

 engine = Engine.create();
 world = engine.world;
  
  //ground for the boxes
  ground = new Ground(500,300,300,20);
  //ground for the slingshot
  ground1 = new Ground(100,300,100,20);
  //layer1 
  box10 = new BaseClass(410,273,30,30);
  box11 = new BaseClass(450,273,30,30);
  box12 = new BaseClass(492,273,30,30);
  box13 = new BaseClass(530,273,30,30);
  //layer 2
  box20 = new BaseClass(430,240,30,30)
  box21 = new BaseClass(470,240,30,30)
  box22 = new BaseClass(510,240,30,30)
  //layer 3
  box30 = new BaseClass(450,206,30,30)
  box31 = new BaseClass(490,206,30,30)
  // layer 4
  box40 = new BaseClass(470,173,30,30)
 //fling box
  box = new throwbox(100,200,50,50)
 //sligshot
 slingshot = new SlingShot(box.body,{x:100, y:150});


  Engine.run(engine);
}

function draw() {
  background(255);  
  drawSprites();
//displaying the platforms
  ground.display();
  ground1.display();
//displaying the boxes
box10.display();
box11.display();
box12.display();
box13.display();
box20.display();
box21.display();
box22.display();
box30.display();
box31.display();
box40.display();
box.display();
//diplaying the sling shot
slingshot.display();


}

function mouseDragged(){
 Matter.Body.setPosition(box.body, {x: mouseX , y: mouseY});      
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(box.body);
    }
}
