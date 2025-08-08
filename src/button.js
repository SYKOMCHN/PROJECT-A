
class Button {
    constructor(x, y, w, h, label) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.label = label;
    }

    display() {
        push();
        imageMode(CENTER);
        if (this.img) {
            image(this.img, this.x, this.y, this.w, this.h);
        } else {
            // make rectangle if no image
            rectMode(CENTER);
                if (this.isHovered()) {
                    fill(180, 220, 255); // hovered color
                } else {
                    fill(100); // default color
                }
            noStroke();
            rect(this.x, this.y, this.w, this.h, 10);
        }

        // label
        fill(0);
        text(this.label, this.x, this.y);
        pop();
    }

    isHovered() {
        return (
            mouseX > this.x - this.w / 2 &&
            mouseX < this.x + this.w / 2 &&
            mouseY > this.y - this.h / 2 &&
            mouseY < this.y + this.h / 2
        );
    }

    isClicked() {
        return this.isHovered() && mouseIsPressed;
    }
}
