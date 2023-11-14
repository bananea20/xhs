!window.savefromContentScriptWebpackJsonp && (window.savefromContentScriptWebpackJsonp = window.savefromContentScriptWebpackJsonp || []).push([ [ 0 ], [ function(e, t, n) {
    "use strict";
    var r = class {
        constructor() {
            this.listeners = [];
        }
        addListener(e) {
            -1 === this.listeners.indexOf(e) && this.listeners.push(e);
        }
        dispatch() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            this.listeners.forEach(e => {
                e(...t);
            });
        }
        hasListener(e) {
            return -1 !== this.listeners.indexOf(e);
        }
        hasListeners() {
            return this.listeners.length > 0;
        }
        removeListener(e) {
            const t = this.listeners.indexOf(e);
            -1 !== t && this.listeners.splice(t, 1);
        }
    }, o = n(7);
    const i = Object(o.a)("mono");
    var a = class {
        constructor() {
            this.onDestroy = new r, this._lastErrorFired = !1, this._lastError = null;
        }
        get lastError() {
            return this._lastErrorFired = !0, this._lastError;
        }
        set lastError(e) {
            this._lastErrorFired = !e, this._lastError = e;
        }
        clearLastError() {
            this._lastError && !this._lastErrorFired && i.error("Unhandled mono.lastError error:", this.lastError), 
            this._lastError = null;
        }
        unimplemented() {
            throw new Error("Unimplemented");
        }
        destroy() {
            this.onDestroy.dispatch();
        }
    };
    const s = n(58);
    var l = e => class extends e {
        callFn(e, t) {
            return this.waitPromise({
                action: "callFn",
                fn: e,
                args: t
            });
        }
        waitPromise(e) {
            return new Promise((t, n) => {
                this.sendMessage(e, e => {
                    if (e) {
                        if (e.err) {
                            const t = s(e.err);
                            return n(t);
                        }
                        return t(e.result);
                    }
                    {
                        const e = this.lastError || new Error("Unexpected response");
                        return n(e);
                    }
                });
            });
        }
    };
    var u = e => class extends e {};
    var c = e => class extends(u(e)){};
    class d extends(c(l(a))){
        initMessages() {
            this.sendMessage = this.transport.sendMessage.bind(this.transport), this.onMessage = {
                addListener: this.transport.addListener.bind(this.transport),
                hasListener: this.transport.hasListener.bind(this.transport),
                hasListeners: this.transport.hasListeners.bind(this.transport),
                removeListener: this.transport.removeListener.bind(this.transport)
            };
        }
    }
    var p = d;
    var f = class {
        constructor(e) {
            this.mono = e, this.onChanged = {
                addListener: e => {
                    chrome.storage.onChanged.addListener(e);
                },
                hasListener: e => chrome.storage.onChanged.hasListener(e),
                hasListeners: () => chrome.storage.onChanged.hasListeners(),
                removeListener: e => {
                    chrome.storage.onChanged.removeListener(e);
                }
            };
        }
        callback(e, t, n) {
            this.mono.lastError = chrome.runtime.lastError, (n || e) && e(t), this.mono.clearLastError();
        }
        get(e, t) {
            chrome.storage.local.get(e, e => this.callback(t, e, !0));
        }
        set(e, t) {
            chrome.storage.local.set(e, () => this.callback(t));
        }
        remove(e, t) {
            chrome.storage.local.remove(e, () => this.callback(t));
        }
        clear(e) {
            chrome.storage.local.clear(() => this.callback(e));
        }
    };
    var h = e => class extends e {
        constructor() {
            super(), this.isChrome = !0;
        }
        get isChromeMobile() {
            return /Mobile Safari\/(\d+)|Android (\d+)/.test(navigator.userAgent);
        }
        get isOperaNext() {
            return /OPR\/(\d+)/.test(navigator.userAgent);
        }
    };
    var g = e => class extends(h(e)){};
    class A extends(g(p)){
        constructor() {
            super(), this.initMessages(), this.initStorage(), this.initI18n();
        }
        initI18n() {
            this.i18n = {
                getMessage: chrome.i18n.getMessage.bind(chrome.i18n)
            };
        }
        initMessages() {
            this.transport = {
                sendMessage: (e, t) => {
                    t ? chrome.runtime.sendMessage(e, e => {
                        this.lastError = chrome.runtime.lastError, t(e), this.clearLastError();
                    }) : chrome.runtime.sendMessage(e);
                },
                addListener: e => {
                    chrome.runtime.onMessage.addListener(e);
                },
                hasListener: e => chrome.runtime.onMessage.hasListener(e),
                hasListeners: () => chrome.runtime.onMessage.hasListeners(),
                removeListener: e => {
                    chrome.runtime.onMessage.removeListener(e);
                }
            }, super.initMessages();
        }
        initStorage() {
            this.storage = new f(this);
        }
    }
    const m = new A;
    t.a = m;
}, function(e, t, n) {
    "use strict";
    var r = n(3);
    const o = {
        create: function(e, t) {
            let n, r;
            n = "object" != typeof e ? document.createElement(e) : e;
            for (let e in t) {
                const o = t[e];
                (r = i[e]) ? r(n, o) : n[e] = o;
            }
            return n;
        }
    }, i = {
        text: function(e, t) {
            e.textContent = t;
        },
        data: function(e, t) {
            for (let n in t) e.dataset[n] = t[n];
        },
        class: function(e, t) {
            if (Array.isArray(t)) for (let n = 0, r = t.length; n < r; n++) e.classList.add(t[n]); else e.setAttribute("class", t);
        },
        style: function(e, t) {
            if ("object" == typeof t) for (let n in t) {
                let r = n;
                "float" === r && (r = "cssFloat");
                const o = t[n];
                if (Array.isArray(o)) for (let t = 0, n = o.length; t < n; t++) e.style[r] = o[t]; else e.style[r] = o;
            } else e.setAttribute("style", t);
        },
        append: function(e, t) {
            Array.isArray(t) || (t = [ t ]);
            for (let n = 0, r = t.length; n < r; n++) {
                let r = t[n];
                (r || 0 === r) && ("object" != typeof r && (r = document.createTextNode(r)), e.appendChild(r));
            }
        },
        on: function(e, t) {
            "object" != typeof t[0] && (t = [ t ]);
            for (let n = 0, o = t.length; n < o; n++) {
                const o = t[n];
                Array.isArray(o) && r.a.on.apply(r.a, [ e ].concat(o));
            }
        },
        one: function(e, t) {
            "object" != typeof t[0] && (t = [ t ]);
            for (let n = 0, o = t.length; n < o; n++) {
                const o = t[n];
                Array.isArray(o) && r.a.one.apply(r.a, [ e ].concat(o));
            }
        },
        onCreate: function(e, t) {
            t.call(e, e);
        },
        attr: function(e, t) {
            let n, r;
            for (n in t) r = t[n], e.setAttribute(n, r);
        }
    };
    t.a = o;
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return ue;
    })), n.d(t, "b", (function() {
        return W;
    })), n.d(t, "c", (function() {
        return he;
    })), n.d(t, "d", (function() {
        return ce;
    }));
    var r, o, i, a, s = n(5), l = 0, u = [], c = [], d = s.h.__b, p = s.h.__r, f = s.h.diffed, h = s.h.__c, g = s.h.unmount;
    function A(e, t) {
        s.h.__h && s.h.__h(o, e, l || t), l = 0;
        var n = o.__H || (o.__H = {
            __: [],
            __h: []
        });
        return e >= n.__.length && n.__.push({
            __V: c
        }), n.__[e];
    }
    function m(e) {
        return l = 1, v(D, e);
    }
    function v(e, t, n) {
        var i = A(r++, 2);
        if (i.t = e, !i.__c && (i.__ = [ n ? n(t) : D(void 0, t), function(e) {
            var t = i.__N ? i.__N[0] : i.__[0], n = i.t(t, e);
            t !== n && (i.__N = [ n, i.__[1] ], i.__c.setState({}));
        } ], i.__c = o, !o.u)) {
            var a = function(e, t, n) {
                if (!i.__c.__H) return !0;
                var r = i.__c.__H.__.filter((function(e) {
                    return e.__c;
                }));
                if (r.every((function(e) {
                    return !e.__N;
                }))) return !s || s.call(this, e, t, n);
                var o = !1;
                return r.forEach((function(e) {
                    if (e.__N) {
                        var t = e.__[0];
                        e.__ = e.__N, e.__N = void 0, t !== e.__[0] && (o = !0);
                    }
                })), !(!o && i.__c.props === e) && (!s || s.call(this, e, t, n));
            };
            o.u = !0;
            var s = o.shouldComponentUpdate, l = o.componentWillUpdate;
            o.componentWillUpdate = function(e, t, n) {
                if (this.__e) {
                    var r = s;
                    s = void 0, a(e, t, n), s = r;
                }
                l && l.call(this, e, t, n);
            }, o.shouldComponentUpdate = a;
        }
        return i.__N || i.__;
    }
    function y(e, t) {
        var n = A(r++, 3);
        !s.h.__s && E(n.__H, t) && (n.__ = e, n.i = t, o.__H.__h.push(n));
    }
    function b(e, t) {
        var n = A(r++, 4);
        !s.h.__s && E(n.__H, t) && (n.__ = e, n.i = t, o.__h.push(n));
    }
    function w(e, t) {
        var n = A(r++, 7);
        return E(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
    }
    function C() {
        for (var e; e = u.shift(); ) if (e.__P && e.__H) try {
            e.__H.__h.forEach(I), e.__H.__h.forEach(_), e.__H.__h = [];
        } catch (t) {
            e.__H.__h = [], s.h.__e(t, e.__v);
        }
    }
    s.h.__b = function(e) {
        o = null, d && d(e);
    }, s.h.__r = function(e) {
        p && p(e), r = 0;
        var t = (o = e.__c).__H;
        t && (i === o ? (t.__h = [], o.__h = [], t.__.forEach((function(e) {
            e.__N && (e.__ = e.__N), e.__V = c, e.__N = e.i = void 0;
        }))) : (t.__h.forEach(I), t.__h.forEach(_), t.__h = [], r = 0)), i = o;
    }, s.h.diffed = function(e) {
        f && f(e);
        var t = e.__c;
        t && t.__H && (t.__H.__h.length && (1 !== u.push(t) && a === s.h.requestAnimationFrame || ((a = s.h.requestAnimationFrame) || k)(C)), 
        t.__H.__.forEach((function(e) {
            e.i && (e.__H = e.i), e.__V !== c && (e.__ = e.__V), e.i = void 0, e.__V = c;
        }))), i = o = null;
    }, s.h.__c = function(e, t) {
        t.some((function(e) {
            try {
                e.__h.forEach(I), e.__h = e.__h.filter((function(e) {
                    return !e.__ || _(e);
                }));
            } catch (n) {
                t.some((function(e) {
                    e.__h && (e.__h = []);
                })), t = [], s.h.__e(n, e.__v);
            }
        })), h && h(e, t);
    }, s.h.unmount = function(e) {
        g && g(e);
        var t, n = e.__c;
        n && n.__H && (n.__H.__.forEach((function(e) {
            try {
                I(e);
            } catch (e) {
                t = e;
            }
        })), n.__H = void 0, t && s.h.__e(t, n.__v));
    };
    var x = "function" == typeof requestAnimationFrame;
    function k(e) {
        var t, n = function() {
            clearTimeout(r), x && cancelAnimationFrame(t), setTimeout(e);
        }, r = setTimeout(n, 100);
        x && (t = requestAnimationFrame(n));
    }
    function I(e) {
        var t = o, n = e.__c;
        "function" == typeof n && (e.__c = void 0, n()), o = t;
    }
    function _(e) {
        var t = o;
        e.__c = e.__(), o = t;
    }
    function E(e, t) {
        return !e || e.length !== t.length || t.some((function(t, n) {
            return t !== e[n];
        }));
    }
    function D(e, t) {
        return "function" == typeof t ? t(e) : t;
    }
    function S(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
    }
    function M(e, t) {
        for (var n in e) if ("__source" !== n && !(n in t)) return !0;
        for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
        return !1;
    }
    function O(e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t;
    }
    function F(e) {
        this.props = e;
    }
    (F.prototype = new s.a).isPureReactComponent = !0, F.prototype.shouldComponentUpdate = function(e, t) {
        return M(this.props, e) || M(this.state, t);
    };
    var j = s.h.__b;
    s.h.__b = function(e) {
        e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), j && j(e);
    };
    var T = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
    var L = function(e, t) {
        return null == e ? null : Object(s.j)(Object(s.j)(e).map(t));
    }, N = {
        map: L,
        forEach: L,
        count: function(e) {
            return e ? Object(s.j)(e).length : 0;
        },
        only: function(e) {
            var t = Object(s.j)(e);
            if (1 !== t.length) throw "Children.only";
            return t[0];
        },
        toArray: s.j
    }, z = s.h.__e;
    s.h.__e = function(e, t, n, r) {
        if (e.then) for (var o, i = t; i = i.__; ) if ((o = i.__c) && o.__c) return null == t.__e && (t.__e = n.__e, 
        t.__k = n.__k), o.__c(e, t);
        z(e, t, n, r);
    };
    var B = s.h.unmount;
    function P() {
        this.__u = 0, this.t = null, this.__b = null;
    }
    function R(e) {
        var t = e.__.__c;
        return t && t.__a && t.__a(e);
    }
    function q() {
        this.u = null, this.o = null;
    }
    s.h.unmount = function(e) {
        var t = e.__c;
        t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), B && B(e);
    }, (P.prototype = new s.a).__c = function(e, t) {
        var n = t.__c, r = this;
        null == r.t && (r.t = []), r.t.push(n);
        var o = R(r.__v), i = !1, a = function() {
            i || (i = !0, n.__R = null, o ? o(s) : s());
        };
        n.__R = a;
        var s = function() {
            if (!--r.__u) {
                if (r.state.__a) {
                    var e = r.state.__a;
                    r.__v.__k[0] = function e(t, n, r) {
                        return t && r && (t.__v = null, t.__k = t.__k && t.__k.map((function(t) {
                            return e(t, n, r);
                        })), t.__c && t.__c.__P === n && (t.__e && r.insertBefore(t.__e, t.__d), t.__c.__e = !0, 
                        t.__c.__P = r)), t;
                    }(e, e.__c.__P, e.__c.__O);
                }
                var t;
                for (r.setState({
                    __a: r.__b = null
                }); t = r.t.pop(); ) t.forceUpdate();
            }
        }, l = !0 === t.__h;
        r.__u++ || l || r.setState({
            __a: r.__b = r.__v.__k[0]
        }), e.then(a, a);
    }, P.prototype.componentWillUnmount = function() {
        this.t = [];
    }, P.prototype.render = function(e, t) {
        if (this.__b) {
            if (this.__v.__k) {
                var n = document.createElement("div"), r = this.__v.__k[0].__c;
                this.__v.__k[0] = function e(t, n, r) {
                    return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(e) {
                        "function" == typeof e.__c && e.__c();
                    })), t.__c.__H = null), null != (t = S({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), 
                    t.__c = null), t.__k = t.__k && t.__k.map((function(t) {
                        return e(t, n, r);
                    }))), t;
                }(this.__b, n, r.__O = r.__P);
            }
            this.__b = null;
        }
        var o = t.__a && Object(s.e)(s.b, null, e.fallback);
        return o && (o.__h = null), [ Object(s.e)(s.b, null, t.__a ? null : e.children), o ];
    };
    var V = function(e, t, n) {
        if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size)) for (n = e.u; n; ) {
            for (;n.length > 3; ) n.pop()();
            if (n[1] < n[0]) break;
            e.u = n = n[2];
        }
    };
    function H(e) {
        return this.getChildContext = function() {
            return e.context;
        }, e.children;
    }
    function U(e) {
        var t = this, n = e.i;
        t.componentWillUnmount = function() {
            Object(s.i)(null, t.l), t.l = null, t.i = null;
        }, t.i && t.i !== n && t.componentWillUnmount(), t.l || (t.i = n, t.l = {
            nodeType: 1,
            parentNode: n,
            childNodes: [],
            appendChild: function(e) {
                this.childNodes.push(e), t.i.appendChild(e);
            },
            insertBefore: function(e, n) {
                this.childNodes.push(e), t.i.appendChild(e);
            },
            removeChild: function(e) {
                this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e);
            }
        }), Object(s.i)(Object(s.e)(H, {
            context: t.context
        }, e.__v), t.l);
    }
    function W(e, t) {
        var n = Object(s.e)(U, {
            __v: e,
            i: t
        });
        return n.containerInfo = t, n;
    }
    (q.prototype = new s.a).__a = function(e) {
        var t = this, n = R(t.__v), r = t.o.get(e);
        return r[0]++, function(o) {
            var i = function() {
                t.props.revealOrder ? (r.push(o), V(t, e, r)) : o();
            };
            n ? n(i) : i();
        };
    }, q.prototype.render = function(e) {
        this.u = null, this.o = new Map;
        var t = Object(s.j)(e.children);
        e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
        for (var n = t.length; n--; ) this.o.set(t[n], this.u = [ 1, 0, this.u ]);
        return e.children;
    }, q.prototype.componentDidUpdate = q.prototype.componentDidMount = function() {
        var e = this;
        this.o.forEach((function(t, n) {
            V(e, n, t);
        }));
    };
    var Q = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, G = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Y = /[A-Z0-9]/g, J = "undefined" != typeof document, X = function(e) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(e);
    };
    s.a.prototype.isReactComponent = {}, [ "componentWillMount", "componentWillReceiveProps", "componentWillUpdate" ].forEach((function(e) {
        Object.defineProperty(s.a.prototype, e, {
            configurable: !0,
            get: function() {
                return this["UNSAFE_" + e];
            },
            set: function(t) {
                Object.defineProperty(this, e, {
                    configurable: !0,
                    writable: !0,
                    value: t
                });
            }
        });
    }));
    var K = s.h.event;
    function $() {}
    function ee() {
        return this.cancelBubble;
    }
    function te() {
        return this.defaultPrevented;
    }
    s.h.event = function(e) {
        return K && (e = K(e)), e.persist = $, e.isPropagationStopped = ee, e.isDefaultPrevented = te, 
        e.nativeEvent = e;
    };
    var ne, re = {
        enumerable: !1,
        configurable: !0,
        get: function() {
            return this.class;
        }
    }, oe = s.h.vnode;
    s.h.vnode = function(e) {
        "string" == typeof e.type && function(e) {
            var t = e.props, n = e.type, r = {};
            for (var o in t) {
                var i = t[o];
                if (!("value" === o && "defaultValue" in t && null == i || J && "children" === o && "noscript" === n || "class" === o || "className" === o)) {
                    var a = o.toLowerCase();
                    "defaultValue" === o && "value" in t && null == t.value ? o = "value" : "download" === o && !0 === i ? i = "" : "ondoubleclick" === a ? o = "ondblclick" : "onchange" !== a || "input" !== n && "textarea" !== n || X(t.type) ? "onfocus" === a ? o = "onfocusin" : "onblur" === a ? o = "onfocusout" : Z.test(o) ? o = a : -1 === n.indexOf("-") && G.test(o) ? o = o.replace(Y, "-$&").toLowerCase() : null === i && (i = void 0) : a = o = "oninput", 
                    "oninput" === a && r[o = a] && (o = "oninputCapture"), r[o] = i;
                }
            }
            "select" == n && r.multiple && Array.isArray(r.value) && (r.value = Object(s.j)(t.children).forEach((function(e) {
                e.props.selected = -1 != r.value.indexOf(e.props.value);
            }))), "select" == n && null != r.defaultValue && (r.value = Object(s.j)(t.children).forEach((function(e) {
                e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value;
            }))), t.class && !t.className ? (r.class = t.class, Object.defineProperty(r, "className", re)) : (t.className && !t.class || t.class && t.className) && (r.class = r.className = t.className), 
            e.props = r;
        }(e), e.$$typeof = Q, oe && oe(e);
    };
    var ie = s.h.__r;
    s.h.__r = function(e) {
        ie && ie(e), ne = e.__c;
    };
    var ae = s.h.diffed;
    s.h.diffed = function(e) {
        ae && ae(e);
        var t = e.props, n = e.__e;
        null != n && "textarea" === e.type && "value" in t && t.value !== n.value && (n.value = null == t.value ? "" : t.value), 
        ne = null;
    };
    var se = {
        ReactCurrentDispatcher: {
            current: {
                readContext: function(e) {
                    return ne.__n[e.__c].props.value;
                }
            }
        }
    };
    function le(e) {
        return !!e && e.$$typeof === Q;
    }
    function ue(e) {
        return le(e) ? s.c.apply(null, arguments) : e;
    }
    function ce(e) {
        return !!e.__k && (Object(s.i)(null, e), !0);
    }
    var de = s.b;
    function pe(e) {
        e();
    }
    var fe = le;
    var he = {
        useState: m,
        useId: function() {
            var e = A(r++, 11);
            if (!e.__) {
                for (var t = o.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
                var n = t.__m || (t.__m = [ 0, 0 ]);
                e.__ = "P" + n[0] + "-" + n[1]++;
            }
            return e.__;
        },
        useReducer: v,
        useEffect: y,
        useLayoutEffect: b,
        useInsertionEffect: b,
        useTransition: function() {
            return [ !1, pe ];
        },
        useDeferredValue: function(e) {
            return e;
        },
        useSyncExternalStore: function(e, t) {
            var n = t(), r = m({
                h: {
                    __: n,
                    v: t
                }
            }), o = r[0].h, i = r[1];
            return b((function() {
                o.__ = n, o.v = t, O(o.__, t()) || i({
                    h: o
                });
            }), [ e, n, t ]), y((function() {
                return O(o.__, o.v()) || i({
                    h: o
                }), e((function() {
                    O(o.__, o.v()) || i({
                        h: o
                    });
                }));
            }), [ e ]), n;
        },
        startTransition: pe,
        useRef: function(e) {
            return l = 5, w((function() {
                return {
                    current: e
                };
            }), []);
        },
        useImperativeHandle: function(e, t, n) {
            l = 6, b((function() {
                return "function" == typeof e ? (e(t()), function() {
                    return e(null);
                }) : e ? (e.current = t(), function() {
                    return e.current = null;
                }) : void 0;
            }), null == n ? n : n.concat(e));
        },
        useMemo: w,
        useCallback: function(e, t) {
            return l = 8, w((function() {
                return e;
            }), t);
        },
        useContext: function(e) {
            var t = o.context[e.__c], n = A(r++, 9);
            return n.c = e, t ? (null == n.__ && (n.__ = !0, t.sub(o)), t.props.value) : e.__;
        },
        useDebugValue: function(e, t) {
            s.h.useDebugValue && s.h.useDebugValue(t ? t(e) : e);
        },
        version: "17.0.2",
        Children: N,
        render: function(e, t, n) {
            return null == t.__k && (t.textContent = ""), Object(s.i)(e, t), "function" == typeof n && n(), 
            e ? e.__c : null;
        },
        hydrate: function(e, t, n) {
            return Object(s.g)(e, t), "function" == typeof n && n(), e ? e.__c : null;
        },
        unmountComponentAtNode: ce,
        createPortal: W,
        createElement: s.e,
        createContext: s.d,
        createFactory: function(e) {
            return s.e.bind(null, e);
        },
        cloneElement: ue,
        createRef: s.f,
        Fragment: s.b,
        isValidElement: le,
        isElement: fe,
        isFragment: function(e) {
            return le(e) && e.type === s.b;
        },
        findDOMNode: function(e) {
            return e && (e.base || 1 === e.nodeType && e) || null;
        },
        Component: s.a,
        PureComponent: F,
        memo: function(e, t) {
            function n(e) {
                var n = this.props.ref, r = n == e.ref;
                return !r && n && (n.call ? n(null) : n.current = null), t ? !t(this.props, e) || !r : M(this.props, e);
            }
            function r(t) {
                return this.shouldComponentUpdate = n, Object(s.e)(e, t);
            }
            return r.displayName = "Memo(" + (e.displayName || e.name) + ")", r.prototype.isReactComponent = !0, 
            r.__f = !0, r;
        },
        forwardRef: function(e) {
            function t(t) {
                var n = S({}, t);
                return delete n.ref, e(n, t.ref || null);
            }
            return t.$$typeof = T, t.render = t, t.prototype.isReactComponent = t.__f = !0, 
            t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")", t;
        },
        flushSync: function(e, t) {
            return e(t);
        },
        unstable_batchedUpdates: function(e, t) {
            return e(t);
        },
        StrictMode: de,
        Suspense: P,
        SuspenseList: q,
        lazy: function(e) {
            var t, n, r;
            function o(o) {
                if (t || (t = e()).then((function(e) {
                    n = e.default || e;
                }), (function(e) {
                    r = e;
                })), r) throw r;
                if (!n) throw t;
                return Object(s.e)(n, o);
            }
            return o.displayName = "Lazy", o.__f = !0, o;
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: se
    };
}, function(e, t, n) {
    "use strict";
    const r = {
        on: function(e, t, n, r) {
            e.addEventListener(t, n, r);
        },
        off: function(e, t, n, r) {
            e.removeEventListener(t, n, r);
        },
        one: function(e, t, n, o) {
            const i = [ "oneFn", t, !!o ].join("_");
            let a = n[i];
            a || (n[i] = a = function(e) {
                r.off(this, t, a, o), n.apply(this, arguments);
            }), r.on(e, t, a, o), e = null;
        }
    }, o = "sf-removed-" + Math.floor(1e6 * Math.random()), i = "sf-notify-on-remove-" + Math.floor(1e6 * Math.random());
    r.onRemoveEventName = o, r.onRemoveClassName = i, r.onRemoveListener = function(e) {
        r.trigger(e, o, {
            cancelable: !0,
            bubbles: !1
        });
    }, r.onRemoveEvent = (e, t) => {
        e.classList.add(i), e.addEventListener(o, t);
    }, r.offRemoveEvent = function(e, t) {
        e.removeEventListener(r.onRemoveEventName, t);
    }, r.trigger = function(e, t, n) {
        void 0 === n && (n = {}), void 0 === n.bubbles && (n.bubbles = !1), void 0 === n.cancelable && (n.cancelable = !1);
        let r = null;
        r = "function" == typeof MouseEvent && -1 !== [ "click" ].indexOf(t) ? new MouseEvent(t, n) : new CustomEvent(t, n), 
        e.dispatchEvent(r);
    }, t.a = r;
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return r;
    })), n.d(t, "l", (function() {
        return o;
    })), n.d(t, "b", (function() {
        return i;
    })), n.d(t, "f", (function() {
        return a;
    })), n.d(t, "i", (function() {
        return s;
    })), n.d(t, "h", (function() {
        return l;
    })), n.d(t, "a", (function() {
        return u;
    })), n.d(t, "g", (function() {
        return c;
    })), n.d(t, "j", (function() {
        return d;
    })), n.d(t, "d", (function() {
        return p;
    })), n.d(t, "k", (function() {
        return f;
    })), n.d(t, "e", (function() {
        return h;
    }));
    const r = {
        igFeed: "ig-feed",
        igPost: "ig-post",
        igCarouselFromProfile: "ig-post-carousel_from_profile",
        igPostCarousel: "ig-post-carousel",
        igPostVideoFromProfile: "ig-post-video_from_profile",
        igPostVideo: "ig-post-video",
        igPostPhotoFromProfile: "ig-post-photo_from_profile",
        igPostPhoto: "ig-post-photo",
        igProfile: "ig-profile",
        igReel: "ig-reel",
        igReelFromProfile: "ig-reel-from_profile",
        igHighlights: "ig-highlights",
        igStory: "ig-story",
        igStoryVideo: "ig-story-video",
        igStoryPhoto: "ig-story-photo"
    }, o = {
        ytVideo: "yt-video",
        ytHomepage: "yt-homepage",
        ytShort: "yt-short",
        ytFeedHistory: "yt-feed_history",
        ytFeedLibrary: "yt-feed_library",
        ytFeedSubscriptions: "yt-feed_subscriptions",
        ytFeedTrending: "yt-feed_trending",
        ytWatchLater: "yt-watch_later",
        ytLikedVideos: "yt-liked_videos",
        ytChannel: "yt-channel",
        ytGaming: "yt-gaming"
    }, i = {
        fbFeed: "fb-feed",
        fbWatch: "fb-watch",
        fbReel: "fb-reel",
        fbVideo: "fb-video",
        fbProfileVideo: "fb-profile_video",
        fbPhoto: "fb-photo",
        fbProfilePhoto: "fb-profile_photo",
        fbProfileFeed: "fb-profile_feed",
        fbStory: "fb-story"
    }, a = {
        soAudio: "so-audio"
    }, s = {
        viBlogVideo: "vi-blog_video",
        viVideo: "vi-video",
        viProfileFeed: "vi-profile_feed"
    }, l = {
        twFeed: "tw-feed",
        twPost: "tw-post",
        twPhoto: "tw-photo"
    }, u = {
        daVideo: "da-video"
    }, c = {
        ttFeed: "tt-feed",
        ttVideo: "tt-video",
        ttFollowing: "tt-following",
        ttExplore: "tt-explore",
        ttProfile: "tt-profile"
    }, d = {
        vkClips: "vk-clips",
        vkClip: "vk-clip",
        vkVideos: "vk-videos",
        vkVideo: "vk-video",
        vkFeed: "vk-feed",
        vkPhoto: "vk-photo",
        vkStory: "vk-story",
        vkAudios: "vk-audios",
        vkAudio: "vk-audio",
        vkAlbums: "vk-albums",
        vkAlbum: "vk-album"
    }, p = {
        maCommunity: "ma-community",
        maCommunityMultipost: "ma-community_multipost",
        maCommunityPhoto: "ma-community_photo",
        maCommunityShare: "ma-community_share",
        maMusic: "ma-music",
        maVideo: "ma-video",
        maPlaylist: "ma-playlist"
    }, f = {
        yaArtist: "ya-artist",
        yaAlbum: "ya-album",
        yaTrack: "ya-track",
        yaPlaylist: "ya-playlist"
    }, h = {
        okVideo: "ok-video",
        okMusic: "ok-music",
        okProfile: "ok-profile",
        okProfileMusic: "ok-profile_music",
        okHobby: "ok-hobby",
        okDiscovery: "ok-discovery"
    };
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return w;
    })), n.d(t, "b", (function() {
        return b;
    })), n.d(t, "c", (function() {
        return H;
    })), n.d(t, "d", (function() {
        return U;
    })), n.d(t, "e", (function() {
        return m;
    })), n.d(t, "f", (function() {
        return y;
    })), n.d(t, "g", (function() {
        return V;
    })), n.d(t, "h", (function() {
        return o;
    })), n.d(t, "i", (function() {
        return q;
    })), n.d(t, "j", (function() {
        return D;
    }));
    var r, o, i, a, s, l, u, c, d = {}, p = [], f = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, h = Array.isArray;
    function g(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
    }
    function A(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
    }
    function m(e, t, n) {
        var o, i, a, s = {};
        for (a in t) "key" == a ? o = t[a] : "ref" == a ? i = t[a] : s[a] = t[a];
        if (arguments.length > 2 && (s.children = arguments.length > 3 ? r.call(arguments, 2) : n), 
        "function" == typeof e && null != e.defaultProps) for (a in e.defaultProps) void 0 === s[a] && (s[a] = e.defaultProps[a]);
        return v(e, s, o, i, null);
    }
    function v(e, t, n, r, a) {
        var s = {
            type: e,
            props: t,
            key: n,
            ref: r,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == a ? ++i : a
        };
        return null == a && null != o.vnode && o.vnode(s), s;
    }
    function y() {
        return {
            current: null
        };
    }
    function b(e) {
        return e.children;
    }
    function w(e, t) {
        this.props = e, this.context = t;
    }
    function C(e, t) {
        if (null == t) return e.__ ? C(e.__, e.__.__k.indexOf(e) + 1) : null;
        for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__d || n.__e;
        return "function" == typeof e.type ? C(e) : null;
    }
    function x(e) {
        var t, n;
        if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e;
                break;
            }
            return x(e);
        }
    }
    function k(e) {
        (!e.__d && (e.__d = !0) && a.push(e) && !I.__r++ || s !== o.debounceRendering) && ((s = o.debounceRendering) || l)(I);
    }
    function I() {
        var e, t, n, r, o, i, s, l, c;
        for (a.sort(u); e = a.shift(); ) e.__d && (t = a.length, r = void 0, o = void 0, 
        i = void 0, l = (s = (n = e).__v).__e, (c = n.__P) && (r = [], o = [], (i = g({}, s)).__v = s.__v + 1, 
        L(c, s, i, n.__n, void 0 !== c.ownerSVGElement, null != s.__h ? [ l ] : null, r, null == l ? C(s) : l, s.__h, o), 
        N(r, s, o), s.__e != l && x(s)), a.length > t && a.sort(u));
        I.__r = 0;
    }
    function _(e, t, n, r, o, i, a, s, l, u, c) {
        var f, g, A, m, y, w, x, k, I, _ = 0, D = r && r.__k || p, O = D.length, F = O, j = t.length;
        for (n.__k = [], f = 0; f < j; f++) null != (m = n.__k[f] = null == (m = t[f]) || "boolean" == typeof m || "function" == typeof m ? null : "string" == typeof m || "number" == typeof m || "bigint" == typeof m ? v(null, m, null, null, m) : h(m) ? v(b, {
            children: m
        }, null, null, null) : m.__b > 0 ? v(m.type, m.props, m.key, m.ref ? m.ref : null, m.__v) : m) ? (m.__ = n, 
        m.__b = n.__b + 1, -1 === (k = M(m, D, x = f + _, F)) ? A = d : (A = D[k] || d, 
        D[k] = void 0, F--), L(e, m, A, o, i, a, s, l, u, c), y = m.__e, (g = m.ref) && A.ref != g && (A.ref && B(A.ref, null, m), 
        c.push(g, m.__c || y, m)), null != y && (null == w && (w = y), (I = A === d || null === A.__v) ? -1 == k && _-- : k !== x && (k === x + 1 ? _++ : k > x ? F > j - x ? _ += k - x : _-- : _ = k < x && k == x - 1 ? k - x : 0), 
        x = f + _, "function" != typeof m.type || k === x && A.__k !== m.__k ? "function" == typeof m.type || k === x && !I ? void 0 !== m.__d ? (l = m.__d, 
        m.__d = void 0) : l = y.nextSibling : l = S(e, y, l) : l = E(m, l, e), "function" == typeof n.type && (n.__d = l))) : (A = D[f]) && null == A.key && A.__e && (A.__e == l && (A.__ = r, 
        l = C(A)), P(A, A, !1), D[f] = null);
        for (n.__e = w, f = O; f--; ) null != D[f] && ("function" == typeof n.type && null != D[f].__e && D[f].__e == n.__d && (n.__d = D[f].__e.nextSibling), 
        P(D[f], D[f]));
    }
    function E(e, t, n) {
        for (var r, o = e.__k, i = 0; o && i < o.length; i++) (r = o[i]) && (r.__ = e, t = "function" == typeof r.type ? E(r, t, n) : S(n, r.__e, t));
        return t;
    }
    function D(e, t) {
        return t = t || [], null == e || "boolean" == typeof e || (h(e) ? e.some((function(e) {
            D(e, t);
        })) : t.push(e)), t;
    }
    function S(e, t, n) {
        return null == n || n.parentNode !== e ? e.insertBefore(t, null) : t == n && null != t.parentNode || e.insertBefore(t, n), 
        t.nextSibling;
    }
    function M(e, t, n, r) {
        var o = e.key, i = e.type, a = n - 1, s = n + 1, l = t[n];
        if (null === l || l && o == l.key && i === l.type) return n;
        if (r > (null != l ? 1 : 0)) for (;a >= 0 || s < t.length; ) {
            if (a >= 0) {
                if ((l = t[a]) && o == l.key && i === l.type) return a;
                a--;
            }
            if (s < t.length) {
                if ((l = t[s]) && o == l.key && i === l.type) return s;
                s++;
            }
        }
        return -1;
    }
    function O(e, t, n) {
        "-" === t[0] ? e.setProperty(t, null == n ? "" : n) : e[t] = null == n ? "" : "number" != typeof n || f.test(t) ? n : n + "px";
    }
    function F(e, t, n, r, o) {
        var i;
        e: if ("style" === t) if ("string" == typeof n) e.style.cssText = n; else {
            if ("string" == typeof r && (e.style.cssText = r = ""), r) for (t in r) n && t in n || O(e.style, t, "");
            if (n) for (t in n) r && n[t] === r[t] || O(e.style, t, n[t]);
        } else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), 
        t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), 
        e.l[t + i] = n, n ? r ? n.u = r.u : (n.u = Date.now(), e.addEventListener(t, i ? T : j, i)) : e.removeEventListener(t, i ? T : j, i); else if ("dangerouslySetInnerHTML" !== t) {
            if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s"); else if ("width" !== t && "height" !== t && "href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && "rowSpan" !== t && "colSpan" !== t && "role" !== t && t in e) try {
                e[t] = null == n ? "" : n;
                break e;
            } catch (e) {}
            "function" == typeof n || (null == n || !1 === n && "-" !== t[4] ? e.removeAttribute(t) : e.setAttribute(t, n));
        }
    }
    function j(e) {
        var t = this.l[e.type + !1];
        if (e.t) {
            if (e.t <= t.u) return;
        } else e.t = Date.now();
        return t(o.event ? o.event(e) : e);
    }
    function T(e) {
        return this.l[e.type + !0](o.event ? o.event(e) : e);
    }
    function L(e, t, n, r, i, a, s, l, u, c) {
        var d, p, f, A, m, v, y, C, x, k, I, E, D, S, M, O = t.type;
        if (void 0 !== t.constructor) return null;
        null != n.__h && (u = n.__h, l = t.__e = n.__e, t.__h = null, a = [ l ]), (d = o.__b) && d(t);
        e: if ("function" == typeof O) try {
            if (C = t.props, x = (d = O.contextType) && r[d.__c], k = d ? x ? x.props.value : d.__ : r, 
            n.__c ? y = (p = t.__c = n.__c).__ = p.__E : ("prototype" in O && O.prototype.render ? t.__c = p = new O(C, k) : (t.__c = p = new w(C, k), 
            p.constructor = O, p.render = R), x && x.sub(p), p.props = C, p.state || (p.state = {}), 
            p.context = k, p.__n = r, f = p.__d = !0, p.__h = [], p._sb = []), null == p.__s && (p.__s = p.state), 
            null != O.getDerivedStateFromProps && (p.__s == p.state && (p.__s = g({}, p.__s)), 
            g(p.__s, O.getDerivedStateFromProps(C, p.__s))), A = p.props, m = p.state, p.__v = t, 
            f) null == O.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), 
            null != p.componentDidMount && p.__h.push(p.componentDidMount); else {
                if (null == O.getDerivedStateFromProps && C !== A && null != p.componentWillReceiveProps && p.componentWillReceiveProps(C, k), 
                !p.__e && (null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(C, p.__s, k) || t.__v === n.__v)) {
                    for (t.__v !== n.__v && (p.props = C, p.state = p.__s, p.__d = !1), t.__e = n.__e, 
                    t.__k = n.__k, t.__k.forEach((function(e) {
                        e && (e.__ = t);
                    })), I = 0; I < p._sb.length; I++) p.__h.push(p._sb[I]);
                    p._sb = [], p.__h.length && s.push(p);
                    break e;
                }
                null != p.componentWillUpdate && p.componentWillUpdate(C, p.__s, k), null != p.componentDidUpdate && p.__h.push((function() {
                    p.componentDidUpdate(A, m, v);
                }));
            }
            if (p.context = k, p.props = C, p.__P = e, p.__e = !1, E = o.__r, D = 0, "prototype" in O && O.prototype.render) {
                for (p.state = p.__s, p.__d = !1, E && E(t), d = p.render(p.props, p.state, p.context), 
                S = 0; S < p._sb.length; S++) p.__h.push(p._sb[S]);
                p._sb = [];
            } else do {
                p.__d = !1, E && E(t), d = p.render(p.props, p.state, p.context), p.state = p.__s;
            } while (p.__d && ++D < 25);
            p.state = p.__s, null != p.getChildContext && (r = g(g({}, r), p.getChildContext())), 
            f || null == p.getSnapshotBeforeUpdate || (v = p.getSnapshotBeforeUpdate(A, m)), 
            _(e, h(M = null != d && d.type === b && null == d.key ? d.props.children : d) ? M : [ M ], t, n, r, i, a, s, l, u, c), 
            p.base = t.__e, t.__h = null, p.__h.length && s.push(p), y && (p.__E = p.__ = null);
        } catch (e) {
            t.__v = null, (u || null != a) && (t.__e = l, t.__h = !!u, a[a.indexOf(l)] = null), 
            o.__e(e, t, n);
        } else null == a && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = z(n.__e, t, n, r, i, a, s, u, c);
        (d = o.diffed) && d(t);
    }
    function N(e, t, n) {
        for (var r = 0; r < n.length; r++) B(n[r], n[++r], n[++r]);
        o.__c && o.__c(t, e), e.some((function(t) {
            try {
                e = t.__h, t.__h = [], e.some((function(e) {
                    e.call(t);
                }));
            } catch (e) {
                o.__e(e, t.__v);
            }
        }));
    }
    function z(e, t, n, o, i, a, s, l, u) {
        var c, p, f, g = n.props, m = t.props, v = t.type, y = 0;
        if ("svg" === v && (i = !0), null != a) for (;y < a.length; y++) if ((c = a[y]) && "setAttribute" in c == !!v && (v ? c.localName === v : 3 === c.nodeType)) {
            e = c, a[y] = null;
            break;
        }
        if (null == e) {
            if (null === v) return document.createTextNode(m);
            e = i ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, m.is && m), 
            a = null, l = !1;
        }
        if (null === v) g === m || l && e.data === m || (e.data = m); else {
            if (a = a && r.call(e.childNodes), p = (g = n.props || d).dangerouslySetInnerHTML, 
            f = m.dangerouslySetInnerHTML, !l) {
                if (null != a) for (g = {}, y = 0; y < e.attributes.length; y++) g[e.attributes[y].name] = e.attributes[y].value;
                (f || p) && (f && (p && f.__html == p.__html || f.__html === e.innerHTML) || (e.innerHTML = f && f.__html || ""));
            }
            if (function(e, t, n, r, o) {
                var i;
                for (i in n) "children" === i || "key" === i || i in t || F(e, i, null, n[i], r);
                for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || F(e, i, t[i], n[i], r);
            }(e, m, g, i, l), f) t.__k = []; else if (_(e, h(y = t.props.children) ? y : [ y ], t, n, o, i && "foreignObject" !== v, a, s, a ? a[0] : n.__k && C(n, 0), l, u), 
            null != a) for (y = a.length; y--; ) null != a[y] && A(a[y]);
            l || ("value" in m && void 0 !== (y = m.value) && (y !== e.value || "progress" === v && !y || "option" === v && y !== g.value) && F(e, "value", y, g.value, !1), 
            "checked" in m && void 0 !== (y = m.checked) && y !== e.checked && F(e, "checked", y, g.checked, !1));
        }
        return e;
    }
    function B(e, t, n) {
        try {
            "function" == typeof e ? e(t) : e.current = t;
        } catch (e) {
            o.__e(e, n);
        }
    }
    function P(e, t, n) {
        var r, i;
        if (o.unmount && o.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || B(r, null, t)), 
        null != (r = e.__c)) {
            if (r.componentWillUnmount) try {
                r.componentWillUnmount();
            } catch (e) {
                o.__e(e, t);
            }
            r.base = r.__P = null, e.__c = void 0;
        }
        if (r = e.__k) for (i = 0; i < r.length; i++) r[i] && P(r[i], t, n || "function" != typeof e.type);
        n || null == e.__e || A(e.__e), e.__ = e.__e = e.__d = void 0;
    }
    function R(e, t, n) {
        return this.constructor(e, n);
    }
    function q(e, t, n) {
        var i, a, s, l;
        o.__ && o.__(e, t), a = (i = "function" == typeof n) ? null : n && n.__k || t.__k, 
        s = [], l = [], L(t, e = (!i && n || t).__k = m(b, null, [ e ]), a || d, d, void 0 !== t.ownerSVGElement, !i && n ? [ n ] : a ? null : t.firstChild ? r.call(t.childNodes) : null, s, !i && n ? n : a ? a.__e : t.firstChild, i, l), 
        N(s, e, l);
    }
    function V(e, t) {
        q(e, t, V);
    }
    function H(e, t, n) {
        var o, i, a, s, l = g({}, e.props);
        for (a in e.type && e.type.defaultProps && (s = e.type.defaultProps), t) "key" == a ? o = t[a] : "ref" == a ? i = t[a] : l[a] = void 0 === t[a] && void 0 !== s ? s[a] : t[a];
        return arguments.length > 2 && (l.children = arguments.length > 3 ? r.call(arguments, 2) : n), 
        v(e.type, l, o || e.key, i || e.ref, null);
    }
    function U(e, t) {
        var n = {
            __c: t = "__cC" + c++,
            __: e,
            Consumer: function(e, t) {
                return e.children(t);
            },
            Provider: function(e) {
                var n, r;
                return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() {
                    return r;
                }, this.shouldComponentUpdate = function(e) {
                    this.props.value !== e.value && n.some((function(e) {
                        e.__e = !0, k(e);
                    }));
                }, this.sub = function(e) {
                    n.push(e);
                    var t = e.componentWillUnmount;
                    e.componentWillUnmount = function() {
                        n.splice(n.indexOf(e), 1), t && t.call(e);
                    };
                }), e.children;
            }
        };
        return n.Provider.__ = n.Consumer.contextType = n;
    }
    r = p.slice, o = {
        __e: function(e, t, n, r) {
            for (var o, i, a; t = t.__; ) if ((o = t.__c) && !o.__) try {
                if ((i = o.constructor) && null != i.getDerivedStateFromError && (o.setState(i.getDerivedStateFromError(e)), 
                a = o.__d), null != o.componentDidCatch && (o.componentDidCatch(e, r || {}), a = o.__d), 
                a) return o.__E = o;
            } catch (t) {
                e = t;
            }
            throw e;
        }
    }, i = 0, w.prototype.setState = function(e, t) {
        var n;
        n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = g({}, this.state), 
        "function" == typeof e && (e = e(g({}, n), this.props)), e && g(n, e), null != e && this.__v && (t && this._sb.push(t), 
        k(this));
    }, w.prototype.forceUpdate = function(e) {
        this.__v && (this.__e = !0, e && this.__h.push(e), k(this));
    }, w.prototype.render = b, a = [], l = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, 
    u = function(e, t) {
        return e.__v.__b - t.__v.__b;
    }, I.__r = 0, c = 0;
}, function(e, t, n) {
    "use strict";
    var r = n(59);
    const o = {
        maxLength: 80,
        rtrim: /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        illegalRe: /[\/?<>\\:*|"~\u202B]/g,
        controlRe: /[\x00-\x1f\x80-\x9f]/g,
        zeroWidthJoinerRe: /\u200D/g,
        reservedRe: /^\.+/,
        trim: function(e) {
            return e.replace(this.rtrim, "");
        },
        partsRe: /^(.+)\.([a-z0-9]{1,4})$/i,
        getParts: function(e) {
            return e.match(this.partsRe);
        },
        specialChars: "nbsp,iexcl,cent,pound,curren,yen,brvbar,sect,uml,copy,ordf,laquo,not,shy,reg,macr,deg,plusmn,sup2,sup3,acute,micro,para,middot,cedil,sup1,ordm,raquo,frac14,frac12,frac34,iquest,Agrave,Aacute,Acirc,Atilde,Auml,Aring,AElig,Ccedil,Egrave,Eacute,Ecirc,Euml,Igrave,Iacute,Icirc,Iuml,ETH,Ntilde,Ograve,Oacute,Ocirc,Otilde,Ouml,times,Oslash,Ugrave,Uacute,Ucirc,Uuml,Yacute,THORN,szlig,agrave,aacute,acirc,atilde,auml,aring,aelig,ccedil,egrave,eacute,ecirc,euml,igrave,iacute,icirc,iuml,eth,ntilde,ograve,oacute,ocirc,otilde,ouml,divide,oslash,ugrave,uacute,ucirc,uuml,yacute,thorn,yuml".split(","),
        specialCharsList: [ [ "amp", "quot", "lt", "gt" ], [ 38, 34, 60, 62 ] ],
        specialCharsRe: /&([^;]{2,6});/g,
        decodeSpecialChars: function(e) {
            const t = this;
            return e.replace(this.specialCharsRe, (function(e, n) {
                let r = null;
                if ("#" === n[0]) return r = parseInt(n.substr(1)), isNaN(r) ? "" : String.fromCharCode(r);
                let o = t.specialCharsList[0].indexOf(n);
                return -1 !== o ? (r = t.specialCharsList[1][o], String.fromCharCode(r)) : (o = t.specialChars.indexOf(n), 
                -1 !== o ? (r = o + 160, String.fromCharCode(r)) : "");
            }));
        },
        decodeHexChars: function(e) {
            return e.replace(/(\\x[a-zA-Z0-9]{2})/g, (function(e, t) {
                let n = t;
                try {
                    n = String.fromCharCode(parseInt("0x" + n.substr(2), 16));
                } catch (e) {}
                return n;
            }));
        },
        rnRe: /\r?\n/g,
        re1: /[*?"]/g,
        re2: /</g,
        re3: />/g,
        spaceRe: /[\s\t\uFEFF\xA0]+/g,
        dblRe: /(\.|!|\?|_|,|-|:|\+){2,}/g,
        re4: /[.,:;\/\-_+=']$/g,
        modify: function(e) {
            if (!e) return "";
            e = Object(r.a)(e);
            try {
                e = decodeURIComponent(e);
            } catch (t) {
                e = unescape(e);
            }
            if (e = (e = this.decodeSpecialChars(e)).replace(this.rnRe, " "), (e = (e = this.trim(e)).replace(this.zeroWidthJoinerRe, "").replace(this.re1, "").replace(this.re2, "(").replace(this.re2, "(").replace(this.re3, ")").replace(this.spaceRe, " ").replace(this.dblRe, "$1").replace(this.illegalRe, "_").replace(this.controlRe, "").replace(this.reservedRe, "").replace(this.re4, "")).length > this.maxLength) {
                const t = this.getParts(e);
                t && 3 == t.length && (t[1] = t[1].substr(0, this.maxLength), e = t[1] + "." + t[2]);
            }
            return this.trim(e);
        }
    };
    t.a = o;
}, function(e, t, n) {
    "use strict";
    t.a = e => {
        let t = null;
        return t = () => {}, t.t = t.log = t.info = t.warn = t.error = t.debug = t, t;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(0);
    t.a = function(e) {
        r.a.sendMessage({
            action: "sendMonitoring",
            obj: {
                category: e.category,
                event: e.event,
                subcategory: e.subcategory
            }
        });
    };
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return ke;
    }));
    var r = n(4), o = n(10), i = n(6);
    class a {
        constructor(e) {
            this.cache = void 0, this.initData = void 0, this.cache = e;
        }
        async extractLinks(e) {
            const {element: t, initData: n} = e;
            if (!t) throw new Error("element is not defined");
            if (!n) throw new Error("initData is not defined");
            this.initData = n;
            let r = this.getFilenameFromUrl(t.src);
            return r && !/\.php$/.test(r) || (r = i.a.modify(document.title + ".jpg")), [ {
                url: t.src,
                filename: r
            } ];
        }
        getFilenameFromUrl(e) {
            return Object(o.a)(this.initData).getMatchFirst(e, /\/([^\/]+\.[a-z0-9]{3,4})(?:\?|$)/i);
        }
    }
    var s = n(0);
    const l = n(36);
    class u {
        constructor(e) {
            this.cache = void 0, this.initData = void 0, this.cache = e;
        }
        async extractLinks(e) {
            const {mediaId: t, initData: n} = e;
            if (!t) throw new Error("videoId is not defined");
            if (this.cache[t]) return this.cache[t];
            if (!n) throw new Error("initData is not defined");
            this.initData = n;
            const r = await this.requestVideoLinksById(t);
            let i = Object(o.a)(this.initData).popupMenu.prepareLinks.facebook(r.links, r.title);
            return this.cache[t] = this.transformLinks(i), this.cache[t];
        }
        async requestVideoLinksById(e) {
            return Promise.resolve().then(() => this.requestLocalVideoLinks(e)).catch(() => this.requestBgVideoLinks(e));
        }
        async requestLocalVideoLinks(e) {
            return new Promise((e, t) => {
                const n = document.body.innerHTML.match(/"token":"(.*?)"/);
                return n && n[1] ? e(n[1]) : t(new Error("No Token Found On Page"));
            }).then((function(t) {
                const n = `https://www.facebook.com/video/tahoe/async/${e}/?${l.stringify({
                    payloadtype: "primary"
                })}`, r = l.stringify({
                    __a: 1,
                    fb_dtsg: t
                });
                return fetch(n, {
                    method: "POST",
                    headers: {
                        "content-type": "application/x-www-form-urlencoded"
                    },
                    body: r
                }).then(e => e.text());
            })).then((function(t) {
                return new Promise((function(n, r) {
                    s.a.sendMessage({
                        action: "getFacebookLinksFromData",
                        extVideoId: e,
                        data: t
                    }, (function(e) {
                        e && e.links ? n(e) : r(new Error("Get links from data error"));
                    }));
                }));
            })).catch((function(e) {
                throw console.error("get local links error", e), e;
            }));
        }
        async requestBgVideoLinks(e) {
            return new Promise((function(t, n) {
                s.a.sendMessage({
                    action: "getFacebookLinks",
                    extVideoId: e
                }, (function(e) {
                    e && e.links ? t(e) : n(new Error("Get links error"));
                }));
            })).catch((function(e) {
                throw console.error("get links error", e), e;
            }));
        }
        transformLinks(e) {
            return JSON.parse(JSON.stringify(e)).map(e => (e.url = e.href, e.filename = e.title, 
            delete e.href, delete e.title, e));
        }
    }
    class c {
        constructor(e, t) {
            this.pageType = void 0, this.cache = void 0, this.pageType = e, this.cache = t;
        }
        async extractLinks(e) {
            switch (this.pageType) {
              case r.b.fbVideo:
              case r.b.fbFeed:
              case r.b.fbProfileVideo:
              case r.b.fbProfileFeed:
              case r.b.fbReel:
              case r.b.fbStory:
              case r.b.fbWatch:
                return new u(this.cache).extractLinks(e);

              case r.b.fbPhoto:
              case r.b.fbProfilePhoto:
                return new a(this.cache).extractLinks(e);

              default:
                throw new Error(`ytPageType ${this.pageType} is not supported`);
            }
        }
    }
    class d {
        async extractLinks(e) {
            const {element: t} = e;
            if (!t) throw new Error("element is not defined");
            if (!(t instanceof HTMLImageElement)) throw new Error("element is not supported");
            let n = null;
            const r = t.getAttribute("srcset");
            if ("string" == typeof r) {
                const e = [];
                r.split(",").map((function(t) {
                    const n = t.split(" ");
                    e.push({
                        url: n[0],
                        size: n[1]
                    });
                })), e.sort((function(e, t) {
                    return e.size > t.size ? -1 : 1;
                }));
                const t = e.shift();
                t && (n = t.url);
            }
            if (n || (n = t.src), "string" != typeof n) throw new Error("src is not found");
            let o = "jpeg";
            -1 !== n.indexOf(".png") && (o = "png");
            let a = i.a.modify(this.getContentMakerName(t));
            return a = a ? a + "_" : "", [ {
                url: n,
                filename: a + Date.now() + "." + o
            } ];
        }
        getContentMakerName(e) {
            const t = e.closest("article");
            if (t) {
                const e = t.querySelector("header span a");
                return e ? e.textContent : "";
            }
            return "";
        }
    }
    var p = n(21), f = n(7);
    const h = Object(f.a)("IgPostVideoLinkExtractor");
    class g {
        constructor() {
            this.queryHash = void 0, this.queryHash = window.localStorage.getItem("_sf_query_hash") || "a9441f24ac73000fa17fe6e6da11d59d";
        }
        async extractLinks(e) {
            const {element: t} = e;
            if (!t) throw new Error("element is not defined");
            if (!(t instanceof HTMLVideoElement)) throw new Error("element is not supported");
            const n = t.getAttribute("src");
            if ("string" != typeof n || -1 !== n.indexOf("blob:")) {
                let e = this.getArticleIdFromURL(location.href);
                if (!e) {
                    const n = t.closest(".sf-root-media-container");
                    n && (e = this.getArticleIdFromContainer(n));
                }
                if (!e || -1 !== e.indexOf("/")) {
                    const n = t.closest("article"), r = t.closest("section");
                    let o = n && n.querySelector('a[href*="/liked_by"]');
                    if (!n && r && (o = r.querySelector('a[href*="/liked_by"]')), o) {
                        const t = o.href.match(/\/p\/(.*?)\/liked_by/);
                        t && t[1] && (e = t[1]);
                    }
                }
                if (e && -1 === e.indexOf("/")) try {
                    const n = await this.requestApiEntity(e), {filename: r, url: o} = this.prepVideoFromResponseApi(t, n);
                    return [ {
                        filename: r,
                        url: o
                    } ];
                } catch (e) {
                    throw new Error("Get Video from api error: " + e);
                }
                throw new Error("idArticle not found");
            }
            let r = "mp4";
            -1 !== n.indexOf(".flv") && (r = "flv");
            let o = n.match(/\/([^\/?]+)(?:$|\?)/);
            o = o && o[1], o || (o = "noname." + r);
            let a = i.a.modify(this.getContentMakerName(t));
            return a = a ? a + "_" : "", [ {
                url: n,
                filename: a + o
            } ];
        }
        getArticleIdFromURL(e) {
            const t = e.split("?")[0].match(/(?:\/p|\/tv)\/(.*)/);
            if (t && t[1]) return t[1].replace("/", "");
        }
        getArticleIdFromContainer(e) {
            const t = e.closest("article");
            if (t) {
                const e = t.querySelector('a[href*="/p/"], a[href*="/tv/"]');
                if (e) return this.getArticleIdFromURL(e.href);
            }
        }
        requestApiEntity(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            const n = new URLSearchParams({
                query_hash: this.queryHash,
                variables: JSON.stringify({
                    shortcode: e
                })
            });
            return Object(p.a)({
                url: "https://www.instagram.com/graphql/query/?" + n.toString(),
                json: !0
            }).then(e => {
                if (!e.body || !e.body.data || !e.body.data.shortcode_media) throw new Error("Request video from api failed. Empty body");
                return e.body.data.shortcode_media;
            }, n => {
                if (400 == n && 0 === t) return this.refreshQueryHash().then(() => this.requestApiEntity(e, 1));
            });
        }
        async refreshQueryHash() {
            const e = document.querySelector('link[href*="Consumer.js/"]');
            return e && e.href ? Object(p.a)(e.href).then(e => {
                const t = e.body.match(/s="(\w+)",l=/);
                t && t[1] && (this.queryHash = t[1], window.localStorage.setItem("_sf_query_hash", t[1]), 
                h && h.info("new query hash", this.queryHash));
            }) : (h && h.error("Consumer.js not found. refreshQueryHash error"), Promise.resolve());
        }
        prepVideoFromResponseApi(e, t) {
            var n;
            if ("GraphVideo" === t.__typename && t.video_url) {
                const e = t.title || t.id || "video_instagram";
                return {
                    filename: i.a.modify(e + ".mp4"),
                    url: t.video_url
                };
            }
            const r = t.edge_sidecar_to_children.edges.shift().node;
            if ("GraphSidecar" === t.__typename && "GraphImage" !== (null == r ? void 0 : r.__typename)) {
                const e = t.title || r.id || "video_instagram";
                return {
                    filename: i.a.modify(e + ".mp4"),
                    url: r.video_url
                };
            }
            if ("GraphSidecar" === t.__typename && null !== (n = t.edge_sidecar_to_children) && void 0 !== n && n.edges) {
                const {edges: n} = t.edge_sidecar_to_children;
                if (!n.length) return;
                const r = e.getAttribute("poster");
                if (!r) return;
                const o = n.find(e => {
                    const {node: t} = e;
                    return t.display_url.split("?")[0] === r.split("?")[0];
                });
                if (o && "GraphVideo" === o.node.__typename) return this.prepVideoFromResponseApi(e, o.node);
            }
        }
        getContentMakerName(e) {
            const t = e.closest("article");
            if (t) {
                const e = t.querySelector("header span a");
                return e ? e.textContent : "";
            }
            return "";
        }
    }
    class A {
        async extractLinks(e) {
            const {element: t} = e;
            if (!t) throw new Error("element is not defined");
            if (!(t instanceof HTMLImageElement)) throw new Error("element is not supported");
            let n;
            if (t.srcset) {
                const e = t.srcset.split(",")[0];
                e && (n = e.split(" ")[0]);
            }
            if (n || (n = t.src), !n) throw new Error("url is not found");
            const r = location.href.match(/stories\/(.*?)\/(\d+)/);
            let o = "instagram_photo_story";
            return r && r[1] && r[2] && (o = [ r[1], r[2] ].join(" - ") + ".jpg"), Promise.resolve([ {
                url: n,
                filename: o
            } ]);
        }
    }
    var m = n(50);
    class v {
        constructor() {
            this.requestHeaders = void 0, this.requestHeaders = {
                "x-asbd-id": "198387",
                "x-ig-app-id": "936619743392459",
                "x-ig-www-claim": "0"
            };
        }
        async extractLinks(e) {
            const {element: t} = e;
            if (!t) throw new Error("element is not defined");
            let n = 0;
            t.querySelectorAll("header > div > div").forEach((e, t) => {
                e.querySelector("div div[style]") && (n = t);
            });
            const r = await this.getStory(n), o = location.href.match(/stories\/(.*?)\/(\d+)/);
            let i = "instagram_video_story";
            return o && o[1] && o[2] && (i = [ o[1], o[2] ].join(" - ") + ".mp4"), [ {
                url: r,
                filename: i
            } ];
        }
        async getStory(e) {
            var t, n, r;
            return null === (t = (await this.getStoriesFromApi(location.href))[e]) || void 0 === t || null === (n = t.video_versions) || void 0 === n || null === (r = n[0]) || void 0 === r ? void 0 : r.url;
        }
        async getStoriesFromApi(e) {
            const {username: t, storyId: n, isImplicitHighlightUrl: r} = await this.getInfoAboutStoryUrl(e);
            return "highlights" === t || r ? this.getHighlightStories(n) : this.getStoriesByUsername(t);
        }
        async getInfoAboutStoryUrl(e) {
            let {username: t, storyId: n, isImplicitHighlightUrl: r} = this.parseStoryUrl(e);
            if (!r) return {
                username: t,
                storyId: n,
                isImplicitHighlightUrl: r
            };
            const o = await this.getRedirectedUrl(e);
            if (e === o) throw new Error("Url was not redirected");
            return this.parseStoryUrl(o);
        }
        parseStoryUrl(e) {
            let t = !1, n = /instagram.com\/stories\/([^\/?]+)(?:\/(\d+))?(?:\/|\?|$)/.exec(e);
            if (n || (n = /instagram.com\/s\/[^\/?]+\?story_media_id=(\d+)_(\d+)/.exec(e), t = !0), 
            n) {
                let [, e, r] = n;
                return {
                    username: e,
                    storyId: r,
                    isImplicitHighlightUrl: t
                };
            }
            throw new Error("Failed to parse story url: " + e);
        }
        async getRedirectedUrl(e) {
            return (await Object(m.a)(e, {
                headers: this.requestHeaders
            })).responseURL;
        }
        async getHighlightStories(e) {
            const t = await this.requestStoriesById("highlight:" + e);
            return this.parseStoriesResponse(t);
        }
        async requestStoriesById(e) {
            return (await Object(m.a)("https://www.instagram.com/api/v1/feed/reels_media/?reel_ids=" + encodeURIComponent(e), {
                headers: this.requestHeaders
            })).body;
        }
        parseStoriesResponse(e) {
            var t, n, r;
            if (!e) return [];
            return ((null === (t = JSON.parse(e)) || void 0 === t || null === (n = t.reels_media) || void 0 === n || null === (r = n[0]) || void 0 === r ? void 0 : r.items) || []).map(e => e);
        }
        async getStoriesByUsername(e) {
            const t = await this.getUserIdByUserName(e), n = await this.requestStoriesById(t);
            return this.parseStoriesResponse(n);
        }
        async getUserIdByUserName(e) {
            var t, n, r;
            const o = await Object(m.a)("https://www.instagram.com/api/v1/users/web_profile_info/?username=" + e, {
                headers: this.requestHeaders
            }), i = null === (t = JSON.parse(o.body)) || void 0 === t || null === (n = t.data) || void 0 === n || null === (r = n.user) || void 0 === r ? void 0 : r.id;
            if (!i) throw new Error("Failed to get user id by username: " + e);
            return i;
        }
    }
    class y {
        constructor(e, t) {
            this.pageType = void 0, this.cache = void 0, this.pageType = e, this.cache = t;
        }
        async extractLinks(e) {
            switch (this.pageType) {
              case r.c.igFeed:
                const {element: t} = e;
                if (!t) throw new Error("element is not defined");
                if (t instanceof HTMLVideoElement) return (new g).extractLinks(e);
                if (t instanceof HTMLImageElement) return (new d).extractLinks(e);
                throw new Error("element is not supported");

              case r.c.igPostVideo:
                return (new g).extractLinks(e);

              case r.c.igPostPhoto:
                return (new d).extractLinks(e);

              case r.c.igStoryVideo:
                return (new v).extractLinks(e);

              case r.c.igStoryPhoto:
                return (new A).extractLinks(e);

              default:
                throw new Error(`igPageType ${this.pageType} is not supported`);
            }
        }
    }
    var b = n(19), w = n(14), C = n(13);
    function x(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            }))), n.push.apply(n, r);
        }
        return n;
    }
    function k(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? x(Object(n), !0).forEach((function(t) {
                Object(b.a)(e, t, n[t]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            }));
        }
        return e;
    }
    const I = Object(f.a)("SoAudioLinkExtractor");
    class _ {
        async extractLinks(e) {
            const {element: t} = e;
            let n = this.get("client_id");
            if (n || (n = await this.getClientId()), !t) {
                const e = await this.getTrack(n, location.href);
                if (!e) {
                    const e = await this.getPageInfo(n, location.href);
                    return (await this.fetchSongsOfPlaylist(n, e)).map(async e => ({
                        filename: this.fmtSongFilename(e),
                        url: await this.getDownloadURL(n, e)
                    }));
                }
                return [ {
                    url: null == e ? void 0 : e.url,
                    filename: null == e ? void 0 : e.filename
                } ];
            }
            if (t.closest(".sc-type-small, .chartTrack")) {
                const e = t.closest(".sc-type-small, .chartTrack"), r = null == e ? void 0 : e.querySelector(".trackItem__trackTitle[href], .chartTrack__title [href]");
                if (!r) throw new Error("song element is not defined");
                const o = await this.getTrack(n, r.href);
                return [ {
                    url: null == o ? void 0 : o.url,
                    filename: null == o ? void 0 : o.filename
                } ];
            }
            if (t.closest(".sc-media")) {
                const e = t.closest(".sc-media");
                let r;
                const o = null == e ? void 0 : e.querySelector(".soundTitle__title[href]");
                if (o && (r = o.href), !o && document.querySelector(".l-about-row .sound__soundActions .sc-button-group:nth-child(1)") && (r = location.href), 
                !r) throw new Error("song url is not defined");
                const i = await this.getTrack(n, r);
                return [ {
                    url: null == i ? void 0 : i.url,
                    filename: null == i ? void 0 : i.filename
                } ];
            }
            if (t.closest('[role="group"].sound.streamContext:not(.playlist)')) {
                const e = t.closest('[role="group"].sound.streamContext:not(.playlist)'), r = null == e ? void 0 : e.querySelector("a.soundTitle__title[href]");
                if (!r) throw new Error("song element is not defined");
                const o = await this.getTrack(n, r.href);
                return [ {
                    url: null == o ? void 0 : o.url,
                    filename: null == o ? void 0 : o.filename
                } ];
            }
            if (t.closest('[role="group"].sound.playlist.streamContext')) {
                const e = t.closest('[role="group"].sound.playlist.streamContext'), r = null == e ? void 0 : e.querySelector('a[href*="sets/"]'), o = await this.getPageInfo(n, r.href);
                if ("playlist" !== o.kind) throw I && I.error("It's not playlist", r), new Error("playlist is not defined");
                return (await this.fetchSongsOfPlaylist(n, o)).map(async e => ({
                    filename: this.fmtSongFilename(e),
                    url: await this.getDownloadURL(n, e)
                }));
            }
            return [ {
                url: "",
                filename: ""
            } ];
        }
        get(e) {
            const t = localStorage.getItem(e);
            if (!t) return "";
            const {val: n, expires: r} = JSON.parse(t);
            return n && -1 === r || r > Date.now() ? n : "";
        }
        async getClientId() {
            return Object(w.a)('function(){// @ts-ignore\nvar wpchunk=window.webpackChunk||window.webpackJsonp;if(typeof wpchunk==="undefined"){return}var _result;// @ts-ignore\nvar sections=wpchunk.filter(function(v,k){return k!=="push"});// check fn\nfor(var id in wpchunk){var chunk=wpchunk[id];if(chunk[1]&&chunk[1][41021]){var matches=chunk[1][41021].toString().match(/\\?client_id=(.+?)&/);if(Array.isArray(matches)&&matches[1]){return matches[1]}}}// @ts-ignore\nsections.some(function(section){var obj=section[1];return Object.keys(obj).some(function(fnIdx){var result=obj[fnIdx].toString().match(/\\"client_id=\\w+\\"/);if(result&&result[0]){return _result=result[0].split("=")[1].replace(/\\"/,"")}})});return _result}');
        }
        getPageInfo(e, t) {
            return Object(C.a)({
                action: "soundcloudFetchPageInfo",
                clientId: e,
                songEndpoint: t
            });
        }
        async getTrack(e, t) {
            const n = await this.getPageInfo(e, t);
            if (!n || "track" !== n.kind) return;
            const r = await this.getDownloadURL(e, n), o = this.fmtSongFilename(n);
            return k(k({}, n), {}, {
                url: r,
                filename: o
            });
        }
        getDownloadURL(e, t) {
            return Object(C.a)({
                action: "soundcloudSearchBestDownloadURL",
                clientID: e,
                song: t
            });
        }
        fetchSongsOfPlaylist(e, t) {
            return Object(C.a)({
                action: "soundcloudFetchSongsOfPlaylist",
                clientID: e,
                playlist: t
            });
        }
        prepareFilename(e) {
            try {
                let t = e.replace(/[^A-Za-zА-Яа-яЁё0-9\s\.\-\(\)\[\]]/g, "").trim();
                if ("" === t || t.length < 3 || t.test(/\.$/)) throw new Error("filename not valid");
                return t;
            } catch (e) {
                return Date.now() + "_track";
            }
        }
        fmtSongFilename(e) {
            return this.prepareFilename("" + e.title) + ".mp3";
        }
    }
    class E {
        constructor(e, t) {
            this.pageType = void 0, this.cache = void 0, this.pageType = e, this.cache = t;
        }
        async extractLinks(e) {
            switch (this.pageType) {
              case r.f.soAudio:
                return (new _).extractLinks(e);

              default:
                throw new Error(`soPageType ${this.pageType} is not supported`);
            }
        }
    }
    class D {
        async extractLinks(e) {
            const {element: t} = e;
            if (!t) throw new Error("element is not defined");
            if (!(t instanceof HTMLVideoElement)) throw new Error("element is not supported");
            const n = this.getFilename();
            return [ {
                url: t.src,
                filename: n
            } ];
        }
        getFilename() {
            let e = document.querySelector(".user-username, .share-title");
            e || (e = document.querySelector("._embed_video_card-user span"));
            let t = e && e.textContent ? i.a.modify(e.textContent + ".mp4") : "video.mp4";
            if (!t) {
                const e = location.href.match(/\d+/);
                t = e && e[0] ? e[0] : "video.mp4";
            }
            return t;
        }
    }
    class S {
        constructor(e, t) {
            this.pageType = void 0, this.cache = void 0, this.pageType = e, this.cache = t;
        }
        async extractLinks(e) {
            switch (this.pageType) {
              case r.g.ttFeed:
              case r.g.ttVideo:
              case r.g.ttProfile:
              case r.g.ttExplore:
              case r.g.ttFollowing:
                return (new D).extractLinks(e);

              default:
                throw new Error(`igPageType ${this.pageType} is not supported`);
            }
        }
    }
    var M = n(59), O = n(22), F = n(1);
    class j {
        constructor(e) {
            this.cache = void 0, this.cache = e;
        }
        async extractLinks(e) {
            const {mediaId: t, details: n} = e;
            if (!t) {
                console.error("id is not defined");
                const {list: e} = await this._getAlbumLinksViaDom(document, n);
                return this.listToLinks(e);
            }
            try {
                const {list: e} = await this._getAlbumLinks(t, n);
                return this.listToLinks(e);
            } catch (e) {
                "Album is empty" !== e.message && "Abort" !== e.message && console.error("findAlbumLinks error", e);
                const {list: t} = await this._getAlbumLinksViaDom(document, n);
                return this.listToLinks(t);
            }
        }
        _getAlbumLinks(e, t) {
            var n = this, r = this.cache, o = "";
            /albums|tags|photos/.test(location.href) && (o = this.getFolderName());
            var a = {}, s = [], l = 0, u = 0, c = 0, d = 0, f = o => {
                if (t.abort) return Promise.reject(new Error("Abort"));
                var s = {
                    act: "show",
                    al: 1,
                    list: e,
                    offset: null
                };
                return o && (s.offset = o), Object(p.a)({
                    type: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    url: "/al_photos.php",
                    data: s,
                    localXHR: !0,
                    timeout: 6e4
                }).then(e => {
                    var t = this.parseVkResponse(e.body), o = t[6], s = t[8];
                    l || (l = s.length), u = o, c || (c = Math.ceil(o / l));
                    var d = [], p = "";
                    return s.forEach((function(e) {
                        if (!a[e.id]) {
                            a[e.id] = 1;
                            var t = n.getMaxPhotoSize(e);
                            t && (!p && e.album && (p = i.a.decodeSpecialChars(Object(M.a)(e.album.replace(/<[^>]+>/g, "")))), 
                            t.id = e.id, r[e.id] = t, d.push(t));
                        }
                    })), new Promise((function(e) {
                        setTimeout(e, 250);
                    })).then((function() {
                        return {
                            title: p,
                            list: d
                        };
                    }));
                });
            };
            return function e() {
                return f(d * l).then((function(n) {
                    if (c--, d++, s.push.apply(s, n.list), t.onProgress && t.onProgress(s.length, u), 
                    o || (o = n.title), c > 0) return e();
                }));
            }().then(() => {
                if (Object.keys(r).slice(1e3).forEach((function(e) {
                    delete r[e];
                })), !s.length) throw new Error("Album is empty");
                return o || (o = this.getFolderName()), {
                    title: o,
                    list: s
                };
            }, (function(e) {
                throw "Abort" !== e.message && console.error("Get photo page error!", e), e;
            }));
        }
        getFolderName() {
            if (null !== document.querySelector('.page_block_header_inner._header_inner a.ui_crumb[href="/audio"]')) {
                const e = document.querySelector(".page_block_header_inner._header_inner div.ui_crumb");
                if (e && e.textContent) return i.a.modify(e.textContent);
            }
            var e = document.title, t = e.indexOf("|");
            return -1 !== t && (e = e.substr(0, t - 1)), i.a.modify(e);
        }
        parseVkResponse(e) {
            try {
                const t = JSON.parse(e).payload[1];
                return [ null, null, null, null, null, t[0], t[1], null, t[3] ];
            } catch (e) {}
            for (var t = function(e) {
                return !0 === e ? 1 : parseInt(e) || 0;
            }, n = function(e) {
                return !0 === e ? 1 : parseFloat(e) || 0;
            }, r = e.split("<!>"), o = r.length - 1; o >= 0; --o) {
                var i = r[o];
                if ("<!" == i.substr(0, 2)) {
                    var a = i.indexOf(">"), s = i.substr(2, a - 2);
                    switch (i = i.substr(a + 1), s) {
                      case "json":
                        var l = null;
                        try {
                            l = JSON.parse(i);
                        } catch (e) {}
                        r[o] = l;
                        break;

                      case "int":
                        r[o] = t(i);
                        break;

                      case "float":
                        r[o] = n(i);
                        break;

                      case "bool":
                        r[o] = !!t(i);
                        break;

                      case "null":
                        r[o] = null;
                        break;

                      case "pageview_candidate":
                        r.pop();
                        break;

                      case "debug":
                        r.pop();
                    }
                }
            }
            return r;
        }
        getMaxPhotoSize(e) {
            var t = null, n = null;
            [ "w", "z", "y", "x" ].some((function(r) {
                return !!(t = e[r + "_"]) || (!!(n = e[r + "_src"]) || void 0);
            })), t || (t = [ n ]);
            var r, o;
            return t[0] ? {
                url: (r = e.base, o = t[0], o.match(/https?:\/\//i) ? ((o = new URL(o)).pathname.match(/\.[a-z]{3}$/i) || (o += ".jpg"), 
                o.toString()) : (o.match(/\.[a-z]{3}$/i) || (o += ".jpg"), (r || "").replace(/\/[a-z0-9_:\.]*$/i, "") + "/" + o)),
                width: t[2] && t[1],
                height: t[1] && t[2]
            } : null;
        }
        _getAlbumLinksViaDom(e, t) {
            var n = this, r = this.cache;
            if (t.abort) return Promise.reject(new Error("Abort"));
            var o = /showPhoto\s*\(\s*["']([-\d_]+)["']\s*,\s*["']([\w\-]+)["']/i, i = /\{["']?temp["']?\s*:\s*(\{.+?\})/i, a = /(\{|,)\s*(\w+)\s*:/gi, s = {}, l = [], u = e => {
                if (!this.isReply(e) && !this.elIsHidden(e)) {
                    var t = e.getAttribute("onclick"), r = o.exec(t);
                    if (r) {
                        var u = r[1];
                        if (!s[u]) {
                            s[u] = 1;
                            var c = r[2], d = null, p = i.exec(t);
                            if (p) {
                                p = p[1].replace(a, '$1"$2":');
                                var f = null;
                                try {
                                    f = JSON.parse(p);
                                } catch (e) {}
                                d = f && n.getMaxPhotoSize(f);
                            }
                            d || (d = {}), d.id = u, d.listId = c, l.push(d);
                        }
                    }
                }
            };
            if ([].slice.call(e.querySelectorAll("a[onclick]")).forEach(u), 0 === l.length && e !== document) {
                var c = this.getWallPostContent();
                c && [].slice.call(c.querySelectorAll("a[onclick]")).forEach(u);
            }
            return (e => {
                var n = Promise.resolve(), o = [], i = e.filter((function(e) {
                    var t = r[e.id];
                    return !t || (o.push(t), !1);
                }));
                return t.onProgress && t.onProgress(o.length, e.length), i.forEach(i => {
                    n = n.then(() => this._getPhotoLinks(i.id, i.listId, t).then((function(n) {
                        r[i.id] = n, o.push(n), t.onProgress && t.onProgress(o.length, e.length);
                    }), (function(n) {
                        if ("Abort" === n.message) throw n;
                        i.url && (o.push(i), t.onProgress && t.onProgress(o.length, e.length), console.error("Photo link from dom", n));
                    })));
                }), n = n.then((function() {
                    if (Object.keys(r).slice(1e3).forEach((function(e) {
                        delete r[e];
                    })), !o.length) throw new Error("Photos is not found");
                    return {
                        list: o
                    };
                }));
            })(l);
        }
        _getPhotoLinks(e, t, n) {
            var r = r => {
                if (n.abort) return Promise.reject(new Error("Abort"));
                var o = {
                    act: "show",
                    al: 1,
                    list: t,
                    module: r,
                    photo: e
                };
                return Object(p.a)({
                    type: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "X-Requested-With": "XMLHttpRequest"
                    },
                    url: "/al_photos.php",
                    data: o,
                    localXHR: !0,
                    timeout: 6e4
                }).then(t => {
                    var n = this.parseVkResponse(t.body)[8], r = null;
                    if (n.some(t => {
                        if (t.id === e) return r = this.getMaxPhotoSize(t), !0;
                    }), !r) throw new Error("Photo is is not found!");
                    return new Promise((function(e) {
                        setTimeout(e, 250);
                    })).then((function() {
                        return r;
                    }));
                });
            };
            return this._getModuleName().then((function(e) {
                return r(e);
            })).catch((function(e) {
                throw "Abort" !== e.message && console.error("Get photo error!", e), e;
            }));
        }
        isReply(e) {
            return Object(O.a)(e, ".replies " + e.tagName) || Object(O.a)(e, ".wl_replies " + e.tagName);
        }
        elIsHidden(e) {
            return null === e.offsetParent;
        }
        getWallPostContent() {
            var e = location.href.match(/wall(-?\d+_\d+)/);
            if (e = e && e[1]) return document.getElementById("post" + e) || document.getElementById("wpt" + e);
        }
        _getModuleName() {
            return new Promise((function(e, t) {
                var n = F.a.create("script", {
                    text: '(function(dataArg){if(window.cur&&window.cur.module&&typeof window.cur.module==="string"){document.body.dataset[dataArg]=window.cur.module}})(' + JSON.stringify("sfModule") + ");"
                });
                document.body.appendChild(n), setTimeout((function() {
                    n.parentNode.removeChild(n), e(document.body.dataset.sfModule);
                }), 0);
            }));
        }
        listToLinks(e) {
            var t = [];
            e.forEach(e => {
                var n = e.url, r = this.getFilenameFromUrl(n);
                r || (r = "unknown.jpg"), t.push({
                    filename: r,
                    url: n
                });
            });
            var n = String(t.length).length;
            return t.forEach((function(e, t) {
                for (var r = String(t + 1); r.length < n; ) r = "0" + r;
                e.filename = r + "-" + e.filename;
            })), t;
        }
        getFilenameFromUrl(e) {
            var t = /\/([\w\-]+\.[a-z0-9]{3,4})(?:\?|$)/i.exec(e);
            return t = t && t[1] || "";
        }
    }
    var T = n(25), L = n(32), N = n(52), z = n(43);
    function B(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            }))), n.push.apply(n, r);
        }
        return n;
    }
    function P(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? B(Object(n), !0).forEach((function(t) {
                Object(b.a)(e, t, n[t]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            }));
        }
        return e;
    }
    class R {
        constructor(e) {
            this.cache = void 0, this.initData = void 0, this.cache = e;
        }
        async extractLinks(e) {
            var t;
            const {element: n, initData: r} = e;
            if (!n) throw new Error("element is not defined");
            if (!r) throw new Error("initData is not defined");
            this.initData = r;
            var o = null === (t = n.parentNode) || void 0 === t ? void 0 : t.id, i = o && o.match(/video_box_wrap(-?\d+)_(-?\d+)/);
            if (i) return i.shift(), i = i.map((function(e) {
                return parseInt(e);
            })), Object(w.a)(i, (e, t) => {
                let n = window.mvcur;
                var r = "video" + e + "_" + t;
                return n && n.listId && (r = "" + r), {
                    path: r
                };
            }).then(async e => {
                if (!e) return;
                let t = await this.prepareVideoLinks({
                    hosting: "vk",
                    action: "getVKLinks",
                    extVideoId: e.path,
                    oidVid: i
                });
                return t = t.map(e => ("MP4" === e.format && (e.forceDownload = !0), e)), this.transformLinks(t);
            });
            throw new Error("oidVid is not defined");
        }
        async prepareVideoLinks(e) {
            let t = [];
            if (e && e.oidVid) {
                const [n, r] = e.oidVid;
                let o = await this.getLinksFromMv(n, r);
                o && t.push(...this.prepareLinks(o));
            }
            const n = await Object(C.a)(e), r = Object(o.a)(this.initData);
            if (n) if ("getPladformVideo" === e.action) this.initData.preferences.showUmmyItem && "getRutubeLinks" === n.action ? t.push(...r.popupMenu.prepareLinks.rutube(n.links)) : t.push(...this.prepareLinks(this.preparePladformLinks(n))); else if (n.links) {
                const e = r.embedDownloader.reMapHosting(n.action);
                e && t.push(...r.popupMenu.prepareLinks[e](n.links, n.title));
            }
            if (!t.length && "getVKLinks" === e.action) {
                const {hosting: n, response: o} = await this.getVideoLinksAsAjax(e.extVideoId);
                o && o.links && (o.isUmmy ? t.push(...o.links) : t.push(...r.popupMenu.prepareLinks[n](o.links, o.title)));
            }
            let i = t.filter(e => -1 !== e.href.indexOf("mycdn.me/")), a = t.filter(e => -1 !== e.href.indexOf("vkuser"));
            if ((i.length || a || t.length <= 2) && e.extVideoId) {
                let r = {}, o = document.querySelector('a[href*="' + e.extVideoId + '"]');
                if (o && o.dataset.length) {
                    let e = o.closest('[id*="post"]');
                    e && (r.post_id = e.dataset.postId), r.list = o.dataset.list, r.paylist_id = "wall_" + o.dataset.video.split("_")[0];
                }
                r.video = e.extVideoId.split("?")[0].replace("video", "");
                const i = location.href.match(/pl_(wall_.\d+)/);
                i && i[1] && (r.playlist_id = i[1]);
                const a = document.querySelector(`a[data-video="${r.video}"]`);
                a && a.dataset.list && (r.list = a.dataset.list);
                const s = await Object(p.a)({
                    type: "POST",
                    url: "https://vk.com/al_video.php?act=show",
                    data: P({
                        act: "show",
                        al: 1,
                        autoplay: 1,
                        module: "groups"
                    }, r)
                }), {hls: l, mp4: u} = await N.a(n.title, s.body);
                t.push(...u, ...l), t = Object(z.a)(t, "href");
            }
            return t = await N.b(Object(z.a)(t, "quality", "itag"), e => 22 == e.itag), t = t.map(e => (e.title = "." === e.title ? "video-" + e.quality : e.title, 
            e)), t;
        }
        getLinksFromMv(e, t, n) {
            return Object(w.a)([ t, e ], (e, t) => {
                const r = window.mvcur;
                if (r && r.player && r.player.vars) {
                    var o = r.player.vars;
                    return o.vid !== e || o.oid !== t ? n() : {
                        vars: r.player.vars
                    };
                }
            }).then(e => e ? this.getLinksFromHtml5MetaData(e.vars) : null);
        }
        getLinksFromHtml5MetaData(e) {
            if (!e) return;
            var t = e.md_title;
            if (void 0 === t) return;
            let n = Object.keys(e).some(e => e.match(/cache([0-9]+)/)) ? /cache([0-9]+)/ : /url([0-9]+)/;
            var r = {}, o = !1;
            for (var i in e) {
                var a = null;
                if ("extra_data" !== i || "52" !== e.extra) {
                    if (null !== (a = i.match(n))) {
                        var s = e[i], l = s.indexOf("?");
                        -1 !== l && (s = s.substr(0, l)), o = !0, r[a[1]] = s;
                    }
                } else r[a = e.hd ? "HD" : "SD"] = e[i], o = !0;
            }
            return o ? {
                title: t,
                links: r
            } : void 0;
        }
        prepareLinks(e) {
            var t = e.title, n = [];
            for (var r in e.links) {
                var o = e.links[r], i = o.match(/[\w]+\.(mp4|flv)(?:\?|$)/i), a = (i = i ? i[1] : "flv").toUpperCase();
                n.push({
                    href: o,
                    quality: r,
                    title: t,
                    ext: i,
                    format: a,
                    forceDownload: !0
                });
            }
            return n;
        }
        preparePladformLinks(e) {
            e && "getRutubeLinks" === e.action && (e.links = null);
            var t = e && e.links, n = "noname", r = {};
            if (t) for (var o, i = 0; o = t[i]; i++) n = o.title, r[o.quality] && (o.quality = 0), 
            r[o.quality.toUpperCase()] = o.url;
            return {
                title: n,
                links: r
            };
        }
        getVideoLinksAsAjax(e) {
            var t = /video(-?\d+_-?\d+)/.exec(e);
            t = t && t[1];
            var n = Object(T.a)(e).list;
            return this._getModuleName().then(e => new Promise(r => {
                this.getLinkAsAjax([ t, n ], (function(e, t) {
                    r({
                        hosting: t,
                        response: e
                    });
                }), e);
            }));
        }
        _getModuleName() {
            return new Promise((function(e, t) {
                var n = F.a.create("script", {
                    text: '(function(dataArg){if(window.cur&&window.cur.module&&typeof window.cur.module==="string"){document.body.dataset[dataArg]=window.cur.module}})(' + JSON.stringify("sfModule") + ");"
                });
                document.body.appendChild(n), setTimeout((function() {
                    n.parentNode.removeChild(n), e(document.body.dataset.sfModule);
                }), 0);
            }));
        }
        getLinkAsAjax(e, t, n) {
            this.getLinkAsAjaxRequest({
                localXHR: 1,
                type: "POST",
                url: "/al_video.php",
                data: {
                    list: e[1],
                    video: e[0],
                    act: "show_inline",
                    module: n,
                    al: 1
                },
                success: e => {
                    if (!e) return t();
                    var n = e.match(/<iframe[^>]+src=['"]{1}([^'">]+)['"]{1}[^>]+>/i);
                    if (n || (n = e.match(/var\s+opts\s+=\s+({[^}]*})/im)) && (n = n[1].match(/url:\s+['"]{1}([^'"]+)['"]{1}/i)) && 0 !== n[1].indexOf("//") && 0 !== n[1].indexOf("http") && (n = null), 
                    !n) return void Object(C.a)({
                        action: "getVkLinksFromData",
                        data: e
                    }).then((function(e) {
                        return t(e, "vk");
                    })).catch((function() {
                        return t({}, "vk");
                    }));
                    var r = n[1];
                    if (this.initData.preferences.showUmmyItem && this.isRutubeLink(r)) return t(this.getRutubeLinks(r));
                    if (0 === r.indexOf("//") && (r = "http:" + r), 0 !== r.indexOf("http")) return t();
                    const i = Object(o.a)(this.initData);
                    var a = i.embedDownloader.checkUrl(r);
                    if (!a) return t();
                    var l = {
                        action: a.action,
                        extVideoId: a.extVideoId
                    };
                    s.a.sendMessage(l, (function(e) {
                        var n = a.hosting;
                        return e.action !== l.action && (n = i.embedDownloader.reMapHosting(e.action)), 
                        t(e, n);
                    }));
                },
                error: function() {
                    t();
                }
            });
        }
        getLinkAsAjaxRequest(e, t) {
            t = t || 0;
            var n = Object.assign({}, e), r = () => {
                if (t < 1) return this.getLinkAsAjaxRequest(e, ++t);
                e.error && e.error();
            }, o = n.data;
            0 === t ? o.act = "show_inline" : 1 === t && (o.act = "show"), Object(L.a)(n, (function(t, n, o) {
                return t || !o || -1 !== o.indexOf('href="/join"') ? r() : void e.success(o);
            }));
        }
        isRutubeLink(e) {
            return /\/\/.*rutube\..*/.test(e);
        }
        getRutubeLinks(e) {
            if (!/rutube[^\/]+\/(?:play|video)\/embed\/(\d+)/.test(e) && !/video\.rutube\./.test(e)) return;
            return {
                isUmmy: !0,
                links: Object(o.a)(this.initData).popupMenu.prepareLinks.rutube(e)
            };
        }
        transformLinks(e) {
            return e.map(e => (e.url = e.href, e.filename = e.title, delete e.href, delete e.title, 
            e));
        }
    }
    class q {
        constructor(e) {
            this.cache = void 0, this.cache = e;
        }
        async extractLinks(e) {
            const {mediaId: t} = e;
            if (!t) throw new Error("ID is empty!");
            return this.cache[t] ? this.cache[t] : Object(w.a)([ t ], e => {
                let t = {};
                return void 0 !== window.cur && cur.pvCurPhoto && cur.pvCurPhoto.id === e && (t = cur.pvCurPhoto), 
                t;
            }).then(e => {
                if (!e || !e.id) throw new Error("ID is not found");
                let n = this.getMaxPhotoSize(e);
                if (!n) throw new Error("URL is not found!");
                var r = i.a.modify(this.getFilenameFromUrl(n.url)), o = r.lastIndexOf("."), a = r.substr(o + 1), s = r.substr(0, o);
                return this.cache[t] = [ {
                    url: n.url,
                    filename: s,
                    ext: a
                } ], this.cache[t];
            });
        }
        getMaxPhotoSize(e) {
            var t = null, n = null;
            [ "w", "z", "y", "x" ].some((function(r) {
                return !!(t = e[r + "_"]) || (!!(n = e[r + "_src"]) || void 0);
            })), t || (t = [ n ]);
            var r, o;
            return t[0] ? {
                url: (r = e.base, o = t[0], o.match(/https?:\/\//i) ? ((o = new URL(o)).pathname.match(/\.[a-z]{3}$/i) || (o += ".jpg"), 
                o.toString()) : (o.match(/\.[a-z]{3}$/i) || (o += ".jpg"), (r || "").replace(/\/[a-z0-9_:\.]*$/i, "") + "/" + o)),
                width: t[2] && t[1],
                height: t[1] && t[2]
            } : null;
        }
        getFilenameFromUrl(e) {
            var t = /\/([\w\-]+\.[a-z0-9]{3,4})(?:\?|$)/i.exec(e);
            return t = t && t[1] || "";
        }
    }
    class V {
        constructor(e) {
            this.cache = void 0, this.cache = e;
        }
        async extractLinks(e) {
            const {element: t} = e;
            if (!t) throw new Error("element is not defined");
            let n = t.querySelector("video");
            if (n || (n = t.querySelector(".stories_photo")), n || (n = t.querySelector(".stories_preview")), 
            !n) throw new Error("mediaNode is not defined");
            let r = n.src;
            return "stories_photo" !== n.className && "stories_preview" !== n.className ? [ {
                url: r,
                filename: Date.now() + ".mp4"
            } ] : (r = n.style.backgroundImage.substring(5, n.style.backgroundImage.length - 2), 
            [ {
                url: r,
                filename: Date.now() + ".jpg"
            } ]);
        }
    }
    var H = n(45), U = n(48);
    function W(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            }))), n.push.apply(n, r);
        }
        return n;
    }
    function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? W(Object(n), !0).forEach((function(t) {
                Object(b.a)(e, t, n[t]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : W(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            }));
        }
        return e;
    }
    const G = n(36);
    class Z {
        constructor(e) {
            this.cache = void 0, this.lastValidRequest = void 0, this.cache = e, this.lastValidRequest = null;
        }
        async extractLinks(e) {
            const {element: t} = e;
            if (!t) throw new Error("element is not defined");
            if (t.classList.contains("top_audio_player_title") || t.classList.contains("audio_page_player_title_performer")) return Object(w.a)(() => {
                let e = null;
                if ("undefined" != typeof ap && ap._currentAudio && (e = ap._currentAudio), !e && "undefined" != typeof cur && cur.audioPage && cur.audioPage._readyAudio && (e = cur.audioPage._readyAudio), 
                !e) try {
                    e = JSON.parse(localStorage.audio_v9_track);
                } catch (e) {}
                return e;
            }).then(async e => {
                if (!e) {
                    let t = document.querySelector("._audio_page_player[data-audio]");
                    e = t && this.readNewDataAudio(t.dataset.audio);
                }
                const t = this.getNewTrackInfo(e);
                if (!t || !t.fullId) throw new Error("Track info is not found");
                var n = i.a.modify(this.getNewAudioFilename(t));
                return t.url = await this._preloadNewTrackUrl(t), [ Q(Q({}, t), {}, {
                    filename: n
                }) ];
            });
            {
                const e = this.readNewDataAudio(t.dataset.audio), r = this.getNewTrackInfo(e);
                if (!r || !r.fullId) throw new Error("Track info is not found");
                if (r.url) return this.unmaskUrlViaUtil([ [ null, null, r.url ] ]).then(e => (r.url = e[0][2], 
                r));
                var n = i.a.modify(this.getNewAudioFilename(r));
                return r.url = await this._preloadNewTrackUrl(r), [ Q(Q({}, r), {}, {
                    filename: n
                }) ];
            }
        }
        readNewDataAudio(e) {
            try {
                return JSON.parse(e);
            } catch (e) {
                return null;
            }
        }
        getNewTrackInfo(e) {
            if (!e) return null;
            var t = {};
            return "string" == typeof e[2] && (t.url = e[2]), t.title = e[3], t.title && (t.title = i.a.decodeSpecialChars(this.rmEmTags(t.title))), 
            t.performer = e[4], t.performer && (t.performer = i.a.decodeSpecialChars(this.rmEmTags(t.performer))), 
            t.duration = parseInt(e[5]), t.actionHash = this.getTrackActionHash(e), t.urlHash = this.getTrackUrlHash(e), 
            e[1] && e[0] && (t.fullId = e[1] + "_" + e[0]), t.id = e[0], t.ownerId = e[1], t;
        }
        rmEmTags(e) {
            return /<em>.*<\/em>/.test(e) && (e = e.replace(/<\/?em>/g, "")), e;
        }
        getTrackActionHash(e) {
            return (e[13] || "").split("/")[2] || "";
        }
        getTrackUrlHash(e) {
            return (e[13] || "").split("/")[5] || "";
        }
        unmaskUrlViaUtil(e) {
            return this.needUnmask(e) ? Object(w.a)([], "function(){return vk.id}").then(t => {
                const n = e.map(e => {
                    try {
                        return Array.isArray(e) && e[2] ? (e[2] = H.a(t, e[2]), e) : null;
                    } catch (e) {
                        return console.error("track decode error: ", e), null;
                    }
                });
                return Promise.all(n).then(e => e.filter(e => null !== e));
            }) : Promise.resolve(e);
        }
        needUnmask(e) {
            var t = /audio_api_unavailable/;
            return e.some((function(e) {
                if (t.test(e[2])) return !0;
            }));
        }
        getNewAudioFilename(e) {
            var t = this.getNewAudioFullTitle(e);
            return t && (t += ".mp3"), t;
        }
        getNewAudioFullTitle(e) {
            var t = [];
            return e.title && t.push(e.title), e.performer && (t.length && t.unshift(" - "), 
            t.unshift(e.performer)), t.join("");
        }
        _preloadNewTrackUrl(e) {
            var t = {}, n = e.fullId, r = e.actionHash, o = e.urlHash, i = t[n];
            return i || (i = t[n] = this._getNewTrackListByIdsWithActionHash([ {
                fullId: n,
                actionHash: r,
                urlHash: o
            } ], {
                withoutUnblock: !0
            }).then(e => {
                delete t[n];
                var r = null;
                e.some((function(e) {
                    if (e[1] + "_" + e[0] === n) return r = e, !0;
                }));
                var o = r && this.getNewTrackInfo(r);
                if (!o || !o.url) throw new Error("Track is not found");
                return o.url;
            }, (function(e) {
                throw delete t[n], e;
            })).then(e => this.unmaskUrl([ e ])).then(e => e[0])), i;
        }
        _getNewTrackListByIdsWithActionHash(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            let n = 0;
            const r = {}, o = this.cache, i = e.filter(e => {
                const t = e.fullId;
                return !o[t] || (r[t] = o[t], n++, !1);
            }), a = [];
            for (;i.length; ) a.push(i.splice(0, 9));
            const s = e.length;
            let l = Promise.resolve();
            a.forEach(e => {
                l = l.then(() => {
                    const i = () => {
                        if (t.abort) throw new Error("Abort");
                        const i = e.filter(e => e.fullId && e.actionHash && e.urlHash).map(e => e.fullId + "_" + e.actionHash + "_" + e.urlHash), a = {
                            type: "POST",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded",
                                "X-Requested-With": "XMLHttpRequest"
                            },
                            data: G.stringify({
                                act: "reload_audio",
                                al: 1,
                                ids: i.join(",")
                            }),
                            url: "/al_audio.php",
                            localXHR: !0
                        };
                        return Object(p.a)(a).then(e => {
                            const i = this.parseVkResponse(e.body)[5];
                            if (!i || !Array.isArray(i)) throw new Error("Track list is not found!");
                            return this.lastValidRequest = a, i.forEach(e => {
                                const t = e[1] + "_" + e[0];
                                o[t] = e, r[t] = e, n++;
                            }), t.onProgress && t.onProgress(n, s), new Promise(e => {
                                setTimeout(e, 250);
                            });
                        });
                    };
                    let a = 2;
                    const l = () => i().catch(e => {
                        if ("Track list is not found!" === e.message && !t.withoutUnblock) {
                            if (this.lastValidRequest) return this.waitUntilUnblock(t).then(i);
                            if (a-- > 0) return new Promise(e => setTimeout(e, 15e3)).then(() => l());
                        }
                        throw e;
                    });
                    return l().catch(e => {
                        "Abort" !== e.message && console.error("requestIds error!", e);
                    });
                });
            }), l = l.then((function() {
                Object.keys(o).slice(1e3).forEach((function(e) {
                    delete o[e];
                }));
                const t = [];
                return e.forEach(e => {
                    const n = e.fullId, o = r[n];
                    o && t.push(o);
                }), t;
            }));
            const u = e => {
                if (this.isHlsLink(e)) {
                    const t = (e = e.replace("/index.m3u8", ".mp3")).split("/"), n = -1 !== e.indexOf("audios") ? 1 : 0;
                    return t.splice(t.length - (2 + n), 1), t.join("/");
                }
                return e;
            };
            return l = l.then(e => this.unmaskUrlViaUtil(e)).then(e => {
                const t = Object(U.a)(5), n = e.map(e => t(() => {
                    const t = e[2], n = u(t);
                    return this.isHlsLink(t) ? Object(p.a)({
                        method: "HEAD",
                        url: n
                    }).then(() => (e[2] = n, e), t => (console.warn("getNewTrackListByIdsWithActionHash: mp3 file not available. ", t), 
                    e)) : e;
                }));
                return Promise.all(n);
            }), l;
        }
        parseVkResponse(e) {
            try {
                const t = JSON.parse(e).payload[1];
                return [ null, null, null, null, null, t[0], t[1], null, t[3] ];
            } catch (e) {}
            for (var t = function(e) {
                return !0 === e ? 1 : parseInt(e) || 0;
            }, n = function(e) {
                return !0 === e ? 1 : parseFloat(e) || 0;
            }, r = e.split("<!>"), o = r.length - 1; o >= 0; --o) {
                var i = r[o];
                if ("<!" == i.substr(0, 2)) {
                    var a = i.indexOf(">"), s = i.substr(2, a - 2);
                    switch (i = i.substr(a + 1), s) {
                      case "json":
                        var l = null;
                        try {
                            l = JSON.parse(i);
                        } catch (e) {}
                        r[o] = l;
                        break;

                      case "int":
                        r[o] = t(i);
                        break;

                      case "float":
                        r[o] = n(i);
                        break;

                      case "bool":
                        r[o] = !!t(i);
                        break;

                      case "null":
                        r[o] = null;
                        break;

                      case "pageview_candidate":
                        r.pop();
                        break;

                      case "debug":
                        r.pop();
                    }
                }
            }
            return r;
        }
        async waitUntilUnblock(e) {
            var t = 10;
            if (!this.lastValidRequest) return Promise.reject(new Error("Last valid request is empty!"));
            var n = () => new Promise(e => {
                setTimeout(e, 15e3);
            }).then(() => {
                if (e.abort) throw new Error("Abort");
                return Object(p.a)(this.lastValidRequest).then(e => {
                    if (t--, !this.parseVkResponse(e.body)[5]) {
                        if (t > 0) return n();
                        throw new Error("Can't request data");
                    }
                });
            });
            return n().then((function() {
                return new Promise((function(e) {
                    setTimeout(e, 250);
                }));
            }));
        }
        isHlsLink(e) {
            return /\.m3u8(\?|$)/.test(e);
        }
        unmaskUrl(e) {
            return this.needUnmask(e) ? Object(w.a)([ e ], 'function(idsArr){var aFail=false;var bFail=false;var cFail=false;var unmaskUrl=function unmaskUrl(url){var _url="";if(!aFail&&window.sfUnmaskUrl){try{_url=window.sfUnmaskUrl(url)}catch(err){aFail=true}}if(!cFail&&!_url&&window.AudioPlayerHTML5){try{var res=null;var r={_isHlsUrl:function _isHlsUrl(url){res=url;return true},_initHls:function _initHls(){}};window.AudioPlayerHTML5.prototype._setAudioNodeUrl.apply(r,[null,url]);_url=res}catch(err){cFail=true}}if(!bFail&&!_url&&window.AudioPlayerFlash){try{var r={};window.AudioPlayerFlash.prototype.setUrl.apply(r,[url]);_url=r._url}catch(err){bFail=true}}if(typeof _url!=="string"){_url=""}return _url};idsArr.forEach(function(item){var url=unmaskUrl(item[2]);if(url){item[2]=url}});return idsArr}').then((function(t) {
                return t || e;
            })) : Promise.resolve(e);
        }
    }
    class Y {
        constructor(e, t) {
            this.pageType = void 0, this.cache = void 0, this.pageType = e, this.cache = t;
        }
        async extractLinks(e) {
            switch (this.pageType) {
              case r.j.vkPhoto:
                return new q(this.cache).extractLinks(e);

              case r.j.vkAlbum:
              case r.j.vkAlbums:
                return new j(this.cache).extractLinks(e);

              case r.j.vkClip:
              case r.j.vkClips:
              case r.j.vkVideo:
                return new R(this.cache).extractLinks(e);

              case r.j.vkStory:
                return new V(this.cache).extractLinks(e);

              case r.j.vkAudio:
              case r.j.vkAudios:
                return new Z(this.cache).extractLinks(e);

              default:
                throw new Error(`vkPageType ${this.pageType} is not supported`);
            }
        }
    }
    var J = n(37), X = n(28);
    const K = n(36), $ = Object(f.a)("YtShortLinkExtractor");
    class ee {
        constructor(e) {
            this.cache = void 0, this.needsFirefoxFallback = !1, this.cache = e;
        }
        async extractLinks(e) {
            const {mediaId: t, mediaUrl: n, noDash: r, checkSubtitles: o} = e;
            if (!t) throw new Error("videoId is not defined");
            if (this.cache[t]) return this.cache[t];
            if (!n) throw new Error("videoUrl is not defined");
            if (void 0 === r) throw new Error("noDash is not defined");
            if (void 0 === o) throw new Error("checkSubtitles is not defined");
            let i;
            if (s.a.isFirefox && !this.needsFirefoxFallback) try {
                i = await this.getYoutubeLinksForFirefox(e);
            } catch (t) {
                return console.error(t), this.needsFirefoxFallback = !0, this.extractLinks(e);
            } else i = await this.getYoutubeLinksFromBackground(t, n, r).catch(async e => ($ && $.error("getVideoLinks error", e), 
            this.getVideoInfoFromPlayerApi(t).then(e => {
                const {videoInfo: n} = e;
                return Object(C.a)({
                    action: "ytPrepareVideoInfo",
                    videoId: t,
                    checkSubtitles: o,
                    noDash: r,
                    config: n
                });
            }))).then(e => {
                if (!e.links) throw new Error("Links not found");
                return e;
            });
            let a = 0;
            if (i.links && (a = Object.keys(i.links).length, i.links.meta && a--), !i.links || !a) throw new Error("Links not found");
            if (!e.initData) throw new Error("initData is not defined");
            const {menuLinks: l} = this.prepMenuLinks(i.links, i.title || this.getTitleModify(), i.subtitles, e.initData);
            return this.cache[t] = this.transformLinks(l), this.cache[t];
        }
        async getYoutubeLinksFromBackground(e, t, n) {
            return Object(C.a)({
                action: "getYoutubeLinksFromConfig",
                extVideoId: e,
                url: t,
                noDash: n,
                config: {
                    args: {
                        video_id: e
                    }
                }
            }).then(e => {
                if (!e.links) throw new Error("getYoutubeLinksFromBackground. Links not found");
                return e;
            });
        }
        async getVideoInfoFromPlayerApi(e) {
            return this.requestInnertubeContext(e).then(t => {
                const n = "https://www.youtube.com/youtubei/v1/player?" + K.stringify({
                    key: t.INNERTUBE_API_KEY
                });
                return Object(p.a)({
                    url: n,
                    method: "POST",
                    localXHR: s.a.isGM,
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
        async requestInnertubeContext(e) {
            const t = "https://www.youtube.com/embed/" + encodeURIComponent(e);
            return Object(p.a)({
                url: t,
                localXHR: s.a.isGM
            }).then(e => {
                const t = Object(J.a)(e.body, /INNERTUBE_CONTEXT":(.*?),/);
                if (!t.length || !t[0].INNERTUBE_CONTEXT || !t[0].INNERTUBE_API_KEY) throw Error("INNERTUBE_CONTEXT not found");
                return t[0];
            });
        }
        prepMenuLinks(e, t, n, r) {
            const i = Object(o.a)(r);
            for (var a, s = i.popupMenu.prepareLinks.youtube(e, t, n), l = [], u = 0; a = s[u]; u++) l.push({
                prop: a
            });
            return {
                menuLinks: s = i.popupMenu.sortMenuItems(l)
            };
        }
        getTitleModify() {
            var e = this.getTitle();
            return e && (e = this.modifyTitle(e)), e;
        }
        getTitle() {
            var e = document.getElementById("watch-headline-title");
            if (e) return e.textContent;
            for (var t = document.getElementsByTagName("meta"), n = 0; n < t.length; n++) {
                var r = t[n].getAttribute("name");
                if (r && "title" == r.toLowerCase()) return t[n].getAttribute("content");
            }
            const o = 0 === location.host.indexOf("m.");
            return Object(X.a)() || o ? document.title.replace(/ - YouTube$/, "") : "";
        }
        modifyTitle(e) {
            return e = (e = (e = (e = (e = (e = e.replace(/[\x2F\x5C\x3A\x7C]/g, "-")).replace(/[\x2A\x3F]/g, "")).replace(/\x22/g, "'")).replace(/\x3C/g, "(")).replace(/\x3E/g, ")")).replace(/(?:^\s+)|(?:\s+$)/g, "");
        }
        transformLinks(e) {
            return JSON.parse(JSON.stringify(e)).map((t, n) => (t.prop.url = t.prop.href, t.prop.filename = t.prop.title, 
            t.prop.func = e[n].prop.func, delete t.prop.href, delete t.prop.title, t.prop));
        }
        getYoutubeLinksForFirefox(e) {
            const {mediaId: t, checkSubtitles: n, noDash: r} = e;
            return fetch("https://www.youtube.com/youtubei/v1/player?key=AIzaSyA8eiZmM1FaDVjRy-df2KTyQ_vz_yYM39w&prettyPrint=false", {
                body: `{"context": {"client": {"clientName": "ANDROID", "clientVersion": "17.31.35", "androidSdkVersion": 30, "hl": "en", "timeZone": "UTC", "utcOffsetMinutes": 0}}, "videoId": "${t}", "params": "CgIQBg==", "playbackContext": {"contentPlaybackContext": {"html5Preference": "HTML5_PREF_WANTS"}}, "contentCheckOk": true, "racyCheckOk": true}`,
                headers: {
                    "Content-Type": "application/json",
                    "X-Youtube-Client-Name": "3",
                    "X-Youtube-Client-Version": "17.31.35"
                },
                method: "POST"
            }).then(e => e.json()).then(e => {
                if (e && e.playabilityStatus && "LOGIN_REQUIRED" === e.playabilityStatus.status) throw new Error("LOGIN_REQUIRED");
                const o = {
                    player_response: e
                };
                return Object(C.a)({
                    action: "ytPrepareVideoInfo",
                    videoId: t,
                    checkSubtitles: n,
                    noDash: r,
                    config: o
                });
            }).catch(e => {
                throw e;
            });
        }
    }
    class te {
        constructor(e, t) {
            this.pageType = void 0, this.cache = void 0, this.pageType = e, this.cache = t;
        }
        async extractLinks(e) {
            switch (this.pageType) {
              case r.l.ytShort:
              case r.l.ytVideo:
              case r.l.ytFeedHistory:
              case r.l.ytFeedLibrary:
              case r.l.ytFeedSubscriptions:
              case r.l.ytFeedTrending:
              case r.l.ytLikedVideos:
              case r.l.ytWatchLater:
              case r.l.ytChannel:
              case r.l.ytGaming:
                return new ee(this.cache).extractLinks(e);

              default:
                throw new Error(`ytPageType ${this.pageType} is not supported`);
            }
        }
    }
    var ne = n(60);
    const re = Object(f.a)("ViShortLinkExtractor");
    class oe {
        constructor(e) {
            this.cache = void 0, this.cache = e;
        }
        async extractLinks(e) {
            const {mediaId: t} = e;
            if (!t) throw new Error("mediaId is not defined");
            if (this.cache[t]) return this.cache[t];
            if (!e.initData) throw new Error("initData is not defined");
            const n = await this.getVimeoLinks(t).catch(async e => (re && re.error("getVideoLinks error", e), 
            this.getVimeoLinksFromBackground(t))).then(e => {
                if (!e.links) throw new Error("getVimeoLinksFromBackground. Links not found");
                return e;
            }), {menuLinks: r} = this.prepMenuLinks(n.links, n.title, e.initData);
            return this.cache[t] = this.transformLinks(r), this.cache[t];
        }
        async getVimeoLinksFromBackground(e) {
            const t = [ /"video":{/, /"request":{/, /"files":/ ], n = Object(ne.a)(document.body.innerHTML, t);
            let r = null;
            return await n.some((function(e) {
                return Object(J.a)(e, t).some((function(e) {
                    if (e.video && e.request && e.request.files) return r = e, !0;
                }));
            })), Object(C.a)({
                action: "getVimeoLinksFromConfig",
                extVideoId: e,
                config: r
            }).then(e => {
                if (null === e || !e.links) throw new Error("getVimeoLinksFromConfig. Links not found in config");
                return e;
            });
        }
        async getVimeoLinks(e) {
            return Object(C.a)({
                action: "getVimeoLinks",
                extVideoId: e
            }).then(e => {
                if (!e.links) throw new Error("getVimeoLinks. Links not found");
                return e;
            });
        }
        transformLinks(e) {
            return e.map(e => (e.url = e.href, e.filename = e.title, delete e.href, delete e.title, 
            e));
        }
        prepMenuLinks(e, t, n) {
            return {
                menuLinks: Object(o.a)(n).popupMenu.prepareLinks.vimeo(e, t)
            };
        }
    }
    class ie {
        constructor(e, t) {
            this.pageType = void 0, this.cache = void 0, this.pageType = e, this.cache = t;
        }
        async extractLinks(e) {
            switch (this.pageType) {
              case r.i.viVideo:
              case r.i.viProfileFeed:
              case r.i.viBlogVideo:
                return new oe(this.cache).extractLinks(e);

              default:
                throw new Error(`viPageType ${this.pageType} is not supported`);
            }
        }
    }
    class ae {
        constructor(e) {
            this.cache = void 0, this.cache = e;
        }
        async extractLinks(e) {
            if (null == e || !e.initData) throw new Error("initData is not found");
            const t = Object(o.a)(e.initData);
            return Promise.resolve().then(() => {
                var e = this.newGetVideoId();
                if (!e) throw new Error("Video is not found");
                return this.cache[e] ? this.cache[e] : Object(C.a)({
                    action: "getDailymotionLinks",
                    extVideoId: e
                }).then(n => {
                    if (!n || !n.links) throw new Error("Links is not found");
                    const r = this.transformLinksFromLegacy(t.popupMenu.prepareLinks.dailymotion(n.links, n.title));
                    return this.cache[e] = r, r;
                });
            });
        }
        newGetVideoId() {
            var e = "", t = /\/video\/([^\/?#]+)/.exec(location.href);
            return t && (e = t[1]), e;
        }
        transformLinksFromLegacy(e) {
            return e.map(e => ({
                ext: e.ext,
                forceDownload: e.forceDownload,
                format: e.format,
                url: e.href,
                quality: e.quality,
                filename: e.title
            }));
        }
    }
    class se {
        constructor(e, t) {
            this.pageType = void 0, this.cache = void 0, this.pageType = e, this.cache = t;
        }
        async extractLinks(e) {
            switch (this.pageType) {
              case r.a.daVideo:
                return new ae(this.cache).extractLinks(e);

              default:
                throw new Error(`daPageType ${this.pageType} is not supported`);
            }
        }
    }
    class le {
        constructor() {
            this.CACHE_UID_KEY = "yandex_uid";
        }
        async extractLinks(e) {
            const {element: t} = e;
            if (!t) throw new Error("Element is not defined");
            const n = this.getInfo(t), r = await this.fetchTrack(n.albumId, n.trackId, this.prepareUID()), o = i.a.modify(`${n.artist ? n.artist + " -" : ""} ${n.trackName}.${r.codec}`);
            return [ {
                url: r.downloadURL,
                filename: o
            } ];
        }
        async fetchTrack(e, t, n) {
            return Object(C.a)({
                action: "yandexGetTrack",
                currentPage: location.href,
                album: e,
                uid: n,
                trackId: t
            }).then(e => ({
                codec: e.codec,
                downloadURL: e.downloadURL
            }));
        }
        getInfo(e) {
            const t = this.getArtist(e), n = this.getTrackName(e), {albumId: r, trackId: o} = this.getCompositionId(e);
            return {
                artist: t,
                trackName: n,
                albumId: r,
                trackId: o
            };
        }
        getArtist(e) {
            let t = "";
            function n(e) {
                null == e || e.childNodes.forEach(e => {
                    t += e ? e.textContent : "";
                });
            }
            const r = e.querySelector(".d-track__artists, .d-artists"), o = document.querySelector(".sidebar-album .d-artists"), i = document.querySelector(".d-artists, .page-artist__title");
            return r && 0 !== (null == r ? void 0 : r.childNodes.length) ? n(r) : "" == t && o && 0 !== (null == o ? void 0 : o.childNodes.length) ? n(o) : "" === t && i && n(i), 
            t.trim();
        }
        getTrackName(e) {
            let t = "", n = e.querySelector(".track__name-innerwrap, .d-track__name");
            return null == n || n.childNodes.forEach(e => {
                t += e ? e.textContent + " " : "";
            }), t.trim();
        }
        getCompositionId(e) {
            var t;
            let n = null === (t = e.querySelector(".d-track__name a, .track__name-innerwrap a")) || void 0 === t ? void 0 : t.getAttribute("href");
            if (void 0 === typeof n) throw new Error("Can't find album element");
            if (null != n && "" != n) {
                const [e, t, r] = /album\/([0-9]+)\/track\/([0-9]+)/.exec(n);
                if (null === t || null === r) throw new Error("albumId or trackId is not defined");
                return {
                    albumId: t,
                    trackId: r
                };
            }
            throw new Error("Album links are empty");
        }
        prepareUID() {
            let e = this.get(this.CACHE_UID_KEY);
            return e || (e = this.getUidFromHTML(), this.set(this.CACHE_UID_KEY, e, 720)), e;
        }
        getUidFromHTML() {
            const e = document.querySelectorAll("script[nonce]");
            let t = 0;
            for (const n of e) {
                const e = n.innerText.match(/"uid":"([0-9]+)"/);
                if (e) {
                    t = Number(e[1]);
                    break;
                }
            }
            return t;
        }
        set(e, t, n) {
            localStorage.setItem(e, JSON.stringify({
                val: t,
                expires: n ? Date.now() + 60 * n * 1e3 : -1
            }));
        }
        get(e) {
            const t = localStorage.getItem(e);
            if (!t) return null;
            const {val: n, expires: r} = JSON.parse(t);
            return n && -1 === r || r > Date.now() ? n : null;
        }
    }
    class ue {
        constructor(e, t) {
            this.pageType = void 0, this.cache = void 0, this.pageType = e, this.cache = t;
        }
        async extractLinks(e) {
            switch (this.pageType) {
              case r.k.yaArtist:
              case r.k.yaAlbum:
              case r.k.yaTrack:
              case r.k.yaPlaylist:
                return new le(this.cache).extractLinks(e);

              default:
                throw new Error(`viPageType ${this.pageType} is not supported`);
            }
        }
    }
    var ce = n(5), de = n(20), pe = n(30), fe = n(42), he = n(16), ge = n(61);
    class Ae {
        async extractLinks(e) {
            const {element: t, initData: n} = e;
            if (!n) throw new Error("initData is not defined");
            if (!t) throw new Error("element is not defined");
            const r = Object(o.a)(n), i = "m.ok.ru" === location.host ? await this.getMobilePlayerOptions(t, r) : await this.getPlayerOptions(t, r);
            if (!i) throw new Error("Info not defined");
            if (i.metadata) return await this.prepareHlsLinks(i.metadata);
            if (i.request) {
                const e = await Object(C.a)(i.request);
                return await this.prepareHlsLinks(e);
            }
            throw new Error("Metadata or Request not defined");
        }
        async getPlayerOptions(e, t) {
            var n = Object(he.a)(e, "[data-player-element-id][data-options]"), r = n && n.dataset.options;
            if (r) {
                try {
                    r = JSON.parse(r);
                } catch (e) {}
                var o = r.flashvars;
                if (o) {
                    if (o.metadata) {
                        var i = null;
                        try {
                            i = JSON.parse(o.metadata);
                        } catch (e) {}
                        if (i) return {
                            metadata: i
                        };
                    }
                    if (o.metadataUrl) return {
                        request: {
                            action: "getOkMetadata",
                            url: decodeURIComponent(o.metadataUrl)
                        }
                    };
                    var a = r.url;
                    if (a) {
                        var s = t.embedDownloader.checkUrl(a);
                        if (s) return {
                            request: s
                        };
                        if (-1 !== a.indexOf("rutube.")) return {
                            request: {
                                action: "getRutubeLinks",
                                links: [ a ]
                            }
                        };
                    }
                }
            }
        }
        prepareHlsLinks(e) {
            const t = e.movie;
            let n = (t && t.title ? t.title : e.compilationTitle) || document.title;
            const r = new RegExp("RESOLUTION=\\d+x(\\d+)\\n(https?.*?)\\n", "g");
            return Object(p.a)(e.hlsManifestUrl).then(e => Object(fe.a)(e.body, r)).then(e => e.map(e => ({
                title: n,
                ext: "mp4",
                format: "MP4",
                quality: parseInt(e[1]),
                href: "#mux",
                forceDownload: !1,
                noSize: !0,
                func(t) {
                    t.preventDefault(), Object(de.a)(Object(ce.e)(pe.a, {
                        filename: i.a.modify(n) + ".mp4",
                        format: "mp4",
                        sources: [ {
                            url: e[2],
                            format: "mp4"
                        } ],
                        convertType: "hls"
                    }), "sf-muxer-parent");
                }
            })));
        }
        async getMobilePlayerOptions(e, t) {
            let n, r;
            try {
                n = JSON.parse(e.dataset.video);
            } catch (e) {}
            if (n && n.movieId) r = n.movieId, r.indexOf("_") && (r = r.split("_")[0]); else {
                r = new URLSearchParams(location.search).get("st.discId");
            }
            if (!r) throw new Error("getMobilePlayerOptions. video id not found");
            const o = await Object(C.a)({
                action: "okRequestVideoPage",
                videoId: r
            });
            if (!o) throw new Error("getMobilePlayerOptions. videoPage fetch failed");
            const i = Object(ge.a)(o, "").querySelector(".vp_video .vid-card_cnt");
            if (!i) throw new Error("getMobilePlayerOptions. Video dataset not found");
            const a = this.getPlayerOptions(i, t);
            return a.metadata ? a.metadata.dataMobile = n : a.metadata = {
                dataMobile: n
            }, a;
        }
    }
    var me = n(36), ve = n.n(me), ye = n(55), be = n(34);
    class we {
        constructor(e) {
            this.cache = void 0, this.cache = e;
        }
        async extractLinks(e) {
            const {element: t} = e;
            if (!t) throw new Error("element is not defined");
            const n = Object(ye.a)(t);
            let r = await this.getNodeTrack(n), o = await this.prepareTrackForDownload(r.id);
            return [ {
                url: o.downloadUrl,
                filename: o.filename,
                size: o.size,
                duration: o.duration
            } ];
        }
        async getNodeTrack(e) {
            return Object(w.a)([ e ], 'function(nodePath){var el=document.querySelector(nodePath);if(el&&el.props&&el.props.track){return el.props.track}if(el&&el.model&&el.model._data.get("track")){return el.model._data.get("track")}throw new Error("Track information not found")}');
        }
        async prepareTrackForDownload(e) {
            this.cache.jsessionId || await this.getJsSessionId();
            const t = await this.getTrackUrlById(e);
            if (!t.track) throw new Error("Track is not found");
            if (!t.play) throw new Error("Track url is not found");
            const n = await this.getClientHash(t.play);
            return {
                filename: i.a.modify(`${t.track.ensemble} – ${t.track.name}.mp3`),
                downloadUrl: `${t.play}&${ve.a.stringify({
                    clientHash: n
                })}`,
                duration: t.track.duration,
                size: t.track.size || -1
            };
        }
        getJsSessionId() {
            return ("m.ok.ru" === location.host ? () => {
                const e = Array.from(document.querySelectorAll("script"));
                for (let t = 0; t < e.length; t++) {
                    if (!e[t].textContent) continue;
                    const n = e[t].textContent.match(/"jsid":"(.*?)"/);
                    if (n && n[1]) return Promise.resolve(n[1]);
                }
                return Promise.resolve(void 0);
            } : () => new Promise((function(e, t) {
                let n = location.protocol + "//" + location.host + "/web-api/music/conf";
                Object(L.a)({
                    type: "POST",
                    url: n,
                    data: "_",
                    json: !0,
                    localXHR: !0
                }, (function(n, r, o) {
                    !n && o && o.sid ? e(o.sid) : t(new Error("Get jsSessionId error!"));
                }));
            })))().then(e => {
                this.cache.jsessionId = e;
            }).catch(e => {
                throw new Error("getJsSessionId error ", e);
            });
        }
        getClientHash(e) {
            return Promise.resolve(function() {
                const t = n(64);
                return function(e, t) {
                    for (var n, r = [ 4, 3, 5, 6, 1, 2, 8, 7, 2, 9, 3, 5, 7, 1, 4, 8, 8, 3, 4, 3, 1, 7, 3, 5, 9, 8, 1, 4, 3, 7, 2, 8 ], o = t(/md5=(\w*)/g.exec(e)[1] + "secret"), i = o.length, a = "", s = 0, l = 0; l < i; l++) s += parseInt(o[l], 16);
                    for (var u = 0; u < i; u++) {
                        var c = parseInt(o[u], 16);
                        n = u === i - 1 ? c : parseInt(o[u + 1], 16), a += Math.abs(s - c * n * r[u]);
                    }
                    return a;
                }(e, e => t(e).toString());
            }());
        }
        async getTrackUrlById(e) {
            if (this.cache.trackIdPromise = {}, this.cache.payloadTracks = {}, this.cache.trackIdPromise[e]) return this.cache.trackIdPromise[e];
            if (this.cache.payloadTracks[e]) return this.cache.payloadTracks[e];
            const t = `https://wmf.ok.ru/play;jsessionid=${this.cache.jsessionId}?` + ve.a.stringify({
                tid: e
            });
            return this.cache.trackIdPromise[e] = Object(w.a)([ t ], "function(url){return fetch(url).then(function(response){return response.json()})}").then(t => {
                const n = Object.keys(this.cache.payloadTracks);
                return n.length > 20 && delete this.cache.payloadTracks[n[0]], this.cache.payloadTracks[e] = t, 
                t;
            }).then(...Object(be.a)(() => {
                delete this.cache.trackIdPromise[e];
            }));
        }
    }
    class Ce {
        constructor(e) {
            this.cache = void 0, this.cache = e;
        }
        async extractLinks(e) {
            var t, n, r, o;
            const {element: a} = e;
            if (!a) throw new Error("Element is not defined");
            if (!(a instanceof HTMLElement)) throw new Error("Element is not supported");
            const s = a.closest(".track-with-cover"), l = s.dataset.trackId;
            this.cache.jsessionId || await this.getJsSessionId();
            const u = await this.sendMonoRequest(l), c = await this.getClientHash(u.play), d = u.play + (c ? "&clientHash=" + c : ""), p = u.track, f = Math.floor(p.size / p.duration / 125), h = null !== (t = null === (n = s.querySelector('[data-l="t,artist"]')) || void 0 === n ? void 0 : n.textContent) && void 0 !== t ? t : "", g = null !== (r = null === (o = s.querySelector('[data-l="t,title"]')) || void 0 === o ? void 0 : o.textContent) && void 0 !== r ? r : "";
            return [ {
                url: d,
                filename: i.a.modify(`${h} - ${g}`),
                bitrate: f,
                size: p.size
            } ];
        }
        sendMonoRequest(e) {
            return new Promise((t, n) => {
                s.a.sendMessage({
                    action: "getOdnoklassnikiAudioLinks",
                    url: location.href,
                    trackId: e,
                    jsessionId: this.cache.jsessionId
                }, (function(e) {
                    e.data ? t(e.data) : n(new Error("Get links from data error"));
                }));
            });
        }
        getClientHash(e) {
            return Promise.resolve(function() {
                const t = n(64);
                return function(e, t) {
                    for (var n, r = [ 4, 3, 5, 6, 1, 2, 8, 7, 2, 9, 3, 5, 7, 1, 4, 8, 8, 3, 4, 3, 1, 7, 3, 5, 9, 8, 1, 4, 3, 7, 2, 8 ], o = t(/md5=(\w*)/g.exec(e)[1] + "secret"), i = o.length, a = "", s = 0, l = 0; l < i; l++) s += parseInt(o[l], 16);
                    for (var u = 0; u < i; u++) {
                        var c = parseInt(o[u], 16);
                        n = u === i - 1 ? c : parseInt(o[u + 1], 16), a += Math.abs(s - c * n * r[u]);
                    }
                    return a;
                }(e, e => t(e).toString());
            }());
        }
        getJsSessionId() {
            return new Promise((function(e, t) {
                let n = location.protocol + "//" + location.host + "/web-api/music/conf";
                Object(L.a)({
                    type: "POST",
                    url: n,
                    data: "_",
                    json: !0,
                    localXHR: !0
                }, (function(n, r, o) {
                    !n && o && o.sid ? e(o.sid) : t(new Error("Get jsSessionId error!"));
                }));
            })).then(e => {
                this.cache.jsessionId = e;
            }).catch(e => {
                throw new Error("getJsSessionId error ", e);
            });
        }
    }
    class xe {
        constructor(e, t) {
            this.pageType = void 0, this.cache = void 0, this.pageType = e, this.cache = t;
        }
        async extractLinks(e) {
            switch (this.pageType) {
              case r.e.okMusic:
                return new we(this.cache).extractLinks(e);

              case r.e.okVideo:
                return (new Ae).extractLinks(e);

              case r.e.okProfileMusic:
                return new Ce(this.cache).extractLinks(e);

              default:
                throw new Error(`igPageType ${this.pageType} is not supported`);
            }
        }
    }
    class ke {
        static createLinkExtractor(e) {
            switch (!0) {
              case Object.values(r.c).some(t => t === e):
                return new y(e, this.cache);

              case Object.values(r.g).some(t => t === e):
                return new S(e, this.cache);

              case Object.values(r.l).some(t => t === e):
                return new te(e, this.cache);

              case Object.values(r.i).some(t => t === e):
                return new ie(e, this.cache);

              case Object.values(r.a).some(t => t === e):
                return new se(e, this.cache);

              case Object.values(r.b).some(t => t === e):
                return new c(e, this.cache);

              case Object.values(r.j).some(t => t === e):
                return new Y(e, this.cache);

              case Object.values(r.k).some(t => t === e):
                return new ue(e, this.cache);

              case Object.values(r.f).some(t => t === e):
                return new E(e, this.cache);

              case Object.values(r.e).some(t => t === e):
                return new xe(e, this.cache);

              default:
                throw new Error(`pageType ${e} is not supported`);
            }
        }
    }
    ke.cache = {};
}, function(e, t, n) {
    "use strict";
    var r = n(19), o = n(0);
    var i = function() {
        const e = arguments[0];
        for (let t = 1, n = arguments.length; t < n; t++) {
            const n = arguments[t];
            for (let t in n) void 0 !== n[t] && (delete e[t], e[t] = n[t]);
        }
        return e;
    };
    var a = function(e, t) {
        let n = null;
        return function() {
            const r = this, o = arguments;
            clearTimeout(n), n = setTimeout((function() {
                e.apply(r, o);
            }), t);
        };
    }, s = n(12), l = n(22), u = n(16), c = n(51), d = n(3);
    var p = {
        animation: "none 0s ease 0s 1 normal none running",
        backfaceVisibility: "visible",
        background: "transparent none repeat 0 0 / auto auto padding-box border-box scroll",
        border: "medium none currentColor",
        borderCollapse: "separate",
        borderImage: "none",
        borderRadius: "0",
        borderSpacing: "0",
        bottom: "auto",
        boxShadow: "none",
        boxSizing: "content-box",
        captionSide: "top",
        clear: "none",
        clip: "auto",
        color: "inherit",
        columns: "auto",
        columnCount: "auto",
        columnFill: "balance",
        columnGap: "normal",
        columnRule: "medium none currentColor",
        columnSpan: "1",
        columnWidth: "auto",
        content: "normal",
        counterIncrement: "none",
        counterReset: "none",
        cursor: "auto",
        direction: "ltr",
        display: "inline",
        emptyCells: "show",
        float: "none",
        font: "normal normal normal normal medium/normal inherit",
        height: "auto",
        hyphens: "none",
        left: "auto",
        letterSpacing: "normal",
        listStyle: "disc outside none",
        margin: "0",
        maxHeight: "none",
        maxWidth: "none",
        minHeight: "0",
        minWidth: "0",
        opacity: "1",
        orphans: "0",
        outline: "medium none invert",
        overflow: "visible",
        overflowX: "visible",
        overflowY: "visible",
        padding: "0",
        pageBreakAfter: "auto",
        pageBreakBefore: "auto",
        pageBreakInside: "auto",
        perspective: "none",
        perspectiveOrigin: "50% 50%",
        position: "static",
        right: "auto",
        tabSize: "8",
        tableLayout: "auto",
        textAlign: "inherit",
        textAlignLast: "auto",
        textDecoration: "none solid currentColor",
        textIndent: "0",
        textShadow: "none",
        textTransform: "none",
        top: "auto",
        transform: "none",
        transformOrigin: "50% 50% 0",
        transformStyle: "flat",
        transition: "none 0s ease 0s",
        unicodeBidi: "normal",
        verticalAlign: "baseline",
        visibility: "visible",
        whiteSpace: "normal",
        widows: "0",
        width: "auto",
        wordSpacing: "normal",
        zIndex: "auto",
        all: "initial"
    }, f = n(1), h = n(53), g = n(6), A = n(13), m = n(7), v = n(17), y = n(38), b = n(49), w = n(5), C = n(30), x = n(20), k = n(2), I = n(27), _ = n(68), E = n.n(_), D = n(62), S = n(34), M = n(39);
    const O = Object(m.a)("queueMuxer"), F = new M.a("Queue destroyed", "DESTROYED");
    var j = class {
        constructor(e, t) {
            this.onStartTask = e => {}, this.onStatus = (e, t) => {}, this.onProgress = (e, t) => {}, 
            this.onProgressStatus = e => {}, this.onError = e => {}, this.container = e, this.tasks = Object.assign([], t), 
            this._mediaMuxer = null, this.destroyed = !1;
        }
        start() {
            const e = this.tasks.shift();
            if (e && !this.destroyed) return this._runTask(e).then(...Object(S.a)(() => this.start()));
            if (this.destroyed) for (let e = 0; e <= this.tasks.length; e++) this.onError(F);
            return O.log("queue finished"), Promise.resolve();
        }
        destroy() {
            this.destroyed = !0, O.log("queue destroy"), this._muxerDestroy(), this.tasks = [];
        }
        _muxerDestroy() {
            this.destroyed || (this._mediaMuxer && this._mediaMuxer.destroy(), this._mediaMuxer = null);
        }
        _runTask(e) {
            return O.log("run task: ", e), this.onStartTask(e), this._mediaMuxer = new D.a(this.container), 
            this._mediaMuxer.onStatus = this.onStatus, this._mediaMuxer.onProgress = this.onProgress, 
            this._mediaMuxer.onProgressStatus = this.onProgressStatus, this._mediaMuxer.init().then(() => {
                if (this.destroyed) throw F;
                return "hls" === e.format ? this._mediaMuxer.hlsToMp3(e.sources, e.filename) : this._mediaMuxer.join(e.sources, e.filename);
            }).then(() => {
                if (this.destroyed) throw F;
                return this._mediaMuxer.download();
            }).then(...Object(S.a)(() => {
                this._muxerDestroy(), O.log("mediaMuxer destroy: ", e);
            })).catch(e => {
                O.error("Download error: ", e), this.onError(e);
            });
        }
    };
    const T = Object(m.a)("ConverterPopup"), L = k.c.memo(e => {
        let {files: t, onDone: n} = e;
        const r = k.c.useRef(), i = Object(I.a)(E.a), [a, s] = k.c.useState(0), [l, u] = k.c.useState(0), [c, d] = k.c.useState(0), [p, f] = k.c.useState("Prepare"), [h, g] = k.c.useState(null), [A, m] = k.c.useState(!1);
        return k.c.useEffect(() => {
            let e = !0;
            const o = new j(r.current, t);
            o.onStartTask = t => {
                e && (d(0), f("Prepare"), g(t), s(e => ++e));
            }, o.onProgress = t => {
                e && d(Math.trunc(100 * t));
            }, o.onError = t => {
                T.error("item download error: ", t), e && u(e => ++e);
            }, o.onProgressStatus = t => {
                e && f(t);
            };
            return o.start().then(...Object(S.a)(() => {
                e && (m(!0), n && n());
            })).catch(e => {
                T.error("queue error: ", e);
            }), () => {
                e = !1, o.destroy();
            };
        }, []), k.c.createElement("div", {
            ref: r
        }, h && !A && k.c.createElement("div", null, k.c.createElement("div", {
            className: i.information
        }, o.a.i18n.getMessage("someFilesNeedConverted")), k.c.createElement("div", {
            className: i.filesCount
        }, o.a.i18n.getMessage("files"), ": (", a, " / ", t.length, ")"), k.c.createElement(N, {
            styles: i,
            title: h.filename,
            status: p,
            progress: c
        })), A && k.c.createElement("div", null, k.c.createElement("div", {
            className: i.information
        }, o.a.i18n.getMessage("conversionCompleted")), k.c.createElement("div", null, o.a.i18n.getMessage("success"), ": ", t.length - l, ". ", o.a.i18n.getMessage("errors"), ": ", l, ".")));
    }), N = k.c.memo(e => {
        let {styles: t, title: n, status: r, progress: o} = e;
        const i = {
            width: o + "%"
        };
        return k.c.createElement("div", {
            className: t.progress
        }, k.c.createElement("div", {
            className: t.line,
            style: i
        }), k.c.createElement("div", {
            className: t.text
        }, k.c.createElement("div", {
            className: t.filename
        }, n), k.c.createElement("div", null, r)));
    });
    var z = L, B = n(69), P = n.n(B), R = n(46);
    const q = Object(m.a)("retryFn"), V = (e, t) => t().catch(n => {
        if (e.retries <= 1) throw q.error("The number of attempts has been exhausted", n.message), 
        n;
        return Object(R.a)(e.timeout).then(() => (q.warn("retry", n.message), V({
            timeout: e.timeout,
            retries: --e.retries
        }, t)));
    });
    var H = V;
    const U = Object(m.a)("focusSwitcher");
    var W = function() {
        let e;
        const t = {
            waitFocus: null,
            removeListeners: null
        }, n = () => {
            U.info("focus out"), t.isFocus = !1;
        };
        return window.addEventListener("blur", n, {
            once: !0
        }), t.waitFocus = new Promise(t => {
            e = () => {
                U.info("focus in"), t();
            }, window.addEventListener("focus", e, {
                once: !0
            });
        }), t.removeListeners = () => {
            window.removeEventListener("focus", e), window.removeEventListener("blur", n);
        }, t;
    }, Q = n(31);
    const G = Object(m.a)("televzrBridge");
    function Z() {
        G.log("Init Tz Bridge Server");
        const e = W(), t = document.createElement("iframe");
        return t.src = "televzr://bridgeInit", document.body.appendChild(t), Object(R.a)(1e3).then(() => !1 === document.hasFocus() ? e.waitFocus : null).then(() => {
            e.removeListeners(), t.remove();
        });
    }
    function Y(e) {
        return o.a.callFn("televzr.infoRequest", [ e ]).then(e => {
            let {app: t, user: n} = e;
            return G.log("Televzr Found", t, n), {
                app: t,
                user: n
            };
        }).catch(e => {
            if (G.error("Fetch televzr info error", e), e.code) throw e;
            throw new M.a("Televzr not found", "televzr_not_found");
        });
    }
    var J = {
        initBridgeServer: Z,
        checkAvailability: function() {
            const e = {
                timeout: 1e3,
                retries: 3
            }, t = e => {
                let {user: t} = e;
                return Object(Q.a)([ "userInfo" ]).then(e => {
                    const n = e.userInfo;
                    if (!n) throw new M.a("Helper not auth", "code_not_authorized");
                    if (!t.isAuth || !t.isPremium && n.isPremium) return o.a.callFn("televzr.appAuth");
                });
            };
            return Y(2e3).then(t, n => {
                if ("televzr_not_found" === n.code) return Z().then(() => H(e, () => Y(2e3))).then(t);
                throw n;
            });
        },
        startDownload: function(e, t, n) {
            return o.a.callFn("televzr.startDownloadRequest", [ e, t, n ]);
        },
        pingTelevzr: function() {
            const e = {
                timeout: 1e3,
                retries: 2
            };
            return Y(1e3).catch(t => {
                if ("televzr_not_found" === t.code) return Z().then(() => H(e, () => Y(1e3)));
                throw t;
            });
        }
    }, X = n(24), K = n.n(X);
    const $ = (e, t) => k.c.useCallback(n => {
        let {label: r, action: i} = n;
        o.a.sendMessage({
            action: "track",
            t: "event",
            tid: e,
            ec: t,
            el: r || "",
            ea: i
        });
    }, []), ee = k.c.memo(e => {
        let {className: t, name: n} = e;
        return k.c.createElement("img", {
            className: t,
            src: te[n]
        });
    }), te = {
        televzr: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAXRaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDMtMTBUMTQ6MDc6MzQrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTAzLTEwVDE0OjE5OjIwKzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTAzLTEwVDE0OjE5OjIwKzAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4YmRjOTI1Yy0yZjM0LTYzNDEtYmYwYi00MzViNTYwMTQ3ODEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1ZGExNzMyZi1kYjdkLWYxNGYtYjI5Mi1kYzY1M2Y0OTA2M2QiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0Njc5MTViOC1jYWVlLWIxNDgtODdhZi00NTJhMTNiZTMyNjAiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2NzkxNWI4LWNhZWUtYjE0OC04N2FmLTQ1MmExM2JlMzI2MCIgc3RFdnQ6d2hlbj0iMjAyMC0wMy0xMFQxNDowNzozNCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo4YmRjOTI1Yy0yZjM0LTYzNDEtYmYwYi00MzViNTYwMTQ3ODEiIHN0RXZ0OndoZW49IjIwMjAtMDMtMTBUMTQ6MTk6MjArMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5pQ7PdAAAHUUlEQVRYhcWXXYxdVRXHf2vvc869dz7uzNy2Q0lbamkppZRQLZYa0BCE1JSPGjAtEH0Bow9GDQbKkw8+NYqJaKLE+KCJlWgiUj6SGlpIlBaYSi3wUCHWh0I7nc709s505s49956z9/LhnPsx01af0H2zc/a5+5y91/6v//qvdURV+X+2YNG9AQQotP9QVVFVVUVU1YF2bG6PRFAQLwIgKiKIQHYVgHK+dgOIgc6pew2wqvq0c/5x7x3eK6rgvUfVA4JXhR7E2iNpXyUbGzHdCRGMGMQI1poz1tpbRWQSSAGV/BBr0jS9u9lKfqnek6aOOG5Srzfo6y9hrSFNXG6Morkhcw7enIG6g9AIRSuUrDAQGsqhYSgylCNDX2AoGCEwYIxNwij8KIrC7cC/RFWjJEl3xHH8wtzcPEeOHOPo0fc5ffostQszbLrpeh555H5WrLgqg8kajDEdeN++CL8/p8ROwSt4j6jDeEeonpJ4yhYqkbB+MGTLkoihyFIoFs4WCtE1kqbplvp842i1Om1+8fN9HDp4mLjZQuj6ccuWTTz+vUfZvHnjJSRyCi9X4aXz2f5d/2RIqfd45/BJAvE814UJD68usbwU0N9futXu2fPUh81mq/i7fS/y/B8P4L3HGoMx0jnl6dPneOut4/T1lVi7bjVBYGkz0QCrizCdwqm4y4eME4IYiwkCbBRhiiUmY890PWZj2WJUHzNJkg5OTEzx2qEjqGqbtQuatYazZyfZu/dZfvz0r5g8dx4RQVXxqhRFeWCpcmOf4ton73SP+qwjQjg4yAcNw6l6SpK0jHHeMzExRbVa6yx6uS4iNJtNnnvuJfbs+SHHj58AJIsUVUassntUWRVpN1oWd+8RI7RsyETsQRXjVWm1Epzzl5wc71HnekIvc8nY2Hs8+cRe/vT8n2m1WgCkXlkZKbuXKcM2M+Kyh/GKipD47BmTTfRGdt5V6b/+BipfuBM7MIB615mzVhgfP8fevc/yzDO/plqdzoxwnhv6PDuXeCK60Kv3oB6875ITUK8EGZk0+2kuHgoSWEbve4DhLduYOf43Jl74A/WTH3YUR4wQxzH7fruf8fFzPPnkN7jqqqV459k2AB/Nw+u1TJzyoMgH0nGJV8W0xSWTtbbSKWIMJsoUufzpW1jz3acY3fFlbF//Ircohw4e5mc//Q2zs3WcV4x67hzyjAYe5xYiod51Eei6IEeh59obw5qkBEMjXL3rq1zzze/Qt/Y6tMddIsLrr7/Ju8dPoKqkqadiPeuLHu88urj77h6mlyy03UCGSNti7xw+TUGV8s238KlvPUH5ps9ki+dAzM83+OCDkzjnSJ1DnWPUOmi/n/cMPZ+7wGcc6LCgvXmbE/kLmkeIAmIUOzCILZc7hCKHM262SNM8ZwA4ULcwsBQyFHLyB93kQh7vdMbqPT7NTgECRojPnGHywItMjx2m/bAqhKFl5crlOOdwziHAVAw+BbNA2yTnQRYUwYIMt8AFmkGWptl8mjDz96NMHdhPY/zjXDEFFJxzbNq0kRtvXE+rlaCqzDv452xu+2J5cR5VWYhA5gLfjUOfJRBVpTkxztTBV5g+egTfjEFMx1DvPWuuXcWjj+1icLCfVitBgLEZOFXPl1pkgDqHqs0M8NoVnm55pmjSojb2BvHZM9Te+gvx6VM55NIJVYDNmzfy2NcfYu3a1TSbLYwIJ+fhtSlI04XJqYtAinqDX4CA5nog7XoLamOHqY0dzjY00iWoVwqFiC/edTu7dt1LpTJCs9nK/J7Ay5NQi7NXLldx+jRFNUDVEHjfzYBdFyxqQq5e4NWzbGmFB79yD3fc8TmiKKTZbCLAnINXpjIVNFwKfa8LRD3qITAGRirDDA7202g0EHM50GhLAxs2rOPhh3Zy/Ya1GT+aWTJKPByswT8uZo9fhnudFqJUQsGpEhQLRZYuq/DZrTfz8kuvYrCXgKBeiaKQ2z9/Kzt3bqeyZIQ4bnXBAd6+CO/UrnzqdnPec12lxIoihGFIMDJU3jo/3zj64K57GB+f4Ng773fyv0hWCVdGhrnn3ru47batRFFI3Ig7Cwpwog5vXMhQ6K1nekQ1u1dYWY740soSRQMjw0M7RFVt9cL0TybOV79dq9Y49OpfOfbOe0xNVpmdq3P18lHuu38769at6VHK7uYfN+FAFWZ6GJ+V54I1QmQNpdAyXAy4drjItuUllhWEyshQffnosmFRVauqvjZ98QdT1QvfbyUJcdxkdnaOizOzDJXLDAz0k7SSTGad75TnsVPenIHzqRAaIbJCKbRZWV4IGC5YhgqWwcjQZ4WCUYLAsmRkWJcuqWy1xrwrqto2fFWz1dp9ca7+o0ajQZKkpM6RpmmWUlUX4CtkVXCi+fcHWdiZPGKMCMYIxhpCGxCEIaViUcuD/V8rFor7RfBAfMUa8D/10+MT0h6f+viM9M6dmzov5y/URFWpzzfkv63V/jL6pNvi2O4UmYs/Tj+pdqVTqvkfGXDF9m/pUjcFDUhV2wAAAABJRU5ErkJggg==",
        check: "data:image/svg+xml,%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' fill='green' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M497.36,69.995c-7.532-7.545-19.753-7.558-27.285-0.032L238.582,300.845l-83.522-90.713c-7.217-7.834-19.419-8.342-27.266-1.126c-7.841,7.217-8.343,19.425-1.126,27.266l97.126,105.481c3.557,3.866,8.535,6.111,13.784,6.22c0.141,0.006,0.277,0.006,0.412,0.006c5.101,0,10.008-2.026,13.623-5.628L497.322,97.286C504.873,89.761,504.886,77.54,497.36,69.995z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M492.703,236.703c-10.658,0-19.296,8.638-19.296,19.297c0,119.883-97.524,217.407-217.407,217.407c-119.876,0-217.407-97.524-217.407-217.407c0-119.876,97.531-217.407,217.407-217.407c10.658,0,19.297-8.638,19.297-19.296C275.297,8.638,266.658,0,256,0C114.84,0,0,114.84,0,256c0,141.154,114.84,256,256,256c141.154,0,256-114.846,256-256C512,245.342,503.362,236.703,492.703,236.703z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E",
        warning: "data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M256,0C114.497,0,0,114.507,0,256c0,141.503,114.507,256,256,256c141.503,0,256-114.507,256-256C512,114.497,397.493,0,256,0z M256,472c-119.393,0-216-96.615-216-216c0-119.393,96.615-216,216-216c119.393,0,216,96.615,216,216C472,375.393,375.385,472,256,472z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M256,128.877c-11.046,0-20,8.954-20,20V277.67c0,11.046,8.954,20,20,20s20-8.954,20-20V148.877C276,137.831,267.046,128.877,256,128.877z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Ccircle cx='256' cy='349.16' r='27'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E",
        circleLoading: "data:image/svg+xml,%3Csvg enable-background='new 0 0 497 497' viewBox='0 0 497 497' xmlns='http://www.w3.org/2000/svg'%3E%3Cg%3E%3Ccircle cx='98' cy='376' fill='%23909ba6' r='53'/%3E%3Ccircle cx='439' cy='336' fill='%23c8d2dc' r='46'/%3E%3Ccircle cx='397' cy='112' fill='%23e9edf1' r='38'/%3E%3Cellipse cx='56.245' cy='244.754' fill='%237e8b96' rx='56.245' ry='54.874'/%3E%3Cellipse cx='217.821' cy='447.175' fill='%23a2abb8' rx='51.132' ry='49.825'/%3E%3Cellipse cx='349.229' cy='427.873' fill='%23b9c3cd' rx='48.575' ry='47.297'/%3E%3Cellipse cx='117.092' cy='114.794' fill='%235f6c75' rx='58.801' ry='57.397'/%3E%3Cellipse cx='453.538' cy='216.477' fill='%23dce6eb' rx='43.462' ry='42.656'/%3E%3Ccircle cx='263' cy='62' fill='%234e5a61' r='62'/%3E%3C/g%3E%3C/svg%3E"
    };
    var ne = ee;
    const re = Object(m.a)("TzDownload"), oe = "STATE_AUTH_CHECK", ie = "STATE_TELEVZR_SEARCH", ae = "STATE_DOWNLOAD_PREPARING", se = "STATE_DOWNLOAD_STARTED", le = "STATE_ERROR", ue = "https://sf-helper.net/helper-pro", ce = k.c.memo(e => {
        let {unmountLayer: t, link: n, positionStyle: r} = e;
        const i = k.c.useRef(), a = Object(I.a)(P.a), [s, l] = k.c.useState(null), [u, c] = k.c.useState(null), [d, p] = k.c.useState(null), f = $("UA-67738130-20", "helper-try-pro"), h = $("UA-181742122-2", "download"), g = k.c.useCallback(e => {
            const t = e.code || e.message;
            c(t), l(le), "EEXIST" === t && h({
                label: "download",
                action: "video-is-already"
            }), "televzr_not_found" === t && h({
                label: "download",
                action: "televzr_not_found"
            }), "quality_not_found" === t && h({
                label: "download",
                action: "quality_not_found"
            }), "data_invalid" === t && h({
                label: "download",
                action: "data_invalid"
            });
        }, []), A = k.c.useMemo(() => ({
            [oe]: o.a.i18n.getMessage("authCheck"),
            [ie]: o.a.i18n.getMessage("tzSearchApp"),
            [ae]: o.a.i18n.getMessage("tzPreparingToDownload"),
            [se]: o.a.i18n.getMessage("tzDownloadStarted")
        }[s] || s), [ s ]), m = k.c.useMemo(() => ({
            code_not_authorized: o.a.i18n.getMessage("msg_not_authorized"),
            quality_not_found: o.a.i18n.getMessage("msg_quality_not_found"),
            video_not_found: o.a.i18n.getMessage("msg_video_not_found"),
            televzr_not_found: o.a.i18n.getMessage("televzrNotFound"),
            data_invalid: o.a.i18n.getMessage("msg_data_invalid"),
            code_no_premium: o.a.i18n.getMessage("msg_no_premium"),
            EEXIST: o.a.i18n.getMessage("msg_video_exists")
        }[u] || u), [ u ]), v = k.c.useCallback(() => t(), []), y = k.c.useCallback(() => {
            if (f({
                label: "button",
                action: "button-click" + n.quality
            }), o.a.isFirefox) location.href = ue; else {
                const e = document.createElement("a");
                e.href = ue, e.target = "_blank", document.body.appendChild(e), e.click(), setTimeout(() => e.remove());
            }
            t();
        }, [ n ]), b = k.c.useCallback(() => t(), []), w = k.c.useCallback(() => {
            h({
                label: "download",
                action: "instructions-for-use"
            });
        }, []);
        return k.c.useEffect(() => {
            const e = e => {
                i && !i.current.contains(e.target) && [ le, se ].includes(s) && b();
            };
            return document.addEventListener("mousedown", e), () => {
                document.removeEventListener("mousedown", e);
            };
        }, [ s ]), k.c.useEffect(() => {
            let e;
            s === ie ? e = {
                label: "download",
                action: "search-televzr"
            } : s === ae ? e = {
                label: "download",
                action: "preparing-to-download"
            } : s === se && (e = {
                label: "download",
                action: "add-to-download"
            }), e && h(e);
        }, [ s ]), k.c.useEffect(() => {
            h({
                label: "download",
                action: "click-button"
            }), o.a.callFn("auth.getLoginUrl").then(e => p(e)).then(() => o.a.callFn("auth.isAuth")).then(e => {
                if (!e) throw new M.a("User not authorized", "code_not_authorized");
                l(ie);
            }).then(() => J.checkAvailability()).then(() => l(ae)).then(() => J.startDownload(n.url, n.type, n.height)).then(e => {
                re.info("added download", e), l(se);
            }).catch(e => {
                if ("code_not_authorized" === e.code) return y();
                re.error("Download error", e), g(e);
            });
        }, []), k.c.createElement("div", {
            ref: i,
            className: K()(a.popupContainer, a.flexColumn, !s && a.hidden),
            style: r
        }, k.c.createElement("button", {
            className: a.close,
            onClick: b
        }, "✖"), k.c.createElement("div", {
            className: a.popupBody
        }, k.c.createElement(de, {
            styles: a,
            state: s
        }), k.c.createElement("div", {
            className: a.textContainer
        }, m || A), "code_not_authorized" === u && k.c.createElement("a", {
            href: d,
            target: "_blank",
            onClick: v,
            className: a.btn
        }, o.a.i18n.getMessage("login")), "code_no_premium" === u && k.c.createElement("a", {
            href: ue,
            target: "_blank",
            className: a.btn
        }, o.a.i18n.getMessage("activate")), "televzr_not_found" === u && k.c.createElement("div", null, k.c.createElement("div", {
            className: a.subTextContainer
        }, o.a.i18n.getMessage("televzrNotFoundSubMessage")), k.c.createElement("a", {
            onClick: w,
            href: "https://sf-helper.net/helper-pro-manual.php",
            target: "_blank",
            className: a.btn
        }, o.a.i18n.getMessage("instruction")))));
    }), de = k.c.memo(e => {
        let {styles: t, state: n} = e;
        return k.c.createElement("div", {
            className: t.flexColumn
        }, n === le && k.c.createElement(ne, {
            className: K()(t.icon),
            name: "loading"
        }), [ ie, ae, oe ].includes(n) && k.c.createElement(ne, {
            className: K()(t.icon, t.circleLoaderIcon),
            name: "circleLoading"
        }), n === se && k.c.createElement(ne, {
            className: K()(t.icon),
            name: "check"
        }));
    });
    var pe = ce, fe = n(70), he = n.n(fe);
    var ge = k.c.createContext({});
    const Ae = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = e, r = 0, i = "", a = [ o.a.i18n.getMessage("vkFileSizeByte"), o.a.i18n.getMessage("vkFileSizeKByte"), o.a.i18n.getMessage("vkFileSizeMByte"), o.a.i18n.getMessage("vkFileSizeGByte"), o.a.i18n.getMessage("vkFileSizeTByte") ];
        for (n < 0 && (i = "-", n = Math.abs(n)); n >= 1e3; ) r++, n /= 1024;
        if (t >= 0) {
            const e = 10 * t;
            n = Math.round(n * e) / e;
        }
        return r < a.length ? i + n + " " + a[r] : e;
    };
    var me = e => Object(A.a)({
        action: "getFileSize",
        url: e
    }).then(e => {
        if (e.error) throw new Error("Get file size error");
        return Ae(e.fileSize);
    });
    const ve = k.c.memo(e => {
        let {item: t} = e;
        const {SaveFrom_Utils: n, styles: r} = k.c.useContext(ge), i = k.c.useMemo(() => !o.a.isGM && !o.a.isSafari || t.extra ? "" : o.a.i18n.getMessage("downloadTitle"), [ t ]), a = k.c.useMemo(() => {
            const e = (t.ext || t.format || "").toLowerCase(), n = t.title ? [ t.title, e ].filter(Boolean).join(".") : "";
            return g.a.modify(n);
        }, [ t ]), s = k.c.useCallback(e => {
            if (t.func) return t.func(e, t);
            t.forceDownload && !t.forceConverter && n.downloadOnClick(e, null, {
                el: e.target
            });
        }, [ t ]);
        return k.c.createElement("a", {
            href: t.href,
            download: a,
            className: r.dropdownItem,
            onClick: s,
            title: i,
            target: t.isBlank ? "_blank" : ""
        }, "SRT" === t.quality ? k.c.createElement(be, {
            text: t.itemText
        }) : k.c.createElement(ye, {
            item: t
        }));
    }), ye = k.c.memo(e => {
        let {item: t} = e;
        const {styles: n, SaveFrom_Utils: r} = k.c.useContext(ge);
        return k.c.createElement("div", {
            className: n.dropdownContainer
        }, k.c.createElement("div", {
            className: n.dropdownFormat
        }, t.format || "???"), "SRT" !== t.quality && k.c.createElement("div", {
            className: n.dropdownQuality
        }, k.c.createElement("div", null, t.quality), k.c.createElement(we, {
            quality: t.quality
        })), "SRT" === t.quality && k.c.createElement("div", {
            className: K()(n.dropdownQuality, n.subtitles)
        }, t.itemText), k.c.createElement("div", {
            className: n.dropdownAction
        }, t.noAudio && k.c.createElement("img", {
            src: r.svg.getSrc("noSound", "#ff0000"),
            title: o.a.i18n.getMessage("withoutAudio")
        }), !t.noSize && k.c.createElement(Ce, {
            src: r.svg.getSrc("info"),
            url: t.href
        })));
    }), be = k.c.memo(e => {
        let {text: t} = e;
        const {styles: n} = k.c.useContext(ge);
        return k.c.createElement("div", {
            className: n.dropdownContainer
        }, k.c.createElement("div", null, t));
    }), we = k.c.memo(e => {
        let {quality: t} = e;
        const {styles: n} = k.c.useContext(ge), r = k.c.useMemo(() => {
            const e = String(t);
            if ([ "1080", "720", "1440" ].includes(e)) return "HD";
            return {
                2160: "4K",
                4320: "8K",
                hls: "HLS",
                1440: "QHD"
            }[e];
        }, [ t ]);
        return k.c.createElement("div", null, r && k.c.createElement("div", {
            className: n.qualityBadge
        }, r));
    }), Ce = k.c.memo(e => {
        let {url: t, src: n} = e;
        const {styles: r} = k.c.useContext(ge), [o, i] = k.c.useState(null), a = k.c.useCallback(e => (e.stopPropagation(), 
        e.preventDefault(), me(t).then(e => i(e))), [ t ]);
        return o ? k.c.createElement("div", {
            className: r.sizeIcon
        }, o) : k.c.createElement("img", {
            src: n,
            onClick: a
        });
    });
    var xe = ve;
    const ke = "PRO_SECTION_LOGIN", Ie = "PRO_SECTION_LANDING", _e = k.c.memo(e => {
        let {hiddenItems: t, SaveFrom_Utils: n} = e;
        const r = Object(I.a)(he.a), [i, a] = k.c.useState(!1), [s, l] = k.c.useState(null), [u, c] = k.c.useState(null), [p, f] = k.c.useState(!1), h = k.c.useMemo(() => t.length > 0, [ t ]), g = k.c.useCallback(() => a(e => !e), []), A = $("UA-181742122-2", "download");
        k.c.useEffect(() => {
            o.a.callFn("getPreferences").then(e => f(e.proEnabled));
        }, []), function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            k.c.useEffect(() => {
                const t = o.a.callFn("auth.isAuth"), n = Object(Q.a)([ "userInfo" ]).then(e => Boolean(e.userInfo && e.userInfo.isPremium)), r = o.a.callFn("auth.getLoginUrl");
                Promise.all([ t, n, r ]).then(t => {
                    let [n, r, o] = t;
                    return e(n, r, o);
                });
            }, t);
        }((e, t, n) => {
            if (!p) return void c(null);
            let r = e && t ? "PRO_SECTION_INFO" : e ? Ie : ke;
            l(n), c(r);
        }, [ p ]);
        const m = k.c.useCallback(() => {
            A({
                label: "download",
                action: "login-to-helperpro-button"
            }), d.a.trigger(document, "mousedown");
        }, []), v = k.c.useCallback(() => {
            A({
                label: "download",
                action: "activated-pro-button"
            });
        }, []);
        return k.c.createElement(ge.Provider, {
            value: {
                SaveFrom_Utils: n,
                styles: r
            }
        }, k.c.createElement("div", null, i && k.c.createElement(Ee, {
            list: t
        }), [ Ie, ke, null ].includes(u) && k.c.createElement(Se, null), u === Ie && k.c.createElement("a", {
            className: r.loginBtn,
            onClick: v,
            href: "https://sf-helper.net/helper-pro",
            target: "_blank"
        }, o.a.i18n.getMessage("activatePro")), u === ke && k.c.createElement("a", {
            className: r.loginBtn,
            onClick: m,
            href: s,
            target: "_blank"
        }, o.a.i18n.getMessage("loginIfPro")), "PRO_SECTION_INFO" === u && k.c.createElement("div", null, k.c.createElement(Se, null), k.c.createElement("div", {
            className: r.proInformation
        }, k.c.createElement("div", {
            className: r.info
        }, k.c.createElement("img", {
            src: n.svg.getSrc("rocket", "#46aa4b")
        }), k.c.createElement("div", {
            className: r.proLabel
        }, "You are PRO")), h && k.c.createElement(De, {
            onClick: g
        }))), null === u && h && k.c.createElement(De, {
            onClick: g
        }), [ ke, Ie ].includes(u) && h && k.c.createElement("div", null, k.c.createElement(Se, null), k.c.createElement(De, {
            onClick: g
        }))));
    }), Ee = k.c.memo(e => {
        let {list: t} = e;
        const n = k.c.useRef(), {styles: r} = k.c.useContext(ge);
        return ((e, t) => {
            k.c.useEffect(() => {
                let n = e.current;
                return n && n.addEventListener("scroll", t), () => n && n.removeEventListener("scroll", t);
            }, [ e ]);
        })(n, e => {
            const t = r.hiddenShadow, n = e.target;
            n && n.scrollTop > 0 ? !n.classList.contains(t) && n.classList.add(t) : n.classList.contains(t) && n.classList.remove(t);
        }), k.c.createElement("div", {
            ref: n,
            className: K()(t.length > 8 && r.hiddenViewer)
        }, t.map(e => k.c.createElement(xe, {
            item: e
        })));
    }), De = k.c.memo(e => {
        let {onClick: t} = e;
        const {styles: n} = k.c.useContext(ge), [r, i] = k.c.useState(!1), a = k.c.useCallback(e => {
            e.preventDefault(), t(e), i(e => !e);
        });
        return k.c.createElement("a", {
            href: "#",
            className: K()(n.dropdownItem, n.moreBtn),
            onClick: a
        }, r ? o.a.i18n.getMessage("more") + " " + String.fromCharCode(171) : o.a.i18n.getMessage("more") + " " + String.fromCharCode(187));
    }), Se = k.c.memo(() => {
        const {styles: e} = k.c.useContext(ge);
        return k.c.createElement("div", {
            className: e.separator
        });
    });
    var Me = _e, Oe = n(71), Fe = n.n(Oe);
    const je = Object(m.a)("TryProButtonExp");
    var Te = k.c.memo(e => {
        let {unmountLayer: t} = e;
        const n = Object(I.a)(Fe.a), r = $("UA-67738130-20", "helper-try-pro"), i = k.c.useCallback(() => r({
            label: "button",
            action: "button-click"
        }), []), [a, s] = k.c.useState(!1);
        return k.c.useEffect(() => {
            o.a.callFn("getPreferences").then(e => {
                if (!e.proEnabled) throw new Error("Helper pro exp is disabled");
                return Object(Q.a)([ "userInfo" ]);
            }).then(e => {
                e.userInfo && e.userInfo.isPremium ? t() : s(!0);
            }).catch(e => {
                je.warn("Experiment error", e), t();
            });
        }, []), k.c.createElement("div", null, a && k.c.createElement("a", {
            href: "https://sf-helper.net/helper-pro",
            className: n.button,
            onClick: i,
            target: "_blank"
        }, o.a.i18n.getMessage("try_pro_button")));
    }), Le = n(72), Ne = n.n(Le);
    var ze = k.c.memo(e => {
        let {state: t, installUrl: n, styles: r} = e;
        const i = $(Be, "install"), a = k.c.useCallback(() => i({
            action: "televzr",
            label: "televzr"
        }), []);
        return k.c.createElement("div", {
            className: r.televzrPopup
        }, k.c.createElement("div", {
            className: r.televzrPopupHeader
        }), t === Re && k.c.createElement("div", null, k.c.createElement(ne, {
            name: "circleLoading",
            className: [ r.icon, r.circleLoaderIcon ].join(" ")
        }), k.c.createElement("div", null, o.a.i18n.getMessage("tzSearchApp"))), t === Ve && k.c.createElement("div", null, k.c.createElement("div", {
            className: r.televzrPopupBody
        }, k.c.createElement("a", {
            className: [ r.televzrPopupBtn, r.btnInvert ].join(" "),
            href: n,
            target: "_blank",
            onClick: a
        }, k.c.createElement("span", {
            className: r.btnOuter
        }, k.c.createElement("span", {
            className: r.btnInner
        }, "Install Now")))), k.c.createElement("div", {
            className: r.televzrPopupFooter
        }, 'Allows to download HD/MP3 by "Televzr" button')), t === qe && k.c.createElement("div", null, k.c.createElement(ne, {
            name: "check",
            className: [ r.icon ].join(" ")
        }), k.c.createElement("div", null, "Televzr launched")));
    });
    const Be = "G-L0GP1RQSBJ", Pe = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        const n = document.createElement("a");
        n.href = e, t && (n.target = "_blank"), document.body.appendChild(n), n.click(), 
        setTimeout(() => n.remove());
    }, Re = "pending", qe = "installed", Ve = "tz_not_installed", He = Object(m.a)("tz-hd-btn");
    var Ue = k.c.memo(e => {
        let {openUrl: t} = e;
        const n = $(Be, "download"), r = Object(I.a)(Ne.a), i = k.c.useRef(), [s, l] = k.c.useState("idle"), [u, c] = k.c.useState(!1), [d, p] = k.c.useState(!1), [h, g] = k.c.useState(), [A] = k.c.useState(() => t.match(/v=(.*?)$/)[1]), m = k.c.useMemo(() => `https://desktop.televzr.com/download-in-hd.html?vid=693&video_id=yt-${A}&utm_source=helper&utm_medium=hd-mp3-button&utm_campaign=televzr&utm_content=televzr_integration`, [ A ]);
        k.c.useEffect(() => {
            const e = e => {
                h && !h.contains(e.target) && [ qe, Ve ].includes(s) && c(!1);
            };
            return document.addEventListener("mousedown", e), () => {
                document.removeEventListener("mousedown", e);
            };
        }, [ s, h ]), k.c.useEffect(() => {
            let e, t;
            return u && ([e, t] = ((e, t, n) => {
                let r = document.body.querySelector(":not(.ytd-browse[hidden]) #savefrom__yt_btn"), o = document.querySelector(".sf-televzr-popup-container");
                o && o.remove(), r && (o = f.a.create("div", {
                    class: "sf-televzr-popup-container",
                    style: {
                        zIndex: 99999,
                        position: "absolute",
                        top: "33px",
                        right: "9%",
                        width: "206px"
                    }
                }), r.appendChild(o));
                const i = Boolean(document.body.querySelector("#sfYtFrameBtn")), a = {
                    position: "absolute"
                };
                !o && i && (a.right = "0", o = document.body.querySelector(".sf-btn-ctr")), o || (a.position = "relative", 
                o = f.a.create("div", {
                    style: {
                        position: "fixed",
                        zIndex: 999999,
                        bottom: "30px",
                        right: "0",
                        width: "268px"
                    }
                }), document.body.appendChild(o));
                return [ Object(x.a)(Object(w.e)(ze, {
                    state: e,
                    installUrl: t,
                    styles: n
                }), o), o ];
            })(s, m, r), g(t)), () => e && e();
        }, [ s, u, m ]), k.c.useEffect(() => {
            let e = !1;
            const t = a(() => e && c(!1), 300), n = () => {
                e = !0, t();
            }, r = () => {
                e = !1;
            }, o = () => {
                i.current && i.current.removeEventListener("mouseleave", n), i.current && i.current.removeEventListener("mouseenter", r), 
                h && h.removeEventListener("mouseleave", n), h && h.removeEventListener("mouseenter", r);
            };
            return d && h ? (i.current && i.current.addEventListener("mouseleave", n), i.current && i.current.addEventListener("mouseenter", r), 
            h.addEventListener("mouseleave", n), h.addEventListener("mouseenter", r)) : o(), 
            () => o();
        }, [ h, d ]);
        const v = k.c.useCallback(e => {
            if (e.preventDefault(), e.stopPropagation(), p(!1), n({
                action: "click_televzr",
                label: "download"
            }), "idle" === s) return c(!0), l(Re), J.pingTelevzr().then(() => {
                l(qe), localStorage.setItem("televzr_installed", "1"), o.a.callFn("televzr.openUrl", [ t.replace("televzr://", "https://") ]).catch(e => {
                    He.error("televzr.openUrl: ", e), Pe(t);
                });
            }, e => {
                l(Ve), localStorage.removeItem("televzr_installed"), Pe(m, !0), He.error(e);
            });
            [ Ve, qe ].includes(s) && c(!0);
        }, [ m ]), y = k.c.useCallback(() => {
            localStorage.getItem("televzr_installed") || u || (c(!0), p(!0), l(Ve));
        }, [ u ]);
        return k.c.createElement("div", {
            ref: i
        }, k.c.createElement("a", {
            href: "#",
            onClick: v,
            className: [ r.itemAnchor, "sf-menu-item" ].join(" "),
            onMouseEnter: y
        }, k.c.createElement("div", {
            className: r.itemContainer
        }, k.c.createElement("span", null, "HD/MP3 Televzr"), k.c.createElement(ne, {
            name: "televzr",
            className: r.logo
        }))));
    }), We = n(8), Qe = n(35), Ge = n(54);
    function Ze(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            }))), n.push.apply(n, r);
        }
        return n;
    }
    function Ye(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Ze(Object(n), !0).forEach((function(t) {
                Object(r.a)(e, t, n[t]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ze(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            }));
        }
        return e;
    }
    n(36);
    const Je = Object(m.a)("components");
    let Xe = null;
    const Ke = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
    var $e = {
        downloadParam: "sfh--download",
        setStyle: function(e, t) {
            if (e && t) for (var n in t) e.style[n] = t[n];
        },
        getStyle: function(e, t) {
            return e && window.getComputedStyle && window.getComputedStyle(e, null).getPropertyValue(t);
        },
        addStyleRules: function(e, t, n) {
            var r = n ? document.querySelector("#savefrom-styles." + n) : document.getElementById("savefrom-styles");
            if (!r) {
                (r = document.createElement("style")).id = "savefrom-styles", n && r.classList.add(n);
                var o = document.querySelector("head style");
                o ? o.parentNode.insertBefore(r, o) : document.querySelector("head").appendChild(r);
            }
            if ("object" == typeof t) {
                var i = [];
                for (var a in t) i.push(a + ":" + t[a]);
                t = i.join(";");
            }
            r.textContent += e + "{" + t + "}";
        },
        getPosition: function(e, t) {
            var n = e.getBoundingClientRect();
            if (t) {
                var r = t.getBoundingClientRect();
                return {
                    top: Math.round(n.top - r.top),
                    left: Math.round(n.left - r.left),
                    width: n.width,
                    height: n.height
                };
            }
            return {
                top: Math.round(n.top + window.pageYOffset),
                left: Math.round(n.left + window.pageXOffset),
                width: n.width,
                height: n.height
            };
        },
        getSize: function(e) {
            return {
                width: e.offsetWidth,
                height: e.offsetHeight
            };
        },
        getMatchFirst: function(e, t) {
            var n = e.match(t);
            return n && n.length > 1 ? n[1] : "";
        },
        getElementByIds: function(e) {
            for (var t = 0; t < e.length; t++) {
                var n = document.getElementById(e[t]);
                if (n) return n;
            }
            return null;
        },
        getParentByClass: function(e, t) {
            if (!e || "" == t) return !1;
            var n;
            if ("object" == typeof t && t.length > 0) for (n = e; n; n = n.parentNode) {
                if (1 !== n.nodeType) return null;
                for (var r = 0; r < t.length; r++) if (n.classList.contains(t[r])) return n;
            } else for (n = e; n; n = n.parentNode) {
                if (1 !== n.nodeType) return null;
                if (n.classList.contains(t)) return n;
            }
            return null;
        },
        getParentByTagName: function(e, t) {
            if (!e || !t) return !1;
            for (var n = e; n; n = n.parentNode) {
                if (1 !== n.nodeType) return null;
                if (n.tagName === t) return n;
            }
            return null;
        },
        getParentById: function(e, t) {
            for (var n = e; n; n = n.parentNode) {
                if (1 !== n.nodeType) return null;
                if (n.id === t) return n;
            }
            return null;
        },
        hasChildrenTagName: function(e, t) {
            for (var n, r = 0; n = e.childNodes[r]; r++) if (1 === n.nodeType && n.tagName === t) return !0;
            return !1;
        },
        isParent: function(e, t) {
            return !(!t || -1 === [ 1, 9, 11 ].indexOf(t.nodeType)) && t.contains(e);
        },
        emptyNode: function(e) {
            for (;e.firstChild; ) e.removeChild(e.firstChild);
        },
        download: function(e, t, n, r) {
            if (!t) return !1;
            if (!(e = e || this.getFileName(t))) return !1;
            if (!Xe.preferences.downloads) return !1;
            var i = n || {};
            return i.url = t, i.filename = e.trim(), r = r || void 0, o.a.sendMessage({
                action: "downloadFile",
                options: i
            }, r), !0;
        },
        downloadList: {
            showDownloadWarningPopup: function(e, t) {
                var n = $e.playlist.getInfoPopupTemplate();
                o.a.sendMessage({
                    action: "getWarningIcon",
                    type: t
                }, (function(e) {
                    n.icon.style.backgroundImage = "url(" + e + ")";
                })), f.a.create(n.textContainer, {
                    append: [ f.a.create("p", {
                        text: o.a.i18n.getMessage("warningPopupTitle"),
                        style: {
                            color: "#0D0D0D",
                            fontSize: "20px",
                            marginBottom: "11px",
                            marginTop: "13px"
                        }
                    }), f.a.create("p", {
                        text: o.a.i18n.getMessage("warningPopupDesc") + " ",
                        style: {
                            color: "#868686",
                            fontSize: "14px",
                            marginBottom: "13px",
                            lineHeight: "24px",
                            marginTop: "0px"
                        },
                        append: f.a.create("a", {
                            href: "ru" === o.a.i18n.getMessage("lang") || "uk" === o.a.i18n.getMessage("lang") ? "http://vk.com/page-55689929_49003549" : "http://vk.com/page-55689929_49004259",
                            text: o.a.i18n.getMessage("readMore"),
                            target: "_blank",
                            style: {
                                color: "#4A90E2"
                            }
                        })
                    }), f.a.create("p", {
                        style: {
                            marginBottom: "13px"
                        },
                        append: [ f.a.create("label", {
                            style: {
                                color: "#868686",
                                cursor: "pointer",
                                fontSize: "14px",
                                lineHeight: "19px"
                            },
                            append: [ f.a.create("input", {
                                type: "checkbox",
                                style: {
                                    cssFloat: "left",
                                    marginLeft: "0px"
                                },
                                on: [ "click", function() {
                                    o.a.sendMessage({
                                        action: "hideDownloadWarning",
                                        set: this.checked ? 1 : 0
                                    });
                                } ]
                            }), o.a.i18n.getMessage("noWarning") ]
                        }) ]
                    }) ]
                });
                var r = void 0, i = void 0;
                f.a.create(n.buttonContainer, {
                    append: [ r = f.a.create("button", {
                        text: o.a.i18n.getMessage("cancel"),
                        style: {
                            height: "27px",
                            width: "118px",
                            backgroundColor: "#ffffff",
                            color: "#000000",
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
                            color: "#000000",
                            border: "1px solid #9e9e9e",
                            margin: "12px",
                            marginBottom: "11px",
                            marginRight: "8px",
                            borderRadius: "5px",
                            fontSize: "14px",
                            cursor: "pointer"
                        }
                    }) ]
                }), r.addEventListener("click", (function(e) {
                    var t = n.body.parentNode;
                    d.a.trigger(t.lastChild, "click");
                })), i.addEventListener("click", (function(t) {
                    t.preventDefault(), t.stopPropagation(), e(), d.a.trigger(r, "click");
                })), $e.popupDiv(n.body, "dl_warning_box_popup");
            },
            startChromeDownloadList: function(e) {
                var t = e.folderName, n = e.list;
                return t && (t += "/"), o.a.sendMessage({
                    action: "downloadList",
                    fileList: n,
                    folder: t
                });
            },
            startOldChromeDownloadList: function(e, t) {
                var n = e.folderName, r = e.list, i = e.type;
                n && (n += "/");
                var a = 0, s = !1, l = 500, u = document.body;
                u.focus(), t || (u.onblur = function() {
                    s = !0;
                });
                !function e() {
                    var t = r[a];
                    if (a++, void 0 !== t) if (Xe.preferences.downloads ? $e.download(n + t.filename, t.url) : d.a.trigger(f.a.create("a", {
                        download: t.filename,
                        href: t.url,
                        on: [ "click", function(e) {
                            $e.downloadOnClick(e);
                        } ]
                    }), "click", {
                        cancelable: !0,
                        altKey: !0
                    }), s) $e.downloadList.showDownloadWarningPopup((function() {
                        s = !1, u.focus(), e();
                    }), i); else {
                        if (a > 5 && l && (l = void 0, u.onblur = void 0, s = !1, Xe.preferences.downloads)) return void o.a.sendMessage({
                            action: "downloadList",
                            fileList: r.slice(a),
                            folder: n
                        });
                        setTimeout((function() {
                            e();
                        }), l);
                    }
                }();
            },
            startDownload: function(e) {
                e.list.forEach((function(e) {
                    e.filename = g.a.modify(e.filename);
                })), e.folderName = g.a.modify(e.folderName);
                const t = Xe.preferences.sortDownloads;
                if (t && t.isEnabled) {
                    const n = e.list[0].filename, r = n.slice(n.lastIndexOf(".") + 1), o = t.groups.find(e => e.formats.some(e => -1 !== e.indexOf(r)));
                    o && o.dir && (e.folderName = `${g.a.modify(o.dir)}/${e.folderName}`);
                }
                return o.a.isGM && "undefined" != typeof GM_download || o.a.isChrome && Xe.preferences.downloads || o.a.isFirefox ? $e.downloadList.startChromeDownloadList(e) : o.a.isSafari ? o.a.sendMessage({
                    action: "hideDownloadWarning"
                }, (function(t) {
                    $e.downloadList.startOldChromeDownloadList(e, t);
                })) : void 0;
            },
            showBeforeDownloadPopup: function(e, t) {
                t && !t.count && (t.count = e.length), t.list = e.filter(e => !e.useConverter), 
                t.listConverter = e.filter(e => e.useConverter);
                var n = t.type, r = t.folderName, i = t.onContinue || $e.downloadList.startDownload, a = t.onShowList || $e.playlist.popupFilelist, s = t.count || e.length, l = $e.playlist.getInfoPopupTemplate();
                o.a.sendMessage({
                    action: "getWarningIcon",
                    color: "#00CCFF",
                    type: n
                }, (function(e) {
                    l.icon.style.backgroundImage = "url(" + e + ")";
                }));
                var u = [];
                a && (u = [ " (", f.a.create("a", {
                    href: "#",
                    text: o.a.i18n.getMessage("vkListOfLinks").toLowerCase()
                }), ")" ])[1].addEventListener("click", (function(e) {
                    e.preventDefault(), e.stopPropagation(), a(t.list), d.a.trigger(c, "click");
                })), f.a.create(l.textContainer, {
                    append: [ f.a.create("p", {
                        text: r || o.a.i18n.getMessage("playlistTitle"),
                        style: {
                            color: "#0D0D0D",
                            fontSize: "20px",
                            marginBottom: "11px",
                            marginTop: "13px"
                        }
                    }), f.a.create("p", {
                        text: o.a.i18n.getMessage("vkFoundFiles").replace("%d", s),
                        style: {
                            color: "#868686",
                            fontSize: "14px",
                            marginBottom: "13px",
                            lineHeight: "24px",
                            marginTop: "0px"
                        },
                        append: u
                    }), f.a.create("p", {
                        text: o.a.i18n.getMessage("beforeDownloadPopupWarn"),
                        style: {
                            color: "#868686",
                            fontSize: "14px",
                            marginBottom: "13px",
                            lineHeight: "24px",
                            marginTop: "0px"
                        }
                    }) ]
                });
                var c = void 0, p = void 0;
                let h;
                f.a.create(l.buttonContainer, {
                    append: [ c = f.a.create("button", {
                        text: o.a.i18n.getMessage("cancel"),
                        style: {
                            height: "27px",
                            width: "118px",
                            backgroundColor: "#ffffff",
                            color: "#000000",
                            border: "1px solid #9e9e9e",
                            margin: "12px",
                            marginBottom: "11px",
                            marginRight: "4px",
                            borderRadius: "5px",
                            fontSize: "14px",
                            cursor: "pointer"
                        }
                    }), p = f.a.create("button", {
                        text: o.a.i18n.getMessage("continue"),
                        style: {
                            height: "27px",
                            width: "118px",
                            backgroundColor: "#ffffff",
                            color: "#000000",
                            border: "1px solid #9e9e9e",
                            margin: "12px",
                            marginBottom: "11px",
                            marginRight: "8px",
                            borderRadius: "5px",
                            fontSize: "14px",
                            cursor: "pointer"
                        }
                    }) ]
                }), c.addEventListener("click", (function(e) {
                    var t = l.body.parentNode;
                    d.a.trigger(t.lastChild, "click");
                })), p.addEventListener("click", (function(e) {
                    e.preventDefault(), e.stopPropagation(), i(t), t.listConverter.length ? (h = Object(x.a)(Object(w.e)(z, {
                        files: t.listConverter,
                        onDone: () => {
                            c.textContent = o.a.i18n.getMessage("close"), p.style.display = "none", l.buttonContainer.style.display = "block";
                        }
                    }), l.textContainer), l.buttonContainer.style.display = "none") : d.a.trigger(c, "click");
                }));
                $e.popupDiv(l.body, "dl_confirm_box_popup", void 0, void 0, () => {
                    h && h();
                }, {
                    docCloseEnable: !t.listConverter.length
                });
            }
        },
        downloadLink: function(e, t) {
            if (!e.href) return !1;
            const n = e.getAttribute("download");
            return this.download(n, e.href, null, t);
        },
        safariDlLink: function(e) {
            if (!(e.button || e.ctrlKey || e.altKey || e.shitfKey)) {
                var t = null;
                try {
                    if ("function" != typeof MouseEvent) throw "legacy";
                    t = new MouseEvent("click", {
                        bubbles: !0,
                        cancelable: e.cancelable,
                        screenX: e.screenX,
                        screenY: e.screenY,
                        clientX: e.clientX,
                        clientY: e.clientY,
                        ctrlKey: !1,
                        altKey: !0,
                        shiftKey: !1,
                        metaKey: e.metaKey,
                        button: e.button,
                        relatedTarget: e.relatedTarget
                    });
                } catch (n) {
                    t = function(e) {
                        var t = document.createEvent("MouseEvents");
                        return t.initMouseEvent("click", !0, e.cancelable, window, 0, e.screenX, e.screenY, e.clientX, e.clientY, !1, !0, !1, e.metaKey, e.button, e.relatedTarget), 
                        t;
                    }(e);
                }
                e.preventDefault(), e.stopPropagation(), this.dispatchEvent(t);
            }
        },
        downloadOnClick: function(e, t, n) {
            var r = $e, i = (n = n || {}).el || e.target;
            if ("A" !== i.tagName && (i = Object(u.a)(i, "A")), !i) return;
            const a = o.a.isGM && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome"), s = !(!o.a.isGM || "undefined" == typeof GM_info) && "Tampermonkey" === GM_info.scriptHandler && !Xe.preferences.downloads;
            if (o.a.isSafari || a || s) {
                if (!e.altKey && !e.ctrlKey) return e.preventDefault(), void Object(v.b)(i, {
                    defaultWidth: 400,
                    defaultHeight: 60
                }, n);
                Object(v.a)(i);
            }
            if (o.a.isSafari) return r.safariDlLink.call(i, e);
            Xe.preferences.downloads && ((o.a.isFirefox || o.a.isGM) && /^blob:|^data:/.test(i.href) || 2 !== e.button && (e.preventDefault(), 
            !n.withoutPropagation && e.stopPropagation(), Object(We.a)({
                category: "download",
                subcategory: Object(Qe.a)(),
                event: Object(Ge.a)(n)
            }), r.downloadLink(i, t)));
        },
        getQueryString: function(e, t, n) {
            if (!e || "object" != typeof e) return "";
            void 0 === t && (t = ""), void 0 === n && (n = "");
            var r = "";
            for (var o in e) r.length && (r += "&"), e[o] instanceof Object ? (t || (t = ""), 
            n || (n = ""), r += $e.getQueryString(e[o], t + o + "[", "]" + n)) : r += t + escape(o) + n + "=" + escape(e[o]);
            return r;
        },
        decodeUnicodeEscapeSequence: function(e) {
            return e.replace(/\\u([0-9a-f]{4})/g, (function(e, t) {
                if (t = parseInt(t, 16), !isNaN(t)) return String.fromCharCode(t);
            }));
        },
        getFileExtension: function(e, t) {
            var n = this.getMatchFirst(e, /\.([a-z0-9]{3,4})(\?|$)/i);
            return n ? n.toLowerCase() : t || "";
        },
        getFileName: function(e) {
            var t = this.getMatchFirst(e, /\/([^\?#\/]+\.[a-z\d]{2,6})(?:\?|#|$)/i);
            return t ? g.a.modify(t) : t;
        },
        getTopLevelDomain: function(e) {
            if (!e) return "";
            if (!e.match(/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}/)) return e;
            var t = e.split("."), n = t.length;
            return 2 == n ? e : t[n - 2] + "." + t[n - 1];
        },
        dateToObj: function(e, t) {
            var n = null == e ? new Date : new Date(e);
            void 0 === t && (t = !0);
            var r = {
                year: n.getFullYear(),
                month: n.getMonth() + 1,
                day: n.getDate(),
                hour: n.getHours(),
                min: n.getMinutes(),
                sec: n.getSeconds()
            };
            if (t) for (var o in r) 1 == r[o].toString().length && (r[o] = "0" + r[o]);
            return r;
        },
        utf8Encode: function(e) {
            e = e.replace(/\r\n/g, "\n");
            for (var t = "", n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), 
                t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), 
                t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128));
            }
            return t;
        },
        sizeHuman: function(e, t) {
            null != t && null != t || (t = 2);
            var n = e, r = 0, i = "", a = [ o.a.i18n.getMessage("vkFileSizeByte"), o.a.i18n.getMessage("vkFileSizeKByte"), o.a.i18n.getMessage("vkFileSizeMByte"), o.a.i18n.getMessage("vkFileSizeGByte"), o.a.i18n.getMessage("vkFileSizeTByte") ];
            for (n < 0 && (i = "-", n = Math.abs(n)); n >= 1e3; ) r++, n /= 1024;
            if (t >= 0) {
                var s = 10 * t;
                n = Math.round(n * s) / s;
            }
            return r < a.length ? i + n + " " + a[r] : e;
        },
        secondsToDuration: function(e) {
            if (!e || isNaN(e)) return "";
            function t(e) {
                return e < 10 ? "0" + e : e.toString();
            }
            var n = Math.floor(e / 3600);
            e %= 3600;
            var r = Math.floor(e / 60);
            return e %= 60, n > 0 ? n + ":" + t(r) + ":" + t(e) : r + ":" + t(e);
        },
        svg: {
            icon: {
                download: "M 4,0 4,8 0,8 8,16 16,8 12,8 12,0 4,0 z",
                info: "M 8,1.55 C 11.6,1.55 14.4,4.44 14.4,8 14.4,11.6 11.6,14.4 8,14.4 4.44,14.4 1.55,11.6 1.55,8 1.55,4.44 4.44,1.55 8,1.55 M 8,0 C 3.58,0 0,3.58 0,8 0,12.4 3.58,16 8,16 12.4,16 16,12.4 16,8 16,3.58 12.4,0 8,0 L 8,0 z M 9.16,12.3 H 6.92 V 7.01 H 9.16 V 12.3 z M 8.04,5.91 C 7.36,5.91 6.81,5.36 6.81,4.68 6.81,4 7.36,3.45 8.04,3.45 8.72,3.45 9.27,4 9.27,4.68 9.27,5.36 8.72,5.91 8.04,5.91 z",
                noSound: "M 11.4,5.05 13,6.65 14.6,5.05 16,6.35 14.4,7.95 16,9.55 14.6,11 13,9.35 11.4,11 10,9.55 11.6,7.95 10,6.35 z M 8,1.75 8,14.3 4,10.5 l -4,0 0,-4.75 4,0 z",
                rocket: "M 11.371094 7.625 C 13.507812 5.074219 14.054688 1.523438 13.996094 0.445312 C 13.996094 0.328125 13.9375 0.226562 13.863281 0.136719 C 13.789062 0.0625 13.6875 0.00390625 13.554688 0.00390625 C 12.476562 -0.0546875 8.925781 0.476562 6.390625 2.613281 L 5.800781 2.390625 C 4.769531 2.007812 3.605469 2.320312 2.894531 3.160156 L 1.261719 5.089844 C 1.023438 5.355469 1.140625 5.78125 1.480469 5.898438 L 3.234375 6.550781 C 2.851562 7.199219 2.585938 7.742188 2.410156 8.125 C 2.261719 8.4375 2.335938 8.804688 2.585938 9.054688 L 4.945312 11.429688 C 5.179688 11.664062 5.550781 11.738281 5.875 11.589844 C 6.257812 11.414062 6.800781 11.148438 7.449219 10.765625 L 8.085938 12.519531 C 8.203125 12.859375 8.628906 12.960938 8.894531 12.738281 L 10.8125 11.105469 C 11.652344 10.394531 11.960938 9.230469 11.578125 8.199219 Z M 10.265625 5.78125 C 9.707031 6.34375 8.792969 6.34375 8.21875 5.78125 C 7.65625 5.222656 7.65625 4.308594 8.21875 3.734375 C 8.777344 3.171875 9.691406 3.171875 10.265625 3.734375 C 10.828125 4.308594 10.828125 5.222656 10.265625 5.78125 Z M 10.265625 5.78125 M 3.929688 12.03125 L 2.867188 13.078125 C 2.660156 13.285156 2.660156 13.640625 2.867188 13.84375 C 3.074219 14.050781 3.425781 14.050781 3.632812 13.84375 L 4.695312 12.785156 C 4.902344 12.578125 4.902344 12.222656 4.695312 12.015625 C 4.472656 11.8125 4.136719 11.8125 3.929688 12.03125 Z M 3.929688 12.03125 M 3.324219 10.675781 C 3.117188 10.46875 2.765625 10.46875 2.558594 10.675781 L 0.878906 12.371094 C 0.671875 12.578125 0.671875 12.929688 0.878906 13.136719 C 1.082031 13.34375 1.4375 13.34375 1.644531 13.136719 L 3.324219 11.429688 C 3.546875 11.222656 3.546875 10.882812 3.324219 10.675781 Z M 3.324219 10.675781 M 1.984375 10.085938 C 2.1875 9.878906 2.1875 9.527344 1.984375 9.320312 C 1.777344 9.113281 1.421875 9.113281 1.214844 9.320312 L 0.15625 10.382812 C -0.0507812 10.585938 -0.0507812 10.941406 0.15625 11.148438 C 0.359375 11.355469 0.714844 11.355469 0.921875 11.148438 Z M 1.984375 10.085938"
            },
            cache: {},
            getSrc: function(e, t) {
                return this.icon[e] ? (this.cache[e] || (this.cache[e] = {}), this.cache[e][t] || (this.cache[e][t] = btoa('<?xml version="1.0" encoding="UTF-8"?><svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="16" height="16" viewBox="0 0 16 16" id="svg2" xml:space="preserve"><path d="' + this.icon[e] + '" fill="' + t + '" /></svg>')), 
                this.cache[e][t] ? "data:image/svg+xml;base64," + this.cache[e][t] : "") : "";
            },
            getSvg: function(e, t, n, r) {
                var o = document.createElementNS("http://www.w3.org/2000/svg", "svg"), i = o.namespaceURI;
                o.setAttribute("width", n || "16"), o.setAttribute("height", r || n || "16"), o.setAttribute("viewBox", "0 0 16 16");
                var a = document.createElementNS(i, "path");
                return o.appendChild(a), a.setAttribute("d", this.icon[e]), t && a.setAttribute("fill", t), 
                o;
            }
        },
        appendDownloadInfo: function(e, t, n, r) {
            t || (t = "#a0a0a0");
            var i = document.createElement("span");
            i.appendChild(document.createTextNode(o.a.i18n.getMessage("downloadTitle"))), this.setStyle(i, {
                display: "inline-block",
                position: "relative",
                border: "1px solid " + t,
                borderRadius: "5px",
                fontSize: "13px",
                lineHeight: "17px",
                padding: "2px 19px 2px 5px",
                marginTop: "5px",
                opacity: .9
            }), n && this.setStyle(i, n);
            var a = document.createElement("span");
            a.textContent = String.fromCharCode(215), this.setStyle(a, {
                color: t,
                width: "14px",
                height: "14px",
                fontSize: "14px",
                fontWeight: "bold",
                lineHeight: "14px",
                position: "absolute",
                top: 0,
                right: 0,
                overflow: "hidden",
                cursor: "pointer"
            }), r && this.setStyle(a, r), a.addEventListener("click", (function() {
                i.parentNode.removeChild(i), o.a.sendMessage({
                    action: "updateOption",
                    key: "moduleShowDownloadInfo",
                    value: 0
                });
            }), !1), i.appendChild(a), e.appendChild(i);
        },
        getFileSizeIcon: function(e, t, n, r) {
            var i = this;
            r = r || {}, e = e || {}, t = t || {}, n = n || {};
            var a = function(e) {
                return f.a.create("div", {
                    style: t,
                    append: [ f.a.create($e.svg.getSvg("info", e), {
                        style: n
                    }) ]
                });
            }, s = f.a.create("div", {
                style: e,
                append: [ f.a.create(a("#333333"), {
                    title: o.a.i18n.getMessage("getFileSizeTitle"),
                    on: [ "click", function e(t) {
                        t.stopPropagation(), t.preventDefault(), s.textContent = "...";
                        var n = r.url;
                        n || (n = r.link && r.link.href), Object(A.a)({
                            action: "getFileSize",
                            url: n
                        }).then((function(e) {
                            if (e.error || !e.fileSize) throw new Error(JSON.stringify(e));
                            var t = e.fileType || "", n = i.sizeHuman(e.fileSize, 2), a = "";
                            if (r.link && /^audio\//i.test(t)) {
                                var l = parseInt(r.link.dataset.savefromHelperDuration);
                                l > 0 && (a += Math.floor(e.fileSize / l / 125), a += " " + o.a.i18n.getMessage("kbps"));
                            }
                            var u = "";
                            u += a ? n + " ~ " + a : n, r.brackets && (u = "(" + u + ")"), s.textContent = u, 
                            s.title = t;
                        })).catch((function(t) {
                            var n;
                            Je.error(t), "ZERO" === t.message ? (n = a("#ffac00")).title = o.a.i18n.getMessage("getFileSizeTitle") : (n = a("#ff0000")).title = o.a.i18n.getMessage("getFileSizeFailTitle"), 
                            n.addEventListener("click", e), s.textContent = "", s.appendChild(n);
                        }));
                    } ]
                }) ]
            });
            return {
                node: s
            };
        },
        appendFileSizeIcon: function(e, t, n, r, i, a) {
            t = t || {}, n = n || {};
            var s = "#333333";
            "0" === r ? s = "#ffac00" : r ? s = "#ff0000" : t.color && (s = t.color);
            var l = {
                width: "14px",
                height: "14px",
                marginLeft: "3px",
                verticalAlign: "middle",
                position: "relative",
                top: "-1px",
                cursor: "pointer"
            };
            Object.assign(l, t);
            var u = {
                fontSize: "75%",
                fontWeight: "normal",
                marginLeft: "3px",
                whiteSpace: "nowrap"
            };
            Object.assign(u, n);
            var c = f.a.create("img", {
                src: $e.svg.getSrc("info", s),
                title: r ? o.a.i18n.getMessage("getFileSizeFailTitle") : o.a.i18n.getMessage("getFileSizeTitle"),
                style: l
            }), d = this;
            return a ? a.appendChild(c) : e.nextSibling ? e.parentNode.insertBefore(c, e.nextSibling) : e.parentNode.appendChild(c), 
            c.addEventListener("click", (function(r) {
                r.preventDefault(), r.stopPropagation();
                var a = f.a.create("span", {
                    text: "...",
                    style: u
                });
                c.parentNode.replaceChild(a, c);
                const s = function(r) {
                    if (r.fileSize > 0) {
                        var s = r.fileType || "", l = d.sizeHuman(r.fileSize, 2), u = "";
                        if (/^audio\//i.test(s)) {
                            var c = e.getAttribute("data-savefrom-helper-duration");
                            (c = c && parseInt(c)) > 0 && (u = Math.floor(r.fileSize / c / 125), u += " " + o.a.i18n.getMessage("kbps"));
                        }
                        var p = "";
                        p = u ? l + " ~ " + u : l, i || (p = "(" + p + ")"), a.textContent = p, a.title = s;
                    } else if (r.error) {
                        var f = d.appendFileSizeIcon(e, t, n, !0, i, document.createDocumentFragment());
                        a.parentNode.replaceChild(f, a);
                    } else {
                        var h = d.appendFileSizeIcon(e, t, n, "0", i, document.createDocumentFragment());
                        a.parentNode.replaceChild(h, a);
                    }
                };
                return "ok.ru" === location.host ? fetch(e.href, {
                    method: "HEAD"
                }).then(e => ({
                    fileSize: e.headers.get("content-length"),
                    contentType: e.headers.get("content-type"),
                    status: e.status,
                    error: 200 !== e.status
                })).then(s).catch(() => s({
                    fileSize: 0,
                    error: !0
                })) : o.a.sendMessage({
                    action: "getFileSize",
                    url: e.href
                }, s);
            }), !1), c;
        },
        appendNoSoundIcon: function(e, t) {
            var n = "#ff0000";
            (t = t || {}).color && (n = t.color);
            var r = {
                width: "14px",
                height: "14px",
                marginLeft: "3px",
                verticalAlign: "middle",
                position: "relative",
                top: "-1px",
                cursor: "pointer"
            };
            Object.assign(r, t);
            var i = f.a.create("img", {
                src: $e.svg.getSrc("noSound", n),
                title: o.a.i18n.getMessage("withoutAudio"),
                style: r
            });
            e.nextSibling ? e.parentNode.insertBefore(i, e.nextSibling) : e.parentNode ? e.parentNode.appendChild(i) : e.appendChild(i);
        },
        video: {
            dataAttr: "data-savefrom-video-visible",
            yt: {
                inited: !1,
                show3D: !1,
                showMP4NoAudio: !1,
                showFormat: {
                    FLV: !0,
                    MP4: !0,
                    WebM: !1,
                    "3GP": !1,
                    "Audio AAC": !1,
                    "Audio Vorbis": !1,
                    "Audio Opus": !1
                },
                format: {
                    FLV: {
                        5: {
                            quality: "240"
                        },
                        6: {
                            quality: "270"
                        },
                        34: {
                            quality: "360"
                        },
                        35: {
                            quality: "480"
                        }
                    },
                    MP4: {
                        18: {
                            quality: "360"
                        },
                        22: {
                            quality: "720"
                        },
                        37: {
                            quality: "1080"
                        },
                        38: {
                            quality: "8K"
                        },
                        59: {
                            quality: "480"
                        },
                        78: {
                            quality: "480"
                        },
                        82: {
                            quality: "360",
                            "3d": !0
                        },
                        83: {
                            quality: "240",
                            "3d": !0
                        },
                        84: {
                            quality: "720",
                            "3d": !0
                        },
                        85: {
                            quality: "1080",
                            "3d": !0
                        },
                        160: {
                            quality: "144",
                            noAudio: !0
                        },
                        133: {
                            quality: "240",
                            noAudio: !0
                        },
                        134: {
                            quality: "360",
                            noAudio: !0
                        },
                        135: {
                            quality: "480",
                            noAudio: !0
                        },
                        136: {
                            quality: "720",
                            noAudio: !0
                        },
                        137: {
                            quality: "1080",
                            noAudio: !0
                        },
                        212: {
                            quality: "480",
                            noAudio: !0
                        },
                        213: {
                            quality: "480",
                            noAudio: !0
                        },
                        214: {
                            quality: "720",
                            noAudio: !0
                        },
                        215: {
                            quality: "720",
                            noAudio: !0
                        },
                        264: {
                            quality: "1440",
                            noAudio: !0
                        },
                        138: {
                            quality: "8K",
                            noAudio: !0
                        },
                        298: {
                            quality: "720",
                            noAudio: !0,
                            sFps: !0
                        },
                        299: {
                            quality: "1080",
                            noAudio: !0,
                            sFps: !0
                        },
                        266: {
                            quality: "4K",
                            noAudio: !0
                        }
                    },
                    WebM: {
                        43: {
                            quality: "360"
                        },
                        44: {
                            quality: "480"
                        },
                        45: {
                            quality: "720"
                        },
                        46: {
                            quality: "1080"
                        },
                        167: {
                            quality: "360",
                            noAudio: !0
                        },
                        168: {
                            quality: "480",
                            noAudio: !0
                        },
                        169: {
                            quality: "720",
                            noAudio: !0
                        },
                        170: {
                            quality: "1080",
                            noAudio: !0
                        },
                        218: {
                            quality: "480",
                            noAudio: !0
                        },
                        219: {
                            quality: "480",
                            noAudio: !0
                        },
                        242: {
                            quality: "240",
                            noAudio: !0
                        },
                        243: {
                            quality: "360",
                            noAudio: !0
                        },
                        244: {
                            quality: "480",
                            noAudio: !0
                        },
                        245: {
                            quality: "480",
                            noAudio: !0
                        },
                        246: {
                            quality: "480",
                            noAudio: !0
                        },
                        247: {
                            quality: "720",
                            noAudio: !0
                        },
                        248: {
                            quality: "1080",
                            noAudio: !0
                        },
                        271: {
                            quality: "1440",
                            noAudio: !0
                        },
                        272: {
                            quality: "8K",
                            noAudio: !0
                        },
                        278: {
                            quality: "144",
                            noAudio: !0
                        },
                        100: {
                            quality: "360",
                            "3d": !0
                        },
                        101: {
                            quality: "480",
                            "3d": !0
                        },
                        102: {
                            quality: "720",
                            "3d": !0
                        },
                        302: {
                            quality: "720",
                            noAudio: !0,
                            sFps: !0
                        },
                        303: {
                            quality: "1080",
                            noAudio: !0,
                            sFps: !0
                        },
                        308: {
                            quality: "1440",
                            noAudio: !0,
                            sFps: !0
                        },
                        313: {
                            quality: "4K",
                            noAudio: !0
                        },
                        315: {
                            quality: "4K",
                            noAudio: !0,
                            sFps: !0
                        },
                        330: {
                            quality: "144",
                            noAudio: !0,
                            sFps: !0
                        },
                        331: {
                            quality: "240",
                            noAudio: !0,
                            sFps: !0
                        },
                        332: {
                            quality: "360",
                            noAudio: !0,
                            sFps: !0
                        },
                        333: {
                            quality: "480",
                            noAudio: !0,
                            sFps: !0
                        },
                        334: {
                            quality: "720",
                            noAudio: !0,
                            sFps: !0
                        },
                        335: {
                            quality: "1080",
                            noAudio: !0,
                            sFps: !0
                        },
                        336: {
                            quality: "1440",
                            noAudio: !0,
                            sFps: !0
                        },
                        337: {
                            quality: "2160",
                            noAudio: !0,
                            sFps: !0
                        },
                        398: {
                            quality: "720",
                            noAudio: !0
                        },
                        397: {
                            quality: "480",
                            noAudio: !0
                        },
                        396: {
                            quality: "360",
                            noAudio: !0
                        },
                        395: {
                            quality: "240",
                            noAudio: !0
                        },
                        394: {
                            quality: "144",
                            noAudio: !0
                        }
                    },
                    "3GP": {
                        17: {
                            quality: "144"
                        },
                        36: {
                            quality: "240"
                        }
                    },
                    "Audio AAC": {
                        139: {
                            quality: "48",
                            ext: "m4a",
                            noVideo: !0
                        },
                        140: {
                            quality: "128",
                            ext: "m4a",
                            noVideo: !0
                        },
                        141: {
                            quality: "256",
                            ext: "m4a",
                            noVideo: !0
                        },
                        256: {
                            quality: "192",
                            ext: "m4a",
                            noVideo: !0
                        },
                        258: {
                            quality: "384",
                            ext: "m4a",
                            noVideo: !0
                        },
                        325: {
                            quality: "384",
                            ext: "m4a",
                            noVideo: !0
                        },
                        328: {
                            quality: "384",
                            ext: "m4a",
                            noVideo: !0
                        },
                        380: {
                            quality: "384",
                            ext: "m4a",
                            noVideo: !0
                        }
                    },
                    "Audio Vorbis": {
                        171: {
                            quality: "128",
                            ext: "webm",
                            noVideo: !0
                        },
                        172: {
                            quality: "192",
                            ext: "webm",
                            noVideo: !0
                        }
                    },
                    "Audio Opus": {
                        249: {
                            quality: "48",
                            ext: "opus",
                            noVideo: !0
                        },
                        250: {
                            quality: "128",
                            ext: "opus",
                            noVideo: !0
                        },
                        251: {
                            quality: "256",
                            ext: "opus",
                            noVideo: !0
                        }
                    }
                },
                init: function() {
                    if (!$e.video.yt.inited) {
                        [ "Audio AAC", "Audio Vorbis", "Audio Opus" ].forEach((function(e) {
                            var t = $e.video.yt.format[e];
                            for (var n in t) t[n].quality += " " + o.a.i18n.getMessage("kbps");
                        })), $e.video.yt.show3D = "0" == Xe.preferences.ytHide3D, $e.video.yt.showMP4NoAudio = "0" == Xe.preferences.ytHideMP4NoAudio;
                        var e = !1, t = !1;
                        for (var n in $e.video.yt.showFormat) {
                            var r = "ytHide" + n.replace(" ", "_");
                            "ytHideAudio_AAC" === r && (r = "ytHideAudio_MP4");
                            var i = "0" == Xe.preferences[r];
                            "Audio AAC" === n && (t = i), $e.video.yt.showFormat[n] = i, i && (e = !0);
                        }
                        $e.video.yt.showFormat["Audio Vorbis"] = t, $e.video.yt.showFormat["Audio Opus"] = t, 
                        e || ($e.video.yt.showFormat.FLV = !0), $e.video.yt.inited = !0;
                    }
                },
                show: function(e, t, n, r, i) {
                    r = r || {};
                    var a = document.createElement("div");
                    $e.setStyle(a, {
                        display: "inline-block",
                        margin: "0 auto"
                    }), t.appendChild(a);
                    var s = document.createElement("div");
                    $e.setStyle(s, {
                        display: "inline-block",
                        padding: "0 90px 0 0",
                        position: "relative"
                    }), a.appendChild(s);
                    var l = document.createElement("table");
                    $e.setStyle(l, {
                        emptyCells: "show",
                        borderCollapse: "collapse",
                        margin: "0 auto",
                        padding: "0",
                        width: "auto"
                    }), s.appendChild(l);
                    var u = !1;
                    for (var c in $e.video.yt.format) $e.video.yt.append(e, c, $e.video.yt.format[c], l, r, i) && (u = !0);
                    for (var c in e) if ("ummy" !== c && "ummyAudio" !== c && "meta" !== c) {
                        $e.video.yt.append(e, "", null, l, r, i) && (u = !0);
                        break;
                    }
                    if (l.firstChild) {
                        if (u) {
                            var d = document.createElement("span");
                            if (d.textContent = o.a.i18n.getMessage("more") + " " + String.fromCharCode(187), 
                            $e.setStyle(d, {
                                color: "#555",
                                border: "1px solid #a0a0a0",
                                borderRadius: "3px",
                                display: "block",
                                fontFamily: "Arial",
                                fontSize: "15px",
                                lineHeight: "17px",
                                padding: "1px 5px",
                                position: "absolute",
                                bottom: "3px",
                                right: "0",
                                cursor: "pointer"
                            }), r.btn && "object" == typeof r.btn && $e.setStyle(d, r.btn), s.appendChild(d), 
                            d.addEventListener("click", (function(e) {
                                e.preventDefault(), e.stopPropagation();
                                for (var n = t.querySelectorAll("*[" + $e.video.dataAttr + "]"), r = 0; r < n.length; r++) {
                                    var i = n[r].getAttribute($e.video.dataAttr), a = "none", s = String.fromCharCode(187);
                                    "0" == i ? (i = "1", a = "", s = String.fromCharCode(171)) : i = "0", n[r].style.display = a, 
                                    n[r].setAttribute($e.video.dataAttr, i), this.textContent = o.a.i18n.getMessage("more") + " " + s;
                                }
                                return !1;
                            }), !1), 1 === n) {
                                l.querySelector("td a");
                                a.appendChild(document.createElement("br")), $e.appendDownloadInfo(a, "#a0a0a0", null, {
                                    width: "16px",
                                    height: "16px",
                                    fontSize: "16px",
                                    lineHeight: "16px"
                                });
                            }
                        }
                    } else t.textContent = o.a.i18n.getMessage("noLinksFound");
                },
                append: function(e, t, n, r, i, a) {
                    var s = !1, l = {
                        whiteSpace: "nowrap"
                    }, u = {
                        fontSize: "75%",
                        fontWeight: "normal",
                        marginLeft: "3px",
                        whiteSpace: "nowrap"
                    }, c = document.createElement("tr"), d = document.createElement("td");
                    d.appendChild(document.createTextNode(t || "???")), t && $e.video.yt.showFormat[t] || (c.setAttribute($e.video.dataAttr, "0"), 
                    c.style.display = "none", s = !0), $e.setStyle(d, {
                        border: "none",
                        padding: "3px 15px 3px 0",
                        textAlign: "left",
                        verticalAlign: "middle"
                    }), c.appendChild(d), d = document.createElement("td"), $e.setStyle(d, {
                        border: "none",
                        padding: "3px 0",
                        textAlign: "left",
                        verticalAlign: "middle",
                        lineHeight: "17px"
                    }), c.appendChild(d);
                    var p = e.meta || {}, f = !1;
                    if (n) {
                        for (var h in n) if (e[h]) {
                            var A = n[h].quality;
                            f && (d.lastChild.style.marginRight = "15px", d.appendChild(document.createTextNode(" ")));
                            const r = document.createElement("span");
                            r.style.whiteSpace = "nowrap";
                            const c = document.createElement("a");
                            if (c.href = e[h], c.title = o.a.i18n.getMessage("downloadTitle"), p[h] && (p[h].quality && (A = p[h].quality), 
                            n[h].sFps && (A += " " + (p[h].fps || 60))), n[h]["3d"] ? c.textContent = "3D" : c.textContent = A, 
                            a) {
                                var m = n[h].ext;
                                m || (m = t.toLowerCase()), c.setAttribute("download", g.a.modify(a + "." + m)), 
                                c.addEventListener("click", (function(e) {
                                    $e.downloadOnClick(e);
                                }), !1);
                            }
                            if ($e.setStyle(c, l), i.link && "object" == typeof i.link && $e.setStyle(c, i.link), 
                            r.appendChild(c), $e.appendFileSizeIcon(c, i.fsIcon, i.fsText), n[h]["3d"]) {
                                $e.video.yt.show3D || (s = !0, r.setAttribute($e.video.dataAttr, "0"), r.style.display = "none");
                                var v = document.createElement("span");
                                v.textContent = A, $e.setStyle(v, u), i.text && "object" == typeof i.text && $e.setStyle(v, i.text), 
                                c.appendChild(v);
                            }
                            n[h].noAudio && ($e.video.yt.showMP4NoAudio || (s = !0, r.setAttribute($e.video.dataAttr, "0"), 
                            r.style.display = "none"), $e.appendNoSoundIcon(c, !!i && i.noSoundIcon)), d.appendChild(r), 
                            f = !0, delete e[h];
                        }
                    } else for (var h in e) {
                        f && (d.lastChild.style.marginRight = "15px", d.appendChild(document.createTextNode(" ")));
                        const t = document.createElement("span");
                        t.style.whiteSpace = "nowrap";
                        const n = document.createElement("a");
                        n.href = e[h], n.title = o.a.i18n.getMessage("downloadTitle"), n.textContent = h, 
                        $e.setStyle(n, l), i.link && "object" == typeof i.link && $e.setStyle(n, i.link), 
                        t.appendChild(n), $e.appendFileSizeIcon(n, i.fsIcon, i.fsText), d.appendChild(t), 
                        f = !0, delete e[h];
                    }
                    if (!1 !== f) return r.appendChild(c), s;
                }
            }
        },
        playlist: {
            btnStyle: {
                display: "block",
                fontWeight: "bold",
                border: "none",
                textDecoration: "underline"
            },
            getFilelistHtml: function(e) {
                if (e && 0 != e.length) {
                    for (var t, n = 0, r = "", i = 0; i < e.length; i++) e[i].url && (r += e[i].url + "\r\n", 
                    n++);
                    if (r) return n < 5 ? n = 5 : n > 14 && (n = 14), f.a.create(document.createDocumentFragment(), {
                        append: [ f.a.create("p", {
                            text: o.a.i18n.getMessage("filelistTitle"),
                            style: {
                                color: "#0D0D0D",
                                fontSize: "20px",
                                marginBottom: "11px",
                                marginTop: "5px"
                            }
                        }), f.a.create("p", {
                            style: {
                                marginBottom: "11px"
                            },
                            append: Object(h.a)(o.a.i18n.getMessage("filelistInstruction"))
                        }), f.a.create("p", {
                            text: o.a.i18n.getMessage("vkFoundFiles").replace("%d", e.length),
                            style: {
                                color: "#000",
                                marginBottom: "11px"
                            },
                            append: f.a.create("a", {
                                text: o.a.i18n.getMessage("playlist"),
                                href: "#",
                                class: "sf__playlist",
                                style: {
                                    display: "none",
                                    cssFloat: "right"
                                }
                            })
                        }), t = f.a.create("textarea", {
                            text: r,
                            rows: n,
                            cols: 60,
                            style: {
                                width: "100%",
                                whiteSpace: o.a.isFirefox || o.a.isGM && !o.a.isTM ? "normal" : "nowrap"
                            }
                        }), o.a.isChrome || o.a.isFirefox ? f.a.create("button", {
                            text: o.a.i18n.getMessage("copy"),
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
                                var n = this;
                                n.disabled = !0, o.a.isFirefox ? (t.select(), document.execCommand("copy")) : o.a.sendMessage({
                                    action: "addToClipboard",
                                    text: r
                                }), setTimeout((function() {
                                    n.disabled = !1;
                                }), 1e3);
                            } ],
                            append: f.a.create("style", {
                                text: Object(s.a)({
                                    "#savefrom_popup_box": {
                                        append: {
                                            "button:hover:not(:disabled)": {
                                                backgroundColor: "#597A9E !important",
                                                borderColor: "#597A9E !important",
                                                color: "#fff"
                                            },
                                            "button:active": {
                                                opacity: .9
                                            }
                                        }
                                    }
                                })
                            })
                        }) : void 0 ]
                    });
                }
            },
            popupFilelist: function(e, t, n, r) {
                var o = $e.playlist.getFilelistHtml(e);
                if (o) {
                    var i = $e.popupDiv(o, r);
                    if (n) {
                        var a = i.querySelector("a.sf__playlist");
                        a && (a.addEventListener("click", (function(n) {
                            return setTimeout((function() {
                                $e.playlist.popupPlaylist(e, t, !0, r);
                            }), 100), n.preventDefault(), !1;
                        }), !1), $e.setStyle(a, $e.playlist.btnStyle));
                    }
                }
            },
            getInfoPopupTemplate: function() {
                var e = f.a.create("div", {
                    class: "sf-infoPopupTemplate",
                    style: {
                        width: "400px",
                        minHeight: "40px"
                    }
                }), t = f.a.create("div", {
                    style: {
                        backgroundSize: "48px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center top",
                        display: "inline-block",
                        width: "60px",
                        height: "60px",
                        cssFloat: "left",
                        marginTop: "16px",
                        marginRight: "10px"
                    }
                }), n = f.a.create("div", {
                    style: {
                        display: "inline-block",
                        width: "330px"
                    }
                }), r = f.a.create("div", {
                    style: {
                        textAlign: "right"
                    },
                    append: f.a.create("style", {
                        text: Object(s.a)({
                            ".sf-infoPopupTemplate": {
                                append: [ {
                                    "a.sf-button": {
                                        padding: "1px 6px",
                                        display: "inline-block",
                                        textAlign: "center",
                                        height: "23px",
                                        lineHeight: "23px",
                                        textDecoration: "none"
                                    }
                                }, {
                                    selector: [ "button:hover", "a.sf-button:hover" ],
                                    style: {
                                        backgroundColor: "#597A9E !important",
                                        borderColor: "#597A9E !important",
                                        color: "#fff"
                                    }
                                } ]
                            }
                        })
                    })
                });
                return e.appendChild(t), e.appendChild(n), e.appendChild(r), {
                    icon: t,
                    buttonContainer: r,
                    textContainer: n,
                    body: e
                };
            },
            getM3U: function(e) {
                for (var t = "#EXTM3U\r\n", n = 0; n < e.length; n++) e[n].duration || (e[n].duration = "-1"), 
                (e[n].title || e[n].duration) && (t += "#EXTINF:" + e[n].duration + "," + e[n].title + "\r\n"), 
                t += e[n].url + "\r\n";
                return t;
            },
            getPlaylistHtml: function(e, t) {
                if (e && 0 != e.length) {
                    var n = e.length, r = $e.dateToObj(), i = r.year + "-" + r.month + "-" + r.day + " " + r.hour + "-" + r.min, a = $e.playlist.getM3U(e);
                    a = a.replace(/\r\n/g, "\n");
                    var s = Object(c.a)(a, "audio/x-mpegurl"), l = $e.playlist.getInfoPopupTemplate();
                    return o.a.sendMessage({
                        action: "getWarningIcon",
                        color: "#00CCFF",
                        type: "playlist"
                    }, (function(e) {
                        l.icon.style.backgroundImage = "url(" + e + ")";
                    })), f.a.create(l.textContainer, {
                        append: [ f.a.create("p", {
                            text: t || o.a.i18n.getMessage("playlistTitle"),
                            style: {
                                color: "#0D0D0D",
                                fontSize: "20px",
                                marginBottom: "11px",
                                marginTop: "13px"
                            }
                        }), f.a.create("p", {
                            text: o.a.i18n.getMessage("playlistInstruction"),
                            style: {
                                color: "#868686",
                                fontSize: "14px",
                                marginBottom: "13px",
                                lineHeight: "24px",
                                marginTop: "0px"
                            }
                        }), f.a.create("a", {
                            text: o.a.i18n.getMessage("filelist") + " (" + n + ")",
                            href: "#",
                            class: "sf__playlist",
                            style: {
                                display: "none",
                                fontSize: "14px",
                                marginBottom: "13px",
                                lineHeight: "24px",
                                marginTop: "0px"
                            }
                        }) ]
                    }), t || (t = "playlist"), t += " " + i, f.a.create(l.buttonContainer, {
                        append: [ f.a.create("a", {
                            text: o.a.i18n.getMessage("download"),
                            href: s,
                            download: g.a.modify(t + ".m3u"),
                            class: "sf-button",
                            style: {
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
                    }), l.body;
                }
            },
            popupPlaylist: function(e, t, n, r) {
                var o = $e.playlist.getPlaylistHtml(e, t);
                if (o) {
                    var i = $e.popupDiv(o, r);
                    if (n) {
                        var a = i.querySelector("a.sf__playlist");
                        a && (a.addEventListener("click", (function(n) {
                            return setTimeout((function() {
                                $e.playlist.popupFilelist(e, t, !0, r);
                            }), 100), n.preventDefault(), !1;
                        }), !1), a.style.display = "inline", a = null);
                    }
                    for (var s, l = i.querySelectorAll("a[download]"), u = 0; s = l[u]; u++) s.addEventListener("click", $e.downloadOnClick, !1);
                }
            }
        },
        popupCloseBtn: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAWUlEQVQ4y2NgGHHAH4j1sYjrQ+WIAvFA/B+I36MZpg8V+w9VQ9Al/5EwzDBkQ2AYr8uwaXiPQ0yfkKuwGUayIYQMI8kQqhlEFa9RLbCpFv1US5BUzSLDBAAARN9OlWGGF8kAAAAASUVORK5CYII=",
        popupDiv: function(e, t, n, r, o) {
            let i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                docCloseEnable: !0
            };
            t || (t = "savefrom_popup_box"), n || (n = 580), r || (r = 520);
            var a = document.getElementById(t);
            a && a.parentNode.removeChild(a), a = f.a.create("div", {
                id: t,
                style: {
                    zIndex: "9999",
                    display: "block",
                    cssFloat: "none",
                    position: "fixed",
                    margin: "0",
                    padding: "0",
                    visibility: "hidden",
                    color: "#000",
                    background: "#fff",
                    border: "3px solid #c0cad5",
                    borderRadius: "7px",
                    overflow: "auto"
                }
            });
            var s = f.a.create("div", {
                style: {
                    display: "block",
                    cssFloat: "none",
                    position: "relative",
                    overflow: "auto",
                    margin: "0",
                    padding: "10px 15px"
                }
            });
            "function" == typeof e ? e(s) : s.appendChild(e);
            var l = f.a.create("img", {
                src: $e.popupCloseBtn,
                alt: "x",
                width: 18,
                height: 18,
                style: {
                    position: "absolute",
                    top: "10px",
                    right: "15px",
                    opacity: "0.5",
                    cursor: "pointer"
                },
                on: [ [ "mouseenter", function() {
                    this.style.opacity = "0.9";
                } ], [ "mouseleave", function() {
                    this.style.opacity = "0.5";
                } ], [ "click", function() {
                    return a.parentNode && a.parentNode.removeChild(a), o && o(), !1;
                } ] ]
            });
            s.appendChild(l), a.appendChild(s), document.body.appendChild(a), a.offsetWidth > n && (a.style.width = n + "px"), 
            a.offsetHeight > r && (a.style.height = r + "px", a.style.width = n + 20 + "px"), 
            setTimeout((function() {
                var e = Math.floor((window.innerWidth - a.offsetWidth) / 2), t = Math.floor((window.innerHeight - a.offsetHeight) / 2);
                t < 0 && (t = 0), -1 !== location.host.indexOf("youtu") && t < 92 && (t = 92, a.style.height = a.offsetHeight - t - 10 + "px"), 
                e < 0 && (e = 0), $e.setStyle(a, {
                    top: t + "px",
                    left: e + "px",
                    visibility: "visible"
                });
            }));
            var u = function e(t) {
                if (i && !i.docCloseEnable) return !1;
                var n = t.target;
                n === a || $e.isParent(n, a) || (a.parentNode && a.parentNode.removeChild(a), document.removeEventListener("click", e, !1), 
                o && o());
            };
            return setTimeout((function() {
                document.addEventListener("click", u, !1);
            }), 100), a.addEventListener("close", (function() {
                a.parentNode && a.parentNode.removeChild(a), document.removeEventListener("click", u, !1), 
                o && o();
            })), a.addEventListener("kill", (function() {
                a.parentNode && a.parentNode.removeChild(a), document.removeEventListener("click", u, !1);
            })), a;
        },
        popupDiv2: function(e) {
            var t = {
                id: "savefrom_popup_box",
                containerStyle: null,
                bodyStyle: null,
                content: null,
                container: null,
                body: null,
                _onClose: function() {
                    document.removeEventListener("click", t._onClose), n.parentNode && n.parentNode.removeChild(n), 
                    t.onClose && t.onClose();
                }
            };
            Object.assign(t, e);
            var n = t.container = f.a.create("div", {
                id: t.id,
                style: {
                    zIndex: 9999,
                    display: "block",
                    position: "fixed",
                    background: "#fff",
                    border: "3px solid #c0cad5",
                    borderRadius: "7px"
                },
                append: [ f.a.create("style", {
                    text: Object(s.a)({
                        selector: "#" + t.id,
                        style: p
                    })
                }) ],
                on: [ [ "click", function(e) {
                    e.stopPropagation();
                } ] ]
            }), r = f.a.create("img", {
                src: $e.popupCloseBtn,
                alt: "x",
                width: 18,
                height: 18,
                style: {
                    position: "absolute",
                    top: "10px",
                    right: "15px",
                    opacity: "0.5",
                    cursor: "pointer"
                },
                on: [ [ "mouseenter", function() {
                    this.style.opacity = "0.9";
                } ], [ "mouseleave", function() {
                    this.style.opacity = "0.5";
                } ], [ "click", t._onClose ] ]
            });
            n.appendChild(r);
            var o = t.body = f.a.create("div", {
                style: i({
                    display: "block",
                    position: "relative",
                    padding: "10px 15px",
                    overflow: "auto"
                }, t.bodyStyle)
            });
            return "function" == typeof t.content ? t.content(o) : o.appendChild(t.content), 
            n.appendChild(o), document.body.appendChild(n), document.addEventListener("click", t._onClose), 
            t;
        },
        showTooltip: function(e, t, n, r) {
            if (e) {
                var o = document.querySelector(".savefrom-tooltip");
                o || ((o = document.createElement("div")).className = "savefrom-tooltip", $e.setStyle(o, {
                    position: "absolute",
                    opacity: 0,
                    zIndex: -1
                }), r && $e.setStyle(o, r)), o.textContent = t, o.lastNode && o.lastNode === e || (o.lastNode && (d.a.off(o.lastNode, "mouseleave", a), 
                d.a.off(o.lastNode, "mousemove", i), o.lastRow && d.a.off(o.lastRow, "mouseleave", a)), 
                o.lastNode = e, n && (o.lastRow = n), d.a.on(e, "mouseleave", a), d.a.on(e, "mousemove", i, !1), 
                n && d.a.on(n, "mouseleave", a), document.body.appendChild(o)), i();
            }
            function i(t) {
                void 0 !== t && t.stopPropagation();
                var n = $e.getPosition(e), r = $e.getSize(o);
                0 == n.top && 0 == n.left || (n.top = n.top - r.height - 10, n.left = n.left - r.width / 2 + $e.getSize(e).width / 2, 
                n.left = Math.min(n.left, document.body.clientWidth + document.body.scrollLeft - r.width), 
                n.top < document.body.scrollTop && (n.top = n.top + r.height + $e.getSize(e).height + 20), 
                n.top += "px", n.left += "px", n.zIndex = 9999, n.opacity = 1, $e.setStyle(o, n));
            }
            function a() {
                o.parentNode && document.body.removeChild(o), o.lastNode = null, o.lastRow = null, 
                $e.setStyle(o, {
                    zIndex: -1,
                    opacity: 0
                }), d.a.off(e, "mouseleave", a), d.a.off(e, "mousemove", i), n && d.a.off(n, "mouseleave", a);
            }
        },
        embedDownloader: {
            dataAttr: "data-savefrom-get-links",
            dataIdAttr: "data-savefrom-container-id",
            containerClass: "savefrom-links-container",
            linkClass: "savefrom-link",
            panel: null,
            lastLink: null,
            style: null,
            hostings: {
                youtube: {
                    re: [ /^https?:\/\/(?:[a-z]+\.)?youtube\.com\/(?:#!?\/)?watch\?.*v=([\w\-]+)/i, /^https?:\/\/(?:[a-z0-9]+\.)?youtube\.com\/(?:embed|v)\/([\w\-]+)/i, /^https?:\/\/(?:[a-z]+\.)?youtu\.be\/([\w\-]+)/i ],
                    action: "getYoutubeLinks",
                    prepareLinks: function(e) {
                        var t = [], n = $e.video.yt.format, r = e.meta || {};
                        for (var o in n) for (var i in n[o]) {
                            var a = r[i] || {};
                            if (e[i]) {
                                var s = o;
                                n[o][i].ext && (s = n[o][i].ext);
                                var l = n[o][i].quality;
                                a.quality && (l = a.quality), n[o][i].sFps && (l += " " + (a.fps || 60)), n[o][i]["3d"] && (l += " (3d)"), 
                                t.push({
                                    name: o + " " + l,
                                    type: s,
                                    url: e[i],
                                    noSound: n[o][i].noAudio
                                });
                            }
                        }
                        return t;
                    }
                },
                vimeo: {
                    re: [ /^https?:\/\/(?:[\w\-]+\.)?vimeo\.com\/(?:\w+\#)?(\d+)/i, /^https?:\/\/player\.vimeo\.com\/video\/(\d+)/i, /^https?:\/\/(?:[\w\-]+\.)?vimeo\.com\/channels\/(?:[^\/]+)\/(\d+)$/i, /^https?:\/\/vimeo\.com\/(?:.+)clip_id=(\d+)/i ],
                    action: "getVimeoLinks",
                    prepareLinks: function(e) {
                        return e.map((function(e) {
                            var t = e.ext;
                            return t || (t = "MP4", -1 != e.url.search(/\.flv($|\?)/i) && (t = "FLV")), e.name = e.name ? e.name : t, 
                            e.type = e.type ? e.type : t, e.ext = t, e;
                        }));
                    }
                },
                vk: {
                    re: [ /^https?:\/\/(?:[\w\-]+\.)?(?:vk\.com|vkontakte\.ru)\/(?:[^\/]+\/)*(?:[\w\-\.]+\?.*z=)?(video-?\d+_-?\d+\?list=[0-9a-z]+|video-?\d+_-?\d+)/i, /^https?:\/\/(?:[\w\-]+\.)?(?:vk\.com|vkontakte\.ru)\/video_ext\.php\?(.+)/i ],
                    action: "getVKLinks"
                },
                dailymotion: {
                    re: [ /^http:\/\/(?:www\.)?dai\.ly\/([a-z0-9]+)_?/i, /^https?:\/\/(?:[\w]+\.)?dailymotion\.com(?:\/embed|\/swf)?\/video\/([a-z0-9]+)_?/i ],
                    action: "getDailymotionLinks"
                },
                facebook: {
                    re: [ /^https?:\/\/(?:[\w]+\.)?facebook\.com(?:\/video)?\/video.php.*[?&]{1}v=([0-9]+).*/i, /^https?:\/\/(?:[\w]+\.)?facebook\.com\/.+\/videos(?:\/\w[^\/]+)?\/(\d+)/i ],
                    action: "getFacebookLinks"
                }
            },
            init: function(e) {
                this.style = e, this.panel && $e.popupMenu.removePanel(), this.panel = null, this.lastLink = null;
                var t, n = document.querySelectorAll("a[" + this.dataAttr + "]"), r = n.length;
                for (t = 0; t < r; t++) [ "savefrom.net", "sf-addon.com" ].indexOf($e.getTopLevelDomain(n[t].hostname)) > -1 && (n[t].removeEventListener("click", this.onClick, !1), 
                n[t].addEventListener("click", this.onClick, !1));
                document.body && (document.body.removeEventListener("click", this.onBodyClick, !0), 
                document.body.addEventListener("click", this.onBodyClick, !0));
            },
            checkUrl: function(e) {
                for (var t in this.hostings) for (var n = this.hostings[t], r = 0, o = n.re.length; r < o; r++) {
                    var i = e.match(n.re[r]);
                    if (i) return {
                        hosting: t,
                        action: n.action,
                        extVideoId: i[1]
                    };
                }
                return null;
            },
            reMapHosting: function(e) {
                return {
                    getYoutubeLinks: "youtube",
                    getVimeoLinks: "vimeo",
                    getDailymotionLinks: "dailymotion",
                    getFacebookLinks: "facebook",
                    getVKLinks: "vk"
                }[e];
            },
            onClick: function(e, t) {
                var n = $e.embedDownloader;
                if (!t) {
                    for (t = e.target; t.parentNode && "A" !== t.nodeName; ) t = t.parentNode;
                    if (!t) return;
                }
                var r = t.getAttribute("data-savefrom-get-links");
                if (r && 0 === e.button && !e.ctrlKey && !e.shiftKey) {
                    if (n.lastLink === t && n.panel && "none" != n.panel.style.display) return n.lastLink = null, 
                    n.panel.style.display = "none", e.preventDefault(), void e.stopPropagation();
                    n.lastLink = t;
                    var i = n.checkUrl(r);
                    if (i) {
                        e.preventDefault(), e.stopPropagation();
                        var a = {
                            action: i.action,
                            extVideoId: i.extVideoId
                        };
                        return n.showLinks(o.a.i18n.getMessage("download") + " ...", null, t), o.a.sendMessage(a, (function(e) {
                            var r = i.hosting;
                            e.action != a.action && (r = n.reMapHosting(e.action)), e.links ? n.showLinks(e.links, e.title, t, r, !0) : n.showLinks(o.a.i18n.getMessage("noLinksFound"), null, t, void 0, !0);
                        })), !1;
                    }
                }
            },
            onBodyClick: function(e) {
                var t = $e.embedDownloader, n = e.target;
                if (!t.panel || "none" == t.panel.style.display) {
                    if ("A" !== n.tagName && Object(l.a)(n, "A " + n.tagName)) for (;n.parentNode && "A" !== n.tagName; ) n = n.parentNode;
                    if ("A" !== n.nodeName) return;
                    return n.hasAttribute(t.dataAttr) && [ "savefrom.net", "sf-addon.com" ].indexOf($e.getTopLevelDomain(n.hostname)) > -1 ? t.onClick(e, n) : void 0;
                }
                t.panel === n || t.panel.contains(n) || (t.lastLink = null, t.panel.style.display = "none", 
                e.preventDefault(), e.stopPropagation());
            },
            hidePanel: function() {
                this.panel && (this.panel.style.display = "none");
            },
            createMenu: function(e, t, n, r, i) {
                var a = o.a.i18n.getMessage("noLinksFound");
                "string" == typeof e ? a = e : void 0 !== $e.popupMenu.prepareLinks[r] && e && (a = $e.popupMenu.prepareLinks[r](e, t));
                var s = {
                    links: a,
                    button: n,
                    popupId: void 0,
                    showFileSize: !0,
                    containerClass: this.containerClass,
                    linkClass: this.linkClass,
                    style: {
                        popup: this.style ? this.style.container : void 0,
                        item: this.style ? this.style.link : void 0
                    },
                    isUpdate: i
                };
                i && this.panel ? $e.popupMenu.update(this.panel, s) : this.panel = $e.popupMenu.create(s);
            },
            showLinks: function(e, t, n, r, i) {
                var a, s = n.getAttribute(this.dataIdAttr);
                if (s && (a = document.getElementById(s)), a) if (this.panel && (this.panel.style.display = "none"), 
                "string" == typeof e) a.textContent = e; else if (e && 0 != e.length) {
                    r && this.hostings[r] && this.hostings[r].prepareLinks && (e = this.hostings[r].prepareLinks(e)), 
                    a.textContent = "";
                    for (var l = 0; l < e.length; l++) if (e[l].url && e[l].name) {
                        (n = document.createElement("a")).href = e[l].url, n.title = o.a.i18n.getMessage("downloadTitle"), 
                        n.appendChild(document.createTextNode(e[l].name));
                        var u = document.createElement("span");
                        u.className = this.linkClass, u.appendChild(n), a.appendChild(u), $e.appendFileSizeIcon(n), 
                        e[l].noSound && $e.appendNoSoundIcon(n), t && !e[l].noTitle && e[l].type && (n.setAttribute("download", g.a.modify(t + "." + e[l].type.toLowerCase())), 
                        n.addEventListener("click", $e.downloadOnClick, !1));
                    }
                } else a.textContent = o.a.i18n.getMessage("noLinksFound"); else this.createMenu(e, t, n, r, i);
            }
        },
        popupMenu: {
            popupId: "sf_popupMenu",
            popup: void 0,
            popupStyle: void 0,
            dataArrtVisible: "data-isVisible",
            extStyleCache: void 0,
            ummyIcon: null,
            badgeQualityList: [ "8K", "4K", "2160", "1440", "1080", "720", "ummy", "mp3", "4320" ],
            createProBadge(e) {
                return Object(Q.a)([ "userInfo" ]).then(e => e.userInfo && e.userInfo.isPremium).then(t => {
                    const n = f.a.create("div", {
                        style: {
                            display: "inline-block"
                        }
                    });
                    let r = {
                        display: "inline-block",
                        backgroundColor: "#505050",
                        lineHeight: "18px",
                        color: "#fff",
                        fontSize: "12px",
                        fontFamily: "'Roboto', sans-serif",
                        borderRadius: "2px",
                        verticalAlign: "middle",
                        textAlign: "center",
                        paddingRight: "2px",
                        paddingLeft: "2px",
                        fontWeight: "bold",
                        marginLeft: "3px",
                        borderBottomRightRadius: t ? "2px" : 0,
                        borderTopRightRadius: t ? "2px" : 0
                    };
                    const o = f.a.create("div", {
                        text: this.prepareQualityLabel(e),
                        style: r
                    });
                    if (n.appendChild(o), !t) {
                        const e = f.a.create("div", {
                            text: "PRO",
                            style: Ye(Ye({}, r), {}, {
                                width: "auto",
                                backgroundColor: "#54B85B",
                                marginLeft: 0,
                                borderBottomRightRadius: "3px",
                                borderTopRightRadius: "3px"
                            })
                        });
                        n.appendChild(e);
                    }
                    return n;
                });
            },
            prepareQualityLabel(e) {
                const t = String(e);
                if ([ "1080", "720", "1440" ].includes(t)) return "HD";
                return {
                    2160: "4K",
                    4320: "8K",
                    hls: "HLS",
                    1440: "QHD"
                }[t] || t.toUpperCase();
            },
            createBadge: function(e, t) {
                t = t || {};
                var n = {
                    display: "inline-block",
                    lineHeight: "18px",
                    width: "19px",
                    height: "17px",
                    color: "#fff",
                    fontSize: "12px",
                    borderRadius: "2px",
                    verticalAlign: "middle",
                    textAlign: "center",
                    paddingRight: "2px",
                    fontWeight: "bold",
                    marginLeft: "3px"
                };
                for (var r in t.containerStyle) n[r] = t.containerStyle[r];
                var o = f.a.create("div", {
                    style: n
                });
                return "HLS" === e ? (o.textContent = "HLS", o.style.width = "26px", o.style.paddingRight = "1px", 
                o.style.backgroundColor = "#505050") : "1080" === e || "2160" === e || "1440" === e || "720" === e ? (o.textContent = "HD", 
                o.style.backgroundColor = "#505050", o.style.paddingRight = "1px") : "8K" === e || "4K" === e ? (o.textContent = "HD", 
                o.style.paddingRight = "1px", o.style.backgroundColor = "rgb(247, 180, 6)") : "mp3" !== e && "MP3" !== e || (o.textContent = "MP3", 
                o.style.width = "26px", o.style.paddingRight = "1px", o.style.backgroundColor = "#505050"), 
                o;
            },
            getTitleNode: function(e) {
                var t = $e.popupMenu, n = f.a.create("span", {
                    style: {
                        cssFloat: "left"
                    }
                });
                if ("converter" === e.extra) {
                    var r = document.createDocumentFragment();
                    -1 !== [ "MP3", "8K", "4K", "1440", "1080", "720" ].indexOf(e.format) ? r.appendChild(t.createBadge(e.format, {
                        containerStyle: {
                            marginLeft: 0
                        }
                    })) : r.appendChild(document.createTextNode(e.format)), f.a.create(n, {
                        append: [ r, " ", e.quality ]
                    }), r = null;
                } else if (e.itemText) n.textContent = e.itemText; else {
                    let t = e.quality ? " " + e.quality : "";
                    "mp3" === e.quality && "pro" === e.itag && (t = "");
                    var o = e.format ? e.format : "???", i = e["3d"] ? "3D " : "", a = "";
                    e.sFps && (a += " " + (e.fps || 60)), n.textContent = i + o + t + a;
                }
                return "pro" === e.itag ? t.createProBadge(String(e.quality)).then(e => {
                    e && n.appendChild(e);
                }) : -1 !== t.badgeQualityList.indexOf(String(e.quality)) && n.appendChild(t.createBadge(String(e.quality))), 
                n;
            },
            createPopupItem: function(e, t) {
                var n, r = $e.popupMenu;
                if ("-" === (n = "string" == typeof e ? e : e.href)) return {
                    el: f.a.create("div", {
                        style: {
                            display: "block",
                            margin: "1px 0",
                            borderTop: "1px solid rgb(214, 214, 214)"
                        }
                    })
                };
                var i = document.createElement("-text-" === n ? "div" : "a");
                t.linkClass && i.classList.add(t.linkClass);
                var a = {
                    display: "block",
                    padding: "0 5px",
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    overflow: "hidden"
                };
                if (e.isHidden && (i.setAttribute(r.dataArrtVisible, "0"), a.display = "none"), 
                $e.setStyle(i, a), "televzr" === e.itag) {
                    const t = document.createElement("div");
                    return Object(x.a)(Object(w.e)(Ue, {
                        openUrl: e.href
                    }), t), {
                        el: t,
                        prop: e
                    };
                }
                if ("-text-" === n) return i.style.lineHeight = "22px", {
                    el: i
                };
                if (i.href = n, "#" === n) return {
                    el: i
                };
                if ((o.a.isGM || o.a.isSafari) && (e.extra || (i.title = o.a.i18n.getMessage("downloadTitle"))), 
                e.forceDownload && !e.forceConverter) {
                    var s = "";
                    if (e.title) {
                        var l = (e.ext || e.format || "").toLowerCase();
                        l && (l = "." + l), s = e.title + l;
                    }
                    i.setAttribute("download", g.a.modify(s)), i.addEventListener("click", (function(e) {
                        $e.downloadOnClick(e, null, {
                            el: this
                        });
                    }), !1);
                }
                var u = [];
                e.func && (Array.isArray(e.func) ? u.push.apply(u, e.func) : u.push(e.func)), t.onItemClick && -1 === u.indexOf(t.onItemClick) && u.push(t.onItemClick), 
                u.length && i.addEventListener("click", (function(t) {
                    var n = this;
                    u.forEach((function(r) {
                        return r.call(n, t, e);
                    }));
                }), !1), e.isBlank && i.setAttribute("target", "_blank"), i.appendChild(r.getTitleNode(e));
                var c = f.a.create("span", {
                    style: {
                        cssFloat: "right",
                        lineHeight: "22px",
                        height: "22px"
                    }
                }), p = {
                    top: "5px",
                    verticalAlign: "top"
                };
                for (var h in t.sizeIconStyle) p[h] = t.sizeIconStyle[h];
                e.noAudio && $e.appendNoSoundIcon(c, p);
                var A = null;
                return e.noSize || (c.addEventListener("click", (function e(t) {
                    "IMG" === c.firstChild.tagName && (t.preventDefault(), t.stopPropagation(), d.a.trigger(c.firstChild, "click", {
                        cancelable: !0
                    })), this.removeEventListener("click", e);
                })), A = $e.appendFileSizeIcon(i, p, {
                    marginLeft: 0
                }, void 0, !0, c, e)), i.appendChild(c), {
                    el: i,
                    sizeIcon: A,
                    prop: e
                };
            },
            sortMenuItems: function(e, t) {
                void 0 === t && (t = {});
                var n = [ "HLS", "Audio Opus", "Audio Vorbis", "Audio AAC", "3GP", "WebM", "FLV", "MP4" ], r = {
                    Mobile: 280,
                    LD: 280,
                    SD: 360,
                    HD: 720,
                    ummy: 1
                };
                t.strQualityExtend && Object.assign(r, t.strQualityExtend);
                var o = {}, i = [], a = [], s = [], l = [], u = [], c = [], d = [], p = [];
                e.forEach((function(e) {
                    var n = e.prop;
                    t.noProp && (n = e);
                    var f = n.sort || {};
                    if (!n.format) return p.push(e), 1;
                    if (n.isOther) p.push(e); else if (n.isSubtitle) l.push(e); else if (n.noVideo) i[n.quality] = parseInt(n.quality), 
                    s.push(e); else {
                        var h = f.size || r[n.quality] || -1;
                        if (-1 === h && (h = "K" === String(n.quality).substr(-1) ? 1e3 * parseInt(n.quality) : parseInt(n.quality)), 
                        t.maxSize && h > t.maxSize) return 1;
                        if (t.minSize && h < t.minSize) return 1;
                        o[n.quality] = h, n.noAudio ? n.sFps ? u.push(e) : c.push(e) : n["3d"] ? d.push(e) : a.push(e);
                    }
                }));
                var f = function(e, t) {
                    return e.noVideo && t.noVideo ? function(e, t) {
                        return i[e.quality] > i[t.quality] ? -1 : i[e.quality] === i[t.quality] ? 0 : 1;
                    }(e, t) : e.noVideo ? 1 : t.noVideo || n.indexOf(e.format) > n.indexOf(t.format) ? -1 : n.indexOf(e.format) === n.indexOf(t.format) ? 0 : 1;
                }, h = function(e, n) {
                    var r = e.prop, i = n.prop;
                    t.noProp && (r = e, i = n);
                    var a = function(e, t) {
                        const n = o[e.quality], r = o[t.quality];
                        return isNaN(n) && isNaN(r) ? 0 : isNaN(n) ? -1 : isNaN(r) ? 1 : n > r ? -1 : n === r ? 0 : 1;
                    }(r, i);
                    return 0 !== a ? a : f(r, i);
                };
                a.sort(h), d.sort(h), s.sort(h), u.sort(h), c.sort(h);
                var g = null;
                return t.typeList ? (g = [], -1 !== t.typeList.indexOf("video") && (g = g.concat(a)), 
                -1 !== t.typeList.indexOf("3d") && (g = g.concat(d)), -1 !== t.typeList.indexOf("audio") && (g = g.concat(s)), 
                -1 !== t.typeList.indexOf("mute") && (g = g.concat(c)), -1 !== t.typeList.indexOf("mute60") && (g = g.concat(u)), 
                -1 !== t.typeList.indexOf("subtitles") && (g = g.concat(l)), -1 !== t.typeList.indexOf("other") && (g = g.concat(p))) : g = a.concat(d, s, l, u, c, p), 
                t.groupCompare && g.sort(h), g.sort((e, t) => {
                    const n = e.itag || e.prop && e.prop.itag, r = t.itag || t.prop && t.prop.itag;
                    return "pro" !== n && "pro" !== r || n === r ? 0 : "pro" === n ? -1 : 1;
                }), g;
            },
            removePanel: function() {
                null !== this.popup.parentNode && this.popup.parentNode.removeChild(this.popup), 
                void 0 !== this.popupStyle && null !== this.popupStyle.parentNode && this.popupStyle.parentNode.removeChild(this.popupStyle), 
                this.popup = void 0, this.popupStyle = void 0;
            },
            getContent: function(e) {
                var t = this, n = e.links, r = document.createDocumentFragment(), i = [];
                if (e.title) {
                    var a = t.createPopupItem("-text-", e).el;
                    a.textContent = e.title, a.style.color = "rgb(109, 104, 104)", a.fontStyle = "italic", 
                    r.appendChild(a);
                }
                if ("string" == typeof n) {
                    var s = t.createPopupItem("-text-", e).el;
                    s.textContent = n, r.appendChild(s);
                } else if (0 === n.length) {
                    var l = t.createPopupItem("-text-", e).el;
                    l.textContent = o.a.i18n.getMessage("noLinksFound"), r.appendChild(l);
                } else {
                    var u = [];
                    n.forEach((function(n) {
                        u.push(t.createPopupItem(n, e));
                    })), u = t.sortMenuItems(u, e.sortDetails), Object(x.a)(Object(w.e)(Te), r);
                    const o = [];
                    u.forEach((function(t) {
                        if (t.prop.isHidden) return o.push(t.el), 1;
                        r.appendChild(t.el), e.showFileSize && t.sizeIcon && i.push(t.sizeIcon);
                    })), e.visibleCount = u.length - o.length, o.length > 0 && (e.getHiddenListFunc ? r.appendChild(e.getHiddenListFunc(o, e)) : Object(x.a)(Object(w.e)(Me, {
                        SaveFrom_Utils: $e,
                        hiddenItems: u.filter(e => e.prop.isHidden).map(e => e.prop)
                    }), r));
                }
                return {
                    sizeIconList: i,
                    content: r
                };
            },
            create: function(e) {
                var t = e.button, n = $e.popupMenu;
                if (e.linkClass = e.linkClass || "sf-menu-item", e.offsetRight = e.offsetRight || 0, 
                e.offsetTop = e.offsetTop || 0, e.parent = e.parent || document.body, !e.isUpdate || void 0 !== n.popup && "none" !== n.popup.style.display) {
                    n.popup && n.removePanel();
                    var r = n.popup = document.createElement("div"), o = "#" + n.popupId;
                    e.popupId ? (o = "#" + e.popupId, r.id = e.popupId) : e.containerClass ? (o = "." + e.containerClass, 
                    r.classList.add(e.containerClass)) : r.id = n.popupId;
                    var i = {
                        display: "block",
                        position: "absolute",
                        minHeight: "24px",
                        cursor: "default",
                        textAlign: "left",
                        whiteSpace: "nowrap",
                        fontFamily: "arial, sans-serif"
                    };
                    e.extStyle && delete i.display;
                    var a = $e.getPosition(t, e.parent), l = $e.getSize(t);
                    i.top = a.top + e.offsetTop + l.height + "px", i.left = a.left + e.offsetRight + "px", 
                    $e.setStyle(r, i);
                    var u = {
                        "background-color": "#fff",
                        "z-index": "9999",
                        "box-shadow": "0 2px 10px 0 rgba(0,0,0,0.2)",
                        border: "1px solid #ccc",
                        "border-radius": "3px",
                        "font-size": "12px",
                        "font-weight": "bold",
                        "min-width": "190px"
                    };
                    if (e.style && e.style.popup) for (var c in e.style.popup) {
                        var p = e.style.popup[c];
                        u[c] = p;
                    }
                    $e.addStyleRules(o, u);
                    var h = {
                        "line-height": "24px",
                        color: "#3D3D3D"
                    };
                    if (e.style && e.style.item) for (var c in e.style.item) {
                        p = e.style.item[c];
                        h[c] = p;
                    }
                    $e.addStyleRules(o + " ." + e.linkClass, h);
                    var g = function(e) {
                        e.stopPropagation();
                    };
                    for (f.a.create(r, {
                        on: [ [ "click", g ], [ "mouseover", g ], [ "mouseup", g ], [ "mousedown", g ], [ "mouseout", g ] ]
                    }); null !== r.firstChild; ) r.removeChild(r.firstChild);
                    var A = n.getContent.call(n, e), m = A.sizeIconList;
                    A = A.content, r.appendChild(A);
                    var v = "#2F8AFF", y = "#fff";
                    e.style && e.style.hover && (v = e.style.hover.backgroundColor || v, y = e.style.hover.color || y);
                    var b = n.popupStyle = document.createElement("style");
                    if (b.textContent = Object(s.a)({
                        selector: o,
                        append: {
                            "a:hover": {
                                backgroundColor: v,
                                color: y
                            },
                            "> a:first-child": {
                                borderTopLeftRadius: "3px",
                                borderTopRightRadius: "3px"
                            },
                            "> a:last-child": {
                                borderBottomLeftRadius: "3px",
                                borderBottomRightRadius: "3px"
                            }
                        }
                    }), e.parent.appendChild(b), e.parent.appendChild(r), e.extStyle) {
                        void 0 !== $e.popupMenu.extStyleCache && null !== $e.popupMenu.extStyleCache.parentNode && $e.popupMenu.extStyleCache.parentNode.removeChild($e.popupMenu.extStyleCache);
                        var w = "sf-extElStyle_" + o.substr(1), C = "sf-extBodyStyle_" + o.substr(1);
                        null === document.querySelector("style." + C) && document.body.appendChild(f.a.create("style", {
                            class: C,
                            text: Object(s.a)({
                                selector: o,
                                style: {
                                    display: "none"
                                }
                            })
                        })), $e.popupMenu.extStyleCache = e.extStyle.appendChild(f.a.create("style", {
                            class: w,
                            text: Object(s.a)({
                                selector: "body " + o,
                                style: {
                                    display: "block"
                                }
                            })
                        }));
                    }
                    return setTimeout((function() {
                        m.forEach((function(e) {
                            d.a.trigger(e, "click", {
                                bubbles: !1,
                                cancelable: !0
                            });
                        }));
                    })), r;
                }
            },
            update: function(e, t) {
                for (var n = $e.popupMenu; null !== e.firstChild; ) e.removeChild(e.firstChild);
                var r = n.getContent.call(n, t), o = r.sizeIconList;
                r = r.content, e.appendChild(r), setTimeout((function() {
                    o.forEach((function(e) {
                        d.a.trigger(e, "click", {
                            bubbles: !1,
                            cancelable: !0
                        });
                    }));
                }));
            },
            preprocessItem: {
                srt2url: function(e, t) {
                    var n = e.srt, r = Object(c.a)(n, "text/plain");
                    t.ext = "srt", t.format = "SRT", t.href = r, t.noSize = !0;
                }
            },
            prepareLinks: {
                youtube(e, t, n, r) {
                    r = r || {}, n = n || [], e = Object.assign({}, e);
                    var i = $e.video.yt;
                    i.init();
                    var a = [], s = null, l = e.meta || {};
                    return Object.keys(i.format).forEach((function(n) {
                        var r = i.format[n];
                        return Object.keys(r).forEach((function(o) {
                            var u = e[o];
                            if (u) {
                                var c = !1;
                                i.showFormat[n] || (c = !0);
                                var d = r[o];
                                d["3d"] && !i.show3D && (c = !0), d.noAudio && !i.showMP4NoAudio && (c = !0), s = {
                                    href: u,
                                    isHidden: c,
                                    title: t,
                                    format: n,
                                    itag: o,
                                    forceDownload: !0
                                }, Object.assign(s, d);
                                var p = l[o];
                                p && (p.quality && (s.quality = p.quality), p.fps && (s.fps = p.fps)), a.push(s), 
                                delete e[o];
                            }
                        }));
                    })), e.televzr && (a.push({
                        itag: "televzr",
                        format: "televzr",
                        quality: "televzr",
                        href: e.televzr,
                        noSize: !0
                    }), delete e.televzr), Xe.preferences.ffmpegEnabled && l.muxer && (s = {
                        href: "#muxer",
                        fps: l.muxer.fps,
                        quality: l.muxer.quality,
                        format: l.muxer.format,
                        itag: "muxer",
                        uQuality: l.muxer.quality,
                        noSize: !0,
                        func: e => {
                            e.preventDefault(), e.stopPropagation(), Object(x.a)(Object(w.e)(C.a, l.muxer.mmProps), "sf-muxer-parent"), 
                            o.a.sendMessage({
                                action: "track",
                                t: "event",
                                tid: "G-L0GP1RQSBJ",
                                el: `mp4_${l.muxer.quality}_conv`,
                                ec: "download",
                                ea: `mp4_${l.muxer.quality}_conv`
                            });
                        }
                    }, a.push(s)), Object.keys(e).forEach((function(n) {
                        "meta" !== n && (s = {
                            href: e[n],
                            isHidden: !0,
                            title: t,
                            quality: n,
                            itag: n,
                            forceDownload: !0
                        }, a.push(s), delete e[n]);
                    })), Object.keys(e.meta).forEach(t => {
                        if (-1 === t.indexOf("pro")) return;
                        const n = e.meta[t];
                        a.push({
                            href: "#pro",
                            isHidden: !1,
                            noSize: !0,
                            format: n.format,
                            noVideo: n.noVideo,
                            itag: "pro",
                            func: e => {
                                e.preventDefault(), d.a.trigger(document, "mousedown");
                                let t = document.body.querySelector("#savefrom__yt_btn");
                                const r = Boolean(document.body.querySelector("#sfYtFrameBtn")), o = {
                                    position: "absolute"
                                };
                                !t && r && (o.right = "0", t = document.body.querySelector(".sf-btn-ctr")), t || (o.position = "relative", 
                                t = f.a.create("div", {
                                    style: {
                                        position: "fixed",
                                        zIndex: 999999,
                                        bottom: "30px",
                                        right: "0"
                                    }
                                }), document.body.appendChild(t)), Object(x.a)(Object(w.e)(pe, {
                                    link: n,
                                    positionStyle: o
                                }), t);
                            },
                            quality: String(n.quality)
                        });
                    }), n.forEach((function(e) {
                        s = {
                            href: e.url,
                            isHidden: !0,
                            quality: "SRT" + (e.isAuto ? "A" : ""),
                            itemText: o.a.i18n.getMessage("subtitles") + " (" + e.lang + ")",
                            title: t + "-" + e.langCode,
                            ext: "vtt",
                            format: "VTT",
                            isSubtitle: !0,
                            langCode: e.langCode,
                            forceDownload: !0
                        }, "srt2url" === e.preprocess && $e.popupMenu.preprocessItem.srt2url(e, s), a.push(s);
                    })), l.extra && l.extra.forEach((function(e) {
                        s = {
                            href: "#" + e.extra,
                            noSize: !0,
                            isHidden: !1
                        }, Object.assign(s, e), e.itag && Object.keys(i.format).some((function(t) {
                            var n = i.format[t][e.itag];
                            if (n) return Object.assign(s, n), !0;
                        })), e.request && (s.func = function(t) {
                            return t.preventDefault(), o.a.sendMessage(e.request);
                        }), s.noAudio = !1, a.push(s);
                    })), a;
                },
                vimeo: function(e, t) {
                    var n, r = [];
                    return e.forEach((function(e) {
                        var o = e.ext;
                        o || (o = "mp4", -1 != e.url.search(/\.flv($|\?)/i) && (o = "flv"));
                        var i = e.height || "", a = e.type;
                        n = {
                            href: e.url,
                            title: t,
                            ext: o,
                            format: a,
                            quality: i,
                            forceDownload: !0
                        }, r.push(n);
                    })), r;
                },
                vk: function(e, t) {
                    var n, r = [];
                    return e.forEach((function(e) {
                        var o = e.name || e.ext;
                        o && (o = o.toLowerCase());
                        var i = o && o.toUpperCase() || "", a = e.subname || "";
                        n = {
                            href: e.url,
                            title: t,
                            ext: o,
                            format: i,
                            quality: a,
                            forceDownload: !0
                        }, r.push(n);
                    })), r;
                },
                dailymotion: function(e, t) {
                    var n = [];
                    return e.forEach((function(e) {
                        var r = null;
                        "ummy" === e.extra ? (r = {
                            href: e.url,
                            quality: "ummy",
                            noSize: !0,
                            format: "ummy",
                            videoId: e.videoId,
                            sort: {
                                size: 480
                            }
                        }, "ummyAudio" === e.type && (r.uQuality = "mp3", r.uIsAudio = !0)) : r = {
                            href: e.url,
                            title: t,
                            ext: e.ext,
                            format: e.ext,
                            quality: e.height || "",
                            forceDownload: !0
                        }, n.push(r);
                    })), n;
                },
                facebook: function(e, t) {
                    var n, r = [];
                    return e.forEach((function(e) {
                        var o = e.ext, i = o ? o.toUpperCase() : "", a = e.name;
                        n = {
                            href: e.url,
                            title: t,
                            ext: o,
                            format: i,
                            quality: a,
                            forceDownload: !0
                        }, r.push(n);
                    })), r;
                },
                rutube: function(e) {
                    if (Array.isArray(e) && (e = e[0]), "string" == typeof e) {
                        var t = e.match(/\/embed\/(\d+)/);
                        return (t = t && t[1] || void 0) || (t = (t = e.match(/\/video\/([0-9a-z]+)/)) && t[1] || void 0), 
                        /\/\/video\./.test(e) && (e = e.replace(/\/\/video\./, "//"), t || (t = (t = e.match(/\/(\d+)$/)) && t[1] || void 0)), 
                        t && (t = "rt-" + t), [];
                    }
                },
                mailru: function(e, t) {
                    var n, r = [];
                    return e.forEach((function(e) {
                        var o = e.ext, i = e.name, a = e.subname;
                        n = {
                            href: e.url,
                            title: t,
                            ext: o,
                            format: i,
                            quality: a,
                            forceDownload: !0
                        }, r.push(n);
                    })), r;
                }
            },
            quickInsert: function(e, t, n, r) {
                r = r || {};
                var o = {}, i = function t(n) {
                    n && (n.target === e || e.contains(n.target)) || o.isShow && (s.style.display = "none", 
                    d.a.off(document, "mousedown", t), o.isShow = !1, r.onHide && r.onHide(s));
                }, a = {
                    links: t,
                    button: e,
                    popupId: n,
                    showFileSize: !0
                };
                Object.assign(a, r);
                var s = $e.popupMenu.create(a);
                return r.onShow && r.onShow(s), d.a.off(document, "mousedown", i), d.a.on(document, "mousedown", i), 
                Object.assign(o, {
                    button: e,
                    isShow: !0,
                    el: s,
                    hide: i,
                    update(e, t) {
                        t && (a.title = t), a.links = e, $e.popupMenu.update(s, a);
                    }
                });
            }
        },
        frameMenu: {
            getBtn: function(e) {
                var t = {
                    verticalAlign: "middle",
                    position: "absolute",
                    zIndex: 999,
                    fontFamily: "arial, sans-serif"
                };
                for (var n in e.containerStyle) t[n] = e.containerStyle[n];
                var r = e.quickBtnStyleObj || {
                    display: "inline-block",
                    fontSize: "inherit",
                    height: "22px",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    borderRadius: "3px",
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    paddingRight: 0,
                    paddingLeft: "28px",
                    cursor: "pointer",
                    verticalAlign: "middle",
                    position: "relative",
                    lineHeight: "22px",
                    textDecoration: "none",
                    zIndex: 1,
                    color: "#fff"
                };
                e.singleBtn && !e.quickBtnStyleObj && (delete r.borderTopRightRadius, delete r.borderBottomRightRadius);
                var o = {
                    position: "relative",
                    display: "inline-block",
                    fontSize: "inherit",
                    height: "24px",
                    padding: 0,
                    paddingRight: "21px",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    borderLeft: 0,
                    borderRadius: "3px",
                    borderTopLeftRadius: "0",
                    borderBottomLeftRadius: "0",
                    cursor: "pointer",
                    color: "#fff",
                    zIndex: 0,
                    verticalAlign: "middle",
                    marginLeft: 0,
                    boxSizing: "border-box",
                    lineHeight: "22px"
                };
                for (var n in e.selectBtnStyle) o[n] = e.selectBtnStyle[n];
                var i, a = e.quickBtnIcon || f.a.create("i", {
                    style: {
                        position: "absolute",
                        display: "inline-block",
                        left: "6px",
                        top: "3px",
                        backgroundImage: "url(" + $e.svg.getSrc("download", "#ffffff") + ")",
                        backgroundSize: "12px",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        width: "16px",
                        height: "16px"
                    }
                }), l = e.selectBtnIcon || f.a.create("i", {
                    style: {
                        position: "absolute",
                        display: "inline-block",
                        top: "9px",
                        right: "6px",
                        border: "5px solid #FFF",
                        borderBottomColor: "transparent",
                        borderLeftColor: "transparent",
                        borderRightColor: "transparent"
                    }
                }), u = f.a.create("div", {
                    id: e.btnId,
                    style: t,
                    on: e.on,
                    append: [ i = f.a.create("a", {
                        class: "sf-quick-btn",
                        style: r,
                        href: "#",
                        append: [ a ]
                    }), f.a.create("style", {
                        text: Object(s.a)({
                            selector: "#" + e.btnId,
                            style: e.nodeCssStyle || {
                                opacity: .8,
                                display: "none"
                            },
                            append: [ {
                                "button::-moz-focus-inner": {
                                    padding: 0,
                                    margin: 0
                                },
                                ".sf-quick-btn": e.quickBtnCssStyle || {
                                    backgroundColor: "rgba(28,28,28,0.1)"
                                },
                                ".sf-select-btn": {
                                    backgroundColor: "rgba(28,28,28,0.1)"
                                }
                            }, {
                                selector: [ ":hover", ".sf-over" ],
                                join: "",
                                style: {
                                    opacity: 1
                                },
                                append: {
                                    ".sf-quick-btn": e.quickBtnOverCssStyle || {
                                        backgroundColor: "rgba(0, 163, 80, 0.5)"
                                    },
                                    ".sf-select-btn": {
                                        backgroundColor: "rgba(60, 60, 60, 0.5)"
                                    }
                                }
                            }, {
                                join: "",
                                ".sf-over": {
                                    append: {
                                        ".sf-select-btn": {
                                            backgroundColor: "rgba(28,28,28,0.8)"
                                        }
                                    }
                                },
                                ".sf-show": {
                                    display: "block"
                                }
                            } ]
                        })
                    }) ]
                }), c = null, d = null;
                return e.singleBtn || (d = function(e) {
                    var t = "object" == typeof e ? e : document.createTextNode(e), n = c.firstChild;
                    n === l ? c.insertBefore(t, n) : c.replaceChild(t, n);
                }, c = f.a.create("button", {
                    class: "sf-select-btn",
                    style: o,
                    on: e.onSelectBtn,
                    append: [ l ]
                }), u.appendChild(c)), {
                    node: u,
                    setQuality: d,
                    setLoadingState: function() {
                        d(f.a.create("img", {
                            src: $e.svg.getSrc("info", "#ffffff"),
                            style: {
                                width: "14px",
                                height: "14px",
                                marginLeft: "6px",
                                verticalAlign: "middle",
                                top: "-1px",
                                position: "relative"
                            }
                        }));
                    },
                    selectBtn: c,
                    quickBtn: i
                };
            },
            getHiddenList: function(e, t) {
                var n = $e.popupMenu, r = n.createPopupItem("-text-", t).el;
                f.a.create(r, {
                    text: o.a.i18n.getMessage("more") + " " + String.fromCharCode(187),
                    style: {
                        cursor: "pointer"
                    },
                    on: [ "click", function() {
                        for (var e, t = this.parentNode.querySelectorAll("*[" + n.dataArrtVisible + "]"), r = 0; e = t[r]; r++) e.style.display = "block", 
                        e.setAttribute(n.dataArrtVisible, 1);
                        this.parentNode.removeChild(this);
                    } ]
                });
                var i = document.createDocumentFragment();
                return i.appendChild(r), f.a.create(i, {
                    append: e
                }), 0 === t.visibleCount && d.a.trigger(r, "click", {
                    cancelable: !0
                }), i;
            },
            getMenuContainer: function(e) {
                var t = $e.popupMenu, n = e.button, r = e.popupId, o = f.a.create("div", {
                    style: {
                        position: "absolute",
                        minHeight: "24px",
                        cursor: "default",
                        textAlign: "left",
                        whiteSpace: "nowrap",
                        overflow: "auto"
                    }
                });
                "#" === r[0] ? o.id = r.substr(1) : o.classList.add(r);
                var i = t.getContent(e);
                o.appendChild(i.content), setTimeout((function() {
                    i.sizeIconList.forEach((function(e) {
                        d.a.trigger(e, "click", {
                            bubbles: !1,
                            cancelable: !0
                        });
                    }));
                }));
                var a = $e.getPosition(n, e.parent), l = $e.getSize(n), u = function(e) {
                    e.stopPropagation();
                }, c = a.top + l.height, p = {
                    top: c + "px",
                    maxHeight: document.body.offsetHeight - c - 40 + "px"
                };
                return e.leftMenuPos ? p.left = a.left + "px" : p.right = document.body.offsetWidth - a.left - l.width + "px", 
                f.a.create(o, {
                    style: p,
                    on: [ [ "click", u ], [ "mouseover", u ], [ "mouseup", u ], [ "mousedown", u ], [ "mouseout", u ], [ "wheel", function(e) {
                        (e.wheelDeltaY > 0 && 0 === this.scrollTop || e.wheelDeltaY < 0 && this.scrollHeight - (this.offsetHeight + this.scrollTop) <= 0) && e.preventDefault();
                    } ] ],
                    append: [ f.a.create("style", {
                        text: Object(s.a)({
                            selector: ("#" === r[0] ? "" : ".") + r,
                            style: {
                                display: "none",
                                fontFamily: "arial, sans-serif",
                                backgroundColor: "rgba(28,28,28,0.8)",
                                zIndex: 9999,
                                borderRadius: "4px",
                                fontSize: "12px",
                                fontWeight: "bold",
                                minWidth: "190px",
                                color: "#fff"
                            },
                            append: [ {
                                join: "",
                                ".sf-show": {
                                    display: "block"
                                },
                                "::-webkit-scrollbar-track": {
                                    backgroundColor: "#424242"
                                },
                                "::-webkit-scrollbar": {
                                    width: "10px",
                                    backgroundColor: "#424242"
                                },
                                "::-webkit-scrollbar-thumb": {
                                    backgroundColor: "#8e8e8e"
                                }
                            }, {
                                ".sf-menu-item": {
                                    lineHeight: "24px",
                                    color: "#fff"
                                },
                                ".sf-menu-item:hover": {
                                    backgroundColor: "#1c1c1c"
                                }
                            } ]
                        })
                    }) ]
                }), o;
            },
            getMenu: function(e, t, n, r) {
                var o = {
                    links: t,
                    button: e,
                    popupId: n || "#sf-frame-menu",
                    showFileSize: !0,
                    sizeIconStyle: {
                        color: "#fff"
                    },
                    linkClass: "sf-menu-item",
                    bindUmmyInfoDetails: {
                        posLeft: !0,
                        widthLimit: 480,
                        container: r.container,
                        createUmmyInfoDetails: {
                            posLeft: !0,
                            darkTheme: !0
                        }
                    },
                    getHiddenListFunc: this.getHiddenList.bind(this)
                };
                for (var i in r) o[i] = r[i];
                var a = this.getMenuContainer(o);
                (o.container || document.body).appendChild(a);
                var s = function() {
                    a.parentNode && a.parentNode.removeChild(a), l.isShow = !1, o.onHide && o.onHide();
                };
                o.onShow && o.onShow(a), d.a.off(document, "mousedown", s), d.a.on(document, "mousedown", s);
                var l = {
                    isShow: !0,
                    el: a,
                    hide: s,
                    update: function(e) {
                        var t = $e.popupMenu, n = a.lastChild;
                        a.textContent = "", o.links = e;
                        var r = t.getContent(o);
                        setTimeout((function() {
                            r.sizeIconList.forEach((function(e) {
                                d.a.trigger(e, "click", {
                                    bubbles: !1,
                                    cancelable: !0
                                });
                            }));
                        })), a.appendChild(r.content), a.appendChild(n);
                    }
                };
                return l;
            }
        },
        mobileLightBox: {
            id: "sf-lightbox",
            clear: function() {
                var e = document.getElementById($e.mobileLightBox.id);
                null !== e && e.parentNode.removeChild(e);
            },
            getTitle: function(e) {
                var t = [];
                if (t.push(e.format || "???"), e.quality) {
                    var n = e.quality;
                    e.sFps && (n += " " + (e.fps || 60)), t.push(n);
                }
                return e["3d"] && t.push("3D"), e.noAudio && t.push(o.a.i18n.getMessage("withoutAudio")), 
                t.join(" ");
            },
            createItem: function(e) {
                var t = $e.mobileLightBox, n = f.a.create("a", {
                    style: {
                        display: "block",
                        marginBottom: "6px",
                        border: "solid 1px #d3d3d3",
                        lineHeight: "36px",
                        minHeight: "36px",
                        background: "#f8f8f8",
                        verticalAlign: "middle",
                        fontSize: "15px",
                        textAlign: "center",
                        color: "#333",
                        borderRadius: "2px",
                        overflow: "hidden",
                        position: "relative"
                    }
                }), r = "";
                if (e.title) {
                    var o = (e.ext || e.format || "").toLowerCase();
                    o && (o = "." + o), r = g.a.modify(e.title + o);
                }
                if ("string" == typeof e) return n.textContent = e, n;
                n.href = e.href, n.download = r, n.textContent = t.getTitle(e), n.addEventListener("click", (function(t) {
                    e.func && e.func(t), "muxer" !== e.itag && e.forceDownload && $e.downloadOnClick(t, null, {
                        el: this
                    });
                })), e.isHidden && (n.classList.add("isOptional"), n.style.display = "none");
                if (!e.noSize) {
                    const t = $e.getFileSizeIcon({
                        cssFloat: "right",
                        lineHeight: "36px",
                        fontSize: "75%",
                        marginRight: "10px"
                    }, {
                        padding: "10px",
                        verticalAlign: "middle",
                        lineHeight: 0
                    }, {
                        width: "16px",
                        height: "16px"
                    }, {
                        url: e.href
                    });
                    n.appendChild(t.node);
                }
                return n;
            },
            getItems: function(e) {
                var t = $e.mobileLightBox;
                if ("string" == typeof e) return {
                    list: [ t.createItem(e) ],
                    hiddenCount: 0
                };
                for (var n, r = [], o = 0; n = e[o]; o++) [ "ummy", "televzr" ].includes(n.quality) || n.extra || r.push({
                    el: t.createItem(n),
                    prop: n
                });
                r = $e.popupMenu.sortMenuItems(r);
                var i = [], a = [];
                for (o = 0; n = r[o]; o++) n.prop.isHidden ? a.push(n.el) : i.push(n.el);
                return {
                    list: i.concat(a),
                    hiddenCount: a.length
                };
            },
            show: function(e) {
                var t, n = $e.mobileLightBox, r = window.pageYOffset, i = window.innerHeight, a = parseInt(i / 100 * 15), s = void 0, l = function(e) {
                    return i - 46 * (e ? 2 : 1) - 2 * a;
                }, u = function(e) {
                    e.hiddenCount > 0 ? (s.style.height = l(1) + "px", t.style.display = "block") : (t.style.display = "none", 
                    s.style.height = l(0) + "px"), e.hiddenCount === e.list.length && c(t);
                }, c = function(e) {
                    var t = "none", n = e.parentNode.querySelectorAll(".isOptional");
                    "open" !== e.dataset.state ? (e.dataset.state = "open", e.textContent = o.a.i18n.getMessage("more") + " " + String.fromCharCode(171), 
                    t = "block") : (e.dataset.state = "close", e.textContent = o.a.i18n.getMessage("more") + " " + String.fromCharCode(187));
                    for (var r, i = 0; r = n[i]; i++) r.style.display = t;
                }, d = document.getElementById(n.id);
                null !== d && d.parentNode.removeChild(d);
                var p = window.innerWidth;
                p = p <= 250 ? "90%" : "70%", e && 0 !== e.length || (e = o.a.i18n.getMessage("noLinksFound"));
                var h = n.getItems(e), g = f.a.create("div", {
                    id: n.id,
                    style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        zIndex: 9e3,
                        height: document.body.scrollHeight + "px",
                        background: "rgba(0,0,0,0.85)",
                        textAlign: "center",
                        boxSizing: "content-box"
                    },
                    on: [ [ "click", function(e) {
                        e.preventDefault(), v();
                    } ] ],
                    append: f.a.create("div", {
                        style: {
                            display: "inline-block",
                            width: p,
                            backgroundColor: "#eee",
                            height: i - 2 * a + "px",
                            marginTop: a + r + "px",
                            borderRadius: "4px",
                            padding: "8px",
                            position: "relative",
                            boxSizing: "content-box"
                        },
                        append: [ s = f.a.create("div", {
                            style: {
                                overflowY: "auto",
                                marginBottom: "6px"
                            },
                            append: h.list,
                            on: [ "touchmove", function(e) {
                                e.stopPropagation();
                            } ]
                        }), t = f.a.create(n.createItem(o.a.i18n.getMessage("more") + " " + String.fromCharCode(187)), {
                            href: "#",
                            on: [ "click", function(e) {
                                e.preventDefault(), c(this);
                            } ]
                        }), f.a.create(n.createItem(o.a.i18n.getMessage("close")), {
                            style: {
                                marginBottom: 0
                            },
                            on: [ "click", function(e) {
                                e.preventDefault(), v();
                            } ]
                        }) ],
                        on: [ "click", function(e) {
                            e.stopPropagation();
                        } ]
                    })
                });
                u(h), document.body.appendChild(g);
                var A = document.body.scrollTop, m = {}, v = function() {
                    m.isShow && (document.body.scrollTop = A, m.hide());
                };
                return Object.assign(m, {
                    isShow: !0,
                    el: g,
                    hide: function() {
                        g.parentNode && g.parentNode.removeChild(g), m.isShow = !1;
                    },
                    close: v,
                    update: function(e) {
                        if (null !== g.parentNode) {
                            e && 0 !== e.length || (e = o.a.i18n.getMessage("noLinksFound")), s.textContent = "";
                            var t = n.getItems(e);
                            f.a.create(s, {
                                append: t.list
                            }), u(t);
                        }
                    }
                });
            }
        },
        bridge: function(e) {
            e.args = e.args || [], void 0 === e.timeout && (e.timeout = 300);
            var t = "sf-bridge-" + parseInt(1e3 * Math.random()) + "-" + Date.now();
            window.addEventListener("sf-bridge-" + t, (function n(r) {
                var o;
                window.removeEventListener("sf-bridge-" + t, n), o = r.detail ? JSON.parse(r.detail) : void 0, 
                e.cb(o);
            }));
            var n = '(function(func,args,scriptId,timeout){/* fix */var node=document.getElementById(scriptId);if(node){node.parentNode.removeChild(node)}var fired=false;var done=function done(data){if(fired){return}fired=true;var event=new CustomEvent("sf-bridge-"+scriptId,{detail:JSON.stringify(data)});window.dispatchEvent(event)};timeout&&setTimeout(function(){done()},timeout);args.push(done);func.apply(null,args)})(' + [ e.func.toString(), JSON.stringify(e.args), JSON.stringify(t), parseInt(e.timeout) ].join(",") + ");";
            if (o.a.isSafari) {
                n = n.replace("/* fix */", "(" + function() {
                    "undefined" == typeof CustomEvent && (CustomEvent = function(e, t) {
                        t = t || {
                            bubbles: !1,
                            cancelable: !1
                        };
                        var n = document.createEvent("CustomEvent");
                        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;
                    }, CustomEvent.prototype = window.Event.prototype);
                }.toString() + ")();");
            }
            var r = f.a.create("script", {
                id: t,
                text: n
            });
            document.body.appendChild(r);
        },
        openMediaOnSaveFrom(e) {
            window.open("https://ru.savefrom.net/#url=" + e, "_blank");
        },
        TutorialTooltip: function(e) {
            var t = this;
            this.details = {
                btnTopOffset: -3,
                btnLeftOffset: 0
            }, Object.assign(this.details, e), this.onResize = this.onResize.bind(this), this.onResizeDebouce = a(this.onResize, 250), 
            this.onClose = this.onClose.bind(this), this.target = e.target, "1" !== this.target.dataset.sfHasTooltip && (this.target.dataset.sfHasTooltip = "1", 
            this.tooltipNode = this.getNode(), this.target.addEventListener("mouseup", this.onClose), 
            this.target.addEventListener(d.a.onRemoveEventName, (function() {
                t.onClose && t.onClose(1);
            })), window.addEventListener("resize", this.onResizeDebouce), this.onResize(), this.tooltipNode && (e.parent || document.body).appendChild(this.tooltipNode));
        }
    };
    $e.TutorialTooltip.prototype.getNode = function() {
        var e = this, t = function() {
            var e = 1e3, t = document.getElementById("masthead-positioner"), n = t && window.getComputedStyle(t, null);
            return n && (e = parseInt(n.getPropertyValue("z-index")) + 1), e;
        }();
        if (Ke) var n = f.a.create("div", {
            class: "sf-tooltip",
            style: {
                top: "-70px",
                display: "flex"
            },
            on: [ "mouseup", function(e) {
                e.stopPropagation();
            } ],
            append: [ f.a.create("div", {
                style: {
                    height: "40px",
                    backgroundColor: "#4D4D4D",
                    paddingBottom: "10px",
                    maxWidth: "220px",
                    minWidth: "220px",
                    lineHeight: "16px",
                    fontSize: "14px",
                    fontFamily: "font-family: arial, sans-serif",
                    color: "#fff",
                    display: "flex"
                },
                append: [ f.a.create("div", {
                    style: {
                        width: "60%",
                        margin: "0 0 5px 10px"
                    },
                    append: [ f.a.create("span", {
                        style: {
                            color: "white",
                            fontSize: "14px",
                            fontWeight: "bold",
                            display: "inline-block"
                        },
                        text: "Just hold"
                    }), f.a.create("div", {
                        style: {
                            display: "inline-block",
                            position: "relative",
                            margin: "4px 4px 0 4px",
                            width: "27px",
                            height: "18px",
                            backgroundColor: "black",
                            borderRadius: "5px",
                            border: "1px solid black",
                            borderBottom: "3px solid black"
                        },
                        append: [ f.a.create("div", {
                            style: {
                                fontWeight: "bold",
                                fontSize: "8px",
                                textAlign: "center",
                                zIndex: 1,
                                position: "relative",
                                width: "27px",
                                height: "18px",
                                backgroundColor: "white",
                                color: "black",
                                borderRadius: "5px"
                            },
                            append: [ f.a.create("span", {
                                style: {
                                    display: "inline-block",
                                    marginTop: "2px"
                                },
                                text: "option"
                            }) ]
                        }) ]
                    }), f.a.create("span", {
                        style: {
                            color: "white",
                            fontSize: "14px",
                            fontWeight: "bold"
                        },
                        text: "and click on Download"
                    }) ]
                }), f.a.create("a", {
                    class: "sf-button",
                    text: "OK",
                    style: {
                        height: "18px",
                        width: "50px",
                        display: "inline-block",
                        textAlign: "center",
                        textDecoration: "none",
                        padding: "0 10px",
                        cssFloat: "right",
                        marginTop: "25px",
                        lineHeight: "20px",
                        borderRadius: "3px",
                        fontSize: "12px",
                        color: "#fff",
                        fontWeight: "bolder",
                        backgroundColor: "#167AC6",
                        cursor: "pointer"
                    },
                    on: [ "click", function(t) {
                        t.preventDefault(), e.onClose && e.onClose();
                    } ]
                }), f.a.create("style", {
                    text: Object(s.a)({
                        ".sf-tooltip": {
                            position: "absolute",
                            zIndex: t + 2,
                            append: {
                                ".sf-button:hover": {
                                    backgroundColor: "#126db3 !important"
                                },
                                ".sf-button:active": {
                                    opacity: .9
                                }
                            }
                        }
                    })
                }) ]
            }) ]
        }); else n = f.a.create("div", {
            class: "sf-tooltip",
            on: [ "mouseup", function(e) {
                e.stopPropagation();
            } ],
            append: [ f.a.create("span", {
                style: {
                    display: "inline-block",
                    border: "8px solid transparent",
                    borderRight: "10px solid #4D4D4D",
                    borderLeft: 0,
                    width: 0,
                    top: "8px",
                    left: "0px",
                    position: "absolute"
                }
            }), f.a.create("span", {
                style: {
                    display: "inline-block",
                    backgroundColor: "#4D4D4D",
                    marginLeft: "10px",
                    padding: "10px 10px",
                    maxWidth: "220px",
                    minWidth: "220px",
                    lineHeight: "16px",
                    fontSize: "14px",
                    fontFamily: "font-family: arial, sans-serif",
                    color: "#fff"
                },
                append: [ f.a.create("p", {
                    style: {
                        margin: 0
                    },
                    append: Object(h.a)(o.a.i18n.getMessage("tutorialTooltipText"))
                }), f.a.create("a", {
                    class: "sf-button",
                    text: "OK",
                    style: {
                        display: "inline-block",
                        textAlign: "center",
                        textDecoration: "none",
                        padding: "0 10px",
                        cssFloat: "right",
                        marginTop: "5px",
                        lineHeight: "20px",
                        borderRadius: "3px",
                        fontSize: "12px",
                        color: "#fff",
                        fontWeight: "bolder",
                        backgroundColor: "#167AC6",
                        cursor: "pointer"
                    },
                    on: [ "click", function(t) {
                        t.preventDefault(), e.onClose && e.onClose();
                    } ]
                }), f.a.create("style", {
                    text: Object(s.a)({
                        ".sf-tooltip": {
                            position: "absolute",
                            zIndex: t + 2,
                            append: {
                                ".sf-button:hover": {
                                    backgroundColor: "#126db3 !important"
                                },
                                ".sf-button:active": {
                                    opacity: .9
                                }
                            }
                        }
                    })
                }) ]
            }) ]
        });
        return n;
    }, $e.TutorialTooltip.prototype.onClose = function(e) {
        e && "mouseup" === e.type && (e = null), this.tooltipNode && (this.tooltipNode.parentNode && this.tooltipNode.parentNode.removeChild(this.tooltipNode), 
        this.tooltipNode = null), window.removeEventListener("resize", this.onResizeDebouce), 
        this.target.removeEventListener("mouseup", this.onClose), this.onClose = null, e || this.details.onClose && this.details.onClose();
    }, $e.TutorialTooltip.prototype.onResize = function() {
        var e = this.target;
        if (!e.offsetParent || !e.parentNode) return this.onClose && this.onClose(1);
        var t = $e.getPosition(e, this.details.parent);
        t.top, this.details.btnTopOffset, t.left, t.width, this.details.btnLeftOffset;
    }, $e.mutationWatcher = {
        getMutationObserver: function() {
            return Object(y.a)();
        },
        isAvailable: function() {
            return !!this.getMutationObserver();
        },
        disconnect: function(e) {
            e.observer.disconnect();
        },
        connect: function(e) {
            e.observer.observe(e.target, e.config);
        },
        joinMutations: function(e) {
            for (var t, n, r, o, i, a, s = [], l = [], u = {}; r = e.shift(); ) {
                for (-1 === (a = l.indexOf(r.target)) && (u[a = l.push(r.target) - 1] = {
                    target: r.target,
                    added: [],
                    removed: []
                }), t = u[a], n = void 0, o = 0; i = r.addedNodes[o]; o++) 1 === i.nodeType && (t.added.push(i), 
                n = !0);
                for (o = 0; i = r.removedNodes[o]; o++) 1 === i.nodeType && (t.removed.push(i), 
                n = !0);
                void 0 !== n && void 0 === t.inList && (t.inList = !0, s.push(t));
            }
            return s;
        },
        isMatched: b.a,
        match: function(e, t, n) {
            var r, o, i, a, s = this, l = e.queries, u = !1;
            return [ "added", "removed" ].forEach((function(e) {
                var c = n[e];
                for (a = 0; r = c[a]; a++) for (o = 0; i = l[o]; o++) if (void 0 === i.is || i.is === e) {
                    var d = t[o][e];
                    !0 === s.isMatched(r, i.css) ? d.push(r) : d.push.apply(d, r.querySelectorAll(i.css)), 
                    !1 === u && (u = void 0 !== d[0]);
                }
            })), u;
        },
        filterTarget: function(e, t) {
            var n, r;
            for (n = 0; r = e[n]; n++) if (!0 === this.isMatched(t, r.css)) return !0;
            return !1;
        },
        run: function(e) {
            var t = this, n = {
                config: {
                    childList: !0,
                    subtree: !0
                },
                target: document.body,
                filterTarget: []
            };
            Object.assign(n, e), n._disconnect = this.disconnect.bind(this, n), n._connect = this.connect.bind(this, n), 
            n._match = this.match.bind(this, n);
            for (var r = [], o = 0; o < n.queries.length; o++) r.push({
                added: [],
                removed: []
            });
            r = JSON.stringify(r);
            var i = this.getMutationObserver();
            return n.observer = new i((function(e) {
                var o = t.joinMutations(e);
                if (0 !== o.length) {
                    for (var i, a = !1, s = JSON.parse(r); i = o.shift(); ) !1 === t.filterTarget(n.filterTarget, i.target) && !0 === n._match(s, i) && (a = !0);
                    !0 === a && n.callback(s);
                }
            })), n.trigger = function(e) {
                var t = !1, o = JSON.parse(r), i = {
                    added: [ e ],
                    removed: []
                };
                n._match(o, i) && (t = !0), !0 === t && n.callback(o);
            }, n.start = function() {
                n._disconnect(), n._connect(), n.trigger(n.target);
            }, n.stop = function() {
                n._disconnect();
            }, n.start(), n;
        }
    }, $e.mutationAttrWatcher = {
        isAvailable: function() {
            return !!$e.mutationWatcher.getMutationObserver();
        },
        disconnect: function(e) {
            e.observer.disconnect();
        },
        connect: function(e) {
            e.observer.observe(e.target, e.config);
        },
        run: function(e) {
            var t = {
                config: {
                    attributes: !0,
                    childList: !1,
                    attributeOldValue: !0
                },
                target: document.body
            };
            Object.assign(t, e), Array.isArray(t.attr) || (t.attr = [ t.attr ]), t.config.attributeFilter = t.attr, 
            t._disconnect = this.disconnect.bind(this, t), t._connect = this.connect.bind(this, t);
            for (var n = [], r = 0; r < t.attr.length; r++) n.push({});
            n = JSON.stringify(n);
            var o = $e.mutationWatcher.getMutationObserver();
            return t.observer = new o((function(e) {
                for (var r, o = !1, i = JSON.parse(n); r = e.shift(); ) {
                    var a = t.attr.indexOf(r.attributeName);
                    if (-1 !== a) {
                        var s = r.target.getAttribute(r.attributeName);
                        s !== r.oldValue && (i[a] = {
                            value: s,
                            oldValue: r.oldValue
                        }, o = !0);
                    }
                }
                !0 === o && t.callback(i);
            })), t.start = function() {
                t._disconnect(), t._connect();
                for (var e, r = !1, o = JSON.parse(n), i = 0; e = t.attr[i]; i++) {
                    var a = t.target.getAttribute(e);
                    null !== a && (o[i] = {
                        value: a,
                        oldValue: null
                    }, r = !0);
                }
                !0 === r && t.callback(o);
            }, t.stop = function() {
                t._disconnect();
            }, setTimeout((function() {
                t.start();
            })), t;
        }
    }, $e.waitNodesBySelector = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = !1, r = null;
        const o = Promise.resolve().then(() => {
            const o = t.target || document.body, i = $e.mutationWatcher.getMutationObserver();
            let a = null, s = null;
            const l = new Promise((e, t) => {
                a = e, s = t;
            });
            let u = null;
            t.timeout > 0 && (u = setTimeout(() => {
                r && r();
            }, t.timeout));
            let c = [];
            const d = new i(t => {
                let n, r;
                for (n = 0; n < t.length; n++) {
                    let o = t[n];
                    for (r = 0; r < o.addedNodes.length; r++) {
                        let t = o.addedNodes[r];
                        1 === t.nodeType && (Object(b.a)(t, e) ? c.push(t) : c.push.apply(c, t.querySelectorAll(e)));
                    }
                }
                c.length && a(c);
            });
            return d.observe(o, {
                childList: !0,
                subtree: !0
            }), r = () => {
                r = null, s(new Error("ABORTED"));
            }, c.push.apply(c, o.querySelectorAll(e)), c.length && a(c), n && r && r(), l.then(e => (d.disconnect(), 
            clearTimeout(u), e), e => {
                throw d.disconnect(), clearTimeout(u), e;
            });
        });
        return o.abort = () => {
            n = !0, r && r();
        }, o;
    };
    t.a = e => (Xe = e, $e);
}, function(e, t, n) {
    "use strict";
    var r = n(38), o = n(49);
    const i = {
        addedNodes: "added",
        removedNodes: "removed"
    }, a = Object.keys(i);
    t.a = class {
        constructor(e) {
            this.target = e.target || document.body, this.options = e.options || {
                childList: !0,
                subtree: !0
            }, this.filterTarget = e.filterTarget || [], this.queries = e.queries, this.observer = null, 
            this.init();
        }
        init() {
            const e = Object(r.a)();
            let t = document.location.href;
            this.observer = new e(e => {
                const n = document.location.href;
                t !== n && (t = n, document.dispatchEvent(new CustomEvent("mutationwatcher:hrefchange")));
                let r = null;
                for (;r = e.shift(); ) this._isAvailableTarget(r.target) && this._match(r);
            }), this.start();
        }
        start() {
            this._disconnect(), this._connect(), this.trigger(this.target);
        }
        trigger(e) {
            this._match({
                addedNodes: [ e ],
                removedNodes: []
            });
        }
        stop() {
            this._disconnect();
        }
        _match(e) {
            const t = this.queries;
            for (let n, r = 0; n = t[r]; r++) {
                const t = {
                    target: e.target,
                    added: [],
                    removed: []
                };
                for (let r, s = 0; r = a[s]; s++) {
                    const a = i[r];
                    if (void 0 !== n.is && n.is !== a) continue;
                    const s = t[a], l = e[r];
                    for (let e, t = 0; e = l[t]; t++) 1 === e.nodeType && (Object(o.a)(e, n.css) ? s.push(e) : s.push.apply(s, e.querySelectorAll(n.css)));
                }
                (t.added.length || t.removed.length) && n.callback(t, n.css);
            }
        }
        _isAvailableTarget(e) {
            const t = this.filterTarget;
            for (let n, r = 0; n = t[r]; r++) if (Object(o.a)(e, n.css)) return !1;
            return !0;
        }
        _connect() {
            this.observer.observe(this.target, this.options);
        }
        _disconnect() {
            this.observer.disconnect();
        }
        static isAvailable() {
            return !!Object(r.a)();
        }
    };
}, function(e, t, n) {
    "use strict";
    const r = (e, t) => {
        const n = [];
        Array.isArray(e) || (e = [ e ]), t && !Array.isArray(t) && (t = [ t ]);
        const o = function(e, t) {
            const n = [];
            for (let e in t) {
                const r = t[e];
                "cssFloat" === e && (e = "float");
                const o = e.replace(/([A-Z])/g, (function(e, t) {
                    return "-" + t.toLowerCase();
                }));
                n.push(o + ":" + r);
            }
            return n.length ? [ e.join(","), "{", n.join(";"), "}" ].join("") : "";
        }, i = function(e, n) {
            if (Array.isArray(n) || (n = [ n ]), t) {
                const r = [], o = e.join || "" === e.join ? e.join : " ";
                t.forEach((function(e) {
                    n.forEach((function(t) {
                        r.push(e + o + t);
                    }));
                })), n = r;
            }
            return n;
        };
        return e.forEach((function(e) {
            let a = null, s = e.media, l = e.selector, u = e.style, c = e.append;
            if (s && c) n.push([ s, "{", r(c, t), "}" ].join("")); else if (l || u) a = i(e, l), 
            n.push(o(a, u)), c && n.push(r(c, a)); else for (var d in e) -1 === [ "append", "join" ].indexOf(d) && (l = d, 
            u = e[d], c = u.append, c && delete u.append, a = i(e, l), n.push(o(a, u)), c && n.push(r(c, a)));
        })), n.join("");
    };
    t.a = r;
}, function(e, t, n) {
    "use strict";
    var r = n(0);
    t.a = function(e) {
        return new Promise((function(t) {
            r.a.sendMessage(e, t);
        }));
    };
}, function(e, t, n) {
    "use strict";
    t.a = (e, t) => {
        let n = !0;
        if (t) {
            if (!Array.isArray(e)) {
                const t = e;
                e = t.args || [], t.disableJson && (n = !1);
            }
        } else t = e, e = [];
        const r = "sf-bridge-" + parseInt(1e3 * Math.random(), 10) + "-" + Date.now();
        return new Promise(o => {
            const i = e => {
                window.removeEventListener(r, i), o(e.detail);
            };
            window.addEventListener(r, i);
            const a = "(function(fn,args,id,useJson){var scriptNode=document.getElementById(id);if(scriptNode){scriptNode.parentNode.removeChild(scriptNode)}return new Promise(function(r){return r(fn.apply(null,args))}).then(function(result){return{result:result}},function(err){return{err:serializeError(err)}}).then(function(result){if(useJson){try{result=JSON.stringify(result)}catch(err){result=JSON.stringify({err:serializeError(err)})}}var e=new CustomEvent(id,{detail:result});window.dispatchEvent(e)});function serializeError(err){return{name:err.name,message:err.message,code:err.code,stack:err.stack}}})(" + [ t ].concat([ e, r, n ].map(e => JSON.stringify(e))).join(",") + ")", s = document.createElement("script");
            s.id = r, s.textContent = a, document.body.appendChild(s);
        }).then(e => {
            n && (e = JSON.parse(e));
            const {err: t, result: r} = e;
            if (t) throw Object.assign(new Error, t);
            return r;
        });
    };
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return a;
    }));
    var r = n(0);
    const o = [], i = (e, t, n) => Promise.resolve().then(() => !n || n()).then(n => {
        n && (-1 === o.indexOf(e) && o.push(e), t());
    }), a = (e, t, n) => i(e, () => r.a.callFn("getPreferences").then(n => {
        t(e, {
            preferences: n
        });
    }), n);
    t.a = i;
}, function(e, t, n) {
    "use strict";
    var r = n(22);
    t.a = function(e, t) {
        if (!e || 1 !== e.nodeType) return null;
        if (e.closest) return e.closest(t);
        if (Object(r.a)(e, t)) return e;
        if (!Object(r.a)(e, t + " " + e.tagName)) return null;
        for (let n = e = e.parentNode; n; n = n.parentNode) {
            if (1 !== n.nodeType) return null;
            if (Object(r.a)(n, t)) return n;
        }
        return null;
    };
}, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return p;
    })), n.d(t, "a", (function() {
        return f;
    }));
    var r = n(19), o = n(1), i = n(3), a = n(12), s = n(35), l = n(54);
    function u(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            }))), n.push.apply(n, r);
        }
        return n;
    }
    function c(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? u(Object(n), !0).forEach((function(t) {
                Object(r.a)(e, t, n[t]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            }));
        }
        return e;
    }
    class d {
        constructor(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            this.target = e, this.options = Object.assign({
                content: "",
                defaultWidth: 0,
                defaultHeight: 0
            }, t), this.handleMouseleave = this.handleMouseleave.bind(this), this.isVisible = !1, 
            this.timeout = null;
        }
        handleMouseleave() {
            this.hide();
        }
        show(e) {
            if (this.isVisible) return void this.startHideTimeout();
            this.node || (this.node = this.createTooltip(e)), this.isVisible = !0;
            const t = document.body;
            t && (this.node.classList.add("hidden"), t.appendChild(this.node), this.setPos(), 
            this.node.classList.remove("hidden")), this.target.addEventListener("mouseleave", this.handleMouseleave), 
            this.startHideTimeout();
        }
        hide() {
            this.isVisible && (this.isVisible = !1, this.stopHideTimeout(), this.node.classList.add("hidden"), 
            this.target.removeEventListener("mouseleave", this.handleMouseleave), setTimeout(() => {
                if (!this.isVisible && this.node) {
                    const e = this.node.parentNode;
                    e && e.removeChild(this.node), this.node = null;
                }
            }, 250));
        }
        startHideTimeout() {
            this.stopHideTimeout(), this.timeout = setTimeout(() => {
                this.hide();
            }, 3e3);
        }
        stopHideTimeout() {
            clearTimeout(this.timeout);
        }
        createTooltip(e) {
            return o.a.create("div", {
                class: [ "sf-paper-tooltip-ctr" ],
                append: [ o.a.create("div", {
                    class: "sf-paper-tooltip",
                    style: c({
                        display: "flex",
                        align: "center"
                    }, "in" == Object(s.a)() ? {
                        flexDirection: "row"
                    } : ""),
                    append: [ o.a.create("span", {
                        style: c({
                            paddingTop: "6px"
                        }, "in" == Object(s.a)() ? {
                            width: "30px",
                            height: "20px"
                        } : ""),
                        text: "Hold"
                    }), o.a.create("div", {
                        style: {
                            margin: "4px 4px 0 4px",
                            width: "27px",
                            height: "18px",
                            backgroundColor: "black",
                            borderRadius: "5px",
                            border: "1px solid black",
                            borderBottom: "3px solid black"
                        },
                        append: [ o.a.create("div", {
                            style: {
                                fontWeight: "bold",
                                fontSize: "8px",
                                textAlign: "center",
                                zIndex: 1,
                                position: "relative",
                                width: "27px",
                                height: "18px",
                                backgroundColor: "white",
                                color: "black",
                                borderRadius: "5px"
                            },
                            append: [ o.a.create("span", {
                                style: c({
                                    display: "inline-block"
                                }, "in" != Object(s.a)() ? {
                                    marginTop: "5px"
                                } : ""),
                                text: "option"
                            }) ]
                        }) ]
                    }), o.a.create("span", {
                        style: c({
                            paddingTop: "6px"
                        }, "in" == Object(s.a)() ? {
                            width: "60px"
                        } : ""),
                        text: "and click"
                    }) ]
                }), o.a.create("style", {
                    text: Object(a.a)({
                        ".sf-paper-tooltip-ctr": {
                            display: "block",
                            outline: "none",
                            userSelect: "none",
                            cursor: "default",
                            position: "absolute",
                            zIndex: 1e4,
                            transition: "opacity 0.25s",
                            width: "180px"
                        },
                        ".sf-paper-tooltip-ctr.hidden": {
                            opacity: 0
                        },
                        ".sf-paper-tooltip": {
                            display: "block",
                            outline: "none",
                            fontFamily: "Arial",
                            fontSize: "14px",
                            fontWeight: "bold",
                            backgroundColor: "#4D4D4D",
                            borderRadius: "8px",
                            color: "white",
                            padding: "8px",
                            margin: "8px",
                            marginBottom: "0"
                        }
                    })
                }), "photo" !== Object(l.a)(e) && "story" != Object(l.a)(e) ? o.a.create("div", {
                    style: {
                        position: "relative",
                        left: "15px",
                        width: "0",
                        height: "0",
                        borderColor: "#4D4D4D transparent transparent transparent",
                        borderStyle: "solid",
                        borderWidth: "8px 8px 0 8px"
                    }
                }) : "" ]
            });
        }
        setPos() {
            const {pageXOffset: e, pageYOffset: t, innerWidth: n, innerHeight: r} = window, o = r + t, i = n + e, a = this.node.getBoundingClientRect();
            a.width || a.height || (a.width = this.options.defaultWidth, a.height = this.options.defaultHeight);
            const l = this.target.getBoundingClientRect(), u = {}, c = [ "top", "bottom", "left", "right" ].map(s => {
                let c = null, d = null, p = 0;
                if (-1 !== [ "left", "right" ].indexOf(s)) {
                    const e = (l.height - a.height) / 2;
                    if (c = Math.round(l.top + t + e), a.height < r) {
                        let e = c + a.height;
                        e > o && (c -= e - o, p = 1), c < 0 && (c = 0, p = 1);
                    }
                } else "top" === s ? c = Math.round(l.top + t) - a.height : "bottom" === s && (c = Math.round(l.top + t) + l.height);
                if (-1 !== [ "top", "bottom" ].indexOf(s)) {
                    const t = (l.width - a.width) / 2;
                    if (d = Math.round(l.left + e + t), a.width < n) {
                        let e = d + a.width;
                        e > i && (d -= e - i, p = 1), d < 0 && (d = 0, p = 1);
                    }
                } else "left" === s ? d = Math.round(l.left + e - a.width) : "right" === s && (d = Math.round(l.left + e + l.width));
                const f = d + a.width, h = c + a.height, {width: g, height: A} = a;
                let m = A, v = g;
                c < 0 && (m -= -1 * c), h > o && (m -= h - o), d < 0 && (v -= -1 * d), f > i && (v -= f - i);
                const y = 100 / (a.width * a.height) * (v * m) - p;
                return u[s] = {
                    top: c,
                    left: d,
                    quality: y
                };
            });
            c.sort((e, t) => {
                let {quality: n} = e, {quality: r} = t;
                return n === r ? 0 : n > r ? -1 : 1;
            });
            const d = c[0];
            var p = 65;
            "101" == Object(s.a)() && window.innerWidth >= 1293 && window.innerHeight >= 768 && (p = 35), 
            this.node.style.top = d.top + "px", this.node.style.left = d.left + p + "px";
        }
    }
    const p = (e, t, n) => {
        if (!(e.dataset.sfTitleTooltip > 0)) {
            e.dataset.sfTitleTooltip = 1;
            const r = new d(e, t);
            e.addEventListener("show_tooltip", () => {
                r.show(n);
            }), e.addEventListener("hide_tooltip", () => {
                r.hide();
            });
        }
        i.a.trigger(e, "show_tooltip");
    }, f = e => {
        e.dataset.sfTitleTooltip > 0 && i.a.trigger(e, "hide_tooltip");
    };
}, function(e, t, n) {
    "use strict";
    var r = n(7);
    const o = Object(r.a)("extensionMarker"), i = "savefrom-helper-extension", a = {
        getItem(e) {
            let t = null;
            try {
                t = window.sessionStorage.getItem(e);
            } catch (t) {
                o.error("getItem error", e, t);
            }
            return t;
        },
        setItem(e, t) {
            try {
                window.sessionStorage.setItem(e, t);
            } catch (n) {
                o.error("setMarker error", e, t, n);
            }
        },
        hash(e) {
            const t = e.length;
            let n = 0, r = 0;
            if (t > 0) for (;r < t; ) n = (n << 5) - n + e.charCodeAt(r++) | 0;
            return "" + n;
        },
        getMarker() {
            let e = null;
            return e = chrome.runtime.id, this.hash("" + e);
        },
        getCurrentMarker() {
            return this.getItem(i);
        },
        setMarker(e) {
            return this.setItem(i, e);
        },
        getFallbackMarker() {
            return this.getItem(i + "-fallback");
        },
        setFallbackMarker() {
            return this.setItem(i + "-fallback", "1");
        },
        isSingle() {
            const e = this.getMarker();
            let t = this.getCurrentMarker();
            return "1" === t && null === this.getFallbackMarker() && (this.setFallbackMarker(), 
            t = null), null === t && this.setMarker(t = e), t === e;
        }
    };
    t.a = a;
}, function(e, t, n) {
    "use strict";
    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e;
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
        })(e);
    }
    function o(e) {
        var t = function(e, t) {
            if ("object" !== r(e) || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var o = n.call(e, t || "default");
                if ("object" !== r(o)) return o;
                throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
        }(e, "string");
        return "symbol" === r(t) ? t : String(t);
    }
    function i(e, t, n) {
        return (t = o(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e;
    }
    n.d(t, "a", (function() {
        return i;
    }));
}, function(e, t, n) {
    "use strict";
    var r = n(5), o = n(2);
    t.a = (e, t) => {
        let n = document.createElement("div");
        if ("string" == typeof t) if (document.getElementById(t)) t = document.getElementById(t); else {
            const e = document.createElement("div");
            e.setAttribute("id", t), (t = e).style.position = "fixed", t.style.bottom = "20px", 
            t.style.right = "30px", t.style.display = "flex", t.style.flexDirection = "column-reverse", 
            t.style.overflowX = "hidden", t.style.overflowY = "scroll", t.style.zIndex = "100000", 
            t.style.maxHeight = "95%", document.body.appendChild(t);
        }
        function i() {
            n && (Object(o.d)(n), n = null);
        }
        return Object(r.i)(Object(o.b)(Object(o.a)(e, {
            unmountLayer: i
        }), t), n), i;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(32);
    t.a = e => new Promise((t, n) => {
        Object(r.a)(e, (e, r) => {
            e ? n(e) : t(r);
        });
    });
}, function(e, t, n) {
    "use strict";
    let r = function(e, t) {
        let n = document.createElement("div");
        return r = "function" == typeof n.matches ? function(e, t) {
            return e.matches(t);
        } : "function" == typeof n.matchesSelector ? function(e, t) {
            return e.matchesSelector(t);
        } : "function" == typeof n.webkitMatchesSelector ? function(e, t) {
            return e.webkitMatchesSelector(t);
        } : "function" == typeof n.mozMatchesSelector ? function(e, t) {
            return e.mozMatchesSelector(t);
        } : "function" == typeof n.oMatchesSelector ? function(e, t) {
            return e.oMatchesSelector(t);
        } : "function" == typeof n.msMatchesSelector ? function(e, t) {
            return e.msMatchesSelector(t);
        } : function(e, t) {
            return !1;
        }, n = null, r(e, t);
    };
    t.a = function(e, t) {
        return r(e, t);
    };
}, function(e, t, n) {
    "use strict";
    t.a = e => "data-" + e.replace(/[A-Z]/g, (function(e) {
        return "-" + e.toLowerCase();
    }));
}, function(e, t, n) {
    var r;
    !function() {
        "use strict";
        var n = {}.hasOwnProperty;
        function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
                var r = arguments[t];
                if (r) {
                    var i = typeof r;
                    if ("string" === i || "number" === i) e.push(r); else if (Array.isArray(r)) {
                        if (r.length) {
                            var a = o.apply(null, r);
                            a && e.push(a);
                        }
                    } else if ("object" === i) {
                        if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
                            e.push(r.toString());
                            continue;
                        }
                        for (var s in r) n.call(r, s) && r[s] && e.push(s);
                    }
                }
            }
            return e.join(" ");
        }
        e.exports ? (o.default = o, e.exports = o) : void 0 === (r = function() {
            return o;
        }.apply(t, [])) || (e.exports = r);
    }();
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        let n = null;
        n = !(t = t || {}).params && /\?/.test(e) ? e.match(/[^?]*\?(.*)/)[1] : e;
        const r = t.sep || "&", o = n.split(r), i = {};
        for (let e = 0, n = o.length; e < n; e++) {
            const n = o[e].split("=");
            let r = n[0];
            const a = n[1] || "";
            if (t.noDecode) i[r] = a; else {
                try {
                    r = decodeURIComponent(r);
                } catch (e) {
                    r = unescape(r);
                }
                try {
                    i[r] = decodeURIComponent(a);
                } catch (e) {
                    i[r] = unescape(a);
                }
            }
        }
        return i;
    };
}, function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        var t = [];
        return t.toString = function() {
            return this.map((function(t) {
                var n = function(e, t) {
                    var n = e[1] || "", r = e[3];
                    if (!r) return n;
                    if (t && "function" == typeof btoa) {
                        var o = (a = r, s = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s), 
                        "/*# ".concat(l, " */")), i = r.sources.map((function(e) {
                            return "/*# sourceURL=".concat(r.sourceRoot || "").concat(e, " */");
                        }));
                        return [ n ].concat(i).concat([ o ]).join("\n");
                    }
                    var a, s, l;
                    return [ n ].join("\n");
                }(t, e);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
            })).join("");
        }, t.i = function(e, n, r) {
            "string" == typeof e && (e = [ [ null, e, "" ] ]);
            var o = {};
            if (r) for (var i = 0; i < this.length; i++) {
                var a = this[i][0];
                null != a && (o[a] = !0);
            }
            for (var s = 0; s < e.length; s++) {
                var l = [].concat(e[s]);
                r && o[l[0]] || (n && (l[2] ? l[2] = "".concat(n, " and ").concat(l[2]) : l[2] = n), 
                t.push(l));
            }
        }, t;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(2);
    t.a = e => {
        let {locals: t, use: n, unuse: o} = e;
        return r.c.useMemo(n, []), r.c.useEffect(() => o, []), t;
    };
}, function(e, t, n) {
    "use strict";
    t.a = () => window.top !== window.self;
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        Array.isArray(t) || (t = [ t ]);
        for (let n = e; n; n = n.parentNode) {
            if (1 !== n.nodeType) return null;
            for (let e, r = 0; e = t[r]; r++) if (n.classList.contains(e)) return n;
        }
        return null;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(0), o = n(7), i = n(34), a = n(62), s = n(2), l = n(3), u = n(19);
    function c(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            }))), n.push.apply(n, r);
        }
        return n;
    }
    function d(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? c(Object(n), !0).forEach((function(t) {
                Object(u.a)(e, t, n[t]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            }));
        }
        return e;
    }
    const p = Object(o.a)("downloader:providers");
    var f = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = t ? t + "-converter" : "unknown-converter";
        const o = {
            ec: n
        };
        e.on("run", e => {
            p.info(n, "Send analytics run downloader."), r.a.sendMessage({
                action: "trackConverterStat",
                params: d({
                    ea: "init-converter",
                    el: "true"
                }, o)
            });
        }), e.on("completed", e => {
            p.info(n, "Send analytics downloader completed."), r.a.sendMessage({
                action: "trackConverterStat",
                params: d({
                    ea: "completed-converter",
                    el: "true"
                }, o)
            });
        }), e.on("error", t => {
            e.sendError || (p.info(n, "Send analytics error downloader - " + t.message), r.a.sendMessage({
                action: "trackConverterStat",
                params: d({
                    ea: "error-converter",
                    el: t.message,
                    location: location.href
                }, o)
            }), e.sendError = !0);
        });
    }, h = (n(5), n(48));
    class g {
        init() {
            const e = document.createElement("canvas"), t = document.createElement("video");
            if (t.setAttribute("title", "Prevent Sleep"), t.setAttribute("playsinline", ""), 
            this._supported = "function" == typeof e.captureStream, !this._supported) return;
            e.getContext("2d").fillRect(0, 0, 1, 1), t.srcObject = e.captureStream(0), this.video = t, 
            this._inited = !0;
        }
        start() {
            if (this._inited || this.init(), this._supported && this.video.paused) return this.video.play();
        }
        stop() {
            if (this._inited && this._supported && !this.video.paused) return this.video.pause();
        }
    }
    class A {
        start() {
            if (!this._wakeLock) return navigator.wakeLock.request("screen").then(e => (this._wakeLock = e, 
            !0));
        }
        stop() {
            if (this._wakeLock) return this._wakeLock.release().then(() => (this._wakeLock = null, 
            !0));
        }
    }
    var m = class {
        constructor() {
            const e = window.navigator && "wakeLock" in navigator ? A : g;
            this.parent = new e, this.chain = Object(h.a)(1);
        }
        start() {
            return this.chain(() => this.parent.start());
        }
        stop() {
            return this.chain(() => this.parent.stop());
        }
    };
    let v = null, y = 0;
    var b = function() {
        y++, 1 === y && (v || (v = new m), v.start());
        let e = !1;
        return () => {
            e || (e = !0, 0 == --y && v.stop());
        };
    };
    let w = 0;
    function C(e) {
        return e.returnValue = !0;
    }
    var x = function() {
        w++, 1 === w && window.addEventListener("beforeunload", C);
        let e = !1;
        return () => {
            e || (e = !0, 0 == --w && window.removeEventListener("beforeunload", C));
        };
    }, k = n(24), I = n.n(k), _ = n(66), E = n.n(_), D = n(27);
    const S = {
        margin: "0 12px"
    };
    var M = e => {
        let {title: t, status: n, progress: r, progressStatus: o, onClickCancel: i, error: a} = e;
        const l = Object(D.a)(E.a), u = s.c.useMemo(() => ({
            width: r + "%"
        }), [ r ]);
        return s.c.createElement("div", {
            className: I()(l.ffDownloader)
        }, s.c.createElement("div", {
            className: l.container
        }, s.c.createElement("div", {
            onClick: i,
            className: l.closeBtn,
            style: {
                backgroundImage: "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgb3BhY2l0eT0iMC42Ij4KPHBhdGggZD0iTTEzLjY4IDE0LjIyQzEzLjUzNjggMTQuMjE5OSAxMy4zOTk2IDE0LjE2MjkgMTMuMjk4NCAxNC4wNjE2TDMuOTM4MzkgNC43MDE2MkMzLjg0MyA0LjU5OTI1IDMuNzkxMDcgNC40NjM4NiAzLjc5MzU0IDQuMzIzOTZDMy43OTYwMSA0LjE4NDA2IDMuODUyNjggNC4wNTA1OSAzLjk1MTYyIDMuOTUxNjVDNC4wNTA1NiAzLjg1MjcxIDQuMTg0MDMgMy43OTYwNCA0LjMyMzkzIDMuNzkzNTdDNC40NjM4MyAzLjc5MTEgNC41OTkyMiAzLjg0MzAzIDQuNzAxNTkgMy45Mzg0MkwxNC4wNjE2IDEzLjI5ODRDMTQuMTM3IDEzLjM3MzkgMTQuMTg4NCAxMy40NzAxIDE0LjIwOTIgMTMuNTc0OEMxNC4yMyAxMy42Nzk1IDE0LjIxOTMgMTMuNzg4IDE0LjE3ODQgMTMuODg2NkMxNC4xMzc2IDEzLjk4NTIgMTQuMDY4NSAxNC4wNjk1IDEzLjk3OTcgMTQuMTI4OUMxMy44OTEgMTQuMTg4MiAxMy43ODY3IDE0LjIxOTkgMTMuNjggMTQuMjJaIiBmaWxsPSIjNDM0MzQzIi8+CjxwYXRoIGQ9Ik00LjMyMDI5IDE0LjIyQzQuMjEzNTUgMTQuMjE5OSA0LjEwOTI0IDE0LjE4ODIgNC4wMjA1MyAxNC4xMjg5QzMuOTMxODEgMTQuMDY5NSAzLjg2MjY3IDEzLjk4NTIgMy44MjE4NCAxMy44ODY2QzMuNzgxMDEgMTMuNzg4IDMuNzcwMzIgMTMuNjc5NSAzLjc5MTExIDEzLjU3NDhDMy44MTE5MSAxMy40NzAxIDMuODYzMjYgMTMuMzczOSAzLjkzODY5IDEzLjI5ODRMMTMuMjk4NyAzLjkzODQyQzEzLjQwMTEgMy44NDMwMyAxMy41MzY0IDMuNzkxMSAxMy42NzYzIDMuNzkzNTdDMTMuODE2MiAzLjc5NjA0IDEzLjk0OTcgMy44NTI3MSAxNC4wNDg3IDMuOTUxNjVDMTQuMTQ3NiA0LjA1MDU5IDE0LjIwNDMgNC4xODQwNiAxNC4yMDY3IDQuMzIzOTZDMTQuMjA5MiA0LjQ2Mzg2IDE0LjE1NzMgNC41OTkyNSAxNC4wNjE5IDQuNzAxNjJMNC43MDE4OSAxNC4wNjE2QzQuNjAwNzEgMTQuMTYyOSA0LjQ2MzQ2IDE0LjIxOTkgNC4zMjAyOSAxNC4yMloiIGZpbGw9IiM0MzQzNDMiLz4KPC9nPgo8L3N2Zz4K)"
            }
        }), a && s.c.createElement("div", {
            className: l.error
        }, s.c.createElement("div", {
            className: l.errorText
        }, "Error:"), " ", a.message, " "), !a && s.c.createElement("div", null, s.c.createElement("p", {
            className: l.fileName
        }, "Filename: ", t), s.c.createElement("div", {
            className: l.footer
        }, s.c.createElement("div", {
            style: S
        }, s.c.createElement("div", {
            className: l.loadingBar
        }, s.c.createElement("div", {
            className: l.progressBar,
            style: u
        })), s.c.createElement("div", {
            className: l.status
        }, s.c.createElement("div", {
            className: l.statusState
        }, s.c.createElement("div", null, n), s.c.createElement("div", null, o)), s.c.createElement("div", {
            className: l.statusPercentage
        }, r, "%")))))));
    }, O = n(67), F = n.n(O);
    var j = e => {
        let {title: t, status: n, progress: o, progressStatus: i, onClickCancel: a, error: l, blob: u, showTip: c, handleDownload: d} = e;
        const p = Object(D.a)(F.a), f = s.c.useMemo(() => ({
            width: o + "%"
        }), [ o ]);
        return s.c.createElement("div", {
            className: I()(p.ffDownloader)
        }, s.c.createElement("div", {
            className: p.container
        }, s.c.createElement("svg", {
            width: "12",
            height: "12",
            viewBox: "0 0 12 12",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            onClick: a,
            className: p.closeBtn
        }, s.c.createElement("g", {
            opacity: "0.4"
        }, s.c.createElement("path", {
            d: "M9.11983 9.48007C9.02438 9.47999 8.93288 9.44201 8.86543 9.37447L2.62543 3.13447C2.56184 3.06623 2.52722 2.97597 2.52886 2.8827C2.53051 2.78944 2.56829 2.70045 2.63425 2.63449C2.70021 2.56854 2.78919 2.53075 2.88246 2.52911C2.97572 2.52746 3.06598 2.56208 3.13423 2.62567L9.37423 8.86567C9.42451 8.91602 9.45875 8.98014 9.47261 9.04993C9.48648 9.11972 9.47935 9.19205 9.45213 9.2578C9.42491 9.32354 9.37881 9.37974 9.31967 9.4193C9.26052 9.45886 9.19098 9.48001 9.11983 9.48007Z",
            fill: "#434343"
        }), s.c.createElement("path", {
            d: "M2.88019 9.48007C2.80904 9.48001 2.7395 9.45886 2.68035 9.4193C2.62121 9.37974 2.57512 9.32354 2.54789 9.2578C2.52067 9.19205 2.51354 9.11972 2.52741 9.04993C2.54127 8.98014 2.57551 8.91602 2.62579 8.86567L8.86579 2.62567C8.93404 2.56208 9.0243 2.52746 9.11756 2.52911C9.21083 2.53075 9.29981 2.56854 9.36577 2.63449C9.43173 2.70045 9.46951 2.78944 9.47116 2.8827C9.4728 2.97597 9.43818 3.06623 9.37459 3.13447L3.13459 9.37447C3.06714 9.44201 2.97564 9.47999 2.88019 9.48007V9.48007Z",
            fill: "#434343"
        }))), l && s.c.createElement("div", {
            className: p.error
        }, s.c.createElement("div", {
            className: p.errorText
        }, "Error:"), " ", l.message, " "), !l && s.c.createElement("div", null, s.c.createElement("p", {
            className: p.fileName
        }, r.a.i18n.getMessage("downloadingBox_fileName"), ": ", t), s.c.createElement("div", {
            className: p.footer
        }, s.c.createElement("div", null, s.c.createElement("div", {
            className: p.loadingBar
        }, s.c.createElement("div", {
            className: p.progressBar,
            style: f
        })), s.c.createElement("div", {
            className: p.status
        }, s.c.createElement("div", {
            className: p.statusState
        }, s.c.createElement("div", null, n), s.c.createElement("div", null, i)), s.c.createElement("div", {
            className: p.statusPercentage
        }, o, "%"))))), c && s.c.createElement("div", {
            className: p.tipWindow
        }, s.c.createElement("div", {
            className: p.tipText
        }, s.c.createElement("p", null, r.a.i18n.getMessage("downloadingBox_description"))), u && s.c.createElement("a", {
            href: u,
            download: t,
            onClick: d
        }, s.c.createElement("button", {
            className: p.tipWindowButton,
            type: "button"
        }, r.a.i18n.getMessage("downloadingBox_button"))))));
    }, T = n(8), L = n(35);
    const N = Object(o.a)("MediaMuxer"), z = "PREPARE", B = "CONVERTING", P = "DOWNLOADED", R = "INFINITE", q = "FINITE", V = s.c.memo(e => {
        let {sources: t, filename: n, format: o, unmountLayer: u, convertType: c, showConfirmOnClose: d} = e;
        const [p, h] = s.c.useState(null), [g, A] = s.c.useState(!1), [m, v] = s.c.useState(r.a.i18n.getMessage("downloadingBox_status_loading")), [y, w] = s.c.useState(z), [C, k] = s.c.useState(0), [I, _] = s.c.useState(""), [E, D] = s.c.useState(R), [S, O] = s.c.useState(null), [F, V] = s.c.useState(!1), [H, U] = s.c.useState({}), [W, Q] = s.c.useState({}), G = s.c.useRef();
        s.c.useEffect(() => {
            function e() {
                u();
            }
            return l.a.onRemoveEvent(G.current, e), () => {
                l.a.offRemoveEvent(G.current, e);
            };
        }, []), s.c.useEffect(() => {
            const e = {
                run: [],
                completed: [],
                error: []
            }, s = (t, n) => e[t].forEach(e => e(n));
            f({
                on: (t, n) => {
                    e[t] && e[t].push(n);
                }
            }, "youtube-merge");
            let l = !0;
            const d = new a.a(G.current);
            d.onProgress = (e, t) => {
                l && (k(Math.trunc(100 * e)), [ q, R ].includes(t) && D(t));
            }, d.onProgressStatus = e => {
                l && _(e);
            }, d.onStatus = (e, t) => {
                l && (v(e), [ z, B, P ].includes(t) && w(t));
            }, s("run");
            const p = x(), g = b();
            return d.init().then(() => (Object(T.a)({
                category: "download-start",
                subcategory: Object(L.a)(),
                event: "video"
            }), "hls" === c ? d.hls(t, n, o) : "hlsToMp3" === c ? d.hlsToMp3(t, n) : d.join(t, n, o))).then(() => {
                l && d.getBuiltBlob().then(e => {
                    r.a.callFn("getPreferences").then(async t => {
                        if (r.a.isFirefox && (!t.sortDownloads || !t.sortDownloads.isEnabled)) return d.download(), 
                        setTimeout(u, 3e3);
                        U(e.blob), Q(t.sortDownloads);
                        const o = URL.createObjectURL(e.blob);
                        if (O(o), V(!0), t.sortDownloads && t.sortDownloads.isEnabled) {
                            const o = e.filename.slice(e.filename.lastIndexOf(".") + 1), i = t.sortDownloads.groups.find(e => e.formats.some(e => -1 !== e.indexOf(o)));
                            i && i.dir && !r.a.isFirefox && (e.filename = `${i.dir}/${e.filename}`);
                            const a = await new Promise(t => {
                                let n = new FileReader;
                                n.onload = t, n.readAsDataURL(e.blob);
                            }).then(e => e.target.result);
                            if (r.a.isGM) GM_download(a, e.filename); else {
                                if (r.a.isFirefox) return r.a.sendMessage({
                                    action: "downloadFile",
                                    options: {
                                        filename: n,
                                        url: e.blob,
                                        saveAs: !0
                                    }
                                }), setTimeout(u, 5e3);
                                r.a.callFn("downloadInFolder", [ {
                                    url: a,
                                    filename: e.filename
                                } ]);
                            }
                        } else {
                            const t = document.createElement("a");
                            t.href = o, t.download = e.filename, setTimeout(() => {
                                t.dispatchEvent(new MouseEvent("click"));
                            }, 0);
                        }
                    });
                });
            }).then(() => {
                Object(T.a)({
                    category: "download-complete",
                    subcategory: Object(L.a)(),
                    event: "video"
                }), s("completed"), l && (A(!0), v(r.a.i18n.getMessage("downloadingBox_status_complete")), 
                w(P));
            }, e => {
                s("error", e), l && (N.error("Join error", e), h(e));
            }).then(...Object(i.a)(() => {
                p(), g(), l && A(!0);
            })), () => {
                l = !1, p(), g();
            };
        }, []);
        const Z = s.c.useCallback(async e => {
            let t = n;
            if (W && W.isEnabled) {
                const e = t.slice(t.lastIndexOf(".") + 1), n = W.groups.find(t => t.formats.some(t => -1 !== t.indexOf(e)));
                n && n.dir && (t = `${n.dir}/${t}`);
            }
            if (W && W.isEnabled) {
                e.preventDefault(), e.stopPropagation();
                let n = await new Promise(e => {
                    let t = new FileReader;
                    t.onload = e, t.readAsDataURL(H);
                }).then(e => e.target.result);
                r.a.isGM ? GM_download(n, t) : r.a.callFn("downloadInFolder", [ {
                    url: n,
                    filename: t
                } ]);
            }
        }, [ H, W ]), Y = s.c.useCallback(() => {
            (y === P || !d || confirm(r.a.i18n.getMessage("are_you_sure_interrupt_download"))) && u();
        }, [ y ]), J = s.c.useCallback(() => V(!F), [ V, F ]);
        return r.a.isFirefox ? s.c.createElement("div", {
            ref: G
        }, s.c.createElement(M, {
            title: n,
            format: o,
            status: m,
            progress: C,
            progressStatus: I,
            onClickCancel: Y,
            error: p
        })) : s.c.createElement("div", {
            ref: G
        }, s.c.createElement(j, {
            title: n,
            format: o,
            status: m,
            progress: C,
            progressStatus: I,
            onClickCancel: Y,
            error: p,
            blob: S,
            onClickShowTip: J,
            showTip: F,
            handleDownload: Z
        }));
    });
    t.a = V;
}, function(e, t, n) {
    "use strict";
    var r = n(0);
    t.a = e => new Promise(t => r.a.storage.get(e, t));
}, function(e, t, n) {
    "use strict";
    var r = n(7);
    const o = Object(r.a)("webRequest");
    var i = function() {
        const e = /^sf-\d+_/, t = {
            urls: [ "<all_urls>" ],
            types: [ "xmlhttprequest" ]
        };
        let n = !1;
        const r = {}, i = {}, a = function(e) {
            for (let t in e) return !1;
            return !0;
        }, s = function(e) {
            delete i[e.requestId], a(r) && a(i) && c();
        }, l = function(t) {
            const n = i[t.requestId], o = t.requestHeaders || [];
            let s = [], l = [];
            const u = [];
            if (n) l = n.changes, s = n.filtered; else if (!a(r)) {
                let t, n;
                for (let i, a = 0; i = o[a]; a++) t = i.name, e.test(t) && (n = r[t], n && (i.name = n.name, 
                i.value = n.value, l.push(i), s.push(n.name.toLowerCase()), s.push(t.toLowerCase()), 
                /cookie/i.test(i.name) && u.push("set-cookie"), clearTimeout(n.timer), delete r[t]));
            }
            if (l.length) {
                n || (i[t.requestId] = {
                    changes: l,
                    filtered: s,
                    filterResponseHeaders: u
                });
                return {
                    requestHeaders: o.filter((function(e) {
                        return -1 === s.indexOf(e.name.toLowerCase());
                    })).concat(l)
                };
            }
        }, u = function(e) {
            const t = i[e.requestId], n = e.responseHeaders;
            if (t && n) {
                const e = t.filterResponseHeaders;
                return {
                    responseHeaders: n.filter((function(t) {
                        return -1 === e.indexOf(t.name.toLowerCase());
                    }))
                };
            }
        }, c = function() {
            n && (n = !1, chrome.webRequest.onBeforeSendHeaders.removeListener(l, t, [ "blocking", "requestHeaders" ]), 
            chrome.webRequest.onHeadersReceived.removeListener(u, t, [ "blocking", "responseHeaders" ]), 
            chrome.webRequest.onResponseStarted.removeListener(s, t), chrome.webRequest.onErrorOccurred.removeListener(s, t), 
            o.debug("webRequest", "rm listener"));
        };
        let d = 10, p = !1;
        let f = null;
        const h = function(e) {
            return (null === f || e) && (f = !!(chrome.webRequest && chrome.webRequest.onBeforeSendHeaders && chrome.webRequest.onResponseStarted && chrome.webRequest.onErrorOccurred)), 
            f;
        }, g = /^user-agent$|^origin$|^cookie$/i;
        return {
            wrapHeaderKey: function(e, i) {
                if (h()) {
                    let a, c = 100;
                    for (;c-- > 0 && (a = "sf-" + parseInt(1e5 * Math.random()) + "_" + e, r[a]); ) ;
                    return r[a] = {
                        name: e,
                        value: i,
                        timer: setTimeout((function() {
                            delete r[a];
                        }), 3e3)
                    }, n || (n = !0, chrome.webRequest.onBeforeSendHeaders.addListener(l, t, [ "blocking", "requestHeaders" ]), 
                    chrome.webRequest.onHeadersReceived.addListener(u, t, [ "blocking", "responseHeaders" ]), 
                    chrome.webRequest.onResponseStarted.addListener(s, t), chrome.webRequest.onErrorOccurred.addListener(s, t), 
                    o.debug("webRequest", "add listener")), a;
                }
                return e;
            },
            isSpecialHeader: function(e) {
                return g.test(e);
            },
            requestPermission: function(e) {
                h() || p ? e(f) : chrome.permissions && chrome.permissions.request ? chrome.permissions.request({
                    permissions: [ "webRequest", "webRequestBlocking" ]
                }, (function(t) {
                    (t || d-- <= 0) && (p = !0), t && h(!0), e(f);
                })) : (p = !0, e(f));
            }
        };
    }();
    const a = n(36), s = function(e) {
        e = e.split(/\r?\n/);
        const t = {};
        return e.forEach((function(e) {
            const n = e.indexOf(":");
            if (-1 === n) return;
            const r = e.substr(0, n).trim().toLowerCase(), o = e.substr(n + 1).trim();
            t[r] = o;
        })), t;
    };
    t.a = function(e, t) {
        const n = {};
        let r = function(e, n) {
            r = null, d.timeoutTimer && clearTimeout(d.timeoutTimer);
            let i = null;
            e && (i = String(e.message || e) || "ERROR"), t && t(i, o(n), n);
        };
        const o = function(e) {
            const t = {};
            t.statusCode = f.status, t.statusText = f.statusText;
            let n = null;
            const r = f.getAllResponseHeaders();
            return "string" == typeof r && (n = s(r)), t.headers = n || {}, t.body = e, t.responseURL = f.responseURL, 
            t;
        };
        "object" != typeof e && (e = {
            url: e
        });
        let l = e.url, u = e.method || e.type || "GET";
        u = u.toUpperCase();
        let c = e.data;
        "string" != typeof c && (c = a.stringify(c)), c && "GET" === u && (l += (/\?/.test(l) ? "&" : "?") + c, 
        c = void 0), !1 === e.cache && -1 !== [ "GET", "HEAD" ].indexOf(u) && (l += (/\?/.test(l) ? "&" : "?") + "_=" + Date.now()), 
        e.headers = e.headers || {}, c && (e.headers["Content-Type"] = e.contentType || e.headers["Content-Type"] || "application/x-www-form-urlencoded; charset=UTF-8");
        const d = {};
        d.url = l, d.method = u, c && (d.data = c), e.json && (d.json = !0), e.xml && (d.xml = !0), 
        e.timeout && (d.timeout = e.timeout), e.mimeType && (d.mimeType = e.mimeType), e.withCredentials && (d.withCredentials = !0), 
        Object.keys(e.headers).length && (d.headers = e.headers), d.timeout > 0 && (d.timeoutTimer = setTimeout((function() {
            r && r(new Error("ETIMEDOUT")), f.abort();
        }), d.timeout));
        const p = {
            0: 200,
            1223: 204
        }, f = (e.localXHR, new XMLHttpRequest);
        f.open(d.method, d.url, !0), d.mimeType && f.overrideMimeType(d.mimeType), d.withCredentials && (f.withCredentials = !0);
        const h = [];
        for (let e in d.headers) i && i.isSpecialHeader(e) && h.push({
            key: e,
            value: d.headers[e]
        }), f.setRequestHeader(e, d.headers[e]);
        f.onload = function() {
            const e = p[f.status] || f.status;
            try {
                if (e >= 200 && e < 300 || 304 === e) {
                    let e = f.responseText;
                    if (d.json) e = JSON.parse(e); else if (d.xml) e = (new DOMParser).parseFromString(e, "text/xml"); else if ("string" != typeof e) throw console.error("Response is not string!", e), 
                    new Error("Response is not string!");
                    return r && r(null, e);
                }
                throw new Error(f.status + " " + f.statusText);
            } catch (e) {
                return r && r(e);
            }
        };
        const g = f.onerror = function() {
            r && r(new Error(f.status + " " + f.statusText));
        };
        let A = null;
        void 0 !== f.onabort ? f.onabort = g : A = function() {
            4 === f.readyState && r && setTimeout((function() {
                return g();
            }));
        }, A && (f.onreadystatechange = A);
        const m = function() {
            try {
                f.send(d.data || null);
            } catch (e) {
                setTimeout((function() {
                    r && r(e);
                }));
            }
        };
        if (i && h.length) {
            const e = function() {
                for (let e, t = 0; e = h[t]; t++) f.setRequestHeader(i.wrapHeaderKey(e.key, e.value), e.value);
            };
            i.requestPermission((function(t) {
                t && e(), r && m();
            }));
        } else m();
        return n.abort = function() {
            r = null, f.abort();
        }, n;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(38);
    t.a = class {
        constructor(e) {
            this.target = e.target, this.options = e.options || {
                attributes: !0,
                childList: !1,
                attributeOldValue: !0,
                attributeFilter: []
            }, this.attrs = e.attrs, this.observer = null, this.init();
        }
        init() {
            this.attrs.forEach(e => {
                this.options.attributeFilter.push(e.name);
            });
            const e = Object(r.a)();
            this.observer = new e(e => {
                let t;
                for (;t = e.shift(); ) this._match(t);
            }), this.start();
        }
        trigger() {
            const e = this.attrs;
            for (var t, n = 0; t = e[n]; n++) {
                const e = this.target.getAttribute(t.name);
                null !== e && t.callback({
                    value: e,
                    oldValue: null
                });
            }
        }
        start() {
            this._disconnect(), this._connect();
        }
        stop() {
            this._disconnect();
        }
        _match(e) {
            const t = this.attrs;
            for (let n, r = 0; n = t[r]; r++) n.name === e.attributeName && n.callback({
                value: e.target.getAttribute(e.attributeName),
                oldValue: e.oldValue
            });
        }
        _connect() {
            this.observer.observe(this.target, this.options);
        }
        _disconnect() {
            this.observer.disconnect();
        }
        static isAvailable() {
            return !!Object(r.a)();
        }
    };
}, function(e, t, n) {
    "use strict";
    var r = n(41);
    t.a = e => [ t => Object(r.a)(e).then(() => t), t => Object(r.a)(e).then(() => {
        throw t;
    }) ];
}, function(e, t, n) {
    "use strict";
    t.a = () => {
        switch (window.location.hostname) {
          case "www.youtube.com":
            return "101";

          case "ok.ru":
            return "ok";

          case "vk.com":
            return "vk";

          case "music.yandex.ru":
            return "ya";

          case "www.facebook.com":
          case "web.facebook.com":
            return "fa";

          case "twitch.com":
            return "tw";

          case "www.instagram.com":
            return "in";

          case "my.mail.ru":
            return "ma";

          case "vimeo.com":
            return "vi";

          case "soundcloud.com":
            return "so";

          case "tiktok.com":
            return "ti";

          case "www.dailymotion.com":
            return "da";

          default:
            return "";
        }
    };
}, function(e, t, n) {
    "use strict";
    t.decode = t.parse = n(85), t.encode = t.stringify = n(86);
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        t && !Array.isArray(t) && (t = [ t ]);
        const n = [], r = {
            "{": 0,
            "[": 0
        }, o = {
            "}": "{",
            "]": "["
        }, i = /[{}\]\[":0-9.,-]/, a = /[\r\n\s\t]/;
        let s = "";
        for (let t, l = 0; t = e[l]; l++) if ('"' !== t) i.test(t) ? (s += t, "{" === t || "[" === t ? (r["{"] || r["["] || (s = t), 
        r[t]++) : "}" !== t && "]" !== t || (r[o[t]]--, r["{"] || r["["] || n.push(s))) : "t" === t && "true" === e.substr(l, 4) ? (s += "true", 
        l += 3) : "f" === t && "false" === e.substr(l, 5) ? (s += "false", l += 4) : "n" === t && "null" === e.substr(l, 4) ? (s += "null", 
        l += 3) : a.test(t) || (r["{"] = 0, r["["] = 0, s = ""); else {
            let t = l;
            for (;-1 !== t && (t === l || "\\" === e[t - 1]); ) t = e.indexOf('"', t + 1);
            -1 === t && (t = e.length - 1), s += e.substr(l, t - l + 1), l = t, r["{"] || r["["] || n.push(s);
        }
        const l = [];
        for (let e = 0, r = n.length; e < r; e++) {
            const r = n[e];
            if ("{}" !== r && "[]" !== r) try {
                t.every((function(e) {
                    return e.test(r);
                })) && l.push(JSON.parse(r));
            } catch (e) {}
        }
        return l;
    };
}, function(e, t, n) {
    "use strict";
    t.a = () => {
        let e = null;
        return "undefined" != typeof MutationObserver ? e = MutationObserver : "undefined" != typeof WebKitMutationObserver ? e = WebKitMutationObserver : "undefined" != typeof MozMutationObserver && (e = MozMutationObserver), 
        e;
    };
}, function(e, t, n) {
    "use strict";
    class r extends Error {
        constructor(e, t) {
            super(e), this.code = t;
        }
    }
    t.a = r;
}, function(e, t, n) {
    "use strict";
    var r, o = function() {
        return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), 
        r;
    }, i = function() {
        var e = {};
        return function(t) {
            if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                    n = n.contentDocument.head;
                } catch (e) {
                    n = null;
                }
                e[t] = n;
            }
            return e[t];
        };
    }(), a = [];
    function s(e) {
        for (var t = -1, n = 0; n < a.length; n++) if (a[n].identifier === e) {
            t = n;
            break;
        }
        return t;
    }
    function l(e, t) {
        for (var n = {}, r = [], o = 0; o < e.length; o++) {
            var i = e[o], l = t.base ? i[0] + t.base : i[0], u = n[l] || 0, c = "".concat(l, " ").concat(u);
            n[l] = u + 1;
            var d = s(c), p = {
                css: i[1],
                media: i[2],
                sourceMap: i[3]
            };
            -1 !== d ? (a[d].references++, a[d].updater(p)) : a.push({
                identifier: c,
                updater: A(p, t),
                references: 1
            }), r.push(c);
        }
        return r;
    }
    function u(e) {
        var t = document.createElement("style"), r = e.attributes || {};
        if (void 0 === r.nonce) {
            var o = n.nc;
            o && (r.nonce = o);
        }
        if (Object.keys(r).forEach((function(e) {
            t.setAttribute(e, r[e]);
        })), "function" == typeof e.insert) e.insert(t); else {
            var a = i(e.insert || "head");
            if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            a.appendChild(t);
        }
        return t;
    }
    var c, d = (c = [], function(e, t) {
        return c[e] = t, c.filter(Boolean).join("\n");
    });
    function p(e, t, n, r) {
        var o = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
        if (e.styleSheet) e.styleSheet.cssText = d(t, o); else {
            var i = document.createTextNode(o), a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
        }
    }
    function f(e, t, n) {
        var r = n.css, o = n.media, i = n.sourceMap;
        if (o ? e.setAttribute("media", o) : e.removeAttribute("media"), i && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), 
        e.styleSheet) e.styleSheet.cssText = r; else {
            for (;e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r));
        }
    }
    var h = null, g = 0;
    function A(e, t) {
        var n, r, o;
        if (t.singleton) {
            var i = g++;
            n = h || (h = u(t)), r = p.bind(null, n, i, !1), o = p.bind(null, n, i, !0);
        } else n = u(t), r = f.bind(null, n, t), o = function() {
            !function(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
            }(n);
        };
        return r(e), function(t) {
            if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                r(e = t);
            } else o();
        };
    }
    e.exports = function(e, t) {
        (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = o());
        var n = l(e = e || [], t);
        return function(e) {
            if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                for (var r = 0; r < n.length; r++) {
                    var o = s(n[r]);
                    a[o].references--;
                }
                for (var i = l(e, t), u = 0; u < n.length; u++) {
                    var c = s(n[u]);
                    0 === a[c].references && (a[c].updater(), a.splice(c, 1));
                }
                n = i;
            }
        };
    };
}, function(e, t, n) {
    "use strict";
    t.a = e => new Promise(t => t(e()));
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        const n = [];
        let r;
        for (;null !== (r = t.exec(e)); ) r.index === t.lastIndex && t.lastIndex++, n.push(r);
        return n;
    }
    n.d(t, "a", (function() {
        return r;
    }));
}, function(e, t, n) {
    "use strict";
    function r(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
        const o = [];
        for (let t = 0; t < e.length; t++) {
            !o.find(r => n.every(n => r[n] === e[t][n])) && o.push(e[t]);
        }
        return o;
    }
    n.d(t, "a", (function() {
        return r;
    }));
}, function(e, t, n) {
    "use strict";
    n.d(t, "c", (function() {
        return c;
    })), n.d(t, "d", (function() {
        return d;
    })), n.d(t, "b", (function() {
        return p;
    })), n.d(t, "a", (function() {
        return f;
    }));
    var r = n(0), o = n(2), i = n(73), a = n.n(i), s = n(24), l = n.n(s), u = n(27);
    const c = "matchtv", d = "vk", p = o.c.memo(e => {
        let {items: t = [], theme: n, children: i} = e;
        const s = Object(u.a)(a.a), [p, f] = o.c.useState(!1), h = o.c.useRef(), g = o.c.useRef(), A = o.c.useRef(), m = o.c.useMemo(() => ({
            twitch: s.themeTwitch,
            [d]: s.themeVk,
            [c]: s.themeMatchtv
        }[n]), [ n ]), v = o.c.useCallback(() => {
            f(e => !e);
        }, []);
        return o.c.useEffect(() => {
            const e = e => {
                let t = e.target === h.current || h.current.contains(e.target), n = e.target === g.current;
                t || n || !A.current.classList.contains(s.show) || v();
            };
            return document.addEventListener("click", e), () => {
                document.removeEventListener("click", e);
            };
        }, []), o.c.createElement("div", {
            ref: h,
            className: m
        }, o.c.createElement("div", {
            ref: g,
            onClick: v
        }, i), o.c.createElement("div", {
            ref: A,
            className: l()(s.itemContainer, p ? s.show : s.hide)
        }, !t.length && o.c.createElement("div", {
            className: s.message
        }, r.a.i18n.getMessage("noLinksFound")), t.map(e => o.c.createElement("div", {
            onClick: e.onClick,
            className: s.item
        }, o.c.createElement("div", null, e.title)))));
    }), f = e => o.c.createElement("div", null, e.children);
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        const n = t.split("?extra=")[1].split("#"), r = n[0], o = n[1], i = o ? s(o) : "", l = s(r);
        let u = (i ? i.split(String.fromCharCode(9)) : [])[0].split(String.fromCharCode(11)), c = u.splice(0, 1, l)[0];
        return !!a[c] && (t = a[c].apply(null, [ ...u, e ]));
    }
    function o(e) {
        return /\.m3u8\?/.test(e);
    }
    function i(e) {
        if (o(e)) {
            const t = (e = e.replace("/index.m3u8", ".mp3")).split("/"), n = -1 !== e.indexOf("audios") ? 1 : 0;
            return t.splice(t.length - (2 + n), 1), t.join("/");
        }
        return null;
    }
    n.d(t, "a", (function() {
        return r;
    })), n.d(t, "c", (function() {
        return i;
    })), n.d(t, "b", (function() {
        return o;
    }));
    const a = {
        s: (e, t) => {
            let n = e.length;
            if (n) {
                let r = function(e, t) {
                    let n = e.length, r = [];
                    if (n) {
                        let e = n;
                        for (t = Math.abs(t); e--; ) t = (n * (e + 1) ^ t + e) % n, r[e] = t;
                    }
                    return r;
                }(e, t), o = 0;
                for (e = e.split(""); ++o < n; ) e[o] = e.splice(r[n - 1 - o], 1, e[o])[0];
                e = e.join("");
            }
            return e;
        },
        i: (e, t, n) => a.s(e, t ^ n)
    };
    function s(e) {
        if (!e || e.length % 4 == 1) return !1;
        for (var t, n, r = 0, o = 0, i = ""; n = e.charAt(o++); ) ~(n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN0PQRSTUVWXYZO123456789+/=".indexOf(n)) && (t = r % 4 ? 64 * t + n : n, 
        r++ % 4) && (i += String.fromCharCode(255 & t >> (-2 * r & 6)));
        return i;
    }
}, function(e, t, n) {
    "use strict";
    t.a = e => new Promise(t => setTimeout(t, e));
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return a;
    }));
    var r = n(0), o = n(10), i = n(11);
    class a {
        constructor() {
            this.active = 1, this.utils = void 0, this.settings = void 0, this.cache = s;
        }
        async start() {
            this.settings = await r.a.callFn("getPreferences"), this.utils = Object(o.a)({
                preferences: this.settings
            }), this.defaultListeners(), this.init && this.init();
        }
        defaultListeners() {
            document.addEventListener("file.download", e => {
                let {detail: t} = e;
                this.utils.download(t.filename, t.downloadURL);
            });
        }
        initObserver() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
            this.observer = new i.a({
                queries: e.map(e => ({
                    css: e.selector,
                    callback: e.handle.bind(e),
                    is: e.type
                }))
            }), this.observer.start();
        }
        appendStyle(e) {
            const t = document.createElement("style");
            t.textContent = e, document.body.appendChild(t);
        }
    }
    class s {
        static set(e, t, n) {
            localStorage.setItem(e, JSON.stringify({
                val: t,
                expires: n ? Date.now() + 60 * n * 1e3 : -1
            }));
        }
        static get(e) {
            const t = localStorage.getItem(e);
            if (!t) return null;
            const {val: n, expires: r} = JSON.parse(t);
            return n && -1 === r || r > Date.now() ? n : null;
        }
    }
}, function(e, t, n) {
    "use strict";
    var r = n(41);
    var o = class {
        constructor(e, t) {
            this.finishQueue = () => {
                if (this.activeCount--, this.queue.length > 0) {
                    const [e, t] = this.queue.shift();
                    this.runQueue(e, t);
                }
            }, this.limit = e, this.maxQueue = t, this.queue = [], this.activeCount = 0;
        }
        add(e) {
            let t = null;
            const n = new Promise(e => {
                t = e;
            });
            if (this.activeCount < this.limit) this.runQueue(e, t); else {
                const n = [ e, t ], r = this.queue.push(n);
                this.maxQueue && r > this.maxQueue && this.queue.splice(0, r - this.maxQueue);
            }
            return n;
        }
        runQueue(e, t) {
            this.activeCount++;
            const n = Object(r.a)(e);
            t(n), n.then(this.finishQueue, this.finishQueue);
        }
    };
    t.a = (e, t) => {
        const n = new o(e, t);
        return e => n.add(e);
    };
}, function(e, t, n) {
    "use strict";
    let r = null;
    t.a = (e, t) => {
        if (!r) {
            let e = document.createElement("div");
            "function" == typeof e.matches ? r = (e, t) => e.matches(t) : "function" == typeof e.matchesSelector ? r = (e, t) => e.matchesSelector(t) : "function" == typeof e.webkitMatchesSelector ? r = (e, t) => e.webkitMatchesSelector(t) : "function" == typeof e.mozMatchesSelector && (r = (e, t) => e.mozMatchesSelector(t)), 
            e = null;
        }
        return r(e, t);
    };
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        if (null == e) return {};
        var n, r, o = function(e, t) {
            if (null == e) return {};
            var n, r, o = {}, i = Object.keys(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
        }
        return o;
    }
    var o = n(0);
    Error;
    const i = [ "responseStatus", "responseOk", "responseType", "requestPrefix" ];
    t.a = (e, t) => {
        const n = t || {}, {responseStatus: a, responseOk: s = !0, responseType: l = "text", requestPrefix: u = ""} = n, c = r(n, i);
        let d = null, p = () => d && d();
        const f = (h = u, o.a.callFn("createRequest", [ h ]));
        var h;
        f.then(e => {
            d = () => o.a.callFn("clearRequest", [ e ]);
        });
        const g = f.then(t => o.a.callFn("sendRequest", [ {
            id: t,
            url: e,
            fetchOptions: c
        } ])).then(e => {
            const {id: t, numChunks: n, response: r} = e, i = [];
            for (let e = 0; e < n; e += 1) i.push(o.a.callFn("readRequestBodyChunk", [ {
                id: t,
                chunkIndex: e
            } ]));
            return Promise.all(i).then(e => function(e, t) {
                let n = e.join("");
                if ("json" === t) return JSON.parse(n);
                if ("arrayBuffer" === t) {
                    const e = n.length, r = new Uint8Array(e);
                    for (let t = 0; t < e; t += 1) r[t] = n.charCodeAt(t);
                    return "blob" === t ? new Blob([ r ]) : r.buffer;
                }
                return n;
            }(e, l)).then(e => ({
                response: r,
                body: e
            }));
        }).then(e => (p(), e)).catch(e => {
            throw p(), e;
        });
        return g.abort = () => p(), g;
    };
}, function(e, t, n) {
    "use strict";
    var r = function(e) {
        e = e.replace(/\r\n/g, "\n");
        for (var t = "", n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), 
            t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), 
            t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128));
        }
        return t;
    };
    t.a = function(e, t, n) {
        let o = "";
        if (n || "undefined" == typeof URL || "undefined" == typeof Blob) {
            const n = r(e);
            o = "data:" + t + ";charset=utf8;base64," + encodeURIComponent(btoa(n));
        } else {
            const n = new Blob([ e ], {
                encoding: "UTF-8",
                type: t
            });
            o = URL.createObjectURL(n);
        }
        return o;
    };
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return f;
    })), n.d(t, "b", (function() {
        return h;
    }));
    var r = n(42), o = n(43), i = n(21), a = n(0), s = n(7);
    const l = Object(s.a)("tools/youtube");
    function u(e) {
        return new Promise((t, n) => {
            a.a.sendMessage({
                action: "getFileSize",
                url: e
            }, (function(n) {
                let {fileSize: r} = n;
                if (0 === r || !Number.isFinite(r)) return t(!1);
                a.a.sendMessage({
                    action: "getFileSize",
                    url: e,
                    requestOptions: {
                        type: "GET",
                        headers: {
                            Range: `bytes=${r - 8}-${r}`
                        }
                    }
                }, (function(n) {
                    let {error: r} = n;
                    r ? l.debug(`Link ${e} don't have content`) : l.debug(`Link ${e} have content`), 
                    t(!r);
                }));
            }));
        });
    }
    var c = n(20), d = n(5), p = n(30);
    async function f(e, t) {
        let n = Object(r.a)(t, /:"(https:\\\/\\\/[a-z0-9\-]{3,15}\.vkuservideo\.net.*?\.(\d+)\.mp4.*?)",/gm).filter(e => e[1]).map(e => {
            const [t, n, r] = e;
            return {
                href: n,
                quality: r,
                format: "MP4"
            };
        }), a = Object(r.a)(t, /RESOLUTION=(.*?)\\n(http.*?)\\n/gm).filter(e => e[1]).map(e => {
            const [t, n, r] = e;
            return {
                quality: n.split("x").length > 1 ? n.split("x")[1] : n,
                href: r,
                format: "HLS",
                noSize: !0
            };
        }), s = Object(r.a)(t, /hls":"(.*?)",/gm).filter(e => e[1]).map(e => e[1]).pop(), l = await Object(i.a)(s).then(e => e.body), u = Object(r.a)(l, /QUALITY=(.*?),RESOLUTION=(.*?)\n(.*?)\n/gm);
        return a.push(...u.filter(e => e[1]).map(t => {
            const [n, r, o, i] = t;
            return {
                quality: r.split("x").length > 1 ? r.split("x")[1] : r,
                href: i,
                format: "MP4",
                noSize: !0,
                func: t => {
                    t.preventDefault(), t.stopPropagation(), Object(c.a)(Object(d.e)(p.a, {
                        filename: e + ".mp4",
                        format: "mp4",
                        sources: [ {
                            url: i
                        } ],
                        convertType: "hls"
                    }), "sf-muxer-parent");
                }
            };
        })), a = a.map(g), {
            hls: Object(o.a)(a, "href"),
            mp4: Object(o.a)(n, "href"),
            dash: []
        };
    }
    async function h(e, t) {
        const n = [];
        for (let r = 0; r < e.length; r++) if (t && t(e[r])) n.push(e[r]); else if (-1 !== e[r].href.indexOf("http")) {
            await u(e[r].href) && n.push(e[r]);
        } else n.push(e[r]);
        return n;
    }
    const g = e => {
        const t = {
            full: 1080,
            hd: 720,
            sd: 480,
            low: 360,
            lowest: 240,
            mobile: 144
        };
        return e.rawQuality = e.quality, e.quality = t[e.quality] ? String(t[e.quality]) : e.quality, 
        e;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(1);
    t.a = function e(t, n) {
        if (n = n || {}, "string" == typeof t) {
            if ("[" !== t[0]) return document.createTextNode(t);
            try {
                t = t.replace(/"/g, "\\u0022").replace(/\\'/g, "\\u0027").replace(/'/g, '"').replace(/([{,])\s*([a-zA-Z0-9]+):/g, '$1"$2":'), 
                t = JSON.parse(t);
            } catch (e) {
                return document.createTextNode(t);
            }
        }
        if (!Array.isArray(t)) return document.createTextNode(t);
        const o = n.fragment || document.createDocumentFragment();
        for (let n = 0, i = t.length; n < i; n++) {
            const i = t[n];
            if ("object" == typeof i) for (let t in i) {
                const n = i[t], a = n.append;
                let s;
                delete n.append, o.appendChild(s = r.a.create(t, n)), void 0 !== a && e(a, {
                    fragment: s
                });
            } else o.appendChild(document.createTextNode(i));
        }
        return o;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(35);
    t.a = e => {
        switch (Object(r.a)()) {
          case "101":
            return "video";

          case "ya":
            return "track";

          case "in":
            if (e.el.className.includes("story")) return "story";
            if (e.el.download.includes("mp4")) return "video";

          case "ma":
            if (0 === Object.keys(e).length) return "track";
            if (e.el.download.includes("mp4")) return "video";

          case "vk":
            return 0 === Object.keys(e).length ? "track" : e.el.download.includes("jpg") || e.el.download.includes("png") ? "photo" : "video";

          case "fa":
            return 0 === Object.keys(e).length ? "photo" : "video";

          case "vi":
            return "video";

          case "sc":
          case "ok":
            return "track";

          case "da":
            return "video";

          default:
            return "";
        }
    };
}, function(e, t, n) {
    "use strict";
    t.a = function(e) {
        const t = [];
        for (;e.parentElement && 1 === e.parentElement.nodeType; ) {
            let n = "";
            const r = [].slice.call(e.parentElement.children);
            r.length > 1 && (n = `:nth-child(${r.indexOf(e) + 1})`), t.unshift(`${e.tagName}${n}`), 
            e = e.parentElement;
        }
        return t.join(">");
    };
}, function(e, t, n) {
    "use strict";
    const r = /^[^{]+\{\s*\[native \w/;
    let o = function(e, t) {
        return o = r.test(document.compareDocumentPosition) || r.test(document.contains) ? function(e, t) {
            const n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
            return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
        } : function(e, t) {
            if (t) for (;t = t.parentNode; ) if (t === e) return !0;
            return !1;
        }, o.apply(this, arguments);
    };
    t.a = (e, t) => o(e, t);
}, function(e, t, n) {
    "use strict";
    n.d(t, "a", (function() {
        return s;
    }));
    var r = {
        yt: /^(https?:\/\/)?(www\.)?youtube\.com\/?.*/i,
        fb: /^(https?:\/\/)?(www\.)?facebook\.com\/?.*/i,
        ig: /^(https?:\/\/)?(www\.)?instagram\.com\/?.*/i,
        so: /^(https?:\/\/)?(www\.)?soundcloud\.com\/?.*/i,
        da: /^(https?:\/\/)?(www\.)?dailymotion\.com\/?.*/i,
        vi: /^(https?:\/\/)?(www\.)?vimeo\.com\/?.*/i,
        tw: /^(https?:\/\/)?(www\.)?twitter\.com\/?.*/i,
        tt: /^(https?:\/\/)?(www\.)?tiktok\.com\/?.*/i,
        vk: /^(https?:\/\/)?(www\.)?(vk\.com|vkontakte\.ru)\/?.*/i,
        ok: /^(https?:\/\/)?(www\.)?(odnoklassniki|ok)\.ru\/?.*/i,
        ma: /^(https?:\/\/)?(www\.)?my\.mail\.ru\/?.*/i,
        ya: /^(https?:\/\/)?(www\.)?music\.yandex\.([a-z]{2,3})\/?.*/i
    }, o = {
        yt: {
            homepage: /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/?(?:\?.*)?$/i,
            video: /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=[a-zA-Z0-9-_=&]+$/i,
            short: /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/[a-zA-Z0-9_-]+\/?$/i,
            feed_history: /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/feed\/history\/?/i,
            feed_subscriptions: /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/feed\/subscriptions\/?/i,
            feed_library: /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/feed\/library\/?/i,
            feed_trending: /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/feed\/trending\/?/i,
            watch_later: /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/playlist\?list=WL/i,
            liked_videos: /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/playlist\?list=LL/i,
            channel: /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/channel\/[a-zA-Z0-9_-]+\/?/i,
            gaming: /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/gaming\/?/i
        },
        fb: {
            feed: /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/?(?:\?.*)?$/i,
            watch: /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/watch(\/live)?\/?(?:\?.*)?$/i,
            reel: /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/reel(\/[0-9]+)?\/?(?:\?.*)?$/i,
            video: /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/[A-Za-z0-9_-]+\/videos\/[A-Za-z0-9_-]+\/?(?:\?.*)?$/i,
            profile_video: /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/[A-Za-z0-9_-]+\/videos\/?(?:\?.*)?$/i,
            photo: /^https:\/\/www\.facebook\.com\/[A-Za-z0-9_-]+\/photos\/[A-Za-z0-9_.-]+\/[-\d.]+\/?(\?.*)?$/i,
            profile_photo: /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/[A-Za-z0-9_-]+\/photos\/?(?:\?.*)?$/i,
            profile_feed: /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/[A-Za-z0-9_-]+\/?(?:\?.*)?$/i,
            story: /^(?:https?:\/\/)?(?:www\.)?facebook\.com\/stories\/\d+\/[A-Za-z0-9+/]+={0,2}\/?(?:\?.*)?$/i
        },
        ig: {
            feed: /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/?(?:\?.*)?$/i,
            post: /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/p\/[A-Za-z0-9_-]+\/?(?:\?.*)?$/i,
            profile: /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/[A-Za-z0-9_.]+\/?(?:\?.*)?$/i,
            reel: /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/reel\/[A-Za-z0-9_-]+\/?(?:\?.*)?$/i,
            highlights: /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/stories\/highlights\/[A-Za-z0-9_-]{17}\/?(?:\?.*)?$/i,
            story: /^(?:https?:\/\/)?(?:www\.)?instagram\.com\/stories\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]{19}\/?(?:\?.*)?$/i
        },
        so: {
            audio: /^(?:https?:\/\/)?(?:www\.)?soundcloud\.com\/[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+\/?(?:\?.*)?$/i
        },
        da: {
            video: /^(?:https?:\/\/)?(?:www\.)?dailymotion\.com\/video\/[A-Za-z0-9_]+(?:\?.*)?$/i
        },
        vi: {
            blog_video: /^(?:https?:\/\/)?vimeo\.com\/blog\/post\/[A-Za-z0-9_-]+\/?(?:\?.*)?$/i,
            video: /^(?:https?:\/\/)?vimeo\.com\/\d+\/?(?:\?.*)?$/i,
            profile_feed: /^(?:https?:\/\/)?vimeo\.com\/[A-Za-z0-9_-]+\/?(?:\?.*)?$/i
        },
        tw: {
            feed: /^(?:https?:\/\/)?(?:www\.)?twitter\.com\/home\/?(?:\?.*)?$/i,
            post: /^(?:https?:\/\/)?(?:www\.)?twitter\.com\/[A-Za-z0-9_]+\/status\/\d+\/?(?:\?.*)?$/i,
            photo: /^(?:https?:\/\/)?(?:www\.)?twitter\.com\/[A-Za-z0-9_]+\/status\/\d+\/photo\/\d+\/?(?:\?.*)?$/i
        },
        tt: {
            feed: /^(?:https?:\/\/)?(?:www\.)?tiktok\.com\/?(?:\?.*)?$/i,
            profile: /^(?:https?:\/\/)?(?:www\.)?tiktok\.com\/@[A-Za-z0-9_]+\/?(?:\?.*)?$/i,
            video: /^(?:https?:\/\/)?(?:www\.)?tiktok\.com\/@[A-Za-z0-9_]+\/video\/\d+\/?(?:\?.*)?$/i,
            explore: /^(?:https?:\/\/)?(?:www\.)?tiktok\.com\/explore\/?(?:\?.*)?$/i,
            following: /^(?:https?:\/\/)?(?:www\.)?tiktok\.com\/following\/?(?:\?.*)?$/i
        },
        vk: {
            clips: /^(?:https?:\/\/)?(vk\.com|vkontakte\.ru)\/clips\/?(?![?&]z=).*$/i,
            clip: /^(?:https?:\/\/)?(vk\.com|vkontakte\.ru)\/clips\?z=clip-\d+_\d+%2F[A-Za-z0-9]+(?:\&.*)?$/i,
            videos: /^(?:https?:\/\/)?(vk\.com|vkontakte\.ru)\/video(?!\d)\/?(?![?&]z=).*$/i,
            video: /^(?:https?:\/\/)?(vk\.com|vkontakte\.ru)\/video(\d+_\d+\/?|\/?\?z=video-\d+_\d+%2F[A-Za-z0-9_]+)(?:\&.*)?$/i,
            feed: /^(?:https?:\/\/)?(vk\.com|vkontakte\.ru)\/(al_feed\.php|feed)\/?(?![?&](z|w)=).*$/i,
            photo: /^(?:https?:\/\/)?(vk\.com|vkontakte\.ru)\/(al_feed\.php|feed)\/?\?z=photo-\d+_\d+%2Falbum-\d+_\d+%2F[A-Za-z0-9_]+(?:\&.*)?$/i,
            story: /^(?:https?:\/\/)?(vk\.com|vkontakte\.ru)\/(al_feed\.php|feed)\/?\?w=story-\d+_\d+%2F(feed|discover)(?:\&.*)?$/i,
            audios: /^(?:https?:\/\/)?(vk\.com|vkontakte\.ru)\/audios\d+\/?(?:\?.*)?$/i,
            audio: /^(?:https?:\/\/)?(vk\.com|vkontakte\.ru)\/audio-\d+_\d+\/?(?:\?.*)?$/i,
            albums: /^(?:https?:\/\/)?(vk\.com|vkontakte\.ru)\/albums\d+/i,
            album: /^(?:https?:\/\/)?(vk\.com|vkontakte\.ru)\/album\d+/i
        },
        ok: {
            video: /^(?:https?:\/\/)?(?:www\.)?ok\.ru\/video\/\d+\/?(?:\?.*)?$/i,
            music: /^(?:https?:\/\/)?(?:www\.)?ok\.ru\/music(?:.*)?/i,
            profile: /^(?:https?:\/\/)?(?:www\.)?ok\.ru\/(?!discovery)([a-z]+(?:\/[0-9]+)?)$/i,
            profile_music: /^(?:https?:\/\/)?(?:www\.)?ok\.ru\/.*\/music$/i,
            hobby: /^(?:https?:\/\/)?(?:www\.)?ok\.ru\/hobby\/(?:.*)?$/i,
            discovery: /^(?:https?:\/\/)?(?:www\.)?ok\.ru\/discovery\/?(?:.*)?$/i
        },
        ma: {
            community: /^(?:https?:\/\/)?my\.mail\.ru\/community\/[A-Za-z0-9_-]+\/?(?:\?.*)?$/i,
            community_multipost: /^(?:https?:\/\/)?my\.mail\.ru\/community\/[A-Za-z0-9_-]+\/multipost\/[A-Za-z0-9_-]+\.html\/?(?:\?.*)?$/i,
            community_photo: /^(?:https?:\/\/)?my\.mail\.ru\/community\/[A-Za-z0-9_-]+\/photo\/[A-Za-z0-9_-]+\/\d+\.html\/?(?:\?.*)?$/i,
            community_share: /^(?:https?:\/\/)?my\.mail\.ru\/community\/[A-Za-z0-9_-]+\/share\/?\?shareid=[A-Za-z0-9]+(?:&.*)?$/i,
            music: /^(?:https?:\/\/)?my\.mail\.ru\/music\/?(?:\?.*)?$/i,
            video: /^(?:https?:\/\/)?my\.mail\.ru\/v\/[A-Za-z0-9_-]+\/video\/[A-Za-z0-9_-]+\/\d+\.html\/?(?:\?.*)?$/i,
            playlist: /^(?:https?:\/\/)?my\.mail\.ru\/music\/playlists\/[\x2D0-9A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u{10000}-\u{1000B}\u{1000D}-\u{10026}\u{10028}-\u{1003A}\u{1003C}\u{1003D}\u{1003F}-\u{1004D}\u{10050}-\u{1005D}\u{10080}-\u{100FA}\u{10280}-\u{1029C}\u{102A0}-\u{102D0}\u{10300}-\u{1031F}\u{1032D}-\u{10340}\u{10342}-\u{10349}\u{10350}-\u{10375}\u{10380}-\u{1039D}\u{103A0}-\u{103C3}\u{103C8}-\u{103CF}\u{10400}-\u{1049D}\u{104B0}-\u{104D3}\u{104D8}-\u{104FB}\u{10500}-\u{10527}\u{10530}-\u{10563}\u{10570}-\u{1057A}\u{1057C}-\u{1058A}\u{1058C}-\u{10592}\u{10594}\u{10595}\u{10597}-\u{105A1}\u{105A3}-\u{105B1}\u{105B3}-\u{105B9}\u{105BB}\u{105BC}\u{10600}-\u{10736}\u{10740}-\u{10755}\u{10760}-\u{10767}\u{10780}-\u{10785}\u{10787}-\u{107B0}\u{107B2}-\u{107BA}\u{10800}-\u{10805}\u{10808}\u{1080A}-\u{10835}\u{10837}\u{10838}\u{1083C}\u{1083F}-\u{10855}\u{10860}-\u{10876}\u{10880}-\u{1089E}\u{108E0}-\u{108F2}\u{108F4}\u{108F5}\u{10900}-\u{10915}\u{10920}-\u{10939}\u{10980}-\u{109B7}\u{109BE}\u{109BF}\u{10A00}\u{10A10}-\u{10A13}\u{10A15}-\u{10A17}\u{10A19}-\u{10A35}\u{10A60}-\u{10A7C}\u{10A80}-\u{10A9C}\u{10AC0}-\u{10AC7}\u{10AC9}-\u{10AE4}\u{10B00}-\u{10B35}\u{10B40}-\u{10B55}\u{10B60}-\u{10B72}\u{10B80}-\u{10B91}\u{10C00}-\u{10C48}\u{10C80}-\u{10CB2}\u{10CC0}-\u{10CF2}\u{10D00}-\u{10D23}\u{10E80}-\u{10EA9}\u{10EB0}\u{10EB1}\u{10F00}-\u{10F1C}\u{10F27}\u{10F30}-\u{10F45}\u{10F70}-\u{10F81}\u{10FB0}-\u{10FC4}\u{10FE0}-\u{10FF6}\u{11003}-\u{11037}\u{11071}\u{11072}\u{11075}\u{11083}-\u{110AF}\u{110D0}-\u{110E8}\u{11103}-\u{11126}\u{11144}\u{11147}\u{11150}-\u{11172}\u{11176}\u{11183}-\u{111B2}\u{111C1}-\u{111C4}\u{111DA}\u{111DC}\u{11200}-\u{11211}\u{11213}-\u{1122B}\u{1123F}\u{11240}\u{11280}-\u{11286}\u{11288}\u{1128A}-\u{1128D}\u{1128F}-\u{1129D}\u{1129F}-\u{112A8}\u{112B0}-\u{112DE}\u{11305}-\u{1130C}\u{1130F}\u{11310}\u{11313}-\u{11328}\u{1132A}-\u{11330}\u{11332}\u{11333}\u{11335}-\u{11339}\u{1133D}\u{11350}\u{1135D}-\u{11361}\u{11400}-\u{11434}\u{11447}-\u{1144A}\u{1145F}-\u{11461}\u{11480}-\u{114AF}\u{114C4}\u{114C5}\u{114C7}\u{11580}-\u{115AE}\u{115D8}-\u{115DB}\u{11600}-\u{1162F}\u{11644}\u{11680}-\u{116AA}\u{116B8}\u{11700}-\u{1171A}\u{11740}-\u{11746}\u{11800}-\u{1182B}\u{118A0}-\u{118DF}\u{118FF}-\u{11906}\u{11909}\u{1190C}-\u{11913}\u{11915}\u{11916}\u{11918}-\u{1192F}\u{1193F}\u{11941}\u{119A0}-\u{119A7}\u{119AA}-\u{119D0}\u{119E1}\u{119E3}\u{11A00}\u{11A0B}-\u{11A32}\u{11A3A}\u{11A50}\u{11A5C}-\u{11A89}\u{11A9D}\u{11AB0}-\u{11AF8}\u{11C00}-\u{11C08}\u{11C0A}-\u{11C2E}\u{11C40}\u{11C72}-\u{11C8F}\u{11D00}-\u{11D06}\u{11D08}\u{11D09}\u{11D0B}-\u{11D30}\u{11D46}\u{11D60}-\u{11D65}\u{11D67}\u{11D68}\u{11D6A}-\u{11D89}\u{11D98}\u{11EE0}-\u{11EF2}\u{11F02}\u{11F04}-\u{11F10}\u{11F12}-\u{11F33}\u{11FB0}\u{12000}-\u{12399}\u{12480}-\u{12543}\u{12F90}-\u{12FF0}\u{13000}-\u{1342F}\u{13441}-\u{13446}\u{14400}-\u{14646}\u{16800}-\u{16A38}\u{16A40}-\u{16A5E}\u{16A70}-\u{16ABE}\u{16AD0}-\u{16AED}\u{16B00}-\u{16B2F}\u{16B40}-\u{16B43}\u{16B63}-\u{16B77}\u{16B7D}-\u{16B8F}\u{16E40}-\u{16E7F}\u{16F00}-\u{16F4A}\u{16F50}\u{16F93}-\u{16F9F}\u{16FE0}\u{16FE1}\u{16FE3}\u{17000}-\u{187F7}\u{18800}-\u{18CD5}\u{18D00}-\u{18D08}\u{1AFF0}-\u{1AFF3}\u{1AFF5}-\u{1AFFB}\u{1AFFD}\u{1AFFE}\u{1B000}-\u{1B122}\u{1B132}\u{1B150}-\u{1B152}\u{1B155}\u{1B164}-\u{1B167}\u{1B170}-\u{1B2FB}\u{1BC00}-\u{1BC6A}\u{1BC70}-\u{1BC7C}\u{1BC80}-\u{1BC88}\u{1BC90}-\u{1BC99}\u{1D400}-\u{1D454}\u{1D456}-\u{1D49C}\u{1D49E}\u{1D49F}\u{1D4A2}\u{1D4A5}\u{1D4A6}\u{1D4A9}-\u{1D4AC}\u{1D4AE}-\u{1D4B9}\u{1D4BB}\u{1D4BD}-\u{1D4C3}\u{1D4C5}-\u{1D505}\u{1D507}-\u{1D50A}\u{1D50D}-\u{1D514}\u{1D516}-\u{1D51C}\u{1D51E}-\u{1D539}\u{1D53B}-\u{1D53E}\u{1D540}-\u{1D544}\u{1D546}\u{1D54A}-\u{1D550}\u{1D552}-\u{1D6A5}\u{1D6A8}-\u{1D6C0}\u{1D6C2}-\u{1D6DA}\u{1D6DC}-\u{1D6FA}\u{1D6FC}-\u{1D714}\u{1D716}-\u{1D734}\u{1D736}-\u{1D74E}\u{1D750}-\u{1D76E}\u{1D770}-\u{1D788}\u{1D78A}-\u{1D7A8}\u{1D7AA}-\u{1D7C2}\u{1D7C4}-\u{1D7CB}\u{1DF00}-\u{1DF1E}\u{1DF25}-\u{1DF2A}\u{1E030}-\u{1E06D}\u{1E100}-\u{1E12C}\u{1E137}-\u{1E13D}\u{1E14E}\u{1E290}-\u{1E2AD}\u{1E2C0}-\u{1E2EB}\u{1E4D0}-\u{1E4EB}\u{1E7E0}-\u{1E7E6}\u{1E7E8}-\u{1E7EB}\u{1E7ED}\u{1E7EE}\u{1E7F0}-\u{1E7FE}\u{1E800}-\u{1E8C4}\u{1E900}-\u{1E943}\u{1E94B}\u{1EE00}-\u{1EE03}\u{1EE05}-\u{1EE1F}\u{1EE21}\u{1EE22}\u{1EE24}\u{1EE27}\u{1EE29}-\u{1EE32}\u{1EE34}-\u{1EE37}\u{1EE39}\u{1EE3B}\u{1EE42}\u{1EE47}\u{1EE49}\u{1EE4B}\u{1EE4D}-\u{1EE4F}\u{1EE51}\u{1EE52}\u{1EE54}\u{1EE57}\u{1EE59}\u{1EE5B}\u{1EE5D}\u{1EE5F}\u{1EE61}\u{1EE62}\u{1EE64}\u{1EE67}-\u{1EE6A}\u{1EE6C}-\u{1EE72}\u{1EE74}-\u{1EE77}\u{1EE79}-\u{1EE7C}\u{1EE7E}\u{1EE80}-\u{1EE89}\u{1EE8B}-\u{1EE9B}\u{1EEA1}-\u{1EEA3}\u{1EEA5}-\u{1EEA9}\u{1EEAB}-\u{1EEBB}\u{20000}-\u{2A6DF}\u{2A700}-\u{2B739}\u{2B740}-\u{2B81D}\u{2B820}-\u{2CEA1}\u{2CEB0}-\u{2EBE0}\u{2EBF0}-\u{2EE5D}\u{2F800}-\u{2FA1D}\u{30000}-\u{3134A}\u{31350}-\u{323AF}]+(?:\x2D\d+)?\/?(?:\?.*)?$/iu
        },
        ya: {
            artist: /^(?:https?:\/\/)?music\.yandex\.([a-z]{2,3})\/artist\/[A-Za-z0-9_-]+\/?(?:\?.*)?$/i,
            album: /^(?:https?:\/\/)?music\.yandex\.([a-z]{2,3})\/album\/[A-Za-z0-9_-]+\/?(?:\?.*)?$/i,
            track: /^(?:https?:\/\/)?music\.yandex\.([a-z]{2,3})\/album\/[A-Za-z0-9_-]+\/track\/\d+\/?(?:\?.*)?$/i,
            playlist: /^(?:https?:\/\/)?music\.yandex\.([a-z]{2,3})\/users\/[A-Za-z0-9_-]+\/playlists\/\d+\/?(?:\?.*)?$/i
        }
    }, i = {
        ig: {
            "ig-post-carousel_from_profile": "article ._aamj",
            "ig-post-carousel": 'div[role="button"] ._aamj',
            "ig-post-video_from_profile": "article video",
            "ig-post-video": 'div[role="button"] video',
            "ig-post-photo_from_profile": "article img",
            "ig-post-photo": 'div[role="button"] img',
            "ig-reel-from_profile": "article video",
            "ig-story-video": "._ac0a video",
            "ig-story-photo": "._ac0a img"
        },
        ok: {
            profile: ".profile-user-info"
        }
    }, a = n(4);
    class s {
        static getPageType(e, t) {
            try {
                if (!e) throw new Error("url is required");
                return this.getServiceType(e, t);
            } catch (e) {
                return console.error(e), "unknown-page";
            }
        }
        static getServiceType(e, t) {
            const n = r;
            switch (!0) {
              case n.yt.test(e):
                return this.getYtServiceTypeDetails(e);

              case n.fb.test(e):
                return this.getFbServiceTypeDetails(e);

              case n.ig.test(e):
                return this.getIgServiceTypeDetails(e, t);

              case n.so.test(e):
                return this.getSoServiceTypeDetails(e);

              case n.da.test(e):
                return this.getDaServiceTypeDetails(e);

              case n.vi.test(e):
                return this.getViServiceTypeDetails(e);

              case n.tw.test(e):
                return this.getTwServiceTypeDetails(e);

              case n.tt.test(e):
                return this.getTtServiceTypeDetails(e);

              case n.vk.test(e):
                return this.getVkServiceTypeDetails(e);

              case n.ok.test(e):
                return this.getOkServiceTypeDetails(e, t);

              case n.ma.test(e):
                return this.getMaServiceTypeDetails(e);

              case n.ya.test(e):
                return this.getYaServiceTypeDetails(e);

              default:
                throw new Error("Unknown service type");
            }
        }
        static getYtServiceTypeDetails(e) {
            const t = o.yt;
            switch (!0) {
              case t.homepage.test(e):
                return a.l.ytHomepage;

              case t.video.test(e):
                return a.l.ytVideo;

              case t.short.test(e):
                return a.l.ytShort;

              case t.feed_history.test(e):
                return a.l.ytFeedHistory;

              case t.feed_library.test(e):
                return a.l.ytFeedLibrary;

              case t.feed_subscriptions.test(e):
                return a.l.ytFeedSubscriptions;

              case t.feed_trending.test(e):
                return a.l.ytFeedTrending;

              case t.watch_later.test(e):
                return a.l.ytWatchLater;

              case t.liked_videos.test(e):
                return a.l.ytLikedVideos;

              case t.channel.test(e):
                return a.l.ytChannel;

              case t.gaming.test(e):
                return a.l.ytGaming;

              default:
                throw new Error("Unknown yt page");
            }
        }
        static getFbServiceTypeDetails(e) {
            const t = o.fb;
            switch (!0) {
              case t.feed.test(e):
                return a.b.fbFeed;

              case t.watch.test(e):
                return a.b.fbWatch;

              case t.reel.test(e):
                return a.b.fbReel;

              case t.video.test(e):
                return a.b.fbVideo;

              case t.profile_video.test(e):
                return a.b.fbProfileVideo;

              case t.photo.test(e):
                return a.b.fbPhoto;

              case t.profile_photo.test(e):
                return a.b.fbProfilePhoto;

              case t.profile_feed.test(e):
                return a.b.fbProfileFeed;

              case t.story.test(e):
                return a.b.fbStory;

              default:
                throw new Error("Unknown fb page");
            }
        }
        static getIgServiceTypeDetails(e, t) {
            const n = o.ig, r = i.ig;
            switch (!0) {
              case n.feed.test(e):
                return a.c.igFeed;

              case n.post.test(e):
                if (!t) return a.c.igPost;
                if (t.querySelector(r["ig-post-carousel_from_profile"])) return a.c.igCarouselFromProfile;
                if (t.querySelector(r["ig-post-carousel"])) return a.c.igPostCarousel;
                if (t.querySelector(r["ig-post-video_from_profile"])) return a.c.igPostVideoFromProfile;
                if (t.querySelector(r["ig-post-video"])) return a.c.igPostVideo;
                if (t.querySelector(r["ig-post-photo_from_profile"])) return a.c.igPostPhotoFromProfile;
                if (t.querySelector(r["ig-post-photo"])) return a.c.igPostPhoto;
                throw new Error("Unknown ig post page");

              case n.profile.test(e):
                return a.c.igProfile;

              case n.reel.test(e):
                return t && t.querySelector(r["ig-reel-from_profile"]) ? a.c.igReelFromProfile : a.c.igReel;

              case n.highlights.test(e):
                return a.c.igHighlights;

              case n.story.test(e):
                if (!t) return a.c.igStory;
                if (t.querySelector(r["ig-story-video"])) return a.c.igStoryVideo;
                if (t.querySelector(r["ig-story-photo"])) return a.c.igStoryPhoto;
                throw new Error("Unknown ig story page");

              default:
                throw new Error("Unknown ig page");
            }
        }
        static getSoServiceTypeDetails(e) {
            switch (!0) {
              case o.so.audio.test(e):
                return a.f.soAudio;

              default:
                throw new Error("Unknown so page");
            }
        }
        static getDaServiceTypeDetails(e) {
            switch (!0) {
              case o.da.video.test(e):
                return a.a.daVideo;

              default:
                throw new Error("Unknown da page");
            }
        }
        static getViServiceTypeDetails(e) {
            const t = o.vi;
            switch (!0) {
              case t.blog_video.test(e):
                return a.i.viBlogVideo;

              case t.video.test(e):
                return a.i.viVideo;

              case t.profile_feed.test(e):
                return a.i.viProfileFeed;

              default:
                throw new Error("Unknown vi page");
            }
        }
        static getTwServiceTypeDetails(e) {
            const t = o.tw;
            switch (!0) {
              case t.feed.test(e):
                return a.h.twFeed;

              case t.post.test(e):
                return a.h.twPost;

              case t.photo.test(e):
                return a.h.twPhoto;

              default:
                throw new Error("Unknown tw page");
            }
        }
        static getTtServiceTypeDetails(e) {
            const t = o.tt;
            switch (!0) {
              case t.feed.test(e):
                return a.g.ttFeed;

              case t.profile.test(e):
                return a.g.ttProfile;

              case t.video.test(e):
                return a.g.ttVideo;

              case t.explore.test(e):
                return a.g.ttExplore;

              case t.following.test(e):
                return a.g.ttFollowing;

              default:
                throw new Error("Unknown tt page");
            }
        }
        static getVkServiceTypeDetails(e) {
            const t = o.vk;
            switch (!0) {
              case t.clips.test(e):
                return a.j.vkClips;

              case t.clip.test(e):
                return a.j.vkClip;

              case t.videos.test(e):
                return a.j.vkVideos;

              case t.video.test(e):
                return a.j.vkVideo;

              case t.feed.test(e):
                return a.j.vkFeed;

              case t.photo.test(e):
                return a.j.vkPhoto;

              case t.story.test(e):
                return a.j.vkStory;

              case t.audios.test(e):
                return a.j.vkAudios;

              case t.audio.test(e):
                return a.j.vkAudio;

              case t.albums.test(e):
                return a.j.vkAlbums;

              case t.album.test(e):
                return a.j.vkAlbum;

              default:
                throw new Error("Unknown vk page");
            }
        }
        static getOkServiceTypeDetails(e, t) {
            const n = o.ok, r = i.ok;
            switch (!0) {
              case n.video.test(e):
                return a.e.okVideo;

              case n.music.test(e):
                return a.e.okMusic;

              case n.profile.test(e):
                if (!t) return a.e.okProfile;
                if (t.querySelector(r.profile)) return a.e.okProfile;
                throw new Error("Unknown ok page");

              case n.profile_music.test(e):
                return a.e.okProfileMusic;

              case n.hobby.test(e):
                return a.e.okHobby;

              case n.discovery.test(e):
                return a.e.okDiscovery;

              default:
                throw new Error("Unknown ok page");
            }
        }
        static getMaServiceTypeDetails(e) {
            const t = o.ma;
            switch (!0) {
              case t.community.test(e):
                return a.d.maCommunity;

              case t.community_multipost.test(e):
                return a.d.maCommunityMultipost;

              case t.community_photo.test(e):
                return a.d.maCommunityPhoto;

              case t.community_share.test(e):
                return a.d.maCommunityShare;

              case t.music.test(e):
                return a.d.maMusic;

              case t.video.test(e):
                return a.d.maVideo;

              case t.playlist.test(e):
                return a.d.maPlaylist;

              default:
                throw new Error("Unknown ma page");
            }
        }
        static getYaServiceTypeDetails(e) {
            const t = o.ya;
            switch (!0) {
              case t.artist.test(e):
                return a.k.yaArtist;

              case t.album.test(e):
                return a.k.yaAlbum;

              case t.track.test(e):
                return a.k.yaTrack;

              case t.playlist.test(e):
                return a.k.yaPlaylist;

              default:
                throw new Error("Unknown ya page");
            }
        }
    }
}, function(e, t, n) {
    var r = n(63).default;
    e.exports = r;
}, function(e, t, n) {
    "use strict";
    const r = /\\(\\u[0-9a-f]{4})/g;
    t.a = function(e) {
        try {
            return JSON.parse(JSON.stringify(e).replace(r, "$1"));
        } catch (t) {
            return e;
        }
    };
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        t && !Array.isArray(t) && (t = [ t ]);
        const n = [];
        return e.replace(/<script(?:\s*|\s[^>]+[^\/])>/g, (function(r, o) {
            o += r.length;
            const i = e.indexOf("<\/script>", o);
            if (-1 !== i) {
                const r = e.substr(o, i - o);
                t ? t.every((function(e) {
                    return e.test(r);
                })) && n.push(r) : n.push(r);
            }
        })), n;
    };
}, function(e, t, n) {
    "use strict";
    t.a = function(e, t) {
        const n = (new DOMParser).parseFromString("<html><body>" + e + "</body></html>", "text/html");
        if (t) {
            let e = n.head.querySelector("base");
            e || (e = n.createElement("base"), e.href = t, n.head.appendChild(e));
        }
        return n;
    };
}, function(e, t, n) {
    "use strict";
    var r = n(19), o = n(0), i = n(41), a = n(7);
    const s = n(77), l = n(58), u = Object(a.a)("mediaMuxer:transport"), c = () => {}, d = new WeakMap;
    var p = class {
        constructor(e, t) {
            var n = this;
            this.listener = (e, t, n) => {
                switch (e.action) {
                  case "callFn":
                    return this.responseFn(e, n), !0;
                }
            }, this.callFn = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                const r = n;
                return r.waitPromise({
                    action: "callFn",
                    fn: e,
                    args: t
                });
            }, this.scope = t, this.pageId = parseInt(1e3 * Math.random(), 10), this.callbackId = 0, 
            this.callbackIdCallback = {}, this.listeners = [], this.transport = e, this.onMessage(this.listener);
        }
        onMessage(e) {
            const t = this.listeners, n = this.callbackIdCallback;
            !t.length && this.transport.onMessage((e, r) => {
                if (r.responseId) {
                    const e = n[r.responseId];
                    return void (e ? e(r.message) : u.error("Callback is not found", r));
                }
                let o;
                o = r.callbackId ? function(e) {
                    let t = !1;
                    return function() {
                        t || (t = !0, e.apply(null, arguments));
                    };
                }(e => {
                    this.transport.sendMessage({
                        responseId: r.callbackId,
                        message: e
                    });
                }) : c;
                let i = null;
                t.forEach(t => {
                    try {
                        const n = t(r.message, {
                            event: e
                        }, o);
                        !0 === n && (i = n);
                    } catch (e) {
                        u.error("Call listener error", e);
                    }
                }), !0 !== i && o();
            }), t.push(e);
        }
        sendMessage(e, t) {
            const n = this.callbackIdCallback, r = {
                message: e
            };
            if (t) {
                r.callbackId = this.pageId + ++this.callbackId;
                const e = e => {
                    delete n[r.callbackId], t(e);
                };
                d.has(t) && (d.delete(t), d.set(e, !0)), n[r.callbackId] = e;
            }
            try {
                this.transport.sendMessage(r);
            } catch (e) {
                throw delete n[r.callbackId], e;
            }
        }
        waitPromise(e) {
            return new Promise((t, n) => {
                const r = e => e.err ? n(l(e.err)) : t(e.result);
                d.set(r, !0), this.sendMessage(e, r);
            });
        }
        responsePromise(e, t) {
            return e.then(e => {
                t({
                    result: e
                });
            }, e => {
                t({
                    err: s(e)
                });
            }).catch((function(e) {
                console.error("responsePromise error", e);
            })), !0;
        }
        resolvePath(e) {
            const t = e.split("."), n = t.pop();
            let r = this.scope;
            for (;t.length; ) r = r[t.shift()];
            return {
                scope: r,
                endPoint: n
            };
        }
        responseFn(e, t) {
            const n = Object(i.a)(() => {
                const {scope: t, endPoint: n} = this.resolvePath(e.fn);
                return t[n].apply(t, e.args);
            });
            return this.responsePromise(n, t);
        }
    }, f = n(50), h = n(39), g = n(34);
    const A = new Map;
    let m = 0;
    const v = e => {
        A.delete(e);
    };
    function y(e) {
        const t = A.get(e);
        if (!t) throw new h.a("Instance is not found", "INSTANCE_IS_NOT_FOUND");
        return t;
    }
    function b(e, t) {
        const n = t.split("."), r = n.pop();
        let o = e;
        for (;n.length; ) o = o[n.shift()];
        return {
            scope: o,
            endPoint: r
        };
    }
    var w = function(e) {
        return e() || (() => {});
    };
    var C = function(e, t) {
        const n = e.indexOf(t);
        -1 !== n && e.splice(n, 1);
    };
    var x = function(e) {
        e = e ? e + "_" : "";
        const t = Date.now();
        return e + Math.floor(1e12 * (t - Math.floor(t))).toString(36) + Math.floor(1e12 * Math.random()).toString(36);
    };
    function k(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            }))), n.push.apply(n, r);
        }
        return n;
    }
    function I(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? k(Object(n), !0).forEach((function(t) {
                Object(r.a)(e, t, n[t]);
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : k(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            }));
        }
        return e;
    }
    t.a = class {
        constructor(e) {
            this.frameListener = e => {
                if (this.frame && e.source === this.frame.contentWindow) {
                    const t = e.data;
                    t && this.onMessage(e, t);
                }
            }, this.frameCtr = e, this.frame = null, this.isLoaded = !1, this.destroyed = !1, 
            this.messageStack = [], this.onDestroy = [], this.requestPrefix = x(), this.initTransport(), 
            this.onDestroy.push(w(() => {
                const e = () => o.a.callFn("clearRequestByPrefix", [ this.requestPrefix ]);
                return window.addEventListener("unload", e), () => {
                    window.removeEventListener("unload", e);
                };
            }));
        }
        onProgress(e, t) {}
        onProgressStatus(e) {}
        onStatus(e, t) {}
        download() {
            return this.transport.callFn("download");
        }
        getBuiltBlob() {
            return this.transport.callFn("getBuiltBlob");
        }
        join(e, t, n) {
            return this.transport.callFn("join", [ {
                sources: e,
                filename: t,
                format: n
            } ]);
        }
        hls(e, t, n) {
            return this.transport.callFn("hls", [ {
                sources: e,
                filename: t,
                format: n
            } ]);
        }
        hlsToMp3(e, t) {
            return this.transport.callFn("hlsToMp3", [ {
                sources: e,
                filename: t
            } ]);
        }
        initTransport() {
            const e = this;
            this.transport = new p({
                onMessage(t) {
                    e.onMessage = t;
                },
                sendMessage(t) {
                    e.postMessage(t);
                }
            }, this.getScope()), this.transport.onMessage((e, t, n) => {
                switch (e.action) {
                  case "progress":
                    this.onProgress(e.progress, e.type);
                    break;

                  case "progressStatus":
                    this.onProgressStatus(e.status);
                    break;

                  case "status":
                    this.onStatus(e.status, e.code);
                }
            });
        }
        getScope() {
            return {
                createFetchInstance: e => {
                    let {url: t, options: n} = e;
                    const r = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        m > 1e5 && (m = 0);
                        let n, r = 0;
                        for (;0 === r || A.has(r); ) r = ++m;
                        const o = new Promise(e => {
                            n = e;
                        });
                        return A.set(r, {
                            initFn: e,
                            onInit: n,
                            whenInit: o
                        }), {
                            id: r,
                            methods: t
                        };
                    }(() => {
                        o();
                        const e = Object(f.a)(t, I(I({}, n), {}, {
                            requestPrefix: this.requestPrefix
                        }));
                        return e.then(...Object(g.a)(w(() => {
                            function t() {
                                e.abort();
                            }
                            return this.onDestroy.push(t), () => C(this.onDestroy, t);
                        }))), e;
                    }, [ "abort" ]), o = w(() => {
                        function e() {
                            v(r.id);
                        }
                        return this.onDestroy.push(e), () => C(this.onDestroy, e);
                    });
                    return r;
                },
                instanceInit(e) {
                    let {id: t} = e;
                    return (e => {
                        const t = y(e);
                        let n = null;
                        try {
                            t.init = t.initFn(), t.onInit();
                        } catch (e) {
                            n = e, t.onInit(Promise.reject(new h.a("call initFn error", "CALL_INIT_FN_ERROR")));
                        }
                        if (t.initFn = t.onInit = void 0, Object(i.a)(() => t.init).then(...Object(g.a)(() => {
                            v(e);
                        })), n) throw n;
                        return t.init;
                    })(t);
                },
                instanceCallFn(e) {
                    let {id: t, path: n, args: r} = e;
                    return function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        const r = y(e);
                        return r.whenInit.then(() => {
                            const {scope: e, endPoint: o} = b(r.init, t);
                            return e[o].apply(e, n);
                        });
                    }(t, n, r);
                }
            };
        }
        onMessage() {
            throw new Error("onMessage is not set");
        }
        init() {
            return new Promise((e, t) => {
                this.destroyFrame(), window.addEventListener("message", this.frameListener);
                const n = this.frame = document.createElement("iframe");
                n.src = "https://sf-helper.com/static/joiner2/frame2.html", n.style.position = "absolute", 
                n.style.height = "0px", n.style.width = "0px", n.style.top = "-9999px", n.style.left = "-9999px", 
                n.onload = () => {
                    n.onload = n.onerror = null, this.isLoaded = !0;
                    const r = setTimeout(() => {
                        t(new Error("Load frame timeout"));
                    }, 3e4);
                    try {
                        this.transport.sendMessage({
                            action: "ping"
                        }, () => {
                            clearTimeout(r), e();
                        });
                    } catch (e) {
                        t(e);
                    }
                }, n.onerror = () => {
                    n.onload = n.onerror = null, t(new Error("Load frame error"));
                }, this.frameCtr.appendChild(n);
            }).then(() => {
                for (;this.messageStack.length; ) this.postMessage(this.messageStack.shift());
            });
        }
        postMessage(e) {
            if (!this.destroyed) if (this.isLoaded) {
                if (!this.frame.contentWindow) throw new Error("Window is closed");
                this.frame.contentWindow.postMessage(e, "*");
            } else this.messageStack.push(e);
        }
        destroyFrame() {
            window.removeEventListener("message", this.frameListener), this.frame && this.frame.parentNode && this.frame.parentNode.removeChild(this.frame);
        }
        destroy() {
            this.destroyed = !0, this.destroyFrame(), this.onDestroy.splice(0).forEach(e => e());
        }
    };
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e;
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e;
    };
    function o(e) {
        return e && "object" === (void 0 === e ? "undefined" : r(e)) && "string" == typeof e.name && "string" == typeof e.message;
    }
    t.default = function(e) {
        return o(e) ? Object.assign(new Error, {
            stack: void 0
        }, e) : e;
    }, t.isSerializedError = o;
}, function(e, t, n) {
    var r;
    e.exports = (r = n(87), function(e) {
        var t = r, n = t.lib, o = n.WordArray, i = n.Hasher, a = t.algo, s = [];
        !function() {
            for (var t = 0; t < 64; t++) s[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;
        }();
        var l = a.MD5 = i.extend({
            _doReset: function() {
                this._hash = new o.init([ 1732584193, 4023233417, 2562383102, 271733878 ]);
            },
            _doProcessBlock: function(e, t) {
                for (var n = 0; n < 16; n++) {
                    var r = t + n, o = e[r];
                    e[r] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);
                }
                var i = this._hash.words, a = e[t + 0], l = e[t + 1], f = e[t + 2], h = e[t + 3], g = e[t + 4], A = e[t + 5], m = e[t + 6], v = e[t + 7], y = e[t + 8], b = e[t + 9], w = e[t + 10], C = e[t + 11], x = e[t + 12], k = e[t + 13], I = e[t + 14], _ = e[t + 15], E = i[0], D = i[1], S = i[2], M = i[3];
                E = u(E, D, S, M, a, 7, s[0]), M = u(M, E, D, S, l, 12, s[1]), S = u(S, M, E, D, f, 17, s[2]), 
                D = u(D, S, M, E, h, 22, s[3]), E = u(E, D, S, M, g, 7, s[4]), M = u(M, E, D, S, A, 12, s[5]), 
                S = u(S, M, E, D, m, 17, s[6]), D = u(D, S, M, E, v, 22, s[7]), E = u(E, D, S, M, y, 7, s[8]), 
                M = u(M, E, D, S, b, 12, s[9]), S = u(S, M, E, D, w, 17, s[10]), D = u(D, S, M, E, C, 22, s[11]), 
                E = u(E, D, S, M, x, 7, s[12]), M = u(M, E, D, S, k, 12, s[13]), S = u(S, M, E, D, I, 17, s[14]), 
                E = c(E, D = u(D, S, M, E, _, 22, s[15]), S, M, l, 5, s[16]), M = c(M, E, D, S, m, 9, s[17]), 
                S = c(S, M, E, D, C, 14, s[18]), D = c(D, S, M, E, a, 20, s[19]), E = c(E, D, S, M, A, 5, s[20]), 
                M = c(M, E, D, S, w, 9, s[21]), S = c(S, M, E, D, _, 14, s[22]), D = c(D, S, M, E, g, 20, s[23]), 
                E = c(E, D, S, M, b, 5, s[24]), M = c(M, E, D, S, I, 9, s[25]), S = c(S, M, E, D, h, 14, s[26]), 
                D = c(D, S, M, E, y, 20, s[27]), E = c(E, D, S, M, k, 5, s[28]), M = c(M, E, D, S, f, 9, s[29]), 
                S = c(S, M, E, D, v, 14, s[30]), E = d(E, D = c(D, S, M, E, x, 20, s[31]), S, M, A, 4, s[32]), 
                M = d(M, E, D, S, y, 11, s[33]), S = d(S, M, E, D, C, 16, s[34]), D = d(D, S, M, E, I, 23, s[35]), 
                E = d(E, D, S, M, l, 4, s[36]), M = d(M, E, D, S, g, 11, s[37]), S = d(S, M, E, D, v, 16, s[38]), 
                D = d(D, S, M, E, w, 23, s[39]), E = d(E, D, S, M, k, 4, s[40]), M = d(M, E, D, S, a, 11, s[41]), 
                S = d(S, M, E, D, h, 16, s[42]), D = d(D, S, M, E, m, 23, s[43]), E = d(E, D, S, M, b, 4, s[44]), 
                M = d(M, E, D, S, x, 11, s[45]), S = d(S, M, E, D, _, 16, s[46]), E = p(E, D = d(D, S, M, E, f, 23, s[47]), S, M, a, 6, s[48]), 
                M = p(M, E, D, S, v, 10, s[49]), S = p(S, M, E, D, I, 15, s[50]), D = p(D, S, M, E, A, 21, s[51]), 
                E = p(E, D, S, M, x, 6, s[52]), M = p(M, E, D, S, h, 10, s[53]), S = p(S, M, E, D, w, 15, s[54]), 
                D = p(D, S, M, E, l, 21, s[55]), E = p(E, D, S, M, y, 6, s[56]), M = p(M, E, D, S, _, 10, s[57]), 
                S = p(S, M, E, D, m, 15, s[58]), D = p(D, S, M, E, k, 21, s[59]), E = p(E, D, S, M, g, 6, s[60]), 
                M = p(M, E, D, S, C, 10, s[61]), S = p(S, M, E, D, f, 15, s[62]), D = p(D, S, M, E, b, 21, s[63]), 
                i[0] = i[0] + E | 0, i[1] = i[1] + D | 0, i[2] = i[2] + S | 0, i[3] = i[3] + M | 0;
            },
            _doFinalize: function() {
                var t = this._data, n = t.words, r = 8 * this._nDataBytes, o = 8 * t.sigBytes;
                n[o >>> 5] |= 128 << 24 - o % 32;
                var i = e.floor(r / 4294967296), a = r;
                n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), 
                n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (a << 8 | a >>> 24) | 4278255360 & (a << 24 | a >>> 8), 
                t.sigBytes = 4 * (n.length + 1), this._process();
                for (var s = this._hash, l = s.words, u = 0; u < 4; u++) {
                    var c = l[u];
                    l[u] = 16711935 & (c << 8 | c >>> 24) | 4278255360 & (c << 24 | c >>> 8);
                }
                return s;
            },
            clone: function() {
                var e = i.clone.call(this);
                return e._hash = this._hash.clone(), e;
            }
        });
        function u(e, t, n, r, o, i, a) {
            var s = e + (t & n | ~t & r) + o + a;
            return (s << i | s >>> 32 - i) + t;
        }
        function c(e, t, n, r, o, i, a) {
            var s = e + (t & r | n & ~r) + o + a;
            return (s << i | s >>> 32 - i) + t;
        }
        function d(e, t, n, r, o, i, a) {
            var s = e + (t ^ n ^ r) + o + a;
            return (s << i | s >>> 32 - i) + t;
        }
        function p(e, t, n, r, o, i, a) {
            var s = e + (n ^ (t | ~r)) + o + a;
            return (s << i | s >>> 32 - i) + t;
        }
        t.MD5 = i._createHelper(l), t.HmacMD5 = i._createHmacHelper(l);
    }(Math), r.MD5);
}, , function(e, t, n) {
    var r = n(40), o = n(78);
    "string" == typeof (o = o.__esModule ? o.default : o) && (o = [ [ e.i, o, "" ] ]);
    var i, a = 0, s = {
        injectType: "lazyStyleTag",
        insert: "head",
        singleton: !1
    }, l = {};
    l.locals = o.locals || {}, l.use = function() {
        return a++ || (i = r(o, s)), l;
    }, l.unuse = function() {
        a > 0 && !--a && (i(), i = null);
    }, e.exports = l;
}, function(e, t, n) {
    var r = n(40), o = n(79);
    "string" == typeof (o = o.__esModule ? o.default : o) && (o = [ [ e.i, o, "" ] ]);
    var i, a = 0, s = {
        injectType: "lazyStyleTag",
        insert: "head",
        singleton: !1
    }, l = {};
    l.locals = o.locals || {}, l.use = function() {
        return a++ || (i = r(o, s)), l;
    }, l.unuse = function() {
        a > 0 && !--a && (i(), i = null);
    }, e.exports = l;
}, function(e, t, n) {
    var r = n(40), o = n(80);
    "string" == typeof (o = o.__esModule ? o.default : o) && (o = [ [ e.i, o, "" ] ]);
    var i, a = 0, s = {
        injectType: "lazyStyleTag",
        insert: "head",
        singleton: !1
    }, l = {};
    l.locals = o.locals || {}, l.use = function() {
        return a++ || (i = r(o, s)), l;
    }, l.unuse = function() {
        a > 0 && !--a && (i(), i = null);
    }, e.exports = l;
}, function(e, t, n) {
    var r = n(40), o = n(81);
    "string" == typeof (o = o.__esModule ? o.default : o) && (o = [ [ e.i, o, "" ] ]);
    var i, a = 0, s = {
        injectType: "lazyStyleTag",
        insert: "head",
        singleton: !1
    }, l = {};
    l.locals = o.locals || {}, l.use = function() {
        return a++ || (i = r(o, s)), l;
    }, l.unuse = function() {
        a > 0 && !--a && (i(), i = null);
    }, e.exports = l;
}, function(e, t, n) {
    var r = n(40), o = n(82);
    "string" == typeof (o = o.__esModule ? o.default : o) && (o = [ [ e.i, o, "" ] ]);
    var i, a = 0, s = {
        injectType: "lazyStyleTag",
        insert: "head",
        singleton: !1
    }, l = {};
    l.locals = o.locals || {}, l.use = function() {
        return a++ || (i = r(o, s)), l;
    }, l.unuse = function() {
        a > 0 && !--a && (i(), i = null);
    }, e.exports = l;
}, function(e, t, n) {
    var r = n(40), o = n(83);
    "string" == typeof (o = o.__esModule ? o.default : o) && (o = [ [ e.i, o, "" ] ]);
    var i, a = 0, s = {
        injectType: "lazyStyleTag",
        insert: "head",
        singleton: !1
    }, l = {};
    l.locals = o.locals || {}, l.use = function() {
        return a++ || (i = r(o, s)), l;
    }, l.unuse = function() {
        a > 0 && !--a && (i(), i = null);
    }, e.exports = l;
}, function(e, t, n) {
    var r = n(40), o = n(84);
    "string" == typeof (o = o.__esModule ? o.default : o) && (o = [ [ e.i, o, "" ] ]);
    var i, a = 0, s = {
        injectType: "lazyStyleTag",
        insert: "head",
        singleton: !1
    }, l = {};
    l.locals = o.locals || {}, l.use = function() {
        return a++ || (i = r(o, s)), l;
    }, l.unuse = function() {
        a > 0 && !--a && (i(), i = null);
    }, e.exports = l;
}, function(e, t, n) {
    var r = n(40), o = n(90);
    "string" == typeof (o = o.__esModule ? o.default : o) && (o = [ [ e.i, o, "" ] ]);
    var i, a = 0, s = {
        injectType: "lazyStyleTag",
        insert: "head",
        singleton: !1
    }, l = {};
    l.locals = o.locals || {}, l.use = function() {
        return a++ || (i = r(o, s)), l;
    }, l.unuse = function() {
        a > 0 && !--a && (i(), i = null);
    }, e.exports = l;
}, , , , function(e, t, n) {
    "use strict";
    e.exports = function(e) {
        return "object" == typeof e ? function e(t, n) {
            var r;
            r = Array.isArray(t) ? [] : {};
            n.push(t), Object.keys(t).forEach((function(o) {
                var i = t[o];
                "function" != typeof i && (i && "object" == typeof i ? -1 !== n.indexOf(t[o]) ? r[o] = "[Circular]" : r[o] = e(t[o], n.slice(0)) : r[o] = i);
            })), "string" == typeof t.name && (r.name = t.name);
            "string" == typeof t.message && (r.message = t.message);
            "string" == typeof t.stack && (r.stack = t.stack);
            return r;
        }(e, []) : "function" == typeof e ? "[Function: " + (e.name || "anonymous") + "]" : e;
    };
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(26), o = n.n(r)()(!1);
    o.push([ e.i, ".wI7k5--ff-downloader{display:block;overflow:hidden;width:376px;background:#fff;z-index:99999999;transition:.5s;border:1px solid #dedede;box-sizing:border-box;box-shadow:0 -10px 10px rgba(91,91,91,.06),-10px 0 10px rgba(91,91,91,.06),0 10px 10px rgba(91,91,91,.06);border-radius:10px;font-family:sans-serif;font-style:normal;font-weight:600;font-size:16px;line-height:22px;color:#434343}.ziyP5--close-btn{height:18px;width:18px;background-size:100%;border-radius:4px;cursor:pointer;position:absolute;top:5px;right:9px}.ziyP5--close-btn:hover{background:#e2dede}.BWp-4--file-name{font-weight:400;font-size:12px;line-height:14px;padding:6px 12px;margin:0 auto}.GU13e--status{padding-bottom:6px;font-size:14px;margin-top:12px}.GU13e--status,.ZIOer--status-state{display:flex;justify-content:space-between}.ZIOer--status-state{width:fit-content}.ZIOer--status-state>div:first-child{margin-right:8px;font-weight:700}.K3MvR--status-percentage{color:#77cb35;font-weight:700}.s1z4a--error{color:red;padding:10px;font-size:14px;display:flex;margin-left:12px}.jKWjW--error-text{font-weight:700;margin-right:7px}._09OMr--container{position:relative;height:100%;line-height:1}._09OMr--container .lzhWx--notice{margin-top:21px;font-size:11px;border:0;color:rgba(0,0,0,.88)}.zu8hW--footer{height:40px;width:100%;background:#fff}.zu8hW--footer .Flgd3--loader{animation:YEg5S--rotation 3.5s linear forwards;border-radius:50%;border:5px solid #fff;border-top-color:#a29bfe;height:70px;width:70px;display:flex;justify-content:center;align-items:center}.zu8hW--footer .Q1uXw--loading-bar{width:100%;height:6px;background:#dfe6e9;border-radius:5px}.zu8hW--footer .Q1uXw--loading-bar .-kn2K--progress-bar{height:100%;background:#8bc34a;border-radius:5px}", "" ]), 
    o.locals = {
        "ff-downloader": "wI7k5--ff-downloader",
        ffDownloader: "wI7k5--ff-downloader",
        "close-btn": "ziyP5--close-btn",
        closeBtn: "ziyP5--close-btn",
        "file-name": "BWp-4--file-name",
        fileName: "BWp-4--file-name",
        status: "GU13e--status",
        "status-state": "ZIOer--status-state",
        statusState: "ZIOer--status-state",
        "status-percentage": "K3MvR--status-percentage",
        statusPercentage: "K3MvR--status-percentage",
        error: "s1z4a--error",
        "error-text": "jKWjW--error-text",
        errorText: "jKWjW--error-text",
        container: "_09OMr--container",
        notice: "lzhWx--notice",
        footer: "zu8hW--footer",
        loader: "Flgd3--loader",
        rotation: "YEg5S--rotation",
        "loading-bar": "Q1uXw--loading-bar",
        loadingBar: "Q1uXw--loading-bar",
        "progress-bar": "-kn2K--progress-bar",
        progressBar: "-kn2K--progress-bar"
    }, t.default = o;
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(26), o = n.n(r)()(!1);
    o.push([ e.i, ".Iwvld--ff-downloader{display:block;overflow:hidden;width:300px;background:#fff;z-index:99999999;transition:.5s;border:1px solid #dedede;box-sizing:border-box;box-shadow:0 -10px 10px rgba(91,91,91,.06),-10px 0 10px rgba(91,91,91,.06),0 10px 10px rgba(91,91,91,.06);border-radius:10px;font-family:sans-serif;font-style:normal;font-weight:600;font-size:16px;line-height:22px;color:#434343;padding:16px 14px}.XPnBg--close-btn{background-size:100%;border-radius:4px;cursor:pointer;position:absolute;top:-11px;right:9px}.XPnBg--close-btn:hover{background:#e2dede}.h8wGW--file-name{text-overflow:ellipsis;overflow:hidden;width:216px;font-weight:400;font-size:14px;line-height:18px;margin:12px 0}.YXhTH--status{font-size:14px;margin-top:12px}.YXhTH--status,.pgCcQ--status-state{display:flex;justify-content:space-between}.pgCcQ--status-state{width:fit-content}.pgCcQ--status-state>div:first-child{margin-right:8px;font-weight:700}.p4smi--status-percentage{color:#77cb35;font-weight:700}.jxpOw--error{color:red;font-size:14px;display:flex;margin-left:12px}.NBOIa--error-text{font-weight:700;margin-right:7px}.\\+Mtsr--container{position:relative;height:100%;line-height:1}.\\+Mtsr--container .Rbz-l--notice{margin-top:21px;font-size:11px;border:0;color:rgba(0,0,0,.88)}.W8q4D--footer{width:100%;background:#fff}.W8q4D--footer .A36qu--loader{animation:s6CAC--rotation 3.5s linear forwards;border-radius:50%;border:5px solid #fff;border-top-color:#a29bfe;height:70px;width:70px;display:flex;justify-content:center;align-items:center}.W8q4D--footer .x3HAa--loading-bar{width:100%;height:8px;background:#dfe6e9;border-radius:5px}.W8q4D--footer .x3HAa--loading-bar .Q8FO8--progress-bar{height:100%;background:#8bc34a;border-radius:6px}.ySdCM--tip-window{padding:18px 0 0;font-style:normal;font-weight:400;font-size:12px;line-height:14px;color:#434343;justify-content:space-between;align-items:center}.ySdCM--tip-window,.ySdCM--tip-window .rjEfq--tip-text{display:flex}.ySdCM--tip-window p{margin:0}.ySdCM--tip-window a{display:block}.ySdCM--tip-window a ._5hrC---tip-window-button{width:102px;height:28px;border:none;border-radius:2px;background-color:#8bc34a;color:#fff;font-style:normal;font-weight:500;font-size:12px;line-height:12px}.ySdCM--tip-window a ._5hrC---tip-window-button:hover{cursor:pointer}", "" ]), 
    o.locals = {
        "ff-downloader": "Iwvld--ff-downloader",
        ffDownloader: "Iwvld--ff-downloader",
        "close-btn": "XPnBg--close-btn",
        closeBtn: "XPnBg--close-btn",
        "file-name": "h8wGW--file-name",
        fileName: "h8wGW--file-name",
        status: "YXhTH--status",
        "status-state": "pgCcQ--status-state",
        statusState: "pgCcQ--status-state",
        "status-percentage": "p4smi--status-percentage",
        statusPercentage: "p4smi--status-percentage",
        error: "jxpOw--error",
        "error-text": "NBOIa--error-text",
        errorText: "NBOIa--error-text",
        container: "+Mtsr--container",
        notice: "Rbz-l--notice",
        footer: "W8q4D--footer",
        loader: "A36qu--loader",
        rotation: "s6CAC--rotation",
        "loading-bar": "x3HAa--loading-bar",
        loadingBar: "x3HAa--loading-bar",
        "progress-bar": "Q8FO8--progress-bar",
        progressBar: "Q8FO8--progress-bar",
        "tip-window": "ySdCM--tip-window",
        tipWindow: "ySdCM--tip-window",
        "tip-text": "rjEfq--tip-text",
        tipText: "rjEfq--tip-text",
        "tip-window-button": "_5hrC---tip-window-button",
        tipWindowButton: "_5hrC---tip-window-button"
    }, t.default = o;
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(26), o = n.n(r)()(!1);
    o.push([ e.i, ".ClHbG--information{border-left:4px solid #c58d39;background:rgba(255,178,63,.7607843137254902);font-weight:700;color:#191919;margin-bottom:12px;font-size:13px;line-height:1.5;padding:5px}.JSkqz--filesCount{margin-bottom:4px;font-size:13px}.iuOVZ--progress{position:relative;height:21px;background-color:#e8e8e8;border-radius:3px;overflow:hidden}.iuOVZ--progress .\\+f7GI--line{height:21px;position:absolute;background-color:#0cf;border-radius:5px;transition:width .1s}.iuOVZ--progress .taRzz--text{position:absolute;top:3px;left:5px;display:flex}.iuOVZ--progress .dSvFi--filename{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;width:226px;margin-right:10px}", "" ]), 
    o.locals = {
        information: "ClHbG--information",
        filesCount: "JSkqz--filesCount",
        progress: "iuOVZ--progress",
        line: "+f7GI--line",
        text: "taRzz--text",
        filename: "dSvFi--filename"
    }, t.default = o;
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(26), o = n.n(r)()(!1);
    o.push([ e.i, ".ZOo8v--popup--container{position:absolute;right:40px;width:270px;background:#fff;border:1px solid hsla(0,0%,50.2%,.2);z-index:9999;top:7px;min-height:76px;font-size:14px;border-radius:5px;box-shadow:1px 1px 11px rgba(0,0,0,.23921568627450981);color:#000}.vNkEW--flex-column{display:flex;flex-direction:column}.svLRq--popup--title{padding:4px;background:#efefef}._7ZAJJ--popup--body{font-size:17px;padding:1px 25px 32px}.xuER4--btn{background:#6bcc3e;color:#fff;border-radius:3px;padding:9px 10px;display:block;text-align:center;box-shadow:0 6px 18px -5px #6bcc3e;width:179px;margin:23px auto 0}.xuER4--btn,.xuER4--btn:hover{text-decoration:none}.\\+cYks--text--container{text-align:center}.ho-mQ--sub-text--container{font-size:12px;color:#4c4c4c;text-align:center;display:block}._87JEg--close{width:30px;font-size:17px;color:#c0c5cb;align-self:flex-end;background-color:transparent;border:none;margin-top:3px;margin-right:3px;cursor:pointer}.-b33m--hidden{display:none}._0HBd6--circle-loader--icon{animation-name:NQihZ--spin;animation-duration:5s;animation-iteration-count:infinite;animation-timing-function:linear}.Hmeyt--icon{width:51px;opacity:.3;margin:0 auto 12px}@keyframes NQihZ--spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}", "" ]), 
    o.locals = {
        "popup--container": "ZOo8v--popup--container",
        popupContainer: "ZOo8v--popup--container",
        "flex-column": "vNkEW--flex-column",
        flexColumn: "vNkEW--flex-column",
        "popup--title": "svLRq--popup--title",
        popupTitle: "svLRq--popup--title",
        "popup--body": "_7ZAJJ--popup--body",
        popupBody: "_7ZAJJ--popup--body",
        btn: "xuER4--btn",
        "text--container": "+cYks--text--container",
        textContainer: "+cYks--text--container",
        "sub-text--container": "ho-mQ--sub-text--container",
        subTextContainer: "ho-mQ--sub-text--container",
        close: "_87JEg--close",
        hidden: "-b33m--hidden",
        "circle-loader--icon": "_0HBd6--circle-loader--icon",
        circleLoaderIcon: "_0HBd6--circle-loader--icon",
        spin: "NQihZ--spin",
        icon: "Hmeyt--icon"
    }, t.default = o;
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(26), o = n.n(r)()(!1);
    o.push([ e.i, ".FLBcu--hidden--shadow{box-shadow:inset -2px 1px 2px 0 rgba(0,0,0,.4)}.A50sa--hidden--viewer::-webkit-scrollbar{width:.5em}.A50sa--hidden--viewer::-webkit-scrollbar-track{background:#e0dada}.A50sa--hidden--viewer::-webkit-scrollbar-thumb{background-color:#6b6969;border-radius:3px}.tQBOF--dropdown--item{display:block;padding:0 5px;white-space:nowrap;overflow:hidden;line-height:24px;color:#3d3d3d}.tQBOF--dropdown--item,.tQBOF--dropdown--item:hover{text-decoration:none}.-CinQ--dropdown--container{display:flex;justify-content:space-between}.E9XZe--dropdown--format{min-width:36px}.\\+Hfp---dropdown--quality{min-width:42px;margin-left:6px;display:flex;justify-content:space-between}._4R4Jh--quality--badge{background-color:#505050;color:#fff;padding-left:2px;padding-right:2px;height:19px;vertical-align:middle;margin-top:2px;border-radius:3px;line-height:21px;margin-left:2px}._4mas\\+--dropdown--action{width:30px;display:flex;justify-content:flex-end}._4mas\\+--dropdown--action img{width:14px;margin-left:4px}.A50sa--hidden--viewer{max-height:192px;overflow-y:scroll;background:#f7f7f7}.uyTuz--size--icon{font-size:72%;font-weight:400;margin-left:2px;white-space:nowrap}.kj5iC--separator{display:block;margin:1px 0;border-top:1px solid #d6d6d6}.yjfKv--more--btn{text-align:center;display:block;color:rgba(44,44,44,.6)}.lp9Bs--more--btn-with-pro{display:flex;justify-content:space-between}.lp9Bs--more--btn-with-pro a:hover{background:none!important;color:inherit!important}.b\\+dsr--login--btn{display:block;font-family:Roboto,sans-serif;font-style:normal;font-weight:700;font-size:13px;line-height:14px;color:#46aa4b;padding-top:8px;padding-bottom:8px;text-align:center;text-decoration:none}.autRa--pro-information,.autRa--pro-information .S\\+3y\\+--info{display:flex;justify-content:space-between}.autRa--pro-information .S\\+3y\\+--info img{width:16px;height:16px;margin-right:8px;margin-left:5px;margin-top:3px}.lsy8K--pro--label{line-height:1.9;color:#46aa4b}.XEJXo--subtitles{white-space:nowrap;text-overflow:ellipsis;overflow:hidden}", "" ]), 
    o.locals = {
        "hidden--shadow": "FLBcu--hidden--shadow",
        hiddenShadow: "FLBcu--hidden--shadow",
        "hidden--viewer": "A50sa--hidden--viewer",
        hiddenViewer: "A50sa--hidden--viewer",
        "dropdown--item": "tQBOF--dropdown--item",
        dropdownItem: "tQBOF--dropdown--item",
        "dropdown--container": "-CinQ--dropdown--container",
        dropdownContainer: "-CinQ--dropdown--container",
        "dropdown--format": "E9XZe--dropdown--format",
        dropdownFormat: "E9XZe--dropdown--format",
        "dropdown--quality": "+Hfp---dropdown--quality",
        dropdownQuality: "+Hfp---dropdown--quality",
        "quality--badge": "_4R4Jh--quality--badge",
        qualityBadge: "_4R4Jh--quality--badge",
        "dropdown--action": "_4mas+--dropdown--action",
        dropdownAction: "_4mas+--dropdown--action",
        "size--icon": "uyTuz--size--icon",
        sizeIcon: "uyTuz--size--icon",
        separator: "kj5iC--separator",
        "more--btn": "yjfKv--more--btn",
        moreBtn: "yjfKv--more--btn",
        "more--btn-with-pro": "lp9Bs--more--btn-with-pro",
        moreBtnWithPro: "lp9Bs--more--btn-with-pro",
        "login--btn": "b+dsr--login--btn",
        loginBtn: "b+dsr--login--btn",
        "pro-information": "autRa--pro-information",
        proInformation: "autRa--pro-information",
        info: "S+3y+--info",
        "pro--label": "lsy8K--pro--label",
        proLabel: "lsy8K--pro--label",
        subtitles: "XEJXo--subtitles"
    }, t.default = o;
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(26), o = n.n(r)()(!1);
    o.push([ e.i, ".YkQQD--button{display:block;padding:5px;color:#fff;text-align:center;background:linear-gradient(180deg,#54b85b,#3a833f);border-radius:2px;text-decoration:none;font-size:12px;margin:5px}.YkQQD--button:hover{background:#3a833f!important}", "" ]), 
    o.locals = {
        button: "YkQQD--button"
    }, t.default = o;
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(26), o = n.n(r)()(!1);
    o.push([ e.i, '._6BnMg--item--anchor{display:flex;padding:0 5px;text-decoration:none;white-space:nowrap;overflow:hidden}.uGmA2--item--container{width:100%;display:block}.uGmA2--item--container span{font-weight:700}.TpsJ6--televzr-popup-container{border-radius:6px}.t\\+3cf--televzr-popup{background-color:#fff;border:1px solid #ccc;text-align:center;line-height:16px;font-size:12px;font-family:arial,sans-serif;cursor:default;border-radius:6px;padding:6px}.DhgbJ--televzr-popup-header{width:114px;height:42px;margin:7px auto 8px;background:url("data:image/jpeg;base64,/9j/4QxRRXhpZgAATU0AKgAAAAgADQEAAAMAAAABBQAAAAEBAAMAAAABAeQAAAECAAMAAAADAAAAqgEGAAMAAAABAAIAAAESAAMAAAABAAEAAAEVAAMAAAABAAMAAAEaAAUAAAABAAAAsAEbAAUAAAABAAAAuAEoAAMAAAABAAIAAAExAAIAAAAiAAAAwAEyAAIAAAAUAAAA4gITAAMAAAABAAEAAIdpAAQAAAABAAAA+AAAATAACAAIAAgAC+bgAAAnEAAL5uAAACcQQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpADIwMjA6MDM6MTEgMTU6MzQ6MjAAAAAABJAAAAcAAAAEMDIyMaABAAMAAAAB//8AAKACAAQAAAABAAAAyKADAAQAAAABAAAASwAAAAAAAAAGAQMAAwAAAAEABgAAARoABQAAAAEAAAF+ARsABQAAAAEAAAGGASgAAwAAAAEAAgAAAgEABAAAAAEAAAGOAgIABAAAAAEAAAq7AAAAAAAAAEgAAAABAAAASAAAAAH/2P/tAAxBZG9iZV9DTQAC/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgAPACgAwEiAAIRAQMRAf/dAAQACv/EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSwWIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTdePzRieUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9jdHV2d3h5ent8fX5/cRAAICAQIEBAMEBQYHBwYFNQEAAhEDITESBEFRYXEiEwUygZEUobFCI8FS0fAzJGLhcoKSQ1MVY3M08SUGFqKygwcmNcLSRJNUoxdkRVU2dGXi8rOEw9N14/NGlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vYnN0dXZ3eHl6e3x//aAAwDAQACEQMRAD8A9UTFwHJhOSuR+ufWMuh9GFi2ux/Xa+y66s7bBWxzamVUWf4L1rHbrbW/pPTZ7EQLKnq3WADcQQPE6f8AVIZy6QYNjAfAub/evK6bn414ysd7qslsxduL3QfpNs9Yv9at/wCfXb9Ndl0H61YWcWYmXXVi5x0Y1oAquP8A3We76Fv/AHVt/Sf6H10TCvFTvjqWG76ORU74WM/vRmXteJadw/kkO/6krJ6hjVHdkMraSNbmbQZ/4QCPpN/wqoCrEJn0a/i0AH/OZtUscMZCxJqz5mWORjKH2HcPUB4PB1HI7p1hYGRZVkMpD3PqsDjWHkuLHMG/a17vf6NrPzH/AM2txpkKKcDA0WfFkGSPENOjJJNISkJq9dJMnSUpJDbfQ611LbGG1gl1YcC4DT6TPpfnIiSlJJJJKUkkkkpSSSSSn//Q9ReYXA/Xh0dTxD441n/n4LvbV559e3R1HD/8L2/+fk6G6i1OkYmHmY2Uclpc5tjGMsa4tewFm/8ARn6P0v32ql1LpuRhtJsjIxHED1mtgDX2tyKv8C/9x/8ANf6OxF6Nn4uLjZRyLm1fpGOAOriNmz9FW332+79xVOpdcuy2OprHoYh+m1xG94B3fp3/AEa69N3o1/8AXbLFZqPAP3muDl96VfJYvi22/Qem+qf1jy8i/wDZmZY66wVusxch+tjhX/O0ZD/8K9tf6Si/6f8AOV3/AOkWplhtNwLNK7QXNaOGkH3tH8n85i5n6pdNyGXjq+Q011mtzMJjhDrPVGx+Vs+lXQ2v2Y+/+kep6v8ANV+/ZzMttlwYwy2oFsju4n3x/VjYm4vn02r1K5oA49d79P8A3To4Nm7Nx/8Arn/UFdFS6Wj4Lk+l2Tn0jys/6hy6qj6I+ATeY+ceX/fK5T+bP94/lFyPrP8AUrpH1nsx7OovvacVr21il7Wgh5YXb9zLP9GvOui/UnonUfrn1XoF3qtw8BjnUvY4C0lrqW/pbNjt/wDPP/MXsi86+qf/AOVL6w/8XZ/1eKo4k0fJsOieq/Vb/F1iM6PW7KyrbrDcMesC66bfY0uP6vU1rvT/AEbP5160Og/X7ofXM89NrZkYWdrsx8yv03vgeo/09j7WbmV+/Y92/YuOzn9Ur/xq5zulsxn9SLWjFGduFUHGo3+m6mH+v6bbW1f8H9pW5g/Vn62dQ+t2H9YfrAcOhuBWWMrwy8l+lwrb+l/l5Nj7Hvs/4Ouv+csQIHXtamv0MD/x3uuaD+ifw6cui+sn126L9XLK6Mz1b8q6CzGxmepZDjsY9251dbd7m+z9Jvs/wa53ohA/xvdakgbsUhs9zt6cYCy+pP6pX/jWy3dMbju6gWsGIM3eKYOLXv2Oqh/rbW3tp/8AQhGrPkLU9h0H6/dE631A9MrrycLO1LMfMr9Nz4b6j9mx9rdza/fsf+YrnQfrV03r1+ZjYrLqr+nuDMmq9gY4OJsr0hz92yyixj1z+J9WfrZ1L62YXX/rCcKhnT2bWMwy8l8C3Y39LP597nWb7f8Ag66/fa9V76XfV/8Axq0ZDYZhfWKpzHGIHrNa3e0R/hPXpxn/APoZYhQ6dlPUWfWvpbPrJX9Wmi2zqD27zsaDWwbHX/pbC4bf0Tf3f8LUsd3+NT6tC11XpZhe15ZAoJlzXGv2+794Kh/i4Y/rPWut/W69p25Vxx8Iu5FY2ueNv8mhmDTv/wCDtVr6y/WDqPWOpO+qn1XeftAO3qfUWzsx28Pqbaz/AA35tuz3/wDaer9Y9X7Iq1pTqdK+vXReq4fUszGbe2vpNQvyhZXtdsLbbf0bd3vdtx7FQy/8av1UxsbHuDrr7ckbhi1MabmAksH2gPsZVU72/Q9X1Nn6T+bVrK6B0/6v/UXqnT8FkNbgZJttIG+x/ov3W2kfnf8Antn6Niq/4q8bGb9UsbKbUwZFr7hbcGje/bbYxnqWfTfsZ7GJUKvxU//R9QsC4T699LzLfQzset1zcRtleSxgLniuxzbqsplTG77Kq376sn0/fV7Lf5v1F3rxKqZFO6DwRq0gwR/VcEYmlPibLWZFrasc+vdYdtdVRD3uP7rGN9y6XpXQKcYtyeo7MjJadzMcEPoqI+i5/wCbmXt/9haf+H/nF3F9Jc8vfXXY4gtL3saXFp/MNm3ftVY4uP3w6T8GgfkAUnEUOHmdQe0ljXE3P1seTq0Hz/0j/wDoMVEZFbIBc1o7AkBdMOm9OBkdOx5OpLm7pJ/r7lZx8VlR/QY9NHnXW0H/ADtqkjlERQiWCeGU5WSB2605XQab7bxlbSKWtc2pxBHqPeNn6OfpVVM99tv0F19LYAHhoqtFJ3b3EueeXEyVdY2Aock+I2y48YhGhr1SLIwPqv0vA63l9cx/U+25wc27c8lkOLHu2V/m+6pi10kxe4P1j+pfQvrIW2dQrezIY3Y3Ipdss2A7/Td9Ouxm76PqV/o/8GqvQv8AF19Xuh9Rr6ljnIvy6d3pWX27tu9rqnw2ttTXbq3u+muoSRs1Snl+v/4u/q91/POfl+vVdZt9YUPDW2FgDK32Ney33trb6e6r01b+sn1M6F9ZNj+oVvbkVt2MyaXbLNk7/Td9Kuxm/wBzfVrf6f8Ag1upJWfsU8v0L/F19Xuh9Rr6njuyL8und6T77d23e11T4bW2pvure5vvWl9YPqx0n6w1U19RY8nGeX1WVuLHt3DbY3e38yz89aySVndTS6P0jC6L06npuC0tx6N23c4ucS5zrbHve76Tn2Pc5c27/FT9UnAtc3Jc0ku2m90Akl30f7a7FJKyp57pX1F6B0jD6jhYTbW09VqFOUHWFx2httf6Nx+g7bkWLS6H0XC6H06vpuDv+z1Fzm+o7c6XuNjvd/Wcr6SFqf/S9UKg5gKImSU13UA9kM4w8Fc0Te1HVTUGMPBTbQB2Vj2pe1LVTBtYCIBCSSCl0kkklKSSSSUpJJJJSkkkklKSSSSUpJJJJT//2f/tE+xQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAABxwCAAACAAAAOEJJTQQlAAAAAAAQ6PFc8y/BGKGie2etxWTVujhCSU0EOgAAAAAA9wAAABAAAAABAAAAAAALcHJpbnRPdXRwdXQAAAAFAAAAAFBzdFNib29sAQAAAABJbnRlZW51bQAAAABJbnRlAAAAAEltZyAAAAAPcHJpbnRTaXh0ZWVuQml0Ym9vbAAAAAALcHJpbnRlck5hbWVURVhUAAAAAQAAAAAAD3ByaW50UHJvb2ZTZXR1cE9iamMAAAAVBB8EMARABDAEPAQ1BEIEQARLACAERgQyBDUEQgQ+BD8EQAQ+BDEESwAAAAAACnByb29mU2V0dXAAAAABAAAAAEJsdG5lbnVtAAAADGJ1aWx0aW5Qcm9vZgAAAAlwcm9vZkNNWUsAOEJJTQQ7AAAAAAItAAAAEAAAAAEAAAAAABJwcmludE91dHB1dE9wdGlvbnMAAAAXAAAAAENwdG5ib29sAAAAAABDbGJyYm9vbAAAAAAAUmdzTWJvb2wAAAAAAENybkNib29sAAAAAABDbnRDYm9vbAAAAAAATGJsc2Jvb2wAAAAAAE5ndHZib29sAAAAAABFbWxEYm9vbAAAAAAASW50cmJvb2wAAAAAAEJja2dPYmpjAAAAAQAAAAAAAFJHQkMAAAADAAAAAFJkICBkb3ViQG/gAAAAAAAAAAAAR3JuIGRvdWJAb+AAAAAAAAAAAABCbCAgZG91YkBv4AAAAAAAAAAAAEJyZFRVbnRGI1JsdAAAAAAAAAAAAAAAAEJsZCBVbnRGI1JsdAAAAAAAAAAAAAAAAFJzbHRVbnRGI1B4bEBTgAAAAAAAAAAACnZlY3RvckRhdGFib29sAQAAAABQZ1BzZW51bQAAAABQZ1BzAAAAAFBnUEMAAAAATGVmdFVudEYjUmx0AAAAAAAAAAAAAAAAVG9wIFVudEYjUmx0AAAAAAAAAAAAAAAAU2NsIFVudEYjUHJjQFkAAAAAAAAAAAAQY3JvcFdoZW5QcmludGluZ2Jvb2wAAAAADmNyb3BSZWN0Qm90dG9tbG9uZwAAAAAAAAAMY3JvcFJlY3RMZWZ0bG9uZwAAAAAAAAANY3JvcFJlY3RSaWdodGxvbmcAAAAAAAAAC2Nyb3BSZWN0VG9wbG9uZwAAAAAAOEJJTQPtAAAAAAAQAE4AAAABAAEATgAAAAEAAThCSU0EJgAAAAAADgAAAAAAAAAAAAA/gAAAOEJJTQQNAAAAAAAEAAAAHjhCSU0EGQAAAAAABAAAAB44QklNA/MAAAAAAAkAAAAAAAAAAAEAOEJJTScQAAAAAAAKAAEAAAAAAAAAAThCSU0D9QAAAAAASAAvZmYAAQBsZmYABgAAAAAAAQAvZmYAAQChmZoABgAAAAAAAQAyAAAAAQBaAAAABgAAAAAAAQA1AAAAAQAtAAAABgAAAAAAAThCSU0D+AAAAAAAcAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAA4QklNBAgAAAAAABAAAAABAAACQAAAAkAAAAAAOEJJTQQeAAAAAAAEAAAAADhCSU0EGgAAAAADSwAAAAYAAAAAAAAAAAAAAEsAAADIAAAACwBsAG8AZwBvAF8AaABlAGEAZABlAHIAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAMgAAABLAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAEAAAAAAABudWxsAAAAAgAAAAZib3VuZHNPYmpjAAAAAQAAAAAAAFJjdDEAAAAEAAAAAFRvcCBsb25nAAAAAAAAAABMZWZ0bG9uZwAAAAAAAAAAQnRvbWxvbmcAAABLAAAAAFJnaHRsb25nAAAAyAAAAAZzbGljZXNWbExzAAAAAU9iamMAAAABAAAAAAAFc2xpY2UAAAASAAAAB3NsaWNlSURsb25nAAAAAAAAAAdncm91cElEbG9uZwAAAAAAAAAGb3JpZ2luZW51bQAAAAxFU2xpY2VPcmlnaW4AAAANYXV0b0dlbmVyYXRlZAAAAABUeXBlZW51bQAAAApFU2xpY2VUeXBlAAAAAEltZyAAAAAGYm91bmRzT2JqYwAAAAEAAAAAAABSY3QxAAAABAAAAABUb3AgbG9uZwAAAAAAAAAATGVmdGxvbmcAAAAAAAAAAEJ0b21sb25nAAAASwAAAABSZ2h0bG9uZwAAAMgAAAADdXJsVEVYVAAAAAEAAAAAAABudWxsVEVYVAAAAAEAAAAAAABNc2dlVEVYVAAAAAEAAAAAAAZhbHRUYWdURVhUAAAAAQAAAAAADmNlbGxUZXh0SXNIVE1MYm9vbAEAAAAIY2VsbFRleHRURVhUAAAAAQAAAAAACWhvcnpBbGlnbmVudW0AAAAPRVNsaWNlSG9yekFsaWduAAAAB2RlZmF1bHQAAAAJdmVydEFsaWduZW51bQAAAA9FU2xpY2VWZXJ0QWxpZ24AAAAHZGVmYXVsdAAAAAtiZ0NvbG9yVHlwZWVudW0AAAARRVNsaWNlQkdDb2xvclR5cGUAAAAATm9uZQAAAAl0b3BPdXRzZXRsb25nAAAAAAAAAApsZWZ0T3V0c2V0bG9uZwAAAAAAAAAMYm90dG9tT3V0c2V0bG9uZwAAAAAAAAALcmlnaHRPdXRzZXRsb25nAAAAAAA4QklNBCgAAAAAAAwAAAACP/AAAAAAAAA4QklNBBEAAAAAAAEBADhCSU0EFAAAAAAABAAAAAE4QklNBAwAAAAACtcAAAABAAAAoAAAADwAAAHgAABwgAAACrsAGAAB/9j/7QAMQWRvYmVfQ00AAv/uAA5BZG9iZQBkgAAAAAH/2wCEAAwICAgJCAwJCQwRCwoLERUPDAwPFRgTExUTExgRDAwMDAwMEQwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwBDQsLDQ4NEA4OEBQODg4UFA4ODg4UEQwMDAwMEREMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDP/AABEIADwAoAMBIgACEQEDEQH/3QAEAAr/xAE/AAABBQEBAQEBAQAAAAAAAAADAAECBAUGBwgJCgsBAAEFAQEBAQEBAAAAAAAAAAEAAgMEBQYHCAkKCxAAAQQBAwIEAgUHBggFAwwzAQACEQMEIRIxBUFRYRMicYEyBhSRobFCIyQVUsFiMzRygtFDByWSU/Dh8WNzNRaisoMmRJNUZEXCo3Q2F9JV4mXys4TD03Xj80YnlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vY3R1dnd4eXp7fH1+f3EQACAgECBAQDBAUGBwcGBTUBAAIRAyExEgRBUWFxIhMFMoGRFKGxQiPBUtHwMyRi4XKCkkNTFWNzNPElBhaisoMHJjXC0kSTVKMXZEVVNnRl4vKzhMPTdePzRpSkhbSVxNTk9KW1xdXl9VZmdoaWprbG1ub2JzdHV2d3h5ent8f/2gAMAwEAAhEDEQA/APVExcByYTkrkfrn1jLofRhYtrsf12vsuurO2wVsc2plVFn+C9ax2621v6T02exECyp6t1gA3EEDxOn/AFSGcukGDYwHwLm/3ryum5+NeMrHe6rJbMXbi90H6TbPWL/Wrf8An12/TXZdB+tWFnFmJl11YucdGNaAKrj/AN1nu+hb/wB1bf0n+h9dEwrxU746lhu+jkVO+FjP70Zl7XiWncP5JDv+pKyeoY1R3ZDK2kjW5m0Gf+EAj6Tf8KqAqxCZ9Gv4tAB/zmbVLHDGQsSas+ZljkYyh9h3D1AeDwdRyO6dYWBkWVZDKQ9z6rA41h5LixzBv2te73+jaz8x/wDNrcaZCinAwNFnxZBkjxDToySTSEpCavXSTJ0lKSQ230OtdS2xhtYJdWHAuA0+kz6X5yIkpSSSSSlJJJJKUkkkkp//0PUXmFwP14dHU8Q+ONZ/5+C721eefXt0dRw//C9v/n5OhuotTpGJh5mNlHJaXObYxjLGuLXsBZv/AEZ+j9L99qpdS6bkYbSbIyMRxA9ZrYA19rcir/Av/cf/ADX+jsRejZ+Li42Uci5tX6RjgDq4jZs/RVt99vu/cVTqXXLstjqax6GIfptcRveAd36d/wBGuvTd6Nf/AF2yxWajwD95rg5felXyWL4ttv0Hpvqn9Y8vIv8A2ZmWOusFbrMXIfrY4V/ztGQ//CvbX+kov+n/ADld/wDpFqZYbTcCzSu0FzWjhpB97R/J/OYuZ+qXTchl46vkNNdZrczCY4Q6z1RsflbPpV0Nr9mPv/pHqer/ADVfv2czLbZcGMMtqBbI7uJ98f1Y2JuL59Nq9SuaAOPXe/T/AN06ODZuzcf/AK5/1BXRUulo+C5Ppdk59I8rP+ocuqo+iPgE3mPnHl/3yuU/mz/eP5Rcj6z/AFK6R9Z7MezqL72nFa9tYpe1oIeWF2/cyz/Rrzrov1J6J1H659V6Bd6rcPAY51L2OAtJa6lv6WzY7f8Azz/zF7IvOvqn/wDlS+sP/F2f9XiqOJNHybDonqv1W/xdYjOj1uysq26w3DHrAuum32NLj+r1Na70/wBGz+detDoP1+6H1zPPTa2ZGFna7MfMr9N74HqP9PY+1m5lfv2Pdv2Ljs5/VK/8auc7pbMZ/Ui1oxRnbhVBxqN/puph/r+m21tX/B/aVuYP1Z+tnUPrdh/WH6wHDobgVljK8MvJfpcK2/pf5eTY+x77P+Drr/nLECB17Wpr9DA/8d7rmg/on8OnLovrJ9dui/VyyujM9W/KugsxsZnqWQ47GPdudXW3e5vs/Sb7P8Gud6IQP8b3WpIG7FIbPc7enGAsvqT+qV/41st3TG47uoFrBiDN3imDi179jqof621t7af/AEIRqz5C1PYdB+v3ROt9QPTK68nCztSzHzK/Tc+G+o/Zsfa3c2v37H/mK50H61dN69fmY2Ky6q/p7gzJqvYGODibK9Ic/dssosY9c/ifVn62dS+tmF1/6wnCoZ09m1jMMvJfAt2N/Sz+fe51m+3/AIOuv32vVe+l31f/AMatGQ2GYX1iqcxxiB6zWt3tEf4T16cZ/wD6GWIUOnZT1Fn1r6Wz6yV/Vpots6g9u87Gg1sGx1/6WwuG39E393/C1LHd/jU+rQtdV6WYXteWQKCZc1xr9vu/eCof4uGP6z1rrf1uvaduVccfCLuRWNrnjb/JoZg07/8Ag7Va+sv1g6j1jqTvqp9V3n7QDt6n1Fs7MdvD6m2s/wAN+bbs9/8A2nq/WPV+yKtaU6nSvr10XquH1LMxm3tr6TUL8oWV7XbC2239G3d73bcexUMv/Gr9VMbGx7g66+3JG4YtTGm5gJLB9oD7GVVO9v0PV9TZ+k/m1ayugdP+r/1F6p0/BZDW4GSbbSBvsf6L91tpH53/AJ7Z+jYqv+KvGxm/VLGym1MGRa+4W3Bo3v222MZ6ln037GexiVCr8VP/0fULAuE+vfS8y30M7Hrdc3EbZXksYC54rsc26rKZUxu+yqt++rJ9P31ey3+b9Rd68SqmRTug8EatIMEf1XBGJpT4my1mRa2rHPr3WHbXVUQ97j+6xjfcul6V0CnGLcnqOzIyWnczHBD6KiPouf8Am5l7f/YWn/h/5xdxfSXPL3112OILS97GlxafzDZt37VWOLj98Ok/BoH5AFJxFDh5nUHtJY1xNz9bHk6tB8/9I/8A6DFRGRWyAXNaOwJAXTDpvTgZHTseTqS5u6Sf6+5WcfFZUf0GPTR511tB/wA7apI5REUIlgnhlOVkgdutOV0Gm+28ZW0ilrXNqcQR6j3jZ+jn6VVTPfbb9BdfS2AB4aKrRSd29xLnnlxMlXWNgKHJPiNsuPGIRoa9UiyMD6r9LwOt5fXMf1PtucHNu3PJZDix7tlf5vuqYtdJMXuD9Y/qX0L6yFtnUK3syGN2NyKXbLNgO/03fTrsZu+j6lf6P/Bqr0L/ABdfV7ofUa+pY5yL8und6Vl9u7bva6p8NrbU126t7vprqEkbNUp5fr/+Lv6vdfzzn5fr1XWbfWFDw1thYAyt9jXst97a2+nuq9NW/rJ9TOhfWTY/qFb25FbdjMml2yzZO/03fSrsZv8Ac31a3+n/AINbqSVn7FPL9C/xdfV7ofUa+p47si/Lp3ek++3dt3tdU+G1tqb7q3ub71pfWD6sdJ+sNVNfUWPJxnl9Vlbix7dw22N3t/Ms/PWsklZ3U0uj9Iwui9Op6bgtLcejdt3OLnEuc62x73u+k59j3OXNu/xU/VJwLXNyXNJLtpvdAJJd9H+2uxSSsqee6V9RegdIw+o4WE21tPVahTlB1hcdobbX+jcfoO25Fi0uh9Fwuh9Or6bg7/s9Rc5vqO3Ol7jY73f1nK+khan/0vVCoOYCiJklNd1APZDOMPBXNE3tR1U1BjDwU20AdlY9qXtS1UwbWAiAQkkgpdJJJJSkkkklKSSSSUpJJJJSkkkklKSSSSU//9kAOEJJTQQhAAAAAABdAAAAAQEAAAAPAEEAZABvAGIAZQAgAFAAaABvAHQAbwBzAGgAbwBwAAAAFwBBAGQAbwBiAGUAIABQAGgAbwB0AG8AcwBoAG8AcAAgAEMAQwAgADIAMAAxADkAAAABADhCSU0EBgAAAAAABwABAAAAAQEA/+ENw2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmViMTRlOGE4LTU4M2EtZjA0ZC04NTE0LTgzYWUyYWQ5NmZhMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOWNkMzA3Yi1jYWUwLTBjNDctODg3Ni0zMTc3Yzc1YTk3OTMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0iMDM1MTRGQjY3QjlGNzBDRDc2MEY2NzZCNEVGQThCQUUiIGRjOmZvcm1hdD0iaW1hZ2UvanBlZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IiIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDMtMTFUMTU6MjQ6NDMrMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTAzLTExVDE1OjM0OjIwKzAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTAzLTExVDE1OjM0OjIwKzAzOjAwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NDAzNTg2MzAtNjI2OS01NTQ1LWFiOGEtNWNkZjFiMjMzZGI5IiBzdEV2dDp3aGVuPSIyMDIwLTAzLTExVDE1OjM0OjIwKzAzOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjE5Y2QzMDdiLWNhZTAtMGM0Ny04ODc2LTMxNzdjNzVhOTc5MyIgc3RFdnQ6d2hlbj0iMjAyMC0wMy0xMVQxNTozNDoyMCswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSJ3Ij8+/+4ADkFkb2JlAGSAAAAAAf/bAIQADAgICAkIDAkJDBELCgsRFQ8MDA8VGBMTFRMTGBEMDAwMDAwRDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAENCwsNDg0QDg4QFA4ODhQUDg4ODhQRDAwMDAwREQwMDAwMDBEMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwM/8AAEQgASwDIAwEiAAIRAQMRAf/dAAQADf/EAT8AAAEFAQEBAQEBAAAAAAAAAAMAAQIEBQYHCAkKCwEAAQUBAQEBAQEAAAAAAAAAAQACAwQFBgcICQoLEAABBAEDAgQCBQcGCAUDDDMBAAIRAwQhEjEFQVFhEyJxgTIGFJGhsUIjJBVSwWIzNHKC0UMHJZJT8OHxY3M1FqKygyZEk1RkRcKjdDYX0lXiZfKzhMPTdePzRieUpIW0lcTU5PSltcXV5fVWZnaGlqa2xtbm9jdHV2d3h5ent8fX5/cRAAICAQIEBAMEBQYHBwYFNQEAAhEDITESBEFRYXEiEwUygZEUobFCI8FS0fAzJGLhcoKSQ1MVY3M08SUGFqKygwcmNcLSRJNUoxdkRVU2dGXi8rOEw9N14/NGlKSFtJXE1OT0pbXF1eX1VmZ2hpamtsbW5vYnN0dXZ3eHl6e3x//aAAwDAQACEQMRAD8A9VTJIOTkMoqdZY4MYxpe954a1o3OekpKXAclR9VviuFzfrn1G+wnAazGx5/Rvsb6lrh2e5rv0dW79xE6V9bLQ/0er3PdW46ZVYDS2e11bG+6v/hGfQTuAqt7b1Ql6nx+5VGVUWMbYy19jHjcx4fLSD+c0tVHNxHUO9Su64VOP+kPtP8A5FGEOI1dLMk+CPFXEOtOz6rfFSDwe650W5Tfo5Vo+JDv+qCK3Nz2a72XgfmObtJ+D2fnJ55eXQgsQ5vGdwQ7ySq4eWzIra9sw6dDyCPpVu/qq0oSK0LOCCLHVdJJJJKkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklP/0PU3FYf1reR0LPgx+iA+Re0FbbysD62H/IWf/wAUP+rYiNwp4F9gEyYAUsijKxmsffWa2WAFjjxr4kfRd/Icqlz/AGu+BXXOe19QY8B7HMaHNcJBEDlqsQhxX4MGbKcfDpYN243R/rFmdIftqPq4rjNmK4wPN9Lv8Db/AOBruMDq2D1TFN+K/wBSs+2ytwh7Cf8AB3M/N/12LgOrdMrxqzlY7opDg11TtSC7/Rv/ADm/yEHoXULsLq+NZWYba9tNzR+dW87drv6rvexNnCj4skJxnGxs9zksOPZAM1u1Y7/vrv5TVFtqNluDsexp12e5p82rOZapsUuKOu40aOfEIT02OodrpDv56OPVB+9q2GlYXRnS20/8KP8AqVt1nRVsvzybmD+aj5ON9bvrJlfV/Fx78bBdnuvt9NzGlwLRtc/f+jru/d2rlbP8bOfVHrdFNW76PqWPZP8AV9Shu5ekLzL/ABwf0rpX9S7/AKqlCFE0QytzF/xm9VvyqKD0K1jbrWVl5NkND3NYX644+hu3L0FU83qFHTelW9QySfRxaTa+OSGt3bW/ynLz/A+sf+Mf6zvuyeitx8TEqfs2uDSAY3+kbbm2vutaxzfV2V11oVew4aU+mLkcr655lH13r+rTcas49hYDeXO3jfW6/wCh9D81U/qp9cOvWfWB/wBWvrFVX9sAfsurG0hzGi3Y9rd1VjLKf0lVtez+osvqP/5X6P69P/tvYiI6m+1qfTklhfXD6zN+rfSftbaxdk3PFONU4w0vILt9hHu9KtjN71yWLnf42OoYLeq4rscY1rfVpp2Vhzmct9Op+9/u/wAH6l+9ARJF6DzU+lJLivq39b+r/WH6v9SNNddXWsBk1kNJrsJaX1foXHcxz3VvpsZvVn/F79asv6xYOT+0NgzMa0SK27B6b27qvYXP929trHIGJF+CnrElw31l+t3W6frdifV7o3pD1PSbe6xheQ60l7i33N2tqxmeor31hu/xhM6m5vQKMazp+xu11xbu36+p9KxiXCdPFT1aS8r6t9dP8YPR8hmJnDCbl2gGvHqb6th3HbXLKrXbfVf7av8ASLovrh9ZevdD+rvTMyoVVdQyXVsy22M3NDjU621oa1/t22s/eR4Dp4qeySXnV31n/wAYXWyyzoHTHYWC7btvtawvsGm6z9Zc2v0/3PTrs/41JLgPceVqf//R9Reue+th/wAhZ/8AxI/6ti6F6xPrFh25nTcvFpE230ubUPF7SLGs/t7diI3UXy+5xIcPitzJ65iU0sNbvXsc1u1jeBp/hXfmf1fprnnvJmQWkEhzToQRo5jh+a5qG1r7LG11NL7HmGMaJcT/ACQrEZGN11Yp4ozri/RT5edkZdnqZD5j6LRoxo/kt/78tn6t9HtffV1LKBZRUd+Ox2jrHj6Fhafo0M+l/wAKidK+r9WOW5GfF14gsp5rYf5f+mt/8CWvfmCpu9x3Pdo0eJ/8imkkmhqSv9MY9ohsZuWG1+kDL7OfJv8A5kqjLFRNznuLnGXO1JRGWwOYCnhHhFfa0MszOV/QeT0vQ3TXZ/xo/wCpW9VwsDoNVjcdrniPWf6jQedgG1jv7a6CsKrlPrl5t3CKxx8kq8z/AMcH9K6X/Uu/6qlemLA+tH1NwfrLZj2ZWRdQcUOawU7dd5a47vUY/wD0abE0QSyLfXat9n1K6k1gJd9m3QPBu17v+i1cL9SsL61dQ6fczoPWKsCmm53qYr2Bztzw1/rzsf7Ll6wamGr0XgPYW7HNcJBEbSHD+UuHzv8AFJ0i2824GZkYLDMVNh7Wz+ZU5221tf8AI9R6MZCiD/FSf6tfUbPwOvu671rqDc3Oh2wVtIlzx6brbHP/AHa/0ddddaw+pvaz/G9Q55DRvoEnQSaHtb/0l031Z/xf9P8Aq/n/ALRbl5GVlBjqwbCAza7bu9jR/J/fS+tH+L/pv1hzBnG+zEyi0MtcwNe17W/Q312fns/fYlxCzZ6UpyP8b9bndN6baBuqbkPY4jiX1u2N/tbHIHR+j/XzqPRsa/p/1hpZhW0tbVWGQ5jNuz0S5tftsp/m11mL9UemV/Vqv6uZRdmYlYI32Q18lzrm2MdXt9N9b3fo1zdn+KDB9Rxo6pk1VuP0IYT/AGnt9Pf/AJiQkKq9vC1O19SPqiPq1jZAtyG5OVlOabXMG1jQwEMrZuLn/nvc971zPR6x9WP8ZmRgOPp4fUmPdVPG2zdl0/8Abd1eTSuy+q/1Vwvq1i20Yltt5yHiy19xBJcBs9rWNbtQPrN9S+m/WO+jJybbse/Ha5gsoIBcxx3bH72v+i76G1IS1NndTyv+Lymzrf1p6p9Z7xLGue2iezrj7Q3/AIrCZUz/AK6ul+un1xo+r2MKMcC/quSP1ajnaD7ftFzW+70930K/p32fo2LT+r3QMP6v9Nb0/Dc97N7rH2WQXOe/6TnbA1v8lZHXv8XvTeudUs6nflZFNtrWMLaiwNHpja0jexzkrBlrsppfUr6n24tzvrB9YHev1nIJsa2wgmrd+e/837U5vt9v9Gq/QVIH+OHXoWF/4a/9FXKR/wAUHRCCPt2Zr/KZ/wCk1tdZ+pWB1fouD0a7Iurp6eGCuxhbvdsrOOPU3sc36LkrHEDd/RTpfV//AJB6b/4Uo/8APbElZwsVmFhY+GxxczGqZU1zuSGNFYc6Pzvakm9VP//S9ScFVvqD2kFXChPbKQU811P6udIz7TdmYodcfpX1udXY7zsdWdtjv67VVxPq30jB3fZTbW9/0rHuD3x+5vc1u1i6eymVXfig9k8HxQ4x6VjnjIePiGn+IVd/1fpseX2Zrj4AMaIH7ur1uHDHgkMMeCIkRsUSgJCjq4jPq9gA+7IuePAbW/i0OV3G6N06twdXTvcOHWuL/wDon2f9BaLMUDsrFdACRySP6RQMUB+iFY9UanVx5KuMCgxkIoCYV7JJJJBSkkkklKSSSSUpJJJJSkkkklKSSSSUpJJJJSkkkklP/9P1RIiU6ZJTAsUTWEVJJSD0gl6QRvuS+5HVSIVBTDFNJBSwEJ0k6SlJJJJKUkkkkpSSSSSlJJJJKUkkkkpSSSSSlJJJJKUkkkkp/9k=") no-repeat;background-size:100%}.ifIjF--televzr-popup-footer{width:195px;margin:22px auto 0;color:#63d0ff;font-size:12px;white-space:normal;font-weight:400}.gmsOg--televzr-popup-btn{text-decoration:none;display:inline-block;line-height:18px;white-space:nowrap;font-size:13px;text-align:center;font-family:Roboto,sans-serif;font-weight:500;margin:0;border-radius:90px;padding:0;overflow:hidden;border:2px solid transparent;background:linear-gradient(270deg,#66d1ff,#35c3ff);background-origin:border-box;text-transform:uppercase;width:171px}.gmsOg--televzr-popup-btn .rQDx6--btn-outer{padding:13px 15px;display:block;background:#f4f3f3}.gmsOg--televzr-popup-btn ._8t04c--btn-inner{background:linear-gradient(270deg,#66d1ff,#35c3ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.gmsOg--televzr-popup-btn ._8t04c--btn-inner svg{margin-top:-2px;margin-right:4px}.gmsOg--televzr-popup-btn:disabled{opacity:.5}.gmsOg--televzr-popup-btn.IoXmT--btn-invert{position:relative;overflow:visible}.gmsOg--televzr-popup-btn.IoXmT--btn-invert:before{content:"";position:absolute;left:10px;right:10px;top:20px;bottom:-1px;background:#6dd3ff;filter:blur(12px);border-radius:100px;box-shadow:0 3px 0 0;color:#67cefb}.gmsOg--televzr-popup-btn.IoXmT--btn-invert .rQDx6--btn-outer{background:transparent;padding:7px 8px;position:relative}.gmsOg--televzr-popup-btn.IoXmT--btn-invert ._8t04c--btn-inner{background:none;-webkit-background-clip:border-box;-webkit-text-fill-color:#fff;color:#fff}.gmsOg--televzr-popup-btn.IoXmT--btn-invert ._8t04c--btn-inner svg path{fill:#fff}.gmsOg--televzr-popup-btn.IoXmT--btn-invert:focus,.gmsOg--televzr-popup-btn.IoXmT--btn-invert:hover{background:linear-gradient(90deg,#66d1ff,#35c3ff)}.gmsOg--televzr-popup-btn.DiiWD--btn-small{font-size:12px;line-height:15px;border-width:1px}.gmsOg--televzr-popup-btn.DiiWD--btn-small .rQDx6--btn-outer{padding:8px 15px;background:#fff}.gmsOg--televzr-popup-btn:focus,.gmsOg--televzr-popup-btn:hover{outline:none}.gmsOg--televzr-popup-btn:focus .rQDx6--btn-outer,.gmsOg--televzr-popup-btn:hover .rQDx6--btn-outer{background:transparent}.gmsOg--televzr-popup-btn:focus ._8t04c--btn-inner,.gmsOg--televzr-popup-btn:hover ._8t04c--btn-inner{background:none;-webkit-background-clip:border-box;-webkit-text-fill-color:#fff;color:#fff}.gmsOg--televzr-popup-btn:focus ._8t04c--btn-inner svg path,.gmsOg--televzr-popup-btn:hover ._8t04c--btn-inner svg path{fill:#fff}a.gmsOg--televzr-popup-btn.IoXmT--btn-invert{text-decoration:none}.EJ9VX--popupAngle{display:inline-block;width:0;position:absolute;z-index:1;border-left-width:0;border-left-style:none;border-top:8px solid transparent;border-right:10px solid #fff;border-bottom:8px solid transparent;border-left-color:initial;border-image:initial;top:8px;left:-9px}.NG62r--popupAngle--shadow{border-right-color:#c0bbbb;border-width:8px 11px 9px 0;z-index:0;top:8px;left:-10px}.O240N--logo{width:19px;height:17px;margin-left:5px;vertical-align:middle}._2NWK3--circle-loader--icon{animation-name:awEUc--spin;animation-duration:5s;animation-iteration-count:infinite;animation-timing-function:linear}.TpwT---icon--check{margin-bottom:-13px!important}.Q6Yy4--icon{width:51px;opacity:.3;margin:0 auto 12px}@keyframes awEUc--spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}', "" ]), 
    o.locals = {
        "item--anchor": "_6BnMg--item--anchor",
        itemAnchor: "_6BnMg--item--anchor",
        "item--container": "uGmA2--item--container",
        itemContainer: "uGmA2--item--container",
        "televzr-popup-container": "TpsJ6--televzr-popup-container",
        televzrPopupContainer: "TpsJ6--televzr-popup-container",
        "televzr-popup": "t+3cf--televzr-popup",
        televzrPopup: "t+3cf--televzr-popup",
        "televzr-popup-header": "DhgbJ--televzr-popup-header",
        televzrPopupHeader: "DhgbJ--televzr-popup-header",
        "televzr-popup-footer": "ifIjF--televzr-popup-footer",
        televzrPopupFooter: "ifIjF--televzr-popup-footer",
        "televzr-popup-btn": "gmsOg--televzr-popup-btn",
        televzrPopupBtn: "gmsOg--televzr-popup-btn",
        "btn-outer": "rQDx6--btn-outer",
        btnOuter: "rQDx6--btn-outer",
        "btn-inner": "_8t04c--btn-inner",
        btnInner: "_8t04c--btn-inner",
        "btn-invert": "IoXmT--btn-invert",
        btnInvert: "IoXmT--btn-invert",
        "btn-small": "DiiWD--btn-small",
        btnSmall: "DiiWD--btn-small",
        popupAngle: "EJ9VX--popupAngle",
        "popupAngle--shadow": "NG62r--popupAngle--shadow",
        popupAngleShadow: "NG62r--popupAngle--shadow",
        logo: "O240N--logo",
        "circle-loader--icon": "_2NWK3--circle-loader--icon",
        circleLoaderIcon: "_2NWK3--circle-loader--icon",
        spin: "awEUc--spin",
        "icon--check": "TpwT---icon--check",
        iconCheck: "TpwT---icon--check",
        icon: "Q6Yy4--icon"
    }, t.default = o;
}, function(e, t, n) {
    "use strict";
    function r(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }
    e.exports = function(e, t, n, i) {
        t = t || "&", n = n || "=";
        var a = {};
        if ("string" != typeof e || 0 === e.length) return a;
        var s = /\+/g;
        e = e.split(t);
        var l = 1e3;
        i && "number" == typeof i.maxKeys && (l = i.maxKeys);
        var u = e.length;
        l > 0 && u > l && (u = l);
        for (var c = 0; c < u; ++c) {
            var d, p, f, h, g = e[c].replace(s, "%20"), A = g.indexOf(n);
            A >= 0 ? (d = g.substr(0, A), p = g.substr(A + 1)) : (d = g, p = ""), f = decodeURIComponent(d), 
            h = decodeURIComponent(p), r(a, f) ? o(a[f]) ? a[f].push(h) : a[f] = [ a[f], h ] : a[f] = h;
        }
        return a;
    };
    var o = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
    };
}, function(e, t, n) {
    "use strict";
    var r = function(e) {
        switch (typeof e) {
          case "string":
            return e;

          case "boolean":
            return e ? "true" : "false";

          case "number":
            return isFinite(e) ? e : "";

          default:
            return "";
        }
    };
    e.exports = function(e, t, n, s) {
        return t = t || "&", n = n || "=", null === e && (e = void 0), "object" == typeof e ? i(a(e), (function(a) {
            var s = encodeURIComponent(r(a)) + n;
            return o(e[a]) ? i(e[a], (function(e) {
                return s + encodeURIComponent(r(e));
            })).join(t) : s + encodeURIComponent(r(e[a]));
        })).join(t) : s ? encodeURIComponent(r(s)) + n + encodeURIComponent(r(e)) : "";
    };
    var o = Array.isArray || function(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
    };
    function i(e, t) {
        if (e.map) return e.map(t);
        for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
        return n;
    }
    var a = Object.keys || function(e) {
        var t = [];
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
        return t;
    };
}, function(e, t, n) {
    (function(t) {
        var r;
        e.exports = (r = r || function(e, r) {
            var o;
            if ("undefined" != typeof window && window.crypto && (o = window.crypto), !o && "undefined" != typeof window && window.msCrypto && (o = window.msCrypto), 
            !o && void 0 !== t && t.crypto && (o = t.crypto), !o) try {
                o = n(!function() {
                    var e = new Error("Cannot find module 'crypto'");
                    throw e.code = "MODULE_NOT_FOUND", e;
                }());
            } catch (e) {}
            var i = function() {
                if (o) {
                    if ("function" == typeof o.getRandomValues) try {
                        return o.getRandomValues(new Uint32Array(1))[0];
                    } catch (e) {}
                    if ("function" == typeof o.randomBytes) try {
                        return o.randomBytes(4).readInt32LE();
                    } catch (e) {}
                }
                throw new Error("Native crypto module could not be used to get secure random number.");
            }, a = Object.create || function() {
                function e() {}
                return function(t) {
                    var n;
                    return e.prototype = t, n = new e, e.prototype = null, n;
                };
            }(), s = {}, l = s.lib = {}, u = l.Base = {
                extend: function(e) {
                    var t = a(this);
                    return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function() {
                        t.$super.init.apply(this, arguments);
                    }), t.init.prototype = t, t.$super = this, t;
                },
                create: function() {
                    var e = this.extend();
                    return e.init.apply(e, arguments), e;
                },
                init: function() {},
                mixIn: function(e) {
                    for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
                    e.hasOwnProperty("toString") && (this.toString = e.toString);
                },
                clone: function() {
                    return this.init.prototype.extend(this);
                }
            }, c = l.WordArray = u.extend({
                init: function(e, t) {
                    e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;
                },
                toString: function(e) {
                    return (e || p).stringify(this);
                },
                concat: function(e) {
                    var t = this.words, n = e.words, r = this.sigBytes, o = e.sigBytes;
                    if (this.clamp(), r % 4) for (var i = 0; i < o; i++) {
                        var a = n[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                        t[r + i >>> 2] |= a << 24 - (r + i) % 4 * 8;
                    } else for (i = 0; i < o; i += 4) t[r + i >>> 2] = n[i >>> 2];
                    return this.sigBytes += o, this;
                },
                clamp: function() {
                    var t = this.words, n = this.sigBytes;
                    t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);
                },
                clone: function() {
                    var e = u.clone.call(this);
                    return e.words = this.words.slice(0), e;
                },
                random: function(e) {
                    for (var t = [], n = 0; n < e; n += 4) t.push(i());
                    return new c.init(t, e);
                }
            }), d = s.enc = {}, p = d.Hex = {
                stringify: function(e) {
                    for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
                        var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                        r.push((i >>> 4).toString(16)), r.push((15 & i).toString(16));
                    }
                    return r.join("");
                },
                parse: function(e) {
                    for (var t = e.length, n = [], r = 0; r < t; r += 2) n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;
                    return new c.init(n, t / 2);
                }
            }, f = d.Latin1 = {
                stringify: function(e) {
                    for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {
                        var i = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                        r.push(String.fromCharCode(i));
                    }
                    return r.join("");
                },
                parse: function(e) {
                    for (var t = e.length, n = [], r = 0; r < t; r++) n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;
                    return new c.init(n, t);
                }
            }, h = d.Utf8 = {
                stringify: function(e) {
                    try {
                        return decodeURIComponent(escape(f.stringify(e)));
                    } catch (e) {
                        throw new Error("Malformed UTF-8 data");
                    }
                },
                parse: function(e) {
                    return f.parse(unescape(encodeURIComponent(e)));
                }
            }, g = l.BufferedBlockAlgorithm = u.extend({
                reset: function() {
                    this._data = new c.init, this._nDataBytes = 0;
                },
                _append: function(e) {
                    "string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
                },
                _process: function(t) {
                    var n, r = this._data, o = r.words, i = r.sigBytes, a = this.blockSize, s = i / (4 * a), l = (s = t ? e.ceil(s) : e.max((0 | s) - this._minBufferSize, 0)) * a, u = e.min(4 * l, i);
                    if (l) {
                        for (var d = 0; d < l; d += a) this._doProcessBlock(o, d);
                        n = o.splice(0, l), r.sigBytes -= u;
                    }
                    return new c.init(n, u);
                },
                clone: function() {
                    var e = u.clone.call(this);
                    return e._data = this._data.clone(), e;
                },
                _minBufferSize: 0
            }), A = (l.Hasher = g.extend({
                cfg: u.extend(),
                init: function(e) {
                    this.cfg = this.cfg.extend(e), this.reset();
                },
                reset: function() {
                    g.reset.call(this), this._doReset();
                },
                update: function(e) {
                    return this._append(e), this._process(), this;
                },
                finalize: function(e) {
                    return e && this._append(e), this._doFinalize();
                },
                blockSize: 16,
                _createHelper: function(e) {
                    return function(t, n) {
                        return new e.init(n).finalize(t);
                    };
                },
                _createHmacHelper: function(e) {
                    return function(t, n) {
                        return new A.HMAC.init(e, n).finalize(t);
                    };
                }
            }), s.algo = {});
            return s;
        }(Math), r);
    }).call(this, n(88));
}, function(e, t) {
    var n;
    n = function() {
        return this;
    }();
    try {
        n = n || new Function("return this")();
    } catch (e) {
        "object" == typeof window && (n = window);
    }
    e.exports = n;
}, , function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(26), o = n.n(r)()(!1);
    o.push([ e.i, "._3Twj---theme-vk .jIjvy--item-container .Ctv\\+P--item{margin-left:0;display:block;white-space:nowrap;position:relative;height:30px;line-height:30px;padding:0 15px;color:#2a5885;outline:none}._3Twj---theme-vk .jIjvy--item-container .Ctv\\+P--item:hover{background-color:#e4eaf0}._3Twj---theme-vk .jIjvy--item-container .Ctv\\+P--item .UpHCg--tooltip{top:0;right:228px;padding:0 10px 3px 6px}._3Twj---theme-vk .jIjvy--item-container .Ctv\\+P--item ._05NcQ--download-bar{position:absolute;top:0;left:0}.iy197--theme-matchtv .jIjvy--item-container{right:185px}.iy197--theme-matchtv .jIjvy--item-container ._05NcQ--download-bar{background-image:linear-gradient(90deg,rgba(8,174,234,.12156862745098039),rgba(42,245,152,.7294117647058823))}.jIjvy--item-container{position:absolute;background:#fff;padding:4px 0;z-index:9999;box-shadow:0 1px 3px rgba(80,80,80,.27058823529411763);border:1px solid #c5d0db;border-radius:4px;font-size:12px;min-width:190px;transition:.5s;margin-left:13px}.jIjvy--item-container .Ctv\\+P--item{position:relative;cursor:pointer;padding-top:5px;padding-bottom:5px;padding-left:9px}.jIjvy--item-container .Ctv\\+P--item:hover{background:#e6e6e6}.jIjvy--item-container .Ctv\\+P--item.A-E28--item-disable{opacity:.8}.jIjvy--item-container .aLjWy--message{padding:3px}.jIjvy--item-container.fnXMd--show{display:block}.jIjvy--item-container._7GemG--hide{display:none}", "" ]), 
    o.locals = {
        "theme-vk": "_3Twj---theme-vk",
        themeVk: "_3Twj---theme-vk",
        "item-container": "jIjvy--item-container",
        itemContainer: "jIjvy--item-container",
        item: "Ctv+P--item",
        tooltip: "UpHCg--tooltip",
        "download-bar": "_05NcQ--download-bar",
        downloadBar: "_05NcQ--download-bar",
        "theme-matchtv": "iy197--theme-matchtv",
        themeMatchtv: "iy197--theme-matchtv",
        "item-disable": "A-E28--item-disable",
        itemDisable: "A-E28--item-disable",
        message: "aLjWy--message",
        show: "fnXMd--show",
        hide: "_7GemG--hide"
    }, t.default = o;
} ] ]);