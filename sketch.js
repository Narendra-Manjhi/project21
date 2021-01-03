var canvas;
var music;
var block1 ,block2 ,block3 ,block4;
var box ;
var Edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
  surfaces1 =createSprite(60,600,200,50);
  surfaces1.shapeColor ="blue";
   
  block2 =createSprite(275,600,200,50);
  block2.shapeColor = rgb(255,128,0);
   
  surfaces3 =createSprite(490 ,600,200,50);
  surfaces3.shapeColor ="red";

  surfaces4 =createSprite(705,600,200,50);
  surfaces4.shapeColor ="green";

    //create box sprite and give velocity
   
    ball =createSprite(random(20,750),100,40,40);
    ball.shapeColor ="white";
    ball.velocityX=4;
    ball.velocityY=9;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    Edges =createEdgeSprites();
    ball.bounceOff(Edges);
    
    
    


    //add condition to check if box touching surface and make it box

    if(surfaces1.isTouching(ball) && ball.bounceOff(surfaces1)){
       ball.shapeColor="blue";
       music.play();
    }
    if(block2.isTouching(ball)){
       ball.shapeColor= rgb(255,128,0);
       ball.velocityX=0;
       ball.velocityY= 0;
       music.stop();
    }
    if(surfaces3.isTouching(ball) && ball.bounceOff(surfaces3)){

        ball.shapeColor="red";
    }
    if(surfaces4.isTouching(ball) && ball.bounceOff(surfaces4)){

        ball.shapeColor="green";
    }


    drawSprites();
}
