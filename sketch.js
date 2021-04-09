const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Block1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var gameState = "onSling"

function preload() {
  
}

function setup(){
    
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   stand = new Stand(150, 305, 300, 170);

    Block1 = new Block(700,320,70,70);
    Block2 = new Block(920,320,70,70);
    

    Block3 = new Block(700,240,70,70);
    Block4 = new Block(920,240,70,70);
    Block5 = new Block(810,160,70,70);


    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(255);
    Engine.update(engine);
    //strokeWeight(4);
    Block1.display();
    Block2.display();
    ground.display();


    Block3.display();
    Block4.display();


    Block5.display();



    stand.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if(gameState !== "launched"){
 //   Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}
}

function mouseReleased(){
    slingshot.fly();
gameState = "launched"
}

function keyPressed(){
    if(keyCode === 32){
 //       slingshot.attach(bird.body);
    }
}
