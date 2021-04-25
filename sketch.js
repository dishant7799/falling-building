const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var slingshot;
var f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11;
var stone;


function preload() {
 //   getBackgroundImg();
 //backgroundimg = loadImage("sprites/bg1.png");
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    f1 = new Building(700,550,60,60);
    f2 = new Building(700,500,60,60);
    f3 = new Building(700,450,60,60);
    f4 = new Building(700,400,60,60);
    f5 = new Building(700,350,60,60);
    f6 = new Building(700,300,60,60);
    f7 = new Building(900,550,60,60);
    f8 = new Building(900,500,60,60);
    f9 = new Building(900,450,60,60);
    f10 = new Building(900,400,60,60);
    f11= new Building(900,350,60,60);


    stone = new Stone(300,400,60,60);


    ground = new Ground(600,height,1200,20);
   
  slingshot = new SlingShot(stone.body,{x:350, y:300});
}

function draw(){
    background("blue");
       
    
    Engine.update(engine);
    //strokeWeight(4);
   
    ground.display();
stroke ("black");
strokeWeight (5);
    fill ("red");
    f1.display();
     
    fill ("red");
    f2.display();

    fill ("red");
    f3.display();

    fill ("red");
    f4.display();

    fill ("red");
    f5.display();

    fill ("red");
    f6.display();

    fill ("red");
    f7.display();

    fill ("red");
    f8.display();

    fill ("red");
    f9.display();

    fill ("red");
    f10.display();

    fill ("red");
    f11.display();

    fill ("orange");
    stone.display();

    slingshot.display();    
}

function mouseDragged(){
 
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
 slingshot.fly(); 
  
}

function keyPressed(){
    if(keyCode === 32){

     Matter.Body.setPosition(stone.body,{x:200,y:50});
       slingshot.attach(stone.body);
    }
}


