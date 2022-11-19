"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}! function(e, t) {
    "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : void 0, function(T, e) {
    function g(e) {
        return null != e && e === e.window
    }
    var t = [],
        C = T.document,
        o = Object.getPrototypeOf,
        a = t.slice,
        m = t.concat,
        l = t.push,
        i = t.indexOf,
        n = {},
        r = n.toString,
        v = n.hasOwnProperty,
        s = v.toString,
        c = s.call(Object),
        y = {},
        b = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        u = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function x(e, t, n) {
        var o, i, r = (n = n || C).createElement("script");
        if (r.text = e, t)
            for (o in u)(i = t[o] || t.getAttribute && t.getAttribute(o)) && r.setAttribute(o, i);
        n.head.appendChild(r).parentNode.removeChild(r)
    }

    function w(e) {
        return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? n[r.call(e)] || "object" : _typeof(e)
    }
    var f = "3.4.1",
        E = function e(t, n) {
            return new e.fn.init(t, n)
        },
        d = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function h(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !b(e) && !g(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: f,
        constructor: E,
        length: 0,
        toArray: function() {
            return a.call(this)
        },
        get: function(e) {
            return null == e ? a.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(a.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, E.extend = E.fn.extend = function() {
        var e, t, n, o, i, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == _typeof(s) || b(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e) o = e[t], "__proto__" !== t && s !== o && (c && o && (E.isPlainObject(o) || (i = Array.isArray(o))) ? (n = s[t], r = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, s[t] = E.extend(c, r, o)) : void 0 !== o && (s[t] = o));
        return s
    }, E.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== r.call(e) || (t = o(e)) && ("function" != typeof(n = v.call(t, "constructor") && t.constructor) || s.call(n) !== c))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t) {
            x(e, {
                nonce: t && t.nonce
            })
        },
        each: function(e, t) {
            var n, o = 0;
            if (h(e))
                for (n = e.length; o < n && !1 !== t.call(e[o], o, e[o]); o++);
            else
                for (o in e)
                    if (!1 === t.call(e[o], o, e[o])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(d, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (h(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, o = 0, i = e.length; o < n; o++) e[i++] = t[o];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var o = [], i = 0, r = e.length, s = !n; i < r; i++) !t(e[i], i) != s && o.push(e[i]);
            return o
        },
        map: function(e, t, n) {
            var o, i, r = 0,
                s = [];
            if (h(e))
                for (o = e.length; r < o; r++) null != (i = t(e[r], r, n)) && s.push(i);
            else
                for (r in e) null != (i = t(e[r], r, n)) && s.push(i);
            return m.apply([], s)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var p = function(n) {
        function f(e, t, n) {
            var o = "0x" + t - 65536;
            return o != o || n ? t : o < 0 ? String.fromCharCode(65536 + o) : String.fromCharCode(o >> 10 | 55296, 1023 & o | 56320)
        }

        function i() {
            _()
        }
        var e, h, x, r, s, p, d, g, w, l, c, _, T, a, C, m, u, v, y, E = "sizzle" + +new Date,
            b = n.document,
            S = 0,
            o = 0,
            A = le(),
            D = le(),
            k = le(),
            I = le(),
            P = function(e, t) {
                return e === t && (c = !0), 0
            },
            N = {}.hasOwnProperty,
            t = [],
            O = t.pop,
            L = t.push,
            $ = t.push,
            j = t.slice,
            H = function(e, t) {
                for (var n = 0, o = e.length; n < o; n++)
                    if (e[n] === t) return n;
                return -1
            },
            M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            F = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            q = "\\[" + F + "*(" + R + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + F + "*\\]",
            B = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
            W = new RegExp(F + "+", "g"),
            z = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
            U = new RegExp("^" + F + "*," + F + "*"),
            Y = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
            X = new RegExp(F + "|>"),
            V = new RegExp(B),
            Q = new RegExp("^" + R + "$"),
            K = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + q),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + M + ")$", "i"),
                needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /HTML$/i,
            Z = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            ee = /^[^{]+\{\s*\[native \w/,
            te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ne = /[+~]/,
            oe = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            se = ye(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            $.apply(t = j.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
        } catch (e) {
            $ = {
                apply: t.length ? function(e, t) {
                    L.apply(e, j.call(t))
                } : function(e, t) {
                    for (var n = e.length, o = 0; e[n++] = t[o++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, n, o) {
            var i, r, s, a, l, c, u, f = t && t.ownerDocument,
                d = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return n;
            if (!o && ((t ? t.ownerDocument || t : b) !== T && _(t), t = t || T, C)) {
                if (11 !== d && (l = te.exec(e)))
                    if (i = l[1]) {
                        if (9 === d) {
                            if (!(s = t.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n
                        } else if (f && (s = f.getElementById(i)) && y(t, s) && s.id === i) return n.push(s), n
                    } else {
                        if (l[2]) return $.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return $.apply(n, t.getElementsByClassName(i)), n
                    }
                if (h.qsa && !I[e + " "] && (!m || !m.test(e)) && (1 !== d || "object" !== t.nodeName.toLowerCase())) {
                    if (u = e, f = t, 1 === d && X.test(e)) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(ie, re) : t.setAttribute("id", a = E), r = (c = p(e)).length; r--;) c[r] = "#" + a + " " + ve(c[r]);
                        u = c.join(","), f = ne.test(e) && ge(t.parentNode) || t
                    }
                    try {
                        return $.apply(n, f.querySelectorAll(u)), n
                    } catch (t) {
                        I(e, !0)
                    } finally {
                        a === E && t.removeAttribute("id")
                    }
                }
            }
            return g(e.replace(z, "$1"), t, n, o)
        }

        function le() {
            var o = [];
            return function e(t, n) {
                return o.push(t + " ") > x.cacheLength && delete e[o.shift()], e[t + " "] = n
            }
        }

        function ce(e) {
            return e[E] = !0, e
        }

        function ue(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            for (var n = e.split("|"), o = n.length; o--;) x.attrHandle[n[o]] = t
        }

        function de(e, t) {
            var n = t && e,
                o = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (o) return o;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function he(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && se(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function pe(s) {
            return ce(function(r) {
                return r = +r, ce(function(e, t) {
                    for (var n, o = s([], e.length, r), i = o.length; i--;) e[n = o[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ge(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in h = ae.support = {}, s = ae.isXML = function(e) {
                var t = e.namespaceURI,
                    n = (e.ownerDocument || e).documentElement;
                return !G.test(t || n && n.nodeName || "HTML")
            }, _ = ae.setDocument = function(e) {
                var t, n, o = e ? e.ownerDocument || e : b;
                return o !== T && 9 === o.nodeType && o.documentElement && (a = (T = o).documentElement, C = !s(T), b !== T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", i, !1) : n.attachEvent && n.attachEvent("onunload", i)), h.attributes = ue(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), h.getElementsByTagName = ue(function(e) {
                    return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
                }), h.getElementsByClassName = ee.test(T.getElementsByClassName), h.getById = ue(function(e) {
                    return a.appendChild(e).id = E, !T.getElementsByName || !T.getElementsByName(E).length
                }), h.getById ? (x.filter.ID = function(e) {
                    var t = e.replace(oe, f);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, x.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && C) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (x.filter.ID = function(e) {
                    var n = e.replace(oe, f);
                    return function(e) {
                        var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, x.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && C) {
                        var n, o, i, r = t.getElementById(e);
                        if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                            for (i = t.getElementsByName(e), o = 0; r = i[o++];)
                                if ((n = r.getAttributeNode("id")) && n.value === e) return [r]
                        }
                        return []
                    }
                }), x.find.TAG = h.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, o = [],
                        i = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" !== e) return r;
                    for (; n = r[i++];) 1 === n.nodeType && o.push(n);
                    return o
                }, x.find.CLASS = h.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && C) return t.getElementsByClassName(e)
                }, u = [], m = [], (h.qsa = ee.test(T.querySelectorAll)) && (ue(function(e) {
                    a.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + F + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + F + "*(?:value|" + M + ")"), e.querySelectorAll("[id~=" + E + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || m.push(".#.+[+~]")
                }), ue(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = T.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + F + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
                })), (h.matchesSelector = ee.test(v = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ue(function(e) {
                    h.disconnectedMatch = v.call(e, "*"), v.call(e, "[s!='']:x"), u.push("!=", B)
                }), m = m.length && new RegExp(m.join("|")), u = u.length && new RegExp(u.join("|")), t = ee.test(a.compareDocumentPosition), y = t || ee.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        o = t && t.parentNode;
                    return e === o || !(!o || 1 !== o.nodeType || !(n.contains ? n.contains(o) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(o)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, P = t ? function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument === b && y(b, e) ? -1 : t === T || t.ownerDocument === b && y(b, t) ? 1 : l ? H(l, e) - H(l, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return c = !0, 0;
                    var n, o = 0,
                        i = e.parentNode,
                        r = t.parentNode,
                        s = [e],
                        a = [t];
                    if (!i || !r) return e === T ? -1 : t === T ? 1 : i ? -1 : r ? 1 : l ? H(l, e) - H(l, t) : 0;
                    if (i === r) return de(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) a.unshift(n);
                    for (; s[o] === a[o];) o++;
                    return o ? de(s[o], a[o]) : s[o] === b ? -1 : a[o] === b ? 1 : 0
                }), T
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== T && _(e), h.matchesSelector && C && !I[t + " "] && (!u || !u.test(t)) && (!m || !m.test(t))) try {
                    var n = v.call(e, t);
                    if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    I(t, !0)
                }
                return 0 < ae(t, T, null, [e]).length
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) !== T && _(e), y(e, t)
            }, ae.attr = function(e, t) {
                (e.ownerDocument || e) !== T && _(e);
                var n = x.attrHandle[t.toLowerCase()],
                    o = n && N.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
                return void 0 !== o ? o : h.attributes || !C ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(ie, re)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, n = [],
                    o = 0,
                    i = 0;
                if (c = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort(P), c) {
                    for (; t = e[i++];) t === e[i] && (o = n.push(i));
                    for (; o--;) e.splice(n[o], 1)
                }
                return l = null, e
            }, r = ae.getText = function(e) {
                var t, n = "",
                    o = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += r(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[o++];) n += r(t);
                return n
            }, (x = ae.selectors = {
                cacheLength: 50,
                createPseudo: ce,
                match: K,
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
                    ATTR: function(e) {
                        return e[1] = e[1].replace(oe, f), e[3] = (e[3] || e[4] || e[5] || "").replace(oe, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return K.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = p(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(oe, f).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = A[e + " "];
                        return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && A(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, o, i) {
                        return function(e) {
                            var t = ae.attr(e, n);
                            return null == t ? "!=" === o : !o || (t += "", "=" === o ? t === i : "!=" === o ? t !== i : "^=" === o ? i && 0 === t.indexOf(i) : "*=" === o ? i && -1 < t.indexOf(i) : "$=" === o ? i && t.slice(-i.length) === i : "~=" === o ? -1 < (" " + t.replace(W, " ") + " ").indexOf(i) : "|=" === o && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(p, e, t, g, m) {
                        var v = "nth" !== p.slice(0, 3),
                            y = "last" !== p.slice(-4),
                            b = "of-type" === e;
                        return 1 === g && 0 === m ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var o, i, r, s, a, l, c = v != y ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                f = b && e.nodeName.toLowerCase(),
                                d = !n && !b,
                                h = !1;
                            if (u) {
                                if (v) {
                                    for (; c;) {
                                        for (s = e; s = s[c];)
                                            if (b ? s.nodeName.toLowerCase() === f : 1 === s.nodeType) return !1;
                                        l = c = "only" === p && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? u.firstChild : u.lastChild], y && d) {
                                    for (h = (a = (o = (i = (r = (s = u)[E] || (s[E] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] || [])[0] === S && o[1]) && o[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (h = a = 0) || l.pop();)
                                        if (1 === s.nodeType && ++h && s === e) {
                                            i[p] = [S, a, h];
                                            break
                                        }
                                } else if (d && (h = a = (o = (i = (r = (s = e)[E] || (s[E] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] || [])[0] === S && o[1]), !1 === h)
                                    for (;
                                        (s = ++a && s && s[c] || (h = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== f : 1 !== s.nodeType) || !++h || (d && ((i = (r = s[E] || (s[E] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] = [S, h]), s !== e)););
                                return (h -= m) === g || h % g == 0 && 0 <= h / g
                            }
                        }
                    },
                    PSEUDO: function(e, r) {
                        var t, s = x.pseudos[e] || x.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return s[E] ? s(r) : 1 < s.length ? (t = [e, e, "", r], x.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function(e, t) {
                            for (var n, o = s(e, r), i = o.length; i--;) e[n = H(e, o[i])] = !(t[n] = o[i])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: ce(function(e) {
                        var o = [],
                            i = [],
                            a = d(e.replace(z, "$1"));
                        return a[E] ? ce(function(e, t, n, o) {
                            for (var i, r = a(e, null, o, []), s = e.length; s--;)(i = r[s]) && (e[s] = !(t[s] = i))
                        }) : function(e, t, n) {
                            return o[0] = e, a(o, null, n, i), o[0] = null, !i.pop()
                        }
                    }),
                    has: ce(function(t) {
                        return function(e) {
                            return 0 < ae(t, e).length
                        }
                    }),
                    contains: ce(function(t) {
                        return t = t.replace(oe, f),
                            function(e) {
                                return -1 < (e.textContent || r(e)).indexOf(t)
                            }
                    }),
                    lang: ce(function(n) {
                        return Q.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(oe, f).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: he(!1),
                    disabled: he(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Z.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: pe(function() {
                        return [0]
                    }),
                    last: pe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: pe(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: pe(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: pe(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: pe(function(e, t, n) {
                        for (var o = n < 0 ? n + t : t < n ? t : n; 0 <= --o;) e.push(o);
                        return e
                    }),
                    gt: pe(function(e, t, n) {
                        for (var o = n < 0 ? n + t : n; ++o < t;) e.push(o);
                        return e
                    })
                }
            }).pseudos.nth = x.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[e] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }(e);
        for (e in {
                submit: !0,
                reset: !0
            }) x.pseudos[e] = function(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }(e);

        function me() {}

        function ve(e) {
            for (var t = 0, n = e.length, o = ""; t < n; t++) o += e[t].value;
            return o
        }

        function ye(a, e, t) {
            var l = e.dir,
                c = e.next,
                u = c || l,
                f = t && "parentNode" === u,
                d = o++;
            return e.first ? function(e, t, n) {
                for (; e = e[l];)
                    if (1 === e.nodeType || f) return a(e, t, n);
                return !1
            } : function(e, t, n) {
                var o, i, r, s = [S, d];
                if (n) {
                    for (; e = e[l];)
                        if ((1 === e.nodeType || f) && a(e, t, n)) return !0
                } else
                    for (; e = e[l];)
                        if (1 === e.nodeType || f)
                            if (i = (r = e[E] || (e[E] = {}))[e.uniqueID] || (r[e.uniqueID] = {}), c && c === e.nodeName.toLowerCase()) e = e[l] || e;
                            else {
                                if ((o = i[u]) && o[0] === S && o[1] === d) return s[2] = o[2];
                                if ((i[u] = s)[2] = a(e, t, n)) return !0
                            } return !1
            }
        }

        function be(i) {
            return 1 < i.length ? function(e, t, n) {
                for (var o = i.length; o--;)
                    if (!i[o](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function xe(e, t, n, o, i) {
            for (var r, s = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (n && !n(r, o, i) || (s.push(r), c && t.push(a)));
            return s
        }

        function we(e) {
            for (var i, t, n, o = e.length, r = x.relative[e[0].type], s = r || x.relative[" "], a = r ? 1 : 0, l = ye(function(e) {
                    return e === i
                }, s, !0), c = ye(function(e) {
                    return -1 < H(i, e)
                }, s, !0), u = [function(e, t, n) {
                    var o = !r && (n || t !== w) || ((i = t).nodeType ? l : c)(e, t, n);
                    return i = null, o
                }]; a < o; a++)
                if (t = x.relative[e[a].type]) u = [ye(be(u), t)];
                else {
                    if ((t = x.filter[e[a].type].apply(null, e[a].matches))[E]) {
                        for (n = ++a; n < o && !x.relative[e[n].type]; n++);
                        return function e(h, p, g, m, v, t) {
                            return m && !m[E] && (m = e(m)), v && !v[E] && (v = e(v, t)), ce(function(e, t, n, o) {
                                var i, r, s, a = [],
                                    l = [],
                                    c = t.length,
                                    u = e || function(e, t, n) {
                                        for (var o = 0, i = t.length; o < i; o++) ae(e, t[o], n);
                                        return n
                                    }(p || "*", n.nodeType ? [n] : n, []),
                                    f = !h || !e && p ? u : xe(u, a, h, n, o),
                                    d = g ? v || (e ? h : c || m) ? [] : t : f;
                                if (g && g(f, d, n, o), m)
                                    for (i = xe(d, l), m(i, [], n, o), r = i.length; r--;)(s = i[r]) && (d[l[r]] = !(f[l[r]] = s));
                                if (e) {
                                    if (v || h) {
                                        if (v) {
                                            for (i = [], r = d.length; r--;)(s = d[r]) && i.push(f[r] = s);
                                            v(null, d = [], i, o)
                                        }
                                        for (r = d.length; r--;)(s = d[r]) && -1 < (i = v ? H(e, s) : a[r]) && (e[i] = !(t[i] = s))
                                    }
                                } else d = xe(d === t ? d.splice(c, d.length) : d), v ? v(null, t, d, o) : $.apply(t, d)
                            })
                        }(1 < a && be(u), 1 < a && ve(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(z, "$1"), t, a < n && we(e.slice(a, n)), n < o && we(e = e.slice(n)), n < o && ve(e))
                    }
                    u.push(t)
                }
            return be(u)
        }
        return me.prototype = x.filters = x.pseudos, x.setFilters = new me, p = ae.tokenize = function(e, t) {
            var n, o, i, r, s, a, l, c = D[e + " "];
            if (c) return t ? 0 : c.slice(0);
            for (s = e, a = [], l = x.preFilter; s;) {
                for (r in n && !(o = U.exec(s)) || (o && (s = s.slice(o[0].length) || s), a.push(i = [])), n = !1, (o = Y.exec(s)) && (n = o.shift(), i.push({
                        value: n,
                        type: o[0].replace(z, " ")
                    }), s = s.slice(n.length)), x.filter) !(o = K[r].exec(s)) || l[r] && !(o = l[r](o)) || (n = o.shift(), i.push({
                    value: n,
                    type: r,
                    matches: o
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? ae.error(e) : D(e, a).slice(0)
        }, d = ae.compile = function(e, t) {
            var n, m, v, y, b, o, i = [],
                r = [],
                s = k[e + " "];
            if (!s) {
                for (n = (t = t || p(e)).length; n--;)(s = we(t[n]))[E] ? i.push(s) : r.push(s);
                (s = k(e, (m = r, y = 0 < (v = i).length, b = 0 < m.length, o = function(e, t, n, o, i) {
                    var r, s, a, l = 0,
                        c = "0",
                        u = e && [],
                        f = [],
                        d = w,
                        h = e || b && x.find.TAG("*", i),
                        p = S += null == d ? 1 : Math.random() || .1,
                        g = h.length;
                    for (i && (w = t === T || t || i); c !== g && null != (r = h[c]); c++) {
                        if (b && r) {
                            for (s = 0, t || r.ownerDocument === T || (_(r), n = !C); a = m[s++];)
                                if (a(r, t || T, n)) {
                                    o.push(r);
                                    break
                                }
                            i && (S = p)
                        }
                        y && ((r = !a && r) && l--, e && u.push(r))
                    }
                    if (l += c, y && c !== l) {
                        for (s = 0; a = v[s++];) a(u, f, t, n);
                        if (e) {
                            if (0 < l)
                                for (; c--;) u[c] || f[c] || (f[c] = O.call(o));
                            f = xe(f)
                        }
                        $.apply(o, f), i && !e && 0 < f.length && 1 < l + v.length && ae.uniqueSort(o)
                    }
                    return i && (S = p, w = d), u
                }, y ? ce(o) : o))).selector = e
            }
            return s
        }, g = ae.select = function(e, t, n, o) {
            var i, r, s, a, l, c = "function" == typeof e && e,
                u = !o && p(e = c.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === t.nodeType && C && x.relative[r[1].type]) {
                    if (!(t = (x.find.ID(s.matches[0].replace(oe, f), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(r.shift().value.length)
                }
                for (i = K.needsContext.test(e) ? 0 : r.length; i-- && (s = r[i], !x.relative[a = s.type]);)
                    if ((l = x.find[a]) && (o = l(s.matches[0].replace(oe, f), ne.test(r[0].type) && ge(t.parentNode) || t))) {
                        if (r.splice(i, 1), !(e = o.length && ve(r))) return $.apply(n, o), n;
                        break
                    }
            }
            return (c || d(e, u))(o, t, !C, n, !t || ne.test(e) && ge(t.parentNode) || t), n
        }, h.sortStable = E.split("").sort(P).join("") === E, h.detectDuplicates = !!c, _(), h.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), h.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ue(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(M, function(e, t, n) {
            var o;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        }), ae
    }(T);
    E.find = p, E.expr = p.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = p.uniqueSort, E.text = p.getText, E.isXMLDoc = p.isXML, E.contains = p.contains, E.escapeSelector = p.escape;

    function _(e, t, n) {
        for (var o = [], i = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (i && E(e).is(n)) break;
                o.push(e)
            }
        return o
    }

    function S(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var A = E.expr.match.needsContext;

    function D(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function I(e, n, o) {
        return b(n) ? E.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== o
        }) : n.nodeType ? E.grep(e, function(e) {
            return e === n !== o
        }) : "string" != typeof n ? E.grep(e, function(e) {
            return -1 < i.call(n, e) !== o
        }) : E.filter(n, e, o)
    }
    E.filter = function(e, t, n) {
        var o = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === o.nodeType ? E.find.matchesSelector(o, e) ? [o] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, E.fn.extend({
        find: function(e) {
            var t, n, o = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(E(e).filter(function() {
                for (t = 0; t < o; t++)
                    if (E.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < o; t++) E.find(e, i[t], n);
            return 1 < o ? E.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(I(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(I(this, e || [], !0))
        },
        is: function(e) {
            return !!I(this, "string" == typeof e && A.test(e) ? E(e) : e || [], !1).length
        }
    });
    var P, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function(e, t, n) {
        var o, i;
        if (!e) return this;
        if (n = n || P, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this);
        if (!(o = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : N.exec(e)) || !o[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (o[1]) {
            if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(o[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), k.test(o[1]) && E.isPlainObject(t))
                for (o in t) b(this[o]) ? this[o](t[o]) : this.attr(o, t[o]);
            return this
        }
        return (i = C.getElementById(o[2])) && (this[0] = i, this.length = 1), this
    }).prototype = E.fn, P = E(C);
    var O = /^(?:parents|prev(?:Until|All))/,
        L = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function $(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, o = 0,
                i = this.length,
                r = [],
                s = "string" != typeof e && E(e);
            if (!A.test(e))
                for (; o < i; o++)
                    for (n = this[o]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
            return this.pushStack(1 < r.length ? E.uniqueSort(r) : r)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), E.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return _(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return _(e, "parentNode", n)
        },
        next: function(e) {
            return $(e, "nextSibling")
        },
        prev: function(e) {
            return $(e, "previousSibling")
        },
        nextAll: function(e) {
            return _(e, "nextSibling")
        },
        prevAll: function(e) {
            return _(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return _(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return _(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return void 0 !== e.contentDocument ? e.contentDocument : (D(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
        }
    }, function(o, i) {
        E.fn[o] = function(e, t) {
            var n = E.map(this, i, e);
            return "Until" !== o.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (L[o] || E.uniqueSort(n), O.test(o) && n.reverse()), this.pushStack(n)
        }
    });
    var j = /[^\x20\t\r\n\f]+/g;

    function H(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function F(e, t, n, o) {
        var i;
        try {
            e && b(i = e.promise) ? i.call(e).done(t).fail(n) : e && b(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(o))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    E.Callbacks = function(o) {
        var n;
        o = "string" == typeof o ? (n = {}, E.each(o.match(j) || [], function(e, t) {
            n[t] = !0
        }), n) : E.extend({}, o);

        function i() {
            for (s = s || o.once, t = r = !0; l.length; c = -1)
                for (e = l.shift(); ++c < a.length;) !1 === a[c].apply(e[0], e[1]) && o.stopOnFalse && (c = a.length, e = !1);
            o.memory || (e = !1), r = !1, s && (a = e ? [] : "")
        }
        var r, e, t, s, a = [],
            l = [],
            c = -1,
            u = {
                add: function() {
                    return a && (e && !r && (c = a.length - 1, l.push(e)), function n(e) {
                        E.each(e, function(e, t) {
                            b(t) ? o.unique && u.has(t) || a.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), e && !r && i()), this
                },
                remove: function() {
                    return E.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = E.inArray(t, a, n));) a.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < E.inArray(e, a) : 0 < a.length
                },
                empty: function() {
                    return a = a && [], this
                },
                disable: function() {
                    return s = l = [], a = e = "", this
                },
                disabled: function() {
                    return !a
                },
                lock: function() {
                    return s = l = [], e || r || (a = e = ""), this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), r || i()), this
                },
                fire: function() {
                    return u.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!t
                }
            };
        return u
    }, E.extend({
        Deferred: function(e) {
            var r = [
                    ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                    ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                s = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return a.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return E.Deferred(function(o) {
                            E.each(r, function(e, t) {
                                var n = b(i[t[4]]) && i[t[4]];
                                a[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && b(e.promise) ? e.promise().progress(o.notify).done(o.resolve).fail(o.reject) : o[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, o) {
                        var l = 0;

                        function c(i, r, s, a) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(i < l)) {
                                        if ((e = s.apply(n, o)) === r.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == _typeof(e) || "function" == typeof e) && e.then, b(t) ? a ? t.call(e, c(l, r, H, a), c(l, r, M, a)) : (l++, t.call(e, c(l, r, H, a), c(l, r, M, a), c(l, r, H, r.notifyWith))) : (s !== H && (n = void 0, o = [e]), (a || r.resolveWith)(n, o))
                                    }
                                }
                                var n = this,
                                    o = arguments,
                                    t = a ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), l <= i + 1 && (s !== M && (n = void 0, o = [e]), r.rejectWith(n, o))
                                        }
                                    };
                                i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), T.setTimeout(t))
                            }
                        }
                        return E.Deferred(function(e) {
                            r[0][3].add(c(0, e, b(o) ? o : H, e.notifyWith)), r[1][3].add(c(0, e, b(t) ? t : H)), r[2][3].add(c(0, e, b(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? E.extend(e, s) : s
                    }
                },
                a = {};
            return E.each(r, function(e, t) {
                var n = t[2],
                    o = t[5];
                s[t[1]] = n.add, o && n.add(function() {
                    i = o
                }, r[3 - e][2].disable, r[3 - e][3].disable, r[0][2].lock, r[0][3].lock), n.add(t[3].fire), a[t[0]] = function() {
                    return a[t[0] + "With"](this === a ? void 0 : this, arguments), this
                }, a[t[0] + "With"] = n.fireWith
            }), s.promise(a), e && e.call(a, a), a
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    i[t] = this, r[t] = 1 < arguments.length ? a.call(arguments) : e, --n || s.resolveWith(i, r)
                }
            }
            var n = arguments.length,
                o = n,
                i = Array(o),
                r = a.call(arguments),
                s = E.Deferred();
            if (n <= 1 && (F(e, s.done(t(o)).resolve, s.reject, !n), "pending" === s.state() || b(r[o] && r[o].then))) return s.then();
            for (; o--;) F(r[o], t(o), s.reject);
            return s.promise()
        }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function(e, t) {
        T.console && T.console.warn && e && R.test(e.name) && T.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, E.readyException = function(e) {
        T.setTimeout(function() {
            throw e
        })
    };
    var q = E.Deferred();

    function B() {
        C.removeEventListener("DOMContentLoaded", B), T.removeEventListener("load", B), E.ready()
    }
    E.fn.ready = function(e) {
        return q.then(e).catch(function(e) {
            E.readyException(e)
        }), this
    }, E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || q.resolveWith(C, [E])
        }
    }), E.ready.then = q.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? T.setTimeout(E.ready) : (C.addEventListener("DOMContentLoaded", B), T.addEventListener("load", B));

    function W(e, t, n, o, i, r, s) {
        var a = 0,
            l = e.length,
            c = null == n;
        if ("object" === w(n))
            for (a in i = !0, n) W(e, t, a, n[a], !0, r, s);
        else if (void 0 !== o && (i = !0, b(o) || (s = !0), c && (t = s ? (t.call(e, o), null) : (c = t, function(e, t, n) {
                return c.call(E(e), n)
            })), t))
            for (; a < l; a++) t(e[a], n, s ? o : o.call(e[a], a, t(e[a], n)));
        return i ? e : c ? t.call(e) : l ? t(e[0], n) : r
    }
    var z = /^-ms-/,
        U = /-([a-z])/g;

    function Y(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(z, "ms-").replace(U, Y)
    }

    function V(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function Q() {
        this.expando = E.expando + Q.uid++
    }
    Q.uid = 1, Q.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var o, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (o in t) i[X(o)] = t[o];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in o ? [t] : t.match(j) || []).length;
                    for (; n--;) delete o[t[n]]
                }
                void 0 !== t && !E.isEmptyObject(o) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t)
        }
    };
    var K = new Q,
        G = new Q,
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function ee(e, t, n) {
        var o, i;
        if (void 0 === n && 1 === e.nodeType)
            if (o = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(o))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : Z.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                G.set(e, t, n)
            } else n = void 0;
        return n
    }
    E.extend({
        hasData: function(e) {
            return G.hasData(e) || K.hasData(e)
        },
        data: function(e, t, n) {
            return G.access(e, t, n)
        },
        removeData: function(e, t) {
            G.remove(e, t)
        },
        _data: function(e, t, n) {
            return K.access(e, t, n)
        },
        _removeData: function(e, t) {
            K.remove(e, t)
        }
    }), E.fn.extend({
        data: function(n, e) {
            var t, o, i, r = this[0],
                s = r && r.attributes;
            if (void 0 !== n) return "object" == _typeof(n) ? this.each(function() {
                G.set(this, n)
            }) : W(this, function(e) {
                var t;
                return r && void 0 === e ? void 0 !== (t = G.get(r, n)) || void 0 !== (t = ee(r, n)) ? t : void 0 : void this.each(function() {
                    G.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (i = G.get(r), 1 === r.nodeType && !K.get(r, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && 0 === (o = s[t].name).indexOf("data-") && (o = X(o.slice(5)), ee(r, o, i[o]));
                K.set(r, "hasDataAttrs", !0)
            }
            return i
        },
        removeData: function(e) {
            return this.each(function() {
                G.remove(this, e)
            })
        }
    }), E.extend({
        queue: function(e, t, n) {
            var o;
            if (e) return t = (t || "fx") + "queue", o = K.get(e, t), n && (!o || Array.isArray(n) ? o = K.access(e, t, E.makeArray(n)) : o.push(n)), o || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t),
                o = n.length,
                i = n.shift(),
                r = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), o--), i && ("fx" === t && n.unshift("inprogress"), delete r.stop, i.call(e, function() {
                E.dequeue(e, t)
            }, r)), !o && r && r.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return K.get(e, n) || K.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    K.remove(e, [t + "queue", n])
                })
            })
        }
    }), E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --i || r.resolveWith(s, [s])
            }
            var o, i = 1,
                r = E.Deferred(),
                s = this,
                a = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(o = K.get(s[a], e + "queueHooks")) && o.empty && (i++, o.empty.add(n));
            return n(), r.promise(t)
        }
    });
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        oe = ["Top", "Right", "Bottom", "Left"],
        ie = C.documentElement,
        re = function(e) {
            return E.contains(e.ownerDocument, e)
        },
        se = {
            composed: !0
        };
    ie.getRootNode && (re = function(e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(se) === e.ownerDocument
    });

    function ae(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && re(e) && "none" === E.css(e, "display")
    }

    function le(e, t, n, o) {
        var i, r, s = {};
        for (r in t) s[r] = e.style[r], e.style[r] = t[r];
        for (r in i = n.apply(e, o || []), t) e.style[r] = s[r];
        return i
    }

    function ce(e, t, n, o) {
        var i, r, s = 20,
            a = o ? function() {
                return o.cur()
            } : function() {
                return E.css(e, t, "")
            },
            l = a(),
            c = n && n[3] || (E.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (E.cssNumber[t] || "px" !== c && +l) && ne.exec(E.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2, c = c || u[3], u = +l || 1; s--;) E.style(e, t, u + c), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), u /= r;
            u *= 2, E.style(e, t, u + c), n = n || []
        }
        return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], o && (o.unit = c, o.start = u, o.end = i)), i
    }
    var ue = {};

    function fe(e, t) {
        for (var n, o, i, r, s, a, l = [], c = 0, u = e.length; c < u; c++)(o = e[c]).style && (n = o.style.display, t ? ("none" === n && (l[c] = K.get(o, "display") || null, l[c] || (o.style.display = "")), "" === o.style.display && ae(o) && (l[c] = (a = r = i = void 0, r = o.ownerDocument, s = o.nodeName, (a = ue[s]) || (i = r.body.appendChild(r.createElement(s)), a = E.css(i, "display"), i.parentNode.removeChild(i), "none" === a && (a = "block"), ue[s] = a)))) : "none" !== n && (l[c] = "none", K.set(o, "display", n)));
        for (c = 0; c < u; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    E.fn.extend({
        show: function() {
            return fe(this, !0)
        },
        hide: function() {
            return fe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var de = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i,
        ge = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function me(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && D(e, t) ? E.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, o = e.length; n < o; n++) K.set(e[n], "globalEval", !t || K.get(t[n], "globalEval"))
    }
    ge.optgroup = ge.option, ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td;
    var ye, be, xe = /<|&#?\w+;/;

    function we(e, t, n, o, i) {
        for (var r, s, a, l, c, u, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
            if ((r = e[h]) || 0 === r)
                if ("object" === w(r)) E.merge(d, r.nodeType ? [r] : r);
                else if (xe.test(r)) {
            for (s = s || f.appendChild(t.createElement("div")), a = (he.exec(r) || ["", ""])[1].toLowerCase(), l = ge[a] || ge._default, s.innerHTML = l[1] + E.htmlPrefilter(r) + l[2], u = l[0]; u--;) s = s.lastChild;
            E.merge(d, s.childNodes), (s = f.firstChild).textContent = ""
        } else d.push(t.createTextNode(r));
        for (f.textContent = "", h = 0; r = d[h++];)
            if (o && -1 < E.inArray(r, o)) i && i.push(r);
            else if (c = re(r), s = me(f.appendChild(r), "script"), c && ve(s), n)
            for (u = 0; r = s[u++];) pe.test(r.type || "") && n.push(r);
        return f
    }
    ye = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), ye.appendChild(be), y.checkClone = ye.cloneNode(!0).cloneNode(!0).lastChild.checked, ye.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ye.cloneNode(!0).lastChild.defaultValue;
    var _e = /^key/,
        Te = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ce = /^([^.]*)(?:\.(.+)|)/;

    function Ee() {
        return !0
    }

    function Se() {
        return !1
    }

    function Ae(e, t) {
        return e === function() {
            try {
                return C.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function De(e, t, n, o, i, r) {
        var s, a;
        if ("object" == _typeof(t)) {
            for (a in "string" != typeof n && (o = o || n, n = void 0), t) De(e, a, n, o, t[a], r);
            return e
        }
        if (null == o && null == i ? (i = n, o = n = void 0) : null == i && ("string" == typeof n ? (i = o, o = void 0) : (i = o, o = n, n = void 0)), !1 === i) i = Se;
        else if (!i) return e;
        return 1 === r && (s = i, (i = function(e) {
            return E().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = E.guid++)), e.each(function() {
            E.event.add(this, t, i, o, n)
        })
    }

    function ke(e, i, r) {
        r ? (K.set(e, i, !1), E.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, o = K.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (o.length)(E.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (o = a.call(arguments), K.set(this, i, o), t = r(this, i), this[i](), o !== (n = K.get(this, i)) || t ? K.set(this, i, !1) : n = {}, o !== n) return e.stopImmediatePropagation(), e.preventDefault(), n.value
                } else o.length && (K.set(this, i, {
                    value: E.event.trigger(E.extend(o[0], E.Event.prototype), o.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === K.get(e, i) && E.event.add(e, i, Ee)
    }
    E.event = {
        global: {},
        add: function(t, e, n, o, i) {
            var r, s, a, l, c, u, f, d, h, p, g, m = K.get(t);
            if (m)
                for (n.handler && (n = (r = n).handler, i = r.selector), i && E.find.matchesSelector(ie, i), n.guid || (n.guid = E.guid++), (l = m.events) || (l = m.events = {}), (s = m.handle) || (s = m.handle = function(e) {
                        return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                    }), c = (e = (e || "").match(j) || [""]).length; c--;) h = g = (a = Ce.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), h && (f = E.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = E.event.special[h] || {}, u = E.extend({
                    type: h,
                    origType: g,
                    data: o,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && E.expr.match.needsContext.test(i),
                    namespace: p.join(".")
                }, r), (d = l[h]) || ((d = l[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, o, p, s) || t.addEventListener && t.addEventListener(h, s)), f.add && (f.add.call(t, u), u.handler.guid || (u.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, u) : d.push(u), E.event.global[h] = !0)
        },
        remove: function(e, t, n, o, i) {
            var r, s, a, l, c, u, f, d, h, p, g, m = K.hasData(e) && K.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(j) || [""]).length; c--;)
                    if (h = g = (a = Ce.exec(t[c]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
                        for (f = E.event.special[h] || {}, d = l[h = (o ? f.delegateType : f.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = d.length; r--;) u = d[r], !i && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || o && o !== u.selector && ("**" !== o || !u.selector) || (d.splice(r, 1), u.selector && d.delegateCount--, f.remove && f.remove.call(e, u));
                        s && !d.length && (f.teardown && !1 !== f.teardown.call(e, p, m.handle) || E.removeEvent(e, h, m.handle), delete l[h])
                    } else
                        for (h in l) E.event.remove(e, h + t[c], n, o, !0);
                E.isEmptyObject(l) && K.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, o, i, r, s, a = E.event.fix(e),
                l = new Array(arguments.length),
                c = (K.get(this, "events") || {})[a.type] || [],
                u = E.event.special[a.type] || {};
            for (l[0] = a, t = 1; t < arguments.length; t++) l[t] = arguments[t];
            if (a.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = E.event.handlers.call(this, a, c), t = 0;
                    (i = s[t++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = i.elem, n = 0;
                        (r = i.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !1 !== r.namespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (o = ((E.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, l)) && !1 === (a.result = o) && (a.preventDefault(), a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(e, t) {
            var n, o, i, r, s, a = [],
                l = t.delegateCount,
                c = e.target;
            if (l && c.nodeType && !("click" === e.type && 1 <= e.button))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[i = (o = t[n]).selector + " "] && (s[i] = o.needsContext ? -1 < E(i, this).index(c) : E.find(i, this, null, [c]).length), s[i] && r.push(o);
                        r.length && a.push({
                            elem: c,
                            handlers: r
                        })
                    }
            return c = this, l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }), a
        },
        addProp: function(t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
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
        fix: function(e) {
            return e[E.expando] ? e : new E.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && D(t, "input") && ke(t, "click", Ee), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && D(t, "input") && ke(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return de.test(t.type) && t.click && D(t, "input") && K.get(t, "click") || D(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, E.Event = function(e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Ee : Se, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: Se,
        isPropagationStopped: Se,
        isImmediatePropagationStopped: Se,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = Ee, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = Ee, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = Ee, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, E.each({
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
        which: function(e) {
            var t = e.button;
            return null == e.which && _e.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Te.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, E.event.addProp), E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        E.event.special[e] = {
            setup: function() {
                return ke(this, e, Ae), !1
            },
            trigger: function() {
                return ke(this, e), !0
            },
            delegateType: t
        }
    }), E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        E.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    o = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = o.origType, t = o.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), E.fn.extend({
        on: function(e, t, n, o) {
            return De(this, e, t, n, o)
        },
        one: function(e, t, n, o) {
            return De(this, e, t, n, o, 1)
        },
        off: function(e, t, n) {
            var o, i;
            if (e && e.preventDefault && e.handleObj) return o = e.handleObj, E(e.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
            if ("object" != _typeof(e)) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Se), this.each(function() {
                E.event.remove(this, e, n, t)
            });
            for (i in e) this.off(i, t, e[i]);
            return this
        }
    });
    var Ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Pe = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Oe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return D(e, "table") && D(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }

    function $e(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function je(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function He(e, t) {
        var n, o, i, r, s, a, l, c;
        if (1 === t.nodeType) {
            if (K.hasData(e) && (r = K.access(e), s = K.set(t, r), c = r.events))
                for (i in delete s.handle, s.events = {}, c)
                    for (n = 0, o = c[i].length; n < o; n++) E.event.add(t, i, c[i][n]);
            G.hasData(e) && (a = G.access(e), l = E.extend({}, a), G.set(t, l))
        }
    }

    function Me(n, o, i, r) {
        o = m.apply([], o);
        var e, t, s, a, l, c, u = 0,
            f = n.length,
            d = f - 1,
            h = o[0],
            p = b(h);
        if (p || 1 < f && "string" == typeof h && !y.checkClone && Ne.test(h)) return n.each(function(e) {
            var t = n.eq(e);
            p && (o[0] = h.call(this, e, t.html())), Me(t, o, i, r)
        });
        if (f && (t = (e = we(o, n[0].ownerDocument, !1, n, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
            for (a = (s = E.map(me(e, "script"), $e)).length; u < f; u++) l = e, u !== d && (l = E.clone(l, !0, !0), a && E.merge(s, me(l, "script"))), i.call(n[u], l, u);
            if (a)
                for (c = s[s.length - 1].ownerDocument, E.map(s, je), u = 0; u < a; u++) l = s[u], pe.test(l.type || "") && !K.access(l, "globalEval") && E.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && !l.noModule && E._evalUrl(l.src, {
                    nonce: l.nonce || l.getAttribute("nonce")
                }) : x(l.textContent.replace(Oe, ""), l, c))
        }
        return n
    }

    function Fe(e, t, n) {
        for (var o, i = t ? E.filter(t, e) : e, r = 0; null != (o = i[r]); r++) n || 1 !== o.nodeType || E.cleanData(me(o)), o.parentNode && (n && re(o) && ve(me(o, "script")), o.parentNode.removeChild(o));
        return e
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ie, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var o, i, r, s, a, l, c, u = e.cloneNode(!0),
                f = re(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (s = me(u), o = 0, i = (r = me(e)).length; o < i; o++) a = r[o], "input" === (c = (l = s[o]).nodeName.toLowerCase()) && de.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
            if (t)
                if (n)
                    for (r = r || me(e), s = s || me(u), o = 0, i = r.length; o < i; o++) He(r[o], s[o]);
                else He(e, u);
            return 0 < (s = me(u, "script")).length && ve(s, !f && me(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, o, i = E.event.special, r = 0; void 0 !== (n = e[r]); r++)
                if (V(n)) {
                    if (t = n[K.expando]) {
                        if (t.events)
                            for (o in t.events) i[o] ? E.event.remove(n, o) : E.removeEvent(n, o, t.handle);
                        n[K.expando] = void 0
                    }
                    n[G.expando] && (n[G.expando] = void 0)
                }
        }
    }), E.fn.extend({
        detach: function(e) {
            return Fe(this, e, !0)
        },
        remove: function(e) {
            return Fe(this, e)
        },
        text: function(e) {
            return W(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return Me(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return Me(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Le(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return Me(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return Me(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(me(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return W(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    o = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Pe.test(e) && !ge[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < o; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(me(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Me(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(me(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        E.fn[e] = function(e) {
            for (var t, n = [], o = E(e), i = o.length - 1, r = 0; r <= i; r++) t = r === i ? this : this.clone(!0), E(o[r])[s](t), l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Re, qe, Be, We, ze, Ue, Ye, Xe = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Ve = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = T), t.getComputedStyle(e)
        },
        Qe = new RegExp(oe.join("|"), "i");

    function Ke(e, t, n) {
        var o, i, r, s, a = e.style;
        return (n = n || Ve(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || re(e) || (s = E.style(e, t)), !y.pixelBoxStyles() && Xe.test(s) && Qe.test(t) && (o = a.width, i = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = o, a.minWidth = i, a.maxWidth = r)), void 0 !== s ? s + "" : s
    }

    function Ge(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }

    function Ze() {
        var e;
        Ye && (Ue.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Ye.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ie.appendChild(Ue).appendChild(Ye), e = T.getComputedStyle(Ye), Re = "1%" !== e.top, ze = 12 === Je(e.marginLeft), Ye.style.right = "60%", We = 36 === Je(e.right), qe = 36 === Je(e.width), Ye.style.position = "absolute", Be = 12 === Je(Ye.offsetWidth / 3), ie.removeChild(Ue), Ye = null)
    }

    function Je(e) {
        return Math.round(parseFloat(e))
    }
    Ue = C.createElement("div"), (Ye = C.createElement("div")).style && (Ye.style.backgroundClip = "content-box", Ye.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Ye.style.backgroundClip, E.extend(y, {
        boxSizingReliable: function() {
            return Ze(), qe
        },
        pixelBoxStyles: function() {
            return Ze(), We
        },
        pixelPosition: function() {
            return Ze(), Re
        },
        reliableMarginLeft: function() {
            return Ze(), ze
        },
        scrollboxSize: function() {
            return Ze(), Be
        }
    }));
    var et = ["Webkit", "Moz", "ms"],
        tt = C.createElement("div").style,
        nt = {};

    function ot(e) {
        return E.cssProps[e] || nt[e] || (e in tt ? e : nt[e] = function(e) {
            for (var t = e[0].toUpperCase() + e.slice(1), n = et.length; n--;)
                if ((e = et[n] + t) in tt) return e
        }(e) || e)
    }
    var it = /^(none|table(?!-c[ea]).+)/,
        rt = /^--/,
        st = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        at = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function lt(e, t, n) {
        var o = ne.exec(t);
        return o ? Math.max(0, o[2] - (n || 0)) + (o[3] || "px") : t
    }

    function ct(e, t, n, o, i, r) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            l = 0;
        if (n === (o ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += E.css(e, n + oe[s], !0, i)), o ? ("content" === n && (l -= E.css(e, "padding" + oe[s], !0, i)), "margin" !== n && (l -= E.css(e, "border" + oe[s] + "Width", !0, i))) : (l += E.css(e, "padding" + oe[s], !0, i), "padding" !== n ? l += E.css(e, "border" + oe[s] + "Width", !0, i) : a += E.css(e, "border" + oe[s] + "Width", !0, i));
        return !o && 0 <= r && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - a - .5)) || 0), l
    }

    function ut(e, t, n) {
        var o = Ve(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, o),
            r = i,
            s = Ke(e, t, o),
            a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Xe.test(s)) {
            if (!n) return s;
            s = "auto"
        }
        return (!y.boxSizingReliable() && i || "auto" === s || !parseFloat(s) && "inline" === E.css(e, "display", !1, o)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, o), (r = a in e) && (s = e[a])), (s = parseFloat(s) || 0) + ct(e, t, n || (i ? "border" : "content"), r, o, s) + "px"
    }

    function ft(e, t, n, o, i) {
        return new ft.prototype.init(e, t, n, o, i)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ke(e, "opacity");
                        return "" === n ? "1" : n
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
        style: function(e, t, n, o) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, r, s, a = X(t),
                    l = rt.test(t),
                    c = e.style;
                if (l || (t = ot(a)), s = E.cssHooks[t] || E.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, o)) ? i : c[t];
                "string" === (r = _typeof(n)) && (i = ne.exec(n)) && i[1] && (n = ce(e, t, i), r = "number"), null != n && n == n && ("number" !== r || l || (n += i && i[3] || (E.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, o)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, o) {
            var i, r, s, a = X(t);
            return rt.test(t) || (t = ot(a)), (s = E.cssHooks[t] || E.cssHooks[a]) && "get" in s && (i = s.get(e, !0, n)), void 0 === i && (i = Ke(e, t, o)), "normal" === i && t in at && (i = at[t]), "" === n || n ? (r = parseFloat(i), !0 === n || isFinite(r) ? r || 0 : i) : i
        }
    }), E.each(["height", "width"], function(e, l) {
        E.cssHooks[l] = {
            get: function(e, t, n) {
                if (t) return !it.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ut(e, l, n) : le(e, st, function() {
                    return ut(e, l, n)
                })
            },
            set: function(e, t, n) {
                var o, i = Ve(e),
                    r = !y.scrollboxSize() && "absolute" === i.position,
                    s = (r || n) && "border-box" === E.css(e, "boxSizing", !1, i),
                    a = n ? ct(e, l, n, s, i) : 0;
                return s && r && (a -= Math.ceil(e["offset" + l[0].toUpperCase() + l.slice(1)] - parseFloat(i[l]) - ct(e, l, "border", !1, i) - .5)), a && (o = ne.exec(t)) && "px" !== (o[3] || "px") && (e.style[l] = t, t = E.css(e, l)), lt(0, t, a)
            }
        }
    }), E.cssHooks.marginLeft = Ge(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ke(e, "marginLeft")) || e.getBoundingClientRect().left - le(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, r) {
        E.cssHooks[i + r] = {
            expand: function(e) {
                for (var t = 0, n = {}, o = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + oe[t] + r] = o[t] || o[t - 2] || o[0];
                return n
            }
        }, "margin" !== i && (E.cssHooks[i + r].set = lt)
    }), E.fn.extend({
        css: function(e, t) {
            return W(this, function(e, t, n) {
                var o, i, r = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (o = Ve(e), i = t.length; s < i; s++) r[t[s]] = E.css(e, t[s], !1, o);
                    return r
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((E.Tween = ft).prototype = {
        constructor: ft,
        init: function(e, t, n, o, i, r) {
            this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = o, this.unit = r || (E.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = ft.propHooks[this.prop];
            return e && e.get ? e.get(this) : ft.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = ft.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ft.propHooks._default.set(this), this
        }
    }).init.prototype = ft.prototype, (ft.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[ot(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = ft.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, E.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, E.fx = ft.prototype.init, E.fx.step = {};
    var dt, ht, pt, gt, mt = /^(?:toggle|show|hide)$/,
        vt = /queueHooks$/;

    function yt() {
        ht && (!1 === C.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(yt) : T.setTimeout(yt, E.fx.interval), E.fx.tick())
    }

    function bt() {
        return T.setTimeout(function() {
            dt = void 0
        }), dt = Date.now()
    }

    function xt(e, t) {
        var n, o = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; o < 4; o += 2 - t) i["margin" + (n = oe[o])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function wt(e, t, n) {
        for (var o, i = (_t.tweeners[t] || []).concat(_t.tweeners["*"]), r = 0, s = i.length; r < s; r++)
            if (o = i[r].call(n, t, e)) return o
    }

    function _t(r, e, t) {
        var n, s, o = 0,
            i = _t.prefilters.length,
            a = E.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var e = dt || bt(), t = Math.max(0, c.startTime + c.duration - e), n = 1 - (t / c.duration || 0), o = 0, i = c.tweens.length; o < i; o++) c.tweens[o].run(n);
                return a.notifyWith(r, [c, n, t]), n < 1 && i ? t : (i || a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c]), !1)
            },
            c = a.promise({
                elem: r,
                props: E.extend({}, e),
                opts: E.extend(!0, {
                    specialEasing: {},
                    easing: E.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: dt || bt(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = E.Tween(r, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; t < n; t++) c.tweens[t].run(1);
                    return e ? (a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c, e])) : a.rejectWith(r, [c, e]), this
                }
            }),
            u = c.props;
        for (function(e, t) {
                var n, o, i, r, s;
                for (n in e)
                    if (i = t[o = X(n)], r = e[n], Array.isArray(r) && (i = r[1], r = e[n] = r[0]), n !== o && (e[o] = r, delete e[n]), (s = E.cssHooks[o]) && "expand" in s)
                        for (n in r = s.expand(r), delete e[o], r) n in e || (e[n] = r[n], t[n] = i);
                    else t[o] = i
            }(u, c.opts.specialEasing); o < i; o++)
            if (n = _t.prefilters[o].call(c, r, u, c.opts)) return b(n.stop) && (E._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
        return E.map(u, wt, c), b(c.opts.start) && c.opts.start.call(r, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), E.fx.timer(E.extend(l, {
            elem: r,
            anim: c,
            queue: c.opts.queue
        })), c
    }
    E.Animation = E.extend(_t, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ce(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, o = 0, i = (e = b(e) ? (t = e, ["*"]) : e.match(j)).length; o < i; o++) n = e[o], _t.tweeners[n] = _t.tweeners[n] || [], _t.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var o, i, r, s, a, l, c, u, f = "width" in t || "height" in t,
                d = this,
                h = {},
                p = e.style,
                g = e.nodeType && ae(e),
                m = K.get(e, "fxshow");
            for (o in n.queue || (null == (s = E._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || a()
                }), s.unqueued++, d.always(function() {
                    d.always(function() {
                        s.unqueued--, E.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (i = t[o], mt.test(i)) {
                    if (delete t[o], r = r || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !m || void 0 === m[o]) continue;
                        g = !0
                    }
                    h[o] = m && m[o] || E.style(e, o)
                }
            if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(h))
                for (o in f && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (c = m && m.display) && (c = K.get(e, "display")), "none" === (u = E.css(e, "display")) && (c ? u = c : (fe([e], !0), c = e.style.display || c, u = E.css(e, "display"), fe([e]))), ("inline" === u || "inline-block" === u && null != c) && "none" === E.css(e, "float") && (l || (d.done(function() {
                        p.display = c
                    }), null == c && (u = p.display, c = "none" === u ? "" : u)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", d.always(function() {
                        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
                    })), l = !1, h) l || (m ? "hidden" in m && (g = m.hidden) : m = K.access(e, "fxshow", {
                    display: c
                }), r && (m.hidden = !g), g && fe([e], !0), d.done(function() {
                    for (o in g || fe([e]), K.remove(e, "fxshow"), h) E.style(e, o, h[o])
                })), l = wt(g ? m[o] : 0, o, d), o in m || (m[o] = l.start, g && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? _t.prefilters.unshift(e) : _t.prefilters.push(e)
        }
    }), E.speed = function(e, t, n) {
        var o = e && "object" == _typeof(e) ? E.extend({}, e) : {
            complete: n || !n && t || b(e) && e,
            duration: e,
            easing: n && t || t && !b(t) && t
        };
        return E.fx.off ? o.duration = 0 : "number" != typeof o.duration && (o.duration in E.fx.speeds ? o.duration = E.fx.speeds[o.duration] : o.duration = E.fx.speeds._default), null != o.queue && !0 !== o.queue || (o.queue = "fx"), o.old = o.complete, o.complete = function() {
            b(o.old) && o.old.call(this), o.queue && E.dequeue(this, o.queue)
        }, o
    }, E.fn.extend({
        fadeTo: function(e, t, n, o) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, o)
        },
        animate: function(t, e, n, o) {
            function i() {
                var e = _t(this, E.extend({}, t), s);
                (r || K.get(this, "finish")) && e.stop(!0)
            }
            var r = E.isEmptyObject(t),
                s = E.speed(e, n, o);
            return i.finish = i, r || !1 === s.queue ? this.each(i) : this.queue(s.queue, i)
        },
        stop: function(i, e, r) {
            function s(e) {
                var t = e.stop;
                delete e.stop, t(r)
            }
            return "string" != typeof i && (r = e, e = i, i = void 0), e && !1 !== i && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = E.timers,
                    o = K.get(this);
                if (t) o[t] && o[t].stop && s(o[t]);
                else
                    for (t in o) o[t] && o[t].stop && vt.test(t) && s(o[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(r), e = !1, n.splice(t, 1));
                !e && r || E.dequeue(this, i)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = K.get(this),
                    n = t[s + "queue"],
                    o = t[s + "queueHooks"],
                    i = E.timers,
                    r = n ? n.length : 0;
                for (t.finish = !0, E.queue(this, s, []), o && o.stop && o.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === s && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), E.each(["toggle", "show", "hide"], function(e, o) {
        var i = E.fn[o];
        E.fn[o] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(xt(o, !0), e, t, n)
        }
    }), E.each({
        slideDown: xt("show"),
        slideUp: xt("hide"),
        slideToggle: xt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, o) {
        E.fn[e] = function(e, t, n) {
            return this.animate(o, e, t, n)
        }
    }), E.timers = [], E.fx.tick = function() {
        var e, t = 0,
            n = E.timers;
        for (dt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(), dt = void 0
    }, E.fx.timer = function(e) {
        E.timers.push(e), E.fx.start()
    }, E.fx.interval = 13, E.fx.start = function() {
        ht || (ht = !0, yt())
    }, E.fx.stop = function() {
        ht = null
    }, E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, E.fn.delay = function(o, e) {
        return o = E.fx && E.fx.speeds[o] || o, e = e || "fx", this.queue(e, function(e, t) {
            var n = T.setTimeout(e, o);
            t.stop = function() {
                T.clearTimeout(n)
            }
        })
    }, pt = C.createElement("input"), gt = C.createElement("select").appendChild(C.createElement("option")), pt.type = "checkbox", y.checkOn = "" !== pt.value, y.optSelected = gt.selected, (pt = C.createElement("input")).value = "t", pt.type = "radio", y.radioValue = "t" === pt.value;
    var Tt, Ct = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return W(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }), E.extend({
        attr: function(e, t, n) {
            var o, i, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? E.prop(e, t, n) : (1 === r && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? Tt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : !(i && "get" in i && null !== (o = i.get(e, t))) && null == (o = E.find.attr(e, t)) ? void 0 : o)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && D(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, o = 0,
                i = t && t.match(j);
            if (i && 1 === e.nodeType)
                for (; n = i[o++];) e.removeAttribute(n)
        }
    }), Tt = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = Ct[t] || E.find.attr;
        Ct[t] = function(e, t, n) {
            var o, i, r = t.toLowerCase();
            return n || (i = Ct[r], Ct[r] = o, o = null != s(e, t, n) ? r : null, Ct[r] = i), o
        }
    });
    var Et = /^(?:input|select|textarea|button)$/i,
        St = /^(?:a|area)$/i;

    function At(e) {
        return (e.match(j) || []).join(" ")
    }

    function Dt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function kt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(j) || []
    }
    E.fn.extend({
        prop: function(e, t) {
            return W(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }), E.extend({
        prop: function(e, t, n) {
            var o, i, r = e.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : e[t] = n : i && "get" in i && null !== (o = i.get(e, t)) ? o : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Et.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), y.optSelected || (E.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        E.propFix[this.toLowerCase()] = this
    }), E.fn.extend({
        addClass: function(t) {
            var e, n, o, i, r, s, a, l = 0;
            if (b(t)) return this.each(function(e) {
                E(this).addClass(t.call(this, e, Dt(this)))
            });
            if ((e = kt(t)).length)
                for (; n = this[l++];)
                    if (i = Dt(n), o = 1 === n.nodeType && " " + At(i) + " ") {
                        for (s = 0; r = e[s++];) o.indexOf(" " + r + " ") < 0 && (o += r + " ");
                        i !== (a = At(o)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, o, i, r, s, a, l = 0;
            if (b(t)) return this.each(function(e) {
                E(this).removeClass(t.call(this, e, Dt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = kt(t)).length)
                for (; n = this[l++];)
                    if (i = Dt(n), o = 1 === n.nodeType && " " + At(i) + " ") {
                        for (s = 0; r = e[s++];)
                            for (; - 1 < o.indexOf(" " + r + " ");) o = o.replace(" " + r + " ", " ");
                        i !== (a = At(o)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var r = _typeof(i),
                s = "string" === r || Array.isArray(i);
            return "boolean" == typeof t && s ? t ? this.addClass(i) : this.removeClass(i) : b(i) ? this.each(function(e) {
                E(this).toggleClass(i.call(this, e, Dt(this), t), t)
            }) : this.each(function() {
                var e, t, n, o;
                if (s)
                    for (t = 0, n = E(this), o = kt(i); e = o[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== i && "boolean" !== r || ((e = Dt(this)) && K.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== i && K.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, n = 0, o = " " + e + " "; t = this[n++];)
                if (1 === t.nodeType && -1 < (" " + At(Dt(t)) + " ").indexOf(o)) return !0;
            return !1
        }
    });
    var It = /\r/g;
    E.fn.extend({
        val: function(n) {
            var o, e, i, t = this[0];
            return arguments.length ? (i = b(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (o = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in o && void 0 !== o.set(this, t, "value") || (this.value = t))
            })) : t ? (o = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in o && void 0 !== (e = o.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(It, "") : null == e ? "" : e : void 0
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : At(E.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, o = e.options, i = e.selectedIndex, r = "select-one" === e.type, s = r ? null : [], a = r ? i + 1 : o.length, l = i < 0 ? a : r ? i : 0; l < a; l++)
                        if (((n = o[l]).selected || l === i) && !n.disabled && (!n.parentNode.disabled || !D(n.parentNode, "optgroup"))) {
                            if (t = E(n).val(), r) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, o, i = e.options, r = E.makeArray(t), s = i.length; s--;)((o = i[s]).selected = -1 < E.inArray(E.valHooks.option.get(o), r)) && (n = !0);
                    return n || (e.selectedIndex = -1), r
                }
            }
        }
    }), E.each(["radio", "checkbox"], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        }, y.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in T;

    function Pt(e) {
        e.stopPropagation()
    }
    var Nt = /^(?:focusinfocus|focusoutblur)$/;
    E.extend(E.event, {
        trigger: function(e, t, n, o) {
            var i, r, s, a, l, c, u, f = [n || C],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [],
                p = u = r = n = n || C;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Nt.test(d + E.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), a = d.indexOf(":") < 0 && "on" + d, (e = e[E.expando] ? e : new E.Event(d, "object" == _typeof(e) && e)).isTrigger = o ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[d] || {}, o || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!o && !c.noBubble && !g(n)) {
                    for (s = c.delegateType || d, Nt.test(s + d) || (p = p.parentNode); p; p = p.parentNode) f.push(p), r = p;
                    r === (n.ownerDocument || C) && f.push(r.defaultView || r.parentWindow || T)
                }
                for (i = 0;
                    (p = f[i++]) && !e.isPropagationStopped();) u = p, e.type = 1 < i ? s : c.bindType || d, (l = (K.get(p, "events") || {})[e.type] && K.get(p, "handle")) && l.apply(p, t), (l = a && p[a]) && l.apply && V(p) && (e.result = l.apply(p, t), !1 === e.result && e.preventDefault());
                return e.type = d, o || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), t) || !V(n) || a && b(n[d]) && !g(n) && ((r = n[a]) && (n[a] = null), E.event.triggered = d, e.isPropagationStopped() && u.addEventListener(d, Pt), n[d](), e.isPropagationStopped() && u.removeEventListener(d, Pt), E.event.triggered = void 0, r && (n[a] = r)), e.result
            }
        },
        simulate: function(e, t, n) {
            var o = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(o, null, t)
        }
    }), E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return E.event.trigger(e, t, n, !0)
        }
    }), y.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, o) {
        function i(e) {
            E.event.simulate(o, e.target, E.event.fix(e))
        }
        E.event.special[o] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = K.access(e, o);
                t || e.addEventListener(n, i, !0), K.access(e, o, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = K.access(e, o) - 1;
                t ? K.access(e, o, t) : (e.removeEventListener(n, i, !0), K.remove(e, o))
            }
        }
    });
    var Ot = T.location,
        Lt = Date.now(),
        $t = /\?/;
    E.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new T.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t
    };
    var jt = /\[\]$/,
        Ht = /\r?\n/g,
        Mt = /^(?:submit|button|image|reset|file)$/i,
        Ft = /^(?:input|select|textarea|keygen)/i;
    E.param = function(e, t) {
        function n(e, t) {
            var n = b(t) ? t() : t;
            i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        }
        var o, i = [];
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (o in e) ! function n(o, e, i, r) {
                var t;
                if (Array.isArray(e)) E.each(e, function(e, t) {
                    i || jt.test(o) ? r(o, t) : n(o + "[" + ("object" == _typeof(t) && null != t ? e : "") + "]", t, i, r)
                });
                else if (i || "object" !== w(e)) r(o, e);
                else
                    for (t in e) n(o + "[" + t + "]", e[t], i, r)
            }(o, e[o], t, n);
        return i.join("&")
    }, E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && Ft.test(this.nodeName) && !Mt.test(e) && (this.checked || !de.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ht, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ht, "\r\n")
                }
            }).get()
        }
    });
    var Rt = /%20/g,
        qt = /#.*$/,
        Bt = /([?&])_=[^&]*/,
        Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        zt = /^(?:GET|HEAD)$/,
        Ut = /^\/\//,
        Yt = {},
        Xt = {},
        Vt = "*/".concat("*"),
        Qt = C.createElement("a");

    function Kt(r) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, o = 0,
                i = e.toLowerCase().match(j) || [];
            if (b(t))
                for (; n = i[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(t)) : (r[n] = r[n] || []).push(t)
        }
    }

    function Gt(t, i, r, s) {
        var a = {},
            l = t === Xt;

        function c(e) {
            var o;
            return a[e] = !0, E.each(t[e] || [], function(e, t) {
                var n = t(i, r, s);
                return "string" != typeof n || l || a[n] ? l ? !(o = n) : void 0 : (i.dataTypes.unshift(n), c(n), !1)
            }), o
        }
        return c(i.dataTypes[0]) || !a["*"] && c("*")
    }

    function Zt(e, t) {
        var n, o, i = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : o = o || {})[n] = t[n]);
        return o && E.extend(!0, e, o), e
    }
    Qt.href = Ot.href, E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ot.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ot.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Vt,
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
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Zt(Zt(e, E.ajaxSettings), t) : Zt(E.ajaxSettings, e)
        },
        ajaxPrefilter: Kt(Yt),
        ajaxTransport: Kt(Xt),
        ajax: function(e, t) {
            "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
            var u, f, d, n, h, o, p, g, i, r, m = E.ajaxSetup({}, t),
                v = m.context || m,
                y = m.context && (v.nodeType || v.jquery) ? E(v) : E.event,
                b = E.Deferred(),
                x = E.Callbacks("once memory"),
                w = m.statusCode || {},
                s = {},
                a = {},
                l = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (p) {
                            if (!n)
                                for (n = {}; t = Wt.exec(d);) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return p ? d : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == p && (e = a[e.toLowerCase()] = a[e.toLowerCase()] || e, s[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == p && (m.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (p) _.always(e[_.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || l;
                        return u && u.abort(t), c(0, t), this
                    }
                };
            if (b.promise(_), m.url = ((e || m.url || Ot.href) + "").replace(Ut, Ot.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(j) || [""], null == m.crossDomain) {
                o = C.createElement("a");
                try {
                    o.href = m.url, o.href = o.href, m.crossDomain = Qt.protocol + "//" + Qt.host != o.protocol + "//" + o.host
                } catch (e) {
                    m.crossDomain = !0
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = E.param(m.data, m.traditional)), Gt(Yt, m, t, _), p) return _;
            for (i in (g = E.event && m.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !zt.test(m.type), f = m.url.replace(qt, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(Rt, "+")) : (r = m.url.slice(f.length), m.data && (m.processData || "string" == typeof m.data) && (f += ($t.test(f) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (f = f.replace(Bt, "$1"), r = ($t.test(f) ? "&" : "?") + "_=" + Lt++ + r), m.url = f + r), m.ifModified && (E.lastModified[f] && _.setRequestHeader("If-Modified-Since", E.lastModified[f]), E.etag[f] && _.setRequestHeader("If-None-Match", E.etag[f])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && _.setRequestHeader("Content-Type", m.contentType), _.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Vt + "; q=0.01" : "") : m.accepts["*"]), m.headers) _.setRequestHeader(i, m.headers[i]);
            if (m.beforeSend && (!1 === m.beforeSend.call(v, _, m) || p)) return _.abort();
            if (l = "abort", x.add(m.complete), _.done(m.success), _.fail(m.error), u = Gt(Xt, m, t, _)) {
                if (_.readyState = 1, g && y.trigger("ajaxSend", [_, m]), p) return _;
                m.async && 0 < m.timeout && (h = T.setTimeout(function() {
                    _.abort("timeout")
                }, m.timeout));
                try {
                    p = !1, u.send(s, c)
                } catch (e) {
                    if (p) throw e;
                    c(-1, e)
                }
            } else c(-1, "No Transport");

            function c(e, t, n, o) {
                var i, r, s, a, l, c = t;
                p || (p = !0, h && T.clearTimeout(h), u = void 0, d = o || "", _.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (a = function(e, t, n) {
                    for (var o, i, r, s, a = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (o)
                        for (i in a)
                            if (a[i] && a[i].test(o)) {
                                l.unshift(i);
                                break
                            }
                    if (l[0] in n) r = l[0];
                    else {
                        for (i in n) {
                            if (!l[0] || e.converters[i + " " + l[0]]) {
                                r = i;
                                break
                            }
                            s = s || i
                        }
                        r = r || s
                    }
                    if (r) return r !== l[0] && l.unshift(r), n[r]
                }(m, _, n)), a = function(e, t, n, o) {
                    var i, r, s, a, l, c = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
                    for (r = u.shift(); r;)
                        if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && o && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                            for (i in c)
                                if ((a = i.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[i] : !0 !== c[i] && (r = a[0], u.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(m, a, _, i), i ? (m.ifModified && ((l = _.getResponseHeader("Last-Modified")) && (E.lastModified[f] = l), (l = _.getResponseHeader("etag")) && (E.etag[f] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, r = a.data, i = !(s = a.error))) : (s = c, !e && c || (c = "error", e < 0 && (e = 0))), _.status = e, _.statusText = (t || c) + "", i ? b.resolveWith(v, [r, c, _]) : b.rejectWith(v, [_, c, s]), _.statusCode(w), w = void 0, g && y.trigger(i ? "ajaxSuccess" : "ajaxError", [_, m, i ? r : s]), x.fireWith(v, [_, c]), g && (y.trigger("ajaxComplete", [_, m]), --E.active || E.event.trigger("ajaxStop")))
            }
            return _
        },
        getJSON: function(e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return E.get(e, void 0, t, "script")
        }
    }), E.each(["get", "post"], function(e, i) {
        E[i] = function(e, t, n, o) {
            return b(t) && (o = o || n, n = t, t = void 0), E.ajax(E.extend({
                url: e,
                type: i,
                dataType: o,
                data: t,
                success: n
            }, E.isPlainObject(e) && e))
        }
    }), E._evalUrl = function(e, t) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                E.globalEval(e, t)
            }
        })
    }, E.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (b(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = E(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = b(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                E(this).replaceWith(this.childNodes)
            }), this
        }
    }), E.expr.pseudos.hidden = function(e) {
        return !E.expr.pseudos.visible(e)
    }, E.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, E.ajaxSettings.xhr = function() {
        try {
            return new T.XMLHttpRequest
        } catch (e) {}
    };
    var Jt = {
            0: 200,
            1223: 204
        },
        en = E.ajaxSettings.xhr();
    y.cors = !!en && "withCredentials" in en, y.ajax = en = !!en, E.ajaxTransport(function(i) {
        var r, s;
        if (y.cors || en && !i.crossDomain) return {
            send: function(e, t) {
                var n, o = i.xhr();
                if (o.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) o[n] = i.xhrFields[n];
                for (n in i.mimeType && o.overrideMimeType && o.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) o.setRequestHeader(n, e[n]);
                r = function(e) {
                    return function() {
                        r && (r = s = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? t(0, "error") : t(o.status, o.statusText) : t(Jt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                            binary: o.response
                        } : {
                            text: o.responseText
                        }, o.getAllResponseHeaders()))
                    }
                }, o.onload = r(), s = o.onerror = o.ontimeout = r("error"), void 0 !== o.onabort ? o.onabort = s : o.onreadystatechange = function() {
                    4 === o.readyState && T.setTimeout(function() {
                        r && s()
                    })
                }, r = r("abort");
                try {
                    o.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (r) throw e
                }
            },
            abort: function() {
                r && r()
            }
        }
    }), E.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return E.globalEval(e), e
            }
        }
    }), E.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), E.ajaxTransport("script", function(n) {
        var o, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                o = E("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    o.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), C.head.appendChild(o[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var tn, nn = [],
        on = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = nn.pop() || E.expando + "_" + Lt++;
            return this[e] = !0, e
        }
    }), E.ajaxPrefilter("json jsonp", function(e, t, n) {
        var o, i, r, s = !1 !== e.jsonp && (on.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(on, "$1" + o) : !1 !== e.jsonp && (e.url += ($t.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function() {
            return r || E.error(o + " was not called"), r[0]
        }, e.dataTypes[0] = "json", i = T[o], T[o] = function() {
            r = arguments
        }, n.always(function() {
            void 0 === i ? E(T).removeProp(o) : T[o] = i, e[o] && (e.jsonpCallback = t.jsonpCallback, nn.push(o)), r && b(i) && i(r[0]), r = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((tn = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === tn.childNodes.length), E.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((o = (t = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t.head.appendChild(o)) : t = C), r = !n && [], (i = k.exec(e)) ? [t.createElement(i[1])] : (i = we([e], t, r), r && r.length && E(r).remove(), E.merge([], i.childNodes)));
        var o, i, r
    }, E.fn.load = function(e, t, n) {
        var o, i, r, s = this,
            a = e.indexOf(" ");
        return -1 < a && (o = At(e.slice(a)), e = e.slice(0, a)), b(t) ? (n = t, t = void 0) : t && "object" == _typeof(t) && (i = "POST"), 0 < s.length && E.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments, s.html(o ? E("<div>").append(E.parseHTML(e)).find(o) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, r || [e.responseText, t, e])
            })
        }), this
    }, E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        E.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), E.expr.pseudos.animated = function(t) {
        return E.grep(E.timers, function(e) {
            return t === e.elem
        }).length
    }, E.offset = {
        setOffset: function(e, t, n) {
            var o, i, r, s, a, l, c = E.css(e, "position"),
                u = E(e),
                f = {};
            "static" === c && (e.style.position = "relative"), a = u.offset(), r = E.css(e, "top"), l = E.css(e, "left"), i = ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (o = u.position()).top, o.left) : (s = parseFloat(r) || 0, parseFloat(l) || 0), b(t) && (t = t.call(e, n, E.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : u.css(f)
        }
    }, E.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                E.offset.setOffset(this, t, e)
            });
            var e, n, o = this[0];
            return o ? o.getClientRects().length ? (e = o.getBoundingClientRect(), n = o.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, o = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === E.css(o, "position")) t = o.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = o.ownerDocument, e = o.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position");) e = e.parentNode;
                    e && e !== o && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - E.css(o, "marginTop", !0),
                    left: t.left - i.left - E.css(o, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === E.css(e, "position");) e = e.offsetParent;
                return e || ie
            })
        }
    }), E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var r = "pageYOffset" === i;
        E.fn[t] = function(e) {
            return W(this, function(e, t, n) {
                var o;
                return g(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === n ? o ? o[i] : e[t] : void(o ? o.scrollTo(r ? o.pageXOffset : n, r ? n : o.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }), E.each(["top", "left"], function(e, n) {
        E.cssHooks[n] = Ge(y.pixelPosition, function(e, t) {
            if (t) return t = Ke(e, n), Xe.test(t) ? E(e).position()[n] + "px" : t
        })
    }), E.each({
        Height: "height",
        Width: "width"
    }, function(s, a) {
        E.each({
            padding: "inner" + s,
            content: a,
            "": "outer" + s
        }, function(o, r) {
            E.fn[r] = function(e, t) {
                var n = arguments.length && (o || "boolean" != typeof e),
                    i = o || (!0 === e || !0 === t ? "margin" : "border");
                return W(this, function(e, t, n) {
                    var o;
                    return g(e) ? 0 === r.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + s], o["scroll" + s], e.body["offset" + s], o["offset" + s], o["client" + s])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                }, a, n ? e : void 0, n)
            }
        })
    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), E.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, o) {
            return this.on(t, e, n, o)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), E.proxy = function(e, t) {
        var n, o, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), b(e)) return o = a.call(arguments, 2), (i = function() {
            return e.apply(t || this, o.concat(a.call(arguments)))
        }).guid = e.guid = e.guid || E.guid++, i
    }, E.holdReady = function(e) {
        e ? E.readyWait++ : E.ready(!0)
    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = D, E.isFunction = b, E.isWindow = g, E.camelCase = X, E.type = w, E.now = Date.now, E.isNumeric = function(e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    });
    var rn = T.jQuery,
        sn = T.$;
    return E.noConflict = function(e) {
        return T.$ === E && (T.$ = sn), e && T.jQuery === E && (T.jQuery = rn), E
    }, e || (T.jQuery = T.$ = E), E
}),
function(e, t) {
    "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t((e = e || self).bootstrap = {}, e.jQuery)
}(void 0, function(e, p) {
    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }

    function r(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e
    }

    function t(t, e) {
        var n, o = Object.keys(t);
        return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        })), o.push.apply(o, n)), o
    }

    function s(i) {
        for (var e = 1; e < arguments.length; e++) {
            var r = null != arguments[e] ? arguments[e] : {};
            e % 2 ? t(Object(r), !0).forEach(function(e) {
                var t, n = i,
                    o = r[t = e];
                t in n ? Object.defineProperty(n, t, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : n[t] = o
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach(function(e) {
                Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e))
            })
        }
        return i
    }
    p = p && p.hasOwnProperty("default") ? p.default : p;
    var n = "transitionend";
    var g = {
        TRANSITION_END: "bsTransitionEnd",
        getUID: function(e) {
            for (; e += ~~(1e6 * Math.random()), document.getElementById(e););
            return e
        },
        getSelectorFromElement: function(e) {
            var t, n = e.getAttribute("data-target");
            n && "#" !== n || (n = (t = e.getAttribute("href")) && "#" !== t ? t.trim() : "");
            try {
                return document.querySelector(n) ? n : null
            } catch (e) {
                return null
            }
        },
        getTransitionDurationFromElement: function(e) {
            if (!e) return 0;
            var t = p(e).css("transition-duration"),
                n = p(e).css("transition-delay"),
                o = parseFloat(t),
                i = parseFloat(n);
            return o || i ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (parseFloat(t) + parseFloat(n))) : 0
        },
        reflow: function(e) {
            return e.offsetHeight
        },
        triggerTransitionEnd: function(e) {
            p(e).trigger(n)
        },
        supportsTransitionEnd: function() {
            return Boolean(n)
        },
        isElement: function(e) {
            return (e[0] || e).nodeType
        },
        typeCheckConfig: function(e, t, n) {
            for (var o in n)
                if (Object.prototype.hasOwnProperty.call(n, o)) {
                    var i = n[o],
                        r = t[o],
                        s = r && g.isElement(r) ? "element" : {}.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase();
                    if (!new RegExp(i).test(s)) throw new Error(e.toUpperCase() + ': Option "' + o + '" provided type "' + s + '" but expected type "' + i + '".')
                }
        },
        findShadowRoot: function(e) {
            if (!document.documentElement.attachShadow) return null;
            if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? g.findShadowRoot(e.parentNode) : null;
            var t = e.getRootNode();
            return t instanceof ShadowRoot ? t : null
        },
        jQueryDetection: function() {
            if (void 0 === p) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var e = p.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }
    };
    g.jQueryDetection(), p.fn.emulateTransitionEnd = function(e) {
        var t = this,
            n = !1;
        return p(this).one(g.TRANSITION_END, function() {
            n = !0
        }), setTimeout(function() {
            n || g.triggerTransitionEnd(t)
        }, e), this
    }, p.event.special[g.TRANSITION_END] = {
        bindType: n,
        delegateType: n,
        handle: function(e) {
            if (p(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
        }
    };
    var i, a = "alert",
        l = "bs.alert",
        c = "." + l,
        u = p.fn[a],
        f = {
            CLOSE: "close" + c,
            CLOSED: "closed" + c,
            CLICK_DATA_API: "click" + c + ".data-api"
        },
        d = ((i = h.prototype).close = function(e) {
            var t = this._element;
            e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
        }, i.dispose = function() {
            p.removeData(this._element, l), this._element = null
        }, i._getRootElement = function(e) {
            var t = g.getSelectorFromElement(e),
                n = !1;
            return t && (n = document.querySelector(t)), n || p(e).closest(".alert")[0]
        }, i._triggerCloseEvent = function(e) {
            var t = p.Event(f.CLOSE);
            return p(e).trigger(t), t
        }, i._removeElement = function(t) {
            var e, n = this;
            p(t).removeClass("show"), p(t).hasClass("fade") ? (e = g.getTransitionDurationFromElement(t), p(t).one(g.TRANSITION_END, function(e) {
                return n._destroyElement(t, e)
            }).emulateTransitionEnd(e)) : this._destroyElement(t)
        }, i._destroyElement = function(e) {
            p(e).detach().trigger(f.CLOSED).remove()
        }, h._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this),
                    t = e.data(l);
                t || (t = new h(this), e.data(l, t)), "close" === n && t[n](this)
            })
        }, h._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(), t.close(this)
            }
        }, r(h, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]), h);

    function h(e) {
        this._element = e
    }
    p(document).on(f.CLICK_DATA_API, '[data-dismiss="alert"]', d._handleDismiss(new d)), p.fn[a] = d._jQueryInterface, p.fn[a].Constructor = d, p.fn[a].noConflict = function() {
        return p.fn[a] = u, d._jQueryInterface
    };
    var m, v = "button",
        y = "bs.button",
        b = "." + y,
        x = ".data-api",
        w = p.fn[v],
        _ = "active",
        T = '[data-toggle^="button"]',
        C = 'input:not([type="hidden"])',
        E = {
            CLICK_DATA_API: "click" + b + x,
            FOCUS_BLUR_DATA_API: "focus" + b + x + " blur" + b + x,
            LOAD_DATA_API: "load" + b + x
        },
        S = ((m = A.prototype).toggle = function() {
            var e, t, n = !0,
                o = !0,
                i = p(this._element).closest('[data-toggle="buttons"]')[0];
            !i || (e = this._element.querySelector(C)) && ("radio" === e.type ? e.checked && this._element.classList.contains(_) ? n = !1 : (t = i.querySelector(".active")) && p(t).removeClass(_) : ("checkbox" !== e.type || "LABEL" === this._element.tagName && e.checked === this._element.classList.contains(_)) && (n = !1), n && (e.checked = !this._element.classList.contains(_), p(e).trigger("change")), e.focus(), o = !1), this._element.hasAttribute("disabled") || this._element.classList.contains("disabled") || (o && this._element.setAttribute("aria-pressed", !this._element.classList.contains(_)), n && p(this._element).toggleClass(_))
        }, m.dispose = function() {
            p.removeData(this._element, y), this._element = null
        }, A._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(y);
                e || (e = new A(this), p(this).data(y, e)), "toggle" === t && e[t]()
            })
        }, r(A, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]), A);

    function A(e) {
        this._element = e
    }
    p(document).on(E.CLICK_DATA_API, T, function(e) {
        var t = e.target;
        if (p(t).hasClass("btn") || (t = p(t).closest(".btn")[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled")) e.preventDefault();
        else {
            var n = t.querySelector(C);
            if (n && (n.hasAttribute("disabled") || n.classList.contains("disabled"))) return void e.preventDefault();
            S._jQueryInterface.call(p(t), "toggle")
        }
    }).on(E.FOCUS_BLUR_DATA_API, T, function(e) {
        var t = p(e.target).closest(".btn")[0];
        p(t).toggleClass("focus", /^focus(in)?$/.test(e.type))
    }), p(window).on(E.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
            var o = e[t],
                i = o.querySelector(C);
            i.checked || i.hasAttribute("checked") ? o.classList.add(_) : o.classList.remove(_)
        }
        for (var r = 0, s = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; r < s; r++) {
            var a = e[r];
            "true" === a.getAttribute("aria-pressed") ? a.classList.add(_) : a.classList.remove(_)
        }
    }), p.fn[v] = S._jQueryInterface, p.fn[v].Constructor = S, p.fn[v].noConflict = function() {
        return p.fn[v] = w, S._jQueryInterface
    };
    var D, k = "carousel",
        I = "bs.carousel",
        P = "." + I,
        N = ".data-api",
        O = p.fn[k],
        L = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        $ = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        j = "next",
        H = "prev",
        M = {
            SLIDE: "slide" + P,
            SLID: "slid" + P,
            KEYDOWN: "keydown" + P,
            MOUSEENTER: "mouseenter" + P,
            MOUSELEAVE: "mouseleave" + P,
            TOUCHSTART: "touchstart" + P,
            TOUCHMOVE: "touchmove" + P,
            TOUCHEND: "touchend" + P,
            POINTERDOWN: "pointerdown" + P,
            POINTERUP: "pointerup" + P,
            DRAG_START: "dragstart" + P,
            LOAD_DATA_API: "load" + P + N,
            CLICK_DATA_API: "click" + P + N
        },
        F = "active",
        R = ".active.carousel-item",
        q = {
            TOUCH: "touch",
            PEN: "pen"
        },
        B = ((D = W.prototype).next = function() {
            this._isSliding || this._slide(j)
        }, D.nextWhenVisible = function() {
            !document.hidden && p(this._element).is(":visible") && "hidden" !== p(this._element).css("visibility") && this.next()
        }, D.prev = function() {
            this._isSliding || this._slide(H)
        }, D.pause = function(e) {
            e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (g.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
        }, D.cycle = function(e) {
            e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
        }, D.to = function(e) {
            var t = this;
            this._activeElement = this._element.querySelector(R);
            var n = this._getItemIndex(this._activeElement);
            if (!(e > this._items.length - 1 || e < 0))
                if (this._isSliding) p(this._element).one(M.SLID, function() {
                    return t.to(e)
                });
                else {
                    if (n === e) return this.pause(), void this.cycle();
                    var o = n < e ? j : H;
                    this._slide(o, this._items[e])
                }
        }, D.dispose = function() {
            p(this._element).off(P), p.removeData(this._element, I), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
        }, D._getConfig = function(e) {
            return e = s({}, L, {}, e), g.typeCheckConfig(k, e, $), e
        }, D._handleSwipe = function() {
            var e, t = Math.abs(this.touchDeltaX);
            t <= 40 || (e = t / this.touchDeltaX, (this.touchDeltaX = 0) < e && this.prev(), e < 0 && this.next())
        }, D._addEventListeners = function() {
            var t = this;
            this._config.keyboard && p(this._element).on(M.KEYDOWN, function(e) {
                return t._keydown(e)
            }), "hover" === this._config.pause && p(this._element).on(M.MOUSEENTER, function(e) {
                return t.pause(e)
            }).on(M.MOUSELEAVE, function(e) {
                return t.cycle(e)
            }), this._config.touch && this._addTouchEventListeners()
        }, D._addTouchEventListeners = function() {
            var e, t, n = this;
            this._touchSupported && (e = function(e) {
                n._pointerEvent && q[e.originalEvent.pointerType.toUpperCase()] ? n.touchStartX = e.originalEvent.clientX : n._pointerEvent || (n.touchStartX = e.originalEvent.touches[0].clientX)
            }, t = function(e) {
                n._pointerEvent && q[e.originalEvent.pointerType.toUpperCase()] && (n.touchDeltaX = e.originalEvent.clientX - n.touchStartX), n._handleSwipe(), "hover" === n._config.pause && (n.pause(), n.touchTimeout && clearTimeout(n.touchTimeout), n.touchTimeout = setTimeout(function(e) {
                    return n.cycle(e)
                }, 500 + n._config.interval))
            }, p(this._element.querySelectorAll(".carousel-item img")).on(M.DRAG_START, function(e) {
                return e.preventDefault()
            }), this._pointerEvent ? (p(this._element).on(M.POINTERDOWN, e), p(this._element).on(M.POINTERUP, t), this._element.classList.add("pointer-event")) : (p(this._element).on(M.TOUCHSTART, e), p(this._element).on(M.TOUCHMOVE, function(e) {
                var t;
                (t = e).originalEvent.touches && 1 < t.originalEvent.touches.length ? n.touchDeltaX = 0 : n.touchDeltaX = t.originalEvent.touches[0].clientX - n.touchStartX
            }), p(this._element).on(M.TOUCHEND, t)))
        }, D._keydown = function(e) {
            if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                case 37:
                    e.preventDefault(), this.prev();
                    break;
                case 39:
                    e.preventDefault(), this.next()
            }
        }, D._getItemIndex = function(e) {
            return this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : [], this._items.indexOf(e)
        }, D._getItemByDirection = function(e, t) {
            var n = e === j,
                o = e === H,
                i = this._getItemIndex(t),
                r = this._items.length - 1;
            if ((o && 0 === i || n && i === r) && !this._config.wrap) return t;
            var s = (i + (e === H ? -1 : 1)) % this._items.length;
            return -1 == s ? this._items[this._items.length - 1] : this._items[s]
        }, D._triggerSlideEvent = function(e, t) {
            var n = this._getItemIndex(e),
                o = this._getItemIndex(this._element.querySelector(R)),
                i = p.Event(M.SLIDE, {
                    relatedTarget: e,
                    direction: t,
                    from: o,
                    to: n
                });
            return p(this._element).trigger(i), i
        }, D._setActiveIndicatorElement = function(e) {
            var t, n;
            this._indicatorsElement && (t = [].slice.call(this._indicatorsElement.querySelectorAll(".active")), p(t).removeClass(F), (n = this._indicatorsElement.children[this._getItemIndex(e)]) && p(n).addClass(F))
        }, D._slide = function(e, t) {
            var n, o, i, r, s, a = this,
                l = this._element.querySelector(R),
                c = this._getItemIndex(l),
                u = t || l && this._getItemByDirection(e, l),
                f = this._getItemIndex(u),
                d = Boolean(this._interval),
                h = e === j ? (n = "carousel-item-left", o = "carousel-item-next", "left") : (n = "carousel-item-right", o = "carousel-item-prev", "right");
            u && p(u).hasClass(F) ? this._isSliding = !1 : !this._triggerSlideEvent(u, h).isDefaultPrevented() && l && u && (this._isSliding = !0, d && this.pause(), this._setActiveIndicatorElement(u), i = p.Event(M.SLID, {
                relatedTarget: u,
                direction: h,
                from: c,
                to: f
            }), p(this._element).hasClass("slide") ? (p(u).addClass(o), g.reflow(u), p(l).addClass(n), p(u).addClass(n), (r = parseInt(u.getAttribute("data-interval"), 10)) ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = r) : this._config.interval = this._config.defaultInterval || this._config.interval, s = g.getTransitionDurationFromElement(l), p(l).one(g.TRANSITION_END, function() {
                p(u).removeClass(n + " " + o).addClass(F), p(l).removeClass(F + " " + o + " " + n), a._isSliding = !1, setTimeout(function() {
                    return p(a._element).trigger(i)
                }, 0)
            }).emulateTransitionEnd(s)) : (p(l).removeClass(F), p(u).addClass(F), this._isSliding = !1, p(this._element).trigger(i)), d && this.cycle())
        }, W._jQueryInterface = function(o) {
            return this.each(function() {
                var e = p(this).data(I),
                    t = s({}, L, {}, p(this).data());
                "object" == _typeof(o) && (t = s({}, t, {}, o));
                var n = "string" == typeof o ? o : t.slide;
                if (e || (e = new W(this, t), p(this).data(I, e)), "number" == typeof o) e.to(o);
                else if ("string" == typeof n) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n]()
                } else t.interval && t.ride && (e.pause(), e.cycle())
            })
        }, W._dataApiClickHandler = function(e) {
            var t, n, o, i = g.getSelectorFromElement(this);
            !i || (t = p(i)[0]) && p(t).hasClass("carousel") && (n = s({}, p(t).data(), {}, p(this).data()), (o = this.getAttribute("data-slide-to")) && (n.interval = !1), W._jQueryInterface.call(p(t), n), o && p(t).data(I).to(o), e.preventDefault())
        }, r(W, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return L
            }
        }]), W);

    function W(e, t) {
        this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(t), this._element = e, this._indicatorsElement = this._element.querySelector(".carousel-indicators"), this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners()
    }
    p(document).on(M.CLICK_DATA_API, "[data-slide], [data-slide-to]", B._dataApiClickHandler), p(window).on(M.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
            var o = p(e[t]);
            B._jQueryInterface.call(o, o.data())
        }
    }), p.fn[k] = B._jQueryInterface, p.fn[k].Constructor = B, p.fn[k].noConflict = function() {
        return p.fn[k] = O, B._jQueryInterface
    };
    var z, U = "collapse",
        Y = "bs.collapse",
        X = "." + Y,
        V = p.fn[U],
        Q = {
            toggle: !0,
            parent: ""
        },
        K = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        G = {
            SHOW: "show" + X,
            SHOWN: "shown" + X,
            HIDE: "hide" + X,
            HIDDEN: "hidden" + X,
            CLICK_DATA_API: "click" + X + ".data-api"
        },
        Z = "show",
        J = "collapse",
        ee = "collapsing",
        te = "collapsed",
        ne = '[data-toggle="collapse"]',
        oe = ((z = ie.prototype).toggle = function() {
            p(this._element).hasClass(Z) ? this.hide() : this.show()
        }, z.show = function() {
            var e, t, n, o, i, r, s = this;
            this._isTransitioning || p(this._element).hasClass(Z) || (this._parent && 0 === (e = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(e) {
                return "string" == typeof s._config.parent ? e.getAttribute("data-parent") === s._config.parent : e.classList.contains(J)
            })).length && (e = null), e && (t = p(e).not(this._selector).data(Y)) && t._isTransitioning) || (n = p.Event(G.SHOW), p(this._element).trigger(n), n.isDefaultPrevented() || (e && (ie._jQueryInterface.call(p(e).not(this._selector), "hide"), t || p(e).data(Y, null)), o = this._getDimension(), p(this._element).removeClass(J).addClass(ee), this._element.style[o] = 0, this._triggerArray.length && p(this._triggerArray).removeClass(te).attr("aria-expanded", !0), this.setTransitioning(!0), i = "scroll" + (o[0].toUpperCase() + o.slice(1)), r = g.getTransitionDurationFromElement(this._element), p(this._element).one(g.TRANSITION_END, function() {
                p(s._element).removeClass(ee).addClass(J).addClass(Z), s._element.style[o] = "", s.setTransitioning(!1), p(s._element).trigger(G.SHOWN)
            }).emulateTransitionEnd(r), this._element.style[o] = this._element[i] + "px"))
        }, z.hide = function() {
            var e = this;
            if (!this._isTransitioning && p(this._element).hasClass(Z)) {
                var t = p.Event(G.HIDE);
                if (p(this._element).trigger(t), !t.isDefaultPrevented()) {
                    var n = this._getDimension();
                    this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", g.reflow(this._element), p(this._element).addClass(ee).removeClass(J).removeClass(Z);
                    var o = this._triggerArray.length;
                    if (0 < o)
                        for (var i = 0; i < o; i++) {
                            var r = this._triggerArray[i],
                                s = g.getSelectorFromElement(r);
                            null !== s && (p([].slice.call(document.querySelectorAll(s))).hasClass(Z) || p(r).addClass(te).attr("aria-expanded", !1))
                        }
                    this.setTransitioning(!0), this._element.style[n] = "";
                    var a = g.getTransitionDurationFromElement(this._element);
                    p(this._element).one(g.TRANSITION_END, function() {
                        e.setTransitioning(!1), p(e._element).removeClass(ee).addClass(J).trigger(G.HIDDEN)
                    }).emulateTransitionEnd(a)
                }
            }
        }, z.setTransitioning = function(e) {
            this._isTransitioning = e
        }, z.dispose = function() {
            p.removeData(this._element, Y), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
        }, z._getConfig = function(e) {
            return (e = s({}, Q, {}, e)).toggle = Boolean(e.toggle), g.typeCheckConfig(U, e, K), e
        }, z._getDimension = function() {
            return p(this._element).hasClass("width") ? "width" : "height"
        }, z._getParent = function() {
            var e, n = this;
            g.isElement(this._config.parent) ? (e = this._config.parent, void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : e = document.querySelector(this._config.parent);
            var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                o = [].slice.call(e.querySelectorAll(t));
            return p(o).each(function(e, t) {
                n._addAriaAndCollapsedClass(ie._getTargetFromElement(t), [t])
            }), e
        }, z._addAriaAndCollapsedClass = function(e, t) {
            var n = p(e).hasClass(Z);
            t.length && p(t).toggleClass(te, !n).attr("aria-expanded", n)
        }, ie._getTargetFromElement = function(e) {
            var t = g.getSelectorFromElement(e);
            return t ? document.querySelector(t) : null
        }, ie._jQueryInterface = function(o) {
            return this.each(function() {
                var e = p(this),
                    t = e.data(Y),
                    n = s({}, Q, {}, e.data(), {}, "object" == _typeof(o) && o ? o : {});
                if (!t && n.toggle && /show|hide/.test(o) && (n.toggle = !1), t || (t = new ie(this, n), e.data(Y, t)), "string" == typeof o) {
                    if (void 0 === t[o]) throw new TypeError('No method named "' + o + '"');
                    t[o]()
                }
            })
        }, r(ie, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Q
            }
        }]), ie);

    function ie(t, e) {
        this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
        for (var n = [].slice.call(document.querySelectorAll(ne)), o = 0, i = n.length; o < i; o++) {
            var r = n[o],
                s = g.getSelectorFromElement(r),
                a = [].slice.call(document.querySelectorAll(s)).filter(function(e) {
                    return e === t
                });
            null !== s && 0 < a.length && (this._selector = s, this._triggerArray.push(r))
        }
        this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
    }
    p(document).on(G.CLICK_DATA_API, ne, function(e) {
        "A" === e.currentTarget.tagName && e.preventDefault();
        var n = p(this),
            t = g.getSelectorFromElement(this),
            o = [].slice.call(document.querySelectorAll(t));
        p(o).each(function() {
            var e = p(this),
                t = e.data(Y) ? "toggle" : n.data();
            oe._jQueryInterface.call(e, t)
        })
    }), p.fn[U] = oe._jQueryInterface, p.fn[U].Constructor = oe, p.fn[U].noConflict = function() {
        return p.fn[U] = V, oe._jQueryInterface
    };
    var re = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
        se = function() {
            for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                if (re && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
            return 0
        }(),
        ae = re && window.Promise ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0, window.Promise.resolve().then(function() {
                    t = !1, e()
                }))
            }
        } : function(e) {
            var t = !1;
            return function() {
                t || (t = !0, setTimeout(function() {
                    t = !1, e()
                }, se))
            }
        };

    function le(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function ce(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
        return t ? n[t] : n
    }

    function ue(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function fe(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = ce(e),
            n = t.overflow,
            o = t.overflowX,
            i = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + i + o) ? e : fe(ue(e))
    }

    function de(e) {
        return e && e.referenceNode ? e.referenceNode : e
    }
    var he = re && !(!window.MSInputMethodContext || !document.documentMode),
        pe = re && /MSIE 10/.test(navigator.userAgent);

    function ge(e) {
        return 11 === e ? he : 10 !== e && he || pe
    }

    function me(e) {
        if (!e) return document.documentElement;
        for (var t = ge(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var o = n && n.nodeName;
        return o && "BODY" !== o && "HTML" !== o ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === ce(n, "position") ? me(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function ve(e) {
        return null !== e.parentNode ? ve(e.parentNode) : e
    }

    function ye(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            o = n ? e : t,
            i = n ? t : e,
            r = document.createRange();
        r.setStart(o, 0), r.setEnd(i, 0);
        var s, a, l = r.commonAncestorContainer;
        if (e !== l && t !== l || o.contains(i)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && me(s.firstElementChild) !== s ? me(l) : l;
        var c = ve(e);
        return c.host ? ye(c.host, t) : ye(e, ve(t).host)
    }

    function be(e, t) {
        var n = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft",
            o = e.nodeName;
        if ("BODY" !== o && "HTML" !== o) return e[n];
        var i = e.ownerDocument.documentElement;
        return (e.ownerDocument.scrollingElement || i)[n]
    }

    function xe(e, t) {
        var n = "x" === t ? "Left" : "Top",
            o = "Left" == n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + o + "Width"], 10)
    }

    function we(e, t, n, o) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], ge(10) ? parseInt(n["offset" + e]) + parseInt(o["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(o["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function _e(e) {
        var t = e.body,
            n = e.documentElement,
            o = ge(10) && getComputedStyle(n);
        return {
            height: we("Height", t, n, o),
            width: we("Width", t, n, o)
        }
    }

    function Te(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }

    function Ce(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Ee = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
        }
        return e
    };

    function Se(e) {
        return Ee({}, e, {
            right: e.left + e.width,
            bottom: e.top + e.height
        })
    }

    function Ae(e) {
        var t, n, o = {};
        try {
            ge(10) ? (o = e.getBoundingClientRect(), t = be(e, "top"), n = be(e, "left"), o.top += t, o.left += n, o.bottom += t, o.right += n) : o = e.getBoundingClientRect()
        } catch (e) {}
        var i, r = {
                left: o.left,
                top: o.top,
                width: o.right - o.left,
                height: o.bottom - o.top
            },
            s = "HTML" === e.nodeName ? _e(e.ownerDocument) : {},
            a = s.width || e.clientWidth || r.width,
            l = s.height || e.clientHeight || r.height,
            c = e.offsetWidth - a,
            u = e.offsetHeight - l;
        return (c || u) && (c -= xe(i = ce(e), "x"), u -= xe(i, "y"), r.width -= c, r.height -= u), Se(r)
    }

    function De(e, t, n) {
        var o = 2 < arguments.length && void 0 !== n && n,
            i = ge(10),
            r = "HTML" === t.nodeName,
            s = Ae(e),
            a = Ae(t),
            l = fe(e),
            c = ce(t),
            u = parseFloat(c.borderTopWidth, 10),
            f = parseFloat(c.borderLeftWidth, 10);
        o && r && (a.top = Math.max(a.top, 0), a.left = Math.max(a.left, 0));
        var d, h, p = Se({
            top: s.top - a.top - u,
            left: s.left - a.left - f,
            width: s.width,
            height: s.height
        });
        return p.marginTop = 0, p.marginLeft = 0, !i && r && (d = parseFloat(c.marginTop, 10), h = parseFloat(c.marginLeft, 10), p.top -= u - d, p.bottom -= u - d, p.left -= f - h, p.right -= f - h, p.marginTop = d, p.marginLeft = h), (i && !o ? t.contains(l) : t === l && "BODY" !== l.nodeName) && (p = function(e, t, n) {
            var o = 2 < arguments.length && !1,
                i = be(t, "top"),
                r = be(t, "left"),
                s = o ? -1 : 1;
            return e.top += i * s, e.bottom += i * s, e.left += r * s, e.right += r * s, e
        }(p, t)), p
    }

    function ke(e) {
        if (!e || !e.parentElement || ge()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === ce(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function Ie(e, t, n, o, i) {
        var r, s, a, l, c, u = 4 < arguments.length && void 0 !== i && i,
            f = {
                top: 0,
                left: 0
            },
            d = u ? ke(e) : ye(e, de(t));
        "viewport" === o ? f = function(e, t) {
            var n = 1 < arguments.length && void 0 !== t && t,
                o = e.ownerDocument.documentElement,
                i = De(e, o),
                r = Math.max(o.clientWidth, window.innerWidth || 0),
                s = Math.max(o.clientHeight, window.innerHeight || 0),
                a = n ? 0 : be(o),
                l = n ? 0 : be(o, "left");
            return Se({
                top: a - i.top + i.marginTop,
                left: l - i.left + i.marginLeft,
                width: r,
                height: s
            })
        }(d, u) : (r = void 0, "scrollParent" === o ? "BODY" === (r = fe(ue(t))).nodeName && (r = e.ownerDocument.documentElement) : r = "window" === o ? e.ownerDocument.documentElement : o, s = De(r, d, u), "HTML" !== r.nodeName || function e(t) {
            var n = t.nodeName;
            if ("BODY" === n || "HTML" === n) return !1;
            if ("fixed" === ce(t, "position")) return !0;
            var o = ue(t);
            return !!o && e(o)
        }(d) ? f = s : (l = (a = _e(e.ownerDocument)).height, c = a.width, f.top += s.top - s.marginTop, f.bottom = l + s.top, f.left += s.left - s.marginLeft, f.right = c + s.left));
        var h = "number" == typeof(n = n || 0);
        return f.left += h ? n : n.left || 0, f.top += h ? n : n.top || 0, f.right -= h ? n : n.right || 0, f.bottom -= h ? n : n.bottom || 0, f
    }

    function Pe(e, t, o, n, i, r) {
        var s = 5 < arguments.length && void 0 !== r ? r : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = Ie(o, n, s, i),
            l = {
                top: {
                    width: a.width,
                    height: t.top - a.top
                },
                right: {
                    width: a.right - t.right,
                    height: a.height
                },
                bottom: {
                    width: a.width,
                    height: a.bottom - t.bottom
                },
                left: {
                    width: t.left - a.left,
                    height: a.height
                }
            },
            c = Object.keys(l).map(function(e) {
                return Ee({
                    key: e
                }, l[e], {
                    area: (t = l[e]).width * t.height
                });
                var t
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            u = c.filter(function(e) {
                var t = e.width,
                    n = e.height;
                return t >= o.clientWidth && n >= o.clientHeight
            }),
            f = 0 < u.length ? u[0].key : c[0].key,
            d = e.split("-")[1];
        return f + (d ? "-" + d : "")
    }

    function Ne(e, t, n, o) {
        var i = 3 < arguments.length && void 0 !== o ? o : null;
        return De(n, i ? ke(t) : ye(t, de(n)), i)
    }

    function Oe(e) {
        var t = e.ownerDocument.defaultView.getComputedStyle(e),
            n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
            o = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
        return {
            width: e.offsetWidth + o,
            height: e.offsetHeight + n
        }
    }

    function Le(e) {
        var t = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function $e(e, t, n) {
        n = n.split("-")[0];
        var o = Oe(e),
            i = {
                width: o.width,
                height: o.height
            },
            r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height";
        return i[s] = t[s] + t[l] / 2 - o[l] / 2, i[a] = n === a ? t[a] - o[c] : t[Le(a)], i
    }

    function je(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function He(e, n, t) {
        return (void 0 === t ? e : e.slice(0, function(e, t) {
            if (Array.prototype.findIndex) return e.findIndex(function(e) {
                return e.name === t
            });
            var n = je(e, function(e) {
                return e.name === t
            });
            return e.indexOf(n)
        }(e, t))).forEach(function(e) {
            e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var t = e.function || e.fn;
            e.enabled && le(t) && (n.offsets.popper = Se(n.offsets.popper), n.offsets.reference = Se(n.offsets.reference), n = t(n, e))
        }), n
    }

    function Me(e, n) {
        return e.some(function(e) {
            var t = e.name;
            return e.enabled && t === n
        })
    }

    function Fe(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), o = 0; o < t.length; o++) {
            var i = t[o],
                r = i ? "" + i + n : e;
            if (void 0 !== document.body.style[r]) return r
        }
        return null
    }

    function Re(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function qe() {
        var e, t;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (e = this.reference, t = this.state, Re(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t))
    }

    function Be(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function We(n, o) {
        Object.keys(o).forEach(function(e) {
            var t = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && Be(o[e]) && (t = "px"), n.style[e] = o[e] + t
        })
    }
    var ze = re && /Firefox/i.test(navigator.userAgent);

    function Ue(e, t, n) {
        var o, i, r = je(e, function(e) {
                return e.name === t
            }),
            s = !!r && e.some(function(e) {
                return e.name === n && e.enabled && e.order < r.order
            });
        return s || (o = "`" + t + "`", i = "`" + n + "`", console.warn(i + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!")), s
    }
    var Ye = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        Xe = Ye.slice(3);

    function Ve(e, t) {
        var n = 1 < arguments.length && void 0 !== t && t,
            o = Xe.indexOf(e),
            i = Xe.slice(o + 1).concat(Xe.slice(0, o));
        return n ? i.reverse() : i
    }
    var Qe, Ke, Ge, Ze = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t, n, o, i, r, s, a, l = e.placement,
                            c = l.split("-")[0],
                            u = l.split("-")[1];
                        return u && (n = (t = e.offsets).reference, o = t.popper, s = (i = -1 !== ["bottom", "top"].indexOf(c)) ? "width" : "height", a = {
                            start: Ce({}, r = i ? "left" : "top", n[r]),
                            end: Ce({}, r, n[r] + n[s] - o[s])
                        }, e.offsets.popper = Ee({}, o, a[u])), e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.offset,
                            o = e.placement,
                            i = e.offsets,
                            r = i.popper,
                            s = i.reference,
                            a = o.split("-")[0],
                            l = Be(+n) ? [+n, 0] : function(e, i, r, t) {
                                var s = [0, 0],
                                    a = -1 !== ["right", "left"].indexOf(t),
                                    n = e.split(/(\+|\-)/).map(function(e) {
                                        return e.trim()
                                    }),
                                    o = n.indexOf(je(n, function(e) {
                                        return -1 !== e.search(/,|\s/)
                                    }));
                                n[o] && -1 === n[o].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
                                var l = /\s*,\s*|\s+/;
                                return (-1 !== o ? [n.slice(0, o).concat([n[o].split(l)[0]]), [n[o].split(l)[1]].concat(n.slice(o + 1))] : [n]).map(function(e, t) {
                                    var n = (1 === t ? !a : a) ? "height" : "width",
                                        o = !1;
                                    return e.reduce(function(e, t) {
                                        return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, o = !0, e) : o ? (e[e.length - 1] += t, o = !1, e) : e.concat(t)
                                    }, []).map(function(e) {
                                        return function(e, t, n, o) {
                                            var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                                r = +i[1],
                                                s = i[2];
                                            if (!r) return e;
                                            if (0 !== s.indexOf("%")) return "vh" !== s && "vw" !== s ? r : ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
                                            var a = void 0;
                                            switch (s) {
                                                case "%p":
                                                    a = n;
                                                    break;
                                                case "%":
                                                case "%r":
                                                default:
                                                    a = o
                                            }
                                            return Se(a)[t] / 100 * r
                                        }(e, n, i, r)
                                    })
                                }).forEach(function(n, o) {
                                    n.forEach(function(e, t) {
                                        Be(e) && (s[o] += e * ("-" === n[t - 1] ? -1 : 1))
                                    })
                                }), s
                            }(n, r, s, a);
                        return "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), e.popper = r, e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, o) {
                        var t = o.boundariesElement || me(e.instance.popper);
                        e.instance.reference === t && (t = me(t));
                        var n = Fe("transform"),
                            i = e.instance.popper.style,
                            r = i.top,
                            s = i.left,
                            a = i[n];
                        i.top = "", i.left = "", i[n] = "";
                        var l = Ie(e.instance.popper, e.instance.reference, o.padding, t, e.positionFixed);
                        i.top = r, i.left = s, i[n] = a, o.boundaries = l;
                        var c = o.priority,
                            u = e.offsets.popper,
                            f = {
                                primary: function(e) {
                                    var t = u[e];
                                    return u[e] < l[e] && !o.escapeWithReference && (t = Math.max(u[e], l[e])), Ce({}, e, t)
                                },
                                secondary: function(e) {
                                    var t = "right" === e ? "left" : "top",
                                        n = u[t];
                                    return u[e] > l[e] && !o.escapeWithReference && (n = Math.min(u[t], l[e] - ("right" === e ? u.width : u.height))), Ce({}, t, n)
                                }
                            };
                        return c.forEach(function(e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            u = Ee({}, u, f[t](e))
                        }), e.offsets.popper = u, e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = e.offsets,
                            n = t.popper,
                            o = t.reference,
                            i = e.placement.split("-")[0],
                            r = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(i),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < r(o[l]) && (e.offsets.popper[l] = r(o[l]) - n[c]), n[l] > r(o[a]) && (e.offsets.popper[l] = r(o[a])), e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, t) {
                        var n;
                        if (!Ue(e.instance.modifiers, "arrow", "keepTogether")) return e;
                        var o = t.element;
                        if ("string" == typeof o) {
                            if (!(o = e.instance.popper.querySelector(o))) return e
                        } else if (!e.instance.popper.contains(o)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                        var i = e.placement.split("-")[0],
                            r = e.offsets,
                            s = r.popper,
                            a = r.reference,
                            l = -1 !== ["left", "right"].indexOf(i),
                            c = l ? "height" : "width",
                            u = l ? "Top" : "Left",
                            f = u.toLowerCase(),
                            d = l ? "left" : "top",
                            h = l ? "bottom" : "right",
                            p = Oe(o)[c];
                        a[h] - p < s[f] && (e.offsets.popper[f] -= s[f] - (a[h] - p)), a[f] + p > s[h] && (e.offsets.popper[f] += a[f] + p - s[h]), e.offsets.popper = Se(e.offsets.popper);
                        var g = a[f] + a[c] / 2 - p / 2,
                            m = ce(e.instance.popper),
                            v = parseFloat(m["margin" + u], 10),
                            y = parseFloat(m["border" + u + "Width"], 10),
                            b = g - e.offsets.popper[f] - v - y,
                            b = Math.max(Math.min(s[c] - p, b), 0);
                        return e.arrowElement = o, e.offsets.arrow = (Ce(n = {}, f, Math.round(b)), Ce(n, d, ""), n), e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(g, m) {
                        if (Me(g.instance.modifiers, "inner")) return g;
                        if (g.flipped && g.placement === g.originalPlacement) return g;
                        var v = Ie(g.instance.popper, g.instance.reference, m.padding, m.boundariesElement, g.positionFixed),
                            y = g.placement.split("-")[0],
                            b = Le(y),
                            x = g.placement.split("-")[1] || "",
                            w = [];
                        switch (m.behavior) {
                            case "flip":
                                w = [y, b];
                                break;
                            case "clockwise":
                                w = Ve(y);
                                break;
                            case "counterclockwise":
                                w = Ve(y, !0);
                                break;
                            default:
                                w = m.behavior
                        }
                        return w.forEach(function(e, t) {
                            if (y !== e || w.length === t + 1) return g;
                            y = g.placement.split("-")[0], b = Le(y);
                            var n = g.offsets.popper,
                                o = g.offsets.reference,
                                i = Math.floor,
                                r = "left" === y && i(n.right) > i(o.left) || "right" === y && i(n.left) < i(o.right) || "top" === y && i(n.bottom) > i(o.top) || "bottom" === y && i(n.top) < i(o.bottom),
                                s = i(n.left) < i(v.left),
                                a = i(n.right) > i(v.right),
                                l = i(n.top) < i(v.top),
                                c = i(n.bottom) > i(v.bottom),
                                u = "left" === y && s || "right" === y && a || "top" === y && l || "bottom" === y && c,
                                f = -1 !== ["top", "bottom"].indexOf(y),
                                d = !!m.flipVariations && (f && "start" === x && s || f && "end" === x && a || !f && "start" === x && l || !f && "end" === x && c),
                                h = !!m.flipVariationsByContent && (f && "start" === x && a || f && "end" === x && s || !f && "start" === x && c || !f && "end" === x && l),
                                p = d || h;
                            (r || u || p) && (g.flipped = !0, (r || u) && (y = w[t + 1]), p && (x = "end" === x ? "start" : "start" === x ? "end" : x), g.placement = y + (x ? "-" + x : ""), g.offsets.popper = Ee({}, g.offsets.popper, $e(g.instance.popper, g.offsets.reference, g.placement)), g = He(g.instance.modifiers, g, "flip"))
                        }), g
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement,
                            n = t.split("-")[0],
                            o = e.offsets,
                            i = o.popper,
                            r = o.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return i[s ? "left" : "top"] = r[n] - (a ? i[s ? "width" : "height"] : 0), e.placement = Le(t), e.offsets.popper = Se(i), e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (!Ue(e.instance.modifiers, "hide", "preventOverflow")) return e;
                        var t = e.offsets.reference,
                            n = je(e.instance.modifiers, function(e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                            if (!0 === e.hide) return e;
                            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === e.hide) return e;
                            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.x,
                            o = t.y,
                            i = e.offsets.popper,
                            r = je(e.instance.modifiers, function(e) {
                                return "applyStyle" === e.name
                            }).gpuAcceleration;
                        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s, a, l, c, u, f, d, h, p, g, m, v, y, b, x, w, _, T = void 0 !== r ? r : t.gpuAcceleration,
                            C = me(e.instance.popper),
                            E = Ae(C),
                            S = {
                                position: i.position
                            },
                            A = (l = e, c = window.devicePixelRatio < 2 || !ze, u = l.offsets, f = u.popper, d = u.reference, h = Math.round, p = Math.floor, g = h(d.width), m = h(f.width), v = -1 !== ["left", "right"].indexOf(l.placement), y = -1 !== l.placement.indexOf("-"), x = c ? h : P, {
                                left: (b = c ? v || y || g % 2 == m % 2 ? h : p : P)(g % 2 == 1 && m % 2 == 1 && !y && c ? f.left - 1 : f.left),
                                top: x(f.top),
                                bottom: x(f.bottom),
                                right: b(f.right)
                            }),
                            D = "bottom" === n ? "top" : "bottom",
                            k = "right" === o ? "left" : "right",
                            I = Fe("transform");

                        function P(e) {
                            return e
                        }
                        a = "bottom" == D ? "HTML" === C.nodeName ? -C.clientHeight + A.bottom : -E.height + A.bottom : A.top, s = "right" == k ? "HTML" === C.nodeName ? -C.clientWidth + A.right : -E.width + A.right : A.left, T && I ? (S[I] = "translate3d(" + s + "px, " + a + "px, 0)", S[D] = 0, S[k] = 0, S.willChange = "transform") : (w = "bottom" == D ? -1 : 1, _ = "right" == k ? -1 : 1, S[D] = a * w, S[k] = s * _, S.willChange = D + ", " + k);
                        var N = {
                            "x-placement": e.placement
                        };
                        return e.attributes = Ee({}, N, e.attributes), e.styles = Ee({}, S, e.styles), e.arrowStyles = Ee({}, e.offsets.arrow, e.arrowStyles), e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        return We(e.instance.popper, e.styles), t = e.instance.popper, n = e.attributes, Object.keys(n).forEach(function(e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                        }), e.arrowElement && Object.keys(e.arrowStyles).length && We(e.arrowElement, e.arrowStyles), e;
                        var t, n
                    },
                    onLoad: function(e, t, n, o, i) {
                        var r = Ne(i, t, e, n.positionFixed),
                            s = Pe(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return t.setAttribute("x-placement", s), We(t, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        Je = (Qe = et, (Ke = [{
            key: "update",
            value: function() {
                return function() {
                    var e;
                    this.state.isDestroyed || ((e = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    }).offsets.reference = Ne(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = Pe(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = $e(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = He(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e)))
                }.call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0, Me(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Fe("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                }.call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = function(e, t, n) {
                        t.updateBound = n, Re(e).addEventListener("resize", t.updateBound, {
                            passive: !0
                        });
                        var o = fe(e);
                        return function e(t, n, o, i) {
                            var r = "BODY" === t.nodeName,
                                s = r ? t.ownerDocument.defaultView : t;
                            s.addEventListener(n, o, {
                                passive: !0
                            }), r || e(fe(s.parentNode), n, o, i), i.push(s)
                        }(o, "scroll", t.updateBound, t.scrollParents), t.scrollElement = o, t.eventsEnabled = !0, t
                    }(this.reference, (this.options, this.state), this.scheduleUpdate))
                }.call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return qe.call(this)
            }
        }]) && Te(Qe.prototype, Ke), Ge && Te(Qe, Ge), et);

    function et(e, t) {
        var n = this,
            o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        ! function(e) {
            if (!(e instanceof et)) throw new TypeError("Cannot call a class as a function")
        }(this), this.scheduleUpdate = function() {
            return requestAnimationFrame(n.update)
        }, this.update = ae(this.update.bind(this)), this.options = Ee({}, et.Defaults, o), this.state = {
            isDestroyed: !1,
            isCreated: !1,
            scrollParents: []
        }, this.reference = e && e.jquery ? e[0] : e, this.popper = t && t.jquery ? t[0] : t, this.options.modifiers = {}, Object.keys(Ee({}, et.Defaults.modifiers, o.modifiers)).forEach(function(e) {
            n.options.modifiers[e] = Ee({}, et.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
        }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
            return Ee({
                name: e
            }, n.options.modifiers[e])
        }).sort(function(e, t) {
            return e.order - t.order
        }), this.modifiers.forEach(function(e) {
            e.enabled && le(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
        }), this.update();
        var i = this.options.eventsEnabled;
        i && this.enableEventListeners(), this.state.eventsEnabled = i
    }
    Je.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Je.placements = Ye, Je.Defaults = Ze;
    var tt, nt = "dropdown",
        ot = "bs.dropdown",
        it = "." + ot,
        rt = ".data-api",
        st = p.fn[nt],
        at = new RegExp("38|40|27"),
        lt = {
            HIDE: "hide" + it,
            HIDDEN: "hidden" + it,
            SHOW: "show" + it,
            SHOWN: "shown" + it,
            CLICK: "click" + it,
            CLICK_DATA_API: "click" + it + rt,
            KEYDOWN_DATA_API: "keydown" + it + rt,
            KEYUP_DATA_API: "keyup" + it + rt
        },
        ct = "disabled",
        ut = "show",
        ft = "dropdown-menu-right",
        dt = '[data-toggle="dropdown"]',
        ht = ".dropdown-menu",
        pt = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        gt = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        mt = ((tt = vt.prototype).toggle = function() {
            var e;
            this._element.disabled || p(this._element).hasClass(ct) || (e = p(this._menu).hasClass(ut), vt._clearMenus(), e || this.show(!0))
        }, tt.show = function(e) {
            if (void 0 === e && (e = !1), !(this._element.disabled || p(this._element).hasClass(ct) || p(this._menu).hasClass(ut))) {
                var t = {
                        relatedTarget: this._element
                    },
                    n = p.Event(lt.SHOW, t),
                    o = vt._getParentFromElement(this._element);
                if (p(o).trigger(n), !n.isDefaultPrevented()) {
                    if (!this._inNavbar && e) {
                        if (void 0 === Je) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                        var i = this._element;
                        "parent" === this._config.reference ? i = o : g.isElement(this._config.reference) && (i = this._config.reference, void 0 !== this._config.reference.jquery && (i = this._config.reference[0])), "scrollParent" !== this._config.boundary && p(o).addClass("position-static"), this._popper = new Je(i, this._menu, this._getPopperConfig())
                    }
                    "ontouchstart" in document.documentElement && 0 === p(o).closest(".navbar-nav").length && p(document.body).children().on("mouseover", null, p.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), p(this._menu).toggleClass(ut), p(o).toggleClass(ut).trigger(p.Event(lt.SHOWN, t))
                }
            }
        }, tt.hide = function() {
            var e, t, n;
            this._element.disabled || p(this._element).hasClass(ct) || !p(this._menu).hasClass(ut) || (e = {
                relatedTarget: this._element
            }, t = p.Event(lt.HIDE, e), n = vt._getParentFromElement(this._element), p(n).trigger(t), t.isDefaultPrevented() || (this._popper && this._popper.destroy(), p(this._menu).toggleClass(ut), p(n).toggleClass(ut).trigger(p.Event(lt.HIDDEN, e))))
        }, tt.dispose = function() {
            p.removeData(this._element, ot), p(this._element).off(it), this._element = null, (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
        }, tt.update = function() {
            this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
        }, tt._addEventListeners = function() {
            var t = this;
            p(this._element).on(lt.CLICK, function(e) {
                e.preventDefault(), e.stopPropagation(), t.toggle()
            })
        }, tt._getConfig = function(e) {
            return e = s({}, this.constructor.Default, {}, p(this._element).data(), {}, e), g.typeCheckConfig(nt, e, this.constructor.DefaultType), e
        }, tt._getMenuElement = function() {
            var e;
            return this._menu || (e = vt._getParentFromElement(this._element)) && (this._menu = e.querySelector(ht)), this._menu
        }, tt._getPlacement = function() {
            var e = p(this._element.parentNode),
                t = "bottom-start";
            return e.hasClass("dropup") ? (t = "top-start", p(this._menu).hasClass(ft) && (t = "top-end")) : e.hasClass("dropright") ? t = "right-start" : e.hasClass("dropleft") ? t = "left-start" : p(this._menu).hasClass(ft) && (t = "bottom-end"), t
        }, tt._detectNavbar = function() {
            return 0 < p(this._element).closest(".navbar").length
        }, tt._getOffset = function() {
            var t = this,
                e = {};
            return "function" == typeof this._config.offset ? e.fn = function(e) {
                return e.offsets = s({}, e.offsets, {}, t._config.offset(e.offsets, t._element) || {}), e
            } : e.offset = this._config.offset, e
        }, tt._getPopperConfig = function() {
            var e = {
                placement: this._getPlacement(),
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        enabled: this._config.flip
                    },
                    preventOverflow: {
                        boundariesElement: this._config.boundary
                    }
                }
            };
            return "static" === this._config.display && (e.modifiers.applyStyle = {
                enabled: !1
            }), s({}, e, {}, this._config.popperConfig)
        }, vt._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(ot);
                if (e || (e = new vt(this, "object" == _typeof(t) ? t : null), p(this).data(ot, e)), "string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            })
        }, vt._clearMenus = function(e) {
            if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                for (var t = [].slice.call(document.querySelectorAll(dt)), n = 0, o = t.length; n < o; n++) {
                    var i, r, s = vt._getParentFromElement(t[n]),
                        a = p(t[n]).data(ot),
                        l = {
                            relatedTarget: t[n]
                        };
                    e && "click" === e.type && (l.clickEvent = e), a && (i = a._menu, !p(s).hasClass(ut) || e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && p.contains(s, e.target) || (r = p.Event(lt.HIDE, l), p(s).trigger(r), r.isDefaultPrevented() || ("ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), t[n].setAttribute("aria-expanded", "false"), a._popper && a._popper.destroy(), p(i).removeClass(ut), p(s).removeClass(ut).trigger(p.Event(lt.HIDDEN, l)))))
                }
        }, vt._getParentFromElement = function(e) {
            var t, n = g.getSelectorFromElement(e);
            return n && (t = document.querySelector(n)), t || e.parentNode
        }, vt._dataApiKeydownHandler = function(e) {
            var t, n, o, i, r;
            (/input|textarea/i.test(e.target.tagName) ? 32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || p(e.target).closest(ht).length) : !at.test(e.which)) || (e.preventDefault(), e.stopPropagation(), this.disabled || p(this).hasClass(ct)) || (t = vt._getParentFromElement(this), !(n = p(t).hasClass(ut)) && 27 === e.which || (n && (!n || 27 !== e.which && 32 !== e.which) ? 0 !== (o = [].slice.call(t.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(e) {
                return p(e).is(":visible")
            })).length && (i = o.indexOf(e.target), 38 === e.which && 0 < i && i--, 40 === e.which && i < o.length - 1 && i++, i < 0 && (i = 0), o[i].focus()) : (27 === e.which && (r = t.querySelector(dt), p(r).trigger("focus")), p(this).trigger("click"))))
        }, r(vt, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return pt
            }
        }, {
            key: "DefaultType",
            get: function() {
                return gt
            }
        }]), vt);

    function vt(e, t) {
        this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
    }
    p(document).on(lt.KEYDOWN_DATA_API, dt, mt._dataApiKeydownHandler).on(lt.KEYDOWN_DATA_API, ht, mt._dataApiKeydownHandler).on(lt.CLICK_DATA_API + " " + lt.KEYUP_DATA_API, mt._clearMenus).on(lt.CLICK_DATA_API, dt, function(e) {
        e.preventDefault(), e.stopPropagation(), mt._jQueryInterface.call(p(this), "toggle")
    }).on(lt.CLICK_DATA_API, ".dropdown form", function(e) {
        e.stopPropagation()
    }), p.fn[nt] = mt._jQueryInterface, p.fn[nt].Constructor = mt, p.fn[nt].noConflict = function() {
        return p.fn[nt] = st, mt._jQueryInterface
    };
    var yt, bt = "modal",
        xt = "bs.modal",
        wt = "." + xt,
        _t = p.fn[bt],
        Tt = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        Ct = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        Et = {
            HIDE: "hide" + wt,
            HIDE_PREVENTED: "hidePrevented" + wt,
            HIDDEN: "hidden" + wt,
            SHOW: "show" + wt,
            SHOWN: "shown" + wt,
            FOCUSIN: "focusin" + wt,
            RESIZE: "resize" + wt,
            CLICK_DISMISS: "click.dismiss" + wt,
            KEYDOWN_DISMISS: "keydown.dismiss" + wt,
            MOUSEUP_DISMISS: "mouseup.dismiss" + wt,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + wt,
            CLICK_DATA_API: "click" + wt + ".data-api"
        },
        St = "modal-open",
        At = "fade",
        Dt = "show",
        kt = "modal-static",
        It = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Pt = ".sticky-top",
        Nt = ((yt = Ot.prototype).toggle = function(e) {
            return this._isShown ? this.hide() : this.show(e)
        }, yt.show = function(e) {
            var t, n = this;
            this._isShown || this._isTransitioning || (p(this._element).hasClass(At) && (this._isTransitioning = !0), t = p.Event(Et.SHOW, {
                relatedTarget: e
            }), p(this._element).trigger(t), this._isShown || t.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), p(this._element).on(Et.CLICK_DISMISS, '[data-dismiss="modal"]', function(e) {
                return n.hide(e)
            }), p(this._dialog).on(Et.MOUSEDOWN_DISMISS, function() {
                p(n._element).one(Et.MOUSEUP_DISMISS, function(e) {
                    p(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                })
            }), this._showBackdrop(function() {
                return n._showElement(e)
            })))
        }, yt.hide = function(e) {
            var t, n, o, i = this;
            e && e.preventDefault(), this._isShown && !this._isTransitioning && (t = p.Event(Et.HIDE), p(this._element).trigger(t), this._isShown && !t.isDefaultPrevented() && (this._isShown = !1, (n = p(this._element).hasClass(At)) && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), p(document).off(Et.FOCUSIN), p(this._element).removeClass(Dt), p(this._element).off(Et.CLICK_DISMISS), p(this._dialog).off(Et.MOUSEDOWN_DISMISS), n ? (o = g.getTransitionDurationFromElement(this._element), p(this._element).one(g.TRANSITION_END, function(e) {
                return i._hideModal(e)
            }).emulateTransitionEnd(o)) : this._hideModal()))
        }, yt.dispose = function() {
            [window, this._element, this._dialog].forEach(function(e) {
                return p(e).off(wt)
            }), p(document).off(Et.FOCUSIN), p.removeData(this._element, xt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
        }, yt.handleUpdate = function() {
            this._adjustDialog()
        }, yt._getConfig = function(e) {
            return e = s({}, Tt, {}, e), g.typeCheckConfig(bt, e, Ct), e
        }, yt._triggerBackdropTransition = function() {
            var e = this;
            if ("static" === this._config.backdrop) {
                var t = p.Event(Et.HIDE_PREVENTED);
                if (p(this._element).trigger(t), t.defaultPrevented) return;
                this._element.classList.add(kt);
                var n = g.getTransitionDurationFromElement(this._element);
                p(this._element).one(g.TRANSITION_END, function() {
                    e._element.classList.remove(kt)
                }).emulateTransitionEnd(n), this._element.focus()
            } else this.hide()
        }, yt._showElement = function(e) {
            var t = this,
                n = p(this._element).hasClass(At),
                o = this._dialog ? this._dialog.querySelector(".modal-body") : null;

            function i() {
                t._config.focus && t._element.focus(), t._isTransitioning = !1, p(t._element).trigger(s)
            }
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), p(this._dialog).hasClass("modal-dialog-scrollable") && o ? o.scrollTop = 0 : this._element.scrollTop = 0, n && g.reflow(this._element), p(this._element).addClass(Dt), this._config.focus && this._enforceFocus();
            var r, s = p.Event(Et.SHOWN, {
                relatedTarget: e
            });
            n ? (r = g.getTransitionDurationFromElement(this._dialog), p(this._dialog).one(g.TRANSITION_END, i).emulateTransitionEnd(r)) : i()
        }, yt._enforceFocus = function() {
            var t = this;
            p(document).off(Et.FOCUSIN).on(Et.FOCUSIN, function(e) {
                document !== e.target && t._element !== e.target && 0 === p(t._element).has(e.target).length && t._element.focus()
            })
        }, yt._setEscapeEvent = function() {
            var t = this;
            this._isShown && this._config.keyboard ? p(this._element).on(Et.KEYDOWN_DISMISS, function(e) {
                27 === e.which && t._triggerBackdropTransition()
            }) : this._isShown || p(this._element).off(Et.KEYDOWN_DISMISS)
        }, yt._setResizeEvent = function() {
            var t = this;
            this._isShown ? p(window).on(Et.RESIZE, function(e) {
                return t.handleUpdate(e)
            }) : p(window).off(Et.RESIZE)
        }, yt._hideModal = function() {
            var e = this;
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                p(document.body).removeClass(St), e._resetAdjustments(), e._resetScrollbar(), p(e._element).trigger(Et.HIDDEN)
            })
        }, yt._removeBackdrop = function() {
            this._backdrop && (p(this._backdrop).remove(), this._backdrop = null)
        }, yt._showBackdrop = function(e) {
            var t, n, o = this,
                i = p(this._element).hasClass(At) ? At : "";
            if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", i && this._backdrop.classList.add(i), p(this._backdrop).appendTo(document.body), p(this._element).on(Et.CLICK_DISMISS, function(e) {
                        o._ignoreBackdropClick ? o._ignoreBackdropClick = !1 : e.target === e.currentTarget && o._triggerBackdropTransition()
                    }), i && g.reflow(this._backdrop), p(this._backdrop).addClass(Dt), !e) return;
                if (!i) return void e();
                var r = g.getTransitionDurationFromElement(this._backdrop);
                p(this._backdrop).one(g.TRANSITION_END, e).emulateTransitionEnd(r)
            } else !this._isShown && this._backdrop ? (p(this._backdrop).removeClass(Dt), t = function() {
                o._removeBackdrop(), e && e()
            }, p(this._element).hasClass(At) ? (n = g.getTransitionDurationFromElement(this._backdrop), p(this._backdrop).one(g.TRANSITION_END, t).emulateTransitionEnd(n)) : t()) : e && e()
        }, yt._adjustDialog = function() {
            var e = this._element.scrollHeight > document.documentElement.clientHeight;
            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
        }, yt._resetAdjustments = function() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }, yt._checkScrollbar = function() {
            var e = document.body.getBoundingClientRect();
            this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
        }, yt._setScrollbar = function() {
            var e, t, n, o, i = this;
            this._isBodyOverflowing && (e = [].slice.call(document.querySelectorAll(It)), t = [].slice.call(document.querySelectorAll(Pt)), p(e).each(function(e, t) {
                var n = t.style.paddingRight,
                    o = p(t).css("padding-right");
                p(t).data("padding-right", n).css("padding-right", parseFloat(o) + i._scrollbarWidth + "px")
            }), p(t).each(function(e, t) {
                var n = t.style.marginRight,
                    o = p(t).css("margin-right");
                p(t).data("margin-right", n).css("margin-right", parseFloat(o) - i._scrollbarWidth + "px")
            }), n = document.body.style.paddingRight, o = p(document.body).css("padding-right"), p(document.body).data("padding-right", n).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")), p(document.body).addClass(St)
        }, yt._resetScrollbar = function() {
            var e = [].slice.call(document.querySelectorAll(It));
            p(e).each(function(e, t) {
                var n = p(t).data("padding-right");
                p(t).removeData("padding-right"), t.style.paddingRight = n || ""
            });
            var t = [].slice.call(document.querySelectorAll(Pt));
            p(t).each(function(e, t) {
                var n = p(t).data("margin-right");
                void 0 !== n && p(t).css("margin-right", n).removeData("margin-right")
            });
            var n = p(document.body).data("padding-right");
            p(document.body).removeData("padding-right"), document.body.style.paddingRight = n || ""
        }, yt._getScrollbarWidth = function() {
            var e = document.createElement("div");
            e.className = "modal-scrollbar-measure", document.body.appendChild(e);
            var t = e.getBoundingClientRect().width - e.clientWidth;
            return document.body.removeChild(e), t
        }, Ot._jQueryInterface = function(n, o) {
            return this.each(function() {
                var e = p(this).data(xt),
                    t = s({}, Tt, {}, p(this).data(), {}, "object" == _typeof(n) && n ? n : {});
                if (e || (e = new Ot(this, t), p(this).data(xt, e)), "string" == typeof n) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n](o)
                } else t.show && e.show(o)
            })
        }, r(Ot, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Tt
            }
        }]), Ot);

    function Ot(e, t) {
        this._config = this._getConfig(t), this._element = e, this._dialog = e.querySelector(".modal-dialog"), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0
    }
    p(document).on(Et.CLICK_DATA_API, '[data-toggle="modal"]', function(e) {
        var t, n = this,
            o = g.getSelectorFromElement(this);
        o && (t = document.querySelector(o));
        var i = p(t).data(xt) ? "toggle" : s({}, p(t).data(), {}, p(this).data());
        "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
        var r = p(t).one(Et.SHOW, function(e) {
            e.isDefaultPrevented() || r.one(Et.HIDDEN, function() {
                p(n).is(":visible") && n.focus()
            })
        });
        Nt._jQueryInterface.call(p(t), i, this)
    }), p.fn[bt] = Nt._jQueryInterface, p.fn[bt].Constructor = Nt, p.fn[bt].noConflict = function() {
        return p.fn[bt] = _t, Nt._jQueryInterface
    };
    var Lt = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        $t = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        jt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function Ht(e, r, t) {
        if (0 === e.length) return e;
        if (t && "function" == typeof t) return t(e);
        for (var n = (new window.DOMParser).parseFromString(e, "text/html"), s = Object.keys(r), a = [].slice.call(n.body.querySelectorAll("*")), o = 0, i = a.length; o < i; o++) ! function(e) {
            var t = a[e],
                n = t.nodeName.toLowerCase();
            if (-1 === s.indexOf(t.nodeName.toLowerCase())) return t.parentNode.removeChild(t);
            var o = [].slice.call(t.attributes),
                i = [].concat(r["*"] || [], r[n] || []);
            o.forEach(function(e) {
                ! function(e, t) {
                    var n = e.nodeName.toLowerCase();
                    if (-1 !== t.indexOf(n)) return -1 === Lt.indexOf(n) || Boolean(e.nodeValue.match($t) || e.nodeValue.match(jt));
                    for (var o = t.filter(function(e) {
                            return e instanceof RegExp
                        }), i = 0, r = o.length; i < r; i++)
                        if (n.match(o[i])) return 1
                }(e, i) && t.removeAttribute(e.nodeName)
            })
        }(o);
        return n.body.innerHTML
    }
    var Mt, Ft = "tooltip",
        Rt = "bs.tooltip",
        qt = "." + Rt,
        Bt = p.fn[Ft],
        Wt = "bs-tooltip",
        zt = new RegExp("(^|\\s)" + Wt + "\\S+", "g"),
        Ut = ["sanitize", "whiteList", "sanitizeFn"],
        Yt = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        Xt = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Vt = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: []
            },
            popperConfig: null
        },
        Qt = "show",
        Kt = {
            HIDE: "hide" + qt,
            HIDDEN: "hidden" + qt,
            SHOW: "show" + qt,
            SHOWN: "shown" + qt,
            INSERTED: "inserted" + qt,
            CLICK: "click" + qt,
            FOCUSIN: "focusin" + qt,
            FOCUSOUT: "focusout" + qt,
            MOUSEENTER: "mouseenter" + qt,
            MOUSELEAVE: "mouseleave" + qt
        },
        Gt = "fade",
        Zt = "show",
        Jt = "hover",
        en = "focus",
        tn = ((Mt = nn.prototype).enable = function() {
            this._isEnabled = !0
        }, Mt.disable = function() {
            this._isEnabled = !1
        }, Mt.toggleEnabled = function() {
            this._isEnabled = !this._isEnabled
        }, Mt.toggle = function(e) {
            if (this._isEnabled)
                if (e) {
                    var t = this.constructor.DATA_KEY,
                        n = p(e.currentTarget).data(t);
                    n || (n = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(t, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                } else {
                    if (p(this.getTipElement()).hasClass(Zt)) return void this._leave(null, this);
                    this._enter(null, this)
                }
        }, Mt.dispose = function() {
            clearTimeout(this._timeout), p.removeData(this.element, this.constructor.DATA_KEY), p(this.element).off(this.constructor.EVENT_KEY), p(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler), this.tip && p(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
        }, Mt.show = function() {
            var t = this;
            if ("none" === p(this.element).css("display")) throw new Error("Please use show on visible elements");
            var e = p.Event(this.constructor.Event.SHOW);
            if (this.isWithContent() && this._isEnabled) {
                p(this.element).trigger(e);
                var n = g.findShadowRoot(this.element),
                    o = p.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                if (e.isDefaultPrevented() || !o) return;
                var i = this.getTipElement(),
                    r = g.getUID(this.constructor.NAME);
                i.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && p(i).addClass(Gt);
                var s = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
                    a = this._getAttachment(s);
                this.addAttachmentClass(a);
                var l = this._getContainer();
                p(i).data(this.constructor.DATA_KEY, this), p.contains(this.element.ownerDocument.documentElement, this.tip) || p(i).appendTo(l), p(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new Je(this.element, i, this._getPopperConfig(a)), p(i).addClass(Zt), "ontouchstart" in document.documentElement && p(document.body).children().on("mouseover", null, p.noop);
                var c, u = function() {
                    t.config.animation && t._fixTransition();
                    var e = t._hoverState;
                    t._hoverState = null, p(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                };
                p(this.tip).hasClass(Gt) ? (c = g.getTransitionDurationFromElement(this.tip), p(this.tip).one(g.TRANSITION_END, u).emulateTransitionEnd(c)) : u()
            }
        }, Mt.hide = function(e) {
            function t() {
                o._hoverState !== Qt && i.parentNode && i.parentNode.removeChild(i), o._cleanTipClass(), o.element.removeAttribute("aria-describedby"), p(o.element).trigger(o.constructor.Event.HIDDEN), null !== o._popper && o._popper.destroy(), e && e()
            }
            var n, o = this,
                i = this.getTipElement(),
                r = p.Event(this.constructor.Event.HIDE);
            p(this.element).trigger(r), r.isDefaultPrevented() || (p(i).removeClass(Zt), "ontouchstart" in document.documentElement && p(document.body).children().off("mouseover", null, p.noop), this._activeTrigger.click = !1, this._activeTrigger[en] = !1, this._activeTrigger[Jt] = !1, p(this.tip).hasClass(Gt) ? (n = g.getTransitionDurationFromElement(i), p(i).one(g.TRANSITION_END, t).emulateTransitionEnd(n)) : t(), this._hoverState = "")
        }, Mt.update = function() {
            null !== this._popper && this._popper.scheduleUpdate()
        }, Mt.isWithContent = function() {
            return Boolean(this.getTitle())
        }, Mt.addAttachmentClass = function(e) {
            p(this.getTipElement()).addClass(Wt + "-" + e)
        }, Mt.getTipElement = function() {
            return this.tip = this.tip || p(this.config.template)[0], this.tip
        }, Mt.setContent = function() {
            var e = this.getTipElement();
            this.setElementContent(p(e.querySelectorAll(".tooltip-inner")), this.getTitle()), p(e).removeClass(Gt + " " + Zt)
        }, Mt.setElementContent = function(e, t) {
            "object" != _typeof(t) || !t.nodeType && !t.jquery ? this.config.html ? (this.config.sanitize && (t = Ht(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t)) : e.text(t) : this.config.html ? p(t).parent().is(e) || e.empty().append(t) : e.text(p(t).text())
        }, Mt.getTitle = function() {
            var e = this.element.getAttribute("data-original-title");
            return e || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title)
        }, Mt._getPopperConfig = function(e) {
            var t = this;
            return s({}, {
                placement: e,
                modifiers: {
                    offset: this._getOffset(),
                    flip: {
                        behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                        element: ".arrow"
                    },
                    preventOverflow: {
                        boundariesElement: this.config.boundary
                    }
                },
                onCreate: function(e) {
                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                },
                onUpdate: function(e) {
                    return t._handlePopperPlacementChange(e)
                }
            }, {}, this.config.popperConfig)
        }, Mt._getOffset = function() {
            var t = this,
                e = {};
            return "function" == typeof this.config.offset ? e.fn = function(e) {
                return e.offsets = s({}, e.offsets, {}, t.config.offset(e.offsets, t.element) || {}), e
            } : e.offset = this.config.offset, e
        }, Mt._getContainer = function() {
            return !1 === this.config.container ? document.body : g.isElement(this.config.container) ? p(this.config.container) : p(document).find(this.config.container)
        }, Mt._getAttachment = function(e) {
            return Xt[e.toUpperCase()]
        }, Mt._setListeners = function() {
            var o = this;
            this.config.trigger.split(" ").forEach(function(e) {
                var t, n;
                "click" === e ? p(o.element).on(o.constructor.Event.CLICK, o.config.selector, function(e) {
                    return o.toggle(e)
                }) : "manual" !== e && (t = e === Jt ? o.constructor.Event.MOUSEENTER : o.constructor.Event.FOCUSIN, n = e === Jt ? o.constructor.Event.MOUSELEAVE : o.constructor.Event.FOCUSOUT, p(o.element).on(t, o.config.selector, function(e) {
                    return o._enter(e)
                }).on(n, o.config.selector, function(e) {
                    return o._leave(e)
                }))
            }), this._hideModalHandler = function() {
                o.element && o.hide()
            }, p(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler), this.config.selector ? this.config = s({}, this.config, {
                trigger: "manual",
                selector: ""
            }) : this._fixTitle()
        }, Mt._fixTitle = function() {
            var e = _typeof(this.element.getAttribute("data-original-title"));
            !this.element.getAttribute("title") && "string" == e || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
        }, Mt._enter = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusin" === e.type ? en : Jt] = !0), p(t.getTipElement()).hasClass(Zt) || t._hoverState === Qt ? t._hoverState = Qt : (clearTimeout(t._timeout), t._hoverState = Qt, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                t._hoverState === Qt && t.show()
            }, t.config.delay.show) : t.show())
        }, Mt._leave = function(e, t) {
            var n = this.constructor.DATA_KEY;
            (t = t || p(e.currentTarget).data(n)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()), p(e.currentTarget).data(n, t)), e && (t._activeTrigger["focusout" === e.type ? en : Jt] = !1), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                "out" === t._hoverState && t.hide()
            }, t.config.delay.hide) : t.hide())
        }, Mt._isWithActiveTrigger = function() {
            for (var e in this._activeTrigger)
                if (this._activeTrigger[e]) return !0;
            return !1
        }, Mt._getConfig = function(e) {
            var t = p(this.element).data();
            return Object.keys(t).forEach(function(e) {
                -1 !== Ut.indexOf(e) && delete t[e]
            }), "number" == typeof(e = s({}, this.constructor.Default, {}, t, {}, "object" == _typeof(e) && e ? e : {})).delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), g.typeCheckConfig(Ft, e, this.constructor.DefaultType), e.sanitize && (e.template = Ht(e.template, e.whiteList, e.sanitizeFn)), e
        }, Mt._getDelegateConfig = function() {
            var e = {};
            if (this.config)
                for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
            return e
        }, Mt._cleanTipClass = function() {
            var e = p(this.getTipElement()),
                t = e.attr("class").match(zt);
            null !== t && t.length && e.removeClass(t.join(""))
        }, Mt._handlePopperPlacementChange = function(e) {
            var t = e.instance;
            this.tip = t.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
        }, Mt._fixTransition = function() {
            var e = this.getTipElement(),
                t = this.config.animation;
            null === e.getAttribute("x-placement") && (p(e).removeClass(Gt), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
        }, nn._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this).data(Rt),
                    t = "object" == _typeof(n) && n;
                if ((e || !/dispose|hide/.test(n)) && (e || (e = new nn(this, t), p(this).data(Rt, e)), "string" == typeof n)) {
                    if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                    e[n]()
                }
            })
        }, r(nn, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return Vt
            }
        }, {
            key: "NAME",
            get: function() {
                return Ft
            }
        }, {
            key: "DATA_KEY",
            get: function() {
                return Rt
            }
        }, {
            key: "Event",
            get: function() {
                return Kt
            }
        }, {
            key: "EVENT_KEY",
            get: function() {
                return qt
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Yt
            }
        }]), nn);

    function nn(e, t) {
        if (void 0 === Je) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
        this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
    }
    p.fn[Ft] = tn._jQueryInterface, p.fn[Ft].Constructor = tn, p.fn[Ft].noConflict = function() {
        return p.fn[Ft] = Bt, tn._jQueryInterface
    };
    var on = "popover",
        rn = "bs.popover",
        sn = "." + rn,
        an = p.fn[on],
        ln = "bs-popover",
        cn = new RegExp("(^|\\s)" + ln + "\\S+", "g"),
        un = s({}, tn.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        fn = s({}, tn.DefaultType, {
            content: "(string|element|function)"
        }),
        dn = {
            HIDE: "hide" + sn,
            HIDDEN: "hidden" + sn,
            SHOW: "show" + sn,
            SHOWN: "shown" + sn,
            INSERTED: "inserted" + sn,
            CLICK: "click" + sn,
            FOCUSIN: "focusin" + sn,
            FOCUSOUT: "focusout" + sn,
            MOUSEENTER: "mouseenter" + sn,
            MOUSELEAVE: "mouseleave" + sn
        },
        hn = function(e) {
            function o() {
                return e.apply(this, arguments) || this
            }
            var t, n;
            n = e, (t = o).prototype = Object.create(n.prototype), (t.prototype.constructor = t).__proto__ = n;
            var i = o.prototype;
            return i.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, i.addAttachmentClass = function(e) {
                p(this.getTipElement()).addClass(ln + "-" + e)
            }, i.getTipElement = function() {
                return this.tip = this.tip || p(this.config.template)[0], this.tip
            }, i.setContent = function() {
                var e = p(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var t = this._getContent();
                "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show")
            }, i._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, i._cleanTipClass = function() {
                var e = p(this.getTipElement()),
                    t = e.attr("class").match(cn);
                null !== t && 0 < t.length && e.removeClass(t.join(""))
            }, o._jQueryInterface = function(n) {
                return this.each(function() {
                    var e = p(this).data(rn),
                        t = "object" == _typeof(n) ? n : null;
                    if ((e || !/dispose|hide/.test(n)) && (e || (e = new o(this, t), p(this).data(rn, e)), "string" == typeof n)) {
                        if (void 0 === e[n]) throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }, r(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.4.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return un
                }
            }, {
                key: "NAME",
                get: function() {
                    return on
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return rn
                }
            }, {
                key: "Event",
                get: function() {
                    return dn
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return sn
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return fn
                }
            }]), o
        }(tn);
    p.fn[on] = hn._jQueryInterface, p.fn[on].Constructor = hn, p.fn[on].noConflict = function() {
        return p.fn[on] = an, hn._jQueryInterface
    };
    var pn, gn = "scrollspy",
        mn = "bs.scrollspy",
        vn = "." + mn,
        yn = p.fn[gn],
        bn = {
            offset: 10,
            method: "auto",
            target: ""
        },
        xn = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        wn = {
            ACTIVATE: "activate" + vn,
            SCROLL: "scroll" + vn,
            LOAD_DATA_API: "load" + vn + ".data-api"
        },
        _n = "active",
        Tn = ".nav, .list-group",
        Cn = ".nav-link",
        En = ".list-group-item",
        Sn = "position",
        An = ((pn = Dn.prototype).refresh = function() {
            var t = this,
                e = this._scrollElement === this._scrollElement.window ? "offset" : Sn,
                i = "auto" === this._config.method ? e : this._config.method,
                r = i === Sn ? this._getScrollTop() : 0;
            this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), [].slice.call(document.querySelectorAll(this._selector)).map(function(e) {
                var t, n = g.getSelectorFromElement(e);
                if (n && (t = document.querySelector(n)), t) {
                    var o = t.getBoundingClientRect();
                    if (o.width || o.height) return [p(t)[i]().top + r, n]
                }
                return null
            }).filter(function(e) {
                return e
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).forEach(function(e) {
                t._offsets.push(e[0]), t._targets.push(e[1])
            })
        }, pn.dispose = function() {
            p.removeData(this._element, mn), p(this._scrollElement).off(vn), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
        }, pn._getConfig = function(e) {
            var t;
            return "string" != typeof(e = s({}, bn, {}, "object" == _typeof(e) && e ? e : {})).target && ((t = p(e.target).attr("id")) || (t = g.getUID(gn), p(e.target).attr("id", t)), e.target = "#" + t), g.typeCheckConfig(gn, e, xn), e
        }, pn._getScrollTop = function() {
            return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
        }, pn._getScrollHeight = function() {
            return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
        }, pn._getOffsetHeight = function() {
            return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
        }, pn._process = function() {
            var e = this._getScrollTop() + this._config.offset,
                t = this._getScrollHeight(),
                n = this._config.offset + t - this._getOffsetHeight();
            if (this._scrollHeight !== t && this.refresh(), n <= e) {
                var o = this._targets[this._targets.length - 1];
                this._activeTarget !== o && this._activate(o)
            } else {
                if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                for (var i = this._offsets.length; i--;) this._activeTarget !== this._targets[i] && e >= this._offsets[i] && (void 0 === this._offsets[i + 1] || e < this._offsets[i + 1]) && this._activate(this._targets[i])
            }
        }, pn._activate = function(t) {
            this._activeTarget = t, this._clear();
            var e = this._selector.split(",").map(function(e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                }),
                n = p([].slice.call(document.querySelectorAll(e.join(","))));
            n.hasClass("dropdown-item") ? (n.closest(".dropdown").find(".dropdown-toggle").addClass(_n), n.addClass(_n)) : (n.addClass(_n), n.parents(Tn).prev(Cn + ", " + En).addClass(_n), n.parents(Tn).prev(".nav-item").children(Cn).addClass(_n)), p(this._scrollElement).trigger(wn.ACTIVATE, {
                relatedTarget: t
            })
        }, pn._clear = function() {
            [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                return e.classList.contains(_n)
            }).forEach(function(e) {
                return e.classList.remove(_n)
            })
        }, Dn._jQueryInterface = function(t) {
            return this.each(function() {
                var e = p(this).data(mn);
                if (e || (e = new Dn(this, "object" == _typeof(t) && t), p(this).data(mn, e)), "string" == typeof t) {
                    if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                    e[t]()
                }
            })
        }, r(Dn, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "Default",
            get: function() {
                return bn
            }
        }]), Dn);

    function Dn(e, t) {
        var n = this;
        this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(t), this._selector = this._config.target + " " + Cn + "," + this._config.target + " " + En + "," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, p(this._scrollElement).on(wn.SCROLL, function(e) {
            return n._process(e)
        }), this.refresh(), this._process()
    }
    p(window).on(wn.LOAD_DATA_API, function() {
        for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--;) {
            var n = p(e[t]);
            An._jQueryInterface.call(n, n.data())
        }
    }), p.fn[gn] = An._jQueryInterface, p.fn[gn].Constructor = An, p.fn[gn].noConflict = function() {
        return p.fn[gn] = yn, An._jQueryInterface
    };
    var kn, In = "bs.tab",
        Pn = "." + In,
        Nn = p.fn.tab,
        On = {
            HIDE: "hide" + Pn,
            HIDDEN: "hidden" + Pn,
            SHOW: "show" + Pn,
            SHOWN: "shown" + Pn,
            CLICK_DATA_API: "click" + Pn + ".data-api"
        },
        Ln = "active",
        $n = ".active",
        jn = "> li > .active",
        Hn = ((kn = Mn.prototype).show = function() {
            var e, t, n, o, i, r, s, a, l = this;
            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && p(this._element).hasClass(Ln) || p(this._element).hasClass("disabled") || (t = p(this._element).closest(".nav, .list-group")[0], n = g.getSelectorFromElement(this._element), t && (o = "UL" === t.nodeName || "OL" === t.nodeName ? jn : $n, i = (i = p.makeArray(p(t).find(o)))[i.length - 1]), r = p.Event(On.HIDE, {
                relatedTarget: this._element
            }), s = p.Event(On.SHOW, {
                relatedTarget: i
            }), i && p(i).trigger(r), p(this._element).trigger(s), s.isDefaultPrevented() || r.isDefaultPrevented() || (n && (e = document.querySelector(n)), this._activate(this._element, t), a = function() {
                var e = p.Event(On.HIDDEN, {
                        relatedTarget: l._element
                    }),
                    t = p.Event(On.SHOWN, {
                        relatedTarget: i
                    });
                p(i).trigger(e), p(l._element).trigger(t)
            }, e ? this._activate(e, e.parentNode, a) : a()))
        }, kn.dispose = function() {
            p.removeData(this._element, In), this._element = null
        }, kn._activate = function(e, t, n) {
            function o() {
                return r._transitionComplete(e, s, n)
            }
            var i, r = this,
                s = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? p(t).children($n) : p(t).find(jn))[0],
                a = n && s && p(s).hasClass("fade");
            s && a ? (i = g.getTransitionDurationFromElement(s), p(s).removeClass("show").one(g.TRANSITION_END, o).emulateTransitionEnd(i)) : o()
        }, kn._transitionComplete = function(e, t, n) {
            var o, i, r;
            t && (p(t).removeClass(Ln), (o = p(t.parentNode).find("> .dropdown-menu .active")[0]) && p(o).removeClass(Ln), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)), p(e).addClass(Ln), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), g.reflow(e), e.classList.contains("fade") && e.classList.add("show"), e.parentNode && p(e.parentNode).hasClass("dropdown-menu") && ((i = p(e).closest(".dropdown")[0]) && (r = [].slice.call(i.querySelectorAll(".dropdown-toggle")), p(r).addClass(Ln)), e.setAttribute("aria-expanded", !0)), n && n()
        }, Mn._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this),
                    t = e.data(In);
                if (t || (t = new Mn(this), e.data(In, t)), "string" == typeof n) {
                    if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n]()
                }
            })
        }, r(Mn, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }]), Mn);

    function Mn(e) {
        this._element = e
    }
    p(document).on(On.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
        e.preventDefault(), Hn._jQueryInterface.call(p(this), "show")
    }), p.fn.tab = Hn._jQueryInterface, p.fn.tab.Constructor = Hn, p.fn.tab.noConflict = function() {
        return p.fn.tab = Nn, Hn._jQueryInterface
    };
    var Fn, Rn = "toast",
        qn = "bs.toast",
        Bn = "." + qn,
        Wn = p.fn[Rn],
        zn = {
            CLICK_DISMISS: "click.dismiss" + Bn,
            HIDE: "hide" + Bn,
            HIDDEN: "hidden" + Bn,
            SHOW: "show" + Bn,
            SHOWN: "shown" + Bn
        },
        Un = "show",
        Yn = "showing",
        Xn = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        Vn = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        Qn = ((Fn = Kn.prototype).show = function() {
            var e, t, n = this,
                o = p.Event(zn.SHOW);
            p(this._element).trigger(o), o.isDefaultPrevented() || (this._config.animation && this._element.classList.add("fade"), e = function() {
                n._element.classList.remove(Yn), n._element.classList.add(Un), p(n._element).trigger(zn.SHOWN), n._config.autohide && (n._timeout = setTimeout(function() {
                    n.hide()
                }, n._config.delay))
            }, this._element.classList.remove("hide"), g.reflow(this._element), this._element.classList.add(Yn), this._config.animation ? (t = g.getTransitionDurationFromElement(this._element), p(this._element).one(g.TRANSITION_END, e).emulateTransitionEnd(t)) : e())
        }, Fn.hide = function() {
            var e;
            this._element.classList.contains(Un) && (e = p.Event(zn.HIDE), p(this._element).trigger(e), e.isDefaultPrevented() || this._close())
        }, Fn.dispose = function() {
            clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Un) && this._element.classList.remove(Un), p(this._element).off(zn.CLICK_DISMISS), p.removeData(this._element, qn), this._element = null, this._config = null
        }, Fn._getConfig = function(e) {
            return e = s({}, Vn, {}, p(this._element).data(), {}, "object" == _typeof(e) && e ? e : {}), g.typeCheckConfig(Rn, e, this.constructor.DefaultType), e
        }, Fn._setListeners = function() {
            var e = this;
            p(this._element).on(zn.CLICK_DISMISS, '[data-dismiss="toast"]', function() {
                return e.hide()
            })
        }, Fn._close = function() {
            function e() {
                n._element.classList.add("hide"), p(n._element).trigger(zn.HIDDEN)
            }
            var t, n = this;
            this._element.classList.remove(Un), this._config.animation ? (t = g.getTransitionDurationFromElement(this._element), p(this._element).one(g.TRANSITION_END, e).emulateTransitionEnd(t)) : e()
        }, Kn._jQueryInterface = function(n) {
            return this.each(function() {
                var e = p(this),
                    t = e.data(qn);
                if (t || (t = new Kn(this, "object" == _typeof(n) && n), e.data(qn, t)), "string" == typeof n) {
                    if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                    t[n](this)
                }
            })
        }, r(Kn, null, [{
            key: "VERSION",
            get: function() {
                return "4.4.1"
            }
        }, {
            key: "DefaultType",
            get: function() {
                return Xn
            }
        }, {
            key: "Default",
            get: function() {
                return Vn
            }
        }]), Kn);

    function Kn(e, t) {
        this._element = e, this._config = this._getConfig(t), this._timeout = null, this._setListeners()
    }
    p.fn[Rn] = Qn._jQueryInterface, p.fn[Rn].Constructor = Qn, p.fn[Rn].noConflict = function() {
        return p.fn[Rn] = Wn, Qn._jQueryInterface
    }, e.Alert = d, e.Button = S, e.Carousel = B, e.Collapse = oe, e.Dropdown = mt, e.Modal = Nt, e.Popover = hn, e.Scrollspy = An, e.Tab = Hn, e.Toast = Qn, e.Tooltip = tn, e.Util = g, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}),
function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports ? module.exports = t() : e.Rellax = t()
}("undefined" != typeof window ? window : global, function() {
    return function e(t, n) {
        var C = Object.create(e.prototype),
            r = 0,
            E = 0,
            s = 0,
            S = 0,
            A = [],
            D = !0,
            o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(e) {
                return setTimeout(e, 1e3 / 60)
            },
            i = null,
            a = !1;
        try {
            var l = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            window.addEventListener("testPassive", null, l), window.removeEventListener("testPassive", null, l)
        } catch (e) {}
        var c = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout,
            u = window.transformProp || function() {
                var e = document.createElement("div");
                if (null === e.style.transform) {
                    var t, n = ["Webkit", "Moz", "ms"];
                    for (t in n)
                        if (void 0 !== e.style[n[t] + "Transform"]) return n[t] + "Transform"
                }
                return "transform"
            }();
        if (C.options = {
                speed: -2,
                verticalSpeed: null,
                horizontalSpeed: null,
                breakpoints: [576, 768, 1201],
                center: !1,
                wrapper: null,
                relativeToWrapper: !1,
                round: !0,
                vertical: !0,
                horizontal: !1,
                verticalScrollAxis: "y",
                horizontalScrollAxis: "x",
                callback: function() {}
            }, n && Object.keys(n).forEach(function(e) {
                C.options[e] = n[e]
            }), n && n.breakpoints && function() {
                if (3 === C.options.breakpoints.length && Array.isArray(C.options.breakpoints)) {
                    var t, n = !0,
                        o = !0;
                    if (C.options.breakpoints.forEach(function(e) {
                            "number" != typeof e && (o = !1), null !== t && e < t && (n = !1), t = e
                        }), n && o) return
                }
                C.options.breakpoints = [576, 768, 1201], console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")
            }(), 0 < (l = "string" == typeof(t = t || ".rellax") ? document.querySelectorAll(t) : [t]).length) {
            if (C.elems = l, C.options.wrapper && !C.options.wrapper.nodeType) {
                if (!(l = document.querySelector(C.options.wrapper))) return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
                C.options.wrapper = l
            }
            var k, f = function e() {
                    for (var t = 0; t < A.length; t++) C.elems[t].style.cssText = A[t].style;
                    for (A = [], E = window.innerHeight, S = window.innerWidth, t = C.options.breakpoints, k = S < t[0] ? "xs" : S >= t[0] && S < t[1] ? "sm" : S >= t[1] && S < t[2] ? "md" : "lg", I(), t = 0; t < C.elems.length; t++) {
                        var n = void 0,
                            o = C.elems[t],
                            i = o.getAttribute("data-rellax-percentage"),
                            r = o.getAttribute("data-rellax-speed"),
                            s = o.getAttribute("data-rellax-xs-speed"),
                            a = o.getAttribute("data-rellax-mobile-speed"),
                            l = o.getAttribute("data-rellax-tablet-speed"),
                            c = o.getAttribute("data-rellax-desktop-speed"),
                            u = o.getAttribute("data-rellax-vertical-speed"),
                            f = o.getAttribute("data-rellax-horizontal-speed"),
                            d = o.getAttribute("data-rellax-vertical-scroll-axis"),
                            h = o.getAttribute("data-rellax-horizontal-scroll-axis"),
                            p = o.getAttribute("data-rellax-zindex") || 0,
                            g = o.getAttribute("data-rellax-min"),
                            m = o.getAttribute("data-rellax-max"),
                            v = o.getAttribute("data-rellax-min-x"),
                            y = o.getAttribute("data-rellax-max-x"),
                            b = o.getAttribute("data-rellax-min-y"),
                            x = o.getAttribute("data-rellax-max-y"),
                            w = !0;
                        s || a || l || c ? n = {
                            xs: s,
                            sm: a,
                            md: l,
                            lg: c
                        } : w = !1, s = C.options.wrapper ? C.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop, C.options.relativeToWrapper && (s = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - C.options.wrapper.offsetTop);
                        var _ = C.options.vertical && (i || C.options.center) ? s : 0,
                            T = C.options.horizontal && (i || C.options.center) ? C.options.wrapper ? C.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0,
                            s = _ + o.getBoundingClientRect().top,
                            a = o.clientHeight || o.offsetHeight || o.scrollHeight,
                            l = T + o.getBoundingClientRect().left,
                            c = o.clientWidth || o.offsetWidth || o.scrollWidth,
                            _ = i || (_ - s + E) / (a + E),
                            i = i || (T - l + S) / (c + S);
                        C.options.center && (_ = i = .5), n = w && null !== n[k] ? Number(n[k]) : r || C.options.speed, u = u || C.options.verticalSpeed, f = f || C.options.horizontalSpeed, d = d || C.options.verticalScrollAxis, h = h || C.options.horizontalScrollAxis, r = P(i, _, n, u, f), o = o.style.cssText, w = "", (i = /transform\s*:/i.exec(o)) && (w = (i = (w = o.slice(i.index)).indexOf(";")) ? " " + w.slice(11, i).replace(/\s/g, "") : " " + w.slice(11).replace(/\s/g, "")), A.push({
                            baseX: r.x,
                            baseY: r.y,
                            top: s,
                            left: l,
                            height: a,
                            width: c,
                            speed: n,
                            verticalSpeed: u,
                            horizontalSpeed: f,
                            verticalScrollAxis: d,
                            horizontalScrollAxis: h,
                            style: o,
                            transform: w,
                            zindex: p,
                            min: g,
                            max: m,
                            minX: v,
                            maxX: y,
                            minY: b,
                            maxY: x
                        })
                    }
                    O(), D && (window.addEventListener("resize", e), D = !1, N())
                },
                I = function() {
                    var e = r,
                        t = s;
                    return r = C.options.wrapper ? C.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset, s = C.options.wrapper ? C.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset, C.options.relativeToWrapper && (r = ((document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset) - C.options.wrapper.offsetTop), !!(e != r && C.options.vertical || t != s && C.options.horizontal)
                },
                P = function(e, t, n, o, i) {
                    var r = {};
                    return e = 100 * (i || n) * (1 - e), t = 100 * (o || n) * (1 - t), r.x = C.options.round ? Math.round(e) : Math.round(100 * e) / 100, r.y = C.options.round ? Math.round(t) : Math.round(100 * t) / 100, r
                },
                d = function e() {
                    window.removeEventListener("resize", e), window.removeEventListener("orientationchange", e), (C.options.wrapper ? C.options.wrapper : window).removeEventListener("scroll", e), (C.options.wrapper ? C.options.wrapper : document).removeEventListener("touchmove", e), i = o(N)
                },
                N = function e() {
                    I() && !1 === D ? (O(), i = o(e)) : (i = null, window.addEventListener("resize", d), window.addEventListener("orientationchange", d), (C.options.wrapper ? C.options.wrapper : window).addEventListener("scroll", d, !!a && {
                        passive: !0
                    }), (C.options.wrapper ? C.options.wrapper : document).addEventListener("touchmove", d, !!a && {
                        passive: !0
                    }))
                },
                O = function() {
                    for (var e = 0; e < C.elems.length; e++) {
                        var t = A[e].verticalScrollAxis.toLowerCase(),
                            n = A[e].horizontalScrollAxis.toLowerCase(),
                            o = -1 != t.indexOf("x") ? r : 0,
                            t = -1 != t.indexOf("y") ? r : 0,
                            i = -1 != n.indexOf("x") ? s : 0,
                            n = -1 != n.indexOf("y") ? s : 0;
                        n = (o = P((o + i - A[e].left + S) / (A[e].width + S), (t + n - A[e].top + E) / (A[e].height + E), A[e].speed, A[e].verticalSpeed, A[e].horizontalSpeed)).y - A[e].baseY, t = o.x - A[e].baseX, null !== A[e].min && (C.options.vertical && !C.options.horizontal && (n = n <= A[e].min ? A[e].min : n), C.options.horizontal && !C.options.vertical && (t = t <= A[e].min ? A[e].min : t)), null != A[e].minY && (n = n <= A[e].minY ? A[e].minY : n), null != A[e].minX && (t = t <= A[e].minX ? A[e].minX : t), null !== A[e].max && (C.options.vertical && !C.options.horizontal && (n = n >= A[e].max ? A[e].max : n), C.options.horizontal && !C.options.vertical && (t = t >= A[e].max ? A[e].max : t)), null != A[e].maxY && (n = n >= A[e].maxY ? A[e].maxY : n), null != A[e].maxX && (t = t >= A[e].maxX ? A[e].maxX : t), C.elems[e].style[u] = "translate3d(" + (C.options.horizontal ? t : "0") + "px," + (C.options.vertical ? n : "0") + "px," + A[e].zindex + "px) " + A[e].transform
                    }
                    C.options.callback(o)
                };
            return C.destroy = function() {
                for (var e = 0; e < C.elems.length; e++) C.elems[e].style.cssText = A[e].style;
                D || (window.removeEventListener("resize", f), D = !0), c(i), i = null
            }, f(), C.refresh = f, C
        }
        console.warn("Rellax: The elements you're trying to select don't exist.")
    }
}),
function(l, f, g) {
    function n(e, t) {
        var n, o, i, r = [],
            s = 0;
        e && e.isDefaultPrevented() || (e.preventDefault(), t = t || {}, e && e.data && (t = u(e.data.options, t)), n = t.$target || g(e.currentTarget).trigger("blur"), (i = g.fancybox.getInstance()) && i.$trigger && i.$trigger.is(n) || (r = t.selector ? g(t.selector) : (o = n.attr("data-fancybox") || "") ? (r = e.data ? e.data.items : []).length ? r.filter('[data-fancybox="' + o + '"]') : g('[data-fancybox="' + o + '"]') : [n], (s = g(r).index(n)) < 0 && (s = 0), (i = g.fancybox.open(r, t, s)).$trigger = n))
    }
    if (l.console = l.console || {
            info: function() {}
        }, g) {
        if (g.fn.fancybox) return console.info("fancyBox already initialized");
        var e = {
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
                onInit: g.noop,
                beforeLoad: g.noop,
                afterLoad: g.noop,
                beforeShow: g.noop,
                afterShow: g.noop,
                beforeClose: g.noop,
                afterClose: g.noop,
                onActivate: g.noop,
                onDeactivate: g.noop,
                clickContent: function(e) {
                    return "image" === e.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1,
                    idleTime: !1,
                    clickContent: function(e) {
                        return "image" === e.type && "toggleControls"
                    },
                    clickSlide: function(e) {
                        return "image" === e.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function(e) {
                        return "image" === e.type && "zoom"
                    },
                    dblclickSlide: function(e) {
                        return "image" === e.type && "zoom"
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
            i = g(l),
            r = g(f),
            s = 0,
            d = l.requestAnimationFrame || l.webkitRequestAnimationFrame || l.mozRequestAnimationFrame || l.oRequestAnimationFrame || function(e) {
                return l.setTimeout(e, 1e3 / 60)
            },
            t = l.cancelAnimationFrame || l.webkitCancelAnimationFrame || l.mozCancelAnimationFrame || l.oCancelAnimationFrame || function(e) {
                l.clearTimeout(e)
            },
            c = function() {
                var e, t = f.createElement("fakeelement"),
                    n = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (e in n)
                    if (void 0 !== t.style[e]) return n[e];
                return "transitionend"
            }(),
            h = function(e) {
                return e && e.length && e[0].offsetHeight
            },
            u = function(e, t) {
                var n = g.extend(!0, {}, e, t);
                return g.each(t, function(e, t) {
                    g.isArray(t) && (n[e] = t)
                }), n
            },
            o = function(e, t, n) {
                var o = this;
                o.opts = u({
                    index: n
                }, g.fancybox.defaults), g.isPlainObject(t) && (o.opts = u(o.opts, t)), g.fancybox.isMobile && (o.opts = u(o.opts, o.opts.mobile)), o.id = o.opts.id || ++s, o.currIndex = parseInt(o.opts.index, 10) || 0, o.prevIndex = null, o.prevPos = null, o.currPos = 0, o.firstRun = !0, o.group = [], o.slides = {}, o.addContent(e), o.group.length && o.init()
            };
        g.extend(o.prototype, {
            init: function() {
                var t, n, o = this,
                    i = o.group[o.currIndex].opts;
                i.closeExisting && g.fancybox.close(!0), g("body").addClass("fancybox-active"), !g.fancybox.getInstance() && !1 !== i.hideScrollbar && !g.fancybox.isMobile && f.body.scrollHeight > l.innerHeight && (g("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (l.innerWidth - f.documentElement.clientWidth) + "px;}</style>"), g("body").addClass("compensate-for-scrollbar")), n = "", g.each(i.buttons, function(e, t) {
                    n += i.btnTpl[t] || ""
                }), t = g(o.translate(o, i.baseTpl.replace("{{buttons}}", n).replace("{{arrows}}", i.btnTpl.arrowLeft + i.btnTpl.arrowRight))).attr("id", "fancybox-container-" + o.id).addClass(i.baseClass).data("FancyBox", o).appendTo(i.parentEl), o.$refs = {
                    container: t
                }, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function(e) {
                    o.$refs[e] = t.find(".fancybox-" + e)
                }), o.trigger("onInit"), o.activate(), o.jumpTo(o.currIndex)
            },
            translate: function(e, t) {
                var n = e.opts.i18n[e.opts.lang] || e.opts.i18n.en;
                return t.replace(/\{\{(\w+)\}\}/g, function(e, t) {
                    return void 0 === n[t] ? e : n[t]
                })
            },
            addContent: function(e) {
                var t, c = this,
                    n = g.makeArray(e);
                g.each(n, function(e, t) {
                    var n, o, i, r, s, a = {},
                        l = {};
                    g.isPlainObject(t) ? l = (a = t).opts || t : "object" === g.type(t) && g(t).length ? (l = (n = g(t)).data() || {}, (l = g.extend(!0, {}, l, l.options)).$orig = n, a.src = c.opts.src || l.src || n.attr("href"), a.type || a.src || (a.type = "inline", a.src = t)) : a = {
                        type: "html",
                        src: t + ""
                    }, a.opts = g.extend(!0, {}, c.opts, l), g.isArray(l.buttons) && (a.opts.buttons = l.buttons), g.fancybox.isMobile && a.opts.mobile && (a.opts = u(a.opts, a.opts.mobile)), o = a.type || a.opts.type, r = a.src || "", !o && r && ((i = r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (o = "video", a.opts.video.format || (a.opts.video.format = "video/" + ("ogv" === i[1] ? "ogg" : i[1]))) : r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? o = "image" : r.match(/\.(pdf)((\?|#).*)?$/i) ? (o = "iframe", a = g.extend(!0, a, {
                        contentType: "pdf",
                        opts: {
                            iframe: {
                                preload: !1
                            }
                        }
                    })) : "#" === r.charAt(0) && (o = "inline")), o ? a.type = o : c.trigger("objectNeedsType", a), a.contentType || (a.contentType = -1 < g.inArray(a.type, ["html", "inline", "ajax"]) ? "html" : a.type), a.index = c.group.length, "auto" == a.opts.smallBtn && (a.opts.smallBtn = -1 < g.inArray(a.type, ["html", "inline", "ajax"])), "auto" === a.opts.toolbar && (a.opts.toolbar = !a.opts.smallBtn), a.$thumb = a.opts.$thumb || null, a.opts.$trigger && a.index === c.opts.index && (a.$thumb = a.opts.$trigger.find("img:first"), a.$thumb.length && (a.opts.$orig = a.opts.$trigger)), a.$thumb && a.$thumb.length || !a.opts.$orig || (a.$thumb = a.opts.$orig.find("img:first")), a.$thumb && !a.$thumb.length && (a.$thumb = null), a.thumb = a.opts.thumb || (a.$thumb ? a.$thumb[0].src : null), "function" === g.type(a.opts.caption) && (a.opts.caption = a.opts.caption.apply(t, [c, a])), "function" === g.type(c.opts.caption) && (a.opts.caption = c.opts.caption.apply(t, [c, a])), a.opts.caption instanceof g || (a.opts.caption = void 0 === a.opts.caption ? "" : a.opts.caption + ""), "ajax" !== a.type || 1 < (s = r.split(/\s+/, 2)).length && (a.src = s.shift(), a.opts.filter = s.shift()), a.opts.modal && (a.opts = g.extend(!0, a.opts, {
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
                    })), c.group.push(a)
                }), Object.keys(c.slides).length && (c.updateControls(), (t = c.Thumbs) && t.isActive && (t.create(), t.focus()))
            },
            addEvents: function() {
                var o = this;
                o.removeEvents(), o.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(e) {
                    e.stopPropagation(), e.preventDefault(), o.close(e)
                }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function(e) {
                    e.stopPropagation(), e.preventDefault(), o.previous()
                }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function(e) {
                    e.stopPropagation(), e.preventDefault(), o.next()
                }).on("click.fb", "[data-fancybox-zoom]", function(e) {
                    o[o.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                }), i.on("orientationchange.fb resize.fb", function(e) {
                    e && e.originalEvent && "resize" === e.originalEvent.type ? (o.requestId && t(o.requestId), o.requestId = d(function() {
                        o.update(e)
                    })) : (o.current && "iframe" === o.current.type && o.$refs.stage.hide(), setTimeout(function() {
                        o.$refs.stage.show(), o.update(e)
                    }, g.fancybox.isMobile ? 600 : 250))
                }), r.on("keydown.fb", function(e) {
                    var t = (g.fancybox ? g.fancybox.getInstance() : null).current,
                        n = e.keyCode || e.which;
                    if (9 != n) return !t.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || g(e.target).is("input,textarea,video,audio,select") ? void 0 : 8 === n || 27 === n ? (e.preventDefault(), void o.close(e)) : 37 === n || 38 === n ? (e.preventDefault(), void o.previous()) : 39 === n || 40 === n ? (e.preventDefault(), void o.next()) : void o.trigger("afterKeydown", e, n);
                    t.opts.trapFocus && o.focus(e)
                }), o.group[o.currIndex].opts.idleTime && (o.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function(e) {
                    o.idleSecondsCounter = 0, o.isIdle && o.showControls(), o.isIdle = !1
                }), o.idleInterval = l.setInterval(function() {
                    ++o.idleSecondsCounter >= o.group[o.currIndex].opts.idleTime && !o.isDragging && (o.isIdle = !0, o.idleSecondsCounter = 0, o.hideControls())
                }, 1e3))
            },
            removeEvents: function() {
                i.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (l.clearInterval(this.idleInterval), this.idleInterval = null)
            },
            previous: function(e) {
                return this.jumpTo(this.currPos - 1, e)
            },
            next: function(e) {
                return this.jumpTo(this.currPos + 1, e)
            },
            jumpTo: function(e, o) {
                var t, n, i, r, s, a, l, c, u, f = this,
                    d = f.group.length;
                if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
                    if (e = parseInt(e, 10), !(i = f.current ? f.current.opts.loop : f.opts.loop) && (e < 0 || d <= e)) return !1;
                    if (t = f.firstRun = !Object.keys(f.slides).length, s = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, r = f.createSlide(e), 1 < d && ((i || r.index < d - 1) && f.createSlide(e + 1), (i || 0 < r.index) && f.createSlide(e - 1)), f.current = r, f.currIndex = r.index, f.currPos = r.pos, f.trigger("beforeShow", t), f.updateControls(), r.forcedDuration = void 0, g.isNumeric(o) ? r.forcedDuration = o : o = r.opts[t ? "animationDuration" : "transitionDuration"], o = parseInt(o, 10), n = f.isMoved(r), r.$slide.addClass("fancybox-slide--current"), t) return r.opts.animationEffect && o && f.$refs.container.css("transition-duration", o + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(r), void f.preload("image");
                    a = g.fancybox.getTranslate(s.$slide), l = g.fancybox.getTranslate(f.$refs.stage), g.each(f.slides, function(e, t) {
                        g.fancybox.stop(t.$slide, !0)
                    }), s.pos !== r.pos && (s.isComplete = !1), s.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), n ? (u = a.left - (s.pos * a.width + s.pos * s.opts.gutter), g.each(f.slides, function(e, t) {
                        t.$slide.removeClass("fancybox-animated").removeClass(function(e, t) {
                            return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                        });
                        var n = t.pos * a.width + t.pos * t.opts.gutter;
                        g.fancybox.setTranslate(t.$slide, {
                            top: 0,
                            left: n - l.left + u
                        }), t.pos !== r.pos && t.$slide.addClass("fancybox-slide--" + (t.pos > r.pos ? "next" : "previous")), h(t.$slide), g.fancybox.animate(t.$slide, {
                            top: 0,
                            left: (t.pos - r.pos) * a.width + (t.pos - r.pos) * t.opts.gutter
                        }, o, function() {
                            t.$slide.css({
                                transform: "",
                                opacity: ""
                            }).removeClass("fancybox-slide--next fancybox-slide--previous"), t.pos === f.currPos && f.complete()
                        })
                    })) : o && r.opts.transitionEffect && (c = "fancybox-animated fancybox-fx-" + r.opts.transitionEffect, s.$slide.addClass("fancybox-slide--" + (s.pos > r.pos ? "next" : "previous")), g.fancybox.animate(s.$slide, c, o, function() {
                        s.$slide.removeClass(c).removeClass("fancybox-slide--next fancybox-slide--previous")
                    }, !1)), r.isLoaded ? f.revealContent(r) : f.loadSlide(r), f.preload("image")
                }
            },
            createSlide: function(e) {
                var t, n = this,
                    o = e % n.group.length;
                return o = o < 0 ? n.group.length + o : o, !n.slides[e] && n.group[o] && (t = g('<div class="fancybox-slide"></div>').appendTo(n.$refs.stage), n.slides[e] = g.extend(!0, {}, n.group[o], {
                    pos: e,
                    $slide: t,
                    isLoaded: !1
                }), n.updateSlide(n.slides[e])), n.slides[e]
            },
            scaleToActual: function(e, t, n) {
                var o, i, r, s, a, l = this,
                    c = l.current,
                    u = c.$content,
                    f = g.fancybox.getTranslate(c.$slide).width,
                    d = g.fancybox.getTranslate(c.$slide).height,
                    h = c.width,
                    p = c.height;
                l.isAnimating || l.isMoved() || !u || "image" != c.type || !c.isLoaded || c.hasError || (l.isAnimating = !0, g.fancybox.stop(u), e = void 0 === e ? .5 * f : e, t = void 0 === t ? .5 * d : t, (o = g.fancybox.getTranslate(u)).top -= g.fancybox.getTranslate(c.$slide).top, o.left -= g.fancybox.getTranslate(c.$slide).left, s = h / o.width, a = p / o.height, i = .5 * f - .5 * h, r = .5 * d - .5 * p, f < h && (0 < (i = o.left * s - (e * s - e)) && (i = 0), i < f - h && (i = f - h)), d < p && (0 < (r = o.top * a - (t * a - t)) && (r = 0), r < d - p && (r = d - p)), l.updateCursor(h, p), g.fancybox.animate(u, {
                    top: r,
                    left: i,
                    scaleX: s,
                    scaleY: a
                }, n || 366, function() {
                    l.isAnimating = !1
                }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop())
            },
            scaleToFit: function(e) {
                var t, n = this,
                    o = n.current,
                    i = o.$content;
                n.isAnimating || n.isMoved() || !i || "image" != o.type || !o.isLoaded || o.hasError || (n.isAnimating = !0, g.fancybox.stop(i), t = n.getFitPos(o), n.updateCursor(t.width, t.height), g.fancybox.animate(i, {
                    top: t.top,
                    left: t.left,
                    scaleX: t.width / i.width(),
                    scaleY: t.height / i.height()
                }, e || 366, function() {
                    n.isAnimating = !1
                }))
            },
            getFitPos: function(e) {
                var t, n, o, i, r = e.$content,
                    s = e.$slide,
                    a = e.width || e.opts.width,
                    l = e.height || e.opts.height,
                    c = {};
                return !!(e.isLoaded && r && r.length) && (t = g.fancybox.getTranslate(this.$refs.stage).width, n = g.fancybox.getTranslate(this.$refs.stage).height, t -= parseFloat(s.css("paddingLeft")) + parseFloat(s.css("paddingRight")) + parseFloat(r.css("marginLeft")) + parseFloat(r.css("marginRight")), n -= parseFloat(s.css("paddingTop")) + parseFloat(s.css("paddingBottom")) + parseFloat(r.css("marginTop")) + parseFloat(r.css("marginBottom")), a && l || (a = t, l = n), t - .5 < (a *= o = Math.min(1, t / a, n / l)) && (a = t), n - .5 < (l *= o) && (l = n), "image" === e.type ? (c.top = Math.floor(.5 * (n - l)) + parseFloat(s.css("paddingTop")), c.left = Math.floor(.5 * (t - a)) + parseFloat(s.css("paddingLeft"))) : "video" === e.contentType && (a / (i = e.opts.width && e.opts.height ? a / l : e.opts.ratio || 16 / 9) < l ? l = a / i : l * i < a && (a = l * i)), c.width = a, c.height = l, c)
            },
            update: function(n) {
                var o = this;
                g.each(o.slides, function(e, t) {
                    o.updateSlide(t, n)
                })
            },
            updateSlide: function(e, t) {
                var n = this,
                    o = e && e.$content,
                    i = e.width || e.opts.width,
                    r = e.height || e.opts.height,
                    s = e.$slide;
                n.adjustCaption(e), o && (i || r || "video" === e.contentType) && !e.hasError && (g.fancybox.stop(o), g.fancybox.setTranslate(o, n.getFitPos(e)), e.pos === n.currPos && (n.isAnimating = !1, n.updateCursor())), n.adjustLayout(e), s.length && (s.trigger("refresh"), e.pos === n.currPos && n.$refs.toolbar.add(n.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", s.get(0).scrollHeight > s.get(0).clientHeight)), n.trigger("onUpdate", e, t)
            },
            centerSlide: function(e) {
                var t = this,
                    n = t.current,
                    o = n.$slide;
                !t.isClosing && n && (o.siblings().css({
                    transform: "",
                    opacity: ""
                }), o.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), g.fancybox.animate(o, {
                    top: 0,
                    left: 0,
                    opacity: 1
                }, void 0 === e ? 0 : e, function() {
                    o.css({
                        transform: "",
                        opacity: ""
                    }), n.isComplete || t.complete()
                }, !1))
            },
            isMoved: function(e) {
                var t, n, o = e || this.current;
                return !!o && (n = g.fancybox.getTranslate(this.$refs.stage), t = g.fancybox.getTranslate(o.$slide), !o.$slide.hasClass("fancybox-animated") && (.5 < Math.abs(t.top - n.top) || .5 < Math.abs(t.left - n.left)))
            },
            updateCursor: function(e, t) {
                var n, o, i = this.current,
                    r = this.$refs.container;
                i && !this.isClosing && this.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = !!(n = this.canPan(e, t)) || this.isZoomable(), r.toggleClass("fancybox-is-zoomable", o), g("[data-fancybox-zoom]").prop("disabled", !o), n ? r.addClass("fancybox-can-pan") : o && ("zoom" === i.opts.clickContent || g.isFunction(i.opts.clickContent) && "zoom" == i.opts.clickContent(i)) ? r.addClass("fancybox-can-zoomIn") : i.opts.touch && (i.opts.touch.vertical || 1 < this.group.length) && "video" !== i.contentType && r.addClass("fancybox-can-swipe"))
            },
            isZoomable: function() {
                var e, t = this.current;
                if (t && !this.isClosing && "image" === t.type && !t.hasError) {
                    if (!t.isLoaded) return !0;
                    if ((e = this.getFitPos(t)) && (t.width > e.width || t.height > e.height)) return !0
                }
                return !1
            },
            isScaledDown: function(e, t) {
                var n = !1,
                    o = this.current,
                    i = o.$content;
                return void 0 !== e && void 0 !== t ? n = e < o.width && t < o.height : i && (n = (n = g.fancybox.getTranslate(i)).width < o.width && n.height < o.height), n
            },
            canPan: function(e, t) {
                var n = this.current,
                    o = null,
                    i = !1;
                return "image" === n.type && (n.isComplete || e && t) && !n.hasError && (i = this.getFitPos(n), void 0 !== e && void 0 !== t ? o = {
                    width: e,
                    height: t
                } : n.isComplete && (o = g.fancybox.getTranslate(n.$content)), o && i && (i = 1.5 < Math.abs(o.width - i.width) || 1.5 < Math.abs(o.height - i.height))), i
            },
            loadSlide: function(n) {
                var e, t, o, i = this;
                if (!n.isLoading && !n.isLoaded) {
                    if (!(n.isLoading = !0) === i.trigger("beforeLoad", n)) return n.isLoading = !1;
                    switch (e = n.type, (t = n.$slide).off("refresh").trigger("onReset").addClass(n.opts.slideClass), e) {
                        case "image":
                            i.setImage(n);
                            break;
                        case "iframe":
                            i.setIframe(n);
                            break;
                        case "html":
                            i.setContent(n, n.src || n.content);
                            break;
                        case "video":
                            i.setContent(n, n.opts.video.tpl.replace(/\{\{src\}\}/gi, n.src).replace("{{format}}", n.opts.videoFormat || n.opts.video.format || "").replace("{{poster}}", n.thumb || ""));
                            break;
                        case "inline":
                            g(n.src).length ? i.setContent(n, g(n.src)) : i.setError(n);
                            break;
                        case "ajax":
                            i.showLoading(n), o = g.ajax(g.extend({}, n.opts.ajax.settings, {
                                url: n.src,
                                success: function(e, t) {
                                    "success" === t && i.setContent(n, e)
                                },
                                error: function(e, t) {
                                    e && "abort" !== t && i.setError(n)
                                }
                            })), t.one("onReset", function() {
                                o.abort()
                            });
                            break;
                        default:
                            i.setError(n)
                    }
                    return !0
                }
            },
            setImage: function(t) {
                var e, n = this;
                setTimeout(function() {
                    var e = t.$image;
                    n.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || n.showLoading(t)
                }, 50), n.checkSrcset(t), t.$content = g('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (e = f.createElement("img")).onerror = function() {
                    g(this).remove(), t.$ghost = null
                }, e.onload = function() {
                    n.afterLoad(t)
                }, t.$ghost = g(e).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), n.setBigImage(t)
            },
            checkSrcset: function(e) {
                var t, n, o, i, r = e.opts.srcset || e.opts.image.srcset;
                if (r) {
                    o = l.devicePixelRatio || 1, i = l.innerWidth * o, (n = r.split(",").map(function(e) {
                        var o = {};
                        return e.trim().split(/\s+/).forEach(function(e, t) {
                            var n = parseInt(e.substring(0, e.length - 1), 10);
                            if (0 === t) return o.url = e;
                            n && (o.value = n, o.postfix = e[e.length - 1])
                        }), o
                    })).sort(function(e, t) {
                        return e.value - t.value
                    });
                    for (var s = 0; s < n.length; s++) {
                        var a = n[s];
                        if ("w" === a.postfix && a.value >= i || "x" === a.postfix && a.value >= o) {
                            t = a;
                            break
                        }
                    }!t && n.length && (t = n[n.length - 1]), t && (e.src = t.url, e.width && e.height && "w" == t.postfix && (e.height = e.width / e.height * t.value, e.width = t.value), e.opts.srcset = r)
                }
            },
            setBigImage: function(t) {
                var n = this,
                    e = f.createElement("img"),
                    o = g(e);
                t.$image = o.one("error", function() {
                    n.setError(t)
                }).one("load", function() {
                    var e;
                    t.$ghost || (n.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), n.afterLoad(t)), n.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (1 < t.width / t.height && 1 < i.width() / i.height() ? "100" : Math.round(t.width / t.height * 100)) + "vw"), o.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function() {
                        t.$ghost && !n.isClosing && t.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, t.height / 1600))), n.hideLoading(t))
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (e.complete || "complete" == e.readyState) && o.naturalWidth && o.naturalHeight ? o.trigger("load") : e.error && o.trigger("error")
            },
            resolveImageSlideSize: function(e, t, n) {
                var o = parseInt(e.opts.width, 10),
                    i = parseInt(e.opts.height, 10);
                e.width = t, e.height = n, 0 < o && (e.width = o, e.height = Math.floor(o * n / t)), 0 < i && (e.width = Math.floor(i * t / n), e.height = i)
            },
            setIframe: function(i) {
                var r, t = this,
                    s = i.opts.iframe,
                    a = i.$slide;
                i.$content = g('<div class="fancybox-content' + (s.preload ? " fancybox-is-hidden" : "") + '"></div>').css(s.css).appendTo(a), a.addClass("fancybox-slide--" + i.contentType), i.$iframe = r = g(s.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(s.attr).appendTo(i.$content), s.preload ? (t.showLoading(i), r.on("load.fb error.fb", function(e) {
                    this.isReady = 1, i.$slide.trigger("refresh"), t.afterLoad(i)
                }), a.on("refresh.fb", function() {
                    var e, t = i.$content,
                        n = s.css.width,
                        o = s.css.height;
                    if (1 === r[0].isReady) {
                        try {
                            e = r.contents().find("body")
                        } catch (e) {}
                        e && e.length && e.children().length && (a.css("overflow", "visible"), t.css({
                            width: "100%",
                            "max-width": "100%",
                            height: "9999px"
                        }), void 0 === n && (n = Math.ceil(Math.max(e[0].clientWidth, e.outerWidth(!0)))), t.css("width", n || "").css("max-width", ""), void 0 === o && (o = Math.ceil(Math.max(e[0].clientHeight, e.outerHeight(!0)))), t.css("height", o || ""), a.css("overflow", "auto")), t.removeClass("fancybox-is-hidden")
                    }
                })) : t.afterLoad(i), r.attr("src", i.src), a.one("onReset", function() {
                    try {
                        g(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                    } catch (e) {}
                    g(this).off("refresh.fb").empty(), i.isLoaded = !1, i.isRevealed = !1
                })
            },
            setContent: function(e, t) {
                var n;
                this.isClosing || (this.hideLoading(e), e.$content && g.fancybox.stop(e.$content), e.$slide.empty(), (n = t) && n.hasOwnProperty && n instanceof g && t.parent().length ? ((t.hasClass("fancybox-content") || t.parent().hasClass("fancybox-content")) && t.parents(".fancybox-slide").trigger("onReset"), e.$placeholder = g("<div>").hide().insertAfter(t), t.css("display", "inline-block")) : e.hasError || ("string" === g.type(t) && (t = g("<div>").append(g.trim(t)).contents()), e.opts.filter && (t = g("<div>").html(t).find(e.opts.filter))), e.$slide.one("onReset", function() {
                    g(this).find("video,audio").trigger("pause"), e.$placeholder && (e.$placeholder.after(t.removeClass("fancybox-content").hide()).remove(), e.$placeholder = null), e.$smallBtn && (e.$smallBtn.remove(), e.$smallBtn = null), e.hasError || (g(this).empty(), e.isLoaded = !1, e.isRevealed = !1)
                }), g(t).appendTo(e.$slide), g(t).is("video,audio") && (g(t).addClass("fancybox-video"), g(t).wrap("<div></div>"), e.contentType = "video", e.opts.width = e.opts.width || g(t).attr("width"), e.opts.height = e.opts.height || g(t).attr("height")), e.$content = e.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), e.$content.siblings().hide(), e.$content.length || (e.$content = e.$slide.wrapInner("<div></div>").children().first()), e.$content.addClass("fancybox-content"), e.$slide.addClass("fancybox-slide--" + e.contentType), this.afterLoad(e))
            },
            setError: function(e) {
                e.hasError = !0, e.$slide.trigger("onReset").removeClass("fancybox-slide--" + e.contentType).addClass("fancybox-slide--error"), e.contentType = "html", this.setContent(e, this.translate(e, e.opts.errorTpl)), e.pos === this.currPos && (this.isAnimating = !1)
            },
            showLoading: function(e) {
                (e = e || this.current) && !e.$spinner && (e.$spinner = g(this.translate(this, this.opts.spinnerTpl)).appendTo(e.$slide).hide().fadeIn("fast"))
            },
            hideLoading: function(e) {
                (e = e || this.current) && e.$spinner && (e.$spinner.stop().remove(), delete e.$spinner)
            },
            afterLoad: function(e) {
                this.isClosing || (e.isLoading = !1, e.isLoaded = !0, this.trigger("afterLoad", e), this.hideLoading(e), !e.opts.smallBtn || e.$smallBtn && e.$smallBtn.length || (e.$smallBtn = g(this.translate(e, e.opts.btnTpl.smallBtn)).appendTo(e.$content)), e.opts.protect && e.$content && !e.hasError && (e.$content.on("contextmenu.fb", function(e) {
                    return 2 == e.button && e.preventDefault(), !0
                }), "image" === e.type && g('<div class="fancybox-spaceball"></div>').appendTo(e.$content)), this.adjustCaption(e), this.adjustLayout(e), e.pos === this.currPos && this.updateCursor(), this.revealContent(e))
            },
            adjustCaption: function(e) {
                var t, n = e || this.current,
                    o = n.opts.caption,
                    i = n.opts.preventCaptionOverlap,
                    r = this.$refs.caption,
                    s = !1;
                r.toggleClass("fancybox-caption--separate", i), i && o && o.length && (n.pos !== this.currPos ? ((t = r.clone().appendTo(r.parent())).children().eq(0).empty().html(o), s = t.outerHeight(!0), t.empty().remove()) : this.$caption && (s = this.$caption.outerHeight(!0)), n.$slide.css("padding-bottom", s || ""))
            },
            adjustLayout: function(e) {
                var t, n, o, i, r = e || this.current;
                r.isLoaded && !0 !== r.opts.disableLayoutFix && (r.$content.css("margin-bottom", ""), r.$content.outerHeight() > r.$slide.height() + .5 && (o = r.$slide[0].style["padding-bottom"], i = r.$slide.css("padding-bottom"), 0 < parseFloat(i) && (t = r.$slide[0].scrollHeight, r.$slide.css("padding-bottom", 0), Math.abs(t - r.$slide[0].scrollHeight) < 1 && (n = i), r.$slide.css("padding-bottom", o))), r.$content.css("margin-bottom", n))
            },
            revealContent: function(e) {
                var t, n, o, i, r = this,
                    s = e.$slide,
                    a = !1,
                    l = !1,
                    c = r.isMoved(e),
                    u = e.isRevealed;
                return e.isRevealed = !0, t = e.opts[r.firstRun ? "animationEffect" : "transitionEffect"], o = e.opts[r.firstRun ? "animationDuration" : "transitionDuration"], o = parseInt(void 0 === e.forcedDuration ? o : e.forcedDuration, 10), !c && e.pos === r.currPos && o || (t = !1), "zoom" === t && (e.pos === r.currPos && o && "image" === e.type && !e.hasError && (l = r.getThumbPos(e)) ? a = r.getFitPos(e) : t = "fade"), "zoom" === t ? (r.isAnimating = !0, a.scaleX = a.width / l.width, a.scaleY = a.height / l.height, "auto" == (i = e.opts.zoomOpacity) && (i = .1 < Math.abs(e.width / e.height - l.width / l.height)), i && (l.opacity = .1, a.opacity = 1), g.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), l), h(e.$content), void g.fancybox.animate(e.$content, a, o, function() {
                    r.isAnimating = !1, r.complete()
                })) : (r.updateSlide(e), t ? (g.fancybox.stop(s), n = "fancybox-slide--" + (e.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + t, s.addClass(n).removeClass("fancybox-slide--current"), e.$content.removeClass("fancybox-is-hidden"), h(s), "image" !== e.type && e.$content.hide().show(0), void g.fancybox.animate(s, "fancybox-slide--current", o, function() {
                    s.removeClass(n).css({
                        transform: "",
                        opacity: ""
                    }), e.pos === r.currPos && r.complete()
                }, !0)) : (e.$content.removeClass("fancybox-is-hidden"), u || !c || "image" !== e.type || e.hasError || e.$content.hide().fadeIn("fast"), void(e.pos === r.currPos && r.complete())))
            },
            getThumbPos: function(e) {
                var t, n, o, i, r, s, a, l, c, u = e.$thumb;
                return !(!u || (!(a = u[0]) || a.ownerDocument !== f || (g(".fancybox-container").css("pointer-events", "none"), l = {
                    x: a.getBoundingClientRect().left + a.offsetWidth / 2,
                    y: a.getBoundingClientRect().top + a.offsetHeight / 2
                }, c = f.elementFromPoint(l.x, l.y) === a, g(".fancybox-container").css("pointer-events", ""), !c))) && (t = g.fancybox.getTranslate(u), n = parseFloat(u.css("border-top-width") || 0), o = parseFloat(u.css("border-right-width") || 0), i = parseFloat(u.css("border-bottom-width") || 0), r = parseFloat(u.css("border-left-width") || 0), s = {
                    top: t.top + n,
                    left: t.left + r,
                    width: t.width - o - r,
                    height: t.height - n - i,
                    scaleX: 1,
                    scaleY: 1
                }, 0 < t.width && 0 < t.height && s)
            },
            complete: function() {
                var e, n = this,
                    t = n.current,
                    o = {};
                !n.isMoved() && t.isLoaded && (t.isComplete || (t.isComplete = !0, t.$slide.siblings().trigger("onReset"), n.preload("inline"), h(t.$slide), t.$slide.addClass("fancybox-slide--complete"), g.each(n.slides, function(e, t) {
                    t.pos >= n.currPos - 1 && t.pos <= n.currPos + 1 ? o[t.pos] = t : t && (g.fancybox.stop(t.$slide), t.$slide.off().remove())
                }), n.slides = o), n.isAnimating = !1, n.updateCursor(), n.trigger("afterShow"), t.opts.video.autoStart && t.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function() {
                    Document.exitFullscreen ? Document.exitFullscreen() : this.webkitExitFullscreen && this.webkitExitFullscreen(), n.next()
                }), t.opts.autoFocus && "html" === t.contentType && ((e = t.$content.find("input[autofocus]:enabled:visible:first")).length ? e.trigger("focus") : n.focus(null, !0)), t.$slide.scrollTop(0).scrollLeft(0))
            },
            preload: function(e) {
                var t, n;
                this.group.length < 2 || (n = this.slides[this.currPos + 1], (t = this.slides[this.currPos - 1]) && t.type === e && this.loadSlide(t), n && n.type === e && this.loadSlide(n))
            },
            focus: function(e, t) {
                var n, o, i = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                this.isClosing || ((n = (n = !e && this.current && this.current.isComplete ? this.current.$slide.find("*:visible" + (t ? ":not(.fancybox-close-small)" : "")) : this.$refs.container.find("*:visible")).filter(i).filter(function() {
                    return "hidden" !== g(this).css("visibility") && !g(this).hasClass("disabled")
                })).length ? (o = n.index(f.activeElement), e && e.shiftKey ? (o < 0 || 0 == o) && (e.preventDefault(), n.eq(n.length - 1).trigger("focus")) : (o < 0 || o == n.length - 1) && (e && e.preventDefault(), n.eq(0).trigger("focus"))) : this.$refs.container.trigger("focus"))
            },
            activate: function() {
                var t = this;
                g(".fancybox-container").each(function() {
                    var e = g(this).data("FancyBox");
                    e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
            },
            close: function(e, t) {
                function n() {
                    u.cleanUp(e)
                }
                var o, i, r, s, a, l, c, u = this,
                    f = u.current;
                return !u.isClosing && (!(u.isClosing = !0) === u.trigger("beforeClose", e) ? (u.isClosing = !1, d(function() {
                    u.update()
                }), !1) : (u.removeEvents(), r = f.$content, o = f.opts.animationEffect, i = g.isNumeric(t) ? t : o ? f.opts.animationDuration : 0, f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== e ? g.fancybox.stop(f.$slide) : o = !1, f.$slide.siblings().trigger("onReset").remove(), i && u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", i + "ms"), u.hideLoading(f), u.hideControls(!0), u.updateCursor(), "zoom" !== o || r && i && "image" === f.type && !u.isMoved() && !f.hasError && (c = u.getThumbPos(f)) || (o = "fade"), "zoom" === o ? (g.fancybox.stop(r), l = {
                    top: (s = g.fancybox.getTranslate(r)).top,
                    left: s.left,
                    scaleX: s.width / c.width,
                    scaleY: s.height / c.height,
                    width: c.width,
                    height: c.height
                }, "auto" == (a = f.opts.zoomOpacity) && (a = .1 < Math.abs(f.width / f.height - c.width / c.height)), a && (c.opacity = 0), g.fancybox.setTranslate(r, l), h(r), g.fancybox.animate(r, c, i, n)) : o && i ? g.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + o, i, n) : !0 === e ? setTimeout(n, i) : n(), !0))
            },
            cleanUp: function(e) {
                var t, n, o, i = this.current.opts.$orig;
                this.current.$slide.trigger("onReset"), this.$refs.container.empty().remove(), this.trigger("afterClose", e), this.current.opts.backFocus && (i && i.length && i.is(":visible") || (i = this.$trigger), i && i.length && (n = l.scrollX, o = l.scrollY, i.trigger("focus"), g("html, body").scrollTop(o).scrollLeft(n))), this.current = null, (t = g.fancybox.getInstance()) ? t.activate() : (g("body").removeClass("fancybox-active compensate-for-scrollbar"), g("#fancybox-style-noscroll").remove())
            },
            trigger: function(e, t) {
                var n, o = Array.prototype.slice.call(arguments, 1),
                    i = t && t.opts ? t : this.current;
                if (i ? o.unshift(i) : i = this, o.unshift(this), g.isFunction(i.opts[e]) && (n = i.opts[e].apply(i, o)), !1 === n) return n;
                "afterClose" !== e && this.$refs ? this.$refs.container.trigger(e + ".fb", o) : r.trigger(e + ".fb", o)
            },
            updateControls: function() {
                var e = this,
                    t = e.current,
                    n = t.index,
                    o = e.$refs.container,
                    i = e.$refs.caption,
                    r = t.opts.caption;
                t.$slide.trigger("refresh"), r && r.length ? (e.$caption = i).children().eq(0).html(r) : e.$caption = null, e.hasHiddenControls || e.isIdle || e.showControls(), o.find("[data-fancybox-count]").html(e.group.length), o.find("[data-fancybox-index]").html(n + 1), o.find("[data-fancybox-prev]").prop("disabled", !t.opts.loop && n <= 0), o.find("[data-fancybox-next]").prop("disabled", !t.opts.loop && n >= e.group.length - 1), "image" === t.type ? o.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", t.opts.image.src || t.src).show() : t.opts.toolbar && o.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), g(f.activeElement).is(":hidden,[disabled]") && e.$refs.container.trigger("focus")
            },
            hideControls: function(e) {
                var t = ["infobar", "toolbar", "nav"];
                !e && this.current.opts.preventCaptionOverlap || t.push("caption"), this.$refs.container.removeClass(t.map(function(e) {
                    return "fancybox-show-" + e
                }).join(" ")), this.hasHiddenControls = !0
            },
            showControls: function() {
                var e = this.current ? this.current.opts : this.opts,
                    t = this.$refs.container;
                this.hasHiddenControls = !1, this.idleSecondsCounter = 0, t.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && 1 < this.group.length)).toggleClass("fancybox-show-caption", !!this.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && 1 < this.group.length)).toggleClass("fancybox-is-modal", !!e.modal)
            },
            toggleControls: function() {
                this.hasHiddenControls ? this.showControls() : this.hideControls()
            }
        }), g.fancybox = {
            version: "3.5.7",
            defaults: e,
            getInstance: function(e) {
                var t = g('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                    n = Array.prototype.slice.call(arguments, 1);
                return t instanceof o && ("string" === g.type(e) ? t[e].apply(t, n) : "function" === g.type(e) && e.apply(t, n), t)
            },
            open: function(e, t, n) {
                return new o(e, t, n)
            },
            close: function(e) {
                var t = this.getInstance();
                t && (t.close(), !0 === e && this.close(e))
            },
            destroy: function() {
                this.close(!0), r.add("body").off("click.fb-start", "**")
            },
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: (p = f.createElement("div"), l.getComputedStyle && l.getComputedStyle(p) && l.getComputedStyle(p).getPropertyValue("transform") && !(f.documentMode && f.documentMode < 11)),
            getTranslate: function(e) {
                var t;
                return !(!e || !e.length) && {
                    top: (t = e[0].getBoundingClientRect()).top || 0,
                    left: t.left || 0,
                    width: t.width,
                    height: t.height,
                    opacity: parseFloat(e.css("opacity"))
                }
            },
            setTranslate: function(e, t) {
                var n = "",
                    o = {};
                if (e && t) return void 0 === t.left && void 0 === t.top || (n = (void 0 === t.left ? e.position().left : t.left) + "px, " + (void 0 === t.top ? e.position().top : t.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), void 0 !== t.scaleX && void 0 !== t.scaleY ? n += " scale(" + t.scaleX + ", " + t.scaleY + ")" : void 0 !== t.scaleX && (n += " scaleX(" + t.scaleX + ")"), n.length && (o.transform = n), void 0 !== t.opacity && (o.opacity = t.opacity), void 0 !== t.width && (o.width = t.width), void 0 !== t.height && (o.height = t.height), e.css(o)
            },
            animate: function(t, n, o, i, r) {
                var s, a = this;
                g.isFunction(o) && (i = o, o = null), a.stop(t), s = a.getTranslate(t), t.on(c, function(e) {
                    e && e.originalEvent && (!t.is(e.originalEvent.target) || "z-index" == e.originalEvent.propertyName) || (a.stop(t), g.isNumeric(o) && t.css("transition-duration", ""), g.isPlainObject(n) ? void 0 !== n.scaleX && void 0 !== n.scaleY && a.setTranslate(t, {
                        top: n.top,
                        left: n.left,
                        width: s.width * n.scaleX,
                        height: s.height * n.scaleY,
                        scaleX: 1,
                        scaleY: 1
                    }) : !0 !== r && t.removeClass(n), g.isFunction(i) && i(e))
                }), g.isNumeric(o) && t.css("transition-duration", o + "ms"), g.isPlainObject(n) ? (void 0 !== n.scaleX && void 0 !== n.scaleY && (delete n.width, delete n.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), g.fancybox.setTranslate(t, n)) : t.addClass(n), t.data("timer", setTimeout(function() {
                    t.trigger(c)
                }, o + 33))
            },
            stop: function(e, t) {
                e && e.length && (clearTimeout(e.data("timer")), t && e.trigger(c), e.off(c).css("transition-duration", ""), e.parent().removeClass("fancybox-is-scaling"))
            }
        }, g.fn.fancybox = function(e) {
            var t;
            return (t = (e = e || {}).selector || !1) ? g("body").off("click.fb-start", t).on("click.fb-start", t, {
                options: e
            }, n) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: e
            }, n), this
        }, r.on("click.fb-start", "[data-fancybox]", n), r.on("click.fb-start", "[data-fancybox-trigger]", function(e) {
            g('[data-fancybox="' + g(this).attr("data-fancybox-trigger") + '"]').eq(g(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
                $trigger: g(this)
            })
        }), a = null, r.on("mousedown mouseup focus blur", ".fancybox-button", function(e) {
            switch (e.type) {
                case "mousedown":
                    a = g(this);
                    break;
                case "mouseup":
                    a = null;
                    break;
                case "focusin":
                    g(".fancybox-button").removeClass("fancybox-focus"), g(this).is(a) || g(this).is("[disabled]") || g(this).addClass("fancybox-focus");
                    break;
                case "focusout":
                    g(".fancybox-button").removeClass("fancybox-focus")
            }
        })
    }
    var a, p
}(window, document, jQuery),
function(h) {
    function p(n, e, t) {
        if (n) return t = t || "", "object" === h.type(t) && (t = h.param(t, !0)), h.each(e, function(e, t) {
            n = n.replace("$" + e, t || "")
        }), t.length && (n += (0 < n.indexOf("?") ? "&" : "?") + t), n
    }
    var o = {
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
            url: function(e) {
                return "//maps.google." + e[2] + "/?ll=" + (e[9] ? e[9] + "&z=" + Math.floor(e[10]) + (e[12] ? e[12].replace(/^\//, "&") : "") : e[12] + "").replace(/\?/, "&") + "&output=" + (e[12] && 0 < e[12].indexOf("layer=c") ? "svembed" : "embed")
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function(e) {
                return "//maps.google." + e[2] + "/maps?q=" + e[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
        }
    };
    h(document).on("objectNeedsType.fb", function(e, t, i) {
        var r, s, a, l, c, u, f = i.src || "",
            d = !1,
            n = h.extend(!0, {}, o, i.opts.media);
        h.each(n, function(e, t) {
            if (s = f.match(t.matcher)) {
                if (d = t.type, u = e, c = {}, t.paramPlace && s[t.paramPlace]) {
                    "?" == (l = s[t.paramPlace])[0] && (l = l.substring(1)), l = l.split("&");
                    for (var n = 0; n < l.length; ++n) {
                        var o = l[n].split("=", 2);
                        2 == o.length && (c[o[0]] = decodeURIComponent(o[1].replace(/\+/g, " ")))
                    }
                }
                return a = h.extend(!0, {}, t.params, i.opts[e], c), f = "function" === h.type(t.url) ? t.url.call(this, s, a, i) : p(t.url, s, a), r = "function" === h.type(t.thumb) ? t.thumb.call(this, s, a, i) : p(t.thumb, s), "youtube" === e ? f = f.replace(/&t=((\d+)m)?(\d+)s/, function(e, t, n, o) {
                    return "&start=" + ((n ? 60 * parseInt(n, 10) : 0) + parseInt(o, 10))
                }) : "vimeo" === e && (f = f.replace("&%23", "#")), !1
            }
        }), d ? (i.opts.thumb || i.opts.$thumb && i.opts.$thumb.length || (i.opts.thumb = r), "iframe" === d && (i.opts = h.extend(!0, i.opts, {
            iframe: {
                preload: !1,
                attr: {
                    scrolling: "no"
                }
            }
        })), h.extend(i, {
            type: d,
            src: f,
            origSrc: i.src,
            contentSource: u,
            contentType: "image" === d ? "image" : "gmap_place" == u || "gmap_search" == u ? "map" : "video"
        })) : f && (i.type = i.opts.defaultType)
    });
    var i = {
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
        load: function(e) {
            var t, n = this;
            this[e].loaded ? setTimeout(function() {
                n.done(e)
            }) : this[e].loading || (this[e].loading = !0, (t = document.createElement("script")).type = "text/javascript", t.src = this[e].src, "youtube" === e ? window.onYouTubeIframeAPIReady = function() {
                n[e].loaded = !0, n.done(e)
            } : t.onload = function() {
                n[e].loaded = !0, n.done(e)
            }, document.body.appendChild(t))
        },
        done: function(e) {
            var t, n;
            "youtube" === e && delete window.onYouTubeIframeAPIReady, (t = h.fancybox.getInstance()) && (n = t.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(n.attr("id"), {
                events: {
                    onStateChange: function(e) {
                        0 == e.data && t.next()
                    }
                }
            }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(n).on("ended", function() {
                t.next()
            }))
        }
    };
    h(document).on({
        "afterShow.fb": function(e, t, n) {
            1 < t.group.length && ("youtube" === n.contentSource || "vimeo" === n.contentSource) && i.load(n.contentSource)
        }
    })
}(jQuery),
function(g, l, m) {
    function u(e) {
        var t = [];
        for (var n in e = (e = e.originalEvent || e || g.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e]) e[n].pageX ? t.push({
            x: e[n].pageX,
            y: e[n].pageY
        }) : e[n].clientX && t.push({
            x: e[n].clientX,
            y: e[n].clientY
        });
        return t
    }

    function v(e, t, n) {
        return t && e ? "x" === n ? e.x - t.x : "y" === n ? e.y - t.y : Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)) : 0
    }

    function c(e) {
        if (e.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || m.isFunction(e.get(0).onclick) || e.data("selectable")) return 1;
        for (var t = 0, n = e[0].attributes, o = n.length; t < o; t++)
            if ("data-fancybox-" === n[t].nodeName.substr(0, 14)) return 1
    }

    function f(e) {
        for (var t, n, o, i, r, s = !1;
            (t = e.get(0), r = i = o = n = void 0, n = g.getComputedStyle(t)["overflow-y"], o = g.getComputedStyle(t)["overflow-x"], i = ("scroll" === n || "auto" === n) && t.scrollHeight > t.clientHeight, r = ("scroll" === o || "auto" === o) && t.scrollWidth > t.clientWidth, !(s = i || r)) && ((e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body")););
        return s
    }

    function n(e) {
        this.instance = e, this.$bg = e.$refs.bg, this.$stage = e.$refs.stage, this.$container = e.$refs.container, this.destroy(), this.$container.on("touchstart.fb.touch mousedown.fb.touch", m.proxy(this, "ontouchstart"))
    }
    var y = g.requestAnimationFrame || g.webkitRequestAnimationFrame || g.mozRequestAnimationFrame || g.oRequestAnimationFrame || function(e) {
            return g.setTimeout(e, 1e3 / 60)
        },
        b = g.cancelAnimationFrame || g.webkitCancelAnimationFrame || g.mozCancelAnimationFrame || g.oCancelAnimationFrame || function(e) {
            g.clearTimeout(e)
        };
    n.prototype.destroy = function() {
        this.$container.off(".fb.touch"), m(l).off(".fb.touch"), this.requestId && (b(this.requestId), this.requestId = null), this.tapped && (clearTimeout(this.tapped), this.tapped = null)
    }, n.prototype.ontouchstart = function(e) {
        var t = this,
            n = m(e.target),
            o = t.instance,
            i = o.current,
            r = i.$slide,
            s = i.$content,
            a = "touchstart" == e.type;
        if (a && t.$container.off("mousedown.fb.touch"), (!e.originalEvent || 2 != e.originalEvent.button) && r.length && n.length && !c(n) && !c(n.parent()) && (n.is("img") || !(e.originalEvent.clientX > n[0].clientWidth + n.offset().left))) {
            if (!i || o.isAnimating || i.$slide.hasClass("fancybox-animated")) return e.stopPropagation(), void e.preventDefault();
            t.realPoints = t.startPoints = u(e), t.startPoints.length && (i.touch && e.stopPropagation(), t.startEvent = e, t.canTap = !0, t.$target = n, t.$content = s, t.opts = i.opts.touch, t.isPanning = !1, t.isSwiping = !1, t.isZooming = !1, t.isScrolling = !1, t.canPan = o.canPan(), t.startTime = (new Date).getTime(), t.distanceX = t.distanceY = t.distance = 0, t.canvasWidth = Math.round(r[0].clientWidth), t.canvasHeight = Math.round(r[0].clientHeight), t.contentLastPos = null, t.contentStartPos = m.fancybox.getTranslate(t.$content) || {
                top: 0,
                left: 0
            }, t.sliderStartPos = m.fancybox.getTranslate(r), t.stagePos = m.fancybox.getTranslate(o.$refs.stage), t.sliderStartPos.top -= t.stagePos.top, t.sliderStartPos.left -= t.stagePos.left, t.contentStartPos.top -= t.stagePos.top, t.contentStartPos.left -= t.stagePos.left, m(l).off(".fb.touch").on(a ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", m.proxy(t, "ontouchend")).on(a ? "touchmove.fb.touch" : "mousemove.fb.touch", m.proxy(t, "ontouchmove")), m.fancybox.isMobile && l.addEventListener("scroll", t.onscroll, !0), ((t.opts || t.canPan) && (n.is(t.$stage) || t.$stage.find(n).length) || (n.is(".fancybox-image") && e.preventDefault(), m.fancybox.isMobile && n.parents(".fancybox-caption").length)) && (t.isScrollable = f(n) || f(n.parent()), m.fancybox.isMobile && t.isScrollable || e.preventDefault(), 1 !== t.startPoints.length && !i.hasError || (t.canPan ? (m.fancybox.stop(t.$content), t.isPanning = !0) : t.isSwiping = !0, t.$container.addClass("fancybox-is-grabbing")), 2 === t.startPoints.length && "image" === i.type && (i.isLoaded || i.$ghost) && (t.canTap = !1, t.isSwiping = !1, t.isPanning = !1, t.isZooming = !0, m.fancybox.stop(t.$content), t.centerPointStartX = .5 * (t.startPoints[0].x + t.startPoints[1].x) - m(g).scrollLeft(), t.centerPointStartY = .5 * (t.startPoints[0].y + t.startPoints[1].y) - m(g).scrollTop(), t.percentageOfImageAtPinchPointX = (t.centerPointStartX - t.contentStartPos.left) / t.contentStartPos.width, t.percentageOfImageAtPinchPointY = (t.centerPointStartY - t.contentStartPos.top) / t.contentStartPos.height, t.startDistanceBetweenFingers = v(t.startPoints[0], t.startPoints[1]))))
        }
    }, n.prototype.onscroll = function(e) {
        this.isScrolling = !0, l.removeEventListener("scroll", this.onscroll, !0)
    }, n.prototype.ontouchmove = function(e) {
        var t = this;
        return void 0 !== e.originalEvent.buttons && 0 === e.originalEvent.buttons ? void t.ontouchend(e) : t.isScrolling ? void(t.canTap = !1) : (t.newPoints = u(e), void((t.opts || t.canPan) && t.newPoints.length && t.newPoints.length && (t.isSwiping && !0 === t.isSwiping || e.preventDefault(), t.distanceX = v(t.newPoints[0], t.startPoints[0], "x"), t.distanceY = v(t.newPoints[0], t.startPoints[0], "y"), t.distance = v(t.newPoints[0], t.startPoints[0]), 0 < t.distance && (t.isSwiping ? t.onSwipe(e) : t.isPanning ? t.onPan() : t.isZooming && t.onZoom()))))
    }, n.prototype.onSwipe = function(e) {
        var t, i = this,
            r = i.instance,
            n = i.isSwiping,
            o = i.sliderStartPos.left || 0;
        if (!0 !== n) "x" == n && (0 < i.distanceX && (i.instance.group.length < 2 || 0 === i.instance.current.index && !i.instance.current.opts.loop) ? o += Math.pow(i.distanceX, .8) : i.distanceX < 0 && (i.instance.group.length < 2 || i.instance.current.index === i.instance.group.length - 1 && !i.instance.current.opts.loop) ? o -= Math.pow(-i.distanceX, .8) : o += i.distanceX), i.sliderLastPos = {
            top: "x" == n ? 0 : i.sliderStartPos.top + i.distanceY,
            left: o
        }, i.requestId && (b(i.requestId), i.requestId = null), i.requestId = y(function() {
            i.sliderLastPos && (m.each(i.instance.slides, function(e, t) {
                var n = t.pos - i.instance.currPos;
                m.fancybox.setTranslate(t.$slide, {
                    top: i.sliderLastPos.top,
                    left: i.sliderLastPos.left + n * i.canvasWidth + n * t.opts.gutter
                })
            }), i.$container.addClass("fancybox-is-sliding"))
        });
        else if (10 < Math.abs(i.distance)) {
            if (i.canTap = !1, r.group.length < 2 && i.opts.vertical ? i.isSwiping = "y" : r.isDragging || !1 === i.opts.vertical || "auto" === i.opts.vertical && 800 < m(g).width() ? i.isSwiping = "x" : (t = Math.abs(180 * Math.atan2(i.distanceY, i.distanceX) / Math.PI), i.isSwiping = 45 < t && t < 135 ? "y" : "x"), "y" === i.isSwiping && m.fancybox.isMobile && i.isScrollable) return void(i.isScrolling = !0);
            r.isDragging = i.isSwiping, i.startPoints = i.newPoints, m.each(r.slides, function(e, t) {
                var n, o;
                m.fancybox.stop(t.$slide), n = m.fancybox.getTranslate(t.$slide), o = m.fancybox.getTranslate(r.$refs.stage), t.$slide.css({
                    transform: "",
                    opacity: "",
                    "transition-duration": ""
                }).removeClass("fancybox-animated").removeClass(function(e, t) {
                    return (t.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                }), t.pos === r.current.pos && (i.sliderStartPos.top = n.top - o.top, i.sliderStartPos.left = n.left - o.left), m.fancybox.setTranslate(t.$slide, {
                    top: n.top - o.top,
                    left: n.left - o.left
                })
            }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
        }
    }, n.prototype.onPan = function() {
        var e = this;
        v(e.newPoints[0], e.realPoints[0]) < (m.fancybox.isMobile ? 10 : 5) ? e.startPoints = e.newPoints : (e.canTap = !1, e.contentLastPos = e.limitMovement(), e.requestId && b(e.requestId), e.requestId = y(function() {
            m.fancybox.setTranslate(e.$content, e.contentLastPos)
        }))
    }, n.prototype.limitMovement = function() {
        var e = this.canvasWidth,
            t = this.canvasHeight,
            n = this.distanceX,
            o = this.distanceY,
            i = this.contentStartPos,
            r = i.left,
            s = i.top,
            a = i.width,
            l = i.height,
            c = e < a ? r + n : r,
            u = s + o,
            f = Math.max(0, .5 * e - .5 * a),
            d = Math.max(0, .5 * t - .5 * l),
            h = Math.min(e - a, .5 * e - .5 * a),
            p = Math.min(t - l, .5 * t - .5 * l);
        return 0 < n && f < c && (c = f - 1 + Math.pow(-f + r + n, .8) || 0), n < 0 && c < h && (c = h + 1 - Math.pow(h - r - n, .8) || 0), 0 < o && d < u && (u = d - 1 + Math.pow(-d + s + o, .8) || 0), o < 0 && u < p && (u = p + 1 - Math.pow(p - s - o, .8) || 0), {
            top: u,
            left: c
        }
    }, n.prototype.limitPosition = function(e, t, n, o) {
        var i = this.canvasWidth,
            r = this.canvasHeight;
        return e = i < n ? (e = 0 < e ? 0 : e) < i - n ? i - n : e : Math.max(0, i / 2 - n / 2), {
            top: t = r < o ? (t = 0 < t ? 0 : t) < r - o ? r - o : t : Math.max(0, r / 2 - o / 2),
            left: e
        }
    }, n.prototype.onZoom = function() {
        var e = this,
            t = e.contentStartPos,
            n = t.width,
            o = t.height,
            i = t.left,
            r = t.top,
            s = v(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers,
            a = Math.floor(n * s),
            l = Math.floor(o * s),
            c = (n - a) * e.percentageOfImageAtPinchPointX,
            u = (o - l) * e.percentageOfImageAtPinchPointY,
            f = (e.newPoints[0].x + e.newPoints[1].x) / 2 - m(g).scrollLeft(),
            d = (e.newPoints[0].y + e.newPoints[1].y) / 2 - m(g).scrollTop(),
            h = f - e.centerPointStartX,
            p = {
                top: r + (u + (d - e.centerPointStartY)),
                left: i + (c + h),
                scaleX: s,
                scaleY: s
            };
        e.canTap = !1, e.newWidth = a, e.newHeight = l, e.contentLastPos = p, e.requestId && b(e.requestId), e.requestId = y(function() {
            m.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }, n.prototype.ontouchend = function(e) {
        var t = this,
            n = t.isSwiping,
            o = t.isPanning,
            i = t.isZooming,
            r = t.isScrolling;
        if (t.endPoints = u(e), t.dMs = Math.max((new Date).getTime() - t.startTime, 1), t.$container.removeClass("fancybox-is-grabbing"), m(l).off(".fb.touch"), l.removeEventListener("scroll", t.onscroll, !0), t.requestId && (b(t.requestId), t.requestId = null), t.isSwiping = !1, t.isPanning = !1, t.isZooming = !1, t.isScrolling = !1, t.instance.isDragging = !1, t.canTap) return t.onTap(e);
        t.speed = 100, t.velocityX = t.distanceX / t.dMs * .5, t.velocityY = t.distanceY / t.dMs * .5, o ? t.endPanning() : i ? t.endZooming() : t.endSwiping(n, r)
    }, n.prototype.endSwiping = function(e, t) {
        var n = this,
            o = !1,
            i = n.instance.group.length,
            r = Math.abs(n.distanceX),
            s = "x" == e && 1 < i && (130 < n.dMs && 10 < r || 50 < r);
        n.sliderLastPos = null, "y" == e && !t && 50 < Math.abs(n.distanceY) ? (m.fancybox.animate(n.instance.current.$slide, {
            top: n.sliderStartPos.top + n.distanceY + 150 * n.velocityY,
            opacity: 0
        }, 200), o = n.instance.close(!0, 250)) : s && 0 < n.distanceX ? o = n.instance.previous(300) : s && n.distanceX < 0 && (o = n.instance.next(300)), !1 !== o || "x" != e && "y" != e || n.instance.centerSlide(200), n.$container.removeClass("fancybox-is-sliding")
    }, n.prototype.endPanning = function() {
        var e, t, n, o = this;
        o.contentLastPos && (t = !1 === o.opts.momentum || 350 < o.dMs ? (e = o.contentLastPos.left, o.contentLastPos.top) : (e = o.contentLastPos.left + 500 * o.velocityX, o.contentLastPos.top + 500 * o.velocityY), (n = o.limitPosition(e, t, o.contentStartPos.width, o.contentStartPos.height)).width = o.contentStartPos.width, n.height = o.contentStartPos.height, m.fancybox.animate(o.$content, n, 366))
    }, n.prototype.endZooming = function() {
        var e, t, n, o, i = this,
            r = i.instance.current,
            s = i.newWidth,
            a = i.newHeight;
        i.contentLastPos && (e = i.contentLastPos.left, o = {
            top: t = i.contentLastPos.top,
            left: e,
            width: s,
            height: a,
            scaleX: 1,
            scaleY: 1
        }, m.fancybox.setTranslate(i.$content, o), s < i.canvasWidth && a < i.canvasHeight ? i.instance.scaleToFit(150) : s > r.width || a > r.height ? i.instance.scaleToActual(i.centerPointStartX, i.centerPointStartY, 150) : (n = i.limitPosition(e, t, s, a), m.fancybox.animate(i.$content, n, 150)))
    }, n.prototype.onTap = function(n) {
        function e(e) {
            var t = s.opts[e];
            if (m.isFunction(t) && (t = t.apply(r, [s, n])), t) switch (t) {
                case "close":
                    r.close(o.startEvent);
                    break;
                case "toggleControls":
                    r.toggleControls();
                    break;
                case "next":
                    r.next();
                    break;
                case "nextOrClose":
                    1 < r.group.length ? r.next() : r.close(o.startEvent);
                    break;
                case "zoom":
                    "image" == s.type && (s.isLoaded || s.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(l, c) : r.group.length < 2 && r.close(o.startEvent))
            }
        }
        var t, o = this,
            i = m(n.target),
            r = o.instance,
            s = r.current,
            a = n && u(n) || o.startPoints,
            l = a[0] ? a[0].x - m(g).scrollLeft() - o.stagePos.left : 0,
            c = a[0] ? a[0].y - m(g).scrollTop() - o.stagePos.top : 0;
        if ((!n.originalEvent || 2 != n.originalEvent.button) && (i.is("img") || !(l > i[0].clientWidth + i.offset().left))) {
            if (i.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) t = "Outside";
            else if (i.is(".fancybox-slide")) t = "Slide";
            else {
                if (!r.current.$content || !r.current.$content.find(i).addBack().filter(i).length) return;
                t = "Content"
            }
            if (o.tapped) {
                if (clearTimeout(o.tapped), o.tapped = null, 50 < Math.abs(l - o.tapX) || 50 < Math.abs(c - o.tapY)) return this;
                e("dblclick" + t)
            } else o.tapX = l, o.tapY = c, s.opts["dblclick" + t] && s.opts["dblclick" + t] !== s.opts["click" + t] ? o.tapped = setTimeout(function() {
                o.tapped = null, r.isAnimating || e("click" + t)
            }, 500) : e("click" + t);
            return this
        }
    }, m(l).on("onActivate.fb", function(e, t) {
        t && !t.Guestures && (t.Guestures = new n(t))
    }).on("beforeClose.fb", function(e, t) {
        t && t.Guestures && t.Guestures.destroy()
    })
}(window, document, jQuery),
function(s, a) {
    a.extend(!0, a.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'
        },
        slideShow: {
            autoStart: !1,
            speed: 3e3,
            progress: !0
        }
    });

    function n(e) {
        this.instance = e, this.init()
    }
    a.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        init: function() {
            var e = this,
                t = e.instance,
                n = t.group[t.currIndex].opts.slideShow;
            e.$button = t.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                e.toggle()
            }), t.group.length < 2 || !n ? e.$button.hide() : n.progress && (e.$progress = a('<div class="fancybox-progress"></div>').appendTo(t.$refs.inner))
        },
        set: function(e) {
            var t = this.instance,
                n = t.current;
            n && (!0 === e || n.opts.loop || t.currIndex < t.group.length - 1) ? this.isActive && "video" !== n.contentType && (this.$progress && a.fancybox.animate(this.$progress.show(), {
                scaleX: 1
            }, n.opts.slideShow.speed), this.timer = setTimeout(function() {
                t.current.opts.loop || t.current.index != t.group.length - 1 ? t.next() : t.jumpTo(0)
            }, n.opts.slideShow.speed)) : (this.stop(), t.idleSecondsCounter = 0, t.showControls())
        },
        clear: function() {
            clearTimeout(this.timer), this.timer = null, this.$progress && this.$progress.removeAttr("style").hide()
        },
        start: function() {
            var e = this.instance.current;
            e && (this.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), this.isActive = !0, e.isComplete && this.set(!0), this.instance.trigger("onSlideShowChange", !0))
        },
        stop: function() {
            var e = this.instance.current;
            this.clear(), this.$button.attr("title", (e.opts.i18n[e.opts.lang] || e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), this.isActive = !1, this.instance.trigger("onSlideShowChange", !1), this.$progress && this.$progress.removeAttr("style").hide()
        },
        toggle: function() {
            this.isActive ? this.stop() : this.start()
        }
    }), a(s).on({
        "onInit.fb": function(e, t) {
            t && !t.SlideShow && (t.SlideShow = new n(t))
        },
        "beforeShow.fb": function(e, t, n, o) {
            var i = t && t.SlideShow;
            o ? i && n.opts.slideShow.autoStart && i.start() : i && i.isActive && i.clear()
        },
        "afterShow.fb": function(e, t) {
            var n = t && t.SlideShow;
            n && n.isActive && n.set()
        },
        "afterKeydown.fb": function(e, t, n, o, i) {
            var r = t && t.SlideShow;
            !r || !n.opts.slideShow || 80 !== i && 32 !== i || a(s.activeElement).is("button,a,input") || (o.preventDefault(), r.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(e, t) {
            var n = t && t.SlideShow;
            n && n.stop()
        }
    }), a(s).on("visibilitychange", function() {
        var e = a.fancybox.getInstance(),
            t = e && e.SlideShow;
        t && t.isActive && (s.hidden ? t.clear() : t.set())
    })
}(document, jQuery),
function(r, n) {
    var o, i = function() {
        for (var e = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ], t = {}, n = 0; n < e.length; n++) {
            var o = e[n];
            if (o && o[1] in r) {
                for (var i = 0; i < o.length; i++) t[e[0][i]] = o[i];
                return t
            }
        }
        return !1
    }();
    i && (o = {
        request: function(e) {
            (e = e || r.documentElement)[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
        },
        exit: function() {
            r[i.exitFullscreen]()
        },
        toggle: function(e) {
            e = e || r.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
        },
        isFullscreen: function() {
            return Boolean(r[i.fullscreenElement])
        },
        enabled: function() {
            return Boolean(r[i.fullscreenEnabled])
        }
    }, n.extend(!0, n.fancybox.defaults, {
        btnTpl: {
            fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'
        },
        fullScreen: {
            autoStart: !1
        }
    }), n(r).on(i.fullscreenchange, function() {
        var e = o.isFullscreen(),
            t = n.fancybox.getInstance();
        t && (t.current && "image" === t.current.type && t.isAnimating && (t.isAnimating = !1, t.update(!0, !0, 0), t.isComplete || t.complete()), t.trigger("onFullscreenChange", e), t.$refs.container.toggleClass("fancybox-is-fullscreen", e), t.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !e).toggleClass("fancybox-button--fsexit", e))
    })), n(r).on({
        "onInit.fb": function(e, t) {
            i ? t && t.group[t.currIndex].opts.fullScreen ? (t.$refs.container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(e) {
                e.stopPropagation(), e.preventDefault(), o.toggle()
            }), t.opts.fullScreen && !0 === t.opts.fullScreen.autoStart && o.request(), t.FullScreen = o) : t && t.$refs.toolbar.find("[data-fancybox-fullscreen]").hide() : t.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
        },
        "afterKeydown.fb": function(e, t, n, o, i) {
            t && t.FullScreen && 70 === i && (o.preventDefault(), t.FullScreen.toggle())
        },
        "beforeClose.fb": function(e, t) {
            t && t.FullScreen && t.$refs.container.hasClass("fancybox-is-fullscreen") && o.exit()
        }
    })
}(document, jQuery),
function(e, r) {
    var s = "fancybox-thumbs";
    r.fancybox.defaults = r.extend(!0, {
        btnTpl: {
            thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'
        },
        thumbs: {
            autoStart: !1,
            hideOnClose: !0,
            parentEl: ".fancybox-container",
            axis: "y"
        }
    }, r.fancybox.defaults);

    function o(e) {
        this.init(e)
    }
    r.extend(o.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        isActive: !1,
        init: function(e) {
            var t = this,
                n = e.group,
                o = 0;
            t.instance = e, t.opts = n[e.currIndex].opts.thumbs, (e.Thumbs = t).$button = e.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var i = 0, r = n.length; i < r && (n[i].thumb && o++, !(1 < o)); i++);
            1 < o && t.opts ? (t.$button.removeAttr("style").on("click", function() {
                t.toggle()
            }), t.isActive = !0) : t.$button.hide()
        },
        create: function() {
            var n, e = this,
                t = e.instance,
                o = e.opts.parentEl,
                i = [];
            e.$grid || (e.$grid = r('<div class="' + s + " " + s + "-" + e.opts.axis + '"></div>').appendTo(t.$refs.container.find(o).addBack().filter(o)), e.$grid.on("click", "a", function() {
                t.jumpTo(r(this).attr("data-index"))
            })), e.$list || (e.$list = r('<div class="' + s + '__list">').appendTo(e.$grid)), r.each(t.group, function(e, t) {
                (n = t.thumb) || "image" !== t.type || (n = t.src), i.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (n && n.length ? ' style="background-image:url(' + n + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            }), e.$list[0].innerHTML = i.join(""), "x" === e.opts.axis && e.$list.width(parseInt(e.$grid.css("padding-right"), 10) + t.group.length * e.$list.children().eq(0).outerWidth(!0))
        },
        focus: function(e) {
            var t, n, o = this.$list,
                i = this.$grid;
            this.instance.current && (n = (t = o.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active")).position(), "y" === this.opts.axis && (n.top < 0 || n.top > o.height() - t.outerHeight()) ? o.stop().animate({
                scrollTop: o.scrollTop() + n.top
            }, e) : "x" === this.opts.axis && (n.left < i.scrollLeft() || n.left > i.scrollLeft() + (i.width() - t.outerWidth())) && o.parent().stop().animate({
                scrollLeft: n.left
            }, e))
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
    }), r(e).on({
        "onInit.fb": function(e, t) {
            var n;
            !t || t.Thumbs || (n = new o(t)).isActive && !0 === n.opts.autoStart && n.show()
        },
        "beforeShow.fb": function(e, t, n, o) {
            var i = t && t.Thumbs;
            i && i.isVisible && i.focus(o ? 0 : 250)
        },
        "afterKeydown.fb": function(e, t, n, o, i) {
            var r = t && t.Thumbs;
            r && r.isActive && 71 === i && (o.preventDefault(), r.toggle())
        },
        "beforeClose.fb": function(e, t) {
            var n = t && t.Thumbs;
            n && n.isVisible && !1 !== n.opts.hideOnClose && n.$grid.hide()
        }
    })
}(document, jQuery),
function(e, r) {
    r.extend(!0, r.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'
        },
        share: {
            url: function(e, t) {
                return !e.currentHash && "inline" !== t.type && "html" !== t.type && (t.origSrc || t.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }), r(e).on("click", "[data-fancybox-share]", function() {
        var e, t, n, o = r.fancybox.getInstance(),
            i = o.current || null;
        i && ("function" === r.type(i.opts.share.url) && (e = i.opts.share.url.apply(i, [o, i])), t = i.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === i.type ? encodeURIComponent(i.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(e)).replace(/\{\{url_raw\}\}/g, (n = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        }, String(e).replace(/[&<>"'`=\/]/g, function(e) {
            return n[e]
        }))).replace(/\{\{descr\}\}/g, o.$caption ? encodeURIComponent(o.$caption.text()) : ""), r.fancybox.open({
            src: o.translate(o, t),
            type: "html",
            opts: {
                touch: !1,
                animationEffect: !1,
                afterLoad: function(e, t) {
                    o.$refs.container.one("beforeClose.fb", function() {
                        e.close(null, 0)
                    }), t.$content.find(".fancybox-share__button").click(function() {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                },
                mobile: {
                    autoFocus: !1
                }
            }
        }))
    })
}(document, jQuery),
function(r, s, i) {
    function a() {
        var e = r.location.hash.substr(1),
            t = e.split("-"),
            n = 1 < t.length && /^\+?\d+$/.test(t[t.length - 1]) && parseInt(t.pop(-1), 10) || 1;
        return {
            hash: e,
            index: n < 1 ? 1 : n,
            gallery: t.join("-")
        }
    }

    function t(e) {
        "" !== e.gallery && i("[data-fancybox='" + i.escapeSelector(e.gallery) + "']").eq(e.index - 1).focus().trigger("click.fb-start")
    }

    function l(e) {
        var t, n;
        return !!e && ("" !== (n = (t = e.current ? e.current.opts : e.opts).hash || (t.$orig ? t.$orig.data("fancybox") || t.$orig.data("fancybox-trigger") : "")) && n)
    }
    i.escapeSelector || (i.escapeSelector = function(e) {
        return (e + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        })
    }), i(function() {
        !1 !== i.fancybox.defaults.hash && (i(s).on({
            "onInit.fb": function(e, t) {
                var n, o;
                !1 !== t.group[t.currIndex].opts.hash && (n = a(), (o = l(t)) && n.gallery && o == n.gallery && (t.currIndex = n.index - 1))
            },
            "beforeShow.fb": function(e, t, n, o) {
                var i;
                n && !1 !== n.opts.hash && (i = l(t)) && (t.currentHash = i + (1 < t.group.length ? "-" + (n.index + 1) : ""), r.location.hash !== "#" + t.currentHash && (o && !t.origHash && (t.origHash = r.location.hash), t.hashTimer && clearTimeout(t.hashTimer), t.hashTimer = setTimeout(function() {
                    "replaceState" in r.history ? (r.history[o ? "pushState" : "replaceState"]({}, s.title, r.location.pathname + r.location.search + "#" + t.currentHash), o && (t.hasCreatedHistory = !0)) : r.location.hash = t.currentHash, t.hashTimer = null
                }, 300)))
            },
            "beforeClose.fb": function(e, t, n) {
                n && !1 !== n.opts.hash && (clearTimeout(t.hashTimer), t.currentHash && t.hasCreatedHistory ? r.history.back() : t.currentHash && ("replaceState" in r.history ? r.history.replaceState({}, s.title, r.location.pathname + r.location.search + (t.origHash || "")) : r.location.hash = t.origHash), t.currentHash = null)
            }
        }), i(r).on("hashchange.fb", function() {
            var e = a(),
                o = null;
            i.each(i(".fancybox-container").get().reverse(), function(e, t) {
                var n = i(t).data("FancyBox");
                if (n && n.currentHash) return o = n, !1
            }), o ? o.currentHash === e.gallery + "-" + e.index || 1 === e.index && o.currentHash == e.gallery || (o.currentHash = null, o.close()) : "" !== e.gallery && t(e)
        }), setTimeout(function() {
            i.fancybox.getInstance() || t(a())
        }, 50))
    })
}(window, document, jQuery),
function(e, t) {
    var i = (new Date).getTime();
    t(e).on({
        "onInit.fb": function(e, o) {
            o.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function(e) {
                var t = o.current,
                    n = (new Date).getTime();
                o.group.length < 2 || !1 === t.opts.wheel || "auto" === t.opts.wheel && "image" !== t.type || (e.preventDefault(), e.stopPropagation(), t.$slide.hasClass("fancybox-animated") || (e = e.originalEvent || e, n - i < 250 || (i = n, o[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, jQuery);
var fixedHeader = $(".fixed-header"),
    headerThreshold = 600,
    rellax = new Rellax(".rellax");

function toggleElOnScroll(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 50,
        n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
    $(window).scrollTop() > t ? n ? e.fadeOut() : e.fadeIn() : n ? e.fadeIn() : e.fadeOut()
}

function isMobile() {
    return !(1050 < $(window).width())
}

function popUp(e) {
    $("body,html").addClass("scroll-lock"), e.fadeIn("fast")
}

function popClose() {
    $(".modal-overlay").fadeOut(), $("body,html").removeClass("scroll-lock")
}

function addClass(e) {
    $(".fixed-header a").removeClass("active"), $(e).addClass("active")
}
$(window).on("scroll", function() {
    isMobile() ? toggleElOnScroll(fixedHeader) : toggleElOnScroll(fixedHeader, headerThreshold)
}), $(".btn-open-modal").on("click", function() {
    var e = $(this).data("target");
    popUp($(e))
}), $(".modal-overlay, .btn-close-modal").on("click", function() {
    popClose()
}).on("click", ".pop-up-content", function(e) {
    e.stopPropagation()
}), $(".pop-up-content .btn-privacy").on("click", function() {
    var e = $(this).data("target");
    $(e).modal("show")
}), $(".scroll-to").on("click", function(e) {
    var t, n, o;
    "_blank" !== $(this).attr("target") && (e.preventDefault(), t = isMobile() ? 110 : 160, n = $(this).attr("href"), o = $(n).offset().top - t, $("html, body").animate({
        scrollTop: o
    }, 800))
}), $(document).on("scroll", function() {
    var n, o = $(document).scrollTop();
    $(".content-section").each(function(e) {
        var t;
        $(this).position().top - 170 < o && (t = $(this).attr("id"), n = $('.fixed-header a[data-scrollto="#' + t + '"]'))
    }), n && addClass(n)
});
var formGroup = $(".form-group");
formGroup.each(function() {
    var t = $(this).find(".form-control"),
        n = $(this).find("label");
    t.on("focus", function() {
        n.addClass("active")
    }), t.on("blur", function() {
        var e = t.val();
        e || (console.log(e), n.removeClass("active"))
    })
});