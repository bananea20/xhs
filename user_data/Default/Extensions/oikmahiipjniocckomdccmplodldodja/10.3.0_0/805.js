"use strict";(self.webpackChunkbrowser_extension=self.webpackChunkbrowser_extension||[]).push([[805],{46218:(t,e,r)=>{r.d(e,{Z:()=>l});var n=r(24649);const o=function(){this.__data__=new n.Z,this.size=0};const i=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r};const a=function(t){return this.__data__.get(t)};const c=function(t){return this.__data__.has(t)};var u=r(38896),s=r(43703);const f=function(t,e){var r=this.__data__;if(r instanceof n.Z){var o=r.__data__;if(!u.Z||o.length<199)return o.push([t,e]),this.size=++r.size,this;r=this.__data__=new s.Z(o)}return r.set(t,e),this.size=r.size,this};function v(t){var e=this.__data__=new n.Z(t);this.size=e.size}v.prototype.clear=o,v.prototype.delete=i,v.prototype.get=a,v.prototype.has=c,v.prototype.set=f;const l=v},88282:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r(93221).Z.Uint8Array},69395:(t,e,r)=>{r.d(e,{Z:()=>n});const n=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}},52938:(t,e,r)=>{r.d(e,{Z:()=>i});var n=r(95810),o=r(97885);const i=function(t,e,r){var i=e(t);return(0,o.Z)(t)?i:(0,n.Z)(i,r(t))}},61016:(t,e,r)=>{r.d(e,{Z:()=>T});var n=r(46218),o=r(96806),i=r(69395),a=r(11749);const c=function(t,e,r,n,c,u){var s=1&r,f=t.length,v=e.length;if(f!=v&&!(s&&v>f))return!1;var l=u.get(t),Z=u.get(e);if(l&&Z)return l==e&&Z==t;var d=-1,h=!0,_=2&r?new o.Z:void 0;for(u.set(t,e),u.set(e,t);++d<f;){var p=t[d],b=e[d];if(n)var y=s?n(b,p,d,e,t,u):n(p,b,d,t,e,u);if(void 0!==y){if(y)continue;h=!1;break}if(_){if(!(0,i.Z)(e,(function(t,e){if(!(0,a.Z)(_,e)&&(p===t||c(p,t,r,n,u)))return _.push(e)}))){h=!1;break}}else if(p!==b&&!c(p,b,r,n,u)){h=!1;break}}return u.delete(t),u.delete(e),h};var u=r(187),s=r(88282),f=r(78804);const v=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r};const l=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r};var Z=u.Z?u.Z.prototype:void 0,d=Z?Z.valueOf:void 0;const h=function(t,e,r,n,o,i,a){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!i(new s.Z(t),new s.Z(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return(0,f.Z)(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var u=v;case"[object Set]":var Z=1&n;if(u||(u=l),t.size!=e.size&&!Z)return!1;var h=a.get(t);if(h)return h==e;n|=2,a.set(t,e);var _=c(u(t),u(e),n,o,i,a);return a.delete(t),_;case"[object Symbol]":if(d)return d.call(t)==d.call(e)}return!1};var _=r(37245),p=Object.prototype.hasOwnProperty;const b=function(t,e,r,n,o,i){var a=1&r,c=(0,_.Z)(t),u=c.length;if(u!=(0,_.Z)(e).length&&!a)return!1;for(var s=u;s--;){var f=c[s];if(!(a?f in e:p.call(e,f)))return!1}var v=i.get(t),l=i.get(e);if(v&&l)return v==e&&l==t;var Z=!0;i.set(t,e),i.set(e,t);for(var d=a;++s<u;){var h=t[f=c[s]],b=e[f];if(n)var y=a?n(b,h,f,e,t,i):n(h,b,f,t,e,i);if(!(void 0===y?h===b||o(h,b,r,n,i):y)){Z=!1;break}d||(d="constructor"==f)}if(Z&&!d){var g=t.constructor,w=e.constructor;g==w||!("constructor"in t)||!("constructor"in e)||"function"==typeof g&&g instanceof g&&"function"==typeof w&&w instanceof w||(Z=!1)}return i.delete(t),i.delete(e),Z};var y=r(68649),g=r(97885),w=r(74975),j=r(98127),m="[object Arguments]",z="[object Array]",O="[object Object]",k=Object.prototype.hasOwnProperty;const x=function(t,e,r,o,i,a){var u=(0,g.Z)(t),s=(0,g.Z)(e),f=u?z:(0,y.Z)(t),v=s?z:(0,y.Z)(e),l=(f=f==m?O:f)==O,Z=(v=v==m?O:v)==O,d=f==v;if(d&&(0,w.Z)(t)){if(!(0,w.Z)(e))return!1;u=!0,l=!1}if(d&&!l)return a||(a=new n.Z),u||(0,j.Z)(t)?c(t,e,r,o,i,a):h(t,e,f,r,o,i,a);if(!(1&r)){var _=l&&k.call(t,"__wrapped__"),p=Z&&k.call(e,"__wrapped__");if(_||p){var x=_?t.value():t,E=p?e.value():e;return a||(a=new n.Z),i(x,E,r,o,a)}}return!!d&&(a||(a=new n.Z),b(t,e,r,o,i,a))};var E=r(43391);const T=function t(e,r,n,o,i){return e===r||(null==e||null==r||!(0,E.Z)(e)&&!(0,E.Z)(r)?e!=e&&r!=r:x(e,r,n,o,t,i))}},37245:(t,e,r)=>{r.d(e,{Z:()=>a});var n=r(52938),o=r(46808),i=r(20649);const a=function(t){return(0,n.Z)(t,i.Z,o.Z)}},46808:(t,e,r)=>{r.d(e,{Z:()=>c});const n=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var a=t[r];e(a,r,t)&&(i[o++]=a)}return i};var o=r(70813),i=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols;const c=a?function(t){return null==t?[]:(t=Object(t),n(a(t),(function(e){return i.call(t,e)})))}:o.Z},13474:(t,e,r)=>{r.d(e,{Z:()=>s});var n=r(93122),o=r(93221);const i=function(){return o.Z.Date.now()};var a=r(65386),c=Math.max,u=Math.min;const s=function(t,e,r){var o,s,f,v,l,Z,d=0,h=!1,_=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function b(e){var r=o,n=s;return o=s=void 0,d=e,v=t.apply(n,r)}function y(t){var r=t-Z;return void 0===Z||r>=e||r<0||_&&t-d>=f}function g(){var t=i();if(y(t))return w(t);l=setTimeout(g,function(t){var r=e-(t-Z);return _?u(r,f-(t-d)):r}(t))}function w(t){return l=void 0,p&&o?b(t):(o=s=void 0,v)}function j(){var t=i(),r=y(t);if(o=arguments,s=this,Z=t,r){if(void 0===l)return function(t){return d=t,l=setTimeout(g,e),h?b(t):v}(Z);if(_)return clearTimeout(l),l=setTimeout(g,e),b(Z)}return void 0===l&&(l=setTimeout(g,e)),v}return e=(0,a.Z)(e)||0,(0,n.Z)(r)&&(h=!!r.leading,f=(_="maxWait"in r)?c((0,a.Z)(r.maxWait)||0,e):f,p="trailing"in r?!!r.trailing:p),j.cancel=function(){void 0!==l&&clearTimeout(l),d=0,o=Z=s=l=void 0},j.flush=function(){return void 0===l?v:w(i())},j}},70813:(t,e,r)=>{r.d(e,{Z:()=>n});const n=function(){return[]}}}]);