let xPos = 0;
let yPos = 0;
let xSpeed = 2;
let facingRight = true;
let spriteSheet;
let spriteFrames = 8; 
let currentFrame = 0;
let animationSpeed = 8; 
let spriteWidth = 80;
let spriteHeight = 80;


function preload() {
  spriteSheet = loadImage("Assets/chara1.png");
}

function setup() {
  createCanvas(1500, 600);
  frameRate(30);
}

function draw() {
  background(255);
  currentFrame = (currentFrame + 1) % spriteFrames;
  if (facingRight) {
    image(spriteSheet, xPos, yPos, spriteWidth, spriteHeight, currentFrame * spriteWidth, 0, spriteWidth, spriteHeight);
  } else {
    push();
    translate(xPos + spriteWidth, yPos);
    scale(-1, 1);
    image(spriteSheet, 0, 0, spriteWidth, spriteHeight, currentFrame * spriteWidth, 0, spriteWidth, spriteHeight);
    pop();
  }
  xPos += xSpeed;
  if (keyIsDown(LEFT_ARROW)) {
    facingRight = false;
    xSpeed = -2;
  } else if (keyIsDown(RIGHT_ARROW)) {
    facingRight = true;
    xSpeed = 2;
  }
}
