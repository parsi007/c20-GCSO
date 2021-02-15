var car,wall;
var deformation;

function setup() {
  createCanvas(1000, 400);
  
  car = createSprite(100,190,50,50);
  car.shapeColor ="lightpink"
 
  wall = createSprite(900,200,20,300);
  wall.shapeColor ="lightpink";
  
  speed=random(55,90);
  weight=random(400,1500);
   car.velocityX = 10;
}

function draw() {

  background("skyblue");
  drawSprites();

  fill("black");
  textSize(25);
  text("GLOBAL CAR SAFETY ORGANIZATION",250,50);
  
  //refer to function collide.
  collide(wall,car)
  
  textSize(15);
  text("Deformation is : > 180 ===> Car is Lavender ===> Lethal for the Passangers",30,340);
  text("Deformation is : < 180 && > 100 ===> Car is Yellow ===> Average for the Passangers",30,360);
  text("Deformation is : < 100 ===> Car is LightGreen ===> Good for the Passangers",30,380);
  fill("red");
  textSize(25);
  text("DEFORMATION IS : "+Math.floor(deformation),30,300);
}

function deformations(){

  deformation=(0.5 * weight * speed * speed)/22500;
  
	if(deformation>180)
	{
    car.shapeColor="lavender";
	}

	if(deformation<180 && deformation>100)
	{
		car.shapeColor="yellow";
	}

	if(deformation<100)
	{
		car.shapeColor="lightgreen";
  }
  
}
function collide(object1,object2){
  if(object1.x-object2.x===object1.width/2 + object1.width/2+10)
    {
      deformations();
      object1.velocityX = 0;
      object2.velocityX = 0;
     
    }
}