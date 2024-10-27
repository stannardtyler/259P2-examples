let player;
let brushs = [];

function setup() {
  createCanvas(600, 600);

  player = new Player();

  for (let i = 0; i < 5; i++) {
    let b = new Brush();
    brushs.push(b);
  }
}

function draw() {
  background(0);

  player.show();
  player.move();
  player.isHiding();

  for (let i = 0; i < brushs.length; i++) {
    brushs[i].show();
  }
}

class Brush {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = 40;
  }

  show() {
    fill(200, 200, 50);
    rectMode(CENTER);
    rect(this.x, this.y, this.size);
  }
}
