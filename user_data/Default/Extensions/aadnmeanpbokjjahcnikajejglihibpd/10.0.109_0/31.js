(window.webpackJsonp=window.webpackJsonp||[]).push([[31,35,39],{161:function(e,t,s){"use strict";s.r(t),s.d(t,"slave",(function(){return o}));s(8),s(11),s(13),s(41);var n=s(6),a=s.n(n),i=s(273),r=s(58);const o=new class{constructor(){if(this.channel=null,this.initResolve=[],this.initReject=[],this.messageScheduler=new i.a,this.initChannel=()=>{"serviceworker"===r.b?this.initServiceworker():"background"===r.b&&this.initBackground()},this.awaitChannel=()=>new a.a(async(e,t)=>{"serviceworker"===r.b?this.channel?(await this.channel.active,await this.channel.controlling,e(null)):(this.initResolve.push(e),this.initReject.push(t)):"background"===r.b&&e(null)}),this.initServiceworker=async()=>{try{const{createWorkBox:e}=await s.e(11).then(s.bind(null,565)),t=await e();if(!t)return;t.addEventListener("message",e=>{const{type:t,payload:s={}}=e.data;"master:bordcast-message"===t&&this.messageScheduler.execTask(s.type,s.payload)}),await t.active,await t.controlling,this.channel=t,this.initResolve.forEach(e=>{e()}),this.channel.postTask=this.channel.messageSW}catch(e){console.log("slave初始化错误：",e),this.initReject.forEach(e=>{e()})}},this.initBackground=()=>{this.channel={postTask:e=>new a.a((t,s)=>{chrome.runtime.sendMessage(e,e=>{chrome.runtime.lastError&&s(chrome.runtime.lastError),t(e)})})},chrome.runtime.onMessage.addListener(({type:e,payload:t,ignoreId:s})=>{"master:bordcast-message"===e?chrome.tabs.getCurrent(e=>{s!==e.id&&this.messageScheduler.execTask(t.type,t.payload)}):"slave:bordcast-message"===e&&this.messageScheduler.execTask(t.data.type,t.data.payload)})},r.a)throw new Error("it's not page");this.initChannel()}postTask(e,t,s){return new a.a(async(n,a)=>{let i=!1;await this.awaitChannel();const o=Object.assign(Object.assign(Object.assign({},r.d),{taskId:Object(r.c)()}),s);o.timeout&&setTimeout(()=>{i||n({error:"timeout"})},o.timeout);try{const s=await this.channel.postTask({type:e,payload:Object.assign({data:t},o)});i=!0,n(s)}catch(e){n({error:e})}})}listenMessage(e,t){this.messageScheduler.listenTask(e,t)}sendMessage(e,t=""){this.postTask("slave:bordcast-message",{type:e,payload:t})}}},273:function(e,t,s){"use strict";s.d(t,"a",(function(){return n}));s(11),s(13);class n{constructor(){this._events=new Map}listenTask(e,t){if("function"!=typeof t)return;this._events.has(e)||this._events.set(e,new Set);this._events.get(e).add(t)}execTask(e,t,...s){if(this._events.has(e)){const n=this._events.get(e);for(const e of n)e(t,...s)}}}},58:function(e,t,s){"use strict";s.d(t,"b",(function(){return n})),s.d(t,"a",(function(){return a})),s.d(t,"d",(function(){return i})),s.d(t,"c",(function(){return r}));s(21);const n=s(0).s?"serviceworker":"background";let a=!1;"background"===n?a="undefined"==typeof ServiceWorkerGlobalScope&&chrome.extension.getBackgroundPage()===window:"serviceworker"===n&&(a="undefined"!=typeof ServiceWorkerGlobalScope);const i={timeout:0,taskId:""},r=()=>(""+Date.now()/1e3/1e5).split(".")[1].substr(0,8)+(""+Math.random()).split(".")[1].substr(0,8).padEnd(8,"0")}}]);