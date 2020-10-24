movingRec,fixedRec;
function setup() {
  createCanvas(800,400);
  fixedRec=createSprite(400, 200, 50, 50);
  fixedRec.shapeColor="purple";
  movingRec=createSprite(200,100,40,80);
  movingRec.shapeColor="purple";
}

function draw() {
  background("black"); 
  movingRec.x=mouseX;
  movingRec.y=mouseY; 
  if(movingRec.x-fixedRec.x>movingRec.width/2+fixedRec.width/2 ||
    fixedRec.x- movingRec.x>movingRec.width/2+fixedRec.width/2||
    movingRec.y-fixedRec.y>movingRec.width/2+fixedRec.width/2||
    fixedRec.y- movingRec.y>movingRec.width/2+fixedRec.width/2){
    
  fixedRec.shapeColor="red";
  movingRec.shapeColor="red";

  }
  else{
  fixedRec.shapeColor="purple";
  movingRec.shapeColor="purple";
  
  
  }
  drawSprites();
}