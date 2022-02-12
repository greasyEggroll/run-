var img
var runner 

function preload(){
  //pre-load images
  img = loadImage('path.png');
  runner = loadImage('Runner-1.png')

}

function setup(){
  //create sprites here
  img.velocityY = 4
  img.scale = 1.2

  if (img.y > 400) {
    img.y = height/2
  }
}
  

function draw() {
  background(0);
  drawSprites()
  image(img,0,0)
}
