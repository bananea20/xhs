!function(e) {
    function t(t) {
        for (var a, r, l = t[0], o = t[1], d = t[2], p = 0, f = []; p < l.length; p++) r = l[p], 
        Object.prototype.hasOwnProperty.call(i, r) && i[r] && f.push(i[r][0]), i[r] = 0;
        for (a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
        for (c && c(t); f.length; ) f.shift()();
        return s.push.apply(s, d || []), n();
    }
    function n() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], a = !0, l = 1; l < n.length; l++) {
                var o = n[l];
                0 !== i[o] && (a = !1);
            }
            a && (s.splice(t--, 1), e = r(r.s = n[0]));
        }
        return e;
    }
    var a = {}, i = {
        16: 0
    }, s = [];
    function r(t) {
        if (a[t]) return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports;
    }
    r.m = e, r.c = a, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        });
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var a in e) r.d(n, a, function(t) {
            return e[t];
        }.bind(null, a));
        return n;
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return r.d(t, "a", t), t;
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "";
    var l = window.savefromContentScriptWebpackJsonp = window.savefromContentScriptWebpackJsonp || [], o = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var d = 0; d < l.length; d++) t(l[d]);
    var c = o;
    s.push([ 76, 0 ]), n();
}({
    76: function(e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0), i = n(10), s = n(15), r = n(28), l = n(29), o = n(23), d = n(12), c = n(22), p = n(16), f = n(3), u = n(1), b = n(7), y = n(18), h = n(11), g = n(33), m = n(14), v = n(8), k = n(9);
        Object(b.a)("vimeo_com");
        y.a.isSingle() && Object(s.b)("vimeo", (function(e, t) {
            const n = Object(i.a)(t);
            var s = t.preferences, b = s.moduleVimeo ? 1 : 0, y = Object(r.a)();
            a.a.onMessage.addListener((function(t, n, a) {
                if ("getModuleInfo" === t.action) {
                    if (t.url !== location.href) return;
                    return a({
                        state: b,
                        moduleName: e
                    });
                }
                if ("changeState" === t.action) {
                    if (e !== t.moduleName) return;
                    return S.changeState(t.state);
                }
                "updatePreferences" !== t.action || Object.assign(s, t.preferences);
            })), b && setTimeout((function() {
                S.run();
            }));
            var S = {
                panelId: "savefrom__vimeo_links",
                btnBox: null,
                clipId: null,
                timer: null,
                btnPrefix: "sd_ld_bnt_",
                popupIsShow: !1,
                dlBtnClassName: "sf-dl-btn",
                currentMenu: null,
                run: function() {
                    if (b = 1, y) {
                        if (S.clipId = S.getFrameClipId(), S.clipId) return S.appendIframeButtons();
                        y = !1;
                    }
                    this.videoFeed.injectStyle(), h.a.isAvailable() && this.mutationMode.enable();
                },
                changeState: function(e) {
                    y || (b = e, S.videoFeed.disable(), S.rmAllBtn(), S.mutationMode.stop(), e && S.run());
                },
                hideMenu: function() {
                    S.currentMenu && (S.currentMenu.hide(), S.currentMenu = null);
                },
                getFrameClipId: function() {
                    var e = document.location.href.match(/player\.vimeo\.com\/video\/([\w\-]+)/i);
                    if (e = e && e[1]) return e;
                },
                getBrowserVideoData: function(e, t) {
                    var n = e.querySelector(".uploaded_on");
                    if (n || (n = e.querySelector("#info .meta .stats")), !n) return null;
                    if (t && (t = (t = t.match(/([0-9]+)$/)) && t[1]), !t) {
                        var a = e.querySelector("a.js-title") || e.querySelector("a");
                        if (!a) return;
                        var i = a.getAttribute("href");
                        if (!i) return;
                        t = (t = i.match(/\/([0-9]+)$/)) && t[1];
                    }
                    return t ? {
                        id: t,
                        parent: n,
                        style: 1
                    } : void 0;
                },
                getVideoId: function(e) {
                    var t, n = null;
                    if (t = (e = e || document).querySelector(".player[data-clip-id]")) return t.dataset.clipId;
                    if (t = e.querySelector(".player[data-fallback-url]")) {
                        var a = t.dataset.fallbackUrl || "";
                        if (a = a.match(/video\/([0-9]+)\//)) return a[1];
                    }
                    return (t = e.querySelector("div.player_wrapper > div.faux_player[data-clip_id]")) && (n = t.dataset.clip_id) ? n : void 0;
                },
                onBtnClick: async function(e, i) {
                    i.stopPropagation(), i.preventDefault();
                    var s = e.id;
                    if (!s) {
                        var r = null;
                        e.playerContainer && (r = Object(p.a)(e.parent, e.playerContainer)), s = S.getVideoId(r);
                    }
                    if (S.currentMenu && S.currentMenu.isShow) S.hideMenu(); else {
                        var l = a.a.i18n.getMessage("download") + " ...", o = {};
                        4 === e.style && (o.offsetTop = 20);
                        var d, c = this.dataset.sfMobile > 0;
                        d = S.currentMenu = c ? n.mobileLightBox.show(l) : n.popupMenu.quickInsert(this, l, "sf-popupMenu", o);
                        var f = a.a.i18n.getMessage("noLinksFound");
                        try {
                            f = function(e) {
                                return JSON.parse(JSON.stringify(e)).map(e => (e.title = e.filename, e.href = e.url, 
                                delete e.filename, delete e.url, e));
                            }(await k.a.createLinkExtractor("vi-blog_video").extractLinks({
                                mediaId: s,
                                initData: t
                            }));
                        } catch (e) {
                            console.error("getLinks error", e);
                        }
                        d.update(f);
                    }
                },
                getPlayerConfig: () => Object(m.a)('function(){var clip=null;try{clip=vimeo.clip_page_config.clip}catch(err){throw new Error("Player config is not found")}return{clipId:vimeo.clip_page_config.clip.id,url:vimeo.clip_page_config.player.config_url,clip:clip}}'),
                rmAllBtn: function() {
                    [ "sfSkip" ].forEach((function(e) {
                        for (var t, n = Object(o.a)(e), a = document.querySelectorAll("[" + n + "]"), i = 0; t = a[i]; i++) t.removeAttribute(n);
                    }));
                    for (var e, t = document.querySelectorAll("." + S.dlBtnClassName), n = 0; e = t[n]; n++) "1" !== e.dataset.sfType && "3" !== e.dataset.sfType || (e = e.parentNode), 
                    e.parentNode.removeChild(e);
                    S.videoFeed.rmBtn(), S.hideMenu();
                },
                appendBtn: function(e) {
                    var t, i = e.parent, s = i.querySelector("." + S.dlBtnClassName);
                    if (s) {
                        if (!s.dataset.sfId && 6 !== e.style) return;
                        s.parentNode.removeChild(s), s = null;
                    }
                    if (1 === e.style ? t = u.a.create("a", {
                        text: a.a.i18n.getMessage("download"),
                        class: [ S.dlBtnClassName, "sf-style-1" ],
                        style: {
                            display: "inline"
                        },
                        data: {
                            sfId: e.id,
                            sfType: e.style
                        },
                        href: "#" + e.id
                    }) : 2 === e.style ? t = u.a.create("button", {
                        text: a.a.i18n.getMessage("download"),
                        class: [ S.dlBtnClassName, "btn", "iconify_down_b" ],
                        data: {
                            sfId: e.id,
                            sfType: e.style
                        }
                    }) : 5 === e.style ? t = u.a.create("button", {
                        class: [ S.dlBtnClassName, "sf-type-5" ],
                        data: {
                            sfId: e.id,
                            sfType: e.style
                        },
                        append: [ u.a.create(n.svg.getSvg("download", "#ffffff"), {
                            style: {
                                display: "inline-block",
                                width: "16px",
                                height: "16px",
                                verticalAlign: "text-bottom",
                                marginRight: ".625rem"
                            }
                        }), u.a.create("span", {
                            style: {
                                marginLeft: 0
                            },
                            text: a.a.i18n.getMessage("download")
                        }) ]
                    }) : 7 === e.style ? t = u.a.create("button", {
                        class: [ S.dlBtnClassName, "sf-type-7" ],
                        data: {
                            sfId: e.id,
                            sfType: e.style
                        },
                        append: [ u.a.create(n.svg.getSvg("download", "#ffffff"), {
                            style: {
                                display: "inline-block",
                                width: "16px",
                                height: "16px",
                                verticalAlign: "text-bottom",
                                marginRight: ".625rem"
                            }
                        }), u.a.create("span", {
                            style: {
                                marginLeft: 0
                            },
                            text: a.a.i18n.getMessage("download")
                        }) ]
                    }) : 3 === e.style ? t = u.a.create("button", {
                        class: [ S.dlBtnClassName, "iris_btn", "iris_btn-switch" ],
                        data: {
                            sfId: e.id,
                            sfType: e.style
                        },
                        append: [ u.a.create(n.svg.getSvg("download", "#00adef"), {
                            style: {
                                display: "inline-block",
                                width: "16px",
                                height: "16px",
                                verticalAlign: "text-bottom",
                                marginRight: ".625rem"
                            }
                        }), u.a.create("span", {
                            class: "iris_btn-content",
                            style: {
                                marginLeft: 0
                            },
                            text: a.a.i18n.getMessage("download")
                        }) ]
                    }) : 4 === e.style ? t = u.a.create("i", {
                        class: [ S.dlBtnClassName, "sf-style-4" ],
                        data: {
                            sfId: e.id,
                            sfType: e.style
                        },
                        style: {
                            display: "inline-block",
                            border: "1px solid #F8F8F8",
                            width: "20px",
                            height: "20px",
                            lineHeight: 0,
                            cursor: "pointer",
                            marginLeft: "10px",
                            verticalAlign: "middle"
                        },
                        append: u.a.create("style", {
                            text: Object(d.a)([ {
                                selector: "." + S.dlBtnClassName + ".sf-style-4",
                                style: {
                                    background: "url(" + n.svg.getSrc("download", "#777777") + ") center no-repeat #F8F8F8",
                                    backgroundSize: "12px"
                                }
                            }, {
                                selector: "." + S.dlBtnClassName + ".sf-style-4:hover",
                                style: {
                                    background: "url(" + n.svg.getSrc("download", "#00B75A") + ") center no-repeat #F8F8F8",
                                    backgroundSize: "12px"
                                }
                            }, {
                                selector: "." + S.dlBtnClassName + ".sf-style-4:active",
                                style: {
                                    outline: 0,
                                    boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.125)"
                                }
                            } ])
                        })
                    }) : 6 === e.style && (t = u.a.create("button", {
                        class: [ S.dlBtnClassName, "btn", "btn_sm", "btn_blue_o" ],
                        data: {
                            sfId: e.id,
                            sfType: e.style,
                            sfMobile: 1
                        },
                        style: {
                            marginLeft: "8px"
                        },
                        append: [ u.a.create(n.svg.getSvg("download", "#00adef"), {
                            style: {
                                display: "inline-block",
                                width: "12px",
                                height: "12px",
                                verticalAlign: "text-bottom",
                                marginRight: "4px"
                            }
                        }), u.a.create("span", {
                            class: "btn_text",
                            style: {
                                marginLeft: 0
                            },
                            text: a.a.i18n.getMessage("download")
                        }) ]
                    })), t.addEventListener("click", S.onBtnClick.bind(t, e)), 1 === e.style && (t = u.a.create("span", {
                        append: [ t, " | " ]
                    })), 3 === e.style && (t = u.a.create("div", {
                        class: "clip_info-user_actions",
                        append: [ t ]
                    })), 1 === e.style || 2 === e.style || 6 === e.style) {
                        var r = i.firstChild;
                        r ? i.insertBefore(t, r) : i.appendChild(t);
                    } else i.appendChild(t);
                    Object(v.a)({
                        category: "append",
                        subcategory: "vi",
                        event: "b"
                    });
                },
                playerStateChangeObserver: null,
                observeVideoUi: function(e, t) {
                    var n = t;
                    if (n) {
                        var a = null, i = /(\s|^)with-controls(\s|$)/;
                        this.playerStateChangeObserver && this.playerStateChangeObserver.stop(), this.playerStateChangeObserver = new g.a({
                            attrs: [ {
                                name: "class",
                                callback(t) {
                                    const n = !i.test(t.oldValue), s = !i.test(t.value);
                                    !n && s ? (clearTimeout(a), a = setTimeout((function() {
                                        e.lockHide || e.container.classList.add("sf-hide-ui");
                                    }), 100)) : n && !s && (clearTimeout(a), e.container.classList.remove("sf-hide-ui"));
                                }
                            } ],
                            target: n
                        });
                    }
                },
                appendIframeButtons: function() {
                    var e = this, i = n.frameMenu.getBtn({
                        quickBtnStyleObj: {
                            display: "inline-block",
                            border: 0,
                            borderRadius: ".3em",
                            cursor: "pointer",
                            position: "relative",
                            padding: "6px 8px"
                        },
                        quickBtnCssStyle: {
                            backgroundColor: "rgba(23,35,34,.75)"
                        },
                        quickBtnOverCssStyle: {
                            backgroundColor: "rgb(0, 173, 239)"
                        },
                        nodeCssStyle: {
                            display: "none"
                        },
                        singleBtn: !0,
                        btnId: e.panelId,
                        containerStyle: {
                            left: "10px",
                            top: "10px"
                        },
                        quickBtnIcon: u.a.create(n.svg.getSvg("download", "#ffffff"), {
                            style: {
                                display: "inline-block",
                                width: "16px",
                                height: "16px",
                                verticalAlign: "middle"
                            }
                        }),
                        on: [ [ "click", async function(s) {
                            if (s.preventDefault(), s.stopPropagation(), e.currentMenu && e.currentMenu.isShow) e.hideMenu(); else {
                                var r = e.clipId, l = a.a.i18n.getMessage("download") + " ...", o = e.currentMenu = n.frameMenu.getMenu(this, l, "sf-frame-menu", {
                                    leftMenuPos: !0,
                                    container: i.container,
                                    onShow: function() {
                                        i.node.classList.add("sf-over");
                                    },
                                    onHide: function() {
                                        e.currentMenu = null, i.node.classList.remove("sf-over");
                                    }
                                }), d = a.a.i18n.getMessage("noLinksFound");
                                try {
                                    d = function(e) {
                                        return JSON.parse(JSON.stringify(e)).map(e => (e.title = e.filename, e.href = e.url, 
                                        delete e.filename, delete e.url, e));
                                    }(await k.a.createLinkExtractor("vi-blog_video").extractLinks({
                                        mediaId: r,
                                        initData: t
                                    }));
                                } catch (e) {
                                    console.error("getLinks error", e);
                                }
                                o.update(d);
                            }
                        } ], [ "mousedown", function(t) {
                            t.stopPropagation(), 2 === t.button && (s && (s.stop(), s = null), e.hideMenu(), 
                            i.container.parentNode && i.container.parentNode.removeChild(i.container));
                        } ] ]
                    });
                    i.quickBtn.title = a.a.i18n.getMessage("download"), i.container = u.a.create("div", {
                        class: "sf-btn-ctr",
                        append: i.node
                    }), f.a.on(i.container, "mouseenter", (function() {
                        i.lockHide = !0;
                    })), f.a.on(i.container, "mouseleave", (function() {
                        i.lockHide = !1;
                    })), i.node.appendChild(u.a.create("style", {
                        text: Object(d.a)([ {
                            selector: [ "body:hover .sf-btn-ctr:not(.sf-hide-ui) #" + e.panelId, "body:hover .sf-btn-ctr:not(.sf-hide-ui) .sf-frame-menu" ],
                            style: {
                                display: "block"
                            }
                        } ])
                    })), document.body.appendChild(i.container);
                    let s = new h.a({
                        queries: [ {
                            css: '#player .captions[aria-live="assertive"]',
                            is: "added",
                            callback(t) {
                                const n = t.added[0];
                                n && (e.observeVideoUi(i, n), setTimeout((function() {
                                    s.stop(), s = null;
                                }), 0));
                            }
                        } ]
                    });
                },
                videoFeed: {
                    btnClassName: "sf-feed-dl-btn",
                    style: null,
                    onClick: async function(e) {
                        e.preventDefault(), e.stopPropagation();
                        var i = this.dataset.sfId;
                        this.dataset.sfCouchMode;
                        if (S.currentMenu && S.currentMenu.isShow) S.hideMenu(); else {
                            var s = a.a.i18n.getMessage("download") + " ...", r = S.currentMenu = n.popupMenu.quickInsert(this, s, "sf-popupMenu"), l = a.a.i18n.getMessage("noLinksFound");
                            try {
                                l = function(e) {
                                    return JSON.parse(JSON.stringify(e)).map(e => (e.title = e.filename, e.href = e.url, 
                                    delete e.filename, delete e.url, e));
                                }(await k.a.createLinkExtractor("vi-blog_video").extractLinks({
                                    mediaId: i,
                                    initData: t
                                }));
                            } catch (e) {
                                console.error("getLinks error", e);
                            }
                            r.update(l);
                        }
                    },
                    getBtn: function(e) {
                        return u.a.create("i", {
                            class: e.classList,
                            data: {
                                sfId: e.id,
                                sfCouchMode: e.isCouchMode ? 1 : 0
                            },
                            on: [ "click", this.onClick ]
                        });
                    },
                    onImgOver2: function(e) {
                        var t, n, a = this.parentNode;
                        if ("A" === a.tagName) {
                            var i = a.getAttribute("href");
                            if (i && (n = (n = i.match(/^\/(\d+)$/)) && n[1]) && (t = a.parentNode) && t.classList.contains("contextclip-img") && !(t.dataset.sfBtn > 0)) {
                                t.dataset.sfBtn = "1";
                                var s = [ S.videoFeed.btnClassName, "sf-type1-btn" ];
                                a.appendChild(S.videoFeed.getBtn({
                                    id: n,
                                    classList: s
                                })), a = null, t = null;
                            }
                        }
                    },
                    onImgOver: function(e) {
                        var t, n, a = this.parentNode;
                        if (Object(c.a)(this, "a.contextclip-img-thumb")) {
                            t = this, a = this;
                            var i = /\/([0-9]+)/.exec(this.href);
                            i && (n = i[1]);
                        }
                        if (!n && (Object(c.a)(this, "div.iris_video-vital") || Object(c.a)(this, "li.clip_thumbnail"))) {
                            a = this.querySelector(".iris_thumbnail"), t = this;
                            var s = this.querySelector("a.iris_link-box");
                            if (s) {
                                var r = s.href;
                                !(n = (n = r.match(/\/([0-9]+)/)) && n[1]) && r && (n = JSON.stringify({
                                    url: r
                                }));
                            }
                        }
                        if (!n && "LI" == a.tagName) {
                            if (!(n = a.dataset.resultId) || "clip_" !== n.substr(0, 5)) return;
                            n = n.substr(5), t = a, a = this.querySelector(".thumbnail_wrapper");
                        }
                        if (!n) {
                            if ("A" !== a.tagName) return;
                            if (n = a.dataset.clipId, !(t = a.parentNode)) return;
                        }
                        var l = !1;
                        if (!n) {
                            if ((l = "item_id" === (n = t.id).substr(0, 7) && t.classList.contains("clip")) || "clip" === n.substr(0, 4) || (n = void 0), 
                            !n && "ARTICLE" === t.tagName && t.classList.contains("clip_item") && (n = a.getAttribute("href")), 
                            !n) return;
                            (n = n.match(/([0-9]+)$/)) && (n = n[1]);
                        }
                        if (!t.dataset.sfBtn) {
                            t.dataset.sfBtn = "1";
                            var o = [ S.videoFeed.btnClassName ];
                            this.classList.contains("thumbnail_lg_wide") && o.push("sf-type1-btn"), this.classList.contains("contextclip-img-thumb") && o.push("sf-type4-btn"), 
                            (this.classList.contains("clip_thumbnail") || this.classList.contains("iris_video-vital")) && o.push("sf-type3-btn");
                            var d = t.parentNode;
                            d && "clips" === d.id && o.push("sf-type1-btn"), d = null, l && o.push("sf-type1-btn"), 
                            t.classList.contains("promo_clip") && 1 === o.length && o.push("sf-type1-btn"), 
                            a.appendChild(S.videoFeed.getBtn({
                                id: n,
                                classList: o,
                                isCouchMode: l
                            })), a = null, t = null;
                        }
                    },
                    injectStyle: function() {
                        this.style ? !this.style.parentNode && document.head.appendChild(this.style) : (this.style = u.a.create("style", {
                            text: Object(d.a)([ {
                                selector: [ ".sf-dl-btn.sf-type-5", ".sf-dl-btn.sf-type-7" ],
                                style: {
                                    color: "#fff",
                                    borderColor: "#00adef",
                                    backgroundColor: "#00adef",
                                    minWidth: "68px",
                                    minHeight: "32px",
                                    padding: "0 10px",
                                    lineHeight: "30px",
                                    fontSize: "14px",
                                    width: "auto",
                                    position: "relative",
                                    margin: 0,
                                    fontWeight: 700,
                                    borderWidth: "1px",
                                    borderStyle: "solid",
                                    borderRadius: "3px",
                                    letterSpacing: ".1px",
                                    transition: "all .1s ease-in-out",
                                    cursor: "pointer",
                                    marginLeft: ".5rem"
                                }
                            }, {
                                selector: [ ".sf-dl-btn.sf-type-7" ],
                                style: {
                                    verticalAlign: "middle"
                                }
                            }, {
                                selector: [ ".sf-dl-btn.sf-type-5:hover", ".sf-dl-btn.sf-type-7:hover" ],
                                style: {
                                    color: "#fff",
                                    borderColor: "#08c",
                                    backgroundColor: "#08c"
                                }
                            }, {
                                selector: [ "a > .sf-feed-dl-btn", "a .sf-feed-dl-btn.sf-type3-btn", "a > .sf-feed-dl-btn.sf-type4-btn" ],
                                style: {
                                    display: "none",
                                    border: "1px solid #F8F8F8",
                                    width: "20px",
                                    height: "20px",
                                    padding: 0,
                                    position: "absolute",
                                    background: "url(" + n.svg.getSrc("download", "#777777") + ") center no-repeat #F8F8F8",
                                    backgroundSize: "12px",
                                    top: "auto",
                                    left: "auto",
                                    lineHeight: 0
                                }
                            }, {
                                selector: [ "a > .sf-feed-dl-btn.sf-type4-btn" ],
                                style: {
                                    top: 0,
                                    left: 0
                                }
                            }, {
                                selector: [ "a > .sf-feed-dl-btn.sf-type1-btn", "a > div > .sf-feed-dl-btn.sf-type3-btn" ],
                                style: {
                                    top: 0
                                }
                            }, {
                                selector: [ "a > .sf-feed-dl-btn.sf-type2-btn" ],
                                style: {
                                    opacity: .5
                                }
                            }, {
                                selector: [ "a > div > .sf-feed-dl-btn.sf-type3-btn" ],
                                style: {
                                    zIndex: 10
                                }
                            }, {
                                selector: [ "a > .sf-feed-dl-btn:hover", "a > div > .sf-feed-dl-btn.sf-type3-btn:hover" ],
                                style: {
                                    background: "url(" + n.svg.getSrc("download", "#00B75A") + ") center no-repeat #F8F8F8",
                                    backgroundSize: "12px"
                                }
                            }, {
                                selector: [ "a > .sf-feed-dl-btn.sf-type2-btn:hover" ],
                                style: {
                                    opacity: .8
                                }
                            }, {
                                selector: [ "a > .sf-feed-dl-btn:active", "a > div > .sf-feed-dl-btn.sf-type3-btn:active" ],
                                style: {
                                    outline: 0,
                                    boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.125)"
                                }
                            }, {
                                selector: [ "a:hover > .sf-feed-dl-btn", "a:hover > div > .sf-feed-dl-btn.sf-type3-btn" ],
                                style: {
                                    display: "block"
                                }
                            } ])
                        }), document.head.appendChild(this.style));
                    },
                    disable: function() {
                        this.style && this.style.parentNode && this.style.parentNode.removeChild(this.style);
                    },
                    rmBtn: function() {
                        for (var e, t = document.querySelectorAll(".sf-feed-dl-btn"), n = 0; e = t[n]; n++) e.parentNode.removeChild(e);
                        var a = Object(o.a)("sfBtn"), i = document.querySelectorAll("[" + a + "]");
                        for (n = 0; e = i[n]; n++) e.removeAttribute(a);
                    }
                },
                mutationMode: {
                    observer: null,
                    stop: function() {
                        this.observer && this.observer.stop();
                    },
                    wrapOnImgOver: function() {
                        b && S.videoFeed.onImgOver.apply(this, arguments);
                    },
                    wrapOnImgOver2: function() {
                        b && S.videoFeed.onImgOver2.apply(this, arguments);
                    },
                    enable: function() {
                        if (this.observer) return this.observer.start();
                        this.observer = new h.a({
                            queries: [ {
                                css: "#clip #info #tools",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) S.hideMenu(), t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                    S.appendBtn({
                                        id: "",
                                        parent: t,
                                        style: 2,
                                        playerContainer: "#clip"
                                    }));
                                }
                            }, {
                                css: "#channel_clip_container #info .meta",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) {
                                        if (S.hideMenu(), t.dataset.sfSkip > 0) continue;
                                        t.dataset.sfSkip = "1";
                                        const e = t.querySelector(".stats") || t.querySelector(".time");
                                        e && S.appendBtn({
                                            id: "",
                                            parent: e,
                                            style: 1,
                                            playerContainer: "#channel_clip_container"
                                        });
                                    }
                                }
                            }, {
                                css: "#browse_content ol.browse_videos_videos > li",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) {
                                        if (t.dataset.sfSkip > 0) continue;
                                        if (t.dataset.sfSkip = "1", "clip_" !== t.id.substr(0, 5)) continue;
                                        const e = S.getBrowserVideoData(t, t.id);
                                        e && S.appendBtn(e);
                                    }
                                }
                            }, {
                                css: "img.thumbnail",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                    f.a.one(t, "mouseenter", S.mutationMode.wrapOnImgOver));
                                }
                            }, {
                                css: ".clip_thumbnail .iris_thumbnail img",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) {
                                        if (t.dataset.sfSkip > 0) continue;
                                        t.dataset.sfSkip = "1";
                                        const e = Object(l.a)(t, "clip_thumbnail");
                                        f.a.one(e, "mouseenter", S.mutationMode.wrapOnImgOver);
                                    }
                                }
                            }, {
                                css: ".iris_video-vital .iris_thumbnail img",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) {
                                        if (t.dataset.sfSkip > 0) continue;
                                        t.dataset.sfSkip = "1";
                                        const e = Object(l.a)(t, "iris_video-vital");
                                        f.a.one(e, "mouseenter", S.mutationMode.wrapOnImgOver);
                                    }
                                }
                            }, {
                                css: ".contextclip-img-thumb img",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) {
                                        if (t.dataset.sfSkip > 0) continue;
                                        t.dataset.sfSkip = "1";
                                        const e = Object(l.a)(t, "contextclip-img-thumb");
                                        f.a.one(e, "mouseenter", S.mutationMode.wrapOnImgOver);
                                    }
                                }
                            }, {
                                css: ".clip_main .clip_info a.js-user_link.iris_link-header",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) {
                                        if (t.dataset.sfSkip > 0) continue;
                                        t.dataset.sfSkip = "1", S.hideMenu();
                                        const e = Object(p.a)(t, ".clip_info-wrapper");
                                        if (!e) continue;
                                        const n = e.querySelector(".clip_info-actions");
                                        n && S.appendBtn({
                                            id: "",
                                            parent: n,
                                            style: 3,
                                            playerContainer: ".clip_main"
                                        });
                                    }
                                }
                            }, {
                                css: ".clip_main .clip_main-content div.clip_info-subline--inline",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) {
                                        if (t.dataset.sfSkip > 0) continue;
                                        t.dataset.sfSkip = "1", S.hideMenu();
                                        Object(p.a)(t, ".clip_main-content") && S.appendBtn({
                                            id: "",
                                            parent: t,
                                            style: 5,
                                            playerContainer: ".clip_main"
                                        });
                                    }
                                }
                            }, {
                                css: ".contextclip-img img",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                    f.a.one(t, "mouseenter", S.mutationMode.wrapOnImgOver2));
                                }
                            }, {
                                css: ".client_wrapper .clip header h1",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                    S.appendBtn({
                                        id: "",
                                        parent: t,
                                        style: 4,
                                        playerContainer: ".clip"
                                    }));
                                }
                            }, {
                                css: ".clip_page .clip .meta_section_subinfo",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) S.appendBtn({
                                        id: "",
                                        parent: t,
                                        style: 6,
                                        playerContainer: ".clip_wrapper"
                                    });
                                }
                            }, {
                                css: "#main .clip_info-subline--inline",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) S.appendBtn({
                                        id: "",
                                        parent: t,
                                        style: 7,
                                        playerContainer: "#main"
                                    });
                                }
                            } ]
                        });
                    }
                }
            };
        }));
    }
});