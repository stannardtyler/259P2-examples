class Player {
  constructor() {
    this.x = 300;
    this.y = 300;
    this.r = 20;
    this.speed = 2;
  }

  show() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.r);
  }

  move() {
    if (keyIsPressed) {
      if (keyIsDown(LEFT_ARROW)) {
        this.x -= this.speed;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.x += this.speed;
      }
      if (keyIsDown(UP_ARROW)) {
        this.y -= this.speed;
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.y += this.speed;
      }
    }
  }

  isHiding() {
    if (mouseIsPressed) {
      console.log("hiding");
    }
  }
}
