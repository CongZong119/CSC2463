// Variables to store sprite sheet and animation information
let spriteSheet;
let spriteWidth = 80;
let spriteHeight = 80;
let spriteFrames = 8; // number of frames in the animation
let currentFrame = 0;
let animationSpeed = 8; // number of frames per animation update

// Variables to store character position and movement
let xPos = 0;
let yPos = 0;
let xSpeed = 2;
let facingRight = true;

function preload() {
  // Load the sprite sheet image
  spriteSheet = loadImage("char1.png");
}

function setup() {
  createCanvas(800, 600);
  // Set the animation frame rate
  frameRate(30);
}

function draw() {
  background(255);
  
  // Update animation frame
  currentFrame = (currentFrame + 1) % spriteFrames;

  // Draw the sprite sheet
  if (facingRight) {
    image(spriteSheet, xPos, yPos, spriteWidth, spriteHeight, currentFrame * spriteWidth, 0, spriteWidth, spriteHeight);
  } else {
    push();
    translate(xPos + spriteWidth, yPos);
    scale(-1, 1);
    image(spriteSheet, 0, 0, spriteWidth, spriteHeight, currentFrame * spriteWidth, 0, spriteWidth, spriteHeight);
    pop();
  }

  // Update character position
  xPos += xSpeed;

  // Check for user input to change movement direction
  if (keyIsDown(LEFT_ARROW)) {
    facingRight = false;
    xSpeed = -2;
  } else if (keyIsDown(RIGHT_ARROW)) {
    facingRight = true;
    xSpeed = 2;
  }
}