/*! For license information please see f173ab3e.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[335],{13409:(e,t,i)=>{i.d(t,{o7:()=>H,t4:()=>O,O9:()=>k,f8:()=>Y,dJ:()=>z,zY:()=>_,hQ:()=>j,XM:()=>C,sy:()=>U,ST:()=>$});var a=i(994),s=i(80661),r=i.n(s),n=i(74003),o=i(63477),l=i(55332);let c;try{new EventTarget,c=!0}catch(e){c=!1}var h=c?EventTarget:class{constructor(){this.e={}}addEventListener(e,t,i=!1){this.t(e).push(t)}removeEventListener(e,t,i=!1){const a=this.t(e),s=a.indexOf(t);s>-1&&a.splice(s,1)}dispatchEvent(e){return e.target=this,Object.freeze(e),this.t(e.type).forEach((t=>t(e))),!0}t(e){return this.e[e]=this.e[e]||[]}};var d=c?Event:class{constructor(e){this.type=e}};class g extends d{constructor(e,t){super(e),this.newState=t.newState,this.oldState=t.oldState,this.originalEvent=t.originalEvent}}const u="active",p="passive",b="hidden",f="frozen",x="terminated",m="object"==typeof safari&&safari.pushNotification,v=["focus","blur","visibilitychange","freeze","resume","pageshow","onpageshow"in self?"pagehide":"unload"],w=e=>(e.preventDefault(),e.returnValue="Are you sure?"),y=[[u,p,b,x],[u,p,b,f],[b,p,u],[f,b],[f,u],[f,p]].map((e=>e.reduce(((e,t,i)=>(e[t]=i,e)),{}))),S=()=>document.visibilityState===b?b:document.hasFocus()?u:p;var D=new class extends h{constructor(){super();const e=S();this.s=e,this.i=[],this.a=this.a.bind(this),v.forEach((e=>addEventListener(e,this.a,!0))),m&&addEventListener("beforeunload",(e=>{this.n=setTimeout((()=>{e.defaultPrevented||e.returnValue.length>0||this.r(e,b)}),0)}))}get state(){return this.s}get pageWasDiscarded(){return document.wasDiscarded||!1}addUnsavedChanges(e){!this.i.indexOf(e)>-1&&(0===this.i.length&&addEventListener("beforeunload",w),this.i.push(e))}removeUnsavedChanges(e){const t=this.i.indexOf(e);t>-1&&(this.i.splice(t,1),0===this.i.length&&removeEventListener("beforeunload",w))}r(e,t){if(t!==this.s){const i=((e,t)=>{for(let i,a=0;i=y[a];++a){const a=i[e],s=i[t];if(a>=0&&s>=0&&s>a)return Object.keys(i).slice(a,s+1)}return[]})(this.s,t);for(let t=0;t<i.length-1;++t){const a=i[t],s=i[t+1];this.s=s,this.dispatchEvent(new g("statechange",{oldState:a,newState:s,originalEvent:e}))}}}a(e){switch(m&&clearTimeout(this.n),e.type){case"pageshow":case"resume":this.r(e,S());break;case"focus":this.r(e,u);break;case"blur":this.s===u&&this.r(e,S());break;case"pagehide":case"unload":this.r(e,e.persisted?f:x);break;case"visibilitychange":this.s!==f&&this.s!==x&&this.r(e,S());break;case"freeze":this.r(e,f)}}};const F=D,k={font:["rgba(248, 248, 248, 1)","rgba(28, 28, 30, 1)","rgba(58, 58, 60, 1)","rgba(95, 95, 99, 1)","rgba(142, 142, 147, 1)","rgba(176, 176, 182, 1)","rgba(199, 199, 204, 1)"],background:["rgba(248, 248, 248, 1)","rgba(58, 58, 60, 1)","rgba(28, 28, 30, 1)","rgba(244, 171, 18, 1)","rgba(74, 197, 92, 1)","rgba(35, 207, 168, 1)","rgba(67, 133, 241, 1)","rgba(56, 100, 255, 1)","rgba(118, 33, 249, 1)","rgba(224, 78, 150, 1)","rgba(224, 78, 78, 1)","rgba(253, 90, 90, 1)","rgba(183, 163, 150, 1)","rgba(171, 131, 131, 1)","rgba(182, 150, 135, 1)","rgba(109, 131, 95, 1)","rgba(125, 171, 136, 1)","rgba(158, 172, 175, 1)","rgba(103, 124, 170, 1)"]},V=["rgba(183, 163, 150, 1)","rgba(171, 131, 131, 1)","rgba(182, 150, 135, 1)","rgba(109, 131, 95, 1)","rgba(125, 171, 136, 1)","rgba(158, 172, 175, 1)","rgba(103, 124, 170, 1)"],_=()=>(0,a.Z)(V),O=Array(20).fill(0).map(((e,t)=>{const i=`${t+1}`.padStart(2,"0");return{bgImage:{large:`${n.c1}/widget-background/background${i}_larg.jpg`,medium:`${n.c1}/widget-background/background${i}_medium.jpg`,small:`${n.c1}/widget-background/background${i}_small.jpg`},thumbnail:`${n.c1}/widget-background/background${i}.jpg`}})),E=(e,t)=>{let i=!1;e.isLeapYear()&&1===e.month()&&29===e.date()&&(i=!0);let a=(0,o.sG)(e.format(`${t}-MM-DD`));return i&&!a.isLeapYear()&&(a=a.add(-1,"day")),a.valueOf()>=P.valueOf()||(a=(0,o.sG)(e.format(`${t+1}-MM-DD`)),i&&!a.isLeapYear()&&(a=a.add(-1,"day"))),a},I=e=>{const t=l.q7.fromDate(new Date(e)),i=l.q7.fromDate(new Date).getYear(),a=r()((0,o.EJ)({year:i,month:t.getMonth(),day:t.getDay()}));return a.valueOf()>=P.valueOf()?a:r()((0,o.EJ)({year:i+1,month:t.getMonth(),day:t.getDay()}))},M=e=>{if(e.date()>=P.date())return(0,o.sG)(`${P.year()}-${P.month()+1}-${Math.min(P.daysInMonth(),e.date())}`);const t=P.add(1,"month");return(0,o.sG)(`${t.year()}-${t.month()+1}-${Math.min(t.daysInMonth(),e.date())}`)},T=e=>{const t=l.q7.fromDate(new Date),i=l.q7.fromDate(new Date(e)),a=t.getDay(),s=i.getDay();if(s>=a)return r()((0,o.EJ)({year:t.getYear(),month:t.getMonth(),day:s}));const n=l.o7.fromYm(t.getYear(),t.getMonth()).next(1);return r()((0,o.EJ)({year:n.getYear(),month:n.getMonth(),day:s}))},$=e=>{const t=Date.now(),i=r()().endOf("day").valueOf()+1;return window.setTimeout((()=>{try{e(i),$(e)}catch(e){}}),i-t)},C=e=>{const t=Date.now(),i=r()().add(30,"minute").valueOf();return window.setTimeout((()=>{try{e(i),C(e)}catch(e){}}),i-t)},U=e=>{const t=Date.now(),i=r()().add(5,"minute").valueOf();return window.setTimeout((()=>{try{e(i),U(e)}catch(e){}}),i-t)};let P=r()().startOf("day"),L=P.year();$((()=>{P=r()(),L=P.year()}));const z=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"solar";if(!e)return 0;if(e>=P.valueOf())return r()(e).diff(P,"day");if("lunar"===t){return T(e).diff(P,"day")}const i=r()(e),a=M(i),s=a.diff(P,"day");return s},j=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"solar";if(!e)return 0;if(e>=P.valueOf())return r()(e).diff(P,"day");if("lunar"===t){return I(e).diff(P,"day")}const i=r()(e),a=E(i,L),s=a.diff(P,"day");return s},Y=e=>{const t=Math.floor(e/86400);e-=86400*t;const i=Math.floor(e/3600)%24;e-=3600*i;const a=Math.floor(e/60)%60;return{d:t,h:i,m:a,s:(e-=60*a)%60}};class H{views=new Map;execTime=0;execTimer=null;isPageVisible=!0;setViewVisibleInterval(){0!==this.views.size?this.isPageVisible?this.isViewVisible?this.setInterval(this.interval):this.setInterval(this.intervalOnViewOut):this.setPageVisibleInterval():this.setInterval(0)}setPageVisibleInterval(){0!==this.views.size?this.isPageVisible?this.setViewVisibleInterval():this.setInterval(this.intervalOnPageHide):this.setInterval(0)}setInterval(e){if(this.execTimer&&window.clearTimeout(this.execTimer),e<=0)return;let t=e;this.execTime&&(t=e-(Date.now()-this.execTime),t<0&&(t=0)),this.execTimer=window.setTimeout((async()=>{await this.execFn(),this.setInterval(e)}),t)}watchPageStatus(){F.addEventListener("statechange",(e=>{"hidden"===e.newState?this.isPageVisible=!1:this.isPageVisible=!0,this.setPageVisibleInterval()}))}onChangeViewVisible(){let e=!1;this.views.forEach((t=>{e||(e=t)})),this.isViewVisible=e,this.setViewVisibleInterval()}initIo(){this.io=new IntersectionObserver((e=>{e.forEach((e=>{this.views.has(e.target)&&this.views.set(e.target,e.intersectionRatio>0)})),this.onChangeViewVisible()}),{threshold:[0]})}constructor(e,t){if(!t.interval)throw new Error("请设置间隔时间");this.interval=t.interval,this.intervalOnViewOut=t.intervalOnViewOut,this.intervalOnPageHide=t.intervalOnPageHide,this.execFn=async()=>{try{await e()}catch(e){}this.execTime=Date.now()},t.immediate&&this.execFn(),this.watchPageStatus(),this.initIo(),t.view&&this.addView(t.view)}addView(e){this.views.set(e,!1),this.io.observe(e)}removeView(e){this.views.delete(e),this.io.unobserve(e),this.onChangeViewVisible()}}},22854:(e,t,i)=>{i.d(t,{C:()=>r});var a=i(29445),s=i(57268);const r=(e,t,i)=>{const r=(0,a.iH)(e);t.onChangeState=e=>{r.value={...e}};const n=(0,s.Fl)((()=>i?i[r.value.size]:null));return{propsState:r,HomeComp:n}}},50335:(e,t,i)=>{i.r(t),i.d(t,{mountHome:()=>T,widgetApp:()=>M});var a=i(29445),s=i(68398),r=i(96755),n=i(57268),o=i(36501),l=i(94209),c=i(63477);const h={class:"content relative flex h-full flex-col items-center pt-[24px] pb-[40px] leading-none icon-m:pt-[16px] icon-m:pb-[20px] icon-s:pt-[12px] icon-s:pb-[19px]"},d={class:"pb-[34px] font-ali-55 text-[12px] font-[400] opacity-60 icon-m:pb-[26px] icon-s:pb-[24px]"},g={class:"flex flex-row items-baseline pb-[20px] font-ali-65 text-[#FFF]"},u={class:"text-[16px]"},p={class:"ml-[4px] text-[16px]"},b={class:"absolute bottom-[40px] flex flex-row items-center font-ali-55 text-[12px] text-[#FFF] opacity-60 icon-m:bottom-[20px] icon-s:bottom-[19px]"},f=(0,n._)("div",{class:"mr-[4px] h-[1px] w-[24px] bg-[#FFF]"},null,-1),x=(0,n._)("div",{class:"ml-[4px] h-[1px] w-[24px] bg-[#FFF]"},null,-1),m=(0,n.aZ)({__name:"celebrity-home-large",setup(e){const t=(0,o.useCelebrityStore)(),i=(0,n.Fl)((()=>({backgroundImage:`url(${(0,c.Em)(t.bgImage.large,"default",532)})`})));return(e,r)=>((0,n.wg)(),(0,n.iD)("section",{class:"relative h-full bg-cover bg-center bg-no-repeat px-[32px] text-color-white transition-[background,color] icon-m:px-[32px] icon-s:px-[20px]",style:(0,l.normalizeStyle)((0,a.SU)(i))},[(0,n._)("div",h,[(0,n._)("h1",d,(0,l.toDisplayString)("每日一言"),1),(0,n._)("div",g,[(0,n._)("span",u,(0,l.toDisplayString)((0,a.SU)(t).currentDate.date),1),(0,n._)("span",p,(0,l.toDisplayString)((0,a.SU)(t).currentDate.weekday),1)]),(0,n._)("div",{class:"max-h-[40px] overflow-y-scroll break-words text-center font-ali-55 text-[14px] font-[300] leading-[20px] tracking-[1px] text-[#FFF] scrollbar-none",onWheel:r[0]||(r[0]=(0,s.withModifiers)((()=>{}),["stop"]))},(0,l.toDisplayString)((0,a.SU)(t).words.hitokoto),33),(0,n._)("h1",b,[f,(0,n.Uk)(" "+(0,l.toDisplayString)((0,a.SU)(t).words.formWho)+" ",1),x])])],4))}}),v={class:"absolute top-[20px] flex w-full flex-row justify-center font-ali-55 text-[12px] font-[400] text-[#FFF] opacity-60 icon-m:top-[16px] icon-s:top-[12px]"},w={class:"content relative flex h-full flex-col items-center justify-center px-[20px] py-[40px] leading-none icon-m:px-[16px] icon-m:py-[35px] icon-s:px-[12px] icon-s:py-[30px]"},y={class:"flex flex-col items-center"},S={class:"invisible flex flex-row items-center text-[12px] text-[#FFF] opacity-60 icon-m:pr-[16px] icon-s:pr-[12px]"},D=(0,n._)("div",{class:"mr-[4px] h-[1px] w-[24px] bg-[#FFF] font-ali-55"},null,-1),F={class:"flex flex-row items-center self-end font-ali-55 text-[12px] text-[#FFF] opacity-60"},k=(0,n._)("div",{class:"mr-[4px] h-[1px] w-[24px] bg-[#FFF]"},null,-1),V=(0,n.aZ)({__name:"celebrity-home-medium",setup(e){const t=(0,o.useCelebrityStore)(),i=(0,n.Fl)((()=>({backgroundImage:`url(${(0,c.Em)(t.bgImage.medium,"default",236)})`})));return(e,r)=>((0,n.wg)(),(0,n.iD)("section",{class:"relative h-full bg-cover bg-center bg-no-repeat text-color-white transition-[background,color]",style:(0,l.normalizeStyle)((0,a.SU)(i))},[(0,n._)("h1",v,(0,l.toDisplayString)("每日一言"),1),(0,n._)("div",w,[(0,n._)("div",y,[(0,n._)("h1",S,[D,(0,n.Uk)(" "+(0,l.toDisplayString)((0,a.SU)(t).words.formWho),1)]),(0,n._)("div",{class:"mb-[12px] max-h-[80px] overflow-y-scroll break-words font-ali-55 text-[14px] font-[300] leading-[20px] tracking-[1px] text-[#FFF] scrollbar-none",onWheel:r[0]||(r[0]=(0,s.withModifiers)((()=>{}),["stop"]))},(0,l.toDisplayString)((0,a.SU)(t).words.hitokoto),33),(0,n._)("h1",F,[k,(0,n.Uk)(" "+(0,l.toDisplayString)((0,a.SU)(t).words.formWho),1)])])])],4))}});var _=i(22854),O=i(13409);const E=(0,n.aZ)({__name:"widget-celebrity-home",props:{size:null,widgetData:null,id:null},setup(e){const t=e,i={m:V,l:m},{HomeComp:s,propsState:r}=(0,_.C)(t,M.value,i),l=(0,o.useCelebrityStore)(),c=()=>{l.setModal(!0)};return(0,O.ST)((()=>{l.refreshWords()})),(e,t)=>((0,n.wg)(),(0,n.iD)("section",{class:"contents cursor-pointer",onClick:c},[((0,n.wg)(),(0,n.j4)((0,n.LL)((0,a.SU)(s)),{state:(0,a.SU)(r).widgetData},null,8,["state"]))]))}});var I=i(75008);const M=(0,a.iH)(null),T=(e,t)=>{const i=(0,s.createApp)(E,t);return(0,I.f)(i),M.value=i,i.use(r.M),i.mount(e),M.value}}}]);