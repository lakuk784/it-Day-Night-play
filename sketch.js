const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,platform1,platform2
var cont,stone,stoneimg,backgroundImg
var box1,box2,box3,box4,box5,box6,box7,box8
var box9,box10,box11,box12,box13,bpx14,bpx15,box16
var dibba1,dibba2,dibba3,dibba4,dibba5,dibba6,dibba7,dibba8,dibba9

function preload()
{
    stoneimg = loadImage ("polygon.png")
    getBackgroundImg();
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    ground = new Ground (500,490,1000,20)

    //platform
    platform1 = new Ground (450,300,250,10)
    platform2 = new Ground (750,200,200,10)

    //line1,platform1
    box1 = new Box (420,280)
    box2 = new Box (430,280)
    box3 = new Box (440,280)
    box4 = new Box (450,280)
    box5 = new Box (460,280)
    box6 = new Box (470,280)
    box7 = new Box (480,280)

    //line2,platform1
    box8 = new Box (430,250)
    box9 = new Box (440,250)
    box10 = new Box (450,250)
    box11 = new Box (460,250)
    box12 = new Box (470,250)

    //line3,platform1
    box13 = new Box (440,220)
    box14 = new Box (450,220)
    box15 = new Box (460,220)

    //line4,platform1
    box16 = new Box (450,190)

    //line1,platform2
    dibba1 = new Box (720,170)
    dibba2 = new Box (730,170)
    dibba3 = new Box (740,170)
    dibba4 = new Box (750,170)
    dibba5 = new Box (760,170)

    //line2,platform2
    dibba6 = new Box (730,140)
    dibba7 = new Box (740,140)
    dibba8 = new Box (750,140)

    //line3,platform2
    dibba9 = new Box (740,110)

    //stone
    var ops={
        friction:0.04
    }
    stone = Bodies.circle (50,200,20,ops)
    World.add(world,stone)
 
    //constraint
    cont = new SlingShot (stone,{x:150,y:200})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 if (backgroundImg)
  background(backgroundImg);

  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);


  imageMode (CENTER)
  image (stoneimg,stone.position.x,stone.position.y,40,40)

  ground.display();

  platform1.display();
  platform2.display();

  fill ("#87CEEA")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  fill("#FFC0CB")
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  
  fill("#3FE0D0")
  box13.display();
  box14.display(); 
  box15.display();

  fill("#808080")
  box16.display();

  fill("#87CEEA")
  dibba1.display();
  dibba2.display();
  dibba3.display();
  dibba4.display();
  dibba5.display();

  fill("#FFC0CB")
  dibba6.display();
  dibba7.display();
  dibba8.display();

  fill("#3FE0D0")
  dibba9.display();

  cont.display();

  drawSprites();
 
 
}

function keyPressed()
{
    if (keyCode === 32){
        cont.attach(stone)
    }
}
function mouseDragged(){
    Matter.Body.setPosition(stone, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    cont.fly();
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=18){
        bg = "img.jpg";
    }
    else{
        bg = "nig.gif";
    }

    backgroundImg = loadImage(bg)
    console.log(backgroundImg)
}

