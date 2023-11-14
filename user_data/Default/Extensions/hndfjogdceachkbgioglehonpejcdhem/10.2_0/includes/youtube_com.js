!function(e) {
    function t(t) {
        for (var o, a, s = t[0], l = t[1], d = t[2], u = 0, p = []; u < s.length; u++) a = s[u], 
        Object.prototype.hasOwnProperty.call(r, a) && r[a] && p.push(r[a][0]), r[a] = 0;
        for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
        for (c && c(t); p.length; ) p.shift()();
        return i.push.apply(i, d || []), n();
    }
    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], o = !0, s = 1; s < n.length; s++) {
                var l = n[s];
                0 !== r[l] && (o = !1);
            }
            o && (i.splice(t--, 1), e = a(a.s = n[0]));
        }
        return e;
    }
    var o = {}, r = {
        19: 0
    }, i = [];
    function a(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, a), n.l = !0, n.exports;
    }
    a.m = e, a.c = o, a.d = function(e, t, n) {
        a.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        });
    }, a.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, a.t = function(e, t) {
        if (1 & t && (e = a(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (a.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var o in e) a.d(n, o, function(t) {
            return e[t];
        }.bind(null, o));
        return n;
    }, a.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return a.d(t, "a", t), t;
    }, a.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, a.p = "";
    var s = window.savefromContentScriptWebpackJsonp = window.savefromContentScriptWebpackJsonp || [], l = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var d = 0; d < s.length; d++) t(s[d]);
    var c = l;
    i.push([ 105, 0 ]), n();
}({
    105: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(0), r = n(10), i = n(15), a = n(28), s = n(25), l = n(23), d = n(12), c = n(22), u = n(16), p = n(3), f = n(1), g = n(6), b = n(7), h = n(18), y = n(11), m = n(33), v = n(56), k = n(14), x = n(19), w = n(21), S = n(37), C = n(13);
        function B(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), n.push.apply(n, o);
            }
            return n;
        }
        const M = n(36), _ = Object(b.a)("getYoutubeLinks");
        function O(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return I(e, t, n).catch(t => (_.error("getVideoLinks error", t), L(e).then(t => {
                let {videoInfo: o} = t;
                return Object(C.a)({
                    action: "ytPrepareVideoInfo",
                    videoId: e,
                    checkSubtitles: n.checkSubtitles,
                    noDash: n.checkSubtitles,
                    config: o
                });
            }))).then(e => {
                if (!e.links) throw new Error("Links not found");
                return e;
            });
        }
        function I(e, t, n) {
            return Object(C.a)(function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? B(Object(n), !0).forEach((function(t) {
                        Object(x.a)(e, t, n[t]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    }));
                }
                return e;
            }({
                action: "getYoutubeLinksFromConfig",
                extVideoId: e,
                url: t,
                config: {
                    args: {
                        video_id: e
                    }
                }
            }, n)).then(e => {
                if (!e.links) throw Error("getYoutubeLinksFromBackground. Links not found");
                return e;
            });
        }
        function L(e) {
            return function(e) {
                const t = "https://www.youtube.com/embed/" + encodeURIComponent(e);
                return Object(w.a)({
                    url: t,
                    localXHR: o.a.isGM
                }).then(e => {
                    const t = Object(S.a)(e.body, /INNERTUBE_CONTEXT":(.*?),/);
                    if (!t.length || !t[0].INNERTUBE_CONTEXT || !t[0].INNERTUBE_API_KEY) throw Error("INNERTUBE_CONTEXT not found");
                    return t[0];
                });
            }(e).then(t => {
                const n = "https://www.youtube.com/youtubei/v1/player?" + M.stringify({
                    key: t.INNERTUBE_API_KEY
                });
                return Object(w.a)({
                    url: n,
                    method: "POST",
                    localXHR: o.a.isGM,
                    json: !0,
                    data: JSON.stringify({
                        context: t.INNERTUBE_CONTEXT,
                        videoId: e
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        "X-Youtube-Client-Name": t.INNERTUBE_CONTEXT_CLIENT_NAME || "55",
                        "X-Youtube-Client-Version": t.INNERTUBE_CONTEXT_CLIENT_VERSION || "1.20210331.1.0"
                    }
                });
            }).then(e => ({
                videoInfo: {
                    player_response: e.body
                }
            }));
        }
        var E = n(17), F = n(57), N = n(9);
        function R(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), n.push.apply(n, o);
            }
            return n;
        }
        function P(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? R(Object(n), !0).forEach((function(t) {
                    Object(x.a)(e, t, n[t]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                }));
            }
            return e;
        }
        const T = e => {
            try {
                j(e);
            } catch (t) {
                T({
                    type: "counter",
                    name: "monitoring_validator_error",
                    help: "Monitoring validator error",
                    labels: {
                        metric_name: e.name
                    }
                });
            }
            e.name = A(e.name), o.a.sendMessage({
                action: "sendAlternativeMonitoring",
                params: P({}, e)
            });
        }, j = e => {
            if (void 0 === e.type) throw new Error("type is required.");
            if ("counter" !== e.type && "gauge" !== e.type && "histogram" !== e.type && "summary" !== e.type) throw new Error("type must be one of 'counter', 'gauge', 'histogram' or 'summary'.");
            if (void 0 === e.name) throw new Error("name is required.");
            if ("string" != typeof e.name) throw new Error("name must be a string.");
            if (void 0 === e.help) throw new Error("help is required.");
            if ("string" != typeof e.help) throw new Error("help must be a string.");
            if (e.labels && "object" != typeof e.labels) throw new Error("labels must be an object.");
            if (e.labels && Object.keys(e.labels).every(t => e.labels && "string" != typeof e.labels[t])) throw new Error("labels must be an object of strings.");
            if (e.buckets && !Array.isArray(e.buckets)) throw new Error("buckets must be an array.");
            if (e.buckets && e.buckets.every(e => "number" != typeof e)) throw new Error("buckets must be an array of numbers.");
            if (e.duration && "number" != typeof e.duration) throw new Error("duration must be a number.");
        }, A = e => "web_events_" + e.replace(/[-\s]/g, "_"), q = (e, t) => {
            const n = setInterval(() => {
                "complete" === document.readyState && (clearInterval(n), T({
                    type: "counter",
                    name: "search_element_by_selector",
                    help: "Search element by selector",
                    labels: {
                        browser: "edge",
                        site: "youtube",
                        page_type: e
                    }
                }), t[e] && T({
                    type: "counter",
                    name: "element_by_selector_founded",
                    help: "Element by selector is founded",
                    labels: {
                        browser: "edge",
                        site: "youtube",
                        page_type: e,
                        selector: t[e]
                    }
                }));
            }, 2e3);
        }, D = Object(b.a)("youtube_com");
        h.a.isSingle() && Object(i.b)("youtube", (function(e, t) {
            let n = F.a.getPageType(window.location.href);
            T({
                type: "counter",
                name: n,
                help: "Youtube page type",
                labels: {
                    browser: "edge",
                    site: "youtube"
                }
            });
            const i = {};
            q(n, i), document.addEventListener("mutationwatcher:hrefchange", () => {
                n = F.a.getPageType(window.location.href), T({
                    type: "counter",
                    name: n,
                    help: "Youtube page type",
                    labels: {
                        browser: "edge",
                        site: "youtube"
                    }
                }), q(n, i);
            });
            const b = Object(r.a)(t);
            var h = t.preferences, x = h.moduleYoutube ? 1 : 0, w = o.a.isChrome || o.a.isFirefox || o.a.isGM && o.a.isTM, S = Object(a.a)();
            const {experiments: C = {}} = h;
            o.a.onMessage.addListener((function(t, n, o) {
                if ("getModuleInfo" === t.action) {
                    if (t.url !== location.href) return;
                    return o({
                        state: x,
                        moduleName: e
                    });
                }
                if ("changeState" === t.action) {
                    if (e !== t.moduleName) return;
                    return B.changeState(t.state);
                }
                if ("updatePreferences" !== t.action) {
                    if (x) {
                        if ("updateLinks" === t.action) {
                            var r = B.getIdFromLocation();
                            r && _((function(e) {
                                if (e && e.args && e.args.video_id === r) {
                                    var t = document.getElementById(B.buttonId);
                                    null !== t && t.parentNode.removeChild(t), B.responseCache = {}, B.video_id = e.args.video_id;
                                    var n = document.getElementById("watch7-subscription-container");
                                    B.appendDownloadButton(n);
                                }
                            }));
                        }
                        "downloadPlaylist" === t.action && B.downloadPlaylist();
                    }
                } else Object.assign(h, t.preferences);
            })), x && setTimeout((function() {
                B.run();
            }));
            var B = {
                swfargs: null,
                video_id: "",
                buttonId: "savefrom__yt_btn",
                responseCache: {},
                isMobile: !1,
                mobileMenu: null,
                currentMenu: null,
                currentTutorial: null,
                run: function() {
                    if (x = 1, S) {
                        var e = location.href.match(/\/embed\/([\w\-]+)/i);
                        (e = e && e[1]) || (S = !1);
                    }
                    return 0 === location.host.indexOf("m.") ? (B.isMobile = !0, void (y.a.isAvailable() && B.mobileMutationMode.enable())) : S ? (B.video_id = e, 
                    void B.appendFrameButton()) : void (y.a.isAvailable() && (B.videoFeed.injectStyle(), 
                    B.mutationMode.enable()));
                },
                changeState: function(e) {
                    if (x = e, !S && !B.isMobile) {
                        B.tutorial.hide(), B.hideCurrentMenu(), B.videoFeed.rmBtn(), B.mutationMode.stop();
                        var t = document.getElementById(B.buttonId);
                        t && t.parentNode.removeChild(t), e && B.run();
                    }
                },
                hideCurrentMenu: function() {
                    B.currentMenu && (B.currentMenu.hide(), B.currentMenu = null);
                },
                hideMobileMenu: function() {
                    B.mobileMenu && (B.mobileMenu.hide(), B.mobileMenu = null);
                },
                mutationMode: {
                    observer: null,
                    stop: function() {
                        B.mutationMode.observer && B.mutationMode.observer.stop(), [ "sfSkip" ].forEach((function(e) {
                            for (var t, n = Object(l.a)(e), o = document.querySelectorAll("[" + n + "]"), r = 0; t = o[r]; r++) t.removeAttribute(n);
                        }));
                    },
                    wrapVideoFeedOnImgHover: function() {
                        if (x && B.videoFeed.testUrl(location.href) && !(this.dataset.sfBtn > 0)) {
                            this.dataset.sfBtn = "1";
                            var e = JSON.parse(this.dataset.sfContext);
                            this.appendChild(B.videoFeed.getBtnNode(e.id, e.styleIndex));
                        }
                    },
                    wrapNewVideoFeedOnThumbnailHover: function() {
                        if (x && B.videoFeed.testUrl(location.href)) {
                            var e = B.mutationMode, t = this, o = t.href, r = o && (o.match(B.videoFeed.hrefIdPattern) || o.match(B.videoFeed.shortsPattern)), i = r && r[1];
                            if (i) {
                                if (!t.querySelector(".sf-feed-btn")) {
                                    T({
                                        type: "counter",
                                        name: "append_button",
                                        help: "Append button",
                                        labels: {
                                            browser: "edge",
                                            site: "youtube",
                                            page_type: n
                                        }
                                    });
                                    try {
                                        var a = B.videoFeed.getBtnNode(i, 2);
                                        p.a.onRemoveEvent(a, (function() {
                                            this.parentNode || p.a.one(t, "mouseenter", e.wrapNewVideoFeedOnThumbnailHover);
                                        })), t.appendChild(a), T({
                                            type: "counter",
                                            name: "append_button_success",
                                            help: "Append button - success",
                                            labels: {
                                                browser: "edge",
                                                site: "youtube",
                                                page_type: n
                                            }
                                        });
                                    } catch (e) {
                                        console.error("append button error");
                                    }
                                }
                            } else T({
                                type: "counter",
                                name: "error_before_append_button",
                                help: "Error before append button",
                                labels: {
                                    browser: "edge",
                                    site: "youtube",
                                    page_type: n
                                }
                            });
                            o = null, r = null, i = null, a = null;
                        }
                    },
                    enable: function() {
                        var e = this;
                        if (e.observer) return e.observer.start();
                        const t = t => {
                            if (B.videoFeed.testUrl(location.href)) for (let n, o = 0; n = t.added[o]; o++) {
                                if (n.dataset.sfSkip > 0) continue;
                                n.dataset.sfSkip = "1";
                                const t = n.dataset.videoIds;
                                if (t) {
                                    const o = n.parentNode, r = {};
                                    r.id = t, r.styleIndex = 1, o.dataset.sfContext = JSON.stringify(r), p.a.one(o, "mouseenter", e.wrapVideoFeedOnImgHover);
                                }
                            }
                        }, o = (e, t) => {
                            for (let o, r = 0; o = e.added[r]; r++) o.dataset.sfSkip > 0 || (o.dataset.sfSkip = "1", 
                            i[n] || (i[n] = t), B.appendNewDownloadButton(o));
                        };
                        e.observer = new y.a({
                            queries: [ {
                                css: "#watch7-subscription-container",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                    B.appendDownloadButton(t));
                                }
                            }, {
                                css: "#shorts-player",
                                is: "added",
                                callback: (e, t) => {
                                    const [o] = e.added;
                                    i[n] || (i[n] = t), B.appendShortDownloadButton(o, o.getAttribute("style"));
                                }
                            }, {
                                css: "button.addto-watch-later-button-sign-in",
                                is: "added",
                                callback: t
                            }, {
                                css: "button.addto-watch-later-button",
                                is: "added",
                                callback: t
                            }, {
                                css: "ytd-thumbnail a#thumbnail img",
                                is: "added",
                                callback: (t, o) => {
                                    if (B.videoFeed.testUrl(location.href)) for (let r, a = 0; r = t.added[a]; a++) r.dataset.sfSkip > 0 || (r.dataset.sfSkip = "1", 
                                    i[n] || (i[n] = o), p.a.one(Object(u.a)(r, "a"), "mouseenter", e.wrapNewVideoFeedOnThumbnailHover));
                                }
                            }, {
                                css: ".ytd-page-manager #info #info-contents:not([hidden]) #top-level-buttons-computed",
                                is: "added",
                                callback: o
                            }, {
                                css: ".ytd-page-manager #actions .actions-inner #top-level-buttons-computed, .ytd-page-manager #actions #actions-inner #top-level-buttons-computed",
                                is: "added",
                                callback: o
                            }, {
                                css: "." + p.a.onRemoveClassName,
                                is: "removed",
                                callback: e => {
                                    for (let t, n = 0; t = e.removed[n]; n++) p.a.onRemoveListener(t);
                                }
                            } ]
                        });
                    }
                },
                mobileMutationMode: {
                    observer: null,
                    stop: function() {
                        B.mutationMode.observer && B.mutationMode.observer.stop(), [ "sfSkip" ].forEach((function(e) {
                            for (var t, n = Object(l.a)(e), o = document.querySelectorAll("[" + n + "]"), r = 0; t = o[r]; r++) t.removeAttribute(n);
                        }));
                    },
                    enable: function() {
                        if (this.observer) return this.observer.start();
                        this.observer = new y.a({
                            queries: [ {
                                css: 'div > div > div > a[onclick][href="#"] > span[id]',
                                is: "added",
                                callback: e => {
                                    for (let o, r = 0; o = e.added[r]; r++) {
                                        if (0 !== o.id.indexOf("koya_elem_")) continue;
                                        for (var t = 0; t < 4 && o; ) o = o.parentNode, t++;
                                        if (!o || 4 !== t) continue;
                                        let e = 1;
                                        var n = o.querySelector("div:nth-child(1)>h1:nth-child(1)");
                                        if (n || (n = null), !n && Object(c.a)(o, 'div > div > div[id^="koya_child_"]:last-child > div')) {
                                            for (n = o, t = 0; t < 3 && n; ) n = n.parentNode, t++;
                                            n && n.querySelector("div:nth-child(1)>h2:nth-child(1)") ? (o = o.parentNode, e = 2) : n = null;
                                        }
                                        n && (o.dataset.sfSkip > 0 || (o.dataset.sfSkip = "1", B.appendMobileButton("", o, e)));
                                    }
                                }
                            }, {
                                css: "#app .page-container .video-main-content-actions",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                    B.appendMobileButton("", t, 3));
                                }
                            }, {
                                css: "#app .page-container .playlist-controls-secondary",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                    B.appendMobileButton("", t, 4));
                                }
                            }, {
                                css: "#app .slim-video-action-bar-actions",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                    B.appendNewMobileButton(t, 5));
                                }
                            }, {
                                css: "." + p.a.onRemoveClassName,
                                is: "removed",
                                callback: e => {
                                    for (let t, n = 0; t = e.removed[n]; n++) p.a.onRemoveListener(t);
                                }
                            } ]
                        });
                    }
                },
                _onSelectBtnClick: async function(e, r) {
                    if (!(r.button > 0)) if (r.stopPropagation(), r.preventDefault(), B.currentMenu && B.currentMenu.isShow) B.hideCurrentMenu(); else {
                        T({
                            type: "counter",
                            name: "show_menu",
                            help: "Show menu",
                            labels: {
                                browser: "edge",
                                site: "youtube",
                                page_type: n
                            }
                        });
                        var i = e.btnObj, a = i.videoId, s = B.currentMenu = b.popupMenu.quickInsert(i.node, o.a.i18n.getMessage("download") + " ...", "sf-popupMenu", {
                            onShow: function() {
                                p.a.onRemoveEvent(i.node, B.hideCurrentMenu);
                            },
                            onHide: function() {
                                p.a.offRemoveEvent(i.node, B.hideCurrentMenu);
                            },
                            onItemClick: function(e, t) {
                                B.onMenuItemClick(t, {
                                    isPageItem: 1,
                                    videoId: a
                                });
                            },
                            offsetTop: i.popupMenu && i.popupMenu.offsetTop,
                            offsetRight: i.popupMenu && i.popupMenu.offsetRight,
                            parent: i.popupMenu && i.popupMenu.parent
                        }), l = function(e) {
                            return e && e.length ? s.update(e, o.a.i18n.getMessage("partnersLinksOnly")) : s.update(o.a.i18n.getMessage("noLinksFound"));
                        };
                        if (!a) return l();
                        T({
                            type: "counter",
                            name: "extract_links",
                            help: "Extract links",
                            labels: {
                                browser: "edge",
                                site: "youtube",
                                page_type: n
                            }
                        });
                        try {
                            const e = await N.a.createLinkExtractor("yt-video").extractLinks({
                                mediaId: a,
                                mediaUrl: location.href,
                                noDash: !1,
                                checkSubtitles: !0,
                                initData: t
                            });
                            let r = [];
                            var d = function(e) {
                                return JSON.parse(JSON.stringify(e)).map((t, n) => (t.href = t.url, t.title = t.filename, 
                                t.func = e[n].func, delete t.url, delete t.filename, t));
                            }(e);
                            if (!(d = d.filter(e => e.href)).length) return void l(r);
                            if (0 === d.filter(e => ![ "ummy", "televzr" ].includes(e.format)).length) return l(r);
                            d = d.map(e => (![ "360", "720" ].includes(e.quality) || "MP4" !== e.format || isNaN(parseInt(e.itag)) || e.func || (e.func = () => {
                                D.log("track click downloadItem", e), o.a.sendMessage({
                                    action: "track",
                                    t: "event",
                                    tid: "G-L0GP1RQSBJ",
                                    el: "mp4_" + e.quality,
                                    ec: "download",
                                    ea: "mp4_" + e.quality
                                });
                            }), e)), s.update(d), T({
                                type: "counter",
                                name: "extract_links_success",
                                help: "Extract links - success",
                                labels: {
                                    browser: "edge",
                                    site: "youtube",
                                    page_type: n
                                }
                            });
                        } catch (e) {
                            D.error("get links for dropdown error", e), l();
                        }
                        i.isFirstMenuShow && (i.isFirstMenuShow = !1);
                    }
                },
                appendDownloadButton: function(e) {
                    var t = e.querySelector("#" + B.buttonId);
                    t && (t.parentNode && t.parentNode.removeChild(t), t = null);
                    var n = this, o = {}, r = n.getButtonUnderVideo(B._onSelectBtnClick.bind(null, o));
                    return o.btnObj = r, r.isFirstMenuShow = !0, r.setLoadingState(), e.appendChild(r.node), 
                    _((function(e) {
                        var t = null;
                        if (e && e.args && e.args.video_id && (t = e.args.video_id), t) {
                            r.node.dataset.sfVideoId = t, r.ytConfig = e, r.videoId = t, r.isPage = 1;
                            var o = [], i = function() {
                                i = null, B.tutorial.show({
                                    target: r.node
                                });
                            };
                            o.push((function() {
                                return i && i();
                            })), r.onGetLinksArr = o, n.quickBtn.setValue(r);
                        }
                    }));
                },
                appendNewDownloadButton: function(e, t) {
                    var o = this, r = e.querySelector("#" + B.buttonId);
                    if (r) {
                        if (t) return;
                        r.classList.remove(p.a.onRemoveClassName), r.parentNode && r.parentNode.removeChild(r), 
                        r = null;
                    }
                    T({
                        type: "counter",
                        name: "append_button",
                        help: "Append button",
                        labels: {
                            browser: "edge",
                            site: "youtube",
                            page_type: n
                        }
                    });
                    try {
                        var i = new this.getNewButtonUnderVideo(B._onSelectBtnClick);
                        i.isFirstMenuShow = !0, i.setLoadingState();
                        var a = e.childNodes[2];
                        a || (a = e.firstChild), a ? (e.insertBefore(i.node, a), T({
                            type: "counter",
                            name: "append_button_success",
                            help: "Append button - success",
                            labels: {
                                browser: "edge",
                                site: "youtube",
                                page_type: n
                            }
                        })) : (e.appendChild(i.node), T({
                            type: "counter",
                            name: "append_button_success",
                            help: "Append button - success",
                            labels: {
                                browser: "edge",
                                site: "youtube",
                                page_type: n
                            }
                        }));
                    } catch (e) {
                        console.error("append button error");
                    }
                    let s = null, l = null;
                    return p.a.onRemoveEvent(i.node, (function() {
                        s && (s.abort(), s = null), l && (l.destroy(), l = null), e.parentNode && B.appendNewDownloadButton(e, !0);
                    })), i.popupMenu = {
                        offsetTop: -6,
                        offsetRight: -1,
                        parent: i.menuContainer
                    }, s = b.waitNodesBySelector("#movie_player"), s.then(() => {
                        if (Object(v.a)(document.body, i.node)) return I().then(e => {
                            var t = e && e.args && e.args.video_id;
                            if (t) {
                                i.node.dataset.sfVideoId = t, i.ytConfig = e, i.videoId = t, i.isPage = 1;
                                var n = [];
                                i.onGetLinksArr = n, n.push((function() {
                                    B.tutorial.show({
                                        target: i.selectBtn,
                                        parent: i.menuContainer,
                                        btnLeftOffset: 12,
                                        btnTopOffset: -6
                                    });
                                })), o.quickBtn.setValue(i);
                            } else D.debug("videoId is not found!");
                        });
                        D.debug("Btn not exists");
                    }).catch(e => {
                        "ABORTED" !== e.message && D.error("waitNodesBySelector error", e);
                    });
                },
                appendShortDownloadButton: function(e, t, o) {
                    var r = this;
                    const i = e.closest("#player-container");
                    i || T({
                        type: "counter",
                        name: "error_before_append_button",
                        help: "Error before append button",
                        labels: {
                            browser: "edge",
                            site: "youtube",
                            page_type: n
                        }
                    });
                    const a = i.parentElement;
                    if (a.querySelector("#savefrom__yt_btn")) return;
                    var s = i.querySelector("#" + B.buttonId);
                    if (s) {
                        if (o) return;
                        s.classList.remove(p.a.onRemoveClassName), s.parentNode && s.parentNode.removeChild(s), 
                        s = null;
                    }
                    T({
                        type: "counter",
                        name: "append_button",
                        help: "Append button",
                        labels: {
                            browser: "edge",
                            site: "youtube",
                            page_type: n
                        }
                    });
                    try {
                        a.querySelector(".overlay.style-scope.ytd-reel-video-renderer").style.overflow = "visible";
                        var l = new this.getShortButton(B._onSelectBtnClick);
                        l.isFirstMenuShow = !0, l.setLoadingState();
                        a.querySelector("#like-button").append(l.node), T({
                            type: "counter",
                            name: "append_button_success",
                            help: "Append button - success",
                            labels: {
                                browser: "edge",
                                site: "youtube",
                                page_type: n
                            }
                        });
                    } catch (e) {
                        console.error("append button error");
                    }
                    let d = null, c = null;
                    return p.a.onRemoveEvent(l.node, (function() {
                        d && (d.abort(), d = null), c && (c.destroy(), c = null), likeButton.parentNode && B.appendShortDownloadButton(likeButton, t, !0);
                    })), l.popupMenu = {
                        offsetTop: -6,
                        offsetRight: -1,
                        parent: l.menuContainer
                    }, d = b.waitNodesBySelector("#movie_player"), d.then(() => {
                        if (Object(v.a)(document.body, l.node)) return I(t, !0).then(e => {
                            var t = e && e.args && e.args.video_id;
                            if (t) {
                                l.node.dataset.sfVideoId = t, l.ytConfig = e, l.videoId = t, l.isPage = 1;
                                var n = [];
                                l.onGetLinksArr = n, n.push((function() {
                                    B.tutorial.show({
                                        target: l.selectBtn,
                                        parent: l.menuContainer,
                                        btnLeftOffset: 12,
                                        btnTopOffset: -6
                                    });
                                })), r.quickBtn.setValue(l);
                            } else D.debug("videoId is not found!");
                        });
                        D.debug("Btn not exists");
                    }).catch(e => {
                        "ABORTED" !== e.message && D.error("waitNodesBySelector error", e);
                    });
                },
                getIdFromLocation: function(e) {
                    e || (e = document.location.href);
                    var t = e.match(/\/watch\?(?:.+&)?v=([\w\-]+)/i);
                    return (t = t && t[1]) || null;
                },
                getIdFromBackgroundImageUrl(e) {
                    const [, t] = /https:\/\/i.ytimg.com\/vi\/(.*?)\//.exec(e);
                    return t || null;
                },
                getIdFromShortsLocation() {
                    const e = /shorts\/(.*?)$/.exec(location.href)[1];
                    return e || null;
                },
                appendNewMobileButton(e, r) {
                    const i = f.a.create("div", {
                        id: B.buttonId,
                        style: {
                            flex: "1 1",
                            minWidth: 0,
                            overflow: "hidden",
                            margin: "-0.7em -0.57em",
                            marginLeft: "0.7em",
                            marginRight: 0,
                            display: "flex"
                        },
                        append: [ f.a.create("button", {
                            style: {
                                padding: ".7em .57em"
                            },
                            append: [ f.a.create("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                },
                                append: [ f.a.create("div", {
                                    style: {
                                        display: "block",
                                        height: "24px",
                                        width: "24px",
                                        background: "url(" + b.svg.getSrc("download", "#757575") + ") center no-repeat",
                                        backgroundSize: "20px"
                                    }
                                }), f.a.create("div", {
                                    style: {
                                        marginTop: "7px",
                                        alignSelf: "center",
                                        minHeight: "1em",
                                        lineHeight: "1em"
                                    },
                                    text: o.a.i18n.getMessage("download")
                                }) ]
                            }) ],
                            on: [ "click", async e => {
                                e.preventDefault(), B.hideMobileMenu();
                                const r = B.getIdFromLocation(), i = B.mobileMenu = b.mobileLightBox.show(o.a.i18n.getMessage("download") + " ...");
                                T({
                                    type: "counter",
                                    name: "extract_links",
                                    help: "Extract links",
                                    labels: {
                                        browser: "edge",
                                        site: "youtube",
                                        page_type: n
                                    }
                                });
                                try {
                                    const e = function(e) {
                                        return JSON.parse(JSON.stringify(e)).map((t, n) => (t.href = t.url, t.title = t.filename, 
                                        t.func = e[n].func, delete t.url, delete t.filename, t));
                                    }(await N.a.createLinkExtractor(n).extractLinks({
                                        mediaId: r,
                                        mediaUrl: location.href,
                                        noDash: !0,
                                        checkSubtitles: !0,
                                        initData: t
                                    }));
                                    i.update(e), T({
                                        type: "counter",
                                        name: "extract_links_success",
                                        help: "Extract links - success",
                                        labels: {
                                            browser: "edge",
                                            site: "youtube",
                                            page_type: n
                                        }
                                    }), D.log("lightbox update");
                                } catch (e) {
                                    i.update(void 0), D.error("getLinks for mobile error", e);
                                }
                            } ]
                        }) ]
                    });
                    p.a.onRemoveEvent(i, (function() {
                        B.hideMobileMenu(), document.body.contains(e) && (e.dataset.sfSkip = "0", B.mobileMutationMode.observer.trigger(e));
                    })), e.appendChild(i);
                },
                appendMobileButton: function(e, t, n) {
                    var r = {};
                    3 === n ? Object.assign(r, {
                        display: "flex",
                        height: "24px",
                        background: "url(" + b.svg.getSrc("download", "#757575") + ") center no-repeat",
                        padding: ".7em .57em",
                        marginLeft: ".7em"
                    }) : 4 === n ? Object.assign(r, {
                        display: "flex",
                        width: "24px",
                        background: "url(" + b.svg.getSrc("download", "#eee") + ") center no-repeat",
                        padding: ".7em .57em",
                        marginLeft: ".7em"
                    }) : 1 === n ? Object.assign(r, {
                        display: "inline-block",
                        height: "28px",
                        width: "18px",
                        marginRight: "20px",
                        background: "url(" + b.svg.getSrc("download", "#757575") + ") center no-repeat",
                        cssFloat: "right"
                    }) : 2 === n && Object.assign(r, {
                        display: "inline-block",
                        height: "38px",
                        width: "18px",
                        marginRight: "12px",
                        background: "url(" + b.svg.getSrc("download", "#757575") + ") center no-repeat",
                        backgroundSize: "20px",
                        cssFloat: "right"
                    });
                    var i = f.a.create("div", {
                        data: {
                            id: e
                        },
                        style: r,
                        on: [ "click", function() {
                            var e = this.dataset.id || B.getIdFromLocation();
                            B.hideMobileMenu();
                            var t = B.mobileMenu = b.mobileLightBox.show(o.a.i18n.getMessage("download") + " ..."), n = function(e) {
                                var n = null;
                                e && e.links && (n = b.popupMenu.prepareLinks.youtube(e.links, e.title || B.getTitleModify())), 
                                t.update(n);
                            }, r = B.responseCache[e];
                            if (r) return n(r);
                            O(e, location.href).then(e => {
                                D.info("getLinks for mPlaylist"), n(e);
                            }, e => {
                                D.error("getLinks for mPlaylist error", e), n(void 0);
                            });
                        } ]
                    });
                    p.a.onRemoveEvent(i, (function() {
                        B.hideMobileMenu(), 3 !== n && 4 !== n || document.body.contains(t) && (t.dataset.sfSkip = "0", 
                        B.mobileMutationMode.observer.trigger(t));
                    }));
                    var a = 'div[id^="koya_child_"]:nth-child(1) > a[href="#"] > span[id^="koya_elem_"]', s = t.lastElementChild;
                    s.querySelector(a) || (s = s.previousElementSibling).querySelector(a) || (s = null), 
                    s && (s = s.nextElementSibling), s ? s.parentNode.insertBefore(i, s) : t.appendChild(i);
                },
                getNewButtonUnderVideo: function(e) {
                    var t = this;
                    const r = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
                    this.node = f.a.create("div", {
                        id: B.buttonId,
                        style: {
                            display: [ "-ms-flexbox", "-webkit-flex", "flex" ],
                            marginLeft: "8px",
                            MsFlexDirection: "row",
                            WebkitFlexDirection: "row",
                            flexDirection: "row",
                            MsFlexAlign: "center",
                            WebkitAlignItems: "center",
                            alignItems: "center",
                            MsFlexPack: "center",
                            WebkitJustifyContent: "center",
                            justifyContent: "center",
                            padding: "0 8px 0 0"
                        },
                        append: [ this.menuContainer = f.a.create("div", {
                            style: {
                                position: "relative"
                            }
                        }), this.quickBtn = f.a.create("a", {
                            class: "sf-quick-dl-btn",
                            on: [ [ "click", () => {
                                T({
                                    type: "counter",
                                    name: "click_download_button",
                                    help: "Click download button",
                                    labels: {
                                        browser: "edge",
                                        site: "youtube",
                                        page_type: n
                                    }
                                }), D.log("track click greenBtn"), o.a.sendMessage({
                                    action: "track",
                                    t: "event",
                                    tid: "G-L0GP1RQSBJ",
                                    ec: "menu",
                                    el: "menu",
                                    ea: "download"
                                });
                            } ], [ "mouseover", e => {
                                if (r) {
                                    if (!e.altKey && !e.ctrlKey) return e.preventDefault(), void Object(E.b)(this.quickBtn, {
                                        content: o.a.i18n.getMessage("downloadTitle"),
                                        defaultWidth: 400,
                                        defaultHeight: 60
                                    });
                                    Object(E.a)(this.quickBtn, {
                                        content: o.a.i18n.getMessage("downloadTitle"),
                                        defaultWidth: 400,
                                        defaultHeight: 60
                                    });
                                }
                            } ] ],
                            style: {
                                display: "inline-block",
                                fontSize: "inherit",
                                height: "23px",
                                border: "1px solid #00B75A",
                                borderRadius: "3px",
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                                paddingLeft: "28px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                position: "relative",
                                lineHeight: "22px",
                                textDecoration: "none",
                                zIndex: 1,
                                color: "#fff"
                            },
                            append: [ f.a.create("i", {
                                style: {
                                    position: "absolute",
                                    display: "inline-block",
                                    left: "6px",
                                    top: "3px",
                                    backgroundImage: "url(" + b.svg.getSrc("download", "#ffffff") + ")",
                                    backgroundSize: "12px",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    width: "16px",
                                    height: "16px"
                                }
                            }), f.a.create("span", {
                                class: "sf-btn-name",
                                style: {
                                    paddingRight: "12px"
                                },
                                text: o.a.i18n.getMessage("download")
                            }) ]
                        }), this.quickBtnStyle = f.a.create("style", {
                            text: Object(d.a)({
                                selector: "#" + B.buttonId,
                                style: {
                                    fontFamily: "Roboto, Arial, sans-serif",
                                    fontSize: "13px"
                                },
                                append: [ {
                                    "button::-moz-focus-inner": {
                                        padding: 0,
                                        margin: 0
                                    },
                                    ".sf-quick-dl-btn": {
                                        backgroundColor: "#00B75A"
                                    },
                                    ".sf-quick-dl-btn:hover": {
                                        backgroundColor: "rgb(0, 163, 80)"
                                    },
                                    ".sf-quick-dl-btn:active": {
                                        backgroundColor: "rgb(0, 151, 74)"
                                    }
                                }, {
                                    media: "@media screen and (max-width: 1293px), screen and (max-height: 768px)",
                                    append: {
                                        ".sf-quick-dl-btn .sf-btn-name": {
                                            display: "none"
                                        }
                                    }
                                } ]
                            })
                        }), this.selectBtn = f.a.create("button", {
                            style: {
                                position: "relative",
                                display: "inline-block",
                                marginLeft: "-2px",
                                fontSize: "inherit",
                                height: "24px",
                                paddingRight: "21px",
                                backgroundColor: "#F8F8F8",
                                border: "1px solid #CCCCCC",
                                borderRadius: "3px",
                                borderTopLeftRadius: "0",
                                borderBottomLeftRadius: "0",
                                cursor: "pointer",
                                color: "#9B9B9B",
                                zIndex: 0,
                                verticalAlign: "middle",
                                boxSizing: "border-box",
                                lineHeight: o.a.isSafari ? "21px" : "22px"
                            },
                            on: [ "mousedown", function(n) {
                                return e.call(this, {
                                    btnObj: t
                                }, n);
                            } ],
                            append: [ this.selectBtnIcon = f.a.create("i", {
                                style: {
                                    position: "absolute",
                                    display: "inline-block",
                                    top: "9px",
                                    right: "6px",
                                    border: "5px solid #868282",
                                    borderBottomColor: "transparent",
                                    borderLeftColor: "transparent",
                                    borderRightColor: "transparent"
                                }
                            }) ]
                        }) ]
                    }), this.node.classList.add(p.a.onRemoveClassName);
                    var i = function(e) {
                        var n = "object" == typeof e ? e : document.createTextNode(e);
                        n.style.marginLeft = 0;
                        var o = t.selectBtn.firstChild;
                        o === t.selectBtnIcon ? t.selectBtn.insertBefore(n, o) : t.selectBtn.replaceChild(n, o);
                    };
                    this.setQuality = i, this.setLoadingState = function() {
                        i(f.a.create("img", {
                            src: b.svg.getSrc("info", "#333333"),
                            style: {
                                width: "14px",
                                height: "14px",
                                marginLeft: "6px",
                                verticalAlign: "middle",
                                top: o.a.isSafari ? "-3px" : "-1px",
                                position: "relative"
                            }
                        }));
                    };
                },
                getButtonUnderVideo: function(e) {
                    var t, n, r = null, i = f.a.create("div", {
                        id: B.buttonId,
                        style: {
                            display: "inline-block",
                            marginLeft: "10px",
                            verticalAlign: "middle"
                        },
                        append: [ n = f.a.create("a", {
                            class: "sf-quick-dl-btn",
                            style: {
                                display: "inline-block",
                                fontSize: "inherit",
                                height: "22px",
                                border: "1px solid #00B75A",
                                borderRadius: "3px",
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                                paddingLeft: "28px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                position: "relative",
                                lineHeight: "22px",
                                textDecoration: "none",
                                zIndex: 1,
                                color: "#fff"
                            },
                            href: "#",
                            append: [ f.a.create("i", {
                                style: {
                                    position: "absolute",
                                    display: "inline-block",
                                    left: "6px",
                                    top: "3px",
                                    backgroundImage: "url(" + b.svg.getSrc("download", "#ffffff") + ")",
                                    backgroundSize: "12px",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    width: "16px",
                                    height: "16px"
                                }
                            }), f.a.create("span", {
                                class: "sf-btn-name",
                                style: {
                                    paddingRight: "12px"
                                },
                                text: o.a.i18n.getMessage("download")
                            }) ]
                        }), f.a.create("style", {
                            text: Object(d.a)({
                                selector: "#" + B.buttonId,
                                append: [ {
                                    "button::-moz-focus-inner": {
                                        padding: 0,
                                        margin: 0
                                    },
                                    ".sf-quick-dl-btn": {
                                        backgroundColor: "#00B75A"
                                    },
                                    ".sf-quick-dl-btn:hover": {
                                        backgroundColor: "rgb(0, 163, 80)"
                                    },
                                    ".sf-quick-dl-btn:active": {
                                        backgroundColor: "rgb(0, 151, 74)"
                                    }
                                }, {
                                    media: "@media screen and (max-width: 1293px)",
                                    append: {
                                        ".sf-quick-dl-btn .sf-btn-name": {
                                            display: "none"
                                        }
                                    }
                                } ]
                            })
                        }), r = f.a.create("button", {
                            style: {
                                position: "relative",
                                display: "inline-block",
                                marginLeft: "-2px",
                                fontSize: "inherit",
                                height: "24px",
                                paddingRight: "21px",
                                backgroundColor: "#F8F8F8",
                                border: "1px solid #CCCCCC",
                                borderRadius: "3px",
                                borderTopLeftRadius: "0",
                                borderBottomLeftRadius: "0",
                                cursor: "pointer",
                                color: "#9B9B9B",
                                zIndex: 0,
                                verticalAlign: "middle",
                                boxSizing: "border-box",
                                lineHeight: "22px"
                            },
                            on: [ "mousedown", e ],
                            append: [ t = f.a.create("i", {
                                style: {
                                    position: "absolute",
                                    display: "inline-block",
                                    top: "9px",
                                    right: "6px",
                                    border: "5px solid #868282",
                                    borderBottomColor: "transparent",
                                    borderLeftColor: "transparent",
                                    borderRightColor: "transparent"
                                }
                            }) ]
                        }) ]
                    });
                    i.classList.add(p.a.onRemoveClassName);
                    var a = function(e) {
                        var n = "object" == typeof e ? e : document.createTextNode(e), o = r.firstChild;
                        o === t ? r.insertBefore(n, o) : r.replaceChild(n, o);
                    };
                    return {
                        node: i,
                        selectBtn: r,
                        quickBtn: n,
                        setQuality: a,
                        setLoadingState: function() {
                            a(f.a.create("img", {
                                src: b.svg.getSrc("info", "#333333"),
                                style: {
                                    width: "14px",
                                    height: "14px",
                                    marginLeft: "6px",
                                    verticalAlign: "middle",
                                    top: "-1px",
                                    position: "relative"
                                }
                            }));
                        }
                    };
                },
                getShortButton: function(e) {
                    var t = this;
                    const r = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
                    this.node = f.a.create("div", {
                        id: B.buttonId,
                        style: {
                            display: [ "-ms-flexbox", "-webkit-flex", "flex" ],
                            marginLeft: "8px",
                            MsFlexDirection: "column",
                            WebkitFlexDirection: "column",
                            flexDirection: "column",
                            MsFlexAlign: "center",
                            WebkitAlignItems: "center",
                            alignItems: "center",
                            MsFlexPack: "center",
                            WebkitJustifyContent: "center",
                            justifyContent: "center",
                            padding: "0 8px 0 0",
                            marginTop: "16px"
                        },
                        append: [ this.menuContainer = f.a.create("div", {
                            style: {
                                position: "relative"
                            }
                        }), this.quickBtn = f.a.create("a", {
                            class: "sf-quick-dl-btn",
                            on: [ [ "click", () => {
                                T({
                                    type: "counter",
                                    name: "click_download_button",
                                    help: "Click download button",
                                    labels: {
                                        browser: "edge",
                                        site: "youtube",
                                        page_type: n
                                    }
                                }), D.log("track click greenBtn"), o.a.sendMessage({
                                    action: "track",
                                    t: "event",
                                    tid: "G-L0GP1RQSBJ",
                                    ec: "menu",
                                    el: "menu",
                                    ea: "download"
                                });
                            } ], [ "mouseover", e => {
                                if (r) {
                                    if (!e.altKey && !e.ctrlKey) return e.preventDefault(), void Object(E.b)(this.quickBtn, {
                                        content: o.a.i18n.getMessage("downloadTitle"),
                                        defaultWidth: 400,
                                        defaultHeight: 60
                                    });
                                    Object(E.a)(this.quickBtn, {
                                        content: o.a.i18n.getMessage("downloadTitle"),
                                        defaultWidth: 400,
                                        defaultHeight: 60
                                    });
                                }
                            } ] ],
                            style: {
                                display: "inline-block",
                                fontSize: "inherit",
                                height: "22px",
                                border: "1px solid #606060",
                                borderRadius: "3px",
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0,
                                paddingLeft: "28px",
                                marginBottom: "10px",
                                cursor: "pointer",
                                verticalAlign: "middle",
                                position: "relative",
                                lineHeight: "22px",
                                textDecoration: "none",
                                zIndex: 1,
                                color: "#fff"
                            },
                            append: [ f.a.create("i", {
                                style: {
                                    position: "absolute",
                                    display: "inline-block",
                                    left: "6px",
                                    top: "3px",
                                    backgroundImage: "url(" + b.svg.getSrc("download", "#ffffff") + ")",
                                    backgroundSize: "12px",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    width: "16px",
                                    height: "16px"
                                }
                            }) ]
                        }), this.quickBtnStyle = f.a.create("style", {
                            text: Object(d.a)({
                                selector: "#" + B.buttonId,
                                style: {
                                    fontFamily: "Roboto, Arial, sans-serif",
                                    fontSize: "13px"
                                },
                                append: [ {
                                    "button::-moz-focus-inner": {
                                        padding: 0,
                                        margin: 0
                                    },
                                    ".sf-quick-dl-btn": {
                                        border: "1px solid #606060",
                                        backgroundColor: "#606060"
                                    },
                                    ".sf-quick-dl-btn:hover": {
                                        border: "1px solid #00B75A",
                                        backgroundColor: "#00B75A"
                                    },
                                    ".sf-quick-dl-btn:active": {
                                        backgroundColor: "rgb(0, 151, 74)"
                                    }
                                } ]
                            })
                        }), this.selectBtn = f.a.create("button", {
                            style: {
                                position: "relative",
                                display: "inline-block",
                                marginLeft: "-2px",
                                fontSize: "inherit",
                                height: "24px",
                                paddingRight: "21px",
                                backgroundColor: "#F8F8F8",
                                border: "1px solid #CCCCCC",
                                borderRadius: "3px",
                                borderTopLeftRadius: "0",
                                borderBottomLeftRadius: "0",
                                cursor: "pointer",
                                color: "#9B9B9B",
                                zIndex: 0,
                                verticalAlign: "middle",
                                boxSizing: "border-box",
                                lineHeight: o.a.isSafari ? "21px" : "22px"
                            },
                            on: [ "mousedown", function(n) {
                                return e.call(this, {
                                    btnObj: t
                                }, n);
                            } ],
                            append: [ this.selectBtnIcon = f.a.create("i", {
                                style: {
                                    position: "absolute",
                                    display: "inline-block",
                                    top: "9px",
                                    right: "6px",
                                    border: "5px solid #868282",
                                    borderBottomColor: "transparent",
                                    borderLeftColor: "transparent",
                                    borderRightColor: "transparent"
                                }
                            }) ]
                        }) ]
                    }), this.node.classList.add(p.a.onRemoveClassName);
                    var i = function(e) {
                        var n = "object" == typeof e ? e : document.createTextNode(e);
                        n.style.marginLeft = 0;
                        var o = t.selectBtn.firstChild;
                        o === t.selectBtnIcon ? t.selectBtn.insertBefore(n, o) : t.selectBtn.replaceChild(n, o);
                    };
                    this.setQuality = i, this.setLoadingState = function() {
                        i(f.a.create("img", {
                            src: b.svg.getSrc("info", "#333333"),
                            style: {
                                width: "14px",
                                height: "14px",
                                marginLeft: "6px",
                                verticalAlign: "middle",
                                top: o.a.isSafari ? "-3px" : "-1px",
                                position: "relative"
                            }
                        }));
                    };
                },
                titleChangeObserver: null,
                playerStateChangeObserver: null,
                observeFrameVideoChange: function(e) {
                    var t = this;
                    if (y.a.isAvailable()) {
                        var n = document.querySelector(".ytp-title-link");
                        n && (this.titleChangeObserver && this.titleChangeObserver.stop(), this.titleChangeObserver = new m.a({
                            attrs: [ {
                                name: "href",
                                callback: function(n) {
                                    var o = n.oldValue && B.getIdFromLocation(n.oldValue), r = n.value && B.getIdFromLocation(n.value);
                                    o !== r && B.video_id !== r && (B.video_id = r, B.frameQualityDetected && (e.link = null, 
                                    e.setLoadingState(), t.quickBtn.setValue(e)));
                                }
                            } ],
                            target: n
                        }));
                        var o = document.querySelector(".html5-video-player");
                        if (o) {
                            var r = null, i = /(\s|^)ytp-autohide(\s|$)/;
                            this.playerStateChangeObserver && this.playerStateChangeObserver.stop(), this.playerStateChangeObserver = new m.a({
                                attrs: [ {
                                    name: "class",
                                    callback(t) {
                                        const n = i.test(t.oldValue), o = i.test(t.value);
                                        !n && o ? (clearTimeout(r), r = setTimeout((function() {
                                            e.lockHide || e.container.classList.add("sf-hide-ui");
                                        }), 100)) : n && !o && (clearTimeout(r), e.container.classList.remove("sf-hide-ui"));
                                    }
                                } ],
                                target: o
                            });
                        }
                    }
                },
                appendFrameButton: function() {
                    if (!(document.body.clientWidth < 220 || document.body.clientHeight < 150)) {
                        var e = B, t = !0, n = b.frameMenu.getBtn({
                            btnId: "sfYtFrameBtn",
                            containerStyle: {
                                top: "40px",
                                right: "20px"
                            },
                            on: [ [ "mousedown", function(t) {
                                t.stopPropagation(), 2 === t.button && (e.onFrameMouseEnterBind && (p.a.off(document.body, "mouseenter", e.onFrameMouseEnterBind), 
                                p.a.off(document.body, "mouseleave", e.onFrameMouseLeaveBind), e.onFrameMouseEnterBind = null, 
                                e.onFrameMouseLeaveBind = null), e.titleChangeObserver && (e.titleChangeObserver.stop(), 
                                e.titleChangeObserver = null), e.playerStateChangeObserver && (e.playerStateChangeObserver.stop(), 
                                e.playerStateChangeObserver = null), e.hideCurrentMenu(), n.container.parentNode && n.container.parentNode.removeChild(n.container));
                            } ] ],
                            onSelectBtn: [ "mousedown", function(r) {
                                if (!(r.button > 0)) {
                                    r.stopPropagation(), r.preventDefault();
                                    var i = e.video_id;
                                    if (e.currentMenu) B.hideCurrentMenu(); else {
                                        var a = e.currentMenu = b.frameMenu.getMenu(this.parentNode, o.a.i18n.getMessage("download") + " ...", "sf-popupMenu", {
                                            container: n.container,
                                            onShow: function() {
                                                n.node.classList.add("sf-over"), t || (t = !1);
                                            },
                                            onHide: function() {
                                                e.currentMenu = null, n.node.classList.remove("sf-over");
                                            },
                                            onItemClick: function(e, t) {
                                                B.onMenuItemClick(t, {
                                                    isFrameItem: 1,
                                                    videoId: i
                                                });
                                            }
                                        }), s = function(e) {
                                            var t = b.popupMenu.prepareLinks.youtube(e.links, e.title, e.subtitles, {
                                                ummyVid: 136
                                            });
                                            a.update(t);
                                        }, l = e.responseCache[i];
                                        if (l) return s(l);
                                        O(i, location.href, {
                                            checkSubtitles: !0
                                        }).then(t => {
                                            e.responseCache[i] = t, D.log("Links for frame received"), s(t);
                                        }, e => {
                                            D.error("Get links for frame error", e), a.update(o.a.i18n.getMessage("noLinksFound"));
                                        });
                                    }
                                }
                            } ]
                        });
                        n.setLoadingState(), n.container = f.a.create("div", {
                            class: "sf-btn-ctr",
                            append: n.node
                        }), document.body.appendChild(n.container);
                        p.a.on(n.node, "mouseenter", (function t() {
                            p.a.off(n.node, "mouseenter", t), e.frameQualityDetected || (e.frameQualityDetected = !0, 
                            e.quickBtn.setValue(n));
                        })), p.a.one(document, "mouseenter", (function() {
                            e.onFrameMouseEnter(n);
                        })), p.a.on(n.container, "mouseenter", (function() {
                            n.lockHide = !0;
                        })), p.a.on(n.container, "mouseleave", (function() {
                            n.lockHide = !1;
                        })), n.node.appendChild(f.a.create("style", {
                            text: Object(d.a)([ {
                                selector: [ "body:hover .sf-btn-ctr:not(.sf-hide-ui) #sfYtFrameBtn", "body:hover .sf-btn-ctr:not(.sf-hide-ui) .sf-popupMenu" ],
                                style: {
                                    display: "block"
                                }
                            } ])
                        })), this.onFrameMouseEnterBind && (p.a.off(document.body, "mouseenter", this.onFrameMouseEnterBind), 
                        p.a.off(document.body, "mouseleave", this.onFrameMouseLeaveBind)), this.onFrameMouseEnterBind = this.onFrameMouseEnter.bind(this, n), 
                        this.onFrameMouseLeaveBind = this.onFrameMouseLeave.bind(this, n), p.a.on(document.body, "mouseenter", this.onFrameMouseEnterBind), 
                        p.a.on(document.body, "mouseleave", this.onFrameMouseLeaveBind), this.observeFrameVideoChange(n);
                    }
                },
                frameQualityDetected: !1,
                frameQualityTimer: null,
                onFrameMouseEnterBind: null,
                onFrameMouseLeaveBind: null,
                onFrameMouseEnter: function(e) {
                    var t = this;
                    this.frameQualityDetected || (clearTimeout(this.frameQualityTimer), this.frameQualityTimer = setTimeout((function() {
                        t.frameQualityDetected || (t.frameQualityDetected = !0, t.quickBtn.setValue(e));
                    }), 500));
                },
                onFrameMouseLeave: function(e) {
                    this.frameQualityDetected || clearTimeout(this.frameQualityTimer);
                },
                getTitle: function() {
                    var e = document.getElementById("watch-headline-title");
                    if (e) return e.textContent;
                    for (var t = document.getElementsByTagName("meta"), n = 0; n < t.length; n++) {
                        var o = t[n].getAttribute("name");
                        if (o && "title" == o.toLowerCase()) return t[n].getAttribute("content");
                    }
                    return S || B.isMobile ? document.title.replace(/ - YouTube$/, "") : "";
                },
                getTitleModify: function() {
                    var e = B.getTitle();
                    return e && (e = M(e)), e;
                },
                onMenuItemClick: function(e, t) {
                    t = t || {}, e.format || o.a.sendMessage({
                        action: "track",
                        t: "event",
                        ec: "youtube",
                        ea: "new_format",
                        el: e.itag + " " + t.videoId
                    });
                },
                onDlBtnClick: function(e, t, n) {
                    if (n = n || {}, !t) return e.preventDefault(), e.stopPropagation(), void p.a.trigger(this.parentNode.lastChild, "mousedown");
                    B.onMenuItemClick(t, n), "ummy" !== t.quality && "muxer" !== t.itag && t.forceDownload && b.downloadOnClick(e);
                },
                quickBtn: {
                    setValueInSelectBtn: function(e, t) {
                        "object" != typeof t && (t = document.createTextNode(t));
                        var n = e.selectBtn.firstChild;
                        n === e.selectBtn.lastChild ? e.selectBtn.insertBefore(t, n) : e.selectBtn.replaceChild(t, n);
                    },
                    getBestItem: e => o.a.callFn("auth.isAuth").then(t => {
                        const n = e.find(e => {
                            const n = e.prop.noAudio || e.prop.noVideo;
                            return !("pro" === e.prop.itag && !t) && !n && "televzr" !== e.prop.itag && !e.prop.isHidden;
                        });
                        return n ? n.prop : void 0;
                    }),
                    bindDlBtn: function(e) {
                        var t = e.quickBtn;
                        e.quickBtnEvent && t.removeEventListener("click", e.quickBtnEvent), t.addEventListener("click", e.quickBtnEvent = function(t) {
                            e.link.func && e.link.func(t), t.stopPropagation(), e.link && B.currentMenu && B.hideCurrentMenu();
                            const n = {
                                videoId: e.videoId || B.video_id,
                                links: e.links
                            };
                            e.isPage ? n.isPage = 1 : n.isFrame = 1, B.onDlBtnClick.call(this, t, e.link, n);
                        });
                    },
                    setBestValue: function(e, t) {
                        var n = e.quickBtn;
                        e.link = t;
                        var r = t.quality;
                        if ("pro" === t.itag) {
                            r = {
                                2160: "4K",
                                4320: "8K",
                                hls: "HLS",
                                1440: "QHD"
                            }[t.quality] || t.quality;
                        } else t.noVideo || (r = parseInt(r));
                        t["3d"] && (r = "3D " + r), t.sFps && (r += " " + (t.fps || 60));
                        var i = f.a.create("span", {
                            text: r,
                            style: {
                                marginLeft: "6px",
                                verticalAlign: "bottom"
                            }
                        });
                        e.setQuality ? e.setQuality(i) : this.setValueInSelectBtn(e, i);
                        var a = [ t.format, r ];
                        if (t.noAudio && a.push(o.a.i18n.getMessage("withoutAudio")), a = a.join(" "), n.title = a, 
                        n.href = t.href, t.title && t.format) {
                            var s = (t.ext || t.format || "").toLowerCase();
                            s && (s = "." + s), n.setAttribute("download", g.a.modify(t.title + s));
                        }
                    },
                    setValue: async function(e) {
                        var o = this;
                        this.bindDlBtn(e);
                        var r = e.videoId || B.video_id;
                        r || o.setValueInSelectBtn(e, ""), T({
                            type: "counter",
                            name: "extract_links",
                            help: "Extract links",
                            labels: {
                                browser: "edge",
                                site: "youtube",
                                page_type: n
                            }
                        });
                        try {
                            const i = function(e) {
                                return JSON.parse(JSON.stringify(e)).map((t, n) => (t.href = t.url, t.title = t.filename, 
                                t.func = e[n].func, delete t.url, delete t.filename, {
                                    prop: t
                                }));
                            }(await N.a.createLinkExtractor(n).extractLinks({
                                mediaId: r,
                                mediaUrl: location.href,
                                noDash: !0,
                                checkSubtitles: !0,
                                initData: t
                            }));
                            e.onGetLinksArr && e.onGetLinksArr.forEach((function(e) {
                                return e();
                            })), o.getBestItem(i).then(t => {
                                t ? o.setBestValue(e, t) : o.setValueInSelectBtn(e, "");
                            }), T({
                                type: "counter",
                                name: "extract_links_success",
                                help: "Extract links - success",
                                labels: {
                                    browser: "edge",
                                    site: "youtube",
                                    page_type: n
                                }
                            });
                        } catch (t) {
                            return this.setValueInSelectBtn(e, "");
                        }
                    }
                },
                videoFeed: {
                    style: null,
                    hrefIdPattern: /[\?&]v=([^&]+)/,
                    shortsPattern: /\/shorts\/([\w-]+)(?:\?|$)/,
                    imgIdPattern: /vi[^\/]*\/([^\/]+)/,
                    rList: [ /\/playlist\?/, /(user|channel|c|show)\/[^\/]+(\/feed|\/featured|\/videos|$)/i, /\/(feed)\/(trending|subscriptions|history)/i ],
                    testUrl: function(e) {
                        return this.rList.some((function(t) {
                            return t.test(e);
                        }));
                    },
                    injectStyle: function() {
                        this.style ? !this.style.parentNode && document.head.appendChild(this.style) : (this.style = f.a.create("style", {
                            class: "sf-feed-style",
                            text: Object(d.a)([ {
                                selector: [ ".contains-percent-duration-watched .sf-feed-btn" ],
                                style: {
                                    bottom: "6px"
                                }
                            }, {
                                selector: [ "a > .sf-feed-btn", "div > .sf-feed-btn", "span > .sf-feed-btn" ],
                                style: {
                                    display: "none",
                                    border: "1px solid #d3d3d3",
                                    width: "20px",
                                    height: "20px",
                                    padding: 0,
                                    position: "absolute",
                                    right: "26px",
                                    bottom: "2px",
                                    borderRadius: "2px",
                                    background: "url(" + b.svg.getSrc("download", "#777777") + ") center no-repeat #F8F8F8",
                                    backgroundSize: "12px",
                                    cursor: "pointer"
                                }
                            }, {
                                selector: [ "a > .sf-feed-btn.style-2" ],
                                style: {
                                    border: 0,
                                    top: 0,
                                    left: 0,
                                    margin: "4px",
                                    padding: "2px 4px",
                                    background: "url(" + b.svg.getSrc("download", "#FFF") + ") center no-repeat #000",
                                    backgroundSize: "14px",
                                    opacity: ".8"
                                }
                            }, {
                                selector: [ "a > .sf-feed-btn:hover", "div > .sf-feed-btn:hover", "span > .sf-feed-btn:hover" ],
                                style: {
                                    background: "url(" + b.svg.getSrc("download", "#00B75A") + ") center no-repeat #F8F8F8",
                                    backgroundSize: "12px"
                                }
                            }, {
                                selector: [ "a > .sf-feed-btn.style-2:hover" ],
                                style: {
                                    border: 0,
                                    top: 0,
                                    left: 0,
                                    margin: "4px",
                                    padding: "2px 4px",
                                    background: "url(" + b.svg.getSrc("download", "#00B75A") + ") center no-repeat #000",
                                    backgroundSize: "14px",
                                    opacity: ".8"
                                }
                            }, {
                                selector: [ "a > .sf-feed-btn:active", "div > .sf-feed-btn:active", "span > .sf-feed-btn:active" ],
                                style: {
                                    outline: 0,
                                    boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.125)"
                                }
                            }, {
                                selector: [ "a:hover > .sf-feed-btn", "div:hover > .sf-feed-btn", "span:hover > .sf-feed-btn" ],
                                style: {
                                    display: "block"
                                }
                            }, {
                                selector: [ "ytd-menu-renderer.style-scope.ytd-watch-metadata" ],
                                style: {
                                    overflowY: "visible !important"
                                }
                            } ])
                        }), document.head.appendChild(this.style));
                    },
                    rmBtn: function() {
                        for (var e, t = document.querySelectorAll(".sf-feed-btn"), n = 0; e = t[n]; n++) e.parentNode.removeChild(e);
                        [ "sfBtn", "sfSkip" ].forEach((function(o) {
                            var r = Object(l.a)(o);
                            for (t = document.querySelectorAll("[" + r + "]"), n = 0; e = t[n]; n++) e.removeAttribute(r);
                        }));
                    },
                    getBtnNode: function(e, r) {
                        var i = [ "sf-feed-btn" ];
                        return r && i.push("style-" + r), f.a.create("i", {
                            class: i,
                            on: [ "click", async function(r) {
                                r.preventDefault(), r.stopPropagation();
                                var i = this;
                                if (B.currentMenu && B.currentMenu.isShow) B.hideCurrentMenu(); else {
                                    T({
                                        type: "counter",
                                        name: "show_menu",
                                        help: "Show menu",
                                        labels: {
                                            browser: "edge",
                                            site: "youtube",
                                            page_type: n
                                        }
                                    });
                                    var a = e, s = i.parentNode;
                                    if (s && "A" === s.tagName && "thumbnail" === s.id) {
                                        var l = B.videoFeed.hrefIdPattern.exec(s.href);
                                        l && (a = l[1]);
                                    }
                                    var d = document.querySelector("#home-page-skeleton.hidden"), c = B.currentMenu = b.popupMenu.quickInsert(i, o.a.i18n.getMessage("download") + " ...", "sf-popupMenu", {
                                        offsetTop: d ? 54 : 0,
                                        onShow: function() {
                                            p.a.onRemoveEvent(i, B.hideCurrentMenu);
                                        },
                                        onHide: function() {
                                            p.a.offRemoveEvent(i, B.hideCurrentMenu);
                                        },
                                        onItemClick: function(e, t) {
                                            B.onMenuItemClick(t, {
                                                isFeedItem: 1,
                                                videoId: a
                                            });
                                        }
                                    });
                                    T({
                                        type: "counter",
                                        name: "extract_links",
                                        help: "Extract links",
                                        labels: {
                                            browser: "edge",
                                            site: "youtube",
                                            page_type: n
                                        }
                                    });
                                    try {
                                        const e = await N.a.createLinkExtractor(n).extractLinks({
                                            mediaId: a,
                                            mediaUrl: location.href,
                                            noDash: !0,
                                            checkSubtitles: !0,
                                            initData: t
                                        });
                                        D.log("get links for videoFeed");
                                        const o = function(e) {
                                            return JSON.parse(JSON.stringify(e)).map((t, n) => (t.href = t.url, t.title = t.filename, 
                                            t.func = e[n].func, delete t.url, delete t.filename, t));
                                        }(e);
                                        c.update(o), T({
                                            type: "counter",
                                            name: "extract_links_success",
                                            help: "Extract links - success",
                                            labels: {
                                                browser: "edge",
                                                site: "youtube",
                                                page_type: n
                                            }
                                        });
                                    } catch (e) {
                                        D.error("get links for videoFeed err", e), c.update(o.a.i18n.getMessage("noLinksFound"));
                                    }
                                }
                            } ]
                        });
                    }
                },
                downloadPlaylist: function() {
                    const e = e => {
                        const t = [], n = e.querySelectorAll("ytd-browse:not([hidden]) #contents img[src]#img"), o = B.videoFeed.imgIdPattern;
                        for (let e, r = 0; e = n[r]; r++) {
                            const n = e.src.match(o);
                            n && (-1 === t.indexOf(n[1]) && t.push(n[1]));
                        }
                        const r = e.querySelectorAll("*[data-video-id]");
                        for (let e, n = 0; e = r[n]; n++) {
                            const n = e.dataset.videoId;
                            -1 === t.indexOf(n) && t.push(n);
                        }
                        return t;
                    };
                    const t = (e, t, n, o) => {
                        var r = !1, i = {}, a = 0, s = 0, l = e.length, d = void 0;
                        "audio" === t ? (d = [ "audio" ], t = void 0) : (d = [ "video" ], t = parseInt(t) || void 0);
                        var c = function c() {
                            if (!r) {
                                var u = e[a];
                                if (void 0 === u) return 0 === s ? o(i) : void 0;
                                a++, s++, ((e, t, n, o) => {
                                    const r = -1 !== n.indexOf("audio");
                                    O(e, location.href, {
                                        noDash: r
                                    }).then(e => {
                                        let r = b.popupMenu.prepareLinks.youtube(e.links, e.title);
                                        r = b.popupMenu.sortMenuItems(r, {
                                            noProp: !0,
                                            maxSize: t,
                                            minSize: 2,
                                            typeList: n
                                        }), o(r);
                                    }).catch(e => {
                                        D.error("Get yt links for playlist error", e), o(void 0);
                                    });
                                })(u, t, d, (function(e) {
                                    e && (e = e.filter(e => ![ "televzr", "ummy", "pro", "muxer" ].includes(e.itag)));
                                    var t = e ? e[0] : void 0;
                                    if (t) {
                                        var o = (t.ext || t.format || "").toLowerCase();
                                        o && (o = "." + o);
                                        var r = g.a.modify(t.title + o);
                                        i[u] = {
                                            url: t.href,
                                            title: t.title,
                                            filename: r
                                        };
                                    }
                                    n(a, l), s--, c();
                                }));
                            }
                        };
                        return c(), c(), {
                            abort: function() {
                                r = !0;
                            }
                        };
                    };
                    return function() {
                        var n = !1, r = void 0, i = function(e) {
                            var t, n, r, i, a, s = b.playlist.getInfoPopupTemplate();
                            o.a.sendMessage({
                                action: "getWarningIcon",
                                type: "playlist",
                                color: "#77D1FA"
                            }, (function(e) {
                                s.icon.style.backgroundImage = "url(" + e + ")";
                            })), f.a.create(s.textContainer, {
                                append: [ f.a.create("p", {
                                    text: o.a.i18n.getMessage("playlist"),
                                    style: {
                                        color: "#0D0D0D",
                                        fontSize: "20px",
                                        marginBottom: "11px",
                                        marginTop: "13px"
                                    }
                                }), n = f.a.create("div", {
                                    append: [ f.a.create("p", {
                                        text: o.a.i18n.getMessage("quality") + ":",
                                        style: {
                                            color: "#000000",
                                            fontSize: "14px",
                                            marginBottom: "13px",
                                            lineHeight: "24px"
                                        },
                                        append: [ r = f.a.create("select", {
                                            style: {
                                                width: "75px",
                                                marginLeft: "5px"
                                            },
                                            append: [ "720", "480", "360", "240", "Audio" ].map(e => f.a.create("option", {
                                                text: e,
                                                value: e.toLowerCase()
                                            }))
                                        }) ]
                                    }), f.a.create("p", {
                                        text: o.a.i18n.getMessage("qualityNote"),
                                        style: {
                                            color: "#868686",
                                            fontSize: "14px",
                                            lineHeight: "24px"
                                        }
                                    }) ]
                                }), t = f.a.create("p", {
                                    text: "",
                                    style: {
                                        color: "#868686",
                                        fontSize: "14px",
                                        lineHeight: "24px"
                                    }
                                }) ]
                            }), f.a.create(s.buttonContainer, {
                                append: [ a = f.a.create("button", {
                                    text: o.a.i18n.getMessage("cancel"),
                                    style: {
                                        height: "27px",
                                        width: "118px",
                                        backgroundColor: "#ffffff",
                                        border: "1px solid #9e9e9e",
                                        margin: "12px",
                                        marginBottom: "11px",
                                        marginRight: "4px",
                                        borderRadius: "5px",
                                        fontSize: "14px",
                                        cursor: "pointer"
                                    }
                                }), i = f.a.create("button", {
                                    text: o.a.i18n.getMessage("continue"),
                                    style: {
                                        height: "27px",
                                        width: "118px",
                                        backgroundColor: "#ffffff",
                                        border: "1px solid #9e9e9e",
                                        margin: "12px",
                                        marginBottom: "11px",
                                        marginRight: "8px",
                                        borderRadius: "5px",
                                        fontSize: "14px",
                                        cursor: "pointer"
                                    }
                                }) ]
                            });
                            var l = b.popupDiv(s.body, "pl_progress_popup", void 0, void 0, e);
                            return {
                                qualitySelect: function(e) {
                                    t.style.display = "none", s.buttonContainer.style.display = "block", n.style.display = "block", 
                                    i.addEventListener("click", (function() {
                                        e(r.value);
                                    })), a.addEventListener("click", (function() {
                                        p.a.trigger(l, "kill");
                                    }));
                                },
                                onPrepare: function(e) {
                                    t.style.display = "block", s.buttonContainer.style.display = "none", n.style.display = "none", 
                                    t.textContent = e;
                                },
                                onProgress: function(e, n) {
                                    t.textContent = o.a.i18n.getMessage("vkFoundFiles").replace("%d", e) + " " + o.a.i18n.getMessage("vkFoundOf") + " " + n;
                                },
                                onReady: function(e, t) {
                                    p.a.trigger(l, "kill"), w ? b.downloadList.showBeforeDownloadPopup(e, {
                                        type: "playlist",
                                        folderName: t
                                    }) : b.playlist.popupPlaylist(e, t, !0, void 0, "video");
                                },
                                onError: function(e) {
                                    o.a.sendMessage({
                                        action: "getWarningIcon",
                                        type: "playlist",
                                        color: "#AAAAAA"
                                    }, (function(e) {
                                        s.icon.style.backgroundImage = "url(" + e + ")";
                                    })), t.style.display = "block", s.buttonContainer.style.display = "none", n.style.display = "none", 
                                    t.textContent = e;
                                }
                            };
                        }((function() {
                            n = !0, r && r.abort();
                        }));
                        i.qualitySelect((function(r) {
                            i.onPrepare(o.a.i18n.getMessage("download") + " ..."), function(t) {
                                var n = document, r = Object(s.a)(location.href);
                                if (r.list) o.a.sendMessage({
                                    action: "getYoutubeIdListFromPlaylist",
                                    listId: r.list,
                                    baseUrl: location.protocol + "//" + location.host
                                }, (function(n) {
                                    if (!n) return t();
                                    if (!n.idList || 0 === n.idList.length) {
                                        var o = document.querySelector(".playlist-videos-container > .playlist-videos-list");
                                        if (null !== o && (n.idList = e(o)), !n.title) {
                                            var r = document.querySelector(".playlist-info > .playlist-title");
                                            null !== r && (n.title = r.textContent.replace(/\r?\n/g, " ").trim());
                                        }
                                    }
                                    t(n.idList, n.title);
                                })); else {
                                    var i = e(n);
                                    t(i, B.getTitle());
                                }
                            }((function(e, a) {
                                if (n) return;
                                if (!e || 0 === e.length) return void i.onError(o.a.i18n.getMessage("noLinksFound"));
                                const s = (e, n, o) => new Promise(r => t(e, n, o, r));
                                s(e, r, i.onProgress).then(t => 0 === Object.keys(t).length ? s(e, 720, i.onProgress) : t).then(e => {
                                    const t = [];
                                    for (var n in e) t.push(e[n]);
                                    var o = g.a.modify(a);
                                    i.onReady(t, o);
                                });
                            }));
                        }));
                    };
                }()
            };
            B.tutorial = {
                show: function(e) {
                    if (this.hide(), h.onceShowYtTooltip) {
                        e.onClose = function() {
                            t && t.stop(), o.a.sendMessage({
                                action: "updateOption",
                                key: "onceShowYtTooltip",
                                value: h.onceShowYtTooltip = 0
                            });
                        }, B.currentTutorial = new b.TutorialTooltip(e);
                        var t = null, n = document.querySelector("#page.watch");
                        n && (t = B.currentTutorial.attrWatcher = new m.a({
                            attrs: [ {
                                name: "class",
                                callback() {
                                    const {currentTutorial: e} = B;
                                    e && e.tooltipNode.parentNode ? e.onResize() : t.stop();
                                }
                            } ],
                            target: n
                        }));
                    }
                },
                hide: function() {
                    var e = B.currentTutorial;
                    e && (e.onClose && e.onClose(1), e.attrWatcher && e.attrWatcher.stop(), B.currentTutorial = null);
                }
            };
            var M = function(e) {
                return e = (e = (e = (e = (e = (e = e.replace(/[\x2F\x5C\x3A\x7C]/g, "-")).replace(/[\x2A\x3F]/g, "")).replace(/\x22/g, "'")).replace(/\x3C/g, "(")).replace(/\x3E/g, ")")).replace(/(?:^\s+)|(?:\s+$)/g, "");
            }, _ = function(e) {
                return Object(k.a)("function(){var ytPlayerConfig=window.ytplayer&&window.ytplayer.config;if(!ytPlayerConfig){return}return{args:ytPlayerConfig.args,sts:ytPlayerConfig.sts,assets:ytPlayerConfig.assets}}").then(t => {
                    if (!t || !t.args || !t.args.video_id) {
                        var n = document.querySelector('#watch7-content meta[itemprop="videoId"]'), o = n && n.getAttribute("content");
                        o && ((t = t || {}).args = t.args || {}, t.args.video_id = o);
                    }
                    return e(t);
                });
            }, I = function(e, t) {
                return Object(k.a)('function(){try{var player=document.querySelector("#movie_player");if(!player){throw new Error("PLAYER_IS_NOT_FOUND")}if(!player.getVideoData){throw new Error("PLAYER_API_IS_NOT_FOUND")}if(!player.getPlayerResponse){(function(fn){if(fn&&!fn.sf_apply){fn.sf_apply=fn.apply;fn.apply=function(self,args){var playerArgs=args[0];if(playerArgs&&playerArgs.raw_player_response){var vars=null;try{vars=JSON.parse(JSON.stringify(playerArgs))}catch(err){// pass\n}player.getSfPlayerVars=function(){return vars}}return fn.sf_apply(self,args)}}})(player.loadVideoByPlayerVars)}var ytPlayer=window.ytplayer;var playerUrl=ytPlayer&&ytPlayer.web_player_context_config&&ytPlayer.web_player_context_config.jsUrl;// when open main page\nif(!playerUrl&&typeof ytcfg==="object"&&ytcfg){playerUrl=ytcfg.data_&&ytcfg.data_.PLAYER_JS_URL}var playerResponse=player.getPlayerResponse&&player.getPlayerResponse();if(!playerResponse){var sfConfig=player.getSfPlayerVars&&player.getSfPlayerVars();playerResponse=sfConfig&&sfConfig.raw_player_response}if(!playerResponse){playerResponse=ytPlayer&&ytPlayer.config&&ytPlayer.config.args&&ytPlayer.config.args.raw_player_response}var videoData=player.getVideoData();var video_id=videoData&&videoData.video_id;return{result:{config:{playerUrl:playerUrl,args:{player_response:playerResponse,video_id:playerResponse&&playerResponse.videoDetails&&playerResponse.videoDetails.videoId}},video_id:video_id}}}catch(err){return{error:{message:err.message,stack:err.stack}}}}').then(e => {
                    let t = null;
                    if (e ? e.error && (t = Object.assign(new Error("UNKNOWN_ERROR"), e.error)) : t = new Error("EMPTY_RESPONSE"), 
                    t) throw t;
                    return e.result;
                }).then(n => {
                    const o = n.config;
                    let r = null;
                    return t ? (e && (r = B.getIdFromBackgroundImageUrl(e)), r || e || (r = B.getIdFromShortsLocation())) : (r = n.video_id, 
                    r || (r = B.getIdFromLocation())), !o.args.player_response || r && r !== o.args.video_id ? r ? {
                        args: {
                            video_id: r
                        }
                    } : null : o;
                });
            };
        }), (function() {
            return !/\/\/gaming\.youtube/.test(location.href);
        }));
    }
});