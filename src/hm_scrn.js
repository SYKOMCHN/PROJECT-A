let baseWidth = 800;
let baseHeight = 600;
let canvasWidth, canvasHeight;
let settingPagePop = false;
let levelPagePop = false;
let creditsPagePop = false;
let backgroundImage, settingBackground, creditBackground, levelBackground;
let startBtn, settingBtn, creditBtn;

function preload(){
    backgroundImage = loadImage("assets/test_images/test_sprite_bg2.png");
    settingBackground = loadImage("assets/test_images/test_sprite_bg3.png");
    creditBackground = loadImage("assets/test_images/test_sprite_bg4.png");
    levelBackground = loadImage("assets/test_images/test_sprite_bg5.png");
}

function setup () { // functions that want to be setup and loaded first will go here
   canvasFourThreeRatio();  

}


function draw(){ //functions and designs will be placed here
    background(255);
    image(backgroundImage, 0 , 0, canvasWidth, canvasHeight);

    //buttons
    startBtn = new Button(canvasWidth / 2 , canvasHeight / 1.5 , canvasWidth / 10 , canvasHeight / 15, " test") ;
    settingBtn = new Button ( canvasWidth / 1.25, canvasHeight / 1.10 , canvasWidth / 10, canvasHeight / 15, "setting");
    //creditBtn = new Button ( canvasWidth / 2, canvasHeight / 1.10 . canvasWidth / 10 , canvasHeight / 15, "credit");
 
    startBtn.display();
    settingBtn.display();
   // creditBtn.display();

    

    push();
    if (settingPagePop == true){
        push();
        settingsPage();
    }
    if (creditsPagePop == true){ 
        push();
        creditsPage();
    }
    if (levelPagePop == true){
        levelsPage();
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
    
function closeXButton(){
    //escape buttom
    let closeBtnX = canvasWidth / 1.15; 
    let closeBtnY = canvasWidth / 16;
    let closeBtnW = canvasWidth / 15;
    let closeBtnH = canvasHeight / 15;
    
    fill('red');
    rect(closeBtnX,closeBtnY,closeBtnW,closeBtnH, canvasWidth / 75);
    return {closeBtnX,closeBtnY,closeBtnW,closeBtnH}; //makes these global
  
}

function settingButton(){
    settingPagePop = true;
    console.log("Settings Page Button Clicked!");
}

function creditButton(){
    creditsPagePop = true;
    console.log("Credits Page Button Clicked!");
}

function levelButton(){
    levelPagePop = true;
    console.log("Credits Page Button Clicked!");
}



function mousePressed(){
    console.log("On MousePressed");
  
    if(startBtn.isClicked()){
        console.log("Button clicked!");
    }


    let { closeBtnX,closeBtnY,closeBtnW,closeBtnH} = closeXButton(); 

    if(settingPagePop || creditsPagePop || levelPagePop){
        if(
            mouseX > closeBtnX &&
            mouseX < closeBtnX + closeBtnW &&
            mouseY > closeBtnY &&
            mouseY < closeBtnY + closeBtnH 
                
          ){
                if (settingPagePop == true){settingPagePop = false;}
                if (creditsPagePop == true) {creditsPagePop = false;}
                if (levelPagePop == true) {levelPagePop = false;}
            } 
    }
}


function windowResized(){
    canvasFourThreeRatio();

    
}
