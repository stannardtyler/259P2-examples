let words = [];
let dish;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  text(
    "Down Arrow to add Water\nUP Arrow to add Noodles\nShift Key to Delete last ingredient\n\nTry to make Water + Noodles",
    50,
    100
  );
  for (let i = 0; i < words.length; i++) {
    text(words, 100, 200);
  }

  if (words[0] == "water" && words[1] == "noodles") {
    dish = "noddles";
    youMade();
    console.log("noodles");
  }
}

function keyPressed() {
  if (keyIsDown(DOWN_ARROW)) {
    words.push("water");
  }

  if (keyIsDown(UP_ARROW)) {
    words.push("noodles");
  }

  if (keyIsDown(SHIFT)) {
    words.pop();
  }
  console.log(words);
}

function youMade() {
  text("you made " + dish, 100, 300);
}
