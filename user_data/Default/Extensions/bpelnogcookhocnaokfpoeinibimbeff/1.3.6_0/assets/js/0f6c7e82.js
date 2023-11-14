"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[7352],{58832:(l,t,e)=>{e.r(t),e.d(t,{mountHome:()=>x,widgetApp:()=>f});var o=e(29445),i=e(68398),s=e(57268),n=e(81293),a=e(13409);const c=(0,e(39621).useStockStore)(),r=new a.o7((()=>{c.reqStocksPrice()}),{immediate:!1,interval:5e3,intervalOnPageHide:0,intervalOnViewOut:12e5});var p=e(6395),u=e(74003);const v=(0,s.aZ)({__name:"widget-stock-home",props:{size:null,id:null},setup(l){const t=l,{HomeComp:e,propsState:i}=(0,n.fq)(t),{clickWidget:a}=(0,n.dd)(),c=(0,o.iH)();return(0,s.bv)((()=>{c.value&&r.addView(c.value)})),(0,s.Jd)((()=>{r.removeView(c.value)})),(l,t)=>((0,s.wg)(),(0,s.iD)("section",{class:"contents cursor-pointer",onClick:t[0]||(t[0]=function(){return(0,o.SU)(a)&&(0,o.SU)(a)(...arguments)})},[(0,o.SU)(u.Pl)?((0,s.wg)(),(0,s.j4)(p.Z,{key:0,size:(0,o.SU)(i).size,"tip-icon":"https://static.wetab.link/hitab/tip-icon/stock.png",class:"insert-shadow bg-color-b3 text-color-t3","btn-cls":"text-color-white bg-[#3A3A3C]"},null,8,["size"])):((0,s.wg)(),(0,s.iD)("div",{key:1,ref_key:"componentView",ref:c,class:"h-full w-full"},[((0,s.wg)(),(0,s.j4)((0,s.LL)((0,o.SU)(e))))],512))]))}});var d=e(96755),m=e(75008);const f=(0,o.iH)(null),x=(l,t)=>{const e=(0,i.createApp)(v,t);return(0,m.f)(e),f.value=e,e.use(d.M),e.mount(l),f.value}},81293:(l,t,e)=>{e.d(t,{DS:()=>Z,st:()=>J,dd:()=>L,UV:()=>V,fq:()=>R});var o=e(57268),i=e(94209),s=e(29445),n=e(68398);const a={class:"relative flex h-full flex-row items-center justify-between bg-color-b3 px-[16px] leading-none icon-m:px-[12px] icon-s:px-[12px]"},c={class:"flex-1 overflow-hidden pr-[5px]"},r={class:"text-dot font-ali-75 text-[16px] text-color-t1"},p={class:"mt-[4px] text-[12px] text-color-t3"},u={class:"flex flex-col"},v={class:"flex justify-end font-ali-75 text-[14px] text-color-t2"},d=(0,o.aZ)({__name:"stock-small",setup(l){const{firstData:t,stockColor:e}=Z();return(l,d)=>{var m,f,x,g,h,S,w,y,k,D,b,_,C,U;return(0,o.wg)(),(0,o.iD)("section",a,[(0,o._)("div",c,[(0,o._)("h2",r,(0,i.toDisplayString)(null===(m=(0,s.SU)(t))||void 0===m?void 0:m.Name),1),(0,o._)("p",p,(0,i.toDisplayString)(null===(f=(0,s.SU)(t))||void 0===f?void 0:f.SecurityTypeName)+" "+(0,i.toDisplayString)(null===(x=(0,s.SU)(t))||void 0===x?void 0:x.Code),1)]),(0,o._)("div",u,[(0,o._)("h3",v,(0,i.toDisplayString)(null===(g=(0,s.SU)(t))||void 0===g||null===(h=g.hq)||void 0===h?void 0:h.f2),1),(0,o._)("div",{class:"mt-[7px] flex justify-end font-ali-65 text-[12px]",style:(0,i.normalizeStyle)({color:(0,s.SU)(e)(null===(S=(0,s.SU)(t))||void 0===S?void 0:S.trend)})},[(0,o._)("span",null,(0,i.toDisplayString)("up"===(null===(w=(0,s.SU)(t))||void 0===w?void 0:w.trend)?"+":null)+(0,i.toDisplayString)(null===(y=(0,s.SU)(t))||void 0===y||null===(k=y.hq)||void 0===k?void 0:k.f4),1),(0,o.wy)((0,o._)("span",{class:"ml-[6px]"},(0,i.toDisplayString)("up"===(null===(D=(0,s.SU)(t))||void 0===D?void 0:D.trend)?"+":null)+(0,i.toDisplayString)(null===(b=(0,s.SU)(t))||void 0===b||null===(_=b.hq)||void 0===_?void 0:_.f3)+"% ",513),[[n.vShow,null===(C=(0,s.SU)(t))||void 0===C||null===(U=C.hq)||void 0===U?void 0:U.f3]])],4)])])}}}),m={class:"relative flex h-full flex-col bg-color-b3"},f={class:"p-[20px] pb-[0px] leading-none icon-m:p-[16px] icon-m:pb-[0px] icon-s:p-[12px] icon-s:pb-[0px]"},x={class:"flex items-start justify-between"},g={class:"flex flex-1 flex-shrink-0 flex-col overflow-hidden pr-[10px]"},h={class:"text-dot font-ali-75 text-[16px] text-color-t1"},S={class:"mt-[10px] font-ali-55 text-[12px] text-color-t3"},w={class:"flex-1 p-[20px] icon-m:p-[16px] icon-s:p-[12px]"},y={class:"flex h-full flex-col justify-between rounded-[12px] bg-color-b4 pt-[12px] icon-m:pt-[10px] icon-s:pt-[9px]"},k={class:"flex justify-center pb-[12px] font-ali-75 text-[28px] text-color-t2 icon-m:pb-[8px] icon-s:pb-[4px]"},D=(0,o.aZ)({__name:"stock-medium",setup(l){const{firstData:t,stockColor:e,chartRef:a}=Z();return(l,c)=>{var r,p,u,v,d,D,b,_,C,U,j,F,N;return(0,o.wg)(),(0,o.iD)("section",m,[(0,o._)("div",f,[(0,o._)("div",x,[(0,o._)("div",g,[(0,o._)("span",h,(0,i.toDisplayString)(null===(r=(0,s.SU)(t))||void 0===r?void 0:r.Name),1),(0,o._)("p",S,(0,i.toDisplayString)(null===(p=(0,s.SU)(t))||void 0===p?void 0:p.SecurityTypeName)+" "+(0,i.toDisplayString)(null===(u=(0,s.SU)(t))||void 0===u?void 0:u.Code),1)]),(0,o._)("div",{class:"flex justify-end font-ali-65 text-[14px] icon-m:flex-col icon-s:flex-col",style:(0,i.normalizeStyle)({color:(0,s.SU)(e)(null===(v=(0,s.SU)(t))||void 0===v?void 0:v.trend)})},[(0,o._)("span",null,(0,i.toDisplayString)("up"===(null===(d=(0,s.SU)(t))||void 0===d?void 0:d.trend)?"+":null)+(0,i.toDisplayString)(null===(D=(0,s.SU)(t))||void 0===D||null===(b=D.hq)||void 0===b?void 0:b.f4),1),(0,o.wy)((0,o._)("span",{class:"ml-[6px] icon-m:ml-[0px] icon-m:mt-[10px] icon-s:ml-[0px] icon-s:mt-[10px]"},(0,i.toDisplayString)("up"===(null===(_=(0,s.SU)(t))||void 0===_?void 0:_.trend)?"+":null)+(0,i.toDisplayString)(null===(C=(0,s.SU)(t))||void 0===C||null===(U=C.hq)||void 0===U?void 0:U.f3)+"% ",513),[[n.vShow,null===(j=(0,s.SU)(t))||void 0===j||null===(F=j.hq)||void 0===F?void 0:F.f3]])],4)])]),(0,o._)("div",w,[(0,o._)("div",y,[(0,o._)("div",{ref_key:"chartRef",ref:a,class:"h-[50px] w-full overflow-hidden"},null,512),(0,o._)("div",k,[(0,o._)("span",null,(0,i.toDisplayString)(null===(N=(0,s.SU)(t).hq)||void 0===N?void 0:N.f2),1)])])])])}}});var b=e(38966);const _={class:"flex h-[50px] items-center justify-between leading-none icon-m:h-[60px] icon-s:h-[56px]"},C={class:"flex-1 flex-shrink-0 overflow-hidden pr-[16px]"},U={class:"text-dot font-ali-75 text-[16px] text-color-t1"},j={class:"mt-[4px] font-ali-55 text-[12px] text-color-t3"},F={class:"flex items-center"},N={class:"ml-[20px] w-[90px] icon-m:ml-[15px] icon-s:ml-[10px]"},H={class:"flex justify-end font-ali-75 text-[14px] leading-[16px] text-color-t2"},P=(0,o.aZ)({__name:"stock-home-item",props:{item:null},setup(l){const t=l,{stockColor:e}=J();let a;const c=(0,s.iH)();function r(){if(!c.value)return;const l=t.item.chartData;l&&(a?a.changeData(l):(a=new b.kL({container:c.value,autoFit:!0,height:20,width:100}),a.data(l),a.scale({value:{nice:!0}}),a.tooltip(!1),a.axis(!1),a.line().style({lineWidth:2,stroke:e(t.item.trend)}).position("time*value"),a.render()))}return(0,o.bv)((()=>{r()})),(0,o.YP)((()=>t.item.chartData),(()=>{r()}),{immediate:!0}),(0,o.YP)((()=>t.item.trend),(()=>{a.clear();const l=t.item.chartData;a.data(l),a.line().style({lineWidth:2,stroke:e(t.item.trend)}).position("time*value"),a.render()}),{immediate:!1}),(l,a)=>{var r,p,u,v,d;return(0,o.wg)(),(0,o.iD)("div",_,[(0,o._)("div",C,[(0,o._)("h2",U,(0,i.toDisplayString)(t.item.Name),1),(0,o._)("p",j,(0,i.toDisplayString)(t.item.SecurityTypeName)+" "+(0,i.toDisplayString)(t.item.Code),1)]),(0,o._)("div",F,[(0,o._)("div",{ref_key:"chartRef",ref:c,class:"h-[20px] w-[100px]"},null,512),(0,o._)("div",N,[(0,o._)("h2",H,(0,i.toDisplayString)(null===(r=t.item.hq)||void 0===r?void 0:r.f2),1),(0,o._)("div",{class:"mt-[4px] flex justify-end font-ali-65 text-[12px]",style:(0,i.normalizeStyle)({color:(0,s.SU)(e)(null===(p=t.item)||void 0===p?void 0:p.trend)})},[(0,o._)("span",null,(0,i.toDisplayString)("up"===t.item.trend?"+":null)+(0,i.toDisplayString)(null===(u=t.item.hq)||void 0===u?void 0:u.f4),1),(0,o.wy)((0,o._)("span",{class:"ml-[6px]"},(0,i.toDisplayString)("up"===t.item.trend?"+":null)+(0,i.toDisplayString)(null===(v=t.item.hq)||void 0===v?void 0:v.f3)+"% ",513),[[n.vShow,null===(d=t.item.hq)||void 0===d?void 0:d.f3]])],4)])])])}}}),q={class:"relative flex h-full flex-col overflow-hidden bg-color-b3 px-[24px] py-[18px] icon-m:py-[12px] icon-m:px-[20px] icon-s:py-[6px] icon-s:px-[16px]"},I=(0,o.aZ)({__name:"stock-large",setup(l){const{homeData:t}=J();return(l,e)=>((0,o.wg)(),(0,o.iD)("section",q,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,s.SU)(t),((l,t)=>((0,o.wg)(),(0,o.iD)("div",{key:l.QuoteID,class:(0,i.normalizeClass)(["border-b border-solid border-color-m2 border-opacity-5 last:border-0",[t>1?"icon-m:border-0 icon-s:border-0":""]])},[(0,o.Wm)(P,{item:l},null,8,["item"])],2)))),128))]))}});var z=e(58832),T=e(22854),E=e(39621),K=e(10435),Q=e(82410),W=e(78481),Y=e(17319),A=e(62659);const R=l=>{const t={s:d,m:D,l:I};return(0,T.C)(l,z.widgetApp.value,t)},L=()=>{const l=(0,E.useStockStore)();return{clickWidget:()=>{l.setModal(!0)},onCloseModal:()=>{l.setModal(!1)},show:(0,K.Jk)(l).modalShow}},Z=()=>{const l=(0,E.useStockStore)(),t=(0,K.Jk)(l),e=(0,s.iH)(),i=(0,o.Fl)((()=>l.fullStateFollowStocks[0]));let n;const a=l=>"up"===l?t.stockColor.value.up:t.stockColor.value.down,c=()=>{if(!e.value)return;const l=i.value.chartData;l&&(n?n.changeData(l):(n=new b.kL({container:e.value,autoFit:!0,height:50}),n.data(l),n.scale({value:{nice:!0}}),n.tooltip(!1),n.axis(!1),n.line().style({lineWidth:2,stroke:a(i.value.trend)}).position("time*value"),n.render()))};return(0,o.YP)((()=>A.EA.value),(()=>{n&&n.forceFit()})),(0,o.YP)((()=>i.value.trend),(()=>{if(n){const l=i.value.chartData;n.clear(),n.data(l),n.line().style({lineWidth:2,stroke:a(i.value.trend)}).position("time*value"),n.render()}})),(0,o.YP)((()=>i.value.chartData),(()=>{n&&c()})),(0,o.bv)((()=>{c()})),(0,o.YP)((()=>i.value.trend),(()=>{c()})),{stockColor:a,firstData:i,chartRef:e}},J=()=>{const l=(0,E.useStockStore)(),t=(0,K.Jk)(l);return{stockColor:l=>"up"===l?t.stockColor.value.up:t.stockColor.value.down,homeData:(0,o.Fl)((()=>t.fullStateFollowStocks.value.length>4?t.fullStateFollowStocks.value.slice(0,4):t.fullStateFollowStocks.value))}};function M(l){const t=(0,E.useStockStore)(),e=(0,K.Jk)(t),o=l.split(","),i=Number(o[8]),s=Number(o[2])>Number(o[1])?e.stockColor.value.up:e.stockColor.value.down;return{time:o[0],open:Number(o[1]),close:Number(o[2]),heigh:Number(o[3]),low:Number(o[4]),cjl:Number(o[5]),cje:Number(o[6]),zf:Number(o[7]),risePercent:i>0?"+"+o[8]:o[8],rise:i>0?"+"+o[9]:o[9],hs:Number(o[10]),color:s}}const V=()=>{const l=(0,E.useStockStore)(),t=(0,K.Jk)(l),e=(0,s.iH)(!1),i=(0,s.iH)([]),n=(0,s.iH)(t.fullStateFollowStocks.value[0]),a=(0,s.iH)(!0),c=(0,s.iH)(!1),r=(0,s.iH)(""),p=(0,s.iH)(!1);let u;const v=(0,s.iH)(),d=(0,s.iH)("分时");const m=(0,Q.Z)((async l=>{p.value=!1;const{value:t}=l.target;if(!t)return void(i.value=[]);const[e,o]=await(0,W.pg)(t);if(e||!o)return i.value=[],void(p.value=!0);p.value=!1;const s=o.map((l=>l.QuoteID)),[n,a]=await(0,W._)(s);if(n||!a)return;const c=o.map(((l,t)=>({...l,trend:a[t].f4>=0?"up":"down",hq:a[t]})));i.value=c}),800),f=l=>{e.value=!1,n.value.QuoteID!==l.QuoteID&&(n.value=l,d.value="分时",g(80,1))};async function x(){let l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:80,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const e=n.value.QuoteID,[o,i]=await(0,W.zu)({secid:e,lmt:l,klt:t});if(o||!i)return!1;const s=[];return i.forEach((l=>{s.push(M(l))})),s}async function g(){let l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:80,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(!v.value)return;const e=await x(l,t);e&&(u&&u.destroy(),u=new b.kL({container:v.value,autoFit:!0,width:604,height:320}),u.data(e),u.scale({open:{nice:!0,tickCount:0,range:[.1,.9]}}),u.tooltip({showTitle:!1,showCrosshairs:!0,showMarkers:!1,crosshairs:{type:"xy",follow:!0,line:{style:{lineDash:[2,2]}}},containerTpl:'<div class="g2-tooltip"><p class="g2-tooltip-title"></p><ul class="g2-tooltip-list"></ul></div>',itemTpl:'   \n            <ul class="g2-tooltip-list">\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">时间</span><span class="g2-tooltip-value">{time}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">价格</span><span class="g2-tooltip-value" style="color:{color}">{close}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">涨跌额</span><span class="g2-tooltip-value" style="color:{color}">{rise}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">涨跌幅</span><span class="g2-tooltip-value" style="color:{color}">{risePercent}%</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">成交量</span><span class="g2-tooltip-value">{cjl}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">成交额</span><span class="g2-tooltip-value">{cje}</span>\n              </li>\n            </ul>\n          '}),u.axis(!1),u.area().style({fill:"l(90) 0:#8499EF 0.6:#8499EF 1:#ffffff"}).position("time*open"),u.line().style({lineWidth:1,stroke:"#8499EF"}).position("time*open").tooltip("time*open*close*rise*risePercent*cjl*cje*color",((l,t,e,o,i,s,n,a)=>({time:l,open:t,close:e,rise:o,risePercent:i,cjl:s,cje:n,color:a}))),u.render())}const h=(0,o.Fl)((()=>!!t.followStocks.value.find((l=>l.QuoteID===n.value.QuoteID))));return(0,o.YP)((()=>t.modalShow.value),(l=>{l&&(0,o.Y3)((()=>{u||g(80,1),a.value&&(n.value=t.fullStateFollowStocks.value[0],a.value=!1)}))})),{followList:t.fullStateFollowStocks,stockColor:l=>"up"===l?t.stockColor.value.up:t.stockColor.value.down,onClickEdit:l=>{e.value=l},isEdit:e,onClickRemove:(o,i)=>{const s=[...t.followStocks.value];if(1===s.length)return Y.R.fail({message:"请至少保留一条数据"}),e.value=!1,!1;s.splice(o,1),i.QuoteID===n.value.QuoteID&&(n.value=s[0],d.value="分时",g(80,1)),l.setFollowStocks(s)},onInputSearchKey:m,isEmpty:p,searchResult:i,onClickSearchItem:function(l){c.value=!0,f(l)},currentStock:n,onSelectStock:f,kltArr:[{text:"分时",klt:1,lmt:80},{text:"5日",klt:5,lmt:250},{text:"日K",klt:101,lmt:60},{text:"周K",klt:102,lmt:60},{text:"月K",klt:103,lmt:60},{text:"1年",klt:101,lmt:250}],onSelectKlt:l=>{e.value=!1,d.value!==l.text&&(d.value=l.text,l.text.indexOf("K")>0?async function(){let l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:101;if(!v.value)return;const e=await x(l,t);if(!e)return;e.forEach((l=>{l.range=[l.open,l.close,l.heigh,l.low]})),u&&u.destroy(),u=new b.kL({container:v.value,autoFit:!0,width:604,height:320}),u.data(e),u.scale({time:{type:"timeCat"},range:{nice:!0,range:[.1,.9]},close:{nice:!0,range:[.1,.9]}}),u.axis("range",!1),u.tooltip({showTitle:!1,showCrosshairs:!0,showMarkers:!1,crosshairs:{type:"xy",follow:!0,line:{style:{lineDash:[2,2]}}},containerTpl:'<div class="g2-tooltip"><p class="g2-tooltip-title"></p><ul class="g2-tooltip-list"></ul></div>',itemTpl:'\n            <ul class="g2-tooltip-list">\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">时间</span><span class="g2-tooltip-value">{time}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">开盘</span><span class="g2-tooltip-value" style="color:{color}">{open}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">收盘</span><span class="g2-tooltip-value" style="color:{color}">{close}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">涨跌额</span><span class="g2-tooltip-value" style="color:{color}">{rise}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">涨跌幅</span><span class="g2-tooltip-value" style="color:{color}">{risePercent}%</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">最高价</span><span class="g2-tooltip-value">{heigh}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">最低价</span><span class="g2-tooltip-value">{low}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">成交量</span><span class="g2-tooltip-value">{cjl}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">成交额</span><span class="g2-tooltip-value">{cje}</span>\n              </li>\n              <li class="g2-tooltip-list-item">\n               <span class="g2-tooltip-name">换手率</span><span class="g2-tooltip-value">{hs}%</span>\n              </li>\n            </ul>\n          '}),u.legend(!1),u.axis("close",{label:{formatter:l=>{const t=parseFloat(l);return Number(t.toFixed(2))}}}),u.line().style({lineWidth:1,stroke:"#8499EF"}).position("time*close").tooltip("time*open*close*rise*risePercent*cjl*cje*color*heigh*low*zf*hs",((l,t,e,o,i,s,n,a,c,r,p,u)=>({time:l,open:t,close:e,rise:o,risePercent:i,cjl:s,cje:n,color:a,heigh:c,low:r,zf:p,hs:u}))),u.schema().color("color",(l=>l)).position("time*range").shape("candle"),u.render()}(l.lmt,l.klt):g(l.lmt,l.klt))},currentKlt:d,chartRef:v,searchKey:r,onClearSearchKey:()=>{r.value="",i.value=[],c.value=!1},onClickSearch:function(){e.value=!1},isInFollow:h,onClickAddToFollow:function(){const e=[...t.followStocks.value,n.value];l.setFollowStocks(e)},isSearch:c,onClickFollowItem:function(l){c.value=!1,f(l)}}}}}]);