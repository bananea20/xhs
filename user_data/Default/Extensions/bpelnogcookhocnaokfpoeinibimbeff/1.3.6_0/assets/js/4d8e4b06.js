/*! For license information please see 4d8e4b06.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[7348,5143],{13409:(t,e,i)=>{i.d(e,{o7:()=>L,t4:()=>k,O9:()=>C,f8:()=>E,dJ:()=>j,zY:()=>A,hQ:()=>V,XM:()=>z,sy:()=>N,ST:()=>F});var a=i(994),s=i(80661),n=i.n(s),o=i(74003),r=i(63477),l=i(55332);let c;try{new EventTarget,c=!0}catch(t){c=!1}var h=c?EventTarget:class{constructor(){this.e={}}addEventListener(t,e,i=!1){this.t(t).push(e)}removeEventListener(t,e,i=!1){const a=this.t(t),s=a.indexOf(e);s>-1&&a.splice(s,1)}dispatchEvent(t){return t.target=this,Object.freeze(t),this.t(t.type).forEach((e=>e(t))),!0}t(t){return this.e[t]=this.e[t]||[]}};var g=c?Event:class{constructor(t){this.type=t}};class d extends g{constructor(t,e){super(t),this.newState=e.newState,this.oldState=e.oldState,this.originalEvent=e.originalEvent}}const u="active",p="passive",y="hidden",f="frozen",m="terminated",w="object"==typeof safari&&safari.pushNotification,v=["focus","blur","visibilitychange","freeze","resume","pageshow","onpageshow"in self?"pagehide":"unload"],b=t=>(t.preventDefault(),t.returnValue="Are you sure?"),x=[[u,p,y,m],[u,p,y,f],[y,p,u],[f,y],[f,u],[f,p]].map((t=>t.reduce(((t,e,i)=>(t[e]=i,t)),{}))),I=()=>document.visibilityState===y?y:document.hasFocus()?u:p;var D=new class extends h{constructor(){super();const t=I();this.s=t,this.i=[],this.a=this.a.bind(this),v.forEach((t=>addEventListener(t,this.a,!0))),w&&addEventListener("beforeunload",(t=>{this.n=setTimeout((()=>{t.defaultPrevented||t.returnValue.length>0||this.r(t,y)}),0)}))}get state(){return this.s}get pageWasDiscarded(){return document.wasDiscarded||!1}addUnsavedChanges(t){!this.i.indexOf(t)>-1&&(0===this.i.length&&addEventListener("beforeunload",b),this.i.push(t))}removeUnsavedChanges(t){const e=this.i.indexOf(t);e>-1&&(this.i.splice(e,1),0===this.i.length&&removeEventListener("beforeunload",b))}r(t,e){if(e!==this.s){const i=((t,e)=>{for(let i,a=0;i=x[a];++a){const a=i[t],s=i[e];if(a>=0&&s>=0&&s>a)return Object.keys(i).slice(a,s+1)}return[]})(this.s,e);for(let e=0;e<i.length-1;++e){const a=i[e],s=i[e+1];this.s=s,this.dispatchEvent(new d("statechange",{oldState:a,newState:s,originalEvent:t}))}}}a(t){switch(w&&clearTimeout(this.n),t.type){case"pageshow":case"resume":this.r(t,I());break;case"focus":this.r(t,u);break;case"blur":this.s===u&&this.r(t,I());break;case"pagehide":case"unload":this.r(t,t.persisted?f:m);break;case"visibilitychange":this.s!==f&&this.s!==m&&this.r(t,I());break;case"freeze":this.r(t,f)}}};const S=D,C={font:["rgba(248, 248, 248, 1)","rgba(28, 28, 30, 1)","rgba(58, 58, 60, 1)","rgba(95, 95, 99, 1)","rgba(142, 142, 147, 1)","rgba(176, 176, 182, 1)","rgba(199, 199, 204, 1)"],background:["rgba(248, 248, 248, 1)","rgba(58, 58, 60, 1)","rgba(28, 28, 30, 1)","rgba(244, 171, 18, 1)","rgba(74, 197, 92, 1)","rgba(35, 207, 168, 1)","rgba(67, 133, 241, 1)","rgba(56, 100, 255, 1)","rgba(118, 33, 249, 1)","rgba(224, 78, 150, 1)","rgba(224, 78, 78, 1)","rgba(253, 90, 90, 1)","rgba(183, 163, 150, 1)","rgba(171, 131, 131, 1)","rgba(182, 150, 135, 1)","rgba(109, 131, 95, 1)","rgba(125, 171, 136, 1)","rgba(158, 172, 175, 1)","rgba(103, 124, 170, 1)"]},M=["rgba(183, 163, 150, 1)","rgba(171, 131, 131, 1)","rgba(182, 150, 135, 1)","rgba(109, 131, 95, 1)","rgba(125, 171, 136, 1)","rgba(158, 172, 175, 1)","rgba(103, 124, 170, 1)"],A=()=>(0,a.Z)(M),k=Array(20).fill(0).map(((t,e)=>{const i=`${e+1}`.padStart(2,"0");return{bgImage:{large:`${o.c1}/widget-background/background${i}_larg.jpg`,medium:`${o.c1}/widget-background/background${i}_medium.jpg`,small:`${o.c1}/widget-background/background${i}_small.jpg`},thumbnail:`${o.c1}/widget-background/background${i}.jpg`}})),O=(t,e)=>{let i=!1;t.isLeapYear()&&1===t.month()&&29===t.date()&&(i=!0);let a=(0,r.sG)(t.format(`${e}-MM-DD`));return i&&!a.isLeapYear()&&(a=a.add(-1,"day")),a.valueOf()>=B.valueOf()||(a=(0,r.sG)(t.format(`${e+1}-MM-DD`)),i&&!a.isLeapYear()&&(a=a.add(-1,"day"))),a},P=t=>{const e=l.q7.fromDate(new Date(t)),i=l.q7.fromDate(new Date).getYear(),a=n()((0,r.EJ)({year:i,month:e.getMonth(),day:e.getDay()}));return a.valueOf()>=B.valueOf()?a:n()((0,r.EJ)({year:i+1,month:e.getMonth(),day:e.getDay()}))},T=t=>{if(t.date()>=B.date())return(0,r.sG)(`${B.year()}-${B.month()+1}-${Math.min(B.daysInMonth(),t.date())}`);const e=B.add(1,"month");return(0,r.sG)(`${e.year()}-${e.month()+1}-${Math.min(e.daysInMonth(),t.date())}`)},_=t=>{const e=l.q7.fromDate(new Date),i=l.q7.fromDate(new Date(t)),a=e.getDay(),s=i.getDay();if(s>=a)return n()((0,r.EJ)({year:e.getYear(),month:e.getMonth(),day:s}));const o=l.o7.fromYm(e.getYear(),e.getMonth()).next(1);return n()((0,r.EJ)({year:o.getYear(),month:o.getMonth(),day:s}))},F=t=>{const e=Date.now(),i=n()().endOf("day").valueOf()+1;return window.setTimeout((()=>{try{t(i),F(t)}catch(t){}}),i-e)},z=t=>{const e=Date.now(),i=n()().add(30,"minute").valueOf();return window.setTimeout((()=>{try{t(i),z(t)}catch(t){}}),i-e)},N=t=>{const e=Date.now(),i=n()().add(5,"minute").valueOf();return window.setTimeout((()=>{try{t(i),N(t)}catch(t){}}),i-e)};let B=n()().startOf("day"),U=B.year();F((()=>{B=n()(),U=B.year()}));const j=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"solar";if(!t)return 0;if(t>=B.valueOf())return n()(t).diff(B,"day");if("lunar"===e){return _(t).diff(B,"day")}const i=n()(t),a=T(i),s=a.diff(B,"day");return s},V=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"solar";if(!t)return 0;if(t>=B.valueOf())return n()(t).diff(B,"day");if("lunar"===e){return P(t).diff(B,"day")}const i=n()(t),a=O(i,U),s=a.diff(B,"day");return s},E=t=>{const e=Math.floor(t/86400);t-=86400*e;const i=Math.floor(t/3600)%24;t-=3600*i;const a=Math.floor(t/60)%60;return{d:e,h:i,m:a,s:(t-=60*a)%60}};class L{views=new Map;execTime=0;execTimer=null;isPageVisible=!0;setViewVisibleInterval(){0!==this.views.size?this.isPageVisible?this.isViewVisible?this.setInterval(this.interval):this.setInterval(this.intervalOnViewOut):this.setPageVisibleInterval():this.setInterval(0)}setPageVisibleInterval(){0!==this.views.size?this.isPageVisible?this.setViewVisibleInterval():this.setInterval(this.intervalOnPageHide):this.setInterval(0)}setInterval(t){if(this.execTimer&&window.clearTimeout(this.execTimer),t<=0)return;let e=t;this.execTime&&(e=t-(Date.now()-this.execTime),e<0&&(e=0)),this.execTimer=window.setTimeout((async()=>{await this.execFn(),this.setInterval(t)}),e)}watchPageStatus(){S.addEventListener("statechange",(t=>{"hidden"===t.newState?this.isPageVisible=!1:this.isPageVisible=!0,this.setPageVisibleInterval()}))}onChangeViewVisible(){let t=!1;this.views.forEach((e=>{t||(t=e)})),this.isViewVisible=t,this.setViewVisibleInterval()}initIo(){this.io=new IntersectionObserver((t=>{t.forEach((t=>{this.views.has(t.target)&&this.views.set(t.target,t.intersectionRatio>0)})),this.onChangeViewVisible()}),{threshold:[0]})}constructor(t,e){if(!e.interval)throw new Error("请设置间隔时间");this.interval=e.interval,this.intervalOnViewOut=e.intervalOnViewOut,this.intervalOnPageHide=e.intervalOnPageHide,this.execFn=async()=>{try{await t()}catch(t){}this.execTime=Date.now()},e.immediate&&this.execFn(),this.watchPageStatus(),this.initIo(),e.view&&this.addView(e.view)}addView(t){this.views.set(t,!1),this.io.observe(t)}removeView(t){this.views.delete(t),this.io.unobserve(t),this.onChangeViewVisible()}}},22854:(t,e,i)=>{i.d(e,{C:()=>n});var a=i(29445),s=i(57268);const n=(t,e,i)=>{const n=(0,a.iH)(t);e.onChangeState=t=>{n.value={...t}};const o=(0,s.Fl)((()=>i?i[n.value.size]:null));return{propsState:n,HomeComp:o}}},87348:(t,e,i)=>{i.r(e),i.d(e,{mountHome:()=>st,widgetApp:()=>at});var a=i(29445),s=i(68398),n=i(96755),o=i(57268),r=i(45143),l=i(94209);const c=(0,o.aZ)({__name:"pie-chart",props:{pieStyle:null,percent:null},setup(t){const e=t,i=(0,a.iH)(),s=(0,a.iH)(),n=(0,a.iH)(0);function r(){window.cancelAnimationFrame(i.value);const t=e.pieStyle.size+6,a=e.pieStyle.bgColor;var o=s.value,r=o.getContext("2d");const l=2*window.devicePixelRatio;if(o.height=t*l,o.width=t*l,r.scale(l,l),e.pieStyle.showPercent){r.font="700 16px sans-serif",r.fillStyle=a;var c=(e.percent||0).toFixed(0)+"",h=r.measureText(c);r.fillText(c,(t-h.width)/2-h.width/4,(t+h.width/2)/2),r.globalAlpha=.6,r.font="500 12px sans-serif";r.measureText("%"),r.fillText("%",(t-h.width)/2-h.width/4+h.width,(t+h.width/2)/2)}const g=t/2,d=t/2,u=t/2-4;r.globalAlpha=.3;const p=2*Math.PI-Math.PI/2;function y(t,e,i){r.beginPath(),r.arc(g,d,u,t,e,!1),r.lineWidth=8,r.strokeStyle=i,r.lineCap="round",r.stroke(),r.closePath()}y(-Math.PI/2,p,a),i.value=requestAnimationFrame((function t(){r.globalAlpha=1;const s=-Math.PI/2;let o=s;e.percent&&(n.value<e.percent?(n.value+=.5,n.value>e.percent&&(n.value=e.percent),o=2*Math.PI*n.value/100-Math.PI/2,y(s,o,a)):(n.value=e.percent,o=2*Math.PI*e.percent/100-Math.PI/2,y(s,o,a)),n.value!=e.percent&&(i.value=requestAnimationFrame(t)))}))}return(0,o.bv)((()=>{r()})),(0,o.Ah)((()=>{window.cancelAnimationFrame(i.value)})),(0,o.YP)((()=>e.pieStyle.bgColor),(()=>{r()})),(0,o.YP)((()=>e.percent),(()=>{r()})),(t,i)=>((0,o.wg)(),(0,o.iD)("canvas",{ref_key:"canvasRef",ref:s,style:(0,l.normalizeStyle)({height:e.pieStyle.size+"px",width:e.pieStyle.size+"px"})},null,4))}});var h=i(80661),g=i.n(h);const d=(0,o.aZ)({__name:"bar-chart",props:{barStyle:null,data:null},setup(t){const e=t,i=(0,a.iH)();function s(){const t=function(){let t=0;return e.data.map((e=>{t=Math.max(e.total,t)})),e.data.map((e=>({...e,percent:e.total/t})))}(),a=e.barStyle.width,s=e.barStyle.height,n=e.barStyle.defBarColor||"#10C591";var o=i.value,r=o.getContext("2d");const l=2*window.devicePixelRatio,c=o.height=s*l,h=(o.width=a*l,24*l),d=34*l,u=12*l;function p(t){const{ctx:e,x:i,y:a,width:s,height:n,radius:o,fillColor:r}=t;if(2*o>s||2*o>n)return!1;e.save(),e.translate(i,a),function(t){const{ctx:e,width:i,height:a,radius:s}=t;e.beginPath(0),e.arc(i-s,a-s,s,0,Math.PI/2),e.lineTo(s,a),e.arc(s,a-s,s,Math.PI/2,Math.PI),e.lineTo(0,s),e.arc(s,s,s,Math.PI,3*Math.PI/2),e.lineTo(i-s,0),e.arc(i-s,s,s,3*Math.PI/2,2*Math.PI),e.lineTo(i,a-s),e.closePath()}({ctx:e,width:s,height:n,radius:o}),e.fillStyle=r||"#000",e.fill(),e.restore()}((t,e)=>{const{ht:i,pad:a,bottomPad:s,step:n,ctx:o}=e;o.beginPath(),o.lineWidth=1,o.strokeStyle="#666";for(let e=0;e<t.length;e++){o.moveTo(a+e*n,i-s);const c=12*l;o.font=`500 ${c}px sans-serif`,o.fillStyle="#FFF";var r=t[e];o.fillText(r,e*n,i-2)}o.stroke(),o.closePath(),o.closePath()})(["一","二","三","四","五","六","日"],{ht:c,pad:22*l,bottomPad:h,step:d,ctx:r}),r.beginPath();for(let e=0;e<7;e++){var y,f;const i=(null===(y=t[e])||void 0===y?void 0:y.percent)||0,a=null===(f=t[e])||void 0===f?void 0:f.time,s=i*(c-1.57*h)+.1*(c-h);p({ctx:r,x:e*d,y:c-h-s,width:u,height:s,radius:u/2,fillColor:(0==g()().day()?7:g()().day())==a?"#FFF":n})}r.closePath()}return(0,o.YP)((()=>({bgColor:e.barStyle.bgColor,data:e.data})),(()=>{s()})),(0,o.bv)((()=>{s()})),(t,a)=>((0,o.wg)(),(0,o.iD)("canvas",{ref_key:"canvasRef",ref:i,style:(0,l.normalizeStyle)({height:e.barStyle.height+"px",width:e.barStyle.width+"px"})},null,4))}});var u=i(35367),p=i(37334);const y={class:"habit-bg relative h-full bg-cover bg-center bg-no-repeat font-ali-75 transition-[background,color]"},f={class:"content relative flex h-full flex-row p-[12px] leading-none text-[#27DBA7]"},m={class:"flex h-full flex-col justify-between p-[32px] icon-m:p-[12px] icon-s:p-[4px]"},w={class:"flex flex-row"},v={class:"mt-[-6px] h-max"},b=["src"],x={class:"flex flex-row items-end"},I={class:"pb-[3px] font-ali-75 text-[12px] leading-[12px]"},D={class:"mr-[1px] text-[24px] leading-[24px]"},S=(t=>((0,o.dD)("data-v-d37652c4"),t=t(),(0,o.Cn)(),t))((()=>(0,o._)("span",{class:"pb-[2px] font-ali-75 text-[12px] leading-[12px]"},"ml",-1))),C={class:"w-[320[px] ml-[24px] flex h-full flex-1 items-center justify-center rounded-[12px] bg-[#27DBA7] icon-m:w-[280px] icon-s:w-[260px]"},M=(0,o.aZ)({__name:"habit-home-large",setup(t){const e=(0,r.useHabitStore)();return(t,i)=>((0,o.wg)(),(0,o.iD)("section",y,[(0,o._)("div",f,[(0,o._)("div",m,[(0,o._)("div",w,[(0,o.Wm)(c,{"pie-style":{...(0,a.SU)(u.tn),bgColor:"#27DBA7",showPercent:!0,size:64},percent:100*((0,a.SU)(e).percent>(0,a.SU)(e).target?1:(0,a.SU)(e).percent/(0,a.SU)(e).target)},null,8,["pie-style","percent"]),(0,o._)("button",v,[(0,o._)("img",{class:"h-[28px] w-[28px] py-[8px] px-[8px]",src:(0,a.SU)(p)},null,8,b)])]),(0,o._)("div",x,[(0,o._)("span",I,(0,l.toDisplayString)("剩余"),1),(0,o._)("span",D,(0,l.toDisplayString)((0,a.SU)(e).surplus),1),S])]),(0,o._)("div",C,[(0,o.Wm)(d,{"bar-style":{...(0,a.SU)(u.yD),height:148,width:216},data:(0,a.SU)(e).historyOfWeek},null,8,["bar-style","data"])])])]))}});var A=i(76911);const k=(0,A.Z)(M,[["__scopeId","data-v-d37652c4"]]);var O=i(45911);const P=t=>((0,o.dD)("data-v-c8fc8292"),t=t(),(0,o.Cn)(),t),T={class:"habit-bg relative h-full bg-cover bg-center bg-no-repeat transition-[background,color]"},_={class:"content relative flex h-full flex-col justify-between p-[24px] font-ali-55 leading-none text-[#27DBA7] icon-m:p-[20px] icon-s:p-[16px]"},F={class:"flex flex-row items-center justify-start"},z={class:"h-[40px] pl-[24px] icon-m:pl-[20px] icon-s:pl-[24px]"},N={class:"flex flex-row items-center font-ali-65 text-[12px] leading-[17px]"},B={class:"font-ali-75 text-[24px] leading-[24px]"},U=P((()=>(0,o._)("span",{class:"ml-[4px] text-[12px] leading-[12px]"},"ml",-1))),j={class:"mt-[58px] flex flex-wrap gap-[8px] text-[#FFF] icon-m:mt-[34px] icon-s:mt-[18px]"},V=["onClick"],E={class:"font-ali-75 text-[16px] leading-[16px]"},L=P((()=>(0,o._)("span",{class:"ml-[1px] text-[12px] leading-[12px]"},"ml",-1))),W=(0,o.aZ)({__name:"habit-home-medium",setup(t){const e=(0,r.useHabitStore)(),i=(0,O.Z)((t=>{e.drinking({capacity:t,category:u.MV.water})}),500,{leading:!0,trailing:!1});return(t,n)=>((0,o.wg)(),(0,o.iD)("section",T,[(0,o._)("div",_,[(0,o._)("div",F,[(0,o.Wm)(c,{"pie-style":{...(0,a.SU)(u.tn),bgColor:"#27DBA7"},percent:(0,a.SU)(e).percent/(0,a.SU)(e).target*100},null,8,["pie-style","percent"]),(0,o._)("div",z,[(0,o._)("p",N,(0,l.toDisplayString)("今日剩余"),1),(0,o._)("span",B,(0,l.toDisplayString)((0,a.SU)(e).surplus),1),U])]),(0,o._)("div",j,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)([180,250,350,480],((t,e)=>(0,o._)("div",{key:t+"_"+e,class:"history-item relative flex flex-row items-baseline justify-center rounded-[8px] p-[12px]",onClick:(0,s.withModifiers)((e=>(0,a.SU)(i)(t)),["stop"])},[(0,o._)("span",E,(0,l.toDisplayString)(t),1),L],8,V))),64))])])]))}}),G=(0,A.Z)(W,[["__scopeId","data-v-c8fc8292"]]),Z={class:"relative h-full bg-[#27DBA7] bg-cover bg-center bg-no-repeat transition-[background,color]"},H={class:"content relative flex h-full flex-row items-center px-[24px] py-[19px] font-ali-65 leading-none icon-m:px-[16px] icon-m:py-[11px] icon-s:px-[10px] icon-s:py-[5px]"},Y={class:"pl-[16px] text-[#FFF]"},Q={class:"font-ali-75 text-[24px] leading-[24px]"},$=(0,o._)("span",{class:"ml-[4px] text-[12px] leading-[12px]"},"ml",-1),R={class:"flex flex-row items-center text-[12px] leading-[17px]"},J={class:"py-[4px] px-[8px]"},K=["src"],q=(0,o.aZ)({__name:"habit-home-small",setup(t){const e=(0,r.useHabitStore)();return(t,i)=>((0,o.wg)(),(0,o.iD)("section",Z,[(0,o._)("div",H,[(0,o.Wm)(c,{"pie-style":{...(0,a.SU)(u.tn),bgColor:"#FFF"},percent:(0,a.SU)(e).percent/(0,a.SU)(e).target*100},null,8,["pie-style","percent"]),(0,o._)("div",Y,[(0,o._)("span",Q,(0,l.toDisplayString)((0,a.SU)(e).surplus),1),$,(0,o._)("div",R,[(0,o.Uk)((0,l.toDisplayString)("剩余")+" ",1),(0,o._)("button",J,[(0,o._)("img",{class:"h-[12px] w-[12px] rounded-[4px] bg-color-white",src:(0,a.SU)(p)},null,8,K)])])])])]))}});var X=i(22854),tt=i(13409);const et=(0,o.aZ)({__name:"widget-habit-home",props:{size:null,widgetData:null,id:null,targetType:null},setup(t){const e=t,i={s:q,m:G,l:k},{HomeComp:s,propsState:n}=(0,X.C)(e,at.value,i),l=(0,r.useHabitStore)(),c=()=>{const t=l.target?"edit":"preview-list"===n.value.targetType?"preview":"edit";l.openModal({size:n.value.size,openType:t,editId:n.value.id})};return(0,tt.ST)((()=>{l.check()})),(t,e)=>((0,o.wg)(),(0,o.iD)("section",{class:"contents cursor-pointer",onClick:c},[((0,o.wg)(),(0,o.j4)((0,o.LL)((0,a.SU)(s)),{state:(0,a.SU)(n).widgetData},null,8,["state"]))]))}});var it=i(75008);const at=(0,a.iH)(null),st=(t,e)=>{const i=(0,s.createApp)(et,e);return(0,it.f)(i),at.value=i,i.use(n.M),i.mount(t),at.value}},45143:(t,e,i)=>{i.r(e),i.d(e,{useHabitStore:()=>d,widgetInfo:()=>g});var a=i(10435),s=i(35367),n=i(24581),o=i(84522),r=i(12793),l=i(80661),c=i.n(l),h=i(94119);const g=(0,n.E0)(n.Rm.habit),d=(0,a.Q_)(o.BU.habit,{syncCloud:{watch:["modalState","curDate","target","percent","surplus","historyOfDay","historyOfWeek","historyOfMonth","markType"]},syncStorage:{watch:["modalState","curDate","target","percent","surplus","historyOfDay","historyOfWeek","historyOfMonth","markType"]},state:()=>({modalShow:!1,modalState:{size:"s",openType:"add",editId:""},...s.VO}),getters:{getStatisticalData(){let t=[];const e=this.curTimeDimension;switch(e){case s.G.week:t=this.historyOfWeek;break;case s.G.month:t=this.historyOfMonth}let i=0,a=0,n=0,o=0;const r={};t.map((t=>{t.target&&(o+=1),i+=t.total,t.done&&(a+=1);const e=t.category||{},s=Object.keys(e);for(const t of s)r[t]=(r[t]||0)+(e[t]||0)})),i&&o&&(n=Math.round(i/o));const l=[{icon:"sum_icon",title:"总数",iconBgColor:"#A69ECF",unit:i>1e3?"L":"ml",value:i>1e3?(i/1e3).toFixed(2):i},{icon:"average_icon",title:"平均",iconBgColor:"#DAB99E",unit:n>1e3?"L":"ml",value:n>1e3?(n/1e3).toFixed(2):n},{icon:"week_icon",title:e===s.G.week?"本周达标":"本月达标",iconBgColor:"#96AEC6",unit:"天",value:a},{icon:"continuous_icon",title:"记录天数",iconBgColor:"#83BEA9",unit:"天",value:o}],c=Object.keys(r);for(const t of c){const e=s.Sr.find((e=>e.type==t)),i=r[t]||0;i>0&&l.push({...e,title:null==e?void 0:e.name,unit:i>1e3?"L":"ml",value:i>1e3?(i/1e3).toFixed(2):i})}return l},getHistoryOfDayList(){const t={};this.historyOfDay.map((e=>{const i=c()(e.time).hour();t[i]=(t[i]||0)+e.num}));return[...Array(24)].map(((e,i)=>({time:i,value:t[i]||0})))}},actions:{openModal(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.modalState=t,this.setModal(!0),this.onlyShowGuidePageTwo=e},setModal(t){h.G.setStatus(n.Rm.habit,t),this.modalShow=t,t||(this.setShowMenuModal(!1),this.setAddPopupShow(!1))},setCurTimeDimension(t){this.curTimeDimension=t},setAddPopupShow(t){this.addPopupShow=t},setShowMenuModal(t){this.menuModalShow=t},setTarget(t){this.target=t,this.setSurplus(t-this.percent),this.updateHistroy({num:0,type:s.MV.water,time:Date.now()})},setPercent(t){this.curDate=Date.now(),this.percent=t,this.setSurplus(this.target-t)},setSurplus(t){this.surplus=t<0?0:t},updateHistroy(t){t.num&&this.addHistoryOfDay(t),this.updateHistoryOfWeek(t),this.updateHistoryOfMonth(t)},updateHistoryOfWeek(t){let e=c()().day();e=0==e?7:e;const i=this.percent,a=this.target,s=t.type,n=t.num;if(0==this.historyOfWeek.length){const n=0==e?7:e;for(let e=1;e<n;e++)this.historyOfWeek.push({type:"week",target:0,time:e,done:!1,total:0,category:{[s]:t.num}});this.historyOfWeek.push({type:"week",target:a,time:e,done:i>=a,total:i,category:{[s]:t.num}});for(let e=n+1;e<=7;e++)this.historyOfWeek.push({type:"week",target:0,time:7==e?0:e,done:!1,total:0,category:{[s]:t.num}})}else{const t=this.historyOfWeek.findIndex((t=>t.time==e));t>-1&&(this.historyOfWeek[t].target=a,this.historyOfWeek[t].done=i>=a,this.historyOfWeek[t].total=i,this.historyOfWeek[t].category[s]=(this.historyOfWeek[t].category[s]||0)+n)}},updateHistoryOfMonth(t){const e=c()().date(),i=this.percent,a=this.target,s=t.type,n=t.num;if(0==this.historyOfMonth.length){for(let i=1;i<e;i++)this.historyOfMonth.push({type:"month",target:0,time:i,done:!1,total:0,category:{[s]:t.num}});this.historyOfMonth.push({type:"month",target:a,time:e,done:i>=a,total:i,category:{[s]:t.num}});for(let i=e+1;i<=c()().daysInMonth();i++)this.historyOfMonth.push({type:"month",target:0,time:i,done:!1,total:0,category:{[s]:t.num}})}else{const t=this.historyOfMonth.findIndex((t=>t.time==e));t>-1&&(this.historyOfMonth[t].target=a,this.historyOfMonth[t].done=i>=a,this.historyOfMonth[t].total=i,this.historyOfMonth[t].category[s]=(this.historyOfMonth[t].category[s]||0)+n)}},getDrinksCategory:t=>s.Sr.find((e=>e.type===t)),getCategoryIcon(t){const e=this.getDrinksCategory(t);return null==e?void 0:e.icon},getCategoryIconBg(t){const e=this.getDrinksCategory(t);return null==e?void 0:e.iconBgColor},getCategoryName(t){const e=this.getDrinksCategory(t);return null==e?void 0:e.name},addHistoryOfDay(t){this.historyOfDay.unshift(t)},check(){if(c()().isAfter(this.curDate,"month")){const t=[];for(let e=1;e<=c()().daysInMonth();e++)t.push({type:"month",target:0,time:e,done:!1,total:0,category:{[s.MV.water]:0}});this.historyOfMonth=t||[]}if(c()().isAfter(this.curDate,"week")){const t=[];for(let e=1;e<=7;e++)t.push({type:"week",target:0,time:e,done:!1,total:0,category:{[s.MV.water]:0}});this.historyOfWeek=t||[]}c()().isAfter(this.curDate,"day")&&(this.setPercent(0),this.historyOfDay=[])},drinking(t){this.target&&(this.check(),this.setPercent(this.percent+t.capacity),this.updateHistroy({num:t.capacity,type:t.category,time:Date.now()}))},setMarkType(t){this.markType=t},saveWidgetData(){if(this.onlyShowGuidePageTwo)return;const t=(0,r.i)();"add"===this.modalState.openType||"preview"===this.modalState.openType?t.saveIcon({type:"widget",name:g.title,widgetSize:this.modalState.size,widgetName:g.name,origin:"add",widgetData:{...this.$state,target:this.target}}):"edit"===this.modalState.openType&&t.saveWidgetData(this.modalState.editId,this.$state)}}})},35367:(t,e,i)=>{let a;i.d(e,{G:()=>n,MV:()=>a,Sr:()=>s,VO:()=>c,tn:()=>r,yD:()=>l,zo:()=>o}),function(t){t.water="Water",t.coffee="Coffee",t.juice="Juice",t.soup="Soup",t.milk="Milk",t.fizzy="Fizzy",t.tea="Tea"}(a||(a={}));const s=[{icon:"coffee_icon",type:a.coffee,iconBgColor:"#87472C",fontColor:"#9E7261",name:"咖啡"},{icon:"tea_icon",type:a.tea,iconBgColor:"#61AD32",fontColor:"#65A656",name:"茶"},{icon:"fizzy_drink_icon",type:a.fizzy,iconBgColor:"#D4875C",fontColor:"#D4875C",name:"气泡水"},{icon:"milk_icon",type:a.milk,iconBgColor:"#81BDFF",fontColor:"#4A7AFF",name:"牛奶"},{icon:"soup_icon",type:a.soup,iconBgColor:"#FF7D46",fontColor:"#D4875C",name:"汤"},{icon:"juice_icon",type:a.juice,iconBgColor:"#BCCE3D",fontColor:"#BCCE3D",name:"果汁"},{icon:"water_icon",type:a.water,iconBgColor:"#27DBA7",fontColor:"#27DBA7",name:"水"}];let n;!function(t){t.day="d",t.week="w",t.month="m"}(n||(n={}));const o=[{label:"日",value:n.day},{label:"周",value:n.week},{label:"月",value:n.month}],r={bgColor:"#FFFFFF",size:44,showPercent:!1},l={height:150,width:280,bgColor:"#27DBA7",fontColor:"#FFFFFF",defBarColor:"#10C591",checkeBarColor:"#FFFFFF"},c={target:0,curDate:0,percent:0,surplus:0,historyOfDay:[],historyOfWeek:[],historyOfMonth:[],markType:"men",curTimeDimension:n.day,addPopupShow:!1,menuModalShow:!1,onlyShowGuidePageTwo:!1}},37334:t=>{t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTJweCIgaGVpZ2h0PSIxMnB4IiB2aWV3Qm94PSIwIDAgMTIgMTIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+5re75YqgPC90aXRsZT4KICAgIDxnIGlkPSLpobXpnaItMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9Ijku5bCP57uE5Lu2LV8t5Lmg5oOv5YW75oiQIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg0LjAwMDAwMCwgLTI1NS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9InNtYWxsX+Wkp+Wbvuagh+aooeW8jyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDAuMDAwMDAwLCAyMDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i5re75YqgIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDQuMDAwMDAwLCA1NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0i55+p5b2iIiBmaWxsPSIjRkZGRkZGIiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTIiIGhlaWdodD0iMTIiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNiwyIEM2LjU1MjI4NDc1LDIgNywyLjQ0NzcxNTI1IDcsMyBMNyw1IEw5LDUgQzkuNTUyMjg0NzUsNSAxMCw1LjQ0NzcxNTI1IDEwLDYgQzEwLDYuNTUyMjg0NzUgOS41NTIyODQ3NSw3IDksNyBMNyw3IEw3LDkgQzcsOS41NTIyODQ3NSA2LjU1MjI4NDc1LDEwIDYsMTAgQzUuNDQ3NzE1MjUsMTAgNSw5LjU1MjI4NDc1IDUsOSBMNSw3IEwzLDcgQzIuNDQ3NzE1MjUsNyAyLDYuNTUyMjg0NzUgMiw2IEMyLDUuNDQ3NzE1MjUgMi40NDc3MTUyNSw1IDMsNSBMNSw1IEw1LDMgQzUsMi40NDc3MTUyNSA1LjQ0NzcxNTI1LDIgNiwyIFoiIGlkPSLlvaLnirbnu5PlkIgiIGZpbGw9IiMyRkU1QjAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"}}]);