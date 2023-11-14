(self.webpackChunk=self.webpackChunk||[]).push([[1442],{31442:(e,t,n)=>{n.d(t,{_:()=>L});var r=n(35214),o=n(57050),i=n(38983),f=n(32952),u=n(16782),d=n(95300),a=n(9922),c=n(24209),s=n(77176),l=n(60797),h=n(40649),p=n(41398),v=n(85985),g=n(93508),_=n(16118),y=n(24713),m=n(95195),b=n(95574),I=n(19429),F=n(81670),k=n(5114),w=n(92843),S=n(8125),C=n(45701),O=n(22232),T=n(83078),x=n(93756),U=n(48044),j=n(81531),z=n(46680),G=n(21038),N=n(28811),A=n(31539),M=n(79880),E=n(26393);function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){V(e,t,n[t])}))}return e}function X(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],f=!0,u=!1;try{for(n=n.call(e);!(f=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);f=!0);}catch(e){u=!0,o=e}finally{try{f||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var L=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.onFeedRemove=new f.xQ,this.onFeedEmpty=new f.xQ,this._header=new u.t(1),this._footer=new u.t(1),this._feeds=new Map,this._currentCards=i.h.create(A.l.empty),this._feed=new d.X(void 0),this._feedStack=new d.X([]),this._cardIdToFocus=new f.xQ,this._subs=new a.w.Keeper,this._log=j.C8.Logging.getLogger("SDUIFeedManager",z.i.TRACE,z.T.Manager.getColor()),this._forceFeedInternalInfo=new f.xQ,this._getFeedContent=(0,o.ls)(this._getFeed,m.map((function(e){return e.content})),b.MH),this._changeFeed=function(e){var t=n;n._feed.next(e),(0,o.zG)(e.cards,A.l.applyDiff,I.UI(F.T.recover((function(e){return t._log.error("conflicts on diff apply",e)}))),(function(n){var r=t._currentCards.get(),o=n(r);if(r.entries.size>0&&0===o.entries.size){var i=t._feeds.get(e.feedId);void 0!==i&&t.onFeedEmpty.next(i)}t._currentCards.modify(n)}))};var r=c.T(this._feedStack.pipe(s.U((function(e){return k.fromNullable(e[e.length-1])})),l.oA,s.U((function(e){return n._getFeedInternalInfo(e.feedId,e.focusedCardId)}))),this._forceFeedInternalInfo),S=c.T(this._feedStack.pipe(h.g("length"),s.U((function(e){return k.fromNullable(e[e.length-1])})),l.oA,s.U((function(e){return n._getFeedInternalInfo(e.feedId,e.focusedCardId)}))),this._forceFeedInternalInfo),C=this._cardIdToFocus.pipe(p.M(this._feedStack.pipe(s.U((function(e){var t;return null===(t=e[e.length-1])||void 0===t?void 0:t.focusedCardId})))),v.h((function(e){var t=X(e,2);return t[0]!==t[1]})),s.U((function(e){return X(e,1)[0]})),p.M(this.feed),s.U((function(e){var t=X(e,2),r=t[0],o=t[1];return n._getFeedInternalInfo(o.feedId,G.j.Item.Id.from(r))}))),O=t.pipe(g.O(N.a.empty),_.G(),s.U((function(e){var t=X(e,2),n=t[0],r=t[1];return N.a.diff(n,r)})),s.U((function(e){return n._processSDUIItems(e)})),p.M(r),s.U((function(e){var t=X(e,2),n=t[0],r=t[1],i=r.feedOrd,f=r.feedFilter;return{feedId:r.feedId,cards:(0,o.zG)(n,w.v.filter(f,(function(e,t){return f(t)}),f)),feedOrd:i,itemIdToSelect:k.none}}))),T=c.T(S,C).pipe(p.M(t,this._currentCards),s.U((function(e){var t=X(e,3),n=t[0],r=n.feedOrd,i=n.feedFilter,f=n.feedId,u=n.itemIdToSelect,d=t[1],a=t[2],c=(0,o.zG)(d,A.l.iso.unwrap,(function(e){return(0,o.zG)(e.entries,U.hX(i))}));return{feedId:f,cards:A.l.diffFromEntries(a.entries,c),feedOrd:r,itemIdToSelect:u}})));this._subs.push(c.T(O,T).subscribe(this._changeFeed)),this._subs.push(S.pipe(y.j("header")).subscribe((function(e){return n._header.next(e)}))),this._subs.push(S.pipe(y.j("footer")).subscribe((function(e){return n._footer.next(e)})))}var t,n,E;return t=e,n=[{key:"header",get:function(){return this._header.asObservable()}},{key:"footer",get:function(){return this._footer.asObservable()}},{key:"feed",get:function(){return this._feed.pipe(v.h(S.$K))}},{key:"currentFeed",get:function(){return k.fromNullable(this._feed.getValue())}},{key:"_getFeed",value:function(e){var t=this._feeds.get(e);return void 0===t?m.left("Cannot switch to feed. Feed with id '".concat(e,"' not found.")):m.right(t)}},{key:"_getFeedInternalInfo",value:function(e,t){var n=this._getFeedContent(e);return{feedId:e,feedFilter:function(e){var t=R(e.content);return!k.isNone(t)&&n.filtering.reduce((function(e,n){return!1===e?e:(0,o.zG)(t,k.chain((function(e){return k.fromNullable(e[n.property])})),k.fold((function(){return n.condition===M.j2.NotEqualTo}),(function(e){return n.condition===M.j2.EqualTo?e===n.value:e!==n.value})))}),!0)},feedOrd:(0,r.fold)(C.getMonoid())(n.ordering.map((function(e){return(0,o.zG)(C.ordNumber,C.contramap((0,o.ls)(R,k.chain((function(t){return k.fromNullable(t[e.orderBy])})),k.fold((function(){return Number.MAX_VALUE}),(function(t){return e.direction===M.di.Asc?t:-1*t})))))}))),itemIdToSelect:k.some(t),header:n.header,footer:k.fromNullable(n.footer)}}},{key:"pushFeed",value:function(e,t){var n=this;return(0,o.zG)(this._getFeed(e),m.map((function(){var r=n._feedStack.getValue();return r=r.concat({feedId:e,focusedCardId:t?G.j.Item.Id.from(t):void 0}),n._feedStack.next(r),null})))}},{key:"popFeed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.none,t=this._feedStack.getValue();if(t.length>1)return t=t.slice(0,t.length-1),void this._feedStack.next(t);var n=this;(0,o.zG)(e,k.fold((function(){return n._log.warn("Invoked `popFeed()` when there are less than 2 feeds in the feed stack, this is a no-op. No fallback feed provided.")}),(function(e){n.pushFeed(G.j.Item.Id.from(e.feedId),e.cardId),n._log.debug("Invoked 'popFeed()' when there are less than 2 feeds in the feed stack. Switching to the provided fallback feed. ".concat(JSON.stringify(e)))})))}},{key:"focusCard",value:function(e){var t=this;return(0,o.zG)(this.currentFeed,m.fromOption((function(){return"Cannot focus card when there is no active feed."})),m.map((function(){return t._cardIdToFocus.next(e),null})))}},{key:"notifyCardFocused",value:function(e){var t=this._feedStack.getValue(),n=t[t.length-1];(0,O.kG)(void 0!==n,"notifyCardFocused: Feed stack cannot be empty."),t=t.slice(0,t.length-1).concat(Q({},n,{focusedCardId:e})),this._feedStack.next(t)}},{key:"_processSDUIItems",value:function(e){var t=this;return w.v.fromMutation((function(n){var r=t;(0,o.zG)(e,w.v.forEach((function(e){if(void 0!==r._feeds.get(e.id)){var t=r;r._feeds.delete(e.id),(0,o.zG)(r.currentFeed,k.filter((function(t){return t.feedId.toString()===e.id.toString()})),T.bw((function(){return t.onFeedRemove.next(e)})))}else n.set(e.id,x.t$(e))}),(function(e,t){if("assistantFeed"===t.content.type){var i=t.content;if(void 0!==r._feeds.get(e.id)){var f=r;r._feeds.set(e.id,Q({},t,{content:i})),(0,o.zG)(r.currentFeed,k.filter((function(t){return t.feedId===e.id})),k.map((function(e){f._header.next(i.header),f._footer.next(k.fromNullable(i.footer))})))}else r._log.warn("Feed with id '".concat(e.id,"' not found for update"))}else n.set(e.id,x.Hk(e,t))}),(function(e){if("assistantFeed"===e.content.type){var t=e.content;r._feeds.set(e.id,Q({},e,{content:t}))}else n.set(e.id,x.F2(e))})))}))}},{key:"dispose",value:function(){this._subs.dispose()}}],n&&D(t.prototype,n),E&&D(t,E),e}();function R(e){var t=!0,n=!1,r=void 0;try{for(var o,i=E.ab.traverse(e)[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var f=o.value;if("longFormCard"===f.type)return k.some(f.feedProperties);if("assistantCard"===f.type&&f.properties)return k.some(f.properties)}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}return k.none}}}]);