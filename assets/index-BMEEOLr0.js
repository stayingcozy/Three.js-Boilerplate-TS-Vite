(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) n(r);
  new MutationObserver((r) => {
    for (const s of r) if (s.type === "childList") for (const a of s.addedNodes) a.tagName === "LINK" && a.rel === "modulepreload" && n(a);
  }).observe(document, { childList: true, subtree: true });
  function t(r) {
    const s = {};
    return r.integrity && (s.integrity = r.integrity), r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
  }
  function n(r) {
    if (r.ep) return;
    r.ep = true;
    const s = t(r);
    fetch(r.href, s);
  }
})();
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
const Fs = "173", Wo = 0, Qs = 1, Xo = 2, Qa = 1, $o = 2, jt = 3, mn = 0, xt = 1, Jt = 2, fn = 0, jn = 1, ea = 2, ta = 3, na = 4, qo = 5, Rn = 100, Yo = 101, Ko = 102, Zo = 103, jo = 104, Jo = 200, Qo = 201, el = 202, tl = 203, Yr = 204, Kr = 205, nl = 206, il = 207, rl = 208, sl = 209, al = 210, ol = 211, ll = 212, cl = 213, ul = 214, Zr = 0, jr = 1, Jr = 2, ei = 3, Qr = 4, es = 5, ts = 6, ns = 7, eo = 0, hl = 1, dl = 2, pn = 0, fl = 1, pl = 2, ml = 3, gl = 4, _l = 5, vl = 6, xl = 7, to = 300, ti = 301, ni = 302, is = 303, rs = 304, cr = 306, ss = 1e3, Pn = 1001, as = 1002, Bt = 1003, Ml = 1004, Ri = 1005, Vt = 1006, gr = 1007, Ln = 1008, nn = 1009, no = 1010, io = 1011, Mi = 1012, Os = 1013, Dn = 1014, Qt = 1015, Ei = 1016, Bs = 1017, zs = 1018, ii = 1020, ro = 35902, so = 1021, ao = 1022, Ot = 1023, oo = 1024, lo = 1025, Jn = 1026, ri = 1027, co = 1028, Hs = 1029, uo = 1030, Vs = 1031, Gs = 1033, Ji = 33776, Qi = 33777, er = 33778, tr = 33779, os = 35840, ls = 35841, cs = 35842, us = 35843, hs = 36196, ds = 37492, fs = 37496, ps = 37808, ms = 37809, gs = 37810, _s = 37811, vs = 37812, xs = 37813, Ms = 37814, Ss = 37815, Es = 37816, ys = 37817, As = 37818, Ts = 37819, bs = 37820, ws = 37821, nr = 36492, Rs = 36494, Cs = 36495, ho = 36283, Ps = 36284, Ls = 36285, Ds = 36286, Sl = 3200, El = 3201, fo = 0, yl = 1, dn = "", Ct = "srgb", si = "srgb-linear", rr = "linear", qe = "srgb", Nn = 7680, ia = 519, Al = 512, Tl = 513, bl = 514, po = 515, wl = 516, Rl = 517, Cl = 518, Pl = 519, ra = 35044, sa = "300 es", en = 2e3, sr = 2001;
class oi {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? false : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const r = n[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, a = r.length; s < a; s++) r[s].call(this, e);
      e.target = null;
    }
  }
}
const dt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], _r = Math.PI / 180, Us = 180 / Math.PI;
function yi() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (dt[i & 255] + dt[i >> 8 & 255] + dt[i >> 16 & 255] + dt[i >> 24 & 255] + "-" + dt[e & 255] + dt[e >> 8 & 255] + "-" + dt[e >> 16 & 15 | 64] + dt[e >> 24 & 255] + "-" + dt[t & 63 | 128] + dt[t >> 8 & 255] + "-" + dt[t >> 16 & 255] + dt[t >> 24 & 255] + dt[n & 255] + dt[n >> 8 & 255] + dt[n >> 16 & 255] + dt[n >> 24 & 255]).toLowerCase();
}
function Ue(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function Ll(i, e) {
  return (i % e + e) % e;
}
function vr(i, e, t) {
  return (1 - t) * i + t * e;
}
function di(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return i / 4294967295;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int32Array:
      return Math.max(i / 2147483647, -1);
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function vt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint32Array:
      return Math.round(i * 4294967295);
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int32Array:
      return Math.round(i * 2147483647);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class Ye {
  constructor(e = 0, t = 0) {
    Ye.prototype.isVector2 = true, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Ue(this.x, e.x, t.x), this.y = Ue(this.y, e.y, t.y), this;
  }
  clampScalar(e, t) {
    return this.x = Ue(this.x, e, t), this.y = Ue(this.y, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ue(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ue(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * r + e.x, this.y = s * r + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ce {
  constructor(e, t, n, r, s, a, o, l, c) {
    Ce.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c);
  }
  set(e, t, n, r, s, a, o, l, c) {
    const u = this.elements;
    return u[0] = e, u[1] = r, u[2] = o, u[3] = t, u[4] = s, u[5] = l, u[6] = n, u[7] = a, u[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], u = n[4], f = n[7], d = n[2], m = n[5], v = n[8], x = r[0], p = r[3], h = r[6], b = r[1], A = r[4], y = r[7], U = r[2], L = r[5], w = r[8];
    return s[0] = a * x + o * b + l * U, s[3] = a * p + o * A + l * L, s[6] = a * h + o * y + l * w, s[1] = c * x + u * b + f * U, s[4] = c * p + u * A + f * L, s[7] = c * h + u * y + f * w, s[2] = d * x + m * b + v * U, s[5] = d * p + m * A + v * L, s[8] = d * h + m * y + v * w, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8];
    return t * a * u - t * o * c - n * s * u + n * o * l + r * s * c - r * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8], f = u * a - o * c, d = o * l - u * s, m = c * s - a * l, v = t * f + n * d + r * m;
    if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const x = 1 / v;
    return e[0] = f * x, e[1] = (r * c - u * n) * x, e[2] = (o * n - r * a) * x, e[3] = d * x, e[4] = (u * t - r * l) * x, e[5] = (r * s - o * t) * x, e[6] = m * x, e[7] = (n * l - c * t) * x, e[8] = (a * t - n * s) * x, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, r, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(n * l, n * c, -n * (l * a + c * o) + a + e, -r * c, r * l, -r * (-c * a + l * o) + o + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return this.premultiply(xr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(xr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(xr.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++) if (t[r] !== n[r]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const xr = new Ce();
function mo(i) {
  for (let e = i.length - 1; e >= 0; --e) if (i[e] >= 65535) return true;
  return false;
}
function ar(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
function Dl() {
  const i = ar("canvas");
  return i.style.display = "block", i;
}
const aa = {};
function Kn(i) {
  i in aa || (aa[i] = true, console.warn(i));
}
function Ul(i, e, t) {
  return new Promise(function(n, r) {
    function s() {
      switch (i.clientWaitSync(e, i.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case i.WAIT_FAILED:
          r();
          break;
        case i.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
function Il(i) {
  const e = i.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function Nl(i) {
  const e = i.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const oa = new Ce().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), la = new Ce().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Fl() {
  const i = { enabled: true, workingColorSpace: si, spaces: {}, convert: function(r, s, a) {
    return this.enabled === false || s === a || !s || !a || (this.spaces[s].transfer === qe && (r.r = tn(r.r), r.g = tn(r.g), r.b = tn(r.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (r.applyMatrix3(this.spaces[s].toXYZ), r.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === qe && (r.r = Qn(r.r), r.g = Qn(r.g), r.b = Qn(r.b))), r;
  }, fromWorkingColorSpace: function(r, s) {
    return this.convert(r, this.workingColorSpace, s);
  }, toWorkingColorSpace: function(r, s) {
    return this.convert(r, s, this.workingColorSpace);
  }, getPrimaries: function(r) {
    return this.spaces[r].primaries;
  }, getTransfer: function(r) {
    return r === dn ? rr : this.spaces[r].transfer;
  }, getLuminanceCoefficients: function(r, s = this.workingColorSpace) {
    return r.fromArray(this.spaces[s].luminanceCoefficients);
  }, define: function(r) {
    Object.assign(this.spaces, r);
  }, _getMatrix: function(r, s, a) {
    return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
  }, _getDrawingBufferColorSpace: function(r) {
    return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(r = this.workingColorSpace) {
    return this.spaces[r].workingColorSpaceConfig.unpackColorSpace;
  } }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return i.define({ [si]: { primaries: e, whitePoint: n, transfer: rr, toXYZ: oa, fromXYZ: la, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: Ct }, outputColorSpaceConfig: { drawingBufferColorSpace: Ct } }, [Ct]: { primaries: e, whitePoint: n, transfer: qe, toXYZ: oa, fromXYZ: la, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: Ct } } }), i;
}
const Ve = Fl();
function tn(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Qn(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
let Fn;
class Ol {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Fn === void 0 && (Fn = ar("canvas")), Fn.width = e.width, Fn.height = e.height;
      const n = Fn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Fn;
    }
    return t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = ar("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let a = 0; a < s.length; a++) s[a] = tn(s[a] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(tn(t[n] / 255) * 255) : t[n] = tn(t[n]);
      return { data: t, width: e.width, height: e.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let Bl = 0;
class go {
  constructor(e = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: Bl++ }), this.uuid = yi(), this.data = e, this.dataReady = true, this.version = 0;
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++) r[a].isDataTexture ? s.push(Mr(r[a].image)) : s.push(Mr(r[a]));
      } else s = Mr(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Mr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Ol.getDataURL(i) : i.data ? { data: Array.from(i.data), width: i.width, height: i.height, type: i.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let zl = 0;
class Mt extends oi {
  constructor(e = Mt.DEFAULT_IMAGE, t = Mt.DEFAULT_MAPPING, n = Pn, r = Pn, s = Vt, a = Ln, o = Ot, l = nn, c = Mt.DEFAULT_ANISOTROPY, u = dn) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: zl++ }), this.uuid = yi(), this.name = "", this.source = new go(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Ye(0, 0), this.repeat = new Ye(1, 1), this.center = new Ye(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Ce(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = u, this.userData = {}, this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== to) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case ss:
        e.x = e.x - Math.floor(e.x);
        break;
      case Pn:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case as:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case ss:
        e.y = e.y - Math.floor(e.y);
        break;
      case Pn:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case as:
        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
        break;
    }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(e) {
    e === true && this.pmremVersion++;
  }
}
Mt.DEFAULT_IMAGE = null;
Mt.DEFAULT_MAPPING = to;
Mt.DEFAULT_ANISOTROPY = 1;
class it {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    it.prototype.isVector4 = true, this.x = e, this.y = t, this.z = n, this.w = r;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, r) {
    return this.x = e, this.y = t, this.z = n, this.w = r, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * s, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const l = e.elements, c = l[0], u = l[4], f = l[8], d = l[1], m = l[5], v = l[9], x = l[2], p = l[6], h = l[10];
    if (Math.abs(u - d) < 0.01 && Math.abs(f - x) < 0.01 && Math.abs(v - p) < 0.01) {
      if (Math.abs(u + d) < 0.1 && Math.abs(f + x) < 0.1 && Math.abs(v + p) < 0.1 && Math.abs(c + m + h - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const A = (c + 1) / 2, y = (m + 1) / 2, U = (h + 1) / 2, L = (u + d) / 4, w = (f + x) / 4, I = (v + p) / 4;
      return A > y && A > U ? A < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(A), r = L / n, s = w / n) : y > U ? y < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(y), n = L / r, s = I / r) : U < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(U), n = w / s, r = I / s), this.set(n, r, s, t), this;
    }
    let b = Math.sqrt((p - v) * (p - v) + (f - x) * (f - x) + (d - u) * (d - u));
    return Math.abs(b) < 1e-3 && (b = 1), this.x = (p - v) / b, this.y = (f - x) / b, this.z = (d - u) / b, this.w = Math.acos((c + m + h - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Ue(this.x, e.x, t.x), this.y = Ue(this.y, e.y, t.y), this.z = Ue(this.z, e.z, t.z), this.w = Ue(this.w, e.w, t.w), this;
  }
  clampScalar(e, t) {
    return this.x = Ue(this.x, e, t), this.y = Ue(this.y, e, t), this.z = Ue(this.z, e, t), this.w = Ue(this.w, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ue(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Hl extends oi {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = 1, this.scissor = new it(0, 0, e, t), this.scissorTest = false, this.viewport = new it(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Vt, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1 }, n);
    const s = new Mt(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    s.flipY = false, s.generateMipmaps = n.generateMipmaps, s.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++) this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = true, this.textures[o].renderTarget = this;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let r = 0, s = this.textures.length; r < s; r++) this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, r = e.textures.length; n < r; n++) this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = true, this.textures[n].renderTarget = this;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new go(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Un extends Hl {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = true;
  }
}
class _o extends Mt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Bt, this.minFilter = Bt, this.wrapR = Pn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class Vl extends Mt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = Bt, this.minFilter = Bt, this.wrapR = Pn, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class Ai {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  static slerpFlat(e, t, n, r, s, a, o) {
    let l = n[r + 0], c = n[r + 1], u = n[r + 2], f = n[r + 3];
    const d = s[a + 0], m = s[a + 1], v = s[a + 2], x = s[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = f;
      return;
    }
    if (o === 1) {
      e[t + 0] = d, e[t + 1] = m, e[t + 2] = v, e[t + 3] = x;
      return;
    }
    if (f !== x || l !== d || c !== m || u !== v) {
      let p = 1 - o;
      const h = l * d + c * m + u * v + f * x, b = h >= 0 ? 1 : -1, A = 1 - h * h;
      if (A > Number.EPSILON) {
        const U = Math.sqrt(A), L = Math.atan2(U, h * b);
        p = Math.sin(p * L) / U, o = Math.sin(o * L) / U;
      }
      const y = o * b;
      if (l = l * p + d * y, c = c * p + m * y, u = u * p + v * y, f = f * p + x * y, p === 1 - o) {
        const U = 1 / Math.sqrt(l * l + c * c + u * u + f * f);
        l *= U, c *= U, u *= U, f *= U;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = u, e[t + 3] = f;
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, a) {
    const o = n[r], l = n[r + 1], c = n[r + 2], u = n[r + 3], f = s[a], d = s[a + 1], m = s[a + 2], v = s[a + 3];
    return e[t] = o * v + u * f + l * m - c * d, e[t + 1] = l * v + u * d + c * f - o * m, e[t + 2] = c * v + u * m + o * d - l * f, e[t + 3] = u * v - o * f - l * d - c * m, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, r) {
    return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = true) {
    const n = e._x, r = e._y, s = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), u = o(r / 2), f = o(s / 2), d = l(n / 2), m = l(r / 2), v = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = d * u * f + c * m * v, this._y = c * m * f - d * u * v, this._z = c * u * v + d * m * f, this._w = c * u * f - d * m * v;
        break;
      case "YXZ":
        this._x = d * u * f + c * m * v, this._y = c * m * f - d * u * v, this._z = c * u * v - d * m * f, this._w = c * u * f + d * m * v;
        break;
      case "ZXY":
        this._x = d * u * f - c * m * v, this._y = c * m * f + d * u * v, this._z = c * u * v + d * m * f, this._w = c * u * f - d * m * v;
        break;
      case "ZYX":
        this._x = d * u * f - c * m * v, this._y = c * m * f + d * u * v, this._z = c * u * v - d * m * f, this._w = c * u * f + d * m * v;
        break;
      case "YZX":
        this._x = d * u * f + c * m * v, this._y = c * m * f + d * u * v, this._z = c * u * v - d * m * f, this._w = c * u * f - d * m * v;
        break;
      case "XZY":
        this._x = d * u * f - c * m * v, this._y = c * m * f - d * u * v, this._z = c * u * v + d * m * f, this._w = c * u * f + d * m * v;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], a = t[1], o = t[5], l = t[9], c = t[2], u = t[6], f = t[10], d = n + o + f;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / m, this._x = (u - l) * m, this._y = (s - c) * m, this._z = (a - r) * m;
    } else if (n > o && n > f) {
      const m = 2 * Math.sqrt(1 + n - o - f);
      this._w = (u - l) / m, this._x = 0.25 * m, this._y = (r + a) / m, this._z = (s + c) / m;
    } else if (o > f) {
      const m = 2 * Math.sqrt(1 + o - n - f);
      this._w = (s - c) / m, this._x = (r + a) / m, this._y = 0.25 * m, this._z = (l + u) / m;
    } else {
      const m = 2 * Math.sqrt(1 + f - n - o);
      this._w = (a - r) / m, this._x = (s + c) / m, this._y = (l + u) / m, this._z = 0.25 * m;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Ue(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const r = Math.min(1, t / n);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, s = e._z, a = e._w, o = t._x, l = t._y, c = t._z, u = t._w;
    return this._x = n * u + a * o + r * c - s * l, this._y = r * u + a * l + s * o - n * c, this._z = s * u + a * c + n * l - r * o, this._w = a * u - n * o - r * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, r = this._y, s = this._z, a = this._w;
    let o = a * e._w + n * e._x + r * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = r, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const m = 1 - t;
      return this._w = m * a + t * this._w, this._x = m * n + t * this._x, this._y = m * r + t * this._y, this._z = m * s + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), u = Math.atan2(c, o), f = Math.sin((1 - t) * u) / c, d = Math.sin(t * u) / c;
    return this._w = a * f + this._w * d, this._x = n * f + this._x * d, this._y = r * f + this._y * d, this._z = s * f + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(r * Math.sin(e), r * Math.cos(e), s * Math.sin(t), s * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class O {
  constructor(e = 0, t = 0, n = 0) {
    O.prototype.isVector3 = true, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(ca.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(ca.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * r - o * n), u = 2 * (o * t - s * r), f = 2 * (s * n - a * t);
    return this.x = t + l * c + a * f - o * u, this.y = n + l * u + o * c - s * f, this.z = r + l * f + s * u - a * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Ue(this.x, e.x, t.x), this.y = Ue(this.y, e.y, t.y), this.z = Ue(this.z, e.z, t.z), this;
  }
  clampScalar(e, t) {
    return this.x = Ue(this.x, e, t), this.y = Ue(this.y, e, t), this.z = Ue(this.z, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Ue(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, r = e.y, s = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = r * l - s * o, this.y = s * a - n * l, this.z = n * o - r * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Sr.copy(this).projectOnVector(e), this.sub(Sr);
  }
  reflect(e) {
    return this.sub(Sr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Ue(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = r, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Sr = new O(), ca = new Ai();
class Ti {
  constructor(e = new O(1 / 0, 1 / 0, 1 / 0), t = new O(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Ut.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Ut.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Ut.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = false) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = false) {
    e.updateWorldMatrix(false, false);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === true && s !== void 0 && e.isInstancedMesh !== true) for (let a = 0, o = s.count; a < o; a++) e.isMesh === true ? e.getVertexPosition(a, Ut) : Ut.fromBufferAttribute(s, a), Ut.applyMatrix4(e.matrixWorld), this.expandByPoint(Ut);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Ci.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Ci.copy(n.boundingBox)), Ci.applyMatrix4(e.matrixWorld), this.union(Ci);
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++) this.expandByObject(r[s], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Ut), Ut.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(fi), Pi.subVectors(this.max, fi), On.subVectors(e.a, fi), Bn.subVectors(e.b, fi), zn.subVectors(e.c, fi), an.subVectors(Bn, On), on.subVectors(zn, Bn), Mn.subVectors(On, zn);
    let t = [0, -an.z, an.y, 0, -on.z, on.y, 0, -Mn.z, Mn.y, an.z, 0, -an.x, on.z, 0, -on.x, Mn.z, 0, -Mn.x, -an.y, an.x, 0, -on.y, on.x, 0, -Mn.y, Mn.x, 0];
    return !Er(t, On, Bn, zn, Pi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Er(t, On, Bn, zn, Pi)) ? false : (Li.crossVectors(an, on), t = [Li.x, Li.y, Li.z], Er(t, On, Bn, zn, Pi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Ut).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Ut).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : ($t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), $t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), $t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), $t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), $t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), $t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), $t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), $t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints($t), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const $t = [new O(), new O(), new O(), new O(), new O(), new O(), new O(), new O()], Ut = new O(), Ci = new Ti(), On = new O(), Bn = new O(), zn = new O(), an = new O(), on = new O(), Mn = new O(), fi = new O(), Pi = new O(), Li = new O(), Sn = new O();
function Er(i, e, t, n, r) {
  for (let s = 0, a = i.length - 3; s <= a; s += 3) {
    Sn.fromArray(i, s);
    const o = r.x * Math.abs(Sn.x) + r.y * Math.abs(Sn.y) + r.z * Math.abs(Sn.z), l = e.dot(Sn), c = t.dot(Sn), u = n.dot(Sn);
    if (Math.max(-Math.max(l, c, u), Math.min(l, c, u)) > o) return false;
  }
  return true;
}
const Gl = new Ti(), pi = new O(), yr = new O();
class ur {
  constructor(e = new O(), t = -1) {
    this.isSphere = true, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Gl.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++) r = Math.max(r, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(r), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
    pi.subVectors(e, this.center);
    const t = pi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(pi, r / n), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (yr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(pi.copy(e.center).add(yr)), this.expandByPoint(pi.copy(e.center).sub(yr))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const qt = new O(), Ar = new O(), Di = new O(), ln = new O(), Tr = new O(), Ui = new O(), br = new O();
class vo {
  constructor(e = new O(), t = new O(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, qt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = qt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (qt.copy(this.origin).addScaledVector(this.direction, t), qt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    Ar.copy(e).add(t).multiplyScalar(0.5), Di.copy(t).sub(e).normalize(), ln.copy(this.origin).sub(Ar);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(Di), o = ln.dot(this.direction), l = -ln.dot(Di), c = ln.lengthSq(), u = Math.abs(1 - a * a);
    let f, d, m, v;
    if (u > 0) if (f = a * l - o, d = a * o - l, v = s * u, f >= 0) if (d >= -v) if (d <= v) {
      const x = 1 / u;
      f *= x, d *= x, m = f * (f + a * d + 2 * o) + d * (a * f + d + 2 * l) + c;
    } else d = s, f = Math.max(0, -(a * d + o)), m = -f * f + d * (d + 2 * l) + c;
    else d = -s, f = Math.max(0, -(a * d + o)), m = -f * f + d * (d + 2 * l) + c;
    else d <= -v ? (f = Math.max(0, -(-a * s + o)), d = f > 0 ? -s : Math.min(Math.max(-s, -l), s), m = -f * f + d * (d + 2 * l) + c) : d <= v ? (f = 0, d = Math.min(Math.max(-s, -l), s), m = d * (d + 2 * l) + c) : (f = Math.max(0, -(a * s + o)), d = f > 0 ? s : Math.min(Math.max(-s, -l), s), m = -f * f + d * (d + 2 * l) + c);
    else d = a > 0 ? -s : s, f = Math.max(0, -(a * d + o)), m = -f * f + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, f), r && r.copy(Ar).addScaledVector(Di, d), m;
  }
  intersectSphere(e, t) {
    qt.subVectors(e.center, this.origin);
    const n = qt.dot(this.direction), r = qt.dot(qt) - n * n, s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, a, o, l;
    const c = 1 / this.direction.x, u = 1 / this.direction.y, f = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, r = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, r = (e.min.x - d.x) * c), u >= 0 ? (s = (e.min.y - d.y) * u, a = (e.max.y - d.y) * u) : (s = (e.max.y - d.y) * u, a = (e.min.y - d.y) * u), n > a || s > r || ((s > n || isNaN(n)) && (n = s), (a < r || isNaN(r)) && (r = a), f >= 0 ? (o = (e.min.z - d.z) * f, l = (e.max.z - d.z) * f) : (o = (e.max.z - d.z) * f, l = (e.min.z - d.z) * f), n > l || o > r) || ((o > n || n !== n) && (n = o), (l < r || r !== r) && (r = l), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, qt) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    Tr.subVectors(t, e), Ui.subVectors(n, e), br.crossVectors(Tr, Ui);
    let a = this.direction.dot(br), o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    ln.subVectors(this.origin, e);
    const l = o * this.direction.dot(Ui.crossVectors(ln, Ui));
    if (l < 0) return null;
    const c = o * this.direction.dot(Tr.cross(ln));
    if (c < 0 || l + c > a) return null;
    const u = -o * ln.dot(br);
    return u < 0 ? null : this.at(u / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class rt {
  constructor(e, t, n, r, s, a, o, l, c, u, f, d, m, v, x, p) {
    rt.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, r, s, a, o, l, c, u, f, d, m, v, x, p);
  }
  set(e, t, n, r, s, a, o, l, c, u, f, d, m, v, x, p) {
    const h = this.elements;
    return h[0] = e, h[4] = t, h[8] = n, h[12] = r, h[1] = s, h[5] = a, h[9] = o, h[13] = l, h[2] = c, h[6] = u, h[10] = f, h[14] = d, h[3] = m, h[7] = v, h[11] = x, h[15] = p, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new rt().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, r = 1 / Hn.setFromMatrixColumn(e, 0).length(), s = 1 / Hn.setFromMatrixColumn(e, 1).length(), a = 1 / Hn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(r), c = Math.sin(r), u = Math.cos(s), f = Math.sin(s);
    if (e.order === "XYZ") {
      const d = a * u, m = a * f, v = o * u, x = o * f;
      t[0] = l * u, t[4] = -l * f, t[8] = c, t[1] = m + v * c, t[5] = d - x * c, t[9] = -o * l, t[2] = x - d * c, t[6] = v + m * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const d = l * u, m = l * f, v = c * u, x = c * f;
      t[0] = d + x * o, t[4] = v * o - m, t[8] = a * c, t[1] = a * f, t[5] = a * u, t[9] = -o, t[2] = m * o - v, t[6] = x + d * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const d = l * u, m = l * f, v = c * u, x = c * f;
      t[0] = d - x * o, t[4] = -a * f, t[8] = v + m * o, t[1] = m + v * o, t[5] = a * u, t[9] = x - d * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const d = a * u, m = a * f, v = o * u, x = o * f;
      t[0] = l * u, t[4] = v * c - m, t[8] = d * c + x, t[1] = l * f, t[5] = x * c + d, t[9] = m * c - v, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const d = a * l, m = a * c, v = o * l, x = o * c;
      t[0] = l * u, t[4] = x - d * f, t[8] = v * f + m, t[1] = f, t[5] = a * u, t[9] = -o * u, t[2] = -c * u, t[6] = m * f + v, t[10] = d - x * f;
    } else if (e.order === "XZY") {
      const d = a * l, m = a * c, v = o * l, x = o * c;
      t[0] = l * u, t[4] = -f, t[8] = c * u, t[1] = d * f + x, t[5] = a * u, t[9] = m * f - v, t[2] = v * f - m, t[6] = o * u, t[10] = x * f + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(kl, e, Wl);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return yt.subVectors(e, t), yt.lengthSq() === 0 && (yt.z = 1), yt.normalize(), cn.crossVectors(n, yt), cn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? yt.x += 1e-4 : yt.z += 1e-4, yt.normalize(), cn.crossVectors(n, yt)), cn.normalize(), Ii.crossVectors(yt, cn), r[0] = cn.x, r[4] = Ii.x, r[8] = yt.x, r[1] = cn.y, r[5] = Ii.y, r[9] = yt.y, r[2] = cn.z, r[6] = Ii.z, r[10] = yt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], u = n[1], f = n[5], d = n[9], m = n[13], v = n[2], x = n[6], p = n[10], h = n[14], b = n[3], A = n[7], y = n[11], U = n[15], L = r[0], w = r[4], I = r[8], S = r[12], M = r[1], R = r[5], k = r[9], z = r[13], Y = r[2], K = r[6], X = r[10], j = r[14], V = r[3], re = r[7], ue = r[11], ve = r[15];
    return s[0] = a * L + o * M + l * Y + c * V, s[4] = a * w + o * R + l * K + c * re, s[8] = a * I + o * k + l * X + c * ue, s[12] = a * S + o * z + l * j + c * ve, s[1] = u * L + f * M + d * Y + m * V, s[5] = u * w + f * R + d * K + m * re, s[9] = u * I + f * k + d * X + m * ue, s[13] = u * S + f * z + d * j + m * ve, s[2] = v * L + x * M + p * Y + h * V, s[6] = v * w + x * R + p * K + h * re, s[10] = v * I + x * k + p * X + h * ue, s[14] = v * S + x * z + p * j + h * ve, s[3] = b * L + A * M + y * Y + U * V, s[7] = b * w + A * R + y * K + U * re, s[11] = b * I + A * k + y * X + U * ue, s[15] = b * S + A * z + y * j + U * ve, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], a = e[1], o = e[5], l = e[9], c = e[13], u = e[2], f = e[6], d = e[10], m = e[14], v = e[3], x = e[7], p = e[11], h = e[15];
    return v * (+s * l * f - r * c * f - s * o * d + n * c * d + r * o * m - n * l * m) + x * (+t * l * m - t * c * d + s * a * d - r * a * m + r * c * u - s * l * u) + p * (+t * c * f - t * o * m - s * a * f + n * a * m + s * o * u - n * c * u) + h * (-r * o * u - t * l * f + t * o * d + r * a * f - n * a * d + n * l * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], u = e[8], f = e[9], d = e[10], m = e[11], v = e[12], x = e[13], p = e[14], h = e[15], b = f * p * c - x * d * c + x * l * m - o * p * m - f * l * h + o * d * h, A = v * d * c - u * p * c - v * l * m + a * p * m + u * l * h - a * d * h, y = u * x * c - v * f * c + v * o * m - a * x * m - u * o * h + a * f * h, U = v * f * l - u * x * l - v * o * d + a * x * d + u * o * p - a * f * p, L = t * b + n * A + r * y + s * U;
    if (L === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / L;
    return e[0] = b * w, e[1] = (x * d * s - f * p * s - x * r * m + n * p * m + f * r * h - n * d * h) * w, e[2] = (o * p * s - x * l * s + x * r * c - n * p * c - o * r * h + n * l * h) * w, e[3] = (f * l * s - o * d * s - f * r * c + n * d * c + o * r * m - n * l * m) * w, e[4] = A * w, e[5] = (u * p * s - v * d * s + v * r * m - t * p * m - u * r * h + t * d * h) * w, e[6] = (v * l * s - a * p * s - v * r * c + t * p * c + a * r * h - t * l * h) * w, e[7] = (a * d * s - u * l * s + u * r * c - t * d * c - a * r * m + t * l * m) * w, e[8] = y * w, e[9] = (v * f * s - u * x * s - v * n * m + t * x * m + u * n * h - t * f * h) * w, e[10] = (a * x * s - v * o * s + v * n * c - t * x * c - a * n * h + t * o * h) * w, e[11] = (u * o * s - a * f * s - u * n * c + t * f * c + a * n * m - t * o * m) * w, e[12] = U * w, e[13] = (u * x * r - v * f * r + v * n * d - t * x * d - u * n * p + t * f * p) * w, e[14] = (v * o * r - a * x * r - v * n * l + t * x * l + a * n * p - t * o * p) * w, e[15] = (a * f * r - u * o * r + u * n * l - t * f * l - a * n * d + t * o * d) * w, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, a = e.x, o = e.y, l = e.z, c = s * a, u = s * o;
    return this.set(c * a + n, c * o - r * l, c * l + r * o, 0, c * o + r * l, u * o + n, u * l - r * a, 0, c * l - r * o, u * l + r * a, s * l * l + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, r, s, a) {
    return this.set(1, n, s, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const r = this.elements, s = t._x, a = t._y, o = t._z, l = t._w, c = s + s, u = a + a, f = o + o, d = s * c, m = s * u, v = s * f, x = a * u, p = a * f, h = o * f, b = l * c, A = l * u, y = l * f, U = n.x, L = n.y, w = n.z;
    return r[0] = (1 - (x + h)) * U, r[1] = (m + y) * U, r[2] = (v - A) * U, r[3] = 0, r[4] = (m - y) * L, r[5] = (1 - (d + h)) * L, r[6] = (p + b) * L, r[7] = 0, r[8] = (v + A) * w, r[9] = (p - b) * w, r[10] = (1 - (d + x)) * w, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = Hn.set(r[0], r[1], r[2]).length();
    const a = Hn.set(r[4], r[5], r[6]).length(), o = Hn.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], It.copy(this);
    const c = 1 / s, u = 1 / a, f = 1 / o;
    return It.elements[0] *= c, It.elements[1] *= c, It.elements[2] *= c, It.elements[4] *= u, It.elements[5] *= u, It.elements[6] *= u, It.elements[8] *= f, It.elements[9] *= f, It.elements[10] *= f, t.setFromRotationMatrix(It), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, r, s, a, o = en) {
    const l = this.elements, c = 2 * s / (t - e), u = 2 * s / (n - r), f = (t + e) / (t - e), d = (n + r) / (n - r);
    let m, v;
    if (o === en) m = -(a + s) / (a - s), v = -2 * a * s / (a - s);
    else if (o === sr) m = -a / (a - s), v = -a * s / (a - s);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = u, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = m, l[14] = v, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, r, s, a, o = en) {
    const l = this.elements, c = 1 / (t - e), u = 1 / (n - r), f = 1 / (a - s), d = (t + e) * c, m = (n + r) * u;
    let v, x;
    if (o === en) v = (a + s) * f, x = -2 * f;
    else if (o === sr) v = s * f, x = -1 * f;
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * u, l[9] = 0, l[13] = -m, l[2] = 0, l[6] = 0, l[10] = x, l[14] = -v, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++) if (t[r] !== n[r]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Hn = new O(), It = new rt(), kl = new O(0, 0, 0), Wl = new O(1, 1, 1), cn = new O(), Ii = new O(), yt = new O(), ua = new rt(), ha = new Ai();
class rn {
  constructor(e = 0, t = 0, n = 0, r = rn.DEFAULT_ORDER) {
    this.isEuler = true, this._x = e, this._y = t, this._z = n, this._order = r;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, r = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = true) {
    const r = e.elements, s = r[0], a = r[4], o = r[8], l = r[1], c = r[5], u = r[9], f = r[2], d = r[6], m = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Ue(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-u, m), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Ue(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(o, m), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-f, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Ue(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-f, m), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Ue(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._x = Math.atan2(d, m), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Ue(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-u, c), this._y = Math.atan2(-f, s)) : (this._x = 0, this._y = Math.atan2(o, m));
        break;
      case "XZY":
        this._z = Math.asin(-Ue(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-u, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return ua.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ua, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return ha.setFromEuler(this), this.setFromQuaternion(ha, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
rn.DEFAULT_ORDER = "XYZ";
class xo {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Xl = 0;
const da = new O(), Vn = new Ai(), Yt = new rt(), Ni = new O(), mi = new O(), $l = new O(), ql = new Ai(), fa = new O(1, 0, 0), pa = new O(0, 1, 0), ma = new O(0, 0, 1), ga = { type: "added" }, Yl = { type: "removed" }, Gn = { type: "childadded", child: null }, wr = { type: "childremoved", child: null };
class St extends oi {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Xl++ }), this.uuid = yi(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = St.DEFAULT_UP.clone();
    const e = new O(), t = new rn(), n = new Ai(), r = new O(1, 1, 1);
    function s() {
      n.setFromEuler(t, false);
    }
    function a() {
      t.setFromQuaternion(n, void 0, false);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: r }, modelViewMatrix: { value: new rt() }, normalMatrix: { value: new Ce() } }), this.matrix = new rt(), this.matrixWorld = new rt(), this.matrixAutoUpdate = St.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new xo(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, true);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Vn.setFromAxisAngle(e, t), this.quaternion.multiply(Vn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Vn.setFromAxisAngle(e, t), this.quaternion.premultiply(Vn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(fa, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(pa, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(ma, e);
  }
  translateOnAxis(e, t) {
    return da.copy(e).applyQuaternion(this.quaternion), this.position.add(da.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(fa, e);
  }
  translateY(e) {
    return this.translateOnAxis(pa, e);
  }
  translateZ(e) {
    return this.translateOnAxis(ma, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(Yt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ni.copy(e) : Ni.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(true, false), mi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Yt.lookAt(mi, Ni, this.up) : Yt.lookAt(Ni, mi, this.up), this.quaternion.setFromRotationMatrix(Yt), r && (Yt.extractRotation(r.matrixWorld), Vn.setFromRotationMatrix(Yt), this.quaternion.premultiply(Vn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(ga), Gn.child = e, this.dispatchEvent(Gn), Gn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Yl), wr.child = e, this.dispatchEvent(wr), wr.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), Yt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), Yt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Yt), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(ga), Gn.child = e, this.dispatchEvent(Gn), Gn.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++) r[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(mi, e, $l), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(mi, ql, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === false) return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, e = true);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === true && n !== null && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === true) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++) r[s].updateWorldMatrix(false, true);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === true && (r.castShadow = true), this.receiveShadow === true && (r.receiveShadow = true), this.visible === false && (r.visible = false), this.frustumCulled === false && (r.frustumCulled = false), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === false && (r.matrixAutoUpdate = false), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r.active = this._active, r.bounds = this._bounds.map((o) => ({ boxInitialized: o.boxInitialized, boxMin: o.box.min.toArray(), boxMax: o.box.max.toArray(), sphereInitialized: o.sphereInitialized, sphereRadius: o.sphere.radius, sphereCenter: o.sphere.center.toArray() })), r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = { center: r.boundingSphere.center.toArray(), radius: r.boundingSphere.radius }), this.boundingBox !== null && (r.boundingBox = { min: r.boundingBox.min.toArray(), max: r.boundingBox.max.toArray() }));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l)) for (let c = 0, u = l.length; c < u; c++) {
          const f = l[c];
          s(e.shapes, f);
        }
        else s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let l = 0, c = this.material.length; l < c; l++) o.push(s(e.materials, this.material[l]));
      r.material = o;
    } else r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++) r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        r.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), u = a(e.images), f = a(e.shapes), d = a(e.skeletons), m = a(e.animations), v = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), u.length > 0 && (n.images = u), f.length > 0 && (n.shapes = f), d.length > 0 && (n.skeletons = d), m.length > 0 && (n.animations = m), v.length > 0 && (n.nodes = v);
    }
    return n.object = r, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const u = o[c];
        delete u.metadata, l.push(u);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = true) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let n = 0; n < e.children.length; n++) {
      const r = e.children[n];
      this.add(r.clone());
    }
    return this;
  }
}
St.DEFAULT_UP = new O(0, 1, 0);
St.DEFAULT_MATRIX_AUTO_UPDATE = true;
St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const Nt = new O(), Kt = new O(), Rr = new O(), Zt = new O(), kn = new O(), Wn = new O(), _a = new O(), Cr = new O(), Pr = new O(), Lr = new O(), Dr = new it(), Ur = new it(), Ir = new it();
class Ft {
  constructor(e = new O(), t = new O(), n = new O()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Nt.subVectors(e, t), r.cross(Nt);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, r, s) {
    Nt.subVectors(r, t), Kt.subVectors(n, t), Rr.subVectors(e, t);
    const a = Nt.dot(Nt), o = Nt.dot(Kt), l = Nt.dot(Rr), c = Kt.dot(Kt), u = Kt.dot(Rr), f = a * c - o * o;
    if (f === 0) return s.set(0, 0, 0), null;
    const d = 1 / f, m = (c * l - o * u) * d, v = (a * u - o * l) * d;
    return s.set(1 - m - v, v, m);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, Zt) === null ? false : Zt.x >= 0 && Zt.y >= 0 && Zt.x + Zt.y <= 1;
  }
  static getInterpolation(e, t, n, r, s, a, o, l) {
    return this.getBarycoord(e, t, n, r, Zt) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, Zt.x), l.addScaledVector(a, Zt.y), l.addScaledVector(o, Zt.z), l);
  }
  static getInterpolatedAttribute(e, t, n, r, s, a) {
    return Dr.setScalar(0), Ur.setScalar(0), Ir.setScalar(0), Dr.fromBufferAttribute(e, t), Ur.fromBufferAttribute(e, n), Ir.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(Dr, s.x), a.addScaledVector(Ur, s.y), a.addScaledVector(Ir, s.z), a;
  }
  static isFrontFacing(e, t, n, r) {
    return Nt.subVectors(n, t), Kt.subVectors(e, t), Nt.cross(Kt).dot(r) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, r) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, t, n, r) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Nt.subVectors(this.c, this.b), Kt.subVectors(this.a, this.b), Nt.cross(Kt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Ft.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Ft.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, r, s) {
    return Ft.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Ft.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Ft.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let a, o;
    kn.subVectors(r, n), Wn.subVectors(s, n), Cr.subVectors(e, n);
    const l = kn.dot(Cr), c = Wn.dot(Cr);
    if (l <= 0 && c <= 0) return t.copy(n);
    Pr.subVectors(e, r);
    const u = kn.dot(Pr), f = Wn.dot(Pr);
    if (u >= 0 && f <= u) return t.copy(r);
    const d = l * f - u * c;
    if (d <= 0 && l >= 0 && u <= 0) return a = l / (l - u), t.copy(n).addScaledVector(kn, a);
    Lr.subVectors(e, s);
    const m = kn.dot(Lr), v = Wn.dot(Lr);
    if (v >= 0 && m <= v) return t.copy(s);
    const x = m * c - l * v;
    if (x <= 0 && c >= 0 && v <= 0) return o = c / (c - v), t.copy(n).addScaledVector(Wn, o);
    const p = u * v - m * f;
    if (p <= 0 && f - u >= 0 && m - v >= 0) return _a.subVectors(s, r), o = (f - u) / (f - u + (m - v)), t.copy(r).addScaledVector(_a, o);
    const h = 1 / (p + x + d);
    return a = x * h, o = d * h, t.copy(n).addScaledVector(kn, a).addScaledVector(Wn, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Mo = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, un = { h: 0, s: 0, l: 0 }, Fi = { h: 0, s: 0, l: 0 };
function Nr(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class ke {
  constructor(e, t, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const r = e;
      r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r == "string" && this.setStyle(r);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Ct) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ve.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, r = Ve.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Ve.toWorkingColorSpace(this, r), this;
  }
  setHSL(e, t, n, r = Ve.workingColorSpace) {
    if (e = Ll(e, 1), t = Ue(t, 0, 1), n = Ue(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = Nr(a, s, e + 1 / 3), this.g = Nr(a, s, e), this.b = Nr(a, s, e - 1 / 3);
    }
    return Ve.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = Ct) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = r[1], o = r[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t);
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], a = s.length;
      if (a === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t);
      if (a === 6) return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Ct) {
    const n = Mo[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = tn(e.r), this.g = tn(e.g), this.b = tn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Qn(e.r), this.g = Qn(e.g), this.b = Qn(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ct) {
    return Ve.fromWorkingColorSpace(ft.copy(this), e), Math.round(Ue(ft.r * 255, 0, 255)) * 65536 + Math.round(Ue(ft.g * 255, 0, 255)) * 256 + Math.round(Ue(ft.b * 255, 0, 255));
  }
  getHexString(e = Ct) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Ve.workingColorSpace) {
    Ve.fromWorkingColorSpace(ft.copy(this), t);
    const n = ft.r, r = ft.g, s = ft.b, a = Math.max(n, r, s), o = Math.min(n, r, s);
    let l, c;
    const u = (o + a) / 2;
    if (o === a) l = 0, c = 0;
    else {
      const f = a - o;
      switch (c = u <= 0.5 ? f / (a + o) : f / (2 - a - o), a) {
        case n:
          l = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - n) / f + 2;
          break;
        case s:
          l = (n - r) / f + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = u, e;
  }
  getRGB(e, t = Ve.workingColorSpace) {
    return Ve.fromWorkingColorSpace(ft.copy(this), t), e.r = ft.r, e.g = ft.g, e.b = ft.b, e;
  }
  getStyle(e = Ct) {
    Ve.fromWorkingColorSpace(ft.copy(this), e);
    const t = ft.r, n = ft.g, r = ft.b;
    return e !== Ct ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(un), this.setHSL(un.h + e, un.s + t, un.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(un), e.getHSL(Fi);
    const n = vr(un.h, Fi.h, t), r = vr(un.s, Fi.s, t), s = vr(un.l, Fi.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const ft = new ke();
ke.NAMES = Mo;
let Kl = 0;
class li extends oi {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Kl++ }), this.uuid = yi(), this.name = "", this.type = "Material", this.blending = jn, this.side = mn, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = Yr, this.blendDst = Kr, this.blendEquation = Rn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ke(0, 0, 0), this.blendAlpha = 0, this.depthFunc = ei, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = ia, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Nn, this.stencilZFail = Nn, this.stencilZPass = Nn, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0) for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
        continue;
      }
      const r = this[t];
      if (r === void 0) {
        console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
        continue;
      }
      r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== jn && (n.blending = this.blending), this.side !== mn && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== Yr && (n.blendSrc = this.blendSrc), this.blendDst !== Kr && (n.blendDst = this.blendDst), this.blendEquation !== Rn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== ei && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== ia && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== Nn && (n.stencilFail = this.stencilFail), this.stencilZFail !== Nn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Nn && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const s = r(e.textures), a = r(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s) n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class So extends li {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new ke(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new rn(), this.combine = eo, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const at = new O(), Oi = new Ye();
let Zl = 0;
class kt {
  constructor(e, t, n = false) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, Object.defineProperty(this, "id", { value: Zl++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = ra, this.updateRanges = [], this.gpuType = Qt, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++) this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) Oi.fromBufferAttribute(this, t), Oi.applyMatrix3(e), this.setXY(t, Oi.x, Oi.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) at.fromBufferAttribute(this, t), at.applyMatrix3(e), this.setXYZ(t, at.x, at.y, at.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) at.fromBufferAttribute(this, t), at.applyMatrix4(e), this.setXYZ(t, at.x, at.y, at.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) at.fromBufferAttribute(this, t), at.applyNormalMatrix(e), this.setXYZ(t, at.x, at.y, at.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) at.fromBufferAttribute(this, t), at.transformDirection(e), this.setXYZ(t, at.x, at.y, at.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = di(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = vt(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = di(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = vt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = di(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = vt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = di(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = vt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = di(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = vt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = vt(t, this.array), n = vt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = vt(t, this.array), n = vt(n, this.array), r = vt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = vt(t, this.array), n = vt(n, this.array), r = vt(r, this.array), s = vt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== ra && (e.usage = this.usage), e;
  }
}
class Eo extends kt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class yo extends kt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class zt extends kt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let jl = 0;
const Rt = new rt(), Fr = new St(), Xn = new O(), At = new Ti(), gi = new Ti(), ct = new O();
class sn extends oi {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: jl++ }), this.uuid = yi(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (mo(e) ? yo : Eo)(e, 1) : this.index = e, this;
  }
  setIndirect(e) {
    return this.indirect = e, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = true);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Ce().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = true;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Rt.makeRotationFromQuaternion(e), this.applyMatrix4(Rt), this;
  }
  rotateX(e) {
    return Rt.makeRotationX(e), this.applyMatrix4(Rt), this;
  }
  rotateY(e) {
    return Rt.makeRotationY(e), this.applyMatrix4(Rt), this;
  }
  rotateZ(e) {
    return Rt.makeRotationZ(e), this.applyMatrix4(Rt), this;
  }
  translate(e, t, n) {
    return Rt.makeTranslation(e, t, n), this.applyMatrix4(Rt), this;
  }
  scale(e, t, n) {
    return Rt.makeScale(e, t, n), this.applyMatrix4(Rt), this;
  }
  lookAt(e) {
    return Fr.lookAt(e), Fr.updateMatrix(), this.applyMatrix4(Fr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Xn).negate(), this.translate(Xn.x, Xn.y, Xn.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let r = 0, s = e.length; r < s; r++) {
        const a = e[r];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new zt(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let r = 0; r < n; r++) {
        const s = e[r];
        t.setXYZ(r, s.x, s.y, s.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Ti());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new O(-1 / 0, -1 / 0, -1 / 0), new O(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, r = t.length; n < r; n++) {
        const s = t[n];
        At.setFromBufferAttribute(s), this.morphTargetsRelative ? (ct.addVectors(this.boundingBox.min, At.min), this.boundingBox.expandByPoint(ct), ct.addVectors(this.boundingBox.max, At.max), this.boundingBox.expandByPoint(ct)) : (this.boundingBox.expandByPoint(At.min), this.boundingBox.expandByPoint(At.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ur());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new O(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (At.setFromBufferAttribute(e), t) for (let s = 0, a = t.length; s < a; s++) {
        const o = t[s];
        gi.setFromBufferAttribute(o), this.morphTargetsRelative ? (ct.addVectors(At.min, gi.min), At.expandByPoint(ct), ct.addVectors(At.max, gi.max), At.expandByPoint(ct)) : (At.expandByPoint(gi.min), At.expandByPoint(gi.max));
      }
      At.getCenter(n);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++) ct.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(ct));
      if (t) for (let s = 0, a = t.length; s < a; s++) {
        const o = t[s], l = this.morphTargetsRelative;
        for (let c = 0, u = o.count; c < u; c++) ct.fromBufferAttribute(o, c), l && (Xn.fromBufferAttribute(e, c), ct.add(Xn)), r = Math.max(r, n.distanceToSquared(ct));
      }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, r = t.normal, s = t.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new kt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let I = 0; I < n.count; I++) o[I] = new O(), l[I] = new O();
    const c = new O(), u = new O(), f = new O(), d = new Ye(), m = new Ye(), v = new Ye(), x = new O(), p = new O();
    function h(I, S, M) {
      c.fromBufferAttribute(n, I), u.fromBufferAttribute(n, S), f.fromBufferAttribute(n, M), d.fromBufferAttribute(s, I), m.fromBufferAttribute(s, S), v.fromBufferAttribute(s, M), u.sub(c), f.sub(c), m.sub(d), v.sub(d);
      const R = 1 / (m.x * v.y - v.x * m.y);
      isFinite(R) && (x.copy(u).multiplyScalar(v.y).addScaledVector(f, -m.y).multiplyScalar(R), p.copy(f).multiplyScalar(m.x).addScaledVector(u, -v.x).multiplyScalar(R), o[I].add(x), o[S].add(x), o[M].add(x), l[I].add(p), l[S].add(p), l[M].add(p));
    }
    let b = this.groups;
    b.length === 0 && (b = [{ start: 0, count: e.count }]);
    for (let I = 0, S = b.length; I < S; ++I) {
      const M = b[I], R = M.start, k = M.count;
      for (let z = R, Y = R + k; z < Y; z += 3) h(e.getX(z + 0), e.getX(z + 1), e.getX(z + 2));
    }
    const A = new O(), y = new O(), U = new O(), L = new O();
    function w(I) {
      U.fromBufferAttribute(r, I), L.copy(U);
      const S = o[I];
      A.copy(S), A.sub(U.multiplyScalar(U.dot(S))).normalize(), y.crossVectors(L, S);
      const R = y.dot(l[I]) < 0 ? -1 : 1;
      a.setXYZW(I, A.x, A.y, A.z, R);
    }
    for (let I = 0, S = b.length; I < S; ++I) {
      const M = b[I], R = M.start, k = M.count;
      for (let z = R, Y = R + k; z < Y; z += 3) w(e.getX(z + 0)), w(e.getX(z + 1)), w(e.getX(z + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new kt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else for (let d = 0, m = n.count; d < m; d++) n.setXYZ(d, 0, 0, 0);
      const r = new O(), s = new O(), a = new O(), o = new O(), l = new O(), c = new O(), u = new O(), f = new O();
      if (e) for (let d = 0, m = e.count; d < m; d += 3) {
        const v = e.getX(d + 0), x = e.getX(d + 1), p = e.getX(d + 2);
        r.fromBufferAttribute(t, v), s.fromBufferAttribute(t, x), a.fromBufferAttribute(t, p), u.subVectors(a, s), f.subVectors(r, s), u.cross(f), o.fromBufferAttribute(n, v), l.fromBufferAttribute(n, x), c.fromBufferAttribute(n, p), o.add(u), l.add(u), c.add(u), n.setXYZ(v, o.x, o.y, o.z), n.setXYZ(x, l.x, l.y, l.z), n.setXYZ(p, c.x, c.y, c.z);
      }
      else for (let d = 0, m = t.count; d < m; d += 3) r.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), u.subVectors(a, s), f.subVectors(r, s), u.cross(f), n.setXYZ(d + 0, u.x, u.y, u.z), n.setXYZ(d + 1, u.x, u.y, u.z), n.setXYZ(d + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) ct.fromBufferAttribute(e, t), ct.normalize(), e.setXYZ(t, ct.x, ct.y, ct.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, u = o.itemSize, f = o.normalized, d = new c.constructor(l.length * u);
      let m = 0, v = 0;
      for (let x = 0, p = l.length; x < p; x++) {
        o.isInterleavedBufferAttribute ? m = l[x] * o.data.stride + o.offset : m = l[x] * u;
        for (let h = 0; h < u; h++) d[v++] = c[m++];
      }
      return new kt(d, u, f);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new sn(), n = this.index.array, r = this.attributes;
    for (const o in r) {
      const l = r[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let u = 0, f = c.length; u < f; u++) {
        const d = c[u], m = e(d, n);
        l.push(m);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], u = [];
      for (let f = 0, d = c.length; f < d; f++) {
        const m = c[f];
        u.push(m.toJSON(e.data));
      }
      u.length > 0 && (r[l] = u, s = true);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = { center: o.center.toArray(), radius: o.radius }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const c in r) {
      const u = r[c];
      this.setAttribute(c, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const u = [], f = s[c];
      for (let d = 0, m = f.length; d < m; d++) u.push(f[d].clone(t));
      this.morphAttributes[c] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, u = a.length; c < u; c++) {
      const f = a[c];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const va = new rt(), En = new vo(), Bi = new ur(), xa = new O(), zi = new O(), Hi = new O(), Vi = new O(), Or = new O(), Gi = new O(), Ma = new O(), ki = new O();
class Gt extends St {
  constructor(e = new sn(), t = new So()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Gi.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const u = o[l], f = s[l];
        u !== 0 && (Or.fromBufferAttribute(f, e), a ? Gi.addScaledVector(Or, u) : Gi.addScaledVector(Or.sub(t), u));
      }
      t.add(Gi);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Bi.copy(n.boundingSphere), Bi.applyMatrix4(s), En.copy(e.ray).recast(e.near), !(Bi.containsPoint(En.origin) === false && (En.intersectSphere(Bi, xa) === null || En.origin.distanceToSquared(xa) > (e.far - e.near) ** 2)) && (va.copy(s).invert(), En.copy(e.ray).applyMatrix4(va), !(n.boundingBox !== null && En.intersectsBox(n.boundingBox) === false) && this._computeIntersections(e, t, En)));
  }
  _computeIntersections(e, t, n) {
    let r;
    const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, u = s.attributes.uv1, f = s.attributes.normal, d = s.groups, m = s.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let v = 0, x = d.length; v < x; v++) {
      const p = d[v], h = a[p.materialIndex], b = Math.max(p.start, m.start), A = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
      for (let y = b, U = A; y < U; y += 3) {
        const L = o.getX(y), w = o.getX(y + 1), I = o.getX(y + 2);
        r = Wi(this, h, e, n, c, u, f, L, w, I), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = p.materialIndex, t.push(r));
      }
    }
    else {
      const v = Math.max(0, m.start), x = Math.min(o.count, m.start + m.count);
      for (let p = v, h = x; p < h; p += 3) {
        const b = o.getX(p), A = o.getX(p + 1), y = o.getX(p + 2);
        r = Wi(this, a, e, n, c, u, f, b, A, y), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
      }
    }
    else if (l !== void 0) if (Array.isArray(a)) for (let v = 0, x = d.length; v < x; v++) {
      const p = d[v], h = a[p.materialIndex], b = Math.max(p.start, m.start), A = Math.min(l.count, Math.min(p.start + p.count, m.start + m.count));
      for (let y = b, U = A; y < U; y += 3) {
        const L = y, w = y + 1, I = y + 2;
        r = Wi(this, h, e, n, c, u, f, L, w, I), r && (r.faceIndex = Math.floor(y / 3), r.face.materialIndex = p.materialIndex, t.push(r));
      }
    }
    else {
      const v = Math.max(0, m.start), x = Math.min(l.count, m.start + m.count);
      for (let p = v, h = x; p < h; p += 3) {
        const b = p, A = p + 1, y = p + 2;
        r = Wi(this, a, e, n, c, u, f, b, A, y), r && (r.faceIndex = Math.floor(p / 3), t.push(r));
      }
    }
  }
}
function Jl(i, e, t, n, r, s, a, o) {
  let l;
  if (e.side === xt ? l = n.intersectTriangle(a, s, r, true, o) : l = n.intersectTriangle(r, s, a, e.side === mn, o), l === null) return null;
  ki.copy(o), ki.applyMatrix4(i.matrixWorld);
  const c = t.ray.origin.distanceTo(ki);
  return c < t.near || c > t.far ? null : { distance: c, point: ki.clone(), object: i };
}
function Wi(i, e, t, n, r, s, a, o, l, c) {
  i.getVertexPosition(o, zi), i.getVertexPosition(l, Hi), i.getVertexPosition(c, Vi);
  const u = Jl(i, e, t, n, zi, Hi, Vi, Ma);
  if (u) {
    const f = new O();
    Ft.getBarycoord(Ma, zi, Hi, Vi, f), r && (u.uv = Ft.getInterpolatedAttribute(r, o, l, c, f, new Ye())), s && (u.uv1 = Ft.getInterpolatedAttribute(s, o, l, c, f, new Ye())), a && (u.normal = Ft.getInterpolatedAttribute(a, o, l, c, f, new O()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const d = { a: o, b: l, c, normal: new O(), materialIndex: 0 };
    Ft.getNormal(zi, Hi, Vi, d.normal), u.face = d, u.barycoord = f;
  }
  return u;
}
class ci extends sn {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: r, heightSegments: s, depthSegments: a };
    const o = this;
    r = Math.floor(r), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], u = [], f = [];
    let d = 0, m = 0;
    v("z", "y", "x", -1, -1, n, t, e, a, s, 0), v("z", "y", "x", 1, -1, n, t, -e, a, s, 1), v("x", "z", "y", 1, 1, e, n, t, r, a, 2), v("x", "z", "y", 1, -1, e, n, -t, r, a, 3), v("x", "y", "z", 1, -1, e, t, n, r, s, 4), v("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(l), this.setAttribute("position", new zt(c, 3)), this.setAttribute("normal", new zt(u, 3)), this.setAttribute("uv", new zt(f, 2));
    function v(x, p, h, b, A, y, U, L, w, I, S) {
      const M = y / w, R = U / I, k = y / 2, z = U / 2, Y = L / 2, K = w + 1, X = I + 1;
      let j = 0, V = 0;
      const re = new O();
      for (let ue = 0; ue < X; ue++) {
        const ve = ue * R - z;
        for (let De = 0; De < K; De++) {
          const Ke = De * M - k;
          re[x] = Ke * b, re[p] = ve * A, re[h] = Y, c.push(re.x, re.y, re.z), re[x] = 0, re[p] = 0, re[h] = L > 0 ? 1 : -1, u.push(re.x, re.y, re.z), f.push(De / w), f.push(1 - ue / I), j += 1;
        }
      }
      for (let ue = 0; ue < I; ue++) for (let ve = 0; ve < w; ve++) {
        const De = d + ve + K * ue, Ke = d + ve + K * (ue + 1), W = d + (ve + 1) + K * (ue + 1), ee = d + (ve + 1) + K * ue;
        l.push(De, Ke, ee), l.push(Ke, W, ee), V += 6;
      }
      o.addGroup(m, V, S), m += V, d += j;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ci(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function ai(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function mt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = ai(i[t]);
    for (const r in n) e[r] = n[r];
  }
  return e;
}
function Ql(i) {
  const e = [];
  for (let t = 0; t < i.length; t++) e.push(i[t].clone());
  return e;
}
function Ao(i) {
  const e = i.getRenderTarget();
  return e === null ? i.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : Ve.workingColorSpace;
}
const ec = { clone: ai, merge: mt };
var tc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, nc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class gn extends li {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = tc, this.fragmentShader = nc, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = ai(e.uniforms), this.uniformsGroups = Ql(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture ? t.uniforms[r] = { type: "t", value: a.toJSON(e).uuid } : a && a.isColor ? t.uniforms[r] = { type: "c", value: a.getHex() } : a && a.isVector2 ? t.uniforms[r] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? t.uniforms[r] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? t.uniforms[r] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? t.uniforms[r] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? t.uniforms[r] = { type: "m4", value: a.toArray() } : t.uniforms[r] = { value: a };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions) this.extensions[r] === true && (n[r] = true);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class To extends St {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new rt(), this.projectionMatrix = new rt(), this.projectionMatrixInverse = new rt(), this.coordinateSystem = en;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const hn = new O(), Sa = new Ye(), Ea = new Ye();
class Pt extends To {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Us * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(_r * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Us * 2 * Math.atan(Math.tan(_r * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    hn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(hn.x, hn.y).multiplyScalar(-e / hn.z), hn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(hn.x, hn.y).multiplyScalar(-e / hn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Sa, Ea), t.subVectors(Ea, Sa);
  }
  setViewOffset(e, t, n, r, s, a) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(_r * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      s += a.offsetX * r / l, t -= a.offsetY * n / c, r *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const $n = -90, qn = 1;
class ic extends St {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const r = new Pt($n, qn, e, t);
    r.layers = this.layers, this.add(r);
    const s = new Pt($n, qn, e, t);
    s.layers = this.layers, this.add(s);
    const a = new Pt($n, qn, e, t);
    a.layers = this.layers, this.add(a);
    const o = new Pt($n, qn, e, t);
    o.layers = this.layers, this.add(o);
    const l = new Pt($n, qn, e, t);
    l.layers = this.layers, this.add(l);
    const c = new Pt($n, qn, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, r, s, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === en) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === sr) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, l, c, u] = this.children, f = e.getRenderTarget(), d = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), v = e.xr.enabled;
    e.xr.enabled = false;
    const x = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(n, 1, r), e.render(t, a), e.setRenderTarget(n, 2, r), e.render(t, o), e.setRenderTarget(n, 3, r), e.render(t, l), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture.generateMipmaps = x, e.setRenderTarget(n, 5, r), e.render(t, u), e.setRenderTarget(f, d, m), e.xr.enabled = v, n.texture.needsPMREMUpdate = true;
  }
}
class bo extends Mt {
  constructor(e, t, n, r, s, a, o, l, c, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : ti, super(e, t, n, r, s, a, o, l, c, u), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class rc extends Un {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    this.texture = new bo(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : false, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Vt;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, r = new ci(5, 5, 5), s = new gn({ name: "CubemapFromEquirect", uniforms: ai(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: xt, blending: fn });
    s.uniforms.tEquirect.value = t;
    const a = new Gt(r, s), o = t.minFilter;
    return t.minFilter === Ln && (t.minFilter = Vt), new ic(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
class Xi extends St {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
const sc = { type: "move" };
class Br {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Xi(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Xi(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new O(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new O()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Xi(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new O(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new O()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(e, t, n) {
    let r = null, s = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = true;
        for (const x of e.hand.values()) {
          const p = t.getJointPose(x, n), h = this._getHandJoint(c, x);
          p !== null && (h.matrix.fromArray(p.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = true, h.jointRadius = p.radius), h.visible = p !== null;
        }
        const u = c.joints["index-finger-tip"], f = c.joints["thumb-tip"], d = u.position.distanceTo(f.position), m = 0.02, v = 5e-3;
        c.inputState.pinching && d > m + v ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && d <= m - v && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, s.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = false, s.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = false));
      o !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, r.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = false, r.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(sc)));
    }
    return o !== null && (o.visible = r !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Xi();
      n.matrixAutoUpdate = false, n.visible = false, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class ac extends St {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new rn(), this.environmentIntensity = 1, this.environmentRotation = new rn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
const zr = new O(), oc = new O(), lc = new Ce();
class bn {
  constructor(e = new O(1, 0, 0), t = 0) {
    this.isPlane = true, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, r) {
    return this.normal.set(e, t, n), this.constant = r, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const r = zr.subVectors(n, t).cross(oc.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(zr), r = this.normal.dot(n);
    if (r === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || lc.getNormalMatrix(e), r = this.coplanarPoint(zr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const yn = new ur(), $i = new O();
class wo {
  constructor(e = new bn(), t = new bn(), n = new bn(), r = new bn(), s = new bn(), a = new bn()) {
    this.planes = [e, t, n, r, s, a];
  }
  set(e, t, n, r, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = en) {
    const n = this.planes, r = e.elements, s = r[0], a = r[1], o = r[2], l = r[3], c = r[4], u = r[5], f = r[6], d = r[7], m = r[8], v = r[9], x = r[10], p = r[11], h = r[12], b = r[13], A = r[14], y = r[15];
    if (n[0].setComponents(l - s, d - c, p - m, y - h).normalize(), n[1].setComponents(l + s, d + c, p + m, y + h).normalize(), n[2].setComponents(l + a, d + u, p + v, y + b).normalize(), n[3].setComponents(l - a, d - u, p - v, y - b).normalize(), n[4].setComponents(l - o, d - f, p - x, y - A).normalize(), t === en) n[5].setComponents(l + o, d + f, p + x, y + A).normalize();
    else if (t === sr) n[5].setComponents(o, f, x, A).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(yn);
  }
  intersectsSprite(e) {
    return yn.center.set(0, 0, 0), yn.radius = 0.7071067811865476, yn.applyMatrix4(e.matrixWorld), this.intersectsSphere(yn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < r) return false;
    return true;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if ($i.x = r.normal.x > 0 ? e.max.x : e.min.x, $i.y = r.normal.y > 0 ? e.max.y : e.min.y, $i.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint($i) < 0) return false;
    }
    return true;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ro extends li {
  constructor(e) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new ke(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const or = new O(), lr = new O(), ya = new rt(), _i = new vo(), qi = new ur(), Hr = new O(), Aa = new O();
class cc extends St {
  constructor(e = new sn(), t = new Ro()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let r = 1, s = t.count; r < s; r++) or.fromBufferAttribute(t, r - 1), lr.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += or.distanceTo(lr);
      e.setAttribute("lineDistance", new zt(n, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), qi.copy(n.boundingSphere), qi.applyMatrix4(r), qi.radius += s, e.ray.intersectsSphere(qi) === false) return;
    ya.copy(r).invert(), _i.copy(e.ray).applyMatrix4(ya);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, u = n.index, d = n.attributes.position;
    if (u !== null) {
      const m = Math.max(0, a.start), v = Math.min(u.count, a.start + a.count);
      for (let x = m, p = v - 1; x < p; x += c) {
        const h = u.getX(x), b = u.getX(x + 1), A = Yi(this, e, _i, l, h, b, x);
        A && t.push(A);
      }
      if (this.isLineLoop) {
        const x = u.getX(v - 1), p = u.getX(m), h = Yi(this, e, _i, l, x, p, v - 1);
        h && t.push(h);
      }
    } else {
      const m = Math.max(0, a.start), v = Math.min(d.count, a.start + a.count);
      for (let x = m, p = v - 1; x < p; x += c) {
        const h = Yi(this, e, _i, l, x, x + 1, x);
        h && t.push(h);
      }
      if (this.isLineLoop) {
        const x = Yi(this, e, _i, l, v - 1, m, v - 1);
        x && t.push(x);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function Yi(i, e, t, n, r, s, a) {
  const o = i.geometry.attributes.position;
  if (or.fromBufferAttribute(o, r), lr.fromBufferAttribute(o, s), t.distanceSqToSegment(or, lr, Hr, Aa) > n) return;
  Hr.applyMatrix4(i.matrixWorld);
  const c = e.ray.origin.distanceTo(Hr);
  if (!(c < e.near || c > e.far)) return { distance: c, point: Aa.clone().applyMatrix4(i.matrixWorld), index: a, face: null, faceIndex: null, barycoord: null, object: i };
}
const Ta = new O(), ba = new O();
class uc extends cc {
  constructor(e, t) {
    super(e, t), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let r = 0, s = t.count; r < s; r += 2) Ta.fromBufferAttribute(t, r), ba.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + Ta.distanceTo(ba);
      e.setAttribute("lineDistance", new zt(n, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Co extends Mt {
  constructor(e, t, n, r, s, a, o, l, c, u = Jn) {
    if (u !== Jn && u !== ri) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === Jn && (n = Dn), n === void 0 && u === ri && (n = ii), super(null, r, s, a, o, l, u, n, c), this.isDepthTexture = true, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : Bt, this.minFilter = l !== void 0 ? l : Bt, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class hr extends sn {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: r };
    const s = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(r), c = o + 1, u = l + 1, f = e / o, d = t / l, m = [], v = [], x = [], p = [];
    for (let h = 0; h < u; h++) {
      const b = h * d - a;
      for (let A = 0; A < c; A++) {
        const y = A * f - s;
        v.push(y, -b, 0), x.push(0, 0, 1), p.push(A / o), p.push(1 - h / l);
      }
    }
    for (let h = 0; h < l; h++) for (let b = 0; b < o; b++) {
      const A = b + c * h, y = b + c * (h + 1), U = b + 1 + c * (h + 1), L = b + 1 + c * h;
      m.push(A, y, L), m.push(y, U, L);
    }
    this.setIndex(m), this.setAttribute("position", new zt(v, 3)), this.setAttribute("normal", new zt(x, 3)), this.setAttribute("uv", new zt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new hr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class hc extends li {
  constructor(e) {
    super(), this.isMeshNormalMaterial = true, this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = fo, this.normalScale = new Ye(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.flatShading = false, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.flatShading = e.flatShading, this;
  }
}
class dc extends li {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = Sl, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class fc extends li {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
class pc extends To {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, r, s, a) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = r + t, l = r - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, a = s + c * this.view.width, o -= u * this.view.offsetY, l = o - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class mc extends Pt {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.cameras = e, this.index = 0;
  }
}
class gc extends uc {
  constructor(e = 10, t = 10, n = 4473924, r = 8947848) {
    n = new ke(n), r = new ke(r);
    const s = t / 2, a = e / t, o = e / 2, l = [], c = [];
    for (let d = 0, m = 0, v = -o; d <= t; d++, v += a) {
      l.push(-o, 0, v, o, 0, v), l.push(v, 0, -o, v, 0, o);
      const x = d === s ? n : r;
      x.toArray(c, m), m += 3, x.toArray(c, m), m += 3, x.toArray(c, m), m += 3, x.toArray(c, m), m += 3;
    }
    const u = new sn();
    u.setAttribute("position", new zt(l, 3)), u.setAttribute("color", new zt(c, 3));
    const f = new Ro({ vertexColors: true, toneMapped: false });
    super(u, f), this.type = "GridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
function wa(i, e, t, n) {
  const r = _c(n);
  switch (t) {
    case so:
      return i * e;
    case oo:
      return i * e;
    case lo:
      return i * e * 2;
    case co:
      return i * e / r.components * r.byteLength;
    case Hs:
      return i * e / r.components * r.byteLength;
    case uo:
      return i * e * 2 / r.components * r.byteLength;
    case Vs:
      return i * e * 2 / r.components * r.byteLength;
    case ao:
      return i * e * 3 / r.components * r.byteLength;
    case Ot:
      return i * e * 4 / r.components * r.byteLength;
    case Gs:
      return i * e * 4 / r.components * r.byteLength;
    case Ji:
    case Qi:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case er:
    case tr:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ls:
    case us:
      return Math.max(i, 16) * Math.max(e, 8) / 4;
    case os:
    case cs:
      return Math.max(i, 8) * Math.max(e, 8) / 2;
    case hs:
    case ds:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case fs:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ps:
      return Math.floor((i + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ms:
      return Math.floor((i + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case gs:
      return Math.floor((i + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case _s:
      return Math.floor((i + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case vs:
      return Math.floor((i + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case xs:
      return Math.floor((i + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case Ms:
      return Math.floor((i + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case Ss:
      return Math.floor((i + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Es:
      return Math.floor((i + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case ys:
      return Math.floor((i + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case As:
      return Math.floor((i + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Ts:
      return Math.floor((i + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case bs:
      return Math.floor((i + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case ws:
      return Math.floor((i + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case nr:
    case Rs:
    case Cs:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
    case ho:
    case Ps:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 8;
    case Ls:
    case Ds:
      return Math.ceil(i / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function _c(i) {
  switch (i) {
    case nn:
    case no:
      return { byteLength: 1, components: 1 };
    case Mi:
    case io:
    case Ei:
      return { byteLength: 2, components: 1 };
    case Bs:
    case zs:
      return { byteLength: 2, components: 4 };
    case Dn:
    case Os:
    case Qt:
      return { byteLength: 4, components: 1 };
    case ro:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${i}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: Fs } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Fs);
/**
* @license
* Copyright 2010-2025 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function Po() {
  let i = null, e = false, t = null, n = null;
  function r(s, a) {
    t(s, a), n = i.requestAnimationFrame(r);
  }
  return { start: function() {
    e !== true && t !== null && (n = i.requestAnimationFrame(r), e = true);
  }, stop: function() {
    i.cancelAnimationFrame(n), e = false;
  }, setAnimationLoop: function(s) {
    t = s;
  }, setContext: function(s) {
    i = s;
  } };
}
function vc(i) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, u = o.usage, f = c.byteLength, d = i.createBuffer();
    i.bindBuffer(l, d), i.bufferData(l, c, u), o.onUploadCallback();
    let m;
    if (c instanceof Float32Array) m = i.FLOAT;
    else if (c instanceof Uint16Array) o.isFloat16BufferAttribute ? m = i.HALF_FLOAT : m = i.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) m = i.SHORT;
    else if (c instanceof Uint32Array) m = i.UNSIGNED_INT;
    else if (c instanceof Int32Array) m = i.INT;
    else if (c instanceof Int8Array) m = i.BYTE;
    else if (c instanceof Uint8Array) m = i.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) m = i.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: d, type: m, bytesPerElement: c.BYTES_PER_ELEMENT, version: o.version, size: f };
  }
  function n(o, l, c) {
    const u = l.array, f = l.updateRanges;
    if (i.bindBuffer(c, o), f.length === 0) i.bufferSubData(c, 0, u);
    else {
      f.sort((m, v) => m.start - v.start);
      let d = 0;
      for (let m = 1; m < f.length; m++) {
        const v = f[d], x = f[m];
        x.start <= v.start + v.count + 1 ? v.count = Math.max(v.count, x.start + x.count - v.start) : (++d, f[d] = x);
      }
      f.length = d + 1;
      for (let m = 0, v = f.length; m < v; m++) {
        const x = f[m];
        i.bufferSubData(c, x.start * u.BYTES_PER_ELEMENT, u, x.start, x.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function r(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (i.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const u = e.get(o);
      (!u || u.version < o.version) && e.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
      return;
    }
    const c = e.get(o);
    if (c === void 0) e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return { get: r, remove: s, update: a };
}
var xc = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, Mc = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, Sc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Ec = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, yc = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, Ac = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Tc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, bc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, wc = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, Rc = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Cc = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Pc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Lc = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Dc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, Uc = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Ic = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Nc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Fc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Oc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Bc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, zc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Hc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Vc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Gc = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, kc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Wc = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Xc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, $c = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, qc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Yc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Kc = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Zc = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, jc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Jc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, Qc = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, eu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, tu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, nu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, iu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, ru = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, su = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, au = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, ou = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, lu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, cu = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, uu = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, hu = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, du = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, fu = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, pu = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, mu = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, gu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, _u = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, vu = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, xu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, Mu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, Su = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Eu = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, yu = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Au = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Tu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, bu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, wu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, Ru = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Cu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Pu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Lu = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Du = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Uu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Iu = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Nu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Fu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, Ou = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Bu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, zu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Hu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Vu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Gu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, ku = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Wu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Xu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, $u = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, qu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Yu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Ku = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Zu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, ju = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Ju = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, Qu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, eh = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, th = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, nh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, ih = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, rh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, sh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, ah = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, oh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, lh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, ch = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, uh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, hh = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, dh = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, fh = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, ph = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, mh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, gh = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, _h = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const vh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, xh = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Mh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Sh = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Eh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, yh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ah = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, Th = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, bh = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, wh = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, Rh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Ch = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, Ph = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Lh = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Dh = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, Uh = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ih = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Nh = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Fh = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, Oh = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Bh = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, zh = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Hh = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Vh = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Gh = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, kh = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Wh = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Xh = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, $h = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, qh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Yh = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Kh = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Zh = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, jh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Le = { alphahash_fragment: xc, alphahash_pars_fragment: Mc, alphamap_fragment: Sc, alphamap_pars_fragment: Ec, alphatest_fragment: yc, alphatest_pars_fragment: Ac, aomap_fragment: Tc, aomap_pars_fragment: bc, batching_pars_vertex: wc, batching_vertex: Rc, begin_vertex: Cc, beginnormal_vertex: Pc, bsdfs: Lc, iridescence_fragment: Dc, bumpmap_pars_fragment: Uc, clipping_planes_fragment: Ic, clipping_planes_pars_fragment: Nc, clipping_planes_pars_vertex: Fc, clipping_planes_vertex: Oc, color_fragment: Bc, color_pars_fragment: zc, color_pars_vertex: Hc, color_vertex: Vc, common: Gc, cube_uv_reflection_fragment: kc, defaultnormal_vertex: Wc, displacementmap_pars_vertex: Xc, displacementmap_vertex: $c, emissivemap_fragment: qc, emissivemap_pars_fragment: Yc, colorspace_fragment: Kc, colorspace_pars_fragment: Zc, envmap_fragment: jc, envmap_common_pars_fragment: Jc, envmap_pars_fragment: Qc, envmap_pars_vertex: eu, envmap_physical_pars_fragment: hu, envmap_vertex: tu, fog_vertex: nu, fog_pars_vertex: iu, fog_fragment: ru, fog_pars_fragment: su, gradientmap_pars_fragment: au, lightmap_pars_fragment: ou, lights_lambert_fragment: lu, lights_lambert_pars_fragment: cu, lights_pars_begin: uu, lights_toon_fragment: du, lights_toon_pars_fragment: fu, lights_phong_fragment: pu, lights_phong_pars_fragment: mu, lights_physical_fragment: gu, lights_physical_pars_fragment: _u, lights_fragment_begin: vu, lights_fragment_maps: xu, lights_fragment_end: Mu, logdepthbuf_fragment: Su, logdepthbuf_pars_fragment: Eu, logdepthbuf_pars_vertex: yu, logdepthbuf_vertex: Au, map_fragment: Tu, map_pars_fragment: bu, map_particle_fragment: wu, map_particle_pars_fragment: Ru, metalnessmap_fragment: Cu, metalnessmap_pars_fragment: Pu, morphinstance_vertex: Lu, morphcolor_vertex: Du, morphnormal_vertex: Uu, morphtarget_pars_vertex: Iu, morphtarget_vertex: Nu, normal_fragment_begin: Fu, normal_fragment_maps: Ou, normal_pars_fragment: Bu, normal_pars_vertex: zu, normal_vertex: Hu, normalmap_pars_fragment: Vu, clearcoat_normal_fragment_begin: Gu, clearcoat_normal_fragment_maps: ku, clearcoat_pars_fragment: Wu, iridescence_pars_fragment: Xu, opaque_fragment: $u, packing: qu, premultiplied_alpha_fragment: Yu, project_vertex: Ku, dithering_fragment: Zu, dithering_pars_fragment: ju, roughnessmap_fragment: Ju, roughnessmap_pars_fragment: Qu, shadowmap_pars_fragment: eh, shadowmap_pars_vertex: th, shadowmap_vertex: nh, shadowmask_pars_fragment: ih, skinbase_vertex: rh, skinning_pars_vertex: sh, skinning_vertex: ah, skinnormal_vertex: oh, specularmap_fragment: lh, specularmap_pars_fragment: ch, tonemapping_fragment: uh, tonemapping_pars_fragment: hh, transmission_fragment: dh, transmission_pars_fragment: fh, uv_pars_fragment: ph, uv_pars_vertex: mh, uv_vertex: gh, worldpos_vertex: _h, background_vert: vh, background_frag: xh, backgroundCube_vert: Mh, backgroundCube_frag: Sh, cube_vert: Eh, cube_frag: yh, depth_vert: Ah, depth_frag: Th, distanceRGBA_vert: bh, distanceRGBA_frag: wh, equirect_vert: Rh, equirect_frag: Ch, linedashed_vert: Ph, linedashed_frag: Lh, meshbasic_vert: Dh, meshbasic_frag: Uh, meshlambert_vert: Ih, meshlambert_frag: Nh, meshmatcap_vert: Fh, meshmatcap_frag: Oh, meshnormal_vert: Bh, meshnormal_frag: zh, meshphong_vert: Hh, meshphong_frag: Vh, meshphysical_vert: Gh, meshphysical_frag: kh, meshtoon_vert: Wh, meshtoon_frag: Xh, points_vert: $h, points_frag: qh, shadow_vert: Yh, shadow_frag: Kh, sprite_vert: Zh, sprite_frag: jh }, te = { common: { diffuse: { value: new ke(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Ce() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ce() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ce() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Ce() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Ce() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Ce() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Ce() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Ce() }, normalScale: { value: new Ye(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Ce() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ce() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ce() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ce() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new ke(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new ke(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Ce() }, alphaTest: { value: 0 }, uvTransform: { value: new Ce() } }, sprite: { diffuse: { value: new ke(16777215) }, opacity: { value: 1 }, center: { value: new Ye(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Ce() }, alphaMap: { value: null }, alphaMapTransform: { value: new Ce() }, alphaTest: { value: 0 } } }, Ht = { basic: { uniforms: mt([te.common, te.specularmap, te.envmap, te.aomap, te.lightmap, te.fog]), vertexShader: Le.meshbasic_vert, fragmentShader: Le.meshbasic_frag }, lambert: { uniforms: mt([te.common, te.specularmap, te.envmap, te.aomap, te.lightmap, te.emissivemap, te.bumpmap, te.normalmap, te.displacementmap, te.fog, te.lights, { emissive: { value: new ke(0) } }]), vertexShader: Le.meshlambert_vert, fragmentShader: Le.meshlambert_frag }, phong: { uniforms: mt([te.common, te.specularmap, te.envmap, te.aomap, te.lightmap, te.emissivemap, te.bumpmap, te.normalmap, te.displacementmap, te.fog, te.lights, { emissive: { value: new ke(0) }, specular: { value: new ke(1118481) }, shininess: { value: 30 } }]), vertexShader: Le.meshphong_vert, fragmentShader: Le.meshphong_frag }, standard: { uniforms: mt([te.common, te.envmap, te.aomap, te.lightmap, te.emissivemap, te.bumpmap, te.normalmap, te.displacementmap, te.roughnessmap, te.metalnessmap, te.fog, te.lights, { emissive: { value: new ke(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Le.meshphysical_vert, fragmentShader: Le.meshphysical_frag }, toon: { uniforms: mt([te.common, te.aomap, te.lightmap, te.emissivemap, te.bumpmap, te.normalmap, te.displacementmap, te.gradientmap, te.fog, te.lights, { emissive: { value: new ke(0) } }]), vertexShader: Le.meshtoon_vert, fragmentShader: Le.meshtoon_frag }, matcap: { uniforms: mt([te.common, te.bumpmap, te.normalmap, te.displacementmap, te.fog, { matcap: { value: null } }]), vertexShader: Le.meshmatcap_vert, fragmentShader: Le.meshmatcap_frag }, points: { uniforms: mt([te.points, te.fog]), vertexShader: Le.points_vert, fragmentShader: Le.points_frag }, dashed: { uniforms: mt([te.common, te.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Le.linedashed_vert, fragmentShader: Le.linedashed_frag }, depth: { uniforms: mt([te.common, te.displacementmap]), vertexShader: Le.depth_vert, fragmentShader: Le.depth_frag }, normal: { uniforms: mt([te.common, te.bumpmap, te.normalmap, te.displacementmap, { opacity: { value: 1 } }]), vertexShader: Le.meshnormal_vert, fragmentShader: Le.meshnormal_frag }, sprite: { uniforms: mt([te.sprite, te.fog]), vertexShader: Le.sprite_vert, fragmentShader: Le.sprite_frag }, background: { uniforms: { uvTransform: { value: new Ce() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Le.background_vert, fragmentShader: Le.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Ce() } }, vertexShader: Le.backgroundCube_vert, fragmentShader: Le.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Le.cube_vert, fragmentShader: Le.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Le.equirect_vert, fragmentShader: Le.equirect_frag }, distanceRGBA: { uniforms: mt([te.common, te.displacementmap, { referencePosition: { value: new O() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Le.distanceRGBA_vert, fragmentShader: Le.distanceRGBA_frag }, shadow: { uniforms: mt([te.lights, te.fog, { color: { value: new ke(0) }, opacity: { value: 1 } }]), vertexShader: Le.shadow_vert, fragmentShader: Le.shadow_frag } };
Ht.physical = { uniforms: mt([Ht.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Ce() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Ce() }, clearcoatNormalScale: { value: new Ye(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Ce() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Ce() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Ce() }, sheen: { value: 0 }, sheenColor: { value: new ke(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Ce() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Ce() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Ce() }, transmissionSamplerSize: { value: new Ye() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Ce() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new ke(0) }, specularColor: { value: new ke(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Ce() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Ce() }, anisotropyVector: { value: new Ye() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Ce() } }]), vertexShader: Le.meshphysical_vert, fragmentShader: Le.meshphysical_frag };
const Ki = { r: 0, b: 0, g: 0 }, An = new rn(), Jh = new rt();
function Qh(i, e, t, n, r, s, a) {
  const o = new ke(0);
  let l = s === true ? 0 : 1, c, u, f = null, d = 0, m = null;
  function v(A) {
    let y = A.isScene === true ? A.background : null;
    return y && y.isTexture && (y = (A.backgroundBlurriness > 0 ? t : e).get(y)), y;
  }
  function x(A) {
    let y = false;
    const U = v(A);
    U === null ? h(o, l) : U && U.isColor && (h(U, 1), y = true);
    const L = i.xr.getEnvironmentBlendMode();
    L === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : L === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (i.autoClear || y) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil));
  }
  function p(A, y) {
    const U = v(y);
    U && (U.isCubeTexture || U.mapping === cr) ? (u === void 0 && (u = new Gt(new ci(1, 1, 1), new gn({ name: "BackgroundCubeMaterial", uniforms: ai(Ht.backgroundCube.uniforms), vertexShader: Ht.backgroundCube.vertexShader, fragmentShader: Ht.backgroundCube.fragmentShader, side: xt, depthTest: false, depthWrite: false, fog: false })), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(L, w, I) {
      this.matrixWorld.copyPosition(I.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), r.update(u)), An.copy(y.backgroundRotation), An.x *= -1, An.y *= -1, An.z *= -1, U.isCubeTexture && U.isRenderTargetTexture === false && (An.y *= -1, An.z *= -1), u.material.uniforms.envMap.value = U, u.material.uniforms.flipEnvMap.value = U.isCubeTexture && U.isRenderTargetTexture === false ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = y.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jh.makeRotationFromEuler(An)), u.material.toneMapped = Ve.getTransfer(U.colorSpace) !== qe, (f !== U || d !== U.version || m !== i.toneMapping) && (u.material.needsUpdate = true, f = U, d = U.version, m = i.toneMapping), u.layers.enableAll(), A.unshift(u, u.geometry, u.material, 0, 0, null)) : U && U.isTexture && (c === void 0 && (c = new Gt(new hr(2, 2), new gn({ name: "BackgroundMaterial", uniforms: ai(Ht.background.uniforms), vertexShader: Ht.background.vertexShader, fragmentShader: Ht.background.fragmentShader, side: mn, depthTest: false, depthWrite: false, fog: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), r.update(c)), c.material.uniforms.t2D.value = U, c.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, c.material.toneMapped = Ve.getTransfer(U.colorSpace) !== qe, U.matrixAutoUpdate === true && U.updateMatrix(), c.material.uniforms.uvTransform.value.copy(U.matrix), (f !== U || d !== U.version || m !== i.toneMapping) && (c.material.needsUpdate = true, f = U, d = U.version, m = i.toneMapping), c.layers.enableAll(), A.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function h(A, y) {
    A.getRGB(Ki, Ao(i)), n.buffers.color.setClear(Ki.r, Ki.g, Ki.b, y, a);
  }
  function b() {
    u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), c !== void 0 && (c.geometry.dispose(), c.material.dispose(), c = void 0);
  }
  return { getClearColor: function() {
    return o;
  }, setClearColor: function(A, y = 1) {
    o.set(A), l = y, h(o, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(A) {
    l = A, h(o, l);
  }, render: x, addToRenderList: p, dispose: b };
}
function ed(i, e) {
  const t = i.getParameter(i.MAX_VERTEX_ATTRIBS), n = {}, r = d(null);
  let s = r, a = false;
  function o(M, R, k, z, Y) {
    let K = false;
    const X = f(z, k, R);
    s !== X && (s = X, c(s.object)), K = m(M, z, k, Y), K && v(M, z, k, Y), Y !== null && e.update(Y, i.ELEMENT_ARRAY_BUFFER), (K || a) && (a = false, y(M, R, k, z), Y !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, e.get(Y).buffer));
  }
  function l() {
    return i.createVertexArray();
  }
  function c(M) {
    return i.bindVertexArray(M);
  }
  function u(M) {
    return i.deleteVertexArray(M);
  }
  function f(M, R, k) {
    const z = k.wireframe === true;
    let Y = n[M.id];
    Y === void 0 && (Y = {}, n[M.id] = Y);
    let K = Y[R.id];
    K === void 0 && (K = {}, Y[R.id] = K);
    let X = K[z];
    return X === void 0 && (X = d(l()), K[z] = X), X;
  }
  function d(M) {
    const R = [], k = [], z = [];
    for (let Y = 0; Y < t; Y++) R[Y] = 0, k[Y] = 0, z[Y] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: R, enabledAttributes: k, attributeDivisors: z, object: M, attributes: {}, index: null };
  }
  function m(M, R, k, z) {
    const Y = s.attributes, K = R.attributes;
    let X = 0;
    const j = k.getAttributes();
    for (const V in j) if (j[V].location >= 0) {
      const ue = Y[V];
      let ve = K[V];
      if (ve === void 0 && (V === "instanceMatrix" && M.instanceMatrix && (ve = M.instanceMatrix), V === "instanceColor" && M.instanceColor && (ve = M.instanceColor)), ue === void 0 || ue.attribute !== ve || ve && ue.data !== ve.data) return true;
      X++;
    }
    return s.attributesNum !== X || s.index !== z;
  }
  function v(M, R, k, z) {
    const Y = {}, K = R.attributes;
    let X = 0;
    const j = k.getAttributes();
    for (const V in j) if (j[V].location >= 0) {
      let ue = K[V];
      ue === void 0 && (V === "instanceMatrix" && M.instanceMatrix && (ue = M.instanceMatrix), V === "instanceColor" && M.instanceColor && (ue = M.instanceColor));
      const ve = {};
      ve.attribute = ue, ue && ue.data && (ve.data = ue.data), Y[V] = ve, X++;
    }
    s.attributes = Y, s.attributesNum = X, s.index = z;
  }
  function x() {
    const M = s.newAttributes;
    for (let R = 0, k = M.length; R < k; R++) M[R] = 0;
  }
  function p(M) {
    h(M, 0);
  }
  function h(M, R) {
    const k = s.newAttributes, z = s.enabledAttributes, Y = s.attributeDivisors;
    k[M] = 1, z[M] === 0 && (i.enableVertexAttribArray(M), z[M] = 1), Y[M] !== R && (i.vertexAttribDivisor(M, R), Y[M] = R);
  }
  function b() {
    const M = s.newAttributes, R = s.enabledAttributes;
    for (let k = 0, z = R.length; k < z; k++) R[k] !== M[k] && (i.disableVertexAttribArray(k), R[k] = 0);
  }
  function A(M, R, k, z, Y, K, X) {
    X === true ? i.vertexAttribIPointer(M, R, k, Y, K) : i.vertexAttribPointer(M, R, k, z, Y, K);
  }
  function y(M, R, k, z) {
    x();
    const Y = z.attributes, K = k.getAttributes(), X = R.defaultAttributeValues;
    for (const j in K) {
      const V = K[j];
      if (V.location >= 0) {
        let re = Y[j];
        if (re === void 0 && (j === "instanceMatrix" && M.instanceMatrix && (re = M.instanceMatrix), j === "instanceColor" && M.instanceColor && (re = M.instanceColor)), re !== void 0) {
          const ue = re.normalized, ve = re.itemSize, De = e.get(re);
          if (De === void 0) continue;
          const Ke = De.buffer, W = De.type, ee = De.bytesPerElement, me = W === i.INT || W === i.UNSIGNED_INT || re.gpuType === Os;
          if (re.isInterleavedBufferAttribute) {
            const se = re.data, ye = se.stride, Ge = re.offset;
            if (se.isInstancedInterleavedBuffer) {
              for (let Ae = 0; Ae < V.locationSize; Ae++) h(V.location + Ae, se.meshPerAttribute);
              M.isInstancedMesh !== true && z._maxInstanceCount === void 0 && (z._maxInstanceCount = se.meshPerAttribute * se.count);
            } else for (let Ae = 0; Ae < V.locationSize; Ae++) p(V.location + Ae);
            i.bindBuffer(i.ARRAY_BUFFER, Ke);
            for (let Ae = 0; Ae < V.locationSize; Ae++) A(V.location + Ae, ve / V.locationSize, W, ue, ye * ee, (Ge + ve / V.locationSize * Ae) * ee, me);
          } else {
            if (re.isInstancedBufferAttribute) {
              for (let se = 0; se < V.locationSize; se++) h(V.location + se, re.meshPerAttribute);
              M.isInstancedMesh !== true && z._maxInstanceCount === void 0 && (z._maxInstanceCount = re.meshPerAttribute * re.count);
            } else for (let se = 0; se < V.locationSize; se++) p(V.location + se);
            i.bindBuffer(i.ARRAY_BUFFER, Ke);
            for (let se = 0; se < V.locationSize; se++) A(V.location + se, ve / V.locationSize, W, ue, ve * ee, ve / V.locationSize * se * ee, me);
          }
        } else if (X !== void 0) {
          const ue = X[j];
          if (ue !== void 0) switch (ue.length) {
            case 2:
              i.vertexAttrib2fv(V.location, ue);
              break;
            case 3:
              i.vertexAttrib3fv(V.location, ue);
              break;
            case 4:
              i.vertexAttrib4fv(V.location, ue);
              break;
            default:
              i.vertexAttrib1fv(V.location, ue);
          }
        }
      }
    }
    b();
  }
  function U() {
    I();
    for (const M in n) {
      const R = n[M];
      for (const k in R) {
        const z = R[k];
        for (const Y in z) u(z[Y].object), delete z[Y];
        delete R[k];
      }
      delete n[M];
    }
  }
  function L(M) {
    if (n[M.id] === void 0) return;
    const R = n[M.id];
    for (const k in R) {
      const z = R[k];
      for (const Y in z) u(z[Y].object), delete z[Y];
      delete R[k];
    }
    delete n[M.id];
  }
  function w(M) {
    for (const R in n) {
      const k = n[R];
      if (k[M.id] === void 0) continue;
      const z = k[M.id];
      for (const Y in z) u(z[Y].object), delete z[Y];
      delete k[M.id];
    }
  }
  function I() {
    S(), a = true, s !== r && (s = r, c(s.object));
  }
  function S() {
    r.geometry = null, r.program = null, r.wireframe = false;
  }
  return { setup: o, reset: I, resetDefaultState: S, dispose: U, releaseStatesOfGeometry: L, releaseStatesOfProgram: w, initAttributes: x, enableAttribute: p, disableUnusedAttributes: b };
}
function td(i, e, t) {
  let n;
  function r(c) {
    n = c;
  }
  function s(c, u) {
    i.drawArrays(n, c, u), t.update(u, n, 1);
  }
  function a(c, u, f) {
    f !== 0 && (i.drawArraysInstanced(n, c, u, f), t.update(u, n, f));
  }
  function o(c, u, f) {
    if (f === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, u, 0, f);
    let m = 0;
    for (let v = 0; v < f; v++) m += u[v];
    t.update(m, n, 1);
  }
  function l(c, u, f, d) {
    if (f === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let v = 0; v < c.length; v++) a(c[v], u[v], d[v]);
    else {
      m.multiDrawArraysInstancedWEBGL(n, c, 0, u, 0, d, 0, f);
      let v = 0;
      for (let x = 0; x < f; x++) v += u[x] * d[x];
      t.update(v, n, 1);
    }
  }
  this.setMode = r, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function nd(i, e, t, n) {
  let r;
  function s() {
    if (r !== void 0) return r;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const w = e.get("EXT_texture_filter_anisotropic");
      r = i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else r = 0;
    return r;
  }
  function a(w) {
    return !(w !== Ot && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const I = w === Ei && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(w !== nn && n.convert(w) !== i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE) && w !== Qt && !I);
  }
  function l(w) {
    if (w === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0) return "highp";
      w = "mediump";
    }
    return w === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const u = l(c);
  u !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", u, "instead."), c = u);
  const f = t.logarithmicDepthBuffer === true, d = t.reverseDepthBuffer === true && e.has("EXT_clip_control"), m = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), v = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), x = i.getParameter(i.MAX_TEXTURE_SIZE), p = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), h = i.getParameter(i.MAX_VERTEX_ATTRIBS), b = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), A = i.getParameter(i.MAX_VARYING_VECTORS), y = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), U = v > 0, L = i.getParameter(i.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: s, getMaxPrecision: l, textureFormatReadable: a, textureTypeReadable: o, precision: c, logarithmicDepthBuffer: f, reverseDepthBuffer: d, maxTextures: m, maxVertexTextures: v, maxTextureSize: x, maxCubemapSize: p, maxAttributes: h, maxVertexUniforms: b, maxVaryings: A, maxFragmentUniforms: y, vertexTextures: U, maxSamples: L };
}
function id(i) {
  const e = this;
  let t = null, n = 0, r = false, s = false;
  const a = new bn(), o = new Ce(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(f, d) {
    const m = f.length !== 0 || d || n !== 0 || r;
    return r = d, n = f.length, m;
  }, this.beginShadows = function() {
    s = true, u(null);
  }, this.endShadows = function() {
    s = false;
  }, this.setGlobalState = function(f, d) {
    t = u(f, d, 0);
  }, this.setState = function(f, d, m) {
    const v = f.clippingPlanes, x = f.clipIntersection, p = f.clipShadows, h = i.get(f);
    if (!r || v === null || v.length === 0 || s && !p) s ? u(null) : c();
    else {
      const b = s ? 0 : n, A = b * 4;
      let y = h.clippingState || null;
      l.value = y, y = u(v, d, A, m);
      for (let U = 0; U !== A; ++U) y[U] = t[U];
      h.clippingState = y, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += b;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(f, d, m, v) {
    const x = f !== null ? f.length : 0;
    let p = null;
    if (x !== 0) {
      if (p = l.value, v !== true || p === null) {
        const h = m + x * 4, b = d.matrixWorldInverse;
        o.getNormalMatrix(b), (p === null || p.length < h) && (p = new Float32Array(h));
        for (let A = 0, y = m; A !== x; ++A, y += 4) a.copy(f[A]).applyMatrix4(b, o), a.normal.toArray(p, y), p[y + 3] = a.constant;
      }
      l.value = p, l.needsUpdate = true;
    }
    return e.numPlanes = x, e.numIntersection = 0, p;
  }
}
function rd(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === is ? a.mapping = ti : o === rs && (a.mapping = ni), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === is || o === rs) if (e.has(a)) {
        const l = e.get(a).texture;
        return t(l, a.mapping);
      } else {
        const l = a.image;
        if (l && l.height > 0) {
          const c = new rc(l.height);
          return c.fromEquirectangularTexture(i, a), e.set(a, c), a.addEventListener("dispose", r), t(c.texture, a.mapping);
        } else return null;
      }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener("dispose", r);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: s };
}
const Zn = 4, Ra = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Cn = 20, Vr = new pc(), Ca = new ke();
let Gr = null, kr = 0, Wr = 0, Xr = false;
const wn = (1 + Math.sqrt(5)) / 2, Yn = 1 / wn, Pa = [new O(-wn, Yn, 0), new O(wn, Yn, 0), new O(-Yn, 0, wn), new O(Yn, 0, wn), new O(0, wn, -Yn), new O(0, wn, Yn), new O(-1, 1, -1), new O(1, 1, -1), new O(-1, 1, 1), new O(1, 1, 1)];
class La {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, r = 100) {
    Gr = this._renderer.getRenderTarget(), kr = this._renderer.getActiveCubeFace(), Wr = this._renderer.getActiveMipmapLevel(), Xr = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = true, this._sceneToCubeUV(e, n, r, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Ia(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ua(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Gr, kr, Wr), this._renderer.xr.enabled = Xr, e.scissorTest = false, Zi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === ti || e.mapping === ni ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Gr = this._renderer.getRenderTarget(), kr = this._renderer.getActiveCubeFace(), Wr = this._renderer.getActiveMipmapLevel(), Xr = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: Vt, minFilter: Vt, generateMipmaps: false, type: Ei, format: Ot, colorSpace: si, depthBuffer: false }, r = Da(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Da(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = sd(s)), this._blurMaterial = ad(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Gt(this._lodPlanes[0], e);
    this._renderer.compile(t, Vr);
  }
  _sceneToCubeUV(e, t, n, r) {
    const o = new Pt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], u = this._renderer, f = u.autoClear, d = u.toneMapping;
    u.getClearColor(Ca), u.toneMapping = pn, u.autoClear = false;
    const m = new So({ name: "PMREM.Background", side: xt, depthWrite: false, depthTest: false }), v = new Gt(new ci(), m);
    let x = false;
    const p = e.background;
    p ? p.isColor && (m.color.copy(p), e.background = null, x = true) : (m.color.copy(Ca), x = true);
    for (let h = 0; h < 6; h++) {
      const b = h % 3;
      b === 0 ? (o.up.set(0, l[h], 0), o.lookAt(c[h], 0, 0)) : b === 1 ? (o.up.set(0, 0, l[h]), o.lookAt(0, c[h], 0)) : (o.up.set(0, l[h], 0), o.lookAt(0, 0, c[h]));
      const A = this._cubeSize;
      Zi(r, b * A, h > 2 ? A : 0, A, A), u.setRenderTarget(r), x && u.render(v, o), u.render(e, o);
    }
    v.geometry.dispose(), v.material.dispose(), u.toneMapping = d, u.autoClear = f, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === ti || e.mapping === ni;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ia()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ua());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, a = new Gt(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Zi(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, Vr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = false;
    const r = this._lodPlanes.length;
    for (let s = 1; s < r; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = Pa[(r - s - 1) % Pa.length];
      this._blur(e, s - 1, s, a, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, r, "latitudinal", s), this._halfBlur(a, e, n, n, r, "longitudinal", s);
  }
  _halfBlur(e, t, n, r, s, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const u = 3, f = new Gt(this._lodPlanes[r], c), d = c.uniforms, m = this._sizeLods[n] - 1, v = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * Cn - 1), x = s / v, p = isFinite(s) ? 1 + Math.floor(u * x) : Cn;
    p > Cn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Cn}`);
    const h = [];
    let b = 0;
    for (let w = 0; w < Cn; ++w) {
      const I = w / x, S = Math.exp(-I * I / 2);
      h.push(S), w === 0 ? b += S : w < p && (b += 2 * S);
    }
    for (let w = 0; w < h.length; w++) h[w] = h[w] / b;
    d.envMap.value = e.texture, d.samples.value = p, d.weights.value = h, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: A } = this;
    d.dTheta.value = v, d.mipInt.value = A - n;
    const y = this._sizeLods[r], U = 3 * y * (r > A - Zn ? r - A + Zn : 0), L = 4 * (this._cubeSize - y);
    Zi(t, U, L, 3 * y, 2 * y), l.setRenderTarget(t), l.render(f, Vr);
  }
}
function sd(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - Zn + 1 + Ra.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    t.push(o);
    let l = 1 / o;
    a > i - Zn ? l = Ra[a - i + Zn - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), u = -c, f = 1 + c, d = [u, u, f, u, f, f, u, u, f, f, u, f], m = 6, v = 6, x = 3, p = 2, h = 1, b = new Float32Array(x * v * m), A = new Float32Array(p * v * m), y = new Float32Array(h * v * m);
    for (let L = 0; L < m; L++) {
      const w = L % 3 * 2 / 3 - 1, I = L > 2 ? 0 : -1, S = [w, I, 0, w + 2 / 3, I, 0, w + 2 / 3, I + 1, 0, w, I, 0, w + 2 / 3, I + 1, 0, w, I + 1, 0];
      b.set(S, x * v * L), A.set(d, p * v * L);
      const M = [L, L, L, L, L, L];
      y.set(M, h * v * L);
    }
    const U = new sn();
    U.setAttribute("position", new kt(b, x)), U.setAttribute("uv", new kt(A, p)), U.setAttribute("faceIndex", new kt(y, h)), e.push(U), r > Zn && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Da(i, e, t) {
  const n = new Un(i, e, t);
  return n.texture.mapping = cr, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function Zi(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function ad(i, e, t) {
  const n = new Float32Array(Cn), r = new O(0, 1, 0);
  return new gn({ name: "SphericalGaussianBlur", defines: { n: Cn, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${i}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r } }, vertexShader: ks(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: fn, depthTest: false, depthWrite: false });
}
function Ua() {
  return new gn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: ks(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: fn, depthTest: false, depthWrite: false });
}
function Ia() {
  return new gn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: ks(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: fn, depthTest: false, depthWrite: false });
}
function ks() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function od(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === is || l === rs, u = l === ti || l === ni;
      if (c || u) {
        let f = e.get(o);
        const d = f !== void 0 ? f.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== d) return t === null && (t = new La(i)), f = c ? t.fromEquirectangular(o, f) : t.fromCubemap(o, f), f.texture.pmremVersion = o.pmremVersion, e.set(o, f), f.texture;
        if (f !== void 0) return f.texture;
        {
          const m = o.image;
          return c && m && m.height > 0 || u && m && r(m) ? (t === null && (t = new La(i)), f = c ? t.fromEquirectangular(o) : t.fromCubemap(o), f.texture.pmremVersion = o.pmremVersion, e.set(o, f), o.addEventListener("dispose", s), f.texture) : null;
        }
      }
    }
    return o;
  }
  function r(o) {
    let l = 0;
    const c = 6;
    for (let u = 0; u < c; u++) o[u] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return { get: n, dispose: a };
}
function ld(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return e[n] = r, r;
  }
  return { has: function(n) {
    return t(n) !== null;
  }, init: function() {
    t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const r = t(n);
    return r === null && Kn("THREE.WebGLRenderer: " + n + " extension not supported."), r;
  } };
}
function cd(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function a(f) {
    const d = f.target;
    d.index !== null && e.remove(d.index);
    for (const v in d.attributes) e.remove(d.attributes[v]);
    d.removeEventListener("dispose", a), delete r[d.id];
    const m = s.get(d);
    m && (e.remove(m), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === true && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function o(f, d) {
    return r[d.id] === true || (d.addEventListener("dispose", a), r[d.id] = true, t.memory.geometries++), d;
  }
  function l(f) {
    const d = f.attributes;
    for (const m in d) e.update(d[m], i.ARRAY_BUFFER);
  }
  function c(f) {
    const d = [], m = f.index, v = f.attributes.position;
    let x = 0;
    if (m !== null) {
      const b = m.array;
      x = m.version;
      for (let A = 0, y = b.length; A < y; A += 3) {
        const U = b[A + 0], L = b[A + 1], w = b[A + 2];
        d.push(U, L, L, w, w, U);
      }
    } else if (v !== void 0) {
      const b = v.array;
      x = v.version;
      for (let A = 0, y = b.length / 3 - 1; A < y; A += 3) {
        const U = A + 0, L = A + 1, w = A + 2;
        d.push(U, L, L, w, w, U);
      }
    } else return;
    const p = new (mo(d) ? yo : Eo)(d, 1);
    p.version = x;
    const h = s.get(f);
    h && e.remove(h), s.set(f, p);
  }
  function u(f) {
    const d = s.get(f);
    if (d) {
      const m = f.index;
      m !== null && d.version < m.version && c(f);
    } else c(f);
    return s.get(f);
  }
  return { get: o, update: l, getWireframeAttribute: u };
}
function ud(i, e, t) {
  let n;
  function r(d) {
    n = d;
  }
  let s, a;
  function o(d) {
    s = d.type, a = d.bytesPerElement;
  }
  function l(d, m) {
    i.drawElements(n, m, s, d * a), t.update(m, n, 1);
  }
  function c(d, m, v) {
    v !== 0 && (i.drawElementsInstanced(n, m, s, d * a, v), t.update(m, n, v));
  }
  function u(d, m, v) {
    if (v === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, m, 0, s, d, 0, v);
    let p = 0;
    for (let h = 0; h < v; h++) p += m[h];
    t.update(p, n, 1);
  }
  function f(d, m, v, x) {
    if (v === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let h = 0; h < d.length; h++) c(d[h] / a, m[h], x[h]);
    else {
      p.multiDrawElementsInstancedWEBGL(n, m, 0, s, d, 0, x, 0, v);
      let h = 0;
      for (let b = 0; b < v; b++) h += m[b] * x[b];
      t.update(h, n, 1);
    }
  }
  this.setMode = r, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = u, this.renderMultiDrawInstances = f;
}
function hd(i) {
  const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case i.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case i.LINES:
        t.lines += o * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += o * s;
        break;
      case i.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function r() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return { memory: e, render: t, programs: null, autoReset: true, reset: r, update: n };
}
function dd(i, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), r = new it();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, u = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, f = u !== void 0 ? u.length : 0;
    let d = n.get(o);
    if (d === void 0 || d.count !== f) {
      let M = function() {
        I.dispose(), n.delete(o), o.removeEventListener("dispose", M);
      };
      var m = M;
      d !== void 0 && d.texture.dispose();
      const v = o.morphAttributes.position !== void 0, x = o.morphAttributes.normal !== void 0, p = o.morphAttributes.color !== void 0, h = o.morphAttributes.position || [], b = o.morphAttributes.normal || [], A = o.morphAttributes.color || [];
      let y = 0;
      v === true && (y = 1), x === true && (y = 2), p === true && (y = 3);
      let U = o.attributes.position.count * y, L = 1;
      U > e.maxTextureSize && (L = Math.ceil(U / e.maxTextureSize), U = e.maxTextureSize);
      const w = new Float32Array(U * L * 4 * f), I = new _o(w, U, L, f);
      I.type = Qt, I.needsUpdate = true;
      const S = y * 4;
      for (let R = 0; R < f; R++) {
        const k = h[R], z = b[R], Y = A[R], K = U * L * 4 * R;
        for (let X = 0; X < k.count; X++) {
          const j = X * S;
          v === true && (r.fromBufferAttribute(k, X), w[K + j + 0] = r.x, w[K + j + 1] = r.y, w[K + j + 2] = r.z, w[K + j + 3] = 0), x === true && (r.fromBufferAttribute(z, X), w[K + j + 4] = r.x, w[K + j + 5] = r.y, w[K + j + 6] = r.z, w[K + j + 7] = 0), p === true && (r.fromBufferAttribute(Y, X), w[K + j + 8] = r.x, w[K + j + 9] = r.y, w[K + j + 10] = r.z, w[K + j + 11] = Y.itemSize === 4 ? r.w : 1);
        }
      }
      d = { count: f, texture: I, size: new Ye(U, L) }, n.set(o, d), o.addEventListener("dispose", M);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) l.getUniforms().setValue(i, "morphTexture", a.morphTexture, t);
    else {
      let v = 0;
      for (let p = 0; p < c.length; p++) v += c[p];
      const x = o.morphTargetsRelative ? 1 : 1 - v;
      l.getUniforms().setValue(i, "morphTargetBaseInfluence", x), l.getUniforms().setValue(i, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(i, "morphTargetsTexture", d.texture, t), l.getUniforms().setValue(i, "morphTargetsTextureSize", d.size);
  }
  return { update: s };
}
function fd(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, u = l.geometry, f = e.get(l, u);
    if (r.get(f) !== c && (e.update(f), r.set(f, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === false && l.addEventListener("dispose", o), r.get(l) !== c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      r.get(d) !== c && (d.update(), r.set(d, c));
    }
    return f;
  }
  function a() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: a };
}
const Lo = new Mt(), Na = new Co(1, 1), Do = new _o(), Uo = new Vl(), Io = new bo(), Fa = [], Oa = [], Ba = new Float32Array(16), za = new Float32Array(9), Ha = new Float32Array(4);
function ui(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0) return i;
  const r = e * t;
  let s = Fa[r];
  if (s === void 0 && (s = new Float32Array(r), Fa[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a) o += t, i[a].toArray(s, o);
  }
  return s;
}
function ot(i, e) {
  if (i.length !== e.length) return false;
  for (let t = 0, n = i.length; t < n; t++) if (i[t] !== e[t]) return false;
  return true;
}
function lt(i, e) {
  for (let t = 0, n = e.length; t < n; t++) i[t] = e[t];
}
function dr(i, e) {
  let t = Oa[e];
  t === void 0 && (t = new Int32Array(e), Oa[e] = t);
  for (let n = 0; n !== e; ++n) t[n] = i.allocateTextureUnit();
  return t;
}
function pd(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function md(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ot(t, e)) return;
    i.uniform2fv(this.addr, e), lt(t, e);
  }
}
function gd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ot(t, e)) return;
    i.uniform3fv(this.addr, e), lt(t, e);
  }
}
function _d(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ot(t, e)) return;
    i.uniform4fv(this.addr, e), lt(t, e);
  }
}
function vd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ot(t, e)) return;
    i.uniformMatrix2fv(this.addr, false, e), lt(t, e);
  } else {
    if (ot(t, n)) return;
    Ha.set(n), i.uniformMatrix2fv(this.addr, false, Ha), lt(t, n);
  }
}
function xd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ot(t, e)) return;
    i.uniformMatrix3fv(this.addr, false, e), lt(t, e);
  } else {
    if (ot(t, n)) return;
    za.set(n), i.uniformMatrix3fv(this.addr, false, za), lt(t, n);
  }
}
function Md(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ot(t, e)) return;
    i.uniformMatrix4fv(this.addr, false, e), lt(t, e);
  } else {
    if (ot(t, n)) return;
    Ba.set(n), i.uniformMatrix4fv(this.addr, false, Ba), lt(t, n);
  }
}
function Sd(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Ed(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ot(t, e)) return;
    i.uniform2iv(this.addr, e), lt(t, e);
  }
}
function yd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ot(t, e)) return;
    i.uniform3iv(this.addr, e), lt(t, e);
  }
}
function Ad(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ot(t, e)) return;
    i.uniform4iv(this.addr, e), lt(t, e);
  }
}
function Td(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function bd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ot(t, e)) return;
    i.uniform2uiv(this.addr, e), lt(t, e);
  }
}
function wd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ot(t, e)) return;
    i.uniform3uiv(this.addr, e), lt(t, e);
  }
}
function Rd(i, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ot(t, e)) return;
    i.uniform4uiv(this.addr, e), lt(t, e);
  }
}
function Cd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r);
  let s;
  this.type === i.SAMPLER_2D_SHADOW ? (Na.compareFunction = po, s = Na) : s = Lo, t.setTexture2D(e || s, r);
}
function Pd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || Uo, r);
}
function Ld(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || Io, r);
}
function Dd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || Do, r);
}
function Ud(i) {
  switch (i) {
    case 5126:
      return pd;
    case 35664:
      return md;
    case 35665:
      return gd;
    case 35666:
      return _d;
    case 35674:
      return vd;
    case 35675:
      return xd;
    case 35676:
      return Md;
    case 5124:
    case 35670:
      return Sd;
    case 35667:
    case 35671:
      return Ed;
    case 35668:
    case 35672:
      return yd;
    case 35669:
    case 35673:
      return Ad;
    case 5125:
      return Td;
    case 36294:
      return bd;
    case 36295:
      return wd;
    case 36296:
      return Rd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Cd;
    case 35679:
    case 36299:
    case 36307:
      return Pd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Ld;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Dd;
  }
}
function Id(i, e) {
  i.uniform1fv(this.addr, e);
}
function Nd(i, e) {
  const t = ui(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function Fd(i, e) {
  const t = ui(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Od(i, e) {
  const t = ui(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Bd(i, e) {
  const t = ui(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, false, t);
}
function zd(i, e) {
  const t = ui(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, false, t);
}
function Hd(i, e) {
  const t = ui(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, false, t);
}
function Vd(i, e) {
  i.uniform1iv(this.addr, e);
}
function Gd(i, e) {
  i.uniform2iv(this.addr, e);
}
function kd(i, e) {
  i.uniform3iv(this.addr, e);
}
function Wd(i, e) {
  i.uniform4iv(this.addr, e);
}
function Xd(i, e) {
  i.uniform1uiv(this.addr, e);
}
function $d(i, e) {
  i.uniform2uiv(this.addr, e);
}
function qd(i, e) {
  i.uniform3uiv(this.addr, e);
}
function Yd(i, e) {
  i.uniform4uiv(this.addr, e);
}
function Kd(i, e, t) {
  const n = this.cache, r = e.length, s = dr(t, r);
  ot(n, s) || (i.uniform1iv(this.addr, s), lt(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture2D(e[a] || Lo, s[a]);
}
function Zd(i, e, t) {
  const n = this.cache, r = e.length, s = dr(t, r);
  ot(n, s) || (i.uniform1iv(this.addr, s), lt(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture3D(e[a] || Uo, s[a]);
}
function jd(i, e, t) {
  const n = this.cache, r = e.length, s = dr(t, r);
  ot(n, s) || (i.uniform1iv(this.addr, s), lt(n, s));
  for (let a = 0; a !== r; ++a) t.setTextureCube(e[a] || Io, s[a]);
}
function Jd(i, e, t) {
  const n = this.cache, r = e.length, s = dr(t, r);
  ot(n, s) || (i.uniform1iv(this.addr, s), lt(n, s));
  for (let a = 0; a !== r; ++a) t.setTexture2DArray(e[a] || Do, s[a]);
}
function Qd(i) {
  switch (i) {
    case 5126:
      return Id;
    case 35664:
      return Nd;
    case 35665:
      return Fd;
    case 35666:
      return Od;
    case 35674:
      return Bd;
    case 35675:
      return zd;
    case 35676:
      return Hd;
    case 5124:
    case 35670:
      return Vd;
    case 35667:
    case 35671:
      return Gd;
    case 35668:
    case 35672:
      return kd;
    case 35669:
    case 35673:
      return Wd;
    case 5125:
      return Xd;
    case 36294:
      return $d;
    case 36295:
      return qd;
    case 36296:
      return Yd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Kd;
    case 35679:
    case 36299:
    case 36307:
      return Zd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return jd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Jd;
  }
}
class ef {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Ud(t.type);
  }
}
class tf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = Qd(t.type);
  }
}
class nf {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const $r = /(\w+)(\])?(\[|\.)?/g;
function Va(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function rf(i, e, t) {
  const n = i.name, r = n.length;
  for ($r.lastIndex = 0; ; ) {
    const s = $r.exec(n), a = $r.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === r) {
      Va(t, c === void 0 ? new ef(o, i, e) : new tf(o, i, e));
      break;
    } else {
      let f = t.map[o];
      f === void 0 && (f = new nf(o), Va(t, f)), t = f;
    }
  }
}
class ir {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), a = e.getUniformLocation(t, s.name);
      rf(s, a, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], l = n[o.id];
      l.needsUpdate !== false && o.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Ga(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
const sf = 37297;
let af = 0;
function of(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const ka = new Ce();
function lf(i) {
  Ve._getMatrix(ka, Ve.workingColorSpace, i);
  const e = `mat3( ${ka.elements.map((t) => t.toFixed(4))} )`;
  switch (Ve.getTransfer(i)) {
    case rr:
      return [e, "LinearTransferOETF"];
    case qe:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", i), [e, "LinearTransferOETF"];
  }
}
function Wa(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
  if (n && r === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + of(i.getShaderSource(e), a);
  } else return r;
}
function cf(i, e) {
  const t = lf(e);
  return [`vec4 ${i}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`);
}
function uf(i, e) {
  let t;
  switch (e) {
    case fl:
      t = "Linear";
      break;
    case pl:
      t = "Reinhard";
      break;
    case ml:
      t = "Cineon";
      break;
    case gl:
      t = "ACESFilmic";
      break;
    case vl:
      t = "AgX";
      break;
    case xl:
      t = "Neutral";
      break;
    case _l:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const ji = new O();
function hf() {
  Ve.getLuminanceCoefficients(ji);
  const i = ji.x.toFixed(4), e = ji.y.toFixed(4), t = ji.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${i}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function df(i) {
  return [i.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", i.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(vi).join(`
`);
}
function ff(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== false && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function pf(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r), a = s.name;
    let o = 1;
    s.type === i.FLOAT_MAT2 && (o = 2), s.type === i.FLOAT_MAT3 && (o = 3), s.type === i.FLOAT_MAT4 && (o = 4), t[a] = { type: s.type, location: i.getAttribLocation(e, a), locationSize: o };
  }
  return t;
}
function vi(i) {
  return i !== "";
}
function Xa(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function $a(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const mf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Is(i) {
  return i.replace(mf, _f);
}
const gf = /* @__PURE__ */ new Map();
function _f(i, e) {
  let t = Le[e];
  if (t === void 0) {
    const n = gf.get(e);
    if (n !== void 0) t = Le[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return Is(t);
}
const vf = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function qa(i) {
  return i.replace(vf, xf);
}
function xf(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++) r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Ya(i) {
  let e = `precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Mf(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === Qa ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === $o ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === jt && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Sf(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap) switch (i.envMapMode) {
    case ti:
    case ni:
      e = "ENVMAP_TYPE_CUBE";
      break;
    case cr:
      e = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return e;
}
function Ef(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap) switch (i.envMapMode) {
    case ni:
      e = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return e;
}
function yf(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap) switch (i.combine) {
    case eo:
      e = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case hl:
      e = "ENVMAP_BLENDING_MIX";
      break;
    case dl:
      e = "ENVMAP_BLENDING_ADD";
      break;
  }
  return e;
}
function Af(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Tf(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = Mf(t), c = Sf(t), u = Ef(t), f = yf(t), d = Af(t), m = df(t), v = ff(s), x = r.createProgram();
  let p, h, b = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v].filter(vi).join(`
`), p.length > 0 && (p += `
`), h = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v].filter(vi).join(`
`), h.length > 0 && (h += `
`)) : (p = [Ya(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + u : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(vi).join(`
`), h = [Ya(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, v, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + u : "", t.envMap ? "#define " + f : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== pn ? "#define TONE_MAPPING" : "", t.toneMapping !== pn ? Le.tonemapping_pars_fragment : "", t.toneMapping !== pn ? uf("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Le.colorspace_pars_fragment, cf("linearToOutputTexel", t.outputColorSpace), hf(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(vi).join(`
`)), a = Is(a), a = Xa(a, t), a = $a(a, t), o = Is(o), o = Xa(o, t), o = $a(o, t), a = qa(a), o = qa(o), t.isRawShaderMaterial !== true && (b = `#version 300 es
`, p = [m, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + p, h = ["#define varying in", t.glslVersion === sa ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === sa ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + h);
  const A = b + p + a, y = b + h + o, U = Ga(r, r.VERTEX_SHADER, A), L = Ga(r, r.FRAGMENT_SHADER, y);
  r.attachShader(x, U), r.attachShader(x, L), t.index0AttributeName !== void 0 ? r.bindAttribLocation(x, 0, t.index0AttributeName) : t.morphTargets === true && r.bindAttribLocation(x, 0, "position"), r.linkProgram(x);
  function w(R) {
    if (i.debug.checkShaderErrors) {
      const k = r.getProgramInfoLog(x).trim(), z = r.getShaderInfoLog(U).trim(), Y = r.getShaderInfoLog(L).trim();
      let K = true, X = true;
      if (r.getProgramParameter(x, r.LINK_STATUS) === false) if (K = false, typeof i.debug.onShaderError == "function") i.debug.onShaderError(r, x, U, L);
      else {
        const j = Wa(r, U, "vertex"), V = Wa(r, L, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(x, r.VALIDATE_STATUS) + `

Material Name: ` + R.name + `
Material Type: ` + R.type + `

Program Info Log: ` + k + `
` + j + `
` + V);
      }
      else k !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", k) : (z === "" || Y === "") && (X = false);
      X && (R.diagnostics = { runnable: K, programLog: k, vertexShader: { log: z, prefix: p }, fragmentShader: { log: Y, prefix: h } });
    }
    r.deleteShader(U), r.deleteShader(L), I = new ir(r, x), S = pf(r, x);
  }
  let I;
  this.getUniforms = function() {
    return I === void 0 && w(this), I;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && w(this), S;
  };
  let M = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return M === false && (M = r.getProgramParameter(x, sf)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(x), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = af++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = U, this.fragmentShader = L, this;
}
let bf = 0;
class wf {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(r) === false && (a.add(r), r.usedTimes++), a.has(s) === false && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Rf(e), t.set(e, n)), n;
  }
}
class Rf {
  constructor(e) {
    this.id = bf++, this.code = e, this.usedTimes = 0;
  }
}
function Cf(i, e, t, n, r, s, a) {
  const o = new xo(), l = new wf(), c = /* @__PURE__ */ new Set(), u = [], f = r.logarithmicDepthBuffer, d = r.vertexTextures;
  let m = r.precision;
  const v = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function x(S) {
    return c.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function p(S, M, R, k, z) {
    const Y = k.fog, K = z.geometry, X = S.isMeshStandardMaterial ? k.environment : null, j = (S.isMeshStandardMaterial ? t : e).get(S.envMap || X), V = j && j.mapping === cr ? j.image.height : null, re = v[S.type];
    S.precision !== null && (m = r.getMaxPrecision(S.precision), m !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", m, "instead."));
    const ue = K.morphAttributes.position || K.morphAttributes.normal || K.morphAttributes.color, ve = ue !== void 0 ? ue.length : 0;
    let De = 0;
    K.morphAttributes.position !== void 0 && (De = 1), K.morphAttributes.normal !== void 0 && (De = 2), K.morphAttributes.color !== void 0 && (De = 3);
    let Ke, W, ee, me;
    if (re) {
      const $e = Ht[re];
      Ke = $e.vertexShader, W = $e.fragmentShader;
    } else Ke = S.vertexShader, W = S.fragmentShader, l.update(S), ee = l.getVertexShaderID(S), me = l.getFragmentShaderID(S);
    const se = i.getRenderTarget(), ye = i.state.buffers.depth.getReversed(), Ge = z.isInstancedMesh === true, Ae = z.isBatchedMesh === true, nt = !!S.map, Qe = !!S.matcap, Ie = !!j, T = !!S.aoMap, Tt = !!S.lightMap, Ne = !!S.bumpMap, Fe = !!S.normalMap, xe = !!S.displacementMap, je = !!S.emissiveMap, _e = !!S.metalnessMap, E = !!S.roughnessMap, g = S.anisotropy > 0, N = S.clearcoat > 0, $ = S.dispersion > 0, Z = S.iridescence > 0, G = S.sheen > 0, ge = S.transmission > 0, ae = g && !!S.anisotropyMap, he = N && !!S.clearcoatMap, Be = N && !!S.clearcoatNormalMap, Q = N && !!S.clearcoatRoughnessMap, de = Z && !!S.iridescenceMap, Ee = Z && !!S.iridescenceThicknessMap, Te = G && !!S.sheenColorMap, fe = G && !!S.sheenRoughnessMap, Oe = !!S.specularMap, Pe = !!S.specularColorMap, Ze = !!S.specularIntensityMap, C = ge && !!S.transmissionMap, ne = ge && !!S.thicknessMap, H = !!S.gradientMap, q = !!S.alphaMap, le = S.alphaTest > 0, oe = !!S.alphaHash, Re = !!S.extensions;
    let et = pn;
    S.toneMapped && (se === null || se.isXRRenderTarget === true) && (et = i.toneMapping);
    const ht = { shaderID: re, shaderType: S.type, shaderName: S.name, vertexShader: Ke, fragmentShader: W, defines: S.defines, customVertexShaderID: ee, customFragmentShaderID: me, isRawShaderMaterial: S.isRawShaderMaterial === true, glslVersion: S.glslVersion, precision: m, batching: Ae, batchingColor: Ae && z._colorsTexture !== null, instancing: Ge, instancingColor: Ge && z.instanceColor !== null, instancingMorph: Ge && z.morphTexture !== null, supportsVertexTextures: d, outputColorSpace: se === null ? i.outputColorSpace : se.isXRRenderTarget === true ? se.texture.colorSpace : si, alphaToCoverage: !!S.alphaToCoverage, map: nt, matcap: Qe, envMap: Ie, envMapMode: Ie && j.mapping, envMapCubeUVHeight: V, aoMap: T, lightMap: Tt, bumpMap: Ne, normalMap: Fe, displacementMap: d && xe, emissiveMap: je, normalMapObjectSpace: Fe && S.normalMapType === yl, normalMapTangentSpace: Fe && S.normalMapType === fo, metalnessMap: _e, roughnessMap: E, anisotropy: g, anisotropyMap: ae, clearcoat: N, clearcoatMap: he, clearcoatNormalMap: Be, clearcoatRoughnessMap: Q, dispersion: $, iridescence: Z, iridescenceMap: de, iridescenceThicknessMap: Ee, sheen: G, sheenColorMap: Te, sheenRoughnessMap: fe, specularMap: Oe, specularColorMap: Pe, specularIntensityMap: Ze, transmission: ge, transmissionMap: C, thicknessMap: ne, gradientMap: H, opaque: S.transparent === false && S.blending === jn && S.alphaToCoverage === false, alphaMap: q, alphaTest: le, alphaHash: oe, combine: S.combine, mapUv: nt && x(S.map.channel), aoMapUv: T && x(S.aoMap.channel), lightMapUv: Tt && x(S.lightMap.channel), bumpMapUv: Ne && x(S.bumpMap.channel), normalMapUv: Fe && x(S.normalMap.channel), displacementMapUv: xe && x(S.displacementMap.channel), emissiveMapUv: je && x(S.emissiveMap.channel), metalnessMapUv: _e && x(S.metalnessMap.channel), roughnessMapUv: E && x(S.roughnessMap.channel), anisotropyMapUv: ae && x(S.anisotropyMap.channel), clearcoatMapUv: he && x(S.clearcoatMap.channel), clearcoatNormalMapUv: Be && x(S.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: Q && x(S.clearcoatRoughnessMap.channel), iridescenceMapUv: de && x(S.iridescenceMap.channel), iridescenceThicknessMapUv: Ee && x(S.iridescenceThicknessMap.channel), sheenColorMapUv: Te && x(S.sheenColorMap.channel), sheenRoughnessMapUv: fe && x(S.sheenRoughnessMap.channel), specularMapUv: Oe && x(S.specularMap.channel), specularColorMapUv: Pe && x(S.specularColorMap.channel), specularIntensityMapUv: Ze && x(S.specularIntensityMap.channel), transmissionMapUv: C && x(S.transmissionMap.channel), thicknessMapUv: ne && x(S.thicknessMap.channel), alphaMapUv: q && x(S.alphaMap.channel), vertexTangents: !!K.attributes.tangent && (Fe || g), vertexColors: S.vertexColors, vertexAlphas: S.vertexColors === true && !!K.attributes.color && K.attributes.color.itemSize === 4, pointsUvs: z.isPoints === true && !!K.attributes.uv && (nt || q), fog: !!Y, useFog: S.fog === true, fogExp2: !!Y && Y.isFogExp2, flatShading: S.flatShading === true, sizeAttenuation: S.sizeAttenuation === true, logarithmicDepthBuffer: f, reverseDepthBuffer: ye, skinning: z.isSkinnedMesh === true, morphTargets: K.morphAttributes.position !== void 0, morphNormals: K.morphAttributes.normal !== void 0, morphColors: K.morphAttributes.color !== void 0, morphTargetsCount: ve, morphTextureStride: De, numDirLights: M.directional.length, numPointLights: M.point.length, numSpotLights: M.spot.length, numSpotLightMaps: M.spotLightMap.length, numRectAreaLights: M.rectArea.length, numHemiLights: M.hemi.length, numDirLightShadows: M.directionalShadowMap.length, numPointLightShadows: M.pointShadowMap.length, numSpotLightShadows: M.spotShadowMap.length, numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps, numLightProbes: M.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: S.dithering, shadowMapEnabled: i.shadowMap.enabled && R.length > 0, shadowMapType: i.shadowMap.type, toneMapping: et, decodeVideoTexture: nt && S.map.isVideoTexture === true && Ve.getTransfer(S.map.colorSpace) === qe, decodeVideoTextureEmissive: je && S.emissiveMap.isVideoTexture === true && Ve.getTransfer(S.emissiveMap.colorSpace) === qe, premultipliedAlpha: S.premultipliedAlpha, doubleSided: S.side === Jt, flipSided: S.side === xt, useDepthPacking: S.depthPacking >= 0, depthPacking: S.depthPacking || 0, index0AttributeName: S.index0AttributeName, extensionClipCullDistance: Re && S.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (Re && S.extensions.multiDraw === true || Ae) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: S.customProgramCacheKey() };
    return ht.vertexUv1s = c.has(1), ht.vertexUv2s = c.has(2), ht.vertexUv3s = c.has(3), c.clear(), ht;
  }
  function h(S) {
    const M = [];
    if (S.shaderID ? M.push(S.shaderID) : (M.push(S.customVertexShaderID), M.push(S.customFragmentShaderID)), S.defines !== void 0) for (const R in S.defines) M.push(R), M.push(S.defines[R]);
    return S.isRawShaderMaterial === false && (b(M, S), A(M, S), M.push(i.outputColorSpace)), M.push(S.customProgramCacheKey), M.join();
  }
  function b(S, M) {
    S.push(M.precision), S.push(M.outputColorSpace), S.push(M.envMapMode), S.push(M.envMapCubeUVHeight), S.push(M.mapUv), S.push(M.alphaMapUv), S.push(M.lightMapUv), S.push(M.aoMapUv), S.push(M.bumpMapUv), S.push(M.normalMapUv), S.push(M.displacementMapUv), S.push(M.emissiveMapUv), S.push(M.metalnessMapUv), S.push(M.roughnessMapUv), S.push(M.anisotropyMapUv), S.push(M.clearcoatMapUv), S.push(M.clearcoatNormalMapUv), S.push(M.clearcoatRoughnessMapUv), S.push(M.iridescenceMapUv), S.push(M.iridescenceThicknessMapUv), S.push(M.sheenColorMapUv), S.push(M.sheenRoughnessMapUv), S.push(M.specularMapUv), S.push(M.specularColorMapUv), S.push(M.specularIntensityMapUv), S.push(M.transmissionMapUv), S.push(M.thicknessMapUv), S.push(M.combine), S.push(M.fogExp2), S.push(M.sizeAttenuation), S.push(M.morphTargetsCount), S.push(M.morphAttributeCount), S.push(M.numDirLights), S.push(M.numPointLights), S.push(M.numSpotLights), S.push(M.numSpotLightMaps), S.push(M.numHemiLights), S.push(M.numRectAreaLights), S.push(M.numDirLightShadows), S.push(M.numPointLightShadows), S.push(M.numSpotLightShadows), S.push(M.numSpotLightShadowsWithMaps), S.push(M.numLightProbes), S.push(M.shadowMapType), S.push(M.toneMapping), S.push(M.numClippingPlanes), S.push(M.numClipIntersection), S.push(M.depthPacking);
  }
  function A(S, M) {
    o.disableAll(), M.supportsVertexTextures && o.enable(0), M.instancing && o.enable(1), M.instancingColor && o.enable(2), M.instancingMorph && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), M.dispersion && o.enable(20), M.batchingColor && o.enable(21), S.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.reverseDepthBuffer && o.enable(4), M.skinning && o.enable(5), M.morphTargets && o.enable(6), M.morphNormals && o.enable(7), M.morphColors && o.enable(8), M.premultipliedAlpha && o.enable(9), M.shadowMapEnabled && o.enable(10), M.doubleSided && o.enable(11), M.flipSided && o.enable(12), M.useDepthPacking && o.enable(13), M.dithering && o.enable(14), M.transmission && o.enable(15), M.sheen && o.enable(16), M.opaque && o.enable(17), M.pointsUvs && o.enable(18), M.decodeVideoTexture && o.enable(19), M.decodeVideoTextureEmissive && o.enable(20), M.alphaToCoverage && o.enable(21), S.push(o.mask);
  }
  function y(S) {
    const M = v[S.type];
    let R;
    if (M) {
      const k = Ht[M];
      R = ec.clone(k.uniforms);
    } else R = S.uniforms;
    return R;
  }
  function U(S, M) {
    let R;
    for (let k = 0, z = u.length; k < z; k++) {
      const Y = u[k];
      if (Y.cacheKey === M) {
        R = Y, ++R.usedTimes;
        break;
      }
    }
    return R === void 0 && (R = new Tf(i, M, S, s), u.push(R)), R;
  }
  function L(S) {
    if (--S.usedTimes === 0) {
      const M = u.indexOf(S);
      u[M] = u[u.length - 1], u.pop(), S.destroy();
    }
  }
  function w(S) {
    l.remove(S);
  }
  function I() {
    l.dispose();
  }
  return { getParameters: p, getProgramCacheKey: h, getUniforms: y, acquireProgram: U, releaseProgram: L, releaseShaderCache: w, programs: u, dispose: I };
}
function Pf() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return i.has(a);
  }
  function t(a) {
    let o = i.get(a);
    return o === void 0 && (o = {}, i.set(a, o)), o;
  }
  function n(a) {
    i.delete(a);
  }
  function r(a, o, l) {
    i.get(a)[o] = l;
  }
  function s() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return { has: e, get: t, remove: n, update: r, dispose: s };
}
function Lf(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function Ka(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function Za() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function a(f, d, m, v, x, p) {
    let h = i[e];
    return h === void 0 ? (h = { id: f.id, object: f, geometry: d, material: m, groupOrder: v, renderOrder: f.renderOrder, z: x, group: p }, i[e] = h) : (h.id = f.id, h.object = f, h.geometry = d, h.material = m, h.groupOrder = v, h.renderOrder = f.renderOrder, h.z = x, h.group = p), e++, h;
  }
  function o(f, d, m, v, x, p) {
    const h = a(f, d, m, v, x, p);
    m.transmission > 0 ? n.push(h) : m.transparent === true ? r.push(h) : t.push(h);
  }
  function l(f, d, m, v, x, p) {
    const h = a(f, d, m, v, x, p);
    m.transmission > 0 ? n.unshift(h) : m.transparent === true ? r.unshift(h) : t.unshift(h);
  }
  function c(f, d) {
    t.length > 1 && t.sort(f || Lf), n.length > 1 && n.sort(d || Ka), r.length > 1 && r.sort(d || Ka);
  }
  function u() {
    for (let f = e, d = i.length; f < d; f++) {
      const m = i[f];
      if (m.id === null) break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return { opaque: t, transmissive: n, transparent: r, init: s, push: o, unshift: l, finish: u, sort: c };
}
function Df() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let a;
    return s === void 0 ? (a = new Za(), i.set(n, [a])) : r >= s.length ? (a = new Za(), s.push(a)) : a = s[r], a;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function Uf() {
  const i = {};
  return { get: function(e) {
    if (i[e.id] !== void 0) return i[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new O(), color: new ke() };
        break;
      case "SpotLight":
        t = { position: new O(), direction: new O(), color: new ke(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new O(), color: new ke(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new O(), skyColor: new ke(), groundColor: new ke() };
        break;
      case "RectAreaLight":
        t = { color: new ke(), position: new O(), halfWidth: new O(), halfHeight: new O() };
        break;
    }
    return i[e.id] = t, t;
  } };
}
function If() {
  const i = {};
  return { get: function(e) {
    if (i[e.id] !== void 0) return i[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ye() };
        break;
      case "SpotLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ye() };
        break;
      case "PointLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Ye(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return i[e.id] = t, t;
  } };
}
let Nf = 0;
function Ff(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Of(i) {
  const e = new Uf(), t = If(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) n.probe.push(new O());
  const r = new O(), s = new rt(), a = new rt();
  function o(c) {
    let u = 0, f = 0, d = 0;
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let m = 0, v = 0, x = 0, p = 0, h = 0, b = 0, A = 0, y = 0, U = 0, L = 0, w = 0;
    c.sort(Ff);
    for (let S = 0, M = c.length; S < M; S++) {
      const R = c[S], k = R.color, z = R.intensity, Y = R.distance, K = R.shadow && R.shadow.map ? R.shadow.map.texture : null;
      if (R.isAmbientLight) u += k.r * z, f += k.g * z, d += k.b * z;
      else if (R.isLightProbe) {
        for (let X = 0; X < 9; X++) n.probe[X].addScaledVector(R.sh.coefficients[X], z);
        w++;
      } else if (R.isDirectionalLight) {
        const X = e.get(R);
        if (X.color.copy(R.color).multiplyScalar(R.intensity), R.castShadow) {
          const j = R.shadow, V = t.get(R);
          V.shadowIntensity = j.intensity, V.shadowBias = j.bias, V.shadowNormalBias = j.normalBias, V.shadowRadius = j.radius, V.shadowMapSize = j.mapSize, n.directionalShadow[m] = V, n.directionalShadowMap[m] = K, n.directionalShadowMatrix[m] = R.shadow.matrix, b++;
        }
        n.directional[m] = X, m++;
      } else if (R.isSpotLight) {
        const X = e.get(R);
        X.position.setFromMatrixPosition(R.matrixWorld), X.color.copy(k).multiplyScalar(z), X.distance = Y, X.coneCos = Math.cos(R.angle), X.penumbraCos = Math.cos(R.angle * (1 - R.penumbra)), X.decay = R.decay, n.spot[x] = X;
        const j = R.shadow;
        if (R.map && (n.spotLightMap[U] = R.map, U++, j.updateMatrices(R), R.castShadow && L++), n.spotLightMatrix[x] = j.matrix, R.castShadow) {
          const V = t.get(R);
          V.shadowIntensity = j.intensity, V.shadowBias = j.bias, V.shadowNormalBias = j.normalBias, V.shadowRadius = j.radius, V.shadowMapSize = j.mapSize, n.spotShadow[x] = V, n.spotShadowMap[x] = K, y++;
        }
        x++;
      } else if (R.isRectAreaLight) {
        const X = e.get(R);
        X.color.copy(k).multiplyScalar(z), X.halfWidth.set(R.width * 0.5, 0, 0), X.halfHeight.set(0, R.height * 0.5, 0), n.rectArea[p] = X, p++;
      } else if (R.isPointLight) {
        const X = e.get(R);
        if (X.color.copy(R.color).multiplyScalar(R.intensity), X.distance = R.distance, X.decay = R.decay, R.castShadow) {
          const j = R.shadow, V = t.get(R);
          V.shadowIntensity = j.intensity, V.shadowBias = j.bias, V.shadowNormalBias = j.normalBias, V.shadowRadius = j.radius, V.shadowMapSize = j.mapSize, V.shadowCameraNear = j.camera.near, V.shadowCameraFar = j.camera.far, n.pointShadow[v] = V, n.pointShadowMap[v] = K, n.pointShadowMatrix[v] = R.shadow.matrix, A++;
        }
        n.point[v] = X, v++;
      } else if (R.isHemisphereLight) {
        const X = e.get(R);
        X.skyColor.copy(R.color).multiplyScalar(z), X.groundColor.copy(R.groundColor).multiplyScalar(z), n.hemi[h] = X, h++;
      }
    }
    p > 0 && (i.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = te.LTC_FLOAT_1, n.rectAreaLTC2 = te.LTC_FLOAT_2) : (n.rectAreaLTC1 = te.LTC_HALF_1, n.rectAreaLTC2 = te.LTC_HALF_2)), n.ambient[0] = u, n.ambient[1] = f, n.ambient[2] = d;
    const I = n.hash;
    (I.directionalLength !== m || I.pointLength !== v || I.spotLength !== x || I.rectAreaLength !== p || I.hemiLength !== h || I.numDirectionalShadows !== b || I.numPointShadows !== A || I.numSpotShadows !== y || I.numSpotMaps !== U || I.numLightProbes !== w) && (n.directional.length = m, n.spot.length = x, n.rectArea.length = p, n.point.length = v, n.hemi.length = h, n.directionalShadow.length = b, n.directionalShadowMap.length = b, n.pointShadow.length = A, n.pointShadowMap.length = A, n.spotShadow.length = y, n.spotShadowMap.length = y, n.directionalShadowMatrix.length = b, n.pointShadowMatrix.length = A, n.spotLightMatrix.length = y + U - L, n.spotLightMap.length = U, n.numSpotLightShadowsWithMaps = L, n.numLightProbes = w, I.directionalLength = m, I.pointLength = v, I.spotLength = x, I.rectAreaLength = p, I.hemiLength = h, I.numDirectionalShadows = b, I.numPointShadows = A, I.numSpotShadows = y, I.numSpotMaps = U, I.numLightProbes = w, n.version = Nf++);
  }
  function l(c, u) {
    let f = 0, d = 0, m = 0, v = 0, x = 0;
    const p = u.matrixWorldInverse;
    for (let h = 0, b = c.length; h < b; h++) {
      const A = c[h];
      if (A.isDirectionalLight) {
        const y = n.directional[f];
        y.direction.setFromMatrixPosition(A.matrixWorld), r.setFromMatrixPosition(A.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(p), f++;
      } else if (A.isSpotLight) {
        const y = n.spot[m];
        y.position.setFromMatrixPosition(A.matrixWorld), y.position.applyMatrix4(p), y.direction.setFromMatrixPosition(A.matrixWorld), r.setFromMatrixPosition(A.target.matrixWorld), y.direction.sub(r), y.direction.transformDirection(p), m++;
      } else if (A.isRectAreaLight) {
        const y = n.rectArea[v];
        y.position.setFromMatrixPosition(A.matrixWorld), y.position.applyMatrix4(p), a.identity(), s.copy(A.matrixWorld), s.premultiply(p), a.extractRotation(s), y.halfWidth.set(A.width * 0.5, 0, 0), y.halfHeight.set(0, A.height * 0.5, 0), y.halfWidth.applyMatrix4(a), y.halfHeight.applyMatrix4(a), v++;
      } else if (A.isPointLight) {
        const y = n.point[d];
        y.position.setFromMatrixPosition(A.matrixWorld), y.position.applyMatrix4(p), d++;
      } else if (A.isHemisphereLight) {
        const y = n.hemi[x];
        y.direction.setFromMatrixPosition(A.matrixWorld), y.direction.transformDirection(p), x++;
      }
    }
  }
  return { setup: o, setupView: l, state: n };
}
function ja(i) {
  const e = new Of(i), t = [], n = [];
  function r(u) {
    c.camera = u, t.length = 0, n.length = 0;
  }
  function s(u) {
    t.push(u);
  }
  function a(u) {
    n.push(u);
  }
  function o() {
    e.setup(t);
  }
  function l(u) {
    e.setupView(t, u);
  }
  const c = { lightsArray: t, shadowsArray: n, camera: null, lights: e, transmissionRenderTarget: {} };
  return { init: r, state: c, setupLights: o, setupLightsView: l, pushLight: s, pushShadow: a };
}
function Bf(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(r, s = 0) {
    const a = e.get(r);
    let o;
    return a === void 0 ? (o = new ja(i), e.set(r, [o])) : s >= a.length ? (o = new ja(i), a.push(o)) : o = a[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: n };
}
const zf = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Hf = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Vf(i, e, t) {
  let n = new wo();
  const r = new Ye(), s = new Ye(), a = new it(), o = new dc({ depthPacking: El }), l = new fc(), c = {}, u = t.maxTextureSize, f = { [mn]: xt, [xt]: mn, [Jt]: Jt }, d = new gn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Ye() }, radius: { value: 4 } }, vertexShader: zf, fragmentShader: Hf }), m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const v = new sn();
  v.setAttribute("position", new kt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const x = new Gt(v, d), p = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Qa;
  let h = this.type;
  this.render = function(L, w, I) {
    if (p.enabled === false || p.autoUpdate === false && p.needsUpdate === false || L.length === 0) return;
    const S = i.getRenderTarget(), M = i.getActiveCubeFace(), R = i.getActiveMipmapLevel(), k = i.state;
    k.setBlending(fn), k.buffers.color.setClear(1, 1, 1, 1), k.buffers.depth.setTest(true), k.setScissorTest(false);
    const z = h !== jt && this.type === jt, Y = h === jt && this.type !== jt;
    for (let K = 0, X = L.length; K < X; K++) {
      const j = L[K], V = j.shadow;
      if (V === void 0) {
        console.warn("THREE.WebGLShadowMap:", j, "has no shadow.");
        continue;
      }
      if (V.autoUpdate === false && V.needsUpdate === false) continue;
      r.copy(V.mapSize);
      const re = V.getFrameExtents();
      if (r.multiply(re), s.copy(V.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / re.x), r.x = s.x * re.x, V.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / re.y), r.y = s.y * re.y, V.mapSize.y = s.y)), V.map === null || z === true || Y === true) {
        const ve = this.type !== jt ? { minFilter: Bt, magFilter: Bt } : {};
        V.map !== null && V.map.dispose(), V.map = new Un(r.x, r.y, ve), V.map.texture.name = j.name + ".shadowMap", V.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(V.map), i.clear();
      const ue = V.getViewportCount();
      for (let ve = 0; ve < ue; ve++) {
        const De = V.getViewport(ve);
        a.set(s.x * De.x, s.y * De.y, s.x * De.z, s.y * De.w), k.viewport(a), V.updateMatrices(j, ve), n = V.getFrustum(), y(w, I, V.camera, j, this.type);
      }
      V.isPointLightShadow !== true && this.type === jt && b(V, I), V.needsUpdate = false;
    }
    h = this.type, p.needsUpdate = false, i.setRenderTarget(S, M, R);
  };
  function b(L, w) {
    const I = e.update(x);
    d.defines.VSM_SAMPLES !== L.blurSamples && (d.defines.VSM_SAMPLES = L.blurSamples, m.defines.VSM_SAMPLES = L.blurSamples, d.needsUpdate = true, m.needsUpdate = true), L.mapPass === null && (L.mapPass = new Un(r.x, r.y)), d.uniforms.shadow_pass.value = L.map.texture, d.uniforms.resolution.value = L.mapSize, d.uniforms.radius.value = L.radius, i.setRenderTarget(L.mapPass), i.clear(), i.renderBufferDirect(w, null, I, d, x, null), m.uniforms.shadow_pass.value = L.mapPass.texture, m.uniforms.resolution.value = L.mapSize, m.uniforms.radius.value = L.radius, i.setRenderTarget(L.map), i.clear(), i.renderBufferDirect(w, null, I, m, x, null);
  }
  function A(L, w, I, S) {
    let M = null;
    const R = I.isPointLight === true ? L.customDistanceMaterial : L.customDepthMaterial;
    if (R !== void 0) M = R;
    else if (M = I.isPointLight === true ? l : o, i.localClippingEnabled && w.clipShadows === true && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const k = M.uuid, z = w.uuid;
      let Y = c[k];
      Y === void 0 && (Y = {}, c[k] = Y);
      let K = Y[z];
      K === void 0 && (K = M.clone(), Y[z] = K, w.addEventListener("dispose", U)), M = K;
    }
    if (M.visible = w.visible, M.wireframe = w.wireframe, S === jt ? M.side = w.shadowSide !== null ? w.shadowSide : w.side : M.side = w.shadowSide !== null ? w.shadowSide : f[w.side], M.alphaMap = w.alphaMap, M.alphaTest = w.alphaTest, M.map = w.map, M.clipShadows = w.clipShadows, M.clippingPlanes = w.clippingPlanes, M.clipIntersection = w.clipIntersection, M.displacementMap = w.displacementMap, M.displacementScale = w.displacementScale, M.displacementBias = w.displacementBias, M.wireframeLinewidth = w.wireframeLinewidth, M.linewidth = w.linewidth, I.isPointLight === true && M.isMeshDistanceMaterial === true) {
      const k = i.properties.get(M);
      k.light = I;
    }
    return M;
  }
  function y(L, w, I, S, M) {
    if (L.visible === false) return;
    if (L.layers.test(w.layers) && (L.isMesh || L.isLine || L.isPoints) && (L.castShadow || L.receiveShadow && M === jt) && (!L.frustumCulled || n.intersectsObject(L))) {
      L.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse, L.matrixWorld);
      const z = e.update(L), Y = L.material;
      if (Array.isArray(Y)) {
        const K = z.groups;
        for (let X = 0, j = K.length; X < j; X++) {
          const V = K[X], re = Y[V.materialIndex];
          if (re && re.visible) {
            const ue = A(L, re, S, M);
            L.onBeforeShadow(i, L, w, I, z, ue, V), i.renderBufferDirect(I, null, z, ue, L, V), L.onAfterShadow(i, L, w, I, z, ue, V);
          }
        }
      } else if (Y.visible) {
        const K = A(L, Y, S, M);
        L.onBeforeShadow(i, L, w, I, z, K, null), i.renderBufferDirect(I, null, z, K, L, null), L.onAfterShadow(i, L, w, I, z, K, null);
      }
    }
    const k = L.children;
    for (let z = 0, Y = k.length; z < Y; z++) y(k[z], w, I, S, M);
  }
  function U(L) {
    L.target.removeEventListener("dispose", U);
    for (const I in c) {
      const S = c[I], M = L.target.uuid;
      M in S && (S[M].dispose(), delete S[M]);
    }
  }
}
const Gf = { [Zr]: jr, [Jr]: ts, [Qr]: ns, [ei]: es, [jr]: Zr, [ts]: Jr, [ns]: Qr, [es]: ei };
function kf(i, e) {
  function t() {
    let C = false;
    const ne = new it();
    let H = null;
    const q = new it(0, 0, 0, 0);
    return { setMask: function(le) {
      H !== le && !C && (i.colorMask(le, le, le, le), H = le);
    }, setLocked: function(le) {
      C = le;
    }, setClear: function(le, oe, Re, et, ht) {
      ht === true && (le *= et, oe *= et, Re *= et), ne.set(le, oe, Re, et), q.equals(ne) === false && (i.clearColor(le, oe, Re, et), q.copy(ne));
    }, reset: function() {
      C = false, H = null, q.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let C = false, ne = false, H = null, q = null, le = null;
    return { setReversed: function(oe) {
      if (ne !== oe) {
        const Re = e.get("EXT_clip_control");
        ne ? Re.clipControlEXT(Re.LOWER_LEFT_EXT, Re.ZERO_TO_ONE_EXT) : Re.clipControlEXT(Re.LOWER_LEFT_EXT, Re.NEGATIVE_ONE_TO_ONE_EXT);
        const et = le;
        le = null, this.setClear(et);
      }
      ne = oe;
    }, getReversed: function() {
      return ne;
    }, setTest: function(oe) {
      oe ? se(i.DEPTH_TEST) : ye(i.DEPTH_TEST);
    }, setMask: function(oe) {
      H !== oe && !C && (i.depthMask(oe), H = oe);
    }, setFunc: function(oe) {
      if (ne && (oe = Gf[oe]), q !== oe) {
        switch (oe) {
          case Zr:
            i.depthFunc(i.NEVER);
            break;
          case jr:
            i.depthFunc(i.ALWAYS);
            break;
          case Jr:
            i.depthFunc(i.LESS);
            break;
          case ei:
            i.depthFunc(i.LEQUAL);
            break;
          case Qr:
            i.depthFunc(i.EQUAL);
            break;
          case es:
            i.depthFunc(i.GEQUAL);
            break;
          case ts:
            i.depthFunc(i.GREATER);
            break;
          case ns:
            i.depthFunc(i.NOTEQUAL);
            break;
          default:
            i.depthFunc(i.LEQUAL);
        }
        q = oe;
      }
    }, setLocked: function(oe) {
      C = oe;
    }, setClear: function(oe) {
      le !== oe && (ne && (oe = 1 - oe), i.clearDepth(oe), le = oe);
    }, reset: function() {
      C = false, H = null, q = null, le = null, ne = false;
    } };
  }
  function r() {
    let C = false, ne = null, H = null, q = null, le = null, oe = null, Re = null, et = null, ht = null;
    return { setTest: function($e) {
      C || ($e ? se(i.STENCIL_TEST) : ye(i.STENCIL_TEST));
    }, setMask: function($e) {
      ne !== $e && !C && (i.stencilMask($e), ne = $e);
    }, setFunc: function($e, Lt, Xt) {
      (H !== $e || q !== Lt || le !== Xt) && (i.stencilFunc($e, Lt, Xt), H = $e, q = Lt, le = Xt);
    }, setOp: function($e, Lt, Xt) {
      (oe !== $e || Re !== Lt || et !== Xt) && (i.stencilOp($e, Lt, Xt), oe = $e, Re = Lt, et = Xt);
    }, setLocked: function($e) {
      C = $e;
    }, setClear: function($e) {
      ht !== $e && (i.clearStencil($e), ht = $e);
    }, reset: function() {
      C = false, ne = null, H = null, q = null, le = null, oe = null, Re = null, et = null, ht = null;
    } };
  }
  const s = new t(), a = new n(), o = new r(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let u = {}, f = {}, d = /* @__PURE__ */ new WeakMap(), m = [], v = null, x = false, p = null, h = null, b = null, A = null, y = null, U = null, L = null, w = new ke(0, 0, 0), I = 0, S = false, M = null, R = null, k = null, z = null, Y = null;
  const K = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let X = false, j = 0;
  const V = i.getParameter(i.VERSION);
  V.indexOf("WebGL") !== -1 ? (j = parseFloat(/^WebGL (\d)/.exec(V)[1]), X = j >= 1) : V.indexOf("OpenGL ES") !== -1 && (j = parseFloat(/^OpenGL ES (\d)/.exec(V)[1]), X = j >= 2);
  let re = null, ue = {};
  const ve = i.getParameter(i.SCISSOR_BOX), De = i.getParameter(i.VIEWPORT), Ke = new it().fromArray(ve), W = new it().fromArray(De);
  function ee(C, ne, H, q) {
    const le = new Uint8Array(4), oe = i.createTexture();
    i.bindTexture(C, oe), i.texParameteri(C, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(C, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Re = 0; Re < H; Re++) C === i.TEXTURE_3D || C === i.TEXTURE_2D_ARRAY ? i.texImage3D(ne, 0, i.RGBA, 1, 1, q, 0, i.RGBA, i.UNSIGNED_BYTE, le) : i.texImage2D(ne + Re, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, le);
    return oe;
  }
  const me = {};
  me[i.TEXTURE_2D] = ee(i.TEXTURE_2D, i.TEXTURE_2D, 1), me[i.TEXTURE_CUBE_MAP] = ee(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), me[i.TEXTURE_2D_ARRAY] = ee(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), me[i.TEXTURE_3D] = ee(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), se(i.DEPTH_TEST), a.setFunc(ei), Ne(false), Fe(Qs), se(i.CULL_FACE), T(fn);
  function se(C) {
    u[C] !== true && (i.enable(C), u[C] = true);
  }
  function ye(C) {
    u[C] !== false && (i.disable(C), u[C] = false);
  }
  function Ge(C, ne) {
    return f[C] !== ne ? (i.bindFramebuffer(C, ne), f[C] = ne, C === i.DRAW_FRAMEBUFFER && (f[i.FRAMEBUFFER] = ne), C === i.FRAMEBUFFER && (f[i.DRAW_FRAMEBUFFER] = ne), true) : false;
  }
  function Ae(C, ne) {
    let H = m, q = false;
    if (C) {
      H = d.get(ne), H === void 0 && (H = [], d.set(ne, H));
      const le = C.textures;
      if (H.length !== le.length || H[0] !== i.COLOR_ATTACHMENT0) {
        for (let oe = 0, Re = le.length; oe < Re; oe++) H[oe] = i.COLOR_ATTACHMENT0 + oe;
        H.length = le.length, q = true;
      }
    } else H[0] !== i.BACK && (H[0] = i.BACK, q = true);
    q && i.drawBuffers(H);
  }
  function nt(C) {
    return v !== C ? (i.useProgram(C), v = C, true) : false;
  }
  const Qe = { [Rn]: i.FUNC_ADD, [Yo]: i.FUNC_SUBTRACT, [Ko]: i.FUNC_REVERSE_SUBTRACT };
  Qe[Zo] = i.MIN, Qe[jo] = i.MAX;
  const Ie = { [Jo]: i.ZERO, [Qo]: i.ONE, [el]: i.SRC_COLOR, [Yr]: i.SRC_ALPHA, [al]: i.SRC_ALPHA_SATURATE, [rl]: i.DST_COLOR, [nl]: i.DST_ALPHA, [tl]: i.ONE_MINUS_SRC_COLOR, [Kr]: i.ONE_MINUS_SRC_ALPHA, [sl]: i.ONE_MINUS_DST_COLOR, [il]: i.ONE_MINUS_DST_ALPHA, [ol]: i.CONSTANT_COLOR, [ll]: i.ONE_MINUS_CONSTANT_COLOR, [cl]: i.CONSTANT_ALPHA, [ul]: i.ONE_MINUS_CONSTANT_ALPHA };
  function T(C, ne, H, q, le, oe, Re, et, ht, $e) {
    if (C === fn) {
      x === true && (ye(i.BLEND), x = false);
      return;
    }
    if (x === false && (se(i.BLEND), x = true), C !== qo) {
      if (C !== p || $e !== S) {
        if ((h !== Rn || y !== Rn) && (i.blendEquation(i.FUNC_ADD), h = Rn, y = Rn), $e) switch (C) {
          case jn:
            i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case ea:
            i.blendFunc(i.ONE, i.ONE);
            break;
          case ta:
            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
            break;
          case na:
            i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", C);
            break;
        }
        else switch (C) {
          case jn:
            i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
            break;
          case ea:
            i.blendFunc(i.SRC_ALPHA, i.ONE);
            break;
          case ta:
            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
            break;
          case na:
            i.blendFunc(i.ZERO, i.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", C);
            break;
        }
        b = null, A = null, U = null, L = null, w.set(0, 0, 0), I = 0, p = C, S = $e;
      }
      return;
    }
    le = le || ne, oe = oe || H, Re = Re || q, (ne !== h || le !== y) && (i.blendEquationSeparate(Qe[ne], Qe[le]), h = ne, y = le), (H !== b || q !== A || oe !== U || Re !== L) && (i.blendFuncSeparate(Ie[H], Ie[q], Ie[oe], Ie[Re]), b = H, A = q, U = oe, L = Re), (et.equals(w) === false || ht !== I) && (i.blendColor(et.r, et.g, et.b, ht), w.copy(et), I = ht), p = C, S = false;
  }
  function Tt(C, ne) {
    C.side === Jt ? ye(i.CULL_FACE) : se(i.CULL_FACE);
    let H = C.side === xt;
    ne && (H = !H), Ne(H), C.blending === jn && C.transparent === false ? T(fn) : T(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.blendColor, C.blendAlpha, C.premultipliedAlpha), a.setFunc(C.depthFunc), a.setTest(C.depthTest), a.setMask(C.depthWrite), s.setMask(C.colorWrite);
    const q = C.stencilWrite;
    o.setTest(q), q && (o.setMask(C.stencilWriteMask), o.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask), o.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)), je(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits), C.alphaToCoverage === true ? se(i.SAMPLE_ALPHA_TO_COVERAGE) : ye(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ne(C) {
    M !== C && (C ? i.frontFace(i.CW) : i.frontFace(i.CCW), M = C);
  }
  function Fe(C) {
    C !== Wo ? (se(i.CULL_FACE), C !== R && (C === Qs ? i.cullFace(i.BACK) : C === Xo ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : ye(i.CULL_FACE), R = C;
  }
  function xe(C) {
    C !== k && (X && i.lineWidth(C), k = C);
  }
  function je(C, ne, H) {
    C ? (se(i.POLYGON_OFFSET_FILL), (z !== ne || Y !== H) && (i.polygonOffset(ne, H), z = ne, Y = H)) : ye(i.POLYGON_OFFSET_FILL);
  }
  function _e(C) {
    C ? se(i.SCISSOR_TEST) : ye(i.SCISSOR_TEST);
  }
  function E(C) {
    C === void 0 && (C = i.TEXTURE0 + K - 1), re !== C && (i.activeTexture(C), re = C);
  }
  function g(C, ne, H) {
    H === void 0 && (re === null ? H = i.TEXTURE0 + K - 1 : H = re);
    let q = ue[H];
    q === void 0 && (q = { type: void 0, texture: void 0 }, ue[H] = q), (q.type !== C || q.texture !== ne) && (re !== H && (i.activeTexture(H), re = H), i.bindTexture(C, ne || me[C]), q.type = C, q.texture = ne);
  }
  function N() {
    const C = ue[re];
    C !== void 0 && C.type !== void 0 && (i.bindTexture(C.type, null), C.type = void 0, C.texture = void 0);
  }
  function $() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Z() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function G() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ge() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function ae() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function he() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Be() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Q() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function de() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Ee() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (C) {
      console.error("THREE.WebGLState:", C);
    }
  }
  function Te(C) {
    Ke.equals(C) === false && (i.scissor(C.x, C.y, C.z, C.w), Ke.copy(C));
  }
  function fe(C) {
    W.equals(C) === false && (i.viewport(C.x, C.y, C.z, C.w), W.copy(C));
  }
  function Oe(C, ne) {
    let H = c.get(ne);
    H === void 0 && (H = /* @__PURE__ */ new WeakMap(), c.set(ne, H));
    let q = H.get(C);
    q === void 0 && (q = i.getUniformBlockIndex(ne, C.name), H.set(C, q));
  }
  function Pe(C, ne) {
    const q = c.get(ne).get(C);
    l.get(ne) !== q && (i.uniformBlockBinding(ne, q, C.__bindingPointIndex), l.set(ne, q));
  }
  function Ze() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(true, true, true, true), i.clearColor(0, 0, 0, 0), i.depthMask(true), i.depthFunc(i.LESS), a.setReversed(false), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), u = {}, re = null, ue = {}, f = {}, d = /* @__PURE__ */ new WeakMap(), m = [], v = null, x = false, p = null, h = null, b = null, A = null, y = null, U = null, L = null, w = new ke(0, 0, 0), I = 0, S = false, M = null, R = null, k = null, z = null, Y = null, Ke.set(0, 0, i.canvas.width, i.canvas.height), W.set(0, 0, i.canvas.width, i.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return { buffers: { color: s, depth: a, stencil: o }, enable: se, disable: ye, bindFramebuffer: Ge, drawBuffers: Ae, useProgram: nt, setBlending: T, setMaterial: Tt, setFlipSided: Ne, setCullFace: Fe, setLineWidth: xe, setPolygonOffset: je, setScissorTest: _e, activeTexture: E, bindTexture: g, unbindTexture: N, compressedTexImage2D: $, compressedTexImage3D: Z, texImage2D: de, texImage3D: Ee, updateUBOMapping: Oe, uniformBlockBinding: Pe, texStorage2D: Be, texStorage3D: Q, texSubImage2D: G, texSubImage3D: ge, compressedTexSubImage2D: ae, compressedTexSubImage3D: he, scissor: Te, viewport: fe, reset: Ze };
}
function Wf(i, e, t, n, r, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new Ye(), u = /* @__PURE__ */ new WeakMap();
  let f;
  const d = /* @__PURE__ */ new WeakMap();
  let m = false;
  try {
    m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function v(E, g) {
    return m ? new OffscreenCanvas(E, g) : ar("canvas");
  }
  function x(E, g, N) {
    let $ = 1;
    const Z = _e(E);
    if ((Z.width > N || Z.height > N) && ($ = N / Math.max(Z.width, Z.height)), $ < 1) if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
      const G = Math.floor($ * Z.width), ge = Math.floor($ * Z.height);
      f === void 0 && (f = v(G, ge));
      const ae = g ? v(G, ge) : f;
      return ae.width = G, ae.height = ge, ae.getContext("2d").drawImage(E, 0, 0, G, ge), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + G + "x" + ge + ")."), ae;
    } else return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), E;
    return E;
  }
  function p(E) {
    return E.generateMipmaps;
  }
  function h(E) {
    i.generateMipmap(E);
  }
  function b(E) {
    return E.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? i.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? i.TEXTURE_2D_ARRAY : i.TEXTURE_2D;
  }
  function A(E, g, N, $, Z = false) {
    if (E !== null) {
      if (i[E] !== void 0) return i[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let G = g;
    if (g === i.RED && (N === i.FLOAT && (G = i.R32F), N === i.HALF_FLOAT && (G = i.R16F), N === i.UNSIGNED_BYTE && (G = i.R8)), g === i.RED_INTEGER && (N === i.UNSIGNED_BYTE && (G = i.R8UI), N === i.UNSIGNED_SHORT && (G = i.R16UI), N === i.UNSIGNED_INT && (G = i.R32UI), N === i.BYTE && (G = i.R8I), N === i.SHORT && (G = i.R16I), N === i.INT && (G = i.R32I)), g === i.RG && (N === i.FLOAT && (G = i.RG32F), N === i.HALF_FLOAT && (G = i.RG16F), N === i.UNSIGNED_BYTE && (G = i.RG8)), g === i.RG_INTEGER && (N === i.UNSIGNED_BYTE && (G = i.RG8UI), N === i.UNSIGNED_SHORT && (G = i.RG16UI), N === i.UNSIGNED_INT && (G = i.RG32UI), N === i.BYTE && (G = i.RG8I), N === i.SHORT && (G = i.RG16I), N === i.INT && (G = i.RG32I)), g === i.RGB_INTEGER && (N === i.UNSIGNED_BYTE && (G = i.RGB8UI), N === i.UNSIGNED_SHORT && (G = i.RGB16UI), N === i.UNSIGNED_INT && (G = i.RGB32UI), N === i.BYTE && (G = i.RGB8I), N === i.SHORT && (G = i.RGB16I), N === i.INT && (G = i.RGB32I)), g === i.RGBA_INTEGER && (N === i.UNSIGNED_BYTE && (G = i.RGBA8UI), N === i.UNSIGNED_SHORT && (G = i.RGBA16UI), N === i.UNSIGNED_INT && (G = i.RGBA32UI), N === i.BYTE && (G = i.RGBA8I), N === i.SHORT && (G = i.RGBA16I), N === i.INT && (G = i.RGBA32I)), g === i.RGB && N === i.UNSIGNED_INT_5_9_9_9_REV && (G = i.RGB9_E5), g === i.RGBA) {
      const ge = Z ? rr : Ve.getTransfer($);
      N === i.FLOAT && (G = i.RGBA32F), N === i.HALF_FLOAT && (G = i.RGBA16F), N === i.UNSIGNED_BYTE && (G = ge === qe ? i.SRGB8_ALPHA8 : i.RGBA8), N === i.UNSIGNED_SHORT_4_4_4_4 && (G = i.RGBA4), N === i.UNSIGNED_SHORT_5_5_5_1 && (G = i.RGB5_A1);
    }
    return (G === i.R16F || G === i.R32F || G === i.RG16F || G === i.RG32F || G === i.RGBA16F || G === i.RGBA32F) && e.get("EXT_color_buffer_float"), G;
  }
  function y(E, g) {
    let N;
    return E ? g === null || g === Dn || g === ii ? N = i.DEPTH24_STENCIL8 : g === Qt ? N = i.DEPTH32F_STENCIL8 : g === Mi && (N = i.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : g === null || g === Dn || g === ii ? N = i.DEPTH_COMPONENT24 : g === Qt ? N = i.DEPTH_COMPONENT32F : g === Mi && (N = i.DEPTH_COMPONENT16), N;
  }
  function U(E, g) {
    return p(E) === true || E.isFramebufferTexture && E.minFilter !== Bt && E.minFilter !== Vt ? Math.log2(Math.max(g.width, g.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? g.mipmaps.length : 1;
  }
  function L(E) {
    const g = E.target;
    g.removeEventListener("dispose", L), I(g), g.isVideoTexture && u.delete(g);
  }
  function w(E) {
    const g = E.target;
    g.removeEventListener("dispose", w), M(g);
  }
  function I(E) {
    const g = n.get(E);
    if (g.__webglInit === void 0) return;
    const N = E.source, $ = d.get(N);
    if ($) {
      const Z = $[g.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && S(E), Object.keys($).length === 0 && d.delete(N);
    }
    n.remove(E);
  }
  function S(E) {
    const g = n.get(E);
    i.deleteTexture(g.__webglTexture);
    const N = E.source, $ = d.get(N);
    delete $[g.__cacheKey], a.memory.textures--;
  }
  function M(E) {
    const g = n.get(E);
    if (E.depthTexture && (E.depthTexture.dispose(), n.remove(E.depthTexture)), E.isWebGLCubeRenderTarget) for (let $ = 0; $ < 6; $++) {
      if (Array.isArray(g.__webglFramebuffer[$])) for (let Z = 0; Z < g.__webglFramebuffer[$].length; Z++) i.deleteFramebuffer(g.__webglFramebuffer[$][Z]);
      else i.deleteFramebuffer(g.__webglFramebuffer[$]);
      g.__webglDepthbuffer && i.deleteRenderbuffer(g.__webglDepthbuffer[$]);
    }
    else {
      if (Array.isArray(g.__webglFramebuffer)) for (let $ = 0; $ < g.__webglFramebuffer.length; $++) i.deleteFramebuffer(g.__webglFramebuffer[$]);
      else i.deleteFramebuffer(g.__webglFramebuffer);
      if (g.__webglDepthbuffer && i.deleteRenderbuffer(g.__webglDepthbuffer), g.__webglMultisampledFramebuffer && i.deleteFramebuffer(g.__webglMultisampledFramebuffer), g.__webglColorRenderbuffer) for (let $ = 0; $ < g.__webglColorRenderbuffer.length; $++) g.__webglColorRenderbuffer[$] && i.deleteRenderbuffer(g.__webglColorRenderbuffer[$]);
      g.__webglDepthRenderbuffer && i.deleteRenderbuffer(g.__webglDepthRenderbuffer);
    }
    const N = E.textures;
    for (let $ = 0, Z = N.length; $ < Z; $++) {
      const G = n.get(N[$]);
      G.__webglTexture && (i.deleteTexture(G.__webglTexture), a.memory.textures--), n.remove(N[$]);
    }
    n.remove(E);
  }
  let R = 0;
  function k() {
    R = 0;
  }
  function z() {
    const E = R;
    return E >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + r.maxTextures), R += 1, E;
  }
  function Y(E) {
    const g = [];
    return g.push(E.wrapS), g.push(E.wrapT), g.push(E.wrapR || 0), g.push(E.magFilter), g.push(E.minFilter), g.push(E.anisotropy), g.push(E.internalFormat), g.push(E.format), g.push(E.type), g.push(E.generateMipmaps), g.push(E.premultiplyAlpha), g.push(E.flipY), g.push(E.unpackAlignment), g.push(E.colorSpace), g.join();
  }
  function K(E, g) {
    const N = n.get(E);
    if (E.isVideoTexture && xe(E), E.isRenderTargetTexture === false && E.version > 0 && N.__version !== E.version) {
      const $ = E.image;
      if ($ === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if ($.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        W(N, E, g);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, N.__webglTexture, i.TEXTURE0 + g);
  }
  function X(E, g) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      W(N, E, g);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, N.__webglTexture, i.TEXTURE0 + g);
  }
  function j(E, g) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      W(N, E, g);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, N.__webglTexture, i.TEXTURE0 + g);
  }
  function V(E, g) {
    const N = n.get(E);
    if (E.version > 0 && N.__version !== E.version) {
      ee(N, E, g);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, N.__webglTexture, i.TEXTURE0 + g);
  }
  const re = { [ss]: i.REPEAT, [Pn]: i.CLAMP_TO_EDGE, [as]: i.MIRRORED_REPEAT }, ue = { [Bt]: i.NEAREST, [Ml]: i.NEAREST_MIPMAP_NEAREST, [Ri]: i.NEAREST_MIPMAP_LINEAR, [Vt]: i.LINEAR, [gr]: i.LINEAR_MIPMAP_NEAREST, [Ln]: i.LINEAR_MIPMAP_LINEAR }, ve = { [Al]: i.NEVER, [Pl]: i.ALWAYS, [Tl]: i.LESS, [po]: i.LEQUAL, [bl]: i.EQUAL, [Cl]: i.GEQUAL, [wl]: i.GREATER, [Rl]: i.NOTEQUAL };
  function De(E, g) {
    if (g.type === Qt && e.has("OES_texture_float_linear") === false && (g.magFilter === Vt || g.magFilter === gr || g.magFilter === Ri || g.magFilter === Ln || g.minFilter === Vt || g.minFilter === gr || g.minFilter === Ri || g.minFilter === Ln) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), i.texParameteri(E, i.TEXTURE_WRAP_S, re[g.wrapS]), i.texParameteri(E, i.TEXTURE_WRAP_T, re[g.wrapT]), (E === i.TEXTURE_3D || E === i.TEXTURE_2D_ARRAY) && i.texParameteri(E, i.TEXTURE_WRAP_R, re[g.wrapR]), i.texParameteri(E, i.TEXTURE_MAG_FILTER, ue[g.magFilter]), i.texParameteri(E, i.TEXTURE_MIN_FILTER, ue[g.minFilter]), g.compareFunction && (i.texParameteri(E, i.TEXTURE_COMPARE_MODE, i.COMPARE_REF_TO_TEXTURE), i.texParameteri(E, i.TEXTURE_COMPARE_FUNC, ve[g.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      if (g.magFilter === Bt || g.minFilter !== Ri && g.minFilter !== Ln || g.type === Qt && e.has("OES_texture_float_linear") === false) return;
      if (g.anisotropy > 1 || n.get(g).__currentAnisotropy) {
        const N = e.get("EXT_texture_filter_anisotropic");
        i.texParameterf(E, N.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(g.anisotropy, r.getMaxAnisotropy())), n.get(g).__currentAnisotropy = g.anisotropy;
      }
    }
  }
  function Ke(E, g) {
    let N = false;
    E.__webglInit === void 0 && (E.__webglInit = true, g.addEventListener("dispose", L));
    const $ = g.source;
    let Z = d.get($);
    Z === void 0 && (Z = {}, d.set($, Z));
    const G = Y(g);
    if (G !== E.__cacheKey) {
      Z[G] === void 0 && (Z[G] = { texture: i.createTexture(), usedTimes: 0 }, a.memory.textures++, N = true), Z[G].usedTimes++;
      const ge = Z[E.__cacheKey];
      ge !== void 0 && (Z[E.__cacheKey].usedTimes--, ge.usedTimes === 0 && S(g)), E.__cacheKey = G, E.__webglTexture = Z[G].texture;
    }
    return N;
  }
  function W(E, g, N) {
    let $ = i.TEXTURE_2D;
    (g.isDataArrayTexture || g.isCompressedArrayTexture) && ($ = i.TEXTURE_2D_ARRAY), g.isData3DTexture && ($ = i.TEXTURE_3D);
    const Z = Ke(E, g), G = g.source;
    t.bindTexture($, E.__webglTexture, i.TEXTURE0 + N);
    const ge = n.get(G);
    if (G.version !== ge.__version || Z === true) {
      t.activeTexture(i.TEXTURE0 + N);
      const ae = Ve.getPrimaries(Ve.workingColorSpace), he = g.colorSpace === dn ? null : Ve.getPrimaries(g.colorSpace), Be = g.colorSpace === dn || ae === he ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, Be);
      let Q = x(g.image, false, r.maxTextureSize);
      Q = je(g, Q);
      const de = s.convert(g.format, g.colorSpace), Ee = s.convert(g.type);
      let Te = A(g.internalFormat, de, Ee, g.colorSpace, g.isVideoTexture);
      De($, g);
      let fe;
      const Oe = g.mipmaps, Pe = g.isVideoTexture !== true, Ze = ge.__version === void 0 || Z === true, C = G.dataReady, ne = U(g, Q);
      if (g.isDepthTexture) Te = y(g.format === ri, g.type), Ze && (Pe ? t.texStorage2D(i.TEXTURE_2D, 1, Te, Q.width, Q.height) : t.texImage2D(i.TEXTURE_2D, 0, Te, Q.width, Q.height, 0, de, Ee, null));
      else if (g.isDataTexture) if (Oe.length > 0) {
        Pe && Ze && t.texStorage2D(i.TEXTURE_2D, ne, Te, Oe[0].width, Oe[0].height);
        for (let H = 0, q = Oe.length; H < q; H++) fe = Oe[H], Pe ? C && t.texSubImage2D(i.TEXTURE_2D, H, 0, 0, fe.width, fe.height, de, Ee, fe.data) : t.texImage2D(i.TEXTURE_2D, H, Te, fe.width, fe.height, 0, de, Ee, fe.data);
        g.generateMipmaps = false;
      } else Pe ? (Ze && t.texStorage2D(i.TEXTURE_2D, ne, Te, Q.width, Q.height), C && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Q.width, Q.height, de, Ee, Q.data)) : t.texImage2D(i.TEXTURE_2D, 0, Te, Q.width, Q.height, 0, de, Ee, Q.data);
      else if (g.isCompressedTexture) if (g.isCompressedArrayTexture) {
        Pe && Ze && t.texStorage3D(i.TEXTURE_2D_ARRAY, ne, Te, Oe[0].width, Oe[0].height, Q.depth);
        for (let H = 0, q = Oe.length; H < q; H++) if (fe = Oe[H], g.format !== Ot) if (de !== null) if (Pe) {
          if (C) if (g.layerUpdates.size > 0) {
            const le = wa(fe.width, fe.height, g.format, g.type);
            for (const oe of g.layerUpdates) {
              const Re = fe.data.subarray(oe * le / fe.data.BYTES_PER_ELEMENT, (oe + 1) * le / fe.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, H, 0, 0, oe, fe.width, fe.height, 1, de, Re);
            }
            g.clearLayerUpdates();
          } else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, H, 0, 0, 0, fe.width, fe.height, Q.depth, de, fe.data);
        } else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, H, Te, fe.width, fe.height, Q.depth, 0, fe.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else Pe ? C && t.texSubImage3D(i.TEXTURE_2D_ARRAY, H, 0, 0, 0, fe.width, fe.height, Q.depth, de, Ee, fe.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, H, Te, fe.width, fe.height, Q.depth, 0, de, Ee, fe.data);
      } else {
        Pe && Ze && t.texStorage2D(i.TEXTURE_2D, ne, Te, Oe[0].width, Oe[0].height);
        for (let H = 0, q = Oe.length; H < q; H++) fe = Oe[H], g.format !== Ot ? de !== null ? Pe ? C && t.compressedTexSubImage2D(i.TEXTURE_2D, H, 0, 0, fe.width, fe.height, de, fe.data) : t.compressedTexImage2D(i.TEXTURE_2D, H, Te, fe.width, fe.height, 0, fe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Pe ? C && t.texSubImage2D(i.TEXTURE_2D, H, 0, 0, fe.width, fe.height, de, Ee, fe.data) : t.texImage2D(i.TEXTURE_2D, H, Te, fe.width, fe.height, 0, de, Ee, fe.data);
      }
      else if (g.isDataArrayTexture) if (Pe) {
        if (Ze && t.texStorage3D(i.TEXTURE_2D_ARRAY, ne, Te, Q.width, Q.height, Q.depth), C) if (g.layerUpdates.size > 0) {
          const H = wa(Q.width, Q.height, g.format, g.type);
          for (const q of g.layerUpdates) {
            const le = Q.data.subarray(q * H / Q.data.BYTES_PER_ELEMENT, (q + 1) * H / Q.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, q, Q.width, Q.height, 1, de, Ee, le);
          }
          g.clearLayerUpdates();
        } else t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, Q.width, Q.height, Q.depth, de, Ee, Q.data);
      } else t.texImage3D(i.TEXTURE_2D_ARRAY, 0, Te, Q.width, Q.height, Q.depth, 0, de, Ee, Q.data);
      else if (g.isData3DTexture) Pe ? (Ze && t.texStorage3D(i.TEXTURE_3D, ne, Te, Q.width, Q.height, Q.depth), C && t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, Q.width, Q.height, Q.depth, de, Ee, Q.data)) : t.texImage3D(i.TEXTURE_3D, 0, Te, Q.width, Q.height, Q.depth, 0, de, Ee, Q.data);
      else if (g.isFramebufferTexture) {
        if (Ze) if (Pe) t.texStorage2D(i.TEXTURE_2D, ne, Te, Q.width, Q.height);
        else {
          let H = Q.width, q = Q.height;
          for (let le = 0; le < ne; le++) t.texImage2D(i.TEXTURE_2D, le, Te, H, q, 0, de, Ee, null), H >>= 1, q >>= 1;
        }
      } else if (Oe.length > 0) {
        if (Pe && Ze) {
          const H = _e(Oe[0]);
          t.texStorage2D(i.TEXTURE_2D, ne, Te, H.width, H.height);
        }
        for (let H = 0, q = Oe.length; H < q; H++) fe = Oe[H], Pe ? C && t.texSubImage2D(i.TEXTURE_2D, H, 0, 0, de, Ee, fe) : t.texImage2D(i.TEXTURE_2D, H, Te, de, Ee, fe);
        g.generateMipmaps = false;
      } else if (Pe) {
        if (Ze) {
          const H = _e(Q);
          t.texStorage2D(i.TEXTURE_2D, ne, Te, H.width, H.height);
        }
        C && t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, de, Ee, Q);
      } else t.texImage2D(i.TEXTURE_2D, 0, Te, de, Ee, Q);
      p(g) && h($), ge.__version = G.version, g.onUpdate && g.onUpdate(g);
    }
    E.__version = g.version;
  }
  function ee(E, g, N) {
    if (g.image.length !== 6) return;
    const $ = Ke(E, g), Z = g.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, E.__webglTexture, i.TEXTURE0 + N);
    const G = n.get(Z);
    if (Z.version !== G.__version || $ === true) {
      t.activeTexture(i.TEXTURE0 + N);
      const ge = Ve.getPrimaries(Ve.workingColorSpace), ae = g.colorSpace === dn ? null : Ve.getPrimaries(g.colorSpace), he = g.colorSpace === dn || ge === ae ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, he);
      const Be = g.isCompressedTexture || g.image[0].isCompressedTexture, Q = g.image[0] && g.image[0].isDataTexture, de = [];
      for (let q = 0; q < 6; q++) !Be && !Q ? de[q] = x(g.image[q], true, r.maxCubemapSize) : de[q] = Q ? g.image[q].image : g.image[q], de[q] = je(g, de[q]);
      const Ee = de[0], Te = s.convert(g.format, g.colorSpace), fe = s.convert(g.type), Oe = A(g.internalFormat, Te, fe, g.colorSpace), Pe = g.isVideoTexture !== true, Ze = G.__version === void 0 || $ === true, C = Z.dataReady;
      let ne = U(g, Ee);
      De(i.TEXTURE_CUBE_MAP, g);
      let H;
      if (Be) {
        Pe && Ze && t.texStorage2D(i.TEXTURE_CUBE_MAP, ne, Oe, Ee.width, Ee.height);
        for (let q = 0; q < 6; q++) {
          H = de[q].mipmaps;
          for (let le = 0; le < H.length; le++) {
            const oe = H[le];
            g.format !== Ot ? Te !== null ? Pe ? C && t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, le, 0, 0, oe.width, oe.height, Te, oe.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, le, Oe, oe.width, oe.height, 0, oe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Pe ? C && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, le, 0, 0, oe.width, oe.height, Te, fe, oe.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, le, Oe, oe.width, oe.height, 0, Te, fe, oe.data);
          }
        }
      } else {
        if (H = g.mipmaps, Pe && Ze) {
          H.length > 0 && ne++;
          const q = _e(de[0]);
          t.texStorage2D(i.TEXTURE_CUBE_MAP, ne, Oe, q.width, q.height);
        }
        for (let q = 0; q < 6; q++) if (Q) {
          Pe ? C && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, de[q].width, de[q].height, Te, fe, de[q].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, Oe, de[q].width, de[q].height, 0, Te, fe, de[q].data);
          for (let le = 0; le < H.length; le++) {
            const Re = H[le].image[q].image;
            Pe ? C && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, le + 1, 0, 0, Re.width, Re.height, Te, fe, Re.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, le + 1, Oe, Re.width, Re.height, 0, Te, fe, Re.data);
          }
        } else {
          Pe ? C && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, 0, 0, Te, fe, de[q]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, 0, Oe, Te, fe, de[q]);
          for (let le = 0; le < H.length; le++) {
            const oe = H[le];
            Pe ? C && t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, le + 1, 0, 0, Te, fe, oe.image[q]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + q, le + 1, Oe, Te, fe, oe.image[q]);
          }
        }
      }
      p(g) && h(i.TEXTURE_CUBE_MAP), G.__version = Z.version, g.onUpdate && g.onUpdate(g);
    }
    E.__version = g.version;
  }
  function me(E, g, N, $, Z, G) {
    const ge = s.convert(N.format, N.colorSpace), ae = s.convert(N.type), he = A(N.internalFormat, ge, ae, N.colorSpace), Be = n.get(g), Q = n.get(N);
    if (Q.__renderTarget = g, !Be.__hasExternalTextures) {
      const de = Math.max(1, g.width >> G), Ee = Math.max(1, g.height >> G);
      Z === i.TEXTURE_3D || Z === i.TEXTURE_2D_ARRAY ? t.texImage3D(Z, G, he, de, Ee, g.depth, 0, ge, ae, null) : t.texImage2D(Z, G, he, de, Ee, 0, ge, ae, null);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, E), Fe(g) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, $, Z, Q.__webglTexture, 0, Ne(g)) : (Z === i.TEXTURE_2D || Z >= i.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, $, Z, Q.__webglTexture, G), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function se(E, g, N) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, E), g.depthBuffer) {
      const $ = g.depthTexture, Z = $ && $.isDepthTexture ? $.type : null, G = y(g.stencilBuffer, Z), ge = g.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ae = Ne(g);
      Fe(g) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ae, G, g.width, g.height) : N ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ae, G, g.width, g.height) : i.renderbufferStorage(i.RENDERBUFFER, G, g.width, g.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, ge, i.RENDERBUFFER, E);
    } else {
      const $ = g.textures;
      for (let Z = 0; Z < $.length; Z++) {
        const G = $[Z], ge = s.convert(G.format, G.colorSpace), ae = s.convert(G.type), he = A(G.internalFormat, ge, ae, G.colorSpace), Be = Ne(g);
        N && Fe(g) === false ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Be, he, g.width, g.height) : Fe(g) ? o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Be, he, g.width, g.height) : i.renderbufferStorage(i.RENDERBUFFER, he, g.width, g.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ye(E, g) {
    if (g && g.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, E), !(g.depthTexture && g.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const $ = n.get(g.depthTexture);
    $.__renderTarget = g, (!$.__webglTexture || g.depthTexture.image.width !== g.width || g.depthTexture.image.height !== g.height) && (g.depthTexture.image.width = g.width, g.depthTexture.image.height = g.height, g.depthTexture.needsUpdate = true), K(g.depthTexture, 0);
    const Z = $.__webglTexture, G = Ne(g);
    if (g.depthTexture.format === Jn) Fe(g) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Z, 0, G) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, Z, 0);
    else if (g.depthTexture.format === ri) Fe(g) ? o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Z, 0, G) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, Z, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function Ge(E) {
    const g = n.get(E), N = E.isWebGLCubeRenderTarget === true;
    if (g.__boundDepthTexture !== E.depthTexture) {
      const $ = E.depthTexture;
      if (g.__depthDisposeCallback && g.__depthDisposeCallback(), $) {
        const Z = () => {
          delete g.__boundDepthTexture, delete g.__depthDisposeCallback, $.removeEventListener("dispose", Z);
        };
        $.addEventListener("dispose", Z), g.__depthDisposeCallback = Z;
      }
      g.__boundDepthTexture = $;
    }
    if (E.depthTexture && !g.__autoAllocateDepthBuffer) {
      if (N) throw new Error("target.depthTexture not supported in Cube render targets");
      ye(g.__webglFramebuffer, E);
    } else if (N) {
      g.__webglDepthbuffer = [];
      for (let $ = 0; $ < 6; $++) if (t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer[$]), g.__webglDepthbuffer[$] === void 0) g.__webglDepthbuffer[$] = i.createRenderbuffer(), se(g.__webglDepthbuffer[$], E, false);
      else {
        const Z = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, G = g.__webglDepthbuffer[$];
        i.bindRenderbuffer(i.RENDERBUFFER, G), i.framebufferRenderbuffer(i.FRAMEBUFFER, Z, i.RENDERBUFFER, G);
      }
    } else if (t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer), g.__webglDepthbuffer === void 0) g.__webglDepthbuffer = i.createRenderbuffer(), se(g.__webglDepthbuffer, E, false);
    else {
      const $ = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, Z = g.__webglDepthbuffer;
      i.bindRenderbuffer(i.RENDERBUFFER, Z), i.framebufferRenderbuffer(i.FRAMEBUFFER, $, i.RENDERBUFFER, Z);
    }
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Ae(E, g, N) {
    const $ = n.get(E);
    g !== void 0 && me($.__webglFramebuffer, E, E.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0), N !== void 0 && Ge(E);
  }
  function nt(E) {
    const g = E.texture, N = n.get(E), $ = n.get(g);
    E.addEventListener("dispose", w);
    const Z = E.textures, G = E.isWebGLCubeRenderTarget === true, ge = Z.length > 1;
    if (ge || ($.__webglTexture === void 0 && ($.__webglTexture = i.createTexture()), $.__version = g.version, a.memory.textures++), G) {
      N.__webglFramebuffer = [];
      for (let ae = 0; ae < 6; ae++) if (g.mipmaps && g.mipmaps.length > 0) {
        N.__webglFramebuffer[ae] = [];
        for (let he = 0; he < g.mipmaps.length; he++) N.__webglFramebuffer[ae][he] = i.createFramebuffer();
      } else N.__webglFramebuffer[ae] = i.createFramebuffer();
    } else {
      if (g.mipmaps && g.mipmaps.length > 0) {
        N.__webglFramebuffer = [];
        for (let ae = 0; ae < g.mipmaps.length; ae++) N.__webglFramebuffer[ae] = i.createFramebuffer();
      } else N.__webglFramebuffer = i.createFramebuffer();
      if (ge) for (let ae = 0, he = Z.length; ae < he; ae++) {
        const Be = n.get(Z[ae]);
        Be.__webglTexture === void 0 && (Be.__webglTexture = i.createTexture(), a.memory.textures++);
      }
      if (E.samples > 0 && Fe(E) === false) {
        N.__webglMultisampledFramebuffer = i.createFramebuffer(), N.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, N.__webglMultisampledFramebuffer);
        for (let ae = 0; ae < Z.length; ae++) {
          const he = Z[ae];
          N.__webglColorRenderbuffer[ae] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, N.__webglColorRenderbuffer[ae]);
          const Be = s.convert(he.format, he.colorSpace), Q = s.convert(he.type), de = A(he.internalFormat, Be, Q, he.colorSpace, E.isXRRenderTarget === true), Ee = Ne(E);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Ee, de, E.width, E.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ae, i.RENDERBUFFER, N.__webglColorRenderbuffer[ae]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), E.depthBuffer && (N.__webglDepthRenderbuffer = i.createRenderbuffer(), se(N.__webglDepthRenderbuffer, E, true)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (G) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, $.__webglTexture), De(i.TEXTURE_CUBE_MAP, g);
      for (let ae = 0; ae < 6; ae++) if (g.mipmaps && g.mipmaps.length > 0) for (let he = 0; he < g.mipmaps.length; he++) me(N.__webglFramebuffer[ae][he], E, g, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ae, he);
      else me(N.__webglFramebuffer[ae], E, g, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ae, 0);
      p(g) && h(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ge) {
      for (let ae = 0, he = Z.length; ae < he; ae++) {
        const Be = Z[ae], Q = n.get(Be);
        t.bindTexture(i.TEXTURE_2D, Q.__webglTexture), De(i.TEXTURE_2D, Be), me(N.__webglFramebuffer, E, Be, i.COLOR_ATTACHMENT0 + ae, i.TEXTURE_2D, 0), p(Be) && h(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ae = i.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (ae = E.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY), t.bindTexture(ae, $.__webglTexture), De(ae, g), g.mipmaps && g.mipmaps.length > 0) for (let he = 0; he < g.mipmaps.length; he++) me(N.__webglFramebuffer[he], E, g, i.COLOR_ATTACHMENT0, ae, he);
      else me(N.__webglFramebuffer, E, g, i.COLOR_ATTACHMENT0, ae, 0);
      p(g) && h(ae), t.unbindTexture();
    }
    E.depthBuffer && Ge(E);
  }
  function Qe(E) {
    const g = E.textures;
    for (let N = 0, $ = g.length; N < $; N++) {
      const Z = g[N];
      if (p(Z)) {
        const G = b(E), ge = n.get(Z).__webglTexture;
        t.bindTexture(G, ge), h(G), t.unbindTexture();
      }
    }
  }
  const Ie = [], T = [];
  function Tt(E) {
    if (E.samples > 0) {
      if (Fe(E) === false) {
        const g = E.textures, N = E.width, $ = E.height;
        let Z = i.COLOR_BUFFER_BIT;
        const G = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, ge = n.get(E), ae = g.length > 1;
        if (ae) for (let he = 0; he < g.length; he++) t.bindFramebuffer(i.FRAMEBUFFER, ge.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + he, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, ge.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + he, i.TEXTURE_2D, null, 0);
        t.bindFramebuffer(i.READ_FRAMEBUFFER, ge.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ge.__webglFramebuffer);
        for (let he = 0; he < g.length; he++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && (Z |= i.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (Z |= i.STENCIL_BUFFER_BIT)), ae) {
            i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, ge.__webglColorRenderbuffer[he]);
            const Be = n.get(g[he]).__webglTexture;
            i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Be, 0);
          }
          i.blitFramebuffer(0, 0, N, $, 0, 0, N, $, Z, i.NEAREST), l === true && (Ie.length = 0, T.length = 0, Ie.push(i.COLOR_ATTACHMENT0 + he), E.depthBuffer && E.resolveDepthBuffer === false && (Ie.push(G), T.push(G), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, T)), i.invalidateFramebuffer(i.READ_FRAMEBUFFER, Ie));
        }
        if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ae) for (let he = 0; he < g.length; he++) {
          t.bindFramebuffer(i.FRAMEBUFFER, ge.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + he, i.RENDERBUFFER, ge.__webglColorRenderbuffer[he]);
          const Be = n.get(g[he]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, ge.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + he, i.TEXTURE_2D, Be, 0);
        }
        t.bindFramebuffer(i.DRAW_FRAMEBUFFER, ge.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === false && l) {
        const g = E.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT;
        i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [g]);
      }
    }
  }
  function Ne(E) {
    return Math.min(r.maxSamples, E.samples);
  }
  function Fe(E) {
    const g = n.get(E);
    return E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && g.__useRenderToTexture !== false;
  }
  function xe(E) {
    const g = a.render.frame;
    u.get(E) !== g && (u.set(E, g), E.update());
  }
  function je(E, g) {
    const N = E.colorSpace, $ = E.format, Z = E.type;
    return E.isCompressedTexture === true || E.isVideoTexture === true || N !== si && N !== dn && (Ve.getTransfer(N) === qe ? ($ !== Ot || Z !== nn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)), g;
  }
  function _e(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (c.width = E.naturalWidth || E.width, c.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (c.width = E.displayWidth, c.height = E.displayHeight) : (c.width = E.width, c.height = E.height), c;
  }
  this.allocateTextureUnit = z, this.resetTextureUnits = k, this.setTexture2D = K, this.setTexture2DArray = X, this.setTexture3D = j, this.setTextureCube = V, this.rebindTextures = Ae, this.setupRenderTarget = nt, this.updateRenderTargetMipmap = Qe, this.updateMultisampleRenderTarget = Tt, this.setupDepthRenderbuffer = Ge, this.setupFrameBufferTexture = me, this.useMultisampledRTT = Fe;
}
function Xf(i, e) {
  function t(n, r = dn) {
    let s;
    const a = Ve.getTransfer(r);
    if (n === nn) return i.UNSIGNED_BYTE;
    if (n === Bs) return i.UNSIGNED_SHORT_4_4_4_4;
    if (n === zs) return i.UNSIGNED_SHORT_5_5_5_1;
    if (n === ro) return i.UNSIGNED_INT_5_9_9_9_REV;
    if (n === no) return i.BYTE;
    if (n === io) return i.SHORT;
    if (n === Mi) return i.UNSIGNED_SHORT;
    if (n === Os) return i.INT;
    if (n === Dn) return i.UNSIGNED_INT;
    if (n === Qt) return i.FLOAT;
    if (n === Ei) return i.HALF_FLOAT;
    if (n === so) return i.ALPHA;
    if (n === ao) return i.RGB;
    if (n === Ot) return i.RGBA;
    if (n === oo) return i.LUMINANCE;
    if (n === lo) return i.LUMINANCE_ALPHA;
    if (n === Jn) return i.DEPTH_COMPONENT;
    if (n === ri) return i.DEPTH_STENCIL;
    if (n === co) return i.RED;
    if (n === Hs) return i.RED_INTEGER;
    if (n === uo) return i.RG;
    if (n === Vs) return i.RG_INTEGER;
    if (n === Gs) return i.RGBA_INTEGER;
    if (n === Ji || n === Qi || n === er || n === tr) if (a === qe) if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
      if (n === Ji) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === Qi) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === er) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === tr) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
      if (n === Ji) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === Qi) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === er) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === tr) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === os || n === ls || n === cs || n === us) if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
      if (n === os) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === ls) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === cs) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === us) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === hs || n === ds || n === fs) if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
      if (n === hs || n === ds) return a === qe ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
      if (n === fs) return a === qe ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (n === ps || n === ms || n === gs || n === _s || n === vs || n === xs || n === Ms || n === Ss || n === Es || n === ys || n === As || n === Ts || n === bs || n === ws) if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
      if (n === ps) return a === qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === ms) return a === qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === gs) return a === qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === _s) return a === qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === vs) return a === qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === xs) return a === qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === Ms) return a === qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === Ss) return a === qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === Es) return a === qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === ys) return a === qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === As) return a === qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === Ts) return a === qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === bs) return a === qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === ws) return a === qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === nr || n === Rs || n === Cs) if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
      if (n === nr) return a === qe ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === Rs) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === Cs) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === ho || n === Ps || n === Ls || n === Ds) if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
      if (n === nr) return s.COMPRESSED_RED_RGTC1_EXT;
      if (n === Ps) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === Ls) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === Ds) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === ii ? i.UNSIGNED_INT_24_8 : i[n] !== void 0 ? i[n] : null;
  }
  return { convert: t };
}
const $f = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, qf = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Yf {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const r = new Mt(), s = e.properties.get(r);
      s.__webglTexture = t.texture, (t.depthNear !== n.depthNear || t.depthFar !== n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = r;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new gn({ vertexShader: $f, fragmentShader: qf, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new Gt(new hr(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Kf extends oi {
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, a = null, o = "local-floor", l = 1, c = null, u = null, f = null, d = null, m = null, v = null;
    const x = new Yf(), p = t.getContextAttributes();
    let h = null, b = null;
    const A = [], y = [], U = new Ye();
    let L = null;
    const w = new Pt();
    w.viewport = new it();
    const I = new Pt();
    I.viewport = new it();
    const S = [w, I], M = new mc();
    let R = null, k = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(W) {
      let ee = A[W];
      return ee === void 0 && (ee = new Br(), A[W] = ee), ee.getTargetRaySpace();
    }, this.getControllerGrip = function(W) {
      let ee = A[W];
      return ee === void 0 && (ee = new Br(), A[W] = ee), ee.getGripSpace();
    }, this.getHand = function(W) {
      let ee = A[W];
      return ee === void 0 && (ee = new Br(), A[W] = ee), ee.getHandSpace();
    };
    function z(W) {
      const ee = y.indexOf(W.inputSource);
      if (ee === -1) return;
      const me = A[ee];
      me !== void 0 && (me.update(W.inputSource, W.frame, c || a), me.dispatchEvent({ type: W.type, data: W.inputSource }));
    }
    function Y() {
      r.removeEventListener("select", z), r.removeEventListener("selectstart", z), r.removeEventListener("selectend", z), r.removeEventListener("squeeze", z), r.removeEventListener("squeezestart", z), r.removeEventListener("squeezeend", z), r.removeEventListener("end", Y), r.removeEventListener("inputsourceschange", K);
      for (let W = 0; W < A.length; W++) {
        const ee = y[W];
        ee !== null && (y[W] = null, A[W].disconnect(ee));
      }
      R = null, k = null, x.reset(), e.setRenderTarget(h), m = null, d = null, f = null, r = null, b = null, Ke.stop(), n.isPresenting = false, e.setPixelRatio(L), e.setSize(U.width, U.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(W) {
      s = W, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(W) {
      o = W, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(W) {
      c = W;
    }, this.getBaseLayer = function() {
      return d !== null ? d : m;
    }, this.getBinding = function() {
      return f;
    }, this.getFrame = function() {
      return v;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(W) {
      if (r = W, r !== null) {
        if (h = e.getRenderTarget(), r.addEventListener("select", z), r.addEventListener("selectstart", z), r.addEventListener("selectend", z), r.addEventListener("squeeze", z), r.addEventListener("squeezestart", z), r.addEventListener("squeezeend", z), r.addEventListener("end", Y), r.addEventListener("inputsourceschange", K), p.xrCompatible !== true && await t.makeXRCompatible(), L = e.getPixelRatio(), e.getSize(U), typeof XRWebGLBinding < "u" && "createProjectionLayer" in XRWebGLBinding.prototype) {
          let me = null, se = null, ye = null;
          p.depth && (ye = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, me = p.stencil ? ri : Jn, se = p.stencil ? ii : Dn);
          const Ge = { colorFormat: t.RGBA8, depthFormat: ye, scaleFactor: s };
          f = new XRWebGLBinding(r, t), d = f.createProjectionLayer(Ge), r.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, false), b = new Un(d.textureWidth, d.textureHeight, { format: Ot, type: nn, depthTexture: new Co(d.textureWidth, d.textureHeight, se, void 0, void 0, void 0, void 0, void 0, void 0, me), stencilBuffer: p.stencil, colorSpace: e.outputColorSpace, samples: p.antialias ? 4 : 0, resolveDepthBuffer: d.ignoreDepthValues === false });
        } else {
          const me = { antialias: p.antialias, alpha: true, depth: p.depth, stencil: p.stencil, framebufferScaleFactor: s };
          m = new XRWebGLLayer(r, t, me), r.updateRenderState({ baseLayer: m }), e.setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, false), b = new Un(m.framebufferWidth, m.framebufferHeight, { format: Ot, type: nn, colorSpace: e.outputColorSpace, stencilBuffer: p.stencil });
        }
        b.isXRRenderTarget = true, this.setFoveation(l), c = null, a = await r.requestReferenceSpace(o), Ke.setContext(r), Ke.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null) return r.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return x.getDepthTexture();
    };
    function K(W) {
      for (let ee = 0; ee < W.removed.length; ee++) {
        const me = W.removed[ee], se = y.indexOf(me);
        se >= 0 && (y[se] = null, A[se].disconnect(me));
      }
      for (let ee = 0; ee < W.added.length; ee++) {
        const me = W.added[ee];
        let se = y.indexOf(me);
        if (se === -1) {
          for (let Ge = 0; Ge < A.length; Ge++) if (Ge >= y.length) {
            y.push(me), se = Ge;
            break;
          } else if (y[Ge] === null) {
            y[Ge] = me, se = Ge;
            break;
          }
          if (se === -1) break;
        }
        const ye = A[se];
        ye && ye.connect(me);
      }
    }
    const X = new O(), j = new O();
    function V(W, ee, me) {
      X.setFromMatrixPosition(ee.matrixWorld), j.setFromMatrixPosition(me.matrixWorld);
      const se = X.distanceTo(j), ye = ee.projectionMatrix.elements, Ge = me.projectionMatrix.elements, Ae = ye[14] / (ye[10] - 1), nt = ye[14] / (ye[10] + 1), Qe = (ye[9] + 1) / ye[5], Ie = (ye[9] - 1) / ye[5], T = (ye[8] - 1) / ye[0], Tt = (Ge[8] + 1) / Ge[0], Ne = Ae * T, Fe = Ae * Tt, xe = se / (-T + Tt), je = xe * -T;
      if (ee.matrixWorld.decompose(W.position, W.quaternion, W.scale), W.translateX(je), W.translateZ(xe), W.matrixWorld.compose(W.position, W.quaternion, W.scale), W.matrixWorldInverse.copy(W.matrixWorld).invert(), ye[10] === -1) W.projectionMatrix.copy(ee.projectionMatrix), W.projectionMatrixInverse.copy(ee.projectionMatrixInverse);
      else {
        const _e = Ae + xe, E = nt + xe, g = Ne - je, N = Fe + (se - je), $ = Qe * nt / E * _e, Z = Ie * nt / E * _e;
        W.projectionMatrix.makePerspective(g, N, $, Z, _e, E), W.projectionMatrixInverse.copy(W.projectionMatrix).invert();
      }
    }
    function re(W, ee) {
      ee === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices(ee.matrixWorld, W.matrix), W.matrixWorldInverse.copy(W.matrixWorld).invert();
    }
    this.updateCamera = function(W) {
      if (r === null) return;
      let ee = W.near, me = W.far;
      x.texture !== null && (x.depthNear > 0 && (ee = x.depthNear), x.depthFar > 0 && (me = x.depthFar)), M.near = I.near = w.near = ee, M.far = I.far = w.far = me, (R !== M.near || k !== M.far) && (r.updateRenderState({ depthNear: M.near, depthFar: M.far }), R = M.near, k = M.far), w.layers.mask = W.layers.mask | 2, I.layers.mask = W.layers.mask | 4, M.layers.mask = w.layers.mask | I.layers.mask;
      const se = W.parent, ye = M.cameras;
      re(M, se);
      for (let Ge = 0; Ge < ye.length; Ge++) re(ye[Ge], se);
      ye.length === 2 ? V(M, w, I) : M.projectionMatrix.copy(w.projectionMatrix), ue(W, M, se);
    };
    function ue(W, ee, me) {
      me === null ? W.matrix.copy(ee.matrixWorld) : (W.matrix.copy(me.matrixWorld), W.matrix.invert(), W.matrix.multiply(ee.matrixWorld)), W.matrix.decompose(W.position, W.quaternion, W.scale), W.updateMatrixWorld(true), W.projectionMatrix.copy(ee.projectionMatrix), W.projectionMatrixInverse.copy(ee.projectionMatrixInverse), W.isPerspectiveCamera && (W.fov = Us * 2 * Math.atan(1 / W.projectionMatrix.elements[5]), W.zoom = 1);
    }
    this.getCamera = function() {
      return M;
    }, this.getFoveation = function() {
      if (!(d === null && m === null)) return l;
    }, this.setFoveation = function(W) {
      l = W, d !== null && (d.fixedFoveation = W), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = W);
    }, this.hasDepthSensing = function() {
      return x.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return x.getMesh(M);
    };
    let ve = null;
    function De(W, ee) {
      if (u = ee.getViewerPose(c || a), v = ee, u !== null) {
        const me = u.views;
        m !== null && (e.setRenderTargetFramebuffer(b, m.framebuffer), e.setRenderTarget(b));
        let se = false;
        me.length !== M.cameras.length && (M.cameras.length = 0, se = true);
        for (let Ae = 0; Ae < me.length; Ae++) {
          const nt = me[Ae];
          let Qe = null;
          if (m !== null) Qe = m.getViewport(nt);
          else {
            const T = f.getViewSubImage(d, nt);
            Qe = T.viewport, Ae === 0 && (e.setRenderTargetTextures(b, T.colorTexture, d.ignoreDepthValues ? void 0 : T.depthStencilTexture), e.setRenderTarget(b));
          }
          let Ie = S[Ae];
          Ie === void 0 && (Ie = new Pt(), Ie.layers.enable(Ae), Ie.viewport = new it(), S[Ae] = Ie), Ie.matrix.fromArray(nt.transform.matrix), Ie.matrix.decompose(Ie.position, Ie.quaternion, Ie.scale), Ie.projectionMatrix.fromArray(nt.projectionMatrix), Ie.projectionMatrixInverse.copy(Ie.projectionMatrix).invert(), Ie.viewport.set(Qe.x, Qe.y, Qe.width, Qe.height), Ae === 0 && (M.matrix.copy(Ie.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), se === true && M.cameras.push(Ie);
        }
        const ye = r.enabledFeatures;
        if (ye && ye.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && f) {
          const Ae = f.getDepthInformation(me[0]);
          Ae && Ae.isValid && Ae.texture && x.init(e, Ae, r.renderState);
        }
      }
      for (let me = 0; me < A.length; me++) {
        const se = y[me], ye = A[me];
        se !== null && ye !== void 0 && ye.update(se, ee, c || a);
      }
      ve && ve(W, ee), ee.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ee }), v = null;
    }
    const Ke = new Po();
    Ke.setAnimationLoop(De), this.setAnimationLoop = function(W) {
      ve = W;
    }, this.dispose = function() {
    };
  }
}
const Tn = new rn(), Zf = new rt();
function jf(i, e) {
  function t(p, h) {
    p.matrixAutoUpdate === true && p.updateMatrix(), h.value.copy(p.matrix);
  }
  function n(p, h) {
    h.color.getRGB(p.fogColor.value, Ao(i)), h.isFog ? (p.fogNear.value = h.near, p.fogFar.value = h.far) : h.isFogExp2 && (p.fogDensity.value = h.density);
  }
  function r(p, h, b, A, y) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? s(p, h) : h.isMeshToonMaterial ? (s(p, h), f(p, h)) : h.isMeshPhongMaterial ? (s(p, h), u(p, h)) : h.isMeshStandardMaterial ? (s(p, h), d(p, h), h.isMeshPhysicalMaterial && m(p, h, y)) : h.isMeshMatcapMaterial ? (s(p, h), v(p, h)) : h.isMeshDepthMaterial ? s(p, h) : h.isMeshDistanceMaterial ? (s(p, h), x(p, h)) : h.isMeshNormalMaterial ? s(p, h) : h.isLineBasicMaterial ? (a(p, h), h.isLineDashedMaterial && o(p, h)) : h.isPointsMaterial ? l(p, h, b, A) : h.isSpriteMaterial ? c(p, h) : h.isShadowMaterial ? (p.color.value.copy(h.color), p.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = false);
  }
  function s(p, h) {
    p.opacity.value = h.opacity, h.color && p.diffuse.value.copy(h.color), h.emissive && p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (p.map.value = h.map, t(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.bumpMap && (p.bumpMap.value = h.bumpMap, t(h.bumpMap, p.bumpMapTransform), p.bumpScale.value = h.bumpScale, h.side === xt && (p.bumpScale.value *= -1)), h.normalMap && (p.normalMap.value = h.normalMap, t(h.normalMap, p.normalMapTransform), p.normalScale.value.copy(h.normalScale), h.side === xt && p.normalScale.value.negate()), h.displacementMap && (p.displacementMap.value = h.displacementMap, t(h.displacementMap, p.displacementMapTransform), p.displacementScale.value = h.displacementScale, p.displacementBias.value = h.displacementBias), h.emissiveMap && (p.emissiveMap.value = h.emissiveMap, t(h.emissiveMap, p.emissiveMapTransform)), h.specularMap && (p.specularMap.value = h.specularMap, t(h.specularMap, p.specularMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
    const b = e.get(h), A = b.envMap, y = b.envMapRotation;
    A && (p.envMap.value = A, Tn.copy(y), Tn.x *= -1, Tn.y *= -1, Tn.z *= -1, A.isCubeTexture && A.isRenderTargetTexture === false && (Tn.y *= -1, Tn.z *= -1), p.envMapRotation.value.setFromMatrix4(Zf.makeRotationFromEuler(Tn)), p.flipEnvMap.value = A.isCubeTexture && A.isRenderTargetTexture === false ? -1 : 1, p.reflectivity.value = h.reflectivity, p.ior.value = h.ior, p.refractionRatio.value = h.refractionRatio), h.lightMap && (p.lightMap.value = h.lightMap, p.lightMapIntensity.value = h.lightMapIntensity, t(h.lightMap, p.lightMapTransform)), h.aoMap && (p.aoMap.value = h.aoMap, p.aoMapIntensity.value = h.aoMapIntensity, t(h.aoMap, p.aoMapTransform));
  }
  function a(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, h.map && (p.map.value = h.map, t(h.map, p.mapTransform));
  }
  function o(p, h) {
    p.dashSize.value = h.dashSize, p.totalSize.value = h.dashSize + h.gapSize, p.scale.value = h.scale;
  }
  function l(p, h, b, A) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.size.value = h.size * b, p.scale.value = A * 0.5, h.map && (p.map.value = h.map, t(h.map, p.uvTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function c(p, h) {
    p.diffuse.value.copy(h.color), p.opacity.value = h.opacity, p.rotation.value = h.rotation, h.map && (p.map.value = h.map, t(h.map, p.mapTransform)), h.alphaMap && (p.alphaMap.value = h.alphaMap, t(h.alphaMap, p.alphaMapTransform)), h.alphaTest > 0 && (p.alphaTest.value = h.alphaTest);
  }
  function u(p, h) {
    p.specular.value.copy(h.specular), p.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function f(p, h) {
    h.gradientMap && (p.gradientMap.value = h.gradientMap);
  }
  function d(p, h) {
    p.metalness.value = h.metalness, h.metalnessMap && (p.metalnessMap.value = h.metalnessMap, t(h.metalnessMap, p.metalnessMapTransform)), p.roughness.value = h.roughness, h.roughnessMap && (p.roughnessMap.value = h.roughnessMap, t(h.roughnessMap, p.roughnessMapTransform)), h.envMap && (p.envMapIntensity.value = h.envMapIntensity);
  }
  function m(p, h, b) {
    p.ior.value = h.ior, h.sheen > 0 && (p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), p.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (p.sheenColorMap.value = h.sheenColorMap, t(h.sheenColorMap, p.sheenColorMapTransform)), h.sheenRoughnessMap && (p.sheenRoughnessMap.value = h.sheenRoughnessMap, t(h.sheenRoughnessMap, p.sheenRoughnessMapTransform))), h.clearcoat > 0 && (p.clearcoat.value = h.clearcoat, p.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (p.clearcoatMap.value = h.clearcoatMap, t(h.clearcoatMap, p.clearcoatMapTransform)), h.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, t(h.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (p.clearcoatNormalMap.value = h.clearcoatNormalMap, t(h.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === xt && p.clearcoatNormalScale.value.negate())), h.dispersion > 0 && (p.dispersion.value = h.dispersion), h.iridescence > 0 && (p.iridescence.value = h.iridescence, p.iridescenceIOR.value = h.iridescenceIOR, p.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (p.iridescenceMap.value = h.iridescenceMap, t(h.iridescenceMap, p.iridescenceMapTransform)), h.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = h.iridescenceThicknessMap, t(h.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), h.transmission > 0 && (p.transmission.value = h.transmission, p.transmissionSamplerMap.value = b.texture, p.transmissionSamplerSize.value.set(b.width, b.height), h.transmissionMap && (p.transmissionMap.value = h.transmissionMap, t(h.transmissionMap, p.transmissionMapTransform)), p.thickness.value = h.thickness, h.thicknessMap && (p.thicknessMap.value = h.thicknessMap, t(h.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = h.attenuationDistance, p.attenuationColor.value.copy(h.attenuationColor)), h.anisotropy > 0 && (p.anisotropyVector.value.set(h.anisotropy * Math.cos(h.anisotropyRotation), h.anisotropy * Math.sin(h.anisotropyRotation)), h.anisotropyMap && (p.anisotropyMap.value = h.anisotropyMap, t(h.anisotropyMap, p.anisotropyMapTransform))), p.specularIntensity.value = h.specularIntensity, p.specularColor.value.copy(h.specularColor), h.specularColorMap && (p.specularColorMap.value = h.specularColorMap, t(h.specularColorMap, p.specularColorMapTransform)), h.specularIntensityMap && (p.specularIntensityMap.value = h.specularIntensityMap, t(h.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function v(p, h) {
    h.matcap && (p.matcap.value = h.matcap);
  }
  function x(p, h) {
    const b = e.get(h).light;
    p.referencePosition.value.setFromMatrixPosition(b.matrixWorld), p.nearDistance.value = b.shadow.camera.near, p.farDistance.value = b.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: r };
}
function Jf(i, e, t, n) {
  let r = {}, s = {}, a = [];
  const o = i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(b, A) {
    const y = A.program;
    n.uniformBlockBinding(b, y);
  }
  function c(b, A) {
    let y = r[b.id];
    y === void 0 && (v(b), y = u(b), r[b.id] = y, b.addEventListener("dispose", p));
    const U = A.program;
    n.updateUBOMapping(b, U);
    const L = e.render.frame;
    s[b.id] !== L && (d(b), s[b.id] = L);
  }
  function u(b) {
    const A = f();
    b.__bindingPointIndex = A;
    const y = i.createBuffer(), U = b.__size, L = b.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, y), i.bufferData(i.UNIFORM_BUFFER, U, L), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, A, y), y;
  }
  function f() {
    for (let b = 0; b < o; b++) if (a.indexOf(b) === -1) return a.push(b), b;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(b) {
    const A = r[b.id], y = b.uniforms, U = b.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, A);
    for (let L = 0, w = y.length; L < w; L++) {
      const I = Array.isArray(y[L]) ? y[L] : [y[L]];
      for (let S = 0, M = I.length; S < M; S++) {
        const R = I[S];
        if (m(R, L, S, U) === true) {
          const k = R.__offset, z = Array.isArray(R.value) ? R.value : [R.value];
          let Y = 0;
          for (let K = 0; K < z.length; K++) {
            const X = z[K], j = x(X);
            typeof X == "number" || typeof X == "boolean" ? (R.__data[0] = X, i.bufferSubData(i.UNIFORM_BUFFER, k + Y, R.__data)) : X.isMatrix3 ? (R.__data[0] = X.elements[0], R.__data[1] = X.elements[1], R.__data[2] = X.elements[2], R.__data[3] = 0, R.__data[4] = X.elements[3], R.__data[5] = X.elements[4], R.__data[6] = X.elements[5], R.__data[7] = 0, R.__data[8] = X.elements[6], R.__data[9] = X.elements[7], R.__data[10] = X.elements[8], R.__data[11] = 0) : (X.toArray(R.__data, Y), Y += j.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          i.bufferSubData(i.UNIFORM_BUFFER, k, R.__data);
        }
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(b, A, y, U) {
    const L = b.value, w = A + "_" + y;
    if (U[w] === void 0) return typeof L == "number" || typeof L == "boolean" ? U[w] = L : U[w] = L.clone(), true;
    {
      const I = U[w];
      if (typeof L == "number" || typeof L == "boolean") {
        if (I !== L) return U[w] = L, true;
      } else if (I.equals(L) === false) return I.copy(L), true;
    }
    return false;
  }
  function v(b) {
    const A = b.uniforms;
    let y = 0;
    const U = 16;
    for (let w = 0, I = A.length; w < I; w++) {
      const S = Array.isArray(A[w]) ? A[w] : [A[w]];
      for (let M = 0, R = S.length; M < R; M++) {
        const k = S[M], z = Array.isArray(k.value) ? k.value : [k.value];
        for (let Y = 0, K = z.length; Y < K; Y++) {
          const X = z[Y], j = x(X), V = y % U, re = V % j.boundary, ue = V + re;
          y += re, ue !== 0 && U - ue < j.storage && (y += U - ue), k.__data = new Float32Array(j.storage / Float32Array.BYTES_PER_ELEMENT), k.__offset = y, y += j.storage;
        }
      }
    }
    const L = y % U;
    return L > 0 && (y += U - L), b.__size = y, b.__cache = {}, this;
  }
  function x(b) {
    const A = { boundary: 0, storage: 0 };
    return typeof b == "number" || typeof b == "boolean" ? (A.boundary = 4, A.storage = 4) : b.isVector2 ? (A.boundary = 8, A.storage = 8) : b.isVector3 || b.isColor ? (A.boundary = 16, A.storage = 12) : b.isVector4 ? (A.boundary = 16, A.storage = 16) : b.isMatrix3 ? (A.boundary = 48, A.storage = 48) : b.isMatrix4 ? (A.boundary = 64, A.storage = 64) : b.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", b), A;
  }
  function p(b) {
    const A = b.target;
    A.removeEventListener("dispose", p);
    const y = a.indexOf(A.__bindingPointIndex);
    a.splice(y, 1), i.deleteBuffer(r[A.id]), delete r[A.id], delete s[A.id];
  }
  function h() {
    for (const b in r) i.deleteBuffer(r[b]);
    a = [], r = {}, s = {};
  }
  return { bind: l, update: c, dispose: h };
}
class Qf {
  constructor(e = {}) {
    const { canvas: t = Dl(), context: n = null, depth: r = true, stencil: s = false, alpha: a = false, antialias: o = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: u = "default", failIfMajorPerformanceCaveat: f = false, reverseDepthBuffer: d = false } = e;
    this.isWebGLRenderer = true;
    let m;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      m = n.getContextAttributes().alpha;
    } else m = a;
    const v = new Uint32Array(4), x = new Int32Array(4);
    let p = null, h = null;
    const b = [], A = [];
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = Ct, this.toneMapping = pn, this.toneMappingExposure = 1;
    const y = this;
    let U = false, L = 0, w = 0, I = null, S = -1, M = null;
    const R = new it(), k = new it();
    let z = null;
    const Y = new ke(0);
    let K = 0, X = t.width, j = t.height, V = 1, re = null, ue = null;
    const ve = new it(0, 0, X, j), De = new it(0, 0, X, j);
    let Ke = false;
    const W = new wo();
    let ee = false, me = false;
    this.transmissionResolutionScale = 1;
    const se = new rt(), ye = new rt(), Ge = new O(), Ae = new it(), nt = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let Qe = false;
    function Ie() {
      return I === null ? V : 1;
    }
    let T = n;
    function Tt(_, P) {
      return t.getContext(_, P);
    }
    try {
      const _ = { alpha: true, depth: r, stencil: s, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: u, failIfMajorPerformanceCaveat: f };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Fs}`), t.addEventListener("webglcontextlost", q, false), t.addEventListener("webglcontextrestored", le, false), t.addEventListener("webglcontextcreationerror", oe, false), T === null) {
        const P = "webgl2";
        if (T = Tt(P, _), T === null) throw Tt(P) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (_) {
      throw console.error("THREE.WebGLRenderer: " + _.message), _;
    }
    let Ne, Fe, xe, je, _e, E, g, N, $, Z, G, ge, ae, he, Be, Q, de, Ee, Te, fe, Oe, Pe, Ze, C;
    function ne() {
      Ne = new ld(T), Ne.init(), Pe = new Xf(T, Ne), Fe = new nd(T, Ne, e, Pe), xe = new kf(T, Ne), Fe.reverseDepthBuffer && d && xe.buffers.depth.setReversed(true), je = new hd(T), _e = new Pf(), E = new Wf(T, Ne, xe, _e, Fe, Pe, je), g = new rd(y), N = new od(y), $ = new vc(T), Ze = new ed(T, $), Z = new cd(T, $, je, Ze), G = new fd(T, Z, $, je), Te = new dd(T, Fe, E), Q = new id(_e), ge = new Cf(y, g, N, Ne, Fe, Ze, Q), ae = new jf(y, _e), he = new Df(), Be = new Bf(Ne), Ee = new Qh(y, g, N, xe, G, m, l), de = new Vf(y, G, Fe), C = new Jf(T, je, Fe, xe), fe = new td(T, Ne, je), Oe = new ud(T, Ne, je), je.programs = ge.programs, y.capabilities = Fe, y.extensions = Ne, y.properties = _e, y.renderLists = he, y.shadowMap = de, y.state = xe, y.info = je;
    }
    ne();
    const H = new Kf(y, T);
    this.xr = H, this.getContext = function() {
      return T;
    }, this.getContextAttributes = function() {
      return T.getContextAttributes();
    }, this.forceContextLoss = function() {
      const _ = Ne.get("WEBGL_lose_context");
      _ && _.loseContext();
    }, this.forceContextRestore = function() {
      const _ = Ne.get("WEBGL_lose_context");
      _ && _.restoreContext();
    }, this.getPixelRatio = function() {
      return V;
    }, this.setPixelRatio = function(_) {
      _ !== void 0 && (V = _, this.setSize(X, j, false));
    }, this.getSize = function(_) {
      return _.set(X, j);
    }, this.setSize = function(_, P, F = true) {
      if (H.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      X = _, j = P, t.width = Math.floor(_ * V), t.height = Math.floor(P * V), F === true && (t.style.width = _ + "px", t.style.height = P + "px"), this.setViewport(0, 0, _, P);
    }, this.getDrawingBufferSize = function(_) {
      return _.set(X * V, j * V).floor();
    }, this.setDrawingBufferSize = function(_, P, F) {
      X = _, j = P, V = F, t.width = Math.floor(_ * F), t.height = Math.floor(P * F), this.setViewport(0, 0, _, P);
    }, this.getCurrentViewport = function(_) {
      return _.copy(R);
    }, this.getViewport = function(_) {
      return _.copy(ve);
    }, this.setViewport = function(_, P, F, B) {
      _.isVector4 ? ve.set(_.x, _.y, _.z, _.w) : ve.set(_, P, F, B), xe.viewport(R.copy(ve).multiplyScalar(V).round());
    }, this.getScissor = function(_) {
      return _.copy(De);
    }, this.setScissor = function(_, P, F, B) {
      _.isVector4 ? De.set(_.x, _.y, _.z, _.w) : De.set(_, P, F, B), xe.scissor(k.copy(De).multiplyScalar(V).round());
    }, this.getScissorTest = function() {
      return Ke;
    }, this.setScissorTest = function(_) {
      xe.setScissorTest(Ke = _);
    }, this.setOpaqueSort = function(_) {
      re = _;
    }, this.setTransparentSort = function(_) {
      ue = _;
    }, this.getClearColor = function(_) {
      return _.copy(Ee.getClearColor());
    }, this.setClearColor = function() {
      Ee.setClearColor.apply(Ee, arguments);
    }, this.getClearAlpha = function() {
      return Ee.getClearAlpha();
    }, this.setClearAlpha = function() {
      Ee.setClearAlpha.apply(Ee, arguments);
    }, this.clear = function(_ = true, P = true, F = true) {
      let B = 0;
      if (_) {
        let D = false;
        if (I !== null) {
          const J = I.texture.format;
          D = J === Gs || J === Vs || J === Hs;
        }
        if (D) {
          const J = I.texture.type, ie = J === nn || J === Dn || J === Mi || J === ii || J === Bs || J === zs, ce = Ee.getClearColor(), pe = Ee.getClearAlpha(), be = ce.r, we = ce.g, Me = ce.b;
          ie ? (v[0] = be, v[1] = we, v[2] = Me, v[3] = pe, T.clearBufferuiv(T.COLOR, 0, v)) : (x[0] = be, x[1] = we, x[2] = Me, x[3] = pe, T.clearBufferiv(T.COLOR, 0, x));
        } else B |= T.COLOR_BUFFER_BIT;
      }
      P && (B |= T.DEPTH_BUFFER_BIT), F && (B |= T.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), T.clear(B);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", q, false), t.removeEventListener("webglcontextrestored", le, false), t.removeEventListener("webglcontextcreationerror", oe, false), Ee.dispose(), he.dispose(), Be.dispose(), _e.dispose(), g.dispose(), N.dispose(), G.dispose(), Ze.dispose(), C.dispose(), ge.dispose(), H.dispose(), H.removeEventListener("sessionstart", $s), H.removeEventListener("sessionend", qs), vn.stop();
    };
    function q(_) {
      _.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), U = true;
    }
    function le() {
      console.log("THREE.WebGLRenderer: Context Restored."), U = false;
      const _ = je.autoReset, P = de.enabled, F = de.autoUpdate, B = de.needsUpdate, D = de.type;
      ne(), je.autoReset = _, de.enabled = P, de.autoUpdate = F, de.needsUpdate = B, de.type = D;
    }
    function oe(_) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", _.statusMessage);
    }
    function Re(_) {
      const P = _.target;
      P.removeEventListener("dispose", Re), et(P);
    }
    function et(_) {
      ht(_), _e.remove(_);
    }
    function ht(_) {
      const P = _e.get(_).programs;
      P !== void 0 && (P.forEach(function(F) {
        ge.releaseProgram(F);
      }), _.isShaderMaterial && ge.releaseShaderCache(_));
    }
    this.renderBufferDirect = function(_, P, F, B, D, J) {
      P === null && (P = nt);
      const ie = D.isMesh && D.matrixWorld.determinant() < 0, ce = Bo(_, P, F, B, D);
      xe.setMaterial(B, ie);
      let pe = F.index, be = 1;
      if (B.wireframe === true) {
        if (pe = Z.getWireframeAttribute(F), pe === void 0) return;
        be = 2;
      }
      const we = F.drawRange, Me = F.attributes.position;
      let ze = we.start * be, We = (we.start + we.count) * be;
      J !== null && (ze = Math.max(ze, J.start * be), We = Math.min(We, (J.start + J.count) * be)), pe !== null ? (ze = Math.max(ze, 0), We = Math.min(We, pe.count)) : Me != null && (ze = Math.max(ze, 0), We = Math.min(We, Me.count));
      const st = We - ze;
      if (st < 0 || st === 1 / 0) return;
      Ze.setup(D, B, ce, F, pe);
      let tt, He = fe;
      if (pe !== null && (tt = $.get(pe), He = Oe, He.setIndex(tt)), D.isMesh) B.wireframe === true ? (xe.setLineWidth(B.wireframeLinewidth * Ie()), He.setMode(T.LINES)) : He.setMode(T.TRIANGLES);
      else if (D.isLine) {
        let Se = B.linewidth;
        Se === void 0 && (Se = 1), xe.setLineWidth(Se * Ie()), D.isLineSegments ? He.setMode(T.LINES) : D.isLineLoop ? He.setMode(T.LINE_LOOP) : He.setMode(T.LINE_STRIP);
      } else D.isPoints ? He.setMode(T.POINTS) : D.isSprite && He.setMode(T.TRIANGLES);
      if (D.isBatchedMesh) if (D._multiDrawInstances !== null) He.renderMultiDrawInstances(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount, D._multiDrawInstances);
      else if (Ne.get("WEBGL_multi_draw")) He.renderMultiDraw(D._multiDrawStarts, D._multiDrawCounts, D._multiDrawCount);
      else {
        const Se = D._multiDrawStarts, ut = D._multiDrawCounts, Xe = D._multiDrawCount, Dt = pe ? $.get(pe).bytesPerElement : 1, In = _e.get(B).currentProgram.getUniforms();
        for (let Et = 0; Et < Xe; Et++) In.setValue(T, "_gl_DrawID", Et), He.render(Se[Et] / Dt, ut[Et]);
      }
      else if (D.isInstancedMesh) He.renderInstances(ze, st, D.count);
      else if (F.isInstancedBufferGeometry) {
        const Se = F._maxInstanceCount !== void 0 ? F._maxInstanceCount : 1 / 0, ut = Math.min(F.instanceCount, Se);
        He.renderInstances(ze, st, ut);
      } else He.render(ze, st);
    };
    function $e(_, P, F) {
      _.transparent === true && _.side === Jt && _.forceSinglePass === false ? (_.side = xt, _.needsUpdate = true, wi(_, P, F), _.side = mn, _.needsUpdate = true, wi(_, P, F), _.side = Jt) : wi(_, P, F);
    }
    this.compile = function(_, P, F = null) {
      F === null && (F = _), h = Be.get(F), h.init(P), A.push(h), F.traverseVisible(function(D) {
        D.isLight && D.layers.test(P.layers) && (h.pushLight(D), D.castShadow && h.pushShadow(D));
      }), _ !== F && _.traverseVisible(function(D) {
        D.isLight && D.layers.test(P.layers) && (h.pushLight(D), D.castShadow && h.pushShadow(D));
      }), h.setupLights();
      const B = /* @__PURE__ */ new Set();
      return _.traverse(function(D) {
        if (!(D.isMesh || D.isPoints || D.isLine || D.isSprite)) return;
        const J = D.material;
        if (J) if (Array.isArray(J)) for (let ie = 0; ie < J.length; ie++) {
          const ce = J[ie];
          $e(ce, F, D), B.add(ce);
        }
        else $e(J, F, D), B.add(J);
      }), A.pop(), h = null, B;
    }, this.compileAsync = function(_, P, F = null) {
      const B = this.compile(_, P, F);
      return new Promise((D) => {
        function J() {
          if (B.forEach(function(ie) {
            _e.get(ie).currentProgram.isReady() && B.delete(ie);
          }), B.size === 0) {
            D(_);
            return;
          }
          setTimeout(J, 10);
        }
        Ne.get("KHR_parallel_shader_compile") !== null ? J() : setTimeout(J, 10);
      });
    };
    let Lt = null;
    function Xt(_) {
      Lt && Lt(_);
    }
    function $s() {
      vn.stop();
    }
    function qs() {
      vn.start();
    }
    const vn = new Po();
    vn.setAnimationLoop(Xt), typeof self < "u" && vn.setContext(self), this.setAnimationLoop = function(_) {
      Lt = _, H.setAnimationLoop(_), _ === null ? vn.stop() : vn.start();
    }, H.addEventListener("sessionstart", $s), H.addEventListener("sessionend", qs), this.render = function(_, P) {
      if (P !== void 0 && P.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (U === true) return;
      if (_.matrixWorldAutoUpdate === true && _.updateMatrixWorld(), P.parent === null && P.matrixWorldAutoUpdate === true && P.updateMatrixWorld(), H.enabled === true && H.isPresenting === true && (H.cameraAutoUpdate === true && H.updateCamera(P), P = H.getCamera()), _.isScene === true && _.onBeforeRender(y, _, P, I), h = Be.get(_, A.length), h.init(P), A.push(h), ye.multiplyMatrices(P.projectionMatrix, P.matrixWorldInverse), W.setFromProjectionMatrix(ye), me = this.localClippingEnabled, ee = Q.init(this.clippingPlanes, me), p = he.get(_, b.length), p.init(), b.push(p), H.enabled === true && H.isPresenting === true) {
        const J = y.xr.getDepthSensingMesh();
        J !== null && pr(J, P, -1 / 0, y.sortObjects);
      }
      pr(_, P, 0, y.sortObjects), p.finish(), y.sortObjects === true && p.sort(re, ue), Qe = H.enabled === false || H.isPresenting === false || H.hasDepthSensing() === false, Qe && Ee.addToRenderList(p, _), this.info.render.frame++, ee === true && Q.beginShadows();
      const F = h.state.shadowsArray;
      de.render(F, _, P), ee === true && Q.endShadows(), this.info.autoReset === true && this.info.reset();
      const B = p.opaque, D = p.transmissive;
      if (h.setupLights(), P.isArrayCamera) {
        const J = P.cameras;
        if (D.length > 0) for (let ie = 0, ce = J.length; ie < ce; ie++) {
          const pe = J[ie];
          Ks(B, D, _, pe);
        }
        Qe && Ee.render(_);
        for (let ie = 0, ce = J.length; ie < ce; ie++) {
          const pe = J[ie];
          Ys(p, _, pe, pe.viewport);
        }
      } else D.length > 0 && Ks(B, D, _, P), Qe && Ee.render(_), Ys(p, _, P);
      I !== null && w === 0 && (E.updateMultisampleRenderTarget(I), E.updateRenderTargetMipmap(I)), _.isScene === true && _.onAfterRender(y, _, P), Ze.resetDefaultState(), S = -1, M = null, A.pop(), A.length > 0 ? (h = A[A.length - 1], ee === true && Q.setGlobalState(y.clippingPlanes, h.state.camera)) : h = null, b.pop(), b.length > 0 ? p = b[b.length - 1] : p = null;
    };
    function pr(_, P, F, B) {
      if (_.visible === false) return;
      if (_.layers.test(P.layers)) {
        if (_.isGroup) F = _.renderOrder;
        else if (_.isLOD) _.autoUpdate === true && _.update(P);
        else if (_.isLight) h.pushLight(_), _.castShadow && h.pushShadow(_);
        else if (_.isSprite) {
          if (!_.frustumCulled || W.intersectsSprite(_)) {
            B && Ae.setFromMatrixPosition(_.matrixWorld).applyMatrix4(ye);
            const ie = G.update(_), ce = _.material;
            ce.visible && p.push(_, ie, ce, F, Ae.z, null);
          }
        } else if ((_.isMesh || _.isLine || _.isPoints) && (!_.frustumCulled || W.intersectsObject(_))) {
          const ie = G.update(_), ce = _.material;
          if (B && (_.boundingSphere !== void 0 ? (_.boundingSphere === null && _.computeBoundingSphere(), Ae.copy(_.boundingSphere.center)) : (ie.boundingSphere === null && ie.computeBoundingSphere(), Ae.copy(ie.boundingSphere.center)), Ae.applyMatrix4(_.matrixWorld).applyMatrix4(ye)), Array.isArray(ce)) {
            const pe = ie.groups;
            for (let be = 0, we = pe.length; be < we; be++) {
              const Me = pe[be], ze = ce[Me.materialIndex];
              ze && ze.visible && p.push(_, ie, ze, F, Ae.z, Me);
            }
          } else ce.visible && p.push(_, ie, ce, F, Ae.z, null);
        }
      }
      const J = _.children;
      for (let ie = 0, ce = J.length; ie < ce; ie++) pr(J[ie], P, F, B);
    }
    function Ys(_, P, F, B) {
      const D = _.opaque, J = _.transmissive, ie = _.transparent;
      h.setupLightsView(F), ee === true && Q.setGlobalState(y.clippingPlanes, F), B && xe.viewport(R.copy(B)), D.length > 0 && bi(D, P, F), J.length > 0 && bi(J, P, F), ie.length > 0 && bi(ie, P, F), xe.buffers.depth.setTest(true), xe.buffers.depth.setMask(true), xe.buffers.color.setMask(true), xe.setPolygonOffset(false);
    }
    function Ks(_, P, F, B) {
      if ((F.isScene === true ? F.overrideMaterial : null) !== null) return;
      h.state.transmissionRenderTarget[B.id] === void 0 && (h.state.transmissionRenderTarget[B.id] = new Un(1, 1, { generateMipmaps: true, type: Ne.has("EXT_color_buffer_half_float") || Ne.has("EXT_color_buffer_float") ? Ei : nn, minFilter: Ln, samples: 4, stencilBuffer: s, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Ve.workingColorSpace }));
      const J = h.state.transmissionRenderTarget[B.id], ie = B.viewport || R;
      J.setSize(ie.z * y.transmissionResolutionScale, ie.w * y.transmissionResolutionScale);
      const ce = y.getRenderTarget();
      y.setRenderTarget(J), y.getClearColor(Y), K = y.getClearAlpha(), K < 1 && y.setClearColor(16777215, 0.5), y.clear(), Qe && Ee.render(F);
      const pe = y.toneMapping;
      y.toneMapping = pn;
      const be = B.viewport;
      if (B.viewport !== void 0 && (B.viewport = void 0), h.setupLightsView(B), ee === true && Q.setGlobalState(y.clippingPlanes, B), bi(_, F, B), E.updateMultisampleRenderTarget(J), E.updateRenderTargetMipmap(J), Ne.has("WEBGL_multisampled_render_to_texture") === false) {
        let we = false;
        for (let Me = 0, ze = P.length; Me < ze; Me++) {
          const We = P[Me], st = We.object, tt = We.geometry, He = We.material, Se = We.group;
          if (He.side === Jt && st.layers.test(B.layers)) {
            const ut = He.side;
            He.side = xt, He.needsUpdate = true, Zs(st, F, B, tt, He, Se), He.side = ut, He.needsUpdate = true, we = true;
          }
        }
        we === true && (E.updateMultisampleRenderTarget(J), E.updateRenderTargetMipmap(J));
      }
      y.setRenderTarget(ce), y.setClearColor(Y, K), be !== void 0 && (B.viewport = be), y.toneMapping = pe;
    }
    function bi(_, P, F) {
      const B = P.isScene === true ? P.overrideMaterial : null;
      for (let D = 0, J = _.length; D < J; D++) {
        const ie = _[D], ce = ie.object, pe = ie.geometry, be = B === null ? ie.material : B, we = ie.group;
        ce.layers.test(F.layers) && Zs(ce, P, F, pe, be, we);
      }
    }
    function Zs(_, P, F, B, D, J) {
      _.onBeforeRender(y, P, F, B, D, J), _.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse, _.matrixWorld), _.normalMatrix.getNormalMatrix(_.modelViewMatrix), D.onBeforeRender(y, P, F, B, _, J), D.transparent === true && D.side === Jt && D.forceSinglePass === false ? (D.side = xt, D.needsUpdate = true, y.renderBufferDirect(F, P, B, D, _, J), D.side = mn, D.needsUpdate = true, y.renderBufferDirect(F, P, B, D, _, J), D.side = Jt) : y.renderBufferDirect(F, P, B, D, _, J), _.onAfterRender(y, P, F, B, D, J);
    }
    function wi(_, P, F) {
      P.isScene !== true && (P = nt);
      const B = _e.get(_), D = h.state.lights, J = h.state.shadowsArray, ie = D.state.version, ce = ge.getParameters(_, D.state, J, P, F), pe = ge.getProgramCacheKey(ce);
      let be = B.programs;
      B.environment = _.isMeshStandardMaterial ? P.environment : null, B.fog = P.fog, B.envMap = (_.isMeshStandardMaterial ? N : g).get(_.envMap || B.environment), B.envMapRotation = B.environment !== null && _.envMap === null ? P.environmentRotation : _.envMapRotation, be === void 0 && (_.addEventListener("dispose", Re), be = /* @__PURE__ */ new Map(), B.programs = be);
      let we = be.get(pe);
      if (we !== void 0) {
        if (B.currentProgram === we && B.lightsStateVersion === ie) return Js(_, ce), we;
      } else ce.uniforms = ge.getUniforms(_), _.onBeforeCompile(ce, y), we = ge.acquireProgram(ce, pe), be.set(pe, we), B.uniforms = ce.uniforms;
      const Me = B.uniforms;
      return (!_.isShaderMaterial && !_.isRawShaderMaterial || _.clipping === true) && (Me.clippingPlanes = Q.uniform), Js(_, ce), B.needsLights = Ho(_), B.lightsStateVersion = ie, B.needsLights && (Me.ambientLightColor.value = D.state.ambient, Me.lightProbe.value = D.state.probe, Me.directionalLights.value = D.state.directional, Me.directionalLightShadows.value = D.state.directionalShadow, Me.spotLights.value = D.state.spot, Me.spotLightShadows.value = D.state.spotShadow, Me.rectAreaLights.value = D.state.rectArea, Me.ltc_1.value = D.state.rectAreaLTC1, Me.ltc_2.value = D.state.rectAreaLTC2, Me.pointLights.value = D.state.point, Me.pointLightShadows.value = D.state.pointShadow, Me.hemisphereLights.value = D.state.hemi, Me.directionalShadowMap.value = D.state.directionalShadowMap, Me.directionalShadowMatrix.value = D.state.directionalShadowMatrix, Me.spotShadowMap.value = D.state.spotShadowMap, Me.spotLightMatrix.value = D.state.spotLightMatrix, Me.spotLightMap.value = D.state.spotLightMap, Me.pointShadowMap.value = D.state.pointShadowMap, Me.pointShadowMatrix.value = D.state.pointShadowMatrix), B.currentProgram = we, B.uniformsList = null, we;
    }
    function js(_) {
      if (_.uniformsList === null) {
        const P = _.currentProgram.getUniforms();
        _.uniformsList = ir.seqWithValue(P.seq, _.uniforms);
      }
      return _.uniformsList;
    }
    function Js(_, P) {
      const F = _e.get(_);
      F.outputColorSpace = P.outputColorSpace, F.batching = P.batching, F.batchingColor = P.batchingColor, F.instancing = P.instancing, F.instancingColor = P.instancingColor, F.instancingMorph = P.instancingMorph, F.skinning = P.skinning, F.morphTargets = P.morphTargets, F.morphNormals = P.morphNormals, F.morphColors = P.morphColors, F.morphTargetsCount = P.morphTargetsCount, F.numClippingPlanes = P.numClippingPlanes, F.numIntersection = P.numClipIntersection, F.vertexAlphas = P.vertexAlphas, F.vertexTangents = P.vertexTangents, F.toneMapping = P.toneMapping;
    }
    function Bo(_, P, F, B, D) {
      P.isScene !== true && (P = nt), E.resetTextureUnits();
      const J = P.fog, ie = B.isMeshStandardMaterial ? P.environment : null, ce = I === null ? y.outputColorSpace : I.isXRRenderTarget === true ? I.texture.colorSpace : si, pe = (B.isMeshStandardMaterial ? N : g).get(B.envMap || ie), be = B.vertexColors === true && !!F.attributes.color && F.attributes.color.itemSize === 4, we = !!F.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), Me = !!F.morphAttributes.position, ze = !!F.morphAttributes.normal, We = !!F.morphAttributes.color;
      let st = pn;
      B.toneMapped && (I === null || I.isXRRenderTarget === true) && (st = y.toneMapping);
      const tt = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color, He = tt !== void 0 ? tt.length : 0, Se = _e.get(B), ut = h.state.lights;
      if (ee === true && (me === true || _ !== M)) {
        const pt = _ === M && B.id === S;
        Q.setState(B, _, pt);
      }
      let Xe = false;
      B.version === Se.__version ? (Se.needsLights && Se.lightsStateVersion !== ut.state.version || Se.outputColorSpace !== ce || D.isBatchedMesh && Se.batching === false || !D.isBatchedMesh && Se.batching === true || D.isBatchedMesh && Se.batchingColor === true && D.colorTexture === null || D.isBatchedMesh && Se.batchingColor === false && D.colorTexture !== null || D.isInstancedMesh && Se.instancing === false || !D.isInstancedMesh && Se.instancing === true || D.isSkinnedMesh && Se.skinning === false || !D.isSkinnedMesh && Se.skinning === true || D.isInstancedMesh && Se.instancingColor === true && D.instanceColor === null || D.isInstancedMesh && Se.instancingColor === false && D.instanceColor !== null || D.isInstancedMesh && Se.instancingMorph === true && D.morphTexture === null || D.isInstancedMesh && Se.instancingMorph === false && D.morphTexture !== null || Se.envMap !== pe || B.fog === true && Se.fog !== J || Se.numClippingPlanes !== void 0 && (Se.numClippingPlanes !== Q.numPlanes || Se.numIntersection !== Q.numIntersection) || Se.vertexAlphas !== be || Se.vertexTangents !== we || Se.morphTargets !== Me || Se.morphNormals !== ze || Se.morphColors !== We || Se.toneMapping !== st || Se.morphTargetsCount !== He) && (Xe = true) : (Xe = true, Se.__version = B.version);
      let Dt = Se.currentProgram;
      Xe === true && (Dt = wi(B, P, D));
      let In = false, Et = false, hi = false;
      const Je = Dt.getUniforms(), bt = Se.uniforms;
      if (xe.useProgram(Dt.program) && (In = true, Et = true, hi = true), B.id !== S && (S = B.id, Et = true), In || M !== _) {
        xe.buffers.depth.getReversed() ? (se.copy(_.projectionMatrix), Il(se), Nl(se), Je.setValue(T, "projectionMatrix", se)) : Je.setValue(T, "projectionMatrix", _.projectionMatrix), Je.setValue(T, "viewMatrix", _.matrixWorldInverse);
        const _t = Je.map.cameraPosition;
        _t !== void 0 && _t.setValue(T, Ge.setFromMatrixPosition(_.matrixWorld)), Fe.logarithmicDepthBuffer && Je.setValue(T, "logDepthBufFC", 2 / (Math.log(_.far + 1) / Math.LN2)), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && Je.setValue(T, "isOrthographic", _.isOrthographicCamera === true), M !== _ && (M = _, Et = true, hi = true);
      }
      if (D.isSkinnedMesh) {
        Je.setOptional(T, D, "bindMatrix"), Je.setOptional(T, D, "bindMatrixInverse");
        const pt = D.skeleton;
        pt && (pt.boneTexture === null && pt.computeBoneTexture(), Je.setValue(T, "boneTexture", pt.boneTexture, E));
      }
      D.isBatchedMesh && (Je.setOptional(T, D, "batchingTexture"), Je.setValue(T, "batchingTexture", D._matricesTexture, E), Je.setOptional(T, D, "batchingIdTexture"), Je.setValue(T, "batchingIdTexture", D._indirectTexture, E), Je.setOptional(T, D, "batchingColorTexture"), D._colorsTexture !== null && Je.setValue(T, "batchingColorTexture", D._colorsTexture, E));
      const wt = F.morphAttributes;
      if ((wt.position !== void 0 || wt.normal !== void 0 || wt.color !== void 0) && Te.update(D, F, Dt), (Et || Se.receiveShadow !== D.receiveShadow) && (Se.receiveShadow = D.receiveShadow, Je.setValue(T, "receiveShadow", D.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (bt.envMap.value = pe, bt.flipEnvMap.value = pe.isCubeTexture && pe.isRenderTargetTexture === false ? -1 : 1), B.isMeshStandardMaterial && B.envMap === null && P.environment !== null && (bt.envMapIntensity.value = P.environmentIntensity), Et && (Je.setValue(T, "toneMappingExposure", y.toneMappingExposure), Se.needsLights && zo(bt, hi), J && B.fog === true && ae.refreshFogUniforms(bt, J), ae.refreshMaterialUniforms(bt, B, V, j, h.state.transmissionRenderTarget[_.id]), ir.upload(T, js(Se), bt, E)), B.isShaderMaterial && B.uniformsNeedUpdate === true && (ir.upload(T, js(Se), bt, E), B.uniformsNeedUpdate = false), B.isSpriteMaterial && Je.setValue(T, "center", D.center), Je.setValue(T, "modelViewMatrix", D.modelViewMatrix), Je.setValue(T, "normalMatrix", D.normalMatrix), Je.setValue(T, "modelMatrix", D.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) {
        const pt = B.uniformsGroups;
        for (let _t = 0, mr = pt.length; _t < mr; _t++) {
          const xn = pt[_t];
          C.update(xn, Dt), C.bind(xn, Dt);
        }
      }
      return Dt;
    }
    function zo(_, P) {
      _.ambientLightColor.needsUpdate = P, _.lightProbe.needsUpdate = P, _.directionalLights.needsUpdate = P, _.directionalLightShadows.needsUpdate = P, _.pointLights.needsUpdate = P, _.pointLightShadows.needsUpdate = P, _.spotLights.needsUpdate = P, _.spotLightShadows.needsUpdate = P, _.rectAreaLights.needsUpdate = P, _.hemisphereLights.needsUpdate = P;
    }
    function Ho(_) {
      return _.isMeshLambertMaterial || _.isMeshToonMaterial || _.isMeshPhongMaterial || _.isMeshStandardMaterial || _.isShadowMaterial || _.isShaderMaterial && _.lights === true;
    }
    this.getActiveCubeFace = function() {
      return L;
    }, this.getActiveMipmapLevel = function() {
      return w;
    }, this.getRenderTarget = function() {
      return I;
    }, this.setRenderTargetTextures = function(_, P, F) {
      _e.get(_.texture).__webglTexture = P, _e.get(_.depthTexture).__webglTexture = F;
      const B = _e.get(_);
      B.__hasExternalTextures = true, B.__autoAllocateDepthBuffer = F === void 0, B.__autoAllocateDepthBuffer || Ne.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), B.__useRenderToTexture = false);
    }, this.setRenderTargetFramebuffer = function(_, P) {
      const F = _e.get(_);
      F.__webglFramebuffer = P, F.__useDefaultFramebuffer = P === void 0;
    };
    const Vo = T.createFramebuffer();
    this.setRenderTarget = function(_, P = 0, F = 0) {
      I = _, L = P, w = F;
      let B = true, D = null, J = false, ie = false;
      if (_) {
        const pe = _e.get(_);
        if (pe.__useDefaultFramebuffer !== void 0) xe.bindFramebuffer(T.FRAMEBUFFER, null), B = false;
        else if (pe.__webglFramebuffer === void 0) E.setupRenderTarget(_);
        else if (pe.__hasExternalTextures) E.rebindTextures(_, _e.get(_.texture).__webglTexture, _e.get(_.depthTexture).__webglTexture);
        else if (_.depthBuffer) {
          const Me = _.depthTexture;
          if (pe.__boundDepthTexture !== Me) {
            if (Me !== null && _e.has(Me) && (_.width !== Me.image.width || _.height !== Me.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            E.setupDepthRenderbuffer(_);
          }
        }
        const be = _.texture;
        (be.isData3DTexture || be.isDataArrayTexture || be.isCompressedArrayTexture) && (ie = true);
        const we = _e.get(_).__webglFramebuffer;
        _.isWebGLCubeRenderTarget ? (Array.isArray(we[P]) ? D = we[P][F] : D = we[P], J = true) : _.samples > 0 && E.useMultisampledRTT(_) === false ? D = _e.get(_).__webglMultisampledFramebuffer : Array.isArray(we) ? D = we[F] : D = we, R.copy(_.viewport), k.copy(_.scissor), z = _.scissorTest;
      } else R.copy(ve).multiplyScalar(V).floor(), k.copy(De).multiplyScalar(V).floor(), z = Ke;
      if (F !== 0 && (D = Vo), xe.bindFramebuffer(T.FRAMEBUFFER, D) && B && xe.drawBuffers(_, D), xe.viewport(R), xe.scissor(k), xe.setScissorTest(z), J) {
        const pe = _e.get(_.texture);
        T.framebufferTexture2D(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_CUBE_MAP_POSITIVE_X + P, pe.__webglTexture, F);
      } else if (ie) {
        const pe = _e.get(_.texture), be = P;
        T.framebufferTextureLayer(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, pe.__webglTexture, F, be);
      } else if (_ !== null && F !== 0) {
        const pe = _e.get(_.texture);
        T.framebufferTexture2D(T.FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_2D, pe.__webglTexture, F);
      }
      S = -1;
    }, this.readRenderTargetPixels = function(_, P, F, B, D, J, ie) {
      if (!(_ && _.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ce = _e.get(_).__webglFramebuffer;
      if (_.isWebGLCubeRenderTarget && ie !== void 0 && (ce = ce[ie]), ce) {
        xe.bindFramebuffer(T.FRAMEBUFFER, ce);
        try {
          const pe = _.texture, be = pe.format, we = pe.type;
          if (!Fe.textureFormatReadable(be)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!Fe.textureTypeReadable(we)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          P >= 0 && P <= _.width - B && F >= 0 && F <= _.height - D && T.readPixels(P, F, B, D, Pe.convert(be), Pe.convert(we), J);
        } finally {
          const pe = I !== null ? _e.get(I).__webglFramebuffer : null;
          xe.bindFramebuffer(T.FRAMEBUFFER, pe);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(_, P, F, B, D, J, ie) {
      if (!(_ && _.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ce = _e.get(_).__webglFramebuffer;
      if (_.isWebGLCubeRenderTarget && ie !== void 0 && (ce = ce[ie]), ce) {
        const pe = _.texture, be = pe.format, we = pe.type;
        if (!Fe.textureFormatReadable(be)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!Fe.textureTypeReadable(we)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (P >= 0 && P <= _.width - B && F >= 0 && F <= _.height - D) {
          xe.bindFramebuffer(T.FRAMEBUFFER, ce);
          const Me = T.createBuffer();
          T.bindBuffer(T.PIXEL_PACK_BUFFER, Me), T.bufferData(T.PIXEL_PACK_BUFFER, J.byteLength, T.STREAM_READ), T.readPixels(P, F, B, D, Pe.convert(be), Pe.convert(we), 0);
          const ze = I !== null ? _e.get(I).__webglFramebuffer : null;
          xe.bindFramebuffer(T.FRAMEBUFFER, ze);
          const We = T.fenceSync(T.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return T.flush(), await Ul(T, We, 4), T.bindBuffer(T.PIXEL_PACK_BUFFER, Me), T.getBufferSubData(T.PIXEL_PACK_BUFFER, 0, J), T.deleteBuffer(Me), T.deleteSync(We), J;
        } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(_, P = null, F = 0) {
      _.isTexture !== true && (Kn("WebGLRenderer: copyFramebufferToTexture function signature has changed."), P = arguments[0] || null, _ = arguments[1]);
      const B = Math.pow(2, -F), D = Math.floor(_.image.width * B), J = Math.floor(_.image.height * B), ie = P !== null ? P.x : 0, ce = P !== null ? P.y : 0;
      E.setTexture2D(_, 0), T.copyTexSubImage2D(T.TEXTURE_2D, F, 0, 0, ie, ce, D, J), xe.unbindTexture();
    };
    const Go = T.createFramebuffer(), ko = T.createFramebuffer();
    this.copyTextureToTexture = function(_, P, F = null, B = null, D = 0, J = null) {
      _.isTexture !== true && (Kn("WebGLRenderer: copyTextureToTexture function signature has changed."), B = arguments[0] || null, _ = arguments[1], P = arguments[2], J = arguments[3] || 0, F = null), J === null && (D !== 0 ? (Kn("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), J = D, D = 0) : J = 0);
      let ie, ce, pe, be, we, Me, ze, We, st;
      const tt = _.isCompressedTexture ? _.mipmaps[J] : _.image;
      if (F !== null) ie = F.max.x - F.min.x, ce = F.max.y - F.min.y, pe = F.isBox3 ? F.max.z - F.min.z : 1, be = F.min.x, we = F.min.y, Me = F.isBox3 ? F.min.z : 0;
      else {
        const wt = Math.pow(2, -D);
        ie = Math.floor(tt.width * wt), ce = Math.floor(tt.height * wt), _.isDataArrayTexture ? pe = tt.depth : _.isData3DTexture ? pe = Math.floor(tt.depth * wt) : pe = 1, be = 0, we = 0, Me = 0;
      }
      B !== null ? (ze = B.x, We = B.y, st = B.z) : (ze = 0, We = 0, st = 0);
      const He = Pe.convert(P.format), Se = Pe.convert(P.type);
      let ut;
      P.isData3DTexture ? (E.setTexture3D(P, 0), ut = T.TEXTURE_3D) : P.isDataArrayTexture || P.isCompressedArrayTexture ? (E.setTexture2DArray(P, 0), ut = T.TEXTURE_2D_ARRAY) : (E.setTexture2D(P, 0), ut = T.TEXTURE_2D), T.pixelStorei(T.UNPACK_FLIP_Y_WEBGL, P.flipY), T.pixelStorei(T.UNPACK_PREMULTIPLY_ALPHA_WEBGL, P.premultiplyAlpha), T.pixelStorei(T.UNPACK_ALIGNMENT, P.unpackAlignment);
      const Xe = T.getParameter(T.UNPACK_ROW_LENGTH), Dt = T.getParameter(T.UNPACK_IMAGE_HEIGHT), In = T.getParameter(T.UNPACK_SKIP_PIXELS), Et = T.getParameter(T.UNPACK_SKIP_ROWS), hi = T.getParameter(T.UNPACK_SKIP_IMAGES);
      T.pixelStorei(T.UNPACK_ROW_LENGTH, tt.width), T.pixelStorei(T.UNPACK_IMAGE_HEIGHT, tt.height), T.pixelStorei(T.UNPACK_SKIP_PIXELS, be), T.pixelStorei(T.UNPACK_SKIP_ROWS, we), T.pixelStorei(T.UNPACK_SKIP_IMAGES, Me);
      const Je = _.isDataArrayTexture || _.isData3DTexture, bt = P.isDataArrayTexture || P.isData3DTexture;
      if (_.isDepthTexture) {
        const wt = _e.get(_), pt = _e.get(P), _t = _e.get(wt.__renderTarget), mr = _e.get(pt.__renderTarget);
        xe.bindFramebuffer(T.READ_FRAMEBUFFER, _t.__webglFramebuffer), xe.bindFramebuffer(T.DRAW_FRAMEBUFFER, mr.__webglFramebuffer);
        for (let xn = 0; xn < pe; xn++) Je && (T.framebufferTextureLayer(T.READ_FRAMEBUFFER, T.COLOR_ATTACHMENT0, _e.get(_).__webglTexture, D, Me + xn), T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER, T.COLOR_ATTACHMENT0, _e.get(P).__webglTexture, J, st + xn)), T.blitFramebuffer(be, we, ie, ce, ze, We, ie, ce, T.DEPTH_BUFFER_BIT, T.NEAREST);
        xe.bindFramebuffer(T.READ_FRAMEBUFFER, null), xe.bindFramebuffer(T.DRAW_FRAMEBUFFER, null);
      } else if (D !== 0 || _.isRenderTargetTexture || _e.has(_)) {
        const wt = _e.get(_), pt = _e.get(P);
        xe.bindFramebuffer(T.READ_FRAMEBUFFER, Go), xe.bindFramebuffer(T.DRAW_FRAMEBUFFER, ko);
        for (let _t = 0; _t < pe; _t++) Je ? T.framebufferTextureLayer(T.READ_FRAMEBUFFER, T.COLOR_ATTACHMENT0, wt.__webglTexture, D, Me + _t) : T.framebufferTexture2D(T.READ_FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_2D, wt.__webglTexture, D), bt ? T.framebufferTextureLayer(T.DRAW_FRAMEBUFFER, T.COLOR_ATTACHMENT0, pt.__webglTexture, J, st + _t) : T.framebufferTexture2D(T.DRAW_FRAMEBUFFER, T.COLOR_ATTACHMENT0, T.TEXTURE_2D, pt.__webglTexture, J), D !== 0 ? T.blitFramebuffer(be, we, ie, ce, ze, We, ie, ce, T.COLOR_BUFFER_BIT, T.NEAREST) : bt ? T.copyTexSubImage3D(ut, J, ze, We, st + _t, be, we, ie, ce) : T.copyTexSubImage2D(ut, J, ze, We, be, we, ie, ce);
        xe.bindFramebuffer(T.READ_FRAMEBUFFER, null), xe.bindFramebuffer(T.DRAW_FRAMEBUFFER, null);
      } else bt ? _.isDataTexture || _.isData3DTexture ? T.texSubImage3D(ut, J, ze, We, st, ie, ce, pe, He, Se, tt.data) : P.isCompressedArrayTexture ? T.compressedTexSubImage3D(ut, J, ze, We, st, ie, ce, pe, He, tt.data) : T.texSubImage3D(ut, J, ze, We, st, ie, ce, pe, He, Se, tt) : _.isDataTexture ? T.texSubImage2D(T.TEXTURE_2D, J, ze, We, ie, ce, He, Se, tt.data) : _.isCompressedTexture ? T.compressedTexSubImage2D(T.TEXTURE_2D, J, ze, We, tt.width, tt.height, He, tt.data) : T.texSubImage2D(T.TEXTURE_2D, J, ze, We, ie, ce, He, Se, tt);
      T.pixelStorei(T.UNPACK_ROW_LENGTH, Xe), T.pixelStorei(T.UNPACK_IMAGE_HEIGHT, Dt), T.pixelStorei(T.UNPACK_SKIP_PIXELS, In), T.pixelStorei(T.UNPACK_SKIP_ROWS, Et), T.pixelStorei(T.UNPACK_SKIP_IMAGES, hi), J === 0 && P.generateMipmaps && T.generateMipmap(ut), xe.unbindTexture();
    }, this.copyTextureToTexture3D = function(_, P, F = null, B = null, D = 0) {
      return _.isTexture !== true && (Kn("WebGLRenderer: copyTextureToTexture3D function signature has changed."), F = arguments[0] || null, B = arguments[1] || null, _ = arguments[2], P = arguments[3], D = arguments[4] || 0), Kn('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(_, P, F, B, D);
    }, this.initRenderTarget = function(_) {
      _e.get(_).__webglFramebuffer === void 0 && E.setupRenderTarget(_);
    }, this.initTexture = function(_) {
      _.isCubeTexture ? E.setTextureCube(_, 0) : _.isData3DTexture ? E.setTexture3D(_, 0) : _.isDataArrayTexture || _.isCompressedArrayTexture ? E.setTexture2DArray(_, 0) : E.setTexture2D(_, 0), xe.unbindTexture();
    }, this.resetState = function() {
      L = 0, w = 0, I = null, xe.reset(), Ze.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return en;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorspace = Ve._getDrawingBufferColorSpace(e), t.unpackColorSpace = Ve._getUnpackColorSpace();
  }
}
var xi = function() {
  var i = 0, e = document.createElement("div");
  e.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", e.addEventListener("click", function(u) {
    u.preventDefault(), n(++i % e.children.length);
  }, false);
  function t(u) {
    return e.appendChild(u.dom), u;
  }
  function n(u) {
    for (var f = 0; f < e.children.length; f++) e.children[f].style.display = f === u ? "block" : "none";
    i = u;
  }
  var r = (performance || Date).now(), s = r, a = 0, o = t(new xi.Panel("FPS", "#0ff", "#002")), l = t(new xi.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) var c = t(new xi.Panel("MB", "#f08", "#201"));
  return n(0), { REVISION: 16, dom: e, addPanel: t, showPanel: n, begin: function() {
    r = (performance || Date).now();
  }, end: function() {
    a++;
    var u = (performance || Date).now();
    if (l.update(u - r, 200), u >= s + 1e3 && (o.update(a * 1e3 / (u - s), 100), s = u, a = 0, c)) {
      var f = performance.memory;
      c.update(f.usedJSHeapSize / 1048576, f.jsHeapSizeLimit / 1048576);
    }
    return u;
  }, update: function() {
    r = this.end();
  }, domElement: e, setMode: n };
};
xi.Panel = function(i, e, t) {
  var n = 1 / 0, r = 0, s = Math.round, a = s(window.devicePixelRatio || 1), o = 80 * a, l = 48 * a, c = 3 * a, u = 2 * a, f = 3 * a, d = 15 * a, m = 74 * a, v = 30 * a, x = document.createElement("canvas");
  x.width = o, x.height = l, x.style.cssText = "width:80px;height:48px";
  var p = x.getContext("2d");
  return p.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif", p.textBaseline = "top", p.fillStyle = t, p.fillRect(0, 0, o, l), p.fillStyle = e, p.fillText(i, c, u), p.fillRect(f, d, m, v), p.fillStyle = t, p.globalAlpha = 0.9, p.fillRect(f, d, m, v), { dom: x, update: function(h, b) {
    n = Math.min(n, h), r = Math.max(r, h), p.fillStyle = t, p.globalAlpha = 1, p.fillRect(0, 0, o, d), p.fillStyle = e, p.fillText(s(h) + " " + i + " (" + s(n) + "-" + s(r) + ")", c, u), p.drawImage(x, f + a, d, m - a, v, f, d, m - a, v), p.fillRect(f + m - a, d, a, v), p.fillStyle = t, p.globalAlpha = 0.9, p.fillRect(f + m - a, d, a, s((1 - h / b) * v));
  } };
};
/**
* lil-gui
* https://lil-gui.georgealways.com
* @version 0.17.0
* @author George Michael Brower
* @license MIT
*/
class Wt {
  constructor(e, t, n, r, s = "div") {
    this.parent = e, this.object = t, this.property = n, this._disabled = false, this._hidden = false, this.initialValue = this.getValue(), this.domElement = document.createElement("div"), this.domElement.classList.add("controller"), this.domElement.classList.add(r), this.$name = document.createElement("div"), this.$name.classList.add("name"), Wt.nextNameID = Wt.nextNameID || 0, this.$name.id = "lil-gui-name-" + ++Wt.nextNameID, this.$widget = document.createElement(s), this.$widget.classList.add("widget"), this.$disable = this.$widget, this.domElement.appendChild(this.$name), this.domElement.appendChild(this.$widget), this.parent.children.push(this), this.parent.controllers.push(this), this.parent.$children.appendChild(this.domElement), this._listenCallback = this._listenCallback.bind(this), this.name(n);
  }
  name(e) {
    return this._name = e, this.$name.innerHTML = e, this;
  }
  onChange(e) {
    return this._onChange = e, this;
  }
  _callOnChange() {
    this.parent._callOnChange(this), this._onChange !== void 0 && this._onChange.call(this, this.getValue()), this._changed = true;
  }
  onFinishChange(e) {
    return this._onFinishChange = e, this;
  }
  _callOnFinishChange() {
    this._changed && (this.parent._callOnFinishChange(this), this._onFinishChange !== void 0 && this._onFinishChange.call(this, this.getValue())), this._changed = false;
  }
  reset() {
    return this.setValue(this.initialValue), this._callOnFinishChange(), this;
  }
  enable(e = true) {
    return this.disable(!e);
  }
  disable(e = true) {
    return e === this._disabled || (this._disabled = e, this.domElement.classList.toggle("disabled", e), this.$disable.toggleAttribute("disabled", e)), this;
  }
  show(e = true) {
    return this._hidden = !e, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  hide() {
    return this.show(false);
  }
  options(e) {
    const t = this.parent.add(this.object, this.property, e);
    return t.name(this._name), this.destroy(), t;
  }
  min(e) {
    return this;
  }
  max(e) {
    return this;
  }
  step(e) {
    return this;
  }
  decimals(e) {
    return this;
  }
  listen(e = true) {
    return this._listening = e, this._listenCallbackID !== void 0 && (cancelAnimationFrame(this._listenCallbackID), this._listenCallbackID = void 0), this._listening && this._listenCallback(), this;
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
    const e = this.save();
    e !== this._listenPrevValue && this.updateDisplay(), this._listenPrevValue = e;
  }
  getValue() {
    return this.object[this.property];
  }
  setValue(e) {
    return this.object[this.property] = e, this._callOnChange(), this.updateDisplay(), this;
  }
  updateDisplay() {
    return this;
  }
  load(e) {
    return this.setValue(e), this._callOnFinishChange(), this;
  }
  save() {
    return this.getValue();
  }
  destroy() {
    this.listen(false), this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1), this.parent.$children.removeChild(this.domElement);
  }
}
class ep extends Wt {
  constructor(e, t, n) {
    super(e, t, n, "boolean", "label"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "checkbox"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$input.addEventListener("change", () => {
      this.setValue(this.$input.checked), this._callOnFinishChange();
    }), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.checked = this.getValue(), this;
  }
}
function Ns(i) {
  let e, t;
  return (e = i.match(/(#|0x)?([a-f0-9]{6})/i)) ? t = e[2] : (e = i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) ? t = parseInt(e[1]).toString(16).padStart(2, 0) + parseInt(e[2]).toString(16).padStart(2, 0) + parseInt(e[3]).toString(16).padStart(2, 0) : (e = i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) && (t = e[1] + e[1] + e[2] + e[2] + e[3] + e[3]), !!t && "#" + t;
}
const tp = { isPrimitive: true, match: (i) => typeof i == "string", fromHexString: Ns, toHexString: Ns }, Si = { isPrimitive: true, match: (i) => typeof i == "number", fromHexString: (i) => parseInt(i.substring(1), 16), toHexString: (i) => "#" + i.toString(16).padStart(6, 0) }, np = { isPrimitive: false, match: Array.isArray, fromHexString(i, e, t = 1) {
  const n = Si.fromHexString(i);
  e[0] = (n >> 16 & 255) / 255 * t, e[1] = (n >> 8 & 255) / 255 * t, e[2] = (255 & n) / 255 * t;
}, toHexString: ([i, e, t], n = 1) => Si.toHexString(i * (n = 255 / n) << 16 ^ e * n << 8 ^ t * n << 0) }, ip = { isPrimitive: false, match: (i) => Object(i) === i, fromHexString(i, e, t = 1) {
  const n = Si.fromHexString(i);
  e.r = (n >> 16 & 255) / 255 * t, e.g = (n >> 8 & 255) / 255 * t, e.b = (255 & n) / 255 * t;
}, toHexString: ({ r: i, g: e, b: t }, n = 1) => Si.toHexString(i * (n = 255 / n) << 16 ^ e * n << 8 ^ t * n << 0) }, rp = [tp, Si, np, ip];
class sp extends Wt {
  constructor(e, t, n, r) {
    var s;
    super(e, t, n, "color"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "color"), this.$input.setAttribute("tabindex", -1), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$text = document.createElement("input"), this.$text.setAttribute("type", "text"), this.$text.setAttribute("spellcheck", "false"), this.$text.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this.$display.appendChild(this.$input), this.$widget.appendChild(this.$display), this.$widget.appendChild(this.$text), this._format = (s = this.initialValue, rp.find((a) => a.match(s))), this._rgbScale = r, this._initialValueHexString = this.save(), this._textFocused = false, this.$input.addEventListener("input", () => {
      this._setValueFromHexString(this.$input.value);
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$text.addEventListener("input", () => {
      const a = Ns(this.$text.value);
      a && this._setValueFromHexString(a);
    }), this.$text.addEventListener("focus", () => {
      this._textFocused = true, this.$text.select();
    }), this.$text.addEventListener("blur", () => {
      this._textFocused = false, this.updateDisplay(), this._callOnFinishChange();
    }), this.$disable = this.$text, this.updateDisplay();
  }
  reset() {
    return this._setValueFromHexString(this._initialValueHexString), this;
  }
  _setValueFromHexString(e) {
    if (this._format.isPrimitive) {
      const t = this._format.fromHexString(e);
      this.setValue(t);
    } else this._format.fromHexString(e, this.getValue(), this._rgbScale), this._callOnChange(), this.updateDisplay();
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale);
  }
  load(e) {
    return this._setValueFromHexString(e), this._callOnFinishChange(), this;
  }
  updateDisplay() {
    return this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale), this._textFocused || (this.$text.value = this.$input.value.substring(1)), this.$display.style.backgroundColor = this.$input.value, this;
  }
}
class qr extends Wt {
  constructor(e, t, n) {
    super(e, t, n, "function"), this.$button = document.createElement("button"), this.$button.appendChild(this.$name), this.$widget.appendChild(this.$button), this.$button.addEventListener("click", (r) => {
      r.preventDefault(), this.getValue().call(this.object);
    }), this.$button.addEventListener("touchstart", () => {
    }, { passive: true }), this.$disable = this.$button;
  }
}
class ap extends Wt {
  constructor(e, t, n, r, s, a) {
    super(e, t, n, "number"), this._initInput(), this.min(r), this.max(s);
    const o = a !== void 0;
    this.step(o ? a : this._getImplicitStep(), o), this.updateDisplay();
  }
  decimals(e) {
    return this._decimals = e, this.updateDisplay(), this;
  }
  min(e) {
    return this._min = e, this._onUpdateMinMax(), this;
  }
  max(e) {
    return this._max = e, this._onUpdateMinMax(), this;
  }
  step(e, t = true) {
    return this._step = e, this._stepExplicit = t, this;
  }
  updateDisplay() {
    const e = this.getValue();
    if (this._hasSlider) {
      let t = (e - this._min) / (this._max - this._min);
      t = Math.max(0, Math.min(t, 1)), this.$fill.style.width = 100 * t + "%";
    }
    return this._inputFocused || (this.$input.value = this._decimals === void 0 ? e : e.toFixed(this._decimals)), this;
  }
  _initInput() {
    this.$input = document.createElement("input"), this.$input.setAttribute("type", "number"), this.$input.setAttribute("step", "any"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$widget.appendChild(this.$input), this.$disable = this.$input;
    const e = (u) => {
      const f = parseFloat(this.$input.value);
      isNaN(f) || (this._snapClampSetValue(f + u), this.$input.value = this.getValue());
    };
    let t, n, r, s, a, o = false;
    const l = (u) => {
      if (o) {
        const f = u.clientX - t, d = u.clientY - n;
        Math.abs(d) > 5 ? (u.preventDefault(), this.$input.blur(), o = false, this._setDraggingStyle(true, "vertical")) : Math.abs(f) > 5 && c();
      }
      if (!o) {
        const f = u.clientY - r;
        a -= f * this._step * this._arrowKeyMultiplier(u), s + a > this._max ? a = this._max - s : s + a < this._min && (a = this._min - s), this._snapClampSetValue(s + a);
      }
      r = u.clientY;
    }, c = () => {
      this._setDraggingStyle(false, "vertical"), this._callOnFinishChange(), window.removeEventListener("mousemove", l), window.removeEventListener("mouseup", c);
    };
    this.$input.addEventListener("input", () => {
      let u = parseFloat(this.$input.value);
      isNaN(u) || (this._stepExplicit && (u = this._snap(u)), this.setValue(this._clamp(u)));
    }), this.$input.addEventListener("keydown", (u) => {
      u.code === "Enter" && this.$input.blur(), u.code === "ArrowUp" && (u.preventDefault(), e(this._step * this._arrowKeyMultiplier(u))), u.code === "ArrowDown" && (u.preventDefault(), e(this._step * this._arrowKeyMultiplier(u) * -1));
    }), this.$input.addEventListener("wheel", (u) => {
      this._inputFocused && (u.preventDefault(), e(this._step * this._normalizeMouseWheel(u)));
    }, { passive: false }), this.$input.addEventListener("mousedown", (u) => {
      t = u.clientX, n = r = u.clientY, o = true, s = this.getValue(), a = 0, window.addEventListener("mousemove", l), window.addEventListener("mouseup", c);
    }), this.$input.addEventListener("focus", () => {
      this._inputFocused = true;
    }), this.$input.addEventListener("blur", () => {
      this._inputFocused = false, this.updateDisplay(), this._callOnFinishChange();
    });
  }
  _initSlider() {
    this._hasSlider = true, this.$slider = document.createElement("div"), this.$slider.classList.add("slider"), this.$fill = document.createElement("div"), this.$fill.classList.add("fill"), this.$slider.appendChild(this.$fill), this.$widget.insertBefore(this.$slider, this.$input), this.domElement.classList.add("hasSlider");
    const e = (d) => {
      const m = this.$slider.getBoundingClientRect();
      let v = (x = d, p = m.left, h = m.right, b = this._min, A = this._max, (x - p) / (h - p) * (A - b) + b);
      var x, p, h, b, A;
      this._snapClampSetValue(v);
    }, t = (d) => {
      e(d.clientX);
    }, n = () => {
      this._callOnFinishChange(), this._setDraggingStyle(false), window.removeEventListener("mousemove", t), window.removeEventListener("mouseup", n);
    };
    let r, s, a = false;
    const o = (d) => {
      d.preventDefault(), this._setDraggingStyle(true), e(d.touches[0].clientX), a = false;
    }, l = (d) => {
      if (a) {
        const m = d.touches[0].clientX - r, v = d.touches[0].clientY - s;
        Math.abs(m) > Math.abs(v) ? o(d) : (window.removeEventListener("touchmove", l), window.removeEventListener("touchend", c));
      } else d.preventDefault(), e(d.touches[0].clientX);
    }, c = () => {
      this._callOnFinishChange(), this._setDraggingStyle(false), window.removeEventListener("touchmove", l), window.removeEventListener("touchend", c);
    }, u = this._callOnFinishChange.bind(this);
    let f;
    this.$slider.addEventListener("mousedown", (d) => {
      this._setDraggingStyle(true), e(d.clientX), window.addEventListener("mousemove", t), window.addEventListener("mouseup", n);
    }), this.$slider.addEventListener("touchstart", (d) => {
      d.touches.length > 1 || (this._hasScrollBar ? (r = d.touches[0].clientX, s = d.touches[0].clientY, a = true) : o(d), window.addEventListener("touchmove", l, { passive: false }), window.addEventListener("touchend", c));
    }, { passive: false }), this.$slider.addEventListener("wheel", (d) => {
      if (Math.abs(d.deltaX) < Math.abs(d.deltaY) && this._hasScrollBar) return;
      d.preventDefault();
      const m = this._normalizeMouseWheel(d) * this._step;
      this._snapClampSetValue(this.getValue() + m), this.$input.value = this.getValue(), clearTimeout(f), f = setTimeout(u, 400);
    }, { passive: false });
  }
  _setDraggingStyle(e, t = "horizontal") {
    this.$slider && this.$slider.classList.toggle("active", e), document.body.classList.toggle("lil-gui-dragging", e), document.body.classList.toggle("lil-gui-" + t, e);
  }
  _getImplicitStep() {
    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1;
  }
  _onUpdateMinMax() {
    !this._hasSlider && this._hasMin && this._hasMax && (this._stepExplicit || this.step(this._getImplicitStep(), false), this._initSlider(), this.updateDisplay());
  }
  _normalizeMouseWheel(e) {
    let { deltaX: t, deltaY: n } = e;
    return Math.floor(e.deltaY) !== e.deltaY && e.wheelDelta && (t = 0, n = -e.wheelDelta / 120, n *= this._stepExplicit ? 1 : 10), t + -n;
  }
  _arrowKeyMultiplier(e) {
    let t = this._stepExplicit ? 1 : 10;
    return e.shiftKey ? t *= 10 : e.altKey && (t /= 10), t;
  }
  _snap(e) {
    const t = Math.round(e / this._step) * this._step;
    return parseFloat(t.toPrecision(15));
  }
  _clamp(e) {
    return e < this._min && (e = this._min), e > this._max && (e = this._max), e;
  }
  _snapClampSetValue(e) {
    this.setValue(this._clamp(this._snap(e)));
  }
  get _hasScrollBar() {
    const e = this.parent.root.$children;
    return e.scrollHeight > e.clientHeight;
  }
  get _hasMin() {
    return this._min !== void 0;
  }
  get _hasMax() {
    return this._max !== void 0;
  }
}
class op extends Wt {
  constructor(e, t, n, r) {
    super(e, t, n, "option"), this.$select = document.createElement("select"), this.$select.setAttribute("aria-labelledby", this.$name.id), this.$display = document.createElement("div"), this.$display.classList.add("display"), this._values = Array.isArray(r) ? r : Object.values(r), this._names = Array.isArray(r) ? r : Object.keys(r), this._names.forEach((s) => {
      const a = document.createElement("option");
      a.innerHTML = s, this.$select.appendChild(a);
    }), this.$select.addEventListener("change", () => {
      this.setValue(this._values[this.$select.selectedIndex]), this._callOnFinishChange();
    }), this.$select.addEventListener("focus", () => {
      this.$display.classList.add("focus");
    }), this.$select.addEventListener("blur", () => {
      this.$display.classList.remove("focus");
    }), this.$widget.appendChild(this.$select), this.$widget.appendChild(this.$display), this.$disable = this.$select, this.updateDisplay();
  }
  updateDisplay() {
    const e = this.getValue(), t = this._values.indexOf(e);
    return this.$select.selectedIndex = t, this.$display.innerHTML = t === -1 ? e : this._names[t], this;
  }
}
class lp extends Wt {
  constructor(e, t, n) {
    super(e, t, n, "string"), this.$input = document.createElement("input"), this.$input.setAttribute("type", "text"), this.$input.setAttribute("aria-labelledby", this.$name.id), this.$input.addEventListener("input", () => {
      this.setValue(this.$input.value);
    }), this.$input.addEventListener("keydown", (r) => {
      r.code === "Enter" && this.$input.blur();
    }), this.$input.addEventListener("blur", () => {
      this._callOnFinishChange();
    }), this.$widget.appendChild(this.$input), this.$disable = this.$input, this.updateDisplay();
  }
  updateDisplay() {
    return this.$input.value = this.getValue(), this;
  }
}
let Ja = false;
class Ws {
  constructor({ parent: e, autoPlace: t = e === void 0, container: n, width: r, title: s = "Controls", injectStyles: a = true, touchStyles: o = true } = {}) {
    if (this.parent = e, this.root = e ? e.root : this, this.children = [], this.controllers = [], this.folders = [], this._closed = false, this._hidden = false, this.domElement = document.createElement("div"), this.domElement.classList.add("lil-gui"), this.$title = document.createElement("div"), this.$title.classList.add("title"), this.$title.setAttribute("role", "button"), this.$title.setAttribute("aria-expanded", true), this.$title.setAttribute("tabindex", 0), this.$title.addEventListener("click", () => this.openAnimated(this._closed)), this.$title.addEventListener("keydown", (l) => {
      l.code !== "Enter" && l.code !== "Space" || (l.preventDefault(), this.$title.click());
    }), this.$title.addEventListener("touchstart", () => {
    }, { passive: true }), this.$children = document.createElement("div"), this.$children.classList.add("children"), this.domElement.appendChild(this.$title), this.domElement.appendChild(this.$children), this.title(s), o && this.domElement.classList.add("allow-touch-styles"), this.parent) return this.parent.children.push(this), this.parent.folders.push(this), void this.parent.$children.appendChild(this.domElement);
    this.domElement.classList.add("root"), !Ja && a && (function(l) {
      const c = document.createElement("style");
      c.innerHTML = l;
      const u = document.querySelector("head link[rel=stylesheet], head style");
      u ? document.head.insertBefore(c, u) : document.head.appendChild(c);
    }('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"\u2195";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"\u25BE";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"\u25B8"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"\u2713";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'), Ja = true), n ? n.appendChild(this.domElement) : t && (this.domElement.classList.add("autoPlace"), document.body.appendChild(this.domElement)), r && this.domElement.style.setProperty("--width", r + "px"), this.domElement.addEventListener("keydown", (l) => l.stopPropagation()), this.domElement.addEventListener("keyup", (l) => l.stopPropagation());
  }
  add(e, t, n, r, s) {
    if (Object(n) === n) return new op(this, e, t, n);
    const a = e[t];
    switch (typeof a) {
      case "number":
        return new ap(this, e, t, n, r, s);
      case "boolean":
        return new ep(this, e, t);
      case "string":
        return new lp(this, e, t);
      case "function":
        return new qr(this, e, t);
    }
    console.error(`gui.add failed
	property:`, t, `
	object:`, e, `
	value:`, a);
  }
  addColor(e, t, n = 1) {
    return new sp(this, e, t, n);
  }
  addFolder(e) {
    return new Ws({ parent: this, title: e });
  }
  load(e, t = true) {
    return e.controllers && this.controllers.forEach((n) => {
      n instanceof qr || n._name in e.controllers && n.load(e.controllers[n._name]);
    }), t && e.folders && this.folders.forEach((n) => {
      n._title in e.folders && n.load(e.folders[n._title]);
    }), this;
  }
  save(e = true) {
    const t = { controllers: {}, folders: {} };
    return this.controllers.forEach((n) => {
      if (!(n instanceof qr)) {
        if (n._name in t.controllers) throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);
        t.controllers[n._name] = n.save();
      }
    }), e && this.folders.forEach((n) => {
      if (n._title in t.folders) throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);
      t.folders[n._title] = n.save();
    }), t;
  }
  open(e = true) {
    return this._closed = !e, this.$title.setAttribute("aria-expanded", !this._closed), this.domElement.classList.toggle("closed", this._closed), this;
  }
  close() {
    return this.open(false);
  }
  show(e = true) {
    return this._hidden = !e, this.domElement.style.display = this._hidden ? "none" : "", this;
  }
  hide() {
    return this.show(false);
  }
  openAnimated(e = true) {
    return this._closed = !e, this.$title.setAttribute("aria-expanded", !this._closed), requestAnimationFrame(() => {
      const t = this.$children.clientHeight;
      this.$children.style.height = t + "px", this.domElement.classList.add("transition");
      const n = (s) => {
        s.target === this.$children && (this.$children.style.height = "", this.domElement.classList.remove("transition"), this.$children.removeEventListener("transitionend", n));
      };
      this.$children.addEventListener("transitionend", n);
      const r = e ? this.$children.scrollHeight : 0;
      this.domElement.classList.toggle("closed", !e), requestAnimationFrame(() => {
        this.$children.style.height = r + "px";
      });
    }), this;
  }
  title(e) {
    return this._title = e, this.$title.innerHTML = e, this;
  }
  reset(e = true) {
    return (e ? this.controllersRecursive() : this.controllers).forEach((t) => t.reset()), this;
  }
  onChange(e) {
    return this._onChange = e, this;
  }
  _callOnChange(e) {
    this.parent && this.parent._callOnChange(e), this._onChange !== void 0 && this._onChange.call(this, { object: e.object, property: e.property, value: e.getValue(), controller: e });
  }
  onFinishChange(e) {
    return this._onFinishChange = e, this;
  }
  _callOnFinishChange(e) {
    this.parent && this.parent._callOnFinishChange(e), this._onFinishChange !== void 0 && this._onFinishChange.call(this, { object: e.object, property: e.property, value: e.getValue(), controller: e });
  }
  destroy() {
    this.parent && (this.parent.children.splice(this.parent.children.indexOf(this), 1), this.parent.folders.splice(this.parent.folders.indexOf(this), 1)), this.domElement.parentElement && this.domElement.parentElement.removeChild(this.domElement), Array.from(this.children).forEach((e) => e.destroy());
  }
  controllersRecursive() {
    let e = Array.from(this.controllers);
    return this.folders.forEach((t) => {
      e = e.concat(t.controllersRecursive());
    }), e;
  }
  foldersRecursive() {
    let e = Array.from(this.folders);
    return this.folders.forEach((t) => {
      e = e.concat(t.foldersRecursive());
    }), e;
  }
}
const Xs = new ac();
Xs.add(new gc());
const gt = new Pt(75, window.innerWidth / window.innerHeight, 0.1, 1e3);
gt.position.set(0, 2, 3.5);
const fr = new Qf();
fr.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(fr.domElement);
window.addEventListener("resize", () => {
  gt.aspect = window.innerWidth / window.innerHeight, gt.updateProjectionMatrix(), fr.setSize(window.innerWidth, window.innerHeight);
});
const cp = new ci(), up = new hc({ wireframe: true }), No = new Gt(cp, up);
No.position.y = 0.5;
Xs.add(No);
const Fo = new xi();
document.body.appendChild(Fo.dom);
const hp = new Ws(), _n = hp.addFolder("Camera");
_n.add(gt.position, "x", -10, 10);
_n.add(gt.position, "y", -10, 10);
_n.add(gt.position, "z", -10, 10);
_n.add(gt, "fov", 0, 180, 0.01).onChange(() => {
  gt.updateProjectionMatrix();
});
_n.add(gt, "aspect", 1e-5, 10).onChange(() => {
  gt.updateProjectionMatrix();
});
_n.add(gt, "near", 0.01, 10).onChange(() => {
  gt.updateProjectionMatrix();
});
_n.add(gt, "far", 0.01, 10).onChange(() => {
  gt.updateProjectionMatrix();
});
_n.open();
function Oo() {
  requestAnimationFrame(Oo), fr.render(Xs, gt), Fo.update();
}
Oo();
