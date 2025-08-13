let baseWidth = 800;
let baseHeight = 600;
let canvasWidth, canvasHeight;
let scaleSize;
let settingPagePop = true;
let backgroundImage;

function preload(){
    backgroundImage = loadImage("assets/test_images/test_sprite_bg.png");
}

function setup () { // functions that want to be setup and loaded first will go here
   canvasFourThreeRatio();  
    
}


function draw(){ //functions and designs will be placed here
    background(255);
    image(backgroundImage, 0 , 0, canvasWidth, canvasHeight);

    if (settingPagePop == false){
    settingsPage();
    }
}

function canvasFourThreeRatio(){
     // calculate 4:3 aspect ratio that fits within the window
        canvasWidth = windowWidth,
        canvasHeight = canvasWidth * (baseHeight / baseWidth);
    
    if (canvasHeight> windowHeight) {
        canvasHeight = windowHeight;
        canvasWidth  = canvasHeight * (baseWidth / baseHeight);
    }

    createCanvas(canvasWidth,canvasHeight).position((windowWidth - canvasWidth) / 2, (windowHeight - canvasHeight) / 2); 
}



function settingsPage(){
   
    fill(100);
    rect(10, 10, canvasWidth - 20, canvasHeight - 20);
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text('ManCine', width / 2, height / 2);

    scaleSize = canvasWidth / baseWidth;
    push(); //not sure yet
    scale(scaleSize);
    fill(200);
    rect(20, 20, 200 , 200);
    textSize(12);
    fill(0);
    textAlign(CENTER, CENTER);
    text('Hello here', 200 / 2 , 200 / 2);
    pop();
}

function windowResized(){
    canvasFourThreeRatio();

    settingsPage();
}