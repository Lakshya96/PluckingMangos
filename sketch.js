const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stone,tree,boy,chain1,treeImg,boyImg;
var backgroundImg,mango1,mango2,mango3,mango4,mango5;

function preload() {
    treeImg=loadImage("sprites/tree.png");
    boyImg=loadImage("sprites/boy.png");
}

function setup(){
    createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

    tree=createSprite(590,290,20,20);
    tree.addImage(treeImg);
    tree.scale=0.35;

    boy=createSprite(200,435,20,20);
    boy.addImage(boyImg);
    boy.scale=0.125;

    stone=new Stone(225,400,70);

    ground = new Ground(width/2,500,width,30);
    chain1=new Slingshot(stone.body,{x:135,y:365});

    mango1=new Mango(650,210,50);
    mango2=new Mango(700,230,40);
    mango3=new Mango(590,130,65);
    mango4=new Mango(500,230,60);
    mango5=new Mango(590,200,55);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    Engine.update(engine);

    ground.display();
    drawSprites();
    stone.display();
    mango1.display();
    detectColision(stone,mango1);
    mango2.display();
    detectColision(stone,mango2);
    mango3.display();
    detectColision(stone,mango3);
    mango4.display();
    detectColision(stone,mango4);
    mango5.display();
    detectColision(stone,mango5);

    chain1.display();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain1.fly();
}

function keyPressed(){
    if(keyCode === 32){
        chain1.attach(stone.body);
    }
}

function detectColision(lblock,lmango){
    mangoBodyPosition=lmango.body.position;
    blockBodyPosition=lblock.body.position;

    var distance=dist(blockBodyPosition.x,blockBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
        if (distance<=lmango.r+stone.r){
        Matter.Body.setStatic(lmango.body,false);
    }
}