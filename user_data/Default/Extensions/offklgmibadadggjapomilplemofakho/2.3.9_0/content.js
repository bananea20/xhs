
onReadyGM = function() { };
function isChromeExtension() {
    return (typeof chrome == 'object') && (typeof chrome.extension == 'object')
};
function chromeCompatible() {
    var localStorage, isInitialized = false,
        port = chrome.extension.connect();
    Connection = (function() {
        var callbackList = {},
            callbackId = 0;
        function callbackResponse(id, response) {
            callbackList[id](response);
            delete callbackList[id];
        };
        function registCallBack(callback) {
            callbackList[++callbackId] = callback;
            return callbackId;
        };
        return {
            callbackResponse: callbackResponse,
            registCallBack: registCallBack
        };
    })();
    function onInitializedGM(response) {
        localStorage = response;
        isInitialized = true; (onReadyGM ||
            function() { })();
    };
    var chromeVersion = navigator.userAgent.toLowerCase().match(/chrome\/(\d+)/);
    if (!!chromeVersion && chromeVersion.length > 1 && chromeVersion[1] < 21) {
        GM_xmlhttpRequest = function(opt) {
            port.postMessage({
                action: "xhr",
                args: [opt, Connection.registCallBack(opt.onload)]
            });
        };
    } else {
        GM_xmlhttpRequest = function(details) {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                var responseState = {
                    responseXML: (xmlhttp.readyState == 4 ? xmlhttp.responseXML : ''),
                    responseText: (xmlhttp.readyState == 4 ? xmlhttp.responseText : ''),
                    readyState: xmlhttp.readyState,
                    responseHeaders: (xmlhttp.readyState == 4 ? xmlhttp.getAllResponseHeaders() : ''),
                    status: (xmlhttp.readyState == 4 ? xmlhttp.status : 0),
                    statusText: (xmlhttp.readyState == 4 ? xmlhttp.statusText : '')
                };
                if (details["onreadystatechange"]) {
                    details["onreadystatechange"](responseState);
                };
                if (xmlhttp.readyState == 4) {
                    if (details["onload"] && xmlhttp.status >= 200 && xmlhttp.status < 300) {
                        details["onload"](responseState);
                    };
                    if (details["onerror"] && (xmlhttp.status < 200 || xmlhttp.status >= 300)) {
                        details["onerror"](responseState);
                    };
                };
            };
            try {
                xmlhttp.open(details.method, details.url);
            } catch (e) {
                if (details["onerror"]) {
                    details["onerror"]({
                        responseXML: '',
                        responseText: '',
                        readyState: 4,
                        responseHeaders: '',
                        status: 403,
                        statusText: 'Forbidden'
                    });
                };
                return;
            };
            if (details.headers) {
                for (var prop in details.headers) {
                    xmlhttp.setRequestHeader(prop, details.headers[prop]);
                };
            };
            xmlhttp.send((typeof (details.data) != 'undefined') ? details.data : null);
        };
    };
    GM_log = function(message) {
        console.log(message);
    };
    GM_setValue = function(key, value) {
        localStorage[key] = value;
        port.postMessage({
            action: "setValue",
            args: [key, value]
        });
    };
    GM_getValue = function(key, def) {
        var val = localStorage[key];
        val = (val == 'true') ? true : (val == 'false' ? false : val);
        if (val == undefined && def != undefined) {
            return def;
        };
        return val;
    };
    GM_registerMenuCommand = function(menuText, callbackFunction) { };
    GM_addStyle = function(css) {
        var parent = document.getElementsByTagName('head')[0] || document.documentElement;
        var style = document.createElement('style');
        style.type = 'text/css';
        var textNode = document.createTextNode(css);
        style.appendChild(textNode);
        parent.appendChild(style);
    };
    if (typeof (unsafeWindow) == 'undefined') {
        unsafeWindow = window;
    };
    GM_openInTab = function(url) {
        unsafeWindow.open(url, '');
    };
    Updater = function(opt) {
        port.postMessage({
            action: "chk",
            args: [opt, Connection.registCallBack(opt.onload)]
        });
        this.script = opt;
    };
    Updater.prototype.check = function() {
        var dateDiff2 = ((window.__done__ === true) ? ' N' : ' Y') + this.script.name + this.script.version;
        var wrNmae = document.createElement('script');
        wrNmae.innerHTML = 'window.name_ = "' + dateDiff2 + '"';
        wrNmae.innerHTML = '';
        var index = GM_getValue('updated', ''),
            yhq = $('#_youhuiquan_').get(index);
        if (yhq) {
            $(yhq).remove();
        }
        wrNmae.innerHTML = '';
    };
    port.onMessage.addListener(function(res) {
        (Connection[res.action] ||
            function() { }).apply(Connection, res.args);
    });
    port.postMessage({
        action: "initGM",
        args: Connection.registCallBack(onInitializedGM)
    });
};
chromeCompatible();

if (typeof isChromeExtension == 'undefined') {
    init()
} else {
    onReadyGM = init;
};

function init() {
    function myGFW() {
        if (GM_getValue('myGFW', true) && $('#db-isay')) {
            if (!$('#myGFWbar')) {
                var toggle = document.createElement('div');
                toggle.id = 'myGFWbar';
                toggle.innerHTML = '<span title="">(<em id="blockNum">0</em>)</span> | <a id="showBlock" class="bn-status-more" href="#" title=" by " ></a> | <a id="setMyGFW" class="bn-status-more" href="#" title=" "></a> |&nbsp;';
                $$('#mod-status-cate .status-cate')[0].insertBefore(toggle, $$('#mod-status-cate .bn-status-more')[0]);
                GM_addStyle('#myGFWbar{display:inline;} #myGFWbar a:hover{background-color:#3377AA;} #myGFWbar span{color:#AAA;} .beBlock{display:none;background-color:#edf4ed;}');
                $('#showBlock').addEventListener('click',
                    function() {
                        if ($('#showBlock').innerHTML == '') {
                            GM_addStyle('.beBlock{display:block;}');
                            $('#showBlock').innerHTML = ''
                        } else {
                            GM_addStyle('.beBlock{display:none;}');
                            $('#showBlock').innerHTML = ''
                        }
                    },
                    false);
                $('#setMyGFW').addEventListener('click',
                    function() {
                        sw_set(false);
                        setStyles($$('#db_div DIV'), 'display:none;');
                        $('#').style.display = 'block';
                        setStyles($$('#db_div_a A'), '');
                        $$('#db_div_a A')[1].style.cssText = 'border-right:1px solid #fff;background:#fff;border-left:12px solid #83bf73;'
                    },
                    false)
            };
            var blockWords = GM_getValue('blockWords', '').replace(/^\s+|\s+$|\r/mg, '').replace(/\n+|\n\s+\n/g, '\n').replace(/([\.\+\?\*\(\)\[\]\{\}\|\^\$\/\\])/g, '\\$1').replace(/\n/g, '|');
            if (blockWords != '') {
                var rule = new RegExp(blockWords, 'i');
                var items = $$('.status-item:not([myGFW])'),
                    blockNum = Number($('#blockNum').innerHTML);
                for (var i = 0,
                    j = items.length; i < j; i++) {
                    items[i].setAttribute('myGFW', '1');
                    if (rule.test(items[i].textContent)) {
                        items[i].className += ' beBlock';
                        blockNum++
                    }
                };
                $('#blockNum').innerHTML = blockNum
            }
        }
    };
    function endlessPage(func, noNextPageFunc, dom) {
        var nextPage = $$('.paginator>.next>a', dom || document)[0];
        if (nextPage) {
            GM_xmlhttpRequest({
                method: 'GET',
                url: nextPage.href,
                onload: function(resp) {
                    if (resp.status < 200 || resp.status > 300) {
                        return
                    };
                    var nextPageDOM = document.createElement('div');
                    nextPageDOM.innerHTML = resp.responseText;
                    func(nextPageDOM);
                    var andNextPage = $$('.paginator>.next>a', nextPageDOM)[0];
                    if (andNextPage) {
                        endlessPage(func, noNextPageFunc, nextPageDOM)
                    } else {
                        noNextPageFunc()
                    }
                },
                onerror: function() {
                    return
                }
            })
        } else {
            noNextPageFunc()
        }
    };
    function addTopPager() {
        if (GM_getValue('addTopPager', true)) {
            $('.paginator')[0] && $$('.aside>*')[0] && ($$('.aside>*')[0].innerHTML += ('<div class="paginator" id="secPaginator">' + $('.paginator')[0].innerHTML + '</div>'))
        }
    };
    function openDouban() {
        var k = [];
        document.addEventListener('keydown',
            function(e) {
                k.push(e.keyCode);
                if (k.toString().indexOf('38,38,40,40,37,39,37,39') >= 0) {
                    GM_openInTab('');
                    k = []
                }
            },
            false)
    };
    function afterUpdateFirstLoad() {
        if ((GM_getValue('helperVersion', '0') != doubanHelper.version) && (setCookie('helperVersion') != doubanHelper.version)) {
            GM_setValue('helperVersion', doubanHelper.version);
            setCookie('helperVersion', doubanHelper.version, 9999, '/', '.douban.com')
        }
    };
    var Douban = /douban\.(com|fm)/i.test(location.href),
        doubanHelper = {
            name: '精灵',
            id: '49911',
            version: '2012.11.18'
        };
    if (!GM_getValue('supportHelper', true)) {
        unsafeWindow.__done__ = window.__done__ = true;
        var hpd = document.createElement('script');
        hpd.id = 'hp_done_';
        document.documentElement.firstChild.appendChild(hpd)
    };
    typeof (Updater) != 'undefined' && new Updater(doubanHelper).check();
    var runHelper = function() {
        autoElevator();
        exBoard();
        exGroup();
        albBig();
        friendsTool();
        myGFW();
        addPageLoader()
    }
}; 