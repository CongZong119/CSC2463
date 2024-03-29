let paintcolor = 255;
let synth, reverb, delay;
let notes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
let soundPlaying = false;
let clearButton;

function setup() {
  createCanvas(1400, 700);
  background('white');
  slider = createSlider(1, 20, 10);
  synth = new Tone.Synth().toDestination();
}

function draw() {
  colorPalette();
  noStroke();
  if(mouseIsPressed){
    if(mouseX <= 40 && mouseY <= 400){
      selectColor();   
    }
    else{
      stroke(paintcolor);
      strokeWeight(slider.value());
      line(pmouseX,pmouseY, mouseX, mouseY);
    }
  }
  
}

function selectColor(){
  if(mouseY <= 30){
    paintcolor = color(255,0,0);
    playSound(0);
  }
  else if(mouseY <= 60){
    paintcolor = color(255,165,0);
    playSound(1);
  }
  else if(mouseY <= 90){
    paintcolor = color(255,255,0);
    playSound(2);
  }
  else if(mouseY <= 120){
    paintcolor = color(0,255,0);
    playSound(3);
  }
  else if(mouseY <= 150){
    paintcolor = color(0,255,255);
    playSound(4);
  }
  else if(mouseY <= 180){
    paintcolor = color(0,0,255);
    playSound(5);
  }
  else if(mouseY <= 210){
    paintcolor = color(255,0,255);
    playSound(6);
  }
  else if(mouseY <= 240){
    paintcolor = color(150,75,0);
    playSound(7);
  }
  else if(mouseY <= 270){
    paintcolor = color(255,255,255);;
    playSound(0);
  }
  else if(mouseY <= 400){
    paintcolor = color(0,0,0);
    playSound(1);
  }
}

function playSound(index) {
  if (!soundPlaying) {
    synth.triggerAttackRelease(notes[index], '8n');
    soundPlaying = true;
    setTimeout(() => {soundPlaying = false}, 500);
  }
}

function colorPalette(){
  stroke(255,255,255);
  strokeWeight(2);
  fill("red");
  rect(0,0,30,30);
  fill("orange");
  rect(0,30,30,30);
  fill("yellow");
  rect(0,60,30,30);
  fill("green");
  rect(0,90,30,30);
  fill("cyan");
  rect(0,120,30,30);
  fill("blue");
  rect(0,150,30,30);
  fill("magenta");
  rect(0,180,30,30);
  fill("brown");
  rect(0,210,30,30);
  fill("white");
  rect(0,240,30,30);
  fill("black");
  rect(0,270,30,30);
}