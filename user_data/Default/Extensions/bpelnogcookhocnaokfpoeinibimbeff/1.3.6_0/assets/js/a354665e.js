"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[3344,7995],{20458:(e,t,l)=>{l.r(t);l(57334);var a=l(1096),s=l(68398),o=l(79282),n=l(43451),i=l(34679),r=l(49466),c=l(57268),p=l(29445),d=l(94209),x=l(27845),u=l(50340);const f={class:"eclock-item relative h-full w-full bg-cover bg-no-repeat"},g=(0,c.aZ)({__name:"e-item",props:{current:null},setup(e){const t=e;return(e,l)=>((0,c.wg)(),(0,c.iD)("div",f,[(0,c._)("div",{class:"absolute inset-0 bg-cover bg-no-repeat transition-[background]",style:(0,d.normalizeStyle)({backgroundImage:`url(https://static.wetab.link/hitab/clock-widget/world/${t.current}.svg)`})},null,4)]))}});var m=l(76911);const w=(0,m.Z)(g,[["__scopeId","data-v-14ecfa74"]]),h={class:"flex items-center justify-center"},v={class:"flex h-[24px] w-[34px] items-center justify-center rounded-[3px] bg-color-black"},b=(0,c._)("section",{class:"flex h-[8px] flex-col items-center justify-between px-[4px]"},[(0,c._)("span",{class:"h-[2px] w-[2px] bg-[#188331]"}),(0,c._)("span",{class:"h-[2px] w-[2px] bg-[#188331]"})],-1),_={class:"flex h-[24px] w-[34px] items-center justify-center rounded-[3px] bg-color-black"},y=(0,c._)("section",{class:"flex h-[8px] flex-col items-center justify-between px-[4px]"},[(0,c._)("span",{class:"h-[2px] w-[2px] bg-[#188331]"}),(0,c._)("span",{class:"h-[2px] w-[2px] bg-[#188331]"})],-1),S={class:"flex h-[24px] w-[34px] items-center justify-center rounded-[3px] bg-color-black"},k=(0,c.aZ)({__name:"e-clock",props:{time:null},setup(e){const t=e;return(e,l)=>((0,c.wg)(),(0,c.iD)("div",h,[(0,c._)("section",v,[(0,c.Wm)(w,{current:t.time[0],class:"h-[16px] w-[10px]"},null,8,["current"]),(0,c.Wm)(w,{current:t.time[1],class:"ml-[2px] h-[16px] w-[10px]"},null,8,["current"])]),b,(0,c._)("section",_,[(0,c.Wm)(w,{current:t.time[2],class:"h-[16px] w-[10px]"},null,8,["current"]),(0,c.Wm)(w,{current:t.time[3],class:"ml-[2px] h-[16px] w-[10px]"},null,8,["current"])]),y,(0,c._)("section",S,[(0,c.Wm)(w,{current:t.time[4],class:"h-[16px] w-[10px]"},null,8,["current"]),(0,c.Wm)(w,{current:t.time[5],class:"ml-[2px] h-[16px] w-[10px]"},null,8,["current"])])]))}});var C=l(44821);const U=["data-id"],D={class:"relative"},E={class:"absolute top-[67px] right-[28px] z-[0] font-ali-55 text-[12px] text-color-wclock-t3"},j={class:"flex flex-col items-center pt-[24px] leading-none"},W={class:"font-ali-65 text-[24px] text-color-wclock-t1"},Z={class:"time-view mt-[16px] flex items-center font-ali-55 text-[12px] text-color-wclock-t2"},I=["src"],z={class:"mt-[12px] font-ali-55 text-[16px] text-color-wclock-t3"},H={class:"ml-[6px]"},O={class:"flex justify-center pt-[24px]"},T=[(e=>((0,c.dD)("data-v-5d5a6914"),e=e(),(0,c.Cn)(),e))((()=>(0,c._)("i",{class:"iconfont icon-toggle_s text-[12px] text-color-white"},null,-1)))],M=(0,c.aZ)({__name:"clock-item",props:{data:null,timeArr:null},emits:["on-switch"],setup(e,t){let{emit:l}=t;const a=e,s=(0,C.useWorldClockStore)();return(e,t)=>((0,c.wg)(),(0,c.iD)("div",{class:(0,d.normalizeClass)(["clock-item group relative z-0 flex w-[162px] cursor-pointer flex-col icon-m:mx-[16px] icon-s:mx-[14px]",[(0,p.SU)(s).dragId===a.data.id?"opacity-50":""]]),"data-id":a.data.id},[(0,c._)("div",D,[(0,c.Wm)(u.Z,{class:"h-[152px] w-[152px]",hour:a.data.hour,min:a.data.min,sec:a.data.sec,dot:36},null,8,["hour","min","sec"]),(0,c._)("div",E,(0,d.toDisplayString)(a.data.utcOffset),1)]),(0,c._)("div",j,[(0,c._)("div",W,(0,d.toDisplayString)(a.data.name),1),(0,c._)("div",Z,[(0,c.Wm)(k,{time:a.timeArr},null,8,["time"]),(0,c._)("img",{draggable:"false",class:"ml-[8px] h-[16px] w-[32px]",src:`https://static.wetab.link/hitab/clock-widget/world/${a.data.tag.toLowerCase()}.svg`,alt:""},null,8,I)]),(0,c._)("div",z,[(0,c._)("span",null,(0,d.toDisplayString)(a.data.dateStr),1),(0,c._)("span",H,(0,d.toDisplayString)(a.data.weekStr),1)])]),(0,c._)("div",O,[(0,c._)("div",{class:"clock-edit expand-click flex h-[20px] w-[20px] cursor-pointer items-center justify-center rounded-[12px] bg-color-wclock-t1 opacity-0 transition-[opacity] duration-300 group-hover:opacity-100",onClick:t[0]||(t[0]=e=>l("on-switch"))},T)])],10,U))}}),R=(0,m.Z)(M,[["__scopeId","data-v-5d5a6914"]]);var A=l(34133);let K,L,Y=0;var $=l(79149);const q=e=>((0,c.dD)("data-v-53ee12f5"),e=e(),(0,c.Cn)(),e),N={class:"clock-content relative z-0 h-full w-full bg-color-wclock-b1"},V=q((()=>(0,c._)("div",{class:"top-bg absolute top-[-18px] left-0 h-[126px] w-full bg-cover bg-center bg-no-repeat"},null,-1))),B={class:"bottom-bg absolute bottom-[-16px] left-0 flex h-[84px] w-full justify-end bg-cover bg-center bg-no-repeat"},G={class:"flex items-center pr-[28px] pb-[28px] font-ali-55 text-[14px] text-[#5E5E62]"},P={class:"absolute inset-0 z-[1] bg-color-wclock-b1 transition-[display]"},F=[q((()=>(0,c._)("i",{class:"iconfont icon-times_icon text-[22px] leading-none"},null,-1)))],J={class:"flex justify-center pt-[52px]"},Q={class:"relative flex h-[44px] w-[352px] items-center overflow-hidden rounded-[8px] bg-color-white bg-opacity-5"},X=q((()=>(0,c._)("i",{class:"iconfont icon-magnifier_icon absolute left-[12px] text-[20px] text-[#C8C8CC]"},null,-1))),ee=["placeholder"],te=[q((()=>(0,c._)("img",{src:"https://static.wetab.link/hitab/clock-widget/world/clear.png",draggable:"false",class:"h-full w-full",alt:""},null,-1)))],le={class:"px-[40px] transition-[display] duration-300"},ae={class:"pt-[20px] font-ali-65 text-[14px] leading-none text-[#5E5E62]"},se={class:"flex flex-wrap pt-[16px]"},oe=["onClick"],ne=["src"],ie={class:"ml-[12px] cursor-pointer font-ali-65 text-[14px] leading-none text-[#8E8E94]"},re={class:"mt-[40px] flex justify-center"},ce={class:"w-[352px]"},pe=["onClick"],de={class:"text-[#8E8E94]"},xe={class:"text-[#5E5E62]"},ue=(0,c.aZ)({__name:"widget-wclock-modal",setup(e){const{onCloseModal:t,show:l}=(0,x.dd)(),{allCityData:a,is12Hour:u,changeIs12Hour:f,showSearch:g,searchKey:m,onClickHideSearch:w,onClickShowSearch:h,onInputSearchKey:v,onSelectResultItem:b,searchResult:_,onClickClear:y,isLoading:S}=(0,x.UV)(),k=(0,C.useWorldClockStore)(),U=()=>{E=new A.O({dragRoot:D.value,dragSelector:".drag",dropRoot:D.value,dropSelector:".drop",dropLine:"x",withDragMoveStart:!0}),E.subscribe((e=>{switch(e.type){case"dragStart":j.value=!0;break;case"dragMoveStart":const t=e.payload.dragElement.dataset.id;k.setDragId(t),setTimeout((()=>{(e=>{let{x:t,dragElement:l}=e;const{left:a,top:s,width:o,height:n}=l.getBoundingClientRect();Y=t-a,K=l.cloneNode(!0),K.style.position="fixed",K.style.top=s+"px",K.style.left=a+"px",K.style.width=o+"px",K.style.height=n+"px",K.style.pointerEvents="none",K.style.opacity="1",K.classList.add("fake"),K.classList.add("z-10"),L=document.querySelector(".city-list-wraper"),L.appendChild(K)})(e.payload)}),0);break;case"dragEnd":k.setDragId(""),j.value=!1,K&&(L.removeChild(K),K=null);break;case"dragMove":(e=>{let{x:t,startMove:l}=e;if(!K)return;if(!l)return;const a=t-Y;K.style.left=a+"px"})(e.payload);break;case"drop":(e=>{let{dropElement:t}=e;if(!K)return;const l=(0,C.useWorldClockStore)();if(l.flipping)return;const a=K.dataset.id,s=t.dataset.id;l.dragSort(a,s)})(e.payload)}}))},D=(0,p.iH)();let E=null;const j=(0,p.iH)(!1);return(0,c.bv)((()=>{k.startTimer(),D.value&&!E&&U()})),(0,c.Ah)((()=>{k.clearTimer()})),(0,c.YP)((()=>l.value),(e=>{if(e){if(E)return!1;(0,c.Y3)((()=>{U()}))}})),(e,x)=>{const k=r.Z,C=i.Z,U=n.Z,E=o.Z;return(0,c.wg)(),(0,c.j4)(E,{ani:"fade",show:(0,p.SU)(l)},{default:(0,c.w5)((()=>[(0,c.Wm)(U,{class:"dark","full-screen-btn":!1,onOnClose:(0,p.SU)(t)},{default:(0,c.w5)((()=>[(0,c._)("div",N,[V,(0,c._)("div",B,[(0,c._)("div",G,[(0,c._)("span",null,(0,d.toDisplayString)("12小时制"),1),(0,c.Wm)(k,{value:(0,p.SU)(u),class:(0,d.normalizeClass)(["ml-[12px] cursor-pointer",[(0,p.SU)(u)?"bg-color-green ":"bg-[#525353] "]]),"onUpdate:value":(0,p.SU)(f)},null,8,["value","class","onUpdate:value"])])]),(0,c._)("div",{ref_key:"wrapperRef",ref:D,class:"city-list-wraper relative flex w-full justify-between px-[88px] pt-[174px]"},[(0,c.Wm)(s.TransitionGroup,{name:j.value?"list":void 0},{default:(0,c.w5)((()=>[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)((0,p.SU)(a),(e=>((0,c.wg)(),(0,c.j4)(R,{key:e.id,class:"drag drop",data:e,"time-arr":e.timeNumberArr,onOnSwitch:t=>(0,p.SU)(h)(e)},null,8,["data","time-arr","onOnSwitch"])))),128))])),_:1},8,["name"])],512),(0,c.wy)((0,c._)("div",P,[(0,c._)("div",{class:"close-btn absolute right-[28px] top-[28px] z-10 flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[16px] border-[2px] border-solid border-[#8E8E94] text-[#8E8E94] transition-all hover:border-color-white hover:text-color-white",onClick:x[0]||(x[0]=function(){return(0,p.SU)(w)&&(0,p.SU)(w)(...arguments)})},F),(0,c._)("div",J,[(0,c._)("div",Q,[X,(0,c.wy)((0,c._)("input",{"onUpdate:modelValue":x[1]||(x[1]=e=>(0,p.dq)(m)?m.value=e:null),type:"text",placeholder:"请输入城市",class:"h-full w-full bg-color-none px-[44px] font-ali-65 text-[14px] text-[#C8C8CC] placeholder:text-[#5E5E62]",onInput:x[2]||(x[2]=function(){return(0,p.SU)(v)&&(0,p.SU)(v)(...arguments)})},null,40,ee),[[s.vModelText,(0,p.SU)(m)]]),(0,c.wy)((0,c._)("div",{class:"expand-click absolute right-[16px] h-[16px] w-[16px] cursor-pointer transition-[display]",onClick:x[3]||(x[3]=function(){return(0,p.SU)(y)&&(0,p.SU)(y)(...arguments)})},te,512),[[s.vShow,(0,p.SU)(m)]])])]),(0,c.wy)((0,c._)("div",le,[(0,c._)("div",ae,(0,d.toDisplayString)("热门城市"),1),(0,c._)("div",se,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)((0,p.SU)($.x),(e=>((0,c.wg)(),(0,c.iD)("div",{key:e.id,class:"mb-[20px] flex w-[25%]"},[(0,c._)("div",{class:"flex items-center",onClick:t=>(0,p.SU)(b)(e)},[(0,c._)("img",{draggable:"false",class:"h-[20px] w-[20px] cursor-pointer",src:e.flag,alt:""},null,8,ne),(0,c._)("span",ie,(0,d.toDisplayString)(e.name),1)],8,oe)])))),128))])],512),[[s.vShow,!(0,p.SU)(m)]]),(0,c.wy)((0,c._)("div",null,[(0,c.wy)((0,c.Wm)(C,{class:"mt-[80px]",icon:"icon-fail_icon",desc:"暂无搜索结果"},null,8,["desc"]),[[s.vShow,0===(0,p.SU)(_).length&&!(0,p.SU)(S)]]),(0,c._)("div",re,[(0,c._)("div",ce,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)((0,p.SU)(_),(e=>((0,c.wg)(),(0,c.iD)("div",{key:e.id,class:"mb-[14px] flex h-[36px] cursor-pointer items-center justify-between rounded-[8px] px-[12px] transition-colors hover:bg-color-m1 hover:bg-opacity-[0.08]",onClick:t=>(0,p.SU)(b)(e)},[(0,c._)("span",de,(0,d.toDisplayString)((e.name===e.adm2?"":`${e.adm2}-`)+e.name),1),(0,c._)("span",xe,(0,d.toDisplayString)(e.utcOffset?`UTC${e.utcOffset}`:""),1)],8,pe)))),128))])])],512),[[s.vShow,(0,p.SU)(m)]])],512),[[s.vShow,(0,p.SU)(g)]])])])),_:1},8,["onOnClose"])])),_:1},8,["show"])}}}),fe=(0,m.Z)(ue,[["__scopeId","data-v-53ee12f5"]]);var ge=l(96755),me=l(75008),we=l(63477);(()=>{const e=(0,we.em)(),t=(0,s.createApp)(fe);(0,me.f)(t),t.use(ge.M),t.use(a.Z),t.mount(e)})()}}]);