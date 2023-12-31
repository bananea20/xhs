"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[3453,9538],{99538:(e,a,u)=>{u.r(a),u.d(a,{useCalcLengthStore:()=>m});var t=u(74003),n=u(57268),i=u(10435),r=u(14754);const l=[{name:"公里",unit:"gongli",getValue:e=>(0,r.uf)(.001*e),reverseValue:e=>(0,r.uf)(e/.001)},{name:"里",unit:"li",getValue:e=>(0,r.uf)(.002*e),reverseValue:e=>(0,r.uf)(e/.002)},{name:"丈",unit:"zhang",getValue:e=>(0,r.uf)(.3*e),reverseValue:e=>(0,r.uf)(e/.3)},{name:"尺",unit:"chi",getValue:e=>(0,r.uf)(3*e),reverseValue:e=>(0,r.uf)(e/3)},{name:"寸",unit:"cun",getValue:e=>(0,r.uf)(30*e),reverseValue:e=>(0,r.uf)(e/30)},{name:"分",unit:"fen",getValue:e=>(0,r.uf)(300*e),reverseValue:e=>(0,r.uf)(e/300)},{name:"厘",unit:"li",getValue:e=>(0,r.uf)(3e3*e),reverseValue:e=>(0,r.uf)(e/3e3)},{name:"毫",unit:"hao",getValue:e=>(0,r.uf)(3e4*e),reverseValue:e=>(0,r.uf)(e/3e4)}],s=[{name:"米",unit:"m",base:!0,calcBase:!0,value:1},{name:"分米",unit:"dm",getValue:e=>(0,r.uf)(10*e),reverseValue:e=>(0,r.uf)(e/10)},{name:"厘米",unit:"cm",getValue:e=>(0,r.uf)(100*e),reverseValue:e=>(0,r.uf)(e/100)},{name:"毫米",unit:"mm",getValue:e=>(0,r.uf)(1e3*e),reverseValue:e=>(0,r.uf)(e/1e3)},{name:"微米",unit:"μm",getValue:e=>(0,r.uf)(1e3*e*1e3),reverseValue:e=>(0,r.uf)(e/1e3/1e3)},{name:"纳米",unit:"nm",getValue:e=>(0,r.uf)(1e3*e*1e3*1e3),reverseValue:e=>(0,r.uf)(e/1e3/1e3/1e3)},{name:"皮米",unit:"pm",getValue:e=>(0,r.uf)(1e3*e*1e3*1e3*1e3),reverseValue:e=>(0,r.uf)(e/1e3/1e3/1e3/1e3)},{name:"英寸",unit:"in",getValue:e=>(0,r.uf)(39.3700787*e),reverseValue:e=>(0,r.uf)(e/39.3700787)},{name:"密耳",unit:"mil",getValue:e=>(0,r.uf)(39370.0787402*e),reverseValue:e=>(0,r.uf)(e/39370.0787402)},{name:"英尺",unit:"ft",getValue:e=>(0,r.uf)(3.2808399*e),reverseValue:e=>(0,r.uf)(e/3.2808399)},{name:"码",unit:"yd",getValue:e=>(0,r.uf)(1.0936133*e),reverseValue:e=>(0,r.uf)(e/1.0936133)},{name:"英里",unit:"mi",getValue:e=>(0,r.uf)(6214e-7*e),reverseValue:e=>(0,r.uf)(e/6214e-7)},{name:"海里",unit:"nmi",getValue:e=>(0,r.uf)(54e-5*e),reverseValue:e=>(0,r.uf)(e/54e-5)},{name:"英寻",unit:"fm",getValue:e=>(0,r.uf)(.5468066*e),reverseValue:e=>(0,r.uf)(e/.5468066)},{name:"弗隆",unit:"fur",getValue:e=>(0,r.uf)(.004971*e),reverseValue:e=>(0,r.uf)(e/.004971)},{name:"光年",unit:"ly",getValue:e=>(0,r.uf)(1057e-19*e),reverseValue:e=>(0,r.uf)(e/1057e-19)},{name:"天文单位",unit:"au",getValue:e=>(0,r.uf)(66846e-16*e),reverseValue:e=>(0,r.uf)(e/66846e-16)}],m=(0,i.Q_)("calc-components-length",{state:()=>({unitItemsArr:t.sM?[...s,...l]:s}),getters:{getAllUnits(){return this.unitItemsArr},getBaseUnit(){return this.unitItemsArr.find((e=>e.base))},getPanelList(){return this.unitItemsArr.filter((e=>!e.base))},getCalcbase(){return this.unitItemsArr.find((e=>e.calcBase))}},actions:{changeBaseUnit(e){this.unitItemsArr=(0,r.vZ)(e,this.unitItemsArr)},changeBaseValue(e){this.getBaseUnit.value=e},calcUnitsArr(){this.unitItemsArr=(0,r.UC)(this.unitItemsArr)}}});(0,n.YP)((()=>{var e;return null===(e=m().unitItemsArr.find((e=>e.base)))||void 0===e?void 0:e.value}),(()=>{m().calcUnitsArr()}),{immediate:!0}),(0,n.YP)((()=>{var e;return null===(e=m().unitItemsArr.find((e=>e.base)))||void 0===e?void 0:e.name}),(()=>{m().calcUnitsArr()}))},33453:(e,a,u)=>{u.r(a),u.d(a,{useLengthPanel:()=>i});var t=u(10435),n=u(99538);const i=()=>{const e=(0,n.useCalcLengthStore)(),a=(0,t.Jk)(e);return{changeBaseUnit:a=>e.changeBaseUnit(a),changeBaseValue:a=>e.changeBaseValue(a),baseUnit:a.getBaseUnit,panelList:a.getPanelList}}},14754:(e,a,u)=>{u.d(a,{D:()=>v,Mb:()=>o,UC:()=>i,WS:()=>d,fS:()=>l,uf:()=>t,vZ:()=>n,zX:()=>r});const t=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;if(!e)return 0;const t=Math.floor(Math.log(Math.abs(e))/Math.LN10);if(Math.abs(t)<=a)return Number(e.toFixed(u));{const a=e*Math.pow(10,-t);return Number(a.toFixed(u))+"e"+(t>0?"+"+t:t)}},n=(e,a)=>{const u=[...a],t=u.find((e=>e.base)),n=u.find((a=>a.name===e.name));return t.base=!1,n.base=!0,n.value=t.value,u},i=e=>{const a=[...e],u=e.find((e=>e.calcBase)),t=e.find((e=>e.base));var n;u.base?a.map((e=>{var a;e.base||e.calcBase||(e.value=null===(a=e.getValue)||void 0===a?void 0:a.call(null,Number(u.value)))})):(u.value=null===(n=t.reverseValue)||void 0===n?void 0:n.call(null,Number(t.value)),a.map((e=>{var a;e.base||e.calcBase||(e.value=null===(a=e.getValue)||void 0===a?void 0:a.call(null,Number(u.value)))})));return a},r=(e,a)=>{const u=String(e).split("."),t=u[1].split("");let n=0;for(let e=0;e<u[1].length;e++)n+=t[e]*Math.pow(a,-1*(e+1));return parseInt(u[0],a)+n},l=e=>Number(e||0).toFixed(2).replace(/\d+/,(e=>e.replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"))),s=[{min:-1/0,max:36e3,rate:.03,deduction:0},{min:36e3,max:144e3,rate:.1,deduction:2520},{min:144e3,max:3e5,rate:.2,deduction:16920},{min:3e5,max:42e4,rate:.25,deduction:31920},{min:42e4,max:66e4,rate:.3,deduction:52920},{min:66e4,max:96e4,rate:.35,deduction:85920},{min:96e4,max:1/0,rate:.45,deduction:181920}],m=[{min:-1/0,max:3e3,rate:.03,deduction:0},{min:3e3,max:12e3,rate:.1,deduction:210},{min:12e3,max:25e3,rate:.2,deduction:1410},{min:25e3,max:35e3,rate:.25,deduction:2660},{min:35e3,max:55e3,rate:.3,deduction:4410},{min:55e3,max:8e4,rate:.35,deduction:7160},{min:8e4,max:1/0,rate:.45,deduction:15160}],f=[{min:-1/0,max:2e4,rate:.2,deduction:0},{min:2e4,max:5e4,rate:.3,deduction:2e3},{min:5e4,max:1/0,rate:.4,deduction:7e3}],c=(e,a)=>a.find((a=>e>a.min&&e<=a.max)),d=e=>c(e,s),o=e=>c(e,m),v=e=>c(e,f)}}]);