let button;

// let button2;

function setup() {
  createCanvas(400, 400);

  button = new Button(200, 200, 50, 100);

  // button2 = new Button(100, 300, 50, 50);
}

function draw() {
  background(220);

  button.show();
  button.rollover(mouseX, mouseY);

  // button2.show();
  // button2.rollover(mouseX, mouseY);
}

class Button {
  constructor(tempX, tempY, tempW, tempH) {
    this.x = tempX;
    this.y = tempY;
    this.w = tempW;
    this.h = tempH;
    this.color = 0;
  }

  rollover(px, py) {
    let d = dist(this.x, this.y, px, py);

    if (
      px > this.x - this.w / 2 &&
      px < this.x + this.w / 2 &&
      py > this.y - this.h / 2 &&
      py < this.y + this.h / 2
    ) {
      this.color = 255;
    } else {
      this.color = 0;
    }
  }

  show() {
    fill(this.color);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
}
