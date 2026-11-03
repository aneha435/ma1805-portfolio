let x= 50;
let y= 200;
let speed= 3;
let ballSize= 60;

function setup() {
  createCanvas(600,400);
}

function draw() {
  background(220, 235, 255);

  fill(0);
  textSize(24);
  text("Moving Ball!", 220, 50);
  


fill(255,120,170);
noStroke();
ellipse(x, y, ballSize, ballSize);

x = x + speed;

if (x > width - ballSize / 2 || x < ballSize / 2) {
  speed = speed * -1;
}
}