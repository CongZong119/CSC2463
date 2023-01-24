//Example 1
var pic1 = function(p){
p.setup=function() {
  p.createCanvas(200, 100);
};

p.draw = function() {
  p.background(0,280,0);
  p.ellipse(50,50,80,80);
  p.rect(110,10,80,80);
 };
};
var myp5 = new p5(pic1,'c1');

//Example 2
var pic2 = function(p){
  p.setup=function() {
  p.createCanvas(400, 400);
};

p.draw = function() {
  p.background(250);
  p.noStroke();
  p.fill('rgba(251, 106, 98, 0.57)'); 
  p.ellipse(200,150,120,120);
  p.fill('rgba(98, 118, 251, 0.57)');  
  p.ellipse(160,210,120,120);  
  p.fill ('rgba(75, 253, 97, 0.57)');
  p.ellipse(240,210,120,120);
};
};
var myp5 = new p5(pic2,'c2');

//Example 3
var pic3 = function(p){
p.setup=function() {
  p.createCanvas(200, 100);
};

p.draw = function() {
  p.background('black');
  p.fill('yellow');
  p.arc(52,50,80,80,-90.4,2.5,PIE);
  p.fill('rgb(238,65,65)');
  p.circle(150, 48, 80);
  p.noStroke();
  p.rect(110, 50, 80, 40);
  p.fill('white');
  p.circle(130, 48, 25);
  p.circle(170, 48, 25);
  p.fill('blue');
  p.circle(130, 48, 15);
  p.circle(170, 48, 15);
};
};
var myp5 = new p5(pic3,'c3');
//Example 4
function setup() {
  createCanvas(310, 310);
}

function draw() {
  background('rgb(29,29,118)');
  circle(155.7, 162, 141);
  fill('green');
  stroke('white');
  strokeWeight(3);
  push();
  translate(width * 0.8, height * 0.5);
  rotate(2.2);
  fill('red');
  stroke('white');
  strokeWeight(3);
  star(60, 70, 27.5, 70, 5);
  pop(); 
}
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}