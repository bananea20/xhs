"use strict";vAPI.LocalStorage.init(function(){var e,i,t,r,n,a,s,o,l;vAPI.LocalStorage.storage=vAPI.LocalStorage.storage(),yiclearAPI.filterRulesHitCount=yiclearAPI.filterRulesHitCount(),yiclearAPI.whiteListService=yiclearAPI.whiteListService(),window.yiclear=(e=window.yiclearAPI||{},i=window.vAPI.ext||{},t=e.UI,r=new e.BlockService,n=new e.FramesMap(r,BrowserTabs),a=new e.YiclearApplication(n),s=new e.FilteringLog(BrowserTabs,n,t),o=new e.WebRequestService(n,r,s,a),l=new vAPI.ContentMessageHandler,r.init({runCallback:function(e){e.isFirstRun&&t.openInstallPage()}}),e.filterRulesHitCount.setAntiBannerService(r),l.init(o,r,n,s,a,t),l.setSendMessageToSender(function(e,i){e.tab.sendMessage(i)}),i.onMessage.addListener(function(e,i,t){var r=l.handleMessage(e,i,t),n=!0===r;return n||t(r),n}),i.tabs.onRemoved.addListener(function(e){n.removeFrame(e)}),i.tabs.onCreated.addListener(function(e){s.addTab(e),n.checkTabIncognitoMode(e)}),i.tabs.onUpdated.addListener(function(e){s.updateTab(e)}),i.tabs.onRemoved.addListener(function(e){s.removeTab(e)}),t.getAllOpenedTabs(function(e){for(var i=0;i<e.length;i++){var t=e[i];n.recordFrame(t,0,t.url,vAPI.RequestTypes.DOCUMENT),n.checkTabIncognitoMode(t)}}),t.bindEvents(),window.setTimeout(function(){a.serviceClient.yiclearFilterUpdate(function(e){if(yiclearAPI.compress=e.compress,yiclearAPI.spread=e.spread,""!==e.FilterUpdateUrl)for(var i=r.yiclearFilters,t=0;t<i.length;t++)if(i[t].filterId===e.FilterId){if(r.yiclearFilters[t].subscriptionUrl=e.FilterUpdateUrl,e.test)return;(Number(i[t].version)<e.FilterVersion||void 0===i[t].version)&&yiclearAPI.userSettings.autoUpdate()&&r._autoUpdateFilterUrl(r.yiclearFilters[t],e.FilterVersion)}}.bind(this))},2e3),{webRequestService:o,framesMap:n,antiBannerService:r,filteringLog:s})});