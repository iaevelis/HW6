function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
	noFill();
	rectMode(CENTER);
	stroke(255)
		for (var a = 80; a < 1000; a+=20){

			rect(width/2, height/2+440,a-80,a+800)
		}
}
