"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[2898,2421,102],{6858:(e,t,a)=>{a.r(t);a(42325);var l=a(97982),i=(a(57334),a(1096)),n=a(68398),o=a(96755),r=a(79282),s=a(43451),u=a(35427),d=a(57268),p=a(29445),c=a(94209),m=a(86264),f=a(47895),g=a(62144),w=a(97520),v=a(13803),y=a(40858),h=a(50557);const S=(0,d.aZ)({__name:"mark-modal-preview",setup(e){const t=(0,m.useTimerMarkStore)(),{diffDay:a,changeTimer:l}=(0,w._k)(t.widgetData.time);return(0,d.YP)((()=>t.widgetData.time),(e=>{l(e)})),(e,l)=>((0,d.wg)(),(0,d.j4)(g.Z,{sizes:(0,p.SU)(m.widgetInfo).sizes,"default-size":(0,p.SU)(t).modalState.size},{item:(0,d.w5)((e=>{let{size:l}=e;return["s"===l?((0,d.wg)(),(0,d.j4)(h.Z,{key:0,state:(0,p.SU)(t).widgetData,"diff-day":(0,p.SU)(a)},null,8,["state","diff-day"])):"m"===l?((0,d.wg)(),(0,d.j4)(y.Z,{key:1,state:(0,p.SU)(t).widgetData,"diff-day":(0,p.SU)(a)},null,8,["state","diff-day"])):"l"===l?((0,d.wg)(),(0,d.j4)(v.Z,{key:2,state:(0,p.SU)(t).widgetData,"diff-day":(0,p.SU)(a)},null,8,["state","diff-day"])):(0,d.kq)("",!0)]})),_:1},8,["sizes","default-size"]))}});var k=a(17319),_=a(63477),x=a(40294),D=a(81700);const U={class:"mx-[24px] mb-[20px] h-[44px]"},b=(0,d.aZ)({__name:"widget-mark-modal",setup(e){const t=(0,m.useTimerMarkStore)(),a=(0,p.iH)(),l=(0,d.Fl)((()=>"preview"===t.modalState.openType||"add"===t.modalState.openType)),i=e=>{t.saveModalData({timerStyle:{...t.widgetData.timerStyle,...e}})},n=e=>{t.saveModalData(e)},o=async()=>{var e,l;return await(0,_._v)(10),t.widgetData.name?t.widgetData.time?(t.saveWidgetData(),void t.closeModal()):(k.R.fail({message:"请选择日期"}),void(null===(l=a.value)||void 0===l||l.focus())):(k.R.fail({message:"请填写名称"}),void(null===(e=a.value)||void 0===e||e.focus()))};return(e,g)=>{const w=u.Z,v=s.Z,y=r.Z;return(0,d.wg)(),(0,d.j4)(y,{class:"widget-mark-modal",ani:"fade",show:(0,p.SU)(t).modalShow},{default:(0,d.w5)((()=>[(0,d.Wm)(v,{"full-screen-btn":!1,onOnClose:g[0]||(g[0]=e=>(0,p.SU)(t).closeModal())},{default:(0,d.w5)((()=>[(0,d.Wm)(f.Z,null,{title:(0,d.w5)((()=>[(0,d.Uk)((0,c.toDisplayString)((0,p.SU)(m.widgetInfo).title),1)])),left:(0,d.w5)((e=>[(0,d.Wm)(x.Z,{class:"relative mt-[28px]","timer-style":(0,p.SU)(t).widgetData.timerStyle,onOnChange:i},{default:(0,d.w5)((()=>[(0,d._)("div",U,[(0,d.Wm)(D.Z,{ref_key:"inputRef",ref:a,class:"z-20","date-picker-teleport":e.containerRef,name:(0,p.SU)(t).widgetData.name,time:(0,p.SU)(t).widgetData.time,"date-type":(0,p.SU)(t).widgetData.dateType,placeholder:"输入纪念日",onOnChange:n},null,8,["date-picker-teleport","name","time","date-type","placeholder"])])])),_:2},1032,["timer-style"])])),right:(0,d.w5)((()=>[(0,d.Wm)(S)])),footer:(0,d.w5)((()=>[(0,d.Wm)(w,{class:"w-full",onClick:o},{default:(0,d.w5)((()=>[(0,d.Uk)((0,c.toDisplayString)((0,p.SU)(l)?"添加":"完成"),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])}}});var Z=a(75008);(()=>{const e=(0,_.em)(),t=(0,n.createApp)(b);(0,Z.f)(t),t.use(o.M),t.use(i.Z),t.use(l.Z),t.mount(e)})()},81700:(e,t,a)=>{a.d(t,{Z:()=>f});var l=a(57268),i=a(68398),n=a(94209),o=a(29445),r=a(63477),s=a(5588);const u={class:"timer-input flex h-full items-center justify-between rounded-[8px] bg-color-m2 bg-opacity-[0.06]"},d=["value","placeholder"],p={class:"timer flex h-full items-center"},c={class:"pointer-events-none absolute right-[64px] text-color-t3"},m=[(0,l._)("i",{class:"iconfont icon-riqi text-[20px] text-color-blue"},null,-1)],f=(0,l.aZ)({__name:"timer-input",props:{name:null,time:null,dateType:null,datePickerTeleport:null,placeholder:{default:"请输入"}},emits:["on-change"],setup(e,t){let{expose:a,emit:f}=t;const g=e,w=(0,o.iH)(!1),v=(0,o.iH)(null),y=()=>{var e;null===(e=v.value)||void 0===e||e.focus()},h=(0,l.Fl)((()=>g.time?(0,r.F8)(g.time,g.dateType):"")),S=e=>{s.r.open({initType:g.dateType||"solar",teleport:g.datePickerTeleport,initValue:g.time||Date.now(),beforeOk(e){var t;let{value:a,type:l}=e;return f("on-change",{name:null===(t=v.value)||void 0===t?void 0:t.value,dateType:l,time:a}),y(),!0},beforeCancel:()=>(y(),!0)}),e.stopPropagation()},k=()=>{w.value=!0},_=e=>{if(w.value)return void(w.value=!1);const t=e.target.value;f("on-change",{name:t})};return a({focus:y,getValue:()=>{var e;return null===(e=v.value)||void 0===e?void 0:e.value}}),(e,t)=>((0,l.wg)(),(0,l.iD)("section",u,[(0,l._)("input",{ref_key:"inputRef",ref:v,autofocus:"",class:"h-full w-full border-0 bg-color-none pl-[12px] pr-[100px] font-ali-65 text-color-t2 outline-0",spellcheck:"false",maxlength:"100",value:g.name,type:"text",placeholder:g.placeholder,onKeyup:t[0]||(t[0]=(0,i.withKeys)((e=>_(e)),["enter"])),onBlur:t[1]||(t[1]=e=>_(e))},null,40,d),(0,l._)("div",p,[(0,l._)("span",c,(0,n.toDisplayString)((0,o.SU)(h)),1),(0,l._)("div",{class:"flex h-full cursor-pointer items-center pr-[12px]",onClick:S,onMousedown:k},m,32)])]))}})}}]);