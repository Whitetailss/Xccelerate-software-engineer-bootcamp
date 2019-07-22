        // undo event
        var recordArray = new Array();
        var record = -1;


        //undo event
        function drawImage() {
            var image = new Image();
            image.src = `./assets/img/undo.jpg`;

            $(image).load(function () {
                contextReal.drawImage(image, 0, 0, 1280, 720);
                cPush();
            });

        }
        function cPush() {
            record++;
            if (record < recordArray.length) { recordArray.length = record; }
            recordArray.push(document.getElementById('canvas-real').toDataURL());
            document.title = record + ":" + recordArray.length;
        }
        function cUndo() {
            if (record > 0) {
                record--;
                var canvasPic = new Image();
                canvasPic.src = recordArray[record];
                //onload 事件会在页面或图像加载完成后立即发生。
                canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0); }
                document.title = record + ":" + recordArray.length;
            }
        }
        function cRedo() {

            if (record < recordArray.length - 1) {
                record++;
                var canvasPic = new Image();
                canvasPic.src = recordArray[record];
                canvasPic.onload = function () { contextReal.drawImage(canvasPic, 0, 0); }
                document.title = record + ":" + recordArray.length;
            }
        }
        drawImage();