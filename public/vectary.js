/*!
 * Copyright (c) 2020 by Vectary. All rights reserved.
 * Rev 0d4e5962b0c3f604eefef7a69e1ad668618f36b3
 * @copyright
 */
var Vectary = (function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  return (
    (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && 'object' === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          r.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function e() {
              return t['default'];
            }
          : function e() {
              return t;
            };
      return r.d(e, 'a', e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = '/'),
    r((r.s = './src/viewer-ar/scripts/vctr-ar.ts'))
  );
})({
  '../../../node_modules/base64-js/index.js': function (t, e, r) {
    'use strict';
    (e.byteLength = f), (e.toByteArray = d), (e.fromByteArray = p);
    for (
      var n = [],
        o = [],
        i = 'undefined' !== typeof Uint8Array ? Uint8Array : Array,
        s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        a = 0,
        u = s.length;
      a < u;
      ++a
    )
      (n[a] = s[a]), (o[s.charCodeAt(a)] = a);
    function c(t) {
      var e = t.length;
      if (e % 4 > 0)
        throw new Error('Invalid string. Length must be a multiple of 4');
      var r = t.indexOf('=');
      -1 === r && (r = e);
      var n = r === e ? 0 : 4 - (r % 4);
      return [r, n];
    }
    function f(t) {
      var e = c(t),
        r = e[0],
        n = e[1];
      return (3 * (r + n)) / 4 - n;
    }
    function l(t, e, r) {
      return (3 * (e + r)) / 4 - r;
    }
    function d(t) {
      var e,
        r,
        n = c(t),
        s = n[0],
        a = n[1],
        u = new i(l(t, s, a)),
        f = 0,
        d = a > 0 ? s - 4 : s;
      for (r = 0; r < d; r += 4)
        (e =
          (o[t.charCodeAt(r)] << 18) |
          (o[t.charCodeAt(r + 1)] << 12) |
          (o[t.charCodeAt(r + 2)] << 6) |
          o[t.charCodeAt(r + 3)]),
          (u[f++] = (e >> 16) & 255),
          (u[f++] = (e >> 8) & 255),
          (u[f++] = 255 & e);
      return (
        2 === a &&
          ((e = (o[t.charCodeAt(r)] << 2) | (o[t.charCodeAt(r + 1)] >> 4)),
          (u[f++] = 255 & e)),
        1 === a &&
          ((e =
            (o[t.charCodeAt(r)] << 10) |
            (o[t.charCodeAt(r + 1)] << 4) |
            (o[t.charCodeAt(r + 2)] >> 2)),
          (u[f++] = (e >> 8) & 255),
          (u[f++] = 255 & e)),
        u
      );
    }
    function h(t) {
      return (
        n[(t >> 18) & 63] + n[(t >> 12) & 63] + n[(t >> 6) & 63] + n[63 & t]
      );
    }
    function g(t, e, r) {
      for (var n, o = [], i = e; i < r; i += 3)
        (n =
          ((t[i] << 16) & 16711680) +
          ((t[i + 1] << 8) & 65280) +
          (255 & t[i + 2])),
          o.push(h(n));
      return o.join('');
    }
    function p(t) {
      for (
        var e, r = t.length, o = r % 3, i = [], s = 16383, a = 0, u = r - o;
        a < u;
        a += s
      )
        i.push(g(t, a, a + s > u ? u : a + s));
      return (
        1 === o
          ? ((e = t[r - 1]), i.push(n[e >> 2] + n[(e << 4) & 63] + '=='))
          : 2 === o &&
            ((e = (t[r - 2] << 8) + t[r - 1]),
            i.push(n[e >> 10] + n[(e >> 4) & 63] + n[(e << 2) & 63] + '=')),
        i.join('')
      );
    }
    (o['-'.charCodeAt(0)] = 62), (o['_'.charCodeAt(0)] = 63);
  },
  '../../../node_modules/dijkstrajs/dijkstra.js': function (t, e, r) {
    'use strict';
    var n = {
      single_source_shortest_paths: function (t, e, r) {
        var o = {},
          i = {};
        i[e] = 0;
        var s,
          a,
          u,
          c,
          f,
          l,
          d,
          h,
          g,
          p = n.PriorityQueue.make();
        p.push(e, 0);
        while (!p.empty())
          for (u in ((s = p.pop()),
          (a = s.value),
          (c = s.cost),
          (f = t[a] || {}),
          f))
            f.hasOwnProperty(u) &&
              ((l = f[u]),
              (d = c + l),
              (h = i[u]),
              (g = 'undefined' === typeof i[u]),
              (g || h > d) && ((i[u] = d), p.push(u, d), (o[u] = a)));
        if ('undefined' !== typeof r && 'undefined' === typeof i[r]) {
          var m = ['Could not find a path from ', e, ' to ', r, '.'].join('');
          throw new Error(m);
        }
        return o;
      },
      extract_shortest_path_from_predecessor_list: function (t, e) {
        var r = [],
          n = e;
        while (n) r.push(n), t[n], (n = t[n]);
        return r.reverse(), r;
      },
      find_path: function (t, e, r) {
        var o = n.single_source_shortest_paths(t, e, r);
        return n.extract_shortest_path_from_predecessor_list(o, r);
      },
      PriorityQueue: {
        make: function (t) {
          var e,
            r = n.PriorityQueue,
            o = {};
          for (e in ((t = t || {}), r)) r.hasOwnProperty(e) && (o[e] = r[e]);
          return (o.queue = []), (o.sorter = t.sorter || r.default_sorter), o;
        },
        default_sorter: function (t, e) {
          return t.cost - e.cost;
        },
        push: function (t, e) {
          var r = { value: t, cost: e };
          this.queue.push(r), this.queue.sort(this.sorter);
        },
        pop: function () {
          return this.queue.shift();
        },
        empty: function () {
          return 0 === this.queue.length;
        },
      },
    };
    1 && (t.exports = n);
  },
  '../../../node_modules/ieee754/index.js': function (t, e) {
    (e.read = function (t, e, r, n, o) {
      var i,
        s,
        a = 8 * o - n - 1,
        u = (1 << a) - 1,
        c = u >> 1,
        f = -7,
        l = r ? o - 1 : 0,
        d = r ? -1 : 1,
        h = t[e + l];
      for (
        l += d, i = h & ((1 << -f) - 1), h >>= -f, f += a;
        f > 0;
        i = 256 * i + t[e + l], l += d, f -= 8
      );
      for (
        s = i & ((1 << -f) - 1), i >>= -f, f += n;
        f > 0;
        s = 256 * s + t[e + l], l += d, f -= 8
      );
      if (0 === i) i = 1 - c;
      else {
        if (i === u) return s ? NaN : (h ? -1 : 1) * (1 / 0);
        (s += Math.pow(2, n)), (i -= c);
      }
      return (h ? -1 : 1) * s * Math.pow(2, i - n);
    }),
      (e.write = function (t, e, r, n, o, i) {
        var s,
          a,
          u,
          c = 8 * i - o - 1,
          f = (1 << c) - 1,
          l = f >> 1,
          d = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          h = n ? 0 : i - 1,
          g = n ? 1 : -1,
          p = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
        for (
          e = Math.abs(e),
            isNaN(e) || e === 1 / 0
              ? ((a = isNaN(e) ? 1 : 0), (s = f))
              : ((s = Math.floor(Math.log(e) / Math.LN2)),
                e * (u = Math.pow(2, -s)) < 1 && (s--, (u *= 2)),
                (e += s + l >= 1 ? d / u : d * Math.pow(2, 1 - l)),
                e * u >= 2 && (s++, (u /= 2)),
                s + l >= f
                  ? ((a = 0), (s = f))
                  : s + l >= 1
                  ? ((a = (e * u - 1) * Math.pow(2, o)), (s += l))
                  : ((a = e * Math.pow(2, l - 1) * Math.pow(2, o)), (s = 0)));
          o >= 8;
          t[r + h] = 255 & a, h += g, a /= 256, o -= 8
        );
        for (
          s = (s << o) | a, c += o;
          c > 0;
          t[r + h] = 255 & s, h += g, s /= 256, c -= 8
        );
        t[r + h - g] |= 128 * p;
      });
  },
  '../../../node_modules/isarray/index.js': function (t, e) {
    var r = {}.toString;
    t.exports =
      Array.isArray ||
      function (t) {
        return '[object Array]' == r.call(t);
      };
  },
  '../../../node_modules/node-libs-browser/node_modules/buffer/index.js': function (
    t,
    e,
    r
  ) {
    'use strict';
    (function (t) {
      var n = r('../../../node_modules/base64-js/index.js'),
        o = r('../../../node_modules/ieee754/index.js'),
        i = r('../../../node_modules/isarray/index.js');
      function s() {
        try {
          var t = new Uint8Array(1);
          return (
            (t.__proto__ = {
              __proto__: Uint8Array.prototype,
              foo: function () {
                return 42;
              },
            }),
            42 === t.foo() &&
              'function' === typeof t.subarray &&
              0 === t.subarray(1, 1).byteLength
          );
        } catch (t) {
          return !1;
        }
      }
      function a() {
        return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
      }
      function u(t, e) {
        if (a() < e) throw new RangeError('Invalid typed array length');
        return (
          c.TYPED_ARRAY_SUPPORT
            ? ((t = new Uint8Array(e)), (t.__proto__ = c.prototype))
            : (null === t && (t = new c(e)), (t.length = e)),
          t
        );
      }
      function c(t, e, r) {
        if (!c.TYPED_ARRAY_SUPPORT && !(this instanceof c))
          return new c(t, e, r);
        if ('number' === typeof t) {
          if ('string' === typeof e)
            throw new Error(
              'If encoding is specified then the first argument must be a string'
            );
          return h(this, t);
        }
        return f(this, t, e, r);
      }
      function f(t, e, r, n) {
        if ('number' === typeof e)
          throw new TypeError('"value" argument must not be a number');
        return 'undefined' !== typeof ArrayBuffer && e instanceof ArrayBuffer
          ? m(t, e, r, n)
          : 'string' === typeof e
          ? g(t, e, r)
          : y(t, e);
      }
      function l(t) {
        if ('number' !== typeof t)
          throw new TypeError('"size" argument must be a number');
        if (t < 0) throw new RangeError('"size" argument must not be negative');
      }
      function d(t, e, r, n) {
        return (
          l(e),
          e <= 0
            ? u(t, e)
            : void 0 !== r
            ? 'string' === typeof n
              ? u(t, e).fill(r, n)
              : u(t, e).fill(r)
            : u(t, e)
        );
      }
      function h(t, e) {
        if ((l(e), (t = u(t, e < 0 ? 0 : 0 | v(e))), !c.TYPED_ARRAY_SUPPORT))
          for (var r = 0; r < e; ++r) t[r] = 0;
        return t;
      }
      function g(t, e, r) {
        if (
          (('string' === typeof r && '' !== r) || (r = 'utf8'),
          !c.isEncoding(r))
        )
          throw new TypeError('"encoding" must be a valid string encoding');
        var n = 0 | b(e, r);
        t = u(t, n);
        var o = t.write(e, r);
        return o !== n && (t = t.slice(0, o)), t;
      }
      function p(t, e) {
        var r = e.length < 0 ? 0 : 0 | v(e.length);
        t = u(t, r);
        for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];
        return t;
      }
      function m(t, e, r, n) {
        if ((e.byteLength, r < 0 || e.byteLength < r))
          throw new RangeError("'offset' is out of bounds");
        if (e.byteLength < r + (n || 0))
          throw new RangeError("'length' is out of bounds");
        return (
          (e =
            void 0 === r && void 0 === n
              ? new Uint8Array(e)
              : void 0 === n
              ? new Uint8Array(e, r)
              : new Uint8Array(e, r, n)),
          c.TYPED_ARRAY_SUPPORT
            ? ((t = e), (t.__proto__ = c.prototype))
            : (t = p(t, e)),
          t
        );
      }
      function y(t, e) {
        if (c.isBuffer(e)) {
          var r = 0 | v(e.length);
          return (t = u(t, r)), 0 === t.length ? t : (e.copy(t, 0, 0, r), t);
        }
        if (e) {
          if (
            ('undefined' !== typeof ArrayBuffer &&
              e.buffer instanceof ArrayBuffer) ||
            'length' in e
          )
            return 'number' !== typeof e.length || et(e.length)
              ? u(t, 0)
              : p(t, e);
          if ('Buffer' === e.type && i(e.data)) return p(t, e.data);
        }
        throw new TypeError(
          'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
        );
      }
      function v(t) {
        if (t >= a())
          throw new RangeError(
            'Attempt to allocate Buffer larger than maximum ' +
              'size: 0x' +
              a().toString(16) +
              ' bytes'
          );
        return 0 | t;
      }
      function w(t) {
        return +t != t && (t = 0), c.alloc(+t);
      }
      function b(t, e) {
        if (c.isBuffer(t)) return t.length;
        if (
          'undefined' !== typeof ArrayBuffer &&
          'function' === typeof ArrayBuffer.isView &&
          (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
        )
          return t.byteLength;
        'string' !== typeof t && (t = '' + t);
        var r = t.length;
        if (0 === r) return 0;
        for (var n = !1; ; )
          switch (e) {
            case 'ascii':
            case 'latin1':
            case 'binary':
              return r;
            case 'utf8':
            case 'utf-8':
            case void 0:
              return X(t).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return 2 * r;
            case 'hex':
              return r >>> 1;
            case 'base64':
              return G(t).length;
            default:
              if (n) return X(t).length;
              (e = ('' + e).toLowerCase()), (n = !0);
          }
      }
      function _(t, e, r) {
        var n = !1;
        if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return '';
        if (((void 0 === r || r > this.length) && (r = this.length), r <= 0))
          return '';
        if (((r >>>= 0), (e >>>= 0), r <= e)) return '';
        t || (t = 'utf8');
        while (1)
          switch (t) {
            case 'hex':
              return N(this, e, r);
            case 'utf8':
            case 'utf-8':
              return S(this, e, r);
            case 'ascii':
              return M(this, e, r);
            case 'latin1':
            case 'binary':
              return L(this, e, r);
            case 'base64':
              return x(this, e, r);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return k(this, e, r);
            default:
              if (n) throw new TypeError('Unknown encoding: ' + t);
              (t = (t + '').toLowerCase()), (n = !0);
          }
      }
      function E(t, e, r) {
        var n = t[e];
        (t[e] = t[r]), (t[r] = n);
      }
      function A(t, e, r, n, o) {
        if (0 === t.length) return -1;
        if (
          ('string' === typeof r
            ? ((n = r), (r = 0))
            : r > 2147483647
            ? (r = 2147483647)
            : r < -2147483648 && (r = -2147483648),
          (r = +r),
          isNaN(r) && (r = o ? 0 : t.length - 1),
          r < 0 && (r = t.length + r),
          r >= t.length)
        ) {
          if (o) return -1;
          r = t.length - 1;
        } else if (r < 0) {
          if (!o) return -1;
          r = 0;
        }
        if (('string' === typeof e && (e = c.from(e, n)), c.isBuffer(e)))
          return 0 === e.length ? -1 : P(t, e, r, n, o);
        if ('number' === typeof e)
          return (
            (e &= 255),
            c.TYPED_ARRAY_SUPPORT &&
            'function' === typeof Uint8Array.prototype.indexOf
              ? o
                ? Uint8Array.prototype.indexOf.call(t, e, r)
                : Uint8Array.prototype.lastIndexOf.call(t, e, r)
              : P(t, [e], r, n, o)
          );
        throw new TypeError('val must be string, number or Buffer');
      }
      function P(t, e, r, n, o) {
        var i,
          s = 1,
          a = t.length,
          u = e.length;
        if (
          void 0 !== n &&
          ((n = String(n).toLowerCase()),
          'ucs2' === n || 'ucs-2' === n || 'utf16le' === n || 'utf-16le' === n)
        ) {
          if (t.length < 2 || e.length < 2) return -1;
          (s = 2), (a /= 2), (u /= 2), (r /= 2);
        }
        function c(t, e) {
          return 1 === s ? t[e] : t.readUInt16BE(e * s);
        }
        if (o) {
          var f = -1;
          for (i = r; i < a; i++)
            if (c(t, i) === c(e, -1 === f ? 0 : i - f)) {
              if ((-1 === f && (f = i), i - f + 1 === u)) return f * s;
            } else -1 !== f && (i -= i - f), (f = -1);
        } else
          for (r + u > a && (r = a - u), i = r; i >= 0; i--) {
            for (var l = !0, d = 0; d < u; d++)
              if (c(t, i + d) !== c(e, d)) {
                l = !1;
                break;
              }
            if (l) return i;
          }
        return -1;
      }
      function R(t, e, r, n) {
        r = Number(r) || 0;
        var o = t.length - r;
        n ? ((n = Number(n)), n > o && (n = o)) : (n = o);
        var i = e.length;
        if (i % 2 !== 0) throw new TypeError('Invalid hex string');
        n > i / 2 && (n = i / 2);
        for (var s = 0; s < n; ++s) {
          var a = parseInt(e.substr(2 * s, 2), 16);
          if (isNaN(a)) return s;
          t[r + s] = a;
        }
        return s;
      }
      function B(t, e, r, n) {
        return tt(X(e, t.length - r), t, r, n);
      }
      function T(t, e, r, n) {
        return tt(W(e), t, r, n);
      }
      function j(t, e, r, n) {
        return T(t, e, r, n);
      }
      function C(t, e, r, n) {
        return tt(G(e), t, r, n);
      }
      function I(t, e, r, n) {
        return tt(Z(e, t.length - r), t, r, n);
      }
      function x(t, e, r) {
        return 0 === e && r === t.length
          ? n.fromByteArray(t)
          : n.fromByteArray(t.slice(e, r));
      }
      function S(t, e, r) {
        r = Math.min(t.length, r);
        var n = [],
          o = e;
        while (o < r) {
          var i,
            s,
            a,
            u,
            c = t[o],
            f = null,
            l = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
          if (o + l <= r)
            switch (l) {
              case 1:
                c < 128 && (f = c);
                break;
              case 2:
                (i = t[o + 1]),
                  128 === (192 & i) &&
                    ((u = ((31 & c) << 6) | (63 & i)), u > 127 && (f = u));
                break;
              case 3:
                (i = t[o + 1]),
                  (s = t[o + 2]),
                  128 === (192 & i) &&
                    128 === (192 & s) &&
                    ((u = ((15 & c) << 12) | ((63 & i) << 6) | (63 & s)),
                    u > 2047 && (u < 55296 || u > 57343) && (f = u));
                break;
              case 4:
                (i = t[o + 1]),
                  (s = t[o + 2]),
                  (a = t[o + 3]),
                  128 === (192 & i) &&
                    128 === (192 & s) &&
                    128 === (192 & a) &&
                    ((u =
                      ((15 & c) << 18) |
                      ((63 & i) << 12) |
                      ((63 & s) << 6) |
                      (63 & a)),
                    u > 65535 && u < 1114112 && (f = u));
            }
          null === f
            ? ((f = 65533), (l = 1))
            : f > 65535 &&
              ((f -= 65536),
              n.push(((f >>> 10) & 1023) | 55296),
              (f = 56320 | (1023 & f))),
            n.push(f),
            (o += l);
        }
        return U(n);
      }
      (e.Buffer = c),
        (e.SlowBuffer = w),
        (e.INSPECT_MAX_BYTES = 50),
        (c.TYPED_ARRAY_SUPPORT =
          void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : s()),
        (e.kMaxLength = a()),
        (c.poolSize = 8192),
        (c._augment = function (t) {
          return (t.__proto__ = c.prototype), t;
        }),
        (c.from = function (t, e, r) {
          return f(null, t, e, r);
        }),
        c.TYPED_ARRAY_SUPPORT &&
          ((c.prototype.__proto__ = Uint8Array.prototype),
          (c.__proto__ = Uint8Array),
          'undefined' !== typeof Symbol &&
            Symbol.species &&
            c[Symbol.species] === c &&
            Object.defineProperty(c, Symbol.species, {
              value: null,
              configurable: !0,
            })),
        (c.alloc = function (t, e, r) {
          return d(null, t, e, r);
        }),
        (c.allocUnsafe = function (t) {
          return h(null, t);
        }),
        (c.allocUnsafeSlow = function (t) {
          return h(null, t);
        }),
        (c.isBuffer = function t(e) {
          return !(null == e || !e._isBuffer);
        }),
        (c.compare = function t(e, r) {
          if (!c.isBuffer(e) || !c.isBuffer(r))
            throw new TypeError('Arguments must be Buffers');
          if (e === r) return 0;
          for (
            var n = e.length, o = r.length, i = 0, s = Math.min(n, o);
            i < s;
            ++i
          )
            if (e[i] !== r[i]) {
              (n = e[i]), (o = r[i]);
              break;
            }
          return n < o ? -1 : o < n ? 1 : 0;
        }),
        (c.isEncoding = function t(e) {
          switch (String(e).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return !0;
            default:
              return !1;
          }
        }),
        (c.concat = function t(e, r) {
          if (!i(e))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === e.length) return c.alloc(0);
          var n;
          if (void 0 === r)
            for (r = 0, n = 0; n < e.length; ++n) r += e[n].length;
          var o = c.allocUnsafe(r),
            s = 0;
          for (n = 0; n < e.length; ++n) {
            var a = e[n];
            if (!c.isBuffer(a))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            a.copy(o, s), (s += a.length);
          }
          return o;
        }),
        (c.byteLength = b),
        (c.prototype._isBuffer = !0),
        (c.prototype.swap16 = function t() {
          var e = this.length;
          if (e % 2 !== 0)
            throw new RangeError('Buffer size must be a multiple of 16-bits');
          for (var r = 0; r < e; r += 2) E(this, r, r + 1);
          return this;
        }),
        (c.prototype.swap32 = function t() {
          var e = this.length;
          if (e % 4 !== 0)
            throw new RangeError('Buffer size must be a multiple of 32-bits');
          for (var r = 0; r < e; r += 4)
            E(this, r, r + 3), E(this, r + 1, r + 2);
          return this;
        }),
        (c.prototype.swap64 = function t() {
          var e = this.length;
          if (e % 8 !== 0)
            throw new RangeError('Buffer size must be a multiple of 64-bits');
          for (var r = 0; r < e; r += 8)
            E(this, r, r + 7),
              E(this, r + 1, r + 6),
              E(this, r + 2, r + 5),
              E(this, r + 3, r + 4);
          return this;
        }),
        (c.prototype.toString = function t() {
          var e = 0 | this.length;
          return 0 === e
            ? ''
            : 0 === arguments.length
            ? S(this, 0, e)
            : _.apply(this, arguments);
        }),
        (c.prototype.equals = function t(e) {
          if (!c.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
          return this === e || 0 === c.compare(this, e);
        }),
        (c.prototype.inspect = function t() {
          var r = '',
            n = e.INSPECT_MAX_BYTES;
          return (
            this.length > 0 &&
              ((r = this.toString('hex', 0, n).match(/.{2}/g).join(' ')),
              this.length > n && (r += ' ... ')),
            '<Buffer ' + r + '>'
          );
        }),
        (c.prototype.compare = function t(e, r, n, o, i) {
          if (!c.isBuffer(e)) throw new TypeError('Argument must be a Buffer');
          if (
            (void 0 === r && (r = 0),
            void 0 === n && (n = e ? e.length : 0),
            void 0 === o && (o = 0),
            void 0 === i && (i = this.length),
            r < 0 || n > e.length || o < 0 || i > this.length)
          )
            throw new RangeError('out of range index');
          if (o >= i && r >= n) return 0;
          if (o >= i) return -1;
          if (r >= n) return 1;
          if (((r >>>= 0), (n >>>= 0), (o >>>= 0), (i >>>= 0), this === e))
            return 0;
          for (
            var s = i - o,
              a = n - r,
              u = Math.min(s, a),
              f = this.slice(o, i),
              l = e.slice(r, n),
              d = 0;
            d < u;
            ++d
          )
            if (f[d] !== l[d]) {
              (s = f[d]), (a = l[d]);
              break;
            }
          return s < a ? -1 : a < s ? 1 : 0;
        }),
        (c.prototype.includes = function t(e, r, n) {
          return -1 !== this.indexOf(e, r, n);
        }),
        (c.prototype.indexOf = function t(e, r, n) {
          return A(this, e, r, n, !0);
        }),
        (c.prototype.lastIndexOf = function t(e, r, n) {
          return A(this, e, r, n, !1);
        }),
        (c.prototype.write = function t(e, r, n, o) {
          if (void 0 === r) (o = 'utf8'), (n = this.length), (r = 0);
          else if (void 0 === n && 'string' === typeof r)
            (o = r), (n = this.length), (r = 0);
          else {
            if (!isFinite(r))
              throw new Error(
                'Buffer.write(string, encoding, offset[, length]) is no longer supported'
              );
            (r |= 0),
              isFinite(n)
                ? ((n |= 0), void 0 === o && (o = 'utf8'))
                : ((o = n), (n = void 0));
          }
          var i = this.length - r;
          if (
            ((void 0 === n || n > i) && (n = i),
            (e.length > 0 && (n < 0 || r < 0)) || r > this.length)
          )
            throw new RangeError('Attempt to write outside buffer bounds');
          o || (o = 'utf8');
          for (var s = !1; ; )
            switch (o) {
              case 'hex':
                return R(this, e, r, n);
              case 'utf8':
              case 'utf-8':
                return B(this, e, r, n);
              case 'ascii':
                return T(this, e, r, n);
              case 'latin1':
              case 'binary':
                return j(this, e, r, n);
              case 'base64':
                return C(this, e, r, n);
              case 'ucs2':
              case 'ucs-2':
              case 'utf16le':
              case 'utf-16le':
                return I(this, e, r, n);
              default:
                if (s) throw new TypeError('Unknown encoding: ' + o);
                (o = ('' + o).toLowerCase()), (s = !0);
            }
        }),
        (c.prototype.toJSON = function t() {
          return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      var q = 4096;
      function U(t) {
        var e = t.length;
        if (e <= q) return String.fromCharCode.apply(String, t);
        var r = '',
          n = 0;
        while (n < e)
          r += String.fromCharCode.apply(String, t.slice(n, (n += q)));
        return r;
      }
      function M(t, e, r) {
        var n = '';
        r = Math.min(t.length, r);
        for (var o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
        return n;
      }
      function L(t, e, r) {
        var n = '';
        r = Math.min(t.length, r);
        for (var o = e; o < r; ++o) n += String.fromCharCode(t[o]);
        return n;
      }
      function N(t, e, r) {
        var n = t.length;
        (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
        for (var o = '', i = e; i < r; ++i) o += Q(t[i]);
        return o;
      }
      function k(t, e, r) {
        for (var n = t.slice(e, r), o = '', i = 0; i < n.length; i += 2)
          o += String.fromCharCode(n[i] + 256 * n[i + 1]);
        return o;
      }
      function Y(t, e, r) {
        if (t % 1 !== 0 || t < 0) throw new RangeError('offset is not uint');
        if (t + e > r)
          throw new RangeError('Trying to access beyond buffer length');
      }
      function O(t, e, r, n, o, i) {
        if (!c.isBuffer(t))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (e > o || e < i)
          throw new RangeError('"value" argument is out of bounds');
        if (r + n > t.length) throw new RangeError('Index out of range');
      }
      function D(t, e, r, n) {
        e < 0 && (e = 65535 + e + 1);
        for (var o = 0, i = Math.min(t.length - r, 2); o < i; ++o)
          t[r + o] =
            (e & (255 << (8 * (n ? o : 1 - o)))) >>> (8 * (n ? o : 1 - o));
      }
      function z(t, e, r, n) {
        e < 0 && (e = 4294967295 + e + 1);
        for (var o = 0, i = Math.min(t.length - r, 4); o < i; ++o)
          t[r + o] = (e >>> (8 * (n ? o : 3 - o))) & 255;
      }
      function F(t, e, r, n, o, i) {
        if (r + n > t.length) throw new RangeError('Index out of range');
        if (r < 0) throw new RangeError('Index out of range');
      }
      function H(t, e, r, n, i) {
        return (
          i || F(t, e, r, 4, 34028234663852886e22, -34028234663852886e22),
          o.write(t, e, r, n, 23, 4),
          r + 4
        );
      }
      function $(t, e, r, n, i) {
        return (
          i || F(t, e, r, 8, 17976931348623157e292, -17976931348623157e292),
          o.write(t, e, r, n, 52, 8),
          r + 8
        );
      }
      (c.prototype.slice = function t(e, r) {
        var n,
          o = this.length;
        if (
          ((e = ~~e),
          (r = void 0 === r ? o : ~~r),
          e < 0 ? ((e += o), e < 0 && (e = 0)) : e > o && (e = o),
          r < 0 ? ((r += o), r < 0 && (r = 0)) : r > o && (r = o),
          r < e && (r = e),
          c.TYPED_ARRAY_SUPPORT)
        )
          (n = this.subarray(e, r)), (n.__proto__ = c.prototype);
        else {
          var i = r - e;
          n = new c(i, void 0);
          for (var s = 0; s < i; ++s) n[s] = this[s + e];
        }
        return n;
      }),
        (c.prototype.readUIntLE = function t(e, r, n) {
          (e |= 0), (r |= 0), n || Y(e, r, this.length);
          var o = this[e],
            i = 1,
            s = 0;
          while (++s < r && (i *= 256)) o += this[e + s] * i;
          return o;
        }),
        (c.prototype.readUIntBE = function t(e, r, n) {
          (e |= 0), (r |= 0), n || Y(e, r, this.length);
          var o = this[e + --r],
            i = 1;
          while (r > 0 && (i *= 256)) o += this[e + --r] * i;
          return o;
        }),
        (c.prototype.readUInt8 = function t(e, r) {
          return r || Y(e, 1, this.length), this[e];
        }),
        (c.prototype.readUInt16LE = function t(e, r) {
          return r || Y(e, 2, this.length), this[e] | (this[e + 1] << 8);
        }),
        (c.prototype.readUInt16BE = function t(e, r) {
          return r || Y(e, 2, this.length), (this[e] << 8) | this[e + 1];
        }),
        (c.prototype.readUInt32LE = function t(e, r) {
          return (
            r || Y(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              16777216 * this[e + 3]
          );
        }),
        (c.prototype.readUInt32BE = function t(e, r) {
          return (
            r || Y(e, 4, this.length),
            16777216 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          );
        }),
        (c.prototype.readIntLE = function t(e, r, n) {
          (e |= 0), (r |= 0), n || Y(e, r, this.length);
          var o = this[e],
            i = 1,
            s = 0;
          while (++s < r && (i *= 256)) o += this[e + s] * i;
          return (i *= 128), o >= i && (o -= Math.pow(2, 8 * r)), o;
        }),
        (c.prototype.readIntBE = function t(e, r, n) {
          (e |= 0), (r |= 0), n || Y(e, r, this.length);
          var o = r,
            i = 1,
            s = this[e + --o];
          while (o > 0 && (i *= 256)) s += this[e + --o] * i;
          return (i *= 128), s >= i && (s -= Math.pow(2, 8 * r)), s;
        }),
        (c.prototype.readInt8 = function t(e, r) {
          return (
            r || Y(e, 1, this.length),
            128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
          );
        }),
        (c.prototype.readInt16LE = function t(e, r) {
          r || Y(e, 2, this.length);
          var n = this[e] | (this[e + 1] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (c.prototype.readInt16BE = function t(e, r) {
          r || Y(e, 2, this.length);
          var n = this[e + 1] | (this[e] << 8);
          return 32768 & n ? 4294901760 | n : n;
        }),
        (c.prototype.readInt32LE = function t(e, r) {
          return (
            r || Y(e, 4, this.length),
            this[e] |
              (this[e + 1] << 8) |
              (this[e + 2] << 16) |
              (this[e + 3] << 24)
          );
        }),
        (c.prototype.readInt32BE = function t(e, r) {
          return (
            r || Y(e, 4, this.length),
            (this[e] << 24) |
              (this[e + 1] << 16) |
              (this[e + 2] << 8) |
              this[e + 3]
          );
        }),
        (c.prototype.readFloatLE = function t(e, r) {
          return r || Y(e, 4, this.length), o.read(this, e, !0, 23, 4);
        }),
        (c.prototype.readFloatBE = function t(e, r) {
          return r || Y(e, 4, this.length), o.read(this, e, !1, 23, 4);
        }),
        (c.prototype.readDoubleLE = function t(e, r) {
          return r || Y(e, 8, this.length), o.read(this, e, !0, 52, 8);
        }),
        (c.prototype.readDoubleBE = function t(e, r) {
          return r || Y(e, 8, this.length), o.read(this, e, !1, 52, 8);
        }),
        (c.prototype.writeUIntLE = function t(e, r, n, o) {
          if (((e = +e), (r |= 0), (n |= 0), !o)) {
            var i = Math.pow(2, 8 * n) - 1;
            O(this, e, r, n, i, 0);
          }
          var s = 1,
            a = 0;
          this[r] = 255 & e;
          while (++a < n && (s *= 256)) this[r + a] = (e / s) & 255;
          return r + n;
        }),
        (c.prototype.writeUIntBE = function t(e, r, n, o) {
          if (((e = +e), (r |= 0), (n |= 0), !o)) {
            var i = Math.pow(2, 8 * n) - 1;
            O(this, e, r, n, i, 0);
          }
          var s = n - 1,
            a = 1;
          this[r + s] = 255 & e;
          while (--s >= 0 && (a *= 256)) this[r + s] = (e / a) & 255;
          return r + n;
        }),
        (c.prototype.writeUInt8 = function t(e, r, n) {
          return (
            (e = +e),
            (r |= 0),
            n || O(this, e, r, 1, 255, 0),
            c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            (this[r] = 255 & e),
            r + 1
          );
        }),
        (c.prototype.writeUInt16LE = function t(e, r, n) {
          return (
            (e = +e),
            (r |= 0),
            n || O(this, e, r, 2, 65535, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[r] = 255 & e), (this[r + 1] = e >>> 8))
              : D(this, e, r, !0),
            r + 2
          );
        }),
        (c.prototype.writeUInt16BE = function t(e, r, n) {
          return (
            (e = +e),
            (r |= 0),
            n || O(this, e, r, 2, 65535, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[r] = e >>> 8), (this[r + 1] = 255 & e))
              : D(this, e, r, !1),
            r + 2
          );
        }),
        (c.prototype.writeUInt32LE = function t(e, r, n) {
          return (
            (e = +e),
            (r |= 0),
            n || O(this, e, r, 4, 4294967295, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[r + 3] = e >>> 24),
                (this[r + 2] = e >>> 16),
                (this[r + 1] = e >>> 8),
                (this[r] = 255 & e))
              : z(this, e, r, !0),
            r + 4
          );
        }),
        (c.prototype.writeUInt32BE = function t(e, r, n) {
          return (
            (e = +e),
            (r |= 0),
            n || O(this, e, r, 4, 4294967295, 0),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[r] = e >>> 24),
                (this[r + 1] = e >>> 16),
                (this[r + 2] = e >>> 8),
                (this[r + 3] = 255 & e))
              : z(this, e, r, !1),
            r + 4
          );
        }),
        (c.prototype.writeIntLE = function t(e, r, n, o) {
          if (((e = +e), (r |= 0), !o)) {
            var i = Math.pow(2, 8 * n - 1);
            O(this, e, r, n, i - 1, -i);
          }
          var s = 0,
            a = 1,
            u = 0;
          this[r] = 255 & e;
          while (++s < n && (a *= 256))
            e < 0 && 0 === u && 0 !== this[r + s - 1] && (u = 1),
              (this[r + s] = (((e / a) >> 0) - u) & 255);
          return r + n;
        }),
        (c.prototype.writeIntBE = function t(e, r, n, o) {
          if (((e = +e), (r |= 0), !o)) {
            var i = Math.pow(2, 8 * n - 1);
            O(this, e, r, n, i - 1, -i);
          }
          var s = n - 1,
            a = 1,
            u = 0;
          this[r + s] = 255 & e;
          while (--s >= 0 && (a *= 256))
            e < 0 && 0 === u && 0 !== this[r + s + 1] && (u = 1),
              (this[r + s] = (((e / a) >> 0) - u) & 255);
          return r + n;
        }),
        (c.prototype.writeInt8 = function t(e, r, n) {
          return (
            (e = +e),
            (r |= 0),
            n || O(this, e, r, 1, 127, -128),
            c.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
            e < 0 && (e = 255 + e + 1),
            (this[r] = 255 & e),
            r + 1
          );
        }),
        (c.prototype.writeInt16LE = function t(e, r, n) {
          return (
            (e = +e),
            (r |= 0),
            n || O(this, e, r, 2, 32767, -32768),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[r] = 255 & e), (this[r + 1] = e >>> 8))
              : D(this, e, r, !0),
            r + 2
          );
        }),
        (c.prototype.writeInt16BE = function t(e, r, n) {
          return (
            (e = +e),
            (r |= 0),
            n || O(this, e, r, 2, 32767, -32768),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[r] = e >>> 8), (this[r + 1] = 255 & e))
              : D(this, e, r, !1),
            r + 2
          );
        }),
        (c.prototype.writeInt32LE = function t(e, r, n) {
          return (
            (e = +e),
            (r |= 0),
            n || O(this, e, r, 4, 2147483647, -2147483648),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[r] = 255 & e),
                (this[r + 1] = e >>> 8),
                (this[r + 2] = e >>> 16),
                (this[r + 3] = e >>> 24))
              : z(this, e, r, !0),
            r + 4
          );
        }),
        (c.prototype.writeInt32BE = function t(e, r, n) {
          return (
            (e = +e),
            (r |= 0),
            n || O(this, e, r, 4, 2147483647, -2147483648),
            e < 0 && (e = 4294967295 + e + 1),
            c.TYPED_ARRAY_SUPPORT
              ? ((this[r] = e >>> 24),
                (this[r + 1] = e >>> 16),
                (this[r + 2] = e >>> 8),
                (this[r + 3] = 255 & e))
              : z(this, e, r, !1),
            r + 4
          );
        }),
        (c.prototype.writeFloatLE = function t(e, r, n) {
          return H(this, e, r, !0, n);
        }),
        (c.prototype.writeFloatBE = function t(e, r, n) {
          return H(this, e, r, !1, n);
        }),
        (c.prototype.writeDoubleLE = function t(e, r, n) {
          return $(this, e, r, !0, n);
        }),
        (c.prototype.writeDoubleBE = function t(e, r, n) {
          return $(this, e, r, !1, n);
        }),
        (c.prototype.copy = function t(e, r, n, o) {
          if (
            (n || (n = 0),
            o || 0 === o || (o = this.length),
            r >= e.length && (r = e.length),
            r || (r = 0),
            o > 0 && o < n && (o = n),
            o === n)
          )
            return 0;
          if (0 === e.length || 0 === this.length) return 0;
          if (r < 0) throw new RangeError('targetStart out of bounds');
          if (n < 0 || n >= this.length)
            throw new RangeError('sourceStart out of bounds');
          if (o < 0) throw new RangeError('sourceEnd out of bounds');
          o > this.length && (o = this.length),
            e.length - r < o - n && (o = e.length - r + n);
          var i,
            s = o - n;
          if (this === e && n < r && r < o)
            for (i = s - 1; i >= 0; --i) e[i + r] = this[i + n];
          else if (s < 1e3 || !c.TYPED_ARRAY_SUPPORT)
            for (i = 0; i < s; ++i) e[i + r] = this[i + n];
          else Uint8Array.prototype.set.call(e, this.subarray(n, n + s), r);
          return s;
        }),
        (c.prototype.fill = function t(e, r, n, o) {
          if ('string' === typeof e) {
            if (
              ('string' === typeof r
                ? ((o = r), (r = 0), (n = this.length))
                : 'string' === typeof n && ((o = n), (n = this.length)),
              1 === e.length)
            ) {
              var i = e.charCodeAt(0);
              i < 256 && (e = i);
            }
            if (void 0 !== o && 'string' !== typeof o)
              throw new TypeError('encoding must be a string');
            if ('string' === typeof o && !c.isEncoding(o))
              throw new TypeError('Unknown encoding: ' + o);
          } else 'number' === typeof e && (e &= 255);
          if (r < 0 || this.length < r || this.length < n)
            throw new RangeError('Out of range index');
          if (n <= r) return this;
          var s;
          if (
            ((r >>>= 0),
            (n = void 0 === n ? this.length : n >>> 0),
            e || (e = 0),
            'number' === typeof e)
          )
            for (s = r; s < n; ++s) this[s] = e;
          else {
            var a = c.isBuffer(e) ? e : X(new c(e, o).toString()),
              u = a.length;
            for (s = 0; s < n - r; ++s) this[s + r] = a[s % u];
          }
          return this;
        });
      var J = /[^+\/0-9A-Za-z-_]/g;
      function K(t) {
        if (((t = V(t).replace(J, '')), t.length < 2)) return '';
        while (t.length % 4 !== 0) t += '=';
        return t;
      }
      function V(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, '');
      }
      function Q(t) {
        return t < 16 ? '0' + t.toString(16) : t.toString(16);
      }
      function X(t, e) {
        var r;
        e = e || 1 / 0;
        for (var n = t.length, o = null, i = [], s = 0; s < n; ++s) {
          if (((r = t.charCodeAt(s)), r > 55295 && r < 57344)) {
            if (!o) {
              if (r > 56319) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              if (s + 1 === n) {
                (e -= 3) > -1 && i.push(239, 191, 189);
                continue;
              }
              o = r;
              continue;
            }
            if (r < 56320) {
              (e -= 3) > -1 && i.push(239, 191, 189), (o = r);
              continue;
            }
            r = (((o - 55296) << 10) | (r - 56320)) + 65536;
          } else o && (e -= 3) > -1 && i.push(239, 191, 189);
          if (((o = null), r < 128)) {
            if ((e -= 1) < 0) break;
            i.push(r);
          } else if (r < 2048) {
            if ((e -= 2) < 0) break;
            i.push((r >> 6) | 192, (63 & r) | 128);
          } else if (r < 65536) {
            if ((e -= 3) < 0) break;
            i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
          } else {
            if (!(r < 1114112)) throw new Error('Invalid code point');
            if ((e -= 4) < 0) break;
            i.push(
              (r >> 18) | 240,
              ((r >> 12) & 63) | 128,
              ((r >> 6) & 63) | 128,
              (63 & r) | 128
            );
          }
        }
        return i;
      }
      function W(t) {
        for (var e = [], r = 0; r < t.length; ++r)
          e.push(255 & t.charCodeAt(r));
        return e;
      }
      function Z(t, e) {
        for (var r, n, o, i = [], s = 0; s < t.length; ++s) {
          if ((e -= 2) < 0) break;
          (r = t.charCodeAt(s)),
            (n = r >> 8),
            (o = r % 256),
            i.push(o),
            i.push(n);
        }
        return i;
      }
      function G(t) {
        return n.toByteArray(K(t));
      }
      function tt(t, e, r, n) {
        for (var o = 0; o < n; ++o) {
          if (o + r >= e.length || o >= t.length) break;
          e[o + r] = t[o];
        }
        return o;
      }
      function et(t) {
        return t !== t;
      }
    }.call(this, r('../../../node_modules/webpack/buildin/global.js')));
  },
  '../../../node_modules/qrcode/lib/browser.js': function (t, e, r) {
    var n = r('../../../node_modules/qrcode/lib/can-promise.js'),
      o = r('../../../node_modules/qrcode/lib/core/qrcode.js'),
      i = r('../../../node_modules/qrcode/lib/renderer/canvas.js'),
      s = r('../../../node_modules/qrcode/lib/renderer/svg-tag.js');
    function a(t, e, r, i, s) {
      var a = [].slice.call(arguments, 1),
        u = a.length,
        c = 'function' === typeof a[u - 1];
      if (!c && !n()) throw new Error('Callback required as last argument');
      if (!c) {
        if (u < 1) throw new Error('Too few arguments provided');
        return (
          1 === u
            ? ((r = e), (e = i = void 0))
            : 2 !== u || e.getContext || ((i = r), (r = e), (e = void 0)),
          new Promise(function (n, s) {
            try {
              var a = o.create(r, i);
              n(t(a, e, i));
            } catch (t) {
              s(t);
            }
          })
        );
      }
      if (u < 2) throw new Error('Too few arguments provided');
      2 === u
        ? ((s = r), (r = e), (e = i = void 0))
        : 3 === u &&
          (e.getContext && 'undefined' === typeof s
            ? ((s = i), (i = void 0))
            : ((s = i), (i = r), (r = e), (e = void 0)));
      try {
        var f = o.create(r, i);
        s(null, t(f, e, i));
      } catch (t) {
        s(t);
      }
    }
    (e.create = o.create),
      (e.toCanvas = a.bind(null, i.render)),
      (e.toDataURL = a.bind(null, i.renderToDataURL)),
      (e.toString = a.bind(null, function (t, e, r) {
        return s.render(t, r);
      }));
  },
  '../../../node_modules/qrcode/lib/can-promise.js': function (t, e) {
    t.exports = function () {
      return (
        'function' === typeof Promise &&
        Promise.prototype &&
        Promise.prototype.then
      );
    };
  },
  '../../../node_modules/qrcode/lib/core/alignment-pattern.js': function (
    t,
    e,
    r
  ) {
    var n = r('../../../node_modules/qrcode/lib/core/utils.js').getSymbolSize;
    (e.getRowColCoords = function t(e) {
      if (1 === e) return [];
      for (
        var r = Math.floor(e / 7) + 2,
          o = n(e),
          i = 145 === o ? 26 : 2 * Math.ceil((o - 13) / (2 * r - 2)),
          s = [o - 7],
          a = 1;
        a < r - 1;
        a++
      )
        s[a] = s[a - 1] - i;
      return s.push(6), s.reverse();
    }),
      (e.getPositions = function t(r) {
        for (
          var n = [], o = e.getRowColCoords(r), i = o.length, s = 0;
          s < i;
          s++
        )
          for (var a = 0; a < i; a++)
            (0 === s && 0 === a) ||
              (0 === s && a === i - 1) ||
              (s === i - 1 && 0 === a) ||
              n.push([o[s], o[a]]);
        return n;
      });
  },
  '../../../node_modules/qrcode/lib/core/alphanumeric-data.js': function (
    t,
    e,
    r
  ) {
    var n = r('../../../node_modules/qrcode/lib/core/mode.js'),
      o = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'G',
        'H',
        'I',
        'J',
        'K',
        'L',
        'M',
        'N',
        'O',
        'P',
        'Q',
        'R',
        'S',
        'T',
        'U',
        'V',
        'W',
        'X',
        'Y',
        'Z',
        ' ',
        '$',
        '%',
        '*',
        '+',
        '-',
        '.',
        '/',
        ':',
      ];
    function i(t) {
      (this.mode = n.ALPHANUMERIC), (this.data = t);
    }
    (i.getBitsLength = function t(e) {
      return 11 * Math.floor(e / 2) + 6 * (e % 2);
    }),
      (i.prototype.getLength = function t() {
        return this.data.length;
      }),
      (i.prototype.getBitsLength = function t() {
        return i.getBitsLength(this.data.length);
      }),
      (i.prototype.write = function t(e) {
        var r;
        for (r = 0; r + 2 <= this.data.length; r += 2) {
          var n = 45 * o.indexOf(this.data[r]);
          (n += o.indexOf(this.data[r + 1])), e.put(n, 11);
        }
        this.data.length % 2 && e.put(o.indexOf(this.data[r]), 6);
      }),
      (t.exports = i);
  },
  '../../../node_modules/qrcode/lib/core/bit-buffer.js': function (t, e) {
    function r() {
      (this.buffer = []), (this.length = 0);
    }
    (r.prototype = {
      get: function (t) {
        var e = Math.floor(t / 8);
        return 1 === ((this.buffer[e] >>> (7 - (t % 8))) & 1);
      },
      put: function (t, e) {
        for (var r = 0; r < e; r++)
          this.putBit(1 === ((t >>> (e - r - 1)) & 1));
      },
      getLengthInBits: function () {
        return this.length;
      },
      putBit: function (t) {
        var e = Math.floor(this.length / 8);
        this.buffer.length <= e && this.buffer.push(0),
          t && (this.buffer[e] |= 128 >>> this.length % 8),
          this.length++;
      },
    }),
      (t.exports = r);
  },
  '../../../node_modules/qrcode/lib/core/bit-matrix.js': function (t, e, r) {
    var n = r('../../../node_modules/qrcode/lib/utils/typedarray-buffer.js');
    function o(t) {
      if (!t || t < 1)
        throw new Error('BitMatrix size must be defined and greater than 0');
      (this.size = t),
        (this.data = n.alloc(t * t)),
        (this.reservedBit = n.alloc(t * t));
    }
    (o.prototype.set = function (t, e, r, n) {
      var o = t * this.size + e;
      (this.data[o] = r), n && (this.reservedBit[o] = !0);
    }),
      (o.prototype.get = function (t, e) {
        return this.data[t * this.size + e];
      }),
      (o.prototype.xor = function (t, e, r) {
        this.data[t * this.size + e] ^= r;
      }),
      (o.prototype.isReserved = function (t, e) {
        return this.reservedBit[t * this.size + e];
      }),
      (t.exports = o);
  },
  '../../../node_modules/qrcode/lib/core/byte-data.js': function (t, e, r) {
    var n = r('../../../node_modules/qrcode/lib/utils/typedarray-buffer.js'),
      o = r('../../../node_modules/qrcode/lib/core/mode.js');
    function i(t) {
      (this.mode = o.BYTE), (this.data = n.from(t));
    }
    (i.getBitsLength = function t(e) {
      return 8 * e;
    }),
      (i.prototype.getLength = function t() {
        return this.data.length;
      }),
      (i.prototype.getBitsLength = function t() {
        return i.getBitsLength(this.data.length);
      }),
      (i.prototype.write = function (t) {
        for (var e = 0, r = this.data.length; e < r; e++)
          t.put(this.data[e], 8);
      }),
      (t.exports = i);
  },
  '../../../node_modules/qrcode/lib/core/error-correction-code.js': function (
    t,
    e,
    r
  ) {
    var n = r(
        '../../../node_modules/qrcode/lib/core/error-correction-level.js'
      ),
      o = [
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        1,
        2,
        2,
        1,
        2,
        2,
        4,
        1,
        2,
        4,
        4,
        2,
        4,
        4,
        4,
        2,
        4,
        6,
        5,
        2,
        4,
        6,
        6,
        2,
        5,
        8,
        8,
        4,
        5,
        8,
        8,
        4,
        5,
        8,
        11,
        4,
        8,
        10,
        11,
        4,
        9,
        12,
        16,
        4,
        9,
        16,
        16,
        6,
        10,
        12,
        18,
        6,
        10,
        17,
        16,
        6,
        11,
        16,
        19,
        6,
        13,
        18,
        21,
        7,
        14,
        21,
        25,
        8,
        16,
        20,
        25,
        8,
        17,
        23,
        25,
        9,
        17,
        23,
        34,
        9,
        18,
        25,
        30,
        10,
        20,
        27,
        32,
        12,
        21,
        29,
        35,
        12,
        23,
        34,
        37,
        12,
        25,
        34,
        40,
        13,
        26,
        35,
        42,
        14,
        28,
        38,
        45,
        15,
        29,
        40,
        48,
        16,
        31,
        43,
        51,
        17,
        33,
        45,
        54,
        18,
        35,
        48,
        57,
        19,
        37,
        51,
        60,
        19,
        38,
        53,
        63,
        20,
        40,
        56,
        66,
        21,
        43,
        59,
        70,
        22,
        45,
        62,
        74,
        24,
        47,
        65,
        77,
        25,
        49,
        68,
        81,
      ],
      i = [
        7,
        10,
        13,
        17,
        10,
        16,
        22,
        28,
        15,
        26,
        36,
        44,
        20,
        36,
        52,
        64,
        26,
        48,
        72,
        88,
        36,
        64,
        96,
        112,
        40,
        72,
        108,
        130,
        48,
        88,
        132,
        156,
        60,
        110,
        160,
        192,
        72,
        130,
        192,
        224,
        80,
        150,
        224,
        264,
        96,
        176,
        260,
        308,
        104,
        198,
        288,
        352,
        120,
        216,
        320,
        384,
        132,
        240,
        360,
        432,
        144,
        280,
        408,
        480,
        168,
        308,
        448,
        532,
        180,
        338,
        504,
        588,
        196,
        364,
        546,
        650,
        224,
        416,
        600,
        700,
        224,
        442,
        644,
        750,
        252,
        476,
        690,
        816,
        270,
        504,
        750,
        900,
        300,
        560,
        810,
        960,
        312,
        588,
        870,
        1050,
        336,
        644,
        952,
        1110,
        360,
        700,
        1020,
        1200,
        390,
        728,
        1050,
        1260,
        420,
        784,
        1140,
        1350,
        450,
        812,
        1200,
        1440,
        480,
        868,
        1290,
        1530,
        510,
        924,
        1350,
        1620,
        540,
        980,
        1440,
        1710,
        570,
        1036,
        1530,
        1800,
        570,
        1064,
        1590,
        1890,
        600,
        1120,
        1680,
        1980,
        630,
        1204,
        1770,
        2100,
        660,
        1260,
        1860,
        2220,
        720,
        1316,
        1950,
        2310,
        750,
        1372,
        2040,
        2430,
      ];
    (e.getBlocksCount = function t(e, r) {
      switch (r) {
        case n.L:
          return o[4 * (e - 1) + 0];
        case n.M:
          return o[4 * (e - 1) + 1];
        case n.Q:
          return o[4 * (e - 1) + 2];
        case n.H:
          return o[4 * (e - 1) + 3];
        default:
          return;
      }
    }),
      (e.getTotalCodewordsCount = function t(e, r) {
        switch (r) {
          case n.L:
            return i[4 * (e - 1) + 0];
          case n.M:
            return i[4 * (e - 1) + 1];
          case n.Q:
            return i[4 * (e - 1) + 2];
          case n.H:
            return i[4 * (e - 1) + 3];
          default:
            return;
        }
      });
  },
  '../../../node_modules/qrcode/lib/core/error-correction-level.js': function (
    t,
    e
  ) {
    function r(t) {
      if ('string' !== typeof t) throw new Error('Param is not a string');
      var r = t.toLowerCase();
      switch (r) {
        case 'l':
        case 'low':
          return e.L;
        case 'm':
        case 'medium':
          return e.M;
        case 'q':
        case 'quartile':
          return e.Q;
        case 'h':
        case 'high':
          return e.H;
        default:
          throw new Error('Unknown EC Level: ' + t);
      }
    }
    (e.L = { bit: 1 }),
      (e.M = { bit: 0 }),
      (e.Q = { bit: 3 }),
      (e.H = { bit: 2 }),
      (e.isValid = function t(e) {
        return e && 'undefined' !== typeof e.bit && e.bit >= 0 && e.bit < 4;
      }),
      (e.from = function t(n, o) {
        if (e.isValid(n)) return n;
        try {
          return r(n);
        } catch (t) {
          return o;
        }
      });
  },
  '../../../node_modules/qrcode/lib/core/finder-pattern.js': function (
    t,
    e,
    r
  ) {
    var n = r('../../../node_modules/qrcode/lib/core/utils.js').getSymbolSize,
      o = 7;
    e.getPositions = function t(e) {
      var r = n(e);
      return [
        [0, 0],
        [r - o, 0],
        [0, r - o],
      ];
    };
  },
  '../../../node_modules/qrcode/lib/core/format-info.js': function (t, e, r) {
    var n = r('../../../node_modules/qrcode/lib/core/utils.js'),
      o =
        (1 << 10) |
        (1 << 8) |
        (1 << 5) |
        (1 << 4) |
        (1 << 2) |
        (1 << 1) |
        (1 << 0),
      i = (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),
      s = n.getBCHDigit(o);
    e.getEncodedBits = function t(e, r) {
      var a = (e.bit << 3) | r,
        u = a << 10;
      while (n.getBCHDigit(u) - s >= 0) u ^= o << (n.getBCHDigit(u) - s);
      return ((a << 10) | u) ^ i;
    };
  },
  '../../../node_modules/qrcode/lib/core/galois-field.js': function (t, e, r) {
    var n = r('../../../node_modules/qrcode/lib/utils/typedarray-buffer.js'),
      o = n.alloc(512),
      i = n.alloc(256);
    (function t() {
      for (var e = 1, r = 0; r < 255; r++)
        (o[r] = e), (i[e] = r), (e <<= 1), 256 & e && (e ^= 285);
      for (r = 255; r < 512; r++) o[r] = o[r - 255];
    })(),
      (e.log = function t(e) {
        if (e < 1) throw new Error('log(' + e + ')');
        return i[e];
      }),
      (e.exp = function t(e) {
        return o[e];
      }),
      (e.mul = function t(e, r) {
        return 0 === e || 0 === r ? 0 : o[i[e] + i[r]];
      });
  },
  '../../../node_modules/qrcode/lib/core/kanji-data.js': function (t, e, r) {
    var n = r('../../../node_modules/qrcode/lib/core/mode.js'),
      o = r('../../../node_modules/qrcode/lib/core/utils.js');
    function i(t) {
      (this.mode = n.KANJI), (this.data = t);
    }
    (i.getBitsLength = function t(e) {
      return 13 * e;
    }),
      (i.prototype.getLength = function t() {
        return this.data.length;
      }),
      (i.prototype.getBitsLength = function t() {
        return i.getBitsLength(this.data.length);
      }),
      (i.prototype.write = function (t) {
        var e;
        for (e = 0; e < this.data.length; e++) {
          var r = o.toSJIS(this.data[e]);
          if (r >= 33088 && r <= 40956) r -= 33088;
          else {
            if (!(r >= 57408 && r <= 60351))
              throw new Error(
                'Invalid SJIS character: ' +
                  this.data[e] +
                  '\n' +
                  'Make sure your charset is UTF-8'
              );
            r -= 49472;
          }
          (r = 192 * ((r >>> 8) & 255) + (255 & r)), t.put(r, 13);
        }
      }),
      (t.exports = i);
  },
  '../../../node_modules/qrcode/lib/core/mask-pattern.js': function (t, e) {
    e.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7,
    };
    var r = { N1: 3, N2: 3, N3: 40, N4: 10 };
    function n(t, r, n) {
      switch (t) {
        case e.Patterns.PATTERN000:
          return (r + n) % 2 === 0;
        case e.Patterns.PATTERN001:
          return r % 2 === 0;
        case e.Patterns.PATTERN010:
          return n % 3 === 0;
        case e.Patterns.PATTERN011:
          return (r + n) % 3 === 0;
        case e.Patterns.PATTERN100:
          return (Math.floor(r / 2) + Math.floor(n / 3)) % 2 === 0;
        case e.Patterns.PATTERN101:
          return ((r * n) % 2) + ((r * n) % 3) === 0;
        case e.Patterns.PATTERN110:
          return (((r * n) % 2) + ((r * n) % 3)) % 2 === 0;
        case e.Patterns.PATTERN111:
          return (((r * n) % 3) + ((r + n) % 2)) % 2 === 0;
        default:
          throw new Error('bad maskPattern:' + t);
      }
    }
    (e.isValid = function t(e) {
      return null != e && '' !== e && !isNaN(e) && e >= 0 && e <= 7;
    }),
      (e.from = function t(r) {
        return e.isValid(r) ? parseInt(r, 10) : void 0;
      }),
      (e.getPenaltyN1 = function t(e) {
        for (
          var n = e.size, o = 0, i = 0, s = 0, a = null, u = null, c = 0;
          c < n;
          c++
        ) {
          (i = s = 0), (a = u = null);
          for (var f = 0; f < n; f++) {
            var l = e.get(c, f);
            l === a ? i++ : (i >= 5 && (o += r.N1 + (i - 5)), (a = l), (i = 1)),
              (l = e.get(f, c)),
              l === u
                ? s++
                : (s >= 5 && (o += r.N1 + (s - 5)), (u = l), (s = 1));
          }
          i >= 5 && (o += r.N1 + (i - 5)), s >= 5 && (o += r.N1 + (s - 5));
        }
        return o;
      }),
      (e.getPenaltyN2 = function t(e) {
        for (var n = e.size, o = 0, i = 0; i < n - 1; i++)
          for (var s = 0; s < n - 1; s++) {
            var a =
              e.get(i, s) +
              e.get(i, s + 1) +
              e.get(i + 1, s) +
              e.get(i + 1, s + 1);
            (4 !== a && 0 !== a) || o++;
          }
        return o * r.N2;
      }),
      (e.getPenaltyN3 = function t(e) {
        for (var n = e.size, o = 0, i = 0, s = 0, a = 0; a < n; a++) {
          i = s = 0;
          for (var u = 0; u < n; u++)
            (i = ((i << 1) & 2047) | e.get(a, u)),
              u >= 10 && (1488 === i || 93 === i) && o++,
              (s = ((s << 1) & 2047) | e.get(u, a)),
              u >= 10 && (1488 === s || 93 === s) && o++;
        }
        return o * r.N3;
      }),
      (e.getPenaltyN4 = function t(e) {
        for (var n = 0, o = e.data.length, i = 0; i < o; i++) n += e.data[i];
        var s = Math.abs(Math.ceil((100 * n) / o / 5) - 10);
        return s * r.N4;
      }),
      (e.applyMask = function t(e, r) {
        for (var o = r.size, i = 0; i < o; i++)
          for (var s = 0; s < o; s++)
            r.isReserved(s, i) || r.xor(s, i, n(e, s, i));
      }),
      (e.getBestMask = function t(r, n) {
        for (
          var o = Object.keys(e.Patterns).length, i = 0, s = 1 / 0, a = 0;
          a < o;
          a++
        ) {
          n(a), e.applyMask(a, r);
          var u =
            e.getPenaltyN1(r) +
            e.getPenaltyN2(r) +
            e.getPenaltyN3(r) +
            e.getPenaltyN4(r);
          e.applyMask(a, r), u < s && ((s = u), (i = a));
        }
        return i;
      });
  },
  '../../../node_modules/qrcode/lib/core/mode.js': function (t, e, r) {
    var n = r('../../../node_modules/qrcode/lib/core/version-check.js'),
      o = r('../../../node_modules/qrcode/lib/core/regex.js');
    function i(t) {
      if ('string' !== typeof t) throw new Error('Param is not a string');
      var r = t.toLowerCase();
      switch (r) {
        case 'numeric':
          return e.NUMERIC;
        case 'alphanumeric':
          return e.ALPHANUMERIC;
        case 'kanji':
          return e.KANJI;
        case 'byte':
          return e.BYTE;
        default:
          throw new Error('Unknown mode: ' + t);
      }
    }
    (e.NUMERIC = { id: 'Numeric', bit: 1 << 0, ccBits: [10, 12, 14] }),
      (e.ALPHANUMERIC = {
        id: 'Alphanumeric',
        bit: 1 << 1,
        ccBits: [9, 11, 13],
      }),
      (e.BYTE = { id: 'Byte', bit: 1 << 2, ccBits: [8, 16, 16] }),
      (e.KANJI = { id: 'Kanji', bit: 1 << 3, ccBits: [8, 10, 12] }),
      (e.MIXED = { bit: -1 }),
      (e.getCharCountIndicator = function t(e, r) {
        if (!e.ccBits) throw new Error('Invalid mode: ' + e);
        if (!n.isValid(r)) throw new Error('Invalid version: ' + r);
        return r >= 1 && r < 10
          ? e.ccBits[0]
          : r < 27
          ? e.ccBits[1]
          : e.ccBits[2];
      }),
      (e.getBestModeForData = function t(r) {
        return o.testNumeric(r)
          ? e.NUMERIC
          : o.testAlphanumeric(r)
          ? e.ALPHANUMERIC
          : o.testKanji(r)
          ? e.KANJI
          : e.BYTE;
      }),
      (e.toString = function t(e) {
        if (e && e.id) return e.id;
        throw new Error('Invalid mode');
      }),
      (e.isValid = function t(e) {
        return e && e.bit && e.ccBits;
      }),
      (e.from = function t(r, n) {
        if (e.isValid(r)) return r;
        try {
          return i(r);
        } catch (t) {
          return n;
        }
      });
  },
  '../../../node_modules/qrcode/lib/core/numeric-data.js': function (t, e, r) {
    var n = r('../../../node_modules/qrcode/lib/core/mode.js');
    function o(t) {
      (this.mode = n.NUMERIC), (this.data = t.toString());
    }
    (o.getBitsLength = function t(e) {
      return 10 * Math.floor(e / 3) + (e % 3 ? (e % 3) * 3 + 1 : 0);
    }),
      (o.prototype.getLength = function t() {
        return this.data.length;
      }),
      (o.prototype.getBitsLength = function t() {
        return o.getBitsLength(this.data.length);
      }),
      (o.prototype.write = function t(e) {
        var r, n, o;
        for (r = 0; r + 3 <= this.data.length; r += 3)
          (n = this.data.substr(r, 3)), (o = parseInt(n, 10)), e.put(o, 10);
        var i = this.data.length - r;
        i > 0 &&
          ((n = this.data.substr(r)),
          (o = parseInt(n, 10)),
          e.put(o, 3 * i + 1));
      }),
      (t.exports = o);
  },
  '../../../node_modules/qrcode/lib/core/polynomial.js': function (t, e, r) {
    var n = r('../../../node_modules/qrcode/lib/utils/typedarray-buffer.js'),
      o = r('../../../node_modules/qrcode/lib/core/galois-field.js');
    (e.mul = function t(e, r) {
      for (var i = n.alloc(e.length + r.length - 1), s = 0; s < e.length; s++)
        for (var a = 0; a < r.length; a++) i[s + a] ^= o.mul(e[s], r[a]);
      return i;
    }),
      (e.mod = function t(e, r) {
        var i = n.from(e);
        while (i.length - r.length >= 0) {
          for (var s = i[0], a = 0; a < r.length; a++) i[a] ^= o.mul(r[a], s);
          var u = 0;
          while (u < i.length && 0 === i[u]) u++;
          i = i.slice(u);
        }
        return i;
      }),
      (e.generateECPolynomial = function t(r) {
        for (var i = n.from([1]), s = 0; s < r; s++)
          i = e.mul(i, [1, o.exp(s)]);
        return i;
      });
  },
  '../../../node_modules/qrcode/lib/core/qrcode.js': function (t, e, r) {
    var n = r('../../../node_modules/qrcode/lib/utils/typedarray-buffer.js'),
      o = r('../../../node_modules/qrcode/lib/core/utils.js'),
      i = r('../../../node_modules/qrcode/lib/core/error-correction-level.js'),
      s = r('../../../node_modules/qrcode/lib/core/bit-buffer.js'),
      a = r('../../../node_modules/qrcode/lib/core/bit-matrix.js'),
      u = r('../../../node_modules/qrcode/lib/core/alignment-pattern.js'),
      c = r('../../../node_modules/qrcode/lib/core/finder-pattern.js'),
      f = r('../../../node_modules/qrcode/lib/core/mask-pattern.js'),
      l = r('../../../node_modules/qrcode/lib/core/error-correction-code.js'),
      d = r('../../../node_modules/qrcode/lib/core/reed-solomon-encoder.js'),
      h = r('../../../node_modules/qrcode/lib/core/version.js'),
      g = r('../../../node_modules/qrcode/lib/core/format-info.js'),
      p = r('../../../node_modules/qrcode/lib/core/mode.js'),
      m = r('../../../node_modules/qrcode/lib/core/segments.js'),
      y = r('../../../node_modules/qrcode/node_modules/isarray/index.js');
    function v(t, e) {
      for (var r = t.size, n = c.getPositions(e), o = 0; o < n.length; o++)
        for (var i = n[o][0], s = n[o][1], a = -1; a <= 7; a++)
          if (!(i + a <= -1 || r <= i + a))
            for (var u = -1; u <= 7; u++)
              s + u <= -1 ||
                r <= s + u ||
                ((a >= 0 && a <= 6 && (0 === u || 6 === u)) ||
                (u >= 0 && u <= 6 && (0 === a || 6 === a)) ||
                (a >= 2 && a <= 4 && u >= 2 && u <= 4)
                  ? t.set(i + a, s + u, !0, !0)
                  : t.set(i + a, s + u, !1, !0));
    }
    function w(t) {
      for (var e = t.size, r = 8; r < e - 8; r++) {
        var n = r % 2 === 0;
        t.set(r, 6, n, !0), t.set(6, r, n, !0);
      }
    }
    function b(t, e) {
      for (var r = u.getPositions(e), n = 0; n < r.length; n++)
        for (var o = r[n][0], i = r[n][1], s = -2; s <= 2; s++)
          for (var a = -2; a <= 2; a++)
            -2 === s || 2 === s || -2 === a || 2 === a || (0 === s && 0 === a)
              ? t.set(o + s, i + a, !0, !0)
              : t.set(o + s, i + a, !1, !0);
    }
    function _(t, e) {
      for (var r, n, o, i = t.size, s = h.getEncodedBits(e), a = 0; a < 18; a++)
        (r = Math.floor(a / 3)),
          (n = (a % 3) + i - 8 - 3),
          (o = 1 === ((s >> a) & 1)),
          t.set(r, n, o, !0),
          t.set(n, r, o, !0);
    }
    function E(t, e, r) {
      var n,
        o,
        i = t.size,
        s = g.getEncodedBits(e, r);
      for (n = 0; n < 15; n++)
        (o = 1 === ((s >> n) & 1)),
          n < 6
            ? t.set(n, 8, o, !0)
            : n < 8
            ? t.set(n + 1, 8, o, !0)
            : t.set(i - 15 + n, 8, o, !0),
          n < 8
            ? t.set(8, i - n - 1, o, !0)
            : n < 9
            ? t.set(8, 15 - n - 1 + 1, o, !0)
            : t.set(8, 15 - n - 1, o, !0);
      t.set(i - 8, 8, 1, !0);
    }
    function A(t, e) {
      for (
        var r = t.size, n = -1, o = r - 1, i = 7, s = 0, a = r - 1;
        a > 0;
        a -= 2
      ) {
        6 === a && a--;
        while (1) {
          for (var u = 0; u < 2; u++)
            if (!t.isReserved(o, a - u)) {
              var c = !1;
              s < e.length && (c = 1 === ((e[s] >>> i) & 1)),
                t.set(o, a - u, c),
                i--,
                -1 === i && (s++, (i = 7));
            }
          if (((o += n), o < 0 || r <= o)) {
            (o -= n), (n = -n);
            break;
          }
        }
      }
    }
    function P(t, e, r) {
      var n = new s();
      r.forEach(function (e) {
        n.put(e.mode.bit, 4),
          n.put(e.getLength(), p.getCharCountIndicator(e.mode, t)),
          e.write(n);
      });
      var i = o.getSymbolTotalCodewords(t),
        a = l.getTotalCodewordsCount(t, e),
        u = 8 * (i - a);
      n.getLengthInBits() + 4 <= u && n.put(0, 4);
      while (n.getLengthInBits() % 8 !== 0) n.putBit(0);
      for (var c = (u - n.getLengthInBits()) / 8, f = 0; f < c; f++)
        n.put(f % 2 ? 17 : 236, 8);
      return R(n, t, e);
    }
    function R(t, e, r) {
      for (
        var i = o.getSymbolTotalCodewords(e),
          s = l.getTotalCodewordsCount(e, r),
          a = i - s,
          u = l.getBlocksCount(e, r),
          c = i % u,
          f = u - c,
          h = Math.floor(i / u),
          g = Math.floor(a / u),
          p = g + 1,
          m = h - g,
          y = new d(m),
          v = 0,
          w = new Array(u),
          b = new Array(u),
          _ = 0,
          E = n.from(t.buffer),
          A = 0;
        A < u;
        A++
      ) {
        var P = A < f ? g : p;
        (w[A] = E.slice(v, v + P)),
          (b[A] = y.encode(w[A])),
          (v += P),
          (_ = Math.max(_, P));
      }
      var R,
        B,
        T = n.alloc(i),
        j = 0;
      for (R = 0; R < _; R++)
        for (B = 0; B < u; B++) R < w[B].length && (T[j++] = w[B][R]);
      for (R = 0; R < m; R++) for (B = 0; B < u; B++) T[j++] = b[B][R];
      return T;
    }
    function B(t, e, r, n) {
      var i;
      if (y(t)) i = m.fromArray(t);
      else {
        if ('string' !== typeof t) throw new Error('Invalid data');
        var s = e;
        if (!s) {
          var u = m.rawSplit(t);
          s = h.getBestVersionForData(u, r);
        }
        i = m.fromString(t, s || 40);
      }
      var c = h.getBestVersionForData(i, r);
      if (!c)
        throw new Error(
          'The amount of data is too big to be stored in a QR Code'
        );
      if (e) {
        if (e < c)
          throw new Error(
            '\n' +
              'The chosen QR Code version cannot contain this amount of data.\n' +
              'Minimum version required to store current data is: ' +
              c +
              '.\n'
          );
      } else e = c;
      var l = P(e, r, i),
        d = o.getSymbolSize(e),
        g = new a(d);
      return (
        v(g, e),
        w(g),
        b(g, e),
        E(g, r, 0),
        e >= 7 && _(g, e),
        A(g, l),
        isNaN(n) && (n = f.getBestMask(g, E.bind(null, g, r))),
        f.applyMask(n, g),
        E(g, r, n),
        {
          modules: g,
          version: e,
          errorCorrectionLevel: r,
          maskPattern: n,
          segments: i,
        }
      );
    }
    e.create = function t(e, r) {
      if ('undefined' === typeof e || '' === e)
        throw new Error('No input text');
      var n,
        s,
        a = i.M;
      return (
        'undefined' !== typeof r &&
          ((a = i.from(r.errorCorrectionLevel, i.M)),
          (n = h.from(r.version)),
          (s = f.from(r.maskPattern)),
          r.toSJISFunc && o.setToSJISFunction(r.toSJISFunc)),
        B(e, n, a, s)
      );
    };
  },
  '../../../node_modules/qrcode/lib/core/reed-solomon-encoder.js': function (
    t,
    e,
    r
  ) {
    var n = r('../../../node_modules/qrcode/lib/utils/typedarray-buffer.js'),
      o = r('../../../node_modules/qrcode/lib/core/polynomial.js'),
      i = r(
        '../../../node_modules/node-libs-browser/node_modules/buffer/index.js'
      ).Buffer;
    function s(t) {
      (this.genPoly = void 0),
        (this.degree = t),
        this.degree && this.initialize(this.degree);
    }
    (s.prototype.initialize = function t(e) {
      (this.degree = e), (this.genPoly = o.generateECPolynomial(this.degree));
    }),
      (s.prototype.encode = function t(e) {
        if (!this.genPoly) throw new Error('Encoder not initialized');
        var r = n.alloc(this.degree),
          s = i.concat([e, r], e.length + this.degree),
          a = o.mod(s, this.genPoly),
          u = this.degree - a.length;
        if (u > 0) {
          var c = n.alloc(this.degree);
          return a.copy(c, u), c;
        }
        return a;
      }),
      (t.exports = s);
  },
  '../../../node_modules/qrcode/lib/core/regex.js': function (t, e) {
    var r = '[0-9]+',
      n = '[A-Z $%*+\\-./:]+',
      o =
        '(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|' +
        '[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|' +
        '[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|' +
        '[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+';
    o = o.replace(/u/g, '\\u');
    var i = '(?:(?![A-Z0-9 $%*+\\-./:]|' + o + ')(?:.|[\r\n]))+';
    (e.KANJI = new RegExp(o, 'g')),
      (e.BYTE_KANJI = new RegExp('[^A-Z0-9 $%*+\\-./:]+', 'g')),
      (e.BYTE = new RegExp(i, 'g')),
      (e.NUMERIC = new RegExp(r, 'g')),
      (e.ALPHANUMERIC = new RegExp(n, 'g'));
    var s = new RegExp('^' + o + '$'),
      a = new RegExp('^' + r + '$'),
      u = new RegExp('^[A-Z0-9 $%*+\\-./:]+$');
    (e.testKanji = function t(e) {
      return s.test(e);
    }),
      (e.testNumeric = function t(e) {
        return a.test(e);
      }),
      (e.testAlphanumeric = function t(e) {
        return u.test(e);
      });
  },
  '../../../node_modules/qrcode/lib/core/segments.js': function (t, e, r) {
    var n = r('../../../node_modules/qrcode/lib/core/mode.js'),
      o = r('../../../node_modules/qrcode/lib/core/numeric-data.js'),
      i = r('../../../node_modules/qrcode/lib/core/alphanumeric-data.js'),
      s = r('../../../node_modules/qrcode/lib/core/byte-data.js'),
      a = r('../../../node_modules/qrcode/lib/core/kanji-data.js'),
      u = r('../../../node_modules/qrcode/lib/core/regex.js'),
      c = r('../../../node_modules/qrcode/lib/core/utils.js'),
      f = r('../../../node_modules/dijkstrajs/dijkstra.js');
    function l(t) {
      return unescape(encodeURIComponent(t)).length;
    }
    function d(t, e, r) {
      var n,
        o = [];
      while (null !== (n = t.exec(r)))
        o.push({ data: n[0], index: n.index, mode: e, length: n[0].length });
      return o;
    }
    function h(t) {
      var e,
        r,
        o = d(u.NUMERIC, n.NUMERIC, t),
        i = d(u.ALPHANUMERIC, n.ALPHANUMERIC, t);
      c.isKanjiModeEnabled()
        ? ((e = d(u.BYTE, n.BYTE, t)), (r = d(u.KANJI, n.KANJI, t)))
        : ((e = d(u.BYTE_KANJI, n.BYTE, t)), (r = []));
      var s = o.concat(i, e, r);
      return s
        .sort(function (t, e) {
          return t.index - e.index;
        })
        .map(function (t) {
          return { data: t.data, mode: t.mode, length: t.length };
        });
    }
    function g(t, e) {
      switch (e) {
        case n.NUMERIC:
          return o.getBitsLength(t);
        case n.ALPHANUMERIC:
          return i.getBitsLength(t);
        case n.KANJI:
          return a.getBitsLength(t);
        case n.BYTE:
          return s.getBitsLength(t);
      }
    }
    function p(t) {
      return t.reduce(function (t, e) {
        var r = t.length - 1 >= 0 ? t[t.length - 1] : null;
        return r && r.mode === e.mode
          ? ((t[t.length - 1].data += e.data), t)
          : (t.push(e), t);
      }, []);
    }
    function m(t) {
      for (var e = [], r = 0; r < t.length; r++) {
        var o = t[r];
        switch (o.mode) {
          case n.NUMERIC:
            e.push([
              o,
              { data: o.data, mode: n.ALPHANUMERIC, length: o.length },
              { data: o.data, mode: n.BYTE, length: o.length },
            ]);
            break;
          case n.ALPHANUMERIC:
            e.push([o, { data: o.data, mode: n.BYTE, length: o.length }]);
            break;
          case n.KANJI:
            e.push([o, { data: o.data, mode: n.BYTE, length: l(o.data) }]);
            break;
          case n.BYTE:
            e.push([{ data: o.data, mode: n.BYTE, length: l(o.data) }]);
        }
      }
      return e;
    }
    function y(t, e) {
      for (
        var r = {}, o = { start: {} }, i = ['start'], s = 0;
        s < t.length;
        s++
      ) {
        for (var a = t[s], u = [], c = 0; c < a.length; c++) {
          var f = a[c],
            l = '' + s + c;
          u.push(l), (r[l] = { node: f, lastCount: 0 }), (o[l] = {});
          for (var d = 0; d < i.length; d++) {
            var h = i[d];
            r[h] && r[h].node.mode === f.mode
              ? ((o[h][l] =
                  g(r[h].lastCount + f.length, f.mode) -
                  g(r[h].lastCount, f.mode)),
                (r[h].lastCount += f.length))
              : (r[h] && (r[h].lastCount = f.length),
                (o[h][l] =
                  g(f.length, f.mode) +
                  4 +
                  n.getCharCountIndicator(f.mode, e)));
          }
        }
        i = u;
      }
      for (d = 0; d < i.length; d++) o[i[d]]['end'] = 0;
      return { map: o, table: r };
    }
    function v(t, e) {
      var r,
        u = n.getBestModeForData(t);
      if (((r = n.from(e, u)), r !== n.BYTE && r.bit < u.bit))
        throw new Error(
          '"' +
            t +
            '"' +
            ' cannot be encoded with mode ' +
            n.toString(r) +
            '.\n Suggested mode is: ' +
            n.toString(u)
        );
      switch ((r !== n.KANJI || c.isKanjiModeEnabled() || (r = n.BYTE), r)) {
        case n.NUMERIC:
          return new o(t);
        case n.ALPHANUMERIC:
          return new i(t);
        case n.KANJI:
          return new a(t);
        case n.BYTE:
          return new s(t);
      }
    }
    (e.fromArray = function t(e) {
      return e.reduce(function (t, e) {
        return (
          'string' === typeof e
            ? t.push(v(e, null))
            : e.data && t.push(v(e.data, e.mode)),
          t
        );
      }, []);
    }),
      (e.fromString = function t(r, n) {
        for (
          var o = h(r, c.isKanjiModeEnabled()),
            i = m(o),
            s = y(i, n),
            a = f.find_path(s.map, 'start', 'end'),
            u = [],
            l = 1;
          l < a.length - 1;
          l++
        )
          u.push(s.table[a[l]].node);
        return e.fromArray(p(u));
      }),
      (e.rawSplit = function t(r) {
        return e.fromArray(h(r, c.isKanjiModeEnabled()));
      });
  },
  '../../../node_modules/qrcode/lib/core/utils.js': function (t, e) {
    var r,
      n = [
        0,
        26,
        44,
        70,
        100,
        134,
        172,
        196,
        242,
        292,
        346,
        404,
        466,
        532,
        581,
        655,
        733,
        815,
        901,
        991,
        1085,
        1156,
        1258,
        1364,
        1474,
        1588,
        1706,
        1828,
        1921,
        2051,
        2185,
        2323,
        2465,
        2611,
        2761,
        2876,
        3034,
        3196,
        3362,
        3532,
        3706,
      ];
    (e.getSymbolSize = function t(e) {
      if (!e) throw new Error('"version" cannot be null or undefined');
      if (e < 1 || e > 40)
        throw new Error('"version" should be in range from 1 to 40');
      return 4 * e + 17;
    }),
      (e.getSymbolTotalCodewords = function t(e) {
        return n[e];
      }),
      (e.getBCHDigit = function (t) {
        var e = 0;
        while (0 !== t) e++, (t >>>= 1);
        return e;
      }),
      (e.setToSJISFunction = function t(e) {
        if ('function' !== typeof e)
          throw new Error('"toSJISFunc" is not a valid function.');
        r = e;
      }),
      (e.isKanjiModeEnabled = function () {
        return 'undefined' !== typeof r;
      }),
      (e.toSJIS = function t(e) {
        return r(e);
      });
  },
  '../../../node_modules/qrcode/lib/core/version-check.js': function (t, e) {
    e.isValid = function t(e) {
      return !isNaN(e) && e >= 1 && e <= 40;
    };
  },
  '../../../node_modules/qrcode/lib/core/version.js': function (t, e, r) {
    var n = r('../../../node_modules/qrcode/lib/core/utils.js'),
      o = r('../../../node_modules/qrcode/lib/core/error-correction-code.js'),
      i = r('../../../node_modules/qrcode/lib/core/error-correction-level.js'),
      s = r('../../../node_modules/qrcode/lib/core/mode.js'),
      a = r('../../../node_modules/qrcode/lib/core/version-check.js'),
      u = r('../../../node_modules/qrcode/node_modules/isarray/index.js'),
      c =
        (1 << 12) |
        (1 << 11) |
        (1 << 10) |
        (1 << 9) |
        (1 << 8) |
        (1 << 5) |
        (1 << 2) |
        (1 << 0),
      f = n.getBCHDigit(c);
    function l(t, r, n) {
      for (var o = 1; o <= 40; o++) if (r <= e.getCapacity(o, n, t)) return o;
    }
    function d(t, e) {
      return s.getCharCountIndicator(t, e) + 4;
    }
    function h(t, e) {
      var r = 0;
      return (
        t.forEach(function (t) {
          var n = d(t.mode, e);
          r += n + t.getBitsLength();
        }),
        r
      );
    }
    function g(t, r) {
      for (var n = 1; n <= 40; n++) {
        var o = h(t, n);
        if (o <= e.getCapacity(n, r, s.MIXED)) return n;
      }
    }
    (e.from = function t(e, r) {
      return a.isValid(e) ? parseInt(e, 10) : r;
    }),
      (e.getCapacity = function t(e, r, i) {
        if (!a.isValid(e)) throw new Error('Invalid QR Code version');
        'undefined' === typeof i && (i = s.BYTE);
        var u = n.getSymbolTotalCodewords(e),
          c = o.getTotalCodewordsCount(e, r),
          f = 8 * (u - c);
        if (i === s.MIXED) return f;
        var l = f - d(i, e);
        switch (i) {
          case s.NUMERIC:
            return Math.floor((l / 10) * 3);
          case s.ALPHANUMERIC:
            return Math.floor((l / 11) * 2);
          case s.KANJI:
            return Math.floor(l / 13);
          case s.BYTE:
          default:
            return Math.floor(l / 8);
        }
      }),
      (e.getBestVersionForData = function t(e, r) {
        var n,
          o = i.from(r, i.M);
        if (u(e)) {
          if (e.length > 1) return g(e, o);
          if (0 === e.length) return 1;
          n = e[0];
        } else n = e;
        return l(n.mode, n.getLength(), o);
      }),
      (e.getEncodedBits = function t(e) {
        if (!a.isValid(e) || e < 7) throw new Error('Invalid QR Code version');
        var r = e << 12;
        while (n.getBCHDigit(r) - f >= 0) r ^= c << (n.getBCHDigit(r) - f);
        return (e << 12) | r;
      });
  },
  '../../../node_modules/qrcode/lib/renderer/canvas.js': function (t, e, r) {
    var n = r('../../../node_modules/qrcode/lib/renderer/utils.js');
    function o(t, e, r) {
      t.clearRect(0, 0, e.width, e.height),
        e.style || (e.style = {}),
        (e.height = r),
        (e.width = r),
        (e.style.height = r + 'px'),
        (e.style.width = r + 'px');
    }
    function i() {
      try {
        return document.createElement('canvas');
      } catch (t) {
        throw new Error('You need to specify a canvas element');
      }
    }
    (e.render = function t(e, r, s) {
      var a = s,
        u = r;
      'undefined' !== typeof a ||
        (r && r.getContext) ||
        ((a = r), (r = void 0)),
        r || (u = i()),
        (a = n.getOptions(a));
      var c = n.getImageWidth(e.modules.size, a),
        f = u.getContext('2d'),
        l = f.createImageData(c, c);
      return (
        n.qrToImageData(l.data, e, a), o(f, u, c), f.putImageData(l, 0, 0), u
      );
    }),
      (e.renderToDataURL = function t(r, n, o) {
        var i = o;
        'undefined' !== typeof i ||
          (n && n.getContext) ||
          ((i = n), (n = void 0)),
          i || (i = {});
        var s = e.render(r, n, i),
          a = i.type || 'image/png',
          u = i.rendererOpts || {};
        return s.toDataURL(a, u.quality);
      });
  },
  '../../../node_modules/qrcode/lib/renderer/svg-tag.js': function (t, e, r) {
    var n = r('../../../node_modules/qrcode/lib/renderer/utils.js');
    function o(t, e) {
      var r = t.a / 255,
        n = e + '="' + t.hex + '"';
      return r < 1
        ? n + ' ' + e + '-opacity="' + r.toFixed(2).slice(1) + '"'
        : n;
    }
    function i(t, e, r) {
      var n = t + e;
      return 'undefined' !== typeof r && (n += ' ' + r), n;
    }
    function s(t, e, r) {
      for (var n = '', o = 0, s = !1, a = 0, u = 0; u < t.length; u++) {
        var c = Math.floor(u % e),
          f = Math.floor(u / e);
        c || s || (s = !0),
          t[u]
            ? (a++,
              (u > 0 && c > 0 && t[u - 1]) ||
                ((n += s ? i('M', c + r, 0.5 + f + r) : i('m', o, 0)),
                (o = 0),
                (s = !1)),
              (c + 1 < e && t[u + 1]) || ((n += i('h', a)), (a = 0)))
            : o++;
      }
      return n;
    }
    e.render = function t(e, r, i) {
      var a = n.getOptions(r),
        u = e.modules.size,
        c = e.modules.data,
        f = u + 2 * a.margin,
        l = a.color.light.a
          ? '<path ' +
            o(a.color.light, 'fill') +
            ' d="M0 0h' +
            f +
            'v' +
            f +
            'H0z"/>'
          : '',
        d =
          '<path ' +
          o(a.color.dark, 'stroke') +
          ' d="' +
          s(c, u, a.margin) +
          '"/>',
        h = 'viewBox="' + '0 0 ' + f + ' ' + f + '"',
        g = a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : '',
        p =
          '<svg xmlns="http://www.w3.org/2000/svg" ' +
          g +
          h +
          ' shape-rendering="crispEdges">' +
          l +
          d +
          '</svg>\n';
      return 'function' === typeof i && i(null, p), p;
    };
  },
  '../../../node_modules/qrcode/lib/renderer/utils.js': function (t, e) {
    function r(t) {
      if (('number' === typeof t && (t = t.toString()), 'string' !== typeof t))
        throw new Error('Color should be defined as hex string');
      var e = t.slice().replace('#', '').split('');
      if (e.length < 3 || 5 === e.length || e.length > 8)
        throw new Error('Invalid hex color: ' + t);
      (3 !== e.length && 4 !== e.length) ||
        (e = Array.prototype.concat.apply(
          [],
          e.map(function (t) {
            return [t, t];
          })
        )),
        6 === e.length && e.push('F', 'F');
      var r = parseInt(e.join(''), 16);
      return {
        r: (r >> 24) & 255,
        g: (r >> 16) & 255,
        b: (r >> 8) & 255,
        a: 255 & r,
        hex: '#' + e.slice(0, 6).join(''),
      };
    }
    (e.getOptions = function t(e) {
      e || (e = {}), e.color || (e.color = {});
      var n =
          'undefined' === typeof e.margin || null === e.margin || e.margin < 0
            ? 4
            : e.margin,
        o = e.width && e.width >= 21 ? e.width : void 0,
        i = e.scale || 4;
      return {
        width: o,
        scale: o ? 4 : i,
        margin: n,
        color: {
          dark: r(e.color.dark || '#000000ff'),
          light: r(e.color.light || '#ffffffff'),
        },
        type: e.type,
        rendererOpts: e.rendererOpts || {},
      };
    }),
      (e.getScale = function t(e, r) {
        return r.width && r.width >= e + 2 * r.margin
          ? r.width / (e + 2 * r.margin)
          : r.scale;
      }),
      (e.getImageWidth = function t(r, n) {
        var o = e.getScale(r, n);
        return Math.floor((r + 2 * n.margin) * o);
      }),
      (e.qrToImageData = function t(r, n, o) {
        for (
          var i = n.modules.size,
            s = n.modules.data,
            a = e.getScale(i, o),
            u = Math.floor((i + 2 * o.margin) * a),
            c = o.margin * a,
            f = [o.color.light, o.color.dark],
            l = 0;
          l < u;
          l++
        )
          for (var d = 0; d < u; d++) {
            var h = 4 * (l * u + d),
              g = o.color.light;
            if (l >= c && d >= c && l < u - c && d < u - c) {
              var p = Math.floor((l - c) / a),
                m = Math.floor((d - c) / a);
              g = f[s[p * i + m] ? 1 : 0];
            }
            (r[h++] = g.r), (r[h++] = g.g), (r[h++] = g.b), (r[h] = g.a);
          }
      });
  },
  '../../../node_modules/qrcode/lib/utils/typedarray-buffer.js': function (
    t,
    e,
    r
  ) {
    'use strict';
    var n = r('../../../node_modules/qrcode/node_modules/isarray/index.js');
    function o() {
      try {
        var t = new Uint8Array(1);
        return (
          (t.__proto__ = {
            __proto__: Uint8Array.prototype,
            foo: function () {
              return 42;
            },
          }),
          42 === t.foo()
        );
      } catch (t) {
        return !1;
      }
    }
    s.TYPED_ARRAY_SUPPORT = o();
    var i = s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    function s(t, e, r) {
      return s.TYPED_ARRAY_SUPPORT || this instanceof s
        ? 'number' === typeof t
          ? f(this, t)
          : w(this, t, e, r)
        : new s(t, e, r);
    }
    function a(t) {
      if (t >= i)
        throw new RangeError(
          'Attempt to allocate Buffer larger than maximum ' +
            'size: 0x' +
            i.toString(16) +
            ' bytes'
        );
      return 0 | t;
    }
    function u(t) {
      return t !== t;
    }
    function c(t, e) {
      var r;
      return (
        s.TYPED_ARRAY_SUPPORT
          ? ((r = new Uint8Array(e)), (r.__proto__ = s.prototype))
          : ((r = t), null === r && (r = new s(e)), (r.length = e)),
        r
      );
    }
    function f(t, e) {
      var r = c(t, e < 0 ? 0 : 0 | a(e));
      if (!s.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) r[n] = 0;
      return r;
    }
    function l(t, e) {
      var r = 0 | m(e),
        n = c(t, r),
        o = n.write(e);
      return o !== r && (n = n.slice(0, o)), n;
    }
    function d(t, e) {
      for (
        var r = e.length < 0 ? 0 : 0 | a(e.length), n = c(t, r), o = 0;
        o < r;
        o += 1
      )
        n[o] = 255 & e[o];
      return n;
    }
    function h(t, e, r, n) {
      if (r < 0 || e.byteLength < r)
        throw new RangeError("'offset' is out of bounds");
      if (e.byteLength < r + (n || 0))
        throw new RangeError("'length' is out of bounds");
      var o;
      return (
        (o =
          void 0 === r && void 0 === n
            ? new Uint8Array(e)
            : void 0 === n
            ? new Uint8Array(e, r)
            : new Uint8Array(e, r, n)),
        s.TYPED_ARRAY_SUPPORT ? (o.__proto__ = s.prototype) : (o = d(t, o)),
        o
      );
    }
    function g(t, e) {
      if (s.isBuffer(e)) {
        var r = 0 | a(e.length),
          n = c(t, r);
        return 0 === n.length || e.copy(n, 0, 0, r), n;
      }
      if (e) {
        if (
          ('undefined' !== typeof ArrayBuffer &&
            e.buffer instanceof ArrayBuffer) ||
          'length' in e
        )
          return 'number' !== typeof e.length || u(e.length)
            ? c(t, 0)
            : d(t, e);
        if ('Buffer' === e.type && Array.isArray(e.data)) return d(t, e.data);
      }
      throw new TypeError(
        'First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.'
      );
    }
    function p(t, e) {
      var r;
      e = e || 1 / 0;
      for (var n = t.length, o = null, i = [], s = 0; s < n; ++s) {
        if (((r = t.charCodeAt(s)), r > 55295 && r < 57344)) {
          if (!o) {
            if (r > 56319) {
              (e -= 3) > -1 && i.push(239, 191, 189);
              continue;
            }
            if (s + 1 === n) {
              (e -= 3) > -1 && i.push(239, 191, 189);
              continue;
            }
            o = r;
            continue;
          }
          if (r < 56320) {
            (e -= 3) > -1 && i.push(239, 191, 189), (o = r);
            continue;
          }
          r = (((o - 55296) << 10) | (r - 56320)) + 65536;
        } else o && (e -= 3) > -1 && i.push(239, 191, 189);
        if (((o = null), r < 128)) {
          if ((e -= 1) < 0) break;
          i.push(r);
        } else if (r < 2048) {
          if ((e -= 2) < 0) break;
          i.push((r >> 6) | 192, (63 & r) | 128);
        } else if (r < 65536) {
          if ((e -= 3) < 0) break;
          i.push((r >> 12) | 224, ((r >> 6) & 63) | 128, (63 & r) | 128);
        } else {
          if (!(r < 1114112)) throw new Error('Invalid code point');
          if ((e -= 4) < 0) break;
          i.push(
            (r >> 18) | 240,
            ((r >> 12) & 63) | 128,
            ((r >> 6) & 63) | 128,
            (63 & r) | 128
          );
        }
      }
      return i;
    }
    function m(t) {
      if (s.isBuffer(t)) return t.length;
      if (
        'undefined' !== typeof ArrayBuffer &&
        'function' === typeof ArrayBuffer.isView &&
        (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
      )
        return t.byteLength;
      'string' !== typeof t && (t = '' + t);
      var e = t.length;
      return 0 === e ? 0 : p(t).length;
    }
    function y(t, e, r, n) {
      for (var o = 0; o < n; ++o) {
        if (o + r >= e.length || o >= t.length) break;
        e[o + r] = t[o];
      }
      return o;
    }
    function v(t, e, r, n) {
      return y(p(e, t.length - r), t, r, n);
    }
    function w(t, e, r, n) {
      if ('number' === typeof e)
        throw new TypeError('"value" argument must not be a number');
      return 'undefined' !== typeof ArrayBuffer && e instanceof ArrayBuffer
        ? h(t, e, r, n)
        : 'string' === typeof e
        ? l(t, e, r)
        : g(t, e);
    }
    s.TYPED_ARRAY_SUPPORT &&
      ((s.prototype.__proto__ = Uint8Array.prototype),
      (s.__proto__ = Uint8Array),
      'undefined' !== typeof Symbol &&
        Symbol.species &&
        s[Symbol.species] === s &&
        Object.defineProperty(s, Symbol.species, {
          value: null,
          configurable: !0,
          enumerable: !1,
          writable: !1,
        })),
      (s.prototype.write = function t(e, r, n) {
        void 0 === r || (void 0 === n && 'string' === typeof r)
          ? ((n = this.length), (r = 0))
          : isFinite(r) && ((r |= 0), isFinite(n) ? (n |= 0) : (n = void 0));
        var o = this.length - r;
        if (
          ((void 0 === n || n > o) && (n = o),
          (e.length > 0 && (n < 0 || r < 0)) || r > this.length)
        )
          throw new RangeError('Attempt to write outside buffer bounds');
        return v(this, e, r, n);
      }),
      (s.prototype.slice = function t(e, r) {
        var n,
          o = this.length;
        if (
          ((e = ~~e),
          (r = void 0 === r ? o : ~~r),
          e < 0 ? ((e += o), e < 0 && (e = 0)) : e > o && (e = o),
          r < 0 ? ((r += o), r < 0 && (r = 0)) : r > o && (r = o),
          r < e && (r = e),
          s.TYPED_ARRAY_SUPPORT)
        )
          (n = this.subarray(e, r)), (n.__proto__ = s.prototype);
        else {
          var i = r - e;
          n = new s(i, void 0);
          for (var a = 0; a < i; ++a) n[a] = this[a + e];
        }
        return n;
      }),
      (s.prototype.copy = function t(e, r, n, o) {
        if (
          (n || (n = 0),
          o || 0 === o || (o = this.length),
          r >= e.length && (r = e.length),
          r || (r = 0),
          o > 0 && o < n && (o = n),
          o === n)
        )
          return 0;
        if (0 === e.length || 0 === this.length) return 0;
        if (r < 0) throw new RangeError('targetStart out of bounds');
        if (n < 0 || n >= this.length)
          throw new RangeError('sourceStart out of bounds');
        if (o < 0) throw new RangeError('sourceEnd out of bounds');
        o > this.length && (o = this.length),
          e.length - r < o - n && (o = e.length - r + n);
        var i,
          a = o - n;
        if (this === e && n < r && r < o)
          for (i = a - 1; i >= 0; --i) e[i + r] = this[i + n];
        else if (a < 1e3 || !s.TYPED_ARRAY_SUPPORT)
          for (i = 0; i < a; ++i) e[i + r] = this[i + n];
        else Uint8Array.prototype.set.call(e, this.subarray(n, n + a), r);
        return a;
      }),
      (s.prototype.fill = function t(e, r, n) {
        if ('string' === typeof e) {
          if (
            ('string' === typeof r
              ? ((r = 0), (n = this.length))
              : 'string' === typeof n && (n = this.length),
            1 === e.length)
          ) {
            var o = e.charCodeAt(0);
            o < 256 && (e = o);
          }
        } else 'number' === typeof e && (e &= 255);
        if (r < 0 || this.length < r || this.length < n)
          throw new RangeError('Out of range index');
        if (n <= r) return this;
        var i;
        if (
          ((r >>>= 0),
          (n = void 0 === n ? this.length : n >>> 0),
          e || (e = 0),
          'number' === typeof e)
        )
          for (i = r; i < n; ++i) this[i] = e;
        else {
          var a = s.isBuffer(e) ? e : new s(e),
            u = a.length;
          for (i = 0; i < n - r; ++i) this[i + r] = a[i % u];
        }
        return this;
      }),
      (s.concat = function t(e, r) {
        if (!n(e))
          throw new TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return c(null, 0);
        var o;
        if (void 0 === r)
          for (r = 0, o = 0; o < e.length; ++o) r += e[o].length;
        var i = f(null, r),
          a = 0;
        for (o = 0; o < e.length; ++o) {
          var u = e[o];
          if (!s.isBuffer(u))
            throw new TypeError('"list" argument must be an Array of Buffers');
          u.copy(i, a), (a += u.length);
        }
        return i;
      }),
      (s.byteLength = m),
      (s.prototype._isBuffer = !0),
      (s.isBuffer = function t(e) {
        return !(null == e || !e._isBuffer);
      }),
      (t.exports.alloc = function (t) {
        var e = new s(t);
        return e.fill(0), e;
      }),
      (t.exports.from = function (t) {
        return new s(t);
      });
  },
  '../../../node_modules/qrcode/node_modules/isarray/index.js': function (
    t,
    e
  ) {
    var r = {}.toString;
    t.exports =
      Array.isArray ||
      function (t) {
        return '[object Array]' == r.call(t);
      };
  },
  '../../../node_modules/webpack/buildin/global.js': function (t, e) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function('return this')();
    } catch (t) {
      'object' === typeof window && (r = window);
    }
    t.exports = r;
  },
  './src/_common_/apis/counterApi.ts': function (t, e, r) {
    'use strict';
    r.d(e, 'b', function () {
      return n;
    }),
      r.d(e, 'a', function () {
        return i;
      });
    var n,
      o =
        (void 0 && (void 0).__awaiter) ||
        function (t, e, r, n) {
          function o(t) {
            return t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                });
          }
          return new (r || (r = Promise))(function (r, i) {
            function s(t) {
              try {
                u(n.next(t));
              } catch (t) {
                i(t);
              }
            }
            function a(t) {
              try {
                u(n['throw'](t));
              } catch (t) {
                i(t);
              }
            }
            function u(t) {
              t.done ? r(t.value) : o(t.value).then(s, a);
            }
            u((n = n.apply(t, e || [])).next());
          });
        };
    (function (t) {
      (t['ALLOWED'] = 'allowed'),
        (t['WATERMARK'] = 'watermark'),
        (t['DENIED'] = 'denied');
    })(n || (n = {}));
    class i {
      constructor() {
        this.vctrCounterPath = '/api/vctr-counter/v2/views';
      }
      postCount(t, e) {
        return o(this, void 0, void 0, function* () {
          return new Promise((r, n) =>
            o(this, void 0, void 0, function* () {
              try {
                const o = yield fetch(
                  `${this.vctrCounterPath}/${t}/?assetType=${e}`,
                  {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {},
                  }
                );
                if (o.ok) {
                  const t = yield o.json();
                  (t.responseStatus = o.status), r(t);
                } else n(o.status);
              } catch (t) {
                n(t);
              }
            })
          );
        });
      }
    }
  },
  './src/_common_/components/component.ts': function (t, e, r) {
    'use strict';
    function n(t) {
      const e = document.createElement('div');
      e.innerHTML = t.trim();
      const r = document.createDocumentFragment();
      return r.appendChild(e.removeChild(e.firstChild));
    }
    r.d(e, 'a', function () {
      return n;
    });
  },
  './src/_common_/components/qr_code/qr_code.ts': function (t, e, r) {
    'use strict';
    r.d(e, 'a', function () {
      return i;
    });
    var n = r('./src/_common_/components/component.ts'),
      o = r('../../../node_modules/qrcode/lib/browser.js');
    class i {
      constructor(t, e = !1) {
        (this.css = `\n            <style>\n                .qr-code {\n                    position: absolute;\n                    display: flex;\n                    flex-direction: column;\n                    background: #FFFFFF;\n                    border-radius: 5px;\n                    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.3);\n                    text-align: center;\n                    margin: 0;\n                    padding: 15px;\n                    z-index: 2;\n                }\n\n                .qr-code span {\n                    display: block;\n                }\n\n                .qr-code .title {\n                    color: #4f4f4f;\n                    font-weight: bold;\n                    font-size: 16px;\n                }\n\n                .qr-code .small {\n                    color: #adadad;\n                    font-size: 11px;\n                }\n\n                .qr-code .close {\n                    color: #adadad;\n                    cursor: pointer;\n                    font-size: 14px;\n                    text-align: right;\n                    margin: 15px 0 auto;\n                }\n            </style>\n        `),
          (this.el = Object(n['a'])(
            `\n            <div class="qr-code">\n                ${this.css}\n                <span class="title">Scan the QR code<br />for Augmented reality</span>\n                <img class="qr-code-image" src="" />\n                <span class="small">iOS 13+, iPadOS 13+ or Android<br />with ARCore 1.9+ required</span>\n            </div>\n        `
          )),
          (this.qrImage = this.el.querySelector('.qr-code-image')),
          o['toDataURL'](t, {}).then((t) => (this.qrImage.src = t)),
          e &&
            ((this.qrClose = Object(n['a'])(`<div class="close">Close</div>`)),
            this.qrClose.addEventListener(
              'click',
              (t) => (this.el.style.display = 'none')
            ),
            this.el.appendChild(this.qrClose));
      }
      element() {
        return this.el;
      }
    }
  },
  './src/_common_/utils/checkDevice.ts': function (t, e, r) {
    'use strict';
    r.d(e, 'b', function () {
      return n;
    }),
      r.d(e, 'c', function () {
        return o;
      }),
      r.d(e, 'a', function () {
        return i;
      });
    const n = () => {
        const t = /Mac OS X/;
        return null !== navigator.userAgent.match(t);
      },
      o = () => {
        const t = /(iPhone|iPad|Android)/;
        return null !== navigator.userAgent.match(t);
      },
      i = () => (a() ? 'android' : s() ? 'apple' : 'none'),
      s = () => {
        const t = () =>
          !!/Safari[\/\s](\d+\.\d+)/.test(window.navigator.userAgent) &&
          'ontouchstart' in window;
        function e() {
          const t = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
          return [
            parseInt(t[1], 10),
            parseInt(t[2], 10),
            parseInt(t[3] || '0', 10),
          ];
        }
        let r;
        /iP(hone|od|ad)/.test(navigator.platform) && (r = e());
        const n = window.navigator.userAgent,
          o = !!n.match(/iPad/i) || !!n.match(/iPhone/i),
          i = navigator.userAgent.toLowerCase().indexOf('fxios') > -1;
        return !!((r && o && r[0] >= 12 && !i) || t());
      },
      a = () => {
        const t = navigator.userAgent.toLowerCase(),
          e = t.indexOf('android') > -1;
        return e;
      };
  },
  './src/_common_/utils/checkExists.ts': function (t, e, r) {
    'use strict';
    r.d(e, 'a', function () {
      return o;
    });
    var n =
      (void 0 && (void 0).__awaiter) ||
      function (t, e, r, n) {
        function o(t) {
          return t instanceof r
            ? t
            : new r(function (e) {
                e(t);
              });
        }
        return new (r || (r = Promise))(function (r, i) {
          function s(t) {
            try {
              u(n.next(t));
            } catch (t) {
              i(t);
            }
          }
          function a(t) {
            try {
              u(n['throw'](t));
            } catch (t) {
              i(t);
            }
          }
          function u(t) {
            t.done ? r(t.value) : o(t.value).then(s, a);
          }
          u((n = n.apply(t, e || [])).next());
        });
      };
    const o = (t) =>
      n(void 0, void 0, void 0, function* () {
        try {
          const e = yield fetch(t, { method: 'HEAD' });
          return 200 === e.status;
        } catch (t) {
          return !1;
        }
      });
  },
  './src/viewer-ar/scripts/vctr-ar.ts': function (t, e, r) {
    'use strict';
    r.r(e);
    var n = r('./src/_common_/utils/checkDevice.ts'),
      o = r('./src/_common_/utils/checkExists.ts'),
      i = r('./src/_common_/apis/counterApi.ts'),
      s = r('./src/_common_/components/qr_code/qr_code.ts'),
      a =
        (void 0 && (void 0).__awaiter) ||
        function (t, e, r, n) {
          function o(t) {
            return t instanceof r
              ? t
              : new r(function (e) {
                  e(t);
                });
          }
          return new (r || (r = Promise))(function (r, i) {
            function s(t) {
              try {
                u(n.next(t));
              } catch (t) {
                i(t);
              }
            }
            function a(t) {
              try {
                u(n['throw'](t));
              } catch (t) {
                i(t);
              }
            }
            function u(t) {
              t.done ? r(t.value) : o(t.value).then(s, a);
            }
            u((n = n.apply(t, e || [])).next());
          });
        };
    const u = !1;
    class c {
      constructor() {
        (this.showQrPage = () => {
          const t = document.getElementById('qr-page'),
            e = t.querySelector(`[js="qr-thumb"]`);
          (e.src = this.thumbnailLink),
            t.appendChild(new s['a'](window.location.href).element()),
            (t.style.display = 'flex');
        }),
          (this.showArOpenerPage = (t) =>
            a(this, void 0, void 0, function* () {
              const e = new i['a'](`${this.dataProtocol}//${this.dataHost}`),
                r = document.getElementById('ar-opener-page');
              this.backLink ||
                ((r.getElementsByTagName('img')[0].src = this.thumbnailLink),
                (r.style.display = 'flex'));
              const n = r.getElementsByTagName('a')[0];
              n.href = 'android' === t ? this.glbIntentLink : this.usdzLink;
              const o = 'android' === t ? 'android' : 'usdz';
              n.addEventListener('click', () => e.postCount(this.modelUuid, o)),
                document.addEventListener('visibilitychange', () => {
                  !document.hidden &&
                    this.backLink &&
                    window.location.replace(this.backLink);
                }),
                n.click();
            })),
          (this.showErrorPage = (t) => {
            const e = document.getElementById('error-page');
            (e.getElementsByTagName('span')[0].innerText = t),
              (e.style.display = 'flex');
          }),
          (this.url = new URL(window.location.href)),
          (this.modelUuid = this.url.searchParams.get('model')),
          (this.envMode = this.url.searchParams.get('envMode'));
        const t = '&backLink=',
          e = window.location.href.indexOf(t);
        switch (
          ((this.backLink =
            e > 0 ? window.location.href.slice(e + t.length) : null),
          (this.dataProtocol = window.location.protocol),
          this.envMode)
        ) {
          case 'prod':
            this.dataHost = 'www.vectary.com';
            break;
          case 'test':
            this.dataHost = 'test.vectary.com';
            break;
          case 'stage':
            this.dataHost = 'stage.vectary.com';
            break;
          default:
            this.dataHost = window.location.host;
            break;
        }
        if (
          !this.modelUuid ||
          (this.dataHost.indexOf('localhost') < 0 &&
            36 !== this.modelUuid.length)
        )
          return (
            this.showErrorPage('Model parameter missing or incorrect format'),
            void 0
          );
        const r = u ? `pro/viewer` : `viewer`;
        (this.glbIntentLink = `intent://arvr.google.com/scene-viewer/1.0?mode=ar_only&file=${this.dataProtocol}//${this.dataHost}/${r}/data/${this.modelUuid}/android/${this.modelUuid}.glb      #Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;end;`),
          'intent://arvr.google.com/scene-viewer/1.0?mode=ar_only&file=https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/master/2.0/Avocado/glTF/Avocado.gltf#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=https://developers.google.com/ar;end;'(
            (this.usdzLink = `${this.dataProtocol}//${this.dataHost}/${r}/data/${this.modelUuid}/usdz/${this.modelUuid}.usdz`)
          ),
          (this.thumbnailLink = `${this.dataProtocol}//${this.dataHost}/${r}/data/${this.modelUuid}/gltf/${this.modelUuid}.viewerthumb.png`),
          this.loadPage();
      }
      loadPage() {
        return a(this, void 0, void 0, function* () {
          if (!(yield Object(o['a'])(this.usdzLink)))
            return (
              this.showErrorPage(`AR files not generated for this model`),
              void 0
            );
          const t = Object(n['a'])();
          switch (t) {
            case 'none':
              this.showQrPage();
              break;
            case 'apple':
            case 'android':
              this.showArOpenerPage(t);
              break;
          }
        });
      }
    }
    new c();
  },
});
