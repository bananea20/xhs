(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[9190,4821],{61015:function(t){t.exports=function(){"use strict";var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(i,a,n){var o,r=function(t,i,a){void 0===a&&(a={});var n=new Date(t),o=function(t,i){void 0===i&&(i={});var a=i.timeZoneName||"short",n=t+"|"+a,o=e[n];return o||(o=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:a}),e[n]=o),o}(i,a);return o.formatToParts(n)},s=function(e,i){for(var a=r(e,i),o=[],s=0;s<a.length;s+=1){var l=a[s],c=l.type,u=l.value,d=t[c];d>=0&&(o[d]=parseInt(u,10))}var f=o[3],m=24===f?0:f,h=o[0]+"-"+o[1]+"-"+o[2]+" "+m+":"+o[4]+":"+o[5]+":000",p=+e;return(n.utc(h).valueOf()-(p-=p%1e3))/6e4},l=a.prototype;l.tz=function(t,e){void 0===t&&(t=o);var i=this.utcOffset(),a=this.toDate(),r=a.toLocaleString("en-US",{timeZone:t}),s=Math.round((a-new Date(r))/1e3/60),l=n(r).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(e){var c=l.utcOffset();l=l.add(i-c,"minute")}return l.$x.$timezone=t,l},l.offsetName=function(t){var e=this.$x.$timezone||n.tz.guess(),i=r(this.valueOf(),e,{timeZoneName:t}).find((function(t){return"timezonename"===t.type.toLowerCase()}));return i&&i.value};var c=l.startOf;l.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return c.call(this,t,e);var i=n(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return c.call(i,t,e).tz(this.$x.$timezone,!0)},n.tz=function(t,e,i){var a=i&&e,r=i||e||o,l=s(+n(),r);if("string"!=typeof t)return n(t).tz(r);var c=function(t,e,i){var a=t-60*e*1e3,n=s(a,i);if(e===n)return[a,e];var o=s(a-=60*(n-e)*1e3,i);return n===o?[a,n]:[t-60*Math.min(n,o)*1e3,Math.max(n,o)]}(n.utc(t,a).valueOf(),l,r),u=c[0],d=c[1],f=n(u).utcOffset(d);return f.$x.$timezone=r,f},n.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},n.tz.setDefault=function(t){o=t}}}()},64471:function(t){t.exports=function(){"use strict";var t="minute",e=/[+-]\d\d(?::?\d\d)?/g,i=/([+-]|\d\d)/g;return function(a,n,o){var r=n.prototype;o.utc=function(t){return new n({date:t,utc:!0,args:arguments})},r.utc=function(e){var i=o(this.toDate(),{locale:this.$L,utc:!0});return e?i.add(this.utcOffset(),t):i},r.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var s=r.parse;r.parse=function(t){t.utc&&(this.$u=!0),this.$utils().u(t.$offset)||(this.$offset=t.$offset),s.call(this,t)};var l=r.init;r.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds()}else l.call(this)};var c=r.utcOffset;r.utcOffset=function(a,n){var o=this.$utils().u;if(o(a))return this.$u?0:o(this.$offset)?c.call(this):this.$offset;if("string"==typeof a&&(a=function(t){void 0===t&&(t="");var a=t.match(e);if(!a)return null;var n=(""+a[0]).match(i)||["-",0,0],o=n[0],r=60*+n[1]+ +n[2];return 0===r?0:"+"===o?r:-r}(a),null===a))return this;var r=Math.abs(a)<=16?60*a:a,s=this;if(n)return s.$offset=r,s.$u=0===a,s;if(0!==a){var l=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(s=this.local().add(r+l,t)).$offset=r,s.$x.$localOffset=l}else s=this.utc();return s};var u=r.format;r.format=function(t){var e=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return u.call(this,e)},r.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},r.isUTC=function(){return!!this.$u},r.toISOString=function(){return this.toDate().toISOString()},r.toString=function(){return this.toDate().toUTCString()};var d=r.toDate;r.toDate=function(t){return"s"===t&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():d.call(this)};var f=r.diff;r.diff=function(t,e,i){if(t&&this.$u===t.$u)return f.call(this,t,e,i);var a=this.local(),n=o(t).local();return f.call(a,n,e,i)}}}()},73337:(t,e,i)=>{"use strict";i.d(e,{Kn:()=>f,fN:()=>l,k$:()=>m,nI:()=>d});var a=i(74003),n=i(63477),o=i(80661),r=i.n(o),s=i(17904);const l=async t=>{try{if("location"===t)throw new Error("location error");const e=await s.hj.get(`${a.Hg}weather/city`,{location:t,lang:a.sM?"zh":"en"},{_delay:200,_single:!0});if(0===e.code&&e.data.list.length>0)return[null,e.data.list.map((t=>({...t,cid:t.id})))];throw e}catch(t){return["catch error"]}},c=t=>(t.updateTime=r()(t.updateTime).valueOf(),t.daily=t.daily.map((t=>{const e=(0,n.sG)(t.fxDate);return{...t,fxDateStr:a.sM?e.format("M月D ddd"):e.format("MMM D, ddd"),dateStr:e.format("ddd"),weekStr:a.sM?e.format("D日"):e.format("D"),tempMax:t.tempMax+"°",tempMin:t.tempMin+"°"}})),t),u=t=>(t.updateTime=r()(t.updateTime).valueOf(),t.hourly=t.hourly.map((t=>({...t,fxTimeStr:r()(t.fxTime).format("HH:mm"),temp:t.temp+"°",windScale:a.sM?t.windScale+"级":"级"+t.windScale,windSpeed:t.windSpeed+"km/h",humidity:t.humidity+"%",precip:t.precip+"mm"}))),t),d=async t=>{try{if("location"===t)throw new Error("location error");const e=await s.hj.get(`${a.Hg}weather/daily`,{location:t,lang:a.sM?"zh":"en"},{_delay:0});if(0===e.code)return[null,c(e.data)];throw e}catch(t){return["catch error"]}},f=async t=>{try{if("location"===t)throw new Error("location error");const e=await s.hj.get(`${a.Hg}weather/hourly`,{location:t,lang:a.sM?"zh":"en"},{_delay:0});if(0===e.code)return[null,u(e.data)];throw e}catch(t){return["catch error"]}},m=async()=>{try{const t=await s.hj.get(`${a.Hg}weather/location`,{},{_delay:0});if(0===t.code)return[null,t.data];throw t}catch(t){return["catch error"]}}},22854:(t,e,i)=>{"use strict";i.d(e,{C:()=>o});var a=i(29445),n=i(57268);const o=(t,e,i)=>{const o=(0,a.iH)(t);e.onChangeState=t=>{o.value={...t}};const r=(0,n.Fl)((()=>i?i[o.value.size]:null));return{propsState:o,HomeComp:r}}},5536:(t,e,i)=>{"use strict";i.d(e,{E2:()=>o,_K:()=>a,dA:()=>n});const a=t=>t>=10?(""+t).split("").map((t=>Number(t))):[0,t],n=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;const e=t.getHours(),i=t.getMinutes(),n=t.getSeconds();return[...a(e),...a(i),...a(n)]},o=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;const e=t.getFullYear(),i=t.getMonth()+1,n=t.getDate();return[...a(e),...a(i),...a(n)]}},79149:(t,e,i)=>{"use strict";i.d(e,{w:()=>a,x:()=>n});const a=[{name:"东京",id:"65E77",adm2:"东京",adm1:"东京都",country:"日本",tz:"Asia/Tokyo",utcOffset:"+09:00"},{name:"纽约",id:"1E98E",adm2:"纽约",adm1:"纽约",country:"美国",tz:"America/New_York",utcOffset:"-05:00"},{name:"巴黎",id:"7FA1",adm2:"巴黎",adm1:"法兰西岛大区",country:"法国",tz:"Europe/Paris",utcOffset:"+01:00"},{name:"莫斯科",id:"554F",adm2:"莫斯科",adm1:"莫斯科州",country:"俄罗斯",tz:"Europe/Moscow",utcOffset:"+03:00"}],n=[{name:"华盛顿",id:"CD397",adm2:"华盛顿",adm1:"哥伦比亚特区",country:"美国",tz:"America/New_York",utcOffset:"-05:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/United%20States%402x.png"},{name:"首尔",id:"485B3",adm2:"首尔",adm1:"首尔",country:"韩国",tz:"Asia/Seoul",utcOffset:"+09:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/South%20Korea%402x.png"},{name:"济州岛",id:"A254E",adm2:"济州特别自治道",adm1:"济州特别自治道",country:"韩国",tz:"Asia/Seoul",utcOffset:"+09:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/South%20Korea%402x.png"},{name:"罗马",id:"43336",adm2:"罗马",adm1:"拉齐奥",country:"意大利",tz:"Europe/Rome",utcOffset:"+01:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Italy%402x.png"},{name:"牛津",id:"9BAB9",adm2:"东南英格兰",adm1:"英格兰",country:"英国",tz:"Europe/London",utcOffset:"+00:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/United%20Kingdom%402x.png"},{name:"曼谷",id:"EDF82",adm2:"曼谷",adm1:"曼谷",country:"泰国",tz:"Asia/Bangkok",utcOffset:"+07:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Thailand%402x.png"},{name:"新加坡",id:"646E3",adm2:"新加坡",adm1:"新加坡",country:"新加坡",tz:"Asia/Singapore",utcOffset:"+08:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Singapore%402x.png"},{name:"普吉岛",id:"52FED",adm2:"普吉市",adm1:"普吉府",country:"泰国",tz:"Asia/Bangkok",utcOffset:"+07:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Thailand%402x.png"},{name:"剑桥",id:"739FB",adm2:"東英格蘭",adm1:"英格兰",country:"英国",tz:"Europe/London",utcOffset:"+00:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/United%20Kingdom%402x.png"},{name:"柏林",id:"52271",adm2:"柏林",adm1:"柏林",country:"德国",tz:"Europe/Berlin",utcOffset:"+01:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Germany%402x.png"},{name:"布拉迪斯拉发",id:"C3706",adm2:"布拉迪斯拉发",adm1:"布拉迪斯拉发",country:"斯洛伐克",tz:"Europe/Bratislava",utcOffset:"+01:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Slovakia%402x.png"},{name:"威尼斯",id:"575C9",adm2:"威尼斯",adm1:"威尼托",country:"意大利",tz:"Europe/Rome",utcOffset:"+01:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Italy%402x.png"},{name:"里约热内卢",id:"11188",adm2:"里约热内卢",adm1:"里约热内卢州",country:"巴西",tz:"America/Sao_Paulo",utcOffset:"-03:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Brazil%402x.png"},{name:"京都市",id:"BDA09",adm2:"京都市",adm1:"京都府",country:"日本",tz:"Asia/Tokyo",utcOffset:"+09:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Japan%402x.png"},{name:"斯德哥尔摩",id:"AF1CF",adm2:"斯德哥尔摩",adm1:"斯德哥尔摩",country:"瑞典",tz:"Europe/Stockholm",utcOffset:"+01:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Sweden%402x.png"},{name:"芭堤雅",id:"21810",adm2:"芭堤雅",adm1:"春武里府",country:"泰国",tz:"Asia/Bangkok",utcOffset:"+07:00",flag:"https://static.wetab.link/hitab/clock-widget/world/flag/Thailand%402x.png"}]},28570:(t,e,i)=>{"use strict";i.r(e),i.d(e,{mountHome:()=>d,widgetApp:()=>u});var a=i(29445),n=i(68398),o=i(57268),r=i(27845);const s=(0,o.aZ)({__name:"widget-wclock-home",props:{size:null,id:null},setup(t){const e=t,{HomeComp:i}=(0,r.kd)(e),{clickWidget:n}=(0,r.dd)();return(t,e)=>((0,o.wg)(),(0,o.iD)("section",{class:"contents cursor-pointer",onClick:e[0]||(e[0]=function(){return(0,a.SU)(n)&&(0,a.SU)(n)(...arguments)})},[((0,o.wg)(),(0,o.j4)((0,o.LL)((0,a.SU)(i))))]))}});var l=i(96755),c=i(75008);const u=(0,a.iH)(null),d=(t,e)=>{const i=(0,n.createApp)(s,e);return(0,c.f)(i),u.value=i,i.use(l.M),i.mount(t),u.value}},44821:(t,e,i)=>{"use strict";i.r(e),i.d(e,{useWorldClockStore:()=>p});var a=i(80661),n=i.n(a),o=i(64471),r=i.n(o),s=i(61015),l=i.n(s),c=i(84522),u=i(10435),d=i(79149),f=i(5536);n().extend(r()),n().extend(l());const m=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];let h;const p=(0,u.Q_)(c.BU.worldClock,{syncStorage:{watch:["cityList","is12Hour"]},syncCloud:{watch:["cityList","is12Hour"]},state:()=>({modalShow:!1,cityList:d.w,homeCityIndex:0,is12Hour:!1,now:n()(),flipping:!1,flipingTimer:null,dragId:""}),getters:{allCityData(){const t=[];return this.cityList.forEach((e=>{const i=this.now.tz(e.tz),a=i.hour(),n=a>12?a-12:a,o=this.is12Hour?n:a,r=i.minute(),s=i.second();t.push({...e,tag:i.hour()>=12?"PM":"AM",timeStr:this.is12Hour?i.format("hh:mm:ss"):i.format("HH:mm:ss"),dateStr:i.format("YYYY/MM/DD"),weekday:i.day(),weekStr:m[i.day()],hour:o,min:r,sec:s,timeNumberArr:[...(0,f._K)(o),...(0,f._K)(r),...(0,f._K)(s)]})})),t},homeCityData(){return this.allCityData[this.homeCityIndex]}},actions:{setModal(t){this.modalShow=t},setHomeIndex(t){this.homeCityIndex=t},setIs12Hour(t){this.is12Hour=t},onSwitchHomeData(t){if("pre"===t){if(0===this.homeCityIndex)return;this.homeCityIndex=this.homeCityIndex-1}else{if(this.homeCityIndex===this.cityList.length-1)return;this.homeCityIndex=this.homeCityIndex+1}},startTimer(){h&&clearTimeout(h),h=window.setTimeout((()=>{this.now=n()(),this.startTimer()}),1e3)},clearTimer(){h&&clearTimeout(h)},setCityList(t){this.cityList=t},setDragId(t){this.dragId=t},dragSort(t,e){if(t===e)return;const i=[...this.cityList],a=i.findIndex((t=>e===t.id)),n=i.findIndex((e=>t===e.id));-1!==a&&-1!==n&&(a>n?(i.splice(a+1,0,i[n]),i.splice(n,1)):(i.splice(a,0,i[n]),i.splice(n+1,1)),this.cityList=i,this.setFlipping(!0))},setFlipping(t){window.clearTimeout(this.flipingTimer),t&&(this.flipping=t,this.flipingTimer=window.setTimeout((()=>{this.flipping=!1}),200))}}})},27845:(t,e,i)=>{"use strict";i.d(e,{DS:()=>Y,dd:()=>F,UV:()=>E,kd:()=>A});var a=i(57268),n=i(94209),o=i(29445),r=i(68398),s=i(50340),l=i(77362);const c={class:"insert-shadow relative z-0 flex h-full w-full flex-col rounded-[var(--icon-home-radius)] bg-color-wclock-b1 bg-cover bg-no-repeat"},u={class:"absolute top-[24px] left-0 right-0 flex justify-between px-[24px] icon-m:top-[20px] icon-m:px-[20px] icon-s:top-[16px] icon-s:px-[16px]"},d={class:"flex w-full justify-center pt-[26px] icon-m:pt-[28px] icon-s:pt-[20px]"},f={class:"px-[24px] pt-[18px] leading-none icon-m:px-[20px] icon-m:pt-[18px] icon-s:px-[16px] icon-s:pt-[12px]"},m={class:"font-ali-65 text-[20px] text-color-wclock-t1 icon-m:text-[18px] icon-s:text-[16px]"},h={class:"mt-[12px] font-ali-55 text-[12px] text-color-wclock-t2"},p={class:"ml-[6px]"},g={class:"mt-[8px] font-ali-55 text-[12px] text-color-wclock-t3 icon-m:mt-[8px] icon-s:mt-[4px]"},w={class:"ml-[6px]"},x=(0,a.aZ)({__name:"wclock-medium",setup(t){const{homeCityData:e,homeCityIndex:i,allCityLength:x,onClickSwitch:y}=Y();return(t,v)=>((0,a.wg)(),(0,a.iD)("section",c,[(0,a._)("div",u,[(0,a._)("div",{class:(0,n.normalizeClass)(["expand-click flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[12px] text-color-white transition-[background]",[0===(0,o.SU)(i)?"bg-color-wclock-t3 text-opacity-40":"bg-color-wclock-t2 hover:bg-color-wclock-t1"]]),onClick:v[0]||(v[0]=(0,r.withModifiers)((t=>(0,o.SU)(y)("pre")),["stop"]))},[(0,a.Wm)(l.Z,{class:"rotate-180"})],2),(0,a._)("div",{class:(0,n.normalizeClass)(["expand-click flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[12px] text-color-white transition-[background]",[(0,o.SU)(i)===(0,o.SU)(x)-1?"bg-color-wclock-t3 text-opacity-40":"bg-color-wclock-t2 hover:bg-color-wclock-t1"]]),onClick:v[1]||(v[1]=(0,r.withModifiers)((t=>(0,o.SU)(y)("next")),["stop"]))},[(0,a.Wm)(l.Z)],2)]),(0,a._)("div",d,[(0,a.Wm)(s.Z,{class:"h-[104px] w-[104px] icon-m:h-[76px] icon-m:w-[76px] icon-s:h-[76px] icon-s:w-[76px]",hour:(0,o.SU)(e).hour,min:(0,o.SU)(e).min,sec:(0,o.SU)(e).sec},null,8,["hour","min","sec"])]),(0,a._)("div",f,[(0,a._)("div",m,(0,n.toDisplayString)((0,o.SU)(e).name),1),(0,a._)("div",h,[(0,a._)("span",null,(0,n.toDisplayString)((0,o.SU)(e).timeStr),1),(0,a._)("span",p,(0,n.toDisplayString)((0,o.SU)(e).tag),1)]),(0,a._)("div",g,[(0,a._)("span",null,(0,n.toDisplayString)((0,o.SU)(e).dateStr),1),(0,a._)("span",w,(0,n.toDisplayString)((0,o.SU)(e).weekStr),1)])])]))}});var y=i(76911);const v=(0,y.Z)(x,[["__scopeId","data-v-e75adae8"]]),S={class:"insert-shadow relative z-0 flex h-full w-full items-center justify-center rounded-[var(--icon-home-radius)] bg-color-wclock-b1 bg-cover bg-no-repeat"},k={class:"flex w-full min-w-[420px] px-[20px] icon-m:px-[12px] icon-s:px-[0]"},b={class:"flex flex-col items-center pt-[20px] leading-none"},C={class:"font-ali-65 text-[14px] text-color-wclock-t1"},D={class:"mt-[12px] font-ali-55 text-[12px] text-color-wclock-t2"},_={class:"ml-[6px]"},$={class:"mt-[4px] font-ali-55 text-[12px] text-color-wclock-t3 icon-m:mt-[4px] icon-s:mt-[4px]"},z={class:"ml-[6px]"},O=(0,a.aZ)({__name:"wclock-large",setup(t){const{allCityData:e}=Y();return(t,i)=>((0,a.wg)(),(0,a.iD)("section",S,[(0,a._)("div",k,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,o.SU)(e),((t,e)=>((0,a.wg)(),(0,a.iD)("div",{key:e,class:"flex w-full flex-col items-center justify-between"},[(0,a.Wm)(s.Z,{class:"h-[76px] w-[76px]",hour:t.hour,min:t.min,sec:t.sec},null,8,["hour","min","sec"]),(0,a._)("div",b,[(0,a._)("div",C,(0,n.toDisplayString)(t.name),1),(0,a._)("div",D,[(0,a._)("span",null,(0,n.toDisplayString)(t.timeStr),1),(0,a._)("span",_,(0,n.toDisplayString)(t.tag),1)]),(0,a._)("div",$,[(0,a._)("span",null,(0,n.toDisplayString)(t.dateStr),1),(0,a._)("span",z,(0,n.toDisplayString)(t.weekStr),1)])])])))),128))])]))}}),M=(0,y.Z)(O,[["__scopeId","data-v-7ef03ec4"]]);var H=i(28570),T=i(22854),I=i(44821),U=i(10435),L=i(73337),Z=i(82410);const A=t=>{const e={m:v,l:M};return(0,T.C)(t,H.widgetApp.value,e)},F=()=>{const t=(0,I.useWorldClockStore)();return{clickWidget:()=>{t.setModal(!0)},onCloseModal:()=>{t.setModal(!1)},show:(0,U.Jk)(t).modalShow}},Y=()=>{const t=(0,I.useWorldClockStore)(),e=(0,U.Jk)(t);return{onClickSwitch:function(e){t.onSwitchHomeData(e)},allCityLength:t.cityList.length,homeCityData:e.homeCityData,homeCityIndex:e.homeCityIndex,allCityData:e.allCityData}},E=()=>{const t=(0,I.useWorldClockStore)(),e=(0,U.Jk)(t),i=(0,o.iH)(!1),n=(0,o.iH)(""),r=(0,o.iH)([]),s=(0,o.iH)(),l=(0,o.iH)(!0);const c=(0,Z.Z)((async t=>{l.value=!0;const{value:e}=t.target;if(!e)return r.value=[],void(l.value=!1);const[i,a]=await(0,L.fN)(e);l.value=!1,r.value=!i&&a?a:[]}),50);return(0,a.YP)((()=>e.modalShow.value),(t=>{t&&(i.value=!1)})),{changeIs12Hour:function(e){t.setIs12Hour(e)},allCityData:e.allCityData,is12Hour:e.is12Hour,showSearch:i,onClickShowSearch:function(t){s.value=t,n.value="",r.value.length=0,i.value=!0},onClickHideSearch:function(){i.value=!1},searchKey:n,onInputSearchKey:c,onSelectResultItem:function(e){const a={name:e.name,id:e.id,adm1:e.adm1,adm2:e.adm2,country:e.country,tz:e.tz,utcOffset:e.utcOffset},o=[...t.cityList];if(o.findIndex((t=>t.id===a.id))>-1)return i.value=!1,n.value="",r.value=[],!1;const l=o.findIndex((t=>{var e;return t.id===(null===(e=s.value)||void 0===e?void 0:e.id)}));o[l]=a,t.setCityList(o),i.value=!1,n.value="",r.value=[]},searchResult:r,onClickClear:function(){n.value="",r.value.length=0},isLoading:l}}},77362:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var a=i(57268);const n={class:"icon-next h-[12px] w-[12px]"},o=[(0,a._)("svg",{viewBox:"0 0 12 12",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"},[(0,a._)("g",{id:"页面-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[(0,a._)("g",{id:"10.小组件-_-热搜",transform:"translate(-476.000000, -846.000000)"},[(0,a._)("g",{id:"larg_中图标模式",transform:"translate(40.000000, 832.000000)"},[(0,a._)("g",{id:"down_icon",transform:"translate(442.000000, 20.000000) rotate(-90.000000) translate(-442.000000, -20.000000) translate(436.000000, 14.000000)"},[(0,a._)("rect",{id:"矩形",fill:"#FFFFFF",opacity:"0",x:"0",y:"0",width:"12",height:"12"}),(0,a._)("path",{id:"路径-4",d:"M6.19991172,2.40002943 C6.53128257,1.95820163 7.15808392,1.86865858 7.59991172,2.20002943 C8.00775277,2.50591021 8.11542219,3.06351876 7.86894131,3.49500427 L7.79991172,3.60002943 L6.24991172,6.00002943 L7.79991172,8.40002943 C8.10579251,8.80787047 8.05302476,9.37332212 7.69558717,9.71853356 L7.59991172,9.80002943 C7.19207068,10.1059102 6.62661903,10.0531425 6.28140758,9.69570487 L6.19991172,9.60002943 L4.19991172,6.60002943 C3.95991172,6.28002943 3.93591172,5.85202943 4.12791172,5.51042943 L4.19991172,5.40002943 L6.19991172,2.40002943 Z",fill:"currentColor","fill-rule":"nonzero",transform:"translate(5.999941, 6.000029) rotate(-90.000000) translate(-5.999941, -6.000029) "})])])])])],-1)];const r={},s=(0,i(76911).Z)(r,[["render",function(t,e){return(0,a.wg)(),(0,a.iD)("section",n,o)}]])},50340:(t,e,i)=>{"use strict";i.d(e,{Z:()=>l});var a=i(57268),n=i(94209),o=i(29445);const r={class:"dial-bg relative flex h-full max-h-[200px] w-full max-w-[200px] items-center justify-center rounded-[50%] bg-cover bg-no-repeat"},s=(0,a.aZ)({__name:"clock-dial",props:{dot:{default:28},sec:{default:0},min:{default:0},hour:{default:0}},setup(t){const e=t,i=(0,a.Fl)((()=>(60*(e.hour>11?e.hour-12:e.hour)+e.min)/720*360));return(s,l)=>((0,a.wg)(),(0,a.iD)("section",r,[(0,a._)("div",{class:"dot-bg relative z-10 bg-cover bg-no-repeat",style:(0,n.normalizeStyle)({width:t.dot+"px",height:t.dot+"px"})},null,4),(0,a._)("div",{class:"h-hand-bg absolute inset-0 z-[3] bg-cover bg-no-repeat",style:(0,n.normalizeStyle)({transform:`rotate(${(0,o.SU)(i)}deg)`})},null,4),(0,a._)("div",{class:"min-hand-bg absolute inset-0 z-[3] bg-cover bg-no-repeat",style:(0,n.normalizeStyle)({transform:`rotate(${e.min/60*360}deg)`})},null,4),(0,a._)("div",{class:"sec-hand-bg absolute inset-0 z-[3] bg-cover bg-no-repeat",style:(0,n.normalizeStyle)({transform:`rotate(${e.sec/60*360}deg)`})},null,4)]))}});const l=(0,i(76911).Z)(s,[["__scopeId","data-v-0106b47c"]])}}]);