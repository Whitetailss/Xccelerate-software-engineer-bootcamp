//clear function
function clearing() {
    contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
    recordArray = new Array();
    record = -1;
    drawImage();
  }