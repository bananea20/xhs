!function(e) {
    function t(t) {
        for (var i, d, s = t[0], r = t[1], l = t[2], u = 0, f = []; u < s.length; u++) d = s[u], 
        Object.prototype.hasOwnProperty.call(o, d) && o[d] && f.push(o[d][0]), o[d] = 0;
        for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
        for (c && c(t); f.length; ) f.shift()();
        return n.push.apply(n, l || []), a();
    }
    function a() {
        for (var e, t = 0; t < n.length; t++) {
            for (var a = n[t], i = !0, s = 1; s < a.length; s++) {
                var r = a[s];
                0 !== o[r] && (i = !1);
            }
            i && (n.splice(t--, 1), e = d(d.s = a[0]));
        }
        return e;
    }
    var i = {}, o = {
        4: 0
    }, n = [];
    function d(t) {
        if (i[t]) return i[t].exports;
        var a = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, d), a.l = !0, a.exports;
    }
    d.m = e, d.c = i, d.d = function(e, t, a) {
        d.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        });
    }, d.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, d.t = function(e, t) {
        if (1 & t && (e = d(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var a = Object.create(null);
        if (d.r(a), Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) d.d(a, i, function(t) {
            return e[t];
        }.bind(null, i));
        return a;
    }, d.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return d.d(t, "a", t), t;
    }, d.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, d.p = "";
    var s = window.savefromContentScriptWebpackJsonp = window.savefromContentScriptWebpackJsonp || [], r = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var l = 0; l < s.length; l++) t(s[l]);
    var c = r;
    n.push([ 96, 0 ]), a();
}({
    96: function(e, t, a) {
        "use strict";
        a.r(t);
        var i = a(0), o = a(1), n = a(28), d = a(56), s = a(3), r = a(12), l = a(18), c = a(11), u = a(10), f = a(23), p = a(33), v = a(15), h = a(16), m = a(13), b = a(8), y = a(17), g = a(9);
        l.a.isSingle() && Object(v.b)("instagram", (function(e, t) {
            const a = Object(u.a)(t), n = t.preferences;
            let l = n.moduleInstagram ? 1 : 0;
            const v = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
            i.a.onMessage.addListener((function(t, a, i) {
                if ("getModuleInfo" === t.action) {
                    if (t.url !== location.href) return;
                    return i({
                        state: l,
                        moduleName: e
                    });
                }
                if ("changeState" === t.action) {
                    if (e !== t.moduleName) return;
                    return S.changeState(t.state);
                }
                if ("updatePreferences" !== t.action) {
                    if (l) return "updateLinks" === t.action ? S.updateLinks() : void 0;
                } else Object.assign(n, t.preferences);
            })), l && setTimeout((function() {
                S.run();
            }));
            const S = {
                dlBtnClassName: "savefrom-helper--btn",
                styleEl: null,
                run: function() {
                    l = 1, this.insertStyle(), c.a.isAvailable() && this.mutationMode.enable();
                },
                rmStyle: function() {
                    this.styleEl && this.styleEl.parentNode && this.styleEl.parentNode.removeChild(this.styleEl);
                },
                insertStyle: function() {
                    this.styleEl ? this.styleEl.parentNode || document.head.appendChild(this.styleEl) : (this.styleEl = o.a.create("style", {
                        text: Object(r.a)([ {
                            selector: "." + this.dlBtnClassName,
                            style: {
                                display: "none",
                                border: "1px solid #F8F8F8",
                                top: "8px",
                                right: "8px",
                                padding: 0,
                                position: "absolute",
                                backgroundColor: "#F8F8F8",
                                cursor: "pointer",
                                lineHeight: 0
                            }
                        }, {
                            selector: "." + this.dlBtnClassName + " svg",
                            style: {
                                margin: "2px"
                            }
                        }, {
                            selector: "." + this.dlBtnClassName + " svg path",
                            style: {
                                fill: "#777777"
                            }
                        }, {
                            selector: ".Embed ." + this.dlBtnClassName,
                            style: {
                                border: "1px solid #B5B5B5",
                                borderRadius: "4px",
                                padding: "3px"
                            }
                        }, {
                            selector: "." + this.dlBtnClassName + ":hover svg path",
                            style: {
                                fill: "#3f729b"
                            }
                        }, {
                            selector: "." + this.dlBtnClassName + ":active",
                            style: {
                                outline: 0,
                                boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.125)"
                            }
                        }, {
                            selector: [ "*:hover > ." + this.dlBtnClassName, "*.sf-touch-show > ." + this.dlBtnClassName ],
                            style: {
                                display: "block"
                            }
                        }, {
                            selector: "*.sf-touch-hide > ." + this.dlBtnClassName,
                            style: {
                                display: "none"
                            }
                        } ])
                    }), document.head.appendChild(this.styleEl));
                },
                updateLinks: function() {
                    this.changeState(0), this.changeState(1);
                },
                changeState: function(e) {
                    l = e, this.rmDlBtn(), this.rmStyle(), this.mutationMode.stop(), e && this.run();
                },
                rmDlBtn: function() {
                    const e = document.querySelectorAll("." + this.dlBtnClassName);
                    for (let t, a = 0; t = e[a]; a++) t.parentNode.removeChild(t);
                },
                getDbBtnEl: function(e) {
                    Object(b.a)({
                        category: "append",
                        subcategory: "in",
                        event: "b"
                    });
                    const t = o.a.create("a", {
                        class: [ this.dlBtnClassName ],
                        href: e.url,
                        download: e.filename,
                        title: i.a.i18n.getMessage("download"),
                        style: {
                            position: "absolute",
                            zIndex: 100
                        },
                        on: [ [ "click", k ], [ "mouseover", e => {
                            if (v) {
                                if (!e.altKey && !e.ctrlKey) return e.preventDefault(), void Object(y.b)(t, {
                                    content: i.a.i18n.getMessage("downloadTitle"),
                                    defaultWidth: 400,
                                    defaultHeight: 60
                                }, {
                                    el: {
                                        className: "mp4",
                                        download: "mp4"
                                    }
                                });
                                Object(y.a)(t, {
                                    content: i.a.i18n.getMessage("downloadTitle"),
                                    defaultWidth: 400,
                                    defaultHeight: 60
                                });
                            }
                        } ] ],
                        append: [ a.svg.getSvg("download", null, 16, 16) ]
                    });
                    return t;
                },
                showOnTouch: function(e, t) {
                    if (e.dataset.sfTouch > 0) return;
                    let a = !1, i = null;
                    const n = function() {
                        a && (clearTimeout(i), i = setTimeout((function() {
                            a && (a = !1, e.classList.remove("sf-touch-show"), e.classList.add("sf-touch-hide"));
                        }), 3e3));
                    };
                    o.a.create(e, {
                        data: {
                            sfTouch: "1"
                        },
                        on: [ [ "touchstart", function(t) {
                            a || (a = !0, e.classList.remove("sf-touch-hide"), e.classList.add("sf-touch-show"));
                        } ], [ "touchend", function(e) {
                            n();
                        } ] ]
                    });
                },
                addDlBtn: async function(e, t, a) {
                    const i = "embed" === t;
                    let n = e, r = null;
                    e.classList.add("sf-root-media-container"), e.style.position = "relative";
                    let l, c = e.querySelector("div > div > video");
                    if (c || "video" !== a.tagName || "strangeVideo" !== t || (c = a), c) {
                        const [e] = await g.a.createLinkExtractor("ig-post-video").extractLinks({
                            element: c
                        });
                        r = e;
                    }
                    if (!r) if (i) {
                        if (l = n.querySelector(".EmbedFrame img.EmbeddedMediaImage"), l) {
                            const [e] = await g.a.createLinkExtractor("ig-post-photo").extractLinks({
                                element: l
                            });
                            r = e;
                        }
                    } else if (l = n.querySelector("div > img[src][srcset]"), l) {
                        const [e] = await g.a.createLinkExtractor("ig-post-photo").extractLinks({
                            element: l
                        });
                        r = e;
                    } else {
                        if (l = n.querySelector("div > img"), l) {
                            const [e] = await g.a.createLinkExtractor("ig-post-photo").extractLinks({
                                element: l
                            });
                            r = e;
                        }
                        if (l && ("hidden" === l.style.visibility || !l.src)) {
                            const i = new p.a({
                                target: l,
                                attrs: [ {
                                    name: "src",
                                    callback: o => {
                                        o.value && (this.addDlBtn(e, t, a), i.stop());
                                    }
                                } ]
                            });
                        }
                    }
                    if (!r) return;
                    const u = this.getDbBtnEl(r);
                    let f = "", v = null;
                    l ? (f = "image", v = l) : (f = "video", v = c);
                    const h = new p.a({
                        target: v,
                        attrs: [ {
                            name: "src",
                            callback: async e => {
                                if (e.value !== r.url) {
                                    if (r = null, "image" === f) {
                                        const [e] = await g.a.createLinkExtractor("ig-post-photo").extractLinks({
                                            element: v
                                        });
                                        r = e;
                                    } else {
                                        const [e] = await g.a.createLinkExtractor("ig-post-video").extractLinks({
                                            element: v
                                        });
                                        r = e;
                                    }
                                    r && u.parentNode ? (u.href = r.url, u.download = r.filename) : h.stop();
                                }
                            }
                        } ]
                    });
                    if (s.a.onRemoveEvent(v, (function() {
                        Object(d.a)(document.body, a) && (a.dataset.sfSkip = 0, S.mutationMode.observer.trigger(a));
                    })), i) {
                        const e = document.querySelector(".Header");
                        e && (n = e, o.a.create(u, {
                            style: {
                                position: "relative",
                                zIndex: 100,
                                display: "block",
                                left: "auto",
                                top: "auto",
                                marginLeft: "10px"
                            }
                        }));
                    }
                    n.appendChild(u), this.showOnTouch(n, u);
                },
                addBtnVideoStory() {
                    const e = document.querySelector("section > div > header");
                    if (!e) return;
                    const t = S.createStoryContainer(e);
                    setTimeout(async () => {
                        const [{url: a, filename: i}] = await g.a.createLinkExtractor("ig-story-video").extractLinks({
                            element: e
                        }), o = S.createStoryButton(a, i);
                        o.addEventListener("click", k), t.appendChild(o);
                    }, 100);
                },
                addBtnImageStory(e) {
                    const t = document.querySelector("section > div > header");
                    if (!t) return;
                    const a = S.createStoryContainer(t);
                    setTimeout(async () => {
                        const [{url: t, filename: i}] = await g.a.createLinkExtractor("ig-story-photo").extractLinks({
                            element: e
                        }), o = S.createStoryButton(t, i);
                        o.addEventListener("click", k), a.appendChild(o);
                    }, 100);
                },
                createStoryContainer(e) {
                    if (!e) return;
                    let t = document.querySelector(".sf--story-container");
                    t && t.remove();
                    const a = o.a.create("div", {
                        className: "sf--story-container"
                    }), i = document.querySelector("header > div:nth-child(2) > div:nth-child(2)");
                    if (!i) return e.appendChild(a), a;
                    const n = i.querySelector("button");
                    return n ? i.insertBefore(a, n) : e.appendChild(a), a;
                },
                createStoryButton(e, t) {
                    Object(b.a)({
                        category: "append",
                        subcategory: "in",
                        event: "b"
                    });
                    const n = o.a.create("a", {
                        className: "sf--story-btn",
                        append: [ a.svg.getSvg("download", "white", 15, 15) ],
                        download: t,
                        href: e,
                        style: {
                            cursor: "pointer",
                            marginRight: "2px",
                            marginTop: "2px"
                        },
                        on: [ "mouseover", e => {
                            if (v) {
                                if (!e.altKey && !e.ctrlKey) return e.preventDefault(), void Object(y.b)(n, {
                                    content: i.a.i18n.getMessage("downloadTitle"),
                                    defaultWidth: 400,
                                    defaultHeight: 60
                                }, {
                                    el: {
                                        className: "story"
                                    }
                                });
                                Object(y.a)(n, {
                                    content: i.a.i18n.getMessage("downloadTitle"),
                                    defaultWidth: 400,
                                    defaultHeight: 60
                                });
                            }
                        } ]
                    });
                    return n;
                },
                mutationMode: {
                    observer: null,
                    stop: function() {
                        this.observer && this.observer.stop(), [ "sfSkip" ].forEach((function(e) {
                            const t = Object(f.a)(e), a = document.querySelectorAll("[" + t + "]");
                            for (let e, i = 0; e = a[i]; i++) e.removeAttribute(t);
                        }));
                    },
                    enable: function() {
                        if (this.observer) return this.observer.start();
                        this.observer = new c.a({
                            queries: [ {
                                css: 'section > div > div > div[style*="scale(1)"] > section > div > div > div > div, section > div:not([style]) > div > div > div',
                                is: "added",
                                callback(e) {
                                    let {added: t} = e;
                                    const a = () => {
                                        document.querySelectorAll(".sf--story-btn").forEach(e => e.remove());
                                    };
                                    t.forEach(e => {
                                        const t = e.querySelector("video");
                                        if (t) a(), S.addBtnVideoStory(t); else {
                                            const t = e.querySelector("img");
                                            t && (a(), S.addBtnImageStory(t));
                                        }
                                    });
                                }
                            }, {
                                css: 'div > div > article > div > div:nth-child(2) div[role="button"],\n              div > div > article div[style*="padding-bottom: 177"]',
                                is: "added",
                                callback: e => {
                                    for (let t, a = 0; t = e.added[a]; a++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                    S.addDlBtn(t.parentNode, "", t));
                                }
                            }, {
                                css: "._5wCQW > video[controls]",
                                is: "added",
                                callback: e => {
                                    for (let t, a = 0; t = e.added[a]; a++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                    S.addDlBtn(t.parentNode, "strangeVideo", t));
                                }
                            }, {
                                css: 'div > div > article > div > div:nth-child(1) div[role="button"]',
                                is: "added",
                                callback: e => {
                                    for (let t, a = 0; t = e.added[a]; a++) t.dataset.sfSkip > 0 || t.querySelector("ul > li") || (t.dataset.sfSkip = "1", 
                                    S.addDlBtn(t.parentNode, "", t));
                                }
                            }, {
                                css: 'div > div > article > div > div:nth-child(1)  div[style*="padding-bottom: 177"],\n              div[role="button"] div[style*="padding-bottom: 177"],\n              div[role="button"] div[style*="width: 100%;"],\n              article[role="presentation"] div[style*="padding-bottom: 100%;"],\n              div[role="button"] div[style*="padding-bottom: 100%;"],\n              div[role="dialog"] article[role="presentation"] div[style*="padding-bottom:"]',
                                is: "added",
                                callback: e => {
                                    for (let t, a = 0; t = e.added[a]; a++) t.dataset.sfSkip > 0 || t.querySelector("ul > li") || (t.dataset.sfSkip = "1", 
                                    S.addDlBtn(t.parentNode, "", t));
                                }
                            }, {
                                css: 'div > div > article > div > div:nth-child(2)  div[style*="padding-bottom: 56.2963%"]',
                                is: "added",
                                callback: e => {
                                    for (let t, a = 0; t = e.added[a]; a++) t.dataset.sfSkip > 0 || t.querySelector("ul > li") || (t.dataset.sfSkip = "1", 
                                    S.addDlBtn(t.parentNode, "", t));
                                }
                            }, {
                                css: 'div > div > article > div > div[class*="_aatn"] > div > div > div > div ,\n              section div[role="button"] div[style*="padding-bottom:"]',
                                is: "added",
                                callback: e => {
                                    let {added: t} = e;
                                    for (let e, a = 0; e = t[a]; a++) "1" !== e.dataset.sfSkip && (e.dataset.sfSkip = "1", 
                                    S.addDlBtn(e.parentNode, "", e));
                                }
                            }, {
                                css: 'div > div > article > div div[class*="_aatk"] div[role*="presentation"] ul > li:nth-child(2) > div > div > div > div > div > div  ',
                                is: "added",
                                callback: e => {
                                    let {added: t} = e;
                                    for (let e, a = 0; e = t[a]; a++) "1" !== e.dataset.sfSkip && (e.dataset.sfSkip = "1", 
                                    S.addDlBtn(e.parentNode, "", e));
                                }
                            }, {
                                css: 'div > div > article > div > div:nth-child(1) div[style*="height: calc(100% + 1px); position: absolute; width: 100%;"] > div',
                                is: "added",
                                callback: e => {
                                    for (let t, a = 0; t = e.added[a]; a++) t.dataset.sfSkip > 0 || t.querySelector("ul > li") || (t.dataset.sfSkip = "1", 
                                    S.addDlBtn(t.parentNode, "", t));
                                }
                            }, {
                                css: ".Embed > .Content.EmbedFrame > .EmbedVideo",
                                is: "added",
                                callback: e => {
                                    for (let t, a = 0; t = e.added[a]; a++) {
                                        if (t.dataset.sfSkip > 0) continue;
                                        t.dataset.sfSkip = "1";
                                        const e = Object(h.a)(t, ".Embed");
                                        e && (e.dataset.sfSkip = "1", S.addDlBtn(e, "embed", e));
                                    }
                                }
                            }, {
                                css: ".Embed > .Content.EmbedFrame.EmbedFrameWithSidecar > .EmbedSidecar > div > div > div + div > div > div > div > ul > li > div:nth-child(1) > div:nth-child(1)",
                                is: "added",
                                callback: e => {
                                    for (let t, a = 0; t = e.added[a]; a++) {
                                        if (t.dataset.sfSkip > 0) continue;
                                        t.dataset.sfSkip = "1";
                                        const e = Object(h.a)(t, ".Embed");
                                        if (e && e.dataset.sfSkip > 0) {
                                            const e = document.querySelector(".Header");
                                            e && w(e);
                                        }
                                        S.addDlBtn(t.parentNode, "", t);
                                    }
                                }
                            }, {
                                css: ".Embed",
                                is: "added",
                                callback: e => {
                                    for (let t, a = 0; t = e.added[a]; a++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                    S.addDlBtn(t, "embed", t));
                                }
                            }, {
                                css: "." + s.a.onRemoveClassName,
                                is: "removed",
                                callback: e => {
                                    for (let t, a = 0; t = e.removed[a]; a++) s.a.onRemoveListener(t);
                                }
                            } ]
                        });
                    }
                }
            };
            function k(e) {
                return e.stopPropagation(), i.a.isFirefox ? (e.preventDefault(), function(e, t, a) {
                    "sf--story-btn" === a ? Object(b.a)({
                        category: "download",
                        subcategory: "in",
                        event: "story"
                    }) : t.includes("mp4") ? Object(b.a)({
                        category: "download",
                        subcategory: "in",
                        event: "video"
                    }) : Object(b.a)({
                        category: "download",
                        subcategory: "in",
                        event: "photo"
                    });
                    return Object(m.a)({
                        action: "ffInstagramDownloadMedia",
                        downloadFileUrl: e,
                        filename: t
                    });
                }(this.href, this.download)) : a.downloadOnClick(e, void 0, {
                    el: this
                });
            }
            function w(e) {
                const t = e.querySelectorAll("." + S.dlBtnClassName);
                for (let e, a = 0; e = t[a]; a++) e.classList.remove(s.a.onRemoveClassName), e.parentNode.removeChild(e);
            }
        }), (function() {
            return !Object(n.a)() || !!/\/\/[^\/]+\.[^\/]+\/p\//.test(location.href);
        }));
    }
});