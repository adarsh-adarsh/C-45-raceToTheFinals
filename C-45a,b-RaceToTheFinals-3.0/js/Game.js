class Game 
{
  constructor()
  {
    //Matter.body.setAngle(this.body,angle);
  }

  getState()
  {
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){gameState = data.val();})
  }

  update(state)
  {
    database.ref('/').update({gameState: state});
  }

  async start()
  {
    if(gameState === 0)
    {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists())
      {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
  }

  match1()
  {
    if(player1.score>player2.score)
    {
      player1.gameState = 2;
      player2.gameState = 3;
    }
    else if (player2.score>player1.score)
    {
      player2.gameState = 2;
      player1.gameState = 3;
    }
  }

  match2()
  {
    if(player3.score>player4.score)
    {
      player3.gameState = 2;
      player4.gameState = 3;
    }
    else if (player4.score>player3.score)
    {
      player4.gameState = 2;
      player3.gameState = 3;
    }
  }

  play()
  {
    form.hide();
    player.getPlayerInfo();
    player.getPlayers();
    if(allPlayers!== undefined)
    {
      background.addImage("bg",backgroundImage);
      var index = 0;
      var goalKeeper = createSprite(200,200);
      goalKeeper.addImage("gk",goalKeepingGloves);
      goalKeeper.x = world.mouseX;
      goalKeeper.y = world.mouseY;
      rand1 = randomNumber();
      rand2 = randomNumber();
      ball.x = rand1;
      ball.y = rand2;
      ball.velocityX = 5;
      ball.velocityY = 5;
      if(goalKeeper.isTouching(ball))
      {
        ball.velocityX = 0;
        ball.velocityY = 0;
        score+=1;
      }
      if(goalKeeper.isTouching(ball)===null)
      {
        score = score;
      }
      this.match1();
      this.match2();
    }
    drawSprites();
  }

  finals()
  {
    this.play.hide();
  }
}
