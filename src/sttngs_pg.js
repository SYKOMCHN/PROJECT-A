

function settingsPage(){ //modify the scaling.
    let settingButtonMargin = canvasWidth / 20 ; //*0.05
    let settingBoxX = settingButtonMargin;
    let settingBoxY = settingButtonMargin;
    let settingBoxW = canvasWidth - 2 * settingButtonMargin;
    let settingBoxH = canvasHeight - 2 * settingButtonMargin;

    
  
    image(settingBackground,settingBoxX, settingBoxY, settingBoxW, settingBoxH);
    fill(0,0,0,1);
    rect(0 , 0, canvasWidth, canvasHeight);
    
    fill(0);
    textSize(canvasHeight / 15);
    textAlign(CENTER,CENTER);
    text('Goober Concept', canvasWidth / 2, canvasHeight / 2);

    closeXButton();
    
}