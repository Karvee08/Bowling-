var ball,ball1;
var bk,zeroArea
var pinImg,pin1,pin2,pin3,pin4,pin5,pin6,pin7,pin8,pin9,pin10
function preload(){
  bk=loadImage("images/finalbk.png")
  ball1=loadImage("images/ball.jpg")
  pinImg=loadImage("images/pin.jpg")
}
function setup() {
  createCanvas(600,800);
  ball=createSprite(275,750,50,50)
  ball.addImage(ball1)
  ball.scale=0.2
  pin1=createSprite(275,200,30,50)
   pin1.addImage(pinImg)
  pin2=createSprite(250,150,30,50)
   pin2.addImage(pinImg)
  pin3=createSprite(270,150,30,50) 
   pin3.addImage(pinImg)
  pin4=createSprite(50,50,30,50)
  pin4.addImage(pinImg)
  pin5=createSprite(50,50,30,50)  
   pin5.addImage(pinImg)
  pin6=createSprite(250,50,30,50) 
   pin6.addImage(pinImg)
  pin7=createSprite(250,50,30,50)
   pin7.addImage(pinImg)  
  pin8=createSprite(250,50,30,50)
   pin8.addImage(pinImg)
  pin9=createSprite(250,50,30,50)
   pin9.addImage(pinImg)
  pin10=createSprite(250,50,30,50)
  pin10.addImage(pinImg) 
  pin1.scale=0.07
  pin2.scale=0.07
  pin3.scale=0.07
  pin4.scale=0.07
  pin5.scale=0.07
  pin6.scale=0.07  
  pin7.scale=0.07
  pin8.scale=0.07
  pin9.scale=0.07
  pin10.scale=0.07

}

function draw() {
  background(bk);  
  line(50,0,50,700)
  line(100,0,100,700)
  line(150,0,150,700)
  line(200,0,200,700)
  line(250,0,250,700)
  line(300,0,300,700)
  line(350,0,350,700)
  line(400,0,400,700)
  line(450,0,450,700)
  line(500,0,500,700)


  drawSprites();
}