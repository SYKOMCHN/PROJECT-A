
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



    
}


function windowResized() {
    setup(); // recalculate canvas when screen resizes
    settingScreen();
}

function draw(){
    settingScreen();
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
    
    //fill('red');
    //noStroke();
    //rect (55 , 30 , settingW / 16 ,settingH / 12 , 20);

    textSize(32);
    textAlign(CENTER, CENTER);
    text('All Your Base Are Belong TO Us', settingW / 2 , settingH / 2);
   

}

