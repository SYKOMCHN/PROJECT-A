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
    
   

}