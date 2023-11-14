var r =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {},
  t = function (r) {
    return r && r.Math == Math && r
  },
  e =
    t('object' == typeof globalThis && globalThis) ||
    t('object' == typeof window && window) ||
    t('object' == typeof self && self) ||
    t('object' == typeof r && r) ||
    (function () {
      return this
    })() ||
    r ||
    Function('return this')(),
  n = {},
  o = function (r) {
    try {
      return !!r()
    } catch (t) {
      return !0
    }
  },
  a = !o(function () {
    return (
      7 !=
      Object.defineProperty({}, 1, {
        get: function () {
          return 7
        }
      })[1]
    )
  }),
  i = !o(function () {
    var r = function () {}.bind()
    return 'function' != typeof r || r.hasOwnProperty('prototype')
  }),
  c = i,
  u = Function.prototype.call,
  f = c
    ? u.bind(u)
    : function () {
        return u.apply(u, arguments)
      },
  s = {},
  l = {}.propertyIsEnumerable,
  y = Object.getOwnPropertyDescriptor,
  p = y && !l.call({ 1: 2 }, 1)
s.f = p
  ? function (r) {
      var t = y(this, r)
      return !!t && t.enumerable
    }
  : l
var d,
  h,
  g = function (r, t) {
    return { enumerable: !(1 & r), configurable: !(2 & r), writable: !(4 & r), value: t }
  },
  b = i,
  v = Function.prototype,
  m = v.call,
  w = b && v.bind.bind(m, m),
  A = b
    ? w
    : function (r) {
        return function () {
          return m.apply(r, arguments)
        }
      },
  E = A,
  O = E({}.toString),
  S = E(''.slice),
  k = function (r) {
    return S(O(r), 8, -1)
  },
  T = o,
  j = k,
  I = Object,
  D = A(''.split),
  R = T(function () {
    return !I('z').propertyIsEnumerable(0)
  })
    ? function (r) {
        return 'String' == j(r) ? D(r, '') : I(r)
      }
    : I,
  M = function (r) {
    return null == r
  },
  x = M,
  P = TypeError,
  C = function (r) {
    if (x(r)) throw P("Can't call method on " + r)
    return r
  },
  F = R,
  L = C,
  _ = function (r) {
    return F(L(r))
  },
  B = 'object' == typeof document && document.all,
  U = { all: B, IS_HTMLDDA: void 0 === B && void 0 !== B },
  z = U.all,
  N = U.IS_HTMLDDA
    ? function (r) {
        return 'function' == typeof r || r === z
      }
    : function (r) {
        return 'function' == typeof r
      },
  V = N,
  W = U.all,
  G = U.IS_HTMLDDA
    ? function (r) {
        return 'object' == typeof r ? null !== r : V(r) || r === W
      }
    : function (r) {
        return 'object' == typeof r ? null !== r : V(r)
      },
  H = e,
  Y = N,
  q = function (r, t) {
    return arguments.length < 2 ? ((e = H[r]), Y(e) ? e : void 0) : H[r] && H[r][t]
    var e
  },
  K = A({}.isPrototypeOf),
  Q = e,
  X = ('undefined' != typeof navigator && String(navigator.userAgent)) || '',
  $ = Q.process,
  J = Q.Deno,
  Z = ($ && $.versions) || (J && J.version),
  rr = Z && Z.v8
rr && (h = (d = rr.split('.'))[0] > 0 && d[0] < 4 ? 1 : +(d[0] + d[1])),
  !h &&
    X &&
    (!(d = X.match(/Edge\/(\d+)/)) || d[1] >= 74) &&
    (d = X.match(/Chrome\/(\d+)/)) &&
    (h = +d[1])
var tr = h,
  er = tr,
  nr = o,
  or = e.String,
  ar =
    !!Object.getOwnPropertySymbols &&
    !nr(function () {
      var r = Symbol()
      return !or(r) || !(Object(r) instanceof Symbol) || (!Symbol.sham && er && er < 41)
    }),
  ir = ar && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
  cr = q,
  ur = N,
  fr = K,
  sr = Object,
  lr = ir
    ? function (r) {
        return 'symbol' == typeof r
      }
    : function (r) {
        var t = cr('Symbol')
        return ur(t) && fr(t.prototype, sr(r))
      },
  yr = String,
  pr = function (r) {
    try {
      return yr(r)
    } catch (t) {
      return 'Object'
    }
  },
  dr = N,
  hr = pr,
  gr = TypeError,
  br = function (r) {
    if (dr(r)) return r
    throw gr(hr(r) + ' is not a function')
  },
  vr = br,
  mr = M,
  wr = function (r, t) {
    var e = r[t]
    return mr(e) ? void 0 : vr(e)
  },
  Ar = f,
  Er = N,
  Or = G,
  Sr = TypeError,
  kr = { exports: {} },
  Tr = e,
  jr = Object.defineProperty,
  Ir = function (r, t) {
    try {
      jr(Tr, r, { value: t, configurable: !0, writable: !0 })
    } catch (e) {
      Tr[r] = t
    }
    return t
  },
  Dr = Ir,
  Rr = '__core-js_shared__',
  Mr = e[Rr] || Dr(Rr, {}),
  xr = Mr
;(kr.exports = function (r, t) {
  return xr[r] || (xr[r] = void 0 !== t ? t : {})
})('versions', []).push({
  version: '3.31.1',
  mode: 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.31.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
})
var Pr = kr.exports,
  Cr = C,
  Fr = Object,
  Lr = function (r) {
    return Fr(Cr(r))
  },
  _r = Lr,
  Br = A({}.hasOwnProperty),
  Ur =
    Object.hasOwn ||
    function (r, t) {
      return Br(_r(r), t)
    },
  zr = A,
  Nr = 0,
  Vr = Math.random(),
  Wr = zr((1).toString),
  Gr = function (r) {
    return 'Symbol(' + (void 0 === r ? '' : r) + ')_' + Wr(++Nr + Vr, 36)
  },
  Hr = Pr,
  Yr = Ur,
  qr = Gr,
  Kr = ar,
  Qr = ir,
  Xr = e.Symbol,
  $r = Hr('wks'),
  Jr = Qr ? Xr.for || Xr : (Xr && Xr.withoutSetter) || qr,
  Zr = function (r) {
    return Yr($r, r) || ($r[r] = Kr && Yr(Xr, r) ? Xr[r] : Jr('Symbol.' + r)), $r[r]
  },
  rt = f,
  tt = G,
  et = lr,
  nt = wr,
  ot = function (r, t) {
    var e, n
    if ('string' === t && Er((e = r.toString)) && !Or((n = Ar(e, r)))) return n
    if (Er((e = r.valueOf)) && !Or((n = Ar(e, r)))) return n
    if ('string' !== t && Er((e = r.toString)) && !Or((n = Ar(e, r)))) return n
    throw Sr("Can't convert object to primitive value")
  },
  at = TypeError,
  it = Zr('toPrimitive'),
  ct = function (r, t) {
    if (!tt(r) || et(r)) return r
    var e,
      n = nt(r, it)
    if (n) {
      if ((void 0 === t && (t = 'default'), (e = rt(n, r, t)), !tt(e) || et(e))) return e
      throw at("Can't convert object to primitive value")
    }
    return void 0 === t && (t = 'number'), ot(r, t)
  },
  ut = lr,
  ft = function (r) {
    var t = ct(r, 'string')
    return ut(t) ? t : t + ''
  },
  st = G,
  lt = e.document,
  yt = st(lt) && st(lt.createElement),
  pt = function (r) {
    return yt ? lt.createElement(r) : {}
  },
  dt = pt,
  ht =
    !a &&
    !o(function () {
      return (
        7 !=
        Object.defineProperty(dt('div'), 'a', {
          get: function () {
            return 7
          }
        }).a
      )
    }),
  gt = a,
  bt = f,
  vt = s,
  mt = g,
  wt = _,
  At = ft,
  Et = Ur,
  Ot = ht,
  St = Object.getOwnPropertyDescriptor
n.f = gt
  ? St
  : function (r, t) {
      if (((r = wt(r)), (t = At(t)), Ot))
        try {
          return St(r, t)
        } catch (e) {}
      if (Et(r, t)) return mt(!bt(vt.f, r, t), r[t])
    }
var kt = {},
  Tt =
    a &&
    o(function () {
      return (
        42 !=
        Object.defineProperty(function () {}, 'prototype', { value: 42, writable: !1 }).prototype
      )
    }),
  jt = G,
  It = String,
  Dt = TypeError,
  Rt = function (r) {
    if (jt(r)) return r
    throw Dt(It(r) + ' is not an object')
  },
  Mt = a,
  xt = ht,
  Pt = Tt,
  Ct = Rt,
  Ft = ft,
  Lt = TypeError,
  _t = Object.defineProperty,
  Bt = Object.getOwnPropertyDescriptor,
  Ut = 'enumerable',
  zt = 'configurable',
  Nt = 'writable'
kt.f = Mt
  ? Pt
    ? function (r, t, e) {
        if (
          (Ct(r),
          (t = Ft(t)),
          Ct(e),
          'function' == typeof r && 'prototype' === t && 'value' in e && Nt in e && !e[Nt])
        ) {
          var n = Bt(r, t)
          n &&
            n[Nt] &&
            ((r[t] = e.value),
            (e = {
              configurable: zt in e ? e[zt] : n[zt],
              enumerable: Ut in e ? e[Ut] : n[Ut],
              writable: !1
            }))
        }
        return _t(r, t, e)
      }
    : _t
  : function (r, t, e) {
      if ((Ct(r), (t = Ft(t)), Ct(e), xt))
        try {
          return _t(r, t, e)
        } catch (n) {}
      if ('get' in e || 'set' in e) throw Lt('Accessors not supported')
      return 'value' in e && (r[t] = e.value), r
    }
var Vt = kt,
  Wt = g,
  Gt = a
    ? function (r, t, e) {
        return Vt.f(r, t, Wt(1, e))
      }
    : function (r, t, e) {
        return (r[t] = e), r
      },
  Ht = { exports: {} },
  Yt = a,
  qt = Ur,
  Kt = Function.prototype,
  Qt = Yt && Object.getOwnPropertyDescriptor,
  Xt = qt(Kt, 'name'),
  $t = {
    EXISTS: Xt,
    PROPER: Xt && 'something' === function () {}.name,
    CONFIGURABLE: Xt && (!Yt || (Yt && Qt(Kt, 'name').configurable))
  },
  Jt = N,
  Zt = Mr,
  re = A(Function.toString)
Jt(Zt.inspectSource) ||
  (Zt.inspectSource = function (r) {
    return re(r)
  })
var te,
  ee,
  ne,
  oe = Zt.inspectSource,
  ae = N,
  ie = e.WeakMap,
  ce = ae(ie) && /native code/.test(String(ie)),
  ue = Gr,
  fe = Pr('keys'),
  se = function (r) {
    return fe[r] || (fe[r] = ue(r))
  },
  le = {},
  ye = ce,
  pe = e,
  de = G,
  he = Gt,
  ge = Ur,
  be = Mr,
  ve = se,
  me = le,
  we = 'Object already initialized',
  Ae = pe.TypeError,
  Ee = pe.WeakMap
if (ye || be.state) {
  var Oe = be.state || (be.state = new Ee())
  ;(Oe.get = Oe.get),
    (Oe.has = Oe.has),
    (Oe.set = Oe.set),
    (te = function (r, t) {
      if (Oe.has(r)) throw Ae(we)
      return (t.facade = r), Oe.set(r, t), t
    }),
    (ee = function (r) {
      return Oe.get(r) || {}
    }),
    (ne = function (r) {
      return Oe.has(r)
    })
} else {
  var Se = ve('state')
  ;(me[Se] = !0),
    (te = function (r, t) {
      if (ge(r, Se)) throw Ae(we)
      return (t.facade = r), he(r, Se, t), t
    }),
    (ee = function (r) {
      return ge(r, Se) ? r[Se] : {}
    }),
    (ne = function (r) {
      return ge(r, Se)
    })
}
var ke = {
    set: te,
    get: ee,
    has: ne,
    enforce: function (r) {
      return ne(r) ? ee(r) : te(r, {})
    },
    getterFor: function (r) {
      return function (t) {
        var e
        if (!de(t) || (e = ee(t)).type !== r) throw Ae('Incompatible receiver, ' + r + ' required')
        return e
      }
    }
  },
  Te = A,
  je = o,
  Ie = N,
  De = Ur,
  Re = a,
  Me = $t.CONFIGURABLE,
  xe = oe,
  Pe = ke.enforce,
  Ce = ke.get,
  Fe = String,
  Le = Object.defineProperty,
  _e = Te(''.slice),
  Be = Te(''.replace),
  Ue = Te([].join),
  ze =
    Re &&
    !je(function () {
      return 8 !== Le(function () {}, 'length', { value: 8 }).length
    }),
  Ne = String(String).split('String'),
  Ve = (Ht.exports = function (r, t, e) {
    'Symbol(' === _e(Fe(t), 0, 7) && (t = '[' + Be(Fe(t), /^Symbol\(([^)]*)\)/, '$1') + ']'),
      e && e.getter && (t = 'get ' + t),
      e && e.setter && (t = 'set ' + t),
      (!De(r, 'name') || (Me && r.name !== t)) &&
        (Re ? Le(r, 'name', { value: t, configurable: !0 }) : (r.name = t)),
      ze && e && De(e, 'arity') && r.length !== e.arity && Le(r, 'length', { value: e.arity })
    try {
      e && De(e, 'constructor') && e.constructor
        ? Re && Le(r, 'prototype', { writable: !1 })
        : r.prototype && (r.prototype = void 0)
    } catch (o) {}
    var n = Pe(r)
    return De(n, 'source') || (n.source = Ue(Ne, 'string' == typeof t ? t : '')), r
  })
Function.prototype.toString = Ve(function () {
  return (Ie(this) && Ce(this).source) || xe(this)
}, 'toString')
var We = Ht.exports,
  Ge = N,
  He = kt,
  Ye = We,
  qe = Ir,
  Ke = function (r, t, e, n) {
    n || (n = {})
    var o = n.enumerable,
      a = void 0 !== n.name ? n.name : t
    if ((Ge(e) && Ye(e, a, n), n.global)) o ? (r[t] = e) : qe(t, e)
    else {
      try {
        n.unsafe ? r[t] && (o = !0) : delete r[t]
      } catch (i) {}
      o
        ? (r[t] = e)
        : He.f(r, t, {
            value: e,
            enumerable: !1,
            configurable: !n.nonConfigurable,
            writable: !n.nonWritable
          })
    }
    return r
  },
  Qe = {},
  Xe = Math.ceil,
  $e = Math.floor,
  Je =
    Math.trunc ||
    function (r) {
      var t = +r
      return (t > 0 ? $e : Xe)(t)
    },
  Ze = function (r) {
    var t = +r
    return t != t || 0 === t ? 0 : Je(t)
  },
  rn = Ze,
  tn = Math.max,
  en = Math.min,
  nn = Ze,
  on = Math.min,
  an = function (r) {
    return r > 0 ? on(nn(r), 9007199254740991) : 0
  },
  cn = function (r) {
    return an(r.length)
  },
  un = _,
  fn = function (r, t) {
    var e = rn(r)
    return e < 0 ? tn(e + t, 0) : en(e, t)
  },
  sn = cn,
  ln = function (r) {
    return function (t, e, n) {
      var o,
        a = un(t),
        i = sn(a),
        c = fn(n, i)
      if (r && e != e) {
        for (; i > c; ) if ((o = a[c++]) != o) return !0
      } else for (; i > c; c++) if ((r || c in a) && a[c] === e) return r || c || 0
      return !r && -1
    }
  },
  yn = { includes: ln(!0), indexOf: ln(!1) },
  pn = Ur,
  dn = _,
  hn = yn.indexOf,
  gn = le,
  bn = A([].push),
  vn = function (r, t) {
    var e,
      n = dn(r),
      o = 0,
      a = []
    for (e in n) !pn(gn, e) && pn(n, e) && bn(a, e)
    for (; t.length > o; ) pn(n, (e = t[o++])) && (~hn(a, e) || bn(a, e))
    return a
  },
  mn = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ],
  wn = vn,
  An = mn.concat('length', 'prototype')
Qe.f =
  Object.getOwnPropertyNames ||
  function (r) {
    return wn(r, An)
  }
var En = {}
En.f = Object.getOwnPropertySymbols
var On = q,
  Sn = Qe,
  kn = En,
  Tn = Rt,
  jn = A([].concat),
  In =
    On('Reflect', 'ownKeys') ||
    function (r) {
      var t = Sn.f(Tn(r)),
        e = kn.f
      return e ? jn(t, e(r)) : t
    },
  Dn = Ur,
  Rn = In,
  Mn = n,
  xn = kt,
  Pn = function (r, t, e) {
    for (var n = Rn(t), o = xn.f, a = Mn.f, i = 0; i < n.length; i++) {
      var c = n[i]
      Dn(r, c) || (e && Dn(e, c)) || o(r, c, a(t, c))
    }
  },
  Cn = o,
  Fn = N,
  Ln = /#|\.prototype\./,
  _n = function (r, t) {
    var e = Un[Bn(r)]
    return e == Nn || (e != zn && (Fn(t) ? Cn(t) : !!t))
  },
  Bn = (_n.normalize = function (r) {
    return String(r).replace(Ln, '.').toLowerCase()
  }),
  Un = (_n.data = {}),
  zn = (_n.NATIVE = 'N'),
  Nn = (_n.POLYFILL = 'P'),
  Vn = _n,
  Wn = e,
  Gn = n.f,
  Hn = Gt,
  Yn = Ke,
  qn = Ir,
  Kn = Pn,
  Qn = Vn,
  Xn = function (r, t) {
    var e,
      n,
      o,
      a,
      i,
      c = r.target,
      u = r.global,
      f = r.stat
    if ((e = u ? Wn : f ? Wn[c] || qn(c, {}) : (Wn[c] || {}).prototype))
      for (n in t) {
        if (
          ((a = t[n]),
          (o = r.dontCallGetSet ? (i = Gn(e, n)) && i.value : e[n]),
          !Qn(u ? n : c + (f ? '.' : '#') + n, r.forced) && void 0 !== o)
        ) {
          if (typeof a == typeof o) continue
          Kn(a, o)
        }
        ;(r.sham || (o && o.sham)) && Hn(a, 'sham', !0), Yn(e, n, a, r)
      }
  },
  $n = {}
$n[Zr('toStringTag')] = 'z'
var Jn = '[object z]' === String($n),
  Zn = N,
  ro = k,
  to = Zr('toStringTag'),
  eo = Object,
  no =
    'Arguments' ==
    ro(
      (function () {
        return arguments
      })()
    ),
  oo = Jn
    ? ro
    : function (r) {
        var t, e, n
        return void 0 === r
          ? 'Undefined'
          : null === r
          ? 'Null'
          : 'string' ==
            typeof (e = (function (r, t) {
              try {
                return r[t]
              } catch (e) {}
            })((t = eo(r)), to))
          ? e
          : no
          ? ro(t)
          : 'Object' == (n = ro(t)) && Zn(t.callee)
          ? 'Arguments'
          : n
      },
  ao = A,
  io = o,
  co = N,
  uo = oo,
  fo = oe,
  so = function () {},
  lo = [],
  yo = q('Reflect', 'construct'),
  po = /^\s*(?:class|function)\b/,
  ho = ao(po.exec),
  go = !po.exec(so),
  bo = function (r) {
    if (!co(r)) return !1
    try {
      return yo(so, lo, r), !0
    } catch (t) {
      return !1
    }
  },
  vo = function (r) {
    if (!co(r)) return !1
    switch (uo(r)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction':
        return !1
    }
    try {
      return go || !!ho(po, fo(r))
    } catch (t) {
      return !0
    }
  }
vo.sham = !0
var mo,
  wo =
    !yo ||
    io(function () {
      var r
      return (
        bo(bo.call) ||
        !bo(Object) ||
        !bo(function () {
          r = !0
        }) ||
        r
      )
    })
      ? vo
      : bo,
  Ao = k,
  Eo = A,
  Oo = function (r) {
    if ('Function' === Ao(r)) return Eo(r)
  },
  So = br,
  ko = i,
  To = Oo(Oo.bind),
  jo = function (r, t) {
    return (
      So(r),
      void 0 === t
        ? r
        : ko
        ? To(r, t)
        : function () {
            return r.apply(t, arguments)
          }
    )
  },
  Io = {},
  Do = Io,
  Ro = Zr('iterator'),
  Mo = Array.prototype,
  xo = oo,
  Po = wr,
  Co = M,
  Fo = Io,
  Lo = Zr('iterator'),
  _o = function (r) {
    if (!Co(r)) return Po(r, Lo) || Po(r, '@@iterator') || Fo[xo(r)]
  },
  Bo = f,
  Uo = br,
  zo = Rt,
  No = pr,
  Vo = _o,
  Wo = TypeError,
  Go = f,
  Ho = Rt,
  Yo = wr,
  qo = jo,
  Ko = f,
  Qo = Rt,
  Xo = pr,
  $o = function (r) {
    return void 0 !== r && (Do.Array === r || Mo[Ro] === r)
  },
  Jo = cn,
  Zo = K,
  ra = function (r, t) {
    var e = arguments.length < 2 ? Vo(r) : t
    if (Uo(e)) return zo(Bo(e, r))
    throw Wo(No(r) + ' is not iterable')
  },
  ta = _o,
  ea = function (r, t, e) {
    var n, o
    Ho(r)
    try {
      if (!(n = Yo(r, 'return'))) {
        if ('throw' === t) throw e
        return e
      }
      n = Go(n, r)
    } catch (a) {
      ;(o = !0), (n = a)
    }
    if ('throw' === t) throw e
    if (o) throw n
    return Ho(n), e
  },
  na = TypeError,
  oa = function (r, t) {
    ;(this.stopped = r), (this.result = t)
  },
  aa = oa.prototype,
  ia = function (r, t, e) {
    var n,
      o,
      a,
      i,
      c,
      u,
      f,
      s = e && e.that,
      l = !(!e || !e.AS_ENTRIES),
      y = !(!e || !e.IS_RECORD),
      p = !(!e || !e.IS_ITERATOR),
      d = !(!e || !e.INTERRUPTED),
      h = qo(t, s),
      g = function (r) {
        return n && ea(n, 'normal', r), new oa(!0, r)
      },
      b = function (r) {
        return l ? (Qo(r), d ? h(r[0], r[1], g) : h(r[0], r[1])) : d ? h(r, g) : h(r)
      }
    if (y) n = r.iterator
    else if (p) n = r
    else {
      if (!(o = ta(r))) throw na(Xo(r) + ' is not iterable')
      if ($o(o)) {
        for (a = 0, i = Jo(r); i > a; a++) if ((c = b(r[a])) && Zo(aa, c)) return c
        return new oa(!1)
      }
      n = ra(r, o)
    }
    for (u = y ? r.next : n.next; !(f = Ko(u, n)).done; ) {
      try {
        c = b(f.value)
      } catch (v) {
        ea(n, 'throw', v)
      }
      if ('object' == typeof c && c && Zo(aa, c)) return c
    }
    return new oa(!1)
  },
  ca = ft,
  ua = kt,
  fa = g,
  sa = TypeError,
  la = Rt,
  ya = f,
  pa = Ur,
  da = K,
  ha = function () {
    var r = la(this),
      t = ''
    return (
      r.hasIndices && (t += 'd'),
      r.global && (t += 'g'),
      r.ignoreCase && (t += 'i'),
      r.multiline && (t += 'm'),
      r.dotAll && (t += 's'),
      r.unicode && (t += 'u'),
      r.unicodeSets && (t += 'v'),
      r.sticky && (t += 'y'),
      t
    )
  },
  ga = RegExp.prototype,
  ba = A,
  va = Map.prototype,
  ma = {
    Map: Map,
    set: ba(va.set),
    get: ba(va.get),
    has: ba(va.has),
    remove: ba(va.delete),
    proto: va
  },
  wa = A,
  Aa = Set.prototype,
  Ea = { Set: Set, add: wa(Aa.add), has: wa(Aa.has), remove: wa(Aa.delete), proto: Aa },
  Oa = g,
  Sa = !o(function () {
    var r = Error('a')
    return !('stack' in r) || (Object.defineProperty(r, 'stack', Oa(1, 7)), 7 !== r.stack)
  }),
  ka = 'object' == typeof Deno && Deno && 'object' == typeof Deno.version,
  Ta = 'undefined' != typeof process && 'process' == k(process),
  ja = !ka && !Ta && 'object' == typeof window && 'object' == typeof document,
  Ia = o,
  Da = tr,
  Ra = ja,
  Ma = ka,
  xa = Ta,
  Pa = e.structuredClone,
  Ca =
    !!Pa &&
    !Ia(function () {
      if ((Ma && Da > 92) || (xa && Da > 94) || (Ra && Da > 97)) return !1
      var r = new ArrayBuffer(8),
        t = Pa(r, { transfer: [r] })
      return 0 != r.byteLength || 8 != t.byteLength
    }),
  Fa = Xn,
  La = e,
  _a = q,
  Ba = A,
  Ua = o,
  za = Gr,
  Na = N,
  Va = wo,
  Wa = M,
  Ga = G,
  Ha = lr,
  Ya = ia,
  qa = Rt,
  Ka = oo,
  Qa = Ur,
  Xa = function (r, t, e) {
    var n = ca(t)
    n in r ? ua.f(r, n, fa(0, e)) : (r[n] = e)
  },
  $a = Gt,
  Ja = cn,
  Za = function (r, t) {
    if (r < t) throw sa('Not enough arguments')
    return r
  },
  ri = function (r) {
    var t = r.flags
    return void 0 !== t || 'flags' in ga || pa(r, 'flags') || !da(ga, r) ? t : ya(ha, r)
  },
  ti = ma,
  ei = Ea,
  ni = Sa,
  oi = Ca,
  ai = La.Object,
  ii = La.Array,
  ci = La.Date,
  ui = La.Error,
  fi = La.EvalError,
  si = La.RangeError,
  li = La.ReferenceError,
  yi = La.SyntaxError,
  pi = La.TypeError,
  di = La.URIError,
  hi = La.PerformanceMark,
  gi = La.WebAssembly,
  bi = (gi && gi.CompileError) || ui,
  vi = (gi && gi.LinkError) || ui,
  mi = (gi && gi.RuntimeError) || ui,
  wi = _a('DOMException'),
  Ai = ti.Map,
  Ei = ti.has,
  Oi = ti.get,
  Si = ti.set,
  ki = ei.Set,
  Ti = ei.add,
  ji = _a('Object', 'keys'),
  Ii = Ba([].push),
  Di = Ba((!0).valueOf),
  Ri = Ba((1).valueOf),
  Mi = Ba(''.valueOf),
  xi = Ba(ci.prototype.getTime),
  Pi = za('structuredClone'),
  Ci = 'DataCloneError',
  Fi = 'Transferring',
  Li = function (r) {
    return (
      !Ua(function () {
        var t = new La.Set([7]),
          e = r(t),
          n = r(ai(7))
        return e == t || !e.has(7) || 'object' != typeof n || 7 != n
      }) && r
    )
  },
  _i = function (r, t) {
    return !Ua(function () {
      var e = new t(),
        n = r({ a: e, b: e })
      return !(n && n.a === n.b && n.a instanceof t && n.a.stack === e.stack)
    })
  },
  Bi = La.structuredClone,
  Ui =
    !_i(Bi, ui) ||
    !_i(Bi, wi) ||
    ((mo = Bi),
    !!Ua(function () {
      var r = mo(new La.AggregateError([1], Pi, { cause: 3 }))
      return 'AggregateError' != r.name || 1 != r.errors[0] || r.message != Pi || 3 != r.cause
    })),
  zi =
    !Bi &&
    Li(function (r) {
      return new hi(Pi, { detail: r }).detail
    }),
  Ni = Li(Bi) || zi,
  Vi = function (r) {
    throw new wi('Uncloneable type: ' + r, Ci)
  },
  Wi = function (r, t) {
    throw new wi(
      (t || 'Cloning') + ' of ' + r + ' cannot be properly polyfilled in this engine',
      Ci
    )
  },
  Gi = function (r, t) {
    return Ni || Wi(t), Ni(r)
  },
  Hi = function (r, t, e) {
    if (Ei(t, r)) return Oi(t, r)
    var n, o, a, i, c, u
    if ('SharedArrayBuffer' === (e || Ka(r))) n = Ni ? Ni(r) : r
    else {
      var f = La.DataView
      f || 'function' == typeof r.slice || Wi('ArrayBuffer')
      try {
        if ('function' != typeof r.slice || r.resizable) {
          ;(o = r.byteLength),
            (a = 'maxByteLength' in r ? { maxByteLength: r.maxByteLength } : void 0),
            (n = new ArrayBuffer(o, a)),
            (i = new f(r)),
            (c = new f(n))
          for (u = 0; u < o; u++) c.setUint8(u, i.getUint8(u))
        } else n = r.slice(0)
      } catch (s) {
        throw new wi('ArrayBuffer is detached', Ci)
      }
    }
    return Si(t, r, n), n
  },
  Yi = function (r, t, e, n, o) {
    var a = La[t]
    return Ga(a) || Wi(t), new a(Hi(r.buffer, o), e, n)
  },
  qi = function (r, t, e) {
    ;(this.object = r), (this.type = t), (this.metadata = e)
  },
  Ki = function (r, t, e) {
    if ((Ha(r) && Vi('Symbol'), !Ga(r))) return r
    if (t) {
      if (Ei(t, r)) return Oi(t, r)
    } else t = new Ai()
    var n,
      o,
      a,
      i,
      c,
      u,
      f,
      s,
      l = Ka(r)
    switch (l) {
      case 'Array':
        a = ii(Ja(r))
        break
      case 'Object':
        a = {}
        break
      case 'Map':
        a = new Ai()
        break
      case 'Set':
        a = new ki()
        break
      case 'RegExp':
        a = new RegExp(r.source, ri(r))
        break
      case 'Error':
        switch ((o = r.name)) {
          case 'AggregateError':
            a = _a('AggregateError')([])
            break
          case 'EvalError':
            a = fi()
            break
          case 'RangeError':
            a = si()
            break
          case 'ReferenceError':
            a = li()
            break
          case 'SyntaxError':
            a = yi()
            break
          case 'TypeError':
            a = pi()
            break
          case 'URIError':
            a = di()
            break
          case 'CompileError':
            a = bi()
            break
          case 'LinkError':
            a = vi()
            break
          case 'RuntimeError':
            a = mi()
            break
          default:
            a = ui()
        }
        break
      case 'DOMException':
        a = new wi(r.message, r.name)
        break
      case 'ArrayBuffer':
      case 'SharedArrayBuffer':
        a = e ? new qi(r, l) : Hi(r, t, l)
        break
      case 'DataView':
      case 'Int8Array':
      case 'Uint8Array':
      case 'Uint8ClampedArray':
      case 'Int16Array':
      case 'Uint16Array':
      case 'Int32Array':
      case 'Uint32Array':
      case 'Float16Array':
      case 'Float32Array':
      case 'Float64Array':
      case 'BigInt64Array':
      case 'BigUint64Array':
        ;(u = 'DataView' === l ? r.byteLength : r.length),
          (a = e ? new qi(r, l, { offset: r.byteOffset, length: u }) : Yi(r, l, r.byteOffset, u, t))
        break
      case 'DOMQuad':
        try {
          a = new DOMQuad(Ki(r.p1, t, e), Ki(r.p2, t, e), Ki(r.p3, t, e), Ki(r.p4, t, e))
        } catch (y) {
          a = Gi(r, l)
        }
        break
      case 'File':
        if (Ni)
          try {
            ;(a = Ni(r)), Ka(a) !== l && (a = void 0)
          } catch (y) {}
        if (!a)
          try {
            a = new File([r], r.name, r)
          } catch (y) {}
        a || Wi(l)
        break
      case 'FileList':
        if (
          (i = (function () {
            var r
            try {
              r = new La.DataTransfer()
            } catch (y) {
              try {
                r = new La.ClipboardEvent('').clipboardData
              } catch (t) {}
            }
            return r && r.items && r.files ? r : null
          })())
        ) {
          for (c = 0, u = Ja(r); c < u; c++) i.items.add(Ki(r[c], t, e))
          a = i.files
        } else a = Gi(r, l)
        break
      case 'ImageData':
        try {
          a = new ImageData(Ki(r.data, t, e), r.width, r.height, { colorSpace: r.colorSpace })
        } catch (y) {
          a = Gi(r, l)
        }
        break
      default:
        if (Ni) a = Ni(r)
        else
          switch (l) {
            case 'BigInt':
              a = ai(r.valueOf())
              break
            case 'Boolean':
              a = ai(Di(r))
              break
            case 'Number':
              a = ai(Ri(r))
              break
            case 'String':
              a = ai(Mi(r))
              break
            case 'Date':
              a = new ci(xi(r))
              break
            case 'Blob':
              try {
                a = r.slice(0, r.size, r.type)
              } catch (y) {
                Wi(l)
              }
              break
            case 'DOMPoint':
            case 'DOMPointReadOnly':
              n = La[l]
              try {
                a = n.fromPoint ? n.fromPoint(r) : new n(r.x, r.y, r.z, r.w)
              } catch (y) {
                Wi(l)
              }
              break
            case 'DOMRect':
            case 'DOMRectReadOnly':
              n = La[l]
              try {
                a = n.fromRect ? n.fromRect(r) : new n(r.x, r.y, r.width, r.height)
              } catch (y) {
                Wi(l)
              }
              break
            case 'DOMMatrix':
            case 'DOMMatrixReadOnly':
              n = La[l]
              try {
                a = n.fromMatrix ? n.fromMatrix(r) : new n(r)
              } catch (y) {
                Wi(l)
              }
              break
            case 'AudioData':
            case 'VideoFrame':
              Na(r.clone) || Wi(l)
              try {
                a = r.clone()
              } catch (y) {
                Vi(l)
              }
              break
            case 'CropTarget':
            case 'CryptoKey':
            case 'FileSystemDirectoryHandle':
            case 'FileSystemFileHandle':
            case 'FileSystemHandle':
            case 'GPUCompilationInfo':
            case 'GPUCompilationMessage':
            case 'ImageBitmap':
            case 'RTCCertificate':
            case 'WebAssembly.Module':
              Wi(l)
            default:
              Vi(l)
          }
    }
    switch ((Si(t, r, a), l)) {
      case 'Array':
      case 'Object':
        for (f = ji(r), c = 0, u = Ja(f); c < u; c++) (s = f[c]), Xa(a, s, Ki(r[s], t, e))
        break
      case 'Map':
        r.forEach(function (r, n) {
          Si(a, Ki(n, t, e), Ki(r, t, e))
        })
        break
      case 'Set':
        r.forEach(function (r) {
          Ti(a, Ki(r, t, e))
        })
        break
      case 'Error':
        $a(a, 'message', Ki(r.message, t, e)),
          Qa(r, 'cause') && $a(a, 'cause', Ki(r.cause, t, e)),
          'AggregateError' == o && (a.errors = Ki(r.errors, t, e))
      case 'DOMException':
        ni && $a(a, 'stack', Ki(r.stack, t, e))
    }
    return a
  },
  Qi = function (r, t) {
    if (!Ga(r)) return r
    if (Ei(t, r)) return Oi(t, r)
    var e, n, o, a, i, c, u, f
    if (r instanceof qi)
      switch (((e = r.type), (n = r.object), e)) {
        case 'ArrayBuffer':
        case 'SharedArrayBuffer':
          f = Hi(n, t, e)
          break
        case 'DataView':
        case 'Int8Array':
        case 'Uint8Array':
        case 'Uint8ClampedArray':
        case 'Int16Array':
        case 'Uint16Array':
        case 'Int32Array':
        case 'Uint32Array':
        case 'Float16Array':
        case 'Float32Array':
        case 'Float64Array':
        case 'BigInt64Array':
        case 'BigUint64Array':
          ;(o = r.metadata), (f = Yi(n, e, o.offset, o.length, t))
      }
    else
      switch (Ka(r)) {
        case 'Array':
        case 'Object':
          for (c = ji(r), a = 0, i = Ja(c); a < i; a++) r[(u = c[a])] = Qi(r[u], t)
          break
        case 'Map':
          ;(f = new Ai()),
            r.forEach(function (r, e) {
              Si(f, Qi(e, t), Qi(r, t))
            })
          break
        case 'Set':
          ;(f = new ki()),
            r.forEach(function (r) {
              Ti(f, Qi(r, t))
            })
          break
        case 'Error':
          ;(r.message = Qi(r.message, t)),
            Qa(r, 'cause') && (r.cause = Qi(r.cause, t)),
            'AggregateError' == r.name && (r.errors = Qi(r.errors, t))
        case 'DOMException':
          ni && (r.stack = Qi(r.stack, t))
      }
    return Si(t, r, f || r), f || r
  }
Fa(
  { global: !0, enumerable: !0, sham: !oi, forced: Ui },
  {
    structuredClone: function (r) {
      var t,
        e,
        n = Za(arguments.length, 1) > 1 && !Wa(arguments[1]) ? qa(arguments[1]) : void 0,
        o = n ? n.transfer : void 0,
        a = !1
      void 0 !== o &&
        ((e = (function (r, t) {
          if (!Ga(r)) throw pi('Transfer option cannot be converted to a sequence')
          var e = []
          Ya(r, function (r) {
            Ii(e, qa(r))
          })
          for (var n, o, a, i, c, u = 0, f = Ja(e), s = []; u < f; )
            if (((n = e[u++]), 'ArrayBuffer' !== (o = Ka(n)))) {
              if (Ei(t, n)) throw new wi('Duplicate transferable', Ci)
              if (oi) i = Bi(n, { transfer: [n] })
              else
                switch (o) {
                  case 'ImageBitmap':
                    ;(a = La.OffscreenCanvas), Va(a) || Wi(o, Fi)
                    try {
                      ;(c = new a(n.width, n.height))
                        .getContext('bitmaprenderer')
                        .transferFromImageBitmap(n),
                        (i = c.transferToImageBitmap())
                    } catch (l) {}
                    break
                  case 'AudioData':
                  case 'VideoFrame':
                    ;(Na(n.clone) && Na(n.close)) || Wi(o, Fi)
                    try {
                      ;(i = n.clone()), n.close()
                    } catch (l) {}
                    break
                  case 'MediaSourceHandle':
                  case 'MessagePort':
                  case 'OffscreenCanvas':
                  case 'ReadableStream':
                  case 'TransformStream':
                  case 'WritableStream':
                    Wi(o, Fi)
                }
              if (void 0 === i) throw new wi('This object cannot be transferred: ' + o, Ci)
              Si(t, n, i)
            } else Ii(s, n)
          return s
        })(o, (t = new Ai()))),
        (a = !!Ja(e)))
      var i = Ki(r, t, a)
      return (
        a &&
          ((function (r, t) {
            for (var e, n, o = 0, a = Ja(r); o < a; ) {
              if (((e = r[o++]), Ei(t, e))) throw new wi('Duplicate transferable', Ci)
              oi
                ? (n = Bi(e, { transfer: [e] }))
                : (Na(e.transfer) || Wi('ArrayBuffer', Fi), (n = e.transfer())),
                Si(t, e, n)
            }
          })(o, (t = new Ai())),
          (i = Qi(i, t))),
        i
      )
    }
  }
)
var Xi = jo,
  $i = R,
  Ji = Lr,
  Zi = cn,
  rc = function (r) {
    var t = 1 == r
    return function (e, n, o) {
      for (var a, i = Ji(e), c = $i(i), u = Xi(n, o), f = Zi(c); f-- > 0; )
        if (u((a = c[f]), f, i))
          switch (r) {
            case 0:
              return a
            case 1:
              return f
          }
      return t ? -1 : void 0
    }
  },
  tc = { findLast: rc(0), findLastIndex: rc(1) },
  ec = {},
  nc = vn,
  oc = mn,
  ac =
    Object.keys ||
    function (r) {
      return nc(r, oc)
    },
  ic = a,
  cc = Tt,
  uc = kt,
  fc = Rt,
  sc = _,
  lc = ac
ec.f =
  ic && !cc
    ? Object.defineProperties
    : function (r, t) {
        fc(r)
        for (var e, n = sc(t), o = lc(t), a = o.length, i = 0; a > i; ) uc.f(r, (e = o[i++]), n[e])
        return r
      }
var yc,
  pc = q('document', 'documentElement'),
  dc = Rt,
  hc = ec,
  gc = mn,
  bc = le,
  vc = pc,
  mc = pt,
  wc = 'prototype',
  Ac = 'script',
  Ec = se('IE_PROTO'),
  Oc = function () {},
  Sc = function (r) {
    return '<' + Ac + '>' + r + '</' + Ac + '>'
  },
  kc = function (r) {
    r.write(Sc('')), r.close()
    var t = r.parentWindow.Object
    return (r = null), t
  },
  Tc = function () {
    try {
      yc = new ActiveXObject('htmlfile')
    } catch (o) {}
    var r, t, e
    Tc =
      'undefined' != typeof document
        ? document.domain && yc
          ? kc(yc)
          : ((t = mc('iframe')),
            (e = 'java' + Ac + ':'),
            (t.style.display = 'none'),
            vc.appendChild(t),
            (t.src = String(e)),
            (r = t.contentWindow.document).open(),
            r.write(Sc('document.F=Object')),
            r.close(),
            r.F)
        : kc(yc)
    for (var n = gc.length; n--; ) delete Tc[wc][gc[n]]
    return Tc()
  }
bc[Ec] = !0
var jc =
    Object.create ||
    function (r, t) {
      var e
      return (
        null !== r ? ((Oc[wc] = dc(r)), (e = new Oc()), (Oc[wc] = null), (e[Ec] = r)) : (e = Tc()),
        void 0 === t ? e : hc.f(e, t)
      )
    },
  Ic = Zr,
  Dc = jc,
  Rc = kt.f,
  Mc = Ic('unscopables'),
  xc = Array.prototype
null == xc[Mc] && Rc(xc, Mc, { configurable: !0, value: Dc(null) })
var Pc = function (r) {
    xc[Mc][r] = !0
  },
  Cc = tc.findLast,
  Fc = Pc
Xn(
  { target: 'Array', proto: !0 },
  {
    findLast: function (r) {
      return Cc(this, r, arguments.length > 1 ? arguments[1] : void 0)
    }
  }
),
  Fc('findLast')
var Lc = tc.findLastIndex,
  _c = Pc
Xn(
  { target: 'Array', proto: !0 },
  {
    findLastIndex: function (r) {
      return Lc(this, r, arguments.length > 1 ? arguments[1] : void 0)
    }
  }
),
  _c('findLastIndex')
var Bc,
  Uc,
  zc,
  Nc = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView,
  Vc = We,
  Wc = kt,
  Gc = !o(function () {
    function r() {}
    return (r.prototype.constructor = null), Object.getPrototypeOf(new r()) !== r.prototype
  }),
  Hc = Ur,
  Yc = N,
  qc = Lr,
  Kc = Gc,
  Qc = se('IE_PROTO'),
  Xc = Object,
  $c = Xc.prototype,
  Jc = Kc
    ? Xc.getPrototypeOf
    : function (r) {
        var t = qc(r)
        if (Hc(t, Qc)) return t[Qc]
        var e = t.constructor
        return Yc(e) && t instanceof e ? e.prototype : t instanceof Xc ? $c : null
      },
  Zc = A,
  ru = br,
  tu = N,
  eu = String,
  nu = TypeError,
  ou = function (r, t, e) {
    try {
      return Zc(ru(Object.getOwnPropertyDescriptor(r, t)[e]))
    } catch (n) {}
  },
  au = Rt,
  iu = function (r) {
    if ('object' == typeof r || tu(r)) return r
    throw nu("Can't set " + eu(r) + ' as a prototype')
  },
  cu =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function () {
          var r,
            t = !1,
            e = {}
          try {
            ;(r = ou(Object.prototype, '__proto__', 'set'))(e, []), (t = e instanceof Array)
          } catch (n) {}
          return function (e, n) {
            return au(e), iu(n), t ? r(e, n) : (e.__proto__ = n), e
          }
        })()
      : void 0),
  uu = Nc,
  fu = a,
  su = e,
  lu = N,
  yu = G,
  pu = Ur,
  du = oo,
  hu = pr,
  gu = Gt,
  bu = Ke,
  vu = function (r, t, e) {
    return (
      e.get && Vc(e.get, t, { getter: !0 }), e.set && Vc(e.set, t, { setter: !0 }), Wc.f(r, t, e)
    )
  },
  mu = K,
  wu = Jc,
  Au = cu,
  Eu = Zr,
  Ou = Gr,
  Su = ke.enforce,
  ku = ke.get,
  Tu = su.Int8Array,
  ju = Tu && Tu.prototype,
  Iu = su.Uint8ClampedArray,
  Du = Iu && Iu.prototype,
  Ru = Tu && wu(Tu),
  Mu = ju && wu(ju),
  xu = Object.prototype,
  Pu = su.TypeError,
  Cu = Eu('toStringTag'),
  Fu = Ou('TYPED_ARRAY_TAG'),
  Lu = 'TypedArrayConstructor',
  _u = uu && !!Au && 'Opera' !== du(su.opera),
  Bu = !1,
  Uu = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  },
  zu = { BigInt64Array: 8, BigUint64Array: 8 },
  Nu = function (r) {
    var t = wu(r)
    if (yu(t)) {
      var e = ku(t)
      return e && pu(e, Lu) ? e[Lu] : Nu(t)
    }
  },
  Vu = function (r) {
    if (!yu(r)) return !1
    var t = du(r)
    return pu(Uu, t) || pu(zu, t)
  }
for (Bc in Uu) (zc = (Uc = su[Bc]) && Uc.prototype) ? (Su(zc)[Lu] = Uc) : (_u = !1)
for (Bc in zu) (zc = (Uc = su[Bc]) && Uc.prototype) && (Su(zc)[Lu] = Uc)
if (
  (!_u || !lu(Ru) || Ru === Function.prototype) &&
  ((Ru = function () {
    throw Pu('Incorrect invocation')
  }),
  _u)
)
  for (Bc in Uu) su[Bc] && Au(su[Bc], Ru)
if ((!_u || !Mu || Mu === xu) && ((Mu = Ru.prototype), _u))
  for (Bc in Uu) su[Bc] && Au(su[Bc].prototype, Mu)
if ((_u && wu(Du) !== Mu && Au(Du, Mu), fu && !pu(Mu, Cu)))
  for (Bc in ((Bu = !0),
  vu(Mu, Cu, {
    configurable: !0,
    get: function () {
      return yu(this) ? this[Fu] : void 0
    }
  }),
  Uu))
    su[Bc] && gu(su[Bc], Fu, Bc)
var Wu = {
    NATIVE_ARRAY_BUFFER_VIEWS: _u,
    TYPED_ARRAY_TAG: Bu && Fu,
    aTypedArray: function (r) {
      if (Vu(r)) return r
      throw Pu('Target is not a typed array')
    },
    aTypedArrayConstructor: function (r) {
      if (lu(r) && (!Au || mu(Ru, r))) return r
      throw Pu(hu(r) + ' is not a typed array constructor')
    },
    exportTypedArrayMethod: function (r, t, e, n) {
      if (fu) {
        if (e)
          for (var o in Uu) {
            var a = su[o]
            if (a && pu(a.prototype, r))
              try {
                delete a.prototype[r]
              } catch (i) {
                try {
                  a.prototype[r] = t
                } catch (c) {}
              }
          }
        ;(Mu[r] && !e) || bu(Mu, r, e ? t : (_u && ju[r]) || t, n)
      }
    },
    exportTypedArrayStaticMethod: function (r, t, e) {
      var n, o
      if (fu) {
        if (Au) {
          if (e)
            for (n in Uu)
              if ((o = su[n]) && pu(o, r))
                try {
                  delete o[r]
                } catch (a) {}
          if (Ru[r] && !e) return
          try {
            return bu(Ru, r, e ? t : (_u && Ru[r]) || t)
          } catch (a) {}
        }
        for (n in Uu) !(o = su[n]) || (o[r] && !e) || bu(o, r, t)
      }
    },
    getTypedArrayConstructor: Nu,
    isView: function (r) {
      if (!yu(r)) return !1
      var t = du(r)
      return 'DataView' === t || pu(Uu, t) || pu(zu, t)
    },
    isTypedArray: Vu,
    TypedArray: Ru,
    TypedArrayPrototype: Mu
  },
  Gu = tc.findLast,
  Hu = Wu.aTypedArray
;(0, Wu.exportTypedArrayMethod)('findLast', function (r) {
  return Gu(Hu(this), r, arguments.length > 1 ? arguments[1] : void 0)
})
var Yu = tc.findLastIndex,
  qu = Wu.aTypedArray
;(0, Wu.exportTypedArrayMethod)('findLastIndex', function (r) {
  return Yu(qu(this), r, arguments.length > 1 ? arguments[1] : void 0)
})
var Ku = Lr,
  Qu = cn,
  Xu = Ze,
  $u = Pc
Xn(
  { target: 'Array', proto: !0 },
  {
    at: function (r) {
      var t = Ku(this),
        e = Qu(t),
        n = Xu(r),
        o = n >= 0 ? n : e + n
      return o < 0 || o >= e ? void 0 : t[o]
    }
  }
),
  $u('at')
var Ju = oo,
  Zu = String,
  rf = function (r) {
    if ('Symbol' === Ju(r)) throw TypeError('Cannot convert a Symbol value to a string')
    return Zu(r)
  },
  tf = Xn,
  ef = C,
  nf = Ze,
  of = rf,
  af = o,
  cf = A(''.charAt)
tf(
  {
    target: 'String',
    proto: !0,
    forced: af(function () {
      return '\ud842' !== '𠮷'.at(-2)
    })
  },
  {
    at: function (r) {
      var t = of(ef(this)),
        e = t.length,
        n = nf(r),
        o = n >= 0 ? n : e + n
      return o < 0 || o >= e ? void 0 : cf(t, o)
    }
  }
)
var uf = cn,
  ff = Ze,
  sf = Wu.aTypedArray
;(0, Wu.exportTypedArrayMethod)('at', function (r) {
  var t = sf(this),
    e = uf(t),
    n = ff(r),
    o = n >= 0 ? n : e + n
  return o < 0 || o >= e ? void 0 : t[o]
}),
  Xn({ target: 'Object', stat: !0 }, { hasOwn: Ur })
var lf = G,
  yf = Gt,
  pf = function (r, t) {
    lf(t) && 'cause' in t && yf(r, 'cause', t.cause)
  },
  df = Error,
  hf = A(''.replace),
  gf = String(df('zxcasd').stack),
  bf = /\n\s*at [^:]*:[^\n]*/,
  vf = bf.test(gf),
  mf = Gt,
  wf = function (r, t) {
    if (vf && 'string' == typeof r && !df.prepareStackTrace) for (; t--; ) r = hf(r, bf, '')
    return r
  },
  Af = Sa,
  Ef = Error.captureStackTrace,
  Of = function (r, t, e, n) {
    Af && (Ef ? Ef(r, t) : mf(r, 'stack', wf(e, n)))
  },
  Sf = rf,
  kf = function (r, t) {
    return void 0 === r ? (arguments.length < 2 ? '' : t) : Sf(r)
  },
  Tf = Xn,
  jf = K,
  If = Jc,
  Df = cu,
  Rf = Pn,
  Mf = jc,
  xf = Gt,
  Pf = g,
  Cf = pf,
  Ff = Of,
  Lf = ia,
  _f = kf,
  Bf = Zr('toStringTag'),
  Uf = Error,
  zf = [].push,
  Nf = function (r, t) {
    var e,
      n = jf(Vf, this)
    Df ? (e = Df(Uf(), n ? If(this) : Vf)) : ((e = n ? this : Mf(Vf)), xf(e, Bf, 'Error')),
      void 0 !== t && xf(e, 'message', _f(t)),
      Ff(e, Nf, e.stack, 1),
      arguments.length > 2 && Cf(e, arguments[2])
    var o = []
    return Lf(r, zf, { that: o }), xf(e, 'errors', o), e
  }
Df ? Df(Nf, Uf) : Rf(Nf, Uf, { name: !0 })
var Vf = (Nf.prototype = Mf(Uf.prototype, {
  constructor: Pf(1, Nf),
  message: Pf(1, ''),
  name: Pf(1, 'AggregateError')
}))
Tf({ global: !0, constructor: !0, arity: 2 }, { AggregateError: Nf })
var Wf = i,
  Gf = Function.prototype,
  Hf = Gf.apply,
  Yf = Gf.call,
  qf =
    ('object' == typeof Reflect && Reflect.apply) ||
    (Wf
      ? Yf.bind(Hf)
      : function () {
          return Yf.apply(Hf, arguments)
        }),
  Kf = kt.f,
  Qf = N,
  Xf = G,
  $f = cu,
  Jf = q,
  Zf = Ur,
  rs = Gt,
  ts = K,
  es = cu,
  ns = Pn,
  os = function (r, t, e) {
    e in r ||
      Kf(r, e, {
        configurable: !0,
        get: function () {
          return t[e]
        },
        set: function (r) {
          t[e] = r
        }
      })
  },
  as = function (r, t, e) {
    var n, o
    return (
      $f &&
        Qf((n = t.constructor)) &&
        n !== e &&
        Xf((o = n.prototype)) &&
        o !== e.prototype &&
        $f(r, o),
      r
    )
  },
  is = kf,
  cs = pf,
  us = Of,
  fs = a,
  ss = function (r, t, e, n) {
    var o = 'stackTraceLimit',
      a = n ? 2 : 1,
      i = r.split('.'),
      c = i[i.length - 1],
      u = Jf.apply(null, i)
    if (u) {
      var f = u.prototype
      if ((Zf(f, 'cause') && delete f.cause, !e)) return u
      var s = Jf('Error'),
        l = t(function (r, t) {
          var e = is(n ? t : r, void 0),
            o = n ? new u(r) : new u()
          return (
            void 0 !== e && rs(o, 'message', e),
            us(o, l, o.stack, 2),
            this && ts(f, this) && as(o, this, l),
            arguments.length > a && cs(o, arguments[a]),
            o
          )
        })
      ;(l.prototype = f),
        'Error' !== c
          ? es
            ? es(l, s)
            : ns(l, s, { name: !0 })
          : fs && o in u && (os(l, u, o), os(l, u, 'prepareStackTrace')),
        ns(l, u)
      try {
        f.name !== c && rs(f, 'name', c), (f.constructor = l)
      } catch (y) {}
      return l
    }
  },
  ls = Xn,
  ys = qf,
  ps = o,
  ds = ss,
  hs = 'AggregateError',
  gs = q(hs),
  bs =
    !ps(function () {
      return 1 !== gs([1]).errors[0]
    }) &&
    ps(function () {
      return 7 !== gs([1], hs, { cause: 7 }).cause
    })
ls(
  { global: !0, constructor: !0, arity: 2, forced: bs },
  {
    AggregateError: ds(
      hs,
      function (r) {
        return function (t, e) {
          return ys(r, this, arguments)
        }
      },
      bs,
      !0
    )
  }
)
var vs = Xn,
  ms = qf,
  ws = ss,
  As = 'WebAssembly',
  Es = e[As],
  Os = 7 !== Error('e', { cause: 7 }).cause,
  Ss = function (r, t) {
    var e = {}
    ;(e[r] = ws(r, t, Os)), vs({ global: !0, constructor: !0, arity: 1, forced: Os }, e)
  },
  ks = function (r, t) {
    if (Es && Es[r]) {
      var e = {}
      ;(e[r] = ws(As + '.' + r, t, Os)),
        vs({ target: As, stat: !0, constructor: !0, arity: 1, forced: Os }, e)
    }
  }
Ss('Error', function (r) {
  return function (t) {
    return ms(r, this, arguments)
  }
}),
  Ss('EvalError', function (r) {
    return function (t) {
      return ms(r, this, arguments)
    }
  }),
  Ss('RangeError', function (r) {
    return function (t) {
      return ms(r, this, arguments)
    }
  }),
  Ss('ReferenceError', function (r) {
    return function (t) {
      return ms(r, this, arguments)
    }
  }),
  Ss('SyntaxError', function (r) {
    return function (t) {
      return ms(r, this, arguments)
    }
  }),
  Ss('TypeError', function (r) {
    return function (t) {
      return ms(r, this, arguments)
    }
  }),
  Ss('URIError', function (r) {
    return function (t) {
      return ms(r, this, arguments)
    }
  }),
  ks('CompileError', function (r) {
    return function (t) {
      return ms(r, this, arguments)
    }
  }),
  ks('LinkError', function (r) {
    return function (t) {
      return ms(r, this, arguments)
    }
  }),
  ks('RuntimeError', function (r) {
    return function (t) {
      return ms(r, this, arguments)
    }
  })
