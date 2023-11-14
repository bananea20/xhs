"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[1457],{73446:(e,t,o)=>{o.d(t,{K:()=>r});let a=100;const r=()=>a++},91774:(e,t,o)=>{o.d(t,{A:()=>l,B:()=>r});var a=o(48420);let r;!function(e){e.wallpaper="store-wallpaper",e.search="store-search",e.icon="store-icon",e.setting="store-setting",e.user="store-user",e.sync="store-sync",e.notice="store-notice",e.note="store-note",e.todo="store-todo",e.timerBirthday="store-timer-birthday",e.timerFestival="store-timer-festival",e.timerYear="store-timer-year",e.weather="store-weather",e.hotsearch="store-hotsearch",e.calculator="store-calculator",e.payment="store-payment",e.calendar="store-calendar",e.celebrity="store-celebrity",e.worldcup="store-worldcup",e.habit="store-habit",e.exchangeRate="store-exchange-rate",e.news="store-news",e.stock="store-stock",e.game="store-game",e.history="store-history",e.movie="store-movie",e.book="store-book",e.play="store-play",e.clock="store-clock",e.worldClock="store-world-clock",e.hotApp="store-hotapp",e.nba="store-nba",e.chatgpt="store-chatgpt",e.bookmarks="store-bookmarks",e.pageTurning="store-pageTurning",e.advertisement="store-advertisement",e.haohuola="store-haohuola",e.football="store-football",e.historyRecord="store-history-record"}(r||(r={}));class l{static instanceKeyMapper=new Map;static getInstanceFromKey(e){return this.instanceKeyMapper.has(e)?this.instanceKeyMapper.get(e):null}static hasInstanceFromKey(e){return this.instanceKeyMapper.has(e)}static async getAllInitdata(){const e=Array.from(this.instanceKeyMapper.values());return await Promise.all(e.map((e=>e.getInitdata())))}static async deleteAllForLogout(){const e=Array.from(this.instanceKeyMapper.values());let t;return(await Promise.all(e.map((e=>e.deleteForLogout())))).some((e=>{let[o]=e;return!!o&&(t=o,!0)}))?[t]:[null,null]}constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"idb";this.key=e,this.type=t,this.setInstanceMapper()}setInstanceMapper(){if(l.instanceKeyMapper.has(this.key))throw new Error("重复的 storage key");l.instanceKeyMapper.set(this.key,this)}write=async e=>{if(!e)return[{message:"空数据"}];e._writeStorageAt=Date.now();try{return[null,await a.H.setItem(this.key,e,this.type)]}catch(e){return[e]}};async read(){try{return[null,await a.H.getItem(this.key,this.type)]}catch(e){return[e]}}async getInitdata(){const[e,t]=await this.read();return e||(this.initData=t),this.initData}async update(e){const[t,o]=await this.read();if(t)return[t];if(o&&"object"==typeof o){const t={...o,...e};return await this.write(t)}return[{data:o}]}async delete(){try{return[null,await a.H.removeItem(this.key,this.type)]}catch(e){return[e]}}async deleteWithKeep(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];if(0===t.length)return[{keys:t}];const[a,r]=await this.read();if(a)return[a];if(r&&"object"==typeof r){const e={};return t.forEach((t=>{e[t]=r[t]})),await this.write(e)}return[{data:r}]}async deleteForLogout(){return await this.delete()}}},75008:(e,t,o)=>{o.d(t,{f:()=>s});var a=o(63477),r=o(57268),l=o(63829);const n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";const t=(0,r.Rr)();return(0,r.Fl)((()=>{var o;const a=null==t||null===(o=t[e])||void 0===o?void 0:o.call(t);return a?(0,l.Z)(a[0].children)?a[0].children:a.filter((e=>"symbol"!=typeof e.type)):[]}))},s=e=>{e.config.globalProperties.isFn=a.LQ,e.config.globalProperties.i18n=i18n,e.config.globalProperties.getSlots=n,e.config.globalProperties.getQiniuImage=a.Em}},35427:(e,t,o)=>{o.d(t,{Z:()=>c});var a=o(79282),r=o(57268),l=o(94209),n=o(29445);const s={class:"flex items-center justify-center truncate"},i=(0,r.aZ)({inheritAttrs:!1}),c=(0,r.aZ)({...i,__name:"hi-button",props:{type:{default:"primary"},size:{default:"large"},textColor:{default:""},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},icon:{default:""},class:{default:""}},emits:["click"],setup(e,t){let{emit:o}=t;const i=e,c={small:"max-w-[100px] py-[5px] px-[16px] text-[14px]",medium:"max-w-[120px] py-[8px] px-[18px] text-[15px]",large:"w-[120px] h-[36px] px-[20px] text-[16px]",block:"w-full h-[44px] text-[18px]"},p=(0,r.Fl)((()=>`cursor-not-allowed ${"main"===i.type?"bg-color-m1":"bg-color-m2 bg-opacity-[0.06]"} !text-color-t4`)),u={primary:"bg-color-blue text-color-white hover:bg-[rgb(96,165,250)] active:bg-[rgb(37,99,235)]",success:"bg-color-green text-color-white",warning:"bg-color-yellow text-color-white",risk:"bg-color-orange text-color-white",danger:"bg-color-red text-color-white hover:bg-[rgb(255,131,121)] active:bg-[rgb(219,56,72)]",main:"bg-color-m1 text-color-t2 hover:text-color-t3 active:text-color-t1",opposite:"bg-color-m2 text-color-white"},d={primary:"blue",success:"green",warning:"yellow",risk:"orange",danger:"red",main:"",opposite:""},h=(0,r.Fl)((()=>i.disabled||i.loading?p.value:i.plain?"border-[1px] hover:text-color-white active:bg-[rgb(37,99,235)] "+(d[i.type]?`border-color-${d[i.type]} hover:bg-color-${d[i.type]} text-color-${d[i.type]}`:""):"")),g={"color-primary":"text-color-blue hover:text-[rgb(96,165,250)] active:text-[rgb(37,99,235)]","color-danger":"text-color-red hover:text-[rgb(255,131,121)] active:text-[rgb(219,56,72)]"},y=(0,r.Fl)((()=>i.loading)),m=(0,r.Fl)((()=>y.value?"icon-loading_small animate-spin":i.icon||"")),b=()=>{i.disabled||y.value||o("click")};return(e,t)=>{const o=a.Z;return(0,r.wg)(),(0,r.iD)("button",{type:"button",class:(0,l.normalizeClass)(["hi-button rounded-[8px] duration-150",[i.class,c[i.size],(0,n.SU)(h)||u[i.type]+" "+g[i.textColor]]]),onClick:b},[(0,r._)("span",s,[(0,r.Wm)(o,{show:!!(0,n.SU)(m),class:"mr-[8px] flex-shrink-0"},{default:(0,r.w5)((()=>[(0,r._)("i",{class:(0,l.normalizeClass)(["iconfont text-[18px]",(0,n.SU)(m)])},null,2)])),_:1},8,["show"]),(0,r.WI)(e.$slots,"default")])],2)}}})},79282:(e,t,o)=>{o.d(t,{Z:()=>i});var a=o(57268),r=o(94209),l=o(29445),n=o(68398);const s=(0,a.aZ)({__name:"hi-demand",props:{show:{type:Boolean,default:!1},teleport:{default:void 0},class:{default:""},style:{default:void 0},ani:{default:""}},emits:["before-enter","after-leave","click","transitionstart","transitionend"],setup(e,t){let{expose:o,emit:s}=t;const i=e,c=(0,l.iH)(null),p=(0,l.iH)(!1),u=(0,a.Fl)((()=>({to:i.teleport,disabled:!i.teleport}))),d=(0,a.YP)((()=>i.show),(e=>{e&&(setTimeout((()=>{d&&d()}),0),p.value=!0)}),{immediate:!0});return o({getBoundingClientRect:()=>c.value?c.value.getBoundingClientRect():null}),(e,t)=>((0,a.wg)(),(0,a.j4)(a.lR,(0,r.normalizeProps)((0,a.F4)((0,l.SU)(u))),[(0,a.Wm)(n.Transition,{name:i.ani,"leave-active-class":"leave-class",onBeforeEnter:t[3]||(t[3]=e=>s("before-enter")),onAfterLeave:t[4]||(t[4]=e=>s("after-leave"))},{default:(0,a.w5)((()=>[p.value?(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",{key:0,ref_key:"wrapperRef",ref:c,class:(0,r.normalizeClass)([i.class,"hi-demand"]),style:(0,r.normalizeStyle)(i.style),onClick:t[0]||(t[0]=e=>s("click")),onTransitionend:t[1]||(t[1]=e=>s("transitionend",e)),onTransitionstart:t[2]||(t[2]=e=>s("transitionstart",e))},[(0,a.WI)(e.$slots,"default")],38)),[[n.vShow,i.show]]):(0,a.kq)("",!0)])),_:3},8,["name"])],16))}});const i=(0,o(76911).Z)(s,[["__scopeId","data-v-7655e2c3"]])},1007:(e,t,o)=>{o.d(t,{Z:()=>u});var a=o(35427),r=o(57268),l=o(68398),n=o(94209),s=o(29445),i=o(73446);const c={class:"text-dot mr-[32px] text-color-t2"},p=(0,r.aZ)({__name:"hi-message",setup(e,t){let{expose:o}=t;const p=(0,s.iH)(!1),u=(0,s.iH)(0),d={message:"",type:"warn",className:"",duration:4e3,teleport:"",zIndexPlus:0,btnText:"",onBtnClick:()=>{},onClose:()=>{}},h=(0,s.iH)(d);let g=null;const y={success:"icon-success_color_icon bg-color-green",warn:"icon-warning_color_icon bg-color-orange",fail:"icon-a-fail_color_icon2 bg-color-red",loading:"icon-loading_small animate-[spin_1.2s_linear_infinite] text-color-m2 text-opacity-20"},m=(0,r.Fl)((()=>y[h.value.type]));(0,r.Ah)((()=>{v()}));const b=()=>{v(),p.value=!0},x=()=>{f()},w=()=>{h.value.onBtnClick(),setTimeout((()=>{k()}),0)},v=()=>{g&&(window.clearTimeout(g),g=null)},f=()=>{v(),p.value=!0,g=window.setTimeout((()=>{p.value=!1,g=null}),h.value.duration)},k=()=>{v(),p.value=!1,h.value.onClose()};return o({open:(e,t)=>{p.value||(u.value=(0,i.K)()+(t.zIndexPlus??0)),h.value={...d,type:e,...t},f()},close:k}),(e,t)=>{const o=a.Z;return(0,r.wg)(),(0,r.j4)(r.lR,{to:h.value.teleport||void 0,disabled:!h.value.teleport},[(0,r.Wm)(l.Transition,{name:"top"},{default:(0,r.w5)((()=>[(0,r.wy)((0,r._)("section",{class:(0,n.normalizeClass)([h.value.className,"hi-message fixed top-[5%] left-[50%] flex h-[44px] max-w-[90%] -translate-x-1/2 items-center rounded-[8px] bg-color-b3 pr-[8px] pl-[12px] dark:bg-color-b5"]),style:(0,n.normalizeStyle)({zIndex:u.value}),onMouseenter:b,onMouseleave:x},[(0,r._)("i",{class:(0,n.normalizeClass)([(0,s.SU)(m),"iconfont mr-[12px] rounded-[50%] text-[24px] text-color-white"])},null,2),(0,r._)("span",c,(0,n.toDisplayString)(h.value.message),1),h.value.btnText?((0,r.wg)(),(0,r.j4)(o,{key:0,class:"h-[28px] w-auto rounded-[4px] px-[12px]",onClick:w},{default:(0,r.w5)((()=>[(0,r.Uk)((0,n.toDisplayString)(h.value.btnText),1)])),_:1})):(0,r.kq)("",!0)],38),[[l.vShow,p.value]])])),_:1})],8,["to","disabled"])}}});const u=(0,o(76911).Z)(p,[["__scopeId","data-v-8f4156ba"]])}}]);