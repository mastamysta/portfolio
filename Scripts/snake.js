var intervalID = null;
window.onload = function(){
  canv = document.getElementById('snakeCanvas');
  ctx = canv.getContext("2d");
  document.addEventListener("keydown", keyPush);
  intervalID = setInterval(game, 1000/10);
  console.log("Here");
}

var xVelocity = 0, yVelocity = 0;
const cellSize = 400 / 10;
const SPEED = cellSize;
var trail = new Array({
  xPos: Math.floor(Math.random() * 400 / cellSize) * cellSize,
   yPos: Math.floor(Math.random() * 400 / cellSize) * cellSize
 });
var aPosX = Math.floor(Math.random() * 400 / cellSize) * cellSize;
var aPosY = Math.floor(Math.random() * 400 / cellSize) * cellSize;

//handle keypress event
function keyPush(e){
  keyCode = e.keyCode
  switch (keyCode) {
    case 37:
      if (xVelocity == SPEED){

      }
      else{
        xVelocity = -SPEED;
        yVelocity = 0;
      }
      break;
    case 38:
      if (yVelocity == SPEED){

      }
      else{
        xVelocity = 0;
        yVelocity = -SPEED;
      }
      break;
    case 39:
      if (xVelocity == -SPEED){

      }
      else{
        xVelocity = SPEED;
        yVelocity = 0;
      }
      break;
    case 40:
      if (yVelocity == -SPEED){

      }
      else{
        xVelocity = 0;
        yVelocity = SPEED;
      }
      break;
    case 27:
        clearInterval(intervalID);
      break;
    case 49:
        intervalID = setInterval(game, 1000/10);
      break;
    default:
      break;

  }
  console.log(xVelocity + " " +  yVelocity);
}

function game(){


//move tail peices
  for(i = trail.length - 1; i > 0; i --){
    console.log(i);
    trail[i].xPos = trail[i - 1].xPos;
    trail[i].yPos = trail[i - 1].yPos;
  }

//move head
  trail[0].xPos += xVelocity;
  trail[0].yPos += yVelocity;

//teleport head if its off the edge
  if(trail[0].xPos < 0){
    trail[0].xPos = 400 - cellSize;
  }
  else if(trail[0].xPos > 400 - cellSize){
    trail[0].xPos = 0;
  }
  else if(trail[0].yPos < 0){
    trail[0].yPos = 400 - cellSize;
  }
  else if(trail[0].yPos > 400 - cellSize){
    trail[0].yPos = 0;
  }


//draw background
  ctx.fillStyle="black";
  ctx.fillRect(0, 0, document.getElementById("snakeCanvas").width,  document.getElementById("snakeCanvas").height);
  ctx.fillStyle="lime";
//draw each snake segment and check for collision with head
  for(let elem of trail){
    ctx.fillRect(elem.xPos, elem.yPos, cellSize, cellSize);
    if(trail[0].xPos == elem.xPos && trail[0].yPos == elem.yPos && elem !== trail[0]){
      location.reload();
      console.log("reloaded");
    }
  }


//check for collision with apple
  if(trail[0].xPos == aPosX && trail[0].yPos == aPosY){
    trail[trail.length] = {xPos: aPosX, yPos: aPosY};
    aPosX = Math.floor(Math.random() * 400 / cellSize) * cellSize;
    aPosY = Math.floor(Math.random() * 400 / cellSize) * cellSize;
   }

   //draw apple
  ctx.fillStyle="red";
  ctx.fillRect(aPosX, aPosY, cellSize, cellSize);
}


//function to navigate to index again
function goTo(location){
  window.location.href=location;
}

$("#back-button").on("click", function(){
  goTo("index.html");
});
