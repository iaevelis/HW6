function setup() {
  createCanvas(400, 400);
	background(0)
}

function draw() {
  colorMode(HSB);
  noStroke();

	for (var i = 0; i < 400; i+=40){
	 	fill(i, 75, 100);
  	rect(i+40, 20, 10, height-40);
	}
}
