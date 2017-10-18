function setup() {
  createCanvas(400, 400);
	background(0)
}

function draw() {
  colorMode(HSB);
  noStroke();

	for (var i = 0; i < 400; i+=40){
	 	fill(i, 75, 100);
  	rect(i+40, 30, 10, height-40);
	for (var z = 0; z < 400; z+=40){
		fill(50, 75, 100);
		rect(z-20, 10, 10, height-40);
		
	}
}
}
