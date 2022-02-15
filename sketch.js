var path
var runner
var InvisibleBoundaryLeft
var InvisbleBoundaryRight 


function preload(){
  //pre-load images
  pathImg = loadImage('path.png');
  runnerImg = loadAnimation('Runner-1.png','Runner-2.png');

}

function setup(){
  createCanvas(400,400)
  //create sprites here
  InvisibleBoundaryLeft = createSprite(0,0,100,800)
  InvisibleBoundaryLeft.visible = false
  InvisibleBoundaryRight = createSprite(400,400,100,800)
  InvisibleBoundaryRight.visible = false

  path = createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY = 4
  path.scale = 1.2

  runner = createSprite(200,340)
  runner.addAnimation("running", runnerImg);
  runner.scale = 0.08

}
  

function draw() {
  background(0);
  edges = createEdgeSprites()
  path.velocityY = 4

  runner.x = World.mouseX
  runner.collide(edges[3])
  runner.collide(InvisibleBoundaryLeft)
  runner.collide(InvisibleBoundaryRight)

  if (path.y > 400) {
    path.y = height/2
  }
  drawSprites()

  
}
