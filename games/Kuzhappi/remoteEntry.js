var kta_kuzhappi;
(() => {
  "use strict";
  var e,
    r,
    t,
    n,
    a,
    o,
    i,
    u,
    l,
    d,
    s,
    f,
    h,
    p,
    c,
    v,
    m,
    g,
    b,
    y,
    k,
    w,
    P,
    S = {
      4945: (e, r, t) => {
        var n = {
            "./Kuzhappi": () =>
              Promise.all([t.e(914), t.e(61), t.e(560)]).then(
                () => () => t(1560)
              ),
            "./LandingPage": () =>
              Promise.all([t.e(914), t.e(180), t.e(539)]).then(
                () => () => t(9539)
              ),
          },
          a = (e, r) => (
            (t.R = r),
            (r = t.o(n, e)
              ? n[e]()
              : Promise.resolve().then(() => {
                  throw new Error(
                    'Module "' + e + '" does not exist in container.'
                  );
                })),
            (t.R = void 0),
            r
          ),
          o = (e, r) => {
            if (t.S) {
              var n = "default",
                a = t.S[n];
              if (a && a !== e)
                throw new Error(
                  "Container initialization failed as it has already been initialized with a different share scope"
                );
              return (t.S[n] = e), t.I(n, r);
            }
          };
        t.d(r, { get: () => a, init: () => o });
      },
    },
    j = {};
  function O(e) {
    var r = j[e];
    if (void 0 !== r) return r.exports;
    var t = (j[e] = { id: e, exports: {} });
    return S[e](t, t.exports, O), t.exports;
  }
  (O.m = S),
    (O.c = j),
    (O.n = (e) => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return O.d(r, { a: r }), r;
    }),
    (O.d = (e, r) => {
      for (var t in r)
        O.o(r, t) &&
          !O.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (O.f = {}),
    (O.e = (e) =>
      Promise.all(Object.keys(O.f).reduce((r, t) => (O.f[t](e, r), r), []))),
    (O.u = (e) => e + ".js"),
    (O.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (e = {}),
    (r = "kta_kuzhappi:"),
    (O.l = (t, n, a, o) => {
      if (e[t]) e[t].push(n);
      else {
        var i, u;
        if (void 0 !== a)
          for (
            var l = document.getElementsByTagName("script"), d = 0;
            d < l.length;
            d++
          ) {
            var s = l[d];
            if (
              s.getAttribute("src") == t ||
              s.getAttribute("data-webpack") == r + a
            ) {
              i = s;
              break;
            }
          }
        i ||
          ((u = !0),
          ((i = document.createElement("script")).charset = "utf-8"),
          (i.timeout = 120),
          O.nc && i.setAttribute("nonce", O.nc),
          i.setAttribute("data-webpack", r + a),
          (i.src = t)),
          (e[t] = [n]);
        var f = (r, n) => {
            (i.onerror = i.onload = null), clearTimeout(h);
            var a = e[t];
            if (
              (delete e[t],
              i.parentNode && i.parentNode.removeChild(i),
              a && a.forEach((e) => e(n)),
              r)
            )
              return r(n);
          },
          h = setTimeout(
            f.bind(null, void 0, { type: "timeout", target: i }),
            12e4
          );
        (i.onerror = f.bind(null, i.onerror)),
          (i.onload = f.bind(null, i.onload)),
          u && document.head.appendChild(i);
      }
    }),
    (O.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      O.S = {};
      var e = {},
        r = {};
      O.I = (t, n) => {
        n || (n = []);
        var a = r[t];
        if ((a || (a = r[t] = {}), !(n.indexOf(a) >= 0))) {
          if ((n.push(a), e[t])) return e[t];
          O.o(O.S, t) || (O.S[t] = {});
          var o = O.S[t],
            i = "kta_kuzhappi",
            u = (e, r, t, n) => {
              var a = (o[e] = o[e] || {}),
                u = a[r];
              (!u || (!u.loaded && (!n != !u.eager ? n : i > u.from))) &&
                (a[r] = { get: t, from: i, eager: !!n });
            },
            l = [];
          return (
            "default" === t &&
              (u("axios", "1.7.9", () => O.e(447).then(() => () => O(4447))),
              u("react-dnd-html5-backend", "16.0.1", () =>
                O.e(631).then(() => () => O(3631))
              ),
              u("react-dnd", "16.0.1", () =>
                Promise.all([O.e(648), O.e(914), O.e(848)]).then(
                  () => () => O(9648)
                )
              ),
              u("react-dom", "18.3.1", () =>
                Promise.all([O.e(961), O.e(914)]).then(() => () => O(961))
              ),
              u("react-router-dom", "6.28.2", () =>
                Promise.all([O.e(267), O.e(914), O.e(676)]).then(
                  () => () => O(2648)
                )
              ),
              u("react", "18.3.1", () => O.e(540).then(() => () => O(6540)))),
            (e[t] = l.length ? Promise.all(l).then(() => (e[t] = 1)) : 1)
          );
        }
      };
    })(),
    (O.p = ""),
    (t = (e) => {
      var r = (e) => e.split(".").map((e) => (+e == e ? +e : e)),
        t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
        n = t[1] ? r(t[1]) : [];
      return (
        t[2] && (n.length++, n.push.apply(n, r(t[2]))),
        t[3] && (n.push([]), n.push.apply(n, r(t[3]))),
        n
      );
    }),
    (n = (e, r) => {
      (e = t(e)), (r = t(r));
      for (var n = 0; ; ) {
        if (n >= e.length) return n < r.length && "u" != (typeof r[n])[0];
        var a = e[n],
          o = (typeof a)[0];
        if (n >= r.length) return "u" == o;
        var i = r[n],
          u = (typeof i)[0];
        if (o != u) return ("o" == o && "n" == u) || "s" == u || "u" == o;
        if ("o" != o && "u" != o && a != i) return a < i;
        n++;
      }
    }),
    (a = (e) => {
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
        for (var n = 1, o = 1; o < e.length; o++)
          n--,
            (t +=
              "u" == (typeof (u = e[o]))[0]
                ? "-"
                : (n > 0 ? "." : "") + ((n = 2), u));
        return t;
      }
      var i = [];
      for (o = 1; o < e.length; o++) {
        var u = e[o];
        i.push(
          0 === u
            ? "not(" + l() + ")"
            : 1 === u
            ? "(" + l() + " || " + l() + ")"
            : 2 === u
            ? i.pop() + " " + i.pop()
            : a(u)
        );
      }
      return l();
      function l() {
        return i.pop().replace(/^\((.+)\)$/, "$1");
      }
    }),
    (o = (e, r) => {
      if (0 in e) {
        r = t(r);
        var n = e[0],
          a = n < 0;
        a && (n = -n - 1);
        for (var i = 0, u = 1, l = !0; ; u++, i++) {
          var d,
            s,
            f = u < e.length ? (typeof e[u])[0] : "";
          if (i >= r.length || "o" == (s = (typeof (d = r[i]))[0]))
            return !l || ("u" == f ? u > n && !a : ("" == f) != a);
          if ("u" == s) {
            if (!l || "u" != f) return !1;
          } else if (l)
            if (f == s)
              if (u <= n) {
                if (d != e[u]) return !1;
              } else {
                if (a ? d > e[u] : d < e[u]) return !1;
                d != e[u] && (l = !1);
              }
            else if ("s" != f && "n" != f) {
              if (a || u <= n) return !1;
              (l = !1), u--;
            } else {
              if (u <= n || s < f != a) return !1;
              l = !1;
            }
          else "s" != f && "n" != f && ((l = !1), u--);
        }
      }
      var h = [],
        p = h.pop.bind(h);
      for (i = 1; i < e.length; i++) {
        var c = e[i];
        h.push(1 == c ? p() | p() : 2 == c ? p() & p() : c ? o(c, r) : !p());
      }
      return !!p();
    }),
    (i = (e, r) => e && O.o(e, r)),
    (u = (e) => ((e.loaded = 1), e.get())),
    (l = (e) =>
      Object.keys(e).reduce((r, t) => (e[t].eager && (r[t] = e[t]), r), {})),
    (d = (e, r, t, a) => {
      var i = a ? l(e[r]) : e[r];
      return (
        (r = Object.keys(i).reduce(
          (e, r) => (!o(t, r) || (e && !n(e, r)) ? e : r),
          0
        )) && i[r]
      );
    }),
    (s = (e, r, t) => {
      var a = t ? l(e[r]) : e[r];
      return Object.keys(a).reduce(
        (e, r) => (!e || (!a[e].loaded && n(e, r)) ? r : e),
        0
      );
    }),
    (f = (e, r, t, n) =>
      "Unsatisfied version " +
      t +
      " from " +
      (t && e[r][t].from) +
      " of shared singleton module " +
      r +
      " (required " +
      a(n) +
      ")"),
    (h = (e, r, t, n, o) => {
      var i = e[t];
      return (
        "No satisfying version (" +
        a(n) +
        ")" +
        (o ? " for eager consumption" : "") +
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
    (p = (e) => {
      throw new Error(e);
    }),
    (c = (e) => {
      "undefined" != typeof console && console.warn && console.warn(e);
    }),
    (m = (e, r, t) =>
      t
        ? t()
        : ((e, r) =>
            p("Shared module " + r + " doesn't exist in shared scope " + e))(
            e,
            r
          )),
    (g = (v = (e) =>
      function (r, t, n, a, o) {
        var i = O.I(r);
        return i && i.then && !n
          ? i.then(e.bind(e, r, O.S[r], t, !1, a, o))
          : e(r, O.S[r], t, n, a, o);
      })((e, r, t, n, a, o) => {
      if (!i(r, t)) return m(e, t, o);
      var l = d(r, t, a, n);
      return l ? u(l) : o ? o() : void p(h(r, e, t, a, n));
    })),
    (b = v((e, r, t, n, a, l) => {
      if (!i(r, t)) return m(e, t, l);
      var d = s(r, t, n);
      return o(a, d) || c(f(r, t, d, a)), u(r[t][d]);
    })),
    (y = {}),
    (k = {
      4914: () =>
        b("default", "react", !1, [1, 18, 2, 0], () =>
          O.e(540).then(() => () => O(6540))
        ),
      676: () =>
        b("default", "react-dom", !1, [1, 18, 3, 1], () =>
          O.e(961).then(() => () => O(961))
        ),
      1330: () =>
        g("default", "react-dnd-html5-backend", !1, [1, 16, 0, 1], () =>
          O.e(631).then(() => () => O(3631))
        ),
      5082: () =>
        g("default", "react-dnd", !1, [1, 16, 0, 1], () =>
          O.e(648).then(() => () => O(9648))
        ),
      9180: () =>
        g("default", "react-router-dom", !1, [1, 6, 28, 2], () =>
          Promise.all([O.e(267), O.e(676)]).then(() => () => O(2648))
        ),
    }),
    (w = { 61: [1330, 5082], 180: [9180], 676: [676], 914: [4914] }),
    (P = {}),
    (O.f.consumes = (e, r) => {
      O.o(w, e) &&
        w[e].forEach((e) => {
          if (O.o(y, e)) return r.push(y[e]);
          if (!P[e]) {
            var t = (r) => {
              (y[e] = 0),
                (O.m[e] = (t) => {
                  delete O.c[e], (t.exports = r());
                });
            };
            P[e] = !0;
            var n = (r) => {
              delete y[e],
                (O.m[e] = (t) => {
                  throw (delete O.c[e], r);
                });
            };
            try {
              var a = k[e]();
              a.then ? r.push((y[e] = a.then(t).catch(n))) : t(a);
            } catch (e) {
              n(e);
            }
          }
        });
    }),
    (() => {
      O.b = document.baseURI || self.location.href;
      var e = { 970: 0 };
      O.f.j = (r, t) => {
        var n = O.o(e, r) ? e[r] : void 0;
        if (0 !== n)
          if (n) t.push(n[2]);
          else if (/^(180|61|676|914)$/.test(r)) e[r] = 0;
          else {
            var a = new Promise((t, a) => (n = e[r] = [t, a]));
            t.push((n[2] = a));
            var o = O.p + O.u(r),
              i = new Error();
            O.l(
              o,
              (t) => {
                if (O.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var a = t && ("load" === t.type ? "missing" : t.type),
                    o = t && t.target && t.target.src;
                  (i.message =
                    "Loading chunk " + r + " failed.\n(" + a + ": " + o + ")"),
                    (i.name = "ChunkLoadError"),
                    (i.type = a),
                    (i.request = o),
                    n[1](i);
                }
              },
              "chunk-" + r,
              r
            );
          }
      };
      var r = (r, t) => {
          var n,
            a,
            [o, i, u] = t,
            l = 0;
          if (o.some((r) => 0 !== e[r])) {
            for (n in i) O.o(i, n) && (O.m[n] = i[n]);
            u && u(O);
          }
          for (r && r(t); l < o.length; l++)
            (a = o[l]), O.o(e, a) && e[a] && e[a][0](), (e[a] = 0);
        },
        t = (self.webpackChunkkta_kuzhappi =
          self.webpackChunkkta_kuzhappi || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })(),
    (O.nc = void 0);
  var x = O(4945);
  kta_kuzhappi = x;
})();
