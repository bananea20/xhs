$(document).ready(function(){var e,a=document.location.hash;"#rules.txt"===a?e="getUserFilters":"#whitelist.txt"===a?e="getWhiteListDomains":"#config.txt"===a?e="getConfigs":"#pass.txt"===a&&(e="getUserAutoRules"),contentPage.sendMessage({type:e},function(e){var t=e.rules;if(t&&0!=t.length){var n,o=$("<pre/>");n="#config.txt"==a?t:t?t.join("\r\n"):"",o.text(n),$("body").append(o),showSaveFunc&&showSaveFunc(n,a,"text/plain;charset=utf-8")}})});var showSaveFunc=function(){var e,w="download"in document.createElement("a"),s=window.Blob||window.WebKitBlob||window.MozBlob,r=window.URL||window.webkitURL||window.mozURL;return navigator.saveBlob=navigator.saveBlob||navigator.mozSaveBlob||navigator.webkitSaveBlob,window.saveAs=window.saveAs||window.webkitSaveAs||window.mozSaveAs||window.msSaveAs,s&&navigator.saveBlob?e=function(e,t,n){var o=new s([e],{type:n});window.saveAs?window.saveAs(o,t):navigator.saveBlob(o,t)}:s&&r&&(e=function(e,t,n){var o,a;if(w){o=new s([e],{type:n}),a=r.createObjectURL(o);var i=document.createElement("a");i.setAttribute("href",a),i.setAttribute("download",t||"Download.bin"),$("body").append(i),$(i).get(0).click()}else o=new s([e],{type:n}),a=r.createObjectURL(o),window.open(a,"_blank","");setTimeout(function(){r.revokeObjectURL(a)},250)}),e}();