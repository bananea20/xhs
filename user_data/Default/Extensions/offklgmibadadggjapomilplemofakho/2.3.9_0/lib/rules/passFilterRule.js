!function(u,c){"use strict";c.DEFAULT_SCRIPT_RULES=Object.create(null);u.passFilterRule=function(t,e){c.StringUtils;var s=u.BaseFilterRule,i=c.AntiBannerFiltersId;s.call(this,t,i.USER_FILTER_AUTO_ID);var r=s.MASK_FILTER_AUTO_RULE,l=t.indexOf(r);0<l&&(this.domain=t.substring(0,l));var a=t.substring(l+r.length).split(",");this.passFilterIds=Object.create(null);for(var n=0;n<a.length;n++)this.passFilterIds[a[n]]=!0;this.ruleText=t},u.passFilterRule.prototype=Object.create(u.BaseFilterRule.prototype)}(yiclearAPI,vAPI);