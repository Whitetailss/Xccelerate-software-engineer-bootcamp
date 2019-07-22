//cody and paste global var
var imgData3;

class Copying extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;

    }

    onMouseDown(coord, event) {
        this.origX = coord[0];
        this.origY = coord[1];
    }
    onDragging(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.border(this.origX, this.origY, coord[0], coord[1]);
    }

    onMouseMove() { }
    onMouseUp(coord, event) {
        imgData3 = this.contextReal.getImageData(this.origX, this.origY, coord[0] - this.origX, coord[1] - this.origY);
    }
    onMouseLeave() { }
    onMouseEnter() { }

    border(a, b, c, d) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(a, b);
        this.contextDraft.lineTo(c, b);
        this.contextDraft.moveTo(a, b);
        this.contextDraft.lineTo(a, d);
        this.contextDraft.moveTo(c, b);
        this.contextDraft.lineTo(c, d);
        this.contextDraft.moveTo(a, d);
        this.contextDraft.lineTo(c, d);
        this.contextDraft.stroke();
    }


}


class Pasting extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;

    }

    onMouseDown(coord, event) {
        this.origX = coord[0];
        this.origY = coord[1];
        this.contextDraft.putImageData(imgData3, coord[0], coord[1]);

    }
    onDragging(coord, event) {
        this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
        this.contextDraft.putImageData(imgData3, coord[0], coord[1]);

    }

    onMouseMove() { }
    onMouseUp(coord, event) {
        this.contextReal.putImageData(imgData3, coord[0], coord[1]);
        cPush();
    }
    onMouseLeave() { }
    onMouseEnter() { }

}
