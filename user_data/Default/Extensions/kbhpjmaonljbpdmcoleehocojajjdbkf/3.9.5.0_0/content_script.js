function getTextareaContent(keyname) {
    var res = "";

    var textareaArr = new Array();
    var j = 0;
    var list = document.getElementsByTagName("textarea");
    for (var i = 0; i < list.length && list[i]; i++) {
        var tempObj = "";
        if (keyname == "id") {
            tempObj = list[i].id;
        }
        else if (keyname == "name") {
            tempObj = list[i].name;
        }
        if (tempObj != "" && typeof (tempObj) != "undefined") {
            textareaArr[j] = tempObj;
            j++;
        }
    }

    for (var k = 0; k < textareaArr.length; k++) {
        if (keyname == "id") {
            res += document.getElementById(textareaArr[k]).value;
        }
        else if (keyname == "name") {
            var tempObj = document.getElementsByName(textareaArr[k]);
            for (j = 0; j < tempObj.length; j++) {
                if (tempObj[j].type == "textarea") {
                    res += tempObj[j].value;
                }
            }
        }
    }

    return res;
}

function getIframeContent() {
    var res = "";

    var list = document.getElementsByTagName("iframe");
    for (var i = 0; i < list.length; i++) {
        try{
            var iframeDoc = list[i].contentWindow.document;
            res += iframeDoc.documentElement.outerHTML;
        }catch(e){
            
        }
    }

    return res;
}

function getInputContent() {
    var res = "";

    var list = document.getElementsByTagName("input");
    for (var i = 0; i < list.length && list[i]; i++) {
        try{
            res += list[i].value;
            res += " ";
        }catch(e){
            
        }
    }

    return res;
}

let displayWatermark = false;
let styleStr = "";
let bodyMonitor = null;
let isPrinting = false;
function showWaterMark(watermarkImageBase64, width, spaceVertical, spaceHorizontal, angle, contentScale, cb/*function(base64,displayWidth, displayHeight){}*/) {
    displayWatermark = true;
    let image = new Image();
    if (!watermarkImageBase64.startsWith("data:image/")) {
        image.src = "data:image/png;base64," + watermarkImageBase64;
    } else {
        image.src = watermarkImageBase64;
    }
    image.onload = function () {
        let bgImageWidth = (width + spaceHorizontal) * contentScale;
        let bgImageHeight = (width + spaceVertical) * contentScale;
        const canvas = document.createElement('canvas');
        canvas.setAttribute('width', bgImageWidth);
        canvas.setAttribute('height', bgImageHeight);
        const ctx = canvas.getContext("2d");
        ctx.translate(bgImageWidth / 2.0, bgImageHeight / 2.0);
        ctx.rotate(Math.PI / 180 * angle);
        ctx.translate(- bgImageWidth / 2.0, - bgImageHeight / 2.0);
        ctx.drawImage(image, spaceHorizontal * contentScale / 2.0, spaceVertical * contentScale / 2.0, width * contentScale, width * contentScale);
        cb(canvas.toDataURL(), width + spaceHorizontal, width + spaceVertical);
    }
}
function __canvasWM(backgroundImage, displayWidth, displayHeight) {
    if (bodyMonitor) {
        bodyMonitor.disconnect();
        bodyMonitor = null;
    }
    let container = document.body;
    const __wm = document.querySelector('.__sg_wm');

    const watermarkDiv = __wm || document.createElement("div");
    styleStr = `
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:999999999;
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${backgroundImage}');
    background-size:${displayWidth}px ${displayHeight}px;
    background-color: transparent;
    visibility: visible !important;`

    watermarkDiv.setAttribute('style', styleStr);
    watermarkDiv.classList.add('__sg_wm');

    if (!__wm) {
        // container.style.position = 'relative';
        container.insertBefore(watermarkDiv, container.firstChild);
    }

    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    if (MutationObserver) {
        bodyMonitor = new MutationObserver(function () {
            if (!displayWatermark) {
                bodyMonitor.disconnect();
                bodyMonitor = null;
                return;
            }
            const __wm = document.querySelector('.__sg_wm');
            // 只在__wm元素变动才重新调用 __canvasWM
            if ((__wm && __wm.getAttribute('style') !== styleStr) || !__wm) {
                __canvasWM(backgroundImage, displayWidth, displayHeight);
            }
        });

        bodyMonitor.observe(container, {
            attributes: true,
            subtree: true,
            childList: true
        });
    }
}
function removeWaterMark() {
    if (bodyMonitor) {
        bodyMonitor.disconnect();
        bodyMonitor = null;
    }
    displayWatermark = false;
    let wm = document.querySelector('.__sg_wm');
    if (!wm) { return; }
    wm.remove();
}
function changeWaterMarkToCssStyleWhilePrinting() {
    if (!displayWatermark) {
        return;
    }
    if (!isPrinting) {
        return;
    }
    let container = document.body;
    let watermarkDiv = document.querySelector('.__sg_wm');
    if (!watermarkDiv) {
        watermarkDiv = document.createElement("div");
        container.insertBefore(watermarkDiv, container.firstChild);
    }
    let className = "sg_bg_style_" + Math.floor(Math.random() * 10000);
    const cssStyleStr = `
    @media not print {
        .${className} {
            ${styleStr}
        }
    }`;

    let styleEle = document.querySelector("#sg_bg_style");
    if (styleEle) {
        styleEle.remove();
    }
    styleEle = document.createElement("style");
    styleEle.setAttribute("id", "sg_bg_style");
    container.insertBefore(styleEle, container.firstChild);
    styleEle.textContent = cssStyleStr;
    watermarkDiv.className = `__sg_wm ${className}`
    watermarkDiv.setAttribute('style', "");
    setTimeout(changeWaterMarkToCssStyleWhilePrinting, 100)
}
window.addEventListener('beforeprint', function (event) {
    console.log("before print");
    if (bodyMonitor) {
        bodyMonitor.disconnect();
    }
    isPrinting = true;
    changeWaterMarkToCssStyleWhilePrinting();
});
window.addEventListener('afterprint', function (event) {
    isPrinting = false;
    console.log("after print");
    const watermarkDiv = document.querySelector('.__sg_wm');
    if (watermarkDiv) {
        watermarkDiv.className = "__sg_wm";
        watermarkDiv.setAttribute('style', styleStr);
    }
    if (bodyMonitor) {
        bodyMonitor.observe(document.body, {
            attributes: true,
            subtree: true,
            childList: true
        });
    }
});
chrome.extension.onMessage.addListener(function (request, sender, sendMessage) {
    if (request.act == "sourceCode") {
        var textareaContent = " ";
        textareaContent += getTextareaContent("id");
        textareaContent += " ";
        textareaContent += getTextareaContent("name");

        var iframeContent = " ";
        iframeContent += getIframeContent();

        var inputContent = " ";
        inputContent += getInputContent();

        var html = document.documentElement.outerHTML;
        sendMessage(html + iframeContent + textareaContent + inputContent);
    }
    else if (request.act == "postCode") {
        var inputFileIdArr = new Array();
        var j = 0;
        var list = document.getElementsByTagName("input");
        for (var i = 0; i < list.length && list[i]; i++) {
            if (list[i].type == "file") {
                inputFileIdArr[j] = list[i].id;
                j++;
            }
        }

        if (inputFileIdArr.length > 0 && window.FileReader) {
            var fObj = document.getElementById(inputFileIdArr[0]).files;
            if (typeof (fObj[0]) == "undefined") {
                sendMessage("");
            }
            else {
                var reader = new FileReader();
                //reader.readAsText(fObj[0], "UTF-8");
                reader.readAsDataURL(fObj[0]);
                reader.onload = function (evt) {
                    var splitStr = ";base64,";
                    var splitPos = evt.target.result.indexOf(splitStr);
                    if (splitPos >= 0) {
                        sendMessage(evt.target.result.substring(splitPos + splitStr.length));
                    }
                    else {
                        sendMessage(evt.target.result);
                    }
                }
                reader.onabort = function (evt) {
                    sendMessage("none");
                }
                reader.onerror = function (evt) {
                    sendMessage("none");
                }
                return true;
            }
        }
        else {
            sendMessage("none");
        }
    }
    else if (request.act == "watermark") {
        if (request.display) {
            showWaterMark(request.image, request.width, request.space_vertical, request.space_horizontal, request.angle, request.content_scale, __canvasWM);
        } else {
            removeWaterMark();
        }
        sendMessage("ok");
    }
    else {
        sendMessage("none");
    }
});

(function () {
    function checkBody() {
        const MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        if (MutationObserver) {
            let documentMonitor = new MutationObserver(function () {
                if (document.body) {
                    documentMonitor.disconnect();
                    documentMonitor = null;
                    chrome.runtime.sendMessage(/*extension id*/"", /*message*/JSON.stringify({
                        act: "body_load"
                    }), /*option*/{}, /*call back*/function (response) {

                    });
                }
            });
            documentMonitor.observe(document, {
                attributes: false,
                subtree: true,
                childList: true
            });
        } else {
            if (document.body) {
                chrome.runtime.sendMessage(/*extension id*/"", /*message*/JSON.stringify({
                    act: "body_load"
                }), /*option*/{}, /*call back*/function (response) {

                });
                return;
            }
            setTimeout(checkBody, 100);
        }

    }
    checkBody();
})();