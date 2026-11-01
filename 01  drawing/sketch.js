function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200,230,255);
  

noStroke();
fill(130,80,40);
rect(225,370,50,80);

fill(30,150,70);
triangle(250,70,140,230,360,230);
triangle(250,140,110,310,390,310);
triangle(250,210,80,400,420,400);

fill(255,220,0);
ellipse(250,65,35,35);

fill(255,220,120);
ellipse(250,260,100,100);

fill(0);
ellipse(230,245,10,10);
ellipse(270,245,10,10);

noFill();
stroke(0);
strokeWeight(3);
arc(250,265,45,30,0,PI);

noStroke();
fill(255,0,0);
ellipse(190,200,20,20);
ellipse(310,340,20,20);

fill(255,220,0);
ellipse(310,210,20,20);
ellipse(170,350,20,20);

fill(255,100,200);
ellipse(250,350,20,20);
}
