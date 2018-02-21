
class Drop {

  constructor(){
    let x = random(width);
    let y = random(-100, -30)
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.w = random(3, 7);
    this.h = random(15, 35);
    this.a = 255;

    this.r = random(0, 246);
    this.g = random(94, 205);
    this.b = random(172, 225);
  }

  summon(){
    noStroke();
    rectMode(CENTER)
    fill(this.r, this.g, this.b, this.a);
    // stroke(255);
    // strokeWeight(this.r);
    ellipse(this.pos.x, this.pos.y, this.w, this.h);
  }

  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  applyForce(force){
    this.acc.add(force);
  }

  offScreen(){
    return(this.pos.y > height-(2*this.h) )
  }

  burst(){
    this.a -= 7;
    this.h += 25;
    this.w += 10;
  }

}
