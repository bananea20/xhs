!function(){if(document instanceof HTMLDocument){document.addEventListener("click",function(t){if(2!==t.button){for(var e=t.target;e&&!(e instanceof HTMLAnchorElement);)e=e.parentNode;if(e){if("http:"===e.protocol||"https:"===e.protocol){if("subscribe.adblockplus.org"!==e.host||"/"!==e.pathname)return}else if(!/^abp:\/*subscribe\/*\?/i.test(e.href))return;var n;if(t.preventDefault(),t.stopPropagation(),e.search)n=e.search.substring(1).split("&");else{var r=e.href,i=r.indexOf("?");n=r.substring(i+1).split("&")}var o=function(t){for(var e=null,n=null,r=0;r<t.length;r++){var i=t[r].split("=",2);if(2===i.length)switch(i[0]){case"title":e=decodeURIComponent(i[1]);break;case"location":n=decodeURIComponent(i[1])}}return{title:e,url:n}}(n),l=o.url,a=o.title||l;l&&(!function(t){return!!confirm("你确定需要添加"+t+"订阅组？")}(a.trim())||contentPage.sendMessage({type:"addfilterUrl1",url:l.trim(),title:a.trim()},function(t){t.filterId?alert("订阅组添加成功！"):alert(t)}))}}})}}();