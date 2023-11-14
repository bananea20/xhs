var YiclearSelectorLib=function(e,i){function o(e){i("."+e).removeClass(e)}function n(e){var t=i(e);t.hasClass(k)?(t.removeClass(k),D.splice(i.inArray(e,D),1)):t.hasClass(P)?(t.removeClass(P),A.splice(i.inArray(e,A),1)):t.hasClass(_)?(t.addClass(P),A.push(e)):(0<D.length&&(o(k),D=[]),D.push(e));var n=w.predictCss(D,A.concat(N));return n}function a(e){return e+"px"}function s(e){var t=document.createElement("div"),n=window.getComputedStyle(e);t.style.height=n.height,t.style.width=n.width,t.style.position=n.position,t.style.top=n.top,t.style.bottom=n.bottom,t.style.left=n.left,t.style.right=n.right,t.className+=E+" "+S;var o=document.createElement("div");o.className+=E+"-icon "+S;var r=document.createElement("div");return r.textContent=function(e){return e?(j.href=e,j.hostname):""}(e.src),r.className+=E+"-domain "+S,o.appendChild(r),t.appendChild(o),t}function t(){if(L){for(var e=L,t=0;t<e.length;t++){var n=e[t],o=i("#"+(E+t)).get(0);if(o){var r=o.parentNode;r&&r.replaceChild(n,o)}}L=null}}function d(e){m.remove(),t(),H(e)}function r(e){if(e.stopPropagation(),R)return!0;if(this==document.body||this==document.body.parentNode)return!1;var t=function(e){if(i(e).hasClass(_)||i(e).hasClass(k))return e;for(;e.parentNode&&(e=e.parentNode);)if(-1==N.indexOf(e)&&(i(e).hasClass(_)||i(e).hasClass(k)))return e;return null}(this);return null!=t&&t!=this?m.add(t):m.add(this),!1}function c(){return!!R||(this==document.body||this==document.body.parentNode||m.remove(),!1)}function l(e){return e.stopPropagation(),!!z()||(function(e){e.preventDefault(),e.stopImmediatePropagation(),r.call(this,e),O.call(this,e)}.call(this,e),!1)}function u(e){return e.stopPropagation(),!1}function h(){!function(){for(var e=L=i("iframe:not(."+S+"),embed,object").filter(function(e){var t="none"!=e.style.display,n=0!=e.offsetWidth&&0!=e.offsetHeight;return t&&n}),r=0;r<e.length;r++){!function(t){var e=s(t),n=E+r;e.setAttribute("id",n);var o=t.parentNode;o&&(o.replaceChild(e,t),x?(i(e).on("gestureend",I),i(e).on("touchmove",Y),i(e).on("touchend",function(e){if(e.preventDefault(),z())return!0;d(t)})):i("#"+n).on("click",function(e){e.preventDefault(),d(t)}))}(e[r])}}();var e=i("body *:not(."+S+")");x?e.forEach(function(e){e.addEventListener("gestureend",I),e.addEventListener("touchmove",Y),e.addEventListener("touchend",l,!0),e.addEventListener("touchstart",u)}):e.forEach(function(e){e.addEventListener("mouseover",r),e.addEventListener("mouseout",c),e.addEventListener("click",O,!0)})}function f(){t();var e=i("body *");x?e.forEach(function(e){e.removeEventListener("gestureend",I),e.removeEventListener("touchmove",Y),e.removeEventListener("touchend",l,!0),e.removeEventListener("touchstart",u)}):e.forEach(function(e){e.removeEventListener("mouseover",r),e.removeEventListener("mouseout",c),e.removeEventListener("click",O,!0)})}var m,v,g,p,C,y,b,E="yiclear-placeholder",L=null,N=null,w=null,_="sg_suggested",k="sg_selected",P="sg_rejected",S="sg_ignore",D=[],A=[],R=!0,H=null,x="iPad"===navigator.platform||"iPhone"===navigator.platform||"Android"===navigator.platform,B=0,W=(g="sg_border",b=y=C=p=null,(v=W||{}).init=function(){if(!p){var e=a(5);p=i("<div/>").addClass(g).css("height",e).hide().on("click",O),b=i("<div/>").addClass(g).addClass("sg_bottom_border").css("height",a(11)).hide().on("click",O),C=i("<div/>").addClass(g).css("width",e).hide().on("click",O),y=i("<div/>").addClass(g).css("width",e).hide().on("click",O),document.body.appendChild(p.get(0)),document.body.appendChild(b.get(0)),document.body.appendChild(C.get(0)),document.body.appendChild(y.get(0))}},v.finalize=function(){!function(){if(p&&p.get(0)){var e=p.get(0).parentNode;e&&(e.removeChild(p.get(0)),e.removeChild(b.get(0)),e.removeChild(C.get(0)),e.removeChild(y.get(0)))}p=b=y=C=null}()},v.add=function(e){if(v.remove(),e){var t=function(e){var t=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{top:n.top-t.top,left:n.left-t.left,outerWidth:e.offsetWidth,outerHeight:e.offsetHeight}}(e),n=t.top,o=t.left,r=t.outerWidth,i=t.outerHeight;null!=p&&(p.css("width",a(r+4+10)).css("top",a(n-5-2)).css("left",a(o-2-5)),b.css("width",a(r+4+5)).css("top",a(n+i+2)).css("left",a(o-2-5)),C.css("height",a(i+4)).css("top",a(n-2)).css("left",a(o-2-5)),y.css("height",a(i+4)).css("top",a(n-2)).css("left",a(o+r+2)),b.get(0).textContent=function(e){return e.parentNode?e.parentNode.tagName.toLowerCase()+" "+e.tagName.toLowerCase():e.tagName.toLowerCase()}(e),y.get(0).target_elem=C.get(0).target_elem=p.get(0).target_elem=b.get(0).target_elem=e,p&&b&&C&&y&&(p.show(),b.show(),C.show(),y.show()))}},v.remove=function(){p&&b&&C&&y&&(p.hide(),b.hide(),C.hide(),y.hide())},v.BORDER_CLASS=g,v),j=document.createElement("a"),O=function(e){if(i(e.target).hasClass(S))return!1;if(e.preventDefault(),e.stopImmediatePropagation(),R)return!0;var t=e.target;return i(t).hasClass(m.BORDER_CLASS)&&(t=t.target_elem||t),t!=document.body&&t!=document.body.parentNode?(n(t),m.remove(),H(t),!1):void 0},z=function(){return 0<B&&(B--,!0)},I=function(){return B=2,!0},Y=function(){return B=1,!0};return m=W,e.init=function(e,t){H=e,t&&"object"==typeof t&&(m=t),N=["html","body","head","base"].map(function(e){return i(e).get(0)}),w=new DomPredictionHelper(i,String),m.init(),h(),R=!1},e.reset=function(){D=[],A=[],o(k),o(P),m.remove(),o(_)},e.close=function(){R=!0,m.finalize(),f()},e.selectElement=function(e){f(),m.add(e),R=!0},e.ignoreClassName=function(){return S},e}(YiclearSelectorLib||{},balalaika);