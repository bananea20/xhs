!function(e) {
    function t(t) {
        for (var o, i, s = t[0], l = t[1], d = t[2], c = 0, p = []; c < s.length; c++) i = s[c], 
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && p.push(r[i][0]), r[i] = 0;
        for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
        for (u && u(t); p.length; ) p.shift()();
        return a.push.apply(a, d || []), n();
    }
    function n() {
        for (var e, t = 0; t < a.length; t++) {
            for (var n = a[t], o = !0, s = 1; s < n.length; s++) {
                var l = n[s];
                0 !== r[l] && (o = !1);
            }
            o && (a.splice(t--, 1), e = i(i.s = n[0]));
        }
        return e;
    }
    var o = {}, r = {
        17: 0
    }, a = [];
    function i(t) {
        if (o[t]) return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
    }
    i.m = e, i.c = o, i.d = function(e, t, n) {
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
        }), 2 & t && "string" != typeof e) for (var o in e) i.d(n, o, function(t) {
            return e[t];
        }.bind(null, o));
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
    var s = window.savefromContentScriptWebpackJsonp = window.savefromContentScriptWebpackJsonp || [], l = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var d = 0; d < s.length; d++) t(s[d]);
    var u = l;
    a.push([ 108, 0 ]), n();
}({
    108: function(e, t, n) {
        "use strict";
        n.r(t);
        var o = n(19), r = n(0), a = n(10), i = n(15), s = n(28), l = n(29), d = n(25), u = n(23), c = n(37), p = n(12), f = n(22), h = n(16), m = n(51), v = n(32), g = n(21), b = n(3), y = n(1), k = n(53), w = n(6), _ = n(13), x = n(7), S = n(18), O = n(11), L = n(38), M = n(33), A = n(45), P = n(52), C = n(14), N = n(43), j = n(44), I = n(2), q = n(20), D = n(5), B = n(30);
        function F(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), n.push.apply(n, o);
            }
            return n;
        }
        function R(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? F(Object(n), !0).forEach((function(t) {
                    Object(o.a)(e, t, n[t]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                }));
            }
            return e;
        }
        const T = Object(a.a)({}).svg.getSrc("download", "#4986cc", "20px");
        var E = I.c.memo(e => {
            let {iframeSrc: t} = e;
            const [n, o] = I.c.useState([]);
            return I.c.useEffect(() => {
                Object(_.a)({
                    action: "showjetFetchMovie",
                    iframeVideoURL: t
                }).then(e => {
                    e = e.map(e => R(R({}, e), {}, {
                        onClick() {
                            Object(q.a)(Object(D.e)(B.a, {
                                filename: w.a.modify(e.filename) + ".mp4",
                                format: "mp4",
                                sources: [ {
                                    url: e.endpoint,
                                    format: "mp4"
                                } ],
                                convertType: "hls"
                            }), "sf-muxer-parent");
                        }
                    })), o(e);
                });
            }, []), I.c.createElement(j.b, {
                items: n,
                theme: j.d
            }, I.c.createElement(j.a, null, I.c.createElement("div", {
                className: "like_btn",
                style: {
                    marginLeft: "14px"
                }
            }, I.c.createElement("img", {
                src: T,
                style: {
                    opacity: .5
                },
                alt: ""
            }), I.c.createElement("div", {
                className: "like_button_label"
            }, r.a.i18n.getMessage("download")))));
        }), H = n(48), V = n(8), U = n(17), z = n(9);
        function W(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                }))), n.push.apply(n, o);
            }
            return n;
        }
        function $(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? W(Object(n), !0).forEach((function(t) {
                    Object(o.a)(e, t, n[t]);
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : W(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                }));
            }
            return e;
        }
        const J = n(36), X = Object(x.a)("vkontakte_ru"), K = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
        S.a.isSingle() && Object(i.b)("vk", (function(e, t) {
            const n = Object(a.a)(t);
            var o = t.preferences, i = o.moduleVkontakte ? 1 : 0, x = r.a.isChrome || r.a.isFirefox || r.a.isGM && r.a.isTM, S = Object(s.a)(), j = !1;
            if (S) if (/\/video_ext\.php\?.+/.test(location.href)) j = !0; else {
                if (!/\/widget_comments\.php\?.+/.test(location.href)) return;
                S = !1;
            }
            r.a.onMessage.addListener((function(t, n, r) {
                if ("getModuleInfo" === t.action) {
                    if (t.url !== location.href) return;
                    return r({
                        state: i,
                        moduleName: e
                    });
                }
                if ("changeState" === t.action) {
                    if (e !== t.moduleName) return;
                    return R.changeState(t.state);
                }
                "updatePreferences" !== t.action ? i && ("updateLinks" === t.action && T(), "downloadMP3Files" === t.action && (x ? Z.downloadMP3Files() : Z.showListOfAudioFiles(!1)), 
                "downloadPlaylist" === t.action && Z.showListOfAudioFiles(!0), "downloadPhotos" === t.action && ne.downloadPhoto()) : Object.assign(o, t.preferences);
            })), i && setTimeout((function() {
                R.run();
            }));
            const I = [], F = {};
            var R = {
                contextMenu: null,
                isMutation: !1,
                run: function() {
                    if (i = 1, /m\.vk\.com/.test(location.hostname)) return oe.run();
                    j ? ee.addFrameBtn() : (ne.injectStyle(), O.a.isAvailable() && (R.isMutation = !0, 
                    Z.addCustomStyle(), R.mutationMode.enable()));
                },
                changeState: function(e) {
                    S || (i = e, W(), Z.hideLinks(), te.off(), R.hideMenu(), ne.rmCurrentPhotoBtn(), 
                    Z.rmBitrate(), ne.rmPhotoAlbumDlBtn(), R.mutationMode.stop(), e && R.run());
                },
                hideMenu: function() {
                    R.contextMenu && (R.contextMenu.hide(), R.contextMenu = null);
                },
                mutationMode: {
                    observer: null,
                    stop: function() {
                        this.observer && this.observer.stop(), [ "sfSkip" ].forEach((function(e) {
                            for (var t, n = Object(u.a)(e), o = document.querySelectorAll("[" + n + "]"), r = 0; t = o[r]; r++) t.removeAttribute(n);
                        }));
                    },
                    wrapNewAudioOnMouseOver: function() {
                        i && Z.onNewMouseOver.apply(this, arguments);
                    },
                    wrapNewVoiceOnMouseOver: function() {
                        const e = Object(h.a)(this, ".im-mess");
                        if (e && e.querySelector(".sf-voice-btn") || !i) return;
                        let t = y.a.create("a", {
                            href: this.getAttribute("data-mp3") || "#sf-preload",
                            class: [ Z.className, "sf-audio-btn", "sf-voice-btn" ],
                            download: w.a.modify(this.getAttribute("data-mp3")) || "",
                            style: {
                                width: "3px",
                                height: "3px",
                                padding: "0px 9px 9px"
                            },
                            on: [ [ "click", e => {
                                e.stopPropagation(), n.downloadOnClick(e);
                            } ] ]
                        });
                        const o = e.querySelector(".im-mess--actions, .audio-msg-track--duration");
                        Object(V.a)({
                            category: "append",
                            subcategory: "vk",
                            event: "b"
                        }), o && (o.classList.contains("audio-msg-track--duration") && t.classList.add("sf-voice-btn-in-dur"), 
                        o.appendChild(t), e.addEventListener("mouseleave", () => t.style.display = "none"), 
                        e.addEventListener("mouseenter", () => t.style.display = "inline")), n.addStyleRules(`.${Z.className}.sf-voice-btn`, {
                            "background-size": "12px !important"
                        }), n.addStyleRules(`.${Z.className}.sf-voice-btn-in-dur`, {
                            position: "absolute",
                            top: "23px",
                            right: "-13px"
                        });
                    },
                    wrapVideoFeedOnMouseOver: function() {
                        i && (Object(V.a)({
                            category: "append",
                            subcategory: "vk",
                            event: "b"
                        }), te.onLinkHover.apply(this, arguments));
                    },
                    onVideoInsert: function(e) {
                        Object(C.a)("function(){return window.mvcur&&window.mvcur.mvData&&window.mvcur.mvData.is_active_live}").then(t => {
                            var o = n.getParentById(e, "mv_box");
                            o || (o = e);
                            var r = ee.getPlayerNode(o);
                            r && !t ? e.closest(".ShortVideoPost") || window.location.href.includes("clips") ? ee.newClipButton(r, o) : ee.newAppendButton(r, o) : e.dataset.sfSkip = 0;
                        });
                    },
                    onVideoChange: async function(e) {
                        if (await Object(C.a)("function(){return window.mvcur&&window.mvcur.mvData&&window.mvcur.mvData.is_active_live}")) return;
                        var t = this;
                        let n = e;
                        if (".like_cont" === e.className && (n = e.closest('div[id=*="/video_box_wrap/"]')), 
                        /video_box_wrap-?\d+_-?\d+/.test(n.id) && window.location.href.includes("clips") || /post-?\d+_?\d+/.test(n.id) ? t.onVideoInsert(n) : /video_box_wrap-?\d+_-?\d+/.test(n.id) || t.onVideoInsert(n), 
                        n.sfWatch) t.onVideoInsert(n); else {
                            n.sfWatch = !0;
                            const e = new M.a({
                                attrs: [ {
                                    name: "id",
                                    callback() {
                                        t.onVideoInsert(n);
                                    }
                                } ],
                                target: n
                            });
                            e.trigger(), b.a.onRemoveEvent(n, (function() {
                                e.stop(), n.sfWatch = !1, n.dataset.sfSkip = 0;
                            }));
                        }
                        if (document.querySelector('iframe[src*="showjet"]')) {
                            let e = document.querySelector('iframe[src*="showjet"]');
                            const t = document.createElement("div"), n = document.querySelector(".like_btns");
                            n && (n.insertBefore(t, n.querySelector(".ui_actions_menu_wrap._ui_menu_wrap")), 
                            Object(q.a)(Object(D.e)(E, {
                                iframeSrc: e.src
                            }), t));
                        }
                    },
                    newStoryButton: function(e) {
                        setTimeout(() => {
                            let t = e.querySelector(".stories_item_cont_wrap"), o = t.querySelector(".stories_header_content");
                            const r = y.a.create("div", {
                                id: "savefrom__yt_btn",
                                style: {
                                    display: "flex",
                                    position: "absolute",
                                    right: "0px",
                                    top: "60px",
                                    zIndex: 1e3,
                                    pointerEvents: "auto",
                                    marginLeft: "10px",
                                    verticalAlign: "middle"
                                },
                                append: [ y.a.create("a", {
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
                                        color: "#fff",
                                        marginRight: "8px"
                                    },
                                    append: [ y.a.create("i", {
                                        style: {
                                            position: "absolute",
                                            display: "inline-block",
                                            left: "6px",
                                            top: "3px",
                                            backgroundImage: "url(" + n.svg.getSrc("download", "#ffffff") + ")",
                                            backgroundSize: "12px",
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center",
                                            width: "16px",
                                            height: "16px"
                                        }
                                    }) ],
                                    on: [ [ "click", async function(e) {
                                        e.preventDefault();
                                        const [n] = await z.a.createLinkExtractor("vk-story").extractLinks({
                                            element: t
                                        });
                                        return Object(_.a)({
                                            action: "downloadVkStory",
                                            downloadFileUrl: n.url,
                                            filename: n.filename
                                        });
                                    } ] ]
                                }), y.a.create("style", {
                                    text: Object(p.a)({
                                        selector: "#savefrom__yt_btn",
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
                                }) ]
                            }), a = new URLSearchParams(window.location.search).get("w");
                            !o.querySelector("#savefrom__yt_btn") && a && o.append(r);
                        }, 500);
                    },
                    enable: function() {
                        var e = this;
                        if (this.observer) return this.observer.start();
                        const t = t => {
                            for (let n, o = 0; n = t.added[o]; o++) if (!(n.dataset.sfSkip > 0)) {
                                if ("like_cont" === n.className && !window.location.href.includes("clips")) return;
                                n.dataset.sfSkip = "1", e.onVideoChange(n);
                            }
                        }, n = e => {
                            for (let t, n = 0; t = e.added[n]; n++) Object(V.a)({
                                category: "append",
                                subcategory: "vk",
                                event: "b"
                            }), t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", b.a.one(t, "mouseenter", R.mutationMode.wrapNewAudioOnMouseOver));
                        };
                        this.observer = new O.a({
                            queries: [ {
                                css: ".ShortVideoPost .video_box_wrap > #video_player",
                                is: "added",
                                callback: t
                            }, {
                                css: ".stories_item",
                                is: "added",
                                callback: t => {
                                    for (let n, o = 0; n = t.added[o]; o++) n.dataset.sfSkip > 0 || (n.dataset.sfSkip = "1", 
                                    e.newStoryButton(n));
                                }
                            }, {
                                css: ".post_video_desc a.lnk",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                    b.a.one(t, "mouseenter", R.mutationMode.wrapVideoFeedOnMouseOver));
                                }
                            }, {
                                css: "#mv_box #mv_player_box > .video_box_wrap",
                                is: "added",
                                callback: t => {
                                    for (let n, o = 0; n = t.added[o]; o++) n.dataset.sfSkip > 0 || (n.dataset.sfSkip = "1", 
                                    e.onVideoChange(n));
                                }
                            }, {
                                css: "#mv_box #mv_player_box .video_box_wrap .like_cont",
                                is: "added",
                                callback: t
                            }, {
                                css: "#mv_box #mv_player_box > .video_box_wrap > #video_player",
                                is: "added",
                                callback: t => {
                                    for (let n, o = 0; n = t.added[o]; o++) n = n.parentNode, n.dataset.sfSkip > 0 || (n.dataset.sfSkip = "1", 
                                    e.onVideoChange(n));
                                }
                            }, {
                                css: "#photos_all_block",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                    ne.addNewPhotoAlbumDlBtn(t));
                                }
                            }, {
                                css: ".pv_photo_wrap .pv_img_area_wrap",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                    ne.addNewDlCurrentPhotoBtn(t));
                                }
                            }, {
                                css: ".audio_row",
                                is: "added",
                                callback: n
                            }, {
                                css: ".top_audio_player .top_audio_player_title",
                                is: "added",
                                callback: n
                            }, {
                                css: ".audio_page_player .audio_page_player_title_performer",
                                is: "added",
                                callback: n
                            }, {
                                css: ".audio-msg-track",
                                is: "added",
                                callback: e => {
                                    for (let t, n = 0; t = e.added[n]; n++) t.dataset.sfSkip > 0 || (t.dataset.sfSkip = "1", 
                                    b.a.one(t, "mouseenter", R.mutationMode.wrapNewVoiceOnMouseOver));
                                }
                            }, {
                                css: "." + b.a.onRemoveClassName,
                                is: "removed",
                                callback: e => {
                                    for (let t, n = 0; t = e.removed[n]; n++) b.a.onRemoveListener(t);
                                }
                            } ]
                        });
                    }
                }
            };
            var T = function() {
                R.changeState(0), R.changeState(1);
            }, W = function() {
                Z.lastRow = null;
                for (var e = document.querySelectorAll("a.savefrom_vk_download,div.savefrom_vk_download,span.savefrom_vk_download"), t = e.length - 1; t >= 0; t--) Z.elIsHidden(e[t]) && e[t].parentNode.removeChild(e[t]);
            }, G = function() {
                if (null !== document.querySelector('.page_block_header_inner._header_inner a.ui_crumb[href="/audio"]')) {
                    const e = document.querySelector(".page_block_header_inner._header_inner div.ui_crumb");
                    if (e && e.textContent) return w.a.modify(e.textContent);
                }
                var e = document.title, t = e.indexOf("|");
                return -1 !== t && (e = e.substr(0, t - 1)), w.a.modify(e);
            }, Y = function(e) {
                try {
                    const t = JSON.parse(e).payload[1];
                    return [ null, null, null, null, null, t[0], t[1], null, t[3] ];
                } catch (e) {}
                for (var t = function(e) {
                    return !0 === e ? 1 : parseInt(e) || 0;
                }, n = function(e) {
                    return !0 === e ? 1 : parseFloat(e) || 0;
                }, o = e.split("<!>"), r = o.length - 1; r >= 0; --r) {
                    var a = o[r];
                    if ("<!" == a.substr(0, 2)) {
                        var i = a.indexOf(">"), s = a.substr(2, i - 2);
                        switch (a = a.substr(i + 1), s) {
                          case "json":
                            var l = null;
                            try {
                                l = JSON.parse(a);
                            } catch (e) {}
                            o[r] = l;
                            break;

                          case "int":
                            o[r] = t(a);
                            break;

                          case "float":
                            o[r] = n(a);
                            break;

                          case "bool":
                            o[r] = !!t(a);
                            break;

                          case "null":
                            o[r] = null;
                            break;

                          case "pageview_candidate":
                            o.pop();
                            break;

                          case "debug":
                            o.pop();
                        }
                    }
                }
                return o;
            }, Q = function(e) {
                return /<em>.*<\/em>/.test(e) && (e = e.replace(/<\/?em>/g, "")), e;
            }, Z = {
                audioElClassList: [ "audio", "audioRow", "audioRowWall" ],
                lastRow: null,
                className: "savefrom_vk_download",
                cache: {},
                lastValidRequest: null,
                waitUntilUnblock: function(e) {
                    var t = this, n = 10;
                    if (!t.lastValidRequest) return Promise.reject(new Error("Last valid request is empty!"));
                    return function o() {
                        return new Promise((function(e) {
                            setTimeout(e, 15e3);
                        })).then((function() {
                            if (e.abort) throw new Error("Abort");
                            return Object(g.a)(t.lastValidRequest).then((function(e) {
                                if (n--, !Y(e.body)[5]) {
                                    if (n > 0) return o();
                                    throw new Error("Can't request data");
                                }
                            }));
                        }));
                    }().then((function() {
                        return new Promise((function(e) {
                            setTimeout(e, 250);
                        }));
                    }));
                },
                needUnmask: function(e) {
                    var t = /audio_api_unavailable/;
                    return e.some((function(e) {
                        if (t.test(e[2])) return !0;
                    }));
                },
                unmaskUrlViaUtil: function(e) {
                    return Z.needUnmask(e) ? Object(C.a)([], "function(){return vk.id}").then(t => {
                        const n = e.map(e => {
                            try {
                                return Array.isArray(e) && e[2] ? (e[2] = A.a(t, e[2]), e) : null;
                            } catch (e) {
                                return X.debug("track decode error: ", e), null;
                            }
                        });
                        return Promise.all(n).then(e => e.filter(e => null !== e));
                    }) : Promise.resolve(e);
                },
                unmaskUrl: function(e) {
                    return Z.needUnmask(e) ? Object(C.a)([ e ], 'function(idsArr){var aFail=false;var bFail=false;var cFail=false;var unmaskUrl=function unmaskUrl(url){var _url="";if(!aFail&&window.sfUnmaskUrl){try{_url=window.sfUnmaskUrl(url)}catch(err){aFail=true}}if(!cFail&&!_url&&window.AudioPlayerHTML5){try{var res=null;var r={_isHlsUrl:function _isHlsUrl(url){res=url;return true},_initHls:function _initHls(){}};window.AudioPlayerHTML5.prototype._setAudioNodeUrl.apply(r,[null,url]);_url=res}catch(err){cFail=true}}if(!bFail&&!_url&&window.AudioPlayerFlash){try{var r={};window.AudioPlayerFlash.prototype.setUrl.apply(r,[url]);_url=r._url}catch(err){bFail=true}}if(typeof _url!=="string"){_url=""}return _url};idsArr.forEach(function(item){var url=unmaskUrl(item[2]);if(url){item[2]=url}});return idsArr}').then((function(t) {
                        return t || e;
                    })) : Promise.resolve(e);
                },
                _getNewTrackListByIdsWithActionHash(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    let n = 0;
                    const o = {}, r = this.cache, a = e.filter(e => {
                        const t = e.fullId;
                        return !r[t] || (o[t] = r[t], n++, !1);
                    }), i = [];
                    for (;a.length; ) i.push(a.splice(0, 9));
                    const s = e.length;
                    let l = Promise.resolve();
                    i.forEach(e => {
                        l = l.then(() => {
                            const a = () => {
                                if (t.abort) throw new Error("Abort");
                                const a = e.filter(e => e.fullId && e.actionHash && e.urlHash).map(e => e.fullId + "_" + e.actionHash + "_" + e.urlHash), i = {
                                    type: "POST",
                                    headers: {
                                        "Content-Type": "application/x-www-form-urlencoded",
                                        "X-Requested-With": "XMLHttpRequest"
                                    },
                                    data: J.stringify({
                                        act: "reload_audio",
                                        al: 1,
                                        ids: a.join(",")
                                    }),
                                    url: "/al_audio.php",
                                    localXHR: !0
                                };
                                return Object(g.a)(i).then(e => {
                                    const a = Y(e.body)[5];
                                    if (!a || !Array.isArray(a)) throw new Error("Track list is not found!");
                                    return this.lastValidRequest = i, a.forEach(e => {
                                        const t = e[1] + "_" + e[0];
                                        r[t] = e, o[t] = e, n++;
                                    }), t.onProgress && t.onProgress(n, s), new Promise(e => {
                                        setTimeout(e, 250);
                                    });
                                });
                            };
                            let i = 2;
                            const l = () => a().catch(e => {
                                if ("Track list is not found!" === e.message && !t.withoutUnblock) {
                                    if (this.lastValidRequest) return this.waitUntilUnblock(t).then(a);
                                    if (i-- > 0) return new Promise(e => setTimeout(e, 15e3)).then(() => l());
                                }
                                throw e;
                            });
                            return l().catch(e => {
                                "Abort" !== e.message && X.debug("requestIds error!", e);
                            });
                        });
                    }), l = l.then((function() {
                        Object.keys(r).slice(1e3).forEach((function(e) {
                            delete r[e];
                        }));
                        const t = [];
                        return e.forEach(e => {
                            const n = e.fullId, r = o[n];
                            r && t.push(r);
                        }), t;
                    }));
                    return l = l.then(e => Z.unmaskUrlViaUtil(e)).then(e => {
                        const t = Object(H.a)(5), n = e.map(e => t(() => {
                            const t = e[2], n = (e => {
                                if (Z.isHlsLink(e)) {
                                    const t = (e = e.replace("/index.m3u8", ".mp3")).split("/"), n = -1 !== e.indexOf("audios") ? 1 : 0;
                                    return t.splice(t.length - (2 + n), 1), t.join("/");
                                }
                                return e;
                            })(t);
                            return Z.isHlsLink(t) ? Object(g.a)({
                                method: "HEAD",
                                url: n
                            }).then(() => (e[2] = n, e), t => (X.warn("getNewTrackListByIdsWithActionHash: mp3 file not available. ", t), 
                            e)) : e;
                        }));
                        return Promise.all(n);
                    }), l;
                },
                _getAlbumIdFromUrl: function(e) {
                    var t = this, n = [ e ], o = Object(d.a)(e);
                    o.z && n.unshift(o.z);
                    var r = null;
                    return n.some((function(e) {
                        if (r = t._getAlbumId(e)) return !0;
                    })), r;
                },
                _getAlbumId: function(e) {
                    if (/[?&]q=/.test(e)) return null;
                    var t = {
                        url: "/al_audio.php",
                        data: {}
                    }, n = /audio_playlist(-?\d+)_(-?\d+)(?:\/(\w+))?/.exec(e);
                    if (n && (t.data.access_hash = n[3] || "", t.data.act = "load_section", t.data.al = 1, 
                    t.data.claim = 0, t.data.owner_id = n[1], t.data.playlist_id = n[2], t.data.type = "playlist", 
                    t.data.offset = 0), !t.data.act) {
                        var o = /audios(-?\d+)/.exec(e);
                        if (o) {
                            var r = /[?&]section=(\w+)/.exec(e), a = r && r[1];
                            if (a && -1 === [ "playlists", "all" ].indexOf(a)) return null;
                            t.data.access_hash = "", t.data.act = "load_section", t.data.al = 1, t.data.claim = 0, 
                            t.data.owner_id = o[1], t.data.playlist_id = -1, t.data.type = "playlist", t.data.offset = 0;
                        }
                    }
                    return t.data.act ? t : null;
                },
                getNewNodeTrackInfo: async function(e) {
                    const t = this.readNewDataAudio(e.dataset.audio), n = this.getNewTrackInfo(t);
                    if (!n || !n.fullId) throw new Error("Track info is not found");
                    return n.url ? Z.unmaskUrlViaUtil([ [ null, null, n.url ] ]).then(e => (n.url = e[0][2], 
                    n)) : n;
                },
                _getAlbumTrackViaApi: function(e, t) {
                    if (!e.url) throw X.debug("Page is not exists!", e), new Error("Page is not exists!");
                    var n = JSON.parse(JSON.stringify(e.data)), o = function() {
                        return t.abort ? Promise.reject(new Error("Abort")) : Object(g.a)({
                            type: "POST",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                                "X-Requested-With": "XMLHttpRequest"
                            },
                            url: e.url,
                            data: n,
                            timeout: 6e4,
                            localXHR: !0
                        }).then((function(e) {
                            const t = Y(e.body)[5];
                            if (!t) throw new Error("Album data is empty!");
                            return new Promise((function(e) {
                                setTimeout(e, 250);
                            })).then((function() {
                                return t;
                            }));
                        }));
                    };
                    return o().then((function(e) {
                        var t = 20;
                        return e.hasMore ? function r(a) {
                            return !a || t < 0 ? e : (t--, n.offset = a, o().then((function(t) {
                                return t.list.length ? (e.list.push.apply(e.list, t.list), t.hasMore ? r(t.nextOffset) : e) : e;
                            }), (function(t) {
                                return "Abort" !== t.message && X.debug("getOffset error!", t), e;
                            })));
                        }(e.nextOffset) : e;
                    }));
                },
                _getAllTrackViaDom: function(e, t) {
                    var n = this;
                    t = t || {};
                    var o = [];
                    return [].slice.call(e.querySelectorAll(".audio_row")).forEach((function(e) {
                        if ((!t.fromPage || !n.elIsHidden(e)) && (t.grabReply || !ne.isReply(e))) {
                            var r = null;
                            try {
                                r = JSON.parse(e.dataset.audio);
                            } catch (e) {}
                            r && o.push(r);
                        }
                    })), {
                        list: o
                    };
                },
                _getNewAudioLinks: function(e, t) {
                    var n = this;
                    t = t || {};
                    var o = (e = e || document) === document, a = ne.getPopup("", "audio", (function() {
                        t.abort = !0;
                    }));
                    a.onPrepare(r.a.i18n.getMessage("download") + " ...");
                    var i = function() {
                        return Promise.resolve().then((function() {
                            return n._getAllTrackViaDom(e, {
                                fromPage: o,
                                grabReply: !1
                            });
                        }));
                    };
                    t.onProgress = function(e, t) {
                        a.onProgress(e, t);
                    };
                    var s = Promise.resolve();
                    return s = (s = (s = (s = o ? s.then((function() {
                        return Promise.resolve().then((function() {
                            var e = n._getAlbumIdFromUrl(location.href);
                            if (!e) throw new Error("Album is not found");
                            return n._getAlbumTrackViaApi(e, t);
                        }));
                    })).catch((function(e) {
                        throw "Album is not found" !== e.message && X.debug("findAlbumLinks error!", e), 
                        e;
                    })).catch((function() {
                        return i();
                    })) : s.then(i)).then((function(e) {
                        var t = e.list;
                        if (!t.length) throw new Error("Audio is not found");
                        return a.onProgress(0, t.length), e;
                    }))).then((function(e) {
                        var o = [], r = "";
                        "string" == typeof e.title && (r = w.a.modify(e.title));
                        const a = [];
                        return e.list.forEach((function(e) {
                            const t = e[1] + "_" + e[0], n = Z.getTrackActionHash(e), r = Z.getTrackUrlHash(e);
                            -1 === a.indexOf(t) && (a.push(t), o.push({
                                fullId: t,
                                actionHash: n,
                                urlHash: r
                            }));
                        })), n._getNewTrackListByIdsWithActionHash(o, t).then((function(e) {
                            var t = {}, o = [];
                            return e.forEach((function(e) {
                                var r = n.getNewTrackInfo(e);
                                if (r && r.url) {
                                    var a = n.getNewAudioFilename(r), i = n.getNewAudioFullTitle(r);
                                    t[r.fullId] = r.url, o.push({
                                        url: r.url,
                                        title: i,
                                        filename: a
                                    });
                                }
                            })), {
                                linkList: t,
                                trackList: o,
                                title: r
                            };
                        }));
                    }))).then((function(e) {
                        return a.onReady(), e;
                    }), (function(e) {
                        throw a.onReady(), e;
                    }));
                },
                tooltip: {
                    tooltip: void 0,
                    updatePos: function(e, t) {
                        var o = n.getPosition(e), r = n.getSize(this.tooltip);
                        this.tooltip.style.top = o.top + t.top - r.height + "px";
                        var a = o.left + parseInt(t.width / 2) - parseInt(r.width / 2), i = document.body.clientWidth + document.body.scrollLeft;
                        i < a + r.width && (a = i - r.width), this.tooltip.style.left = a + "px";
                    },
                    show: function(e, t) {
                        var n = this;
                        return void 0 !== this.tooltip ? this.hide() : (this.tooltip = y.a.create("div", {
                            class: "sf-tooltip",
                            style: Object.assign({
                                position: "absolute",
                                display: "none",
                                zIndex: 9999,
                                opacity: 0,
                                transition: "opacity 0.2s",
                                whiteSpace: "nowrap"
                            }, t.style),
                            on: [ "mouseenter", function(e) {
                                n.hide();
                            } ]
                        }), document.body.appendChild(this.tooltip)), this.tooltip.style.display = "block", 
                        setTimeout((function() {
                            n.updatePos(e, t), n.tooltip.style.opacity = 1;
                        }), 0), this.tooltip;
                    },
                    hide: function() {
                        this.tooltip && (this.tooltip.style.opacity = 0, this.tooltip.style.display = "none");
                    }
                },
                rmBitrate: function() {
                    void 0 === Z.rmBitrate.style && document.body.appendChild(Z.rmBitrate.style = y.a.create("style", {
                        text: ".sf-bitrate-value {display: none;}"
                    }));
                    for (var e, t = document.querySelectorAll(".sf-bitrate-value"), n = 0; e = t[n]; n++) e.parentNode.removeChild(e);
                },
                insertNewBitrate: function(e, t) {
                    if (e && t && t.classList.contains("audio_row__info")) {
                        var n = t.querySelector(".audio_row__duration");
                        if (n && (void 0 !== Z.rmBitrate.style && (Z.rmBitrate.style.parentNode.removeChild(Z.rmBitrate.style), 
                        Z.rmBitrate.style = void 0), !n.querySelector(".sf-bitrate-value"))) {
                            var o = y.a.create("span", {
                                text: " " + e,
                                class: "sf-bitrate-value",
                                style: {
                                    position: "absolute",
                                    textAlign: "right",
                                    right: 0,
                                    opacity: "0.8",
                                    top: "14px",
                                    fontSize: "11px",
                                    whiteSpace: "nowrap"
                                }
                            });
                            n.appendChild(o);
                        }
                    }
                },
                onDlBtnLeave: function() {
                    Z.tooltip.hide();
                },
                onDlBtnOver: function() {
                    var e = Z, t = e.tooltip, n = this, o = n.dataset.fullId, a = n.parentNode && n.parentNode.parentNode, i = -6;
                    n.dataset.bitrateOffsetTop && (i = parseInt(n.dataset.bitrateOffsetTop));
                    var s = {
                        top: i,
                        width: 24,
                        style: {
                            backgroundColor: "#fff",
                            border: "1px solid #ccc",
                            color: "rgb(48, 48, 48)"
                        }
                    }, l = t.show(n, s);
                    l.dataset.fullId = o;
                    var d = function() {
                        var t = n.dataset.bitrate, o = n.dataset.size, i = "";
                        e.isHlsLink(n.href) ? i = r.a.i18n.getMessage("download") : o ? t ? (e.insertNewBitrate(t, a), 
                        i = o + " ~ " + t) : i = o : i = r.a.i18n.getMessage("getFileSizeFailTitle"), l.style.padding = "2px 5px 3px", 
                        l.textContent = i;
                    };
                    n.dataset.size || e.isHlsLink(n.href) ? d() : (l.style.padding = "2px 2px 0 2px", 
                    l.textContent = "", l.appendChild(y.a.create("img", {
                        src: "/images/upload.gif",
                        height: 8,
                        width: 32,
                        style: {
                            marginTop: "2px",
                            marginBottom: "1px"
                        }
                    })), n.dataset.preloadOver || (n.dataset.preloadOver = 1, e._preloadNewTrackUrl(n).then((function(r) {
                        if (n.dataset.preloadOver = 2, n.href = r, !e.isHlsLink(r)) return e._onOverInsertBitrate(n, a).then((function() {
                            l.dataset.fullId === o && (d(), t.updatePos(n, s));
                        }));
                        d(), t.updatePos(n, s);
                    })).catch((function(e) {
                        X.error("_preloadNewTrackUrl error", e), n.dataset.preloadOver = "", l.dataset.fullId === o && (d(), 
                        t.updatePos(n, s));
                    }))));
                },
                preloadIdPromiseMap: {},
                _preloadNewTrackUrl: function(e) {
                    var t = this, n = t.preloadIdPromiseMap, o = e.dataset.fullId, r = e.dataset.actionHash, a = e.dataset.urlHash, i = n[o];
                    return i || (i = n[o] = t._getNewTrackListByIdsWithActionHash([ {
                        fullId: o,
                        actionHash: r,
                        urlHash: a
                    } ], {
                        withoutUnblock: !0
                    }).then((function(e) {
                        delete n[o];
                        var r = null;
                        e.some((function(e) {
                            if (e[1] + "_" + e[0] === o) return r = e, !0;
                        }));
                        var a = r && t.getNewTrackInfo(r);
                        if (!a || !a.url) throw new Error("Track is not found");
                        return a.url;
                    }), (function(e) {
                        throw delete n[o], e;
                    })).then(e => Z.unmaskUrl([ e ])).then(e => e[0])), i;
                },
                isHlsLink: function(e) {
                    return /\.m3u8(\?|$)/.test(e);
                },
                onNewDlBtnClick: function(e) {
                    Z.isHlsLink(this.href) ? (e.preventDefault(), Object(q.a)(Object(D.e)(B.a, {
                        sources: [ {
                            url: this.href,
                            format: "hls"
                        } ],
                        filename: this.download,
                        format: "mp3",
                        convertType: "hlsToMp3"
                    }), "sf-muxer-parent")) : n.downloadOnClick(e);
                    for (var t, o = document.querySelectorAll("._audio_row_" + this.dataset.fullId), r = 0; t = o[r]; r++) t.style.backgroundColor = "#f4f7fc";
                },
                _onNewDlBtnClickWrapper: function(e) {
                    var t = Z, n = this;
                    e.stopPropagation(), (n.dataset.preloadOver > 1 || n.dataset.preloadBitrate > 1) && (n.dataset.preloadDl = 2), 
                    n.dataset.preloadDl ? n.dataset.preloadDl > 1 ? Z.onNewDlBtnClick.call(n, e) : e.preventDefault() : (e.preventDefault(), 
                    n.dataset.preloadDl = 1, t._preloadNewTrackUrl(n).then((function(t) {
                        n.dataset.preloadDl = 2, n.href = t, Z.onNewDlBtnClick.call(n, e);
                    }), (function(e) {
                        X.error("_preloadNewTrackUrl error", e), n.dataset.preloadDl = "";
                    })));
                },
                getNewDlBtn: function(e) {
                    var t = {
                        href: e.url || "#sf-preload",
                        class: [ Z.className, "sf-audio-btn" ],
                        download: e.filename || "",
                        data: {
                            duration: e.duration || "",
                            fullId: e.fullId,
                            actionHash: e.actionHash,
                            urlHash: e.urlHash
                        },
                        style: {
                            width: "16px",
                            height: "16px"
                        },
                        on: [ [ "mouseenter", this.onDlBtnOver ], [ "mouseleave", this.onDlBtnLeave ], [ "click", this._onNewDlBtnClickWrapper ], [ "mousedown", function(e) {
                            e.stopPropagation();
                        } ] ]
                    };
                    return (r.a.isGM || r.a.isSafari) && (t.title = r.a.i18n.getMessage("downloadTitle")), 
                    y.a.create("a", t);
                },
                preloadSizePromiseMap: {},
                _onOverInsertBitrate: function(e, t) {
                    var o = this, a = o.preloadSizePromiseMap, i = e.dataset.fullId, s = a[i];
                    return s || (s = a[i] = (e => {
                        let t = F[e];
                        if (t) {
                            const t = I.indexOf(e);
                            -1 !== t && (I.splice(t, 1), I.unshift(e));
                        } else if (t = F[e] = Object(_.a)({
                            action: "getFileSize",
                            url: e
                        }).then(t => (t && !t.error || delete F[e], t)).catch(t => {
                            throw delete F[e], t;
                        }), I.unshift(e), I.length > 100) {
                            const e = I.pop();
                            delete F[e];
                        }
                        return t;
                    })(e.href).then((function(s) {
                        if (delete a[i], !s) throw new Error("Response is empty");
                        if (!s.fileSize) throw delete o.cache[i], new Error("File size is empty");
                        var l = n.sizeHuman(s.fileSize, 2), d = "";
                        e.dataset.duration && (d = Math.floor(s.fileSize / e.dataset.duration / 125) + " " + r.a.i18n.getMessage("kbps")), 
                        e.dataset.bitrate = d, e.dataset.size = l, Z.insertNewBitrate(d, t);
                    }), (function(e) {
                        throw delete a[i], e;
                    }))), s;
                },
                getNewAudioFullTitle: function(e) {
                    var t = [];
                    return e.title && t.push(e.title), e.performer && (t.length && t.unshift(" - "), 
                    t.unshift(e.performer)), t.join("");
                },
                getNewAudioFilename: function(e) {
                    var t = this.getNewAudioFullTitle(e);
                    return t && (t += ".mp3"), t;
                },
                handleNewCurrentAudioRow: async function(e, t) {
                    if (e.querySelector("." + Z.className)) return;
                    const [o] = await z.a.createLinkExtractor("vk-audios").extractLinks({
                        element: e
                    });
                    var r = this.getNewDlBtn(o), a = "#6C8CAC";
                    1 === t && (a = "#C4D1DE"), r.classList.remove("sf-audio-btn"), y.a.create(r, {
                        style: {
                            background: "url(" + n.svg.getSrc("download", a) + ") center no-repeat",
                            backgroundSize: "12px",
                            width: "12px",
                            height: "12px",
                            padding: 0,
                            margin: 0,
                            cssFloat: "left",
                            marginRight: "3px",
                            marginTop: "6px",
                            marginBottom: "-2px"
                        }
                    });
                    var i = null;
                    if (b.a.onRemoveEvent(r, (function() {
                        b.a.one(e, "mouseenter", R.mutationMode.wrapNewAudioOnMouseOver), i && i.stop();
                    })), 2 === t) {
                        var s = Object(h.a)(e, ".audio_page_player");
                        s && (i = new M.a({
                            target: s,
                            attrs: [ {
                                name: "data-full-id",
                                callback() {
                                    r.parentNode && r.parentNode.removeChild(r), i && i.stop();
                                }
                            } ]
                        })).trigger();
                    }
                    1 === t && (r.dataset.bitrateOffsetTop = 1), e.insertBefore(r, e.firstChild);
                },
                handleNewAudioRow: async function(e) {
                    if (e.querySelector("." + Z.className)) return;
                    const t = e.querySelector(".audio_row__actions"), [n] = await z.a.createLinkExtractor("vk-audios").extractLinks({
                        element: e
                    });
                    var r = this, a = this.getNewDlBtn(n), i = t.parentNode;
                    y.a.create(a, {
                        class: [ "audio_row__action" ],
                        style: {
                            width: "24px",
                            height: "24px",
                            cssFloat: "left"
                        },
                        on: [ [ "mouseover", e => {
                            if (K) {
                                if (!e.altKey && !e.ctrlKey) return e.preventDefault(), void Object(U.b)(a, {
                                    defaultWidth: 400,
                                    defaultHeight: 60
                                }, {});
                                Object(U.a)(a, {
                                    defaultWidth: 400,
                                    defaultHeight: 60
                                });
                            }
                        } ] ]
                    });
                    var s = t.firstChild;
                    s ? t.insertBefore(a, s) : t.appendChild(a), 1 === o.vkShowBitrate && (a.dataset.preloadBitrate || (a.dataset.preloadBitrate = 1, 
                    r._preloadNewTrackUrl(a).then((function(e) {
                        return a.dataset.preloadBitrate = 2, a.href = e, r._onOverInsertBitrate(a, i);
                    })).catch((function(e) {
                        X.error("_preloadNewTrackUrl error", e);
                    }))));
                },
                addNewDlTrackBtn: function(e) {
                    var t = this, n = function() {
                        r.disconnect();
                    }, o = function() {
                        t.handleNewAudioRow(e).catch(() => n());
                    }, r = new (Object(L.a)())((function(e) {
                        if (i) {
                            for (var t = null, r = null, a = 0; t = e.shift(); ) if ("childList" === t.type && t.addedNodes.length && t.target.classList.contains("audio_row__info")) for (a = 0, 
                            t.addedNodes; r = t.addedNodes[a]; a++) if (r.classList.contains("audio_row__actions")) return void o();
                        } else n();
                    }));
                    r.observe(e, {
                        childList: !0,
                        subtree: !0
                    });
                    var a = e.querySelector(".audio_row__actions");
                    a && (o(), a = null);
                },
                getNewTrackInfo: function(e) {
                    if (!e) return null;
                    var t = {};
                    return "string" == typeof e[2] && (t.url = e[2]), t.title = e[3], t.title && (t.title = w.a.decodeSpecialChars(Q(t.title))), 
                    t.performer = e[4], t.performer && (t.performer = w.a.decodeSpecialChars(Q(t.performer))), 
                    t.duration = parseInt(e[5]), t.actionHash = Z.getTrackActionHash(e), t.urlHash = Z.getTrackUrlHash(e), 
                    e[1] && e[0] && (t.fullId = e[1] + "_" + e[0]), t.id = e[0], t.ownerId = e[1], t;
                },
                getTrackActionHash: e => (e[13] || "").split("/")[2] || "",
                getTrackUrlHash: e => (e[13] || "").split("/")[5] || "",
                readNewDataAudio: function(e) {
                    try {
                        return JSON.parse(e);
                    } catch (e) {
                        return null;
                    }
                },
                addNewDlCurrentTrackBtn: function(e, t) {
                    this.handleNewCurrentAudioRow(e, t);
                },
                onNewMouseOver: function(e) {
                    var t = Z;
                    if (this && !this.querySelector("." + Z.className)) {
                        var n = null;
                        this.classList.contains("top_audio_player_title") && (n = 1), this.classList.contains("audio_page_player_title_performer") && (n = 2), 
                        n ? t.addNewDlCurrentTrackBtn(this, n) : t.addNewDlTrackBtn(this);
                    }
                },
                addCustomStyle: function() {
                    if (1 !== this.addCustomStyle.hasStyle) {
                        this.addCustomStyle.hasStyle = 1;
                        var e = document.querySelector("#savefrom-styles.sf-audio");
                        e && e.parentNode.removeChild(e), n.addStyleRules(".savefrom_vk_download.sf-audio-btn", {
                            background: "url(" + n.svg.getSrc("download", "#5f7fa2") + ") center no-repeat !important",
                            opacity: "0.4"
                        }, "sf-audio");
                    }
                },
                hideLinks: function() {
                    if (this.addCustomStyle.hasStyle) {
                        this.addCustomStyle.hasStyle = 0;
                        var e = document.querySelector("#savefrom-styles.sf-audio");
                        e && e.parentNode.removeChild(e), n.addStyleRules(".savefrom_vk_download", {
                            display: "none"
                        }, "sf-audio");
                    }
                    Z.tooltip.tooltip && (Z.tooltip.tooltip.parentNode.removeChild(Z.tooltip.tooltip), 
                    Z.tooltip.tooltip = void 0), Z.cache = {};
                },
                elIsHidden: function(e) {
                    return null === e.offsetParent;
                },
                downloadMP3Files: function() {
                    var e = ne.getLayer() || document;
                    Z._getNewAudioLinks(e).then((function(e) {
                        e.linkList;
                        var t = e.trackList, o = e.title || G();
                        let a = t.map(e => Z.isHlsLink(e.url) ? {
                            filename: e.filename,
                            sources: [ {
                                url: e.url,
                                format: "hls"
                            } ],
                            format: "hls",
                            useConverter: !0
                        } : e);
                        if (0 === a.length) return alert(r.a.i18n.getMessage("vkMp3LinksNotFound"));
                        n.downloadList.showBeforeDownloadPopup(a, {
                            type: "audio",
                            folderName: o
                        });
                    }), (function(e) {
                        "Abort" !== e.message && (X.debug("_getNewAudioLinks error!", e), alert(r.a.i18n.getMessage("vkMp3LinksNotFound")));
                    }));
                },
                showListOfAudioFiles: function(e) {
                    var t = ne.getLayer() || document;
                    Z._getNewAudioLinks(t).then((function(t) {
                        var o = t.linkList, a = t.trackList, i = t.title || G(), s = null;
                        if (e) {
                            if (0 !== (s = a).length) return n.playlist.popupPlaylist(s, i, !0);
                        } else {
                            for (var l in s = [], o) s.push({
                                url: o[l]
                            });
                            if (0 !== s.length) return n.playlist.popupFilelist(s);
                        }
                        alert(r.a.i18n.getMessage("vkMp3LinksNotFound"));
                    }), (function(e) {
                        "Abort" !== e.message && (X.debug("_getNewAudioLinks error!", e), alert(r.a.i18n.getMessage("vkMp3LinksNotFound")));
                    }));
                },
                requestReloadAudio: function(e, t, n) {
                    const o = {
                        act: "reload_audio",
                        ids: `${e}_${t}_${n}`
                    };
                    return Object(g.a)({
                        type: "POST",
                        url: "/audio",
                        json: !0,
                        data: o
                    }).then(e => {
                        const {data: t} = e.body;
                        return Z.getNewTrackInfo(t[0][0]);
                    });
                }
            }, ee = {
                panelId: "savefrom__vk_video_links",
                videoAttr: "data-savefrom-video",
                hiddenAttr: "data-savefrom-hidden",
                btnBoxId: "sf-iframe-dl-btn",
                btnBox: null,
                style: {
                    fontSize: "10pt",
                    margin: "15px 0",
                    padding: "0"
                },
                getLinksFormUrl: function(e) {
                    if (e) {
                        if ("//" === e.substr(0, 2) && (e = "http:" + e), o.showUmmyItem && this.isRutubeLink(e)) return ee.getRutubeLinks(e);
                        if (this.isPladformLink(e)) return ee.getPladformLinks(e);
                        var t, r = n.embedDownloader.hostings;
                        for (var a in r) {
                            for (var i, s = r[a], l = 0; i = s.re[l]; l++) {
                                var d = e.match(i);
                                if (d) {
                                    t = {
                                        hosting: a,
                                        action: s.action,
                                        extVideoId: d[1]
                                    };
                                    break;
                                }
                            }
                            if (t) break;
                        }
                        if (t) return {
                            request: t
                        };
                    }
                },
                getLinksFromFlashVars: function(e) {
                    var t = Object(d.a)(e, {
                        params: !0
                    });
                    return ee.getLinksFromHtml5MetaData(t);
                },
                getLinksFromHtml5MetaData: function(e) {
                    if (!e) return;
                    var t = e.md_title;
                    if (void 0 === t) return;
                    let n = Object.keys(e).some(e => e.match(/cache([0-9]+)/)) ? /cache([0-9]+)/ : /url([0-9]+)/;
                    var o = {}, r = !1;
                    for (var a in e) {
                        var i = null;
                        if ("extra_data" !== a || "52" !== e.extra) {
                            if (null !== (i = a.match(n))) {
                                var s = e[a], l = s.indexOf("?");
                                -1 !== l && (s = s.substr(0, l)), r = !0, o[i[1]] = s;
                            }
                        } else o[i = e.hd ? "HD" : "SD"] = e[a], r = !0;
                    }
                    return r ? {
                        title: t,
                        links: o
                    } : void 0;
                },
                getRutubeLinks: function(e) {
                    if (/rutube[^\/]+\/(?:play|video)\/embed\/(\d+)/.test(e) || /video\.rutube\./.test(e)) return {
                        isUmmy: !0,
                        links: n.popupMenu.prepareLinks.rutube(e)
                    };
                },
                isRutubeLink: function(e) {
                    return /\/\/.*rutube\..*/.test(e);
                },
                getPladformLinks: function(e) {
                    if (e) {
                        var t = Object(d.a)(e);
                        return {
                            request: {
                                action: "getPladformVideo",
                                extVideoId: {
                                    playerId: t.pl,
                                    videoId: t.videoid
                                }
                            }
                        };
                    }
                },
                isPladformLink: function(e) {
                    return /\/\/.*pladform\..*/.test(e);
                },
                getLinksVideoEl: function(e, t) {
                    var n = t.querySelector(".vv_summary");
                    if (!n) return null;
                    n = n.textContent;
                    for (var o, r, a = {}, i = e.querySelectorAll("source"), s = 0; r = i[s]; s++) {
                        var l = r.src || "", d = l.indexOf("?");
                        -1 !== d && (l = l.substr(0, d));
                        var u = l.match(/\.(\d+)\.[^\/]+$/);
                        null !== u && (a[u[1]] = l, o = !0);
                    }
                    return o ? {
                        title: n,
                        links: a
                    } : void 0;
                },
                getPlayerNode: function(e) {
                    var t = null;
                    return e.closest(".ShortVideoPage__container") ? e : ([ "iframe.video_yt_player", "#html5_player", "#flash_video_obj", "#playerObj", "#player", ".video_box_wrap > #video_player" ].some((function(n) {
                        if (t = e.querySelector(n)) return !0;
                    })), t);
                },
                getLinksFromMv: function(e, t, n) {
                    return Object(C.a)([ t, e ], (e, t) => {
                        const o = window.mvcur;
                        if (o && o.player && o.player.vars) {
                            var r = o.player.vars;
                            return r.vid !== e || r.oid !== t ? n() : {
                                vars: o.player.vars
                            };
                        }
                    }).then(e => e ? ee.getLinksFromHtml5MetaData(e.vars) : null);
                },
                getLinksFromFrame: function(e) {
                    var t = document.body.innerHTML, n = Object(d.a)(location.href), o = parseInt(n.oid), r = parseInt(n.id);
                    if (o && r) {
                        var a = null;
                        if (Object(c.a)(t, [ /"vid":/, /"oid":/, /"md_title":/ ]).some((function(e) {
                            return a = e, !0;
                        })), a && a.vid === r && a.oid === o) return e(null, {
                            request: {
                                hosting: "vk",
                                action: "getVkLinksFromJsonMsg",
                                json: a
                            }
                        });
                        var i = document.body, s = ee.getPlayerNode(i);
                        if (s) return ee.getLinksFromPlayer(i, s, (function(t) {
                            t && e(null, t);
                        }));
                    }
                    return e("ERROR");
                },
                getLinksFromPlayer: function(e, t, o) {
                    if (t) {
                        var r, a;
                        if ("OBJECT" === t.tagName) (a = t.querySelector('param[name="flashvars"]')) && (a = a.getAttribute("value"), 
                        r = ee.getLinksFromFlashVars(a)); else if ("IFRAME" === t.tagName) {
                            var i = t.getAttribute("src");
                            r || (r = ee.getLinksFormUrl(i));
                        } else if ("EMBED" === t.tagName) {
                            var s = t.getAttribute("src");
                            r || (a = t.getAttribute("flashvars")) && (r = ee.getLinksFromFlashVars(a)), r || (r = ee.getLinksFormUrl(s));
                        }
                        if (r) return o(r, e);
                        if ("DIV" === t.tagName && "video_player" === t.id) {
                            var l = t.parentNode.id, u = l && l.match(/video_box_wrap(-?\d+)_(-?\d+)/);
                            if (u) return u.shift(), u = u.map((function(e) {
                                return parseInt(e);
                            })), Object(C.a)(u, (e, t) => {
                                let n = window.mvcur;
                                var o = "video" + e + "_" + t;
                                return n && n.listId && (o = "" + o), {
                                    path: o
                                };
                            }).then(t => {
                                if (t) return o({
                                    request: {
                                        hosting: "vk",
                                        action: "getVKLinks",
                                        extVideoId: t.path,
                                        oidVid: u
                                    }
                                }, e);
                            });
                        }
                        if ("html5_player" === t.id) return Object(C.a)(() => window.html5video && window.html5video.vars ? window.html5video.vars : o()).then(t => {
                            var n = ee.getLinksFromHtml5MetaData(t);
                            if (n) return o(n, e);
                        });
                        if ("A" === t.tagName) {
                            var c = t.href, p = Object(d.a)(c);
                            if (p.to) return r = n.embedDownloader.checkUrl(p.to), o(r ? {
                                request: r
                            } : null, e);
                        }
                        return o(null, e);
                    }
                },
                preparePladformLinks: function(e) {
                    e && "getRutubeLinks" === e.action && (e.links = null);
                    var t = e && e.links, n = "noname", o = {};
                    if (t) for (var r, a = 0; r = t[a]; a++) n = r.title, o[r.quality] && (r.quality = 0), 
                    o[r.quality.toUpperCase()] = r.url;
                    return {
                        title: n,
                        links: o
                    };
                },
                prepareLinks: function(e) {
                    var t = e.title, n = [];
                    for (var o in e.links) {
                        var r = e.links[o], a = r.match(/[\w]+\.(mp4|flv)(?:\?|$)/i), i = (a = a ? a[1] : "flv").toUpperCase();
                        n.push({
                            href: r,
                            quality: o,
                            title: t,
                            ext: a,
                            format: i,
                            forceDownload: !0
                        });
                    }
                    return n;
                },
                getVideoLinksAsAjax: function(e) {
                    var t = /video(-?\d+_-?\d+)/.exec(e);
                    t = t && t[1];
                    var n = Object(d.a)(e).list;
                    return ne._getModuleName().then((function(e) {
                        return new Promise((function(o) {
                            te.getLinkAsAjax([ t, n ], (function(e, t) {
                                o({
                                    hosting: t,
                                    response: e
                                });
                            }), e);
                        }));
                    }));
                },
                async prepareVideoLinks(e) {
                    let t = [];
                    if (e && e.oidVid) {
                        const [n, o] = e.oidVid;
                        let r = await ee.getLinksFromMv(n, o);
                        r && t.push(...ee.prepareLinks(r));
                    }
                    const r = await Object(_.a)(e);
                    if (r) if ("getPladformVideo" === e.action) o.showUmmyItem && "getRutubeLinks" === r.action ? t.push(...n.popupMenu.prepareLinks.rutube(r.links)) : t.push(...ee.prepareLinks(ee.preparePladformLinks(r))); else if (r.links) {
                        const e = n.embedDownloader.reMapHosting(r.action);
                        e && t.push(...n.popupMenu.prepareLinks[e](r.links, r.title));
                    }
                    if (!t.length && "getVKLinks" === e.action) {
                        const {hosting: o, response: r} = await ee.getVideoLinksAsAjax(e.extVideoId);
                        r && r.links && (r.isUmmy ? t.push(...r.links) : t.push(...n.popupMenu.prepareLinks[o](r.links, r.title)));
                    }
                    let a = t.filter(e => -1 !== e.href.indexOf("mycdn.me/")), i = t.filter(e => -1 !== e.href.indexOf("vkuser"));
                    if ((a.length || i || t.length <= 2) && e.extVideoId) {
                        let n = {}, o = document.querySelector('a[href*="' + e.extVideoId + '"]');
                        if (o && o.dataset.length) {
                            let e = o.closest('[id*="post"]');
                            e && (n.post_id = e.dataset.postId), n.list = o.dataset.list, n.paylist_id = "wall_" + o.dataset.video.split("_")[0];
                        }
                        n.video = e.extVideoId.split("?")[0].replace("video", "");
                        const a = location.href.match(/pl_(wall_.\d+)/);
                        a && a[1] && (n.playlist_id = a[1]);
                        const i = document.querySelector(`a[data-video="${n.video}"]`);
                        i && i.dataset.list && (n.list = i.dataset.list);
                        const s = await Object(g.a)({
                            type: "POST",
                            url: "https://vk.com/al_video.php?act=show",
                            data: $({
                                act: "show",
                                al: 1,
                                autoplay: 1,
                                module: "groups"
                            }, n)
                        }), {hls: l, mp4: d} = await P.a(r.title, s.body);
                        t.push(...d, ...l), t = Object(N.a)(t, "href");
                    }
                    return t = await P.b(Object(N.a)(t, "quality", "itag"), e => 22 == e.itag), t = t.map(e => (e.title = "." === e.title ? "video-" + e.quality : e.title, 
                    e)), t;
                },
                newAppendButton: function(e, o) {
                    if (!e) return;
                    Object(V.a)({
                        category: "append",
                        subcategory: "vk",
                        event: "b"
                    });
                    var a = o.querySelector("#mv_info"), i = a && a.querySelector(".mv_actions_block .like_cont .like_btns");
                    a = null;
                    const s = e => e ? e.querySelector("#mv_top_controls, #VideoLayerInfo__topControls") : null;
                    var l = s(o);
                    if (l || (l = s(o.closest("#mv_container"))), i && Z.elIsHidden(i) && (i = null), 
                    i || l) {
                        for (var d, u = !(i || !l), c = o.querySelectorAll(".savefrom_vk_download"), p = 0; d = c[p]; p++) d.parentNode.removeChild(d);
                        d = null, c = null;
                        var f = y.a.create("div", {
                            class: [ "savefrom_vk_download", "sf-under-video" ],
                            style: {
                                cursor: "pointer"
                            },
                            on: [ [ "click", async function(a) {
                                if (a.stopPropagation(), b.a.onRemoveEvent(this, R.hideMenu), R.contextMenu && R.contextMenu.isShow) return void R.hideMenu();
                                var i = R.contextMenu = n.popupMenu.quickInsert(this, r.a.i18n.getMessage("download") + "...", "sf-single-video-menu", {
                                    parent: o
                                });
                                const s = await z.a.createLinkExtractor("vk-video").extractLinks({
                                    element: e,
                                    initData: t
                                });
                                return i.update(function(e) {
                                    return e.map(e => (e.href = e.url, e.title = e.filename, delete e.url, delete e.filename, 
                                    e));
                                }(s));
                            } ], [ "mousedown", function(e) {
                                e.stopPropagation();
                            } ], [ "keydown", function(e) {
                                e.stopPropagation();
                            } ] ]
                        });
                        if (i) {
                            y.a.create(f, {
                                class: [ "like_btn" ],
                                append: [ y.a.create("div", {
                                    class: [ "like_button_icon" ],
                                    append: [ y.a.create("img", {
                                        src: n.svg.getSrc("download", "#828a99"),
                                        width: 16,
                                        height: 16,
                                        style: {
                                            margin: "4px"
                                        }
                                    }) ]
                                }), y.a.create("div", {
                                    class: [ "like_button_label" ],
                                    text: r.a.i18n.getMessage("download")
                                }) ]
                            });
                            var h = i.querySelector(".ui_actions_menu_wrap");
                            h ? h.parentNode.insertBefore(f, h) : i.appendChild(f);
                        } else if (u) {
                            y.a.create(f, {
                                class: [ "mv_top_button" ],
                                style: {
                                    textAlign: "center"
                                },
                                append: [ y.a.create("img", {
                                    class: [ "mv_small_close_icon" ],
                                    style: {
                                        backgroundImage: "none",
                                        width: "20px",
                                        height: "20px"
                                    },
                                    src: n.svg.getSrc("download", "#FFFFFF"),
                                    width: 20,
                                    height: 20
                                }) ]
                            });
                            var m = l.firstChild;
                            if (m) if (Z.elIsHidden(l.lastChild)) {
                                for (;m.nextElementSibling && !Z.elIsHidden(m.nextElementSibling); ) m = m.nextElementSibling;
                                m.parentNode.insertBefore(f, m);
                            } else l.appendChild(f); else l.appendChild(f);
                        }
                    }
                },
                newClipButton: function(e, o) {
                    setTimeout(() => {
                        if (!e) return;
                        Object(V.a)({
                            category: "append",
                            subcategory: "vk",
                            event: "b"
                        });
                        let a = o.closest(".ShortVideoPost");
                        a || (a = o);
                        let i = a.querySelector(".like_btns");
                        i || (i = a.querySelector(".like_cont"));
                        let s = o.closest("#mv_layer_wrap");
                        const l = y.a.create("div", {
                            id: "savefrom__yt_btn",
                            style: {
                                display: "flex",
                                marginLeft: "10px",
                                verticalAlign: "middle"
                            },
                            append: [ y.a.create("a", {
                                class: "sf-quick-dl-btn",
                                href: "javascript:void(0)",
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
                                    color: "#fff",
                                    marginRight: "8px"
                                },
                                append: [ y.a.create("i", {
                                    style: {
                                        position: "absolute",
                                        display: "inline-block",
                                        left: "6px",
                                        top: "3px",
                                        backgroundImage: "url(" + n.svg.getSrc("download", "#ffffff") + ")",
                                        backgroundSize: "12px",
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "center",
                                        width: "16px",
                                        height: "16px"
                                    }
                                }) ],
                                on: [ [ "click", async function(o) {
                                    if (o.stopPropagation(), b.a.onRemoveEvent(this, R.hideMenu), R.contextMenu && R.contextMenu.isShow) return void R.hideMenu();
                                    R.contextMenu = n.popupMenu.quickInsert(this, "Скачивается...", "sf-single-video-menu", {
                                        parent: i
                                    }, "clip");
                                    const r = function(e) {
                                        return e.map(e => (e.href = e.url, e.title = e.filename, delete e.url, delete e.filename, 
                                        e));
                                    }(await z.a.createLinkExtractor("vk-clip").extractLinks({
                                        element: e,
                                        initData: t
                                    }));
                                    if (0 === r.length) return this.href = s.querySelector("video").src, Object(_.a)({
                                        action: "downloadVkStory",
                                        downloadFileUrl: this.href,
                                        fileName: Date.now() + ".mp4"
                                    });
                                    this.href = (e => {
                                        let t = e[0].quality, n = 0;
                                        for (let o = 0; o < e.length; o++) t < e[o].quality && (t = e[o].quality, n = o);
                                        return e[n].href;
                                    })(r), this.click(), this.href = "javascript:void(0)", o.preventDefault();
                                } ] ]
                            }), y.a.create("style", {
                                text: Object(p.a)({
                                    selector: "#savefrom__yt_btn",
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
                            }), y.a.create("button", {
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
                                on: [ [ "click", async function(o) {
                                    if (o.stopPropagation(), b.a.onRemoveEvent(this, R.hideMenu), R.contextMenu && R.contextMenu.isShow) return void R.hideMenu();
                                    var a = R.contextMenu = n.popupMenu.quickInsert(this, r.a.i18n.getMessage("download") + "...", "sf-single-video-menu", {
                                        parent: i
                                    }, "clip");
                                    const s = function(e) {
                                        return e.map(e => (e.href = e.url, e.title = e.filename, delete e.url, delete e.filename, 
                                        e));
                                    }(await z.a.createLinkExtractor("vk-clip").extractLinks({
                                        element: e,
                                        initData: t
                                    }));
                                    return a.update(s);
                                } ], [ "mousedown", function(e) {
                                    e.stopPropagation();
                                } ], [ "keydown", function(e) {
                                    e.stopPropagation();
                                } ] ],
                                append: [ y.a.create("i", {
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
                                }), y.a.create("span", {
                                    text: "HD"
                                }) ]
                            }) ]
                        });
                        i && (i.querySelector("#savefrom__yt_btn") || i.append(l));
                    }, 500);
                },
                appendNewFrameBtn: function(e, t) {
                    var a = this;
                    if (!t.querySelector(".savefrom_vk_download")) {
                        var i = n.frameMenu.getBtn({
                            singleBtn: !0,
                            btnId: a.btnBoxId,
                            containerStyle: {
                                top: "10px",
                                right: "10px"
                            },
                            on: [ [ "click", function(t) {
                                if (t.preventDefault(), t.stopPropagation(), R.contextMenu && R.contextMenu.isShow) R.hideMenu(); else {
                                    var s = R.contextMenu = n.frameMenu.getMenu(this, r.a.i18n.getMessage("download") + "...", "sf-frame-menu", {
                                        container: i.container,
                                        onShow: function() {
                                            i.node.classList.add("sf-over");
                                        },
                                        onHide: function() {
                                            R.contextMenu = null, i.node.classList.remove("sf-over");
                                        }
                                    });
                                    if (e.request) {
                                        var l = function(t) {
                                            var i = r.a.i18n.getMessage("noLinksFound");
                                            if (t && "getPladformVideo" === e.request.action) i = o.showUmmyItem && "getRutubeLinks" === t.action ? n.popupMenu.prepareLinks.rutube(t.links) : a.prepareLinks(a.preparePladformLinks(t)); else if (t && t.links) {
                                                var l = n.embedDownloader.reMapHosting(t.action);
                                                l && (i = n.popupMenu.prepareLinks[l](t.links, t.title));
                                            }
                                            s.update(i);
                                        };
                                        try {
                                            r.a.sendMessage(e.request, l);
                                        } catch (t) {
                                            l();
                                        }
                                    } else s.update(a.prepareLinks(e));
                                    !1;
                                }
                            } ], [ "mousedown", function(e) {
                                e.stopPropagation(), 2 === e.button && (R.hideMenu(), i.container.parentNode && i.container.parentNode.removeChild(i.container));
                            } ] ]
                        });
                        i.container = y.a.create("div", {
                            class: "sf-btn-ctr",
                            append: i.node
                        }), i.node.appendChild(y.a.create("style", {
                            text: Object(p.a)([ {
                                selector: [ "body:hover .sf-btn-ctr #" + a.btnBoxId, "body:hover .sf-btn-ctr .sf-frame-menu" ],
                                style: {
                                    display: "block"
                                }
                            } ])
                        })), document.body.appendChild(i.container);
                    }
                },
                addFrameBtn: function() {
                    var e = document.getElementById("page_wrap");
                    e && ee.getLinksFromFrame((function(t, n) {
                        t || ee.appendNewFrameBtn(n, e);
                    }));
                }
            }, te = {
                linkDataAttr: "savefromHasBtn",
                getLinkAsAjaxRequest: function(e, t) {
                    t = t || 0;
                    var n = Object.assign({}, e), o = function() {
                        if (t < 1) return te.getLinkAsAjaxRequest(e, ++t);
                        e.error && e.error();
                    }, r = n.data;
                    0 === t ? r.act = "show_inline" : 1 === t && (r.act = "show"), Object(v.a)(n, (function(t, n, r) {
                        return t || !r || -1 !== r.indexOf('href="/join"') ? o() : void e.success(r);
                    }));
                },
                getVideoDataFromLink: function(e) {
                    var t = e.getAttribute("onclick"), n = /showVideo\(['"]{1}([^'"]+)['"]{1},.?['"]{1}([^'"]+)['"]{1},.*\)/.exec(t);
                    return n && n.shift(), n;
                },
                getLinkAsAjax: function(e, t, a) {
                    te.getLinkAsAjaxRequest({
                        localXHR: 1,
                        type: "POST",
                        url: "/al_video.php",
                        data: {
                            list: e[1],
                            video: e[0],
                            act: "show_inline",
                            module: a,
                            al: 1
                        },
                        success: function(e) {
                            if (!e) return t();
                            var a = e.match(/<iframe[^>]+src=['"]{1}([^'">]+)['"]{1}[^>]+>/i);
                            if (a || (a = e.match(/var\s+opts\s+=\s+({[^}]*})/im)) && (a = a[1].match(/url:\s+['"]{1}([^'"]+)['"]{1}/i)) && 0 !== a[1].indexOf("//") && 0 !== a[1].indexOf("http") && (a = null), 
                            a) {
                                var i = a[1];
                                if (o.showUmmyItem && ee.isRutubeLink(i)) return t(ee.getRutubeLinks(i));
                                if (0 === i.indexOf("//") && (i = "http:" + i), 0 !== i.indexOf("http")) return t();
                                var s = n.embedDownloader.checkUrl(i);
                                if (!s) return t();
                                var l = {
                                    action: s.action,
                                    extVideoId: s.extVideoId
                                };
                                r.a.sendMessage(l, (function(e) {
                                    var o = s.hosting;
                                    return e.action !== l.action && (o = n.embedDownloader.reMapHosting(e.action)), 
                                    t(e, o);
                                }));
                            } else Object(_.a)({
                                action: "getVkLinksFromData",
                                data: e
                            }).then((function(e) {
                                return t(e, "vk");
                            })).catch((function() {
                                return t({}, "vk");
                            }));
                        },
                        error: function() {
                            t();
                        }
                    });
                },
                addDownloadBtn: function(e) {
                    var t = e.href;
                    const o = {
                        display: "inline-block",
                        width: "16px",
                        height: "16px",
                        marginLeft: "5px",
                        backgroundImage: "url(" + n.svg.getSrc("download", "#78A2CC") + ")",
                        backgroundRepeat: "no-repeat",
                        marginBottom: "-4px"
                    };
                    var a = y.a.create("a", {
                        href: "http://savefrom.net/?url=" + encodeURIComponent(t),
                        style: o,
                        on: [ "click", function(e) {
                            if (e.preventDefault(), b.a.onRemoveEvent(i, R.hideMenu), R.contextMenu && R.contextMenu.isShow) R.hideMenu(); else {
                                var t = document.querySelector("#wk_box");
                                t && t.contains(this) || (t = null);
                                var o = {
                                    parent: t
                                }, s = this.getAttribute(n.embedDownloader.dataAttr), l = n.embedDownloader.checkUrl(s);
                                if (l) {
                                    var d = {
                                        action: l.action,
                                        extVideoId: l.extVideoId
                                    }, u = R.contextMenu = n.popupMenu.quickInsert(a, r.a.i18n.getMessage("download") + " ...", "sf-popupMenu", o);
                                    ee.prepareVideoLinks(d).then(e => {
                                        e.map(e => ("MP4" === e.format && (e.forceDownload = !0), e)), u.update(e);
                                    });
                                } else R.contextMenu = n.popupMenu.quickInsert(a, r.a.i18n.getMessage("noLinksFound"), "sf-popupMenu", o);
                            }
                        } ]
                    });
                    a.setAttribute(n.embedDownloader.dataAttr, t);
                    var i = y.a.create("span", {
                        class: "sf-video-feed-container",
                        on: [ "click", function(e) {
                            e.stopPropagation();
                        } ],
                        append: [ a ]
                    }), s = e.querySelector(".post_video_title");
                    s ? s.appendChild(i) : e.appendChild(i);
                },
                onLinkHover: function() {
                    if ("A" === this.tagName) {
                        var e = this.href || "";
                        0 === this.id.indexOf("post_media_lnk") && -1 !== e.indexOf("/video") && (R.contextMenu && R.contextMenu.isShow && R.hideMenu(), 
                        this.dataset[te.linkDataAttr] || (this.dataset[te.linkDataAttr] = 1, te.addDownloadBtn(this)));
                    }
                },
                off: function() {
                    for (var e, t = document.querySelectorAll(".sf-video-feed-container"), n = 0; e = t[n]; n++) e.parentNode.removeChild(e);
                    var o = Object(u.a)(te.linkDataAttr), r = document.querySelectorAll("*[" + o + "]");
                    for (n = 0; e = r[n]; n++) e.removeAttribute(o);
                }
            }, ne = {
                photoCache: {},
                getAlbumId: function(e) {
                    if (!/(\?|&|#)act=edit/i.test(e)) {
                        var t = [];
                        t.push(e);
                        var n = Object(d.a)(e);
                        n.w && t.push(n.w), n.z && t.push.apply(t, n.z.split("/")), /#/.test(e) && (t.push(e.substr(e.indexOf("#") + 1)), 
                        t.push(decodeURIComponent(e.substr(e.indexOf("#") + 1)))), t.reverse();
                        var o = null, r = null;
                        return t.some((function(e) {
                            if (r = e.match(/(?:\/|#|=|^)(albums?|tag|photos|feed(?:\d+)?_|wall)(-?\d+)(?:_(\d+))?/i)) return r[3] ? o = /^(feed|wall)/.test(r[1]) ? r[1] + r[2] + "_" + r[3] : "album" + r[2] + "_" + r[3] : ("albums" == r[1] && (r[1] = "photos"), 
                            o = r[1] + r[2]), !0;
                        })), o;
                    }
                },
                getModuleName: function(e) {
                    var t = y.a.create("script", {
                        text: "(" + 'function(){if(window.cur&&window.cur.module&&typeof window.cur.module==="string"){document.body.dataset["{dataArg}"]=window.cur.module}}'.replace("{dataArg}", "sfModule") + ")();"
                    });
                    document.body.appendChild(t), setTimeout((function() {
                        t.parentNode.removeChild(t), e(document.body.dataset.sfModule);
                    }), 0);
                },
                isReply: function(e) {
                    return Object(f.a)(e, ".replies " + e.tagName) || Object(f.a)(e, ".wl_replies " + e.tagName);
                },
                getPopup: function(e, t, o) {
                    var a, i = n.playlist.getInfoPopupTemplate();
                    y.a.create(i.textContainer, {
                        append: [ y.a.create("p", {
                            text: e,
                            style: {
                                color: "#0D0D0D",
                                fontSize: "20px",
                                marginBottom: "11px",
                                marginTop: "13px"
                            }
                        }), a = y.a.create("p", {
                            text: "",
                            style: {
                                color: "#868686",
                                fontSize: "14px",
                                lineHeight: "24px"
                            }
                        }) ]
                    });
                    var s = n.popupDiv(i.body, "sf_progress_popup", void 0, void 0, o), l = function e(n) {
                        e.state !== n && (e.state = n, i.buttonContainer.style.display = "none", a.style.display = "none", 
                        r.a.sendMessage({
                            action: "getWarningIcon",
                            type: t,
                            color: "#77D1FA"
                        }, (function(e) {
                            i.icon.style.backgroundImage = "url(" + e + ")";
                        })), "progress" === n && (a.style.display = "block"), "error" === n && (r.a.sendMessage({
                            action: "getWarningIcon",
                            type: t,
                            color: "#AAAAAA"
                        }, (function(e) {
                            i.icon.style.backgroundImage = "url(" + e + ")";
                        })), a.style.display = "block"));
                    };
                    return {
                        onPrepare: function(e) {
                            l("progress"), a.textContent = e;
                        },
                        onProgress: function(e, t) {
                            a.textContent = r.a.i18n.getMessage("vkFoundFiles").replace("%d", e) + " " + r.a.i18n.getMessage("vkFoundOf") + " " + t;
                        },
                        onReady: function() {
                            b.a.trigger(s, "kill");
                        },
                        onError: function(e) {
                            l("error"), a.textContent = e;
                        }
                    };
                },
                getLayer: function() {
                    var e = document.getElementById("layer_wrap");
                    return null !== e && "none" !== e.style.display && 0 !== e.textContent.length || (e = null), 
                    null === e && (null !== (e = document.getElementById("wk_layer_wrap")) && "none" !== e.style.display && 0 !== e.textContent.length || (e = null)), 
                    e;
                },
                _getModuleName: function() {
                    return new Promise((function(e, t) {
                        var n = y.a.create("script", {
                            text: '(function(dataArg){if(window.cur&&window.cur.module&&typeof window.cur.module==="string"){document.body.dataset[dataArg]=window.cur.module}})(' + JSON.stringify("sfModule") + ");"
                        });
                        document.body.appendChild(n), setTimeout((function() {
                            n.parentNode.removeChild(n), e(document.body.dataset.sfModule);
                        }), 0);
                    }));
                },
                _getLinks: async function(e) {
                    var t = this, o = Promise.resolve(), a = {}, i = t.getPopup(G(), "photo", (function() {
                        a.abort = !0;
                    }));
                    a.onProgress = function(e, t) {
                        i.onProgress(e, t);
                    }, i.onPrepare(r.a.i18n.getMessage("download") + " ...");
                    try {
                        const o = await z.a.createLinkExtractor("vk-albums").extractLinks({
                            mediaId: e,
                            details: a
                        });
                        i.onReady();
                        const r = G();
                        x ? n.downloadList.showBeforeDownloadPopup(o, {
                            count: o.length,
                            folderName: r,
                            type: "photo",
                            onShowList: function() {
                                t.showListOfLinks(r, o, !0);
                            }
                        }) : t.showListOfLinks(r, o, !0);
                    } catch (e) {
                        "Abort" !== e.message && X.debug("_getLinks error", e), i.onError(r.a.i18n.getMessage("noLinksFound"));
                    }
                    return o;
                },
                rmPhotoAlbumDlBtn: function() {
                    for (var e, t = document.querySelectorAll([ ".sf-dl-ablum-btn-divide", ".sf-dl-ablum-btn" ]), n = 0; e = t[n]; n++) e.parentNode.removeChild(e);
                },
                addNewPhotoAlbumDlBtn: function(e) {
                    var t = this, n = e.querySelector(".photos_album_intro_info"), o = e.querySelector(".page_block_header_extra"), a = n || o;
                    if (a && !a.querySelector(".sf-dl-ablum-btn")) {
                        var i = y.a.create("a", {
                            text: r.a.i18n.getMessage("vkDownloadPhotoAlbum"),
                            href: "#",
                            class: "sf-dl-ablum-btn",
                            on: [ "click", function(e) {
                                e.preventDefault();
                                var n = ne.getAlbumId(location.href);
                                t._getLinks(n);
                            } ]
                        }), s = y.a.create("span", {
                            append: i
                        });
                        n ? (s.classList.add("photos_album_info"), s = y.a.create(document.createDocumentFragment(), {
                            append: [ y.a.create("span", {
                                class: "divide sf-dl-ablum-btn-divide",
                                text: "|"
                            }), s ]
                        })) : o && (s.classList.add("photos_comments_link"), s.style.margin = "0 15px"), 
                        a.appendChild(s);
                    }
                },
                getContainer: function() {
                    var e = document.getElementById("photos_albums_container");
                    return e || (e = document.getElementById("photos_container")), e;
                },
                rmCurrentPhotoBtn: function(e) {
                    for (var t, n = void 0, o = document.querySelectorAll(".sf-dl-current-photo-btn"), r = 0; t = o[r]; r++) e && e.contains(t) ? n = t : t.parentNode.removeChild(t);
                    return n;
                },
                style: null,
                injectStyle: function() {
                    this.style ? this.style.parentNode || document.head.appendChild(this.style) : (this.style = y.a.create("style", {
                        text: Object(p.a)({
                            "div > .sf-dl-current-photo-btn": {
                                display: "none",
                                border: "1px solid #F8F8F8",
                                width: "20px",
                                height: "20px",
                                padding: 0,
                                position: "absolute",
                                background: "url(" + n.svg.getSrc("download", "#777777") + ") center no-repeat #F8F8F8",
                                backgroundSize: "12px",
                                top: "20px",
                                left: "30px",
                                zIndex: 10,
                                cursor: "pointer"
                            },
                            "div > .sf-dl-current-photo-btn.sf-style-black": {
                                border: 0,
                                background: "url(" + n.svg.getSrc("download", "#FFF") + ") center no-repeat #000",
                                backgroundSize: "14px",
                                padding: "2px 4px",
                                borderRadius: "2px",
                                opacity: .4,
                                transition: "opacity 100ms linear"
                            },
                            "div > .sf-dl-current-photo-btn:hover": {
                                background: "url(" + n.svg.getSrc("download", "#00B75A") + ") center no-repeat #F8F8F8",
                                backgroundSize: "12px",
                                opacity: .8
                            },
                            "div > .sf-dl-current-photo-btn.sf-style-black:hover": {
                                background: "url(" + n.svg.getSrc("download", "#00B75A") + ") center no-repeat #000",
                                backgroundSize: "14px"
                            },
                            "div > .sf-dl-current-photo-btn:active": {
                                outline: 0,
                                boxShadow: "inset 0 3px 5px rgba(0, 0, 0, 0.125)"
                            },
                            "div:hover > .sf-dl-current-photo-btn": {
                                display: "block"
                            }
                        })
                    }), document.head.appendChild(this.style));
                },
                getMaxPhotoSize: function(e) {
                    var t = null, n = null;
                    [ "w", "z", "y", "x" ].some((function(o) {
                        return !!(t = e[o + "_"]) || (!!(n = e[o + "_src"]) || void 0);
                    })), t || (t = [ n ]);
                    var o, r;
                    return t[0] ? {
                        url: (o = e.base, r = t[0], r.match(/https?:\/\//i) ? ((r = new URL(r)).pathname.match(/\.[a-z]{3}$/i) || (r += ".jpg"), 
                        r.toString()) : (r.match(/\.[a-z]{3}$/i) || (r += ".jpg"), (o || "").replace(/\/[a-z0-9_:\.]*$/i, "") + "/" + r)),
                        width: t[2] && t[1],
                        height: t[1] && t[2]
                    } : null;
                },
                addNewDlCurrentPhotoBtn: function(e) {
                    var t = e;
                    if (Object(V.a)({
                        category: "append",
                        subcategory: "vk",
                        event: "b"
                    }), !this.rmCurrentPhotoBtn(t)) {
                        var o = e.closest(".pv_photo_wrap");
                        if (o) {
                            var a = y.a.create("a", {
                                class: [ "sf-dl-current-photo-btn", "sf-style-black" ],
                                href: "#",
                                title: r.a.i18n.getMessage("download"),
                                on: [ [ "click", async function(e) {
                                    if (e.stopPropagation(), e.preventDefault(), b.a.onRemoveEvent(this, R.hideMenu), 
                                    R.contextMenu && R.contextMenu.isShow) return void R.hideMenu();
                                    var a = R.contextMenu = n.popupMenu.quickInsert(this, r.a.i18n.getMessage("download") + " ...", "photoDlMenu", {
                                        parent: t
                                    });
                                    const i = o.querySelector(".like_wrap").classList;
                                    let s = null;
                                    i.forEach(e => {
                                        const t = e.match(/photo(-?\d+_\d+)/);
                                        s = t && t[1];
                                    });
                                    try {
                                        const [e] = await z.a.createLinkExtractor("vk-photo").extractLinks({
                                            mediaId: s
                                        });
                                        var l = [];
                                        l.push({
                                            href: e.url,
                                            title: e.filename,
                                            quality: r.a.i18n.getMessage("download"),
                                            format: " ",
                                            ext: e.ext,
                                            forceDownload: !0,
                                            isOther: !0,
                                            isBlank: !0,
                                            func: function() {
                                                "undefined" != typeof GM_info && "Tampermonkey" === GM_info.scriptHandler ? setTimeout(() => a.hide(), 2500) : a.hide();
                                            }
                                        }), l.push({
                                            href: "#getAlbum",
                                            title: "",
                                            quality: r.a.i18n.getMessage("vkDownloadPhotoAlbum"),
                                            format: " ",
                                            ext: "",
                                            noSize: !0,
                                            isOther: !0,
                                            func: function(e) {
                                                e.preventDefault(), ne.downloadPhoto(), a.hide();
                                            }
                                        }), a.update(l);
                                    } catch (e) {
                                        return console.error(e), a.update(r.a.i18n.getMessage("noLinksFound"));
                                    }
                                } ], [ "mousedown", function(e) {
                                    e.stopPropagation();
                                } ] ]
                            });
                            new O.a({
                                queries: [ {
                                    css: "#pv_photo img",
                                    is: "added",
                                    callback: () => {
                                        R.contextMenu && R.contextMenu.isShow && (R.hideMenu(), a.click());
                                    }
                                } ]
                            }), t.appendChild(a);
                        }
                    }
                },
                downloadPhoto: function() {
                    let e = this.getAlbumId(location.href);
                    if (!e) {
                        const t = document.querySelector(".pv_album_name a");
                        t && !Z.elIsHidden(t) && (e = this.getAlbumId(t.href));
                    }
                    this._getLinks(e);
                },
                showListOfPhotosContent: function(e, t) {
                    var n;
                    return "<!DOCTYPE html><html>" + y.a.create("html", {
                        append: [ y.a.create("head", {
                            append: [ y.a.create("meta", {
                                attr: {
                                    charset: "utf-8"
                                }
                            }), y.a.create("style", {
                                text: "a,img{display:block;margin-bottom:5px;}p{width: 640px}"
                            }) ]
                        }), y.a.create("body", {
                            append: [ e, y.a.create("p", {
                                text: r.a.i18n.getMessage("vkListOfPhotosInstruction")
                            }), y.a.create("br"), y.a.create("br"), (n = document.createDocumentFragment(), 
                            t.forEach((function(e) {
                                var t = e.url, o = e.filename || "", r = y.a.create("img", {
                                    src: t,
                                    alt: "photo"
                                });
                                o && (r = y.a.create("a", {
                                    href: t,
                                    download: o,
                                    append: r
                                })), n.appendChild(r);
                            })), n) ]
                        }) ]
                    }).innerHTML + "</html>";
                },
                showListOfLinks: function(e, t, o) {
                    var a;
                    a = o ? y.a.create(document.createDocumentFragment(), {
                        append: [ y.a.create("p", {
                            append: [ y.a.create("a", {
                                text: r.a.i18n.getMessage("vkListOfPhotos"),
                                href: "#",
                                class: "sf__hidden",
                                style: {
                                    fontWeight: "bolder",
                                    border: "none",
                                    textDecoration: "underline"
                                },
                                on: [ "click", function(n) {
                                    n.preventDefault();
                                    var o = ne.showListOfPhotosContent(e, t), a = "";
                                    r.a.isChrome || r.a.isTM ? (a = Object(m.a)(o, "text/html", !0), r.a.sendMessage({
                                        action: "openTab",
                                        url: a
                                    })) : (a = Object(m.a)(o, "text/html"), window.open(a, "_blank"));
                                } ]
                            }) ]
                        }) ]
                    }) : "";
                    for (var i, s, l = "", d = 0; i = t[d]; d++) l += i.url + "\r\n";
                    var u = y.a.create(document.createDocumentFragment(), {
                        append: [ y.a.create("p", {
                            text: e,
                            style: {
                                color: "#0D0D0D",
                                fontSize: "20px",
                                marginBottom: "11px",
                                marginTop: "5px"
                            }
                        }), y.a.create("p", {
                            append: Object(k.a)(r.a.i18n.getMessage("vkListOfLinksInstruction"))
                        }), a, s = y.a.create("textarea", {
                            text: l,
                            cols: 60,
                            rows: 10,
                            style: {
                                width: "100%"
                            }
                        }), r.a.isChrome || r.a.isFirefox ? y.a.create("button", {
                            text: r.a.i18n.getMessage("copy"),
                            style: {
                                height: "27px",
                                backgroundColor: "#ffffff",
                                border: "1px solid #9e9e9e",
                                marginTop: "6px",
                                paddingLeft: "10px",
                                paddingRight: "10px",
                                borderRadius: "5px",
                                fontSize: "14px",
                                cursor: "pointer",
                                cssFloat: "right"
                            },
                            on: [ "click", function(e) {
                                var t = this;
                                t.disabled = !0, r.a.isFirefox ? (s.select(), document.execCommand("copy")) : r.a.sendMessage({
                                    action: "addToClipboard",
                                    text: l
                                }), setTimeout((function() {
                                    t.disabled = !1;
                                }), 1e3);
                            } ],
                            append: y.a.create("style", {
                                text: Object(p.a)({
                                    "#savefrom_popup_box button:hover:not(:disabled)": {
                                        backgroundColor: "#597A9E !important",
                                        borderColor: "#597A9E !important",
                                        color: "#fff"
                                    },
                                    "#savefrom_popup_box button:active": {
                                        opacity: .9
                                    }
                                })
                            })
                        }) : void 0 ]
                    });
                    n.popupDiv(u);
                }
            }, oe = {
                mobileMenu: null,
                observer: null,
                styleEl: null,
                run: function() {
                    var e = this;
                    if (!O.a.isAvailable()) return;
                    if (e.observer) return e.observer.start();
                    e.observer = new O.a({
                        queries: [ {
                            css: "div.audio_item",
                            is: "added",
                            callback: t => {
                                for (let n, o = 0; n = t.added[o]; o++) n.dataset.sfSkip > 0 || (n.dataset.sfSkip = "1", 
                                e.insertAudioBtn(n));
                            }
                        }, {
                            css: "div.VideoPage",
                            is: "added",
                            callback: t => {
                                for (let n, o = 0; n = t.added[o]; o++) n.dataset.sfSkip > 0 || (n.dataset.sfSkip = "1", 
                                e.insertVideoBtn(n));
                            }
                        }, {
                            css: "." + b.a.onRemoveClassName,
                            is: "removed",
                            callback: e => {
                                for (let t, n = 0; t = e.removed[n]; n++) b.a.onRemoveListener(t);
                            }
                        } ]
                    }), e.insertStyle();
                },
                hideMenu: function() {
                    oe.mobileMenu && (oe.mobileMenu.hide(), oe.mobileMenu = null);
                },
                insertStyle: function() {
                    this.styleEl ? this.styleEl.parentNode || document.head.appendChild(this.styleEl) : (this.styleEl = y.a.create("style", {
                        class: "sf-style",
                        text: Object(p.a)([ {
                            selector: ".savefrom_vk_download.sf-audio",
                            style: {
                                display: "block",
                                float: "right",
                                borderRadius: "3px",
                                width: "22px",
                                height: "22px",
                                marginTop: "1px",
                                marginLeft: "3px",
                                marginRight: "3px",
                                background: "url(" + n.svg.getSrc("download", "#ffffff") + ") center no-repeat",
                                backgroundSize: "12px",
                                backgroundColor: "#5E80AA"
                            }
                        }, {
                            selector: ".audio_item .savefrom_vk_download.sf-audio",
                            style: {
                                position: "absolute",
                                right: "32px",
                                top: 0,
                                bottom: 0,
                                margin: "auto"
                            }
                        }, {
                            selector: ".audio_item.ai_current .savefrom_vk_download.sf-audio",
                            style: {
                                bottom: "auto",
                                top: "6px"
                            }
                        } ])
                    }), document.head.appendChild(this.styleEl));
                },
                getAudioUrlFromNode: async function(e) {
                    const t = await Z.getNewNodeTrackInfo(e);
                    if (!t.fullId || !t.actionHash || !t.urlHash) throw new Error("Track info not valid for fetch audio link");
                    const n = Z.requestReloadAudio(t.fullId, t.actionHash, t.urlHash), o = Object(C.a)([], "function(){return vk.id}");
                    return Promise.all([ n, o ]).then(e => {
                        let [t, n] = e, o = A.a(n, t.url);
                        return A.b(o) ? A.c(o) : o;
                    });
                },
                onAudioBtnClick: function(e) {
                    if (e.preventDefault(), e.stopPropagation(), e.target.href) return n.downloadOnClick(e);
                    const t = e.target.closest(".audio_item");
                    t && this.getAudioUrlFromNode(t).then(t => {
                        e.target.href = t, n.downloadOnClick(e);
                    }).catch(e => {
                        X.error("getAudioUrlFromNode error: " + e.message);
                    });
                },
                getAudioDlBtnNode: function(e) {
                    return y.a.create("a", {
                        class: [ "savefrom_vk_download", "sf-audio" ],
                        download: w.a.modify(e),
                        target: "_blank",
                        on: [ "click", this.onAudioBtnClick.bind(this) ],
                        title: r.a.i18n.getMessage("download")
                    });
                },
                insertAudioBtn: function(e) {
                    let t = null;
                    const n = e.querySelector(".ai_label");
                    if (n) {
                        const e = n.textContent.trim(), o = n.querySelector(".ai_title"), r = n.querySelector(".ai_artist"), a = o && o.textContent.trim(), i = r && r.textContent.trim();
                        t = a && i ? `${i.trim()} – ${a.trim()}` : e;
                    }
                    t = (t || "unknown") + ".mp3";
                    const o = e.querySelector(".ai_dur");
                    if (!o) return;
                    const r = o.parentNode, a = this.getAudioDlBtnNode(t), i = r.querySelector(".savefrom_vk_download");
                    if (i) i.parentNode.replaceChild(a, i); else {
                        const e = o.nextElementSibling;
                        if (!e) return;
                        r.insertBefore(a, e);
                    }
                },
                onVideoBtnClick: function(e, t) {
                    t.preventDefault(), t.stopPropagation(), oe.hideMenu();
                    var o = oe.mobileMenu = n.mobileLightBox.show(r.a.i18n.getMessage("download") + " ..."), a = r.a.i18n.getMessage("noLinksFound");
                    if (e.request) {
                        var i = function(t) {
                            if (t && "getPladformVideo" === e.request.action) a = ee.prepareLinks(ee.preparePladformLinks(t)); else {
                                var r = n.embedDownloader.reMapHosting(t.action);
                                r && t && t.links && (a = n.popupMenu.prepareLinks[r](t.links, t.title));
                            }
                            if (!a.length) {
                                const e = Array.from(document.body.querySelectorAll('.vv_inline_video source[type="video/mp4"]'));
                                a = e.map(e => {
                                    let t = document.querySelector(".VideoPageInfoRow__title"), n = e.src.match(/.(\d+)\.mp4/);
                                    return {
                                        title: t ? t.textContent : "video",
                                        href: e.src,
                                        forceDownload: !0,
                                        ext: "mp4",
                                        format: "MP4",
                                        quality: n ? n[1] : ""
                                    };
                                });
                            }
                            o.update(a);
                        };
                        try {
                            r.a.sendMessage(e.request, i);
                        } catch (t) {
                            i();
                        }
                    } else a = ee.prepareLinks(e), o.update(a);
                },
                appendVideoBtn: function(e, t) {
                    var o = t.querySelector(".VideoPageInfoRow__title");
                    const r = n.svg.getSvg("download", "#4986cc", "20px");
                    r.style.marginLeft = "17px", r.style.marginTop = "6px", r.style.float = "right", 
                    r.style.cursor = "pointer", r.addEventListener("click", this.onVideoBtnClick.bind(this, e)), 
                    o && o.appendChild(r), b.a.onRemoveEvent(r, oe.hideMenu);
                },
                insertVideoBtn: function(e) {
                    var t = this, n = e.querySelectorAll("iframe, video, a")[0], o = Object(l.a)(e, "VideoPage"), r = function() {
                        var e = /video(-?\d+)_(-?\d+)/.exec(location.href);
                        return e && {
                            request: {
                                hosting: "vk",
                                action: "getVKLinks",
                                extVideoId: "video" + e[1] + "_" + e[2]
                            }
                        };
                    };
                    n ? ee.getLinksFromPlayer(o, n, (function(e, n) {
                        e || (e = r()), e && t.appendVideoBtn(e, n);
                    })) : e.querySelector(".vv_not_support") && r() && t.appendVideoBtn(r(), o);
                }
            };
        }));
    }
});