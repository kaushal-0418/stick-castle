const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var wall1 ;


function setup() {
 var canvas =  createCanvas(400,400);
engine = Engine.create();
 world = engine.world;



 wall1 = new Wall (100,225,60,290);
 wall2 = new Wall (300,225,60,290);   
 wall3 = new Wall (200,185,60,170);
 wall4 = new Wall (38.5,290,60, 160);  
 wall5 = new Wall (361,290,60,160);
 wall6 = new Wall (200,295,140,150);

 

}

function draw() {
  background("black");  

Engine.update(engine);

triangle(200,30,169,100,231,100);//3
fill("green");

triangle(40,150,5,220,75,220);//1  
fill("green");

triangle(300,10,269,80,331,80);//4
fill("green");

triangle(100,10,70,80,130,80);//2
fill("green");

triangle(360,150,325,220,395,220);//5
fill("red");



wall1.display();
wall2.display();
wall3.display();
wall4.display();
wall5.display();
wall6.display();



drawSprites();
}