class fillText extends PaintFunction{
    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;       
    }
    
    onMouseDown(coord,event){

      
        this.origX = coord[0];
        this.origY = coord[1];
    }
        
    onDragging(){}
    onMouseMove(){}
    // onMouseUp(){}
    onMouseLeave(){}
    onMouseEnter(){}

    // onPressDown(coord,event){
    //     this.contextReal.typedText = 'No value?';
    //     this.contextReal.font = '30x Arial';
    //     this.contextReal.fillstyle = "black";
    //     this.contextReal.fillText(this.typedText,this.origX,this.origY);

    // }

    onMouseUp(coord, event){
                
        const value = $('input[name*="fname"]').val()
        // const fontSize = $('input[name*="text-size"]').val() + `px`

               

        this.typedText = value;
        // this.contextReal.font = fontSize

        this.contextDraft.font = "20px Arial"
        this.contextDraft.fillText(this.typedText,this.origX,this.origY);


        $('.inputText').appendTo(this.typedText);
        this.contextReal.font = "20px Arial";
        this.contextReal.fillstyle = "#f00";
        this.contextReal.fillText(this.typedText,this.origX,this.origY);
    }


}

