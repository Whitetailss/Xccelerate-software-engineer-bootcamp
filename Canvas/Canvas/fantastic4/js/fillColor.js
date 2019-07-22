class Filling extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    }

    onMouseDown(coord, event) {
        var imgData = contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height);
        var context = contextReal;
        var colorLayer = imgData;
        var startR = 255;
        var startG = 255;
        var startB = 255;
        var startA = 255;
        var fillColorR = rgbaColorR;
        var fillColorG = rgbaColorG;
        var fillColorB = rgbaColorB;

        // /////////////////////////////////////////////////////////////////////////////////////////////
        var pixelStack = [[coord[0], coord[1]]];

        while (pixelStack.length) {
            var newPos, x, y, pixelPos, reachLeft, reachRight;
            newPos = pixelStack.pop();
            x = newPos[0];
            y = newPos[1];
            var drawingBoundTop = 0;
            var canvasWidth = canvasReal.width;
            var canvasHeight = canvasReal.height;

            //set the starting paxel
            pixelPos = (y * canvasWidth + x) * 4;
            //paxel go to the top until it get block
            while (y-- >= drawingBoundTop && matchStartColor(pixelPos)) {
                pixelPos -= canvasWidth * 4;
            }
            pixelPos += canvasWidth * 4;
            ++y;
            reachLeft = false;
            reachRight = false;
            while (y++ < canvasHeight - 1 && matchStartColor(pixelPos)) {
                colorPixel(pixelPos);
                //check left
                if (x > 0) {
                    if (matchStartColor(pixelPos - 4)) {
                        if (!reachLeft) {
                            pixelStack.push([x - 1, y]);
                            reachLeft = true;
                        }
                    }
                    else if (reachLeft) {
                        reachLeft = false;
                    }
                }
                //check right
                if (x < canvasWidth - 1) {
                    if (matchStartColor(pixelPos + 4)) {
                        if (!reachRight) {
                            pixelStack.push([x + 1, y]);
                            reachRight = true;
                        }
                    }
                    else if (reachRight) {
                        reachRight = false;
                    }
                }
                //go to next under paxel
                pixelPos += canvasWidth * 4;
            }
        }
        // ////////////////////////////////////////////////////////////////////////////////////////////
        context.putImageData(colorLayer, 0, 0);
        // ///////////////////////////////////////////////////////////////////////////////////////////
        // check the pixal color is match or not
        function matchStartColor(pixelPos) {
            var r = colorLayer.data[pixelPos];
            var g = colorLayer.data[pixelPos + 1];
            var b = colorLayer.data[pixelPos + 2];
            var a = colorLayer.data[pixelPos + 3];

            // return (r == startR && g == startG && b == startB);
            if (r == startR && g == startG && b == startB && a == startA) {
                return true;
            }
            else {
                return false;
            }
        }
        //coloring the pixel
        function colorPixel(pixelPos) {
            colorLayer.data[pixelPos] = fillColorR;
            colorLayer.data[pixelPos + 1] = fillColorG;
            colorLayer.data[pixelPos + 2] = fillColorB;
            colorLayer.data[pixelPos + 3] = 255;
        }


    }
    onDragging() { }
    onMouseMove() { }
    onMouseUp() {
        cPush();
    }
    onMouseLeave() { }
    onMouseEnter() { }


}