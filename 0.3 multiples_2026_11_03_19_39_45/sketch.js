let colors = [
  [255,150,190],
  [180,150,255],
  [255,210,120],
  [130,210,190],
  [140,190,255],
];

function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(255,240,250);

  for(let y = 40; y < height; y+=60) {
    for(let x = 40; x < width; x+=60) {
      let color= random(colors);
        fill (color);
      circle(x,y,40);
    }
  }
  noLoop();
}

function mousePressed() {
  redraw();
}