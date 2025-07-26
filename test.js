let x = 200; // initial x position
let y = 200; // initial y position
let boxSize = 50;
let speed = 5;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(220);

    // smooth movement
    if (keyIsDown(65) || keyIsDown(97)) { // if a key
        x -= speed;
    }
    if (keyIsDown(68) || keyIsDown(100)) { // if d key
        x += speed;
    }

    fill(255, 0, 0);                // make red square
    rect(x, y, boxSize, boxSize);
}

