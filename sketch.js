var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var partical;
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
//var score = 0;
var gameState = 0;
var turn=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,50);
  Engine.update(engine);
  
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   

   text("1000",20,height-150);
   text("1000",100,height-150);
   text("1000",180,height-150);
   text("1000",260,height-150);
   text("1000",340,height-150);
   text("10",420,height-150);
   text("10",500,height-150);
   text("10",580,height-150);
   text("10",660,height-150);
   text("10",740,height-150);
   //text("score " +score,100,50)
 

   
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
    
   }
   if(partical!= null){
  partical.display(); 
  if(partical.body.position.x<=400 && partical.body.position.y>750){
    score = score+1000
    partical = null
    turn++;
  }
  else if(partical.body.position.x>=400 && partical.body.position.y>750){
    score = score+10
    partical = null
    turn++;
  }
 
 }
 if(turn ===5){
   push()
   textSize(50)
   strokeWeight(15)
   stroke('green')
   text("Game Over",250,400)
   pop();
   gameState = 1;
 }
}

function mousePressed(){
  if(gameState ===0)
  partical = new Particle(mouseX, 10,10);

}