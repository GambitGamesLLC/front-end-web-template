function y() {
}
function Q(t) {
  return t();
}
function $() {
  return /* @__PURE__ */ Object.create(null);
}
function z(t) {
  t.forEach(Q);
}
function V(t) {
  return typeof t == "function";
}
function W(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
let C;
function F(t, e) {
  return C || (C = document.createElement("a")), C.href = e, t === C.href;
}
function J(t) {
  return Object.keys(t).length === 0;
}
function r(t, e) {
  t.appendChild(e);
}
function Z(t, e, n) {
  t.insertBefore(e, n || null);
}
function k(t) {
  t.parentNode.removeChild(t);
}
function s(t) {
  return document.createElement(t);
}
function _(t) {
  return document.createTextNode(t);
}
function T() {
  return _(" ");
}
function K(t, e, n, M) {
  return t.addEventListener(e, n, M), () => t.removeEventListener(e, n, M);
}
function A(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function tt(t) {
  return Array.from(t.childNodes);
}
function et(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
let S;
function L(t) {
  S = t;
}
const d = [], U = [], E = [], b = [], nt = Promise.resolve();
let O = !1;
function Mt() {
  O || (O = !0, nt.then(G));
}
function Y(t) {
  E.push(t);
}
const p = /* @__PURE__ */ new Set();
let x = 0;
function G() {
  const t = S;
  do {
    for (; x < d.length; ) {
      const e = d[x];
      x++, L(e), it(e.$$);
    }
    for (L(null), d.length = 0, x = 0; U.length; )
      U.pop()();
    for (let e = 0; e < E.length; e += 1) {
      const n = E[e];
      p.has(n) || (p.add(n), n());
    }
    E.length = 0;
  } while (d.length);
  for (; b.length; )
    b.pop()();
  O = !1, p.clear(), L(t);
}
function it(t) {
  if (t.fragment !== null) {
    t.update(), z(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Y);
  }
}
const m = /* @__PURE__ */ new Set();
let ut;
function B(t, e) {
  t && t.i && (m.delete(t), t.i(e));
}
function ct(t, e, n, M) {
  if (t && t.o) {
    if (m.has(t))
      return;
    m.add(t), ut.c.push(() => {
      m.delete(t), M && (n && t.d(1), M());
    }), t.o(e);
  } else
    M && M();
}
function rt(t) {
  t && t.c();
}
function R(t, e, n, M) {
  const { fragment: c, on_mount: g, on_destroy: u, after_update: o } = t.$$;
  c && c.m(e, n), M || Y(() => {
    const N = g.map(Q).filter(V);
    u ? u.push(...N) : z(N), t.$$.on_mount = [];
  }), o.forEach(Y);
}
function H(t, e) {
  const n = t.$$;
  n.fragment !== null && (z(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function lt(t, e) {
  t.$$.dirty[0] === -1 && (d.push(t), Mt(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function P(t, e, n, M, c, g, u, o = [-1]) {
  const N = S;
  L(t);
  const i = t.$$ = {
    fragment: null,
    ctx: null,
    props: g,
    update: y,
    not_equal: c,
    bound: $(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (N ? N.$$.context : [])),
    callbacks: $(),
    dirty: o,
    skip_bound: !1,
    root: e.target || N.$$.root
  };
  u && u(i.root);
  let j = !1;
  if (i.ctx = n ? n(t, e.props || {}, (l, a, ...I) => {
    const f = I.length ? I[0] : a;
    return i.ctx && c(i.ctx[l], i.ctx[l] = f) && (!i.skip_bound && i.bound[l] && i.bound[l](f), j && lt(t, l)), a;
  }) : [], i.update(), j = !0, z(i.before_update), i.fragment = M ? M(i.ctx) : !1, e.target) {
    if (e.hydrate) {
      const l = tt(e.target);
      i.fragment && i.fragment.l(l), l.forEach(k);
    } else
      i.fragment && i.fragment.c();
    e.intro && B(t.$$.fragment), R(t, e.target, e.anchor, e.customElement), G();
  }
  L(N);
}
class X {
  $destroy() {
    H(this, 1), this.$destroy = y;
  }
  $on(e, n) {
    const M = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return M.push(n), () => {
      const c = M.indexOf(n);
      c !== -1 && M.splice(c, 1);
    };
  }
  $set(e) {
    this.$$set && !J(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const gt = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1sb2dvcyIgd2lkdGg9IjI2LjYiIGhlaWdodD0iMzIiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZpZXdCb3g9IjAgMCAyNTYgMzA4Ij48cGF0aCBmaWxsPSIjRkYzRTAwIiBkPSJNMjM5LjY4MiA0MC43MDdDMjExLjExMy0uMTgyIDE1NC42OS0xMi4zMDEgMTEzLjg5NSAxMy42OUw0Mi4yNDcgNTkuMzU2YTgyLjE5OCA4Mi4xOTggMCAwIDAtMzcuMTM1IDU1LjA1NmE4Ni41NjYgODYuNTY2IDAgMCAwIDguNTM2IDU1LjU3NmE4Mi40MjUgODIuNDI1IDAgMCAwLTEyLjI5NiAzMC43MTlhODcuNTk2IDg3LjU5NiAwIDAgMCAxNC45NjQgNjYuMjQ0YzI4LjU3NCA0MC44OTMgODQuOTk3IDUzLjAwNyAxMjUuNzg3IDI3LjAxNmw3MS42NDgtNDUuNjY0YTgyLjE4MiA4Mi4xODIgMCAwIDAgMzcuMTM1LTU1LjA1N2E4Ni42MDEgODYuNjAxIDAgMCAwLTguNTMtNTUuNTc3YTgyLjQwOSA4Mi40MDkgMCAwIDAgMTIuMjktMzAuNzE4YTg3LjU3MyA4Ny41NzMgMCAwIDAtMTQuOTYzLTY2LjI0NCI+PC9wYXRoPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMDYuODg5IDI3MC44NDFjLTIzLjEwMiA2LjAwNy00Ny40OTctMy4wMzYtNjEuMTAzLTIyLjY0OGE1Mi42ODUgNTIuNjg1IDAgMCAxLTkuMDAzLTM5Ljg1YTQ5Ljk3OCA0OS45NzggMCAwIDEgMS43MTMtNi42OTNsMS4zNS00LjExNWwzLjY3MSAyLjY5N2E5Mi40NDcgOTIuNDQ3IDAgMCAwIDI4LjAzNiAxNC4wMDdsMi42NjMuODA4bC0uMjQ1IDIuNjU5YTE2LjA2NyAxNi4wNjcgMCAwIDAgMi44OSAxMC42NTZhMTcuMTQzIDE3LjE0MyAwIDAgMCAxOC4zOTcgNi44MjhhMTUuNzg2IDE1Ljc4NiAwIDAgMCA0LjQwMy0xLjkzNWw3MS42Ny00NS42NzJhMTQuOTIyIDE0LjkyMiAwIDAgMCA2LjczNC05Ljk3N2ExNS45MjMgMTUuOTIzIDAgMCAwLTIuNzEzLTEyLjAxMWExNy4xNTYgMTcuMTU2IDAgMCAwLTE4LjQwNC02LjgzMmExNS43OCAxNS43OCAwIDAgMC00LjM5NiAxLjkzM2wtMjcuMzUgMTcuNDM0YTUyLjI5OCA1Mi4yOTggMCAwIDEtMTQuNTUzIDYuMzkxYy0yMy4xMDEgNi4wMDctNDcuNDk3LTMuMDM2LTYxLjEwMS0yMi42NDlhNTIuNjgxIDUyLjY4MSAwIDAgMS05LjAwNC0zOS44NDlhNDkuNDI4IDQ5LjQyOCAwIDAgMSAyMi4zNC0zMy4xMTRsNzEuNjY0LTQ1LjY3N2E1Mi4yMTggNTIuMjE4IDAgMCAxIDE0LjU2My02LjM5OGMyMy4xMDEtNi4wMDcgNDcuNDk3IDMuMDM2IDYxLjEwMSAyMi42NDhhNTIuNjg1IDUyLjY4NSAwIDAgMSA5LjAwNCAzOS44NWE1MC41NTkgNTAuNTU5IDAgMCAxLTEuNzEzIDYuNjkybC0xLjM1IDQuMTE2bC0zLjY3LTIuNjkzYTkyLjM3MyA5Mi4zNzMgMCAwIDAtMjguMDM3LTE0LjAxM2wtMi42NjQtLjgwOWwuMjQ2LTIuNjU4YTE2LjA5OSAxNi4wOTkgMCAwIDAtMi44OS0xMC42NTZhMTcuMTQzIDE3LjE0MyAwIDAgMC0xOC4zOTgtNi44MjhhMTUuNzg2IDE1Ljc4NiAwIDAgMC00LjQwMiAxLjkzNWwtNzEuNjcgNDUuNjc0YTE0Ljg5OCAxNC44OTggMCAwIDAtNi43MyA5Ljk3NWExNS45IDE1LjkgMCAwIDAgMi43MDkgMTIuMDEyYTE3LjE1NiAxNy4xNTYgMCAwIDAgMTguNDA0IDYuODMyYTE1Ljg0MSAxNS44NDEgMCAwIDAgNC40MDItMS45MzVsMjcuMzQ1LTE3LjQyN2E1Mi4xNDcgNTIuMTQ3IDAgMCAxIDE0LjU1Mi02LjM5N2MyMy4xMDEtNi4wMDYgNDcuNDk3IDMuMDM3IDYxLjEwMiAyMi42NWE1Mi42ODEgNTIuNjgxIDAgMCAxIDkuMDAzIDM5Ljg0OGE0OS40NTMgNDkuNDUzIDAgMCAxLTIyLjM0IDMzLjEybC03MS42NjQgNDUuNjczYTUyLjIxOCA1Mi4yMTggMCAwIDEtMTQuNTYzIDYuMzk4Ij48L3BhdGg+PC9zdmc+";
function ot(t) {
  let e, n, M, c, g;
  return {
    c() {
      e = s("button"), n = _("count is "), M = _(t[0]);
    },
    m(u, o) {
      Z(u, e, o), r(e, n), r(e, M), c || (g = K(e, "click", t[1]), c = !0);
    },
    p(u, [o]) {
      o & 1 && et(M, u[0]);
    },
    i: y,
    o: y,
    d(u) {
      u && k(e), c = !1, g();
    }
  };
}
function Nt(t, e, n) {
  let M = 0;
  return [M, () => {
    n(0, M += 1);
  }];
}
class st extends X {
  constructor(e) {
    super(), P(this, e, Nt, ot, W, {});
  }
}
function at(t) {
  let e, n, M, c, g, u, o, N, i, j, l, a, I, f, v, h, w;
  return a = new st({}), {
    c() {
      e = s("main"), n = s("div"), M = s("a"), M.innerHTML = '<img src="/vite.svg" class="logo svelte-qhlvwe" alt="Vite Logo"/>', c = T(), g = s("a"), u = s("img"), N = T(), i = s("h1"), i.textContent = "Vite + Svelte", j = T(), l = s("div"), rt(a.$$.fragment), I = T(), f = s("p"), f.innerHTML = 'Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank">SvelteKit</a>, the official Svelte app framework powered by Vite!', v = T(), h = s("p"), h.textContent = "Click on the Vite and Svelte logos to learn more", A(M, "href", "https://vitejs.dev"), A(M, "target", "_blank"), F(u.src, o = gt) || A(u, "src", o), A(u, "class", "logo svelte svelte-qhlvwe"), A(u, "alt", "Svelte Logo"), A(g, "href", "https://svelte.dev"), A(g, "target", "_blank"), A(l, "class", "card"), A(h, "class", "read-the-docs svelte-qhlvwe");
    },
    m(D, q) {
      Z(D, e, q), r(e, n), r(n, M), r(n, c), r(n, g), r(g, u), r(e, N), r(e, i), r(e, j), r(e, l), R(a, l, null), r(e, I), r(e, f), r(e, v), r(e, h), w = !0;
    },
    p: y,
    i(D) {
      w || (B(a.$$.fragment, D), w = !0);
    },
    o(D) {
      ct(a.$$.fragment, D), w = !1;
    },
    d(D) {
      D && k(e), H(a);
    }
  };
}
class At extends X {
  constructor(e) {
    super(), P(this, e, null, at, W, {});
  }
}
const Dt = new At({
  target: document.getElementById("app")
});
export {
  Dt as app
};
