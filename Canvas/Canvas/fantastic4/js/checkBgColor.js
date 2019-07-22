// check background color data
function BgColorData() {
    var imgData2 = contextReal.getImageData(0, 0, canvasReal.width, canvasReal.height);
    var count = 0;
    var countdiff = 0;
  
    console.log(imgData2.data);
    for (var i = 0; i < imgData2.data.length; i++) {
        if (imgData2.data[i] == 255) {
            count++;
        }
        else {
            countdiff++;
        }
    }
    console.log("count is " + count + " count diff is" + countdiff);
    
  }