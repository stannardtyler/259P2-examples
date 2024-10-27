let fighter1;
let fighter2;

function setup() {
  createCanvas(400, 400);

  fighter1 = new Fighter1();
  fighter2 = new Fighter2();
}

function draw() {
  background(220);

  fighter1.show();
  fighter1.move();

  fighter2.show();
  fighter2.move();

  fighter1.punch(fighter2);
}

class Fighter1 {
  constructor() {
    this.x = 100;
    this.y = 300;
    this.s = 50;
  }

  show() {
    rectMode(CENTER);
    rect(this.x, this.y, this.s);
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x = this.x - 1;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.x = this.x + 1;
    }
  }
  //add collision for punch
  punch(object) {
    let d = dist(this.x + 40, this.y, object.x, object.y);

    //console.log(d); //helps with measuring distance

    if (mouseIsPressed) {
      rect(this.x + 40, this.y, 25);
      if (d < 40 && d > 10) {
        console.log("hit");
      }
    }
  }
}

class Fighter2 {
  constructor() {
    this.x = 300;
    this.y = 300;
    this.s = 50;
  }

  show() {
    rectMode(CENTER);
    rect(this.x, this.y, this.s);
  }

  move() {
    if (keyIsDown(65)) {
      this.x = this.x - 1;
    }

    if (keyIsDown(68)) {
      this.x = this.x + 1;
    }
  }
  //add collision for punch
  punch(object) {
    console.log(d);

    let d = dist(this.x + 40, this.y, object.x, object.y);

    if (mouseIsPressed) {
      rect(this.x + 40, this.y, 25);
    }

    if (d < 25 / 2) {
    }
  }
}
