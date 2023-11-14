"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[7009],{47009:(e,t,a)=>{a.r(t),a.d(t,{useCalcSpeedStore:()=>r});var n=a(57268),i=a(10435),u=a(14754);const r=(0,i.Q_)("calc-components-speed",{state:()=>({unitItemsArr:[{name:"米每秒",unit:"m/s",base:!0,calcBase:!0,value:1},{name:"千米/时",unit:"km/h",getValue:e=>(0,u.uf)(3.6*e),reverseValue:e=>(0,u.uf)(e/3.6)},{name:"千米/秒",unit:"km/s",getValue:e=>(0,u.uf)(.001*e),reverseValue:e=>(0,u.uf)(e/.001)},{name:"光速",unit:"c",getValue:e=>(0,u.uf)(3.3356e-9*e),reverseValue:e=>(0,u.uf)(e/3.3356e-9)},{name:"马赫",unit:"mach",getValue:e=>(0,u.uf)(.0029386*e),reverseValue:e=>(0,u.uf)(e/.0029386)},{name:"英里/时",unit:"mile/h",getValue:e=>(0,u.uf)(2.236936*e),reverseValue:e=>(0,u.uf)(e/2.236936)},{name:"英寸/秒",unit:"in/s",getValue:e=>(0,u.uf)(39.370079*e),reverseValue:e=>(0,u.uf)(e/39.370079)}]}),getters:{getAllUnits(){return this.unitItemsArr},getBaseUnit(){return this.unitItemsArr.find((e=>e.base))},getPanelList(){return this.unitItemsArr.filter((e=>!e.base))}},actions:{changeBaseUnit(e){this.unitItemsArr=(0,u.vZ)(e,this.unitItemsArr)},changeBaseValue(e){this.getBaseUnit.value=e},calcUnitsArr(){this.unitItemsArr=(0,u.UC)(this.unitItemsArr)}}});(0,n.YP)((()=>{var e;return null===(e=r().unitItemsArr.find((e=>e.base)))||void 0===e?void 0:e.value}),(()=>{r().calcUnitsArr()}),{immediate:!0}),(0,n.YP)((()=>{var e;return null===(e=r().unitItemsArr.find((e=>e.base)))||void 0===e?void 0:e.name}),(()=>{r().calcUnitsArr()}))},14754:(e,t,a)=>{a.d(t,{D:()=>f,Mb:()=>v,UC:()=>u,WS:()=>o,fS:()=>l,uf:()=>n,vZ:()=>i,zX:()=>r});const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;if(!e)return 0;const n=Math.floor(Math.log(Math.abs(e))/Math.LN10);if(Math.abs(n)<=t)return Number(e.toFixed(a));{const t=e*Math.pow(10,-n);return Number(t.toFixed(a))+"e"+(n>0?"+"+n:n)}},i=(e,t)=>{const a=[...t],n=a.find((e=>e.base)),i=a.find((t=>t.name===e.name));return n.base=!1,i.base=!0,i.value=n.value,a},u=e=>{const t=[...e],a=e.find((e=>e.calcBase)),n=e.find((e=>e.base));var i;a.base?t.map((e=>{var t;e.base||e.calcBase||(e.value=null===(t=e.getValue)||void 0===t?void 0:t.call(null,Number(a.value)))})):(a.value=null===(i=n.reverseValue)||void 0===i?void 0:i.call(null,Number(n.value)),t.map((e=>{var t;e.base||e.calcBase||(e.value=null===(t=e.getValue)||void 0===t?void 0:t.call(null,Number(a.value)))})));return t},r=(e,t)=>{const a=String(e).split("."),n=a[1].split("");let i=0;for(let e=0;e<a[1].length;e++)i+=n[e]*Math.pow(t,-1*(e+1));return parseInt(a[0],t)+i},l=e=>Number(e||0).toFixed(2).replace(/\d+/,(e=>e.replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"))),s=[{min:-1/0,max:36e3,rate:.03,deduction:0},{min:36e3,max:144e3,rate:.1,deduction:2520},{min:144e3,max:3e5,rate:.2,deduction:16920},{min:3e5,max:42e4,rate:.25,deduction:31920},{min:42e4,max:66e4,rate:.3,deduction:52920},{min:66e4,max:96e4,rate:.35,deduction:85920},{min:96e4,max:1/0,rate:.45,deduction:181920}],m=[{min:-1/0,max:3e3,rate:.03,deduction:0},{min:3e3,max:12e3,rate:.1,deduction:210},{min:12e3,max:25e3,rate:.2,deduction:1410},{min:25e3,max:35e3,rate:.25,deduction:2660},{min:35e3,max:55e3,rate:.3,deduction:4410},{min:55e3,max:8e4,rate:.35,deduction:7160},{min:8e4,max:1/0,rate:.45,deduction:15160}],d=[{min:-1/0,max:2e4,rate:.2,deduction:0},{min:2e4,max:5e4,rate:.3,deduction:2e3},{min:5e4,max:1/0,rate:.4,deduction:7e3}],c=(e,t)=>t.find((t=>e>t.min&&e<=t.max)),o=e=>c(e,s),v=e=>c(e,m),f=e=>c(e,d)}}]);