class DrawingCurve extends PaintFunction{
    constructor(contextReal,contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;   
        this.cp1x;
        this.cp1y;
        this.cp2x;
        this.cp2y;
        this.x; 
        this.y;
        this.startX;
        this.startY
        
        
        this.counter = 0
    }

    onMouseDown(coord,event){

        if(this.counter === 0){
            console.log(this.counter)
        this.contextDraft.strokeStyle = rgbaColor;
        this.contextDraft.beginPath();
        this.contextDraft.moveTo(coord[0],coord[1]); 
        this.startX = coord[0];
        this.startY = coord [1];
    

        this.counter = this.counter + 1
        } 
        
        else if (this.counter === 1) 
        {
            console.log(this.counter)

            this.contextDraft.fillStyle = rgbaColor;
            this.x = coord[0];
            this.y = coord[1];

            // console.log([this.cp1x],[this.cp1y])

            this.counter = this.counter + 1
        }
    
        else if (this.counter === 2) {
            console.log(this.counter)

        this.contextDraft.fillStyle = rgbaColor;
        this.cp1x = coord[0];
        this.cp1y = coord[1];

        this.counter = this.counter + 1
        }

        else if (this.counter === 3){
            console.log(this.counter)


        this.contextDraft.fillStyle = rgbaColor;
        this.cp2x = coord[0];
        this.cp2y = coord[1];
        this.counter = this.counter +1;


    }

}

//     onDragging(coord,event){
//         this.contextDraft.fillStyle = "#f44";
//         this.contextDraft.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y);
// }

        onMouseUp(coord){

            if(this.counter===4){
            this.contextDraft.stroke();  

            this.contextReal.strokeStyle = rgbaColor
            this.contextReal.beginPath ()
            this.contextReal.moveTo (this.startX, this.startY);
            this.contextReal.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y);
            this.contextReal.stroke();

            this.counter = 0;
            cPush();
            }
         
        }
    }

