"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[2710,2861],{22854:(e,t,i)=>{i.d(t,{C:()=>n});var o=i(29445),s=i(57268);const n=(e,t,i)=>{const n=(0,o.iH)(e);t.onChangeState=e=>{n.value={...e}};const d=(0,s.Fl)((()=>i?i[n.value.size]:null));return{propsState:n,HomeComp:d}}},20259:(e,t,i)=>{i.d(t,{$:()=>n,U:()=>d});var o=i(45911),s=i(6364);const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;e.style.height="auto";const o=e.scrollHeight;e.style.height=`${o>t?t:o<i?i:o}px`};const d=new class{constructor(){window.addEventListener("resize",this.resize)}widthRecord=[1920,1920];pushRecord(e){this.widthRecord.push(e),this.widthRecord.shift()}callbackMap=new Map;register(e,t){this.callbackMap.set(e,t)}unRegister(e){this.callbackMap.delete(e)}cxecutor(){this.callbackMap.forEach((e=>{e()}))}resize=(0,o.Z)((()=>{const e=document.body.clientWidth;this.pushRecord(e),(0,s.Z)(this.widthRecord)<1024&&this.cxecutor()}),30)}},74221:(e,t,i)=>{i.r(t),i.d(t,{mountHome:()=>c,widgetApp:()=>h});var o=i(29445),s=i(68398),n=i(57268),d=i(34594);const r=(0,n.aZ)({__name:"widget-todo-home",props:{size:null,id:null},setup(e){const t=e,{HomeComp:i}=(0,d.Td)(t),{clickWidget:s}=(0,d.dd)();return(e,t)=>((0,n.wg)(),(0,n.iD)("section",{class:"contents cursor-pointer",onClick:t[0]||(t[0]=function(){return(0,o.SU)(s)&&(0,o.SU)(s)(...arguments)})},[((0,n.wg)(),(0,n.j4)((0,n.LL)((0,o.SU)(i))))]))}});var a=i(96755),l=i(75008);const h=(0,o.iH)(null),c=(e,t)=>{const i=(0,s.createApp)(r,t);return(0,l.f)(i),h.value=i,i.use(a.M),i.mount(e),h.value}},52861:(e,t,i)=>{i.r(t),i.d(t,{useTodoStore:()=>f});var o=i(94119),s=i(84522),n=i(63477),d=i(24581),r=i(10435),a=i(74003),l=i(80661),h=i.n(l);const c=[{id:"todogroup-1",updateTime:0,name:"日常计划",iconClass:"",children:[{id:"todo1-1",content:"👶 今天下午4:00去幼儿园接小儿子，千万别迟到",expire:h()().hour(16).minute(0).second(0).millisecond(0).valueOf(),finished:!1,updateTime:0},{id:"todo1-2",content:"🚗 接完东东后，去集市买干辣椒和洗衣液",finished:!1,updateTime:0},{id:"todo1-3",content:"👜 晚上给爸妈打电话在网上买点东西",finished:!1,updateTime:0},{id:"todo1-4",content:"✈️ 预定下周去北京的机票",finished:!1,updateTime:0},{id:"todo1-5",content:"🎁 给老婆买生日礼物",finished:!0,updateTime:0}]},{id:"todogroup-2",updateTime:0,name:"工作计划",iconClass:"",children:[{id:"todo2-1",content:"周一上午10:30项目开会，讨论新产品后续调整计划",expire:h()().startOf("week").hour(10).minute(30).second(0).millisecond(0).valueOf(),repeat:"week",finished:!1,updateTime:0},{id:"todo2-2",content:"下午4:30针对上午会议进行简要汇报",finished:!1,updateTime:0}]}],p=[{id:"todogroup-1",updateTime:0,name:"日常计划",iconClass:"",children:[{id:"todo1-1",content:"Go to the bank at 2pm.",expire:h()().hour(14).minute(0).second(0).millisecond(0).valueOf(),finished:!1,updateTime:0},{id:"todo1-2",content:"Date Henry at 7pm, don't be late.",finished:!1,updateTime:0},{id:"todo1-3",content:"Go to the hospital to visit my aunt at 10am.",finished:!1,updateTime:0},{id:"todo1-4",content:"Book flight to Manchester next week.",finished:!1,updateTime:0},{id:"todo1-5",content:"Prepare Christmas gifts for kids.",finished:!0,updateTime:0}]},{id:"todogroup-2",updateTime:0,name:"工作计划",iconClass:"",children:[{id:"todo2-1",content:"Go to the factory for inspection every Friday at 3 pm.",expire:h()().startOf("week").add(5,"day").hour(15).minute(0).second(0).millisecond(0).valueOf(),repeat:"week",finished:!1,updateTime:0},{id:"todo2-2",content:"Have a meeting with Kelly at 10am to discuss the plan, remember to bring materials.",finished:!1,updateTime:0}]}],u=a.sM?c:p,m=["rgba(255, 201, 104, 1)","rgba(152, 216, 93, 1)","rgba(255, 151, 101, 1)","rgba(133, 83, 255, 1)","rgba(146, 165, 255, 1)","rgba(212, 212, 212, 1)"],f=(0,r.Q_)(s.BU.todo,{syncStorage:{watch:["todos"]},syncCloud:{watch:["todos"]},state:()=>({todos:u,modalShow:!1,finishedShow:!1,activeGroupIndex:0,searchValue:"",activeSearch:!1,needTransition:!1,groupFlipping:!1,groupFlipingTimer:null,todoFlipping:!1,todoFlipingTimer:null,dragGroupId:"",dragTodoId:"",trigger:0}),getters:{allList(){return this.todos.reduce(((e,t)=>(t.children.forEach((t=>{e.push(t)})),e)),[])},finishedAllList(){return this.allList.filter((e=>e.finished))},unfinishedAllList(){return this.allList.filter((e=>!e.finished))},homeList(){let e=[...this.unfinishedTaskList];return e.length<m.length&&(e=e.concat(this.unfinishedAllList.filter((e=>!e.expire)))),e.length>m.length&&(e.length=m.length),e.map(((e,t)=>({...e,color:m[t]})))},homeUndoNum(){const e=this.timelineList.overdue.length+this.timelineList.today.length;return e>99?"99+":e},finishedTaskList(){return this.finishedAllList.filter((e=>e.expire)).sort(((e,t)=>e.expire-t.expire))},unfinishedTaskList(){return this.unfinishedAllList.filter((e=>e.expire)).sort(((e,t)=>e.expire-t.expire))},timelineList(){this.trigger;const e=[0,h()()],t=[e[1],h()().endOf("date")],i=[t[1],h()().add(1,"day").endOf("day")],o=[i[1],h()().endOf("week")],s=[o[1],h()().add(1,"week").endOf("week")],n=[s[1],h()().endOf("month")],d=[n[1],h()().add(1,"month").endOf("month")],r={overdue:[],today:[],tomorrow:[],week:[],nextweek:[],month:[],nextmonth:[],later:[]};return this.unfinishedTaskList.forEach((a=>{const l=h()(a.expire);l.isBefore(e[1])?r.overdue.push(a):l.isBefore(t[1])?r.today.push(a):l.isBefore(i[1])?r.tomorrow.push(a):l.isBefore(o[1])?r.week.push(a):l.isBefore(s[1])?r.nextweek.push(a):l.isBefore(n[1])?r.month.push(a):l.isBefore(d[1])?r.nextmonth.push(a):r.later.push(a)})),r},finishedTodayList(){const e=h()().endOf("date"),t=h()().startOf("date");return this.finishedTaskList.filter((i=>h()(i.expire).isBefore(e)&&h()(i.expire).isAfter(t)))},unfinishedTodayList(){const e=h()().endOf("date"),t=h()().startOf("date");return this.unfinishedTaskList.filter((i=>h()(i.expire).isBefore(e)&&h()(i.expire).isAfter(t)))},finishedGroupList(){return 0===this.todos.length||"number"!=typeof this.activeGroupIndex?[]:this.todos[this.activeGroupIndex].children.filter((e=>e.finished))},unfinishedGroupList(){return 0===this.todos.length?[]:"task"===this.activeGroupIndex?this.unfinishedTaskList:"today"===this.activeGroupIndex?this.unfinishedTodayList:this.todos[this.activeGroupIndex].children.filter((e=>!e.finished))},finishedList(){return this.activeSearch?this.finishedAllList.filter((e=>e.content.toLowerCase().includes(this.searchValue.toLowerCase()))):"number"==typeof this.activeGroupIndex?this.finishedGroupList:"task"===this.activeGroupIndex?this.finishedTaskList:"today"===this.activeGroupIndex?this.finishedTodayList:[]},unfinishedList(){return this.activeSearch?this.unfinishedAllList.filter((e=>e.content.toLowerCase().includes(this.searchValue.toLowerCase()))):this.unfinishedGroupList},currentTodoList(){return this.trigger,this.finishedShow?this.unfinishedList.concat(this.finishedList):this.unfinishedList}},actions:{refreshView(){this.trigger=Date.now()},setNeedTransition(e){this.needTransition=e},setSearchValue(e){e?(this.setNeedTransition(!1),this.activeSearch=!0):this.activeSearch=!1,this.searchValue=e},setModal(e){o.G.setStatus(d.Rm.todo,e),this.modalShow=e},setFinishedShow(e){this.finishedShow=e},clearCompleted(){this.finishedList.forEach((e=>{this.deleteTodo(e.id,!1)})),this.todos=[...this.todos]},saveGroup(e){let{id:t,name:i,iconClass:o}=e;t?this.todos.some((e=>{if(e.id===t)return e.name=i,e.iconClass=o,e.updateTime=Date.now(),!0})):this.todos.push({id:(0,n.kb)("todogroup-"),iconClass:o,name:i,updateTime:Date.now(),children:[]}),this.todos=[...this.todos]},deleteGroup(e){this.setNeedTransition(!1);const t=this.todos.findIndex((t=>t.id===e));t>-1&&(this.todos.splice(t,1),"number"==typeof this.activeGroupIndex&&this.activeGroupIndex>this.todos.length-1&&(this.activeGroupIndex=this.todos.length-1),0===this.todos.length?(this.saveGroup({name:"新建列表",iconClass:""}),this.selectGroup(0)):this.todos=[...this.todos])},selectGroup(e){this.setNeedTransition(!1),this.activeGroupIndex=e,this.activeSearch=!1},selectGroupId(e){const t=this.todos.findIndex((t=>t.id===e));t>-1?this.selectGroup(t):this.selectGroup(e)},findTodoIndexes(e){let t,i;return this.todos.some(((o,s)=>o.children.some(((o,n)=>o.id===e&&(t=s,i=n,!0))))),"number"==typeof i?[t,i]:null},saveTodo(e,t){this.setNeedTransition(!0);const i=Date.now();if(e.id){const t=this.findTodoIndexes(e.id);if(t){const[o,s]=t;Object.assign(this.todos[o].children[s],{...e,updateTime:i}),this.todos[o].updateTime=i}}else if("number"==typeof this.activeGroupIndex)this.todos[this.activeGroupIndex].children.push({...e,id:(0,n.kb)("todo-"),updateTime:i}),this.todos[this.activeGroupIndex].updateTime=i;else if(t){const o=this.findTodoIndexes(t);if(o){const[t]=o;this.todos[t].children.push({...e,id:(0,n.kb)("todo-"),updateTime:i}),this.todos[t].updateTime=i}}this.todos=[...this.todos]},deleteTodo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.setNeedTransition(!0);const i=this.findTodoIndexes(e);if(i){const[e,o]=i;this.todos[e].children.splice(o,1),this.todos[e].updateTime=Date.now(),!0===t&&(this.todos=[...this.todos])}},dragSortGroup(e,t){if(e===t)return;const i=this.todos.findIndex((e=>t===e.id)),o=this.todos.findIndex((t=>e===t.id));-1!==i&&-1!==o&&(i>o?(this.todos.splice(i+1,0,this.todos[o]),this.todos.splice(o,1)):(this.todos.splice(i,0,this.todos[o]),this.todos.splice(o+1,1)),this.selectGroupId(e),this.todos=[...this.todos],this.setGroupFlipping(!0))},setGroupFlipping(e){window.clearTimeout(this.groupFlipingTimer),e&&(this.groupFlipping=e,this.groupFlipingTimer=window.setTimeout((()=>{this.groupFlipping=!1}),200))},setDragGroupId(e){this.dragGroupId=e},dragSortTodo(e,t){var i;if(e===t)return;const o=null===(i=this.todos[this.activeGroupIndex])||void 0===i?void 0:i.children;if(!o)return;const s=o.findIndex((e=>t===e.id)),n=o.findIndex((t=>e===t.id));-1!==s&&-1!==n&&(s>n?(o.splice(s+1,0,o[n]),o.splice(n,1)):(o.splice(s,0,o[n]),o.splice(n+1,1)),this.todos=[...this.todos],this.setTodoFlipping(!0))},setTodoFlipping(e){window.clearTimeout(this.todoFlipingTimer),e&&(this.todoFlipping=e,this.todoFlipingTimer=window.setTimeout((()=>{this.todoFlipping=!1}),200))},setDragTodoId(e){this.dragTodoId=e}}})},34594:(e,t,i)=>{i.d(t,{Yt:()=>le,dd:()=>re,TW:()=>he,Iz:()=>ae,Td:()=>de,gT:()=>ce});var o=i(57268),s=i(29445),n=i(94209),d=i(52861);const r=e=>((0,o.dD)("data-v-6b853774"),e=e(),(0,o.Cn)(),e),a={class:"todo-small flex h-full w-full items-center bg-color-b4 bg-contain bg-right bg-no-repeat"},l={key:0,class:"absolute right-[-8px] top-[-8px] flex h-[24px] min-w-[24px] items-center justify-center rounded-[12px] bg-color-red px-[7px] text-[12px] text-color-white"},h=r((()=>(0,o._)("div",{class:"icon ml-[24px] h-[40px] w-[40px] rounded-[8px] bg-cover icon-m:ml-[16px] icon-s:ml-[10px]"},null,-1))),c={class:"ml-[16px] icon-m:ml-[12px] icon-s:ml-[10px]"},p=r((()=>(0,o._)("div",{class:"font-ali-65 text-[16px] text-color-todo-t1"},"To do",-1))),u={class:"flex items-center text-[12px] text-color-todo-t2"},m={class:"mr-[3px]"},f=r((()=>(0,o._)("i",{class:"iconfont icon-more_icon"},null,-1))),x=(0,o.aZ)({__name:"todo-small",setup(e){const t=(0,d.useTodoStore)();return(e,i)=>((0,o.wg)(),(0,o.iD)("section",a,[(0,s.SU)(t).homeUndoNum?((0,o.wg)(),(0,o.iD)("div",l,(0,n.toDisplayString)((0,s.SU)(t).homeUndoNum),1)):(0,o.kq)("",!0),h,(0,o._)("div",c,[p,(0,o._)("div",u,[(0,o._)("span",m,(0,n.toDisplayString)("新建计划"),1),f])])]))}});var g=i(76911);const v=(0,g.Z)(x,[["__scopeId","data-v-6b853774"]]);var w=i(10865);const T={class:"todo-home-item flex items-center"},y={class:"ml-[8px] overflow-hidden text-ellipsis whitespace-nowrap font-ali-55 text-[12px] text-color-t2"},k=(0,o.aZ)({__name:"todo-home-item",props:{todo:null},setup(e){const t=e;return(e,i)=>((0,o.wg)(),(0,o.iD)("section",T,[(0,o._)("div",{class:"h-[10px] w-[4px] shrink-0 rounded-[2px]",style:(0,n.normalizeStyle)("background-color:"+t.todo.color)},null,4),(0,o._)("div",y,(0,n.toDisplayString)(t.todo.content),1)]))}}),S=e=>((0,o.dD)("data-v-ed6f9a88"),e=e(),(0,o.Cn)(),e),b={class:"todo-medium h-full w-full items-center bg-color-b4"},G={key:0,class:"absolute right-[-8px] top-[-8px] flex h-[24px] min-w-[24px] items-center justify-center rounded-[12px] bg-color-red px-[7px] text-[12px] text-color-white"},I=S((()=>(0,o._)("div",{class:"header m-auto flex h-[28px] w-[120px] items-center justify-center bg-no-repeat text-center text-color-white icon-m:h-[24px] icon-s:h-[20px]"},[(0,o._)("span",{class:"leading-none"},"To do"),(0,o._)("img",{class:"h-[16px] w-[16px]",src:w,draggable:!1,alt:""})],-1))),L={key:1,class:"mt-[16px] flex flex-col px-[20px] icon-m:mt-[12px] icon-m:px-[16px] icon-s:mt-[12px] icon-s:px-[12px]"},A={key:2,class:"notodo-box flex items-center justify-center"},_=[S((()=>(0,o._)("div",{class:"notodo h-[120px] w-[120px]"},null,-1)))],C=(0,o.aZ)({__name:"todo-medium",setup(e){const t=(0,d.useTodoStore)();return(e,i)=>((0,o.wg)(),(0,o.iD)("section",b,[(0,s.SU)(t).homeUndoNum?((0,o.wg)(),(0,o.iD)("div",G,(0,n.toDisplayString)((0,s.SU)(t).homeUndoNum),1)):(0,o.kq)("",!0),I,(0,s.SU)(t).homeList.length>0?((0,o.wg)(),(0,o.iD)("div",L,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,s.SU)(t).homeList,((e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:e.id},[t<6?((0,o.wg)(),(0,o.j4)(k,{key:0,class:"mb-[13px] icon-m:mb-[9px] icon-s:mb-[5px]",todo:e},null,8,["todo"])):(0,o.kq)("",!0)],64)))),128))])):((0,o.wg)(),(0,o.iD)("div",A,_))]))}}),D=(0,g.Z)(C,[["__scopeId","data-v-ed6f9a88"]]),O=e=>((0,o.dD)("data-v-c2d5d622"),e=e(),(0,o.Cn)(),e),F={class:"todo-large flex h-full w-full items-center bg-color-b4"},U={key:0,class:"absolute right-[-8px] top-[-8px] flex h-[24px] min-w-[24px] items-center justify-center rounded-[12px] bg-color-red px-[7px] text-[12px] text-color-white"},N={class:"flex h-full w-[200px] shrink-0 flex-col justify-between border-r-[1px] border-color-t1 border-opacity-[0.06] bg-color-b3 p-[24px] icon-m:w-[172px] icon-m:p-[20px] icon-s:w-[152px] icon-s:p-[16px]"},B=O((()=>(0,o._)("div",{class:"icon ml-[-4px] h-[56px] w-[60px]"},null,-1))),M={class:"leading-none"},E=O((()=>(0,o._)("span",{class:"text-[18px] text-color-todo-t2"},"To do",-1))),H={class:"mt-[8px]"},R={class:"inline-block font-ali-75 text-[40px] text-color-todo-t1"},Z={class:"ml-[8px] text-[12px] text-color-todo-t2"},J={key:1,class:"h-full overflow-hidden p-[20px]"},V={class:"flex items-center text-[12px] text-color-todo-t2"},j={class:"mr-[3px]"},z=O((()=>(0,o._)("i",{class:"iconfont icon-more_icon"},null,-1))),Y={class:"mt-[20px] flex flex-col icon-s:mt-[16px]"},K={key:2,class:"notodo-box flex h-full items-center justify-center"},Q=[O((()=>(0,o._)("div",{class:"notodo h-[120px] w-[120px]"},null,-1)))],W=(0,o.aZ)({__name:"todo-large",setup(e){const t=(0,d.useTodoStore)();return(e,i)=>((0,o.wg)(),(0,o.iD)("section",F,[(0,s.SU)(t).homeUndoNum?((0,o.wg)(),(0,o.iD)("div",U,(0,n.toDisplayString)((0,s.SU)(t).homeUndoNum),1)):(0,o.kq)("",!0),(0,o._)("div",N,[B,(0,o._)("div",M,[E,(0,o._)("div",H,[(0,o._)("span",R,(0,n.toDisplayString)((0,s.SU)(t).unfinishedAllList.length),1),(0,o._)("span",Z,(0,n.toDisplayString)(((0,s.SU)(t).unfinishedAllList.length,"条记录")),1)])])]),(0,s.SU)(t).homeList.length>0?((0,o.wg)(),(0,o.iD)("div",J,[(0,o._)("div",V,[(0,o._)("span",j,(0,n.toDisplayString)("新建计划"),1),z]),(0,o._)("div",Y,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,s.SU)(t).homeList,((e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:e.id},[t<5?((0,o.wg)(),(0,o.j4)(k,{key:0,class:"mb-[13px] last:mb-0 icon-m:mb-[9px] icon-s:mb-[5px]",todo:e},null,8,["todo"])):(0,o.kq)("",!0)],64)))),128))])])):((0,o.wg)(),(0,o.iD)("div",K,Q))]))}}),q=(0,g.Z)(W,[["__scopeId","data-v-c2d5d622"]]);var X=i(74221),P=i(22854),$=i(10435),ee=i(20259),te=i(82410);const ie=()=>{var e,t,i;window.getSelection&&(null!==(e=window.getSelection())&&void 0!==e&&e.empty?null===(i=window.getSelection())||void 0===i||i.empty():null!==(t=window.getSelection())&&void 0!==t&&t.removeAllRanges&&window.getSelection().removeAllRanges())};var oe=i(80661),se=i.n(oe),ne=i(17319);const de=e=>{const t={s:v,m:D,l:q};return(0,P.C)(e,X.widgetApp.value,t)},re=()=>{const e=(0,d.useTodoStore)();return{clickWidget:()=>{e.setModal(!0)},onCloseModal:()=>{e.setModal(!1)},show:(0,$.Jk)(e).modalShow}},ae=()=>{const e=(0,d.useTodoStore)(),t=(0,$.Jk)(e);return{searchValue:(0,o.Fl)({get:()=>e.searchValue,set(t){e.setSearchValue(t)}}),preGroup:(0,o.Fl)((()=>[{type:"today",title:"今天",num:e.finishedShow?e.finishedTodayList.length+e.unfinishedTodayList.length:e.unfinishedTodayList.length,class:"today "+("today"!==e.activeGroupIndex||e.activeSearch?"":"active")},{type:"task",title:"计划",num:e.unfinishedTaskList.length,class:"task "+("task"!==e.activeGroupIndex||e.activeSearch?"":"active")}])),clickGroup:t=>{e.selectGroupId(t)},addGroup:(0,te.Z)((()=>{e.saveGroup({name:"新建列表",iconClass:""});const t=e.todos.length-1;e.selectGroup(t)}),1e3,{leading:!0,trailing:!1}),editActive:t=>{const i=e.activeGroupIndex,o=e.todos[i].id;"number"==typeof i&&t.forEach((e=>{e.id===o&&e.focus()}))},customGroup:t.todos,activeGroupIndex:t.activeGroupIndex,activeSearch:t.activeSearch}},le=()=>{const e=(0,s.iH)(!1),t=(0,d.useTodoStore)();return{editMode:e,onClick:i=>{t.activeGroupIndex===i&&(e.value=!0)},onBlur:(i,o)=>{const s=i.target;ie();const n=s.value;n?t.saveGroup({...o,name:n}):i.target.value=o.name,e.value=!1}}},he=()=>{const e=(0,d.useTodoStore)(),t=(0,$.Jk)(e),i=(0,o.Fl)((()=>e.activeSearch?"搜索结果":e.todos.length>0&&"number"==typeof e.activeGroupIndex?e.todos[e.activeGroupIndex].name:"task"===e.activeGroupIndex?"计划":"today"===e.activeGroupIndex?"今天":"")),n=(0,o.Fl)((()=>e.finishedList.length)),r=(0,s.iH)("");return{title:i,completed:n,finishedShow:t.finishedShow,changeFinishedShow:()=>{e.setFinishedShow(!e.finishedShow)},clearCompleted:()=>{e.clearCompleted()},newTodoContent:r,addTodo:t=>{r.value&&(e.saveTodo({content:r.value,finished:!1}),r.value="",(0,o.Y3)((()=>{t.scrollTo({top:t.scrollHeight,behavior:"smooth"})})))}}},ce=()=>{const e=(0,d.useTodoStore)(),t=(0,te.Z)((t=>{if(t.expire&&!t.finished){let i=0;if("day"===t.repeat?i=se()(t.expire).add(1,"day").valueOf():"week"===t.repeat?i=se()(t.expire).add(1,"week").valueOf():"month"===t.repeat&&(i=se()(t.expire).add(1,"month").valueOf()),i){let o=t.expire;for(;i<=se()().valueOf();)o=i,"day"===t.repeat?i=se()().add(1,"day").valueOf():"week"===t.repeat?i=se()(o).add(1,"week").valueOf():"month"===t.repeat&&(i=se()(o).add(1,"month").valueOf());let s=!1;if(("day"===t.repeat&&i-se()().add(4,"day").valueOf()>0||"week"===t.repeat&&i-se()().add(4,"week").valueOf()>0||"month"===t.repeat&&i-se()().add(4,"month").valueOf()>0)&&(s=!0),s)return void ne.R.warn({message:"操作失败！",duration:2e3});e.saveTodo({content:t.content,finished:t.finished,expire:i,repeat:t.repeat},t.id)}}e.saveTodo({...t,finished:!t.finished})}),1e3,{leading:!0,trailing:!1}),i=(0,s.iH)(!1);return{editMode:i,onClick:()=>{i.value=!0},onBlur:(t,o)=>{ie();const s=t.target.value;e.saveTodo({...o,content:s}),i.value=!1},clickFinish:t,inputChange:function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;(0,ee.$)(e,t,i)}}}},10865:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAJhJREFUWEftldEJgDAQQ5M9dCAXcSgXcSDdIyJYKIKeVrEI6XdL0tfkSlRerKwPGzABEygmIKkDMGw17kmOJZV+YmAC0GyiM8n2awPKBUkWXabo0CosyQa+IZClPQXuatZmAGE7wgxIytN+VTztC9vxCwNp4NR5giPmrqEJ7OoZ1u0oS2ENT0JY9zu+O5FeJ2ADJmACbxFYAOWJSiG3ulSgAAAAAElFTkSuQmCC"}}]);