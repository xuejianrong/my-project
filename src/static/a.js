function getSign() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = "",
    n = function (e) {
      if (null === e) return "";
      if (e instanceof Array) {
        var t = "";
        return (
          e.forEach(function (e) {
            t.length > 0 && (t += ","), (t += JSON.stringify(e));
          }),
          t
        );
      }
      return e instanceof Object ? JSON.stringify(e) : e.toString();
    };
  return (
    (t = Object.keys(e)
      .sort()
      .reduce(function (t, i) {
        return void 0 === e[i] ? t : "".concat(t).concat(i).concat(n(e[i]));
      }, "")),
    (t += "048a9c4943398714b356a696503d2d36"),
    myMd5(t)
  );
}
var i = function (e, t) {
	return (e << t) | (e >>> (32 - t));
},
o = function (e, t) {
	var n, i, o, a, r;
	return (
		(o = 2147483648 & e),
		(a = 2147483648 & t),
		(n = 1073741824 & e),
		(i = 1073741824 & t),
		(r = (1073741823 & e) + (1073741823 & t)),
		n & i
			? 2147483648 ^ r ^ o ^ a
			: n | i
			? 1073741824 & r
				? 3221225472 ^ r ^ o ^ a
				: 1073741824 ^ r ^ o ^ a
			: r ^ o ^ a
	);
},
a = function (e, t, n) {
	return (e & t) | (~e & n);
},
r = function (e, t, n) {
	return (e & n) | (t & ~n);
},
c = function (e, t, n) {
	return e ^ t ^ n;
},
s = function (e, t, n) {
	return t ^ (e | ~n);
},
u = function (e, t, n, r, c, s, u) {
	return (e = o(e, o(o(a(t, n, r), c), u))), o(i(e, s), t);
},
d = function (e, t, n, a, c, s, u) {
	return (e = o(e, o(o(r(t, n, a), c), u))), o(i(e, s), t);
},
l = function (e, t, n, a, r, s, u) {
	return (e = o(e, o(o(c(t, n, a), r), u))), o(i(e, s), t);
},
p = function (e, t, n, a, r, c, u) {
	return (e = o(e, o(o(s(t, n, a), r), u))), o(i(e, c), t);
},
f = function (e) {
	var t,
		n = e.length,
		i = n + 8,
		o = (i - (i % 64)) / 64,
		a = 16 * (o + 1),
		r = Array(a - 1),
		c = 0,
		s = 0;
	while (s < n)
		(t = (s - (s % 4)) / 4),
			(c = (s % 4) * 8),
			(r[t] = r[t] | (e.charCodeAt(s) << c)),
			s++;
	return (
		(t = (s - (s % 4)) / 4),
		(c = (s % 4) * 8),
		(r[t] = r[t] | (128 << c)),
		(r[a - 2] = n << 3),
		(r[a - 1] = n >>> 29),
		r
	);
},
g = function (e) {
	var t,
		n,
		i = "",
		o = "";
	for (n = 0; n <= 3; n++)
		(t = (e >>> (8 * n)) & 255),
			(o = "0" + t.toString(16)),
			(i += o.substr(o.length - 2, 2));
	return i;
},
m = function (e) {
	e = e.replace(/\x0d\x0a/g, "\n");
	for (var t = "", n = 0; n < e.length; n++) {
		var i = e.charCodeAt(n);
		i < 128
			? (t += String.fromCharCode(i))
			: i > 127 && i < 2048
			? ((t += String.fromCharCode((i >> 6) | 192)),
				(t += String.fromCharCode((63 & i) | 128)))
			: ((t += String.fromCharCode((i >> 12) | 224)),
				(t += String.fromCharCode(((i >> 6) & 63) | 128)),
				(t += String.fromCharCode((63 & i) | 128)));
	}
	return t;
};
function myMd5(e) {
  var t,
    n,
    i,
    a,
    r,
    c,
    s,
    y,
    h,
    b = [],
    v = 7,
    w = 12,
    x = 17,
    _ = 22,
    S = 5,
    C = 9,
    k = 14,
    T = 20,
    P = 4,
    I = 11,
    E = 16,
    A = 23,
    O = 6,
    B = 10,
    L = 15,
    z = 21;
  for (
    e = m(e),
      b = f(e),
      c = 1732584193,
      s = 4023233417,
      y = 2562383102,
      h = 271733878,
      t = 0;
    t < b.length;
    t += 16
  )
    (n = c),
      (i = s),
      (a = y),
      (r = h),
      (c = u(c, s, y, h, b[t + 0], v, 3614090360)),
      (h = u(h, c, s, y, b[t + 1], w, 3905402710)),
      (y = u(y, h, c, s, b[t + 2], x, 606105819)),
      (s = u(s, y, h, c, b[t + 3], _, 3250441966)),
      (c = u(c, s, y, h, b[t + 4], v, 4118548399)),
      (h = u(h, c, s, y, b[t + 5], w, 1200080426)),
      (y = u(y, h, c, s, b[t + 6], x, 2821735955)),
      (s = u(s, y, h, c, b[t + 7], _, 4249261313)),
      (c = u(c, s, y, h, b[t + 8], v, 1770035416)),
      (h = u(h, c, s, y, b[t + 9], w, 2336552879)),
      (y = u(y, h, c, s, b[t + 10], x, 4294925233)),
      (s = u(s, y, h, c, b[t + 11], _, 2304563134)),
      (c = u(c, s, y, h, b[t + 12], v, 1804603682)),
      (h = u(h, c, s, y, b[t + 13], w, 4254626195)),
      (y = u(y, h, c, s, b[t + 14], x, 2792965006)),
      (s = u(s, y, h, c, b[t + 15], _, 1236535329)),
      (c = d(c, s, y, h, b[t + 1], S, 4129170786)),
      (h = d(h, c, s, y, b[t + 6], C, 3225465664)),
      (y = d(y, h, c, s, b[t + 11], k, 643717713)),
      (s = d(s, y, h, c, b[t + 0], T, 3921069994)),
      (c = d(c, s, y, h, b[t + 5], S, 3593408605)),
      (h = d(h, c, s, y, b[t + 10], C, 38016083)),
      (y = d(y, h, c, s, b[t + 15], k, 3634488961)),
      (s = d(s, y, h, c, b[t + 4], T, 3889429448)),
      (c = d(c, s, y, h, b[t + 9], S, 568446438)),
      (h = d(h, c, s, y, b[t + 14], C, 3275163606)),
      (y = d(y, h, c, s, b[t + 3], k, 4107603335)),
      (s = d(s, y, h, c, b[t + 8], T, 1163531501)),
      (c = d(c, s, y, h, b[t + 13], S, 2850285829)),
      (h = d(h, c, s, y, b[t + 2], C, 4243563512)),
      (y = d(y, h, c, s, b[t + 7], k, 1735328473)),
      (s = d(s, y, h, c, b[t + 12], T, 2368359562)),
      (c = l(c, s, y, h, b[t + 5], P, 4294588738)),
      (h = l(h, c, s, y, b[t + 8], I, 2272392833)),
      (y = l(y, h, c, s, b[t + 11], E, 1839030562)),
      (s = l(s, y, h, c, b[t + 14], A, 4259657740)),
      (c = l(c, s, y, h, b[t + 1], P, 2763975236)),
      (h = l(h, c, s, y, b[t + 4], I, 1272893353)),
      (y = l(y, h, c, s, b[t + 7], E, 4139469664)),
      (s = l(s, y, h, c, b[t + 10], A, 3200236656)),
      (c = l(c, s, y, h, b[t + 13], P, 681279174)),
      (h = l(h, c, s, y, b[t + 0], I, 3936430074)),
      (y = l(y, h, c, s, b[t + 3], E, 3572445317)),
      (s = l(s, y, h, c, b[t + 6], A, 76029189)),
      (c = l(c, s, y, h, b[t + 9], P, 3654602809)),
      (h = l(h, c, s, y, b[t + 12], I, 3873151461)),
      (y = l(y, h, c, s, b[t + 15], E, 530742520)),
      (s = l(s, y, h, c, b[t + 2], A, 3299628645)),
      (c = p(c, s, y, h, b[t + 0], O, 4096336452)),
      (h = p(h, c, s, y, b[t + 7], B, 1126891415)),
      (y = p(y, h, c, s, b[t + 14], L, 2878612391)),
      (s = p(s, y, h, c, b[t + 5], z, 4237533241)),
      (c = p(c, s, y, h, b[t + 12], O, 1700485571)),
      (h = p(h, c, s, y, b[t + 3], B, 2399980690)),
      (y = p(y, h, c, s, b[t + 10], L, 4293915773)),
      (s = p(s, y, h, c, b[t + 1], z, 2240044497)),
      (c = p(c, s, y, h, b[t + 8], O, 1873313359)),
      (h = p(h, c, s, y, b[t + 15], B, 4264355552)),
      (y = p(y, h, c, s, b[t + 6], L, 2734768916)),
      (s = p(s, y, h, c, b[t + 13], z, 1309151649)),
      (c = p(c, s, y, h, b[t + 4], O, 4149444226)),
      (h = p(h, c, s, y, b[t + 11], B, 3174756917)),
      (y = p(y, h, c, s, b[t + 2], L, 718787259)),
      (s = p(s, y, h, c, b[t + 9], z, 3951481745)),
      (c = o(c, n)),
      (s = o(s, i)),
      (y = o(y, a)),
      (h = o(h, r));
  var D = g(c) + g(s) + g(y) + g(h);
  return D.toLowerCase();
}

var sign = getSign({
  aggregation: true,
  brandId: 4,
  categoryIds: [],
  debugAgg: true,
  lastId: "0",
  limit: 20,
  sortMode: 1,
  sortType: 1,
});

console.log(sign);
debugger
