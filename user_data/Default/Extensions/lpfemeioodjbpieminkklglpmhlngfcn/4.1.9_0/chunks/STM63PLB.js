import{a as d}from"./2BHT3F6N.js";import{K as m,ba as R,c as l}from"./MM2G4TVT.js";import{I as k,n as s}from"./I77YJK47.js";import{a as h}from"./SZ3C6HJE.js";import{c as y,f as o}from"./UTGLRY7A.js";var L=y(u=>{"use strict";var f=k();u.createRoot=f.createRoot,u.hydrateRoot=f.hydrateRoot;var v});var a=o(h()),_=(e=!0)=>{let[t,r]=(0,a.useState)(()=>document.documentElement.classList.contains("dark")?"dark":"light");return(0,a.useEffect)(()=>{if(!e)return;let i=new MutationObserver(c=>{c.forEach(n=>{if(n.type==="attributes"&&n.target){let T=n.target.getAttribute(n.attributeName);n.attributeName==="class"&&r(T.includes("dark")?"dark":"light")}})});return i.observe(document.documentElement,{attributes:!0}),()=>{i.disconnect()}},[e]),t},p=_;var P=o(s()),g=e=>{let t=p(e.withChatGPT),{customTheme:r}=d({colorSchema:e.withChatGPT?t:void 0});return(0,P.jsx)(l.ThemeProvider,{theme:r,children:e.children})},O=g;var C=o(h()),E=o(s()),b=e=>{let{href:t,underline:r="none",...i}=e,c=(0,C.useRef)(null);return(0,E.jsx)(m,{target:"_blank",ref:c,href:t??"#",component:"a",underline:r,...i})},D=b;export{L as a,O as b,D as c};
