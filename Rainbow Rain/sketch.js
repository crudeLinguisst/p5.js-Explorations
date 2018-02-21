let rain = [];
let gravity;
let wind;
function setup() {
	createCanvas(windowWidth, windowHeight);
	gravity = createVector(0, 0.1);
	let title = createP("RAINBOW RAIN");
	let date = createP("25/12/2017")
	title.position(0, 0);
	date.position(width-105, 0)
}

function draw() {
	background(0, 100);
	rain.push(new Drop());
	for(drop of rain){
		drop.summon();
		drop.applyForce(gravity);
		drop.update();
	}

	for(let i = rain.length-1; i >= 0; i--){
		if(rain[i].offScreen()){
			rain[i].burst();
		}
		if(rain[i].a <= 0){
			rain.splice(i,1);
		}
	}
}
