
function levelsPage(){

    console.log("Levels Page Created");
    let levelButtonMargin = canvasWidth / 20 ; //*0.05
    let levelBoxX = levelButtonMargin;
    let levelBoxY = levelButtonMargin;
    let levelBoxW = canvasWidth - 2 * levelButtonMargin;
    let levelBoxH = canvasHeight - 2 * levelButtonMargin;

    image(levelBackground,levelBoxX,levelBoxY,levelBoxW,levelBoxH);
    fill(0,0,0,1);
    rect(0 , 0, canvasWidth, canvasHeight);

    fill(0);
    textSize(canvasHeight / 15);
    textAlign(CENTER,CENTER);
    text('Binky Bonky', canvasWidth / 2, canvasHeight / 2);

    closeXButton();
}

