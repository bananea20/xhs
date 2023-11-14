!function(i){function r(e,t){return e&&0===e.indexOf(t)}function n(e,t,r){return e?e.split(t).join(r):e}var s,a;i.RequestTypes={DOCUMENT:"DOCUMENT",SUBDOCUMENT:"SUBDOCUMENT",SCRIPT:"SCRIPT",STYLESHEET:"STYLESHEET",OBJECT:"OBJECT",IMAGE:"IMAGE",XMLHTTPREQUEST:"XMLHTTPREQUEST",OBJECT_SUBREQUEST:"OBJECT-SUBREQUEST",MEDIA:"MEDIA",FONT:"FONT",OTHER:"OTHER",WEBRTC:"WEBRTC",WEBSOCKET:"WEBSOCKET",CSP:"CSP",POPUP:"POPUP",COOKIE:"COOKIE",isVisual:function(e){return e==this.DOCUMENT||e==this.SUBDOCUMENT||e==this.OBJECT||e==this.IMAGE}},i.LogEvents={TAB_ADDED:"log.tab.added",TAB_CLOSE:"log.tab.close",TAB_UPDATE:"log.tab.update",TAB_RESET:"log.tab.reset",EVENT_ADDED:"log.event.added",EVENT_UPDATE:"log.event.update"},i.EventNotifierTypes={ADD_RULE:"event.add.rule",ADD_RULES:"event.add.rules",REMOVE_RULE:"event.remove.rule",UPDATE_FILTER_RULES:"event.update.filter.rules",DISABLE_FILTER:"event.disable.filter",ENABLE_FILTER:"event.enable.filter",ADD_FILTER:"event.add.filter",MODIFY_FILTER:"event.modify.filter",REMOVE_FILTER:"event.remove.filter",ADS_BLOCKED:"event.ads.blocked",ENABLE_FILTERING:"event.enable.filtering",DISABLE_FILTERING:"event.disable.filtering",START_DOWNLOAD_FILTER:"event.start.download.filter",SUCCESS_DOWNLOAD_FILTER:"event.success.download.filter",ERROR_DOWNLOAD_FILTER:"event.error.download.filter",ENABLE_FILTER_SHOW_POPUP:"event.enable.filter.show.popup",LOG_EVENT:"event.log.track",UPDATE_TAB_BUTTON_STATE:"event.update.tab.button.state",REQUEST_FILTER_UPDATED:"event.request.filter.updated",CHANGE_USER_SETTINGS:"event.change.user.settings",CHANGE_PREFS:"event.change.prefs",UPDATE_FILTERS_SHOW_POPUP:"event.update.filters.show.popup",UPDATE_USER_FILTER_RULES:"event.update.user.filter.rules",UPDATE_USER_FILTER_AUTO_RULES:"event.update.user.filter.auto.rules",UPDATE_WHITELIST_FILTER_RULES:"event.update.whitelist.filter.rules",CONTENT_BLOCKER_UPDATED:"event.content.blocker.updated"},i.AntiBannerFiltersId={USER_FILTER_ID:0,USER_FILTER_AUTO_ID:1,YICLEAR_FILTER_ID:3,WHITE_LIST_FILTER_ID:100,YICLEAR_DEF_ID:111},i.platformUtils={navigator:i.Cc["@mozilla.org/network/protocol;1?name=http"].getService(i.Ci.nsIHttpProtocolHandler),objectContentTypes:".jar.swf.",mediaContentTypes:".mp4.flv.avi.m3u.webm.mpeg.3gp.3gpp.3g2.3gpp2.ogg.mov.qt.",fontContentTypes:".ttf.otf.woff.woff2.eot.",imageContentTypes:".ico.png.gif.jpg.jpeg.webp.",isWindowsOs:function(){return 0<=this.navigator.userAgent.toLowerCase().indexOf("win")},isMacOs:function(){return 0<=this.navigator.platform.toUpperCase().indexOf("MAC")},isEdgeBrowser:function(){return"Edge"===yiclearAPI.Prefs.getBrowser()},isFirefoxBrowser:function(){return"Firefox"==yiclearAPI.Prefs.getBrowser()||"Android"==yiclearAPI.Prefs.getBrowser()},isSafariBrowser:function(){return"Safari"==yiclearAPI.Prefs.getBrowser()},isSafari9Plus:function(){return"Safari"==yiclearAPI.Prefs.getBrowser()&&this.isGreaterOrEqualsVersion(yiclearAPI.Prefs.safariVersion,"9.0")},isGreaterOrEqualsVersion:function(e,t){var r=new Version(e),n=new Version(t);return 0<=r.compare(n)},isContentBlockerEnabled:function(){return"undefined"!=typeof safari&&(void 0===this._useOldSafariAPI&&(this._useOldSafariAPI="true"==String(safari.extension.settings.getItem("useOldSafariAPI"))),!this._useOldSafariAPI)},isShadowDomSupported:function(){return"chromium"==yiclearAPI.Prefs.platform||"sogou"==yiclearAPI.Prefs.platform},isGreaterVersion:function(e,t){var r=new i.Version(e),n=new i.Version(t);return 0<r.compare(n)},findHeaderByName:function(e,t){if(e)for(var r=0;r<e.length;r++){var n=e[r];if(n.name===t)return n}return null},setHeaderValue:function(e,t,r){e=e||[];var n=this.findHeaderByName(e,t);return n?n.value=r:e.push({name:t,value:r}),e},parseContentTypeFromUrlPath:function(e){var t=e.slice(-6),r=t.lastIndexOf(".");return-1===r?null:(t=t.slice(r)+".",-1!==this.objectContentTypes.indexOf(t)?i.RequestTypes.OBJECT:-1!==this.mediaContentTypes.indexOf(t)?i.RequestTypes.MEDIA:-1!==this.fontContentTypes.indexOf(t)?i.RequestTypes.FONT:-1!==this.imageContentTypes.indexOf(t)?i.RequestTypes.IMAGE:null)},debounce:function(r,n){var i;return function(){var e=this,t=arguments;clearTimeout(i),i=setTimeout(function(){i=null,r.apply(e,t)},n)}},EDGE_CREATORS_UPDATE:15063,isEdgeBeforeCreatorsUpdate:function(){return this.isEdgeBrowser()}},i.Version=function(e){this.version=Object.create(null);var t,r=(e||"").split(".");for(var n=3;0<=n;n--)this.version[n]=(t=r[n],isNaN(t)?0:Math.max(t-0,0))},i.Version.prototype.compare=function(e){for(var t=0;t<4;t++){if(this.version[t]>e.version[t])return 1;if(this.version[t]<e.version[t])return-1}return 0},i.Utils={getAppVersion:function(){return i.LocalStorage.getItem("app-version")},setAppVersion:function(e){i.LocalStorage.setItem("app-version",e)}},i.SimpleRegex=(s={maskStartUrl:"||",maskPipe:"|",maskSeparator:"^",maskAnySymbol:"*",regexAnySymbol:".*",regexSeparator:"([^ a-zA-Z0-9.%]|$)",regexStartUrl:"^(http|https|ws|wss)://([a-z0-9-_.]+\\.)?",regexStartString:"^",regexEndString:"$"},a=new RegExp("["+[".","+","?","$","{","}","(",")","[","]","\\","/"].join("\\")+"]","g"),{createRegex:function(e){var t=function(e){return e.replace(a,"\\$&")}(e);return t=r(t,s.maskStartUrl)?t.substring(0,s.maskStartUrl.length)+n(t.substring(s.maskStartUrl.length,t.length-1),"|","\\|")+t.substring(t.length-1):r(t,s.maskPipe)?t.substring(0,s.maskPipe.length)+n(t.substring(s.maskPipe.length,t.length-1),"|","\\|")+t.substring(t.length-1):n(t.substring(0,t.length-1),"|","\\|")+t.substring(t.length-1),t=n(t,s.maskAnySymbol,s.regexAnySymbol),t=n(t,s.maskSeparator,s.regexSeparator),r(t,s.maskStartUrl)?t=s.regexStartUrl+t.substring(s.maskStartUrl.length):r(t,s.maskPipe)&&(t=s.regexStartString+t.substring(s.maskPipe.length)),function(e,t){if(!e||!t)return!1;if(e.endsWith)return e.endsWith(t);var r=String(t),n=e.lastIndexOf(r);return 0<=n&&n===e.length-r.length}(t,s.maskPipe)&&(t=t.substring(0,t.length-1)+s.regexEndString),t},regexConfiguration:s})}(vAPI);