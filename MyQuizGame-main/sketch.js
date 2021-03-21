var canvas;
var  database, quiz, question, contestant;
var gameState = 0;
var contestantCount;
var allContestants;

function setup(){
  canvas = createCanvas(850,400);
}


function draw(){
  background("pink");
//  quiz.getState();
  if(gameState === 1){
    console.log("the game begins");
}
  drawSprites();
}
