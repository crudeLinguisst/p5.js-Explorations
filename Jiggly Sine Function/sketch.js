let a = 0;
let theta = 0;
let title;

function setup() {
	createCanvas(windowWidth, windowHeight);
	ellipseMode(RADIUS)
	strokeWeight(1);
	noFill();
	angleMode(DEGREES);

	title = createP("JIGGLY SINE FUNCTION");
	date = createP("30/11/2017")
	title.position(0, 0);
	date.position(width-105, 0)
}

function draw() {
	background(20);
	translate(width/2, height/2);
	rotate(a);
	let maxRad = 0.35*height;
	let minRad = 0.01*height;
	for(let rad = minRad; rad < maxRad; rad += 0.05*maxRad){
		let offset = rad;
		let move = sin(theta+offset)*maxRad/10;

    /*COLOR*/
		let r = map(move, -21, 21, 251, 236);
		let g = map(move, -21, 21, 255, 115);
		let b = map(move, -21, 21, 185, 87);
		stroke(r, g, b);
		// fill(r,g,b,20)

		ellipse(move, move, rad);
	}

	a+= 1;
	theta += 5;
}
