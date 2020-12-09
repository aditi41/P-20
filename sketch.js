var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);

  speed = random(55,90);
  weight = random(400,1500);

  wall.shapeColor="grey";
  car.shapeColor="white";
}

function draw() {
  background(0);  

  car.velocityX = speed;

  if(wall.x - car.x < (wall.width + car.width)/2){

    car.velocityX = 0;

    var deformation = 0.5 * speed * weight * speed/22500;

    if(deformation > 180){

      car.shapeColor="red";

    }

    if(deformation < 180 && deformation > 80){

      car.shapeColor="yellow";

    }

    if(deformation < 80){

      car.shapeColor="green";

    }
  }

  drawSprites();
}