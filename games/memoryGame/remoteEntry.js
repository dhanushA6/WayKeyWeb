var kta_memory_game;
(() => {
  "use strict";
  var e,
    r,
    t,
    o,
    n,
    a,
    i,
    u,
    l,
    s,
    f,
    d,
    h,
    m,
    c,
    p,
    v,
    g,
    y,
    b,
    k,
    w,
    _,
    S = {
      1462: (e, r, t) => {
        var o = {
            "./MemoryGame": () =>
              Promise.all([t.e(914), t.e(560)]).then(() => () => t(1560)),
            "./LandingPage": () =>
              Promise.all([t.e(914), t.e(180), t.e(539)]).then(
                () => () => t(9539)
              ),
          },
          n = (e, r) => (
            (t.R = r),
            (r = t.o(o, e)
              ? o[e]()
              : Promise.resolve().then(() => {
                  throw new Error(
                    'Module "' + e + '" does not exist in container.'
                  );
                })),
            (t.R = void 0),
            r
          ),
          a = (e, r) => {
            if (t.S) {
              var o = "default",
                n = t.S[o];
              if (n && n !== e)
                throw new Error(
                  "Container initialization failed as it has already been initialized with a different share scope"
                );
              return (t.S[o] = e), t.I(o, r);
            }
          };
        t.d(r, { get: () => n, init: () => a });
      },
    },
    P = {};
  function j(e) {
    var r = P[e];
    if (void 0 !== r) return r.exports;
    var t = (P[e] = { id: e, exports: {} });
    return S[e](t, t.exports, j), t.exports;
  }
  (j.m = S),
    (j.c = P),
    (j.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return j.d(r, { a: r }), r;
    }),
    (j.d = (e, r) => {
      for (var t in r)
        j.o(r, t) &&
          !j.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (j.f = {}),
    (j.e = (e) =>
      Promise.all(Object.keys(j.f).reduce((r, t) => (j.f[t](e, r), r), []))),
    (j.u = (e) => e + ".js"),
    (j.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (e = {}),
    (r = "kta_memory_game:"),
    (j.l = (t, o, n, a) => {
      if (e[t]) e[t].push(o);
      else {
        var i, u;
        if (void 0 !== n)
          for (
            var l = document.getElementsByTagName("script"), s = 0;
            s < l.length;
            s++
          ) {
            var f = l[s];
            if (
              f.getAttribute("src") == t ||
              f.getAttribute("data-webpack") == r + n
            ) {
              i = f;
              break;
            }
          }
        i ||
          ((u = !0),
          ((i = document.createElement("script")).charset = "utf-8"),
          (i.timeout = 120),
          j.nc && i.setAttribute("nonce", j.nc),
          i.setAttribute("data-webpack", r + n),
          (i.src = t)),
          (e[t] = [o]);
        var d = (r, o) => {
            (i.onerror = i.onload = null), clearTimeout(h);
            var n = e[t];
            if (
              (delete e[t],
              i.parentNode && i.parentNode.removeChild(i),
              n && n.forEach((e) => e(o)),
              r)
            )
              return r(o);
          },
          h = setTimeout(
            d.bind(null, void 0, { type: "timeout", target: i }),
            12e4
          );
        (i.onerror = d.bind(null, i.onerror)),
          (i.onload = d.bind(null, i.onload)),
          u && document.head.appendChild(i);
      }
    }),
    (j.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      j.S = {};
      var e = {},
        r = {};
      j.I = (t, o) => {
        o || (o = []);
        var n = r[t];
        if ((n || (n = r[t] = {}), !(o.indexOf(n) >= 0))) {
          if ((o.push(n), e[t])) return e[t];
          j.o(j.S, t) || (j.S[t] = {});
          var a = j.S[t],
            i = "kta_memory_game",
            u = (e, r, t, o) => {
              var n = (a[e] = a[e] || {}),
                u = n[r];
              (!u || (!u.loaded && (!o != !u.eager ? o : i > u.from))) &&
                (n[r] = { get: t, from: i, eager: !!o });
            },
            l = [];
          return (
            "default" === t &&
              (u("axios", "1.7.9", () => j.e(447).then(() => () => j(4447))),
              u("react-dom", "18.3.1", () =>
                Promise.all([j.e(961), j.e(914)]).then(() => () => j(961))
              ),
              u("react-router-dom", "6.28.2", () =>
                Promise.all([j.e(648), j.e(914), j.e(676)]).then(
                  () => () => j(2648)
                )
              ),
              u("react", "18.3.1", () => j.e(540).then(() => () => j(6540)))),
            (e[t] = l.length ? Promise.all(l).then(() => (e[t] = 1)) : 1)
          );
        }
      };
    })(),
    (j.p = ""),
    (t = (e) => {
      var r = (e) => e.split(".").map((e) => (+e == e ? +e : e)),
        t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
        o = t[1] ? r(t[1]) : [];
      return (
        t[2] && (o.length++, o.push.apply(o, r(t[2]))),
        t[3] && (o.push([]), o.push.apply(o, r(t[3]))),
        o
      );
    }),
    (o = (e, r) => {
      (e = t(e)), (r = t(r));
      for (var o = 0; ; ) {
        if (o >= e.length) return o < r.length && "u" != (typeof r[o])[0];
        var n = e[o],
          a = (typeof n)[0];
        if (o >= r.length) return "u" == a;
        var i = r[o],
          u = (typeof i)[0];
        if (a != u) return ("o" == a && "n" == u) || "s" == u || "u" == a;
        if ("o" != a && "u" != a && n != i) return n < i;
        o++;
      }
    }),
    (n = (e) => {
      var r = e[0],
        t = "";
      if (1 === e.length) return "*";
      if (r + 0.5) {
        t +=
          0 == r
            ? ">="
            : -1 == r
            ? "<"
            : 1 == r
            ? "^"
            : 2 == r
            ? "~"
            : r > 0
            ? "="
            : "!=";
        for (var o = 1, a = 1; a < e.length; a++)
          o--,
            (t +=
              "u" == (typeof (u = e[a]))[0]
                ? "-"
                : (o > 0 ? "." : "") + ((o = 2), u));
        return t;
      }
      var i = [];
      for (a = 1; a < e.length; a++) {
        var u = e[a];
        i.push(
          0 === u
            ? "not(" + l() + ")"
            : 1 === u
            ? "(" + l() + " || " + l() + ")"
            : 2 === u
            ? i.pop() + " " + i.pop()
            : n(u)
        );
      }
      return l();
      function l() {
        return i.pop().replace(/^\((.+)\)$/, "$1");
      }
    }),
    (a = (e, r) => {
      if (0 in e) {
        r = t(r);
        var o = e[0],
          n = o < 0;
        n && (o = -o - 1);
        for (var i = 0, u = 1, l = !0; ; u++, i++) {
          var s,
            f,
            d = u < e.length ? (typeof e[u])[0] : "";
          if (i >= r.length || "o" == (f = (typeof (s = r[i]))[0]))
            return !l || ("u" == d ? u > o && !n : ("" == d) != n);
          if ("u" == f) {
            if (!l || "u" != d) return !1;
          } else if (l)
            if (d == f)
              if (u <= o) {
                if (s != e[u]) return !1;
              } else {
                if (n ? s > e[u] : s < e[u]) return !1;
                s != e[u] && (l = !1);
              }
            else if ("s" != d && "n" != d) {
              if (n || u <= o) return !1;
              (l = !1), u--;
            } else {
              if (u <= o || f < d != n) return !1;
              l = !1;
            }
          else "s" != d && "n" != d && ((l = !1), u--);
        }
      }
      var h = [],
        m = h.pop.bind(h);
      for (i = 1; i < e.length; i++) {
        var c = e[i];
        h.push(1 == c ? m() | m() : 2 == c ? m() & m() : c ? a(c, r) : !m());
      }
      return !!m();
    }),
    (i = (e, r) => e && j.o(e, r)),
    (u = (e) => ((e.loaded = 1), e.get())),
    (l = (e) =>
      Object.keys(e).reduce((r, t) => (e[t].eager && (r[t] = e[t]), r), {})),
    (s = (e, r, t, n) => {
      var i = n ? l(e[r]) : e[r];
      return (
        (r = Object.keys(i).reduce(
          (e, r) => (!a(t, r) || (e && !o(e, r)) ? e : r),
          0
        )) && i[r]
      );
    }),
    (f = (e, r, t) => {
      var n = t ? l(e[r]) : e[r];
      return Object.keys(n).reduce(
        (e, r) => (!e || (!n[e].loaded && o(e, r)) ? r : e),
        0
      );
    }),
    (d = (e, r, t, o) =>
      "Unsatisfied version " +
      t +
      " from " +
      (t && e[r][t].from) +
      " of shared singleton module " +
      r +
      " (required " +
      n(o) +
      ")"),
    (h = (e, r, t, o, a) => {
      var i = e[t];
      return (
        "No satisfying version (" +
        n(o) +
        ")" +
        (a ? " for eager consumption" : "") +
        " of shared module " +
        t +
        " found in shared scope " +
        r +
        ".\nAvailable versions: " +
        Object.keys(i)
          .map((e) => e + " from " + i[e].from)
          .join(", ")
      );
    }),
    (m = (e) => {
      throw new Error(e);
    }),
    (c = (e) => {
      "undefined" != typeof console && console.warn && console.warn(e);
    }),
    (v = (e, r, t) =>
      t
        ? t()
        : ((e, r) =>
            m("Shared module " + r + " doesn't exist in shared scope " + e))(
            e,
            r
          )),
    (g = (p = (e) =>
      function (r, t, o, n, a) {
        var i = j.I(r);
        return i && i.then && !o
          ? i.then(e.bind(e, r, j.S[r], t, !1, n, a))
          : e(r, j.S[r], t, o, n, a);
      })((e, r, t, o, n, a) => {
      if (!i(r, t)) return v(e, t, a);
      var l = s(r, t, n, o);
      return l ? u(l) : a ? a() : void m(h(r, e, t, n, o));
    })),
    (y = p((e, r, t, o, n, l) => {
      if (!i(r, t)) return v(e, t, l);
      var s = f(r, t, o);
      return a(n, s) || c(d(r, t, s, n)), u(r[t][s]);
    })),
    (b = {}),
    (k = {
      4914: () =>
        y("default", "react", !1, [1, 18, 2, 0], () =>
          j.e(540).then(() => () => j(6540))
        ),
      676: () =>
        y("default", "react-dom", !1, [1, 18, 3, 1], () =>
          j.e(961).then(() => () => j(961))
        ),
      9180: () =>
        g("default", "react-router-dom", !1, [1, 6, 28, 2], () =>
          Promise.all([j.e(648), j.e(676)]).then(() => () => j(2648))
        ),
    }),
    (w = { 180: [9180], 676: [676], 914: [4914] }),
    (_ = {}),
    (j.f.consumes = (e, r) => {
      j.o(w, e) &&
        w[e].forEach((e) => {
          if (j.o(b, e)) return r.push(b[e]);
          if (!_[e]) {
            var t = (r) => {
              (b[e] = 0),
                (j.m[e] = (t) => {
                  delete j.c[e], (t.exports = r());
                });
            };
            _[e] = !0;
            var o = (r) => {
              delete b[e],
                (j.m[e] = (t) => {
                  throw (delete j.c[e], r);
                });
            };
            try {
              var n = k[e]();
              n.then ? r.push((b[e] = n.then(t).catch(o))) : t(n);
            } catch (e) {
              o(e);
            }
          }
        });
    }),
    (() => {
      j.b = document.baseURI || self.location.href;
      var e = { 236: 0 };
      j.f.j = (r, t) => {
        var o = j.o(e, r) ? e[r] : void 0;
        if (0 !== o)
          if (o) t.push(o[2]);
          else if (/^(180|676|914)$/.test(r)) e[r] = 0;
          else {
            var n = new Promise((t, n) => (o = e[r] = [t, n]));
            t.push((o[2] = n));
            var a = j.p + j.u(r),
              i = new Error();
            j.l(
              a,
              (t) => {
                if (j.o(e, r) && (0 !== (o = e[r]) && (e[r] = void 0), o)) {
                  var n = t && ("load" === t.type ? "missing" : t.type),
                    a = t && t.target && t.target.src;
                  (i.message =
                    "Loading chunk " + r + " failed.\n(" + n + ": " + a + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = n),
                    (i.request = a),
                    o[1](i);
                }
              },
              "chunk-" + r,
              r
            );
          }
      };
      var r = (r, t) => {
          var o,
            n,
            [a, i, u] = t,
            l = 0;
          if (a.some((r) => 0 !== e[r])) {
            for (o in i) j.o(i, o) && (j.m[o] = i[o]);
            u && u(j);
          }
          for (r && r(t); l < a.length; l++)
            (n = a[l]), j.o(e, n) && e[n] && e[n][0](), (e[n] = 0);
        },
        t = (self.webpackChunkkta_memory_game =
          self.webpackChunkkta_memory_game || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })(),
    (j.nc = void 0);
  var O = j(1462);
  kta_memory_game = O;
})();
