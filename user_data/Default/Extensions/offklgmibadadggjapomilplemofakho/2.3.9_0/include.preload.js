!function(){function d(){void 0===window.contentPage&&(window.contentPage={sendMessage:yiclearCommon.SendMessageFunction,onMessage:new yiclearCommon.OnMessageEvent})}var l={img:"IMAGE",input:"IMAGE",audio:"MEDIA",video:"MEDIA",object:"OBJECT",frame:"SUBDOCUMENT",iframe:"SUBDOCUMENT",embed:"OBJECT"},a=!1,t=["docs.google.com"],r=Object.create(null),o=1,i=null,c=!1;void 0===window.contentPage&&d(),contentPage.onMessage.addListener(function(e,t,n){if("injectScripts"===e.type){if(n({applied:!0}),!p())return;M(e.scripts)}});function e(){if(p()){h();var e=navigator.userAgent.toLowerCase();if(-1<e.indexOf("firefox"),-1<e.indexOf("opera")||-1<e.indexOf("opr"),window!==window.top){var t=Math.max(document.documentElement.clientWidth,window.innerWidth||0),n=Math.max(document.documentElement.clientHeight,window.innerHeight||0);c=n*t<1e5}S(),w()}}function s(){return"("+function(){var e=document.currentScript,t=e&&e.parentNode;t&&t.removeChild(e)}.toString()+")();"}function u(e){if(e&&0!==e.length){e.unshift("try {"),e.push("} catch (ex) { console.error('Error executing Yiclear js: ' + ex); };"),e.push(s());var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.textContent=e.join("\r\n"),(document.head||document.documentElement).appendChild(t)}}function m(e){var t=e.src||e.data;return t&&0===t.indexOf("http")&&t!==e.baseURI?t:null}function f(e){var t=e.tagName.toLowerCase(),n=o++;return r[n]={element:e,src:e.src,tagName:t},n}function v(e){if(e){var t=r[e.requestId];if(t){delete r[e.requestId];var n=t.element;if(!0===e.collapse){var o=t.src;ElementCollapser.collapseElement(n,o,i)}ElementCollapser.unhideElement(n,i)}}}function g(e){if(e)for(var t=e.requests,n=0;n<t.length;n++){var o=t[n];v(o)}}function n(){var e=[];for(var t in l)for(var n=l[t],o=document.getElementsByTagName(t),r=0;r<o.length;r++){var a=o[r],i=m(a);if(i){var c=f(a);e.push({elementUrl:i,requestType:n,requestId:c,tagName:t})}}var s={type:"processShouldCollapseMany",requests:e,documentUrl:document.URL};d(),contentPage.sendMessage(s,g)}var p=function(){return document instanceof HTMLDocument||document instanceof XMLDocument&&document.createElement("div")instanceof HTMLDivElement},h=function(){if(function(){var e=window.location.protocol;return 0===e.indexOf("http")||0===e.indexOf("about:")}()&&!function(){var e=window.location.host;return-1!==e.indexOf("taobao.com")||-1!==e.indexOf("tmall.com")||-1!==e.indexOf("alipay.com")||-1!==e.indexOf("1688.com")||-1!==e.indexOf("dingtalk.com")}()){var e=function(){if(contentPage.isSafari)return!contentPage.isSafariContentBlockerEnabled;var e=navigator.userAgent.toLowerCase();if(0<=e.indexOf("firefox"))return!1;var t=e.indexOf("chrome/");if(t<0)return!1;var n=e.substring(t+7);return 45<=Number.parseInt(n.substring(0,n.indexOf(".")))}(),t=!contentPage.isSafari||!contentPage.isSafariContentBlockerEnabled;if(e||t){initPageMessageListener();var n="wrapper-script-"+Math.random().toString().substr(2),o="("+injectPageScriptAPI.toString()+")('"+n+"', "+e+", "+t+");";u([o])}}},w=function(){var e={type:"getSelectorsAndScripts",documentUrl:window.location.href,options:{filter:["selectors","scripts"],genericHide:c}};contentPage.sendMessage(e,b)},b=function(e){e&&!1!==e.requestFilterReady?(e.collapseAllElements?(E(e.selectors,e.useShadowDom),M(e.scripts),A()):(E(e.selectors,e.useShadowDom),M(e.scripts)),e&&e.selectors&&e.selectors.css&&0<e.selectors.css.length&&function(){if(window===window.top){var n=t.indexOf(document.domain)<0,o="iframe[src]:not([allowfullscreen])";n&&ElementCollapser.hideBySelector(o,null,i);function r(e){for(var t=[],n=0;n<e.length;n++)for(var o=e[n].addedNodes,r=0;r<o.length;r++){var a=o[r];"iframe"===a.localName&&t.push(a)}if(0<t.length)for(var i=t.length;i--;){var c=t[i];L(c),s.observe(c,d)}}function e(){for(var e=document.getElementsByTagName("iframe"),t=0;t<e.length;t++)L(e[t]);n&&ElementCollapser.unhideBySelector(o,i),document.body&&new MutationObserver(r).observe(document.body,{childList:!0,subtree:!0})}var s=new MutationObserver(function(e){for(var t=0;t<e.length;t++){var n=e[t].target;n&&L(n)}}),d={attributes:!0,attributeFilter:["src"]};0<=["interactive","complete"].indexOf(document.readyState)?e():document.addEventListener("DOMContentLoaded",e)}}(),"undefined"!=typeof CssHitsCounter&&"function"==typeof CssHitsCounter.count&&e&&e.selectors&&e.selectors.cssHitsCounterEnabled&&CssHitsCounter.count()):setTimeout(function(){w()},100)},E=function(e,t){e&&(x(e.css,t),C(e.extendedCss))},x=function(e,t){var n,o;if(e&&0!==e.length)for(var r=0;r<e.length;r++){var a=document.createElement("style");a.setAttribute("type","text/css"),n=a,o=e[r],t&&(o=o.replace(new RegExp("::content ","g"),"")),n.textContent=o,(document.head||document.documentElement).appendChild(a),O(a,t),y(a)}},C=function(e){e&&e.length&&new ExtendedCss(e.join("\n")).apply()},y=function(a){var e=window.MutationObserver||window.WebKitMutationObserver;e&&new e(function(e){for(var t=0;t<e.length;t++){var n=e[t];if(a.hasAttribute("mod")&&"inner"==a.getAttribute("mod")){a.removeAttribute("mod");break}a.setAttribute("mod","inner");var o=!1;if(0<n.removedNodes.length)for(var r=0;r<n.removedNodes.length;r++)o=!0,a.appendChild(n.removedNodes[r]);else n.oldValue&&(o=!0,a.textContent=n.oldValue);o||a.removeAttribute("mod")}}).observe(a,{childList:!0,characterData:!0,subtree:!0,characterDataOldValue:!0})},O=function(a,i){var e=window.MutationObserver||window.WebKitMutationObserver;if(e){var c=new e(function(e){for(var t=0;t<e.length;t++){var n=e[t],o=[].indexOf.call(e[t].removedNodes,a);if(-1!==o){var r=n.removedNodes[o];c.disconnect(),x([r.textContent],i);break}}});c.observe(a.parentNode,{childList:!0,characterData:!0})}},M=function(e){if(!a&&(a=!0,e&&0!==e.length)){for(var t=[],n=0;n<e.length;n++){var o=e[n];switch(o.scriptSource){case"local":case"remote":t.push(o.rule)}}if(0!==t.length){var r="text/xml"===document.contentType?document.createElementNS("http://www.w3.org/1999/xhtml","script"):document.createElement("script");t.unshift("try {"),t.push("} catch (ex) { console.error('Error executing yiclear js: ' + ex); }"),t.push(s()),r.textContent=t.join("\r\n"),(document.head||document.body||document.documentElement||document).appendChild(r)}}},S=function(){document.addEventListener("error",N,!0),document.addEventListener("load",N,!0)},N=function(e){var t=e.target,n=e.type,o=t.tagName.toLowerCase();n===("iframe"===o||"frame"===o||"embed"===o?"load":"error")&&("undefined"!=typeof sogouExplorer&&"Other"===sogouExplorer.loadTimes().navigationType||L(t))},L=function(e){var t=l[e.localName];if(t){var n=m(e);if(n){var o=f(e);!function(e){if("iframe"===e.localName||"frame"===e.localName||"embed"===e.localName){if(12e4<e.clientHeight*e.clientWidth)return;if(e.hasAttribute("allowfullscreen"))return}"embed"===e.localName&&"image/svg+xml"===e.type||ElementCollapser.hideElement(e,i)}(e);var r={type:"processShouldCollapse",elementUrl:n,documentUrl:document.URL,requestType:t,requestId:o};d(),contentPage.sendMessage(r,v)}}},A=function(){"complete"===document.readyState||"loaded"===document.readyState||"interactive"===document.readyState?n():document.addEventListener("DOMContentLoaded",n)},P=function(){!1===document.hidden&&(document.removeEventListener("visibilitychange",P),e())};contentPage.isSafari&&document.hidden?document.addEventListener("visibilitychange",P):e()}();