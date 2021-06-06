var sea;
var ship;
function preload(){
  ship = loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png");
  sea = loadAnimation("sea.png");


}

function setup(){
  createCanvas(400,400);
  sea.addAnimation = ("sea.png");
  ship.AddAnimation = ("ship-1.png");

  trex.velocityY = trex.velocityY + 0.8

  if (sea.x < 0) {
    sea.x = sea.x / 2

    }
  
}

function draw() {
  background("blue");
 
}

