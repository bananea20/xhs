// Click&Clean for Microsoft Edge - HOTCLEANER.COM - Copyright (c) 2020 Vlad & Serge Strukoff. All Rights Reserved.
// Minified by Google Closure Compiler 20190929.0.0
'use strict';(function(){const a=self,g=a.document,E=a.JSON,A=a.Object,qa=a.Image,Z=a.CustomElementRegistry?!0:!1,y=a.chrome,q=y.runtime,aa=y.i18n,I=q.sendMessage,ra=aa.getMessage;var h=String.prototype;const J=Array.prototype,x=Storage.prototype,ba=Navigator.prototype,sa=XMLHttpRequest.prototype,K=DocumentFragment.prototype,d=Document.prototype,ca=DOMImplementation.prototype,B=EventTarget.prototype,z=Event.prototype,l=Node.prototype,b=Element.prototype,L=HTMLElement.prototype,da=HTMLMediaElement.prototype,ea=
h.slice,fa=h.indexOf,ha=h.split,ia=J.indexOf,M=J.push,ta=J.sort,C=d.createElement,ua=d.createElementNS,p=B.addEventListener,U=d.createDocumentFragment,ja=b.hasAttribute,f=b.getAttribute,D=b.setAttribute,ka=b.removeAttribute,V=d.createTextNode,la=z.stopPropagation,u=l.appendChild,W=l.insertBefore,N=l.removeChild,O=b.attachShadow||null,ma=b.querySelectorAll,va=K.querySelector,wa=d.querySelector,P=E.stringify,xa=E.parse,R=a.parseInt,na=A.defineProperty;try{var F=A.getOwnPropertyDescriptor(Function.prototype,
"call");F&&(F.configurable=!1,F.writable=!1,A.defineProperty(Function.prototype,"call",F))}catch(oa){}const ya=(h=A.getOwnPropertyDescriptor(l,"textContent"))&&h.get||null,r=h&&h.set||null,pa=(h=A.getOwnPropertyDescriptor(d,"body"))&&h.get||null;try{x.getItem=x.setItem=x.removeItem=x.clear=x.key=ba.sendBeacon=sa.open=d.adoptNode=d.getElementById=d.getElementsByClassName=d.getElementsByName=d.getElementsByTagName=d.getElementsByTagNameNS=K.querySelector=K.querySelectorAll=d.createDocumentFragment=
d.createTextNode=d.createElement=d.createElementNS=d.evaluate=d.createEvent=d.createCDATASection=d.execCommand=d.querySelector=d.querySelectorAll=d.open=d.write=d.writeln=d.prepend=d.importNode=d.registerElement=ca.createHTMLDocument=ca.createDocument=B.addEventListener=B.removeEventListener=B.dispatchEvent=z.preventDefault=z.stopPropagation=z.stopImmediatePropagation=l.appendChild=l.cloneNode=l.getRootNode=l.insertBefore=l.removeChild=l.replaceChild=b.attachShadow=b.createShadowRoot=b.getElementsByClassName=
b.getElementsByTagName=b.getElementsByTagNameNS=b.append=b.remove=b.before=b.after=b.prepend=b.querySelector=b.querySelectorAll=b.webkitMatchesSelector=b.requestPointerLock=b.setAttribute=b.removeAttribute=b.removeAttributeNS=b.removeAttributeNode=b.replaceWith=b.insertAdjacentElement=b.insertAdjacentText=b.insertAdjacentHTML=L.focus=L.click=da.play=da.load=function(){}}catch(oa){}delete a.AnimationWorklet;delete a.AudioContext;delete a.Blob;delete a.CSS;delete a.CustomElementRegistry;delete a.CustomEvent;
delete a.DOMImplementation;delete a.DOMParser;delete a.Event;delete a.FormData;delete a.Image;delete a.JSON;delete a.LayoutWorklet;delete a.MutationObserver;delete a.Navigator;delete a.PaintWorklet;delete a.Proxy;delete a.Range;delete a.Request;delete a.Response;delete a.ServiceWorker;delete a.SharedWorker;delete a.Storage;delete a.URL;delete a.WebAssembly;delete a.WebSocket;delete a.Worker;delete a.XMLHttpRequest;delete a.XMLHttpRequestUpload;delete a.XMLSerializer;delete a.XSLTProcessor;delete a.fetch;
delete a.close;delete a.console;delete a.open;delete a.alert;delete a.confirm;delete a.eval;delete a.localStorage;delete a.postMessage;delete a.prompt;delete a.stop;delete a.navigator;delete l.textContent;delete d.cookie;delete d.body;delete ba.serviceWorker;delete b.innerHTML;delete b.outerHTML;delete L.innerText;delete L.outerText;delete y.Event;for(var Q in y)if("runtime"==Q)for(var S in q)"function"===typeof q[S]&&"connect"!==S&&(q[S]=function(){});else if("object"===typeof y[Q])try{A.defineProperty(y,
Q,{configurable:!1,enumerable:!1,writable:!1,value:{}})}catch(oa){}var X;const e=a=>O&&Z?va.call(X,a):wa.call(g,a),za=()=>{var a=xa('[{"t":1,"l":"link","a":[{"n":"rel","v":"stylesheet"},{"n":"type","v":"text/css"},{"n":"href","v":"css4788/cookies4788.css"}]},{"t":1,"l":"div","a":[{"n":"id","v":"host"}],"c":[{"t":1,"l":"div","a":[{"n":"class","v":"view"},{"n":"id","v":"view0"}],"c":[{"t":1,"l":"div","a":[{"n":"class","v":"hdr"},{"n":"id","v":"hdr0"}],"c":[{"t":1,"l":"button","a":[{"n":"id","v":"sel0"},{"n":"class","v":"chk"},{"n":"title","v":"t10"}],"c":[{"t":1,"l":"div"}]},{"t":1,"l":"label","a":[{"n":"class","v":"label elps"},{"n":"id","v":"t11"}],"c":[{"t":1,"l":"span","a":[{"n":"id","v":"cnt0"}]}]},{"t":1,"l":"button","a":[{"n":"class","v":"btn"},{"n":"id","v":"del0"},{"n":"title","v":"t14"}]},{"t":1,"l":"button","a":[{"n":"class","v":"btn"},{"n":"id","v":"ref"},{"n":"title","v":"t13"}]}]},{"t":3,"v":" "},{"t":1,"l":"div","a":[{"n":"class","v":"list"},{"n":"id","v":"list0"},{"n":"data-id","v":"0"}]}]},{"t":1,"l":"button","a":[{"n":"id","v":"toc1"}]},{"t":1,"l":"button","a":[{"n":"id","v":"toc0"}]},{"t":1,"l":"div","a":[{"n":"class","v":"view"},{"n":"id","v":"view1"}],"c":[{"t":1,"l":"div","a":[{"n":"class","v":"hdr"},{"n":"id","v":"hdr1"}],"c":[{"t":1,"l":"button","a":[{"n":"id","v":"sel1"},{"n":"class","v":"chk"},{"n":"title","v":"t10"}],"c":[{"t":1,"l":"div"}]},{"t":1,"l":"label","a":[{"n":"class","v":"label elps"},{"n":"id","v":"t12"}],"c":[{"t":1,"l":"span","a":[{"n":"id","v":"cnt1"},{"n":"class","v":"nvw"}]}]},{"t":1,"l":"div","a":[{"n":"id","v":"services"}]}]},{"t":1,"l":"div","a":[{"n":"class","v":"list"},{"n":"id","v":"list1"},{"n":"data-id","v":"1"}]}]},{"t":1,"l":"div","a":[{"n":"id","v":"shade"}]}]}]'),
d=(a,b)=>{for(let q=0,h=b.length;q<h;q++){var e=b[q];if(1==e.t){var f=e.n?ua.call(g,"http://www.w3.org/2000/svg",e.l):C.call(g,e.l);for(var r=0,l=e.a&&e.a.length||0;r<l;r++){var p=e.a[r];D.call(f,p.n,p.v)}e.c&&d(f,e.c);u.call(a,f)}else 3==e.t&&u.call(a,V.call(g,e.v))}};X=O&&Z?O.call(pa.call(g),{mode:"closed"}):pa.call(g);var b=U.call(g);d(b,a);u.call(X,b)},Aa=function(){function a(){G(1);for(var c=e("#list0");c.firstElementChild;)N.call(c,c.firstElementChild);for(c=e("#list1");c.firstElementChild;)N.call(c,
c.firstElementChild);I.call(q,P.call(E,{id:30}),function(c){var a=c[0];c=c[1];var m=[],k=0,b=0,d=0;if(0<a.length){for(var w=0,f;f=a[w];w++)"."==f.charAt(0)&&(a[w]=ea.call(f,1));ta.call(a,function(c,a){return c<a?-1:1});var g=ia.call(c,a[0]);for(w=0;f=a[w];w++){t!=f&&(0<k&&(0>g?(M.call(m,k),b+=k):(c[g+1]=k,d+=k),k=0),g=ia.call(c,f),0>g&&M.call(m,f));k++;var t=f}0<k&&(0>g?(M.call(m,k),b+=k):(c[g+1]=k,d+=k))}J(0,m,1,1);J(1,c,0,0);r.call(e("#cnt0")," ("+b+")");r.call(e("#cnt1")," ("+d+")");G(0)})}const b=
function(c){c=B(this,"on");for(var a=this.parentElement.nextElementSibling.children,n=0,b;b=a[n];n++)z(b.firstElementChild,"on",c),z(b,"on",c)},d=function(c){var a=f.call(this.parentNode,"data-domain");I.call(q,P({id:9,url:"https://"+a+"/",selected:!0,first:!1,incognito:!1}));la.call(c)},l=function(c){la.call(c);c=this.parentNode;var a=f.call(c.parentNode,"data-id"),n=f.call(c,"data-domain"),b=R(f.call(c,"data-count"));I.call(q,P.call(E,{id:32,v:[n]}));N.call(c.parentElement,c);x(a,-b);1==a&&h()},
h=function(){for(var c=[],a=e("#list1").children,b=0,d;d=a[b];b++)M.call(c,f.call(d,"data-domain"),0);I.call(q,P.call(E,{id:35,v:c}));G(0)},y=function(a,b){var c=ma.call(e("#list"+a),".item[on]");if(0<c.length){for(var m=[],k=0,d;d=c[k];k++)M.call(m,N.call(d.parentNode,d));K(a,b,m)}},x=function(a,b){a=e("#cnt"+a);var c=R(ea.call(ya.call(a),2));r.call(a," ("+(c+b)+")")},B=function(a,b){var c=ja.call(a,b);c?ka.call(a,b):D.call(a,b,!0);return!c},z=function(a,b,d){d?D.call(a,b,!0):ka.call(a,b)},L=function(a){var c=
ja.call(this,"on");if(a.shiftKey){if(0>T&&(T=this.parentNode.firstElementChild),a=!c,c=T,this&&c){var b=this;f.call(b,"data-domain")>f.call(c,"data-domain")&&(b=c,c=this);for(;b&&f.call(b,"data-domain")<=f.call(c,"data-domain");)z(b,"on",a),z(b.firstElementChild,"on",a),b=b.nextElementSibling}}else B(this.firstElementChild,"on"),B(this,"on");T=this},F=function(a,b,e,f){var c=C.call(g,"div");var m=C.call(g,"button");var n=C.call(g,"div");var w=C.call(g,"label");var Y=C.call(g,"button");var h=C.call(g,
"button");c.className="item";m.className="chk";w.className="label elps";h.className="btn link";Y.className="btn del";D.call(c,"data-domain",a);D.call(c,"data-count",b);t&&D.call(c,"data-brand",t);f&&(D.call(m,"on",!0),D.call(c,"on",!0));var t=Q(a);e?r.call(w,a+" ("+b+")"):t?(r.call(w,t+" "+a),na.call(A,m,"brand",{configurable:!1,enumerable:!1,writable:!1,value:t})):r.call(w,a);u.call(m,n);u.call(c,m);u.call(c,w);u.call(c,Y);u.call(c,h);p.call(Y,"click",l,!1);p.call(h,"click",d,!1);p.call(c,"click",
L,!1);return c},J=function(a,b,d,f){a=e("#list"+a);for(var c,m=U.call(g),n=0;c=b[n];n+=2)c=F(c,b[n+1],d,f),u.call(m,c);u.call(a,m)},K=function(a,b,d){for(var c=e("#list"+b),k,m,n,g,h=0,l=0,t;t=d[l];l++){g=!0;k=f.call(t,"data-domain");m=t.brand||Q(k);for(var q=0,p;p=c.children[q];q++)if(n=f.call(p,"data-domain"),k==n){g=!1;break}else if(k<n){g=R(f.call(t,"data-count"));h+=g;n=t.firstElementChild.nextElementSibling;0==b?r.call(n,k+" ("+g+")"):m?r.call(n,m+" "+k):r.call(n,k);W.call(c,t,p);g=!1;break}g&&
(g=R(f.call(t,"data-count")),h+=g,n=t.firstElementChild.nextElementSibling,0==b?r.call(n,k+" ("+g+")"):m?r.call(n,m+" "+k):r.call(n,k),u.call(c,t))}0<h&&(x(a,-h),x(b,h))},O=function(){return H=[["Google","GMail, YouTube, \u2026","google.com,youtube.com,consent.google.com,accounts.google.com,www.google.com"],["Facebook","Facebook","facebook.com"],["Twitter","Twitter","twitter.com"],["Yahoo","Yahoo","yahoo.com"],["Microsoft","SkyDrive, Live Mail, \u2026","login.live.com,live.com"]]},Q=function(a){for(var c=
O(),b,d=0,e;e=c[d];d++)if(-1<fa.call(e[2],a)){b=e[0];break}return b},S=function(a){for(var b,c=ha.call(this.domains||"",","),d=0,g=c.length;d<g;d++)if(a=c[d]){a:{for(var l,p=a,q=e("#list0").children,r=0;b=q[r];r++)if(l=f.call(b,"data-domain"),l==p)break a;b=0}b=b?N.call(b.parentNode,b):F(a,0,0,0);K(0,1,[b])}h()},G=function(a){e("#shade").className=a?"dbk":"nvw"};var T=-1,H=ha.call(ra.call(aa,"cookies"),";"),v=e("#sel0");v.title=H[0];v=e("#sel1");v.title=H[0];v=e("#t11");W.call(v,V.call(g,H[1]),v.firstElementChild);
v=e("#t12");W.call(v,V.call(g,H[2]),v.firstElementChild);v=e("#ref");v.title=H[3];v=e("#del0");v.title=H[4];p.call(e("#sel0"),"click",b,!1);p.call(e("#sel1"),"click",b,!1);p.call(e("#ref"),"click",a,!1);p.call(e("#del0"),"click",function(a){G(1);var b=this.parentElement.nextElementSibling;a=ma.call(b,".item[on]");if(0<a.length){var c=[];b=f.call(b,"data-id");for(var d,e=0,g=0,h;h=a[g];g++)d=f.call(h,"data-domain"),M.call(c,d),e+=R(f.call(h,"data-count")),N.call(h.parentElement,h);I.call(q,P.call(E,
{id:32,v:c}));x(b,-e)}G(0)},!1);p.call(e("#toc0"),"click",function(){G(1);y(1,0);h()},!1);p.call(e("#toc1"),"click",function(a){G(1);y(0,1);h()},!1);a();(function(){for(var a=e("#services"),b=O(),d,f,h=U.call(g),l=0;f=b[l];l++)d=C.call(g,"button"),d.className="btn float-left",d.title=f[1],na.call(A,d,"domains",{configurable:!1,enumerable:!1,writable:!1,value:f[2]}),f=new qa,f.className="mt3",f.src="img4788/fav/"+(l+1)+".png",u.call(d,f),p.call(d,"click",S,!1),u.call(h,d);u.call(a,h)})()};a.top==a?
a.location.replace("https://www.hotcleaner.com/cookie-wiper.html"):p.call(a,"DOMContentLoaded",function(){I.call(q,P.call(E,{id:2}),function(a){0===fa.call(a,"https://www.hotcleaner.com/")&&(za(),Aa())})},!0)})();