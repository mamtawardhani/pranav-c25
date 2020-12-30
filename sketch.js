const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world
var box1

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   box1=new Box(100,10,50,100)
   box2=new Box(200,20,60,10)
   g=new Ground(200,380,400,20)
   p1=new Pig(250,30)
   l1=new Log(200,10,150,PI/2)


}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display()
    box2.display()
    g.display()
    p1.display()
    l1.display()
 
}