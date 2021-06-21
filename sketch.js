
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var drone,boss,tree,mars,jupiter,sun,man,fan,bird,ring,ringimg,invisibleGround,ring2,ring3,ring4,backgr,tower,backgroundimg,canvas;
var droneimg,bossimg,treeimg,marsimg,jupiterimg,sunimg,manimg,fanimg,birdimg,towerimg,galaxyimg,backgr2,pplimg,people;
var score=0;

var lvl1;
var lvl2;
//var level2=1;
var gameState="Lv1"
//var gameState=level2
var ring5,ring6,drone2,tower2,slingshot;

function preload()
{
	droneimg=loadImage("whitehat/drone without background.png");
	bossimg=loadImage("whitehat/robot boss obstacle.png");
	treeimg=loadImage("whitehat/tree_obstacle-removebg-preview.png");
	marsimg=loadImage("whitehat/mars.obstacle-removebg-preview.png");
	jupiterimg=loadImage("whitehat/jupiter.png");
	sunimg=loadImage("whitehat/sun-removebg-preview.png");
	manimg=loadImage("whitehat/parachute_obstacle-removebg-preview.png");
	fanimg=loadImage("whitehat/obstacle_fan1-removebg-preview.png");
	birdimg=loadImage("whitehat/eagle_obstacle-removebg-preview.png");
	ringimg=loadImage("whitehat/ring.png")
	towerimg=loadImage("whitehat/tower3-removebg-preview.png")
    backgroundimg=loadImage("whitehat/background1.png");
	galaxyimg=loadImage("whitehat/galaxy.jpg");
	pplimg=loadImage("whitehat/people (2).png")
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
	createCanvas(1200,800);
	rectMode(CENTER);


   
	backgr=createSprite(0,0,5000,800);
  backgr.addImage(backgroundimg);
  backgr.scale=10;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
	

	
  	
    drone=createSprite(250,150,50,50);
	drone.addImage("drone",droneimg);
	drone.scale=0.5

    invisibleGround=createSprite(200,900,50,50);
	invisibleGround.visible=false;

	tower=createSprite(50,500);
    tower.addImage("TOWER2",towerimg)
	tower.scale=2;

	ring=createSprite(500,150);
	ring.addImage("ring",ringimg);
	
	ring2=createSprite(900,550);
	ring2.addImage("ring2",ringimg)

	people=createSprite(50,250);
	people.addImage(pplimg);
	people.scale=0.2;

// slingshot=new SlingShot(people.body,drone.body)

// drone.attach(peope.body)
	;
}


function draw() {
	background(backgroundimg);
	backgr.velocityX=-5;
	if(backgr.x<0){
		backgr.x=backgr.width/2;
	  }
	  
	  if (gameState==="Lv1"){ 
		lvl1();
		}

        if (drone.x>1200){
			gameState="Lv2"
		}
		if (gameState==="Lv2"){
		  lvl2();
		}

		
	  invisibleGround.display();
	  drone.display();
	 
	  ring.display();
	  ring2.display();
	  tower.display();
	  
	  
	  

  drawSprites();
 

}
function lvl1(){
	if(keyDown(UP_ARROW)){

		drone.velocityY=-5;
	
	  }
	  if(keyDown(DOWN_ARROW)){
		  drone.velocityY=5;
	  }
	
	  if(keyDown(RIGHT_ARROW)){
		drone.velocityX=5;
	}
	
	if(keyDown(LEFT_ARROW)){
		drone.velocityX=-5;
	}
	
	if(keyDown("space")){
		people.position.x=drone.x;
		people.position.y=drone.y;
		 people.velocityX=drone.velocityX;
		// people.velocityY=drone.velocityY;
	}
	pop();
	drone.velocityY = drone.velocityY + 0.8
	drone.collide(invisibleGround)
		//}
	
		
	textSize(20);
	
	text("score:",score,400,200,50,50)
	if(drone.isTouching(ring)){
		score=score++
	}
	
	if(drone.isTouching(ring2)){
		score=score++
	}
	
	if(keyCode===32){
		people.position.x=drone.x;
		people.position.y
	
	}	
}

function lvl2(){

	drone2=createSprite(250,150,50,50);
	drone2.addImage("drone",droneimg);
	drone2.scale=0.5

    invisibleGround=createSprite(200,900,50,50);
	invisibleGround.visible=false;

	tower=createSprite(50,500);
    tower.addImage("TOWER2",towerimg)
	tower.scale=2;

	ring=createSprite(500,150);
	ring.addImage("ring",ringimg);
	
	ring2=createSprite(900,550);
	ring2.addImage("ring2",ringimg)

	people=createSprite(50,250);
	people.addImage(pplimg);
	people.scale=0.2;

	
	background(galaxyimg);
	backgr2=createSprite(0,300,5000,800);
	backgr2.addImage(galaxyimg);
	backgr2.scale=1;

	backgr2.x=backgr2.width/2;
	backgr2.velocityX=-4;
	imageMode(CENTER)
	
	if(keyDown(UP_ARROW)){

		drone.velocityY=-5;
	
	  }
	  if(keyDown(DOWN_ARROW)){
		  drone.velocityY=5;
	  }
	
	  if(keyDown(RIGHT_ARROW)){
		drone.velocityX=5;
	}
	
	if(keyDown(LEFT_ARROW)){
		drone.velocityX=-5;
	}
	
	if(keyDown("space")){
		people.position.x=drone.x;
		people.position.y=drone.y;
		 people.velocityX=drone.velocityX;
		// people.velocityY=drone.velocityY;
	}
	pop();
	drone.velocityY = drone.velocityY + 0.8
	drone.collide(invisibleGround)
		//}
	
		
	textSize(20);
	
	text("score:",score,400,200,50,50)
	if(drone.isTouching(ring)){
		score=score++
	}
	
	if(drone.isTouching(ring2)){
		score=score++
	}
	
	if(keyCode===32){
		people.position.x=drone.x;
		people.position.y

		drone2.display();
		invi
	
	}	
}


 
	