!function(l,n){l.RequestFilter=function(){this.urlBlockingFilter=new l.urlFilter,this.urlWhiteFilter=new l.urlFilter,this.passFilter=new l.passFilter,this.cssFilter=new l.CssFilter,this.scriptFilter=new l.ScriptFilter,this.cspFilter=new l.CspFilter,this.rulesCount=0,this.requestCache=Object.create(null),this.requestCacheSize=0},l.RequestFilter.prototype={requestCacheMaxSize:2e3,addRules:function(e){if(e)for(var t=0;t<e.length;t++)this.addRule(e[t])},addRule:function(e){null!==e&&e.ruleText&&(e instanceof l.passFilterRule?this.passFilter.addRule(e):e instanceof l.UrlFilterRule?e.cspRule?this.cspFilter.addRule(e):e.whiteListRule?this.urlWhiteFilter.addRule(e):this.urlBlockingFilter.addRule(e):e instanceof l.CssFilterRule?this.cssFilter.addRule(e):e instanceof l.ScriptFilterRule&&this.scriptFilter.addRule(e),this.rulesCount++,this._clearRequestCache())},removeRule:function(e){null!==e&&(e instanceof l.passFilterRule?this.passFilter.removeRule(e):e instanceof l.UrlFilterRule?e.cspRule?this.cspFilter.removeRule(e):e.whiteListRule?this.urlWhiteFilter.removeRule(e):this.urlBlockingFilter.removeRule(e):e instanceof l.CssFilterRule?this.cssFilter.removeRule(e):e instanceof l.ScriptFilterRule&&this.scriptFilter.removeRule(e),this.rulesCount--,this._clearRequestCache())},getRules:function(){var e=[];return e=(e=(e=(e=(e=e.concat(this.urlWhiteFilter.getRules())).concat(this.urlBlockingFilter.getRules())).concat(this.cssFilter.getRules())).concat(this.scriptFilter.getRules())).concat(this.cspFilter.getRules())},getSelectorsForUrl:function(e,t){var i=n.UrlUtils.getDomainName(e);if(l.userSettings.collectHitsCount()){var s=this.cssFilter.buildCssHits(i,t);return s.cssHitsCounterEnabled=!0,s}return this.cssFilter.buildCss(i,t)},getInjectedSelectorsForUrl:function(e,t){var i=n.UrlUtils.getDomainName(e);return this.cssFilter.buildInjectCss(i,t)},getScriptsForUrl:function(e){var t=n.UrlUtils.toPunyCode(n.UrlUtils.getDomainName(e));return this.scriptFilter.buildScript(t)},getCspRules:function(e,t,i){n.UrlUtils.getHost(documentUrl),n.UrlUtils.isThirdPartyRequest(e,documentUrl);return this.cspFilter.findCspRules(e,t,i)},clearRules:function(){this.urlWhiteFilter.clearRules(),this.urlBlockingFilter.clearRules(),this.cssFilter.clearRules(),this._clearRequestCache()},findWhiteListRule:function(e,t,i){var s=n.UrlUtils.getHost(t),l=n.UrlUtils.isThirdPartyRequest(e,t),r=this._searchRequestCache(e,s,i);if(r)return r[0];var u=this._checkWhiteList(e,s,i,l);return this._saveResultToCache(e,u,s,i),u},findRuleForRequest:function(e,t,i,s){var l=n.UrlUtils.getHost(t),r=n.UrlUtils.isThirdPartyRequest(e,t),u=this._searchRequestCache(e,l,i);if(u)return u[0];var c=this._findRuleForRequest(e,l,i,r,s);return this._saveResultToCache(e,c,l,i),c},findCspRules:function(e,t,i){var s=n.UrlUtils.getHost(t),l=n.UrlUtils.isThirdPartyRequest(e,t);return this.cspFilter.findCspRules(e,s,l,i)},_checkWhiteList:function(e,t,i,s){return null===this.urlWhiteFilter||n.StringUtils.isEmpty(e)?null:this.urlWhiteFilter.isFiltered(e,t,i,s)},_checkUrlBlockingList:function(e,t,i,s,l){return null===this.urlBlockingFilter||n.StringUtils.isEmpty(e)?null:this.urlBlockingFilter.isFiltered(e,t,i,s,!l)},_findRuleForRequest:function(e,t,i,s,l){var r=this._checkWhiteList(e,t,i,s),u=!l||!l.checkContentType("GENERICBLOCK"),c=!l||!l.checkContentType("URLBLOCK"),n=this._checkUrlBlockingList(e,t,i,s,u);return!r||!r.isImportant&&n&&n.isImportant?c?n:l:r},_searchRequestCache:function(e,t,i){var s=this.requestCache[e];return s&&s[1]===t&&s[2]===i?s:null},_saveResultToCache:function(e,t,i,s){this.requestCacheSize>this.requestCacheMaxSize&&this._clearRequestCache(),this.requestCache[e]=[t,i,s],this.requestCacheSize++},_clearRequestCache:function(){0!==this.requestCacheSize&&(this.requestCache=Object.create(null),this.requestCacheSize=0)}}}(yiclearAPI,vAPI);