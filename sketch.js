var car;
var wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50,200,50,50);
  speed=random(55,90);
  weight = random(400,1500)
  car.velocityX=speed;
  wall=createSprite(1300,200,60,height/2);
  wall.shapeColor = color(80,80,700);

}

function draw() {
  background(255,255,255); 
  

    
    
if( wall.x-car.x <car.width/2 + wall.width/2  ){
    var deformation = 0.5* weight*speed*speed/22500;
    car.velocityX=0;
    console.log(deformation);
    
    if(deformation<=100){
      car.shapeColor="green"
       }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow"
       }
    if(deformation>180){
      car.shapeColor="red"
       }
    
      }
      if (car.x===1250) {
        car.velocityX=0;
      }
  
 
  drawSprites();
}                                                                                                                                    