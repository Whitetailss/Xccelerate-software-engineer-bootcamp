class Circle extends PaintFunction{
    constructor (contextReal,contextDraft,origX,origY){
        super();
        this.contextReal= contextReal;
        this.contextDraft=contextDraft;
        this.origX=origX;
        this.origY=origY;
       
    }

    

    onMouseDown(coord, event){
        this.origX = coord[0] 
        this.origY = coord[1]
        this.radius=0
        
    }
    onDragging(coord,event)
    {
        this.finalX= this.origX - coord[0]
        this.finalY= this.origY - coord[1]
        this.radius=Math.sqrt(this.finalX*this.finalX + this.finalY* this.finalY)
    
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)
        this.contextDraft.beginPath();
        this.contextDraft.arc(this.origX,this.origY, this.radius,0,Math.PI*2)
       
        this.contextDraft.stroke();

    }

    onMouseUp(coord){
        this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height)
        this.contextReal.beginPath();
        this.contextReal.arc(this.origX,this.origY,this.radius,0 ,2*Math.PI)
        this.contextReal.stroke();
        cPush();

    }
    onmouse(){}
    onmouseenter(){}

}
// class DrawingRectangle extends PaintFunction{
//     constructor(contextReal,contextDraft){
//         super();
//         this.contextReal = contextReal;
//         this.contextDraft = contextDraft;            
//     }
    
//     onMouseDown(coord,event){
//         this.contextReal.fillStyle = "#f44";
//         this.origX = coord[0];
//         this.origY = coord[1];
//     }
//     onDragging(coord,event){
//         this.contextDraft.fillStyle = "#f44";
//         this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//         this.contextDraft.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
//     }

//     onMouseMove(){}
//     onMouseUp(coord){
//         this.contextDraft.clearRect(0,0,canvasDraft.width,canvasDraft.height);
//         this.contextReal.fillRect(this.origX,this.origY,coord[0]- this.origX,coord[1] - this.origY)
//     }
//     onMouseLeave(){}
//     onMouseEnter(){}
// }