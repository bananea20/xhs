(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[23,3670],{52326:function(e){e.exports=function(){"use strict";return function(e,o,t){o.prototype.isToday=function(){var e="YYYY-MM-DD",o=t();return this.format(e)===o.format(e)}}}()},43670:(e,o,t)=>{"use strict";t.d(o,{B:()=>s});var i=t(74003),a=t(97432),l=t(86114);const s=new class{hasPermission=async()=>new Promise((e=>{if(!i.Pl)return chrome.permissions.contains({permissions:["system.cpu","system.memory"]},(o=>{e(o)}));e(!1)}));reqPermission=async()=>new Promise((e=>{i.Pl?e(!1):chrome.permissions.request({permissions:["system.cpu","system.memory"]},(o=>{chrome.runtime.lastError?e(!1):e(o)}))}));hasBookmarksPermission=async()=>new Promise((e=>{if(!i.Pl)return chrome.permissions.contains({permissions:["bookmarks","favicon"]},(o=>{chrome.runtime.lastError?chrome.permissions.contains({permissions:["bookmarks"]},(o=>{e(o)})):e(o)}));e(!1)}));reqBookmarksPermission=async()=>new Promise((e=>{i.Pl?e(!1):chrome.permissions.request({permissions:["bookmarks","favicon"]},(o=>{chrome.runtime.lastError?"'favicon' is not a recognized permission."==chrome.runtime.lastError.message?((0,a.useBookmarksStore)().setFavicon(!0),chrome.permissions.request({permissions:["bookmarks"]},(o=>{e(o)}))):e(!1):e(o)}))}));hasHistoryPermission=async()=>new Promise((e=>{if(!i.Pl)return chrome.permissions.contains({permissions:["history","favicon"]},(o=>{chrome.runtime.lastError?chrome.permissions.contains({permissions:["history"]},(o=>{e(o)})):e(o)}));e(!1)}));reqHistoryPermission=async()=>new Promise((e=>{i.Pl?e(!1):chrome.permissions.request({permissions:["history","favicon"]},(o=>{chrome.runtime.lastError?"'favicon' is not a recognized permission."==chrome.runtime.lastError.message?((0,l.useHistoryRecordStore)().setFavicon(!0),chrome.permissions.request({permissions:["history"]},(o=>{e(o)}))):e(!1):e(o)}))}));getCpuInfo=()=>chrome.system.cpu.getInfo();getStorageInfo=()=>chrome.system.storage.getInfo();getMemoryInfo=()=>chrome.system.memory.getInfo()}},97432:(e,o,t)=>{"use strict";t.r(o),t.d(o,{useBookmarksStore:()=>p});var i=t(43670),a=t(84522),l=t(10435),s=t(17319),r=t(87322);const n=async(e,o)=>{try{await chrome.bookmarks.move(e,o)}catch(e){e&&s.R.fail({message:"操作失败！",duration:1500})}},c=async e=>{await(0,r.stopBrowserListening)(),await Promise.all(e.map((async e=>{await(async e=>{try{await chrome.bookmarks.remove(e)}catch(e){e&&s.R.fail({message:"操作失败！",duration:1500})}})(e)}))),await(0,r.startBrowserListening)()};var d=t(81220);const p=(0,l.Q_)(a.BU.bookmarks,{syncStorage:{watch:["isFirst","bookmarks","flattenBookmarks","folderList","needInfinityFavicon"]},state:()=>({isFullScreen:!1,isFirst:!0,modalShow:!1,hasPermission:!1,bookmarks:[],flattenBookmarks:[],folderList:[],needInfinityFavicon:!1}),actions:{setModal(e){this.modalShow=e},setBookmarks(e){this.bookmarks=e},setIsFirst(e){this.isFirst=e},setIsFullScreen(e){this.isFullScreen=e},async getAllData(){if(this.hasPermission=await i.B.hasBookmarksPermission(),!this.hasPermission)return;const[e,o,t]=await(0,d.jl)();this.bookmarks=e,this.flattenBookmarks=o,this.folderList=t},setFaviconById(e,o){this.bookmarks=[...(0,d.Ob)(this.bookmarks,o,{favicon:e})],this.flattenBookmarks=(0,d.Qj)(this.bookmarks),this.folderList=(0,d.Ln)(this.flattenBookmarks)},async reqPermission(){return this.hasPermission=await i.B.reqBookmarksPermission(),this.hasPermission},async batchMoveBookmark(e,o){await(async(e,o)=>{await(0,r.stopBrowserListening)(),await Promise.all(e.map((async e=>{await n(e,o)}))),await(0,r.startBrowserListening)()})(e,o),this.getAllData()},async batchRemoveBookmark(e){await c(e),this.getAllData()},async updateBookmark(e,o){await(async(e,o)=>{try{await(0,r.stopBrowserListening)(),await chrome.bookmarks.update(e,o),await(0,r.startBrowserListening)()}catch(e){e&&s.R.fail({message:"操作失败！",duration:1500})}})(e,{title:o.title,url:o.url}),o.parentId&&await n(e,{parentId:o.parentId}),this.getAllData()},setFavicon(e){this.needInfinityFavicon=e}}})},87322:(e,o,t)=>{"use strict";t.r(o),t.d(o,{startBrowserListening:()=>c,stopBrowserListening:()=>d});var i=t(43670),a=t(97432);const l=(e,o)=>{(0,a.useBookmarksStore)().getAllData()},s=(e,o)=>{(0,a.useBookmarksStore)().getAllData()},r=(e,o)=>{(0,a.useBookmarksStore)().getAllData()},n=(e,o)=>{(0,a.useBookmarksStore)().getAllData()},c=async()=>{await i.B.hasBookmarksPermission()&&(chrome.bookmarks.onCreated.addListener(l),chrome.bookmarks.onChanged.addListener(s),chrome.bookmarks.onRemoved.addListener(r),chrome.bookmarks.onMoved.addListener(n))},d=async()=>{await i.B.hasBookmarksPermission()&&(chrome.bookmarks.onCreated.removeListener(l),chrome.bookmarks.onChanged.removeListener(s),chrome.bookmarks.onRemoved.removeListener(r))}},81220:(e,o,t)=>{"use strict";t.d(o,{GR:()=>c,Ln:()=>s,OK:()=>r,Ob:()=>n,Qj:()=>l,jl:()=>a});var i=t(45844);const a=async()=>{const e=await chrome.bookmarks.getTree(),o=d(e);return[e,o,s(o)]},l=e=>d(e),s=e=>e.filter((e=>{var o;return"0"!=e.id&&e.children&&(null===(o=c(e))||void 0===o?void 0:o.length)>0})),r=e=>e.filter((e=>"0"!=e.id&&e.children)),n=(e,o,t)=>{const a=(0,i.Z)(e);return a.forEach(((e,o)=>t=>{const i=t=>{t.id===e?Object.assign(t,o):t.children&&t.children.forEach(i)};return i(t)})(o,t)),a},c=e=>{var o;return e?null===(o=e.children)||void 0===o?void 0:o.filter((e=>e.url)):[]};function d(e,o){return e.reduce(((e,t)=>(e.push({id:t.id,parentId:(null==o?void 0:o.id)||"",title:t.title,url:t.url,children:t.children,index:t.index}),t.children&&e.push(...d(t.children,t)),e)),[])}},70023:(e,o,t)=>{"use strict";t.r(o);var i=t(68398),a=t(96755),l=t(79282),s=t(43451),r=t(57268),n=t(29445),c=t(86114),d=t(35427),p=t(94209),u=t(91294);const m={class:"mt-[152px] mb-[138px] ml-[100px]"},x={class:"whitespace-pre font-ali-75 text-[60px] leading-[84px] text-color-record-t1"},g=(e=>((0,r.dD)("data-v-eb04ef1e"),e=e(),(0,r.Cn)(),e))((()=>(0,r._)("br",null,null,-1))),h={class:"text-[40px]"},v={class:"mt-[32px] font-ali-65 text-[16px] leading-[22px] text-color-t2"},f={class:"mt-[12px] whitespace-pre font-ali-55 text-[14px] leading-[20px] text-color-t2"},y=(0,r.aZ)({__name:"widget-record-start",setup(e){const o=(0,c.useHistoryRecordStore)(),t=(0,u.V)(),i=(0,n.iH)(t.followSystem?t.systemTheme:t.theme),a=async()=>{o.setIsFirst(!1);await o.reqPermission()&&o.getAllData()};return(e,o)=>{const t=d.Z;return(0,r.wg)(),(0,r.iD)("section",{class:(0,p.normalizeClass)([[{"modal-bg-dark":"dark"==i.value}],"modal-bg relative flex h-full w-full flex-row rounded-[12px] bg-color-b3"])},[(0,r._)("div",m,[(0,r._)("p",x,[(0,r.Uk)((0,p.toDisplayString)("Hi ~")),g,(0,r._)("span",h,(0,p.toDisplayString)("欢迎使用历史记录管理"),1)]),(0,r._)("p",v,(0,p.toDisplayString)("使用前须知")+": ",1),(0,r._)("p",f,(0,p.toDisplayString)("始终与本地浏览器历史记录保持一直；\n仅支持本地历史记录管理，而非云端数据，因此无法同步到其他设备；"),1),(0,r.Wm)(t,{class:"mt-[32px] h-[36px] w-[96px] shrink-0 bg-color-record-t1 !text-color-white hover:bg-[#e94b1b]",type:"main",size:"small",onClick:a},{default:(0,r.w5)((()=>[(0,r.Uk)((0,p.toDisplayString)("开始"),1)])),_:1})])],2)}}});var w=t(76911);const b=(0,w.Z)(y,[["__scopeId","data-v-eb04ef1e"]]);var k=t(34679),C=t(15647);function _(e){if((0,c.useHistoryRecordStore)().needInfinityFavicon){return"https://favicon.infinitynewtab.com/"+new URL(e||"").hostname.replace("www.","")+".png"}{const o=new URL(chrome.runtime.getURL("/_favicon/"));return o.searchParams.set("pageUrl",e),o.searchParams.set("size","32"),o.toString()}}var S=t(63477);const D=e=>((0,r.dD)("data-v-575e57b0"),e=e(),(0,r.Cn)(),e),P=["src"],A=["title"],B=[D((()=>(0,r._)("i",{class:"icon iconfont icon-shanchu2 text-[20px] text-color-t3 transition-colors group-hover:text-color-red"},null,-1)))],R=[D((()=>(0,r._)("i",{class:"icon iconfont icon-xiugai1 text-[20px] text-color-t3 transition-colors group-hover:text-color-green"},null,-1)))],I=[D((()=>(0,r._)("i",{class:"icon iconfont icon-tianjiadao text-[20px] text-color-t3 transition-colors group-hover:text-color-blue"},null,-1)))],F=(0,r.aZ)({__name:"file-item",props:{data:null,selected:{type:Boolean},checkState:{type:Boolean},disabled:{type:Boolean}},emits:["onchange","add","delete","filter"],setup(e,o){let{emit:t}=o;const a=e;return(o,l)=>((0,r.wg)(),(0,r.iD)("div",{class:"file-item relative flex flex-row items-center rounded-[12px] py-[4px] pr-[4px] transition-colors hover:bg-color-m2 hover:bg-opacity-5",onClick:l[3]||(l[3]=o=>{return e.disabled?void 0:e.checkState?void t("onchange",!a.selected,a.data):(i=o,void(!a.checkState&&(0,S.Yo)(a.data.url||"",!0,i)));var i})},[e.disabled?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,p.normalizeClass)(["absolute h-[16px] w-[16px] rounded-[4px] border-[2px] border-color-t4 opacity-0 transition-colors delay-75",[{"!border-color-record-t1 bg-color-record-t1":e.selected},{"cursor-pointer opacity-100 ":e.checkState}]])},[(0,r._)("i",{class:(0,p.normalizeClass)(["icon iconfont icon-checked_icon mt-[-0.7px] ml-[-0.7px] text-[14px] text-color-white opacity-0 transition-opacity delay-75",[{"opacity-100":e.selected}]])},null,2)],2)),(0,r._)("div",{class:(0,p.normalizeClass)(["flex w-full flex-1 flex-row items-center transition-all delay-75",[{"ml-[32px]":e.checkState}]])},[(0,r._)("img",{class:"mr-[12px] h-[16px] w-[16px] cursor-pointer",src:e.data.url&&(0,n.SU)(_)(e.data.url)||(0,n.SU)(C)},null,8,P),(0,r._)("p",{title:e.data.title,class:"flex-1 cursor-pointer truncate font-ali-65 text-[14px] leading-[20px] text-color-t2"},(0,p.toDisplayString)(e.data.title),9,A),e.disabled?(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",{key:0,class:(0,p.normalizeClass)(["operation-btn ml-[12px] flex flex-row items-center gap-[8px] transition-opacity",[{"pointer-events-none !opacity-0":e.checkState}]])},[(0,r._)("button",{class:"group h-[28px] w-[28px] rounded-[8px] bg-color-white bg-opacity-60 p-[4px] shadow-icon-add transition-colors hover:bg-opacity-100 dark:bg-opacity-5 dark:hover:bg-opacity-10",onClick:l[0]||(l[0]=(0,i.withModifiers)((o=>t("delete",e.data)),["stop"]))},B),(0,r._)("button",{class:"group h-[28px] w-[28px] rounded-[8px] bg-color-white bg-opacity-60 p-[4px] shadow-icon-add transition-colors hover:bg-opacity-100 dark:bg-opacity-5 dark:hover:bg-opacity-10",onClick:l[1]||(l[1]=(0,i.withModifiers)((o=>t("filter",e.data)),["stop"]))},R),(0,r._)("button",{class:"group h-[28px] w-[28px] rounded-[8px] bg-color-white bg-opacity-60 p-[4px] shadow-icon-add transition-colors hover:bg-opacity-100 dark:bg-opacity-5 dark:hover:bg-opacity-10",onClick:l[2]||(l[2]=(0,i.withModifiers)((o=>t("add",e.data)),["stop"]))},I)],2))],2)]))}}),H=(0,w.Z)(F,[["__scopeId","data-v-575e57b0"]]);var U=t(17319);const z=e=>((0,r.dD)("data-v-c2142602"),e=e(),(0,r.Cn)(),e),L={class:"absolute bottom-[24px] right-[24px] flex flex-col gap-[12px]"},Y=["title"],W={key:0,class:"icon iconfont icon-add_icon1 rotate-45 text-[24px] text-color-white"},T={key:1,class:"icon iconfont icon-piliangcaozuo text-[24px] leading-[24px] text-color-white"},q={class:"flex flex-col items-center gap-[10px]"},j=["title"],E=["title"],M=z((()=>(0,r._)("div",{class:"mb-[10px] h-[1px] w-[20px] bg-color-m2 bg-opacity-10"},null,-1))),Z=[z((()=>(0,r._)("i",{class:"iconfont icon-qingchu text-[24px] text-color-t1"},null,-1)))],N=(0,r.aZ)({__name:"operation-btn",props:{checkState:{type:Boolean},selectedList:null},emits:["checkState","delete","add","clear"],setup(e,o){let{emit:t}=o;const i=e,a=(0,n.iH)(!i.selectedList||!i.selectedList.length),l=(0,n.iH)(a.value||i.selectedList.length>20);(0,r.YP)((()=>i.selectedList),(e=>{a.value=!e||!e.length,l.value=a.value||e.length>20}),{deep:!0});const s=()=>{t("checkState")},c=()=>{i.selectedList.length>20?U.R.warn({message:"批量添加到桌面不能超过20个",duration:1500}):!l.value&&t("add")};return(o,i)=>((0,r.wg)(),(0,r.iD)("div",L,[(0,r._)("div",{class:(0,p.normalizeClass)(["card-shadow flex h-[48px] w-[48px] cursor-pointer flex-col-reverse overflow-hidden rounded-[12px] bg-color-white p-[3px] transition-all dark:bg-opacity-20",[{"!h-[135px] !p-[9px]":e.checkState}]])},[(0,r._)("div",{class:(0,p.normalizeClass)(["h-[40px] w-[40px] rounded-[8px] bg-color-record-t1 p-[8px] transition-all",[{"!h-[28px] !w-[28px] !p-[2px]":e.checkState}]]),title:e.checkState?"关闭操作弹窗":"打开操作弹窗",onClick:s},[e.checkState?((0,r.wg)(),(0,r.iD)("i",W)):((0,r.wg)(),(0,r.iD)("i",T))],10,Y),(0,r._)("div",q,[(0,r._)("button",{class:(0,p.normalizeClass)([[{"group hover:bg-color-green hover:bg-opacity-10 dark:hover:bg-opacity-20":!l.value}],"h-[28px] w-[28px] rounded-[8px] bg-color-black bg-opacity-[0.08] p-[4px] transition-colors"]),title:"添加到桌面",onClick:c},[(0,r._)("i",{class:(0,p.normalizeClass)(["icon iconfont icon-tianjiadao text-[20px] leading-[20px] text-color-t4 transition-colors",[{"text-color-t3 group-hover:text-color-green":!l.value}]])},null,2)],10,j),(0,r._)("button",{class:(0,p.normalizeClass)([[{"group hover:bg-color-red hover:bg-opacity-10 dark:hover:bg-opacity-20":!a.value}],"h-[28px] w-[28px] rounded-[8px] bg-color-black bg-opacity-[0.08] p-[4px] transition-colors"]),title:"删除",onClick:i[0]||(i[0]=e=>!a.value&&t("delete"))},[(0,r._)("i",{class:(0,p.normalizeClass)(["icon iconfont icon-shanchu2 text-[20px] leading-[20px] text-color-t4 transition-colors",[{"text-color-t3 group-hover:text-color-red":!a.value}]])},null,2)],10,E),M])],2),(0,r._)("div",{class:"card-shadow flex h-[48px] w-[48px] cursor-pointer items-center justify-center rounded-[12px]",onClick:i[1]||(i[1]=e=>t("clear"))},Z)]))}}),K=(0,w.Z)(N,[["__scopeId","data-v-c2142602"]]);var O=t(87678),G=t(85763),Q=t(81198),V=t(41752),X=t(23220),J=t(95582),$=t(12793),ee=t(96643),oe=t(17904),te=t(96073),ie=t(1614);const ae=["onClick"],le={class:"flex h-max w-[400px] flex-col rounded-[12px] bg-color-bookmark-b1 shadow-dialog"},se={class:"mt-[16px] w-full border-b border-color-m2 border-opacity-5 pb-[16px] text-center font-ali-65 text-[16px] leading-[16px] text-color-t1"},re={key:0,class:"p-[24px]"},ne={class:"flex-1 font-ali-65 text-[14px] leading-[20px] text-color-t2"},ce=["onClick"],de={class:"flex-1 font-ali-65 text-[14px] leading-[20px] text-color-t2"},pe={class:"mx-[-24px] mt-[18px] flex-1 overflow-hidden"},ue={class:"mt-[40px] flex flex-row items-center justify-end gap-[12px]"},me={key:1,class:"p-[24px]"},xe={class:"font-ali-65 text-[14px] leading-[20px] text-color-t3"},ge={class:"text-color-bookmark-t1"},he={class:"flex-1 font-ali-65 text-[14px] leading-[20px] text-color-t2"},ve=["onClick"],fe={class:"flex-1 font-ali-65 text-[14px] leading-[20px] text-color-t2"},ye={class:"mt-[40px] flex flex-row items-center justify-end gap-[12px]"},we=(0,r.aZ)({__name:"add-popup",props:{show:{type:Boolean},target:null},emits:["cancel","confirm","back","on-success"],setup(e,o){var t;let{emit:a}=o;const l=e,s=(0,$.i)(),c=(0,n.iH)(l.target?!(null!==(t=l.target)&&void 0!==t&&t.id):null),u=(0,n.iH)(null),m=(0,n.iH)(null),x=(0,n.iH)(null),g=(0,n.iH)(!1),h=(0,n.iH)({name:"",target:"",bgType:"image",bgImage:"",bgColor:""}),v=(0,n.iH)(0),f=(0,n.iH)(s.icons[0]),y=(0,n.iH)(!1);(0,r.YP)((()=>({target:l.target,show:l.show})),(e=>{let{target:o,show:t}=e;t&&(c.value=o?o.length>1:null),c.value?h.value={name:"",target:"",bgType:"image",bgImage:"",bgColor:""}:(1==o.length&&(o=o[0]),h.value={name:o.title,target:o.url,bgType:"image",bgImage:"",bgColor:""})})),(0,r.YP)((()=>l.show),(e=>{e||(g.value=!1,f.value=s.icons[0])})),(0,r.YP)((()=>({currentIcon:h.value,iconType:v.value})),(e=>{let{currentIcon:o,iconType:t}=e;(0,r.Y3)((()=>{let e;try{e=new URL((0,S.UN)(o.target)).origin}catch(o){e=""}var i;1===t?u.value.getOnlieIcons(e):l.show&&!c.value&&(null===(i=u.value)||void 0===i||i.resetIcons())}))}),{immediate:1===v.value});const w=()=>{y.value||(g.value=!g.value)},b=e=>{f.value=e},k=e=>{},C=()=>{a("cancel")},_=async()=>{y.value=!0,c.value?await P(l.target):await D(),y.value=!1,a("confirm")},D=async()=>{const e=h.value;let o="";if(1===v.value){if(e.id&&"image"===e.bgType&&0===u.value.curIndex&&!u.value.curBlob)o=e.bgImage;else{if(!u.value.curBlob)return void U.R.fail({message:"请选择图标"});if(u.value.curBlob.size>2097152)return void U.R.fail({message:"文件大小超出限制"});const e=await(0,ee.E)("user-custom-icon",u.value.curBlob),t=e[0];if(o=e[1],t)return void(t.includes(oe.h$)||U.R.fail({message:t}))}A({...e,type:"site",bgType:"image",bgColor:u.value.iconList[u.value.curIndex].bgColor,bgImage:o,origin:"online"})}if(0===v.value&&A({...e,type:"site",bgType:"color",bgText:m.value.iconName,bgColor:m.value.curColor,origin:"color"}),2===v.value){if(!x.value.curBlob)return void U.R.fail({message:"请上传图标"});if(x.value.curBlob.size>2097152)return void U.R.fail({message:"文件大小超出限制"});const[o,t]=await(0,ee.E)("user-custom-icon",x.value.curBlob);if(o)return void(o.includes(oe.h$)||U.R.fail({message:o}));A({...e,type:"site",bgType:"image",bgColor:x.value.bgColor,bgImage:t,origin:"upload"})}},P=async e=>{U.R.loading({message:"正在添加，请稍后...",duration:4e4});const o=[],t=e.map((e=>e.url||"")),[i,a]=await(0,ie.Yh)(t),{images:l}=a||{images:[]};for(let t=0;t<e.length;t++){let i;const a=e[t],s=l[t],r=Date.now();if(s){const{logo:e}=s||{};i={id:(0,S.kb)("icon-"),name:a.title,target:a.url||"",type:"site",bgType:"image",bgImage:e[0],bgColor:"rgba(0, 0, 0, 0)",origin:"online",updateTime:r}}else i={id:(0,S.kb)("icon-"),name:a.title,target:a.url||"",type:"site",bgType:"color",bgText:a.title.slice(0,2),bgColor:"rgba(194, 194, 194, 1)",origin:"color",updateTime:r};o.push(i)}const r=s.icons.findIndex((e=>e.id===f.value.id));(0,$.i)().batchAddToFolder(o,r),U.R.success({message:"添加成功"})},A=e=>{setTimeout((()=>{const o=s.icons.findIndex((e=>e.id===f.value.id));s.saveIconOfCategory(e,o),U.R.success({message:"添加成功"}),te.f.sendEvent("add-icon-custom",e.bgType,(0,S.Si)(e.target))}),2e3)};return(0,r.YP)((()=>l.show),(e=>{var o,t,i,a;e||(h.value={name:"",target:"",bgType:"image",bgImage:"",bgColor:""},null===(o=m.value)||void 0===o||null===(t=o.resetValue)||void 0===t||t.call(o),null===(i=x.value)||void 0===i||null===(a=i.resetValue)||void 0===a||a.call(i))})),(o,t)=>{var a,l,S,D;const P=Q.Z,A=G.Z,B=O.Z,R=d.Z;return(0,r.wg)(),(0,r.iD)("div",{class:(0,p.normalizeClass)([[{"pointer-events-auto opacity-100":e.show}],"shade pointer-events-none absolute flex h-full w-full items-center justify-center rounded-[12px] bg-color-black bg-opacity-20 opacity-0 transition-opacity"]),onClick:(0,i.withModifiers)(C,["self"])},[(0,r._)("div",le,[(0,r._)("p",se,(0,p.toDisplayString)(c.value?"添加到桌面":"自定义添加"),1),c.value?c.value?((0,r.wg)(),(0,r.iD)("div",me,[(0,r._)("p",xe,[(0,r._)("span",ge,(0,p.toDisplayString)(e.target.length+" "),1),(0,r.Uk)((0,p.toDisplayString)("个浏览记录将以文件夹的形式被添加到桌面的…"),1)]),(0,r._)("div",{class:"relative mt-[16px] flex flex-row items-center rounded-[8px] bg-color-m2 bg-opacity-5 p-[12px]",onClick:w},[(0,r._)("i",{class:(0,p.normalizeClass)([null===(S=f.value)||void 0===S?void 0:S.iconClass,"icon iconfont mr-[12px] text-[20px] text-color-t3"])},null,2),(0,r._)("p",he,(0,p.toDisplayString)((null===(D=f.value)||void 0===D?void 0:D.name)||""),1),(0,r._)("i",{class:(0,p.normalizeClass)(["icon iconfont icon-down_icon ml-[12px] text-[12px] text-color-t1 transition-transform",[{"rotate-180":g.value}]])},null,2),(0,r._)("div",{style:(0,p.normalizeStyle)({height:g.value?(0,n.SU)(s).icons.length>8?"292px":`calc((${(0,n.SU)(s).icons.length} * 36px) + 4px)`:"0px"}),class:"hide-scroll absolute top-[48px] left-0 !max-h-[292px] w-full overflow-y-scroll rounded-[8px] bg-color-bookmark-b2 px-[4px] shadow-popover transition-all"},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,n.SU)(s).icons,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id,class:"mb-[4px] flex flex-row items-center rounded-[4px] px-[8px] py-[6px] first:mt-[4px] hover:bg-color-m2 hover:bg-opacity-5",onClick:o=>b(e)},[(0,r._)("i",{class:(0,p.normalizeClass)([e.iconClass,"icon iconfont mr-[12px] text-[20px] text-color-t3"])},null,2),(0,r._)("p",fe,(0,p.toDisplayString)(e.name),1)],8,ve)))),128))],4)]),(0,r._)("div",ye,[(0,r.Wm)(R,{class:"h-[36px] w-[120px] shrink-0 bg-color-white !text-color-t2 hover:bg-[#ededed] dark:bg-opacity-20",type:"main",disabled:y.value,onClick:C},{default:(0,r.w5)((()=>[(0,r.Uk)((0,p.toDisplayString)("取消"),1)])),_:1},8,["disabled"]),(0,r.Wm)(R,{class:"h-[36px] w-[120px] shrink-0 bg-color-record-t1 !text-color-white hover:bg-[#e94b1b]",type:"main",disabled:y.value,onClick:_},{default:(0,r.w5)((()=>[(0,r.Uk)((0,p.toDisplayString)("完成"),1)])),_:1},8,["disabled"])])])):(0,r.kq)("",!0):((0,r.wg)(),(0,r.iD)("div",re,[(0,r.Wm)(P,{value:h.value.name,"onUpdate:value":t[0]||(t[0]=e=>h.value.name=e),icon:"icon-title_icon",placeholder:"名称"},null,8,["value","placeholder"]),(0,r._)("div",{class:"relative mt-[16px] flex flex-row items-center rounded-[8px] bg-color-m2 bg-opacity-5 p-[12px]",onClick:w},[(0,r._)("i",{class:(0,p.normalizeClass)([null===(a=f.value)||void 0===a?void 0:a.iconClass,"icon iconfont mr-[12px] text-[20px] text-color-t3"])},null,2),(0,r._)("p",ne,(0,p.toDisplayString)((null===(l=f.value)||void 0===l?void 0:l.name)||""),1),(0,r._)("i",{class:(0,p.normalizeClass)(["icon iconfont icon-down_icon ml-[12px] text-[12px] text-color-t1 transition-transform",[{"rotate-180":g.value}]])},null,2),(0,r._)("div",{style:(0,p.normalizeStyle)({height:g.value?(0,n.SU)(s).icons.length>8?"292px":`calc((${(0,n.SU)(s).icons.length} * 36px) + 4px)`:"0px"}),class:"hide-scroll absolute top-[48px] left-0 z-[1] !max-h-[292px] w-full overflow-y-scroll rounded-[8px] bg-color-bookmark-b2 px-[4px] shadow-popover transition-all"},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,n.SU)(s).icons,(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id,class:"mb-[4px] flex flex-row items-center rounded-[4px] px-[8px] py-[6px] first:mt-[4px] hover:bg-color-m2 hover:bg-opacity-5",onClick:o=>b(e)},[(0,r._)("i",{class:(0,p.normalizeClass)([e.iconClass,"icon iconfont mr-[12px] text-[20px] text-color-t3"])},null,2),(0,r._)("p",de,(0,p.toDisplayString)(e.name),1)],8,ce)))),128))],4)]),(0,r._)("div",pe,[(0,r.Wm)(B,{active:v.value,"onUpdate:active":t[1]||(t[1]=e=>v.value=e),"x-space":24,sticky:""},{default:(0,r.w5)((()=>[(0,r.Wm)(A,{title:"纯色图标"},{default:(0,r.w5)((()=>[(0,r.Wm)(X.Z,{ref_key:"$colorIcon",ref:m,class:"!overflow-hidden",icon:h.value},null,8,["icon"])])),_:1},8,["title"]),(0,r.Wm)(A,{title:"在线图标"},{default:(0,r.w5)((()=>[(0,r.Wm)(V.Z,{ref_key:"$onlineIcon",ref:u,icon:h.value,onOnChange:k},null,8,["icon"])])),_:1},8,["title"]),(0,r.Wm)(A,{title:"本地上传"},{default:(0,r.w5)((()=>[(0,r.Wm)(J.Z,{ref_key:"$uploadIcon",ref:x},null,512)])),_:1},8,["title"])])),_:1},8,["active"])]),(0,r._)("div",ue,[(0,r.Wm)(R,{class:"h-[36px] w-[120px] shrink-0 bg-color-white !text-color-t2 hover:bg-[#ededed] dark:bg-opacity-20",type:"main",onClick:C},{default:(0,r.w5)((()=>[(0,r.Uk)((0,p.toDisplayString)("取消"),1)])),_:1}),(0,r.Wm)(R,{class:"h-[36px] w-[120px] shrink-0 bg-color-record-t1 !text-color-white hover:bg-[#4f9748]",type:"main",onClick:_},{default:(0,r.w5)((()=>[(0,r.Uk)((0,p.toDisplayString)("完成"),1)])),_:1})])]))])],10,ae)}}}),be=we,ke={class:"flex h-max w-[400px] flex-col rounded-[12px] bg-color-bookmark-b1 shadow-dialog"},Ce={class:"mt-[16px] w-full border-b border-color-m2 border-opacity-5 pb-[16px] text-center font-ali-65 text-[16px] leading-[16px] text-color-t1"},_e={key:0,class:"p-[24px]"},Se={key:0,class:"font-ali-65 text-[14px] leading-[20px] text-color-t3"},De={class:"text-color-bookmark-t1"},Pe={class:"mt-[40px] flex flex-row items-center justify-end gap-[12px]"},Ae=(0,r.aZ)({__name:"delete-popup",props:{show:{type:Boolean},target:null,loading:{type:Boolean}},emits:["cancel","confirm"],setup(e,o){var t;let{emit:a}=o;const l=e;(0,r.YP)((()=>l.target),(e=>{s.value=e?!(null!=e&&e.id):null}));const s=(0,n.iH)(l.target?!(null!==(t=l.target)&&void 0!==t&&t.id):null),c=()=>{a("cancel")},u=()=>{a("confirm")};return(o,t)=>{const n=d.Z;return(0,r.wg)(),(0,r.iD)("div",{class:(0,p.normalizeClass)([[{"pointer-events-auto opacity-100":e.show}],"shade pointer-events-none absolute flex h-full w-full items-center justify-center rounded-[12px] bg-color-black bg-opacity-20 opacity-0 transition-opacity"]),onClick:t[0]||(t[0]=(0,i.withModifiers)((e=>a("cancel")),["self"]))},[(0,r._)("div",ke,[(0,r._)("p",Ce,(0,p.toDisplayString)(s.value?"批量删除历史":"删除历史？"),1),e.show&&null!=s.value?((0,r.wg)(),(0,r.iD)("div",_e,[s.value?((0,r.wg)(),(0,r.iD)("p",Se,[(0,r._)("span",De,(0,p.toDisplayString)(e.target.length+" "),1),(0,r.Uk)((0,p.toDisplayString)("条历史记录将从浏览器中删除，删除后将无法恢复，确定删除吗？"),1)])):((0,r.wg)(),(0,r.j4)(H,{key:1,class:"!mt-[16px] !rounded-[8px] !bg-color-m2 !bg-opacity-5 !p-[12px]",data:e.target,disabled:""},null,8,["data"])),(0,r._)("div",Pe,[(0,r.Wm)(n,{class:"h-[36px] w-[120px] shrink-0 bg-color-white !text-color-t2 hover:bg-[#ededed] dark:bg-opacity-20",type:"main",onClick:c},{default:(0,r.w5)((()=>[(0,r.Uk)((0,p.toDisplayString)("取消"),1)])),_:1}),(0,r.Wm)(n,{class:"h-[36px] w-[120px] shrink-0 bg-color-red !text-color-white hover:bg-[#e5393b]",type:"main",loading:l.loading,onClick:u},{default:(0,r.w5)((()=>[(0,r.Uk)((0,p.toDisplayString)("删除"),1)])),_:1},8,["loading"])])])):(0,r.kq)("",!0)])],2)}}}),Be=e=>((0,r.dD)("data-v-2a6b6489"),e=e(),(0,r.Cn)(),e),Re={class:"bookmark-list relative flex h-full w-full flex-col rounded-[12px] bg-color-b3"},Ie={class:"relative flex h-full w-full flex-col-reverse"},Fe={class:"relative h-full w-full overflow-hidden"},He={key:0},Ue=["id"],ze={key:0,class:"ml-[8px] mt-[12px] flex h-[36px] items-center font-ali-65 text-[14px] leading-[20px] text-color-t1 first:mt-[0px]"},Le={key:1},Ye=Be((()=>(0,r._)("div",{class:"mx-[210px] h-[1px] w-auto bg-color-m2 bg-opacity-5 icon-m:mx-[150px] icon-s:mx-[90px] mb:hidden"},null,-1))),We={class:"mx-[210px] my-[20px] icon-m:mx-[150px] icon-s:mx-[90px]"},Te={key:0,class:"flex items-center"},qe={class:"text-[18px] leading-[24px] text-color-t1"},je={key:1,class:"mx-[102px] flex h-auto w-auto flex-1 shrink-0 items-center justify-center overflow-hidden rounded-[8px] border-[1px] border-color-m2 border-opacity-[0.06] bg-color-m2 bg-opacity-[0.06] px-[6px] duration-150 icon-m:mx-[64px] icon-s:mx-[32px] mb:mx-0 mb:w-full"},Ee=Be((()=>(0,r._)("i",{class:"iconfont icon-magnifier_icon text-[18px] text-color-t2"},null,-1))),Me=["placeholder"],Ze=(0,r.aZ)({__name:"widget-record-list",setup(e){const o=(0,c.useHistoryRecordStore)(),t="history_file_",a=(0,n.iH)(!1),l=(0,n.iH)([]),s=(0,n.iH)(!1),d=(0,n.iH)(!1),u=(0,n.iH)(!1),m=(0,n.iH)(""),x=(0,n.iH)(""),g=(0,n.iH)(),h=(0,n.iH)(),v=(0,n.iH)(),f=(0,n.iH)(!1),y=(0,n.iH)(100);(0,r.bv)((async()=>{h.value=o.historyRecord})),(0,r.YP)((()=>o.historyRecord),(e=>{h.value=e}));const w=e=>{const{scrollTop:o,scrollHeight:t,clientHeight:i}=e.target;if(o+i+50>=t){var a;const e=(null===(a=h.value)||void 0===a?void 0:a.length)||0;y.value<e&&(y.value+=100)}};(0,r.YP)(m,(async e=>{e=e.trim().toLocaleLowerCase(),x.value="",h.value=o.historyRecord.filter((o=>o.title.toLocaleLowerCase().includes(e)))}),{immediate:!0}),(0,r.YP)(x,(async e=>{e=e.trim().toLocaleLowerCase(),h.value=o.historyRecord.filter((o=>o.url.toLocaleLowerCase().startsWith(e)))}),{immediate:!0}),(0,r.YP)((()=>o.modalShow),(e=>{e||(s.value=!1,d.value=!1,u.value=!1,l.value=[],a.value=!1,y.value=100)})),(0,r.YP)(a,(e=>{e||(l.value=[])})),(0,r.YP)((()=>({showAddPopup:s.value,showDeletePopup:d.value,showEditPopup:u.value})),(e=>{let{showAddPopup:o,showDeletePopup:t,showEditPopup:i}=e;o||t||i||(g.value=void 0)}));const b=(e,o)=>{const t=l.value.findIndex((e=>e.id==o.id));e?-1==t&&l.value.push(o):-1!=t&&l.value.splice(t,1)},C=()=>{s.value=!1},_=()=>{l.value=[],C()},S=()=>{g.value=void 0,l.value=[],d.value=!1},D=async()=>{var e,t;f.value=!0,null!==(e=g.value)&&void 0!==e&&e.url?await o.batchRemoveHistoryRecord([null===(t=g.value)||void 0===t?void 0:t.url]):await o.batchRemoveHistoryRecord(l.value.map((e=>e.url||""))),f.value=!1,S()},P=()=>{s.value=!0},A=()=>{d.value=!0},B=()=>{l.value=o.historyRecord,A()},R=e=>{g.value=e,s.value=!0},I=e=>{g.value=e,d.value=!0},F=e=>{const o=new URL(e.url||"");x.value=o.origin};return(e,c)=>{var u,U,z;const L=k.Z;return(0,r.wg)(),(0,r.iD)("section",Re,[(0,r._)("div",Ie,[(0,r._)("div",Fe,[(null===(u=h.value)||void 0===u?void 0:u.length)>0||(0,n.SU)(o).historyRecordProcessed.length>0?((0,r.wg)(),(0,r.iD)("div",{key:0,ref_key:"contentRef",ref:v,class:"file-list hi-scroll h-full w-full overflow-x-hidden overflow-y-scroll rounded-r-[12px] px-[210px] py-[16px] pb-[48px] icon-m:px-[150px] icon-s:px-[90px]",onScroll:w},[""===m.value&&""===x.value?((0,r.wg)(),(0,r.iD)("section",He,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(null===(U=(0,n.SU)(o).historyRecordProcessed)||void 0===U?void 0:U.slice(0,y.value),((e,o)=>((0,r.wg)(),(0,r.iD)("section",{id:t+o,key:e.id},[e.isDate?((0,r.wg)(),(0,r.iD)("p",ze,(0,p.toDisplayString)(e.title),1)):((0,r.wg)(),(0,r.j4)(H,{key:1,data:e,"check-state":a.value,selected:-1!=l.value.findIndex((o=>e.id==o.id)),class:"mb-[4px] flex w-full cursor-pointer flex-row items-center overflow-hidden rounded-[6px] p-[8px] pl-[12px] transition-colors hover:bg-color-m2 hover:bg-opacity-5",onOnchange:b,onAdd:R,onDelete:I,onFilter:F},null,8,["data","check-state","selected"]))],8,Ue)))),128))])):((0,r.wg)(),(0,r.iD)("section",Le,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(null===(z=h.value)||void 0===z?void 0:z.slice(0,y.value),((e,o)=>((0,r.wg)(),(0,r.j4)(H,{id:t+"_s_"+o,key:e.id,data:e,"check-state":a.value,selected:-1!=l.value.findIndex((o=>e.id==o.id)),class:"mb-[4px] flex w-full cursor-pointer flex-row items-center overflow-hidden rounded-[6px] p-[8px] transition-colors hover:bg-color-m2 hover:bg-opacity-5",onOnchange:b,onAdd:R,onDelete:I,onEdit:F},null,8,["id","data","check-state","selected"])))),128))]))],544)):((0,r.wg)(),(0,r.j4)(L,{key:1,class:"h-full w-full justify-center",icon:"icon-fail_icon",desc:h.value.length>0?"暂未查询到相关历史记录，请换个关键字再试试":"暂无历史记录"},null,8,["desc"])),(0,r.Wm)(K,{"check-state":a.value,"selected-list":l.value,onCheckState:c[0]||(c[0]=e=>a.value=!a.value),onAdd:P,onDelete:A,onClear:B},null,8,["check-state","selected-list"])]),Ye,(0,r._)("div",We,[x.value?((0,r.wg)(),(0,r.iD)("div",Te,[(0,r._)("i",{class:"iconfont icon-return_icon mr-[12px] cursor-pointer text-[20px] text-color-t1",onClick:c[1]||(c[1]=e=>x.value="")}),(0,r._)("p",qe,(0,p.toDisplayString)(x.value+"..."),1)])):((0,r.wg)(),(0,r.iD)("div",je,[Ee,(0,r.wy)((0,r._)("input",{"onUpdate:modelValue":c[2]||(c[2]=e=>m.value=e),class:"ml-[8px] h-[32px] w-full bg-color-none text-[14px] leading-[20px] !text-color-calc-t4",placeholder:"搜索"},null,8,Me),[[i.vModelText,m.value]])]))])]),(0,r.Wm)(be,{show:s.value,target:g.value||l.value,onCancel:C,onConfirm:_},null,8,["show","target"]),(0,r.Wm)(Ae,{show:d.value,target:g.value||l.value,loading:f.value,onCancel:S,onConfirm:D},null,8,["show","target","loading"])])}}}),Ne=(0,w.Z)(Ze,[["__scopeId","data-v-2a6b6489"]]),Ke=(0,r.aZ)({__name:"widget-record-modal",setup(e){const o=(0,c.useHistoryRecordStore)(),t=e=>{o.setIsFullScreen(e)};return(e,i)=>{const a=s.Z,c=l.Z;return(0,r.wg)(),(0,r.j4)(c,{ani:"fade",show:(0,n.SU)(o).modalShow},{default:(0,r.w5)((()=>[(0,r.Wm)(a,{class:"container2","hide-insert-shadow":!0,transparent:!0,"full-screen":(0,n.SU)(o).isFullScreen,onOnClose:i[0]||(i[0]=e=>(0,n.SU)(o).setModal(!1)),onOnFullscreen:t},{default:(0,r.w5)((()=>[(0,n.SU)(o).hasPermission&&!(0,n.SU)(o).isFirst?((0,r.wg)(),(0,r.j4)(Ne,{key:0})):((0,r.wg)(),(0,r.j4)(b,{key:1}))])),_:1},8,["full-screen"])])),_:1},8,["show"])}}});var Oe=t(75008);(()=>{const e=(0,S.em)(),o=(0,i.createApp)(Ke);(0,Oe.f)(o),o.use(a.M),o.mount(e)})()},86114:(e,o,t)=>{"use strict";t.r(o),t.d(o,{useHistoryRecordStore:()=>m});var i=t(43670),a=t(84522),l=t(10435),s=t(17319),r=t(80661),n=t.n(r),c=t(52326),d=t.n(c);n().extend(d());const p=async e=>{await Promise.all(e.map((async e=>{await(async e=>{try{await chrome.history.deleteUrl({url:e})}catch(e){e&&s.R.fail({message:"操作失败！",duration:1500})}})(e)})))},u=async()=>await async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return await chrome.history.search({text:e,maxResults:o,startTime:0})}(),m=(0,l.Q_)(a.BU.historyRecord,{syncStorage:{watch:["isFirst","historyRecord","needInfinityFavicon"]},state:()=>({isFullScreen:!1,isFirst:!0,modalShow:!1,hasPermission:!1,historyRecord:[],historyRecordProcessed:[],needInfinityFavicon:!1}),actions:{setModal(e){this.modalShow=e},setHistoryRecord(e){this.historyRecord=e,this.historyRecordProcessed=(e=>{if(0===e.length)return[];let o="";const t=[];for(const i of e){const e=new Date(i.lastVisitTime||""),a=n()(e),l=(a.isToday()?"今天 - ":"")+(a.add(1,"day").isToday()?"昨天 - ":"")+a.format("YYYY-MM-DD")+", "+a.format("dddd");if(l!==o){o=l;const e={url:"data:text/plain;charset=utf-8,"+o,title:o,id:l,isDate:!0};t.push(e)}t.push(i)}return t})(e)},setIsFirst(e){this.isFirst=e},setIsFullScreen(e){this.isFullScreen=e},async getAllData(){if(this.hasPermission=await i.B.hasHistoryPermission(),!this.hasPermission)return;const e=await u();this.setHistoryRecord(e)},async reqPermission(){return this.hasPermission=await i.B.reqHistoryPermission(),this.hasPermission},async batchRemoveHistoryRecord(e){await p(e),this.getAllData()},setFavicon(e){this.needInfinityFavicon=e}}})},15647:e=>{"use strict";e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABQxJREFUWEfFl2lvVGUUx3/nzlKsWJBSKoRENn3hgokJxoIoJi6IxMREGo0fAKWdwr1TCm5khGDKMtPaaUv4AEZTjSYq0QQTCIugxBfikggCJhBCS8EytMosvcc8s5TLdGibBuxN7s3Ns5zn/5z1f4QxPpFIJDh1auXTrstLwAPArPxrJJzPv79bFl/29V3aF4lEUmMRLaMt2r69455AYHCTqrwOVIy2Pj+fENGP0mnf5qamugsj7bkpgLa2trJ0Wt4RwQHuvFGIfA/sBP3cjKvyighhoKbosAFVYoGAbm1oaEiWAlISgLm13+9+ATye33QSuC//3zx7dvW7tbW1g7FYXM2Y44Skq6vLd/Zsd7MIjWZMhFOqzM/vOZrJWC+X0sYwAK2tnQtdd3APMBs4qSqOiH4IzANpc5z6tYWbeAF4xuJAPXBaVdaKaCwP/hywwnFCv3g1cQOA/M2PmcNF9FAyWbYyGEw3gb4tIj9dudL7WCQScUcCsHv37kB/f/KwiCwC+UAkvUPV/zWwBDiXyViLvJoYAmBsnsnI/rzaz6haT6VS0l9WNvgXcJdlSc26dfU/eNGX0oCZj8XaloIcABLJpG9OWZmUQ+YgMBc46vfrsoJPDAGIRuObRXjvRkfRXpDpBrmIvK/KRRF60mm3R/XfnkCgPGHW+/065do1qgIBa4YqM0SoUtXNwEzIyqg0blGQrcqWcDi0Kesr5pNX/Z9AubG368qjIiwC7hhj2I227B/gR+BnwPjQQCZjLTCmyAKIxeK7gDdAvnKcepNoaGnpnKc6eAq4IkKnKvcC00WkUlWNVsytJudOlqugF4Hsqyo9IlwArQOmiPjm2/aa0/mzjIOvENFdtt2wRkyGq6ioNBsrRGSxbdcfyS1sfxX0Y2CP44RWlrrizXzA46TG+V4Eec1x6j/JXay9RlVNHkkkEpeqpLU1/rzr8i1wxHFCi4vDSVU2hsP128YDIBpt3yCizUC744RCHtkGQI1lsVxisXgHsAZodpzQW55Fe4FnwHrBceoMwGHP6BroWA7uN8B3jhN6tiCgpaWtWVU2AJ0GwD5gmYiusu2GzzwAfgUeBBYWJ4+R8kBRmD4MHAd+c5zQQ4W5aDS+SoQuYL8B8Adwv9dRcraKX1blbkhXOo5zeXwaiE2DwCUR/rbt0LTrGhhy8BMGwNXr3jxaNN3y+f4JBiBXb6sJ2tvbK1Mp7R3NBFknVKU2HA59OhFOmA1DEd1m2w0bb0cYirDXtkPPeaJgmwhN2TD8PxKRKvFwONRQMhFNeCrOxXxbp6q86c373mIEEgOtBqpFtFpVsv8ekmrKcreIdqtKd+6fHlXsUYuRAeApx4Z8tgCP5IlJ+S2KfFOOj4rocVVZN6wcm0NKEBJDOHuBKhHOq7Ie9CxYl8HXNzjY3+fzTeo3e/1+neS67lTVwEzX1VkiOhPY4iEkpnwPPcMIiZkppmR+vz45MOAfyFOyCte1ljY21h0qyvVDrNg7vnNnxxOW5R40PCEYZG4yKYboHACdc1NK5jFFlpQCh1Op4IsFUqqqxyZPLluyevXq9EjFyEtKRdiaTAZ3BIMpQ0JGJqUFoUW0/ARoI0hrjpYPq+vDNBCLxQu0/AzoWpDomGl5AUSJxsTwxQW5edmRSPRuNPTcywcikYhVUTG9GXR9dtV4G5MCiJFbM46oEhUhyx/yrZnpiAqdVEHM+Fozr0NNWHNaHP+3qz3/D9K3FAYDioxsAAAAAElFTkSuQmCC"}}]);