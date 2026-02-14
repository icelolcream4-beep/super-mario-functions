// Player position
let x = 100;
let y = 300;

// Jump state
let jumping = false;
let jumpFrame = 0;

function setup() {
  createCanvas(600, 400);
  r = 255
  g = 60
  b = 60
}

function draw() {
  background(120, 190, 255); // sky
  fill(80,80,80);
  rect(200,270,100,10)
  fill(20,0,200)
  rect(100,270,100,10)

  // ground
  fill(60, 200, 90);
  rect(0, 330, width, 70);
  

  updateJump();

  drawPlayer();


if (keyIsDown(65) === true) x = x - 10;
if (keyIsDown(68) === true) x = x + 10;
if (x >= 620) x = -30;
if (x <= -35) x = 618;
circle(mouseX,mouseY,10)
if(mouseX - x == [0,10] && mouseY - y == [0,10]) x = 10;
}
// ==================================================
// JUMP FUNCTION
// ==================== ==============================
function jump() {
  if (!jumping) {
    jumping = true;
    jumpFrame = 0;
  }
}

function keyPressed() {
  if (key === "w") jump();
}
// ==================================================
// 🧠 JUMP LOGIC
// ==================================================
function updateJump() {
  if (!jumping) return;

  jumpFrame++;

  let t = jumpFrame / 30;
  let height = sin(t * PI) * 120;
  y = 300 - height;

  if (jumpFrame >= 30) {
    jumping = false;
    y = 300;
  }
}

// ==================================================
// 🎨 DRAW PLAYER
// ==================================================
function drawPlayer() {
  fill(x+10, x/5, x/3);
  rect(x, y, 40, 40);
}