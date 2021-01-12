const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Events = Matter.Events

//var particles = [];
//var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
function setup() {
  createCanvas(480,800);
   
   engine= Engine.create();

 world=engine.world;
 for (var k = 0; k <=width; k = k + 80){
   divisions.push(new Divisions(k, height-divisionHeight/2,10, divisionHeight))
 }

/* for (var j = 75; j <=width; j=j+50){
   plinkos.push(new Plinko(j,75))}

}*/

function draw() {
  background(255,255,255);  
  Engine.update(engine)
    for (var i = 0; i<divisions.length; i++){
    divisions[i].display();
  }
  /*for (var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }*/
  /*if (frameCount% 60 === 0){
    particles.push(new Particle(random(width/2 -30,width/2 +30),10,10))
    score++;
  }
 for(var j=0;j<particles.length;j++){
particles[j].display()
}*/
ground.display()
} 
