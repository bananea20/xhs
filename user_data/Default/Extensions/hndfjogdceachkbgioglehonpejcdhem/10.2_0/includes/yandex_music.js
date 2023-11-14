!function(e) {
    function t(t) {
        for (var n, s, i = t[0], l = t[1], c = t[2], u = 0, p = []; u < i.length; u++) s = i[u], 
        Object.prototype.hasOwnProperty.call(o, s) && o[s] && p.push(o[s][0]), o[s] = 0;
        for (n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n]);
        for (d && d(t); p.length; ) p.shift()();
        return a.push.apply(a, c || []), r();
    }
    function r() {
        for (var e, t = 0; t < a.length; t++) {
            for (var r = a[t], n = !0, i = 1; i < r.length; i++) {
                var l = r[i];
                0 !== o[l] && (n = !1);
            }
            n && (a.splice(t--, 1), e = s(s.s = r[0]));
        }
        return e;
    }
    var n = {}, o = {
        18: 0
    }, a = [];
    function s(t) {
        if (n[t]) return n[t].exports;
        var r = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(r.exports, r, r.exports, s), r.l = !0, r.exports;
    }
    s.m = e, s.c = n, s.d = function(e, t, r) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        });
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (s.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var n in e) s.d(r, n, function(t) {
            return e[t];
        }.bind(null, n));
        return r;
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return s.d(t, "a", t), t;
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, s.p = "";
    var i = window.savefromContentScriptWebpackJsonp = window.savefromContentScriptWebpackJsonp || [], l = i.push.bind(i);
    i.push = t, i = i.slice();
    for (var c = 0; c < i.length; c++) t(i[c]);
    var d = l;
    a.push([ 103, 0 ]), r();
}({
    103: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(19), o = r(0), a = r(11), s = r(10), i = r(47);
        r(6);
        var l = r(7), c = r(1), d = r(8), u = r(17), p = r(9);
        const h = Object(l.a)("ya_playlist"), f = Object(l.a)("playlistButtons"), y = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
        class b {
            constructor(e) {
                this.selector = ".d-track .d-track__actions", this.type = "added", this.utils = e;
            }
            handle(e) {
                let {added: t} = e;
                this.renderButtons(t);
            }
            renderButtons(e) {
                e.filter(e => !e.dataset.sfSongReady).map(e => {
                    e.dataset.sfSongReady = "1";
                    try {
                        const t = e.closest(".d-track");
                        if (!t) return;
                        this.prepareButton(t).then(t => {
                            t && (t.title = o.a.i18n.getMessage("download"), e.style.width = "max-content", 
                            Object(d.a)({
                                category: "append",
                                subcategory: "ya",
                                event: "b"
                            }), e.insertBefore(t, null));
                        });
                    } catch (e) {
                        f.error(e);
                    }
                });
            }
            async prepareButton(e) {
                const t = c.a.create("a", {
                    class: [ "d-track__hover", "sf-download" ],
                    append: [ c.a.create(this.utils.svg.getSvg("download", "#747474"), {
                        style: {
                            marginTop: "2px"
                        }
                    }) ],
                    on: [ [ "mouseover", e => {
                        if (y) {
                            if (!e.altKey && !e.ctrlKey) return e.preventDefault(), void Object(u.b)(t, {
                                defaultWidth: 400,
                                defaultHeight: 60
                            });
                            Object(u.a)(t, {
                                defaultWidth: 400,
                                defaultHeight: 60
                            });
                        }
                    } ] ]
                });
                try {
                    const r = await p.a.createLinkExtractor("ya-artist").extractLinks({
                        element: e
                    });
                    return t.download = r[0].filename, t.href = r[0].url, t.addEventListener("click", e => {
                        e.stopPropagation(), this.utils.downloadOnClick(e);
                    }), t;
                } catch (e) {
                    h.error("Ya link extractor error: ", e);
                }
            }
            setError(e) {
                e.title = o.a.i18n.getMessage("vkMp3LinksNotFound"), e.classList.add("sf-icon-error");
            }
            disable() {
                const e = [ "data-sf-song-ready", "data-sf-info" ], t = document.querySelectorAll(e.map(e => `[${e}]`).join(","));
                Array.from(t).forEach(t => ((e, t) => t.forEach(t => e.removeAttribute(t)))(t, e)), 
                Array.from(document.querySelectorAll(".sf-download")).forEach(e => e.remove());
            }
        }
        const m = Object(l.a)("ya_player");
        class g {
            constructor(e) {
                this.selector = ".player-controls .deco-link.track__title", this.type = "added", 
                this.observer = void 0, this.button = void 0, this.utils = e;
            }
            handle(e) {
                let {added: t} = e;
                const r = t.pop();
                if (!r) return;
                const n = r.closest(".player-controls").querySelector(".player-controls__seq-controls");
                n && this.renderButton(n);
            }
            renderButton(e) {
                if (e.dataset.sfReady) return;
                const t = c.a.create("a", {
                    title: o.a.i18n.getMessage("download"),
                    class: [ "player-controls__btn", "deco-player-controls__button", "sf-download-in-control" ],
                    append: [ c.a.create(this.utils.svg.getSvg("download", "#747474", 19, 19), {
                        style: {
                            marginTop: "3px"
                        }
                    }) ],
                    on: [ [ "click", e => {
                        e.stopPropagation(), this.utils.downloadOnClick(e);
                    } ] ]
                });
                e.append(t), this.prepareButton(t), !this.observer && this.createObserver(t), e.dataset.sfReady = "1";
            }
            createObserver(e) {
                this.observer = new a.a({
                    queries: [ {
                        css: ".player-controls__track.player-controls__track_shown",
                        is: "removed",
                        callback: () => this.prepareButton(e)
                    } ]
                }), this.observer.start();
            }
            async prepareButton(e) {
                const t = e.closest(".player-controls");
                if (t) try {
                    const r = await p.a.createLinkExtractor("ya-artist").extractLinks({
                        element: t
                    });
                    return e.download = r[0].filename, e.href = r[0].url, e;
                } catch (e) {
                    m.error("Ya link extractor error: ", e);
                }
            }
            disable() {
                this.observer && this.observer.stop(), Array.from(document.querySelectorAll("[data-sf-ready]")).forEach(e => e.removeAttribute("data-sf-ready"));
                const e = document.querySelector(".sf-download-in-control");
                e && e.remove();
            }
        }
        function v(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), r.push.apply(r, n);
            }
            return r;
        }
        function w(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2 ? v(Object(r), !0).forEach((function(t) {
                    Object(n.a)(e, t, r[t]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                }));
            }
            return e;
        }
        class O extends i.a {
            constructor() {
                super(...arguments), this.active = 1, this.mutationHandlers = [];
            }
            async init() {
                this.settings = await o.a.callFn("getPreferences"), this.active = Number(this.settings.moduleYandexMusic), 
                this.utils = Object(s.a)({
                    preferences: this.settings
                }), this.registerListeners(), this.active && this.initObserver(), this.appendStyle("\n      .theme-white .sf-download { background: white;  box-shadow: 0 0 7px 7px white; }\n      .theme_dark .sf-download { background: #181818; box-shadow: 0 0 7px 7px #181818; } \n      \n      .theme-white .sf-download:hover path { fill: black; }\n      .theme_dark .sf-download:hover path { fill: white; }\n        \n      .theme-white .sf-download path { fill: #a7a7a7; }  \n      \n      .sf-download {\n            margin-top: 3px;\n            margin-right: 6px;\n            padding-right: 10px;\n            padding-left: 10px;\n            float:left;\n      }\n      \n      .sf-download-in-control {\n            margin: 12px;\n            width: 11px;\n            height: 22px;\n            margin-top: 9px;\n      }\n      \n      .theme_dark .sf-download-in-control path { fill: white; }\n      .theme-white .sf-download-in-control path { fill: #3c3b3b; }\n      \n      .sf-icon-error path, .sf-icon-error:hover path { fill: #ff33334a!important; }\n");
            }
            initObserver() {
                this.mutationHandlers = [ new b(this.utils), new g(this.utils) ];
                this.observer = new a.a({
                    queries: this.mutationHandlers.map(e => ({
                        css: e.selector,
                        callback: e.handle.bind(e),
                        is: e.type
                    }))
                }), this.observer.start();
            }
            registerListeners() {
                o.a.onMessage.addListener(async (e, t, r) => {
                    const {action: n, moduleName: o, state: a} = e;
                    if ("getModuleInfo" === n) return r({
                        state: this.active,
                        moduleName: O.moduleName
                    });
                    "updatePreferences" !== n ? (this.handleMonoChangeActive(n, o, a), this.handleMonoDownloadAll(n)) : this.settings = w(w({}, this.settings), e.preferences);
                });
            }
            async handleMonoDownloadAll(e) {
                if ("downloadMP3Files" !== e) return;
                let t = Array.from(document.querySelectorAll("a.sf-download[download][href]"));
                t = t.map(e => ({
                    url: e.href,
                    title: e.download,
                    filename: e.download
                })), this.utils.downloadList.showBeforeDownloadPopup(t, {
                    type: "audio",
                    folderName: document.title.trim()
                });
            }
            handleMonoChangeActive(e, t, r) {
                if (O.moduleName === t && "changeState" === e) {
                    if (this.active = r, this.active) return this.initObserver();
                    this.observer.stop(), this.mutationHandlers.forEach(e => e.disable());
                }
            }
        }
        O.moduleName = "yandexMusic";
        var x = r(15), k = r(18);
        const j = new O;
        k.a.isSingle() && Object(x.a)(O.moduleName, () => j.start(), () => -1 === location.href.indexOf("api/"));
    }
});