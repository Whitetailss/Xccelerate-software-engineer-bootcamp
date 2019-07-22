class Flower extends PaintFunction {
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.flowerImage = new Image();
    }
        
    onMouseDown(coord){}
    onDragging(coord,e){
        this.drawFlower(e);
    }
    onMouseMove(coord){}
    onMouseUp(){
        cPush();
    }
    onMouseLeave(){}
    onMouseEnter(){}
    
    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    drawFlower(e) {
        this.flowerImage.src = `./assets/img/${this.getRandomInt(1, 4)}.png`;
        contextReal.save();
        contextReal.translate(e.offsetX, e.offsetY);
        contextReal.beginPath();
        contextReal.rotate(Math.PI / 180 * this.getRandomInt(0, 360));
        contextReal.scale(this.getRandomInt(2, 3) / 5, this.getRandomInt(2, 3) / 5);
        contextReal.drawImage(this.flowerImage,0,0,70,70);
        contextReal.restore();
    }
}
