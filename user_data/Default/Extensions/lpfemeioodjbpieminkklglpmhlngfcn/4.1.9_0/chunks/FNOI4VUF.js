import{a as R}from"./DJKLXMKD.js";import{c as x}from"./WUMYY75E.js";import{a as b}from"./42TZCCKB.js";import{a as I}from"./USLLVG5P.js";import{f as m}from"./UTGLRY7A.js";var P=m(b());var i=m(b());var y=class{async fetch(e,t,n){try{let r=n?.responseType||"text",a=await fetch(e,t);return{success:!0,message:"",data:await a[r]?.(),responseInfo:d(a)}}catch{return{success:!1,message:"",data:null}}}},L=new y,f=class{async findProxyTab(e){let t=await i.default.tabs.query({status:"complete"}),n=await Promise.all(t.map(async r=>{if(r.url&&r.url?.includes(e))return i.default.tabs.sendMessage(r.id,{id:x,event:"Requester_checkTabReady"}).catch(()=>{})}));for(let r=0;r<n.length;r++)if(n[r]?.data?.includes(e))return t[r]}waitForProxyTabReady(e){let t=R(async(n,r,a,o)=>{if(r==="Requester_proxyTabReady")return t(),e(o.tab),{success:!0,data:o.tab?.url}})}async createProxyTab(e){return new Promise(t=>{this.waitForProxyTabReady(t),i.default.tabs.create({url:e.startsWith("http")?e:`https://${e}`,pinned:!0,active:!1})})}async getProxyTab(e,t){return await this.findProxyTab(e)}async fetch(e,t,n){let{proxyTargetHost:r}=n||{},a=r;a||(a=new URL(e).host);let o=await this.getProxyTab(a);if(o&&o.id&&o.url){let u=o.id;return new Promise(l=>{let c=i.default.tabs.connect(u,{name:I()});c.onDisconnect.addListener(()=>{throw new DOMException("proxy fetch aborted","AbortError")}),t?.signal?.addEventListener("abort",()=>c.disconnect()),c.onMessage.addListener(function g(h){if(h.event==="Requester_targetTabFetchResponse"){let{success:F,message:O,data:M,responseInfo:v}=h.data;c.onMessage.removeListener(g),c.disconnect(),l({success:F,message:O,data:M,responseInfo:v})}});let p=e;if(o.url&&!T(e,o.url))try{let g=new URL(o.url);p=q(e,g.host)}catch{}c.postMessage({event:"Requester_targetTabFetch",data:{url:p,options:t,proxySettings:n}})})}else return L.fetch(e,t,n)}},w=new f;function d(s){return{ok:s.ok,redirected:s.redirected,status:s.status,statusText:s.statusText,type:s.type,url:s.url}}function H(s,e,t){return w.fetch(s,e,t)}function T(s,e){try{let t=new URL(s),n=new URL(e);return t.host===n.host}catch{return!1}}function q(s,e){try{let t=new URL(s);return t.host=e,t.toString()}catch{return s}}function V(){P.default.runtime.onConnect.addListener(s=>{let e=new AbortController;s.onDisconnect.addListener(()=>{e.abort()}),s.onMessage.addListener(async t=>{try{let{event:n,data:r}=t;if(n==="Requester_targetTabFetch"){let{url:a,options:o,proxySettings:u}=r,l=u?.responseType||"text",c=await fetch(a,{...o,signal:e.signal}),p=await c[l]?.();s.postMessage({event:"Requester_targetTabFetchResponse",data:{success:!0,message:"ok",data:p,responseInfo:d(c)}})}}catch(n){s.postMessage({event:"Requester_targetTabFetchResponse",data:{success:!1,message:n.message,data:null}})}})})}export{w as a,V as b,H as c};
