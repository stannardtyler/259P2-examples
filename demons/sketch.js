//https://editor.p5js.org/andrea270872/sketches/zh5SG0bVH
//helped with chase code

let player = [];
let bushes = [];
let demon;
let isHiding = false;

function setup() {
  createCanvas(384, 320);

  //spawns players
  let p = new PlayerB(100, 100, 10, 10, 2);
  player.push(p);

  demon = new Demon();

  //spawns bushes
  for (let i = 0; i < 5; i++) {
    let b = new Bush();
    bushes.push(b);
  }
}

function draw() {
  background(220);

  //displays player
  player[0].display();
  player[0].death(demon);

  //displays the demon
  demon.display();
  demon.move(player[0]);

  isHiding = false; //assign false if not hiding

  //displays the bushes and checks if the player is hiding behind a bush
  for (let i = 0; i < bushes.length; i++) {
    if (player[0].hide(bushes[i])) {
      isHiding = true;
    }

    bushes[i].display();
  }

  //controls the player
  if (keyIsDown(LEFT_ARROW)) {
    player[0].move("left");
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player[0].move("right");
  }
  if (keyIsDown(UP_ARROW)) {
    player[0].move("up");
  }
  if (keyIsDown(DOWN_ARROW)) {
    player[0].move("down");
  }
}

//player class
class PlayerB {
  constructor(tempX, tempY, tempW, tempH, tempS) {
    this.x = tempX;
    this.y = tempY;
    this.width = tempW;
    this.height = tempH;
    this.speed = tempS;
    this.color = 255;
  }

  //display function
  display() {
    fill(0, 0, this.color);
    rect(this.x, this.y, this.width, this.height);
  }

  //hide function
  hide(object) {
    let d = dist(this.x, this.y, object.x, object.y);

    if (d < object.s / 2) {
      return true;
    } else {
      return false;
    }
  }

  death(object) {
    let d = dist(this.x, this.y, object.x, object.y);

    // console.log(isHiding);

    if (d < object.s / 2 && isHiding == false) {
      console.log("dead");
    } else {
    }
  }

  move(direction) {
    switch (direction) {
      case "up":
        this.y -= this.speed;
        break;
      case "down":
        this.y += this.speed;
        break;
      case "left":
        this.x -= this.speed;
        break;
      case "right":
        this.x += this.speed;
        break;
    }
  }
}

class Bush {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.s = 25;
  }

  display() {
    fill(0, 255, 0);
    rectMode(CENTER);
    rect(this.x, this.y, this.s);
  }
}

class Demon {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.s = 30;
    this.randomAngle = null; // Store the random angle for movement
  }

  display() {
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.s);
  }

  move(object) {
    let d = dist(this.x, this.y, object.x, object.y);

    if (isHiding == false) {
      this.randomAngle = null; // Reset the random direction
      if (d < this.s / 2) {
        console.log("caught up");
      } else {
        let vx = (object.x - this.x) / d;
        let vy = (object.y - this.y) / d;
        this.x = this.x + min(2.5, vx);
        this.y = this.y + min(2.5, vy);
      }
    } else {
      // If the player is hiding, move in a single random direction
      if (this.randomAngle === null) {
        // Choose a random direction once
        this.randomAngle = random(TWO_PI); // Random angle between 0 and 2π
      }

      // Move in the chosen random direction
      let speed = 1; // Adjust speed as needed
      this.x += cos(this.randomAngle) * speed;
      this.y += sin(this.randomAngle) * speed;

      // If the demon goes off-screen, it stays off-screen
      if (
        this.x < -50 ||
        this.x > width + 50 ||
        this.y < -50 ||
        this.y > height + 50
      ) {
        console.log("demon moved off-screen");
      }
    }
  }
}
