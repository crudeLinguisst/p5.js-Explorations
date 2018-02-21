let inc = 1;
let theta = 0;
function setup() {
	createCanvas(windowWidth, windowHeight);
	// angleMode(DEGREES);
	fill(255,252,240, 200);
	noStroke();
	title = createP("KALEIDOSCOPIC SNOWFLAKE");
	date = createP("05/12/2017")
	title.position(0, 0);
	date.position(width-105, 0)
}

function draw() {
	background(106,96,169, 100);
	translate(width/2, height/2);
	rotate(theta)
	beginShape()
	for(let a = 0; a < TWO_PI; a+= PI/20){
		let r = 0.17*height;
		if(a % (PI/10) == 0){
			r = 3*r*cos(a*inc);
		}
		let x = r*cos(a);
		let y = r*sin(a);
		vertex(x, y);
	};
	endShape(CLOSE)
	inc += 0.01;
	theta += 0.01;
}
