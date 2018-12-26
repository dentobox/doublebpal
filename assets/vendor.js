"use strict";
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function e(t) {
          return typeof t;
        }
      : function e(t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(e);
}
/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */ function _typeof(
  e
) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function e(t) {
          return typeof t;
        }
      : function e(t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(e);
}
function _typeof(e) {
  return (_typeof =
    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
      ? function e(t) {
          return typeof t;
        }
      : function e(t) {
          return t &&
            "function" == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? "symbol"
            : typeof t;
        })(e);
}
!(function(e, t) {
  "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) &&
  "object" == _typeof(module.exports)
    ? (module.exports = e.document
        ? t(e, !0)
        : function(e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : void 0, function(E, e) {
  function m(e, t) {
    var n = (t = t || ne).createElement("script");
    (n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
  }
  function u(e) {
    var t = !!e && "length" in e && e.length,
      n = me.type(e);
    return (
      "function" !== n &&
      !me.isWindow(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  function c(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  function n(e, n, r) {
    return me.isFunction(n)
      ? me.grep(e, function(e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? me.grep(e, function(e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? me.grep(e, function(e) {
          return -1 < se.call(n, e) !== r;
        })
      : Se.test(n)
      ? me.filter(n, e, r)
      : ((n = me.filter(n, e)),
        me.grep(e, function(e) {
          return -1 < se.call(n, e) !== r && 1 === e.nodeType;
        }));
  }
  function r(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  function f(e) {
    var n = {};
    return (
      me.each(e.match(qe) || [], function(e, t) {
        n[t] = !0;
      }),
      n
    );
  }
  function d(e) {
    return e;
  }
  function p(e) {
    throw e;
  }
  function l(e, t, n, r) {
    var i;
    try {
      e && me.isFunction((i = e.promise))
        ? i
            .call(e)
            .done(t)
            .fail(n)
        : e && me.isFunction((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  function t() {
    ne.removeEventListener("DOMContentLoaded", t),
      E.removeEventListener("load", t),
      me.ready();
  }
  function i() {
    this.expando = me.expando + i.uid++;
  }
  function o(e) {
    return (
      "true" === e ||
      ("false" !== e &&
        ("null" === e
          ? null
          : e === +e + ""
          ? +e
          : Me.test(e)
          ? JSON.parse(e)
          : e))
    );
  }
  function h(e, t, n) {
    var r;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(Ve, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n = o(n);
        } catch (e) {}
        Pe.set(e, t, n);
      } else n = void 0;
    return n;
  }
  function g(e, t, n, r) {
    var i,
      o = 1,
      a = 20,
      s = r
        ? function() {
            return r.cur();
          }
        : function() {
            return me.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (me.cssNumber[t] ? "" : "px"),
      c = (me.cssNumber[t] || ("px" !== l && +u)) && _e.exec(me.css(e, t));
    if (c && c[3] !== l)
      for (
        l = l || c[3], n = n || [], c = +u || 1;
        (c /= o = o || ".5"),
          me.style(e, t, c + l),
          o !== (o = s() / u) && 1 !== o && --a;

      );
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  function s(e) {
    var t,
      n = e.ownerDocument,
      r = e.nodeName,
      i = ze[r];
    return (
      i ||
      ((t = n.body.appendChild(n.createElement(r))),
      (i = me.css(t, "display")),
      t.parentNode.removeChild(t),
      "none" === i && (i = "block"),
      (ze[r] = i))
    );
  }
  function y(e, t) {
    for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
      (r = e[o]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((i[o] = Re.get(r, "display") || null),
              i[o] || (r.style.display = "")),
            "" === r.style.display && $e(r) && (i[o] = s(r)))
          : "none" !== n && ((i[o] = "none"), Re.set(r, "display", n)));
    for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
    return e;
  }
  function v(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && c(e, t)) ? me.merge([e], n) : n
    );
  }
  function b(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Re.set(e[n], "globalEval", !t || Re.get(t[n], "globalEval"));
  }
  function x(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        d = [],
        p = 0,
        h = e.length;
      p < h;
      p++
    )
      if ((o = e[p]) || 0 === o)
        if ("object" === me.type(o)) me.merge(d, o.nodeType ? [o] : o);
        else if (Qe.test(o)) {
          for (
            a = a || f.appendChild(t.createElement("div")),
              s = (Xe.exec(o) || ["", ""])[1].toLowerCase(),
              u = Ge[s] || Ge._default,
              a.innerHTML = u[1] + me.htmlPrefilter(o) + u[2],
              c = u[0];
            c--;

          )
            a = a.lastChild;
          me.merge(d, a.childNodes), ((a = f.firstChild).textContent = "");
        } else d.push(t.createTextNode(o));
    for (f.textContent = "", p = 0; (o = d[p++]); )
      if (r && -1 < me.inArray(o, r)) i && i.push(o);
      else if (
        ((l = me.contains(o.ownerDocument, o)),
        (a = v(f.appendChild(o), "script")),
        l && b(a),
        n)
      )
        for (c = 0; (o = a[c++]); ) Ye.test(o.type || "") && n.push(o);
    return f;
  }
  function a() {
    return !0;
  }
  function w() {
    return !1;
  }
  function T() {
    try {
      return ne.activeElement;
    } catch (e) {}
  }
  function C(e, t, n, r, i, o) {
    var a, s;
    if ("object" == _typeof(t)) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        C(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = w;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function e(t) {
          return me().off(t), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = me.guid++))),
      e.each(function() {
        me.event.add(this, t, i, r, n);
      })
    );
  }
  function S(e, t) {
    return (
      (c(e, "table") &&
        c(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        me(">tbody", e)[0]) ||
      e
    );
  }
  function A(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function k(e) {
    var t = st.exec(e.type);
    return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
  }
  function N(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (
        Re.hasData(e) &&
        ((o = Re.access(e)), (a = Re.set(t, o)), (l = o.events))
      )
        for (i in (delete a.handle, (a.events = {}), l))
          for (n = 0, r = l[i].length; n < r; n++) me.event.add(t, i, l[i][n]);
      Pe.hasData(e) &&
        ((s = Pe.access(e)), (u = me.extend({}, s)), Pe.set(t, u));
    }
  }
  function j(e, t) {
    var n = t.nodeName.toLowerCase();
    "input" === n && Ue.test(e.type)
      ? (t.checked = e.checked)
      : ("input" !== n && "textarea" !== n) ||
        (t.defaultValue = e.defaultValue);
  }
  function D(n, r, i, o) {
    r = oe.apply([], r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      d = f - 1,
      p = r[0],
      h = me.isFunction(p);
    if (h || (1 < f && "string" == typeof p && !pe.checkClone && at.test(p)))
      return n.each(function(e) {
        var t = n.eq(e);
        h && (r[0] = p.call(this, e, t.html())), D(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = x(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = me.map(v(e, "script"), A)).length; c < f; c++)
        (u = e),
          c !== d &&
            ((u = me.clone(u, !0, !0)), s && me.merge(a, v(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, me.map(a, k), c = 0; c < s; c++)
          (u = a[c]),
            Ye.test(u.type || "") &&
              !Re.access(u, "globalEval") &&
              me.contains(l, u) &&
              (u.src
                ? me._evalUrl && me._evalUrl(u.src)
                : m(u.textContent.replace(ut, ""), l));
    }
    return n;
  }
  function q(e, t, n) {
    for (var r, i = t ? me.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || me.cleanData(v(r)),
        r.parentNode &&
          (n && me.contains(r.ownerDocument, r) && b(v(r, "script")),
          r.parentNode.removeChild(r));
    return e;
  }
  function L(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || ft(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          me.contains(e.ownerDocument, e) ||
          (a = me.style(e, t)),
        !pe.pixelMarginRight() &&
          ct.test(a) &&
          lt.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function F(t, n) {
    return {
      get: function e() {
        return t()
          ? void delete this.get
          : (this.get = n).apply(this, arguments);
      }
    };
  }
  function O(e) {
    if (e in yt) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), n = gt.length; n--; )
      if ((e = gt[n] + t) in yt) return e;
  }
  function H(e) {
    var t = me.cssProps[e];
    return t || (t = me.cssProps[e] = O(e) || e), t;
  }
  function R(e, t, n) {
    var r = _e.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function P(e, t, n, r, i) {
    var o,
      a = 0;
    for (
      o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0;
      o < 4;
      o += 2
    )
      "margin" === n && (a += me.css(e, n + We[o], !0, i)),
        r
          ? ("content" === n && (a -= me.css(e, "padding" + We[o], !0, i)),
            "margin" !== n &&
              (a -= me.css(e, "border" + We[o] + "Width", !0, i)))
          : ((a += me.css(e, "padding" + We[o], !0, i)),
            "padding" !== n &&
              (a += me.css(e, "border" + We[o] + "Width", !0, i)));
    return a;
  }
  function M(e, t, n) {
    var r,
      i = ft(e),
      o = L(e, t, i),
      a = "border-box" === me.css(e, "boxSizing", !1, i);
    return ct.test(o)
      ? o
      : ((r = a && (pe.boxSizingReliable() || o === e.style[t])),
        "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]),
        (o = parseFloat(o) || 0) +
          P(e, t, n || (a ? "border" : "content"), r, i) +
          "px");
  }
  function V(e, t, n, r, i) {
    return new V.prototype.init(e, t, n, r, i);
  }
  function I() {
    bt &&
      (!1 === ne.hidden && E.requestAnimationFrame
        ? E.requestAnimationFrame(I)
        : E.setTimeout(I, me.fx.interval),
      me.fx.tick());
  }
  function _() {
    return (
      E.setTimeout(function() {
        vt = void 0;
      }),
      (vt = me.now())
    );
  }
  function W(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = We[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function $(e, t, n) {
    for (
      var r,
        i = (U.tweeners[t] || []).concat(U.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function B(e, t, n) {
    var r,
      i,
      o,
      a,
      s,
      u,
      l,
      c,
      f = "width" in t || "height" in t,
      d = this,
      p = {},
      h = e.style,
      m = e.nodeType && $e(e),
      g = Re.get(e, "fxshow");
    for (r in (n.queue ||
      (null == (a = me._queueHooks(e, "fx")).unqueued &&
        ((a.unqueued = 0),
        (s = a.empty.fire),
        (a.empty.fire = function() {
          a.unqueued || s();
        })),
      a.unqueued++,
      d.always(function() {
        d.always(function() {
          a.unqueued--, me.queue(e, "fx").length || a.empty.fire();
        });
      })),
    t))
      if (((i = t[r]), xt.test(i))) {
        if (
          (delete t[r], (o = o || "toggle" === i), i === (m ? "hide" : "show"))
        ) {
          if ("show" !== i || !g || void 0 === g[r]) continue;
          m = !0;
        }
        p[r] = (g && g[r]) || me.style(e, r);
      }
    if ((u = !me.isEmptyObject(t)) || !me.isEmptyObject(p))
      for (r in (f &&
        1 === e.nodeType &&
        ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
        null == (l = g && g.display) && (l = Re.get(e, "display")),
        "none" === (c = me.css(e, "display")) &&
          (l
            ? (c = l)
            : (y([e], !0),
              (l = e.style.display || l),
              (c = me.css(e, "display")),
              y([e]))),
        ("inline" === c || ("inline-block" === c && null != l)) &&
          "none" === me.css(e, "float") &&
          (u ||
            (d.done(function() {
              h.display = l;
            }),
            null == l && ((c = h.display), (l = "none" === c ? "" : c))),
          (h.display = "inline-block"))),
      n.overflow &&
        ((h.overflow = "hidden"),
        d.always(function() {
          (h.overflow = n.overflow[0]),
            (h.overflowX = n.overflow[1]),
            (h.overflowY = n.overflow[2]);
        })),
      (u = !1),
      p))
        u ||
          (g
            ? "hidden" in g && (m = g.hidden)
            : (g = Re.access(e, "fxshow", { display: l })),
          o && (g.hidden = !m),
          m && y([e], !0),
          d.done(function() {
            for (r in (m || y([e]), Re.remove(e, "fxshow"), p))
              me.style(e, r, p[r]);
          })),
          (u = $(m ? g[r] : 0, r, d)),
          r in g || ((g[r] = u.start), m && ((u.end = u.start), (u.start = 0)));
  }
  function z(e, t) {
    var n, r, i, o, a;
    for (n in e)
      if (
        ((i = t[(r = me.camelCase(n))]),
        (o = e[n]),
        Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
        n !== r && ((e[r] = o), delete e[n]),
        (a = me.cssHooks[r]) && "expand" in a)
      )
        for (n in ((o = a.expand(o)), delete e[r], o))
          n in e || ((e[n] = o[n]), (t[n] = i));
      else t[r] = i;
  }
  function U(a, e, t) {
    var n,
      s,
      r = 0,
      i = U.prefilters.length,
      u = me.Deferred().always(function() {
        delete o.elem;
      }),
      o = function e() {
        if (s) return !1;
        for (
          var t = vt || _(),
            n = Math.max(0, l.startTime + l.duration - t),
            r,
            i = 1 - (n / l.duration || 0),
            o = 0,
            e = l.tweens.length;
          o < e;
          o++
        )
          l.tweens[o].run(i);
        return (
          u.notifyWith(a, [l, i, n]),
          i < 1 && e
            ? n
            : (e || u.notifyWith(a, [l, 1, 0]), u.resolveWith(a, [l]), !1)
        );
      },
      l = u.promise({
        elem: a,
        props: me.extend({}, e),
        opts: me.extend(
          !0,
          { specialEasing: {}, easing: me.easing._default },
          t
        ),
        originalProperties: e,
        originalOptions: t,
        startTime: vt || _(),
        duration: t.duration,
        tweens: [],
        createTween: function e(t, n) {
          var r = me.Tween(
            a,
            l.opts,
            t,
            n,
            l.opts.specialEasing[t] || l.opts.easing
          );
          return l.tweens.push(r), r;
        },
        stop: function e(t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (s) return this;
          for (s = !0; n < r; n++) l.tweens[n].run(1);
          return (
            t
              ? (u.notifyWith(a, [l, 1, 0]), u.resolveWith(a, [l, t]))
              : u.rejectWith(a, [l, t]),
            this
          );
        }
      }),
      c = l.props;
    for (z(c, l.opts.specialEasing); r < i; r++)
      if ((n = U.prefilters[r].call(l, a, c, l.opts)))
        return (
          me.isFunction(n.stop) &&
            (me._queueHooks(l.elem, l.opts.queue).stop = me.proxy(n.stop, n)),
          n
        );
    return (
      me.map(c, $, l),
      me.isFunction(l.opts.start) && l.opts.start.call(a, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      me.fx.timer(me.extend(o, { elem: a, anim: l, queue: l.opts.queue })),
      l
    );
  }
  function X(e) {
    var t;
    return (e.match(qe) || []).join(" ");
  }
  function Y(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function G(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      me.each(e, function(e, t) {
        r || Ot.test(n)
          ? i(n, t)
          : G(
              n + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== me.type(e)) i(n, e);
    else for (t in e) G(n + "[" + t + "]", e[t], r, i);
  }
  function Q(o) {
    return function(e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(qe) || [];
      if (me.isFunction(t))
        for (; (n = i[r++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function J(t, i, o, a) {
    function s(e) {
      var r;
      return (
        (u[e] = !0),
        me.each(t[e] || [], function(e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || l || u[n]
            ? l
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), s(n), !1);
        }),
        r
      );
    }
    var u = {},
      l = t === Ut;
    return s(i.dataTypes[0]) || (!u["*"] && s("*"));
  }
  function K(e, t) {
    var n,
      r,
      i = me.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && me.extend(!0, e, r), e;
  }
  function Z(e, t, n) {
    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
      u.shift(),
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
    if (r)
      for (i in s)
        if (s[i] && s[i].test(r)) {
          u.unshift(i);
          break;
        }
    if (u[0] in n) o = u[0];
    else {
      for (i in n) {
        if (!u[0] || e.converters[i + " " + u[0]]) {
          o = i;
          break;
        }
        a || (a = i);
      }
      o = o || a;
    }
    if (o) return o !== u[0] && u.unshift(o), n[o];
  }
  function ee(e, t, n, r) {
    var i,
      o,
      a,
      s,
      u,
      l = {},
      c = e.dataTypes.slice();
    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
    for (o = c.shift(); o; )
      if (
        (e.responseFields[o] && (n[e.responseFields[o]] = t),
        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
        (u = o),
        (o = c.shift()))
      )
        if ("*" === o) o = u;
        else if ("*" !== u && u !== o) {
          if (!(a = l[u + " " + o] || l["* " + o]))
            for (i in l)
              if (
                (s = i.split(" "))[1] === o &&
                (a = l[u + " " + s[0]] || l["* " + s[0]])
              ) {
                !0 === a
                  ? (a = l[i])
                  : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                break;
              }
          if (!0 !== a)
            if (a && e.throws) t = a(t);
            else
              try {
                t = a(t);
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + u + " to " + o
                };
              }
        }
    return { state: "success", data: t };
  }
  var te = [],
    ne = E.document,
    re = Object.getPrototypeOf,
    ie = te.slice,
    oe = te.concat,
    ae = te.push,
    se = te.indexOf,
    ue = {},
    le = ue.toString,
    ce = ue.hasOwnProperty,
    fe = ce.toString,
    de = fe.call(Object),
    pe = {},
    he = "3.2.1",
    me = function e(t, n) {
      return new e.fn.init(t, n);
    },
    ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ye = /^-ms-/,
    ve = /-([a-z])/g,
    be = function e(t, n) {
      return n.toUpperCase();
    };
  (me.fn = me.prototype = {
    jquery: he,
    constructor: me,
    length: 0,
    toArray: function e() {
      return ie.call(this);
    },
    get: function e(t) {
      return null == t
        ? ie.call(this)
        : t < 0
        ? this[t + this.length]
        : this[t];
    },
    pushStack: function e(t) {
      var n = me.merge(this.constructor(), t);
      return (n.prevObject = this), n;
    },
    each: function e(t) {
      return me.each(this, t);
    },
    map: function e(n) {
      return this.pushStack(
        me.map(this, function(e, t) {
          return n.call(e, t, e);
        })
      );
    },
    slice: function e() {
      return this.pushStack(ie.apply(this, arguments));
    },
    first: function e() {
      return this.eq(0);
    },
    last: function e() {
      return this.eq(-1);
    },
    eq: function e(t) {
      var n = this.length,
        r = +t + (t < 0 ? n : 0);
      return this.pushStack(0 <= r && r < n ? [this[r]] : []);
    },
    end: function e() {
      return this.prevObject || this.constructor();
    },
    push: ae,
    sort: te.sort,
    splice: te.splice
  }),
    (me.extend = me.fn.extend = function(e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = e || {},
        u = 1,
        l = arguments.length,
        c = !1;
      for (
        "boolean" == typeof s && ((c = s), (s = arguments[u] || {}), u++),
          "object" == _typeof(s) || me.isFunction(s) || (s = {}),
          u === l && ((s = this), u--);
        u < l;
        u++
      )
        if (null != (t = arguments[u]))
          for (n in t)
            (r = s[n]),
              s !== (i = t[n]) &&
                (c && i && (me.isPlainObject(i) || (o = Array.isArray(i)))
                  ? ((a = o
                      ? ((o = !1), r && Array.isArray(r) ? r : [])
                      : r && me.isPlainObject(r)
                      ? r
                      : {}),
                    (s[n] = me.extend(c, a, i)))
                  : void 0 !== i && (s[n] = i));
      return s;
    }),
    me.extend({
      expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function e(t) {
        throw new Error(t);
      },
      noop: function e() {},
      isFunction: function e(t) {
        return "function" === me.type(t);
      },
      isWindow: function e(t) {
        return null != t && t === t.window;
      },
      isNumeric: function e(t) {
        var n = me.type(t);
        return ("number" === n || "string" === n) && !isNaN(t - parseFloat(t));
      },
      isPlainObject: function e(t) {
        var n, r;
        return !(
          !t ||
          "[object Object]" !== le.call(t) ||
          ((n = re(t)) &&
            ("function" !=
              typeof (r = ce.call(n, "constructor") && n.constructor) ||
              fe.call(r) !== de))
        );
      },
      isEmptyObject: function e(t) {
        var n;
        for (n in t) return !1;
        return !0;
      },
      type: function e(t) {
        return null == t
          ? t + ""
          : "object" == _typeof(t) || "function" == typeof t
          ? ue[le.call(t)] || "object"
          : _typeof(t);
      },
      globalEval: function e(t) {
        m(t);
      },
      camelCase: function e(t) {
        return t.replace(ye, "ms-").replace(ve, be);
      },
      each: function e(t, n) {
        var r,
          i = 0;
        if (u(t))
          for (r = t.length; i < r && !1 !== n.call(t[i], i, t[i]); i++);
        else for (i in t) if (!1 === n.call(t[i], i, t[i])) break;
        return t;
      },
      trim: function e(t) {
        return null == t ? "" : (t + "").replace(ge, "");
      },
      makeArray: function e(t, n) {
        var r = n || [];
        return (
          null != t &&
            (u(Object(t))
              ? me.merge(r, "string" == typeof t ? [t] : t)
              : ae.call(r, t)),
          r
        );
      },
      inArray: function e(t, n, r) {
        return null == n ? -1 : se.call(n, t, r);
      },
      merge: function e(t, n) {
        for (var r = +n.length, i = 0, o = t.length; i < r; i++) t[o++] = n[i];
        return (t.length = o), t;
      },
      grep: function e(t, n, r) {
        for (var i, o = [], a = 0, s = t.length, u = !r; a < s; a++)
          (i = !n(t[a], a)) !== u && o.push(t[a]);
        return o;
      },
      map: function e(t, n, r) {
        var i,
          o,
          a = 0,
          s = [];
        if (u(t))
          for (i = t.length; a < i; a++)
            null != (o = n(t[a], a, r)) && s.push(o);
        else for (a in t) null != (o = n(t[a], a, r)) && s.push(o);
        return oe.apply([], s);
      },
      guid: 1,
      proxy: function e(t, n) {
        var r, i, o;
        if (
          ("string" == typeof n && ((r = t[n]), (n = t), (t = r)),
          me.isFunction(t))
        )
          return (
            (i = ie.call(arguments, 2)),
            ((o = function e() {
              return t.apply(n || this, i.concat(ie.call(arguments)));
            }).guid = t.guid = t.guid || me.guid++),
            o
          );
      },
      now: Date.now,
      support: pe
    }),
    "function" == typeof Symbol &&
      (me.fn[Symbol.iterator] = te[Symbol.iterator]),
    me.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function(e, t) {
        ue["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var xe = (function(r) {
    function w(e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = t && t.ownerDocument,
        d = t ? t.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof e || !e || (1 !== d && 9 !== d && 11 !== d))
      )
        return n;
      if (
        !r &&
        ((t ? t.ownerDocument || t : _) !== F && L(t), (t = t || F), H)
      ) {
        if (11 !== d && (u = ye.exec(e)))
          if ((i = u[1])) {
            if (9 === d) {
              if (!(a = t.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && V(t, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return K.apply(n, t.getElementsByTagName(e)), n;
            if (
              (i = u[3]) &&
              x.getElementsByClassName &&
              t.getElementsByClassName
            )
              return K.apply(n, t.getElementsByClassName(i)), n;
          }
        if (x.qsa && !U[e + " "] && (!R || !R.test(e))) {
          if (1 !== d) (f = t), (c = e);
          else if ("object" !== t.nodeName.toLowerCase()) {
            for (
              (s = t.getAttribute("id"))
                ? (s = s.replace(we, Te))
                : t.setAttribute("id", (s = I)),
                o = (l = A(e)).length;
              o--;

            )
              l[o] = "#" + s + " " + h(l[o]);
            (c = l.join(",")), (f = (ve.test(e) && p(t.parentNode)) || t);
          }
          if (c)
            try {
              return K.apply(n, f.querySelectorAll(c)), n;
            } catch (e) {
            } finally {
              s === I && t.removeAttribute("id");
            }
        }
      }
      return N(e.replace(se, "$1"), t, n, r);
    }
    function e() {
      function n(e, t) {
        return (
          r.push(e + " ") > C.cacheLength && delete n[r.shift()],
          (n[e + " "] = t)
        );
      }
      var r = [];
      return n;
    }
    function u(e) {
      return (e[I] = !0), e;
    }
    function i(e) {
      var t = F.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function t(e, t) {
      for (var n = e.split("|"), r = n.length; r--; ) C.attrHandle[n[r]] = t;
    }
    function l(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function n(n) {
      return function(e) {
        var t;
        return "input" === e.nodeName.toLowerCase() && e.type === n;
      };
    }
    function o(n) {
      return function(e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function a(t) {
      return function(e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && Ee(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function s(a) {
      return u(function(o) {
        return (
          (o = +o),
          u(function(e, t) {
            for (var n, r = a([], e.length, o), i = r.length; i--; )
              e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function p(e) {
      return e && void 0 !== e.getElementsByTagName && e;
    }
    function c() {}
    function h(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function f(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        d = $++;
      return e.first
        ? function(e, t, n) {
            for (; (e = e[u]); ) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function(e, t, n) {
            var r,
              i,
              o,
              a = [W, d];
            if (n) {
              for (; (e = e[u]); )
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              for (; (e = e[u]); )
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[I] || (e[I] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === W && r[1] === d)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function d(i) {
      return 1 < i.length
        ? function(e, t, n) {
            for (var r = i.length; r--; ) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function v(e, t, n) {
      for (var r = 0, i = t.length; r < i; r++) w(e, t[r], n);
      return n;
    }
    function T(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function b(p, h, m, g, y, e) {
      return (
        g && !g[I] && (g = b(g)),
        y && !y[I] && (y = b(y, e)),
        u(function(e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c = e || v(h || "*", n.nodeType ? [n] : n, []),
            f = !p || (!e && h) ? c : T(c, s, p, n, r),
            d = m ? (y || (e ? p : l || g) ? [] : t) : f;
          if ((m && m(f, d, n, r), g))
            for (i = T(d, u), g(i, [], n, r), o = i.length; o--; )
              (a = i[o]) && (d[u[o]] = !(f[u[o]] = a));
          if (e) {
            if (y || p) {
              if (y) {
                for (i = [], o = d.length; o--; )
                  (a = d[o]) && i.push((f[o] = a));
                y(null, (d = []), i, r);
              }
              for (o = d.length; o--; )
                (a = d[o]) &&
                  -1 < (i = y ? ee(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (d = T(d === t ? d.splice(l, d.length) : d)), y ? y(null, t, d, r) : K.apply(t, d);
        })
      );
    }
    function m(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = C.relative[e[0].type],
          a = o || C.relative[" "],
          s = o ? 1 : 0,
          u = f(
            function(e) {
              return e === i;
            },
            a,
            !0
          ),
          l = f(
            function(e) {
              return -1 < ee(i, e);
            },
            a,
            !0
          ),
          c = [
            function(e, t, n) {
              var r =
                (!o && (n || t !== j)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            }
          ];
        s < r;
        s++
      )
        if ((t = C.relative[e[s].type])) c = [f(d(c), t)];
        else {
          if ((t = C.filter[e[s].type].apply(null, e[s].matches))[I]) {
            for (n = ++s; n < r && !C.relative[e[n].type]; n++);
            return b(
              1 < s && d(c),
              1 < s &&
                h(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(se, "$1"),
              t,
              s < n && m(e.slice(s, n)),
              n < r && m((e = e.slice(n))),
              n < r && h(e)
            );
          }
          c.push(t);
        }
      return d(c);
    }
    function g(y, v) {
      var b = 0 < v.length,
        x = 0 < y.length,
        e = function e(t, n, r, i, o) {
          var a,
            s,
            u,
            l = 0,
            c = "0",
            f = t && [],
            d = [],
            p = j,
            h = t || (x && C.find.TAG("*", o)),
            m = (W += null == p ? 1 : Math.random() || 0.1),
            g = h.length;
          for (
            o && (j = n === F || n || o);
            c !== g && null != (a = h[c]);
            c++
          ) {
            if (x && a) {
              for (
                s = 0, n || a.ownerDocument === F || (L(a), (r = !H));
                (u = y[s++]);

              )
                if (u(a, n || F, r)) {
                  i.push(a);
                  break;
                }
              o && (W = m);
            }
            b && ((a = !u && a) && l--, t && f.push(a));
          }
          if (((l += c), b && c !== l)) {
            for (s = 0; (u = v[s++]); ) u(f, d, n, r);
            if (t) {
              if (0 < l) for (; c--; ) f[c] || d[c] || (d[c] = Q.call(i));
              d = T(d);
            }
            K.apply(i, d),
              o && !t && 0 < d.length && 1 < l + v.length && w.uniqueSort(i);
          }
          return o && ((W = m), (j = p)), f;
        };
      return b ? u(e) : e;
    }
    var y,
      x,
      C,
      E,
      S,
      A,
      k,
      N,
      j,
      D,
      q,
      L,
      F,
      O,
      H,
      R,
      P,
      M,
      V,
      I = "sizzle" + 1 * new Date(),
      _ = r.document,
      W = 0,
      $ = 0,
      B = e(),
      z = e(),
      U = e(),
      X = function e(t, n) {
        return t === n && (q = !0), 0;
      },
      Y = {}.hasOwnProperty,
      G = [],
      Q = G.pop,
      J = G.push,
      K = G.push,
      Z = G.slice,
      ee = function e(t, n) {
        for (var r = 0, i = t.length; r < i; r++) if (t[r] === n) return r;
        return -1;
      },
      te =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      ne = "[\\x20\\t\\r\\n\\f]",
      re = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
      ie =
        "\\[" +
        ne +
        "*(" +
        re +
        ")(?:" +
        ne +
        "*([*^$|!~]?=)" +
        ne +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        re +
        "))|)" +
        ne +
        "*\\]",
      oe =
        ":(" +
        re +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        ie +
        ")*)|.*)\\)|)",
      ae = new RegExp(ne + "+", "g"),
      se = new RegExp(
        "^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$",
        "g"
      ),
      ue = new RegExp("^" + ne + "*," + ne + "*"),
      le = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
      ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
      fe = new RegExp(oe),
      de = new RegExp("^" + re + "$"),
      pe = {
        ID: new RegExp("^#(" + re + ")"),
        CLASS: new RegExp("^\\.(" + re + ")"),
        TAG: new RegExp("^(" + re + "|[*])"),
        ATTR: new RegExp("^" + ie),
        PSEUDO: new RegExp("^" + oe),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            ne +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            ne +
            "*(?:([+-]|)" +
            ne +
            "*(\\d+)|))" +
            ne +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + te + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            ne +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            ne +
            "*((?:-\\d)?\\d*)" +
            ne +
            "*\\)|)(?=[^-]|$)",
          "i"
        )
      },
      he = /^(?:input|select|textarea|button)$/i,
      me = /^h\d$/i,
      ge = /^[^{]+\{\s*\[native \w/,
      ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ve = /[+~]/,
      be = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
      xe = function e(t, n, r) {
        var i = "0x" + n - 65536;
        return i != i || r
          ? n
          : i < 0
          ? String.fromCharCode(i + 65536)
          : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
      },
      we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      Te = function e(t, n) {
        return n
          ? "\0" === t
            ? "�"
            : t.slice(0, -1) +
              "\\" +
              t.charCodeAt(t.length - 1).toString(16) +
              " "
          : "\\" + t;
      },
      Ce = function e() {
        L();
      },
      Ee = f(
        function(e) {
          return !0 === e.disabled && ("form" in e || "label" in e);
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      K.apply((G = Z.call(_.childNodes)), _.childNodes),
        G[_.childNodes.length].nodeType;
    } catch (e) {
      K = {
        apply: G.length
          ? function(e, t) {
              J.apply(e, Z.call(t));
            }
          : function(e, t) {
              for (var n = e.length, r = 0; (e[n++] = t[r++]); );
              e.length = n - 1;
            }
      };
    }
    for (y in ((x = w.support = {}),
    (S = w.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return !!t && "HTML" !== t.nodeName;
    }),
    (L = w.setDocument = function(e) {
      var t,
        n,
        r = e ? e.ownerDocument || e : _;
      return (
        r !== F &&
          9 === r.nodeType &&
          r.documentElement &&
          ((O = (F = r).documentElement),
          (H = !S(F)),
          _ !== F &&
            (n = F.defaultView) &&
            n.top !== n &&
            (n.addEventListener
              ? n.addEventListener("unload", Ce, !1)
              : n.attachEvent && n.attachEvent("onunload", Ce)),
          (x.attributes = i(function(e) {
            return (e.className = "i"), !e.getAttribute("className");
          })),
          (x.getElementsByTagName = i(function(e) {
            return (
              e.appendChild(F.createComment("")),
              !e.getElementsByTagName("*").length
            );
          })),
          (x.getElementsByClassName = ge.test(F.getElementsByClassName)),
          (x.getById = i(function(e) {
            return (
              (O.appendChild(e).id = I),
              !F.getElementsByName || !F.getElementsByName(I).length
            );
          })),
          x.getById
            ? ((C.filter.ID = function(e) {
                var t = e.replace(be, xe);
                return function(e) {
                  return e.getAttribute("id") === t;
                };
              }),
              (C.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && H) {
                  var n = t.getElementById(e);
                  return n ? [n] : [];
                }
              }))
            : ((C.filter.ID = function(e) {
                var n = e.replace(be, xe);
                return function(e) {
                  var t =
                    void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                  return t && t.value === n;
                };
              }),
              (C.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && H) {
                  var n,
                    r,
                    i,
                    o = t.getElementById(e);
                  if (o) {
                    if ((n = o.getAttributeNode("id")) && n.value === e)
                      return [o];
                    for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                  }
                  return [];
                }
              })),
          (C.find.TAG = x.getElementsByTagName
            ? function(e, t) {
                return void 0 !== t.getElementsByTagName
                  ? t.getElementsByTagName(e)
                  : x.qsa
                  ? t.querySelectorAll(e)
                  : void 0;
              }
            : function(e, t) {
                var n,
                  r = [],
                  i = 0,
                  o = t.getElementsByTagName(e);
                if ("*" !== e) return o;
                for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                return r;
              }),
          (C.find.CLASS =
            x.getElementsByClassName &&
            function(e, t) {
              if (void 0 !== t.getElementsByClassName && H)
                return t.getElementsByClassName(e);
            }),
          (P = []),
          (R = []),
          (x.qsa = ge.test(F.querySelectorAll)) &&
            (i(function(e) {
              (O.appendChild(e).innerHTML =
                "<a id='" +
                I +
                "'></a><select id='" +
                I +
                "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                e.querySelectorAll("[msallowcapture^='']").length &&
                  R.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length ||
                  R.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + I + "-]").length || R.push("~="),
                e.querySelectorAll(":checked").length || R.push(":checked"),
                e.querySelectorAll("a#" + I + "+*").length ||
                  R.push(".#.+[+~]");
            }),
            i(function(e) {
              e.innerHTML =
                "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
              var t = F.createElement("input");
              t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length &&
                  R.push("name" + ne + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length &&
                  R.push(":enabled", ":disabled"),
                (O.appendChild(e).disabled = !0),
                2 !== e.querySelectorAll(":disabled").length &&
                  R.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                R.push(",.*:");
            })),
          (x.matchesSelector = ge.test(
            (M =
              O.matches ||
              O.webkitMatchesSelector ||
              O.mozMatchesSelector ||
              O.oMatchesSelector ||
              O.msMatchesSelector)
          )) &&
            i(function(e) {
              (x.disconnectedMatch = M.call(e, "*")),
                M.call(e, "[s!='']:x"),
                P.push("!=", oe);
            }),
          (R = R.length && new RegExp(R.join("|"))),
          (P = P.length && new RegExp(P.join("|"))),
          (t = ge.test(O.compareDocumentPosition)),
          (V =
            t || ge.test(O.contains)
              ? function(e, t) {
                  var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                  return (
                    e === r ||
                    !(
                      !r ||
                      1 !== r.nodeType ||
                      !(n.contains
                        ? n.contains(r)
                        : e.compareDocumentPosition &&
                          16 & e.compareDocumentPosition(r))
                    )
                  );
                }
              : function(e, t) {
                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                  return !1;
                }),
          (X = t
            ? function(e, t) {
                if (e === t) return (q = !0), 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return (
                  n ||
                  (1 &
                    (n =
                      (e.ownerDocument || e) === (t.ownerDocument || t)
                        ? e.compareDocumentPosition(t)
                        : 1) ||
                  (!x.sortDetached && t.compareDocumentPosition(e) === n)
                    ? e === F || (e.ownerDocument === _ && V(_, e))
                      ? -1
                      : t === F || (t.ownerDocument === _ && V(_, t))
                      ? 1
                      : D
                      ? ee(D, e) - ee(D, t)
                      : 0
                    : 4 & n
                    ? -1
                    : 1)
                );
              }
            : function(e, t) {
                if (e === t) return (q = !0), 0;
                var n,
                  r = 0,
                  i = e.parentNode,
                  o = t.parentNode,
                  a = [e],
                  s = [t];
                if (!i || !o)
                  return e === F
                    ? -1
                    : t === F
                    ? 1
                    : i
                    ? -1
                    : o
                    ? 1
                    : D
                    ? ee(D, e) - ee(D, t)
                    : 0;
                if (i === o) return l(e, t);
                for (n = e; (n = n.parentNode); ) a.unshift(n);
                for (n = t; (n = n.parentNode); ) s.unshift(n);
                for (; a[r] === s[r]; ) r++;
                return r ? l(a[r], s[r]) : a[r] === _ ? -1 : s[r] === _ ? 1 : 0;
              })),
        F
      );
    }),
    (w.matches = function(e, t) {
      return w(e, null, null, t);
    }),
    (w.matchesSelector = function(e, t) {
      if (
        ((e.ownerDocument || e) !== F && L(e),
        (t = t.replace(ce, "='$1']")),
        x.matchesSelector &&
          H &&
          !U[t + " "] &&
          (!P || !P.test(t)) &&
          (!R || !R.test(t)))
      )
        try {
          var n = M.call(e, t);
          if (
            n ||
            x.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {}
      return 0 < w(t, F, null, [e]).length;
    }),
    (w.contains = function(e, t) {
      return (e.ownerDocument || e) !== F && L(e), V(e, t);
    }),
    (w.attr = function(e, t) {
      (e.ownerDocument || e) !== F && L(e);
      var n = C.attrHandle[t.toLowerCase()],
        r = n && Y.call(C.attrHandle, t.toLowerCase()) ? n(e, t, !H) : void 0;
      return void 0 !== r
        ? r
        : x.attributes || !H
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (w.escape = function(e) {
      return (e + "").replace(we, Te);
    }),
    (w.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (w.uniqueSort = function(e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((q = !x.detectDuplicates),
        (D = !x.sortStable && e.slice(0)),
        e.sort(X),
        q)
      ) {
        for (; (t = e[i++]); ) t === e[i] && (r = n.push(i));
        for (; r--; ) e.splice(n[r], 1);
      }
      return (D = null), e;
    }),
    (E = w.getText = function(e) {
      var t,
        n = "",
        r = 0,
        i = e.nodeType;
      if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;
          for (e = e.firstChild; e; e = e.nextSibling) n += E(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; (t = e[r++]); ) n += E(t);
      return n;
    }),
    ((C = w.selectors = {
      cacheLength: 50,
      createPseudo: u,
      match: pe,
      attrHandle: {},
      find: {},
      relative: {
        ">": { dir: "parentNode", first: !0 },
        " ": { dir: "parentNode" },
        "+": { dir: "previousSibling", first: !0 },
        "~": { dir: "previousSibling" }
      },
      preFilter: {
        ATTR: function e(t) {
          return (
            (t[1] = t[1].replace(be, xe)),
            (t[3] = (t[3] || t[4] || t[5] || "").replace(be, xe)),
            "~=" === t[2] && (t[3] = " " + t[3] + " "),
            t.slice(0, 4)
          );
        },
        CHILD: function e(t) {
          return (
            (t[1] = t[1].toLowerCase()),
            "nth" === t[1].slice(0, 3)
              ? (t[3] || w.error(t[0]),
                (t[4] = +(t[4]
                  ? t[5] + (t[6] || 1)
                  : 2 * ("even" === t[3] || "odd" === t[3]))),
                (t[5] = +(t[7] + t[8] || "odd" === t[3])))
              : t[3] && w.error(t[0]),
            t
          );
        },
        PSEUDO: function e(t) {
          var n,
            r = !t[6] && t[2];
          return pe.CHILD.test(t[0])
            ? null
            : (t[3]
                ? (t[2] = t[4] || t[5] || "")
                : r &&
                  fe.test(r) &&
                  (n = A(r, !0)) &&
                  (n = r.indexOf(")", r.length - n) - r.length) &&
                  ((t[0] = t[0].slice(0, n)), (t[2] = r.slice(0, n))),
              t.slice(0, 3));
        }
      },
      filter: {
        TAG: function e(t) {
          var n = t.replace(be, xe).toLowerCase();
          return "*" === t
            ? function() {
                return !0;
              }
            : function(e) {
                return e.nodeName && e.nodeName.toLowerCase() === n;
              };
        },
        CLASS: function e(t) {
          var n = B[t + " "];
          return (
            n ||
            ((n = new RegExp("(^|" + ne + ")" + t + "(" + ne + "|$)")) &&
              B(t, function(e) {
                return n.test(
                  ("string" == typeof e.className && e.className) ||
                    (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                    ""
                );
              }))
          );
        },
        ATTR: function e(n, r, i) {
          return function(e) {
            var t = w.attr(e, n);
            return null == t
              ? "!=" === r
              : !r ||
                  ((t += ""),
                  "=" === r
                    ? t === i
                    : "!=" === r
                    ? t !== i
                    : "^=" === r
                    ? i && 0 === t.indexOf(i)
                    : "*=" === r
                    ? i && -1 < t.indexOf(i)
                    : "$=" === r
                    ? i && t.slice(-i.length) === i
                    : "~=" === r
                    ? -1 < (" " + t.replace(ae, " ") + " ").indexOf(i)
                    : "|=" === r &&
                      (t === i || t.slice(0, i.length + 1) === i + "-"));
          };
        },
        CHILD: function e(h, t, n, m, g) {
          var y = "nth" !== h.slice(0, 3),
            v = "last" !== h.slice(-4),
            b = "of-type" === t;
          return 1 === m && 0 === g
            ? function(e) {
                return !!e.parentNode;
              }
            : function(e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s,
                  u,
                  l = y !== v ? "nextSibling" : "previousSibling",
                  c = e.parentNode,
                  f = b && e.nodeName.toLowerCase(),
                  d = !n && !b,
                  p = !1;
                if (c) {
                  if (y) {
                    for (; l; ) {
                      for (a = e; (a = a[l]); )
                        if (
                          b ? a.nodeName.toLowerCase() === f : 1 === a.nodeType
                        )
                          return !1;
                      u = l = "only" === h && !u && "nextSibling";
                    }
                    return !0;
                  }
                  if (((u = [v ? c.firstChild : c.lastChild]), v && d)) {
                    for (
                      p =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[I] || (a[I] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === W &&
                          r[1]) && r[2],
                        a = s && c.childNodes[s];
                      (a = (++s && a && a[l]) || (p = s = 0) || u.pop());

                    )
                      if (1 === a.nodeType && ++p && a === e) {
                        i[h] = [W, s, p];
                        break;
                      }
                  } else if (
                    (d &&
                      (p = s =
                        (r =
                          (i =
                            (o = (a = e)[I] || (a[I] = {}))[a.uniqueID] ||
                            (o[a.uniqueID] = {}))[h] || [])[0] === W && r[1]),
                    !1 === p)
                  )
                    for (
                      ;
                      (a = (++s && a && a[l]) || (p = s = 0) || u.pop()) &&
                      ((b
                        ? a.nodeName.toLowerCase() !== f
                        : 1 !== a.nodeType) ||
                        !++p ||
                        (d &&
                          ((i =
                            (o = a[I] || (a[I] = {}))[a.uniqueID] ||
                            (o[a.uniqueID] = {}))[h] = [W, p]),
                        a !== e));

                    );
                  return (p -= g) === m || (p % m == 0 && 0 <= p / m);
                }
              };
        },
        PSEUDO: function e(t, o) {
          var n,
            a =
              C.pseudos[t] ||
              C.setFilters[t.toLowerCase()] ||
              w.error("unsupported pseudo: " + t);
          return a[I]
            ? a(o)
            : 1 < a.length
            ? ((n = [t, t, "", o]),
              C.setFilters.hasOwnProperty(t.toLowerCase())
                ? u(function(e, t) {
                    for (var n, r = a(e, o), i = r.length; i--; )
                      e[(n = ee(e, r[i]))] = !(t[n] = r[i]);
                  })
                : function(e) {
                    return a(e, 0, n);
                  })
            : a;
        }
      },
      pseudos: {
        not: u(function(e) {
          var r = [],
            i = [],
            s = k(e.replace(se, "$1"));
          return s[I]
            ? u(function(e, t, n, r) {
                for (var i, o = s(e, null, r, []), a = e.length; a--; )
                  (i = o[a]) && (e[a] = !(t[a] = i));
              })
            : function(e, t, n) {
                return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
              };
        }),
        has: u(function(t) {
          return function(e) {
            return 0 < w(t, e).length;
          };
        }),
        contains: u(function(t) {
          return (
            (t = t.replace(be, xe)),
            function(e) {
              return -1 < (e.textContent || e.innerText || E(e)).indexOf(t);
            }
          );
        }),
        lang: u(function(n) {
          return (
            de.test(n || "") || w.error("unsupported lang: " + n),
            (n = n.replace(be, xe).toLowerCase()),
            function(e) {
              var t;
              do {
                if (
                  (t = H
                    ? e.lang
                    : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                )
                  return (
                    (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                  );
              } while ((e = e.parentNode) && 1 === e.nodeType);
              return !1;
            }
          );
        }),
        target: function e(t) {
          var n = r.location && r.location.hash;
          return n && n.slice(1) === t.id;
        },
        root: function e(t) {
          return t === O;
        },
        focus: function e(t) {
          return (
            t === F.activeElement &&
            (!F.hasFocus || F.hasFocus()) &&
            !!(t.type || t.href || ~t.tabIndex)
          );
        },
        enabled: a(!1),
        disabled: a(!0),
        checked: function e(t) {
          var n = t.nodeName.toLowerCase();
          return (
            ("input" === n && !!t.checked) || ("option" === n && !!t.selected)
          );
        },
        selected: function e(t) {
          return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
        },
        empty: function e(t) {
          for (t = t.firstChild; t; t = t.nextSibling)
            if (t.nodeType < 6) return !1;
          return !0;
        },
        parent: function e(t) {
          return !C.pseudos.empty(t);
        },
        header: function e(t) {
          return me.test(t.nodeName);
        },
        input: function e(t) {
          return he.test(t.nodeName);
        },
        button: function e(t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n && "button" === t.type) || "button" === n;
        },
        text: function e(t) {
          var n;
          return (
            "input" === t.nodeName.toLowerCase() &&
            "text" === t.type &&
            (null == (n = t.getAttribute("type")) || "text" === n.toLowerCase())
          );
        },
        first: s(function() {
          return [0];
        }),
        last: s(function(e, t) {
          return [t - 1];
        }),
        eq: s(function(e, t, n) {
          return [n < 0 ? n + t : n];
        }),
        even: s(function(e, t) {
          for (var n = 0; n < t; n += 2) e.push(n);
          return e;
        }),
        odd: s(function(e, t) {
          for (var n = 1; n < t; n += 2) e.push(n);
          return e;
        }),
        lt: s(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; 0 <= --r; ) e.push(r);
          return e;
        }),
        gt: s(function(e, t, n) {
          for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
          return e;
        })
      }
    }).pseudos.nth = C.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      C.pseudos[y] = n(y);
    for (y in { submit: !0, reset: !0 }) C.pseudos[y] = o(y);
    return (
      (c.prototype = C.filters = C.pseudos),
      (C.setFilters = new c()),
      (A = w.tokenize = function(e, t) {
        var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = z[e + " "];
        if (l) return t ? 0 : l.slice(0);
        for (a = e, s = [], u = C.preFilter; a; ) {
          for (o in ((n && !(r = ue.exec(a))) ||
            (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
          (n = !1),
          (r = le.exec(a)) &&
            ((n = r.shift()),
            i.push({ value: n, type: r[0].replace(se, " ") }),
            (a = a.slice(n.length))),
          C.filter))
            !(r = pe[o].exec(a)) ||
              (u[o] && !(r = u[o](r))) ||
              ((n = r.shift()),
              i.push({ value: n, type: o, matches: r }),
              (a = a.slice(n.length)));
          if (!n) break;
        }
        return t ? a.length : a ? w.error(e) : z(e, s).slice(0);
      }),
      (k = w.compile = function(e, t) {
        var n,
          r = [],
          i = [],
          o = U[e + " "];
        if (!o) {
          for (t || (t = A(e)), n = t.length; n--; )
            (o = m(t[n]))[I] ? r.push(o) : i.push(o);
          (o = U(e, g(i, r))).selector = e;
        }
        return o;
      }),
      (N = w.select = function(e, t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l = "function" == typeof e && e,
          c = !r && A((e = l.selector || e));
        if (((n = n || []), 1 === c.length)) {
          if (
            2 < (o = c[0] = c[0].slice(0)).length &&
            "ID" === (a = o[0]).type &&
            9 === t.nodeType &&
            H &&
            C.relative[o[1].type]
          ) {
            if (!(t = (C.find.ID(a.matches[0].replace(be, xe), t) || [])[0]))
              return n;
            l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
          }
          for (
            i = pe.needsContext.test(e) ? 0 : o.length;
            i-- && ((a = o[i]), !C.relative[(s = a.type)]);

          )
            if (
              (u = C.find[s]) &&
              (r = u(
                a.matches[0].replace(be, xe),
                (ve.test(o[0].type) && p(t.parentNode)) || t
              ))
            ) {
              if ((o.splice(i, 1), !(e = r.length && h(o))))
                return K.apply(n, r), n;
              break;
            }
        }
        return (
          (l || k(e, c))(
            r,
            t,
            !H,
            n,
            !t || (ve.test(e) && p(t.parentNode)) || t
          ),
          n
        );
      }),
      (x.sortStable =
        I.split("")
          .sort(X)
          .join("") === I),
      (x.detectDuplicates = !!q),
      L(),
      (x.sortDetached = i(function(e) {
        return 1 & e.compareDocumentPosition(F.createElement("fieldset"));
      })),
      i(function(e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        t("type|href|height|width", function(e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (x.attributes &&
        i(function(e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        t("value", function(e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      i(function(e) {
        return null == e.getAttribute("disabled");
      }) ||
        t(te, function(e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      w
    );
  })(E);
  (me.find = xe),
    (me.expr = xe.selectors),
    (me.expr[":"] = me.expr.pseudos),
    (me.uniqueSort = me.unique = xe.uniqueSort),
    (me.text = xe.getText),
    (me.isXMLDoc = xe.isXML),
    (me.contains = xe.contains),
    (me.escapeSelector = xe.escape);
  var we = function e(t, n, r) {
      for (var i = [], o = void 0 !== r; (t = t[n]) && 9 !== t.nodeType; )
        if (1 === t.nodeType) {
          if (o && me(t).is(r)) break;
          i.push(t);
        }
      return i;
    },
    Te = function e(t, n) {
      for (var r = []; t; t = t.nextSibling)
        1 === t.nodeType && t !== n && r.push(t);
      return r;
    },
    Ce = me.expr.match.needsContext,
    Ee = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
    Se = /^.[^:#\[\.,]*$/;
  (me.filter = function(e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? me.find.matchesSelector(r, e)
          ? [r]
          : []
        : me.find.matches(
            e,
            me.grep(t, function(e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    me.fn.extend({
      find: function e(t) {
        var n,
          r,
          i = this.length,
          o = this;
        if ("string" != typeof t)
          return this.pushStack(
            me(t).filter(function() {
              for (n = 0; n < i; n++) if (me.contains(o[n], this)) return !0;
            })
          );
        for (r = this.pushStack([]), n = 0; n < i; n++) me.find(t, o[n], r);
        return 1 < i ? me.uniqueSort(r) : r;
      },
      filter: function e(t) {
        return this.pushStack(n(this, t || [], !1));
      },
      not: function e(t) {
        return this.pushStack(n(this, t || [], !0));
      },
      is: function e(t) {
        return !!n(
          this,
          "string" == typeof t && Ce.test(t) ? me(t) : t || [],
          !1
        ).length;
      }
    });
  var Ae,
    ke = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
    Ne;
  ((me.fn.init = function(e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || Ae), "string" != typeof e))
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : me.isFunction(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(me)
        : me.makeArray(e, this);
    if (
      !(r =
        "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
          ? [null, e, null]
          : ke.exec(e)) ||
      (!r[1] && t)
    )
      return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
    if (r[1]) {
      if (
        ((t = t instanceof me ? t[0] : t),
        me.merge(
          this,
          me.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ne, !0)
        ),
        Ee.test(r[1]) && me.isPlainObject(t))
      )
        for (r in t)
          me.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
      return this;
    }
    return (
      (i = ne.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
    );
  }).prototype = me.fn),
    (Ae = me(ne));
  var je = /^(?:parents|prev(?:Until|All))/,
    De = { children: !0, contents: !0, next: !0, prev: !0 };
  me.fn.extend({
    has: function e(t) {
      var n = me(t, this),
        r = n.length;
      return this.filter(function() {
        for (var e = 0; e < r; e++) if (me.contains(this, n[e])) return !0;
      });
    },
    closest: function e(t, n) {
      var r,
        i = 0,
        o = this.length,
        a = [],
        s = "string" != typeof t && me(t);
      if (!Ce.test(t))
        for (; i < o; i++)
          for (r = this[i]; r && r !== n; r = r.parentNode)
            if (
              r.nodeType < 11 &&
              (s
                ? -1 < s.index(r)
                : 1 === r.nodeType && me.find.matchesSelector(r, t))
            ) {
              a.push(r);
              break;
            }
      return this.pushStack(1 < a.length ? me.uniqueSort(a) : a);
    },
    index: function e(t) {
      return t
        ? "string" == typeof t
          ? se.call(me(t), this[0])
          : se.call(this, t.jquery ? t[0] : t)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function e(t, n) {
      return this.pushStack(me.uniqueSort(me.merge(this.get(), me(t, n))));
    },
    addBack: function e(t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    }
  }),
    me.each(
      {
        parent: function e(t) {
          var n = t.parentNode;
          return n && 11 !== n.nodeType ? n : null;
        },
        parents: function e(t) {
          return we(t, "parentNode");
        },
        parentsUntil: function e(t, n, r) {
          return we(t, "parentNode", r);
        },
        next: function e(t) {
          return r(t, "nextSibling");
        },
        prev: function e(t) {
          return r(t, "previousSibling");
        },
        nextAll: function e(t) {
          return we(t, "nextSibling");
        },
        prevAll: function e(t) {
          return we(t, "previousSibling");
        },
        nextUntil: function e(t, n, r) {
          return we(t, "nextSibling", r);
        },
        prevUntil: function e(t, n, r) {
          return we(t, "previousSibling", r);
        },
        siblings: function e(t) {
          return Te((t.parentNode || {}).firstChild, t);
        },
        children: function e(t) {
          return Te(t.firstChild);
        },
        contents: function e(t) {
          return c(t, "iframe")
            ? t.contentDocument
            : (c(t, "template") && (t = t.content || t),
              me.merge([], t.childNodes));
        }
      },
      function(r, i) {
        me.fn[r] = function(e, t) {
          var n = me.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = me.filter(t, n)),
            1 < this.length &&
              (De[r] || me.uniqueSort(n), je.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var qe = /[^\x20\t\r\n\f]+/g;
  (me.Callbacks = function(r) {
    r = "string" == typeof r ? f(r) : me.extend({}, r);
    var i,
      t,
      n,
      o,
      a = [],
      s = [],
      u = -1,
      l = function e() {
        for (o = o || r.once, n = i = !0; s.length; u = -1)
          for (t = s.shift(); ++u < a.length; )
            !1 === a[u].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((u = a.length), (t = !1));
        r.memory || (t = !1), (i = !1), o && (a = t ? [] : "");
      },
      c = {
        add: function e() {
          return (
            a &&
              (t && !i && ((u = a.length - 1), s.push(t)),
              (function n(e) {
                me.each(e, function(e, t) {
                  me.isFunction(t)
                    ? (r.unique && c.has(t)) || a.push(t)
                    : t && t.length && "string" !== me.type(t) && n(t);
                });
              })(arguments),
              t && !i && l()),
            this
          );
        },
        remove: function e() {
          return (
            me.each(arguments, function(e, t) {
              for (var n; -1 < (n = me.inArray(t, a, n)); )
                a.splice(n, 1), n <= u && u--;
            }),
            this
          );
        },
        has: function e(t) {
          return t ? -1 < me.inArray(t, a) : 0 < a.length;
        },
        empty: function e() {
          return a && (a = []), this;
        },
        disable: function e() {
          return (o = s = []), (a = t = ""), this;
        },
        disabled: function e() {
          return !a;
        },
        lock: function e() {
          return (o = s = []), t || i || (a = t = ""), this;
        },
        locked: function e() {
          return !!o;
        },
        fireWith: function e(t, n) {
          return (
            o ||
              ((n = [t, (n = n || []).slice ? n.slice() : n]),
              s.push(n),
              i || l()),
            this
          );
        },
        fire: function e() {
          return c.fireWith(this, arguments), this;
        },
        fired: function e() {
          return !!n;
        }
      };
    return c;
  }),
    me.extend({
      Deferred: function e(t) {
        var o = [
            [
              "notify",
              "progress",
              me.Callbacks("memory"),
              me.Callbacks("memory"),
              2
            ],
            [
              "resolve",
              "done",
              me.Callbacks("once memory"),
              me.Callbacks("once memory"),
              0,
              "resolved"
            ],
            [
              "reject",
              "fail",
              me.Callbacks("once memory"),
              me.Callbacks("once memory"),
              1,
              "rejected"
            ]
          ],
          i = "pending",
          a = {
            state: function e() {
              return i;
            },
            always: function e() {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function e(t) {
              return a.then(null, t);
            },
            pipe: function e() {
              var i = arguments;
              return me
                .Deferred(function(r) {
                  me.each(o, function(e, t) {
                    var n = me.isFunction(i[t[4]]) && i[t[4]];
                    s[t[1]](function() {
                      var e = n && n.apply(this, arguments);
                      e && me.isFunction(e.promise)
                        ? e
                            .promise()
                            .progress(r.notify)
                            .done(r.resolve)
                            .fail(r.reject)
                        : r[t[0] + "With"](this, n ? [e] : arguments);
                    });
                  }),
                    (i = null);
                })
                .promise();
            },
            then: function e(t, n, r) {
              function u(i, o, a, s) {
                return function() {
                  var n = this,
                    r = arguments,
                    e = function e() {
                      var t, e;
                      if (!(i < l)) {
                        if ((t = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (e =
                          t &&
                          ("object" == _typeof(t) || "function" == typeof t) &&
                          t.then),
                          me.isFunction(e)
                            ? s
                              ? e.call(t, u(l, o, d, s), u(l, o, p, s))
                              : (l++,
                                e.call(
                                  t,
                                  u(l, o, d, s),
                                  u(l, o, p, s),
                                  u(l, o, d, o.notifyWith)
                                ))
                            : (a !== d && ((n = void 0), (r = [t])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function() {
                          try {
                            e();
                          } catch (e) {
                            me.Deferred.exceptionHook &&
                              me.Deferred.exceptionHook(e, t.stackTrace),
                              l <= i + 1 &&
                                (a !== p && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (me.Deferred.getStackHook &&
                        (t.stackTrace = me.Deferred.getStackHook()),
                      E.setTimeout(t));
                };
              }
              var l = 0;
              return me
                .Deferred(function(e) {
                  o[0][3].add(u(0, e, me.isFunction(r) ? r : d, e.notifyWith)),
                    o[1][3].add(u(0, e, me.isFunction(t) ? t : d)),
                    o[2][3].add(u(0, e, me.isFunction(n) ? n : p));
                })
                .promise();
            },
            promise: function e(t) {
              return null != t ? me.extend(t, a) : a;
            }
          },
          s = {};
        return (
          me.each(o, function(e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function() {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[0][2].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function() {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          t && t.call(s, s),
          s
        );
      },
      when: function e(t) {
        var n = arguments.length,
          r = n,
          i = Array(r),
          o = ie.call(arguments),
          a = me.Deferred(),
          s = function e(t) {
            return function(e) {
              (i[t] = this),
                (o[t] = 1 < arguments.length ? ie.call(arguments) : e),
                --n || a.resolveWith(i, o);
            };
          };
        if (
          n <= 1 &&
          (l(t, a.done(s(r)).resolve, a.reject, !n),
          "pending" === a.state() || me.isFunction(o[r] && o[r].then))
        )
          return a.then();
        for (; r--; ) l(o[r], s(r), a.reject);
        return a.promise();
      }
    });
  var Le = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (me.Deferred.exceptionHook = function(e, t) {
    E.console &&
      E.console.warn &&
      e &&
      Le.test(e.name) &&
      E.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (me.readyException = function(e) {
      E.setTimeout(function() {
        throw e;
      });
    });
  var Fe = me.Deferred();
  (me.fn.ready = function(e) {
    return (
      Fe.then(e).catch(function(e) {
        me.readyException(e);
      }),
      this
    );
  }),
    me.extend({
      isReady: !1,
      readyWait: 1,
      ready: function e(t) {
        (!0 === t ? --me.readyWait : me.isReady) ||
          (((me.isReady = !0) !== t && 0 < --me.readyWait) ||
            Fe.resolveWith(ne, [me]));
      }
    }),
    (me.ready.then = Fe.then),
    "complete" === ne.readyState ||
    ("loading" !== ne.readyState && !ne.documentElement.doScroll)
      ? E.setTimeout(me.ready)
      : (ne.addEventListener("DOMContentLoaded", t),
        E.addEventListener("load", t));
  var Oe = function e(t, n, r, i, o, a, s) {
      var u = 0,
        l = t.length,
        c = null == r;
      if ("object" === me.type(r))
        for (u in ((o = !0), r)) e(t, n, u, r[u], !0, a, s);
      else if (
        void 0 !== i &&
        ((o = !0),
        me.isFunction(i) || (s = !0),
        c &&
          (n = s
            ? (n.call(t, i), null)
            : ((c = n),
              function e(t, n, r) {
                return c.call(me(t), r);
              })),
        n)
      )
        for (; u < l; u++) n(t[u], r, s ? i : i.call(t[u], u, n(t[u], r)));
      return o ? t : c ? n.call(t) : l ? n(t[0], r) : a;
    },
    He = function e(t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
  (i.uid = 1),
    (i.prototype = {
      cache: function e(t) {
        var n = t[this.expando];
        return (
          n ||
            ((n = {}),
            He(t) &&
              (t.nodeType
                ? (t[this.expando] = n)
                : Object.defineProperty(t, this.expando, {
                    value: n,
                    configurable: !0
                  }))),
          n
        );
      },
      set: function e(t, n, r) {
        var i,
          o = this.cache(t);
        if ("string" == typeof n) o[me.camelCase(n)] = r;
        else for (i in n) o[me.camelCase(i)] = n[i];
        return o;
      },
      get: function e(t, n) {
        return void 0 === n
          ? this.cache(t)
          : t[this.expando] && t[this.expando][me.camelCase(n)];
      },
      access: function e(t, n, r) {
        return void 0 === n || (n && "string" == typeof n && void 0 === r)
          ? this.get(t, n)
          : (this.set(t, n, r), void 0 !== r ? r : n);
      },
      remove: function e(t, n) {
        var r,
          i = t[this.expando];
        if (void 0 !== i) {
          if (void 0 !== n) {
            r = (n = Array.isArray(n)
              ? n.map(me.camelCase)
              : (n = me.camelCase(n)) in i
              ? [n]
              : n.match(qe) || []).length;
            for (; r--; ) delete i[n[r]];
          }
          (void 0 === n || me.isEmptyObject(i)) &&
            (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
        }
      },
      hasData: function e(t) {
        var n = t[this.expando];
        return void 0 !== n && !me.isEmptyObject(n);
      }
    });
  var Re = new i(),
    Pe = new i(),
    Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Ve = /[A-Z]/g;
  me.extend({
    hasData: function e(t) {
      return Pe.hasData(t) || Re.hasData(t);
    },
    data: function e(t, n, r) {
      return Pe.access(t, n, r);
    },
    removeData: function e(t, n) {
      Pe.remove(t, n);
    },
    _data: function e(t, n, r) {
      return Re.access(t, n, r);
    },
    _removeData: function e(t, n) {
      Re.remove(t, n);
    }
  }),
    me.fn.extend({
      data: function e(n, t) {
        var r,
          i,
          o,
          a = this[0],
          s = a && a.attributes;
        if (void 0 !== n)
          return "object" == _typeof(n)
            ? this.each(function() {
                Pe.set(this, n);
              })
            : Oe(
                this,
                function(e) {
                  var t;
                  if (a && void 0 === e) {
                    if (void 0 !== (t = Pe.get(a, n))) return t;
                    if (void 0 !== (t = h(a, n))) return t;
                  } else
                    this.each(function() {
                      Pe.set(this, n, e);
                    });
                },
                null,
                t,
                1 < arguments.length,
                null,
                !0
              );
        if (
          this.length &&
          ((o = Pe.get(a)), 1 === a.nodeType && !Re.get(a, "hasDataAttrs"))
        ) {
          for (r = s.length; r--; )
            s[r] &&
              (0 === (i = s[r].name).indexOf("data-") &&
                ((i = me.camelCase(i.slice(5))), h(a, i, o[i])));
          Re.set(a, "hasDataAttrs", !0);
        }
        return o;
      },
      removeData: function e(t) {
        return this.each(function() {
          Pe.remove(this, t);
        });
      }
    }),
    me.extend({
      queue: function e(t, n, r) {
        var i;
        if (t)
          return (
            (n = (n || "fx") + "queue"),
            (i = Re.get(t, n)),
            r &&
              (!i || Array.isArray(r)
                ? (i = Re.access(t, n, me.makeArray(r)))
                : i.push(r)),
            i || []
          );
      },
      dequeue: function e(t, n) {
        n = n || "fx";
        var r = me.queue(t, n),
          i = r.length,
          o = r.shift(),
          a = me._queueHooks(t, n),
          s = function e() {
            me.dequeue(t, n);
          };
        "inprogress" === o && ((o = r.shift()), i--),
          o &&
            ("fx" === n && r.unshift("inprogress"),
            delete a.stop,
            o.call(t, s, a)),
          !i && a && a.empty.fire();
      },
      _queueHooks: function e(t, n) {
        var r = n + "queueHooks";
        return (
          Re.get(t, r) ||
          Re.access(t, r, {
            empty: me.Callbacks("once memory").add(function() {
              Re.remove(t, [n + "queue", r]);
            })
          })
        );
      }
    }),
    me.fn.extend({
      queue: function e(t, n) {
        var r = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), r--),
          arguments.length < r
            ? me.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function() {
                var e = me.queue(this, t, n);
                me._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && me.dequeue(this, t);
              })
        );
      },
      dequeue: function e(t) {
        return this.each(function() {
          me.dequeue(this, t);
        });
      },
      clearQueue: function e(t) {
        return this.queue(t || "fx", []);
      },
      promise: function e(t, n) {
        var r,
          i = 1,
          o = me.Deferred(),
          a = this,
          s = this.length,
          u = function e() {
            --i || o.resolveWith(a, [a]);
          };
        for (
          "string" != typeof t && ((n = t), (t = void 0)), t = t || "fx";
          s--;

        )
          (r = Re.get(a[s], t + "queueHooks")) &&
            r.empty &&
            (i++, r.empty.add(u));
        return u(), o.promise(n);
      }
    });
  var Ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    _e = new RegExp("^(?:([+-])=|)(" + Ie + ")([a-z%]*)$", "i"),
    We = ["Top", "Right", "Bottom", "Left"],
    $e = function e(t, n) {
      return (
        "none" === (t = n || t).style.display ||
        ("" === t.style.display &&
          me.contains(t.ownerDocument, t) &&
          "none" === me.css(t, "display"))
      );
    },
    Be = function e(t, n, r, i) {
      var o,
        a,
        s = {};
      for (a in n) (s[a] = t.style[a]), (t.style[a] = n[a]);
      for (a in ((o = r.apply(t, i || [])), n)) t.style[a] = s[a];
      return o;
    },
    ze = {};
  me.fn.extend({
    show: function e() {
      return y(this, !0);
    },
    hide: function e() {
      return y(this);
    },
    toggle: function e(t) {
      return "boolean" == typeof t
        ? t
          ? this.show()
          : this.hide()
        : this.each(function() {
            $e(this) ? me(this).show() : me(this).hide();
          });
    }
  });
  var Ue = /^(?:checkbox|radio)$/i,
    Xe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    Ye = /^$|\/(?:java|ecma)script/i,
    Ge = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
  (Ge.optgroup = Ge.option),
    (Ge.tbody = Ge.tfoot = Ge.colgroup = Ge.caption = Ge.thead),
    (Ge.th = Ge.td);
  var Qe = /<|&#?\w+;/,
    Je,
    Ke,
    Ze;
  (Ke = ne.createDocumentFragment().appendChild(ne.createElement("div"))),
    (Ze = ne.createElement("input")).setAttribute("type", "radio"),
    Ze.setAttribute("checked", "checked"),
    Ze.setAttribute("name", "t"),
    Ke.appendChild(Ze),
    (pe.checkClone = Ke.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (Ke.innerHTML = "<textarea>x</textarea>"),
    (pe.noCloneChecked = !!Ke.cloneNode(!0).lastChild.defaultValue);
  var et = ne.documentElement,
    tt = /^key/,
    nt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    rt = /^([^.]*)(?:\.(.+)|)/;
  (me.event = {
    global: {},
    add: function e(t, n, r, i, o) {
      var a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        m,
        g,
        y = Re.get(t);
      if (y)
        for (
          r.handler && ((r = (a = r).handler), (o = a.selector)),
            o && me.find.matchesSelector(et, o),
            r.guid || (r.guid = me.guid++),
            (l = y.events) || (l = y.events = {}),
            (s = y.handle) ||
              (s = y.handle = function(e) {
                return void 0 !== me && me.event.triggered !== e.type
                  ? me.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
            c = (n = (n || "").match(qe) || [""]).length;
          c--;

        )
          (h = g = (u = rt.exec(n[c]) || [])[1]),
            (m = (u[2] || "").split(".").sort()),
            h &&
              ((d = me.event.special[h] || {}),
              (h = (o ? d.delegateType : d.bindType) || h),
              (d = me.event.special[h] || {}),
              (f = me.extend(
                {
                  type: h,
                  origType: g,
                  data: i,
                  handler: r,
                  guid: r.guid,
                  selector: o,
                  needsContext: o && me.expr.match.needsContext.test(o),
                  namespace: m.join(".")
                },
                a
              )),
              (p = l[h]) ||
                (((p = l[h] = []).delegateCount = 0),
                (d.setup && !1 !== d.setup.call(t, i, m, s)) ||
                  (t.addEventListener && t.addEventListener(h, s))),
              d.add &&
                (d.add.call(t, f), f.handler.guid || (f.handler.guid = r.guid)),
              o ? p.splice(p.delegateCount++, 0, f) : p.push(f),
              (me.event.global[h] = !0));
    },
    remove: function e(t, n, r, i, o) {
      var a,
        s,
        u,
        l,
        c,
        f,
        d,
        p,
        h,
        m,
        g,
        y = Re.hasData(t) && Re.get(t);
      if (y && (l = y.events)) {
        for (c = (n = (n || "").match(qe) || [""]).length; c--; )
          if (
            ((h = g = (u = rt.exec(n[c]) || [])[1]),
            (m = (u[2] || "").split(".").sort()),
            h)
          ) {
            for (
              d = me.event.special[h] || {},
                p = l[(h = (i ? d.delegateType : d.bindType) || h)] || [],
                u =
                  u[2] &&
                  new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = a = p.length;
              a--;

            )
              (f = p[a]),
                (!o && g !== f.origType) ||
                  (r && r.guid !== f.guid) ||
                  (u && !u.test(f.namespace)) ||
                  (i && i !== f.selector && ("**" !== i || !f.selector)) ||
                  (p.splice(a, 1),
                  f.selector && p.delegateCount--,
                  d.remove && d.remove.call(t, f));
            s &&
              !p.length &&
              ((d.teardown && !1 !== d.teardown.call(t, m, y.handle)) ||
                me.removeEvent(t, h, y.handle),
              delete l[h]);
          } else for (h in l) me.event.remove(t, h + n[c], r, i, !0);
        me.isEmptyObject(l) && Re.remove(t, "handle events");
      }
    },
    dispatch: function e(t) {
      var n = me.event.fix(t),
        r,
        i,
        o,
        a,
        s,
        u,
        l = new Array(arguments.length),
        c = (Re.get(this, "events") || {})[n.type] || [],
        f = me.event.special[n.type] || {};
      for (l[0] = n, r = 1; r < arguments.length; r++) l[r] = arguments[r];
      if (
        ((n.delegateTarget = this),
        !f.preDispatch || !1 !== f.preDispatch.call(this, n))
      ) {
        for (
          u = me.event.handlers.call(this, n, c), r = 0;
          (a = u[r++]) && !n.isPropagationStopped();

        )
          for (
            n.currentTarget = a.elem, i = 0;
            (s = a.handlers[i++]) && !n.isImmediatePropagationStopped();

          )
            (n.rnamespace && !n.rnamespace.test(s.namespace)) ||
              ((n.handleObj = s),
              (n.data = s.data),
              void 0 !==
                (o = (
                  (me.event.special[s.origType] || {}).handle || s.handler
                ).apply(a.elem, l)) &&
                !1 === (n.result = o) &&
                (n.preventDefault(), n.stopPropagation()));
        return f.postDispatch && f.postDispatch.call(this, n), n.result;
      }
    },
    handlers: function e(t, n) {
      var r,
        i,
        o,
        a,
        s,
        u = [],
        l = n.delegateCount,
        c = t.target;
      if (l && c.nodeType && !("click" === t.type && 1 <= t.button))
        for (; c !== this; c = c.parentNode || this)
          if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
            for (a = [], s = {}, r = 0; r < l; r++)
              void 0 === s[(o = (i = n[r]).selector + " ")] &&
                (s[o] = i.needsContext
                  ? -1 < me(o, this).index(c)
                  : me.find(o, this, null, [c]).length),
                s[o] && a.push(i);
            a.length && u.push({ elem: c, handlers: a });
          }
      return (
        (c = this), l < n.length && u.push({ elem: c, handlers: n.slice(l) }), u
      );
    },
    addProp: function e(n, t) {
      Object.defineProperty(me.Event.prototype, n, {
        enumerable: !0,
        configurable: !0,
        get: me.isFunction(t)
          ? function() {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function() {
              if (this.originalEvent) return this.originalEvent[n];
            },
        set: function e(t) {
          Object.defineProperty(this, n, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
          });
        }
      });
    },
    fix: function e(t) {
      return t[me.expando] ? t : new me.Event(t);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function e() {
          if (this !== T() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function e() {
          if (this === T() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function e() {
          if ("checkbox" === this.type && this.click && c(this, "input"))
            return this.click(), !1;
        },
        _default: function e(t) {
          return c(t.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function e(t) {
          void 0 !== t.result &&
            t.originalEvent &&
            (t.originalEvent.returnValue = t.result);
        }
      }
    }
  }),
    (me.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (me.Event = function(e, t) {
      return this instanceof me.Event
        ? (e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? a
                  : w),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
          t && me.extend(this, t),
          (this.timeStamp = (e && e.timeStamp) || me.now()),
          void (this[me.expando] = !0))
        : new me.Event(e, t);
    }),
    (me.Event.prototype = {
      constructor: me.Event,
      isDefaultPrevented: w,
      isPropagationStopped: w,
      isImmediatePropagationStopped: w,
      isSimulated: !1,
      preventDefault: function e() {
        var t = this.originalEvent;
        (this.isDefaultPrevented = a),
          t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function e() {
        var t = this.originalEvent;
        (this.isPropagationStopped = a),
          t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function e() {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = a),
          t && !this.isSimulated && t.stopImmediatePropagation(),
          this.stopPropagation();
      }
    }),
    me.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function e(t) {
          var n = t.button;
          return null == t.which && tt.test(t.type)
            ? null != t.charCode
              ? t.charCode
              : t.keyCode
            : !t.which && void 0 !== n && nt.test(t.type)
            ? 1 & n
              ? 1
              : 2 & n
              ? 3
              : 4 & n
              ? 2
              : 0
            : t.which;
        }
      },
      me.event.addProp
    ),
    me.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
      },
      function(e, a) {
        me.event.special[e] = {
          delegateType: a,
          bindType: a,
          handle: function e(t) {
            var n,
              r = this,
              i = t.relatedTarget,
              o = t.handleObj;
            return (
              (i && (i === r || me.contains(r, i))) ||
                ((t.type = o.origType),
                (n = o.handler.apply(this, arguments)),
                (t.type = a)),
              n
            );
          }
        };
      }
    ),
    me.fn.extend({
      on: function e(t, n, r, i) {
        return C(this, t, n, r, i);
      },
      one: function e(t, n, r, i) {
        return C(this, t, n, r, i, 1);
      },
      off: function e(t, n, r) {
        var i, o;
        if (t && t.preventDefault && t.handleObj)
          return (
            (i = t.handleObj),
            me(t.delegateTarget).off(
              i.namespace ? i.origType + "." + i.namespace : i.origType,
              i.selector,
              i.handler
            ),
            this
          );
        if ("object" != _typeof(t))
          return (
            (!1 !== n && "function" != typeof n) || ((r = n), (n = void 0)),
            !1 === r && (r = w),
            this.each(function() {
              me.event.remove(this, t, r, n);
            })
          );
        for (o in t) this.off(o, n, t[o]);
        return this;
      }
    });
  var it = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    ot = /<script|<style|<link/i,
    at = /checked\s*(?:[^=]|=\s*.checked.)/i,
    st = /^true\/(.*)/,
    ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  me.extend({
    htmlPrefilter: function e(t) {
      return t.replace(it, "<$1></$2>");
    },
    clone: function e(t, n, r) {
      var i,
        o,
        a,
        s,
        u = t.cloneNode(!0),
        l = me.contains(t.ownerDocument, t);
      if (
        !(
          pe.noCloneChecked ||
          (1 !== t.nodeType && 11 !== t.nodeType) ||
          me.isXMLDoc(t)
        )
      )
        for (s = v(u), i = 0, o = (a = v(t)).length; i < o; i++) j(a[i], s[i]);
      if (n)
        if (r)
          for (a = a || v(t), s = s || v(u), i = 0, o = a.length; i < o; i++)
            N(a[i], s[i]);
        else N(t, u);
      return 0 < (s = v(u, "script")).length && b(s, !l && v(t, "script")), u;
    },
    cleanData: function e(t) {
      for (var n, r, i, o = me.event.special, a = 0; void 0 !== (r = t[a]); a++)
        if (He(r)) {
          if ((n = r[Re.expando])) {
            if (n.events)
              for (i in n.events)
                o[i] ? me.event.remove(r, i) : me.removeEvent(r, i, n.handle);
            r[Re.expando] = void 0;
          }
          r[Pe.expando] && (r[Pe.expando] = void 0);
        }
    }
  }),
    me.fn.extend({
      detach: function e(t) {
        return q(this, t, !0);
      },
      remove: function e(t) {
        return q(this, t);
      },
      text: function e(t) {
        return Oe(
          this,
          function(e) {
            return void 0 === e
              ? me.text(this)
              : this.empty().each(function() {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          t,
          arguments.length
        );
      },
      append: function e() {
        return D(this, arguments, function(e) {
          var t;
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            S(this, e).appendChild(e);
        });
      },
      prepend: function e() {
        return D(this, arguments, function(e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = S(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function e() {
        return D(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function e() {
        return D(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function e() {
        for (var t, n = 0; null != (t = this[n]); n++)
          1 === t.nodeType && (me.cleanData(v(t, !1)), (t.textContent = ""));
        return this;
      },
      clone: function e(t, n) {
        return (
          (t = null != t && t),
          (n = null == n ? t : n),
          this.map(function() {
            return me.clone(this, t, n);
          })
        );
      },
      html: function e(t) {
        return Oe(
          this,
          function(e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ot.test(e) &&
              !Ge[(Xe.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = me.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (me.cleanData(v(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function e() {
        var n = [];
        return D(
          this,
          arguments,
          function(e) {
            var t = this.parentNode;
            me.inArray(this, n) < 0 &&
              (me.cleanData(v(this)), t && t.replaceChild(e, this));
          },
          n
        );
      }
    }),
    me.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
      },
      function(e, a) {
        me.fn[e] = function(e) {
          for (var t, n = [], r = me(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              me(r[o])[a](t),
              ae.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var lt = /^margin/,
    ct = new RegExp("^(" + Ie + ")(?!px)[a-z%]+$", "i"),
    ft = function e(t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = E), n.getComputedStyle(t);
    };
  !(function() {
    function t() {
      if (s) {
        (s.style.cssText =
          "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
          (s.innerHTML = ""),
          et.appendChild(a);
        var e = E.getComputedStyle(s);
        (n = "1%" !== e.top),
          (o = "2px" === e.marginLeft),
          (r = "4px" === e.width),
          (s.style.marginRight = "50%"),
          (i = "4px" === e.marginRight),
          et.removeChild(a),
          (s = null);
      }
    }
    var n,
      r,
      i,
      o,
      a = ne.createElement("div"),
      s = ne.createElement("div");
    s.style &&
      ((s.style.backgroundClip = "content-box"),
      (s.cloneNode(!0).style.backgroundClip = ""),
      (pe.clearCloneStyle = "content-box" === s.style.backgroundClip),
      (a.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      a.appendChild(s),
      me.extend(pe, {
        pixelPosition: function e() {
          return t(), n;
        },
        boxSizingReliable: function e() {
          return t(), r;
        },
        pixelMarginRight: function e() {
          return t(), i;
        },
        reliableMarginLeft: function e() {
          return t(), o;
        }
      }));
  })();
  var dt = /^(none|table(?!-c[ea]).+)/,
    pt = /^--/,
    ht = { position: "absolute", visibility: "hidden", display: "block" },
    mt = { letterSpacing: "0", fontWeight: "400" },
    gt = ["Webkit", "Moz", "ms"],
    yt = ne.createElement("div").style;
  me.extend({
    cssHooks: {
      opacity: {
        get: function e(t, n) {
          if (n) {
            var r = L(t, "opacity");
            return "" === r ? "1" : r;
          }
        }
      }
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: { float: "cssFloat" },
    style: function e(t, n, r, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var o,
          a,
          s,
          u = me.camelCase(n),
          l = pt.test(n),
          c = t.style;
        return (
          l || (n = H(u)),
          (s = me.cssHooks[n] || me.cssHooks[u]),
          void 0 === r
            ? s && "get" in s && void 0 !== (o = s.get(t, !1, i))
              ? o
              : c[n]
            : ("string" === (a = _typeof(r)) &&
                (o = _e.exec(r)) &&
                o[1] &&
                ((r = g(t, n, o)), (a = "number")),
              void (
                null != r &&
                r == r &&
                ("number" === a &&
                  (r += (o && o[3]) || (me.cssNumber[u] ? "" : "px")),
                pe.clearCloneStyle ||
                  "" !== r ||
                  0 !== n.indexOf("background") ||
                  (c[n] = "inherit"),
                (s && "set" in s && void 0 === (r = s.set(t, r, i))) ||
                  (l ? c.setProperty(n, r) : (c[n] = r)))
              ))
        );
      }
    },
    css: function e(t, n, r, i) {
      var o,
        a,
        s,
        u = me.camelCase(n),
        l;
      return (
        pt.test(n) || (n = H(u)),
        (s = me.cssHooks[n] || me.cssHooks[u]) &&
          "get" in s &&
          (o = s.get(t, !0, r)),
        void 0 === o && (o = L(t, n, i)),
        "normal" === o && n in mt && (o = mt[n]),
        "" === r || r
          ? ((a = parseFloat(o)), !0 === r || isFinite(a) ? a || 0 : o)
          : o
      );
    }
  }),
    me.each(["height", "width"], function(e, s) {
      me.cssHooks[s] = {
        get: function e(t, n, r) {
          if (n)
            return !dt.test(me.css(t, "display")) ||
              (t.getClientRects().length && t.getBoundingClientRect().width)
              ? M(t, s, r)
              : Be(t, ht, function() {
                  return M(t, s, r);
                });
        },
        set: function e(t, n, r) {
          var i,
            o = r && ft(t),
            a =
              r &&
              P(t, s, r, "border-box" === me.css(t, "boxSizing", !1, o), o);
          return (
            a &&
              (i = _e.exec(n)) &&
              "px" !== (i[3] || "px") &&
              ((t.style[s] = n), (n = me.css(t, s))),
            R(t, n, a)
          );
        }
      };
    }),
    (me.cssHooks.marginLeft = F(pe.reliableMarginLeft, function(e, t) {
      if (t)
        return (
          (parseFloat(L(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Be(e, { marginLeft: 0 }, function() {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    me.each({ margin: "", padding: "", border: "Width" }, function(o, a) {
      (me.cssHooks[o + a] = {
        expand: function e(t) {
          for (
            var n = 0, r = {}, i = "string" == typeof t ? t.split(" ") : [t];
            n < 4;
            n++
          )
            r[o + We[n] + a] = i[n] || i[n - 2] || i[0];
          return r;
        }
      }),
        lt.test(o) || (me.cssHooks[o + a].set = R);
    }),
    me.fn.extend({
      css: function e(t, n) {
        return Oe(
          this,
          function(e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = ft(e), i = t.length; a < i; a++)
                o[t[a]] = me.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? me.style(e, t, n) : me.css(e, t);
          },
          t,
          n,
          1 < arguments.length
        );
      }
    }),
    ((me.Tween = V).prototype = {
      constructor: V,
      init: function e(t, n, r, i, o, a) {
        (this.elem = t),
          (this.prop = r),
          (this.easing = o || me.easing._default),
          (this.options = n),
          (this.start = this.now = this.cur()),
          (this.end = i),
          (this.unit = a || (me.cssNumber[r] ? "" : "px"));
      },
      cur: function e() {
        var t = V.propHooks[this.prop];
        return t && t.get ? t.get(this) : V.propHooks._default.get(this);
      },
      run: function e(t) {
        var n,
          r = V.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = n = me.easing[this.easing](
                t,
                this.options.duration * t,
                0,
                1,
                this.options.duration
              ))
            : (this.pos = n = t),
          (this.now = (this.end - this.start) * n + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          r && r.set ? r.set(this) : V.propHooks._default.set(this),
          this
        );
      }
    }),
    (V.prototype.init.prototype = V.prototype),
    (V.propHooks = {
      _default: {
        get: function e(t) {
          var n;
          return 1 !== t.elem.nodeType ||
            (null != t.elem[t.prop] && null == t.elem.style[t.prop])
            ? t.elem[t.prop]
            : (n = me.css(t.elem, t.prop, "")) && "auto" !== n
            ? n
            : 0;
        },
        set: function e(t) {
          me.fx.step[t.prop]
            ? me.fx.step[t.prop](t)
            : 1 !== t.elem.nodeType ||
              (null == t.elem.style[me.cssProps[t.prop]] &&
                !me.cssHooks[t.prop])
            ? (t.elem[t.prop] = t.now)
            : me.style(t.elem, t.prop, t.now + t.unit);
        }
      }
    }),
    (V.propHooks.scrollTop = V.propHooks.scrollLeft = {
      set: function e(t) {
        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
      }
    }),
    (me.easing = {
      linear: function e(t) {
        return t;
      },
      swing: function e(t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
      _default: "swing"
    }),
    (me.fx = V.prototype.init),
    (me.fx.step = {});
  var vt,
    bt,
    xt = /^(?:toggle|show|hide)$/,
    wt = /queueHooks$/,
    Tt,
    Ct,
    Et;
  (me.Animation = me.extend(U, {
    tweeners: {
      "*": [
        function(e, t) {
          var n = this.createTween(e, t);
          return g(n.elem, e, _e.exec(t), n), n;
        }
      ]
    },
    tweener: function e(t, n) {
      for (
        var r,
          i = 0,
          o = (t = me.isFunction(t) ? ((n = t), ["*"]) : t.match(qe)).length;
        i < o;
        i++
      )
        (r = t[i]),
          (U.tweeners[r] = U.tweeners[r] || []),
          U.tweeners[r].unshift(n);
    },
    prefilters: [B],
    prefilter: function e(t, n) {
      n ? U.prefilters.unshift(t) : U.prefilters.push(t);
    }
  })),
    (me.speed = function(e, t, n) {
      var r =
        e && "object" == _typeof(e)
          ? me.extend({}, e)
          : {
              complete: n || (!n && t) || (me.isFunction(e) && e),
              duration: e,
              easing: (n && t) || (t && !me.isFunction(t) && t)
            };
      return (
        me.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in me.fx.speeds
              ? (r.duration = me.fx.speeds[r.duration])
              : (r.duration = me.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function() {
          me.isFunction(r.old) && r.old.call(this),
            r.queue && me.dequeue(this, r.queue);
        }),
        r
      );
    }),
    me.fn.extend({
      fadeTo: function e(t, n, r, i) {
        return this.filter($e)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: n }, t, r, i);
      },
      animate: function e(n, t, r, i) {
        var o = me.isEmptyObject(n),
          a = me.speed(t, r, i),
          s = function e() {
            var t = U(this, me.extend({}, n), a);
            (o || Re.get(this, "finish")) && t.stop(!0);
          };
        return (
          (s.finish = s),
          o || !1 === a.queue ? this.each(s) : this.queue(a.queue, s)
        );
      },
      stop: function e(i, t, o) {
        var a = function e(t) {
          var n = t.stop;
          delete t.stop, n(o);
        };
        return (
          "string" != typeof i && ((o = t), (t = i), (i = void 0)),
          t && !1 !== i && this.queue(i || "fx", []),
          this.each(function() {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = me.timers,
              r = Re.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && wt.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || me.dequeue(this, i);
          })
        );
      },
      finish: function e(a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function() {
            var e,
              t = Re.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = me.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                me.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      }
    }),
    me.each(["toggle", "show", "hide"], function(e, r) {
      var i = me.fn[r];
      me.fn[r] = function(e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(W(r, !0), e, t, n);
      };
    }),
    me.each(
      {
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" }
      },
      function(e, r) {
        me.fn[e] = function(e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (me.timers = []),
    (me.fx.tick = function() {
      var e,
        t = 0,
        n = me.timers;
      for (vt = me.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || me.fx.stop(), (vt = void 0);
    }),
    (me.fx.timer = function(e) {
      me.timers.push(e), me.fx.start();
    }),
    (me.fx.interval = 13),
    (me.fx.start = function() {
      bt || ((bt = !0), I());
    }),
    (me.fx.stop = function() {
      bt = null;
    }),
    (me.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (me.fn.delay = function(r, e) {
      return (
        (r = (me.fx && me.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function(e, t) {
          var n = E.setTimeout(e, r);
          t.stop = function() {
            E.clearTimeout(n);
          };
        })
      );
    }),
    (Tt = ne.createElement("input")),
    (Et = ne.createElement("select").appendChild(ne.createElement("option"))),
    (Tt.type = "checkbox"),
    (pe.checkOn = "" !== Tt.value),
    (pe.optSelected = Et.selected),
    ((Tt = ne.createElement("input")).value = "t"),
    (Tt.type = "radio"),
    (pe.radioValue = "t" === Tt.value);
  var St,
    At = me.expr.attrHandle;
  me.fn.extend({
    attr: function e(t, n) {
      return Oe(this, me.attr, t, n, 1 < arguments.length);
    },
    removeAttr: function e(t) {
      return this.each(function() {
        me.removeAttr(this, t);
      });
    }
  }),
    me.extend({
      attr: function e(t, n, r) {
        var i,
          o,
          a = t.nodeType;
        if (3 !== a && 8 !== a && 2 !== a)
          return void 0 === t.getAttribute
            ? me.prop(t, n, r)
            : ((1 === a && me.isXMLDoc(t)) ||
                (o =
                  me.attrHooks[n.toLowerCase()] ||
                  (me.expr.match.bool.test(n) ? St : void 0)),
              void 0 !== r
                ? null === r
                  ? void me.removeAttr(t, n)
                  : o && "set" in o && void 0 !== (i = o.set(t, r, n))
                  ? i
                  : (t.setAttribute(n, r + ""), r)
                : o && "get" in o && null !== (i = o.get(t, n))
                ? i
                : null == (i = me.find.attr(t, n))
                ? void 0
                : i);
      },
      attrHooks: {
        type: {
          set: function e(t, n) {
            if (!pe.radioValue && "radio" === n && c(t, "input")) {
              var r = t.value;
              return t.setAttribute("type", n), r && (t.value = r), n;
            }
          }
        }
      },
      removeAttr: function e(t, n) {
        var r,
          i = 0,
          o = n && n.match(qe);
        if (o && 1 === t.nodeType) for (; (r = o[i++]); ) t.removeAttribute(r);
      }
    }),
    (St = {
      set: function e(t, n, r) {
        return !1 === n ? me.removeAttr(t, r) : t.setAttribute(r, r), r;
      }
    }),
    me.each(me.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var a = At[t] || me.find.attr;
      At[t] = function(e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = At[o]),
            (At[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (At[o] = i)),
          r
        );
      };
    });
  var kt = /^(?:input|select|textarea|button)$/i,
    Nt = /^(?:a|area)$/i;
  me.fn.extend({
    prop: function e(t, n) {
      return Oe(this, me.prop, t, n, 1 < arguments.length);
    },
    removeProp: function e(t) {
      return this.each(function() {
        delete this[me.propFix[t] || t];
      });
    }
  }),
    me.extend({
      prop: function e(t, n, r) {
        var i,
          o,
          a = t.nodeType;
        if (3 !== a && 8 !== a && 2 !== a)
          return (
            (1 === a && me.isXMLDoc(t)) ||
              ((n = me.propFix[n] || n), (o = me.propHooks[n])),
            void 0 !== r
              ? o && "set" in o && void 0 !== (i = o.set(t, r, n))
                ? i
                : (t[n] = r)
              : o && "get" in o && null !== (i = o.get(t, n))
              ? i
              : t[n]
          );
      },
      propHooks: {
        tabIndex: {
          get: function e(t) {
            var n = me.find.attr(t, "tabindex");
            return n
              ? parseInt(n, 10)
              : kt.test(t.nodeName) || (Nt.test(t.nodeName) && t.href)
              ? 0
              : -1;
          }
        }
      },
      propFix: { for: "htmlFor", class: "className" }
    }),
    pe.optSelected ||
      (me.propHooks.selected = {
        get: function e(t) {
          var n = t.parentNode;
          return n && n.parentNode && n.parentNode.selectedIndex, null;
        },
        set: function e(t) {
          var n = t.parentNode;
          n && (n.selectedIndex, n.parentNode && n.parentNode.selectedIndex);
        }
      }),
    me.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
      ],
      function() {
        me.propFix[this.toLowerCase()] = this;
      }
    ),
    me.fn.extend({
      addClass: function e(t) {
        var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = 0;
        if (me.isFunction(t))
          return this.each(function(e) {
            me(this).addClass(t.call(this, e, Y(this)));
          });
        if ("string" == typeof t && t)
          for (n = t.match(qe) || []; (r = this[l++]); )
            if (((o = Y(r)), (i = 1 === r.nodeType && " " + X(o) + " "))) {
              for (s = 0; (a = n[s++]); )
                i.indexOf(" " + a + " ") < 0 && (i += a + " ");
              o !== (u = X(i)) && r.setAttribute("class", u);
            }
        return this;
      },
      removeClass: function e(t) {
        var n,
          r,
          i,
          o,
          a,
          s,
          u,
          l = 0;
        if (me.isFunction(t))
          return this.each(function(e) {
            me(this).removeClass(t.call(this, e, Y(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof t && t)
          for (n = t.match(qe) || []; (r = this[l++]); )
            if (((o = Y(r)), (i = 1 === r.nodeType && " " + X(o) + " "))) {
              for (s = 0; (a = n[s++]); )
                for (; -1 < i.indexOf(" " + a + " "); )
                  i = i.replace(" " + a + " ", " ");
              o !== (u = X(i)) && r.setAttribute("class", u);
            }
        return this;
      },
      toggleClass: function e(i, t) {
        var o = _typeof(i);
        return "boolean" == typeof t && "string" === o
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : me.isFunction(i)
          ? this.each(function(e) {
              me(this).toggleClass(i.call(this, e, Y(this), t), t);
            })
          : this.each(function() {
              var e, t, n, r;
              if ("string" === o)
                for (t = 0, n = me(this), r = i.match(qe) || []; (e = r[t++]); )
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              else
                (void 0 !== i && "boolean" !== o) ||
                  ((e = Y(this)) && Re.set(this, "__className__", e),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      e || !1 === i ? "" : Re.get(this, "__className__") || ""
                    ));
            });
      },
      hasClass: function e(t) {
        var n,
          r,
          i = 0;
        for (n = " " + t + " "; (r = this[i++]); )
          if (1 === r.nodeType && -1 < (" " + X(Y(r)) + " ").indexOf(n))
            return !0;
        return !1;
      }
    });
  var jt = /\r/g;
  me.fn.extend({
    val: function e(n) {
      var r,
        t,
        i,
        o = this[0];
      return arguments.length
        ? ((i = me.isFunction(n)),
          this.each(function(e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, me(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = me.map(t, function(e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                me.valHooks[this.type] ||
                me.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : o
        ? (r = me.valHooks[o.type] || me.valHooks[o.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (t = r.get(o, "value"))
          ? t
          : "string" == typeof (t = o.value)
          ? t.replace(jt, "")
          : null == t
          ? ""
          : t
        : void 0;
    }
  }),
    me.extend({
      valHooks: {
        option: {
          get: function e(t) {
            var n = me.find.attr(t, "value");
            return null != n ? n : X(me.text(t));
          }
        },
        select: {
          get: function e(t) {
            var n,
              r,
              i,
              o = t.options,
              a = t.selectedIndex,
              s = "select-one" === t.type,
              u = s ? null : [],
              l = s ? a + 1 : o.length;
            for (i = a < 0 ? l : s ? a : 0; i < l; i++)
              if (
                ((r = o[i]).selected || i === a) &&
                !r.disabled &&
                (!r.parentNode.disabled || !c(r.parentNode, "optgroup"))
              ) {
                if (((n = me(r).val()), s)) return n;
                u.push(n);
              }
            return u;
          },
          set: function e(t, n) {
            for (
              var r, i, o = t.options, a = me.makeArray(n), s = o.length;
              s--;

            )
              ((i = o[s]).selected =
                -1 < me.inArray(me.valHooks.option.get(i), a)) && (r = !0);
            return r || (t.selectedIndex = -1), a;
          }
        }
      }
    }),
    me.each(["radio", "checkbox"], function() {
      (me.valHooks[this] = {
        set: function e(t, n) {
          if (Array.isArray(n))
            return (t.checked = -1 < me.inArray(me(t).val(), n));
        }
      }),
        pe.checkOn ||
          (me.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    });
  var Dt = /^(?:focusinfocus|focusoutblur)$/;
  me.extend(me.event, {
    trigger: function e(t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        d = [r || ne],
        p = ce.call(t, "type") ? t.type : t,
        h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((a = s = r = r || ne),
        3 !== r.nodeType &&
          8 !== r.nodeType &&
          !Dt.test(p + me.event.triggered) &&
          (-1 < p.indexOf(".") && ((p = (h = p.split(".")).shift()), h.sort()),
          (l = p.indexOf(":") < 0 && "on" + p),
          ((t = t[me.expando]
            ? t
            : new me.Event(p, "object" == _typeof(t) && t)).isTrigger = i
            ? 2
            : 3),
          (t.namespace = h.join(".")),
          (t.rnamespace = t.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (t.result = void 0),
          t.target || (t.target = r),
          (n = null == n ? [t] : me.makeArray(n, [t])),
          (f = me.event.special[p] || {}),
          i || !f.trigger || !1 !== f.trigger.apply(r, n)))
      ) {
        if (!i && !f.noBubble && !me.isWindow(r)) {
          for (
            u = f.delegateType || p, Dt.test(u + p) || (a = a.parentNode);
            a;
            a = a.parentNode
          )
            d.push(a), (s = a);
          s === (r.ownerDocument || ne) &&
            d.push(s.defaultView || s.parentWindow || E);
        }
        for (o = 0; (a = d[o++]) && !t.isPropagationStopped(); )
          (t.type = 1 < o ? u : f.bindType || p),
            (c = (Re.get(a, "events") || {})[t.type] && Re.get(a, "handle")) &&
              c.apply(a, n),
            (c = l && a[l]) &&
              c.apply &&
              He(a) &&
              ((t.result = c.apply(a, n)),
              !1 === t.result && t.preventDefault());
        return (
          (t.type = p),
          i ||
            t.isDefaultPrevented() ||
            (f._default && !1 !== f._default.apply(d.pop(), n)) ||
            !He(r) ||
            (l &&
              me.isFunction(r[p]) &&
              !me.isWindow(r) &&
              ((s = r[l]) && (r[l] = null),
              r[(me.event.triggered = p)](),
              (me.event.triggered = void 0),
              s && (r[l] = s))),
          t.result
        );
      }
    },
    simulate: function e(t, n, r) {
      var i = me.extend(new me.Event(), r, { type: t, isSimulated: !0 });
      me.event.trigger(i, null, n);
    }
  }),
    me.fn.extend({
      trigger: function e(t, n) {
        return this.each(function() {
          me.event.trigger(t, n, this);
        });
      },
      triggerHandler: function e(t, n) {
        var r = this[0];
        if (r) return me.event.trigger(t, n, r, !0);
      }
    }),
    me.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function(e, n) {
        me.fn[n] = function(e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    ),
    me.fn.extend({
      hover: function e(t, n) {
        return this.mouseenter(t).mouseleave(n || t);
      }
    }),
    (pe.focusin = "onfocusin" in E),
    pe.focusin ||
      me.each({ focus: "focusin", blur: "focusout" }, function(r, i) {
        var o = function e(t) {
          me.event.simulate(i, t.target, me.event.fix(t));
        };
        me.event.special[i] = {
          setup: function e() {
            var t = this.ownerDocument || this,
              n = Re.access(t, i);
            n || t.addEventListener(r, o, !0), Re.access(t, i, (n || 0) + 1);
          },
          teardown: function e() {
            var t = this.ownerDocument || this,
              n = Re.access(t, i) - 1;
            n
              ? Re.access(t, i, n)
              : (t.removeEventListener(r, o, !0), Re.remove(t, i));
          }
        };
      });
  var qt = E.location,
    Lt = me.now(),
    Ft = /\?/;
  me.parseXML = function(e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new E.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        me.error("Invalid XML: " + e),
      t
    );
  };
  var Ot = /\[\]$/,
    Ht = /\r?\n/g,
    Rt = /^(?:submit|button|image|reset|file)$/i,
    Pt = /^(?:input|select|textarea|keygen)/i;
  (me.param = function(e, t) {
    var n,
      i = [],
      r = function e(t, n) {
        var r = me.isFunction(n) ? n() : n;
        i[i.length] =
          encodeURIComponent(t) + "=" + encodeURIComponent(null == r ? "" : r);
      };
    if (Array.isArray(e) || (e.jquery && !me.isPlainObject(e)))
      me.each(e, function() {
        r(this.name, this.value);
      });
    else for (n in e) G(n, e[n], t, r);
    return i.join("&");
  }),
    me.fn.extend({
      serialize: function e() {
        return me.param(this.serializeArray());
      },
      serializeArray: function e() {
        return this.map(function() {
          var e = me.prop(this, "elements");
          return e ? me.makeArray(e) : this;
        })
          .filter(function() {
            var e = this.type;
            return (
              this.name &&
              !me(this).is(":disabled") &&
              Pt.test(this.nodeName) &&
              !Rt.test(e) &&
              (this.checked || !Ue.test(e))
            );
          })
          .map(function(e, t) {
            var n = me(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? me.map(n, function(e) {
                  return { name: t.name, value: e.replace(Ht, "\r\n") };
                })
              : { name: t.name, value: n.replace(Ht, "\r\n") };
          })
          .get();
      }
    });
  var Mt = /%20/g,
    Vt = /#.*$/,
    It = /([?&])_=[^&]*/,
    _t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Wt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    $t = /^(?:GET|HEAD)$/,
    Bt = /^\/\//,
    zt = {},
    Ut = {},
    Xt = "*/".concat("*"),
    Yt = ne.createElement("a");
  (Yt.href = qt.href),
    me.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: qt.href,
        type: "GET",
        isLocal: Wt.test(qt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Xt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": me.parseXML
        },
        flatOptions: { url: !0, context: !0 }
      },
      ajaxSetup: function e(t, n) {
        return n ? K(K(t, me.ajaxSettings), n) : K(me.ajaxSettings, t);
      },
      ajaxPrefilter: Q(zt),
      ajaxTransport: Q(Ut),
      ajax: function e(t, n) {
        function r(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            p && E.clearTimeout(p),
            (c = void 0),
            (d = r || ""),
            (C.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n && (s = Z(g, C, n)),
            (s = ee(g, s, C, i)),
            i
              ? (g.ifModified &&
                  ((u = C.getResponseHeader("Last-Modified")) &&
                    (me.lastModified[f] = u),
                  (u = C.getResponseHeader("etag")) && (me.etag[f] = u)),
                204 === e || "HEAD" === g.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (C.status = e),
            (C.statusText = (t || l) + ""),
            i ? b.resolveWith(y, [o, l, C]) : b.rejectWith(y, [C, l, a]),
            C.statusCode(w),
            (w = void 0),
            m && v.trigger(i ? "ajaxSuccess" : "ajaxError", [C, g, i ? o : a]),
            x.fireWith(y, [C, l]),
            m &&
              (v.trigger("ajaxComplete", [C, g]),
              --me.active || me.event.trigger("ajaxStop")));
        }
        "object" == _typeof(t) && ((n = t), (t = void 0)), (n = n || {});
        var c,
          f,
          d,
          i,
          p,
          o,
          h,
          m,
          a,
          s,
          g = me.ajaxSetup({}, n),
          y = g.context || g,
          v = g.context && (y.nodeType || y.jquery) ? me(y) : me.event,
          b = me.Deferred(),
          x = me.Callbacks("once memory"),
          w = g.statusCode || {},
          u = {},
          l = {},
          T = "canceled",
          C = {
            readyState: 0,
            getResponseHeader: function e(t) {
              var n;
              if (h) {
                if (!i)
                  for (i = {}; (n = _t.exec(d)); ) i[n[1].toLowerCase()] = n[2];
                n = i[t.toLowerCase()];
              }
              return null == n ? null : n;
            },
            getAllResponseHeaders: function e() {
              return h ? d : null;
            },
            setRequestHeader: function e(t, n) {
              return (
                null == h &&
                  ((t = l[t.toLowerCase()] = l[t.toLowerCase()] || t),
                  (u[t] = n)),
                this
              );
            },
            overrideMimeType: function e(t) {
              return null == h && (g.mimeType = t), this;
            },
            statusCode: function e(t) {
              var n;
              if (t)
                if (h) C.always(t[C.status]);
                else for (n in t) w[n] = [w[n], t[n]];
              return this;
            },
            abort: function e(t) {
              var n = t || T;
              return c && c.abort(n), r(0, n), this;
            }
          };
        if (
          (b.promise(C),
          (g.url = ((t || g.url || qt.href) + "").replace(
            Bt,
            qt.protocol + "//"
          )),
          (g.type = n.method || n.type || g.method || g.type),
          (g.dataTypes = (g.dataType || "*").toLowerCase().match(qe) || [""]),
          null == g.crossDomain)
        ) {
          o = ne.createElement("a");
          try {
            (o.href = g.url),
              (o.href = o.href),
              (g.crossDomain =
                Yt.protocol + "//" + Yt.host != o.protocol + "//" + o.host);
          } catch (e) {
            g.crossDomain = !0;
          }
        }
        if (
          (g.data &&
            g.processData &&
            "string" != typeof g.data &&
            (g.data = me.param(g.data, g.traditional)),
          J(zt, g, n, C),
          h)
        )
          return C;
        for (a in ((m = me.event && g.global) &&
          0 == me.active++ &&
          me.event.trigger("ajaxStart"),
        (g.type = g.type.toUpperCase()),
        (g.hasContent = !$t.test(g.type)),
        (f = g.url.replace(Vt, "")),
        g.hasContent
          ? g.data &&
            g.processData &&
            0 ===
              (g.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (g.data = g.data.replace(Mt, "+"))
          : ((s = g.url.slice(f.length)),
            g.data && ((f += (Ft.test(f) ? "&" : "?") + g.data), delete g.data),
            !1 === g.cache &&
              ((f = f.replace(It, "$1")),
              (s = (Ft.test(f) ? "&" : "?") + "_=" + Lt++ + s)),
            (g.url = f + s)),
        g.ifModified &&
          (me.lastModified[f] &&
            C.setRequestHeader("If-Modified-Since", me.lastModified[f]),
          me.etag[f] && C.setRequestHeader("If-None-Match", me.etag[f])),
        ((g.data && g.hasContent && !1 !== g.contentType) || n.contentType) &&
          C.setRequestHeader("Content-Type", g.contentType),
        C.setRequestHeader(
          "Accept",
          g.dataTypes[0] && g.accepts[g.dataTypes[0]]
            ? g.accepts[g.dataTypes[0]] +
                ("*" !== g.dataTypes[0] ? ", " + Xt + "; q=0.01" : "")
            : g.accepts["*"]
        ),
        g.headers))
          C.setRequestHeader(a, g.headers[a]);
        if (g.beforeSend && (!1 === g.beforeSend.call(y, C, g) || h))
          return C.abort();
        if (
          ((T = "abort"),
          x.add(g.complete),
          C.done(g.success),
          C.fail(g.error),
          (c = J(Ut, g, n, C)))
        ) {
          if (((C.readyState = 1), m && v.trigger("ajaxSend", [C, g]), h))
            return C;
          g.async &&
            0 < g.timeout &&
            (p = E.setTimeout(function() {
              C.abort("timeout");
            }, g.timeout));
          try {
            (h = !1), c.send(u, r);
          } catch (e) {
            if (h) throw e;
            r(-1, e);
          }
        } else r(-1, "No Transport");
        return C;
      },
      getJSON: function e(t, n, r) {
        return me.get(t, n, r, "json");
      },
      getScript: function e(t, n) {
        return me.get(t, void 0, n, "script");
      }
    }),
    me.each(["get", "post"], function(e, i) {
      me[i] = function(e, t, n, r) {
        return (
          me.isFunction(t) && ((r = r || n), (n = t), (t = void 0)),
          me.ajax(
            me.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              me.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    (me._evalUrl = function(e) {
      return me.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        throws: !0
      });
    }),
    me.fn.extend({
      wrapAll: function e(t) {
        var n;
        return (
          this[0] &&
            (me.isFunction(t) && (t = t.call(this[0])),
            (n = me(t, this[0].ownerDocument)
              .eq(0)
              .clone(!0)),
            this[0].parentNode && n.insertBefore(this[0]),
            n
              .map(function() {
                for (var e = this; e.firstElementChild; )
                  e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function e(n) {
        return me.isFunction(n)
          ? this.each(function(e) {
              me(this).wrapInner(n.call(this, e));
            })
          : this.each(function() {
              var e = me(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function e(t) {
        var n = me.isFunction(t);
        return this.each(function(e) {
          me(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function e(t) {
        return (
          this.parent(t)
            .not("body")
            .each(function() {
              me(this).replaceWith(this.childNodes);
            }),
          this
        );
      }
    }),
    (me.expr.pseudos.hidden = function(e) {
      return !me.expr.pseudos.visible(e);
    }),
    (me.expr.pseudos.visible = function(e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (me.ajaxSettings.xhr = function() {
      try {
        return new E.XMLHttpRequest();
      } catch (e) {}
    });
  var Gt = { 0: 200, 1223: 204 },
    Qt = me.ajaxSettings.xhr();
  (pe.cors = !!Qt && "withCredentials" in Qt),
    (pe.ajax = Qt = !!Qt),
    me.ajaxTransport(function(o) {
      var a, s;
      if (pe.cors || (Qt && !o.crossDomain))
        return {
          send: function e(t, n) {
            var r,
              i = o.xhr();
            if (
              (i.open(o.type, o.url, o.async, o.username, o.password),
              o.xhrFields)
            )
              for (r in o.xhrFields) i[r] = o.xhrFields[r];
            for (r in (o.mimeType &&
              i.overrideMimeType &&
              i.overrideMimeType(o.mimeType),
            o.crossDomain ||
              t["X-Requested-With"] ||
              (t["X-Requested-With"] = "XMLHttpRequest"),
            t))
              i.setRequestHeader(r, t[r]);
            (a = function e(t) {
              return function() {
                a &&
                  ((a = s = i.onload = i.onerror = i.onabort = i.onreadystatechange = null),
                  "abort" === t
                    ? i.abort()
                    : "error" === t
                    ? "number" != typeof i.status
                      ? n(0, "error")
                      : n(i.status, i.statusText)
                    : n(
                        Gt[i.status] || i.status,
                        i.statusText,
                        "text" !== (i.responseType || "text") ||
                          "string" != typeof i.responseText
                          ? { binary: i.response }
                          : { text: i.responseText },
                        i.getAllResponseHeaders()
                      ));
              };
            }),
              (i.onload = a()),
              (s = i.onerror = a("error")),
              void 0 !== i.onabort
                ? (i.onabort = s)
                : (i.onreadystatechange = function() {
                    4 === i.readyState &&
                      E.setTimeout(function() {
                        a && s();
                      });
                  }),
              (a = a("abort"));
            try {
              i.send((o.hasContent && o.data) || null);
            } catch (e) {
              if (a) throw e;
            }
          },
          abort: function e() {
            a && a();
          }
        };
    }),
    me.ajaxPrefilter(function(e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    me.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function e(t) {
          return me.globalEval(t), t;
        }
      }
    }),
    me.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    me.ajaxTransport("script", function(r) {
      var i, o;
      if (r.crossDomain)
        return {
          send: function e(t, n) {
            (i = me("<script>")
              .prop({ charset: r.scriptCharset, src: r.url })
              .on(
                "load error",
                (o = function e(t) {
                  i.remove(),
                    (o = null),
                    t && n("error" === t.type ? 404 : 200, t.type);
                })
              )),
              ne.head.appendChild(i[0]);
          },
          abort: function e() {
            o && o();
          }
        };
    });
  var Jt = [],
    Kt = /(=)\?(?=&|$)|\?\?/,
    Zt;
  me.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function e() {
      var t = Jt.pop() || me.expando + "_" + Lt++;
      return (this[t] = !0), t;
    }
  }),
    me.ajaxPrefilter("json jsonp", function(e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Kt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Kt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback = me.isFunction(e.jsonpCallback)
            ? e.jsonpCallback()
            : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Kt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Ft.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function() {
            return o || me.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = E[r]),
          (E[r] = function() {
            o = arguments;
          }),
          n.always(function() {
            void 0 === i ? me(E).removeProp(r) : (E[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Jt.push(r)),
              o && me.isFunction(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (pe.createHTMLDocument = (((Zt = ne.implementation.createHTMLDocument("")
      .body).innerHTML = "<form></form><form></form>"),
    2 === Zt.childNodes.length)),
    (me.parseHTML = function(e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (pe.createHTMLDocument
              ? (((r = (t = ne.implementation.createHTMLDocument(
                  ""
                )).createElement("base")).href = ne.location.href),
                t.head.appendChild(r))
              : (t = ne)),
          (o = !n && []),
          (i = Ee.exec(e))
            ? [t.createElement(i[1])]
            : ((i = x([e], t, o)),
              o && o.length && me(o).remove(),
              me.merge([], i.childNodes)));
      var r, i, o;
    }),
    (me.fn.load = function(e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = X(e.slice(s))), (e = e.slice(0, s))),
        me.isFunction(t)
          ? ((n = t), (t = void 0))
          : t && "object" == _typeof(t) && (i = "POST"),
        0 < a.length &&
          me
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function(e) {
              (o = arguments),
                a.html(
                  r
                    ? me("<div>")
                        .append(me.parseHTML(e))
                        .find(r)
                    : e
                );
            })
            .always(
              n &&
                function(e, t) {
                  a.each(function() {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    me.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
      ],
      function(e, t) {
        me.fn[t] = function(e) {
          return this.on(t, e);
        };
      }
    ),
    (me.expr.pseudos.animated = function(t) {
      return me.grep(me.timers, function(e) {
        return t === e.elem;
      }).length;
    }),
    (me.offset = {
      setOffset: function e(t, n, r) {
        var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = me.css(t, "position"),
          d = me(t),
          p = {};
        "static" === f && (t.style.position = "relative"),
          (u = d.offset()),
          (a = me.css(t, "top")),
          (l = me.css(t, "left")),
          (o = (c =
            ("absolute" === f || "fixed" === f) && -1 < (a + l).indexOf("auto"))
            ? ((s = (i = d.position()).top), i.left)
            : ((s = parseFloat(a) || 0), parseFloat(l) || 0)),
          me.isFunction(n) && (n = n.call(t, r, me.extend({}, u))),
          null != n.top && (p.top = n.top - u.top + s),
          null != n.left && (p.left = n.left - u.left + o),
          "using" in n ? n.using.call(t, p) : d.css(p);
      }
    }),
    me.fn.extend({
      offset: function e(t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function(e) {
                me.offset.setOffset(this, t, e);
              });
        var n,
          r,
          i,
          o,
          a = this[0];
        return a
          ? a.getClientRects().length
            ? ((i = a.getBoundingClientRect()),
              (r = (n = a.ownerDocument).documentElement),
              (o = n.defaultView),
              {
                top: i.top + o.pageYOffset - r.clientTop,
                left: i.left + o.pageXOffset - r.clientLeft
              })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function e() {
        if (this[0]) {
          var t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          return (
            "fixed" === me.css(r, "position")
              ? (n = r.getBoundingClientRect())
              : ((t = this.offsetParent()),
                (n = this.offset()),
                c(t[0], "html") || (i = t.offset()),
                (i = {
                  top: i.top + me.css(t[0], "borderTopWidth", !0),
                  left: i.left + me.css(t[0], "borderLeftWidth", !0)
                })),
            {
              top: n.top - i.top - me.css(r, "marginTop", !0),
              left: n.left - i.left - me.css(r, "marginLeft", !0)
            }
          );
        }
      },
      offsetParent: function e() {
        return this.map(function() {
          for (
            var e = this.offsetParent;
            e && "static" === me.css(e, "position");

          )
            e = e.offsetParent;
          return e || et;
        });
      }
    }),
    me.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(
      t,
      i
    ) {
      var o = "pageYOffset" === i;
      me.fn[t] = function(e) {
        return Oe(
          this,
          function(e, t, n) {
            var r;
            return (
              me.isWindow(e)
                ? (r = e)
                : 9 === e.nodeType && (r = e.defaultView),
              void 0 === n
                ? r
                  ? r[i]
                  : e[t]
                : void (r
                    ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                    : (e[t] = n))
            );
          },
          t,
          e,
          arguments.length
        );
      };
    }),
    me.each(["top", "left"], function(e, n) {
      me.cssHooks[n] = F(pe.pixelPosition, function(e, t) {
        if (t)
          return (t = L(e, n)), ct.test(t) ? me(e).position()[n] + "px" : t;
      });
    }),
    me.each({ Height: "height", Width: "width" }, function(a, s) {
      me.each({ padding: "inner" + a, content: s, "": "outer" + a }, function(
        r,
        o
      ) {
        me.fn[o] = function(e, t) {
          var n = arguments.length && (r || "boolean" != typeof e),
            i = r || (!0 === e || !0 === t ? "margin" : "border");
          return Oe(
            this,
            function(e, t, n) {
              var r;
              return me.isWindow(e)
                ? 0 === o.indexOf("outer")
                  ? e["inner" + a]
                  : e.document.documentElement["client" + a]
                : 9 === e.nodeType
                ? ((r = e.documentElement),
                  Math.max(
                    e.body["scroll" + a],
                    r["scroll" + a],
                    e.body["offset" + a],
                    r["offset" + a],
                    r["client" + a]
                  ))
                : void 0 === n
                ? me.css(e, t, i)
                : me.style(e, t, n, i);
            },
            s,
            n ? e : void 0,
            n
          );
        };
      });
    }),
    me.fn.extend({
      bind: function e(t, n, r) {
        return this.on(t, null, n, r);
      },
      unbind: function e(t, n) {
        return this.off(t, null, n);
      },
      delegate: function e(t, n, r, i) {
        return this.on(n, t, r, i);
      },
      undelegate: function e(t, n, r) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(n, t || "**", r);
      }
    }),
    (me.holdReady = function(e) {
      e ? me.readyWait++ : me.ready(!0);
    }),
    (me.isArray = Array.isArray),
    (me.parseJSON = JSON.parse),
    (me.nodeName = c),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function() {
        return me;
      });
  var en = E.jQuery,
    tn = E.$;
  return (
    (me.noConflict = function(e) {
      return (
        E.$ === me && (E.$ = tn), e && E.jQuery === me && (E.jQuery = en), me
      );
    }),
    e || (E.jQuery = E.$ = me),
    me
  );
}),
  (function() {
    function t(e) {
      return void 0 === this || Object.getPrototypeOf(this) !== t.prototype
        ? new t(e)
        : (((E = this).version = "3.3.6"),
          (E.tools = new C()),
          E.isSupported()
            ? (E.tools.extend(E.defaults, e || {}),
              (E.defaults.container = f(E.defaults)),
              (E.store = { elements: {}, containers: [] }),
              (E.sequences = {}),
              (E.history = []),
              (E.uid = 0),
              (E.initialized = !1))
            : "undefined" != typeof console && console,
          E);
    }
    function f(e) {
      if (e && e.container) {
        if ("string" == typeof e.container)
          return window.document.documentElement.querySelector(e.container);
        if (E.tools.isNode(e.container)) return e.container;
      }
      return E.defaults.container;
    }
    function d(e, t) {
      return "string" == typeof e
        ? Array.prototype.slice.call(t.querySelectorAll(e))
        : E.tools.isNode(e)
        ? [e]
        : E.tools.isNodeList(e)
        ? Array.prototype.slice.call(e)
        : [];
    }
    function p() {
      return ++E.uid;
    }
    function h(e, t, n) {
      t.container && (t.container = n),
        e.config
          ? (e.config = E.tools.extendClone(e.config, t))
          : (e.config = E.tools.extendClone(E.defaults, t)),
        "top" === e.config.origin || "bottom" === e.config.origin
          ? (e.config.axis = "Y")
          : (e.config.axis = "X");
    }
    function m(e) {
      var t = window.getComputedStyle(e.domEl);
      e.styles ||
        ((e.styles = { transition: {}, transform: {}, computed: {} }),
        (e.styles.inline = e.domEl.getAttribute("style") || ""),
        (e.styles.inline += "; visibility: visible; "),
        (e.styles.computed.opacity = t.opacity),
        t.transition && "all 0s ease 0s" !== t.transition
          ? (e.styles.computed.transition = t.transition + ", ")
          : (e.styles.computed.transition = "")),
        (e.styles.transition.instant = n(e, 0)),
        (e.styles.transition.delayed = n(e, e.config.delay)),
        (e.styles.transform.initial = " -webkit-transform:"),
        (e.styles.transform.target = " -webkit-transform:"),
        r(e),
        (e.styles.transform.initial += "transform:"),
        (e.styles.transform.target += "transform:"),
        r(e);
    }
    function n(e, t) {
      var n = e.config;
      return (
        "-webkit-transition: " +
        e.styles.computed.transition +
        "-webkit-transform " +
        n.duration / 1e3 +
        "s " +
        n.easing +
        " " +
        t / 1e3 +
        "s, opacity " +
        n.duration / 1e3 +
        "s " +
        n.easing +
        " " +
        t / 1e3 +
        "s; transition: " +
        e.styles.computed.transition +
        "transform " +
        n.duration / 1e3 +
        "s " +
        n.easing +
        " " +
        t / 1e3 +
        "s, opacity " +
        n.duration / 1e3 +
        "s " +
        n.easing +
        " " +
        t / 1e3 +
        "s; "
      );
    }
    function r(e) {
      var t,
        n = e.config,
        r = e.styles.transform;
      (t =
        "top" === n.origin || "left" === n.origin
          ? /^-/.test(n.distance)
            ? n.distance.substr(1)
            : "-" + n.distance
          : n.distance),
        parseInt(n.distance) &&
          ((r.initial += " translate" + n.axis + "(" + t + ")"),
          (r.target += " translate" + n.axis + "(0)")),
        n.scale &&
          ((r.initial += " scale(" + n.scale + ")"), (r.target += " scale(1)")),
        n.rotate.x &&
          ((r.initial += " rotateX(" + n.rotate.x + "deg)"),
          (r.target += " rotateX(0)")),
        n.rotate.y &&
          ((r.initial += " rotateY(" + n.rotate.y + "deg)"),
          (r.target += " rotateY(0)")),
        n.rotate.z &&
          ((r.initial += " rotateZ(" + n.rotate.z + "deg)"),
          (r.target += " rotateZ(0)")),
        (r.initial += "; opacity: " + n.opacity + ";"),
        (r.target += "; opacity: " + e.styles.computed.opacity + ";");
    }
    function g(e) {
      var t = e.config.container;
      t &&
        -1 === E.store.containers.indexOf(t) &&
        E.store.containers.push(e.config.container),
        (E.store.elements[e.id] = e);
    }
    function y(e, t, n) {
      var r = { target: e, config: t, interval: n };
      E.history.push(r);
    }
    function v() {
      if (E.isSupported()) {
        i();
        for (var e = 0; e < E.store.containers.length; e++)
          E.store.containers[e].addEventListener("scroll", o),
            E.store.containers[e].addEventListener("resize", o);
        E.initialized ||
          (window.addEventListener("scroll", o),
          window.addEventListener("resize", o),
          (E.initialized = !0));
      }
      return E;
    }
    function o() {
      S(i);
    }
    function e() {
      var n, r, i, o;
      E.tools.forOwn(E.sequences, function(e) {
        (o = E.sequences[e]), (n = !1);
        for (var t = 0; t < o.elemIds.length; t++)
          (i = o.elemIds[t]), T((r = E.store.elements[i])) && !n && (n = !0);
        o.active = n;
      });
    }
    function i() {
      var t, n;
      e(),
        E.tools.forOwn(E.store.elements, function(e) {
          (n = E.store.elements[e]),
            (t = l(n)),
            u(n)
              ? (n.config.beforeReveal(n.domEl),
                t
                  ? n.domEl.setAttribute(
                      "style",
                      n.styles.inline +
                        n.styles.transform.target +
                        n.styles.transition.delayed
                    )
                  : n.domEl.setAttribute(
                      "style",
                      n.styles.inline +
                        n.styles.transform.target +
                        n.styles.transition.instant
                    ),
                s("reveal", n, t),
                (n.revealing = !0),
                (n.seen = !0),
                n.sequence && a(n, t))
              : c(n) &&
                (n.config.beforeReset(n.domEl),
                n.domEl.setAttribute(
                  "style",
                  n.styles.inline +
                    n.styles.transform.initial +
                    n.styles.transition.instant
                ),
                s("reset", n),
                (n.revealing = !1));
        });
    }
    function a(e, t) {
      var n = 0,
        r = 0,
        i = E.sequences[e.sequence.id];
      (i.blocked = !0),
        t && "onload" === e.config.useDelay && (r = e.config.delay),
        e.sequence.timer &&
          ((n = Math.abs(e.sequence.timer.started - new Date())),
          window.clearTimeout(e.sequence.timer)),
        (e.sequence.timer = { started: new Date() }),
        (e.sequence.timer.clock = window.setTimeout(function() {
          (i.blocked = !1), (e.sequence.timer = null), o();
        }, Math.abs(i.interval) + r - n));
    }
    function s(e, t, n) {
      var r = 0,
        i = 0,
        o = "after";
      switch (e) {
        case "reveal":
          (i = t.config.duration), n && (i += t.config.delay), (o += "Reveal");
          break;
        case "reset":
          (i = t.config.duration), (o += "Reset");
      }
      t.timer &&
        ((r = Math.abs(t.timer.started - new Date())),
        window.clearTimeout(t.timer.clock)),
        (t.timer = { started: new Date() }),
        (t.timer.clock = window.setTimeout(function() {
          t.config[o](t.domEl), (t.timer = null);
        }, i - r));
    }
    function u(e) {
      if (e.sequence) {
        var t = E.sequences[e.sequence.id];
        return t.active && !t.blocked && !e.revealing && !e.disabled;
      }
      return T(e) && !e.revealing && !e.disabled;
    }
    function l(e) {
      var t = e.config.useDelay;
      return (
        "always" === t ||
        ("onload" === t && !E.initialized) ||
        ("once" === t && !e.seen)
      );
    }
    function c(e) {
      var t;
      return e.sequence
        ? !E.sequences[e.sequence.id].active &&
            e.config.reset &&
            e.revealing &&
            !e.disabled
        : !T(e) && e.config.reset && e.revealing && !e.disabled;
    }
    function b(e) {
      return { width: e.clientWidth, height: e.clientHeight };
    }
    function x(e) {
      if (e && e !== window.document.documentElement) {
        var t = w(e);
        return { x: e.scrollLeft + t.left, y: e.scrollTop + t.top };
      }
      return { x: window.pageXOffset, y: window.pageYOffset };
    }
    function w(e) {
      for (
        var t = 0, n = 0, r = e.offsetHeight, i = e.offsetWidth;
        isNaN(e.offsetTop) || (t += e.offsetTop),
          isNaN(e.offsetLeft) || (n += e.offsetLeft),
          (e = e.offsetParent);

      );
      return { top: t, left: n, height: r, width: i };
    }
    function T(u) {
      function e() {
        var e = h + d * f,
          t = m + p * f,
          n = g - d * f,
          r = y - p * f,
          i = c.y + u.config.viewOffset.top,
          o = c.x + u.config.viewOffset.left,
          a = c.y - u.config.viewOffset.bottom + l.height,
          s = c.x - u.config.viewOffset.right + l.width;
        return e < a && i < n && t < s && o < r;
      }
      function t() {
        return "fixed" === window.getComputedStyle(u.domEl).position;
      }
      var n = w(u.domEl),
        l = b(u.config.container),
        c = x(u.config.container),
        f = u.config.viewFactor,
        d = n.height,
        p = n.width,
        h = n.top,
        m = n.left,
        g = h + d,
        y = m + p;
      return e() || t();
    }
    function C() {}
    var E, S;
    (t.prototype.defaults = {
      origin: "bottom",
      distance: "20px",
      duration: 500,
      delay: 0,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 0.9,
      easing: "cubic-bezier(0.6, 0.2, 0.1, 1)",
      container: window.document.documentElement,
      mobile: !0,
      reset: !1,
      useDelay: "always",
      viewFactor: 0.2,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
      beforeReveal: function e(t) {},
      beforeReset: function e(t) {},
      afterReveal: function e(t) {},
      afterReset: function e(t) {}
    }),
      (t.prototype.isSupported = function() {
        var e = document.documentElement.style;
        return (
          ("WebkitTransition" in e && "WebkitTransform" in e) ||
          ("transition" in e && "transform" in e)
        );
      }),
      (t.prototype.reveal = function(e, t, n, r) {
        var i, o, a, s, u, l;
        if (
          (void 0 !== t && "number" == typeof t
            ? ((n = t), (t = {}))
            : null != t || (t = {}),
          !(o = d(e, (i = f(t)))).length)
        )
          return E;
        n &&
          "number" == typeof n &&
          ((l = p()),
          (u = E.sequences[l] = {
            id: l,
            interval: n,
            elemIds: [],
            active: !1
          }));
        for (var c = 0; c < o.length; c++)
          (s = o[c].getAttribute("data-sr-id"))
            ? (a = E.store.elements[s])
            : (a = {
                id: p(),
                domEl: o[c],
                seen: !1,
                revealing: !1
              }).domEl.setAttribute("data-sr-id", a.id),
            u &&
              ((a.sequence = { id: u.id, index: u.elemIds.length }),
              u.elemIds.push(a.id)),
            h(a, t, i),
            m(a),
            g(a),
            (E.tools.isMobile() && !a.config.mobile) || !E.isSupported()
              ? (a.domEl.setAttribute("style", a.styles.inline),
                (a.disabled = !0))
              : a.revealing ||
                a.domEl.setAttribute(
                  "style",
                  a.styles.inline + a.styles.transform.initial
                );
        return (
          !r &&
            E.isSupported() &&
            (y(e, t, n),
            E.initTimeout && window.clearTimeout(E.initTimeout),
            (E.initTimeout = window.setTimeout(v, 0))),
          E
        );
      }),
      (t.prototype.sync = function() {
        if (E.history.length && E.isSupported()) {
          for (var e = 0; e < E.history.length; e++) {
            var t = E.history[e];
            E.reveal(t.target, t.config, t.interval, !0);
          }
          v();
        }
        return E;
      }),
      (C.prototype.isObject = function(e) {
        return null !== e && "object" == _typeof(e) && e.constructor === Object;
      }),
      (C.prototype.isNode = function(e) {
        return "object" == _typeof(window.Node)
          ? e instanceof window.Node
          : e &&
              "object" == _typeof(e) &&
              "number" == typeof e.nodeType &&
              "string" == typeof e.nodeName;
      }),
      (C.prototype.isNodeList = function(e) {
        var t = Object.prototype.toString.call(e),
          n = /^\[object (HTMLCollection|NodeList|Object)\]$/;
        return "object" == _typeof(window.NodeList)
          ? e instanceof window.NodeList
          : e &&
              "object" == _typeof(e) &&
              n.test(t) &&
              "number" == typeof e.length &&
              (0 === e.length || this.isNode(e[0]));
      }),
      (C.prototype.forOwn = function(e, t) {
        if (!this.isObject(e))
          throw new TypeError(
            'Expected "object", but received "' + _typeof(e) + '".'
          );
        for (var n in e) e.hasOwnProperty(n) && t(n);
      }),
      (C.prototype.extend = function(t, n) {
        return (
          this.forOwn(
            n,
            function(e) {
              this.isObject(n[e])
                ? ((t[e] && this.isObject(t[e])) || (t[e] = {}),
                  this.extend(t[e], n[e]))
                : (t[e] = n[e]);
            }.bind(this)
          ),
          t
        );
      }),
      (C.prototype.extendClone = function(e, t) {
        return this.extend(this.extend({}, e), t);
      }),
      (C.prototype.isMobile = function() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      }),
      (S =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function(e) {
          window.setTimeout(e, 1e3 / 60);
        }),
      "function" == typeof define &&
      "object" == _typeof(define.amd) &&
      define.amd
        ? define(function() {
            return t;
          })
        : "undefined" != typeof module && module.exports
        ? (module.exports = t)
        : (window.ScrollReveal = t);
  })(),
  (function(e, t) {
    "function" == typeof define && define.amd
      ? define(t)
      : "object" ===
        ("undefined" == typeof exports ? "undefined" : _typeof(exports))
      ? (module.exports = t(require, exports, module))
      : (e.CountUp = t());
  })(void 0, function(e, t, n) {
    /*
      countUp.js
      by @inorganik
      */
    // target = id of html element or var of previously selected html element where counting occurs
    // startVal = the value you want to begin at
    // endVal = the value you want to arrive at
    // decimals = number of decimal places, default 0
    // duration = duration of animation in seconds, default 2
    // options = optional object of options (see below)
    return (
      (window.CountUp = function(e, t, n, r, i, o) {
        function a(e) {
          var t = e < 0,
            n,
            r,
            i,
            o,
            a,
            s;
          if (
            ((e = Math.abs(e).toFixed(l.decimals)),
            (r = (n = (e += "").split("."))[0]),
            (i = 1 < n.length ? l.options.decimal + n[1] : ""),
            l.options.useGrouping)
          ) {
            for (o = "", a = 0, s = r.length; a < s; ++a)
              0 !== a && a % 3 == 0 && (o = l.options.separator + o),
                (o = r[s - a - 1] + o);
            r = o;
          } // optional numeral substitution
          return (
            l.options.numerals.length &&
              ((r = r.replace(/[0-9]/g, function(e) {
                return l.options.numerals[+e];
              })),
              (i = i.replace(/[0-9]/g, function(e) {
                return l.options.numerals[+e];
              }))),
            (t ? "-" : "") + l.options.prefix + r + i + l.options.suffix
          );
        } // Robert Penner's easeOutExpo
        function s(e, t, n, r) {
          return (n * (1 - Math.pow(2, (-10 * e) / r)) * 1024) / 1023 + t;
        }
        function u(e) {
          return "number" == typeof e && !isNaN(e);
        }
        var l = this; // extend default options with passed options object
        if (
          ((l.version = function() {
            return "1.9.3";
          }), // default options
          (l.options = {
            useEasing: !0,
            // toggle easing
            useGrouping: !0,
            // 1,000,000 vs 1000000
            separator: ",",
            // character to use as a separator
            decimal: ".",
            // character to use as a decimal
            easingFn: s,
            // optional custom easing function, default is Robert Penner's easeOutExpo
            formattingFn: a,
            // optional custom formatting function, default is formatNumber above
            prefix: "",
            // optional text before the result
            suffix: "",
            // optional text after the result
            numerals: []
          }),
          o && "object" === _typeof(o))
        )
          for (var c in l.options)
            o.hasOwnProperty(c) && null !== o[c] && (l.options[c] = o[c]);
        "" === l.options.separator
          ? (l.options.useGrouping = !1)
          : // ensure the separator is a string (formatNumber assumes this)
            (l.options.separator = "" + l.options.separator); // make sure requestAnimationFrame and cancelAnimationFrame are defined
        // polyfill for browsers without native support
        // by Opera engineer Erik Möller
        for (
          var f = 0, d = ["webkit", "moz", "ms", "o"], p = 0;
          p < d.length && !window.requestAnimationFrame;
          ++p
        )
          (window.requestAnimationFrame =
            window[d[p] + "RequestAnimationFrame"]),
            (window.cancelAnimationFrame =
              window[d[p] + "CancelAnimationFrame"] ||
              window[d[p] + "CancelRequestAnimationFrame"]);
        window.requestAnimationFrame ||
          (window.requestAnimationFrame = function(e, t) {
            var n = new Date().getTime(),
              r = Math.max(0, 16 - (n - f)),
              i = window.setTimeout(function() {
                e(n + r);
              }, r);
            return (f = n + r), i;
          }),
          window.cancelAnimationFrame ||
            (window.cancelAnimationFrame = function(e) {
              clearTimeout(e);
            }),
          (l.initialize = function() {
            return (
              !!l.initialized ||
              ((l.error = ""),
              (l.d = "string" == typeof e ? document.getElementById(e) : e),
              l.d
                ? ((l.startVal = Number(t)),
                  (l.endVal = Number(n)), // error checks
                  u(l.startVal) && u(l.endVal)
                    ? ((l.decimals = Math.max(0, r || 0)),
                      (l.dec = Math.pow(10, l.decimals)),
                      (l.duration = 1e3 * Number(i) || 2e3),
                      (l.countDown = l.startVal > l.endVal),
                      (l.frameVal = l.startVal),
                      (l.initialized = !0))
                    : ((l.error =
                        "[CountUp] startVal (" +
                        t +
                        ") or endVal (" +
                        n +
                        ") is not a number"),
                      !1))
                : !(l.error = "[CountUp] target is null or undefined"))
            );
          }), // Print value to target
          (l.printValue = function(e) {
            var t = l.options.formattingFn(e);
            "INPUT" === l.d.tagName
              ? (this.d.value = t)
              : "text" === l.d.tagName || "tspan" === l.d.tagName
              ? (this.d.textContent = t)
              : (this.d.innerHTML = t);
          }),
          (l.count = function(e) {
            l.startTime || (l.startTime = e);
            var t = (l.timestamp = e) - l.startTime;
            (l.remaining = l.duration - t), // to ease or not to ease
              l.options.useEasing
                ? l.countDown
                  ? (l.frameVal =
                      l.startVal -
                      l.options.easingFn(
                        t,
                        0,
                        l.startVal - l.endVal,
                        l.duration
                      ))
                  : (l.frameVal = l.options.easingFn(
                      t,
                      l.startVal,
                      l.endVal - l.startVal,
                      l.duration
                    ))
                : l.countDown
                ? (l.frameVal =
                    l.startVal - (l.startVal - l.endVal) * (t / l.duration))
                : (l.frameVal =
                    l.startVal + (l.endVal - l.startVal) * (t / l.duration)), // don't go past endVal since progress can exceed duration in the last frame
              l.countDown
                ? (l.frameVal = l.frameVal < l.endVal ? l.endVal : l.frameVal)
                : (l.frameVal = l.frameVal > l.endVal ? l.endVal : l.frameVal), // decimal
              (l.frameVal = Math.round(l.frameVal * l.dec) / l.dec), // format and print value
              l.printValue(l.frameVal), // whether to continue
              t < l.duration
                ? (l.rAF = requestAnimationFrame(l.count))
                : l.callback && l.callback();
          }), // start your animation
          (l.start = function(e) {
            l.initialize() &&
              ((l.callback = e), (l.rAF = requestAnimationFrame(l.count)));
          }), // toggles pause/resume animation
          (l.pauseResume = function() {
            l.paused
              ? ((l.paused = !1),
                delete l.startTime,
                (l.duration = l.remaining),
                (l.startVal = l.frameVal),
                requestAnimationFrame(l.count))
              : ((l.paused = !0), cancelAnimationFrame(l.rAF));
          }), // reset to startVal so animation can be run again
          (l.reset = function() {
            (l.paused = !1),
              delete l.startTime,
              (l.initialized = !1),
              l.initialize() &&
                (cancelAnimationFrame(l.rAF), l.printValue(l.startVal));
          }), // pass a new endVal and start animation
          (l.update = function(e) {
            l.initialize() &&
              (u((e = Number(e)))
                ? ((l.error = ""),
                  e !== l.frameVal &&
                    (cancelAnimationFrame(l.rAF),
                    (l.paused = !1),
                    delete l.startTime,
                    (l.startVal = l.frameVal),
                    (l.endVal = e),
                    (l.countDown = l.startVal > l.endVal),
                    (l.rAF = requestAnimationFrame(l.count))))
                : (l.error =
                    "[CountUp] update() - new endVal is not a number: " + e));
          }), // format startVal on initialization
          l.initialize() && l.printValue(l.startVal);
      }),
      CountUp
    );
  });
//# sourceMappingURL=vendor.js.map
//# sourceMappingURL=vendor.js.map
