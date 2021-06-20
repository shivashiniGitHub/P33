const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2,ground3,ground4,ground5;

var particles;

var division1,division2,division3,division4,division5,division6;

var plinkor11,plinkor12,plinkor13,plinkor14,plinkor15,plinkor16,plinkor17,plinkor18,plinkor19,plinkor110,plinkor111,plinkor112;

var plinkor21,plinkor22,plinkor23,plinkor24,plinkor25,plinkor26,plinkor27,plinkor28,plinkor29,plinkor210,plinkor211,plinkor212;

var plinkor31,plinkor32,plinkor33,plinkor34,plinkor35,plinkor36,plinkor37,plinkor38,plinkor39,plinkor310,plinkor311,plinkor312;

var  particles = [];

var score = 0;

var particle1;

var PLAY = 1;
var END = 0;

var gameState = PLAY;

 function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,595,1200,10);
    ground2 = new Ground(600,4,1200,10);
    ground3 = new Ground(5,300,10,600);
    ground4 = new Ground(1195,300,10,600);

    ground5 = new Ground(600,583,1145,15)

   // ground10 = new Ground(600,450,1150,10);

    division1 = new Division(25,465,10,250);
    division2 = new Division(225,465,10,250);
    division3 = new Division(425,465,10,250);
    division4 = new Division(625,465,10,250);
    division5 = new Division(825,465,10,250);
    division6 = new Division(1025,465,10,250);
    division7 = new Division(1175,465,10,250);

    plinkor11 = new plinko(25,100,15);
    plinkor12 = new plinko(125,100,15);
    plinkor13 = new plinko(225,100,15);
    plinkor14 = new plinko(325,100,15);
    plinkor15 = new plinko(425,100,15);
    plinkor16 = new plinko(525,100,15);
    plinkor17 = new plinko(625,100,15);
    plinkor18 = new plinko(725,100,15);
    plinkor19 = new plinko(825,100,15);
    plinkor110 = new plinko(925,100,15);
    plinkor111 = new plinko(1025,100,15);
    plinkor112 = new plinko(1125,100,15);

    plinkor22 = new plinko(75,200,15);
    plinkor21 = new plinko(175,200,15);
    plinkor23 = new plinko(275,200,15);
    plinkor24 = new plinko(375,200,15);
    plinkor25 = new plinko(475,200,15);
    plinkor26 = new plinko(575,200,15);
    plinkor27 = new plinko(675,200,15);
    plinkor28 = new plinko(775,200,15);
    plinkor29 = new plinko(875,200,15);
    plinkor210 = new plinko(975,200,15);
    plinkor211 = new plinko(1075,200,15);
    plinkor212 = new plinko(1175,200,15);

    plinkor31 = new plinko(25,300,15);
    plinkor32 = new plinko(125,300,15);
    plinkor33 = new plinko(225,300,15);
    plinkor34 = new plinko(325,300,15);
    plinkor35 = new plinko(425,300,15);
    plinkor36 = new plinko(525,300,15);
    plinkor37 = new plinko(625,300,15);
    plinkor38 = new plinko(725,300,15);
    plinkor39 = new plinko(825,300,15);
    plinkor310 = new plinko(925,300,15);
    plinkor311 = new plinko(1025,300,15);
    plinkor312 = new plinko(1125,300,15);
}

function draw(){
    background(0,0,0);
    Engine.update(engine);
    
    fill("brown");
    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();

    fill("white");
    ground5.display();

    fill("white")
    division1.display();
    division2.display();
    division3.display();
    division4.display();
    division5.display();
    division6.display();
    division7.display();

    fill("white");
    plinkor11.display();
    plinkor12.display();
    plinkor13.display();
    plinkor14.display();
    plinkor15.display();
    plinkor16.display();
    plinkor17.display();
    plinkor18.display();
    plinkor19.display();
    plinkor110.display();
    plinkor111.display();
    plinkor112.display();

    plinkor21.display();
    plinkor22.display();
    plinkor23.display();
    plinkor24.display();
    plinkor25.display();
    plinkor26.display();
    plinkor27.display();
    plinkor28.display();
    plinkor29.display();
    plinkor210.display();
    plinkor211.display();
    plinkor212.display();

    plinkor31.display();
    plinkor32.display();
    plinkor33.display();
    plinkor34.display();
    plinkor35.display();
    plinkor36.display();
    plinkor37.display();
    plinkor38.display();
    plinkor39.display();
    plinkor310.display();
    plinkor311.display();
    plinkor312.display();

   
    if(particle1!= null){
        particle1.display();
       if(particle1.body.position.y>550){

        if(particle1.body.position.x<224 && particle1 ){

            score = score+100;
            particle1 = null;
        } }
       }

       if(particle1!= null){
        particle1.display();
       if(particle1.body.position.y>550){

        if(particle1.body.position.x<424 && particle1 ){

            score = score+300;
            particle1 = null;
        } }
       }

       if(particle1!= null){
        particle1.display();
       if(particle1.body.position.y>550){

        if(particle1.body.position.x<624 && particle1 ){

            score = score+500;
            particle1 = null;
        } }
       }

       if(particle1!= null){
        particle1.display();
       if(particle1.body.position.y>550){

        if(particle1.body.position.x<824 && particle1 ){

            score = score+500;
            particle1 = null;
        } }
       }
    
       if(particle1!= null){
        particle1.display();
       if(particle1.body.position.y>550){

        if(particle1.body.position.x<1024 && particle1 ){

            score = score+300;
            particle1 = null;
        } }
       }

       if(particle1!= null){
        particle1.display();
       if(particle1.body.position.y>550){

        if(particle1.body.position.x<1174 && particle1 ){

            score = score+100;
            particle1 = null;
        } }
       }

    text("score : "+score,1100,50)

    strokeWeight(2);
    stroke("green")
    text("100",100,400);
    text("100",1090,400);
    text("300",315,400);
    text("300",910,400);
    text("500",515,400)
    text("500",715,400)
}

function mousePressed(){
 
    if(gameState!=="end"){
        particle1 = new particle(mouseX,10,10,10);
    }

}



