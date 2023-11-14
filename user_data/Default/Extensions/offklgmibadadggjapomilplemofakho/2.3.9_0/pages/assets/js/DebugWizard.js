"use strict";var RequestWizard=function(){function R(e){$(document.body).append(e),e.show(),e.modal(),e.on("hidden.bs.modal",function(){$(this).remove()}),t=e}function v(){t&&(t.modal("hide"),t=null)}var c,i,s={OPTIONS_USERFILTER:i18n.getMessage("options_userfilter"),OPTIONS_WHITELIST:i18n.getMessage("options_whitelist"),IN_WHITELIST:i18n.getMessage("filtering_log_in_whitelist")},T={startWith:function(e,t){return e&&0===e.indexOf(t)},containsIgnoreCase:function(e,t){return e&&t&&0<=e.toUpperCase().indexOf(t.toUpperCase())},substringAfter:function(e,t){if(!e)return e;var r=e.indexOf(t);return r<0?"":e.substring(r+t.length)},substringBefore:function(e,t){if(!e||!t)return e;var r=e.indexOf(t);return r<0?e:e.substring(0,r)}},m=function(e){var t=e.indexOf("//");return 0<=t?e.substring(0,t):0<=(t=e.indexOf(":"))?e.substring(0,t):""},g=function(e){var t=e.indexOf("//");return 0<=t?e=e.substring(t+2):0<=(t=e.indexOf(":"))&&(e=e.substring(t+1)),T.startWith(e,"www.")?e.substring(4):e},I=function(e){return-1!==e.indexOf("//")},E="@@",q="||",x="*",b="^",l="domain",o="important",d="match-case",f="third-party",h="$",S="csp",p=null,a=null,u=null,t=null,w=Array.isArray||function(e){return""+e=="[object Array]"},O=function(e,t){var r=a.clone(),n=RequestWizard.splitToPatterns(t,!1).reverse();D(e,r,n,t)},C=function(e,t){var r=u.clone(),n=RequestWizard.splitToPatterns(t,!0).reverse();D(e,r,n,t)},D=function(r,e,t,o){for(var d=o.frameDomain,n=o.requestThirdParty,a=e.find("#rulePatterns"),i=0;i<t.length;i++){var s=$("<div>",{class:"radio radio-patterns"}),u=$("<input>",{class:"radio-input",type:"radio",name:"rulePattern",id:"pattern"+i,value:t[i]}),l=$("<label>",{class:"radio-label",for:"pattern"+i}).append($("<span>",{class:"radio-icon"})).append($("<span>",{class:"radio-label-text",text:t[i]}));s.append(u),s.append(l),a.append(s),0===i&&u.attr("checked","checked")}var c=e.find('[name="rulePattern"]'),f=e.find('[name="ruleDomain"]'),h=e.find('[name="ruleImportant"]'),p=e.find('[name="ruleMatchCase"]'),T=e.find('[name="ruleThirdParty"]'),m=e.find('[name="ruleText"]');function g(){var e=c.filter(":checked").val(),t=!f.is(":checked"),r=h.is(":checked"),n=p.is(":checked"),a=T.is(":checked"),i=t?d:null,s=null,u=o.requestRule;u&&u.cspRule&&(s=[S]);var l=RequestWizard.createRuleFromParams(e,i,n,a,r,s);m.val(l)}f.attr("id","ruleDomain"),f.parent().find("label").attr("for","ruleDomain"),d||f.closest(".checkbox").hide(),h.attr("id","ruleImportant"),h.parent().find("label").attr("for","ruleImportant"),p.attr("id","ruleMatchCase"),p.parent().find("label").attr("for","ruleMatchCase"),T.attr("id","ruleThirdParty"),T.parent().find("label").attr("for","ruleThirdParty"),n&&T.attr("checked","checked"),f.on("change",g),h.on("change",g),p.on("change",g),T.on("change",g),c.on("change",g),e.find("#createRule").on("click",function(e){e.preventDefault();var t=m.val();t&&(contentPage.sendMessage({type:"addUserRule",ruleText:t,adguardDetected:r.adguardDetected}),v())}.bind(this)),g(),R(e)};return{requestInfoTemplate:p,createBlockRuleTemplate:a,createExceptionRuleTemplate:u,PATTERNS_COUNT:2,Init:function(e,t){c=e,i=t,p=$("#modal-request-info"),a=$("#modal-create-block-rule"),u=$("#modal-create-exception-rule")},getFilterName:function(t){if(w(t)){var e=[];for(var r in t)for(var n in i)t[r]===i[n].filterId&&e.push(i[n].title||i[n].name);return e}if(t===c.USER_FILTER_ID)return s.OPTIONS_USERFILTER;if(t===c.WHITE_LIST_FILTER_ID)return s.OPTIONS_WHITELIST;var a=i.filter(function(e){return e.filterId===t})[0];return a.title=a.title||a.name,a?a.title:""},showModal:R,closeModal:v,showRequestInfoModal:function(t,r){var e=p.clone(),n=r.requestRule;if(e.find('[attr-text="requestUrl"]').text(r.requestUrl),e.find('[attr-text="requestType"]').text(RequestWizard.getRequestType(r.requestType)),e.find('[attr-text="frameDomain"]').text(RequestWizard.getSource(r.frameDomain)),r.frameDomain&&null!=r.frameDomain||e.find('[attr-text="frameDomain"]').closest(".adg-modal-window-locking-info-left-row").hide(),n){n.filterId!==c.WHITE_LIST_FILTER_ID?e.find('[attr-text="requestRule"]').text(n.ruleText):e.find('[attr-text="requestRule"]').closest(".adg-modal-window-locking-info-left-row").hide();var a=RequestWizard.getFilterName(n.filterId);w(a)?e.find('[attr-text="requestRuleFilter"]').html(a.join("<br>")):e.find('[attr-text="requestRuleFilter"]').text(a)}else e.find('[attr-text="requestRule"]').closest(".adg-modal-window-locking-info-left-row").hide(),e.find('[attr-text="requestRuleFilter"]').closest(".adg-modal-window-locking-info-left-row").hide();if("IMAGE"===r.requestType){e.removeClass("compact-view");var i=e.find('[attr-src="requestUrl"]'),s=new Image;s.src=r.requestUrl,s.onload=function(){var e=this.width,t=this.height;1<e&&1<t&&(i.attr("src",r.requestUrl),i.parent().show())}}e.find("#openRequestNewTab").on("click",function(e){e.preventDefault(),contentPage.sendMessage({type:"openTab",url:r.requestUrl,options:{inNewWindow:!0}})});var u=e.find("#blockRequest"),l=e.find("#unblockRequest"),o=e.find("#removeWhiteListDomain"),d=e.find("#removeUserFilterRule");u.on("click",function(e){e.preventDefault(),v(),O(t,r)}.bind(this)),l.on("click",function(e){e.preventDefault(),v(),C(t,r)}.bind(this)),o.on("click",function(e){e.preventDefault(),contentPage.sendMessage({type:"unWhiteListFrame",frameInfo:t}),v()}.bind(this)),d.on("click",function(e){e.preventDefault(),contentPage.sendMessage({type:"removeUserFilter",text:n.ruleText}),v()}.bind(this)),n?n.filterId===c.USER_FILTER_ID?d.removeClass("hidden"):n.filterId===c.WHITE_LIST_FILTER_ID?o.removeClass("hidden"):n.whiteListRule||l.removeClass("hidden"):u.removeClass("hidden"),R(e)},showCreateBlockRuleModal:O,showCreateExceptionRuleModal:C,splitToPatterns:function(e,t){var r,n=e.requestUrl,a=e.requestDomain,i=I(n),s=m(n);r=i?q:s+":",t&&(r=E+r);var u=[],l=T.substringAfter(n,a+"/"),o=T.substringBefore(l,"?");if(o){for(var d=o.split("/"),c=a+"/",f=0;f<Math.min(d.length-1,RequestWizard.PATTERNS_COUNT);f++)c+=d[f]+"/",u.push(r+c+x);var h=d[d.length-1];h&&u.length<RequestWizard.PATTERNS_COUNT&&(c+=h,u.push(r+c))}u.unshift(r+a+b);var p=g(n);return a+"/"!==p&&u.indexOf(r+p)<0&&u.push(r+p),u},createRuleFromParams:function(e,t,r,n,a,i){var s=e,u=[];return t&&u.push(l+"="+t),a&&u.push(o),r&&u.push(d),n&&u.push(f),i&&(u=u.concat(i)),0<u.length&&(s+=h+u.join(",")),s},getRequestType:function(e){switch(e){case"DOCUMENT":case"SUBDOCUMENT":return"HTML";case"STYLESHEET":return"CSS";case"SCRIPT":return"JavaScript";case"XMLHTTPREQUEST":return"Ajax";case"IMAGE":return"Image";case"OBJECT":case"OBJECT-SUBREQUEST":case"MEDIA":return"Media";case"FONT":return"Font";case"WEBSOCKET":return"WebSocket";case"WEBRTC":return"WebRTC";case"CSP":return"CSP";case"OTHER":return"Other"}return""},getSource:function(e){return e||""},StringUtils:T}}();