var gameState = 2;
var brick;
var bricks; 
var ball;
var score = 0;
var vidas = 5;
var paddle, paddleImg;
var edge;
function preload() {
  paddleImg = loadImage("ball.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
bricks = new Group();

  createBrickRow(65, "red");
  createBrickRow(65+44, "orange");
  createBrickRow(65+44+44, "green");
  createBrickRow(65+44+44+44, "yellow");
  paddle = createSprite(width/2, height-50, 250, 25);
paddle.shapeColor = "white";
ball = createSprite(width/2, height/2, 20, 20)
ball.addImage(paddleImg);
ball.scale = 0.2
//edge = createEdgeSprite();
}


function draw() {
  background("black");
  if (gameState === 2){
    ball.velocityX = 0;
    ball.velocityY = 0;
    textSize (20);
    fill("white")
    text ("Presiona ENTER para empezar a jugar", width/3 , height/2 + 100);
    inicio ();
  }else if (gameState === 1){
    ball.velocityX = 5;
  ball.velocityY = -5;
  if (keyDown("right")){
    paddle.x = paddle.x + 5;
  }
  if (keyDown("left")){
    paddle.x = paddle.x - 5;
  }
  if (paddle.x > width){
    paddle.x = width - 150;
  }
  if (paddle.x < 100){
    paddle.x = 150;
  }
  }else if (gameState === 0){
    
  }
  //paddle.x = world.mouseX;
  
  //ball.bounceOff(2);
  drawSprites();
}

function createBrickRow(y, color) {
  var numero = Math.round((windowWidth-65)/50);
  console.log("numero"+numero);
  for(c=0; c<numero-11; c++)
  {
    brick = createSprite(95+84*c,y,80, 35);
    brick.shapeColor = color;
    bricks.add(brick);
  }
}
function inicio (){
  if (keyDown("enter")){
    console.log("inicio");
    gameState = 1;
    //ball.velocityX = 5;
    //ball.velocityY = -5;
  }
}