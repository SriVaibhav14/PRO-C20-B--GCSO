var car,wall;
var speed,weight;

function setup() {
  createCanvas(1300,400);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,30,height/2);
  wall.shapeColor=("white");
  //wall.debug=true;
  wall.setCollider("rectangle",30,0);
  
  speed=random(55,90);
  weight=random(400,1200);

  car.velocityX=speed;
}

function draw() {
  background("black");
  
  if(wall.x-car.x < wall.width/2+car.width/2){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation>180){
      car.shapeColor=color(225,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=color(230,230,0);
    }
    if(deformation<100){
      car.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}