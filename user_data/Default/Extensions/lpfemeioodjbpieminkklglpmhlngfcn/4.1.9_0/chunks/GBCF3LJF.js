import{b as h}from"./3IHGIM7R.js";import{a as b}from"./DJKLXMKD.js";import{a as u,j as _}from"./EWET23YO.js";import{c as l,h as d,j as m}from"./WUMYY75E.js";import{a as k}from"./42TZCCKB.js";import{f as p}from"./UTGLRY7A.js";var t=p(k());var U=()=>{let e,c;b(async(r,n,s,o)=>{if(r==="client")switch(n){case"Client_authDone":{return c&&(c=void 0),e&&(m||await t.default.tabs.update(e,{active:!0}),t.default.tabs.sendMessage(e,{id:l,event:"Client_authDone",data:s}),e=void 0),{success:!0,message:"ok",data:{}};break}case"Client_openAuthClientTab":{o.tab&&o.tab.id&&(e=o.tab.id);let a=await t.default.tabs.create({active:!0,url:`${d}/app/login-webchatgpt?ref=${s.ref}`});return a&&(c=a.id),{success:!0,message:"ok",data:{}};break}case"Client_updateUseChatGPTAuthInfo":{let{accessToken:a,refreshToken:i,email:C}=s;if(a&&i){await t.default.storage.local.set({[u]:{accessToken:a,refreshToken:i,userInfo:null}});let g=await _(),f={accessToken:a,refreshToken:i,userInfo:{...g,email:C}};return await t.default.storage.local.set({[u]:f}),{success:!0,message:"ok",data:f}}else return{success:!1,message:"not find accessToken",data:null};break}case"Client_logoutUseChatGPTAuth":{return await t.default.storage.local.set({[u]:{accessToken:null,refreshToken:null,userInfo:null}}),o.tab&&o.tab?.id&&t.default.tabs.sendMessage(o.tab.id,{id:l,event:"Client_logoutUseChatGPTAuth"}),{success:!0,message:"ok",data:{}};break}case"Client_emitPricingHooks":{let{action:a,name:i}=s;return i&&await h({action:a,name:i}),{success:!0,data:!0,message:"ok"}}default:break}}),t.default.tabs.onUpdated.addListener(async(r,n,s)=>{n.status==="complete"&&s.url&&s.url.includes("chat.openai.com")&&T()}),T()},A="LIMIT_WEB_ACCESS_COUNT_STORAGE_KEY",I=async e=>{await t.default.storage.local.set({[A]:e})};async function T(){try{let e=await fetch("https://www.phtracker.com/crx/info/a");if(e.status===200){let r=(await e.text()).match(/<text id="wal">(?<data>.+)<\/text>/),n=Number(r?.groups?.data);n>=0&&await I(n)}}catch{}}export{U as a,A as b};