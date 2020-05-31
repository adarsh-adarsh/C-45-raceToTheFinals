var canvas,backgroundImage,background;;
var gameState = 0;
var score = 0;
var playerCount;
var allPlayers;
var database;
var player;
var form,team,game;
var players,player1,player2,player3,player4;
var goalKeepingGloves;
var goalKeeper;
var ball;
var rand1,rand2;

function preload()
{
  goalKeepingGloves = loadImage("../images/goalKeepingGloves.png");
  backgroundImage = loadImage("../images/background.png");
  ballImage = loadImage("../images/footbal.png");
}

function setup()
{
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}


function draw()
{
  if(playerCount === 4)
  {
    game.update(1);
  }
  if(gameState === 1)
  {
    clear();
    game.play();
  }
  if(gameState === 3)
  {
    text("congratulations on getting the third place",displayWidth/2,displayHeight/2)
  }
  if(gameState === 2)
  {
    finals();
  }
}
