!function(A) {
    function e(e) {
        for (var n, r, o = e[0], i = e[1], c = e[2], d = 0, u = []; d < o.length; d++) r = o[d], 
        Object.prototype.hasOwnProperty.call(a, r) && a[r] && u.push(a[r][0]), a[r] = 0;
        for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (A[n] = i[n]);
        for (l && l(e); u.length; ) u.shift()();
        return s.push.apply(s, c || []), t();
    }
    function t() {
        for (var A, e = 0; e < s.length; e++) {
            for (var t = s[e], n = !0, o = 1; o < t.length; o++) {
                var i = t[o];
                0 !== a[i] && (n = !1);
            }
            n && (s.splice(e--, 1), A = r(r.s = t[0]));
        }
        return A;
    }
    var n = {}, a = {
        12: 0
    }, s = [];
    function r(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return A[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports;
    }
    r.m = A, r.c = n, r.d = function(A, e, t) {
        r.o(A, e) || Object.defineProperty(A, e, {
            enumerable: !0,
            get: t
        });
    }, r.r = function(A) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(A, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(A, "__esModule", {
            value: !0
        });
    }, r.t = function(A, e) {
        if (1 & e && (A = r(A)), 8 & e) return A;
        if (4 & e && "object" == typeof A && A && A.__esModule) return A;
        var t = Object.create(null);
        if (r.r(t), Object.defineProperty(t, "default", {
            enumerable: !0,
            value: A
        }), 2 & e && "string" != typeof A) for (var n in A) r.d(t, n, function(e) {
            return A[e];
        }.bind(null, n));
        return t;
    }, r.n = function(A) {
        var e = A && A.__esModule ? function() {
            return A.default;
        } : function() {
            return A;
        };
        return r.d(e, "a", e), e;
    }, r.o = function(A, e) {
        return Object.prototype.hasOwnProperty.call(A, e);
    }, r.p = "";
    var o = window.savefromContentScriptWebpackJsonp = window.savefromContentScriptWebpackJsonp || [], i = o.push.bind(o);
    o.push = e, o = o.slice();
    for (var c = 0; c < o.length; c++) e(o[c]);
    var l = i;
    s.push([ 102, 0 ]), t();
}({
    102: function(A, e, t) {
        "use strict";
        t.r(e);
        var n = t(19), a = t(0), s = t(47), r = t(10), o = t(11);
        var i = t(18), c = t(15), l = t(8), d = t(17);
        const u = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
        function p(A) {
            return A.dataset.sfSongReady = 1, A;
        }
        const g = A => !A.dataset.sfSongReady, h = () => {
            try {
                return "Tampermonkey" === GM_info.scriptHandler || "Violentmonkey" === GM_info.scriptHandler;
            } catch (A) {
                return !1;
            }
        }, Q = () => {
            if (h()) return !1;
            return !(a.a.isGM && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome"));
        }, w = A => {
            let {url: e, filename: t} = A;
            if (h()) {
                const A = document.createElement("a");
                A.style.display = "none", A.href = e, A.setAttribute("target", "_blank"), A.download = t, 
                document.body.appendChild(A), A.click(), A.remove();
            } else {
                const A = new CustomEvent("song.download", {
                    detail: {
                        downloadURL: e,
                        filename: t
                    }
                });
                document.dispatchEvent(A);
            }
        }, y = A => {
            const e = document.createElement("a");
            return e.target = "_blank", A && e.classList.add("sf--sc-" + A), e.classList.add("sf--sc-btn", "sc-button", "sc-button-small", "sc-button-icon", "sc-button-responsive"), 
            e.addEventListener("mouseenter", A => {
                if (u) {
                    if (!A.altKey && !A.ctrlKey) return A.preventDefault(), void Object(d.b)(e, {
                        content: a.a.i18n.getMessage("downloadTitle"),
                        defaultWidth: 400,
                        defaultHeight: 60
                    });
                    Object(d.a)(e, {
                        content: a.a.i18n.getMessage("downloadTitle"),
                        defaultWidth: 400,
                        defaultHeight: 60
                    });
                }
            }), Object(l.a)({
                category: "append",
                subcategory: "so",
                event: "b"
            }), e;
        }, C = (A, e) => {
            [ "loading", "error", "playlist", "default" ].includes(e) && (A.classList.remove("sf--sc-loading"), 
            A.classList.add("sf--sc-" + e));
        };
        var E = t(9);
        class m {
            constructor() {
                this.selector = '[role="group"].sound.playlist.streamContext', this.type = "added";
            }
            handle(A) {
                let {added: e} = A;
                e.filter(g).map(p).map(A => this.renderDownloadButton(A));
            }
            renderDownloadButton(A) {
                const e = A.querySelector(".sc-button-group"), t = y("playlist");
                t.classList.add("sc-usercard-playlist"), t.addEventListener("click", this.downloadPlaylist.bind(this)), 
                e.appendChild(t);
            }
            async downloadPlaylist(A) {
                A.stopPropagation();
                const e = A.target;
                C(e, "loading");
                try {
                    const t = await E.a.createLinkExtractor("so-audio").extractLinks({
                        element: A.target
                    });
                    (await Promise.all(t)).map(w);
                } catch (A) {
                    throw C(e, "error"), A;
                } finally {
                    C(e, "default");
                }
            }
        }
        var M = t(7);
        Object(M.a)("userCardSingleTrack");
        class B {
            constructor(A) {
                this.selector = '[role="group"].sound.streamContext:not(.playlist)', this.type = "added", 
                this.utils = A;
            }
            handle(A) {
                let {added: e} = A;
                e.filter(g).map(p).map(A => this.renderDownloadButton(A));
            }
            renderDownloadButton(A) {
                const e = A.querySelector(".sc-button-group");
                e && this.btnPrepare(A).then(A => {
                    A && e.appendChild(A);
                });
            }
            async btnPrepare(A) {
                const e = y(), [t] = await E.a.createLinkExtractor("so-audio").extractLinks({
                    element: A
                });
                if (t.url && t.filename) return e.classList.add("sc-usercard-single-track"), e.href = t.url, 
                e.download = t.filename, e.addEventListener("click", this.utils.downloadOnClick), 
                e;
            }
        }
        const k = [ ".listenDetails .trackItem.g-flex-row.sc-type-small .sc-button-group, .chartTrack .sc-button-group", ".trackItem.g-flex-row.sc-type-small.m-playable .sc-button-group" ].join(",");
        class b {
            constructor(A) {
                this.selector = k, this.type = "added", this.utils = A;
            }
            handle(A) {
                let {added: e} = A;
                e.filter(g).map(p).map(A => this.renderDownloadButton(A));
            }
            renderDownloadButton(A) {
                this.btnPrepare(A).then(e => {
                    Object(l.a)({
                        category: "append",
                        subcategory: "so",
                        event: "b"
                    }), e && A.appendChild(e);
                });
            }
            async btnPrepare(A) {
                const e = y(), [t] = await E.a.createLinkExtractor("so-audio").extractLinks({
                    element: A
                });
                if (t.url && t.filename) return e.classList.add("sc-page-playlist"), e.href = t.url, 
                e.download = t.filename, e.addEventListener("click", this.utils.downloadOnClick), 
                e;
            }
        }
        const f = ".sidebarContent .sc-media:not(.hiddenActions) .sc-button-group", I = ".l-about-top .sc-button-group:nth-child(1)", L = ".l-about-row .sound__soundActions .sc-button-group:nth-child(1)";
        class S {
            constructor(A) {
                this.selector = [ L, f, I ].join(","), this.type = "added", this.utils = A;
            }
            handle(A) {
                let {added: e} = A;
                e.filter(g).map(p).map(A => this.renderDownloadButton(A));
            }
            renderDownloadButton(A) {
                const e = Q(), t = e || !e && -1 === location.pathname.indexOf("/sets/");
                let n;
                this.isTopSidebar(A) ? t && (n = this.prepareButtonForTop()) : n = this.prepareButtonForSidebar(A), 
                n && n.then(e => {
                    e && A.appendChild(e);
                });
            }
            async prepareButtonForSidebar(A) {
                const e = y(), [t] = await E.a.createLinkExtractor("so-audio").extractLinks({
                    element: A
                });
                if (t.url && t.filename) return e.classList.add("sc-sidebar"), e.href = t.url, e.download = t.filename, 
                e.addEventListener("click", this.utils.downloadOnClick), e;
            }
            async prepareButtonForTop() {
                const A = y();
                A.dataset.position = "sidebar", A.style.width = A.style.height = "26px", A.classList.add("sc-topbar");
                const e = await E.a.createLinkExtractor("so-audio").extractLinks({}), [t] = e;
                return t.url && t.filename ? (A.href = t.url, A.download = t.filename, A.addEventListener("click", this.utils.downloadOnClick), 
                A) : (this.tracks = e, A.addEventListener("click", this.onDownloadPlaylist.bind(this)), 
                A.classList.remove("sc-button-small"), A);
            }
            async onDownloadPlaylist(A) {
                A.preventDefault(), A.stopPropagation(), (await Promise.all(this.tracks)).map(w);
            }
            isTopSidebar(A) {
                return null !== A.closest(".l-about-top");
            }
        }
        function x(A, e) {
            var t = Object.keys(A);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(A);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable;
                }))), t.push.apply(t, n);
            }
            return t;
        }
        function J(A) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? x(Object(t), !0).forEach((function(e) {
                    Object(n.a)(A, e, t[e]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(t)) : x(Object(t)).forEach((function(e) {
                    Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(t, e));
                }));
            }
            return A;
        }
        class K extends s.a {
            constructor() {
                super(...arguments), this.mutationHandlers = [], this.active = 1;
            }
            async init() {
                this.settings = await a.a.callFn("getPreferences"), this.utils = Object(r.a)({
                    preferences: this.settings
                }), this.active = Number(this.settings.moduleSoundcloud), this.registerMonoListeners(), 
                this.registerListeners(), this.active && this.initObserver(), this.appendStyle("\n  .sf--sc-btn {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAPklEQVR42mNgGHTgvw/DfxgexJqBiuYja8CD55NrwHxyXTCfWP/OJ0sjFgPmkxvXCWRFDy6MT3MDITw40j8Ak46HYQ4gDfUAAAAASUVORK5CYII=);\n    background-repeat: no-repeat;\n    background-position: 50%;\n  }\n  .sf--sc-playlist {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAMUlEQVR42mL8//8/A7mAiYECwILC82Uk7IzN/xmpYjPjqJ9H/UxTP1OkGQAAAP//AwDcahUV6UvyJwAAAABJRU5ErkJggg==);\n    background-size: 50%;\n  }\n  .sf--sc-loading {\n    background-image: url(data:image/gif;base64,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);\n    background-size: 50%;\n  }\n  .sf--sc-error {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAVklEQVQoz2P4//8/A7mYgSqa0UF9ff1/GEaXG0SagYrmI2vAg+djtZkIA+bjdTYeA+YT5WcsBswnNcDmY9NIlGaoAQnYxHEFGMHQxqe5gRDGqpnuGQMALmDKhkjc9oYAAAAASUVORK5CYII=);\n  }\n");
            }
            registerListeners() {
                document.addEventListener("song.download", A => {
                    let {detail: e} = A;
                    this.utils.download(e.filename, e.downloadURL);
                });
            }
            registerMonoListeners() {
                const A = A => this.settings = J(J({}, this.settings), {}, {
                    preferences: A
                });
                a.a.onMessage.addListener(async (e, t, n) => {
                    const {action: a, moduleName: s, state: r} = e;
                    if (s === K.moduleName) {
                        if ("getModuleInfo" === a) return n({
                            state: this.active,
                            moduleName: K.moduleName
                        });
                        if ("updatePreferences" === a) return A(e.preferences);
                        if ("changeState" === a) {
                            if (r) return this.initObserver();
                            this.observer.stop();
                            document.querySelectorAll(".sf--sc-btn").forEach(A => A.remove()), document.querySelectorAll('[data-sf-song-ready="1"]').forEach(A => {
                                A.removeAttribute("data-sf-song-ready");
                            });
                        }
                    }
                });
            }
            initObserver() {
                this.mutationHandlers = [ new B(this.utils), new b(this.utils), new S(this.utils) ], 
                Q() && this.mutationHandlers.push(new m);
                this.observer = new o.a({
                    queries: this.mutationHandlers.map(A => ({
                        css: A.selector,
                        callback: A.handle.bind(A),
                        is: A.type
                    }))
                }), this.observer.start();
            }
        }
        K.moduleName = "soundcloud";
        const U = new K;
        i.a.isSingle() && Object(c.a)(K.moduleName, () => U.init(), () => !0);
    }
});