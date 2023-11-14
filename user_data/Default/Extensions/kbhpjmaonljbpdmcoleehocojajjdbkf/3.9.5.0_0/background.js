/**
*
*  Secure Hash Algorithm (SHA256)
*  http://www.webtoolkit.info/
*
*  Original code by Angel Marin, Paul Johnston.
*
**/
function SHA256(s){

    var chrsz   = 8;
    var hexcase = 0;

    function safe_add (x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

    function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
    function R (X, n) { return ( X >>> n ); }
    function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
    function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
    function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
    function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
    function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
    function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }

    function core_sha256 (m, l) {
        var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
        var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
        var W = new Array(64);
        var a, b, c, d, e, f, g, h, i, j;
        var T1, T2;

        m[l >> 5] |= 0x80 << (24 - l % 32);
        m[((l + 64 >> 9) << 4) + 15] = l;

        for ( var i = 0; i<m.length; i+=16 ) {
            a = HASH[0];
            b = HASH[1];
            c = HASH[2];
            d = HASH[3];
            e = HASH[4];
            f = HASH[5];
            g = HASH[6];
            h = HASH[7];

            for ( var j = 0; j<64; j++) {
                if (j < 16) W[j] = m[j + i];
                else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);

                T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
                T2 = safe_add(Sigma0256(a), Maj(a, b, c));

                h = g;
                g = f;
                f = e;
                e = safe_add(d, T1);
                d = c;
                c = b;
                b = a;
                a = safe_add(T1, T2);
            }

            HASH[0] = safe_add(a, HASH[0]);
            HASH[1] = safe_add(b, HASH[1]);
            HASH[2] = safe_add(c, HASH[2]);
            HASH[3] = safe_add(d, HASH[3]);
            HASH[4] = safe_add(e, HASH[4]);
            HASH[5] = safe_add(f, HASH[5]);
            HASH[6] = safe_add(g, HASH[6]);
            HASH[7] = safe_add(h, HASH[7]);
        }
        return HASH;
    }

    function str2binb (str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for(var i = 0; i < str.length * chrsz; i += chrsz) {
            bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
        }
        return bin;
    }

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    }

    function binb2hex (binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for(var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
            hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
        }
        return str;
    }

    s = Utf8Encode(s);
    return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
}

function getBrowserInfo()
{
    var agent = navigator.userAgent.toLowerCase() ;
    var regStr_ie = /msie [\d.]+;/gi ;
    var regStr_ff = /firefox\/[\d.]+/gi;
    var regStr_chrome = /chrome\/[\d.]+/gi ;
    var regStr_saf = /safari\/[\d.]+/gi ;

    //IE
    if(agent.indexOf("msie") > 0)
    {
        return agent.match(regStr_ie) ;
    }

    //firefox
    if(agent.indexOf("firefox") > 0)
    {
        return agent.match(regStr_ff) ;
    }

    //Chrome
    if(agent.indexOf("chrome") > 0)
    {
        return agent.match(regStr_chrome) ;
    }

    //Safari
    if(agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0)
    {
        return agent.match(regStr_saf) ;
    }
}

function getVersion()
{
    var browser = getBrowserInfo();
    return (browser+"").replace(/[^0-9.]/ig,"");
}
var websocketfd = null;
var websocketOK = false;

var waterMarkCache = new Map();
/*
    websocket
*/
var WEBSOCKET_BASE_URL = "ws://127.0.0.1:8859/skyguard/endpoint/browser";
function startWebsocket() {
    websocketfd = new ReconnectingWebSocket(WEBSOCKET_BASE_URL);
    websocketfd.reconnectInterval = 10000;
    websocketfd.onerror = function (event) {
        websocketOK = false;
    };
    websocketfd.onclose = function (event) {
        websocketOK = false;
    };
    websocketfd.onopen = function (event) {
        websocketOK = true;
        waterMarkCache.clear();
        chrome.tabs.query({}, function (tabs) {
            for (const tab of tabs) {
                websocketfd.send(JSON.stringify({
                    "action": "watermark_request",
                    "url": tab.url
                }));
            }
        });
    };
    websocketfd.onmessage = function(event) {
        recvMsg = event.data;
        console.log('recvNativeMessage: ' + recvMsg);
        var obj = JSON.parse(recvMsg);
        if(obj.action=="get_web_content")
        {
            var curPrintData = null;
            if (activeId!=null)
            {
                chrome.tabs.sendMessage(activeId, {act: "sourceCode"}, function(response) {
                    curPrintData = response;
                    console.log("get activeTab id source: " + activeId);
                    var retData = {"action": "get_web_content", "web_content": curPrintData!=null?curPrintData:"none", "web_url": curTabUrl!=null?curTabUrl:"none"};
                    websocketfd.send(JSON.stringify(retData));
                });
            }
            else
            {
                console.log("activeId is null");
                var retData = {"action": "get_web_content", "web_content": "none", "web_url": curTabUrl!=null?curTabUrl:"none"};
                websocketfd.send(JSON.stringify(retData));
            }
        }
        else if (obj.action == "watermark_response") {
            let url = obj.url;
            if (url) {
                let display = obj.display;
                let width = obj.width;
                let spaceHorizontal = obj.space_horizontal;
                let spaceVertical = obj.space_vertical;
                let angle = obj.angle;
                let image = obj.image;
                let contentScale = obj.content_scale;
                let cacheObj = {
                    display: display,
                    image: image,
                    width: width,
                    space_vertical: spaceHorizontal,
                    space_horizontal: spaceVertical,
                    angle: angle,
                    content_scale: contentScale,
                    expire: Date.now() + 1000 * 60 * 5// expire in 5 min
                }
                waterMarkCache.set(url, cacheObj);
                chrome.tabs.query({}, function (tabs) {
                    for (const tab of tabs) {
                        if (tab.url === url) {
                            chrome.tabs.sendMessage(tab.id, {
                                act: "watermark",
                                display: display,
                                image: image,
                                width: width,
                                space_vertical: spaceVertical,
                                space_horizontal: spaceHorizontal,
                                content_scale: contentScale,
                                angle: angle
                            }, function (response) {
                            });
                        }
                    }
                });
            }
        }
        else if (obj.action == "profile_update") {
            waterMarkCache.clear();
            chrome.tabs.query({}, function (tabs) {
                for (const tab of tabs) {
                    websocketfd.send(JSON.stringify({
                        "action": "watermark_request",
                        "url": tab.url
                    }));
                }
            });
        }
    };
}
/*
    native message
*/
var port = null;
var recvMsg = null;
var curTabUrl = null;
var activeId = null;

function sendNativeMessage(message){
    if (port!=null){
        port.postMessage(message);
        //console.log('sendNativeMessage: ' + message);
    }
}

function onNativeMessage(message) {
  console.log('recvNativeMessage: ' + JSON.stringify(message));
  recvMsg = JSON.stringify(message);
  var obj = JSON.parse(recvMsg);
  if(obj.echo=="getSourceCode")
  {
    var curPrintData = null;
    if (activeId!=null)
    {
       chrome.tabs.sendMessage(activeId, {act: "sourceCode"}, function(response) {
            curPrintData = response;
            console.log("get activeTab id source: " + activeId);
            var printData = {"data": curPrintData!=null?curPrintData:"none", "url": curTabUrl!=null?curTabUrl:"none"};
            sendNativeMessage(printData);
        }); 
    }
    else
    {
        console.log("activeId is null");
        var printData = {"data": "none", "url": curTabUrl!=null?curTabUrl:"none"};
        sendNativeMessage(printData);
    }
  }
}

function onDisconnected() {
  console.log('disconnectNativeMessage');
  port = null;
  //connectNative();
}

function connectNative() {
    var hostName = "com.skyguard.browser.helper";
    port = chrome.runtime.connectNative(hostName);
    port.onMessage.addListener(onNativeMessage);
    port.onDisconnect.addListener(onDisconnected);
}

/*
	var
*/
var DSE_BASE_URL = "http://127.0.0.1:8852/"
var ETS_BASE_URL = "http://127.0.0.1:9005/"
var chromeExtensionON = false;
var isRepostTabChanged = false;
var isRepostDownloadListChanged = false;
var heartbeatInterval = 30*1000;
var browserPid = 0;
var session_id;
var session_token;
var reLogin = false;
var httpEnable = false;
var httpsEnable = false;
var ftpEnable = false;

function generate_base_auth(key) {
    var time_stamp = new Date().getTime();
    var sha256_txt = SHA256(time_stamp + key);
    var fixed_token = time_stamp + ":" + sha256_txt;
    
    var token_base64 = btoa(fixed_token);

    return token_base64;
}

function generate_session_token_auth() {
    var time_stamp = new Date().getTime();
    var sha256_txt = SHA256(time_stamp + session_token + session_id);
    var token_string = time_stamp + ":" + sha256_txt + ":" + session_id;

    var token_base64 = btoa(token_string);

    return token_base64;
}

function cloud_app_heartbeat() 
{
    var data = {"currentTab": curTabUrl};
    data = JSON.stringify(data);

    var myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function() 
    {
        if (myRequest.readyState == 4) 
        {
            if (myRequest.status == 200) 
            {
                console.log('cloud_app_heartbeat: ' + myRequest.responseText);

                var obj = JSON.parse(myRequest.responseText);
                isRepostTabChanged = obj.isRepostTabChanged;
                isRepostDownloadListChanged = obj.isRepostDownloadListChanged;

                ETS_BASE_URL = obj.addinNetworkFilterURL;
                var filterChannel = obj.addinNetworkFilterChannel;
                var tempHttpEnable = false;
                var tempHttpsEnable = false;
                var tempFtpEnable = false;
                for(var i in filterChannel)
                {
                    if (filterChannel[i] == "http")
                    {
                        tempHttpEnable = true;
                    }
                    else if (filterChannel[i] == "https")
                    {
                        tempHttpsEnable = true;
                    }
                    else if (filterChannel[i] == "ftp")
                    {
                        tempFtpEnable = true;
                    }
                }
                httpEnable = tempHttpEnable;
                httpsEnable = tempHttpsEnable;
                ftpEnable = tempFtpEnable;

                chromeExtensionON = true;
            }
            else 
            {
                console.log('cloud_app_heartbeat failed, status is ' + myRequest.status);
                chromeExtensionON = false;

                if(myRequest.status == 401)
                {
                    reLogin = true;
                    cloud_app_login('msedge');
                }
            }
        }
    };
    myRequest.open("POST", DSE_BASE_URL + "sgep/v1/clientAgent/cloudApp/heartbeat", true);
    myRequest.setRequestHeader("Content-Type","application/json");
    myRequest.setRequestHeader("Accept","application/json");
    myRequest.setRequestHeader("Authorization",'Basic ' + generate_session_token_auth());
    myRequest.send(data);
    setTimeout(cloud_app_heartbeat, heartbeatInterval);
}

function cloud_app_login(appName) 
{
    var data = {"appName": appName, "appVersion": getVersion()};
    data = JSON.stringify(data);

    var myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function() 
    {
        if (myRequest.readyState == 4) 
        {
            if (myRequest.status == 200) 
            {
                var obj = JSON.parse(myRequest.responseText);
                session_id = obj.sessionId;
                session_token = obj.sessionToken;
                heartbeatInterval = obj.heartbeatInterval*1000;
                isRepostTabChanged = obj.isRepostTabChanged;
                isRepostDownloadListChanged = obj.isRepostDownloadListChanged;
                browserPid = obj.processId;
                if("websocketPort" in obj)
                {
                    console.log('websocketPort is ' + obj.websocketPort);
                    WEBSOCKET_BASE_URL = "ws://127.0.0.1:" + obj.websocketPort + "/skyguard/endpoint/browser";
                }
                console.log('WEBSOCKET_BASE_URL is ' + WEBSOCKET_BASE_URL);

                ETS_BASE_URL = obj.addinNetworkFilterURL;
                var filterChannel = obj.addinNetworkFilterChannel;
                var tempHttpEnable = false;
                var tempHttpsEnable = false;
                var tempFtpEnable = false;
                for(var i in filterChannel)
                {
                    if (filterChannel[i] == "http")
                    {
                        tempHttpEnable = true;
                    }
                    else if (filterChannel[i] == "https")
                    {
                        tempHttpsEnable = true;
                    }
                    else if (filterChannel[i] == "ftp")
                    {
                        tempFtpEnable = true;
                    }
                }
                httpEnable = tempHttpEnable;
                httpsEnable = tempHttpsEnable;
                ftpEnable = tempFtpEnable;
                if (!reLogin) {
                    if ("win" == obj.platform) {
                        connectNative();
                        startWebsocket();
                    } else if ("mac" == obj.platform || "linux" == obj.platform) {
                        startWebsocket();
                    }

                    chrome.tabs.query({}, function (tabs) {
                        for (const tab of tabs) {
                            if(tab.active==true)
                            {
                                console.log('frome cloud_app_login');
                                tabToUrl[tab.id] = tab.url;
                                curTabUrl = tab.url;
                                cloud_app_currentTab(tab.url);
                                activeId = tab.id;
                            }
                        }
                    });
                }
                
                
                chromeExtensionON = true ;
                if(!reLogin)
                {
                    setTimeout(cloud_app_heartbeat, heartbeatInterval);
                    setTimeout(query_post_file_data, 1000);
                }
                reLogin = false;
                console.log('cloud_app_login: ' + myRequest.responseText);
            }
            else 
            {
                console.log('cloud_app_login failed, status is ' + myRequest.status);
                if (!reLogin) {
                    setTimeout(function () {
                        cloud_app_login(appName);
                    }, 1000);
                }
                // if(!heartbeatEnable)
                // {
                //     setTimeout(cloud_app_heartbeat, heartbeatInterval);
                //     setTimeout(query_post_file_data, 1000);
                // }
                //chromeExtensionON = false;
            }
        }
    };
    myRequest.open("POST", DSE_BASE_URL + "sgep/v1/clientAgent/cloudApp/login", true);
    myRequest.setRequestHeader("Content-Type","application/json");
    myRequest.setRequestHeader("Accept","application/json");
    myRequest.setRequestHeader("Authorization",'Basic ' + generate_base_auth('skyguard'));
    myRequest.send(data);
}

function cloud_app_logoff() 
{
    var myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function() 
    {
        if (myRequest.readyState == 4) 
        {
            if (myRequest.status == 200) 
            {
                chromeExtensionON = false;
                console.log("cloud_app_logoff");
            }
            else
            {
                console.log('cloud_app_logoff failed, status is ' + myRequest.status);
            }
        }
    };
    myRequest.open("POST", DSE_BASE_URL + "sgep/v1/clientAgent/cloudApp/logoff", true);
    myRequest.setRequestHeader("Content-Type","application/json");
    myRequest.setRequestHeader("Accept","application/json");
    myRequest.setRequestHeader("Authorization",'Basic ' + generate_session_token_auth());
    myRequest.send(data);
}

function cloud_app_currentTab(curTab) 
{
	if(!chromeExtensionON || !isRepostTabChanged)
	{
		return;
	}

    var data = {"currentTab": curTab};
    data = JSON.stringify(data);

    var myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function() 
    {
        if (myRequest.readyState == 4) 
        {
            if (myRequest.status == 200) 
            {
                console.log("cloud_app_currentTab: " + curTab);
            }
            else 
            {
                console.log('cloud_app_currentTab failed, status is ' + myRequest.status + ', tab is ' + curTab);
                //chromeExtensionON = false;
            }
        }
    };
    myRequest.open("POST", DSE_BASE_URL + "sgep/v1/clientAgent/cloudApp/currentTab", true);
    myRequest.setRequestHeader("Content-Type","application/json");
    myRequest.setRequestHeader("Accept","application/json");
    myRequest.setRequestHeader("Authorization",'Basic ' + generate_session_token_auth());
    myRequest.send(data);
}

function cloud_app_downloadList(id, url, path) 
{
	if(!chromeExtensionON || !isRepostDownloadListChanged)
	{
		return;
	}

    var data = {
        "downloads": [
            {
                "downloadUrl": url,
                "lcoalPath": path
            }
        ]
    };
    data = JSON.stringify(data);

    var myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function() 
    {
        if (myRequest.readyState == 4) 
        {
            if (myRequest.status == 200) 
            {
                console.log('cloud_app_downloadList: ' + myRequest.responseText);
                var obj = JSON.parse(myRequest.responseText);
                if(obj.ActionCode == 2)
                {
                    chrome.downloads.removeFile(id);
                }
                console.log("cloud_app_downloadList: url is " + url + ', path is ' + decodeURIComponent(path));
            }
            else 
            {
                console.log("cloud_app_downloadList failed: url is " + url + ', path is ' + decodeURIComponent(path));
                //chromeExtensionON = false;
            }
        }
    };
    myRequest.open("POST", DSE_BASE_URL + "sgep/v1/clientAgent/cloudApp/downloadList", true);
    myRequest.setRequestHeader("Content-Type","application/json");
    myRequest.setRequestHeader("Accept","application/json");
    myRequest.setRequestHeader("Authorization",'Basic ' + generate_session_token_auth());
    myRequest.send(data);
}

function cloud_app_watermark_check(tabid, url) {
    // check cloud water mark
    let cacheObj = waterMarkCache.get(url);
    // check cache
    if (!cacheObj || 
        Date.now() > cacheObj.expire) {
        waterMarkCache.delete(url);
        if (websocketOK && websocketfd) {
            websocketfd.send(JSON.stringify({
                "action": "watermark_request",
                "url": url
            }));
        }
    } else {
        chrome.tabs.sendMessage(tabid, {
            act: "watermark",
            display: cacheObj.display,
            image: cacheObj.image,
            width: cacheObj.width,
            space_vertical: cacheObj.space_vertical,
            space_horizontal: cacheObj.space_horizontal,
            angle: cacheObj.angle,
            content_scale: cacheObj.content_scale
        }, function (response) {
        });
    }
}
/*
    ets
*/
function redirect_to_ets(method, url, requestHeaders, requestBody, appName, bEncode) 
{
    var data = {"method": method,
                "url": url,
                "requestHeaders": requestHeaders,
                "requestBody": requestBody,
                "appName": appName,
                "encode": bEncode,
                "pid": browserPid};
    data = JSON.stringify(data);

    var myRequest = new XMLHttpRequest();
    myRequest.open("POST", ETS_BASE_URL, false);
    myRequest.setRequestHeader("Content-Type","application/json");
    myRequest.setRequestHeader("Accept","application/json");
    myRequest.send(data);
    if (myRequest.readyState == 4) 
    {
        if (myRequest.status == 200) 
        {
            console.log("redirect_to_ets success, responseBody is " + myRequest.responseText);
            return myRequest.responseText;
        }
        else
        {
            console.log('redirect_to_ets failed, url is ' + url + ', status is ' + myRequest.status);
        }
    }

    var res = {"check": "allow",
                "epid": "0"};
    return JSON.stringify(res);
}

/*
    request
*/
var gPostData="";
function query_post_file_data()
{
    if (activeId!=null &&
        chromeExtensionON &&
        (httpEnable || httpsEnable) &&
        (/*typeof(gPostData) == "undefined" ||*/ gPostData == ""))
    {
       chrome.tabs.sendMessage(activeId, {act: "postCode"}, function(response) {
            gPostData=response;
        });
    }
    setTimeout(query_post_file_data, 1000);
}
chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        if(!chromeExtensionON)
        {
            return {cancel: false};
        }

        if(details.url.indexOf("http://")==0)
        {
            if(!httpEnable)
            {
                console.log("http disable");
                return {cancel: false};
            }
        }
        else if(details.url.indexOf("https://")==0)
        {
            if(!httpsEnable)
            {
                console.log("https disable");
                return {cancel: false};
            }
        }
        else
        {
            console.log("ignore url: " + details.url);
            return {cancel: false};
        }

        var regex = new RegExp(DSE_BASE_URL, 'g');
        var regex2 = new RegExp(ETS_BASE_URL, 'g');
        if (details.url.match(regex) != null || details.url.match(regex2) != null)
        {
            return {cancel: false};
        }

        //get request post body
        var isEncode = false;
        if (details.method == "POST")
        {
            var requestBody = details.requestBody;
            if(requestBody)
            {
                var content = "";
                var rawcontent = null;
                var files = "";
                if (requestBody.formData && requestBody.formData != null)
                {
                    for (var key in requestBody.formData)
                    {
                        for (var i = 0; i < requestBody.formData[key].length; i++)
                        {
                            if (requestBody.formData[key][i] != null)
                            {
                                if (requestBody.formData[key][i].match(/^[\w\s-\.]+\.[\w]{1,5}$/) != null ||
                                    key == "file")
                                {
                                    files += requestBody.formData[key][i];
                                }
                                else
                                {
                                    content += requestBody.formData[key][i].substring(0, Math.min(512*1024, requestBody.formData[key][i].length)) + ' ';
                                }
                            }
                        }
                    }
                }
                else if (requestBody.raw != null)
                {
                    for (var i = 0; i < requestBody.raw.length; i++)
                    {
                        if (requestBody.raw[i].bytes != null)
                        {
                            if (rawcontent == null)
                            {
                                rawcontent = requestBody.raw[i].bytes;
                            }
                            else
                            {
                                var buf = new ArrayBuffer(rawcontent.byteLength + requestBody.raw[i].bytes.byteLength);
                                var bufview = new Uint8Array(buf);
                                var rawcview = new Uint8Array(rawcontent);
                                var rawbview = new Uint8Array(requestBody.raw[i].bytes);
                                bufview.set(rawcview, 0);
                                bufview.set(rawbview, rawcview.length);
                                rawcontent = buf;
                            }
                        }
                        else if (requestBody.raw[i].file != null)
                        {
                            files += requestBody.raw[i].file;
                        }
                    }
                }

                /*
                if (rawcontent == null && content == "")
                {
                    return {cancel: false};
                }
                */

                if(files != "" && rawcontent == null && gPostData != "")
                {
                    content = gPostData;
                    isEncode = true;
                }

                //request post content to string
                if (rawcontent != null)
                {
                    var data = new Uint8Array(rawcontent.byteLength);
                    var rawview = new Uint8Array(rawcontent);
                    data.set(rawview, 0);   
                    content = String.fromCharCode.apply(null, data);
                    console.log('onBeforeRequest post body from raw:');
                }
                else
                {
                    console.log('onBeforeRequest post body from formdata:');
                }
                console.log(content);
                gPostData=content;
            }
        }
        
        //compose request headers
        var strRequestHeaders = "User-Agent: ";
        strRequestHeaders += navigator.userAgent.toLowerCase();
        strRequestHeaders += "\r\n";
        if(details.method == "POST" && gPostData.length>0)
        {
            //strRequestHeaders += "Content-Length: ";
            //strRequestHeaders += gPostData.length;
            //strRequestHeaders += "\r\n";
        }
        strRequestHeaders += "\r\n";
        
        //sent to ets check
        var originalUrl = details.url;
        {
            var checkRes = redirect_to_ets(details.method, originalUrl, strRequestHeaders, gPostData, "msedge", isEncode);
            var obj = JSON.parse(checkRes);
            if(obj.check=="block")
            {
                gPostData="";
                var redirectSGUrl = ETS_BASE_URL + "s?epid=" + obj.epid;
                return {redirectUrl: redirectSGUrl};
            }
        }

        gPostData="";
        return {cancel: false};
    },
    {urls: ["<all_urls>"]},
    ["blocking", "requestBody"]
);

/*
	tab
*/	
//var urlMap = {};
var tabToUrl = {};
var printMap = {};

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab)
{
	if (changeInfo.status == "complete")  // new tab loaded or reloaded
	{
        if(tab.url)
        {
            tabToUrl[tabId] = tab.url;
            if(tab.active==true)
            {
                curTabUrl = tab.url;
                cloud_app_currentTab(tab.url);

                if(tab.url.indexOf("file:///") != -1 || 
                    tab.url.indexOf("http://") != -1 ||
                    tab.url.indexOf("https://") != -1 ||
                    tab.url.indexOf("ftp://") != -1)
                {
                    activeId = tabId;
                }
                else
                {
                    activeId = null;
                }
            }
            else
            {
                console.log('tab complete, url ' + tab.url + ' is not active');
            }
        }
    }
    else if (changeInfo.status == "loading")
    {
        if (tab.url)
        {
            tabToUrl[tabId] = tab.url;
        }
    }
    /*
	else if(changeInfo.status == "loading")
	{		
		if( typeof tab.url != "undefined" )
		{	
			if(tab.url.indexOf("file:///") != -1)  //the tab just changed url
			{
				tabToUrl[tabId] = tab.url;
				curTabUrl = tab.url;
				cloud_app_currentTab(tab.url);

                chrome.tabs.sendMessage(tabId, {greeting: "sourceCode"}, function(response) {
                    printMap[tabId] = response;
                    curPrintData = response;
                });
			}
		}
	}*/
	//chrome.tabs.getSelected(null, function(tab)
	//{
		/*if (tab.url.localeCompare("undefined") == 0) 
			//|| tab.url.match(/^chrome/i)  != null)
			return;
			
		var msgHash = calcMD5(tab.url);	
		trimCache(urlMap);	
		if(msgHash in urlMap)
		{
			return;
		}		
	
		urlMap[msgHash] = new Date().getTime();*/
	//});
});

chrome.tabs.onActivated.addListener(function (activeInfo)
{
	if (tabToUrl[activeInfo.tabId] != null)
	{
		curTabUrl = tabToUrl[activeInfo.tabId];	
		cloud_app_currentTab(tabToUrl[activeInfo.tabId]);

        if(curTabUrl.indexOf("file:///") != -1 || 
            curTabUrl.indexOf("http://") != -1 ||
            curTabUrl.indexOf("https://") != -1 ||
            curTabUrl.indexOf("ftp://") != -1)
        {
            activeId = activeInfo.tabId;
            cloud_app_watermark_check(activeInfo.tabId, curTabUrl);
        }
        else
        {
            activeId = null;
        }
	}
	else
	{
		chrome.tabs.get(activeInfo.tabId, function (tab) {
            if(tab.url.indexOf("file:///") != -1 || 
                tab.url.indexOf("http://") != -1 ||
                tab.url.indexOf("https://") != -1 ||
                tab.url.indexOf("ftp://") != -1)
            {
                console.log('frome chrome.tabs.onActivated else');
                tabToUrl[activeInfo.tabId] = tab.url;
                curTabUrl = tab.url;
                cloud_app_currentTab(tab.url);
                activeId = activeInfo.tabId;
            }
		});
	}
});

chrome.tabs.onRemoved.addListener(function (tabId, removeInfo)
{
	if (tabToUrl[tabId] != null)
	{
		delete tabToUrl[tabId];
	}
    if (printMap[tabId] != null)
    {
        delete printMap[tabId];
    }

    if (activeId==tabId)
    {
        console.log('chrome.tabs.onRemoved id:' + activeId);
        activeId=null;
    }
});

/*
    window
*/
chrome.windows.onFocusChanged.addListener(function (windowId)
{
    chrome.tabs.query({active: true}, function (tabs) {
        for (const tab of tabs)
        {
            if(tab.windowId==windowId)
            {
                if(tab.url.indexOf("file:///") != -1 || 
                    tab.url.indexOf("http://") != -1 ||
                    tab.url.indexOf("https://") != -1 ||
                    tab.url.indexOf("ftp://") != -1)
                {
                    console.log('frome chrome.windows.onFocusChanged');
                    tabToUrl[tab.id] = tab.url;
                    curTabUrl = tab.url;
                    cloud_app_currentTab(tab.url);
                    activeId = tab.id;
                }
            }
        }
    });
});

/*
	downloads

var downloadToUrl = {};
var downloadToFilename = {};

chrome.downloads.onCreated.addListener(function (item)
{
	downloadToUrl[item.id] = item.url;
	//downloadToFilename[item.id] = item.filename;   //item.filename is null
});

chrome.downloads.onDeterminingFilename.addListener(function (item, suggest)
{
	downloadToFilename[item.id] = item.filename;

	//Force all downloads to overwrite any existing files instead of inserting ' (1)', ' (2)', etc.
	//suggest({filename: item.filename,
      //     conflict_action: 'overwrite',
        //   conflictAction: 'overwrite'});
});

chrome.downloads.onErased.addListener(function (downloadId)
{
	if (downloadToUrl[downloadId] != null)
	{
		delete downloadToUrl[downloadId];
	}
	if (downloadToFilename[downloadId] != null)
	{
		delete downloadToFilename[downloadId];
	}
});
*/

chrome.downloads.onChanged.addListener(function (item)
{
    //if (downloadToFilename[item.id] != null)
    {
        if (item.endTime != null)
        {
            chrome.downloads.search({id: item.id, state: 'complete'}, function(items) {
                items.forEach(function(it) {
                    var realUrl = it.url;
                    if(it.finalUrl){
                        realUrl = it.finalUrl;
                    }
                    cloud_app_downloadList(it.id, realUrl, encodeURIComponent(it.filename));
                });
            });
        }
    }
});

chrome.storage.managed.get(['cloudappWebServerPort'], function(result) {
	if(typeof(result) != "undefined" && typeof(result.cloudappWebServerPort) != "undefined")
	{
		console.log("cloudappWebServerPort in storage is " + result.cloudappWebServerPort);
		DSE_BASE_URL = "http://127.0.0.1:" + result.cloudappWebServerPort + "/";
	}
	console.log('DSE_BASE_URL is ' + DSE_BASE_URL);
	cloud_app_login('msedge');
});
chrome.runtime.onMessage.addListener(function (message, sender, response) {
    tab = sender.tab;
    if (!tab) {
        return;
    }
    let obj = JSON.parse(message);
    if (obj.act == "body_load") {
        cloud_app_watermark_check(tab.id, tab.url);
        response();
    }
});