!function(n,S){n.filterRulesHitCount=function(){"use strict";function t(){var t=n.ClientService,i=n.userSettings,e=S.EventNotifier,s=S.EventNotifierTypes;this.serviceClient=new t,this._init(),this.collectStatsEnabled=i.collectHitsCount(),e.addListener(function(t,e){t==s.CHANGE_USER_SETTINGS&&e==i.settings.DISABLE_COLLECT_HITS&&(this.collectStatsEnabled=i.collectHitsCount())}.bind(this))}return t.prototype={MAX_PAGE_VIEWS_COUNT:20,HITS_COUNT_PROP:"filters-hit-count",HITS_PROP:"h",setAntiBannerService:function(t){this.antiBannerService=t},addDomainView:function(t){if(this.collectStatsEnabled&&t){var e=this.stats.domains;e||(this.stats.domains=e=Object.create(null));var i=e[t];i||(e[t]=i=Object.create(null),i.views=0),i.views++,this.stats.views=(this.stats.views||0)+1,this._saveHitsCountStats(this.stats)}},addRuleHit:function(t,e,i,s){var n=S.UrlUtils;if(this.collectStatsEnabled&&t&&e&&i){var a=this.stats.domains?this.stats.domains[t]:null;if(a){var r=a.rules;r||(a.rules=r=Object.create(null));var c=r[i];c||(r[i]=c=Object.create(null)),e in c||(c[e]=null);var o=c[e];if(o||(c[e]=o=Object.create(null)),s){var l=n.getDomainName(s),u=o[l]||0;o[l]=u+1}else{var h=o[this.HITS_PROP]||0;o[this.HITS_PROP]=h+1}this._saveHitsCountStats(this.stats)}}},cleanup:function(){var t=S.LocalStorage;this.stats=Object.create(null),t.removeItem(this.HITS_COUNT_PROP)},_init:function(){this.stats=this._getHitCountStats()},_getHitCountStats:function(){var t=S.LocalStorage,e=S.Log,i=t.getItem(this.HITS_COUNT_PROP),s=Object.create(null);try{i&&(s=JSON.parse(i))}catch(t){e.error("Error retrieve hit count statistic, cause {0}",t)}return s},_saveHitsCountStats:function(t){var e=S.LocalStorage,i=S.Log;this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout(function(){try{e.setItem(this.HITS_COUNT_PROP,JSON.stringify(t))}catch(t){i.error("Error save hit count statistic to storage, cause {0}",t)}this._sendStats()}.bind(this),2e3)},_sendStats:function(){(this.stats.views||0)<this.MAX_PAGE_VIEWS_COUNT||this.collectStatsEnabled&&(this.antiBannerService,this.cleanup())}},new t}}(yiclearAPI,vAPI);