yiclearAPI.urlFilter=function(t){function e(e){if(this.basicRulesTable=new t.UrlFilterRuleLookupTable,this.importantRulesTable=new t.UrlFilterRuleLookupTable,this.rulesWithoutShortcuts=[],e)for(var l=0;l<e.length;l++)this.addRule(e[l])}return e.prototype={addRule:function(e){e.isImportant?this.importantRulesTable.addRule(e):this.basicRulesTable.addRule(e)},removeRule:function(e){e.isImportant?this.importantRulesTable.removeRule(e):this.basicRulesTable.removeRule(e)},clearRules:function(){this.basicRulesTable.clearRules(),this.importantRulesTable.clearRules()},getRules:function(){return this.basicRulesTable.getRules().concat(this.importantRulesTable.getRules())},isFiltered:function(e,l,t,i,u){var s=this.importantRulesTable.findRule(e,l,i,t,!u);return s=s||this.basicRulesTable.findRule(e,l,i,t,!u)},_isFiltered:function(e,l,t,i,u,s){for(var r=null,a=0;a<t.length;a++)if((r=t[a]).isPermitted(l)&&r.isFiltered(e,u,i)&&(s||!r.isGeneric()))return r;return null}},e}(yiclearAPI);