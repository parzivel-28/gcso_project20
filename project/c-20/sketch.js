var m,f
function setup() {
  createCanvas(800,400);
 f= createSprite(400, 200, 50, 50);
 f.shapeColor="green";
 m= createSprite(100,200,100,50);
 m.shapeColor="green";
 m.debug=true;
 f.debug=true;

}

function draw() {
  background(255,255,255); 
  m.x=World.mouseX;
  m.y=World.mouseY;
  if(m.x-f.x<=(m.width+f.width)/2 && f.x-m.x<=(m.width+f.width)/2  && m.y-f.y<=(m.height+f.height)/2
  && f.y-m.y<=(m.height+f.height)/2 )
  {
    f.shapeColor="red";
    m.shapeColor="red";
  }
 else{
    f.shapeColor="green";
    m.shapeColor="green";
 }
  drawSprites();
}