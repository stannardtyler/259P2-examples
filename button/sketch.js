let button;
let button2;
let bg;

function stateOne() {
  bg = color(0, 0, 0);
}

function stateTwo() {
  bg = color(255, 255, 255);
}

function setup() {
  createCanvas(400, 400);
  noStroke();
  bg = color(220, 220, 220);

  button = new Button(100, 300, 50, 100, stateOne);

  button2 = new Button(300, 300, 50, 50, stateTwo);
}

function draw() {
  background(bg);

  button.show();
  button.rollover(mouseX, mouseY);

  button2.show();
  button2.rollover(mouseX, mouseY);
}

function mousePressed() {
  if (button.rollover(mouseX, mouseY)) {
    button.buttonFunction();
  }

  if (button2.rollover(mouseX, mouseY)) {
    button2.buttonFunction();
  }
}

class Button {
  constructor(tempX, tempY, tempW, tempH, tempFunction) {
    this.x = tempX;
    this.y = tempY;
    this.w = tempW;
    this.h = tempH;
    this.color = 0;
    this.buttonFunction = tempFunction;
  }

  rollover(px, py) {
    //checks the vertical and horizontal edges independently
    if (
      px > this.x - this.w / 2 &&
      px < this.x + this.w / 2 &&
      py > this.y - this.h / 2 &&
      py < this.y + this.h / 2
    ) {
      this.color = 255;
      return true;
    } else {
      this.color = 0;
      return false;
    }
  }

  show() {
    fill(this.color);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
}
