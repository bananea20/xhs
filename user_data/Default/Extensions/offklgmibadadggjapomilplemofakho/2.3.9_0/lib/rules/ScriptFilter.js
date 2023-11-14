!function(t,i){"use strict";t.ScriptFilter=function(t){if(this.scriptRules=[],this.exceptionsRules=[],t)for(var e=0;e<t.length;e++)this.addRule(t[e])},t.ScriptFilter.prototype={addRule:function(t){if(t.whiteListRule)return this.exceptionsRules.push(t),void this._applyExceptionRuleToFilter(t);this._applyExceptionRulesToRule(t),this.scriptRules.push(t)},removeRule:function(t){var e=i.CollectionUtils;e.removeRule(this.scriptRules,t),e.removeRule(this.exceptionsRules,t),this._rollbackExceptionRule(t)},clearRules:function(){this.scriptRules=[],this.exceptionsRules=[]},getRules:function(){return[].concat(this.scriptRules).concat(this.exceptionsRules)},buildScript:function(t){for(var e=[],i=0;i<this.scriptRules.length;i++){var s=this.scriptRules[i];s.isPermitted(t)&&e.push({scriptSource:s.scriptSource,rule:s.script})}return e},_rollbackExceptionRule:function(t){if(t.whiteListRule)for(var e=0;e<this.scriptRules.length;e++){var i=this.scriptRules[e];i.script==t.script&&i.removeRestrictedDomains(t.getPermittedDomains())}},_applyExceptionRuleToFilter:function(t){for(var e=0;e<this.scriptRules.length;e++)this._removeExceptionDomains(this.scriptRules[e],t)},_applyExceptionRulesToRule:function(t){for(var e=0;e<this.exceptionsRules.length;e++)this._removeExceptionDomains(t,this.exceptionsRules[e])},_removeExceptionDomains:function(t,e){t.script==e.script&&t.addRestrictedDomains(e.getPermittedDomains())}}}(yiclearAPI,vAPI);