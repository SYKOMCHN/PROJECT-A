
let baseWidth = 800;
let baseHeight = 600;
let canvasWidth, canvasHeight;
let scaleSize;

function setup () {
   canvasFourThreeRatio();
}

function canvasFourThreeRatio(){
     // calculate 4:3 aspect ratio that fits within the window
        canvasWidth = windowWidth,
        canvasHeight = canvasWidth * (baseHeight / baseWidth);
    
    if (canvasHeight> windowHeight) {
        canvasHeight = windowHeight;
        canvasWidth  = canvasHeight * (baseWidth / baseHeight);
    }

    createCanvas(canvasWidth,canvasHeight).position((windowWidth - canvasWidth) / 2, (windowHeight - canvasHeight) / 2);;
}


function draw(){
    background(255);
}

function windowResized(){
    canvasFourThreeRatio();
}
/* 
function setup() {
    // calculate 4:3 aspect ratio that fits within the window
    let w = windowWidth,
        h = w * 3 / 4;
    if (h > windowHeight) {
        h = windowHeight;
        w = h * 4 / 3;
    }
    createCanvas(w, h).position((windowWidth - w) / 2, (windowHeight - h) / 2);
    background(200);
    textSize(32);
    textAlign(CENTER, CENTER);
    text('Cinema', width / 2, height / 2);



    settingScreen();
}


function windowResized() {
    setup(); // recalculate canvas when screen resizes
    
}



function settingScreen(){
    let settingW , settingH;
    settingW = windowWidth;
    settingH = settingW * 3 / 4;
    if(settingH > windowHeight) {
        settingH = windowHeight;
        settingW = settingH * 4 / 3;
    }


    fill('white');
    noStroke();
    rect( 20, 20,settingW - 40,settingH - 40, 20);
    fill('black');
    
    let fontSize = 32 * (settingW/settingH);
    textSize(fontSize);
    textAlign(CENTER, CENTER);
    text('All Your Base Are Belong TO Us', settingW / 2 , settingH / 2);
   

}

*/