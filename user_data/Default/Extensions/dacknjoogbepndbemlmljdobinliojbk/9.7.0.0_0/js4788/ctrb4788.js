// Click&Clean for Microsoft Edge - HOTCLEANER.COM - Copyright (c) 2020 Vlad & Serge Strukoff. All Rights Reserved.
// Minified by Google Closure Compiler 20190929.0.0
'use strict';(function(){const e=self.window,x=e.document,r=e.Math,C=e.Object,O=e.navigator.language,V=e.customElements?!0:!1,z=e.chrome,A=z.runtime,W=z.i18n,X=A.getURL,fa=W.getMessage;var y=String.prototype;const Y=Array.prototype,D=Storage.prototype,Z=Navigator.prototype,ha=XMLHttpRequest.prototype,P=DocumentFragment.prototype,f=Document.prototype,aa=DOMImplementation.prototype,J=EventTarget.prototype,E=Event.prototype,u=Node.prototype,g=Element.prototype,F=HTMLElement.prototype,ba=HTMLFormElement.prototype,
ca=y.indexOf,da=y.split,ia=y.toUpperCase,ja=Y.indexOf,ka=Y.concat,Q=f.createElement,la=f.createElementNS,B=J.addEventListener,ma=f.createDocumentFragment,na=g.setAttribute,oa=f.createTextNode,K=E.stopPropagation,L=E.stopImmediatePropagation,G=u.appendChild,pa=u.removeChild,R=g.attachShadow||void 0,qa=P.querySelector,ra=f.querySelector,sa=F.focus,ta=ba.submit,w=(y=C.getOwnPropertyDescriptor(u,"textContent"))&&y.set||null,ea=(y=C.getOwnPropertyDescriptor(f,"body"))&&y.get||null,ua=e.JSON.parse,va=e.isNaN,
S=e.setTimeout;try{let e=C.getOwnPropertyDescriptor(Function.prototype,"call");e&&(e.configurable=!1,e.writable=!1,C.defineProperty(Function.prototype,"call",e))}catch(M){}try{D.getItem=D.setItem=D.removeItem=D.clear=D.key=Z.sendBeacon=ha.open=f.adoptNode=f.getElementById=f.getElementsByClassName=f.getElementsByName=f.getElementsByTagName=f.getElementsByTagNameNS=P.querySelector=P.querySelectorAll=f.createDocumentFragment=f.createTextNode=f.createElement=f.createElementNS=f.evaluate=f.createEvent=
f.createCDATASection=f.execCommand=f.querySelector=f.querySelectorAll=f.open=f.write=f.writeln=f.prepend=f.importNode=f.registerElement=aa.createHTMLDocument=aa.createDocument=J.addEventListener=J.removeEventListener=J.dispatchEvent=E.preventDefault=E.stopPropagation=E.stopImmediatePropagation=u.appendChild=u.cloneNode=u.getRootNode=u.insertBefore=u.removeChild=u.replaceChild=g.attachShadow=g.createShadowRoot=g.getElementsByClassName=g.getElementsByTagName=g.getElementsByTagNameNS=g.append=g.remove=
g.before=g.after=g.prepend=g.querySelector=g.querySelectorAll=g.requestPointerLock=g.setAttribute=g.setAttributeNS=g.removeAttribute=g.removeAttributeNS=g.removeAttributeNode=g.replaceWith=g.insertAdjacentElement=g.insertAdjacentText=g.insertAdjacentHTML=F.focus=F.click=ba.submit=()=>{}}catch(M){}delete e.AnimationWorklet;delete e.AudioContext;delete e.Blob;delete e.CSS;delete e.CustomElementRegistry;delete e.CustomEvent;delete e.DOMImplementation;delete e.DOMParser;delete e.Event;delete e.FormData;
delete e.Image;delete e.JSON;delete e.LayoutWorklet;delete e.MutationObserver;delete e.Navigator;delete e.PaintWorklet;delete e.Proxy;delete e.Range;delete e.Request;delete e.Response;delete e.ServiceWorker;delete e.SharedWorker;delete e.Storage;delete e.URL;delete e.WebAssembly;delete e.WebSocket;delete e.Worker;delete e.XMLHttpRequest;delete e.XMLHttpRequestUpload;delete e.XMLSerializer;delete e.XSLTProcessor;delete e.fetch;delete e.close;delete e.console;delete e.open;delete e.alert;delete e.confirm;
delete e.eval;delete e.localStorage;delete e.postMessage;delete e.prompt;delete e.stop;delete e.navigator;delete u.textContent;delete f.cookie;delete f.body;delete Z.serviceWorker;delete g.innerHTML;delete g.outerHTML;delete F.innerText;delete F.outerText;delete z.Event;for(var T in z)if("runtime"==T)for(var U in A)"function"===typeof A[U]&&"connect"!==U&&(A[U]=()=>{});else if("object"===typeof z[T])try{C.defineProperty(z,T,{configurable:!1,enumerable:!1,writable:!1,value:{}})}catch(M){}var N,H;const xa=
()=>{N=R&&V?R.call(ea.call(x),{mode:"closed"}):ea.call(x);var e=Q.call(x,"link");e.rel="stylesheet";e.type="text/css";e.href="css4788/ctrb4788.css";G.call(N,e);S(wa,1)},wa=()=>{var e=ua('[{"t":1,"l":"div","a":[{"n":"id","v":"eqSXz"},{"n":"class","v":"eqqEQe"}],"c":[{"t":1,"l":"h1","a":[{"n":"id","v":"eqb4"}],"c":[{"t":3,"v":"t10"}]},{"t":3,"v":" "},{"t":1,"l":"div","a":[{"n":"id","v":"eqv"}],"c":[{"t":1,"l":"div","a":[{"n":"id","v":"eqRj"}],"c":[{"t":3,"v":"t11"}]},{"t":1,"l":"div","a":[{"n":"id","v":"eqav"}],"c":[{"t":1,"l":"input","a":[{"n":"id","v":"eqUA"},{"n":"value","v":"50"},{"n":"type","v":"range"},{"n":"min","v":"2"},{"n":"max","v":"100"},{"n":"step","v":"1"}]},{"t":1,"l":"div","a":[{"n":"id","v":"eqY"},{"n":"title","v":"US Dollars"}],"c":[{"t":3,"v":"$50"}]},{"t":1,"l":"form","a":[{"n":"id","v":"equDR"},{"n":"action","v":"https://www.paypal.com/cgi-bin/webscr"},{"n":"method","v":"post"}],"c":[{"t":3,"v":" "},{"t":1,"l":"input","a":[{"n":"type","v":"hidden"},{"n":"required","v":""},{"n":"name","v":"cmd"}]},{"t":1,"l":"input","a":[{"n":"type","v":"hidden"},{"n":"required","v":""},{"n":"name","v":"amount"}]},{"t":1,"l":"input","a":[{"n":"type","v":"hidden"},{"n":"required","v":""},{"n":"name","v":"business"}]},{"t":1,"l":"input","a":[{"n":"type","v":"hidden"},{"n":"required","v":""},{"n":"name","v":"currency_code"}]},{"t":3,"v":" "},{"t":1,"l":"input","a":[{"n":"type","v":"hidden"},{"n":"required","v":""},{"n":"name","v":"item_name"}]},{"t":1,"l":"input","a":[{"n":"type","v":"hidden"},{"n":"required","v":""},{"n":"name","v":"no_shipping"}]},{"t":1,"l":"input","a":[{"n":"type","v":"hidden"},{"n":"required","v":""},{"n":"name","v":"country"}]},{"t":1,"l":"input","a":[{"n":"type","v":"hidden"},{"n":"required","v":""},{"n":"name","v":"lc"}]},{"t":1,"l":"input","a":[{"n":"type","v":"hidden"},{"n":"required","v":""},{"n":"name","v":"custom"}]},{"t":1,"l":"input","a":[{"n":"type","v":"hidden"},{"n":"required","v":""},{"n":"name","v":"cancel_return"}]},{"t":1,"l":"input","a":[{"n":"value","v":""},{"n":"id","v":"eqNi5"},{"n":"type","v":"button"},{"n":"src","v":"img4788/pp.png"}]},{"t":1,"l":"input","a":[{"n":"name","v":"submit"},{"n":"id","v":"eqvCgo"},{"n":"type","v":"image"},{"n":"src","v":"img4788/pp.png"},{"n":"title","v":"t13"}]}]}]},{"t":3,"v":" "}]},{"t":1,"l":"div","a":[{"n":"id","v":"eqK"}],"c":[{"t":1,"l":"div","a":[{"n":"id","v":"eqy3"}],"c":[{"t":3,"v":"Contribute via your phone by "},{"t":1,"l":"a","a":[{"n":"href","v":"https://www.mixesoft.com/scan-qr-code.html"},{"n":"title","v":"QR Code Scanner"},{"n":"target","v":"_blank"}],"c":[{"t":3,"v":"scanning"}]},{"t":3,"v":" this QR code."}]},{"t":1,"l":"div","a":[{"n":"id","v":"eqGzBX"}]}]},{"t":1,"l":"div","a":[{"n":"id","v":"eqU5"}],"c":[{"t":1,"l":"p","c":[{"t":1,"l":"b","a":[{"n":"id","v":"eqGJ214"}],"c":[{"t":3,"v":"eqGJ214"}]},{"t":3,"v":" "},{"t":1,"l":"i","a":[{"n":"class","v":"eqZF"},{"n":"title","v":"t15"}]}]},{"t":1,"l":"p","a":[{"n":"id","v":"eqGJ216"}],"c":[{"t":3,"v":"eqGJ216"}]},{"t":1,"l":"p","a":[{"n":"id","v":"eqGJ217"}],"c":[{"t":3,"v":"eqGJ217"}]},{"t":1,"l":"p","c":[{"t":1,"l":"span","a":[{"n":"id","v":"eqGJ218"}],"c":[{"t":3,"v":"eqGJ218"}]},{"t":3,"v":" "},{"t":1,"l":"a","a":[{"n":"id","v":"eqGJ219"},{"n":"href","v":"https://www.hotcleaner.com/support-click-and-clean-development.html"}],"c":[{"t":3,"v":"eqGJ219"}]},{"t":3,"v":" "},{"t":1,"l":"span","a":[{"n":"id","v":"eqGJ220"}],"c":[{"t":3,"v":"eqGJ220"}]},{"t":3,"v":" "},{"t":1,"l":"i","a":[{"n":"id","v":"eqGJ221"},{"n":"class","v":"eqZF"}]}]},{"t":1,"l":"p","c":[{"t":1,"l":"b","a":[{"n":"id","v":"eqGJ222"}],"c":[{"t":3,"v":"eqGJ222"}]},{"t":3,"v":" "},{"t":1,"l":"span","a":[{"n":"id","v":"eqGJ223"}],"c":[{"t":3,"v":">eqGJ223"}]}]}]}]}]'),
n=ma.call(x),v=(e,m)=>{for(var h,k,n,f=0,M=m.length;f<M;f++)if(h=m[f],1==h.t){k=h.n?la.call(x,"http://www.w3.org/2000/svg",h.l):Q.call(x,h.l);for(var g=0,ya=h.a&&h.a.length||0;g<ya;g++)n=h.a[g],na.call(k,n.n,n.v);h.c&&v(k,h.c);G.call(e,k)}else 3==h.t&&G.call(e,oa.call(x,h.v))};v(n,e);G.call(N,n);za();l("#eqSXz").className=""},za=()=>{var f,n,v,g,m,h,k,r,t=l("#eqUA"),x=l("#eqY"),q=l("#equDR"),u="";const a=a=>{(a=l("#eqGzBX"))&&a.firstElementChild&&(r=null,pa.call(a,a.firstElementChild));
l("#eqSXz").style.setProperty("font-size","130%");d()},c=a=>{l("#eqNi5").value=u;K.call(a);L.call(a)},b=a=>{q.method="POST";q.action="https://www.paypal.com/cgi-bin/webscr";q.cmd.value="_donations";q.no_shipping.value=1;q.business.value="webmaster@mixesoft.com";q.item_name.value="Donation for Click&Clean";q.currency_code.value=n;q.country.value=f;q.lc.value=O;q.custom.value="CH9620";q.cancel_return.value="https://www.hotcleaner.com/support-click-and-clean-development.html#canceled";t.min=m;t.max=
h;t.step=k;a?(w.call(x,v+" "+t.value),q.amount.value=t.value):(w.call(x,v+" "+g),x.title=n,q.amount.value=t.value=g)},d=()=>{var a=l("#eqGzBX"),c="https://appn.center/apiv1/ctrb?c="+t.value+"&e="+n+"&y="+f;r?r.makeCode(c):0<a.offsetHeight?r=new H(a,{text:c,width:a.offsetWidth,height:a.offsetHeight}):S(d,1)};(()=>{var a=da.call(fa.call(W,"menu3"),";"),b=l("#eqb4");w.call(b,a[0]);b=l("#eqRj");w.call(b,a[1]);b=l("#eqvCgo");b.title=a[3];b=l("#eqGJ214");w.call(b,a[4]);b=l(".eqZF");b.title=
a[5];b=l("#eqGJ216");w.call(b,a[6]);b=l("#eqGJ217");w.call(b,a[7]);b=l("#eqGJ218");w.call(b,a[8]);b=l("#eqGJ219");w.call(b,a[9]);b=l("#eqGJ220");w.call(b,a[10]);b=l("#eqGJ221");b.title=a[11];b=l("#eqGJ222");w.call(b,a[12]);b=l("#eqGJ223");w.call(b,a[13]);b=l("#eqNi5");b.value=a[14];u=a[15];B.call(b,"click",c,!0)})();(()=>{var a="AT BE CY EE FI FR DE GR IE IT LV LT LU MT NL PT SK SI SE".split(" ");n="USD";v="$";g=50;m=2;h=100;k=1;var c=O?ia.call(O):"US";f=1<ca.call(c,"-")?da.call(c,"-")[1]:c;"AU"==f?(n="AUD",
v="A$"):"JA"==f?(f="JP",n="JPY",v="\u00a5",g=500,m=200,h=9900,k=100):"CH"==f?(n="CHF",v="Fr"):"CS"==f?(f="CZ",n="CZK",v="K\u010d",g=100,m=30,h=990,k=10):"GB"==f?(n="GBP",v="\u00a3",g=30):"MX"==f?(n="MXN",v="M$",m=g=40,h=990,k=10):"NO"==f?(n="NOK",v="kr",g=100,m=20,h=990,k=10):"PL"==f?(n="PLN",v="z\u0142",g=20,m=10,h=500,k=5):"HE"==f?(f="IL",n="ILS",v="\u20aa",g=20,m=10,h=500,k=5):"RU"==f?(n="RUB",v="\u20bd",g=500,m=100,h=5E3,k=50):"SV"==f?(f="SE",n="SEK",v="kr",g=100,m=20,h=1E3,k=10):"SG"==f?(n="SGD",
v="S$"):-1<ja.call(a,f)&&(n="EUR",v="\u20ac");b();sa.call(t);B.call(e,"keydown",a=>{13===a.keyCode&&ta.call(q);K.call(a);L.call(a)},!0);B.call(t,"change",a=>{b(!0);d();K.call(a);L.call(a)},!1);B.call(q,"submit",a=>{K.call(a);L.call(a);a=t.value;return va(a)||a<m||a>h?!1:!0},!0)})();Aa();a();B.call(e,"resize",a,!0)},l=e=>R&&V?qa.call(N,e):ra.call(x,e),Aa=()=>{const e=function(a){this.mode=g.MODE_8BIT_BYTE;this.data=a;this.parsedData=[];a=0;for(var c=this.data.length;a<c;a++){var b=[],d=this.data.charCodeAt(a);
65536<d?(b[0]=240|(d&1835008)>>>18,b[1]=128|(d&258048)>>>12,b[2]=128|(d&4032)>>>6,b[3]=128|d&63):2048<d?(b[0]=224|(d&61440)>>>12,b[1]=128|(d&4032)>>>6,b[2]=128|d&63):128<d?(b[0]=192|(d&1984)>>>6,b[1]=128|d&63):b[0]=d;this.parsedData.push(b)}this.parsedData=ka.call([],this.parsedData);this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))};e.prototype={getLength:function(a){return this.parsedData.length},write:function(a){for(var c=
0,b=this.parsedData.length;c<b;c++)a.put(this.parsedData[c],8)}};const f=function(a,c){this.typeNumber=a;this.errorCorrectLevel=c;this.modules=null;this.moduleCount=0;this.dataCache=null;this.dataList=[]};f.prototype={addData:function(a){a=new e(a);this.dataList.push(a);this.dataCache=null},isDark:function(a,c){if(0>a||this.moduleCount<=a||0>c||this.moduleCount<=c)throw Error(a+","+c);return this.modules[a][c]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},
makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17;this.modules=Array(this.moduleCount);for(var b=0;b<this.moduleCount;b++){this.modules[b]=Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++)this.modules[b][d]=null}this.setupPositionProbePattern(0,0);this.setupPositionProbePattern(this.moduleCount-7,0);this.setupPositionProbePattern(0,this.moduleCount-7);this.setupPositionAdjustPattern();this.setupTimingPattern();this.setupTypeInfo(a,c);7<=this.typeNumber&&this.setupTypeNumber(a);
null==this.dataCache&&(this.dataCache=f.createData(this.typeNumber,this.errorCorrectLevel,this.dataList));this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,c){for(var b=-1;7>=b;b++)if(!(-1>=a+b||this.moduleCount<=a+b))for(var d=-1;7>=d;d++)-1>=c+d||this.moduleCount<=c+d||(this.modules[a+b][c+d]=0<=b&&6>=b&&(0==d||6==d)||0<=d&&6>=d&&(0==b||6==b)||2<=b&&4>=b&&2<=d&&4>=d?!0:!1)},getBestMaskPattern:function(){for(var a=0,c=0,b=0;8>b;b++){this.makeImpl(!0,b);var d=m.getLostPoint(this);
if(0==b||a>d)a=d,c=b}return c},createMovieClip:function(a,c,b){a=a.createEmptyMovieClip(c,b);this.make();for(c=0;c<this.modules.length;c++){b=1*c;for(var d=0;d<this.modules[c].length;d++){var e=1*d;this.modules[c][d]&&(a.beginFill(0,100),a.moveTo(e,b),a.lineTo(e+1,b),a.lineTo(e+1,b+1),a.lineTo(e,b+1),a.endFill())}}return a},setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(a=8;a<this.moduleCount-8;a++)null==this.modules[6][a]&&
(this.modules[6][a]=0==a%2)},setupPositionAdjustPattern:function(){for(var a=m.getPatternPosition(this.typeNumber),c=0;c<a.length;c++)for(var b=0;b<a.length;b++){var d=a[c],e=a[b];if(null==this.modules[d][e])for(var f=-2;2>=f;f++)for(var g=-2;2>=g;g++)this.modules[d+f][e+g]=-2==f||2==f||-2==g||2==g||0==f&&0==g?!0:!1}},setupTypeNumber:function(a){for(var c=m.getBCHTypeNumber(this.typeNumber),b=0;18>b;b++){var d=!a&&1==(c>>b&1);this.modules[r.floor(b/3)][b%3+this.moduleCount-8-3]=d}for(b=0;18>b;b++)d=
!a&&1==(c>>b&1),this.modules[b%3+this.moduleCount-8-3][r.floor(b/3)]=d},setupTypeInfo:function(a,c){c=m.getBCHTypeInfo(this.errorCorrectLevel<<3|c);for(var b=0;15>b;b++){var d=!a&&1==(c>>b&1);6>b?this.modules[b][8]=d:8>b?this.modules[b+1][8]=d:this.modules[this.moduleCount-15+b][8]=d}for(b=0;15>b;b++)d=!a&&1==(c>>b&1),8>b?this.modules[8][this.moduleCount-b-1]=d:9>b?this.modules[8][15-b-1+1]=d:this.modules[8][15-b-1]=d;this.modules[this.moduleCount-8][8]=!a},mapData:function(a,c){for(var b=-1,d=this.moduleCount-
1,e=7,f=0,g=this.moduleCount-1;0<g;g-=2)for(6==g&&g--;;){for(var I=0;2>I;I++)if(null==this.modules[d][g-I]){var h=!1;f<a.length&&(h=1==(a[f]>>>e&1));m.getMask(c,d,g-I)&&(h=!h);this.modules[d][g-I]=h;e--; -1==e&&(f++,e=7)}d+=b;if(0>d||this.moduleCount<=d){d-=b;b=-b;break}}}};f.PAD0=236;f.PAD1=17;f.createData=function(a,c,b){c=t.getRSBlocks(a,c);for(var d=new w,e=0;e<b.length;e++){var g=b[e];d.put(g.mode,4);d.put(g.getLength(),m.getLengthInBits(g.mode,a));g.write(d)}for(e=a=0;e<c.length;e++)a+=c[e].dataCount;
if(d.getLengthInBits()>8*a)throw Error("code length overflow. ("+d.getLengthInBits()+">"+8*a+")");for(d.getLengthInBits()+4<=8*a&&d.put(0,4);0!=d.getLengthInBits()%8;)d.putBit(!1);for(;!(d.getLengthInBits()>=8*a);){d.put(f.PAD0,8);if(d.getLengthInBits()>=8*a)break;d.put(f.PAD1,8)}return f.createBytes(d,c)};f.createBytes=function(a,c){for(var b=0,d=0,e=0,f=Array(c.length),g=Array(c.length),h=0;h<c.length;h++){var k=c[h].dataCount,l=c[h].totalCount-k;d=r.max(d,k);e=r.max(e,l);f[h]=Array(k);for(var p=
0;p<f[h].length;p++)f[h][p]=255&a.buffer[p+b];b+=k;p=m.getErrorCorrectPolynomial(l);k=(new u(f[h],p.getLength()-1)).mod(p);g[h]=Array(p.getLength()-1);for(p=0;p<g[h].length;p++)l=p+k.getLength()-g[h].length,g[h][p]=0<=l?k.get(l):0}for(p=h=0;p<c.length;p++)h+=c[p].totalCount;a=Array(h);for(p=b=0;p<d;p++)for(h=0;h<c.length;h++)p<f[h].length&&(a[b++]=f[h][p]);for(p=0;p<e;p++)for(h=0;h<c.length;h++)p<g[h].length&&(a[b++]=g[h][p]);return a};for(var g={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},
l={L:1,M:0,Q:3,H:2},m={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,
146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var c=a<<10;0<=m.getBCHDigit(c)-m.getBCHDigit(m.G15);)c^=m.G15<<m.getBCHDigit(c)-m.getBCHDigit(m.G15);return(a<<10|c)^m.G15_MASK},getBCHTypeNumber:function(a){for(var c=a<<12;0<=m.getBCHDigit(c)-m.getBCHDigit(m.G18);)c^=m.G18<<m.getBCHDigit(c)-m.getBCHDigit(m.G18);return a<<12|c},
getBCHDigit:function(a){for(var c=0;0!=a;)c++,a>>>=1;return c},getPatternPosition:function(a){return m.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,c,b){switch(a){case 0:return 0==(c+b)%2;case 1:return 0==c%2;case 2:return 0==b%3;case 3:return 0==(c+b)%3;case 4:return 0==(r.floor(c/2)+r.floor(b/3))%2;case 5:return 0==c*b%2+c*b%3;case 6:return 0==(c*b%2+c*b%3)%2;case 7:return 0==(c*b%3+(c+b)%2)%2;default:throw Error("bad maskPattern:"+a);}},getErrorCorrectPolynomial:function(a){for(var c=new u([1],
0),b=0;b<a;b++)c=c.multiply(new u([1,h.gexp(b)],0));return c},getLengthInBits:function(a,c){if(1<=c&&10>c)switch(a){case g.MODE_NUMBER:return 10;case g.MODE_ALPHA_NUM:return 9;case g.MODE_8BIT_BYTE:return 8;case g.MODE_KANJI:return 8;default:throw Error("mode:"+a);}else if(27>c)switch(a){case g.MODE_NUMBER:return 12;case g.MODE_ALPHA_NUM:return 11;case g.MODE_8BIT_BYTE:return 16;case g.MODE_KANJI:return 10;default:throw Error("mode:"+a);}else if(41>c)switch(a){case g.MODE_NUMBER:return 14;case g.MODE_ALPHA_NUM:return 13;
case g.MODE_8BIT_BYTE:return 16;case g.MODE_KANJI:return 12;default:throw Error("mode:"+a);}else throw Error("type:"+c);},getLostPoint:function(a){for(var c=a.getModuleCount(),b=0,d=0;d<c;d++)for(var e=0;e<c;e++){for(var f=0,g=a.isDark(d,e),h=-1;1>=h;h++)if(!(0>d+h||c<=d+h))for(var k=-1;1>=k;k++)0>e+k||c<=e+k||(0!=h||0!=k)&&g==a.isDark(d+h,e+k)&&f++;5<f&&(b+=3+f-5)}for(d=0;d<c-1;d++)for(e=0;e<c-1;e++)if(f=0,a.isDark(d,e)&&f++,a.isDark(d+1,e)&&f++,a.isDark(d,e+1)&&f++,a.isDark(d+1,e+1)&&f++,0==f||
4==f)b+=3;for(d=0;d<c;d++)for(e=0;e<c-6;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(b+=40);for(e=0;e<c;e++)for(d=0;d<c-6;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+5,e)&&a.isDark(d+6,e)&&(b+=40);for(e=f=0;e<c;e++)for(d=0;d<c;d++)a.isDark(d,e)&&f++;a=r.abs(100*f/c/c-50)/5;return b+10*a}},h={glog:function(a){if(1>a)throw Error("glog("+a+")");return h.LOG_TABLE[a]},
gexp:function(a){for(;0>a;)a+=255;for(;256<=a;)a-=255;return h.EXP_TABLE[a]},EXP_TABLE:Array(256),LOG_TABLE:Array(256)},k=0;8>k;k++)h.EXP_TABLE[k]=1<<k;for(k=8;256>k;k++)h.EXP_TABLE[k]=h.EXP_TABLE[k-4]^h.EXP_TABLE[k-5]^h.EXP_TABLE[k-6]^h.EXP_TABLE[k-8];for(k=0;255>k;k++)h.LOG_TABLE[h.EXP_TABLE[k]]=k;const u=function(a,c){if(void 0==a.length)throw Error(a.length+"/"+c);for(var b=0;b<a.length&&0==a[b];)b++;this.num=Array(a.length-b+c);for(c=0;c<a.length-b;c++)this.num[c]=a[c+b]};u.prototype={get:function(a){return this.num[a]},
getLength:function(){return this.num.length},multiply:function(a){for(var c=Array(this.getLength()+a.getLength()-1),b=0;b<this.getLength();b++)for(var d=0;d<a.getLength();d++)c[b+d]^=h.gexp(h.glog(this.get(b))+h.glog(a.get(d)));return new u(c,0)},mod:function(a){if(0>this.getLength()-a.getLength())return this;for(var c=h.glog(this.get(0))-h.glog(a.get(0)),b=Array(this.getLength()),d=0;d<this.getLength();d++)b[d]=this.get(d);for(d=0;d<a.getLength();d++)b[d]^=h.gexp(h.glog(a.get(d))+c);return(new u(b,
0)).mod(a)}};const t=function(a,c){this.totalCount=a;this.dataCount=c};t.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,
16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,
2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,
75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,
53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,
45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];t.getRSBlocks=function(a,c){var b=t.getRsBlockTable(a,c);if(void 0==b)throw Error("bad rs block @ typeNumber:"+
a+"/errorCorrectLevel:"+c);a=b.length/3;c=[];for(var d=0;d<a;d++)for(var e=b[3*d],f=b[3*d+1],g=b[3*d+2],h=0;h<e;h++)c.push(new t(f,g));return c};t.getRsBlockTable=function(a,c){switch(c){case l.L:return t.RS_BLOCK_TABLE[4*(a-1)];case l.M:return t.RS_BLOCK_TABLE[4*(a-1)+1];case l.Q:return t.RS_BLOCK_TABLE[4*(a-1)+2];case l.H:return t.RS_BLOCK_TABLE[4*(a-1)+3]}};const w=function(){this.buffer=[];this.length=0};w.prototype={get:function(a){var c=r.floor(a/8);return 1==(this.buffer[c]>>>7-a%8&1)},put:function(a,
c){for(var b=0;b<c;b++)this.putBit(1==(a>>>c-b-1&1))},getLengthInBits:function(){return this.length},putBit:function(a){var c=r.floor(this.length/8);this.buffer.length<=c&&this.buffer.push(0);a&&(this.buffer[c]|=128>>>this.length%8);this.length++}};var q=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,
450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],y=function(a,
c){this._bIsPainted=!1;this._htOption=c;this._elCanvas=Q.call(x,"canvas");this._elCanvas.width=c.width;this._elCanvas.height=c.height;G.call(a,this._elCanvas);this._el=a;this._oContext=this._elCanvas.getContext("2d");this._bIsPainted=!1};y.prototype.draw=function(a){var c=this._oContext,b=this._htOption,d=a.getModuleCount(),e=b.width/d,f=b.height/d,g=r.round(e),h=r.round(f);this.clear();for(var k=0;k<d;k++)for(var l=0;l<d;l++){var m=a.isDark(k,l),n=l*e,q=k*f;c.strokeStyle=m?b.colorDark:b.colorLight;
c.lineWidth=1;c.fillStyle=m?b.colorDark:b.colorLight;c.fillRect(n,q,e,f);c.strokeRect(r.floor(n)+.5,r.floor(q)+.5,g,h);c.strokeRect(r.ceil(n)-.5,r.ceil(q)-.5,g,h)}this._bIsPainted=!0};y.prototype.isPainted=function(){return this._bIsPainted};y.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height);this._bIsPainted=!1};y.prototype.round=function(a){return a?r.floor(1E3*a)/1E3:a};H=function(a,c){this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",
colorLight:"#ffffff",correctLevel:l.H};"string"===typeof c&&(c={text:c});if(c)for(var b in c)this._htOption[b]=c[b];this._el=a;this._oQRCode=null;this._oDrawing=new y(this._el,this._htOption);this._htOption.text&&this.makeCode(this._htOption.text)};H.prototype.makeCode=function(a){var c=this._htOption.correctLevel,b=1;var d=encodeURI(a).toString().replace(/%[0-9a-fA-F]{2}/g,"a");d=d.length+(d.length!=a?3:0);for(var e=0,g=q.length;e<=g;e++){var h=0;switch(c){case l.L:h=q[e][0];break;case l.M:h=q[e][1];
break;case l.Q:h=q[e][2];break;case l.H:h=q[e][3]}if(d<=h)break;else b++}if(b>q.length)throw Error("Too long data");this._oQRCode=new f(b,this._htOption.correctLevel);this._oQRCode.addData(a);this._oQRCode.make();this._el.title="Contribute via your mobile phone.\nScan this QR code with your phone.";this._oDrawing.draw(this._oQRCode)};H.prototype.clear=function(){this._oDrawing.clear()};H.CorrectLevel=l};0!==ca.call(top.location.href,X.call(A,"ctrb4788.html"))&&(top.location.href=X.call(A,"ctrb4788.html"));
B.call(e,"DOMContentLoaded",()=>{xa();S(()=>{x.title=" Support Click&Clean Development"},300)},!0)})();