/*! For license information please see 648.js.LICENSE.txt */
"use strict";
(self.webpackChunkkta_utchol = self.webpackChunkkta_utchol || []).push([
  [648],
  {
    648: (e, t, r) => {
      r.r(t),
        r.d(t, {
          AbortedDeferredError: () => q,
          Await: () => ar,
          BrowserRouter: () => Br,
          Form: () => Vr,
          HashRouter: () => Ir,
          Link: () => Kr,
          MemoryRouter: () => Qt,
          NavLink: () => $r,
          Navigate: () => Zt,
          NavigationType: () => n,
          Outlet: () => er,
          Route: () => tr,
          Router: () => rr,
          RouterProvider: () => Or,
          Routes: () => nr,
          ScrollRestoration: () => Jr,
          UNSAFE_DataRouterContext: () => at,
          UNSAFE_DataRouterStateContext: () => ot,
          UNSAFE_ErrorResponseImpl: () => re,
          UNSAFE_FetchersContext: () => Tr,
          UNSAFE_LocationContext: () => lt,
          UNSAFE_NavigationContext: () => st,
          UNSAFE_RouteContext: () => ut,
          UNSAFE_ViewTransitionContext: () => kr,
          UNSAFE_useRouteId: () => jt,
          UNSAFE_useScrollRestoration: () => un,
          createBrowserRouter: () => Dr,
          createHashRouter: () => Cr,
          createMemoryRouter: () => hr,
          createPath: () => m,
          createRoutesFromChildren: () => ur,
          createRoutesFromElements: () => ur,
          createSearchParams: () => gr,
          defer: () => Q,
          generatePath: () => j,
          isRouteErrorResponse: () => ne,
          json: () => Y,
          matchPath: () => O,
          matchRoutes: () => S,
          parsePath: () => v,
          redirect: () => Z,
          redirectDocument: () => ee,
          renderMatches: () => cr,
          replace: () => te,
          resolvePath: () => B,
          unstable_HistoryRouter: () => zr,
          unstable_usePrompt: () => dn,
          useActionData: () => zt,
          useAsyncError: () => Kt,
          useAsyncValue: () => Wt,
          useBeforeUnload: () => cn,
          useBlocker: () => Vt,
          useFetcher: () => an,
          useFetchers: () => on,
          useFormAction: () => nn,
          useHref: () => dt,
          useInRouterContext: () => ht,
          useLinkClickHandler: () => Qr,
          useLoaderData: () => Bt,
          useLocation: () => ft,
          useMatch: () => mt,
          useMatches: () => Nt,
          useNavigate: () => yt,
          useNavigation: () => Ot,
          useNavigationType: () => pt,
          useOutlet: () => wt,
          useOutletContext: () => bt,
          useParams: () => St,
          useResolvedPath: () => Et,
          useRevalidator: () => Ft,
          useRouteError: () => Ht,
          useRouteLoaderData: () => It,
          useRoutes: () => Rt,
          useSearchParams: () => Zr,
          useSubmit: () => rn,
          useViewTransitionState: () => hn,
        });
      var n,
        a = r(914),
        o = r(676);
      function i() {
        return (
          (i = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          i.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(n || (n = {}));
      const s = "popstate";
      function l(e) {
        void 0 === e && (e = {});
        let t,
          { initialEntries: r = ["/"], initialIndex: a, v5Compat: o = !1 } = e;
        t = r.map((e, t) =>
          d(
            e,
            "string" == typeof e ? null : e.state,
            0 === t ? "default" : void 0
          )
        );
        let i = u(null == a ? t.length - 1 : a),
          s = n.Pop,
          l = null;
        function u(e) {
          return Math.min(Math.max(e, 0), t.length - 1);
        }
        function c() {
          return t[i];
        }
        function d(e, r, n) {
          void 0 === r && (r = null);
          let a = p(t ? c().pathname : "/", e, r, n);
          return (
            h(
              "/" === a.pathname.charAt(0),
              "relative pathnames are not supported in memory history: " +
                JSON.stringify(e)
            ),
            a
          );
        }
        function f(e) {
          return "string" == typeof e ? e : m(e);
        }
        return {
          get index() {
            return i;
          },
          get action() {
            return s;
          },
          get location() {
            return c();
          },
          createHref: f,
          createURL: (e) => new URL(f(e), ""),
          encodeLocation(e) {
            let t = "string" == typeof e ? v(e) : e;
            return {
              pathname: t.pathname || "",
              search: t.search || "",
              hash: t.hash || "",
            };
          },
          push(e, r) {
            s = n.Push;
            let a = d(e, r);
            (i += 1),
              t.splice(i, t.length, a),
              o && l && l({ action: s, location: a, delta: 1 });
          },
          replace(e, r) {
            s = n.Replace;
            let a = d(e, r);
            (t[i] = a), o && l && l({ action: s, location: a, delta: 0 });
          },
          go(e) {
            s = n.Pop;
            let r = u(i + e),
              a = t[r];
            (i = r), l && l({ action: s, location: a, delta: e });
          },
          listen: (e) => (
            (l = e),
            () => {
              l = null;
            }
          ),
        };
      }
      function u(e) {
        return (
          void 0 === e && (e = {}),
          y(
            function (e, t) {
              let { pathname: r, search: n, hash: a } = e.location;
              return p(
                "",
                { pathname: r, search: n, hash: a },
                (t.state && t.state.usr) || null,
                (t.state && t.state.key) || "default"
              );
            },
            function (e, t) {
              return "string" == typeof t ? t : m(t);
            },
            null,
            e
          )
        );
      }
      function c(e) {
        return (
          void 0 === e && (e = {}),
          y(
            function (e, t) {
              let {
                pathname: r = "/",
                search: n = "",
                hash: a = "",
              } = v(e.location.hash.substr(1));
              return (
                r.startsWith("/") || r.startsWith(".") || (r = "/" + r),
                p(
                  "",
                  { pathname: r, search: n, hash: a },
                  (t.state && t.state.usr) || null,
                  (t.state && t.state.key) || "default"
                )
              );
            },
            function (e, t) {
              let r = e.document.querySelector("base"),
                n = "";
              if (r && r.getAttribute("href")) {
                let t = e.location.href,
                  r = t.indexOf("#");
                n = -1 === r ? t : t.slice(0, r);
              }
              return n + "#" + ("string" == typeof t ? t : m(t));
            },
            function (e, t) {
              h(
                "/" === e.pathname.charAt(0),
                "relative pathnames are not supported in hash history.push(" +
                  JSON.stringify(t) +
                  ")"
              );
            },
            e
          )
        );
      }
      function d(e, t) {
        if (!1 === e || null == e) throw new Error(t);
      }
      function h(e, t) {
        if (!e) {
          "undefined" != typeof console && console.warn(t);
          try {
            throw new Error(t);
          } catch (e) {}
        }
      }
      function f(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function p(e, t, r, n) {
        return (
          void 0 === r && (r = null),
          i(
            {
              pathname: "string" == typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" == typeof t ? v(t) : t,
            {
              state: r,
              key: (t && t.key) || n || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function m(e) {
        let { pathname: t = "/", search: r = "", hash: n = "" } = e;
        return (
          r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r),
          n && "#" !== n && (t += "#" === n.charAt(0) ? n : "#" + n),
          t
        );
      }
      function v(e) {
        let t = {};
        if (e) {
          let r = e.indexOf("#");
          r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
          let n = e.indexOf("?");
          n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
            e && (t.pathname = e);
        }
        return t;
      }
      function y(e, t, r, a) {
        void 0 === a && (a = {});
        let { window: o = document.defaultView, v5Compat: l = !1 } = a,
          u = o.history,
          c = n.Pop,
          h = null,
          v = y();
        function y() {
          return (u.state || { idx: null }).idx;
        }
        function g() {
          c = n.Pop;
          let e = y(),
            t = null == e ? null : e - v;
          (v = e), h && h({ action: c, location: w.location, delta: t });
        }
        function b(e) {
          let t =
              "null" !== o.location.origin
                ? o.location.origin
                : o.location.href,
            r = "string" == typeof e ? e : m(e);
          return (
            (r = r.replace(/ $/, "%20")),
            d(
              t,
              "No window.location.(origin|href) available to create URL for href: " +
                r
            ),
            new URL(r, t)
          );
        }
        null == v && ((v = 0), u.replaceState(i({}, u.state, { idx: v }), ""));
        let w = {
          get action() {
            return c;
          },
          get location() {
            return e(o, u);
          },
          listen(e) {
            if (h)
              throw new Error("A history only accepts one active listener");
            return (
              o.addEventListener(s, g),
              (h = e),
              () => {
                o.removeEventListener(s, g), (h = null);
              }
            );
          },
          createHref: (e) => t(o, e),
          createURL: b,
          encodeLocation(e) {
            let t = b(e);
            return { pathname: t.pathname, search: t.search, hash: t.hash };
          },
          push: function (e, t) {
            c = n.Push;
            let a = p(w.location, e, t);
            r && r(a, e), (v = y() + 1);
            let i = f(a, v),
              s = w.createHref(a);
            try {
              u.pushState(i, "", s);
            } catch (e) {
              if (e instanceof DOMException && "DataCloneError" === e.name)
                throw e;
              o.location.assign(s);
            }
            l && h && h({ action: c, location: w.location, delta: 1 });
          },
          replace: function (e, t) {
            c = n.Replace;
            let a = p(w.location, e, t);
            r && r(a, e), (v = y());
            let o = f(a, v),
              i = w.createHref(a);
            u.replaceState(o, "", i),
              l && h && h({ action: c, location: w.location, delta: 0 });
          },
          go: (e) => u.go(e),
        };
        return w;
      }
      var g;
      !(function (e) {
        (e.data = "data"),
          (e.deferred = "deferred"),
          (e.redirect = "redirect"),
          (e.error = "error");
      })(g || (g = {}));
      const b = new Set([
        "lazy",
        "caseSensitive",
        "path",
        "id",
        "index",
        "children",
      ]);
      function w(e, t, r, n) {
        return (
          void 0 === r && (r = []),
          void 0 === n && (n = {}),
          e.map((e, a) => {
            let o = [...r, String(a)],
              s = "string" == typeof e.id ? e.id : o.join("-");
            if (
              (d(
                !0 !== e.index || !e.children,
                "Cannot specify children on an index route"
              ),
              d(
                !n[s],
                'Found a route id collision on id "' +
                  s +
                  "\".  Route id's must be globally unique within Data Router usages"
              ),
              (function (e) {
                return !0 === e.index;
              })(e))
            ) {
              let r = i({}, e, t(e), { id: s });
              return (n[s] = r), r;
            }
            {
              let r = i({}, e, t(e), { id: s, children: void 0 });
              return (
                (n[s] = r),
                e.children && (r.children = w(e.children, t, o, n)),
                r
              );
            }
          })
        );
      }
      function S(e, t, r) {
        return void 0 === r && (r = "/"), E(e, t, r, !1);
      }
      function E(e, t, r, n) {
        let a = N(("string" == typeof t ? v(t) : t).pathname || "/", r);
        if (null == a) return null;
        let o = x(e);
        !(function (e) {
          e.sort((e, t) =>
            e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  return e.length === t.length &&
                    e.slice(0, -1).every((e, r) => e === t[r])
                    ? e[e.length - 1] - t[t.length - 1]
                    : 0;
                })(
                  e.routesMeta.map((e) => e.childrenIndex),
                  t.routesMeta.map((e) => e.childrenIndex)
                )
          );
        })(o);
        let i = null;
        for (let e = 0; null == i && e < o.length; ++e) {
          let t = F(a);
          i = U(o[e], t, n);
        }
        return i;
      }
      function R(e, t) {
        let { route: r, pathname: n, params: a } = e;
        return {
          id: r.id,
          pathname: n,
          params: a,
          data: t[r.id],
          handle: r.handle,
        };
      }
      function x(e, t, r, n) {
        void 0 === t && (t = []),
          void 0 === r && (r = []),
          void 0 === n && (n = "");
        let a = (e, a, o) => {
          let i = {
            relativePath: void 0 === o ? e.path || "" : o,
            caseSensitive: !0 === e.caseSensitive,
            childrenIndex: a,
            route: e,
          };
          i.relativePath.startsWith("/") &&
            (d(
              i.relativePath.startsWith(n),
              'Absolute route path "' +
                i.relativePath +
                '" nested under path "' +
                n +
                '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
            ),
            (i.relativePath = i.relativePath.slice(n.length)));
          let s = K([n, i.relativePath]),
            l = r.concat(i);
          e.children &&
            e.children.length > 0 &&
            (d(
              !0 !== e.index,
              'Index routes must not have child routes. Please remove all child routes from route path "' +
                s +
                '".'
            ),
            x(e.children, t, l, s)),
            (null != e.path || e.index) &&
              t.push({ path: s, score: M(s, e.index), routesMeta: l });
        };
        return (
          e.forEach((e, t) => {
            var r;
            if ("" !== e.path && null != (r = e.path) && r.includes("?"))
              for (let r of D(e.path)) a(e, t, r);
            else a(e, t);
          }),
          t
        );
      }
      function D(e) {
        let t = e.split("/");
        if (0 === t.length) return [];
        let [r, ...n] = t,
          a = r.endsWith("?"),
          o = r.replace(/\?$/, "");
        if (0 === n.length) return a ? [o, ""] : [o];
        let i = D(n.join("/")),
          s = [];
        return (
          s.push(...i.map((e) => ("" === e ? o : [o, e].join("/")))),
          a && s.push(...i),
          s.map((t) => (e.startsWith("/") && "" === t ? "/" : t))
        );
      }
      const C = /^:[\w-]+$/,
        P = 3,
        L = 2,
        k = 1,
        T = 10,
        _ = -2,
        A = (e) => "*" === e;
      function M(e, t) {
        let r = e.split("/"),
          n = r.length;
        return (
          r.some(A) && (n += _),
          t && (n += L),
          r
            .filter((e) => !A(e))
            .reduce((e, t) => e + (C.test(t) ? P : "" === t ? k : T), n)
        );
      }
      function U(e, t, r) {
        void 0 === r && (r = !1);
        let { routesMeta: n } = e,
          a = {},
          o = "/",
          i = [];
        for (let e = 0; e < n.length; ++e) {
          let s = n[e],
            l = e === n.length - 1,
            u = "/" === o ? t : t.slice(o.length) || "/",
            c = O(
              { path: s.relativePath, caseSensitive: s.caseSensitive, end: l },
              u
            ),
            d = s.route;
          if (
            (!c &&
              l &&
              r &&
              !n[n.length - 1].route.index &&
              (c = O(
                {
                  path: s.relativePath,
                  caseSensitive: s.caseSensitive,
                  end: !1,
                },
                u
              )),
            !c)
          )
            return null;
          Object.assign(a, c.params),
            i.push({
              params: a,
              pathname: K([o, c.pathname]),
              pathnameBase: $(K([o, c.pathnameBase])),
              route: d,
            }),
            "/" !== c.pathnameBase && (o = K([o, c.pathnameBase]));
        }
        return i;
      }
      function j(e, t) {
        void 0 === t && (t = {});
        let r = e;
        r.endsWith("*") &&
          "*" !== r &&
          !r.endsWith("/*") &&
          (h(
            !1,
            'Route path "' +
              r +
              '" will be treated as if it were "' +
              r.replace(/\*$/, "/*") +
              '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
              r.replace(/\*$/, "/*") +
              '".'
          ),
          (r = r.replace(/\*$/, "/*")));
        const n = r.startsWith("/") ? "/" : "",
          a = (e) => (null == e ? "" : "string" == typeof e ? e : String(e));
        return (
          n +
          r
            .split(/\/+/)
            .map((e, r, n) => {
              if (r === n.length - 1 && "*" === e) return a(t["*"]);
              const o = e.match(/^:([\w-]+)(\??)$/);
              if (o) {
                const [, e, r] = o;
                let n = t[e];
                return (
                  d("?" === r || null != n, 'Missing ":' + e + '" param'), a(n)
                );
              }
              return e.replace(/\?$/g, "");
            })
            .filter((e) => !!e)
            .join("/")
        );
      }
      function O(e, t) {
        "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [r, n] = (function (e, t, r) {
            void 0 === t && (t = !1),
              void 0 === r && (r = !0),
              h(
                "*" === e || !e.endsWith("*") || e.endsWith("/*"),
                'Route path "' +
                  e +
                  '" will be treated as if it were "' +
                  e.replace(/\*$/, "/*") +
                  '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                  e.replace(/\*$/, "/*") +
                  '".'
              );
            let n = [],
              a =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                  .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (e, t, r) => (
                      n.push({ paramName: t, isOptional: null != r }),
                      r ? "/?([^\\/]+)?" : "/([^\\/]+)"
                    )
                  );
            return (
              e.endsWith("*")
                ? (n.push({ paramName: "*" }),
                  (a +=
                    "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
                : r
                ? (a += "\\/*$")
                : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))"),
              [new RegExp(a, t ? void 0 : "i"), n]
            );
          })(e.path, e.caseSensitive, e.end),
          a = t.match(r);
        if (!a) return null;
        let o = a[0],
          i = o.replace(/(.)\/+$/, "$1"),
          s = a.slice(1);
        return {
          params: n.reduce((e, t, r) => {
            let { paramName: n, isOptional: a } = t;
            if ("*" === n) {
              let e = s[r] || "";
              i = o.slice(0, o.length - e.length).replace(/(.)\/+$/, "$1");
            }
            const l = s[r];
            return (
              (e[n] = a && !l ? void 0 : (l || "").replace(/%2F/g, "/")), e
            );
          }, {}),
          pathname: o,
          pathnameBase: i,
          pattern: e,
        };
      }
      function F(e) {
        try {
          return e
            .split("/")
            .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
            .join("/");
        } catch (t) {
          return (
            h(
              !1,
              'The URL path "' +
                e +
                '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                t +
                ")."
            ),
            e
          );
        }
      }
      function N(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          n = e.charAt(r);
        return n && "/" !== n ? null : e.slice(r) || "/";
      }
      function B(e, t) {
        void 0 === t && (t = "/");
        let {
            pathname: r,
            search: n = "",
            hash: a = "",
          } = "string" == typeof e ? v(e) : e,
          o = r
            ? r.startsWith("/")
              ? r
              : (function (e, t) {
                  let r = t.replace(/\/+$/, "").split("/");
                  return (
                    e.split("/").forEach((e) => {
                      ".." === e
                        ? r.length > 1 && r.pop()
                        : "." !== e && r.push(e);
                    }),
                    r.length > 1 ? r.join("/") : "/"
                  );
                })(r, t)
            : t;
        return { pathname: o, search: V(n), hash: J(a) };
      }
      function I(e, t, r, n) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified `to." +
          t +
          "` field [" +
          JSON.stringify(n) +
          "].  Please separate it out to the `to." +
          r +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function z(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
        );
      }
      function H(e, t) {
        let r = z(e);
        return t
          ? r.map((e, t) => (t === r.length - 1 ? e.pathname : e.pathnameBase))
          : r.map((e) => e.pathnameBase);
      }
      function W(e, t, r, n) {
        let a;
        void 0 === n && (n = !1),
          "string" == typeof e
            ? (a = v(e))
            : ((a = i({}, e)),
              d(
                !a.pathname || !a.pathname.includes("?"),
                I("?", "pathname", "search", a)
              ),
              d(
                !a.pathname || !a.pathname.includes("#"),
                I("#", "pathname", "hash", a)
              ),
              d(
                !a.search || !a.search.includes("#"),
                I("#", "search", "hash", a)
              ));
        let o,
          s = "" === e || "" === a.pathname,
          l = s ? "/" : a.pathname;
        if (null == l) o = r;
        else {
          let e = t.length - 1;
          if (!n && l.startsWith("..")) {
            let t = l.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join("/");
          }
          o = e >= 0 ? t[e] : "/";
        }
        let u = B(a, o),
          c = l && "/" !== l && l.endsWith("/"),
          h = (s || "." === l) && r.endsWith("/");
        return u.pathname.endsWith("/") || (!c && !h) || (u.pathname += "/"), u;
      }
      const K = (e) => e.join("/").replace(/\/\/+/g, "/"),
        $ = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        V = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        J = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : ""),
        Y = function (e, t) {
          void 0 === t && (t = {});
          let r = "number" == typeof t ? { status: t } : t,
            n = new Headers(r.headers);
          return (
            n.has("Content-Type") ||
              n.set("Content-Type", "application/json; charset=utf-8"),
            new Response(JSON.stringify(e), i({}, r, { headers: n }))
          );
        };
      class q extends Error {}
      class X {
        constructor(e, t) {
          let r;
          (this.pendingKeysSet = new Set()),
            (this.subscribers = new Set()),
            (this.deferredKeys = []),
            d(
              e && "object" == typeof e && !Array.isArray(e),
              "defer() only accepts plain objects"
            ),
            (this.abortPromise = new Promise((e, t) => (r = t))),
            (this.controller = new AbortController());
          let n = () => r(new q("Deferred data aborted"));
          (this.unlistenAbortSignal = () =>
            this.controller.signal.removeEventListener("abort", n)),
            this.controller.signal.addEventListener("abort", n),
            (this.data = Object.entries(e).reduce((e, t) => {
              let [r, n] = t;
              return Object.assign(e, { [r]: this.trackPromise(r, n) });
            }, {})),
            this.done && this.unlistenAbortSignal(),
            (this.init = t);
        }
        trackPromise(e, t) {
          if (!(t instanceof Promise)) return t;
          this.deferredKeys.push(e), this.pendingKeysSet.add(e);
          let r = Promise.race([t, this.abortPromise]).then(
            (t) => this.onSettle(r, e, void 0, t),
            (t) => this.onSettle(r, e, t)
          );
          return (
            r.catch(() => {}),
            Object.defineProperty(r, "_tracked", { get: () => !0 }),
            r
          );
        }
        onSettle(e, t, r, n) {
          if (this.controller.signal.aborted && r instanceof q)
            return (
              this.unlistenAbortSignal(),
              Object.defineProperty(e, "_error", { get: () => r }),
              Promise.reject(r)
            );
          if (
            (this.pendingKeysSet.delete(t),
            this.done && this.unlistenAbortSignal(),
            void 0 === r && void 0 === n)
          ) {
            let r = new Error(
              'Deferred data for key "' +
                t +
                '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.'
            );
            return (
              Object.defineProperty(e, "_error", { get: () => r }),
              this.emit(!1, t),
              Promise.reject(r)
            );
          }
          return void 0 === n
            ? (Object.defineProperty(e, "_error", { get: () => r }),
              this.emit(!1, t),
              Promise.reject(r))
            : (Object.defineProperty(e, "_data", { get: () => n }),
              this.emit(!1, t),
              n);
        }
        emit(e, t) {
          this.subscribers.forEach((r) => r(e, t));
        }
        subscribe(e) {
          return this.subscribers.add(e), () => this.subscribers.delete(e);
        }
        cancel() {
          this.controller.abort(),
            this.pendingKeysSet.forEach((e, t) =>
              this.pendingKeysSet.delete(t)
            ),
            this.emit(!0);
        }
        async resolveData(e) {
          let t = !1;
          if (!this.done) {
            let r = () => this.cancel();
            e.addEventListener("abort", r),
              (t = await new Promise((t) => {
                this.subscribe((n) => {
                  e.removeEventListener("abort", r), (n || this.done) && t(n);
                });
              }));
          }
          return t;
        }
        get done() {
          return 0 === this.pendingKeysSet.size;
        }
        get unwrappedData() {
          return (
            d(
              null !== this.data && this.done,
              "Can only unwrap data on initialized and settled deferreds"
            ),
            Object.entries(this.data).reduce((e, t) => {
              let [r, n] = t;
              return Object.assign(e, { [r]: G(n) });
            }, {})
          );
        }
        get pendingKeys() {
          return Array.from(this.pendingKeysSet);
        }
      }
      function G(e) {
        if (
          !(function (e) {
            return e instanceof Promise && !0 === e._tracked;
          })(e)
        )
          return e;
        if (e._error) throw e._error;
        return e._data;
      }
      const Q = function (e, t) {
          return (
            void 0 === t && (t = {}),
            new X(e, "number" == typeof t ? { status: t } : t)
          );
        },
        Z = function (e, t) {
          void 0 === t && (t = 302);
          let r = t;
          "number" == typeof r
            ? (r = { status: r })
            : void 0 === r.status && (r.status = 302);
          let n = new Headers(r.headers);
          return (
            n.set("Location", e), new Response(null, i({}, r, { headers: n }))
          );
        },
        ee = (e, t) => {
          let r = Z(e, t);
          return r.headers.set("X-Remix-Reload-Document", "true"), r;
        },
        te = (e, t) => {
          let r = Z(e, t);
          return r.headers.set("X-Remix-Replace", "true"), r;
        };
      class re {
        constructor(e, t, r, n) {
          void 0 === n && (n = !1),
            (this.status = e),
            (this.statusText = t || ""),
            (this.internal = n),
            r instanceof Error
              ? ((this.data = r.toString()), (this.error = r))
              : (this.data = r);
        }
      }
      function ne(e) {
        return (
          null != e &&
          "number" == typeof e.status &&
          "string" == typeof e.statusText &&
          "boolean" == typeof e.internal &&
          "data" in e
        );
      }
      const ae = ["post", "put", "patch", "delete"],
        oe = new Set(ae),
        ie = ["get", ...ae],
        se = new Set(ie),
        le = new Set([301, 302, 303, 307, 308]),
        ue = new Set([307, 308]),
        ce = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        },
        de = {
          state: "idle",
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        },
        he = {
          state: "unblocked",
          proceed: void 0,
          reset: void 0,
          location: void 0,
        },
        fe = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        pe = (e) => ({ hasErrorBoundary: Boolean(e.hasErrorBoundary) }),
        me = "remix-router-transitions";
      function ve(e) {
        const t = e.window
            ? e.window
            : "undefined" != typeof window
            ? window
            : void 0,
          r =
            void 0 !== t &&
            void 0 !== t.document &&
            void 0 !== t.document.createElement,
          a = !r;
        let o;
        if (
          (d(
            e.routes.length > 0,
            "You must provide a non-empty routes array to createRouter"
          ),
          e.mapRouteProperties)
        )
          o = e.mapRouteProperties;
        else if (e.detectErrorBoundary) {
          let t = e.detectErrorBoundary;
          o = (e) => ({ hasErrorBoundary: t(e) });
        } else o = pe;
        let s,
          l,
          u,
          c = {},
          f = w(e.routes, o, void 0, c),
          m = e.basename || "/",
          v = e.dataStrategy || Ce,
          y = e.patchRoutesOnNavigation,
          x = i(
            {
              v7_fetcherPersist: !1,
              v7_normalizeFormMethod: !1,
              v7_partialHydration: !1,
              v7_prependBasename: !1,
              v7_relativeSplatPath: !1,
              v7_skipActionErrorRevalidation: !1,
            },
            e.future
          ),
          D = null,
          C = new Set(),
          P = null,
          L = null,
          k = null,
          T = null != e.hydrationData,
          _ = S(f, e.history.location, m),
          A = null;
        if (null == _ && !y) {
          let t = Ne(404, { pathname: e.history.location.pathname }),
            { matches: r, route: n } = Fe(f);
          (_ = r), (A = { [n.id]: t });
        }
        if (
          (_ &&
            !e.hydrationData &&
            ut(_, f, e.history.location.pathname).active &&
            (_ = null),
          _)
        )
          if (_.some((e) => e.route.lazy)) l = !1;
          else if (_.some((e) => e.route.loader))
            if (x.v7_partialHydration) {
              let t = e.hydrationData ? e.hydrationData.loaderData : null,
                r = e.hydrationData ? e.hydrationData.errors : null;
              if (r) {
                let e = _.findIndex((e) => void 0 !== r[e.route.id]);
                l = _.slice(0, e + 1).every((e) => !Se(e.route, t, r));
              } else l = _.every((e) => !Se(e.route, t, r));
            } else l = null != e.hydrationData;
          else l = !0;
        else if (((l = !1), (_ = []), x.v7_partialHydration)) {
          let t = ut(null, f, e.history.location.pathname);
          t.active && t.matches && (_ = t.matches);
        }
        let M,
          U,
          j = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: _,
            initialized: l,
            navigation: ce,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
            actionData: (e.hydrationData && e.hydrationData.actionData) || null,
            errors: (e.hydrationData && e.hydrationData.errors) || A,
            fetchers: new Map(),
            blockers: new Map(),
          },
          O = n.Pop,
          F = !1,
          B = !1,
          I = new Map(),
          z = null,
          H = !1,
          W = !1,
          K = [],
          $ = new Set(),
          V = new Map(),
          J = 0,
          Y = -1,
          q = new Map(),
          X = new Set(),
          G = new Map(),
          Q = new Map(),
          Z = new Set(),
          ee = new Map(),
          te = new Map();
        function re(e, t) {
          void 0 === t && (t = {}), (j = i({}, j, e));
          let r = [],
            n = [];
          x.v7_fetcherPersist &&
            j.fetchers.forEach((e, t) => {
              "idle" === e.state && (Z.has(t) ? n.push(t) : r.push(t));
            }),
            Z.forEach((e) => {
              j.fetchers.has(e) || V.has(e) || n.push(e);
            }),
            [...C].forEach((e) =>
              e(j, {
                deletedFetchers: n,
                viewTransitionOpts: t.viewTransitionOpts,
                flushSync: !0 === t.flushSync,
              })
            ),
            x.v7_fetcherPersist
              ? (r.forEach((e) => j.fetchers.delete(e)),
                n.forEach((e) => _e(e)))
              : n.forEach((e) => Z.delete(e));
        }
        function ae(t, r, a) {
          var o, l;
          let u,
            { flushSync: c } = void 0 === a ? {} : a,
            d =
              null != j.actionData &&
              null != j.navigation.formMethod &&
              Je(j.navigation.formMethod) &&
              "loading" === j.navigation.state &&
              !0 !== (null == (o = t.state) ? void 0 : o._isRedirect);
          u = r.actionData
            ? Object.keys(r.actionData).length > 0
              ? r.actionData
              : null
            : d
            ? j.actionData
            : null;
          let h = r.loaderData
              ? Ue(j.loaderData, r.loaderData, r.matches || [], r.errors)
              : j.loaderData,
            p = j.blockers;
          p.size > 0 && ((p = new Map(p)), p.forEach((e, t) => p.set(t, he)));
          let m,
            v =
              !0 === F ||
              (null != j.navigation.formMethod &&
                Je(j.navigation.formMethod) &&
                !0 !== (null == (l = t.state) ? void 0 : l._isRedirect));
          if (
            (s && ((f = s), (s = void 0)),
            H ||
              O === n.Pop ||
              (O === n.Push
                ? e.history.push(t, t.state)
                : O === n.Replace && e.history.replace(t, t.state)),
            O === n.Pop)
          ) {
            let e = I.get(j.location.pathname);
            e && e.has(t.pathname)
              ? (m = { currentLocation: j.location, nextLocation: t })
              : I.has(t.pathname) &&
                (m = { currentLocation: t, nextLocation: j.location });
          } else if (B) {
            let e = I.get(j.location.pathname);
            e
              ? e.add(t.pathname)
              : ((e = new Set([t.pathname])), I.set(j.location.pathname, e)),
              (m = { currentLocation: j.location, nextLocation: t });
          }
          re(
            i({}, r, {
              actionData: u,
              loaderData: h,
              historyAction: O,
              location: t,
              initialized: !0,
              navigation: ce,
              revalidation: "idle",
              restoreScrollPosition: lt(t, r.matches || j.matches),
              preventScrollReset: v,
              blockers: p,
            }),
            { viewTransitionOpts: m, flushSync: !0 === c }
          ),
            (O = n.Pop),
            (F = !1),
            (B = !1),
            (H = !1),
            (W = !1),
            (K = []);
        }
        async function oe(t, r, a) {
          M && M.abort(),
            (M = null),
            (O = t),
            (H = !0 === (a && a.startUninterruptedRevalidation)),
            (function (e, t) {
              if (P && k) {
                let r = st(e, t);
                P[r] = k();
              }
            })(j.location, j.matches),
            (F = !0 === (a && a.preventScrollReset)),
            (B = !0 === (a && a.enableViewTransition));
          let o = s || f,
            l = a && a.overrideNavigation,
            u = S(o, r, m),
            c = !0 === (a && a.flushSync),
            d = ut(u, o, r.pathname);
          if ((d.active && d.matches && (u = d.matches), !u)) {
            let { error: e, notFoundMatches: t, route: n } = ot(r.pathname);
            return void ae(
              r,
              { matches: t, loaderData: {}, errors: { [n.id]: e } },
              { flushSync: c }
            );
          }
          if (
            j.initialized &&
            !W &&
            ((h = j.location),
            (p = r),
            h.pathname === p.pathname &&
              h.search === p.search &&
              ("" === h.hash
                ? "" !== p.hash
                : h.hash === p.hash || "" !== p.hash)) &&
            !(a && a.submission && Je(a.submission.formMethod))
          )
            return void ae(r, { matches: u }, { flushSync: c });
          var h, p;
          M = new AbortController();
          let v,
            y = Te(e.history, r, M.signal, a && a.submission);
          if (a && a.pendingError)
            v = [Oe(u).route.id, { type: g.error, error: a.pendingError }];
          else if (a && a.submission && Je(a.submission.formMethod)) {
            let t = await (async function (e, t, r, a, o, i) {
              void 0 === i && (i = {}), be();
              let s,
                l = (function (e, t) {
                  return {
                    state: "submitting",
                    location: e,
                    formMethod: t.formMethod,
                    formAction: t.formAction,
                    formEncType: t.formEncType,
                    formData: t.formData,
                    json: t.json,
                    text: t.text,
                  };
                })(t, r);
              if (
                (re({ navigation: l }, { flushSync: !0 === i.flushSync }), o)
              ) {
                let r = await ct(a, t.pathname, e.signal);
                if ("aborted" === r.type) return { shortCircuited: !0 };
                if ("error" === r.type) {
                  let e = Oe(r.partialMatches).route.id;
                  return {
                    matches: r.partialMatches,
                    pendingActionResult: [e, { type: g.error, error: r.error }],
                  };
                }
                if (!r.matches) {
                  let {
                    notFoundMatches: e,
                    error: r,
                    route: n,
                  } = ot(t.pathname);
                  return {
                    matches: e,
                    pendingActionResult: [n.id, { type: g.error, error: r }],
                  };
                }
                a = r.matches;
              }
              let u = Qe(a, t);
              if (u.route.action || u.route.lazy) {
                if (
                  ((s = (await le("action", j, e, [u], a, null))[u.route.id]),
                  e.signal.aborted)
                )
                  return { shortCircuited: !0 };
              } else
                s = {
                  type: g.error,
                  error: Ne(405, {
                    method: e.method,
                    pathname: t.pathname,
                    routeId: u.route.id,
                  }),
                };
              if (Ke(s)) {
                let t;
                return (
                  (t =
                    i && null != i.replace
                      ? i.replace
                      : ke(
                          s.response.headers.get("Location"),
                          new URL(e.url),
                          m
                        ) ===
                        j.location.pathname + j.location.search),
                  await se(e, s, !0, { submission: r, replace: t }),
                  { shortCircuited: !0 }
                );
              }
              if (He(s)) throw Ne(400, { type: "defer-action" });
              if (We(s)) {
                let e = Oe(a, u.route.id);
                return (
                  !0 !== (i && i.replace) && (O = n.Push),
                  { matches: a, pendingActionResult: [e.route.id, s] }
                );
              }
              return { matches: a, pendingActionResult: [u.route.id, s] };
            })(y, r, a.submission, u, d.active, {
              replace: a.replace,
              flushSync: c,
            });
            if (t.shortCircuited) return;
            if (t.pendingActionResult) {
              let [e, n] = t.pendingActionResult;
              if (We(n) && ne(n.error) && 404 === n.error.status)
                return (
                  (M = null),
                  void ae(r, {
                    matches: t.matches,
                    loaderData: {},
                    errors: { [e]: n.error },
                  })
                );
            }
            (u = t.matches || u),
              (v = t.pendingActionResult),
              (l = et(r, a.submission)),
              (c = !1),
              (d.active = !1),
              (y = Te(e.history, y.url, y.signal));
          }
          let {
            shortCircuited: b,
            matches: w,
            loaderData: E,
            errors: R,
          } = await (async function (t, r, n, a, o, l, u, c, d, h, p) {
            let v = o || et(r, l),
              y = l || u || Ze(v),
              g = !(H || (x.v7_partialHydration && d));
            if (a) {
              if (g) {
                let e = ie(p);
                re(
                  i({ navigation: v }, void 0 !== e ? { actionData: e } : {}),
                  { flushSync: h }
                );
              }
              let e = await ct(n, r.pathname, t.signal);
              if ("aborted" === e.type) return { shortCircuited: !0 };
              if ("error" === e.type) {
                let t = Oe(e.partialMatches).route.id;
                return {
                  matches: e.partialMatches,
                  loaderData: {},
                  errors: { [t]: e.error },
                };
              }
              if (!e.matches) {
                let { error: e, notFoundMatches: t, route: n } = ot(r.pathname);
                return { matches: t, loaderData: {}, errors: { [n.id]: e } };
              }
              n = e.matches;
            }
            let b = s || f,
              [w, S] = we(
                e.history,
                j,
                n,
                y,
                r,
                x.v7_partialHydration && !0 === d,
                x.v7_skipActionErrorRevalidation,
                W,
                K,
                $,
                Z,
                G,
                X,
                b,
                m,
                p
              );
            if (
              (it(
                (e) =>
                  !(n && n.some((t) => t.route.id === e)) ||
                  (w && w.some((t) => t.route.id === e))
              ),
              (Y = ++J),
              0 === w.length && 0 === S.length)
            ) {
              let e = $e();
              return (
                ae(
                  r,
                  i(
                    {
                      matches: n,
                      loaderData: {},
                      errors: p && We(p[1]) ? { [p[0]]: p[1].error } : null,
                    },
                    je(p),
                    e ? { fetchers: new Map(j.fetchers) } : {}
                  ),
                  { flushSync: h }
                ),
                { shortCircuited: !0 }
              );
            }
            if (g) {
              let e = {};
              if (!a) {
                e.navigation = v;
                let t = ie(p);
                void 0 !== t && (e.actionData = t);
              }
              S.length > 0 &&
                (e.fetchers = (function (e) {
                  return (
                    e.forEach((e) => {
                      let t = j.fetchers.get(e.key),
                        r = tt(void 0, t ? t.data : void 0);
                      j.fetchers.set(e.key, r);
                    }),
                    new Map(j.fetchers)
                  );
                })(S)),
                re(e, { flushSync: h });
            }
            S.forEach((e) => {
              Ae(e.key), e.controller && V.set(e.key, e.controller);
            });
            let E = () => S.forEach((e) => Ae(e.key));
            M && M.signal.addEventListener("abort", E);
            let { loaderResults: R, fetcherResults: D } = await ve(
              j,
              n,
              w,
              S,
              t
            );
            if (t.signal.aborted) return { shortCircuited: !0 };
            M && M.signal.removeEventListener("abort", E),
              S.forEach((e) => V.delete(e.key));
            let C = Be(R);
            if (C)
              return (
                await se(t, C.result, !0, { replace: c }),
                { shortCircuited: !0 }
              );
            if (((C = Be(D)), C))
              return (
                X.add(C.key),
                await se(t, C.result, !0, { replace: c }),
                { shortCircuited: !0 }
              );
            let { loaderData: P, errors: L } = Me(j, n, R, p, S, D, ee);
            ee.forEach((e, t) => {
              e.subscribe((r) => {
                (r || e.done) && ee.delete(t);
              });
            }),
              x.v7_partialHydration &&
                d &&
                j.errors &&
                (L = i({}, j.errors, L));
            let k = $e(),
              T = Ve(Y),
              _ = k || T || S.length > 0;
            return i(
              { matches: n, loaderData: P, errors: L },
              _ ? { fetchers: new Map(j.fetchers) } : {}
            );
          })(
            y,
            r,
            u,
            d.active,
            l,
            a && a.submission,
            a && a.fetcherSubmission,
            a && a.replace,
            a && !0 === a.initialHydration,
            c,
            v
          );
          b ||
            ((M = null),
            ae(r, i({ matches: w || u }, je(v), { loaderData: E, errors: R })));
        }
        function ie(e) {
          return e && !We(e[1])
            ? { [e[0]]: e[1].data }
            : j.actionData
            ? 0 === Object.keys(j.actionData).length
              ? null
              : j.actionData
            : void 0;
        }
        async function se(a, o, s, l) {
          let {
            submission: u,
            fetcherSubmission: c,
            preventScrollReset: h,
            replace: f,
          } = void 0 === l ? {} : l;
          o.response.headers.has("X-Remix-Revalidate") && (W = !0);
          let v = o.response.headers.get("Location");
          d(v, "Expected a Location header on the redirect Response"),
            (v = ke(v, new URL(a.url), m));
          let y = p(j.location, v, { _isRedirect: !0 });
          if (r) {
            let r = !1;
            if (o.response.headers.has("X-Remix-Reload-Document")) r = !0;
            else if (fe.test(v)) {
              const n = e.history.createURL(v);
              r = n.origin !== t.location.origin || null == N(n.pathname, m);
            }
            if (r)
              return void (f ? t.location.replace(v) : t.location.assign(v));
          }
          M = null;
          let g =
              !0 === f || o.response.headers.has("X-Remix-Replace")
                ? n.Replace
                : n.Push,
            { formMethod: b, formAction: w, formEncType: S } = j.navigation;
          !u && !c && b && w && S && (u = Ze(j.navigation));
          let E = u || c;
          if (ue.has(o.response.status) && E && Je(E.formMethod))
            await oe(g, y, {
              submission: i({}, E, { formAction: v }),
              preventScrollReset: h || F,
              enableViewTransition: s ? B : void 0,
            });
          else {
            let e = et(y, u);
            await oe(g, y, {
              overrideNavigation: e,
              fetcherSubmission: c,
              preventScrollReset: h || F,
              enableViewTransition: s ? B : void 0,
            });
          }
        }
        async function le(e, t, r, n, a, s) {
          let l,
            u = {};
          try {
            l = await (async function (e, t, r, n, a, o, s, l, u, c) {
              let f = o.map((e) =>
                  e.route.lazy
                    ? (async function (e, t, r) {
                        if (!e.lazy) return;
                        let n = await e.lazy();
                        if (!e.lazy) return;
                        let a = r[e.id];
                        d(a, "No route found in manifest");
                        let o = {};
                        for (let e in n) {
                          let t = void 0 !== a[e] && "hasErrorBoundary" !== e;
                          h(
                            !t,
                            'Route "' +
                              a.id +
                              '" has a static property "' +
                              e +
                              '" defined but its lazy function is also returning a value for this property. The lazy route property "' +
                              e +
                              '" will be ignored.'
                          ),
                            t || b.has(e) || (o[e] = n[e]);
                        }
                        Object.assign(a, o),
                          Object.assign(a, i({}, t(a), { lazy: void 0 }));
                      })(e.route, u, l)
                    : void 0
                ),
                p = o.map((e, r) => {
                  let o = f[r],
                    s = a.some((t) => t.route.id === e.route.id);
                  return i({}, e, {
                    shouldLoad: s,
                    resolve: async (r) => (
                      r &&
                        "GET" === n.method &&
                        (e.route.lazy || e.route.loader) &&
                        (s = !0),
                      s
                        ? (async function (e, t, r, n, a, o) {
                            let i,
                              s,
                              l = (n) => {
                                let i,
                                  l = new Promise((e, t) => (i = t));
                                (s = () => i()),
                                  t.signal.addEventListener("abort", s);
                                let u = (a) =>
                                    "function" != typeof n
                                      ? Promise.reject(
                                          new Error(
                                            'You cannot call the handler for a route which defines a boolean "' +
                                              e +
                                              '" [routeId: ' +
                                              r.route.id +
                                              "]"
                                          )
                                        )
                                      : n(
                                          {
                                            request: t,
                                            params: r.params,
                                            context: o,
                                          },
                                          ...(void 0 !== a ? [a] : [])
                                        ),
                                  c = (async () => {
                                    try {
                                      return {
                                        type: "data",
                                        result: await (a
                                          ? a((e) => u(e))
                                          : u()),
                                      };
                                    } catch (e) {
                                      return { type: "error", result: e };
                                    }
                                  })();
                                return Promise.race([c, l]);
                              };
                            try {
                              let a = r.route[e];
                              if (n)
                                if (a) {
                                  let e,
                                    [t] = await Promise.all([
                                      l(a).catch((t) => {
                                        e = t;
                                      }),
                                      n,
                                    ]);
                                  if (void 0 !== e) throw e;
                                  i = t;
                                } else {
                                  if ((await n, (a = r.route[e]), !a)) {
                                    if ("action" === e) {
                                      let e = new URL(t.url),
                                        n = e.pathname + e.search;
                                      throw Ne(405, {
                                        method: t.method,
                                        pathname: n,
                                        routeId: r.route.id,
                                      });
                                    }
                                    return { type: g.data, result: void 0 };
                                  }
                                  i = await l(a);
                                }
                              else {
                                if (!a) {
                                  let e = new URL(t.url);
                                  throw Ne(404, {
                                    pathname: e.pathname + e.search,
                                  });
                                }
                                i = await l(a);
                              }
                              d(
                                void 0 !== i.result,
                                "You defined " +
                                  ("action" === e ? "an action" : "a loader") +
                                  ' for route "' +
                                  r.route.id +
                                  "\" but didn't return anything from your `" +
                                  e +
                                  "` function. Please return a value or `null`."
                              );
                            } catch (e) {
                              return { type: g.error, result: e };
                            } finally {
                              s && t.signal.removeEventListener("abort", s);
                            }
                            return i;
                          })(t, n, e, o, r, c)
                        : Promise.resolve({ type: g.data, result: void 0 })
                    ),
                  });
                }),
                m = await e({
                  matches: p,
                  request: n,
                  params: o[0].params,
                  fetcherKey: s,
                  context: c,
                });
              try {
                await Promise.all(f);
              } catch (e) {}
              return m;
            })(v, e, 0, r, n, a, s, c, o);
          } catch (e) {
            return (
              n.forEach((t) => {
                u[t.route.id] = { type: g.error, error: e };
              }),
              u
            );
          }
          for (let [e, t] of Object.entries(l))
            if (ze(t)) {
              let n = t.result;
              u[e] = {
                type: g.redirect,
                response: Le(n, r, e, a, m, x.v7_relativeSplatPath),
              };
            } else u[e] = await Pe(t);
          return u;
        }
        async function ve(t, r, n, a, o) {
          let i = t.matches,
            s = le("loader", 0, o, n, r, null),
            l = Promise.all(
              a.map(async (t) => {
                if (t.matches && t.match && t.controller) {
                  let r = (
                    await le(
                      "loader",
                      0,
                      Te(e.history, t.path, t.controller.signal),
                      [t.match],
                      t.matches,
                      t.key
                    )
                  )[t.match.route.id];
                  return { [t.key]: r };
                }
                return Promise.resolve({
                  [t.key]: {
                    type: g.error,
                    error: Ne(404, { pathname: t.path }),
                  },
                });
              })
            ),
            u = await s,
            c = (await l).reduce((e, t) => Object.assign(e, t), {});
          return (
            await Promise.all([
              Ye(r, u, o.signal, i, t.loaderData),
              qe(r, c, a),
            ]),
            { loaderResults: u, fetcherResults: c }
          );
        }
        function be() {
          (W = !0),
            K.push(...it()),
            G.forEach((e, t) => {
              V.has(t) && $.add(t), Ae(t);
            });
        }
        function Ee(e, t, r) {
          void 0 === r && (r = {}),
            j.fetchers.set(e, t),
            re(
              { fetchers: new Map(j.fetchers) },
              { flushSync: !0 === (r && r.flushSync) }
            );
        }
        function Re(e, t, r, n) {
          void 0 === n && (n = {});
          let a = Oe(j.matches, t);
          _e(e),
            re(
              { errors: { [a.route.id]: r }, fetchers: new Map(j.fetchers) },
              { flushSync: !0 === (n && n.flushSync) }
            );
        }
        function De(e) {
          return (
            Q.set(e, (Q.get(e) || 0) + 1),
            Z.has(e) && Z.delete(e),
            j.fetchers.get(e) || de
          );
        }
        function _e(e) {
          let t = j.fetchers.get(e);
          !V.has(e) || (t && "loading" === t.state && q.has(e)) || Ae(e),
            G.delete(e),
            q.delete(e),
            X.delete(e),
            x.v7_fetcherPersist && Z.delete(e),
            $.delete(e),
            j.fetchers.delete(e);
        }
        function Ae(e) {
          let t = V.get(e);
          t && (t.abort(), V.delete(e));
        }
        function Ie(e) {
          for (let t of e) {
            let e = rt(De(t).data);
            j.fetchers.set(t, e);
          }
        }
        function $e() {
          let e = [],
            t = !1;
          for (let r of X) {
            let n = j.fetchers.get(r);
            d(n, "Expected fetcher: " + r),
              "loading" === n.state && (X.delete(r), e.push(r), (t = !0));
          }
          return Ie(e), t;
        }
        function Ve(e) {
          let t = [];
          for (let [r, n] of q)
            if (n < e) {
              let e = j.fetchers.get(r);
              d(e, "Expected fetcher: " + r),
                "loading" === e.state && (Ae(r), q.delete(r), t.push(r));
            }
          return Ie(t), t.length > 0;
        }
        function Ge(e) {
          j.blockers.delete(e), te.delete(e);
        }
        function nt(e, t) {
          let r = j.blockers.get(e) || he;
          d(
            ("unblocked" === r.state && "blocked" === t.state) ||
              ("blocked" === r.state && "blocked" === t.state) ||
              ("blocked" === r.state && "proceeding" === t.state) ||
              ("blocked" === r.state && "unblocked" === t.state) ||
              ("proceeding" === r.state && "unblocked" === t.state),
            "Invalid blocker state transition: " + r.state + " -> " + t.state
          );
          let n = new Map(j.blockers);
          n.set(e, t), re({ blockers: n });
        }
        function at(e) {
          let { currentLocation: t, nextLocation: r, historyAction: n } = e;
          if (0 === te.size) return;
          te.size > 1 && h(!1, "A router only supports one blocker at a time");
          let a = Array.from(te.entries()),
            [o, i] = a[a.length - 1],
            s = j.blockers.get(o);
          return s && "proceeding" === s.state
            ? void 0
            : i({ currentLocation: t, nextLocation: r, historyAction: n })
            ? o
            : void 0;
        }
        function ot(e) {
          let t = Ne(404, { pathname: e }),
            r = s || f,
            { matches: n, route: a } = Fe(r);
          return it(), { notFoundMatches: n, route: a, error: t };
        }
        function it(e) {
          let t = [];
          return (
            ee.forEach((r, n) => {
              (e && !e(n)) || (r.cancel(), t.push(n), ee.delete(n));
            }),
            t
          );
        }
        function st(e, t) {
          return (
            (L &&
              L(
                e,
                t.map((e) => R(e, j.loaderData))
              )) ||
            e.key
          );
        }
        function lt(e, t) {
          if (P) {
            let r = st(e, t),
              n = P[r];
            if ("number" == typeof n) return n;
          }
          return null;
        }
        function ut(e, t, r) {
          if (y) {
            if (!e) return { active: !0, matches: E(t, r, m, !0) || [] };
            if (Object.keys(e[0].params).length > 0)
              return { active: !0, matches: E(t, r, m, !0) };
          }
          return { active: !1, matches: null };
        }
        async function ct(e, t, r) {
          if (!y) return { type: "success", matches: e };
          let n = e;
          for (;;) {
            let e = null == s,
              a = s || f,
              i = c;
            try {
              await y({
                path: t,
                matches: n,
                patch: (e, t) => {
                  r.aborted || xe(e, t, a, i, o);
                },
              });
            } catch (e) {
              return { type: "error", error: e, partialMatches: n };
            } finally {
              e && !r.aborted && (f = [...f]);
            }
            if (r.aborted) return { type: "aborted" };
            let l = S(a, t, m);
            if (l) return { type: "success", matches: l };
            let u = E(a, t, m, !0);
            if (
              !u ||
              (n.length === u.length &&
                n.every((e, t) => e.route.id === u[t].route.id))
            )
              return { type: "success", matches: null };
            n = u;
          }
        }
        return (
          (u = {
            get basename() {
              return m;
            },
            get future() {
              return x;
            },
            get state() {
              return j;
            },
            get routes() {
              return f;
            },
            get window() {
              return t;
            },
            initialize: function () {
              if (
                ((D = e.history.listen((t) => {
                  let { action: r, location: n, delta: a } = t;
                  if (U) return U(), void (U = void 0);
                  h(
                    0 === te.size || null != a,
                    "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
                  );
                  let o = at({
                    currentLocation: j.location,
                    nextLocation: n,
                    historyAction: r,
                  });
                  if (o && null != a) {
                    let t = new Promise((e) => {
                      U = e;
                    });
                    return (
                      e.history.go(-1 * a),
                      void nt(o, {
                        state: "blocked",
                        location: n,
                        proceed() {
                          nt(o, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: n,
                          }),
                            t.then(() => e.history.go(a));
                        },
                        reset() {
                          let e = new Map(j.blockers);
                          e.set(o, he), re({ blockers: e });
                        },
                      })
                    );
                  }
                  return oe(r, n);
                })),
                r)
              ) {
                !(function (e, t) {
                  try {
                    let r = e.sessionStorage.getItem(me);
                    if (r) {
                      let e = JSON.parse(r);
                      for (let [r, n] of Object.entries(e || {}))
                        n && Array.isArray(n) && t.set(r, new Set(n || []));
                    }
                  } catch (e) {}
                })(t, I);
                let e = () =>
                  (function (e, t) {
                    if (t.size > 0) {
                      let r = {};
                      for (let [e, n] of t) r[e] = [...n];
                      try {
                        e.sessionStorage.setItem(me, JSON.stringify(r));
                      } catch (e) {
                        h(
                          !1,
                          "Failed to save applied view transitions in sessionStorage (" +
                            e +
                            ")."
                        );
                      }
                    }
                  })(t, I);
                t.addEventListener("pagehide", e),
                  (z = () => t.removeEventListener("pagehide", e));
              }
              return (
                j.initialized ||
                  oe(n.Pop, j.location, { initialHydration: !0 }),
                u
              );
            },
            subscribe: function (e) {
              return C.add(e), () => C.delete(e);
            },
            enableScrollRestoration: function (e, t, r) {
              if (
                ((P = e), (k = t), (L = r || null), !T && j.navigation === ce)
              ) {
                T = !0;
                let e = lt(j.location, j.matches);
                null != e && re({ restoreScrollPosition: e });
              }
              return () => {
                (P = null), (k = null), (L = null);
              };
            },
            navigate: async function t(r, a) {
              if ("number" == typeof r) return void e.history.go(r);
              let o = ye(
                  j.location,
                  j.matches,
                  m,
                  x.v7_prependBasename,
                  r,
                  x.v7_relativeSplatPath,
                  null == a ? void 0 : a.fromRouteId,
                  null == a ? void 0 : a.relative
                ),
                {
                  path: s,
                  submission: l,
                  error: u,
                } = ge(x.v7_normalizeFormMethod, !1, o, a),
                c = j.location,
                d = p(j.location, s, a && a.state);
              d = i({}, d, e.history.encodeLocation(d));
              let h = a && null != a.replace ? a.replace : void 0,
                f = n.Push;
              !0 === h
                ? (f = n.Replace)
                : !1 === h ||
                  (null != l &&
                    Je(l.formMethod) &&
                    l.formAction === j.location.pathname + j.location.search &&
                    (f = n.Replace));
              let v =
                  a && "preventScrollReset" in a
                    ? !0 === a.preventScrollReset
                    : void 0,
                y = !0 === (a && a.flushSync),
                g = at({
                  currentLocation: c,
                  nextLocation: d,
                  historyAction: f,
                });
              if (!g)
                return await oe(f, d, {
                  submission: l,
                  pendingError: u,
                  preventScrollReset: v,
                  replace: a && a.replace,
                  enableViewTransition: a && a.viewTransition,
                  flushSync: y,
                });
              nt(g, {
                state: "blocked",
                location: d,
                proceed() {
                  nt(g, {
                    state: "proceeding",
                    proceed: void 0,
                    reset: void 0,
                    location: d,
                  }),
                    t(r, a);
                },
                reset() {
                  let e = new Map(j.blockers);
                  e.set(g, he), re({ blockers: e });
                },
              });
            },
            fetch: function (t, r, n, o) {
              if (a)
                throw new Error(
                  "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
                );
              Ae(t);
              let i = !0 === (o && o.flushSync),
                l = s || f,
                u = ye(
                  j.location,
                  j.matches,
                  m,
                  x.v7_prependBasename,
                  n,
                  x.v7_relativeSplatPath,
                  r,
                  null == o ? void 0 : o.relative
                ),
                c = S(l, u, m),
                h = ut(c, l, u);
              if ((h.active && h.matches && (c = h.matches), !c))
                return void Re(t, r, Ne(404, { pathname: u }), {
                  flushSync: i,
                });
              let {
                path: p,
                submission: v,
                error: y,
              } = ge(x.v7_normalizeFormMethod, !0, u, o);
              if (y) return void Re(t, r, y, { flushSync: i });
              let g = Qe(c, p),
                b = !0 === (o && o.preventScrollReset);
              v && Je(v.formMethod)
                ? (async function (t, r, n, a, o, i, l, u, c) {
                    function h(e) {
                      if (!e.route.action && !e.route.lazy) {
                        let e = Ne(405, {
                          method: c.formMethod,
                          pathname: n,
                          routeId: r,
                        });
                        return Re(t, r, e, { flushSync: l }), !0;
                      }
                      return !1;
                    }
                    if ((be(), G.delete(t), !i && h(a))) return;
                    let p = j.fetchers.get(t);
                    Ee(
                      t,
                      (function (e, t) {
                        return {
                          state: "submitting",
                          formMethod: e.formMethod,
                          formAction: e.formAction,
                          formEncType: e.formEncType,
                          formData: e.formData,
                          json: e.json,
                          text: e.text,
                          data: t ? t.data : void 0,
                        };
                      })(c, p),
                      { flushSync: l }
                    );
                    let v = new AbortController(),
                      y = Te(e.history, n, v.signal, c);
                    if (i) {
                      let e = await ct(o, n, y.signal);
                      if ("aborted" === e.type) return;
                      if ("error" === e.type)
                        return void Re(t, r, e.error, { flushSync: l });
                      if (!e.matches)
                        return void Re(t, r, Ne(404, { pathname: n }), {
                          flushSync: l,
                        });
                      if (h((a = Qe((o = e.matches), n)))) return;
                    }
                    V.set(t, v);
                    let g = J,
                      b = (await le("action", 0, y, [a], o, t))[a.route.id];
                    if (y.signal.aborted)
                      return void (V.get(t) === v && V.delete(t));
                    if (x.v7_fetcherPersist && Z.has(t)) {
                      if (Ke(b) || We(b)) return void Ee(t, rt(void 0));
                    } else {
                      if (Ke(b))
                        return (
                          V.delete(t),
                          Y > g
                            ? void Ee(t, rt(void 0))
                            : (X.add(t),
                              Ee(t, tt(c)),
                              se(y, b, !1, {
                                fetcherSubmission: c,
                                preventScrollReset: u,
                              }))
                        );
                      if (We(b)) return void Re(t, r, b.error);
                    }
                    if (He(b)) throw Ne(400, { type: "defer-action" });
                    let w = j.navigation.location || j.location,
                      E = Te(e.history, w, v.signal),
                      R = s || f,
                      D =
                        "idle" !== j.navigation.state
                          ? S(R, j.navigation.location, m)
                          : j.matches;
                    d(D, "Didn't find any matches after fetcher action");
                    let C = ++J;
                    q.set(t, C);
                    let P = tt(c, b.data);
                    j.fetchers.set(t, P);
                    let [L, k] = we(
                      e.history,
                      j,
                      D,
                      c,
                      w,
                      !1,
                      x.v7_skipActionErrorRevalidation,
                      W,
                      K,
                      $,
                      Z,
                      G,
                      X,
                      R,
                      m,
                      [a.route.id, b]
                    );
                    k
                      .filter((e) => e.key !== t)
                      .forEach((e) => {
                        let t = e.key,
                          r = j.fetchers.get(t),
                          n = tt(void 0, r ? r.data : void 0);
                        j.fetchers.set(t, n),
                          Ae(t),
                          e.controller && V.set(t, e.controller);
                      }),
                      re({ fetchers: new Map(j.fetchers) });
                    let T = () => k.forEach((e) => Ae(e.key));
                    v.signal.addEventListener("abort", T);
                    let { loaderResults: _, fetcherResults: A } = await ve(
                      j,
                      D,
                      L,
                      k,
                      E
                    );
                    if (v.signal.aborted) return;
                    v.signal.removeEventListener("abort", T),
                      q.delete(t),
                      V.delete(t),
                      k.forEach((e) => V.delete(e.key));
                    let U = Be(_);
                    if (U)
                      return se(E, U.result, !1, { preventScrollReset: u });
                    if (((U = Be(A)), U))
                      return (
                        X.add(U.key),
                        se(E, U.result, !1, { preventScrollReset: u })
                      );
                    let { loaderData: F, errors: N } = Me(
                      j,
                      D,
                      _,
                      void 0,
                      k,
                      A,
                      ee
                    );
                    if (j.fetchers.has(t)) {
                      let e = rt(b.data);
                      j.fetchers.set(t, e);
                    }
                    Ve(C),
                      "loading" === j.navigation.state && C > Y
                        ? (d(O, "Expected pending action"),
                          M && M.abort(),
                          ae(j.navigation.location, {
                            matches: D,
                            loaderData: F,
                            errors: N,
                            fetchers: new Map(j.fetchers),
                          }))
                        : (re({
                            errors: N,
                            loaderData: Ue(j.loaderData, F, D, N),
                            fetchers: new Map(j.fetchers),
                          }),
                          (W = !1));
                  })(t, r, p, g, c, h.active, i, b, v)
                : (G.set(t, { routeId: r, path: p }),
                  (async function (t, r, n, a, o, i, s, l, u) {
                    let c = j.fetchers.get(t);
                    Ee(t, tt(u, c ? c.data : void 0), { flushSync: s });
                    let h = new AbortController(),
                      f = Te(e.history, n, h.signal);
                    if (i) {
                      let e = await ct(o, n, f.signal);
                      if ("aborted" === e.type) return;
                      if ("error" === e.type)
                        return void Re(t, r, e.error, { flushSync: s });
                      if (!e.matches)
                        return void Re(t, r, Ne(404, { pathname: n }), {
                          flushSync: s,
                        });
                      a = Qe((o = e.matches), n);
                    }
                    V.set(t, h);
                    let p = J,
                      m = (await le("loader", 0, f, [a], o, t))[a.route.id];
                    if (
                      (He(m) && (m = (await Xe(m, f.signal, !0)) || m),
                      V.get(t) === h && V.delete(t),
                      !f.signal.aborted)
                    ) {
                      if (!Z.has(t))
                        return Ke(m)
                          ? Y > p
                            ? void Ee(t, rt(void 0))
                            : (X.add(t),
                              void (await se(f, m, !1, {
                                preventScrollReset: l,
                              })))
                          : void (We(m)
                              ? Re(t, r, m.error)
                              : (d(!He(m), "Unhandled fetcher deferred data"),
                                Ee(t, rt(m.data))));
                      Ee(t, rt(void 0));
                    }
                  })(t, r, p, g, c, h.active, i, b, v));
            },
            revalidate: function () {
              be(),
                re({ revalidation: "loading" }),
                "submitting" !== j.navigation.state &&
                  ("idle" !== j.navigation.state
                    ? oe(O || j.historyAction, j.navigation.location, {
                        overrideNavigation: j.navigation,
                        enableViewTransition: !0 === B,
                      })
                    : oe(j.historyAction, j.location, {
                        startUninterruptedRevalidation: !0,
                      }));
            },
            createHref: (t) => e.history.createHref(t),
            encodeLocation: (t) => e.history.encodeLocation(t),
            getFetcher: De,
            deleteFetcher: function (e) {
              let t = (Q.get(e) || 0) - 1;
              t <= 0
                ? (Q.delete(e), Z.add(e), x.v7_fetcherPersist || _e(e))
                : Q.set(e, t),
                re({ fetchers: new Map(j.fetchers) });
            },
            dispose: function () {
              D && D(),
                z && z(),
                C.clear(),
                M && M.abort(),
                j.fetchers.forEach((e, t) => _e(t)),
                j.blockers.forEach((e, t) => Ge(t));
            },
            getBlocker: function (e, t) {
              let r = j.blockers.get(e) || he;
              return te.get(e) !== t && te.set(e, t), r;
            },
            deleteBlocker: Ge,
            patchRoutes: function (e, t) {
              let r = null == s;
              xe(e, t, s || f, c, o), r && ((f = [...f]), re({}));
            },
            _internalFetchControllers: V,
            _internalActiveDeferreds: ee,
            _internalSetRoutes: function (e) {
              (c = {}), (s = w(e, o, void 0, c));
            },
          }),
          u
        );
      }
      function ye(e, t, r, n, a, o, i, s) {
        let l, u;
        if (i) {
          l = [];
          for (let e of t)
            if ((l.push(e), e.route.id === i)) {
              u = e;
              break;
            }
        } else (l = t), (u = t[t.length - 1]);
        let c = W(
          a || ".",
          H(l, o),
          N(e.pathname, r) || e.pathname,
          "path" === s
        );
        if (
          (null == a && ((c.search = e.search), (c.hash = e.hash)),
          (null == a || "" === a || "." === a) && u)
        ) {
          let e = Ge(c.search);
          if (u.route.index && !e)
            c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
          else if (!u.route.index && e) {
            let e = new URLSearchParams(c.search),
              t = e.getAll("index");
            e.delete("index"),
              t.filter((e) => e).forEach((t) => e.append("index", t));
            let r = e.toString();
            c.search = r ? "?" + r : "";
          }
        }
        return (
          n &&
            "/" !== r &&
            (c.pathname = "/" === c.pathname ? r : K([r, c.pathname])),
          m(c)
        );
      }
      function ge(e, t, r, n) {
        if (
          !n ||
          !(function (e) {
            return (
              null != e &&
              (("formData" in e && null != e.formData) ||
                ("body" in e && void 0 !== e.body))
            );
          })(n)
        )
          return { path: r };
        if (n.formMethod && ((a = n.formMethod), !se.has(a.toLowerCase())))
          return { path: r, error: Ne(405, { method: n.formMethod }) };
        var a;
        let o,
          i,
          s = () => ({ path: r, error: Ne(400, { type: "invalid-body" }) }),
          l = n.formMethod || "get",
          u = e ? l.toUpperCase() : l.toLowerCase(),
          c = Ie(r);
        if (void 0 !== n.body) {
          if ("text/plain" === n.formEncType) {
            if (!Je(u)) return s();
            let e =
              "string" == typeof n.body
                ? n.body
                : n.body instanceof FormData ||
                  n.body instanceof URLSearchParams
                ? Array.from(n.body.entries()).reduce((e, t) => {
                    let [r, n] = t;
                    return "" + e + r + "=" + n + "\n";
                  }, "")
                : String(n.body);
            return {
              path: r,
              submission: {
                formMethod: u,
                formAction: c,
                formEncType: n.formEncType,
                formData: void 0,
                json: void 0,
                text: e,
              },
            };
          }
          if ("application/json" === n.formEncType) {
            if (!Je(u)) return s();
            try {
              let e = "string" == typeof n.body ? JSON.parse(n.body) : n.body;
              return {
                path: r,
                submission: {
                  formMethod: u,
                  formAction: c,
                  formEncType: n.formEncType,
                  formData: void 0,
                  json: e,
                  text: void 0,
                },
              };
            } catch (e) {
              return s();
            }
          }
        }
        if (
          (d(
            "function" == typeof FormData,
            "FormData is not available in this environment"
          ),
          n.formData)
        )
          (o = _e(n.formData)), (i = n.formData);
        else if (n.body instanceof FormData) (o = _e(n.body)), (i = n.body);
        else if (n.body instanceof URLSearchParams) (o = n.body), (i = Ae(o));
        else if (null == n.body)
          (o = new URLSearchParams()), (i = new FormData());
        else
          try {
            (o = new URLSearchParams(n.body)), (i = Ae(o));
          } catch (e) {
            return s();
          }
        let h = {
          formMethod: u,
          formAction: c,
          formEncType:
            (n && n.formEncType) || "application/x-www-form-urlencoded",
          formData: i,
          json: void 0,
          text: void 0,
        };
        if (Je(h.formMethod)) return { path: r, submission: h };
        let f = v(r);
        return (
          t && f.search && Ge(f.search) && o.append("index", ""),
          (f.search = "?" + o),
          { path: m(f), submission: h }
        );
      }
      function be(e, t, r) {
        void 0 === r && (r = !1);
        let n = e.findIndex((e) => e.route.id === t);
        return n >= 0 ? e.slice(0, r ? n + 1 : n) : e;
      }
      function we(e, t, r, n, a, o, s, l, u, c, d, h, f, p, m, v) {
        let y = v ? (We(v[1]) ? v[1].error : v[1].data) : void 0,
          g = e.createURL(t.location),
          b = e.createURL(a),
          w = r;
        o && t.errors
          ? (w = be(r, Object.keys(t.errors)[0], !0))
          : v && We(v[1]) && (w = be(r, v[0]));
        let E = v ? v[1].statusCode : void 0,
          R = s && E && E >= 400,
          x = w.filter((e, r) => {
            let { route: a } = e;
            if (a.lazy) return !0;
            if (null == a.loader) return !1;
            if (o) return Se(a, t.loaderData, t.errors);
            if (
              (function (e, t, r) {
                let n = !t || r.route.id !== t.route.id,
                  a = void 0 === e[r.route.id];
                return n || a;
              })(t.loaderData, t.matches[r], e) ||
              u.some((t) => t === e.route.id)
            )
              return !0;
            let s = t.matches[r],
              c = e;
            return Re(
              e,
              i(
                {
                  currentUrl: g,
                  currentParams: s.params,
                  nextUrl: b,
                  nextParams: c.params,
                },
                n,
                {
                  actionResult: y,
                  actionStatus: E,
                  defaultShouldRevalidate:
                    !R &&
                    (l ||
                      g.pathname + g.search === b.pathname + b.search ||
                      g.search !== b.search ||
                      Ee(s, c)),
                }
              )
            );
          }),
          D = [];
        return (
          h.forEach((e, a) => {
            if (o || !r.some((t) => t.route.id === e.routeId) || d.has(a))
              return;
            let s = S(p, e.path, m);
            if (!s)
              return void D.push({
                key: a,
                routeId: e.routeId,
                path: e.path,
                matches: null,
                match: null,
                controller: null,
              });
            let u = t.fetchers.get(a),
              h = Qe(s, e.path),
              v = !1;
            f.has(a)
              ? (v = !1)
              : c.has(a)
              ? (c.delete(a), (v = !0))
              : (v =
                  u && "idle" !== u.state && void 0 === u.data
                    ? l
                    : Re(
                        h,
                        i(
                          {
                            currentUrl: g,
                            currentParams:
                              t.matches[t.matches.length - 1].params,
                            nextUrl: b,
                            nextParams: r[r.length - 1].params,
                          },
                          n,
                          {
                            actionResult: y,
                            actionStatus: E,
                            defaultShouldRevalidate: !R && l,
                          }
                        )
                      )),
              v &&
                D.push({
                  key: a,
                  routeId: e.routeId,
                  path: e.path,
                  matches: s,
                  match: h,
                  controller: new AbortController(),
                });
          }),
          [x, D]
        );
      }
      function Se(e, t, r) {
        if (e.lazy) return !0;
        if (!e.loader) return !1;
        let n = null != t && void 0 !== t[e.id],
          a = null != r && void 0 !== r[e.id];
        return (
          !(!n && a) &&
          (("function" == typeof e.loader && !0 === e.loader.hydrate) ||
            (!n && !a))
        );
      }
      function Ee(e, t) {
        let r = e.route.path;
        return (
          e.pathname !== t.pathname ||
          (null != r && r.endsWith("*") && e.params["*"] !== t.params["*"])
        );
      }
      function Re(e, t) {
        if (e.route.shouldRevalidate) {
          let r = e.route.shouldRevalidate(t);
          if ("boolean" == typeof r) return r;
        }
        return t.defaultShouldRevalidate;
      }
      function xe(e, t, r, n, a) {
        var o;
        let i;
        if (e) {
          let t = n[e];
          d(t, "No route found to patch children into: routeId = " + e),
            t.children || (t.children = []),
            (i = t.children);
        } else i = r;
        let s = w(
          t.filter((e) => !i.some((t) => De(e, t))),
          a,
          [
            e || "_",
            "patch",
            String((null == (o = i) ? void 0 : o.length) || "0"),
          ],
          n
        );
        i.push(...s);
      }
      function De(e, t) {
        return (
          ("id" in e && "id" in t && e.id === t.id) ||
          (e.index === t.index &&
            e.path === t.path &&
            e.caseSensitive === t.caseSensitive &&
            (!(
              (e.children && 0 !== e.children.length) ||
              (t.children && 0 !== t.children.length)
            ) ||
              e.children.every((e, r) => {
                var n;
                return null == (n = t.children)
                  ? void 0
                  : n.some((t) => De(e, t));
              })))
        );
      }
      async function Ce(e) {
        let { matches: t } = e,
          r = t.filter((e) => e.shouldLoad);
        return (await Promise.all(r.map((e) => e.resolve()))).reduce(
          (e, t, n) => Object.assign(e, { [r[n].route.id]: t }),
          {}
        );
      }
      async function Pe(e) {
        let { result: t, type: r } = e;
        if (Ve(t)) {
          let e;
          try {
            let r = t.headers.get("Content-Type");
            e =
              r && /\bapplication\/json\b/.test(r)
                ? null == t.body
                  ? null
                  : await t.json()
                : await t.text();
          } catch (e) {
            return { type: g.error, error: e };
          }
          return r === g.error
            ? {
                type: g.error,
                error: new re(t.status, t.statusText, e),
                statusCode: t.status,
                headers: t.headers,
              }
            : {
                type: g.data,
                data: e,
                statusCode: t.status,
                headers: t.headers,
              };
        }
        if (r === g.error) {
          if ($e(t)) {
            var n, a;
            if (t.data instanceof Error)
              return {
                type: g.error,
                error: t.data,
                statusCode: null == (a = t.init) ? void 0 : a.status,
              };
            t = new re(
              (null == (n = t.init) ? void 0 : n.status) || 500,
              void 0,
              t.data
            );
          }
          return {
            type: g.error,
            error: t,
            statusCode: ne(t) ? t.status : void 0,
          };
        }
        var o, i, s, l;
        return (function (e) {
          let t = e;
          return (
            t &&
            "object" == typeof t &&
            "object" == typeof t.data &&
            "function" == typeof t.subscribe &&
            "function" == typeof t.cancel &&
            "function" == typeof t.resolveData
          );
        })(t)
          ? {
              type: g.deferred,
              deferredData: t,
              statusCode: null == (o = t.init) ? void 0 : o.status,
              headers:
                (null == (i = t.init) ? void 0 : i.headers) &&
                new Headers(t.init.headers),
            }
          : $e(t)
          ? {
              type: g.data,
              data: t.data,
              statusCode: null == (s = t.init) ? void 0 : s.status,
              headers:
                null != (l = t.init) && l.headers
                  ? new Headers(t.init.headers)
                  : void 0,
            }
          : { type: g.data, data: t };
      }
      function Le(e, t, r, n, a, o) {
        let i = e.headers.get("Location");
        if (
          (d(
            i,
            "Redirects returned/thrown from loaders/actions must have a Location header"
          ),
          !fe.test(i))
        ) {
          let s = n.slice(0, n.findIndex((e) => e.route.id === r) + 1);
          (i = ye(new URL(t.url), s, a, !0, i, o)),
            e.headers.set("Location", i);
        }
        return e;
      }
      function ke(e, t, r) {
        if (fe.test(e)) {
          let n = e,
            a = n.startsWith("//") ? new URL(t.protocol + n) : new URL(n),
            o = null != N(a.pathname, r);
          if (a.origin === t.origin && o) return a.pathname + a.search + a.hash;
        }
        return e;
      }
      function Te(e, t, r, n) {
        let a = e.createURL(Ie(t)).toString(),
          o = { signal: r };
        if (n && Je(n.formMethod)) {
          let { formMethod: e, formEncType: t } = n;
          (o.method = e.toUpperCase()),
            "application/json" === t
              ? ((o.headers = new Headers({ "Content-Type": t })),
                (o.body = JSON.stringify(n.json)))
              : "text/plain" === t
              ? (o.body = n.text)
              : "application/x-www-form-urlencoded" === t && n.formData
              ? (o.body = _e(n.formData))
              : (o.body = n.formData);
        }
        return new Request(a, o);
      }
      function _e(e) {
        let t = new URLSearchParams();
        for (let [r, n] of e.entries())
          t.append(r, "string" == typeof n ? n : n.name);
        return t;
      }
      function Ae(e) {
        let t = new FormData();
        for (let [r, n] of e.entries()) t.append(r, n);
        return t;
      }
      function Me(e, t, r, n, a, o, s) {
        let { loaderData: l, errors: u } = (function (e, t, r, n, a) {
          let o,
            i = {},
            s = null,
            l = !1,
            u = {},
            c = r && We(r[1]) ? r[1].error : void 0;
          return (
            e.forEach((r) => {
              if (!(r.route.id in t)) return;
              let h = r.route.id,
                f = t[h];
              if (
                (d(
                  !Ke(f),
                  "Cannot handle redirect results in processLoaderData"
                ),
                We(f))
              ) {
                let t = f.error;
                if ((void 0 !== c && ((t = c), (c = void 0)), (s = s || {}), a))
                  s[h] = t;
                else {
                  let r = Oe(e, h);
                  null == s[r.route.id] && (s[r.route.id] = t);
                }
                (i[h] = void 0),
                  l || ((l = !0), (o = ne(f.error) ? f.error.status : 500)),
                  f.headers && (u[h] = f.headers);
              } else
                He(f)
                  ? (n.set(h, f.deferredData),
                    (i[h] = f.deferredData.data),
                    null == f.statusCode ||
                      200 === f.statusCode ||
                      l ||
                      (o = f.statusCode),
                    f.headers && (u[h] = f.headers))
                  : ((i[h] = f.data),
                    f.statusCode &&
                      200 !== f.statusCode &&
                      !l &&
                      (o = f.statusCode),
                    f.headers && (u[h] = f.headers));
            }),
            void 0 !== c && r && ((s = { [r[0]]: c }), (i[r[0]] = void 0)),
            { loaderData: i, errors: s, statusCode: o || 200, loaderHeaders: u }
          );
        })(t, r, n, s, !1);
        return (
          a.forEach((t) => {
            let { key: r, match: n, controller: a } = t,
              s = o[r];
            if (
              (d(s, "Did not find corresponding fetcher result"),
              !a || !a.signal.aborted)
            )
              if (We(s)) {
                let t = Oe(e.matches, null == n ? void 0 : n.route.id);
                (u && u[t.route.id]) ||
                  (u = i({}, u, { [t.route.id]: s.error })),
                  e.fetchers.delete(r);
              } else if (Ke(s))
                d(!1, "Unhandled fetcher revalidation redirect");
              else if (He(s)) d(!1, "Unhandled fetcher deferred data");
              else {
                let t = rt(s.data);
                e.fetchers.set(r, t);
              }
          }),
          { loaderData: l, errors: u }
        );
      }
      function Ue(e, t, r, n) {
        let a = i({}, t);
        for (let o of r) {
          let r = o.route.id;
          if (
            (t.hasOwnProperty(r)
              ? void 0 !== t[r] && (a[r] = t[r])
              : void 0 !== e[r] && o.route.loader && (a[r] = e[r]),
            n && n.hasOwnProperty(r))
          )
            break;
        }
        return a;
      }
      function je(e) {
        return e
          ? We(e[1])
            ? { actionData: {} }
            : { actionData: { [e[0]]: e[1].data } }
          : {};
      }
      function Oe(e, t) {
        return (
          (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e])
            .reverse()
            .find((e) => !0 === e.route.hasErrorBoundary) || e[0]
        );
      }
      function Fe(e) {
        let t =
          1 === e.length
            ? e[0]
            : e.find((e) => e.index || !e.path || "/" === e.path) || {
                id: "__shim-error-route__",
              };
        return {
          matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
          route: t,
        };
      }
      function Ne(e, t) {
        let {
            pathname: r,
            routeId: n,
            method: a,
            type: o,
            message: i,
          } = void 0 === t ? {} : t,
          s = "Unknown Server Error",
          l = "Unknown @remix-run/router error";
        return (
          400 === e
            ? ((s = "Bad Request"),
              a && r && n
                ? (l =
                    "You made a " +
                    a +
                    ' request to "' +
                    r +
                    '" but did not provide a `loader` for route "' +
                    n +
                    '", so there is no way to handle the request.')
                : "defer-action" === o
                ? (l = "defer() is not supported in actions")
                : "invalid-body" === o &&
                  (l = "Unable to encode submission body"))
            : 403 === e
            ? ((s = "Forbidden"),
              (l = 'Route "' + n + '" does not match URL "' + r + '"'))
            : 404 === e
            ? ((s = "Not Found"), (l = 'No route matches URL "' + r + '"'))
            : 405 === e &&
              ((s = "Method Not Allowed"),
              a && r && n
                ? (l =
                    "You made a " +
                    a.toUpperCase() +
                    ' request to "' +
                    r +
                    '" but did not provide an `action` for route "' +
                    n +
                    '", so there is no way to handle the request.')
                : a &&
                  (l = 'Invalid request method "' + a.toUpperCase() + '"')),
          new re(e || 500, s, new Error(l), !0)
        );
      }
      function Be(e) {
        let t = Object.entries(e);
        for (let e = t.length - 1; e >= 0; e--) {
          let [r, n] = t[e];
          if (Ke(n)) return { key: r, result: n };
        }
      }
      function Ie(e) {
        return m(i({}, "string" == typeof e ? v(e) : e, { hash: "" }));
      }
      function ze(e) {
        return Ve(e.result) && le.has(e.result.status);
      }
      function He(e) {
        return e.type === g.deferred;
      }
      function We(e) {
        return e.type === g.error;
      }
      function Ke(e) {
        return (e && e.type) === g.redirect;
      }
      function $e(e) {
        return (
          "object" == typeof e &&
          null != e &&
          "type" in e &&
          "data" in e &&
          "init" in e &&
          "DataWithResponseInit" === e.type
        );
      }
      function Ve(e) {
        return (
          null != e &&
          "number" == typeof e.status &&
          "string" == typeof e.statusText &&
          "object" == typeof e.headers &&
          void 0 !== e.body
        );
      }
      function Je(e) {
        return oe.has(e.toLowerCase());
      }
      async function Ye(e, t, r, n, a) {
        let o = Object.entries(t);
        for (let i = 0; i < o.length; i++) {
          let [s, l] = o[i],
            u = e.find((e) => (null == e ? void 0 : e.route.id) === s);
          if (!u) continue;
          let c = n.find((e) => e.route.id === u.route.id),
            d = null != c && !Ee(c, u) && void 0 !== (a && a[u.route.id]);
          He(l) &&
            d &&
            (await Xe(l, r, !1).then((e) => {
              e && (t[s] = e);
            }));
        }
      }
      async function qe(e, t, r) {
        for (let n = 0; n < r.length; n++) {
          let { key: a, routeId: o, controller: i } = r[n],
            s = t[a];
          e.find((e) => (null == e ? void 0 : e.route.id) === o) &&
            He(s) &&
            (d(
              i,
              "Expected an AbortController for revalidating fetcher deferred result"
            ),
            await Xe(s, i.signal, !0).then((e) => {
              e && (t[a] = e);
            }));
        }
      }
      async function Xe(e, t, r) {
        if (
          (void 0 === r && (r = !1), !(await e.deferredData.resolveData(t)))
        ) {
          if (r)
            try {
              return { type: g.data, data: e.deferredData.unwrappedData };
            } catch (e) {
              return { type: g.error, error: e };
            }
          return { type: g.data, data: e.deferredData.data };
        }
      }
      function Ge(e) {
        return new URLSearchParams(e).getAll("index").some((e) => "" === e);
      }
      function Qe(e, t) {
        let r = "string" == typeof t ? v(t).search : t.search;
        if (e[e.length - 1].route.index && Ge(r || "")) return e[e.length - 1];
        let n = z(e);
        return n[n.length - 1];
      }
      function Ze(e) {
        let {
          formMethod: t,
          formAction: r,
          formEncType: n,
          text: a,
          formData: o,
          json: i,
        } = e;
        if (t && r && n)
          return null != a
            ? {
                formMethod: t,
                formAction: r,
                formEncType: n,
                formData: void 0,
                json: void 0,
                text: a,
              }
            : null != o
            ? {
                formMethod: t,
                formAction: r,
                formEncType: n,
                formData: o,
                json: void 0,
                text: void 0,
              }
            : void 0 !== i
            ? {
                formMethod: t,
                formAction: r,
                formEncType: n,
                formData: void 0,
                json: i,
                text: void 0,
              }
            : void 0;
      }
      function et(e, t) {
        return t
          ? {
              state: "loading",
              location: e,
              formMethod: t.formMethod,
              formAction: t.formAction,
              formEncType: t.formEncType,
              formData: t.formData,
              json: t.json,
              text: t.text,
            }
          : {
              state: "loading",
              location: e,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              json: void 0,
              text: void 0,
            };
      }
      function tt(e, t) {
        return e
          ? {
              state: "loading",
              formMethod: e.formMethod,
              formAction: e.formAction,
              formEncType: e.formEncType,
              formData: e.formData,
              json: e.json,
              text: e.text,
              data: t,
            }
          : {
              state: "loading",
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              json: void 0,
              text: void 0,
              data: t,
            };
      }
      function rt(e) {
        return {
          state: "idle",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
          data: e,
        };
      }
      function nt() {
        return (
          (nt = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          nt.apply(this, arguments)
        );
      }
      Symbol("deferred");
      const at = a.createContext(null),
        ot = a.createContext(null),
        it = a.createContext(null),
        st = a.createContext(null),
        lt = a.createContext(null),
        ut = a.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
        ct = a.createContext(null);
      function dt(e, t) {
        let { relative: r } = void 0 === t ? {} : t;
        ht() || d(!1);
        let { basename: n, navigator: o } = a.useContext(st),
          { hash: i, pathname: s, search: l } = Et(e, { relative: r }),
          u = s;
        return (
          "/" !== n && (u = "/" === s ? n : K([n, s])),
          o.createHref({ pathname: u, search: l, hash: i })
        );
      }
      function ht() {
        return null != a.useContext(lt);
      }
      function ft() {
        return ht() || d(!1), a.useContext(lt).location;
      }
      function pt() {
        return a.useContext(lt).navigationType;
      }
      function mt(e) {
        ht() || d(!1);
        let { pathname: t } = ft();
        return a.useMemo(() => O(e, F(t)), [t, e]);
      }
      function vt(e) {
        a.useContext(st).static || a.useLayoutEffect(e);
      }
      function yt() {
        let { isDataRoute: e } = a.useContext(ut);
        return e
          ? (function () {
              let { router: e } = At(Tt.UseNavigateStable),
                t = Ut(_t.UseNavigateStable),
                r = a.useRef(!1);
              return (
                vt(() => {
                  r.current = !0;
                }),
                a.useCallback(
                  function (n, a) {
                    void 0 === a && (a = {}),
                      r.current &&
                        ("number" == typeof n
                          ? e.navigate(n)
                          : e.navigate(n, nt({ fromRouteId: t }, a)));
                  },
                  [e, t]
                )
              );
            })()
          : (function () {
              ht() || d(!1);
              let e = a.useContext(at),
                { basename: t, future: r, navigator: n } = a.useContext(st),
                { matches: o } = a.useContext(ut),
                { pathname: i } = ft(),
                s = JSON.stringify(H(o, r.v7_relativeSplatPath)),
                l = a.useRef(!1);
              return (
                vt(() => {
                  l.current = !0;
                }),
                a.useCallback(
                  function (r, a) {
                    if ((void 0 === a && (a = {}), !l.current)) return;
                    if ("number" == typeof r) return void n.go(r);
                    let o = W(r, JSON.parse(s), i, "path" === a.relative);
                    null == e &&
                      "/" !== t &&
                      (o.pathname =
                        "/" === o.pathname ? t : K([t, o.pathname])),
                      (a.replace ? n.replace : n.push)(o, a.state, a);
                  },
                  [t, n, s, i, e]
                )
              );
            })();
      }
      const gt = a.createContext(null);
      function bt() {
        return a.useContext(gt);
      }
      function wt(e) {
        let t = a.useContext(ut).outlet;
        return t ? a.createElement(gt.Provider, { value: e }, t) : t;
      }
      function St() {
        let { matches: e } = a.useContext(ut),
          t = e[e.length - 1];
        return t ? t.params : {};
      }
      function Et(e, t) {
        let { relative: r } = void 0 === t ? {} : t,
          { future: n } = a.useContext(st),
          { matches: o } = a.useContext(ut),
          { pathname: i } = ft(),
          s = JSON.stringify(H(o, n.v7_relativeSplatPath));
        return a.useMemo(
          () => W(e, JSON.parse(s), i, "path" === r),
          [e, s, i, r]
        );
      }
      function Rt(e, t) {
        return xt(e, t);
      }
      function xt(e, t, r, o) {
        ht() || d(!1);
        let { navigator: i } = a.useContext(st),
          { matches: s } = a.useContext(ut),
          l = s[s.length - 1],
          u = l ? l.params : {},
          c = (l && l.pathname, l ? l.pathnameBase : "/");
        l && l.route;
        let h,
          f = ft();
        if (t) {
          var p;
          let e = "string" == typeof t ? v(t) : t;
          "/" === c ||
            (null == (p = e.pathname) ? void 0 : p.startsWith(c)) ||
            d(!1),
            (h = e);
        } else h = f;
        let m = h.pathname || "/",
          y = m;
        if ("/" !== c) {
          let e = c.replace(/^\//, "").split("/");
          y = "/" + m.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let g = S(e, { pathname: y }),
          b = kt(
            g &&
              g.map((e) =>
                Object.assign({}, e, {
                  params: Object.assign({}, u, e.params),
                  pathname: K([
                    c,
                    i.encodeLocation
                      ? i.encodeLocation(e.pathname).pathname
                      : e.pathname,
                  ]),
                  pathnameBase:
                    "/" === e.pathnameBase
                      ? c
                      : K([
                          c,
                          i.encodeLocation
                            ? i.encodeLocation(e.pathnameBase).pathname
                            : e.pathnameBase,
                        ]),
                })
              ),
            s,
            r,
            o
          );
        return t && b
          ? a.createElement(
              lt.Provider,
              {
                value: {
                  location: nt(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    h
                  ),
                  navigationType: n.Pop,
                },
              },
              b
            )
          : b;
      }
      function Dt() {
        let e = Ht(),
          t = ne(e)
            ? e.status + " " + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
          r = e instanceof Error ? e.stack : null,
          n = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
        return a.createElement(
          a.Fragment,
          null,
          a.createElement("h2", null, "Unexpected Application Error!"),
          a.createElement("h3", { style: { fontStyle: "italic" } }, t),
          r ? a.createElement("pre", { style: n }, r) : null,
          null
        );
      }
      const Ct = a.createElement(Dt, null);
      class Pt extends a.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            "React Router caught the following error during render",
            e,
            t
          );
        }
        render() {
          return void 0 !== this.state.error
            ? a.createElement(
                ut.Provider,
                { value: this.props.routeContext },
                a.createElement(ct.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      }
      function Lt(e) {
        let { routeContext: t, match: r, children: n } = e,
          o = a.useContext(at);
        return (
          o &&
            o.static &&
            o.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = r.route.id),
          a.createElement(ut.Provider, { value: t }, n)
        );
      }
      function kt(e, t, r, n) {
        var o;
        if (
          (void 0 === t && (t = []),
          void 0 === r && (r = null),
          void 0 === n && (n = null),
          null == e)
        ) {
          var i;
          if (!r) return null;
          if (r.errors) e = r.matches;
          else {
            if (
              !(
                null != (i = n) &&
                i.v7_partialHydration &&
                0 === t.length &&
                !r.initialized &&
                r.matches.length > 0
              )
            )
              return null;
            e = r.matches;
          }
        }
        let s = e,
          l = null == (o = r) ? void 0 : o.errors;
        if (null != l) {
          let e = s.findIndex(
            (e) => e.route.id && void 0 !== (null == l ? void 0 : l[e.route.id])
          );
          e >= 0 || d(!1), (s = s.slice(0, Math.min(s.length, e + 1)));
        }
        let u = !1,
          c = -1;
        if (r && n && n.v7_partialHydration)
          for (let e = 0; e < s.length; e++) {
            let t = s[e];
            if (
              ((t.route.HydrateFallback || t.route.hydrateFallbackElement) &&
                (c = e),
              t.route.id)
            ) {
              let { loaderData: e, errors: n } = r,
                a =
                  t.route.loader &&
                  void 0 === e[t.route.id] &&
                  (!n || void 0 === n[t.route.id]);
              if (t.route.lazy || a) {
                (u = !0), (s = c >= 0 ? s.slice(0, c + 1) : [s[0]]);
                break;
              }
            }
          }
        return s.reduceRight((e, n, o) => {
          let i,
            d = !1,
            h = null,
            f = null;
          var p;
          r &&
            ((i = l && n.route.id ? l[n.route.id] : void 0),
            (h = n.route.errorElement || Ct),
            u &&
              (c < 0 && 0 === o
                ? (Jt[(p = "route-fallback")] || (Jt[p] = !0),
                  (d = !0),
                  (f = null))
                : c === o &&
                  ((d = !0), (f = n.route.hydrateFallbackElement || null))));
          let m = t.concat(s.slice(0, o + 1)),
            v = () => {
              let t;
              return (
                (t = i
                  ? h
                  : d
                  ? f
                  : n.route.Component
                  ? a.createElement(n.route.Component, null)
                  : n.route.element
                  ? n.route.element
                  : e),
                a.createElement(Lt, {
                  match: n,
                  routeContext: {
                    outlet: e,
                    matches: m,
                    isDataRoute: null != r,
                  },
                  children: t,
                })
              );
            };
          return r && (n.route.ErrorBoundary || n.route.errorElement || 0 === o)
            ? a.createElement(Pt, {
                location: r.location,
                revalidation: r.revalidation,
                component: h,
                error: i,
                children: v(),
                routeContext: { outlet: null, matches: m, isDataRoute: !0 },
              })
            : v();
        }, null);
      }
      var Tt = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
          );
        })(Tt || {}),
        _t = (function (e) {
          return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
          );
        })(_t || {});
      function At(e) {
        let t = a.useContext(at);
        return t || d(!1), t;
      }
      function Mt(e) {
        let t = a.useContext(ot);
        return t || d(!1), t;
      }
      function Ut(e) {
        let t = (function () {
            let e = a.useContext(ut);
            return e || d(!1), e;
          })(),
          r = t.matches[t.matches.length - 1];
        return r.route.id || d(!1), r.route.id;
      }
      function jt() {
        return Ut(_t.UseRouteId);
      }
      function Ot() {
        return Mt(_t.UseNavigation).navigation;
      }
      function Ft() {
        let e = At(Tt.UseRevalidator),
          t = Mt(_t.UseRevalidator);
        return a.useMemo(
          () => ({ revalidate: e.router.revalidate, state: t.revalidation }),
          [e.router.revalidate, t.revalidation]
        );
      }
      function Nt() {
        let { matches: e, loaderData: t } = Mt(_t.UseMatches);
        return a.useMemo(() => e.map((e) => R(e, t)), [e, t]);
      }
      function Bt() {
        let e = Mt(_t.UseLoaderData),
          t = Ut(_t.UseLoaderData);
        if (!e.errors || null == e.errors[t]) return e.loaderData[t];
        console.error(
          "You cannot `useLoaderData` in an errorElement (routeId: " + t + ")"
        );
      }
      function It(e) {
        return Mt(_t.UseRouteLoaderData).loaderData[e];
      }
      function zt() {
        let e = Mt(_t.UseActionData),
          t = Ut(_t.UseLoaderData);
        return e.actionData ? e.actionData[t] : void 0;
      }
      function Ht() {
        var e;
        let t = a.useContext(ct),
          r = Mt(_t.UseRouteError),
          n = Ut(_t.UseRouteError);
        return void 0 !== t ? t : null == (e = r.errors) ? void 0 : e[n];
      }
      function Wt() {
        let e = a.useContext(it);
        return null == e ? void 0 : e._data;
      }
      function Kt() {
        let e = a.useContext(it);
        return null == e ? void 0 : e._error;
      }
      let $t = 0;
      function Vt(e) {
        let { router: t, basename: r } = At(Tt.UseBlocker),
          n = Mt(_t.UseBlocker),
          [o, i] = a.useState(""),
          s = a.useCallback(
            (t) => {
              if ("function" != typeof e) return !!e;
              if ("/" === r) return e(t);
              let { currentLocation: n, nextLocation: a, historyAction: o } = t;
              return e({
                currentLocation: nt({}, n, {
                  pathname: N(n.pathname, r) || n.pathname,
                }),
                nextLocation: nt({}, a, {
                  pathname: N(a.pathname, r) || a.pathname,
                }),
                historyAction: o,
              });
            },
            [r, e]
          );
        return (
          a.useEffect(() => {
            let e = String(++$t);
            return i(e), () => t.deleteBlocker(e);
          }, [t]),
          a.useEffect(() => {
            "" !== o && t.getBlocker(o, s);
          }, [t, o, s]),
          o && n.blockers.has(o) ? n.blockers.get(o) : he
        );
      }
      const Jt = {},
        Yt = {},
        qt = (e, t, r) => {
          var n;
          Yt[
            (n =
              "⚠️ React Router Future Flag Warning: " +
              t +
              ". You can use the `" +
              e +
              "` future flag to opt-in early. For more information, see " +
              r +
              ".")
          ] || ((Yt[n] = !0), console.warn(n));
        };
      function Xt(e, t) {
        void 0 === (null == e ? void 0 : e.v7_startTransition) &&
          qt(
            "v7_startTransition",
            "React Router will begin wrapping state updates in `React.startTransition` in v7",
            "https://reactrouter.com/v6/upgrading/future#v7_starttransition"
          ),
          void 0 !== (null == e ? void 0 : e.v7_relativeSplatPath) ||
            (t && t.v7_relativeSplatPath) ||
            qt(
              "v7_relativeSplatPath",
              "Relative route resolution within Splat routes is changing in v7",
              "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"
            ),
          t &&
            (void 0 === t.v7_fetcherPersist &&
              qt(
                "v7_fetcherPersist",
                "The persistence behavior of fetchers is changing in v7",
                "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"
              ),
            void 0 === t.v7_normalizeFormMethod &&
              qt(
                "v7_normalizeFormMethod",
                "Casing of `formMethod` fields is being normalized to uppercase in v7",
                "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"
              ),
            void 0 === t.v7_partialHydration &&
              qt(
                "v7_partialHydration",
                "`RouterProvider` hydration behavior is changing in v7",
                "https://reactrouter.com/v6/upgrading/future#v7_partialhydration"
              ),
            void 0 === t.v7_skipActionErrorRevalidation &&
              qt(
                "v7_skipActionErrorRevalidation",
                "The revalidation behavior after 4xx/5xx `action` responses is changing in v7",
                "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"
              ));
      }
      const Gt = a.startTransition;
      function Qt(e) {
        let {
            basename: t,
            children: r,
            initialEntries: n,
            initialIndex: o,
            future: i,
          } = e,
          s = a.useRef();
        null == s.current &&
          (s.current = l({ initialEntries: n, initialIndex: o, v5Compat: !0 }));
        let u = s.current,
          [c, d] = a.useState({ action: u.action, location: u.location }),
          { v7_startTransition: h } = i || {},
          f = a.useCallback(
            (e) => {
              h && Gt ? Gt(() => d(e)) : d(e);
            },
            [d, h]
          );
        return (
          a.useLayoutEffect(() => u.listen(f), [u, f]),
          a.useEffect(() => Xt(i), [i]),
          a.createElement(rr, {
            basename: t,
            children: r,
            location: c.location,
            navigationType: c.action,
            navigator: u,
            future: i,
          })
        );
      }
      function Zt(e) {
        let { to: t, replace: r, state: n, relative: o } = e;
        ht() || d(!1);
        let { future: i, static: s } = a.useContext(st),
          { matches: l } = a.useContext(ut),
          { pathname: u } = ft(),
          c = yt(),
          h = W(t, H(l, i.v7_relativeSplatPath), u, "path" === o),
          f = JSON.stringify(h);
        return (
          a.useEffect(
            () => c(JSON.parse(f), { replace: r, state: n, relative: o }),
            [c, f, o, r, n]
          ),
          null
        );
      }
      function er(e) {
        return wt(e.context);
      }
      function tr(e) {
        d(!1);
      }
      function rr(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: o,
          navigationType: i = n.Pop,
          navigator: s,
          static: l = !1,
          future: u,
        } = e;
        ht() && d(!1);
        let c = t.replace(/^\/*/, "/"),
          h = a.useMemo(
            () => ({
              basename: c,
              navigator: s,
              static: l,
              future: nt({ v7_relativeSplatPath: !1 }, u),
            }),
            [c, u, s, l]
          );
        "string" == typeof o && (o = v(o));
        let {
            pathname: f = "/",
            search: p = "",
            hash: m = "",
            state: y = null,
            key: g = "default",
          } = o,
          b = a.useMemo(() => {
            let e = N(f, c);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: p,
                    hash: m,
                    state: y,
                    key: g,
                  },
                  navigationType: i,
                };
          }, [c, f, p, m, y, g, i]);
        return null == b
          ? null
          : a.createElement(
              st.Provider,
              { value: h },
              a.createElement(lt.Provider, { children: r, value: b })
            );
      }
      function nr(e) {
        let { children: t, location: r } = e;
        return Rt(ur(t), r);
      }
      function ar(e) {
        let { children: t, errorElement: r, resolve: n } = e;
        return a.createElement(
          sr,
          { resolve: n, errorElement: r },
          a.createElement(lr, null, t)
        );
      }
      var or = (function (e) {
        return (
          (e[(e.pending = 0)] = "pending"),
          (e[(e.success = 1)] = "success"),
          (e[(e.error = 2)] = "error"),
          e
        );
      })(or || {});
      const ir = new Promise(() => {});
      class sr extends a.Component {
        constructor(e) {
          super(e), (this.state = { error: null });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          console.error(
            "<Await> caught the following error during render",
            e,
            t
          );
        }
        render() {
          let { children: e, errorElement: t, resolve: r } = this.props,
            n = null,
            o = or.pending;
          if (r instanceof Promise)
            if (this.state.error) {
              o = or.error;
              let e = this.state.error;
              (n = Promise.reject().catch(() => {})),
                Object.defineProperty(n, "_tracked", { get: () => !0 }),
                Object.defineProperty(n, "_error", { get: () => e });
            } else
              r._tracked
                ? ((n = r),
                  (o =
                    "_error" in n
                      ? or.error
                      : "_data" in n
                      ? or.success
                      : or.pending))
                : ((o = or.pending),
                  Object.defineProperty(r, "_tracked", { get: () => !0 }),
                  (n = r.then(
                    (e) => Object.defineProperty(r, "_data", { get: () => e }),
                    (e) => Object.defineProperty(r, "_error", { get: () => e })
                  )));
          else
            (o = or.success),
              (n = Promise.resolve()),
              Object.defineProperty(n, "_tracked", { get: () => !0 }),
              Object.defineProperty(n, "_data", { get: () => r });
          if (o === or.error && n._error instanceof q) throw ir;
          if (o === or.error && !t) throw n._error;
          if (o === or.error)
            return a.createElement(it.Provider, { value: n, children: t });
          if (o === or.success)
            return a.createElement(it.Provider, { value: n, children: e });
          throw n;
        }
      }
      function lr(e) {
        let { children: t } = e,
          r = Wt(),
          n = "function" == typeof t ? t(r) : t;
        return a.createElement(a.Fragment, null, n);
      }
      function ur(e, t) {
        void 0 === t && (t = []);
        let r = [];
        return (
          a.Children.forEach(e, (e, n) => {
            if (!a.isValidElement(e)) return;
            let o = [...t, n];
            if (e.type === a.Fragment)
              return void r.push.apply(r, ur(e.props.children, o));
            e.type !== tr && d(!1), e.props.index && e.props.children && d(!1);
            let i = {
              id: e.props.id || o.join("-"),
              caseSensitive: e.props.caseSensitive,
              element: e.props.element,
              Component: e.props.Component,
              index: e.props.index,
              path: e.props.path,
              loader: e.props.loader,
              action: e.props.action,
              errorElement: e.props.errorElement,
              ErrorBoundary: e.props.ErrorBoundary,
              hasErrorBoundary:
                null != e.props.ErrorBoundary || null != e.props.errorElement,
              shouldRevalidate: e.props.shouldRevalidate,
              handle: e.props.handle,
              lazy: e.props.lazy,
            };
            e.props.children && (i.children = ur(e.props.children, o)),
              r.push(i);
          }),
          r
        );
      }
      function cr(e) {
        return kt(e);
      }
      function dr(e) {
        let t = {
          hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement,
        };
        return (
          e.Component &&
            Object.assign(t, {
              element: a.createElement(e.Component),
              Component: void 0,
            }),
          e.HydrateFallback &&
            Object.assign(t, {
              hydrateFallbackElement: a.createElement(e.HydrateFallback),
              HydrateFallback: void 0,
            }),
          e.ErrorBoundary &&
            Object.assign(t, {
              errorElement: a.createElement(e.ErrorBoundary),
              ErrorBoundary: void 0,
            }),
          t
        );
      }
      function hr(e, t) {
        return ve({
          basename: null == t ? void 0 : t.basename,
          future: nt({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0,
          }),
          history: l({
            initialEntries: null == t ? void 0 : t.initialEntries,
            initialIndex: null == t ? void 0 : t.initialIndex,
          }),
          hydrationData: null == t ? void 0 : t.hydrationData,
          routes: e,
          mapRouteProperties: dr,
          dataStrategy: null == t ? void 0 : t.dataStrategy,
          patchRoutesOnNavigation:
            null == t ? void 0 : t.patchRoutesOnNavigation,
        }).initialize();
      }
      function fr() {
        return (
          (fr = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = arguments[t];
                  for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                }
                return e;
              }),
          fr.apply(this, arguments)
        );
      }
      function pr(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++)
          (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a;
      }
      const mr = "get",
        vr = "application/x-www-form-urlencoded";
      function yr(e) {
        return null != e && "string" == typeof e.tagName;
      }
      function gr(e) {
        return (
          void 0 === e && (e = ""),
          new URLSearchParams(
            "string" == typeof e ||
            Array.isArray(e) ||
            e instanceof URLSearchParams
              ? e
              : Object.keys(e).reduce((t, r) => {
                  let n = e[r];
                  return t.concat(
                    Array.isArray(n) ? n.map((e) => [r, e]) : [[r, n]]
                  );
                }, [])
          )
        );
      }
      let br = null;
      const wr = new Set([
        "application/x-www-form-urlencoded",
        "multipart/form-data",
        "text/plain",
      ]);
      function Sr(e) {
        return null == e || wr.has(e) ? e : null;
      }
      const Er = [
          "onClick",
          "relative",
          "reloadDocument",
          "replace",
          "state",
          "target",
          "to",
          "preventScrollReset",
          "viewTransition",
        ],
        Rr = [
          "aria-current",
          "caseSensitive",
          "className",
          "end",
          "style",
          "to",
          "viewTransition",
          "children",
        ],
        xr = [
          "fetcherKey",
          "navigate",
          "reloadDocument",
          "replace",
          "state",
          "method",
          "action",
          "onSubmit",
          "relative",
          "preventScrollReset",
          "viewTransition",
        ];
      try {
        window.__reactRouterVersion = "6";
      } catch (e) {}
      function Dr(e, t) {
        return ve({
          basename: null == t ? void 0 : t.basename,
          future: fr({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0,
          }),
          history: u({ window: null == t ? void 0 : t.window }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || Pr(),
          routes: e,
          mapRouteProperties: dr,
          dataStrategy: null == t ? void 0 : t.dataStrategy,
          patchRoutesOnNavigation:
            null == t ? void 0 : t.patchRoutesOnNavigation,
          window: null == t ? void 0 : t.window,
        }).initialize();
      }
      function Cr(e, t) {
        return ve({
          basename: null == t ? void 0 : t.basename,
          future: fr({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0,
          }),
          history: c({ window: null == t ? void 0 : t.window }),
          hydrationData: (null == t ? void 0 : t.hydrationData) || Pr(),
          routes: e,
          mapRouteProperties: dr,
          dataStrategy: null == t ? void 0 : t.dataStrategy,
          patchRoutesOnNavigation:
            null == t ? void 0 : t.patchRoutesOnNavigation,
          window: null == t ? void 0 : t.window,
        }).initialize();
      }
      function Pr() {
        var e;
        let t = null == (e = window) ? void 0 : e.__staticRouterHydrationData;
        return t && t.errors && (t = fr({}, t, { errors: Lr(t.errors) })), t;
      }
      function Lr(e) {
        if (!e) return null;
        let t = Object.entries(e),
          r = {};
        for (let [e, n] of t)
          if (n && "RouteErrorResponse" === n.__type)
            r[e] = new re(n.status, n.statusText, n.data, !0 === n.internal);
          else if (n && "Error" === n.__type) {
            if (n.__subType) {
              let t = window[n.__subType];
              if ("function" == typeof t)
                try {
                  let a = new t(n.message);
                  (a.stack = ""), (r[e] = a);
                } catch (e) {}
            }
            if (null == r[e]) {
              let t = new Error(n.message);
              (t.stack = ""), (r[e] = t);
            }
          } else r[e] = n;
        return r;
      }
      const kr = a.createContext({ isTransitioning: !1 }),
        Tr = a.createContext(new Map()),
        _r = a.startTransition,
        Ar = o.flushSync,
        Mr = a.useId;
      function Ur(e) {
        Ar ? Ar(e) : e();
      }
      class jr {
        constructor() {
          (this.status = "pending"),
            (this.promise = new Promise((e, t) => {
              (this.resolve = (t) => {
                "pending" === this.status && ((this.status = "resolved"), e(t));
              }),
                (this.reject = (e) => {
                  "pending" === this.status &&
                    ((this.status = "rejected"), t(e));
                });
            }));
        }
      }
      function Or(e) {
        let { fallbackElement: t, router: r, future: n } = e,
          [o, i] = a.useState(r.state),
          [s, l] = a.useState(),
          [u, c] = a.useState({ isTransitioning: !1 }),
          [d, h] = a.useState(),
          [f, p] = a.useState(),
          [m, v] = a.useState(),
          y = a.useRef(new Map()),
          { v7_startTransition: g } = n || {},
          b = a.useCallback(
            (e) => {
              g
                ? (function (e) {
                    _r ? _r(e) : e();
                  })(e)
                : e();
            },
            [g]
          ),
          w = a.useCallback(
            (e, t) => {
              let {
                deletedFetchers: n,
                flushSync: a,
                viewTransitionOpts: o,
              } = t;
              e.fetchers.forEach((e, t) => {
                void 0 !== e.data && y.current.set(t, e.data);
              }),
                n.forEach((e) => y.current.delete(e));
              let s =
                null == r.window ||
                null == r.window.document ||
                "function" != typeof r.window.document.startViewTransition;
              if (o && !s) {
                if (a) {
                  Ur(() => {
                    f && (d && d.resolve(), f.skipTransition()),
                      c({
                        isTransitioning: !0,
                        flushSync: !0,
                        currentLocation: o.currentLocation,
                        nextLocation: o.nextLocation,
                      });
                  });
                  let t = r.window.document.startViewTransition(() => {
                    Ur(() => i(e));
                  });
                  return (
                    t.finished.finally(() => {
                      Ur(() => {
                        h(void 0),
                          p(void 0),
                          l(void 0),
                          c({ isTransitioning: !1 });
                      });
                    }),
                    void Ur(() => p(t))
                  );
                }
                f
                  ? (d && d.resolve(),
                    f.skipTransition(),
                    v({
                      state: e,
                      currentLocation: o.currentLocation,
                      nextLocation: o.nextLocation,
                    }))
                  : (l(e),
                    c({
                      isTransitioning: !0,
                      flushSync: !1,
                      currentLocation: o.currentLocation,
                      nextLocation: o.nextLocation,
                    }));
              } else a ? Ur(() => i(e)) : b(() => i(e));
            },
            [r.window, f, d, y, b]
          );
        a.useLayoutEffect(() => r.subscribe(w), [r, w]),
          a.useEffect(() => {
            u.isTransitioning && !u.flushSync && h(new jr());
          }, [u]),
          a.useEffect(() => {
            if (d && s && r.window) {
              let e = s,
                t = d.promise,
                n = r.window.document.startViewTransition(async () => {
                  b(() => i(e)), await t;
                });
              n.finished.finally(() => {
                h(void 0), p(void 0), l(void 0), c({ isTransitioning: !1 });
              }),
                p(n);
            }
          }, [b, s, d, r.window]),
          a.useEffect(() => {
            d && s && o.location.key === s.location.key && d.resolve();
          }, [d, f, o.location, s]),
          a.useEffect(() => {
            !u.isTransitioning &&
              m &&
              (l(m.state),
              c({
                isTransitioning: !0,
                flushSync: !1,
                currentLocation: m.currentLocation,
                nextLocation: m.nextLocation,
              }),
              v(void 0));
          }, [u.isTransitioning, m]),
          a.useEffect(() => {}, []);
        let S = a.useMemo(
            () => ({
              createHref: r.createHref,
              encodeLocation: r.encodeLocation,
              go: (e) => r.navigate(e),
              push: (e, t, n) =>
                r.navigate(e, {
                  state: t,
                  preventScrollReset: null == n ? void 0 : n.preventScrollReset,
                }),
              replace: (e, t, n) =>
                r.navigate(e, {
                  replace: !0,
                  state: t,
                  preventScrollReset: null == n ? void 0 : n.preventScrollReset,
                }),
            }),
            [r]
          ),
          E = r.basename || "/",
          R = a.useMemo(
            () => ({ router: r, navigator: S, static: !1, basename: E }),
            [r, S, E]
          ),
          x = a.useMemo(
            () => ({ v7_relativeSplatPath: r.future.v7_relativeSplatPath }),
            [r.future.v7_relativeSplatPath]
          );
        return (
          a.useEffect(() => Xt(n, r.future), [n, r.future]),
          a.createElement(
            a.Fragment,
            null,
            a.createElement(
              at.Provider,
              { value: R },
              a.createElement(
                ot.Provider,
                { value: o },
                a.createElement(
                  Tr.Provider,
                  { value: y.current },
                  a.createElement(
                    kr.Provider,
                    { value: u },
                    a.createElement(
                      rr,
                      {
                        basename: E,
                        location: o.location,
                        navigationType: o.historyAction,
                        navigator: S,
                        future: x,
                      },
                      o.initialized || r.future.v7_partialHydration
                        ? a.createElement(Fr, {
                            routes: r.routes,
                            future: r.future,
                            state: o,
                          })
                        : t
                    )
                  )
                )
              )
            ),
            null
          )
        );
      }
      const Fr = a.memo(Nr);
      function Nr(e) {
        let { routes: t, future: r, state: n } = e;
        return xt(t, void 0, n, r);
      }
      function Br(e) {
        let { basename: t, children: r, future: n, window: o } = e,
          i = a.useRef();
        null == i.current && (i.current = u({ window: o, v5Compat: !0 }));
        let s = i.current,
          [l, c] = a.useState({ action: s.action, location: s.location }),
          { v7_startTransition: d } = n || {},
          h = a.useCallback(
            (e) => {
              d && _r ? _r(() => c(e)) : c(e);
            },
            [c, d]
          );
        return (
          a.useLayoutEffect(() => s.listen(h), [s, h]),
          a.useEffect(() => Xt(n), [n]),
          a.createElement(rr, {
            basename: t,
            children: r,
            location: l.location,
            navigationType: l.action,
            navigator: s,
            future: n,
          })
        );
      }
      function Ir(e) {
        let { basename: t, children: r, future: n, window: o } = e,
          i = a.useRef();
        null == i.current && (i.current = c({ window: o, v5Compat: !0 }));
        let s = i.current,
          [l, u] = a.useState({ action: s.action, location: s.location }),
          { v7_startTransition: d } = n || {},
          h = a.useCallback(
            (e) => {
              d && _r ? _r(() => u(e)) : u(e);
            },
            [u, d]
          );
        return (
          a.useLayoutEffect(() => s.listen(h), [s, h]),
          a.useEffect(() => Xt(n), [n]),
          a.createElement(rr, {
            basename: t,
            children: r,
            location: l.location,
            navigationType: l.action,
            navigator: s,
            future: n,
          })
        );
      }
      function zr(e) {
        let { basename: t, children: r, future: n, history: o } = e,
          [i, s] = a.useState({ action: o.action, location: o.location }),
          { v7_startTransition: l } = n || {},
          u = a.useCallback(
            (e) => {
              l && _r ? _r(() => s(e)) : s(e);
            },
            [s, l]
          );
        return (
          a.useLayoutEffect(() => o.listen(u), [o, u]),
          a.useEffect(() => Xt(n), [n]),
          a.createElement(rr, {
            basename: t,
            children: r,
            location: i.location,
            navigationType: i.action,
            navigator: o,
            future: n,
          })
        );
      }
      const Hr =
          "undefined" != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement,
        Wr = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        Kr = a.forwardRef(function (e, t) {
          let r,
            {
              onClick: n,
              relative: o,
              reloadDocument: i,
              replace: s,
              state: l,
              target: u,
              to: c,
              preventScrollReset: d,
              viewTransition: h,
            } = e,
            f = pr(e, Er),
            { basename: p } = a.useContext(st),
            m = !1;
          if ("string" == typeof c && Wr.test(c) && ((r = c), Hr))
            try {
              let e = new URL(window.location.href),
                t = c.startsWith("//") ? new URL(e.protocol + c) : new URL(c),
                r = N(t.pathname, p);
              t.origin === e.origin && null != r
                ? (c = r + t.search + t.hash)
                : (m = !0);
            } catch (e) {}
          let v = dt(c, { relative: o }),
            y = Qr(c, {
              replace: s,
              state: l,
              target: u,
              preventScrollReset: d,
              relative: o,
              viewTransition: h,
            });
          return a.createElement(
            "a",
            fr({}, f, {
              href: r || v,
              onClick:
                m || i
                  ? n
                  : function (e) {
                      n && n(e), e.defaultPrevented || y(e);
                    },
              ref: t,
              target: u,
            })
          );
        }),
        $r = a.forwardRef(function (e, t) {
          let {
              "aria-current": r = "page",
              caseSensitive: n = !1,
              className: o = "",
              end: i = !1,
              style: s,
              to: l,
              viewTransition: u,
              children: c,
            } = e,
            d = pr(e, Rr),
            h = Et(l, { relative: d.relative }),
            f = ft(),
            p = a.useContext(ot),
            { navigator: m, basename: v } = a.useContext(st),
            y = null != p && hn(h) && !0 === u,
            g = m.encodeLocation ? m.encodeLocation(h).pathname : h.pathname,
            b = f.pathname,
            w =
              p && p.navigation && p.navigation.location
                ? p.navigation.location.pathname
                : null;
          n ||
            ((b = b.toLowerCase()),
            (w = w ? w.toLowerCase() : null),
            (g = g.toLowerCase())),
            w && v && (w = N(w, v) || w);
          const S = "/" !== g && g.endsWith("/") ? g.length - 1 : g.length;
          let E,
            R = b === g || (!i && b.startsWith(g) && "/" === b.charAt(S)),
            x =
              null != w &&
              (w === g ||
                (!i && w.startsWith(g) && "/" === w.charAt(g.length))),
            D = { isActive: R, isPending: x, isTransitioning: y },
            C = R ? r : void 0;
          E =
            "function" == typeof o
              ? o(D)
              : [
                  o,
                  R ? "active" : null,
                  x ? "pending" : null,
                  y ? "transitioning" : null,
                ]
                  .filter(Boolean)
                  .join(" ");
          let P = "function" == typeof s ? s(D) : s;
          return a.createElement(
            Kr,
            fr({}, d, {
              "aria-current": C,
              className: E,
              ref: t,
              style: P,
              to: l,
              viewTransition: u,
            }),
            "function" == typeof c ? c(D) : c
          );
        }),
        Vr = a.forwardRef((e, t) => {
          let {
              fetcherKey: r,
              navigate: n,
              reloadDocument: o,
              replace: i,
              state: s,
              method: l = mr,
              action: u,
              onSubmit: c,
              relative: d,
              preventScrollReset: h,
              viewTransition: f,
            } = e,
            p = pr(e, xr),
            m = rn(),
            v = nn(u, { relative: d }),
            y = "get" === l.toLowerCase() ? "get" : "post";
          return a.createElement(
            "form",
            fr(
              {
                ref: t,
                method: y,
                action: v,
                onSubmit: o
                  ? c
                  : (e) => {
                      if ((c && c(e), e.defaultPrevented)) return;
                      e.preventDefault();
                      let t = e.nativeEvent.submitter,
                        a =
                          (null == t ? void 0 : t.getAttribute("formmethod")) ||
                          l;
                      m(t || e.currentTarget, {
                        fetcherKey: r,
                        method: a,
                        navigate: n,
                        replace: i,
                        state: s,
                        relative: d,
                        preventScrollReset: h,
                        viewTransition: f,
                      });
                    },
              },
              p
            )
          );
        });
      function Jr(e) {
        let { getKey: t, storageKey: r } = e;
        return un({ getKey: t, storageKey: r }), null;
      }
      var Yr, qr;
      function Xr(e) {
        let t = a.useContext(at);
        return t || d(!1), t;
      }
      function Gr(e) {
        let t = a.useContext(ot);
        return t || d(!1), t;
      }
      function Qr(e, t) {
        let {
            target: r,
            replace: n,
            state: o,
            preventScrollReset: i,
            relative: s,
            viewTransition: l,
          } = void 0 === t ? {} : t,
          u = yt(),
          c = ft(),
          d = Et(e, { relative: s });
        return a.useCallback(
          (t) => {
            if (
              (function (e, t) {
                return !(
                  0 !== e.button ||
                  (t && "_self" !== t) ||
                  (function (e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                  })(e)
                );
              })(t, r)
            ) {
              t.preventDefault();
              let r = void 0 !== n ? n : m(c) === m(d);
              u(e, {
                replace: r,
                state: o,
                preventScrollReset: i,
                relative: s,
                viewTransition: l,
              });
            }
          },
          [c, u, d, n, o, r, e, i, s, l]
        );
      }
      function Zr(e) {
        let t = a.useRef(gr(e)),
          r = a.useRef(!1),
          n = ft(),
          o = a.useMemo(
            () =>
              (function (e, t) {
                let r = gr(e);
                return (
                  t &&
                    t.forEach((e, n) => {
                      r.has(n) ||
                        t.getAll(n).forEach((e) => {
                          r.append(n, e);
                        });
                    }),
                  r
                );
              })(n.search, r.current ? null : t.current),
            [n.search]
          ),
          i = yt(),
          s = a.useCallback(
            (e, t) => {
              const n = gr("function" == typeof e ? e(o) : e);
              (r.current = !0), i("?" + n, t);
            },
            [i, o]
          );
        return [o, s];
      }
      (function (e) {
        (e.UseScrollRestoration = "useScrollRestoration"),
          (e.UseSubmit = "useSubmit"),
          (e.UseSubmitFetcher = "useSubmitFetcher"),
          (e.UseFetcher = "useFetcher"),
          (e.useViewTransitionState = "useViewTransitionState");
      })(Yr || (Yr = {})),
        (function (e) {
          (e.UseFetcher = "useFetcher"),
            (e.UseFetchers = "useFetchers"),
            (e.UseScrollRestoration = "useScrollRestoration");
        })(qr || (qr = {}));
      let en = 0,
        tn = () => "__" + String(++en) + "__";
      function rn() {
        let { router: e } = Xr(Yr.UseSubmit),
          { basename: t } = a.useContext(st),
          r = jt();
        return a.useCallback(
          function (n, a) {
            void 0 === a && (a = {}),
              (function () {
                if ("undefined" == typeof document)
                  throw new Error(
                    "You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead."
                  );
              })();
            let {
              action: o,
              method: i,
              encType: s,
              formData: l,
              body: u,
            } = (function (e, t) {
              let r, n, a, o, i;
              if (yr((s = e)) && "form" === s.tagName.toLowerCase()) {
                let i = e.getAttribute("action");
                (n = i ? N(i, t) : null),
                  (r = e.getAttribute("method") || mr),
                  (a = Sr(e.getAttribute("enctype")) || vr),
                  (o = new FormData(e));
              } else if (
                (function (e) {
                  return yr(e) && "button" === e.tagName.toLowerCase();
                })(e) ||
                ((function (e) {
                  return yr(e) && "input" === e.tagName.toLowerCase();
                })(e) &&
                  ("submit" === e.type || "image" === e.type))
              ) {
                let i = e.form;
                if (null == i)
                  throw new Error(
                    'Cannot submit a <button> or <input type="submit"> without a <form>'
                  );
                let s =
                  e.getAttribute("formaction") || i.getAttribute("action");
                if (
                  ((n = s ? N(s, t) : null),
                  (r =
                    e.getAttribute("formmethod") ||
                    i.getAttribute("method") ||
                    mr),
                  (a =
                    Sr(e.getAttribute("formenctype")) ||
                    Sr(i.getAttribute("enctype")) ||
                    vr),
                  (o = new FormData(i, e)),
                  !(function () {
                    if (null === br)
                      try {
                        new FormData(document.createElement("form"), 0),
                          (br = !1);
                      } catch (e) {
                        br = !0;
                      }
                    return br;
                  })())
                ) {
                  let { name: t, type: r, value: n } = e;
                  if ("image" === r) {
                    let e = t ? t + "." : "";
                    o.append(e + "x", "0"), o.append(e + "y", "0");
                  } else t && o.append(t, n);
                }
              } else {
                if (yr(e))
                  throw new Error(
                    'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
                  );
                (r = mr), (n = null), (a = vr), (i = e);
              }
              var s;
              return (
                o && "text/plain" === a && ((i = o), (o = void 0)),
                {
                  action: n,
                  method: r.toLowerCase(),
                  encType: a,
                  formData: o,
                  body: i,
                }
              );
            })(n, t);
            if (!1 === a.navigate) {
              let t = a.fetcherKey || tn();
              e.fetch(t, r, a.action || o, {
                preventScrollReset: a.preventScrollReset,
                formData: l,
                body: u,
                formMethod: a.method || i,
                formEncType: a.encType || s,
                flushSync: a.flushSync,
              });
            } else
              e.navigate(a.action || o, {
                preventScrollReset: a.preventScrollReset,
                formData: l,
                body: u,
                formMethod: a.method || i,
                formEncType: a.encType || s,
                replace: a.replace,
                state: a.state,
                fromRouteId: r,
                flushSync: a.flushSync,
                viewTransition: a.viewTransition,
              });
          },
          [e, t, r]
        );
      }
      function nn(e, t) {
        let { relative: r } = void 0 === t ? {} : t,
          { basename: n } = a.useContext(st),
          o = a.useContext(ut);
        o || d(!1);
        let [i] = o.matches.slice(-1),
          s = fr({}, Et(e || ".", { relative: r })),
          l = ft();
        if (null == e) {
          s.search = l.search;
          let e = new URLSearchParams(s.search),
            t = e.getAll("index");
          if (t.some((e) => "" === e)) {
            e.delete("index"),
              t.filter((e) => e).forEach((t) => e.append("index", t));
            let r = e.toString();
            s.search = r ? "?" + r : "";
          }
        }
        return (
          (e && "." !== e) ||
            !i.route.index ||
            (s.search = s.search
              ? s.search.replace(/^\?/, "?index&")
              : "?index"),
          "/" !== n &&
            (s.pathname = "/" === s.pathname ? n : K([n, s.pathname])),
          m(s)
        );
      }
      function an(e) {
        var t;
        let { key: r } = void 0 === e ? {} : e,
          { router: n } = Xr(Yr.UseFetcher),
          o = Gr(qr.UseFetcher),
          i = a.useContext(Tr),
          s = a.useContext(ut),
          l =
            null == (t = s.matches[s.matches.length - 1]) ? void 0 : t.route.id;
        i || d(!1), s || d(!1), null == l && d(!1);
        let u = Mr ? Mr() : "",
          [c, h] = a.useState(r || u);
        r && r !== c ? h(r) : c || h(tn()),
          a.useEffect(
            () => (
              n.getFetcher(c),
              () => {
                n.deleteFetcher(c);
              }
            ),
            [n, c]
          );
        let f = a.useCallback(
            (e, t) => {
              l || d(!1), n.fetch(c, l, e, t);
            },
            [c, l, n]
          ),
          p = rn(),
          m = a.useCallback(
            (e, t) => {
              p(e, fr({}, t, { navigate: !1, fetcherKey: c }));
            },
            [c, p]
          ),
          v = a.useMemo(
            () =>
              a.forwardRef((e, t) =>
                a.createElement(
                  Vr,
                  fr({}, e, { navigate: !1, fetcherKey: c, ref: t })
                )
              ),
            [c]
          ),
          y = o.fetchers.get(c) || de,
          g = i.get(c);
        return a.useMemo(
          () => fr({ Form: v, submit: m, load: f }, y, { data: g }),
          [v, m, f, y, g]
        );
      }
      function on() {
        let e = Gr(qr.UseFetchers);
        return Array.from(e.fetchers.entries()).map((e) => {
          let [t, r] = e;
          return fr({}, r, { key: t });
        });
      }
      const sn = "react-router-scroll-positions";
      let ln = {};
      function un(e) {
        let { getKey: t, storageKey: r } = void 0 === e ? {} : e,
          { router: n } = Xr(Yr.UseScrollRestoration),
          { restoreScrollPosition: o, preventScrollReset: i } = Gr(
            qr.UseScrollRestoration
          ),
          { basename: s } = a.useContext(st),
          l = ft(),
          u = Nt(),
          c = Ot();
        a.useEffect(
          () => (
            (window.history.scrollRestoration = "manual"),
            () => {
              window.history.scrollRestoration = "auto";
            }
          ),
          []
        ),
          (function (e) {
            let { capture: t } = {};
            a.useEffect(() => {
              let r = null != t ? { capture: t } : void 0;
              return (
                window.addEventListener("pagehide", e, r),
                () => {
                  window.removeEventListener("pagehide", e, r);
                }
              );
            }, [e, t]);
          })(
            a.useCallback(() => {
              if ("idle" === c.state) {
                let e = (t ? t(l, u) : null) || l.key;
                ln[e] = window.scrollY;
              }
              try {
                sessionStorage.setItem(r || sn, JSON.stringify(ln));
              } catch (e) {}
              window.history.scrollRestoration = "auto";
            }, [r, t, c.state, l, u])
          ),
          "undefined" != typeof document &&
            (a.useLayoutEffect(() => {
              try {
                let e = sessionStorage.getItem(r || sn);
                e && (ln = JSON.parse(e));
              } catch (e) {}
            }, [r]),
            a.useLayoutEffect(() => {
              let e =
                  t && "/" !== s
                    ? (e, r) =>
                        t(
                          fr({}, e, {
                            pathname: N(e.pathname, s) || e.pathname,
                          }),
                          r
                        )
                    : t,
                r =
                  null == n
                    ? void 0
                    : n.enableScrollRestoration(ln, () => window.scrollY, e);
              return () => r && r();
            }, [n, s, t]),
            a.useLayoutEffect(() => {
              if (!1 !== o)
                if ("number" != typeof o) {
                  if (l.hash) {
                    let e = document.getElementById(
                      decodeURIComponent(l.hash.slice(1))
                    );
                    if (e) return void e.scrollIntoView();
                  }
                  !0 !== i && window.scrollTo(0, 0);
                } else window.scrollTo(0, o);
            }, [l, o, i]));
      }
      function cn(e, t) {
        let { capture: r } = t || {};
        a.useEffect(() => {
          let t = null != r ? { capture: r } : void 0;
          return (
            window.addEventListener("beforeunload", e, t),
            () => {
              window.removeEventListener("beforeunload", e, t);
            }
          );
        }, [e, r]);
      }
      function dn(e) {
        let { when: t, message: r } = e,
          n = Vt(t);
        a.useEffect(() => {
          "blocked" === n.state &&
            (window.confirm(r) ? setTimeout(n.proceed, 0) : n.reset());
        }, [n, r]),
          a.useEffect(() => {
            "blocked" !== n.state || t || n.reset();
          }, [n, t]);
      }
      function hn(e, t) {
        void 0 === t && (t = {});
        let r = a.useContext(kr);
        null == r && d(!1);
        let { basename: n } = Xr(Yr.useViewTransitionState),
          o = Et(e, { relative: t.relative });
        if (!r.isTransitioning) return !1;
        let i = N(r.currentLocation.pathname, n) || r.currentLocation.pathname,
          s = N(r.nextLocation.pathname, n) || r.nextLocation.pathname;
        return null != O(o.pathname, s) || null != O(o.pathname, i);
      }
    },
  },
]);
