! function(t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var s = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var s in t) i.d(n, s, function(e) {
                return t[e]
            }.bind(null, s));
        return n
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "/", i(i.s = 2)
}([function(t, e, i) {
    var n;
    ! function(e, i) {
        "use strict";
        "object" == typeof t.exports ? t.exports = e.document ? i(e, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return i(t)
        } : i(e)
    }("undefined" != typeof window ? window : this, function(i, s) {
        "use strict";
        var o = [],
            a = i.document,
            r = Object.getPrototypeOf,
            l = o.slice,
            c = o.concat,
            h = o.push,
            u = o.indexOf,
            d = {},
            p = d.toString,
            f = d.hasOwnProperty,
            g = f.toString,
            m = g.call(Object),
            v = {},
            y = function(t) {
                return "function" == typeof t && "number" != typeof t.nodeType
            },
            b = function(t) {
                return null != t && t === t.window
            },
            w = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };

        function x(t, e, i) {
            var n, s, o = (i = i || a).createElement("script");
            if (o.text = t, e)
                for (n in w)(s = e[n] || e.getAttribute && e.getAttribute(n)) && o.setAttribute(n, s);
            i.head.appendChild(o).parentNode.removeChild(o)
        }

        function _(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? d[p.call(t)] || "object" : typeof t
        }
        var k = function(t, e) {
                return new k.fn.init(t, e)
            },
            C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

        function $(t) {
            var e = !!t && "length" in t && t.length,
                i = _(t);
            return !y(t) && !b(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }
        k.fn = k.prototype = {
            jquery: "3.4.1",
            constructor: k,
            length: 0,
            toArray: function() {
                return l.call(this)
            },
            get: function(t) {
                return null == t ? l.call(this) : t < 0 ? this[t + this.length] : this[t]
            },
            pushStack: function(t) {
                var e = k.merge(this.constructor(), t);
                return e.prevObject = this, e
            },
            each: function(t) {
                return k.each(this, t)
            },
            map: function(t) {
                return this.pushStack(k.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(l.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (t < 0 ? e : 0);
                return this.pushStack(i >= 0 && i < e ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: h,
            sort: o.sort,
            splice: o.splice
        }, k.extend = k.fn.extend = function() {
            var t, e, i, n, s, o, a = arguments[0] || {},
                r = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[r] || {}, r++), "object" == typeof a || y(a) || (a = {}), r === l && (a = this, r--); r < l; r++)
                if (null != (t = arguments[r]))
                    for (e in t) n = t[e], "__proto__" !== e && a !== n && (c && n && (k.isPlainObject(n) || (s = Array.isArray(n))) ? (i = a[e], o = s && !Array.isArray(i) ? [] : s || k.isPlainObject(i) ? i : {}, s = !1, a[e] = k.extend(c, o, n)) : void 0 !== n && (a[e] = n));
            return a
        }, k.extend({
            expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isPlainObject: function(t) {
                var e, i;
                return !(!t || "[object Object]" !== p.call(t)) && (!(e = r(t)) || "function" == typeof(i = f.call(e, "constructor") && e.constructor) && g.call(i) === m)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            globalEval: function(t, e) {
                x(t, {
                    nonce: e && e.nonce
                })
            },
            each: function(t, e) {
                var i, n = 0;
                if ($(t))
                    for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
                else
                    for (n in t)
                        if (!1 === e.call(t[n], n, t[n])) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(C, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && ($(Object(t)) ? k.merge(i, "string" == typeof t ? [t] : t) : h.call(i, t)), i
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : u.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, s = t.length; n < i; n++) t[s++] = e[n];
                return t.length = s, t
            },
            grep: function(t, e, i) {
                for (var n = [], s = 0, o = t.length, a = !i; s < o; s++) !e(t[s], s) !== a && n.push(t[s]);
                return n
            },
            map: function(t, e, i) {
                var n, s, o = 0,
                    a = [];
                if ($(t))
                    for (n = t.length; o < n; o++) null != (s = e(t[o], o, i)) && a.push(s);
                else
                    for (o in t) null != (s = e(t[o], o, i)) && a.push(s);
                return c.apply([], a)
            },
            guid: 1,
            support: v
        }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = o[Symbol.iterator]), k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            d["[object " + e + "]"] = e.toLowerCase()
        });
        var T = function(t) {
            var e, i, n, s, o, a, r, l, c, h, u, d, p, f, g, m, v, y, b, w = "sizzle" + 1 * new Date,
                x = t.document,
                _ = 0,
                k = 0,
                C = lt(),
                $ = lt(),
                T = lt(),
                D = lt(),
                S = function(t, e) {
                    return t === e && (u = !0), 0
                },
                E = {}.hasOwnProperty,
                z = [],
                A = z.pop,
                M = z.push,
                O = z.push,
                P = z.slice,
                L = function(t, e) {
                    for (var i = 0, n = t.length; i < n; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                R = "[\\x20\\t\\r\\n\\f]",
                H = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                F = "\\[" + R + "*(" + H + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + R + "*\\]",
                N = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
                q = new RegExp(R + "+", "g"),
                j = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
                B = new RegExp("^" + R + "*," + R + "*"),
                W = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
                Y = new RegExp(R + "|>"),
                U = new RegExp(N),
                V = new RegExp("^" + H + "$"),
                X = {
                    ID: new RegExp("^#(" + H + ")"),
                    CLASS: new RegExp("^\\.(" + H + ")"),
                    TAG: new RegExp("^(" + H + "|[*])"),
                    ATTR: new RegExp("^" + F),
                    PSEUDO: new RegExp("^" + N),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + I + ")$", "i"),
                    needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
                },
                G = /HTML$/i,
                Z = /^(?:input|select|textarea|button)$/i,
                K = /^h\d$/i,
                Q = /^[^{]+\{\s*\[native \w/,
                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                tt = /[+~]/,
                et = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
                it = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                st = function(t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                },
                ot = function() {
                    d()
                },
                at = wt(function(t) {
                    return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
            try {
                O.apply(z = P.call(x.childNodes), x.childNodes), z[x.childNodes.length].nodeType
            } catch (t) {
                O = {
                    apply: z.length ? function(t, e) {
                        M.apply(t, P.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }

            function rt(t, e, n, s) {
                var o, r, c, h, u, f, v, y = e && e.ownerDocument,
                    _ = e ? e.nodeType : 9;
                if (n = n || [], "string" != typeof t || !t || 1 !== _ && 9 !== _ && 11 !== _) return n;
                if (!s && ((e ? e.ownerDocument || e : x) !== p && d(e), e = e || p, g)) {
                    if (11 !== _ && (u = J.exec(t)))
                        if (o = u[1]) {
                            if (9 === _) {
                                if (!(c = e.getElementById(o))) return n;
                                if (c.id === o) return n.push(c), n
                            } else if (y && (c = y.getElementById(o)) && b(e, c) && c.id === o) return n.push(c), n
                        } else {
                            if (u[2]) return O.apply(n, e.getElementsByTagName(t)), n;
                            if ((o = u[3]) && i.getElementsByClassName && e.getElementsByClassName) return O.apply(n, e.getElementsByClassName(o)), n
                        } if (i.qsa && !D[t + " "] && (!m || !m.test(t)) && (1 !== _ || "object" !== e.nodeName.toLowerCase())) {
                        if (v = t, y = e, 1 === _ && Y.test(t)) {
                            for ((h = e.getAttribute("id")) ? h = h.replace(nt, st) : e.setAttribute("id", h = w), r = (f = a(t)).length; r--;) f[r] = "#" + h + " " + bt(f[r]);
                            v = f.join(","), y = tt.test(t) && vt(e.parentNode) || e
                        }
                        try {
                            return O.apply(n, y.querySelectorAll(v)), n
                        } catch (e) {
                            D(t, !0)
                        } finally {
                            h === w && e.removeAttribute("id")
                        }
                    }
                }
                return l(t.replace(j, "$1"), e, n, s)
            }

            function lt() {
                var t = [];
                return function e(i, s) {
                    return t.push(i + " ") > n.cacheLength && delete e[t.shift()], e[i + " "] = s
                }
            }

            function ct(t) {
                return t[w] = !0, t
            }

            function ht(t) {
                var e = p.createElement("fieldset");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function ut(t, e) {
                for (var i = t.split("|"), s = i.length; s--;) n.attrHandle[i[s]] = e
            }

            function dt(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function pt(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function ft(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function gt(t) {
                return function(e) {
                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && at(e) === t : e.disabled === t : "label" in e && e.disabled === t
                }
            }

            function mt(t) {
                return ct(function(e) {
                    return e = +e, ct(function(i, n) {
                        for (var s, o = t([], i.length, e), a = o.length; a--;) i[s = o[a]] && (i[s] = !(n[s] = i[s]))
                    })
                })
            }

            function vt(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }
            for (e in i = rt.support = {}, o = rt.isXML = function(t) {
                    var e = t.namespaceURI,
                        i = (t.ownerDocument || t).documentElement;
                    return !G.test(e || i && i.nodeName || "HTML")
                }, d = rt.setDocument = function(t) {
                    var e, s, a = t ? t.ownerDocument || t : x;
                    return a !== p && 9 === a.nodeType && a.documentElement ? (f = (p = a).documentElement, g = !o(p), x !== p && (s = p.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", ot, !1) : s.attachEvent && s.attachEvent("onunload", ot)), i.attributes = ht(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), i.getElementsByTagName = ht(function(t) {
                        return t.appendChild(p.createComment("")), !t.getElementsByTagName("*").length
                    }), i.getElementsByClassName = Q.test(p.getElementsByClassName), i.getById = ht(function(t) {
                        return f.appendChild(t).id = w, !p.getElementsByName || !p.getElementsByName(w).length
                    }), i.getById ? (n.filter.ID = function(t) {
                        var e = t.replace(et, it);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }, n.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && g) {
                            var i = e.getElementById(t);
                            return i ? [i] : []
                        }
                    }) : (n.filter.ID = function(t) {
                        var e = t.replace(et, it);
                        return function(t) {
                            var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                            return i && i.value === e
                        }
                    }, n.find.ID = function(t, e) {
                        if (void 0 !== e.getElementById && g) {
                            var i, n, s, o = e.getElementById(t);
                            if (o) {
                                if ((i = o.getAttributeNode("id")) && i.value === t) return [o];
                                for (s = e.getElementsByName(t), n = 0; o = s[n++];)
                                    if ((i = o.getAttributeNode("id")) && i.value === t) return [o]
                            }
                            return []
                        }
                    }), n.find.TAG = i.getElementsByTagName ? function(t, e) {
                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0
                    } : function(t, e) {
                        var i, n = [],
                            s = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return o
                    }, n.find.CLASS = i.getElementsByClassName && function(t, e) {
                        if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                    }, v = [], m = [], (i.qsa = Q.test(p.querySelectorAll)) && (ht(function(t) {
                        f.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + I + ")"), t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
                    }), ht(function(t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = p.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), f.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
                    })), (i.matchesSelector = Q.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && ht(function(t) {
                        i.disconnectedMatch = y.call(t, "*"), y.call(t, "[s!='']:x"), v.push("!=", N)
                    }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), e = Q.test(f.compareDocumentPosition), b = e || Q.test(f.contains) ? function(t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, S = e ? function(t, e) {
                        if (t === e) return u = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !i.sortDetached && e.compareDocumentPosition(t) === n ? t === p || t.ownerDocument === x && b(x, t) ? -1 : e === p || e.ownerDocument === x && b(x, e) ? 1 : h ? L(h, t) - L(h, e) : 0 : 4 & n ? -1 : 1)
                    } : function(t, e) {
                        if (t === e) return u = !0, 0;
                        var i, n = 0,
                            s = t.parentNode,
                            o = e.parentNode,
                            a = [t],
                            r = [e];
                        if (!s || !o) return t === p ? -1 : e === p ? 1 : s ? -1 : o ? 1 : h ? L(h, t) - L(h, e) : 0;
                        if (s === o) return dt(t, e);
                        for (i = t; i = i.parentNode;) a.unshift(i);
                        for (i = e; i = i.parentNode;) r.unshift(i);
                        for (; a[n] === r[n];) n++;
                        return n ? dt(a[n], r[n]) : a[n] === x ? -1 : r[n] === x ? 1 : 0
                    }, p) : p
                }, rt.matches = function(t, e) {
                    return rt(t, null, null, e)
                }, rt.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== p && d(t), i.matchesSelector && g && !D[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e))) try {
                        var n = y.call(t, e);
                        if (n || i.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                    } catch (t) {
                        D(e, !0)
                    }
                    return rt(e, p, null, [t]).length > 0
                }, rt.contains = function(t, e) {
                    return (t.ownerDocument || t) !== p && d(t), b(t, e)
                }, rt.attr = function(t, e) {
                    (t.ownerDocument || t) !== p && d(t);
                    var s = n.attrHandle[e.toLowerCase()],
                        o = s && E.call(n.attrHandle, e.toLowerCase()) ? s(t, e, !g) : void 0;
                    return void 0 !== o ? o : i.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
                }, rt.escape = function(t) {
                    return (t + "").replace(nt, st)
                }, rt.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, rt.uniqueSort = function(t) {
                    var e, n = [],
                        s = 0,
                        o = 0;
                    if (u = !i.detectDuplicates, h = !i.sortStable && t.slice(0), t.sort(S), u) {
                        for (; e = t[o++];) e === t[o] && (s = n.push(o));
                        for (; s--;) t.splice(n[s], 1)
                    }
                    return h = null, t
                }, s = rt.getText = function(t) {
                    var e, i = "",
                        n = 0,
                        o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += s(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else
                        for (; e = t[n++];) i += s(e);
                    return i
                }, (n = rt.selectors = {
                    cacheLength: 50,
                    createPseudo: ct,
                    match: X,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(et, it), t[3] = (t[3] || t[4] || t[5] || "").replace(et, it), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, i = !t[6] && t[2];
                            return X.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && U.test(i) && (e = a(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(et, it).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = C[t + " "];
                            return e || (e = new RegExp("(^|" + R + ")" + t + "(" + R + "|$)")) && C(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, e, i) {
                            return function(n) {
                                var s = rt.attr(n, t);
                                return null == s ? "!=" === e : !e || (s += "", "=" === e ? s === i : "!=" === e ? s !== i : "^=" === e ? i && 0 === s.indexOf(i) : "*=" === e ? i && s.indexOf(i) > -1 : "$=" === e ? i && s.slice(-i.length) === i : "~=" === e ? (" " + s.replace(q, " ") + " ").indexOf(i) > -1 : "|=" === e && (s === i || s.slice(0, i.length + 1) === i + "-"))
                            }
                        },
                        CHILD: function(t, e, i, n, s) {
                            var o = "nth" !== t.slice(0, 3),
                                a = "last" !== t.slice(-4),
                                r = "of-type" === e;
                            return 1 === n && 0 === s ? function(t) {
                                return !!t.parentNode
                            } : function(e, i, l) {
                                var c, h, u, d, p, f, g = o !== a ? "nextSibling" : "previousSibling",
                                    m = e.parentNode,
                                    v = r && e.nodeName.toLowerCase(),
                                    y = !l && !r,
                                    b = !1;
                                if (m) {
                                    if (o) {
                                        for (; g;) {
                                            for (d = e; d = d[g];)
                                                if (r ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                            f = g = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [a ? m.firstChild : m.lastChild], a && y) {
                                        for (b = (p = (c = (h = (u = (d = m)[w] || (d[w] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === _ && c[1]) && c[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || f.pop();)
                                            if (1 === d.nodeType && ++b && d === e) {
                                                h[t] = [_, p, b];
                                                break
                                            }
                                    } else if (y && (b = p = (c = (h = (u = (d = e)[w] || (d[w] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] || [])[0] === _ && c[1]), !1 === b)
                                        for (;
                                            (d = ++p && d && d[g] || (b = p = 0) || f.pop()) && ((r ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((h = (u = d[w] || (d[w] = {}))[d.uniqueID] || (u[d.uniqueID] = {}))[t] = [_, b]), d !== e)););
                                    return (b -= s) === n || b % n == 0 && b / n >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, e) {
                            var i, s = n.pseudos[t] || n.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);
                            return s[w] ? s(e) : s.length > 1 ? (i = [t, t, "", e], n.setFilters.hasOwnProperty(t.toLowerCase()) ? ct(function(t, i) {
                                for (var n, o = s(t, e), a = o.length; a--;) t[n = L(t, o[a])] = !(i[n] = o[a])
                            }) : function(t) {
                                return s(t, 0, i)
                            }) : s
                        }
                    },
                    pseudos: {
                        not: ct(function(t) {
                            var e = [],
                                i = [],
                                n = r(t.replace(j, "$1"));
                            return n[w] ? ct(function(t, e, i, s) {
                                for (var o, a = n(t, null, s, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o))
                            }) : function(t, s, o) {
                                return e[0] = t, n(e, null, o, i), e[0] = null, !i.pop()
                            }
                        }),
                        has: ct(function(t) {
                            return function(e) {
                                return rt(t, e).length > 0
                            }
                        }),
                        contains: ct(function(t) {
                            return t = t.replace(et, it),
                                function(e) {
                                    return (e.textContent || s(e)).indexOf(t) > -1
                                }
                        }),
                        lang: ct(function(t) {
                            return V.test(t || "") || rt.error("unsupported lang: " + t), t = t.replace(et, it).toLowerCase(),
                                function(e) {
                                    var i;
                                    do {
                                        if (i = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var i = t.location && t.location.hash;
                            return i && i.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === f
                        },
                        focus: function(t) {
                            return t === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: gt(!1),
                        disabled: gt(!0),
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !n.pseudos.empty(t)
                        },
                        header: function(t) {
                            return K.test(t.nodeName)
                        },
                        input: function(t) {
                            return Z.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        },
                        first: mt(function() {
                            return [0]
                        }),
                        last: mt(function(t, e) {
                            return [e - 1]
                        }),
                        eq: mt(function(t, e, i) {
                            return [i < 0 ? i + e : i]
                        }),
                        even: mt(function(t, e) {
                            for (var i = 0; i < e; i += 2) t.push(i);
                            return t
                        }),
                        odd: mt(function(t, e) {
                            for (var i = 1; i < e; i += 2) t.push(i);
                            return t
                        }),
                        lt: mt(function(t, e, i) {
                            for (var n = i < 0 ? i + e : i > e ? e : i; --n >= 0;) t.push(n);
                            return t
                        }),
                        gt: mt(function(t, e, i) {
                            for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
                            return t
                        })
                    }
                }).pseudos.nth = n.pseudos.eq, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) n.pseudos[e] = pt(e);
            for (e in {
                    submit: !0,
                    reset: !0
                }) n.pseudos[e] = ft(e);

            function yt() {}

            function bt(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                return n
            }

            function wt(t, e, i) {
                var n = e.dir,
                    s = e.next,
                    o = s || n,
                    a = i && "parentNode" === o,
                    r = k++;
                return e.first ? function(e, i, s) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || a) return t(e, i, s);
                    return !1
                } : function(e, i, l) {
                    var c, h, u, d = [_, r];
                    if (l) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || a) && t(e, i, l)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || a)
                                if (h = (u = e[w] || (e[w] = {}))[e.uniqueID] || (u[e.uniqueID] = {}), s && s === e.nodeName.toLowerCase()) e = e[n] || e;
                                else {
                                    if ((c = h[o]) && c[0] === _ && c[1] === r) return d[2] = c[2];
                                    if (h[o] = d, d[2] = t(e, i, l)) return !0
                                } return !1
                }
            }

            function xt(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var s = t.length; s--;)
                        if (!t[s](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function _t(t, e, i, n, s) {
                for (var o, a = [], r = 0, l = t.length, c = null != e; r < l; r++)(o = t[r]) && (i && !i(o, n, s) || (a.push(o), c && e.push(r)));
                return a
            }

            function kt(t, e, i, n, s, o) {
                return n && !n[w] && (n = kt(n)), s && !s[w] && (s = kt(s, o)), ct(function(o, a, r, l) {
                    var c, h, u, d = [],
                        p = [],
                        f = a.length,
                        g = o || function(t, e, i) {
                            for (var n = 0, s = e.length; n < s; n++) rt(t, e[n], i);
                            return i
                        }(e || "*", r.nodeType ? [r] : r, []),
                        m = !t || !o && e ? g : _t(g, d, t, r, l),
                        v = i ? s || (o ? t : f || n) ? [] : a : m;
                    if (i && i(m, v, r, l), n)
                        for (c = _t(v, p), n(c, [], r, l), h = c.length; h--;)(u = c[h]) && (v[p[h]] = !(m[p[h]] = u));
                    if (o) {
                        if (s || t) {
                            if (s) {
                                for (c = [], h = v.length; h--;)(u = v[h]) && c.push(m[h] = u);
                                s(null, v = [], c, l)
                            }
                            for (h = v.length; h--;)(u = v[h]) && (c = s ? L(o, u) : d[h]) > -1 && (o[c] = !(a[c] = u))
                        }
                    } else v = _t(v === a ? v.splice(f, v.length) : v), s ? s(null, a, v, l) : O.apply(a, v)
                })
            }

            function Ct(t) {
                for (var e, i, s, o = t.length, a = n.relative[t[0].type], r = a || n.relative[" "], l = a ? 1 : 0, h = wt(function(t) {
                        return t === e
                    }, r, !0), u = wt(function(t) {
                        return L(e, t) > -1
                    }, r, !0), d = [function(t, i, n) {
                        var s = !a && (n || i !== c) || ((e = i).nodeType ? h(t, i, n) : u(t, i, n));
                        return e = null, s
                    }]; l < o; l++)
                    if (i = n.relative[t[l].type]) d = [wt(xt(d), i)];
                    else {
                        if ((i = n.filter[t[l].type].apply(null, t[l].matches))[w]) {
                            for (s = ++l; s < o && !n.relative[t[s].type]; s++);
                            return kt(l > 1 && xt(d), l > 1 && bt(t.slice(0, l - 1).concat({
                                value: " " === t[l - 2].type ? "*" : ""
                            })).replace(j, "$1"), i, l < s && Ct(t.slice(l, s)), s < o && Ct(t = t.slice(s)), s < o && bt(t))
                        }
                        d.push(i)
                    } return xt(d)
            }
            return yt.prototype = n.filters = n.pseudos, n.setFilters = new yt, a = rt.tokenize = function(t, e) {
                var i, s, o, a, r, l, c, h = $[t + " "];
                if (h) return e ? 0 : h.slice(0);
                for (r = t, l = [], c = n.preFilter; r;) {
                    for (a in i && !(s = B.exec(r)) || (s && (r = r.slice(s[0].length) || r), l.push(o = [])), i = !1, (s = W.exec(r)) && (i = s.shift(), o.push({
                            value: i,
                            type: s[0].replace(j, " ")
                        }), r = r.slice(i.length)), n.filter) !(s = X[a].exec(r)) || c[a] && !(s = c[a](s)) || (i = s.shift(), o.push({
                        value: i,
                        type: a,
                        matches: s
                    }), r = r.slice(i.length));
                    if (!i) break
                }
                return e ? r.length : r ? rt.error(t) : $(t, l).slice(0)
            }, r = rt.compile = function(t, e) {
                var i, s = [],
                    o = [],
                    r = T[t + " "];
                if (!r) {
                    for (e || (e = a(t)), i = e.length; i--;)(r = Ct(e[i]))[w] ? s.push(r) : o.push(r);
                    (r = T(t, function(t, e) {
                        var i = e.length > 0,
                            s = t.length > 0,
                            o = function(o, a, r, l, h) {
                                var u, f, m, v = 0,
                                    y = "0",
                                    b = o && [],
                                    w = [],
                                    x = c,
                                    k = o || s && n.find.TAG("*", h),
                                    C = _ += null == x ? 1 : Math.random() || .1,
                                    $ = k.length;
                                for (h && (c = a === p || a || h); y !== $ && null != (u = k[y]); y++) {
                                    if (s && u) {
                                        for (f = 0, a || u.ownerDocument === p || (d(u), r = !g); m = t[f++];)
                                            if (m(u, a || p, r)) {
                                                l.push(u);
                                                break
                                            } h && (_ = C)
                                    }
                                    i && ((u = !m && u) && v--, o && b.push(u))
                                }
                                if (v += y, i && y !== v) {
                                    for (f = 0; m = e[f++];) m(b, w, a, r);
                                    if (o) {
                                        if (v > 0)
                                            for (; y--;) b[y] || w[y] || (w[y] = A.call(l));
                                        w = _t(w)
                                    }
                                    O.apply(l, w), h && !o && w.length > 0 && v + e.length > 1 && rt.uniqueSort(l)
                                }
                                return h && (_ = C, c = x), b
                            };
                        return i ? ct(o) : o
                    }(o, s))).selector = t
                }
                return r
            }, l = rt.select = function(t, e, i, s) {
                var o, l, c, h, u, d = "function" == typeof t && t,
                    p = !s && a(t = d.selector || t);
                if (i = i || [], 1 === p.length) {
                    if ((l = p[0] = p[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && g && n.relative[l[1].type]) {
                        if (!(e = (n.find.ID(c.matches[0].replace(et, it), e) || [])[0])) return i;
                        d && (e = e.parentNode), t = t.slice(l.shift().value.length)
                    }
                    for (o = X.needsContext.test(t) ? 0 : l.length; o-- && (c = l[o], !n.relative[h = c.type]);)
                        if ((u = n.find[h]) && (s = u(c.matches[0].replace(et, it), tt.test(l[0].type) && vt(e.parentNode) || e))) {
                            if (l.splice(o, 1), !(t = s.length && bt(l))) return O.apply(i, s), i;
                            break
                        }
                }
                return (d || r(t, p))(s, e, !g, i, !e || tt.test(t) && vt(e.parentNode) || e), i
            }, i.sortStable = w.split("").sort(S).join("") === w, i.detectDuplicates = !!u, d(), i.sortDetached = ht(function(t) {
                return 1 & t.compareDocumentPosition(p.createElement("fieldset"))
            }), ht(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || ut("type|href|height|width", function(t, e, i) {
                if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), i.attributes && ht(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || ut("value", function(t, e, i) {
                if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), ht(function(t) {
                return null == t.getAttribute("disabled")
            }) || ut(I, function(t, e, i) {
                var n;
                if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), rt
        }(i);
        k.find = T, k.expr = T.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = T.uniqueSort, k.text = T.getText, k.isXMLDoc = T.isXML, k.contains = T.contains, k.escapeSelector = T.escape;
        var D = function(t, e, i) {
                for (var n = [], s = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (s && k(t).is(i)) break;
                        n.push(t)
                    } return n
            },
            S = function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            E = k.expr.match.needsContext;

        function z(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        }
        var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

        function M(t, e, i) {
            return y(e) ? k.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            }) : e.nodeType ? k.grep(t, function(t) {
                return t === e !== i
            }) : "string" != typeof e ? k.grep(t, function(t) {
                return u.call(e, t) > -1 !== i
            }) : k.filter(e, t, i)
        }
        k.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? k.find.matchesSelector(n, t) ? [n] : [] : k.find.matches(t, k.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, k.fn.extend({
            find: function(t) {
                var e, i, n = this.length,
                    s = this;
                if ("string" != typeof t) return this.pushStack(k(t).filter(function() {
                    for (e = 0; e < n; e++)
                        if (k.contains(s[e], this)) return !0
                }));
                for (i = this.pushStack([]), e = 0; e < n; e++) k.find(t, s[e], i);
                return n > 1 ? k.uniqueSort(i) : i
            },
            filter: function(t) {
                return this.pushStack(M(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(M(this, t || [], !0))
            },
            is: function(t) {
                return !!M(this, "string" == typeof t && E.test(t) ? k(t) : t || [], !1).length
            }
        });
        var O, P = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (k.fn.init = function(t, e, i) {
            var n, s;
            if (!t) return this;
            if (i = i || O, "string" == typeof t) {
                if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : P.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof k ? e[0] : e, k.merge(this, k.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : a, !0)), A.test(n[1]) && k.isPlainObject(e))
                        for (n in e) y(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return (s = a.getElementById(n[2])) && (this[0] = s, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : y(t) ? void 0 !== i.ready ? i.ready(t) : t(k) : k.makeArray(t, this)
        }).prototype = k.fn, O = k(a);
        var L = /^(?:parents|prev(?:Until|All))/,
            I = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };

        function R(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }
        k.fn.extend({
            has: function(t) {
                var e = k(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; t < i; t++)
                        if (k.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                var i, n = 0,
                    s = this.length,
                    o = [],
                    a = "string" != typeof t && k(t);
                if (!E.test(t))
                    for (; n < s; n++)
                        for (i = this[n]; i && i !== e; i = i.parentNode)
                            if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && k.find.matchesSelector(i, t))) {
                                o.push(i);
                                break
                            } return this.pushStack(o.length > 1 ? k.uniqueSort(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? u.call(k(t), this[0]) : u.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(k.uniqueSort(k.merge(this.get(), k(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), k.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return D(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return D(t, "parentNode", i)
            },
            next: function(t) {
                return R(t, "nextSibling")
            },
            prev: function(t) {
                return R(t, "previousSibling")
            },
            nextAll: function(t) {
                return D(t, "nextSibling")
            },
            prevAll: function(t) {
                return D(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return D(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return D(t, "previousSibling", i)
            },
            siblings: function(t) {
                return S((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return S(t.firstChild)
            },
            contents: function(t) {
                return void 0 !== t.contentDocument ? t.contentDocument : (z(t, "template") && (t = t.content || t), k.merge([], t.childNodes))
            }
        }, function(t, e) {
            k.fn[t] = function(i, n) {
                var s = k.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (s = k.filter(n, s)), this.length > 1 && (I[t] || k.uniqueSort(s), L.test(t) && s.reverse()), this.pushStack(s)
            }
        });
        var H = /[^\x20\t\r\n\f]+/g;

        function F(t) {
            return t
        }

        function N(t) {
            throw t
        }

        function q(t, e, i, n) {
            var s;
            try {
                t && y(s = t.promise) ? s.call(t).done(e).fail(i) : t && y(s = t.then) ? s.call(t, e, i) : e.apply(void 0, [t].slice(n))
            } catch (t) {
                i.apply(void 0, [t])
            }
        }
        k.Callbacks = function(t) {
            t = "string" == typeof t ? function(t) {
                var e = {};
                return k.each(t.match(H) || [], function(t, i) {
                    e[i] = !0
                }), e
            }(t) : k.extend({}, t);
            var e, i, n, s, o = [],
                a = [],
                r = -1,
                l = function() {
                    for (s = s || t.once, n = e = !0; a.length; r = -1)
                        for (i = a.shift(); ++r < o.length;) !1 === o[r].apply(i[0], i[1]) && t.stopOnFalse && (r = o.length, i = !1);
                    t.memory || (i = !1), e = !1, s && (o = i ? [] : "")
                },
                c = {
                    add: function() {
                        return o && (i && !e && (r = o.length - 1, a.push(i)), function e(i) {
                            k.each(i, function(i, n) {
                                y(n) ? t.unique && c.has(n) || o.push(n) : n && n.length && "string" !== _(n) && e(n)
                            })
                        }(arguments), i && !e && l()), this
                    },
                    remove: function() {
                        return k.each(arguments, function(t, e) {
                            for (var i;
                                (i = k.inArray(e, o, i)) > -1;) o.splice(i, 1), i <= r && r--
                        }), this
                    },
                    has: function(t) {
                        return t ? k.inArray(t, o) > -1 : o.length > 0
                    },
                    empty: function() {
                        return o && (o = []), this
                    },
                    disable: function() {
                        return s = a = [], o = i = "", this
                    },
                    disabled: function() {
                        return !o
                    },
                    lock: function() {
                        return s = a = [], i || e || (o = i = ""), this
                    },
                    locked: function() {
                        return !!s
                    },
                    fireWith: function(t, i) {
                        return s || (i = [t, (i = i || []).slice ? i.slice() : i], a.push(i), e || l()), this
                    },
                    fire: function() {
                        return c.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return c
        }, k.extend({
            Deferred: function(t) {
                var e = [
                        ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                        ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"]
                    ],
                    n = "pending",
                    s = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        catch: function(t) {
                            return s.then(null, t)
                        },
                        pipe: function() {
                            var t = arguments;
                            return k.Deferred(function(i) {
                                k.each(e, function(e, n) {
                                    var s = y(t[n[4]]) && t[n[4]];
                                    o[n[1]](function() {
                                        var t = s && s.apply(this, arguments);
                                        t && y(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, s ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        then: function(t, n, s) {
                            var o = 0;

                            function a(t, e, n, s) {
                                return function() {
                                    var r = this,
                                        l = arguments,
                                        c = function() {
                                            var i, c;
                                            if (!(t < o)) {
                                                if ((i = n.apply(r, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                c = i && ("object" == typeof i || "function" == typeof i) && i.then, y(c) ? s ? c.call(i, a(o, e, F, s), a(o, e, N, s)) : (o++, c.call(i, a(o, e, F, s), a(o, e, N, s), a(o, e, F, e.notifyWith))) : (n !== F && (r = void 0, l = [i]), (s || e.resolveWith)(r, l))
                                            }
                                        },
                                        h = s ? c : function() {
                                            try {
                                                c()
                                            } catch (i) {
                                                k.Deferred.exceptionHook && k.Deferred.exceptionHook(i, h.stackTrace), t + 1 >= o && (n !== N && (r = void 0, l = [i]), e.rejectWith(r, l))
                                            }
                                        };
                                    t ? h() : (k.Deferred.getStackHook && (h.stackTrace = k.Deferred.getStackHook()), i.setTimeout(h))
                                }
                            }
                            return k.Deferred(function(i) {
                                e[0][3].add(a(0, i, y(s) ? s : F, i.notifyWith)), e[1][3].add(a(0, i, y(t) ? t : F)), e[2][3].add(a(0, i, y(n) ? n : N))
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? k.extend(t, s) : s
                        }
                    },
                    o = {};
                return k.each(e, function(t, i) {
                    var a = i[2],
                        r = i[5];
                    s[i[1]] = a.add, r && a.add(function() {
                        n = r
                    }, e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), a.add(i[3].fire), o[i[0]] = function() {
                        return o[i[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[i[0] + "With"] = a.fireWith
                }), s.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e = arguments.length,
                    i = e,
                    n = Array(i),
                    s = l.call(arguments),
                    o = k.Deferred(),
                    a = function(t) {
                        return function(i) {
                            n[t] = this, s[t] = arguments.length > 1 ? l.call(arguments) : i, --e || o.resolveWith(n, s)
                        }
                    };
                if (e <= 1 && (q(t, o.done(a(i)).resolve, o.reject, !e), "pending" === o.state() || y(s[i] && s[i].then))) return o.then();
                for (; i--;) q(s[i], a(i), o.reject);
                return o.promise()
            }
        });
        var j = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        k.Deferred.exceptionHook = function(t, e) {
            i.console && i.console.warn && t && j.test(t.name) && i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, k.readyException = function(t) {
            i.setTimeout(function() {
                throw t
            })
        };
        var B = k.Deferred();

        function W() {
            a.removeEventListener("DOMContentLoaded", W), i.removeEventListener("load", W), k.ready()
        }
        k.fn.ready = function(t) {
            return B.then(t).catch(function(t) {
                k.readyException(t)
            }), this
        }, k.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(t) {
                (!0 === t ? --k.readyWait : k.isReady) || (k.isReady = !0, !0 !== t && --k.readyWait > 0 || B.resolveWith(a, [k]))
            }
        }), k.ready.then = B.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? i.setTimeout(k.ready) : (a.addEventListener("DOMContentLoaded", W), i.addEventListener("load", W));
        var Y = function(t, e, i, n, s, o, a) {
                var r = 0,
                    l = t.length,
                    c = null == i;
                if ("object" === _(i))
                    for (r in s = !0, i) Y(t, e, r, i[r], !0, o, a);
                else if (void 0 !== n && (s = !0, y(n) || (a = !0), c && (a ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                        return c.call(k(t), i)
                    })), e))
                    for (; r < l; r++) e(t[r], i, a ? n : n.call(t[r], r, e(t[r], i)));
                return s ? t : c ? e.call(t) : l ? e(t[0], i) : o
            },
            U = /^-ms-/,
            V = /-([a-z])/g;

        function X(t, e) {
            return e.toUpperCase()
        }

        function G(t) {
            return t.replace(U, "ms-").replace(V, X)
        }
        var Z = function(t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };

        function K() {
            this.expando = k.expando + K.uid++
        }
        K.uid = 1, K.prototype = {
            cache: function(t) {
                var e = t[this.expando];
                return e || (e = {}, Z(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, i) {
                var n, s = this.cache(t);
                if ("string" == typeof e) s[G(e)] = i;
                else
                    for (n in e) s[G(n)] = e[n];
                return s
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][G(e)]
            },
            access: function(t, e, i) {
                return void 0 === e || e && "string" == typeof e && void 0 === i ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n = t[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== e) {
                        i = (e = Array.isArray(e) ? e.map(G) : (e = G(e)) in n ? [e] : e.match(H) || []).length;
                        for (; i--;) delete n[e[i]]
                    }(void 0 === e || k.isEmptyObject(n)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !k.isEmptyObject(e)
            }
        };
        var Q = new K,
            J = new K,
            tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            et = /[A-Z]/g;

        function it(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(et, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                    try {
                        i = function(t) {
                            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t)
                        }(i)
                    } catch (t) {}
                    J.set(t, e, i)
                } else i = void 0;
            return i
        }
        k.extend({
            hasData: function(t) {
                return J.hasData(t) || Q.hasData(t)
            },
            data: function(t, e, i) {
                return J.access(t, e, i)
            },
            removeData: function(t, e) {
                J.remove(t, e)
            },
            _data: function(t, e, i) {
                return Q.access(t, e, i)
            },
            _removeData: function(t, e) {
                Q.remove(t, e)
            }
        }), k.fn.extend({
            data: function(t, e) {
                var i, n, s, o = this[0],
                    a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (s = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                        for (i = a.length; i--;) a[i] && 0 === (n = a[i].name).indexOf("data-") && (n = G(n.slice(5)), it(o, n, s[n]));
                        Q.set(o, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof t ? this.each(function() {
                    J.set(this, t)
                }) : Y(this, function(e) {
                    var i;
                    if (o && void 0 === e) return void 0 !== (i = J.get(o, t)) ? i : void 0 !== (i = it(o, t)) ? i : void 0;
                    this.each(function() {
                        J.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    J.remove(this, t)
                })
            }
        }), k.extend({
            queue: function(t, e, i) {
                var n;
                if (t) return e = (e || "fx") + "queue", n = Q.get(t, e), i && (!n || Array.isArray(i) ? n = Q.access(t, e, k.makeArray(i)) : n.push(i)), n || []
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = k.queue(t, e),
                    n = i.length,
                    s = i.shift(),
                    o = k._queueHooks(t, e);
                "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, function() {
                    k.dequeue(t, e)
                }, o)), !n && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return Q.get(t, i) || Q.access(t, i, {
                    empty: k.Callbacks("once memory").add(function() {
                        Q.remove(t, [e + "queue", i])
                    })
                })
            }
        }), k.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? k.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = k.queue(this, t, e);
                    k._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && k.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    k.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    s = k.Deferred(),
                    o = this,
                    a = this.length,
                    r = function() {
                        --n || s.resolveWith(o, [o])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(i = Q.get(o[a], t + "queueHooks")) && i.empty && (n++, i.empty.add(r));
                return r(), s.promise(e)
            }
        });
        var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            st = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
            ot = ["Top", "Right", "Bottom", "Left"],
            at = a.documentElement,
            rt = function(t) {
                return k.contains(t.ownerDocument, t)
            },
            lt = {
                composed: !0
            };
        at.getRootNode && (rt = function(t) {
            return k.contains(t.ownerDocument, t) || t.getRootNode(lt) === t.ownerDocument
        });
        var ct = function(t, e) {
                return "none" === (t = e || t).style.display || "" === t.style.display && rt(t) && "none" === k.css(t, "display")
            },
            ht = function(t, e, i, n) {
                var s, o, a = {};
                for (o in e) a[o] = t.style[o], t.style[o] = e[o];
                for (o in s = i.apply(t, n || []), e) t.style[o] = a[o];
                return s
            };

        function ut(t, e, i, n) {
            var s, o, a = 20,
                r = n ? function() {
                    return n.cur()
                } : function() {
                    return k.css(t, e, "")
                },
                l = r(),
                c = i && i[3] || (k.cssNumber[e] ? "" : "px"),
                h = t.nodeType && (k.cssNumber[e] || "px" !== c && +l) && st.exec(k.css(t, e));
            if (h && h[3] !== c) {
                for (l /= 2, c = c || h[3], h = +l || 1; a--;) k.style(t, e, h + c), (1 - o) * (1 - (o = r() / l || .5)) <= 0 && (a = 0), h /= o;
                h *= 2, k.style(t, e, h + c), i = i || []
            }
            return i && (h = +h || +l || 0, s = i[1] ? h + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = h, n.end = s)), s
        }
        var dt = {};

        function pt(t) {
            var e, i = t.ownerDocument,
                n = t.nodeName,
                s = dt[n];
            return s || (e = i.body.appendChild(i.createElement(n)), s = k.css(e, "display"), e.parentNode.removeChild(e), "none" === s && (s = "block"), dt[n] = s, s)
        }

        function ft(t, e) {
            for (var i, n, s = [], o = 0, a = t.length; o < a; o++)(n = t[o]).style && (i = n.style.display, e ? ("none" === i && (s[o] = Q.get(n, "display") || null, s[o] || (n.style.display = "")), "" === n.style.display && ct(n) && (s[o] = pt(n))) : "none" !== i && (s[o] = "none", Q.set(n, "display", i)));
            for (o = 0; o < a; o++) null != s[o] && (t[o].style.display = s[o]);
            return t
        }
        k.fn.extend({
            show: function() {
                return ft(this, !0)
            },
            hide: function() {
                return ft(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    ct(this) ? k(this).show() : k(this).hide()
                })
            }
        });
        var gt = /^(?:checkbox|radio)$/i,
            mt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            vt = /^$|^module$|\/(?:java|ecma)script/i,
            yt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };

        function bt(t, e) {
            var i;
            return i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && z(t, e) ? k.merge([t], i) : i
        }

        function wt(t, e) {
            for (var i = 0, n = t.length; i < n; i++) Q.set(t[i], "globalEval", !e || Q.get(e[i], "globalEval"))
        }
        yt.optgroup = yt.option, yt.tbody = yt.tfoot = yt.colgroup = yt.caption = yt.thead, yt.th = yt.td;
        var xt, _t, kt = /<|&#?\w+;/;

        function Ct(t, e, i, n, s) {
            for (var o, a, r, l, c, h, u = e.createDocumentFragment(), d = [], p = 0, f = t.length; p < f; p++)
                if ((o = t[p]) || 0 === o)
                    if ("object" === _(o)) k.merge(d, o.nodeType ? [o] : o);
                    else if (kt.test(o)) {
                for (a = a || u.appendChild(e.createElement("div")), r = (mt.exec(o) || ["", ""])[1].toLowerCase(), l = yt[r] || yt._default, a.innerHTML = l[1] + k.htmlPrefilter(o) + l[2], h = l[0]; h--;) a = a.lastChild;
                k.merge(d, a.childNodes), (a = u.firstChild).textContent = ""
            } else d.push(e.createTextNode(o));
            for (u.textContent = "", p = 0; o = d[p++];)
                if (n && k.inArray(o, n) > -1) s && s.push(o);
                else if (c = rt(o), a = bt(u.appendChild(o), "script"), c && wt(a), i)
                for (h = 0; o = a[h++];) vt.test(o.type || "") && i.push(o);
            return u
        }
        xt = a.createDocumentFragment().appendChild(a.createElement("div")), (_t = a.createElement("input")).setAttribute("type", "radio"), _t.setAttribute("checked", "checked"), _t.setAttribute("name", "t"), xt.appendChild(_t), v.checkClone = xt.cloneNode(!0).cloneNode(!0).lastChild.checked, xt.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!xt.cloneNode(!0).lastChild.defaultValue;
        var $t = /^key/,
            Tt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Dt = /^([^.]*)(?:\.(.+)|)/;

        function St() {
            return !0
        }

        function Et() {
            return !1
        }

        function zt(t, e) {
            return t === function() {
                try {
                    return a.activeElement
                } catch (t) {}
            }() == ("focus" === e)
        }

        function At(t, e, i, n, s, o) {
            var a, r;
            if ("object" == typeof e) {
                for (r in "string" != typeof i && (n = n || i, i = void 0), e) At(t, r, i, n, e[r], o);
                return t
            }
            if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = Et;
            else if (!s) return t;
            return 1 === o && (a = s, (s = function(t) {
                return k().off(t), a.apply(this, arguments)
            }).guid = a.guid || (a.guid = k.guid++)), t.each(function() {
                k.event.add(this, e, s, n, i)
            })
        }

        function Mt(t, e, i) {
            i ? (Q.set(t, e, !1), k.event.add(t, e, {
                namespace: !1,
                handler: function(t) {
                    var n, s, o = Q.get(this, e);
                    if (1 & t.isTrigger && this[e]) {
                        if (o.length)(k.event.special[e] || {}).delegateType && t.stopPropagation();
                        else if (o = l.call(arguments), Q.set(this, e, o), n = i(this, e), this[e](), o !== (s = Q.get(this, e)) || n ? Q.set(this, e, !1) : s = {}, o !== s) return t.stopImmediatePropagation(), t.preventDefault(), s.value
                    } else o.length && (Q.set(this, e, {
                        value: k.event.trigger(k.extend(o[0], k.Event.prototype), o.slice(1), this)
                    }), t.stopImmediatePropagation())
                }
            })) : void 0 === Q.get(t, e) && k.event.add(t, e, St)
        }
        k.event = {
            global: {},
            add: function(t, e, i, n, s) {
                var o, a, r, l, c, h, u, d, p, f, g, m = Q.get(t);
                if (m)
                    for (i.handler && (i = (o = i).handler, s = o.selector), s && k.find.matchesSelector(at, s), i.guid || (i.guid = k.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                            return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0
                        }), c = (e = (e || "").match(H) || [""]).length; c--;) p = g = (r = Dt.exec(e[c]) || [])[1], f = (r[2] || "").split(".").sort(), p && (u = k.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, u = k.event.special[p] || {}, h = k.extend({
                        type: p,
                        origType: g,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        needsContext: s && k.expr.match.needsContext.test(s),
                        namespace: f.join(".")
                    }, o), (d = l[p]) || ((d = l[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, f, a) || t.addEventListener && t.addEventListener(p, a)), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, h) : d.push(h), k.event.global[p] = !0)
            },
            remove: function(t, e, i, n, s) {
                var o, a, r, l, c, h, u, d, p, f, g, m = Q.hasData(t) && Q.get(t);
                if (m && (l = m.events)) {
                    for (c = (e = (e || "").match(H) || [""]).length; c--;)
                        if (p = g = (r = Dt.exec(e[c]) || [])[1], f = (r[2] || "").split(".").sort(), p) {
                            for (u = k.event.special[p] || {}, d = l[p = (n ? u.delegateType : u.bindType) || p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) h = d[o], !s && g !== h.origType || i && i.guid !== h.guid || r && !r.test(h.namespace) || n && n !== h.selector && ("**" !== n || !h.selector) || (d.splice(o, 1), h.selector && d.delegateCount--, u.remove && u.remove.call(t, h));
                            a && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, m.handle) || k.removeEvent(t, p, m.handle), delete l[p])
                        } else
                            for (p in l) k.event.remove(t, p + e[c], i, n, !0);
                    k.isEmptyObject(l) && Q.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                var e, i, n, s, o, a, r = k.event.fix(t),
                    l = new Array(arguments.length),
                    c = (Q.get(this, "events") || {})[r.type] || [],
                    h = k.event.special[r.type] || {};
                for (l[0] = r, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                if (r.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, r)) {
                    for (a = k.event.handlers.call(this, r, c), e = 0;
                        (s = a[e++]) && !r.isPropagationStopped();)
                        for (r.currentTarget = s.elem, i = 0;
                            (o = s.handlers[i++]) && !r.isImmediatePropagationStopped();) r.rnamespace && !1 !== o.namespace && !r.rnamespace.test(o.namespace) || (r.handleObj = o, r.data = o.data, void 0 !== (n = ((k.event.special[o.origType] || {}).handle || o.handler).apply(s.elem, l)) && !1 === (r.result = n) && (r.preventDefault(), r.stopPropagation()));
                    return h.postDispatch && h.postDispatch.call(this, r), r.result
                }
            },
            handlers: function(t, e) {
                var i, n, s, o, a, r = [],
                    l = e.delegateCount,
                    c = t.target;
                if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                    for (; c !== this; c = c.parentNode || this)
                        if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                            for (o = [], a = {}, i = 0; i < l; i++) void 0 === a[s = (n = e[i]).selector + " "] && (a[s] = n.needsContext ? k(s, this).index(c) > -1 : k.find(s, this, null, [c]).length), a[s] && o.push(n);
                            o.length && r.push({
                                elem: c,
                                handlers: o
                            })
                        } return c = this, l < e.length && r.push({
                    elem: c,
                    handlers: e.slice(l)
                }), r
            },
            addProp: function(t, e) {
                Object.defineProperty(k.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: y(e) ? function() {
                        if (this.originalEvent) return e(this.originalEvent)
                    } : function() {
                        if (this.originalEvent) return this.originalEvent[t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(t) {
                return t[k.expando] ? t : new k.Event(t)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(t) {
                        var e = this || t;
                        return gt.test(e.type) && e.click && z(e, "input") && Mt(e, "click", St), !1
                    },
                    trigger: function(t) {
                        var e = this || t;
                        return gt.test(e.type) && e.click && z(e, "input") && Mt(e, "click"), !0
                    },
                    _default: function(t) {
                        var e = t.target;
                        return gt.test(e.type) && e.click && z(e, "input") && Q.get(e, "click") || z(e, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, k.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, k.Event = function(t, e) {
            if (!(this instanceof k.Event)) return new k.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? St : Et, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && k.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[k.expando] = !0
        }, k.Event.prototype = {
            constructor: k.Event,
            isDefaultPrevented: Et,
            isPropagationStopped: Et,
            isImmediatePropagationStopped: Et,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = St, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = St, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = St, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, k.each({
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
            code: !0,
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
            which: function(t) {
                var e = t.button;
                return null == t.which && $t.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && Tt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, k.event.addProp), k.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            k.event.special[t] = {
                setup: function() {
                    return Mt(this, t, zt), !1
                },
                trigger: function() {
                    return Mt(this, t), !0
                },
                delegateType: e
            }
        }), k.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            k.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = t.relatedTarget,
                        s = t.handleObj;
                    return n && (n === this || k.contains(this, n)) || (t.type = s.origType, i = s.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), k.fn.extend({
            on: function(t, e, i, n) {
                return At(this, t, e, i, n)
            },
            one: function(t, e, i, n) {
                return At(this, t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, s;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, k(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (s in t) this.off(s, e, t[s]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = Et), this.each(function() {
                    k.event.remove(this, t, i, e)
                })
            }
        });
        var Ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            Pt = /<script|<style|<link/i,
            Lt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            It = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

        function Rt(t, e) {
            return z(t, "table") && z(11 !== e.nodeType ? e : e.firstChild, "tr") && k(t).children("tbody")[0] || t
        }

        function Ht(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function Ft(t) {
            return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
        }

        function Nt(t, e) {
            var i, n, s, o, a, r, l, c;
            if (1 === e.nodeType) {
                if (Q.hasData(t) && (o = Q.access(t), a = Q.set(e, o), c = o.events))
                    for (s in delete a.handle, a.events = {}, c)
                        for (i = 0, n = c[s].length; i < n; i++) k.event.add(e, s, c[s][i]);
                J.hasData(t) && (r = J.access(t), l = k.extend({}, r), J.set(e, l))
            }
        }

        function qt(t, e, i, n) {
            e = c.apply([], e);
            var s, o, a, r, l, h, u = 0,
                d = t.length,
                p = d - 1,
                f = e[0],
                g = y(f);
            if (g || d > 1 && "string" == typeof f && !v.checkClone && Lt.test(f)) return t.each(function(s) {
                var o = t.eq(s);
                g && (e[0] = f.call(this, s, o.html())), qt(o, e, i, n)
            });
            if (d && (o = (s = Ct(e, t[0].ownerDocument, !1, t, n)).firstChild, 1 === s.childNodes.length && (s = o), o || n)) {
                for (r = (a = k.map(bt(s, "script"), Ht)).length; u < d; u++) l = s, u !== p && (l = k.clone(l, !0, !0), r && k.merge(a, bt(l, "script"))), i.call(t[u], l, u);
                if (r)
                    for (h = a[a.length - 1].ownerDocument, k.map(a, Ft), u = 0; u < r; u++) l = a[u], vt.test(l.type || "") && !Q.access(l, "globalEval") && k.contains(h, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? k._evalUrl && !l.noModule && k._evalUrl(l.src, {
                        nonce: l.nonce || l.getAttribute("nonce")
                    }) : x(l.textContent.replace(It, ""), l, h))
            }
            return t
        }

        function jt(t, e, i) {
            for (var n, s = e ? k.filter(e, t) : t, o = 0; null != (n = s[o]); o++) i || 1 !== n.nodeType || k.cleanData(bt(n)), n.parentNode && (i && rt(n) && wt(bt(n, "script")), n.parentNode.removeChild(n));
            return t
        }
        k.extend({
            htmlPrefilter: function(t) {
                return t.replace(Ot, "<$1></$2>")
            },
            clone: function(t, e, i) {
                var n, s, o, a, r, l, c, h = t.cloneNode(!0),
                    u = rt(t);
                if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || k.isXMLDoc(t)))
                    for (a = bt(h), n = 0, s = (o = bt(t)).length; n < s; n++) r = o[n], l = a[n], c = void 0, "input" === (c = l.nodeName.toLowerCase()) && gt.test(r.type) ? l.checked = r.checked : "input" !== c && "textarea" !== c || (l.defaultValue = r.defaultValue);
                if (e)
                    if (i)
                        for (o = o || bt(t), a = a || bt(h), n = 0, s = o.length; n < s; n++) Nt(o[n], a[n]);
                    else Nt(t, h);
                return (a = bt(h, "script")).length > 0 && wt(a, !u && bt(t, "script")), h
            },
            cleanData: function(t) {
                for (var e, i, n, s = k.event.special, o = 0; void 0 !== (i = t[o]); o++)
                    if (Z(i)) {
                        if (e = i[Q.expando]) {
                            if (e.events)
                                for (n in e.events) s[n] ? k.event.remove(i, n) : k.removeEvent(i, n, e.handle);
                            i[Q.expando] = void 0
                        }
                        i[J.expando] && (i[J.expando] = void 0)
                    }
            }
        }), k.fn.extend({
            detach: function(t) {
                return jt(this, t, !0)
            },
            remove: function(t) {
                return jt(this, t)
            },
            text: function(t) {
                return Y(this, function(t) {
                    return void 0 === t ? k.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return qt(this, arguments, function(t) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Rt(this, t).appendChild(t)
                })
            },
            prepend: function() {
                return qt(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = Rt(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return qt(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return qt(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (k.cleanData(bt(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return k.clone(this, t, e)
                })
            },
            html: function(t) {
                return Y(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Pt.test(t) && !yt[(mt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = k.htmlPrefilter(t);
                        try {
                            for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (k.cleanData(bt(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return qt(this, arguments, function(e) {
                    var i = this.parentNode;
                    k.inArray(this, t) < 0 && (k.cleanData(bt(this)), i && i.replaceChild(e, this))
                }, t)
            }
        }), k.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            k.fn[t] = function(t) {
                for (var i, n = [], s = k(t), o = s.length - 1, a = 0; a <= o; a++) i = a === o ? this : this.clone(!0), k(s[a])[e](i), h.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var Bt = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
            Wt = function(t) {
                var e = t.ownerDocument.defaultView;
                return e && e.opener || (e = i), e.getComputedStyle(t)
            },
            Yt = new RegExp(ot.join("|"), "i");

        function Ut(t, e, i) {
            var n, s, o, a, r = t.style;
            return (i = i || Wt(t)) && ("" !== (a = i.getPropertyValue(e) || i[e]) || rt(t) || (a = k.style(t, e)), !v.pixelBoxStyles() && Bt.test(a) && Yt.test(e) && (n = r.width, s = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = n, r.minWidth = s, r.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function Vt(t, e) {
            return {
                get: function() {
                    if (!t()) return (this.get = e).apply(this, arguments);
                    delete this.get
                }
            }
        }! function() {
            function t() {
                if (h) {
                    c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", h.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", at.appendChild(c).appendChild(h);
                    var t = i.getComputedStyle(h);
                    n = "1%" !== t.top, l = 12 === e(t.marginLeft), h.style.right = "60%", r = 36 === e(t.right), s = 36 === e(t.width), h.style.position = "absolute", o = 12 === e(h.offsetWidth / 3), at.removeChild(c), h = null
                }
            }

            function e(t) {
                return Math.round(parseFloat(t))
            }
            var n, s, o, r, l, c = a.createElement("div"),
                h = a.createElement("div");
            h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === h.style.backgroundClip, k.extend(v, {
                boxSizingReliable: function() {
                    return t(), s
                },
                pixelBoxStyles: function() {
                    return t(), r
                },
                pixelPosition: function() {
                    return t(), n
                },
                reliableMarginLeft: function() {
                    return t(), l
                },
                scrollboxSize: function() {
                    return t(), o
                }
            }))
        }();
        var Xt = ["Webkit", "Moz", "ms"],
            Gt = a.createElement("div").style,
            Zt = {};

        function Kt(t) {
            var e = k.cssProps[t] || Zt[t];
            return e || (t in Gt ? t : Zt[t] = function(t) {
                for (var e = t[0].toUpperCase() + t.slice(1), i = Xt.length; i--;)
                    if ((t = Xt[i] + e) in Gt) return t
            }(t) || t)
        }
        var Qt = /^(none|table(?!-c[ea]).+)/,
            Jt = /^--/,
            te = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ee = {
                letterSpacing: "0",
                fontWeight: "400"
            };

        function ie(t, e, i) {
            var n = st.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function ne(t, e, i, n, s, o) {
            var a = "width" === e ? 1 : 0,
                r = 0,
                l = 0;
            if (i === (n ? "border" : "content")) return 0;
            for (; a < 4; a += 2) "margin" === i && (l += k.css(t, i + ot[a], !0, s)), n ? ("content" === i && (l -= k.css(t, "padding" + ot[a], !0, s)), "margin" !== i && (l -= k.css(t, "border" + ot[a] + "Width", !0, s))) : (l += k.css(t, "padding" + ot[a], !0, s), "padding" !== i ? l += k.css(t, "border" + ot[a] + "Width", !0, s) : r += k.css(t, "border" + ot[a] + "Width", !0, s));
            return !n && o >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - r - .5)) || 0), l
        }

        function se(t, e, i) {
            var n = Wt(t),
                s = (!v.boxSizingReliable() || i) && "border-box" === k.css(t, "boxSizing", !1, n),
                o = s,
                a = Ut(t, e, n),
                r = "offset" + e[0].toUpperCase() + e.slice(1);
            if (Bt.test(a)) {
                if (!i) return a;
                a = "auto"
            }
            return (!v.boxSizingReliable() && s || "auto" === a || !parseFloat(a) && "inline" === k.css(t, "display", !1, n)) && t.getClientRects().length && (s = "border-box" === k.css(t, "boxSizing", !1, n), (o = r in t) && (a = t[r])), (a = parseFloat(a) || 0) + ne(t, e, i || (s ? "border" : "content"), o, n, a) + "px"
        }

        function oe(t, e, i, n, s) {
            return new oe.prototype.init(t, e, i, n, s)
        }
        k.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = Ut(t, "opacity");
                            return "" === i ? "1" : i
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
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var s, o, a, r = G(e),
                        l = Jt.test(e),
                        c = t.style;
                    if (l || (e = Kt(r)), a = k.cssHooks[e] || k.cssHooks[r], void 0 === i) return a && "get" in a && void 0 !== (s = a.get(t, !1, n)) ? s : c[e];
                    "string" === (o = typeof i) && (s = st.exec(i)) && s[1] && (i = ut(t, e, s), o = "number"), null != i && i == i && ("number" !== o || l || (i += s && s[3] || (k.cssNumber[r] ? "" : "px")), v.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"), a && "set" in a && void 0 === (i = a.set(t, i, n)) || (l ? c.setProperty(e, i) : c[e] = i))
                }
            },
            css: function(t, e, i, n) {
                var s, o, a, r = G(e);
                return Jt.test(e) || (e = Kt(r)), (a = k.cssHooks[e] || k.cssHooks[r]) && "get" in a && (s = a.get(t, !0, i)), void 0 === s && (s = Ut(t, e, n)), "normal" === s && e in ee && (s = ee[e]), "" === i || i ? (o = parseFloat(s), !0 === i || isFinite(o) ? o || 0 : s) : s
            }
        }), k.each(["height", "width"], function(t, e) {
            k.cssHooks[e] = {
                get: function(t, i, n) {
                    if (i) return !Qt.test(k.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? se(t, e, n) : ht(t, te, function() {
                        return se(t, e, n)
                    })
                },
                set: function(t, i, n) {
                    var s, o = Wt(t),
                        a = !v.scrollboxSize() && "absolute" === o.position,
                        r = (a || n) && "border-box" === k.css(t, "boxSizing", !1, o),
                        l = n ? ne(t, e, n, r, o) : 0;
                    return r && a && (l -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - ne(t, e, "border", !1, o) - .5)), l && (s = st.exec(i)) && "px" !== (s[3] || "px") && (t.style[e] = i, i = k.css(t, e)), ie(0, i, l)
                }
            }
        }), k.cssHooks.marginLeft = Vt(v.reliableMarginLeft, function(t, e) {
            if (e) return (parseFloat(Ut(t, "marginLeft")) || t.getBoundingClientRect().left - ht(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
        }), k.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            k.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, s = {}, o = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) s[t + ot[n] + e] = o[n] || o[n - 2] || o[0];
                    return s
                }
            }, "margin" !== t && (k.cssHooks[t + e].set = ie)
        }), k.fn.extend({
            css: function(t, e) {
                return Y(this, function(t, e, i) {
                    var n, s, o = {},
                        a = 0;
                    if (Array.isArray(e)) {
                        for (n = Wt(t), s = e.length; a < s; a++) o[e[a]] = k.css(t, e[a], !1, n);
                        return o
                    }
                    return void 0 !== i ? k.style(t, e, i) : k.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), k.Tween = oe, oe.prototype = {
            constructor: oe,
            init: function(t, e, i, n, s, o) {
                this.elem = t, this.prop = i, this.easing = s || k.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (k.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = oe.propHooks[this.prop];
                return t && t.get ? t.get(this) : oe.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = oe.propHooks[this.prop];
                return this.options.duration ? this.pos = e = k.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : oe.propHooks._default.set(this), this
            }
        }, oe.prototype.init.prototype = oe.prototype, oe.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = k.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    k.fx.step[t.prop] ? k.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !k.cssHooks[t.prop] && null == t.elem.style[Kt(t.prop)] ? t.elem[t.prop] = t.now : k.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, oe.propHooks.scrollTop = oe.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, k.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, k.fx = oe.prototype.init, k.fx.step = {};
        var ae, re, le = /^(?:toggle|show|hide)$/,
            ce = /queueHooks$/;

        function he() {
            re && (!1 === a.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(he) : i.setTimeout(he, k.fx.interval), k.fx.tick())
        }

        function ue() {
            return i.setTimeout(function() {
                ae = void 0
            }), ae = Date.now()
        }

        function de(t, e) {
            var i, n = 0,
                s = {
                    height: t
                };
            for (e = e ? 1 : 0; n < 4; n += 2 - e) s["margin" + (i = ot[n])] = s["padding" + i] = t;
            return e && (s.opacity = s.width = t), s
        }

        function pe(t, e, i) {
            for (var n, s = (fe.tweeners[e] || []).concat(fe.tweeners["*"]), o = 0, a = s.length; o < a; o++)
                if (n = s[o].call(i, e, t)) return n
        }

        function fe(t, e, i) {
            var n, s, o = 0,
                a = fe.prefilters.length,
                r = k.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (s) return !1;
                    for (var e = ae || ue(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), o = 0, a = c.tweens.length; o < a; o++) c.tweens[o].run(n);
                    return r.notifyWith(t, [c, n, i]), n < 1 && a ? i : (a || r.notifyWith(t, [c, 1, 0]), r.resolveWith(t, [c]), !1)
                },
                c = r.promise({
                    elem: t,
                    props: k.extend({}, e),
                    opts: k.extend(!0, {
                        specialEasing: {},
                        easing: k.easing._default
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: ae || ue(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = k.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                        return c.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? c.tweens.length : 0;
                        if (s) return this;
                        for (s = !0; i < n; i++) c.tweens[i].run(1);
                        return e ? (r.notifyWith(t, [c, 1, 0]), r.resolveWith(t, [c, e])) : r.rejectWith(t, [c, e]), this
                    }
                }),
                h = c.props;
            for (! function(t, e) {
                    var i, n, s, o, a;
                    for (i in t)
                        if (s = e[n = G(i)], o = t[i], Array.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (a = k.cssHooks[n]) && "expand" in a)
                            for (i in o = a.expand(o), delete t[n], o) i in t || (t[i] = o[i], e[i] = s);
                        else e[n] = s
                }(h, c.opts.specialEasing); o < a; o++)
                if (n = fe.prefilters[o].call(c, t, h, c.opts)) return y(n.stop) && (k._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
            return k.map(h, pe, c), y(c.opts.start) && c.opts.start.call(t, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), k.fx.timer(k.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c
        }
        k.Animation = k.extend(fe, {
                tweeners: {
                    "*": [function(t, e) {
                        var i = this.createTween(t, e);
                        return ut(i.elem, t, st.exec(e), i), i
                    }]
                },
                tweener: function(t, e) {
                    y(t) ? (e = t, t = ["*"]) : t = t.match(H);
                    for (var i, n = 0, s = t.length; n < s; n++) i = t[n], fe.tweeners[i] = fe.tweeners[i] || [], fe.tweeners[i].unshift(e)
                },
                prefilters: [function(t, e, i) {
                    var n, s, o, a, r, l, c, h, u = "width" in e || "height" in e,
                        d = this,
                        p = {},
                        f = t.style,
                        g = t.nodeType && ct(t),
                        m = Q.get(t, "fxshow");
                    for (n in i.queue || (null == (a = k._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, r = a.empty.fire, a.empty.fire = function() {
                            a.unqueued || r()
                        }), a.unqueued++, d.always(function() {
                            d.always(function() {
                                a.unqueued--, k.queue(t, "fx").length || a.empty.fire()
                            })
                        })), e)
                        if (s = e[n], le.test(s)) {
                            if (delete e[n], o = o || "toggle" === s, s === (g ? "hide" : "show")) {
                                if ("show" !== s || !m || void 0 === m[n]) continue;
                                g = !0
                            }
                            p[n] = m && m[n] || k.style(t, n)
                        } if ((l = !k.isEmptyObject(e)) || !k.isEmptyObject(p))
                        for (n in u && 1 === t.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = m && m.display) && (c = Q.get(t, "display")), "none" === (h = k.css(t, "display")) && (c ? h = c : (ft([t], !0), c = t.style.display || c, h = k.css(t, "display"), ft([t]))), ("inline" === h || "inline-block" === h && null != c) && "none" === k.css(t, "float") && (l || (d.done(function() {
                                f.display = c
                            }), null == c && (h = f.display, c = "none" === h ? "" : h)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", d.always(function() {
                                f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2]
                            })), l = !1, p) l || (m ? "hidden" in m && (g = m.hidden) : m = Q.access(t, "fxshow", {
                            display: c
                        }), o && (m.hidden = !g), g && ft([t], !0), d.done(function() {
                            for (n in g || ft([t]), Q.remove(t, "fxshow"), p) k.style(t, n, p[n])
                        })), l = pe(g ? m[n] : 0, n, d), n in m || (m[n] = l.start, g && (l.end = l.start, l.start = 0))
                }],
                prefilter: function(t, e) {
                    e ? fe.prefilters.unshift(t) : fe.prefilters.push(t)
                }
            }), k.speed = function(t, e, i) {
                var n = t && "object" == typeof t ? k.extend({}, t) : {
                    complete: i || !i && e || y(t) && t,
                    duration: t,
                    easing: i && e || e && !y(e) && e
                };
                return k.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in k.fx.speeds ? n.duration = k.fx.speeds[n.duration] : n.duration = k.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                    y(n.old) && n.old.call(this), n.queue && k.dequeue(this, n.queue)
                }, n
            }, k.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(ct).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function(t, e, i, n) {
                    var s = k.isEmptyObject(t),
                        o = k.speed(e, i, n),
                        a = function() {
                            var e = fe(this, k.extend({}, t), o);
                            (s || Q.get(this, "finish")) && e.stop(!0)
                        };
                    return a.finish = a, s || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            s = null != t && t + "queueHooks",
                            o = k.timers,
                            a = Q.get(this);
                        if (s) a[s] && a[s].stop && n(a[s]);
                        else
                            for (s in a) a[s] && a[s].stop && ce.test(s) && n(a[s]);
                        for (s = o.length; s--;) o[s].elem !== this || null != t && o[s].queue !== t || (o[s].anim.stop(i), e = !1, o.splice(s, 1));
                        !e && i || k.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, i = Q.get(this),
                            n = i[t + "queue"],
                            s = i[t + "queueHooks"],
                            o = k.timers,
                            a = n ? n.length : 0;
                        for (i.finish = !0, k.queue(this, t, []), s && s.stop && s.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                        for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), k.each(["toggle", "show", "hide"], function(t, e) {
                var i = k.fn[e];
                k.fn[e] = function(t, n, s) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(de(e, !0), t, n, s)
                }
            }), k.each({
                slideDown: de("show"),
                slideUp: de("hide"),
                slideToggle: de("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                k.fn[t] = function(t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), k.timers = [], k.fx.tick = function() {
                var t, e = 0,
                    i = k.timers;
                for (ae = Date.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
                i.length || k.fx.stop(), ae = void 0
            }, k.fx.timer = function(t) {
                k.timers.push(t), k.fx.start()
            }, k.fx.interval = 13, k.fx.start = function() {
                re || (re = !0, he())
            }, k.fx.stop = function() {
                re = null
            }, k.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, k.fn.delay = function(t, e) {
                return t = k.fx && k.fx.speeds[t] || t, e = e || "fx", this.queue(e, function(e, n) {
                    var s = i.setTimeout(e, t);
                    n.stop = function() {
                        i.clearTimeout(s)
                    }
                })
            },
            function() {
                var t = a.createElement("input"),
                    e = a.createElement("select").appendChild(a.createElement("option"));
                t.type = "checkbox", v.checkOn = "" !== t.value, v.optSelected = e.selected, (t = a.createElement("input")).value = "t", t.type = "radio", v.radioValue = "t" === t.value
            }();
        var ge, me = k.expr.attrHandle;
        k.fn.extend({
            attr: function(t, e) {
                return Y(this, k.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    k.removeAttr(this, t)
                })
            }
        }), k.extend({
            attr: function(t, e, i) {
                var n, s, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? k.prop(t, e, i) : (1 === o && k.isXMLDoc(t) || (s = k.attrHooks[e.toLowerCase()] || (k.expr.match.bool.test(e) ? ge : void 0)), void 0 !== i ? null === i ? void k.removeAttr(t, e) : s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : s && "get" in s && null !== (n = s.get(t, e)) ? n : null == (n = k.find.attr(t, e)) ? void 0 : n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!v.radioValue && "radio" === e && z(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, n = 0,
                    s = e && e.match(H);
                if (s && 1 === t.nodeType)
                    for (; i = s[n++];) t.removeAttribute(i)
            }
        }), ge = {
            set: function(t, e, i) {
                return !1 === e ? k.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, k.each(k.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = me[e] || k.find.attr;
            me[e] = function(t, e, n) {
                var s, o, a = e.toLowerCase();
                return n || (o = me[a], me[a] = s, s = null != i(t, e, n) ? a : null, me[a] = o), s
            }
        });
        var ve = /^(?:input|select|textarea|button)$/i,
            ye = /^(?:a|area)$/i;

        function be(t) {
            return (t.match(H) || []).join(" ")
        }

        function we(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function xe(t) {
            return Array.isArray(t) ? t : "string" == typeof t && t.match(H) || []
        }
        k.fn.extend({
            prop: function(t, e) {
                return Y(this, k.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[k.propFix[t] || t]
                })
            }
        }), k.extend({
            prop: function(t, e, i) {
                var n, s, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(t) || (e = k.propFix[e] || e, s = k.propHooks[e]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(t, i, e)) ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = k.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : ve.test(t.nodeName) || ye.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), v.optSelected || (k.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            k.propFix[this.toLowerCase()] = this
        }), k.fn.extend({
            addClass: function(t) {
                var e, i, n, s, o, a, r, l = 0;
                if (y(t)) return this.each(function(e) {
                    k(this).addClass(t.call(this, e, we(this)))
                });
                if ((e = xe(t)).length)
                    for (; i = this[l++];)
                        if (s = we(i), n = 1 === i.nodeType && " " + be(s) + " ") {
                            for (a = 0; o = e[a++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            s !== (r = be(n)) && i.setAttribute("class", r)
                        } return this
            },
            removeClass: function(t) {
                var e, i, n, s, o, a, r, l = 0;
                if (y(t)) return this.each(function(e) {
                    k(this).removeClass(t.call(this, e, we(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ((e = xe(t)).length)
                    for (; i = this[l++];)
                        if (s = we(i), n = 1 === i.nodeType && " " + be(s) + " ") {
                            for (a = 0; o = e[a++];)
                                for (; n.indexOf(" " + o + " ") > -1;) n = n.replace(" " + o + " ", " ");
                            s !== (r = be(n)) && i.setAttribute("class", r)
                        } return this
            },
            toggleClass: function(t, e) {
                var i = typeof t,
                    n = "string" === i || Array.isArray(t);
                return "boolean" == typeof e && n ? e ? this.addClass(t) : this.removeClass(t) : y(t) ? this.each(function(i) {
                    k(this).toggleClass(t.call(this, i, we(this), e), e)
                }) : this.each(function() {
                    var e, s, o, a;
                    if (n)
                        for (s = 0, o = k(this), a = xe(t); e = a[s++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else void 0 !== t && "boolean" !== i || ((e = we(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Q.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && (" " + be(we(i)) + " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var _e = /\r/g;
        k.fn.extend({
            val: function(t) {
                var e, i, n, s = this[0];
                return arguments.length ? (n = y(t), this.each(function(i) {
                    var s;
                    1 === this.nodeType && (null == (s = n ? t.call(this, i, k(this).val()) : t) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = k.map(s, function(t) {
                        return null == t ? "" : t + ""
                    })), (e = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, s, "value") || (this.value = s))
                })) : s ? (e = k.valHooks[s.type] || k.valHooks[s.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(s, "value")) ? i : "string" == typeof(i = s.value) ? i.replace(_e, "") : null == i ? "" : i : void 0
            }
        }), k.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = k.find.attr(t, "value");
                        return null != e ? e : be(k.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        var e, i, n, s = t.options,
                            o = t.selectedIndex,
                            a = "select-one" === t.type,
                            r = a ? null : [],
                            l = a ? o + 1 : s.length;
                        for (n = o < 0 ? l : a ? o : 0; n < l; n++)
                            if (((i = s[n]).selected || n === o) && !i.disabled && (!i.parentNode.disabled || !z(i.parentNode, "optgroup"))) {
                                if (e = k(i).val(), a) return e;
                                r.push(e)
                            } return r
                    },
                    set: function(t, e) {
                        for (var i, n, s = t.options, o = k.makeArray(e), a = s.length; a--;)((n = s[a]).selected = k.inArray(k.valHooks.option.get(n), o) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), o
                    }
                }
            }
        }), k.each(["radio", "checkbox"], function() {
            k.valHooks[this] = {
                set: function(t, e) {
                    if (Array.isArray(e)) return t.checked = k.inArray(k(t).val(), e) > -1
                }
            }, v.checkOn || (k.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        }), v.focusin = "onfocusin" in i;
        var ke = /^(?:focusinfocus|focusoutblur)$/,
            Ce = function(t) {
                t.stopPropagation()
            };
        k.extend(k.event, {
            trigger: function(t, e, n, s) {
                var o, r, l, c, h, u, d, p, g = [n || a],
                    m = f.call(t, "type") ? t.type : t,
                    v = f.call(t, "namespace") ? t.namespace.split(".") : [];
                if (r = p = l = n = n || a, 3 !== n.nodeType && 8 !== n.nodeType && !ke.test(m + k.event.triggered) && (m.indexOf(".") > -1 && (v = m.split("."), m = v.shift(), v.sort()), h = m.indexOf(":") < 0 && "on" + m, (t = t[k.expando] ? t : new k.Event(m, "object" == typeof t && t)).isTrigger = s ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : k.makeArray(e, [t]), d = k.event.special[m] || {}, s || !d.trigger || !1 !== d.trigger.apply(n, e))) {
                    if (!s && !d.noBubble && !b(n)) {
                        for (c = d.delegateType || m, ke.test(c + m) || (r = r.parentNode); r; r = r.parentNode) g.push(r), l = r;
                        l === (n.ownerDocument || a) && g.push(l.defaultView || l.parentWindow || i)
                    }
                    for (o = 0;
                        (r = g[o++]) && !t.isPropagationStopped();) p = r, t.type = o > 1 ? c : d.bindType || m, (u = (Q.get(r, "events") || {})[t.type] && Q.get(r, "handle")) && u.apply(r, e), (u = h && r[h]) && u.apply && Z(r) && (t.result = u.apply(r, e), !1 === t.result && t.preventDefault());
                    return t.type = m, s || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(g.pop(), e) || !Z(n) || h && y(n[m]) && !b(n) && ((l = n[h]) && (n[h] = null), k.event.triggered = m, t.isPropagationStopped() && p.addEventListener(m, Ce), n[m](), t.isPropagationStopped() && p.removeEventListener(m, Ce), k.event.triggered = void 0, l && (n[h] = l)), t.result
                }
            },
            simulate: function(t, e, i) {
                var n = k.extend(new k.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                k.event.trigger(n, null, e)
            }
        }), k.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    k.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                if (i) return k.event.trigger(t, e, i, !0)
            }
        }), v.focusin || k.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                k.event.simulate(e, t.target, k.event.fix(t))
            };
            k.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        s = Q.access(n, e);
                    s || n.addEventListener(t, i, !0), Q.access(n, e, (s || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        s = Q.access(n, e) - 1;
                    s ? Q.access(n, e, s) : (n.removeEventListener(t, i, !0), Q.remove(n, e))
                }
            }
        });
        var $e = i.location,
            Te = Date.now(),
            De = /\?/;
        k.parseXML = function(t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                e = (new i.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + t), e
        };
        var Se = /\[\]$/,
            Ee = /\r?\n/g,
            ze = /^(?:submit|button|image|reset|file)$/i,
            Ae = /^(?:input|select|textarea|keygen)/i;

        function Me(t, e, i, n) {
            var s;
            if (Array.isArray(e)) k.each(e, function(e, s) {
                i || Se.test(t) ? n(t, s) : Me(t + "[" + ("object" == typeof s && null != s ? e : "") + "]", s, i, n)
            });
            else if (i || "object" !== _(e)) n(t, e);
            else
                for (s in e) Me(t + "[" + s + "]", e[s], i, n)
        }
        k.param = function(t, e) {
            var i, n = [],
                s = function(t, e) {
                    var i = y(e) ? e() : e;
                    n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i)
                };
            if (null == t) return "";
            if (Array.isArray(t) || t.jquery && !k.isPlainObject(t)) k.each(t, function() {
                s(this.name, this.value)
            });
            else
                for (i in t) Me(i, t[i], e, s);
            return n.join("&")
        }, k.fn.extend({
            serialize: function() {
                return k.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = k.prop(this, "elements");
                    return t ? k.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !k(this).is(":disabled") && Ae.test(this.nodeName) && !ze.test(t) && (this.checked || !gt.test(t))
                }).map(function(t, e) {
                    var i = k(this).val();
                    return null == i ? null : Array.isArray(i) ? k.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Ee, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Ee, "\r\n")
                    }
                }).get()
            }
        });
        var Oe = /%20/g,
            Pe = /#.*$/,
            Le = /([?&])_=[^&]*/,
            Ie = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Re = /^(?:GET|HEAD)$/,
            He = /^\/\//,
            Fe = {},
            Ne = {},
            qe = "*/".concat("*"),
            je = a.createElement("a");

        function Be(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, s = 0,
                    o = e.toLowerCase().match(H) || [];
                if (y(i))
                    for (; n = o[s++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function We(t, e, i, n) {
            var s = {},
                o = t === Ne;

            function a(r) {
                var l;
                return s[r] = !0, k.each(t[r] || [], function(t, r) {
                    var c = r(e, i, n);
                    return "string" != typeof c || o || s[c] ? o ? !(l = c) : void 0 : (e.dataTypes.unshift(c), a(c), !1)
                }), l
            }
            return a(e.dataTypes[0]) || !s["*"] && a("*")
        }

        function Ye(t, e) {
            var i, n, s = k.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((s[i] ? t : n || (n = {}))[i] = e[i]);
            return n && k.extend(!0, t, n), t
        }
        je.href = $e.href, k.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: $e.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test($e.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": qe,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": k.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? Ye(Ye(t, k.ajaxSettings), e) : Ye(k.ajaxSettings, t)
            },
            ajaxPrefilter: Be(Fe),
            ajaxTransport: Be(Ne),
            ajax: function(t, e) {
                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var n, s, o, r, l, c, h, u, d, p, f = k.ajaxSetup({}, e),
                    g = f.context || f,
                    m = f.context && (g.nodeType || g.jquery) ? k(g) : k.event,
                    v = k.Deferred(),
                    y = k.Callbacks("once memory"),
                    b = f.statusCode || {},
                    w = {},
                    x = {},
                    _ = "canceled",
                    C = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (h) {
                                if (!r)
                                    for (r = {}; e = Ie.exec(o);) r[e[1].toLowerCase() + " "] = (r[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                e = r[t.toLowerCase() + " "]
                            }
                            return null == e ? null : e.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return h ? o : null
                        },
                        setRequestHeader: function(t, e) {
                            return null == h && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t, w[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return null == h && (f.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (h) C.always(t[C.status]);
                                else
                                    for (e in t) b[e] = [b[e], t[e]];
                            return this
                        },
                        abort: function(t) {
                            var e = t || _;
                            return n && n.abort(e), $(0, e), this
                        }
                    };
                if (v.promise(C), f.url = ((t || f.url || $e.href) + "").replace(He, $e.protocol + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(H) || [""], null == f.crossDomain) {
                    c = a.createElement("a");
                    try {
                        c.href = f.url, c.href = c.href, f.crossDomain = je.protocol + "//" + je.host != c.protocol + "//" + c.host
                    } catch (t) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && "string" != typeof f.data && (f.data = k.param(f.data, f.traditional)), We(Fe, f, e, C), h) return C;
                for (d in (u = k.event && f.global) && 0 == k.active++ && k.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Re.test(f.type), s = f.url.replace(Pe, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Oe, "+")) : (p = f.url.slice(s.length), f.data && (f.processData || "string" == typeof f.data) && (s += (De.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (s = s.replace(Le, "$1"), p = (De.test(s) ? "&" : "?") + "_=" + Te++ + p), f.url = s + p), f.ifModified && (k.lastModified[s] && C.setRequestHeader("If-Modified-Since", k.lastModified[s]), k.etag[s] && C.setRequestHeader("If-None-Match", k.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + qe + "; q=0.01" : "") : f.accepts["*"]), f.headers) C.setRequestHeader(d, f.headers[d]);
                if (f.beforeSend && (!1 === f.beforeSend.call(g, C, f) || h)) return C.abort();
                if (_ = "abort", y.add(f.complete), C.done(f.success), C.fail(f.error), n = We(Ne, f, e, C)) {
                    if (C.readyState = 1, u && m.trigger("ajaxSend", [C, f]), h) return C;
                    f.async && f.timeout > 0 && (l = i.setTimeout(function() {
                        C.abort("timeout")
                    }, f.timeout));
                    try {
                        h = !1, n.send(w, $)
                    } catch (t) {
                        if (h) throw t;
                        $(-1, t)
                    }
                } else $(-1, "No Transport");

                function $(t, e, a, r) {
                    var c, d, p, w, x, _ = e;
                    h || (h = !0, l && i.clearTimeout(l), n = void 0, o = r || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, a && (w = function(t, e, i) {
                        for (var n, s, o, a, r = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (n)
                            for (s in r)
                                if (r[s] && r[s].test(n)) {
                                    l.unshift(s);
                                    break
                                } if (l[0] in i) o = l[0];
                        else {
                            for (s in i) {
                                if (!l[0] || t.converters[s + " " + l[0]]) {
                                    o = s;
                                    break
                                }
                                a || (a = s)
                            }
                            o = o || a
                        }
                        if (o) return o !== l[0] && l.unshift(o), i[o]
                    }(f, C, a)), w = function(t, e, i, n) {
                        var s, o, a, r, l, c = {},
                            h = t.dataTypes.slice();
                        if (h[1])
                            for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
                        for (o = h.shift(); o;)
                            if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = h.shift())
                                if ("*" === o) o = l;
                                else if ("*" !== l && l !== o) {
                            if (!(a = c[l + " " + o] || c["* " + o]))
                                for (s in c)
                                    if ((r = s.split(" "))[1] === o && (a = c[l + " " + r[0]] || c["* " + r[0]])) {
                                        !0 === a ? a = c[s] : !0 !== c[s] && (o = r[0], h.unshift(r[1]));
                                        break
                                    } if (!0 !== a)
                                if (a && t.throws) e = a(e);
                                else try {
                                    e = a(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: a ? t : "No conversion from " + l + " to " + o
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(f, w, C, c), c ? (f.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (k.lastModified[s] = x), (x = C.getResponseHeader("etag")) && (k.etag[s] = x)), 204 === t || "HEAD" === f.type ? _ = "nocontent" : 304 === t ? _ = "notmodified" : (_ = w.state, d = w.data, c = !(p = w.error))) : (p = _, !t && _ || (_ = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (e || _) + "", c ? v.resolveWith(g, [d, _, C]) : v.rejectWith(g, [C, _, p]), C.statusCode(b), b = void 0, u && m.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? d : p]), y.fireWith(g, [C, _]), u && (m.trigger("ajaxComplete", [C, f]), --k.active || k.event.trigger("ajaxStop")))
                }
                return C
            },
            getJSON: function(t, e, i) {
                return k.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return k.get(t, void 0, e, "script")
            }
        }), k.each(["get", "post"], function(t, e) {
            k[e] = function(t, i, n, s) {
                return y(i) && (s = s || n, n = i, i = void 0), k.ajax(k.extend({
                    url: t,
                    type: e,
                    dataType: s,
                    data: i,
                    success: n
                }, k.isPlainObject(t) && t))
            }
        }), k._evalUrl = function(t, e) {
            return k.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(t) {
                    k.globalEval(t, e)
                }
            })
        }, k.fn.extend({
            wrapAll: function(t) {
                var e;
                return this[0] && (y(t) && (t = t.call(this[0])), e = k(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this
            },
            wrapInner: function(t) {
                return y(t) ? this.each(function(e) {
                    k(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = k(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = y(t);
                return this.each(function(i) {
                    k(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function(t) {
                return this.parent(t).not("body").each(function() {
                    k(this).replaceWith(this.childNodes)
                }), this
            }
        }), k.expr.pseudos.hidden = function(t) {
            return !k.expr.pseudos.visible(t)
        }, k.expr.pseudos.visible = function(t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, k.ajaxSettings.xhr = function() {
            try {
                return new i.XMLHttpRequest
            } catch (t) {}
        };
        var Ue = {
                0: 200,
                1223: 204
            },
            Ve = k.ajaxSettings.xhr();
        v.cors = !!Ve && "withCredentials" in Ve, v.ajax = Ve = !!Ve, k.ajaxTransport(function(t) {
            var e, n;
            if (v.cors || Ve && !t.crossDomain) return {
                send: function(s, o) {
                    var a, r = t.xhr();
                    if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (a in t.xhrFields) r[a] = t.xhrFields[a];
                    for (a in t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) r.setRequestHeader(a, s[a]);
                    e = function(t) {
                        return function() {
                            e && (e = n = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === t ? r.abort() : "error" === t ? "number" != typeof r.status ? o(0, "error") : o(r.status, r.statusText) : o(Ue[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                binary: r.response
                            } : {
                                text: r.responseText
                            }, r.getAllResponseHeaders()))
                        }
                    }, r.onload = e(), n = r.onerror = r.ontimeout = e("error"), void 0 !== r.onabort ? r.onabort = n : r.onreadystatechange = function() {
                        4 === r.readyState && i.setTimeout(function() {
                            e && n()
                        })
                    }, e = e("abort");
                    try {
                        r.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e) throw t
                    }
                },
                abort: function() {
                    e && e()
                }
            }
        }), k.ajaxPrefilter(function(t) {
            t.crossDomain && (t.contents.script = !1)
        }), k.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return k.globalEval(t), t
                }
            }
        }), k.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), k.ajaxTransport("script", function(t) {
            var e, i;
            if (t.crossDomain || t.scriptAttrs) return {
                send: function(n, s) {
                    e = k("<script>").attr(t.scriptAttrs || {}).prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", i = function(t) {
                        e.remove(), i = null, t && s("error" === t.type ? 404 : 200, t.type)
                    }), a.head.appendChild(e[0])
                },
                abort: function() {
                    i && i()
                }
            }
        });
        var Xe, Ge = [],
            Ze = /(=)\?(?=&|$)|\?\?/;
        k.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ge.pop() || k.expando + "_" + Te++;
                return this[t] = !0, t
            }
        }), k.ajaxPrefilter("json jsonp", function(t, e, n) {
            var s, o, a, r = !1 !== t.jsonp && (Ze.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ze.test(t.data) && "data");
            if (r || "jsonp" === t.dataTypes[0]) return s = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r ? t[r] = t[r].replace(Ze, "$1" + s) : !1 !== t.jsonp && (t.url += (De.test(t.url) ? "&" : "?") + t.jsonp + "=" + s), t.converters["script json"] = function() {
                return a || k.error(s + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = i[s], i[s] = function() {
                a = arguments
            }, n.always(function() {
                void 0 === o ? k(i).removeProp(s) : i[s] = o, t[s] && (t.jsonpCallback = e.jsonpCallback, Ge.push(s)), a && y(o) && o(a[0]), a = o = void 0
            }), "script"
        }), v.createHTMLDocument = ((Xe = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Xe.childNodes.length), k.parseHTML = function(t, e, i) {
            return "string" != typeof t ? [] : ("boolean" == typeof e && (i = e, e = !1), e || (v.createHTMLDocument ? ((n = (e = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, e.head.appendChild(n)) : e = a), o = !i && [], (s = A.exec(t)) ? [e.createElement(s[1])] : (s = Ct([t], e, o), o && o.length && k(o).remove(), k.merge([], s.childNodes)));
            var n, s, o
        }, k.fn.load = function(t, e, i) {
            var n, s, o, a = this,
                r = t.indexOf(" ");
            return r > -1 && (n = be(t.slice(r)), t = t.slice(0, r)), y(e) ? (i = e, e = void 0) : e && "object" == typeof e && (s = "POST"), a.length > 0 && k.ajax({
                url: t,
                type: s || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                o = arguments, a.html(n ? k("<div>").append(k.parseHTML(t)).find(n) : t)
            }).always(i && function(t, e) {
                a.each(function() {
                    i.apply(this, o || [t.responseText, e, t])
                })
            }), this
        }, k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            k.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), k.expr.pseudos.animated = function(t) {
            return k.grep(k.timers, function(e) {
                return t === e.elem
            }).length
        }, k.offset = {
            setOffset: function(t, e, i) {
                var n, s, o, a, r, l, c = k.css(t, "position"),
                    h = k(t),
                    u = {};
                "static" === c && (t.style.position = "relative"), r = h.offset(), o = k.css(t, "top"), l = k.css(t, "left"), ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1 ? (a = (n = h.position()).top, s = n.left) : (a = parseFloat(o) || 0, s = parseFloat(l) || 0), y(e) && (e = e.call(t, i, k.extend({}, r))), null != e.top && (u.top = e.top - r.top + a), null != e.left && (u.left = e.left - r.left + s), "using" in e ? e.using.call(t, u) : h.css(u)
            }
        }, k.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    k.offset.setOffset(this, t, e)
                });
                var e, i, n = this[0];
                return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
                    top: e.top + i.pageYOffset,
                    left: e.left + i.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i, n = this[0],
                        s = {
                            top: 0,
                            left: 0
                        };
                    if ("fixed" === k.css(n, "position")) e = n.getBoundingClientRect();
                    else {
                        for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === k.css(t, "position");) t = t.parentNode;
                        t && t !== n && 1 === t.nodeType && ((s = k(t).offset()).top += k.css(t, "borderTopWidth", !0), s.left += k.css(t, "borderLeftWidth", !0))
                    }
                    return {
                        top: e.top - s.top - k.css(n, "marginTop", !0),
                        left: e.left - s.left - k.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === k.css(t, "position");) t = t.offsetParent;
                    return t || at
                })
            }
        }), k.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = "pageYOffset" === e;
            k.fn[t] = function(n) {
                return Y(this, function(t, n, s) {
                    var o;
                    if (b(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === s) return o ? o[e] : t[n];
                    o ? o.scrollTo(i ? o.pageXOffset : s, i ? s : o.pageYOffset) : t[n] = s
                }, t, n, arguments.length)
            }
        }), k.each(["top", "left"], function(t, e) {
            k.cssHooks[e] = Vt(v.pixelPosition, function(t, i) {
                if (i) return i = Ut(t, e), Bt.test(i) ? k(t).position()[e] + "px" : i
            })
        }), k.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            k.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                k.fn[n] = function(s, o) {
                    var a = arguments.length && (i || "boolean" != typeof s),
                        r = i || (!0 === s || !0 === o ? "margin" : "border");
                    return Y(this, function(e, i, s) {
                        var o;
                        return b(e) ? 0 === n.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === s ? k.css(e, i, r) : k.style(e, i, s, r)
                    }, e, a ? s : void 0, a)
                }
            })
        }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
            k.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), k.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), k.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        }), k.proxy = function(t, e) {
            var i, n, s;
            if ("string" == typeof e && (i = t[e], e = t, t = i), y(t)) return n = l.call(arguments, 2), (s = function() {
                return t.apply(e || this, n.concat(l.call(arguments)))
            }).guid = t.guid = t.guid || k.guid++, s
        }, k.holdReady = function(t) {
            t ? k.readyWait++ : k.ready(!0)
        }, k.isArray = Array.isArray, k.parseJSON = JSON.parse, k.nodeName = z, k.isFunction = y, k.isWindow = b, k.camelCase = G, k.type = _, k.now = Date.now, k.isNumeric = function(t) {
            var e = k.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        }, void 0 === (n = function() {
            return k
        }.apply(e, [])) || (t.exports = n);
        var Ke = i.jQuery,
            Qe = i.$;
        return k.noConflict = function(t) {
            return i.$ === k && (i.$ = Qe), t && i.jQuery === k && (i.jQuery = Ke), k
        }, s || (i.jQuery = i.$ = k), k
    })
}, function(t, e, i) {
    "use strict";
    (function(t) {
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function n(t, e, i) {
            return e in t ? Object.defineProperty(t, e, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = i, t
        }

        function s() {
            return (s = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t[n] = i[n])
                }
                return t
            }).apply(this, arguments)
        }

        function o(t) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {},
                    s = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                    return Object.getOwnPropertyDescriptor(i, t).enumerable
                }))), s.forEach(function(e) {
                    n(t, e, i[e])
                })
            }
            return t
        }

        function a(t, e) {
            if (null == t) return {};
            var i, n, s = function(t, e) {
                if (null == t) return {};
                var i, n, s = {},
                    o = Object.keys(t);
                for (n = 0; n < o.length; n++) i = o[n], e.indexOf(i) >= 0 || (s[i] = t[i]);
                return s
            }(t, e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                for (n = 0; n < o.length; n++) i = o[n], e.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(t, i) && (s[i] = t[i])
            }
            return s
        }

        function r(t) {
            return !!navigator.userAgent.match(t)
        }
        var l = r(/(?:Trident.*rv[ :]?11\.|msie|iemobile)/i),
            c = r(/Edge/i),
            h = r(/firefox/i),
            u = r(/safari/i) && !r(/chrome/i) && !r(/android/i),
            d = r(/iP(ad|od|hone)/i),
            p = {
                capture: !1,
                passive: !1
            };

        function f(t, e, i) {
            t.addEventListener(e, i, !l && p)
        }

        function g(t, e, i) {
            t.removeEventListener(e, i, !l && p)
        }

        function m(t, e) {
            if (e) {
                if (">" === e[0] && (e = e.substring(1)), t) try {
                    if (t.matches) return t.matches(e);
                    if (t.msMatchesSelector) return t.msMatchesSelector(e);
                    if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e)
                } catch (t) {
                    return !1
                }
                return !1
            }
        }

        function v(t) {
            return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode
        }

        function y(t, e, i, n) {
            if (t) {
                i = i || document;
                do {
                    if (null != e && (">" === e[0] ? t.parentNode === i && m(t, e) : m(t, e)) || n && t === i) return t;
                    if (t === i) break
                } while (t = v(t))
            }
            return null
        }
        var b, w = /\s+/g;

        function x(t, e, i) {
            if (t && e)
                if (t.classList) t.classList[i ? "add" : "remove"](e);
                else {
                    var n = (" " + t.className + " ").replace(w, " ").replace(" " + e + " ", " ");
                    t.className = (n + (i ? " " + e : "")).replace(w, " ")
                }
        }

        function _(t, e, i) {
            var n = t && t.style;
            if (n) {
                if (void 0 === i) return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (i = t.currentStyle), void 0 === e ? i : i[e];
                e in n || -1 !== e.indexOf("webkit") || (e = "-webkit-" + e), n[e] = i + ("string" == typeof i ? "" : "px")
            }
        }

        function k(t, e) {
            var i = "";
            do {
                var n = _(t, "transform");
                n && "none" !== n && (i = n + " " + i)
            } while (!e && (t = t.parentNode));
            var s = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix;
            return s && new s(i)
        }

        function C(t, e, i) {
            if (t) {
                var n = t.getElementsByTagName(e),
                    s = 0,
                    o = n.length;
                if (i)
                    for (; s < o; s++) i(n[s], s);
                return n
            }
            return []
        }

        function $() {
            return l ? document.documentElement : document.scrollingElement
        }

        function T(t, e, i, n, s) {
            if (t.getBoundingClientRect || t === window) {
                var o, a, r, c, h, u, d;
                if (t !== window && t !== $() ? (a = (o = t.getBoundingClientRect()).top, r = o.left, c = o.bottom, h = o.right, u = o.height, d = o.width) : (a = 0, r = 0, c = window.innerHeight, h = window.innerWidth, u = window.innerHeight, d = window.innerWidth), (e || i) && t !== window && (s = s || t.parentNode, !l))
                    do {
                        if (s && s.getBoundingClientRect && ("none" !== _(s, "transform") || i && "static" !== _(s, "position"))) {
                            var p = s.getBoundingClientRect();
                            a -= p.top + parseInt(_(s, "border-top-width")), r -= p.left + parseInt(_(s, "border-left-width")), c = a + o.height, h = r + o.width;
                            break
                        }
                    } while (s = s.parentNode);
                if (n && t !== window) {
                    var f = k(s || t),
                        g = f && f.a,
                        m = f && f.d;
                    f && (c = (a /= m) + (u /= m), h = (r /= g) + (d /= g))
                }
                return {
                    top: a,
                    left: r,
                    bottom: c,
                    right: h,
                    width: d,
                    height: u
                }
            }
        }

        function D(t, e, i, n) {
            for (var s = M(t, !0), o = (e || T(t))[i]; s;) {
                var a = T(s)[n];
                if (!("top" === n || "left" === n ? o >= a : o <= a)) return s;
                if (s === $()) break;
                s = M(s, !1)
            }
            return !1
        }

        function S(t, e, i) {
            for (var n = 0, s = 0, o = t.children; s < o.length;) {
                if ("none" !== o[s].style.display && o[s] !== At.ghost && o[s] !== At.dragged && y(o[s], i.draggable, t, !1)) {
                    if (n === e) return o[s];
                    n++
                }
                s++
            }
            return null
        }

        function E(t, e) {
            for (var i = t.lastElementChild; i && (i === At.ghost || "none" === _(i, "display") || e && !m(i, e));) i = i.previousElementSibling;
            return i || null
        }

        function z(t, e) {
            var i = 0;
            if (!t || !t.parentNode) return -1;
            for (; t = t.previousElementSibling;) "TEMPLATE" === t.nodeName.toUpperCase() || t === At.clone || e && !m(t, e) || i++;
            return i
        }

        function A(t) {
            var e = 0,
                i = 0,
                n = $();
            if (t)
                do {
                    var s = k(t),
                        o = s.a,
                        a = s.d;
                    e += t.scrollLeft * o, i += t.scrollTop * a
                } while (t !== n && (t = t.parentNode));
            return [e, i]
        }

        function M(t, e) {
            if (!t || !t.getBoundingClientRect) return $();
            var i = t,
                n = !1;
            do {
                if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
                    var s = _(i);
                    if (i.clientWidth < i.scrollWidth && ("auto" == s.overflowX || "scroll" == s.overflowX) || i.clientHeight < i.scrollHeight && ("auto" == s.overflowY || "scroll" == s.overflowY)) {
                        if (!i.getBoundingClientRect || i === document.body) return $();
                        if (n || e) return i;
                        n = !0
                    }
                }
            } while (i = i.parentNode);
            return $()
        }

        function O(t, e) {
            return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width)
        }

        function P(t, e) {
            return function() {
                if (!b) {
                    var i = arguments;
                    1 === i.length ? t.call(this, i[0]) : t.apply(this, i), b = setTimeout(function() {
                        b = void 0
                    }, e)
                }
            }
        }

        function L(t, e, i) {
            t.scrollLeft += e, t.scrollTop += i
        }

        function I(e) {
            var i = window.Polymer,
                n = t || window.Zepto;
            return i && i.dom ? i.dom(e).cloneNode(!0) : n ? n(e).clone(!0)[0] : e.cloneNode(!0)
        }
        var R = "Sortable" + (new Date).getTime();

        function H() {
            var t, e = [];
            return {
                captureAnimationState: function() {
                    if (e = [], this.options.animation) {
                        var t = [].slice.call(this.el.children);
                        for (var i in t)
                            if ("none" !== _(t[i], "display") && t[i] !== At.ghost) {
                                e.push({
                                    target: t[i],
                                    rect: T(t[i])
                                });
                                var n = T(t[i]);
                                if (t[i].thisAnimationDuration) {
                                    var s = k(t[i], !0);
                                    s && (n.top -= s.f, n.left -= s.e)
                                }
                                t[i].fromRect = n
                            }
                    }
                },
                addAnimationState: function(t) {
                    e.push(t)
                },
                removeAnimationState: function(t) {
                    e.splice(function(t, e) {
                        for (var i in t)
                            for (var n in e)
                                if (e[n] === t[i][n]) return Number(i);
                        return -1
                    }(e, {
                        target: t
                    }), 1)
                },
                animateAll: function(i) {
                    if (!this.options.animation) return clearTimeout(t), void("function" == typeof i && i());
                    var n = !1,
                        s = 0;
                    for (var o in e) {
                        var a = 0,
                            r = e[o].target,
                            l = r.fromRect,
                            c = T(r),
                            h = r.prevFromRect,
                            u = r.prevToRect,
                            d = e[o].rect,
                            p = k(r, !0);
                        p && (c.top -= p.f, c.left -= p.e), r.toRect = c, (D(r, c, "bottom", "top") || D(r, c, "top", "bottom") || D(r, c, "right", "left") || D(r, c, "left", "right")) && (D(r, d, "bottom", "top") || D(r, d, "top", "bottom") || D(r, d, "right", "left") || D(r, d, "left", "right")) && (D(r, l, "bottom", "top") || D(r, l, "top", "bottom") || D(r, l, "right", "left") || D(r, l, "left", "right")) || (r.thisAnimationDuration && O(h, c) && !O(l, c) && (d.top - c.top) / (d.left - c.left) == (l.top - c.top) / (l.left - c.left) && (a = F(d, h, u, this.options)), O(c, l) || (r.prevFromRect = l, r.prevToRect = c, a || (a = this.options.animation), this.animate(r, d, a)), a && (n = !0, s = Math.max(s, a), clearTimeout(r.animationResetTimer), r.animationResetTimer = setTimeout(function() {
                            this.animationStates[this.i].target.animationTime = 0, this.animationStates[this.i].target.prevFromRect = null, this.animationStates[this.i].target.fromRect = null, this.animationStates[this.i].target.prevToRect = null, this.animationStates[this.i].target.thisAnimationDuration = null
                        }.bind({
                            animationStates: e,
                            i: Number(o)
                        }), a), r.thisAnimationDuration = a))
                    }
                    clearTimeout(t), n ? t = setTimeout(function() {
                        "function" == typeof i && i()
                    }, s) : "function" == typeof i && i(), e = []
                },
                animate: function(t, e, i) {
                    if (i) {
                        _(t, "transition", ""), _(t, "transform", "");
                        var n = T(t),
                            s = k(this.el),
                            o = s && s.a,
                            a = s && s.d,
                            r = (e.left - n.left) / (o || 1),
                            l = (e.top - n.top) / (a || 1);
                        t.animatingX = !!r, t.animatingY = !!l, _(t, "transform", "translate3d(" + r + "px," + l + "px,0)"),
                            function(t) {
                                t.offsetWidth
                            }(t), _(t, "transition", "transform " + i + "ms" + (this.options.easing ? " " + this.options.easing : "")), _(t, "transform", "translate3d(0,0,0)"), "number" == typeof t.animated && clearTimeout(t.animated), t.animated = setTimeout(function() {
                                _(t, "transition", ""), _(t, "transform", ""), t.animated = !1, t.animatingX = !1, t.animatingY = !1
                            }, i)
                    }
                }
            }
        }

        function F(t, e, i, n) {
            return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - i.top, 2) + Math.pow(e.left - i.left, 2)) * n.animation
        }
        var N = [],
            q = {
                initializeByDefault: !0
            },
            j = {
                mount: function(t) {
                    for (var e in q) !(e in t) && (t[e] = q[e]);
                    N.push(t)
                },
                pluginEvent: function(t, e, i) {
                    this.eventCanceled = !1;
                    var n = t + "Global";
                    for (var s in N) e[N[s].pluginName] && (e[N[s].pluginName][n] && (this.eventCanceled = !!e[N[s].pluginName][n](o({
                        sortable: e
                    }, i))), e.options[N[s].pluginName] && e[N[s].pluginName][t] && (this.eventCanceled = this.eventCanceled || !!e[N[s].pluginName][t](o({
                        sortable: e
                    }, i))))
                },
                initializePlugins: function(t, e, i) {
                    for (var n in N) {
                        var o = N[n].pluginName;
                        if (t.options[o] || N[n].initializeByDefault) {
                            var a = new N[n](t, e);
                            a.sortable = t, t[o] = a, s(i, a.options)
                        }
                    }
                    for (var r in t.options) {
                        var l = this.modifyOption(t, r, t.options[r]);
                        void 0 !== l && (t.options[r] = l)
                    }
                },
                getEventOptions: function(t, e) {
                    var i = {};
                    for (var n in N) "function" == typeof N[n].eventOptions && s(i, N[n].eventOptions.call(e, t));
                    return i
                },
                modifyOption: function(t, e, i) {
                    var n;
                    for (var s in N) t[N[s].pluginName] && N[s].optionListeners && "function" == typeof N[s].optionListeners[e] && (n = N[s].optionListeners[e].call(t[N[s].pluginName], i));
                    return n
                }
            };

        function B(t) {
            var e, i = t.sortable,
                n = t.rootEl,
                s = t.name,
                a = t.targetEl,
                r = t.cloneEl,
                h = t.toEl,
                u = t.fromEl,
                d = t.oldIndex,
                p = t.newIndex,
                f = t.oldDraggableIndex,
                g = t.newDraggableIndex,
                m = t.originalEvent,
                v = t.putSortable,
                y = t.eventOptions,
                b = (i = i || n[R]).options,
                w = "on" + s.charAt(0).toUpperCase() + s.substr(1);
            !window.CustomEvent || l || c ? (e = document.createEvent("Event")).initEvent(s, !0, !0) : e = new CustomEvent(s, {
                bubbles: !0,
                cancelable: !0
            }), e.to = h || n, e.from = u || n, e.item = a || n, e.clone = r, e.oldIndex = d, e.newIndex = p, e.oldDraggableIndex = f, e.newDraggableIndex = g, e.originalEvent = m, e.pullMode = v ? v.lastPutMode : void 0;
            var x = o({}, y, j.getEventOptions(s, i));
            for (var _ in x) e[_] = x[_];
            n && n.dispatchEvent(e), b[w] && b[w].call(i, e)
        }
        var W = function(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = i.evt,
                s = a(i, ["evt"]);
            j.pluginEvent.bind(At)(t, e, o({
                dragEl: U,
                parentEl: V,
                ghostEl: X,
                rootEl: G,
                nextEl: Z,
                lastDownEl: K,
                cloneEl: Q,
                cloneHidden: J,
                dragStarted: lt,
                putSortable: ot,
                activeSortable: At.active,
                originalEvent: n,
                oldIndex: tt,
                oldDraggableIndex: it,
                newIndex: et,
                newDraggableIndex: nt,
                hideGhostForTarget: Dt,
                unhideGhostForTarget: St,
                cloneNowHidden: function() {
                    J = !0
                },
                cloneNowShown: function() {
                    J = !1
                },
                dispatchSortableEvent: function(t) {
                    Y({
                        sortable: e,
                        name: t,
                        originalEvent: n
                    })
                }
            }, s))
        };

        function Y(t) {
            B(o({
                putSortable: ot,
                cloneEl: Q,
                targetEl: U,
                rootEl: G,
                oldIndex: tt,
                oldDraggableIndex: it,
                newIndex: et,
                newDraggableIndex: nt
            }, t))
        }
        if ("undefined" == typeof window || !window.document) throw new Error("Sortable.js requires a window with a document");
        var U, V, X, G, Z, K, Q, J, tt, et, it, nt, st, ot, at, rt, lt, ct, ht, ut, dt, pt = !1,
            ft = !1,
            gt = [],
            mt = !1,
            vt = !1,
            yt = [],
            bt = !1,
            wt = [],
            xt = d,
            _t = c || l ? "cssFloat" : "float",
            kt = "draggable" in document.createElement("div"),
            Ct = function() {
                if (l) return !1;
                var t = document.createElement("x");
                return t.style.cssText = "pointer-events:auto", "auto" === t.style.pointerEvents
            }(),
            $t = function(t, e) {
                var i = _(t),
                    n = parseInt(i.width) - parseInt(i.paddingLeft) - parseInt(i.paddingRight) - parseInt(i.borderLeftWidth) - parseInt(i.borderRightWidth),
                    s = S(t, 0, e),
                    o = S(t, 1, e),
                    a = s && _(s),
                    r = o && _(o),
                    l = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + T(s).width,
                    c = r && parseInt(r.marginLeft) + parseInt(r.marginRight) + T(o).width;
                if ("flex" === i.display) return "column" === i.flexDirection || "column-reverse" === i.flexDirection ? "vertical" : "horizontal";
                if ("grid" === i.display) return i.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
                if (s && "none" !== a.float) {
                    var h = "left" === a.float ? "left" : "right";
                    return !o || "both" !== r.clear && r.clear !== h ? "horizontal" : "vertical"
                }
                return s && ("block" === a.display || "flex" === a.display || "table" === a.display || "grid" === a.display || l >= n && "none" === i[_t] || o && "none" === i[_t] && l + c > n) ? "vertical" : "horizontal"
            },
            Tt = function(t) {
                function e(t, i) {
                    return function(n, s, o, a) {
                        var r = n.options.group.name && s.options.group.name && n.options.group.name === s.options.group.name;
                        if (null == t && (i || r)) return !0;
                        if (null == t || !1 === t) return !1;
                        if (i && "clone" === t) return t;
                        if ("function" == typeof t) return e(t(n, s, o, a), i)(n, s, o, a);
                        var l = (i ? n : s).options.group.name;
                        return !0 === t || "string" == typeof t && t === l || t.join && t.indexOf(l) > -1
                    }
                }
                var n = {},
                    s = t.group;
                s && "object" == i(s) || (s = {
                    name: s
                }), n.name = s.name, n.checkPull = e(s.pull, !0), n.checkPut = e(s.put), n.revertClone = s.revertClone, t.group = n
            },
            Dt = function() {
                !Ct && X && _(X, "display", "none")
            },
            St = function() {
                !Ct && X && _(X, "display", "")
            };
        document.addEventListener("click", function(t) {
            if (ft) return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), ft = !1, !1
        }, !0);
        var Et = function(t) {
                if (U) {
                    var e = function(t, e) {
                        for (var i in gt)
                            if (!E(gt[i])) {
                                var n = T(gt[i]),
                                    s = gt[i][R].options.emptyInsertThreshold,
                                    o = t >= n.left - s && t <= n.right + s,
                                    a = e >= n.top - s && e <= n.bottom + s;
                                if (s && o && a) return gt[i]
                            }
                    }((t = t.touches ? t.touches[0] : t).clientX, t.clientY);
                    if (e) {
                        var i = {};
                        for (var n in t) i[n] = t[n];
                        i.target = i.rootEl = e, i.preventDefault = void 0, i.stopPropagation = void 0, e[R]._onDragOver(i)
                    }
                }
            },
            zt = function(t) {
                U && U.parentNode[R]._isOutsideThisEl(t.target)
            };

        function At(t, e) {
            if (!t || !t.nodeType || 1 !== t.nodeType) throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
            this.el = t, this.options = e = s({}, e), t[R] = this;
            var i = {
                group: null,
                sort: !0,
                disabled: !1,
                store: null,
                handle: null,
                draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
                swapThreshold: 1,
                invertSwap: !1,
                invertedSwapThreshold: null,
                removeCloneOnHide: !0,
                direction: function() {
                    return $t(t, this.options)
                },
                ghostClass: "sortable-ghost",
                chosenClass: "sortable-chosen",
                dragClass: "sortable-drag",
                ignore: "a, img",
                filter: null,
                preventOnFilter: !0,
                animation: 0,
                easing: null,
                setData: function(t, e) {
                    t.setData("Text", e.textContent)
                },
                dropBubble: !1,
                dragoverBubble: !1,
                dataIdAttr: "data-id",
                delay: 0,
                delayOnTouchOnly: !1,
                touchStartThreshold: Number.parseInt(window.devicePixelRatio, 10) || 1,
                forceFallback: !1,
                fallbackClass: "sortable-fallback",
                fallbackOnBody: !1,
                fallbackTolerance: 0,
                fallbackOffset: {
                    x: 0,
                    y: 0
                },
                supportPointer: !1 !== At.supportPointer && "PointerEvent" in window,
                emptyInsertThreshold: 5
            };
            for (var n in j.initializePlugins(this, t, i), i) !(n in e) && (e[n] = i[n]);
            for (var o in Tt(e), this) "_" === o.charAt(0) && "function" == typeof this[o] && (this[o] = this[o].bind(this));
            this.nativeDraggable = !e.forceFallback && kt, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? f(t, "pointerdown", this._onTapStart) : (f(t, "mousedown", this._onTapStart), f(t, "touchstart", this._onTapStart)), this.nativeDraggable && (f(t, "dragover", this), f(t, "dragenter", this)), gt.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), s(this, H())
        }

        function Mt(t, e, i, n, s, o, a, r) {
            var h, u, d = t[R],
                p = d.options.onMove;
            return !window.CustomEvent || l || c ? (h = document.createEvent("Event")).initEvent("move", !0, !0) : h = new CustomEvent("move", {
                bubbles: !0,
                cancelable: !0
            }), h.to = e, h.from = t, h.dragged = i, h.draggedRect = n, h.related = s || e, h.relatedRect = o || T(e), h.willInsertAfter = r, h.originalEvent = a, t.dispatchEvent(h), p && (u = p.call(d, h, a)), u
        }

        function Ot(t) {
            t.draggable = !1
        }

        function Pt() {
            bt = !1
        }

        function Lt(t) {
            for (var e = t.tagName + t.className + t.src + t.href + t.textContent, i = e.length, n = 0; i--;) n += e.charCodeAt(i);
            return n.toString(36)
        }

        function It(t) {
            return setTimeout(t, 0)
        }

        function Rt(t) {
            return clearTimeout(t)
        }
        At.prototype = {
            constructor: At,
            _isOutsideThisEl: function(t) {
                this.el.contains(t) || t === this.el || (ct = null)
            },
            _getDirection: function(t, e) {
                return "function" == typeof this.options.direction ? this.options.direction.call(this, t, e, U) : this.options.direction
            },
            _onTapStart: function(t) {
                if (t.cancelable) {
                    var e = this,
                        i = this.el,
                        n = this.options,
                        s = n.preventOnFilter,
                        o = t.type,
                        a = t.touches && t.touches[0],
                        r = (a || t).target,
                        l = t.target.shadowRoot && (t.path && t.path[0] || t.composedPath && t.composedPath()[0]) || r,
                        c = n.filter;
                    if (function(t) {
                            wt.length = 0;
                            var e = t.getElementsByTagName("input"),
                                i = e.length;
                            for (; i--;) {
                                var n = e[i];
                                n.checked && wt.push(n)
                            }
                        }(i), !U && !(/mousedown|pointerdown/.test(o) && 0 !== t.button || n.disabled || l.isContentEditable || (r = y(r, n.draggable, i, !1)) && r.animated || K === r)) {
                        if (tt = z(r), it = z(r, n.draggable), "function" == typeof c) {
                            if (c.call(this, t, r, this)) return Y({
                                sortable: e,
                                rootEl: l,
                                name: "filter",
                                targetEl: r,
                                toEl: i,
                                fromEl: i
                            }), W("filter", e, {
                                evt: t
                            }), void(s && t.cancelable && t.preventDefault())
                        } else if (c && (c = c.split(",").some(function(n) {
                                if (n = y(l, n.trim(), i, !1)) return Y({
                                    sortable: e,
                                    rootEl: n,
                                    name: "filter",
                                    targetEl: r,
                                    fromEl: i,
                                    toEl: i
                                }), W("filter", e, {
                                    evt: t
                                }), !0
                            }))) return void(s && t.cancelable && t.preventDefault());
                        n.handle && !y(l, n.handle, i, !1) || this._prepareDragStart(t, a, r)
                    }
                }
            },
            _prepareDragStart: function(t, e, i) {
                var n, s = this,
                    o = s.el,
                    a = s.options,
                    r = o.ownerDocument;
                if (i && !U && i.parentNode === o)
                    if (G = o, V = (U = i).parentNode, Z = U.nextSibling, K = i, st = a.group, At.dragged = U, at = {
                            target: U,
                            clientX: (e || t).clientX,
                            clientY: (e || t).clientY
                        }, this._lastX = (e || t).clientX, this._lastY = (e || t).clientY, U.style["will-change"] = "all", n = function() {
                            W("delayEnded", s, {
                                evt: t
                            }), At.eventCanceled ? s._onDrop() : (s._disableDelayedDragEvents(), !h && s.nativeDraggable && (U.draggable = !0), s._triggerDragStart(t, e), Y({
                                sortable: s,
                                name: "choose",
                                originalEvent: t
                            }), x(U, a.chosenClass, !0))
                        }, a.ignore.split(",").forEach(function(t) {
                            C(U, t.trim(), Ot)
                        }), f(r, "dragover", Et), f(r, "mousemove", Et), f(r, "touchmove", Et), f(r, "mouseup", s._onDrop), f(r, "touchend", s._onDrop), f(r, "touchcancel", s._onDrop), h && this.nativeDraggable && (this.options.touchStartThreshold = 4, U.draggable = !0), W("delayStart", this, {
                            evt: t
                        }), !a.delay || a.delayOnTouchOnly && !e || this.nativeDraggable && (c || l)) n();
                    else {
                        if (At.eventCanceled) return void this._onDrop();
                        f(r, "mouseup", s._disableDelayedDrag), f(r, "touchend", s._disableDelayedDrag), f(r, "touchcancel", s._disableDelayedDrag), f(r, "mousemove", s._delayedDragTouchMoveHandler), f(r, "touchmove", s._delayedDragTouchMoveHandler), a.supportPointer && f(r, "pointermove", s._delayedDragTouchMoveHandler), s._dragStartTimer = setTimeout(n, a.delay)
                    }
            },
            _delayedDragTouchMoveHandler: function(t) {
                var e = t.touches ? t.touches[0] : t;
                Math.max(Math.abs(e.clientX - this._lastX), Math.abs(e.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag()
            },
            _disableDelayedDrag: function() {
                U && Ot(U), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents()
            },
            _disableDelayedDragEvents: function() {
                var t = this.el.ownerDocument;
                g(t, "mouseup", this._disableDelayedDrag), g(t, "touchend", this._disableDelayedDrag), g(t, "touchcancel", this._disableDelayedDrag), g(t, "mousemove", this._delayedDragTouchMoveHandler), g(t, "touchmove", this._delayedDragTouchMoveHandler), g(t, "pointermove", this._delayedDragTouchMoveHandler)
            },
            _triggerDragStart: function(t, e) {
                e = e || ("touch" == t.pointerType ? t : null), !this.nativeDraggable || e ? this.options.supportPointer ? f(document, "pointermove", this._onTouchMove) : f(document, e ? "touchmove" : "mousemove", this._onTouchMove) : (f(U, "dragend", this), f(G, "dragstart", this._onDragStart));
                try {
                    document.selection ? It(function() {
                        document.selection.empty()
                    }) : window.getSelection().removeAllRanges()
                } catch (t) {}
            },
            _dragStarted: function(t, e) {
                if (pt = !1, G && U) {
                    W("dragStarted", this, {
                        evt: e
                    }), this.nativeDraggable && f(document, "dragover", zt);
                    var i = this.options;
                    !t && x(U, i.dragClass, !1), x(U, i.ghostClass, !0), At.active = this, t && this._appendGhost(), Y({
                        sortable: this,
                        name: "start",
                        originalEvent: e
                    })
                } else this._nulling()
            },
            _emulateDragOver: function() {
                if (rt) {
                    this._lastX = rt.clientX, this._lastY = rt.clientY, Dt();
                    for (var t = document.elementFromPoint(rt.clientX, rt.clientY), e = t; t && t.shadowRoot && (t = t.shadowRoot.elementFromPoint(rt.clientX, rt.clientY)) !== e;) e = t;
                    if (U.parentNode[R]._isOutsideThisEl(t), e)
                        do {
                            if (e[R]) {
                                if (e[R]._onDragOver({
                                        clientX: rt.clientX,
                                        clientY: rt.clientY,
                                        target: t,
                                        rootEl: e
                                    }) && !this.options.dragoverBubble) break
                            }
                            t = e
                        } while (e = e.parentNode);
                    St()
                }
            },
            _onTouchMove: function(t) {
                if (at) {
                    var e = this.options,
                        i = e.fallbackTolerance,
                        n = e.fallbackOffset,
                        s = t.touches ? t.touches[0] : t,
                        o = X && k(X),
                        a = X && o && o.a,
                        r = X && o && o.d,
                        l = xt && dt && A(dt),
                        c = (s.clientX - at.clientX + n.x) / (a || 1) + (l ? l[0] - yt[0] : 0) / (a || 1),
                        h = (s.clientY - at.clientY + n.y) / (r || 1) + (l ? l[1] - yt[1] : 0) / (r || 1),
                        u = t.touches ? "translate3d(" + c + "px," + h + "px,0)" : "translate(" + c + "px," + h + "px)";
                    if (!At.active && !pt) {
                        if (i && Math.max(Math.abs(s.clientX - this._lastX), Math.abs(s.clientY - this._lastY)) < i) return;
                        this._onDragStart(t, !0)
                    }
                    rt = s, _(X, "webkitTransform", u), _(X, "mozTransform", u), _(X, "msTransform", u), _(X, "transform", u), t.cancelable && t.preventDefault()
                }
            },
            _appendGhost: function() {
                if (!X) {
                    var t = this.options.fallbackOnBody ? document.body : G,
                        e = T(U, !0, xt, !0, t),
                        i = this.options;
                    if (xt) {
                        for (dt = t;
                            "static" === _(dt, "position") && "none" === _(dt, "transform") && dt !== document;) dt = dt.parentNode;
                        dt !== document.body && dt !== document.documentElement ? (dt === document && (dt = $()), e.top += dt.scrollTop, e.left += dt.scrollLeft) : dt = $(), yt = A(dt)
                    }
                    x(X = U.cloneNode(!0), i.ghostClass, !1), x(X, i.fallbackClass, !0), x(X, i.dragClass, !0), _(X, "transition", ""), _(X, "transform", ""), _(X, "box-sizing", "border-box"), _(X, "margin", 0), _(X, "top", e.top), _(X, "left", e.left), _(X, "width", e.width), _(X, "height", e.height), _(X, "opacity", "0.8"), _(X, "position", xt ? "absolute" : "fixed"), _(X, "zIndex", "100000"), _(X, "pointerEvents", "none"), At.ghost = X, t.appendChild(X)
                }
            },
            _onDragStart: function(t, e) {
                var i = this,
                    n = t.dataTransfer,
                    s = i.options;
                W("dragStart", this, {
                    evt: t
                }), At.eventCanceled ? this._onDrop() : (W("setupClone", this), At.eventCanceled || ((Q = I(U)).draggable = !1, Q.style["will-change"] = "", this._hideClone(), x(Q, this.options.chosenClass, !1), At.clone = Q), i.cloneId = It(function() {
                    W("clone", i), At.eventCanceled || (i.options.removeCloneOnHide || G.insertBefore(Q, U), i._hideClone(), Y({
                        sortable: i,
                        name: "clone"
                    }))
                }), !e && x(U, s.dragClass, !0), e ? (ft = !0, i._loopId = setInterval(i._emulateDragOver, 50)) : (g(document, "mouseup", i._onDrop), g(document, "touchend", i._onDrop), g(document, "touchcancel", i._onDrop), n && (n.effectAllowed = "move", s.setData && s.setData.call(i, n, U)), f(document, "drop", i), _(U, "transform", "translateZ(0)")), pt = !0, i._dragStartId = It(i._dragStarted.bind(i, e, t)), f(document, "selectstart", i), lt = !0, u && _(document.body, "user-select", "none"))
            },
            _onDragOver: function(t) {
                var e, i, n, s, a = this.el,
                    r = t.target,
                    l = this.options,
                    c = l.group,
                    h = At.active,
                    u = st === c,
                    d = l.sort,
                    p = ot || h,
                    f = this,
                    g = !1;
                if (!bt) {
                    if (void 0 !== t.preventDefault && t.cancelable && t.preventDefault(), r = y(r, l.draggable, a, !0), H("dragOver"), At.eventCanceled) return g;
                    if (U.contains(t.target) || r.animated && r.animatingX && r.animatingY || f._ignoreWhileAnimating === r) return N(!1);
                    if (ft = !1, h && !l.disabled && (u ? d || (n = !G.contains(U)) : ot === this || (this.lastPutMode = st.checkPull(this, h, U, t)) && c.checkPut(this, h, U, t))) {
                        if (s = "vertical" === this._getDirection(t, r), e = T(U), H("dragOverValid"), At.eventCanceled) return g;
                        if (n) return V = G, F(), this._hideClone(), H("revert"), At.eventCanceled || (Z ? G.insertBefore(U, Z) : G.appendChild(U)), N(!0);
                        var m = E(a, l.draggable);
                        if (!m || function(t, e, i) {
                                var n = T(E(i.el, i.options.draggable));
                                return e ? t.clientX > n.right + 10 || t.clientX <= n.right && t.clientY > n.bottom && t.clientX >= n.left : t.clientX > n.right && t.clientY > n.top || t.clientX <= n.right && t.clientY > n.bottom + 10
                            }(t, s, this) && !m.animated) {
                            if (m === U) return N(!1);
                            if (m && a === t.target && (r = m), r && (i = T(r)), !1 !== Mt(G, a, U, e, r, i, t, !!r)) return F(), a.appendChild(U), V = a, q(), N(!0)
                        } else if (r.parentNode === a) {
                            i = T(r);
                            var v, b, w, k = U.parentNode !== a,
                                C = ! function(t, e, i) {
                                    var n = i ? t.left : t.top,
                                        s = i ? t.right : t.bottom,
                                        o = i ? t.width : t.height,
                                        a = i ? e.left : e.top,
                                        r = i ? e.right : e.bottom,
                                        l = i ? e.width : e.height;
                                    return n === a || s === r || n + o / 2 === a + l / 2
                                }(U.animated && U.toRect || e, r.animated && r.toRect || i, s),
                                $ = s ? "top" : "left",
                                S = D(r, null, "top", "top") || D(U, null, "top", "top"),
                                A = S ? S.scrollTop : void 0;
                            if (ct !== r && (b = i[$], mt = !1, vt = !C && l.invertSwap || k), 0 !== (v = function(t, e, i, n, s, o, a) {
                                    var r = T(e),
                                        l = i ? t.clientY : t.clientX,
                                        c = i ? r.height : r.width,
                                        h = i ? r.top : r.left,
                                        u = i ? r.bottom : r.right,
                                        d = !1;
                                    if (!o)
                                        if (a && ut < c * n) {
                                            if (!mt && (1 === ht ? l > h + c * s / 2 : l < u - c * s / 2) && (mt = !0), mt) d = !0;
                                            else if (1 === ht ? l < h + ut : l > u - ut) return -ht
                                        } else if (l > h + c * (1 - n) / 2 && l < u - c * (1 - n) / 2) return function(t) {
                                        return z(U) < z(t) ? 1 : -1
                                    }(e);
                                    if ((d = d || o) && (l < h + c * s / 2 || l > u - c * s / 2)) return l > h + c / 2 ? 1 : -1;
                                    return 0
                                }(t, r, s, C ? 1 : l.swapThreshold, null == l.invertedSwapThreshold ? l.swapThreshold : l.invertedSwapThreshold, vt, ct === r))) {
                                var M = z(U);
                                do {
                                    M -= v, w = V.children[M]
                                } while (w && ("none" === _(w, "display") || w === X))
                            }
                            if (0 === v || w === r) return N(!1);
                            ct = r, ht = v;
                            var O = r.nextElementSibling,
                                P = !1,
                                I = Mt(G, a, U, e, r, i, t, P = 1 === v);
                            if (!1 !== I) return 1 !== I && -1 !== I || (P = 1 === I), bt = !0, setTimeout(Pt, 30), F(), P && !O ? a.appendChild(U) : r.parentNode.insertBefore(U, P ? O : r), S && L(S, 0, A - S.scrollTop), V = U.parentNode, void 0 === b || vt || (ut = Math.abs(b - T(r)[$])), q(), N(!0)
                        }
                        if (a.contains(U)) return N(!1)
                    }
                    return !1
                }

                function H(l, c) {
                    W(l, f, o({
                        evt: t,
                        isOwner: u,
                        axis: s ? "vertical" : "horizontal",
                        revert: n,
                        dragRect: e,
                        targetRect: i,
                        canSort: d,
                        fromSortable: p,
                        target: r,
                        completed: N,
                        onMove: function(i, n) {
                            return Mt(G, a, U, e, i, T(i), t, n)
                        },
                        changed: q
                    }, c))
                }

                function F() {
                    H("dragOverAnimationCapture"), f.captureAnimationState(), f !== p && p.captureAnimationState()
                }

                function N(e) {
                    return H("dragOverCompleted", {
                        insertion: e
                    }), e && (u ? h._hideClone() : h._showClone(f), f !== p && (x(U, ot ? ot.options.ghostClass : h.options.ghostClass, !1), x(U, l.ghostClass, !0)), ot !== f && f !== At.active ? ot = f : f === At.active && ot && (ot = null), p === f && (f._ignoreWhileAnimating = r), f.animateAll(function() {
                        H("dragOverAnimationComplete"), f._ignoreWhileAnimating = null
                    }), f !== p && (p.animateAll(), p._ignoreWhileAnimating = null)), (r === U && !U.animated || r === a && !r.animated) && (ct = null), l.dragoverBubble || t.rootEl || r === document || (U.parentNode[R]._isOutsideThisEl(t.target), !e && Et(t)), !l.dragoverBubble && t.stopPropagation && t.stopPropagation(), g = !0
                }

                function q() {
                    et = z(U), nt = z(U, l.draggable), Y({
                        sortable: f,
                        name: "change",
                        toEl: a,
                        newIndex: et,
                        newDraggableIndex: nt,
                        originalEvent: t
                    })
                }
            },
            _ignoreWhileAnimating: null,
            _offMoveEvents: function() {
                g(document, "mousemove", this._onTouchMove), g(document, "touchmove", this._onTouchMove), g(document, "pointermove", this._onTouchMove), g(document, "dragover", Et), g(document, "mousemove", Et), g(document, "touchmove", Et)
            },
            _offUpEvents: function() {
                var t = this.el.ownerDocument;
                g(t, "mouseup", this._onDrop), g(t, "touchend", this._onDrop), g(t, "pointerup", this._onDrop), g(t, "touchcancel", this._onDrop), g(document, "selectstart", this)
            },
            _onDrop: function(t) {
                var e = this.el,
                    i = this.options;
                et = z(U), nt = z(U, i.draggable), W("drop", this, {
                    evt: t
                }), et = z(U), nt = z(U, i.draggable), At.eventCanceled ? this._nulling() : (pt = !1, vt = !1, mt = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Rt(this.cloneId), Rt(this._dragStartId), this.nativeDraggable && (g(document, "drop", this), g(e, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), u && _(document.body, "user-select", ""), t && (lt && (t.cancelable && t.preventDefault(), !i.dropBubble && t.stopPropagation()), X && X.parentNode && X.parentNode.removeChild(X), (G === V || ot && "clone" !== ot.lastPutMode) && Q && Q.parentNode && Q.parentNode.removeChild(Q), U && (this.nativeDraggable && g(U, "dragend", this), Ot(U), U.style["will-change"] = "", lt && !pt && x(U, ot ? ot.options.ghostClass : this.options.ghostClass, !1), x(U, this.options.chosenClass, !1), Y({
                    sortable: this,
                    name: "unchoose",
                    toEl: V,
                    newIndex: null,
                    newDraggableIndex: null,
                    originalEvent: t
                }), G !== V ? (et >= 0 && (Y({
                    rootEl: V,
                    name: "add",
                    toEl: V,
                    fromEl: G,
                    originalEvent: t
                }), Y({
                    sortable: this,
                    name: "remove",
                    toEl: V,
                    originalEvent: t
                }), Y({
                    rootEl: V,
                    name: "sort",
                    toEl: V,
                    fromEl: G,
                    originalEvent: t
                }), Y({
                    sortable: this,
                    name: "sort",
                    toEl: V,
                    originalEvent: t
                })), ot && ot.save()) : et !== tt && et >= 0 && (Y({
                    sortable: this,
                    name: "update",
                    toEl: V,
                    originalEvent: t
                }), Y({
                    sortable: this,
                    name: "sort",
                    toEl: V,
                    originalEvent: t
                })), At.active && (null != et && -1 !== et || (et = tt, nt = it), Y({
                    sortable: this,
                    name: "end",
                    toEl: V,
                    originalEvent: t
                }), this.save()))), this._nulling())
            },
            _nulling: function() {
                W("nulling", this), G = U = V = X = Z = Q = K = J = at = rt = lt = et = nt = tt = it = ct = ht = ot = st = At.dragged = At.ghost = At.clone = At.active = null, wt.forEach(function(t) {
                    t.checked = !0
                }), wt.length = 0
            },
            handleEvent: function(t) {
                switch (t.type) {
                    case "drop":
                    case "dragend":
                        this._onDrop(t);
                        break;
                    case "dragenter":
                    case "dragover":
                        U && (this._onDragOver(t), function(t) {
                            t.dataTransfer && (t.dataTransfer.dropEffect = "move");
                            t.cancelable && t.preventDefault()
                        }(t));
                        break;
                    case "selectstart":
                        t.preventDefault()
                }
            },
            toArray: function() {
                for (var t, e = [], i = this.el.children, n = 0, s = i.length, o = this.options; n < s; n++) y(t = i[n], o.draggable, this.el, !1) && e.push(t.getAttribute(o.dataIdAttr) || Lt(t));
                return e
            },
            sort: function(t) {
                var e = {},
                    i = this.el;
                this.toArray().forEach(function(t, n) {
                    var s = i.children[n];
                    y(s, this.options.draggable, i, !1) && (e[t] = s)
                }, this), t.forEach(function(t) {
                    e[t] && (i.removeChild(e[t]), i.appendChild(e[t]))
                })
            },
            save: function() {
                var t = this.options.store;
                t && t.set && t.set(this)
            },
            closest: function(t, e) {
                return y(t, e || this.options.draggable, this.el, !1)
            },
            option: function(t, e) {
                var i = this.options;
                if (void 0 === e) return i[t];
                var n = j.modifyOption(this, t, e);
                i[t] = void 0 !== n ? n : e, "group" === t && Tt(i)
            },
            destroy: function() {
                W("destroy", this);
                var t = this.el;
                t[R] = null, g(t, "mousedown", this._onTapStart), g(t, "touchstart", this._onTapStart), g(t, "pointerdown", this._onTapStart), this.nativeDraggable && (g(t, "dragover", this), g(t, "dragenter", this)), Array.prototype.forEach.call(t.querySelectorAll("[draggable]"), function(t) {
                    t.removeAttribute("draggable")
                }), this._onDrop(), gt.splice(gt.indexOf(this.el), 1), this.el = t = null
            },
            _hideClone: function() {
                if (!J) {
                    if (W("hideClone", this), At.eventCanceled) return;
                    _(Q, "display", "none"), this.options.removeCloneOnHide && Q.parentNode && Q.parentNode.removeChild(Q), J = !0
                }
            },
            _showClone: function(t) {
                if ("clone" === t.lastPutMode) {
                    if (J) {
                        if (W("showClone", this), At.eventCanceled) return;
                        G.contains(U) && !this.options.group.revertClone ? G.insertBefore(Q, U) : Z ? G.insertBefore(Q, Z) : G.appendChild(Q), this.options.group.revertClone && this._animate(U, Q), _(Q, "display", ""), J = !1
                    }
                } else this._hideClone()
            }
        }, f(document, "touchmove", function(t) {
            (At.active || pt) && t.cancelable && t.preventDefault()
        }), At.utils = {
            on: f,
            off: g,
            css: _,
            find: C,
            is: function(t, e) {
                return !!y(t, e, t, !1)
            },
            extend: function(t, e) {
                if (t && e)
                    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                return t
            },
            throttle: P,
            closest: y,
            toggleClass: x,
            clone: I,
            index: z,
            nextTick: It,
            cancelNextTick: Rt,
            detectDirection: $t,
            getChild: S
        }, At.mount = function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            for (var n in e[0].constructor === Array && (e = e[0]), e) {
                var s = e[n];
                if (!s.prototype || !s.prototype.constructor) throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(el));
                s.utils && (At.utils = o({}, At.utils, s.utils)), j.mount(s)
            }
        }, At.create = function(t, e) {
            return new At(t, e)
        }, At.version = "1.10.0-rc2";
        var Ht, Ft, Nt, qt = [];

        function jt() {
            qt.forEach(function(t) {
                clearInterval(t.pid)
            }), qt = []
        }
        P(function(t, e, i, n) {
            if (e.scroll) {
                var s, o = e.scrollSensitivity,
                    a = e.scrollSpeed,
                    r = $(),
                    l = !1;
                Ft !== i && (Ft = i, jt(), Ht = e.scroll, s = e.scrollFn, !0 === Ht && (Ht = M(i, !0)));
                var c = 0,
                    h = Ht;
                do {
                    var u = h,
                        d = T(u),
                        p = d.top,
                        f = d.bottom,
                        g = d.left,
                        m = d.right,
                        v = d.width,
                        y = d.height,
                        b = void 0,
                        w = void 0,
                        x = u.scrollWidth,
                        k = u.scrollHeight,
                        C = _(u),
                        D = u.scrollLeft,
                        S = u.scrollTop;
                    u === r ? (b = v < x && ("auto" === C.overflowX || "scroll" === C.overflowX || "visible" === C.overflowX), w = y < k && ("auto" === C.overflowY || "scroll" === C.overflowY || "visible" === C.overflowY)) : (b = v < x && ("auto" === C.overflowX || "scroll" === C.overflowX), w = y < k && ("auto" === C.overflowY || "scroll" === C.overflowY));
                    var E = b && (Math.abs(m - t.clientX) <= o && D + v < x) - (Math.abs(g - t.clientX) <= o && !!D),
                        z = w && (Math.abs(f - t.clientY) <= o && S + y < k) - (Math.abs(p - t.clientY) <= o && !!S);
                    if (!qt[c])
                        for (var A = 0; A <= c; A++) qt[A] || (qt[A] = {});
                    qt[c].vx == E && qt[c].vy == z && qt[c].el === u || (qt[c].el = u, qt[c].vx = E, qt[c].vy = z, clearInterval(qt[c].pid), 0 == E && 0 == z || (l = !0, qt[c].pid = setInterval(function() {
                        n && 0 === this.layer && At.active._onTouchMove(Nt);
                        var e = qt[this.layer].vy ? qt[this.layer].vy * a : 0,
                            i = qt[this.layer].vx ? qt[this.layer].vx * a : 0;
                        "function" == typeof s && "continue" !== s.call(At.dragged.parentNode[R], i, e, t, Nt, qt[this.layer].el) || L(qt[this.layer].el, i, e)
                    }.bind({
                        layer: c
                    }), 24))), c++
                } while (e.bubbleScroll && h !== r && (h = M(h, !1)));
                l
            }
        }, 30);
        var Bt = function(t) {
            var e = t.originalEvent,
                i = t.putSortable,
                n = t.dragEl,
                s = t.activeSortable,
                o = t.dispatchSortableEvent,
                a = t.hideGhostForTarget,
                r = t.unhideGhostForTarget,
                l = i || s;
            a();
            var c = document.elementFromPoint(e.clientX, e.clientY);
            r(), l && !l.el.contains(c) && (o("spill"), this.onSpill(n))
        };

        function Wt() {}

        function Yt() {}
        Wt.prototype = {
            startIndex: null,
            dragStart: function(t) {
                var e = t.oldDraggableIndex;
                this.startIndex = e
            },
            onSpill: function(t) {
                this.sortable.captureAnimationState();
                var e = S(this.sortable.el, this.startIndex, this.sortable.options);
                e ? this.sortable.el.insertBefore(t, e) : this.sortable.el.appendChild(t), this.sortable.animateAll()
            },
            drop: Bt
        }, s(Wt, {
            pluginName: "revertOnSpill"
        }), Yt.prototype = {
            onSpill: function(t) {
                this.sortable.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), this.sortable.animateAll()
            },
            drop: Bt
        }, s(Yt, {
            pluginName: "removeOnSpill"
        });
        e.a = At
    }).call(this, i(0))
}, function(t, e, i) {
    i(3), t.exports = i(13)
}, function(t, e, i) {
    "use strict";
    i.r(e),
        function(t) {
            var e = i(1);
            i(4), Foundation.Reveal.defaults.animationIn = "scale-in-up fast ease-in-out", Foundation.Reveal.defaults.animationOut = "scale-out-down fast ease-in-out", Foundation.Abide.defaults.patterns.phone = /^.{18}$/, Foundation.Tooltip.defaults.fadeInDuration = 100, Foundation.Tooltip.defaults.fadeOutDuration = 100, t(document).foundation(), t(document).ready(function() {
                t.ajaxSetup({
                    headers: {
                        "X-CSRF-TOKEN": t('meta[name="csrf-token"]').attr("content")
                    }
                }), t("[data-phone-mask]").mask("+7 (000) 000-00-00"), t("[data-birthday]").mask("00.00.0000"), t("[data-phone-mask]").focus(function() {
                    t(this).val() || t(this).val("+7 ")
                }), t("[data-phone-mask]").blur(function() {
                    "+7 " === t(this).val() && t(this).val("")
                }), t(".reveal").on("open.zf.reveal", function() {
                    t("[data-open]").blur()
                }), t("body").on("submit", "[data-ajax-form]", function(e) {
                    e.preventDefault();
                    var i = this,
                        n = t(this).find("[type=submit]");
                    t('input[type="file"]', t(this)).each(function() {
                        0 == this.files.length && t(this).prop("disabled", !0)
                    });
                    var s = new FormData(this),
                        o = t(this).find(".image-item");
                    if (o.length)
                        for (var a = 0; a < o.length; a++) s.append("gallery_multiple[]", o[a].file);
                    t('input[type="file"]').prop("disabled", !1), n.attr("disabled", "disabled"), n.find(".spinner").remove(), n.append('<i class="spinner"> </i>'), t(".form-error", t(i)).remove(), t.ajax({
                        type: "POST",
                        url: t(this).attr("action") ? t(this).attr("action") : t(this).attr("data-action"),
                        data: s,
                        processData: !1,
                        contentType: !1,
                        dataType: "json",
                        success: function(e) {
                            n.find(".spinner").remove(), e.redirect && (window.location.href = e.redirect), e.ok && (t(i).find(".form").css({
                                visibility: "hidden"
                            }), t(i).find(".form").addClass("invisible"), t(i).find(".success").addClass("visible"))
                        },
                        error: function(e) {
                            n.removeAttr("disabled"), n.find(".spinner").remove();
                            var s = e.responseJSON.errors;
                            for (var o in t(i).find(".form-error").remove(), s) s.hasOwnProperty(o) && t("[name='" + o + "']", t(i)).parent().append('<div class="form-error">' + (Array.isArray(s[o]) ? s[o].join("<br />") : s[o]) + "</div>")
                        }
                    })
                }), t(".image-field").change(function(e) {
                    if (FileReader)
                        for (var i = 0; i < this.files.length; i++) {
                            var n = this.files[i];
                            if (n.type.startsWith("image/"))
                                if (!t(this).prop("data-ignore-size-limit") && n.size / 1024 / 1024 > 2) alert("Файл " + n.name + " слишком большой. Максимальный размер - 2 МБ.");
                                else {
                                    var s = t("<div>", {
                                        class: "image-item"
                                    });
                                    s[0].file = n, s.append('<i title="Удалить" class="delete icon-trash"></i>'), t(this).parent().parent().find(".image-upload-list").append(s);
                                    var o = new FileReader;
                                    o.onload = function(t) {
                                        return function(e) {
                                            t.css("background-image", "url(" + e.target.result + ")")
                                        }
                                    }(s), o.readAsDataURL(n)
                                }
                        } else alert("У вас устаревший браузер, невозможно прикрепить фото")
                }), t("#seo").length && function() {
                    if (t(".admin-image-field").change(function(e) {
                            if (FileReader)
                                for (var i = 0; i < this.files.length; i++) {
                                    var n = this.files[i];
                                    if (n.type.startsWith("image/")) {
                                        var s = t("<div>", {
                                            class: "image-item"
                                        });
                                        s[0].file = n, s.append('<i title="Удалить" class="delete icon-trash"></i>'), t(this).parent().parent().find(".image-upload-list").append(s);
                                        var o = new FileReader;
                                        o.onload = function(e) {
                                            return function(i) {
                                                e.css("background-image", "url(" + i.target.result + ")"), e.append(t("<input>", {
                                                    type: "hidden",
                                                    name: "SEO[gallery][]",
                                                    value: i.target.result
                                                }))
                                            }
                                        }(s), o.readAsDataURL(n)
                                    }
                                } else alert("У вас устаревший браузер, невозможно прикрепить фото")
                        }), t("body").on("change", ".howto-image", function(e) {
                            if (FileReader)
                                if (this.files[0]) {
                                    if (!this.files[0].type.startsWith("image/")) return;
                                    var i = new FileReader;
                                    i.onload = function(e) {
                                        t(this).closest("label").css({
                                            "background-image": "url(" + e.target.result + ")"
                                        }), t(this).closest("label").find("input[type=hidden]").val(e.target.result)
                                    }.bind(this), i.readAsDataURL(this.files[0])
                                } else t(this).closest("label").css({
                                    "background-image": "url(/assets/img/misc/no-image.png)"
                                }), t(this).closest("label").find("input").val("");
                            else alert("У вас устаревший браузер, невозможно прикрепить фото")
                        }), t(".howtos").length) e.a.create(t(".howtos")[0], {
                        handle: ".handle"
                    });
                    t("[data-admin-add-instruction]").click(function() {
                        t(".howtos").append('<div class="item">\n                     <div class="handle"> </div>                        <i class="icon-close" data-remove-howto title="Удалить блок"> </i>\n                            <input name="howto[id][]" type="hidden" value="">\n                        <div class="name">\n                            <input class="form-control" type="text" required max="191" name="howto[name][]" placeholder="Заголовок" value="" />\n                        </div>\n                        <div class="content">\n                            <textarea class="form-control" required name="howto[content][]" max="1000" placeholder="Описание"></textarea>\n                        </div>\n                        <div class="image">\n                            <label title="Задать\\сбросить картинку">\n                                <input type="file" class="howto-image" accept="image/*" />\n                                <input type="hidden" name="howto[image][]" />\n                            </label>\n                        </div>\n                    </div>')
                    }), t("body").on("click", "[data-remove-howto]", function() {
                        t(this).closest(".item").remove()
                    })
                }(), t(".image-upload-list").on("click", ".image-item .delete", function() {
                    t(this).closest(".image-item").remove()
                }), t(".image-upload-list").each(function() {
                    e.a.create(t(this)[0])
                }), t("#header .login").hoverIntent({
                    over: function() {
                        t(this).find(".sub-menu-outer").addClass("visible")
                    },
                    out: function() {
                        t(this).find(".sub-menu-outer").removeClass("visible")
                    }
                }), t("#header .phone").hoverIntent({
                    over: function() {
                        t(window).width() > 599 && (t(this).find(".callback-form-outer").addClass("visible"), t(".overlay").addClass("visible"))
                    },
                    out: function() {
                        t(window).width() > 599 && (t(this).find(".callback-form-outer").removeClass("visible"), t(".overlay").removeClass("visible"))
                    }
                }), t("[data-open]").click(function(t) {
                    t.preventDefault()
                }), t("[data-logout]").click(function(e) {
                    e.preventDefault(), t("#logout-form").submit()
                }), t.fancybox.defaults.lang = "ru", t.fancybox.defaults.loop = !0, t.fancybox.defaults.transitionDuration = 200, t.fancybox.defaults.animationDuration = 200, t.fancybox.defaults.preventCaptionOverlap = !0, t.fancybox.defaults.autoFocus = !1, t.fancybox.defaults.backFocus = !1, t.fancybox.defaults.i18n = {
                    ru: {
                        CLOSE: "Закрыть",
                        NEXT: "След",
                        PREV: "Пред",
                        ERROR: "Упс, не получилось загрузить",
                        PLAY_START: "Слайдшоу",
                        PLAY_STOP: "Остановить слайдшоу",
                        FULL_SCREEN: "Полноэкранный режим",
                        THUMBS: "Галерея",
                        DOWNLOAD: "Скачать",
                        SHARE: "Поделиться",
                        ZOOM: "Приблизить"
                    }
                }, t(".fancybox:not(.disablefancybox, [data-fancybox]), a[href$='jpg']:not(.disablefancybox, [data-fancybox]), a[href$='JPEG']:not(.disablefancybox, [data-fancybox]), a[href$='png']:not(.disablefancybox, [data-fancybox]), a[href$='jpeg']:not(.disablefancybox, [data-fancybox]), a[href$='gif']:not(.disablefancybox, [data-fancybox])").fancybox(), setTimeout(function() {
                    t("[name=validation]").val("")
                }, 1e3), "sizes" in document.createElement("img") || (t("img").each(function() {
                    t(this).attr("src") || t(this).attr("src", t(this).attr("srcset").split(/[0-9]+w/)[0].trim())
                }), t(document).ajaxComplete(function(e, i, n) {
                    t("img").each(function() {
                        t(this).attr("src") || t(this).attr("src", t(this).attr("srcset").split(/[0-9]+w/)[0].trim())
                    })
                }));
                var i = new Date;
                i.setFullYear(i.getFullYear() - 17), t("[data-birthday]").datepicker({
                    format: "dd.mm.yyyy",
                    startDate: new Date(1900),
                    endDate: i,
                    startView: 2,
                    autoclose: !0,
                    language: "ru"
                }), t(".select").each(function() {
                    t(this).find("select").val() ? t(this).removeClass("placeholder") : t(this).addClass("placeholder"), t(this).find("select option").length > 1 ? t(this).find("select").removeAttr("disabled") : t(this).find("select").attr("disabled", !0)
                }), t(".select select").change(function() {
                    t(this).val() ? t(this).parent().removeClass("placeholder") : t(this).parent().addClass("placeholder"), t(this).find("option").length > 1 ? t(this).removeAttr("disabled") : t(this).attr("disabled", !0)
                });
                var n, s = "";

                function o() {
                    t(".to-slider").each(function() {
                        var e = t(this).closest(".to-slider-wrapper");
                        new Foundation.Slider(t(this), {
                            end: e.find("option").length - 1,
                            initialStart: e.find("select").prop("selectedIndex")
                        });
                        e.find("option").length < 2 ? (t(this).addClass("disabled"), t(this).find(".slider-handle").css("left", 0)) : t(this).removeClass("disabled")
                    })
                }

                function a() {
                    t(".image-slider").owlCarousel({
                        items: 2,
                        dots: !1,
                        nav: !0,
                        margin: 12,
                        navText: ['<i class="icon-left"></i>', '<i class="icon-right"></i>'],
                        responsive: {
                            540: {
                                items: 3
                            },
                            700: {
                                items: 4
                            },
                            860: {
                                items: 3
                            },
                            1170: {
                                items: 4
                            }
                        }
                    })
                }
                t(document).keydown(function(e) {
                    if (27 === e.keyCode && (t(".select-list").remove(), t(".select").removeClass("focused")), t(".select-list").length) {
                        " " == e.key && e.preventDefault();
                        var i = t(".select-list a").toArray();
                        s += e.key.toLowerCase(), clearTimeout(n), n = setTimeout(function() {
                            s = ""
                        }, 200);
                        for (var o = 0; o <= i.length; o++)
                            if (t(i[o]).text().trim().toLowerCase().startsWith(s)) {
                                t(i[o]).focus();
                                break
                            }
                    }
                }), t("body").on("mousedown", function(e) {
                    t(e.target).closest(".select").length || (t(".select-list").remove(), t(".select").removeClass("focused"))
                }), t(".select").mousedown(function(e) {
                    if (t("html").not("[data-whatinput=touch]").length && (e.preventDefault(), !t(e.target).is("a")))
                        if (t(".select").not(t(this)).removeClass("focused").find(".select-list").remove(), t(this).is(".focused")) t(".select-list").remove(), t(".select").removeClass("focused");
                        else if (!t(this).find("select").is("[disabled]")) {
                        t(this).addClass("focused"), t(".select-list").remove();
                        var i = t(this).find("select"),
                            n = t("<div></div>", {
                                class: "select-list"
                            });
                        t(i).find("option").each(function() {
                            t(this).val() && n.append(t("<a></a>", {
                                href: "#",
                                "data-value": t(this).val(),
                                text: t(this).html()
                            }))
                        }), t(this).append(n), t(this).find(".select-list").focus()
                    }
                }), t("body").on("click", ".select-list a", function(e) {
                    e.preventDefault(), t(this).closest(".select").find("select").val(t(this).attr("data-value")).change(), t(".select-list").remove(), t(".select").removeClass("focused")
                }), t("[data-update-select]").change(function() {
                    var e = JSON.parse(t(this).attr("data-update-select")),
                        i = t(this).closest("form"),
                        n = i.find("[type=submit]");
                    n.attr("disabled", "disabled"), n.addClass("silent-disabled"), Object.keys(e).forEach(function(s) {
                        var a = i.find("select[name=" + s + "]");
                        e[s].clear.forEach(function(t) {
                            var e = i.find("select[name=" + t + "]");
                            e.attr("disabled", "disabled"), "to" === t && "to" === s || (e.html('<option value=""></option>'), e.closest(".select").addClass("placeholder"))
                        }), t.get(e[s].url, {
                            slug: t(this).val(),
                            type: e[s].type
                        }, function(e) {
                            if (n.removeAttr("disabled"), n.removeClass("silent-disabled"), "to" === s) {
                                var r = i.find("[name=to]").val();
                                a.html("")
                            }
                            e.empty || (a.removeAttr("disabled"), a.append(t.map(e, function(e) {
                                return t("<option/>", {
                                    text: e.text,
                                    val: e.value
                                })
                            }))), "to" === s && (i.find("[name=to]").val(r), a.change()), o()
                        }, "json")
                    }.bind(this))
                }), o(), t("[data-to-select]").change(function() {
                    o()
                }), t("body").on("moved.zf.slider", ".to-slider", function(e) {
                    var i = t(this).closest(".to-slider-wrapper");
                    i.find("select option").length > 1 && i.find("select").prop("selectedIndex", +t(this).find("input").val()).removeAttr("disabled").closest(".select").removeClass("placeholder")
                }), t(".techno-tab-headings a").click(function(e) {
                    e.preventDefault(), t(".techno-tab-headings a").removeClass("active"), t(this).addClass("active"), t(".techno-tab-contents > div").removeClass("active"), t(".techno-tab-contents " + t(this).attr("href")).addClass("active")
                }), t(".promo-slider").owlCarousel({
                    items: 4,
                    dots: !0,
                    nav: !1,
                    loop: !0,
                    autoplay: !0,
                    margin: 30,
                    navText: ['<i class="icon-left-chevron"></i>', '<i class="icon-right-chevron"></i>'],
                    responsive: {
                        0: {
                            items: 1
                        },
                        480: {
                            items: 2
                        },
                        700: {
                            items: 3
                        },
                        980: {
                            items: 4
                        },
                        1024: {
                            items: 1,
                            margin: 15
                        }
                    }
                }), a(), t(".logo-slider").owlCarousel({
                    items: 2,
                    dots: !1,
                    nav: !0,
                    margin: 20,
                    navText: ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>'],
                    responsive: {
                        540: {
                            items: 3,
                            margin: 20
                        },
                        700: {
                            items: 4,
                            margin: 20
                        },
                        1000: {
                            items: 5,
                            margin: 20
                        }
                    }
                }), t(".specialist-slider").owlCarousel({
                    items: 1,
                    dots: !0,
                    nav: !0,
                    margin: 24,
                    navText: ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>'],
                    responsive: {
                        640: {
                            items: 2
                        },
                        1024: {
                            items: 3
                        }
                    }
                }), t(".catalog-slider").owlCarousel({
                    items: 2,
                    dots: !0,
                    nav: !0,
                    margin: 24,
                    navText: ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>'],
                    responsive: {
                        640: {
                            items: 3
                        }
                    }
                }), t(".howto-slider").owlCarousel({
                    items: 1,
                    dots: !0,
                    nav: !0,
                    margin: 24,
                    autoHeight: !0,
                    navText: ['<i class="icon-arrow-left"></i>', '<i class="icon-arrow-right"></i>']
                }), t("body").on("change", "[data-toggle-all]", function() {
                    t(this).is(":checked") ? t(this).closest(".block").find(".row").each(function() {
                        if (!t(this).find(".check input[type=checkbox]:enabled:checked").length) {
                            var e = t(this).find(".row-inner .check input[type=checkbox]:enabled");
                            e.length ? e.prop("checked", !0) : (t(this).find(".analog-row").find("input[type=checkbox]:enabled").first().prop("checked", !0), t(this).find(".analog-row").find("input[type=checkbox]:enabled:checked").length && t(this).addClass("analogs-visible"))
                        }
                    }) : (t(this).closest(".block").find(".row").removeClass("analogs-visible"), t(this).closest(".block").find(".inner input[type=checkbox]:enabled").prop("checked", !1))
                }), t("body").on("click", ".block-heading", function(e) {
                    t(e.target).closest("label, input").length || (t(this).closest(".block").toggleClass("toggled"), e.stopPropagation())
                }), t(".specification-calculator").length && function() {
                    var e;

                    function i() {
                        var e = 0,
                            i = 0,
                            n = 0,
                            s = .5,
                            o = 0;
                        t(".specification-calculator .block").each(function() {
                            var o = 0;
                            t(this).find("input[type=checkbox]:enabled:checked, input[type=hidden]").each(function() {
                                +t(this).attr("data-sum") > 0 && (o += parseFloat(t(this).attr("data-sum")))
                            }), t(this).find(".work").find("input[type=checkbox]:enabled:checked, input[type=hidden]").each(function() {
                                +t(this).attr("data-sum") > 0 && (e += parseFloat(t(this).attr("data-sum"))), +t(this).attr("data-norm") > 0 && (s += parseFloat(t(this).attr("data-norm")))
                            }), t(this).find(".good").find("input[type=checkbox]:enabled:checked, input[type=hidden]").each(function() {
                                +t(this).attr("data-sum") > 0 && (i += parseFloat(t(this).attr("data-sum")))
                            }), t(this).find(".block-heading .sum-new").html(o.technoFormatMoney() + " ₽"), n += o
                        }), t("[data-is-new-client]").is(":checked") ? (o = e / 100 * t("[data-first-time-discount]").attr("data-first-time-discount"), t(".calculator-total .first-time-discount").removeClass("hide"), n -= o) : t(".calculator-total .first-time-discount").addClass("hide"), t(".calculator-total [data-first-time-discount]").html("-" + o.technoFormatMoney() + " ₽"), t(".calculator-total [data-works-sum]").html(e.technoFormatMoney() + " ₽"), t(".calculator-total [data-goods-sum]").html(i.technoFormatMoney() + " ₽"), t(".calculator-total [data-norm-sum]").html(+Math.round(100 * s) / 100 + " ч"), t(".calculator-total [data-total-sum]").html(n.technoFormatMoney() + " ₽"), t(".calculator-total [data-bonus-sum]").html("+" + (n / t("[data-bonus-cost]").attr("data-bonus-cost")).technoFormatMoney() + '<i class="icon-t"></i>'), 0 == t(".specification-calculator .row input:enabled:checked").length ? t(".calculator-total .button").prop("disabled", !0) : t(".calculator-total .button").prop("disabled", !1), t("[data-works-use-cart]").length && n > 0 ? t("[data-reset-cart]").addClass("visible") : t("[data-reset-cart]").removeClass("visible")
                    }
                    t(".calculator-total input[type=checkbox]").change(function(e) {
                        e.preventDefault(), t(this).prop("checked", !0)
                    }), t("body").on("change", ".specification-calculator input[type=checkbox], .calculator-total input[type=checkbox]", function() {
                        var n = t(this);
                        t(this).closest(".block").find(".row").each(function() {
                            t(this).find("input[type=checkbox]:enabled:checked").length > 1 && t(this).find("input[type=checkbox]:enabled:checked").not(n).prop("checked", !1);
                            var e = t(this).find(".row-inner .check input[type=checkbox]:enabled:checked").length,
                                i = !1;
                            e || (i = t(this).find(".analog-row").find("input[type=checkbox]:enabled:checked").length, !t(this).find(".check input[type=checkbox]:enabled").length || i || e || !1)
                        }), t(this).closest(".block").find(".block-heading input[type=checkbox]:enabled").prop("checked", t(this).closest(".block").find(".row input:enabled:checked").length), clearTimeout(e), e = setTimeout(function() {
                            t("[data-works-use-cart]").length && t.post("/cart?type=" + t("[data-works-use-cart]").attr("data-works-use-cart"), t(this).closest("form").find("input").serialize())
                        }.bind(this), 60), i()
                    }), t(".specification-calculator .block").each(function() {
                        t(this).find(".row input[type=checkbox]:enabled").last().change()
                    }), t("[data-reset-cart]").click(function(e) {
                        e.preventDefault(), t.post("/cart/reset?type=" + t("[data-works-use-cart]").attr("data-works-use-cart")).then(function() {
                            location.reload()
                        })
                    }), t(".specification-calculator .compulsory [data-toggle-all]").prop("checked", !0).change(), t("[data-pick-originals]").click(function(e) {
                        e.preventDefault(), t(".specification-calculator .block").each(function() {
                            t(this).find(".row.work input:enabled").prop("checked", !0), t(this).find(".row.good").each(function() {
                                var e = t(this).find(".row-inner .check input[type=checkbox]:enabled");
                                if (t(this).find(".analog-row").find("input[type=checkbox]:enabled").prop("checked", !1), e.prop("checked", !0), e.length) t(this).removeClass("analogs-visible");
                                else {
                                    t(this).addClass("analogs-visible");
                                    var i = t(this).find(".check input[type=checkbox]:enabled"),
                                        n = -9999999,
                                        s = null;
                                    i.prop("checked", !1), i.each(function() {
                                        +t(this).attr("data-sum") > n && (n = +t(this).attr("data-sum"), s = t(this))
                                    }), s && (s.prop("checked", !0), t(s).closest(".analogs-inner").length ? t(this).addClass("analogs-visible") : t(this).removeClass("analogs-visible"))
                                }
                            }), t(this).find(".row input:enabled").last().change()
                        }), i()
                    }), t("[data-pick-cheap]").click(function(e) {
                        e.preventDefault(), t(".specification-calculator .block").each(function() {
                            t(this).find(".row.work input:enabled").prop("checked", !0), t(this).find(".row.good").each(function() {
                                var e = t(this).find(".check input[type=checkbox]:enabled"),
                                    i = 9999999,
                                    n = null;
                                e.prop("checked", !1), e.each(function() {
                                    +t(this).attr("data-sum") < i && (i = +t(this).attr("data-sum"), n = t(this))
                                }), n && (n.prop("checked", !0), t(n).closest(".analogs-inner").length ? t(this).addClass("analogs-visible") : t(this).removeClass("analogs-visible"))
                            }), t(this).find(".row input:enabled").last().change()
                        }), i()
                    }), i()
                }(), t("body").on("click", ".calculator-table .toggle-analogs, .calculator-table .toggle-analogs-mobile a", function(e) {
                    e.preventDefault(), t(this).closest(".row").toggleClass("analogs-visible")
                }), t("[data-put-in-cart]").click(function(e) {
                    e.preventDefault(), t(this).hide(), t(this).parent().find(".num-input").find("input").val(1).change()
                }), t("body").on("change", ".num-input input", function() {
                    +t(this).val() > +t(this).attr("data-max") && t(this).val(+t(this).attr("data-max")), +t(this).val() < 0 && t(this).val(0), +t(this).val() == +t(this).attr("data-max") ? t(this).parent().find("[data-plus]").prop("disabled", !0) : t(this).parent().find("[data-plus]").prop("disabled", !1), 0 == +t(this).val() ? (t(this).closest(".num-input").hide(), t(this).parent().parent().find(".put-in-cart").show()) : (t(this).closest(".num-input").show(), t(this).parent().parent().find(".put-in-cart").hide())
                }), t("body").on("click", ".num-input [data-minus]", function(e) {
                    e.preventDefault();
                    var i = t(this).parent().find("input");
                    i.val(i.val() - 1).change()
                }), t("body").on("click", ".num-input [data-plus]", function() {
                    event.preventDefault();
                    var e = t(this).parent().find("input");
                    e.val(+e.val() + 1).change()
                }), t(".parts-calculator").length && (t(".parts-calculator .num-input input").keyup(function() {
                    t(this).val(t(this).val().replace(/[^0-9]/g, ""))
                }), t(".parts-calculator .num-input input").change(function() {
                    "" === t(this).val().trim() && t(this).val(1), t.post("/parts/set-items", {
                        id: t(this).prop("name"),
                        count: t(this).val()
                    }, function(e) {
                        1 == e.ok ? (t(".calculator-total [data-parts-count]").html(e.count + " шт"), t(".calculator-total [data-bonus-sum]").html(e.bonuses), t(".calculator-total [data-total-sum]").html(e.sum), 0 == e.count ? t(".calculator-total .submit-outer a").attr("disabled", !0) : t(".calculator-total .submit-outer a").attr("disabled", !1), t(".parts-calculator .part").length || setTimeout(function() {
                            location.reload()
                        })) : alert("Не удалось положить товар в корзину. Обновите страницу и попробуйте ещё раз.")
                    })
                }), t(".parts-cart .num-input input").change(function() {
                    0 == t(this).val() && t(this).closest(".part").remove()
                })), t(".calculator-total a").click(function(e) {
                    t(this).is("[disabled]") && e.preventDefault()
                }), t(".faq .question a").click(function(e) {
                    e.preventDefault(), t(this).closest(".faq-item").toggleClass("toggled")
                }), t("[data-ajax-load-more]").click(function(e) {
                    e.preventDefault(), t(this).append('<i class="spinner"> </i>'), t(this).attr("disabled", !0), t.get(t(this).attr("href"), {
                        ajax: !0
                    }, function(e) {
                        history.pushState && history.pushState({}, "", t(this).attr("href")), t("[data-ajax-load-list]").append(t(e).find("[data-ajax-load-list]").html());
                        var i = t(e).find("[data-ajax-load-more]");
                        t(this).removeAttr("disabled"), i.length ? (t(this).find(".spinner").remove(), t(this).attr("href", i.attr("href"))) : t(this).remove(), a()
                    }.bind(this), "html")
                }), t("body").on("click", ".read-more-outer .show-more", function(e) {
                    e.preventDefault();
                    var i = t(this).closest(".read-more-outer");
                    i.toggleClass("toggled"), i.is(".toggled") ? t(this).find("span").text("Свернуть") : t(this).find("span").text("Читать далее")
                }), t("#order-table-outer .block .inner").each(function() {
                    if (t(this).find(".sub-heading").length) {
                        var e = t();
                        t(this).find("> div").each(function() {
                            t(this).is(".sub-heading") ? (e.length && t(e).wrapAll('<div class="block-section"></div>'), e = t()) : e = e.add(t(this))
                        }), e.length && t(e).wrapAll('<div class="block-section"></div>')
                    }
                }), t(".calculator-total").length && function() {
                    function e() {
                        t(".calculator-total").css("width", t(".calculator-total").parent().width()), t(window).scrollTop() > t(".calculator-table").offset().top - 10 ? t(".calculator-total").addClass("stick-to-top") : t(".calculator-total").removeClass("stick-to-top"), t(window).scrollTop() + t(".calculator-total").height() + 57 - (t(".order-page").length ? 20 : 0) > t(".calculator-table").offset().top + t(".calculator-table").height() ? t(".calculator-total").addClass("stick-to-bottom") : t(".calculator-total").removeClass("stick-to-bottom"), t(".calculator-total").height() > t(".calculator-table").height() ? t(".calculator-total").addClass("static") : t(".calculator-total").removeClass("static")
                    }
                    e(), t(window).on("scroll resize", e)
                }(), t("#pay-with-bonuses").change(function() {
                    var e = +t(".calculator-total [data-total-sum]").attr("data-total-sum"),
                        i = t(this).val();
                    t("[data-bonuses-on], [data-bonuses-off]").hide(), t(this).is(":checked") ? (e -= i, t("[data-pay-with-bonuses-total]").show(), t("[data-bonuses-on]").show()) : (t("[data-pay-with-bonuses-total]").hide(), t("[data-bonuses-off]").show()), t(".calculator-total [data-total-sum]").html(e.technoFormatMoney() + " ₽")
                }), t(".cabinet-auto .actions").hoverIntent({
                    over: function() {
                        t(this).find(".sub-menu-outer").addClass("visible")
                    },
                    out: function() {
                        t(this).find(".sub-menu-outer").removeClass("visible")
                    },
                    timeout: 100
                }), t("[data-print]").click(function(t) {
                    t.preventDefault(), window.print()
                }), t(".brand-picker a").click(function(e) {
                    e.preventDefault(), t(this).parent().parent().find("[name=brand]").val(t(this).attr("data-slug")).change()
                }), t("[name=brand]").change(function() {
                    console.log(t(this).val()), t(this).parent().parent().parent().find(".brand-picker a").removeAttr("data-selected"), t(this).parent().parent().parent().find('[data-slug="' + t(this).val() + '"]').attr("data-selected", !0)
                }), setTimeout(function() {
                    t(".slider").removeClass("invisible")
                })
            }), String.prototype.padStart || (String.prototype.padStart = function(t, e) {
                return t >>= 0, e = String(void 0 !== e ? e : " "), this.length >= t ? String(this) : ((t -= this.length) > e.length && (e += e.repeat(t / e.length)), e.slice(0, t) + String(this))
            }), window.createFooterMap = function() {
                t("[data-map]").each(function() {
                    var e = t(this).attr("data-map").split(","),
                        i = new YMaps.Map(t(this)[0], {
                            center: [+e[0] + 5e-4, e[1]],
                            zoom: 15,
                            controls: []
                        }, {
                            maxZoom: 17,
                            searchControlProvider: "yandex#search",
                            zoomControlSize: "small",
                            suppressMapOpenBlock: !0
                        });
                    i.behaviors.disable(["scrollZoom"]);
                    i.geoObjects.add(new YMaps.Placemark([e[0], e[1]], {}, {
                        iconLayout: "default#image",
                        iconImageHref: "/assets/img/misc/placemark.svg",
                        iconImageSize: [100, 112],
                        iconImageOffset: [-50, -112]
                    }))
                })
            }, Number.prototype.technoFormatMoney = function(t, e, i) {
                var n = this,
                    s = (t = isNaN(t = Math.abs(t)) ? 0 : t, e = null == e ? "." : e, i = null == i ? " " : i, n < 0 ? "-" : ""),
                    o = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(t))),
                    a = (a = o.length) > 3 ? a % 3 : 0;
                return s + (a ? o.substr(0, a) + i : "") + o.substr(a).replace(/(\d{3})(?=\d)/g, "$1" + i) + (t ? e + Math.abs(n - o).toFixed(t).slice(2) : "")
            }, String.prototype.startsWith || (String.prototype.startsWith = function(t, e) {
                return this.substr(!e || e < 0 ? 0 : +e, t.length) === t
            }), void 0 === Number.parseInt && (Number.parseInt = window.parseInt), String.prototype.trim || (String.prototype.trim = function() {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            })
        }.call(this, i(0))
}, function(t, e, i) {
    "use strict";
    i.r(e),
        function(t) {
            i(5);
            window.$ = i(0), i(6), i(7), i(8), i(9), i(10), i(11), i(12)
        }.call(this, i(0))
}, function(t, e, i) {
    "use strict";
    var n = i(0),
        s = i.n(n);

    function o(t) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function a(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function r(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }

    function l(t, e, i) {
        return e && r(t.prototype, e), i && r(t, i), t
    }

    function c(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && u(t, e)
    }

    function h(t) {
        return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function d(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function p(t, e, i) {
        return (p = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, i) {
            var n = function(t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t)););
                return t
            }(t, e);
            if (n) {
                var s = Object.getOwnPropertyDescriptor(n, e);
                return s.get ? s.get.call(i) : s.value
            }
        })(t, e, i || t)
    }

    function f() {
        return "rtl" === s()("html").attr("dir")
    }

    function g(t, e) {
        return t = t || 6, Math.round(Math.pow(36, t + 1) - Math.random() * Math.pow(36, t)).toString(36).slice(1) + (e ? "-".concat(e) : "")
    }

    function m(t) {
        return t.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
    }

    function v(t) {
        var e, i = {
                transition: "transitionend",
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend"
            },
            n = document.createElement("div");
        for (var s in i) void 0 !== n.style[s] && (e = i[s]);
        return e || (e = setTimeout(function() {
            t.triggerHandler("transitionend", [t])
        }, 1), "transitionend")
    }

    function y(t, e) {
        var i = "complete" === document.readyState,
            n = (i ? "_didLoad" : "load") + ".zf.util.onLoad",
            o = function() {
                return t.triggerHandler(n)
            };
        return t && (e && t.one(n, e), i ? setTimeout(o) : s()(window).one("load", o)), n
    }

    function b(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = e.ignoreLeaveWindow,
            n = void 0 !== i && i,
            o = e.ignoreReappear,
            a = void 0 !== o && o;
        return function(e) {
            for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) o[r - 1] = arguments[r];
            var l = t.bind.apply(t, [this, e].concat(o));
            if (null !== e.relatedTarget) return l();
            setTimeout(function() {
                if (!n && document.hasFocus && !document.hasFocus()) return l();
                a || s()(document).one("mouseenter", function(t) {
                    s()(e.currentTarget).has(t.target).length || (e.relatedTarget = t.target, l())
                })
            }, 0)
        }
    }
    window.matchMedia || (window.matchMedia = function() {
        var t = window.styleMedia || window.media;
        if (!t) {
            var e, i = document.createElement("style"),
                n = document.getElementsByTagName("script")[0];
            i.type = "text/css", i.id = "matchmediajs-test", n ? n.parentNode.insertBefore(i, n) : document.head.appendChild(i), e = "getComputedStyle" in window && window.getComputedStyle(i, null) || i.currentStyle, t = {
                matchMedium: function(t) {
                    var n = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                    return i.styleSheet ? i.styleSheet.cssText = n : i.textContent = n, "1px" === e.width
                }
            }
        }
        return function(e) {
            return {
                matches: t.matchMedium(e || "all"),
                media: e || "all"
            }
        }
    }());
    var w = {
        queries: [],
        current: "",
        _init: function() {
            s()("meta.foundation-mq").length || s()('<meta class="foundation-mq">').appendTo(document.head);
            var t, e = s()(".foundation-mq").css("font-family");
            for (var i in t = function(t) {
                    var e = {};
                    if ("string" != typeof t) return e;
                    if (!(t = t.trim().slice(1, -1))) return e;
                    return e = t.split("&").reduce(function(t, e) {
                        var i = e.replace(/\+/g, " ").split("="),
                            n = i[0],
                            s = i[1];
                        return n = decodeURIComponent(n), s = void 0 === s ? null : decodeURIComponent(s), t.hasOwnProperty(n) ? Array.isArray(t[n]) ? t[n].push(s) : t[n] = [t[n], s] : t[n] = s, t
                    }, {})
                }(e)) t.hasOwnProperty(i) && this.queries.push({
                name: i,
                value: "only screen and (min-width: ".concat(t[i], ")")
            });
            this.current = this._getCurrentSize(), this._watcher()
        },
        atLeast: function(t) {
            var e = this.get(t);
            return !!e && window.matchMedia(e).matches
        },
        is: function(t) {
            return (t = t.trim().split(" ")).length > 1 && "only" === t[1] ? t[0] === this._getCurrentSize() : this.atLeast(t[0])
        },
        get: function(t) {
            for (var e in this.queries)
                if (this.queries.hasOwnProperty(e)) {
                    var i = this.queries[e];
                    if (t === i.name) return i.value
                } return null
        },
        _getCurrentSize: function() {
            for (var t, e = 0; e < this.queries.length; e++) {
                var i = this.queries[e];
                window.matchMedia(i.value).matches && (t = i)
            }
            return "object" === o(t) ? t.name : t
        },
        _watcher: function() {
            var t = this;
            s()(window).off("resize.zf.mediaquery").on("resize.zf.mediaquery", function() {
                var e = t._getCurrentSize(),
                    i = t.current;
                e !== i && (t.current = e, s()(window).trigger("changed.zf.mediaquery", [e, i]))
            })
        }
    };
    var x = {
        version: "6.5.3",
        _plugins: {},
        _uuids: [],
        plugin: function(t, e) {
            var i = e || _(t),
                n = k(i);
            this._plugins[n] = this[i] = t
        },
        registerPlugin: function(t, e) {
            var i = e ? k(e) : _(t.constructor).toLowerCase();
            t.uuid = g(6, i), t.$element.attr("data-".concat(i)) || t.$element.attr("data-".concat(i), t.uuid), t.$element.data("zfPlugin") || t.$element.data("zfPlugin", t), t.$element.trigger("init.zf.".concat(i)), this._uuids.push(t.uuid)
        },
        unregisterPlugin: function(t) {
            var e = k(_(t.$element.data("zfPlugin").constructor));
            for (var i in this._uuids.splice(this._uuids.indexOf(t.uuid), 1), t.$element.removeAttr("data-".concat(e)).removeData("zfPlugin").trigger("destroyed.zf.".concat(e)), t) t[i] = null
        },
        reInit: function(t) {
            var e = t instanceof s.a;
            try {
                if (e) t.each(function() {
                    s()(this).data("zfPlugin")._init()
                });
                else {
                    var i = o(t),
                        n = this;
                    ({
                        object: function(t) {
                            t.forEach(function(t) {
                                t = k(t), s()("[data-" + t + "]").foundation("_init")
                            })
                        },
                        string: function() {
                            t = k(t), s()("[data-" + t + "]").foundation("_init")
                        },
                        undefined: function() {
                            this.object(Object.keys(n._plugins))
                        }
                    })[i](t)
                }
            } catch (t) {
                console.error(t)
            } finally {
                return t
            }
        },
        reflow: function(t, e) {
            void 0 === e ? e = Object.keys(this._plugins) : "string" == typeof e && (e = [e]);
            var i = this;
            s.a.each(e, function(e, n) {
                var o = i._plugins[n];
                s()(t).find("[data-" + n + "]").addBack("[data-" + n + "]").each(function() {
                    var t = s()(this),
                        e = {};
                    if (t.data("zfPlugin")) console.warn("Tried to initialize " + n + " on an element that already has a Foundation plugin.");
                    else {
                        if (t.attr("data-options")) t.attr("data-options").split(";").forEach(function(t, i) {
                            var n = t.split(":").map(function(t) {
                                return t.trim()
                            });
                            n[0] && (e[n[0]] = function(t) {
                                if ("true" === t) return !0;
                                if ("false" === t) return !1;
                                if (!isNaN(1 * t)) return parseFloat(t);
                                return t
                            }(n[1]))
                        });
                        try {
                            t.data("zfPlugin", new o(s()(this), e))
                        } catch (t) {
                            console.error(t)
                        } finally {
                            return
                        }
                    }
                })
            })
        },
        getFnName: _,
        addToJquery: function(t) {
            return t.fn.foundation = function(e) {
                var i = o(e),
                    n = t(".no-js");
                if (n.length && n.removeClass("no-js"), "undefined" === i) w._init(), x.reflow(this);
                else {
                    if ("string" !== i) throw new TypeError("We're sorry, ".concat(i, " is not a valid parameter. You must use a string representing the method you wish to invoke."));
                    var s = Array.prototype.slice.call(arguments, 1),
                        a = this.data("zfPlugin");
                    if (void 0 === a || void 0 === a[e]) throw new ReferenceError("We're sorry, '" + e + "' is not an available method for " + (a ? _(a) : "this element") + ".");
                    1 === this.length ? a[e].apply(a, s) : this.each(function(i, n) {
                        a[e].apply(t(n).data("zfPlugin"), s)
                    })
                }
                return this
            }, t
        }
    };

    function _(t) {
        if (void 0 === Function.prototype.name) {
            var e = /function\s([^(]{1,})\(/.exec(t.toString());
            return e && e.length > 1 ? e[1].trim() : ""
        }
        return void 0 === t.prototype ? t.constructor.name : t.prototype.constructor.name
    }

    function k(t) {
        return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }
    x.util = {
            throttle: function(t, e) {
                var i = null;
                return function() {
                    var n = this,
                        s = arguments;
                    null === i && (i = setTimeout(function() {
                        t.apply(n, s), i = null
                    }, e))
                }
            }
        }, window.Foundation = x,
        function() {
            Date.now && window.Date.now || (window.Date.now = Date.now = function() {
                return (new Date).getTime()
            });
            for (var t = ["webkit", "moz"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) {
                var i = t[e];
                window.requestAnimationFrame = window[i + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i + "CancelAnimationFrame"] || window[i + "CancelRequestAnimationFrame"]
            }
            if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
                var n = 0;
                window.requestAnimationFrame = function(t) {
                    var e = Date.now(),
                        i = Math.max(n + 16, e);
                    return setTimeout(function() {
                        t(n = i)
                    }, i - e)
                }, window.cancelAnimationFrame = clearTimeout
            }
            window.performance && window.performance.now || (window.performance = {
                start: Date.now(),
                now: function() {
                    return Date.now() - this.start
                }
            })
        }(), Function.prototype.bind || (Function.prototype.bind = function(t) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
            var e = Array.prototype.slice.call(arguments, 1),
                i = this,
                n = function() {},
                s = function() {
                    return i.apply(this instanceof n ? this : t, e.concat(Array.prototype.slice.call(arguments)))
                };
            return this.prototype && (n.prototype = this.prototype), s.prototype = new n, s
        });
    var C = {
        ImNotTouchingYou: function(t, e, i, n, s) {
            return 0 === $(t, e, i, n, s)
        },
        OverlapArea: $,
        GetDimensions: T,
        GetOffsets: function(t, e, i, n, s, o) {
            switch (console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5"), i) {
                case "top":
                    return f() ? D(t, e, "top", "left", n, s, o) : D(t, e, "top", "right", n, s, o);
                case "bottom":
                    return f() ? D(t, e, "bottom", "left", n, s, o) : D(t, e, "bottom", "right", n, s, o);
                case "center top":
                    return D(t, e, "top", "center", n, s, o);
                case "center bottom":
                    return D(t, e, "bottom", "center", n, s, o);
                case "center left":
                    return D(t, e, "left", "center", n, s, o);
                case "center right":
                    return D(t, e, "right", "center", n, s, o);
                case "left bottom":
                    return D(t, e, "bottom", "left", n, s, o);
                case "right bottom":
                    return D(t, e, "bottom", "right", n, s, o);
                case "center":
                    return {
                        left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2 + s, top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - ($eleDims.height / 2 + n)
                    };
                case "reveal":
                    return {
                        left: ($eleDims.windowDims.width - $eleDims.width) / 2 + s, top: $eleDims.windowDims.offset.top + n
                    };
                case "reveal full":
                    return {
                        left: $eleDims.windowDims.offset.left, top: $eleDims.windowDims.offset.top
                    };
                default:
                    return {
                        left: f() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width - s : $anchorDims.offset.left + s, top: $anchorDims.offset.top + $anchorDims.height + n
                    }
            }
        },
        GetExplicitOffsets: D
    };

    function $(t, e, i, n, s) {
        var o, a, r, l, c = T(t);
        if (e) {
            var h = T(e);
            a = h.height + h.offset.top - (c.offset.top + c.height), o = c.offset.top - h.offset.top, r = c.offset.left - h.offset.left, l = h.width + h.offset.left - (c.offset.left + c.width)
        } else a = c.windowDims.height + c.windowDims.offset.top - (c.offset.top + c.height), o = c.offset.top - c.windowDims.offset.top, r = c.offset.left - c.windowDims.offset.left, l = c.windowDims.width - (c.offset.left + c.width);
        return a = s ? 0 : Math.min(a, 0), o = Math.min(o, 0), r = Math.min(r, 0), l = Math.min(l, 0), i ? r + l : n ? o + a : Math.sqrt(o * o + a * a + r * r + l * l)
    }

    function T(t) {
        if ((t = t.length ? t[0] : t) === window || t === document) throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
        var e = t.getBoundingClientRect(),
            i = t.parentNode.getBoundingClientRect(),
            n = document.body.getBoundingClientRect(),
            s = window.pageYOffset,
            o = window.pageXOffset;
        return {
            width: e.width,
            height: e.height,
            offset: {
                top: e.top + s,
                left: e.left + o
            },
            parentDims: {
                width: i.width,
                height: i.height,
                offset: {
                    top: i.top + s,
                    left: i.left + o
                }
            },
            windowDims: {
                width: n.width,
                height: n.height,
                offset: {
                    top: s,
                    left: o
                }
            }
        }
    }

    function D(t, e, i, n, s, o, a) {
        var r, l, c = T(t),
            h = e ? T(e) : null;
        switch (i) {
            case "top":
                r = h.offset.top - (c.height + s);
                break;
            case "bottom":
                r = h.offset.top + h.height + s;
                break;
            case "left":
                l = h.offset.left - (c.width + o);
                break;
            case "right":
                l = h.offset.left + h.width + o
        }
        switch (i) {
            case "top":
            case "bottom":
                switch (n) {
                    case "left":
                        l = h.offset.left + o;
                        break;
                    case "right":
                        l = h.offset.left - c.width + h.width - o;
                        break;
                    case "center":
                        l = a ? o : h.offset.left + h.width / 2 - c.width / 2 + o
                }
                break;
            case "right":
            case "left":
                switch (n) {
                    case "bottom":
                        r = h.offset.top - s + h.height - c.height;
                        break;
                    case "top":
                        r = h.offset.top + s;
                        break;
                    case "center":
                        r = h.offset.top + s + h.height / 2 - c.height / 2
                }
        }
        return {
            top: r,
            left: l
        }
    }

    function S(t, e) {
        var i = t.length;

        function n() {
            0 === --i && e()
        }
        0 === i && e(), t.each(function() {
            if (this.complete && void 0 !== this.naturalWidth) n();
            else {
                var t = new Image,
                    e = "load.zf.images error.zf.images";
                s()(t).one(e, function t(i) {
                    s()(this).off(e, t), n()
                }), t.src = s()(this).attr("src")
            }
        })
    }
    var E = {
            9: "TAB",
            13: "ENTER",
            27: "ESCAPE",
            32: "SPACE",
            35: "END",
            36: "HOME",
            37: "ARROW_LEFT",
            38: "ARROW_UP",
            39: "ARROW_RIGHT",
            40: "ARROW_DOWN"
        },
        z = {};

    function A(t) {
        return !!t && t.find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
            return !(!s()(this).is(":visible") || s()(this).attr("tabindex") < 0)
        })
    }

    function M(t) {
        var e = E[t.which || t.keyCode] || String.fromCharCode(t.which).toUpperCase();
        return e = e.replace(/\W+/, ""), t.shiftKey && (e = "SHIFT_".concat(e)), t.ctrlKey && (e = "CTRL_".concat(e)), t.altKey && (e = "ALT_".concat(e)), e = e.replace(/_$/, "")
    }
    var O = {
        keys: function(t) {
            var e = {};
            for (var i in t) e[t[i]] = t[i];
            return e
        }(E),
        parseKey: M,
        handleKey: function(t, e, i) {
            var n, o = z[e],
                a = this.parseKey(t);
            if (!o) return console.warn("Component not defined!");
            if ((n = i[(void 0 === o.ltr ? o : f() ? s.a.extend({}, o.ltr, o.rtl) : s.a.extend({}, o.rtl, o.ltr))[a]]) && "function" == typeof n) {
                var r = n.apply();
                (i.handled || "function" == typeof i.handled) && i.handled(r)
            } else(i.unhandled || "function" == typeof i.unhandled) && i.unhandled()
        },
        findFocusable: A,
        register: function(t, e) {
            z[t] = e
        },
        trapFocus: function(t) {
            var e = A(t),
                i = e.eq(0),
                n = e.eq(-1);
            t.on("keydown.zf.trapfocus", function(t) {
                t.target === n[0] && "TAB" === M(t) ? (t.preventDefault(), i.focus()) : t.target === i[0] && "SHIFT_TAB" === M(t) && (t.preventDefault(), n.focus())
            })
        },
        releaseFocus: function(t) {
            t.off("keydown.zf.trapfocus")
        }
    };
    var P = ["mui-enter", "mui-leave"],
        L = ["mui-enter-active", "mui-leave-active"],
        I = {
            animateIn: function(t, e, i) {
                H(!0, t, e, i)
            },
            animateOut: function(t, e, i) {
                H(!1, t, e, i)
            }
        };

    function R(t, e, i) {
        var n, s, o = null;
        if (0 === t) return i.apply(e), void e.trigger("finished.zf.animate", [e]).triggerHandler("finished.zf.animate", [e]);
        n = window.requestAnimationFrame(function a(r) {
            o || (o = r), s = r - o, i.apply(e), s < t ? n = window.requestAnimationFrame(a, e) : (window.cancelAnimationFrame(n), e.trigger("finished.zf.animate", [e]).triggerHandler("finished.zf.animate", [e]))
        })
    }

    function H(t, e, i, n) {
        if ((e = s()(e).eq(0)).length) {
            var o = t ? P[0] : P[1],
                a = t ? L[0] : L[1];
            r(), e.addClass(i).css("transition", "none"), requestAnimationFrame(function() {
                e.addClass(o), t && e.show()
            }), requestAnimationFrame(function() {
                e[0].offsetWidth, e.css("transition", "").addClass(a)
            }), e.one(v(e), function() {
                t || e.hide();
                r(), n && n.apply(e)
            })
        }

        function r() {
            e[0].style.transitionDuration = 0, e.removeClass("".concat(o, " ").concat(a, " ").concat(i))
        }
    }
    var F = {
        Feather: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "zf";
            t.attr("role", "menubar");
            var i = t.find("li").attr({
                    role: "menuitem"
                }),
                n = "is-".concat(e, "-submenu"),
                o = "".concat(n, "-item"),
                a = "is-".concat(e, "-submenu-parent"),
                r = "accordion" !== e;
            i.each(function() {
                var t = s()(this),
                    i = t.children("ul");
                i.length && (t.addClass(a), r && (t.attr({
                    "aria-haspopup": !0,
                    "aria-label": t.children("a:first").text()
                }), "drilldown" === e && t.attr({
                    "aria-expanded": !1
                })), i.addClass("submenu ".concat(n)).attr({
                    "data-submenu": "",
                    role: "menubar"
                }), "drilldown" === e && i.attr({
                    "aria-hidden": !0
                })), t.parent("[data-submenu]").length && t.addClass("is-submenu-item ".concat(o))
            })
        },
        Burn: function(t, e) {
            var i = "is-".concat(e, "-submenu"),
                n = "".concat(i, "-item"),
                s = "is-".concat(e, "-submenu-parent");
            t.find(">li, > li > ul, .menu, .menu > li, [data-submenu] > li").removeClass("".concat(i, " ").concat(n, " ").concat(s, " is-submenu-item submenu is-active")).removeAttr("data-submenu").css("display", "")
        }
    };

    function N(t, e, i) {
        var n, s, o = this,
            a = e.duration,
            r = Object.keys(t.data())[0] || "timer",
            l = -1;
        this.isPaused = !1, this.restart = function() {
            l = -1, clearTimeout(s), this.start()
        }, this.start = function() {
            this.isPaused = !1, clearTimeout(s), l = l <= 0 ? a : l, t.data("paused", !1), n = Date.now(), s = setTimeout(function() {
                e.infinite && o.restart(), i && "function" == typeof i && i()
            }, l), t.trigger("timerstart.zf.".concat(r))
        }, this.pause = function() {
            this.isPaused = !0, clearTimeout(s), t.data("paused", !0);
            var e = Date.now();
            l -= e - n, t.trigger("timerpaused.zf.".concat(r))
        }
    }
    var q, j, B, W, Y = {},
        U = !1,
        V = !1;

    function X(t) {
        if (this.removeEventListener("touchmove", G), this.removeEventListener("touchend", X), !V) {
            var e = s.a.Event("tap", W || t);
            s()(this).trigger(e)
        }
        W = null, U = !1, V = !1
    }

    function G(t) {
        if (s.a.spotSwipe.preventDefault && t.preventDefault(), U) {
            var e, i = t.touches[0].pageX,
                n = (t.touches[0].pageY, q - i);
            V = !0, B = (new Date).getTime() - j, Math.abs(n) >= s.a.spotSwipe.moveThreshold && B <= s.a.spotSwipe.timeThreshold && (e = n > 0 ? "left" : "right"), e && (t.preventDefault(), X.apply(this, arguments), s()(this).trigger(s.a.Event("swipe", t), e).trigger(s.a.Event("swipe".concat(e), t)))
        }
    }

    function Z(t) {
        1 == t.touches.length && (q = t.touches[0].pageX, t.touches[0].pageY, W = t, U = !0, V = !1, j = (new Date).getTime(), this.addEventListener("touchmove", G, !1), this.addEventListener("touchend", X, !1))
    }

    function K() {
        this.addEventListener && this.addEventListener("touchstart", Z, !1)
    }
    var Q = function() {
        function t(e) {
            a(this, t), this.version = "1.0.0", this.enabled = "ontouchstart" in document.documentElement, this.preventDefault = !1, this.moveThreshold = 75, this.timeThreshold = 200, this.$ = e, this._init()
        }
        return l(t, [{
            key: "_init",
            value: function() {
                var t = this.$;
                t.event.special.swipe = {
                    setup: K
                }, t.event.special.tap = {
                    setup: K
                }, t.each(["left", "up", "down", "right"], function() {
                    t.event.special["swipe".concat(this)] = {
                        setup: function() {
                            t(this).on("swipe", t.noop)
                        }
                    }
                })
            }
        }]), t
    }();
    Y.setupSpotSwipe = function(t) {
        t.spotSwipe = new Q(t)
    }, Y.setupTouchHandler = function(t) {
        t.fn.addTouch = function() {
            this.each(function(i, n) {
                t(n).bind("touchstart touchmove touchend touchcancel", function(t) {
                    e(t)
                })
            });
            var e = function(t) {
                var e, i = t.changedTouches[0],
                    n = {
                        touchstart: "mousedown",
                        touchmove: "mousemove",
                        touchend: "mouseup"
                    } [t.type];
                "MouseEvent" in window && "function" == typeof window.MouseEvent ? e = new window.MouseEvent(n, {
                    bubbles: !0,
                    cancelable: !0,
                    screenX: i.screenX,
                    screenY: i.screenY,
                    clientX: i.clientX,
                    clientY: i.clientY
                }) : (e = document.createEvent("MouseEvent")).initMouseEvent(n, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e)
            }
        }
    }, Y.init = function(t) {
        void 0 === t.spotSwipe && (Y.setupSpotSwipe(t), Y.setupTouchHandler(t))
    };
    var J = function() {
            for (var t = ["WebKit", "Moz", "O", "Ms", ""], e = 0; e < t.length; e++)
                if ("".concat(t[e], "MutationObserver") in window) return window["".concat(t[e], "MutationObserver")];
            return !1
        }(),
        tt = function(t, e) {
            t.data(e).split(" ").forEach(function(i) {
                s()("#".concat(i))["close" === e ? "trigger" : "triggerHandler"]("".concat(e, ".zf.trigger"), [t])
            })
        },
        et = {
            Listeners: {
                Basic: {},
                Global: {}
            },
            Initializers: {}
        };

    function it(t, e, i) {
        var n, o = Array.prototype.slice.call(arguments, 3);
        s()(window).off(e).on(e, function(e) {
            n && clearTimeout(n), n = setTimeout(function() {
                i.apply(null, o)
            }, t || 10)
        })
    }
    et.Listeners.Basic = {
        openListener: function() {
            tt(s()(this), "open")
        },
        closeListener: function() {
            s()(this).data("close") ? tt(s()(this), "close") : s()(this).trigger("close.zf.trigger")
        },
        toggleListener: function() {
            s()(this).data("toggle") ? tt(s()(this), "toggle") : s()(this).trigger("toggle.zf.trigger")
        },
        closeableListener: function(t) {
            t.stopPropagation();
            var e = s()(this).data("closable");
            "" !== e ? I.animateOut(s()(this), e, function() {
                s()(this).trigger("closed.zf")
            }) : s()(this).fadeOut().trigger("closed.zf")
        },
        toggleFocusListener: function() {
            var t = s()(this).data("toggle-focus");
            s()("#".concat(t)).triggerHandler("toggle.zf.trigger", [s()(this)])
        }
    }, et.Initializers.addOpenListener = function(t) {
        t.off("click.zf.trigger", et.Listeners.Basic.openListener), t.on("click.zf.trigger", "[data-open]", et.Listeners.Basic.openListener)
    }, et.Initializers.addCloseListener = function(t) {
        t.off("click.zf.trigger", et.Listeners.Basic.closeListener), t.on("click.zf.trigger", "[data-close]", et.Listeners.Basic.closeListener)
    }, et.Initializers.addToggleListener = function(t) {
        t.off("click.zf.trigger", et.Listeners.Basic.toggleListener), t.on("click.zf.trigger", "[data-toggle]", et.Listeners.Basic.toggleListener)
    }, et.Initializers.addCloseableListener = function(t) {
        t.off("close.zf.trigger", et.Listeners.Basic.closeableListener), t.on("close.zf.trigger", "[data-closeable], [data-closable]", et.Listeners.Basic.closeableListener)
    }, et.Initializers.addToggleFocusListener = function(t) {
        t.off("focus.zf.trigger blur.zf.trigger", et.Listeners.Basic.toggleFocusListener), t.on("focus.zf.trigger blur.zf.trigger", "[data-toggle-focus]", et.Listeners.Basic.toggleFocusListener)
    }, et.Listeners.Global = {
        resizeListener: function(t) {
            J || t.each(function() {
                s()(this).triggerHandler("resizeme.zf.trigger")
            }), t.attr("data-events", "resize")
        },
        scrollListener: function(t) {
            J || t.each(function() {
                s()(this).triggerHandler("scrollme.zf.trigger")
            }), t.attr("data-events", "scroll")
        },
        closeMeListener: function(t, e) {
            var i = t.namespace.split(".")[0];
            s()("[data-".concat(i, "]")).not('[data-yeti-box="'.concat(e, '"]')).each(function() {
                var t = s()(this);
                t.triggerHandler("close.zf.trigger", [t])
            })
        }
    }, et.Initializers.addClosemeListener = function(t) {
        var e = s()("[data-yeti-box]"),
            i = ["dropdown", "tooltip", "reveal"];
        if (t && ("string" == typeof t ? i.push(t) : "object" === o(t) && "string" == typeof t[0] ? i = i.concat(t) : console.error("Plugin names must be strings")), e.length) {
            var n = i.map(function(t) {
                return "closeme.zf.".concat(t)
            }).join(" ");
            s()(window).off(n).on(n, et.Listeners.Global.closeMeListener)
        }
    }, et.Initializers.addResizeListener = function(t) {
        var e = s()("[data-resize]");
        e.length && it(t, "resize.zf.trigger", et.Listeners.Global.resizeListener, e)
    }, et.Initializers.addScrollListener = function(t) {
        var e = s()("[data-scroll]");
        e.length && it(t, "scroll.zf.trigger", et.Listeners.Global.scrollListener, e)
    }, et.Initializers.addMutationEventsListener = function(t) {
        if (!J) return !1;
        var e = t.find("[data-resize], [data-scroll], [data-mutate]"),
            i = function(t) {
                var e = s()(t[0].target);
                switch (t[0].type) {
                    case "attributes":
                        "scroll" === e.attr("data-events") && "data-events" === t[0].attributeName && e.triggerHandler("scrollme.zf.trigger", [e, window.pageYOffset]), "resize" === e.attr("data-events") && "data-events" === t[0].attributeName && e.triggerHandler("resizeme.zf.trigger", [e]), "style" === t[0].attributeName && (e.closest("[data-mutate]").attr("data-events", "mutate"), e.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [e.closest("[data-mutate]")]));
                        break;
                    case "childList":
                        e.closest("[data-mutate]").attr("data-events", "mutate"), e.closest("[data-mutate]").triggerHandler("mutateme.zf.trigger", [e.closest("[data-mutate]")]);
                        break;
                    default:
                        return !1
                }
            };
        if (e.length)
            for (var n = 0; n <= e.length - 1; n++) {
                new J(i).observe(e[n], {
                    attributes: !0,
                    childList: !0,
                    characterData: !1,
                    subtree: !0,
                    attributeFilter: ["data-events", "style"]
                })
            }
    }, et.Initializers.addSimpleListeners = function() {
        var t = s()(document);
        et.Initializers.addOpenListener(t), et.Initializers.addCloseListener(t), et.Initializers.addToggleListener(t), et.Initializers.addCloseableListener(t), et.Initializers.addToggleFocusListener(t)
    }, et.Initializers.addGlobalListeners = function() {
        var t = s()(document);
        et.Initializers.addMutationEventsListener(t), et.Initializers.addResizeListener(), et.Initializers.addScrollListener(), et.Initializers.addClosemeListener()
    }, et.init = function(t, e) {
        y(t(window), function() {
            !0 !== t.triggersInitialized && (et.Initializers.addSimpleListeners(), et.Initializers.addGlobalListeners(), t.triggersInitialized = !0)
        }), e && (e.Triggers = et, e.IHearYou = et.Initializers.addGlobalListeners)
    };
    var nt = function() {
        function t(e, i) {
            a(this, t), this._setup(e, i);
            var n = ot(this);
            this.uuid = g(6, n), this.$element.attr("data-".concat(n)) || this.$element.attr("data-".concat(n), this.uuid), this.$element.data("zfPlugin") || this.$element.data("zfPlugin", this), this.$element.trigger("init.zf.".concat(n))
        }
        return l(t, [{
            key: "destroy",
            value: function() {
                this._destroy();
                var t = ot(this);
                for (var e in this.$element.removeAttr("data-".concat(t)).removeData("zfPlugin").trigger("destroyed.zf.".concat(t)), this) this[e] = null
            }
        }]), t
    }();

    function st(t) {
        return t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
    }

    function ot(t) {
        return void 0 !== t.constructor.name ? st(t.constructor.name) : st(t.className)
    }
    var at = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, nt), l(e, [{
            key: "_setup",
            value: function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.$element = t, this.options = s.a.extend(!0, {}, e.defaults, this.$element.data(), i), this.className = "Abide", this._init()
            }
        }, {
            key: "_init",
            value: function() {
                var t = this;
                this.$inputs = s.a.merge(this.$element.find("input").not("[type=submit]"), this.$element.find("textarea, select"));
                var e = this.$element.find("[data-abide-error]");
                this.options.a11yAttributes && (this.$inputs.each(function(e, i) {
                    return t.addA11yAttributes(s()(i))
                }), e.each(function(e, i) {
                    return t.addGlobalErrorA11yAttributes(s()(i))
                })), this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                this.$element.off(".abide").on("reset.zf.abide", function() {
                    t.resetForm()
                }).on("submit.zf.abide", function() {
                    return t.validateForm()
                }), "fieldChange" === this.options.validateOn && this.$inputs.off("change.zf.abide").on("change.zf.abide", function(e) {
                    t.validateInput(s()(e.target))
                }), this.options.liveValidate && this.$inputs.off("input.zf.abide").on("input.zf.abide", function(e) {
                    t.validateInput(s()(e.target))
                }), this.options.validateOnBlur && this.$inputs.off("blur.zf.abide").on("blur.zf.abide", function(e) {
                    t.validateInput(s()(e.target))
                })
            }
        }, {
            key: "_reflow",
            value: function() {
                this._init()
            }
        }, {
            key: "requiredCheck",
            value: function(t) {
                if (!t.attr("required")) return !0;
                var e = !0;
                switch (t[0].type) {
                    case "checkbox":
                        e = t[0].checked;
                        break;
                    case "select":
                    case "select-one":
                    case "select-multiple":
                        var i = t.find("option:selected");
                        i.length && i.val() || (e = !1);
                        break;
                    default:
                        t.val() && t.val().length || (e = !1)
                }
                return e
            }
        }, {
            key: "findFormError",
            value: function(t) {
                var e = t[0].id,
                    i = t.siblings(this.options.formErrorSelector);
                return i.length || (i = t.parent().find(this.options.formErrorSelector)), e && (i = i.add(this.$element.find('[data-form-error-for="'.concat(e, '"]')))), i
            }
        }, {
            key: "findLabel",
            value: function(t) {
                var e = t[0].id,
                    i = this.$element.find('label[for="'.concat(e, '"]'));
                return i.length ? i : t.closest("label")
            }
        }, {
            key: "findRadioLabels",
            value: function(t) {
                var e = this,
                    i = t.map(function(t, i) {
                        var n = i.id,
                            o = e.$element.find('label[for="'.concat(n, '"]'));
                        return o.length || (o = s()(i).closest("label")), o[0]
                    });
                return s()(i)
            }
        }, {
            key: "addErrorClasses",
            value: function(t) {
                var e = this.findLabel(t),
                    i = this.findFormError(t);
                e.length && e.addClass(this.options.labelErrorClass), i.length && i.addClass(this.options.formErrorClass), t.addClass(this.options.inputErrorClass).attr({
                    "data-invalid": "",
                    "aria-invalid": !0
                })
            }
        }, {
            key: "addA11yAttributes",
            value: function(t) {
                var e = this.findFormError(t),
                    i = e.filter("label"),
                    n = e.first();
                if (e.length) {
                    if (void 0 === t.attr("aria-describedby")) {
                        var o = n.attr("id");
                        void 0 === o && (o = g(6, "abide-error"), n.attr("id", o)), t.attr("aria-describedby", o)
                    }
                    if (i.filter("[for]").length < i.length) {
                        var a = t.attr("id");
                        void 0 === a && (a = g(6, "abide-input"), t.attr("id", a)), i.each(function(t, e) {
                            var i = s()(e);
                            void 0 === i.attr("for") && i.attr("for", a)
                        })
                    }
                    e.each(function(t, e) {
                        var i = s()(e);
                        void 0 === i.attr("role") && i.attr("role", "alert")
                    }).end()
                }
            }
        }, {
            key: "addGlobalErrorA11yAttributes",
            value: function(t) {
                void 0 === t.attr("aria-live") && t.attr("aria-live", this.options.a11yErrorLevel)
            }
        }, {
            key: "removeRadioErrorClasses",
            value: function(t) {
                var e = this.$element.find(':radio[name="'.concat(t, '"]')),
                    i = this.findRadioLabels(e),
                    n = this.findFormError(e);
                i.length && i.removeClass(this.options.labelErrorClass), n.length && n.removeClass(this.options.formErrorClass), e.removeClass(this.options.inputErrorClass).attr({
                    "data-invalid": null,
                    "aria-invalid": null
                })
            }
        }, {
            key: "removeErrorClasses",
            value: function(t) {
                if ("radio" == t[0].type) return this.removeRadioErrorClasses(t.attr("name"));
                var e = this.findLabel(t),
                    i = this.findFormError(t);
                e.length && e.removeClass(this.options.labelErrorClass), i.length && i.removeClass(this.options.formErrorClass), t.removeClass(this.options.inputErrorClass).attr({
                    "data-invalid": null,
                    "aria-invalid": null
                })
            }
        }, {
            key: "validateInput",
            value: function(t) {
                var e = this.requiredCheck(t),
                    i = !1,
                    n = !0,
                    o = t.attr("data-validator"),
                    a = !0;
                if (t.is("[data-abide-ignore]") || t.is('[type="hidden"]') || t.is("[disabled]")) return !0;
                switch (t[0].type) {
                    case "radio":
                        i = this.validateRadio(t.attr("name"));
                        break;
                    case "checkbox":
                        i = e;
                        break;
                    case "select":
                    case "select-one":
                    case "select-multiple":
                        i = e;
                        break;
                    default:
                        i = this.validateText(t)
                }
                o && (n = this.matchValidation(t, o, t.attr("required"))), t.attr("data-equalto") && (a = this.options.validators.equalTo(t));
                var r = -1 === [e, i, n, a].indexOf(!1),
                    l = (r ? "valid" : "invalid") + ".zf.abide";
                if (r) {
                    var c = this.$element.find('[data-equalto="'.concat(t.attr("id"), '"]'));
                    if (c.length) {
                        var h = this;
                        c.each(function() {
                            s()(this).val() && h.validateInput(s()(this))
                        })
                    }
                }
                return this[r ? "removeErrorClasses" : "addErrorClasses"](t), t.trigger(l, [t]), r
            }
        }, {
            key: "validateForm",
            value: function() {
                var t = this,
                    e = [],
                    i = this;
                this.$inputs.each(function() {
                    e.push(i.validateInput(s()(this)))
                });
                var n = -1 === e.indexOf(!1);
                return this.$element.find("[data-abide-error]").each(function(e, i) {
                    var o = s()(i);
                    t.options.a11yAttributes && t.addGlobalErrorA11yAttributes(o), o.css("display", n ? "none" : "block")
                }), this.$element.trigger((n ? "formvalid" : "forminvalid") + ".zf.abide", [this.$element]), n
            }
        }, {
            key: "validateText",
            value: function(t, e) {
                e = e || t.attr("pattern") || t.attr("type");
                var i = t.val(),
                    n = !1;
                return i.length ? n = this.options.patterns.hasOwnProperty(e) ? this.options.patterns[e].test(i) : e === t.attr("type") || new RegExp(e).test(i) : t.prop("required") || (n = !0), n
            }
        }, {
            key: "validateRadio",
            value: function(t) {
                var e = this.$element.find(':radio[name="'.concat(t, '"]')),
                    i = !1,
                    n = !1;
                return e.each(function(t, e) {
                    s()(e).attr("required") && (n = !0)
                }), n || (i = !0), i || e.each(function(t, e) {
                    s()(e).prop("checked") && (i = !0)
                }), i
            }
        }, {
            key: "matchValidation",
            value: function(t, e, i) {
                var n = this;
                return i = !!i, -1 === e.split(" ").map(function(e) {
                    return n.options.validators[e](t, i, t.parent())
                }).indexOf(!1)
            }
        }, {
            key: "resetForm",
            value: function() {
                var t = this.$element,
                    e = this.options;
                s()(".".concat(e.labelErrorClass), t).not("small").removeClass(e.labelErrorClass), s()(".".concat(e.inputErrorClass), t).not("small").removeClass(e.inputErrorClass), s()("".concat(e.formErrorSelector, ".").concat(e.formErrorClass)).removeClass(e.formErrorClass), t.find("[data-abide-error]").css("display", "none"), s()(":input", t).not(":button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]").val("").attr({
                    "data-invalid": null,
                    "aria-invalid": null
                }), s()(":input:radio", t).not("[data-abide-ignore]").prop("checked", !1).attr({
                    "data-invalid": null,
                    "aria-invalid": null
                }), s()(":input:checkbox", t).not("[data-abide-ignore]").prop("checked", !1).attr({
                    "data-invalid": null,
                    "aria-invalid": null
                }), t.trigger("formreset.zf.abide", [t])
            }
        }, {
            key: "_destroy",
            value: function() {
                var t = this;
                this.$element.off(".abide").find("[data-abide-error]").css("display", "none"), this.$inputs.off(".abide").each(function() {
                    t.removeErrorClasses(s()(this))
                })
            }
        }]), e
    }();
    at.defaults = {
        validateOn: "fieldChange",
        labelErrorClass: "is-invalid-label",
        inputErrorClass: "is-invalid-input",
        formErrorSelector: ".form-error",
        formErrorClass: "is-visible",
        a11yAttributes: !0,
        a11yErrorLevel: "assertive",
        liveValidate: !1,
        validateOnBlur: !1,
        patterns: {
            alpha: /^[a-zA-Z]+$/,
            alpha_numeric: /^[a-zA-Z0-9]+$/,
            integer: /^[-+]?\d+$/,
            number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
            card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
            cvv: /^([0-9]){3,4}$/,
            email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
            url: /^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,
            domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
            datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
            date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
            time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
            dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
            month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
            day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
            color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
            website: {
                test: function(t) {
                    return at.defaults.patterns.domain.test(t) || at.defaults.patterns.url.test(t)
                }
            }
        },
        validators: {
            equalTo: function(t, e, i) {
                return s()("#".concat(t.attr("data-equalto"))).val() === t.val()
            }
        }
    };
    var rt = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, nt), l(e, [{
            key: "_setup",
            value: function(t, i) {
                this.$element = t, this.options = s.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Accordion", this._init(), O.register("Accordion", {
                    ENTER: "toggle",
                    SPACE: "toggle",
                    ARROW_DOWN: "next",
                    ARROW_UP: "previous"
                })
            }
        }, {
            key: "_init",
            value: function() {
                var t = this;
                this._isInitializing = !0, this.$element.attr("role", "tablist"), this.$tabs = this.$element.children("[data-accordion-item]"), this.$tabs.each(function(t, e) {
                    var i = s()(e),
                        n = i.children("[data-tab-content]"),
                        o = n[0].id || g(6, "accordion"),
                        a = e.id ? "".concat(e.id, "-label") : "".concat(o, "-label");
                    i.find("a:first").attr({
                        "aria-controls": o,
                        role: "tab",
                        id: a,
                        "aria-expanded": !1,
                        "aria-selected": !1
                    }), n.attr({
                        role: "tabpanel",
                        "aria-labelledby": a,
                        "aria-hidden": !0,
                        id: o
                    })
                });
                var e = this.$element.find(".is-active").children("[data-tab-content]");
                e.length && (this._initialAnchor = e.prev("a").attr("href"), this._openSingleTab(e)), this._checkDeepLink = function() {
                    var e = window.location.hash;
                    if (!e.length) {
                        if (t._isInitializing) return;
                        t._initialAnchor && (e = t._initialAnchor)
                    }
                    var i = e && s()(e),
                        n = e && t.$element.find('[href$="'.concat(e, '"]')),
                        o = !(!i.length || !n.length);
                    i && n && n.length ? n.parent("[data-accordion-item]").hasClass("is-active") || t._openSingleTab(i) : t._closeAllTabs(), o && (t.options.deepLinkSmudge && y(s()(window), function() {
                        var e = t.$element.offset();
                        s()("html, body").animate({
                            scrollTop: e.top
                        }, t.options.deepLinkSmudgeDelay)
                    }), t.$element.trigger("deeplink.zf.accordion", [n, i]))
                }, this.options.deepLink && this._checkDeepLink(), this._events(), this._isInitializing = !1
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                this.$tabs.each(function() {
                    var e = s()(this),
                        i = e.children("[data-tab-content]");
                    i.length && e.children("a").off("click.zf.accordion keydown.zf.accordion").on("click.zf.accordion", function(e) {
                        e.preventDefault(), t.toggle(i)
                    }).on("keydown.zf.accordion", function(n) {
                        O.handleKey(n, "Accordion", {
                            toggle: function() {
                                t.toggle(i)
                            },
                            next: function() {
                                var i = e.next().find("a").focus();
                                t.options.multiExpand || i.trigger("click.zf.accordion")
                            },
                            previous: function() {
                                var i = e.prev().find("a").focus();
                                t.options.multiExpand || i.trigger("click.zf.accordion")
                            },
                            handled: function() {
                                n.preventDefault(), n.stopPropagation()
                            }
                        })
                    })
                }), this.options.deepLink && s()(window).on("hashchange", this._checkDeepLink)
            }
        }, {
            key: "toggle",
            value: function(t) {
                if (t.closest("[data-accordion]").is("[disabled]")) console.info("Cannot toggle an accordion that is disabled.");
                else if (t.parent().hasClass("is-active") ? this.up(t) : this.down(t), this.options.deepLink) {
                    var e = t.prev("a").attr("href");
                    this.options.updateHistory ? history.pushState({}, "", e) : history.replaceState({}, "", e)
                }
            }
        }, {
            key: "down",
            value: function(t) {
                t.closest("[data-accordion]").is("[disabled]") ? console.info("Cannot call down on an accordion that is disabled.") : this.options.multiExpand ? this._openTab(t) : this._openSingleTab(t)
            }
        }, {
            key: "up",
            value: function(t) {
                if (this.$element.is("[disabled]")) console.info("Cannot call up on an accordion that is disabled.");
                else {
                    var e = t.parent();
                    if (e.hasClass("is-active")) {
                        var i = e.siblings();
                        (this.options.allowAllClosed || i.hasClass("is-active")) && this._closeTab(t)
                    }
                }
            }
        }, {
            key: "_openSingleTab",
            value: function(t) {
                var e = this.$element.children(".is-active").children("[data-tab-content]");
                e.length && this._closeTab(e.not(t)), this._openTab(t)
            }
        }, {
            key: "_openTab",
            value: function(t) {
                var e = this,
                    i = t.parent(),
                    n = t.attr("aria-labelledby");
                t.attr("aria-hidden", !1), i.addClass("is-active"), s()("#".concat(n)).attr({
                    "aria-expanded": !0,
                    "aria-selected": !0
                }), t.slideDown(this.options.slideSpeed, function() {
                    e.$element.trigger("down.zf.accordion", [t])
                })
            }
        }, {
            key: "_closeTab",
            value: function(t) {
                var e = this,
                    i = t.parent(),
                    n = t.attr("aria-labelledby");
                t.attr("aria-hidden", !0), i.removeClass("is-active"), s()("#".concat(n)).attr({
                    "aria-expanded": !1,
                    "aria-selected": !1
                }), t.slideUp(this.options.slideSpeed, function() {
                    e.$element.trigger("up.zf.accordion", [t])
                })
            }
        }, {
            key: "_closeAllTabs",
            value: function() {
                var t = this.$element.children(".is-active").children("[data-tab-content]");
                t.length && this._closeTab(t)
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.find("[data-tab-content]").stop(!0).slideUp(0).css("display", ""), this.$element.find("a").off(".zf.accordion"), this.options.deepLink && s()(window).off("hashchange", this._checkDeepLink)
            }
        }]), e
    }();
    rt.defaults = {
        slideSpeed: 250,
        multiExpand: !1,
        allowAllClosed: !1,
        deepLink: !1,
        deepLinkSmudge: !1,
        deepLinkSmudgeDelay: 300,
        updateHistory: !1
    };
    var lt = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, nt), l(e, [{
            key: "_setup",
            value: function(t, i) {
                this.$element = t, this.options = s.a.extend({}, e.defaults, this.$element.data(), i), this.className = "AccordionMenu", this._init(), O.register("AccordionMenu", {
                    ENTER: "toggle",
                    SPACE: "toggle",
                    ARROW_RIGHT: "open",
                    ARROW_UP: "up",
                    ARROW_DOWN: "down",
                    ARROW_LEFT: "close",
                    ESCAPE: "closeAll"
                })
            }
        }, {
            key: "_init",
            value: function() {
                F.Feather(this.$element, "accordion");
                var t = this;
                this.$element.find("[data-submenu]").not(".is-active").slideUp(0), this.$element.attr({
                    role: "tree",
                    "aria-multiselectable": this.options.multiOpen
                }), this.$menuLinks = this.$element.find(".is-accordion-submenu-parent"), this.$menuLinks.each(function() {
                    var e = this.id || g(6, "acc-menu-link"),
                        i = s()(this),
                        n = i.children("[data-submenu]"),
                        o = n[0].id || g(6, "acc-menu"),
                        a = n.hasClass("is-active");
                    t.options.parentLink && i.children("a").clone().prependTo(n).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>');
                    t.options.submenuToggle ? (i.addClass("has-submenu-toggle"), i.children("a").after('<button id="' + e + '" class="submenu-toggle" aria-controls="' + o + '" aria-expanded="' + a + '" title="' + t.options.submenuToggleText + '"><span class="submenu-toggle-text">' + t.options.submenuToggleText + "</span></button>")) : i.attr({
                        "aria-controls": o,
                        "aria-expanded": a,
                        id: e
                    }), n.attr({
                        "aria-labelledby": e,
                        "aria-hidden": !a,
                        role: "group",
                        id: o
                    })
                }), this.$element.find("li").attr({
                    role: "treeitem"
                });
                var e = this.$element.find(".is-active");
                if (e.length) {
                    t = this;
                    e.each(function() {
                        t.down(s()(this))
                    })
                }
                this._events()
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                this.$element.find("li").each(function() {
                    var e = s()(this).children("[data-submenu]");
                    e.length && (t.options.submenuToggle ? s()(this).children(".submenu-toggle").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(i) {
                        t.toggle(e)
                    }) : s()(this).children("a").off("click.zf.accordionMenu").on("click.zf.accordionMenu", function(i) {
                        i.preventDefault(), t.toggle(e)
                    }))
                }).on("keydown.zf.accordionmenu", function(e) {
                    var i, n, o = s()(this),
                        a = o.parent("ul").children("li"),
                        r = o.children("[data-submenu]");
                    a.each(function(t) {
                        if (s()(this).is(o)) return i = a.eq(Math.max(0, t - 1)).find("a").first(), n = a.eq(Math.min(t + 1, a.length - 1)).find("a").first(), s()(this).children("[data-submenu]:visible").length && (n = o.find("li:first-child").find("a").first()), s()(this).is(":first-child") ? i = o.parents("li").first().find("a").first() : i.parents("li").first().children("[data-submenu]:visible").length && (i = i.parents("li").find("li:last-child").find("a").first()), void(s()(this).is(":last-child") && (n = o.parents("li").first().next("li").find("a").first()))
                    }), O.handleKey(e, "AccordionMenu", {
                        open: function() {
                            r.is(":hidden") && (t.down(r), r.find("li").first().find("a").first().focus())
                        },
                        close: function() {
                            r.length && !r.is(":hidden") ? t.up(r) : o.parent("[data-submenu]").length && (t.up(o.parent("[data-submenu]")), o.parents("li").first().find("a").first().focus())
                        },
                        up: function() {
                            return i.focus(), !0
                        },
                        down: function() {
                            return n.focus(), !0
                        },
                        toggle: function() {
                            return !t.options.submenuToggle && (o.children("[data-submenu]").length ? (t.toggle(o.children("[data-submenu]")), !0) : void 0)
                        },
                        closeAll: function() {
                            t.hideAll()
                        },
                        handled: function(t) {
                            t && e.preventDefault(), e.stopImmediatePropagation()
                        }
                    })
                })
            }
        }, {
            key: "hideAll",
            value: function() {
                this.up(this.$element.find("[data-submenu]"))
            }
        }, {
            key: "showAll",
            value: function() {
                this.down(this.$element.find("[data-submenu]"))
            }
        }, {
            key: "toggle",
            value: function(t) {
                t.is(":animated") || (t.is(":hidden") ? this.down(t) : this.up(t))
            }
        }, {
            key: "down",
            value: function(t) {
                var e = this;
                if (!this.options.multiOpen) {
                    var i = t.parentsUntil(this.$element).add(t).add(t.find(".is-active")),
                        n = this.$element.find(".is-active").not(i);
                    this.up(n)
                }
                t.addClass("is-active").attr({
                    "aria-hidden": !1
                }), this.options.submenuToggle ? t.prev(".submenu-toggle").attr({
                    "aria-expanded": !0
                }) : t.parent(".is-accordion-submenu-parent").attr({
                    "aria-expanded": !0
                }), t.slideDown(this.options.slideSpeed, function() {
                    e.$element.trigger("down.zf.accordionMenu", [t])
                })
            }
        }, {
            key: "up",
            value: function(t) {
                var e = this,
                    i = t.find("[data-submenu]"),
                    n = t.add(i);
                i.slideUp(0), n.removeClass("is-active").attr("aria-hidden", !0), this.options.submenuToggle ? n.prev(".submenu-toggle").attr("aria-expanded", !1) : n.parent(".is-accordion-submenu-parent").attr("aria-expanded", !1), t.slideUp(this.options.slideSpeed, function() {
                    e.$element.trigger("up.zf.accordionMenu", [t])
                })
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.find("[data-submenu]").slideDown(0).css("display", ""), this.$element.find("a").off("click.zf.accordionMenu"), this.$element.find("[data-is-parent-link]").detach(), this.options.submenuToggle && (this.$element.find(".has-submenu-toggle").removeClass("has-submenu-toggle"), this.$element.find(".submenu-toggle").remove()), F.Burn(this.$element, "accordion")
            }
        }]), e
    }();
    lt.defaults = {
        parentLink: !1,
        slideSpeed: 250,
        submenuToggle: !1,
        submenuToggleText: "Toggle menu",
        multiOpen: !0
    };
    var ct = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, nt), l(e, [{
            key: "_setup",
            value: function(t, i) {
                this.$element = t, this.options = s.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Drilldown", this._init(), O.register("Drilldown", {
                    ENTER: "open",
                    SPACE: "open",
                    ARROW_RIGHT: "next",
                    ARROW_UP: "up",
                    ARROW_DOWN: "down",
                    ARROW_LEFT: "previous",
                    ESCAPE: "close",
                    TAB: "down",
                    SHIFT_TAB: "up"
                })
            }
        }, {
            key: "_init",
            value: function() {
                F.Feather(this.$element, "drilldown"), this.options.autoApplyClass && this.$element.addClass("drilldown"), this.$element.attr({
                    role: "tree",
                    "aria-multiselectable": !1
                }), this.$submenuAnchors = this.$element.find("li.is-drilldown-submenu-parent").children("a"), this.$submenus = this.$submenuAnchors.parent("li").children("[data-submenu]").attr("role", "group"), this.$menuItems = this.$element.find("li").not(".js-drilldown-back").attr("role", "treeitem").find("a"), this.$currentMenu = this.$element, this.$element.attr("data-mutate", this.$element.attr("data-drilldown") || g(6, "drilldown")), this._prepareMenu(), this._registerEvents(), this._keyboardEvents()
            }
        }, {
            key: "_prepareMenu",
            value: function() {
                var t = this;
                this.$submenuAnchors.each(function() {
                    var e = s()(this),
                        i = e.parent();
                    t.options.parentLink && e.clone().prependTo(i.children("[data-submenu]")).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>'), e.data("savedHref", e.attr("href")).removeAttr("href").attr("tabindex", 0), e.children("[data-submenu]").attr({
                        "aria-hidden": !0,
                        tabindex: 0,
                        role: "group"
                    }), t._events(e)
                }), this.$submenus.each(function() {
                    var e = s()(this);
                    if (!e.find(".js-drilldown-back").length) switch (t.options.backButtonPosition) {
                        case "bottom":
                            e.append(t.options.backButton);
                            break;
                        case "top":
                            e.prepend(t.options.backButton);
                            break;
                        default:
                            console.error("Unsupported backButtonPosition value '" + t.options.backButtonPosition + "'")
                    }
                    t._back(e)
                }), this.$submenus.addClass("invisible"), this.options.autoHeight || this.$submenus.addClass("drilldown-submenu-cover-previous"), this.$element.parent().hasClass("is-drilldown") || (this.$wrapper = s()(this.options.wrapper).addClass("is-drilldown"), this.options.animateHeight && this.$wrapper.addClass("animate-height"), this.$element.wrap(this.$wrapper)), this.$wrapper = this.$element.parent(), this.$wrapper.css(this._getMaxDims())
            }
        }, {
            key: "_resize",
            value: function() {
                this.$wrapper.css({
                    "max-width": "none",
                    "min-height": "none"
                }), this.$wrapper.css(this._getMaxDims())
            }
        }, {
            key: "_events",
            value: function(t) {
                var e = this;
                t.off("click.zf.drilldown").on("click.zf.drilldown", function(i) {
                    if (s()(i.target).parentsUntil("ul", "li").hasClass("is-drilldown-submenu-parent") && (i.stopImmediatePropagation(), i.preventDefault()), e._show(t.parent("li")), e.options.closeOnClick) {
                        var n = s()("body");
                        n.off(".zf.drilldown").on("click.zf.drilldown", function(t) {
                            t.target === e.$element[0] || s.a.contains(e.$element[0], t.target) || (t.preventDefault(), e._hideAll(), n.off(".zf.drilldown"))
                        })
                    }
                })
            }
        }, {
            key: "_registerEvents",
            value: function() {
                this.options.scrollTop && (this._bindHandler = this._scrollTop.bind(this), this.$element.on("open.zf.drilldown hide.zf.drilldown closed.zf.drilldown", this._bindHandler)), this.$element.on("mutateme.zf.trigger", this._resize.bind(this))
            }
        }, {
            key: "_scrollTop",
            value: function() {
                var t = this,
                    e = "" != t.options.scrollTopElement ? s()(t.options.scrollTopElement) : t.$element,
                    i = parseInt(e.offset().top + t.options.scrollTopOffset, 10);
                s()("html, body").stop(!0).animate({
                    scrollTop: i
                }, t.options.animationDuration, t.options.animationEasing, function() {
                    this === s()("html")[0] && t.$element.trigger("scrollme.zf.drilldown")
                })
            }
        }, {
            key: "_keyboardEvents",
            value: function() {
                var t = this;
                this.$menuItems.add(this.$element.find(".js-drilldown-back > a, .is-submenu-parent-item > a")).on("keydown.zf.drilldown", function(e) {
                    var i, n, o = s()(this),
                        a = o.parent("li").parent("ul").children("li").children("a");
                    a.each(function(t) {
                        if (s()(this).is(o)) return i = a.eq(Math.max(0, t - 1)), void(n = a.eq(Math.min(t + 1, a.length - 1)))
                    }), O.handleKey(e, "Drilldown", {
                        next: function() {
                            if (o.is(t.$submenuAnchors)) return t._show(o.parent("li")), o.parent("li").one(v(o), function() {
                                o.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()
                            }), !0
                        },
                        previous: function() {
                            return t._hide(o.parent("li").parent("ul")), o.parent("li").parent("ul").one(v(o), function() {
                                setTimeout(function() {
                                    o.parent("li").parent("ul").parent("li").children("a").first().focus()
                                }, 1)
                            }), !0
                        },
                        up: function() {
                            return i.focus(), !o.is(t.$element.find("> li:first-child > a"))
                        },
                        down: function() {
                            return n.focus(), !o.is(t.$element.find("> li:last-child > a"))
                        },
                        close: function() {
                            o.is(t.$element.find("> li > a")) || (t._hide(o.parent().parent()), o.parent().parent().siblings("a").focus())
                        },
                        open: function() {
                            return (!t.options.parentLink || !o.attr("href")) && (o.is(t.$menuItems) ? o.is(t.$submenuAnchors) ? (t._show(o.parent("li")), o.parent("li").one(v(o), function() {
                                o.parent("li").find("ul li a").not(".js-drilldown-back a").first().focus()
                            }), !0) : void 0 : (t._hide(o.parent("li").parent("ul")), o.parent("li").parent("ul").one(v(o), function() {
                                setTimeout(function() {
                                    o.parent("li").parent("ul").parent("li").children("a").first().focus()
                                }, 1)
                            }), !0))
                        },
                        handled: function(t) {
                            t && e.preventDefault(), e.stopImmediatePropagation()
                        }
                    })
                })
            }
        }, {
            key: "_hideAll",
            value: function() {
                var t = this.$element.find(".is-drilldown-submenu.is-active").addClass("is-closing");
                this.options.autoHeight && this.$wrapper.css({
                    height: t.parent().closest("ul").data("calcHeight")
                }), t.one(v(t), function(e) {
                    t.removeClass("is-active is-closing")
                }), this.$element.trigger("closed.zf.drilldown")
            }
        }, {
            key: "_back",
            value: function(t) {
                var e = this;
                t.off("click.zf.drilldown"), t.children(".js-drilldown-back").on("click.zf.drilldown", function(i) {
                    i.stopImmediatePropagation(), e._hide(t);
                    var n = t.parent("li").parent("ul").parent("li");
                    n.length && e._show(n)
                })
            }
        }, {
            key: "_menuLinkEvents",
            value: function() {
                var t = this;
                this.$menuItems.not(".is-drilldown-submenu-parent").off("click.zf.drilldown").on("click.zf.drilldown", function(e) {
                    setTimeout(function() {
                        t._hideAll()
                    }, 0)
                })
            }
        }, {
            key: "_setShowSubMenuClasses",
            value: function(t, e) {
                t.addClass("is-active").removeClass("invisible").attr("aria-hidden", !1), t.parent("li").attr("aria-expanded", !0), !0 === e && this.$element.trigger("open.zf.drilldown", [t])
            }
        }, {
            key: "_setHideSubMenuClasses",
            value: function(t, e) {
                t.removeClass("is-active").addClass("invisible").attr("aria-hidden", !0), t.parent("li").attr("aria-expanded", !1), !0 === e && t.trigger("hide.zf.drilldown", [t])
            }
        }, {
            key: "_showMenu",
            value: function(t, e) {
                var i = this;
                if (this.$element.find('li[aria-expanded="true"] > ul[data-submenu]').each(function(t) {
                        i._setHideSubMenuClasses(s()(this))
                    }), this.$currentMenu = t, t.is("[data-drilldown]")) return !0 === e && t.find('li[role="treeitem"] > a').first().focus(), void(this.options.autoHeight && this.$wrapper.css("height", t.data("calcHeight")));
                var n = t.children().first().parentsUntil("[data-drilldown]", "[data-submenu]");
                n.each(function(o) {
                    0 === o && i.options.autoHeight && i.$wrapper.css("height", s()(this).data("calcHeight"));
                    var a = o == n.length - 1;
                    !0 === a && s()(this).one(v(s()(this)), function() {
                        !0 === e && t.find('li[role="treeitem"] > a').first().focus()
                    }), i._setShowSubMenuClasses(s()(this), a)
                })
            }
        }, {
            key: "_show",
            value: function(t) {
                var e = t.children("[data-submenu]");
                t.attr("aria-expanded", !0), this.$currentMenu = e, e.addClass("is-active").removeClass("invisible").attr("aria-hidden", !1), this.options.autoHeight && this.$wrapper.css({
                    height: e.data("calcHeight")
                }), this.$element.trigger("open.zf.drilldown", [t])
            }
        }, {
            key: "_hide",
            value: function(t) {
                this.options.autoHeight && this.$wrapper.css({
                    height: t.parent().closest("ul").data("calcHeight")
                }), t.parent("li").attr("aria-expanded", !1), t.attr("aria-hidden", !0), t.addClass("is-closing").one(v(t), function() {
                    t.removeClass("is-active is-closing"), t.blur().addClass("invisible")
                }), t.trigger("hide.zf.drilldown", [t])
            }
        }, {
            key: "_getMaxDims",
            value: function() {
                var t = 0,
                    e = {},
                    i = this;
                return this.$submenus.add(this.$element).each(function() {
                    s()(this).children("li").length;
                    var e = C.GetDimensions(this).height;
                    t = e > t ? e : t, i.options.autoHeight && s()(this).data("calcHeight", e)
                }), this.options.autoHeight ? e.height = this.$currentMenu.data("calcHeight") : e["min-height"] = "".concat(t, "px"), e["max-width"] = "".concat(this.$element[0].getBoundingClientRect().width, "px"), e
            }
        }, {
            key: "_destroy",
            value: function() {
                this.options.scrollTop && this.$element.off(".zf.drilldown", this._bindHandler), this._hideAll(), this.$element.off("mutateme.zf.trigger"), F.Burn(this.$element, "drilldown"), this.$element.unwrap().find(".js-drilldown-back, .is-submenu-parent-item").remove().end().find(".is-active, .is-closing, .is-drilldown-submenu").removeClass("is-active is-closing is-drilldown-submenu").end().find("[data-submenu]").removeAttr("aria-hidden tabindex role"), this.$submenuAnchors.each(function() {
                    s()(this).off(".zf.drilldown")
                }), this.$element.find("[data-is-parent-link]").detach(), this.$submenus.removeClass("drilldown-submenu-cover-previous invisible"), this.$element.find("a").each(function() {
                    var t = s()(this);
                    t.removeAttr("tabindex"), t.data("savedHref") && t.attr("href", t.data("savedHref")).removeData("savedHref")
                })
            }
        }]), e
    }();
    ct.defaults = {
        autoApplyClass: !0,
        backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',
        backButtonPosition: "top",
        wrapper: "<div></div>",
        parentLink: !1,
        closeOnClick: !1,
        autoHeight: !1,
        animateHeight: !1,
        scrollTop: !1,
        scrollTopElement: "",
        scrollTopOffset: 0,
        animationDuration: 500,
        animationEasing: "swing"
    };
    var ht = ["left", "right", "top", "bottom"],
        ut = ["top", "bottom", "center"],
        dt = ["left", "right", "center"],
        pt = {
            left: ut,
            right: ut,
            top: dt,
            bottom: dt
        };

    function ft(t, e) {
        var i = e.indexOf(t);
        return i === e.length - 1 ? e[0] : e[i + 1]
    }
    var gt = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, nt), l(e, [{
            key: "_init",
            value: function() {
                this.triedPositions = {}, this.position = "auto" === this.options.position ? this._getDefaultPosition() : this.options.position, this.alignment = "auto" === this.options.alignment ? this._getDefaultAlignment() : this.options.alignment, this.originalPosition = this.position, this.originalAlignment = this.alignment
            }
        }, {
            key: "_getDefaultPosition",
            value: function() {
                return "bottom"
            }
        }, {
            key: "_getDefaultAlignment",
            value: function() {
                switch (this.position) {
                    case "bottom":
                    case "top":
                        return f() ? "right" : "left";
                    case "left":
                    case "right":
                        return "bottom"
                }
            }
        }, {
            key: "_reposition",
            value: function() {
                this._alignmentsExhausted(this.position) ? (this.position = ft(this.position, ht), this.alignment = pt[this.position][0]) : this._realign()
            }
        }, {
            key: "_realign",
            value: function() {
                this._addTriedPosition(this.position, this.alignment), this.alignment = ft(this.alignment, pt[this.position])
            }
        }, {
            key: "_addTriedPosition",
            value: function(t, e) {
                this.triedPositions[t] = this.triedPositions[t] || [], this.triedPositions[t].push(e)
            }
        }, {
            key: "_positionsExhausted",
            value: function() {
                for (var t = !0, e = 0; e < ht.length; e++) t = t && this._alignmentsExhausted(ht[e]);
                return t
            }
        }, {
            key: "_alignmentsExhausted",
            value: function(t) {
                return this.triedPositions[t] && this.triedPositions[t].length == pt[t].length
            }
        }, {
            key: "_getVOffset",
            value: function() {
                return this.options.vOffset
            }
        }, {
            key: "_getHOffset",
            value: function() {
                return this.options.hOffset
            }
        }, {
            key: "_setPosition",
            value: function(t, e, i) {
                if ("false" === t.attr("aria-expanded")) return !1;
                C.GetDimensions(e), C.GetDimensions(t);
                if (this.options.allowOverlap || (this.position = this.originalPosition, this.alignment = this.originalAlignment), e.offset(C.GetExplicitOffsets(e, t, this.position, this.alignment, this._getVOffset(), this._getHOffset())), !this.options.allowOverlap) {
                    for (var n = 1e8, s = {
                            position: this.position,
                            alignment: this.alignment
                        }; !this._positionsExhausted();) {
                        var o = C.OverlapArea(e, i, !1, !1, this.options.allowBottomOverlap);
                        if (0 === o) return;
                        o < n && (n = o, s = {
                            position: this.position,
                            alignment: this.alignment
                        }), this._reposition(), e.offset(C.GetExplicitOffsets(e, t, this.position, this.alignment, this._getVOffset(), this._getHOffset()))
                    }
                    this.position = s.position, this.alignment = s.alignment, e.offset(C.GetExplicitOffsets(e, t, this.position, this.alignment, this._getVOffset(), this._getHOffset()))
                }
            }
        }]), e
    }();
    gt.defaults = {
        position: "auto",
        alignment: "auto",
        allowOverlap: !1,
        allowBottomOverlap: !0,
        vOffset: 0,
        hOffset: 0
    };
    var mt = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, gt), l(e, [{
            key: "_setup",
            value: function(t, i) {
                this.$element = t, this.options = s.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Dropdown", et.init(s.a), this._init(), O.register("Dropdown", {
                    ENTER: "toggle",
                    SPACE: "toggle",
                    ESCAPE: "close"
                })
            }
        }, {
            key: "_init",
            value: function() {
                var t = this.$element.attr("id");
                this.$anchors = s()('[data-toggle="'.concat(t, '"]')).length ? s()('[data-toggle="'.concat(t, '"]')) : s()('[data-open="'.concat(t, '"]')), this.$anchors.attr({
                    "aria-controls": t,
                    "data-is-focus": !1,
                    "data-yeti-box": t,
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), this._setCurrentAnchor(this.$anchors.first()), this.options.parentClass ? this.$parent = this.$element.parents("." + this.options.parentClass) : this.$parent = null, void 0 === this.$element.attr("aria-labelledby") && (void 0 === this.$currentAnchor.attr("id") && this.$currentAnchor.attr("id", g(6, "dd-anchor")), this.$element.attr("aria-labelledby", this.$currentAnchor.attr("id"))), this.$element.attr({
                    "aria-hidden": "true",
                    "data-yeti-box": t,
                    "data-resize": t
                }), p(h(e.prototype), "_init", this).call(this), this._events()
            }
        }, {
            key: "_getDefaultPosition",
            value: function() {
                var t = this.$element[0].className.match(/(top|left|right|bottom)/g);
                return t ? t[0] : "bottom"
            }
        }, {
            key: "_getDefaultAlignment",
            value: function() {
                var t = /float-(\S+)/.exec(this.$currentAnchor.attr("class"));
                return t ? t[1] : p(h(e.prototype), "_getDefaultAlignment", this).call(this)
            }
        }, {
            key: "_setPosition",
            value: function() {
                this.$element.removeClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment)), p(h(e.prototype), "_setPosition", this).call(this, this.$currentAnchor, this.$element, this.$parent), this.$element.addClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment))
            }
        }, {
            key: "_setCurrentAnchor",
            value: function(t) {
                this.$currentAnchor = s()(t)
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": this._setPosition.bind(this)
                }), this.$anchors.off("click.zf.trigger").on("click.zf.trigger", function() {
                    t._setCurrentAnchor(this)
                }), this.options.hover && (this.$anchors.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                    t._setCurrentAnchor(this);
                    var e = s()("body").data();
                    void 0 !== e.whatinput && "mouse" !== e.whatinput || (clearTimeout(t.timeout), t.timeout = setTimeout(function() {
                        t.open(), t.$anchors.data("hover", !0)
                    }, t.options.hoverDelay))
                }).on("mouseleave.zf.dropdown", b(function() {
                    clearTimeout(t.timeout), t.timeout = setTimeout(function() {
                        t.close(), t.$anchors.data("hover", !1)
                    }, t.options.hoverDelay)
                })), this.options.hoverPane && this.$element.off("mouseenter.zf.dropdown mouseleave.zf.dropdown").on("mouseenter.zf.dropdown", function() {
                    clearTimeout(t.timeout)
                }).on("mouseleave.zf.dropdown", b(function() {
                    clearTimeout(t.timeout), t.timeout = setTimeout(function() {
                        t.close(), t.$anchors.data("hover", !1)
                    }, t.options.hoverDelay)
                }))), this.$anchors.add(this.$element).on("keydown.zf.dropdown", function(e) {
                    var i = s()(this);
                    O.findFocusable(t.$element);
                    O.handleKey(e, "Dropdown", {
                        open: function() {
                            i.is(t.$anchors) && !i.is("input, textarea") && (t.open(), t.$element.attr("tabindex", -1).focus(), e.preventDefault())
                        },
                        close: function() {
                            t.close(), t.$anchors.focus()
                        }
                    })
                })
            }
        }, {
            key: "_addBodyHandler",
            value: function() {
                var t = s()(document.body).not(this.$element),
                    e = this;
                t.off("click.zf.dropdown").on("click.zf.dropdown", function(i) {
                    e.$anchors.is(i.target) || e.$anchors.find(i.target).length || e.$element.is(i.target) || e.$element.find(i.target).length || (e.close(), t.off("click.zf.dropdown"))
                })
            }
        }, {
            key: "open",
            value: function() {
                if (this.$element.trigger("closeme.zf.dropdown", this.$element.attr("id")), this.$anchors.addClass("hover").attr({
                        "aria-expanded": !0
                    }), this.$element.addClass("is-opening"), this._setPosition(), this.$element.removeClass("is-opening").addClass("is-open").attr({
                        "aria-hidden": !1
                    }), this.options.autoFocus) {
                    var t = O.findFocusable(this.$element);
                    t.length && t.eq(0).focus()
                }
                this.options.closeOnClick && this._addBodyHandler(), this.options.trapFocus && O.trapFocus(this.$element), this.$element.trigger("show.zf.dropdown", [this.$element])
            }
        }, {
            key: "close",
            value: function() {
                if (!this.$element.hasClass("is-open")) return !1;
                this.$element.removeClass("is-open").attr({
                    "aria-hidden": !0
                }), this.$anchors.removeClass("hover").attr("aria-expanded", !1), this.$element.trigger("hide.zf.dropdown", [this.$element]), this.options.trapFocus && O.releaseFocus(this.$element)
            }
        }, {
            key: "toggle",
            value: function() {
                if (this.$element.hasClass("is-open")) {
                    if (this.$anchors.data("hover")) return;
                    this.close()
                } else this.open()
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.off(".zf.trigger").hide(), this.$anchors.off(".zf.dropdown"), s()(document.body).off("click.zf.dropdown")
            }
        }]), e
    }();
    mt.defaults = {
        parentClass: null,
        hoverDelay: 250,
        hover: !1,
        hoverPane: !1,
        vOffset: 0,
        hOffset: 0,
        position: "auto",
        alignment: "auto",
        allowOverlap: !1,
        allowBottomOverlap: !0,
        trapFocus: !1,
        autoFocus: !1,
        closeOnClick: !1
    };
    var vt = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, nt), l(e, [{
            key: "_setup",
            value: function(t, i) {
                this.$element = t, this.options = s.a.extend({}, e.defaults, this.$element.data(), i), this.className = "DropdownMenu", this._init(), O.register("DropdownMenu", {
                    ENTER: "open",
                    SPACE: "open",
                    ARROW_RIGHT: "next",
                    ARROW_UP: "up",
                    ARROW_DOWN: "down",
                    ARROW_LEFT: "previous",
                    ESCAPE: "close"
                })
            }
        }, {
            key: "_init",
            value: function() {
                F.Feather(this.$element, "dropdown");
                var t = this.$element.find("li.is-dropdown-submenu-parent");
                this.$element.children(".is-dropdown-submenu-parent").children(".is-dropdown-submenu").addClass("first-sub"), this.$menuItems = this.$element.find('[role="menuitem"]'), this.$tabs = this.$element.children('[role="menuitem"]'), this.$tabs.find("ul.is-dropdown-submenu").addClass(this.options.verticalClass), "auto" === this.options.alignment ? this.$element.hasClass(this.options.rightClass) || f() || this.$element.parents(".top-bar-right").is("*") ? (this.options.alignment = "right", t.addClass("opens-left")) : (this.options.alignment = "left", t.addClass("opens-right")) : "right" === this.options.alignment ? t.addClass("opens-left") : t.addClass("opens-right"), this.changed = !1, this._events()
            }
        }, {
            key: "_isVertical",
            value: function() {
                return "block" === this.$tabs.css("display") || "column" === this.$element.css("flex-direction")
            }
        }, {
            key: "_isRtl",
            value: function() {
                return this.$element.hasClass("align-right") || f() && !this.$element.hasClass("align-left")
            }
        }, {
            key: "_events",
            value: function() {
                var t = this,
                    e = "ontouchstart" in window || void 0 !== window.ontouchstart,
                    i = "is-dropdown-submenu-parent";
                (this.options.clickOpen || e) && this.$menuItems.on("click.zf.dropdownmenu touchstart.zf.dropdownmenu", function(n) {
                    var o = s()(n.target).parentsUntil("ul", ".".concat(i)),
                        a = o.hasClass(i),
                        r = "true" === o.attr("data-is-click"),
                        l = o.children(".is-dropdown-submenu");
                    if (a)
                        if (r) {
                            if (!t.options.closeOnClick || !t.options.clickOpen && !e || t.options.forceFollow && e) return;
                            n.stopImmediatePropagation(), n.preventDefault(), t._hide(o)
                        } else n.preventDefault(), n.stopImmediatePropagation(), t._show(l), o.add(o.parentsUntil(t.$element, ".".concat(i))).attr("data-is-click", !0)
                }), t.options.closeOnClickInside && this.$menuItems.on("click.zf.dropdownmenu", function(e) {
                    s()(this).hasClass(i) || t._hide()
                }), this.options.disableHover || this.$menuItems.on("mouseenter.zf.dropdownmenu", function(e) {
                    var n = s()(this);
                    n.hasClass(i) && (clearTimeout(n.data("_delay")), n.data("_delay", setTimeout(function() {
                        t._show(n.children(".is-dropdown-submenu"))
                    }, t.options.hoverDelay)))
                }).on("mouseleave.zf.dropdownMenu", b(function(e) {
                    var n = s()(this);
                    if (n.hasClass(i) && t.options.autoclose) {
                        if ("true" === n.attr("data-is-click") && t.options.clickOpen) return !1;
                        clearTimeout(n.data("_delay")), n.data("_delay", setTimeout(function() {
                            t._hide(n)
                        }, t.options.closingTime))
                    }
                })), this.$menuItems.on("keydown.zf.dropdownmenu", function(e) {
                    var i, n, o = s()(e.target).parentsUntil("ul", '[role="menuitem"]'),
                        a = t.$tabs.index(o) > -1,
                        r = a ? t.$tabs : o.siblings("li").add(o);
                    r.each(function(t) {
                        if (s()(this).is(o)) return i = r.eq(t - 1), void(n = r.eq(t + 1))
                    });
                    var l = function() {
                            n.children("a:first").focus(), e.preventDefault()
                        },
                        c = function() {
                            i.children("a:first").focus(), e.preventDefault()
                        },
                        h = function() {
                            var i = o.children("ul.is-dropdown-submenu");
                            i.length && (t._show(i), o.find("li > a:first").focus(), e.preventDefault())
                        },
                        u = function() {
                            var i = o.parent("ul").parent("li");
                            i.children("a:first").focus(), t._hide(i), e.preventDefault()
                        },
                        d = {
                            open: h,
                            close: function() {
                                t._hide(t.$element), t.$menuItems.eq(0).children("a").focus(), e.preventDefault()
                            },
                            handled: function() {
                                e.stopImmediatePropagation()
                            }
                        };
                    a ? t._isVertical() ? t._isRtl() ? s.a.extend(d, {
                        down: l,
                        up: c,
                        next: u,
                        previous: h
                    }) : s.a.extend(d, {
                        down: l,
                        up: c,
                        next: h,
                        previous: u
                    }) : t._isRtl() ? s.a.extend(d, {
                        next: c,
                        previous: l,
                        down: h,
                        up: u
                    }) : s.a.extend(d, {
                        next: l,
                        previous: c,
                        down: h,
                        up: u
                    }) : t._isRtl() ? s.a.extend(d, {
                        next: u,
                        previous: h,
                        down: l,
                        up: c
                    }) : s.a.extend(d, {
                        next: h,
                        previous: u,
                        down: l,
                        up: c
                    }), O.handleKey(e, "DropdownMenu", d)
                })
            }
        }, {
            key: "_addBodyHandler",
            value: function() {
                var t = s()(document.body),
                    e = this;
                t.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu").on("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu", function(i) {
                    e.$element.find(i.target).length || (e._hide(), t.off("mouseup.zf.dropdownmenu touchend.zf.dropdownmenu"))
                })
            }
        }, {
            key: "_show",
            value: function(t) {
                var e = this.$tabs.index(this.$tabs.filter(function(e, i) {
                        return s()(i).find(t).length > 0
                    })),
                    i = t.parent("li.is-dropdown-submenu-parent").siblings("li.is-dropdown-submenu-parent");
                this._hide(i, e), t.css("visibility", "hidden").addClass("js-dropdown-active").parent("li.is-dropdown-submenu-parent").addClass("is-active");
                var n = C.ImNotTouchingYou(t, null, !0);
                if (!n) {
                    var o = "left" === this.options.alignment ? "-right" : "-left",
                        a = t.parent(".is-dropdown-submenu-parent");
                    a.removeClass("opens".concat(o)).addClass("opens-".concat(this.options.alignment)), (n = C.ImNotTouchingYou(t, null, !0)) || a.removeClass("opens-".concat(this.options.alignment)).addClass("opens-inner"), this.changed = !0
                }
                t.css("visibility", ""), this.options.closeOnClick && this._addBodyHandler(), this.$element.trigger("show.zf.dropdownmenu", [t])
            }
        }, {
            key: "_hide",
            value: function(t, e) {
                var i;
                if ((i = t && t.length ? t : void 0 !== e ? this.$tabs.not(function(t, i) {
                        return t === e
                    }) : this.$element).hasClass("is-active") || i.find(".is-active").length > 0) {
                    if (i.find("li.is-active").add(i).attr({
                            "data-is-click": !1
                        }).removeClass("is-active"), i.find("ul.js-dropdown-active").removeClass("js-dropdown-active"), this.changed || i.find("opens-inner").length) {
                        var n = "left" === this.options.alignment ? "right" : "left";
                        i.find("li.is-dropdown-submenu-parent").add(i).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(n)), this.changed = !1
                    }
                    this.$element.trigger("hide.zf.dropdownmenu", [i])
                }
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$menuItems.off(".zf.dropdownmenu").removeAttr("data-is-click").removeClass("is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner"), s()(document.body).off(".zf.dropdownmenu"), F.Burn(this.$element, "dropdown")
            }
        }]), e
    }();
    vt.defaults = {
        disableHover: !1,
        autoclose: !0,
        hoverDelay: 50,
        clickOpen: !1,
        closingTime: 500,
        alignment: "auto",
        closeOnClick: !0,
        closeOnClickInside: !0,
        verticalClass: "vertical",
        rightClass: "align-right",
        forceFollow: !0
    };
    var yt = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, nt), l(e, [{
            key: "_setup",
            value: function(t, i) {
                this.$element = t, this.options = s.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Equalizer", this._init()
            }
        }, {
            key: "_init",
            value: function() {
                var t = this.$element.attr("data-equalizer") || "",
                    e = this.$element.find('[data-equalizer-watch="'.concat(t, '"]'));
                w._init(), this.$watched = e.length ? e : this.$element.find("[data-equalizer-watch]"), this.$element.attr("data-resize", t || g(6, "eq")), this.$element.attr("data-mutate", t || g(6, "eq")), this.hasNested = this.$element.find("[data-equalizer]").length > 0, this.isNested = this.$element.parentsUntil(document.body, "[data-equalizer]").length > 0, this.isOn = !1, this._bindHandler = {
                    onResizeMeBound: this._onResizeMe.bind(this),
                    onPostEqualizedBound: this._onPostEqualized.bind(this)
                };
                var i, n = this.$element.find("img");
                this.options.equalizeOn ? (i = this._checkMQ(), s()(window).on("changed.zf.mediaquery", this._checkMQ.bind(this))) : this._events(), (void 0 !== i && !1 === i || void 0 === i) && (n.length ? S(n, this._reflow.bind(this)) : this._reflow())
            }
        }, {
            key: "_pauseEvents",
            value: function() {
                this.isOn = !1, this.$element.off({
                    ".zf.equalizer": this._bindHandler.onPostEqualizedBound,
                    "resizeme.zf.trigger": this._bindHandler.onResizeMeBound,
                    "mutateme.zf.trigger": this._bindHandler.onResizeMeBound
                })
            }
        }, {
            key: "_onResizeMe",
            value: function(t) {
                this._reflow()
            }
        }, {
            key: "_onPostEqualized",
            value: function(t) {
                t.target !== this.$element[0] && this._reflow()
            }
        }, {
            key: "_events",
            value: function() {
                this._pauseEvents(), this.hasNested ? this.$element.on("postequalized.zf.equalizer", this._bindHandler.onPostEqualizedBound) : (this.$element.on("resizeme.zf.trigger", this._bindHandler.onResizeMeBound), this.$element.on("mutateme.zf.trigger", this._bindHandler.onResizeMeBound)), this.isOn = !0
            }
        }, {
            key: "_checkMQ",
            value: function() {
                var t = !w.is(this.options.equalizeOn);
                return t ? this.isOn && (this._pauseEvents(), this.$watched.css("height", "auto")) : this.isOn || this._events(), t
            }
        }, {
            key: "_killswitch",
            value: function() {}
        }, {
            key: "_reflow",
            value: function() {
                if (!this.options.equalizeOnStack && this._isStacked()) return this.$watched.css("height", "auto"), !1;
                this.options.equalizeByRow ? this.getHeightsByRow(this.applyHeightByRow.bind(this)) : this.getHeights(this.applyHeight.bind(this))
            }
        }, {
            key: "_isStacked",
            value: function() {
                return !this.$watched[0] || !this.$watched[1] || this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top
            }
        }, {
            key: "getHeights",
            value: function(t) {
                for (var e = [], i = 0, n = this.$watched.length; i < n; i++) this.$watched[i].style.height = "auto", e.push(this.$watched[i].offsetHeight);
                t(e)
            }
        }, {
            key: "getHeightsByRow",
            value: function(t) {
                var e = this.$watched.length ? this.$watched.first().offset().top : 0,
                    i = [],
                    n = 0;
                i[n] = [];
                for (var o = 0, a = this.$watched.length; o < a; o++) {
                    this.$watched[o].style.height = "auto";
                    var r = s()(this.$watched[o]).offset().top;
                    r != e && (i[++n] = [], e = r), i[n].push([this.$watched[o], this.$watched[o].offsetHeight])
                }
                for (var l = 0, c = i.length; l < c; l++) {
                    var h = s()(i[l]).map(function() {
                            return this[1]
                        }).get(),
                        u = Math.max.apply(null, h);
                    i[l].push(u)
                }
                t(i)
            }
        }, {
            key: "applyHeight",
            value: function(t) {
                var e = Math.max.apply(null, t);
                this.$element.trigger("preequalized.zf.equalizer"), this.$watched.css("height", e), this.$element.trigger("postequalized.zf.equalizer")
            }
        }, {
            key: "applyHeightByRow",
            value: function(t) {
                this.$element.trigger("preequalized.zf.equalizer");
                for (var e = 0, i = t.length; e < i; e++) {
                    var n = t[e].length,
                        o = t[e][n - 1];
                    if (n <= 2) s()(t[e][0][0]).css({
                        height: "auto"
                    });
                    else {
                        this.$element.trigger("preequalizedrow.zf.equalizer");
                        for (var a = 0, r = n - 1; a < r; a++) s()(t[e][a][0]).css({
                            height: o
                        });
                        this.$element.trigger("postequalizedrow.zf.equalizer")
                    }
                }
                this.$element.trigger("postequalized.zf.equalizer")
            }
        }, {
            key: "_destroy",
            value: function() {
                this._pauseEvents(), this.$watched.css("height", "auto")
            }
        }]), e
    }();
    yt.defaults = {
        equalizeOnStack: !1,
        equalizeByRow: !1,
        equalizeOn: ""
    };
    var bt = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, nt), l(e, [{
            key: "_setup",
            value: function(t, i) {
                this.$element = t, this.options = s.a.extend({}, e.defaults, i), this.rules = [], this.currentPath = "", this.className = "Interchange", this._init(), this._events()
            }
        }, {
            key: "_init",
            value: function() {
                w._init();
                var t = this.$element[0].id || g(6, "interchange");
                this.$element.attr({
                    "data-resize": t,
                    id: t
                }), this._addBreakpoints(), this._generateRules(), this._reflow()
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function() {
                    return t._reflow()
                })
            }
        }, {
            key: "_reflow",
            value: function() {
                var t;
                for (var e in this.rules)
                    if (this.rules.hasOwnProperty(e)) {
                        var i = this.rules[e];
                        window.matchMedia(i.query).matches && (t = i)
                    } t && this.replace(t.path)
            }
        }, {
            key: "_addBreakpoints",
            value: function() {
                for (var t in w.queries)
                    if (w.queries.hasOwnProperty(t)) {
                        var i = w.queries[t];
                        e.SPECIAL_QUERIES[i.name] = i.value
                    }
            }
        }, {
            key: "_generateRules",
            value: function(t) {
                var i, n = [];
                for (var s in i = "string" == typeof(i = this.options.rules ? this.options.rules : this.$element.data("interchange")) ? i.match(/\[.*?, .*?\]/g) : i)
                    if (i.hasOwnProperty(s)) {
                        var o = i[s].slice(1, -1).split(", "),
                            a = o.slice(0, -1).join(""),
                            r = o[o.length - 1];
                        e.SPECIAL_QUERIES[r] && (r = e.SPECIAL_QUERIES[r]), n.push({
                            path: a,
                            query: r
                        })
                    } this.rules = n
            }
        }, {
            key: "replace",
            value: function(t) {
                if (this.currentPath !== t) {
                    var e = this,
                        i = "replaced.zf.interchange";
                    "IMG" === this.$element[0].nodeName ? this.$element.attr("src", t).on("load", function() {
                        e.currentPath = t
                    }).trigger(i) : t.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i) ? (t = t.replace(/\(/g, "%28").replace(/\)/g, "%29"), this.$element.css({
                        "background-image": "url(" + t + ")"
                    }).trigger(i)) : s.a.get(t, function(n) {
                        e.$element.html(n).trigger(i), s()(n).foundation(), e.currentPath = t
                    })
                }
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.off("resizeme.zf.trigger")
            }
        }]), e
    }();
    bt.defaults = {
        rules: null
    }, bt.SPECIAL_QUERIES = {
        landscape: "screen and (orientation: landscape)",
        portrait: "screen and (orientation: portrait)",
        retina: "only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)"
    };
    var wt = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, nt), l(e, [{
            key: "_setup",
            value: function(t, i) {
                this.$element = t, this.options = s.a.extend({}, e.defaults, this.$element.data(), i), this.className = "SmoothScroll", this._init()
            }
        }, {
            key: "_init",
            value: function() {
                var t = this.$element[0].id || g(6, "smooth-scroll");
                this.$element.attr({
                    id: t
                }), this._events()
            }
        }, {
            key: "_events",
            value: function() {
                this._linkClickListener = this._handleLinkClick.bind(this), this.$element.on("click.zf.smoothScroll", this._linkClickListener), this.$element.on("click.zf.smoothScroll", 'a[href^="#"]', this._linkClickListener)
            }
        }, {
            key: "_handleLinkClick",
            value: function(t) {
                var i = this;
                if (s()(t.currentTarget).is('a[href^="#"]')) {
                    var n = t.currentTarget.getAttribute("href");
                    this._inTransition = !0, e.scrollToLoc(n, this.options, function() {
                        i._inTransition = !1
                    }), t.preventDefault()
                }
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.off("click.zf.smoothScroll", this._linkClickListener), this.$element.off("click.zf.smoothScroll", 'a[href^="#"]', this._linkClickListener)
            }
        }], [{
            key: "scrollToLoc",
            value: function(t) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.defaults,
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    o = s()(t);
                if (!o.length) return !1;
                var a = Math.round(o.offset().top - i.threshold / 2 - i.offset);
                s()("html, body").stop(!0).animate({
                    scrollTop: a
                }, i.animationDuration, i.animationEasing, function() {
                    "function" == typeof n && n()
                })
            }
        }]), e
    }();
    wt.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        offset: 0
    };
    var xt = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, nt), l(e, [{
            key: "_setup",
            value: function(t, i) {
                this.$element = t, this.options = s.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Magellan", this._init(), this.calcPoints()
            }
        }, {
            key: "_init",
            value: function() {
                var t = this.$element[0].id || g(6, "magellan");
                this.$targets = s()("[data-magellan-target]"), this.$links = this.$element.find("a"), this.$element.attr({
                    "data-resize": t,
                    "data-scroll": t,
                    id: t
                }), this.$active = s()(), this.scrollPos = parseInt(window.pageYOffset, 10), this._events()
            }
        }, {
            key: "calcPoints",
            value: function() {
                var t = this,
                    e = document.body,
                    i = document.documentElement;
                this.points = [], this.winHeight = Math.round(Math.max(window.innerHeight, i.clientHeight)), this.docHeight = Math.round(Math.max(e.scrollHeight, e.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight)), this.$targets.each(function() {
                    var e = s()(this),
                        i = Math.round(e.offset().top - t.options.threshold);
                    e.targetPoint = i, t.points.push(i)
                })
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                s()("html, body"), t.options.animationDuration, t.options.animationEasing;
                s()(window).one("load", function() {
                    t.options.deepLinking && location.hash && t.scrollToLoc(location.hash), t.calcPoints(), t._updateActive()
                }), t.onLoadListener = y(s()(window), function() {
                    t.$element.on({
                        "resizeme.zf.trigger": t.reflow.bind(t),
                        "scrollme.zf.trigger": t._updateActive.bind(t)
                    }).on("click.zf.magellan", 'a[href^="#"]', function(e) {
                        e.preventDefault();
                        var i = this.getAttribute("href");
                        t.scrollToLoc(i)
                    })
                }), this._deepLinkScroll = function(e) {
                    t.options.deepLinking && t.scrollToLoc(window.location.hash)
                }, s()(window).on("hashchange", this._deepLinkScroll)
            }
        }, {
            key: "scrollToLoc",
            value: function(t) {
                this._inTransition = !0;
                var e = this,
                    i = {
                        animationEasing: this.options.animationEasing,
                        animationDuration: this.options.animationDuration,
                        threshold: this.options.threshold,
                        offset: this.options.offset
                    };
                wt.scrollToLoc(t, i, function() {
                    e._inTransition = !1
                })
            }
        }, {
            key: "reflow",
            value: function() {
                this.calcPoints(), this._updateActive()
            }
        }, {
            key: "_updateActive",
            value: function() {
                var t = this;
                if (!this._inTransition) {
                    var e, i = parseInt(window.pageYOffset, 10),
                        n = this.scrollPos > i;
                    if (this.scrollPos = i, i < this.points[0]);
                    else if (i + this.winHeight === this.docHeight) e = this.points.length - 1;
                    else {
                        var o = this.points.filter(function(e, s) {
                            return e - t.options.offset - (n ? t.options.threshold : 0) <= i
                        });
                        e = o.length ? o.length - 1 : 0
                    }
                    var a = this.$active,
                        r = "";
                    void 0 !== e ? (this.$active = this.$links.filter('[href="#' + this.$targets.eq(e).data("magellan-target") + '"]'), this.$active.length && (r = this.$active[0].getAttribute("href"))) : this.$active = s()();
                    var l = !(!this.$active.length && !a.length || this.$active.is(a)),
                        c = r !== window.location.hash;
                    if (l && (a.removeClass(this.options.activeClass), this.$active.addClass(this.options.activeClass)), this.options.deepLinking && c)
                        if (window.history.pushState) {
                            var h = r || window.location.pathname + window.location.search;
                            window.history.pushState(null, null, h)
                        } else window.location.hash = r;
                    l && this.$element.trigger("update.zf.magellan", [this.$active])
                }
            }
        }, {
            key: "_destroy",
            value: function() {
                if (this.$element.off(".zf.trigger .zf.magellan").find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass), this.options.deepLinking) {
                    var t = this.$active[0].getAttribute("href");
                    window.location.hash.replace(t, "")
                }
                s()(window).off("hashchange", this._deepLinkScroll), this.onLoadListener && s()(window).off(this.onLoadListener)
            }
        }]), e
    }();
    xt.defaults = {
        animationDuration: 500,
        animationEasing: "linear",
        threshold: 50,
        activeClass: "is-active",
        deepLinking: !1,
        offset: 0
    };
    var _t = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, nt), l(e, [{
            key: "_setup",
            value: function(t, i) {
                var n = this;
                this.className = "OffCanvas", this.$element = t, this.options = s.a.extend({}, e.defaults, this.$element.data(), i), this.contentClasses = {
                    base: [],
                    reveal: []
                }, this.$lastTrigger = s()(), this.$triggers = s()(), this.position = "left", this.$content = s()(), this.nested = !!this.options.nested, s()(["push", "overlap"]).each(function(t, e) {
                    n.contentClasses.base.push("has-transition-" + e)
                }), s()(["left", "right", "top", "bottom"]).each(function(t, e) {
                    n.contentClasses.base.push("has-position-" + e), n.contentClasses.reveal.push("has-reveal-" + e)
                }), et.init(s.a), w._init(), this._init(), this._events(), O.register("OffCanvas", {
                    ESCAPE: "close"
                })
            }
        }, {
            key: "_init",
            value: function() {
                var t = this.$element.attr("id");
                if (this.$element.attr("aria-hidden", "true"), this.options.contentId ? this.$content = s()("#" + this.options.contentId) : this.$element.siblings("[data-off-canvas-content]").length ? this.$content = this.$element.siblings("[data-off-canvas-content]").first() : this.$content = this.$element.closest("[data-off-canvas-content]").first(), this.options.contentId ? this.options.contentId && null === this.options.nested && console.warn("Remember to use the nested option if using the content ID option!") : this.nested = 0 === this.$element.siblings("[data-off-canvas-content]").length, !0 === this.nested && (this.options.transition = "overlap", this.$element.removeClass("is-transition-push")), this.$element.addClass("is-transition-".concat(this.options.transition, " is-closed")), this.$triggers = s()(document).find('[data-open="' + t + '"], [data-close="' + t + '"], [data-toggle="' + t + '"]').attr("aria-expanded", "false").attr("aria-controls", t), this.position = this.$element.is(".position-left, .position-top, .position-right, .position-bottom") ? this.$element.attr("class").match(/position\-(left|top|right|bottom)/)[1] : this.position, !0 === this.options.contentOverlay) {
                    var e = document.createElement("div"),
                        i = "fixed" === s()(this.$element).css("position") ? "is-overlay-fixed" : "is-overlay-absolute";
                    e.setAttribute("class", "js-off-canvas-overlay " + i), this.$overlay = s()(e), "is-overlay-fixed" === i ? s()(this.$overlay).insertAfter(this.$element) : this.$content.append(this.$overlay)
                }
                var n = new RegExp(m(this.options.revealClass) + "([^\\s]+)", "g").exec(this.$element[0].className);
                n && (this.options.isRevealed = !0, this.options.revealOn = this.options.revealOn || n[1]), !0 === this.options.isRevealed && this.options.revealOn && (this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn)), this._setMQChecker()), this.options.transitionTime && this.$element.css("transition-duration", this.options.transitionTime), this._removeContentClasses()
            }
        }, {
            key: "_events",
            value: function() {
                (this.$element.off(".zf.trigger .zf.offcanvas").on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": this.close.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "keydown.zf.offcanvas": this._handleKeyboard.bind(this)
                }), !0 === this.options.closeOnClick) && (this.options.contentOverlay ? this.$overlay : this.$content).on({
                    "click.zf.offcanvas": this.close.bind(this)
                })
            }
        }, {
            key: "_setMQChecker",
            value: function() {
                var t = this;
                this.onLoadListener = y(s()(window), function() {
                    w.atLeast(t.options.revealOn) && t.reveal(!0)
                }), s()(window).on("changed.zf.mediaquery", function() {
                    w.atLeast(t.options.revealOn) ? t.reveal(!0) : t.reveal(!1)
                })
            }
        }, {
            key: "_removeContentClasses",
            value: function(t) {
                "boolean" != typeof t ? this.$content.removeClass(this.contentClasses.base.join(" ")) : !1 === t && this.$content.removeClass("has-reveal-".concat(this.position))
            }
        }, {
            key: "_addContentClasses",
            value: function(t) {
                this._removeContentClasses(t), "boolean" != typeof t ? this.$content.addClass("has-transition-".concat(this.options.transition, " has-position-").concat(this.position)) : !0 === t && this.$content.addClass("has-reveal-".concat(this.position))
            }
        }, {
            key: "reveal",
            value: function(t) {
                t ? (this.close(), this.isRevealed = !0, this.$element.attr("aria-hidden", "false"), this.$element.off("open.zf.trigger toggle.zf.trigger"), this.$element.removeClass("is-closed")) : (this.isRevealed = !1, this.$element.attr("aria-hidden", "true"), this.$element.off("open.zf.trigger toggle.zf.trigger").on({
                    "open.zf.trigger": this.open.bind(this),
                    "toggle.zf.trigger": this.toggle.bind(this)
                }), this.$element.addClass("is-closed")), this._addContentClasses(t)
            }
        }, {
            key: "_stopScrolling",
            value: function(t) {
                return !1
            }
        }, {
            key: "_recordScrollable",
            value: function(t) {
                this.scrollHeight !== this.clientHeight && (0 === this.scrollTop && (this.scrollTop = 1), this.scrollTop === this.scrollHeight - this.clientHeight && (this.scrollTop = this.scrollHeight - this.clientHeight - 1)), this.allowUp = this.scrollTop > 0, this.allowDown = this.scrollTop < this.scrollHeight - this.clientHeight, this.lastY = t.originalEvent.pageY
            }
        }, {
            key: "_stopScrollPropagation",
            value: function(t) {
                var e = t.pageY < this.lastY,
                    i = !e;
                this.lastY = t.pageY, e && this.allowUp || i && this.allowDown ? t.stopPropagation() : t.preventDefault()
            }
        }, {
            key: "open",
            value: function(t, e) {
                if (!this.$element.hasClass("is-open") && !this.isRevealed) {
                    var i = this;
                    e && (this.$lastTrigger = e), "top" === this.options.forceTo ? window.scrollTo(0, 0) : "bottom" === this.options.forceTo && window.scrollTo(0, document.body.scrollHeight), this.options.transitionTime && "overlap" !== this.options.transition ? this.$element.siblings("[data-off-canvas-content]").css("transition-duration", this.options.transitionTime) : this.$element.siblings("[data-off-canvas-content]").css("transition-duration", ""), this.$element.addClass("is-open").removeClass("is-closed"), this.$triggers.attr("aria-expanded", "true"), this.$element.attr("aria-hidden", "false"), this.$content.addClass("is-open-" + this.position), !1 === this.options.contentScroll && (s()("body").addClass("is-off-canvas-open").on("touchmove", this._stopScrolling), this.$element.on("touchstart", this._recordScrollable), this.$element.on("touchmove", this._stopScrollPropagation)), !0 === this.options.contentOverlay && this.$overlay.addClass("is-visible"), !0 === this.options.closeOnClick && !0 === this.options.contentOverlay && this.$overlay.addClass("is-closable"), !0 === this.options.autoFocus && this.$element.one(v(this.$element), function() {
                        if (i.$element.hasClass("is-open")) {
                            var t = i.$element.find("[data-autofocus]");
                            t.length ? t.eq(0).focus() : i.$element.find("a, button").eq(0).focus()
                        }
                    }), !0 === this.options.trapFocus && (this.$content.attr("tabindex", "-1"), O.trapFocus(this.$element)), this._addContentClasses(), this.$element.trigger("opened.zf.offcanvas")
                }
            }
        }, {
            key: "close",
            value: function(t) {
                if (this.$element.hasClass("is-open") && !this.isRevealed) {
                    var e = this;
                    this.$element.removeClass("is-open"), this.$element.attr("aria-hidden", "true").trigger("closed.zf.offcanvas"), this.$content.removeClass("is-open-left is-open-top is-open-right is-open-bottom"), !1 === this.options.contentScroll && (s()("body").removeClass("is-off-canvas-open").off("touchmove", this._stopScrolling), this.$element.off("touchstart", this._recordScrollable), this.$element.off("touchmove", this._stopScrollPropagation)), !0 === this.options.contentOverlay && this.$overlay.removeClass("is-visible"), !0 === this.options.closeOnClick && !0 === this.options.contentOverlay && this.$overlay.removeClass("is-closable"), this.$triggers.attr("aria-expanded", "false"), !0 === this.options.trapFocus && (this.$content.removeAttr("tabindex"), O.releaseFocus(this.$element)), this.$element.one(v(this.$element), function(t) {
                        e.$element.addClass("is-closed"), e._removeContentClasses()
                    })
                }
            }
        }, {
            key: "toggle",
            value: function(t, e) {
                this.$element.hasClass("is-open") ? this.close(t, e) : this.open(t, e)
            }
        }, {
            key: "_handleKeyboard",
            value: function(t) {
                var e = this;
                O.handleKey(t, "OffCanvas", {
                    close: function() {
                        return e.close(), e.$lastTrigger.focus(), !0
                    },
                    handled: function() {
                        t.stopPropagation(), t.preventDefault()
                    }
                })
            }
        }, {
            key: "_destroy",
            value: function() {
                this.close(), this.$element.off(".zf.trigger .zf.offcanvas"), this.$overlay.off(".zf.offcanvas"), this.onLoadListener && s()(window).off(this.onLoadListener)
            }
        }]), e
    }();
    _t.defaults = {
        closeOnClick: !0,
        contentOverlay: !0,
        contentId: null,
        nested: null,
        contentScroll: !0,
        transitionTime: null,
        transition: "push",
        forceTo: null,
        isRevealed: !1,
        revealOn: null,
        autoFocus: !0,
        revealClass: "reveal-for-",
        trapFocus: !1
    };
    var kt = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, nt), l(e, [{
            key: "_setup",
            value: function(t, i) {
                this.$element = t, this.options = s.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Orbit", Y.init(s.a), this._init(), O.register("Orbit", {
                    ltr: {
                        ARROW_RIGHT: "next",
                        ARROW_LEFT: "previous"
                    },
                    rtl: {
                        ARROW_LEFT: "next",
                        ARROW_RIGHT: "previous"
                    }
                })
            }
        }, {
            key: "_init",
            value: function() {
                this._reset(), this.$wrapper = this.$element.find(".".concat(this.options.containerClass)), this.$slides = this.$element.find(".".concat(this.options.slideClass));
                var t = this.$element.find("img"),
                    e = this.$slides.filter(".is-active"),
                    i = this.$element[0].id || g(6, "orbit");
                this.$element.attr({
                    "data-resize": i,
                    id: i
                }), e.length || this.$slides.eq(0).addClass("is-active"), this.options.useMUI || this.$slides.addClass("no-motionui"), t.length ? S(t, this._prepareForOrbit.bind(this)) : this._prepareForOrbit(), this.options.bullets && this._loadBullets(), this._events(), this.options.autoPlay && this.$slides.length > 1 && this.geoSync(), this.options.accessible && this.$wrapper.attr("tabindex", 0)
            }
        }, {
            key: "_loadBullets",
            value: function() {
                this.$bullets = this.$element.find(".".concat(this.options.boxOfBullets)).find("button")
            }
        }, {
            key: "geoSync",
            value: function() {
                var t = this;
                this.timer = new N(this.$element, {
                    duration: this.options.timerDelay,
                    infinite: !1
                }, function() {
                    t.changeSlide(!0)
                }), this.timer.start()
            }
        }, {
            key: "_prepareForOrbit",
            value: function() {
                this._setWrapperHeight()
            }
        }, {
            key: "_setWrapperHeight",
            value: function(t) {
                var e, i = 0,
                    n = 0,
                    o = this;
                this.$slides.each(function() {
                    e = this.getBoundingClientRect().height, s()(this).attr("data-slide", n), /mui/g.test(s()(this)[0].className) || o.$slides.filter(".is-active")[0] === o.$slides.eq(n)[0] || s()(this).css({
                        display: "none"
                    }), i = e > i ? e : i, n++
                }), n === this.$slides.length && (this.$wrapper.css({
                    height: i
                }), t && t(i))
            }
        }, {
            key: "_setSlideHeight",
            value: function(t) {
                this.$slides.each(function() {
                    s()(this).css("max-height", t)
                })
            }
        }, {
            key: "_events",
            value: function() {
                var t = this;
                if (this.$element.off(".resizeme.zf.trigger").on({
                        "resizeme.zf.trigger": this._prepareForOrbit.bind(this)
                    }), this.$slides.length > 1) {
                    if (this.options.swipe && this.$slides.off("swipeleft.zf.orbit swiperight.zf.orbit").on("swipeleft.zf.orbit", function(e) {
                            e.preventDefault(), t.changeSlide(!0)
                        }).on("swiperight.zf.orbit", function(e) {
                            e.preventDefault(), t.changeSlide(!1)
                        }), this.options.autoPlay && (this.$slides.on("click.zf.orbit", function() {
                            t.$element.data("clickedOn", !t.$element.data("clickedOn")), t.timer[t.$element.data("clickedOn") ? "pause" : "start"]()
                        }), this.options.pauseOnHover && this.$element.on("mouseenter.zf.orbit", function() {
                            t.timer.pause()
                        }).on("mouseleave.zf.orbit", function() {
                            t.$element.data("clickedOn") || t.timer.start()
                        })), this.options.navButtons) this.$element.find(".".concat(this.options.nextClass, ", .").concat(this.options.prevClass)).attr("tabindex", 0).on("click.zf.orbit touchend.zf.orbit", function(e) {
                        e.preventDefault(), t.changeSlide(s()(this).hasClass(t.options.nextClass))
                    });
                    this.options.bullets && this.$bullets.on("click.zf.orbit touchend.zf.orbit", function() {
                        if (/is-active/g.test(this.className)) return !1;
                        var e = s()(this).data("slide"),
                            i = e > t.$slides.filter(".is-active").data("slide"),
                            n = t.$slides.eq(e);
                        t.changeSlide(i, n, e)
                    }), this.options.accessible && this.$wrapper.add(this.$bullets).on("keydown.zf.orbit", function(e) {
                        O.handleKey(e, "Orbit", {
                            next: function() {
                                t.changeSlide(!0)
                            },
                            previous: function() {
                                t.changeSlide(!1)
                            },
                            handled: function() {
                                s()(e.target).is(t.$bullets) && t.$bullets.filter(".is-active").focus()
                            }
                        })
                    })
                }
            }
        }, {
            key: "_reset",
            value: function() {
                void 0 !== this.$slides && this.$slides.length > 1 && (this.$element.off(".zf.orbit").find("*").off(".zf.orbit"), this.options.autoPlay && this.timer.restart(), this.$slides.each(function(t) {
                    s()(t).removeClass("is-active is-active is-in").removeAttr("aria-live").hide()
                }), this.$slides.first().addClass("is-active").show(), this.$element.trigger("slidechange.zf.orbit", [this.$slides.first()]), this.options.bullets && this._updateBullets(0))
            }
        }, {
            key: "changeSlide",
            value: function(t, e, i) {
                if (this.$slides) {
                    var n = this.$slides.filter(".is-active").eq(0);
                    if (/mui/g.test(n[0].className)) return !1;
                    var s, o = this.$slides.first(),
                        a = this.$slides.last(),
                        r = t ? "Right" : "Left",
                        l = t ? "Left" : "Right",
                        c = this;
                    (s = e || (t ? this.options.infiniteWrap ? n.next(".".concat(this.options.slideClass)).length ? n.next(".".concat(this.options.slideClass)) : o : n.next(".".concat(this.options.slideClass)) : this.options.infiniteWrap ? n.prev(".".concat(this.options.slideClass)).length ? n.prev(".".concat(this.options.slideClass)) : a : n.prev(".".concat(this.options.slideClass)))).length && (this.$element.trigger("beforeslidechange.zf.orbit", [n, s]), this.options.bullets && (i = i || this.$slides.index(s), this._updateBullets(i)), this.options.useMUI && !this.$element.is(":hidden") ? (I.animateIn(s.addClass("is-active"), this.options["animInFrom".concat(r)], function() {
                        s.css({
                            display: "block"
                        }).attr("aria-live", "polite")
                    }), I.animateOut(n.removeClass("is-active"), this.options["animOutTo".concat(l)], function() {
                        n.removeAttr("aria-live"), c.options.autoPlay && !c.timer.isPaused && c.timer.restart()
                    })) : (n.removeClass("is-active is-in").removeAttr("aria-live").hide(), s.addClass("is-active is-in").attr("aria-live", "polite").show(), this.options.autoPlay && !this.timer.isPaused && this.timer.restart()), this.$element.trigger("slidechange.zf.orbit", [s]))
                }
            }
        }, {
            key: "_updateBullets",
            value: function(t) {
                var e = this.$element.find(".".concat(this.options.boxOfBullets)).find(".is-active").removeClass("is-active").blur().find("span:last").detach();
                this.$bullets.eq(t).addClass("is-active").append(e)
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.off(".zf.orbit").find("*").off(".zf.orbit").end().hide()
            }
        }]), e
    }();
    kt.defaults = {
        bullets: !0,
        navButtons: !0,
        animInFromRight: "slide-in-right",
        animOutToRight: "slide-out-right",
        animInFromLeft: "slide-in-left",
        animOutToLeft: "slide-out-left",
        autoPlay: !0,
        timerDelay: 5e3,
        infiniteWrap: !0,
        swipe: !0,
        pauseOnHover: !0,
        accessible: !0,
        containerClass: "orbit-container",
        slideClass: "orbit-slide",
        boxOfBullets: "orbit-bullets",
        nextClass: "orbit-next",
        prevClass: "orbit-previous",
        useMUI: !0
    };
    var Ct = {
            dropdown: {
                cssClass: "dropdown",
                plugin: vt
            },
            drilldown: {
                cssClass: "drilldown",
                plugin: ct
            },
            accordion: {
                cssClass: "accordion-menu",
                plugin: lt
            }
        },
        $t = function(t) {
            function e() {
                return a(this, e), d(this, h(e).apply(this, arguments))
            }
            return c(e, nt), l(e, [{
                key: "_setup",
                value: function(t, e) {
                    this.$element = s()(t), this.rules = this.$element.data("responsive-menu"), this.currentMq = null, this.currentPlugin = null, this.className = "ResponsiveMenu", this._init(), this._events()
                }
            }, {
                key: "_init",
                value: function() {
                    if (w._init(), "string" == typeof this.rules) {
                        for (var t = {}, e = this.rules.split(" "), i = 0; i < e.length; i++) {
                            var n = e[i].split("-"),
                                o = n.length > 1 ? n[0] : "small",
                                a = n.length > 1 ? n[1] : n[0];
                            null !== Ct[a] && (t[o] = Ct[a])
                        }
                        this.rules = t
                    }
                    s.a.isEmptyObject(this.rules) || this._checkMediaQueries(), this.$element.attr("data-mutate", this.$element.attr("data-mutate") || g(6, "responsive-menu"))
                }
            }, {
                key: "_events",
                value: function() {
                    var t = this;
                    s()(window).on("changed.zf.mediaquery", function() {
                        t._checkMediaQueries()
                    })
                }
            }, {
                key: "_checkMediaQueries",
                value: function() {
                    var t, e = this;
                    s.a.each(this.rules, function(e) {
                        w.atLeast(e) && (t = e)
                    }), t && (this.currentPlugin instanceof this.rules[t].plugin || (s.a.each(Ct, function(t, i) {
                        e.$element.removeClass(i.cssClass)
                    }), this.$element.addClass(this.rules[t].cssClass), this.currentPlugin && this.currentPlugin.destroy(), this.currentPlugin = new this.rules[t].plugin(this.$element, {})))
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.currentPlugin.destroy(), s()(window).off(".zf.ResponsiveMenu")
                }
            }]), e
        }();
    $t.defaults = {};
    var Tt = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, nt), l(e, [{
            key: "_setup",
            value: function(t, i) {
                this.$element = s()(t), this.options = s.a.extend({}, e.defaults, this.$element.data(), i), this.className = "ResponsiveToggle", this._init(), this._events()
            }
        }, {
            key: "_init",
            value: function() {
                w._init();
                var t = this.$element.data("responsive-toggle");
                if (t || console.error("Your tab bar needs an ID of a Menu as the value of data-tab-bar."), this.$targetMenu = s()("#".concat(t)), this.$toggler = this.$element.find("[data-toggle]").filter(function() {
                        var e = s()(this).data("toggle");
                        return e === t || "" === e
                    }), this.options = s.a.extend({}, this.options, this.$targetMenu.data()), this.options.animate) {
                    var e = this.options.animate.split(" ");
                    this.animationIn = e[0], this.animationOut = e[1] || null
                }
                this._update()
            }
        }, {
            key: "_events",
            value: function() {
                this._updateMqHandler = this._update.bind(this), s()(window).on("changed.zf.mediaquery", this._updateMqHandler), this.$toggler.on("click.zf.responsiveToggle", this.toggleMenu.bind(this))
            }
        }, {
            key: "_update",
            value: function() {
                w.atLeast(this.options.hideFor) ? (this.$element.hide(), this.$targetMenu.show()) : (this.$element.show(), this.$targetMenu.hide())
            }
        }, {
            key: "toggleMenu",
            value: function() {
                var t = this;
                w.atLeast(this.options.hideFor) || (this.options.animate ? this.$targetMenu.is(":hidden") ? I.animateIn(this.$targetMenu, this.animationIn, function() {
                    t.$element.trigger("toggled.zf.responsiveToggle"), t.$targetMenu.find("[data-mutate]").triggerHandler("mutateme.zf.trigger")
                }) : I.animateOut(this.$targetMenu, this.animationOut, function() {
                    t.$element.trigger("toggled.zf.responsiveToggle")
                }) : (this.$targetMenu.toggle(0), this.$targetMenu.find("[data-mutate]").trigger("mutateme.zf.trigger"), this.$element.trigger("toggled.zf.responsiveToggle")))
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.off(".zf.responsiveToggle"), this.$toggler.off(".zf.responsiveToggle"), s()(window).off("changed.zf.mediaquery", this._updateMqHandler)
            }
        }]), e
    }();
    Tt.defaults = {
        hideFor: "medium",
        animate: !1
    };
    var Dt = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, nt), l(e, [{
            key: "_setup",
            value: function(t, i) {
                this.$element = t, this.options = s.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Reveal", this._init(), et.init(s.a), O.register("Reveal", {
                    ESCAPE: "close"
                })
            }
        }, {
            key: "_init",
            value: function() {
                var t = this;
                w._init(), this.id = this.$element.attr("id"), this.isActive = !1, this.cached = {
                    mq: w.current
                }, this.$anchor = s()('[data-open="'.concat(this.id, '"]')).length ? s()('[data-open="'.concat(this.id, '"]')) : s()('[data-toggle="'.concat(this.id, '"]')), this.$anchor.attr({
                    "aria-controls": this.id,
                    "aria-haspopup": !0,
                    tabindex: 0
                }), (this.options.fullScreen || this.$element.hasClass("full")) && (this.options.fullScreen = !0, this.options.overlay = !1), this.options.overlay && !this.$overlay && (this.$overlay = this._makeOverlay(this.id)), this.$element.attr({
                    role: "dialog",
                    "aria-hidden": !0,
                    "data-yeti-box": this.id,
                    "data-resize": this.id
                }), this.$overlay ? this.$element.detach().appendTo(this.$overlay) : (this.$element.detach().appendTo(s()(this.options.appendTo)), this.$element.addClass("without-overlay")), this._events(), this.options.deepLink && window.location.hash === "#".concat(this.id) && (this.onLoadListener = y(s()(window), function() {
                    return t.open()
                }))
            }
        }, {
            key: "_makeOverlay",
            value: function() {
                var t = "";
                return this.options.additionalOverlayClasses && (t = " " + this.options.additionalOverlayClasses), s()("<div></div>").addClass("reveal-overlay" + t).appendTo(this.options.appendTo)
            }
        }, {
            key: "_updatePosition",
            value: function() {
                var t, e = this.$element.outerWidth(),
                    i = s()(window).width(),
                    n = this.$element.outerHeight(),
                    o = s()(window).height(),
                    a = null;
                t = "auto" === this.options.hOffset ? parseInt((i - e) / 2, 10) : parseInt(this.options.hOffset, 10), "auto" === this.options.vOffset ? a = n > o ? parseInt(Math.min(100, o / 10), 10) : parseInt((o - n) / 4, 10) : null !== this.options.vOffset && (a = parseInt(this.options.vOffset, 10)), null !== a && this.$element.css({
                    top: a + "px"
                }), this.$overlay && "auto" === this.options.hOffset || (this.$element.css({
                    left: t + "px"
                }), this.$element.css({
                    margin: "0px"
                }))
            }
        }, {
            key: "_events",
            value: function() {
                var t = this,
                    e = this;
                this.$element.on({
                    "open.zf.trigger": this.open.bind(this),
                    "close.zf.trigger": function(i, n) {
                        if (i.target === e.$element[0] || s()(i.target).parents("[data-closable]")[0] === n) return t.close.apply(t)
                    },
                    "toggle.zf.trigger": this.toggle.bind(this),
                    "resizeme.zf.trigger": function() {
                        e._updatePosition()
                    }
                }), this.options.closeOnClick && this.options.overlay && this.$overlay.off(".zf.reveal").on("click.zf.reveal", function(t) {
                    t.target !== e.$element[0] && !s.a.contains(e.$element[0], t.target) && s.a.contains(document, t.target) && e.close()
                }), this.options.deepLink && s()(window).on("hashchange.zf.reveal:".concat(this.id), this._handleState.bind(this))
            }
        }, {
            key: "_handleState",
            value: function(t) {
                window.location.hash !== "#" + this.id || this.isActive ? this.close() : this.open()
            }
        }, {
            key: "_disableScroll",
            value: function(t) {
                t = t || s()(window).scrollTop(), s()(document).height() > s()(window).height() && s()("html").css("top", -t)
            }
        }, {
            key: "_enableScroll",
            value: function(t) {
                t = t || parseInt(s()("html").css("top")), s()(document).height() > s()(window).height() && (s()("html").css("top", ""), s()(window).scrollTop(-t))
            }
        }, {
            key: "open",
            value: function() {
                var t = this,
                    e = "#".concat(this.id);
                this.options.deepLink && window.location.hash !== e && (window.history.pushState ? this.options.updateHistory ? window.history.pushState({}, "", e) : window.history.replaceState({}, "", e) : window.location.hash = e), this.$activeAnchor = s()(document.activeElement).is(this.$anchor) ? s()(document.activeElement) : this.$anchor, this.isActive = !0, this.$element.css({
                    visibility: "hidden"
                }).show().scrollTop(0), this.options.overlay && this.$overlay.css({
                    visibility: "hidden"
                }).show(), this._updatePosition(), this.$element.hide().css({
                    visibility: ""
                }), this.$overlay && (this.$overlay.css({
                    visibility: ""
                }).hide(), this.$element.hasClass("fast") ? this.$overlay.addClass("fast") : this.$element.hasClass("slow") && this.$overlay.addClass("slow")), this.options.multipleOpened || this.$element.trigger("closeme.zf.reveal", this.id), this._disableScroll();
                var i = this;
                if (this.options.animationIn) {
                    this.options.overlay && I.animateIn(this.$overlay, "fade-in"), I.animateIn(this.$element, this.options.animationIn, function() {
                        t.$element && (t.focusableElements = O.findFocusable(t.$element), i.$element.attr({
                            "aria-hidden": !1,
                            tabindex: -1
                        }), i._addGlobalClasses(), O.trapFocus(i.$element))
                    })
                } else this.options.overlay && this.$overlay.show(0), this.$element.show(this.options.showDelay);
                this.$element.attr({
                    "aria-hidden": !1,
                    tabindex: -1
                }).focus(), O.trapFocus(this.$element), this._addGlobalClasses(), this._addGlobalListeners(), this.$element.trigger("open.zf.reveal")
            }
        }, {
            key: "_addGlobalClasses",
            value: function() {
                var t = function() {
                    s()("html").toggleClass("zf-has-scroll", !!(s()(document).height() > s()(window).height()))
                };
                this.$element.on("resizeme.zf.trigger.revealScrollbarListener", function() {
                    return t()
                }), t(), s()("html").addClass("is-reveal-open")
            }
        }, {
            key: "_removeGlobalClasses",
            value: function() {
                this.$element.off("resizeme.zf.trigger.revealScrollbarListener"), s()("html").removeClass("is-reveal-open"), s()("html").removeClass("zf-has-scroll")
            }
        }, {
            key: "_addGlobalListeners",
            value: function() {
                var t = this;
                this.$element && (this.focusableElements = O.findFocusable(this.$element), this.options.overlay || !this.options.closeOnClick || this.options.fullScreen || s()("body").on("click.zf.reveal", function(e) {
                    e.target !== t.$element[0] && !s.a.contains(t.$element[0], e.target) && s.a.contains(document, e.target) && t.close()
                }), this.options.closeOnEsc && s()(window).on("keydown.zf.reveal", function(e) {
                    O.handleKey(e, "Reveal", {
                        close: function() {
                            t.options.closeOnEsc && t.close()
                        }
                    })
                }))
            }
        }, {
            key: "close",
            value: function() {
                if (!this.isActive || !this.$element.is(":visible")) return !1;
                var t = this;

                function e() {
                    var e = parseInt(s()("html").css("top"));
                    0 === s()(".reveal:visible").length && t._removeGlobalClasses(), O.releaseFocus(t.$element), t.$element.attr("aria-hidden", !0), t._enableScroll(e), t.$element.trigger("closed.zf.reveal")
                }
                if (this.options.animationOut ? (this.options.overlay && I.animateOut(this.$overlay, "fade-out"), I.animateOut(this.$element, this.options.animationOut, e)) : (this.$element.hide(this.options.hideDelay), this.options.overlay ? this.$overlay.hide(0, e) : e()), this.options.closeOnEsc && s()(window).off("keydown.zf.reveal"), !this.options.overlay && this.options.closeOnClick && s()("body").off("click.zf.reveal"), this.$element.off("keydown.zf.reveal"), this.options.resetOnClose && this.$element.html(this.$element.html()), this.isActive = !1, t.options.deepLink && window.location.hash === "#".concat(this.id))
                    if (window.history.replaceState) {
                        var i = window.location.pathname + window.location.search;
                        this.options.updateHistory ? window.history.pushState({}, "", i) : window.history.replaceState("", document.title, i)
                    } else window.location.hash = "";
                this.$activeAnchor.focus()
            }
        }, {
            key: "toggle",
            value: function() {
                this.isActive ? this.close() : this.open()
            }
        }, {
            key: "_destroy",
            value: function() {
                this.options.overlay && (this.$element.appendTo(s()(this.options.appendTo)), this.$overlay.hide().off().remove()), this.$element.hide().off(), this.$anchor.off(".zf"), s()(window).off(".zf.reveal:".concat(this.id)), this.onLoadListener && s()(window).off(this.onLoadListener), 0 === s()(".reveal:visible").length && this._removeGlobalClasses()
            }
        }]), e
    }();
    Dt.defaults = {
        animationIn: "",
        animationOut: "",
        showDelay: 0,
        hideDelay: 0,
        closeOnClick: !0,
        closeOnEsc: !0,
        multipleOpened: !1,
        vOffset: "auto",
        hOffset: "auto",
        fullScreen: !1,
        overlay: !0,
        resetOnClose: !1,
        deepLink: !1,
        updateHistory: !1,
        appendTo: "body",
        additionalOverlayClasses: ""
    };
    var St = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, nt), l(e, [{
            key: "_setup",
            value: function(t, i) {
                this.$element = t, this.options = s.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Slider", Y.init(s.a), et.init(s.a), this._init(), O.register("Slider", {
                    ltr: {
                        ARROW_RIGHT: "increase",
                        ARROW_UP: "increase",
                        ARROW_DOWN: "decrease",
                        ARROW_LEFT: "decrease",
                        SHIFT_ARROW_RIGHT: "increase_fast",
                        SHIFT_ARROW_UP: "increase_fast",
                        SHIFT_ARROW_DOWN: "decrease_fast",
                        SHIFT_ARROW_LEFT: "decrease_fast",
                        HOME: "min",
                        END: "max"
                    },
                    rtl: {
                        ARROW_LEFT: "increase",
                        ARROW_RIGHT: "decrease",
                        SHIFT_ARROW_LEFT: "increase_fast",
                        SHIFT_ARROW_RIGHT: "decrease_fast"
                    }
                })
            }
        }, {
            key: "_init",
            value: function() {
                this.inputs = this.$element.find("input"), this.handles = this.$element.find("[data-slider-handle]"), this.$handle = this.handles.eq(0), this.$input = this.inputs.length ? this.inputs.eq(0) : s()("#".concat(this.$handle.attr("aria-controls"))), this.$fill = this.$element.find("[data-slider-fill]").css(this.options.vertical ? "height" : "width", 0), (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) && (this.options.disabled = !0, this.$element.addClass(this.options.disabledClass)), this.inputs.length || (this.inputs = s()().add(this.$input), this.options.binding = !0), this._setInitAttr(0), this.handles[1] && (this.options.doubleSided = !0, this.$handle2 = this.handles.eq(1), this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : s()("#".concat(this.$handle2.attr("aria-controls"))), this.inputs[1] || (this.inputs = this.inputs.add(this.$input2)), this._setInitAttr(1)), this.setHandles(), this._events()
            }
        }, {
            key: "setHandles",
            value: function() {
                var t = this;
                this.handles[1] ? this._setHandlePos(this.$handle, this.inputs.eq(0).val(), !0, function() {
                    t._setHandlePos(t.$handle2, t.inputs.eq(1).val(), !0)
                }) : this._setHandlePos(this.$handle, this.inputs.eq(0).val(), !0)
            }
        }, {
            key: "_reflow",
            value: function() {
                this.setHandles()
            }
        }, {
            key: "_pctOfBar",
            value: function(t) {
                var e = Et(t - this.options.start, this.options.end - this.options.start);
                switch (this.options.positionValueFunction) {
                    case "pow":
                        e = this._logTransform(e);
                        break;
                    case "log":
                        e = this._powTransform(e)
                }
                return e.toFixed(2)
            }
        }, {
            key: "_value",
            value: function(t) {
                switch (this.options.positionValueFunction) {
                    case "pow":
                        t = this._powTransform(t);
                        break;
                    case "log":
                        t = this._logTransform(t)
                }
                return (this.options.end - this.options.start) * t + parseFloat(this.options.start)
            }
        }, {
            key: "_logTransform",
            value: function(t) {
                return function(t, e) {
                    return Math.log(e) / Math.log(t)
                }(this.options.nonLinearBase, t * (this.options.nonLinearBase - 1) + 1)
            }
        }, {
            key: "_powTransform",
            value: function(t) {
                return (Math.pow(this.options.nonLinearBase, t) - 1) / (this.options.nonLinearBase - 1)
            }
        }, {
            key: "_setHandlePos",
            value: function(t, e, i, n) {
                if (!this.$element.hasClass(this.options.disabledClass)) {
                    (e = parseFloat(e)) < this.options.start ? e = this.options.start : e > this.options.end && (e = this.options.end);
                    var s = this.options.doubleSided;
                    if (this.options.vertical && !i && (e = this.options.end - e), s)
                        if (0 === this.handles.index(t)) {
                            var o = parseFloat(this.$handle2.attr("aria-valuenow"));
                            e = e >= o ? o - this.options.step : e
                        } else {
                            var a = parseFloat(this.$handle.attr("aria-valuenow"));
                            e = e <= a ? a + this.options.step : e
                        } var r = this,
                        l = this.options.vertical,
                        c = l ? "height" : "width",
                        h = l ? "top" : "left",
                        u = t[0].getBoundingClientRect()[c],
                        d = this.$element[0].getBoundingClientRect()[c],
                        p = this._pctOfBar(e),
                        f = (100 * Et((d - u) * p, d)).toFixed(this.options.decimal);
                    e = parseFloat(e.toFixed(this.options.decimal));
                    var g = {};
                    if (this._setValues(t, e), s) {
                        var m, v = 0 === this.handles.index(t),
                            y = ~~(100 * Et(u, d));
                        if (v) g[h] = "".concat(f, "%"), m = parseFloat(this.$handle2[0].style[h]) - f + y, n && "function" == typeof n && n();
                        else {
                            var b = parseFloat(this.$handle[0].style[h]);
                            m = f - (isNaN(b) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : b) + y
                        }
                        g["min-".concat(c)] = "".concat(m, "%")
                    }
                    this.$element.one("finished.zf.animate", function() {
                        r.$element.trigger("moved.zf.slider", [t])
                    }), R(this.$element.data("dragging") ? 1e3 / 60 : this.options.moveTime, t, function() {
                        isNaN(f) ? t.css(h, "".concat(100 * p, "%")) : t.css(h, "".concat(f, "%")), r.options.doubleSided ? r.$fill.css(g) : r.$fill.css(c, "".concat(100 * p, "%"))
                    }), clearTimeout(r.timeout), r.timeout = setTimeout(function() {
                        r.$element.trigger("changed.zf.slider", [t])
                    }, r.options.changedDelay)
                }
            }
        }, {
            key: "_setInitAttr",
            value: function(t) {
                var e = 0 === t ? this.options.initialStart : this.options.initialEnd,
                    i = this.inputs.eq(t).attr("id") || g(6, "slider");
                this.inputs.eq(t).attr({
                    id: i,
                    max: this.options.end,
                    min: this.options.start,
                    step: this.options.step
                }), this.inputs.eq(t).val(e), this.handles.eq(t).attr({
                    role: "slider",
                    "aria-controls": i,
                    "aria-valuemax": this.options.end,
                    "aria-valuemin": this.options.start,
                    "aria-valuenow": e,
                    "aria-orientation": this.options.vertical ? "vertical" : "horizontal",
                    tabindex: 0
                })
            }
        }, {
            key: "_setValues",
            value: function(t, e) {
                var i = this.options.doubleSided ? this.handles.index(t) : 0;
                this.inputs.eq(i).val(e), t.attr("aria-valuenow", e)
            }
        }, {
            key: "_handleEvent",
            value: function(t, e, i) {
                var n, o;
                if (i) n = this._adjustValue(null, i), o = !0;
                else {
                    t.preventDefault();
                    var a = this.options.vertical,
                        r = a ? "height" : "width",
                        l = a ? "top" : "left",
                        c = a ? t.pageY : t.pageX,
                        h = (this.$handle[0].getBoundingClientRect()[r], this.$element[0].getBoundingClientRect()[r]),
                        u = a ? s()(window).scrollTop() : s()(window).scrollLeft(),
                        d = this.$element.offset()[l];
                    t.clientY === t.pageY && (c += u);
                    var p, g = c - d,
                        m = Et(p = g < 0 ? 0 : g > h ? h : g, h);
                    if (n = this._value(m), f() && !this.options.vertical && (n = this.options.end - n), n = this._adjustValue(null, n), o = !1, !e) e = zt(this.$handle, l, p, r) <= zt(this.$handle2, l, p, r) ? this.$handle : this.$handle2
                }
                this._setHandlePos(e, n, o)
            }
        }, {
            key: "_adjustValue",
            value: function(t, e) {
                var i, n, s, o = this.options.step,
                    a = parseFloat(o / 2);
                return 0 === (n = (i = t ? parseFloat(t.attr("aria-valuenow")) : e) >= 0 ? i % o : o + i % o) ? i : i = i >= (s = i - n) + a ? s + o : s
            }
        }, {
            key: "_events",
            value: function() {
                this._eventsForHandle(this.$handle), this.handles[1] && this._eventsForHandle(this.$handle2)
            }
        }, {
            key: "_eventsForHandle",
            value: function(t) {
                var e, i = this,
                    n = function(t) {
                        var e = i.inputs.index(s()(this));
                        i._handleEvent(t, i.handles.eq(e), s()(this).val())
                    };
                if (this.inputs.off("keyup.zf.slider").on("keyup.zf.slider", function(t) {
                        13 == t.keyCode && n.call(this, t)
                    }), this.inputs.off("change.zf.slider").on("change.zf.slider", n), this.options.clickSelect && this.$element.off("click.zf.slider").on("click.zf.slider", function(t) {
                        if (i.$element.data("dragging")) return !1;
                        s()(t.target).is("[data-slider-handle]") || (i.options.doubleSided ? i._handleEvent(t) : i._handleEvent(t, i.$handle))
                    }), this.options.draggable) {
                    this.handles.addTouch();
                    var o = s()("body");
                    t.off("mousedown.zf.slider").on("mousedown.zf.slider", function(n) {
                        t.addClass("is-dragging"), i.$fill.addClass("is-dragging"), i.$element.data("dragging", !0), e = s()(n.currentTarget), o.on("mousemove.zf.slider", function(t) {
                            t.preventDefault(), i._handleEvent(t, e)
                        }).on("mouseup.zf.slider", function(n) {
                            i._handleEvent(n, e), t.removeClass("is-dragging"), i.$fill.removeClass("is-dragging"), i.$element.data("dragging", !1), o.off("mousemove.zf.slider mouseup.zf.slider")
                        })
                    }).on("selectstart.zf.slider touchmove.zf.slider", function(t) {
                        t.preventDefault()
                    })
                }
                t.off("keydown.zf.slider").on("keydown.zf.slider", function(t) {
                    var e, n = s()(this),
                        o = i.options.doubleSided ? i.handles.index(n) : 0,
                        a = parseFloat(i.inputs.eq(o).val());
                    O.handleKey(t, "Slider", {
                        decrease: function() {
                            e = a - i.options.step
                        },
                        increase: function() {
                            e = a + i.options.step
                        },
                        decrease_fast: function() {
                            e = a - 10 * i.options.step
                        },
                        increase_fast: function() {
                            e = a + 10 * i.options.step
                        },
                        min: function() {
                            e = i.options.start
                        },
                        max: function() {
                            e = i.options.end
                        },
                        handled: function() {
                            t.preventDefault(), i._setHandlePos(n, e, !0)
                        }
                    })
                })
            }
        }, {
            key: "_destroy",
            value: function() {
                this.handles.off(".zf.slider"), this.inputs.off(".zf.slider"), this.$element.off(".zf.slider"), clearTimeout(this.timeout)
            }
        }]), e
    }();

    function Et(t, e) {
        return t / e
    }

    function zt(t, e, i, n) {
        return Math.abs(t.position()[e] + t[n]() / 2 - i)
    }
    St.defaults = {
        start: 0,
        end: 100,
        step: 1,
        initialStart: 0,
        initialEnd: 100,
        binding: !1,
        clickSelect: !0,
        vertical: !1,
        draggable: !0,
        disabled: !1,
        doubleSided: !1,
        decimal: 2,
        moveTime: 200,
        disabledClass: "disabled",
        invertVertical: !1,
        changedDelay: 500,
        nonLinearBase: 5,
        positionValueFunction: "linear"
    };
    var At = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, nt), l(e, [{
            key: "_setup",
            value: function(t, i) {
                this.$element = t, this.options = s.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Sticky", et.init(s.a), this._init()
            }
        }, {
            key: "_init",
            value: function() {
                w._init();
                var t = this.$element.parent("[data-sticky-container]"),
                    e = this.$element[0].id || g(6, "sticky"),
                    i = this;
                t.length ? this.$container = t : (this.wasWrapped = !0, this.$element.wrap(this.options.container), this.$container = this.$element.parent()), this.$container.addClass(this.options.containerClass), this.$element.addClass(this.options.stickyClass).attr({
                    "data-resize": e,
                    "data-mutate": e
                }), "" !== this.options.anchor && s()("#" + i.options.anchor).attr({
                    "data-mutate": e
                }), this.scrollCount = this.options.checkEvery, this.isStuck = !1, this.onLoadListener = y(s()(window), function() {
                    i.containerHeight = "none" == i.$element.css("display") ? 0 : i.$element[0].getBoundingClientRect().height, i.$container.css("height", i.containerHeight), i.elemHeight = i.containerHeight, "" !== i.options.anchor ? i.$anchor = s()("#" + i.options.anchor) : i._parsePoints(), i._setSizes(function() {
                        var t = window.pageYOffset;
                        i._calc(!1, t), i.isStuck || i._removeSticky(!(t >= i.topPoint))
                    }), i._events(e.split("-").reverse().join("-"))
                })
            }
        }, {
            key: "_parsePoints",
            value: function() {
                for (var t = ["" == this.options.topAnchor ? 1 : this.options.topAnchor, "" == this.options.btmAnchor ? document.documentElement.scrollHeight : this.options.btmAnchor], e = {}, i = 0, n = t.length; i < n && t[i]; i++) {
                    var o;
                    if ("number" == typeof t[i]) o = t[i];
                    else {
                        var a = t[i].split(":"),
                            r = s()("#".concat(a[0]));
                        o = r.offset().top, a[1] && "bottom" === a[1].toLowerCase() && (o += r[0].getBoundingClientRect().height)
                    }
                    e[i] = o
                }
                this.points = e
            }
        }, {
            key: "_events",
            value: function(t) {
                var e = this,
                    i = this.scrollListener = "scroll.zf.".concat(t);
                this.isOn || (this.canStick && (this.isOn = !0, s()(window).off(i).on(i, function(t) {
                    0 === e.scrollCount ? (e.scrollCount = e.options.checkEvery, e._setSizes(function() {
                        e._calc(!1, window.pageYOffset)
                    })) : (e.scrollCount--, e._calc(!1, window.pageYOffset))
                })), this.$element.off("resizeme.zf.trigger").on("resizeme.zf.trigger", function(i, n) {
                    e._eventsHandler(t)
                }), this.$element.on("mutateme.zf.trigger", function(i, n) {
                    e._eventsHandler(t)
                }), this.$anchor && this.$anchor.on("mutateme.zf.trigger", function(i, n) {
                    e._eventsHandler(t)
                }))
            }
        }, {
            key: "_eventsHandler",
            value: function(t) {
                var e = this,
                    i = this.scrollListener = "scroll.zf.".concat(t);
                e._setSizes(function() {
                    e._calc(!1), e.canStick ? e.isOn || e._events(t) : e.isOn && e._pauseListeners(i)
                })
            }
        }, {
            key: "_pauseListeners",
            value: function(t) {
                this.isOn = !1, s()(window).off(t), this.$element.trigger("pause.zf.sticky")
            }
        }, {
            key: "_calc",
            value: function(t, e) {
                if (t && this._setSizes(), !this.canStick) return this.isStuck && this._removeSticky(!0), !1;
                e || (e = window.pageYOffset), e >= this.topPoint ? e <= this.bottomPoint ? this.isStuck || this._setSticky() : this.isStuck && this._removeSticky(!1) : this.isStuck && this._removeSticky(!0)
            }
        }, {
            key: "_setSticky",
            value: function() {
                var t = this,
                    e = this.options.stickTo,
                    i = "top" === e ? "marginTop" : "marginBottom",
                    n = "top" === e ? "bottom" : "top",
                    s = {};
                s[i] = "".concat(this.options[i], "em"), s[e] = 0, s[n] = "auto", this.isStuck = !0, this.$element.removeClass("is-anchored is-at-".concat(n)).addClass("is-stuck is-at-".concat(e)).css(s).trigger("sticky.zf.stuckto:".concat(e)), this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function() {
                    t._setSizes()
                })
            }
        }, {
            key: "_removeSticky",
            value: function(t) {
                var e = this.options.stickTo,
                    i = "top" === e,
                    n = {},
                    s = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
                    o = t ? "top" : "bottom";
                n[i ? "marginTop" : "marginBottom"] = 0, n.bottom = "auto", n.top = t ? 0 : s, this.isStuck = !1, this.$element.removeClass("is-stuck is-at-".concat(e)).addClass("is-anchored is-at-".concat(o)).css(n).trigger("sticky.zf.unstuckfrom:".concat(o))
            }
        }, {
            key: "_setSizes",
            value: function(t) {
                this.canStick = w.is(this.options.stickyOn), this.canStick || t && "function" == typeof t && t();
                var e = this.$container[0].getBoundingClientRect().width,
                    i = window.getComputedStyle(this.$container[0]),
                    n = parseInt(i["padding-left"], 10),
                    s = parseInt(i["padding-right"], 10);
                this.$anchor && this.$anchor.length ? this.anchorHeight = this.$anchor[0].getBoundingClientRect().height : this._parsePoints(), this.$element.css({
                    "max-width": "".concat(e - n - s, "px")
                });
                var o = this.$element[0].getBoundingClientRect().height || this.containerHeight;
                if ("none" == this.$element.css("display") && (o = 0), this.containerHeight = o, this.$container.css({
                        height: o
                    }), this.elemHeight = o, !this.isStuck && this.$element.hasClass("is-at-bottom")) {
                    var a = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
                    this.$element.css("top", a)
                }
                this._setBreakPoints(o, function() {
                    t && "function" == typeof t && t()
                })
            }
        }, {
            key: "_setBreakPoints",
            value: function(t, e) {
                if (!this.canStick) {
                    if (!e || "function" != typeof e) return !1;
                    e()
                }
                var i = Mt(this.options.marginTop),
                    n = Mt(this.options.marginBottom),
                    s = this.points ? this.points[0] : this.$anchor.offset().top,
                    o = this.points ? this.points[1] : s + this.anchorHeight,
                    a = window.innerHeight;
                "top" === this.options.stickTo ? (s -= i, o -= t + i) : "bottom" === this.options.stickTo && (s -= a - (t + n), o -= a - n), this.topPoint = s, this.bottomPoint = o, e && "function" == typeof e && e()
            }
        }, {
            key: "_destroy",
            value: function() {
                this._removeSticky(!0), this.$element.removeClass("".concat(this.options.stickyClass, " is-anchored is-at-top")).css({
                    height: "",
                    top: "",
                    bottom: "",
                    "max-width": ""
                }).off("resizeme.zf.trigger").off("mutateme.zf.trigger"), this.$anchor && this.$anchor.length && this.$anchor.off("change.zf.sticky"), this.scrollListener && s()(window).off(this.scrollListener), this.onLoadListener && s()(window).off(this.onLoadListener), this.wasWrapped ? this.$element.unwrap() : this.$container.removeClass(this.options.containerClass).css({
                    height: ""
                })
            }
        }]), e
    }();

    function Mt(t) {
        return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * t
    }
    At.defaults = {
        container: "<div data-sticky-container></div>",
        stickTo: "top",
        anchor: "",
        topAnchor: "",
        btmAnchor: "",
        marginTop: 1,
        marginBottom: 1,
        stickyOn: "medium",
        stickyClass: "sticky",
        containerClass: "sticky-container",
        checkEvery: -1
    };
    var Ot = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, nt), l(e, [{
            key: "_setup",
            value: function(t, i) {
                this.$element = t, this.options = s.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Tabs", this._init(), O.register("Tabs", {
                    ENTER: "open",
                    SPACE: "open",
                    ARROW_RIGHT: "next",
                    ARROW_UP: "previous",
                    ARROW_DOWN: "next",
                    ARROW_LEFT: "previous"
                })
            }
        }, {
            key: "_init",
            value: function() {
                var t = this,
                    e = this;
                if (this._isInitializing = !0, this.$element.attr({
                        role: "tablist"
                    }), this.$tabTitles = this.$element.find(".".concat(this.options.linkClass)), this.$tabContent = s()('[data-tabs-content="'.concat(this.$element[0].id, '"]')), this.$tabTitles.each(function() {
                        var t = s()(this),
                            i = t.find("a"),
                            n = t.hasClass("".concat(e.options.linkActiveClass)),
                            o = i.attr("data-tabs-target") || i[0].hash.slice(1),
                            a = i[0].id ? i[0].id : "".concat(o, "-label"),
                            r = s()("#".concat(o));
                        t.attr({
                            role: "presentation"
                        }), i.attr({
                            role: "tab",
                            "aria-controls": o,
                            "aria-selected": n,
                            id: a,
                            tabindex: n ? "0" : "-1"
                        }), r.attr({
                            role: "tabpanel",
                            "aria-labelledby": a
                        }), n && (e._initialAnchor = "#".concat(o)), n || r.attr("aria-hidden", "true"), n && e.options.autoFocus && (e.onLoadListener = y(s()(window), function() {
                            s()("html, body").animate({
                                scrollTop: t.offset().top
                            }, e.options.deepLinkSmudgeDelay, function() {
                                i.focus()
                            })
                        }))
                    }), this.options.matchHeight) {
                    var i = this.$tabContent.find("img");
                    i.length ? S(i, this._setHeight.bind(this)) : this._setHeight()
                }
                this._checkDeepLink = function() {
                    var e = window.location.hash;
                    if (!e.length) {
                        if (t._isInitializing) return;
                        t._initialAnchor && (e = t._initialAnchor)
                    }
                    var i = e && s()(e),
                        n = e && t.$element.find('[href$="' + e + '"]'),
                        o = !(!i.length || !n.length);
                    if (i && i.length && n && n.length ? t.selectTab(i, !0) : t._collapse(), o) {
                        if (t.options.deepLinkSmudge) {
                            var a = t.$element.offset();
                            s()("html, body").animate({
                                scrollTop: a.top
                            }, t.options.deepLinkSmudgeDelay)
                        }
                        t.$element.trigger("deeplink.zf.tabs", [n, i])
                    }
                }, this.options.deepLink && this._checkDeepLink(), this._events(), this._isInitializing = !1
            }
        }, {
            key: "_events",
            value: function() {
                this._addKeyHandler(), this._addClickHandler(), this._setHeightMqHandler = null, this.options.matchHeight && (this._setHeightMqHandler = this._setHeight.bind(this), s()(window).on("changed.zf.mediaquery", this._setHeightMqHandler)), this.options.deepLink && s()(window).on("hashchange", this._checkDeepLink)
            }
        }, {
            key: "_addClickHandler",
            value: function() {
                var t = this;
                this.$element.off("click.zf.tabs").on("click.zf.tabs", ".".concat(this.options.linkClass), function(e) {
                    e.preventDefault(), e.stopPropagation(), t._handleTabChange(s()(this))
                })
            }
        }, {
            key: "_addKeyHandler",
            value: function() {
                var t = this;
                this.$tabTitles.off("keydown.zf.tabs").on("keydown.zf.tabs", function(e) {
                    if (9 !== e.which) {
                        var i, n, o = s()(this),
                            a = o.parent("ul").children("li");
                        a.each(function(e) {
                            s()(this).is(o) && (t.options.wrapOnKeys ? (i = 0 === e ? a.last() : a.eq(e - 1), n = e === a.length - 1 ? a.first() : a.eq(e + 1)) : (i = a.eq(Math.max(0, e - 1)), n = a.eq(Math.min(e + 1, a.length - 1))))
                        }), O.handleKey(e, "Tabs", {
                            open: function() {
                                o.find('[role="tab"]').focus(), t._handleTabChange(o)
                            },
                            previous: function() {
                                i.find('[role="tab"]').focus(), t._handleTabChange(i)
                            },
                            next: function() {
                                n.find('[role="tab"]').focus(), t._handleTabChange(n)
                            },
                            handled: function() {
                                e.stopPropagation(), e.preventDefault()
                            }
                        })
                    }
                })
            }
        }, {
            key: "_handleTabChange",
            value: function(t, e) {
                if (t.hasClass("".concat(this.options.linkActiveClass))) this.options.activeCollapse && this._collapse();
                else {
                    var i = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass)),
                        n = t.find('[role="tab"]'),
                        s = n.attr("data-tabs-target"),
                        o = s && s.length ? "#".concat(s) : n[0].hash,
                        a = this.$tabContent.find(o);
                    this._collapseTab(i), this._openTab(t), this.options.deepLink && !e && (this.options.updateHistory ? history.pushState({}, "", o) : history.replaceState({}, "", o)), this.$element.trigger("change.zf.tabs", [t, a]), a.find("[data-mutate]").trigger("mutateme.zf.trigger")
                }
            }
        }, {
            key: "_openTab",
            value: function(t) {
                var e = t.find('[role="tab"]'),
                    i = e.attr("data-tabs-target") || e[0].hash.slice(1),
                    n = this.$tabContent.find("#".concat(i));
                t.addClass("".concat(this.options.linkActiveClass)), e.attr({
                    "aria-selected": "true",
                    tabindex: "0"
                }), n.addClass("".concat(this.options.panelActiveClass)).removeAttr("aria-hidden")
            }
        }, {
            key: "_collapseTab",
            value: function(t) {
                var e = t.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({
                    "aria-selected": "false",
                    tabindex: -1
                });
                s()("#".concat(e.attr("aria-controls"))).removeClass("".concat(this.options.panelActiveClass)).attr({
                    "aria-hidden": "true"
                })
            }
        }, {
            key: "_collapse",
            value: function() {
                var t = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass));
                t.length && (this._collapseTab(t), this.$element.trigger("collapse.zf.tabs", [t]))
            }
        }, {
            key: "selectTab",
            value: function(t, e) {
                var i;
                (i = "object" === o(t) ? t[0].id : t).indexOf("#") < 0 && (i = "#".concat(i));
                var n = this.$tabTitles.has('[href$="'.concat(i, '"]'));
                this._handleTabChange(n, e)
            }
        }, {
            key: "_setHeight",
            value: function() {
                var t = 0,
                    e = this;
                this.$tabContent.find(".".concat(this.options.panelClass)).css("height", "").each(function() {
                    var i = s()(this),
                        n = i.hasClass("".concat(e.options.panelActiveClass));
                    n || i.css({
                        visibility: "hidden",
                        display: "block"
                    });
                    var o = this.getBoundingClientRect().height;
                    n || i.css({
                        visibility: "",
                        display: ""
                    }), t = o > t ? o : t
                }).css("height", "".concat(t, "px"))
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.find(".".concat(this.options.linkClass)).off(".zf.tabs").hide().end().find(".".concat(this.options.panelClass)).hide(), this.options.matchHeight && null != this._setHeightMqHandler && s()(window).off("changed.zf.mediaquery", this._setHeightMqHandler), this.options.deepLink && s()(window).off("hashchange", this._checkDeepLink), this.onLoadListener && s()(window).off(this.onLoadListener)
            }
        }]), e
    }();
    Ot.defaults = {
        deepLink: !1,
        deepLinkSmudge: !1,
        deepLinkSmudgeDelay: 300,
        updateHistory: !1,
        autoFocus: !1,
        wrapOnKeys: !0,
        matchHeight: !1,
        activeCollapse: !1,
        linkClass: "tabs-title",
        linkActiveClass: "is-active",
        panelClass: "tabs-panel",
        panelActiveClass: "is-active"
    };
    var Pt = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, nt), l(e, [{
            key: "_setup",
            value: function(t, i) {
                this.$element = t, this.options = s.a.extend({}, e.defaults, t.data(), i), this.className = "", this.className = "Toggler", et.init(s.a), this._init(), this._events()
            }
        }, {
            key: "_init",
            value: function() {
                var t;
                this.options.animate ? (t = this.options.animate.split(" "), this.animationIn = t[0], this.animationOut = t[1] || null) : (t = this.$element.data("toggler"), this.className = "." === t[0] ? t.slice(1) : t);
                var e = this.$element[0].id,
                    i = s()('[data-open~="'.concat(e, '"], [data-close~="').concat(e, '"], [data-toggle~="').concat(e, '"]'));
                i.attr("aria-expanded", !this.$element.is(":hidden")), i.each(function(t, i) {
                    var n = s()(i),
                        o = n.attr("aria-controls") || "";
                    new RegExp("\\b".concat(m(e), "\\b")).test(o) || n.attr("aria-controls", o ? "".concat(o, " ").concat(e) : e)
                })
            }
        }, {
            key: "_events",
            value: function() {
                this.$element.off("toggle.zf.trigger").on("toggle.zf.trigger", this.toggle.bind(this))
            }
        }, {
            key: "toggle",
            value: function() {
                this[this.options.animate ? "_toggleAnimate" : "_toggleClass"]()
            }
        }, {
            key: "_toggleClass",
            value: function() {
                this.$element.toggleClass(this.className);
                var t = this.$element.hasClass(this.className);
                t ? this.$element.trigger("on.zf.toggler") : this.$element.trigger("off.zf.toggler"), this._updateARIA(t), this.$element.find("[data-mutate]").trigger("mutateme.zf.trigger")
            }
        }, {
            key: "_toggleAnimate",
            value: function() {
                var t = this;
                this.$element.is(":hidden") ? I.animateIn(this.$element, this.animationIn, function() {
                    t._updateARIA(!0), this.trigger("on.zf.toggler"), this.find("[data-mutate]").trigger("mutateme.zf.trigger")
                }) : I.animateOut(this.$element, this.animationOut, function() {
                    t._updateARIA(!1), this.trigger("off.zf.toggler"), this.find("[data-mutate]").trigger("mutateme.zf.trigger")
                })
            }
        }, {
            key: "_updateARIA",
            value: function(t) {
                var e = this.$element[0].id;
                s()('[data-open="'.concat(e, '"], [data-close="').concat(e, '"], [data-toggle="').concat(e, '"]')).attr({
                    "aria-expanded": !!t
                })
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.off(".zf.toggler")
            }
        }]), e
    }();
    Pt.defaults = {
        animate: !1
    };
    var Lt = function(t) {
        function e() {
            return a(this, e), d(this, h(e).apply(this, arguments))
        }
        return c(e, gt), l(e, [{
            key: "_setup",
            value: function(t, i) {
                this.$element = t, this.options = s.a.extend({}, e.defaults, this.$element.data(), i), this.className = "Tooltip", this.isActive = !1, this.isClick = !1, et.init(s.a), this._init()
            }
        }, {
            key: "_init",
            value: function() {
                w._init();
                var t = this.$element.attr("aria-describedby") || g(6, "tooltip");
                this.options.tipText = this.options.tipText || this.$element.attr("title"), this.template = this.options.template ? s()(this.options.template) : this._buildTemplate(t), this.options.allowHtml ? this.template.appendTo(document.body).html(this.options.tipText).hide() : this.template.appendTo(document.body).text(this.options.tipText).hide(), this.$element.attr({
                    title: "",
                    "aria-describedby": t,
                    "data-yeti-box": t,
                    "data-toggle": t,
                    "data-resize": t
                }).addClass(this.options.triggerClass), p(h(e.prototype), "_init", this).call(this), this._events()
            }
        }, {
            key: "_getDefaultPosition",
            value: function() {
                var t = this.$element[0].className.match(/\b(top|left|right|bottom)\b/g);
                return t ? t[0] : "top"
            }
        }, {
            key: "_getDefaultAlignment",
            value: function() {
                return "center"
            }
        }, {
            key: "_getHOffset",
            value: function() {
                return "left" === this.position || "right" === this.position ? this.options.hOffset + this.options.tooltipWidth : this.options.hOffset
            }
        }, {
            key: "_getVOffset",
            value: function() {
                return "top" === this.position || "bottom" === this.position ? this.options.vOffset + this.options.tooltipHeight : this.options.vOffset
            }
        }, {
            key: "_buildTemplate",
            value: function(t) {
                var e = "".concat(this.options.tooltipClass, " ").concat(this.options.templateClasses).trim();
                return s()("<div></div>").addClass(e).attr({
                    role: "tooltip",
                    "aria-hidden": !0,
                    "data-is-active": !1,
                    "data-is-focus": !1,
                    id: t
                })
            }
        }, {
            key: "_setPosition",
            value: function() {
                p(h(e.prototype), "_setPosition", this).call(this, this.$element, this.template)
            }
        }, {
            key: "show",
            value: function() {
                if ("all" !== this.options.showOn && !w.is(this.options.showOn)) return !1;
                this.template.css("visibility", "hidden").show(), this._setPosition(), this.template.removeClass("top bottom left right").addClass(this.position), this.template.removeClass("align-top align-bottom align-left align-right align-center").addClass("align-" + this.alignment), this.$element.trigger("closeme.zf.tooltip", this.template.attr("id")), this.template.attr({
                    "data-is-active": !0,
                    "aria-hidden": !1
                }), this.isActive = !0, this.template.stop().hide().css("visibility", "").fadeIn(this.options.fadeInDuration, function() {}), this.$element.trigger("show.zf.tooltip")
            }
        }, {
            key: "hide",
            value: function() {
                var t = this;
                this.template.stop().attr({
                    "aria-hidden": !0,
                    "data-is-active": !1
                }).fadeOut(this.options.fadeOutDuration, function() {
                    t.isActive = !1, t.isClick = !1
                }), this.$element.trigger("hide.zf.tooltip")
            }
        }, {
            key: "_events",
            value: function() {
                var t = this,
                    e = (this.template, !1);
                this.options.disableHover || this.$element.on("mouseenter.zf.tooltip", function(e) {
                    t.isActive || (t.timeout = setTimeout(function() {
                        t.show()
                    }, t.options.hoverDelay))
                }).on("mouseleave.zf.tooltip", b(function(i) {
                    clearTimeout(t.timeout), (!e || t.isClick && !t.options.clickOpen) && t.hide()
                })), this.options.clickOpen ? this.$element.on("mousedown.zf.tooltip", function(e) {
                    e.stopImmediatePropagation(), t.isClick || (t.isClick = !0, !t.options.disableHover && t.$element.attr("tabindex") || t.isActive || t.show())
                }) : this.$element.on("mousedown.zf.tooltip", function(e) {
                    e.stopImmediatePropagation(), t.isClick = !0
                }), this.options.disableForTouch || this.$element.on("tap.zf.tooltip touchend.zf.tooltip", function(e) {
                    t.isActive ? t.hide() : t.show()
                }), this.$element.on({
                    "close.zf.trigger": this.hide.bind(this)
                }), this.$element.on("focus.zf.tooltip", function(i) {
                    if (e = !0, t.isClick) return t.options.clickOpen || (e = !1), !1;
                    t.show()
                }).on("focusout.zf.tooltip", function(i) {
                    e = !1, t.isClick = !1, t.hide()
                }).on("resizeme.zf.trigger", function() {
                    t.isActive && t._setPosition()
                })
            }
        }, {
            key: "toggle",
            value: function() {
                this.isActive ? this.hide() : this.show()
            }
        }, {
            key: "_destroy",
            value: function() {
                this.$element.attr("title", this.template.text()).off(".zf.trigger .zf.tooltip").removeClass(this.options.triggerClass).removeClass("top right left bottom").removeAttr("aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box"), this.template.remove()
            }
        }]), e
    }();
    Lt.defaults = {
        disableForTouch: !1,
        hoverDelay: 200,
        fadeInDuration: 150,
        fadeOutDuration: 150,
        disableHover: !1,
        templateClasses: "",
        tooltipClass: "tooltip",
        triggerClass: "has-tip",
        showOn: "small",
        template: "",
        tipText: "",
        touchCloseText: "Tap to close.",
        clickOpen: !0,
        position: "auto",
        alignment: "auto",
        allowOverlap: !1,
        allowBottomOverlap: !1,
        vOffset: 0,
        hOffset: 0,
        tooltipHeight: 14,
        tooltipWidth: 12,
        allowHtml: !1
    };
    var It = {
            tabs: {
                cssClass: "tabs",
                plugin: Ot
            },
            accordion: {
                cssClass: "accordion",
                plugin: rt
            }
        },
        Rt = function(t) {
            function e() {
                return a(this, e), d(this, h(e).apply(this, arguments))
            }
            return c(e, nt), l(e, [{
                key: "_setup",
                value: function(t, e) {
                    this.$element = s()(t), this.options = s.a.extend({}, this.$element.data(), e), this.rules = this.$element.data("responsive-accordion-tabs"), this.currentMq = null, this.currentPlugin = null, this.className = "ResponsiveAccordionTabs", this.$element.attr("id") || this.$element.attr("id", g(6, "responsiveaccordiontabs")), this._init(), this._events()
                }
            }, {
                key: "_init",
                value: function() {
                    if (w._init(), "string" == typeof this.rules) {
                        for (var t = {}, e = this.rules.split(" "), i = 0; i < e.length; i++) {
                            var n = e[i].split("-"),
                                o = n.length > 1 ? n[0] : "small",
                                a = n.length > 1 ? n[1] : n[0];
                            null !== It[a] && (t[o] = It[a])
                        }
                        this.rules = t
                    }
                    this._getAllOptions(), s.a.isEmptyObject(this.rules) || this._checkMediaQueries()
                }
            }, {
                key: "_getAllOptions",
                value: function() {
                    for (var t in this.allOptions = {}, It)
                        if (It.hasOwnProperty(t)) {
                            var e = It[t];
                            try {
                                var i = s()("<ul></ul>"),
                                    n = new e.plugin(i, this.options);
                                for (var o in n.options)
                                    if (n.options.hasOwnProperty(o) && "zfPlugin" !== o) {
                                        var a = n.options[o];
                                        this.allOptions[o] = a
                                    } n.destroy()
                            } catch (t) {}
                        }
                }
            }, {
                key: "_events",
                value: function() {
                    this._changedZfMediaQueryHandler = this._checkMediaQueries.bind(this), s()(window).on("changed.zf.mediaquery", this._changedZfMediaQueryHandler)
                }
            }, {
                key: "_checkMediaQueries",
                value: function() {
                    var t, e = this;
                    s.a.each(this.rules, function(e) {
                        w.atLeast(e) && (t = e)
                    }), t && (this.currentPlugin instanceof this.rules[t].plugin || (s.a.each(It, function(t, i) {
                        e.$element.removeClass(i.cssClass)
                    }), this.$element.addClass(this.rules[t].cssClass), this.currentPlugin && (!this.currentPlugin.$element.data("zfPlugin") && this.storezfData && this.currentPlugin.$element.data("zfPlugin", this.storezfData), this.currentPlugin.destroy()), this._handleMarkup(this.rules[t].cssClass), this.currentPlugin = new this.rules[t].plugin(this.$element, {}), this.storezfData = this.currentPlugin.$element.data("zfPlugin")))
                }
            }, {
                key: "_handleMarkup",
                value: function(t) {
                    var e = this,
                        i = "accordion",
                        n = s()("[data-tabs-content=" + this.$element.attr("id") + "]");
                    if (n.length && (i = "tabs"), i !== t) {
                        var o = e.allOptions.linkClass ? e.allOptions.linkClass : "tabs-title",
                            a = e.allOptions.panelClass ? e.allOptions.panelClass : "tabs-panel";
                        this.$element.removeAttr("role");
                        var r = this.$element.children("." + o + ",[data-accordion-item]").removeClass(o).removeClass("accordion-item").removeAttr("data-accordion-item"),
                            l = r.children("a").removeClass("accordion-title");
                        if ("tabs" === i ? (n = n.children("." + a).removeClass(a).removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby")).children("a").removeAttr("role").removeAttr("aria-controls").removeAttr("aria-selected") : n = r.children("[data-tab-content]").removeClass("accordion-content"), n.css({
                                display: "",
                                visibility: ""
                            }), r.css({
                                display: "",
                                visibility: ""
                            }), "accordion" === t) n.each(function(t, i) {
                            s()(i).appendTo(r.get(t)).addClass("accordion-content").attr("data-tab-content", "").removeClass("is-active").css({
                                height: ""
                            }), s()("[data-tabs-content=" + e.$element.attr("id") + "]").after('<div id="tabs-placeholder-' + e.$element.attr("id") + '"></div>').detach(), r.addClass("accordion-item").attr("data-accordion-item", ""), l.addClass("accordion-title")
                        });
                        else if ("tabs" === t) {
                            var c = s()("[data-tabs-content=" + e.$element.attr("id") + "]"),
                                h = s()("#tabs-placeholder-" + e.$element.attr("id"));
                            h.length ? (c = s()('<div class="tabs-content"></div>').insertAfter(h).attr("data-tabs-content", e.$element.attr("id")), h.remove()) : c = s()('<div class="tabs-content"></div>').insertAfter(e.$element).attr("data-tabs-content", e.$element.attr("id")), n.each(function(t, e) {
                                var i = s()(e).appendTo(c).addClass(a),
                                    n = l.get(t).hash.slice(1),
                                    o = s()(e).attr("id") || g(6, "accordion");
                                n !== o && ("" !== n ? s()(e).attr("id", n) : (n = o, s()(e).attr("id", n), s()(l.get(t)).attr("href", s()(l.get(t)).attr("href").replace("#", "") + "#" + n))), s()(r.get(t)).hasClass("is-active") && i.addClass("is-active")
                            }), r.addClass(o)
                        }
                    }
                }
            }, {
                key: "_destroy",
                value: function() {
                    this.currentPlugin && this.currentPlugin.destroy(), s()(window).off("changed.zf.mediaquery", this._changedZfMediaQueryHandler)
                }
            }]), e
        }();
    Rt.defaults = {}, x.addToJquery(s.a), x.rtl = f, x.GetYoDigits = g, x.transitionend = v, x.RegExpEscape = m, x.onLoad = y, x.Box = C, x.onImagesLoaded = S, x.Keyboard = O, x.MediaQuery = w, x.Motion = I, x.Move = R, x.Nest = F, x.Timer = N, Y.init(s.a), et.init(s.a, x), w._init(), x.plugin(at, "Abide"), x.plugin(rt, "Accordion"), x.plugin(lt, "AccordionMenu"), x.plugin(ct, "Drilldown"), x.plugin(mt, "Dropdown"), x.plugin(vt, "DropdownMenu"), x.plugin(yt, "Equalizer"), x.plugin(bt, "Interchange"), x.plugin(xt, "Magellan"), x.plugin(_t, "OffCanvas"), x.plugin(kt, "Orbit"), x.plugin($t, "ResponsiveMenu"), x.plugin(Tt, "ResponsiveToggle"), x.plugin(Dt, "Reveal"), x.plugin(St, "Slider"), x.plugin(wt, "SmoothScroll"), x.plugin(At, "Sticky"), x.plugin(Ot, "Tabs"), x.plugin(Pt, "Toggler"), x.plugin(Lt, "Tooltip"), x.plugin(Rt, "ResponsiveAccordionTabs")
}, function(t, e, i) {
    var n;
    n = function() {
        return function(t) {
            var e = {};

            function i(n) {
                if (e[n]) return e[n].exports;
                var s = e[n] = {
                    exports: {},
                    id: n,
                    loaded: !1
                };
                return t[n].call(s.exports, s, s.exports, i), s.loaded = !0, s.exports
            }
            return i.m = t, i.c = e, i.p = "", i(0)
        }([function(t, e) {
            "use strict";
            t.exports = function() {
                if ("undefined" == typeof document || "undefined" == typeof window) return {
                    ask: function() {
                        return "initial"
                    },
                    element: function() {
                        return null
                    },
                    ignoreKeys: function() {},
                    specificKeys: function() {},
                    registerOnChange: function() {},
                    unRegisterOnChange: function() {}
                };
                var t = document.documentElement,
                    e = null,
                    i = "initial",
                    n = i,
                    s = Date.now();
                try {
                    window.sessionStorage.getItem("what-input") && (i = window.sessionStorage.getItem("what-input")), window.sessionStorage.getItem("what-intent") && (n = window.sessionStorage.getItem("what-intent"))
                } catch (t) {}
                var o = ["button", "input", "select", "textarea"],
                    a = [],
                    r = [16, 17, 18, 91, 93],
                    l = [],
                    c = {
                        keydown: "keyboard",
                        keyup: "keyboard",
                        mousedown: "mouse",
                        mousemove: "mouse",
                        MSPointerDown: "pointer",
                        MSPointerMove: "pointer",
                        pointerdown: "pointer",
                        pointermove: "pointer",
                        touchstart: "touch",
                        touchend: "touch"
                    },
                    h = !1,
                    u = {
                        x: null,
                        y: null
                    },
                    d = {
                        2: "touch",
                        3: "touch",
                        4: "mouse"
                    },
                    p = !1;
                try {
                    var f = Object.defineProperty({}, "passive", {
                        get: function() {
                            p = !0
                        }
                    });
                    window.addEventListener("test", null, f)
                } catch (t) {}
                var g = function() {
                        var t = !!p && {
                            passive: !0
                        };
                        window.PointerEvent ? (window.addEventListener("pointerdown", m), window.addEventListener("pointermove", y)) : window.MSPointerEvent ? (window.addEventListener("MSPointerDown", m), window.addEventListener("MSPointerMove", y)) : (window.addEventListener("mousedown", m), window.addEventListener("mousemove", y), "ontouchstart" in window && (window.addEventListener("touchstart", m, t), window.addEventListener("touchend", m))), window.addEventListener(k(), y, t), window.addEventListener("keydown", m), window.addEventListener("keyup", m), window.addEventListener("focusin", b), window.addEventListener("focusout", w)
                    },
                    m = function(t) {
                        var e = t.which,
                            s = c[t.type];
                        "pointer" === s && (s = x(t));
                        var a = !l.length && -1 === r.indexOf(e),
                            h = l.length && -1 !== l.indexOf(e),
                            u = "keyboard" === s && e && (a || h) || "mouse" === s || "touch" === s;
                        if (_(s) && (u = !1), u && i !== s) {
                            i = s;
                            try {
                                window.sessionStorage.setItem("what-input", i)
                            } catch (t) {}
                            v("input")
                        }
                        if (u && n !== s) {
                            var d = document.activeElement;
                            if (d && d.nodeName && -1 === o.indexOf(d.nodeName.toLowerCase()) || "button" === d.nodeName.toLowerCase() && !T(d, "form")) {
                                n = s;
                                try {
                                    window.sessionStorage.setItem("what-intent", n)
                                } catch (t) {}
                                v("intent")
                            }
                        }
                    },
                    v = function(e) {
                        t.setAttribute("data-what" + e, "input" === e ? i : n), C(e)
                    },
                    y = function(t) {
                        var e = c[t.type];
                        if ("pointer" === e && (e = x(t)), $(t), !h && !_(e) && n !== e) {
                            n = e;
                            try {
                                window.sessionStorage.setItem("what-intent", n)
                            } catch (t) {}
                            v("intent")
                        }
                    },
                    b = function(i) {
                        i.target.nodeName ? (e = i.target.nodeName.toLowerCase(), t.setAttribute("data-whatelement", e), i.target.classList && i.target.classList.length && t.setAttribute("data-whatclasses", i.target.classList.toString().replace(" ", ","))) : w()
                    },
                    w = function() {
                        e = null, t.removeAttribute("data-whatelement"), t.removeAttribute("data-whatclasses")
                    },
                    x = function(t) {
                        return "number" == typeof t.pointerType ? d[t.pointerType] : "pen" === t.pointerType ? "touch" : t.pointerType
                    },
                    _ = function(t) {
                        var e = Date.now(),
                            n = "mouse" === t && "touch" === i && e - s < 200;
                        return s = e, n
                    },
                    k = function() {
                        return "onwheel" in document.createElement("div") ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll"
                    },
                    C = function(t) {
                        for (var e = 0, s = a.length; e < s; e++) a[e].type === t && a[e].fn.call(void 0, "input" === t ? i : n)
                    },
                    $ = function(t) {
                        u.x !== t.screenX || u.y !== t.screenY ? (h = !1, u.x = t.screenX, u.y = t.screenY) : h = !0
                    },
                    T = function(t, e) {
                        var i = window.Element.prototype;
                        if (i.matches || (i.matches = i.msMatchesSelector || i.webkitMatchesSelector), i.closest) return t.closest(e);
                        do {
                            if (t.matches(e)) return t;
                            t = t.parentElement || t.parentNode
                        } while (null !== t && 1 === t.nodeType);
                        return null
                    };
                return "addEventListener" in window && Array.prototype.indexOf && (c[k()] = "mouse", g(), v("input"), v("intent")), {
                    ask: function(t) {
                        return "intent" === t ? n : i
                    },
                    element: function() {
                        return e
                    },
                    ignoreKeys: function(t) {
                        r = t
                    },
                    specificKeys: function(t) {
                        l = t
                    },
                    registerOnChange: function(t, e) {
                        a.push({
                            fn: t,
                            type: e || "input"
                        })
                    },
                    unRegisterOnChange: function(t) {
                        var e = function(t) {
                            for (var e = 0, i = a.length; e < i; e++)
                                if (a[e].fn === t) return e
                        }(t);
                        (e || 0 === e) && a.splice(e, 1)
                    }
                }
            }()
        }])
    }, t.exports = n()
}, function(t, e, i) {
    (function(n) {
        var s, o, a;
        window.Zepto, o = [i(0)], void 0 === (a = "function" == typeof(s = function(t) {
            "use strict";
            var e = function(e, i, n) {
                var s = {
                    invalid: [],
                    getCaret: function() {
                        try {
                            var t, i = 0,
                                n = e.get(0),
                                o = document.selection,
                                a = n.selectionStart;
                            return o && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((t = o.createRange()).moveStart("character", -s.val().length), i = t.text.length) : (a || "0" === a) && (i = a), i
                        } catch (t) {}
                    },
                    setCaret: function(t) {
                        try {
                            if (e.is(":focus")) {
                                var i, n = e.get(0);
                                n.setSelectionRange ? n.setSelectionRange(t, t) : ((i = n.createTextRange()).collapse(!0), i.moveEnd("character", t), i.moveStart("character", t), i.select())
                            }
                        } catch (t) {}
                    },
                    events: function() {
                        e.on("keydown.mask", function(t) {
                            e.data("mask-keycode", t.keyCode || t.which), e.data("mask-previus-value", e.val()), e.data("mask-previus-caret-pos", s.getCaret()), s.maskDigitPosMapOld = s.maskDigitPosMap
                        }).on(t.jMaskGlobals.useInput ? "input.mask" : "keyup.mask", s.behaviour).on("paste.mask drop.mask", function() {
                            setTimeout(function() {
                                e.keydown().keyup()
                            }, 100)
                        }).on("change.mask", function() {
                            e.data("changed", !0)
                        }).on("blur.mask", function() {
                            r === s.val() || e.data("changed") || e.trigger("change"), e.data("changed", !1)
                        }).on("blur.mask", function() {
                            r = s.val()
                        }).on("focus.mask", function(e) {
                            !0 === n.selectOnFocus && t(e.target).select()
                        }).on("focusout.mask", function() {
                            n.clearIfNotMatch && !o.test(s.val()) && s.val("")
                        })
                    },
                    getRegexMask: function() {
                        for (var t, e, n, s, o, r, l = [], c = 0; c < i.length; c++)(t = a.translation[i.charAt(c)]) ? (e = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""), n = t.optional, (s = t.recursive) ? (l.push(i.charAt(c)), o = {
                            digit: i.charAt(c),
                            pattern: e
                        }) : l.push(n || s ? e + "?" : e)) : l.push(i.charAt(c).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                        return r = l.join(""), o && (r = r.replace(new RegExp("(" + o.digit + "(.*" + o.digit + ")?)"), "($1)?").replace(new RegExp(o.digit, "g"), o.pattern)), new RegExp(r)
                    },
                    destroyEvents: function() {
                        e.off(["input", "keydown", "keyup", "paste", "drop", "blur", "focusout", ""].join(".mask "))
                    },
                    val: function(t) {
                        var i, n = e.is("input"),
                            s = n ? "val" : "text";
                        return arguments.length > 0 ? (e[s]() !== t && e[s](t), i = e) : i = e[s](), i
                    },
                    calculateCaretPosition: function() {
                        var t = e.data("mask-previus-value") || "",
                            i = s.getMasked(),
                            n = s.getCaret();
                        if (t !== i) {
                            var o = e.data("mask-previus-caret-pos") || 0,
                                a = i.length,
                                r = t.length,
                                l = 0,
                                c = 0,
                                h = 0,
                                u = 0,
                                d = 0;
                            for (d = n; d < a && s.maskDigitPosMap[d]; d++) c++;
                            for (d = n - 1; d >= 0 && s.maskDigitPosMap[d]; d--) l++;
                            for (d = n - 1; d >= 0; d--) s.maskDigitPosMap[d] && h++;
                            for (d = o - 1; d >= 0; d--) s.maskDigitPosMapOld[d] && u++;
                            if (n > r) n = 10 * a;
                            else if (o >= n && o !== r) {
                                if (!s.maskDigitPosMapOld[n]) {
                                    var p = n;
                                    n -= u - h, n -= l, s.maskDigitPosMap[n] && (n = p)
                                }
                            } else n > o && (n += h - u, n += c)
                        }
                        return n
                    },
                    behaviour: function(i) {
                        i = i || window.event, s.invalid = [];
                        var n = e.data("mask-keycode");
                        if (-1 === t.inArray(n, a.byPassKeys)) {
                            var o = s.getMasked(),
                                r = s.getCaret();
                            return setTimeout(function() {
                                s.setCaret(s.calculateCaretPosition())
                            }, t.jMaskGlobals.keyStrokeCompensation), s.val(o), s.setCaret(r), s.callbacks(i)
                        }
                    },
                    getMasked: function(t, e) {
                        var o, r, l, c = [],
                            h = void 0 === e ? s.val() : e + "",
                            u = 0,
                            d = i.length,
                            p = 0,
                            f = h.length,
                            g = 1,
                            m = "push",
                            v = -1,
                            y = 0,
                            b = [];
                        for (n.reverse ? (m = "unshift", g = -1, o = 0, u = d - 1, p = f - 1, r = function() {
                                return u > -1 && p > -1
                            }) : (o = d - 1, r = function() {
                                return u < d && p < f
                            }); r();) {
                            var w = i.charAt(u),
                                x = h.charAt(p),
                                _ = a.translation[w];
                            _ ? (x.match(_.pattern) ? (c[m](x), _.recursive && (-1 === v ? v = u : u === o && u !== v && (u = v - g), o === v && (u -= g)), u += g) : x === l ? (y--, l = void 0) : _.optional ? (u += g, p -= g) : _.fallback ? (c[m](_.fallback), u += g, p -= g) : s.invalid.push({
                                p: p,
                                v: x,
                                e: _.pattern
                            }), p += g) : (t || c[m](w), x === w ? (b.push(p), p += g) : (l = w, b.push(p + y), y++), u += g)
                        }
                        var k = i.charAt(o);
                        d !== f + 1 || a.translation[k] || c.push(k);
                        var C = c.join("");
                        return s.mapMaskdigitPositions(C, b, f), C
                    },
                    mapMaskdigitPositions: function(t, e, i) {
                        var o = n.reverse ? t.length - i : 0;
                        s.maskDigitPosMap = {};
                        for (var a = 0; a < e.length; a++) s.maskDigitPosMap[e[a] + o] = 1
                    },
                    callbacks: function(t) {
                        var o = s.val(),
                            a = o !== r,
                            l = [o, t, e, n],
                            c = function(t, e, i) {
                                "function" == typeof n[t] && e && n[t].apply(this, i)
                            };
                        c("onChange", !0 === a, l), c("onKeyPress", !0 === a, l), c("onComplete", o.length === i.length, l), c("onInvalid", s.invalid.length > 0, [o, t, e, s.invalid, n])
                    }
                };
                e = t(e);
                var o, a = this,
                    r = s.val();
                i = "function" == typeof i ? i(s.val(), void 0, e, n) : i, a.mask = i, a.options = n, a.remove = function() {
                    var t = s.getCaret();
                    return a.options.placeholder && e.removeAttr("placeholder"), e.data("mask-maxlength") && e.removeAttr("maxlength"), s.destroyEvents(), s.val(a.getCleanVal()), s.setCaret(t), e
                }, a.getCleanVal = function() {
                    return s.getMasked(!0)
                }, a.getMaskedVal = function(t) {
                    return s.getMasked(!1, t)
                }, a.init = function(r) {
                    if (r = r || !1, n = n || {}, a.clearIfNotMatch = t.jMaskGlobals.clearIfNotMatch, a.byPassKeys = t.jMaskGlobals.byPassKeys, a.translation = t.extend({}, t.jMaskGlobals.translation, n.translation), a = t.extend(!0, {}, a, n), o = s.getRegexMask(), r) s.events(), s.val(s.getMasked());
                    else {
                        n.placeholder && e.attr("placeholder", n.placeholder), e.data("mask") && e.attr("autocomplete", "off");
                        for (var l = 0, c = !0; l < i.length; l++) {
                            var h = a.translation[i.charAt(l)];
                            if (h && h.recursive) {
                                c = !1;
                                break
                            }
                        }
                        c && e.attr("maxlength", i.length).data("mask-maxlength", !0), s.destroyEvents(), s.events();
                        var u = s.getCaret();
                        s.val(s.getMasked()), s.setCaret(u)
                    }
                }, a.init(!e.is("input"))
            };
            t.maskWatchers = {};
            var i = function() {
                    var i = t(this),
                        s = {},
                        o = i.attr("data-mask");
                    if (i.attr("data-mask-reverse") && (s.reverse = !0), i.attr("data-mask-clearifnotmatch") && (s.clearIfNotMatch = !0), "true" === i.attr("data-mask-selectonfocus") && (s.selectOnFocus = !0), n(i, o, s)) return i.data("mask", new e(this, o, s))
                },
                n = function(e, i, n) {
                    n = n || {};
                    var s = t(e).data("mask"),
                        o = JSON.stringify,
                        a = t(e).val() || t(e).text();
                    try {
                        return "function" == typeof i && (i = i(a)), "object" != typeof s || o(s.options) !== o(n) || s.mask !== i
                    } catch (t) {}
                };
            t.fn.mask = function(i, s) {
                s = s || {};
                var o = this.selector,
                    a = t.jMaskGlobals,
                    r = a.watchInterval,
                    l = s.watchInputs || a.watchInputs,
                    c = function() {
                        if (n(this, i, s)) return t(this).data("mask", new e(this, i, s))
                    };
                return t(this).each(c), o && "" !== o && l && (clearInterval(t.maskWatchers[o]), t.maskWatchers[o] = setInterval(function() {
                    t(document).find(o).each(c)
                }, r)), this
            }, t.fn.masked = function(t) {
                return this.data("mask").getMaskedVal(t)
            }, t.fn.unmask = function() {
                return clearInterval(t.maskWatchers[this.selector]), delete t.maskWatchers[this.selector], this.each(function() {
                    var e = t(this).data("mask");
                    e && e.remove().removeData("mask")
                })
            }, t.fn.cleanVal = function() {
                return this.data("mask").getCleanVal()
            }, t.applyDataMask = function(e) {
                var n = (e = e || t.jMaskGlobals.maskElements) instanceof t ? e : t(e);
                n.filter(t.jMaskGlobals.dataMaskAttr).each(i)
            };
            var s, o, a, r = {
                maskElements: "input,td,span,div",
                dataMaskAttr: "*[data-mask]",
                dataMask: !0,
                watchInterval: 300,
                watchInputs: !0,
                keyStrokeCompensation: 10,
                useInput: !/Chrome\/[2-4][0-9]|SamsungBrowser/.test(window.navigator.userAgent) && (s = "input", a = document.createElement("div"), (o = (s = "on" + s) in a) || (a.setAttribute(s, "return;"), o = "function" == typeof a[s]), a = null, o),
                watchDataMask: !1,
                byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
                translation: {
                    0: {
                        pattern: /\d/
                    },
                    9: {
                        pattern: /\d/,
                        optional: !0
                    },
                    "#": {
                        pattern: /\d/,
                        recursive: !0
                    },
                    A: {
                        pattern: /[a-zA-Z0-9]/
                    },
                    S: {
                        pattern: /[a-zA-Z]/
                    }
                }
            };
            t.jMaskGlobals = t.jMaskGlobals || {}, (r = t.jMaskGlobals = t.extend(!0, {}, r, t.jMaskGlobals)).dataMask && t.applyDataMask(), setInterval(function() {
                t.jMaskGlobals.watchDataMask && t.applyDataMask()
            }, r.watchInterval)
        }) ? s.apply(e, o) : s) || (t.exports = a)
    }).call(this, i(0))
}, function(t, e, i) {
    (function(t) {
        ! function(t, e, i, n) {
            "use strict";
            if (t.console = t.console || {
                    info: function(t) {}
                }, i)
                if (i.fn.fancybox) console.info("fancyBox already initialized");
                else {
                    var s, o, a = {
                            closeExisting: !1,
                            loop: !1,
                            gutter: 50,
                            keyboard: !0,
                            preventCaptionOverlap: !0,
                            arrows: !0,
                            infobar: !0,
                            smallBtn: "auto",
                            toolbar: "auto",
                            buttons: ["zoom", "slideShow", "thumbs", "close"],
                            idleTime: 3,
                            protect: !1,
                            modal: !1,
                            image: {
                                preload: !1
                            },
                            ajax: {
                                settings: {
                                    data: {
                                        fancybox: !0
                                    }
                                }
                            },
                            iframe: {
                                tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
                                preload: !0,
                                css: {},
                                attr: {
                                    scrolling: "auto"
                                }
                            },
                            video: {
                                tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                                format: "",
                                autoStart: !0
                            },
                            defaultType: "image",
                            animationEffect: "zoom",
                            animationDuration: 366,
                            zoomOpacity: "auto",
                            transitionEffect: "fade",
                            transitionDuration: 366,
                            slideClass: "",
                            baseClass: "",
                            baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',
                            spinnerTpl: '<div class="fancybox-loading"></div>',
                            errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                            btnTpl: {
                                download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                                zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                                close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                                arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                                arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                                smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                            },
                            parentEl: "body",
                            hideScrollbar: !0,
                            autoFocus: !0,
                            backFocus: !0,
                            trapFocus: !0,
                            fullScreen: {
                                autoStart: !1
                            },
                            touch: {
                                vertical: !0,
                                momentum: !0
                            },
                            hash: null,
                            media: {},
                            slideShow: {
                                autoStart: !1,
                                speed: 3e3
                            },
                            thumbs: {
                                autoStart: !1,
                                hideOnClose: !0,
                                parentEl: ".fancybox-container",
                                axis: "y"
                            },
                            wheel: "auto",
                            onInit: i.noop,
                            beforeLoad: i.noop,
                            afterLoad: i.noop,
                            beforeShow: i.noop,
                            afterShow: i.noop,
                            beforeClose: i.noop,
                            afterClose: i.noop,
                            onActivate: i.noop,
                            onDeactivate: i.noop,
                            clickContent: function(t, e) {
                                return "image" === t.type && "zoom"
                            },
                            clickSlide: "close",
                            clickOutside: "close",
                            dblclickContent: !1,
                            dblclickSlide: !1,
                            dblclickOutside: !1,
                            mobile: {
                                preventCaptionOverlap: !1,
                                idleTime: !1,
                                clickContent: function(t, e) {
                                    return "image" === t.type && "toggleControls"
                                },
                                clickSlide: function(t, e) {
                                    return "image" === t.type ? "toggleControls" : "close"
                                },
                                dblclickContent: function(t, e) {
                                    return "image" === t.type && "zoom"
                                },
                                dblclickSlide: function(t, e) {
                                    return "image" === t.type && "zoom"
                                }
                            },
                            lang: "en",
                            i18n: {
                                en: {
                                    CLOSE: "Close",
                                    NEXT: "Next",
                                    PREV: "Previous",
                                    ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                                    PLAY_START: "Start slideshow",
                                    PLAY_STOP: "Pause slideshow",
                                    FULL_SCREEN: "Full screen",
                                    THUMBS: "Thumbnails",
                                    DOWNLOAD: "Download",
                                    SHARE: "Share",
                                    ZOOM: "Zoom"
                                },
                                de: {
                                    CLOSE: "Schlie&szlig;en",
                                    NEXT: "Weiter",
                                    PREV: "Zur&uuml;ck",
                                    ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                                    PLAY_START: "Diaschau starten",
                                    PLAY_STOP: "Diaschau beenden",
                                    FULL_SCREEN: "Vollbild",
                                    THUMBS: "Vorschaubilder",
                                    DOWNLOAD: "Herunterladen",
                                    SHARE: "Teilen",
                                    ZOOM: "Vergr&ouml;&szlig;ern"
                                }
                            }
                        },
                        r = i(t),
                        l = i(e),
                        c = 0,
                        h = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                            return t.setTimeout(e, 1e3 / 60)
                        },
                        u = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                            t.clearTimeout(e)
                        },
                        d = function() {
                            var t, i = e.createElement("fakeelement"),
                                n = {
                                    transition: "transitionend",
                                    OTransition: "oTransitionEnd",
                                    MozTransition: "transitionend",
                                    WebkitTransition: "webkitTransitionEnd"
                                };
                            for (t in n)
                                if (void 0 !== i.style[t]) return n[t];
                            return "transitionend"
                        }(),
                        p = function(t) {
                            return t && t.length && t[0].offsetHeight
                        },
                        f = function(t, e) {
                            var n = i.extend(!0, {}, t, e);
                            return i.each(e, function(t, e) {
                                i.isArray(e) && (n[t] = e)
                            }), n
                        },
                        g = function(t, e, n) {
                            this.opts = f({
                                index: n
                            }, i.fancybox.defaults), i.isPlainObject(e) && (this.opts = f(this.opts, e)), i.fancybox.isMobile && (this.opts = f(this.opts, this.opts.mobile)), this.id = this.opts.id || ++c, this.currIndex = parseInt(this.opts.index, 10) || 0, this.prevIndex = null, this.prevPos = null, this.currPos = 0, this.firstRun = !0, this.group = [], this.slides = {}, this.addContent(t), this.group.length && this.init()
                        };
                    i.extend(g.prototype, {
                        init: function() {
                            var n, s, o = this,
                                a = o.group[o.currIndex].opts;
                            a.closeExisting && i.fancybox.close(!0), i("body").addClass("fancybox-active"), !i.fancybox.getInstance() && !1 !== a.hideScrollbar && !i.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), i("body").addClass("compensate-for-scrollbar")), s = "", i.each(a.buttons, function(t, e) {
                                s += a.btnTpl[e] || ""
                            }), n = i(o.translate(o, a.baseTpl.replace("{{buttons}}", s).replace("{{arrows}}", a.btnTpl.arrowLeft + a.btnTpl.arrowRight))).attr("id", "fancybox-container-" + o.id).addClass(a.baseClass).data("FancyBox", o).appendTo(a.parentEl), o.$refs = {
                                container: n
                            }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(t) {
                                o.$refs[t] = n.find(".fancybox-" + t)
                            }), o.trigger("onInit"), o.activate(), o.jumpTo(o.currIndex)
                        },
                        translate: function(t, e) {
                            var i = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                            return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                                return void 0 === i[e] ? t : i[e]
                            })
                        },
                        addContent: function(t) {
                            var e, n = this,
                                s = i.makeArray(t);
                            i.each(s, function(t, e) {
                                var s, o, a, r, l, c = {},
                                    h = {};
                                i.isPlainObject(e) ? (c = e, h = e.opts || e) : "object" === i.type(e) && i(e).length ? (h = (s = i(e)).data() || {}, (h = i.extend(!0, {}, h, h.options)).$orig = s, c.src = n.opts.src || h.src || s.attr("href"), c.type || c.src || (c.type = "inline", c.src = e)) : c = {
                                    type: "html",
                                    src: e + ""
                                }, c.opts = i.extend(!0, {}, n.opts, h), i.isArray(h.buttons) && (c.opts.buttons = h.buttons), i.fancybox.isMobile && c.opts.mobile && (c.opts = f(c.opts, c.opts.mobile)), o = c.type || c.opts.type, r = c.src || "", !o && r && ((a = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (o = "video", c.opts.video.format || (c.opts.video.format = "video/" + ("ogv" === a[1] ? "ogg" : a[1]))) : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? o = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? (o = "iframe", c = i.extend(!0, c, {
                                    contentType: "pdf",
                                    opts: {
                                        iframe: {
                                            preload: !1
                                        }
                                    }
                                })) : "#" === r.charAt(0) && (o = "inline")), o ? c.type = o : n.trigger("objectNeedsType", c), c.contentType || (c.contentType = i.inArray(c.type, ["html", "inline", "ajax"]) > -1 ? "html" : c.type), c.index = n.group.length, "auto" == c.opts.smallBtn && (c.opts.smallBtn = i.inArray(c.type, ["html", "inline", "ajax"]) > -1), "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn), c.$thumb = c.opts.$thumb || null, c.opts.$trigger && c.index === n.opts.index && (c.$thumb = c.opts.$trigger.find("img:first"), c.$thumb.length && (c.opts.$orig = c.opts.$trigger)), c.$thumb && c.$thumb.length || !c.opts.$orig || (c.$thumb = c.opts.$orig.find("img:first")), c.$thumb && !c.$thumb.length && (c.$thumb = null), c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null), "function" === i.type(c.opts.caption) && (c.opts.caption = c.opts.caption.apply(e, [n, c])), "function" === i.type(n.opts.caption) && (c.opts.caption = n.opts.caption.apply(e, [n, c])), c.opts.caption instanceof i || (c.opts.caption = void 0 === c.opts.caption ? "" : c.opts.caption + ""), "ajax" === c.type && (l = r.split(/\s+/, 2)).length > 1 && (c.src = l.shift(), c.opts.filter = l.shift()), c.opts.modal && (c.opts = i.extend(!0, c.opts, {
                                    trapFocus: !0,
                                    infobar: 0,
                                    toolbar: 0,
                                    smallBtn: 0,
                                    keyboard: 0,
                                    slideShow: 0,
                                    fullScreen: 0,
                                    thumbs: 0,
                                    touch: 0,
                                    clickContent: !1,
                                    clickSlide: !1,
                                    clickOutside: !1,
                                    dblclickContent: !1,
                                    dblclickSlide: !1,
                                    dblclickOutside: !1
                                })), n.group.push(c)
                            }), Object.keys(n.slides).length && (n.updateControls(), (e = n.Thumbs) && e.isActive && (e.create(), e.focus()))
                        },
                        addEvents: function() {
                            var e = this;
                            e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                                t.stopPropagation(), t.preventDefault(), e.close(t)
                            }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(t) {
                                t.stopPropagation(), t.preventDefault(), e.previous()
                            }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(t) {
                                t.stopPropagation(), t.preventDefault(), e.next()
                            }).on("click.fb", "[data-fancybox-zoom]", function(t) {
                                e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                            }), r.on("orientationchange.fb resize.fb", function(t) {
                                t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && u(e.requestId), e.requestId = h(function() {
                                    e.update(t)
                                })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function() {
                                    e.$refs.stage.show(), e.update(t)
                                }, i.fancybox.isMobile ? 600 : 250))
                            }), l.on("keydown.fb", function(t) {
                                var n = (i.fancybox ? i.fancybox.getInstance() : null).current,
                                    s = t.keyCode || t.which;
                                if (9 != s) {
                                    if (!(!n.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || i(t.target).is("input,textarea,video,audio,select"))) return 8 === s || 27 === s ? (t.preventDefault(), void e.close(t)) : 37 === s || 38 === s ? (t.preventDefault(), void e.previous()) : 39 === s || 40 === s ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, s)
                                } else n.opts.trapFocus && e.focus(t)
                            }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, l.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(t) {
                                e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1
                            }), e.idleInterval = t.setInterval(function() {
                                e.idleSecondsCounter++, e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls())
                            }, 1e3))
                        },
                        removeEvents: function() {
                            r.off("orientationchange.fb resize.fb"), l.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (t.clearInterval(this.idleInterval), this.idleInterval = null)
                        },
                        previous: function(t) {
                            return this.jumpTo(this.currPos - 1, t)
                        },
                        next: function(t) {
                            return this.jumpTo(this.currPos + 1, t)
                        },
                        jumpTo: function(t, e) {
                            var n, s, o, a, r, l, c, h, u, d = this,
                                f = d.group.length;
                            if (!(d.isDragging || d.isClosing || d.isAnimating && d.firstRun)) {
                                if (t = parseInt(t, 10), !(o = d.current ? d.current.opts.loop : d.opts.loop) && (t < 0 || t >= f)) return !1;
                                if (n = d.firstRun = !Object.keys(d.slides).length, r = d.current, d.prevIndex = d.currIndex, d.prevPos = d.currPos, a = d.createSlide(t), f > 1 && ((o || a.index < f - 1) && d.createSlide(t + 1), (o || a.index > 0) && d.createSlide(t - 1)), d.current = a, d.currIndex = a.index, d.currPos = a.pos, d.trigger("beforeShow", n), d.updateControls(), a.forcedDuration = void 0, i.isNumeric(e) ? a.forcedDuration = e : e = a.opts[n ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), s = d.isMoved(a), a.$slide.addClass("fancybox-slide--current"), n) return a.opts.animationEffect && e && d.$refs.container.css("transition-duration", e + "ms"), d.$refs.container.addClass("fancybox-is-open").trigger("focus"), d.loadSlide(a), void d.preload("image");
                                l = i.fancybox.getTranslate(r.$slide), c = i.fancybox.getTranslate(d.$refs.stage), i.each(d.slides, function(t, e) {
                                    i.fancybox.stop(e.$slide, !0)
                                }), r.pos !== a.pos && (r.isComplete = !1), r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), s ? (u = l.left - (r.pos * l.width + r.pos * r.opts.gutter), i.each(d.slides, function(t, n) {
                                    n.$slide.removeClass("fancybox-animated").removeClass(function(t, e) {
                                        return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                                    });
                                    var s = n.pos * l.width + n.pos * n.opts.gutter;
                                    i.fancybox.setTranslate(n.$slide, {
                                        top: 0,
                                        left: s - c.left + u
                                    }), n.pos !== a.pos && n.$slide.addClass("fancybox-slide--" + (n.pos > a.pos ? "next" : "previous")), p(n.$slide), i.fancybox.animate(n.$slide, {
                                        top: 0,
                                        left: (n.pos - a.pos) * l.width + (n.pos - a.pos) * n.opts.gutter
                                    }, e, function() {
                                        n.$slide.css({
                                            transform: "",
                                            opacity: ""
                                        }).removeClass("fancybox-slide--next fancybox-slide--previous"), n.pos === d.currPos && d.complete()
                                    })
                                })) : e && a.opts.transitionEffect && (h = "fancybox-animated fancybox-fx-" + a.opts.transitionEffect, r.$slide.addClass("fancybox-slide--" + (r.pos > a.pos ? "next" : "previous")), i.fancybox.animate(r.$slide, h, e, function() {
                                    r.$slide.removeClass(h).removeClass("fancybox-slide--next fancybox-slide--previous")
                                }, !1)), a.isLoaded ? d.revealContent(a) : d.loadSlide(a), d.preload("image")
                            }
                        },
                        createSlide: function(t) {
                            var e, n;
                            return n = (n = t % this.group.length) < 0 ? this.group.length + n : n, !this.slides[t] && this.group[n] && (e = i('<div class="fancybox-slide"></div>').appendTo(this.$refs.stage), this.slides[t] = i.extend(!0, {}, this.group[n], {
                                pos: t,
                                $slide: e,
                                isLoaded: !1
                            }), this.updateSlide(this.slides[t])), this.slides[t]
                        },
                        scaleToActual: function(t, e, n) {
                            var s, o, a, r, l, c = this,
                                h = c.current,
                                u = h.$content,
                                d = i.fancybox.getTranslate(h.$slide).width,
                                p = i.fancybox.getTranslate(h.$slide).height,
                                f = h.width,
                                g = h.height;
                            c.isAnimating || c.isMoved() || !u || "image" != h.type || !h.isLoaded || h.hasError || (c.isAnimating = !0, i.fancybox.stop(u), t = void 0 === t ? .5 * d : t, e = void 0 === e ? .5 * p : e, (s = i.fancybox.getTranslate(u)).top -= i.fancybox.getTranslate(h.$slide).top, s.left -= i.fancybox.getTranslate(h.$slide).left, r = f / s.width, l = g / s.height, o = .5 * d - .5 * f, a = .5 * p - .5 * g, f > d && ((o = s.left * r - (t * r - t)) > 0 && (o = 0), o < d - f && (o = d - f)), g > p && ((a = s.top * l - (e * l - e)) > 0 && (a = 0), a < p - g && (a = p - g)), c.updateCursor(f, g), i.fancybox.animate(u, {
                                top: a,
                                left: o,
                                scaleX: r,
                                scaleY: l
                            }, n || 366, function() {
                                c.isAnimating = !1
                            }), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
                        },
                        scaleToFit: function(t) {
                            var e, n = this,
                                s = n.current,
                                o = s.$content;
                            n.isAnimating || n.isMoved() || !o || "image" != s.type || !s.isLoaded || s.hasError || (n.isAnimating = !0, i.fancybox.stop(o), e = n.getFitPos(s), n.updateCursor(e.width, e.height), i.fancybox.animate(o, {
                                top: e.top,
                                left: e.left,
                                scaleX: e.width / o.width(),
                                scaleY: e.height / o.height()
                            }, t || 366, function() {
                                n.isAnimating = !1
                            }))
                        },
                        getFitPos: function(t) {
                            var e, n, s, o, a = t.$content,
                                r = t.$slide,
                                l = t.width || t.opts.width,
                                c = t.height || t.opts.height,
                                h = {};
                            return !!(t.isLoaded && a && a.length) && (e = i.fancybox.getTranslate(this.$refs.stage).width, n = i.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(r.css("paddingLeft")) + parseFloat(r.css("paddingRight")) + parseFloat(a.css("marginLeft")) + parseFloat(a.css("marginRight")), n -= parseFloat(r.css("paddingTop")) + parseFloat(r.css("paddingBottom")) + parseFloat(a.css("marginTop")) + parseFloat(a.css("marginBottom")), l && c || (l = e, c = n), (l *= s = Math.min(1, e / l, n / c)) > e - .5 && (l = e), (c *= s) > n - .5 && (c = n), "image" === t.type ? (h.top = Math.floor(.5 * (n - c)) + parseFloat(r.css("paddingTop")), h.left = Math.floor(.5 * (e - l)) + parseFloat(r.css("paddingLeft"))) : "video" === t.contentType && (c > l / (o = t.opts.width && t.opts.height ? l / c : t.opts.ratio || 16 / 9) ? c = l / o : l > c * o && (l = c * o)), h.width = l, h.height = c, h)
                        },
                        update: function(t) {
                            var e = this;
                            i.each(e.slides, function(i, n) {
                                e.updateSlide(n, t)
                            })
                        },
                        updateSlide: function(t, e) {
                            var n = t && t.$content,
                                s = t.width || t.opts.width,
                                o = t.height || t.opts.height,
                                a = t.$slide;
                            this.adjustCaption(t), n && (s || o || "video" === t.contentType) && !t.hasError && (i.fancybox.stop(n), i.fancybox.setTranslate(n, this.getFitPos(t)), t.pos === this.currPos && (this.isAnimating = !1, this.updateCursor())), this.adjustLayout(t), a.length && (a.trigger("refresh"), t.pos === this.currPos && this.$refs.toolbar.add(this.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", a.get(0).scrollHeight > a.get(0).clientHeight)), this.trigger("onUpdate", t, e)
                        },
                        centerSlide: function(t) {
                            var e = this,
                                n = e.current,
                                s = n.$slide;
                            !e.isClosing && n && (s.siblings().css({
                                transform: "",
                                opacity: ""
                            }), s.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), i.fancybox.animate(s, {
                                top: 0,
                                left: 0,
                                opacity: 1
                            }, void 0 === t ? 0 : t, function() {
                                s.css({
                                    transform: "",
                                    opacity: ""
                                }), n.isComplete || e.complete()
                            }, !1))
                        },
                        isMoved: function(t) {
                            var e, n, s = t || this.current;
                            return !!s && (n = i.fancybox.getTranslate(this.$refs.stage), e = i.fancybox.getTranslate(s.$slide), !s.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - n.top) > .5 || Math.abs(e.left - n.left) > .5))
                        },
                        updateCursor: function(t, e) {
                            var n, s, o = this.current,
                                a = this.$refs.container;
                            o && !this.isClosing && this.Guestures && (a.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), s = !!(n = this.canPan(t, e)) || this.isZoomable(), a.toggleClass("fancybox-is-zoomable", s), i("[data-fancybox-zoom]").prop("disabled", !s), n ? a.addClass("fancybox-can-pan") : s && ("zoom" === o.opts.clickContent || i.isFunction(o.opts.clickContent) && "zoom" == o.opts.clickContent(o)) ? a.addClass("fancybox-can-zoomIn") : o.opts.touch && (o.opts.touch.vertical || this.group.length > 1) && "video" !== o.contentType && a.addClass("fancybox-can-swipe"))
                        },
                        isZoomable: function() {
                            var t, e = this.current;
                            if (e && !this.isClosing && "image" === e.type && !e.hasError) {
                                if (!e.isLoaded) return !0;
                                if ((t = this.getFitPos(e)) && (e.width > t.width || e.height > t.height)) return !0
                            }
                            return !1
                        },
                        isScaledDown: function(t, e) {
                            var n = !1,
                                s = this.current,
                                o = s.$content;
                            return void 0 !== t && void 0 !== e ? n = t < s.width && e < s.height : o && (n = (n = i.fancybox.getTranslate(o)).width < s.width && n.height < s.height), n
                        },
                        canPan: function(t, e) {
                            var n = this.current,
                                s = null,
                                o = !1;
                            return "image" === n.type && (n.isComplete || t && e) && !n.hasError && (o = this.getFitPos(n), void 0 !== t && void 0 !== e ? s = {
                                width: t,
                                height: e
                            } : n.isComplete && (s = i.fancybox.getTranslate(n.$content)), s && o && (o = Math.abs(s.width - o.width) > 1.5 || Math.abs(s.height - o.height) > 1.5)), o
                        },
                        loadSlide: function(t) {
                            var e, n, s, o = this;
                            if (!t.isLoading && !t.isLoaded) {
                                if (t.isLoading = !0, !1 === o.trigger("beforeLoad", t)) return t.isLoading = !1, !1;
                                switch (e = t.type, (n = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                                    case "image":
                                        o.setImage(t);
                                        break;
                                    case "iframe":
                                        o.setIframe(t);
                                        break;
                                    case "html":
                                        o.setContent(t, t.src || t.content);
                                        break;
                                    case "video":
                                        o.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                                        break;
                                    case "inline":
                                        i(t.src).length ? o.setContent(t, i(t.src)) : o.setError(t);
                                        break;
                                    case "ajax":
                                        o.showLoading(t), s = i.ajax(i.extend({}, t.opts.ajax.settings, {
                                            url: t.src,
                                            success: function(e, i) {
                                                "success" === i && o.setContent(t, e)
                                            },
                                            error: function(e, i) {
                                                e && "abort" !== i && o.setError(t)
                                            }
                                        })), n.one("onReset", function() {
                                            s.abort()
                                        });
                                        break;
                                    default:
                                        o.setError(t)
                                }
                                return !0
                            }
                        },
                        setImage: function(t) {
                            var n, s = this;
                            setTimeout(function() {
                                var e = t.$image;
                                s.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || s.showLoading(t)
                            }, 50), s.checkSrcset(t), t.$content = i('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (n = e.createElement("img")).onerror = function() {
                                i(this).remove(), t.$ghost = null
                            }, n.onload = function() {
                                s.afterLoad(t)
                            }, t.$ghost = i(n).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), s.setBigImage(t)
                        },
                        checkSrcset: function(e) {
                            var i, n, s, o, a = e.opts.srcset || e.opts.image.srcset;
                            if (a) {
                                s = t.devicePixelRatio || 1, o = t.innerWidth * s, (n = a.split(",").map(function(t) {
                                    var e = {};
                                    return t.trim().split(/\s+/).forEach(function(t, i) {
                                        var n = parseInt(t.substring(0, t.length - 1), 10);
                                        if (0 === i) return e.url = t;
                                        n && (e.value = n, e.postfix = t[t.length - 1])
                                    }), e
                                })).sort(function(t, e) {
                                    return t.value - e.value
                                });
                                for (var r = 0; r < n.length; r++) {
                                    var l = n[r];
                                    if ("w" === l.postfix && l.value >= o || "x" === l.postfix && l.value >= s) {
                                        i = l;
                                        break
                                    }
                                }!i && n.length && (i = n[n.length - 1]), i && (e.src = i.url, e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value, e.width = i.value), e.opts.srcset = a)
                            }
                        },
                        setBigImage: function(t) {
                            var n = this,
                                s = e.createElement("img"),
                                o = i(s);
                            t.$image = o.one("error", function() {
                                n.setError(t)
                            }).one("load", function() {
                                var e;
                                t.$ghost || (n.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), n.afterLoad(t)), n.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (t.width / t.height > 1 && r.width() / r.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), o.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function() {
                                    t.$ghost && !n.isClosing && t.$ghost.hide()
                                }, Math.min(300, Math.max(1e3, t.height / 1600))), n.hideLoading(t))
                            }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (s.complete || "complete" == s.readyState) && o.naturalWidth && o.naturalHeight ? o.trigger("load") : s.error && o.trigger("error")
                        },
                        resolveImageSlideSize: function(t, e, i) {
                            var n = parseInt(t.opts.width, 10),
                                s = parseInt(t.opts.height, 10);
                            t.width = e, t.height = i, n > 0 && (t.width = n, t.height = Math.floor(n * i / e)), s > 0 && (t.width = Math.floor(s * e / i), t.height = s)
                        },
                        setIframe: function(t) {
                            var e, n = this,
                                s = t.opts.iframe,
                                o = t.$slide;
                            t.$content = i('<div class="fancybox-content' + (s.preload ? " fancybox-is-hidden" : "") + '"></div>').css(s.css).appendTo(o), o.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = i(s.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(s.attr).appendTo(t.$content), s.preload ? (n.showLoading(t), e.on("load.fb error.fb", function(e) {
                                this.isReady = 1, t.$slide.trigger("refresh"), n.afterLoad(t)
                            }), o.on("refresh.fb", function() {
                                var i, n = t.$content,
                                    a = s.css.width,
                                    r = s.css.height;
                                if (1 === e[0].isReady) {
                                    try {
                                        i = e.contents().find("body")
                                    } catch (t) {}
                                    i && i.length && i.children().length && (o.css("overflow", "visible"), n.css({
                                        width: "100%",
                                        "max-width": "100%",
                                        height: "9999px"
                                    }), void 0 === a && (a = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))), n.css("width", a || "").css("max-width", ""), void 0 === r && (r = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))), n.css("height", r || ""), o.css("overflow", "auto")), n.removeClass("fancybox-is-hidden")
                                }
                            })) : n.afterLoad(t), e.attr("src", t.src), o.one("onReset", function() {
                                try {
                                    i(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                                } catch (t) {}
                                i(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1
                            })
                        },
                        setContent: function(t, e) {
                            var n;
                            this.isClosing || (this.hideLoading(t), t.$content && i.fancybox.stop(t.$content), t.$slide.empty(), (n = e) && n.hasOwnProperty && n instanceof i && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = i("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === i.type(e) && (e = i("<div>").append(i.trim(e)).contents()), t.opts.filter && (e = i("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
                                i(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (i(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
                            }), i(e).appendTo(t.$slide), i(e).is("video,audio") && (i(e).addClass("fancybox-video"), i(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || i(e).attr("width"), t.opts.height = t.opts.height || i(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), this.afterLoad(t))
                        },
                        setError: function(t) {
                            t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
                        },
                        showLoading: function(t) {
                            (t = t || this.current) && !t.$spinner && (t.$spinner = i(this.translate(this, this.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
                        },
                        hideLoading: function(t) {
                            (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
                        },
                        afterLoad: function(t) {
                            this.isClosing || (t.isLoading = !1, t.isLoaded = !0, this.trigger("afterLoad", t), this.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = i(this.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                                return 2 == t.button && t.preventDefault(), !0
                            }), "image" === t.type && i('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), this.adjustCaption(t), this.adjustLayout(t), t.pos === this.currPos && this.updateCursor(), this.revealContent(t))
                        },
                        adjustCaption: function(t) {
                            var e, i = t || this.current,
                                n = i.opts.caption,
                                s = i.opts.preventCaptionOverlap,
                                o = this.$refs.caption,
                                a = !1;
                            o.toggleClass("fancybox-caption--separate", s), s && n && n.length && (i.pos !== this.currPos ? ((e = o.clone().appendTo(o.parent())).children().eq(0).empty().html(n), a = e.outerHeight(!0), e.empty().remove()) : this.$caption && (a = this.$caption.outerHeight(!0)), i.$slide.css("padding-bottom", a || ""))
                        },
                        adjustLayout: function(t) {
                            var e, i, n, s, o = t || this.current;
                            o.isLoaded && !0 !== o.opts.disableLayoutFix && (o.$content.css("margin-bottom", ""), o.$content.outerHeight() > o.$slide.height() + .5 && (n = o.$slide[0].style["padding-bottom"], s = o.$slide.css("padding-bottom"), parseFloat(s) > 0 && (e = o.$slide[0].scrollHeight, o.$slide.css("padding-bottom", 0), Math.abs(e - o.$slide[0].scrollHeight) < 1 && (i = s), o.$slide.css("padding-bottom", n))), o.$content.css("margin-bottom", i))
                        },
                        revealContent: function(t) {
                            var e, n, s, o, a = this,
                                r = t.$slide,
                                l = !1,
                                c = !1,
                                h = a.isMoved(t),
                                u = t.isRevealed;
                            return t.isRevealed = !0, e = t.opts[a.firstRun ? "animationEffect" : "transitionEffect"], s = t.opts[a.firstRun ? "animationDuration" : "transitionDuration"], s = parseInt(void 0 === t.forcedDuration ? s : t.forcedDuration, 10), !h && t.pos === a.currPos && s || (e = !1), "zoom" === e && (t.pos === a.currPos && s && "image" === t.type && !t.hasError && (c = a.getThumbPos(t)) ? l = a.getFitPos(t) : e = "fade"), "zoom" === e ? (a.isAnimating = !0, l.scaleX = l.width / c.width, l.scaleY = l.height / c.height, "auto" == (o = t.opts.zoomOpacity) && (o = Math.abs(t.width / t.height - c.width / c.height) > .1), o && (c.opacity = .1, l.opacity = 1), i.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c), p(t.$content), void i.fancybox.animate(t.$content, l, s, function() {
                                a.isAnimating = !1, a.complete()
                            })) : (a.updateSlide(t), e ? (i.fancybox.stop(r), n = "fancybox-slide--" + (t.pos >= a.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, r.addClass(n).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), p(r), "image" !== t.type && t.$content.hide().show(0), void i.fancybox.animate(r, "fancybox-slide--current", s, function() {
                                r.removeClass(n).css({
                                    transform: "",
                                    opacity: ""
                                }), t.pos === a.currPos && a.complete()
                            }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), u || !h || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void(t.pos === a.currPos && a.complete())))
                        },
                        getThumbPos: function(t) {
                            var n, s, o, a, r, l, c = t.$thumb;
                            return !(!c || ! function(t) {
                                var n, s;
                                return !(!t || t.ownerDocument !== e) && (i(".fancybox-container").css("pointer-events", "none"), n = {
                                    x: t.getBoundingClientRect().left + t.offsetWidth / 2,
                                    y: t.getBoundingClientRect().top + t.offsetHeight / 2
                                }, s = e.elementFromPoint(n.x, n.y) === t, i(".fancybox-container").css("pointer-events", ""), s)
                            }(c[0])) && (s = i.fancybox.getTranslate(c), o = parseFloat(c.css("border-top-width") || 0), a = parseFloat(c.css("border-right-width") || 0), r = parseFloat(c.css("border-bottom-width") || 0), l = parseFloat(c.css("border-left-width") || 0), n = {
                                top: s.top + o,
                                left: s.left + l,
                                width: s.width - a - l,
                                height: s.height - o - r,
                                scaleX: 1,
                                scaleY: 1
                            }, s.width > 0 && s.height > 0 && n)
                        },
                        complete: function() {
                            var t, e = this,
                                n = e.current,
                                s = {};
                            !e.isMoved() && n.isLoaded && (n.isComplete || (n.isComplete = !0, n.$slide.siblings().trigger("onReset"), e.preload("inline"), p(n.$slide), n.$slide.addClass("fancybox-slide--complete"), i.each(e.slides, function(t, n) {
                                n.pos >= e.currPos - 1 && n.pos <= e.currPos + 1 ? s[n.pos] = n : n && (i.fancybox.stop(n.$slide), n.$slide.off().remove())
                            }), e.slides = s), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), n.opts.video.autoStart && n.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                                Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next()
                            }), n.opts.autoFocus && "html" === n.contentType && ((t = n.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)), n.$slide.scrollTop(0).scrollLeft(0))
                        },
                        preload: function(t) {
                            var e, i;
                            this.group.length < 2 || (i = this.slides[this.currPos + 1], (e = this.slides[this.currPos - 1]) && e.type === t && this.loadSlide(e), i && i.type === t && this.loadSlide(i))
                        },
                        focus: function(t, n) {
                            var s, o, a = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                            this.isClosing || ((s = (s = !t && this.current && this.current.isComplete ? this.current.$slide.find("*:visible" + (n ? ":not(.fancybox-close-small)" : "")) : this.$refs.container.find("*:visible")).filter(a).filter(function() {
                                return "hidden" !== i(this).css("visibility") && !i(this).hasClass("disabled")
                            })).length ? (o = s.index(e.activeElement), t && t.shiftKey ? (o < 0 || 0 == o) && (t.preventDefault(), s.eq(s.length - 1).trigger("focus")) : (o < 0 || o == s.length - 1) && (t && t.preventDefault(), s.eq(0).trigger("focus"))) : this.$refs.container.trigger("focus"))
                        },
                        activate: function() {
                            var t = this;
                            i(".fancybox-container").each(function() {
                                var e = i(this).data("FancyBox");
                                e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                            }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
                        },
                        close: function(t, e) {
                            var n, s, o, a, r, l, c, u = this,
                                d = u.current,
                                f = function() {
                                    u.cleanUp(t)
                                };
                            return !u.isClosing && (u.isClosing = !0, !1 === u.trigger("beforeClose", t) ? (u.isClosing = !1, h(function() {
                                u.update()
                            }), !1) : (u.removeEvents(), o = d.$content, n = d.opts.animationEffect, s = i.isNumeric(e) ? e : n ? d.opts.animationDuration : 0, d.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? i.fancybox.stop(d.$slide) : n = !1, d.$slide.siblings().trigger("onReset").remove(), s && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", s + "ms"), u.hideLoading(d), u.hideControls(!0), u.updateCursor(), "zoom" !== n || o && s && "image" === d.type && !u.isMoved() && !d.hasError && (c = u.getThumbPos(d)) || (n = "fade"), "zoom" === n ? (i.fancybox.stop(o), l = {
                                top: (a = i.fancybox.getTranslate(o)).top,
                                left: a.left,
                                scaleX: a.width / c.width,
                                scaleY: a.height / c.height,
                                width: c.width,
                                height: c.height
                            }, "auto" == (r = d.opts.zoomOpacity) && (r = Math.abs(d.width / d.height - c.width / c.height) > .1), r && (c.opacity = 0), i.fancybox.setTranslate(o, l), p(o), i.fancybox.animate(o, c, s, f), !0) : (n && s ? i.fancybox.animate(d.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + n, s, f) : !0 === t ? setTimeout(f, s) : f(), !0)))
                        },
                        cleanUp: function(e) {
                            var n, s, o, a = this.current.opts.$orig;
                            this.current.$slide.trigger("onReset"), this.$refs.container.empty().remove(), this.trigger("afterClose", e), this.current.opts.backFocus && (a && a.length && a.is(":visible") || (a = this.$trigger), a && a.length && (s = t.scrollX, o = t.scrollY, a.trigger("focus"), i("html, body").scrollTop(o).scrollLeft(s))), this.current = null, (n = i.fancybox.getInstance()) ? n.activate() : (i("body").removeClass("fancybox-active compensate-for-scrollbar"), i("#fancybox-style-noscroll").remove())
                        },
                        trigger: function(t, e) {
                            var n, s = Array.prototype.slice.call(arguments, 1),
                                o = e && e.opts ? e : this.current;
                            if (o ? s.unshift(o) : o = this, s.unshift(this), i.isFunction(o.opts[t]) && (n = o.opts[t].apply(o, s)), !1 === n) return n;
                            "afterClose" !== t && this.$refs ? this.$refs.container.trigger(t + ".fb", s) : l.trigger(t + ".fb", s)
                        },
                        updateControls: function() {
                            var t = this.current,
                                n = t.index,
                                s = this.$refs.container,
                                o = this.$refs.caption,
                                a = t.opts.caption;
                            t.$slide.trigger("refresh"), a && a.length ? (this.$caption = o, o.children().eq(0).html(a)) : this.$caption = null, this.hasHiddenControls || this.isIdle || this.showControls(), s.find("[data-fancybox-count]").html(this.group.length), s.find("[data-fancybox-index]").html(n + 1), s.find("[data-fancybox-prev]").prop("disabled", !t.opts.loop && n <= 0), s.find("[data-fancybox-next]").prop("disabled", !t.opts.loop && n >= this.group.length - 1), "image" === t.type ? s.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", t.opts.image.src || t.src).show() : t.opts.toolbar && s.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), i(e.activeElement).is(":hidden,[disabled]") && this.$refs.container.trigger("focus")
                        },
                        hideControls: function(t) {
                            var e = ["infobar", "toolbar", "nav"];
                            !t && this.current.opts.preventCaptionOverlap || e.push("caption"), this.$refs.container.removeClass(e.map(function(t) {
                                return "fancybox-show-" + t
                            }).join(" ")), this.hasHiddenControls = !0
                        },
                        showControls: function() {
                            var t = this.current ? this.current.opts : this.opts,
                                e = this.$refs.container;
                            this.hasHiddenControls = !1, this.idleSecondsCounter = 0, e.toggleClass("fancybox-show-toolbar", !(!t.toolbar || !t.buttons)).toggleClass("fancybox-show-infobar", !!(t.infobar && this.group.length > 1)).toggleClass("fancybox-show-caption", !!this.$caption).toggleClass("fancybox-show-nav", !!(t.arrows && this.group.length > 1)).toggleClass("fancybox-is-modal", !!t.modal)
                        },
                        toggleControls: function() {
                            this.hasHiddenControls ? this.showControls() : this.hideControls()
                        }
                    }), i.fancybox = {
                        version: "3.5.7",
                        defaults: a,
                        getInstance: function(t) {
                            var e = i('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                                n = Array.prototype.slice.call(arguments, 1);
                            return e instanceof g && ("string" === i.type(t) ? e[t].apply(e, n) : "function" === i.type(t) && t.apply(e, n), e)
                        },
                        open: function(t, e, i) {
                            return new g(t, e, i)
                        },
                        close: function(t) {
                            var e = this.getInstance();
                            e && (e.close(), !0 === t && this.close(t))
                        },
                        destroy: function() {
                            this.close(!0), l.add("body").off("click.fb-start", "**")
                        },
                        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                        use3d: (s = e.createElement("div"), t.getComputedStyle && t.getComputedStyle(s) && t.getComputedStyle(s).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)),
                        getTranslate: function(t) {
                            var e;
                            return !(!t || !t.length) && {
                                top: (e = t[0].getBoundingClientRect()).top || 0,
                                left: e.left || 0,
                                width: e.width,
                                height: e.height,
                                opacity: parseFloat(t.css("opacity"))
                            }
                        },
                        setTranslate: function(t, e) {
                            var i = "",
                                n = {};
                            if (t && e) return void 0 === e.left && void 0 === e.top || (i = (void 0 === e.left ? t.position().left : e.left) + "px, " + (void 0 === e.top ? t.position().top : e.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), void 0 !== e.scaleX && void 0 !== e.scaleY ? i += " scale(" + e.scaleX + ", " + e.scaleY + ")" : void 0 !== e.scaleX && (i += " scaleX(" + e.scaleX + ")"), i.length && (n.transform = i), void 0 !== e.opacity && (n.opacity = e.opacity), void 0 !== e.width && (n.width = e.width), void 0 !== e.height && (n.height = e.height), t.css(n)
                        },
                        animate: function(t, e, n, s, o) {
                            var a, r = this;
                            i.isFunction(n) && (s = n, n = null), r.stop(t), a = r.getTranslate(t), t.on(d, function(l) {
                                (!l || !l.originalEvent || t.is(l.originalEvent.target) && "z-index" != l.originalEvent.propertyName) && (r.stop(t), i.isNumeric(n) && t.css("transition-duration", ""), i.isPlainObject(e) ? void 0 !== e.scaleX && void 0 !== e.scaleY && r.setTranslate(t, {
                                    top: e.top,
                                    left: e.left,
                                    width: a.width * e.scaleX,
                                    height: a.height * e.scaleY,
                                    scaleX: 1,
                                    scaleY: 1
                                }) : !0 !== o && t.removeClass(e), i.isFunction(s) && s(l))
                            }), i.isNumeric(n) && t.css("transition-duration", n + "ms"), i.isPlainObject(e) ? (void 0 !== e.scaleX && void 0 !== e.scaleY && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), i.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function() {
                                t.trigger(d)
                            }, n + 33))
                        },
                        stop: function(t, e) {
                            t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(d), t.off(d).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
                        }
                    }, i.fn.fancybox = function(t) {
                        var e;
                        return (e = (t = t || {}).selector || !1) ? i("body").off("click.fb-start", e).on("click.fb-start", e, {
                            options: t
                        }, m) : this.off("click.fb-start").on("click.fb-start", {
                            items: this,
                            options: t
                        }, m), this
                    }, l.on("click.fb-start", "[data-fancybox]", m), l.on("click.fb-start", "[data-fancybox-trigger]", function(t) {
                        i('[data-fancybox="' + i(this).attr("data-fancybox-trigger") + '"]').eq(i(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                            $trigger: i(this)
                        })
                    }), o = null, l.on("mousedown mouseup focus blur", ".fancybox-button", function(t) {
                        switch (t.type) {
                            case "mousedown":
                                o = i(this);
                                break;
                            case "mouseup":
                                o = null;
                                break;
                            case "focusin":
                                i(".fancybox-button").removeClass("fancybox-focus"), i(this).is(o) || i(this).is("[disabled]") || i(this).addClass("fancybox-focus");
                                break;
                            case "focusout":
                                i(".fancybox-button").removeClass("fancybox-focus")
                        }
                    })
                }
            function m(t, e) {
                var n, s, o, a = [],
                    r = 0;
                t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = f(t.data.options, e)), n = e.$target || i(t.currentTarget).trigger("blur"), (o = i.fancybox.getInstance()) && o.$trigger && o.$trigger.is(n) || (a = e.selector ? i(e.selector) : (s = n.attr("data-fancybox") || "") ? (a = t.data ? t.data.items : []).length ? a.filter('[data-fancybox="' + s + '"]') : i('[data-fancybox="' + s + '"]') : [n], (r = i(a).index(n)) < 0 && (r = 0), (o = i.fancybox.open(a, e, r)).$trigger = n))
            }
        }(window, document, t),
        function(t) {
            "use strict";
            var e = {
                    youtube: {
                        matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                        params: {
                            autoplay: 1,
                            autohide: 1,
                            fs: 1,
                            rel: 0,
                            hd: 1,
                            wmode: "transparent",
                            enablejsapi: 1,
                            html5: 1
                        },
                        paramPlace: 8,
                        type: "iframe",
                        url: "https://www.youtube-nocookie.com/embed/$4",
                        thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
                    },
                    vimeo: {
                        matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                        params: {
                            autoplay: 1,
                            hd: 1,
                            show_title: 1,
                            show_byline: 1,
                            show_portrait: 0,
                            fullscreen: 1
                        },
                        paramPlace: 3,
                        type: "iframe",
                        url: "//player.vimeo.com/video/$2"
                    },
                    instagram: {
                        matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                        type: "image",
                        url: "//$1/p/$2/media/?size=l"
                    },
                    gmap_place: {
                        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                        type: "iframe",
                        url: function(t) {
                            return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                        }
                    },
                    gmap_search: {
                        matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
                        type: "iframe",
                        url: function(t) {
                            return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
                        }
                    }
                },
                i = function(e, i, n) {
                    if (e) return n = n || "", "object" === t.type(n) && (n = t.param(n, !0)), t.each(i, function(t, i) {
                        e = e.replace("$" + t, i || "")
                    }), n.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + n), e
                };
            t(document).on("objectNeedsType.fb", function(n, s, o) {
                var a, r, l, c, h, u, d, p = o.src || "",
                    f = !1;
                a = t.extend(!0, {}, e, o.opts.media), t.each(a, function(e, n) {
                    if (l = p.match(n.matcher)) {
                        if (f = n.type, d = e, u = {}, n.paramPlace && l[n.paramPlace]) {
                            "?" == (h = l[n.paramPlace])[0] && (h = h.substring(1)), h = h.split("&");
                            for (var s = 0; s < h.length; ++s) {
                                var a = h[s].split("=", 2);
                                2 == a.length && (u[a[0]] = decodeURIComponent(a[1].replace(/\+/g, " ")))
                            }
                        }
                        return c = t.extend(!0, {}, n.params, o.opts[e], u), p = "function" === t.type(n.url) ? n.url.call(this, l, c, o) : i(n.url, l, c), r = "function" === t.type(n.thumb) ? n.thumb.call(this, l, c, o) : i(n.thumb, l), "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function(t, e, i, n) {
                            return "&start=" + ((i ? 60 * parseInt(i, 10) : 0) + parseInt(n, 10))
                        }) : "vimeo" === e && (p = p.replace("&%23", "#")), !1
                    }
                }), f ? (o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = r), "iframe" === f && (o.opts = t.extend(!0, o.opts, {
                    iframe: {
                        preload: !1,
                        attr: {
                            scrolling: "no"
                        }
                    }
                })), t.extend(o, {
                    type: f,
                    src: p,
                    origSrc: o.src,
                    contentSource: d,
                    contentType: "image" === f ? "image" : "gmap_place" == d || "gmap_search" == d ? "map" : "video"
                })) : p && (o.type = o.opts.defaultType)
            });
            var n = {
                youtube: {
                    src: "https://www.youtube.com/iframe_api",
                    class: "YT",
                    loading: !1,
                    loaded: !1
                },
                vimeo: {
                    src: "https://player.vimeo.com/api/player.js",
                    class: "Vimeo",
                    loading: !1,
                    loaded: !1
                },
                load: function(t) {
                    var e, i = this;
                    this[t].loaded ? setTimeout(function() {
                        i.done(t)
                    }) : this[t].loading || (this[t].loading = !0, (e = document.createElement("script")).type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function() {
                        i[t].loaded = !0, i.done(t)
                    } : e.onload = function() {
                        i[t].loaded = !0, i.done(t)
                    }, document.body.appendChild(e))
                },
                done: function(e) {
                    var i, n;
                    "youtube" === e && delete window.onYouTubeIframeAPIReady, (i = t.fancybox.getInstance()) && (n = i.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(n.attr("id"), {
                        events: {
                            onStateChange: function(t) {
                                0 == t.data && i.next()
                            }
                        }
                    }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(n).on("ended", function() {
                        i.next()
                    }))
                }
            };
            t(document).on({
                "afterShow.fb": function(t, e, i) {
                    e.group.length > 1 && ("youtube" === i.contentSource || "vimeo" === i.contentSource) && n.load(i.contentSource)
                }
            })
        }(t),
        function(t, e, i) {
            "use strict";
            var n = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function(e) {
                    return t.setTimeout(e, 1e3 / 60)
                },
                s = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function(e) {
                    t.clearTimeout(e)
                },
                o = function(e) {
                    var i = [];
                    for (var n in e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[n].pageX ? i.push({
                        x: e[n].pageX,
                        y: e[n].pageY
                    }) : e[n].clientX && i.push({
                        x: e[n].clientX,
                        y: e[n].clientY
                    });
                    return i
                },
                a = function(t, e, i) {
                    return e && t ? "x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
                },
                r = function(t) {
                    if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || i.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
                    for (var e = 0, n = t[0].attributes, s = n.length; e < s; e++)
                        if ("data-fancybox-" === n[e].nodeName.substr(0, 14)) return !0;
                    return !1
                },
                l = function(e) {
                    for (var i, n, s, o, a, r = !1; i = e.get(0), n = void 0, s = void 0, o = void 0, a = void 0, n = t.getComputedStyle(i)["overflow-y"], s = t.getComputedStyle(i)["overflow-x"], o = ("scroll" === n || "auto" === n) && i.scrollHeight > i.clientHeight, a = ("scroll" === s || "auto" === s) && i.scrollWidth > i.clientWidth, !(r = o || a) && (e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body"););
                    return r
                },
                c = function(t) {
                    this.instance = t, this.$bg = t.$refs.bg, this.$stage = t.$refs.stage, this.$container = t.$refs.container, this.destroy(), this.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(this, "ontouchstart"))
                };
            c.prototype.destroy = function() {
                this.$container.off(".fb.touch"), i(e).off(".fb.touch"), this.requestId && (s(this.requestId), this.requestId = null), this.tapped && (clearTimeout(this.tapped), this.tapped = null)
            }, c.prototype.ontouchstart = function(n) {
                var s = i(n.target),
                    c = this.instance,
                    h = c.current,
                    u = h.$slide,
                    d = h.$content,
                    p = "touchstart" == n.type;
                if (p && this.$container.off("mousedown.fb.touch"), (!n.originalEvent || 2 != n.originalEvent.button) && u.length && s.length && !r(s) && !r(s.parent()) && (s.is("img") || !(n.originalEvent.clientX > s[0].clientWidth + s.offset().left))) {
                    if (!h || c.isAnimating || h.$slide.hasClass("fancybox-animated")) return n.stopPropagation(), void n.preventDefault();
                    this.realPoints = this.startPoints = o(n), this.startPoints.length && (h.touch && n.stopPropagation(), this.startEvent = n, this.canTap = !0, this.$target = s, this.$content = d, this.opts = h.opts.touch, this.isPanning = !1, this.isSwiping = !1, this.isZooming = !1, this.isScrolling = !1, this.canPan = c.canPan(), this.startTime = (new Date).getTime(), this.distanceX = this.distanceY = this.distance = 0, this.canvasWidth = Math.round(u[0].clientWidth), this.canvasHeight = Math.round(u[0].clientHeight), this.contentLastPos = null, this.contentStartPos = i.fancybox.getTranslate(this.$content) || {
                        top: 0,
                        left: 0
                    }, this.sliderStartPos = i.fancybox.getTranslate(u), this.stagePos = i.fancybox.getTranslate(c.$refs.stage), this.sliderStartPos.top -= this.stagePos.top, this.sliderStartPos.left -= this.stagePos.left, this.contentStartPos.top -= this.stagePos.top, this.contentStartPos.left -= this.stagePos.left, i(e).off(".fb.touch").on(p ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(this, "ontouchend")).on(p ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(this, "ontouchmove")), i.fancybox.isMobile && e.addEventListener("scroll", this.onscroll, !0), ((this.opts || this.canPan) && (s.is(this.$stage) || this.$stage.find(s).length) || (s.is(".fancybox-image") && n.preventDefault(), i.fancybox.isMobile && s.parents(".fancybox-caption").length)) && (this.isScrollable = l(s) || l(s.parent()), i.fancybox.isMobile && this.isScrollable || n.preventDefault(), (1 === this.startPoints.length || h.hasError) && (this.canPan ? (i.fancybox.stop(this.$content), this.isPanning = !0) : this.isSwiping = !0, this.$container.addClass("fancybox-is-grabbing")), 2 === this.startPoints.length && "image" === h.type && (h.isLoaded || h.$ghost) && (this.canTap = !1, this.isSwiping = !1, this.isPanning = !1, this.isZooming = !0, i.fancybox.stop(this.$content), this.centerPointStartX = .5 * (this.startPoints[0].x + this.startPoints[1].x) - i(t).scrollLeft(), this.centerPointStartY = .5 * (this.startPoints[0].y + this.startPoints[1].y) - i(t).scrollTop(), this.percentageOfImageAtPinchPointX = (this.centerPointStartX - this.contentStartPos.left) / this.contentStartPos.width, this.percentageOfImageAtPinchPointY = (this.centerPointStartY - this.contentStartPos.top) / this.contentStartPos.height, this.startDistanceBetweenFingers = a(this.startPoints[0], this.startPoints[1]))))
                }
            }, c.prototype.onscroll = function(t) {
                this.isScrolling = !0, e.removeEventListener("scroll", this.onscroll, !0)
            }, c.prototype.ontouchmove = function(t) {
                void 0 === t.originalEvent.buttons || 0 !== t.originalEvent.buttons ? this.isScrolling ? this.canTap = !1 : (this.newPoints = o(t), (this.opts || this.canPan) && this.newPoints.length && this.newPoints.length && (this.isSwiping && !0 === this.isSwiping || t.preventDefault(), this.distanceX = a(this.newPoints[0], this.startPoints[0], "x"), this.distanceY = a(this.newPoints[0], this.startPoints[0], "y"), this.distance = a(this.newPoints[0], this.startPoints[0]), this.distance > 0 && (this.isSwiping ? this.onSwipe(t) : this.isPanning ? this.onPan() : this.isZooming && this.onZoom()))) : this.ontouchend(t)
            }, c.prototype.onSwipe = function(e) {
                var o, a = this,
                    r = a.instance,
                    l = a.isSwiping,
                    c = a.sliderStartPos.left || 0;
                if (!0 !== l) "x" == l && (a.distanceX > 0 && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? c += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? c -= Math.pow(-a.distanceX, .8) : c += a.distanceX), a.sliderLastPos = {
                    top: "x" == l ? 0 : a.sliderStartPos.top + a.distanceY,
                    left: c
                }, a.requestId && (s(a.requestId), a.requestId = null), a.requestId = n(function() {
                    a.sliderLastPos && (i.each(a.instance.slides, function(t, e) {
                        var n = e.pos - a.instance.currPos;
                        i.fancybox.setTranslate(e.$slide, {
                            top: a.sliderLastPos.top,
                            left: a.sliderLastPos.left + n * a.canvasWidth + n * e.opts.gutter
                        })
                    }), a.$container.addClass("fancybox-is-sliding"))
                });
                else if (Math.abs(a.distance) > 10) {
                    if (a.canTap = !1, r.group.length < 2 && a.opts.vertical ? a.isSwiping = "y" : r.isDragging || !1 === a.opts.vertical || "auto" === a.opts.vertical && i(t).width() > 800 ? a.isSwiping = "x" : (o = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI), a.isSwiping = o > 45 && o < 135 ? "y" : "x"), "y" === a.isSwiping && i.fancybox.isMobile && a.isScrollable) return void(a.isScrolling = !0);
                    r.isDragging = a.isSwiping, a.startPoints = a.newPoints, i.each(r.slides, function(t, e) {
                        var n, s;
                        i.fancybox.stop(e.$slide), n = i.fancybox.getTranslate(e.$slide), s = i.fancybox.getTranslate(r.$refs.stage), e.$slide.css({
                            transform: "",
                            opacity: "",
                            "transition-duration": ""
                        }).removeClass("fancybox-animated").removeClass(function(t, e) {
                            return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                        }), e.pos === r.current.pos && (a.sliderStartPos.top = n.top - s.top, a.sliderStartPos.left = n.left - s.left), i.fancybox.setTranslate(e.$slide, {
                            top: n.top - s.top,
                            left: n.left - s.left
                        })
                    }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
                }
            }, c.prototype.onPan = function() {
                var t = this;
                a(t.newPoints[0], t.realPoints[0]) < (i.fancybox.isMobile ? 10 : 5) ? t.startPoints = t.newPoints : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && s(t.requestId), t.requestId = n(function() {
                    i.fancybox.setTranslate(t.$content, t.contentLastPos)
                }))
            }, c.prototype.limitMovement = function() {
                var t, e, i, n, s, o, a = this.canvasWidth,
                    r = this.canvasHeight,
                    l = this.distanceX,
                    c = this.distanceY,
                    h = this.contentStartPos,
                    u = h.left,
                    d = h.top,
                    p = h.width,
                    f = h.height;
                return s = p > a ? u + l : u, o = d + c, t = Math.max(0, .5 * a - .5 * p), e = Math.max(0, .5 * r - .5 * f), i = Math.min(a - p, .5 * a - .5 * p), n = Math.min(r - f, .5 * r - .5 * f), l > 0 && s > t && (s = t - 1 + Math.pow(-t + u + l, .8) || 0), l < 0 && s < i && (s = i + 1 - Math.pow(i - u - l, .8) || 0), c > 0 && o > e && (o = e - 1 + Math.pow(-e + d + c, .8) || 0), c < 0 && o < n && (o = n + 1 - Math.pow(n - d - c, .8) || 0), {
                    top: o,
                    left: s
                }
            }, c.prototype.limitPosition = function(t, e, i, n) {
                var s = this.canvasWidth,
                    o = this.canvasHeight;
                return t = i > s ? (t = t > 0 ? 0 : t) < s - i ? s - i : t : Math.max(0, s / 2 - i / 2), {
                    top: e = n > o ? (e = e > 0 ? 0 : e) < o - n ? o - n : e : Math.max(0, o / 2 - n / 2),
                    left: t
                }
            }, c.prototype.onZoom = function() {
                var e = this,
                    o = e.contentStartPos,
                    r = o.width,
                    l = o.height,
                    c = o.left,
                    h = o.top,
                    u = a(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
                    d = Math.floor(r * u),
                    p = Math.floor(l * u),
                    f = (r - d) * e.percentageOfImageAtPinchPointX,
                    g = (l - p) * e.percentageOfImageAtPinchPointY,
                    m = (e.newPoints[0].x + e.newPoints[1].x) / 2 - i(t).scrollLeft(),
                    v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - i(t).scrollTop(),
                    y = m - e.centerPointStartX,
                    b = {
                        top: h + (g + (v - e.centerPointStartY)),
                        left: c + (f + y),
                        scaleX: u,
                        scaleY: u
                    };
                e.canTap = !1, e.newWidth = d, e.newHeight = p, e.contentLastPos = b, e.requestId && s(e.requestId), e.requestId = n(function() {
                    i.fancybox.setTranslate(e.$content, e.contentLastPos)
                })
            }, c.prototype.ontouchend = function(t) {
                var n = this.isSwiping,
                    a = this.isPanning,
                    r = this.isZooming,
                    l = this.isScrolling;
                if (this.endPoints = o(t), this.dMs = Math.max((new Date).getTime() - this.startTime, 1), this.$container.removeClass("fancybox-is-grabbing"), i(e).off(".fb.touch"), e.removeEventListener("scroll", this.onscroll, !0), this.requestId && (s(this.requestId), this.requestId = null), this.isSwiping = !1, this.isPanning = !1, this.isZooming = !1, this.isScrolling = !1, this.instance.isDragging = !1, this.canTap) return this.onTap(t);
                this.speed = 100, this.velocityX = this.distanceX / this.dMs * .5, this.velocityY = this.distanceY / this.dMs * .5, a ? this.endPanning() : r ? this.endZooming() : this.endSwiping(n, l)
            }, c.prototype.endSwiping = function(t, e) {
                var n = !1,
                    s = this.instance.group.length,
                    o = Math.abs(this.distanceX),
                    a = "x" == t && s > 1 && (this.dMs > 130 && o > 10 || o > 50);
                this.sliderLastPos = null, "y" == t && !e && Math.abs(this.distanceY) > 50 ? (i.fancybox.animate(this.instance.current.$slide, {
                    top: this.sliderStartPos.top + this.distanceY + 150 * this.velocityY,
                    opacity: 0
                }, 200), n = this.instance.close(!0, 250)) : a && this.distanceX > 0 ? n = this.instance.previous(300) : a && this.distanceX < 0 && (n = this.instance.next(300)), !1 !== n || "x" != t && "y" != t || this.instance.centerSlide(200), this.$container.removeClass("fancybox-is-sliding")
            }, c.prototype.endPanning = function() {
                var t, e, n;
                this.contentLastPos && (!1 === this.opts.momentum || this.dMs > 350 ? (t = this.contentLastPos.left, e = this.contentLastPos.top) : (t = this.contentLastPos.left + 500 * this.velocityX, e = this.contentLastPos.top + 500 * this.velocityY), (n = this.limitPosition(t, e, this.contentStartPos.width, this.contentStartPos.height)).width = this.contentStartPos.width, n.height = this.contentStartPos.height, i.fancybox.animate(this.$content, n, 366))
            }, c.prototype.endZooming = function() {
                var t, e, n, s, o = this.instance.current,
                    a = this.newWidth,
                    r = this.newHeight;
                this.contentLastPos && (t = this.contentLastPos.left, s = {
                    top: e = this.contentLastPos.top,
                    left: t,
                    width: a,
                    height: r,
                    scaleX: 1,
                    scaleY: 1
                }, i.fancybox.setTranslate(this.$content, s), a < this.canvasWidth && r < this.canvasHeight ? this.instance.scaleToFit(150) : a > o.width || r > o.height ? this.instance.scaleToActual(this.centerPointStartX, this.centerPointStartY, 150) : (n = this.limitPosition(t, e, a, r), i.fancybox.animate(this.$content, n, 150)))
            }, c.prototype.onTap = function(e) {
                var n, s = this,
                    a = i(e.target),
                    r = s.instance,
                    l = r.current,
                    c = e && o(e) || s.startPoints,
                    h = c[0] ? c[0].x - i(t).scrollLeft() - s.stagePos.left : 0,
                    u = c[0] ? c[0].y - i(t).scrollTop() - s.stagePos.top : 0,
                    d = function(t) {
                        var n = l.opts[t];
                        if (i.isFunction(n) && (n = n.apply(r, [l, e])), n) switch (n) {
                            case "close":
                                r.close(s.startEvent);
                                break;
                            case "toggleControls":
                                r.toggleControls();
                                break;
                            case "next":
                                r.next();
                                break;
                            case "nextOrClose":
                                r.group.length > 1 ? r.next() : r.close(s.startEvent);
                                break;
                            case "zoom":
                                "image" == l.type && (l.isLoaded || l.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(h, u) : r.group.length < 2 && r.close(s.startEvent))
                        }
                    };
                if ((!e.originalEvent || 2 != e.originalEvent.button) && (a.is("img") || !(h > a[0].clientWidth + a.offset().left))) {
                    if (a.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) n = "Outside";
                    else if (a.is(".fancybox-slide")) n = "Slide";
                    else {
                        if (!r.current.$content || !r.current.$content.find(a).addBack().filter(a).length) return;
                        n = "Content"
                    }
                    if (s.tapped) {
                        if (clearTimeout(s.tapped), s.tapped = null, Math.abs(h - s.tapX) > 50 || Math.abs(u - s.tapY) > 50) return this;
                        d("dblclick" + n)
                    } else s.tapX = h, s.tapY = u, l.opts["dblclick" + n] && l.opts["dblclick" + n] !== l.opts["click" + n] ? s.tapped = setTimeout(function() {
                        s.tapped = null, r.isAnimating || d("click" + n)
                    }, 500) : d("click" + n);
                    return this
                }
            }, i(e).on("onActivate.fb", function(t, e) {
                e && !e.Guestures && (e.Guestures = new c(e))
            }).on("beforeClose.fb", function(t, e) {
                e && e.Guestures && e.Guestures.destroy()
            })
        }(window, document, t),
        function(t, e) {
            "use strict";
            e.extend(!0, e.fancybox.defaults, {
                btnTpl: {
                    slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
                },
                slideShow: {
                    autoStart: !1,
                    speed: 3e3,
                    progress: !0
                }
            });
            var i = function(t) {
                this.instance = t, this.init()
            };
            e.extend(i.prototype, {
                timer: null,
                isActive: !1,
                $button: null,
                init: function() {
                    var t = this,
                        i = t.instance,
                        n = i.group[i.currIndex].opts.slideShow;
                    t.$button = i.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                        t.toggle()
                    }), i.group.length < 2 || !n ? t.$button.hide() : n.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(i.$refs.inner))
                },
                set: function(t) {
                    var i = this.instance,
                        n = i.current;
                    n && (!0 === t || n.opts.loop || i.currIndex < i.group.length - 1) ? this.isActive && "video" !== n.contentType && (this.$progress && e.fancybox.animate(this.$progress.show(), {
                        scaleX: 1
                    }, n.opts.slideShow.speed), this.timer = setTimeout(function() {
                        i.current.opts.loop || i.current.index != i.group.length - 1 ? i.next() : i.jumpTo(0)
                    }, n.opts.slideShow.speed)) : (this.stop(), i.idleSecondsCounter = 0, i.showControls())
                },
                clear: function() {
                    clearTimeout(this.timer), this.timer = null, this.$progress && this.$progress.removeAttr("style").hide()
                },
                start: function() {
                    var t = this.instance.current;
                    t && (this.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), this.isActive = !0, t.isComplete && this.set(!0), this.instance.trigger("onSlideShowChange", !0))
                },
                stop: function() {
                    var t = this.instance.current;
                    this.clear(), this.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), this.isActive = !1, this.instance.trigger("onSlideShowChange", !1), this.$progress && this.$progress.removeAttr("style").hide()
                },
                toggle: function() {
                    this.isActive ? this.stop() : this.start()
                }
            }), e(t).on({
                "onInit.fb": function(t, e) {
                    e && !e.SlideShow && (e.SlideShow = new i(e))
                },
                "beforeShow.fb": function(t, e, i, n) {
                    var s = e && e.SlideShow;
                    n ? s && i.opts.slideShow.autoStart && s.start() : s && s.isActive && s.clear()
                },
                "afterShow.fb": function(t, e, i) {
                    var n = e && e.SlideShow;
                    n && n.isActive && n.set()
                },
                "afterKeydown.fb": function(i, n, s, o, a) {
                    var r = n && n.SlideShow;
                    !r || !s.opts.slideShow || 80 !== a && 32 !== a || e(t.activeElement).is("button,a,input") || (o.preventDefault(), r.toggle())
                },
                "beforeClose.fb onDeactivate.fb": function(t, e) {
                    var i = e && e.SlideShow;
                    i && i.stop()
                }
            }), e(t).on("visibilitychange", function() {
                var i = e.fancybox.getInstance(),
                    n = i && i.SlideShow;
                n && n.isActive && (t.hidden ? n.clear() : n.set())
            })
        }(document, t),
        function(t, e) {
            "use strict";
            var i = function() {
                for (var e = [
                        ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                        ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                        ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                        ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                    ], i = {}, n = 0; n < e.length; n++) {
                    var s = e[n];
                    if (s && s[1] in t) {
                        for (var o = 0; o < s.length; o++) i[e[0][o]] = s[o];
                        return i
                    }
                }
                return !1
            }();
            if (i) {
                var n = {
                    request: function(e) {
                        (e = e || t.documentElement)[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
                    },
                    exit: function() {
                        t[i.exitFullscreen]()
                    },
                    toggle: function(e) {
                        e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
                    },
                    isFullscreen: function() {
                        return Boolean(t[i.fullscreenElement])
                    },
                    enabled: function() {
                        return Boolean(t[i.fullscreenEnabled])
                    }
                };
                e.extend(!0, e.fancybox.defaults, {
                    btnTpl: {
                        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
                    },
                    fullScreen: {
                        autoStart: !1
                    }
                }), e(t).on(i.fullscreenchange, function() {
                    var t = n.isFullscreen(),
                        i = e.fancybox.getInstance();
                    i && (i.current && "image" === i.current.type && i.isAnimating && (i.isAnimating = !1, i.update(!0, !0, 0), i.isComplete || i.complete()), i.trigger("onFullscreenChange", t), i.$refs.container.toggleClass("fancybox-is-fullscreen", t), i.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
                })
            }
            e(t).on({
                "onInit.fb": function(t, e) {
                    i ? e && e.group[e.currIndex].opts.fullScreen ? (e.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                        t.stopPropagation(), t.preventDefault(), n.toggle()
                    }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && n.request(), e.FullScreen = n) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
                },
                "afterKeydown.fb": function(t, e, i, n, s) {
                    e && e.FullScreen && 70 === s && (n.preventDefault(), e.FullScreen.toggle())
                },
                "beforeClose.fb": function(t, e) {
                    e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && n.exit()
                }
            })
        }(document, t),
        function(t, e) {
            "use strict";
            var i = "fancybox-thumbs";
            e.fancybox.defaults = e.extend(!0, {
                btnTpl: {
                    thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0,
                    parentEl: ".fancybox-container",
                    axis: "y"
                }
            }, e.fancybox.defaults);
            var n = function(t) {
                this.init(t)
            };
            e.extend(n.prototype, {
                $button: null,
                $grid: null,
                $list: null,
                isVisible: !1,
                isActive: !1,
                init: function(t) {
                    var e = this,
                        i = t.group,
                        n = 0;
                    e.instance = t, e.opts = i[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
                    for (var s = 0, o = i.length; s < o && (i[s].thumb && n++, !(n > 1)); s++);
                    n > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function() {
                        e.toggle()
                    }), e.isActive = !0) : e.$button.hide()
                },
                create: function() {
                    var t, n = this.instance,
                        s = this.opts.parentEl,
                        o = [];
                    this.$grid || (this.$grid = e('<div class="' + i + " " + i + "-" + this.opts.axis + '"></div>').appendTo(n.$refs.container.find(s).addBack().filter(s)), this.$grid.on("click", "a", function() {
                        n.jumpTo(e(this).attr("data-index"))
                    })), this.$list || (this.$list = e('<div class="' + i + '__list">').appendTo(this.$grid)), e.each(n.group, function(e, i) {
                        (t = i.thumb) || "image" !== i.type || (t = i.src), o.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
                    }), this.$list[0].innerHTML = o.join(""), "x" === this.opts.axis && this.$list.width(parseInt(this.$grid.css("padding-right"), 10) + n.group.length * this.$list.children().eq(0).outerWidth(!0))
                },
                focus: function(t) {
                    var e, i, n = this.$list,
                        s = this.$grid;
                    this.instance.current && (i = (e = n.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === this.opts.axis && (i.top < 0 || i.top > n.height() - e.outerHeight()) ? n.stop().animate({
                        scrollTop: n.scrollTop() + i.top
                    }, t) : "x" === this.opts.axis && (i.left < s.scrollLeft() || i.left > s.scrollLeft() + (s.width() - e.outerWidth())) && n.parent().stop().animate({
                        scrollLeft: i.left
                    }, t))
                },
                update: function() {
                    this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
                },
                hide: function() {
                    this.isVisible = !1, this.update()
                },
                show: function() {
                    this.isVisible = !0, this.update()
                },
                toggle: function() {
                    this.isVisible = !this.isVisible, this.update()
                }
            }), e(t).on({
                "onInit.fb": function(t, e) {
                    var i;
                    e && !e.Thumbs && (i = new n(e)).isActive && !0 === i.opts.autoStart && i.show()
                },
                "beforeShow.fb": function(t, e, i, n) {
                    var s = e && e.Thumbs;
                    s && s.isVisible && s.focus(n ? 0 : 250)
                },
                "afterKeydown.fb": function(t, e, i, n, s) {
                    var o = e && e.Thumbs;
                    o && o.isActive && 71 === s && (n.preventDefault(), o.toggle())
                },
                "beforeClose.fb": function(t, e) {
                    var i = e && e.Thumbs;
                    i && i.isVisible && !1 !== i.opts.hideOnClose && i.$grid.hide()
                }
            })
        }(document, t),
        function(t, e) {
            "use strict";
            e.extend(!0, e.fancybox.defaults, {
                btnTpl: {
                    share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
                },
                share: {
                    url: function(t, e) {
                        return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
                    },
                    tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
                }
            }), e(t).on("click", "[data-fancybox-share]", function() {
                var t, i, n, s, o = e.fancybox.getInstance(),
                    a = o.current || null;
                a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [o, a])), i = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, (n = t, s = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;",
                    "`": "&#x60;",
                    "=": "&#x3D;"
                }, String(n).replace(/[&<>"'`=\/]/g, function(t) {
                    return s[t]
                }))).replace(/\{\{descr\}\}/g, o.$caption ? encodeURIComponent(o.$caption.text()) : ""), e.fancybox.open({
                    src: o.translate(o, i),
                    type: "html",
                    opts: {
                        touch: !1,
                        animationEffect: !1,
                        afterLoad: function(t, e) {
                            o.$refs.container.one("beforeClose.fb", function() {
                                t.close(null, 0)
                            }), e.$content.find(".fancybox-share__button").click(function() {
                                return window.open(this.href, "Share", "width=550, height=450"), !1
                            })
                        },
                        mobile: {
                            autoFocus: !1
                        }
                    }
                }))
            })
        }(document, t),
        function(t, e, i) {
            "use strict";

            function n() {
                var e = t.location.hash.substr(1),
                    i = e.split("-"),
                    n = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) && parseInt(i.pop(-1), 10) || 1;
                return {
                    hash: e,
                    index: n < 1 ? 1 : n,
                    gallery: i.join("-")
                }
            }

            function s(t) {
                "" !== t.gallery && i("[data-fancybox='" + i.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
            }

            function o(t) {
                var e, i;
                return !!t && ("" !== (i = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && i)
            }
            i.escapeSelector || (i.escapeSelector = function(t) {
                return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                })
            }), i(function() {
                !1 !== i.fancybox.defaults.hash && (i(e).on({
                    "onInit.fb": function(t, e) {
                        var i, s;
                        !1 !== e.group[e.currIndex].opts.hash && (i = n(), (s = o(e)) && i.gallery && s == i.gallery && (e.currIndex = i.index - 1))
                    },
                    "beforeShow.fb": function(i, n, s, a) {
                        var r;
                        s && !1 !== s.opts.hash && (r = o(n)) && (n.currentHash = r + (n.group.length > 1 ? "-" + (s.index + 1) : ""), t.location.hash !== "#" + n.currentHash && (a && !n.origHash && (n.origHash = t.location.hash), n.hashTimer && clearTimeout(n.hashTimer), n.hashTimer = setTimeout(function() {
                            "replaceState" in t.history ? (t.history[a ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + n.currentHash), a && (n.hasCreatedHistory = !0)) : t.location.hash = n.currentHash, n.hashTimer = null
                        }, 300)))
                    },
                    "beforeClose.fb": function(i, n, s) {
                        s && !1 !== s.opts.hash && (clearTimeout(n.hashTimer), n.currentHash && n.hasCreatedHistory ? t.history.back() : n.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (n.origHash || "")) : t.location.hash = n.origHash), n.currentHash = null)
                    }
                }), i(t).on("hashchange.fb", function() {
                    var t = n(),
                        e = null;
                    i.each(i(".fancybox-container").get().reverse(), function(t, n) {
                        var s = i(n).data("FancyBox");
                        if (s && s.currentHash) return e = s, !1
                    }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && s(t)
                }), setTimeout(function() {
                    i.fancybox.getInstance() || s(n())
                }, 50))
            })
        }(window, document, t),
        function(t, e) {
            "use strict";
            var i = (new Date).getTime();
            e(t).on({
                "onInit.fb": function(t, e, n) {
                    e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(t) {
                        var n = e.current,
                            s = (new Date).getTime();
                        e.group.length < 2 || !1 === n.opts.wheel || "auto" === n.opts.wheel && "image" !== n.type || (t.preventDefault(), t.stopPropagation(), n.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, s - i < 250 || (i = s, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
                    })
                }
            })
        }(document, t)
    }).call(this, i(0))
}, function(t, e, i) {
    var n, s, o;
    ! function(a) {
        "use strict";
        s = [i(0)], void 0 === (o = "function" == typeof(n = function(t) {
            var e, i, n = {
                    interval: 100,
                    sensitivity: 6,
                    timeout: 0
                },
                s = 0,
                o = function(t) {
                    e = t.pageX, i = t.pageY
                };
            t.fn.hoverIntent = function(a, r, l) {
                var c = s++,
                    h = t.extend({}, n);
                t.isPlainObject(a) ? (h = t.extend(h, a), t.isFunction(h.out) || (h.out = h.over)) : h = t.isFunction(r) ? t.extend(h, {
                    over: a,
                    out: r,
                    selector: l
                }) : t.extend(h, {
                    over: a,
                    out: a,
                    selector: r
                });
                var u = function(n) {
                    var s = t.extend({}, n),
                        a = t(this),
                        r = a.data("hoverIntent");
                    r || a.data("hoverIntent", r = {});
                    var l = r[c];
                    l || (r[c] = l = {
                        id: c
                    }), l.timeoutId && (l.timeoutId = clearTimeout(l.timeoutId));
                    var u = l.event = "mousemove.hoverIntent.hoverIntent" + c;
                    if ("mouseenter" === n.type) {
                        if (l.isActive) return;
                        l.pX = s.pageX, l.pY = s.pageY, a.off(u, o).on(u, o), l.timeoutId = setTimeout(function() {
                            ! function t(n, s, a, r) {
                                if (Math.sqrt((a.pX - e) * (a.pX - e) + (a.pY - i) * (a.pY - i)) < r.sensitivity) return s.off(a.event, o), delete a.timeoutId, a.isActive = !0, n.pageX = e, n.pageY = i, delete a.pX, delete a.pY, r.over.apply(s[0], [n]);
                                a.pX = e, a.pY = i, a.timeoutId = setTimeout(function() {
                                    t(n, s, a, r)
                                }, r.interval)
                            }(s, a, l, h)
                        }, h.interval)
                    } else {
                        if (!l.isActive) return;
                        a.off(u, o), l.timeoutId = setTimeout(function() {
                            ! function(t, e, i, n) {
                                delete e.data("hoverIntent")[i.id], n.apply(e[0], [t])
                            }(s, a, l, h.out)
                        }, h.timeout)
                    }
                };
                return this.on({
                    "mouseenter.hoverIntent": u,
                    "mouseleave.hoverIntent": u
                }, h.selector)
            }
        }) ? n.apply(e, s) : n) || (t.exports = o)
    }()
}, function(t, e, i) {
    var n, s, o;
    s = [i(0)], void 0 === (o = "function" == typeof(n = function(t, e) {
        function i() {
            return new Date(Date.UTC.apply(Date, arguments))
        }

        function n() {
            var t = new Date;
            return i(t.getFullYear(), t.getMonth(), t.getDate())
        }

        function s(t, e) {
            return t.getUTCFullYear() === e.getUTCFullYear() && t.getUTCMonth() === e.getUTCMonth() && t.getUTCDate() === e.getUTCDate()
        }

        function o(i, n) {
            return function() {
                return n !== e && t.fn.datepicker.deprecated(n), this[i].apply(this, arguments)
            }
        }

        function a(e) {
            var i = {};
            if (f[e] || (e = e.split("-")[0], f[e])) {
                var n = f[e];
                return t.each(p, function(t, e) {
                    e in n && (i[e] = n[e])
                }), i
            }
        }
        var r = function() {
                var e = {
                    get: function(t) {
                        return this.slice(t)[0]
                    },
                    contains: function(t) {
                        for (var e = t && t.valueOf(), i = 0, n = this.length; i < n; i++)
                            if (0 <= this[i].valueOf() - e && this[i].valueOf() - e < 864e5) return i;
                        return -1
                    },
                    remove: function(t) {
                        this.splice(t, 1)
                    },
                    replace: function(e) {
                        e && (t.isArray(e) || (e = [e]), this.clear(), this.push.apply(this, e))
                    },
                    clear: function() {
                        this.length = 0
                    },
                    copy: function() {
                        var t = new r;
                        return t.replace(this), t
                    }
                };
                return function() {
                    var i = [];
                    return i.push.apply(i, arguments), t.extend(i, e), i
                }
            }(),
            l = function(e, i) {
                t.data(e, "datepicker", this), this._process_options(i), this.dates = new r, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = t(e), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = !!this.element.hasClass("date") && this.element.find(".add-on, .input-group-addon, .btn"), this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = t(g.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function(t, e) {
                    return Number(e) + 1
                }), this._process_options({
                    startDate: this._o.startDate,
                    endDate: this._o.endDate,
                    daysOfWeekDisabled: this.o.daysOfWeekDisabled,
                    daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
                    datesDisabled: this.o.datesDisabled
                }), this._allow_update = !1, this.setViewMode(this.o.startView), this._allow_update = !0, this.fillDow(), this.fillMonths(), this.update(), this.isInline && this.show()
            };
        l.prototype = {
            constructor: l,
            _resolveViewName: function(e) {
                return t.each(g.viewModes, function(i, n) {
                    if (e === i || -1 !== t.inArray(e, n.names)) return e = i, !1
                }), e
            },
            _resolveDaysOfWeek: function(e) {
                return t.isArray(e) || (e = e.split(/[,\s]*/)), t.map(e, Number)
            },
            _check_template: function(i) {
                try {
                    if (i === e || "" === i) return !1;
                    if ((i.match(/[<>]/g) || []).length <= 0) return !0;
                    var n = t(i);
                    return n.length > 0
                } catch (t) {
                    return !1
                }
            },
            _process_options: function(e) {
                this._o = t.extend({}, this._o, e);
                var s = this.o = t.extend({}, this._o),
                    o = s.language;
                f[o] || (o = o.split("-")[0], f[o] || (o = d.language)), s.language = o, s.startView = this._resolveViewName(s.startView), s.minViewMode = this._resolveViewName(s.minViewMode), s.maxViewMode = this._resolveViewName(s.maxViewMode), s.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, s.startView)), !0 !== s.multidate && (s.multidate = Number(s.multidate) || !1, !1 !== s.multidate && (s.multidate = Math.max(0, s.multidate))), s.multidateSeparator = String(s.multidateSeparator), s.weekStart %= 7, s.weekEnd = (s.weekStart + 6) % 7;
                var a = g.parseFormat(s.format);
                s.startDate !== -1 / 0 && (s.startDate ? s.startDate instanceof Date ? s.startDate = this._local_to_utc(this._zero_time(s.startDate)) : s.startDate = g.parseDate(s.startDate, a, s.language, s.assumeNearbyYear) : s.startDate = -1 / 0), s.endDate !== 1 / 0 && (s.endDate ? s.endDate instanceof Date ? s.endDate = this._local_to_utc(this._zero_time(s.endDate)) : s.endDate = g.parseDate(s.endDate, a, s.language, s.assumeNearbyYear) : s.endDate = 1 / 0), s.daysOfWeekDisabled = this._resolveDaysOfWeek(s.daysOfWeekDisabled || []), s.daysOfWeekHighlighted = this._resolveDaysOfWeek(s.daysOfWeekHighlighted || []), s.datesDisabled = s.datesDisabled || [], t.isArray(s.datesDisabled) || (s.datesDisabled = s.datesDisabled.split(",")), s.datesDisabled = t.map(s.datesDisabled, function(t) {
                    return g.parseDate(t, a, s.language, s.assumeNearbyYear)
                });
                var r = String(s.orientation).toLowerCase().split(/\s+/g),
                    l = s.orientation.toLowerCase();
                if (r = t.grep(r, function(t) {
                        return /^auto|left|right|top|bottom$/.test(t)
                    }), s.orientation = {
                        x: "auto",
                        y: "auto"
                    }, l && "auto" !== l)
                    if (1 === r.length) switch (r[0]) {
                        case "top":
                        case "bottom":
                            s.orientation.y = r[0];
                            break;
                        case "left":
                        case "right":
                            s.orientation.x = r[0]
                    } else l = t.grep(r, function(t) {
                        return /^left|right$/.test(t)
                    }), s.orientation.x = l[0] || "auto", l = t.grep(r, function(t) {
                        return /^top|bottom$/.test(t)
                    }), s.orientation.y = l[0] || "auto";
                if (s.defaultViewDate instanceof Date || "string" == typeof s.defaultViewDate) s.defaultViewDate = g.parseDate(s.defaultViewDate, a, s.language, s.assumeNearbyYear);
                else if (s.defaultViewDate) {
                    var c = s.defaultViewDate.year || (new Date).getFullYear(),
                        h = s.defaultViewDate.month || 0,
                        u = s.defaultViewDate.day || 1;
                    s.defaultViewDate = i(c, h, u)
                } else s.defaultViewDate = n()
            },
            _events: [],
            _secondaryEvents: [],
            _applyEvents: function(t) {
                for (var i, n, s, o = 0; o < t.length; o++) i = t[o][0], 2 === t[o].length ? (n = e, s = t[o][1]) : 3 === t[o].length && (n = t[o][1], s = t[o][2]), i.on(s, n)
            },
            _unapplyEvents: function(t) {
                for (var i, n, s, o = 0; o < t.length; o++) i = t[o][0], 2 === t[o].length ? (s = e, n = t[o][1]) : 3 === t[o].length && (s = t[o][1], n = t[o][2]), i.off(n, s)
            },
            _buildEvents: function() {
                var e = {
                    keyup: t.proxy(function(e) {
                        -1 === t.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update()
                    }, this),
                    keydown: t.proxy(this.keydown, this),
                    paste: t.proxy(this.paste, this)
                };
                !0 === this.o.showOnFocus && (e.focus = t.proxy(this.show, this)), this.isInput ? this._events = [
                    [this.element, e]
                ] : this.component && this.inputField.length ? this._events = [
                    [this.inputField, e],
                    [this.component, {
                        click: t.proxy(this.show, this)
                    }]
                ] : this._events = [
                    [this.element, {
                        click: t.proxy(this.show, this),
                        keydown: t.proxy(this.keydown, this)
                    }]
                ], this._events.push([this.element, "*", {
                    blur: t.proxy(function(t) {
                        this._focused_from = t.target
                    }, this)
                }], [this.element, {
                    blur: t.proxy(function(t) {
                        this._focused_from = t.target
                    }, this)
                }]), this.o.immediateUpdates && this._events.push([this.element, {
                    "changeYear changeMonth": t.proxy(function(t) {
                        this.update(t.date)
                    }, this)
                }]), this._secondaryEvents = [
                    [this.picker, {
                        click: t.proxy(this.click, this)
                    }],
                    [this.picker, ".prev, .next", {
                        click: t.proxy(this.navArrowsClick, this)
                    }],
                    [this.picker, ".day:not(.disabled)", {
                        click: t.proxy(this.dayCellClick, this)
                    }],
                    [t(window), {
                        resize: t.proxy(this.place, this)
                    }],
                    [t(document), {
                        "mousedown touchstart": t.proxy(function(t) {
                            this.element.is(t.target) || this.element.find(t.target).length || this.picker.is(t.target) || this.picker.find(t.target).length || this.isInline || this.hide()
                        }, this)
                    }]
                ]
            },
            _attachEvents: function() {
                this._detachEvents(), this._applyEvents(this._events)
            },
            _detachEvents: function() {
                this._unapplyEvents(this._events)
            },
            _attachSecondaryEvents: function() {
                this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents)
            },
            _detachSecondaryEvents: function() {
                this._unapplyEvents(this._secondaryEvents)
            },
            _trigger: function(e, i) {
                var n = i || this.dates.get(-1),
                    s = this._utc_to_local(n);
                this.element.trigger({
                    type: e,
                    date: s,
                    viewMode: this.viewMode,
                    dates: t.map(this.dates, this._utc_to_local),
                    format: t.proxy(function(t, e) {
                        0 === arguments.length ? (t = this.dates.length - 1, e = this.o.format) : "string" == typeof t && (e = t, t = this.dates.length - 1), e = e || this.o.format;
                        var i = this.dates.get(t);
                        return g.formatDate(i, e, this.o.language)
                    }, this)
                })
            },
            show: function() {
                if (!(this.inputField.prop("disabled") || this.inputField.prop("readonly") && !1 === this.o.enableOnReadonly)) return this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && t(this.element).blur(), this
            },
            hide: function() {
                return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this)
            },
            destroy: function() {
                return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this
            },
            paste: function(e) {
                var i;
                if (e.originalEvent.clipboardData && e.originalEvent.clipboardData.types && -1 !== t.inArray("text/plain", e.originalEvent.clipboardData.types)) i = e.originalEvent.clipboardData.getData("text/plain");
                else {
                    if (!window.clipboardData) return;
                    i = window.clipboardData.getData("Text")
                }
                this.setDate(i), this.update(), e.preventDefault()
            },
            _utc_to_local: function(t) {
                if (!t) return t;
                var e = new Date(t.getTime() + 6e4 * t.getTimezoneOffset());
                return e.getTimezoneOffset() !== t.getTimezoneOffset() && (e = new Date(t.getTime() + 6e4 * e.getTimezoneOffset())), e
            },
            _local_to_utc: function(t) {
                return t && new Date(t.getTime() - 6e4 * t.getTimezoneOffset())
            },
            _zero_time: function(t) {
                return t && new Date(t.getFullYear(), t.getMonth(), t.getDate())
            },
            _zero_utc_time: function(t) {
                return t && i(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())
            },
            getDates: function() {
                return t.map(this.dates, this._utc_to_local)
            },
            getUTCDates: function() {
                return t.map(this.dates, function(t) {
                    return new Date(t)
                })
            },
            getDate: function() {
                return this._utc_to_local(this.getUTCDate())
            },
            getUTCDate: function() {
                var t = this.dates.get(-1);
                return t !== e ? new Date(t) : null
            },
            clearDates: function() {
                this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide()
            },
            setDates: function() {
                var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.update.apply(this, e), this._trigger("changeDate"), this.setValue(), this
            },
            setUTCDates: function() {
                var e = t.isArray(arguments[0]) ? arguments[0] : arguments;
                return this.setDates.apply(this, t.map(e, this._utc_to_local)), this
            },
            setDate: o("setDates"),
            setUTCDate: o("setUTCDates"),
            remove: o("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead"),
            setValue: function() {
                var t = this.getFormattedDate();
                return this.inputField.val(t), this
            },
            getFormattedDate: function(i) {
                i === e && (i = this.o.format);
                var n = this.o.language;
                return t.map(this.dates, function(t) {
                    return g.formatDate(t, i, n)
                }).join(this.o.multidateSeparator)
            },
            getStartDate: function() {
                return this.o.startDate
            },
            setStartDate: function(t) {
                return this._process_options({
                    startDate: t
                }), this.update(), this.updateNavArrows(), this
            },
            getEndDate: function() {
                return this.o.endDate
            },
            setEndDate: function(t) {
                return this._process_options({
                    endDate: t
                }), this.update(), this.updateNavArrows(), this
            },
            setDaysOfWeekDisabled: function(t) {
                return this._process_options({
                    daysOfWeekDisabled: t
                }), this.update(), this
            },
            setDaysOfWeekHighlighted: function(t) {
                return this._process_options({
                    daysOfWeekHighlighted: t
                }), this.update(), this
            },
            setDatesDisabled: function(t) {
                return this._process_options({
                    datesDisabled: t
                }), this.update(), this
            },
            place: function() {
                if (this.isInline) return this;
                var e = this.picker.outerWidth(),
                    i = this.picker.outerHeight(),
                    n = t(this.o.container),
                    s = n.width(),
                    o = "body" === this.o.container ? t(document).scrollTop() : n.scrollTop(),
                    a = n.offset(),
                    r = [0];
                this.element.parents().each(function() {
                    var e = t(this).css("z-index");
                    "auto" !== e && 0 !== Number(e) && r.push(Number(e))
                });
                var l = Math.max.apply(Math, r) + this.o.zIndexOffset,
                    c = this.component ? this.component.parent().offset() : this.element.offset(),
                    h = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                    u = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                    d = c.left - a.left,
                    p = c.top - a.top;
                "body" !== this.o.container && (p += o), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (d -= e - u)) : c.left < 0 ? (this.picker.addClass("datepicker-orient-left"), d -= c.left - 10) : d + e > s ? (this.picker.addClass("datepicker-orient-right"), d += u - e) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left");
                var f = this.o.orientation.y;
                if ("auto" === f && (f = -o + p - i < 0 ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + f), "top" === f ? p -= i + parseInt(this.picker.css("padding-top")) : p += h, this.o.rtl) {
                    var g = s - (d + u);
                    this.picker.css({
                        top: p,
                        right: g,
                        zIndex: l
                    })
                } else this.picker.css({
                    top: p,
                    left: d,
                    zIndex: l
                });
                return this
            },
            _allow_update: !0,
            update: function() {
                if (!this._allow_update) return this;
                var e = this.dates.copy(),
                    i = [],
                    n = !1;
                return arguments.length ? (t.each(arguments, t.proxy(function(t, e) {
                    e instanceof Date && (e = this._local_to_utc(e)), i.push(e)
                }, this)), n = !0) : (i = (i = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val()) && this.o.multidate ? i.split(this.o.multidateSeparator) : [i], delete this.element.data().date), i = t.map(i, t.proxy(function(t) {
                    return g.parseDate(t, this.o.format, this.o.language, this.o.assumeNearbyYear)
                }, this)), i = t.grep(i, t.proxy(function(t) {
                    return !this.dateWithinRange(t) || !t
                }, this), !0), this.dates.replace(i), this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate), n ? (this.setValue(), this.element.change()) : this.dates.length && String(e) !== String(this.dates) && n && (this._trigger("changeDate"), this.element.change()), !this.dates.length && e.length && (this._trigger("clearDate"), this.element.change()), this.fill(), this
            },
            fillDow: function() {
                if (this.o.showWeekDays) {
                    var e = this.o.weekStart,
                        i = "<tr>";
                    for (this.o.calendarWeeks && (i += '<th class="cw">&#160;</th>'); e < this.o.weekStart + 7;) i += '<th class="dow', -1 !== t.inArray(e, this.o.daysOfWeekDisabled) && (i += " disabled"), i += '">' + f[this.o.language].daysMin[e++ % 7] + "</th>";
                    i += "</tr>", this.picker.find(".datepicker-days thead").append(i)
                }
            },
            fillMonths: function() {
                for (var t, e = this._utc_to_local(this.viewDate), i = "", n = 0; n < 12; n++) t = e && e.getMonth() === n ? " focused" : "", i += '<span class="month' + t + '">' + f[this.o.language].monthsShort[n] + "</span>";
                this.picker.find(".datepicker-months td").html(i)
            },
            setRange: function(e) {
                e && e.length ? this.range = t.map(e, function(t) {
                    return t.valueOf()
                }) : delete this.range, this.fill()
            },
            getClassNames: function(e) {
                var i = [],
                    o = this.viewDate.getUTCFullYear(),
                    a = this.viewDate.getUTCMonth(),
                    r = n();
                return e.getUTCFullYear() < o || e.getUTCFullYear() === o && e.getUTCMonth() < a ? i.push("old") : (e.getUTCFullYear() > o || e.getUTCFullYear() === o && e.getUTCMonth() > a) && i.push("new"), this.focusDate && e.valueOf() === this.focusDate.valueOf() && i.push("focused"), this.o.todayHighlight && s(e, r) && i.push("today"), -1 !== this.dates.contains(e) && i.push("active"), this.dateWithinRange(e) || i.push("disabled"), this.dateIsDisabled(e) && i.push("disabled", "disabled-date"), -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekHighlighted) && i.push("highlighted"), this.range && (e > this.range[0] && e < this.range[this.range.length - 1] && i.push("range"), -1 !== t.inArray(e.valueOf(), this.range) && i.push("selected"), e.valueOf() === this.range[0] && i.push("range-start"), e.valueOf() === this.range[this.range.length - 1] && i.push("range-end")), i
            },
            _fill_yearsView: function(i, n, s, o, a, r, l) {
                for (var c, h, u, d = "", p = s / 10, f = this.picker.find(i), g = Math.floor(o / s) * s, m = g + 9 * p, v = Math.floor(this.viewDate.getFullYear() / p) * p, y = t.map(this.dates, function(t) {
                        return Math.floor(t.getUTCFullYear() / p) * p
                    }), b = g - p; b <= m + p; b += p) c = [n], h = null, b === g - p ? c.push("old") : b === m + p && c.push("new"), -1 !== t.inArray(b, y) && c.push("active"), (b < a || b > r) && c.push("disabled"), b === v && c.push("focused"), l !== t.noop && ((u = l(new Date(b, 0, 1))) === e ? u = {} : "boolean" == typeof u ? u = {
                    enabled: u
                } : "string" == typeof u && (u = {
                    classes: u
                }), !1 === u.enabled && c.push("disabled"), u.classes && (c = c.concat(u.classes.split(/\s+/))), u.tooltip && (h = u.tooltip)), d += '<span class="' + c.join(" ") + '"' + (h ? ' title="' + h + '"' : "") + ">" + b + "</span>";
                f.find(".datepicker-switch").text(g + "-" + m), f.find("td").html(d)
            },
            fill: function() {
                var n, s, o = new Date(this.viewDate),
                    a = o.getUTCFullYear(),
                    r = o.getUTCMonth(),
                    l = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                    c = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                    h = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                    u = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                    d = f[this.o.language].today || f.en.today || "",
                    p = f[this.o.language].clear || f.en.clear || "",
                    m = f[this.o.language].titleFormat || f.en.titleFormat;
                if (!isNaN(a) && !isNaN(r)) {
                    this.picker.find(".datepicker-days .datepicker-switch").text(g.formatDate(o, m, this.o.language)), this.picker.find("tfoot .today").text(d).css("display", !0 === this.o.todayBtn || "linked" === this.o.todayBtn ? "table-cell" : "none"), this.picker.find("tfoot .clear").text(p).css("display", !0 === this.o.clearBtn ? "table-cell" : "none"), this.picker.find("thead .datepicker-title").text(this.o.title).css("display", "string" == typeof this.o.title && "" !== this.o.title ? "table-cell" : "none"), this.updateNavArrows(), this.fillMonths();
                    var v = i(a, r, 0),
                        y = v.getUTCDate();
                    v.setUTCDate(y - (v.getUTCDay() - this.o.weekStart + 7) % 7);
                    var b = new Date(v);
                    v.getUTCFullYear() < 100 && b.setUTCFullYear(v.getUTCFullYear()), b.setUTCDate(b.getUTCDate() + 42), b = b.valueOf();
                    for (var w, x, _ = []; v.valueOf() < b;) {
                        if ((w = v.getUTCDay()) === this.o.weekStart && (_.push("<tr>"), this.o.calendarWeeks)) {
                            var k = new Date(+v + (this.o.weekStart - w - 7) % 7 * 864e5),
                                C = new Date(Number(k) + (11 - k.getUTCDay()) % 7 * 864e5),
                                $ = new Date(Number($ = i(C.getUTCFullYear(), 0, 1)) + (11 - $.getUTCDay()) % 7 * 864e5),
                                T = (C - $) / 864e5 / 7 + 1;
                            _.push('<td class="cw">' + T + "</td>")
                        }(x = this.getClassNames(v)).push("day");
                        var D = v.getUTCDate();
                        this.o.beforeShowDay !== t.noop && ((s = this.o.beforeShowDay(this._utc_to_local(v))) === e ? s = {} : "boolean" == typeof s ? s = {
                            enabled: s
                        } : "string" == typeof s && (s = {
                            classes: s
                        }), !1 === s.enabled && x.push("disabled"), s.classes && (x = x.concat(s.classes.split(/\s+/))), s.tooltip && (n = s.tooltip), s.content && (D = s.content)), x = t.isFunction(t.uniqueSort) ? t.uniqueSort(x) : t.unique(x), _.push('<td class="' + x.join(" ") + '"' + (n ? ' title="' + n + '"' : "") + ' data-date="' + v.getTime().toString() + '">' + D + "</td>"), n = null, w === this.o.weekEnd && _.push("</tr>"), v.setUTCDate(v.getUTCDate() + 1)
                    }
                    this.picker.find(".datepicker-days tbody").html(_.join(""));
                    var S = f[this.o.language].monthsTitle || f.en.monthsTitle || "Months",
                        E = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? S : a).end().find("tbody span").removeClass("active");
                    if (t.each(this.dates, function(t, e) {
                            e.getUTCFullYear() === a && E.eq(e.getUTCMonth()).addClass("active")
                        }), (a < l || a > h) && E.addClass("disabled"), a === l && E.slice(0, c).addClass("disabled"), a === h && E.slice(u + 1).addClass("disabled"), this.o.beforeShowMonth !== t.noop) {
                        var z = this;
                        t.each(E, function(i, n) {
                            var s = new Date(a, i, 1),
                                o = z.o.beforeShowMonth(s);
                            o === e ? o = {} : "boolean" == typeof o ? o = {
                                enabled: o
                            } : "string" == typeof o && (o = {
                                classes: o
                            }), !1 !== o.enabled || t(n).hasClass("disabled") || t(n).addClass("disabled"), o.classes && t(n).addClass(o.classes), o.tooltip && t(n).prop("title", o.tooltip)
                        })
                    }
                    this._fill_yearsView(".datepicker-years", "year", 10, a, l, h, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, a, l, h, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, a, l, h, this.o.beforeShowCentury)
                }
            },
            updateNavArrows: function() {
                if (this._allow_update) {
                    var t, e, i = new Date(this.viewDate),
                        n = i.getUTCFullYear(),
                        s = i.getUTCMonth(),
                        o = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCFullYear() : -1 / 0,
                        a = this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
                        r = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                        l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                        c = 1;
                    switch (this.viewMode) {
                        case 4:
                            c *= 10;
                        case 3:
                            c *= 10;
                        case 2:
                            c *= 10;
                        case 1:
                            t = Math.floor(n / c) * c < o, e = Math.floor(n / c) * c + c > r;
                            break;
                        case 0:
                            t = n <= o && s < a, e = n >= r && s > l
                    }
                    this.picker.find(".prev").toggleClass("disabled", t), this.picker.find(".next").toggleClass("disabled", e)
                }
            },
            click: function(e) {
                var s, o, a;
                e.preventDefault(), e.stopPropagation(), (s = t(e.target)).hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1), s.hasClass("today") && !s.hasClass("day") && (this.setViewMode(0), this._setDate(n(), "linked" === this.o.todayBtn ? null : "view")), s.hasClass("clear") && this.clearDates(), s.hasClass("disabled") || (s.hasClass("month") || s.hasClass("year") || s.hasClass("decade") || s.hasClass("century")) && (this.viewDate.setUTCDate(1), 1 === this.viewMode ? (a = s.parent().find("span").index(s), o = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(a)) : (a = 0, o = Number(s.text()), this.viewDate.setUTCFullYear(o)), this._trigger(g.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(i(o, a, 1)) : (this.setViewMode(this.viewMode - 1), this.fill())), this.picker.is(":visible") && this._focused_from && this._focused_from.focus(), delete this._focused_from
            },
            dayCellClick: function(e) {
                var i = t(e.currentTarget),
                    n = i.data("date"),
                    s = new Date(n);
                this.o.updateViewDate && (s.getUTCFullYear() !== this.viewDate.getUTCFullYear() && this._trigger("changeYear", this.viewDate), s.getUTCMonth() !== this.viewDate.getUTCMonth() && this._trigger("changeMonth", this.viewDate)), this._setDate(s)
            },
            navArrowsClick: function(e) {
                var i = t(e.currentTarget),
                    n = i.hasClass("prev") ? -1 : 1;
                0 !== this.viewMode && (n *= 12 * g.viewModes[this.viewMode].navStep), this.viewDate = this.moveMonth(this.viewDate, n), this._trigger(g.viewModes[this.viewMode].e, this.viewDate), this.fill()
            },
            _toggle_multidate: function(t) {
                var e = this.dates.contains(t);
                if (t || this.dates.clear(), -1 !== e ? (!0 === this.o.multidate || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(e) : !1 === this.o.multidate ? (this.dates.clear(), this.dates.push(t)) : this.dates.push(t), "number" == typeof this.o.multidate)
                    for (; this.dates.length > this.o.multidate;) this.dates.remove(0)
            },
            _setDate: function(t, e) {
                e && "date" !== e || this._toggle_multidate(t && new Date(t)), (!e && this.o.updateViewDate || "view" === e) && (this.viewDate = t && new Date(t)), this.fill(), this.setValue(), e && "view" === e || this._trigger("changeDate"), this.inputField.trigger("change"), !this.o.autoclose || e && "date" !== e || this.hide()
            },
            moveDay: function(t, e) {
                var i = new Date(t);
                return i.setUTCDate(t.getUTCDate() + e), i
            },
            moveWeek: function(t, e) {
                return this.moveDay(t, 7 * e)
            },
            moveMonth: function(t, e) {
                if (! function(t) {
                        return t && !isNaN(t.getTime())
                    }(t)) return this.o.defaultViewDate;
                if (!e) return t;
                var i, n, s = new Date(t.valueOf()),
                    o = s.getUTCDate(),
                    a = s.getUTCMonth(),
                    r = Math.abs(e);
                if (e = e > 0 ? 1 : -1, 1 === r) n = -1 === e ? function() {
                    return s.getUTCMonth() === a
                } : function() {
                    return s.getUTCMonth() !== i
                }, i = a + e, s.setUTCMonth(i), i = (i + 12) % 12;
                else {
                    for (var l = 0; l < r; l++) s = this.moveMonth(s, e);
                    i = s.getUTCMonth(), s.setUTCDate(o), n = function() {
                        return i !== s.getUTCMonth()
                    }
                }
                for (; n();) s.setUTCDate(--o), s.setUTCMonth(i);
                return s
            },
            moveYear: function(t, e) {
                return this.moveMonth(t, 12 * e)
            },
            moveAvailableDate: function(t, e, i) {
                do {
                    if (t = this[i](t, e), !this.dateWithinRange(t)) return !1;
                    i = "moveDay"
                } while (this.dateIsDisabled(t));
                return t
            },
            weekOfDateIsDisabled: function(e) {
                return -1 !== t.inArray(e.getUTCDay(), this.o.daysOfWeekDisabled)
            },
            dateIsDisabled: function(e) {
                return this.weekOfDateIsDisabled(e) || t.grep(this.o.datesDisabled, function(t) {
                    return s(e, t)
                }).length > 0
            },
            dateWithinRange: function(t) {
                return t >= this.o.startDate && t <= this.o.endDate
            },
            keydown: function(t) {
                if (this.picker.is(":visible")) {
                    var e, i, n = !1,
                        s = this.focusDate || this.viewDate;
                    switch (t.keyCode) {
                        case 27:
                            this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), t.preventDefault(), t.stopPropagation();
                            break;
                        case 37:
                        case 38:
                        case 39:
                        case 40:
                            if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                            e = 37 === t.keyCode || 38 === t.keyCode ? -1 : 1, 0 === this.viewMode ? t.ctrlKey ? (i = this.moveAvailableDate(s, e, "moveYear")) && this._trigger("changeYear", this.viewDate) : t.shiftKey ? (i = this.moveAvailableDate(s, e, "moveMonth")) && this._trigger("changeMonth", this.viewDate) : 37 === t.keyCode || 39 === t.keyCode ? i = this.moveAvailableDate(s, e, "moveDay") : this.weekOfDateIsDisabled(s) || (i = this.moveAvailableDate(s, e, "moveWeek")) : 1 === this.viewMode ? (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), i = this.moveAvailableDate(s, e, "moveMonth")) : 2 === this.viewMode && (38 !== t.keyCode && 40 !== t.keyCode || (e *= 4), i = this.moveAvailableDate(s, e, "moveYear")), i && (this.focusDate = this.viewDate = i, this.setValue(), this.fill(), t.preventDefault());
                            break;
                        case 13:
                            if (!this.o.forceParse) break;
                            s = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(s), n = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (t.preventDefault(), t.stopPropagation(), this.o.autoclose && this.hide());
                            break;
                        case 9:
                            this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide()
                    }
                    n && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField.trigger("change"))
                } else 40 !== t.keyCode && 27 !== t.keyCode || (this.show(), t.stopPropagation())
            },
            setViewMode: function(t) {
                this.viewMode = t, this.picker.children("div").hide().filter(".datepicker-" + g.viewModes[this.viewMode].clsName).show(), this.updateNavArrows(), this._trigger("changeViewMode", new Date(this.viewDate))
            }
        };
        var c = function(e, i) {
            t.data(e, "datepicker", this), this.element = t(e), this.inputs = t.map(i.inputs, function(t) {
                return t.jquery ? t[0] : t
            }), delete i.inputs, this.keepEmptyValues = i.keepEmptyValues, delete i.keepEmptyValues, u.call(t(this.inputs), i).on("changeDate", t.proxy(this.dateUpdated, this)), this.pickers = t.map(this.inputs, function(e) {
                return t.data(e, "datepicker")
            }), this.updateDates()
        };
        c.prototype = {
            updateDates: function() {
                this.dates = t.map(this.pickers, function(t) {
                    return t.getUTCDate()
                }), this.updateRanges()
            },
            updateRanges: function() {
                var e = t.map(this.dates, function(t) {
                    return t.valueOf()
                });
                t.each(this.pickers, function(t, i) {
                    i.setRange(e)
                })
            },
            clearDates: function() {
                t.each(this.pickers, function(t, e) {
                    e.clearDates()
                })
            },
            dateUpdated: function(i) {
                if (!this.updating) {
                    this.updating = !0;
                    var n = t.data(i.target, "datepicker");
                    if (n !== e) {
                        var s = n.getUTCDate(),
                            o = this.keepEmptyValues,
                            a = t.inArray(i.target, this.inputs),
                            r = a - 1,
                            l = a + 1,
                            c = this.inputs.length;
                        if (-1 !== a) {
                            if (t.each(this.pickers, function(t, e) {
                                    e.getUTCDate() || e !== n && o || e.setUTCDate(s)
                                }), s < this.dates[r])
                                for (; r >= 0 && s < this.dates[r];) this.pickers[r--].setUTCDate(s);
                            else if (s > this.dates[l])
                                for (; l < c && s > this.dates[l];) this.pickers[l++].setUTCDate(s);
                            this.updateDates(), delete this.updating
                        }
                    }
                }
            },
            destroy: function() {
                t.map(this.pickers, function(t) {
                    t.destroy()
                }), t(this.inputs).off("changeDate", this.dateUpdated), delete this.element.data().datepicker
            },
            remove: o("destroy", "Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead")
        };
        var h = t.fn.datepicker,
            u = function(i) {
                var n, s = Array.apply(null, arguments);
                if (s.shift(), this.each(function() {
                        var e = t(this),
                            o = e.data("datepicker"),
                            r = "object" == typeof i && i;
                        if (!o) {
                            var h = function(e, i) {
                                    function n(t, e) {
                                        return e.toLowerCase()
                                    }
                                    var s, o = t(e).data(),
                                        a = {},
                                        r = new RegExp("^" + i.toLowerCase() + "([A-Z])");
                                    for (var l in i = new RegExp("^" + i.toLowerCase()), o) i.test(l) && (s = l.replace(r, n), a[s] = o[l]);
                                    return a
                                }(this, "date"),
                                u = t.extend({}, d, h, r),
                                p = a(u.language),
                                f = t.extend({}, d, p, h, r);
                            e.hasClass("input-daterange") || f.inputs ? (t.extend(f, {
                                inputs: f.inputs || e.find("input").toArray()
                            }), o = new c(this, f)) : o = new l(this, f), e.data("datepicker", o)
                        }
                        "string" == typeof i && "function" == typeof o[i] && (n = o[i].apply(o, s))
                    }), n === e || n instanceof l || n instanceof c) return this;
                if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + i + " function)");
                return n
            };
        t.fn.datepicker = u;
        var d = t.fn.datepicker.defaults = {
                assumeNearbyYear: !1,
                autoclose: !1,
                beforeShowDay: t.noop,
                beforeShowMonth: t.noop,
                beforeShowYear: t.noop,
                beforeShowDecade: t.noop,
                beforeShowCentury: t.noop,
                calendarWeeks: !1,
                clearBtn: !1,
                toggleActive: !1,
                daysOfWeekDisabled: [],
                daysOfWeekHighlighted: [],
                datesDisabled: [],
                endDate: 1 / 0,
                forceParse: !0,
                format: "mm/dd/yyyy",
                keepEmptyValues: !1,
                keyboardNavigation: !0,
                language: "en",
                minViewMode: 0,
                maxViewMode: 4,
                multidate: !1,
                multidateSeparator: ",",
                orientation: "auto",
                rtl: !1,
                startDate: -1 / 0,
                startView: 0,
                todayBtn: !1,
                todayHighlight: !1,
                updateViewDate: !0,
                weekStart: 0,
                disableTouchKeyboard: !1,
                enableOnReadonly: !0,
                showOnFocus: !0,
                zIndexOffset: 10,
                container: "body",
                immediateUpdates: !1,
                title: "",
                templates: {
                    leftArrow: "&#x00AB;",
                    rightArrow: "&#x00BB;"
                },
                showWeekDays: !0
            },
            p = t.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
        t.fn.datepicker.Constructor = l;
        var f = t.fn.datepicker.dates = {
                en: {
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    today: "Today",
                    clear: "Clear",
                    titleFormat: "MM yyyy"
                }
            },
            g = {
                viewModes: [{
                    names: ["days", "month"],
                    clsName: "days",
                    e: "changeMonth"
                }, {
                    names: ["months", "year"],
                    clsName: "months",
                    e: "changeYear",
                    navStep: 1
                }, {
                    names: ["years", "decade"],
                    clsName: "years",
                    e: "changeDecade",
                    navStep: 10
                }, {
                    names: ["decades", "century"],
                    clsName: "decades",
                    e: "changeCentury",
                    navStep: 100
                }, {
                    names: ["centuries", "millennium"],
                    clsName: "centuries",
                    e: "changeMillennium",
                    navStep: 1e3
                }],
                validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
                nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
                parseFormat: function(t) {
                    if ("function" == typeof t.toValue && "function" == typeof t.toDisplay) return t;
                    var e = t.replace(this.validParts, "\0").split("\0"),
                        i = t.match(this.validParts);
                    if (!e || !e.length || !i || 0 === i.length) throw new Error("Invalid date format.");
                    return {
                        separators: e,
                        parts: i
                    }
                },
                parseDate: function(i, s, o, a) {
                    function r() {
                        var t = this.slice(0, c[d].length),
                            e = c[d].slice(0, t.length);
                        return t.toLowerCase() === e.toLowerCase()
                    }
                    if (!i) return e;
                    if (i instanceof Date) return i;
                    if ("string" == typeof s && (s = g.parseFormat(s)), s.toValue) return s.toValue(i, s, o);
                    var c, h, u, d, p, m = {
                            d: "moveDay",
                            m: "moveMonth",
                            w: "moveWeek",
                            y: "moveYear"
                        },
                        v = {
                            yesterday: "-1d",
                            today: "+0d",
                            tomorrow: "+1d"
                        };
                    if (i in v && (i = v[i]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(i)) {
                        for (c = i.match(/([\-+]\d+)([dmwy])/gi), i = new Date, d = 0; d < c.length; d++) h = c[d].match(/([\-+]\d+)([dmwy])/i), u = Number(h[1]), p = m[h[2].toLowerCase()], i = l.prototype[p](i, u);
                        return l.prototype._zero_utc_time(i)
                    }
                    c = i && i.match(this.nonpunctuation) || [];
                    var y, b, w = {},
                        x = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                        _ = {
                            yyyy: function(t, e) {
                                return t.setUTCFullYear(a ? function(t, e) {
                                    return !0 === e && (e = 10), t < 100 && (t += 2e3) > (new Date).getFullYear() + e && (t -= 100), t
                                }(e, a) : e)
                            },
                            m: function(t, e) {
                                if (isNaN(t)) return t;
                                for (e -= 1; e < 0;) e += 12;
                                for (e %= 12, t.setUTCMonth(e); t.getUTCMonth() !== e;) t.setUTCDate(t.getUTCDate() - 1);
                                return t
                            },
                            d: function(t, e) {
                                return t.setUTCDate(e)
                            }
                        };
                    _.yy = _.yyyy, _.M = _.MM = _.mm = _.m, _.dd = _.d, i = n();
                    var k = s.parts.slice();
                    if (c.length !== k.length && (k = t(k).filter(function(e, i) {
                            return -1 !== t.inArray(i, x)
                        }).toArray()), c.length === k.length) {
                        var C, $, T;
                        for (d = 0, C = k.length; d < C; d++) {
                            if (y = parseInt(c[d], 10), h = k[d], isNaN(y)) switch (h) {
                                case "MM":
                                    b = t(f[o].months).filter(r), y = t.inArray(b[0], f[o].months) + 1;
                                    break;
                                case "M":
                                    b = t(f[o].monthsShort).filter(r), y = t.inArray(b[0], f[o].monthsShort) + 1
                            }
                            w[h] = y
                        }
                        for (d = 0; d < x.length; d++)(T = x[d]) in w && !isNaN(w[T]) && ($ = new Date(i), _[T]($, w[T]), isNaN($) || (i = $))
                    }
                    return i
                },
                formatDate: function(e, i, n) {
                    if (!e) return "";
                    if ("string" == typeof i && (i = g.parseFormat(i)), i.toDisplay) return i.toDisplay(e, i, n);
                    var s = {
                        d: e.getUTCDate(),
                        D: f[n].daysShort[e.getUTCDay()],
                        DD: f[n].days[e.getUTCDay()],
                        m: e.getUTCMonth() + 1,
                        M: f[n].monthsShort[e.getUTCMonth()],
                        MM: f[n].months[e.getUTCMonth()],
                        yy: e.getUTCFullYear().toString().substring(2),
                        yyyy: e.getUTCFullYear()
                    };
                    s.dd = (s.d < 10 ? "0" : "") + s.d, s.mm = (s.m < 10 ? "0" : "") + s.m, e = [];
                    for (var o = t.extend([], i.separators), a = 0, r = i.parts.length; a <= r; a++) o.length && e.push(o.shift()), e.push(s[i.parts[a]]);
                    return e.join("")
                },
                headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' + d.templates.leftArrow + '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' + d.templates.rightArrow + "</th></tr></thead>",
                contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
                footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>'
            };
        g.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + g.headTemplate + "<tbody></tbody>" + g.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + g.headTemplate + g.contTemplate + g.footTemplate + "</table></div></div>", t.fn.datepicker.DPGlobal = g, t.fn.datepicker.noConflict = function() {
            return t.fn.datepicker = h, this
        }, t.fn.datepicker.version = "1.8.0", t.fn.datepicker.deprecated = function(t) {
            var e = window.console;
            e && e.warn && e.warn("DEPRECATED: " + t)
        }, t(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(e) {
            var i = t(this);
            i.data("datepicker") || (e.preventDefault(), u.call(i, "show"))
        }), t(function() {
            u.call(t('[data-provide="datepicker-inline"]'))
        })
    }) ? n.apply(e, s) : n) || (t.exports = o)
}, function(t, e, i) {
    (function(t) {
        t.fn.datepicker.dates.ru = {
            days: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
            daysShort: ["Вск", "Пнд", "Втр", "Срд", "Чтв", "Птн", "Суб"],
            daysMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            months: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthsShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            today: "Сегодня",
            clear: "Очистить",
            format: "dd.mm.yyyy",
            weekStart: 1,
            monthsTitle: "Месяцы"
        }
    }).call(this, i(0))
}, function(t, e, i) {
    (function(t, e) {
        var i, n;
        ! function(t, i, n, s) {
            function o(e, i) {
                this.settings = null, this.options = t.extend({}, o.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                    time: null,
                    target: null,
                    pointer: null,
                    stage: {
                        start: null,
                        current: null
                    },
                    direction: null
                }, this._states = {
                    current: {},
                    tags: {
                        initializing: ["busy"],
                        animating: ["busy"],
                        dragging: ["interacting"]
                    }
                }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) {
                    this._handlers[i] = t.proxy(this[i], this)
                }, this)), t.each(o.Plugins, t.proxy(function(t, e) {
                    this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
                }, this)), t.each(o.Workers, t.proxy(function(e, i) {
                    this._pipe.push({
                        filter: i.filter,
                        run: t.proxy(i.run, this)
                    })
                }, this)), this.setup(), this.initialize()
            }
            o.Defaults = {
                items: 3,
                loop: !1,
                center: !1,
                rewind: !1,
                checkVisibility: !0,
                mouseDrag: !0,
                touchDrag: !0,
                pullDrag: !0,
                freeDrag: !1,
                margin: 0,
                stagePadding: 0,
                merge: !1,
                mergeFit: !0,
                autoWidth: !1,
                startPosition: 0,
                rtl: !1,
                smartSpeed: 250,
                fluidSpeed: !1,
                dragEndSpeed: !1,
                responsive: {},
                responsiveRefreshRate: 200,
                responsiveBaseElement: i,
                fallbackEasing: "swing",
                slideTransition: "",
                info: !1,
                nestedItemSelector: !1,
                itemElement: "div",
                stageElement: "div",
                refreshClass: "owl-refresh",
                loadedClass: "owl-loaded",
                loadingClass: "owl-loading",
                rtlClass: "owl-rtl",
                responsiveClass: "owl-responsive",
                dragClass: "owl-drag",
                itemClass: "owl-item",
                stageClass: "owl-stage",
                stageOuterClass: "owl-stage-outer",
                grabClass: "owl-grab"
            }, o.Width = {
                Default: "default",
                Inner: "inner",
                Outer: "outer"
            }, o.Type = {
                Event: "event",
                State: "state"
            }, o.Plugins = {}, o.Workers = [{
                filter: ["width", "settings"],
                run: function() {
                    this._width = this.$element.width()
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function(t) {
                    t.current = this._items && this._items[this.relative(this._current)]
                }
            }, {
                filter: ["items", "settings"],
                run: function() {
                    this.$stage.children(".cloned").remove()
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function(t) {
                    var e = this.settings.margin || "",
                        i = !this.settings.autoWidth,
                        n = this.settings.rtl,
                        s = {
                            width: "auto",
                            "margin-left": n ? e : "",
                            "margin-right": n ? "" : e
                        };
                    !i && this.$stage.children().css(s), t.css = s
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function(t) {
                    var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                        i = null,
                        n = this._items.length,
                        s = !this.settings.autoWidth,
                        o = [];
                    for (t.items = {
                            merge: !1,
                            width: e
                        }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[n] = s ? e * i : this._items[n].width();
                    this._widths = o
                }
            }, {
                filter: ["items", "settings"],
                run: function() {
                    var e = [],
                        i = this._items,
                        n = this.settings,
                        s = Math.max(2 * n.items, 4),
                        o = 2 * Math.ceil(i.length / 2),
                        a = n.loop && i.length ? n.rewind ? s : Math.max(s, o) : 0,
                        r = "",
                        l = "";
                    for (a /= 2; a > 0;) e.push(this.normalize(e.length / 2, !0)), r += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l, a -= 1;
                    this._clones = e, t(r).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function() {
                    for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, s = 0, o = []; ++i < e;) n = o[i - 1] || 0, s = this._widths[this.relative(i)] + this.settings.margin, o.push(n + s * t);
                    this._coordinates = o
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function() {
                    var t = this.settings.stagePadding,
                        e = this._coordinates,
                        i = {
                            width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                            "padding-left": t || "",
                            "padding-right": t || ""
                        };
                    this.$stage.css(i)
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function(t) {
                    var e = this._coordinates.length,
                        i = !this.settings.autoWidth,
                        n = this.$stage.children();
                    if (i && t.items.merge)
                        for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
                    else i && (t.css.width = t.items.width, n.css(t.css))
                }
            }, {
                filter: ["items"],
                run: function() {
                    this._coordinates.length < 1 && this.$stage.removeAttr("style")
                }
            }, {
                filter: ["width", "items", "settings"],
                run: function(t) {
                    t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
                }
            }, {
                filter: ["position"],
                run: function() {
                    this.animate(this.coordinates(this._current))
                }
            }, {
                filter: ["width", "position", "items", "settings"],
                run: function() {
                    var t, e, i, n, s = this.settings.rtl ? 1 : -1,
                        o = 2 * this.settings.stagePadding,
                        a = this.coordinates(this.current()) + o,
                        r = a + this.width() * s,
                        l = [];
                    for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * s, (this.op(t, "<=", a) && this.op(t, ">", r) || this.op(e, "<", a) && this.op(e, ">", r)) && l.push(i);
                    this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
                }
            }], o.prototype.initializeStage = function() {
                this.$stage = this.$element.find("." + this.settings.stageClass), this.$stage.length || (this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ">", {
                    class: this.settings.stageClass
                }).wrap(t("<div/>", {
                    class: this.settings.stageOuterClass
                })), this.$element.append(this.$stage.parent()))
            }, o.prototype.initializeItems = function() {
                var e = this.$element.find(".owl-item");
                if (e.length) return this._items = e.get().map(function(e) {
                    return t(e)
                }), this._mergers = this._items.map(function() {
                    return 1
                }), void this.refresh();
                this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
            }, o.prototype.initialize = function() {
                var t, e, i;
                (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : void 0, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t));
                this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
            }, o.prototype.isVisible = function() {
                return !this.settings.checkVisibility || this.$element.is(":visible")
            }, o.prototype.setup = function() {
                var e = this.viewport(),
                    i = this.options.responsive,
                    n = -1,
                    s = null;
                i ? (t.each(i, function(t) {
                    t <= e && t > n && (n = Number(t))
                }), "function" == typeof(s = t.extend({}, this.options, i[n])).stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : s = t.extend({}, this.options), this.trigger("change", {
                    property: {
                        name: "settings",
                        value: s
                    }
                }), this._breakpoint = n, this.settings = s, this.invalidate("settings"), this.trigger("changed", {
                    property: {
                        name: "settings",
                        value: this.settings
                    }
                })
            }, o.prototype.optionsLogic = function() {
                this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
            }, o.prototype.prepare = function(e) {
                var i = this.trigger("prepare", {
                    content: e
                });
                return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", {
                    content: i.data
                }), i.data
            }, o.prototype.update = function() {
                for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) {
                        return this[t]
                    }, this._invalidated), s = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(s), e++;
                this._invalidated = {}, !this.is("valid") && this.enter("valid")
            }, o.prototype.width = function(t) {
                switch (t = t || o.Width.Default) {
                    case o.Width.Inner:
                    case o.Width.Outer:
                        return this._width;
                    default:
                        return this._width - 2 * this.settings.stagePadding + this.settings.margin
                }
            }, o.prototype.refresh = function() {
                this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
            }, o.prototype.onThrottledResize = function() {
                i.clearTimeout(this.resizeTimer), this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
            }, o.prototype.onResize = function() {
                return !!this._items.length && (this._width !== this.$element.width() && (!!this.isVisible() && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
            }, o.prototype.registerEventHandlers = function() {
                t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                    return !1
                })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
            }, o.prototype.onDragStart = function(e) {
                var i = null;
                3 !== e.which && (t.support.transform ? i = {
                    x: (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === i.length ? 12 : 4],
                    y: i[16 === i.length ? 13 : 5]
                } : (i = this.$stage.position(), i = {
                    x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
                    y: i.top
                }), this.is("animating") && (t.support.transform ? this.animate(i.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = i, this._drag.stage.current = i, this._drag.pointer = this.pointer(e), t(n).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(n).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
                    var i = this.difference(this._drag.pointer, this.pointer(e));
                    t(n).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
                }, this)))
            }, o.prototype.onDragMove = function(t) {
                var e = null,
                    i = null,
                    n = null,
                    s = this.difference(this._drag.pointer, this.pointer(t)),
                    o = this.difference(this._drag.stage.start, s);
                this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * s.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + n), i + n)), this._drag.stage.current = o, this.animate(o.x))
            }, o.prototype.onDragEnd = function(e) {
                var i = this.difference(this._drag.pointer, this.pointer(e)),
                    s = this._drag.stage.current,
                    o = i.x > 0 ^ this.settings.rtl ? "left" : "right";
                t(n).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(s.x, 0 !== i.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                    return !1
                })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
            }, o.prototype.closest = function(e, i) {
                var n = -1,
                    s = this.width(),
                    o = this.coordinates();
                return this.settings.freeDrag || t.each(o, t.proxy(function(t, a) {
                    return "left" === i && e > a - 30 && e < a + 30 ? n = t : "right" === i && e > a - s - 30 && e < a - s + 30 ? n = t + 1 : this.op(e, "<", a) && this.op(e, ">", void 0 !== o[t + 1] ? o[t + 1] : a - s) && (n = "left" === i ? t + 1 : t), -1 === n
                }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (n = e = this.maximum())), n
            }, o.prototype.animate = function(e) {
                var i = this.speed() > 0;
                this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({
                    transform: "translate3d(" + e + "px,0px,0px)",
                    transition: this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "")
                }) : i ? this.$stage.animate({
                    left: e + "px"
                }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                    left: e + "px"
                })
            }, o.prototype.is = function(t) {
                return this._states.current[t] && this._states.current[t] > 0
            }, o.prototype.current = function(t) {
                if (void 0 === t) return this._current;
                if (0 !== this._items.length) {
                    if (t = this.normalize(t), this._current !== t) {
                        var e = this.trigger("change", {
                            property: {
                                name: "position",
                                value: t
                            }
                        });
                        void 0 !== e.data && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                            property: {
                                name: "position",
                                value: this._current
                            }
                        })
                    }
                    return this._current
                }
            }, o.prototype.invalidate = function(e) {
                return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) {
                    return e
                })
            }, o.prototype.reset = function(t) {
                void 0 !== (t = this.normalize(t)) && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
            }, o.prototype.normalize = function(t, e) {
                var i = this._items.length,
                    n = e ? 0 : this._clones.length;
                return !this.isNumeric(t) || i < 1 ? t = void 0 : (t < 0 || t >= i + n) && (t = ((t - n / 2) % i + i) % i + n / 2), t
            }, o.prototype.relative = function(t) {
                return t -= this._clones.length / 2, this.normalize(t, !0)
            }, o.prototype.maximum = function(t) {
                var e, i, n, s = this.settings,
                    o = this._coordinates.length;
                if (s.loop) o = this._clones.length / 2 + this._items.length - 1;
                else if (s.autoWidth || s.merge) {
                    if (e = this._items.length)
                        for (i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n););
                    o = e + 1
                } else o = s.center ? this._items.length - 1 : this._items.length - s.items;
                return t && (o -= this._clones.length / 2), Math.max(o, 0)
            }, o.prototype.minimum = function(t) {
                return t ? 0 : this._clones.length / 2
            }, o.prototype.items = function(t) {
                return void 0 === t ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
            }, o.prototype.mergers = function(t) {
                return void 0 === t ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
            }, o.prototype.clones = function(e) {
                var i = this._clones.length / 2,
                    n = i + this._items.length,
                    s = function(t) {
                        return t % 2 == 0 ? n + t / 2 : i - (t + 1) / 2
                    };
                return void 0 === e ? t.map(this._clones, function(t, e) {
                    return s(e)
                }) : t.map(this._clones, function(t, i) {
                    return t === e ? s(i) : null
                })
            }, o.prototype.speed = function(t) {
                return void 0 !== t && (this._speed = t), this._speed
            }, o.prototype.coordinates = function(e) {
                var i, n = 1,
                    s = e - 1;
                return void 0 === e ? t.map(this._coordinates, t.proxy(function(t, e) {
                    return this.coordinates(e)
                }, this)) : (this.settings.center ? (this.settings.rtl && (n = -1, s = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[s] || 0)) / 2 * n) : i = this._coordinates[s] || 0, i = Math.ceil(i))
            }, o.prototype.duration = function(t, e, i) {
                return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
            }, o.prototype.to = function(t, e) {
                var i = this.current(),
                    n = null,
                    s = t - this.relative(i),
                    o = (s > 0) - (s < 0),
                    a = this._items.length,
                    r = this.minimum(),
                    l = this.maximum();
                this.settings.loop ? (!this.settings.rewind && Math.abs(s) > a / 2 && (s += -1 * o * a), (n = (((t = i + s) - r) % a + a) % a + r) !== t && n - s <= l && n - s > 0 && (i = n - s, t = n, this.reset(i))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(r, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.isVisible() && this.update()
            }, o.prototype.next = function(t) {
                t = t || !1, this.to(this.relative(this.current()) + 1, t)
            }, o.prototype.prev = function(t) {
                t = t || !1, this.to(this.relative(this.current()) - 1, t)
            }, o.prototype.onTransitionEnd = function(t) {
                if (void 0 !== t && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
                this.leave("animating"), this.trigger("translated")
            }, o.prototype.viewport = function() {
                var e;
                return this.options.responsiveBaseElement !== i ? e = t(this.options.responsiveBaseElement).width() : i.innerWidth ? e = i.innerWidth : n.documentElement && n.documentElement.clientWidth ? e = n.documentElement.clientWidth : console.warn("Can not detect viewport width."), e
            }, o.prototype.replace = function(i) {
                this.$stage.empty(), this._items = [], i && (i = i instanceof e ? i : t(i)), this.settings.nestedItemSelector && (i = i.find("." + this.settings.nestedItemSelector)), i.filter(function() {
                    return 1 === this.nodeType
                }).each(t.proxy(function(t, e) {
                    e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
                }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
            }, o.prototype.add = function(i, n) {
                var s = this.relative(this._current);
                n = void 0 === n ? this._items.length : this.normalize(n, !0), i = i instanceof e ? i : t(i), this.trigger("add", {
                    content: i,
                    position: n
                }), i = this.prepare(i), 0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(i), 0 !== this._items.length && this._items[n - 1].after(i), this._items.push(i), this._mergers.push(1 * i.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(i), this._items.splice(n, 0, i), this._mergers.splice(n, 0, 1 * i.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", {
                    content: i,
                    position: n
                })
            }, o.prototype.remove = function(t) {
                void 0 !== (t = this.normalize(t, !0)) && (this.trigger("remove", {
                    content: this._items[t],
                    position: t
                }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                    content: null,
                    position: t
                }))
            }, o.prototype.preloadAutoWidthImages = function(e) {
                e.each(t.proxy(function(e, i) {
                    this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) {
                        i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                    }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
                }, this))
            }, o.prototype.destroy = function() {
                for (var e in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(n).off(".owl.core"), !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[e].destroy();
                this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
            }, o.prototype.op = function(t, e, i) {
                var n = this.settings.rtl;
                switch (e) {
                    case "<":
                        return n ? t > i : t < i;
                    case ">":
                        return n ? t < i : t > i;
                    case ">=":
                        return n ? t <= i : t >= i;
                    case "<=":
                        return n ? t >= i : t <= i
                }
            }, o.prototype.on = function(t, e, i, n) {
                t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
            }, o.prototype.off = function(t, e, i, n) {
                t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
            }, o.prototype.trigger = function(e, i, n, s, a) {
                var r = {
                        item: {
                            count: this._items.length,
                            index: this.current()
                        }
                    },
                    l = t.camelCase(t.grep(["on", e, n], function(t) {
                        return t
                    }).join("-").toLowerCase()),
                    c = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({
                        relatedTarget: this
                    }, r, i));
                return this._supress[e] || (t.each(this._plugins, function(t, e) {
                    e.onTrigger && e.onTrigger(c)
                }), this.register({
                    type: o.Type.Event,
                    name: e
                }), this.$element.trigger(c), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)), c
            }, o.prototype.enter = function(e) {
                t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
                    void 0 === this._states.current[e] && (this._states.current[e] = 0), this._states.current[e]++
                }, this))
            }, o.prototype.leave = function(e) {
                t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
                    this._states.current[e]--
                }, this))
            }, o.prototype.register = function(e) {
                if (e.type === o.Type.Event) {
                    if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                        var i = t.event.special[e.name]._default;
                        t.event.special[e.name]._default = function(t) {
                            return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                        }, t.event.special[e.name].owl = !0
                    }
                } else e.type === o.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, n) {
                    return t.inArray(i, this._states.tags[e.name]) === n
                }, this)))
            }, o.prototype.suppress = function(e) {
                t.each(e, t.proxy(function(t, e) {
                    this._supress[e] = !0
                }, this))
            }, o.prototype.release = function(e) {
                t.each(e, t.proxy(function(t, e) {
                    delete this._supress[e]
                }, this))
            }, o.prototype.pointer = function(t) {
                var e = {
                    x: null,
                    y: null
                };
                return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
            }, o.prototype.isNumeric = function(t) {
                return !isNaN(parseFloat(t))
            }, o.prototype.difference = function(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }, t.fn.owlCarousel = function(e) {
                var i = Array.prototype.slice.call(arguments, 1);
                return this.each(function() {
                    var n = t(this),
                        s = n.data("owl.carousel");
                    s || (s = new o(this, "object" == typeof e && e), n.data("owl.carousel", s), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) {
                        s.register({
                            type: o.Type.Event,
                            name: i
                        }), s.$element.on(i + ".owl.carousel.core", t.proxy(function(t) {
                            t.namespace && t.relatedTarget !== this && (this.suppress([i]), s[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                        }, s))
                    })), "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, i)
                })
            }, t.fn.owlCarousel.Constructor = o
        }(window.Zepto || t, window, document),
        function(t, e, i, n) {
            var s = function(e) {
                this._core = e, this._interval = null, this._visible = null, this._handlers = {
                    "initialized.owl.carousel": t.proxy(function(t) {
                        t.namespace && this._core.settings.autoRefresh && this.watch()
                    }, this)
                }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
            };
            s.Defaults = {
                autoRefresh: !0,
                autoRefreshInterval: 500
            }, s.prototype.watch = function() {
                this._interval || (this._visible = this._core.isVisible(), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
            }, s.prototype.refresh = function() {
                this._core.isVisible() !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
            }, s.prototype.destroy = function() {
                var t, i;
                for (t in e.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
                for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
            }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
        }(window.Zepto || t, window, document),
        function(t, e, i, n) {
            var s = function(e) {
                this._core = e, this._loaded = [], this._handlers = {
                    "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                        if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type)) {
                            var i = this._core.settings,
                                n = i.center && Math.ceil(i.items / 2) || i.items,
                                s = i.center && -1 * n || 0,
                                o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + s,
                                a = this._core.clones().length,
                                r = t.proxy(function(t, e) {
                                    this.load(e)
                                }, this);
                            for (i.lazyLoadEager > 0 && (n += i.lazyLoadEager, i.loop && (o -= i.lazyLoadEager, n++)); s++ < n;) this.load(a / 2 + this._core.relative(o)), a && t.each(this._core.clones(this._core.relative(o)), r), o++
                        }
                    }, this)
                }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
            };
            s.Defaults = {
                lazyLoad: !1,
                lazyLoadEager: 0
            }, s.prototype.load = function(i) {
                var n = this._core.$stage.children().eq(i),
                    s = n && n.find(".owl-lazy");
                !s || t.inArray(n.get(0), this._loaded) > -1 || (s.each(t.proxy(function(i, n) {
                    var s, o = t(n),
                        a = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src") || o.attr("data-srcset");
                    this._core.trigger("load", {
                        element: o,
                        url: a
                    }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() {
                        o.css("opacity", 1), this._core.trigger("loaded", {
                            element: o,
                            url: a
                        }, "lazy")
                    }, this)).attr("src", a) : o.is("source") ? o.one("load.owl.lazy", t.proxy(function() {
                        this._core.trigger("loaded", {
                            element: o,
                            url: a
                        }, "lazy")
                    }, this)).attr("srcset", a) : ((s = new Image).onload = t.proxy(function() {
                        o.css({
                            "background-image": 'url("' + a + '")',
                            opacity: "1"
                        }), this._core.trigger("loaded", {
                            element: o,
                            url: a
                        }, "lazy")
                    }, this), s.src = a)
                }, this)), this._loaded.push(n.get(0)))
            }, s.prototype.destroy = function() {
                var t, e;
                for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
            }, t.fn.owlCarousel.Constructor.Plugins.Lazy = s
        }(window.Zepto || t, window, document),
        function(t, e, i, n) {
            var s = function(i) {
                this._core = i, this._previousHeight = null, this._handlers = {
                    "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                        t.namespace && this._core.settings.autoHeight && this.update()
                    }, this),
                    "changed.owl.carousel": t.proxy(function(t) {
                        t.namespace && this._core.settings.autoHeight && "position" === t.property.name && this.update()
                    }, this),
                    "loaded.owl.lazy": t.proxy(function(t) {
                        t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                    }, this)
                }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._intervalId = null;
                var n = this;
                t(e).on("load", function() {
                    n._core.settings.autoHeight && n.update()
                }), t(e).resize(function() {
                    n._core.settings.autoHeight && (null != n._intervalId && clearTimeout(n._intervalId), n._intervalId = setTimeout(function() {
                        n.update()
                    }, 250))
                })
            };
            s.Defaults = {
                autoHeight: !1,
                autoHeightClass: "owl-height"
            }, s.prototype.update = function() {
                var e = this._core._current,
                    i = e + this._core.settings.items,
                    n = this._core.settings.lazyLoad,
                    s = this._core.$stage.children().toArray().slice(e, i),
                    o = [],
                    a = 0;
                t.each(s, function(e, i) {
                    o.push(t(i).height())
                }), (a = Math.max.apply(null, o)) <= 1 && n && this._previousHeight && (a = this._previousHeight), this._previousHeight = a, this._core.$stage.parent().height(a).addClass(this._core.settings.autoHeightClass)
            }, s.prototype.destroy = function() {
                var t, e;
                for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
            }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
        }(window.Zepto || t, window, document),
        function(t, e, i, n) {
            var s = function(e) {
                this._core = e, this._videos = {}, this._playing = null, this._handlers = {
                    "initialized.owl.carousel": t.proxy(function(t) {
                        t.namespace && this._core.register({
                            type: "state",
                            name: "playing",
                            tags: ["interacting"]
                        })
                    }, this),
                    "resize.owl.carousel": t.proxy(function(t) {
                        t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                    }, this),
                    "refreshed.owl.carousel": t.proxy(function(t) {
                        t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                    }, this),
                    "changed.owl.carousel": t.proxy(function(t) {
                        t.namespace && "position" === t.property.name && this._playing && this.stop()
                    }, this),
                    "prepared.owl.carousel": t.proxy(function(e) {
                        if (e.namespace) {
                            var i = t(e.content).find(".owl-video");
                            i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                        }
                    }, this)
                }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
                    this.play(t)
                }, this))
            };
            s.Defaults = {
                video: !1,
                videoHeight: !1,
                videoWidth: !1
            }, s.prototype.fetch = function(t, e) {
                var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                    n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                    s = t.attr("data-width") || this._core.settings.videoWidth,
                    o = t.attr("data-height") || this._core.settings.videoHeight,
                    a = t.attr("href");
                if (!a) throw new Error("Missing video URL.");
                if ((n = a.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1) i = "youtube";
                else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
                else {
                    if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                    i = "vzaar"
                }
                n = n[6], this._videos[a] = {
                    type: i,
                    id: n,
                    width: s,
                    height: o
                }, e.attr("data-video", a), this.thumbnail(t, this._videos[a])
            }, s.prototype.thumbnail = function(e, i) {
                var n, s, o = i.width && i.height ? "width:" + i.width + "px;height:" + i.height + "px;" : "",
                    a = e.find("img"),
                    r = "src",
                    l = "",
                    c = this._core.settings,
                    h = function(i) {
                        '<div class="owl-video-play-icon"></div>',
                        n = c.lazyLoad ? t("<div/>", {
                            class: "owl-video-tn " + l,
                            srcType: i
                        }) : t("<div/>", {
                            class: "owl-video-tn",
                            style: "opacity:1;background-image:url(" + i + ")"
                        }),
                        e.after(n),
                        e.after('<div class="owl-video-play-icon"></div>')
                    };
                if (e.wrap(t("<div/>", {
                        class: "owl-video-wrapper",
                        style: o
                    })), this._core.settings.lazyLoad && (r = "data-src", l = "owl-lazy"), a.length) return h(a.attr(r)), a.remove(), !1;
                "youtube" === i.type ? (s = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", h(s)) : "vimeo" === i.type ? t.ajax({
                    type: "GET",
                    url: "//vimeo.com/api/v2/video/" + i.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function(t) {
                        s = t[0].thumbnail_large, h(s)
                    }
                }) : "vzaar" === i.type && t.ajax({
                    type: "GET",
                    url: "//vzaar.com/api/videos/" + i.id + ".json",
                    jsonp: "callback",
                    dataType: "jsonp",
                    success: function(t) {
                        s = t.framegrab_url, h(s)
                    }
                })
            }, s.prototype.stop = function() {
                this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
            }, s.prototype.play = function(e) {
                var i, n = t(e.target).closest("." + this._core.settings.itemClass),
                    s = this._videos[n.attr("data-video")],
                    o = s.width || "100%",
                    a = s.height || this._core.$stage.height();
                this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), (i = t('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')).attr("height", a), i.attr("width", o), "youtube" === s.type ? i.attr("src", "//www.youtube.com/embed/" + s.id + "?autoplay=1&rel=0&v=" + s.id) : "vimeo" === s.type ? i.attr("src", "//player.vimeo.com/video/" + s.id + "?autoplay=1") : "vzaar" === s.type && i.attr("src", "//view.vzaar.com/" + s.id + "/player?autoplay=true"), t(i).wrap('<div class="owl-video-frame" />').insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
            }, s.prototype.isInFullScreen = function() {
                var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
                return e && t(e).parent().hasClass("owl-video-frame")
            }, s.prototype.destroy = function() {
                var t, e;
                for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
            }, t.fn.owlCarousel.Constructor.Plugins.Video = s
        }(window.Zepto || t, window, document), i = window.Zepto || t, window, document, (n = function(t) {
                this.core = t, this.core.options = i.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
                    "change.owl.carousel": i.proxy(function(t) {
                        t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                    }, this),
                    "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": i.proxy(function(t) {
                        t.namespace && (this.swapping = "translated" == t.type)
                    }, this),
                    "translate.owl.carousel": i.proxy(function(t) {
                        t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                    }, this)
                }, this.core.$element.on(this.handlers)
            }).Defaults = {
                animateOut: !1,
                animateIn: !1
            }, n.prototype.swap = function() {
                if (1 === this.core.settings.items && i.support.animation && i.support.transition) {
                    this.core.speed(0);
                    var t, e = i.proxy(this.clear, this),
                        n = this.core.$stage.children().eq(this.previous),
                        s = this.core.$stage.children().eq(this.next),
                        o = this.core.settings.animateIn,
                        a = this.core.settings.animateOut;
                    this.core.current() !== this.previous && (a && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(i.support.animation.end, e).css({
                        left: t + "px"
                    }).addClass("animated owl-animated-out").addClass(a)), o && s.one(i.support.animation.end, e).addClass("animated owl-animated-in").addClass(o))
                }
            }, n.prototype.clear = function(t) {
                i(t.target).css({
                    left: ""
                }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
            }, n.prototype.destroy = function() {
                var t, e;
                for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
                for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
            }, i.fn.owlCarousel.Constructor.Plugins.Animate = n,
            function(t, e, i, n) {
                var s = function(e) {
                    this._core = e, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
                        "changed.owl.carousel": t.proxy(function(t) {
                            t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
                        }, this),
                        "initialized.owl.carousel": t.proxy(function(t) {
                            t.namespace && this._core.settings.autoplay && this.play()
                        }, this),
                        "play.owl.autoplay": t.proxy(function(t, e, i) {
                            t.namespace && this.play(e, i)
                        }, this),
                        "stop.owl.autoplay": t.proxy(function(t) {
                            t.namespace && this.stop()
                        }, this),
                        "mouseover.owl.autoplay": t.proxy(function() {
                            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                        }, this),
                        "mouseleave.owl.autoplay": t.proxy(function() {
                            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                        }, this),
                        "touchstart.owl.core": t.proxy(function() {
                            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                        }, this),
                        "touchend.owl.core": t.proxy(function() {
                            this._core.settings.autoplayHoverPause && this.play()
                        }, this)
                    }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, s.Defaults, this._core.options)
                };
                s.Defaults = {
                    autoplay: !1,
                    autoplayTimeout: 5e3,
                    autoplayHoverPause: !1,
                    autoplaySpeed: !1
                }, s.prototype._next = function(n) {
                    this._call = e.setTimeout(t.proxy(this._next, this, n), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("interacting") || i.hidden || this._core.next(n || this._core.settings.autoplaySpeed)
                }, s.prototype.read = function() {
                    return (new Date).getTime() - this._time
                }, s.prototype.play = function(i, n) {
                    var s;
                    this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, s = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : e.clearTimeout(this._call), this._time += this.read() % i - s, this._timeout = i, this._call = e.setTimeout(t.proxy(this._next, this, n), i - s)
                }, s.prototype.stop = function() {
                    this._core.is("rotating") && (this._time = 0, this._paused = !0, e.clearTimeout(this._call), this._core.leave("rotating"))
                }, s.prototype.pause = function() {
                    this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, e.clearTimeout(this._call))
                }, s.prototype.destroy = function() {
                    var t, e;
                    for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
                    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
            }(window.Zepto || t, window, document),
            function(t, e, i, n) {
                "use strict";
                var s = function(e) {
                    this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                        next: this._core.next,
                        prev: this._core.prev,
                        to: this._core.to
                    }, this._handlers = {
                        "prepared.owl.carousel": t.proxy(function(e) {
                            e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                        }, this),
                        "added.owl.carousel": t.proxy(function(t) {
                            t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                        }, this),
                        "remove.owl.carousel": t.proxy(function(t) {
                            t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                        }, this),
                        "changed.owl.carousel": t.proxy(function(t) {
                            t.namespace && "position" == t.property.name && this.draw()
                        }, this),
                        "initialized.owl.carousel": t.proxy(function(t) {
                            t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                        }, this),
                        "refreshed.owl.carousel": t.proxy(function(t) {
                            t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                        }, this)
                    }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers)
                };
                s.Defaults = {
                    nav: !1,
                    navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
                    navSpeed: !1,
                    navElement: 'button type="button" role="presentation"',
                    navContainer: !1,
                    navContainerClass: "owl-nav",
                    navClass: ["owl-prev", "owl-next"],
                    slideBy: 1,
                    dotClass: "owl-dot",
                    dotsClass: "owl-dots",
                    dots: !0,
                    dotsEach: !1,
                    dotsData: !1,
                    dotsSpeed: !1,
                    dotsContainer: !1
                }, s.prototype.initialize = function() {
                    var e, i = this._core.settings;
                    for (e in this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
                            this.prev(i.navSpeed)
                        }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
                            this.next(i.navSpeed)
                        }, this)), i.dotsData || (this._templates = [t('<button role="button">').addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", t.proxy(function(e) {
                            var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                            e.preventDefault(), this.to(n, i.dotsSpeed)
                        }, this)), this._overrides) this._core[e] = t.proxy(this[e], this)
                }, s.prototype.destroy = function() {
                    var t, e, i, n, s;
                    for (t in s = this._core.settings, this._handlers) this.$element.off(t, this._handlers[t]);
                    for (e in this._controls) "$relative" === e && s.navContainer ? this._controls[e].html("") : this._controls[e].remove();
                    for (n in this.overides) this._core[n] = this._overrides[n];
                    for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
                }, s.prototype.update = function() {
                    var t, e, i = this._core.clones().length / 2,
                        n = i + this._core.items().length,
                        s = this._core.maximum(!0),
                        o = this._core.settings,
                        a = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
                    if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
                        for (this._pages = [], t = i, e = 0, 0; t < n; t++) {
                            if (e >= a || 0 === e) {
                                if (this._pages.push({
                                        start: Math.min(s, t - i),
                                        end: t - i + a - 1
                                    }), Math.min(s, t - i) === s) break;
                                e = 0, 0
                            }
                            e += this._core.mergers(this._core.relative(t))
                        }
                }, s.prototype.draw = function() {
                    var e, i = this._core.settings,
                        n = this._core.items().length <= i.items,
                        s = this._core.relative(this._core.current()),
                        o = i.loop || i.rewind;
                    this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !o && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
                }, s.prototype.onTrigger = function(e) {
                    var i = this._core.settings;
                    e.page = {
                        index: t.inArray(this.current(), this._pages),
                        count: this._pages.length,
                        size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
                    }
                }, s.prototype.current = function() {
                    var e = this._core.relative(this._core.current());
                    return t.grep(this._pages, t.proxy(function(t, i) {
                        return t.start <= e && t.end >= e
                    }, this)).pop()
                }, s.prototype.getPosition = function(e) {
                    var i, n, s = this._core.settings;
                    return "page" == s.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += s.slideBy : i -= s.slideBy), i
                }, s.prototype.next = function(e) {
                    t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
                }, s.prototype.prev = function(e) {
                    t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
                }, s.prototype.to = function(e, i, n) {
                    var s;
                    !n && this._pages.length ? (s = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % s + s) % s].start, i)) : t.proxy(this._overrides.to, this._core)(e, i)
                }, t.fn.owlCarousel.Constructor.Plugins.Navigation = s
            }(window.Zepto || t, window, document),
            function(t, e, i, n) {
                "use strict";
                var s = function(i) {
                    this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                        "initialized.owl.carousel": t.proxy(function(i) {
                            i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
                        }, this),
                        "prepared.owl.carousel": t.proxy(function(e) {
                            if (e.namespace) {
                                var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                                if (!i) return;
                                this._hashes[i] = e.content
                            }
                        }, this),
                        "changed.owl.carousel": t.proxy(function(i) {
                            if (i.namespace && "position" === i.property.name) {
                                var n = this._core.items(this._core.relative(this._core.current())),
                                    s = t.map(this._hashes, function(t, e) {
                                        return t === n ? e : null
                                    }).join();
                                if (!s || e.location.hash.slice(1) === s) return;
                                e.location.hash = s
                            }
                        }, this)
                    }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
                        var i = e.location.hash.substring(1),
                            n = this._core.$stage.children(),
                            s = this._hashes[i] && n.index(this._hashes[i]);
                        void 0 !== s && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
                    }, this))
                };
                s.Defaults = {
                    URLhashListener: !1
                }, s.prototype.destroy = function() {
                    var i, n;
                    for (i in t(e).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(i, this._handlers[i]);
                    for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
                }, t.fn.owlCarousel.Constructor.Plugins.Hash = s
            }(window.Zepto || t, window, document),
            function(t, e, i, n) {
                var s = t("<support>").get(0).style,
                    o = "Webkit Moz O ms".split(" "),
                    a = {
                        transition: {
                            end: {
                                WebkitTransition: "webkitTransitionEnd",
                                MozTransition: "transitionend",
                                OTransition: "oTransitionEnd",
                                transition: "transitionend"
                            }
                        },
                        animation: {
                            end: {
                                WebkitAnimation: "webkitAnimationEnd",
                                MozAnimation: "animationend",
                                OAnimation: "oAnimationEnd",
                                animation: "animationend"
                            }
                        }
                    },
                    r = function() {
                        return !!h("transform")
                    },
                    l = function() {
                        return !!h("perspective")
                    },
                    c = function() {
                        return !!h("animation")
                    };

                function h(e, i) {
                    var a = !1,
                        r = e.charAt(0).toUpperCase() + e.slice(1);
                    return t.each((e + " " + o.join(r + " ") + r).split(" "), function(t, e) {
                        if (s[e] !== n) return a = !i || e, !1
                    }), a
                }

                function u(t) {
                    return h(t, !0)
                }(function() {
                    return !!h("transition")
                })() && (t.support.transition = new String(u("transition")), t.support.transition.end = a.transition.end[t.support.transition]), c() && (t.support.animation = new String(u("animation")), t.support.animation.end = a.animation.end[t.support.animation]), r() && (t.support.transform = new String(u("transform")), t.support.transform3d = l())
            }(window.Zepto || t, window, document)
    }).call(this, i(0), i(0))
}, function(t, e) {}]);