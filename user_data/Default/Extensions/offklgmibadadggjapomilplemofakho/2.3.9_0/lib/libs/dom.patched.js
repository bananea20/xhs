function DomPredictionHelper(){}!function(e){if(e.CSS&&e.CSS.escape)return e.CSS.escape;e.CSS={escape:function(e){if(0===arguments.length)throw new TypeError("`CSS.escape` requires an argument.");for(var t,r=String(e),o=r.length,n=-1,i="",s=r.charCodeAt(0);++n<o;)0!==(t=r.charCodeAt(n))?i+=1<=t&&t<=31||127===t||0===n&&48<=t&&t<=57||1===n&&48<=t&&t<=57&&45===s?"\\"+t.toString(16)+" ":(0!==n||1!==o||45!==t)&&(128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122)?r.charAt(n):"\\"+r.charAt(n):i+="�";return i}}}(this),DomPredictionHelper.prototype=new Object,DomPredictionHelper.prototype.recursiveNodes=function(e){var t;return(t=e.nodeName&&e.parentNode&&e!=document.body?this.recursiveNodes(e.parentNode):new Array).push(e),t},DomPredictionHelper.prototype.escapeCssNames=function(t){if(!t)return"";try{return t.replace(/\s*sg_\w+\s*/g,"").replace(/\\/g,"\\\\").replace(/\./g,"\\.").replace(/#/g,"\\#").replace(/\>/g,"\\>").replace(/\,/g,"\\,").replace(/\:/g,"\\:")}catch(e){return console.log("---"),console.log("exception in escapeCssNames"),console.log(t),console.log("---"),""}},DomPredictionHelper.prototype.childElemNumber=function(e){for(var t=0;e.previousSibling&&(e=e.previousSibling);)1==e.nodeType&&t++;return t},DomPredictionHelper.prototype.pathOf=function(e){for(var t=this.recursiveNodes(e),r="",o=0;o<t.length;o++){var n=t[o];if(n){r+=n.nodeName.toLowerCase();var i=n.id&&CSS.escape(String(n.id));if(i&&0<i.length&&(r+="#"+i),n.classList)for(var s=0;s<n.classList.length;s++)i=CSS.escape(n.classList[s]),n.classList[s]&&0<i.length&&(r+="."+i);r+=":nth-child("+(this.childElemNumber(n)+1)+")",r+=" "}}return" "==r.charAt(r.length-1)&&(r=r.substring(0,r.length-1)),r},DomPredictionHelper.prototype.commonCss=function(e){try{var r=new diff_match_patch}catch(e){throw"Please include the diff_match_patch library."}if(void 0===e||0==e.length)return"";var t={},o=this.encodeCssForDiff(e,t),n=o.pop();return o.forEach(function(e){var t=r.diff_main(n,e);n="",t.forEach(function(e){0==e[0]&&(n+=e[1])})}),this.decodeCss(n,t)},DomPredictionHelper.prototype.tokenizeCss=function(e){for(var t=!1,r="",o=[],n=(e=e.replace(/,/," , ").replace(/\s+/g," ")).length,i="",s=0;s<n;s++)i=e[s],t?t=!1:"\\"==i?t=!0:"."!=i&&" "!=i&&"#"!=i&&">"!=i&&":"!=i&&","!=i||(0<r.length&&o.push(r),r=""),r+=i," "!=i&&","!=i||(o.push(r),r="");return 0<r.length&&o.push(r),o},DomPredictionHelper.prototype.decodeCss=function(e,t){for(var r=this.invertObject(t),o="",n=e.split(""),i=0;i<n.length;i++)o+=r[n[i]];return this.cleanCss(o)},DomPredictionHelper.prototype.encodeCssForDiff=function(e,t){for(var r=50,o=[],n=0;n<e.length;n++){for(var i=new String,s=this.tokenizeCss(e[n]),l=0;l<s.length;l++){var c=s[l];t[c]||(t[c]=String.fromCharCode(r++)),i+=t[c]}o.push(i)}return o},DomPredictionHelper.prototype.simplifyCss=function(e,t,r){var o=this,n=o.tokenizeCss(e),i="";o.selectorGets("all",t,e)&&o.selectorGets("none",r,e)&&(i=e);for(var s=0;s<4;s++)for(var l=0;l<n.length;l++){var c=n[l].substring(0,1);if(!o.wouldLeaveFreeFloatingNthChild(n,l)&&(0==s&&":"==c||1==s&&":"!=c&&"."!=c&&"#"!=c&&" "!=c||2==s&&"."==c||3==s&&"#"==c)){var a=n[l];n[l]="";var p=o.cleanCss(n.join(""));if(""==p){n[l]=a;continue}o.selectorGets("all",t,p)&&o.selectorGets("none",r,p)?i=p:n[l]=a}}return o.cleanCss(i)},DomPredictionHelper.prototype.wouldLeaveFreeFloatingNthChild=function(e,t){return 0<=t-1&&":"==e[t-1].substring(0,1)&&(t-2<0||" "==e[t-2])&&(t+1>=e.length||" "==e[t+1])||t+1<e.length&&":"==e[t+1].substring(0,1)&&(t+2>=e.length||" "==e[t+2])&&(t-1<0||" "==e[t-1])},DomPredictionHelper.prototype.cleanCss=function(e){return e.replace(/\>/," > ").replace(/,/," , ").replace(/\s+/g," ").replace(/^\s+|\s+$/g,"").replace(/,$/,"")},DomPredictionHelper.prototype.getPathsFor=function(e){for(var t=[],r=0;r<e.length;r++){var o=e[r];o&&o.nodeName&&t.push(this.pathOf(o))}return t},DomPredictionHelper.prototype.predictCss=function(e,t){var r=this;if(0==e.length)return"";var o=r.getPathsFor(e),n=r.getPathsFor(t),i=r.commonCss(o),s=r.simplifyCss(i,o,n);if(0<s.length)return s;for(var l="",c=0;c<e.length;c++)l=r.pathOf(e[c])+", "+l;return l=r.cleanCss(l),r.simplifyCss(l,o,n)},DomPredictionHelper.prototype.fragmentSelector=function(e){for(var t=[],r=e.split(/\,/),o=0;o<r.length;o++){for(var n=[],i=this.cleanCss(r[o]).split(/\s+/),s=0;s<i.length;s++)n.push(this.tokenizeCss(i[s]));t.push(n)}return t},DomPredictionHelper.prototype.selectorBlockMatchesSelectorBlock=function(e,t){for(var r=0;r<e.length;r++)if(-1==t.indexOf(e[r]))return!1;return!0},DomPredictionHelper.prototype.selectorGets=function(e,t,r){var o=!0;if(0==t.length&&"all"==e)return!1;if(0==t.length&&"none"==e)return!0;for(var n=this.fragmentSelector(r),i=[],s=0;s<t.length;s++)i.push(this.fragmentSelector(t[s])[0]);for(var l=0;l<n.length;l++){if(!o)return;for(var c=n[l],a=0;a<i.length;a++){if(!o||""==i[a])return;this._selectorGets(i[a],c)&&("none"==e&&(o=!1),i[a]="")}}return"all"==e&&0<i.join("").length&&(o=!1),o},DomPredictionHelper.prototype._selectorGets=function(e,t){for(var r=!1,o=e.length-1,n=t.length-1;-1<n&&!r;n--)if(n==t.length-1)this.selectorBlockMatchesSelectorBlock(t[n],e[o])||(r=!0),o--;else{for(var i=!1;-1<o&&!i;)i=this.selectorBlockMatchesSelectorBlock(t[n],e[o]),o--;i||(r=!0)}return!r},DomPredictionHelper.prototype.invertObject=function(e){var t={};for(var r in e){t[e[r]]=r}return t},DomPredictionHelper.prototype.cssToXPath=function(e){var t=this.tokenizeCss(e);t[0]&&" "==t[0]&&t.splice(0,1),t[t.length-1]&&" "==t[t.length-1]&&t.splice(t.length-1,1);for(var r=[],o="",n=0;n<t.length;n++)" "==t[n]?(o+=this.cssToXPathBlockHelper(r),r=[]):r.push(t[n]);return o+this.cssToXPathBlockHelper(r)},DomPredictionHelper.prototype.cssToXPathBlockHelper=function(e){if(0==e.length)return"//";var t="//",r=e[0].substring(0,1);if(","==r)return" | ";":"!=r&&"#"!=r&&"."!=r||(t+="*");for(var o=[],n=null,i=0;i<e.length;i++){var s=e[i];r=s.substring(0,1);var l=s.substring(1);":"==r?(n=l.match(/^nth-child\((\d+)\)$/))&&o.push("(((count(preceding-sibling::*) + 1) = "+n[1]+") and parent::*)"):"."==r?o.push('contains(concat( " ", @class, " " ), concat( " ", "'+l+'", " " ))'):"#"==r?o.push('(@id = "'+l+'")'):","==r||(t+=s)}0<o.length&&(t+="[");for(i=0;i<o.length;i++)t+=o[i],i<o.length-1&&(t+=" and ");return 0<o.length&&(t+="]"),t};