"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[5500,2421,102],{78705:(e,t,l)=>{l.r(t);l(42325);var i=l(97982),a=(l(57334),l(1096)),n=l(68398),s=l(96755),o=l(79282),r=l(43451),c=l(35427),u=l(57268),d=l(29445),m=l(94209),p=l(41930),f=l(47895),v=l(40732),y=l(40294);const h={class:"flex items-center"},x={class:"text-color-t3"},_=(0,u._)("i",{class:"iconfont icon-return_icon ml-[8px] rotate-180 text-[12px]"},null,-1),g=(0,u.aZ)({__name:"birthday-modal-sidebar",setup(e){const t=e=>{i.setStyle(e)},l=(0,p.useTimerBirthdayStore)(),i=(0,v.G)(),a=()=>{i.getOriginList(),i.setStep(2)};return(e,n)=>((0,u.wg)(),(0,u.j4)(y.Z,{class:"mt-[32px]","timer-style":(0,d.SU)(i).timerStyle,onOnChange:t},{default:(0,u.w5)((()=>[(0,u._)("div",{class:"mx-[24px] mb-[24px] flex cursor-pointer justify-between py-[6px]",onClick:a},[(0,u._)("h1",null,(0,m.toDisplayString)("全部生日"),1),(0,u._)("div",h,[(0,u._)("span",x,(0,m.toDisplayString)((0,d.SU)(l).list.length),1),_])])])),_:1},8,["timer-style"]))}});var w=l(17530),b=l(81700),S=l(63477);const k={class:"birthday-modal-sidebar-item mb-[4px] h-[44px] leading-[1.414]"},U={key:0,class:"group flex h-full items-center justify-between px-[12px]"},Z={class:"left text-dot text-color-t2"},T={class:"right ml-[12px] flex items-center text-color-t3"},C={class:"time"},D={class:"ml-[12px]"},z={class:"block"},R={key:1,class:"h-[44px]"},j=(0,u.aZ)({__name:"birthday-modal-sidebar-item",props:{item:null,leftContainerRef:null},setup(e){const t=e,l=(0,d.iH)(!1),i=(0,d.iH)(!1),a=(0,d.iH)(),n=(0,v.G)();(0,u.bv)((()=>{t.item.name&&t.item.birthday||(l.value=!0,(0,u.Y3)((()=>{var e;null===(e=a.value)||void 0===e||e.focus()})))}));const s=(0,u.Fl)((()=>t.item.birthday?(0,S.F8)(t.item.birthday,t.item.dateType):"")),o={edit:{text:"编辑",handler(){i.value=!1,r(),(0,u.Y3)((()=>{var e;null===(e=a.value)||void 0===e||e.focus()}))}},remove:{text:"删除",handler(){i.value=!1,n.deleteBirthday(t.item.id)}}},r=()=>{l.value=!0},c=e=>{const i={};e.name?(e.time||(l.value=!1),i.name=e.name):(l.value=!0,i.name=t.item.name),e.time&&(i.birthday=e.time,i.dateType=e.dateType),n.saveBirthday({id:t.item.id,...i})};return(e,n)=>{const r=w.Z;return(0,u.wg)(),(0,u.iD)("section",k,[!l.value&&t.item.birthday?((0,u.wg)(),(0,u.iD)("div",U,[(0,u._)("div",Z,(0,m.toDisplayString)(t.item.name),1),(0,u._)("div",T,[(0,u._)("span",C,(0,m.toDisplayString)((0,d.SU)(s)),1),(0,u._)("div",D,[(0,u.Wm)(r,{show:i.value,"onUpdate:show":n[0]||(n[0]=e=>i.value=e),options:o},{reference:(0,u.w5)((()=>[(0,u._)("button",z,[(0,u._)("i",{class:(0,m.normalizeClass)([[i.value?"text-opacity-80":"text-opacity-60 hover:text-opacity-80"],"iconfont icon-single_hover_icon text-[20px] text-color-t1"])},null,2)])])),_:1},8,["show"])])])])):((0,u.wg)(),(0,u.iD)("div",R,[(0,u.Wm)(b.Z,{ref_key:"inputRef",ref:a,class:"z-20","date-picker-teleport":t.leftContainerRef,name:t.item.name,time:t.item.birthday,"date-type":t.item.dateType,placeholder:"输入姓名",onOnChange:c},null,8,["date-picker-teleport","name","time","date-type","placeholder"])]))])}}});var H=l(17319);const W=e=>((0,u.dD)("data-v-7ec281fa"),e=e(),(0,u.Cn)(),e),B=W((()=>(0,u._)("i",{class:"iconfont icon-return_icon absolute left-0 text-[20px]"},null,-1))),F={class:"grow text-center text-[16px]"},G={class:"list relative mt-[24px] pl-[24px] pr-[20px]"},L={class:"add mt-[12px] px-[24px]"},O={class:"text-[14px]"},M=W((()=>(0,u._)("i",{class:"iconfont icon-add_icon ml-[4px]"},null,-1))),Y=(0,u.aZ)({__name:"birthday-modal-sidebar-list",props:{leftContainerRef:null},setup(e,t){let{expose:l}=t;const i=e,a=(0,d.iH)(null),n=(0,d.iH)(null),s=(0,v.G)(),o=()=>{s.setStep(1)},r=()=>{let e=!1;const{list:t,editId:l}=s;if(l){const i=t.find((e=>e.id===l));!i||i.birthday&&i.name||(e=!0)}if(!e){t.find((e=>!e.birthday||!e.name))&&(e=!0)}e?p("请先完成已有的数据"):(s.newBirthday(),(0,u.Y3)((()=>{requestAnimationFrame((()=>{var e,t;null===(e=n.value)||void 0===e||e.scroll({top:null===(t=n.value)||void 0===t?void 0:t.scrollHeight,behavior:"smooth"})}))})))},p=e=>{H.R.fail({message:e})};return l({toast:p}),(e,t)=>{const l=c.Z;return(0,u.wg)(),(0,u.iD)("section",{ref_key:"wrapRef",ref:a,class:"birthday-modal-sidebar-list relative h-full pt-[28px] leading-none"},[(0,u._)("div",{class:"relative mx-[24px] flex cursor-pointer items-center text-color-t1",onClick:o},[B,(0,u._)("h1",F,(0,m.toDisplayString)("全部生日"),1)]),(0,u._)("div",{ref_key:"listRef",ref:n,class:"box hi-scroll pb-[28px]"},[(0,u._)("div",G,[((0,u.wg)(!0),(0,u.iD)(u.HY,null,(0,u.Ko)((0,d.SU)(s).list,(e=>((0,u.wg)(),(0,u.j4)(j,{key:e.id,item:e,"left-container-ref":i.leftContainerRef},null,8,["item","left-container-ref"])))),128))]),(0,u._)("div",L,[(0,u.Wm)(l,{plain:"",class:"h-[44px] !w-full border-color-b2 hover:bg-color-none hover:text-color-blue active:bg-color-none",onClick:r},{default:(0,u.w5)((()=>[(0,u._)("span",O,(0,m.toDisplayString)("添加生日"),1),M])),_:1})])],512)],512)}}});const q=(0,l(76911).Z)(Y,[["__scopeId","data-v-7ec281fa"]]);var I=l(62144),K=l(20122),P=l(96864),A=l(30259);const V=(0,u.aZ)({__name:"birthday-modal-preview",setup(e){const t=(0,p.useTimerBirthdayStore)(),l=(0,v.G)();return(e,i)=>((0,u.wg)(),(0,u.j4)(I.Z,{sizes:(0,d.SU)(v.a).sizes,"default-size":(0,d.SU)(t).modalState.size},{item:(0,u.w5)((e=>{let{size:i}=e;return["s"===i?((0,u.wg)(),(0,u.j4)(K.Z,{key:0,class:"item item-small","timer-style":(0,d.SU)(l).timerStyle,list:(0,d.SU)(t).homeList},null,8,["timer-style","list"])):"m"===i?((0,u.wg)(),(0,u.j4)(P.Z,{key:1,class:"item item-small","timer-style":(0,d.SU)(l).timerStyle,list:(0,d.SU)(t).homeList},null,8,["timer-style","list"])):"l"===i?((0,u.wg)(),(0,u.j4)(A.Z,{key:2,class:"item item-small","timer-style":(0,d.SU)(l).timerStyle,list:(0,d.SU)(t).homeList},null,8,["timer-style","list"])):(0,u.kq)("",!0)]})),_:1},8,["sizes","default-size"]))}});var N=l(12793);const E=(0,u.aZ)({__name:"widget-birthday-modal",setup(e){const t=(0,p.useTimerBirthdayStore)(),l=(0,v.G)(),i=(0,d.iH)(),a=(0,u.Fl)((()=>"preview"===t.modalState.openType||"add"===t.modalState.openType&&!t.initialized)),s=()=>{var e;if(0===t.list.length)return l.setStep(2),void(null===(e=i.value)||void 0===e||e.toast("请先添加生日"));if(a.value){(0,N.i)().saveIcon({type:"widget",name:v.a.title,widgetSize:t.modalState.size,widgetName:v.a.name,origin:"add"})}l.saveStyle(),t.setModal(!1)};return(e,p)=>{const y=c.Z,h=r.Z,x=o.Z;return(0,u.wg)(),(0,u.j4)(x,{class:"widget-birthday-modal",ani:"fade",show:(0,d.SU)(t).modalShow},{default:(0,u.w5)((()=>[(0,u.Wm)(h,{"full-screen-btn":!1,onOnClose:p[0]||(p[0]=e=>(0,d.SU)(t).setModal(!1))},{default:(0,u.w5)((()=>[(0,u.Wm)(f.Z,null,{title:(0,u.w5)((()=>[(0,u.Uk)((0,m.toDisplayString)((0,d.SU)(v.a).title),1)])),left:(0,u.w5)((e=>[(0,u.wy)((0,u.Wm)(g,null,null,512),[[n.vShow,1===(0,d.SU)(l).step]]),(0,u.wy)((0,u.Wm)(q,{ref_key:"sideListRef",ref:i,"left-container-ref":e.containerRef},null,8,["left-container-ref"]),[[n.vShow,2===(0,d.SU)(l).step]])])),right:(0,u.w5)((()=>[(0,u.Wm)(V)])),footer:(0,u.w5)((()=>[(0,u.Wm)(y,{class:"w-full",onClick:s},{default:(0,u.w5)((()=>[(0,u.Uk)((0,m.toDisplayString)((0,d.SU)(a)?"添加":"完成"),1)])),_:1})])),_:1})])),_:1})])),_:1},8,["show"])}}});var J=l(75008);(()=>{const e=(0,S.em)(),t=(0,n.createApp)(E);(0,J.f)(t),t.use(s.M),t.use(a.Z),t.use(i.Z),t.mount(e)})()},81700:(e,t,l)=>{l.d(t,{Z:()=>f});var i=l(57268),a=l(68398),n=l(94209),s=l(29445),o=l(63477),r=l(5588);const c={class:"timer-input flex h-full items-center justify-between rounded-[8px] bg-color-m2 bg-opacity-[0.06]"},u=["value","placeholder"],d={class:"timer flex h-full items-center"},m={class:"pointer-events-none absolute right-[64px] text-color-t3"},p=[(0,i._)("i",{class:"iconfont icon-riqi text-[20px] text-color-blue"},null,-1)],f=(0,i.aZ)({__name:"timer-input",props:{name:null,time:null,dateType:null,datePickerTeleport:null,placeholder:{default:"请输入"}},emits:["on-change"],setup(e,t){let{expose:l,emit:f}=t;const v=e,y=(0,s.iH)(!1),h=(0,s.iH)(null),x=()=>{var e;null===(e=h.value)||void 0===e||e.focus()},_=(0,i.Fl)((()=>v.time?(0,o.F8)(v.time,v.dateType):"")),g=e=>{r.r.open({initType:v.dateType||"solar",teleport:v.datePickerTeleport,initValue:v.time||Date.now(),beforeOk(e){var t;let{value:l,type:i}=e;return f("on-change",{name:null===(t=h.value)||void 0===t?void 0:t.value,dateType:i,time:l}),x(),!0},beforeCancel:()=>(x(),!0)}),e.stopPropagation()},w=()=>{y.value=!0},b=e=>{if(y.value)return void(y.value=!1);const t=e.target.value;f("on-change",{name:t})};return l({focus:x,getValue:()=>{var e;return null===(e=h.value)||void 0===e?void 0:e.value}}),(e,t)=>((0,i.wg)(),(0,i.iD)("section",c,[(0,i._)("input",{ref_key:"inputRef",ref:h,autofocus:"",class:"h-full w-full border-0 bg-color-none pl-[12px] pr-[100px] font-ali-65 text-color-t2 outline-0",spellcheck:"false",maxlength:"100",value:v.name,type:"text",placeholder:v.placeholder,onKeyup:t[0]||(t[0]=(0,a.withKeys)((e=>b(e)),["enter"])),onBlur:t[1]||(t[1]=e=>b(e))},null,40,u),(0,i._)("div",d,[(0,i._)("span",m,(0,n.toDisplayString)((0,s.SU)(_)),1),(0,i._)("div",{class:"flex h-full cursor-pointer items-center pr-[12px]",onClick:g,onMousedown:w},p,32)])]))}})}}]);