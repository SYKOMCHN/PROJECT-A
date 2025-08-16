let baseWidth = 800;
let baseHeight = 600;
let canvasWidth, canvasHeight;
let settingPagePop = false;
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

    push();

    if (settingPagePop == true){
    settingsPage();
    }

    pop();
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



function settingsPage(){ //modify the scaling.
    let settingButtonMargin = canvasWidth / 20 ; //*0.05
    let settingBoxX = settingButtonMargin;
    let settingBoxY = settingButtonMargin;
    let settingBoxW = canvasWidth - 2 * settingButtonMargin;
    let settingBoxH = canvasHeight - 2 * settingButtonMargin;

    fill(255);
    rect(settingBoxX, settingBoxY, settingBoxW, settingBoxH, canvasWidth / 50); //*0.02

    fill(0);
    textSize(canvasHeight / 15);
    textAlign(CENTER,CENTER);
    text('ManCine', canvasWidth / 2, canvasHeight / 2);

    closeXButton();

    mousePressed();

    
}

// standalone files in the future
function infosPage(){}
function levelsPage(){}






function closeXButton(){

    let closeBtnX = canvasWidth / 1.15; //*0115 
    let closeBtnY = canvasWidth / 16;
    let closeBtnW = canvasWidth / 15;
    let closeBtnH = canvasHeight / 15;
    
    fill('red');
    rect(closeBtnX,closeBtnY,closeBtnW,closeBtnH, canvasWidth / 75);
    return {closeBtnX,closeBtnY,closeBtnW,closeBtnH}; //makes these global

    
}

function settingButton(){
    settingPagePop = true;
}

function mousePressed(){

    if(settingPagePop == true){

        let { closeBtnX,closeBtnY,closeBtnW,closeBtnH} = closeXButton();

        if(
            mouseX > closeBtnX &&
            mouseX < closeBtnX + closeBtnW &&
            mouseY > closeBtnY &&
            mouseY < closeBtnY + closeBtnH 
            //&& mouse pressed function
        ) 
        {
            settingPagePop = false;
        }
    }

    
}

function windowResized(){
    canvasFourThreeRatio();

   //settingsPage(); //optional?
}
