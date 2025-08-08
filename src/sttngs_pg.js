function settingScreen(){

    let settingW , settingH;
    settingW = windowWidth;
    settingH = settingW * 3 / 4;
    if(settingH > windowHeight) {
        settingH = windowHeight;
        settingW = settingH * 4 / 3;
    }

    let settingScale(){

    fill('white');
    noStroke();
    rect( 20, 20,settingW - 40,settingH - 40, 20);
    fill('black');
    //fill('red');
    //noStroke();
    //rect ( (settingW / 1.15) + 55 , 30 , settingW / 16 ,settingH / 12 , settingW * settingH);

    textSize(32);
    textAlign(CENTER, CENTER);
    text('All Your Base Are Belong TO Us', settingW / 2 , settingH / 2);
    }

}
