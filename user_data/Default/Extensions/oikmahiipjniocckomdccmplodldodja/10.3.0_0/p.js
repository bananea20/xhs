/*! For license information please see p.js.LICENSE.txt */
(()=>{"use strict";var t,e,n,c={91942:(t,e,n)=>{n.d(e,{AFY:()=>V,Alt:()=>et,BgB:()=>bt,Bzc:()=>Pt,Cg9:()=>de,Cr2:()=>ee,Csj:()=>O,D2c:()=>ne,Dct:()=>Pe,EpL:()=>U,Eye:()=>Y,FMD:()=>$t,Fcr:()=>Me,G07:()=>Gt,GPh:()=>Rt,GjQ:()=>N,H$A:()=>tt,HC1:()=>_,HcK:()=>gt,Hpx:()=>se,ILo:()=>F,IRm:()=>g,IYJ:()=>P,J4_:()=>T,K14:()=>Ie,KCg:()=>fe,KZz:()=>_t,KpW:()=>Re,KrR:()=>ge,KtJ:()=>m,LFI:()=>Nt,Lf7:()=>we,LiQ:()=>Oe,Lwu:()=>ht,M4x:()=>kt,Ms1:()=>ve,N1M:()=>re,NL3:()=>Fe,NdO:()=>jt,O4S:()=>lt,P1s:()=>It,Pyr:()=>f,QX7:()=>Wt,QhV:()=>x,RBc:()=>At,RP2:()=>dt,RfN:()=>W,RjW:()=>Mt,T5o:()=>$,TUJ:()=>q,Tio:()=>S,TmF:()=>Q,U4W:()=>Et,URx:()=>Ot,Uur:()=>D,Wmm:()=>$e,XaB:()=>Jt,XgB:()=>qt,YHb:()=>ae,YbB:()=>me,Ysf:()=>Dt,YuG:()=>xt,ZA9:()=>ue,ZOf:()=>C,ZoI:()=>B,_4w:()=>Yt,_Kv:()=>Be,aSe:()=>be,abV:()=>pe,bkT:()=>Qt,brc:()=>b,cDM:()=>xe,cHF:()=>Te,cO4:()=>L,cPG:()=>ft,dah:()=>ot,dr5:()=>w,e$L:()=>nt,eGL:()=>le,eHu:()=>yt,fgl:()=>Lt,hPX:()=>ut,hdN:()=>k,iEm:()=>Vt,iNe:()=>s,jxF:()=>mt,kjJ:()=>R,lnC:()=>y,mCh:()=>Kt,mHA:()=>ce,mM1:()=>pt,ntJ:()=>X,nvt:()=>Xt,oPt:()=>ie,oUC:()=>j,otd:()=>Se,p5I:()=>vt,q01:()=>M,qEr:()=>je,rr$:()=>p,rtP:()=>it,scP:()=>J,sfD:()=>ze,skh:()=>Tt,tsZ:()=>z,u$T:()=>oe,ur0:()=>h,v8x:()=>Zt,wGP:()=>Ae,ySA:()=>wt,yW8:()=>G,yXI:()=>d,yZ9:()=>E,znr:()=>v,zxm:()=>he});var c=n(47866),o=n(76928),a=n(53450),r=n(22007),i="bp5";"undefined"!=typeof BLUEPRINT_NAMESPACE?i=BLUEPRINT_NAMESPACE:"undefined"!=typeof REACT_APP_BLUEPRINT_NAMESPACE&&(i=REACT_APP_BLUEPRINT_NAMESPACE);var s="".concat(i,"-active"),l="".concat(i,"-align-left"),u="".concat(i,"-align-right"),d="".concat(i,"-compact"),f="".concat(i,"-dark"),p="".concat(i,"-disabled"),h="".concat(i,"-fill"),m=("".concat(i,"-fixed"),"".concat(i,"-fixed-top"),"".concat(i,"-inline")),v="".concat(i,"-interactive"),y="".concat(i,"-large"),b="".concat(i,"-loading"),g="".concat(i,"-minimal"),x="".concat(i,"-outlined"),w=("".concat(i,"-padded"),"".concat(i,"-multiline"),"".concat(i,"-read-only")),j="".concat(i,"-round"),k="".concat(i,"-selected"),_="".concat(i,"-small"),E="".concat(i,"-vertical"),C=(Ue(r.Ly.TOP),Ue(r.Ly.BOTTOM),Ue(r.Ly.LEFT),Ue(r.Ly.RIGHT),Be(o.u.ZERO),Be(o.u.ONE),Be(o.u.TWO),Be(o.u.THREE),Be(o.u.FOUR),Fe(a.S.PRIMARY),Fe(a.S.SUCCESS),Fe(a.S.WARNING),Fe(a.S.DANGER),"".concat(i,"-focus-disabled")),S=("".concat(i,"-focus-style-manager-ignore"),"".concat(i,"-ui-text"),"".concat(i,"-running-text"),"".concat(i,"-monospace-text"),"".concat(i,"-text-large"),"".concat(i,"-text-small")),R="".concat(i,"-text-muted"),T=("".concat(i,"-text-disabled"),"".concat(i,"-text-overflow-ellipsis")),O="".concat(i,"-blockquote"),L="".concat(i,"-code"),N="".concat(i,"-code-block"),$="".concat(i,"-heading"),P="".concat(i,"-list"),I=("".concat(i,"-list-unstyled"),"".concat(i,"-rtl"),"".concat(i,"-alert")),A=("".concat(I,"-body"),"".concat(I,"-contents"),"".concat(I,"-footer"),"".concat(i,"-breadcrumb")),M=("".concat(A,"-current"),"".concat(A,"s"),"".concat(A,"s-collapsed"),"".concat(i,"-button")),B="".concat(M,"-group"),z="".concat(M,"-spinner"),F="".concat(M,"-text"),U="".concat(i,"-callout"),D="".concat(U,"-has-body-content"),W="".concat(U,"-icon"),q="".concat(i,"-card"),H="".concat(i,"-control-card"),Z=("".concat(H,"-label"),"".concat(i,"-switch-control-card"),"".concat(i,"-checkbox-control-card"),"".concat(i,"-card-list")),J=("".concat(Z,"-bordered"),"".concat(i,"-collapse")),G="".concat(J,"-body"),K="".concat(i,"-context-menu"),Y=("".concat(K,"-virtual-target"),"".concat(K,"-popover"),"".concat(K,"-backdrop"),"".concat(i,"-control-group"),"".concat(i,"-dialog")),V="".concat(Y,"-container"),X="".concat(Y,"-header"),Q="".concat(Y,"-body"),tt=("".concat(Y,"-body-scroll-container"),"".concat(Y,"-close-button")),et="".concat(Y,"-footer"),nt=("".concat(Y,"-footer-fixed"),"".concat(Y,"-footer-main-section"),"".concat(Y,"-footer-actions")),ct="".concat(i,"-dialog-step"),ot=("".concat(ct,"-container"),"".concat(ct,"-title"),"".concat(ct,"-icon"),"".concat(ct,"-viewed"),"".concat(i,"-divider")),at="".concat(i,"-drawer"),rt=("".concat(at,"-body"),"".concat(at,"-footer"),"".concat(at,"-header"),"".concat(i,"-editable-text")),it=("".concat(rt,"-content"),"".concat(rt,"-editing"),"".concat(rt,"-input"),"".concat(rt,"-placeholder"),"".concat(i,"-flex-expander"),"".concat(i,"-html-select")),st=("".concat(i,"-select"),"".concat(i,"-html-table")),lt=("".concat(st,"-bordered"),"".concat(st,"-striped"),"".concat(i,"-input")),ut=("".concat(lt,"-ghost"),"".concat(lt,"-group")),dt="".concat(lt,"-left-container"),ft="".concat(lt,"-action"),pt=("".concat(i,"-resizable-input-span"),"".concat(i,"-text-area")),ht="".concat(pt,"-auto-resize"),mt="".concat(i,"-control"),vt="".concat(mt,"-indicator"),yt="".concat(vt,"-child"),bt="".concat(i,"-checkbox"),gt="".concat(i,"-radio"),xt="".concat(i,"-switch"),wt="".concat(xt,"-inner-text"),jt="".concat(i,"-file-input"),kt="".concat(i,"-file-input-has-selection"),_t="".concat(i,"-file-upload-input"),Et="".concat(i,"-file-upload-input-custom-text"),Ct="".concat(i,"-key"),St=("".concat(Ct,"-combo"),"".concat(i,"-modifier-key"),"".concat(i,"-hotkey")),Rt=("".concat(St,"-label"),"".concat(St,"-column"),"".concat(St,"-dialog"),"".concat(i,"-label")),Tt=("".concat(i,"-form-group"),"".concat(i,"-form-content"),"".concat(i,"-form-helper-text"),"".concat(i,"-form-group-sub-label"),"".concat(i,"-menu")),Ot="".concat(Tt,"-item"),Lt="".concat(Ot,"-is-selectable"),Nt="".concat(Ot,"-selected-icon"),$t="".concat(Ot,"-icon"),Pt="".concat(Ot,"-label"),It="".concat(i,"-submenu"),At="".concat(It,"-icon"),Mt=("".concat(Tt,"-divider"),"".concat(Tt,"-header")),Bt="".concat(i,"-multistep-dialog"),zt=("".concat(Bt,"-panels"),"".concat(Bt,"-left-panel"),"".concat(Bt,"-right-panel"),"".concat(Bt,"-nav-top"),"".concat(Bt,"-nav-right"),"".concat(i,"-section")),Ft=("".concat(zt,"-collapsed"),"".concat(zt,"-header")),Ut=("".concat(Ft,"-left"),"".concat(Ft,"-title"),"".concat(Ft,"-sub-title"),"".concat(Ft,"-divider"),"".concat(Ft,"-tabs"),"".concat(Ft,"-right"),"".concat(zt,"-card"),"".concat(i,"-navbar")),Dt=("".concat(Ut,"-group"),"".concat(Ut,"-heading"),"".concat(Ut,"-divider"),"".concat(i,"-non-ideal-state")),Wt="".concat(Dt,"-visual"),qt="".concat(Dt,"-text"),Ht=("".concat(i,"-numeric-input"),"".concat(i,"-overflow-list")),Zt=("".concat(Ht,"-spacer"),"".concat(i,"-overlay")),Jt="".concat(Zt,"-backdrop"),Gt=("".concat(Zt,"-container"),"".concat(Zt,"-content")),Kt="".concat(Zt,"-inline"),Yt="".concat(Zt,"-open"),Vt="".concat(Zt,"-scroll-container"),Xt="".concat(Zt,"-start-focus-trap"),Qt="".concat(Zt,"-end-focus-trap"),te="".concat(i,"-panel-stack"),ee=("".concat(te,"-header"),"".concat(te,"-header-back"),"".concat(te,"-view"),"".concat(i,"-panel-stack2"),"".concat(te,"-header"),"".concat(te,"-header-back"),"".concat(te,"-view"),"".concat(i,"-popover")),ne="".concat(ee,"-arrow"),ce="".concat(ee,"-backdrop"),oe="".concat(ee,"-capturing-dismiss"),ae="".concat(ee,"-content"),re="".concat(ee,"-placement"),ie=("".concat(ae,"-sizing"),"".concat(ee,"-dismiss")),se="".concat(ie,"-override"),le="".concat(ee,"-match-target-width"),ue="".concat(ee,"-open"),de="".concat(ee,"-popper-escaped"),fe="".concat(ee,"-reference-hidden"),pe="".concat(ee,"-target"),he="".concat(ee,"-transition-container"),me=("".concat(ee,"-wrapper"),"".concat(i,"-progress-bar"),"".concat(i,"-progress-meter"),"".concat(i,"-no-stripes"),"".concat(i,"-no-animation"),"".concat(i,"-portal")),ve="".concat(i,"-skeleton"),ye="".concat(i,"-slider"),be=("".concat(ye,"-axis"),"".concat(ye,"-handle"),"".concat(ye,"-label"),"".concat(ye,"-track"),"".concat(ye,"-progress"),"".concat(i,"-start"),"".concat(i,"-end"),"".concat(i,"-spinner")),ge="".concat(be,"-animation"),xe="".concat(be,"-head"),we="".concat(i,"-no-spin"),je="".concat(be,"-track"),ke="".concat(i,"-tab"),_e=("".concat(ke,"-icon"),"".concat(ke,"-tag"),"".concat(ke,"-indicator")),Ee=("".concat(_e,"-wrapper"),"".concat(ke,"-list"),"".concat(ke,"-panel"),"".concat(ke,"s"),"".concat(i,"-tag")),Ce=("".concat(Ee,"-remove"),"".concat(i,"-tag-input")),Se=("".concat(Ce,"-icon"),"".concat(Ce,"-values"),"".concat(i,"-toast")),Re="".concat(Se,"-container"),Te="".concat(Se,"-message"),Oe="".concat(i,"-tooltip"),Le=("".concat(Oe,"-indicator"),"".concat(i,"-tree"),"".concat(i,"-tree-node")),Ne="".concat(Le,"-caret"),$e=("".concat(Ne,"-closed"),"".concat(Ne,"-none"),"".concat(Ne,"-open"),"".concat(Le,"-content"),"".concat(Le,"-expanded"),"".concat(Le,"-icon"),"".concat(Le,"-label"),"".concat(Le,"-list"),"".concat(Le,"-secondary-label"),"".concat(Le,"-selected"),"".concat(i,"-tree-root"),"".concat(i,"-icon")),Pe="".concat($e,"-standard"),Ie="".concat($e,"-large");function Ae(){return i}function Me(t){switch(t){case c.v.LEFT:return l;case c.v.RIGHT:return u;default:return}}function Be(t){if(void 0!==t)return"".concat(i,"-elevation-").concat(t)}function ze(t){if(null!=t)return 0===t.indexOf("".concat(i,"-icon-"))?t:"".concat(i,"-icon-").concat(t)}function Fe(t){if(null!=t&&t!==a.S.NONE)return"".concat(i,"-intent-").concat(t.toLowerCase())}function Ue(t){if(void 0!==t)return"".concat(i,"-position-").concat(t)}},83524:(t,e,n)=>{n.d(e,{EK:()=>f,H4:()=>l,H5:()=>u,H6:()=>d,OL:()=>p});var c=n(5163),o=n(72779),a=n.n(o),r=n(2784),i=n(91942);function s(t,e){return r.forwardRef((function(n,o){var i=n.className,s=n.children,l=(0,c._T)(n,["className","children"]);return r.createElement(t,(0,c.pi)((0,c.pi)({},l),{className:a()(e,i),ref:o}),s)}))}s("h1",i.T5o),s("h2",i.T5o),s("h3",i.T5o);var l=s("h4",i.T5o),u=s("h5",i.T5o),d=s("h6",i.T5o),f=(s("blockquote",i.Csj),s("code",i.cO4)),p=(s("pre",i.GjQ),s("label",i.GPh),s("ol",i.IYJ));s("ul",i.IYJ)},8721:(t,e,n)=>{n.d(e,{XO:()=>i,eE:()=>r,un:()=>s,vU:()=>l});n(39529);var c=n(50251),o=n.n(c);const a=window.navigator.userAgent,r=a.includes("Mac"),i=a.includes("Chrome"),s=a.includes("Edg"),l=a.includes("Firefox");function u(t){return t.split(".").map((t=>Number(t)))}u(o().runtime.getManifest().version)},87375:(t,e,n)=>{n(71372),n(64829);var c=n(17029),o=(n(15735),n(6886),n(36728),n(50251)),a=n.n(o),r=n(2784),i=n(26777),s=n(42595),l=n(41752),u=n(24400),d=n(8560),f=n(91942),p=n(83524),h=n(39421),m=n(5163),v=n(72779),y=n.n(v),b=n(58629),g=n(44886),x=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return(0,m.ZT)(e,t),e.prototype.render=function(){var t=this.props,e=t.className,n=t.tagName,c=void 0===n?"div":n,o=(0,m._T)(t,["className","tagName"]),a=y()(f.dah,e);return r.createElement(c,(0,m.pi)((0,m.pi)({},o),{className:a}))},e.displayName="".concat(g.g,".Divider"),e}(b.l),w=n(59069);n(73439);async function j(){return(await a().tabs.query({active:!0,highlighted:!0,windowId:a().windows.WINDOW_ID_CURRENT}))[0]}var k=n(60279),_=n(18435);n(77950),n(17368),n(24471),n(85940);function E(t){return`${t.host}${t.path}`}function C(t){const e=t.match(/^(([^:]+):\/\/)?([^/]+)?(\/.*)?$/);if(!e)return;let n=e[3]||"";const c=n.indexOf(":");c>=0&&(n=n.slice(0,c));let o=e[4]||"";const a=o.indexOf("#");if(a>=0&&(o=o.slice(0,a)),!n.startsWith(".")){if(!o){if(!n)return;o="/"}return{host:n,path:o}}}function S(t,e){return new RegExp("^"+t.replace(/[-[\]{}()+?.,\\^$|#\s]/g,"\\$&").replace("*",".*").replace(/^\.\*\\\./,"(.*\\.)?")+"$").test(e)}function R(t,e){return new RegExp("^"+t.replace(/[-[\]{}()+?.,\\^$|#\s]/g,"\\$&").replace(/\*/g,".*")+"$").test(e)}function T(t,e,n){let c,o;c="string"==typeof t?C(t):t;let a=!1,r=!1;if(c){const t=t=>{const e=function(t,e){let n;if(n="string"==typeof e?C(e):e,n)return S(t.host,n.host)&&R(t.path,n.path)}(t,c);return e&&(o=t),e};a=n.some(t),a||(r=e.some(t))}return{urlParts:c,matchedRule:o,whiteListMatched:a,blackListMatched:r}}var O=n(10106),L=n(18578);n(14121),n(60523),n(43673),n(40753),n(28399);const N=a().runtime.getURL("/pdf-viewer/web/viewer.html");(0,i.Z)(k.qI,["pdfStandalone"]);var $=n(8721),P=n(92245);const I=(0,P.RN)();var A=n(52322);async function M(t){var e;const n=null===(e=await j())||void 0===e?void 0:e.id;if(n)try{await a().tabs.sendMessage(n,t),window.close()}catch(t){(await I).show({message:(0,A.jsxs)(A.Fragment,{children:["当前页面无法使用此功能。",(0,A.jsx)("a",{href:"https://hcfy.app/docs/faqs/why-can-not-use-in-store",target:"_blank",rel:"noreferrer noopener",children:"查看帮助"})]}),intent:"warning"})}else{(await I).show({message:"开启功能时发生了一个错误，请稍后重试。",intent:"warning"})}}function B(){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(l.z,{icon:"cut",small:!0,onClick:()=>{M("screenshot translate")},text:"截图翻译",style:{marginBottom:10}}),(0,A.jsx)(l.z,{icon:"translate",small:!0,onClick:()=>{M("page translate")},text:"网页全文翻译",style:{marginBottom:10}})]})}var z=n(63627);s.$.onlyShowFocusOnTabs();const F=a().runtime.getURL("/")+"settings.html",U=a().runtime.getURL("/")+"settings.html#/cross",D=(0,i.Z)(k.qI,["domainBlackList","domainWhiteList"]),W=$.XO?$.un?"Microsoft Edge":"Chrome":"";function q(){var t,e;const[n,c]=(0,r.useState)(),[o,i]=(0,_.Z)(D),[s,h]=(0,r.useState)(),[m,v]=(0,r.useState)(!1),y=(t,e)=>{i((n=>{const c=n[e],o=c.findIndex((e=>e.host===t.host&&e.path===t.path));o>=0&&c.splice(o,1)}))},b=(t,e)=>{i((n=>{n[e].push(t)}))};(0,r.useEffect)((()=>{(async function(t){try{let e;if(e=void 0===t?(await a().tabs.executeScript({code:"window.location.href",runAt:"document_start"}))[0]:(await a().tabs.executeScript(t,{code:"window.location.href",runAt:"document_start"}))[0],e.startsWith("moz-extension"))throw new Error;return e}catch(n){var e;if(void 0===t&&!(t=null===(e=await j())||void 0===e?void 0:e.id))return;try{return await a().tabs.sendMessage(t,"get tab url")}catch(t){}}})().then(c)}),[]),(0,r.useEffect)((()=>{h(o&&n?T(n,o.domainBlackList,o.domainWhiteList):void 0)}),[o,n]);const g=(0,r.useMemo)((()=>!!n&&function(t){return t.startsWith(N)}(n)),[n]),x=null==s?void 0:s.matchedRule,w=(null==s||null===(t=s.urlParts)||void 0===t?void 0:t.host)||"",k=(null==s||null===(e=s.urlParts)||void 0===e?void 0:e.path)||"",C=g||s&&s.whiteListMatched||s&&!s.matchedRule?"启用":"禁用",S=null==o?void 0:o.domainBlackList.some((t=>"*"===t.host&&"/*"===t.path));return(0,A.jsxs)("div",{style:{padding:"8px 8px 0 8px"},children:[(0,A.jsx)(l.z,{onClick:()=>{v((t=>!t))},fill:!0,text:"禁用"===C&&S&&s?"已在所有网站中禁用网页划词":"此页面已"+C+"网页划词",rightIcon:(0,A.jsx)(u.I,{icon:m?"chevron-up":"chevron-down",size:12}),minimal:!0,small:!0}),(0,A.jsxs)(d.U,{isOpen:m,children:[!s&&(0,A.jsxs)("span",{className:`${f.Tio} ${f.kjJ}`,children:["在少数特殊的页面中，只能使用划词后在右键菜单中选择“翻译这段文本”的翻译方式。如果你刚安装完划词翻译或划词翻译被浏览器自动更新了，那么你可以刷新当前页面后重试。",(0,A.jsx)("a",{href:"https://hcfy.app/docs/faqs/why-can-not-use-in-store",target:"_blank",rel:"noreferrer noopener",children:"查看帮助"})]}),g&&(0,A.jsx)("span",{className:`${f.Tio} ${f.kjJ}`,children:"在划词翻译内置的 PDF 阅读器中，网页划词功能始终可用。"}),s&&!g&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)("div",{style:{marginTop:"4px",marginBottom:"10px"},children:[(0,A.jsxs)("div",{children:["当前网站：",w]}),(0,A.jsxs)("div",{children:["当前页面：",k]})]}),s.whiteListMatched&&x&&(0,A.jsxs)("div",{children:[(0,A.jsxs)("p",{className:`${f.Tio} ${f.kjJ}`,children:["此网址命中了白名单规则 ",(0,A.jsx)(p.EK,{children:E(x)}),"。"]}),(0,A.jsx)("p",{children:(0,A.jsx)(l.z,{fill:!0,small:!0,onClick:()=>y(x,"domainWhiteList"),children:"删除命中的规则"})})]}),!s.whiteListMatched&&s.blackListMatched&&x&&(0,A.jsxs)("div",{children:[(0,A.jsxs)("p",{className:`${f.Tio} ${f.kjJ}`,children:[S?"你已经在所有网站中禁用了网页划词":(0,A.jsxs)(A.Fragment,{children:["此网址命中了黑名单规则"," ",(0,A.jsx)(p.EK,{children:E(x)})]}),"，但你仍然可以使用",(0,A.jsx)("a",{href:F,target:"_blank",rel:"noreferrer",children:"快捷键"}),"、",(0,A.jsx)("a",{href:U,target:"_blank",rel:"noreferrer",children:"辅助键"}),"和右键菜单的方式获取翻译结果。"]}),(0,A.jsxs)("p",{className:"url-actions",children:[(0,A.jsx)(l.z,{small:!0,onClick:()=>b({host:w,path:"/*"},"domainWhiteList"),children:"在当前网站中启用"}),(0,A.jsx)(l.z,{small:!0,onClick:()=>b({host:w,path:k},"domainWhiteList"),children:"在当前页面中启用"})]}),(0,A.jsx)("p",{children:(0,A.jsx)(l.z,{fill:!0,small:!0,onClick:()=>y(S?{host:"*",path:"/*"}:x,"domainBlackList"),children:S?"重新启用网页划词":"删除命中的规则"})})]}),!s.whiteListMatched&&!s.blackListMatched&&(0,A.jsxs)("div",{children:[(0,A.jsx)("p",{className:`${f.Tio} ${f.kjJ}`,children:"此网址没有命中任何规则。"}),(0,A.jsxs)("p",{className:"url-actions",children:[(0,A.jsx)(l.z,{small:!0,onClick:()=>b({host:w,path:"/*"},"domainBlackList"),children:"在当前网站中禁用"}),(0,A.jsx)(l.z,{small:!0,onClick:()=>b({host:w,path:k},"domainBlackList"),children:"在当前页面中禁用"})]})]})]}),s&&!S&&!g&&(0,A.jsx)("p",{children:(0,A.jsx)(l.z,{fill:!0,small:!0,onClick:()=>b({host:"*",path:"/*"},"domainBlackList"),children:"在所有网站中禁用网页划词"})})]})]})}function H(){a().runtime.sendMessage({action:"open panel"}).then((()=>{window.close()}),(t=>{window.alert("打开独立窗口时发生了一个错误："+(null==t?void 0:t.message))}))}function Z(){const[t,e]=(0,r.useState)(!1),[n,c]=(0,r.useState)("");return(0,r.useEffect)((()=>{a().commands.getAll().then((t=>{t.some((t=>{if("panel"===t.name)return c(t.shortcut||""),!0}))}))}),[]),(0,A.jsxs)("div",{style:{padding:"0 8px 8px 8px"},children:[(0,A.jsx)(l.z,{onClick:()=>{e((t=>!t))},fill:!0,intent:n?"primary":"warning",text:"试一试独立翻译窗口吧",rightIcon:(0,A.jsx)(u.I,{icon:n?t?"chevron-up":"chevron-down":"error",size:12}),minimal:!0,small:!0}),(0,A.jsxs)(d.U,{isOpen:t,children:[(0,A.jsxs)("p",{className:`${f.kjJ}`,children:["您的浏览器支持全局快捷键！您可以在浏览器以外的地方按下快捷键",n&&(0,A.jsxs)(A.Fragment,{children:[" ",(0,A.jsx)("kbd",{children:n})," "]}),"来翻译剪切板内的文本，无需切换回您的浏览器。"]}),n&&(0,A.jsxs)("div",{className:`${f.kjJ}`,children:["您可以在",(0,A.jsx)("a",{href:F,target:"_blank",rel:"noreferrer",children:"设置"}),"中修改独立翻译窗口的快捷键。"]}),!n&&(0,A.jsxs)(h.U,{title:"未设置独立窗口快捷键",intent:"warning",children:["快捷键已被占用或清除，请前往",(0,A.jsx)("a",{href:F,target:"_blank",rel:"noreferrer",children:"设置"}),"中为独立窗口分配一个快捷键，并将作用域由“在 ",W," ","中”改为“全局”。"]})]})]})}const J=(0,i.Z)(k.qI,["autoClipboard"]);function G(){const t=(0,r.useRef)(null),[e,n]=(0,_.Z)(J);(0,O.Z)();const c=(0,r.useCallback)(((e,n)=>{var c,o;e&&(n?null===(c=t.current)||void 0===c||c.setText(e):null===(o=t.current)||void 0===o||o.translate(e,!0))}),[]);(0,r.useEffect)((()=>{var e;null===(e=t.current)||void 0===e||e.select()}),[]);const o=(0,P.ut)(I);return(0,A.jsxs)("div",{children:[(0,A.jsx)(q,{}),(0,A.jsx)(x,{}),(0,A.jsx)(z.O,{onTranslate:c,onDismiss:()=>{var e;return null===(e=t.current)||void 0===e?void 0:e.select()}}),(0,A.jsx)(L.Z,{ref:t,toaster:o.current,extendOptions:(0,A.jsx)(w.XZ,{label:"打开面板时自动翻译剪切板内的文本",checked:!(null==e||!e.autoClipboard),indeterminate:null===(null==e?void 0:e.autoClipboard),onChange:t=>{n({autoClipboard:t.target.checked})}}),showTextArea:!0}),(0,A.jsx)(x,{}),(0,A.jsxs)("div",{className:"openBtn",children:[(0,A.jsx)(B,{}),(0,A.jsx)(l.z,{small:!0,onClick:()=>{a().runtime.sendMessage({action:"open pdf viewer"}).then((()=>{window.close()}))},children:"内置 PDF 阅读器"}),(0,A.jsx)(l.z,{small:!0,onClick:H,children:"独立翻译窗口"})]}),(0,A.jsx)(x,{}),$.XO&&(0,A.jsx)(Z,{})]})}const K=document.getElementById("app");if(!K)throw new Error("DOM 里没有 #app 元素。");(0,c.s)(K).render((0,A.jsx)(G,{}))},83426:(t,e)=>{var n=Symbol.for("react.element"),c=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,v={};function y(t,e,n){this.props=t,this.context=e,this.refs=v,this.updater=n||h}function b(){}function g(t,e,n){this.props=t,this.context=e,this.refs=v,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},y.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},b.prototype=y.prototype;var x=g.prototype=new b;x.constructor=g,m(x,y.prototype),x.isPureReactComponent=!0;var w=Array.isArray,j=Object.prototype.hasOwnProperty,k={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function E(t,e,c){var o,a={},r=null,i=null;if(null!=e)for(o in void 0!==e.ref&&(i=e.ref),void 0!==e.key&&(r=""+e.key),e)j.call(e,o)&&!_.hasOwnProperty(o)&&(a[o]=e[o]);var s=arguments.length-2;if(1===s)a.children=c;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];a.children=l}if(t&&t.defaultProps)for(o in s=t.defaultProps)void 0===a[o]&&(a[o]=s[o]);return{$$typeof:n,type:t,key:r,ref:i,props:a,_owner:k.current}}function C(t){return"object"==typeof t&&null!==t&&t.$$typeof===n}var S=/\/+/g;function R(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function T(t,e,o,a,r){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var s=!1;if(null===t)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case n:case c:s=!0}}if(s)return r=r(s=t),t=""===a?"."+R(s,0):a,w(r)?(o="",null!=t&&(o=t.replace(S,"$&/")+"/"),T(r,e,o,"",(function(t){return t}))):null!=r&&(C(r)&&(r=function(t,e){return{$$typeof:n,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(r,o+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(S,"$&/")+"/")+t)),e.push(r)),1;if(s=0,a=""===a?".":a+":",w(t))for(var l=0;l<t.length;l++){var u=a+R(i=t[l],l);s+=T(i,e,o,u,r)}else if(u=function(t){return null===t||"object"!=typeof t?null:"function"==typeof(t=p&&t[p]||t["@@iterator"])?t:null}(t),"function"==typeof u)for(t=u.call(t),l=0;!(i=t.next()).done;)s+=T(i=i.value,e,o,u=a+R(i,l++),r);else if("object"===i)throw e=String(t),Error("Objects are not valid as a React child (found: "+("[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function O(t,e,n){if(null==t)return t;var c=[],o=0;return T(t,c,"","",(function(t){return e.call(n,t,o++)})),c}function L(t){if(-1===t._status){var e=t._result;(e=e()).then((function(e){0!==t._status&&-1!==t._status||(t._status=1,t._result=e)}),(function(e){0!==t._status&&-1!==t._status||(t._status=2,t._result=e)})),-1===t._status&&(t._status=0,t._result=e)}if(1===t._status)return t._result.default;throw t._result}var N={current:null},$={transition:null},P={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:$,ReactCurrentOwner:k};e.Children={map:O,forEach:function(t,e,n){O(t,(function(){e.apply(this,arguments)}),n)},count:function(t){var e=0;return O(t,(function(){e++})),e},toArray:function(t){return O(t,(function(t){return t}))||[]},only:function(t){if(!C(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},e.Component=y,e.Fragment=o,e.Profiler=r,e.PureComponent=g,e.StrictMode=a,e.Suspense=u,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,e.cloneElement=function(t,e,c){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=m({},t.props),a=t.key,r=t.ref,i=t._owner;if(null!=e){if(void 0!==e.ref&&(r=e.ref,i=k.current),void 0!==e.key&&(a=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)j.call(e,l)&&!_.hasOwnProperty(l)&&(o[l]=void 0===e[l]&&void 0!==s?s[l]:e[l])}var l=arguments.length-2;if(1===l)o.children=c;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}return{$$typeof:n,type:t.type,key:a,ref:r,props:o,_owner:i}},e.createContext=function(t){return(t={$$typeof:s,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:t},t.Consumer=t},e.createElement=E,e.createFactory=function(t){var e=E.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:l,render:t}},e.isValidElement=C,e.lazy=function(t){return{$$typeof:f,_payload:{_status:-1,_result:t},_init:L}},e.memo=function(t,e){return{$$typeof:d,type:t,compare:void 0===e?null:e}},e.startTransition=function(t){var e=$.transition;$.transition={};try{t()}finally{$.transition=e}},e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},e.useCallback=function(t,e){return N.current.useCallback(t,e)},e.useContext=function(t){return N.current.useContext(t)},e.useDebugValue=function(){},e.useDeferredValue=function(t){return N.current.useDeferredValue(t)},e.useEffect=function(t,e){return N.current.useEffect(t,e)},e.useId=function(){return N.current.useId()},e.useImperativeHandle=function(t,e,n){return N.current.useImperativeHandle(t,e,n)},e.useInsertionEffect=function(t,e){return N.current.useInsertionEffect(t,e)},e.useLayoutEffect=function(t,e){return N.current.useLayoutEffect(t,e)},e.useMemo=function(t,e){return N.current.useMemo(t,e)},e.useReducer=function(t,e,n){return N.current.useReducer(t,e,n)},e.useRef=function(t){return N.current.useRef(t)},e.useState=function(t){return N.current.useState(t)},e.useSyncExternalStore=function(t,e,n){return N.current.useSyncExternalStore(t,e,n)},e.useTransition=function(){return N.current.useTransition()},e.version="18.2.0"}},o={};function a(t){var e=o[t];if(void 0!==e)return e.exports;var n=o[t]={id:t,loaded:!1,exports:{}};return c[t].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=c,t=[],a.O=(e,n,c,o)=>{if(!n){var r=1/0;for(u=0;u<t.length;u++){for(var[n,c,o]=t[u],i=!0,s=0;s<n.length;s++)(!1&o||r>=o)&&Object.keys(a.O).every((t=>a.O[t](n[s])))?n.splice(s--,1):(i=!1,o<r&&(r=o));if(i){t.splice(u--,1);var l=c();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[n,c,o]},a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce(((e,n)=>(a.f[n](t,e),e)),[])),a.u=t=>({104:"blueprint-icons-all-paths",439:"blueprint-icons-all-paths-loader",569:"blueprint-icons-split-paths-by-size-loader"}[t]+".js"),a.miniCssF=t=>{},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},n="browser-extension:",a.l=(t,c,o,r)=>{if(e[t])e[t].push(c);else{var i,s;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+o){i=d;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.setAttribute("data-webpack",n+o),i.src=t),e[t]=[c];var f=(n,c)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((t=>t(c))),n)return n(c)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),s&&document.head.appendChild(i)}},a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),a.p="",(()=>{var t={35:0};a.f.j=(e,n)=>{var c=a.o(t,e)?t[e]:void 0;if(0!==c)if(c)n.push(c[2]);else{var o=new Promise(((n,o)=>c=t[e]=[n,o]));n.push(c[2]=o);var r=a.p+a.u(e),i=new Error;a.l(r,(n=>{if(a.o(t,e)&&(0!==(c=t[e])&&(t[e]=void 0),c)){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;i.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",i.name="ChunkLoadError",i.type=o,i.request=r,c[1](i)}}),"chunk-"+e,e)}},a.O.j=e=>0===t[e];var e=(e,n)=>{var c,o,[r,i,s]=n,l=0;if(r.some((e=>0!==t[e]))){for(c in i)a.o(i,c)&&(a.m[c]=i[c]);if(s)var u=s(a)}for(e&&e(n);l<r.length;l++)o=r[l],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(u)},n=self.webpackChunkbrowser_extension=self.webpackChunkbrowser_extension||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();var r=a.O(void 0,[917,251,692,369,426,523,508,204,885,704,23],(()=>a(87375)));r=a.O(r)})();