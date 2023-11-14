!function(e) {
    function t(t) {
        for (var r, i, l = t[0], s = t[1], c = t[2], u = 0, f = []; u < l.length; u++) i = l[u], 
        Object.prototype.hasOwnProperty.call(o, i) && o[i] && f.push(o[i][0]), o[i] = 0;
        for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
        for (d && d(t); f.length; ) f.shift()();
        return a.push.apply(a, c || []), n();
    }
    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], r = !0, l = 1; l < n.length; l++) {
                var s = n[l];
                0 !== o[s] && (r = !1);
            }
            r && (a.splice(t--, 1), e = i(i.s = n[0]));
        }
        return e;
    }
    var r = {}, o = {
        3: 0
    }, a = [];
    function i(t) {
        if (r[t]) return r[t].exports;
        var n = r[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
    }
    i.m = e, i.c = r, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        });
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var r in e) i.d(n, r, function(t) {
            return e[t];
        }.bind(null, r));
        return n;
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return i.d(t, "a", t), t;
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, i.p = "";
    var l = window.savefromContentScriptWebpackJsonp = window.savefromContentScriptWebpackJsonp || [], s = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var c = 0; c < l.length; c++) t(l[c]);
    var d = s;
    a.push([ 109, 0 ]), n();
}({
    109: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(19), o = n(0), a = n(10), i = n(15), l = n(29), s = n(25), c = n(23), d = n(12), u = n(22), f = n(16), p = n(3), h = n(1), m = n(14), v = n(6), g = n(7), b = n(18), y = n(11), k = n(20), w = n(2), x = n(74), S = n.n(x), O = n(27), M = n(24), j = n.n(M);
        const L = Object(a.a)().svg.getSrc("download", "#84bd07");
        var B = w.c.memo(e => {
            let {classes: t = [], isIcon: n = !0, isText: r = !0, isCircle: a = !1, onClick: i} = e;
            const l = Object(O.a)(S.a);
            return w.c.createElement("div", {
                className: j()(...t, l.container, a && l.circleContainer),
                onClick: i
            }, n && w.c.createElement("img", {
                src: L,
                className: l.logo
            }), r && w.c.createElement("span", {
                className: l.text
            }, o.a.i18n.getMessage("download")));
        }), F = n(5), P = n(8), C = n(17), E = n(9);
        function N(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), n.push.apply(n, r);
            }
            return n;
        }
        function D(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? N(Object(n), !0).forEach((function(t) {
                    Object(r.a)(e, t, n[t]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : N(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                }));
            }
            return e;
        }
        const I = n(36), q = Object(g.a)("facebook_com"), _ = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
        let V;
        b.a.isSingle() && Object(i.b)("facebook", (function(e, t) {
            const n = Object(a.a)(t);
            var r = t.preferences, i = r.moduleFacebook ? 1 : 0;
            o.a.onMessage.addListener((function(t, n, o) {
                if ("getModuleInfo" === t.action) {
                    if (t.url !== location.href) return;
                    return o({
                        state: i,
                        moduleName: e
                    });
                }
                if ("changeState" === t.action) {
                    if (e !== t.moduleName) return;
                    return g.changeState(t.state);
                }
                "updatePreferences" !== t.action ? i && "updateLinks" === t.action && (g.changeState(0), 
                g.changeState(1)) : Object.assign(r, t.preferences);
            })), i && setTimeout((function() {
                g.run();
            }));
            var g = {
                contextMenu: null,
                className: "savefrom_fb_download",
                isMutation: !1,
                run: function() {
                    if (i = 1, O.addStyle(), S.injectStyle(), y.a.isAvailable()) return this.isMutation = !0, 
                    this.initEmbedDownloader(), void this.mutationMode.enable();
                },
                changeState: function(e) {
                    g.hideMenu(), i = e, b.disable(), S.rmCurrentPhotoBtn(), S.rmDataAttrs(), O.rmBtn(), 
                    x.rmBtn(), g.mutationMode.stop(), e && g.run();
                },
                initEmbedDownloader: function() {
                    n.addStyleRules("." + n.embedDownloader.linkClass + " img", {
                        opacity: ".5"
                    }), n.embedDownloader.init();
                },
                mutationMode: {
                    observer: null,
                    stop: function() {
                        this.observer && this.observer.stop(), [ "sfSkip" ].forEach((function(e) {
                            for (var t, n = Object(c.a)(e), r = document.querySelectorAll("[" + n + "]"), o = 0; t = r[o]; o++) t.removeAttribute(n);
                        }));
                    },
                    wrapVideoGetLinks: function(e) {
                        switch (e.tagName) {
                          case "EMBED":
                            x.getLinksFromEmbed(e, (function(e) {
                                x.appendLinks(e && e.links);
                            }));
                            break;

                          case "VIDEO":
                            x.getLinksFromVideo(e, (function(e) {
                                x.appendLinks(e && e.links);
                            }));
                        }
                    },
                    wrapVideoFeedOnLinkHover: function() {
                        i && O.onLinkHover.apply(this);
                    },
                    wrapPhotoOnHover: function(e) {
                        i && S.addCurrentDlBtn(this);
                    },
                    wrapExternalMediaMouseEnter: function() {
                        if (i) {
                            this.dataset[b.linkDataAttr] ? clearTimeout(b.timer) : b.handle(this) ? (b.lastLink && b.lastLink !== this && b.removeBtn(b.lastLink), 
                            n.embedDownloader.hidePanel(), b.lastLink = this) : (p.a.off(this, "mouseenter", g.mutationMode.wrapExternalMediaMouseEnter), 
                            p.a.off(this, "mouseleave", g.mutationMode.wrapExternalMediaMouseLeave));
                        }
                    },
                    wrapExternalMediaMouseLeave: function() {
                        if (i) {
                            var e = this;
                            e.dataset[b.linkDataAttr] && (clearTimeout(b.timer), b.timer = setTimeout((function() {
                                b.removeBtn(e);
                            }), 1500));
                        }
                    },
                    wrapExternalMedia: function(e) {
                        p.a.on(e, "mouseenter", g.mutationMode.wrapExternalMediaMouseEnter), p.a.on(e, "mouseleave", g.mutationMode.wrapExternalMediaMouseLeave);
                    },
                    enable: function() {
                        if (this.observer) return this.observer.start();
                        const e = (e, t) => {
                            if (!(window.location.href.includes("/watch?") && e.ariaLabel || (e.dataset.sfReady && window.location.href.includes("/watch?") && !e.dataset.waRep && e.removeAttribute("data-sf-ready"), 
                            e.dataset.sfReady))) return e.dataset.sfReady = "1", t(e);
                        };
                        this.observer = new y.a({
                            queries: [ {
                                css: "video",
                                is: "added",
                                callback: t => {
                                    let {added: n} = t;
                                    const r = /\/watch/.test(location.href);
                                    n.forEach(t => e(t, () => r ? O.addButtonForWatchPage(t) : t.closest('[role="article"]') ? O.addButtonForFeedPage(t) : void 0));
                                }
                            }, {
                                css: '[role="article"] a[href*="/videos/"], ._6x84 a[href*="/videos/"]',
                                is: "added",
                                callback: t => {
                                    let {added: n} = t;
                                    n.forEach(t => e(t, () => {
                                        O.addHoverButtonForArticleVideo(t);
                                    }));
                                }
                            }, {
                                css: '[role="article"] a[role="link"] div[style] img[alt], [role="article"] div[role="button"] div[style] img[alt]',
                                is: "added",
                                callback: t => {
                                    let {added: n} = t;
                                    n.forEach(t => e(t, () => {
                                        if (!t.closest('a[aria-label*="Reels"]')) return S.addButtonForArticleImage(t);
                                    }));
                                }
                            }, {
                                css: '[data-pagelet="TahoeVideo"]',
                                is: "added",
                                callback: t => {
                                    let {added: n} = t;
                                    n.forEach(t => e(t, () => {
                                        O.addButtonForShowPageVideo(t);
                                    }));
                                }
                            }, {
                                css: '[data-pagelet="Reels"], a[aria-label*="Reels"]',
                                is: "added",
                                callback: t => {
                                    let {added: n} = t;
                                    n.forEach(t => e(t, () => O.addButtonForReelVideo(t)));
                                }
                            }, {
                                css: '[data-pagelet="TahoeRightRail"] a[href*="/videos/"]',
                                is: "added",
                                callback: t => {
                                    let {added: n} = t;
                                    n.forEach(t => e(t, () => {
                                        const e = w.createButton(() => {
                                            const n = x.getVideoIdFromLink(t.href);
                                            n && x.showDownloadMenuByVideoId(e, n);
                                        }, {
                                            preset: "hover"
                                        });
                                        t.appendChild(e);
                                    }));
                                }
                            }, {
                                css: '[data-visualcompletion="media-vc-image"]',
                                is: "added",
                                callback: t => {
                                    let {added: n} = t;
                                    n.forEach(t => e(t, () => {
                                        S.addButtonForShowPageImage(t);
                                    }));
                                }
                            }, {
                                css: [ "embed", "video._ox1" ],
                                is: "added",
                                callback: e => {
                                    for (let n, r = 0; n = e.added[r]; r++) {
                                        var t = !1;
                                        Object(u.a)(n, "#fbxPhotoContentContainer .videoStage " + n.tagName) && (t = !0), 
                                        t ? this.wrapVideoGetLinks(n) : p.a.one(n, "mouseenter", this.wrapVideoFeedOnLinkHover);
                                    }
                                }
                            }, {
                                css: [ ".fbPhotoSnowliftContainer .stageWrapper .stage img.spotlight", ".fbPhotoSnowliftContainer .stageWrapper .stage .videoStage video" ],
                                is: "added",
                                callback: e => {
                                    for (let r, o = 0; r = e.added[o]; o++) if (g.hideMenu(), !(r.dataset.sfSkip > 0)) {
                                        r.dataset.sfSkip = "1";
                                        var t = n.getParentByClass(r, "stageWrapper");
                                        p.a.one(t, "mouseenter", this.wrapPhotoOnHover);
                                    }
                                }
                            }, {
                                css: "a",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) t.sfSkip > 0 || (t.sfSkip = "1", this.wrapExternalMedia(t));
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
                hideMenu: function() {
                    g.contextMenu && (g.contextMenu.hide(), g.contextMenu = null);
                }
            }, b = {
                linkDataAttr: "savefromEd",
                timer: 0,
                lastLink: null,
                re: [ /https?:\/\/(?:[a-z]+\.)?youtube\.com\/(?:#!?\/)?watch\?[^\s\"\'\<\>]*v=([\w\-]+)/i, /https?:\/\/(?:[a-z0-9]+\.)?youtube\.com\/(?:embed|v)\/([\w\-]+)/i, /https?:\/\/(?:[a-z]+\.)?youtu\.be\/([\w\-]+)/i, /https?:\/\/(?:[\w\-]+\.)?vimeo\.com\/(\d+)(?:\?|$)/i ],
                thumbnail: {
                    youtube: {
                        re: [ /ytimg\.com(?:\/|%2F)vi(?:\/|%2F)([\w\-]+)(?:\/|%2F)/i ],
                        url: "http://www.youtube.com/watch?v={vid}"
                    }
                },
                disable: function() {
                    var e = n.embedDownloader.panel;
                    e && (e.style.display = "none");
                },
                removeBtn: function(e) {
                    if (e && "object" == typeof e) {
                        var t = e.querySelector("." + g.className);
                        t && (t.parentNode.removeAttribute(Object(c.a)(b.linkDataAttr)), t.parentNode.removeChild(t)), 
                        e.removeAttribute(Object(c.a)(b.linkDataAttr)), e == this.lastLink && (this.lastLink = null);
                    }
                },
                checkUrl: function(e, t) {
                    if (!t && e.search(/https?:\/\/([\w\-]+\.)?facebook\.com\/l\.php/i) > -1) return this.checkUrl(decodeURIComponent(e), !0);
                    for (var n = 0, r = this.re.length; n < r; n++) {
                        var o = e.match(this.re[n]);
                        if (o && o.length > 0) return o[0];
                    }
                },
                handle: function(e) {
                    var t = e.querySelector("img");
                    if (t) {
                        var r = t.parentNode;
                        if (t.src && "relative" == n.getStyle(r, "position")) {
                            var o = e.getAttribute("ajaxify");
                            if (o && o.search(/\/flash\/expand_inline/i) > -1) {
                                var a = this.getThumbnailUrl(t.src);
                                if (a) return this.createButton(a, r, e, {
                                    display: "block",
                                    position: "absolute",
                                    bottom: "3px",
                                    right: "3px",
                                    zIndex: 9999,
                                    margin: 0,
                                    width: "16px",
                                    height: "16px"
                                }, {
                                    display: "block"
                                });
                            } else if (this.checkUrl(e.href)) return this.createButton(e.href, r, e, {
                                display: "block",
                                position: "absolute",
                                bottom: "3px",
                                right: "3px",
                                zIndex: 9999,
                                margin: 0,
                                width: "16px",
                                height: "16px"
                            }, {
                                display: "block"
                            });
                        }
                        return !1;
                    }
                    return this.createButton(e.href, e, e);
                },
                getThumbnailUrl: function(e) {
                    for (var t in this.thumbnail) for (var r = 0; r < this.thumbnail[t].re.length; r++) {
                        var o = n.getMatchFirst(e, this.thumbnail[t].re[r]);
                        if (o) return this.thumbnail[t].url.replace(/\{vid\}/gi, o);
                    }
                    return "";
                },
                createButton: function(e, t, r, a, i) {
                    if (!(e = this.checkUrl(e))) return !1;
                    var l = document.createElement("a");
                    l.className = g.className, l.href = "http://savefrom.net/?url=" + encodeURIComponent(e), 
                    l.setAttribute(n.embedDownloader.dataAttr, e), l.title = o.a.i18n.getMessage("download"), 
                    n.setStyle(l, {
                        marginLeft: "7px",
                        verticalAlign: "middle"
                    }), a && n.setStyle(l, a);
                    var s = document.createElement("img");
                    return s.className = "icon", s.src = n.svg.getSrc("download", "#a2db16"), n.setStyle(s, {
                        display: "inline-block",
                        width: "16px",
                        height: "16px",
                        verticalAlign: "middle",
                        cursor: "pointer"
                    }), i && n.setStyle(s, i), l.appendChild(s), r.dataset[this.linkDataAttr] = 1, t.appendChild(l), 
                    !0;
                }
            };
            const w = {
                createButton(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    const n = {
                        default: {
                            props: {},
                            style: {}
                        },
                        circle: {
                            props: {
                                isText: !1,
                                isCircle: !0
                            },
                            style: {}
                        },
                        withoutText: {
                            props: {
                                isText: !1
                            },
                            style: {}
                        },
                        hover: {
                            className: "sf-hover-container",
                            props: {
                                isText: !1
                            },
                            style: {
                                position: "absolute",
                                top: "8px",
                                left: "8px"
                            }
                        }
                    };
                    let r = t && t.preset ? t.preset : "default", o = n[r] ? n[r] : n.default, {props: a, style: i} = o;
                    t && t.style && (i = Object.assign(i, t.style));
                    const l = h.a.create("div", {
                        class: o.className || "sf-download-container",
                        style: i
                    });
                    return Object(k.a)(Object(F.e)(B, D(D({}, a), {}, {
                        onClick: t => {
                            t.preventDefault(), t.stopPropagation(), e(t);
                        }
                    })), l), l;
                }
            };
            var x = {
                getLinksFromEmbed: function(e, t) {
                    if (!e) return t(null);
                    var n = e.getAttribute("flashvars");
                    if (null === n) return t(null);
                    var r = Object(s.a)(n).params;
                    if (!r) return t(null);
                    var o = null;
                    try {
                        o = JSON.parse(r).video_data;
                    } catch (e) {}
                    if (!o) return t(null);
                    o.progressive && (o = o.progressive);
                    var a = {}, i = {
                        sd_src: "SD",
                        hd_src: "HD"
                    };
                    Array.isArray(o) || (o = [ o ]);
                    for (var l, c = 0; l = o[c]; c++) [ "sd_src", "hd_src" ].forEach((function(e) {
                        l[e] && (a[l[e]] = i[e]);
                    }));
                    return t({
                        links: a
                    });
                },
                getVideoIdFromLink(e) {
                    let t = -1 !== e.indexOf("&") ? e.indexOf("&") : e.length, n = e.match(/videos\/(\d+)/);
                    return n || (n = e.match(/pcb\.\w+\/(.*?)\?/)), !n && e.includes("/watch/?") ? (n = e.substring(34, t), 
                    n) : !n && e.includes("/watch?") ? (n = e.substring(33, 50), n) : (!n && e.includes("permalink&v=") && (n = e.match(/permalink&v=(\d+)/)), 
                    !n && e.includes("/reel/") && (n = e.match(/reel\/(\d+)/)), n && n[1]);
                },
                requestLocalVideoLinks: function(e) {
                    return new Promise((function(e, t) {
                        n.bridge({
                            func: 'function(cb){var err=null;var token=null;try{token=window.require("DTSGInitialData").token}catch(_err){err=_err.message}cb([err,token])}',
                            cb: function(n) {
                                var r = null, o = null;
                                !n || n[0] ? r = new Error("Get token timeout") : o = n[1], r ? t(r) : e(o);
                            }
                        });
                    })).then((function(t) {
                        const n = `https://www.facebook.com/video/tahoe/async/${e}/?${I.stringify({
                            payloadtype: "primary"
                        })}`, r = I.stringify({
                            __a: 1,
                            fb_dtsg: t
                        });
                        return Object(m.a)([ n, r ], 'function(url,data){return fetch(url,{method:"POST",headers:{"content-type":"application/x-www-form-urlencoded"},body:data}).then(function(response){return response.text()})}');
                    })).then((function(t) {
                        return new Promise((function(n, r) {
                            o.a.sendMessage({
                                action: "getFacebookLinksFromData",
                                extVideoId: e,
                                data: t
                            }, (function(e) {
                                e && e.links ? n(e) : r(new Error("Get links from data error"));
                            }));
                        }));
                    })).catch((function(e) {
                        throw q.error("get local links error", e), Object(P.a)({
                            category: "mistake",
                            subcategory: "fa",
                            event: "l"
                        }), e;
                    }));
                },
                requestBgVideoLinks: function(e) {
                    return new Promise((function(t, n) {
                        o.a.sendMessage({
                            action: "getFacebookLinks",
                            extVideoId: e
                        }, (function(e) {
                            e && e.links ? t(e) : n(new Error("Get links error"));
                        }));
                    })).catch((function(e) {
                        throw q.error("get links error", e), e;
                    }));
                },
                requestVideoLinksById: function(e) {
                    return Promise.resolve().then((function() {
                        return x.requestLocalVideoLinks(e);
                    })).catch((function() {
                        return x.requestBgVideoLinks(e);
                    }));
                },
                requestVideoLinks: function(e, t) {
                    return x.requestVideoLinksById(e).then((function(e) {
                        t(e.links, e.title);
                    }), (function(e) {
                        t();
                    }));
                },
                getLinksFromVideo: function(e, t) {
                    if (!e) return t(null);
                    const r = {};
                    var o, a = {}, i = null;
                    if (!i) {
                        let t = Object(f.a)(e, "div[data-ft]");
                        if (t && Object(u.a)(t, ".userContentWrapper[data-ft] " + t.tagName) && (t = Object(f.a)(t, ".userContentWrapper[data-ft]")), 
                        t && (Array.from(t.querySelectorAll("a[href]")).some(e => {
                            const t = /\/videos\/(\d+)/.exec(e.href);
                            if (t) return i = t[1], r.popup_1 = !0, !0;
                        }), !i)) {
                            let e = null;
                            try {
                                e = JSON.parse(t.dataset.ft);
                            } catch (e) {}
                            if (e) {
                                const t = e.mf_story_key, n = e.story_attachment_style;
                                t && "video_inline" === n && (i = t, r.popup_1 = !0);
                            }
                        }
                    }
                    if (!i) {
                        if (Object(f.a)(e, "div._5-yb")) {
                            const e = /\/videos\/(\d+)/.exec(location.href);
                            if (e) {
                                return t({
                                    links: {
                                        id: e[1]
                                    },
                                    popup_1: !0
                                });
                            }
                        }
                    }
                    if (!i) {
                        var s = Object(f.a)(e, ".uiStreamStory[data-story-id]"), c = /:(\d+)$/.exec(s && s.dataset.storyId);
                        (c = c && c[1]) && (i = c);
                    }
                    if (!i && (o = Object(l.a)(e, "fbUserContent"))) {
                        var d = o.querySelector("a[data-video-id]");
                        if (d) (v = d && d.dataset.videoId) && (i = v);
                    }
                    if (!i && (o = Object(f.a)(e, ".userContentWrapper"))) {
                        var p = o.querySelector('div[id^="feed_subtitle_"] a[data-video-channel-id]');
                        if (p) {
                            var h = /\/videos\/(\d+)/.exec(p.href);
                            (v = h && h[1]) && (i = v);
                        } else {
                            var m = o.querySelectorAll('a.profileLink, a[rel="theater"], #fbPhotoSnowliftTimestamp > a[href]'), v = null;
                            [].slice.call(m).some((function(e) {
                                var t = /\/videos\/(\d+)/.exec(e.href);
                                return v = t && t[1];
                            })), v && (i = v);
                        }
                    }
                    if (!i) {
                        var g = !1, b = !1, y = document.getElementById("stream_pagelet"), k = y && y.previousElementSibling;
                        if (k && k.contains(e) && (g = !0), !g) {
                            var w = document.querySelector(".uiStreamStory"), S = w && w.parentNode;
                            (S = S && S.parentNode) && S.contains(e) && (b = !0);
                        }
                        if (g || b) (v = x.getVideoIdFromUrl()) && (i = v);
                    }
                    if (!i && Object(f.a)(e, "#pagelet_group_permalink")) {
                        h = /video_id:"?([^,"]+)/.exec(document.body.innerHTML);
                        (v = h && h[1]) && (i = v);
                    }
                    if (i && (a.id = i), e.src && /^https?:/.test(e.src)) {
                        var O = n.getFileExtension(e.src, "mp4");
                        a[e.src] = O.toUpperCase();
                    }
                    var M = e.querySelectorAll("source");
                    if (M && M.length > 0) for (var j = 0; j < M.length; j++) {
                        O = n.getFileExtension(M[j].src, "mp4");
                        a[M[j].src] = O.toUpperCase();
                    }
                    return Object.keys(a).length ? (r.links = a, t(r)) : t(null);
                },
                getVideoIdFromUrl: function() {
                    var e = null;
                    return n.embedDownloader.hostings.facebook.re.some((function(t) {
                        var n = t.exec(location.href);
                        if (n) return e = n[1], !0;
                    })), e || (e = (e = document.location.href.match(/(\d+).$/)) && e[1] ? e[1] : null), 
                    e;
                },
                getFileName: function(e) {
                    var t = n.getFileName(e);
                    if (t) return t;
                    var r = n.dateToObj();
                    return "facebook_" + (r.year + "-" + r.month + "-" + r.day + "_" + r.hour + "-" + r.min) + "." + n.getFileExtension(e, "mp4");
                },
                prepareLinks: function(e, t) {
                    var n = [];
                    for (var r in e) {
                        var a = this.getFileName(r), i = a.lastIndexOf("."), l = a.substr(i + 1), s = {
                            href: r,
                            title: a = t || a.substr(0, i),
                            format: l.toUpperCase(),
                            quality: e[r],
                            forceDownload: !0
                        };
                        n.push(s);
                    }
                    return 0 === n.length && (n = o.a.i18n.getMessage("noLinksFound")), n;
                },
                appendLinks: function(e) {
                    if (e) {
                        var t = document.getElementById("fbPhotoPageMediaInfo");
                        if (null !== t) {
                            var r = document.querySelector("h2.uiHeaderTitle");
                            if (r && (r = r.textContent), t && !t.querySelector("." + g.className)) {
                                var a = document.createElement("div");
                                a.className = g.className;
                                var i = h.a.create("div", {
                                    title: o.a.i18n.getMessage("download"),
                                    style: {
                                        display: "inline-block",
                                        width: "16px",
                                        height: "16px",
                                        backgroundImage: "url(" + n.svg.getSrc("download", "#a2db16") + ")",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center center",
                                        verticalAlign: "middle",
                                        cursor: "pointer"
                                    }
                                });
                                a.appendChild(i);
                                var l = null;
                                i.addEventListener("click", (function() {
                                    if (g.contextMenu && g.contextMenu.isShow) g.hideMenu(); else {
                                        var t = g.contextMenu = n.popupMenu.quickInsert(this, o.a.i18n.getMessage("download") + " ...", g.className + "_popup");
                                        if (l) t.update(l); else if (e.id) {
                                            var a = e.id;
                                            delete e.id, x.requestVideoLinks(a, (function(r, o) {
                                                l = r ? n.popupMenu.prepareLinks.facebook(r, o) : x.prepareLinks(e), t.update(l);
                                            }));
                                        } else l = x.prepareLinks(e, r), t.update(l);
                                    }
                                })), t.appendChild(a), t = null, a = null, i = null;
                            }
                        }
                    }
                },
                rmBtn: function() {
                    for (var e, t = document.querySelectorAll("." + g.className), n = 0; e = t[n]; n++) e.parentNode.removeChild(e);
                },
                showDownloadMenuByVideoId(e, r) {
                    if (g.contextMenu && g.contextMenu.isShow) return void g.hideMenu();
                    const a = g.contextMenu = n.popupMenu.quickInsert(e, o.a.i18n.getMessage("download") + " ...", g.className + "_popup");
                    E.a.createLinkExtractor("fb-video").extractLinks({
                        mediaId: r,
                        initData: t
                    }).then(e => a.update(function(e) {
                        return JSON.parse(JSON.stringify(e)).map(e => (e.href = e.url, e.title = e.filename, 
                        delete e.url, delete e.filename, e));
                    }(e)));
                }
            }, S = {
                style: null,
                getFilenameFromUrl: function(e) {
                    return n.getMatchFirst(e, /\/([^\/]+\.[a-z0-9]{3,4})(?:\?|$)/i);
                },
                getPhotoIdFromUrl: function() {
                    var e = null, t = Object(s.a)(location.href);
                    return t.fbid && (e = t.fbid), e;
                },
                prepPhotoUrl: function(e) {
                    e && (/[?&]dl=1/.test(e) || (e += (/\?/.test(e) ? "&" : "?") + "dl=1"));
                    return e;
                },
                rmCurrentPhotoBtn: function(e) {
                    for (var t, n = void 0, r = document.querySelectorAll(".sf-dl-current-photo-btn"), o = 0; t = r[o]; o++) e && e.contains(t) ? n = t : t.parentNode.removeChild(t);
                    return n;
                },
                injectStyle: function() {
                    this.style ? this.style.parentNode || document.head.appendChild(this.style) : (this.style = h.a.create("style", {
                        text: Object(d.a)({
                            "div > .sf-dl-current-photo-btn": {
                                display: "none",
                                position: "absolute",
                                top: "10px",
                                left: "10px",
                                width: "28px",
                                height: "24px",
                                border: 0,
                                zIndex: 100,
                                cursor: "pointer",
                                backgroundColor: "#000",
                                padding: 0,
                                borderRadius: "2px",
                                opacity: .4,
                                transition: "opacity 100ms linear",
                                lineHeight: 0
                            },
                            "div > .sf-dl-current-photo-btn svg": {
                                margin: "4px"
                            },
                            "div > .sf-dl-current-photo-btn:hover": {
                                opacity: .8
                            },
                            "div > .sf-dl-current-photo-btn:hover svg path": {
                                fill: "#00B75A"
                            },
                            "body:not(.fullScreen) div:hover > .sf-dl-current-photo-btn": {
                                display: "block"
                            }
                        })
                    }), document.head.appendChild(this.style));
                },
                getPhotoUrlFromCtr: function(e) {
                    var t = [], n = e.querySelector("img.spotlight") || e.querySelector("img.fbPhotoImage");
                    return n && t.push(n.src), t;
                },
                getVideoUrlFromPhotoCtr: function(e) {
                    var t = null, n = e.querySelector(".stage .videoStage video");
                    if (n) {
                        var r = Object(f.a)(n, ".fbPhotoSnowliftPopup");
                        if (r) {
                            var o = r.querySelector('div[id^="feed_subtitle_"] a[data-video-channel-id]');
                            if (o) {
                                var a = /\/videos\/(\d+)/.exec(o.href);
                                a && (t = a[1]);
                            }
                        }
                    }
                    return t;
                },
                getLinksFromPhotoCtr: function(e) {
                    return Object(u.a)(e, ".stageWrapper.showVideo") ? Promise.resolve().then((function() {
                        var t = x.getVideoIdFromUrl();
                        if (t || (t = S.getVideoUrlFromPhotoCtr(e)), t) return x.requestVideoLinksById(t);
                    })).then((function(e) {
                        return n.popupMenu.prepareLinks.facebook(e.links, e.title);
                    })) : Promise.resolve().then((function() {
                        var e = S.getPhotoIdFromUrl();
                        if (e) return new Promise((function(t, n) {
                            o.a.sendMessage({
                                action: "getFacebookPhotoUrl",
                                fbid: e
                            }, (function(e) {
                                e && e.length ? t(e) : n(new Error("getFacebookPhotoUrl can't get url"));
                            }));
                        }));
                        throw new Error("Can't get photo id from url");
                    })).catch((function(t) {
                        return S.getPhotoUrlFromCtr(e);
                    })).then((function(e) {
                        if (!e || !e.length) throw new Error("Photo url not found");
                        return e.map((function(e) {
                            var t = S.prepPhotoUrl(e), n = v.a.modify(S.getFilenameFromUrl(t)), r = /(.+)\.([^.]+)$/.exec(n), a = "jpg", i = n;
                            return r && (a = r[1], i = r[2]), {
                                href: t,
                                title: i,
                                quality: o.a.i18n.getMessage("download"),
                                format: " ",
                                ext: a,
                                isBlank: !0
                            };
                        }));
                    }));
                },
                addDlCurrentPhotoBtn: function(e) {
                    if (!this.rmCurrentPhotoBtn(e)) {
                        var t = h.a.create("a", {
                            class: "sf-dl-current-photo-btn",
                            href: "#",
                            title: o.a.i18n.getMessage("download"),
                            append: [ n.svg.getSvg("download", "#FFF", 16) ],
                            on: [ [ "click", function(t) {
                                if (t.stopPropagation(), t.preventDefault(), g.contextMenu && g.contextMenu.isShow) g.hideMenu(); else {
                                    var r = function e(t) {
                                        18 !== t.keyCode && 17 !== t.keyCode && (a.hide(), document.removeEventListener("keydown", e));
                                    }, a = g.contextMenu = n.popupMenu.quickInsert(this, o.a.i18n.getMessage("download") + " ...", "photoDlMenu", {
                                        parent: e,
                                        onShow: function() {
                                            g.isMutation || document.addEventListener("keydown", r);
                                        },
                                        onHide: function() {
                                            g.isMutation || document.removeEventListener("keydown", r);
                                        }
                                    });
                                    S.getLinksFromPhotoCtr(e).then((function(e) {
                                        e.forEach((function(e) {
                                            e.func = function(t) {
                                                t.preventDefault(), n.download(null, e.href), a.hide();
                                            };
                                        })), a.update(e);
                                    })).catch((function(e) {
                                        q.debug("Get photo links error", e), a.update(o.a.i18n.getMessage("noLinksFound"));
                                    }));
                                }
                            } ], [ "mouseover", e => {
                                if (_) {
                                    if (!e.altKey && !e.ctrlKey) return e.preventDefault(), void Object(C.b)(t, {
                                        defaultWidth: 400,
                                        defaultHeight: 60
                                    }, {});
                                    Object(C.a)(t, {
                                        defaultWidth: 400,
                                        defaultHeight: 60
                                    });
                                }
                            } ] ]
                        });
                        e.appendChild(t);
                    }
                },
                async addButtonForArticleImage(e) {
                    const r = e.closest("a");
                    if (!r) return;
                    const [o] = await E.a.createLinkExtractor("fb-photo").extractLinks({
                        element: e,
                        initData: t
                    }), a = h.a.create("a", {
                        class: "sf-hover-container",
                        href: o.url,
                        download: o.filename,
                        style: {
                            position: "absolute",
                            top: "8px",
                            left: "8px"
                        },
                        on: [ [ "click", e => {
                            e.stopPropagation(), n.downloadOnClick(e);
                        } ], [ "mouseover", e => {
                            if (_) {
                                if (!e.altKey && !e.ctrlKey) return e.preventDefault(), void Object(C.b)(a, {
                                    defaultWidth: 400,
                                    defaultHeight: 60
                                }, {});
                                Object(C.a)(a, {
                                    defaultWidth: 400,
                                    defaultHeight: 60
                                });
                            }
                        } ] ]
                    });
                    Object(P.a)({
                        category: "append",
                        subcategory: "fa",
                        event: "b"
                    }), Object(k.a)(Object(F.e)(B, {
                        isText: !1
                    }), a), r.appendChild(a);
                },
                async addButtonForShowPageImage(e) {
                    const r = e.closest('div:not([data-visualcompletion="media-vc-image"])').parentElement.parentElement;
                    if (!r) return;
                    const [o] = await E.a.createLinkExtractor("fb-photo").extractLinks({
                        element: e,
                        initData: t
                    }), a = h.a.create("a", {
                        style: {
                            position: "absolute",
                            zIndex: 9999,
                            margin: "15px"
                        },
                        href: o.url,
                        download: o.filename,
                        on: [ [ "click", e => {
                            e.stopPropagation(), n.downloadOnClick(e);
                        } ], [ "mouseover", e => {
                            if (_) {
                                if (!e.altKey && !e.ctrlKey) return e.preventDefault(), void Object(C.b)(a, {
                                    defaultWidth: 400,
                                    defaultHeight: 60
                                }, {});
                                Object(C.a)(a, {
                                    defaultWidth: 400,
                                    defaultHeight: 60
                                });
                            }
                        } ] ]
                    });
                    Object(P.a)({
                        category: "append",
                        subcategory: "fa",
                        event: "b"
                    }), Object(k.a)(Object(F.e)(B, {
                        isText: !1,
                        isCircle: !0
                    }), a), r.prepend(a);
                },
                addCurrentDlBtn: function(e) {
                    e.dataset.sfSkip > 0 || (e.dataset.sfSkip = "1", this.addDlCurrentPhotoBtn(e));
                },
                rmDataAttrs: function() {
                    for (var e, t = Object(c.a)("sfSkip"), n = document.querySelectorAll("*[" + t + "]"), r = 0; e = n[r]; r++) e.removeAttribute(t);
                }
            }, O = {
                style: null,
                addStyle: function() {
                    if (this.style) return void (this.style.parentNode || document.head.appendChild(this.style));
                    this.style = h.a.create("style", {
                        class: "sfFeedStyle",
                        text: Object(d.a)([ {
                            selector: "." + g.className + "-feed.sf-feed",
                            style: {
                                display: "none",
                                width: "20px",
                                height: "20px",
                                padding: 0,
                                position: "absolute",
                                background: "url(" + n.svg.getSrc("download", "#a2db16") + ") center no-repeat transparent",
                                backgroundSize: "16px",
                                top: "5px",
                                left: "5px",
                                zIndex: 1,
                                cursor: "pointer"
                            }
                        }, {
                            selector: 'div[role="dialog"] .' + g.className + "-feed.sf-feed",
                            style: {
                                top: "40px"
                            }
                        }, {
                            selector: "body:not(.fullScreen) div:hover > ." + g.className + "-feed.sf-feed",
                            style: {
                                display: "block"
                            }
                        }, {
                            selector: "." + g.className + "-feed.sf-feed:active",
                            style: {
                                outline: 0
                            }
                        }, {
                            selector: ".sf-hover-container",
                            style: {
                                display: "none"
                            }
                        }, {
                            selector: 'div[role="presentation"]:hover .sf-hover-container, a[role="link"]:hover .sf-hover-container, div[style*="bottom:calc"]:hover .sf-hover-container',
                            style: {
                                display: "block"
                            }
                        } ])
                    }), document.head.appendChild(this.style);
                },
                onDlBtnClick: function(e) {
                    if (e.preventDefault(), e.stopPropagation(), g.contextMenu && g.contextMenu.isShow) g.hideMenu(); else {
                        try {
                            var t = JSON.parse(this.dataset.sfDlLinks);
                        } catch (e) {
                            return;
                        }
                        var r = g.contextMenu = n.popupMenu.quickInsert(this, o.a.i18n.getMessage("download") + " ...", g.className + "_popup");
                        if (t.id) {
                            var a = t.id;
                            delete t.id, x.requestVideoLinks(a, (function(e, o) {
                                var a;
                                a = e ? n.popupMenu.prepareLinks.facebook(e, o) : x.prepareLinks(t), r.update(a);
                            }));
                        } else {
                            var i = x.prepareLinks(t);
                            r.update(i);
                        }
                    }
                },
                addDownloadBtn: function(e, t) {
                    var n = e.querySelector("." + g.className + "-feed");
                    n && n.parentNode.removeChild(n), e.appendChild(h.a.create("a", {
                        data: {
                            sfDlLinks: JSON.stringify(t)
                        },
                        title: o.a.i18n.getMessage("download"),
                        class: [ g.className + "-feed", "sf-feed" ],
                        href: "#",
                        on: [ "click", O.onDlBtnClick ]
                    }));
                },
                addButtonForWatchPage(e) {
                    let t = e.closest("._6x84");
                    const n = /\/live/.test(location.href);
                    t || (t = e.closest(".x1n6yrxt, .xvl6max")), !t && n && (t = e.closest(".x1282nqq").parentNode);
                    let r = t.querySelector('a[href*="/videos/"]');
                    if (r || (r = t.querySelector('a[href*="/watch/?"]')), r || (r = {
                        href: window.location.href
                    }), !r || !r.href) return;
                    let o = x.getVideoIdFromLink(r.href);
                    if (!o) return;
                    const a = w.createButton(() => {
                        x.showDownloadMenuByVideoId(a, o);
                    });
                    Object(P.a)({
                        category: "append",
                        subcategory: "fa",
                        event: "b"
                    });
                    let i = null === t.querySelector('[aria-label="Like"]') ? t.querySelector(".x1u2d2a2") : t.querySelector('[aria-label="Like"]').parentNode;
                    r.href === window.location.href ? (e.dataset.waRep = "1", setTimeout(() => {
                        i.querySelector(".sf-download-container") && V !== r.href && i.querySelector(".sf-download-container").remove(), 
                        i.prepend(a), V = r.href;
                    }, 1500)) : (i.querySelector(".sf-download-container") && i.querySelector(".sf-download-container").remove(), 
                    i.prepend(a));
                },
                addButtonForFeedPage(e) {
                    const t = e.closest('[role="article"]');
                    let n = t.querySelector('a[href*="/watch/?v"]');
                    if (n || (n = t.querySelector('a[href*="/videos/"]')), !n) return;
                    let r = n.href, o = x.getVideoIdFromLink(r);
                    if (!o) return;
                    const a = null === t.querySelector('[aria-label="Like"]') ? t.querySelector(".x8182xy").firstChild : t.querySelector('[aria-label="Like"]').parentNode;
                    if (!a) return;
                    const i = w.createButton(() => {
                        x.showDownloadMenuByVideoId(i, o);
                    }, {
                        preset: "withoutText",
                        style: {
                            alignItems: "center",
                            display: "flex"
                        }
                    });
                    Object(P.a)({
                        category: "append",
                        subcategory: "fa",
                        event: "b"
                    }), a.parentElement.insertBefore(i, a);
                },
                addButtonForShowPageVideo(e) {
                    const t = w.createButton(e => {
                        let t = x.getVideoIdFromLink(location.href);
                        t && x.showDownloadMenuByVideoId(e.target, t);
                    }, {
                        preset: "circle",
                        style: {
                            position: "absolute",
                            top: "8px",
                            left: "114px"
                        }
                    });
                    Object(P.a)({
                        category: "append",
                        subcategory: "fa",
                        event: "b"
                    }), e.appendChild(t);
                },
                addButtonForReelVideo(e) {
                    let t = {
                        position: "absolute",
                        top: "80px",
                        left: "16px",
                        zIndex: 10
                    }, n = e.querySelector("div[data-video-id]");
                    if (n || (n = e, t = D(D({}, t), {}, {
                        top: "16px"
                    })), !n) return;
                    const r = w.createButton(e => {
                        let t = n.getAttribute("data-video-id");
                        t || (t = x.getVideoIdFromLink(n.getAttribute("href"))), t && x.showDownloadMenuByVideoId(e.target, t);
                    }, {
                        preset: "circle",
                        style: t
                    });
                    Object(P.a)({
                        category: "append",
                        subcategory: "fa",
                        event: "b"
                    }), e.appendChild(r);
                },
                addHoverButtonForArticleVideo(e) {
                    let t = x.getVideoIdFromLink(e.href);
                    if (!t) return;
                    const n = e.closest('[role="article"], ._6x84');
                    if (!n) return;
                    let r = n.querySelector('div[role="presentation"]');
                    if (!r && (r = e.parentNode, !r)) return;
                    const o = w.createButton(e => {
                        x.showDownloadMenuByVideoId(e.target, t);
                    }, {
                        preset: "hover"
                    });
                    r.appendChild(o);
                },
                onLinkHover: function() {
                    var e = this;
                    if (!(this.dataset.hasSfFeedBtn > 1)) {
                        this.dataset.hasSfFeedBtn = "1";
                        var t = this;
                        return "VIDEO" === t.tagName && (t = t.querySelector("embed") || this), new Promise(e => {
                            "EMBED" === t.tagName ? x.getLinksFromEmbed(t, e) : "VIDEO" === t.tagName && x.getLinksFromVideo(t, e);
                        }).catch(e => (q("getLinks error", e), null)).then(t => {
                            const n = t && t.links;
                            if (n) if (t && t.popup_1) O.addDownloadBtn(e.parentNode, n); else if (Object(u.a)(e, ".uiStreamStory " + e.tagName) || Object(u.a)(e, ".fbPhotoSnowliftContainer " + e.tagName)) {
                                Object(f.a)(e, ".fbPhotoSnowliftPopup .stageWrapper") || O.addDownloadBtn(e.parentNode, n);
                            } else {
                                var r = document.getElementById("pagelet_timeline_main_column") || document.getElementById("stream_pagelet") || document.getElementById("mainContainer");
                                if (r && r.contains(e)) O.addDownloadBtn(e.parentNode, n); else {
                                    var o = document.getElementById("stream_pagelet"), a = o && o.previousElementSibling;
                                    if (a && a.contains(e)) O.addDownloadBtn(e.parentNode, n); else {
                                        var i = document.querySelector(".uiStreamStory"), l = i && i.parentNode;
                                        (l = l && l.parentNode) && l.contains(e) && O.addDownloadBtn(e.parentNode, n);
                                    }
                                }
                            } else e.dataset.hasSfFeedBtn = 0;
                        });
                    }
                },
                rmBtn: function() {
                    let e = [ Object(c.a)("hasSfFeedBtn"), Object(c.a)("sfReady") ];
                    const t = e.map(e => `[${e}]`).join(",");
                    document.querySelectorAll(t).forEach(t => {
                        e.forEach(e => t.removeAttribute(e));
                    });
                    const n = [ ".sf-hover-container", ".sf-download-container", "." + g.className + "-feed" ].join(",");
                    document.querySelectorAll(n).forEach(e => {
                        e.parentNode.removeChild(e);
                    });
                }
            };
        }));
    },
    74: function(e, t, n) {
        var r = n(40), o = n(94);
        "string" == typeof (o = o.__esModule ? o.default : o) && (o = [ [ e.i, o, "" ] ]);
        var a, i = 0, l = {
            injectType: "lazyStyleTag",
            insert: "head",
            singleton: !1
        }, s = {};
        s.locals = o.locals || {}, s.use = function() {
            return i++ || (a = r(o, l)), s;
        }, s.unuse = function() {
            i > 0 && !--i && (a(), a = null);
        }, e.exports = s;
    },
    94: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(26), o = n.n(r)()(!1);
        o.push([ e.i, ".VUkNZ--container{display:flex;font-family:inherit;margin-right:10px;font-weight:600;color:#65676b;line-height:1.6;border-radius:4px;padding:5px 4px;cursor:pointer}.VUkNZ--container:hover{background-color:rgba(0,0,0,.05)}.vRyx2--text{margin-left:4px}.BXrR8--circle-container{padding:0;border-radius:100%;width:40px;height:40px;background:#e4e6eb}.BXrR8--circle-container:hover{background-color:#fff}.BXrR8--circle-container .J6uYv--logo{margin:0 auto;max-width:20px}", "" ]), 
        o.locals = {
            container: "VUkNZ--container",
            text: "vRyx2--text",
            "circle-container": "BXrR8--circle-container",
            circleContainer: "BXrR8--circle-container",
            logo: "J6uYv--logo"
        }, t.default = o;
    }
});