"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[2556,1261,96,4118,3292,6611,3980,3391],{45069:(e,l,a)=>{a.d(l,{o:()=>t});const t=(0,a(10435).Q_)("settings-home",{state:()=>({settingHomeView:"backup"})})},35400:(e,l,a)=>{a.d(l,{Z:()=>n});var t=a(57268),o=a(94209);const s={class:"hi-cell not-last:mb-[20px]"},r={class:"flex-1 text-[14px] text-color-t2"},i={class:"flex-shrink-0"},n=(0,t.aZ)({__name:"hi-cell",props:{title:{default:""},disabled:{type:Boolean,default:!1}},setup(e){const l=e;return(a,n)=>((0,t.wg)(),(0,t.iD)("div",s,[(0,t._)("div",{class:(0,o.normalizeClass)(["flex items-center justify-between",[{"pointer-events-none opacity-30":e.disabled}]])},[(0,t._)("span",r,(0,o.toDisplayString)(l.title),1),(0,t._)("div",i,[(0,t.WI)(a.$slots,"default")])],2)]))}})},51753:(e,l,a)=>{a.d(l,{Z:()=>i});var t=a(79282),o=a(57268),s=a(94209);const r=(0,o._)("i",{class:"iconfont icon-checked_icon rounded-full text-[14px] text-color-white"},null,-1),i=(0,o.aZ)({__name:"hi-checkbox",props:{value:{type:Boolean}},setup(e){const l=e;return(e,a)=>{const i=t.Z;return(0,o.wg)(),(0,o.iD)("button",{class:(0,s.normalizeClass)(["hi-checkbox block h-[16px] w-[16px] overflow-hidden rounded-[4px]",l.value?"border-[1px] border-color-blue bg-color-blue":"border-[3px] border-color-t4"])},[(0,o.Wm)(i,{show:l.value,ani:"scale"},{default:(0,o.w5)((()=>[r])),_:1},8,["show"])],2)}}})},31261:(e,l,a)=>{a.r(l),a.d(l,{default:()=>r});var t=a(35427),o=a(57268),s=a(94209);const r=(0,o.aZ)({__name:"userinfo-dialog-cancel-button",setup(e){const l=(0,o.f3)("changeShow"),a=()=>{l(!1)};return(e,l)=>{const r=t.Z;return(0,o.wg)(),(0,o.j4)(r,{type:"main",class:"bg-color-white dark:bg-opacity-20",onClick:a},{default:(0,o.w5)((()=>[(0,o.Uk)((0,s.toDisplayString)("取消"),1)])),_:1})}}})},60096:(e,l,a)=>{a.r(l),a.d(l,{default:()=>c});var t=a(57268),o=a(94209),s=a(29445);const r={class:"h-full pb-[24px]"},i={class:"flex h-full flex-col"},n={class:"mb-[24px] h-[44px] flex-shrink-0 border-b-[1px] border-color-m2 border-opacity-[0.06] px-[24px] text-center text-[16px] leading-[44px] text-color-t1"},u={class:"flex-1 overflow-hidden px-[24px]"},d={key:0,class:"mt-[24px] flex-shrink-0 px-[24px]"},c=(0,t.aZ)({__name:"userinfo-dialog-template",props:{title:null,isScroll:{type:Boolean,default:!0}},setup(e){const l=e,a=(0,t.Rr)();return(e,c)=>((0,t.wg)(),(0,t.iD)("div",r,[(0,t._)("div",i,[(0,t._)("div",n,(0,o.toDisplayString)(l.title),1),(0,t._)("div",u,[(0,t._)("div",{class:(0,o.normalizeClass)(["h-full",{"hi-scroll":l.isScroll}])},[(0,t.WI)(e.$slots,"default")],2)]),(0,s.SU)(a).footer?((0,t.wg)(),(0,t.iD)("div",d,[(0,t.WI)(e.$slots,"footer")])):(0,t.kq)("",!0)])]))}})},74118:(e,l,a)=>{a.r(l),a.d(l,{default:()=>Z});var t=a(70308),o=a(35427),s=a(61694),r=a(83218),i=a(70581),n=a(81198),u=a(57268),d=a(94209),c=a(29445),p=a(60096),v=a(31261),m=a(18666),w=a(88793),f=a(24118),x=a.n(f),h=a(74003),_=a(50344),g=a(95329);const b={class:"flex h-full flex-col"},y={class:"mb-[20px] flex-shrink-0 text-[14px] text-color-t2"},k={class:"flex-1 overflow-hidden"},W=["src"],Z=(0,u.aZ)({__name:"change-email",setup(e){const l=(0,g.useUserStore)(),a=(0,u.f3)("changeShow"),f=(0,c.iH)("verify-password"),Z=(0,c.qj)({password:{value:"",props:{type:"password",placeholder:"密码"}}}),S={password:m.dZ},C=(0,c.iH)(Date.now()),U=(0,u.Fl)((()=>`${h.H}verify/image?i-branch=zh&type=modify_email&t=${C.value}`)),H=()=>{C.value=Date.now()},D=(0,c.iH)(null),P={text:"下一步",async handler(){const[e]=await(0,w.Gv)({password:x()(Z.password.value)});e?D.value.setErrorMsg(e):f.value="input-email"}},j=(0,c.qj)({email:{value:"",props:{placeholder:"邮箱"}},imgCode:{value:"",props:{placeholder:"图片验证码",rawAttrs:{maxlength:4}}},verifyCode:{value:"",props:{placeholder:"邮箱验证码",rawAttrs:{maxlength:6}}}}),I={email:m.Tt,imgCode:[{validator:e=>4===e.trim().length,message:"图片验证码必须有4位"}],verifyCode:[{validator:e=>6===e.trim().length,message:"邮箱验证码必须有6位"}]},$=(0,c.iH)(null),E={text:"完成",async handler(){const[e]=await(0,w.oq)({email:j.email.value,emailCode:j.verifyCode.value});var t;e?null===(t=$.value)||void 0===t||t.setErrorMsg("验证码错误"):(l.user.email=j.email.value,l.user={...l.user},a(!1))}},T=(0,c.iH)(!0),q=(0,c.iH)("发送"),z=e=>{T.value=!!e||!j.imgCode.value},M=e=>{T.value=!!e||!j.email.value};let G,A=60;const V=()=>{if(q.value="重新发送"+A,A--,-1===A)return q.value="发送",G=60,void(T.value=!1);G=(0,_.delay)(V,1e3)},O=(0,c.iH)(null),B=(0,c.iH)(null),R=async()=>{var e,l;null===(e=B.value)||void 0===e||e.setErrorMsg(""),null===(l=O.value)||void 0===l||l.setErrorMsg(""),T.value=!0,clearTimeout(G),A=60,V();const[a]=await(0,w.Cz)({email:j.email.value,type:"modify_email",imgCode:j.imgCode.value});var t,o;return"验证码错误"===a?(T.value=!1,q.value="发送",clearTimeout(G),A=60,void(null===(t=B.value)||void 0===t||t.setErrorMsg("验证码错误"))):"账号已存在"===a?(T.value=!1,q.value="发送",clearTimeout(G),A=60,void(null===(o=O.value)||void 0===o||o.setErrorMsg("账号已存在"))):void 0};return(e,l)=>{const a=n.Z,m=i.Z,w=r.Z,x=s.Z,h=o.Z,_=t.Z;return(0,u.wg)(),(0,u.j4)(p.default,{title:"更改邮箱","is-scroll":!1},{default:(0,u.w5)((()=>[(0,u.Wm)(_,{variable:f.value,class:"h-[247px]"},{default:(0,u.w5)((()=>[(0,u.Wm)(x,{value:"verify-password"},{default:(0,u.w5)((()=>[(0,u._)("div",b,[(0,u._)("span",y,(0,d.toDisplayString)("为了您的帐户安全，请输入您的帐户密码"),1),(0,u._)("div",k,[(0,u.Wm)(w,{"content-class":"flex-1",model:Z,rules:S,"submit-btn-attrs":P},{default:(0,u.w5)((()=>[(0,u.Wm)(m,{path:"password"},{default:(0,u.w5)((()=>[(0,u.Wm)(a,(0,u.dG)({ref_key:"$passwordInput",ref:D,value:Z.password.value,"onUpdate:value":l[0]||(l[0]=e=>Z.password.value=e)},Z.password.props),null,16,["value"])])),_:1})])),"form-btn":(0,u.w5)((()=>[(0,u.Wm)(v.default)])),_:1},8,["model"])])])])),_:1}),(0,u.Wm)(x,{value:"input-email"},{default:(0,u.w5)((()=>[(0,u.Wm)(w,{model:j,rules:I,"submit-btn-attrs":E},{default:(0,u.w5)((()=>[(0,u.Wm)(m,{path:"email",onOnValidate:z},{default:(0,u.w5)((()=>[(0,u.Wm)(a,(0,u.dG)({ref_key:"$emailInput",ref:O,value:j.email.value,"onUpdate:value":l[1]||(l[1]=e=>j.email.value=e)},j.email.props,{trim:!0}),null,16,["value"])])),_:1}),(0,u.Wm)(m,{path:"imgCode",onOnValidate:M},{default:(0,u.w5)((()=>[(0,u.Wm)(a,(0,u.dG)({ref_key:"$imgCodeInput",ref:B},j.imgCode.props,{value:j.imgCode.value,"onUpdate:value":l[2]||(l[2]=e=>j.imgCode.value=e)}),{"outer-right":(0,u.w5)((()=>[(0,u._)("div",{class:"h-[44px] w-[100px] cursor-pointer rounded-[8px] bg-color-m2 bg-opacity-10 dark:bg-opacity-20",onClick:H},[(0,u._)("img",{src:(0,c.SU)(U),class:"h-full invert-[1]"},null,8,W)])])),_:1},16,["value"])])),_:1}),(0,u.Wm)(m,{path:"verifyCode"},{default:(0,u.w5)((()=>[(0,u.Wm)(a,(0,u.dG)({ref_key:"$emailCodeInput",ref:$,value:j.verifyCode.value,"onUpdate:value":l[3]||(l[3]=e=>j.verifyCode.value=e)},j.verifyCode.props),{"inner-right":(0,u.w5)((()=>[(0,u.Wm)(h,{type:"main",size:"medium",disabled:T.value,"text-color":"color-primary",class:"h-full",onClick:R},{default:(0,u.w5)((()=>[(0,u.Uk)((0,d.toDisplayString)(q.value),1)])),_:1},8,["disabled"])])),_:1},16,["value"])])),_:1})])),"form-btn":(0,u.w5)((()=>[(0,u.Wm)(v.default)])),_:1},8,["model"])])),_:1})])),_:1},8,["variable"])])),_:1},8,["title"])}}})},3292:(e,l,a)=>{a.r(l),a.d(l,{default:()=>w});var t=a(83218),o=a(70581),s=a(81198),r=a(57268),i=a(29445),n=a(60096),u=a(31261),d=a(18666),c=a(88793),p=a(24118),v=a.n(p),m=a(95329);const w=(0,r.aZ)({__name:"change-password",setup(e){const l=(0,m.useUserStore)(),a=(0,i.qj)({oldPassword:{value:"",props:{placeholder:"旧密码",type:"password"}},newPassword:{value:"",props:{placeholder:"新密码",type:"password"}},confirmPassword:{value:"",props:{placeholder:"确认密码",type:"password"}}}),p=(0,i.iH)({oldPassword:d.dZ,newPassword:d.dZ,confirmPassword:[{validator:e=>e===a.newPassword.value,message:"两次输入的密码不一致"}]}),w=(0,i.qj)({oldPassword:null,newPassword:null,confirmPassword:null});(0,r.YP)((()=>a.newPassword.value),(()=>{var e;a.confirmPassword.value&&(null===(e=w.confirmPassword)||void 0===e||e.checkInputIsError())}));const f=(0,r.f3)("changeShow"),x=(0,i.iH)({text:"提交",async handler(){const[e,t]=await(0,c.Io)({oldPassword:v()(a.oldPassword.value),newPassword:v()(a.newPassword.value),rePassword:v()(a.confirmPassword.value)});var o;"密码错误"!==e?(l.token=t.token,l.refreshToken=t.refreshToken,f(!1)):null===(o=w.oldPassword)||void 0===o||o.setErrorMsg("密码错误")}});return(e,l)=>{const i=s.Z,d=o.Z,c=t.Z;return(0,r.wg)(),(0,r.j4)(n.default,{title:"更改密码"},{default:(0,r.w5)((()=>[(0,r.Wm)(c,{model:a,rules:p.value,"submit-btn-attrs":x.value},{default:(0,r.w5)((()=>[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a,((e,l)=>((0,r.wg)(),(0,r.j4)(d,{key:l,path:l},{default:(0,r.w5)((()=>[(0,r.Wm)(i,(0,r.dG)({ref_for:!0,ref:e=>{e&&(w[l]=e)},value:e.value,"onUpdate:value":l=>e.value=l},e.props),null,16,["value","onUpdate:value"])])),_:2},1032,["path"])))),128))])),"form-btn":(0,r.w5)((()=>[(0,r.Wm)(u.default)])),_:1},8,["model","rules","submit-btn-attrs"])])),_:1},8,["title"])}}})},66611:(e,l,a)=>{a.r(l),a.d(l,{default:()=>v});var t=a(83218),o=a(70581),s=a(81198),r=a(57268),i=a(29445),n=a(60096),u=a(31261),d=a(18666),c=a(88793),p=a(95329);const v=(0,r.aZ)({__name:"change-username",props:{username:null},setup(e){const l=e,a=(0,p.useUserStore)(),v=(0,i.qj)({username:{value:l.username,props:{placeholder:"用户名"}}}),m=(0,i.iH)({username:d.yH}),w=(0,r.f3)("changeShow"),f=(0,i.iH)(),x=(0,i.iH)({text:"提交",async handler(){const[e]=await(0,c.Q8)({nickname:v.username.value});var l;e?null===(l=f.value)||void 0===l||l.setErrorMsg(e):(a.user.nickname=v.username.value,a.user={...a.user},w(!1))}});return(e,l)=>{const a=s.Z,i=o.Z,d=t.Z;return(0,r.wg)(),(0,r.j4)(n.default,{title:"更改用户名"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{model:v,rules:m.value,"submit-btn-attrs":x.value},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{path:"username"},{default:(0,r.w5)((()=>[(0,r.Wm)(a,(0,r.dG)({ref_key:"$usernameInput",ref:f,value:v.username.value,"onUpdate:value":l[0]||(l[0]=e=>v.username.value=e)},v.username.props),null,16,["value"])])),_:1})])),"form-btn":(0,r.w5)((()=>[(0,r.Wm)(u.default)])),_:1},8,["model","rules","submit-btn-attrs"])])),_:1},8,["title"])}}})},53980:(e,l,a)=>{a.r(l),a.d(l,{default:()=>b});var t=a(35427),o=a(51753),s=a(81198),r=a(57268),i=a(94209),n=a(29445),u=a(60096),d=a(31261),c=a(83078),p=a(95329),v=a(9057);const m={class:""},w={class:"text-[14px] text-color-t3"},f={class:"text-color-red"},x={class:"mx-auto my-[16px] h-[42px] px-[24px]"},h={class:"pl-[9px] text-color-t2"},_={class:"flex justify-end"},g={key:0},b=(0,r.aZ)({__name:"delete-account",setup(e){const l=(0,p.useUserStore)(),a=(0,n.iH)("main"),b=(0,n.iH)(!0),y=(0,n.iH)(!1),k=(0,n.iH)(!1),W=()=>{k.value=!k.value},Z=(0,n.iH)(9);let S=0;const C=()=>{S=(0,c.Z)((()=>{Z.value--,Z.value>0?C():(a.value="danger",b.value=!1)}),1e3)};C();const U=(0,n.iH)(""),H=(0,r.Fl)((()=>l.user.email)),D=(0,r.Fl)((()=>b.value||U.value!==H.value)),P=(0,r.f3)("changeShow"),j=()=>{v.u.open({title:"提醒",message:`是否确定删除账号：<span class="text-color-t2">${H.value}</span>`,okText:"删除",onOk:()=>{I()}})},I=async()=>{y.value=!0,await l.delete(k.value),P(!1)};return(0,r.Ah)((()=>{clearTimeout(S)})),(e,l)=>{const c=s.Z,p=o.Z,v=t.Z;return(0,r.wg)(),(0,r.j4)(u.default,{title:"删除账号？"},{default:(0,r.w5)((()=>[(0,r._)("div",m,[(0,r._)("span",w,(0,i.toDisplayString)("删除账号之后，此账号下的所有信息（包括已上传的图片）均会被清除，是否确认删除此账号？如果确认删除，请在输入框内输入："),1),(0,r._)("span",f,(0,i.toDisplayString)((0,n.SU)(H)),1)]),(0,r._)("div",x,[(0,r.Wm)(c,{value:U.value,"onUpdate:value":l[0]||(l[0]=e=>U.value=e),placeholder:"输入要删除的账号"},null,8,["value","placeholder"])]),(0,r._)("button",{class:"mt-[18px] flex items-center",onClick:W},[(0,r.Wm)(p,{value:k.value,"onUpdate:value":l[1]||(l[1]=e=>k.value=e)},null,8,["value"]),(0,r._)("span",h,(0,i.toDisplayString)("清除本地数据"),1)])])),footer:(0,r.w5)((()=>[(0,r._)("div",_,[(0,r.Wm)(v,{type:a.value,disabled:(0,n.SU)(D),loading:y.value,class:"mr-[12px]",onClick:j},{default:(0,r.w5)((()=>[(0,r.Uk)((0,i.toDisplayString)("删除")+" ",1),Z.value?((0,r.wg)(),(0,r.iD)("span",g,"("+(0,i.toDisplayString)(Z.value)+")",1)):(0,r.kq)("",!0)])),_:1},8,["type","disabled","loading"]),(0,r.Wm)(d.default)])])),_:1},8,["title"])}}})},93391:(e,l,a)=>{a.r(l),a.d(l,{default:()=>h});var t=a(35427),o=a(51753),s=a(57268),r=a(94209),i=a(29445),n=a(60096),u=a(31261),d=a(95329),c=a(45069),p=a(91294),v=a(74003),m=a(6594);const w={class:"text-[14px] text-color-t3"},f={class:"pl-[9px] text-color-t2"},x={class:"flex justify-end"},h=(0,s.aZ)({__name:"login-out",setup(e){const l=(0,i.iH)(!1),a=()=>{l.value=!l.value},h=(0,d.useUserStore)(),_=(0,c.o)(),g=(0,i.iH)(!1),b=(0,s.f3)("changeShow"),y=async()=>{if(h.loginOut(l.value),_.settingHomeView="backup",v.AN){const e=(0,p.V)(),l=(0,m.t)();e.settingsShow=!1,l.setActiveCard("login")}b(!1)};return(e,i)=>{const d=o.Z,c=t.Z;return(0,s.wg)(),(0,s.j4)(n.default,{title:"退出登录？"},{default:(0,s.w5)((()=>[(0,s._)("div",null,[(0,s._)("span",w,(0,r.toDisplayString)("清除本地数据以防止此设备上不同帐户的数据连接"),1),(0,s._)("button",{class:"mt-[18px] flex items-center",onClick:a},[(0,s.Wm)(d,{value:l.value,"onUpdate:value":i[0]||(i[0]=e=>l.value=e)},null,8,["value"]),(0,s._)("span",f,(0,r.toDisplayString)("清除本地数据"),1)])])])),footer:(0,s.w5)((()=>[(0,s._)("div",x,[(0,s.Wm)(u.default),(0,s.Wm)(c,{type:"danger",loading:g.value,class:"ml-[12px]",onClick:y},{default:(0,s.w5)((()=>[(0,s.Uk)((0,r.toDisplayString)("退出"),1)])),_:1},8,["loading"])])])),_:1},8,["title"])}}})},92556:(e,l,a)=>{a.r(l),a.d(l,{default:()=>F});var t=a(30789),o=a(96466),s=a(35427),r=a(35400),i=a(78005),n=a(55395),u=a(82099),d=a(17530),c=a(57268),p=a(29445),v=a(94209),m=a(93391),w=a(53980),f=a(66611),x=a(3292),h=a(74118),_=a(45069),g=a(95329),b=a(10435),y=a(96643),k=a(88793),W=a(17319),Z=a(16097);const S=e=>((0,c.dD)("data-v-6e618eb3"),e=e(),(0,c.Cn)(),e),C={id:"settings-userinfo",class:"px-[70px] py-[40px]"},U=S((()=>(0,c._)("button",{class:"h-[24px] w-[24px]"},[(0,c._)("i",{class:"iconfont icon-single_hover_icon text-[24px] text-color-t2"})],-1))),H={class:"mt-[44px] flex justify-center border-b-[1px] border-color-m2 border-opacity-[0.06] pb-[27px] text-center"},D={class:"relative mx-auto block h-[48px] w-[48px] overflow-hidden rounded-full"},P=["src"],j=S((()=>(0,c._)("i",{class:"iconfont icon-pen_icon text-[20px] text-color-white"},null,-1))),I={class:"mt-[28px]"},$={class:"flex items-center"},E={class:"max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap pr-[12px] text-[14px] text-color-t3"},T=S((()=>(0,c._)("i",{class:"iconfont icon-arrow_icon text-[12px] text-color-t2"},null,-1))),q={class:"flex items-center"},z={class:"flex max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap pr-[12px] text-[11px] text-color-t3"},M=S((()=>(0,c._)("i",{class:"iconfont icon-arrow_icon text-[12px] text-color-t2"},null,-1))),G={class:"flex items-center"},A={class:"max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap pr-[12px] text-[14px] text-color-t3"},V=S((()=>(0,c._)("i",{class:"iconfont icon-arrow_icon text-[12px] text-color-t2"},null,-1))),O={class:"logout-btn mt-[40px]"},B={class:"text-[14px] text-color-t2"},R=(0,c.aZ)({__name:"settings-userinfo",setup(e){const l=(0,_.o)(),a=(0,g.useUserStore)(),S=(0,p.iH)(!1),R=(0,p.iH)(!1),F=(0,p.iH)(!1),Q=(0,p.iH)(!1),Y=(0,p.iH)(!1),K=(0,p.iH)(!1),J=(0,p.iH)(!1),N=(0,p.iH)({"delete-count":{text:"删除账号",color:"danger",handler(){R.value=!0}}}),L=()=>{S.value=!0},{user:X}=(0,b.Jk)(a),ee=(0,p.iH)(X.value.avatar),le=e=>{ee.value=e,F.value=!0},ae=async e=>{if(e.blob.size>2097152)return void W.R.fail({message:"文件大小超出限制"});const[l,t]=await(0,y.E)("user-avatar",e.blob);if(l)return void W.R.fail({message:l});const[o]=await(0,k.Q8)({avatar:t});o?W.R.fail({message:o}):a.modifyUserInfo({avatar:t})};return(e,a)=>{const _=d.Z,g=u.Z,b=n.Z,y=i.Z,k=r.Z,W=s.Z,te=o.Z,oe=t.Z;return(0,c.wg)(),(0,c.iD)("div",C,[(0,c.Wm)(g,{title:"个人信息",onBack:a[1]||(a[1]=e=>(0,p.SU)(l).settingHomeView="backup")},{right:(0,c.w5)((()=>[(0,c.Wm)(_,{show:J.value,"onUpdate:show":a[0]||(a[0]=e=>J.value=e),options:N.value},{reference:(0,c.w5)((()=>[U])),_:1},8,["show","options"])])),_:1},8,["title"]),(0,c._)("div",H,[(0,c.Wm)(y,{onOnSuccess:le},{default:(0,c.w5)((()=>[(0,c._)("button",D,[(0,c._)("img",{class:"h-full w-full",src:(0,p.SU)(X).avatar||(0,p.SU)(Z.c),alt:""},null,8,P),(0,c.Wm)(b,{opacity:60,class:"flex items-center justify-center rounded-[16px] opacity-0 transition-opacity hover:opacity-100"},{default:(0,c.w5)((()=>[j])),_:1})])])),_:1})]),(0,c._)("div",I,[(0,c.Wm)(k,{title:"用户名",class:"cursor-pointer",onClick:a[2]||(a[2]=e=>Q.value=!0)},{default:(0,c.w5)((()=>[(0,c._)("div",$,[(0,c._)("span",E,(0,v.toDisplayString)((0,p.SU)(X).nickname),1),T])])),_:1},8,["title"]),(0,c.Wm)(k,{title:"密码",class:"cursor-pointer",onClick:a[3]||(a[3]=e=>Y.value=!0)},{default:(0,c.w5)((()=>[(0,c._)("div",q,[(0,c._)("div",z,[((0,c.wg)(!0),(0,c.iD)(c.HY,null,(0,c.Ko)(new Array(8).fill(""),((e,l)=>((0,c.wg)(),(0,c.iD)("div",{key:l,class:"ml-[3px] h-[6px] w-[6px] rounded-[50%] bg-color-t3"})))),128))]),M])])),_:1},8,["title"]),(0,c.Wm)(k,{title:"邮箱",class:"cursor-pointer",onClick:a[4]||(a[4]=e=>K.value=!0)},{default:(0,c.w5)((()=>[(0,c._)("div",G,[(0,c._)("span",A,(0,v.toDisplayString)((0,p.SU)(X).email),1),V])])),_:1},8,["title"])]),(0,c._)("div",O,[(0,c.Wm)(W,{plain:"",class:"h-[36px] !w-full border-color-b2 bg-color-none hover:bg-color-none hover:text-color-blue active:bg-color-none",onClick:L},{default:(0,c.w5)((()=>[(0,c._)("span",B,(0,v.toDisplayString)("退出登录"),1)])),_:1})]),(0,c.Wm)(te,{show:S.value,"onUpdate:show":a[5]||(a[5]=e=>S.value=e),width:400},{default:(0,c.w5)((()=>[(0,c.Wm)(m.default)])),_:1},8,["show"]),(0,c.Wm)(te,{show:R.value,"onUpdate:show":a[6]||(a[6]=e=>R.value=e),width:400},{default:(0,c.w5)((()=>[(0,c.Wm)(w.default)])),_:1},8,["show"]),(0,c.Wm)(oe,{show:F.value,"onUpdate:show":a[7]||(a[7]=e=>F.value=e),"show-color-picker":!1,title:"编辑头像","max-img-size":200,img:ee.value,onCropperSuccess:ae},null,8,["show","title","img"]),(0,c.Wm)(te,{show:Q.value,"onUpdate:show":a[8]||(a[8]=e=>Q.value=e),width:300},{default:(0,c.w5)((()=>[(0,c.Wm)(f.default,{username:(0,p.SU)(X).nickname},null,8,["username"])])),_:1},8,["show"]),(0,c.Wm)(te,{show:Y.value,"onUpdate:show":a[9]||(a[9]=e=>Y.value=e),width:300},{default:(0,c.w5)((()=>[(0,c.Wm)(x.default)])),_:1},8,["show"]),(0,c.Wm)(te,{show:K.value,"onUpdate:show":a[10]||(a[10]=e=>K.value=e),width:300},{default:(0,c.w5)((()=>[(0,c.Wm)(h.default)])),_:1},8,["show"])])}}});const F=(0,a(76911).Z)(R,[["__scopeId","data-v-6e618eb3"]])}}]);