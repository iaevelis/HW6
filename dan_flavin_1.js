
function setup() {
  createCanvas(400, 400);
	background(0)
}

function draw() {
  colorMode(HSB);
  noStroke();

	for (var i = 0; i < 400; i+=40){
	 	fill(i+50, 75, 100);
  	rect(i+10, 10, 15, height-20);
		rect(10, i+10, width-20, 15)
	}
}
