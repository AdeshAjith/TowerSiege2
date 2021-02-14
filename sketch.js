const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
    polygon = loadImage("polygon.png") 
}

function setup(){
    createCanvas(1000,700)

    engine = Engine.create();
    world = engine.world;

    Base1 = new Base(500,690,1000,20)
    Base2 = new Base(650,550,350,10)
    Block1 = new Block(650,520,30,50,"lightblue")
    Block2 = new Block(620,520,30,50,"lightblue")
    Block3 = new Block(680,520,30,50,"lightblue")
    Block4 = new Block(590,520,30,50,"lightblue")
    Block5 = new Block(710,520,30,50,"lightblue")
    Block6 = new Block(560,520,30,50,"lightblue")
    Block7 = new Block(740,520,30,50,"lightblue")
    Block8 = new Block(650,470,30,50,"pink")
    Block9 = new Block(620,470,30,50,"pink")
    Block10 = new Block(680,470,30,50,"pink")
    Block11 = new Block(590,470,30,50,"pink")
    Block12 = new Block(710,470,30,50,"pink")
    Block13 = new Block(650,420,30,50,"lightgreen")
    Block14 = new Block(620,420,30,50,"lightgreen")
    Block15 = new Block(680,420,30,50,"lightgreen")
    Block16 = new Block(650,370,30,50,"gray")

    var PolygonOptions={
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }

    Polygon = Bodies.circle(150,300,20,PolygonOptions)
    World.add(world,Polygon)

    slingshot = new SlingShot(this.Polygon,{x:150,y:300})
    

    Engine.run(engine);
}

function draw(){
    background(48,22,8)
    textSize(20)
    text("Drag The Hexagon And Release It To Launch",150,100)
    text("Press Space To Re-attach The Stone",500,200)

    Base1.display();
    Base2.display();
    Block1.display();
    Block2.display();
    Block3.display();
    Block4.display();
    Block5.display();
    Block6.display();
    Block7.display();
    Block8.display();
    Block9.display();
    Block10.display();
    Block11.display();
    Block12.display();
    Block13.display();
    Block14.display();
    Block15.display();
    Block16.display();

    slingshot.display();

    imageMode(CENTER)
    image(polygon,Polygon.position.x,Polygon.position.y,55,55)
}

function mouseDragged(){
    Body.setPosition(this.Polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.Polygon)
    }
}
