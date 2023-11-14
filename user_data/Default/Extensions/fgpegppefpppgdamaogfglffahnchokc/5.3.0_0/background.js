var Authinfo = {};
createSelectionMenu();
listenerSearch();
initProxy();
const TokenKey = 'Magnetar-Token';
const UserInfoKey = 'Magnetar_User';
/* eslint-disable */
/* eslint-enable */
function blockurl(details) {
	for (let i = 0, len = details.responseHeaders.length; i < len; i++) {
		if (details.responseHeaders[i].name.toLowerCase() === "content-type") {
			let reg_g = /video|audio/g;
			var result = details.responseHeaders[i].value.match(reg_g);
			console.log(details.url);
			if (result) {
				console.log("媒体资源：%o", details.responseHeaders[i].value);
				return {
					cancel: true
				}
			}
		}

	}
}
function getToken() {
	return localStorage.getItem(TokenKey);
}
function getUserInfo() {
	return JSON.parse(localStorage.getItem(UserInfoKey));
}
function getSearchDomain() {
	return localStorage.getItem('SearchDomain');
}
function getSearchPath(type="bt") {
	return localStorage.getItem("search_path_"+type);
}
function initProxy() {
	chrome.storage.local.get({
		proxySwitch: false,
		proxyCheckedNodeId: '',
		proxyNodeList: [],
		pacScript: ''
	}, items => {
		if (items.proxySwitch && items.proxyCheckedNodeId && items.proxyNodeList && items.pacScript) {
			let nodeinfo = items.proxyNodeList.find(item => item.id == items.proxyCheckedNodeId);
			if (nodeinfo) {
				console.log("开启代理-%o", nodeinfo)
				let { domain, color, name, account, password, block } = nodeinfo;
				let data = items.pacScript.replace("*proxy*", domain);
				let value = {
					mode: 'pac_script',
					pacScript: {
						data
					}
				}
				openProxy({ account, password }, block, color, name);
				set_proxy(nodeinfo.pac_script);
			}

		}
	});
}
function set_blockurl(block) {
	console.log("set_blockurl:%o", block);
	if (!block) {
		chrome.webRequest.onHeadersReceived.removeListener(blockurl);
	} else {
		chrome.webRequest.onHeadersReceived.addListener(
			blockurl,
			{
				urls: ["<all_urls>"]
			},
			['blocking', 'responseHeaders'],
		)
	}

}
/*
创建上下文为selection时候的右键菜单
*/
function createSelectionMenu() {
	chrome.contextMenus.create({
		title: '搜索磁力"%s"',
		contexts: ['selection'],
		onclick: function (params) {
			// /search/?q=
			let url = getSearchDomain() + getSearchPath("bt") + encodeURI(params.selectionText);
			window.open(url);
		}
	});
	chrome.contextMenus.create({
		title: '搜索网盘"%s"',
		contexts: ['selection'],
		onclick: function (params) {
			// /search/?q=
			let url = getSearchDomain() + getSearchPath("netdisk") + encodeURI(params.selectionText);
			window.open(url);
		}
	});
	chrome.contextMenus.create({
		title: '搜索番号"%s"',
		contexts: ['selection'],
		onclick: function (params) {
			// /search/?q=
			let url = getSearchDomain() + getSearchPath("jav") + encodeURI(params.selectionText);
			window.open(url);
		}
	});
	chrome.contextMenus.create({
		title: '搜索女优"%s"',
		contexts: ['selection'],
		onclick: function (params) {
			// /search/?q=
			let url = getSearchDomain() + getSearchPath("javActress") + encodeURI(params.selectionText);
			window.open(url);
		}
	});
	chrome.contextMenus.create({
		title: "前往Magnetar",
		onclick: function () {
			window.open(getSearchDomain());
		}
	});


}

/*
监听搜索栏搜索推荐
*/
function listenerSearch() {
	chrome.omnibox.onInputEntered.addListener(
		function (text) {
			let url = getSearchDomain() + getSearchPath() + encodeURI(text);
			window.open(url);
		});
	chrome.omnibox.setDefaultSuggestion({
		"description": "磁力搜索"
	});
}

function getconfig() {
	return new Promise(function (resolve, reject) {
		chrome.storage.local.get({
			config: null,
		}, items => {
			console.log(items)
			if (items.config) {
				resolve(items.config.search_domain);
			} else {
				reject("数据未初始化");
			}
		});
	})

}

function setBrowserAction(color, title, name) {
	console.log('setBrowserAction-color:%o', color);
	console.log('setBrowserAction-titler:%o', title);
	console.log('setBrowserAction-name:%o', name);
	chrome.browserAction.setBadgeBackgroundColor({
		color: color
	});
	chrome.browserAction.setTitle({
		title: title
	});
	chrome.browserAction.setBadgeText({
		text: name
	});
}



function set_proxy(value) {
	console.log('set_proxy-value:%o', value)
	if (!value) {
		return false;
	}
	let pac = {
		scope: 'regular',
		value
	}
	chrome.proxy.settings.set(pac, function () {
		return true;
	});
	return true;
}

function proxy_info_save_to_local(data) {
	console.log('proxy_info_save_to_local')
	chrome.storage.sync.set({
		info: data
	}, () => {

	});
}
function openProxy(accessInfo, block, color, name) {
	console.log('openProxy-accessInfo:%o', accessInfo)
	console.log('openProxy-block:%o', block)
	Authinfo = accessInfo;
	chrome.webRequest.onAuthRequired.addListener(AuthRequired, {
		urls: ["<all_urls>"]
	},
		['asyncBlocking']);
	setBrowserAction(color, '已开启代理', name);
	set_blockurl(block);
}
function closeProxy() {
	console.log('closeProxy');
	setBrowserAction('#ff0000', 'Magnetar', '');
	chrome.webRequest.onAuthRequired.removeListener(AuthRequired);
	set_blockurl(false);
}
function handle_message(msg, sender, sendResponse) {
	const { accessInfo, block, color, name } = msg;
	switch (msg.action) {
		case 'updateProxy':
			console.log('updateProxy-msg:%o', msg);
			msg.switch === 'on' ? openProxy(accessInfo, block, color, name) : closeProxy(msg);
			set_proxy(msg.value);
			sendResponse(true);
			break;
		default:
			break;
	}
}

function onProxySettingsChange(config) {
	if (config.levelOfControl != "controlled_by_this_extension") {
		chrome.storage.local.get({
			proxySwitch: false,
		}, items => {
			if (items.proxySwitch) {
				console.log("代理被其他扩展程序占用：%o", config.levelOfControl);
				setBrowserAction('#ff0000', '浏览器代理正在由其他扩展程序控制，Magnetar的代理无效，请禁用或卸载其他代理扩展程序', name)
			}
		});
	}
}

function AuthRequired(details, callbackFn) {
	console.log("代理自动认证：%o", Authinfo);
	callbackFn({
		authCredentials: {
			username: Authinfo.account,
			password: Authinfo.password
		}
	});
}
chrome.runtime.onMessage.addListener(handle_message);
chrome.proxy.settings.onChange.addListener(onProxySettingsChange);
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.action == "getUserInfo" && sender.origin + "/" == getSearchDomain()) {
		if(getToken()){
			let userData = {
				...getUserInfo(),
				token:getToken()
			}
			sendResponse(userData);
		}
		
	} else {
		sendResponse(null);
	}
});

