import{c as j}from"./UTGLRY7A.js";var _=j((T,N)=>{(function(d,x){if(typeof define=="function"&&define.amd)define("webextension-polyfill",["module"],x);else if(typeof T<"u")x(N);else{var f={exports:{}};x(f),d.browser=f.exports}})(typeof globalThis<"u"?globalThis:typeof self<"u"?self:T,function(d){"use strict";if(!globalThis.chrome?.runtime?.id)throw new Error("This script should only be loaded in a browser extension.");if(typeof globalThis.browser>"u"||Object.getPrototypeOf(globalThis.browser)!==Object.prototype){let x="The message port closed before a response was received.",f=l=>{let p={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(Object.keys(p).length===0)throw new Error("api-metadata.json has not been included in browser-polyfill");class v extends WeakMap{constructor(r,g=void 0){super(g),this.createItem=r}get(r){return this.has(r)||this.set(r,this.createItem(r)),super.get(r)}}let R=e=>e&&typeof e=="object"&&typeof e.then=="function",E=(e,r)=>(...g)=>{l.runtime.lastError?e.reject(new Error(l.runtime.lastError.message)):r.singleCallbackArg||g.length<=1&&r.singleCallbackArg!==!1?e.resolve(g[0]):e.resolve(g)},b=e=>e==1?"argument":"arguments",$=(e,r)=>function(n,...i){if(i.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${b(r.minArgs)} for ${e}(), got ${i.length}`);if(i.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${b(r.maxArgs)} for ${e}(), got ${i.length}`);return new Promise((a,t)=>{if(r.fallbackToNoCallback)try{n[e](...i,E({resolve:a,reject:t},r))}catch{n[e](...i),r.fallbackToNoCallback=!1,r.noCallback=!0,a()}else r.noCallback?(n[e](...i),a()):n[e](...i,E({resolve:a,reject:t},r))})},P=(e,r,g)=>new Proxy(r,{apply(n,i,a){return g.call(i,e,...a)}}),h=Function.call.bind(Object.prototype.hasOwnProperty),w=(e,r={},g={})=>{let n=Object.create(null),i={has(t,s){return s in e||s in n},get(t,s,A){if(s in n)return n[s];if(!(s in e))return;let m=e[s];if(typeof m=="function")if(typeof r[s]=="function")m=P(e,e[s],r[s]);else if(h(g,s)){let c=$(s,g[s]);m=P(e,e[s],c)}else m=m.bind(e);else if(typeof m=="object"&&m!==null&&(h(r,s)||h(g,s)))m=w(m,r[s],g[s]);else if(h(g,"*"))m=w(m,r[s],g["*"]);else return Object.defineProperty(n,s,{configurable:!0,enumerable:!0,get(){return e[s]},set(c){e[s]=c}}),m;return n[s]=m,m},set(t,s,A,m){return s in n?n[s]=A:e[s]=A,!0},defineProperty(t,s,A){return Reflect.defineProperty(n,s,A)},deleteProperty(t,s){return Reflect.deleteProperty(n,s)}},a=Object.create(e);return new Proxy(a,i)},k=e=>({addListener(r,g,...n){r.addListener(e.get(g),...n)},hasListener(r,g){return r.hasListener(e.get(g))},removeListener(r,g){r.removeListener(e.get(g))}}),F=new v(e=>typeof e!="function"?e:function(g){let n=w(g,{},{getContent:{minArgs:0,maxArgs:0}});e(n)}),S=new v(e=>typeof e!="function"?e:function(g,n,i){let a=!1,t,s=new Promise(u=>{t=function(o){a=!0,u(o)}}),A;try{A=e(g,n,t)}catch(u){A=Promise.reject(u)}let m=A!==!0&&R(A);if(A!==!0&&!m&&!a)return!1;let c=u=>{u.then(o=>{i(o)},o=>{let C;o&&(o instanceof Error||typeof o.message=="string")?C=o.message:C="An unexpected error occurred",i({__mozWebExtensionPolyfillReject__:!0,message:C})}).catch(o=>{})};return c(m?A:s),!0}),L=({reject:e,resolve:r},g)=>{l.runtime.lastError?l.runtime.lastError.message===x?r():e(new Error(l.runtime.lastError.message)):g&&g.__mozWebExtensionPolyfillReject__?e(new Error(g.message)):r(g)},M=(e,r,g,...n)=>{if(n.length<r.minArgs)throw new Error(`Expected at least ${r.minArgs} ${b(r.minArgs)} for ${e}(), got ${n.length}`);if(n.length>r.maxArgs)throw new Error(`Expected at most ${r.maxArgs} ${b(r.maxArgs)} for ${e}(), got ${n.length}`);return new Promise((i,a)=>{let t=L.bind(null,{resolve:i,reject:a});n.push(t),g.sendMessage(...n)})},O={devtools:{network:{onRequestFinished:k(F)}},runtime:{onMessage:k(S),onMessageExternal:k(S),sendMessage:M.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:M.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},y={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return p.privacy={network:{"*":y},services:{"*":y},websites:{"*":y}},w(l,O,p)};d.exports=f(chrome)}else d.exports=globalThis.browser})});export{_ as a};
