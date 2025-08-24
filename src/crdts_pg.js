function creditsPage(){
    console.log("Credits Page Created");
    let creditButtonMargin = canvasWidth / 20 ; //*0.05
    let creditBoxX = creditButtonMargin;
    let creditBoxY = creditButtonMargin;
    let creditBoxW = canvasWidth - 2 * creditButtonMargin;
    let creditBoxH = canvasHeight - 2 * creditButtonMargin;

    image(creditBackground, creditBoxX,creditBoxY,creditBoxW,creditBoxH);
    fill(0,0,0,1);
    rect(0 , 0, canvasWidth, canvasHeight);

    fill(0);
    textSize(canvasHeight / 15);
    textAlign(CENTER,CENTER);
    text('Mickey D', canvasWidth / 2, canvasHeight / 2);

    closeXButton();

}